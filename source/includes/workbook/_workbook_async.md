## Работа с асинхронным обменом

Асинхронный обмен предоставляет возможность получать результаты длительных запросов асинхронно, 
не используя многократные запросы с листанием. 
В случае большого объема выгружаемых данных использование асинхронного обмена позволяет получить тот же результат, 
затрачивая меньше времени в блокировках, ожидая результат.

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

Делаем запрос остатков с параметром `async=true`. Параметры запроса **limit** и **offset** указывать не нужно, так как отчет будет построен полностью. 
В заголовке ответа **Location** будет ссылка на получение результата асинхронной задачи, а в заголовке **Сontent-Location** хранится ссылка на получение статуса выполнения асинхронной задачи.
создание новых асинхронных задач ограничено текущими лимитами на выполнение и при повторении запроса будет ошибка 61002: 
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

### 3. Получение результата задачи

> Запрос на получение результата Асинхронной задачи

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/async/498b8673-0308-11e6-9464-e4de00000089/result"
  -H "Authorization: Bearer <Access-Token>"
```

> Ответ

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
    "size": 3
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

Результат запроса по URL из поля **resultUrl** содержит тело, которое является требуемым отчетом. 
Полученный отчет имеет незначительные отличия от синхронного варианта: **meta** не содержит полей **limit** и **offset**, а массив **rows** не ограничивается 1000 элементов.л 
