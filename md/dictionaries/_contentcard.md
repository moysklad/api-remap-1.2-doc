## Карточка контента

### Карточки контента
Средствами JSON API можно просматривать сведения о Карточках контента, запрашивать списки Карточек контента и сведения по отдельным Карточкам контента. Кодом сущности для Карточки контента в составе JSON API является ключевое слово contentcard.

#### Атрибуты сущности
| Название          | Тип                            | Фильтрация             | Описание                                                                                    |
|-------------------|:-------------------------------|:-----------------------|:--------------------------------------------------------------------------------------------|
| **accountId**     | UUID                           | `=` `!=`               | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                        |
| **assortment**    | [Meta](#/general#3-metadannye) | `=` `!=`               | Метаданные Ассортимента<br>`+Expand` `+Обязательное при ответе` `+Только для чтения`        |
| **description**   | String(10000)                  |  | Описание товара или услуги                                                                  |
| **group**         | [Meta](#/general#3-metadannye) | `=` `!=`               | Метаданные отдела сотрудника<br>`+Обязательное при ответе` `+Expand`                        |
| **id**            | UUID                           | `=` `!=`               | ID Карточки контента<br>`+Обязательное при ответе` `+Только для чтения`                     |
| **meta**          | [Meta](#/general#3-metadannye) |                        | Метаданные Карточки контента<br>`+Обязательное при ответе`                                  |
| **name**          | String(255)                    |  | Название товара или услуги<br>`+Обязательное при ответе` `+Необходимо при создании`         |
| **owner**         | [Meta](#/general#3-metadannye) | `=` `!=`               | Метаданные владельца (Сотрудника)<br>`+Expand`                                              |
| **shared**        | Boolean                        |                | Общий доступ<br>`+Обязательное при ответе`                                                  |
| **salePlatform**  | [Meta](#/general#3-metadannye) | `=` `!=`               | Метаданные Площадки для продаж<br>`+Expand` `+Обязательное при ответе` `+Только для чтения` |
| **salesChannels** | MetaArray                      | `=`                    | Массив Каналов продаж<br>`+Expand` `+Обязательное при ответе` `+Только для чтения`          |

#### Атрибуты доступные для фильтрации
| Значение              | Описание                      |
|-----------------------|:------------------------------|
| **accountId**         | ID учетной записи             |
| **assortment**         | Ассортимент карточки контента |
| **group**             | Отдел сотрудника              |
| **id**                | ID Карточки контента          |
| **owner**             | Владелец (Сотрудник)          |
| **salePlatform** | Площадка для продаж           |
| **salesChannels**             | Каналы продаж                 |


### Получить Карточки контента
Запрос на получение списка всех карточек контента на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                      |
| ----------- | :-------------------------------------------------------- |:--------------------------------------------------------------|
| **meta**    | [Meta](#/general#3-metadannye) | Метаданные о выдаче,                                          |
| **context** | [Meta](#/general#3-metadannye) | Метаданные о сотруднике, выполнившем запрос.                  |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой карточки контента. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |


> Получить Сущности

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/contentcard"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка карточек контента.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/contentcard",
    "type": "contentcard",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/contentcard/529eb5b6-d726-11f0-0a80-073800000329",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/contentcard/metadata",
        "type": "contentcard",
        "mediaType": "application/json"
      },
      "id": "529eb5b6-d726-11f0-0a80-073800000329",
      "accountId": "e008259e-d666-11f0-0a83-14a000000002",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/e0b3018f-d666-11f0-0a80-073800000055",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru//app/#employee/edit?id=e0b3018f-d666-11f0-0a80-073800000055"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/e00acc42-d666-11f0-0a83-14a000000003",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "name": "товар",
      "description": "Описание",
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/013c258e-d667-11f0-0a80-073800000148",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru//app/#good/edit?id=013b7724-d667-11f0-0a80-073800000146"
        }
      },
      "salePlatform": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/saleplatform/0f9b8b4c-4597-4772-b896-c8aff047a117",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/saleplatform/metadata",
          "type": "saleplatform",
          "mediaType": "application/json"
        }
      },
      "salesChannels": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/contentcard/529eb5b6-d726-11f0-0a80-073800000329/salesChannels",
          "type": "saleschannel",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/contentcard/dfbef48e-d67d-11f0-0a80-0738000002d8",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/contentcard/metadata",
        "type": "contentcard",
        "mediaType": "application/json"
      },
      "id": "dfbef48e-d67d-11f0-0a80-0738000002d8",
      "accountId": "e008259e-d666-11f0-0a83-14a000000002",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/e0b3018f-d666-11f0-0a80-073800000055",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=e0b3018f-d666-11f0-0a80-073800000055"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/e00acc42-d666-11f0-0a83-14a000000003",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "name": "товар",
      "description": "описание",
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/013c258e-d667-11f0-0a80-073800000148",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online-ecommerce-3.testms-test.lognex.ru/app/#good/edit?id=013b7724-d667-11f0-0a80-073800000146"
        }
      },
      "salePlatform": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/saleplatform/0f9b8b4c-4597-4772-b896-c8aff047a119",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/saleplatform/metadata",
          "type": "saleplatform",
          "mediaType": "application/json"
        }
      },
      "salesChannels": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/contentcard/dfbef48e-d67d-11f0-0a80-0738000002d8/salesChannels",
          "type": "saleschannel",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      }
    }
  ]
}
```

### Запросы - Карточка контента

**Параметры**

| Параметр | Описание                                                                                  |
| :------- |:------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 39aaefe6-0304-4b85-ad3c-e8b93549f426* id Карточки контента. |

### Получить Карточку контента
> Запрос на получение отдельной карточки контента с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/contentcard/529eb5b6-d726-11f0-0a80-073800000329"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление карточки контента.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/contentcard/529eb5b6-d726-11f0-0a80-073800000329",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/contentcard/metadata",
    "type": "contentcard",
    "mediaType": "application/json"
  },
  "id": "529eb5b6-d726-11f0-0a80-073800000329",
  "accountId": "e008259e-d666-11f0-0a83-14a000000002",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/e0b3018f-d666-11f0-0a80-073800000055",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru//app/#employee/edit?id=e0b3018f-d666-11f0-0a80-073800000055"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/e00acc42-d666-11f0-0a83-14a000000003",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "name": "товар",
  "description": "Описание",
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/013c258e-d667-11f0-0a80-073800000148",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru//app/#good/edit?id=013b7724-d667-11f0-0a80-073800000146"
    }
  },
  "salePlatform": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/saleplatform/0f9b8b4c-4597-4772-b896-c8aff047a117",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/saleplatform/metadata",
      "type": "saleplatform",
      "mediaType": "application/json"
    }
  },
  "salesChannels": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/contentcard/529eb5b6-d726-11f0-0a80-073800000329/salesChannels",
      "type": "saleschannel",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  }
}
```
