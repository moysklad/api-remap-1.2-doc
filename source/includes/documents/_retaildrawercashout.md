## Выплата денег
Средствами JSON API можно создавать и обновлять сведения о Выплатах денег, запрашивать списки Выплат денег и сведения по отдельным Выплатам денег. Кодом сущности для внесения денег в составе JSON API является ключевое слово **retaildrawercashout**. Больше о Выплатах денег и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по  [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203325423-%D0%A0%D0%BE%D0%B7%D0%BD%D0%B8%D1%86%D0%B0#11)
### Выплаты денег 
#### Атрибуты сущности

| Название         | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                                      |
| ---------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| **accountId**    | UUID                                                      | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                          |
| **agent**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные контрагента<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                     |
| **applicable**   | Boolean                                                   | `=` `!=`                                                                                                                                          | Отметка о проведении<br>`+Обязательное при ответе`                                                                                            |
| **attributes**   | Array(Object)                                             | [Операторы доп. полей](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-fil-traciq-po-dopolnitel-nym-polqm) | Коллекция метаданных доп. полей. [Поля объекта](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)                       |
| **code**         | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Код Выплаты денег                                                                                                                             |
| **created**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата создания<br>`+Обязательное при ответе` `+Только для чтения`                                                                              |
| **deleted**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего удаления Выплаты денег<br>`+Только для чтения`                                                                              |
| **description**  | String(4096)                                              | `=` `!=` `~` `~=` `=~`                                                                                                                            | Комментарий Выплаты денег                                                                                                                     |
| **externalCode** | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код Выплаты денег<br>`+Обязательное при ответе`                                                                                       |
| **files**        | MetaArray                                                 |                                                                                                                                                   | Метаданные массива [Файлов](../dictionaries/#suschnosti-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand` |
| **group**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                      |
| **id**           | UUID                                                      | `=` `!=`                                                                                                                                          | ID Выплаты денег<br>`+Обязательное при ответе` `+Только для чтения`                                                                           |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные Выплаты денег<br>`+Обязательное при ответе`                                                                                        |
| **moment**       | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата документа<br>`+Обязательное при ответе`                                                                                                  |
| **name**         | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование Выплаты денег<br>`+Обязательное при ответе`                                                                                      |
| **organization** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                          |
| **owner**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Обязательное при ответе` `+Expand`                                                                                  |
| **printed**      | Boolean                                                   | `=` `!=`                                                                                                                                          | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                      |
| **published**    | Boolean                                                   | `=` `!=`                                                                                                                                          | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                    |
| **rate**         | Object                                                    |                                                                                                                                                   | Валюта. [Подробнее тут](../documents/#dokumenty-teh-operaciq-valuta-w-dokumentah)<br>`+Обязательное при ответе`                               |
| **shared**       | Boolean                                                   | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе`                                                                                                    |
| **state**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные статуса Выплаты денег<br>`+Expand`                                                                                                 |
| **sum**          | Int                                                       | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Сумма Выплаты денег установленной валюте<br>`+Обязательное при ответе` `+Только для чтения`                                                   |
| **syncId**       | UUID                                                      | `=` `!=`                                                                                                                                          | ID синхронизации. После заполнения недоступен для изменения                                                                                   |
| **updated**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления Выплаты денег<br>`+Обязательное при ответе` `+Только для чтения`                                                 |

#### Связи с другими документами

| Название                       | Описание                                                                                                                                                          |
| ------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **retailShift**                | Ссылка на розничную смену, в рамках которой было выполнено Внесение денег в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) `Необходимое` |

### Получить Выплаты денег 
Запрос на получение всех Выплат денег на данной учетной записи.

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |

> Получить Выплаты денег

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Выплат денег.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
    "type": "retaildrawercashout",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/1c5afb86-9603-11e6-8a84-bae500000079",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
        "type": "retaildrawercashout",
        "mediaType": "application/json"
      },
      "id": "1c5afb86-9603-11e6-8a84-bae500000079",
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
      "updated": "2016-10-19 16:51:18",
      "name": "00001",
      "description": "Выплата",
      "externalCode": "BYeqnCMUgjNIhODoqt5C52",
      "syncId": "ece1344a-5a68-4d32-ac70-a56b943717b5",
      "moment": "2016-10-19 16:51:00",
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
      "sum": 12441200,
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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/1e24533f-9603-11e6-8a84-bae50000007c",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
        "type": "retaildrawercashout",
        "mediaType": "application/json"
      },
      "id": "1e24533f-9603-11e6-8a84-bae50000007c",
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
      "updated": "2016-10-19 16:51:21",
      "name": "00002",
      "externalCode": "ohO0hmq7jioNXhM5xuTVe3",
      "moment": "2016-10-19 16:51:00",
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
      "sum": 111800200,
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

### Создать Выплату денег 
Запрос на создание Выплаты денег.
Обязательные для создания поля:

+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **agent** - Ссылка на сотрудника, которому была совершена Выплата, в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **retailShift** - Ссылка на розничную смену в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)

> Пример создания новой Выплаты денег.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/"
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
            "description": "Новая выплата через API"
          }'  
```

> Response 200

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/c05a6fb8-960c-11e6-8a84-bae50000000c",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
    "type": "retaildrawercashout",
    "mediaType": "application/json"
  },
  "id": "c05a6fb8-960c-11e6-8a84-bae50000000c",
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
  "updated": "2016-10-19 18:00:19",
  "name": "00003",
  "description": "Новое внесение через API",
  "externalCode": "n19Ol5mFidHzBBojcTzvo3",
  "moment": "2016-10-19 18:00:19",
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

### Массовое создание и обновление Выплат денег 
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Выплат денег.
В теле запроса нужно передать массив, содержащий JSON представления Выплат денег, которые вы хотите создать или обновить.
Обновляемые Выплаты денег должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Выплат денег

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/"
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
              "description": "Новая выплата через API"
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/c05a6fb8-960c-11e6-8a84-bae50000000c",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
                "type": "retaildrawercashout",
                "mediaType": "application/json"
              },
              "name": "0000004",
              "sum": 700,
              "applicable": false
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Выплат денег.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/c05a6fb8-960c-11e6-8a84-bae50000000c",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
      "type": "retaildrawercashout",
      "mediaType": "application/json"
    },
    "id": "c05a6fb8-960c-11e6-8a84-bae50000000c",
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
    "updated": "2016-10-19 18:00:19",
    "name": "00003",
    "description": "Новое внесение через API",
    "externalCode": "n19Ol5mFidHzBBojcTzvo3",
    "moment": "2016-10-19 18:00:19",
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/c05a6fb8-960c-11e6-8a84-bae50000000c",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
      "type": "retaildrawercashout",
      "mediaType": "application/json"
    },
    "id": "c05a6fb8-960c-11e6-8a84-bae50000000c",
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
    "updated": "2016-10-19 18:01:38",
    "name": "0000004",
    "description": "Новое внесение через API",
    "externalCode": "n19Ol5mFidHzBBojcTzvo3",
    "moment": "2016-10-19 18:00:19",
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

### Удалить Выплату денег

**Параметры**

| Параметр | Описание                                                                              |
| :------- | :------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Выплаты денег. |

> Запрос на удаление Выплаты денег с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. 

### Массовое удаление Выплат денег

В теле запроса нужно передать массив, содержащий JSON метаданных Выплат денег, которые вы хотите удалить.


> Запрос на массовое удаление Выплат денег. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
            "type": "retaildrawercashout",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
            "type": "retaildrawercashout",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Выплат денег.

```json
[
  {
    "info":"Сущность 'retaildrawercashout' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'retaildrawercashout' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
``` 

### Метаданные Выплат денег 
#### Метаданные Выплат денег 
Запрос на получение метаданных Выплат денег. Результат - объект JSON, включающий в себя:

| Параметр                       | Описание                                                                                                          |
| ------------------------------ | :---------------------------------------------------------------------------------------------------------------- |
| **meta**                       | Ссылка на метаданные Выплат денег                                                                                 |
| **attributes**                 | Массив объектов доп. полей Выплат денег в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **states**                     | Массив статусов Выплат денег                                                                                      |
| **createShared**               | создавать новые Выплаты денег с меткой "Общий"                                                                    |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Выплат денег

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Выплат денег.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata/attributes/5290a290-0313-11e6-9464-e4de00000020",
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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56c504-2e58-11e6-8a84-bae500000069",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Новый",
      "color": 15106326,
      "stateType": "Regular",
      "entityType": "retaildrawercashout"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata/states/fb56cae3-2e58-11e6-8a84-bae50000006a",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56cae3-2e58-11e6-8a84-bae50000006a",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Подтвержден",
      "color": 40931,
      "stateType": "Regular",
      "entityType": "retaildrawercashout"
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
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata/attributes/5290a290-0313-11e6-9464-e4de00000020"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata/attributes/5290a290-0313-11e6-9464-e4de00000020",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "5290a290-0313-11e6-9464-e4de00000020",
  "name": "AttributeName1",
  "type": "boolean",
  "required": false
}
```

### Шаблон Выплаты денег 
#### Шаблон Выплаты денег 
> Запрос на получение предзаполненого стандартными значениями шаблона Выплаты денег без связи с каким-либо документом.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/new"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d ''  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненной Выплаты денег.

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

### Шаблон Выплаты денег на основе 
Запрос на получение предзаполненной Выплаты денег на основе розничной смены.
В результате запроса, будет создан предзаполненный шаблон Выплаты денег на основе переданной
розничной смены.

> Запрос на создание Выплаты денег на основе розничной смены.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/new"
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
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненной Выплаты денег.

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

### Выплата денег 

### Получить Выплату денег
 
> Запрос на получение отдельной Выплаты денег с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Выплаты денег с указанным id.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/1c5afb86-9603-11e6-8a84-bae500000079",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
    "type": "retaildrawercashout",
    "mediaType": "application/json"
  },
  "id": "1c5afb86-9603-11e6-8a84-bae500000079",
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
  "updated": "2016-10-19 16:51:18",
  "name": "00001",
  "description": "Выплата",
  "externalCode": "BYeqnCMUgjNIhODoqt5C52",
  "syncId": "ece1344a-5a68-4d32-ac70-a56b943717b5",
  "moment": "2016-10-19 16:51:00",
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
  "sum": 12441200,
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

### Изменить Выплату денег 
Запрос на обновление Выплаты денег.

> Пример обновления Выплаты денег.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "0000004",
            "sum": 700,
            "applicable": false
          }'  
```

> Response 200

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/c05a6fb8-960c-11e6-8a84-bae50000000c",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
    "type": "retaildrawercashout",
    "mediaType": "application/json"
  },
  "id": "c05a6fb8-960c-11e6-8a84-bae50000000c",
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
  "updated": "2016-10-19 18:01:38",
  "name": "0000004",
  "description": "Новое внесение через API",
  "externalCode": "n19Ol5mFidHzBBojcTzvo3",
  "moment": "2016-10-19 18:00:19",
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
