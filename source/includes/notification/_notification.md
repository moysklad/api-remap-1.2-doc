## Уведомление

### Получить Уведомление

**Параметры**

| Параметр | Описание                                                                            |
| :------- | :---------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Уведомления. |

> Запрос на получение Уведомления с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/notification/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Уведомления.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/notification/bcd815b9-56ca-11e9-c0a8-100b00000001",
    "type": "NotificationTaskAssigned",
    "mediaType": "application/json"
  },
  "id": "bcd815b9-56ca-11e9-c0a8-100b00000001",
  "accountId": "c45c23d5-5640-11e9-c0a8-100a00000001",
  "created": "2019-04-04 14:13:56.000",
  "read": false,
  "title": "Новая задача: Задача",
  "description": "Администратор назначил вам задачу Задача",
  "performedBy": {
    "id": "c461170f-5640-11e9-c0a8-100a00000003",
    "name": "Администратор"
  },
  "task": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/8413bfc3-56ca-11e9-c0a8-100a00000000",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata",
      "type": "task",
      "mediaType": "application/json"
    },
    "id": "8413bfc3-56ca-11e9-c0a8-100a00000000",
    "name": "Задача"
  }
}
```

### Удалить Уведомление
Запрос на удаление Уведомления. Возможно удаление только Уведомлений текущего пользователя.

**Параметры**

| Параметр | Описание                                                                            |
| :------- | :---------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Уведомления. |

> Запрос на удаление Уведомления с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/notification/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление Уведомления.


### Отметить Уведомление как прочитанное
Отметить конкретное уведомление, как прочитанное. Можно отмечать только Уведомления текущего пользователя.

**Параметры**

| Параметр | Описание                                                                            |
| :------- | :---------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Уведомления. |

> Отметить конкретное уведомление, как прочитанное.

```shell
curl -X PUT
  "https://api.moysklad.ru/api/remap/1.2/notification/7944ef04-f831-11e5-7a69-971500188b19/markasread"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное проставление признака "прочитано".

### Отметить все Уведомления как прочитанные
Отметить все Уведомления текущего пользователя как прочитанные.

> Отметить все Уведомления текущего пользователя как прочитанные

```shell
curl -X PUT
  "https://api.moysklad.ru/api/remap/1.2/notification/markasreadall"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное проставление признака "прочитано" всем непрочитанным Уведомлениям.