## Группа Тех. карта
Средствами JSON API можно создавать и обновлять сведения о группах Тех. карт, запрашивать списки групп Тех. карт и сведения по отдельным группам Тех. карт. Кодом сущности для группы Тех. карт в составе JSON API является ключевое слово **processingplanfolder**.

## Группы Тех. карт
#### Атрибуты сущности
| Название                | Тип                                                       | Описание                                                                                                                                                                                                                          |
| ----------------------- | :-------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **accountId**           | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                              |
| **archived**            | Boolean                                                   | Добавлена ли группа Тех. карт в архив<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                            |
| **externalCode**        | String(255)                                               | Внешний код группы Тех. карт<br>`+Обязательное при ответе`                                                                                                                                                                          |
| **code**                | String(255)                                               | Код группы Тех. карт                                                                                                                                                                                                                |
| **description**         | String(4096)                                              | Описание группы Тех. карт                                                                                                                                                                                                           |
| **group**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные отдела сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                                                                                              |
| **id**                  | UUID                                                      | ID группы Тех. карт<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                              |
| **meta**                | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные группы Тех. карт<br>`+Обязательное при ответе`                                                                                                                                                                           |
| **name**                | String(255)                                               | Наименование группы Тех. карт<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                                                                                              |
| **owner**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные владельца (Сотрудника)<br>`+Expand`                                                                                                                                                                                    |
| **pathName**            | String                                                    | Наименование группы Тех. карт, в которую входит данная группа Тех. карт<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                            |
| **updated**             | DateTime                                                  | Момент последнего обновления сущности<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                          |


### Создать новую группу Тех. карт

Запрос на создание новой группы Тех. карт
Обязательные для создания группы Тех. карт поля:

| Название       | Описание                            |
| -------------- | ----------------------------------- |
| **name**       | Наименование группы Тех. карт         |

> Пример создания новой группы Тех. карт с телом запроса, содержащим только поле name.

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
Успешный запрос. Результат - JSON представление созданной группы Тех. карт.

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

> Пример создания новой группы Тех. карт с более насыщенным телом запроса.

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
Успешный запрос. Результат - JSON представление созданной группы Тех. карт.

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

### Удалить группу Тех. карт

**Параметры**

| Параметр | Описание                                                                               |
| :------- | :------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id группы Тех. карт. |

> Запрос на удаление группы Тех. карт с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Группы товаров.

### Массовое удаление групп Тех. карт

В теле запроса нужно передать массив, содержащий JSON метаданных групп Тех. карт, которые вы хотите удалить.


> Запрос на массовое удаление групп Тех. карт.

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

> Успешный запрос. Результат - JSON информация об удалении групп Тех. карт.

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

### Изменить Группу Тех. карт

Запрос на обновление Группы Тех. карт с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у группы Тех. карт, кроме тех, что
помечены `Только для чтения` в описании [атрибутов группы Тех. карт](../dictionaries/#dokumenty-gruppi-teh-kart).
Для обновления поля **pathName** нужно обновить ссылку на родительскую Группу Тех. карт, т.е. обновить поле
**processingplanfolder**

**Параметры**

| Параметр | Описание                                                                               |
| :------- | :------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id группы Тех. карт. |

> Пример запроса на обновление конкретной группы Тех. карт.

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
Успешный запрос. Результат - JSON представление обновленной Группы товаров.

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
