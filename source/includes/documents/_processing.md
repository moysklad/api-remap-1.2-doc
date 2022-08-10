## Тех. операция
Средствами JSON API можно создавать и обновлять сведения о Тех. операциях, запрашивать списки Тех. операций и сведения по отдельным Тех. операциям. Позициями Тех. операций можно управлять как в составе отдельной Тех. операции, так и отдельно - с помощью специальных ресурсов для управления материалами и продуктами Тех. операции. Кодом сущности для Тех. операции в составе JSON API является ключевое слово **processing**. Больше о Тех. операциях и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по
[этой ссылке](https://support.moysklad.ru/hc/ru/articles/203325613-%D0%A1%D0%B1%D0%BE%D1%80%D0%BE%D1%87%D0%BD%D1%8B%D0%B5-%D0%B8-%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B8).
### Тех. операции 
#### Атрибуты сущности

| Название                | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                                      |
| ----------------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| **accountId**           | UUID                                                      | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                          |
| **applicable**          | Boolean                                                   | `=` `!=`                                                                                                                                          | Отметка о проведении<br>`+Обязательное при ответе`                                                                                            |
| **attributes**          | Array(Object)                                             | [Операторы доп. полей](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-fil-traciq-po-dopolnitel-nym-polqm) | Коллекция метаданных доп. полей. [Поля объекта](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)                       |
| **code**                | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Код Тех. операции                                                                                                                             |
| **created**             | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата создания<br>`+Обязательное при ответе` `+Только для чтения`                                                                              |
| **deleted**             | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего удаления Тех. операции<br>`+Только для чтения`                                                                              |
| **description**         | String(4096)                                              | `=` `!=` `~` `~=` `=~`                                                                                                                            | Комментарий Тех. операции                                                                                                                     |
| **externalCode**        | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код Тех. операции<br>`+Обязательное при ответе`                                                                                       |
| **files**               | MetaArray                                                 |                                                                                                                                                   | Метаданные массива [Файлов](../dictionaries/#suschnosti-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand` |
| **group**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                      |
| **id**                  | UUID                                                      | `=` `!=`                                                                                                                                          | ID Тех. операции<br>`+Обязательное при ответе` `+Только для чтения`                                                                           |
| **materials**           | Array(Object)                                             |                                                                                                                                                   | Список Метаданных материалов Тех. операции<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                 |
| **materialsStore**      | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные склада для материалов<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                           |
| **meta**                | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные Тех. операции<br>`+Обязательное при ответе` `+Только для чтения`                                                                   |
| **moment**              | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата документа<br>`+Обязательное при ответе`                                                                                                  |
| **name**                | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование Тех. операции<br>`+Обязательное при ответе` `+Необходимо при создании`                                                           |
| **organization**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                          |
| **organizationAccount** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные счета юрлица<br>`+Expand`                                                                                                          |
| **owner**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Обязательное при ответе` `+Expand`                                                                                  |
| **printed**             | Boolean                                                   | `=` `!=`                                                                                                                                          | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                      |
| **processingPlan**      | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные Тех. операции<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                   |
| **processingSum**       | Int                                                       |                                                                                                                                                   | Затраты на производство<br>`+Обязательное при ответе` `+Необходимо при создании`                                                              |
| **products**            | Array(Object)                                             |                                                                                                                                                   | Список Метаданных готовых продуктов Тех. операции<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                          |
| **productsStore**       | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные склада для продукции<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                            |
| **project**             | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные проекта<br>`+Expand`                                                                                                               |
| **published**           | Boolean                                                   | `=` `!=`                                                                                                                                          | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                    |
| **quantity**            | Int                                                       | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Объем производства<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                   |
| **shared**              | Boolean                                                   | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе` `+Только для чтения`                                                                               |
| **state**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные статуса Тех. операции<br>`+Expand`                                                                                                 |
| **syncId**              | UUID                                                      | `=` `!=`                                                                                                                                          | ID синхронизации. После заполнения недоступен для изменения<br>`+Только для чтения`                                                           |
| **updated**             | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления Тех. операции<br>`+Обязательное при ответе` `+Только для чтения`                                                 |

#### Связи с другими документами

| Название                       | Описание                                                                                                  |
| ------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| **processingOrder**            | Ссылка на заказ на производство в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |

#### Материалы Тех. операции
Материалы Тех. операции - это список товаров/модификаций, используемых для производства готовых продуктов согласно тех. карте.
Объект материала Тех. операции содержит следующие поля:

| Название       | Тип                                                       | Описание                                                                                                        |
| -------------- | :-------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| **accountId**  | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                            |
| **assortment** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные товара/серии/модификации, которую представляет собой позиция<br>`+Обязательное при ответе` `+Expand` |
| **id**         | UUID                                                      | ID Тех. операции<br>`+Обязательное при ответе` `+Только для чтения`                                             |
| **quantity**   | Int                                                       | Количество товаров данного вида в позиции<br>`+Обязательное при ответе`                                         |

#### Продукты Тех. операции
Продукты Тех. операции - это список товаров/модификаций, получаемых при производстве согласно тех. карте.
Объект продукта Тех. операции содержит следующие поля:

| Название       | Тип                                                       | Описание                                                                                                        |
| -------------- | :-------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| **accountId**  | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                            |
| **assortment** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные товара/серии/модификации, которую представляет собой позиция<br>`+Обязательное при ответе` `+Expand` |
| **id**         | UUID                                                      | ID Тех. операции<br>`+Обязательное при ответе` `+Только для чтения`                                             |
| **quantity**   | Int                                                       | Количество товаров данного вида в позиции<br>`+Обязательное при ответе`                                         |

С материалами и продуктами можно работать с помощью [специальных ресурсов для управления позициями Тех. операции](../documents/#dokumenty-teh-operaciq-izmenit-teh-operaciu-materialy-teh-operacii),
а также в составе отдельной Тех. операции. При работе в составе отдельной Тех. операции,
вы можете отправлять запросы на создание отдельной Тех. операции с включенными в тело запроса
массивами материалов и продуктов Тех. операции.
Также, при работе в составе отдельной Тех. операции, можно отправлять запросы на обновление списка материалов и продуктов
с включенными в тело запроса массивами материалов и продуктов Тех. операции. Состав материалов и продуктов Тех. операции не может быть изменен.
Состав материалов и продуктов должен соответствовать тех. карте.


### Получить список Тех. операций 
Запрос всех Тех. операций на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                  |
| ----------- | :-------------------------------------------------------- | :-------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                      |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.              |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Тех. операции. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |

> Получить список Тех. операций

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processing"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Тех. операций.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/context/employee",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processing/metadata",
    "type": "processing",
    "mediaType": "application/json",
    "size": 6,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processing/metadata",
        "type": "processing",
        "mediaType": "application/json"
      },
      "id": "493ddf6b-aff9-11e6-5bed-427b00000076",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "owner": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-21 17:46:29.000",
      "name": "я1",
      "externalCode": "JhQJY8u1isyuqHyn7B6Wx3",
      "moment": "2016-11-21 17:46:00.000",
      "applicable": true,
      "printed": true,
      "published": true,
      "project": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/project/7f3a7d7a-97a1-11e6-5bed-427b0000009c",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "processingSum": 10000,
      "quantity": 1,
      "processingPlan": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
          "type": "processingplan",
          "mediaType": "application/json"
        }
      },
      "productsStore": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c61ce912-a747-11e6-5bed-427b000000a8",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "materialsStore": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "processingOrder": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingorder/c7201428-afcc-11e6-5bed-427b00000068",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
          "type": "processingorder",
          "mediaType": "application/json"
        }
      },
      "products": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/products",
          "type": "processingpositionresult",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "materials": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/materials",
          "type": "processingpositionmaterial",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      }
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/8450f4de-b002-11e6-5bed-427b00000000",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processing/metadata",
        "type": "processing",
        "mediaType": "application/json"
      },
      "id": "8450f4de-b002-11e6-5bed-427b00000000",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "owner": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-21 18:52:33.000",
      "name": "я2",
      "externalCode": "pJCPjt45j2MH-RF6joC801",
      "moment": "2016-11-21 18:51:23.000",
      "applicable": true,
      "printed": true,
      "published": true,
      "project": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/project/7f3a7d7a-97a1-11e6-5bed-427b0000009c",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "processingSum": 1000,
      "quantity": 3,
      "processingPlan": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
          "type": "processingplan",
          "mediaType": "application/json"
        }
      },
      "productsStore": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "materialsStore": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "processingOrder": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingorder/5fbf79f4-adac-11e6-5bed-427b0000006a",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
          "type": "processingorder",
          "mediaType": "application/json"
        }
      },
      "products": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/8450f4de-b002-11e6-5bed-427b00000000/products",
          "type": "processingpositionresult",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "materials": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/8450f4de-b002-11e6-5bed-427b00000000/materials",
          "type": "processingpositionmaterial",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      }
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/86e98bad-acc4-11e6-5bed-427b0000006f",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processing/metadata",
        "type": "processing",
        "mediaType": "application/json"
      },
      "id": "86e98bad-acc4-11e6-5bed-427b0000006f",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "owner": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-21 17:18:59.000",
      "name": "3",
      "description": "123",
      "externalCode": "wI2vDDTVgkW48xeO4nQx83",
      "moment": "2016-11-17 18:15:00.000",
      "applicable": true,
      "printed": true,
      "published": true,
      "project": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/project/7f3a7d7a-97a1-11e6-5bed-427b0000009c",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "processingSum": 77800,
      "quantity": 1,
      "processingPlan": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/6b4ffbf7-ac12-11e6-5bed-427b00000091",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
          "type": "processingplan",
          "mediaType": "application/json"
        }
      },
      "productsStore": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "materialsStore": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "products": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/86e98bad-acc4-11e6-5bed-427b0000006f/products",
          "type": "processingpositionresult",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "materials": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/86e98bad-acc4-11e6-5bed-427b0000006f/materials",
          "type": "processingpositionmaterial",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      }
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/bcd6e6b5-b002-11e6-5bed-427b0000000b",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processing/metadata",
        "type": "processing",
        "mediaType": "application/json"
      },
      "id": "bcd6e6b5-b002-11e6-5bed-427b0000000b",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "owner": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-21 18:57:52",
      "name": "я3",
      "externalCode": "299q4AXMhEnfW6V49y5nK3",
      "moment": "2016-11-21 18:51:00",
      "applicable": true,
      "printed": true,
      "published": true,
      "project": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/project/7f3a7d7a-97a1-11e6-5bed-427b0000009c",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "processingSum": 1000,
      "quantity": 3,
      "processingPlan": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
          "type": "processingplan",
          "mediaType": "application/json"
        }
      },
      "productsStore": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "materialsStore": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "processingOrder": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingorder/5fbf79f4-adac-11e6-5bed-427b0000006a",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
          "type": "processingorder",
          "mediaType": "application/json"
        }
      },
      "products": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/bcd6e6b5-b002-11e6-5bed-427b0000000b/products",
          "type": "processingpositionresult",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "materials": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/bcd6e6b5-b002-11e6-5bed-427b0000000b/materials",
          "type": "processingpositionmaterial",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      }
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/e0ecaec9-acdc-11e6-5bed-427b000000a5",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processing/metadata",
        "type": "processing",
        "mediaType": "application/json"
      },
      "id": "e0ecaec9-acdc-11e6-5bed-427b000000a5",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "owner": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-18 16:56:54.000",
      "name": "1234",
      "externalCode": "P81TjGDDiO5p7oUzSsvtk3",
      "moment": "2016-11-17 18:44:00.000",
      "applicable": true,
      "printed": true,
      "published": true,
      "project": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/project/7f3a7d7a-97a1-11e6-5bed-427b0000009c",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "processingSum": 0,
      "quantity": 2,
      "processingPlan": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
          "type": "processingplan",
          "mediaType": "application/json"
        }
      },
      "productsStore": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "materialsStore": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "products": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/e0ecaec9-acdc-11e6-5bed-427b000000a5/products",
          "type": "processingpositionresult",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "materials": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/e0ecaec9-acdc-11e6-5bed-427b000000a5/materials",
          "type": "processingpositionmaterial",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      }
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/e4f01df6-adb0-11e6-5bed-427b0000007a",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processing/metadata",
        "type": "processing",
        "mediaType": "application/json"
      },
      "id": "e4f01df6-adb0-11e6-5bed-427b0000007a",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "owner": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-18 20:03:14.000",
      "name": "я",
      "externalCode": "9VU4bcd7jcC3nOhk5M2Ul0",
      "moment": "2016-11-18 19:59:00.000",
      "applicable": true,
      "printed": true,
      "published": true,
      "project": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/project/7f3a7d7a-97a1-11e6-5bed-427b0000009c",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "processingSum": 10000,
      "quantity": 4,
      "processingPlan": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
          "type": "processingplan",
          "mediaType": "application/json"
        }
      },
      "productsStore": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "materialsStore": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "products": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/e4f01df6-adb0-11e6-5bed-427b0000007a/products",
          "type": "processingpositionresult",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "materials": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/e4f01df6-adb0-11e6-5bed-427b0000007a/materials",
          "type": "processingpositionmaterial",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      }
    }
  ]
}
```

### Создать Тех. операцию
Запрос на создание новой Тех. операции.
Обязательные для создания поля:

+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **processingSum** - Затраты на производство
+ **quantity** - Объем производства
+ **processingPlan** - Ссылка на Тех. операцию в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **productsStore** - Ссылка на склад для продукции в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **materialsStore** - Ссылка на склад для материалов в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **materials** - Список материалов Тех. операции в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **products** - Список готовых продуктов Тех. операции в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)

> Пример создания новой Тех.операции с телом запроса, содержащим только необходимые поля.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/processing"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "organization": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "processingSum": 10000,
            "quantity": 1,
            "processingPlan": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
                "type": "processingplan",
                "mediaType": "application/json"
              }
            },
            "productsStore": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c61ce912-a747-11e6-5bed-427b000000a8",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "materialsStore": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "products": {
              "meta": {
                "type": "processingpositionresult",
                "mediaType": "application/json",
                "size": 2,
                "limit": 1000,
                "offset": 0
              },
              "rows": [
                {
                  "quantity": 3,
                  "assortment": {
                    "meta": {
                      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/160ff7bb-acdc-11e6-5bed-427b0000008c",
                      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  }
                },
                {
                  "quantity": 2,
                  "assortment": {
                    "meta": {
                      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/18fce7bf-acdc-11e6-5bed-427b00000092",
                      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  }
                }
              ]
            },
            "materials": {
              "meta": {
                "type": "processingpositionmaterial",
                "mediaType": "application/json",
                "size": 2,
                "limit": 1000,
                "offset": 0
              },
              "rows": [
                {
                  "quantity": 4,
                  "assortment": {
                    "meta": {
                      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
                      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  }
                },
                {
                  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
                  "quantity": 1,
                  "assortment": {
                    "meta": {
                      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/1267a23f-acdc-11e6-5bed-427b00000086",
                      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  }
                }
              ]
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Тех. операции.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processing/metadata",
    "type": "processing",
    "mediaType": "application/json"
  },
  "id": "493ddf6b-aff9-11e6-5bed-427b00000076",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-21 17:46:29",
  "name": "Это технологическая операция",
  "externalCode": "JhQJY8u1isyuqHyn7B6Wx3",
  "moment": "2016-11-21 17:46:00",
  "applicable": true,
  "printed": true,
  "published": true,
  "project": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/project/7f3a7d7a-97a1-11e6-5bed-427b0000009c",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "processingSum": 10000,
  "quantity": 1,
  "processingPlan": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  },
  "productsStore": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c61ce912-a747-11e6-5bed-427b000000a8",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "materialsStore": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "processingOrder": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingorder/c7201428-afcc-11e6-5bed-427b00000068",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
      "type": "processingorder",
      "mediaType": "application/json"
    }
  },
  "products": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/products",
      "type": "processingpositionresult",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "materials": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/materials",
      "type": "processingpositionmaterial",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

> Пример создания новой Тех.операции.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/processing"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "owner": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "type": "employee",
                "mediaType": "application/json"
              }
            },
            "shared": false,
            "group": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
                "type": "group",
                "mediaType": "application/json"
              }
            },
            "updated": "2016-11-21 17:46:29",
            "name": "Это технологическая операция",
            "externalCode": "JhQJY8u1isyuqHyn7B6Wx3",
            "moment": "2016-11-21 17:46:00",
            "applicable": true,
            "project": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/project/7f3a7d7a-97a1-11e6-5bed-427b0000009c",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
                "type": "project",
                "mediaType": "application/json"
              }
            },
            "organization": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "processingSum": 10000,
            "quantity": 1,
            "processingPlan": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
                "type": "processingplan",
                "mediaType": "application/json"
              }
            },
            "productsStore": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c61ce912-a747-11e6-5bed-427b000000a8",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "materialsStore": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "processingOrder": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingorder/c7201428-afcc-11e6-5bed-427b00000068",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
                "type": "processingorder",
                "mediaType": "application/json"
              }
            },
            "products": {
              "meta": {
                "type": "processingpositionresult",
                "mediaType": "application/json",
                "size": 2,
                "limit": 1000,
                "offset": 0
              },
              "rows": [
                {
                  "quantity": 3,
                  "assortment": {
                    "meta": {
                      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/160ff7bb-acdc-11e6-5bed-427b0000008c",
                      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  }
                },
                {
                  "quantity": 2,
                  "assortment": {
                    "meta": {
                      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/18fce7bf-acdc-11e6-5bed-427b00000092",
                      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  }
                }
              ]
            },
            "materials": {
              "meta": {
                "type": "processingpositionmaterial",
                "mediaType": "application/json",
                "size": 2,
                "limit": 1000,
                "offset": 0
              },
              "rows": [
                {
                  "quantity": 4,
                  "assortment": {
                    "meta": {
                      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
                      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  }
                },
                {
                  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
                  "quantity": 1,
                  "assortment": {
                    "meta": {
                      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/1267a23f-acdc-11e6-5bed-427b00000086",
                      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  }
                }
              ]
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Тех. операции.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processing/metadata",
    "type": "processing",
    "mediaType": "application/json"
  },
  "id": "493ddf6b-aff9-11e6-5bed-427b00000076",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-21 17:46:29",
  "name": "Это технологическая операция",
  "externalCode": "JhQJY8u1isyuqHyn7B6Wx3",
  "moment": "2016-11-21 17:46:00",
  "applicable": true,
  "printed": true,
  "published": true,
  "project": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/project/7f3a7d7a-97a1-11e6-5bed-427b0000009c",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "processingSum": 10000,
  "quantity": 1,
  "processingPlan": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  },
  "productsStore": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c61ce912-a747-11e6-5bed-427b000000a8",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "materialsStore": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "processingOrder": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingorder/c7201428-afcc-11e6-5bed-427b00000068",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
      "type": "processingorder",
      "mediaType": "application/json"
    }
  },
  "products": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/products",
      "type": "processingpositionresult",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "materials": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/materials",
      "type": "processingpositionmaterial",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Массовое создание и обновление Тех.операций 
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Тех.операций.
В теле запроса нужно передать массив, содержащий JSON представления Тех.операций, которые вы хотите создать или обновить.
Обновляемые Тех.операции должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Тех.операций

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/processing"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "organization": {
                "meta": {
                  "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
                  "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "processingSum": 10000,
              "quantity": 1,
              "processingPlan": {
                "meta": {
                  "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
                  "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
                  "type": "processingplan",
                  "mediaType": "application/json"
                }
              },
              "productsStore": {
                "meta": {
                  "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c61ce912-a747-11e6-5bed-427b000000a8",
                  "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type": "store",
                  "mediaType": "application/json"
                }
              },
              "materialsStore": {
                "meta": {
                  "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
                  "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type": "store",
                  "mediaType": "application/json"
                }
              },
              "products": {
                "meta": {
                  "type": "processingpositionresult",
                  "mediaType": "application/json",
                  "size": 2,
                  "limit": 1000,
                  "offset": 0
                },
                "rows": [
                  {
                    "quantity": 3,
                    "assortment": {
                      "meta": {
                        "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/160ff7bb-acdc-11e6-5bed-427b0000008c",
                        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                        "type": "product",
                        "mediaType": "application/json"
                      }
                    }
                  },
                  {
                    "quantity": 2,
                    "assortment": {
                      "meta": {
                        "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/18fce7bf-acdc-11e6-5bed-427b00000092",
                        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                        "type": "product",
                        "mediaType": "application/json"
                      }
                    }
                  }
                ]
              },
              "materials": {
                "meta": {
                  "type": "processingpositionmaterial",
                  "mediaType": "application/json",
                  "size": 2,
                  "limit": 1000,
                  "offset": 0
                },
                "rows": [
                  {
                    "quantity": 4,
                    "assortment": {
                      "meta": {
                        "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
                        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                        "type": "product",
                        "mediaType": "application/json"
                      }
                    }
                  },
                  {
                    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
                    "quantity": 1,
                    "assortment": {
                      "meta": {
                        "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/1267a23f-acdc-11e6-5bed-427b00000086",
                        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                        "type": "product",
                        "mediaType": "application/json"
                      }
                    }
                  }
                ]
              }
            },
            {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processing/metadata",
                "type": "processing",
                "mediaType": "application/json"
              },
              "name": "000034",
              "quantity": 5,
              "processingSum": 2000
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Тех.операций.

```json
[
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processing/metadata",
      "type": "processing",
      "mediaType": "application/json"
    },
    "id": "493ddf6b-aff9-11e6-5bed-427b00000076",
    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
    "owner": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-11-21 17:46:29",
    "name": "Это технологическая операция",
    "externalCode": "JhQJY8u1isyuqHyn7B6Wx3",
    "moment": "2016-11-21 17:46:00",
    "applicable": true,
    "printed": true,
    "published": true,
    "project": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/project/7f3a7d7a-97a1-11e6-5bed-427b0000009c",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
        "type": "project",
        "mediaType": "application/json"
      }
    },
    "organization": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "processingSum": 10000,
    "quantity": 1,
    "processingPlan": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
        "type": "processingplan",
        "mediaType": "application/json"
      }
    },
    "productsStore": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c61ce912-a747-11e6-5bed-427b000000a8",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "materialsStore": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "processingOrder": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingorder/c7201428-afcc-11e6-5bed-427b00000068",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
        "type": "processingorder",
        "mediaType": "application/json"
      }
    },
    "products": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/products",
        "type": "processingpositionresult",
        "mediaType": "application/json",
        "size": 2,
        "limit": 1000,
        "offset": 0
      }
    },
    "materials": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/materials",
        "type": "processingpositionmaterial",
        "mediaType": "application/json",
        "size": 2,
        "limit": 1000,
        "offset": 0
      }
    }
  },
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processing/metadata",
      "type": "processing",
      "mediaType": "application/json"
    },
    "id": "493ddf6b-aff9-11e6-5bed-427b00000076",
    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
    "owner": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-11-21 17:46:29",
    "name": "000034",
    "externalCode": "JhQJY8u1isyuqHyn7B6Wx3",
    "moment": "2016-11-21 17:46:00",
    "applicable": true,
    "printed": true,
    "published": true,
    "project": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/project/7f3a7d7a-97a1-11e6-5bed-427b0000009c",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
        "type": "project",
        "mediaType": "application/json"
      }
    },
    "organization": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "processingSum": 2000,
    "quantity": 5,
    "processingPlan": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
        "type": "processingplan",
        "mediaType": "application/json"
      }
    },
    "productsStore": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c61ce912-a747-11e6-5bed-427b000000a8",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "materialsStore": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "processingOrder": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingorder/c7201428-afcc-11e6-5bed-427b00000068",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
        "type": "processingorder",
        "mediaType": "application/json"
      }
    },
    "products": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/products",
        "type": "processingpositionresult",
        "mediaType": "application/json",
        "size": 2,
        "limit": 1000,
        "offset": 0
      }
    },
    "materials": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/materials",
        "type": "processingpositionmaterial",
        "mediaType": "application/json",
        "size": 2,
        "limit": 1000,
        "offset": 0
      }
    }
  }
]
```

### Удалить Тех. операцию

**Параметры**

| Параметр | Описание                                                                              |
| :------- | :------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Тех. операции. |
 
> Запрос на удаление Тех. операции с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/processing/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Тех. операции.

### Массовое удаление Тех. операций

В теле запроса нужно передать массив, содержащий JSON метаданных Тех. операций, которые вы хотите удалить.


> Запрос на массовое удаление Тех. операций. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/processing/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/processing/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/processing/metadata",
            "type": "processing",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/processing/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/processing/metadata",
            "type": "processing",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Тех. операций.

```json
[
  {
    "info":"Сущность 'processing' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'processing' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
``` 

### Метаданные Тех. операций 
#### Метаданные Тех. операций 
Запрос на получение метаданных Тех. операций. Результат - объект JSON, включающий в себя:

| Параметр                       | Описание                                                                                                           |
| ------------------------------ | :----------------------------------------------------------------------------------------------------------------- |
| **meta**                       | Ссылка на метаданные Тех. операций                                                                                 |
| **attributes**                 | Массив объектов доп. полей Тех. операций в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **states**                     | Массив статусов Тех. операций                                                                                      |
| **createShared**               | создавать новые Тех. операции с меткой "Общий"                                                                     |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Тех. операций

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processing/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Тех. операций.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/processing/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/processing/metadata/attributes/c2ecd338-015e-11e6-9464-e4de0000008f",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "name": "AttributeName1",
      "type": "string",
      "required": false
    }
  ],
  "states": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/processing/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56c504-2e58-11e6-8a84-bae500000069",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Новая",
      "color": 15106326,
      "stateType": "Regular",
      "entityType": "processing"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/processing/metadata/states/fb56cae3-2e58-11e6-8a84-bae50000006a",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56cae3-2e58-11e6-8a84-bae50000006a",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Подтверждена",
      "color": 40931,
      "stateType": "Regular",
      "entityType": "processing"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/processing/metadata/states/fb56cf4f-2e58-11e6-8a84-bae50000006b",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56cf4f-2e58-11e6-8a84-bae50000006b",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Собрана",
      "color": 8767198,
      "stateType": "Regular",
      "entityType": "processing"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/processing/metadata/states/fb56d433-2e58-11e6-8a84-bae50000006c",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56d433-2e58-11e6-8a84-bae50000006c",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Отгружена",
      "color": 10774205,
      "stateType": "Regular",
      "entityType": "processing"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/processing/metadata/states/fb56d92f-2e58-11e6-8a84-bae50000006d",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56d92f-2e58-11e6-8a84-bae50000006d",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Доставлена",
      "color": 8825440,
      "stateType": "Successful",
      "entityType": "processing"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/processing/metadata/states/fb56de0a-2e58-11e6-8a84-bae50000006e",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56de0a-2e58-11e6-8a84-bae50000006e",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Возврат",
      "color": 15280409,
      "stateType": "Unsuccessful",
      "entityType": "processing"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/processing/metadata/states/fb56e2b4-2e58-11e6-8a84-bae50000006f",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56e2b4-2e58-11e6-8a84-bae50000006f",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Отменена",
      "color": 15280409,
      "stateType": "Unsuccessful",
      "entityType": "processing"
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
  "https://online.moysklad.ru/api/remap/1.2/entity/processing/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/processing/metadata/attributes/57ab884e-558b-11e6-8a84-bae500000078",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "57ab884e-558b-11e6-8a84-bae500000078",
  "name": "AttributeName1",
  "type": "productfolder",
  "required": false
}
```

### Шаблон Тех. операции 

#### Шаблон Тех. операции на основе 
Запрос на получение предзаполненной тех. операции на основе другого документа.
В результате запроса будет создан предзаполненный шаблон тех. операции на основе переданного документа.

> Запрос на получение шаблона тех. операции на основе заказа на производство.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/processing/new"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "processingOrder": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingorder/5fbf79f4-adac-11e6-5bed-427b0000006a",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
                "type": "processingorder",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненной тех. операции.

```json
{
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2016-12-05 14:35:47",
  "applicable": true,
  "printed": true,
  "published": true,
  "project": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/project/7f3a7d7a-97a1-11e6-5bed-427b0000009c",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "processingSum": 1000,
  "quantity": 1,
  "processingPlan": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  },
  "materialsStore": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "processingOrder": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingorder/5fbf79f4-adac-11e6-5bed-427b0000006a",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
      "type": "processingorder",
      "mediaType": "application/json"
    }
  },
  "products": {
    "rows": [
      {
        "quantity": 1,
        "assortment": {
          "meta": {
            "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0da78cd1-91f2-11e6-5bed-427b0000009a",
            "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json"
          }
        }
      },
      {
        "quantity": 1,
        "assortment": {
          "meta": {
            "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0da78cd1-91f2-11e6-5bed-427b0000009a",
            "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json"
          }
        }
      }
    ]
  },
  "materials": {
    "rows": [
      {
        "quantity": 1,
        "assortment": {
          "meta": {
            "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
            "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json"
          }
        }
      }
    ]
  }
}
```

> Запрос на получение шаблона тех. операции на основе тех. карты.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/processing/new"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "processingPlan": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/5fbf79f4-adac-11e6-5bed-427b0000006a",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
                "type": "processingplan",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненной тех. операции.

```json
{
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2016-12-05 14:35:47",
  "applicable": true,
  "printed": true,
  "published": true,
  "organization": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "processingSum": 1000,
  "quantity": 1,
  "processingPlan": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  },
  "materialsStore": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "productsStore": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "products": {
    "rows": [
      {
        "quantity": 1,
        "assortment": {
          "meta": {
            "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0da78cd1-91f2-11e6-5bed-427b0000009a",
            "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json"
          }
        }
      },
      {
        "quantity": 1,
        "assortment": {
          "meta": {
            "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0da78cd1-91f2-11e6-5bed-427b0000009a",
            "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json"
          }
        }
      }
    ]
  },
  "materials": {
    "rows": [
      {
        "quantity": 1,
        "assortment": {
          "meta": {
            "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
            "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json"
          }
        }
      }
    ]
  }
}
```

### Тех. операция

### Получить Тех. операцию

**Параметры**

| Параметр | Описание                                                                              |
| :------- | :------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Тех. операции. |
 
> Запрос на получение отдельной Тех. операции с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processing/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Тех. операции.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processing/metadata",
    "type": "processing",
    "mediaType": "application/json"
  },
  "id": "493ddf6b-aff9-11e6-5bed-427b00000076",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-21 17:46:29",
  "name": "я1",
  "externalCode": "JhQJY8u1isyuqHyn7B6Wx3",
  "moment": "2016-11-21 17:46:00",
  "applicable": true,
  "printed": true,
  "published": true,
  "project": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/project/7f3a7d7a-97a1-11e6-5bed-427b0000009c",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "processingSum": 10000,
  "quantity": 1,
  "processingPlan": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  },
  "productsStore": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c61ce912-a747-11e6-5bed-427b000000a8",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "materialsStore": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "processingOrder": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingorder/c7201428-afcc-11e6-5bed-427b00000068",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
      "type": "processingorder",
      "mediaType": "application/json"
    }
  },
  "products": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/products",
      "type": "processingpositionresult",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "materials": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/materials",
      "type": "processingpositionmaterial",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Изменить Тех. операцию 
Запрос на обновление Тех. операции с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Тех. операции, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Тех. операции](../documents/#dokumenty-teh-operaciq).

**Параметры**

| Параметр | Описание                                                                              |
| :------- | :------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Тех. операции. |

> Пример запроса на обновление отдельной Тех. операции.

```shell
  curl -X PUt
    "https://online.moysklad.ru/api/remap/1.2/entity/processing/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "000034",
            "quantity": 5,
            "processingSum": 2000
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Тех. операции.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processing/metadata",
    "type": "processing",
    "mediaType": "application/json"
  },
  "id": "493ddf6b-aff9-11e6-5bed-427b00000076",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-21 17:46:29",
  "name": "000034",
  "externalCode": "JhQJY8u1isyuqHyn7B6Wx3",
  "moment": "2016-11-21 17:46:00",
  "applicable": true,
  "printed": true,
  "published": true,
  "project": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/project/7f3a7d7a-97a1-11e6-5bed-427b0000009c",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "processingSum": 2000,
  "quantity": 5,
  "processingPlan": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  },
  "productsStore": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c61ce912-a747-11e6-5bed-427b000000a8",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "materialsStore": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "processingOrder": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingorder/c7201428-afcc-11e6-5bed-427b00000068",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
      "type": "processingorder",
      "mediaType": "application/json"
    }
  },
  "products": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/products",
      "type": "processingpositionresult",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "materials": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/materials",
      "type": "processingpositionmaterial",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

#### Материалы Тех. операции 
Отдельный ресурс для управления материалами Тех. операции. С его помощью вы можете управлять материалами большого документа, количество материалов в котором превышает лимит на количество материалов, сохраняемых вместе с документом. Этот лимит равен 1000. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](../#mojsklad-json-api-obschie-swedeniq-rabota-s-poziciqmi-dokumentow).

### Получить материалы Тех. операции 
Запрос на получение списка всех материалов данной Тех. операции.

| Название    | Тип                                                       | Описание                                                            |
| ----------- | :-------------------------------------------------------- | :------------------------------------------------------------------ |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                                |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                        |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой материалы Тех. операции. |

**Параметры**

| Параметр   | Описание                                                                                                                               |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Тех. операции.                                                  |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить материалы Тех. операции

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processing/7944ef04-f831-11e5-7a69-971500188b19/materials"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка материалов отдельной Тех. операции.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/context/employee",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/materials",
    "type": "processingpositionmaterial",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/materials/493de99a-aff9-11e6-5bed-427b00000077",
        "type": "processingpositionmaterial",
        "mediaType": "application/json"
      },
      "id": "493de99a-aff9-11e6-5bed-427b00000077",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "quantity": 4,
      "assortment": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        }
      }
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/materials/493defc4-aff9-11e6-5bed-427b00000078",
        "type": "processingpositionmaterial",
        "mediaType": "application/json"
      },
      "id": "493defc4-aff9-11e6-5bed-427b00000078",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "quantity": 1,
      "assortment": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/1267a23f-acdc-11e6-5bed-427b00000086",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        }
      }
    }
  ]
}
```

### Материал Тех. операции

### Получить материал

**Параметры**

| Параметр       | Описание                                                                                      |
| :------------- | :-------------------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Тех. операции.         |
| **positionID** | `string` (required) *Example: 9560e3e3-9609-11e6-8af5-581e00000008* id позиции Тех. операции. |
 
> Запрос на получение отдельного материала Тех. операции с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processing/d72b4281-b000-11e6-8af5-581e00000074/materials/9560e3e3-9609-11e6-8af5-581e00000008"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного материала Тех. операции.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/c7201428-afcc-11e6-5bed-427b00000068/materials/c7218ccd-afcc-11e6-5bed-427b00000069",
    "type": "processingpositionmaterial",
    "mediaType": "application/json"
  },
  "id": "c7218ccd-afcc-11e6-5bed-427b00000069",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "quantity": 45,
  "assortment": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json"
    }
  }
}
```

### Изменить материал 
Запрос на обновление отдельного материала Тех. операции. Для обновления материала нет каких-либо
обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

| Параметр       | Описание                                                                                      |
| :------------- | :-------------------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Тех. операции.         |
| **positionID** | `string` (required) *Example: 9560e3e3-9609-11e6-8af5-581e00000008* id позиции Тех. операции. |

> Пример запроса на обновление отдельного материала в Тех. операции.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/processing/d72b4281-b000-11e6-8af5-581e00000074/materials/9560e3e3-9609-11e6-8af5-581e00000008"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "meta": {
              "href": "https://online.moysklad.ru/api/remap/1.2/entity/processing/34efe2ee-015e-11e6-9464-e4de0000006b/materials/34f6344f-015e-11e6-9464-e4de0000006c",
              "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/processing/metadata",
              "type": "processingpositionmaterial",
              "mediaType": "application/json"
            },
            "id": "34f6344f-015e-11e6-9464-e4de0000006c",
            "quantity": 111,
            "assortment": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a",
                "type": "product",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного материала Тех. операции.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/processing/34efe2ee-015e-11e6-9464-e4de0000006b/materials/34f6344f-015e-11e6-9464-e4de0000006c",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/processing/metadata",
    "type": "processingpositionmaterial",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "quantity": 111,
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json"
    }
  }
}
```

#### Продукты Тех. операции 
Отдельный ресурс для управления продуктами Тех. операции. С его помощью вы можете управлять продуктами большого документа, количество продуктов в котором превышает лимит на количество продуктов, сохраняемых вместе с документом. Этот лимит равен 1000. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](../#mojsklad-json-api-obschie-swedeniq-rabota-s-poziciqmi-dokumentow).

### Получить продукты Тех. операции 
Запрос на получение списка всех продуктов данной Тех. операции.

| Название    | Тип                                                       | Описание                                                           |
| ----------- | :-------------------------------------------------------- | :----------------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                               |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                       |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой продукты Тех. операции. |

**Параметры**

| Параметр   | Описание                                                                                                                               |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Тех. операции.                                                  |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить продукты Тех. операции

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processing/7944ef04-f831-11e5-7a69-971500188b19/products"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка продуктов отдельной Тех. операции.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/context/employee",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/products",
    "type": "processingpositionresult",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/products/493de99a-aff9-11e6-5bed-427b00000077",
        "type": "processingpositionresult",
        "mediaType": "application/json"
      },
      "id": "493de99a-aff9-11e6-5bed-427b00000077",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "quantity": 4,
      "assortment": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        }
      }
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/products/493defc4-aff9-11e6-5bed-427b00000078",
        "type": "processingpositionresult",
        "mediaType": "application/json"
      },
      "id": "493defc4-aff9-11e6-5bed-427b00000078",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "quantity": 1,
      "assortment": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/1267a23f-acdc-11e6-5bed-427b00000086",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        }
      }
    }
  ]
}
```

### Продукт Тех. операции

### Получить продукт

**Параметры**

| Параметр       | Описание                                                                                       |
| :------------- | :--------------------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Тех. операции.          |
| **positionID** | `string` (required) *Example: 9560e3e3-9609-11e6-8af5-581e00000008* id продукта Тех. операции. |
 
> Запрос на получение отдельного продукта Тех. операции с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processing/d72b4281-b000-11e6-8af5-581e00000074/products/9560e3e3-9609-11e6-8af5-581e00000008"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного продукта Тех. операции.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processing/c7201428-afcc-11e6-5bed-427b00000068/products/c7218ccd-afcc-11e6-5bed-427b00000069",
    "type": "processingpositionresult",
    "mediaType": "application/json"
  },
  "id": "c7218ccd-afcc-11e6-5bed-427b00000069",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "quantity": 45,
  "assortment": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json"
    }
  }
}
```

### Изменить продукт 
Запрос на обновление отдельного продукта Тех. операции. Для обновления продукта нет каких-либо
обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

| Параметр       | Описание                                                                                       |
| :------------- | :--------------------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Тех. операции.          |
| **positionID** | `string` (required) *Example: 9560e3e3-9609-11e6-8af5-581e00000008* id продукта Тех. операции. |

> Пример запроса на обновление отдельного продукта в Тех. операции.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/processing/d72b4281-b000-11e6-8af5-581e00000074/products/9560e3e3-9609-11e6-8af5-581e00000008"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "meta": {
              "href": "https://online.moysklad.ru/api/remap/1.2/entity/processing/34efe2ee-015e-11e6-9464-e4de0000006b/products/34f6344f-015e-11e6-9464-e4de0000006c",
              "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/processing/metadata",
              "type": "processingpositionresult",
              "mediaType": "application/json"
            },
            "id": "34f6344f-015e-11e6-9464-e4de0000006c",
            "quantity": 111,
            "assortment": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a",
                "type": "product",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного продукта Тех. операции.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/processing/34efe2ee-015e-11e6-9464-e4de0000006b/products/34f6344f-015e-11e6-9464-e4de0000006c",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/processing/metadata",
    "type": "processingpositionresult",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "quantity": 111,
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json"
    }
  }
}
```
