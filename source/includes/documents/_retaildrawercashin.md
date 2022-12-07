## Внесение денег
Средствами JSON API можно создавать и обновлять сведения о Внесениях денег, запрашивать списки Внесений денег и сведения по отдельным Внесениям денег. Кодом сущности для Внесения денег в составе JSON API является ключевое слово **retaildrawercashin**. Больше о Внесениях денег и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по  [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203325423-%D0%A0%D0%BE%D0%B7%D0%BD%D0%B8%D1%86%D0%B0#10).
### Внесения денег 
#### Атрибуты сущности

| Название         | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                                      |
| ---------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| **accountId**    | UUID                                                      | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                          |
| **agent**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные контрагента<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                     |
| **applicable**   | Boolean                                                   | `=` `!=`                                                                                                                                          | Отметка о проведении<br>`+Обязательное при ответе`                                                                                            |
| **attributes**   | Array(Object)                                             | [Операторы доп. полей](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-fil-traciq-po-dopolnitel-nym-polqm) | Коллекция метаданных доп. полей. [Поля объекта](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)                       |
| **created**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата создания<br>`+Обязательное при ответе` `+Только для чтения`                                                                              |
| **deleted**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего удаления Внесения денег<br>`+Только для чтения`                                                                             |
| **description**  | String(4096)                                              | `=` `!=` `~` `~=` `=~`                                                                                                                            | Комментарий Внесения денег                                                                                                                    |
| **externalCode** | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код Внесения денег<br>`+Обязательное при ответе`                                                                                      |
| **files**        | MetaArray                                                 |                                                                                                                                                   | Метаданные массива [Файлов](../dictionaries/#suschnosti-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand` |
| **group**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                      |
| **id**           | UUID                                                      | `=` `!=`                                                                                                                                          | ID Внесения денег<br>`+Обязательное при ответе` `+Только для чтения`                                                                          |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные Внесения денег<br>`+Обязательное при ответе`                                                                                       |
| **moment**       | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата документа<br>`+Обязательное при ответе`                                                                                                  |
| **name**         | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование Внесения денег<br>`+Обязательное при ответе`                                                                                     |
| **organization** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                          |
| **owner**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Обязательное при ответе` `+Expand`                                                                                  |
| **printed**      | Boolean                                                   | `=` `!=`                                                                                                                                          | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                      |
| **published**    | Boolean                                                   | `=` `!=`                                                                                                                                          | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                    |
| **rate**         | Object                                                    |                                                                                                                                                   | Валюта. [Подробнее тут](../documents/#dokumenty-teh-operaciq-valuta-w-dokumentah)<br>`+Обязательное при ответе`                               |
| **shared**       | Boolean                                                   | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе`                                                                                                    |
| **state**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные статуса Внесения денег<br>`+Expand`                                                                                                |
| **sum**          | Int                                                       | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Сумма Внесения денег в копейках<br>`+Обязательное при ответе` `+Только для чтения`                                                            |
| **syncId**       | UUID                                                      | `=` `!=`                                                                                                                                          | ID синхронизации. После заполнения недоступен для изменения                                                                                   |
| **updated**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления Внесения денег<br>`+Обязательное при ответе` `+Только для чтения`                                                |

#### Связи с другими документами

| Название                       | Описание                                                                                                                                                          |
| ------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **retailShift**                | Ссылка на розничную смену, в рамках которой было выполнено Внесение денег в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) `Необходимое` |

### Получить Внесения денег 
Запрос на получение всех Внесений денег на данной учетной записи.

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |

> Получить Внесения денег

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Внесений денег.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata",
    "type": "retaildrawercashin",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/179dd832-960c-11e6-8a84-bae5000000dc",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata",
        "type": "retaildrawercashin",
        "mediaType": "application/json"
      },
      "id": "179dd832-960c-11e6-8a84-bae5000000dc",
      "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
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
      "updated": "2016-10-19 17:55:36",
      "name": "00001",
      "description": "Внесение",
      "externalCode": "2Rqfj4sNhkS98TU70DNRw1",
      "moment": "2016-10-19 17:55:00",
      "applicable": true,
      "created": "2016-08-25 19:55:00",
      "printed": true,
      "published": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "sum": 112312000,
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "retailShift": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/131aaeb6-9603-11e6-8a84-bae500000072",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
          "type": "retailshift",
          "mediaType": "application/json"
        }
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/2266b7e1-960c-11e6-8a84-bae5000000df",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata",
        "type": "retaildrawercashin",
        "mediaType": "application/json"
      },
      "id": "2266b7e1-960c-11e6-8a84-bae5000000df",
      "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
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
      "updated": "2016-10-19 17:55:54",
      "name": "00002",
      "description": "Коммент",
      "externalCode": "Rk3nJ4y1hw3O3b9qJ6xN30",
      "moment": "2016-10-19 17:55:00",
      "applicable": true,
      "created": "2016-08-25 19:55:00",
      "printed": true,
      "published": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "sum": 2000,
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "retailShift": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/131aaeb6-9603-11e6-8a84-bae500000072",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
          "type": "retailshift",
          "mediaType": "application/json"
        }
      }
    }
  ]
}
```

### Создать Внесение денег 
Запрос на создание Внесения денег.
Обязательные для создания поля:

+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **agent** - Ссылка на сотрудника, совершившего Внесение, в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **retailShift** - Ссылка на розничную смену в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)

> Пример создания нового Внесения денег.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "agent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "type": "employee",
                "mediaType": "application/json"
              }
            },
            "retailShift": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/131aaeb6-9603-11e6-8a84-bae500000072",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
                "type": "retailshift",
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
            "sum": 100500,
            "description": "Новое внесение через API"
          }'  
```

> Response 200
Успешный запрос. Результат - массив JSON представлений созданного и обновленного Внесения денег.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/b1bd1d12-960c-11e6-8a84-bae500000009",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata",
    "type": "retaildrawercashin",
    "mediaType": "application/json"
  },
  "id": "b1bd1d12-960c-11e6-8a84-bae500000009",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
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
  "updated": "2016-10-19 17:59:54",
  "name": "00003",
  "description": "Новое внесение через API",
  "externalCode": "fhlISdMTgl8C-lh9nLfIN0",
  "moment": "2016-10-19 17:59:54",
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
  "sum": 100500,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "retailShift": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/131aaeb6-9603-11e6-8a84-bae500000072",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
      "type": "retailshift",
      "mediaType": "application/json"
    }
  }
}
```

### Массовое создание и обновление Внесений денег 
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Внесений денег.
В теле запроса нужно передать массив, содержащий JSON представления Внесений денег, которые вы хотите создать или обновить.
Обновляемые Внесения денег должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Внесений денег

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "agent": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                  "type": "employee",
                  "mediaType": "application/json"
                }
              },
              "retailShift": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/131aaeb6-9603-11e6-8a84-bae500000072",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
                  "type": "retailshift",
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
              "sum": 100500,
              "description": "Новое внесение через API"
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/179dd832-960c-11e6-8a84-bae5000000dc",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata",
                "type": "retaildrawercashin",
                "mediaType": "application/json"
              },
              "name": "0000004",
              "sum": 700,
              "applicable": false
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Внесений денег.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/b1bd1d12-960c-11e6-8a84-bae500000009",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata",
      "type": "retaildrawercashin",
      "mediaType": "application/json"
    },
    "id": "b1bd1d12-960c-11e6-8a84-bae500000009",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
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
    "updated": "2016-10-19 17:59:54",
    "name": "00003",
    "description": "Новое внесение через API",
    "externalCode": "fhlISdMTgl8C-lh9nLfIN0",
    "moment": "2016-10-19 17:59:54",
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
    "sum": 100500,
    "organization": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "retailShift": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/131aaeb6-9603-11e6-8a84-bae500000072",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
        "type": "retailshift",
        "mediaType": "application/json"
      }
    }
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/179dd832-960c-11e6-8a84-bae5000000dc",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata",
      "type": "retaildrawercashin",
      "mediaType": "application/json"
    },
    "id": "179dd832-960c-11e6-8a84-bae5000000dc",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
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
    "updated": "2016-10-19 18:03:00",
    "name": "0000004",
    "description": "Внесение",
    "externalCode": "2Rqfj4sNhkS98TU70DNRw1",
    "moment": "2016-10-19 17:55:00",
    "applicable": false,
    "created": "2016-08-25 19:55:00",
    "printed": true,
    "published": true,
    "rate": {
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    },
    "sum": 700,
    "organization": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "retailShift": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/131aaeb6-9603-11e6-8a84-bae500000072",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
        "type": "retailshift",
        "mediaType": "application/json"
      }
    }
  }
]
```

### Удалить Внесение денег
Запрос на удаление Внесения денег с указанным id.

**Параметры**

| Параметр | Описание                                                                               |
| :------- | :------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Внесения денег. |

> Удалить Внесение денег

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
  Успешный запрос.

### Массовое удаление Внесений денег

В теле запроса нужно передать массив, содержащий JSON метаданных Внесений денег, которые вы хотите удалить.


> Запрос на массовое удаление Внесений денег. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata",
            "type": "retaildrawercashin",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata",
            "type": "retaildrawercashin",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Внесений денег.

```json
[
  {
    "info":"Сущность 'retaildrawercashin' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'retaildrawercashin' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
``` 

### Метаданные Внесений денег 
#### Метаданные Внесений денег 
Запрос на получение метаданных Внесений денег. Результат - объект JSON, включающий в себя:

| Параметр                       | Описание                                                                                                            |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------ |
| **meta**                       | Ссылка на метаданные Внесений денег                                                                                 |
| **attributes**                 | Массив объектов доп. полей Внесений денег в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **states**                     | Массив статусов Внесений денег                                                                                      |
| **createShared**               | создавать новые Внесения денег с меткой "Общий"                                                                     |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Внесений денег

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Внесений денег.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata/attributes/5290a290-0313-11e6-9464-e4de00000020",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "5290a290-0313-11e6-9464-e4de00000020",
      "name": "AttributeName1",
      "type": "boolean",
      "required": false
    }
  ],
  "states": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56c504-2e58-11e6-8a84-bae500000069",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Новый",
      "color": 15106326,
      "stateType": "Regular",
      "entityType": "retaildrawercashin"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata/states/fb56cae3-2e58-11e6-8a84-bae50000006a",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56cae3-2e58-11e6-8a84-bae50000006a",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Подтвержден",
      "color": 40931,
      "stateType": "Regular",
      "entityType": "retaildrawercashin"
    }
  ],
  "createShared": false
}

```

### Отдельное доп. поле



**Параметры**

| Параметр | Описание                                                                          |
| :------- | :-------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 5290a290-0313-11e6-9464-e4de00000020* id Доп. поля. |

> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata/attributes/5290a290-0313-11e6-9464-e4de00000020"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata/attributes/5290a290-0313-11e6-9464-e4de00000020",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "5290a290-0313-11e6-9464-e4de00000020",
  "name": "AttributeName1",
  "type": "boolean",
  "required": false
}
```

### Шаблон Внесения денег 

#### Шаблон Внесения денег 
> Запрос на получение предзаполненого стандартными значениями шаблона Внесения денег без связи с каким-либо документом.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/new"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d ''  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного Внесения денег.

```json
{
  "applicable": true,
  "created": "2016-08-25 19:55:00",
  "printed": true,
  "published": true,
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

### Шаблон Внесения денег на основе 
Запрос на получение предзаполненного Внесения денег на основе розничной смены.
В результате запроса, будет создан предзаполненный шаблон Внесения денег на основе переданной
розничной смены.
<br>
Внимание! Не забывайте, что поле **retailShift** должно быть написано с большой S.

> Запрос на создание Внесения денег на основе розничной смены.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/new"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "retailShift": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/131aaeb6-9603-11e6-8a84-bae500000072",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
                "type": "retailshift",
                "mediaType": "application/json"
              }
            }
          }
'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного Внесения денег.

```json
{
  "applicable": true,
  "created": "2016-08-25 19:55:00",
  "printed": true,
  "published": true,
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "retailShift": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/131aaeb6-9603-11e6-8a84-bae500000072",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
      "type": "retailshift",
      "mediaType": "application/json"
    }
  }
}
```

### Внесение денег 

### Получить Внесение денег
 
> Запрос на получение отдельного Внесения денег с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Внесения денег с указанным id.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/179dd832-960c-11e6-8a84-bae5000000dc",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata",
    "type": "retaildrawercashin",
    "mediaType": "application/json"
  },
  "id": "179dd832-960c-11e6-8a84-bae5000000dc",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
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
  "updated": "2016-10-19 17:55:36",
  "name": "00001",
  "description": "Внесение",
  "externalCode": "2Rqfj4sNhkS98TU70DNRw1",
  "moment": "2016-10-19 17:55:00",
  "applicable": true,
  "created": "2016-08-25 19:55:00",
  "printed": true,
  "published": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 112312000,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "retailShift": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/131aaeb6-9603-11e6-8a84-bae500000072",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
      "type": "retailshift",
      "mediaType": "application/json"
    }
  }
}

```

### Изменить Внесение денег 
Запрос на обновление Внесения денег.

> Пример обновления Внесения денег.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "0000004",
            "sum": 700,
            "applicable": false
          }'  
```

>  Response 200

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/179dd832-960c-11e6-8a84-bae5000000dc",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata",
    "type": "retaildrawercashin",
    "mediaType": "application/json"
  },
  "id": "179dd832-960c-11e6-8a84-bae5000000dc",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
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
  "updated": "2016-10-19 18:03:00",
  "name": "0000004",
  "description": "Внесение",
  "externalCode": "2Rqfj4sNhkS98TU70DNRw1",
  "moment": "2016-10-19 17:55:00",
  "applicable": false,
  "created": "2016-08-25 19:55:00",
  "printed": true,
  "published": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 700,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "retailShift": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/131aaeb6-9603-11e6-8a84-bae500000072",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
      "type": "retailshift",
      "mediaType": "application/json"
    }
  }
}
```
