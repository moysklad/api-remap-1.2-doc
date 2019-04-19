## Исходящий платеж
### Исходящие платежи   
Средствами JSON API можно создавать и обновлять сведения о Исходящем платеже, запрашивать списки Исходящих платежей  и сведения по отдельным Исходящим платежам. Кодом сущности для Исходящего платежа  в составе JSON API является ключевое слово **paymentout**. Больше о платежа х и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203025346-%D0%9F%D0%BB%D0%B0%D1%82%D0%B5%D0%B6%D0%B8).

#### Атрибуты сущности
+ **meta** - [Метаданные](#metadannye) о Исходящем платеже
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **syncId** - ID синхронизации. После заполнения недоступен для изменения.
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **deleted** - Момент последнего удаления сущности `Только для чтения`
+ **name** - номер Исходящего платежа
+ **description** - Комментарий Исходящего платежа
+ **externalCode** - Внешний код Исходящего платежа
+ **moment** - Дата Исходящего платежа
+ **applicable** - Отметка о проведении
+ **sum** - Сумма Исходящего платежа  в установленной валюте
+ **project** - Ссылка на проект в формате [Метаданных](#metadannye)
+ **rate** - Валюта
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](#metadannye)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](#metadannye)
+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](#metadannye) `Необходимое`
+ **agent** - Ссылка на контрагента или юрлицо в формате [Метаданных](#metadannye) `Необходимое`
+ **contract** - Ссылка на договор в формате [Метаданных](#metadannye)
+ **state** - Статус Исходящего платежа  в формате [Метаданных](#metadannye)
+ **organizationAccount** - Ссылка на счет вашего юрлица в формате [Метаданных](#metadannye)
+ **agentAccount** - Ссылка на счет контрагента в формате [Метаданных](#metadannye)
+ **attributes** - Коллекция доп. полей в формате [Метаданных](#metadannye)
<br>Поля при expand'е:</br>
  - **name** - номер документа
  - **moment** - дата печати
  - **href** - ссылка на файл печатной формы
  - **fileName** - название файла печатной формы
  - **updated** - дата последнего изменения
+ **created** - Дата создания `Только для чтения`
+ **paymentPurpose** - Назначение платежа
+ **vatSum** - Сумма включая НДС
+ **expenseItem** - Статья расходов в формате [Метаданных](#metadannye) `Необходимое`

#### Связи с другими документами
+ **factureIn** - Ссылка на Счет-фактура полученный, с которым связан этот платеж, в формате [Метаданных](#metadannye)
+ **operations** - Массив ссылок на связанные операции
  - **meta** - Ссылка на операцию, к которой привязан этот платеж в формате метаданных
  - **linkedSum** - Сумма, оплаченная по данному документу из этого платежа

Разрешенные типы связанных операций:

+ Возврат покупателя (salesreturn)
+ Приемка (supply)
+ Счет поставщика (invoicein)
+ Заказ поставщику (purchaseorder)
+ Выданный отчет комиссионера (commissionreportout)

О работе с доп. полями Исходящих  платежей  можно прочитать [здесь](#rabota-s-dopolnitel-nymi-polqmi)


### Получить Исходящие платежи   
Запрос всех Исходящих  платежей  на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

- **meta** [Метаданные](#metadannye) о выдаче,
- **context** - [Метаданные](#metadannye) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой Исходящие платежи  .

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|
|search |  `string` (optional) *Example: 0001* URL Параметр для поиска по имени документа. Фильтр документов по указанной поисковой строке. Фильтрация происходит по полю name.|

> Получить Исходящие платежи

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/paymentout"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Исходящих платежей .

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/metadata",
    "type": "paymentout",
    "mediaType": "application/json",
    "size": 3,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/64aa2e8c-3f95-11e6-8a84-bae50000010f",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/metadata",
        "type": "paymentout",
        "mediaType": "application/json"
      },
      "id": "64aa2e8c-3f95-11e6-8a84-bae50000010f",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-07-01 17:09:15",
      "name": "00001",
      "description": "Платим контрагенту",
      "externalCode": "1PPP5fDei13CwEHXYUpV62",
      "moment": "2016-07-01 17:07:00",
      "applicable": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/faf45b9a-2e58-11e6-8a84-bae500000055",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "sum": 12525000,
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "contract": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/4680d884-3f95-11e6-8a84-bae50000010c",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
          "type": "contract",
          "mediaType": "application/json"
        }
      },
      "project": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/722e39f0-313e-11e6-8a84-bae500000008",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
          "mediaType": "application/json"
        }
      },
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/1496c09e-32ca-11e6-8a84-bae50000001b",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "organizationAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "attributes": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/metadata/attributes/ebc69be9-3f91-11e6-8a84-bae500000104",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "ebc69be9-3f91-11e6-8a84-bae500000104",
          "name": "Поступил",
          "type": "boolean",
          "value": false
        }
      ],
      "paymentPurpose": "Оплата по счету за приемку",
      "expenseItem": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/1be2350e-0479-11e5-b03a-448a5b426e7e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
          "type": "expenseitem",
          "mediaType": "application/json"
        }
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/6c527858-3f95-11e6-8a84-bae500000113",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/metadata",
        "type": "paymentout",
        "mediaType": "application/json"
      },
      "id": "6c527858-3f95-11e6-8a84-bae500000113",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-07-01 17:09:28",
      "name": "00002",
      "externalCode": "ixPEZ2RyieYILZJ73FkAT1",
      "moment": "2016-07-01 17:09:00",
      "applicable": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "sum": 0,
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/1489a08d-32ca-11e6-8a84-bae50000000d",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "organizationAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "agentAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/1489a08d-32ca-11e6-8a84-bae50000000d/accounts/1489ad8d-32ca-11e6-8a84-bae50000000e",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "attributes": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/metadata/attributes/ebc69be9-3f91-11e6-8a84-bae500000104",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "ebc69be9-3f91-11e6-8a84-bae500000104",
          "name": "Поступил",
          "type": "boolean",
          "value": false
        }
      ],
      "expenseItem": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/1be2350e-0479-11e5-b03a-448a5b426e7e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
          "type": "expenseitem",
          "mediaType": "application/json"
        }
      },
      "operations": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/90ba347d-6b8b-11e6-8a84-bae5000000bd",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
            "type": "supply",
            "mediaType": "application/json"
          },
          "linkedSum": 80000
        }
      ]
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/d557dabe-3d3e-11e6-8a84-bae500000000",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/metadata",
        "type": "paymentout",
        "mediaType": "application/json"
      },
      "id": "d557dabe-3d3e-11e6-8a84-bae500000000",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-06-28 17:44:35",
      "name": "408",
      "externalCode": "Q7wBn7oYh-B70arUTG08u3",
      "moment": "2015-06-19 00:00:00",
      "applicable": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "sum": 7283600,
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/c466c1a8-3d2d-11e6-8a84-bae500000000",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "organizationAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "agentAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/c466c1a8-3d2d-11e6-8a84-bae500000000/accounts/c4673735-3d2d-11e6-8a84-bae500000001",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "paymentPurpose": "Оплата за ноутбук по счету № 340 от 19 июня 2015  Без НДС",
      "expenseItem": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/1be2350e-0479-11e5-b03a-448a5b426e7e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
          "type": "expenseitem",
          "mediaType": "application/json"
        }
      }
    }
  ]
}
```

### Создать Исходящий платеж  
Запрос на создание нового Исходящего платежа .
Обязательные для создания поля:

+ **name** - номер Исходящего платежа
+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](#metadannye)
+ **agent** - Ссылка на контрагента  в формате [Метаданных](#metadannye)
+ **expenseItem** - Статья расходов в формате [Метаданных](#metadannye)

> Пример создания нового Исходящего платежа  с телом запроса, содержащим только необходимые поля.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/paymentout
"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "333222",
            "organization": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "agent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "counterparty",
                "mediaType": "application/json"
              }
            },
            "expenseItem": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/1be2350e-0479-11e5-b03a-448a5b426e7e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
                "type": "expenseitem",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Исходящего платежа .

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/99434e4c-3fa0-11e6-8a84-bae50000009c",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/metadata",
    "type": "paymentout",
    "mediaType": "application/json"
  },
  "id": "99434e4c-3fa0-11e6-8a84-bae50000009c",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "name": "333222",
  "moment": "2016-06-27 17:52:24",
  "applicable": false,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004/accounts/147c3231-32ca-11e6-8a84-bae500000005",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "expenseItem": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/1be2350e-0479-11e5-b03a-448a5b426e7e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
      "type": "expenseitem",
      "mediaType": "application/json"
    }
  }
}
```

### Массовое создание и обновление Исходящих платежей 
[Массовое создание и обновление](#sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Исходящих платежей.
В теле запроса нужно передать массив, содержащий JSON представления Исходящих платежей, которые вы хотите создать или обновить.
Обновляемые Исходящие платежи должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Исходящих платежей

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/paymentout"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "333222",
              "organization": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "agent": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                  "type": "counterparty",
                  "mediaType": "application/json"
                }
              },
              "expenseItem": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/1be2350e-0479-11e5-b03a-448a5b426e7e",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
                  "type": "expenseitem",
                  "mediaType": "application/json"
                }
              }
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/99434e4c-3fa0-11e6-8a84-bae50000009c",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/metadata",
                "type": "paymentout",
                "mediaType": "application/json"
              },
              "name": "888",
              "description": "НИП",
              "sum": 999,
              "code": "39393",
              "externalCode": "o34bajf214812slkanf",
              "moment": "2012-10-31 15:52:24",
              "applicable": true
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Исходящих платежей.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/99434e4c-3fa0-11e6-8a84-bae50000009c",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/metadata",
      "type": "paymentout",
      "mediaType": "application/json"
    },
    "id": "99434e4c-3fa0-11e6-8a84-bae50000009c",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "name": "333222",
    "moment": "2016-06-27 17:52:24",
    "applicable": false,
    "rate": {
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    },
    "sum": 0,
    "organization": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "organizationAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "agentAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004/accounts/147c3231-32ca-11e6-8a84-bae500000005",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "expenseItem": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/1be2350e-0479-11e5-b03a-448a5b426e7e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
        "type": "expenseitem",
        "mediaType": "application/json"
      }
    }
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/99434e4c-3fa0-11e6-8a84-bae50000009c",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/metadata",
      "type": "paymentout",
      "mediaType": "application/json"
    },
    "id": "99434e4c-3fa0-11e6-8a84-bae50000009c",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-07-01 18:32:14",
    "name": "888",
    "description": "НИП",
    "code": "39393",
    "externalCode": "o34bajf214812slkanf",
    "moment": "2012-10-31 14:52:24",
    "applicable": true,
    "rate": {
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    },
    "sum": 999,
    "organization": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "organizationAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "agentAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004/accounts/147c3231-32ca-11e6-8a84-bae500000005",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "expenseItem": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/1be2350e-0479-11e5-b03a-448a5b426e7e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
        "type": "expenseitem",
        "mediaType": "application/json"
      }
    }
  }
]

```

### Удалить Исходящий платеж

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Исходящего платежа.|

> Запрос на удаление Исходящего платежа  с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление Исходящего платежа .

### Метаданные Исходящих платежей 
#### Метаданные Исходящих платежей  
Запрос на получение метаданных Исходящих платежей . Результат - объект JSON, включающий в себя:

+ **meta** - Ссылка на метаданные Исходящих платежей
+ **attributes** - Массив объектов доп. полей Исходящих платежей в формате [Метаданных](#metadannye)
+ **states** - Массив статусов Исходящих платежей
+ **createShared** - создавать новые Исходящие платежи с меткой "Общий"

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](#rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Исходящих платежей

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/metadata"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Исходящих платежей .

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/metadata/attributes/ebc68f7a-3f91-11e6-8a84-bae500000102",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "ebc68f7a-3f91-11e6-8a84-bae500000102",
      "name": "Доля",
      "type": "double",
      "required": false
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/metadata/attributes/ebc69606-3f91-11e6-8a84-bae500000103",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "ebc69606-3f91-11e6-8a84-bae500000103",
      "name": "Попытки",
      "type": "long",
      "required": false
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/metadata/attributes/ebc69be9-3f91-11e6-8a84-bae500000104",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "ebc69be9-3f91-11e6-8a84-bae500000104",
      "name": "Поступил",
      "type": "boolean",
      "required": false
    }
  ],
  "createShared": false
}
```

### Отдельное доп. поле

#### Отдельное доп. поле

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Доп. поля.|
 
> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/metadata/attributes/ed00a639-558a-11e6-8a84-bae500000072",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "customEntityMeta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/metadata/customEntities/a27aa372-5311-11e6-8a84-bae500000001",
    "type": "customentitymetadata",
    "mediaType": "application/json"
  },
  "id": "ed00a639-558a-11e6-8a84-bae500000072",
  "name": "Сущности",
  "type": "customentity",
  "required": false
}
```

### Шаблон исходящего платежа 
#### Шаблон исходящего платежа 
> Запрос на получение предзаполненого стандартными значениями шаблона исходящего платежа без связи с каким-либо документом.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/new"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d ''  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного исходящего платежа.

```json
{
  "applicable": true,
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "expenseItem": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/1be2350e-0479-11e5-b03a-448a5b426e7e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
      "type": "expenseitem",
      "mediaType": "application/json"
    }
  }
}
```

### Шаблон исходящего платежа на основе 
Запрос на создание получение прелзаполненного исходящего платежа на основе другого документа.
В результате запроса, будет создан предзаполненный шаблон исходящего платеж на основе переданного документа.
> Запрос на получение шаблона исходящего платежа на основе заказа поставщику.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/new"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "operations": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/purchaseorder/17a06771-961b-11e6-8a84-bae500000080",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/purchaseorder/metadata",
                  "type": "purchaseorder",
                  "mediaType": "application/json"
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного исходящего платежа.

```json
{
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 0,
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b942953e-9128-11e6-8a84-bae500000054",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "paymentPurpose": "Оплата по заказу № 00001 от 2016-10-19 19:42:00. Сумма: 0,00 без НДС",
  "operations": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/purchaseorder/17a06771-961b-11e6-8a84-bae500000080",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/purchaseorder/metadata",
        "type": "purchaseorder",
        "mediaType": "application/json"
      },
      "linkedSum": 0
    }
  ],
  "expenseItem": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/1be2350e-0479-11e5-b03a-448a5b426e7e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
      "type": "expenseitem",
      "mediaType": "application/json"
    }
  }
}
```

> Запрос на получение шаблона исходящего платежа на основе возврата покупателя.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/new"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "operations": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/3b0f51a4-961b-11e6-8a84-bae500000086",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
                  "type": "salesreturn",
                  "mediaType": "application/json"
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного исходящего платежа.

```json
{
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 0,
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/2b0f10e4-9169-11e6-8a84-bae500000000",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "paymentPurpose": "Возврат по накладной № 00001 от 2016-10-19 19:43:00. Сумма: 0,00 без НДС",
  "operations": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/3b0f51a4-961b-11e6-8a84-bae500000086",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
        "type": "salesreturn",
        "mediaType": "application/json"
      },
      "linkedSum": 0
    }
  ],
  "expenseItem": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/1be2395a-0479-11e5-baee-448a5b426e7e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
      "type": "expenseitem",
      "mediaType": "application/json"
    }
  }
}
```

> Запрос на получение шаблона исходящего платежа на основе приемки.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/new"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "operations": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/0f57efd5-91f3-11e6-8a84-bae500000086",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
                  "type": "supply",
                  "mediaType": "application/json"
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного исходящего платежа.

```json
{
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 0,
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b942c396-9128-11e6-8a84-bae500000056",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "paymentPurpose": "Оплата по накладной № 123 от 2016-10-14 12:46:00. Сумма: 0,00 без НДС",
  "operations": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/0f57efd5-91f3-11e6-8a84-bae500000086",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
        "type": "supply",
        "mediaType": "application/json"
      },
      "linkedSum": 0
    }
  ],
  "expenseItem": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/1be2350e-0479-11e5-b03a-448a5b426e7e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
      "type": "expenseitem",
      "mediaType": "application/json"
    }
  }
}
```

> Запрос на получение шаблона исходящего платежа на основе счета поставщика.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/new"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "operations": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoicein/e43b34bc-961a-11e6-8a84-bae50000006f",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoicein/metadata",
                  "type": "invoicein",
                  "mediaType": "application/json"
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного исходящего платежа.

```json
{
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 0,
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b942c396-9128-11e6-8a84-bae500000056",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "paymentPurpose": "Оплата по счету № 00001 от 2016-10-19 19:41:00. Сумма: 0,00 без НДС",
  "operations": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoicein/e43b34bc-961a-11e6-8a84-bae50000006f",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoicein/metadata",
        "type": "invoicein",
        "mediaType": "application/json"
      },
      "linkedSum": 0
    }
  ],
  "expenseItem": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/1be2350e-0479-11e5-b03a-448a5b426e7e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
      "type": "expenseitem",
      "mediaType": "application/json"
    }
  }
}
```

> Запрос на получение шаблона исходящего платежа на основе выданного отчета комиссионера.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/new"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "operations": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportout/394e3f39-b322-11e6-8a84-bae50000009e",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportout/metadata",
                  "type": "commissionreportout",
                  "mediaType": "application/json"
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного исходящего платежа.

```json
{
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2016-11-25 18:19:15",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 10200850,
  "contract": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/c3057574-ab01-11e6-8a84-bae500000070",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
      "type": "contract",
      "mediaType": "application/json"
    }
  },
  "project": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b942c396-9128-11e6-8a84-bae500000056",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "paymentPurpose": "Оплата по выданному отчету комиссионера № 0000000000000000002 от 2016-11-25 18:16:00. Сумма: 102 008,50 без НДС",
  "vatSum": 0,
  "operations": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportout/394e3f39-b322-11e6-8a84-bae50000009e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportout/metadata",
        "type": "commissionreportout",
        "mediaType": "application/json"
      },
      "linkedSum": 10200850
    }
  ],
  "expenseItem": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/1be2350e-0479-11e5-b03a-448a5b426e7e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
      "type": "expenseitem",
      "mediaType": "application/json"
    }
  }
}
```

### Исходящий платеж
  
### Получить Исходящий платеж

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Исходящего платежа.|
  
> Запрос на получение отдельного Исходящего платежа с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Исходящего платежа.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/64aa2e8c-3f95-11e6-8a84-bae50000010f",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/metadata",
    "type": "paymentout",
    "mediaType": "application/json"
  },
  "id": "64aa2e8c-3f95-11e6-8a84-bae50000010f",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-07-01 17:09:15",
  "name": "00001",
  "description": "Платим контрагенту",
  "externalCode": "1PPP5fDei13CwEHXYUpV62",
  "moment": "2016-07-01 17:07:00",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/faf45b9a-2e58-11e6-8a84-bae500000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 12525000,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "contract": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/4680d884-3f95-11e6-8a84-bae50000010c",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
      "type": "contract",
      "mediaType": "application/json"
    }
  },
  "project": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/722e39f0-313e-11e6-8a84-bae500000008",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/1496c09e-32ca-11e6-8a84-bae50000001b",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/metadata/attributes/ebc69be9-3f91-11e6-8a84-bae500000104",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "ebc69be9-3f91-11e6-8a84-bae500000104",
      "name": "Поступил",
      "type": "boolean",
      "value": false
    }
  ],
  "paymentPurpose": "Оплата по счету за приемку",
  "expenseItem": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/1be2350e-0479-11e5-b03a-448a5b426e7e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
      "type": "expenseitem",
      "mediaType": "application/json"
    }
  },
  "operations": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/90ba347d-6b8b-11e6-8a84-bae5000000bd",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
        "type": "supply",
        "mediaType": "application/json"
      },
      "linkedSum": 80000
    }
  ]
}
```

### Изменить Исходящий платеж  
Запрос на обновление Исходящего платежа   с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Исходящего платежа , кроме тех, что
помечены `Только для чтения` в описании [атрибутов Исходящего платежа ](#ishodqschij-platezh).
При обновлении полей **organization** и **agent** нужно также обновить поля **organizationAccount** и
**agentAccount** соответственно, иначе произойдет ошибка.

Для привязки исходящего платежа к другим документам
нужно положить в поле под именем **operations** все **meta** тех документов, к которым вы хотите привязать финансовую операцию.
Также для каждого документа можно указать cумму, оплаченную по данному документу из этого платежа **linkedSum**.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Исходящего платежа.|

> Пример запроса на обновление отдельного Исходящего платежа .

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "888",
            "description": "НИП",
            "sum": 999,
            "code": "39393",
            "externalCode": "o34bajf214812slkanf",
            "moment": "2012-10-31 15:52:24",
            "applicable": true
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Исходящего платежа .

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/99434e4c-3fa0-11e6-8a84-bae50000009c",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/metadata",
    "type": "paymentout",
    "mediaType": "application/json"
  },
  "id": "99434e4c-3fa0-11e6-8a84-bae50000009c",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-07-01 18:32:14",
  "name": "888",
  "description": "НИП",
  "code": "39393",
  "externalCode": "o34bajf214812slkanf",
  "moment": "2012-10-31 14:52:24",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 999,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004/accounts/147c3231-32ca-11e6-8a84-bae500000005",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "expenseItem": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/1be2350e-0479-11e5-b03a-448a5b426e7e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
      "type": "expenseitem",
      "mediaType": "application/json"
    }
  }
}
```
