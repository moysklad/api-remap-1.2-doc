## Техкарта
Средствами JSON API можно создавать и обновлять сведения о Техкартах, запрашивать списки Техкарт и сведения по отдельным Техкартам. Позициями Техкарт можно управлять как в составе отдельной Техкарты, так и отдельно - с помощью специальных ресурсов для управления материалами и продуктами Техкарты. Кодом сущности для Техкарты в составе JSON API является ключевое слово **processingplan**. Больше о Техкартах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по
[этой ссылке](https://support.moysklad.ru/hc/ru/articles/203325613-%D0%A1%D0%B1%D0%BE%D1%80%D0%BE%D1%87%D0%BD%D1%8B%D0%B5-%D0%B8-%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B8).
### Техкарты 
#### Атрибуты сущности

| Название                   | Тип                                                       | Фильтрация                 | Описание                                                                                                                              |
|----------------------------|:----------------------------------------------------------| :------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**              | UUID                                                      | `=` `!=`                   | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                  |
| **archived**               | Boolean                                                   | `=` `!=`                   | Добавлена ли Техкарта в архив<br>`+Обязательное при ответе`                                                                           |
| **code**                   | String(255)                                               | `=` `!=` `~` `~=` `=~`     | Код Техкарты                                                                                                                          |
| **cost**                   | Double                                                    |                            | Стоимость производства                                                                                                                |
| **costDistributionType**   | Enum                                                      |                            | Тип распределения себестоимости. Возможные значения: `BY_PRICE`, `BY_PRODUCTION`<br>`+Обязательное при ответе` `+Только для чтения`   |
| **externalCode**           | String(255)                                               | `=` `!=` `~` `~=` `=~`     | Внешний код Техкарты<br>`+Обязательное при ответе`                                                                                    |
| **group**                  | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                   | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                              |
| **id**                     | UUID                                                      | `=` `!=`                   | ID Техкарты<br>`+Обязательное при ответе` `+Только для чтения`                                                                        |
| **stages**                 | MetaArray                                                 |                            | Коллекция метаданных этапов Техкарты<br>`+Обязательное при ответе` `+Expand`                                                          |
| **materials**              | MetaArray                                                 |                            | Коллекция метаданных материалов Техкарты<br>`+Обязательное при ответе` `+Expand`                                                      |
| **meta**                   | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                            | Метаданные Техкарты<br>`+Обязательное при ответе`                                                                                     |
| **name**                   | String(255)                                               | `=` `!=` `~` `~=` `=~`     | Наименование Техкарты<br>`+Обязательное при ответе` `+Необходимо при создании`                                                        |
| **owner**                  | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                   | Владелец (Сотрудник)<br>`+Обязательное при ответе` `+Expand`                                                                          |
| **parent**                 | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                            | Метаданные группы Техкарты<br>`+Обязательное при ответе` `+Expand`                                                                    |
| **pathName**               | String                                                    |                            | Наименование группы, в которую входит Техкарта<br>`+Обязательное при ответе` `+Только для чтения`                                     |
| **processingProcess**      | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                            | Метаданные Техпроцесса<br>`+Обязательное при ответе` `+Expand`                                                                        |
| **products**               | MetaArray                                                 |                            | Коллекция метаданных готовых продуктов Техкарты<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                    |
| **shared**                 | Boolean                                                   | `=` `!=`                   | Общий доступ<br>`+Обязательное при ответе`                                                                                            |
| **updated**                | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=` | Момент последнего обновления Техкарты<br>`+Обязательное при ответе` `+Только для чтения`                                              |

Особенности:
Для costDistributionType значение BY_PRODUCTION доступно только для техкарт с двумя и более позициями продукции. При изменении количества позиций продукции на значение меньшее, чем 2 автоматически меняется на BY_PRICE.

#### Этапы Техкарты
Объект этап Техкарты содержит следующие поля:

| Название                      | Тип                                                       | Описание                                                                    |
|-------------------------------|:----------------------------------------------------------|:----------------------------------------------------------------------------|
| **accountId**                 | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`        |
| **enableHourAccounting**      | Boolean                                                   | Признак активности учета по нормо-часам                                     |
| **id**                        | UUID                                                      | ID Материала<br>`+Обязательное при ответе` `+Только для чтения`             |
| **cost**                      | Double                                                    | Стоимость производства, на определенном этапе `+Обязательное при ответе`    |
| **labourCost**                | Double                                                    | Оплата труда, на определенном этапе `+Обязательное при ответе`              |
| **standardHour**              | Double                                                    | Нормо-часы, на определенном этапе<br>`+Обязательное при ответе`             |
| **processingProcessPosition** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные позиции техпроцесса<br>`+Обязательное при ответе`                |
| **standardHourCost**          | Double                                                    | Стоимость нормо-часа<br>`+Обязательное при ответе` `+Только для чтения`     |

Особенности:<br>
Этапы Техкарты строго соответствует этапам в позициях привязанного техпроцесса.<br>
Нельзя одновременно передавать суммарную стоимость производства для техкарты и стоимость производства для этапа.<br>
<br>
Для того, чтобы использовать нормо-часы в расчете оплаты труда, сначала потребуется задать стоимость нормо-часа (поле standardHourCost) в [Этапе](../dictionaries/#suschnosti-jetap-proizwodstwa).<br>
Затем необходимо передать признак активации (флаг EnableHourAccounting=true), Изменение значения оплаты труда при включенном флаге недопустимо - для передачи фиксированного значения требуется деактивировать флаг.<br>
В новых Техкартах рассчет оплаты труда по нормо-часам будет включен автоматически, если для Этапа Техкарты была ранее задана стоимость нормо-часа.<br>

#### Материалы Техкарты
Материалы Техкарты - это список товаров/модификаций, используемых для производства готовых продуктов.
Объект материала Техкарты содержит следующие поля:

| Название                      | Тип                                                       | Описание                                                                                                                                                                                      |
|-------------------------------|:----------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**                 | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                          |
| **assortment**                | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные товара или модификации позиции<br>`+Обязательное при ответе` `+Expand`                                                                                                             |
| **id**                        | UUID                                                      | ID Материала<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                               |
| **product**                   | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные товара позиции. В случае, если в поле **assortment** указана модификация, то это поле содержит товар, к которому относится эта модификация<br>`+Обязательное при ответе` `+Expand` |
| **quantity**                  | Float                                                     | Количество товаров данного вида в позиции<br>`+Обязательное при ответе`                                                                                                                       |
| **processingProcessPosition** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные позиции Техпроцесса<br>`+Обязательное при ответе`                                                                                                                                  |
| **materialProcessingPlan**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные техкарты материала<br>`+Только для чтения`                                                                                                                                         |

Особенности: если при добавлении материала не указывать связь с позицией Техпроцесса, то по умолчанию материал будет привязан к первой позиции Техпроцесса.

#### Продукты Техкарты
Продукты Техкарты - это список товаров/модификаций, получаемых при производстве.
Объект продукта Техкарты содержит следующие поля:

| Название       | Тип                                                       | Описание                                                                                                                                                                                      |
|----------------|:----------------------------------------------------------| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **accountId**  | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                          |
| **assortment** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные товара или модификации позиции<br>`+Обязательное при ответе` `+Expand`                                                                                                             |
| **id**         | UUID                                                      | ID Продукта<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                |
| **product**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные товара позиции. В случае, если в поле **assortment** указана модификация, то это поле содержит товар, к которому относится эта модификация<br>`+Обязательное при ответе` `+Expand` |
| **quantity**   | Float                                                     | Количество товаров данного вида в позиции<br>`+Обязательное при ответе`                                                                                                                       |

С материалами и продуктами можно работать с помощью [специальных ресурсов для управления позициями Техкарты](../dictionaries/#suschnosti-tehkarta-materialy-tehkarty),
а также в составе отдельной Техкарты. При работе в составе отдельной Техкарты,
вы можете отправлять запросы на создание отдельной Техкарты с включенными в тело запроса
массивами материалов и продуктов Техкарты. Если количество материалов или продуктов превышает максимально допустимое, то для
дальнейшего пополнения материалов и продуктов нужно будет работать со специальными ресурсами "Материалы Техкарты" и "Продукты Техкарты".
Также, при работе в составе отдельной Техкарты, можно отправлять запросы на обновление списка материалов и продуктов
с включенными в тело запроса массивами материалов и продуктов Техкарты. При этом важно помнить, что коллекции материалов и продуктов
полностью заменят уже существующие коллекции при обновлении объекта - лишние
позиции будут удалены, новые добавлены, существующие - изменены.


### Получить список Техкарт 
Запрос всех Техкарт на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                               |
| ----------- | :-------------------------------------------------------- |:-------------------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                   |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.           |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Техкарты.   |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |

> Получить список Техкарт

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingplan"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Техкарт.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
    "type": "processingplan",
    "mediaType": "application/json",
    "size": 3,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
        "type": "processingplan",
        "mediaType": "application/json"
      },
      "id": "1a18770e-ad9a-11e6-5bed-427b00000064",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-21 14:55:08",
      "name": "Техкарточка",
      "externalCode": "4geOQkq5h7d5w1-tUATmt3",
      "archived": false,
      "pathName": "",
      "processingProcess": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/d8da40e9-bbf9-11ed-ac12-0010000000bf",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/metadata",
          "type": "processingprocess",
          "mediaType": "application/json"
        }
      },
      "cost": 1000,
      "costDistributionType": "BY_PRICE",
      "stages": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064/stages",
          "type": "processingplanstages",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "materials": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064/materials",
          "type": "processingplanmaterial",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "products": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064/products",
          "type": "processingplanresult",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/6b4ffbf7-ac12-11e6-5bed-427b00000091",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
        "type": "processingplan",
        "mediaType": "application/json"
      },
      "id": "6b4ffbf7-ac12-11e6-5bed-427b00000091",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-17 14:48:32",
      "name": "Техкарта",
      "externalCode": "Lr9zJa9qgpvs6f6laIgtG2",
      "archived": false,
      "pathName": "Группа",
      "parent": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/bfb6c5dc-acbb-11e6-5bed-427b00000001",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
          "type": "processingplanfolder",
          "mediaType": "application/json"
        }
      },
      "processingProcess": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/d8da40e9-bbf9-11ed-ac12-0010000000bf",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/metadata",
          "type": "processingprocess",
          "mediaType": "application/json"
        }
      },
      "cost": 2000,
      "costDistributionType": "BY_PRICE",
      "stages": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/6b4ffbf7-ac12-11e6-5bed-427b00000091/stages",
          "type": "processingplanstages",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "materials": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/6b4ffbf7-ac12-11e6-5bed-427b00000091/materials",
          "type": "processingplanmaterial",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "products": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/6b4ffbf7-ac12-11e6-5bed-427b00000091/products",
          "type": "processingplanresult",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
        "type": "processingplan",
        "mediaType": "application/json"
      },
      "id": "c38e50b0-acdc-11e6-5bed-427b0000009e",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-17 18:44:45",
      "name": "Карта",
      "externalCode": "QrWcKk6mhnNX2Jhi-WsIh2",
      "archived": false,
      "pathName": "Группа",
      "parent": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/bfb6c5dc-acbb-11e6-5bed-427b00000001",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
          "type": "processingplanfolder",
          "mediaType": "application/json"
        }
      },
      "processingProcess": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/d8da40e9-bbf9-11ed-ac12-0010000000bf",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/metadata",
          "type": "processingprocess",
          "mediaType": "application/json"
        }
      },
      "cost": 10000,
      "costDistributionType": "BY_PRICE",
      "stages": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e/stages",
          "type": "processingplanstages",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "materials": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e/materials",
          "type": "processingplanmaterial",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "products": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e/products",
          "type": "processingplanresult",
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

### Создать Техкарту
Запрос на создание новой Техкарты. При создании Техкарты, если не указан Техпроцесс, то по умолчанию будет подставлен “Основной техпроцесс”.
Обязательные для создания поля:

+ **name** - Наименование Техкарты
+ **products** - Список готовых продуктов Техкарты в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)

> Пример создания новой Техкарты с телом запроса, содержащим только необходимые поля.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/processingplan"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "name": "Example",
            "cost": 1000,
            "products": [
              {
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0da78cd1-91f2-11e6-5bed-427b0000009a",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                },
                "quantity": 1
              },
              {
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/0da78cd1-91f2-11e6-5bed-427b0000009a",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                    "type": "variant",
                    "mediaType": "application/json"
                  }
                },
                "quantity": 1
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Техкарты.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
    "type": "processingplan",
    "mediaType": "application/json"
  },
  "id": "120a488b-b0bd-11e6-5bed-427b00000000",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-22 17:07:57",
  "name": "123sdf",
  "externalCode": "llZWq551h90XDJuYADvry0",
  "archived": false,
  "pathName": "",
  "processingProcess": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/d8da40e9-bbf9-11ed-ac12-0010000000bf",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/metadata",
      "type": "processingprocess",
      "mediaType": "application/json"
    }
  },
  "cost": 1000,
  "costDistributionType": "BY_PRICE",
  "stages": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/stages",
      "type": "processingplanstages",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "materials": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/materials",
      "type": "processingplanmaterial",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "products": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/products",
      "type": "processingplanresult",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Массовое создание и обновление Техкарт 
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Техкарт.
В теле запроса нужно передать массив, содержащий JSON представления Техкарт, которые вы хотите создать или обновить.
Обновляемые Техкарты должны содержать идентификатор в виде метаданных.

Особенности: 
Привязка другого Техпроцесса приведет к удалению метериалов, привязанных к старому Техпроцессу. 
При создании Техкарты, если не указан Техпроцесс, то по умолчанию будет подставлен “Основной техпроцесс”.

> Пример создания и обновления нескольких Техкарт

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/processingplan"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "Example",
              "cost": 1000,
              "processingProcess": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/25980515-923e-11ed-c0a8-30040000002d",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/metadata",
                  "type": "processingprocess",
                  "mediaType": "application/json"
                }
              },
              "materials": [
                {
                  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
                  "assortment": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
                      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  },
                  "processingProcessPosition": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/25980515-923e-11ed-c0a8-30040000002d/positions/d8da461d-bbf9-11ed-ac12-0010000000c1",
						          "type": "processingprocessposition",
						          "mediaType": "application/json"
                    }
                  },
                  "quantity": 1
                }
              ],
              "products": [
                {
                  "assortment": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0da78cd1-91f2-11e6-5bed-427b0000009a",
                      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  },
                  "quantity": 1
                },
                {
                  "assortment": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/0da78cd1-91f2-11e6-5bed-427b0000009a",
                      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                      "type": "variant",
                      "mediaType": "application/json"
                    }
                  },
                  "quantity": 1
                }
              ]
            },
            {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
                "type": "processingplan",
                "mediaType": "application/json"
              },
              "name": "Техкарта",
              "cost": 100000
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Техкарт.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    },
    "id": "120a488b-b0bd-11e6-5bed-427b00000000",
    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-11-22 17:07:57",
    "name": "Example",
    "externalCode": "llZWq551h90XDJuYADvry0",
    "archived": false,
    "pathName": "",
    "processingProcess": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/25980515-923e-11ed-c0a8-30040000002d",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/metadata",
        "type": "processingprocess",
        "mediaType": "application/json"
      }
    },
    "cost": 1000,
    "costDistributionType": "BY_PRICE",
    "stages": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/stages",
        "type": "processingplanstages",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
      }
    },
    "materials": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/materials",
        "type": "processingplanmaterial",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
      }
    },
    "products": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/products",
        "type": "processingplanresult",
        "mediaType": "application/json",
        "size": 2,
        "limit": 1000,
        "offset": 0
      }
    }
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    },
    "id": "1a18770e-ad9a-11e6-5bed-427b00000064",
    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-11-21 14:55:08",
    "name": "Техкарта",
    "externalCode": "4geOQkq5h7d5w1-tUATmt3",
    "archived": false,
    "pathName": "",
    "processingProcess": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/d8da40e9-bbf9-11ed-ac12-0010000000bf",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/metadata",
        "type": "processingprocess",
        "mediaType": "application/json"
      }
    },
    "cost": 100000,
    "costDistributionType": "BY_PRICE",
    "stages": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064/stages",
        "type": "processingplanstages",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
      }
    },
    "materials": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064/materials",
        "type": "processingplanmaterial",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
      }
    },
    "products": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064/products",
        "type": "processingplanresult",
        "mediaType": "application/json",
        "size": 2,
        "limit": 1000,
        "offset": 0
      }
    }
  }
]
```

### Удалить Техкарту

**Параметры**

| Параметр | Описание                                                                           |
| :------- | :--------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Техкарты. |
 
> Запрос на удаление Техкарты с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление Техкарты.

### Массовое удаление Техкарт

В теле запроса нужно передать массив, содержащий JSON метаданных Техкарт, которые вы хотите удалить.


> Запрос на массовое удаление Техкарт. 

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
  -d '[
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/7944ef04-f831-11e5-7a69-971500188b1",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
                "type": "processingplan",
                "mediaType": "application/json"
            }
        },
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/7944ef04-f831-11e5-7a69-971500188b2",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
                "type": "processingplan",
                "mediaType": "application/json"
            }
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Техкарт.

```json
[
  {
    "info":"Сущность 'processingplan' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'processingplan' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
``` 

### Техкарта

### Получить Техкарту

**Параметры**

| Параметр | Описание                                                                           |
| :------- | :--------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Техкарты. |
 
> Запрос на получение отдельной Техкарты с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Техкарты.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
    "type": "processingplan",
    "mediaType": "application/json"
  },
  "id": "1a18770e-ad9a-11e6-5bed-427b00000064",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-21 14:55:08",
  "name": "Техкарточка",
  "externalCode": "4geOQkq5h7d5w1-tUATmt3",
  "archived": false,
  "pathName": "",
  "processingProcess": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/d8da40e9-bbf9-11ed-ac12-0010000000bf",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/metadata",
      "type": "processingprocess",
      "mediaType": "application/json"
    }
  },
  "cost": 1000,
  "costDistributionType": "BY_PRICE",
  "stages": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064/stages",
      "type": "processingplanstages",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "materials": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064/materials",
      "type": "processingplanmaterial",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "products": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064/products",
      "type": "processingplanresult",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  }
}

```

### Изменить Техкарту 
Запрос на обновление Техкарты с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Техкарты, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Техкарты](../dictionaries/#suschnosti-tehkarta).

Особенности: привязка другого Техпроцесса приведет к удалению метериалов, привязанных к старому Техпроцессу

**Параметры**

| Параметр | Описание                                                                           |
| :------- |:-----------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Техкарты.   |

> Пример запроса на обновление отдельной Техкарты.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "name": "Техкарта",
            "cost": 100000
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Техкарты.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
    "type": "processingplan",
    "mediaType": "application/json"
  },
  "id": "1a18770e-ad9a-11e6-5bed-427b00000064",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-21 14:55:08",
  "name": "Техкарта",
  "externalCode": "4geOQkq5h7d5w1-tUATmt3",
  "archived": false,
  "pathName": "",
  "processingProcess": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/d8da40e9-bbf9-11ed-ac12-0010000000bf",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/metadata",
      "type": "processingprocess",
      "mediaType": "application/json"
    }
  },
  "cost": 100000,
  "costDistributionType": "BY_PRICE",
  "stages": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064/stages",
      "type": "processingplanstages",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "materials": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064/materials",
      "type": "processingplanmaterial",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "products": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064/products",
      "type": "processingplanresult",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Этапы Техкарты
Отдельный ресурс для управления этапами Техкарты. С его помощью вы можете управлять этапами большого документа, количество этапов в котором превышает лимит на количество позиций, 
сохраняемых вместе с документом. Этот лимит равен 1000. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](../#mojsklad-json-api-obschie-swedeniq-rabota-s-poziciqmi-dokumentow).
Произвольное создание и удаление этапов Техкарт не поддерживается, этапы Техкарт строго соответствует этапам в позициях связанного Техпроцесса.

### Получить этапы Техкарты
Запрос на получение списка всех этапов данной Техкарты.

| Название    | Тип                                                       | Описание                                                     |
| ----------- | :-------------------------------------------------------- |:-------------------------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                         |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                 |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой этапы Техкарты.   |

**Параметры**

| Параметр   | Описание                                                                                                                               |
| :--------- |:---------------------------------------------------------------------------------------------------------------------------------------|
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Техкарты.                                                       |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить этапы Техкарты

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/7944ef04-f831-11e5-7a69-971500188b19/stages"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка этапов отдельной Техкарты.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/908f9690-bcac-11ed-ac1c-000b0000001e/stages",
    "type": "processingplanstages",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/908f9690-bcac-11ed-ac1c-000b0000001e/stages/4ca1e0fe-c161-11ed-ac1c-000b00000006",
        "type": "processingplanstages",
        "mediaType": "application/json"
      },
      "id": "4ca1e0fe-c161-11ed-ac1c-000b00000006",
      "accountId": "2f09c84d-bbd0-11ed-ac1c-000f00000001",
      "processingProcessPosition": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/32dd4604-bbd0-11ed-ac1c-000b000000bf/positions/32dd4bac-bbd0-11ed-ac1c-000b000000c0",
          "type": "processingprocessposition",
          "mediaType": "application/json"
        }
      },
      "cost": 1100.0,
      "labourCost": 100.0,
      "standardHour": 200.0
    }
  ]
}
```

### Получить отдельный этап Техкарты

**Параметры**

| Параметр       | Описание                                                                                 |
| :------------- |:-----------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Техкарты.         |
| **stagesID**   | `string` (required) *Example: 9560e3e3-9609-11e6-8af5-581e00000008* id этапа Техкарты.   |

> Запрос на получение отдельного этапа Техкарты с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/d72b4281-b000-11e6-8af5-581e00000074/stages/9560e3e3-9609-11e6-8af5-581e00000008"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного этапа Техкарты.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/908f9690-bcac-11ed-ac1c-000b0000001e/stages/9560e3e3-9609-11e6-8af5-581e00000008",
    "type": "processingplanstages",
    "mediaType": "application/json"
  },
  "id": "9560e3e3-9609-11e6-8af5-581e00000008",
  "accountId": "2f09c84d-bbd0-11ed-ac1c-000f00000001",
  "processingProcessPosition": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/32dd4604-bbd0-11ed-ac1c-000b000000bf/positions/32dd4bac-bbd0-11ed-ac1c-000b000000c0",
      "type": "processingprocessposition",
      "mediaType": "application/json"
    }
  },
  "cost": 1100.0,
  "labourCost": 100.0,
  "standardHour": 200.0
}
```

### Изменить отдельный этап Техкарты
Для обновления этапа техкарты нет каких-либо обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

| Параметр       | Описание                                                                               |
| :------------- |:---------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Техкарты.       |
| **stagesID**   | `string` (required) *Example: 9560e3e3-9609-11e6-8af5-581e00000008* id этапа Техкарты. |

> Пример запроса на обновление отдельного этапа в Техкарте.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/d72b4281-b000-11e6-8af5-581e00000074/stages/9560e3e3-9609-11e6-8af5-581e00000008"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "cost": 5.5
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного этапа Техкарты.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/908f9690-bcac-11ed-ac1c-000b0000001e/stages/9560e3e3-9609-11e6-8af5-581e00000008",
    "type": "processingplanstages",
    "mediaType": "application/json"
  },
  "id": "9560e3e3-9609-11e6-8af5-581e00000008",
  "accountId": "2f09c84d-bbd0-11ed-ac1c-000f00000001",
  "processingProcessPosition": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/32dd4604-bbd0-11ed-ac1c-000b000000bf/positions/32dd4bac-bbd0-11ed-ac1c-000b000000c0",
      "type": "processingprocessposition",
      "mediaType": "application/json"
    }
  },
  "cost": 5.5,
  "labourCost": 10.0,
  "standardHour": 15.0
}
```

### Материалы Техкарты 
Отдельный ресурс для управления материалами Техкарты. С его помощью вы можете управлять материалами большого документа, количество материалов в котором превышает лимит на количество материалов, сохраняемых вместе с документом. Этот лимит равен 1000. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](../#mojsklad-json-api-obschie-swedeniq-rabota-s-poziciqmi-dokumentow).

### Получить материалы Техкарты 
Запрос на получение списка всех материалов данной Техкарты.

| Название    | Тип                                                       | Описание                                                         |
| ----------- | :-------------------------------------------------------- |:-----------------------------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                             |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                     |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой материалы Техкарты.   |

**Параметры**

| Параметр   | Описание                                                                                                                               |
| :--------- |:---------------------------------------------------------------------------------------------------------------------------------------|
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Техкарты.                                                       |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить материалы Техкарты

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/7944ef04-f831-11e5-7a69-971500188b19/materials"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка материалов отдельной Техкарты.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/materials",
    "type": "processingplanmaterial",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/materials/120b4591-b0bd-11e6-5bed-427b00000001",
        "type": "processingplanmaterial",
        "mediaType": "application/json"
      },
      "id": "120b4591-b0bd-11e6-5bed-427b00000001",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "product": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        }
      },
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        }
      },
      "quantity": 1,
      "processingProcessPosition": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/d8da40e9-bbf9-11ed-ac12-0010000000bf/positions/d8da461d-bbf9-11ed-ac12-0010000000c0",
          "type": "processingprocessposition",
          "mediaType": "application/json"
        }
      }
    }
  ]
}
```

### Материал Техкарты

### Получить материал

**Параметры**

| Параметр       | Описание                                                                                 |
| :------------- |:-----------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Техкарты.         |
| **positionID** | `string` (required) *Example: 9560e3e3-9609-11e6-8af5-581e00000008* id позиции Техкарты. |
 
> Запрос на получение отдельного материала Техкарты с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/d72b4281-b000-11e6-8af5-581e00000074/materials/9560e3e3-9609-11e6-8af5-581e00000008"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного материала Техкарты.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/materials/120b4591-b0bd-11e6-5bed-427b00000001",
    "type": "processingplanmaterial",
    "mediaType": "application/json"
  },
  "id": "120b4591-b0bd-11e6-5bed-427b00000001",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "product": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json"
    }
  },
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json"
    }
  },
  "quantity": 1,
  "processingProcessPosition": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/d8da40e9-bbf9-11ed-ac12-0010000000bf/positions/d8da461d-bbf9-11ed-ac12-0010000000c0",
      "type": "processingprocessposition",
      "mediaType": "application/json"
    }
  }
}
```

### Создать материал
Запрос на создание нового материала в Техкарте.
Если при добавлении материала не указывать связь с позицией Техпроцесса, то по умолчанию материал будет привязан к первой позиции Техпроцесса.
Для успешного создания необходимо в теле запроса указать следующие поля:

+ **product** - Ссылка на товар, которую представляет собой позиция.
+ **quantity** - Количество товаров в позиции.

**Параметры**

| Параметр | Описание                                                                          |
| :------- |:----------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Техкарты.  |

> Пример создания одного материала в Техкарте.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/7944ef04-f831-11e5-7a69-971500188b19/materials"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '[
            {
              "assortment": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "quantity": 1
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного материала отдельной Техкарты.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/materials/120b4591-b0bd-11e6-5bed-427b00000001",
      "type": "processingplanmaterial",
      "mediaType": "application/json"
    },
    "id": "120b4591-b0bd-11e6-5bed-427b00000001",
    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
    "product": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    },
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    },
    "quantity": 1,
    "processingProcessPosition": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/d8da40e9-bbf9-11ed-ac12-0010000000bf/positions/d8da461d-bbf9-11ed-ac12-0010000000c0",
        "type": "processingprocessposition",
        "mediaType": "application/json"
      }
    }
  }
]
```

> Пример создания сразу нескольких материалов в Техкарте с привязкой и без привязки к позициям Техпроцесса

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/7944ef04-f831-11e5-7a69-971500188b19/materials"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '[
            {
              "assortment": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "quantity": 1,
              "processingProcessPosition": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/d8da40e9-bbf9-11ed-ac12-0010000000bf/positions/934b5505-ac45-11ed-ac12-000f0000002c",
                  "type": "processingprocessposition",
                  "mediaType": "application/json"
                }
              }
            },
            {
              "assortment": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/0de151c1-acdc-11e6-5bed-427b00000079",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                  "type": "variant",
                  "mediaType": "application/json"
                }
              },
              "quantity": 2
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка созданных материалов отдельной Техкарты.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/materials/120b4591-b0bd-11e6-5bed-427b00000001",
      "type": "processingplanmaterial",
      "mediaType": "application/json"
    },
    "id": "120b4591-b0bd-11e6-5bed-427b00000001",
    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
    "product": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    },
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    },
    "quantity": 1,
    "processingProcessPosition": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/d8da40e9-bbf9-11ed-ac12-0010000000bf/positions/934b5505-ac45-11ed-ac12-000f0000002c",
        "type": "processingprocessposition",
        "mediaType": "application/json"
      }
    }
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/materials/120b4591-b0bd-11e6-5bed-427b00000002",
      "type": "processingplanmaterial",
      "mediaType": "application/json"
    },
    "id": "120b4591-b0bd-11e6-5bed-427b00000002",
    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
    "product": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000081",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    },
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/0de151c1-acdc-11e6-5bed-427b00000079",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      }
    },
    "quantity": 2,
    "processingProcessPosition": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/d8da40e9-bbf9-11ed-ac12-0010000000bf/positions/d8da461d-bbf9-11ed-ac12-0010000000c0",
        "type": "processingprocessposition",
        "mediaType": "application/json"
      }
    }
  }
]
```

### Изменить материал 
Запрос на обновление отдельного материала Техкарты. Для обновления материала нет каких-либо
 обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

| Параметр       | Описание                                                                                 |
| :------------- |:-----------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Техкарты.         |
| **positionID** | `string` (required) *Example: 9560e3e3-9609-11e6-8af5-581e00000008* id позиции Техкарты. |

> Пример запроса на обновление отдельного материала в Техкарте.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/d72b4281-b000-11e6-8af5-581e00000074/materials/9560e3e3-9609-11e6-8af5-581e00000008"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "quantity": 5
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного материала Техкарты.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/materials/120b4591-b0bd-11e6-5bed-427b00000001",
      "type": "processingplanmaterial",
      "mediaType": "application/json"
    },
    "id": "120b4591-b0bd-11e6-5bed-427b00000001",
    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
    "product": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    },
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    },
    "quantity": 5,
    "processingProcessPosition": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/d8da40e9-bbf9-11ed-ac12-0010000000bf/positions/d8da461d-bbf9-11ed-ac12-0010000000c0",
        "type": "processingprocessposition",
        "mediaType": "application/json"
      }
    }
  }
]
```

### Удалить материал 

**Параметры**

| Параметр       | Описание                                                                                 |
| :------------- |:-----------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Техкарты.         |
| **positionID** | `string` (required) *Example: 9560e3e3-9609-11e6-8af5-581e00000008* id позиции Техкарты. |

> Запрос на удаление материала Техкарты с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/d72b4281-b000-11e6-8af5-581e00000074/materials/9560e3e3-9609-11e6-8af5-581e00000008"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление материала Техкарты.

### Массовое удаление материалов

В теле запроса нужно передать массив, содержащий JSON метаданных материалов Техкарты, которые требуется удалить.

> Запрос на массовое удаление материалов Техкарты.

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/e435045e-7274-11ee-c0a8-e00e00000030/materials/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
    -d '[
          {
              "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/e435045e-7274-11ee-c0a8-e00e00000030/materials/e43514c2-7274-11ee-c0a8-e00e00000031",
                  "type": "processingplanmaterial",
                  "mediaType": "application/json"
              }
          },
          {
              "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/e435045e-7274-11ee-c0a8-e00e00000030/materials/d9c4688e-7274-11ee-c0a8-e00e00000025",
                  "type": "processingplanmaterial",
                  "mediaType": "application/json"
              }
          }
       ]' 
```

> Response 200 (application/json)
Успешное удаление материалов Техкарты.

### Продукты Техкарты 
Отдельный ресурс для управления продуктами Техкарты. С его помощью вы можете управлять продуктами большого документа, количество продуктов в котором превышает лимит на количество продуктов, сохраняемых вместе с документом. Этот лимит равен 1000. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](../#mojsklad-json-api-obschie-swedeniq-rabota-s-poziciqmi-dokumentow).

### Получить продукты Техкарты 
Запрос на получение списка всех продуктов данной Техкарты.

| Название    | Тип                                                       | Описание                                                     |
| ----------- | :-------------------------------------------------------- |:-------------------------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                         |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                 |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой продукты Техкарты.|

**Параметры**

| Параметр   | Описание                                                                                                                              |
| :--------- |:--------------------------------------------------------------------------------------------------------------------------------------|
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Техкарты.                                                      |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                |

> Получить продукты Техкарты

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/7944ef04-f831-11e5-7a69-971500188b19/products"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка продуктов отдельной Техкарты.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/products",
    "type": "processingplanresult",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/products/120b4591-b0bd-11e6-5bed-427b00000001",
        "type": "processingplanresult",
        "mediaType": "application/json"
      },
      "id": "120b4591-b0bd-11e6-5bed-427b00000001",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "product": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        }
      },
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        }
      },
      "quantity": 1
    }
  ]
}
```

### Продукт Техкарты

### Получить продукт

**Параметры**

| Параметр       | Описание                                                                                 |
| :------------- |:-----------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Техкарты.         |
| **positionID** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id продукта Техкарты.|
 
> Запрос на получение отдельного продукта Техкарты с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/d72b4281-b000-11e6-8af5-581e00000074/products/9560e3e3-9609-11e6-8af5-581e00000008"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного продукта Техкарты.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/products/120b4591-b0bd-11e6-5bed-427b00000001",
      "type": "processingplanresult",
      "mediaType": "application/json"
    },
    "id": "120b4591-b0bd-11e6-5bed-427b00000001",
    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
    "product": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    },
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    },
    "quantity": 1
  }
]
```

### Создать продукт
Запрос на создание нового продукта в Техкарте.
Для успешного создания необходимо в теле запроса указать следующие поля:

+ **product** - Ссылка на товар, которую представляет собой позиция.
+ **quantity** - Количество товаров в позиции.

**Параметры**

| Параметр | Описание                                                                         |
| :------- |:---------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Техкарты. |

> Пример создания одного продукта в Техкарте.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/7944ef04-f831-11e5-7a69-971500188b19/products"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '[
            {
              "assortment": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "quantity": 1
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного продукта отдельной Техкарты.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/products/120b4591-b0bd-11e6-5bed-427b00000001",
      "type": "processingplanresult",
      "mediaType": "application/json"
    },
    "id": "120b4591-b0bd-11e6-5bed-427b00000001",
    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
    "product": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    },
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    },
    "quantity": 1
  }
]
```

> Пример создания сразу нескольких продуктов в Техкарте.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/7944ef04-f831-11e5-7a69-971500188b19/products"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '[
            {
              "assortment": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "quantity": 1
            },
            {
              "assortment": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/0de151c1-acdc-11e6-5bed-427b00000081",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                  "type": "variant",
                  "mediaType": "application/json"
                }
              },
              "quantity": 2
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка созданных продуктов отдельной Техкарты.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/products/120b4591-b0bd-11e6-5bed-427b00000001",
      "type": "processingplanresult",
      "mediaType": "application/json"
    },
    "id": "120b4591-b0bd-11e6-5bed-427b00000001",
    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
    "product": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    },
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    },
    "quantity": 1
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/products/120b4591-b0bd-11e6-5bed-427b00000002",
      "type": "processingplanresult",
      "mediaType": "application/json"
    },
    "id": "120b4591-b0bd-11e6-5bed-427b00000002",
    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/0de151c1-acdc-11e6-5bed-427b00000081",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      }
    },
    "product": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000079",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    },
    "quantity": 2
  }
]
```

### Изменить продукт 
Запрос на обновление отдельного продукта Техкарты. Для обновления продукта нет каких-либо
 обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

| Параметр       | Описание                                                                                  |
| :------------- |:------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Техкарты.          |
| **positionID** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id продукта Техкарты. |

> Пример запроса на обновление отдельного продукта в Техкарте.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/d72b4281-b000-11e6-8af5-581e00000074/products/9560e3e3-9609-11e6-8af5-581e00000008"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "quantity": 5
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного продукта Техкарты.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/products/120b4591-b0bd-11e6-5bed-427b00000001",
      "type": "processingplanresult",
      "mediaType": "application/json"
    },
    "id": "120b4591-b0bd-11e6-5bed-427b00000001",
    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
    "product": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    },
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    },
    "quantity": 5
  }
]

```

### Удалить продукт

**Параметры**

| Параметр       | Описание                                                                                    |
| :------------- |:--------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Техкарты.            |
| **positionID** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id продукта Техкарты.   |
 
> Запрос на удаление продукта Техкарты с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/d72b4281-b000-11e6-8af5-581e00000074/products/9560e3e3-9609-11e6-8af5-581e00000008"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление продукта Техкарты.

### Массовое удаление продукта

В теле запроса нужно передать массив, содержащий JSON метаданных продуктов Техкарты, которые требуется удалить.

> Запрос на массовое удаление продуктов Техкарты.

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/d9c43e3b-7274-11ee-c0a8-e00e00000023/products/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
    -d '[
          {
              "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/d9c43e3b-7274-11ee-c0a8-e00e00000023/products/270b59e1-7305-11ee-c0a8-e00d00000000",
                  "type": "processingplanresult",
                  "mediaType": "application/json"
              }
          },
          {
              "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/d9c43e3b-7274-11ee-c0a8-e00e00000023/products/dd495ae2-7277-11ee-c0a8-e00e00000044",
                  "type": "processingplanresult",
                  "mediaType": "application/json"
              }
          }
       ]' 
```

> Response 200 (application/json)
Успешное удаление продуктов Техкарты.
