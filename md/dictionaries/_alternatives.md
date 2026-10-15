# Сущности
## Аналоги

Средствами JSON API можно получать и изменять список аналогов Товаров, Услуг, Комплектов и Модификаций.
Максимальное число аналогов у одного объекта — 10.

### Атрибуты объекта

| Название         | Тип                          | Фильтрация | Описание                                                         |
| ---------------- | :--------------------------- | :--------- |:-----------------------------------------------------------------|
| **assortment**   | [Meta](#/general#3-metadannye) | `=` `!=`   | Метаданные Ассортимента.<br>`+Expand` `+Обязательное при ответе` |
| **alternatives** | Array(Object)                |            | Список аналогов Ассортимента.<br>`+Обязательное при ответе`      |

Каждый элемент массива **alternatives** содержит следующие атрибуты:

| Название       | Тип                          | Описание |
| -------------- | :--------------------------- | :------- |
| **assortment** | [Meta](#/general#3-metadannye) | Метаданные Ассортимента, указанного в качестве аналога.<br>`+Expand` `+Обязательное при ответе` |

Связь позиции Ассортимента с её аналогами двусторонняя: если в списке **alternatives** позиции А есть позиция Б, то в списке **alternatives** позиции Б будет позиция А. Для создания такой связи достаточно указать аналог у одной из позиций.

#### Особенности фильтрации

Без фильтра возвращаются только позиции Ассортимента, у которых есть аналоги.

- Фильтр применяется к позициям Ассортимента и не ограничивает содержимое их массивов **alternatives**.
- При использовании `assortment=` возвращаются указанные позиции независимо от наличия аналогов. Для позиций без аналогов массив **alternatives** будет пустым.
- При использовании `assortment!=` возвращаются позиции с аналогами, кроме указанных в фильтре. Указанная позиция может присутствовать в ответе в качестве аналога.

### Получить аналоги

Результат: объект JSON, включающий в себя поля:

| Название    | Тип                          | Описание |
| ----------- | :--------------------------- | :------- | 
| **meta**    | [Meta](#/general#3-metadannye) | Метаданные о выдаче. |
| **context** | [Meta](#/general#3-metadannye) | Метаданные о сотруднике, выполнившем запрос. |
| **rows**    | Array(Object)                | Массив JSON объектов, представляющих Ассортимент с аналогами. |

**Параметры**

| Параметр   | Описание |
| ---------- | :------- |
| **limit**  | `number` (optional) **Default: 1000** *Example: 100* Максимальное количество позиций Ассортимента в ответе. Допустимые значения: `1–1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в списке позиций Ассортимента. |

Применяются к позициям Ассортимента. Список `alternatives` каждой позиции возвращается полностью.

> Получить аналоги

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/assortment/alternatives" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json). Успешный запрос. Результат — JSON-представление позиций Ассортимента с аналогами.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/assortment/alternatives",
    "type": "assortmentalternatives",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/35427052-36e7-11e7-8a7f-40d0000000d7",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        }
      },
      "alternatives": [
        {
          "assortment": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/437f2d67-36e7-11e7-8a7f-40d0000000df",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
              "type": "product",
              "mediaType": "application/json"
            }
          }
        }
      ]
    },
    {
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/437f2d67-36e7-11e7-8a7f-40d0000000df",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        }
      },
      "alternatives": [
        {
          "assortment": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/35427052-36e7-11e7-8a7f-40d0000000d7",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
              "type": "product",
              "mediaType": "application/json"
            }
          }
        }
      ]
    }
  ]
}
```

> Получить аналоги одного Товара

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/assortment/alternatives?filter=assortment=https://api.moysklad.ru/api/remap/1.2/entity/product/35427052-36e7-11e7-8a7f-40d0000000d7" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json). Успешный запрос. Результат — JSON-представление Товара со списком его аналогов.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/assortment/alternatives?filter=assortment=https://api.moysklad.ru/api/remap/1.2/entity/product/35427052-36e7-11e7-8a7f-40d0000000d7",
    "type": "assortmentalternatives",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/35427052-36e7-11e7-8a7f-40d0000000d7",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        }
      },
      "alternatives": [
        {
          "assortment": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/437f2d67-36e7-11e7-8a7f-40d0000000df",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
              "type": "product",
              "mediaType": "application/json"
            }
          }
        }
      ]
    }
  ]
}
```
