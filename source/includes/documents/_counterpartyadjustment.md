## Корректировка взаиморасчетов
Средствами JSON API можно создавать и обновлять сведения о Корректировках взаиморасчетов, запрашивать списки Корректировок взаиморасчетов и сведения по отдельным Корректировкам взаиморасчетов. 
Кодом сущности для Корректировки взаиморасчетов в составе JSON API является ключевое слово **counterpartyadjustment**. Больше о Корректировках взаиморасчетов и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по  [этой ссылке](https://support.moysklad.ru/hc/ru/articles/360024662574-%D0%9A%D0%BE%D1%80%D1%80%D0%B5%D0%BA%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B1%D0%B0%D0%BB%D0%B0%D0%BD%D1%81%D0%B0-%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%B0%D0%B3%D0%B5%D0%BD%D1%82%D0%B0).

### Корректировки взаиморасчетов
#### Атрибуты сущности

| Название         | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                                      |
| ---------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |:----------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**    | UUID                                                      | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                          |
| **agent**        | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Метаданные контрагента или сотрудника<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                      |
| **applicable**   | Boolean                                                   | `=` `!=`                                                                                                                                          | Отметка о проведении<br>`+Обязательное при ответе`                                                                                            |
| **attributes**   | Array(Object)                                             | [Операторы доп. полей](#/general#4-filtraciya-po-dopolnitelnym-polyam) | Коллекция метаданных доп. полей. [Поля объекта](#/general#3-rabota-s-dopolnitelnymi-polyami)                       |
| **created**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата создания<br>`+Обязательное при ответе` `+Только для чтения`                                                                              |
| **deleted**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего удаления Корректировки взаиморасчетов<br>`+Только для чтения`                                                               |
| **description**  | String(4096)                                              | `=` `!=` `~` `~=` `=~`                                                                                                                            | Комментарий Корректировки взаиморасчетов                                                                                                      |
| **externalCode** | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код Корректировки взаиморасчетов<br>`+Обязательное при ответе`                                                                        |
| **files**        | MetaArray                                                 |                                                                                                                                                   | Метаданные массива [Файлов](#/dictionaries/files#2-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand` |
| **group**        | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                      |
| **id**           | UUID                                                      | `=` `!=`                                                                                                                                          | ID Корректировки взаиморасчетов<br>`+Обязательное при ответе` `+Только для чтения`                                                            |
| **meta**         | [Meta](#/general#3-metadannye) |                                                                                                                                                   | Метаданные Корректировки взаиморасчетов<br>`+Обязательное при ответе`                                                                         |
| **moment**       | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата документа<br>`+Обязательное при ответе`                                                                                                  |
| **name**         | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование Корректировки взаиморасчетов<br>`+Обязательное при ответе`                                                                       |
| **organization** | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                          |
| **owner**        | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Expand`                                                                                                             |
| **printed**      | Boolean                                                   |                                                                                                                                                   | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                      |
| **published**    | Boolean                                                   |                                                                                                                                                   | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                    |
| **shared**       | Boolean                                                   | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе`                                                                                                    |
| **sum**          | Int                                                       | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Сумма Корректировки взаиморасчетов в копейках<br>`+Обязательное при ответе` `+Только для чтения`                                              |
| **updated**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления Корректировки взаиморасчетов<br>`+Обязательное при ответе` `+Только для чтения`                                  |

### Получить список Корректировок взаиморасчетов
Запрос всех Корректировок взаиморасчетов на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                                      |
| ----------- | :-------------------------------------------------------- | :---------------------------------------------------------------------------- |
| **meta**    | [Meta](#/general#3-metadannye) | Метаданные о выдаче,                                                          |
| **context** | [Meta](#/general#3-metadannye) | Метаданные о сотруднике, выполнившем запрос.                                  |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Корректировки взаиморасчетов. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |

> Получить список Корректировок взаиморасчетов

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Корректировок взаиморасчетов.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/context/employee",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/",
    "type": "counterpartyadjustment",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/1bb899bc-0b17-11ec-ac16-000a00000006",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/metadata",
        "type": "counterpartyadjustment",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#counterpartyadjustment/edit?id=1bb899bc-0b17-11ec-ac16-000a00000006"
      },
      "id": "1bb899bc-0b17-11ec-ac16-000a00000006",
      "accountId": "9067e733-099c-11ec-ac16-000c00000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/9334c6a2-099c-11ec-ac16-000b00000042",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9334c6a2-099c-11ec-ac16-000b00000042"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/906f1cd6-099c-11ec-ac16-000c00000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2021-09-01 14:24:01.814",
      "name": "00002",
      "externalCode": "uUqTX1fBhBcEReQytuMOa2",
      "moment": "2021-09-01 14:24:00.000",
      "applicable": true,
      "sum": 12.0,
      "agent": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/947ebfcd-099c-11ec-ac16-000b00000083",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=947ebfcd-099c-11ec-ac16-000b00000083"
        }
      },
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/94527995-099c-11ec-ac16-000b0000007e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=94527995-099c-11ec-ac16-000b0000007e"
        }
      },
      "created": "2021-09-01 14:24:01.873",
      "printed": false,
      "published": false,
      "attributes": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/metadata/attributes/f478774c-0bfb-11ec-ac12-000d000000d1",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "f478774c-0bfb-11ec-ac12-000d000000d1",
          "name": "Адрес проживания",
          "type": "string",
          "value": "Гороховая улица д. 666"
        }
      ],
      "files": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/1bb899bc-0b17-11ec-ac16-000a00000006/files",
          "type": "files",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/24d56ba6-0b14-11ec-ac16-000b00000013",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/metadata",
        "type": "counterpartyadjustment",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#counterpartyadjustment/edit?id=24d56ba6-0b14-11ec-ac16-000b00000013"
      },
      "id": "24d56ba6-0b14-11ec-ac16-000b00000013",
      "accountId": "9067e733-099c-11ec-ac16-000c00000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/9334c6a2-099c-11ec-ac16-000b00000042",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9334c6a2-099c-11ec-ac16-000b00000042"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/906f1cd6-099c-11ec-ac16-000c00000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2021-09-01 14:19:49.993",
      "name": "00001",
      "description": "description",
      "externalCode": "W5JWJ02SgTK5JRdcyQBUN0",
      "moment": "2021-09-01 14:02:00.000",
      "applicable": true,
      "sum": 21300.0,
      "agent": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/947ebfcd-099c-11ec-ac16-000b00000083",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=947ebfcd-099c-11ec-ac16-000b00000083"
        }
      },
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/94527995-099c-11ec-ac16-000b0000007e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=94527995-099c-11ec-ac16-000b0000007e"
        }
      },
      "created": "2021-09-01 14:02:48.685",
      "printed": false,
      "published": false,
      "files": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/24d56ba6-0b14-11ec-ac16-000b00000013/files",
          "type": "files",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      }
    }
  ]
}
```

### Создать Корректировку взаиморасчетов
Запрос на создание новой Корректировки взаиморасчетов.
Обязательные для создания поля:

| Параметр                       | Описание                                                                                                         |
| ------------------------------ |:-----------------------------------------------------------------------------------------------------------------|
| **organization**               | Ссылка на ваше юрлицо в формате [Метаданных](#/general#3-metadannye)                  |
| **agent**                      | Ссылка на контрагента или сотрудника в формате [Метаданных](#/general#3-metadannye) |

> Пример создания новой Корректировки взаиморасчетов.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "agent": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/947ebfcd-099c-11ec-ac16-000b00000083",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "counterparty",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=947ebfcd-099c-11ec-ac16-000b00000083"
              }
            },
            "organization": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/94527995-099c-11ec-ac16-000b0000007e",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=94527995-099c-11ec-ac16-000b0000007e"
              }
            },
            "sum": 12.5
          }
'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Корректировки взаиморасчетов.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/2775d672-0b1a-11ec-ac16-000a0000000a",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/metadata",
    "type": "counterpartyadjustment",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#counterpartyadjustment/edit?id=2775d672-0b1a-11ec-ac16-000a0000000a"
  },
  "id": "2775d672-0b1a-11ec-ac16-000a0000000a",
  "accountId": "9067e733-099c-11ec-ac16-000c00000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/9334c6a2-099c-11ec-ac16-000b00000042",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9334c6a2-099c-11ec-ac16-000b00000042"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/906f1cd6-099c-11ec-ac16-000c00000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2021-09-01 14:45:50.001",
  "name": "00003",
  "externalCode": "TKlkN7I6jVg9lbUPJlvK-0",
  "moment": "2021-09-01 14:45:00.000",
  "applicable": true,
  "sum": 12.5,
  "agent": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/947ebfcd-099c-11ec-ac16-000b00000083",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=947ebfcd-099c-11ec-ac16-000b00000083"
    }
  },
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/94527995-099c-11ec-ac16-000b0000007e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=94527995-099c-11ec-ac16-000b0000007e"
    }
  },
  "created": "2021-09-01 14:45:50.060",
  "printed": false,
  "published": false,
  "files": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/2775d672-0b1a-11ec-ac16-000a0000000a/files",
      "type": "files",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Массовое создание и обновление Корректировок взаиморасчетов
[Массовое создание и обновление](#/general#3-sozdanie-i-obnovlenie-neskolkih-obuektov) Корректировок взаиморасчетов.
В теле запроса нужно передать массив, содержащий JSON представления Корректировок взаиморасчетов, которые вы хотите создать или обновить.
Обновляемые Корректировки взаиморасчетов должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Корректировок взаиморасчетов

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '[
            {
              "agent": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/947ebfcd-099c-11ec-ac16-000b00000083",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                  "type": "counterparty",
                  "mediaType": "application/json",
                  "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=947ebfcd-099c-11ec-ac16-000b00000083"
                }
              },
              "organization": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/94527995-099c-11ec-ac16-000b0000007e",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json",
                  "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=94527995-099c-11ec-ac16-000b0000007e"
                }
              },
              "sum": 12.5
            },
            {
              "agent": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/947ebfcd-099c-11ec-ac16-000b00000055",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                  "type": "counterparty",
                  "mediaType": "application/json",
                  "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=947ebfcd-099c-11ec-ac16-000b00000055"
                }
              },
              "organization": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/94527995-099c-11ec-ac16-000b00000066",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json",
                  "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=94527995-099c-11ec-ac16-000b00000066"
                }
              },
              "sum": 32
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Корректировок взаиморасчетов.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/13bf011a-0b1b-11ec-ac16-000a0000000e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/metadata",
      "type": "counterpartyadjustment",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#counterpartyadjustment/edit?id=13bf011a-0b1b-11ec-ac16-000a0000000e"
    },
    "id": "13bf011a-0b1b-11ec-ac16-000a0000000e",
    "accountId": "9067e733-099c-11ec-ac16-000c00000001",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/9334c6a2-099c-11ec-ac16-000b00000042",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9334c6a2-099c-11ec-ac16-000b00000042"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/906f1cd6-099c-11ec-ac16-000c00000002",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2021-09-01 14:52:26.430",
    "name": "00004",
    "externalCode": "WWA5w--1ggqvF29G28atu1",
    "moment": "2021-09-01 14:52:00.000",
    "applicable": true,
    "sum": 12.5,
    "agent": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/947ebfcd-099c-11ec-ac16-000b00000083",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=947ebfcd-099c-11ec-ac16-000b00000083"
      }
    },
    "organization": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/94527995-099c-11ec-ac16-000b0000007e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=94527995-099c-11ec-ac16-000b0000007e"
      }
    },
    "created": "2021-09-01 14:52:26.476",
    "printed": false,
    "published": false,
    "files": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/13bf011a-0b1b-11ec-ac16-000a0000000e/files",
        "type": "files",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    }
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/13cc2d25-0b1b-11ec-ac16-000a00000012",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/metadata",
      "type": "counterpartyadjustment",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#counterpartyadjustment/edit?id=13cc2d25-0b1b-11ec-ac16-000a00000012"
    },
    "id": "13cc2d25-0b1b-11ec-ac16-000a00000012",
    "accountId": "9067e733-099c-11ec-ac16-000c00000001",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/9334c6a2-099c-11ec-ac16-000b00000042",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9334c6a2-099c-11ec-ac16-000b00000042"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/906f1cd6-099c-11ec-ac16-000c00000002",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2021-09-01 14:52:26.560",
    "name": "00005",
    "externalCode": "qDER7dHnjwb-cSk62SHAu2",
    "moment": "2021-09-01 14:52:00.000",
    "applicable": true,
    "sum": 32.0,
    "agent": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/947ebfcd-099c-11ec-ac16-000b00000055",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=947ebfcd-099c-11ec-ac16-000b00000055"
      }
    },
    "organization": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/94527995-099c-11ec-ac16-000b00000066",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=94527995-099c-11ec-ac16-000b00000066"
      }
    },
    "created": "2021-09-01 14:52:26.576",
    "printed": false,
    "published": false,
    "files": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/13cc2d25-0b1b-11ec-ac16-000a00000012/files",
        "type": "files",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    }
  }
]
```

### Удалить Корректировку взаиморасчетов

**Параметры**

| Параметр | Описание                                                                                                  |
| :------- | :-------------------------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Корректировки взаиморасчетов. |

> Запрос на удаление Корректировки взаиморасчетов с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление Корректировки взаиморасчетов.

### Массовое удаление Корректировок взаиморасчетов

В теле запроса нужно передать массив, содержащий JSON метаданных Корректировок взаиморасчетов, которые вы хотите удалить.


> Запрос на массовое удаление Корректировок взаиморасчетов.

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
  -d '[
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/7944ef04-f831-11e5-7a69-971500188b1",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/metadata",
                "type": "counterpartyadjustment",
                "mediaType": "application/json"
            }
        },
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/7944ef04-f831-11e5-7a69-971500188b2",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/metadata",
                "type": "counterpartyadjustment",
                "mediaType": "application/json"
            }
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Корректировок взаиморасчетов.

```json
[
  {
    "info":"Сущность 'counterpartyadjustment' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'counterpartyadjustment' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
``` 

### Метаданные Корректировок взаиморасчетов
Запрос на получение метаданных Корректировок взаиморасчетов. Результат - объект JSON, включающий в себя:

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **meta**                       | Ссылка на метаданные Корректировок взаиморасчетов                                                                                 |
| **attributes**                 | Массив объектов доп. полей Корректировок взаиморасчетов в формате [Метаданных](#/general#3-metadannye) |
| **createShared**               | создавать новые Корректировки взаиморасчетов с меткой "Общий"                                                                     |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](#/general#3-rabota-s-dopolnitelnymi-polyami).

> Метаданные Корректировок взаиморасчетов

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/metadata"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Корректировок взаиморасчетов.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/metadata",
    "mediaType": "application/json"
  },
  "attributes": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/metadata/attributes",
      "type": "attributemetadata",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "createShared": false
}
```

### Запросы - Корректировка взаиморасчетов

### Получить Корректировку взаиморасчетов

**Параметры**

| Параметр | Описание                                                                                                  |
| :------- | :-------------------------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Корректировки взаиморасчетов. |

> Запрос на получение отдельной Корректировки взаиморасчетов с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Корректировки взаиморасчетов.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/7944ef04-f831-11e5-7a69-971500188b19",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/metadata",
    "type": "counterpartyadjustment",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#counterpartyadjustment/edit?id=7944ef04-f831-11e5-7a69-971500188b19"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b19",
  "accountId": "9067e733-099c-11ec-ac16-000c00000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/9334c6a2-099c-11ec-ac16-000b00000042",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9334c6a2-099c-11ec-ac16-000b00000042"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/906f1cd6-099c-11ec-ac16-000c00000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2021-09-01 14:52:26.430",
  "name": "00004",
  "externalCode": "WWA5w--1ggqvF29G28atu1",
  "moment": "2021-09-01 14:52:00.000",
  "applicable": true,
  "sum": 12.5,
  "agent": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/947ebfcd-099c-11ec-ac16-000b00000083",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=947ebfcd-099c-11ec-ac16-000b00000083"
    }
  },
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/94527995-099c-11ec-ac16-000b0000007e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=94527995-099c-11ec-ac16-000b0000007e"
    }
  },
  "created": "2021-09-01 14:52:26.476",
  "printed": false,
  "published": false,
  "files": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/7944ef04-f831-11e5-7a69-971500188b19/files",
      "type": "files",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Изменить Корректировку взаиморасчетов
Запрос на обновление Корректировки взаиморасчетов с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Корректировки взаиморасчетов, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Корректировки взаиморасчетов](#/documents/counterpartyadjustment#2-korrektirovka-vzaimoraschetov).

**Параметры**

| Параметр | Описание                                                                                                  |
| :------- | :-------------------------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Корректировки взаиморасчетов. |

> Пример запроса на обновление отдельной Корректировки взаиморасчетов.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "sum": 123
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Корректировки взаиморасчетов.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/7944ef04-f831-11e5-7a69-971500188b19",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/metadata",
    "type": "counterpartyadjustment",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#counterpartyadjustment/edit?id=7944ef04-f831-11e5-7a69-971500188b19"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b19",
  "accountId": "9067e733-099c-11ec-ac16-000c00000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/9334c6a2-099c-11ec-ac16-000b00000042",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9334c6a2-099c-11ec-ac16-000b00000042"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/906f1cd6-099c-11ec-ac16-000c00000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2021-09-01 14:52:26.430",
  "name": "00004",
  "externalCode": "WWA5w--1ggqvF29G28atu1",
  "moment": "2021-09-01 14:52:00.000",
  "applicable": true,
  "sum": 123.0,
  "agent": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/947ebfcd-099c-11ec-ac16-000b00000083",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=947ebfcd-099c-11ec-ac16-000b00000083"
    }
  },
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/94527995-099c-11ec-ac16-000b0000007e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=94527995-099c-11ec-ac16-000b0000007e"
    }
  },
  "created": "2021-09-01 14:52:26.476",
  "printed": false,
  "published": false,
  "files": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/7944ef04-f831-11e5-7a69-971500188b19/files",
      "type": "files",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  }
}
```
