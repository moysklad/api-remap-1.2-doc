# Уведомления

## Лента уведомлений
### Общие атрибуты уведомлений

| Название        | Тип                                                       | Описание                                                                                 |
| --------------- | :-------------------------------------------------------- | :--------------------------------------------------------------------------------------- |
| **accountId**   | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                     |
| **created**     | DateTime                                                  | Дата и время формирования Уведомления<br>`+Обязательное при ответе` `+Только для чтения` |
| **description** | String(4096)                                              | Описание уведомления<br>`+Обязательное при ответе` `+Только для чтения`                  |
| **id**          | UUID                                                      | ID Уведомления<br>`+Обязательное при ответе` `+Только для чтения`                        |
| **meta**        | [Meta](#/general#3-metadannye) | Метаданные объекта. Содержит тип конкретного уведомления<br>`+Обязательное при ответе`   |
| **read**        | Boolean                                                   | Признак того, было ли Уведомление прочитано<br>`+Обязательное при ответе`                |
| **title**       | String(255)                                               | Краткий текст уведомления<br>`+Обязательное при ответе` `+Только для чтения`             |

### Получить ленту Уведомлений
Запрос на получение ленты Уведомлений.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                                                           |
| ----------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------- |
| **meta**    | [Meta](#/general#3-metadannye) | Метаданные о выдаче,                                                                               |
| **context** | [Meta](#/general#3-metadannye) | Метаданные о сотруднике, выполнившем запрос.                                                       |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой [Уведомления](#/notification/notifications#2-lenta-uvedomlenij). |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить ленту уведомлений

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/notification"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Уведомлений.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/notification",
    "type": "notification",
    "mediaType": "application/json",
    "size": 3,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/notification/32f118d3-5b8f-11e9-9bea-3ff700000070",
        "type": "NotificationGoodCountTooLow",
        "mediaType": "application/json"
      },
      "id": "32f118d3-5b8f-11e9-9bea-3ff700000070",
      "accountId": "45b76d0a-5aa2-11e9-727d-307300000002",
      "created": "2019-04-10 15:50:20.271",
      "read": true,
      "title": "Заканчивается товар Картофель (да)",
      "description": "Остаток ниже 1",
      "good": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0daf8e9a-5b7a-11e9-727d-307300000007",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        },
        "id": "0daf8e9a-5b7a-11e9-727d-307300000007",
        "name": "Картофель (да)"
      },
      "actualBalance": 0,
      "minimumBalance": 1
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/notification/0f423542-5b7a-11e9-9bea-3ff70000000f",
        "type": "NotificationImportCompleted",
        "mediaType": "application/json"
      },
      "id": "0f423542-5b7a-11e9-9bea-3ff70000000f",
      "accountId": "45b76d0a-5aa2-11e9-727d-307300000002",
      "created": "2019-04-10 13:19:01.123",
      "read": true,
      "title": "Импорт завершен",
      "description": "Товары и остатки (Excel). Оприходование 00002 создано. Обработано 7 строк, создано 7 элементов, обновлено 0 элементов",
      "message": "Обработано 7 строк, создано 7 элементов, обновлено 0 элементов",
      "taskType": "importer_good",
      "taskState": "completed",
      "createdDocumentName": "00002"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/notification/a805beb5-5adf-11e9-9bea-3ff700000025",
        "type": "NotificationTaskChanged",
        "mediaType": "application/json"
      },
      "id": "a805beb5-5adf-11e9-9bea-3ff700000025",
      "accountId": "45b76d0a-5aa2-11e9-727d-307300000002",
      "created": "2019-04-09 18:53:45.314",
      "read": true,
      "title": "Задача изменена: Новое описание задачи",
      "description": "admin изменил задачу",
      "performedBy": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/188cb787-5aa5-11e9-727d-30730000009c",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        },
        "id": "188cb787-5aa5-11e9-727d-30730000009c",
        "name": "admin"
      },
      "task": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/14ac66b6-5add-11e9-727d-30730000002f",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "14ac66b6-5add-11e9-727d-30730000002f",
        "name": "Новое описание задачи",
        "deadline": "2019-04-02 18:53:00.000"
      },
      "diff": {
        "description": {
          "oldValue": "Старое описание задачи",
          "newValue": "Новое описание задачи"
        },
        "deadline": {
          "newValue": "2019-04-02 18:53:00.000"
        }
      }
    }
  ]
}
```
