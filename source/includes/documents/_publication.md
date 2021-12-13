## Публикация документов
JSON API позволяет опубликовать для общего пользования печатную форму документа, созданную на основе [шаблона печатной формы](../dictionaries/#suschnosti-shablon-pechatnoj-formy).
Кодом сущности для публикации в составе JSON API является ключевое слово **publication**.

Работа пользователя с публикациями документов возможна, если есть право на чтение и право печати сущности данного типа.

Публикации доступны только для следующих типов: Заказ покупателя, Счет покупателю, Отгрузка, Заказ поставщику, Счет поставщика, Приемка, Входящий платеж, Приходный ордер, Исходящий платеж, Расходный ордер, Внутренний заказ, Перемещение, Оприходование, Списание, Счет-фактура выданный, Счет-фактура полученный, Возврат поставщику, Возврат покупателя, Выплата денег, Внесение денег, Розничный возврат, Розничная продажа, Договор, Розничная смена, Заказ на производство, Полученный отчет комиссионера, Выданный отчет комиссионера, Инвентаризация, Тех. Операция.


### Публикации 
#### Атрибуты сущности

| Название     | Тип                                                       | Описание                                                          |
| ------------ | :-------------------------------------------------------- | :---------------------------------------------------------------- |
| **meta**     | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Публикации<br>`+Обязательное при ответе`               |
| **template** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Шаблона печати<br>`+Обязательное при ответе` `+Expand` |
| **href**     | URL                                                       | Ссылка на страницу Публикации<br>`+Обязательное при ответе`       |

### Получить публикации 

**Параметры**

| Параметр | Описание                                                                                                         |
| :------- | :--------------------------------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: a86708d2-f8d3-4e67-8f04-6101158da808* id сущности, по которой получить Публикации. |
| **type** | `string` (required) *Example: demand* тип сущности, по которой получить Публикации.                              |

> Запрос на получение списка Публикаций по указанному документу.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/demand/a86708d2-f8d3-4e67-8f04-6101158da808/publication"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Публикаций.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/context/employee",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/0b71daec-055e-11e6-9464-e4de0000007e/publication",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
    "type": "demand",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/0b71daec-055e-11e6-9464-e4de0000007e/publication/aec51463-bbd2-11e6-8a84-bae500000003",
        "type": "operationpublication",
        "mediaType": "application/json"
      },
      "template": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata/customtemplate/38d1c843-1601-11e7-8af5-581e00000009",
          "type": "customtemplate",
          "mediaType": "application/json"
        }
      },
      "href": "https://mskld.ru/73NIpnAbPr"
    }
  ]
}
```

### Публикация

### Создать публикацию 
Запрос на публикацию документа.
Публикация документа происходит на основании переданного объекта JSON, который должен содержать ссылку на шаблона для печати документа **template** в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye). Если публикация была ранее создана, то ответ будет со статусом `200`.

**Параметры**

| Параметр | Описание                                                                                                         |
| :------- | :--------------------------------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: a86708d2-f8d3-4e67-8f04-6101158da808* id сущности, по которой получить Публикации. |
| **type** | `string` (required) *Example: demand* тип сущности, по которой получить Публикации.                              |

> Пример (application/json)

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/demand/a86708d2-f8d3-4e67-8f04-6101158da808/publication"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "template": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata/customtemplate/38d1c843-1601-11e7-8af5-581e00000009",
                "type": "customtemplate",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление ранее созданной Публикации.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/0b71daec-055e-11e6-9464-e4de0000007e/publication/aec51463-bbd2-11e6-8a84-bae500000003",
    "type": "operationpublication",
    "mediaType": "application/json"
  },
  "template": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata/customtemplate/38d1c843-1601-11e7-8af5-581e00000009",
      "type": "customtemplate",
      "mediaType": "application/json"
    }
  },
  "href": "https://mskld.ru/reu92ZrjCM"
}
```

> Response 201 (application/json)
Успешный запрос. Результат - JSON представление созданной Публикации.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/0b71daec-055e-11e6-9464-e4de0000007e/publication/aec51463-bbd2-11e6-8a84-bae500000003",
    "type": "operationpublication",
    "mediaType": "application/json"
  },
  "template": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata/customtemplate/38d1c843-1601-11e7-8af5-581e00000009",
      "type": "customtemplate",
      "mediaType": "application/json"
    }
  },
  "href": "https://mskld.ru/f00HzRGx8Q"
}
```

### Удалить публикацию

**Параметры**

| Параметр          | Описание                                                                           |
| :---------------- | :--------------------------------------------------------------------------------- |
| **id**            | `string` (required) *Example: a86708d2-f8d3-4e67-8f04-6101158da808* id сущности.   |
| **publicationId** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Публикации. |
| **type**          | `string` (required) *Example: demand* тип сущности.                                |

> Запрос на удаление Публикации с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/demand/a86708d2-f8d3-4e67-8f04-6101158da808/publication/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 204 (application/json)
Успешное удаление Публикации.

### Получить публикацию

**Параметры**

| Параметр          | Описание                                                                           |
| :---------------- | :--------------------------------------------------------------------------------- |
| **id**            | `string` (required) *Example: a86708d2-f8d3-4e67-8f04-6101158da808* id сущности.   |
| **publicationId** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Публикации. |
| **type**          | `string` (required) *Example: demand* тип сущности.                                |

> Запрос на получение Публикации с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/demand/a86708d2-f8d3-4e67-8f04-6101158da808/publication/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Публикации.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/0b71daec-055e-11e6-9464-e4de0000007e/publication/aec51463-bbd2-11e6-8a84-bae500000003",
    "type": "operationpublication",
    "mediaType": "application/json"
  },
  "template": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata/customtemplate/38d1c843-1601-11e7-8af5-581e00000009",
      "type": "customtemplate",
      "mediaType": "application/json"
    }
  },
  "href": "https://mskld.ru/fuXrdd7Uii"
}
```
