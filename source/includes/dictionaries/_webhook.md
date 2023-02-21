## Вебхуки
С помощью средств JSON API можно работать с вебхуками. 

Вебхук — это механизм отправки уведомлений. Уведомление отправляется при наступлении в системе изменения, которое отслеживает вебхук. Например, если подключить вебхук на товары, при изменении наименования товара, вы получаете уведомление со ссылкой на измененный товар. Подробнее о работе с вебхуками читайте [Вебхуки](../workbook/#workbook-vebhuki).

С помощью API версии 1.2 можно просматривать, изменять, удалять вебхуки, созданные только с помощью API версии 1.2. 

Набор возможностей также зависит от вашего тарифа. При бесплатном тарифе отправка вебхуков не производится, нельзя создать новый или изменить существующий вебхук. 

Управление вебхуками доступно **только администратору аккаунта**. 

### Пример вебхука

Пример того, в каком виде будут передаваться данные:

> POST https://example.com/webhook_path?requestId=640569eb-522d-427a-b07e-fa757c5d4217

```json
{
  "auditContext": {
    "meta": {
      "type": "audit",
      "href": "https://online.moysklad.ru/api/remap/1.2/audit/75fe3b73-db16-11eb-c0a8-800d00000004"
    },
    "moment": "2021-07-21 15:51:16",
    "uid": "test@test"
  },
  "events": [
    {
      "meta": {
        "type": "product",
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/75c896d0-db16-11eb-c0a8-800d00000002"
      },
      "updatedFields": ["name", "description"],
      "action": "UPDATE",
      "accountId": "9171a53c-b719-11eb-c0a8-800d00000001"
    }
  ]
}
```

#### Атрибуты сущности отправляемого вебхука

| Название         | Тип    | Описание                                                                        |
| ---------------- | :----- | :------------------------------------------------------------------------------ |
| **events**       | Object | Данные о событии, вызвавшем срабатывание вебхука<br>`+Обязательное при ответе` |
| **auditContext** | Object | Контекст аудита, соответствующий событию вебхука                               |

#### Атрибуты сущности событие

| Название          | Тип                                                       | Описание                                                                                                                                 |
| ----------------- | :-------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| **meta**          | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные измененной сущности<br>`+Обязательное при ответе`                                                                             |
| **action**        | Enum                                                      | Действие, которое вызвало срабатывание вебхука. Возможные значения: `[CREATE, UPDATE, DELETE, PROCESSED]`<br>`+Обязательное при ответе` |
| **accountId**     | UUID                                                      | ID учетной записи Кассира<br>`+Обязательное при ответе`                                                                                  |
| **updatedFields** | Array(String)                                             | Поля сущности, измененные пользователем                                                                                                  |

Для отображения атрибута сущности событие **updatedFields** нужно, чтобы вебхук имел **diffType=FIELDS** и **action=UPDATE** 

#### Атрибуты сущности контекст аудита
| Название   | Тип                                                       | Описание                                                            |
| ---------- | :-------------------------------------------------------- | :------------------------------------------------------------------ |
| **meta**   | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные контекста аудита<br>`+Обязательное при ответе`           |
| **uid**    | String(255)                                               | Логин Сотрудника<br>`+Обязательное при ответе` `+Только для чтения` |
| **moment** | DateTime                                                  | Дата изменения<br>`+Обязательное при ответе` `+Только для чтения`   |

В массиве **events** может быть несколько объектов. Параметр запроса **requestId** - идентификатор уведомления.

В ответ на наш запрос мы ожидаем получить ответ с HTTP статусом 200 или 204 в течение 1500 миллисекунд.
При невалидном ответе от клиентского приложения наша система осуществляет еще 3 попытки отправки.

Данные попытки осуществляются последовательно, без таймаутов между ними. Если все попытки закончились неудачно или истекло время ожидания ответа - 
данное уведомление считается неотправленным и в дальнейшем удаляется, в клиентское приложение оно отправлено не будет,
т.к. проблема на стороне клиентского приложения.

Чтобы попытки отправки уведомления не заканчивались неудачей из-за истечения времени ожидания ответа сервером, рекомендуется разделить прием вебхуков и их обработку.
Понять, что уведомление о событии было отправлено повторно, можно по параметру запроса **requestId** - при повторной отправке уведомления идентификатор останется прежним.

С помощью API версии 1.2 можно просматривать, изменять, удалять вебхуки созданные только с помощью API версии 1.2.

#### Заголовок временного отключения через API
Через JSON API или POS API при запросах можно отключить уведомления вебхуков в контексте данного запроса. Для этого нужно указать заголовок `X-Lognex-WebHook-Disable` с произвольным значением.

Отключать уведомления вебхуков следует только в случае крайней необходимости, так как это может повлиять на работу интеграций или отключить отправку критически важных уведомлений.

#### SSL Handshake
Если на адресе получателя используется SSL сертификат, то необходимо удостовериться, что сертификат имеет корректные Certification Paths. Проверить сертификат можно в сервисе https://www.ssllabs.com/ssltest/index.html

#### Атрибуты сущности

| Название               | Тип                                                       | Описание                                                                                                                                                                                                                                                                                                           |
|------------------------| :-------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**          | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе`                                                                                                                                                                                                                                                                    |
| **action**             | Enum                                                      | Действие, которое отслеживается вебхуком. Возможные значения: `[CREATE, UPDATE, DELETE, PROCESSED]`. Задать значение `PROCESSED` возможно только для [асинхронных задач](../#mojsklad-json-api-asinhronnyj-obmen)<br>`+Обязательное при ответе` `+Необходимо при создании` |
| **authorApplication**  | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Приложения, создавшего вебхук<br>                                                                                                                                                                                                                                                                      |
| **diffType**           | Enum                                                      | Режим отображения изменения сущности. Указывается только для действия `UPDATE`. Возможные значения: `[NONE, FIELDS]` (по умолчанию `NONE`)                                                                                                                                                                         |
| **enabled**            | Boolean                                                   | Флажок состояние вебхука (включен / отключен)<br>`+Обязательное при ответе`                                                                                                                                                                                                                                       |
| **entityType**         | String(255)                                               | Тип сущности, к которой привязан вебхук<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                                                                                                                                                                  |
| **id**                 | UUID                                                      | ID вебхука<br>`+Обязательное при ответе`                                                                                                                                                                                                                                                                          |
| **meta**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные вебхука<br>`+Обязательное при ответе`                                                                                                                                                                                                                                                                  |
| **method**             | Enum                                                      | HTTP метод, с которым будет происходить запрос. Возможные значения: `POST`<br>`+Обязательное при ответе`                                                                                                                                                                                                           |
| **url**                | URL                                                       | URL, по которому будет происходить запрос. Допустимая длина до 255 символов<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                                                                                                                                |

#### Доступные типы сущностей
Создание вебхуков доступно для всех типов сущностей и документов, кроме следующих:

* `webhook`
* `discount`

### Получить список вебхуков 
> Запрос на получение всех вебхуков на данной учетной записи.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/webhook"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка вебхуков.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhook",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/metadata",
    "type": "webhook",
    "mediaType": "application/json",
    "size": 3,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/aec51463-bbd2-11e6-8a84-bae500000003",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/metadata",
        "type": "webhook",
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
      "entityType": "demand",
      "url": "http://www.example.com",
      "method": "POST",
      "enabled": true,
      "action": "CREATE"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/d08f9217-bbd2-11e6-8a84-bae500000004",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/metadata",
        "type": "webhook",
        "mediaType": "application/json"
      },
      "id": "d08f9217-bbd2-11e6-8a84-bae500000004",
      "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
      "entityType": "supply",
      "url": "http://www.example.com",
      "method": "POST",
      "enabled": true,
      "action": "CREATE"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/d946c7ff-bbd2-11e6-8a84-bae500000005",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/metadata",
        "type": "webhook",
        "mediaType": "application/json"
      },
      "id": "d946c7ff-bbd2-11e6-8a84-bae500000005",
      "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
      "entityType": "cashin",
      "url": "http://www.example.com",
      "method": "POST",
      "enabled": true,
      "action": "UPDATE",
      "diffType": "NONE"
    }
  ]
}
```

### Создать вебхук 
Пример запроса на создание нового вебхука. Убедитесь, что создаете еще не существующий вебхук:
сочетание **entityType**, **action**, **url** должно быть уникальным. Всего на одно уникальное сочетание **entityType**, 
**action** может быть создано не более 5 вебхуков с разными **url** для пользователей и не более 1 для приложения.

> Пример запроса на создание нового вебхука.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/webhook"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "url": "http://www.example.com",
            "action": "CREATE",
            "entityType": "supply"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного вебхука.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/d08f9217-bbd2-11e6-8a84-bae500000004",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/metadata",
    "type": "webhook",
    "mediaType": "application/json"
  },
  "id": "d08f9217-bbd2-11e6-8a84-bae500000004",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "entityType": "supply",
  "url": "http://www.example.com",
  "method": "POST",
  "enabled": true,
  "action": "CREATE"
}
```

> Пример запроса на создание нового вебхука с отображением измененных полей.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/webhook"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "url": "http://www.example.com",
            "action": "UPDATE",
            "entityType": "supply",
            "diffType": "FIELDS"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного вебхука.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/d08f9217-bbd2-11e6-8a84-bae500000004",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/metadata",
    "type": "webhook",
    "mediaType": "application/json"
  },
  "id": "d08f9217-bbd2-11e6-8a84-bae500000004",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "entityType": "supply",
  "url": "http://www.example.com",
  "method": "POST",
  "enabled": true,
  "action": "UPDATE",
  "diffType": "FIELDS"
}
```

### Массовое создание и обновление вебхуков 
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) вебхуков.
В теле запроса нужно передать массив, содержащий JSON представления вебхуков, которые вы хотите создать или обновить.
Обновляемые вебхуки должны содержать идентификатор в виде метаданных.

**Параметры**

| Параметр | Описание                                                                         |
| :------- | :------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id вебхука. |

> Пример создания и обновления нескольких вебхуков

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/webhook/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "url": "http://www.example.com",
              "action": "CREATE",
              "entityType": "supply"
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/aec51463-bbd2-11e6-8a84-bae500000003",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/metadata",
                "type": "webhook",
                "mediaType": "application/json"
              },
              "url": "http://www.example.com",
              "action": "DELETE"
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных вебхуков.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/d08f9217-bbd2-11e6-8a84-bae500000004",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/metadata",
      "type": "webhook",
      "mediaType": "application/json"
    },
    "id": "d08f9217-bbd2-11e6-8a84-bae500000004",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "entityType": "supply",
    "url": "http://www.example.com",
    "method": "POST",
    "enabled": true,
    "action": "CREATE"
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/aec51463-bbd2-11e6-8a84-bae500000003",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/metadata",
      "type": "webhook",
      "mediaType": "application/json"
    },
    "id": "aec51463-bbd2-11e6-8a84-bae500000003",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "entityType": "demand",
    "url": "http://www.example.com",
    "method": "POST",
    "enabled": true,
    "action": "DELETE"
  }
]

```

### Получить отдельный вебхук

**Параметры**

| Параметр | Описание                                                                         |
| :------- | :------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id вебхука. |
 
> Запрос на получение отдельного вебхука с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/webhook/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление вебхука с указанным id.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/aec51463-bbd2-11e6-8a84-bae500000003",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/metadata",
    "type": "webhook",
    "mediaType": "application/json"
  },
  "id": "aec51463-bbd2-11e6-8a84-bae500000003",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "entityType": "demand",
  "url": "http://www.example.com",
  "method": "POST",
  "enabled": true,
  "action": "CREATE"
}
```

### Изменить вебхук 
Пример запроса на изменение сведений о вебхуке.

**Параметры**

| Параметр | Описание                                                                         |
| :------- | :------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id вебхука. |

> Пример запроса на изменение вебхука.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/webhook/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "url": "http://www.example.com",
            "action": "DELETE"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление измененного вебхука.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/aec51463-bbd2-11e6-8a84-bae500000003",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/metadata",
    "type": "webhook",
    "mediaType": "application/json"
  },
  "id": "aec51463-bbd2-11e6-8a84-bae500000003",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "entityType": "demand",
  "url": "http://www.example.com",
  "method": "POST",
  "enabled": true,
  "action": "DELETE"
}
```

### Отключить вебхук 
Пример запроса на отключение вебхука.

**Параметры**

| Параметр | Описание                                                                         |
| :------- | :------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id вебхука. |

> Пример запроса на отключение вебхука.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/webhook/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "enabled": false
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отключенного вебхука.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/aec51463-bbd2-11e6-8a84-bae500000003",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/metadata",
    "type": "webhook",
    "mediaType": "application/json"
  },
  "id": "aec51463-bbd2-11e6-8a84-bae500000003",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "entityType": "demand",
  "url": "http://www.example.com",
  "method": "POST",
  "enabled": false,
  "action": "DELETE"
}
```

### Удалить вебхук 

**Параметры**

| Параметр | Описание                                                                         |
| :------- | :------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id вебхука. |

> Пример запроса на удаление вебхука с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/webhook/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление вебхука.

### Массовое удаление вебхуков

В теле запроса нужно передать массив, содержащий JSON метаданных вебхуков, которые вы хотите удалить.


> Запрос на массовое удаление вебхуков. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/webhook/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/metadata",
            "type": "webhook",
            "mediaType": "application/json"
          }
        },  
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/metadata",
            "type": "webhook",
            "mediaType": "application/json"
          }
        }  
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении вебхуков.

```json
[
  {
    "info":"Сущность 'webhook' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'webhook' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
```
