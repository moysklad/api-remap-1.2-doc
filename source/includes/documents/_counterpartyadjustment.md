## Корректировка баланса контрагента
Средствами JSON API можно создавать и обновлять сведения о Корректировках баланса контрагента, запрашивать списки Корректировок баланса контрагента и сведения по отдельным Корректировкам баланса контрагента. 
Кодом сущности для Корректировки баланса контрагента в составе JSON API является ключевое слово **counterpartyadjustment**. Больше о Корректировках баланса контрагента и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по  [этой ссылке](https://support.moysklad.ru/hc/ru/articles/360024662574-%D0%9A%D0%BE%D1%80%D1%80%D0%B5%D0%BA%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B1%D0%B0%D0%BB%D0%B0%D0%BD%D1%81%D0%B0-%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%B0%D0%B3%D0%B5%D0%BD%D1%82%D0%B0).

### Корректировки баланса контрагента
#### Атрибуты сущности

| Название         | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                                      |
| ---------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| **accountId**    | UUID                                                      | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                          |
| **agent**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные контрагента<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                     |
| **applicable**   | Boolean                                                   | `=` `!=`                                                                                                                                          | Отметка о проведении<br>`+Обязательное при ответе`                                                                                            |
| **attributes**   | Array(Object)                                             | [Операторы доп. полей](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-fil-traciq-po-dopolnitel-nym-polqm) | Коллекция метаданных доп. полей. [Поля объекта](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)                       |
| **created**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата создания<br>`+Обязательное при ответе` `+Только для чтения`                                                                              |
| **deleted**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего удаления Корректировки баланса контрагента<br>`+Только для чтения`                                                          |
| **description**  | String(4096)                                              | `=` `!=` `~` `~=` `=~`                                                                                                                            | Комментарий Корректировки баланса контрагента                                                                                                 |
| **externalCode** | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код Корректировки баланса контрагента<br>`+Обязательное при ответе`                                                                   |
| **files**        | MetaArray                                                 |                                                                                                                                                   | Метаданные массива [Файлов](../dictionaries/#suschnosti-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand` |
| **group**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                      |
| **id**           | UUID                                                      | `=` `!=`                                                                                                                                          | ID Корректировки баланса контрагента<br>`+Обязательное при ответе` `+Только для чтения`                                                       |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные Корректировки баланса контрагента<br>`+Обязательное при ответе`                                                                    |
| **moment**       | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата документа<br>`+Обязательное при ответе`                                                                                                  |
| **name**         | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование Корректировки баланса контрагента<br>`+Обязательное при ответе`                                                                  |
| **organization** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                          |
| **owner**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Обязательное при ответе` `+Expand`                                                                                  |
| **printed**      | Boolean                                                   |                                                                                                                                                   | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                      |
| **published**    | Boolean                                                   |                                                                                                                                                   | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                    |
| **shared**       | Boolean                                                   | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе`                                                                                                    |
| **sum**          | Int                                                       | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Сумма Корректировки баланса контрагента в копейках<br>`+Обязательное при ответе` `+Только для чтения`                                         |
| **updated**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления Корректировки баланса контрагента<br>`+Обязательное при ответе` `+Только для чтения`                             |

### Получить список Корректировок баланса контрагента
Запрос всех Корректировок баланса контрагента на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                                      |
| ----------- | :-------------------------------------------------------- | :---------------------------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                                          |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                                  |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Корректировки баланса контрагента. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |

> Получить список Корректировок баланса контрагента

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Корректировок баланса контрагента.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/",
    "type": "counterpartyadjustment",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/1bb899bc-0b17-11ec-ac16-000a00000006",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/metadata",
        "type": "counterpartyadjustment",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#counterpartyadjustment/edit?id=1bb899bc-0b17-11ec-ac16-000a00000006"
      },
      "id": "1bb899bc-0b17-11ec-ac16-000a00000006",
      "accountId": "9067e733-099c-11ec-ac16-000c00000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/9334c6a2-099c-11ec-ac16-000b00000042",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9334c6a2-099c-11ec-ac16-000b00000042"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/906f1cd6-099c-11ec-ac16-000c00000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/947ebfcd-099c-11ec-ac16-000b00000083",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=947ebfcd-099c-11ec-ac16-000b00000083"
        }
      },
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/94527995-099c-11ec-ac16-000b0000007e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
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
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/metadata/attributes/f478774c-0bfb-11ec-ac12-000d000000d1",
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/1bb899bc-0b17-11ec-ac16-000a00000006/files",
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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/24d56ba6-0b14-11ec-ac16-000b00000013",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/metadata",
        "type": "counterpartyadjustment",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#counterpartyadjustment/edit?id=24d56ba6-0b14-11ec-ac16-000b00000013"
      },
      "id": "24d56ba6-0b14-11ec-ac16-000b00000013",
      "accountId": "9067e733-099c-11ec-ac16-000c00000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/9334c6a2-099c-11ec-ac16-000b00000042",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9334c6a2-099c-11ec-ac16-000b00000042"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/906f1cd6-099c-11ec-ac16-000c00000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/947ebfcd-099c-11ec-ac16-000b00000083",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=947ebfcd-099c-11ec-ac16-000b00000083"
        }
      },
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/94527995-099c-11ec-ac16-000b0000007e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/24d56ba6-0b14-11ec-ac16-000b00000013/files",
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

### Создать Корректировку баланса контрагента
Запрос на создание новой Корректировки баланса контрагента.
Обязательные для создания поля:

| Параметр                       | Описание                                                                                        |
| ------------------------------ | :---------------------------------------------------------------------------------------------- |
| **organization**               | Ссылка на ваше юрлицо в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **agent**                      | Ссылка на контрагента в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |

> Пример создания новой Корректировки баланса контрагента.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "agent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/947ebfcd-099c-11ec-ac16-000b00000083",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "counterparty",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=947ebfcd-099c-11ec-ac16-000b00000083"
              }
            },
            "organization": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/94527995-099c-11ec-ac16-000b0000007e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
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
Успешный запрос. Результат - JSON представление созданной Корректировки баланса контрагента.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/2775d672-0b1a-11ec-ac16-000a0000000a",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/metadata",
    "type": "counterpartyadjustment",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#counterpartyadjustment/edit?id=2775d672-0b1a-11ec-ac16-000a0000000a"
  },
  "id": "2775d672-0b1a-11ec-ac16-000a0000000a",
  "accountId": "9067e733-099c-11ec-ac16-000c00000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/9334c6a2-099c-11ec-ac16-000b00000042",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9334c6a2-099c-11ec-ac16-000b00000042"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/906f1cd6-099c-11ec-ac16-000c00000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/947ebfcd-099c-11ec-ac16-000b00000083",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=947ebfcd-099c-11ec-ac16-000b00000083"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/94527995-099c-11ec-ac16-000b0000007e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/2775d672-0b1a-11ec-ac16-000a0000000a/files",
      "type": "files",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Массовое создание и обновление Корректировок баланса контрагента
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Корректировок баланса контрагента.
В теле запроса нужно передать массив, содержащий JSON представления Корректировок баланса контрагента, которые вы хотите создать или обновить.
Обновляемые Корректировки баланса контрагента должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Корректировок баланса контрагента

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "agent": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/947ebfcd-099c-11ec-ac16-000b00000083",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                  "type": "counterparty",
                  "mediaType": "application/json",
                  "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=947ebfcd-099c-11ec-ac16-000b00000083"
                }
              },
              "organization": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/94527995-099c-11ec-ac16-000b0000007e",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
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
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/947ebfcd-099c-11ec-ac16-000b00000055",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                  "type": "counterparty",
                  "mediaType": "application/json",
                  "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=947ebfcd-099c-11ec-ac16-000b00000055"
                }
              },
              "organization": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/94527995-099c-11ec-ac16-000b00000066",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
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
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Корректировок баланса контрагента.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/13bf011a-0b1b-11ec-ac16-000a0000000e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/metadata",
      "type": "counterpartyadjustment",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#counterpartyadjustment/edit?id=13bf011a-0b1b-11ec-ac16-000a0000000e"
    },
    "id": "13bf011a-0b1b-11ec-ac16-000a0000000e",
    "accountId": "9067e733-099c-11ec-ac16-000c00000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/9334c6a2-099c-11ec-ac16-000b00000042",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9334c6a2-099c-11ec-ac16-000b00000042"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/906f1cd6-099c-11ec-ac16-000c00000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/947ebfcd-099c-11ec-ac16-000b00000083",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=947ebfcd-099c-11ec-ac16-000b00000083"
      }
    },
    "organization": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/94527995-099c-11ec-ac16-000b0000007e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/13bf011a-0b1b-11ec-ac16-000a0000000e/files",
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/13cc2d25-0b1b-11ec-ac16-000a00000012",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/metadata",
      "type": "counterpartyadjustment",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#counterpartyadjustment/edit?id=13cc2d25-0b1b-11ec-ac16-000a00000012"
    },
    "id": "13cc2d25-0b1b-11ec-ac16-000a00000012",
    "accountId": "9067e733-099c-11ec-ac16-000c00000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/9334c6a2-099c-11ec-ac16-000b00000042",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9334c6a2-099c-11ec-ac16-000b00000042"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/906f1cd6-099c-11ec-ac16-000c00000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/947ebfcd-099c-11ec-ac16-000b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=947ebfcd-099c-11ec-ac16-000b00000055"
      }
    },
    "organization": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/94527995-099c-11ec-ac16-000b00000066",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/13cc2d25-0b1b-11ec-ac16-000a00000012/files",
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

### Удалить Корректировку баланса контрагента

**Параметры**

| Параметр | Описание                                                                                                  |
| :------- | :-------------------------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Корректировки баланса контрагента. |

> Запрос на удаление Корректировки баланса контрагента с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Корректировки баланса контрагента.

### Массовое удаление Корректировок баланса контрагента

В теле запроса нужно передать массив, содержащий JSON метаданных Корректировок баланса контрагента, которые вы хотите удалить.


> Запрос на массовое удаление Корректировок баланса контрагента.

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/metadata",
            "type": "counterpartyadjustment",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/metadata",
            "type": "counterpartyadjustment",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Корректировок баланса контрагента.

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

### Метаданные Корректировок баланса контрагента
#### Метаданные Корректировок баланса контрагента
Запрос на получение метаданных Корректировок баланса контрагента. Результат - объект JSON, включающий в себя:

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **meta**                       | Ссылка на метаданные Корректировок баланса контрагента                                                                                 |
| **attributes**                 | Массив объектов доп. полей Корректировок баланса контрагента в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **createShared**               | создавать новые Корректировки баланса контрагента с меткой "Общий"                                                                     |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Корректировок баланса контрагента

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Корректировок баланса контрагента.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/metadata",
    "mediaType": "application/json"
  },
  "attributes": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/metadata/attributes",
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

### Корректировка баланса контрагента

### Получить Корректировку баланса контрагента

**Параметры**

| Параметр | Описание                                                                                                  |
| :------- | :-------------------------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Корректировки баланса контрагента. |

> Запрос на получение отдельной Корректировки баланса контрагента с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Корректировки баланса контрагента.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/7944ef04-f831-11e5-7a69-971500188b19",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/metadata",
    "type": "counterpartyadjustment",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#counterpartyadjustment/edit?id=7944ef04-f831-11e5-7a69-971500188b19"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b19",
  "accountId": "9067e733-099c-11ec-ac16-000c00000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/9334c6a2-099c-11ec-ac16-000b00000042",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9334c6a2-099c-11ec-ac16-000b00000042"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/906f1cd6-099c-11ec-ac16-000c00000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/947ebfcd-099c-11ec-ac16-000b00000083",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=947ebfcd-099c-11ec-ac16-000b00000083"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/94527995-099c-11ec-ac16-000b0000007e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/7944ef04-f831-11e5-7a69-971500188b19/files",
      "type": "files",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Изменить Корректировку баланса контрагента
Запрос на обновление Корректировки баланса контрагента с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Корректировки баланса контрагента, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Корректировки баланса контрагента](../documents/#dokumenty-korrektirowka-balansa-kontragenta).

**Параметры**

| Параметр | Описание                                                                                                  |
| :------- | :-------------------------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Корректировки баланса контрагента. |

> Пример запроса на обновление отдельной Корректировки баланса контрагента.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "sum": 123
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Корректировки баланса контрагента.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/7944ef04-f831-11e5-7a69-971500188b19",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/metadata",
    "type": "counterpartyadjustment",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#counterpartyadjustment/edit?id=7944ef04-f831-11e5-7a69-971500188b19"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b19",
  "accountId": "9067e733-099c-11ec-ac16-000c00000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/9334c6a2-099c-11ec-ac16-000b00000042",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9334c6a2-099c-11ec-ac16-000b00000042"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/906f1cd6-099c-11ec-ac16-000c00000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/947ebfcd-099c-11ec-ac16-000b00000083",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=947ebfcd-099c-11ec-ac16-000b00000083"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/94527995-099c-11ec-ac16-000b0000007e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterpartyadjustment/7944ef04-f831-11e5-7a69-971500188b19/files",
      "type": "files",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  }
}
```
