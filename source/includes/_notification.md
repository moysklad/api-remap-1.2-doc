# Уведомления

## Лента уведомлений
### Общие атрибуты уведомлений
+ **meta** - [Метаданные](#header-метаданные) объекта. Содержит тип конкретного уведомления
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
`Только для чтения`

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
    "size": 21,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/c896e175-5ae8-11e9-9bea-3ff700000052",
        "type": "NotificationGoodCountTooLow",
        "mediaType": "application/json"
      },
      "id": "c896e175-5ae8-11e9-9bea-3ff700000052",
      "accountId": "45b76d0a-5aa2-11e9-727d-307300000002",
      "created": "2019-04-09 19:59:05.575",
      "read": true,
      "title": "Заканчивается товар 1",
      "description": "Остаток ниже 100",
      "good": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/430dd8bb-5ae8-11e9-727d-3073000000f7",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        },
        "id": "430dd8bb-5ae8-11e9-727d-3073000000f7",
        "name": "1"
      },
      "actualBalance": 49.0,
      "minimumBalance": 100.0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/a8dd11a2-5ae8-11e9-9bea-3ff70000004f",
        "type": "NotificationOrderOverdue",
        "mediaType": "application/json"
      },
      "id": "a8dd11a2-5ae8-11e9-9bea-3ff70000004f",
      "accountId": "45b76d0a-5aa2-11e9-727d-307300000002",
      "created": "2019-04-09 19:58:12.348",
      "read": true,
      "title": "Заказ покупателя №00001 просрочен",
      "description": "Дата отгрузки: 02.04.2019 19:57. Сумма: 500.00. Покупатель: Розничный покупатель.",
      "order": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/4f5317ec-5ae8-11e9-727d-3073000000fe",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
          "type": "customerorder",
          "mediaType": "application/json"
        },
        "id": "4f5317ec-5ae8-11e9-727d-3073000000fe",
        "name": "00001",
        "deliveryPlannedMoment": "2019-04-02 19:57:00.000",
        "sum": "500.00",
        "customerName": "Розничный покупатель"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/8fb7895d-5ae8-11e9-9bea-3ff70000004c",
        "type": "NotificationInvoiceOutOverdue",
        "mediaType": "application/json"
      },
      "id": "8fb7895d-5ae8-11e9-9bea-3ff70000004c",
      "accountId": "45b76d0a-5aa2-11e9-727d-307300000002",
      "created": "2019-04-09 19:57:30.159",
      "read": true,
      "title": "Счет покупателю №00001 просрочен",
      "description": "Дата оплаты: 08.04.2019 19:57. Сумма: 500.00. Покупатель: Розничный покупатель.",
      "invoice": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/8409b67e-5ae8-11e9-727d-3073000001b0",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
          "type": "invoiceout",
          "mediaType": "application/json"
        },
        "id": "8409b67e-5ae8-11e9-727d-3073000001b0",
        "name": "00001",
        "paymentPlannedMoment": "2019-04-08 19:57:00.000",
        "sum": "500.00",
        "customerName": "Розничный покупатель"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/4f7cc3e8-5ae8-11e9-9bea-3ff70000004a",
        "type": "NotificationOrderNew",
        "mediaType": "application/json"
      },
      "id": "4f7cc3e8-5ae8-11e9-9bea-3ff70000004a",
      "accountId": "45b76d0a-5aa2-11e9-727d-307300000002",
      "created": "2019-04-09 19:55:42.400",
      "read": true,
      "title": "Новый заказ покупателя № 00001",
      "description": "Сумма: 500,00. Покупатель: Розничный покупатель.",
      "order": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/4f5317ec-5ae8-11e9-727d-3073000000fe",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
          "type": "customerorder",
          "mediaType": "application/json"
        },
        "id": "4f5317ec-5ae8-11e9-727d-3073000000fe",
        "name": "00001",
        "sum": "500.00",
        "customerName": "Розничный покупатель"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/15a1cd62-5ae8-11e9-9bea-3ff700000048",
        "type": "NotificationExportCompleted",
        "mediaType": "application/json"
      },
      "id": "15a1cd62-5ae8-11e9-9bea-3ff700000048",
      "accountId": "45b76d0a-5aa2-11e9-727d-307300000002",
      "created": "2019-04-09 19:54:05.335",
      "read": true,
      "title": "Экспорт завершен",
      "description": "Экспорт товаров (Excel). Экспортировано 0 товаров",
      "message": "Экспортировано 0 товаров",
      "taskType": "export_good",
      "taskState": "completed"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/704b8984-5ae7-11e9-9bea-3ff700000040",
        "type": "NotificationTaskOverdue",
        "mediaType": "application/json"
      },
      "id": "704b8984-5ae7-11e9-9bea-3ff700000040",
      "accountId": "45b76d0a-5aa2-11e9-727d-307300000002",
      "created": "2019-04-09 19:49:27.945",
      "read": true,
      "title": "Просрочена задача: task_4",
      "description": "Задача просрочена task_4 Срок: 08.04.2019 19:49",
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/703c4ddc-5ae7-11e9-727d-3073000001a2",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "703c4ddc-5ae7-11e9-727d-3073000001a2",
        "name": "task_4",
        "deadline": "2019-04-08 19:49:00.000"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/55a666b2-5ae5-11e9-9bea-3ff70000003e",
        "type": "NotificationTaskReopened",
        "mediaType": "application/json"
      },
      "id": "55a666b2-5ae5-11e9-9bea-3ff70000003e",
      "accountId": "45b76d0a-5aa2-11e9-727d-307300000002",
      "created": "2019-04-09 19:34:24.249",
      "read": true,
      "title": "Задача открыта: task_3",
      "description": "1 открыл задачу task_3",
      "performedBy": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/188cb787-5aa5-11e9-727d-30730000009c",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        },
        "id": "188cb787-5aa5-11e9-727d-30730000009c",
        "name": "1"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/da4616a9-5ae3-11e9-727d-307300000195",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "da4616a9-5ae3-11e9-727d-307300000195",
        "name": "task_3"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/e4ac43c3-5ae3-11e9-9bea-3ff70000003c",
        "type": "NotificationTaskCompleted",
        "mediaType": "application/json"
      },
      "id": "e4ac43c3-5ae3-11e9-9bea-3ff70000003c",
      "accountId": "45b76d0a-5aa2-11e9-727d-307300000002",
      "created": "2019-04-09 19:24:05.208",
      "read": true,
      "title": "Задача выполнена: task_3",
      "description": "1 выполнил задачу task_3",
      "performedBy": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/188cb787-5aa5-11e9-727d-30730000009c",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        },
        "id": "188cb787-5aa5-11e9-727d-30730000009c",
        "name": "1"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/da4616a9-5ae3-11e9-727d-307300000195",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "da4616a9-5ae3-11e9-727d-307300000195",
        "name": "task_3"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/da52b652-5ae3-11e9-9bea-3ff70000003a",
        "type": "NotificationTaskAssigned",
        "mediaType": "application/json"
      },
      "id": "da52b652-5ae3-11e9-9bea-3ff70000003a",
      "accountId": "45b76d0a-5aa2-11e9-727d-307300000002",
      "created": "2019-04-09 19:23:47.835",
      "read": true,
      "title": "Новая задача: task_3",
      "description": "1 назначил вам задачу task_3",
      "performedBy": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/188cb787-5aa5-11e9-727d-30730000009c",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        },
        "id": "188cb787-5aa5-11e9-727d-30730000009c",
        "name": "1"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/da4616a9-5ae3-11e9-727d-307300000195",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "da4616a9-5ae3-11e9-727d-307300000195",
        "name": "task_3"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/990d8b9c-5ae3-11e9-9bea-3ff700000038",
        "type": "NotificationTaskDeleted",
        "mediaType": "application/json"
      },
      "id": "990d8b9c-5ae3-11e9-9bea-3ff700000038",
      "accountId": "45b76d0a-5aa2-11e9-727d-307300000002",
      "created": "2019-04-09 19:21:58.339",
      "read": true,
      "title": "Задача удалена: Task_3",
      "description": "1 удалил задачу Task_3",
      "task": {
        "name": "Task_3"
      },
      "performedBy": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/188cb787-5aa5-11e9-727d-30730000009c",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        },
        "id": "188cb787-5aa5-11e9-727d-30730000009c",
        "name": "1"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/c1b761c6-5ae2-11e9-9bea-3ff700000032",
        "type": "NotificationTaskAssigned",
        "mediaType": "application/json"
      },
      "id": "c1b761c6-5ae2-11e9-9bea-3ff700000032",
      "accountId": "45b76d0a-5aa2-11e9-727d-307300000002",
      "created": "2019-04-09 19:15:57.064",
      "read": true,
      "title": "Новая задача: Task_3",
      "description": "1 назначил вам задачу Task_3 Срок: 10.04.2019 19:15",
      "performedBy": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/188cb787-5aa5-11e9-727d-30730000009c",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        },
        "id": "188cb787-5aa5-11e9-727d-30730000009c",
        "name": "1"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/c1a869e8-5ae2-11e9-727d-30730000018d",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "c1a869e8-5ae2-11e9-727d-30730000018d",
        "name": "Task_3",
        "deadline": "2019-04-10 19:15:00.000"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/d00c4112-5ae0-11e9-9bea-3ff70000002c",
        "type": "NotificationTaskUnassigned",
        "mediaType": "application/json"
      },
      "id": "d00c4112-5ae0-11e9-9bea-3ff70000002c",
      "accountId": "45b76d0a-5aa2-11e9-727d-307300000002",
      "created": "2019-04-09 19:02:02.115",
      "read": true,
      "title": "Задача снята: 1 (++)",
      "description": "1 снял с вас задачу",
      "performedBy": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/188cb787-5aa5-11e9-727d-30730000009c",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        },
        "id": "188cb787-5aa5-11e9-727d-30730000009c",
        "name": "1"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/14ac66b6-5add-11e9-727d-30730000002f",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "14ac66b6-5add-11e9-727d-30730000002f",
        "name": "1 (++)",
        "deadline": "2019-04-02 18:53:00.000"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/4a77b673-5ae0-11e9-9bea-3ff70000002a",
        "type": "NotificationTaskAssigned",
        "mediaType": "application/json"
      },
      "id": "4a77b673-5ae0-11e9-9bea-3ff70000002a",
      "accountId": "45b76d0a-5aa2-11e9-727d-307300000002",
      "created": "2019-04-09 18:58:18.004",
      "read": true,
      "title": "Новая задача: 2",
      "description": "1 назначил вам задачу 2 Срок: 11.04.2019 18:58",
      "performedBy": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/188cb787-5aa5-11e9-727d-30730000009c",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        },
        "id": "188cb787-5aa5-11e9-727d-30730000009c",
        "name": "1"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/4a6bf5c7-5ae0-11e9-727d-30730000018a",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "4a6bf5c7-5ae0-11e9-727d-30730000018a",
        "name": "2",
        "deadline": "2019-04-11 18:58:00.000"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/a80b8eda-5adf-11e9-9bea-3ff700000027",
        "type": "NotificationTaskOverdue",
        "mediaType": "application/json"
      },
      "id": "a80b8eda-5adf-11e9-9bea-3ff700000027",
      "accountId": "45b76d0a-5aa2-11e9-727d-307300000002",
      "created": "2019-04-09 18:53:45.504",
      "read": true,
      "title": "Просрочена задача: 1 (++)",
      "description": "Задача просрочена 1 (++) Срок: 02.04.2019 18:53",
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/14ac66b6-5add-11e9-727d-30730000002f",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "14ac66b6-5add-11e9-727d-30730000002f",
        "name": "1 (++)",
        "deadline": "2019-04-02 18:53:00.000"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/a805beb5-5adf-11e9-9bea-3ff700000025",
        "type": "NotificationTaskChanged",
        "mediaType": "application/json"
      },
      "id": "a805beb5-5adf-11e9-9bea-3ff700000025",
      "accountId": "45b76d0a-5aa2-11e9-727d-307300000002",
      "created": "2019-04-09 18:53:45.466",
      "read": true,
      "title": "Задача изменена: 1 (++)",
      "description": "1 изменил задачу",
      "performedBy": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/188cb787-5aa5-11e9-727d-30730000009c",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        },
        "id": "188cb787-5aa5-11e9-727d-30730000009c",
        "name": "1"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/14ac66b6-5add-11e9-727d-30730000002f",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "14ac66b6-5add-11e9-727d-30730000002f",
        "name": "1 (++)",
        "deadline": "2019-04-02 18:53:00.000"
      },
      "diff": {
        "description": {
          "oldValue": "1",
          "newValue": "1 (++)"
        },
        "deadline": {
          "newValue": "2019-04-02 18:53:00.000"
        }
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/278f60c3-5adf-11e9-9bea-3ff70000001b",
        "type": "NotificationTaskCommentDeleted",
        "mediaType": "application/json"
      },
      "id": "278f60c3-5adf-11e9-9bea-3ff70000001b",
      "accountId": "45b76d0a-5aa2-11e9-727d-307300000002",
      "created": "2019-04-09 18:50:09.942",
      "read": true,
      "title": "Комментарий удален: 1",
      "description": "1 удалил комментарий 1231234444",
      "performedBy": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/188cb787-5aa5-11e9-727d-30730000009c",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        },
        "id": "188cb787-5aa5-11e9-727d-30730000009c",
        "name": "1"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/64eec4ad-5aa3-11e9-727d-307300000098",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "64eec4ad-5aa3-11e9-727d-307300000098",
        "name": "1",
        "deadline": "2019-04-08 11:42:00.000"
      },
      "noteContent": "1231234444"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/92caa70b-5add-11e9-9bea-3ff700000011",
        "type": "NotificationTaskCommentChanged",
        "mediaType": "application/json"
      },
      "id": "92caa70b-5add-11e9-9bea-3ff700000011",
      "accountId": "45b76d0a-5aa2-11e9-727d-307300000002",
      "created": "2019-04-09 18:38:50.853",
      "read": true,
      "title": "Комментарий изменен: 1",
      "description": "1 изменил комментарий 1231234444, 123",
      "performedBy": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/188cb787-5aa5-11e9-727d-30730000009c",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        },
        "id": "188cb787-5aa5-11e9-727d-30730000009c",
        "name": "1"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/64eec4ad-5aa3-11e9-727d-307300000098",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "64eec4ad-5aa3-11e9-727d-307300000098",
        "name": "1",
        "deadline": "2019-04-08 11:42:00.000"
      },
      "diff": {
        "noteContent": {
          "oldValue": "123",
          "newValue": "1231234444"
        }
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/31f0d479-5add-11e9-9bea-3ff70000000f",
        "type": "NotificationTaskNewComment",
        "mediaType": "application/json"
      },
      "id": "31f0d479-5add-11e9-9bea-3ff70000000f",
      "accountId": "45b76d0a-5aa2-11e9-727d-307300000002",
      "created": "2019-04-09 18:36:08.364",
      "read": true,
      "title": "Новый комментарий: 1",
      "description": "1 добавил комментарий 123",
      "performedBy": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/188cb787-5aa5-11e9-727d-30730000009c",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        },
        "id": "188cb787-5aa5-11e9-727d-30730000009c",
        "name": "1"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/64eec4ad-5aa3-11e9-727d-307300000098",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "64eec4ad-5aa3-11e9-727d-307300000098",
        "name": "1",
        "deadline": "2019-04-08 11:42:00.000"
      },
      "noteContent": "123"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/14c7b39b-5add-11e9-9bea-3ff70000000d",
        "type": "NotificationTaskAssigned",
        "mediaType": "application/json"
      },
      "id": "14c7b39b-5add-11e9-9bea-3ff70000000d",
      "accountId": "45b76d0a-5aa2-11e9-727d-307300000002",
      "created": "2019-04-09 18:35:19.441",
      "read": true,
      "title": "Новая задача: 1",
      "description": "1 назначил вам задачу 1",
      "performedBy": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/188cb787-5aa5-11e9-727d-30730000009c",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        },
        "id": "188cb787-5aa5-11e9-727d-30730000009c",
        "name": "1"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/14ac66b6-5add-11e9-727d-30730000002f",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "14ac66b6-5add-11e9-727d-30730000002f",
        "name": "1"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/bf7c735f-5aa5-11e9-9bea-3ff700000009",
        "type": "NotificationTaskNewComment",
        "mediaType": "application/json"
      },
      "id": "bf7c735f-5aa5-11e9-9bea-3ff700000009",
      "accountId": "45b76d0a-5aa2-11e9-727d-307300000002",
      "created": "2019-04-09 11:59:14.021",
      "read": true,
      "title": "Новый комментарий: 1",
      "description": "1 добавил комментарий 123",
      "performedBy": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/188cb787-5aa5-11e9-727d-30730000009c",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        },
        "id": "188cb787-5aa5-11e9-727d-30730000009c",
        "name": "1"
      },
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/64eec4ad-5aa3-11e9-727d-307300000098",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "64eec4ad-5aa3-11e9-727d-307300000098",
        "name": "1",
        "deadline": "2019-04-08 11:42:00.000"
      },
      "noteContent": "123"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/notification/659dadae-5aa3-11e9-9bea-3ff700000001",
        "type": "NotificationTaskOverdue",
        "mediaType": "application/json"
      },
      "id": "659dadae-5aa3-11e9-9bea-3ff700000001",
      "accountId": "45b76d0a-5aa2-11e9-727d-307300000002",
      "created": "2019-04-09 11:42:24.236",
      "read": true,
      "title": "Просрочена задача: 1",
      "description": "Задача просрочена 1 Срок: 08.04.2019 11:42",
      "task": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/task/64eec4ad-5aa3-11e9-727d-307300000098",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/task/metadata",
          "type": "task",
          "mediaType": "application/json"
        },
        "id": "64eec4ad-5aa3-11e9-727d-307300000098",
        "name": "1",
        "deadline": "2019-04-08 11:42:00.000"
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
  "https://online.moysklad.ru/api/remap/1.2/notification/7944ef04-f831-11e5-7a69-971500188b19/markasread"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное проставление признака "прочитано".

### Отметить все Уведомления как прочитанные

> Отметить все Уведомления текущего пользователя как прочитанные

```shell
curl -X PUT
  "https://online.moysklad.ru/api/remap/1.2/notification/markasreadall"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное проставление признака "прочитано" всем непрочитанным Уведомлениям.

## Типы уведомлений
### Сводная таблица типов уведомлений
| Тип уведомления                     | Группа               | О чем уведомление            |
|-------------------------------------|----------------------|-------------------------------|
| NotificationOrderNew		            | Заказ покупателя   	| Новый заказа покупателя |
| NotificationOrderOverdue		    | Заказ покупателя		| Просрочен заказ |
| NotificationInvoiceOutOverdue		| Счет		            | Просрочен счёт, который не оплатил или не полностью оплатил покупатель |
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


### Завершение экспорта
#### Тип уведомления
NotificationExportCompleted
#### Атрибуты уведомления
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

### Завершение импорта
#### Тип уведомления
NotificationImportCompleted
#### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **message** - Сообщение о завершении импорта `Только для чтения`
+ **errorMessage** - Сообщение об ошибке `Только для чтения`
+ **createdDocumentName** - Имя документа `Только для чтения`
+ **taskState** - Статус завершения `Только для чтения`
+ **taskType** - Тип импорта `Только для чтения`

### Снижение остатка товара ниже неснижаемого
#### Тип уведомления
NotificationGoodCountTooLow
#### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **actualBalance** - Остаток товара `Только для чтения`
+ **minimumBalance** - Неснижаемый остаток товара `Только для чтения`
+ **good** - Ссылка на товар в формате [Метаданных](/api/remap/1.2/doc/metadata.html) `Только для чтения`

### Просрочен счет покупателя
#### Тип уведомления
NotificationInvoiceOutOverdue
#### Атрибуты уведомления
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

### Новый заказ
#### Тип уведомления
NotificationOrderNew
#### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **order** - Ссылка на заказ в формате [Метаданных](/api/remap/1.2/doc/metadata.html) `Только для чтения`
+ **agent** - Ссылка на контрагента в формате [Метаданных](/api/remap/1.2/doc/metadata.html) `Только для чтения`

### Просроченный заказ
#### Тип уведомления
NotificationOrderOverdue
#### Атрибуты уведомления
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


### Подписка заканчивается
#### Тип уведомления
NotificationSubscribeExpired
#### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`

### Условия подписки истекают
#### Тип уведомления
NotificationSubscribeTermsExpired
#### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`

### Задача назначена
#### Тип уведомления
NotificationTaskAssigned
#### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **task** - Ссылка на задачу в формате [Метаданных](/api/remap/1.2/doc/metadata.html) `Только для чтения`
+ **performedBy** - Сотрудник, выполнивший изменение `Только для чтения`

### Задача снята
#### Тип уведомления
NotificationTaskUnassigned
#### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **task** - Ссылка на задачу в формате [Метаданных](/api/remap/1.2/doc/metadata.html) `Только для чтения`
+ **performedBy** - Сотрудник, выполнивший изменение `Только для чтения`

### Задача изменена
#### Тип уведомления
NotificationTaskChanged
#### Атрибуты уведомления
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

### Задача выполнена
#### Тип уведомления
NotificationTaskCompleted
#### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **task** - Ссылка на задачу в формате [Метаданных](/api/remap/1.2/doc/metadata.html) `Только для чтения`
+ **performedBy** - Сотрудник, выполнивший изменение `Только для чтения`

### Задача удалена
#### Тип уведомления
NotificationTaskDeleted
#### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **task** - Задача с заполненным полем name (без id и meta) `Только для чтения`
+ **performedBy** - Сотрудник, выполнивший изменение `Только для чтения`

### Задача просрочена
#### Тип уведомления
NotificationTaskOverdue
#### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **task** - Ссылка на задачу в формате [Метаданных](/api/remap/1.2/doc/metadata.html) `Только для чтения`

### Задача переоткрыта
#### Тип уведомления
NotificationTaskReopened
#### Атрибуты уведомления
+ **meta** - [Метаданные](/api/remap/1.2/doc/metadata.html) объекта
+ **id** - ID Уведомления в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Дата и время формирования Уведомления `Только для чтения`
+ **read** - Признак того, было ли Уведомление прочитано
+ **title** - Краткий текст уведомления `Только для чтения`
+ **description** - Описание уведомления `Только для чтения`
+ **task** - Ссылка на задачу в формате [Метаданных](/api/remap/1.2/doc/metadata.html) `Только для чтения`
+ **performedBy** - Сотрудник, выполнивший изменение `Только для чтения`

### Новый комментарий к задаче
#### Тип уведомления
NotificationTaskNewComment
#### Атрибуты уведомления
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


### Изменен комментарий к задаче
#### Тип уведомления
NotificationTaskCommentChanged
#### Атрибуты уведомления
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

### Удален комментарий к задаче
#### Тип уведомления
NotificationTaskCommentDeleted
#### Атрибуты уведомления
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

### Смена открыта
#### Тип уведомления
NotificationRetailShiftOpened
#### Атрибуты уведомления
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

### Смена закрыта
#### Тип уведомления
NotificationRetailShiftClosed
#### Атрибуты уведомления
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
