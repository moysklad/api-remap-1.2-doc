## Карточка контента

### Карточки контента
Средствами JSON API можно создавать, обновлять, удалять и просматривать сведения о Карточках контента, запрашивать списки Карточек контента и сведения по отдельным Карточкам контента. Кодом сущности для Карточки контента в составе JSON API является ключевое слово **contentcard**.

#### Атрибуты сущности
| Название            | Тип                            | Фильтрация             | Описание                                                                                                                                                                                                                                                                                                                                       |
|---------------------|:-------------------------------|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**       | UUID                           | `=` `!=`               | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                                                                                                           |
| **assortment**      | [Meta](#/general#3-metadannye) | `=` `!=`               | Метаданные Ассортимента<br>`+Expand` `+Обязательное при ответе` `+Необходимо при создании` `+После заполнения недоступно для изменения`                                                                                                                                                                                                        |
| **cardContentName** | String(255)                    |  | Как карточка контента отображается в списке на UI<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                                                                                                                                                                                     |
| **description**     | String(10000)                  |  | Описание товара или услуги<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                                                                                                                                                                                                                |
| **group**           | [Meta](#/general#3-metadannye) | `=` `!=`               | Метаданные отдела сотрудника<br>`+Обязательное при ответе` `+Expand` `+Только для чтения`                                                                                                                                                                                                                                                      |
| **id**              | UUID                           | `=` `!=`               | ID Карточки контента<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                                                                                                        |
| **meta**            | [Meta](#/general#3-metadannye) |                        | Метаданные Карточки контента<br>`+Обязательное при ответе`                                                                                                                                                                                                                                                                                     |
| **name**            | String(255)                    |  | Название товара или услуги<br> `+Обязательное при ответе` `+Необходимо при создании`                                                                                                                                                                                                                                                           |
| **owner**           | [Meta](#/general#3-metadannye) | `=` `!=`               | Метаданные владельца (Сотрудника)<br>`+Expand` `+Только для чтения`                                                                                                                                                                                                                                                                            |
| **shared**          | Boolean                        |                | Общий доступ<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                                                                                                                |
| **salePlatform**    | [Meta](#/general#3-metadannye) | `=` `!=`               | Метаданные Площадки для продаж. [Подробнее тут](#/dictionaries/saleplatform#2-ploshadka-dlya-prodazh).<br>`+Expand` `+Обязательное при ответе` `+Необходимо при создании`                                                                                                                                                                      |
| **salesChannels**   | Array(Object) | `=` | Массив ссылок на связанные каналы продаж в формате [Метаданных](#/general#3-metadannye). [Подробнее тут](#/dictionaries/saleschannel#2-kanal-prodazh). Максимальное число - 1000. Для фильтрации по полю необходимо указывать его в единственном числе **salesChannel**.<br>`+Expand` `+Обязательное при ответе` `+Необходимо при создании`    |


#### Атрибуты доступные для фильтрации
| Значение              | Описание                      |
|-----------------------|:------------------------------|
| **accountId**         | ID учетной записи             |
| **assortment**         | Ассортимент карточки контента |
| **group**             | Отдел сотрудника              |
| **id**                | ID Карточки контента          |
| **owner**             | Владелец (Сотрудник)          |
| **salePlatform** | Площадка для продаж           |
| **salesChannel**             | Канал продаж                  |


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
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/contentcard" \
  -H "Authorization: Basic <Credentials>" \
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
      "cardContentName": "Название",
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
      "salesChannels": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/saleschannel/f26b01a3-dbdb-11f0-f406-77170000015d",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/saleschannel/metadata",
            "type": "saleschannel",
            "mediaType": "application/json",
            "uuidHref": "https://api.moysklad.ru/app/#saleschannel/edit?id=f26b01a3-dbdb-11f0-f406-77170000015d"
          }
        }
      ]
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
      "cardContentName": "название",
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/013c258e-d667-11f0-0a80-073800000148",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=013b7724-d667-11f0-0a80-073800000146"
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
      "salesChannels": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/saleschannel/31e8ce0f-c99f-4824-a930-83fe7de68cd6",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/saleschannel/metadata",
            "type": "saleschannel",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#saleschannel/edit?id=31e8ce0f-c99f-4824-a930-83fe7de68cd6"
          }
        }
      ]
    }
  ]
}
```

### Запросы - Карточка контента

**Параметры**

| Параметр | Описание                                                                                  |
| :------- |:------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 529eb5b6-d726-11f0-0a80-073800000329* id Карточки контента. |

### Получить Карточку контента
> Запрос на получение отдельной карточки контента с указанным id.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/contentcard/529eb5b6-d726-11f0-0a80-073800000329" \
  -H "Authorization: Basic <Credentials>" \
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
  "cardContentName": "Название",
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
  "salesChannels": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/saleschannel/31e8ce0f-c99f-4824-a930-83fe7de68cd6",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/saleschannel/metadata",
        "type": "saleschannel",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#saleschannel/edit?id=31e8ce0f-c99f-4824-a930-83fe7de68cd6"
      }
    }
  ]
}
```

### Создать Карточку контента
Запрос на создание новой карточки контента.

> Пример запроса на создание новой карточки контента.

```shell
curl --compressed -X POST \
  "https://api.moysklad.ru/api/remap/1.2/entity/contentcard" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -d '{
        "name": "товар",
        "description": "Описание",
        "cardContentName": "Название",
        "assortment": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/013c258e-d667-11f0-0a80-073800000148",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json"
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
        "salesChannels": [
          {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/saleschannel/31e8ce0f-c99f-4824-a930-83fe7de68cd6",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/saleschannel/metadata",
              "type": "saleschannel",
              "mediaType": "application/json"
            }
          }
        ]
      }'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной карточки контента.

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
  "description": "Описание",
  "cardContentName": "Название",
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
  "salesChannels": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/saleschannel/31e8ce0f-c99f-4824-a930-83fe7de68cd6",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/saleschannel/metadata",
        "type": "saleschannel",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#saleschannel/edit?id=31e8ce0f-c99f-4824-a930-83fe7de68cd6"
      }
    }
  ]
}
```

### Массовое создание и обновление Карточек контента
[Массовое создание и обновление](#/general#3-sozdanie-i-obnovlenie-neskolkih-obuektov) Карточек контента.
В теле запроса нужно передать массив, содержащий JSON представления Карточек контента, которые вы хотите создать или обновить.
Обновляемые Карточки контента должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Карточек контента

```shell
curl --compressed -X POST \
  "https://api.moysklad.ru/api/remap/1.2/entity/contentcard" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -d '[
        {
          "name": "товар",
          "description": "Описание",
          "cardContentName": "Название",
          "assortment": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/013c258e-d667-11f0-0a80-073800000148",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
              "type": "product",
              "mediaType": "application/json"
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
          "salesChannels": [
            {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/saleschannel/31e8ce0f-c99f-4824-a930-83fe7de68cd6",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/saleschannel/metadata",
                "type": "saleschannel",
                "mediaType": "application/json"
              }
            }
          ]
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/contentcard/dfbef48e-d67d-11f0-0a80-0738000002d8",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/contentcard/metadata",
            "type": "contentcard",
            "mediaType": "application/json"
          },
          "description": "Обновленное описание",
          "cardContentName": "Обновленное название"
        }
      ]'
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Карточек контента.

```json
[
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
    "cardContentName": "Название",
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/013c258e-d667-11f0-0a80-073800000148",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
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
    "salesChannels": [
      {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/saleschannel/31e8ce0f-c99f-4824-a930-83fe7de68cd6",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/saleschannel/metadata",
          "type": "saleschannel",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#saleschannel/edit?id=31e8ce0f-c99f-4824-a930-83fe7de68cd6"
        }
      }
    ]
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
    "description": "Обновленное описание",
    "cardContentName": "Обновленное название",
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/013c258e-d667-11f0-0a80-073800000148",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
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
    "salesChannels": [
      {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/saleschannel/31e8ce0f-c99f-4824-a930-83fe7de68cd6",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/saleschannel/metadata",
          "type": "saleschannel",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#saleschannel/edit?id=31e8ce0f-c99f-4824-a930-83fe7de68cd6"
        }
      }
    ]
  }
]
```
### Изменить Карточку контента
Запрос на изменение существующей карточки контента.

**Параметры**

| Параметр | Описание                                                                                  |
| :------- |:------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 529eb5b6-d726-11f0-0a80-073800000329* id Карточки контента. |

> Пример запроса на обновление карточки контента.

```shell
curl --compressed -X PUT \
  "https://api.moysklad.ru/api/remap/1.2/entity/contentcard/529eb5b6-d726-11f0-0a80-073800000329" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -d '{
        "name": "Обновленное название товара",
        "description": "Обновленное описание",
        "cardContentName": "Обновленное название",
        "salePlatform": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/saleplatform/0f9b8b4c-4597-4772-b896-c8aff047a117",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/saleplatform/metadata",
            "type": "saleplatform",
            "mediaType": "application/json"
          }
        },
        "salesChannels": [
          {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/saleschannel/31e8ce0f-c99f-4824-a930-83fe7de68cd6",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/saleschannel/metadata",
              "type": "saleschannel",
              "mediaType": "application/json"
            }
          }
        ]
      }'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной карточки контента.

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
  "name": "Обновленное название товара",
  "description": "Обновленное описание",
  "cardContentName": "Обновленное название",
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
  "salesChannels": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/saleschannel/31e8ce0f-c99f-4824-a930-83fe7de68cd6",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/saleschannel/metadata",
        "type": "saleschannel",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#saleschannel/edit?id=31e8ce0f-c99f-4824-a930-83fe7de68cd6"
      }
    }
  ]
}
```

### Удалить Карточку контента

**Параметры**

| Параметр | Описание                                                                                  |
| :------- |:------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 529eb5b6-d726-11f0-0a80-073800000329* id Карточки контента. |

> Запрос на удаление Карточки контента с указанным id.

```shell
curl --compressed -X DELETE \
  "https://api.moysklad.ru/api/remap/1.2/entity/contentcard/529eb5b6-d726-11f0-0a80-073800000329" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление Карточки контента.

### Массовое удаление Карточек контента

В теле запроса нужно передать массив, содержащий JSON метаданных Карточек контента, которые вы хотите удалить.

> Запрос на массовое удаление Карточек контента.

```shell
curl --compressed -X POST \
  "https://api.moysklad.ru/api/remap/1.2/entity/contentcard/delete" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -d '[
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/contentcard/529eb5b6-d726-11f0-0a80-073800000329",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/contentcard/metadata",
            "type": "contentcard",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/contentcard/dfbef48e-d67d-11f0-0a80-0738000002d8",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/contentcard/metadata",
            "type": "contentcard",
            "mediaType": "application/json"
          }
        }
      ]'
```

> Успешный запрос. Результат - JSON информация об удалении Карточек контента.

```json
[
  {
    "info": "Сущность 'contentcard' с UUID: 529eb5b6-d726-11f0-0a80-073800000329 успешно удалена"
  },
  {
    "info": "Сущность 'contentcard' с UUID: dfbef48e-d67d-11f0-0a80-0738000002d8 успешно удалена"
  }
]
```
