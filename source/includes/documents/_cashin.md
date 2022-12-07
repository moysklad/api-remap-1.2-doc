## Приходный ордер
### Приходные ордера
Средствами JSON API можно создавать и обновлять сведения о Приходном ордере, запрашивать списки Приходных ордеров и сведения по отдельным Приходным ордерам.Кодом сущности для Приходного ордера в составе JSON API является ключевое слово **cashin**.

#### Атрибуты сущности

| Название           | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                                      |
| ------------------ | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |:----------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**      | UUID                                                      | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                          |
| **agent**          | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные контрагента<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                     |
| **applicable**     | Boolean                                                   | `=` `!=`                                                                                                                                          | Отметка о проведении<br>`+Обязательное при ответе`                                                                                            |
| **attributes**     | Array(Object)                                             | [Операторы доп. полей](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-fil-traciq-po-dopolnitel-nym-polqm) | Коллекция метаданных доп. полей. [Поля объекта](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)                       |
| **code**           | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Код Приходного ордера                                                                                                                         |
| **contract**       | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные договора<br>`+Expand`                                                                                                              |
| **created**        | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата создания<br>`+Обязательное при ответе` `+Только для чтения`                                                                              |
| **deleted**        | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего удаления Приходного ордера<br>`+Только для чтения`                                                                          |
| **description**    | String(4096)                                              | `=` `!=` `~` `~=` `=~`                                                                                                                            | Комментарий Приходного ордера                                                                                                                 |
| **externalCode**   | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код Приходного ордера<br>`+Обязательное при ответе`                                                                                   |
| **files**          | MetaArray                                                 |                                                                                                                                                   | Метаданные массива [Файлов](../dictionaries/#suschnosti-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand` |
| **group**          | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                      |
| **id**             | UUID                                                      | `=` `!=`                                                                                                                                          | ID Приходного ордера<br>`+Обязательное при ответе` `+Только для чтения`                                                                       |
| **meta**           | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные Приходного ордера<br>`+Обязательное при ответе`                                                                                    |
| **moment**         | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата документа<br>`+Обязательное при ответе`                                                                                                  |
| **name**           | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование Приходного ордера<br>`+Обязательное при ответе`                                                                                  |
| **organization**   | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                          |
| **owner**          | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Обязательное при ответе` `+Expand`                                                                                  |
| **paymentPurpose** | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Основание<br>`+Обязательное при ответе`                                                                                                       |
| **printed**        | Boolean                                                   | `=` `!=`                                                                                                                                          | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                      |
| **project**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные проекта<br>`+Expand`                                                                                                               |
| **published**      | Boolean                                                   | `=` `!=`                                                                                                                                          | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                    |
| **rate**           | Object                                                    |                                                                                                                                                   | Валюта. [Подробнее тут](../documents/#dokumenty-teh-operaciq-valuta-w-dokumentah)<br>`+Обязательное при ответе`                               |
| **salesChannel**   | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные канала продаж<br>`+Expand`                                                                                                         |
| **shared**         | Boolean                                                   | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе`                                                                                                    |
| **state**          | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные статуса Приходного ордера<br>`+Expand`                                                                                             |
| **sum**            | Int                                                       | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Сумма Приходного ордера в установленной валюте<br>`+Обязательное при ответе` `+Только для чтения`                                             |
| **syncId**         | UUID                                                      | `=` `!=`                                                                                                                                          | ID синхронизации. После заполнения недоступен для изменения                                                                                   |
| **updated**        | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления Приходного ордера<br>`+Обязательное при ответе` `+Только для чтения`                                             |
| **vatSum**         | Float                                                     |                                                                                                                                                   | Сумма НДС<br>`+Обязательное при ответе`                                                                                               |

#### Связи с другими документами

| Название                       | Описание                                                                                                                                  |
| ------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------- |
| **factureIn**                  | Ссылка на Счет-фактуру полученный, с которым связан этот платеж в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **operations**                 | Массив ссылок на связанные операции в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)                             |

Разрешенные типы связанных операций:

+ Заказ покупателя (customerorder)
+ Возврат поставщику (purchasereturn)
+ Отгрузка (demand)
+ Счет покупателю (invoiceout)
+ Полученный отчет комиссионера (commissionreportin)
+ Смена (retailShift)

О работе с доп. полями Приходных ордеров можно прочитать [здесь](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)


### Получить Приходные ордера
Запрос всех Приходных ордеров на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                     |
| ----------- | :-------------------------------------------------------- | :----------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                         |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                 |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Приходные ордера. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |

> Получить Приходные ордера

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/cashin"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Приходных ордеров.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata",
    "type": "cashin",
    "mediaType": "application/json",
    "size": 3,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/07ea2c6f-3fad-11e6-8a84-bae50000013f",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata",
        "type": "cashin",
        "mediaType": "application/json"
      },
      "id": "07ea2c6f-3fad-11e6-8a84-bae50000013f",
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
      "updated": "2016-07-04 08:58:24",
      "name": "00003",
      "description": "И еще один приходный ордер",
      "externalCode": "0fI6AjAHh-x1oYYNwBYeN1",
      "moment": "2016-07-04 08:57:00",
      "applicable": false,
      "created": "2016-08-25 19:55:00",
      "printed": true,
      "published": true,
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
      "sum": 132000,
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/0028cec8-3fad-11e6-8a84-bae50000013c",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
          "type": "contract",
          "mediaType": "application/json"
        }
      },
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/15121cef-32ca-11e6-8a84-bae500000072",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "state": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata/states/aaa6d501-3fac-11e6-8a84-bae50000012e",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "paymentPurpose": "И еще одна оплата заказа.",
      "operations": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/90ba347d-6b8b-11e6-8a84-bae5000000bd",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
            "type": "retailshift",
            "mediaType": "application/json"
          },
          "linkedSum": 80000
        }
      ]
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/b0ec3c98-3fac-11e6-8a84-bae500000131",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata",
        "type": "cashin",
        "mediaType": "application/json"
      },
      "id": "b0ec3c98-3fac-11e6-8a84-bae500000131",
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
      "updated": "2016-07-04 08:55:58",
      "name": "00001",
      "description": "Приходный Ордер.",
      "externalCode": "E7vH1TaKii9bkuw2pekD22",
      "moment": "2016-07-04 08:54:00",
      "applicable": true,
      "created": "2016-08-25 19:55:00",
      "printed": true,
      "published": true,
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
      "sum": 3189,
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/1489a08d-32ca-11e6-8a84-bae50000000d",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "state": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata/states/aaa6c45a-3fac-11e6-8a84-bae50000012b",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "paymentPurpose": "Оплата заказа",
      "operations": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/90ba347d-6b8b-11e6-8a84-bae5000000bd",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
            "type": "retailshift",
            "mediaType": "application/json"
          },
          "linkedSum": 80000
        }
      ]
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/df861103-3fac-11e6-8a84-bae500000137",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata",
        "type": "cashin",
        "mediaType": "application/json"
      },
      "id": "df861103-3fac-11e6-8a84-bae500000137",
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
      "updated": "2016-07-04 08:57:19",
      "name": "00002",
      "description": "Еще приходный ордер.",
      "externalCode": "FEYR3meShqh5ICWNygGeq0",
      "moment": "2016-07-04 08:56:00",
      "applicable": true,
      "created": "2016-08-25 19:55:00",
      "printed": true,
      "published": true,
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
      "sum": 1700000,
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/c556343a-3fac-11e6-8a84-bae500000134",
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/14c505eb-32ca-11e6-8a84-bae500000045",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "state": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata/states/aaa6cfcf-3fac-11e6-8a84-bae50000012d",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "paymentPurpose": "Оплата второго заказа"
    }
  ]
}
```

### Создать Приходный ордер
Запрос на создание нового Приходного ордера.
Обязательные для создания поля:

| Название                       | Описание                                                                                        |
| ------------------------------ | :---------------------------------------------------------------------------------------------- |
| **organization**               | Ссылка на ваше юрлицо в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **agent**                      | Ссылка на контрагента в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |

> Пример создания нового Приходного ордера с телом запроса, содержащим только необходимые поля.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/cashin"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
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
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Приходного ордера.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/3fd08b2d-41b0-11e6-8a84-bae500000000",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata",
    "type": "cashin",
    "mediaType": "application/json"
  },
  "id": "3fd08b2d-41b0-11e6-8a84-bae500000000",
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
  "name": "000712",
  "moment": "2012-06-10 09:52:24",
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
  }
}
```

### Массовое создание и обновление Приходных ордеров
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Приходных ордеров.
В теле запроса нужно передать массив, содержащий JSON представления Приходных ордеров, которые вы хотите создать или обновить.
Обновляемые Приходные ордера должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Приходных ордеров

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/cashin"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "000712",
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
              }
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/3fd08b2d-41b0-11e6-8a84-bae500000000",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata",
                "type": "cashin",
                "mediaType": "application/json"
              },
              "owner": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/f3c5d206-dafc-4eb3-8678-f97e76964e1d",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                  "type": "employee",
                  "mediaType": "application/json"
                }
              },
              "shared": true,
              "name": "000722",
              "description": "Приходный ордер созданный и измененный через API",
              "code": "333712366",
              "externalCode": "103kek312",
              "moment": "2016-06-10 09:52:24",
              "applicable": false,
              "sum": 555000,
              "paymentPurpose": "Оплата заказа №0046",
              "attributes": [
                {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata/attributes/c57c1f22-3fae-11e6-8a84-bae500000142",
                    "type": "attributemetadata",
                    "mediaType": "application/json"
                  },
                  "value": 12
                },
                {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata/attributes/c57c2526-3fae-11e6-8a84-bae500000143",
                    "type": "attributemetadata",
                    "mediaType": "application/json"
                  },
                  "value": true
                },
                {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata/attributes/c57c2a5c-3fae-11e6-8a84-bae500000144",
                    "type": "attributemetadata",
                    "mediaType": "application/json"
                  },
                  "value": 3.13
                }
              ]
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Приходных ордеров.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/3fd08b2d-41b0-11e6-8a84-bae500000000",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata",
      "type": "cashin",
      "mediaType": "application/json"
    },
    "id": "3fd08b2d-41b0-11e6-8a84-bae500000000",
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
    "name": "000712",
    "moment": "2012-06-10 09:52:24",
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
    }
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/3fd08b2d-41b0-11e6-8a84-bae500000000",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata",
      "type": "cashin",
      "mediaType": "application/json"
    },
    "id": "3fd08b2d-41b0-11e6-8a84-bae500000000",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/f3c5d206-dafc-4eb3-8678-f97e76964e1d",
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
    "updated": "2016-07-04 09:54:38",
    "name": "000722",
    "description": "Приходный ордер созданный и измененный через API",
    "code": "333712366",
    "externalCode": "103kek312",
    "moment": "2016-06-10 09:52:24",
    "applicable": false,
    "created": "2016-08-25 19:55:00",
    "printed": true,
    "published": true,
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
    "sum": 3700,
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata/attributes/c57c1f22-3fae-11e6-8a84-bae500000142",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "c57c1f22-3fae-11e6-8a84-bae500000142",
        "name": "AttributeName1",
        "type": "long",
        "value": 12
      },
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata/attributes/c57c2526-3fae-11e6-8a84-bae500000143",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "c57c2526-3fae-11e6-8a84-bae500000143",
        "name": "AttributeName2",
        "type": "boolean",
        "value": true
      },
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata/attributes/c57c2a5c-3fae-11e6-8a84-bae500000144",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "c57c2a5c-3fae-11e6-8a84-bae500000144",
        "name": "AttributeName3",
        "type": "double",
        "value": 3.13
      }
    ],
    "paymentPurpose": "Оплата заказа №0046"
  }
]
```

### Удалить Приходный ордер

**Параметры**

| Параметр | Описание                                                                                  |
| :------- | :---------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Приходного ордера. |

> Запрос на удаление Приходного ордера с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/cashin/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Приходного ордера.

### Массовое удаление Приходных ордеров

В теле запроса нужно передать массив, содержащий JSON метаданных Приходных ордеров, которые вы хотите удалить.


> Запрос на массовое удаление Приходных ордеров. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/cashin/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata",
            "type": "cashin",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata",
            "type": "cashin",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Приходных ордеров.

```json
[
  {
    "info":"Сущность 'cashin' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'cashin' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
``` 

### Метаданные Приходных ордеров
#### Метаданные Приходных ордеров
Запрос на получение метаданных Приходных ордеров. Результат - объект JSON, включающий в себя:

| Параметр                       | Описание                                                                                                               |
| ------------------------------ | :--------------------------------------------------------------------------------------------------------------------- |
| **meta**                       | Ссылка на метаданные Приходных ордеров                                                                                 |
| **attributes**                 | Массив объектов доп. полей Приходных ордеров в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **states**                     | Массив статусов Приходных ордеров                                                                                      |
| **createShared**               | создавать новые Приходные ордер с меткой "Общий"                                                                       |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Приходных ордеров

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Приходных ордеров.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata/attributes/c57c1f22-3fae-11e6-8a84-bae500000142",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c57c1f22-3fae-11e6-8a84-bae500000142",
      "name": "AttributeName1",
      "type": "long",
      "required": false
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata/attributes/c57c2526-3fae-11e6-8a84-bae500000143",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c57c2526-3fae-11e6-8a84-bae500000143",
      "name": "AttributeName2",
      "type": "boolean",
      "required": false
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata/attributes/c57c2a5c-3fae-11e6-8a84-bae500000144",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c57c2a5c-3fae-11e6-8a84-bae500000144",
      "name": "AttributeName3",
      "type": "double",
      "required": false
    }
  ],
  "states": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata/states/aaa6c45a-3fac-11e6-8a84-bae50000012b",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "aaa6c45a-3fac-11e6-8a84-bae50000012b",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Выслан",
      "color": 15280409,
      "stateType": "Regular",
      "entityType": "cashin"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata/states/aaa6ca7a-3fac-11e6-8a84-bae50000012c",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "aaa6ca7a-3fac-11e6-8a84-bae50000012c",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Принят",
      "color": 34617,
      "stateType": "Regular",
      "entityType": "cashin"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata/states/aaa6cfcf-3fac-11e6-8a84-bae50000012d",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "aaa6cfcf-3fac-11e6-8a84-bae50000012d",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Ожидается",
      "color": 15106326,
      "stateType": "Regular",
      "entityType": "cashin"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata/states/aaa6d501-3fac-11e6-8a84-bae50000012e",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "aaa6d501-3fac-11e6-8a84-bae50000012e",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Оформлен",
      "color": 10774205,
      "stateType": "Regular",
      "entityType": "cashin"
    }
  ],
  "createShared": false
}

```

### Отдельное доп. поле



**Параметры**

| Параметр | Описание                                                                          |
| :------- | :-------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Доп. поля. |

> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata/attributes/c7f589f9-558a-11e6-8a84-bae50000006f",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "c7f589f9-558a-11e6-8a84-bae50000006f",
  "name": "AttributeName1",
  "type": "long",
  "required": false
}
```

### Шаблон Приходного ордера
#### Шаблон Приходного ордера
> Запрос на получение предзаполненного приходного ордера со стандартными полями без связи с какими-либо другими документами.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/cashin/new"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d ''  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного приходного ордера.

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
  }
}
```

### Шаблон Приходного ордера на основе
Запрос на получение шаблона приходного ордера на основе другого документа.
В результате запроса, будет предзаполненный приходный ордер на основе переданного документа.

> Запрос на получение шаблона приходного ордера на основе заказа покупателя.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/cashin/new"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "operations": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/559adab5-915c-11e6-8a84-bae500000014",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
                  "type": "customerorder",
                  "mediaType": "application/json"
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного приходного ордера.

```json
{
  "applicable": true,
  "created": "2016-08-25 19:55:00",
  "printed": true,
  "published": true,
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
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
  "paymentPurpose": "Оплата по заказу № 0302201 от 2016-10-13 12:38:00. Сумма: 0,00 без НДС",
  "operations": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/559adab5-915c-11e6-8a84-bae500000014",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
        "type": "customerorder",
        "mediaType": "application/json"
      },
      "linkedSum": 0
    }
  ]
}
```

> Запрос на получение шаблона приходного ордера на основе возврата поставщику.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/cashin/new"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "operations": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/purchasereturn/4f5e259b-961a-11e6-8a84-bae500000066",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/purchasereturn/metadata",
                  "type": "purchasereturn",
                  "mediaType": "application/json"
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного приходного ордера.

```json
{
  "applicable": true,
  "created": "2016-08-25 19:55:00",
  "printed": true,
  "published": true,
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
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
  "paymentPurpose": "Оплата по возврату поставщику № 00001 от 2016-10-19 19:37:00. Сумма: 0,00 без НДС",
  "operations": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/purchasereturn/4f5e259b-961a-11e6-8a84-bae500000066",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/purchasereturn/metadata",
        "type": "purchasereturn",
        "mediaType": "application/json"
      },
      "linkedSum": 0
    }
  ]
}
```

> Запрос на получение шаблона приходного ордера на основе отгрузки.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/cashin/new"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "operations": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/06406b97-9138-11e6-8a84-bae500000000",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
                  "type": "demand",
                  "mediaType": "application/json"
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного приходного ордера.

```json
{
  "applicable": true,
  "created": "2016-08-25 19:55:00",
  "printed": true,
  "published": true,
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
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
  "paymentPurpose": "Оплата по отгрузке № 000201 от 2016-10-13 12:38:00. Сумма: 0,00 без НДС",
  "operations": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/06406b97-9138-11e6-8a84-bae500000000",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
        "type": "demand",
        "mediaType": "application/json"
      },
      "linkedSum": 0
    }
  ]
}
```

> Запрос на получение шаблона приходного ордера на основе счета покупателю.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/cashin/new"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "operations": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/6cb87758-95f4-11e6-8a84-bae500000067",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
                  "type": "invoiceout",
                  "mediaType": "application/json"
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного приходного ордера.

```json
{
  "applicable": true,
  "created": "2016-08-25 19:55:00",
  "printed": true,
  "published": true,
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
  "paymentPurpose": "Оплата по счету № 53252 от 2016-10-19 15:06:00. Сумма: 0,00 без НДС",
  "operations": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/6cb87758-95f4-11e6-8a84-bae500000067",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
        "type": "invoiceout",
        "mediaType": "application/json"
      },
      "linkedSum": 0
    }
  ]
}

```

> Запрос на получение шаблона приходного ордера на основе полученного отчета комиссионера.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/cashin/new"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "operations": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/fe44fe4f-b320-11e6-8a84-bae500000092",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata",
                  "type": "commissionreportin",
                  "mediaType": "application/json"
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного приходного ордера.

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
  "moment": "2016-11-25 18:09:50",
  "applicable": true,
  "created": "2016-08-25 19:55:00",
  "printed": true,
  "published": true,
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
  "sum": 10350000,
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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/fe44fe4f-b320-11e6-8a84-bae500000092",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata",
        "type": "commissionreportin",
        "mediaType": "application/json"
      },
      "linkedSum": 10350000
    }
  ]
}
```

### Приходный ордер

### Получить Приходный ордер

**Параметры**

| Параметр | Описание                                                                                  |
| :------- | :---------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Приходного ордера. |

> Запрос на получение отдельного Приходного ордера с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/cashin/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Приходного ордера.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/b0ec3c98-3fac-11e6-8a84-bae500000131",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata",
    "type": "cashin",
    "mediaType": "application/json"
  },
  "id": "b0ec3c98-3fac-11e6-8a84-bae500000131",
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
  "updated": "2016-07-04 08:55:58",
  "name": "00001",
  "description": "Приходный Ордер.",
  "externalCode": "E7vH1TaKii9bkuw2pekD22",
  "moment": "2016-07-04 08:54:00",
  "applicable": true,
  "created": "2016-08-25 19:55:00",
  "printed": true,
  "published": true,
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
  "sum": 3189,
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/1489a08d-32ca-11e6-8a84-bae50000000d",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata/states/aaa6c45a-3fac-11e6-8a84-bae50000012b",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "paymentPurpose": "Оплата заказа",
  "operations": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/90ba347d-6b8b-11e6-8a84-bae5000000bd",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
        "type": "retailshift",
        "mediaType": "application/json"
      },
      "linkedSum": 80000
    }
  ]
}
```

### Изменить Приходный ордер
Запрос на обновление Приходного ордера  с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Приходного ордера, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Приходного ордера](../documents/#dokumenty-prihodnyj-order).
При обновлении полей **organization** и **agent** нужно также обновить поля **organizationAccount** и
**agentAccount** соответственно, иначе произойдет ошибка.<br>
Для привязки приходного ордера к другим документам
нужно положить в поле под именем **operations** все **meta** тех документов, к которым вы хотите привязать финансовую операцию.
Также для каждого документа можно указать cумму, оплаченную по данному документу из этого платежа **linkedSum**.

**Параметры**

| Параметр | Описание                                                                                  |
| :------- | :---------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Приходного ордера. |

> Пример запроса на обновление отдельного Приходного ордера.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/cashin/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "owner": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/f3c5d206-dafc-4eb3-8678-f97e76964e1d",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "type": "employee",
                "mediaType": "application/json"
              }
            },
            "shared": true,
            "name": "000722",
            "description": "Приходный ордер созданный и измененный через API",
            "code": "333712366",
            "externalCode": "103kek312",
            "moment": "2016-06-10 09:52:24",
            "applicable": false,
            "sum": 555000,
            "paymentPurpose": "Оплата заказа №0046",
            "attributes": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata/attributes/c57c1f22-3fae-11e6-8a84-bae500000142",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": 12
              },
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata/attributes/c57c2526-3fae-11e6-8a84-bae500000143",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": true
              },
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata/attributes/c57c2a5c-3fae-11e6-8a84-bae500000144",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": 3.13
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Приходного ордера.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/3fd08b2d-41b0-11e6-8a84-bae500000000",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata",
    "type": "cashin",
    "mediaType": "application/json"
  },
  "id": "3fd08b2d-41b0-11e6-8a84-bae500000000",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/f3c5d206-dafc-4eb3-8678-f97e76964e1d",
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
  "updated": "2016-07-04 09:54:38",
  "name": "000722",
  "description": "Приходный ордер созданный и измененный через API",
  "code": "333712366",
  "externalCode": "103kek312",
  "moment": "2016-06-10 09:52:24",
  "applicable": false,
  "created": "2016-08-25 19:55:00",
  "printed": true,
  "published": true,
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
  "sum": 3700,
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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata/attributes/c57c1f22-3fae-11e6-8a84-bae500000142",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c57c1f22-3fae-11e6-8a84-bae500000142",
      "name": "AttributeName1",
      "type": "long",
      "value": 12
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata/attributes/c57c2526-3fae-11e6-8a84-bae500000143",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c57c2526-3fae-11e6-8a84-bae500000143",
      "name": "AttributeName2",
      "type": "boolean",
      "value": true
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata/attributes/c57c2a5c-3fae-11e6-8a84-bae500000144",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c57c2a5c-3fae-11e6-8a84-bae500000144",
      "name": "AttributeName3",
      "type": "double",
      "value": 3.13
    }
  ],
  "paymentPurpose": "Оплата заказа №0046"
}
```
