## Входящий платеж
### Входящие платежи  
Средствами JSON API можно создавать и обновлять сведения о платеже , запрашивать списки Входящих платежей и сведения по отдельным Входящим платежам. Кодом сущности для Входящего платежа в составе JSON API является ключевое слово **paymentin**. Больше о платежах  и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203025346-%D0%9F%D0%BB%D0%B0%D1%82%D0%B5%D0%B6%D0%B8).

#### Атрибуты сущности

| Название                | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                                      |
| ----------------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |:----------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**           | UUID                                                      | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                          |
| **agent**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные контрагента<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                     |
| **agentAccount**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные счета контрагента<br>`+Expand`                                                                                                     |
| **applicable**          | Boolean                                                   | `=` `!=`                                                                                                                                          | Отметка о проведении<br>`+Обязательное при ответе`                                                                                            |
| **attributes**          | Array(Object)                                             | [Операторы доп. полей](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-fil-traciq-po-dopolnitel-nym-polqm) | Коллекция метаданных доп. полей. [Поля объекта](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)                       |
| **code**                | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Код Входящего платежа                                                                                                                         |
| **contract**            | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные договора<br>`+Expand`                                                                                                              |
| **created**             | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата создания<br>`+Обязательное при ответе` `+Только для чтения`                                                                              |
| **deleted**             | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего удаления Входящего платежаа<br>`+Только для чтения`                                                                         |
| **description**         | String(4096)                                              | `=` `!=` `~` `~=` `=~`                                                                                                                            | Комментарий Входящего платежа                                                                                                                 |
| **externalCode**        | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код Входящего платежа<br>`+Обязательное при ответе`                                                                                   |
| **files**               | MetaArray                                                 |                                                                                                                                                   | Метаданные массива [Файлов](../dictionaries/#suschnosti-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand` |
| **group**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                      |
| **id**                  | UUID                                                      | `=` `!=`                                                                                                                                          | ID Входящего платежа<br>`+Обязательное при ответе` `+Только для чтения`                                                                       |
| **incomingDate**        | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Входящая дата                                                                                                                                 |
| **incomingNumber**      | Int                                                       | `=` `!=` `~` `~=` `=~`                                                                                                                            | Входящий номер                                                                                                                                |
| **meta**                | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные Входящего платежа<br>`+Обязательное при ответе`                                                                                    |
| **moment**              | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата документа<br>`+Обязательное при ответе`                                                                                                  |
| **name**                | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование Входящего платежа<br>`+Обязательное при ответе`                                                                                  |
| **organization**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                          |
| **organizationAccount** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные счета юрлица<br>`+Expand`                                                                                                          |
| **owner**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Обязательное при ответе` `+Expand`                                                                                  |
| **paymentPurpose**      | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Назначение платежа<br>`+Обязательное при ответе`                                                                                              |
| **printed**             | Boolean                                                   | `=` `!=`                                                                                                                                          | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                      |
| **project**             | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные проекта<br>`+Expand`                                                                                                               |
| **published**           | Boolean                                                   | `=` `!=`                                                                                                                                          | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                    |
| **rate**                | Object                                                    |                                                                                                                                                   | Валюта. [Подробнее тут](../documents/#dokumenty-teh-operaciq-valuta-w-dokumentah)<br>`+Обязательное при ответе`                               |
| **shared**              | Boolean                                                   | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе`                                                                                                    |
| **salesChannel**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные канала продаж<br>`+Expand`                                                                                                         |
| **state**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные статуса Входящего платежа<br>`+Expand`                                                                                             |
| **sum**                 | Int                                                       | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Сумма Входящего платежа в установленной валюте<br>`+Обязательное при ответе` `+Только для чтения`                                             |
| **syncId**              | UUID                                                      | `=` `!=`                                                                                                                                          | ID синхронизации. После заполнения недоступен для изменения                                                                                   |
| **updated**             | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления Входящего платежа<br>`+Обязательное при ответе` `+Только для чтения`                                             |

#### Связи с другими документами

| Название                       | Описание                                                                                                                                |
| ------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------- |
| **factureOut**                 | Ссылка на Счет-фактуру выданный, с которым связан этот платеж в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **operations**                 | Массив ссылок на связанные операции в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)                           |

Разрешенные типы связанных операций:

+ Заказ покупателя (customerorder)
+ Возврат поставщику (purchasereturn)
+ Отгрузка (demand)
+ Счет покупателю (invoiceout)
+ Полученный отчет комиссионера (commissionreportin)
+ Смена (retailShift)

О работе с доп. полями Входящих платежей можно прочитать [здесь](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)

### Получить Входящие платежи 
Запрос всех Входящих платежей на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                     |
| ----------- | :-------------------------------------------------------- | :----------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                         |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                 |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Входящие платежи. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |

> Получить Входящие платежи

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/paymentin"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Входящих платежей.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata",
    "type": "paymentin",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/ad1ffc02-3f8e-11e6-8a84-bae5000000fa",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata",
        "type": "paymentin",
        "mediaType": "application/json"
      },
      "id": "ad1ffc02-3f8e-11e6-8a84-bae5000000fa",
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
      "updated": "2016-07-01 16:21:10",
      "name": "00001",
      "description": "Платеж за красивые глаза",
      "externalCode": "8hBoVBUMiDeumkozzjwX83",
      "moment": "2016-07-01 16:19:00",
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
      "sum": 124124100,
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata/states/ab8f5213-3f8e-11e6-8a84-bae5000000f5",
          "type": "state",
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
      "paymentPurpose": "За красивые глаза",
      "incomingNumber": "12412569",
      "incomingDate": "2016-07-22 00:00:00",
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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/d57389cb-3d3e-11e6-8a84-bae500000001",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata",
        "type": "paymentin",
        "mediaType": "application/json"
      },
      "id": "d57389cb-3d3e-11e6-8a84-bae500000001",
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
      "name": "00001",
      "externalCode": "221dSpiQiVQuVfCbRun623",
      "moment": "2015-06-22 00:00:00",
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
      "sum": 440000,
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/c4a418a7-3d2d-11e6-8a84-bae500000003",
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/c4a418a7-3d2d-11e6-8a84-bae500000003/accounts/c4a423fd-3d2d-11e6-8a84-bae500000004",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "paymentPurpose": "Оплата по счету №19111167 от 19.06.2015 за предоставление услуги \"МойСклад\" по договору оферты на сайте www.moysklad.ru/subscription В том числе НДС (18%), 671.29 руб.",
      "incomingNumber": "408",
      "incomingDate": "2015-06-19 00:00:00",
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
  ]
}
```

### Создать Входящий платеж 
Запрос на создание нового Входящего платежа.
Обязательные для создания поля:

| Параметр                       | Описание                                                                                        |
| ------------------------------ | :---------------------------------------------------------------------------------------------- |
| **organization**               | Ссылка на ваше юрлицо в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **agent**                      | Ссылка на контрагента в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |

> Пример создания нового Входящего платежа с телом запроса, содержащим только необходимые поля.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/paymentin"
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
Успешный запрос. Результат - JSON представление созданного Входящего платежа.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/85cf9c48-3f92-11e6-8a84-bae500000096",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata",
    "type": "paymentin",
    "mediaType": "application/json"
  },
  "id": "85cf9c48-3f92-11e6-8a84-bae500000096",
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
  "updated": "2016-07-01 16:48:42",
  "name": "333222",
  "moment": "2016-06-27 17:52:24",
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
  }
}
```

### Массовое создание и обновление Входящих платежей 
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Входящих платежей.
В теле запроса нужно передать массив, содержащий JSON представления Входящих платежей, которые вы хотите создать или обновить.
Обновляемые Входящие платежи должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Входящих платежей

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/paymentin"
    -H "Authorization: Basic <Credentials>"
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
              }
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/85cf9c48-3f92-11e6-8a84-bae500000096",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata",
                "type": "paymentin",
                "mediaType": "application/json"
              },
              "name": "333444",
              "description": "Не совсем Новый Входящий платеж",
              "code": "101010001",
              "externalCode": "2213sfkksbajf214812slkanf",
              "moment": "2012-06-27 17:52:24",
              "applicable": true,
              "sum": 40020,
              "incomingNumber": "3",
              "incomingDate": "2016-03-17 10:52:24"
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Входящих платежей.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/85cf9c48-3f92-11e6-8a84-bae500000096",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata",
      "type": "paymentin",
      "mediaType": "application/json"
    },
    "id": "85cf9c48-3f92-11e6-8a84-bae500000096",
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
    "updated": "2016-07-01 16:48:42",
    "name": "333222",
    "moment": "2016-06-27 17:52:24",
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
    }
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/85cf9c48-3f92-11e6-8a84-bae500000096",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata",
      "type": "paymentin",
      "mediaType": "application/json"
    },
    "id": "85cf9c48-3f92-11e6-8a84-bae500000096",
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
    "updated": "2016-07-01 16:50:51",
    "name": "333444",
    "description": "Не совсем Новый Входящий платеж",
    "code": "101010001",
    "externalCode": "2213sfkksbajf214812slkanf",
    "moment": "2012-06-27 16:52:24",
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
    "sum": 40020,
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
    "incomingNumber": "3",
    "incomingDate": "2016-03-17 10:52:24"
  }
]
```

### Удалить Входящий платеж

**Параметры**

| Параметр | Описание                                                                                  |
| :------- | :---------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Входящего платежа. |

> Запрос на удаление Входящего платежа с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Входящего платежа.

### Массовое удаление Входящих платежей

В теле запроса нужно передать массив, содержащий JSON метаданных Входящих платежей, которые вы хотите удалить.


> Запрос на массовое удаление Входящих платежей. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata",
            "type": "paymentin",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata",
            "type": "paymentin",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Входящих платежей.

```json
[
  {
    "info":"Сущность 'paymentin' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'paymentin' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
``` 

### Метаданные Входящих платежей 
#### Метаданные Входящих платежей 
Запрос на получение метаданных Входящих платежей. Результат - объект JSON, включающий в себя:

| Параметр                       | Описание                                                                                                               |
| ------------------------------ | :--------------------------------------------------------------------------------------------------------------------- |
| **meta**                       | Ссылка на метаданные Входящих платежей                                                                                 |
| **attributes**                 | Массив объектов доп. полей Входящих платежей в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **states**                     | Массив статусов Входящих платежей                                                                                      |
| **createShared**               | создавать новые Входящие платежи с меткой "Общий"                                                                      |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Входящих платежей 

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Входящих платежей.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata/attributes/fd6114e2-3f91-11e6-8a84-bae500000107",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "fd6114e2-3f91-11e6-8a84-bae500000107",
      "name": "Доля",
      "type": "long",
      "required": false
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata/attributes/fd611bc1-3f91-11e6-8a84-bae500000108",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "fd611bc1-3f91-11e6-8a84-bae500000108",
      "name": "Попытки",
      "type": "long",
      "required": false
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata/attributes/fd612138-3f91-11e6-8a84-bae500000109",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "fd612138-3f91-11e6-8a84-bae500000109",
      "name": "Поступил",
      "type": "boolean",
      "required": false
    }
  ],
  "states": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata/states/ab8f5213-3f8e-11e6-8a84-bae5000000f5",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "ab8f5213-3f8e-11e6-8a84-bae5000000f5",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Оформлен",
      "color": 10066329,
      "stateType": "Regular",
      "entityType": "paymentin"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata/states/ab8f5a56-3f8e-11e6-8a84-bae5000000f6",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "ab8f5a56-3f8e-11e6-8a84-bae5000000f6",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Переведен",
      "color": 10066329,
      "stateType": "Regular",
      "entityType": "paymentin"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata/states/ab8f612b-3f8e-11e6-8a84-bae5000000f7",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "ab8f612b-3f8e-11e6-8a84-bae5000000f7",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Получен",
      "color": 10066329,
      "stateType": "Regular",
      "entityType": "paymentin"
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
  "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata/attributes/04d7d27c-558b-11e6-8a84-bae500000075",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "04d7d27c-558b-11e6-8a84-bae500000075",
  "name": "Импорировано из банка",
  "type": "boolean",
  "required": false
}
```

### Шаблон Входящего платежа 
#### Шаблон Входящего платежа 
> Запрос на получение предзаполненого стандартными значениями шаблона входящего платежа без связи с каким-либо документом.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/new"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d ''  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного входящего платежа.

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

### Шаблон Входящего платежа на основе 
Запрос на получение предзаполненного входящего платежа на основе другого документа.
В результате запроса, будет создан предзаполненный шаблон входящего платежа на основе переданного документа.

> Запрос на получение шаблона входящего платежа на основе заказа покупателя.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/new"
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
Успешный запрос. Результат - JSON представление предзаполненного входящего платежа.

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
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
      "type": "account",
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

> Запрос на получение шаблона входящего платежа на основе возврата поставщику.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/new"
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
Успешный запрос. Результат - JSON представление предзаполненного входящего платежа.

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
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
      "type": "account",
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

> Запрос на получение шаблона входящего платежа на основе отгрузки.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/new"
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
Успешный запрос. Результат - JSON представление предзаполненного входящего платежа.

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
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
      "type": "account",
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

> Запрос на получение шаблона входящего платежа на основе счета покупателя.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/new"
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
Успешный запрос. Результат - JSON представление предзаполненного входящего платежа.

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
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
      "type": "account",
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

> Запрос на получение шаблона входящего платежа на основе полученного отчета комиссионера.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/new"
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
Успешный запрос. Результат - JSON представление предзаполненного входящего платежа.

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
  "moment": "2016-11-25 18:13:31",
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
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "paymentPurpose": "Оплата по полученному отчету комиссионера № 0000000000000001 от 2016-11-25 18:07:00. Сумма: 103 500,00 без НДС",
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

### Входящий платеж

### Получить Входящий платеж

**Параметры**

| Параметр | Описание                                                                                  |
| :------- | :---------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Входящего платежа. |
 
> Запрос на получение отдельного Входящего платежа с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Входящего платежа.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/ad1ffc02-3f8e-11e6-8a84-bae5000000fa",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata",
    "type": "paymentin",
    "mediaType": "application/json"
  },
  "id": "ad1ffc02-3f8e-11e6-8a84-bae5000000fa",
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
  "updated": "2016-07-01 16:21:10",
  "name": "00001",
  "description": "Платеж за красивые глаза",
  "externalCode": "8hBoVBUMiDeumkozzjwX83",
  "moment": "2016-07-01 16:19:00",
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
  "sum": 124124100,
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata/states/ab8f5213-3f8e-11e6-8a84-bae5000000f5",
      "type": "state",
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
  "paymentPurpose": "За красивые глаза",
  "incomingNumber": "12412569",
  "incomingDate": "2016-07-22 00:00:00"
}
```

### Изменить Входящий платеж 
Запрос на обновление Входящего платежа  с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Входящего платежа, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Входящего платежа](../documents/#dokumenty-vhodqschij-platezh).
При обновлении полей **organization** и **agent** нужно также обновить поля **organizationAccount** и
**agentAccount** соответственно, иначе произойдет ошибка. <br>
Для привязки входящего платежа к другим документам
нужно положить в поле под именем **operations** все **meta** тех документов, к которым вы хотите привязать финансовую операцию.
Также для каждого документа можно указать cумму, оплаченную по данному документу из этого платежа **linkedSum**.

**Параметры**

| Параметр | Описание                                                                                  |
| :------- | :---------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Входящего платежа. |

> Пример запроса на обновление отдельного Входящего платежа.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "333444",
            "description": "Не совсем Новый Входящий платеж",
            "code": "101010001",
            "externalCode": "2213sfkksbajf214812slkanf",
            "moment": "2012-06-27 17:52:24",
            "applicable": true,
            "sum": 40020,
            "incomingNumber": "3",
            "incomingDate": "2016-03-17 10:52:24"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Входящего платежа.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/85cf9c48-3f92-11e6-8a84-bae500000096",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata",
    "type": "paymentin",
    "mediaType": "application/json"
  },
  "id": "85cf9c48-3f92-11e6-8a84-bae500000096",
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
  "updated": "2016-07-01 16:50:51",
  "name": "333444",
  "description": "Не совсем Новый Входящий платеж",
  "code": "101010001",
  "externalCode": "2213sfkksbajf214812slkanf",
  "moment": "2012-06-27 16:52:24",
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
  "sum": 40020,
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
  "incomingNumber": "3",
  "incomingDate": "2016-03-17 10:52:24"
}
```
