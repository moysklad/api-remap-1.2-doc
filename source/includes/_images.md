## Изображение
### Изображения
Средствами JSON API можно создавать и обновлять сведения по Изображениям для Товаров и Комплектов, запрашивать списки Изображений, 
а также сведения по отдельным Изображениям. 

Товары и Комплекты могут содержать множество одинаковых Изображений. Изображения считаются одинаковыми, если при добавлении Изображений 
у них совпадало `filename` и `content`. У одинаковых Изображений одинаковое значение параметра `id`. 
У Товара и Комплекта может быть не более 10 Изображений.

#### Атрибуты сущности
+ **meta** - [Метаданные](#metadannye) объекта
+ **title** - Название Изображения
+ **filename** - Имя файла
+ **size** - Размер файла в байтах
+ **updated** - Время загрузки файла на сервер
+ **miniature** - Ссылка на миниатюру изображения в формате Метаданных
+ **tiny** - Ссылка на уменьшенное изображение в формате Метаданных

### Получить список Изображений Товара и Комплекта
Запрос на получение всех Изображений Товара или Комплекта для данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

- **meta** [Метаданные](#metadannye) о выдаче,
- **context** - [Метаданные](#metadannye) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой [Изображения](#izobrazhenie).

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Товара c Изображениями.|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить список Изображений для Товара

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19/images"
  -H "Authorization: Basic <Access-Token>"
```

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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19/images",
        "type": "image",
        "mediaType": "application/json",
        "size": 2,
        "limit": 1000,
        "offset": 0
    },
    "rows": [
        {
            "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19/images/f2728180-6afd-4d37-8a13-f3b48069bbb6",
                "type": "image",
                "mediaType": "application/json",
                "downloadHref": "https://online.moysklad.ru/api/remap/1.2/download/f2728180-6afd-4d37-8a13-f3b48069bbb6"
            },
            "title": "birdimage",
            "filename": "birdimage.png",
            "size": 14052,
            "updated": "2019-01-24 16:55:24.567",
            "miniature": {
                "href": "https://online.moysklad.ru/api/remap/1.2/download/f2728180-6afd-4d37-8a13-f3b48069bbb6?miniature=true",
                "type": "image",
                "mediaType": "image/png"
            },
            "tiny": {
                "href": "https://online.moysklad.ru/static/tinyimage/f2aab4d2-1fd3-11e9-ac12-000800000001/tinyimage/ebb10350-0272-45db-9d33-ca5a01fd5543/t.png",
                "type": "image",
                "mediaType": "image/png"
            }
        },
        {
            "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19/images/933e41ac-1946-4bf0-9b21-51f2051f3e9f",
                "type": "image",
                "mediaType": "application/json",
                "downloadHref": "https://online.moysklad.ru/api/remap/1.2/download/933e41ac-1946-4bf0-9b21-51f2051f3e9f"
            },
            "title": "birdimage1",
            "filename": "birdimage1.png",
            "size": 14052,
            "updated": "2019-01-24 16:55:25.047",
            "miniature": {
                "href": "https://online.moysklad.ru/api/remap/1.2/download/933e41ac-1946-4bf0-9b21-51f2051f3e9f?miniature=true",
                "type": "image",
                "mediaType": "image/png"
            },
            "tiny": {
                "href": "https://online.moysklad.ru/static/tinyimage/f2aab4d2-1fd3-11e9-ac12-000800000001/tinyimage/c960c879-8128-4511-addf-b933f37dc0d4/t.png",
                "type": "image",
                "mediaType": "image/png"
            }
        }
    ]
}
```

### Добавить Изображение к Товару или Комплекту
Добавить новое Изображение к Товару или Комплекту.

#### Описание
Изображение загружается и добавляется к Изображениям на основе переданного объекта JSON, 
который содержит представление нового Изображения.
Результат - JSON представление обновленного списка Изображений. Для создания и добавления нового Изображения к Товару или Комплекту, 
необходимо и достаточно указать в url запросе `id` сущности, к которой добавляется Изображение, и указать не пустые поля 
`filename` и `content` в переданном объекте.

В поле `content` нужно указать изображение, закодированное в Base64, в поле `filename` - имя файла с расширением.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Товара c Изображениями.|

> Пример добавления Изображения к Товару
  
```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19/images"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
    -d '{  
  "filename": "birdimageNew.png",
  "content": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAAEHRFWHRTb2Z0d2FyZQBTaHV0dGVyY4LQCQAAAAxJREFUCNdj+PePAQAE+gH90KA5ZAAAAABJRU5ErkJggg=="
}'
```

> Response 200 (application/json)
Успешный запрос. Результат - массив всех Изображений Товара.

```json
[
  {
      "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19/images/f2728180-6afd-4d37-8a13-f3b48069bbb6",
          "type": "image",
          "mediaType": "application/json",
          "downloadHref": "https://online.moysklad.ru/api/remap/1.2/download/f2728180-6afd-4d37-8a13-f3b48069bbb6"
      },
      "title": "birdimage",
      "filename": "birdimage.png",
      "size": 14052,
      "updated": "2019-01-24 16:55:24.567",
      "miniature": {
          "href": "https://online.moysklad.ru/api/remap/1.2/download/f2728180-6afd-4d37-8a13-f3b48069bbb6?miniature=true",
          "type": "image",
          "mediaType": "image/png"
      },
      "tiny": {
          "href": "https://online.moysklad.ru/static/tinyimage/f2aab4d2-1fd3-11e9-ac12-000800000001/tinyimage/ebb10350-0272-45db-9d33-ca5a01fd5543/t.png",
          "type": "image",
          "mediaType": "image/png"
      }
  },
  {
      "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19/images/933e41ac-1946-4bf0-9b21-51f2051f3e9f",
          "type": "image",
          "mediaType": "application/json",
          "downloadHref": "https://online.moysklad.ru/api/remap/1.2/download/933e41ac-1946-4bf0-9b21-51f2051f3e9f"
      },
      "title": "birdimageNew",
      "filename": "birdimageNew.png",
      "size": 16,
      "updated": "2019-01-24 16:55:25.047",
      "miniature": {
          "href": "https://online.moysklad.ru/api/remap/1.2/download/933e41ac-1946-4bf0-9b21-51f2051f3e9f?miniature=true",
          "type": "image",
          "mediaType": "image/png"
      },
      "tiny": {
          "href": "https://online.moysklad.ru/static/tinyimage/f2aab4d2-1fd3-11e9-ac12-000800000001/tinyimage/c960c879-8128-4511-addf-b933f37dc0d4/t.png",
          "type": "image",
          "mediaType": "image/png"
      }
  }
]
```

### Обновление списка Изображений у Товара или Комплекта

В теле запроса нужно передать массив, содержащий JSON представления Изображений, которые вы хотите установить для Товара или Комплекта.
Если необходимо оставить некоторые Изображения у Товара или Комплекта, то тело запроса должно содержать идентификатор в виде метаданных.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Товара c Изображениями.|

> Пример обновления списка Изображений у Товара

```shell
curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19/images"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
    -d '[  
  {  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19/images/f2728180-6afd-4d37-8a13-f3b48069bbb6",
      "type":"image",
      "mediaType":"application/json",
      "downloadHref":"https://online.moysklad.ru/api/remap/1.2/download/f2728180-6afd-4d37-8a13-f3b48069bbb6"
    }
  },
  {  
    "filename":"birdimageNew.png",
    "content":"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAAEHRFWHRTb2Z0d2FyZQBTaHV0dGVyY4LQCQAAAAxJREFUCNdj+PePAQAE+gH90KA5ZAAAAABJRU5ErkJggg=="
  }
]'
```

> Response 200 (application/json)
Успешный запрос. Результат - обновленный массив всех Изображений Товара.

```json
[
  {
      "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19/images/f2728180-6afd-4d37-8a13-f3b48069bbb6",
          "type": "image",
          "mediaType": "application/json",
          "downloadHref": "https://online.moysklad.ru/api/remap/1.2/download/f2728180-6afd-4d37-8a13-f3b48069bbb6"
      },
      "title": "birdimage",
      "filename": "birdimage.png",
      "size": 14052,
      "updated": "2019-01-24 16:55:24.567",
      "miniature": {
          "href": "https://online.moysklad.ru/api/remap/1.2/download/f2728180-6afd-4d37-8a13-f3b48069bbb6?miniature=true",
          "type": "image",
          "mediaType": "image/png"
      },
      "tiny": {
          "href": "https://online.moysklad.ru/static/tinyimage/f2aab4d2-1fd3-11e9-ac12-000800000001/tinyimage/ebb10350-0272-45db-9d33-ca5a01fd5543/t.png",
          "type": "image",
          "mediaType": "image/png"
      }
  },
  {
      "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19/images/933e41ac-1946-4bf0-9b21-51f2051f3e9f",
          "type": "image",
          "mediaType": "application/json",
          "downloadHref": "https://online.moysklad.ru/api/remap/1.2/download/933e41ac-1946-4bf0-9b21-51f2051f3e9f"
      },
      "title": "birdimageNew",
      "filename": "birdimageNew.png",
      "size": 16,
      "updated": "2019-01-24 16:55:25.047",
      "miniature": {
          "href": "https://online.moysklad.ru/api/remap/1.2/download/933e41ac-1946-4bf0-9b21-51f2051f3e9f?miniature=true",
          "type": "image",
          "mediaType": "image/png"
      },
      "tiny": {
          "href": "https://online.moysklad.ru/static/tinyimage/f2aab4d2-1fd3-11e9-ac12-000800000001/tinyimage/c960c879-8128-4511-addf-b933f37dc0d4/t.png",
          "type": "image",
          "mediaType": "image/png"
      }
  }
]
```

### Удалить Изображение

При удалении изображения удаляется первое найденное с данным идентификатором изображение у Товара или Комплекта.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Товара c Изображениями.|
|idImage |  `string` (required) *Example: 19f1edc0-fc42-4001-94cb-c9ec9c62ec10* id Изображениями.|

> Запрос на удаление Изображения у Товара.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19/images/19f1edc0-fc42-4001-94cb-c9ec9c62ec10"
  -H "Authorization: Basic <Access-Token>"
```
> Response 200 (application/json)
Успешное удаление Изображения.

### Удалить группу Изображений

При удалении нескольких изображений у Товара или Комплекта, удаляются первые найденые по `id` изображения, указанные в теле запроса.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Товара c Изображениями.|

> Запрос на удаление нескольких Изображений

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19/images"
  -H "Authorization: Basic <Access-Token>"
  -H "Content-Type: application/json"
        -d '[  
  {  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19/images/1aadd77f-90f9-4be6-bede-373f350b0e03",
      "type":"image",
      "mediaType":"application/json",
      "downloadHref":"https://online.moysklad.ru/api/remap/1.2/download/1aadd77f-90f9-4be6-bede-373f350b0e03"
    }
  },
  {  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19/images/f6aaab17-65a0-4425-841b-277aeef5b089",
      "type":"image",
      "mediaType":"application/json",
      "downloadHref":"https://online.moysklad.ru/api/remap/1.2/download/f6aaab17-65a0-4425-841b-277aeef5b089"
    }
  }
]'
```
> Response 200 (application/json)
Успешное удаление Изображений.
