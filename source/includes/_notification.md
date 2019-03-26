# Уведомления

## Лента уведомлений
### Атрибуты сущности
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **updated** - Дата и время формирования Уведомления `Только для чтения`
+ **readed** - Признак того, было ли Уведомление прочитано
+ **notificationType** - Тип Уведомления `Только для чтения`
+ **notification** - Данные Уведомления в формате Escape JSON. Формат содержимого зависит от типа Уведомления. `Только для чтения`

### Получить ленту Уведомлений
Запрос на получение ленты Уведомлений.
Результат: Объект JSON, включающий в себя поля:
- **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/metadata.html) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой [Уведомления](#уведомления-уведомление).

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить ленту уведомлений

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/notification"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Уведомлений.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/notification",
    "type": "notification",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/notification/b67c3127-f7b2-11e8-4508-904900000043",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/notification/metadata",
        "type": "notification",
        "mediaType": "application/json"
      },
      "id": "b67c3127-f7b2-11e8-4508-904900000043",
      "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
      "updated": "2018-12-04 13:52:37",
      "readed": false,
      "notificationType": "PURPOSE_ASSIGNED",
      "notification": "{ \"notificationType\" : \"PURPOSE_ASSIGNED\", \"performedBy\" : { \"name\" : \"demo@demo\", \"id\" : null }, \"purpose\" : { \"name\" : \"task1\", \"id\" : \"2687daa6-196e-11e9-382e-97f200000041\", \"date\" : \"2019-01-16 12:07:29.459\" } }"
    }
  ]
}
```

## Уведомление

### Получить Уведомление

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Уведомления.|

> Запрос на получение Уведомления с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/notification/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Уведомления.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/notification/b67c3127-f7b2-11e8-4508-904900000043",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/notification/metadata",
    "type": "notification",
    "mediaType": "application/json"
  },
  "id": "b67c3127-f7b2-11e8-4508-904900000043",
  "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
  "updated": "2018-12-04 13:52:37",
  "readed": false,
  "notificationType": "PURPOSE_ASSIGNED",
  "notification": "{ \"notificationType\" : \"PURPOSE_ASSIGNED\", \"performedBy\" : { \"name\" : \"demo@demo\", \"id\" : null }, \"purpose\" : { \"name\" : \"task1\", \"id\" : \"2687daa6-196e-11e9-382e-97f200000041\", \"date\" : \"2019-01-16 12:07:29.459\" } }"
}  
```

### Удалить Уведомление
Запрос на удаление Уведомления. Возможно удаление только Уведомлений текущего пользователя.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Уведомления.|

> Запрос на удаление Уведомления с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/notification/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление Уведомления.


### Отметить Уведомление как прочитанное
Отметить конкретное уведомление, как прочитанное. Можно отмечать только Уведомления текущего пользователя.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Уведомления.|

> Отметить конкретное уведомление, как прочитанное.

```shell
curl -X PUT
  "https://online.moysklad.ru/api/remap/1.2/notification/read/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное проставление признака "прочитано".

### Отметить все Уведомления как прочитанные

> Отметить все Уведомления текущего пользователя как прочитанные

```shell
curl -X PUT
  "https://online.moysklad.ru/api/remap/1.2/notification/readall"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное проставление признака "прочитано" всем непрочитанным Уведомлениям.

## Настройки уведомлений
### Атрибуты сущности
+ **groups** - Подписка на уведомления по группам
  + ``groupName`` - Код группы уведомлений
    + **enabled**: (boolean, required) - Признак "активна" для подписки на уведомления данной группы
    + **channels**: (array[string], required) - Массив каналов. Содержит значения из списка: `email` (Email-уведомления), `push` (уведомления на мобильных устройствах)

Значения кода группы уведомлений.

| Код группы уведомлений   | Описание           |
| ------------------------ |--------------------|
| `customer_order`         | Заказы покупателей |
| `invoice`                | Счета покупателей  |
| `call`                   | Звонки             |
| `stock`                  | Складские остатки  |
| `retail`                 | Розничная торговля |
| `task`                   | Задачи             |
| `data_exchange`          | Обмен данными      |

### Получить настройки уведомлений

> Запрос настроек уведомлений текущего пользователя.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/notification/subscription"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. JSON представление настроек уведомлений.

```json
{
  "groups" : {
    "customer_order" : {
      "enabled" : true,
      "channels" : [ "email", "push" ]
    },
    "invoice" : {
      "enabled" : true,
      "channels" : [ "email", "push" ]
    },
    "call" : {
      "enabled" : true,
      "channels" : [ "email", "push" ]
    },
    "stock" : {
      "enabled" : true,
      "channels" : [ "email", "push" ]
    },
    "retail" : {
      "enabled" : true,
      "channels" : [ "email", "push" ]
    },
    "task" : {
      "enabled" : true,
      "channels" : [ "email", "push" ]
    },
    "data_exchange" : {
      "enabled" : true,
      "channels" : [ "email", "push" ]
    }
  }
}
```

### Изменить настройки уведомлений

> Изменение настроек уведомлений текущего пользователя.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/notification/subscription"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "groups" : {
              "customer_order" : {
                "enabled" : true,
                "channels" : [ "email", "push" ]
              },
              "invoice" : {
                "enabled" : true,
                "channels" : [ "email", "push" ]
              },
              "call" : {
                "enabled" : true,
                "channels" : [ "email", "push" ]
              },
              "stock" : {
                "enabled" : true,
                "channels" : [ "email", "push" ]
              },
              "retail" : {
                "enabled" : true,
                "channels" : [ "email", "push" ]
              },
              "task" : {
                "enabled" : true,
                "channels" : [ "email", "push" ]
              },
              "data_exchange" : {
                "enabled" : true,
                "channels" : [ "email", "push" ]
              }
            }
          }'
```

> Response 200 (application/json)
Успешное изменение настроек уведомлений.
