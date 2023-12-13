## Выполнение производственного этапа
### Выполнение производственного этапа
Средствами JSON API можно создавать и обновлять сведения о Выполнениях производственных этапов, запрашивать списки Выполнений производственных этапов и сведения по отдельным Выполнениям производственных этапов.
#### Атрибуты сущности

| Название                | Тип                                                       | Фильтрация | Описание                                                                                                           |
|-------------------------|:----------------------------------------------------------|:-----------|:-------------------------------------------------------------------------------------------------------------------|
| **accountId**           | UUID                                                      |            | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                               |
| **id**                  | UUID                                                      |            | ID Выполнения производственного этапа<br>`+Обязательное при ответе` `+Только для чтения`                           |
| **meta**                | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |            | Метаданные Производственного этапа<br>`+Обязательное при ответе` `+Только для чтения`                              |
| **owner**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |            | Владелец (Сотрудник)<br>`+Expand`                                                                                  |
| **shared**              | Boolean                                                   |            | Общий доступ<br>`+Обязательное при ответе`                                                                         |
| **group**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |            | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                           |
| **updated**             | DateTime                                                  |            | Момент последнего обновления Выполнения производственного этапа<br>`+Обязательное при ответе` `+Только для чтения` |
| **name**                | String(255)                                               |            | Наименование Выполнения производственного этапа<br>`+Обязательное при ответе``+Change-handler` `+Update-provider`  |
| **externalCode**        | String(255)                                               |            | Внешний код Выполнения производственного этапа<br>`+Обязательное при ответе``+Change-handler` `+Update-provider`   |
| **moment**              | DateTime                                                  |            | Дата документа<br>`+Обязательное при ответе``+Change-handler` `+Update-provider`                                   |
| **productionStage**     | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |            | Производственный этап<br>`+Expand`                                                                                 |
| **created**             | DateTime                                                  |            | Дата создания<br>`+Обязательное при ответе` `+Только для чтения``+Change-handler`                                  |
| **materials**           | MetaArray                                                 |            | Метаданные материалов Производственного этапа<br>`+Обязательное при ответе`                                        |
| **products**            | MetaArray                                                 |            | Метаданные продуктов Производственного этапа<br>`+Обязательное при ответе`                                         |
| **productionVolume**    | Double                                                    |            | Объем Выполнения производственного этапа.`+Обязательное при ответе`                                                |
| **processingUnitCost**  | Double                                                    |            | Затраты на производство<br>`+Обязательное при ответе`                                                              |
| **labourUnitCost**      | Double                                                    |            | Оплата труда<br>`+Обязательное при ответе`                                                                         |


### Получить список Выполнений производственных этапов
Запрос всех Выполнений производственных этапов на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                      |
| ----------- | :-------------------------------------------------------- |:--------------------------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                          |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                  |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Выполненные этапы. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |

> Получить список Выполнений производственных этапов

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Выполнений производственных этапов.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion",
    "type": "productionstagecompletion",
    "mediaType": "application/json",
    "size": 5,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/01ff6808-95de-11ee-0a81-072300000136",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
        "type": "productionstagecompletion",
        "mediaType": "application/json",
        "uuidHref": "https://online-api-4.testms-test.lognex.ru/app/#productionstagecompletion/edit?id=01ff6808-95de-11ee-0a81-072300000136"
      },
      "id": "01ff6808-95de-11ee-0a81-072300000136",
      "accountId": "a67c68a3-95dd-11ee-0a83-071a00000002",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a7354b1a-95dd-11ee-0a81-07230000004d",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online-api-4.testms-test.lognex.ru/app/#employee/edit?id=a7354b1a-95dd-11ee-0a81-07230000004d"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/a67ef296-95dd-11ee-0a83-071a00000003",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2023-12-08 18:25:24.325",
      "name": "00001",
      "externalCode": "EnuNEmG2jyUF4t9tgPQk72",
      "moment": "2023-12-08 18:25:00.000",
      "created": "2023-12-08 18:25:24.386",
      "productionStage": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/d15ec2e9-95dd-11ee-0a81-07230000011c",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
          "type": "productionstage",
          "mediaType": "application/json"
        }
      },
      "materials": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/01ff6808-95de-11ee-0a81-072300000136/materials",
          "type": "productionstagecompletionmaterial",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "products": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/01ff6808-95de-11ee-0a81-072300000136/products",
          "type": "productionstagecompletionresult",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "productionVolume": 100000,
      "processingUnitCost": 0.0,
      "labourUnitCost": 0.0
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/19b3bb62-9807-11ee-0a81-07230000030e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
        "type": "productionstagecompletion",
        "mediaType": "application/json",
        "uuidHref": "https://online-api-4.testms-test.lognex.ru/app/#productionstagecompletion/edit?id=19b3bb62-9807-11ee-0a81-07230000030e"
      },
      "id": "19b3bb62-9807-11ee-0a81-07230000030e",
      "accountId": "a67c68a3-95dd-11ee-0a83-071a00000002",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a7354b1a-95dd-11ee-0a81-07230000004d",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online-api-4.testms-test.lognex.ru/app/#employee/edit?id=a7354b1a-95dd-11ee-0a81-07230000004d"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/a67ef296-95dd-11ee-0a83-071a00000003",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2023-12-11 12:26:28.767",
      "name": "00003",
      "externalCode": "zjyrF00vg0Ogjpl0Uk0XP0",
      "moment": "2023-12-11 12:24:00.000",
      "created": "2023-12-11 12:24:35.847",
      "productionStage": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/1812ddaf-9807-11ee-0a81-072300000306",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
          "type": "productionstage",
          "mediaType": "application/json"
        }
      },
      "materials": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/19b3bb62-9807-11ee-0a81-07230000030e/materials",
          "type": "productionstagecompletionmaterial",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "products": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/19b3bb62-9807-11ee-0a81-07230000030e/products",
          "type": "productionstagecompletionresult",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "productionVolume": 1,
      "processingUnitCost": 0.0,
      "labourUnitCost": 0.0
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/4c65602d-97f5-11ee-0a81-0723000001e1",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
        "type": "productionstagecompletion",
        "mediaType": "application/json",
        "uuidHref": "https://online-api-4.testms-test.lognex.ru/app/#productionstagecompletion/edit?id=4c65602d-97f5-11ee-0a81-0723000001e1"
      },
      "id": "4c65602d-97f5-11ee-0a81-0723000001e1",
      "accountId": "a67c68a3-95dd-11ee-0a83-071a00000002",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a7354b1a-95dd-11ee-0a81-07230000004d",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online-api-4.testms-test.lognex.ru/app/#employee/edit?id=a7354b1a-95dd-11ee-0a81-07230000004d"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/a67ef296-95dd-11ee-0a83-071a00000003",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2023-12-11 10:35:54.714",
      "name": "00002",
      "externalCode": "zrkbh5LfjVUXFXfbUunmh3",
      "moment": "2023-12-11 10:17:00.000",
      "created": "2023-12-11 10:17:09.956",
      "productionStage": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/3dc137d1-97f5-11ee-0a81-0723000001dc",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
          "type": "productionstage",
          "mediaType": "application/json"
        }
      },
      "materials": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/4c65602d-97f5-11ee-0a81-0723000001e1/materials",
          "type": "productionstagecompletionmaterial",
          "mediaType": "application/json",
          "size": 18,
          "limit": 1000,
          "offset": 0
        }
      },
      "products": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/4c65602d-97f5-11ee-0a81-0723000001e1/products",
          "type": "productionstagecompletionresult",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "productionVolume": 1,
      "processingUnitCost": 0.0,
      "labourUnitCost": 0.0
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/68c6559a-980b-11ee-0a81-072300000358",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
        "type": "productionstagecompletion",
        "mediaType": "application/json",
        "uuidHref": "https://online-api-4.testms-test.lognex.ru/app/#productionstagecompletion/edit?id=68c6559a-980b-11ee-0a81-072300000358"
      },
      "id": "68c6559a-980b-11ee-0a81-072300000358",
      "accountId": "a67c68a3-95dd-11ee-0a83-071a00000002",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a7354b1a-95dd-11ee-0a81-07230000004d",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online-api-4.testms-test.lognex.ru/app/#employee/edit?id=a7354b1a-95dd-11ee-0a81-07230000004d"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/a67ef296-95dd-11ee-0a83-071a00000003",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2023-12-11 12:55:26.438",
      "name": "00006",
      "externalCode": "4vgR7NjlgYrEE1fKxfRVV2",
      "moment": "2023-12-11 12:55:00.000",
      "created": "2023-12-11 12:55:26.496",
      "productionStage": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/36bcdb7a-980b-11ee-0a81-07230000034c",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
          "type": "productionstage",
          "mediaType": "application/json"
        }
      },
      "materials": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/68c6559a-980b-11ee-0a81-072300000358/materials",
          "type": "productionstagecompletionmaterial",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "products": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/68c6559a-980b-11ee-0a81-072300000358/products",
          "type": "productionstagecompletionresult",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "productionVolume": 1.1235,
      "processingUnitCost": 0.0,
      "labourUnitCost": 0.0
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/6d87056d-9809-11ee-0a83-0717000000a2",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
        "type": "productionstagecompletion",
        "mediaType": "application/json",
        "uuidHref": "https://online-api-4.testms-test.lognex.ru/app/#productionstagecompletion/edit?id=6d87056d-9809-11ee-0a83-0717000000a2"
      },
      "id": "6d87056d-9809-11ee-0a83-0717000000a2",
      "accountId": "a67c68a3-95dd-11ee-0a83-071a00000002",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a7354b1a-95dd-11ee-0a81-07230000004d",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online-api-4.testms-test.lognex.ru/app/#employee/edit?id=a7354b1a-95dd-11ee-0a81-07230000004d"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/a67ef296-95dd-11ee-0a83-071a00000003",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2023-12-11 12:51:50.895",
      "name": "00004",
      "externalCode": "Y3qEMw7Qjl0jh5JwFFvrL2",
      "moment": "2023-12-11 12:41:00.000",
      "created": "2023-12-11 12:41:15.372",
      "productionStage": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/e0e2370f-9808-11ee-0a81-072300000327",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
          "type": "productionstage",
          "mediaType": "application/json"
        }
      },
      "materials": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/6d87056d-9809-11ee-0a83-0717000000a2/materials",
          "type": "productionstagecompletionmaterial",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "products": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/6d87056d-9809-11ee-0a83-0717000000a2/products",
          "type": "productionstagecompletionresult",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "productionVolume": 1.6,
      "processingUnitCost": 0.0,
      "labourUnitCost": 0.0
    }
  ]
}
```

### Создать Выполнение производственного этапа
Запрос на создание нового Выполнение производственного этапа.
Обязательные для создания поля:

+ **productionStage** - Ссылка на Производственный этап в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **productionVolume** - Объем Выполненного этапа 

> Пример создания нового Выполнение производственного этапа с телом запроса, содержащим только необходимые поля.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/processingorder"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "productionStage": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/3130f7df-660f-11ee-c0a8-100c00000139",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
                "type": "productionstagecompletion",
                "mediaType": "application/json"
              }
            },
            "productionVolume" : 5
          } 
'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Выполнения производственного этапа.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/01ff6808-95de-11ee-0a81-072300000136",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
    "type": "productionstagecompletion",
    "mediaType": "application/json",
    "uuidHref": "https://online-api-4.testms-test.lognex.ru/app/#productionstagecompletion/edit?id=01ff6808-95de-11ee-0a81-072300000136"
  },
  "id": "01ff6808-95de-11ee-0a81-072300000136",
  "accountId": "a67c68a3-95dd-11ee-0a83-071a00000002",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a7354b1a-95dd-11ee-0a81-07230000004d",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online-api-4.testms-test.lognex.ru/app/#employee/edit?id=a7354b1a-95dd-11ee-0a81-07230000004d"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/a67ef296-95dd-11ee-0a83-071a00000003",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2023-12-08 18:25:24.325",
  "name": "00001",
  "externalCode": "EnuNEmG2jyUF4t9tgPQk72",
  "moment": "2023-12-08 18:25:00.000",
  "created": "2023-12-08 18:25:24.386",
  "productionStage": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/3130f7df-660f-11ee-c0a8-100c00000139",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
      "type": "productionstage",
      "mediaType": "application/json"
    }
  },
  "materials": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/01ff6808-95de-11ee-0a81-072300000136/materials",
      "type": "productionstagecompletionmaterial",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "products": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/01ff6808-95de-11ee-0a81-072300000136/products",
      "type": "productionstagecompletionresult",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "productionVolume": 5,
  "processingUnitCost": 10.0,
  "labourUnitCost": 20.0
}
```


> Пример создания нового Выполнения производственного этапа с более насыщенным телом запроса.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/processingorder"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "name": "000034",
            "owner": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "type": "employee",
                "mediaType": "application/json"
              }
            },
            "shared": false,
            "group": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
                "type": "group",
                "mediaType": "application/json"
              }
            },
            "productionStage": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/3130f7df-660f-11ee-c0a8-100c00000139",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
                "type": "productionstagecompletion",
                "mediaType": "application/json"
              }
            },
            "productionVolume": 5,
            "processingUnitCost": 10.0,
            "labourUnitCost": 20.0
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Выполнения производственного этапа.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/01ff6808-95de-11ee-0a81-072300000136",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
    "type": "productionstagecompletion",
    "mediaType": "application/json",
    "uuidHref": "https://online-api-4.testms-test.lognex.ru/app/#productionstagecompletion/edit?id=01ff6808-95de-11ee-0a81-072300000136"
  },
  "id": "01ff6808-95de-11ee-0a81-072300000136",
  "accountId": "a67c68a3-95dd-11ee-0a83-071a00000002",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a7354b1a-95dd-11ee-0a81-07230000004d",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online-api-4.testms-test.lognex.ru/app/#employee/edit?id=a7354b1a-95dd-11ee-0a81-07230000004d"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/a67ef296-95dd-11ee-0a83-071a00000003",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2023-12-08 18:25:24.325",
  "name": "00001",
  "externalCode": "EnuNEmG2jyUF4t9tgPQk72",
  "moment": "2016-04-19 13:50:24",
  "created": "2023-12-08 18:25:24.386",
  "productionStage": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/3130f7df-660f-11ee-c0a8-100c00000139",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
      "type": "productionstage",
      "mediaType": "application/json"
    }
  },
  "materials": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/01ff6808-95de-11ee-0a81-072300000136/materials",
      "type": "productionstagecompletionmaterial",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "products": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/01ff6808-95de-11ee-0a81-072300000136/products",
      "type": "productionstagecompletionresult",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "productionVolume": 5,
  "processingUnitCost": 10.0,
  "labourUnitCost": 20.0
}
```

### Массовое создание и обновление Выполнений производственных этапов
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Выполнений производственных этапов.
В теле запроса нужно передать массив, содержащий JSON представления Выполнений производственных этапов, которые вы хотите создать или обновить.
Обновляемые Выполнения производственных этапов должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Выполнений производственных этапов

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/processingorder"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '[
            {
                "name": "000033",
                "owner": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                    "type": "employee",
                    "mediaType": "application/json"
                  }
                },
                "shared": false,
                "group": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
                    "type": "group",
                    "mediaType": "application/json"
                  }
                },
                "productionStage": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/3130f7df-660f-11ee-c0a8-100c00000139",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
                    "type": "productionstagecompletion",
                    "mediaType": "application/json"
                  }
                },
                "productionVolume": 15,
              ]
            },
            {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/01ff6808-95de-11ee-0a81-072300000136",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
                "type": "productionstagecompletion",
                "mediaType": "application/json",
                "uuidHref": "https://online-api-4.testms-test.lognex.ru/app/#productionstagecompletion/edit?id=01ff6808-95de-11ee-0a81-072300000136"
              },
              "name": "000034",
              "productionVolume": 5
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Выполнений производственных этапов.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/01ff6808-95de-11ee-0a81-072300000136",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
      "type": "productionstagecompletion",
      "mediaType": "application/json",
      "uuidHref": "https://online-api-4.testms-test.lognex.ru/app/#productionstagecompletion/edit?id=01ff6808-95de-11ee-0a81-072300000136"
    },
    "id": "01ff6808-95de-11ee-0a81-072300000136",
    "accountId": "a67c68a3-95dd-11ee-0a83-071a00000002",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a7354b1a-95dd-11ee-0a81-07230000004d",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online-api-4.testms-test.lognex.ru/app/#employee/edit?id=a7354b1a-95dd-11ee-0a81-07230000004d"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/a67ef296-95dd-11ee-0a83-071a00000003",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2023-12-08 18:25:24.325",
    "name": "000033",
    "externalCode": "EnuNEmG2jyUF4t9tgPQk72",
    "moment": "2023-12-08 18:25:00.000",
    "created": "2023-12-08 18:25:24.386",
    "productionStage": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/3130f7df-660f-11ee-c0a8-100c00000139",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
        "type": "productionstagecompletion",
        "mediaType": "application/json"
      }
    },
    "materials": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/01ff6808-95de-11ee-0a81-072300000136/materials",
        "type": "productionstagecompletionmaterial",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
      }
    },
    "products": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/01ff6808-95de-11ee-0a81-072300000136/products",
        "type": "productionstagecompletionresult",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
      }
    },
    "productionVolume": 15,
    "processingUnitCost": 0.0,
    "labourUnitCost": 0.0
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/19b3bb62-9807-11ee-0a81-07230000030e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
      "type": "productionstagecompletion",
      "mediaType": "application/json",
      "uuidHref": "https://online-api-4.testms-test.lognex.ru/app/#productionstagecompletion/edit?id=19b3bb62-9807-11ee-0a81-07230000030e"
    },
    "id": "19b3bb62-9807-11ee-0a81-07230000030e",
    "accountId": "a67c68a3-95dd-11ee-0a83-071a00000002",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a7354b1a-95dd-11ee-0a81-07230000004d",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online-api-4.testms-test.lognex.ru/app/#employee/edit?id=a7354b1a-95dd-11ee-0a81-07230000004d"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/a67ef296-95dd-11ee-0a83-071a00000003",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2023-12-11 12:26:28.767",
    "name": "000034",
    "externalCode": "zjyrF00vg0Ogjpl0Uk0XP0",
    "moment": "2023-12-11 12:24:00.000",
    "created": "2023-12-11 12:24:35.847",
    "productionStage": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/1812ddaf-9807-11ee-0a81-072300000306",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
        "type": "productionstage",
        "mediaType": "application/json"
      }
    },
    "materials": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/19b3bb62-9807-11ee-0a81-07230000030e/materials",
        "type": "productionstagecompletionmaterial",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
      }
    },
    "products": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/19b3bb62-9807-11ee-0a81-07230000030e/products",
        "type": "productionstagecompletionresult",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
      }
    },
    "productionVolume": 5,
    "processingUnitCost": 0.0,
    "labourUnitCost": 0.0
  }
]
```

### Удалить Выполнение производственного этапа

**Параметры**

| Параметр | Описание                                                                                                   |
| :------- |:-----------------------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Выполнения производственного этапа. |

> Запрос на удаление Выполнения производственного этапа с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление Выполнения производственного этапа.

### Массовое удаление Выполнений производственных этапов

В теле запроса нужно передать массив, содержащий JSON метаданных Выполнений производственных этапов, которые вы хотите удалить.


> Запрос на массовое удаление Выполнений производственных этапов.

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
  -d '[
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/01ff6808-95de-11ee-0a81-072300000136",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
                "type": "productionstagecompletion",
                "mediaType": "application/json",
              }
        },
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/01ff6808-95de-11ee-0a81-072300000136",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
                "type": "productionstagecompletion",
                "mediaType": "application/json",
              }
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Выполнений производственных этапов.

```json
[
  {
    "info":"Сущность 'productionstagecompletion' с UUID: 01ff6808-95de-11ee-0a81-072300000136 успешно удалена"
  },
  {
    "info":"Сущность 'productionstagecompletion' с UUID: 01ff6808-95de-11ee-0a81-072300000136 успешно удалена"
  }
]
```

### Получить Выполнение производственного этапа

**Параметры**

| Параметр | Описание                                                                                                   |
| :------- |:-----------------------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Выполнения производственного этапа. |

> Запрос на получение отдельного Выполнения производственного этапа с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Выполнения производственного этапа.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
    "type": "productionstagecompletion",
    "mediaType": "application/json",
    "uuidHref": "https://online-api-4.testms-test.lognex.ru/app/#productionstagecompletion/edit?id=7944ef04-f831-11e5-7a69-971500188b19"
  },
  "id": "01ff6808-95de-11ee-0a81-072300000136",
  "accountId": "a67c68a3-95dd-11ee-0a83-071a00000002",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a7354b1a-95dd-11ee-0a81-07230000004d",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online-api-4.testms-test.lognex.ru/app/#employee/edit?id=a7354b1a-95dd-11ee-0a81-07230000004d"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/a67ef296-95dd-11ee-0a83-071a00000003",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2023-12-08 18:25:24.325",
  "name": "00001",
  "externalCode": "EnuNEmG2jyUF4t9tgPQk72",
  "moment": "2023-12-08 18:25:00.000",
  "created": "2023-12-08 18:25:24.386",
  "productionStage": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/d15ec2e9-95dd-11ee-0a81-07230000011c",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
      "type": "productionstage",
      "mediaType": "application/json"
    }
  },
  "materials": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/01ff6808-95de-11ee-0a81-072300000136/materials",
      "type": "productionstagecompletionmaterial",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "products": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/01ff6808-95de-11ee-0a81-072300000136/products",
      "type": "productionstagecompletionresult",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "productionVolume": 100000,
  "processingUnitCost": 0.0,
  "labourUnitCost": 0.0
}
```

### Изменить Выполнение производственного этапа
Запрос на обновление Выполнения производственного этапа с указанным id.
В теле запроса необходимо указать те поля,
которые необходимо изменить у Выполнения производственного этапа, кроме тех, что помечены `Только для чтения` в описании атрибутов Выполнения производственного этапа.

**Параметры**

| Параметр | Описание                                                                                                   |
| :------- |:-----------------------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Выполнения производственного этапа. |

> Пример запроса на обновление отдельного Выполнения производственного этапа.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "name": "000034",
            "productionVolume": 22,
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Выполнения производственного этапа.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
    "type": "productionstagecompletion",
    "mediaType": "application/json",
    "uuidHref": "https://online-api-4.testms-test.lognex.ru/app/#productionstagecompletion/edit?id=7944ef04-f831-11e5-7a69-971500188b19"
  },
  "id": "01ff6808-95de-11ee-0a81-072300000136",
  "accountId": "a67c68a3-95dd-11ee-0a83-071a00000002",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a7354b1a-95dd-11ee-0a81-07230000004d",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online-api-4.testms-test.lognex.ru/app/#employee/edit?id=a7354b1a-95dd-11ee-0a81-07230000004d"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/a67ef296-95dd-11ee-0a83-071a00000003",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2023-12-08 18:25:24.325",
  "name": "00001",
  "externalCode": "EnuNEmG2jyUF4t9tgPQk72",
  "moment": "2023-12-08 18:25:00.000",
  "created": "2023-12-08 18:25:24.386",
  "productionStage": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/d15ec2e9-95dd-11ee-0a81-07230000011c",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
      "type": "productionstage",
      "mediaType": "application/json"
    }
  },
  "materials": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/01ff6808-95de-11ee-0a81-072300000136/materials",
      "type": "productionstagecompletionmaterial",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "products": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/01ff6808-95de-11ee-0a81-072300000136/products",
      "type": "productionstagecompletionresult",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "productionVolume": 22,
  "processingUnitCost": 0.0,
  "labourUnitCost": 0.0
}
```

#### Продукты выполненного этапа
Продукты выполненного этапа - это товары, модификации и серии, созданные при выполнении этапа производства.

Объект позиции Заказа содержит следующие поля:

| Название             | Тип                                                      | Описание                                                                                                                                                                                                                                                      |
| -------------------- |:---------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**        | UUID                                                     | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                          |
| **assortment**       | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)| Метаданные товара/услуги/серии/модификации, которую представляет собой позиция<br>`+Обязательное при ответе` `+Expand`                                                                                                                                        |
| **id**               | UUID                                                     | ID позиции<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                                 |
| **producedQuantity** | Float                                                    | Количество товаров/модификаций данного вида в позиции. Если позиция - товар, у которого включен учет по серийным номерам, то значение в этом поле всегда будет равно количеству серийных номеров для данной позиции в документе<br>`+Обязательное при ответе` |
| **things**           | Array(String)                                            | Серийные номера. Значение данного атрибута игнорируется, если товар позиции не находится на серийном учете. В ином случае количество товаров в позиции будет равно количеству серийных номеров, переданных в значении атрибута                                |

### Продукты выполненного этапа
Отдельный ресурс для управления продуктами выполненного этапа.

### Получить продукты выполненного этапа
Запрос на получение списка всех продуктов Выполнения производственного этапа.

| Название    | Тип                                                       | Описание                                                               |
| ----------- | :-------------------------------------------------------- | :--------------------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче                                                    |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос                            |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой продукты выполненного этапа |

**Параметры**

| Параметр   | Описание                                                                                                                              |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Выполнение производственного этапа                             |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000` |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей                                                 |

> Запрос на получение списка всех позиций данного продуктов Выполнения производственного этапа

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/products/"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка продуктов Выполнения производственного этапа.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "http://localhost/api/remap/1.2/context/employee",
        "metadataHref": "http://localhost/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "http://localhost/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/products/",
    "type": "productionstagecompletionresult",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "http://localhost/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/products/34f6344f-015e-11e6-9464-e4de0000006c",
        "type": "productionstagecompletionresult",
        "mediaType": "application/json"
      },
      "id": "34f6344f-015e-11e6-9464-e4de0000006c",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "producedQuantity": 0.7,
      "assortment": {
        "meta": {
          "href": "http://localhost/api/remap/1.2/entity/product/9656117b-b717-11ec-0с80-0bba0006dcde",
          "metadataHref": "http://localhost/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "http://localhost/app/#good/edit?id=96568199-b716-11ec-0a80-0bba0006dcdc"
        }
      }
    }
  ]
}
```

### Изменить продукт выполненного этапа
Запрос на обновление отдельного продукта выполненного этапа.
Изменять товар / модификацию нельзя, но можно изменить серию товара.
Для товаров с серийным учётом, поле `producedQuantity` автоматически изменяется на количество переданных в поле `things` серийных номеров.

**Параметры**

| Параметр      | Описание                                                                                                           |
| :------------ | :----------------------------------------------------------------------------------------------------------------- |
| **id**        | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Выполнения производственного этапа          |
| **productID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id продукта Выполнение производственного этапа |

> Пример запроса на обновление количества отдельного продукта выполненного этапа.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/products/34f6344f-015e-11e6-9464-e4de0000006c"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "producedQuantity": 2.7,
          }
      '  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции Заказа покупателя.

```json
    {
  "meta": {
    "href": "http://localhost/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/products/34f6344f-015e-11e6-9464-e4de0000006c",
    "type": "productionstagecompletionresult",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "producedQuantity": 2.7,
  "assortment": {
    "meta": {
      "href": "http://localhost/api/remap/1.2/entity/product/9656117b-b717-11ec-0с80-0bba0006dcde",
      "metadataHref": "http://localhost/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "http://localhost/app/#good/edit?id=96568199-b716-11ec-0a80-0bba0006dcdc"
    }
  }
}
```

> Пример запроса на обновление серийных номеров отдельного продукта выполненного этапа.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/products/34f6344f-015e-11e6-9464-e4de0000006c"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "things": ["F564X056", "F564X057"]
          }
      '  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции Заказа покупателя.

```json
{
  "meta": {
    "href": "http://localhost/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/products/34f6344f-015e-11e6-9464-e4de0000006c",
    "type": "productionstagecompletionresult",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "producedQuantity": 2,
  "assortment": {
    "meta": {
      "href": "http://localhost/api/remap/1.2/entity/product/9656117b-b717-11ec-0с80-0bba0006dcde",
      "metadataHref": "http://localhost/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "http://localhost/app/#good/edit?id=96568199-b716-11ec-0a80-0bba0006dcdc"
    }
  },
  "things": ["F564X056", "F564X057"]
}
```
