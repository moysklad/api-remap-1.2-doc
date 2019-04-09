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
  "https://online.moysklad.ru/api/remap/1.2/notification"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Уведомлений.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/notification",
    "type": "notification",
    "mediaType": "application/json",
    "size": 24,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/b69e7890-5704-11e9-c0a8-100b00000009",
        "type": "NotificationTaskCommentDeleted",
        "mediaType": "application/json"
      },
      "id": "b69e7890-5704-11e9-c0a8-100b00000009",
      "accountId": "c45c23d5-5640-11e9-c0a8-100a00000001",
      "created": "2019-04-04 21:08:56",
      "read": false,
      "title": "Комментарий удален: Задача А",
      "description": "Администратор удалил комментарий Текст комментария 2 исправлен",
      "performedBy": {
        "id": "c461170f-5640-11e9-c0a8-100a00000003",
        "name": "Администратор"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/2cae7a21-56fe-11e9-c0a8-100e00000040",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "2cae7a21-56fe-11e9-c0a8-100e00000040",
        "name": "Задача А"
      },
      "noteContent": "Текст комментария 2 исправлен"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/3d3423ee-5704-11e9-c0a8-100b00000007",
        "type": "NotificationTaskCommentChanged",
        "mediaType": "application/json"
      },
      "id": "3d3423ee-5704-11e9-c0a8-100b00000007",
      "accountId": "c45c23d5-5640-11e9-c0a8-100a00000001",
      "created": "2019-04-04 21:05:32",
      "read": false,
      "title": "Комментарий изменен: Задача А",
      "description": "Администратор изменил комментарий Текст комментария 2 исправлен, Текст комментария 2",
      "performedBy": {
        "id": "c461170f-5640-11e9-c0a8-100a00000003",
        "name": "Администратор"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/2cae7a21-56fe-11e9-c0a8-100e00000040",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "2cae7a21-56fe-11e9-c0a8-100e00000040",
        "name": "Задача А"
      },
      "diff": {
        "noteContent": {
          "oldValue": "Текст комментария 2",
          "newValue": "Текст комментария 2 исправлен"
        }
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/3d2abf0f-5704-11e9-c0a8-100b00000005",
        "type": "NotificationTaskCommentDeleted",
        "mediaType": "application/json"
      },
      "id": "3d2abf0f-5704-11e9-c0a8-100b00000005",
      "accountId": "c45c23d5-5640-11e9-c0a8-100a00000001",
      "created": "2019-04-04 21:05:32",
      "read": false,
      "title": "Комментарий удален: Задача А",
      "description": "Администратор удалил комментарий Текст комментария 1",
      "performedBy": {
        "id": "c461170f-5640-11e9-c0a8-100a00000003",
        "name": "Администратор"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/2cae7a21-56fe-11e9-c0a8-100e00000040",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "2cae7a21-56fe-11e9-c0a8-100e00000040",
        "name": "Задача А"
      },
      "noteContent": "Текст комментария 1\n"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/240706df-5704-11e9-c0a8-100b00000003",
        "type": "NotificationTaskNewComment",
        "mediaType": "application/json"
      },
      "id": "240706df-5704-11e9-c0a8-100b00000003",
      "accountId": "c45c23d5-5640-11e9-c0a8-100a00000001",
      "created": "2019-04-04 21:04:50",
      "read": false,
      "title": "Новый комментарий: Задача А",
      "description": "Администратор добавил комментарий Текст комментария 2",
      "performedBy": {
        "id": "c461170f-5640-11e9-c0a8-100a00000003",
        "name": "Администратор"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/2cae7a21-56fe-11e9-c0a8-100e00000040",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "2cae7a21-56fe-11e9-c0a8-100e00000040",
        "name": "Задача А"
      },
      "noteContent": "Текст комментария 2"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/dcdf3b21-5703-11e9-c0a8-100b00000001",
        "type": "NotificationTaskNewComment",
        "mediaType": "application/json"
      },
      "id": "dcdf3b21-5703-11e9-c0a8-100b00000001",
      "accountId": "c45c23d5-5640-11e9-c0a8-100a00000001",
      "created": "2019-04-04 21:02:51",
      "read": false,
      "title": "Новый комментарий: Задача А",
      "description": "Администратор добавил комментарий Текст комментария 1",
      "performedBy": {
        "id": "c461170f-5640-11e9-c0a8-100a00000003",
        "name": "Администратор"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/2cae7a21-56fe-11e9-c0a8-100e00000040",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "2cae7a21-56fe-11e9-c0a8-100e00000040",
        "name": "Задача А"
      },
      "noteContent": "Текст комментария 1\n"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/2cc76683-56fe-11e9-c0a8-100b0000000c",
        "type": "NotificationTaskAssigned",
        "mediaType": "application/json"
      },
      "id": "2cc76683-56fe-11e9-c0a8-100b0000000c",
      "accountId": "c45c23d5-5640-11e9-c0a8-100a00000001",
      "created": "2019-04-04 20:22:08",
      "read": false,
      "title": "Новая задача: Задача А",
      "description": "Администратор назначил вам задачу Задача А",
      "performedBy": {
        "id": "c461170f-5640-11e9-c0a8-100a00000003",
        "name": "Администратор"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/2cae7a21-56fe-11e9-c0a8-100e00000040",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "2cae7a21-56fe-11e9-c0a8-100e00000040",
        "name": "Задача А"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/df0c3e22-56fd-11e9-c0a8-100b0000000a",
        "type": "NotificationTaskReopened",
        "mediaType": "application/json"
      },
      "id": "df0c3e22-56fd-11e9-c0a8-100b0000000a",
      "accountId": "c45c23d5-5640-11e9-c0a8-100a00000001",
      "created": "2019-04-04 20:19:58",
      "read": false,
      "title": "Задача открыта: Новая задача",
      "description": "Администратор открыл задачу Новая задача",
      "performedBy": {
        "id": "c461170f-5640-11e9-c0a8-100a00000003",
        "name": "Администратор"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/9c16b46e-56cb-11e9-c0a8-100a00000017",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "9c16b46e-56cb-11e9-c0a8-100a00000017",
        "name": "Новая задача"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/7945a089-56fd-11e9-c0a8-100b00000008",
        "type": "NotificationTaskCompleted",
        "mediaType": "application/json"
      },
      "id": "7945a089-56fd-11e9-c0a8-100b00000008",
      "accountId": "c45c23d5-5640-11e9-c0a8-100a00000001",
      "created": "2019-04-04 20:17:07",
      "read": false,
      "title": "Задача выполнена: Новая задача",
      "description": "Администратор выполнил задачу Новая задача",
      "performedBy": {
        "id": "c461170f-5640-11e9-c0a8-100a00000003",
        "name": "Администратор"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/9c16b46e-56cb-11e9-c0a8-100a00000017",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "9c16b46e-56cb-11e9-c0a8-100a00000017",
        "name": "Новая задача"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/572d1dd9-56fc-11e9-c0a8-100b00000006",
        "type": "NotificationInvoiceOutOverdue",
        "mediaType": "application/json"
      },
      "id": "572d1dd9-56fc-11e9-c0a8-100b00000006",
      "accountId": "c45c23d5-5640-11e9-c0a8-100a00000001",
      "created": "2019-04-04 20:09:00",
      "read": false,
      "title": "Счет покупателю №00003 просрочен",
      "description": "Дата оплаты: 01.04.2019 20:08. Сумма: 500.00. Покупатель: Розничный покупатель.",
      "invoice": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/571.2ac4-56fc-11e9-c0a8-100e0000002b",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
          "type": "invoiceout",
          "mediaType": "application/json"
        },
        "id": "571.2ac4-56fc-11e9-c0a8-100e0000002b",
        "name": "00003",
        "paymentPlannedMoment": "2019-04-01 20:08:00",
        "sum": 50000.0,
        "customerName": "Розничный покупатель"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/dd19fe4e-56fb-11e9-c0a8-100b00000002",
        "type": "NotificationInvoiceOutOverdue",
        "mediaType": "application/json"
      },
      "id": "dd19fe4e-56fb-11e9-c0a8-100b00000002",
      "accountId": "c45c23d5-5640-11e9-c0a8-100a00000001",
      "created": "2019-04-04 20:05:35",
      "read": false,
      "title": "Счет покупателю №00002 просрочен",
      "description": "Дата оплаты: 03.04.2019 20:05. Сумма: 500.00. Покупатель: Розничный покупатель.",
      "invoice": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/db8d4eb9-56fb-11e9-c0a8-100e00000013",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
          "type": "invoiceout",
          "mediaType": "application/json"
        },
        "id": "db8d4eb9-56fb-11e9-c0a8-100e00000013",
        "name": "00002",
        "paymentPlannedMoment": "2019-04-03 20:05:00",
        "sum": 50000.0,
        "customerName": "Розничный покупатель"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/9338c8bd-56e5-11e9-c0a8-100b00000023",
        "type": "NotificationGoodCountTooLow",
        "mediaType": "application/json"
      },
      "id": "9338c8bd-56e5-11e9-c0a8-100b00000023",
      "accountId": "c45c23d5-5640-11e9-c0a8-100a00000001",
      "created": "2019-04-04 17:26:02",
      "read": false,
      "title": "Заканчивается товар 1",
      "description": "Остаток ниже 200",
      "good": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/bdca925e-56e1.21e9-c0a8-100a00000016",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        },
        "id": "bdca925e-56e1.21e9-c0a8-100a00000016",
        "name": "1"
      },
      "actualBalance": 180.0,
      "minimumBalance": 200.0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/930a1a03-56e5-11e9-c0a8-100b00000020",
        "type": "NotificationGoodCountTooLow",
        "mediaType": "application/json"
      },
      "id": "930a1a03-56e5-11e9-c0a8-100b00000020",
      "accountId": "c45c23d5-5640-11e9-c0a8-100a00000001",
      "created": "2019-04-04 17:26:02",
      "read": false,
      "title": "Заканчивается товар 1",
      "description": "Остаток ниже 200",
      "good": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/bdca925e-56e1.21e9-c0a8-100a00000016",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        },
        "id": "bdca925e-56e1.21e9-c0a8-100a00000016",
        "name": "1"
      },
      "actualBalance": 180.0,
      "minimumBalance": 200.0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/92cdb03b-56e5-11e9-c0a8-100b0000001d",
        "type": "NotificationGoodCountTooLow",
        "mediaType": "application/json"
      },
      "id": "92cdb03b-56e5-11e9-c0a8-100b0000001d",
      "accountId": "c45c23d5-5640-11e9-c0a8-100a00000001",
      "created": "2019-04-04 17:26:02",
      "read": false,
      "title": "Заканчивается товар 1",
      "description": "Остаток ниже 200",
      "good": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/bdca925e-56e1.21e9-c0a8-100a00000016",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        },
        "id": "bdca925e-56e1.21e9-c0a8-100a00000016",
        "name": "1"
      },
      "actualBalance": 180.0,
      "minimumBalance": 200.0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/ba635f13-56e4-11e9-c0a8-100b0000001a",
        "type": "NotificationRetailShiftOpened",
        "mediaType": "application/json"
      },
      "id": "ba635f13-56e4-11e9-c0a8-100b0000001a",
      "accountId": "c45c23d5-5640-11e9-c0a8-100a00000001",
      "created": "2019-04-04 17:19:59",
      "read": false,
      "title": "Открыта смена в 1",
      "description": "Кассир: Администратор",
      "user": {
        "id": "c461170f-5640-11e9-c0a8-100a00000003",
        "name": "Администратор"
      },
      "retailStore": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/ad13401e-56e4-11e9-c0a8-100a000000bc",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
          "type": "retailstore",
          "mediaType": "application/json"
        },
        "id": "ad13401e-56e4-11e9-c0a8-100a000000bc",
        "name": "1"
      },
      "retailShift": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/ba255004-56e4-11e9-c0a8-100a000000c1",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
          "type": "retailshift",
          "mediaType": "application/json"
        },
        "id": "ba255004-56e4-11e9-c0a8-100a000000c1",
        "name": "00001",
        "open": "2019-04-04 17:19:00",
        "proceed": 0.0
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/51a5b0a3-56e4-11e9-c0a8-100b00000014",
        "type": "NotificationTaskOverdue",
        "mediaType": "application/json"
      },
      "id": "51a5b0a3-56e4-11e9-c0a8-100b00000014",
      "accountId": "c45c23d5-5640-11e9-c0a8-100a00000001",
      "created": "2019-04-04 17:17:03",
      "read": false,
      "title": "Просрочена задача: Описание задачи",
      "description": "Задача просрочена Описание задачи Срок: 03.04.2019 14:13",
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/8413bfc3-56ca-11e9-c0a8-100a00000000",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "8413bfc3-56ca-11e9-c0a8-100a00000000",
        "name": "Описание задачи",
        "deadline": "2019-04-03 14:13:00"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/c6082a9e-56e1.21e9-c0a8-100b00000011",
        "type": "NotificationOrderNew",
        "mediaType": "application/json"
      },
      "id": "c6082a9e-56e1.21e9-c0a8-100b00000011",
      "accountId": "c45c23d5-5640-11e9-c0a8-100a00000001",
      "created": "2019-04-04 16:58:50",
      "read": false,
      "title": "Новый заказ покупателя № 00001",
      "description": "Сумма: 0.00. Покупатель: Розничный покупатель.",
      "order": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/c5ab5d93-56e1.21e9-c0a8-100a0000001d",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
          "type": "customerorder",
          "mediaType": "application/json"
        },
        "id": "c5ab5d93-56e1.21e9-c0a8-100a0000001d",
        "name": "00001",
        "sum": "0.00",
        "customerName": "Розничный покупатель"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/9c1e9e05-56cb-11e9-c0a8-100b0000000f",
        "type": "NotificationTaskAssigned",
        "mediaType": "application/json"
      },
      "id": "9c1e9e05-56cb-11e9-c0a8-100b0000000f",
      "accountId": "c45c23d5-5640-11e9-c0a8-100a00000001",
      "created": "2019-04-04 14:20:10",
      "read": false,
      "title": "Новая задача: Новая задача",
      "description": "Администратор назначил вам задачу Новая задача",
      "performedBy": {
        "id": "c461170f-5640-11e9-c0a8-100a00000003",
        "name": "Администратор"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/9c16b46e-56cb-11e9-c0a8-100a00000017",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "9c16b46e-56cb-11e9-c0a8-100a00000017",
        "name": "Новая задача"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/8d07388c-56cb-11e9-c0a8-100b0000000d",
        "type": "NotificationTaskDeleted",
        "mediaType": "application/json"
      },
      "id": "8d07388c-56cb-11e9-c0a8-100b0000000d",
      "accountId": "c45c23d5-5640-11e9-c0a8-100a00000001",
      "created": "2019-04-04 14:19:45",
      "read": false,
      "title": "Задача удалена: Описание задачи",
      "description": "Администратор удалил задачу Описание задачи",
      "performedBy": {
        "id": "c461170f-5640-11e9-c0a8-100a00000003",
        "name": "Администратор"
      },
      "taskDescription": "Описание задачи"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/882dcacb-56cb-11e9-c0a8-100b0000000b",
        "type": "NotificationTaskAssigned",
        "mediaType": "application/json"
      },
      "id": "882dcacb-56cb-11e9-c0a8-100b0000000b",
      "accountId": "c45c23d5-5640-11e9-c0a8-100a00000001",
      "created": "2019-04-04 14:19:37",
      "read": false,
      "title": "Новая задача: Описание задачи",
      "description": "Администратор назначил вам задачу Описание задачи Срок: 03.04.2019 14:13",
      "performedBy": {
        "id": "c461170f-5640-11e9-c0a8-100a00000003",
        "name": "Администратор"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/8413bfc3-56ca-11e9-c0a8-100a00000000",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "8413bfc3-56ca-11e9-c0a8-100a00000000",
        "name": "Описание задачи",
        "deadline": "2019-04-03 14:13:00"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/80c8a58b-56cb-11e9-c0a8-100b00000009",
        "type": "NotificationTaskUnassigned",
        "mediaType": "application/json"
      },
      "id": "80c8a58b-56cb-11e9-c0a8-100b00000009",
      "accountId": "c45c23d5-5640-11e9-c0a8-100a00000001",
      "created": "2019-04-04 14:19:25",
      "read": false,
      "title": "Задача снята: Описание задачи",
      "description": "Администратор снял с вас задачу",
      "performedBy": {
        "id": "c461170f-5640-11e9-c0a8-100a00000003",
        "name": "Администратор"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/8413bfc3-56ca-11e9-c0a8-100a00000000",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "8413bfc3-56ca-11e9-c0a8-100a00000000",
        "name": "Описание задачи",
        "deadline": "2019-04-03 14:13:00"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/7dc744cd-56cb-11e9-c0a8-100b00000007",
        "type": "NotificationTaskChanged",
        "mediaType": "application/json"
      },
      "id": "7dc744cd-56cb-11e9-c0a8-100b00000007",
      "accountId": "c45c23d5-5640-11e9-c0a8-100a00000001",
      "created": "2019-04-04 14:19:20",
      "read": false,
      "title": "Задача изменена: Описание задачи",
      "description": "Администратор изменил задачу",
      "performedBy": {
        "id": "c461170f-5640-11e9-c0a8-100a00000003",
        "name": "Администратор"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/8413bfc3-56ca-11e9-c0a8-100a00000000",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "8413bfc3-56ca-11e9-c0a8-100a00000000",
        "name": "Описание задачи",
        "deadline": "2019-04-03 14:13:00"
      },
      "diff": {
        "deadline": {
          "oldValue": "2019-04-06 14:13:00",
          "newValue": "2019-04-03 14:13:00"
        }
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/bd203b22-56ca-11e9-c0a8-100b00000005",
        "type": "NotificationTaskChanged",
        "mediaType": "application/json"
      },
      "id": "bd203b22-56ca-11e9-c0a8-100b00000005",
      "accountId": "c45c23d5-5640-11e9-c0a8-100a00000001",
      "created": "2019-04-04 14:13:56",
      "read": false,
      "title": "Задача изменена: Описание задачи",
      "description": "Администратор изменил задачу",
      "performedBy": {
        "id": "c461170f-5640-11e9-c0a8-100a00000003",
        "name": "Администратор"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/8413bfc3-56ca-11e9-c0a8-100a00000000",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "8413bfc3-56ca-11e9-c0a8-100a00000000",
        "name": "Описание задачи",
        "deadline": "2019-04-06 14:13:00"
      },
      "diff": {
        "deadline": {
          "newValue": "2019-04-06 14:13:00"
        }
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/bd0dbccf-56ca-11e9-c0a8-100b00000003",
        "type": "NotificationTaskChanged",
        "mediaType": "application/json"
      },
      "id": "bd0dbccf-56ca-11e9-c0a8-100b00000003",
      "accountId": "c45c23d5-5640-11e9-c0a8-100a00000001",
      "created": "2019-04-04 14:13:56",
      "read": false,
      "title": "Задача изменена: Описание задачи",
      "description": "Администратор изменил задачу",
      "performedBy": {
        "id": "c461170f-5640-11e9-c0a8-100a00000003",
        "name": "Администратор"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/8413bfc3-56ca-11e9-c0a8-100a00000000",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "8413bfc3-56ca-11e9-c0a8-100a00000000",
        "name": "Описание задачи"
      },
      "diff": {
        "description": {
          "oldValue": "фываваф",
          "newValue": "Описание задачи"
        }
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/bcd815b9-56ca-11e9-c0a8-100b00000001",
        "type": "NotificationTaskAssigned",
        "mediaType": "application/json"
      },
      "id": "bcd815b9-56ca-11e9-c0a8-100b00000001",
      "accountId": "c45c23d5-5640-11e9-c0a8-100a00000001",
      "created": "2019-04-04 14:13:56",
      "read": false,
      "title": "Новая задача: фываваф",
      "description": "Администратор назначил вам задачу фываваф",
      "performedBy": {
        "id": "c461170f-5640-11e9-c0a8-100a00000003",
        "name": "Администратор"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/8413bfc3-56ca-11e9-c0a8-100a00000000",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "8413bfc3-56ca-11e9-c0a8-100a00000000",
        "name": "фываваф"
      }
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
  "https://online.moysklad.ru/api/remap/1.2/notification/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Уведомления.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/notification/bcd815b9-56ca-11e9-c0a8-100b00000001",
    "type": "NotificationTaskAssigned",
    "mediaType": "application/json"
  },
  "id": "bcd815b9-56ca-11e9-c0a8-100b00000001",
  "accountId": "c45c23d5-5640-11e9-c0a8-100a00000001",
  "created": "2019-04-04 14:13:56",
  "read": false,
  "title": "Новая задача: фываваф",
  "description": "Администратор назначил вам задачу фываваф",
  "performedBy": {
    "id": "c461170f-5640-11e9-c0a8-100a00000003",
    "name": "Администратор"
  },
  "task": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/8413bfc3-56ca-11e9-c0a8-100a00000000",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
      "type": "task",
      "mediaType": "application/json"
    },
    "id": "8413bfc3-56ca-11e9-c0a8-100a00000000",
    "name": "фываваф"
  }
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
  "https://online.moysklad.ru/api/remap/1.2/notification/7944ef04-f831-11e5-7a69-971500188b19"
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
  "https://online.moysklad.ru/api/remap/1.2/notification/7944ef04-f831-11e5-7a69-971500188b19/check"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное проставление признака "прочитано".

### Отметить все Уведомления как прочитанные

> Отметить все Уведомления текущего пользователя как прочитанные

```shell
curl -X PUT
  "https://online.moysklad.ru/api/remap/1.2/notification/checkall"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное проставление признака "прочитано" всем непрочитанным Уведомлениям.

# Типы уведомлений
## Сводная таблица типов уведомлений
  | Тип уведомления                     | Группа                | О чем уведомление                                    |
  |-------------------------------------|:----------------------|:------------------------------|
  | NotificationOrderNew		        | Заказ покупателя		| Новый заказа покупателя |
  | NotificationOrderOverdue		    | Заказ покупателя		| Просрочен заказ |
  | NotificationInvoiceOutOverdue		| Счет		            | Просрочен счёт, который не оплатил или не полностью оплатил покупатель |
  | NotificationInvoiceInOverdue		| Счет	            	| Просрочен счёте от поставщика, который не оплачен или оплачен не полностью |
  | NotificationGoodCountTooLow		    | Остатки	        	| Снижение количества товара до неснижаемого остатка |
  | NotificationTaskAssigned	    	| Задача	        	| Задача назначена |
  | NotificationTaskUnassigned	    	| Задача		        | Задаче снята |
  | NotificationTaskOverdue		        | Задача		        | Задача просрочена |
  | NotificationTaskCompleted	        | Задача		        | Задача выполнена |
  | NotificationTaskReopened	    	| Задача		        | Задача переоткрыта |
  | NotificationTaskNewComment		    | Задача	        	| У задачи появился новый комментарий |
  | NotificationTaskChanged	    	    | Задача	        	| Задача поменялась |
  | NotificationTaskDeleted		        | Задача	        	| Задача удалена |
  | NotificationTaskCommentDeleted	    | Задача	        	| Комментарий у задачи был удален |
  | NotificationTaskCommentChanged	    | Задача	        	| Комментарий у задачи был изменен |
  | NotificationImportCompleted		    | Обмен данными	    	| Импорт выполнен |
  | NotificationExportCompleted		    | Обмен данными	    	| Экспорт выполнен |
  | NotificationSubscribeExpired        | Биллинг               | Истекает подписка |
  | NotificationSubscribeTermsExpired   | Биллинг               | Истекают условия подписки |
  | NotificationRetailShiftOpened       | Розничная торговля    | Открыта смена |
  | NotificationRetailShiftClosed       | Розничная торговля    | Закрыта смена |


## Завершение экспорта
### Тип уведомления
NotificationExportCompleted
### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **message** - Сообщение о завершении экспорта `Только для чтения`
+ **errorMessage** - Сообщение об ошибке `Только для чтения`
+ **createdDocumentName** - Имя экспортированного документа `Только для чтения`
+ **taskState** - Статус завершения `Только для чтения`
+ **taskType** - Тип экспорта `Только для чтения`

## Завершение импорта
### Тип уведомления
NotificationImportCompleted
### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **message** - Сообщение о завершении импорта `Только для чтения`
+ **errorMessage** - Сообщение об ошибке `Только для чтения`
+ **createdDocumentName** - имя документа `Только для чтения`
+ **taskState** - статус завершения `Только для чтения`
+ **taskType** - тип импорта `Только для чтения`

## Снижение остатка товара ниже неснижаемого
### Тип уведомления
NotificationGoodCountTooLow
### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **goodBalance** - остаток товара `Только для чтения`
+ **minimumBalance** - неснижаемый остаток товара `Только для чтения`
+ **good** - Ссылка на товар в формате [Метаданных](/api/remap/1.2/doc/metadata.html) `Только для чтения`

## Просрочен счет покупателя
### Тип уведомления
NotificationInvoiceOutOverdue
### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **customer** - Ссылка на покупателя в формате [Метаданных](/api/remap/1.2/doc/metadata.html) `Только для чтения`
+ **paymentPlannedMoment** - Запланированная дата оплаты `Только для чтения`
+ **invoice** - Ссылка на счет в формате [Метаданных](/api/remap/1.2/doc/metadata.html) `Только для чтения`
+ **sum** - Сумма к оплате `Только для чтения`

## Новый заказ
### Тип уведомления
NotificationOrderNew
### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **order** - Ссылка на заказ в формате [Метаданных](/api/remap/1.2/doc/metadata.html) `Только для чтения`
+ **agent** - Ссылка на контрагента в формате [Метаданных](/api/remap/1.2/doc/metadata.html) `Только для чтения`

## Просроченный заказ
### Тип уведомления
NotificationOrderOverdue
### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **customer** - Ссылка на покупателя в формате [Метаданных](/api/remap/1.2/doc/metadata.html) `Только для чтения`
+ **deliveryPlannedMoment** - Планируемое время отгрузки `Только для чтения`
+ **order** - Ссылка на заказ в формате [Метаданных](/api/remap/1.2/doc/metadata.html) `Только для чтения`


## Подписка заканчивается
### Тип уведомления
NotificationSubscribeExpired
### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`

## Условия подписки истекают
### Тип уведомления
NotificationSubscribeTermsExpired
### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`

## Задача назначена
### Тип уведомления
NotificationTaskAssigned
### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **task** - Ссылка на задачу в формате [Метаданных](/api/remap/1.2/doc/metadata.html) `Только для чтения`
+ **performedBy** - Сотрудник, выполнивший изменение `Только для чтения`

## Задача снята
### Тип уведомления
NotificationTaskUnassigned
### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **task** - Ссылка на задачу в формате [Метаданных](/api/remap/1.2/doc/metadata.html) `Только для чтения`
+ **performedBy** - Сотрудник, выполнивший изменение `Только для чтения`

## Задача изменена
### Тип уведомления
NotificationTaskChanged
### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **diff** - Измененные поля `Только для чтения`
+ **task** - Ссылка на задачу в формате [Метаданных](/api/remap/1.2/doc/metadata.html) `Только для чтения`
+ **performedBy** - Сотрудник, выполнивший изменение `Только для чтения`

## Задача выполнена
### Тип уведомления
NotificationTaskCompleted
### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **task** - Ссылка на задачу в формате [Метаданных](/api/remap/1.2/doc/metadata.html) `Только для чтения`
+ **performedBy** - Сотрудник, выполнивший изменение `Только для чтения`

## Задача удалена
### Тип уведомления
NotificationTaskDeleted
### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **task** - Задача с заполненным полем name (без id и meta) `Только для чтения`
+ **performedBy** - Сотрудник, выполнивший изменение `Только для чтения`

## Задача просрочена
### Тип уведомления
NotificationTaskOverdue
### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **task** - Ссылка на задачу в формате [Метаданных](/api/remap/1.2/doc/metadata.html) `Только для чтения`

## Задача переоткрыта
### Тип уведомления
NotificationTaskReopened
### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **task** - Ссылка на задачу в формате [Метаданных](/api/remap/1.2/doc/metadata.html) `Только для чтения`
+ **performedBy** - Сотрудник, выполнивший изменение `Только для чтения`

## Новый комментарий к задаче
### Тип уведомления
NotificationTaskNewComment
### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **task** - Ссылка на задачу в формате [Метаданных](/api/remap/1.2/doc/metadata.html) `Только для чтения`
+ **performedBy** - Сотрудник, выполнивший изменение `Только для чтения`
+ **noteContent** - Содержимое комментария `Только для чтения`


## Изменен комментарий к задаче
### Тип уведомления
NotificationTaskCommentChanged
### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **task** - Ссылка на задачу в формате [Метаданных](/api/remap/1.2/doc/metadata.html) `Только для чтения`
+ **diff** - Изменения `Только для чтения`
+ **performedBy** - Сотрудник, выполнивший изменение `Только для чтения`

## Удален комментарий к задаче
### Тип уведомления
NotificationTaskCommentDeleted
### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **task** - Ссылка на задачу в формате [Метаданных](/api/remap/1.2/doc/metadata.html) `Только для чтения`
+ **performedBy** - Сотрудник, выполнивший изменение `Только для чтения`
+ **noteContent** - Содержимое удаленного комментария `Только для чтения`

## Смена открыта
### Тип уведомления
NotificationRetailShiftOpened
### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **user** - Ссылка на сотрудника, отрывшего смену `Только для чтения`
+ **retailStore** - Ссылка на точку продаж `Только для чтения`
+ **retailShift** - Описание смены `Только для чтения`
  + **open** - Дата открытия `Только для чтения`
  + **proceed** - Сумма внесения `Только для чтения`

## Смена закрыта
### Тип уведомления
NotificationRetailShiftClosed
### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **user** - Ссылка на сотрудника, отрывшего смену `Только для чтения`
+ **retailStore** - Ссылка на точку продаж `Только для чтения`
+ **retailShift** - Описание смены `Только для чтения`
  + **open** - Дата открытия `Только для чтения`
  + **closed** - Дата закрытия `Только для чтения`
  + **proceed** - Сумма внесения `Только для чтения`

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
