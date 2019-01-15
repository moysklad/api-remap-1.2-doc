# Group Уведомления

## Лента уведомлений [/entity/notification]
### Атрибуты сущности
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **moment** - Дата и время формирования Уведомления
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **readed** - Признак того, было ли Уведомление прочитано
+ **notificationType** - Тип Уведомления
+ **notification** - Данные Уведомления в формате Escape JSON. Формат содержимого зависит от типа Уведомления.

### Получить ленту Уведомлений [GET]
Запрос на получение ленты Уведомлений.
Результат: Объект JSON, включающий в себя поля:
- **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/metadata.html) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой [Уведомления](#уведомления-уведомление).

+ Parameters
  + limit: 100 (optional, enum[number]) - Максимальное количество сущностей для извлечения.
    + Допустимые значения 1 - 100
    + Default: `25`
  + offset: 40 (optional, number) - Отступ в выдаваемом списке сущностей
    + Default: `0`

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Уведомлений.
  + Body
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
      "type": "usernotification",
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
          "type": "usernotification",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#usernotification/edit?id=b67c3127-f7b2-11e8-4508-904900000043"
        },
        "id": "b67c3127-f7b2-11e8-4508-904900000043",
        "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
        "moment": "2018-12-04 13:52:37",
        "readed": false,
        "notificationType": "PURPOSE_ASSIGNED",
        "notification": "{\"type\": \"com.lognex.notificator.common.ntr.NotificationPurposeAssignedNTR\", \"rayID\": \"549f1ed4-fbea-473f-8064-3219e774ce2b\", \"purpose\": {\"id\": \"b665080a-f7b2-11e8-4508-904900000041\", \"date\": 1543920757074, \"name\": \"task1\"}, \"accountId\": null, \"performedBy\": {\"id\": null, \"name\": \"demo@demo\"}, \"subscribers\": [], \"notificationType\": \"PURPOSE_ASSIGNED\"}"
      }
    ]
  }
  ```

## Уведомление [/entity/notification/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Уведомления.

### Получить Уведомление [GET]
Запрос на получение Уведомления с указанным id.

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление Уведомления.
  + Body
  ```json
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/notification/b67c3127-f7b2-11e8-4508-904900000043",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/notification/metadata",
      "type": "usernotification",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#usernotification/edit?id=b67c3127-f7b2-11e8-4508-904900000043"
    },
    "id": "b67c3127-f7b2-11e8-4508-904900000043",
    "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
    "moment": "2018-12-04 13:52:37",
    "readed": false,
    "notificationType": "PURPOSE_ASSIGNED",
    "notification": "{\"type\": \"com.lognex.notificator.common.ntr.NotificationPurposeAssignedNTR\", \"rayID\": \"549f1ed4-fbea-473f-8064-3219e774ce2b\", \"purpose\": {\"id\": \"b665080a-f7b2-11e8-4508-904900000041\", \"date\": 1543920757074, \"name\": \"task1\"}, \"accountId\": null, \"performedBy\": {\"id\": null, \"name\": \"demo@demo\"}, \"subscribers\": [], \"notificationType\": \"PURPOSE_ASSIGNED\"}"
  }  
  ```

### Удалить Уведомление [DELETE /entity/notification/{id}]
Запрос на удаление Уведомления. Возможно удаление только Уведомлений текущего пользователя.

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Уведомления.
+ Response 200 (application/json)
Успешное удаление Уведомления.
  + Body

## Отметить Уведомление как прочитанное [/notification/read/{id}]
Отметить конкретное уведомление, как прочитанное. Можно отмечать только Уведомления текущего пользователя.

### Отметить Уведомление как прочитанное [POST /notification/read/{id}]
+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Уведомления.

+ Response 200 (application/json)
Успешное проставление признака "прочитано".
  + Body

## Отметить все Уведомления как прочитанные [/notification/readall]
Отметить все Уведомления текущего пользователя как прочитанные

### Отметить Уведомления как прочитанные [POST /notification/readall]

+ Response 200 (application/json)
Успешное проставление признака "прочитано" всем непрочитанным Уведомлениям.
  + Body

## Настройки уведомлений [notification/subscription]
### Атрибуты сущности
+ **groups** - Подписка на уведомления по группам
  + **<группа>** - Код группы уведомлений.
    + **enabled**: (boolean, required) - Признак "активна" для подписки на уведомления данной группы.
    + **channels**: (array[string], required) - Массив каналов. Содержит значения из списка: `email` (Email-уведомления), `push` (уведомления на мобильных устройствах).

Значения кода группы уведомлений.

| Код группы уведомлений | Описание           |
| ---------------------- |:-------------------|
| customer_order         | Заказы покупателей |
| invoice                | Счета покупателей  |
| call                   | Звонки             |
| stock                  | Складские остатки  |
| retail                 | Розничная торговля |
| task                   | Задачи             |
| data_exchange          | Обмен данными      |

### Получить настройки уведомлений [GET]
Запрос настроек уведомлений текущего пользователя.

+ Response 200 (application/json)
  + Body (JSON представление настроек уведомлений)
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

### Сохранить настройки уведомлений [POST]
Сохранение настроек уведомлений текущего пользователя.

+ Принимает JSON-представление настроек уведомлений
  + Body
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

+ Response 200 (application/json)
