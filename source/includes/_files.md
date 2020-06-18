## Файлы

### Работа с Файлами в рамках отдельных Операции, Товара или Контаргента
При создании и обновлении Операции, Товара или Контаргента можно указать поле files со списком элементов, имеющих следующие атрибуты:

+ **filename** - имя Файла с расширением. Например - "doc.pdf"
+ **content** - Файл, закодированное в формате Base64.

В таком случае, массив Файлов воспринимается как множество всех Файлов объекта и полностью заменяет (в случае запроса на обновление) все 
уже существующие Файлы в объекте. В случае запроса на обновление, все Файлы, которые существовали ранее в объекте будут удалены, 
а новые Файлы будут добавлены в список Файлов.
Если в запросе на обновление files будет содержать пустой массив элементов, то все Файлы у Операции, Товара или Контаргента будут удалены, т.к. 
сервер посчитает, что пользователь хочет обновить список Файлов Операции, Товара или Контаргента.

Лимит Файлов сохраняемых вместе с объектом равен 10, если вам нужно загрузить больше Файлов для одного объекта, нужно использовать способ описанный ниже. 


### Работа с Файлами Операции, Товара или Контаргента с помощью специальных ресурсов
Средствами JSON API можно создавать и обновлять сведения по Файлам для всех типов операций, товаров и контаргентов, запрашивать списки Файлов, 
а также сведения по отдельным Файлам. 

Операции, товары и контрагенты могут содержать множество одинаковых Файлов. Файлы считаются одинаковыми, если при добавлении Файлов 
у них совпадало `filename` и `content`. У одинаковых Файлов одинаковое значение параметра `id`. 
У объекта может быть не более 100 Файлов.

#### Атрибуты сущности
+ **meta** - [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) объекта
+ **title** - Название Файла
+ **filename** - Имя Файла
+ **size** - Размер Файла в байтах
+ **created** - Время загрузки Файла на сервер
+ **createdBy** - Ссылка на сотрудника, загрузившего Файл, в формате Метеданных
+ **miniature** - Ссылка на миниатюру изображения в формате Метаданных (поле передается только для Файлов изображений)
+ **tiny** - Ссылка на уменьшенное изображение в формате Метаданных (поле передается только для Файлов изображений)

### Получить список Файлов Операции, Товара или Контаргента
Запрос на получение всех Файлов Операции, Товара или Контаргента для данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

- **meta** [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) о выдаче,
- **context** - [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой [Файлы](../dictionaries/#suschnosti-fajly).

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|type |  `string` (required) *Example: product* тип сущности, для которой запрашиваются Файлы.|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Товара c Файлами.|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить список Изображений для Товара

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19/files"
  -H "Authorization: Basic <Credentials>"
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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19/files",
        "type": "files",
        "mediaType": "application/json",
        "size": 2,
        "limit": 1000,
        "offset": 0
    },
    "rows": [
        {
            "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19/files/f2728180-6afd-4d37-8a13-f3b48069bbb6",
                "type": "files",
                "mediaType": "application/json",
                "downloadHref": "https://online.moysklad.ru/api/remap/1.2/download/f2728180-6afd-4d37-8a13-f3b48069bbb6"
            },
            "title": "birdimage",
            "filename": "birdimage.png",
            "size": 14052,
            "created": "2019-01-24 16:55:24.567",
            "createdBy": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/69f5683e-a49b-11ea-ac15-000e000000cf",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                  "type": "employee",
                  "mediaType": "application/json",
                  "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=69f5683e-a49b-11ea-ac15-000e000000cf"
                }
            },
            "miniature": {
                "href": "https://online.moysklad.ru/api/remap/1.2/download/f2728180-6afd-4d37-8a13-f3b48069bbb6?miniature=true",
                "type": "files",
                "mediaType": "image/png"
            },
            "tiny": {
                "href": "https://online.moysklad.ru/static/tinyimage/f2aab4d2-1fd3-11e9-ac12-000800000001/tinyimage/ebb10350-0272-45db-9d33-ca5a01fd5543/t.png",
                "type": "files",
                "mediaType": "image/png"
            }
        },
        {
            "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19/files/933e41ac-1946-4bf0-9b21-51f2051f3e9d",
                "type": "files",
                "mediaType": "application/json",
                "downloadHref": "https://online.moysklad.ru/api/remap/1.2/download/933e41ac-1946-4bf0-9b21-51f2051f3e9d"
            },
            "title": "doc",
            "filename": "doc.pdf",
            "size": 25000,
            "created": "2019-01-25 17:30:25.021",
            "createdBy": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/69f5683e-a49b-11ea-ac15-000e000000cf",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                  "type": "employee",
                  "mediaType": "application/json",
                  "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=69f5683e-a49b-11ea-ac15-000e000000cf"
                }
            },
        }
    ]
}
```

### Добавить Файл к Операции, Товару или Контаргенту
Добавить новый Файл к Операции, Товару или Контаргенту.

#### Описание
Файлы загружается и добавляется к Файлам на основе переданного объекта JSON, 
который содержит представление нового Файла.
Результат - JSON представление обновленного списка Файлов. Для создания и добавления нового Файла к Операции, Товару или Контаргенту, 
необходимо и достаточно указать в url запросе `id` сущности, к которой добавляется Файла, и указать не пустые поля 
`filename` и `content` в переданном объекте.

В поле `content` нужно указать изображение, закодированное в Base64, в поле `filename` - имя Файла с расширением.

В одном запросе можно добавить максимум 10 Файлов.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Товара c Файлами.|

> Пример добавления Файла к Товару
  
```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19/files"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
    -d '{  
  "filename": "birdimageNew.png",
  "content": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAAEHRFWHRTb2Z0d2FyZQBTaHV0dGVyY4LQCQAAAAxJREFUCNdj+PePAQAE+gH90KA5ZAAAAABJRU5ErkJggg=="
}'
```

> Response 200 (application/json)
Успешный запрос. Результат - массив всех Файлов Товара.

```json
[
  {
      "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19/files/f2728180-6afd-4d37-8a13-f3b48069bbb6",
          "type": "files",
          "mediaType": "application/json",
          "downloadHref": "https://online.moysklad.ru/api/remap/1.2/download/f2728180-6afd-4d37-8a13-f3b48069bbb6"
      },
      "title": "birdimage",
      "filename": "birdimage.png",
      "size": 14052,
      "created": "2019-01-24 16:55:24.567",
      "createdBy": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/69f5683e-a49b-11ea-ac15-000e000000cf",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=69f5683e-a49b-11ea-ac15-000e000000cf"
          }
      },
      "miniature": {
          "href": "https://online.moysklad.ru/api/remap/1.2/download/f2728180-6afd-4d37-8a13-f3b48069bbb6?miniature=true",
          "type": "files",
          "mediaType": "image/png"
      },
      "tiny": {
          "href": "https://online.moysklad.ru/static/tinyimage/f2aab4d2-1fd3-11e9-ac12-000800000001/tinyimage/ebb10350-0272-45db-9d33-ca5a01fd5543/t.png",
          "type": "files",
          "mediaType": "image/png"
      }
  },
  {
      "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19/files/933e41ac-1946-4bf0-9b21-51f2051f3e9f",
          "type": "files",
          "mediaType": "application/json",
          "downloadHref": "https://online.moysklad.ru/api/remap/1.2/download/933e41ac-1946-4bf0-9b21-51f2051f3e9f"
      },
      "title": "doc",
      "filename": "doc.pdf",
      "size": 25000,
      "created": "2019-01-25 17:30:25.021",
      "createdBy": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/69f5683e-a49b-11ea-ac15-000e000000cf",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=69f5683e-a49b-11ea-ac15-000e000000cf"
          }
      }
  }
]
```

### Удалить Файл

При удалении Файла удаляется первый найденный с данным идентификатором Файла у Операции, Товара или Контаргента.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Товара c Файлом.|
|idFile |  `string` (required) *Example: 19f1edc0-fc42-4001-94cb-c9ec9c62ec10* id Файла.|

> Запрос на удаление Файла у Товара.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19/files/19f1edc0-fc42-4001-94cb-c9ec9c62ec10"
  -H "Authorization: Basic <Credentials>"
```
> Response 200 (application/json)
Успешное удаление Файла.
