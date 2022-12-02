## Асинхронный обмен

В JSON API можно выполнить некоторые запросы асинхронно. Это позволяет проводить выгрузку больших коллекций, 
не прибегая к листанию, если работа в реальном времени не критична. 

Асинхронный обмен поддерживается не для всех запросов. Список запросов, которые могут быть выполнены асинхронно:

+ [Отчет Остатки](reports/#otchety-otchet-ostatki)
+ [Отчет Прибыльность](reports/#otchety-otchet-pribyl-nost)
+ [Отчет Деньги](reports/#otchety-otchet-den-gi)
+ [Отчет Показатели продаж и заказов](reports/#otchety-pokazateli-prodazh-i-zakazow)
+ [Отчет Показатели контрагентов](reports/#otchety-otchet-pokazateli-kontragentow) (кроме [выборочных показателей](reports/#otchety-otchet-pokazateli-kontragentow-vyborochnye-pokazateli-kontragentow))
+ [Отчет Показатели](reports/#otchety-pokazateli)
+ [Получение списка Контрагентов](dictionaries/#suschnosti-kontragent-poluchit-spisok-kontragentow)
+ [Получение Ассортимента](dictionaries/#suschnosti-assortiment)

После выполнения запроса в асинхронном режиме результат доступен в течение 1 часа. 

На количество задач в очереди и число одновременно выполняющихся асинхронных задач установлены [ограничения](#mojsklad-json-api-obschie-swedeniq-ogranicheniq).

На данный момент в процессе асинхронного выполнения запроса могут возникать дубли позиций коллекции, 
если параллельно с подготовкой результата добавляются новые элементы. 
Кроме того, элементы могут отсутствовать, если параллельно с обработкой Асинхронной задачи удаляются связанные с задачей сущности 
(например, удаление товара в процессе подготовки Отчета Остатки).

### Выполнение запроса в асинхронном режиме

> Пример запроса на создание Асинхронной задачи

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/stock/bystore?async=true"
  -H "Authorization: Bearer <Access-Token>"
```

> Response 202
Успешное создание Асинхронной задачи

```shell
Location: https://online.moysklad.ru/api/remap/1.2/async/498b8673-0308-11e6-9464-e4de00000089/result
Content-Location: https://online.moysklad.ru/api/remap/1.2/async/498b8673-0308-11e6-9464-e4de00000089
```

Чтобы выполнить запрос в асинхронном режиме, нужно в параметрах строки запроса указать `async=true`. 
Указание параметров строки запроса **offset** и **limit**, свойственных для синхронных запросов, является ошибкой.

**Параметры**

| Параметр                       | Описание                                                                                                                      |
| ------------------------------ | :---------------------------------------------------------------------------------------------------------------------------- |
| **async**                      | `boolean`<br>`true` - будет создана Асинхронная задача.<br>`false` (по умолчанию) - запрос будет выполнен в синхронном режиме |

Результатом выполнения запроса будет создание Асинхронной задачи, которая будет помещена в очередь. В ответе будут содержаться заголовки, содержащие URL статуса и результата задачи.

| Параметр             | Описание                                      |
| :------------------- | :-------------------------------------------- |
| **Location**         | URL результата выполнения Асинхронной задачи. |
| **Content-Location** | URL статуса Асинхронной задачи.               |

### Асинхронная задача

Асинхронная задача содержит в себе информацию о создателе задачи, ее текущем статусе, наличии ответа и другую информацию.

#### Атрибуты сущности

| Название         | Тип                                                     | Описание                                                                                                                                                                                                                     |
| ---------------- |:--------------------------------------------------------| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **accountId**    | UUID                                                    | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                         |
| **deletionDate** | DateTime                                                | Дата, после которой результат выполнения задачи станет недоступен. Содержится в ответе, если поле **state** имеет значение `DONE`<br>`+Только для чтения`                                                                    |
| **errors**       | Object                                                  | json ошибки апи, если поле **state** имеет значение `API_ERROR`<br>`+Только для чтения`                                                                                                                                      |
| **id**           | UUID                                                    | ID Асинхронной задачи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                     |
| **meta**         | [Meta](#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Асинхронной задачи<br>`+Обязательное при ответе`                                                                                                                                                                  |
| **owner**        | [Meta](#mojsklad-json-api-obschie-swedeniq-metadannye)  | Пользователь или приложение, которые создали Асинхронную задачу<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                           |
| **request**      | String                                                  | URL запроса, по которому создана Асинхронная задача<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                       |
| **resultUrl**    | String                                                  | Ссылка на результат выполнения задачи. Содержится в ответе, если поле **state** имеет значение `DONE`<br>`+Только для чтения`                                                                                                |
| **state**        | Enum                                                    | Статус выполнения Асинхронной задачи. [Подробнее тут](#mojsklad-json-api-asinhronnyj-obmen-asinhronnaq-zadacha-atributy-suschnosti-status-wypolneniq-asinhronnoj-zadachi)<br>`+Обязательное при ответе` `+Только для чтения` |

##### Статус выполнения Асинхронной задачи

| Значение                       | Описание                                                                                                         |
| ------------------------------ | :--------------------------------------------------------------------------------------------------------------- |
| **PENDING**                    | Задача находится в очереди                                                                                       |
| **PROCESSING**                 | Задача находится в обработке, результат еще не готов                                                             |
| **DONE**                       | Задача выполнена успешно                                                                                         |
| **ERROR**                      | Задача не была выполнена в результате внутренней ошибки. В этом случае нужно попробовать запустить задачу заново |
| **CANCEL**                     | Задача была отменена                                                                                             |
| **API_ERROR**                  | Задача была завершена с ошибкой апи                                                                              |

### Статусы Асинхронных задач

> Пример запроса на получение списка статусов Асинхронных задач

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/async/"
  -H "Authorization: Bearer <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка статусов Асинхронных задач.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/async",
    "type": "async",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/async/1f26ca08-a293-11eb-ac12-000a00000000",
        "type": "async",
        "mediaType": "application/json"
      },
      "id": "1f26ca08-a293-11eb-ac12-000a00000000",
      "accountId": "4f811ce5-983a-11eb-0a80-1d0d00000002",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/application/e715fb95-983a-11eb-0a80-321a00000004",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/application/metadata",
          "type": "application",
          "mediaType": "application/json"
        }
      },
      "state": "PROCESSING",
      "request": "https://online.moysklad.ru/api/remap/1.2/report/stock/bystore?async=true"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/async/b3ff426e-a291-11eb-ac12-000a00000000",
        "type": "async",
        "mediaType": "application/json"
      },
      "id": "b3ff426e-a291-11eb-ac12-000a00000000",
      "accountId": "4f811ce5-983a-11eb-0a80-1d0d00000002",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/acc59092-a291-11eb-ac12-000d00000014",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=acc59092-a291-11eb-ac12-000d00000014"
        }
      },
      "state": "DONE",
      "request": "https://online.moysklad.ru/api/remap/1.2/report/stock/bystore?async=true",
      "resultUrl": "https://online.moysklad.ru/api/remap/1.2/async/b3ff426e-a291-11eb-ac12-000a00000000/result",
      "deletionDate": "2021-04-21 15:07:05.996"
    }
  ]
}
```

Запрос на получение списка статусов выполнения Асинхронной задачи. 
Результат содержит статусы Асинхронных задач за последнюю неделю. 

Доступна фильтрация по полям **state**, **request**, **deletionDate**. 

### Получение статуса Асинхронной задачи

> Пример запроса на получение статуса Асинхронной задачи

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/async/498b8673-0308-11e6-9464-e4de00000089"
  -H "Authorization: Bearer <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление статуса выполнения Асинхронной задачи.

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

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление статуса выполнения Асинхронной задачи со статусом API_ERROR.

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
  "state" : "API_ERROR",
  "request": "https://online.moysklad.ru/api/remap/1.2/report/sales/plotseries?momentFrom=2018-09-06&interval=hour&async=true",
  "errors": [
      {
          "error": "Ошибка: не указан обязательный параметр для запроса показателей: momentTo.",
          "code": 39000
      }
  ]
}
```

Запрос на получение статуса выполнения Асинхронной задачи.

**Параметры**

| Параметр | Описание                                                                                   |
| :------- | :----------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 498b8673-0308-11e6-9464-e4de00000089* id Асинхронной задачи. |

### Получение результата выполнения Асинхронной задачи

> Пример запроса на получение результата Асинхронной задачи

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/async/498b8673-0308-11e6-9464-e4de00000089/result"
  -H "Authorization: Bearer <Access-Token>"
```

> Response 200
Успешный запрос. Результат - файл с результатом выполнения Асинхронной задачи в формате json.

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
    "size": 2
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

Запрос на получение результата выполнения Асинхронной задачи. 

**Параметры**

| Параметр | Описание                                                                                   |
| :------- | :----------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 498b8673-0308-11e6-9464-e4de00000089* id Асинхронной задачи. |

Если статус задачи имеет значение `DONE` и время жизни результата не истекло, ответом на запрос будет перенаправление на ссылку загрузки результата выполнения Асинхронной задачи.
С момента получения ссылка действительна 5 минут. 
Большинство HTTP-клиентов осуществляют перенаправление автоматически, но если ваш клиент этого не делает, 
то результат выполнения запроса будет иметь статус `302 FOUND` с заголовком **Location**, в котором и содержится ссылка на результат. 
После наступления даты, указанной в поле **deletionDate**, результат становится недоступен. 

Если статус задачи имеет значение `API_ERROR`, то в json ответе на запрос получения результата задачи будет указана [ошибка](#mojsklad-json-api-oshibki), 
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


### Вебхуки Асинхронной задачи

Настроить [вебхуки](dictionaries/#suschnosti-vebhuki) для асинхронной задачи можно аналогично остальным сущностям, но есть ряд исключений:

* для асинхронных задач нельзя настроить вебхук на событие удаления, так как удаление асинхронных задач происходит автоматически
* для асинхронных задач в вебхуках появляется новое событие `PROCESSED`. Оно означает, что задача завершилась и можно узнать ее статус
* вебхук на обновление приходит, когда меняется статус асинхронной задачи

При формировании запроса на создание вебхука в поле `entityType` нужно указать тип `async` - асинхронная задача.

 > Пример запроса на создание вебхука на событие PROCESSED для Асинхронной задачи

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
> Пример полученного ответа

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

На указанный в поле `url` адрес при срабатывании вебхука будет приходить сообщение, у которого в `meta` в поле `href` указан url 
на получение статуса асинхронной задачи.

> Пример результата срабатывания вебхука

```json
{
  "events": [
    {
      "meta": {
        "type": "async",
        "href": "https://online.moysklad.ru/api/remap/1.2/async/91adc76b-a71c-11eb-ac12-000e00000000"
      },
      "action": "PROCESSED",
      "accountId": "6c240ac7-a683-11eb-ac12-000c00000000"
    }
  ]
}
``` 

### Отмена Асинхронной задачи

> Пример запроса на отмену Асинхронной задачи

```shell
curl -X PUT
  "https://online.moysklad.ru/api/remap/1.2/async/498b8673-0308-11e6-9464-e4de00000089/cancel"
  -H "Authorization: Bearer <Access-Token>"
```

> Response 204
Успешная отмена задачи

Запрос на отмену находящейся в очереди `PENDING` или в процессе обработки `PROCESSING` Асинхронной задачи.

**Параметры**

| Параметр | Описание                                                                                   |
| :------- | :----------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 498b8673-0308-11e6-9464-e4de00000089* id Асинхронной задачи. |
