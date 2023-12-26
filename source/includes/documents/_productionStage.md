### Производственные этапы

Производственный этап не является самостоятельной сущностью, ее нельзя создать и удалить. Сущность создается автоматически при наполнении Производственного задания 
позициями техкарт.
Средствами JSON API можно обновлять сведения о Производственных этапах, запрашивать списки Производственных этапов и сведения по отдельным Производственным этапам. 
Материалами Производственных этапов можно управлять как в составе отдельного Производственного этапа, так и отдельно - с помощью специальных ресурсов для управления 
материалами Производственных этапов. Кодом сущности для Производственных этапов в составе JSON API является ключевое слово **productionstage**. 
Больше о Производстве и Производственном задании и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/16929256771857-%D0%9F%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5).

#### Атрибуты сущности

| Название               | Тип                                                       | Фильтрация | Описание                                                                                                  |
|------------------------|:----------------------------------------------------------|:-----------|:----------------------------------------------------------------------------------------------------------|
| **accountId**          | UUID                                                      |            | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                      |
| **id**                 | UUID                                                      |            | ID Заказа на производство<br>`+Обязательное при ответе` `+Только для чтения`                              |
| **meta**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |            | Метаданные Производственного этапа<br>`+Обязательное при ответе` `+Только для чтения`                     |
| **labourUnitCost**     | Double                                                    |            | Затраты на оплату труда за единицу объема производства<br>                                                |
| **materials**          | MetaArray                                                 |            | Метаданные материалов Производственного этапа<br>`+Обязательное при ответе`                               |
| **orderingPosition**   | Int                                                       |            | Индекс Производственного этапа в Производственном ряде<br>`+Обязательное при ответе` `+Только для чтения` |
| **stage**              | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |            | Метаданные Этапа производства<br>`+Expand` `+Обязательное при ответе` `+Только для чтения`                |
| **status**             | Enum                                                      | `=` `!=`   | Статус<br>`+Обязательное при ответе` `+Только для чтения`                                                 |
| **productionRow**      | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |            | Метаданные Производственного ряда<br>`+Expand` `+Обязательное при ответе` `+Только для чтения`            |
| **productionVolume**   | Double                                                    |            | Объем Производственного этапа. Соответствует объему производственного ряда<br>`+Только для чтения`        |
| **processingUnitCost** | Double                                                    |            | Затраты на единицу объема производства<br>                                                                |

#### Возможные значения поля **status**

| Название      | Описание                                           |
|---------------|:---------------------------------------------------|
| **BLOCKED**   | Производственный этап заблокирован для выполнения  |
| **AVAILABLE** | Производственный этап доступен для выполнения      |
| **COMPLETED** | Производственный этап выполнен                     |

#### Материалы Производственного этапа
Материалы Производственного этапа - это товары, модификации и серии, которые планируется затратить при выполнении Производственного этапа.

Объект материала Производственного этапа содержит следующие поля:

| Название             | Тип                                                      | Описание                                                                                                                                                                                                                                                      |
| -------------------- |:---------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------|
| **accountId**        | UUID                                                     | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                   |
| **assortment**       | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)| Метаданные товара/услуги/серии/модификации, которую представляет собой позиция<br>`+Обязательное при ответе` `+Expand` |
| **id**               | UUID                                                     | ID позиции<br>`+Обязательное при ответе` `+Только для чтения`                                                          |
| **planQuantity**     | Float                                                    | Количество товаров/модификаций данного вида в позиции<br>`+Обязательное при ответе`                                   |

### Получить список Производственных этапов Производственного задания
При получении производственных этапов нужно обязательно передавать фильтр на конкретное производственное задание `?filter=productionTask=https://api.moysklad.ru/api/remap/1.2/entity/productiontask/<productiontask_id>`.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                          |
| ----------- | :-------------------------------------------------------- | :---------------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче                                               |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос                       |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Производственные этапы |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить список Производственных этапов по Производственному заданию

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/?filter=productionTask=https://api.moysklad.ru/api/remap/1.2/entity/productiontask/1906fa20-99d6-11ee-0a83-0a2e00000767"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Производственных этапов Производственного задания.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/?filter=productionTask%3Dhttps%3A%2F%2Fapi.moysklad.ru%2Fapi%2Fremap%2F1.2%2Fentity%2Fproductiontask%2F1906fa20-99d6-11ee-0a83-0a2e00000767",
    "type": "productionstage",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/19070bfd-99d6-11ee-0a83-0a2e0000076b",
        "type": "productionstage",
        "mediaType": "application/json"
      },
      "id": "19070bfd-99d6-11ee-0a83-0a2e0000076b",
      "accountId": "4ac40edf-99d4-11ee-0a83-0ded0000002b",
      "stage": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/4b3ada86-99d4-11ee-0a83-0a2e0000070e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
          "type": "processingstage",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#processingstage/edit?id=4b3ada86-99d4-11ee-0a83-0a2e0000070e"
        }
      },
      "productionRow": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/1906fa20-99d6-11ee-0a83-0a2e00000767/productionrows/19070a2e-99d6-11ee-0a83-0a2e0000076a",
          "type": "productionrow",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#productionrow/edit?id=19070a2e-99d6-11ee-0a83-0a2e0000076a"
        }
      },
      "status": "BLOCKED",
      "materials": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/19070bfd-99d6-11ee-0a83-0a2e0000076b/materials",
          "type": "productiontaskmaterial",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "orderingPosition": 0,
      "productionVolume": 1.0,
      "processingUnitCost": 2.0,
      "labourUnitCost": 0.0
    }
  ]
}
```

### Изменить Производственный этап
Запрос на обновление Производственного этапа с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Производственного этапа, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Производственного этапа](#dokumenty-proizwodstwennoe-zadanie-proizwodstwennye-atapy).

**Параметры**

| Параметр | Описание                                                                                       |
| :------- | :--------------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 19070bfd-99d6-11ee-0a83-0a2e0000076b* id Производственного этапа |

> Пример запроса на обновление отдельного Производственного этапа.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/19070bfd-99d6-11ee-0a83-0a2e0000076b"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "processingUnitCost": 70.0,
            "labourUnitCost": 30.5
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Заказа покупателя.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/19070bfd-99d6-11ee-0a83-0a2e0000076b",
    "type": "productionstage",
    "mediaType": "application/json"
  },
  "id": "19070bfd-99d6-11ee-0a83-0a2e0000076b",
  "accountId": "4ac40edf-99d4-11ee-0a83-0ded0000002b",
  "stage": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/4b3ada86-99d4-11ee-0a83-0a2e0000070e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
      "type": "processingstage",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#processingstage/edit?id=4b3ada86-99d4-11ee-0a83-0a2e0000070e"
    }
  },
  "productionRow": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productiontask/1906fa20-99d6-11ee-0a83-0a2e00000767/productionrows/19070a2e-99d6-11ee-0a83-0a2e0000076a",
      "type": "productionrow",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#productionrow/edit?id=19070a2e-99d6-11ee-0a83-0a2e0000076a"
    }
  },
  "status": "BLOCKED",
  "materials": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/19070bfd-99d6-11ee-0a83-0a2e0000076b/materials",
      "type": "productiontaskmaterial",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "orderingPosition": 0,
  "productionVolume": 1.0,
  "processingUnitCost": 70.0,
  "labourUnitCost": 30.5
}
```

### Материалы Производственного этапа
Отдельный ресурс для управления материалами Производственного этапа.

#### Получить материалы Производственного этапа
Запрос на получение материалов Производственного этапа. Результат - объект JSON, включающий в себя:

| Название    | Тип                                                       | Описание                                                                     |
| ----------- | :-------------------------------------------------------- | :--------------------------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче                                                          |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос                                  |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой материалы Производственного этапа |

**Параметры**

| Параметр   | Описание                                                                                                                              |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Производственного этапа                                        |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000` |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей                                                 |

> Запрос на получение списка всех материалов Производственного этапа

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/7944ef04-f831-11e5-7a69-971500188b19/materials
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка материалов Производственного этапа.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/7944ef04-f831-11e5-7a69-971500188b19/materials",
    "type": "productiontaskmaterial",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/7944ef04-f831-11e5-7a69-971500188b19/materials/190703d7-99d6-11ee-0a83-0a2e00000768",
        "type": "productiontaskmaterial",
        "mediaType": "application/json"
      },
      "id": "190703d7-99d6-11ee-0a83-0a2e00000768",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "planQuantity": 1.0,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/db82710a-99d5-11ee-0a83-0a2e0000072d",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=db82468b-99d5-11ee-0a83-0a2e0000072b"
        }
      }
    }
  ]
}
```

#### Добавить материал к Производственному этапу
Запрос на добавление материала к Производственному этапу.

Для успешного создания необходимо в теле запроса указать следующие поля:

+ **assortment** - ссылка на товар/модификацию/серию, которую представляет собой материал.
+ **planQuantity** - планируемое количество.

**Параметры**

| Параметр | Описание                                                                                       |
| :------- | :--------------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Производственного этапа |

> Пример запроса на добавление материала Производственного этапа.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/7944ef04-f831-11e5-7a69-971500188b19/materials"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "planQuantity": 2,
            "assortment": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/9656117b-b717-11ec-0с80-0bba0006dcde",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                "type": "product",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=466222d6-c1c8-11ea-c0a8-f00c00000018"
              }
            }
          }
      '
```
> Response 200 (application/json)
Успешный запрос. Результат - JSON представление добавленного материала

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/7944ef04-f831-11e5-7a69-971500188b19/materials/34f6344f-015e-11e6-9464-e4de0000006c",
      "type": "productiontaskmaterial",
      "mediaType": "application/json"
    },
    "id": "34f6344f-015e-11e6-9464-e4de0000006c",
    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
    "planQuantity": 2.0,
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/9656117b-b717-11ec-0с80-0bba0006dcde",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=57c98e8c-99d8-11ee-0a83-0a2e00000771"
      }
    }
  }
]
```

#### Изменить материал Производственного этапа
Запрос на обновление отдельного материала Производственного этапа.

**Параметры**

| Параметр       | Описание                                                                                                 |
| :------------- | :------------------------------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Производственного этапа           |
| **materialID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id материала Производственного этапа |

> Пример запроса на обновление количества отдельного материала выполненного этапа.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/7944ef04-f831-11e5-7a69-971500188b19/materials/34f6344f-015e-11e6-9464-e4de0000006c"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "planQuantity": 3,
            "assortment": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/57c9a841-99d8-11ee-0a83-0a2e00000773",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                "type": "product",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=466222d6-c1c8-11ea-c0a8-f00c00000018"
              }
            }
          }
      '
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного материала.

```json
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/7944ef04-f831-11e5-7a69-971500188b19/materials/34f6344f-015e-11e6-9464-e4de0000006c",
      "type": "productiontaskmaterial",
      "mediaType": "application/json"
    },
    "id": "34f6344f-015e-11e6-9464-e4de0000006c",
    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
    "planQuantity": 3.0,
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/57c9a841-99d8-11ee-0a83-0a2e00000773",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=57c98e8c-99d8-11ee-0a83-0a2e00000358"
      }
    }
  }
```

#### Удалить материал Производственного этапа

Запрос на удаление отдельного материала Производственного этапа.

При включенном резерве, нельзя удалить последний материал в Производственном задании.

Нельзя удалить материал из выполняющегося этапа.

**Параметры**

| Параметр       | Описание                                                                                                 |
| :------------- | :------------------------------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Производственного этапа           |
| **materialID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id материала Производственного этапа |

> Запрос на удаление отдельного материала Производственного этапа с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/productionstage/7944ef04-f831-11e5-7a69-971500188b19/materials/34f6344f-015e-11e6-9464-e4de0000006c"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление материала Производственного этапа.
