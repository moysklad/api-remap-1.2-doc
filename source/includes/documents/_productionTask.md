## Производственное задание

Средствами JSON API можно обновлять сведения о Производственных заданиях, запрашивать списки Производственных заданий
и сведения по отдельным Производственным заданиям.
Позициями Производственных заданий можно управлять как в составе отдельного Производственного задания, так и отдельно
- с помощью специальных ресурсов для управления позициями Производственных заданий. Кодом сущности для Производственных
  заданий в составе JSON API является ключевое слово **productiontask**.
  Больше о Производстве и Производственном задании и работе с ними в основном интерфейсе вы можете прочитать в нашей
  службе поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/16929256771857-%D0%9F%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5).

Работа с производственными этапами описана в [отдельном разделе](#dokumenty-proizwodstwennoe-zadanie-proizwodstwennye-atapy).

### Производственные задания
#### Атрибуты сущности

| Название                  | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                                                             |
|---------------------------|:----------------------------------------------------------| :------------------------------------------------------------------------------------------------------------------------------------------------ |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**             | UUID                                                      | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                 |
| **applicable**            | Boolean                                                   |                                                                                                                                                   | Отметка о проведении<br>`+Обязательное при ответе`                                                                                                                   |
| **attributes**            | Array(Object)                                             | [Операторы доп. полей](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-fil-traciq-po-dopolnitel-nym-polqm) | Коллекция метаданных доп. полей [Поля объекта](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)                                               |
| **awaiting**              | Boolean                                                   |                                                                                                                                                   | Флаг ожидания продукта Производственного задания                                                                                                                     |
| **code**                  | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Код Производственного задания                                                                                                                                        |
| **created**               | DateTime                                                  |                                                                                                                                                   | Дата создания<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                     |
| **deleted**               | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего удаления Производственного задания<br>`+Только для чтения`                                                                                         |
| **deliveryPlannedMoment** | DateTime                                                  |                                                                                                                                                   | Планируемая дата выполнения                                                                                                                                          |
| **description**           | String(4096)                                              | `=` `!=` `~` `~=` `=~`                                                                                                                            | Комментарий Производственного задания                                                                                                                                |
| **externalCode**          | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код Производственного задания<br>`+Обязательное при ответе`                                                                                                  |
| **files**                 | MetaArray                                                 |                                                                                                                                                   | Метаданные массива [Файлов](../dictionaries/#suschnosti-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand`                        |
| **group**                 | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                                             |
| **id**                    | UUID                                                      | `=` `!=`                                                                                                                                          | ID Производственного задания<br>`+Обязательное при ответе` `+Только для чтения`                                                                                      |
| **materialsStore**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные склада материалов<br>`+Expand`                                                                                                                            |
| **meta**                  | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные Производственного задания<br>`+Обязательное при ответе`                                                                                                   |
| **moment**                | DateTime                                                  |                                                                                                                                                   | Дата документа<br>`+Обязательное при ответе`                                                                                                                         |
| **name**                  | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование Производственного задания<br>`+Обязательное при ответе`                                                                                                 |
| **organization**          | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                                                 |
| **owner**                 | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Expand`                                                                                                                                    |
| **printed**               | Boolean                                                   |                                                                                                                                                   | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                                             |
| **productionRows**        | MetaArray                                                 |                                                                                                                                                   | Метаданные Позиций производственного задани. [Подробнее тут](../documents/#dokumenty-proizwodstwennoe-zadanie-pozicii-proizwodstwennogo-zadaniq)<br>`+Expand`                      |
| **productionEnd**         | DateTime                                                  |                                                                                                                                                   | Дата окончания производства<br>`+Только для чтения`                                                                                                                  |
| **productionStart**       | DateTime                                                  |                                                                                                                                                   | Дата начала производства                                                                                                                                             |
| **products**              | MetaArray                                                 |                                                                                                                                                   | Метаданные производимой продукции. [Подробнее тут](..documents/#dokumenty-proizwodstwennoe-zadanie-produkty-proizwodstwennogo-zadaniq)<br>`+Обязательное при ответе` |
| **productsStore**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные склада продукции<br>`+Expand`                                                                                                                             |
| **published**             | Boolean                                                   |                                                                                                                                                   | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                                           |
| **reserve**               | Boolean                                                   |                                                                                                                                                   | Флаг резервирования материала Производственного задания                                                                                                              |
| **shared**                | Boolean                                                   | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе`                                                                                                                           |
| **state**                 | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные статуса Производственного задания<br>`+Expand`                                                                                                            |
| **updated**               | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления Производственного задания<br>`+Обязательное при ответе` `+Только для чтения`                                                            |

Материалы производственного задания находятся в разделе [Материалы производственного задания](#dokumenty-proizwodstwennoe-zadanie-materialy-proizwodstwennogo-atapa)

#### Связи с другими документами

| Название           | Описание                                                                                                                |
|--------------------|:------------------------------------------------------------------------------------------------------------------------|
| **purchaseOrders** | Массив ссылок на связанные заказы поставщикам в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **customerOrders** | Массив ссылок на связанные заказы покупателя в формате [Метаданных](../#dokumenty-zakaz-pokupatelq)           |
| **moves**          | Массив ссылок на связанные перемещния в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)         |

#### Позиции Производственного задания
Позиции производственного задания - это список [Техкарт](../dictionaries/#suschnosti-tehkarta), добавленных в Производственное задание.
Объект позиции Производственного задания содержит следующие поля:

| Название               | Тип                                                      | Описание                                                                                 |
| -----------------------|:---------------------------------------------------------|:-----------------------------------------------------------------------------------------|
| **accountId**          | UUID                                                     | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                     |
| **externalCode**       | String(255)                                              | Внешний код                                                                              |
| **id**                 | UUID                                                     | ID позиции<br>`+Обязательное при ответе` `+Только для чтения`                            |
| **name**               | String(255)                                              | Наименование                                                                             |
| **processingPlan**     | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)| Метаданные [Техкарты](../dictionaries/#suschnosti-tehkarta)<br>`+Обязательное при ответе`|
| **productionVolume**   | Float                                                    | Объем производства.<br>`+Обязательное при ответе`                                        |
| **updated**            | DateTime                                                 | Момент последнего обновления Производственного задания<br>`+Обязательное при ответе`     |

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

#### Продукты производственного задания
Объект Продукта производственного задания содержит следующие поля:

| Название             | Тип                                                       | Описание                                                                                                                                                                                        |
|----------------------|:----------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**        | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                            |
| **assortment**       | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Ссылка на товар/серию/модификацию, которую представляет собой позиция.<br>`+Обязательное при ответе` `+Expand`                                                                                  |
| **id**               | UUID                                                      | ID позиции<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                   |
| **planQuantity**     | Float                                                     | Запланированное для производства количество продукта <br>`+Обязательное при ответе`                                                                                                             |
| **productionRow**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные [Позиции производственного задания](../documents/#dokumenty-proizwodstwennoe-zadanie-pozicii-proizwodstwennogo-zadaniq)<br>`+Обязательное при ответе` `+Expand` `+Только для чтения` |

С продуктами можно работать с помощью специальных ресурсов для управления продуктами Производственных заданий,
а также в составе отдельного Производственного задания. При работе в составе отдельного Производственного задания,
вы можете отправлять запросы на создание отдельного Производственного задания с включенным в тело запроса
массивом продуктов. Если количество продуктов превышает максимально допустимое, то для
дальнейшего пополнения продуктов нужно будет работать со специальным ресурсом "Продукты производственного задания".
Также, при работе в составе отдельного Производственного задания, можно отправлять запросы на обновление списка продуктов
с включенным в тело запроса массивом продуктов. При этом важно помнить, что коллекция позиций будет
восприниматься как "все Продукты производственного задания" и полностью заменит уже существующую коллекцию при обновлении объекта - лишние
продукты будут удалены, новые добавлены, существующие - изменены.

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
                "uuidHref": "https://online.moysklad.ru/app/#productiontask/edit?id=6a97c408-98d8-11ee-0a81-05c700000a3a"
            },
            "id": "6a97c408-98d8-11ee-0a81-05c700000a3a",
            "accountId": "042cf74c-9358-11ee-0a80-09e700000010",
            "owner": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/04a31ac9-9358-11ee-0a81-05c7000007a0",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                    "type": "employee",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=04a31ac9-9358-11ee-0a81-05c7000007a0"
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
                    "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
                }
            },
            "productsStore": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                    "type": "store",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
                }
            },
            "organization": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/04bda623-9358-11ee-0a81-05c7000007e5",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                    "type": "organization",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=04bda623-9358-11ee-0a81-05c7000007e5"
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
| **materialsStore**             | Метаданные склада материалов                                                                    |
| **productsStore**              | Метаданные склада продукции                                                                     |

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
                    "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
                }
            },
            "productsStore": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                    "type": "store",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
                }
            },
            "organization": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/04bda623-9358-11ee-0a81-05c7000007e5",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                    "type": "organization",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=04bda623-9358-11ee-0a81-05c7000007e5"
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
        "uuidHref": "https://online.moysklad.ru/app/#productiontask/edit?id=ccb6ea2e-98da-11ee-0a83-0045000025c3"
    },
    "id": "ccb6ea2e-98da-11ee-0a83-0045000025c3",
    "accountId": "042cf74c-9358-11ee-0a80-09e700000010",
    "owner": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/04a31ac9-9358-11ee-0a81-05c7000007a0",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=04a31ac9-9358-11ee-0a81-05c7000007a0"
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
            "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
        }
    },
    "productsStore": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
        }
    },
    "organization": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/04bda623-9358-11ee-0a81-05c7000007e5",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
            "type": "organization",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=04bda623-9358-11ee-0a81-05c7000007e5"
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
                    "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
                }
            },
            "productsStore": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                    "type": "store",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
                }
            },
            "organization": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/04bda623-9358-11ee-0a81-05c7000007e5",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                    "type": "organization",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=04bda623-9358-11ee-0a81-05c7000007e5"
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
                    "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=04a31ac9-9358-11ee-0a81-05c7000007a0"
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
    "uuidHref": "https://online.moysklad.ru/app/#productiontask/edit?id=ccfc90be-98e0-11ee-0a83-0045000025cb"
  },
  "id": "ccfc90be-98e0-11ee-0a83-0045000025cb",
  "accountId": "042cf74c-9358-11ee-0a80-09e700000010",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/04a31ac9-9358-11ee-0a81-05c7000007a0",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=04a31ac9-9358-11ee-0a81-05c7000007a0"
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
      "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
    }
  },
  "productsStore": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
    }
  },
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/04bda623-9358-11ee-0a81-05c7000007e5",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=04bda623-9358-11ee-0a81-05c7000007e5"
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
                    "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
                }
            },
            "productsStore": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                    "type": "store",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
                }
            },
            "organization": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/04bda623-9358-11ee-0a81-05c7000007e5",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                    "type": "organization",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=04bda623-9358-11ee-0a81-05c7000007e5"
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
                        "uuidHref": "https://online.moysklad.ru/app/#processingplan/edit?id=5a6729bb-98d8-11ee-0a81-05c700000a34"
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
                    "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=04a31ac9-9358-11ee-0a81-05c7000007a0"
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
        "uuidHref": "https://online.moysklad.ru/app/#productiontask/edit?id=d1c9c512-98e5-11ee-0a83-0045000025cf"
    },
    "id": "d1c9c512-98e5-11ee-0a83-0045000025cf",
    "accountId": "042cf74c-9358-11ee-0a80-09e700000010",
    "owner": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/04a31ac9-9358-11ee-0a81-05c7000007a0",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=04a31ac9-9358-11ee-0a81-05c7000007a0"
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
            "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
        }
    },
    "productsStore": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
        }
    },
    "organization": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/04bda623-9358-11ee-0a81-05c7000007e5",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
            "type": "organization",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=04bda623-9358-11ee-0a81-05c7000007e5"
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
                        "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
                    }
                },
                "productsStore": {
                    "meta": {
                        "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
                        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                        "type": "store",
                        "mediaType": "application/json",
                        "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
                    }
                },
                "organization": {
                    "meta": {
                        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/04bda623-9358-11ee-0a81-05c7000007e5",
                        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                        "type": "organization",
                        "mediaType": "application/json",
                        "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=04bda623-9358-11ee-0a81-05c7000007e5"
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
                                "uuidHref": "https://online.moysklad.ru/app/#processingplan/edit?id=5a6729bb-98d8-11ee-0a81-05c700000a34"
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
                        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=04a31ac9-9358-11ee-0a81-05c7000007a0"
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
                    "uuidHref": "https://online.moysklad.ru/app/#productiontask/edit?id=d1c9c512-98e5-11ee-0a83-0045000025cf"
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
            "uuidHref": "https://online.moysklad.ru/app/#productiontask/edit?id=f400f8a3-98e7-11ee-0a83-0045000025d9"
        },
        "id": "f400f8a3-98e7-11ee-0a83-0045000025d9",
        "accountId": "042cf74c-9358-11ee-0a80-09e700000010",
        "owner": {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/04a31ac9-9358-11ee-0a81-05c7000007a0",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "type": "employee",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=04a31ac9-9358-11ee-0a81-05c7000007a0"
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
                "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
            }
        },
        "productsStore": {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
            }
        },
        "organization": {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/04bda623-9358-11ee-0a81-05c7000007e5",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=04bda623-9358-11ee-0a81-05c7000007e5"
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
            "uuidHref": "https://online.moysklad.ru/app/#productiontask/edit?id=d1c9c512-98e5-11ee-0a83-0045000025cf"
        },
        "id": "d1c9c512-98e5-11ee-0a83-0045000025cf",
        "accountId": "042cf74c-9358-11ee-0a80-09e700000010",
        "owner": {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/04a31ac9-9358-11ee-0a81-05c7000007a0",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "type": "employee",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=04a31ac9-9358-11ee-0a81-05c7000007a0"
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
                "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
            }
        },
        "productsStore": {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
            }
        },
        "organization": {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/04bda623-9358-11ee-0a81-05c7000007e5",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=04bda623-9358-11ee-0a81-05c7000007e5"
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

### Массовое удаление Производственных заданий

В теле запроса нужно передать массив, содержащий JSON метаданных Производственных заданий, которые вы хотите удалить.


> Запрос на массовое удаление Производственных заданий.

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
  -d '[
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/d1c9c512-98e5-11ee-0a83-0045000025cf",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/metadata",
                "type": "productiontask",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#productiontask/edit?id=d1c9c512-98e5-11ee-0a83-0045000025cf"
            }
        },
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/f400f8a3-98e7-11ee-0a83-0045000025d9",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/metadata",
                "type": "productiontask",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#productiontask/edit?id=f400f8a3-98e7-11ee-0a83-0045000025d9"
            }
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Производственных заданий.

```json
[
  {
    "info": "Сущность 'productiontask' с UUID: d1c9c512-98e5-11ee-0a83-0045000025cf успешно удалена"
  },
  {
    "info": "Сущность 'productiontask' с UUID: f400f8a3-98e7-11ee-0a83-0045000025d9 успешно удалена"
  }
]
``` 

### Метаданные Производственных заданий
#### Метаданные Производственных заданий
Запрос на получение метаданных Производственных заданий. Результат - объект JSON, включающий в себя:

| Параметр         | Описание                                                                        |
|------------------|:--------------------------------------------------------------------------------|
| **meta**         | Метаданные Производственных заданий                                             |
| **attributes**   | Коллекция доп. полей                                                            |
| **createShared** | Создавать новые Производственныe задания с меткой "Общий"                       |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Производственных заданий

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/metadata"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Производственных заданий.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/metadata",
    "mediaType": "application/json"
  },
  "attributes": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/metadata/attributes",
      "type": "attributemetadata",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "createShared": false
}
```

### Отдельное доп. поле

**Параметры**

| Параметр | Описание                                                                          |
| :------- | :-------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 4ca308f4-98f3-11ee-0a81-05c700000a7d* id Доп. поля. |

#### Отдельное доп. поле
> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/metadata/attributes/4ca308f4-98f3-11ee-0a81-05c700000a7d"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/metadata/attributes/4ca308f4-98f3-11ee-0a81-05c700000a7d",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "4ca308f4-98f3-11ee-0a81-05c700000a7d",
  "name": "дополнительное поле",
  "type": "string",
  "required": false,
  "show": true,
  "description": "Тестовое дополнительное поле"
}
```

### Получить Производственное задание

**Параметры**

| Параметр | Описание                                                                                          |
| :------- |:--------------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 7f9a63c64-98ee-11ee-0a83-0045000025e7* id Производственного задания. |

> Запрос на получение отдельного Производственного задания с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/f9a63c64-98ee-11ee-0a83-0045000025e7"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Производственного задания.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/f9a63c64-98ee-11ee-0a83-0045000025e7",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/metadata",
    "type": "productiontask",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#productiontask/edit?id=f9a63c64-98ee-11ee-0a83-0045000025e7"
  },
  "id": "f9a63c64-98ee-11ee-0a83-0045000025e7",
  "accountId": "042cf74c-9358-11ee-0a80-09e700000010",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/04a31ac9-9358-11ee-0a81-05c7000007a0",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=04a31ac9-9358-11ee-0a81-05c7000007a0"
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
  "updated": "2023-12-12 16:06:44.284",
  "name": "00003",
  "description": "тестовое производственное задание на обновление",
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
      "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
    }
  },
  "productsStore": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
    }
  },
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/04bda623-9358-11ee-0a81-05c7000007e5",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=04bda623-9358-11ee-0a81-05c7000007e5"
    }
  },
  "created": "2023-12-12 16:04:25.250",
  "printed": false,
  "published": false,
  "files": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/f9a63c64-98ee-11ee-0a83-0045000025e7/files",
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
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/f9a63c64-98ee-11ee-0a83-0045000025e7/productionrows",
      "type": "productionrow",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "products": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/f9a63c64-98ee-11ee-0a83-0045000025e7/products",
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

### Изменить Производственное задание
Запрос на обновление Производственного задания с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Производственного задания, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Производственного задания](#dokumenty-proizwodstwennoe-zadanie).

Когда Производственное задание имеет Выполненные этапы, то обновление даты старта производства (поле productionStart) 
на дату позже, чем дата Выполнения Этапа, приведет к ошибке.

**Параметры**

| Параметр | Описание                                                                                        |
| :------- |:------------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: f9a63c64-98ee-11ee-0a83-0045000025e7* id Производственного задания|

> Пример запроса на обновление отдельного Производственного задания.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/f9a63c64-98ee-11ee-0a83-0045000025e7"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "description": "тестовое производственное задание на обновление",
            "productionRows": [
                {
                    "processingPlan": {
                        "meta": {
                            "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/5a6729bb-98d8-11ee-0a81-05c700000a34",
                            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
                            "type": "processingplan",
                            "mediaType": "application/json",
                            "uuidHref": "https://online.moysklad.ru/app/#processingplan/edit?id=5a6729bb-98d8-11ee-0a81-05c700000a34"
                        }
                    },
                    "productionVolume": 15.0
                }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Производственного задания.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/f9a63c64-98ee-11ee-0a83-0045000025e7",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/metadata",
    "type": "productiontask",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#productiontask/edit?id=f9a63c64-98ee-11ee-0a83-0045000025e7"
  },
  "id": "f9a63c64-98ee-11ee-0a83-0045000025e7",
  "accountId": "042cf74c-9358-11ee-0a80-09e700000010",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/04a31ac9-9358-11ee-0a81-05c7000007a0",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=04a31ac9-9358-11ee-0a81-05c7000007a0"
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
  "updated": "2023-12-12 16:06:44.284",
  "name": "00003",
  "description": "тестовое производственное задание на обновление",
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
      "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
    }
  },
  "productsStore": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
    }
  },
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/04bda623-9358-11ee-0a81-05c7000007e5",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=04bda623-9358-11ee-0a81-05c7000007e5"
    }
  },
  "created": "2023-12-12 16:04:25.250",
  "printed": false,
  "published": false,
  "files": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/f9a63c64-98ee-11ee-0a83-0045000025e7/files",
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
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/f9a63c64-98ee-11ee-0a83-0045000025e7/productionrows",
      "type": "productionrow",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "products": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/f9a63c64-98ee-11ee-0a83-0045000025e7/products",
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
> Пример запроса на изменение Производственного задания с дополнительными полями.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/4d63c1b4-98e0-11ee-0a83-0045000025c7"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "attributes": [
                {
                    "meta": {
                        "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/metadata/attributes/4ca308f4-98f3-11ee-0a81-05c700000a7d",
                        "type": "attributemetadata",
                        "mediaType": "application/json"
                    },
                    "id": "4ca308f4-98f3-11ee-0a81-05c700000a7d",
                    "name": "дополнительное поле",
                    "type": "string",
                    "value": "тестовый вариант"
                }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Производственного задания.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/4d63c1b4-98e0-11ee-0a83-0045000025c7",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/metadata",
    "type": "productiontask",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#productiontask/edit?id=4d63c1b4-98e0-11ee-0a83-0045000025c7"
  },
  "id": "4d63c1b4-98e0-11ee-0a83-0045000025c7",
  "accountId": "042cf74c-9358-11ee-0a80-09e700000010",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/04a31ac9-9358-11ee-0a81-05c7000007a0",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=04a31ac9-9358-11ee-0a81-05c7000007a0"
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
  "updated": "2023-12-12 14:19:23.230",
  "name": "Тестовое Производственное здание 1",
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
      "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
    }
  },
  "productsStore": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/04c31653-9358-11ee-0a81-05c7000007e7",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=04c31653-9358-11ee-0a81-05c7000007e7"
    }
  },
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/04bda623-9358-11ee-0a81-05c7000007e5",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=04bda623-9358-11ee-0a81-05c7000007e5"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/metadata/attributes/4ca308f4-98f3-11ee-0a81-05c700000a7d",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "4ca308f4-98f3-11ee-0a81-05c700000a7d",
      "name": "дополнительное поле",
      "type": "string",
      "value": "тестовый вариант"
    }
  ],
  "created": "2023-12-12 14:19:23.319",
  "printed": false,
  "published": false,
  "files": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/4d63c1b4-98e0-11ee-0a83-0045000025c7/files",
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
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/4d63c1b4-98e0-11ee-0a83-0045000025c7/productionrows",
      "type": "productionrow",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "products": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/4d63c1b4-98e0-11ee-0a83-0045000025c7/products",
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
### Удалить Производственное задание

При удалении Производственного задания удаляются все связанные Выполненные этапы производства.

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

### Продукты производственного задания
Отдельный ресурс для управления продуктами Производственного задания. С его помощью вы можете управлять позициями большого документа, количество строк в котором превышает лимит на количество строк, сохраняемых вместе с документом. Этот лимит равен 1000. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](../#mojsklad-json-api-obschie-swedeniq-rabota-s-poziciqmi-dokumentow).

### Получить Продукты производственного задания
Запрос на получение списка всех продуктов данного Производственного задания.

| Название    | Тип                                                       | Описание                                                                       |
| ----------- | :-------------------------------------------------------- |:-------------------------------------------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                                           |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                                   |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Продукты производственного задания. |

**Параметры**

| Параметр   | Описание                                                                                                                               |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| **id**     | `string` (required) *Example: ef458539-214e-11ee-c0a8-d00400000066* id Производственного задания.                                      |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить Продукты производственного задания

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/ef458539-214e-11ee-c0a8-d00400000066/products"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка продуктов отдельного Производственного задания.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "http://api.moysklad.ru/api/remap/1.2/context/employee",
        "metadataHref": "http://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "http://api.moysklad.ru/api/remap/1.2?",
    "type": "productiontaskresult",
    "mediaType": "application/json",
    "size": 2,
    "limit": 100,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "http://api.moysklad.ru/api/remap/1.2/entity/productiontask/ef458539-214e-11ee-c0a8-d00400000066/products/ef45d0b2-214e-11ee-c0a8-d00400000069",
        "type": "productiontaskresult",
        "mediaType": "application/json"
      },
      "id": "ef45d0b2-214e-11ee-c0a8-d00400000069",
      "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
      "assortment": {
        "meta": {
          "href": "http://api.moysklad.ru/api/remap/1.2/entity/product/eddc7244-214e-11ee-c0a8-d00400000006",
          "metadataHref": "http://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "http://api.moysklad.ru/app/#good/edit?id=eddb9773-214e-11ee-c0a8-d00400000004"
        }
      },
      "productionRow": {
        "meta": {
          "href": "http://api.moysklad.ru/api/remap/1.2/entity/productiontask/ef458539-214e-11ee-c0a8-d00400000066/productionrows/ef45d60f-214e-11ee-c0a8-d0040000006a",
          "type": "productionrow",
          "mediaType": "application/json",
          "uuidHref": "http://api.moysklad.ru/app/#productionrow/edit?id=ef45d60f-214e-11ee-c0a8-d0040000006a"
        }
      },
      "planQuantity": 2.0
    },
    {
      "meta": {
        "href": "http://api.moysklad.ru/api/remap/1.2/entity/productiontask/ef458539-214e-11ee-c0a8-d00400000066/products/ef45d0b2-214e-11ee-c0a8-d0040000006a",
        "type": "productiontaskresult",
        "mediaType": "application/json"
      },
      "id": "ef45d0b2-214e-11ee-c0a8-d0040000006a",
      "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
      "assortment": {
        "meta": {
          "href": "http://api.moysklad.ru/api/remap/1.2/entity/product/eddc7244-214e-11ee-c0a8-d00400000006",
          "metadataHref": "http://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "http://api.moysklad.ru/app/#good/edit?id=eddb9773-214e-11ee-c0a8-d00400000004"
        }
      },
      "productionRow": {
        "meta": {
          "href": "http://api.moysklad.ru/api/remap/1.2/entity/productiontask/ef458539-214e-11ee-c0a8-d00400000066/productionrows/ef45d60f-214e-11ee-c0a8-d0040000006a",
          "type": "productionrow",
          "mediaType": "application/json",
          "uuidHref": "http://api.moysklad.ru/app/#productionrow/edit?id=ef45d60f-214e-11ee-c0a8-d0040000006a"
        }
      },
      "planQuantity": 2.0
    }
  ]
}
```

### Продукт производственного задания
Отдельный продукт Производственного задания с указанным id позиции.

### Получить продукт производственного задания

**Параметры**

| Параметр      | Описание                                                                                                   |
|:--------------|:-----------------------------------------------------------------------------------------------------------|
| **id**        | `string` (required) *Example: ef458539-214e-11ee-c0a8-d00400000066* id Производственного задания.          |
| **productID** | `string` (required) *Example: ef45d0b2-214e-11ee-c0a8-d00400000069* id продукта Производственного задания. |

> Запрос на получение отдельного продукта Производственного задания с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/ef458539-214e-11ee-c0a8-d00400000066/products/ef45d0b2-214e-11ee-c0a8-d00400000069"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление продукта Производственного задания.

```json
{
  "meta": {
    "href": "http://api.moysklad.ru/api/remap/1.2/entity/productiontask/ef458539-214e-11ee-c0a8-d00400000066/products/ef45d0b2-214e-11ee-c0a8-d00400000069",
    "type": "productiontaskresult",
    "mediaType": "application/json"
  },
  "id": "ef45d0b2-214e-11ee-c0a8-d00400000069",
  "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
  "assortment": {
    "meta": {
      "href": "http://api.moysklad.ru/api/remap/1.2/entity/product/eddc7244-214e-11ee-c0a8-d00400000006",
      "metadataHref": "http://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "http://api.moysklad.ru/app/#good/edit?id=eddb9773-214e-11ee-c0a8-d00400000004"
    }
  },
  "productionRow": {
    "meta": {
      "href": "http://api.moysklad.ru/api/remap/1.2/entity/productiontask/ef458539-214e-11ee-c0a8-d00400000066/productionrows/ef45d60f-214e-11ee-c0a8-d0040000006a",
      "type": "productionrow",
      "mediaType": "application/json",
      "uuidHref": "http://api.moysklad.ru/app/#productionrow/edit?id=ef45d60f-214e-11ee-c0a8-d0040000006a"
    }
  },
  "planQuantity": 2.0
}

```

### Создать продукт
Запрос на создание продукта Производственного задания. Для успешного создания необходимо в теле запроса указать следующие поля:

+ **assortment** - Ссылка на товар/серию/модификацию, которую представляет собой продукт.
+ **planQuantity** - Запланированное для производства количество продукта. Должно быть положительным, иначе возникнет ошибка.
+ **productionRow** - Ссылка на [позицию Производственного задания](../documents/#dokumenty-proizwodstwennoe-zadanie-pozicii-proizwodstwennogo-zadaniq).
  
Одновременно можно создать как один, так и несколько продуктов. Все созданные данным запросом продукты будут добавлены к уже существующим.

**Параметры**

| Параметр | Описание                                                                                         |
| :------- |:-------------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: ef458539-214e-11ee-c0a8-d00400000066* id Производственного задания.|

> Пример запроса на создание продукта Производственного задания.

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/ef458539-214e-11ee-c0a8-d00400000066/product"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
    -d '{
          "planQuantity": 22.0,
          "assortment": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a",
              "type": "product",
              "mediaType": "application/json"
            }
          },
          "productionRow": {
            "meta": {
              "href": "http://api.moysklad.ru/api/remap/1.2/entity/productiontask/ef458539-214e-11ee-c0a8-d00400000066/productionrows/ef45d60f-214e-11ee-c0a8-d0040000006a",
              "type": "productionrow",
              "mediaType": "application/json",
              "uuidHref": "http://api.moysklad.ru/app/#productionrow/edit?id=ef45d60f-214e-11ee-c0a8-d0040000006a"
            }
          }
        }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного продукта Производственного задания.

```json
{
  "meta": {
    "href": "http://api.moysklad.ru/api/remap/1.2/entity/productiontask/ef458539-214e-11ee-c0a8-d00400000066/products/ef45d0b2-214e-11ee-c0a8-d00400000069",
    "type": "productiontaskresult",
    "mediaType": "application/json"
  },
  "id": "ef45d0b2-214e-11ee-c0a8-d00400000069",
  "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
  "assortment": {
    "meta": {
      "href": "http://api.moysklad.ru/api/remap/1.2/entity/product/eddc7244-214e-11ee-c0a8-d00400000006",
      "metadataHref": "http://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "http://api.moysklad.ru/app/#good/edit?id=eddb9773-214e-11ee-c0a8-d00400000004"
    }
  },
  "productionRow": {
    "meta": {
      "href": "http://api.moysklad.ru/api/remap/1.2/entity/productiontask/ef458539-214e-11ee-c0a8-d00400000066/productionrows/ef45d60f-214e-11ee-c0a8-d0040000006a",
      "type": "productionrow",
      "mediaType": "application/json",
      "uuidHref": "http://api.moysklad.ru/app/#productionrow/edit?id=ef45d60f-214e-11ee-c0a8-d0040000006a"
    }
  },
  "planQuantity": 22.0
}
```

### Изменить продукт
Запрос на обновление продукта Производственного задания. Для обновления продукта нет каких-либо
обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

| Параметр      | Описание                                                                                                  |
|:--------------|:----------------------------------------------------------------------------------------------------------|
| **id**        | `string` (required) *Example: ef458539-214e-11ee-c0a8-d00400000066* id Производственного задания.         |
| **productID** | `string` (required) *Example: ef45d0b2-214e-11ee-c0a8-d00400000069* id продукта Производственного задания.|

> Пример запроса на обновление продукта Производственного задания.

```shell
curl -X PUT
  "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/ef458539-214e-11ee-c0a8-d00400000066/products/ef45d0b2-214e-11ee-c0a8-d00400000069"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
    -d '{
          "planQuantity": 22.0,
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
Успешный запрос. Результат - JSON представление обновленного продукта Производственного задания.

```json
{
  "meta": {
    "href": "http://api.moysklad.ru/api/remap/1.2/entity/productiontask/ef458539-214e-11ee-c0a8-d00400000066/products/ef45d0b2-214e-11ee-c0a8-d00400000069",
    "type": "productiontaskresult",
    "mediaType": "application/json"
  },
  "id": "ef45d0b2-214e-11ee-c0a8-d00400000069",
  "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
  "assortment": {
    "meta": {
      "href": "http://api.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a",
      "metadataHref": "http://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "http://api.moysklad.ru/app/#good/edit?id=eddb9773-214e-11ee-c0a8-d00400000004"
    }
  },
  "productionRow": {
    "meta": {
      "href": "http://api.moysklad.ru/api/remap/1.2/entity/productiontask/ef458539-214e-11ee-c0a8-d00400000066/productionrows/ef45d60f-214e-11ee-c0a8-d0040000006a",
      "type": "productionrow",
      "mediaType": "application/json",
      "uuidHref": "http://api.moysklad.ru/app/#productionrow/edit?id=ef45d60f-214e-11ee-c0a8-d0040000006a"
    }
  },
  "planQuantity": 22.0
}
```

### Удалить продукт

Ограничения на удаление: нельзя удалить последний продукт из позиции Производственного задания и нельзя удалять продукты после начала выполнения финальной позиции Производственного задания.

**Параметры**

| Параметр      | Описание                                                                                                  |
|:--------------|:----------------------------------------------------------------------------------------------------------|
| **id**        | `string` (required) *Example: ef458539-214e-11ee-c0a8-d00400000066* id Производственного задания.         |
| **productID** | `string` (required) *Example: ef45d0b2-214e-11ee-c0a8-d00400000069* id продукта Производственного задания.|

> Запрос на удаление продукта Производственного задания с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/ef458539-214e-11ee-c0a8-d00400000066/products/ef45d0b2-214e-11ee-c0a8-d00400000069"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление продукта Производственного задания.

### Массовое удаление продуктов Производственного задания

**Параметры**

| Параметр       | Описание                                                                                         |
| :------------- |:-------------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: ef458539-214e-11ee-c0a8-d00400000066* id Производственного задания.|

> Запрос на массовое удаление продуктов Производственного задания.

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/ef458539-214e-11ee-c0a8-d00400000066/products/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "http://api.moysklad.ru/api/remap/1.2/entity/productiontask/ef458539-214e-11ee-c0a8-d00400000066/products/ef45d0b2-214e-11ee-c0a8-d00400000069",
            "type": "productiontaskresult",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "http://api.moysklad.ru/api/remap/1.2/entity/productiontask/ef458539-214e-11ee-c0a8-d00400000066/products/ef45d0b2-214e-11ee-c0a8-d0040000006a",
            "type": "productiontaskresult",
            "mediaType": "application/json"
          }
        }
      ]'  
```

> Response 200 (application/json)
Успешное удаление продуктов Производственного задания.


### Позиции производственного задания

### Получить список позиций производственного задания

> Запрос на получение позиций отдельного Производственного задания с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/85b4c65e-99d6-11ee-ac12-000f0000011a/productionrows"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Производственного задания.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/85b4c65e-99d6-11ee-ac12-000f0000011a/productionrows",
    "limit": 1000,
    "mediaType": "application/json",
    "offset": 0,
    "size": 1,
    "type": "productionrow"
  },
  "rows": [
    {
      "accountId": "899eb32d-99d5-11ee-ac12-000e00000001",
      "externalCode": "3oKBsRwZigCESI13Mncqq1",
      "id": "85b4d986-99d6-11ee-ac12-000f0000011c",
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/85b4c65e-99d6-11ee-ac12-000f0000011a/productionrows/85b4d986-99d6-11ee-ac12-000f0000011c",
        "mediaType": "application/json",
        "type": "productionrow",
        "uuidHref": "https://online.moysklad.ru/app/#productionrow/edit?id=85b4d986-99d6-11ee-ac12-000f0000011c"
      },
      "name": "example-name",
      "processingPlan": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/81269542-99d6-11ee-ac12-000f00000115",
          "mediaType": "application/json",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
          "type": "processingplan",
          "uuidHref": "https://online.moysklad.ru/app/#processingplan/edit?id=81269542-99d6-11ee-ac12-000f00000115"
        }
      },
      "productionVolume": 2.0,
      "updated": "2023-12-13 19:41:53.990"
    }
  ]
}
```

### Получить отдельную позицию производственного задания

> Запрос на получение позиции отдельного Производственного задания с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/85b4c65e-99d6-11ee-ac12-000f0000011a/productionrows/85b4d986-99d6-11ee-ac12-000f0000011c"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Производственного задания.

```json
{
  "accountId": "899eb32d-99d5-11ee-ac12-000e00000001",
  "externalCode": "3oKBsRwZigCESI13Mncqq1",
  "id": "85b4d986-99d6-11ee-ac12-000f0000011c",
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/85b4c65e-99d6-11ee-ac12-000f0000011a/productionrows/85b4d986-99d6-11ee-ac12-000f0000011c",
    "mediaType": "application/json",
    "type": "productionrow",
    "uuidHref": "https://online.moysklad.ru/app/#productionrow/edit?id=85b4d986-99d6-11ee-ac12-000f0000011c"
  },
  "name": "example-name",
  "processingPlan": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/81269542-99d6-11ee-ac12-000f00000115",
      "mediaType": "application/json",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "uuidHref": "https://online.moysklad.ru/app/#processingplan/edit?id=81269542-99d6-11ee-ac12-000f00000115"
    }
  },
  "productionVolume": 2.0,
  "updated": "2023-12-13 19:41:53.990"
}
```

### Изменить позиции производственного задания
Запрос на обновление отдельной позиции Производственного задания. Изменить можно только объём производства.

**Параметры**

| Параметр       | Описание                                                                                                  |
| :------------- |:----------------------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: e66dd4ab-9a5c-11ee-0a83-0a2e0000090d* id Производственное задание.          |
| **positionID** | `string` (required) *Example: e66de5ff-9a5c-11ee-0a83-0a2e00000910* id позиции Производственного задания. |


> Пример запроса на обновление позиции у Производственного задания.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/e66dd4ab-9a5c-11ee-0a83-0a2e0000090d/productionrows/e66de5ff-9a5c-11ee-0a83-0a2e00000910"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{ 
            "productionVolume": 5.0
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции Производственного задания.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/e66dd4ab-9a5c-11ee-0a83-0a2e0000090d/productionrows/e66de5ff-9a5c-11ee-0a83-0a2e00000910",
    "type": "productionrow",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#productionrow/edit?id=e66de5ff-9a5c-11ee-0a83-0a2e00000910"
  },
  "id": "e66de5ff-9a5c-11ee-0a83-0a2e00000910",
  "accountId": "0b3bcfb6-9a4d-11ee-0a83-0ded00000036",
  "updated": "2023-12-14 11:43:48.850",
  "name": "00001-1",
  "externalCode": "gDY0RMzyjwSTivwJTczyl0",
  "processingPlan": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/e296b1de-9a5c-11ee-0a83-0a2e00000907",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#processingplan/edit?id=e296b1de-9a5c-11ee-0a83-0a2e00000907"
    }
  },
  "productionVolume": 5.0
}
```

### Удалить отдельную позицию производственного задания

Учитывайте, что удалить позицию производственного задания, у которой есть начатые этапы - нельзя

> Запрос на удаление позиции производственного задания с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/85b4c65e-99d6-11ee-ac12-000f0000011a/productionrows/85b4d986-99d6-11ee-ac12-000f0000011c"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление позиции Производственного задания.
