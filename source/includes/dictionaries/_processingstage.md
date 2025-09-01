## Этап производства
Средствами JSON API можно запрашивать и обновлять списки Этапов и сведения по отдельным Этапам. Кодом сущности для Этапов в составе JSON API является ключевое слово **processingstage**. Больше об Этапах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по
[этой ссылке](https://support.moysklad.ru/hc/ru/articles/16928316877329-%D0%A2%D0%B5%D1%85%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D1%8B-%D0%B8-%D0%AD%D1%82%D0%B0%D0%BF%D1%8B).
### Этапы  
#### Атрибуты сущности

| Название                 | Тип                                                       | Фильтрация                 | Описание                                                                                                                                                                                                                                 |
|--------------------------|:----------------------------------------------------------|:---------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**            | UUID                                                      | `=` `!=`                   | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                     |
| **allPerformers**        | Boolean                                                   |                            | Признак доступности назначения на этап любого сотрудника<br>`+Обязательное при ответе`                                                                                                                                                   |
| **archived**             | Boolean                                                   | `=` `!=`                   | Добавлен ли Этап в архив<br>`+Обязательное при ответе`                                                                                                                                                                                   |
| **description**          | String(4096)                                              | `=` `!=` `~` `~=` `=~`     | Комментарий Этапа                                                                                                                                                                                                                        |
| **distributionRequired** | Boolean                                                   |                            | Признак видимости заданий для исполнителей в веб-приложении МойСклад Производство. true - показывать исполнителю только назначенные на него задания; false - показывать исполнителю все доступные задания<br>`+Обязательное при ответе`  |
| **externalCode**         | String(255)                                               | `=` `!=` `~` `~=` `=~`     | Внешний код Этапа<br>`+Обязательное при ответе`                                                                                                                                                                                          |
| **group**                | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                   | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                                                                                                                 |
| **id**                   | UUID                                                      | `=` `!=`                   | ID Этапа<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                              |
| **materialStore**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                            | Метаданные склада материалов<br>`+Только для чтения`                                                                                                                                                                                     |
| **meta**                 | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                            | Метаданные Этапа<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                      |
| **name**                 | String(255)                                               | `=` `!=` `~` `~=` `=~`     | Наименование Этапа<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                                                                                                              |
| **owner**                | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                   | Владелец (Сотрудник)<br> `+Expand`                                                                                                                                                                                                       |
| **performers**           | MetaArray                                                 |                            | Метаданные возможных исполнителей<br>`+Обязательное при ответе`                                                                                                                                                                          |
| **shared**               | Boolean                                                   | `=` `!=`                   | Общий доступ<br>`+Обязательное при ответе`                                                                                                                                                                                               |
| **standardHourCost**     | Double                                                    |                            | Стоимость нормо-часа<br>`+Обязательное при ответе`                                                                                                                                                                                       |
| **updated**              | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=` | Момент последнего обновления Этапа<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                    |
Особенности:<br>
Если флаг allperformers=true И список performers[] пустой, то это состояние: “Любой активный сотрудник может быть назначен исполнителем этого этапа”.<br>
Если флаг allperformers=false И список performers[] пустой, то это состояние: “Никто не может быть назначен исполнителем этого этапа”.<br>
Если флаг allperformers=false И список performers[] вернулся с данными, то это состояние: “Только сотрудник из выборки может быть назначен исполнителем этого этапа”.<br>
При передаче в запросе только allperformers=true массив performers будет автоматически очищен. так же при передаче только массива performers будет автоматически изменено значение allperformers на false.

### Получить список Этапов

Запрос всех Этапов на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                        |
| ----------- | :-------------------------------------------------------- |:------------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче                             |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос     |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Этапы|

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить список Этапов

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingstage"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Этапов.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage",
    "type": "processingstage",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c1",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
        "type": "processingstage",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#processingstage/edit?id=d2308bcc-8fd9-11ed-ac12-000b000000c1"
      },
      "id": "d2308bcc-8fd9-11ed-ac12-000b000000c1",
      "accountId": "d063f3f3-8fd9-11ed-ac12-000e00000000",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d105a6bf-8fd9-11ed-ac12-000b0000004f",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=d105a6bf-8fd9-11ed-ac12-000b0000004f"
        }
      },
      "shared": true,
      "standardHourCost": 0.0,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d0668856-8fd9-11ed-ac12-000e00000001",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2023-01-11 09:01:18.363",
      "name": "Основной этап",
      "externalCode": "sTV9PL-HjZkNgDMUqvKKe3",
      "archived": false,
      "allPerformers": false,
      "distributionRequired" : false,
      "performers": [
        {
          "meta": {
            "href": "http://localhost/api/remap/1.2/entity/employee/83db6e80-761b-4e3d-aee8-641299ed0898",
            "metadataHref": "http://localhost/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=83db6e80-761b-4e3d-aee8-641299ed0898"
          }
        }
      ]
    }
  ]
}
```

### Создать Этап
Создать новый Этап.
#### Описание
Этап создается на основе переданного объекта JSON, который содержит представление нового Этапа. 
Результат - JSON представление созданного Этапа.
Для создания нового Этапа необходимо и достаточно указать в переданном объекте не пустое поле `name`.

> Пример наиболее полного по количеству полей запроса.

  ```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/processingstage"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "name": "Этап 1",
            "externalCode": "456",
            "description": "Подготовка",
            "allPerformers" : true
          }'  
  ```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Этапа.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c1",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
    "type": "processingstage",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#processingstage/edit?id=d2308bcc-8fd9-11ed-ac12-000b000000c1"
  },
  "id": "d2308bcc-8fd9-11ed-ac12-000b000000c1",
  "accountId": "d063f3f3-8fd9-11ed-ac12-000e00000000",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d105a6bf-8fd9-11ed-ac12-000b0000004f",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=d105a6bf-8fd9-11ed-ac12-000b0000004f"
    }
  },
  "shared": true,
  "standardHourCost": 0.0,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d0668856-8fd9-11ed-ac12-000e00000001",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2023-01-11 09:01:18.363",
  "name": "Этап 1",
  "description": "Подготовка",
  "externalCode": "456",
  "archived": false,
  "allPerformers": true,
  "distributionRequired" : false,
  "performers": []
}
```

### Массовое создание и обновление этапов
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) этапов.
В теле запроса нужно передать массив, содержащий JSON представления этапов, которые вы хотите создать или обновить.
Обновляемые этапы должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких этапов

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/processingstage"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "Этап 2"
            },
            {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c1",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
                "type": "processingstage",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#processingstage/edit?id=d2308bcc-8fd9-11ed-ac12-000b000000c1"
              },
              "name": "Этап 1",
              "description": "Подготовка"
            }
          ]'  
```
> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных этапов.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c2",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
      "type": "processingstage",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#processingstage/edit?id=d2308bcc-8fd9-11ed-ac12-000b000000c2"
    },
    "id": "d2308bcc-8fd9-11ed-ac12-000b000000c2",
    "accountId": "d063f3f3-8fd9-11ed-ac12-000e00000000",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d105a6bf-8fd9-11ed-ac12-000b0000004f",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=d105a6bf-8fd9-11ed-ac12-000b0000004f"
      }
    },
    "shared": true,
    "standardHourCost": 0.0,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d0668856-8fd9-11ed-ac12-000e00000001",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2023-01-31 11:47:09.193",
    "name": "Этап 2",
    "externalCode": "hsthsrehs",
    "archived": false,
    "allPerformers": true,
    "distributionRequired" : false,
    "performers": []
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c1",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
      "type": "processingstage",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#processingstage/edit?id=d2308bcc-8fd9-11ed-ac12-000b000000c1"
    },
    "id": "d2308bcc-8fd9-11ed-ac12-000b000000c1",
    "accountId": "d063f3f3-8fd9-11ed-ac12-000e00000000",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d105a6bf-8fd9-11ed-ac12-000b0000004f",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=d105a6bf-8fd9-11ed-ac12-000b0000004f"
      }
    },
    "shared": true,
    "standardHourCost": 0.0,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d0668856-8fd9-11ed-ac12-000e00000001",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2023-01-31 11:47:09.559",
    "name": "Этап 1",
    "description": "Подготовка",
    "externalCode": "sTV9PL-HjZkNgDMUqvKKe3",
    "archived": false,
    "allPerformers": true,
    "distributionRequired" : false,
    "performers": []
  }
]
```


### Удалить Этап

**Параметры**

| Параметр | Описание                                                                      |
| :------- |:------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: d2308bcc-8fd9-11ed-ac12-000b000000c2* id Этапа. |

> Запрос на удаление Этапа с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c2"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление Этапа.

### Массовое удаление Этапов

В теле запроса нужно передать массив, содержащий JSON метаданных Этапов, которые вы хотите удалить.


> Запрос на массовое удаление Этапов.

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
            "type": "processingstage",
            "mediaType": "application/json",
          }
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c1",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
            "type": "processingstage",
            "mediaType": "application/json",
          }
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Этапов.

```json
[
  {
    "info":"Сущность 'processingstage' с UUID: d2308bcc-8fd9-11ed-ac12-000b000000c2 успешно удалена"
  },
  {
    "info":"Сущность 'processingstage' с UUID: d2308bcc-8fd9-11ed-ac12-000b000000c1 успешно удалена"
  }
]
```  

### Этап

### Получить Этап

**Параметры**

| Параметр | Описание                                                                      |
| :------- |:------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: d2308bcc-8fd9-11ed-ac12-000b000000c1* id Этапа. |
 
> Запрос на получение отдельного Этапа с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c1"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Этапа.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c1",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
    "type": "processingstage",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#processingstage/edit?id=d2308bcc-8fd9-11ed-ac12-000b000000c1"
  },
  "id": "d2308bcc-8fd9-11ed-ac12-000b000000c1",
  "accountId": "d063f3f3-8fd9-11ed-ac12-000e00000000",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d105a6bf-8fd9-11ed-ac12-000b0000004f",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=d105a6bf-8fd9-11ed-ac12-000b0000004f"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d0668856-8fd9-11ed-ac12-000e00000001",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2023-01-11 09:01:18.363",
  "name": "Основной этап",
  "externalCode": "sTV9PL-HjZkNgDMUqvKKe3",
  "archived": false,
  "allPerformers": true,
  "distributionRequired" : false,
  "performers": []
}
```

### Изменить Этап
Запрос на обновление существующего Этапа.

**Параметры**

| Параметр | Описание                                                                     |
| :------- |:-----------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: d2308bcc-8fd9-11ed-ac12-000b000000c1* id Этапа.|

> Пример запроса на обновление Этапа

 ```shell
   curl -X PUT
     "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c1"
     -H "Authorization: Basic <Credentials>"
     -H "Accept-Encoding: gzip"
     -H "Content-Type: application/json"
       -d '{
             "name": "Этап 1.1",
             "performers": [
               {
                 "meta": {
                   "href": "http://localhost/api/remap/1.2/entity/employee/83db6e80-761b-4e3d-aee8-641299ed0898",
                   "metadataHref": "http://localhost/api/remap/1.2/entity/employee/metadata",
                   "type": "employee",
                   "mediaType": "application/json",
                   "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=83db6e80-761b-4e3d-aee8-641299ed0898"
                 }
               }
             ]
           }'  
 ```
> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Этапа.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c1",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
    "type": "processingstage",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#processingstage/edit?id=d2308bcc-8fd9-11ed-ac12-000b000000c1"
  },
  "id": "d2308bcc-8fd9-11ed-ac12-000b000000c1",
  "accountId": "d063f3f3-8fd9-11ed-ac12-000e00000000",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d105a6bf-8fd9-11ed-ac12-000b0000004f",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=d105a6bf-8fd9-11ed-ac12-000b0000004f"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d0668856-8fd9-11ed-ac12-000e00000001",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2023-01-11 09:01:18.363",
  "name": "Этап 1.1",
  "externalCode": "sTV9PL-HjZkNgDMUqvKKe3",
  "archived": false,
  "allPerformers" : false,
  "distributionRequired" : false,
  "performers": [
    {
      "meta": {
        "href": "http://localhost/api/remap/1.2/entity/employee/83db6e80-761b-4e3d-aee8-641299ed0898",
        "metadataHref": "http://localhost/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=83db6e80-761b-4e3d-aee8-641299ed0898"
      }
    }
  ]
}
```
