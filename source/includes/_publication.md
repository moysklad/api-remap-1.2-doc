## Публикация документов
JSON API позволяет опубликовать для общего пользования печатную форму документа, созданную на основе шаблона печатной формы.
Кодом сущности для публикации в составе JSON API является ключевое слово **publication**.

Работа пользователя с публикациями документов возможна, если есть право на чтение и право печати сущности данного типа.

Публикации доступны только для следующих типов: Заказ покупателя, Счет покупателю, Отгрузка, Заказ поставщику, Счет поставщика, Приемка, Входящий платеж, Приходный ордер, Исходящий платеж, Расходный ордер, Внутренний заказ, Перемещение, Оприходование, Списание, Счет-фактура выданный, Счет-фактура полученный, Возврат поставщику, Возврат покупателя, Выплата денег, Внесение денег, Розничный возврат, Розничная продажа, Договор, Розничная смена, Заказ на производство, Полученный отчет комиссионера, Выданный отчет комиссионера, Инвентаризация, Тех. Операция.


### Публикации 
#### Атрибуты сущности
+ **meta** - [Метаданные](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные) Публикации
+ **template** - Ссылка на шаблон для печати в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)
+ **href** - Ссылка на страницу Публикации

### Получить публикации 

> Запрос на получение списка Публикаций по указанному документу.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|type|  `string` (required) *Example: demand* тип сущности, по которой получить Публикации.|
|id |  `string` (required) *Example: a86708d2-f8d3-4e67-8f04-6101158da808* id сущности, по которой получить Публикации.|

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/demand/a86708d2-f8d3-4e67-8f04-6101158da808/publication"
  -H "Authorization: Basic <Access-Token>"
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
      "href": "https://doc.moysklad.ru/board/f4917c19-2346-11e7-1542-821d00000001/publication/aec51463-bbd2-11e6-8a84-bae500000003.html"
    }
  ]
}
```

### Создать публикацию 
Запрос на публикацию документа.
Публикация документа происходит на основании переданного объекта JSON, который должен содержать ссылку на шаблона для печати документа **template** в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные). Если публикация была ранее создана, то ответ будет со статусом `200`.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|type|  `string` (required) *Example: demand* тип сущности, по которой получить Публикации.|
|id |  `string` (required) *Example: a86708d2-f8d3-4e67-8f04-6101158da808* id сущности, по которой получить Публикации.|

> Пример (application/json)

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/demand/a86708d2-f8d3-4e67-8f04-6101158da808/publication"
    -H "Authorization: Basic <Access-Token>"
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
  "href": "https://doc.moysklad.ru/board/f4917c19-2346-11e7-1542-821d00000001/publication/aec51463-bbd2-11e6-8a84-bae500000003.html"
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
  "href": "https://doc.moysklad.ru/board/f4917c19-2346-11e7-1542-821d00000001/publication/aec51463-bbd2-11e6-8a84-bae500000003.html"
}
```

### Публикация

### Удалить публикацию

> Запрос на удаление Публикации с указанным id.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|type|  `string` (required) *Example: demand* тип сущности.|
|id |  `string` (required) *Example: a86708d2-f8d3-4e67-8f04-6101158da808* id сущности.|
|publicationId|  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Публикации.|

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/demand/a86708d2-f8d3-4e67-8f04-6101158da808/publication/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 204 (application/json)
Успешное удаление Публикации.

### Получить публикацию

> Запрос на получение Публикации с указанным id.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|type|  `string` (required) *Example: demand* тип сущности.|
|id |  `string` (required) *Example: a86708d2-f8d3-4e67-8f04-6101158da808* id сущности.|
|publicationId|  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Публикации.|
```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/demand/a86708d2-f8d3-4e67-8f04-6101158da808/publication/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
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
  "href": "https://doc.moysklad.ru/board/f4917c19-2346-11e7-1542-821d00000001/publication/aec51463-bbd2-11e6-8a84-bae500000003.html"
}
```
