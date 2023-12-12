## Производственное задание
### Производственное заданиеПроизводственное задание

Средствами JSON API можно обновлять сведения о Производственных заданиях, запрашивать списки Производственных заданий
и сведения по отдельным Производственным заданиям. 
Позициями Производственных заданий можно управлять как в составе отдельного Производственного задания, так и отдельно 
- с помощью специальных ресурсов для управления позициями Производственных заданий. Кодом сущности для Производственных 
заданий в составе JSON API является ключевое слово **productiontask**. 
Больше о Производстве и Производственном задании и работе с ними в основном интерфейсе вы можете прочитать в нашей 
службе поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/16929256771857-%D0%9F%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5).

#### Атрибуты сущности

| Название                  | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                                      |
|---------------------------|:----------------------------------------------------------| :------------------------------------------------------------------------------------------------------------------------------------------------ |:----------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**             | UUID                                                      | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                          |
| **applicable**            | Boolean                                                   | `=` `!=`                                                                                                                                          | Отметка о проведении<br>`+Обязательное при ответе`                                                                                            |
| **attributes**            | Array(Object)                                             | [Операторы доп. полей](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-fil-traciq-po-dopolnitel-nym-polqm) | Коллекция метаданных доп. полей. [Поля объекта](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)<br>`                  |
| **code**                  | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Код Производственного задания                                                                                                                 |
| **created**               | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата создания<br>`+Обязательное при ответе` `+Только для чтения`                                                                              |
| **deleted**               | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего удаления Производственного задания<br>`+Только для чтения`                                                                  |
| **deliveryPlannedMoment** | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Планируемая дата выполнения                                                                                                                   |
| **description**           | String(4096)                                              | `=` `!=` `~` `~=` `=~`                                                                                                                            | Комментарий Производственного задания                                                                                                         |
| **externalCode**          | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код Производственного задания<br>`+Обязательное при ответе`                                                                           |
| **files**                 | MetaArray                                                 |                                                                                                                                                   | Метаданные массива [Файлов](../dictionaries/#suschnosti-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand` |
| **group**                 | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                      |
| **id**                    | UUID                                                      | `=` `!=`                                                                                                                                          | ID Производственного задания<br>`+Обязательное при ответе` `+Только для чтения`                                                               |
| **materialStore**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные склада материалов<br>`+Expand`                                                                                                     |
| **meta**                  | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные Производственного задания<br>`+Обязательное при ответе`                                                                            |
| **moment**                | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата документа<br>`+Обязательное при ответе`                                                                                                  |
| **name**                  | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование Производственного задания<br>`+Обязательное при ответе`                                                                          |
| **organization**          | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                          |
| **owner**                 | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Expand`                                                                                                             |
| **printed**               | Boolean                                                   | `=` `!=`                                                                                                                                          | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                      |
| **productionRows**        | MetaArray                                                 |                                                                                                                                                   | Метаданные позиций Производственного задания<br>`+Обязательное при ответе`                                                                    |
| **productionEnd**         | DateTime                                                  |                                                                                                                                                   | Дата окончания производства<br>                                                                                                               |
| **productionStart**       | DateTime                                                  |                                                                                                                                                   | Дата начала производства<br>                                                                                                                  |
| **products**              | MetaArray                                                 |                                                                                                                                                   | Метаданные производимой продукции<br>`+Обязательное при ответе`                                                                               |
| **productStore**          | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные склада продукции<br>`+Expand`                                                                                                      |
| **project**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные проекта<br>`+Expand`                                                                                                               |
| **published**             | Boolean                                                   | `=` `!=`                                                                                                                                          | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                    |
| **rate**                  | Object                                                    |                                                                                                                                                   | Валюта. [Подробнее тут](../documents/#dokumenty-obschie-swedeniq-valuta-w-dokumentah)<br>`+Обязательное при ответе`                           |
| **shared**                | Boolean                                                   | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе`                                                                                                    |
| **state**                 | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные статуса Производственного ряда<br>`+Expand`                                                                                        |
| **syncId**                | UUID                                                      | `=` `!=`                                                                                                                                          | ID синхронизации. После заполнения недоступен для изменения                                                                                   |
| **updated**               | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления Производственного задания<br>`+Обязательное при ответе`                                                          |

#### Связи с другими документами

| Название           | Описание                                                                                                                |
|--------------------|:------------------------------------------------------------------------------------------------------------------------|
| **purchaseOrders** | Массив ссылок на связанные заказы поставщикам в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **customerOrders** | Массив ссылок на связанные заказы покупателя в формате [Метаданных](../#dokumenty-zakaz-pokupatelq)           |
| **moves**          | Массив ссылок на связанные перемещния в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)         |

#### Позиции Производственного задания
Позиции Производственного задания - это список Производственных рядов, сформированный на основе списка [Техкарт](../dictionaries/#suschnosti-tehkarta).
Объект позиции Производственного задания содержит следующие поля:

| Название               | Тип                                                      | Описание                                                                                                                                                                                                                                                                                     |
| -----------------------|:---------------------------------------------------------|:-----------------------------------------------------------------------------------------|
| **accountId**          | UUID                                                     | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                     |
| **id**                 | UUID                                                     | ID позиции<br>`+Обязательное при ответе` `+Только для чтения`                            |
| **productionVolume**   | Float                                                    | Объем производства.<br>`+Обязательное при ответе`                                        |
| **processingPlan**     | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)| Метаданные [Техкарты](../dictionaries/#suschnosti-tehkarta)<br>`+Обязательное при ответе`|

С позициями можно работать с помощью специальных ресурсов для управления позициями Производственных заданий,
а также в составе отдельного Производственного задания. При работе в составе отдельного Производственного задания,
вы можете отправлять запросы на создание отдельного Производственного задания с включенным в тело запроса
массивом позиций. Если количество позиций превышает максимально допустимое, то для
дальнейшего пополнения позиций нужно будет работать со специальным ресурсом "Позиции Производственного задания". 
Максимально допустимое число позиций у производственного задания - 200.
Также, при работе в составе отдельного Производственного задания, можно отправлять запросы на обновление списка позиций
с включенным в тело запроса массивом позиций. При этом важно помнить, что коллекция позиций будет
восприниматься как "все позиции Производственного задания" и полностью заменит уже существующую коллекцию при обновлении объекта - лишние
позиции будут удалены, новые добавлены, существующие - изменены.

О работе с доп. полями Производственного ряда можно прочитать [здесь](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)

### Получить список Производственных заданий
Запрос всех Производственных заданий на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                             |
| ----------- | :-------------------------------------------------------- |:---------------------------------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                                 |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                         |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Производственные задания. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |

> Получить список Производственных заданий

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/productiontask"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Производственных заданий.

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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask",
        "type": "productiontask",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
    },
    "rows": [
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/6a97c408-98d8-11ee-0a81-05c700000a3a",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/metadata",
                "type": "productiontask",
                "mediaType": "application/json",
                "uuidHref": "https://api.moysklad.ru/app/#productiontask/edit?id=6a97c408-98d8-11ee-0a81-05c700000a3a"
            },
            "id": "6a97c408-98d8-11ee-0a81-05c700000a3a",
            "accountId": "042cf74c-9358-11ee-0a80-09e700000010",
            "owner": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/04a31ac9-9358-11ee-0a81-05c7000007a0",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                    "type": "employee",
                    "mediaType": "application/json",
                    "uuidHref": "https://api.moysklad.ru/app/#employee/edit?id=04a31ac9-9358-11ee-0a81-05c7000007a0"
                }
            },
            "shared": false,
            "group": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/042ec4d3-9358-11ee-0a80-09e700000011",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
                    "type": "group",
                    "mediaType": "application/json"
                }
            },
            "updated": "2023-12-12 13:22:56.309",
            "name": "00001",
            "externalCode": "KIlfW66-jlPlvD0apgZ6J3",
            "moment": "2023-12-12 13:20:00.000",
            "applicable": true,
            "materialsStore": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                    "type": "store",
                    "mediaType": "application/json",
                    "uuidHref": "https://api.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
                }
            },
            "productsStore": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                    "type": "store",
                    "mediaType": "application/json",
                    "uuidHref": "https://api.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
                }
            },
            "organization": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/04bda623-9358-11ee-0a81-05c7000007e5",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                    "type": "organization",
                    "mediaType": "application/json",
                    "uuidHref": "https://api.moysklad.ru/app/#mycompany/edit?id=04bda623-9358-11ee-0a81-05c7000007e5"
                }
            },
            "created": "2023-12-12 13:22:56.375",
            "printed": false,
            "published": false,
            "files": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/6a97c408-98d8-11ee-0a81-05c700000a3a/files",
                    "type": "files",
                    "mediaType": "application/json",
                    "size": 0,
                    "limit": 1000,
                    "offset": 0
                }
            },
            "productionRows": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/6a97c408-98d8-11ee-0a81-05c700000a3a/productionrows",
                    "type": "productionrow",
                    "mediaType": "application/json",
                    "size": 1,
                    "limit": 1000,
                    "offset": 0
                }
            },
            "products": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/6a97c408-98d8-11ee-0a81-05c700000a3a/products",
                    "type": "productiontaskresult",
                    "mediaType": "application/json",
                    "size": 1,
                    "limit": 1000,
                    "offset": 0
                }
            },
            "awaiting": false,
            "reserve": false
        }
    ]
}
```

### Создать Производственное задание
Запрос на создание нового Производственного задания.
Обязательные для создания поля:

| Параметр                       | Описание                                                                                        |
| ------------------------------ |:------------------------------------------------------------------------------------------------|
| **organization**               | Ссылка на ваше юрлицо в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **materialStore**              | Метаданные склада материалов                                                                    |
| **productStore**               | Метаданные склада продукции                                                                     |

> Пример создания нового Производственного задания с телом запроса, содержащим только необходимые поля.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/productiontask"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "materialsStore": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                    "type": "store",
                    "mediaType": "application/json",
                    "uuidHref": "https://api.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
                }
            },
            "productsStore": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                    "type": "store",
                    "mediaType": "application/json",
                    "uuidHref": "https://api.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
                }
            },
            "organization": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/04bda623-9358-11ee-0a81-05c7000007e5",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                    "type": "organization",
                    "mediaType": "application/json",
                    "uuidHref": "https://api.moysklad.ru/app/#mycompany/edit?id=04bda623-9358-11ee-0a81-05c7000007e5"
                }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Производственого задания.


```json
{
    "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/ccb6ea2e-98da-11ee-0a83-0045000025c3",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/metadata",
        "type": "productiontask",
        "mediaType": "application/json",
        "uuidHref": "https://api.moysklad.ru/app/#productiontask/edit?id=ccb6ea2e-98da-11ee-0a83-0045000025c3"
    },
    "id": "ccb6ea2e-98da-11ee-0a83-0045000025c3",
    "accountId": "042cf74c-9358-11ee-0a80-09e700000010",
    "owner": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/04a31ac9-9358-11ee-0a81-05c7000007a0",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json",
            "uuidHref": "https://api.moysklad.ru/app/#employee/edit?id=04a31ac9-9358-11ee-0a81-05c7000007a0"
        }
    },
    "shared": false,
    "group": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/042ec4d3-9358-11ee-0a80-09e700000011",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
            "type": "group",
            "mediaType": "application/json"
        }
    },
    "updated": "2023-12-12 13:39:59.923",
    "name": "00002",
    "externalCode": "2REltNG4iz6mP9qvwba6x3",
    "moment": "2023-12-12 13:39:00.000",
    "applicable": true,
    "materialsStore": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json",
            "uuidHref": "https://api.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
        }
    },
    "productsStore": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json",
            "uuidHref": "https://api.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
        }
    },
    "organization": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/04bda623-9358-11ee-0a81-05c7000007e5",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
            "type": "organization",
            "mediaType": "application/json",
            "uuidHref": "https://api.moysklad.ru/app/#mycompany/edit?id=04bda623-9358-11ee-0a81-05c7000007e5"
        }
    },
    "created": "2023-12-12 13:39:59.951",
    "printed": false,
    "published": false,
    "files": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/ccb6ea2e-98da-11ee-0a83-0045000025c3/files",
            "type": "files",
            "mediaType": "application/json",
            "size": 0,
            "limit": 1000,
            "offset": 0
        }
    },
    "productionRows": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/ccb6ea2e-98da-11ee-0a83-0045000025c3/productionrows",
            "type": "productionrow",
            "mediaType": "application/json",
            "size": 0,
            "limit": 1000,
            "offset": 0
        }
    },
    "products": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/ccb6ea2e-98da-11ee-0a83-0045000025c3/products",
            "type": "productiontaskresult",
            "mediaType": "application/json",
            "size": 0,
            "limit": 1000,
            "offset": 0
        }
    },
    "awaiting": false,
    "reserve": false
}
```

> Пример создания нового Производственного задания с более насыщенным телом запроса.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/productiontask"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "materialsStore": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                    "type": "store",
                    "mediaType": "application/json",
                    "uuidHref": "https://api.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
                }
            },
            "productsStore": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                    "type": "store",
                    "mediaType": "application/json",
                    "uuidHref": "https://api.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
                }
            },
            "organization": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/04bda623-9358-11ee-0a81-05c7000007e5",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                    "type": "organization",
                    "mediaType": "application/json",
                    "uuidHref": "https://api.moysklad.ru/app/#mycompany/edit?id=04bda623-9358-11ee-0a81-05c7000007e5"
                }
            },
            "applicable": true,
            "code": "test-code-123",
            "deliveryPlannedMoment": "2023-12-12 13:39:59.951",
            "description": "тестовое производственное задание",
            "externalCode": "954102345",
            "group": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/042ec4d3-9358-11ee-0a80-09e700000011",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
                    "type": "group",
                    "mediaType": "application/json"
                }
            },
            "moment": "2023-12-12 13:39:00.000",
            "name": "Тестовое Производственное здание",
            "owner": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/04a31ac9-9358-11ee-0a81-05c7000007a0",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                    "type": "employee",
                    "mediaType": "application/json",
                    "uuidHref": "https://api.moysklad.ru/app/#employee/edit?id=04a31ac9-9358-11ee-0a81-05c7000007a0"
                }
            },
            "shared": true,
            "awaiting": false,
            "reserve": false
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Производственного задания.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/ccfc90be-98e0-11ee-0a83-0045000025cb",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/metadata",
    "type": "productiontask",
    "mediaType": "application/json",
    "uuidHref": "https://api.moysklad.ru/app/#productiontask/edit?id=ccfc90be-98e0-11ee-0a83-0045000025cb"
  },
  "id": "ccfc90be-98e0-11ee-0a83-0045000025cb",
  "accountId": "042cf74c-9358-11ee-0a80-09e700000010",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/04a31ac9-9358-11ee-0a81-05c7000007a0",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://api.moysklad.ru/app/#employee/edit?id=04a31ac9-9358-11ee-0a81-05c7000007a0"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/042ec4d3-9358-11ee-0a80-09e700000011",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2023-12-12 14:22:57.374",
  "name": "Тестовое Производственное здание",
  "description": "тестовое производственное задание",
  "code": "test-code-123",
  "externalCode": "954102345",
  "moment": "2023-12-12 13:39:00.000",
  "applicable": true,
  "materialsStore": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json",
      "uuidHref": "https://api.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
    }
  },
  "productsStore": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json",
      "uuidHref": "https://api.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
    }
  },
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/04bda623-9358-11ee-0a81-05c7000007e5",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://api.moysklad.ru/app/#mycompany/edit?id=04bda623-9358-11ee-0a81-05c7000007e5"
    }
  },
  "created": "2023-12-12 14:22:57.403",
  "printed": false,
  "published": false,
  "files": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/ccfc90be-98e0-11ee-0a83-0045000025cb/files",
      "type": "files",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "deliveryPlannedMoment": "2023-12-12 13:39:00.000",
  "productionRows": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/ccfc90be-98e0-11ee-0a83-0045000025cb/productionrows",
      "type": "productionrow",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "products": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/ccfc90be-98e0-11ee-0a83-0045000025cb/products",
      "type": "productiontaskresult",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "awaiting": false,
  "reserve": false
}
```

> Пример запроса на создание Производственного задания с производственными рядами в теле запроса.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/productiontask"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "materialsStore": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                    "type": "store",
                    "mediaType": "application/json",
                    "uuidHref": "https://api.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
                }
            },
            "productsStore": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                    "type": "store",
                    "mediaType": "application/json",
                    "uuidHref": "https://api.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
                }
            },
            "organization": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/04bda623-9358-11ee-0a81-05c7000007e5",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                    "type": "organization",
                    "mediaType": "application/json",
                    "uuidHref": "https://api.moysklad.ru/app/#mycompany/edit?id=04bda623-9358-11ee-0a81-05c7000007e5"
                }
            },
            "applicable": true,
            "code": "test-code-123",
            "deliveryPlannedMoment": "2023-12-12 13:39:59.951",
            "description": "тестовое производственное задание",
            "externalCode": "954102345",
            "group": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/042ec4d3-9358-11ee-0a80-09e700000011",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
                    "type": "group",
                    "mediaType": "application/json"
                }
            },
            "productionRows": [
                {
                "processingPlan": {
                    "meta": {
                        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/5a6729bb-98d8-11ee-0a81-05c700000a34",
                        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
                        "type": "processingplan",
                        "mediaType": "application/json",
                        "uuidHref": "https://api.moysklad.ru/app/#processingplan/edit?id=5a6729bb-98d8-11ee-0a81-05c700000a34"
                    }
                },
                "productionVolume": 10.0
                }
            ],
            "moment": "2023-12-12 13:39:00.000",
            "owner": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/04a31ac9-9358-11ee-0a81-05c7000007a0",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                    "type": "employee",
                    "mediaType": "application/json",
                    "uuidHref": "https://api.moysklad.ru/app/#employee/edit?id=04a31ac9-9358-11ee-0a81-05c7000007a0"
                }
            },
            "shared": true,
            "awaiting": false,
            "reserve": false
          }' 
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Производственного задания.

```json
{
    "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/d1c9c512-98e5-11ee-0a83-0045000025cf",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/metadata",
        "type": "productiontask",
        "mediaType": "application/json",
        "uuidHref": "https://api.moysklad.ru/app/#productiontask/edit?id=d1c9c512-98e5-11ee-0a83-0045000025cf"
    },
    "id": "d1c9c512-98e5-11ee-0a83-0045000025cf",
    "accountId": "042cf74c-9358-11ee-0a80-09e700000010",
    "owner": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/04a31ac9-9358-11ee-0a81-05c7000007a0",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json",
            "uuidHref": "https://api.moysklad.ru/app/#employee/edit?id=04a31ac9-9358-11ee-0a81-05c7000007a0"
        }
    },
    "shared": true,
    "group": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/042ec4d3-9358-11ee-0a80-09e700000011",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
            "type": "group",
            "mediaType": "application/json"
        }
    },
    "updated": "2023-12-12 14:58:52.817",
    "name": "00003",
    "description": "тестовое производственное задание",
    "code": "test-code-123",
    "externalCode": "954102345",
    "moment": "2023-12-12 13:39:00.000",
    "applicable": true,
    "materialsStore": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json",
            "uuidHref": "https://api.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
        }
    },
    "productsStore": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json",
            "uuidHref": "https://api.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
        }
    },
    "organization": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/04bda623-9358-11ee-0a81-05c7000007e5",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
            "type": "organization",
            "mediaType": "application/json",
            "uuidHref": "https://api.moysklad.ru/app/#mycompany/edit?id=04bda623-9358-11ee-0a81-05c7000007e5"
        }
    },
    "created": "2023-12-12 14:58:52.898",
    "printed": false,
    "published": false,
    "files": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/d1c9c512-98e5-11ee-0a83-0045000025cf/files",
            "type": "files",
            "mediaType": "application/json",
            "size": 0,
            "limit": 1000,
            "offset": 0
        }
    },
    "deliveryPlannedMoment": "2023-12-12 13:39:00.000",
    "productionRows": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/d1c9c512-98e5-11ee-0a83-0045000025cf/productionrows",
            "type": "productionrow",
            "mediaType": "application/json",
            "size": 1,
            "limit": 1000,
            "offset": 0
        }
    },
    "products": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/d1c9c512-98e5-11ee-0a83-0045000025cf/products",
            "type": "productiontaskresult",
            "mediaType": "application/json",
            "size": 1,
            "limit": 1000,
            "offset": 0
        }
    },
    "awaiting": false,
    "reserve": false
}
```

### Массовое создание и обновление Производственных заданий
В теле запроса нужно передать массив, содержащий JSON представления Производственных заданий, которые вы хотите создать или обновить.
Обновляемые Производственные задания должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Производственных заданий.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/productiontask"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '[
            {
                "materialsStore": {
                    "meta": {
                        "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
                        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                        "type": "store",
                        "mediaType": "application/json",
                        "uuidHref": "https://api.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
                    }
                },
                "productsStore": {
                    "meta": {
                        "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
                        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                        "type": "store",
                        "mediaType": "application/json",
                        "uuidHref": "https://api.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
                    }
                },
                "organization": {
                    "meta": {
                        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/04bda623-9358-11ee-0a81-05c7000007e5",
                        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                        "type": "organization",
                        "mediaType": "application/json",
                        "uuidHref": "https://api.moysklad.ru/app/#mycompany/edit?id=04bda623-9358-11ee-0a81-05c7000007e5"
                    }
                },
                "applicable": true,
                "code": "test-code-123",
                "deliveryPlannedMoment": "2023-12-12 13:39:59.951",
                "description": "тестовое производственное задание",
                "externalCode": "954102345",
                "group": {
                    "meta": {
                        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/042ec4d3-9358-11ee-0a80-09e700000011",
                        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
                        "type": "group",
                        "mediaType": "application/json"
                    }
                },
                "productionRows": [
                    {
                        "processingPlan": {
                            "meta": {
                                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/5a6729bb-98d8-11ee-0a81-05c700000a34",
                                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
                                "type": "processingplan",
                                "mediaType": "application/json",
                                "uuidHref": "https://api.moysklad.ru/app/#processingplan/edit?id=5a6729bb-98d8-11ee-0a81-05c700000a34"
                            }
                        },
                        "productionVolume": 10.0
                    }
                ],
                "moment": "2023-12-12 13:39:00.000",
                "owner": {
                    "meta": {
                        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/04a31ac9-9358-11ee-0a81-05c7000007a0",
                        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                        "type": "employee",
                        "mediaType": "application/json",
                        "uuidHref": "https://api.moysklad.ru/app/#employee/edit?id=04a31ac9-9358-11ee-0a81-05c7000007a0"
                    }
                },
                "shared": true,
                "awaiting": false,
                "reserve": false
            },
            {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/d1c9c512-98e5-11ee-0a83-0045000025cf",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/metadata",
                    "type": "productiontask",
                    "mediaType": "application/json",
                    "uuidHref": "https://api.moysklad.ru/app/#productiontask/edit?id=d1c9c512-98e5-11ee-0a83-0045000025cf"
                },
                "name": "Изменённое Производственное задание"
            }
          ]'
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Производственных заданий.

```json
[
    {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/f400f8a3-98e7-11ee-0a83-0045000025d9",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/metadata",
            "type": "productiontask",
            "mediaType": "application/json",
            "uuidHref": "https://api.moysklad.ru/app/#productiontask/edit?id=f400f8a3-98e7-11ee-0a83-0045000025d9"
        },
        "id": "f400f8a3-98e7-11ee-0a83-0045000025d9",
        "accountId": "042cf74c-9358-11ee-0a80-09e700000010",
        "owner": {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/04a31ac9-9358-11ee-0a81-05c7000007a0",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "type": "employee",
                "mediaType": "application/json",
                "uuidHref": "https://api.moysklad.ru/app/#employee/edit?id=04a31ac9-9358-11ee-0a81-05c7000007a0"
            }
        },
        "shared": true,
        "group": {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/042ec4d3-9358-11ee-0a80-09e700000011",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
                "type": "group",
                "mediaType": "application/json"
            }
        },
        "updated": "2023-12-12 15:14:09.210",
        "name": "00004",
        "description": "тестовое производственное задание",
        "code": "test-code-123",
        "externalCode": "954102345",
        "moment": "2023-12-12 13:39:00.000",
        "applicable": true,
        "materialsStore": {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json",
                "uuidHref": "https://api.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
            }
        },
        "productsStore": {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json",
                "uuidHref": "https://api.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
            }
        },
        "organization": {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/04bda623-9358-11ee-0a81-05c7000007e5",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json",
                "uuidHref": "https://api.moysklad.ru/app/#mycompany/edit?id=04bda623-9358-11ee-0a81-05c7000007e5"
            }
        },
        "created": "2023-12-12 15:14:09.294",
        "printed": false,
        "published": false,
        "files": {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/f400f8a3-98e7-11ee-0a83-0045000025d9/files",
                "type": "files",
                "mediaType": "application/json",
                "size": 0,
                "limit": 1000,
                "offset": 0
            }
        },
        "deliveryPlannedMoment": "2023-12-12 13:39:00.000",
        "productionRows": {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/f400f8a3-98e7-11ee-0a83-0045000025d9/productionrows",
                "type": "productionrow",
                "mediaType": "application/json",
                "size": 1,
                "limit": 1000,
                "offset": 0
            }
        },
        "products": {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/f400f8a3-98e7-11ee-0a83-0045000025d9/products",
                "type": "productiontaskresult",
                "mediaType": "application/json",
                "size": 1,
                "limit": 1000,
                "offset": 0
            }
        },
        "awaiting": false,
        "reserve": false
    },
    {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/d1c9c512-98e5-11ee-0a83-0045000025cf",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/metadata",
            "type": "productiontask",
            "mediaType": "application/json",
            "uuidHref": "https://api.moysklad.ru/app/#productiontask/edit?id=d1c9c512-98e5-11ee-0a83-0045000025cf"
        },
        "id": "d1c9c512-98e5-11ee-0a83-0045000025cf",
        "accountId": "042cf74c-9358-11ee-0a80-09e700000010",
        "owner": {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/04a31ac9-9358-11ee-0a81-05c7000007a0",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "type": "employee",
                "mediaType": "application/json",
                "uuidHref": "https://api.moysklad.ru/app/#employee/edit?id=04a31ac9-9358-11ee-0a81-05c7000007a0"
            }
        },
        "shared": true,
        "group": {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/042ec4d3-9358-11ee-0a80-09e700000011",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
                "type": "group",
                "mediaType": "application/json"
            }
        },
        "updated": "2023-12-12 15:14:09.688",
        "name": "Изменённое Производственное задание",
        "description": "тестовое производственное задание",
        "code": "test-code-123",
        "externalCode": "954102345",
        "moment": "2023-12-12 13:39:00.000",
        "applicable": true,
        "materialsStore": {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json",
                "uuidHref": "https://api.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
            }
        },
        "productsStore": {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json",
                "uuidHref": "https://api.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
            }
        },
        "organization": {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/04bda623-9358-11ee-0a81-05c7000007e5",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json",
                "uuidHref": "https://api.moysklad.ru/app/#mycompany/edit?id=04bda623-9358-11ee-0a81-05c7000007e5"
            }
        },
        "created": "2023-12-12 14:58:52.898",
        "printed": false,
        "published": false,
        "files": {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/d1c9c512-98e5-11ee-0a83-0045000025cf/files",
                "type": "files",
                "mediaType": "application/json",
                "size": 0,
                "limit": 1000,
                "offset": 0
            }
        },
        "deliveryPlannedMoment": "2023-12-12 13:39:00.000",
        "productionRows": {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/d1c9c512-98e5-11ee-0a83-0045000025cf/productionrows",
                "type": "productionrow",
                "mediaType": "application/json",
                "size": 1,
                "limit": 1000,
                "offset": 0
            }
        },
        "products": {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/d1c9c512-98e5-11ee-0a83-0045000025cf/products",
                "type": "productiontaskresult",
                "mediaType": "application/json",
                "size": 1,
                "limit": 1000,
                "offset": 0
            }
        },
        "awaiting": false,
        "reserve": false
    }
]
```
### Удалить Производственное задание

**Параметры**

| Параметр | Описание                                                                                          |
| :------- |:--------------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: f400f8a3-98e7-11ee-0a83-0045000025d9* id Производственного задания. |

> Запрос на удаление Производственного задания с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/f400f8a3-98e7-11ee-0a83-0045000025d9"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление Производственного задания.



!!! остановился здесь






#### Позиции Заказа на производство
Позиции Заказа - это список товаров/модификаций, соответствующих материалам техкарты.
Объект позиции Заказа содержит следующие поля:

| Название       | Тип                                                      | Описание                                                                                                                                                                                                                                                 |
| -------------- |:---------------------------------------------------------| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **accountId**  | UUID                                                     | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                     |
| **assortment** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)| Метаданные товара/услуги/серии/модификации, которую представляет собой позиция<br>`+Обязательное при ответе` `+Expand`                                                                                                                                   |
| **id**         | UUID                                                     | ID позиции<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                            |
| **pack**       | Object                                                   | Упаковка Товара. [Подробнее тут](../dictionaries/#suschnosti-towar-towary-atributy-wlozhennyh-suschnostej-upakowki-towara)                                                                                                                               |
| **quantity**   | Float                                                    | Количество товаров/услуг данного вида в позиции. Если позиция - товар, у которого включен учет по серийным номерам, то значение в этом поле всегда будет равно количеству серийных номеров для данной позиции в документе.<br>`+Обязательное при ответе` |
| **reserve**    | Float                                                    | Резерв данной позиции<br>`+Обязательное при ответе`                                                                                                                                                                                                      |

С позициями можно работать с помощью специальных ресурсов для управления позициями Заказа,
а также в составе отдельного Заказа на производство. При работе в составе отдельного Заказа на производство,
вы можете отправлять запросы на создание отдельного Заказа на производство с включенным в тело запроса
массивом позиций Заказа.
Также, при работе в составе отдельного Заказа на производство, можно отправлять запросы на обновление списка позиций
с включенным в тело запроса массивом позиций Заказа. Позиции с новыми товарами не могут быть добавлены в Заказ.

О работе с доп. полями Заказов на производство можно прочитать [здесь](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)

### Получить список Заказов на производство
Запрос всех Заказов на производство на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                           |
| ----------- | :-------------------------------------------------------- | :----------------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                               |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                       |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Заказы на производство. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |

> Получить список Заказов на производство

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingorder"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Заказов на производство.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
    "type": "processingorder",
    "mediaType": "application/json",
    "size": 5,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/5fbf79f4-adac-11e6-5bed-427b0000006a",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
        "type": "processingorder",
        "mediaType": "application/json"
      },
      "id": "5fbf79f4-adac-11e6-5bed-427b0000006a",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-21 12:17:56.000",
      "name": "da",
      "description": "dsa",
      "externalCode": "Tzn6ewsegfp90BCJ6xgWe2",
      "moment": "2016-11-18 19:30:00.000",
      "applicable": true,
      "printed": true,
      "published": true,
      "store": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "project": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/7f3a7d7a-97a1-11e6-5bed-427b0000009c",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "deliveryPlannedMoment": "2016-11-22 12:17:00.000",
      "positions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/5fbf79f4-adac-11e6-5bed-427b0000006a/positions",
          "type": "processingorderposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "quantity": 1,
      "processingPlan": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
          "type": "processingplan",
          "mediaType": "application/json"
        }
      },
      "processings": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/bcd6e6b5-b002-11e6-5bed-427b0000000b",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
            "type": "processing",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/8450f4de-b002-11e6-5bed-427b00000000",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
            "type": "processing",
            "mediaType": "application/json"
          }
        }
      ]
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/80191fbd-afcf-11e6-5bed-427b00000000",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
        "type": "processingorder",
        "mediaType": "application/json"
      },
      "id": "80191fbd-afcf-11e6-5bed-427b00000000",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-21 12:47:22",
      "name": "11da",
      "description": "dsa",
      "externalCode": "Tzn6ewsegfp90BCJ6xgWe2",
      "moment": "2016-11-18 19:30:00.000",
      "applicable": true,
      "printed": true,
      "published": true,
      "store": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "project": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/7f3a7d7a-97a1-11e6-5bed-427b0000009c",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "deliveryPlannedMoment": "2016-11-22 12:17:00.000",
      "positions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/80191fbd-afcf-11e6-5bed-427b00000000/positions",
          "type": "processingorderposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "quantity": 1,
      "processingPlan": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
          "type": "processingplan",
          "mediaType": "application/json"
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/8cbaa297-afc8-11e6-5bed-427b00000064",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
        "type": "processingorder",
        "mediaType": "application/json"
      },
      "id": "8cbaa297-afc8-11e6-5bed-427b00000064",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-21 11:58:36.000",
      "name": "1",
      "externalCode": "JZQBX9gshwrrTRcHkCcaR2",
      "moment": "2016-11-21 11:47:00.000",
      "applicable": true,
      "printed": true,
      "published": true,
      "store": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "project": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/7f3a7d7a-97a1-11e6-5bed-427b0000009c",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "deliveryPlannedMoment": "2016-11-02 11:57:00.000",
      "positions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/8cbaa297-afc8-11e6-5bed-427b00000064/positions",
          "type": "processingorderposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "quantity": 1,
      "processingPlan": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
          "type": "processingplan",
          "mediaType": "application/json"
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/b5556153-b164-11e6-5bed-427b0000006f",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
        "type": "processingorder",
        "mediaType": "application/json"
      },
      "id": "b5556153-b164-11e6-5bed-427b0000006f",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-23 13:07:57",
      "name": "Заказ на производство",
      "description": "Комментарий",
      "externalCode": "wWAJXKZFgoOZVKd41Dzzz2",
      "moment": "2016-11-23 13:00:00.000",
      "applicable": true,
      "printed": true,
      "published": true,
      "store": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "project": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/7f3a7d7a-97a1-11e6-5bed-427b0000009c",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "deliveryPlannedMoment": "2016-11-23 13:07:00",
      "positions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/b5556153-b164-11e6-5bed-427b0000006f/positions",
          "type": "processingorderposition",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "quantity": 5,
      "processingPlan": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
          "type": "processingplan",
          "mediaType": "application/json"
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c7201428-afcc-11e6-5bed-427b00000068",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
        "type": "processingorder",
        "mediaType": "application/json"
      },
      "id": "c7201428-afcc-11e6-5bed-427b00000068",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-21 17:46:15.000",
      "name": "2",
      "externalCode": "5nSDOrCfjyxt0W1RbY7XZ3",
      "moment": "2016-11-21 12:27:00.000",
      "applicable": true,
      "printed": true,
      "published": true,
      "store": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "project": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/7f3a7d7a-97a1-11e6-5bed-427b0000009c",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "deliveryPlannedMoment": "2016-11-02 17:43:00.000",
      "positions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c7201428-afcc-11e6-5bed-427b00000068/positions",
          "type": "processingorderposition",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "quantity": 1,
      "processingPlan": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
          "type": "processingplan",
          "mediaType": "application/json"
        }
      },
      "processings": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
            "type": "processing",
            "mediaType": "application/json"
          }
        }
      ]
    }
  ]
}
```

### Создать Заказ на производство
Запрос на создание нового Заказа на производство.
Обязательные для создания поля:

+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **processingPlan** - Ссылка на техкарту в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **positions** - Ссылка на позиции в Заказе в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)

> Пример создания нового Заказа с телом запроса, содержащим только необходимые поля.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/processingorder"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "organization": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "processingPlan": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
                "type": "processingplan",
                "mediaType": "application/json"
              }
            },
            "positions": [
              {
                "quantity": 111,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              }
            ]
          }
'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Заказа на производство.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
    "type": "processingorder",
    "mediaType": "application/json"
  },
  "id": "c49e83b3-01af-11e6-9464-e4de00000026",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-14 13:08:58",
  "name": "000034",
  "externalCode": "DAD9peGij6sDNii49Dkam2",
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
  "moment": "2016-04-19 13:50:24",
  "applicable": false,
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
      "type": "processingorderposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "quantity": 5,
  "processingPlan": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  }
}
```

> Пример создания нового Заказа с более насыщенным телом запроса.

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
            "organization": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "moment": "2016-04-19 13:50:24",
            "applicable": false,
            "state": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
                "type": "state",
                "mediaType": "application/json"
              }
            },
            "quantity": 5,
            "processingPlan": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
                "type": "processingplan",
                "mediaType": "application/json"
              }
            },
            "positions": [
              {
                "quantity": 111,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Заказа на производство.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
    "type": "processingorder",
    "mediaType": "application/json"
  },
  "id": "c49e83b3-01af-11e6-9464-e4de00000026",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-14 13:08:58",
  "name": "000034",
  "externalCode": "DAD9peGij6sDNii49Dkam2",
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
  "moment": "2016-04-19 13:50:24",
  "applicable": false,
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
      "type": "processingorderposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "quantity": 5,
  "processingPlan": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  }
}

```

> Пример запроса на создание Заказа на производство с доп. полями.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/processingorder"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "organization": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "processingPlan": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
                  "type": "processingplan",
                  "mediaType": "application/json"
                }
            },
            "positions": [
              {
                "quantity": 111,
                "assortment": {
                   "meta": {
                       "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a",
                       "type": "product",
                       "mediaType": "application/json"
                   }
                }
              }
            ],
            "attributes": [
              {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/attributes/c2ecd338-015e-11e6-9464-e4de0000008f",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "Атрибут заказа",
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Заказа на производство.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
    "type": "processingorder",
    "mediaType": "application/json"
  },
  "id": "c49e83b3-01af-11e6-9464-e4de00000026",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-14 13:08:58",
  "name": "000034",
  "externalCode": "DAD9peGij6sDNii49Dkam2",
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
  "moment": "2016-04-19 13:50:24",
  "applicable": false,
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
      "type": "processingorderposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "quantity": 5,
  "processingPlan": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/attributes/c2ecd338-015e-11e6-9464-e4de0000008f",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c2ecd338-015e-11e6-9464-e4de0000008f",
      "name": "AttributeName1",
      "type": "string",
      "value": "Атрибут заказа"
    }
  ]
}
```

### Массовое создание и обновление Заказов на производство
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Заказов на производство.
В теле запроса нужно передать массив, содержащий JSON представления Заказов на производство, которые вы хотите создать или обновить.
Обновляемые Заказы на производство должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Заказов на производство

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/processingorder"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '[
            {
              "organization": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "processingPlan": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
                  "type": "processingplan",
                  "mediaType": "application/json"
                }
              },
              "positions": [
                {
                  "quantity": 111,
                  "assortment": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  }
                }
              ]
            },
            {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
                "type": "processingorder",
                "mediaType": "application/json"
              },
              "name": "000034",
              "quantity": 5,
              "processingPlan": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
                  "type": "processingplan",
                  "mediaType": "application/json"
                }
              }
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Заказов на производство.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
      "type": "processingorder",
      "mediaType": "application/json"
    },
    "id": "c49e83b3-01af-11e6-9464-e4de00000026",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
    "updated": "2016-04-14 13:08:58",
    "name": "000034",
    "externalCode": "DAD9peGij6sDNii49Dkam2",
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
    "moment": "2016-04-19 13:50:24",
    "applicable": false,
    "sum": 0,
    "organization": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "state": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
        "type": "state",
        "mediaType": "application/json"
      }
    },
    "organizationAccount": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "created": "2007-02-07 17:16:41",
    "printed": true,
    "published": true,
    "positions": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
        "type": "processingorderposition",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
      }
    },
    "quantity": 5,
    "processingPlan": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
        "type": "processingplan",
        "mediaType": "application/json"
      }
    }
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
      "type": "processingorder",
      "mediaType": "application/json"
    },
    "id": "c49e83b3-01af-11e6-9464-e4de00000026",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
    "updated": "2016-04-14 13:08:58",
    "name": "000034",
    "externalCode": "DAD9peGij6sDNii49Dkam2",
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
    "moment": "2016-04-19 13:50:24",
    "applicable": false,
    "sum": 0,
    "organization": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "state": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
        "type": "state",
        "mediaType": "application/json"
      }
    },
    "organizationAccount": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "created": "2007-02-07 17:16:41",
    "printed": true,
    "published": true,
    "positions": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
        "type": "processingorderposition",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
      }
    },
    "quantity": 5,
    "processingPlan": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
        "type": "processingplan",
        "mediaType": "application/json"
      }
    }
  }
]
```

### Удалить Заказ на производство

**Параметры**

| Параметр | Описание                                                                                       |
| :------- | :--------------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа на производство. |

> Запрос на удаление Заказа на производство с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление Заказа на производство.

### Массовое удаление Заказов на производство

В теле запроса нужно передать массив, содержащий JSON метаданных Заказов на производство, которые вы хотите удалить.


> Запрос на массовое удаление Заказов на производство.

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
  -d '[
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b1",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
                "type": "processingorder",
                "mediaType": "application/json"
            }
        },
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b2",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
                "type": "processingorder",
                "mediaType": "application/json"
            }
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Заказов на производство.

```json
[
  {
    "info":"Сущность 'processingorder' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'processingorder' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
``` 

### Метаданные Заказов на производство
#### Метаданные Заказов на производство
Запрос на получение метаданных Заказов на производство. Результат - объект JSON, включающий в себя:

| Параметр                       | Описание                                                                                                                     |
| ------------------------------ | :--------------------------------------------------------------------------------------------------------------------------- |
| **meta**                       | Ссылка на метаданные Заказов на производство                                                                                 |
| **attributes**                 | Массив объектов доп. полей Заказов на производство в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **states**                     | Массив статусов Заказов на производство                                                                                      |
| **createShared**               | создавать новые Заказы на производство с меткой "Общий"                                                                      |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Заказов на производство

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Заказов на производство.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/attributes/c2ecd338-015e-11e6-9464-e4de0000008f",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c2ecd338-015e-11e6-9464-e4de0000008f",
      "name": "AttributeName1",
      "type": "string",
      "required": false
    }
  ],
  "states": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56c504-2e58-11e6-8a84-bae500000069",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Новый",
      "color": 15106326,
      "stateType": "Regular",
      "entityType": "processingorder"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56cae3-2e58-11e6-8a84-bae50000006a",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56cae3-2e58-11e6-8a84-bae50000006a",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Подтвержден",
      "color": 40931,
      "stateType": "Regular",
      "entityType": "processingorder"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56cf4f-2e58-11e6-8a84-bae50000006b",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56cf4f-2e58-11e6-8a84-bae50000006b",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Собран",
      "color": 8767198,
      "stateType": "Regular",
      "entityType": "processingorder"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56d433-2e58-11e6-8a84-bae50000006c",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56d433-2e58-11e6-8a84-bae50000006c",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Отгружен",
      "color": 10774205,
      "stateType": "Regular",
      "entityType": "processingorder"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56d92f-2e58-11e6-8a84-bae50000006d",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56d92f-2e58-11e6-8a84-bae50000006d",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Доставлен",
      "color": 8825440,
      "stateType": "Successful",
      "entityType": "processingorder"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56de0a-2e58-11e6-8a84-bae50000006e",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56de0a-2e58-11e6-8a84-bae50000006e",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Возврат",
      "color": 15280409,
      "stateType": "Unsuccessful",
      "entityType": "processingorder"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56e2b4-2e58-11e6-8a84-bae50000006f",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56e2b4-2e58-11e6-8a84-bae50000006f",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Отменен",
      "color": 15280409,
      "stateType": "Unsuccessful",
      "entityType": "processingorder"
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
  "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/attributes/57ab884e-558b-11e6-8a84-bae500000078",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "57ab884e-558b-11e6-8a84-bae500000078",
  "name": "AttributeName1",
  "type": "productfolder",
  "required": false
}
```

### Шаблон Заказа на производство

#### Шаблон Заказа на производство на основе
Запрос на получение предзаполненного заказа на основе другого документа.
В результате запроса будет создан предзаполненный шаблон заказа на основе переданного документа.

> Запрос на получение шаблона заказа на основе техкарты.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/new"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "processingPlan": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/5fbf79f4-adac-11e6-5bed-427b0000006a",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
                "type": "processingplan",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного заказа.

```json
{
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2016-12-05 14:35:47",
  "applicable": true,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "quantity": 1,
  "processingPlan": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "rows": [
      {
        "quantity": 1,
        "assortment": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
          }
        }
      }
    ]
  }
}
```

### Заказ на производство

### Получить Заказ на производство

**Параметры**

| Параметр | Описание                                                                                       |
| :------- | :--------------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа на производство. |

> Запрос на получение отдельного Заказа на производство с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Заказа на производство.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/b5556153-b164-11e6-5bed-427b0000006f",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
    "type": "processingorder",
    "mediaType": "application/json"
  },
  "id": "b5556153-b164-11e6-5bed-427b0000006f",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-23 13:07:57",
  "name": "Заказ на производство",
  "description": "Комментарий",
  "externalCode": "wWAJXKZFgoOZVKd41Dzzz2",
  "moment": "2016-11-23 13:00:00",
  "applicable": true,
  "store": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "project": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/7f3a7d7a-97a1-11e6-5bed-427b0000009c",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "deliveryPlannedMoment": "2016-11-23 13:07:00",
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/b5556153-b164-11e6-5bed-427b0000006f/positions",
      "type": "processingorderposition",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "quantity": 5,
  "processingPlan": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  }
}
```

### Изменить Заказ на производство
Запрос на обновление Заказа на производство с указанным id.
В теле запроса необходимо указать поле meta **processingPlan** (даже если оно не меняется), а также указать те поля,
которые необходимо изменить у Заказа на производство, кроме тех, что помечены `Только для чтения` в описании
[атрибутов Заказа на производство](../documents/#dokumenty-zakaz-na-proizwodstwo).
При обновлении поля **organization** нужно также обновить поле **organizationAccount**, иначе произойдет ошибка.

**Параметры**

| Параметр | Описание                                                                                       |
| :------- | :--------------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа на производство. |

> Пример запроса на обновление отдельного Заказа на производство.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "name": "000034",
            "processingPlan": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
                "type": "processingplan",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Заказа на производство.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
    "type": "processingorder",
    "mediaType": "application/json"
  },
  "id": "c49e83b3-01af-11e6-9464-e4de00000026",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-14 13:08:58",
  "name": "000034",
  "externalCode": "DAD9peGij6sDNii49Dkam2",
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
  "moment": "2016-04-19 13:50:24",
  "applicable": false,
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
      "type": "processingorderposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "quantity": 5,
  "processingPlan": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  }
}
```

> Пример запроса на изменение Заказа на производство с дополнительными полями.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "processingPlan": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
                "type": "processingplan",
                "mediaType": "application/json"
              }
            }
            "attributes": [
              {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/attributes/c2ecd338-015e-11e6-9464-e4de0000008f",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "Обновленный Атрибут заказа",
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Заказа на производство.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
    "type": "processingorder",
    "mediaType": "application/json"
  },
  "id": "c49e83b3-01af-11e6-9464-e4de00000026",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-14 13:08:58",
  "name": "000034",
  "externalCode": "DAD9peGij6sDNii49Dkam2",
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
  "moment": "2016-04-19 13:50:24",
  "applicable": false,
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
      "type": "processingorderposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "quantity": 5,
  "processingPlan": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/attributes/c2ecd338-015e-11e6-9464-e4de0000008f",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c2ecd338-015e-11e6-9464-e4de0000008f",
      "name": "AttributeName1",
      "type": "string",
      "value": "Обновленный Атрибут заказа"
    }
  ]
}
```

> Пример запроса на обновление Заказа на производство с позициями в теле запроса.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "processingPlan": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
                "type": "processingplan",
                "mediaType": "application/json"
              }
            }
            "positions": [
              {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/34efe2ee-015e-11e6-9464-e4de0000006b/positions/34f6344f-015e-11e6-9464-e4de0000006c",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
                  "type": "processingorderposition",
                  "mediaType": "application/json"
                },
                "id": "34f6344f-015e-11e6-9464-e4de0000006c",
                "quantity": 10,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/8b382799-f7d2-11e5-8a84-bae5000003a5",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              },
              {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/34efe2ee-015e-11e6-9464-e4de0000006b/positions/34f6344f-015e-11e6-9464-e4de0000007c",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
                  "type": "processingorderposition",
                  "mediaType": "application/json"
                },
                "id": "34f6344f-015e-11e6-9464-e4de0000007c",
                "quantity": 20,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/be903062-f504-11e5-8a84-bae50000019a",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              },
              {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/34efe2ee-015e-11e6-9464-e4de0000006b/positions/34f6344f-015e-11e6-9464-e4de0000008c",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
                  "type": "processingorderposition",
                  "mediaType": "application/json"
                },
                "id": "34f6344f-015e-11e6-9464-e4de0000008c",
                "quantity": 30,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/c02e3a5c-007e-11e6-9464-e4de00000006",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Заказа на производство.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
    "type": "processingorder",
    "mediaType": "application/json"
  },
  "id": "c49e83b3-01af-11e6-9464-e4de00000026",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-14 13:08:58",
  "name": "000034",
  "externalCode": "DAD9peGij6sDNii49Dkam2",
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
  "moment": "2016-04-19 13:50:24",
  "applicable": false,
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
      "type": "processingorderposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "quantity": 5,
  "processingPlan": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  }
}
```

### Позиции Заказа на производство
Отдельный ресурс для управления позициями Заказа на производство. С его помощью вы можете управлять позициями большого документа, количество строк в котором превышает лимит на количество строк, сохраняемых вместе с документом. Этот лимит равен 1000. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](../#mojsklad-json-api-obschie-swedeniq-rabota-s-poziciqmi-dokumentow).

### Получить позиции Заказа на производство
Запрос на получение списка всех позиций данного Заказа на производство.


| Название    | Тип                                                       | Описание                                                                   |
| ----------- | :-------------------------------------------------------- | :------------------------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                                       |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                               |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой позиции Заказа на производство. |

**Параметры**

| Параметр   | Описание                                                                                                                               |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа на производство.                                         |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить позиции Заказа на производство

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19/positions"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций отдельного Заказа на производство.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19/positions",
    "type": "processingorderposition",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19/positions/c7218ccd-afcc-11e6-5bed-427b00000069",
        "type": "processingorderposition",
        "mediaType": "application/json"
      },
      "id": "c7218ccd-afcc-11e6-5bed-427b00000069",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "quantity": 45,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
        }
      },
      "reserve": 45
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19/positions/c72196c6-afcc-11e6-5bed-427b0000006a",
        "type": "processingorderposition",
        "mediaType": "application/json"
      },
      "id": "c72196c6-afcc-11e6-5bed-427b0000006a",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "quantity": 45,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/1267a23f-acdc-11e6-5bed-427b00000086",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
        }
      },
      "reserve": 45
    }
  ]
}
```

### Позиция Заказа на производство
Отдельная позиция Заказа с указанным id позиции.

### Получить позицию

**Параметры**

| Параметр       | Описание                                                                                               |
| :------------- | :----------------------------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа на производство.         |
| **positionID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции Заказа на производство. |

> Запрос на получение отдельной позиции Заказа с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции Заказа на производство.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
    "type": "processingorderposition",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "quantity": 45,
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
    }
  },
  "reserve": 45
}

```

### Изменить позицию
Запрос на обновление отдельной позиции Заказа. Для обновления позиции нет каких-либо
обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

| Параметр       | Описание                                                                                               |
| :------------- | :----------------------------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа на производство.         |
| **positionID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции Заказа на производство. |

> Пример запроса на обновление отдельной позиции в Заказе на производство.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
              "type": "processingorderposition",
              "mediaType": "application/json"
            },
            "id": "34f6344f-015e-11e6-9464-e4de0000006c",
            "quantity": 111,
            "assortment": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a",
                "type": "product",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции Заказа на производство.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
    "type": "processingorderposition",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "quantity": 111,
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
    }
  },
  "reserve": 0
}
```

### Удалить позицию

**Параметры**

| Параметр       | Описание                                                                                               |
| :------------- | :----------------------------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа на производство.         |
| **positionID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции Заказа на производство. |

> Запрос на удаление позиции Заказа на производство с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление позиции Заказа на производство.

### Массовое удаление позиций

**Параметры**

| Параметр       | Описание                                                                                       |
| :------------- |:-----------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 3e1c03bb-684f-11ee-ac12-000c000000b0* id Заказа на производство. |

> Запрос на массовое удаление позиций Заказа на производство.

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/3e1c03bb-684f-11ee-ac12-000c000000b0/positions/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/3e1c03bb-684f-11ee-ac12-000c000000b0/positions/7fce2da5-684d-11ee-ac12-000c000000a2",
            "type": "processingorderposition",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/3e1c03bb-684f-11ee-ac12-000c000000b0/positions/7fce37a5-684d-11ee-ac12-000c000000a3",
            "type": "processingorderposition",
            "mediaType": "application/json"
          }
        }
      ]'  
```

> Response 200 (application/json)
Успешное удаление позиций Заказа на производство.
