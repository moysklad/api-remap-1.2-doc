## Веб-хуки на изменение остатков
Для удобства отслеживания изменения остатков по номенклатуре был добавлен веб-хук на изменения остатков.
Данный веб-хук приходит от одной до пяти минут при условии, что он включен и за данное время были изменены остатки у номенклатуры.

На платных аккаунтах с помощью средств JSON API вы можете: получать, создавать, обновлять, отключать и удалять веб-хуки на изменение остатков. 
На бесплатных аккаунтах доступны только операции получения и удаления веб хуков на изменение остатков. 
**Во время нахождения аккаунта на бесплатном тарифе отправка веб хуков на изменение остатков не производится.** 
Управление веб-хуками на изменение остатков доступно **только администратору аккаунта**. 
Ключевым словом для веб-хуков на изменение остатков в рамках JSON API является **webhooktock**.

### Веб-хуки на изменение остатков 

> Пример того, в каком виде будут передаваться данные:

> POST https://example.com/webhook_path?requestId=640569eb-522d-427a-b07e-fa757c5d4217

```json
{
  "accountId": "f71cb8b6-f7b5-11ec-ac12-000f000000eb",
  "stockType": "stock",
  "reportType": "all",
  "reportUrl": "https://online.moysklad.ru/api/remap/1.2/report/stock/all/current?fromDate=2022-09-24 19:14:32"
}
```

#### Атрибуты отправляемого сообщения

| Название          | Тип                                                       | Описание                                                                                                                                                                                                 |
| ----------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **accountId**     | UUID                                                      | ID учетной записи Кассира<br>`+Обязательное при ответе`                                                                                                                                                  |
| **stockType**     | Enum                                                      | Тип остатков, изменение которых вызвает веб-хук на изменение остатков. Возможные значения: `[stock]`<br>`+Обязательное при ответе`                                                                       |
| **reportType**    | Enum                                                      | Тип отчета остатков, к которым привязан веб-хук на изменение остатков. Возможные значения: `[all, bystore]`<br>`+Обязательное при ответе`                                                                |
| **reportUrl**     | String(255)                                               | URL на получения данных по [изменившейся номенклатуре за указанный период](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-ostatki-tekuschie-ostatki)<br>`+Обязательное при ответе`    |

Параметр запроса **requestId** - идентификатор уведомления.
В ответ на наш запрос мы ожидаем получить ответ с HTTP статусом 200 или 204 в течение 1500 миллисекунд.
При невалидном ответе от клиентского приложения наша система осуществляет еще 3 попытки отправки.
Данные попытки осуществляются последовательно, без таймаутов между ними. Если все попытки закончились неудачно или истекло время ожидания ответа - 
данное уведомление считается неотправленным и в дальнейшем удаляется, в клиентское приложение оно отправлено не будет,
т.к. проблема на стороне клиентского приложения.
Чтобы попытки отправки уведомления не заканчивались неудачей из-за истечения времени ожидания ответа сервером, рекомендуется разделить прием веб-хуков на изменение остатков и их обработку.
Понять, что уведомление о событии было отправлено повторно, можно по параметру запроса *requestId* - при повторной отправке уведомления идентификатор останется прежним.
С помощью API версии 1.2 можно просматривать, изменять, удалять веб-хуки на изменение остатков созданные только с помощью API версии 1.2.

#### Заголовок временного отключения через API
Через JSON API или POS API при запросах можно отключить уведомления веб-хуков на изменение остатков в контексте данного запроса. Для этого нужно указать заголовок `X-Lognex-WebHook-Disable` с произвольным значением.

#### SSL Handshake
Если на адресе получателя используется SSL сертификат, то необходимо удостовериться, что сертификат имеет корректные Certification Paths. Проверить сертификат можно в сервисе https://www.ssllabs.com/ssltest/index.html

#### Атрибуты сущности

| Название               | Тип                                                       | Описание                                                                                                                                                                                                                                                                                                           |
|------------------------| :-------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**          | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе`                                                                                                                                                                                                                                                                    |
| **authorApplication**  | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Приложения, создавшего веб-хук на изменение остатков<br>                                                                                                                                                                                                                                                |
| **enabled**            | Boolean                                                   | Флажок состояние веб-хука на изменение остатков (включен / отключен)<br>`+Обязательное при ответе`                                                                                                                                                                                                                 |
| **stockType**          | Enum                                                      | Тип остатков, изменение которых вызывает веб-хук на изменение остатков. Возможные значения: `[stock]`<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                                                                                                      |
| **reportType**         | Enum                                                      | Тип отчета остатков, к которым привязан веб-хук на изменение остатков. Возможные значения: `[all, bystore]`<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                                                                                               |
| **id**                 | UUID                                                      | ID веб-хука на изменение остатков<br>`+Обязательное при ответе`                                                                                                                                                                                                                                                    |
| **meta**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные веб-хука на изменение остатков<br>`+Обязательное при ответе`                                                                                                                                                                                                                                            |
| **url**                | URL                                                       | URL, по которому будет происходить запрос. Допустимая длина до 255 символов<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                                                                                                                               |

### Получить список веб-хуков на изменение остатков 
> Запрос на получение всех веб-хуков на изменение остатков на данной учетной записи.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка веб-хуков на изменение остатков.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/metadata",
    "type": "webhookstock",
    "mediaType": "application/json",
    "size": 3,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/aec51463-bbd2-11e6-8a84-bae500000003",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/metadata",
        "type": "webhookstock",
        "mediaType": "application/json"
      },
      "authorApplication" : {
        "meta" : {
          "href" : "https://online.moysklad.ru/api/remap/1.2/entity/application/9e1ad712-3e45-4679-8896-7159973a8ef5",
          "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/application/metadata",
          "type" : "application",
          "mediaType" : "application/json"
        }
      },
      "id": "aec51463-bbd2-11e6-8a84-bae500000003",
      "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
      "stockType": "stock",
      "reportType": "all",
      "url": "http://www.example.com",
      "enabled": true
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/d08f9217-bbd2-11e6-8a84-bae500000004",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/metadata",
        "type": "webhookstock",
        "mediaType": "application/json"
      },
      "id": "428cca39-4349-11ed-ac14-000d00000000",
      "accountId": "8afc8c88-38a5-11ed-ac14-000f00000001",
      "stockType": "stock",
      "reportType": "all",
      "url": "http://www.example.com",
      "enabled": true
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/d946c7ff-bbd2-11e6-8a84-bae500000005",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/metadata",
        "type": "webhookstock",
        "mediaType": "application/json"
      },
      "id": "d946c7ff-bbd2-11e6-8a84-bae500000005",
      "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
      "stockType": "stock",
      "reportType": "all",
      "url": "http://www.example.com",
      "enabled": true
    }
  ]
}
```

### Создать веб-хук на изменение остатков
Пример запроса на создание нового веб-хука на изменение остатков. Убедитесь, что создаете еще не существующий веб-хук на изменение остатков:
сочетание **stockType**, **reportType**, **url** должно быть уникальным. Всего на одно уникальное сочетание **stockType**, 
**reportType** может быть создано не более 5 веб-хуков на изменение остатков с разными **url** для пользователей и не более 1 для приложения.

> Пример запроса на создание нового веб-хука на изменение остатков.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "url": "http://www.example.com",
            "enabled": true,
            "reportType": "all",
            "stockType": "stock"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного веб-хука на изменение остатков.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/d08f9217-bbd2-11e6-8a84-bae500000004",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/metadata",
    "type": "webhookstock",
    "mediaType": "application/json"
  },
  "id": "d08f9217-bbd2-11e6-8a84-bae500000004",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "stockType": "stock",
  "reportType": "all",
  "url": "http://www.example.com",
  "enabled": true
}
```

### Веб-хук на изменение остатков

### Массовое создание и обновление веб-хуков на изменение остатков
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) веб-хуков на изменение остатков.
В теле запроса нужно передать массив, содержащий JSON представления веб-хуков на изменение остатков, которые вы хотите создать или обновить.
Обновляемые веб-хуки на изменение остатков должны содержать идентификатор в виде метаданных.

**Параметры**

| Параметр | Описание                                                                                    |
| :------- | :------------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id веб-хука на изменение остатков. |

> Пример создания и обновления нескольких веб-хуков на изменение остатков

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "url": "http://www.example.com",
              "stockType": "stock",
              "reportType": "all",
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/aec51463-bbd2-11e6-8a84-bae500000003",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/metadata",
                "type": "webhookstock",
                "mediaType": "application/json"
              },
              "url": "http://www.example.com",
              "stockType": "stock",
              "reportType": "bystore",
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных веб-хуков на изменение остатков.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/d08f9217-bbd2-11e6-8a84-bae500000004",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/metadata",
      "type": "webhookstock",
      "mediaType": "application/json"
    },
    "id": "d08f9217-bbd2-11e6-8a84-bae500000004",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "stockType": "stock",
    "reportType": "all",
    "url": "http://www.example.com",
    "enabled": true
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/aec51463-bbd2-11e6-8a84-bae500000003",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/metadata",
      "type": "webhookstock",
      "mediaType": "application/json"
    },
    "id": "aec51463-bbd2-11e6-8a84-bae500000003",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "stockType": "stock",
    "reportType": "bystore",
    "url": "http://www.example.com",
    "enabled": true
  }
]

```

### Получить отдельный веб-хук на изменение остатков

**Параметры**

| Параметр | Описание                                                                                    |
| :------- | :------------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id веб-хука на изменение остатков. |
 
> Запрос на получение отдельного веб-хука на изменение остатков с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление веб-хука на изменение остатков с указанным id.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/aec51463-bbd2-11e6-8a84-bae500000003",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/metadata",
    "type": "webhookstock",
    "mediaType": "application/json"
  },
  "id": "aec51463-bbd2-11e6-8a84-bae500000003",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "stockType": "stock",
  "reportType": "bystore",
  "url": "http://www.example.com",
  "enabled": true
}
```

### Изменить веб-хук на изменение остатков
Пример запроса на изменение сведений о веб-хуке на изменение остатков.

**Параметры**

| Параметр | Описание                                                                                    |
| :------- | :------------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id веб-хука на изменение остатков. |

> Пример запроса на изменение веб-хука на изменение остатков.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "url": "http://www.example.com",
            "stockType": "stock",
            "reportType": "bystore"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление измененного веб-хука на изменение остатков.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/aec51463-bbd2-11e6-8a84-bae500000003",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/metadata",
    "type": "webhookstock",
    "mediaType": "application/json"
  },
  "id": "aec51463-bbd2-11e6-8a84-bae500000003",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "stockType": "stock",
  "reportType": "bystore",
  "url": "http://www.example.com",
  "enabled": true
}
```

### Отключить веб-хук на изменение остатков
Пример запроса на отключение веб-хука на изменение остатков.

**Параметры**

| Параметр | Описание                                                                         |
| :------- | :------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id веб-хука на изменение остатков. |

> Пример запроса на отключение веб-хука на изменение остатков.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "enabled": false
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отключенного веб-хука на изменение остатков.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/aec51463-bbd2-11e6-8a84-bae500000003",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/metadata",
    "type": "webhookstock",
    "mediaType": "application/json"
  },
  "id": "aec51463-bbd2-11e6-8a84-bae500000003",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "stockType": "stock",
  "reportType": "bystore",
  "url": "http://www.example.com",
  "enabled": false
}
```

### Удалить веб-хук на изменение остатков 

**Параметры**

| Параметр | Описание                                                                                    |
| :------- | :------------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id веб-хука на изменение остатков. |

> Пример запроса на удаление веб-хука на изменение остатков с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление веб-хука на изменение остатков.

### Массовое удаление Веб-хук на изменение остатков

В теле запроса нужно передать массив, содержащий JSON метаданных Веб-хук на изменение остатков, которые вы хотите удалить.


> Запрос на массовое удаление Веб-хук на изменение остатков. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/metadata",
            "type": "webhookstock",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/metadata",
            "type": "webhookstock",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Веб-хук на изменение остатков.

```json
[
  {
    "info":"Сущность 'webhookstock' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'webhookstock' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
```


