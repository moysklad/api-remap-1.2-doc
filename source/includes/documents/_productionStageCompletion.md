## Выполнение этапа производства

Средствами JSON API можно создавать, обновлять и удалять сведения о Выполнениях этапов производства,
запрашивать списки Выполнений этапов производства и сведения по отдельным Выполнениям этапов производства.
Если производство не начато по Производственному заданию, то попытки создать Выполненный этап на это Производственное задание будут завершаться ошибкой.

### Выполнения этапов производства
#### Атрибуты сущности

| Название                  | Тип                                                       | Фильтрация                 | Описание                                                                                                                                                                                          |
|---------------------------|:----------------------------------------------------------|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**             | UUID                                                      |                            | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                              |
| **created**               | DateTime                                                  |                            | Дата создания<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                  |
| **enableHourAccounting**  | Boolean                                                   |                            | Признак активности учета по нормо-часам<br>`+Обязательное при ответе`                                                                                                                             |
| **externalCode**          | String(255)                                               |                            | Внешний код Выполнения этапа производства<br>`+Обязательное при ответе`                                                                                                                           |
| **group**                 | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                            | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                                                                          |
| **id**                    | UUID                                                      |                            | ID Выполнения этапа производства<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                               |
| **labourUnitCost**        | Double                                                    |                            | Оплата труда за единицу объема производства<br>`+Обязательное при ответе`                                                                                                                         |
| **standardHourUnit**      | Double                                                    |                            | Нормо-часы единицы объема производства<br>`+Обязательное при ответе`                                                                                                                              |
| **materials**             | MetaArray                                                 |                            | Метаданные Материалов выполнения этапа производства. [Подробнее тут](#dokumenty-vypolnenie-atapa-proizwodstwa-materialy-wypolneniq-atapa-proizwodstwa)<br>`+Expand`                               |
| **meta**                  | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                            | Метаданные Выполнения этапа производства<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                       |
| **moment**                | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=` | Дата документа<br>`+Обязательное при ответе`                                                                                                                                                      |
| **name**                  | String(255)                                               |                            | Наименование Выполнения этапа производства<br>`+Обязательное при ответе`                                                                                                                          |
| **owner**                 | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                            | Владелец (Сотрудник)<br>`+Expand`                                                                                                                                                                 |
| **performer**             | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                            | Исполнитель (Сотрудник)<br>`+Expand`                                                                                                                                                              |
| **processingUnitCost**    | Double                                                    |                            | Затраты на единицу объема производства<br>`+Обязательное при ответе`                                                                                                                              |
| **productionStage**       | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                            | [Производственный этап](#dokumenty-proizwodstwennoe-zadanie-proizwodstwennye-atapy)<br>`+Expand` `+После создания изменить нельзя`                                                                |
| **productionVolume**      | Double                                                    |                            | Объем производства<br>`+Обязательное при ответе`                                                                                                                                                  |
| **products**              | MetaArray                                                 |                            | Метаданные Продуктов выполнения этапа производства. Есть только у последнего этапа. [Подробнее тут](#dokumenty-vypolnenie-atapa-proizwodstwa-produkty-wypolneniq-atapa-proizwodstwa)<br>`+Expand` |
| **shared**                | Boolean                                                   |                            | Общий доступ<br>`+Обязательное при ответе`                                                                                                                                                        |
| **standardHourCost**      | Double                                                    |                            | Стоимость нормо-часа<br>`+Обязательное при ответе`                                                                                                                                                |
| **updated**               | DateTime                                                  |                            | Момент последнего обновления Выполнения этапа производства<br>`+Обязательное при ответе` `+Только для чтения`                                                                                     |
Особенности:
Для сущности действуют ограничения на expand: для поля **productionStage.productionRow** недоступен expand вложенных полей.

Для перехода на автоматический рассчет оплаты труда по нормо-часам (по формуле labourUnitCost = standardHourCost * standardHourUnit)
необходимо передать признак активации (флаг enableHourAccounting=true). Изменение значения оплаты труда при включенном флаге недопустимо -
для передачи фиксированного значения требуется деактивировать флаг.

### Получить список Выполнений этапов производства 
Запрос Выполнений этапов производства на аккаунте.

При получении списка Выполнений этапов можно передать фильтр на конкретное производственное задание:  
`filter=productionTask=https://api.moysklad.ru/api/remap/1.2/entity/productionTask/&lt;id>`.

Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                      |
| ----------- | :-------------------------------------------------------- |:--------------------------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                          |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                  |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Выполнения этапов. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |

> Получить список Выполнений этапов производства

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Выполнений этапов производства.

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
        "uuidHref": "https://online.moysklad.ru/app/#productionstagecompletion/edit?id=01ff6808-95de-11ee-0a81-072300000136"
      },
      "id": "01ff6808-95de-11ee-0a81-072300000136",
      "accountId": "a67c68a3-95dd-11ee-0a83-071a00000002",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a7354b1a-95dd-11ee-0a81-07230000004d",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=a7354b1a-95dd-11ee-0a81-07230000004d"
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
      "performer": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/50f4a244-9a95-11ee-0a83-05c8000005af",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=50f4a244-9a95-11ee-0a83-05c8000005af"
        }
      },
      "productionStage": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/d15ec2e9-95dd-11ee-0a81-07230000011c",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/metadata",
          "type": "productionstage",
          "mediaType": "application/json"
        }
      },
      "standardHourCost": 0.0,
      "enableHourAccounting": false,
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
      "labourUnitCost": 0.0,
      "standardHour": 0.0
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/19b3bb62-9807-11ee-0a81-07230000030e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
        "type": "productionstagecompletion",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#productionstagecompletion/edit?id=19b3bb62-9807-11ee-0a81-07230000030e"
      },
      "id": "19b3bb62-9807-11ee-0a81-07230000030e",
      "accountId": "a67c68a3-95dd-11ee-0a83-071a00000002",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a7354b1a-95dd-11ee-0a81-07230000004d",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=a7354b1a-95dd-11ee-0a81-07230000004d"
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
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/metadata",
          "type": "productionstage",
          "mediaType": "application/json"
        }
      },
      "standardHourCost": 0.0,
      "enableHourAccounting": false,
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
      "labourUnitCost": 0.0,
      "standardHour": 0.0
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/4c65602d-97f5-11ee-0a81-0723000001e1",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
        "type": "productionstagecompletion",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#productionstagecompletion/edit?id=4c65602d-97f5-11ee-0a81-0723000001e1"
      },
      "id": "4c65602d-97f5-11ee-0a81-0723000001e1",
      "accountId": "a67c68a3-95dd-11ee-0a83-071a00000002",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a7354b1a-95dd-11ee-0a81-07230000004d",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=a7354b1a-95dd-11ee-0a81-07230000004d"
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
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/metadata",
          "type": "productionstage",
          "mediaType": "application/json"
        }
      },
      "standardHourCost": 0.0,
      "enableHourAccounting": false,
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
      "labourUnitCost": 0.0,
      "standardHour": 0.0
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/68c6559a-980b-11ee-0a81-072300000358",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
        "type": "productionstagecompletion",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#productionstagecompletion/edit?id=68c6559a-980b-11ee-0a81-072300000358"
      },
      "id": "68c6559a-980b-11ee-0a81-072300000358",
      "accountId": "a67c68a3-95dd-11ee-0a83-071a00000002",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a7354b1a-95dd-11ee-0a81-07230000004d",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=a7354b1a-95dd-11ee-0a81-07230000004d"
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
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/metadata",
          "type": "productionstage",
          "mediaType": "application/json"
        }
      },
      "standardHourCost": 0.0,
      "enableHourAccounting": false,
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
      "labourUnitCost": 0.0,
      "standardHourUnit": 0.0
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/6d87056d-9809-11ee-0a83-0717000000a2",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
        "type": "productionstagecompletion",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#productionstagecompletion/edit?id=6d87056d-9809-11ee-0a83-0717000000a2"
      },
      "id": "6d87056d-9809-11ee-0a83-0717000000a2",
      "accountId": "a67c68a3-95dd-11ee-0a83-071a00000002",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a7354b1a-95dd-11ee-0a81-07230000004d",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=a7354b1a-95dd-11ee-0a81-07230000004d"
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
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/metadata",
          "type": "productionstage",
          "mediaType": "application/json"
        }
      },
      "standardHourCost": 0.0,
      "enableHourAccounting": false,
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
      "labourUnitCost": 0.0,
      "standardHourUnit": 0.0
    }
  ]
}
```

### Создать Выполнение этапа производства
Запрос на создание нового Выполнения этапа производства. 
Условие создания Выполненного этапа - наличие начала производства у Производственного задания для которого создается Выполненный этап. Подробнее можно прочитать [тут](../#dokumenty-proizwodstwennoe-zadanie).
При создании происходит автоматическое изменение даты старта производства, если дата старта производства позже даты выполнения этапа.
Обязательные для создания поля:

+ **productionStage** - Ссылка на Производственный этап в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **productionVolume** - Объем производства 

Создание Выполнение этапа с серийными номерами на текущий момент не поддерживается.

> Пример создания нового Выполнения этапа производства с телом запроса, содержащим только необходимые поля.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "productionStage": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/3130f7df-660f-11ee-c0a8-100c00000139",
                "type": "productionstage",
                "mediaType": "application/json"
              }
            },
            "productionVolume" : 5
          } 
'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Выполнения этапа производства.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/01ff6808-95de-11ee-0a81-072300000136",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
    "type": "productionstagecompletion",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#productionstagecompletion/edit?id=01ff6808-95de-11ee-0a81-072300000136"
  },
  "id": "01ff6808-95de-11ee-0a81-072300000136",
  "accountId": "a67c68a3-95dd-11ee-0a83-071a00000002",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a7354b1a-95dd-11ee-0a81-07230000004d",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=a7354b1a-95dd-11ee-0a81-07230000004d"
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
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/metadata",
      "type": "productionstage",
      "mediaType": "application/json"
    }
  },
  "standardHourCost": 0.0,
  "enableHourAccounting": false,
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
  "labourUnitCost": 20.0,
  "standardHourUnit": 30.0
}
```

> Пример создания нового Выполнения этапа производства с более насыщенным телом запроса.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion"
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
            "performer": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a7354b1a-95dd-11ee-0a81-07230000004d",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "type": "employee",
                "mediaType": "application/json",
                "uuidHref": "https://online-api-4.testms-test.lognex.ru/app/#employee/edit?id=a7354b1a-95dd-11ee-0a81-07230000004d"
              }
            },      
            "productionStage": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/3130f7df-660f-11ee-c0a8-100c00000139",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/metadata",
                "type": "productionstage",
                "mediaType": "application/json"
              }
            },
            "productionVolume": 5,
            "processingUnitCost": 10.0,
            "labourUnitCost": 20.0,
            "standardHourUnit": 30.0
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Выполнения этапа производства.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/01ff6808-95de-11ee-0a81-072300000136",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
    "type": "productionstagecompletion",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#productionstagecompletion/edit?id=01ff6808-95de-11ee-0a81-072300000136"
  },
  "id": "01ff6808-95de-11ee-0a81-072300000136",
  "accountId": "a67c68a3-95dd-11ee-0a83-071a00000002",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a7354b1a-95dd-11ee-0a81-07230000004d",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=a7354b1a-95dd-11ee-0a81-07230000004d"
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
  "name": "000034",
  "externalCode": "EnuNEmG2jyUF4t9tgPQk72",
  "moment": "2016-04-19 13:50:24",
  "created": "2023-12-08 18:25:24.386",
  "performer": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a7354b1a-95dd-11ee-0a81-07230000004d",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online-api-4.testms-test.lognex.ru/app/#employee/edit?id=a7354b1a-95dd-11ee-0a81-07230000004d"
    }
  },
  "productionStage": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/3130f7df-660f-11ee-c0a8-100c00000139",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/metadata",
      "type": "productionstage",
      "mediaType": "application/json"
    }
  },
  "standardHourCost": 0.0,
  "enableHourAccounting": false,
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
  "labourUnitCost": 20.0,
  "standardHourUnit": 30.0
}
```

### Массовое создание и обновление Выполнений этапов производства
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Выполнений этапов производства.
В теле запроса нужно передать массив, содержащий JSON представления Выполнений этапов производства, которые вы хотите создать или обновить.
Обновляемые Выполненных этапов производства должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Выполнений этапов производства

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion"
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
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/metadata",
                    "type": "productionstage",
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
                "uuidHref": "https://online.moysklad.ru/app/#productionstagecompletion/edit?id=01ff6808-95de-11ee-0a81-072300000136"
              },
              "name": "000034",
              "productionVolume": 5
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Выполнений этапов производства.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/01ff6808-95de-11ee-0a81-072300000136",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
      "type": "productionstagecompletion",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#productionstagecompletion/edit?id=01ff6808-95de-11ee-0a81-072300000136"
    },
    "id": "01ff6808-95de-11ee-0a81-072300000136",
    "accountId": "a67c68a3-95dd-11ee-0a83-071a00000002",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a7354b1a-95dd-11ee-0a81-07230000004d",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=a7354b1a-95dd-11ee-0a81-07230000004d"
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
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/metadata",
        "type": "productionstage",
        "mediaType": "application/json"
      }
    },
    "standardHourCost": 0.0,
    "enableHourAccounting": false,
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
    "labourUnitCost": 0.0,
    "standardHourUnit": 0.0
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/19b3bb62-9807-11ee-0a81-07230000030e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
      "type": "productionstagecompletion",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#productionstagecompletion/edit?id=19b3bb62-9807-11ee-0a81-07230000030e"
    },
    "id": "19b3bb62-9807-11ee-0a81-07230000030e",
    "accountId": "a67c68a3-95dd-11ee-0a83-071a00000002",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a7354b1a-95dd-11ee-0a81-07230000004d",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=a7354b1a-95dd-11ee-0a81-07230000004d"
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
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/metadata",
        "type": "productionstage",
        "mediaType": "application/json"
      }
    },
    "standardHourCost": 0.0,
    "enableHourAccounting": false,
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
    "labourUnitCost": 0.0,
    "standardHourUnit": 0.0
  }
]
```

### Удалить Выполнение этапа производства

**Параметры**

| Параметр | Описание                                                                                             |
| :------- |:-----------------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Выполнения этапа производства |

> Запрос на удаление Выполнения этапа производства с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление Выполнения этапа производства.

### Массовое удаление Выполнений этапов производства

В теле запроса нужно передать массив, содержащий JSON метаданных Выполнений этапов производства, которые вы хотите удалить.

Удаление происходит в указанном порядке. Поэтому выполнения последнего этапа должно располагаться до выполнений этапов, от которых оно зависит.


> Запрос на массовое удаление Выполнений этапов производства.

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
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/01ff6808-95de-11ee-0a81-072300000147",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
                "type": "productionstagecompletion",
                "mediaType": "application/json",
              }
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Выполнений этапов производства.

```json
[
  {
    "info":"Сущность 'productionstagecompletion' с UUID: 01ff6808-95de-11ee-0a81-072300000136 успешно удалена"
  },
  {
    "info":"Сущность 'productionstagecompletion' с UUID: 01ff6808-95de-11ee-0a81-072300000147 успешно удалена"
  }
]
```

### Получить Выполнение этапа производства

**Параметры**

| Параметр | Описание                                                                                              |
| :------- |:------------------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Выполнения этапа производства. |

> Запрос на получение отдельного Выполнения этапа производства с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Выполнения этапа производства.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
    "type": "productionstagecompletion",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#productionstagecompletion/edit?id=7944ef04-f831-11e5-7a69-971500188b19"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b19",
  "accountId": "a67c68a3-95dd-11ee-0a83-071a00000002",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a7354b1a-95dd-11ee-0a81-07230000004d",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=a7354b1a-95dd-11ee-0a81-07230000004d"
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
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/metadata",
      "type": "productionstage",
      "mediaType": "application/json"
    }
  },
  "standardHourCost": 0.0,
  "enableHourAccounting": false,
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
  "labourUnitCost": 0.0,
  "standardHourUnit": 0.0
}
```

### Изменить Выполнение этапа производства
Запрос на обновление Выполнения этапа производства с указанным id.
При обновлении происходит автоматическое изменение даты старта производства, если дата старта производства позже даты выполнения этапа.
В теле запроса необходимо указать те поля, которые необходимо изменить у Выполнения этапа производства, кроме тех,
что помечены `Только для чтения` в описании атрибутов Выполнения этапа производства.

**Параметры**

| Параметр | Описание                                                                                              |
| :------- |:------------------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Выполнения этапа производства. |

> Пример запроса на обновление отдельного Выполнения этапа производства.

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
Успешный запрос. Результат - JSON представление обновленного Выполнения этапа производства.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/metadata",
    "type": "productionstagecompletion",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#productionstagecompletion/edit?id=7944ef04-f831-11e5-7a69-971500188b19"
  },
  "id": "01ff6808-95de-11ee-0a81-072300000136",
  "accountId": "a67c68a3-95dd-11ee-0a83-071a00000002",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a7354b1a-95dd-11ee-0a81-07230000004d",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=a7354b1a-95dd-11ee-0a81-07230000004d"
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
  "name": "000034",
  "externalCode": "EnuNEmG2jyUF4t9tgPQk72",
  "moment": "2023-12-08 18:25:00.000",
  "created": "2023-12-08 18:25:24.386",
  "productionStage": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/d15ec2e9-95dd-11ee-0a81-07230000011c",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/metadata",
      "type": "productionstage",
      "mediaType": "application/json"
    }
  },
  "standardHourCost": 0.0,
  "enableHourAccounting": false,
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
  "labourUnitCost": 0.0,
  "standardHourUnit": 0.0
}
```

#### Материалы Выполнения этапа производства
Материалы Выполнения этапа производства - это товары, модификации и серии, затраченные при выполнении этапа производства.

Объект материала Выполнения этапа производства содержит следующие поля:

| Название             | Тип                                                      | Описание                                                                                                                                                                                                                                                      |
| -------------------- |:---------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**        | UUID                                                     | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                          |
| **assortment**       | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)| Метаданные товара/модификации/серии, которую представляет собой позиция<br>`+Обязательное при ответе` `+Expand`                                                                                                                                               |
| **consumedQuantity** | Float                                                    | Количество товаров/модификаций данного вида в позиции. Если позиция - товар, у которого включен учет по серийным номерам, то значение в этом поле всегда будет равно количеству серийных номеров для данной позиции в документе<br>`+Обязательное при ответе` |
| **id**               | UUID                                                     | ID позиции<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                                 |
| **things**           | Array(String)                                            | Серийные номера. Значение данного атрибута игнорируется, если товар позиции не находится на серийном учете. В ином случае количество товаров в позиции будет равно количеству серийных номеров, переданных в значении атрибута                                |

#### Продукты Выполнения этапа производства
Продукты Выполнения этапа производства - это товары, модификации и серии, созданные при выполнении этапа производства.

Объект продукта Выполнения этапа производства содержит следующие поля:

| Название             | Тип                                                      | Описание                                                                                                                                                                                                                                                      |
| -------------------- |:---------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**        | UUID                                                     | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                          |
| **assortment**       | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)| Метаданные товара/модификации/серии, которую представляет собой позиция<br>`+Обязательное при ответе` `+Expand`                                                                                                                                               |
| **id**               | UUID                                                     | ID позиции<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                                 |
| **producedQuantity** | Float                                                    | Количество товаров/модификаций данного вида в позиции. Если позиция - товар, у которого включен учет по серийным номерам, то значение в этом поле всегда будет равно количеству серийных номеров для данной позиции в документе<br>`+Обязательное при ответе` |
| **things**           | Array(String)                                            | Серийные номера. Значение данного атрибута игнорируется, если товар позиции не находится на серийном учете. В ином случае количество товаров в позиции будет равно количеству серийных номеров, переданных в значении атрибута                                |

### Материалы выполнения этапа производства
Отдельный ресурс для управления Материалами выполнения этапа производства.

### Получить Материалы выполнения этапа производства
Запрос на получение списка всех Материалов выполнения этапа производства.

| Название    | Тип                                                       | Описание                                                                           |
| ----------- | :-------------------------------------------------------- |:-----------------------------------------------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче                                                                |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос                                        |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Материалы выполнения этапа производства |

**Параметры**

| Параметр   | Описание                                                                                                                              |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Выполнения этапа производства                                  |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000` |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей                                                 |

> Запрос на получение списка всех Материалов данного Выполнения этапа производства

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/materials"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка продуктов Выполнения этапа производства.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/materials/",
    "type": "productionstagecompletionmaterial",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/materials/34f6344f-015e-11e6-9464-e4de0000006c",
        "type": "productionstagecompletionmaterial",
        "mediaType": "application/json"
      },
      "id": "34f6344f-015e-11e6-9464-e4de0000006c",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "consumedQuantity": 5.0,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/9656117b-b717-11ec-0с80-0bba0006dcde",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=96568199-b716-11ec-0a80-0bba0006dcdc"
        }
      }
    }
  ]
}
```

### Добавить Материал выполнения этапа производства
Запрос на добавление Материала к выполненному этапу производства.
Для товаров с серийным учётом, поле `consumedQuantity` автоматически изменяется на количество переданных в поле `things` серийных номеров.

Для успешного создания необходимо в теле запроса указать следующие поля:

+ **assortment** - Ссылка на товар/модификацию/серию, которую представляет собой материал.
+ **consumedQuantity** - количество товара (игнорируется, если передано поле `things`)
+ **things** - серийные номера (только для товаров с серийным учетом)

**Параметры**

| Параметр | Описание                                                                                             |
| :------- |:-----------------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Выполнения этапа производства |

> Пример запроса на добавление Материала Выполнения этапа производства.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/materials"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "consumedQuantity": 2,
            "assortment": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/9656117b-b717-11ec-0с80-0bba0006dcde",
              }
            }
          }
      '  
```
> Response 200 (application/json)
Успешный запрос. Результат - JSON представление добавленного материала

```json
    {
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/materials/34f6344f-015e-11e6-9464-e4de0000006c",
    "type": "productionstagecompletionmaterial",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "consumedQuantity": 2.0,
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/9656117b-b717-11ec-0с80-0bba0006dcde",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=96568199-b716-11ec-0a80-0bba0006dcdc"
    }
  }
}
```

> Пример запроса на добавление материала Выполнения этапа производства с учётом серийных номеров.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/materials"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "assortment": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/9656117b-b717-11ec-0с80-0bba0006dcde",
              }
            },
            "things": ["F564X056", "F564X057"]
          }
      '  
```
> Response 200 (application/json)
Успешный запрос. Результат - JSON представление добавленного материала

```json
    {
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/materials/34f6344f-015e-11e6-9464-e4de0000006c",
    "type": "productionstagecompletionmaterial",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "consumedQuantity": 2.0,
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/9656117b-b717-11ec-0с80-0bba0006dcde",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=96568199-b716-11ec-0a80-0bba0006dcdc"
    },
    "things": ["F564X056", "F564X057"]
  }
}
```

### Изменить Материал выполнения этапа производства
Запрос на обновление отдельного Материала выполнения этапа производства.
Для товаров с серийным учётом, поле `consumedQuantity` автоматически изменяется на количество переданных в поле `things` серийных номеров.

**Параметры**

| Параметр       | Описание                                                                                                       |
| :------------- |:---------------------------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Выполнения этапа производства           |
| **materialID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id Материала выполнения этапа производства |

> Пример запроса на обновление количества отдельного Материала выполнения этапа производства.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/materials/34f6344f-015e-11e6-9464-e4de0000006c"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "consumedQuantity": 3,
          }
      '  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного материала.

```json
    {
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/materials/34f6344f-015e-11e6-9464-e4de0000006c",
    "type": "productionstagecompletionmaterial",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "consumedQuantity": 3.0,
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/9656117b-b717-11ec-0с80-0bba0006dcde",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=96568199-b716-11ec-0a80-0bba0006dcdc"
    }
  }
}
```

> Пример запроса на обновление серийных номеров отдельного Материала выполнения этапа производства.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/materials/34f6344f-015e-11e6-9464-e4de0000006c"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "things": ["F564X056", "F564X057"]
          }
      '  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного продукта.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/products/34f6344f-015e-11e6-9464-e4de0000006c",
    "type": "productionstagecompletionresult",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "consumedQuantity": 2,
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/materials/9656117b-b717-11ec-0с80-0bba0006dcde",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/materials/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=96568199-b716-11ec-0a80-0bba0006dcdc"
    }
  },
  "things": ["F564X056", "F564X057"]
}
```

### Продукты выполнения этапа производства
Отдельный ресурс для управления Продуктами выполнения этапа производства.

### Получить Продукты выполнения этапа производства
Запрос на получение списка всех Продуктов выполнения этапа производства.

| Название    | Тип                                                       | Описание                                                                          |
| ----------- | :-------------------------------------------------------- |:----------------------------------------------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче                                                               |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос                                       |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Продукты выполнения этапа производства |

**Параметры**

| Параметр   | Описание                                                                                                                              |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Выполнения этапа производства                                  |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000` |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей                                                 |

> Запрос на получение списка всех Продуктов данного выполнения этапа производства

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/products/"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Продуктов выполнения этапа производства.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/products/",
    "type": "productionstagecompletionresult",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/products/34f6344f-015e-11e6-9464-e4de0000006c",
        "type": "productionstagecompletionresult",
        "mediaType": "application/json"
      },
      "id": "34f6344f-015e-11e6-9464-e4de0000006c",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "producedQuantity": 0.7,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/9656117b-b717-11ec-0с80-0bba0006dcde",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=96568199-b716-11ec-0a80-0bba0006dcdc"
        }
      }
    }
  ]
}
```

### Изменить Продукт выполнения этапа производства
Запрос на обновление отдельного Продукта выполнения этапа производства.
Изменять товар / модификацию нельзя, но можно изменить серию товара.
Для товаров с серийным учётом, поле `producedQuantity` автоматически изменяется на количество переданных в поле `things` серийных номеров.

**Параметры**

| Параметр      | Описание                                                                                                      |
| :------------ |:--------------------------------------------------------------------------------------------------------------|
| **id**        | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Выполнения этапа производства          |
| **productID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id Продукта выполнения этапа производства |

> Пример запроса на обновление количества отдельного Продукта выполнения этапа производства.

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
Успешный запрос. Результат - JSON представление обновленного Продукта выполнения этапа производства.

```json
    {
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/products/34f6344f-015e-11e6-9464-e4de0000006c",
    "type": "productionstagecompletionresult",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "producedQuantity": 2.7,
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/9656117b-b717-11ec-0с80-0bba0006dcde",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=96568199-b716-11ec-0a80-0bba0006dcdc"
    }
  }
}
```

> Пример запроса на обновление серийных номеров отдельного Продукта выполнения этапа производства.

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
Успешный запрос. Результат - JSON представление обновленного Продукта выполнения этапа производства.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/products/34f6344f-015e-11e6-9464-e4de0000006c",
    "type": "productionstagecompletionresult",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "producedQuantity": 2,
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/9656117b-b717-11ec-0с80-0bba0006dcde",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=96568199-b716-11ec-0a80-0bba0006dcdc"
    }
  },
  "things": ["F564X056", "F564X057"]
}
```
