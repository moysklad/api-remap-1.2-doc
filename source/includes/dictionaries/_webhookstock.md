## Вебхук на изменение остатков
Вебхуки позволяют получать уведомления об изменениях остатков товаров. Уведомления отправляются пользователю каждые 1-5 минут, если произошло изменение остатков. Чтобы получать уведомления, создайте вебхук на изменения остатков и включите его. Ключевое слово для вебхуков на изменение остатков в рамках JSON API — **webhookstock**. 

Набор возможностей также зависит от вашего тарифа:

- При платных тарифах можно: получать, создавать, обновлять, отключать и удалять вебхуки на изменение остатков. 
- При бесплатном тарифе отправка вебхуков не производится, нельзя создать новый или изменить существующий вебхук. 

### Описание вебхука на изменение остатков 

> Пример того, в каком виде будут передаваться данные: POST https://example.com/webhook_path?requestId=640569eb-522d-427a-b07e-fa757c5d4217

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
| **accountId**     | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе`                                                                                                                                                  |
| **stockType**     | Enum                                                      | Тип остатков, изменение которых вызывает вебхук на изменение остатков. Возможные значения: `[stock]`<br>`+Обязательное при ответе`                                                                       |
| **reportType**    | Enum                                                      | Тип отчета остатков, к которым привязан вебхук на изменение остатков. Возможные значения: `[all, bystore]`<br>`+Обязательное при ответе`                                                                |
| **reportUrl**     | String(255)                                               | URL на получения данных по [изменившейся номенклатуре за указанный период](../reports/#otchety-otchet-ostatki-kratkij-otchet-ob-ostatkah)<br>`+Обязательное при ответе`    |

Параметр запроса **requestId** — идентификатор уведомления. 

При отправке запроса система ожидает получить ответ от клиентского приложения с HTTP-статусом 200 или 204 в течение 1500 миллисекунд. Если система получает неверный ответ, она осуществляет еще 3 попытки отправки. Попытки осуществляются последовательно, без таймаутов между ними. Если все попытки закончились неудачно или истекло время ожидания ответа, уведомление считается неотправленным и удаляется. 

Чтобы попытки отправки уведомления не заканчивались неудачей из-за истечения времени ожидания ответа сервером, разделите прием вебхуков и их обработку. Параметр запроса requestId говорит о том, что уведомление о событии было отправлено повторно. При повторной отправке уведомления идентификатор останется прежним.

#### SSL Handshake
Если на адресе получателя используется SSL сертификат, то необходимо удостовериться, что сертификат имеет корректные Certification Paths. Проверить сертификат можно в сервисе https://www.ssllabs.com/ssltest/index.html

#### Атрибуты сущности

| Название               | Тип                                                       | Описание                                                                                                                                                                                                                                                                                                           |
|------------------------| :-------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**          | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе`                                                                                                                                                                                                                                                                    |
| **authorApplication**  | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Приложения, создавшего вебхук на изменение остатков<br>`+Только для чтения`                                                                                                                                                                                                                                                |
| **enabled**            | Boolean                                                   | Флажок состояния вебхука на изменение остатков (включен / отключен)<br>`+Обязательное при ответе`                                                                                                                                                                                                                 |
| **stockType**          | Enum                                                      | Тип остатков, изменение которых вызывает вебхук. Возможные значения: `[stock]`<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                                                                                                      |
| **reportType**         | Enum                                                      | Тип отчета остатков, к которым привязан вебхук на изменение остатков. Возможные значения: `[all, bystore]`<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                                                                                               |
| **id**                 | UUID                                                      | ID вебхука на изменение остатков<br>`+Обязательное при ответе`                                                                                                                                                                                                                                                    |
| **meta**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные вебхука на изменение остатков<br>`+Обязательное при ответе`                                                                                                                                                                                                                                            |
| **url**                | URL                                                       | URL, по которому будет происходить обработка вебхука. Допустимая длина до 255 символов<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                                                                                                                               |

### Получить список вебхуков на изменение остатков 
> Запрос на получение всех вебхуков на изменение остатков на данной учетной записи.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка вебхуков на изменение остатков.

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
      "accountId": "8afc8c88-38a5-11ed-ac14-000f00000001",
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
      "id": "d08f9217-bbd2-11e6-8a84-bae500000004",
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
      "accountId": "8afc8c88-38a5-11ed-ac14-000f00000001",
      "stockType": "stock",
      "reportType": "all",
      "url": "http://www.example.com",
      "enabled": true
    }
  ]
}
```

### Создать вебхук на изменение остатков
Сочетание **stockType**, **reportType**, **url** должно быть уникальным. 
Всего на одно уникальное сочетание **stockType**, **reportType** может быть создано не более 5 вебхуков на изменение 
остатков с разными **url** для пользователей и не более 1 для приложения.

> Пример запроса на создание нового вебхука на изменение остатков.

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
Успешный запрос. Результат - JSON представление созданного вебхука на изменение остатков.

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

### Массовое создание и обновление вебхуков на изменение остатков
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) вебхуков на изменение остатков.
В теле запроса нужно передать массив, содержащий JSON представления вебхуков на изменение остатков, которые вы хотите создать или обновить.
Обновляемые вебхуки на изменение остатков должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких вебхуков на изменение остатков

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock"
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
Успешный запрос. Результат - массив JSON представлений созданных и обновленных вебхуков на изменение остатков.

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

### Получить отдельный вебхук на изменение остатков

**Параметры**

| Параметр | Описание                                                                                    |
| :------- | :------------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id вебхука на изменение остатков. |
 
> Запрос на получение отдельного вебхука на изменение остатков с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление вебхука на изменение остатков с указанным id.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/7944ef04-f831-11e5-7a69-971500188b19",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/metadata",
    "type": "webhookstock",
    "mediaType": "application/json"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b19",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "stockType": "stock",
  "reportType": "bystore",
  "url": "http://www.example.com",
  "enabled": true
}
```

### Изменить вебхук на изменение остатков
Пример запроса на изменение сведений о вебхуке на изменение остатков.

**Параметры**

| Параметр | Описание                                                                                    |
| :------- | :------------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id вебхука на изменение остатков. |

> Пример запроса на изменение вебхука на изменение остатков.

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
Успешный запрос. Результат - JSON представление измененного вебхука на изменение остатков.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/7944ef04-f831-11e5-7a69-971500188b19",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/metadata",
    "type": "webhookstock",
    "mediaType": "application/json"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b19",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "stockType": "stock",
  "reportType": "bystore",
  "url": "http://www.example.com",
  "enabled": true
}
```

### Отключить вебхук на изменение остатков
Пример запроса на отключение вебхука на изменение остатков.

**Параметры**

| Параметр | Описание                                                                         |
| :------- | :------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id вебхука на изменение остатков. |

> Пример запроса на отключение вебхука на изменение остатков.

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
Успешный запрос. Результат - JSON представление отключенного вебхука на изменение остатков.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/7944ef04-f831-11e5-7a69-971500188b19",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/metadata",
    "type": "webhookstock",
    "mediaType": "application/json"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b19",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "stockType": "stock",
  "reportType": "bystore",
  "url": "http://www.example.com",
  "enabled": false
}
```

### Удалить вебхук на изменение остатков 

**Параметры**

| Параметр | Описание                                                                                    |
| :------- | :------------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id вебхука на изменение остатков. |

> Пример запроса на удаление вебхука на изменение остатков с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/webhookstock/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление вебхука на изменение остатков.

### Массовое удаление вебхуков на изменение остатков

В теле запроса нужно передать массив, содержащий JSON метаданных вебхуков на изменение остатков, которые вы хотите удалить.


> Запрос на массовое удаление вебхука на изменение остатков. 

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

> Успешный запрос. Результат - JSON информация об удалении вебхука на изменение остатков.

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


