## Счет-фактура выданный
### Счета-фактуры выданные  
Средствами JSON API можно создавать и изменять Счета-фактуры выданные, запрашивать списки Счетов-фактур выданных, сведения по отдельным Счетам-фактурам и удалять Счета-фактуры. Счет-фактура может быть создана только на основании отгрузки, возврата поставщику или входящего платежа, без документа-основания счет-фактуру создать нельзя. Кодом сущности для Счета-фактуры выданного в составе JSON API является ключевое слово **factureout**.

#### Атрибуты сущности

| Название            | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                                      |
| ------------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| **accountId**       | UUID                                                      | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                          |
| **agent**           | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные контрагента<br>`+Обязательное при ответе` `+Expand`                                                                                |
| **applicable**      | Boolean                                                   | `=` `!=`                                                                                                                                          | Отметка о проведении<br>`+Обязательное при ответе`                                                                                            |
| **attributes**      | Array(Object)                                             | [Операторы доп. полей](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-fil-traciq-po-dopolnitel-nym-polqm) | Коллекция метаданных доп. полей. [Поля объекта](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)                       |
| **code**            | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Код выданного Счета-фактуры                                                                                                                   |
| **contract**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные договора<br>`+Expand`                                                                                                              |
| **created**         | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата создания<br>`+Обязательное при ответе` `+Только для чтения`                                                                              |
| **deleted**         | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего удаления выданного Счета-фактуры<br>`+Только для чтения`                                                                    |
| **description**     | String(4096)                                              | `=` `!=` `~` `~=` `=~`                                                                                                                            | Комментарий выданного Счета-фактуры                                                                                                           |
| **externalCode**    | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код выданного Счета-фактуры<br>`+Обязательное при ответе`                                                                             |
| **files**           | MetaArray                                                 |                                                                                                                                                   | Метаданные массива [Файлов](../dictionaries/#suschnosti-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand` |
| **group**           | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                      |
| **id**              | UUID                                                      | `=` `!=`                                                                                                                                          | ID выданного Счета-фактуры<br>`+Обязательное при ответе` `+Только для чтения`                                                                 |
| **meta**            | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные выданного Счета-фактуры<br>`+Обязательное при ответе`                                                                              |
| **moment**          | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата документа<br>`+Обязательное при ответе`                                                                                                  |
| **name**            | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование выданного Счета-фактуры<br>`+Обязательное при ответе`                                                                            |
| **organization**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                          |
| **owner**           | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Обязательное при ответе` `+Expand`                                                                                  |
| **printed**         | Boolean                                                   | `=` `!=`                                                                                                                                          | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                      |
| **published**       | Boolean                                                   | `=` `!=`                                                                                                                                          | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                    |
| **rate**            | Object                                                    |                                                                                                                                                   | Валюта. [Подробнее тут](../documents/#dokumenty-teh-operaciq-valuta-w-dokumentah)<br>`+Обязательное при ответе`                               |
| **shared**          | Boolean                                                   | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе`                                                                                                    |
| **state**           | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные статуса выданного Счета-фактуры<br>`+Expand`                                                                                       |
| **stateContractId** | String(255)                                               |                                                                                                                                                   | Идентификатор государственного контракта, договора (соглашения)                                                                               |
| **sum**             | Int                                                       | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Сумма выданного Счета-фактуры в копейках<br>`+Обязательное при ответе` `+Только для чтения`                                                   |
| **syncId**          | UUID                                                      | `=` `!=`                                                                                                                                          | ID синхронизации. После заполнения недоступен для изменения                                                                                   |
| **updated**         | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления выданного Счета-фактуры<br>`+Обязательное при ответе` `+Только для чтения`                                       |

#### Связи с другими документами

| Название                       | Описание                                                                                                                  |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------ |
| **demands**                    | Массив ссылок на связанные отгрузки в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)             |
| **payments**                   | Массив ссылок на связанные входящие платежи в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)     |
| **returns**                    | Массив ссылок на связанные возвраты поставщикам в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |

####  Другие поля 
| Название          | Тип                                                       | Описание                                                        |
| ----------------- | :-------------------------------------------------------- | :-------------------------------------------------------------- |
| **consignee**     | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные грузополучателя (контрагент или юрлицо)<br>`+Expand` |
| **paymentNumber** | String(255)                                               | Название платежного документа                                   |
| **paymentDate**   | DateTime                                                  | Дата платежного документа                                       |

О работе с доп. полями Счетов-фактур можно прочитать [здесь](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)


### Получить выданные Счета-фактуры 
Запрос всех Счетов-фактур выданных на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                           |
| ----------- | :-------------------------------------------------------- | :----------------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                               |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                       |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой выданные Счета-фактуры. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |

> Получить выданные Счета-фактуры

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/factureout"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Счетов-фактур выданных.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata",
    "type": "factureout",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/02eb1458-aa6e-11e6-8a84-bc5200000076",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata",
        "type": "factureout",
        "mediaType": "application/json"
      },
      "id": "02eb1458-aa6e-11e6-8a84-bc5200000076",
      "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/c4b17cf2-99bb-11e6-8a84-bc520000002a",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/c3cff163-99bb-11e6-8a84-bc5200000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-14 16:38:48",
      "name": "00001",
      "description": "комментарий",
      "externalCode": "pb8w9ZcVhQbFff4R58SQ30",
      "moment": "2016-11-14 16:25:00",
      "applicable": true,
      "printed": true,
      "published": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/217065c0-9b50-11e6-8a84-bc52000000bf",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        },
        "value": 60
      },
      "sum": 0,
      "contract": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/f1204d87-9c46-11e6-8a84-bc52000000b9",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
          "type": "contract",
          "mediaType": "application/json"
        }
      },
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "state": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata/states/e1115474-aa6e-11e6-8a84-bc520000007c",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "attributes": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata/attributes/8b0b6c1d-aa6f-11e6-8a84-bc520000008a",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "8b0b6c1d-aa6f-11e6-8a84-bc520000008a",
          "name": "доп поле",
          "type": "string",
          "value": "значение доп.поля"
        }
      ],
      "paymentNumber": "платежный д-т",
      "paymentDate": "2016-11-14 00:00:00",
      "stateContractId": "005674",
      "consignee": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "demands": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/f2570f6a-aa6d-11e6-8a84-bc520000006f",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
            "type": "demand",
            "mediaType": "application/json"
          }
        }
      ]
    }
  ]
}
```

### Создать Счет-фактуру 
Запрос на создание Счета-фактуры на основании отгрузки, входящего платежа или возврата поставщику.
Документ-основание должен быть указан в единственном экземпляре.</br>
Для установки **paymentNumber**, **paymentDate** значения должны быть переданы в теле Json, так как перечисленные поля не заполняются из документа-основания.

> Пример создания нового Счета-фактуры, содержащим только необходимые поля.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/factureout"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "demands": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/a95dbc95-24e0-11e7-1542-821d00000001",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
                  "type": "demand",
                  "mediaType": "application/json"
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Счета-фактуры.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/fa610268-2b5d-11e7-1542-821d00000010",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata",
    "type": "factureout",
    "mediaType": "application/json"
  },
  "id": "fa610268-2b5d-11e7-1542-821d00000010",
  "accountId": "f4917c99-2346-11e7-1542-821d00000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/f500c39b-2346-11e7-1542-821d0000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f49447eb-2346-11e7-1542-821d00000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2017-04-27 18:27:08",
  "name": "00001",
  "externalCode": "KAwh2VT7hIzHDWQoIcfvS0",
  "moment": "2017-04-27 18:27:00",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/f52dd97c-2346-11e7-1542-821d00000058",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 0,
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f52d95dd-2346-11e7-1542-821d00000056",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/f52a29b3-2346-11e7-1542-821d00000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "created": "2017-04-27 18:27:09",
  "printed": true,
  "published": true,
  "demands": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/a95dbc95-24e0-11e7-1542-821d00000001",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
        "type": "demand",
        "mediaType": "application/json"
      }
    }
  ]
}

```

### Массовое создание и обновление Счетов-фактур выданных 
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Счетов-фактур выданных.
В теле запроса нужно передать массив, содержащий JSON представления Счетов-фактур выданных, которые вы хотите создать или обновить.
Обновляемые выданные Счета-фактуры должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Счетов-фактур выданных

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/factureout"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "demands": [
                {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/a95dbc95-24e0-11e7-1542-821d00000001",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
                    "type": "demand",
                    "mediaType": "application/json"
                  }
                }
              ]
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/99d41b01-aa8a-11e6-8af5-581e0000007e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata",
                "type": "factureout",
                "mediaType": "application/json"
              },
              "name": "FactureOut2"
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Счетов-фактур выданных.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/fa610268-2b5d-11e7-1542-821d00000010",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata",
      "type": "factureout",
      "mediaType": "application/json"
    },
    "id": "fa610268-2b5d-11e7-1542-821d00000010",
    "accountId": "f4917c99-2346-11e7-1542-821d00000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/f500c39b-2346-11e7-1542-821d0000002a",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f49447eb-2346-11e7-1542-821d00000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2017-04-27 18:27:08",
    "name": "00001",
    "externalCode": "KAwh2VT7hIzHDWQoIcfvS0",
    "moment": "2017-04-27 18:27:00",
    "applicable": true,
    "rate": {
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/f52dd97c-2346-11e7-1542-821d00000058",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    },
    "sum": 0,
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f52d95dd-2346-11e7-1542-821d00000056",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "organization": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/f52a29b3-2346-11e7-1542-821d00000051",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "created": "2017-04-27 18:27:09",
    "printed": true,
    "published": true,
    "demands": [
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/a95dbc95-24e0-11e7-1542-821d00000001",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
          "type": "demand",
          "mediaType": "application/json"
        }
      }
    ]
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/99d41b01-aa8a-11e6-8af5-581e0000007e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata",
      "type": "factureout",
      "mediaType": "application/json"
    },
    "id": "99d41b01-aa8a-11e6-8af5-581e0000007e",
    "accountId": "f4917c99-2346-11e7-1542-821d00000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/f500c39b-2346-11e7-1542-821d0000002a",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f49447eb-2346-11e7-1542-821d00000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2017-04-27 18:36:36",
    "name": "FactureOut2",
    "externalCode": "KAwh2VT7hIzHDWQoIcfvS0",
    "moment": "2017-04-27 18:27:00",
    "applicable": true,
    "rate": {
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/f52dd97c-2346-11e7-1542-821d00000058",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    },
    "sum": 0,
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f52d95dd-2346-11e7-1542-821d00000056",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "organization": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/f52a29b3-2346-11e7-1542-821d00000051",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "created": "2017-04-27 18:27:09",
    "printed": true,
    "published": true,
    "stateContractId": "005674",
    "demands": [
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/a95dbc95-24e0-11e7-1542-821d00000001",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
          "type": "demand",
          "mediaType": "application/json"
        }
      }
    ]
  }
]
```

### Массовое удаление Счетов-фактур выданных

В теле запроса нужно передать массив, содержащий JSON метаданных Счетов-фактур выданных, которые вы хотите удалить.


> Запрос на массовое удаление Счетов-фактур выданных. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/factureout/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata",
            "type": "factureout",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata",
            "type": "factureout",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Счетов-фактур выданных.

```json
[
  {
    "info":"Сущность 'factureout' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'factureout' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
``` 

### Метаданные Счетов-фактур выданных 
#### Метаданные Счетов-фактур 
Запрос на получение метаданных Счетов-фактур выданных. Результат - объект JSON, включающий в себя:

| Параметр                       | Описание                                                                                                                    |
| ------------------------------ | :-------------------------------------------------------------------------------------------------------------------------- |
| **meta**                       | Ссылка на метаданные Счетов-фактур выданных                                                                                 |
| **attributes**                 | Массив объектов доп. полей Счетов-фактур выданных в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **states**                     | Массив статусов Счетов-фактур выданных                                                                                      |
| **createShared**               | создавать новые выданные Счета-фактуры с меткой "Общий"                                                                     |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Счетов-фактур выданных

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Счетов-фактур выданных.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata/attributes/8b0b6c1d-aa6f-11e6-8a84-bc520000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "8b0b6c1d-aa6f-11e6-8a84-bc520000008a",
      "name": "доп поле",
      "type": "string",
      "required": false
    }
  ],
  "states": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata/states/e1115474-aa6e-11e6-8a84-bc520000007c",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "e1115474-aa6e-11e6-8a84-bc520000007c",
      "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
      "name": "rewtret",
      "color": 10066329,
      "stateType": "Regular",
      "entityType": "factureout"
    }
  ],
  "createShared": false
}
```

### Отдельное доп. поле



**Параметры**

| Параметр | Описание                                                                          |
| :------- | :-------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 8b0b6c1d-aa6f-11e6-8a84-bc520000008a* id Доп. поля. |
 
> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata/attributes/8b0b6c1d-aa6f-11e6-8a84-bc520000008a"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata/attributes/8b0b6c1d-aa6f-11e6-8a84-bc520000008a",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "8b0b6c1d-aa6f-11e6-8a84-bc520000008a",
  "name": "доп поле",
  "type": "string",
  "required": false
}
```
 
 ### Шаблон Счета-фактуры выданного 
#### Шаблон Счета-фактуры выданного на основе 
Запрос на получение предзаполненного шаблона Счета-фактуры выданного на основе отгрузки, возврата поставщику или входящего платежа.
В ответ на запрос вернется предзаполненный шаблон Счета-фактуры выданного, который
затем можно будет использовать для создания нового Счета-фактуры с помощью POST запроса.

> Пример запроса на создание шаблона Счета-фактуры выданного на основе отгрузки.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/factureout/new"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "demands": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/fb3e5ec6-66cc-11e7-6adb-ede5000000be",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
                  "type": "demand",
                  "mediaType": "application/json"
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного Счета-фактуры выданного.

```json
{
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/498a0445-66cc-11e7-6adb-ede50000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=498a0445-66cc-11e7-6adb-ede50000002a"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/48f21833-66cc-11e7-6adb-ede500000001",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2017-07-20 14:54:48",
  "applicable": true,
  "printed": true,
  "published": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/49b4b0b0-66cc-11e7-6adb-ede500000058",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=49b4b0b0-66cc-11e7-6adb-ede500000058"
      }
    }
  },
  "sum": 10000,
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/49b43cd5-66cc-11e7-6adb-ede500000056",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=49b43cd5-66cc-11e7-6adb-ede500000056"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/49b00bbc-66cc-11e7-6adb-ede500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=49b00bbc-66cc-11e7-6adb-ede500000051"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata/states/82d0741a-6abc-11e7-6adb-ede50000000e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "demands": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/fb3e5ec6-66cc-11e7-6adb-ede5000000be",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
        "type": "demand",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#demand/edit?id=fb3e5ec6-66cc-11e7-6adb-ede5000000be"
      }
    }
  ]
}
```

> Пример запроса на создание шаблона Счета-фактуры выданного на основе возврата поставщику.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/factureout/new"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "returns": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/purchasereturn/62ebf0be-67d8-11e7-6adb-ede500000033",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/purchasereturn/metadata",
                  "type": "purchasereturn",
                  "mediaType": "application/json",
                  "uuidHref": "https://online.moysklad.ru/app/#purchasereturn/edit?id=62ebf0be-67d8-11e7-6adb-ede500000033"
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного Счета-фактуры выданного.

```json
{
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/498a0445-66cc-11e7-6adb-ede50000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=498a0445-66cc-11e7-6adb-ede50000002a"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/48f21833-66cc-11e7-6adb-ede500000001",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2017-07-20 15:26:40",
  "applicable": true,
  "printed": true,
  "published": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/49b4b0b0-66cc-11e7-6adb-ede500000058",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=49b4b0b0-66cc-11e7-6adb-ede500000058"
      }
    }
  },
  "sum": 0,
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/49b40d55-66cc-11e7-6adb-ede500000054",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=49b40d55-66cc-11e7-6adb-ede500000054"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/49b00bbc-66cc-11e7-6adb-ede500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=49b00bbc-66cc-11e7-6adb-ede500000051"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata/states/82d0741a-6abc-11e7-6adb-ede50000000e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "returns": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/purchasereturn/62ebf0be-67d8-11e7-6adb-ede500000033",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/purchasereturn/metadata",
        "type": "purchasereturn",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#purchasereturn/edit?id=62ebf0be-67d8-11e7-6adb-ede500000033"
      }
    }
  ]
}
```

> Пример запроса на создание шаблона Счета-фактуры выданного на основе входящего платежа.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/factureout/new"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "payments": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/f69cb6ec-6d45-11e7-6adb-ede50000001c",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata",
                  "type": "paymentin",
                  "mediaType": "application/json",
                  "uuidHref": "https://online.moysklad.ru/app/#paymentin/edit?id=f69cb6ec-6d45-11e7-6adb-ede50000001c"
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного Счета-фактуры выданного.

```json
{
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/498a0445-66cc-11e7-6adb-ede50000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=498a0445-66cc-11e7-6adb-ede50000002a"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/48f21833-66cc-11e7-6adb-ede500000001",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2017-07-20 15:25:09",
  "applicable": true,
  "printed": true,
  "published": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/49b4b0b0-66cc-11e7-6adb-ede500000058",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=49b4b0b0-66cc-11e7-6adb-ede500000058"
      }
    }
  },
  "sum": 0,
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/35950354-6ae5-11e7-6adb-ede500000036",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=35950354-6ae5-11e7-6adb-ede500000036"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/49b00bbc-66cc-11e7-6adb-ede500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=49b00bbc-66cc-11e7-6adb-ede500000051"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata/states/82d0741a-6abc-11e7-6adb-ede50000000e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "payments": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/f69cb6ec-6d45-11e7-6adb-ede50000001c",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata",
        "type": "paymentin",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#paymentin/edit?id=f69cb6ec-6d45-11e7-6adb-ede50000001c"
      }
    }
  ]
}
```

### Счет-фактура выданный
 
### Получить Счет-фактуру выданный
 
**Параметры**

| Параметр | Описание                                                                              |
| :------- | :------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 99d41b01-aa8a-11e6-8af5-581e0000007e* id Счета-фактуры. |

> Запрос на получение отдельного Счета-фактуры выданного с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/factureout/99d41b01-aa8a-11e6-8af5-581e0000007e"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Счета-фактуры выданного.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/99d41b01-aa8a-11e6-8af5-581e0000007e",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata",
    "type": "factureout",
    "mediaType": "application/json"
  },
  "id": "99d41b01-aa8a-11e6-8af5-581e0000007e",
  "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/9575ba6d-9609-11e6-8af5-581e000000ad",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/956169fa-9609-11e6-8af5-581e00000009",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-14 19:52:25",
  "name": "00001",
  "externalCode": "iXXMP3d-gJI8avpfWsDAU3",
  "moment": "2016-11-08 17:26:00",
  "applicable": true,
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9596f69c-9609-11e6-8af5-581e000000d9",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/95920812-9609-11e6-8af5-581e000000d4",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata/states/9770ee98-aa8a-11e6-8af5-581e0000007b",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata/attributes/3aa46d91-aa8a-11e6-8af5-581e00000077",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "3aa46d91-aa8a-11e6-8af5-581e00000077",
      "name": "special_description",
      "type": "string",
      "value": "jih"
    }
  ],
  "stateContractId": "005674",
  "demands": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/750c8f8e-a5bf-11e6-8af5-581e000000bc",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
        "type": "demand",
        "mediaType": "application/json"
      }
    }
  ]
}
```

### Изменить Счет-фактуру выданный

**Параметры**

| Параметр | Описание                                                                              |
| :------- | :------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 99d41b01-aa8a-11e6-8af5-581e0000007e* id Счета-фактуры. |
 
Запрос на обновление Счета-фактуры с указанным id.
> Пример запроса на обновление Счета-фактуры.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/factureout/99d41b01-aa8a-11e6-8af5-581e0000007e"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "FactureOut2"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Счета-фактуры.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/99d41b01-aa8a-11e6-8af5-581e0000007e",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata",
    "type": "factureout",
    "mediaType": "application/json"
  },
  "id": "99d41b01-aa8a-11e6-8af5-581e0000007e",
  "accountId": "f4917c99-2346-11e7-1542-821d00000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/f500c39b-2346-11e7-1542-821d0000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f49447eb-2346-11e7-1542-821d00000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2017-04-27 18:36:36",
  "name": "FactureOut2",
  "externalCode": "KAwh2VT7hIzHDWQoIcfvS0",
  "moment": "2017-04-27 18:27:00",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/f52dd97c-2346-11e7-1542-821d00000058",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 0,
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f52d95dd-2346-11e7-1542-821d00000056",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/f52a29b3-2346-11e7-1542-821d00000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "created": "2017-04-27 18:27:09",
  "printed": true,
  "published": true,
  "stateContractId": "005674",
  "demands": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/a95dbc95-24e0-11e7-1542-821d00000001",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
        "type": "demand",
        "mediaType": "application/json"
      }
    }
  ]
}

```

### Удалить Счет-фактуру выданный

**Параметры**

| Параметр | Описание                                                                              |
| :------- | :------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b20* id Счета-фактуры. |
 
> Запрос на удаление Счета-фактуры выданного с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/factureout/7944ef04-f831-11e5-7a69-971500188b20"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Счета-фактуры выданного.

