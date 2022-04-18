## Группы Тех. карт

### Получить список групп тех.карт
Запрос всех Групп тех.карт на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                   |
| ----------- | :-------------------------------------------------------- |:-----------------------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче                                        |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос                |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой группы тех.карт |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить список групп тех.карт

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Групп тех.карт.

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

### Массовое создание и обновление групп тех.карт
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Групп тех.карт.
В теле запроса нужно передать массив, содержащий JSON представления групп тех.карт, которые вы хотите создать или обновить.
Обновляемые группы тех.карт должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких групп

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
Успешный запрос. Результат - массив JSON представлений созданных и обновленных групп тех.карт.

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


### Метаданные групп тех.карт
#### Метаданные групп тех.карт

Запрос на получение метаданных групп тех.карт. Результат - объект JSON, включающий в себя:

| Название       | Тип                                                       | Описание                                               |
| -------------- | :-------------------------------------------------------- |:-------------------------------------------------------|
| **meta**       | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные групп тех.карт<br>`+Обязательное при ответе`|

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Получить метаданные групп тех.карт

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей групп тех.карт.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
    "mediaType": "application/json"
  }
}
```

### Группа тех.карт

**Параметры**

| Параметр | Описание                                                                                 |
| :------- |:-----------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id группы тех.карты  |

### Получить группу тех.карт

> Запрос на получение отдельной группы с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/8c329385-bee9-11ec-0a82-04c500000102"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление группы тех.карт.

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
