## Работа с асинхронным обменом

Асинхронный обмен предоставляет возможность получать результаты длительных запросов асинхронно, 
не используя многократные запросы с листанием. 
В случае большого объема выгружаемых данных использование асинхронного обмена позволяет получить тот же результат, 
затрачивая меньше времени в блокировках.

Список запросов, для которых реализована возможность работы в асинхронном режиме, вы можете посмотреть в [документации](../#mojsklad-json-api-asinhronnyj-obmen).

Рассмотрим преимущество работы с JSON API в асинхронном режиме на некотором примере. 
Допустим, требуется получить информацию по остаткам всей номенклатуры, чтобы пополнить резервы в магазинах.  
При большом количестве номенклатуры и складов, ранее необходимо было запрашивать [отчет остатков по складам](../reports/#otchety-otchet-ostatki-poluchit-ostatki-po-skladam) 
несколько раз, указывая параметр **offset**, чтобы получить отчеты по всем позициям. Так как построение объемных отчетов занимает 
некоторое время, вплоть до 5 минут, сбор всей информации может занять продолжительное время. 
Кроме того, каждый отдельный запрос вынуждает держать открытое соединение в ожидании результата. 

Асинхронный обмен предлагает иную последовательность действий.

### 1. Создание асинхронной задачи

> Запрос на создание Асинхронной задачи

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/stock/bystore?async=true"
  -H "Authorization: Bearer <Access-Token>"
```

> Ответ

```shell
Без тела

Заголовки:
Location: https://online.moysklad.ru/api/remap/1.2/async/498b8673-0308-11e6-9464-e4de00000089/result
Content-Location: https://online.moysklad.ru/api/remap/1.2/async/498b8673-0308-11e6-9464-e4de00000089
```

Делаем запрос остатков с параметром `async=true`. Параметры строки запроса **limit** и **offset** указывать не нужно, так как отчет будет построен полностью. 
В заголовке ответа **Location** будет ссылка на получение результата асинхронной задачи, а в заголовке **Сontent-Location** хранится ссылка на получение статуса выполнения асинхронной задачи.
Пока задачи находятся в процессе выполнения, создание новых асинхронных задач будет [ограничено текущими лимитами](../#mojsklad-json-api-obschie-swedeniq-ogranicheniq) на очередь 
асинхронных задач и при повторении запроса будет ошибка 61002: 
`Ошибка при создании асинхронной задачи: превышено ограничение на количество одновременно выполняемых асинхронных операций.`

### 2. Опрос состояния асинхронной задачи

> Опрос состояния асинхронной задачи

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/async/498b8673-0308-11e6-9464-e4de00000089"
  -H "Authorization: Bearer <Access-Token>"
```

> Ответ в случае, когда задача находится в процессе выполнения

```json
{
  "id": "498b8673-0308-11e6-9464-e4de00000089",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "owner": {
      "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=98fa7086-8aa1-11e8-7210-075e0000002c"
      }
  },
  "state" : "PROCESSING",
  "request": "https://online.moysklad.ru/api/remap/1.2/report/stock/bystore?async=true"
}
```

> Ответ в случае, когда задача готова

```json
{
  "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/async/498b8673-0308-11e6-9464-e4de00000089",
      "type": "async",
      "mediaType": "application/json"
  },
  "id": "498b8673-0308-11e6-9464-e4de00000089",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "owner": {
      "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=98fa7086-8aa1-11e8-7210-075e0000002c"
      }
  },
  "state" : "DONE",
  "request": "https://online.moysklad.ru/api/remap/1.2/report/stock/bystore?async=true",
  "resultUrl": "https://online.moysklad.ru/api/remap/1.2/async/f97aa1fb-2e58-11e6-8a84-bae500000002/result",
  "deletionDate": "2021-02-16 16:21:09" 
}
```

Чтобы определить, когда асинхронная задача будет выполнена, необходимо опрашивать статус выполнения асинхронной задачи. 
Это можно сделать, отправляя запросы на URL из заголовка **Content-Location** ответа на запрос создания задачи.
Если статус задачи (поле **state**) имеет значение `PROCESSING`, значит результат задачи еще не готов, и запрос на получение результата нужно повторить через некоторое время.
Как только статус задачи примет значение `DONE` - результат задачи готов, и можно переходить к получению результата.

> Запрос на получение Асинхронных задач с результатом

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/async?filter=state=done&deletionDate<2021-02-16 16:21:09"
  -H "Authorization: Bearer <Access-Token>"
```

> Ответ

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/context/employee",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/async?filter=state=done;deletionDate%3C2021-02-16%2016:21:09",
    "type": "async",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/async/baade4ee-a1d0-11eb-ac12-000b00000000",
        "type": "async",
        "mediaType": "application/json"
      },
      "id": "baade4ee-a1d0-11eb-ac12-000b00000000",
      "accountId": "4f811ce5-983a-11eb-0a80-1d0d00000002",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/4fe188f9-983a-11eb-0a80-39d600000034",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=4fe188f9-983a-11eb-0a80-39d600000034"
        }
      },
      "state": "DONE",
      "request": "https://online.moysklad.ru/api/remap/1.2/report/stock/all?async=true",
      "resultUrl": "https://online.moysklad.ru/api/remap/1.2/async/baade4ee-a1d0-11eb-ac12-000b00000000/result",
      "deletionDate": "2021-04-16 16:07:13.027"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/async/d2bfbf9f-a1e0-11eb-ac12-000b00000000",
        "type": "async",
        "mediaType": "application/json"
      },
      "id": "d2bfbf9f-a1e0-11eb-ac12-000b00000000",
      "accountId": "4f811ce5-983a-11eb-0a80-1d0d00000002",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/4fe188f9-983a-11eb-0a80-39d600000034",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=4fe188f9-983a-11eb-0a80-39d600000034"
        }
      },
      "state": "DONE",
      "request": "https://online.moysklad.ru/api/remap/1.2/report/stock/bystore?async=true",
      "resultUrl": "https://online.moysklad.ru/api/remap/1.2/async/d2bfbf9f-a1e0-11eb-ac12-000b00000000/result",
      "deletionDate": "2021-04-16 16:07:19.301"
    }
  ]
}
```

Также можно следить за статусами выполнения нескольких задач. Для этого можно отправлять запросы на ресурс получения статусов асинхронных задач.
Допустим, мы хотим получить все асинхронные задачи, для которых доступен результат. Для этого укажем фильтр на статус задачи со значением `DONE` и на время удаления меньше текущего времени.

### 3. Получение результата задачи

> Запрос на получение результата Асинхронной задачи

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/async/498b8673-0308-11e6-9464-e4de00000089/result"
  -H "Authorization: Bearer <Access-Token>"
```

> Ответ

```shell
302 FOUND
Без тела

Заголовки:
Location: https://123.selcdn.ru/batch-prod/batch/002b9772-8583-11eb-ac12-000c00000001/apiasynctaskresult/4d363a5f-ae72-4a14-9951-7038a4a67060?temp_url_sig=a24e12250f7428c2cc212362cebc97ed43333491&temp_url_expires=1616516805&filename=asynctask_d1746c6c-8bf3-11eb-ac12-000b00000001_result.json
```

> Пример полученного отчета

```json
{
  "context": {
    "employee": {
      "href": "https://online.moysklad.ru/api/remap/1.2/context/employee",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/report/stock/bystore?async=true",
    "type": "stockbystore",
    "mediaType": "application/json",
    "size": 2135
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/c02e3a5c-007e-11e6-9464-e4de00000006?expand=supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "stockByStore": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/86c857d6-0302-11e6-9464-e4de00000072",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json"
          },
          "name": "Не основной склад",
          "stock": -30,
          "reserve": 0,
          "inTransit": 0
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json"
          },
          "name": "Основной склад",
          "stock": 0,
          "reserve": 0,
          "inTransit": 0
        }
      ]
    },
    ...
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/cc99c055-fa34-11e5-9464-e4de00000069?expand=supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "stockByStore": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/86c857d6-0302-11e6-9464-e4de00000072",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json"
          },
          "name": "Не основной склад",
          "stock": 0,
          "reserve": 0,
          "inTransit": 0
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json"
          },
          "name": "Основной склад",
          "stock": 4,
          "reserve": 0,
          "inTransit": 0
        }
      ]
    }
  ]
}
```

Когда статус задачи принимает значение `DONE`, запрос на получение статуса выполнения задачи содержит дополнительно 2 поля:

* **resultUrl** - URL, по которому доступен результат выполненной задачи. 
Совпадает с URL из заголовка **Location** ответа на запрос создания задачи.
* **deletionDate** - дата, после которой результат задачи станет недоступен. Время жизни результата выполнения задачи составляет 1 час.

Результат запроса по URL из поля **resultUrl** является перенаправлением со статусом `302 FOUND`, и в заголовке **Location** находится ссылка на файл результата задачи. 
Большинство HTTP-клиентов выполняют перенаправление автоматически. С момента получения ссылка действительна 5 минут. 

Если ваш клиент не выполняет перенаправления автоматически, то для получения требуемого отчета остается отправить GET запрос на URL из заголовка **Location**.

Полученный отчет имеет незначительные отличия от синхронного варианта: **meta** не содержит полей **limit** и **offset**, а массив **rows** не ограничивается 1000 элементов.

Если статус задачи имеет значение `API_ERROR`, то в json ответе на запрос получения результата задачи будет указана [ошибка](../#mojsklad-json-api-oshibki), 
аналогичная той, которую вернул синхронный вызов ресурса.

> Пример запроса на получение результата Асинхронной задачи со статусом API_ERROR

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/async/498b8673-0308-11e6-9464-e4de00000089/result"
  -H "Authorization: Bearer <Access-Token>"
```

> Пример результата задачи, который содержит описание ошибки 
Response 403 Forbidden 
 

```json
{
    "errors": [
        {
            "error": "Доступ запрещен: у вас нет прав на просмотр данного объекта",
            "code": 1016
        }
    ]
}
```

Если в процессе выполнения задачи что-то пошло не так, например, у пользователя нет доступа к отчету или не указаны обязательные заголовки,
то задача будет помечена как успешно выполненная, а результат будет содержать текст с описанием ошибки.

### 4. Настройка вебхука на завершение выполнения Асинхронной задачи

Для того, чтобы не опрашивать эндпоинт статуса выполняемой асинхронной задачи можно настроить [вебхук](../dictionaries/#suschnosti-vebhuki) на оповещение, когда задача будет завершена.
Как и для обычных вебхуков, необходимо задать:
 
 * тип сущности `entityType`, в нашем случае это будет `async`
 * действие `action`, на которое должен сработать вебхук, в данном случае это будет `PROCESSED`
 * и адрес `url` куда будет отправлено сообщение при срабатывание вебхука
 
> Пример запроса на создание вебхука на событие выполненияАсинхронной задачи

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/webhook"
  -H "Authorization: Bearer <Access-Token>"
  -H "Content-Type: application/json"
  -d '{
          "url": "http://some_url.ru",
          "action": "PROCESSED",
          "entityType": "async"
      }'
```   

> Response 200 
> Пример полученного отчета

```json
{
    "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/c6010bf9-a683-11eb-ac12-000900000001",
        "metadataHref": "https://online.moysklad.ru//api/remap/1.2/entity/webhook/metadata",
        "type": "webhook",
        "mediaType": "application/json"
    },
    "id": "c6010bf9-a683-11eb-ac12-000900000001",
    "accountId": "6c240ac7-a683-11eb-ac12-000c00000000",
    "entityType": "async",
    "url": "http://some_url.ru",
    "method": "POST",
    "enabled": true,
    "action": "PROCESSED"
}
```

На этом настройка оповещения о завершении выполнения асинхронной закончена закончена. Тепрерь вам будут приходить вебхуки, 
на указанный адрес, каждый раз, когда завершается выполнение асинхронной задачи. Таким образом вам не понадобится запрашивать 
состояние асинхронной задачи, до тех пор, пока не придет вебхук.
