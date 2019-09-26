## Расходный ордер
### Расходные ордера
Средствами JSON API можно создавать и обновлять сведения о Расходном ордере, запрашивать списки Расходных ордеров  и сведения по отдельным Расходных ордеров. Кодом сущности для Расходного ордера  в составе JSON API является ключевое слово **cashout**.

#### Атрибуты сущности
+ **meta** - [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) о Расходном ордере
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **syncId** - ID синхронизации. После заполнения недоступен для изменения.
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **deleted** - Момент последнего удаления сущности `Только для чтения`
+ **name** - номер Расходного ордера
+ **description** - Комментарий Расходного ордера
+ **externalCode** - Внешний код Расходного ордера
+ **moment** - Дата Расходного ордера
+ **applicable** - Отметка о проведении
+ **sum** - Сумма Расходного ордера  в установленной валюте
+ **project** - Ссылка на проект в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **rate** - Валюта
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) `Необходимое`
+ **agent** - Ссылка на контрагента, юрлицо или сотрудника в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) `Необходимое`
+ **contract** - Ссылка на договор в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **state** - Статус Расходного ордера  в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **attributes** - Коллекция доп. полей в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
<br>Поля при expand'е:</br>
  - **name** - номер документа
  - **moment** - дата печати
  - **href** - ссылка на файл печатной формы
  - **fileName** - название файла печатной формы
  - **updated** - дата последнего изменения
+ **created** - Дата создания `Только для чтения`
+ **paymentPurpose** - Основание
+ **vatSum** - Сумма включая НДС
+ **expenseItem** - Статья расходов в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) `Необходимое`

#### Связи с другими документами
+ **factureIn** - Ссылка на Счет-фактура полученный, с которым связан этот Расходный ордер в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **operations** - Массив ссылок на связанные операции в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
  - **meta** - Ссылка на операцию, к которой привязан этот платеж в формате метаданных
  - **linkedSum** - Сумма, оплаченная по данному документу из этого платежа

Разрешенные типы связанных операций:

+ Возврат покупателя (salesreturn)
+ Приемка (supply)
+ Счет поставщика (invoicein)
+ Заказ поставщику (purchaseorder)
+ Выданный отчет комиссионера (commissionreportout)

О работе с доп. полями Расходных ордеров можно прочитать [здесь](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)


### Получить Расходные ордера
Запрос всех Расходных ордеров на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

- **meta** [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) о выдаче,
- **context** - [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой Расходные ордера .

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|
|search |  `string` (optional) *Example: 0001* URL Параметр для поиска по имени документа. Фильтр документов по указанной поисковой строке. Фильтрация происходит по полю name.|

> Получить Расходные ордера

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/cashin"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Расходных ордеров.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata",
    "type": "cashout",
    "mediaType": "application/json",
    "size": 3,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/235c14cf-41b1-11e6-8a84-bae500000073",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata",
        "type": "cashout",
        "mediaType": "application/json"
      },
      "id": "235c14cf-41b1-11e6-8a84-bae500000073",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-07-04 09:32:53",
      "name": "00002",
      "description": "Лол",
      "externalCode": "wWfQT10VjQztCieUrE72r2",
      "moment": "2016-07-04 09:31:00",
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
      "sum": 35000,
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/2b34d43f-3f52-11e6-8a84-bae500000066",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
          "type": "contract",
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
      "state": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata/states/0eda7963-41b1-11e6-8a84-bae50000006e",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "attributes": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata/attributes/c8857703-3f8e-11e6-8a84-bae5000000ff",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "c8857703-3f8e-11e6-8a84-bae5000000ff",
          "name": "Поступил",
          "type": "boolean",
          "value": false
        }
      ],
      "paymentPurpose": "Оплата еще одной приемки",
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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/489afb43-41b1-11e6-8a84-bae50000007a",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata",
        "type": "cashout",
        "mediaType": "application/json"
      },
      "id": "489afb43-41b1-11e6-8a84-bae50000007a",
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
      "updated": "2016-07-04 09:33:56",
      "name": "00003",
      "description": "Лмао",
      "externalCode": "Q9wiyzIQiOhYhqpVkq6IE2",
      "moment": "2016-07-04 09:32:00",
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
      "sum": 3535000,
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/37def9c0-41b1-11e6-8a84-bae500000077",
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/1509a2f7-32ca-11e6-8a84-bae500000068",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "state": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata/states/0eda7963-41b1-11e6-8a84-bae50000006e",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "attributes": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata/attributes/c8857703-3f8e-11e6-8a84-bae5000000ff",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "c8857703-3f8e-11e6-8a84-bae5000000ff",
          "name": "Поступил",
          "type": "boolean",
          "value": false
        }
      ],
      "paymentPurpose": "Оплата еще одной приемки",
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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/fd9b07ea-41b0-11e6-8a84-bae500000069",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata",
        "type": "cashout",
        "mediaType": "application/json"
      },
      "id": "fd9b07ea-41b0-11e6-8a84-bae500000069",
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
      "updated": "2016-07-04 09:34:14",
      "name": "00001",
      "description": "Ордер созданный через UI.",
      "externalCode": "Biim5OxdjUnFcC2saaU551",
      "moment": "2016-07-04 09:30:00",
      "applicable": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/cdbc62de-3f68-11e6-8a84-bae500000050",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        },
        "value": 63
      },
      "sum": 3174603,
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/e16fc992-41b0-11e6-8a84-bae500000066",
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "state": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata/states/0eda8542-41b1-11e6-8a84-bae500000070",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "attributes": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata/attributes/c8857703-3f8e-11e6-8a84-bae5000000ff",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "c8857703-3f8e-11e6-8a84-bae5000000ff",
          "name": "Поступил",
          "type": "boolean",
          "value": false
        }
      ],
      "paymentPurpose": "Оплата приемки",
      "expenseItem": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/82031d62-2e58-11e6-ab5c-d8cb8a84bae5",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
          "type": "expenseitem",
          "mediaType": "application/json"
        }
      }
    }
  ]
}

```

### Создать Расходный ордер
Запрос на создание нового Расходного ордера.
Обязательные для создания поля:

+ **name** - номер Расходного ордера
+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **agent** - Ссылка на контрагента  в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **expenseItem** - Статья расходов в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)

> Пример создания нового Расходного ордера  с телом запроса, содержащим только необходимые поля.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/cashout"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "0721",
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
Успешный запрос. Результат - JSON представление созданного Расходного ордера.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/e446a227-41b1-11e6-8a84-bae500000005",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata",
    "type": "cashout",
    "mediaType": "application/json"
  },
  "id": "e446a227-41b1-11e6-8a84-bae500000005",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "name": "0721",
  "moment": "2012-06-27 16:52:24",
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
}
```

### Массовое создание и обновление  Расходных ордеров
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Расходных ордеров.
В теле запроса нужно передать массив, содержащий JSON представления Расходных ордеров, которые вы хотите создать или обновить.
Обновляемые Расходные ордера должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Расходных ордеров

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/cashout"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "0721",
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
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/e446a227-41b1-11e6-8a84-bae500000005",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata",
                "type": "cashout",
                "mediaType": "application/json"
              },
              "shared": true,
              "name": "0722",
              "description": "Расходный ордер созданный и обновленный через API",
              "code": "12412470912",
              "externalCode": "unreal777slknf",
              "moment": "2016-06-27 16:52:24",
              "applicable": true,
              "sum": 25190,
              "paymentPurpose": "Оплата нового заказа поставщику",
              "expenseItem": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/1be23a18-0479-11e5-a260-448a5b426e7e",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
                  "type": "expenseitem",
                  "mediaType": "application/json"
                }
              },
              "attributes": [
                {
                  "id": "c88569fc-3f8e-11e6-8a84-bae5000000fd",
                  "value": 0.49
                },
                {
                  "id": "c88570d2-3f8e-11e6-8a84-bae5000000fe",
                  "value": 7501
                },
                {
                  "id": "c8857703-3f8e-11e6-8a84-bae5000000ff",
                  "value": true
                }
              ]
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Расходных ордеров.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/e446a227-41b1-11e6-8a84-bae500000005",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata",
      "type": "cashout",
      "mediaType": "application/json"
    },
    "id": "e446a227-41b1-11e6-8a84-bae500000005",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "name": "0721",
    "moment": "2012-06-27 16:52:24",
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/e446a227-41b1-11e6-8a84-bae500000005",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata",
      "type": "cashout",
      "mediaType": "application/json"
    },
    "id": "e446a227-41b1-11e6-8a84-bae500000005",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-07-04 09:41:17",
    "name": "0722",
    "description": "Расходный ордер созданный и обновленный через API",
    "code": "12412470912",
    "externalCode": "unreal777slknf",
    "moment": "2016-06-27 16:52:24",
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
    "sum": 900,
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
    "attributes": [
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata/attributes/c88569fc-3f8e-11e6-8a84-bae5000000fd",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "c88569fc-3f8e-11e6-8a84-bae5000000fd",
        "name": "Доля",
        "type": "double",
        "value": 0.49
      },
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata/attributes/c88570d2-3f8e-11e6-8a84-bae5000000fe",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "c88570d2-3f8e-11e6-8a84-bae5000000fe",
        "name": "Попытки",
        "type": "long",
        "value": 7501
      },
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata/attributes/c8857703-3f8e-11e6-8a84-bae5000000ff",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "c8857703-3f8e-11e6-8a84-bae5000000ff",
        "name": "Поступил",
        "type": "boolean",
        "value": true
      }
    ],
    "paymentPurpose": "Оплата нового заказа поставщику",
    "expenseItem": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/1be23a18-0479-11e5-a260-448a5b426e7e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
        "type": "expenseitem",
        "mediaType": "application/json"
      }
    }
  }
]

```

### Удалить Расходный ордер

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Расходного ордера.|

> Запрос на удаление Расходного ордера  с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/cashout/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление Расходного ордера.

### Массовое удаление Расходных ордеров

В теле запроса нужно передать массив, содержащий JSON метаданных Расходных ордеров, которые вы хотите удалить.


> Запрос на массовое удаление Расходных ордеров. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/cashout/delete"
  -H "Authorization: Basic <Access-Token>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata",
            "type": "cashout",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata",
            "type": "cashout",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Расходных ордеров.

```json
[
  {
    "info":"Сущность 'cashout' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'cashout' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
``` 

### Метаданные Расходных ордеров
#### Метаданные Расходных ордеров
Запрос на получение метаданных Расходных ордеров. Результат - объект JSON, включающий в себя:

+ **meta** - Ссылка на метаданные Расходных ордеров
+ **attributes** - Массив объектов доп. полей Расходных ордеров в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **states** - Массив статусов Расходных ордеров
+ **createShared** - создавать новые Расходные ордера с меткой "Общий"

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Расходных ордеров

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Расходных ордеров.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata/attributes/c88569fc-3f8e-11e6-8a84-bae5000000fd",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c88569fc-3f8e-11e6-8a84-bae5000000fd",
      "name": "Доля",
      "type": "double",
      "required": false
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata/attributes/c88570d2-3f8e-11e6-8a84-bae5000000fe",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c88570d2-3f8e-11e6-8a84-bae5000000fe",
      "name": "Попытки",
      "type": "long",
      "required": false
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata/attributes/c8857703-3f8e-11e6-8a84-bae5000000ff",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c8857703-3f8e-11e6-8a84-bae5000000ff",
      "name": "Поступил",
      "type": "boolean",
      "required": false
    }
  ],
  "states": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata/states/0eda7963-41b1-11e6-8a84-bae50000006e",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "0eda7963-41b1-11e6-8a84-bae50000006e",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Kek",
      "color": 10667543,
      "stateType": "Regular",
      "entityType": "cashout"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata/states/0eda80ad-41b1-11e6-8a84-bae50000006f",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "0eda80ad-41b1-11e6-8a84-bae50000006f",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Lol",
      "color": 4354177,
      "stateType": "Regular",
      "entityType": "cashout"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata/states/0eda8542-41b1-11e6-8a84-bae500000070",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "0eda8542-41b1-11e6-8a84-bae500000070",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "LMAO",
      "color": 15491487,
      "stateType": "Regular",
      "entityType": "cashout"
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
  "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata/attributes/b54f1d9c-558a-11e6-8a84-bae50000006c",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "b54f1d9c-558a-11e6-8a84-bae50000006c",
  "name": "Строка",
  "type": "string",
  "required": false
}
```

### Шаблон расходного ордера
#### Шаблон расходного ордера
> Запрос на получение предзаполненого стандартными значениями шаблона расходного ордера без связи с каким-либо документом.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/cashout/new"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d ''  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного расходного ордера.

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

### Шаблон расходного ордера на основе
Запрос на получение предзаполненного представления расходного ордера на основе другого документа.

> Запрос на получение шаблона расходного ордера на основе заказа поставщику.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/cashout/new"
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
Успешный запрос. Результат - JSON представление предзаполненного расходного ордера.

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

> Запрос на получение шаблона расходного ордера на основе возврата покупателя.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/cashout/new"
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
Успешный запрос. Результат - JSON представление предзаполненного расходного ордера.

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

> Запрос на получение шаблона расходного ордера на основе приемки.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/cashout/new"
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
Успешный запрос. Результат - JSON представление предзаполненного расходного ордера.

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

> Запрос на получение шаблона расходного ордера на основе счета поставщика.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/cashout/new"
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
Успешный запрос. Результат - JSON представление предзаполненного расходного ордера.

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

> Запрос на получение шаблона расходного ордера на основе выданного отчета комиссионера.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/cashout/new"
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
Успешный запрос. Результат - JSON представление предзаполненного расходного ордера.

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
  "moment": "2016-11-25 18:17:38",
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

### Расходный ордер

### Получить Расходный ордер

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Расходного ордера.|

> Запрос на получение отдельного Расходного ордера с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/cashout/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Расходного ордера.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/fd9b07ea-41b0-11e6-8a84-bae500000069",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata",
    "type": "cashout",
    "mediaType": "application/json"
  },
  "id": "fd9b07ea-41b0-11e6-8a84-bae500000069",
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
  "updated": "2016-07-04 09:34:14",
  "name": "00001",
  "description": "Ордер созданный через UI.",
  "externalCode": "Biim5OxdjUnFcC2saaU551",
  "moment": "2016-07-04 09:30:00",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/cdbc62de-3f68-11e6-8a84-bae500000050",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    },
    "value": 63
  },
  "sum": 3174603,
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/e16fc992-41b0-11e6-8a84-bae500000066",
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata/states/0eda8542-41b1-11e6-8a84-bae500000070",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata/attributes/c8857703-3f8e-11e6-8a84-bae5000000ff",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c8857703-3f8e-11e6-8a84-bae5000000ff",
      "name": "Поступил",
      "type": "boolean",
      "value": false
    }
  ],
  "paymentPurpose": "Оплата приемки",
  "expenseItem": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/82031d62-2e58-11e6-ab5c-d8cb8a84bae5",
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

### Изменить Расходный ордер
Запрос на обновление Расходного ордера   с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Расходного ордера , кроме тех, что
помечены `Только для чтения` в описании [атрибутов Расходного ордера ](../documents/#dokumenty-rashodnyj-order).
При обновлении полей **organization** и **agent** нужно также обновить поля **organizationAccount** и
**agentAccount** соответственно, иначе произойдет ошибка. <br>
Для привязки расходного ордера к другим документам
нужно положить в поле под именем **operations** все **meta** тех документов, к которым вы хотите привязать финансовую операцию.
Также для каждого документа можно указать cумму, оплаченную по данному документу из этого платежа **linkedSum**.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Расходного ордера.|

> Пример запроса на обновление отдельного Расходного ордера.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/cashout/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "shared": true,
            "name": "0722",
            "description": "Расходный ордер созданный и обновленный через API",
            "code": "12412470912",
            "externalCode": "unreal777slknf",
            "moment": "2016-06-27 16:52:24",
            "applicable": true,
            "sum": 25190,
            "paymentPurpose": "Оплата нового заказа поставщику",
            "expenseItem": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/1be23a18-0479-11e5-a260-448a5b426e7e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
                "type": "expenseitem",
                "mediaType": "application/json"
              }
            },
            "attributes": [
              {
                "id": "c88569fc-3f8e-11e6-8a84-bae5000000fd",
                "value": 0.49
              },
              {
                "id": "c88570d2-3f8e-11e6-8a84-bae5000000fe",
                "value": 7501
              },
              {
                "id": "c8857703-3f8e-11e6-8a84-bae5000000ff",
                "value": true
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Расходного ордера.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/e446a227-41b1-11e6-8a84-bae500000005",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata",
    "type": "cashout",
    "mediaType": "application/json"
  },
  "id": "e446a227-41b1-11e6-8a84-bae500000005",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-07-04 09:41:17",
  "name": "0722",
  "description": "Расходный ордер созданный и обновленный через API",
  "code": "12412470912",
  "externalCode": "unreal777slknf",
  "moment": "2016-06-27 16:52:24",
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
  "sum": 900,
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
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata/attributes/c88569fc-3f8e-11e6-8a84-bae5000000fd",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c88569fc-3f8e-11e6-8a84-bae5000000fd",
      "name": "Доля",
      "type": "double",
      "value": 0.49
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata/attributes/c88570d2-3f8e-11e6-8a84-bae5000000fe",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c88570d2-3f8e-11e6-8a84-bae5000000fe",
      "name": "Попытки",
      "type": "long",
      "value": 7501
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashout/metadata/attributes/c8857703-3f8e-11e6-8a84-bae5000000ff",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c8857703-3f8e-11e6-8a84-bae5000000ff",
      "name": "Поступил",
      "type": "boolean",
      "value": true
    }
  ],
  "paymentPurpose": "Оплата нового заказа поставщику",
  "expenseItem": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/1be23a18-0479-11e5-a260-448a5b426e7e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
      "type": "expenseitem",
      "mediaType": "application/json"
    }
  }
}
```
