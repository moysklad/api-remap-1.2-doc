## Техоперация
Средствами JSON API можно создавать и обновлять сведения о Техоперациях, запрашивать списки Техопераций и сведения по отдельным Техоперациям. Позициями Техопераций можно управлять как в составе отдельной Техоперации, так и отдельно - с помощью специальных ресурсов для управления материалами и продуктами Техоперации. Кодом сущности для Техоперации в составе JSON API является ключевое слово **processing**. Больше о Техоперациях и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по
[этой ссылке](https://support.moysklad.ru/hc/ru/articles/203325613-%D0%A1%D0%B1%D0%BE%D1%80%D0%BE%D1%87%D0%BD%D1%8B%D0%B5-%D0%B8-%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B8).
### Техоперации 
#### Атрибуты сущности

| Название                | Тип                                                        | Фильтрация                                                                                                                                        | Описание                                                                                                                                      |
| ----------------------- |:-----------------------------------------------------------| :------------------------------------------------------------------------------------------------------------------------------------------------ |:----------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**           | UUID                                                       | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                          |
| **applicable**          | Boolean                                                    | `=` `!=`                                                                                                                                          | Отметка о проведении<br>`+Обязательное при ответе`                                                                                            |
| **attributes**          | Array(Object)                                              | [Операторы доп. полей](#/general#4-filtraciya-po-dopolnitelnym-polyam) | Коллекция метаданных доп. полей. [Поля объекта](#/general#3-rabota-s-dopolnitelnymi-polyami)                       |
| **code**                | String(255)                                                | `=` `!=` `~` `~=` `=~`                                                                                                                            | Код Техоперации                                                                                                                               |
| **created**             | DateTime                                                   | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата создания<br>`+Обязательное при ответе` `+Только для чтения`                                                                              |
| **deleted**             | DateTime                                                   | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего удаления Техоперации<br>`+Только для чтения`                                                                                |
| **description**         | String(4096)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Комментарий Техоперации                                                                                                                       |
| **externalCode**        | String(255)                                                | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код Техоперации<br>`+Обязательное при ответе`                                                                                         |
| **files**               | MetaArray                                                  |                                                                                                                                                   | Метаданные массива [Файлов](#/dictionaries/files#2-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand` |
| **group**               | [Meta](#/general#3-metadannye)  | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                      |
| **id**                  | UUID                                                       | `=` `!=`                                                                                                                                          | ID Техоперации<br>`+Обязательное при ответе` `+Только для чтения`                                                                             |
| **materials**           | Array(Object)                                              |                                                                                                                                                   | Список Метаданных материалов Техоперации<br>`+Обязательное при ответе` `+Expand`                                                              |
| **materialsStore**      | [Meta](#/general#3-metadannye)  |                                                                                                                                                   | Метаданные склада для материалов<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                           |
| **meta**                | [Meta](#/general#3-metadannye)  |                                                                                                                                                   | Метаданные Техоперации<br>`+Обязательное при ответе` `+Только для чтения`                                                                     |
| **moment**              | DateTime                                                   | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата документа<br>`+Обязательное при ответе`                                                                                                  |
| **name**                | String(255)                                                | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование Техоперации<br>`+Обязательное при ответе`                                                                                        |
| **organization**        | [Meta](#/general#3-metadannye)  | `=` `!=`                                                                                                                                          | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                          |
| **organizationAccount** | [Meta](#/general#3-metadannye)  |                                                                                                                                                   | Метаданные счета юрлица<br>`+Expand`                                                                                                          |
| **owner**               | [Meta](#/general#3-metadannye)  | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Expand`                                                                                                             |
| **printed**             | Boolean                                                    | `=` `!=`                                                                                                                                          | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                      |
| **processingPlan**      | [Meta](#/general#3-metadannye)  |                                                                                                                                                   | Метаданные Техкарты<br>`+Expand`                                                                                                              |
| **processingSum**       | Int                                                        |                                                                                                                                                   | Затраты на производство за единицу объема производства<br>`+Обязательное при ответе`                                                          |
| **products**            | Array(Object)                                              |                                                                                                                                                   | Список Метаданных готовых продуктов Техоперации<br>`+Обязательное при ответе` `+Expand`                                                       |
| **productsStore**       | [Meta](#/general#3-metadannye)  |                                                                                                                                                   | Метаданные склада для продукции<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                            |
| **project**             | [Meta](#/general#3-metadannye)  | `=` `!=`                                                                                                                                          | Метаданные проекта<br>`+Expand`                                                                                                               |
| **published**           | Boolean                                                    | `=` `!=`                                                                                                                                          | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                    |
| **quantity**            | Float                                                      | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Объем производства<br>`+Обязательное при ответе`                                                                                              |
| **shared**              | Boolean                                                    | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе`                                                                                                    |
| **state**               | [Meta](#/general#3-metadannye)  | `=` `!=`                                                                                                                                          | Метаданные статуса Техоперации<br>`+Expand`                                                                                                   |
| **syncId**              | UUID                                                       | `=` `!=`                                                                                                                                          | ID синхронизации. После заполнения недоступен для изменения<br>`+Только для чтения`                                                           |
| **updated**             | DateTime                                                   | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления Техоперации<br>`+Обязательное при ответе` `+Только для чтения`                                                   |

#### Связи с другими документами

| Название                       | Описание                                                                                                  |
| ------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| **processingOrder**            | Ссылка на заказ на производство в формате [Метаданных](#/general#3-metadannye) |

#### Материалы Техоперации
Материалы Техоперации - это список товаров/модификаций, используемых для производства готовых продуктов.
Объект материала Техоперации содержит следующие поля:

| Название       | Тип                                                       | Описание                                                                                                        |
| -------------- |:----------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------|
| **accountId**  | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                            |
| **assortment** | [Meta](#/general#3-metadannye) | Метаданные товара/серии/модификации, которую представляет собой позиция<br>`+Обязательное при ответе` `+Expand` |
| **id**         | UUID                                                      | ID Техоперации<br>`+Обязательное при ответе` `+Только для чтения`                                               |
| **quantity**   | Float                                                     | Количество товаров данного вида в позиции<br>`+Обязательное при ответе`                                         |

#### Продукты Техоперации
Продукты Техоперации - это список товаров/модификаций, получаемых при производстве.
Объект продукта Техоперации содержит следующие поля:

| Название       | Тип                                                       | Описание                                                                                                        |
| -------------- |:----------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------|
| **accountId**  | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                            |
| **assortment** | [Meta](#/general#3-metadannye) | Метаданные товара/серии/модификации, которую представляет собой позиция<br>`+Обязательное при ответе` `+Expand` |
| **id**         | UUID                                                      | ID Техоперации<br>`+Обязательное при ответе` `+Только для чтения`                                               |
| **quantity**   | Float                                                     | Количество товаров данного вида в позиции<br>`+Обязательное при ответе`                                         |

С материалами и продуктами можно работать с помощью [специальных ресурсов для управления позициями Техоперации](#/documents/processing#4-materialy-tehoperacii),
а также в составе отдельной Техоперации. При работе в составе отдельной Техоперации,
вы можете отправлять запросы на создание отдельной Техоперации с включенными в тело запроса
массивами материалов и продуктов Техоперации.
Также, при работе в составе отдельной Техоперации, можно отправлять запросы на обновление списка материалов и продуктов
с включенными в тело запроса массивами материалов и продуктов Техоперации. 

#### Особенности поведения Техоперации
Поля **quantity**, **processingSum**, **products**, **materials** тесно связаны с техкартой. 
Техоперация должна состоять как минимум из одной позиции в готовой продукции. Для этого необходимо привязать техкарту и готовая продукция будет проставлена автоматически из техкарты, 
либо самостоятельно передать готовую продукцию в поле **products**.


### Получить список Техопераций 
Запрос всех Техопераций на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                  |
| ----------- | :-------------------------------------------------------- |:----------------------------------------------------------|
| **meta**    | [Meta](#/general#3-metadannye) | Метаданные о выдаче,                                      |
| **context** | [Meta](#/general#3-metadannye) | Метаданные о сотруднике, выполнившем запрос.              |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Техоперации.   |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |

> Получить список Техопераций

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/processing" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Техопераций.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
    "type": "processing",
    "mediaType": "application/json",
    "size": 6,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
        "type": "processing",
        "mediaType": "application/json"
      },
      "id": "493ddf6b-aff9-11e6-5bed-427b00000076",
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
      "updated": "2016-11-21 17:46:29.000",
      "name": "я1",
      "externalCode": "JhQJY8u1isyuqHyn7B6Wx3",
      "moment": "2016-11-21 17:46:00.000",
      "applicable": true,
      "printed": true,
      "published": true,
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
      "processingSum": 10000,
      "quantity": 1,
      "processingPlan": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
          "type": "processingplan",
          "mediaType": "application/json"
        }
      },
      "productsStore": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/c61ce912-a747-11e6-5bed-427b000000a8",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "materialsStore": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "processingOrder": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c7201428-afcc-11e6-5bed-427b00000068",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
          "type": "processingorder",
          "mediaType": "application/json"
        }
      },
      "products": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/products",
          "type": "processingpositionresult",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "materials": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/materials",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/8450f4de-b002-11e6-5bed-427b00000000",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
        "type": "processing",
        "mediaType": "application/json"
      },
      "id": "8450f4de-b002-11e6-5bed-427b00000000",
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
      "updated": "2016-11-21 18:52:33.000",
      "name": "я2",
      "externalCode": "pJCPjt45j2MH-RF6joC801",
      "moment": "2016-11-21 18:51:23.000",
      "applicable": true,
      "printed": true,
      "published": true,
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
      "processingSum": 1000,
      "quantity": 3,
      "processingPlan": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
          "type": "processingplan",
          "mediaType": "application/json"
        }
      },
      "productsStore": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "materialsStore": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "processingOrder": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/5fbf79f4-adac-11e6-5bed-427b0000006a",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
          "type": "processingorder",
          "mediaType": "application/json"
        }
      },
      "products": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/8450f4de-b002-11e6-5bed-427b00000000/products",
          "type": "processingpositionresult",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "materials": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/8450f4de-b002-11e6-5bed-427b00000000/materials",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/86e98bad-acc4-11e6-5bed-427b0000006f",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
        "type": "processing",
        "mediaType": "application/json"
      },
      "id": "86e98bad-acc4-11e6-5bed-427b0000006f",
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
      "processingSum": 77800,
      "quantity": 1,
      "processingPlan": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/6b4ffbf7-ac12-11e6-5bed-427b00000091",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
          "type": "processingplan",
          "mediaType": "application/json"
        }
      },
      "productsStore": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "materialsStore": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "products": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/86e98bad-acc4-11e6-5bed-427b0000006f/products",
          "type": "processingpositionresult",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "materials": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/86e98bad-acc4-11e6-5bed-427b0000006f/materials",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/bcd6e6b5-b002-11e6-5bed-427b0000000b",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
        "type": "processing",
        "mediaType": "application/json"
      },
      "id": "bcd6e6b5-b002-11e6-5bed-427b0000000b",
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
      "updated": "2016-11-21 18:57:52",
      "name": "я3",
      "externalCode": "299q4AXMhEnfW6V49y5nK3",
      "moment": "2016-11-21 18:51:00",
      "applicable": true,
      "printed": true,
      "published": true,
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
      "processingSum": 1000,
      "quantity": 3,
      "processingPlan": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
          "type": "processingplan",
          "mediaType": "application/json"
        }
      },
      "productsStore": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "materialsStore": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "processingOrder": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/5fbf79f4-adac-11e6-5bed-427b0000006a",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
          "type": "processingorder",
          "mediaType": "application/json"
        }
      },
      "products": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/bcd6e6b5-b002-11e6-5bed-427b0000000b/products",
          "type": "processingpositionresult",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "materials": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/bcd6e6b5-b002-11e6-5bed-427b0000000b/materials",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/e0ecaec9-acdc-11e6-5bed-427b000000a5",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
        "type": "processing",
        "mediaType": "application/json"
      },
      "id": "e0ecaec9-acdc-11e6-5bed-427b000000a5",
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
      "updated": "2016-11-18 16:56:54.000",
      "name": "1234",
      "externalCode": "P81TjGDDiO5p7oUzSsvtk3",
      "moment": "2016-11-17 18:44:00.000",
      "applicable": true,
      "printed": true,
      "published": true,
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
      "processingSum": 0,
      "quantity": 2,
      "processingPlan": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
          "type": "processingplan",
          "mediaType": "application/json"
        }
      },
      "productsStore": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "materialsStore": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "products": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/e0ecaec9-acdc-11e6-5bed-427b000000a5/products",
          "type": "processingpositionresult",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "materials": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/e0ecaec9-acdc-11e6-5bed-427b000000a5/materials",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/e4f01df6-adb0-11e6-5bed-427b0000007a",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
        "type": "processing",
        "mediaType": "application/json"
      },
      "id": "e4f01df6-adb0-11e6-5bed-427b0000007a",
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
      "updated": "2016-11-18 20:03:14.000",
      "name": "я",
      "externalCode": "9VU4bcd7jcC3nOhk5M2Ul0",
      "moment": "2016-11-18 19:59:00.000",
      "applicable": true,
      "printed": true,
      "published": true,
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
      "processingSum": 10000,
      "quantity": 4,
      "processingPlan": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
          "type": "processingplan",
          "mediaType": "application/json"
        }
      },
      "productsStore": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "materialsStore": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "products": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/e4f01df6-adb0-11e6-5bed-427b0000007a/products",
          "type": "processingpositionresult",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "materials": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/e4f01df6-adb0-11e6-5bed-427b0000007a/materials",
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

### Создать Техоперацию

#### Особенности поведения при создании техоперации с привязкой техкарты
Если в теле запроса передается техкарта и отсутствуют поля **products**, **materials**, **processingSum**, то они будут созданы на основании техкарты.
Если не передается поле **quantity**, то будет выставлено дефолтное значение равное 1. При ином значении количество готовой продукции и материалов техоперации будут пересчитаны кратно передаваемому значению.
Если необходимо создать техоперацию с привязкой техкарты, но отличной продукцией или материалами, то нужно передать заполненные поля **products**, **materials**. 
Если необходимо указать пустые материалы, но они присутствуют в техкарте, то следует явно передать пустое значение для поля **materials**, в противном случае при не указанном поле оно будет взято из привязываемой техкарты.

Обязательные для создания поля с привязкой техкарты:

+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](#/general#3-metadannye)
+ **productsStore** - Ссылка на склад для продукции в формате [Метаданных](#/general#3-metadannye)
+ **materialsStore** - Ссылка на склад для материалов в формате [Метаданных](#/general#3-metadannye)
+ **processingPlan** - Ссылка на Техоперацию в формате [Метаданных](#/general#3-metadannye)

#### Особенности поведения при создании техоперации без техкарты
В этом случае в теле запроса обязательно необходимо передать поля **products** и **processingSum**. Если не передается поле **quantity**, то будет выставлено дефолтное значение равное 1.

Обязательные для создания поля без привязки техкарты:

+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](#/general#3-metadannye)
+ **productsStore** - Ссылка на склад для продукции в формате [Метаданных](#/general#3-metadannye)
+ **materialsStore** - Ссылка на склад для материалов в формате [Метаданных](#/general#3-metadannye)
+ **products** - Список готовых продуктов Техоперации в формате [Метаданных](#/general#3-metadannye)
+ **processingSum** - Затраты на производство за единицу объема производства

> Пример создания новой Техоперации с привязкой техкарты с телом запроса, содержащим только необходимые поля.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/processing" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "organization": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
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
            "productsStore": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/c61ce912-a747-11e6-5bed-427b000000a8",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "materialsStore": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Техоперации.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
    "type": "processing",
    "mediaType": "application/json"
  },
  "id": "493ddf6b-aff9-11e6-5bed-427b00000076",
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
  "updated": "2016-11-21 17:46:29",
  "name": "Это технологическая операция",
  "externalCode": "JhQJY8u1isyuqHyn7B6Wx3",
  "moment": "2016-11-21 17:46:00",
  "applicable": true,
  "printed": true,
  "published": true,
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
  "processingSum": 10000,
  "quantity": 1,
  "processingPlan": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  },
  "productsStore": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/c61ce912-a747-11e6-5bed-427b000000a8",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "materialsStore": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "processingOrder": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c7201428-afcc-11e6-5bed-427b00000068",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
      "type": "processingorder",
      "mediaType": "application/json"
    }
  },
  "products": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/products",
      "type": "processingpositionresult",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "materials": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/materials",
      "type": "processingpositionmaterial",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

> Пример создания новой Техоперации без привязки техкарты с телом запроса, содержащим только необходимые поля.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/processing" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "organization": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/1337760f-df4e-11ed-ac12-000c000000c4",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=1337760f-df4e-11ed-ac12-000c000000c4"
              }
            },
            "processingSum": 50.0,
            "productsStore": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/133ac518-df4e-11ed-ac12-000c000000c6",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=133ac518-df4e-11ed-ac12-000c000000c6"
              }
            },
            "materialsStore": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/133ac518-df4e-11ed-ac12-000c000000c6",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=133ac518-df4e-11ed-ac12-000c000000c6"
              }
            },
            "products": [
              {
                "quantity": 10.0,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/7a707724-df4e-11ed-ac12-000c00000146",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=7a6fd2ab-df4e-11ed-ac12-000c00000144"
                  }
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Техоперации.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/2a82cb9c-e3ea-11ed-ac12-000b00000009",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
    "type": "processing",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#processing/edit?id=2a82cb9c-e3ea-11ed-ac12-000b00000009"
  },
  "id": "2a82cb9c-e3ea-11ed-ac12-000b00000009",
  "accountId": "12ddf6da-df4e-11ed-ac12-000e0000000a",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/2b009031-df4e-11ed-ac12-000c0000012a",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=2b009031-df4e-11ed-ac12-000c0000012a"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/12ded31d-df4e-11ed-ac12-000e0000000b",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2023-04-26 07:23:59.238",
  "name": "00001",
  "externalCode": "HnOI29bIhLywTHKzatMJX1",
  "moment": "2023-04-26 07:23:00.000",
  "applicable": true,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/1337760f-df4e-11ed-ac12-000c000000c4",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=1337760f-df4e-11ed-ac12-000c000000c4"
    }
  },
  "created": "2023-04-26 07:23:59.302",
  "printed": false,
  "published": false,
  "files": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/2a82cb9c-e3ea-11ed-ac12-000b00000009/files",
      "type": "files",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "processingSum": 50.0,
  "quantity": 1.0,
  "productsStore": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/133ac518-df4e-11ed-ac12-000c000000c6",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=133ac518-df4e-11ed-ac12-000c000000c6"
    }
  },
  "materialsStore": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/133ac518-df4e-11ed-ac12-000c000000c6",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=133ac518-df4e-11ed-ac12-000c000000c6"
    }
  },
  "products": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/2a82cb9c-e3ea-11ed-ac12-000b00000009/products",
      "type": "processingpositionresult",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  }
}
```


> Пример создания новой Техоперации с привязкой техкарты с отличными от техкарты материалами и продуктами.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/processing" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "processingPlan": {
              "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/033b3bee-e35e-11ed-ac12-000b0000000f",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
                  "type": "processingplan",
                  "mediaType": "application/json",
                  "uuidHref": "https://online.moysklad.ru/app/#processingplan/edit?id=033b3bee-e35e-11ed-ac12-000b0000000f"
                }
            },
            "processingSum": 150.0,
            "products": [
              {
                "quantity": 10.0,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/7a707724-df4e-11ed-ac12-000c00000146",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=7a6fd2ab-df4e-11ed-ac12-000c00000144"
                  }
                }
              }
            ],
            "materials": [
              {
                "quantity": 20.0,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/7a707724-df4e-11ed-ac12-000c00000146",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=7a6fd2ab-df4e-11ed-ac12-000c00000144"
                  }
                }
              }
            ],
            "quantity": 3.0,
            "organization": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/1337760f-df4e-11ed-ac12-000c000000c4",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=1337760f-df4e-11ed-ac12-000c000000c4"
              }
            },
            "productsStore": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/133ac518-df4e-11ed-ac12-000c000000c6",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=133ac518-df4e-11ed-ac12-000c000000c6"
              }
            },
            "materialsStore": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/133ac518-df4e-11ed-ac12-000c000000c6",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=133ac518-df4e-11ed-ac12-000c000000c6"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Техоперации.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/633dee04-e3eb-11ed-ac12-000b00000012",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
    "type": "processing",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#processing/edit?id=633dee04-e3eb-11ed-ac12-000b00000012"
  },
  "id": "633dee04-e3eb-11ed-ac12-000b00000012",
  "accountId": "12ddf6da-df4e-11ed-ac12-000e0000000a",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/2b009031-df4e-11ed-ac12-000c0000012a",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=2b009031-df4e-11ed-ac12-000c0000012a"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/12ded31d-df4e-11ed-ac12-000e0000000b",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2023-04-26 07:32:43.875",
  "name": "00002",
  "externalCode": "l11G2XzQgqd99vv25dxsc2",
  "moment": "2023-04-26 07:32:00.000",
  "applicable": true,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/1337760f-df4e-11ed-ac12-000c000000c4",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=1337760f-df4e-11ed-ac12-000c000000c4"
    }
  },
  "created": "2023-04-26 07:32:43.972",
  "printed": false,
  "published": false,
  "files": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/633dee04-e3eb-11ed-ac12-000b00000012/files",
      "type": "files",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "processingSum": 150.0,
  "quantity": 3.0,
  "processingPlan": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/033b3bee-e35e-11ed-ac12-000b0000000f",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#processingplan/edit?id=033b3bee-e35e-11ed-ac12-000b0000000f"
    }
  },
  "productsStore": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/133ac518-df4e-11ed-ac12-000c000000c6",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=133ac518-df4e-11ed-ac12-000c000000c6"
    }
  },
  "materialsStore": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/133ac518-df4e-11ed-ac12-000c000000c6",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=133ac518-df4e-11ed-ac12-000c000000c6"
    }
  },
  "products": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/633dee04-e3eb-11ed-ac12-000b00000012/products",
      "type": "processingpositionresult",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "materials": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/633dee04-e3eb-11ed-ac12-000b00000012/materials",
      "type": "processingpositionmaterial",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Массовое создание и обновление Техопераций 
[Массовое создание и обновление](#/general#3-sozdanie-i-obnovlenie-neskolkih-obuektov) Техопераций.
В теле запроса нужно передать массив, содержащий JSON представления Техопераций, которые вы хотите создать или обновить.
Обновляемые Техоперации должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Техопераций

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/processing" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '[
            {
              "organization": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "processingSum": 10000,
              "quantity": 1,
              "processingPlan": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
                  "type": "processingplan",
                  "mediaType": "application/json"
                }
              },
              "productsStore": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/c61ce912-a747-11e6-5bed-427b000000a8",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type": "store",
                  "mediaType": "application/json"
                }
              },
              "materialsStore": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
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
                        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/160ff7bb-acdc-11e6-5bed-427b0000008c",
                        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                        "type": "product",
                        "mediaType": "application/json"
                      }
                    }
                  },
                  {
                    "quantity": 2,
                    "assortment": {
                      "meta": {
                        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/18fce7bf-acdc-11e6-5bed-427b00000092",
                        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
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
                        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
                        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
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
                        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/1267a23f-acdc-11e6-5bed-427b00000086",
                        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
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
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
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
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Техопераций.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
      "type": "processing",
      "mediaType": "application/json"
    },
    "id": "493ddf6b-aff9-11e6-5bed-427b00000076",
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
    "updated": "2016-11-21 17:46:29",
    "name": "Это технологическая операция",
    "externalCode": "JhQJY8u1isyuqHyn7B6Wx3",
    "moment": "2016-11-21 17:46:00",
    "applicable": true,
    "printed": true,
    "published": true,
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
    "processingSum": 10000,
    "quantity": 1,
    "processingPlan": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
        "type": "processingplan",
        "mediaType": "application/json"
      }
    },
    "productsStore": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/c61ce912-a747-11e6-5bed-427b000000a8",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "materialsStore": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "processingOrder": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c7201428-afcc-11e6-5bed-427b00000068",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
        "type": "processingorder",
        "mediaType": "application/json"
      }
    },
    "products": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/products",
        "type": "processingpositionresult",
        "mediaType": "application/json",
        "size": 2,
        "limit": 1000,
        "offset": 0
      }
    },
    "materials": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/materials",
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
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
      "type": "processing",
      "mediaType": "application/json"
    },
    "id": "493ddf6b-aff9-11e6-5bed-427b00000076",
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
    "updated": "2016-11-21 17:46:29",
    "name": "000034",
    "externalCode": "JhQJY8u1isyuqHyn7B6Wx3",
    "moment": "2016-11-21 17:46:00",
    "applicable": true,
    "printed": true,
    "published": true,
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
    "processingSum": 2000,
    "quantity": 5,
    "processingPlan": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
        "type": "processingplan",
        "mediaType": "application/json"
      }
    },
    "productsStore": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/c61ce912-a747-11e6-5bed-427b000000a8",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "materialsStore": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "processingOrder": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c7201428-afcc-11e6-5bed-427b00000068",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
        "type": "processingorder",
        "mediaType": "application/json"
      }
    },
    "products": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/products",
        "type": "processingpositionresult",
        "mediaType": "application/json",
        "size": 2,
        "limit": 1000,
        "offset": 0
      }
    },
    "materials": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/materials",
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

### Удалить Техоперацию

**Параметры**

| Параметр | Описание                                                                              |
| :------- |:--------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Техоперации.   |
 
> Запрос на удаление Техоперации с указанным id.

```shell
curl --compressed -X DELETE \
  "https://api.moysklad.ru/api/remap/1.2/entity/processing/7944ef04-f831-11e5-7a69-971500188b19" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление Техоперации.

### Массовое удаление Техопераций

В теле запроса нужно передать массив, содержащий JSON метаданных Техопераций, которые вы хотите удалить.


> Запрос на массовое удаление Техопераций. 

```shell
curl --compressed -X POST \
  "https://api.moysklad.ru/api/remap/1.2/entity/processing/delete" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -d '[
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/7944ef04-f831-11e5-7a69-971500188b1",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
                "type": "processing",
                "mediaType": "application/json"
            }
        },
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/7944ef04-f831-11e5-7a69-971500188b2",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
                "type": "processing",
                "mediaType": "application/json"
            }
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Техопераций.

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

### Метаданные Техопераций 
Запрос на получение метаданных Техопераций. Результат - объект JSON, включающий в себя:

| Параметр                       | Описание                                                                                                         |
| ------------------------------ |:-----------------------------------------------------------------------------------------------------------------|
| **meta**                       | Ссылка на метаданные Техопераций                                                                                 |
| **attributes**                 | Массив объектов доп. полей Техопераций в формате [Метаданных](#/general#3-metadannye) |
| **states**                     | Массив статусов Техопераций                                                                                      |
| **createShared**               | создавать новые Техоперации с меткой "Общий"                                                                     |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](#/general#3-rabota-s-dopolnitelnymi-polyami).

> Метаданные Техопераций

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Техопераций.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata/attributes/c2ecd338-015e-11e6-9464-e4de0000008f",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata/states/fb56cae3-2e58-11e6-8a84-bae50000006a",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata/states/fb56cf4f-2e58-11e6-8a84-bae50000006b",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata/states/fb56d433-2e58-11e6-8a84-bae50000006c",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata/states/fb56d92f-2e58-11e6-8a84-bae50000006d",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata/states/fb56de0a-2e58-11e6-8a84-bae50000006e",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata/states/fb56e2b4-2e58-11e6-8a84-bae50000006f",
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
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata/attributes/57ab884e-558b-11e6-8a84-bae500000078",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "57ab884e-558b-11e6-8a84-bae500000078",
  "name": "AttributeName1",
  "type": "productfolder",
  "required": false
}
```

### Шаблон Техоперации 

#### Шаблон Техоперации на основе 
Запрос на получение предзаполненной техоперации на основе другого документа.
В результате запроса будет создан предзаполненный шаблон техоперации на основе переданного документа.

> Запрос на получение шаблона техоперации на основе заказа на производство.

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/processing/new" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "processingOrder": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/5fbf79f4-adac-11e6-5bed-427b0000006a",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
                "type": "processingorder",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненной техоперации.

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
  "printed": true,
  "published": true,
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
  "processingSum": 1000,
  "quantity": 1,
  "processingPlan": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  },
  "materialsStore": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "processingOrder": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/5fbf79f4-adac-11e6-5bed-427b0000006a",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0da78cd1-91f2-11e6-5bed-427b0000009a",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json"
          }
        }
      },
      {
        "quantity": 1,
        "assortment": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0da78cd1-91f2-11e6-5bed-427b0000009a",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json"
          }
        }
      }
    ]
  }
}
```

> Запрос на получение шаблона техоперации на основе техкарты.

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/processing/new" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
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
Успешный запрос. Результат - JSON представление предзаполненной техоперации.

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
  "printed": true,
  "published": true,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "processingSum": 1000,
  "quantity": 1,
  "processingPlan": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  },
  "materialsStore": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "productsStore": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0da78cd1-91f2-11e6-5bed-427b0000009a",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json"
          }
        }
      },
      {
        "quantity": 1,
        "assortment": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0da78cd1-91f2-11e6-5bed-427b0000009a",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json"
          }
        }
      }
    ]
  }
}
```

### Запросы - Техоперация

### Получить Техоперацию

**Параметры**

| Параметр | Описание                                                                              |
| :------- |:--------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Техоперации.   |
 
> Запрос на получение отдельной Техоперации с указанным id.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/processing/7944ef04-f831-11e5-7a69-971500188b19" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Техоперации.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
    "type": "processing",
    "mediaType": "application/json"
  },
  "id": "493ddf6b-aff9-11e6-5bed-427b00000076",
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
  "updated": "2016-11-21 17:46:29",
  "name": "я1",
  "externalCode": "JhQJY8u1isyuqHyn7B6Wx3",
  "moment": "2016-11-21 17:46:00",
  "applicable": true,
  "printed": true,
  "published": true,
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
  "processingSum": 10000,
  "quantity": 1,
  "processingPlan": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  },
  "productsStore": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/c61ce912-a747-11e6-5bed-427b000000a8",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "materialsStore": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "processingOrder": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c7201428-afcc-11e6-5bed-427b00000068",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
      "type": "processingorder",
      "mediaType": "application/json"
    }
  },
  "products": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/products",
      "type": "processingpositionresult",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "materials": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/materials",
      "type": "processingpositionmaterial",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Изменить Техоперацию 
Запрос на обновление Техоперации с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Техоперации, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Техоперации](#/documents/processing#2-tehoperaciya).

#### Особенности поведения при изменении Техоперации
При привязке новой техкарты старые значения готовой продукции, материалы и затраты на производство будут заменены, согласно новой привязываемой техкарты, иначе 
необходимо передать в теле запроса заполненные поля **products**, **materials**, **processingSum**.
Если необходимо указать пустые материалы, но они присутствуют в техкарте, то следует явно передать пустое значение для поля **materials**.
Если не передается поле **quantity**, то оно останется без изменений и будет равно предыдущему значению в техоперации.
Количество готовой продукции и материалов техоперации будут пересчитаны кратно объему производства.

**Параметры**

| Параметр | Описание                                                                              |
| :------- |:--------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Техоперации.   |

> Пример запроса на обновление отдельной Техоперации.

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/processing/7944ef04-f831-11e5-7a69-971500188b19" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "name": "000034",
            "quantity": 5,
            "processingSum": 2000
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Техоперации.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
    "type": "processing",
    "mediaType": "application/json"
  },
  "id": "493ddf6b-aff9-11e6-5bed-427b00000076",
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
  "updated": "2016-11-21 17:46:29",
  "name": "000034",
  "externalCode": "JhQJY8u1isyuqHyn7B6Wx3",
  "moment": "2016-11-21 17:46:00",
  "applicable": true,
  "printed": true,
  "published": true,
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
  "processingSum": 2000,
  "quantity": 5,
  "processingPlan": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  },
  "productsStore": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/c61ce912-a747-11e6-5bed-427b000000a8",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "materialsStore": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "processingOrder": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c7201428-afcc-11e6-5bed-427b00000068",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
      "type": "processingorder",
      "mediaType": "application/json"
    }
  },
  "products": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/products",
      "type": "processingpositionresult",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "materials": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/materials",
      "type": "processingpositionmaterial",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

> Пример запроса на обновление отдельной Техоперации с заменой техкарты и сохранением старых позиций.

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/processing/f64737f7-df69-11ed-ac12-000c00000004" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
              "processingPlan": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/dc221c1c-e356-11ed-ac12-000b00000004",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
                    "type": "processingplan",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#processingplan/edit?id=dc221c1c-e356-11ed-ac12-000b00000004"
                  }
              },
              "products": [
                {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/f64737f7-df69-11ed-ac12-000c00000004/products/73745ac2-e32d-11ed-ac12-000c00000009",
                    "type": "processingpositionresult",
                    "mediaType": "application/json"
                  },
                  "quantity": 400.0
                },
                {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/f64737f7-df69-11ed-ac12-000c00000004/products/a8240ec9-e330-11ed-ac12-000c0000000d",
                    "type": "processingpositionresult",
                    "mediaType": "application/json"
                  }
                }
              ]
            }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Техоперации.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/f64737f7-df69-11ed-ac12-000c00000004",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
    "type": "processing",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#processing/edit?id=f64737f7-df69-11ed-ac12-000c00000004"
  },
  "id": "f64737f7-df69-11ed-ac12-000c00000004",
  "accountId": "12ddf6da-df4e-11ed-ac12-000e0000000a",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/1317fe34-df4e-11ed-ac12-000c00000081",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=1317fe34-df4e-11ed-ac12-000c00000081"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/12ded31d-df4e-11ed-ac12-000e0000000b",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2023-04-25 13:51:54.168",
  "name": "00001",
  "externalCode": "erJSo3G6jEWMXtenosN1h1",
  "moment": "2023-04-20 13:56:00.000",
  "applicable": true,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/1337760f-df4e-11ed-ac12-000c000000c4",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=1337760f-df4e-11ed-ac12-000c000000c4"
    }
  },
  "created": "2023-04-20 13:56:11.476",
  "printed": false,
  "published": false,
  "files": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/f64737f7-df69-11ed-ac12-000c00000004/files",
      "type": "files",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "processingSum": 1000.0,
  "quantity": 10.0,
  "processingPlan": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/dc221c1c-e356-11ed-ac12-000b00000004",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#processingplan/edit?id=dc221c1c-e356-11ed-ac12-000b00000004"
    }
  },
  "productsStore": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/133ac518-df4e-11ed-ac12-000c000000c6",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=133ac518-df4e-11ed-ac12-000c000000c6"
    }
  },
  "materialsStore": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/133ac518-df4e-11ed-ac12-000c000000c6",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=133ac518-df4e-11ed-ac12-000c000000c6"
    }
  },
  "products": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/f64737f7-df69-11ed-ac12-000c00000004/products",
      "type": "processingpositionresult",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "materials": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/f64737f7-df69-11ed-ac12-000c00000004/materials",
      "type": "processingpositionmaterial",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

#### Управление материалами Техоперации 
Отдельный ресурс для управления материалами Техоперации. С его помощью вы можете управлять материалами большого документа, количество материалов в котором превышает лимит на количество материалов, сохраняемых вместе с документом. Этот лимит равен 1000. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](#/general#3-rabota-s-poziciyami-dokumentov).

### Получить материалы Техоперации 
Запрос на получение списка всех материалов данной Техоперации.

| Название    | Тип                                                       | Описание                                                            |
| ----------- | :-------------------------------------------------------- |:--------------------------------------------------------------------|
| **meta**    | [Meta](#/general#3-metadannye) | Метаданные о выдаче,                                                |
| **context** | [Meta](#/general#3-metadannye) | Метаданные о сотруднике, выполнившем запрос.                        |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой материалы Техоперации.   |

**Параметры**

| Параметр   | Описание                                                                                                                               |
| :--------- |:---------------------------------------------------------------------------------------------------------------------------------------|
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Техоперации.                                                    |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить материалы Техоперации

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/processing/7944ef04-f831-11e5-7a69-971500188b19/materials" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка материалов отдельной Техоперации.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/materials",
    "type": "processingpositionmaterial",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/materials/493de99a-aff9-11e6-5bed-427b00000077",
        "type": "processingpositionmaterial",
        "mediaType": "application/json"
      },
      "id": "493de99a-aff9-11e6-5bed-427b00000077",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "quantity": 4,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/materials/493defc4-aff9-11e6-5bed-427b00000078",
        "type": "processingpositionmaterial",
        "mediaType": "application/json"
      },
      "id": "493defc4-aff9-11e6-5bed-427b00000078",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "quantity": 1,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/1267a23f-acdc-11e6-5bed-427b00000086",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        }
      }
    }
  ]
}
```

### Материал Техоперации

### Получить материал

**Параметры**

| Параметр       | Описание                                                                                    |
| :------------- |:--------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Техоперации.         |
| **positionID** | `string` (required) *Example: 9560e3e3-9609-11e6-8af5-581e00000008* id позиции Техоперации. |
 
> Запрос на получение отдельного материала Техоперации с указанным id.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/processing/d72b4281-b000-11e6-8af5-581e00000074/materials/9560e3e3-9609-11e6-8af5-581e00000008" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного материала Техоперации.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/c7201428-afcc-11e6-5bed-427b00000068/materials/c7218ccd-afcc-11e6-5bed-427b00000069",
    "type": "processingpositionmaterial",
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
      "mediaType": "application/json"
    }
  }
}
```

### Добавить материал
Обязательные для создания поля:
+ **assortment** - Ссылка на товар/серию/модификацию в формате [Метаданных](#/general#3-metadannye)
+ **quantity** - Количество товаров данного вида в позиции

**Параметры**

| Параметр       | Описание                                                                                  |
| :------------- |:------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: f64737f7-df69-11ed-ac12-000c00000004* id Техоперации.       |

> Пример запроса на добавление материала в Техоперации.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/processing/f64737f7-df69-11ed-ac12-000c00000004/materials" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "quantity": 10.0,
            "assortment": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/7a707724-df4e-11ed-ac12-000c00000146",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                "type": "product",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=7a6fd2ab-df4e-11ed-ac12-000c00000144"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление добавленного материала.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/f64737f7-df69-11ed-ac12-000c00000004/materials/d6c0d81b-e3f0-11ed-ac12-000b0000001f",
      "type": "processingpositionmaterial",
      "mediaType": "application/json"
    },
    "id": "d6c0d81b-e3f0-11ed-ac12-000b0000001f",
    "accountId": "12ddf6da-df4e-11ed-ac12-000e0000000a",
    "quantity": 10.0,
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/7a707724-df4e-11ed-ac12-000c00000146",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=7a6fd2ab-df4e-11ed-ac12-000c00000144"
      }
    }
  }
]
```

### Изменить материал 
Для обновления материала нет каких-либо обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

| Параметр       | Описание                                                                                      |
| :------------- |:----------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Техоперации.           |
| **positionID** | `string` (required) *Example: 9560e3e3-9609-11e6-8af5-581e00000008* id позиции Техоперации.   |

> Пример запроса на обновление отдельного материала в Техоперации.

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/processing/d72b4281-b000-11e6-8af5-581e00000074/materials/9560e3e3-9609-11e6-8af5-581e00000008" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/34efe2ee-015e-11e6-9464-e4de0000006b/materials/34f6344f-015e-11e6-9464-e4de0000006c",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
              "type": "processingpositionmaterial",
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
Успешный запрос. Результат - JSON представление обновленного материала Техоперации.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/34efe2ee-015e-11e6-9464-e4de0000006b/materials/34f6344f-015e-11e6-9464-e4de0000006c",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
    "type": "processingpositionmaterial",
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
      "mediaType": "application/json"
    }
  }
}
```

### Удалить материал

**Параметры**

| Параметр       | Описание                                                                                      |
| :------------- |:----------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Техоперации.           |
| **positionID** | `string` (required) *Example: 9560e3e3-9609-11e6-8af5-581e00000008* id позиции Техоперации.   |

> Пример запроса на удаление отдельного материала в Техоперации.

```shell
  curl --compressed -X DELETE \
    "https://api.moysklad.ru/api/remap/1.2/entity/processing/d72b4281-b000-11e6-8af5-581e00000074/materials/9560e3e3-9609-11e6-8af5-581e00000008" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление материала Техоперации.

### Массовое удаление материалов

**Параметры**

| Параметр       | Описание                                                                            |
| :------------- |:------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 3e1c03bb-684f-11ee-ac12-000c000000b0* id Техоперации. |

> Запрос на массовое удаление материалов Техоперации.

```shell
curl --compressed -X POST \
  "https://api.moysklad.ru/api/remap/1.2/entity/processing/3e1c03bb-684f-11ee-ac12-000c000000b0/materials/delete" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -d '[
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/3e1c03bb-684f-11ee-ac12-000c000000b0/materials/7fce2da5-684d-11ee-ac12-000c000000a2",
            "type": "processingpositionmaterial",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/3e1c03bb-684f-11ee-ac12-000c000000b0/materials/7fce37a5-684d-11ee-ac12-000c000000a3",
            "type": "processingpositionmaterial",
            "mediaType": "application/json"
          }
        }
      ]'  
```

> Response 200 (application/json)
Успешное удаление материалов Техоперации.

### Управление продуктами Техоперации 
Отдельный ресурс для управления продуктами Техоперации. С его помощью вы можете управлять продуктами большого документа, количество продуктов в котором превышает лимит на количество продуктов, сохраняемых вместе с документом. Этот лимит равен 1000. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](#/general#3-rabota-s-poziciyami-dokumentov).

### Получить продукты Техоперации 
Запрос на получение списка всех продуктов данной Техоперации.

| Название    | Тип                                                       | Описание                                                          |
| ----------- | :-------------------------------------------------------- |:------------------------------------------------------------------|
| **meta**    | [Meta](#/general#3-metadannye) | Метаданные о выдаче,                                              |
| **context** | [Meta](#/general#3-metadannye) | Метаданные о сотруднике, выполнившем запрос.                      |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой продукты Техоперации.  |

**Параметры**

| Параметр   | Описание                                                                                                                               |
| :--------- |:---------------------------------------------------------------------------------------------------------------------------------------|
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Техоперации.                                                    |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить продукты Техоперации

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/processing/7944ef04-f831-11e5-7a69-971500188b19/products" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка продуктов отдельной Техоперации.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/products",
    "type": "processingpositionresult",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/products/493de99a-aff9-11e6-5bed-427b00000077",
        "type": "processingpositionresult",
        "mediaType": "application/json"
      },
      "id": "493de99a-aff9-11e6-5bed-427b00000077",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "quantity": 4,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076/products/493defc4-aff9-11e6-5bed-427b00000078",
        "type": "processingpositionresult",
        "mediaType": "application/json"
      },
      "id": "493defc4-aff9-11e6-5bed-427b00000078",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "quantity": 1,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/1267a23f-acdc-11e6-5bed-427b00000086",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        }
      }
    }
  ]
}
```

### Продукт Техоперации

### Получить продукт

**Параметры**

| Параметр       | Описание                                                                                      |
| :------------- |:----------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Техоперации.           |
| **positionID** | `string` (required) *Example: 9560e3e3-9609-11e6-8af5-581e00000008* id продукта Техоперации.  |
 
> Запрос на получение отдельного продукта Техоперации с указанным id.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/processing/d72b4281-b000-11e6-8af5-581e00000074/products/9560e3e3-9609-11e6-8af5-581e00000008" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного продукта Техоперации.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/c7201428-afcc-11e6-5bed-427b00000068/products/c7218ccd-afcc-11e6-5bed-427b00000069",
    "type": "processingpositionresult",
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
      "mediaType": "application/json"
    }
  }
}
```

### Добавить продукт
Обязательные для создания поля:
+ **assortment** - Ссылка на товар/серию/модификацию в формате [Метаданных](#/general#3-metadannye)
+ **quantity** - Количество товаров данного вида в позиции

**Параметры**

| Параметр       | Описание                                                                                 |
| :------------- |:-----------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: f64737f7-df69-11ed-ac12-000c00000004* id Техоперации.      |

> Пример запроса на добавление продукта в Техоперации.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/processing/f64737f7-df69-11ed-ac12-000c00000004/products" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "quantity": 10.0,
            "assortment": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/7a707724-df4e-11ed-ac12-000c00000146",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                "type": "product",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=7a6fd2ab-df4e-11ed-ac12-000c00000144"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление добавленного материала.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/f64737f7-df69-11ed-ac12-000c00000004/products/a8240ec9-e330-11ed-ac12-000c0000000d",
      "type": "processingpositionresult",
      "mediaType": "application/json"
    },
    "id": "a8240ec9-e330-11ed-ac12-000c0000000d",
    "accountId": "12ddf6da-df4e-11ed-ac12-000e0000000a",
    "quantity": 10.0,
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/7a707724-df4e-11ed-ac12-000c00000146",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=7a6fd2ab-df4e-11ed-ac12-000c00000144"
      }
    }
  }
]
```

### Изменить продукт 
Запрос на обновление отдельного продукта Техоперации. Для обновления продукта нет каких-либо
обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

| Параметр       | Описание                                                                                       |
| :------------- |:-----------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Техоперации.            |
| **positionID** | `string` (required) *Example: 9560e3e3-9609-11e6-8af5-581e00000008* id продукта Техоперации.   |

> Пример запроса на обновление отдельного продукта в Техоперации.

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/processing/d72b4281-b000-11e6-8af5-581e00000074/products/9560e3e3-9609-11e6-8af5-581e00000008" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/34efe2ee-015e-11e6-9464-e4de0000006b/products/34f6344f-015e-11e6-9464-e4de0000006c",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
              "type": "processingpositionresult",
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
Успешный запрос. Результат - JSON представление обновленного продукта Техоперации.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/34efe2ee-015e-11e6-9464-e4de0000006b/products/34f6344f-015e-11e6-9464-e4de0000006c",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
    "type": "processingpositionresult",
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
      "mediaType": "application/json"
    }
  }
}
```

### Удалить продукт
При удалении продукта стоит учитывать, что техоперация должна состоять как минимум из одной позиции продукта.
**Параметры**

| Параметр       | Описание                                                                                      |
| :------------- |:----------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Техоперации.           |
| **positionID** | `string` (required) *Example: 9560e3e3-9609-11e6-8af5-581e00000008* id позиции Техоперации.   |

> Пример запроса на удаление отдельного продукта в Техоперации.

```shell
  curl --compressed -X DELETE \
    "https://api.moysklad.ru/api/remap/1.2/entity/processing/d72b4281-b000-11e6-8af5-581e00000074/products/9560e3e3-9609-11e6-8af5-581e00000008" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление продукта Техоперации.

### Массовое удаление продуктов

**Параметры**

| Параметр       | Описание                                                                            |
| :------------- |:------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 3e1c03bb-684f-11ee-ac12-000c000000b0* id Техоперации. |

> Запрос на массовое удаление продуктов Техоперации.

```shell
curl --compressed -X POST \
  "https://api.moysklad.ru/api/remap/1.2/entity/processing/3e1c03bb-684f-11ee-ac12-000c000000b0/products/delete" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -d '[
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/3e1c03bb-684f-11ee-ac12-000c000000b0/products/7fce2da5-684d-11ee-ac12-000c000000a2",
            "type": "processingpositionresult",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/3e1c03bb-684f-11ee-ac12-000c000000b0/products/7fce37a5-684d-11ee-ac12-000c000000a3",
            "type": "processingpositionresult",
            "mediaType": "application/json"
          }
        }
      ]'  
```

> Response 200 (application/json)
Успешное удаление продуктов Техоперации.
