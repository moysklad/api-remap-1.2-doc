## Группа тех. карт
Средствами JSON API можно создавать и обновлять сведения о Группах тех. карт, запрашивать списки Групп тех. карт и сведения по отдельным Группам тех. карт. Кодом сущности для Группы тех. карт в составе JSON API является ключевое слово **processingplanfolder**.

### Группы тех. карт
#### Атрибуты сущности

| Название                | Тип                                                       | Описание                                                                                                                                                                                                                             |
| ----------------------- | :-------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**           | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                 |
| **archived**            | Boolean                                                   | Добавлена ли Группа тех. карт в архив<br>`+Обязательное при ответе`                                                                                                                                                                  |
| **externalCode**        | String(255)                                               | Внешний код Группы тех. карт<br>`+Обязательное при ответе`                                                                                                                                                                           |
| **code**                | String(255)                                               | Код Группы тех. карт                                                                                                                                                                                                                 |
| **description**         | String(4096)                                              | Описание Группы тех. карт                                                                                                                                                                                                            |
| **group**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные отдела сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                                                                                                 |
| **id**                  | UUID                                                      | ID Группы тех. карт<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                               |
| **meta**                | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Группы тех. карт<br>`+Обязательное при ответе`                                                                                                                                                                            |
| **name**                | String(255)                                               | Наименование Группы тех. карт<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                                                                                               |
| **owner**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные владельца (Сотрудника)<br>`+Expand`                                                                                                                                                                                       |
| **pathName**            | String                                                    | Наименование Группы тех. карт, в которую входит данная Группа тех. карт<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                           |
| **shared**              | Boolean                                                   | Общий доступ<br>`+Обязательное при ответе`                                                                                                                                                                                           |
| **updated**             | DateTime                                                  | Момент последнего обновления сущности<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                             |

### Получить список Групп тех. карт
Запрос всех Групп тех. карт на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                   |
| ----------- | :-------------------------------------------------------- |:-----------------------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче                                        |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос                |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Группы тех. карт |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить список Групп тех. карт

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Групп тех. карт.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
    "type": "processingplanfolder",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/3ea73e1a-2cad-11e6-8a84-bae50000001d",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
        "type": "processingplanfolder",
        "mediaType": "application/json"
      },
      "id": "3ea73e1a-2cad-11e6-8a84-bae50000001d",
      "accountId": "da7d9bbe-2c97-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
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

### Создать новую Группу тех. карт

Запрос на создание новой Группы тех. карт
Обязательные для создания Группы тех. карт поля:

| Название       | Описание                            |
| -------------- | ----------------------------------- |
| **name**       | Наименование Группы тех. карт         |

> Пример создания новой Группы тех. карт с телом запроса, содержащим только поле name.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Группа 1"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Группы тех. карт.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/3ea73e1a-2cad-11e6-8a84-bae50000001d",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
    "type": "processingplanfolder",
    "mediaType": "application/json"
  },
  "id": "3ea73e1a-2cad-11e6-8a84-bae50000001d",
  "accountId": "da7d9bbe-2c97-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
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

> Пример создания новой Группы тех. карт с более насыщенным телом запроса.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Группа 2",
            "code": "13321",
            "externalCode": "extGroup"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Группы тех. карт.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/275961ab-2cad-11e6-8a84-bae50000001a",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
    "type": "processingplanfolder",
    "mediaType": "application/json"
  },
  "id": "275961ab-2cad-11e6-8a84-bae50000001a",
  "accountId": "da7d9bbe-2c97-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
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

### Массовое создание и обновление Групп тех. карт
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Групп тех. карт.
В теле запроса нужно передать массив, содержащий JSON представления Групп тех. карт, которые вы хотите создать или обновить.
Обновляемые Группы тех. карт должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Групп тех. карт

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "Группа Мебель",
              "externalCode": "furnitureCode"
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/3ea73e1a-2cad-11e6-8a84-bae50000001d",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
                "type": "processingplanfolder",
                "mediaType": "application/json"
              },
              "name": "Группа Авто"
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Групп тех. карт.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/3ea73e1a-2cad-11e6-8a84-bae50000001d",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
      "type": "processingplanfolder",
      "mediaType": "application/json"
    },
    "id": "3ea73e1a-2cad-11e6-8a84-bae50000001d",
    "accountId": "da7d9bbe-2c97-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/d071992d-bee8-11ec-0a82-031400000004",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
      "type": "processingplanfolder",
      "mediaType": "application/json"
    },
    "id": "d071992d-bee8-11ec-0a82-031400000004",
    "accountId": "da7d9bbe-2c97-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
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

### Удалить Группу тех. карт

**Параметры**

| Параметр | Описание                                                                               |
| :------- | :------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Группы тех. карт. |

> Запрос на удаление Группы тех. карт с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Группы тех. карт.

### Массовое удаление Групп тех. карт

В теле запроса нужно передать массив, содержащий JSON метаданных Групп тех. карт, которые вы хотите удалить.


> Запрос на массовое удаление Групп тех. карт.

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
            "type": "processingplanfolder",
            "mediaType": "application/json"
            }
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
            "type": "processingplanfolder",
            "mediaType": "application/json"
            }
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Групп тех. карт.

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


### Метаданные Групп тех. карт
#### Метаданные Групп тех. карт

Запрос на получение метаданных Групп тех. карт. Результат - объект JSON, включающий в себя:

| Название       | Тип                                                       | Описание                                               |
| -------------- | :-------------------------------------------------------- |:-------------------------------------------------------|
| **meta**       | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Групп тех. карт<br>`+Обязательное при ответе`|

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Получить метаданные Групп тех. карт

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Групп тех. карт.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
    "mediaType": "application/json"
  }
}
```

### Группа тех. карт

**Параметры**

| Параметр | Описание                                                                                 |
| :------- |:-----------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Группы тех. карты  |

### Получить Группу тех. карт

> Запрос на получение отдельной Группы тех. карт с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/8c329385-bee9-11ec-0a82-04c500000102"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Группы тех. карт.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/8c329385-bee9-11ec-0a82-04c500000102",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
    "type": "processingplanfolder",
    "mediaType": "application/json"
  },
  "id": "8c329385-bee9-11ec-0a82-04c500000102",
  "accountId": "da7d9bbe-2c97-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
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

### Изменить Группу тех. карт

Запрос на обновление Группы тех. карт с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Группы тех. карт, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Группы тех. карт](../documents/#dokumenty-gruppa-teh-kart-gruppy-teh-kart).
Для обновления поля **pathName** нужно обновить ссылку на родительскую Группу тех. карт, т.е. обновить поле
**processingplanfolder**

**Параметры**

| Параметр | Описание                                                                               |
| :------- | :------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Группы тех. карт. |

> Пример запроса на обновление конкретной Группы тех. карт.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Группа 1",
            "code": "groupCode",
            "externalCode": "extGroupCode"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Группы тех. карт.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/3ea73e1a-2cad-11e6-8a84-bae50000001d",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
    "type": "processingplanfolder",
    "mediaType": "application/json"
  },
  "id": "3ea73e1a-2cad-11e6-8a84-bae50000001d",
  "accountId": "da7d9bbe-2c97-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
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
