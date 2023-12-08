## Выполнение производственного этапа
### Выполнение производственного этапа

#### Атрибуты сущности

#### Продукты выполненного этапа
Продукты выполненного этапа - это товары, модификации и серии, созданные при выполнении этапа производства.

Объект позиции Заказа содержит следующие поля:

| Название             | Тип                                                      | Описание                                                                                                                                                                                                                                                      |
| -------------------- |:---------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**        | UUID                                                     | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                          |
| **assortment**       | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)| Метаданные товара/услуги/серии/модификации, которую представляет собой позиция<br>`+Обязательное при ответе` `+Expand`                                                                                                                                        |
| **id**               | UUID                                                     | ID позиции<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                                 |
| **producedQuantity** | Float                                                    | Количество товаров/модификаций данного вида в позиции. Если позиция - товар, у которого включен учет по серийным номерам, то значение в этом поле всегда будет равно количеству серийных номеров для данной позиции в документе<br>`+Обязательное при ответе` |
| **things**           | Array(String)                                            | Серийные номера. Значение данного атрибута игнорируется, если товар позиции не находится на серийном учете. В ином случае количество товаров в позиции будет равно количеству серийных номеров, переданных в значении атрибута                                |

### Продукты выполненного этапа
Отдельный ресурс для управления продуктами выполненного этапа.

### Получить продукты выполненного этапа
Запрос на получение списка всех продуктов Выполнения производственного этапа.

| Название    | Тип                                                       | Описание                                                               |
| ----------- | :-------------------------------------------------------- | :--------------------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче                                                    |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос                            |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой продукты выполненного этапа |

**Параметры**

| Параметр   | Описание                                                                                                                              |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Выполнение производственного этапа                             |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000` |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей                                                 |

> Запрос на получение списка всех позиций данного продуктов Выполнения производственного этапа

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/products/"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка продуктов Выполнения производственного этапа.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "http://localhost/api/remap/1.2/context/employee",
        "metadataHref": "http://localhost/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "http://localhost/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/products/",
    "type": "productionstagecompletionresult",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "http://localhost/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/products/34f6344f-015e-11e6-9464-e4de0000006c",
        "type": "productionstagecompletionresult",
        "mediaType": "application/json"
      },
      "id": "34f6344f-015e-11e6-9464-e4de0000006c",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "producedQuantity": 0.7,
      "assortment": {
        "meta": {
          "href": "http://localhost/api/remap/1.2/entity/product/9656117b-b717-11ec-0с80-0bba0006dcde",
          "metadataHref": "http://localhost/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "http://localhost/app/#good/edit?id=96568199-b716-11ec-0a80-0bba0006dcdc"
        }
      }
    }
  ]
}
```

### Изменить продукт выполненного этапа
Запрос на обновление отдельного продукта выполненного этапа.
Изменять товар / модификацию нельзя, но можно изменить серию товара.
Для товаров с серийным учётом, поле `producedQuantity` автоматически изменяется на количество переданных в поле `things` серийных номеров.

**Параметры**

| Параметр      | Описание                                                                                                           |
| :------------ | :----------------------------------------------------------------------------------------------------------------- |
| **id**        | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Выполнения производственного этапа          |
| **productID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id продукта Выполнение производственного этапа |

> Пример запроса на обновление количества отдельного продукта выполненного этапа.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/products/34f6344f-015e-11e6-9464-e4de0000006c"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "producedQuantity": 2.7,
          }
      '  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции Заказа покупателя.

```json
    {
  "meta": {
    "href": "http://localhost/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/products/34f6344f-015e-11e6-9464-e4de0000006c",
    "type": "productionstagecompletionresult",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "producedQuantity": 2.7,
  "assortment": {
    "meta": {
      "href": "http://localhost/api/remap/1.2/entity/product/9656117b-b717-11ec-0с80-0bba0006dcde",
      "metadataHref": "http://localhost/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "http://localhost/app/#good/edit?id=96568199-b716-11ec-0a80-0bba0006dcdc"
    }
  }
}
```

> Пример запроса на обновление серийных номеров отдельного продукта выполненного этапа.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/products/34f6344f-015e-11e6-9464-e4de0000006c"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "things": ["F564X056", "F564X057"]
          }
      '  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции Заказа покупателя.

```json
{
  "meta": {
    "href": "http://localhost/api/remap/1.2/entity/productionstagecompletion/7944ef04-f831-11e5-7a69-971500188b19/products/34f6344f-015e-11e6-9464-e4de0000006c",
    "type": "productionstagecompletionresult",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "producedQuantity": 2,
  "assortment": {
    "meta": {
      "href": "http://localhost/api/remap/1.2/entity/product/9656117b-b717-11ec-0с80-0bba0006dcde",
      "metadataHref": "http://localhost/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "http://localhost/app/#good/edit?id=96568199-b716-11ec-0a80-0bba0006dcdc"
    }
  },
  "things": ["F564X056", "F564X057"]
}
```
