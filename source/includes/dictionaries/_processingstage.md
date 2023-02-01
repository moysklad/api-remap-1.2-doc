## Этап производства
Средствами JSON API можно запрашивать и обновлять списки Этапов и сведения по отдельным Этапам. Кодом сущности для Этапов в составе JSON API является ключевое слово **processingstage**. Больше об Этапах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по
[этой ссылке](https://support.moysklad.ru/hc/ru/articles/4407869768593-%D0%A0%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1-%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B0#1).
### Этапы  
#### Атрибуты сущности

| Название                | Тип                                                       | Фильтрация                 | Описание                                                                              |
| ----------------------- | :-------------------------------------------------------- |:---------------------------|:--------------------------------------------------------------------------------------|
| **accountId**           | UUID                                                      | `=` `!=`                   | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                  |
| **archived**            | Boolean                                                   | `=` `!=`                   | Добавлен ли Этап в архив<br>`+Обязательное при ответе`                                |
| **description**         | String(4096)                                              | `=` `!=` `~` `~=` `=~`     | Комментарий Этапа                                                                     |
| **externalCode**        | String(255)                                               | `=` `!=` `~` `~=` `=~`     | Внешний код Этапа<br>`+Обязательное при ответе`                                       |
| **group**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                   | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                              |
| **id**                  | UUID                                                      | `=` `!=`                   | ID Этапа<br>`+Обязательное при ответе` `+Только для чтения`                           |
| **meta**                | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                            | Метаданные Этапа<br>`+Обязательное при ответе` `+Только для чтения`                   |
| **name**                | String(255)                                               | `=` `!=` `~` `~=` `=~`     | Наименование Этапа<br>`+Обязательное при ответе` `+Необходимо при создании`           |
| **owner**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                   | Владелец (Сотрудник)<br>`+Обязательное при ответе` `+Expand`                          |
| **shared**              | Boolean                                                   | `=` `!=`                   | Общий доступ<br>`+Обязательное при ответе`                                            |
| **updated**             | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=` | Момент последнего обновления Этапа<br>`+Обязательное при ответе` `+Только для чтения` |

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
  "https://online.moysklad.ru/api/remap/1.2/entity/processingstage"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Этапов.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/context/employee",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage",
    "type": "processingstage",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c1",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
        "type": "processingstage",
        "mediaType": "application/json",
        "uuidHref": "http://online.moysklad.ru/app/#processingstage/edit?id=d2308bcc-8fd9-11ed-ac12-000b000000c1"
      },
      "id": "d2308bcc-8fd9-11ed-ac12-000b000000c1",
      "accountId": "d063f3f3-8fd9-11ed-ac12-000e00000000",
      "owner": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d105a6bf-8fd9-11ed-ac12-000b0000004f",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "http://online.moysklad.ru/app/#employee/edit?id=d105a6bf-8fd9-11ed-ac12-000b0000004f"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d0668856-8fd9-11ed-ac12-000e00000001",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2023-01-11 09:01:18.363",
      "name": "Основной этап",
      "externalCode": "sTV9PL-HjZkNgDMUqvKKe3",
      "archived": false
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
    "https://online.moysklad.ru/api/remap/1.2/entity/processingstage"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Этап 1",
            "externalCode": "456",
            "description": "Подготовка"
          }'  
  ```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Этапа.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c1",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
    "type": "processingstage",
    "mediaType": "application/json",
    "uuidHref": "http://online.moysklad.ru/app/#processingstage/edit?id=d2308bcc-8fd9-11ed-ac12-000b000000c1"
  },
  "id": "d2308bcc-8fd9-11ed-ac12-000b000000c1",
  "accountId": "d063f3f3-8fd9-11ed-ac12-000e00000000",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d105a6bf-8fd9-11ed-ac12-000b0000004f",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "http://online.moysklad.ru/app/#employee/edit?id=d105a6bf-8fd9-11ed-ac12-000b0000004f"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d0668856-8fd9-11ed-ac12-000e00000001",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2023-01-11 09:01:18.363",
  "name": "Этап 1",
  "description": "Подготовка",
  "externalCode": "456",
  "archived": false
}
```

### Массовое создание и обновление этапов
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) этапов.
В теле запроса нужно передать массив, содержащий JSON представления этапов, которые вы хотите создать или обновить.
Обновляемые этапы должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких этапов

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/processingstage"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "Этап 2"
            },
            {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c1",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
                "type": "processingstage",
                "mediaType": "application/json",
                "uuidHref": "http://online.moysklad.ru/app/#processingstage/edit?id=d2308bcc-8fd9-11ed-ac12-000b000000c1"
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
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c2",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
      "type": "processingstage",
      "mediaType": "application/json",
      "uuidHref": "http://online.moysklad.ru/app/#processingstage/edit?id=d2308bcc-8fd9-11ed-ac12-000b000000c2"
    },
    "id": "d2308bcc-8fd9-11ed-ac12-000b000000c2",
    "accountId": "d063f3f3-8fd9-11ed-ac12-000e00000000",
    "owner": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d105a6bf-8fd9-11ed-ac12-000b0000004f",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "http://online.moysklad.ru/app/#employee/edit?id=d105a6bf-8fd9-11ed-ac12-000b0000004f"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d0668856-8fd9-11ed-ac12-000e00000001",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2023-01-31 11:47:09.193",
    "name": "Этап 2",
    "externalCode": "hsthsrehs",
    "archived": false
  },
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c1",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
      "type": "processingstage",
      "mediaType": "application/json",
      "uuidHref": "http://online.moysklad.ru/app/#processingstage/edit?id=d2308bcc-8fd9-11ed-ac12-000b000000c1"
    },
    "id": "d2308bcc-8fd9-11ed-ac12-000b000000c1",
    "accountId": "d063f3f3-8fd9-11ed-ac12-000e00000000",
    "owner": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d105a6bf-8fd9-11ed-ac12-000b0000004f",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "http://online.moysklad.ru/app/#employee/edit?id=d105a6bf-8fd9-11ed-ac12-000b0000004f"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d0668856-8fd9-11ed-ac12-000e00000001",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2023-01-31 11:47:09.559",
    "name": "Этап 1",
    "description": "Подготовка",
    "externalCode": "sTV9PL-HjZkNgDMUqvKKe3",
    "archived": false
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
  "https://online.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c2"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Этапа.

### Массовое удаление Этапов

В теле запроса нужно передать массив, содержащий JSON метаданных Этапов, которые вы хотите удалить.


> Запрос на массовое удаление Этапов.

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/processingstage/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c2",
            "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
            "type": "processingstage",
            "mediaType": "application/json",
          }
        },
        {
          "meta": {
            "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c1",
            "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
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
  "https://online.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c1"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Этапа.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c1",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
    "type": "processingstage",
    "mediaType": "application/json",
    "uuidHref": "http://online.moysklad.ru/app/#processingstage/edit?id=d2308bcc-8fd9-11ed-ac12-000b000000c1"
  },
  "id": "d2308bcc-8fd9-11ed-ac12-000b000000c1",
  "accountId": "d063f3f3-8fd9-11ed-ac12-000e00000000",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d105a6bf-8fd9-11ed-ac12-000b0000004f",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "http://online.moysklad.ru/app/#employee/edit?id=d105a6bf-8fd9-11ed-ac12-000b0000004f"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d0668856-8fd9-11ed-ac12-000e00000001",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2023-01-11 09:01:18.363",
  "name": "Основной этап",
  "externalCode": "sTV9PL-HjZkNgDMUqvKKe3",
  "archived": false
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
     "https://online.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c1"
     -H "Authorization: Basic <Credentials>"
     -H "Content-Type: application/json"
       -d '{
             "name": "Этап 1.1"
           }'  
 ```
> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Этапа.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c1",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
    "type": "processingstage",
    "mediaType": "application/json",
    "uuidHref": "http://online.moysklad.ru/app/#processingstage/edit?id=d2308bcc-8fd9-11ed-ac12-000b000000c1"
  },
  "id": "d2308bcc-8fd9-11ed-ac12-000b000000c1",
  "accountId": "d063f3f3-8fd9-11ed-ac12-000e00000000",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d105a6bf-8fd9-11ed-ac12-000b0000004f",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "http://online.moysklad.ru/app/#employee/edit?id=d105a6bf-8fd9-11ed-ac12-000b0000004f"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d0668856-8fd9-11ed-ac12-000e00000001",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2023-01-11 09:01:18.363",
  "name": "Этап 1.1",
  "externalCode": "sTV9PL-HjZkNgDMUqvKKe3",
  "archived": false
}
```
