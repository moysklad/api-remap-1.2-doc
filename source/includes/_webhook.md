## Веб-хуки
На платных аккаунтах с помощью средств JSON API вы можете: получать, создавать, обновлять, отключать и удалять веб-хуки. Управление веб-хуками доступно **только администратору аккаунта**.
Ключевым словом для веб-хуков в рамках JSON api является **webhook**.

### Веб-хуки 

> Пример того, в каком виде будут передаваться данные:

```json
{
 "events":
  [
   {"meta":
     {
       "type":"product",
       "href":"https://online.moysklad.ru/api/remap/1.2/entity/product/c1557cfb-c2cc-11e6-7a31-d0fd000f0b00"
     },
    "action": "DELETE",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001"
   }
  ]
}
```

В массиве **events** может быть несколько объектов.
В ответ на наш запрос мы ожидаем получить ответ с HTTP статусом 200 или 204.
С помощью API версии 1.2 можно просматривать, изменять, удалять веб-хуки созданные только с помощью API версии 1.2.

#### Заголовок временного отключения через API
Через JSON API или POS API при запросах можно отключить уведомления вебхуков в контексте данного запроса. Для этого нужно указать заголовок `X-Lognex-WebHook-Disable` с произвольным значением.

#### SSL Handshake
Если на адресе получателя используется SSL сертификат, то необходимо удостовериться, что сертификат имеет корректные Certification Paths. Проверить сертификат можно в сервисе https://www.ssllabs.com/ssltest/index.html

#### Атрибуты сущности
+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) веб-хука
+ **id** - id веб-хука
+ **accountId** - id учетной записи
+ **entityType** - тип сущности, к которой привязан веб-хук `Необходимое`
+ **url** - URL, по которому будет происходить запрос `Необходимое`
+ **method** - HTTP метод, с которым будет происходить запрос <br>
Возможные значения: `POST`
+ **enabled** - Флажок состояние веб-хука (включен / отключен) <br>
+ **action** - Действие, которое отслеживается веб-хуком `Необходимое` <br>
Возможные значения:  ``


### Получить список веб-хуков 
> Запрос на получение всех веб-хуков на данной учетной записи.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/webhook"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка веб-хуков.

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
      "action": "UPDATE"
    }
  ]
}
```

### Создать веб-хук 
Пример запроса на создание нового веб-хука. Убедитесь, что создаете еще не существующий веб-хук:
сочетание **entityType**, **action** должно быть уникальным.

> Пример запроса на создание нового веб-хука.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/webhook"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "url": "http://www.example.com",
            "action": "CREATE",
            "entityType": "supply"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного веб-хука.

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

### Веб-хук 

### Массовое создание и обновление веб-хуков 
[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) веб-хуков.
В теле запроса нужно передать массив, содержащий JSON представления веб-хуков, которые вы хотите создать или обновить.
Обновляемые веб-хуки должны содержать идентификатор в виде метаданных.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id веб-хука.|

> Пример создания и обновления нескольких веб-хуков

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/webhook/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Access-Token>"
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
Успешный запрос. Результат - массив JSON представлений созданных и обновленных веб-хуков.

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

### Получить отдельный веб-хук

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id веб-хука.|
 
> Запрос на получение отдельного веб-хука с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/webhook/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление веб-хука с указанным id.

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

### Обновить веб-хук 
Пример запроса на обновление сведений о веб-хуке.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id веб-хука.|

> Пример запроса на обновление веб-хука.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/webhook/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "url": "http://www.example.com",
            "action": "DELETE"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного веб-хука.

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

### Отключить веб-хук 
Пример запроса на отключение веб-хука.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id веб-хука.|

> Пример запроса на отключение веб-хука.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/webhook/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "enabled": false
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отключенного веб-хука.

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

### Удалить веб-хук 

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id веб-хука.|

> Пример запроса на удаление веб-хука с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/webhook/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление веб-хука.

### Массовое удаление Веб-хук

В теле запроса нужно передать массив, содержащий JSON метаданных Веб-хук, которые вы хотите удалить.


> Запрос на массовое удаление Веб-хук. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/webhook"
  -H "Authorization: Basic <Access-Token>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/metadata",
            "type": "webhook",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/metadata",
            "type": "webhook",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информацио об удалении Веб-хук.

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
