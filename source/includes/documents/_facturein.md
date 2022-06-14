## Счет-фактура полученный
### Счета-фактуры полученные  
Средствами JSON API можно создавать и изменять Счета-фактуры полученные, запрашивать списки Счетов-фактур полученных, сведения по отдельным Счетам-фактурам и удалять Счета-фактуры. Счет-фактура может быть создана только на основании приемки или исходящего платежа, без документа-основания счет-фактуру создать нельзя.  Кодом сущности для Счета-фактуры полученного в составе JSON API является ключевое слово **facturein**.

#### Атрибуты сущности

| Название         | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                                      |
| ---------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| **accountId**    | UUID                                                      | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                          |
| **agent**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные контрагента<br>`+Обязательное при ответе` `+Expand`                                                                                |
| **applicable**   | Boolean                                                   | `=` `!=`                                                                                                                                          | Отметка о проведении<br>`+Обязательное при ответе`                                                                                            |
| **attributes**   | Array(Object)                                             | [Операторы доп. полей](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-fil-traciq-po-dopolnitel-nym-polqm) | Коллекция метаданных доп. полей. [Поля объекта](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)                       |
| **code**         | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Код выданного Счета-фактуры полученного                                                                                                       |
| **contract**     | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные договора<br>`+Expand`                                                                                                              |
| **created**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата создания<br>`+Обязательное при ответе` `+Только для чтения`                                                                              |
| **deleted**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего удаления Счета-фактуры полученного<br>`+Только для чтения`                                                                  |
| **description**  | String(4096)                                              | `=` `!=` `~` `~=` `=~`                                                                                                                            | Комментарий выданного Счета-фактуры полученного                                                                                               |
| **externalCode** | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код выданного Счета-фактуры полученного<br>`+Обязательное при ответе`                                                                 |
| **files**        | MetaArray                                                 |                                                                                                                                                   | Метаданные массива [Файлов](../dictionaries/#suschnosti-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand` |
| **group**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                      |
| **id**           | UUID                                                      | `=` `!=`                                                                                                                                          | ID Счета-фактуры полученного<br>`+Обязательное при ответе` `+Только для чтения`                                                               |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные Счета-фактуры полученного<br>`+Обязательное при ответе`                                                                            |
| **moment**       | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата документа<br>`+Обязательное при ответе`                                                                                                  |
| **name**         | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование выданного Счета-фактуры полученного<br>`+Обязательное при ответе`                                                                |
| **organization** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                          |
| **owner**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Обязательное при ответе` `+Expand`                                                                                  |
| **printed**      | Boolean                                                   | `=` `!=`                                                                                                                                          | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                      |
| **published**    | Boolean                                                   | `=` `!=`                                                                                                                                          | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                    |
| **rate**         | Object                                                    |                                                                                                                                                   | Валюта. [Подробнее тут](../documents/#dokumenty-teh-operaciq-valuta-w-dokumentah)<br>`+Обязательное при ответе`                               |
| **shared**       | Boolean                                                   | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе`                                                                                                    |
| **state**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные статуса Счета-фактуры полученного<br>`+Expand`                                                                                     |
| **sum**          | Int                                                       | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Сумма Счета-фактуры полученного в установленной валюте<br>`+Обязательное при ответе` `+Только для чтения`                                     |
| **syncId**       | UUID                                                      | `=` `!=`                                                                                                                                          | ID синхронизации. После заполнения недоступен для изменения                                                                                   |
| **updated**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления Счета-фактуры полученного<br>`+Обязательное при ответе` `+Только для чтения`                                     |

#### Связи с другими документами

| Название                       | Описание                                                                                                               |
| ------------------------------ | :--------------------------------------------------------------------------------------------------------------------- |
| **supplies**                   | Массив ссылок на связанные приемки в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)           |
| **payments**                   | Массив ссылок на связанные исходящие платежи в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |

####  Другие поля 

| Название           | Тип      | Описание       |
| ------------------ | :------- | :------------- |
| **incomingNumber** | Int      | Входящий номер |
| **incomingDate**   | DateTime | Входящая дата  |

О работе с доп. полями Счетов-фактур можно прочитать [здесь](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)


### Получить Счета-фактуры полученные 
Запрос всех Счетов-фактур полученных на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                             |
| ----------- | :-------------------------------------------------------- | :------------------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                                 |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                         |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Счета-фактуры полученные. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |

> Получить Счета-фактуры полученные

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/facturein"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Счетов-фактур полученных.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/facturein",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/metadata",
    "type": "facturein",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/209fe91a-ab00-11e6-8af5-581e00000076",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/metadata",
        "type": "facturein",
        "mediaType": "application/json"
      },
      "id": "209fe91a-ab00-11e6-8af5-581e00000076",
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
      "updated": "2016-11-15 09:52:51",
      "name": "00002",
      "externalCode": "sylr1937hnp9AAftWLeYl3",
      "moment": "2016-11-15 09:52:00",
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
      "sum": 200000,
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9596b6e2-9609-11e6-8af5-581e000000d7",
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
      "supplies": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/1b56b5c8-ab00-11e6-8af5-581e00000070",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
            "type": "supply",
            "mediaType": "application/json"
          }
        }
      ]
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/f4369e0b-aaff-11e6-8af5-581e0000006c",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/metadata",
        "type": "facturein",
        "mediaType": "application/json"
      },
      "id": "f4369e0b-aaff-11e6-8af5-581e0000006c",
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
      "updated": "2016-11-15 09:51:37",
      "name": "00001",
      "externalCode": "M0YjPeX8gqISsVA32pRQu0",
      "moment": "2016-11-15 09:51:00",
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9596b6e2-9609-11e6-8af5-581e000000d7",
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
      "supplies": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/ecc943f6-aaff-11e6-8af5-581e00000066",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
            "type": "supply",
            "mediaType": "application/json"
          }
        }
      ]
    }
  ]
}
```

### Создать Счет-фактуру 
Запрос на создание Счета-фактуры на основании приемки или исходящего платежа.
Документ-основание должен быть указан в единственном экземпляре.</br>
Для установки **incomingNumber**, **incomingDate** значения должны быть переданы в теле Json, так как перечисленные поля не заполняются из документа-основания.

> Пример создания нового Счета-фактуры, содержащим только необходимые поля.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/facturein"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "incomingNumber": "356124365",
            "incomingDate": "2017-04-06 00:00:00",
            "supplies": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/22e8d1ea-29bc-11e7-1542-821d00000002",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
                  "type": "supply",
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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/bc060447-2b48-11e7-1542-821d00000000",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/metadata",
    "type": "facturein",
    "mediaType": "application/json"
  },
  "id": "bc060447-2b48-11e7-1542-821d00000000",
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
  "updated": "2017-04-27 17:35:04",
  "name": "00001",
  "description": "dsfsdf",
  "externalCode": "5cp4fXAKjQ3MIxQNCKL-80",
  "moment": "2017-04-27 15:55:00",
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
  "sum": 4000,
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f52d7b30-2346-11e7-1542-821d00000054",
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
  "created": "2017-04-27 15:55:04",
  "printed": true,
  "published": true,
  "incomingNumber": "356124365",
  "incomingDate": "2017-04-06 00:00:00",
  "supplies": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/22e8d1ea-29bc-11e7-1542-821d00000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
        "type": "supply",
        "mediaType": "application/json"
      }
    }
  ]
}
```

### Массовое создание и обновление Счетов-фактур полученных 
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Счетов-фактур полученных.
В теле запроса нужно передать массив, содержащий JSON представления Счетов-фактур полученных, которые вы хотите создать или обновить.
Обновляемые Счета-фактуры полученные должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Счетов-фактур полученных

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/facturein"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "incomingNumber": "356124365",
              "incomingDate": "2017-04-06 00:00:00",
              "supplies": [
                {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/22e8d1ea-29bc-11e7-1542-821d00000002",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
                    "type": "supply",
                    "mediaType": "application/json"
                  }
                }
              ]
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/209fe91a-ab00-11e6-8af5-581e00000076",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/metadata",
                "type": "facturein",
                "mediaType": "application/json"
              },
              "name": "FactureIn2"
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Счетов-фактур полученных.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/bc060447-2b48-11e7-1542-821d00000000",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/metadata",
      "type": "facturein",
      "mediaType": "application/json"
    },
    "id": "bc060447-2b48-11e7-1542-821d00000000",
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
    "updated": "2017-04-27 17:35:04",
    "name": "00001",
    "description": "dsfsdf",
    "externalCode": "5cp4fXAKjQ3MIxQNCKL-80",
    "moment": "2017-04-27 15:55:00",
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
    "sum": 4000,
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f52d7b30-2346-11e7-1542-821d00000054",
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
    "created": "2017-04-27 15:55:04",
    "printed": true,
    "published": true,
    "incomingNumber": "356124365",
    "incomingDate": "2017-04-06 00:00:00",
    "supplies": [
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/22e8d1ea-29bc-11e7-1542-821d00000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
          "type": "supply",
          "mediaType": "application/json"
        }
      }
    ]
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/209fe91a-ab00-11e6-8af5-581e00000076",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/metadata",
      "type": "facturein",
      "mediaType": "application/json"
    },
    "id": "209fe91a-ab00-11e6-8af5-581e00000076",
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
    "updated": "2017-04-27 18:38:19",
    "name": "FactureIn2",
    "description": "dsfsdf",
    "externalCode": "5cp4fXAKjQ3MIxQNCKL-80",
    "moment": "2017-04-27 15:55:00",
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
    "sum": 4000,
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f52d7b30-2346-11e7-1542-821d00000054",
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
    "created": "2017-04-27 15:55:04",
    "printed": true,
    "published": true,
    "incomingNumber": "356124365",
    "incomingDate": "2017-04-06 00:00:00",
    "supplies": [
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/22e8d1ea-29bc-11e7-1542-821d00000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
          "type": "supply",
          "mediaType": "application/json"
        }
      }
    ]
  }
]
```

### Массовое удаление Счетов-фактур полученных

В теле запроса нужно передать массив, содержащий JSON метаданных Счетов-фактур полученных, которые вы хотите удалить.


> Запрос на массовое удаление Счетов-фактур полученных. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/facturein/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/metadata",
            "type": "facturein",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/metadata",
            "type": "facturein",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Счетов-фактур полученных.

```json
[
  {
    "info":"Сущность 'facturein' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'facturein' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
``` 

### Метаданные Счетов-фактур полученных 
#### Метаданные Счетов-фактур 
Запрос на получение метаданных Счетов-фактур полученных. Результат - объект JSON, включающий в себя:

| Параметр                       | Описание                                                                                                                      |
| ------------------------------ | :---------------------------------------------------------------------------------------------------------------------------- |
| **meta**                       | Ссылка на метаданные Счетов-фактур полученных                                                                                 |
| **attributes**                 | Массив объектов доп. полей Счетов-фактур полученных в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **states**                     | Массив статусов Счетов-фактур полученных                                                                                      |
| **createShared**               | создавать новые Счета-фактуры полученные с меткой "Общий"                                                                     |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Счетов-фактур полученных

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/facturein/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Счетов-фактур полученных.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/metadata/attributes/6323a876-ab00-11e6-8af5-581e00000083",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "6323a876-ab00-11e6-8af5-581e00000083",
      "name": "extra field",
      "type": "string",
      "required": false
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/metadata/attributes/6323b1d9-ab00-11e6-8af5-581e00000084",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "6323b1d9-ab00-11e6-8af5-581e00000084",
      "name": "else_field",
      "type": "string",
      "required": false
    }
  ],
  "states": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/metadata/states/6f210951-ab00-11e6-8af5-581e00000088",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "6f210951-ab00-11e6-8af5-581e00000088",
      "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
      "name": "my_status",
      "color": 10066329,
      "stateType": "Regular",
      "entityType": "facturein"
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
  "https://online.moysklad.ru/api/remap/1.2/entity/facturein/metadata/attributes/8b0b6c1d-aa6f-11e6-8a84-bc520000008a"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/metadata/attributes/6323b1d9-ab00-11e6-8af5-581e00000084",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "6323b1d9-ab00-11e6-8af5-581e00000084",
  "name": "else_field",
  "type": "string",
  "required": false
}
```

### Шаблон Счета-фактуры полученного 
#### Шаблон Счета-фактуры полученного на основе 
Запрос на получение предзаполненного шаблона Счета-фактуры полученного на основе приемки или исходящего платежа.
В ответ на запрос вернется предзаполненный шаблон Счета-фактуры полученного, который
затем можно будет использовать для создания нового Счета-фактуры с помощью POST запроса.

> Пример запроса на создание шаблона Счета-фактуры полученного на основе приемки.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/facturein/new"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "supplies": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/5dfd7505-67d8-11e7-6adb-ede50000002d",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
                  "type": "supply",
                  "mediaType": "application/json",
                  "uuidHref": "https://online.moysklad.ru/app/#supply/edit?id=5dfd7505-67d8-11e7-6adb-ede50000002d"
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного Счета-фактуры полученного.

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
  "moment": "2017-07-20 15:30:01",
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/metadata/states/7ef4eb25-6abc-11e7-6adb-ede50000000a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/metadata",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "supplies": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/5dfd7505-67d8-11e7-6adb-ede50000002d",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
        "type": "supply",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#supply/edit?id=5dfd7505-67d8-11e7-6adb-ede50000002d"
      }
    }
  ]
}
```

> Пример запроса на создание шаблона Счета-фактуры полученного на основе исходящего платежа.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/facturein/new"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "payments": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/dc5acb9c-6d46-11e7-6adb-ede500000030",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/metadata",
                  "type": "paymentout",
                  "mediaType": "application/json",
                  "uuidHref": "https://online.moysklad.ru/app/#paymentout/edit?id=dc5acb9c-6d46-11e7-6adb-ede500000030"
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного Счета-фактуры полученного.

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
  "moment": "2017-07-20 15:29:19",
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/d77f0d20-6ae2-11e7-6adb-ede50000001c",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=d77f0d20-6ae2-11e7-6adb-ede50000001c"
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/metadata/states/7ef4eb25-6abc-11e7-6adb-ede50000000a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/metadata",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "payments": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/dc5acb9c-6d46-11e7-6adb-ede500000030",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentout/metadata",
        "type": "paymentout",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#paymentout/edit?id=dc5acb9c-6d46-11e7-6adb-ede500000030"
      }
    }
  ]
}
```

### Счет-фактура полученный
 
### Получить Счет-фактуру полученный

**Параметры**

| Параметр | Описание                                                                              |
| :------- | :------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Счета-фактуры. |
 
> Запрос на получение отдельного Счета-фактуры полученного с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/facturein/209fe91a-ab00-11e6-8af5-581e00000076"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Счета-фактуры полученного.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/209fe91a-ab00-11e6-8af5-581e00000076",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/metadata",
    "type": "facturein",
    "mediaType": "application/json"
  },
  "id": "209fe91a-ab00-11e6-8af5-581e00000076",
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
  "updated": "2016-11-15 09:52:51",
  "name": "00002",
  "externalCode": "sylr1937hnp9AAftWLeYl3",
  "moment": "2016-11-15 09:52:00",
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
  "sum": 200000,
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9596b6e2-9609-11e6-8af5-581e000000d7",
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
  "supplies": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/1b56b5c8-ab00-11e6-8af5-581e00000070",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
        "type": "supply",
        "mediaType": "application/json"
      }
    }
  ]
}
```

### Изменить Счет-фактуру полученный 
Запрос на обновление Счета-фактуры с указанным id.

**Параметры**

| Параметр | Описание                                                                              |
| :------- | :------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Счета-фактуры. |

> Пример запроса на обновление Счета-фактуры.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/facturein/209fe91a-ab00-11e6-8af5-581e00000076"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "FactureIn2"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Счета-фактуры.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/209fe91a-ab00-11e6-8af5-581e00000076",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/facturein/metadata",
    "type": "facturein",
    "mediaType": "application/json"
  },
  "id": "209fe91a-ab00-11e6-8af5-581e00000076",
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
  "updated": "2017-04-27 18:38:19",
  "name": "FactureIn2",
  "description": "dsfsdf",
  "externalCode": "5cp4fXAKjQ3MIxQNCKL-80",
  "moment": "2017-04-27 15:55:00",
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
  "sum": 4000,
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f52d7b30-2346-11e7-1542-821d00000054",
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
  "created": "2017-04-27 15:55:04",
  "printed": true,
  "published": true,
  "incomingNumber": "356124365",
  "incomingDate": "2017-04-06 00:00:00",
  "supplies": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/22e8d1ea-29bc-11e7-1542-821d00000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
        "type": "supply",
        "mediaType": "application/json"
      }
    }
  ]
}
```

### Удалить Счет-фактуру полученный

**Параметры**

| Параметр | Описание                                                                              |
| :------- | :------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Счета-фактуры. |
 
> Запрос на удаление Счета-фактуры полученного с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/facturein/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Счета-фактуры полученного.
