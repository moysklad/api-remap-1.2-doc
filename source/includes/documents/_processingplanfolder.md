## Группа техкарт
Средствами JSON API можно создавать и обновлять сведения о Группах техкарт, запрашивать списки Групп техкарт и сведения по отдельным Группам техкарт. Кодом сущности для Группы техкарт в составе JSON API является ключевое слово **processingplanfolder**.

### Группы техкарт
#### Атрибуты сущности

| Название                | Тип                                                       | Описание                                                                                                                                                                                                |
| ----------------------- | :-------------------------------------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**           | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                    |
| **archived**            | Boolean                                                   | Добавлена ли Группа техкарт в архив<br>`+Обязательное при ответе`                                                                                                                                       |
| **externalCode**        | String(255)                                               | Внешний код Группы техкарт<br>`+Обязательное при ответе`                                                                                                                                                |
| **code**                | String(255)                                               | Код Группы техкарт                                                                                                                                                                                      |
| **description**         | String(4096)                                              | Описание Группы техкарт                                                                                                                                                                                 |
| **group**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные отдела сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                                                                    |
| **id**                  | UUID                                                      | ID Группы техкарт<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                    |
| **meta**                | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Группы техкарт<br>`+Обязательное при ответе`                                                                                                                                                 |
| **name**                | String(255)                                               | Наименование Группы техкарт<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                                                                    |
| **owner**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные владельца (Сотрудника)<br>`+Expand`                                                                                                                                                          |
| **pathName**            | String                                                    | Наименование Группы техкарт, в которую входит данная Группа техкарт<br>`+Обязательное при ответе` `+Только для чтения`                                                                                  |
| **shared**              | Boolean                                                   | Общий доступ<br>`+Обязательное при ответе`                                                                                                                                                              |
| **updated**             | DateTime                                                  | Момент последнего обновления сущности<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                |

### Получить список Групп техкарт
Запрос всех Групп техкарт на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                   |
| ----------- | :-------------------------------------------------------- |:-----------------------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче                                        |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос                |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Группы техкарт  |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить список Групп техкарт

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Групп техкарт.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
    "type": "processingplanfolder",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/3ea73e1a-2cad-11e6-8a84-bae50000001d",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
        "type": "processingplanfolder",
        "mediaType": "application/json"
      },
      "id": "3ea73e1a-2cad-11e6-8a84-bae50000001d",
      "accountId": "da7d9bbe-2c97-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2022-04-18 09:48:28.563",
      "name": "ГруппаТехКарт",
      "externalCode": "gt6UOfuXgb2ChJBcVn55H2",
      "archived": false,
      "pathName": ""
    }
  ]
}
```

### Создать новую Группу техкарт

Запрос на создание новой Группы техкарт
Обязательные для создания Группы техкарт поля:

| Название       | Описание                            |
| -------------- | ----------------------------------- |
| **name**       | Наименование Группы техкарт         |

> Пример создания новой Группы техкарт с телом запроса, содержащим только поле name.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "name": "Группа 1"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Группы техкарт.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/3ea73e1a-2cad-11e6-8a84-bae50000001d",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
    "type": "processingplanfolder",
    "mediaType": "application/json"
  },
  "id": "3ea73e1a-2cad-11e6-8a84-bae50000001d",
  "accountId": "da7d9bbe-2c97-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-06-07 15:42:07",
  "name": "Группа 1",
  "externalCode": "mRQao-5IgY3soIY1EaI083",
  "archived": false,
  "pathName": ""
}
```

> Пример создания новой Группы техкарт с более насыщенным телом запроса.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "name": "Группа 2",
            "code": "13321",
            "externalCode": "extGroup"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Группы техкарт.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/275961ab-2cad-11e6-8a84-bae50000001a",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
    "type": "processingplanfolder",
    "mediaType": "application/json"
  },
  "id": "275961ab-2cad-11e6-8a84-bae50000001a",
  "accountId": "da7d9bbe-2c97-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-06-07 15:41:28",
  "name": "Группа 2",
  "code": "13321",
  "externalCode": "extGroup",
  "archived": false,
  "pathName": ""
}
```

### Массовое создание и обновление Групп техкарт
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Групп техкарт.
В теле запроса нужно передать массив, содержащий JSON представления Групп техкарт, которые вы хотите создать или обновить.
Обновляемые Группы техкарт должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Групп техкарт

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "Группа Мебель",
              "externalCode": "furnitureCode"
            },
            {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/3ea73e1a-2cad-11e6-8a84-bae50000001d",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
                "type": "processingplanfolder",
                "mediaType": "application/json"
              },
              "name": "Группа Авто"
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Групп техкарт.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/3ea73e1a-2cad-11e6-8a84-bae50000001d",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
      "type": "processingplanfolder",
      "mediaType": "application/json"
    },
    "id": "3ea73e1a-2cad-11e6-8a84-bae50000001d",
    "accountId": "da7d9bbe-2c97-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2022-04-19 09:48:28.563",
    "name": "Группа Авто",
    "externalCode": "HiQQWfW-jK5Z8e5KxjkCb2",
    "archived": false,
    "pathName": ""
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/d071992d-bee8-11ec-0a82-031400000004",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
      "type": "processingplanfolder",
      "mediaType": "application/json"
    },
    "id": "d071992d-bee8-11ec-0a82-031400000004",
    "accountId": "da7d9bbe-2c97-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2022-04-19 09:48:28.563",
    "name": "Группа Мебель",
    "externalCode": "furnitureCode",
    "archived": false,
    "pathName": ""
  }
]
```  

### Удалить Группу техкарт

**Параметры**

| Параметр | Описание                                                                               |
| :------- | :------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Группы техкарт. |

> Запрос на удаление Группы техкарт с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление Группы техкарт.

### Массовое удаление Групп техкарт

В теле запроса нужно передать массив, содержащий JSON метаданных Групп техкарт, которые вы хотите удалить.


> Запрос на массовое удаление Групп техкарт.

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
            "type": "processingplanfolder",
            "mediaType": "application/json"
            }
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
            "type": "processingplanfolder",
            "mediaType": "application/json"
            }
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Групп техкарт.

```json
[
  {
    "info":"Сущность 'processingplanfolder' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'processingplanfolder' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
```


### Метаданные Групп техкарт
#### Метаданные Групп техкарт

Запрос на получение метаданных Групп техкарт. Результат - объект JSON, включающий в себя:

| Название       | Тип                                                       | Описание                                               |
| -------------- | :-------------------------------------------------------- |:-------------------------------------------------------|
| **meta**       | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Групп техкарт<br>`+Обязательное при ответе` |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Получить метаданные Групп техкарт

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Групп техкарт.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
    "mediaType": "application/json"
  }
}
```

### Группа техкарт

**Параметры**

| Параметр | Описание                                                                                 |
| :------- |:-----------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Группы техкарты   |

### Получить Группу техкарт

> Запрос на получение отдельной Группы техкарт с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/8c329385-bee9-11ec-0a82-04c500000102"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Группы техкарт.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/8c329385-bee9-11ec-0a82-04c500000102",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
    "type": "processingplanfolder",
    "mediaType": "application/json"
  },
  "id": "8c329385-bee9-11ec-0a82-04c500000102",
  "accountId": "da7d9bbe-2c97-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2022-04-19 09:48:28.563",
  "name": "Группа Мебель",
  "externalCode": "furnitureCode",
  "archived": false,
  "pathName": ""
}
```

### Изменить Группу техкарт

Запрос на обновление Группы техкарт с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Группы техкарт, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Группы техкарт](../documents/#dokumenty-gruppa-tehkart-gruppy-tehkart).
Для обновления поля **pathName** нужно обновить ссылку на родительскую Группу техкарт, т.е. обновить поле
**processingplanfolder**

**Параметры**

| Параметр | Описание                                                                               |
| :------- | :------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Группы техкарт. |

> Пример запроса на обновление конкретной Группы техкарт.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "name": "Группа 1",
            "code": "groupCode",
            "externalCode": "extGroupCode"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Группы техкарт.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/3ea73e1a-2cad-11e6-8a84-bae50000001d",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
    "type": "processingplanfolder",
    "mediaType": "application/json"
  },
  "id": "3ea73e1a-2cad-11e6-8a84-bae50000001d",
  "accountId": "da7d9bbe-2c97-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-06-07 15:45:28",
  "name": "Группа 1",
  "code": "groupCode",
  "externalCode": "extGroupCode",
  "archived": false,
  "pathName": ""
}
```
