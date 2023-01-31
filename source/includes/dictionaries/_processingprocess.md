## Тех. процесс
Средствами JSON API можно запрашивать списки Тех. процессов и сведения по отдельным Тех. процессам. Кодом сущности для Тех. процессов в составе JSON API является ключевое слово **processingprocess**. Больше об Тех. процессах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по
[этой ссылке](https://support.moysklad.ru/hc/ru/articles/4407869768593 -%D0%A0%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1-%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B0#1).

### Тех. процессы  
#### Атрибуты сущности

| Название         | Тип                                                       | Фильтрация                 | Описание                                                                                             |
|------------------|:----------------------------------------------------------|:---------------------------|:-----------------------------------------------------------------------------------------------------|
| **accountId**    | UUID                                                      | `=` `!=`                   | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                 |
| **archived**     | Boolean                                                   | `=` `!=`                   | Добавлен ли Тех. процесс в архив<br>`+Обязательное при ответе`                                       |
| **description**  | String(4096)                                              | `=` `!=` `~` `~=` `=~`     | Комментарий Тех. процесса                                                                            |
| **externalCode** | String(255)                                               | `=` `!=` `~` `~=` `=~`     | Внешний код Тех. процесса<br>`+Обязательное при ответе`                                              |
| **group**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                   | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                             |
| **id**           | UUID                                                      | `=` `!=`                   | ID Тех. процесса<br>`+Обязательное при ответе` `+Только для чтения`                                  |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                            | Метаданные Тех. процесса<br>`+Обязательное при ответе` `+Только для чтения`                          |
| **name**         | String(255)                                               | `=` `!=` `~` `~=` `=~`     | Наименование Тех. процесса<br>`+Обязательное при ответе` `+Необходимо при создании`                  |
| **owner**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                   | Владелец (Сотрудник)<br>`+Обязательное при ответе` `+Expand`                                         |
| **positions**    | MetaArray                                                 |                            | Метаданные позиций Тех. процесса<br>`+Обязательное при ответе` `+Необходимо при создании` `+Expand`  |
| **shared**       | Boolean                                                   | `=` `!=`                   | Общий доступ<br>`+Обязательное при ответе`                                                           |
| **updated**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=` | Момент последнего обновления сущности<br>`+Обязательное при ответе` `+Только для чтения`             |

#### Атрибуты вложенных сущностей
##### Позиции Тех. процесса
Позиции Тех. процесса - это список этапов, который входят в Тех. процесс. У Тех. процесса может быть от 1 до 100 позиций.
Объект позиции Тех. процесса содержит следующие поля:

| Название            | Тип                                                       | Описание                                                                                     |
|---------------------|:----------------------------------------------------------|:---------------------------------------------------------------------------------------------|
| **accountId**       | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                         |
| **id**              | UUID                                                      | ID позиции<br>`+Обязательное при ответе` `+Только для чтения`                                |
| **meta**            | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные позиции Тех. процесса<br>`+Обязательное при ответе` `+Только для чтения`          |
| **processingstage** | [Meta](../dictionaries/#suschnosti-jetap-proizwodstwa)    | Метаданные этапа, который представляет собой позиция<br>`+Обязательное при ответе` `+Expand` |

### Получить список Тех. процессов

Запрос всех Тех. процессов на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                 |
| ----------- | :-------------------------------------------------------- |:---------------------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче                                      |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос              |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Тех. процессы |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить список Тех. процессов

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processingprocess"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Тех. процессов.

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
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingprocess",
    "type": "processingprocess",
    "mediaType": "application/json",
    "size": 3,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5174779-862b-11eb-ac14-000900000007",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingprocess/metadata",
        "type": "processingprocess",
        "mediaType": "application/json",
        "uuidHref": "http://online.moysklad.ru/app/#processingprocess/edit?id=d5174779-862b-11eb-ac14-000900000007"
      },
      "id": "d5174779-862b-11eb-ac14-000900000007",
      "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
      "owner": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/872559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "http://online.moysklad.ru/app/#employee/edit?id=872559f1-cbf3-11e1-9eb9-889ffa6f49fd"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/f7eb1e3b-fd2a-42f7-b799-b3d1e6b3bf43",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2021-03-16 10:47:18.160",
      "name": "Основной техпроцесс",
      "externalCode": "F1l43a3ojXZShfnzJCKsG3",
      "archived": false,
      "positions": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5174779-862b-11eb-ac14-000900000007/positions",
          "type": "processingprocessposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      }
    }
  ]
}
```

### Создать Тех. процесс

> Создать Тех. процесс

```shell
curl -X POST
"https://online.moysklad.ru/api/remap/1.2/entity/processingprocess"
-H "Authorization: Basic <Credentials>"
-H "Content-Type: application/json"
-d '{
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/872559f1-cbf3-11e1-9eb9-889ffa6f49fd",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "http://online.moysklad.ru/app/#employee/edit?id=872559f1-cbf3-11e1-9eb9-889ffa6f49fd"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/f7eb1e3b-fd2a-42f7-b799-b3d1e6b3bf43",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "name": "Новый техпроцесс",
  "externalCode": "some code",
  "positions": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/d4fed5b7-988e-11ed-ac19-000400000023",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
        "type": "processingstage",
        "mediaType": "application/json",
        "uuidHref": "http://online.moysklad.ru/app/#processingstage/edit?id=d4fed5b7-988e-11ed-ac19-000400000023"
      }
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/d450779c-a172-11ed-a8fc-0242ac120002",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
        "type": "processingstage",
        "mediaType": "application/json",
        "uuidHref": "http://online.moysklad.ru/app/#processingstage/edit?id=d450779c-a172-11ed-a8fc-0242ac120002"
      }
    }
  ]
}'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Тех. процесса.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5174779-862b-11eb-ac14-000900000007",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingprocess/metadata",
    "type": "processingprocess",
    "mediaType": "application/json",
    "uuidHref": "http://online.moysklad.ru/app/#processingprocess/edit?id=d5174779-862b-11eb-ac14-000900000007"
  },
  "id": "d5174779-862b-11eb-ac14-000900000007",
  "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/872559f1-cbf3-11e1-9eb9-889ffa6f49fd",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "http://online.moysklad.ru/app/#employee/edit?id=872559f1-cbf3-11e1-9eb9-889ffa6f49fd"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/f7eb1e3b-fd2a-42f7-b799-b3d1e6b3bf43",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2021-03-16 10:47:18.160",
  "name": "Новый техпроцесс",
  "externalCode": "some code",
  "archived": false,
  "positions": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5174779-862b-11eb-ac14-000900000007/positions",
      "type": "processingprocessposition",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  }
}

```

### Удалить Тех. процесс

**Параметры**

| Параметр | Описание                                                                              |
| :------- |:--------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: d5174779-862b-11eb-ac14-000900000007* id Тех. процесса. |

> Запрос на удаление Тех. процесса с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d2308bcc-8fd9-11ed-ac12-000b000000c1"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Тех. процесса

### Тех. процесс

### Получить Тех. процесс

**Параметры**

| Параметр | Описание                                                                              |
| :------- |:--------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: d5174779-862b-11eb-ac14-000900000007* id Тех. процесса. |
 
> Запрос на получение отдельного Тех. процесса с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d2308bcc-8fd9-11ed-ac12-000b000000c1"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Тех. процесса.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5174779-862b-11eb-ac14-000900000007",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingprocess/metadata",
    "type": "processingprocess",
    "mediaType": "application/json",
    "uuidHref": "http://online.moysklad.ru/app/#processingprocess/edit?id=d5174779-862b-11eb-ac14-000900000007"
  },
  "id": "d5174779-862b-11eb-ac14-000900000007",
  "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/872559f1-cbf3-11e1-9eb9-889ffa6f49fd",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "http://online.moysklad.ru/app/#employee/edit?id=872559f1-cbf3-11e1-9eb9-889ffa6f49fd"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/f7eb1e3b-fd2a-42f7-b799-b3d1e6b3bf43",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2021-03-16 10:47:18.160",
  "name": "Основной техпроцесс",
  "externalCode": "F1l43a3ojXZShfnzJCKsG3",
  "archived": false,
  "positions": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5174779-862b-11eb-ac14-000900000007/positions",
      "type": "processingprocessposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  }
}

```

### Изменить Тех. процесс

**Параметры**

| Параметр | Описание                                                                              |
| :------- |:--------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: d5174779-862b-11eb-ac14-000900000007* id Тех. процесса. |

```shell
curl -X PUT
"https://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5174779-862b-11eb-ac14-000900000007"
-H "Authorization: Basic <Credentials>"
-H "Content-Type: application/json"
-d '{
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/872559f1-cbf3-11e1-9eb9-889ffa6f49fd",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "http://online.moysklad.ru/app/#employee/edit?id=872559f1-cbf3-11e1-9eb9-889ffa6f49fd"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/f7eb1e3b-fd2a-42f7-b799-b3d1e6b3bf43",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "name": "Измененный техпроцесс",
  "positions": [
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5069703-988e-11ed-ac19-000400000029/positions/3ba63516-a174-11ed-a8fc-0242ac120002",
      "type": "processingprocessposition",
      "mediaType": "application/json"
    },
    "processingstage": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/208b35a3-1ae8-4aa6-bf83-71af326b6f6b",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
      "type": "processingstage",
      "mediaType": "application/json",
      "uuidHref": "http://online.moysklad.ru/app/#processingstage/edit?id=208b35a3-1ae8-4aa6-bf83-71af326b6f6b"
    }
  },
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5069703-988e-11ed-ac19-000400000029/positions/d33a1295-1de5-4075-b6b5-6784b2a708ba",
      "type": "processingprocessposition",
      "mediaType": "application/json"
    },
    "processingstage": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/d450779c-a172-11ed-a8fc-0242ac120002",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
      "type": "processingstage",
      "mediaType": "application/json",
      "uuidHref": "http://online.moysklad.ru/app/#processingstage/edit?id=d450779c-a172-11ed-a8fc-0242ac120002"
    }
  },
  {
    "processingstage": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/1706e2c1-d246-4a54-a237-539627ffa701",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
      "type": "processingstage",
      "mediaType": "application/json",
      "uuidHref": "http://online.moysklad.ru/app/#processingstage/edit?id=1706e2c1-d246-4a54-a237-539627ffa701"
    }
  ]
}'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Тех. процесса.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5174779-862b-11eb-ac14-000900000007",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingprocess/metadata",
    "type": "processingprocess",
    "mediaType": "application/json",
    "uuidHref": "http://online.moysklad.ru/app/#processingprocess/edit?id=d5174779-862b-11eb-ac14-000900000007"
  },
  "id": "d5174779-862b-11eb-ac14-000900000007",
  "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/872559f1-cbf3-11e1-9eb9-889ffa6f49fd",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "http://online.moysklad.ru/app/#employee/edit?id=872559f1-cbf3-11e1-9eb9-889ffa6f49fd"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/f7eb1e3b-fd2a-42f7-b799-b3d1e6b3bf43",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2021-03-16 10:47:18.160",
  "name": "Измененный техпроцесс",
  "archived": false,
  "positions": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5174779-862b-11eb-ac14-000900000007/positions",
      "type": "processingprocessposition",
      "mediaType": "application/json",
      "size": 3,
      "limit": 1000,
      "offset": 0
    }
  }
}

```

### Позиции Тех. процесса

Отдельный ресурс для управления позициями Тех. процесса.

### Получить позиции Тех. процесса
Запрос на получение списка всех позиции данного Тех. процесса.

| Название    | Тип                                                       | Описание                                                          |
| ----------- | :-------------------------------------------------------- |:------------------------------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                              |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                      |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой позиции Тех. процесса. |

**Параметры**

| Параметр   | Описание                                                                                                                              |
| :--------- |:--------------------------------------------------------------------------------------------------------------------------------------|
| **id**     | `string` (required) *Example: d5069703-988e-11ed-ac19-000400000029* id Тех. процесса.                                                 |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                |

> Получить позиции Тех. процесса

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5069703-988e-11ed-ac19-000400000029/positions"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций отдельного Тех. процесса.

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
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5069703-988e-11ed-ac19-000400000029/positions",
    "type": "processingprocessposition",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5069703-988e-11ed-ac19-000400000029/positions/d5069da5-988e-11ed-ac19-00040000002a",
        "type": "processingprocessposition",
        "mediaType": "application/json"
      },
      "id": "d5069da5-988e-11ed-ac19-00040000002a",
      "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
      "processingstage": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/d4fed5b7-988e-11ed-ac19-000400000023",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
          "type": "processingstage",
          "mediaType": "application/json",
          "uuidHref": "http://online.moysklad.ru/app/#processingstage/edit?id=d4fed5b7-988e-11ed-ac19-000400000023"
        }
      }
    }
  ]
}
```

### Создать позиции Тех. процесса

**Параметры**

| Параметр | Описание                                                                                     |
| :------- |:---------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: d5069703-988e-11ed-ac19-000400000029* id Тех. процесса.        |

> Создать позиции у Тех. процесс

```shell
curl -X POST
"https://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5069703-988e-11ed-ac19-000400000029"
-H "Authorization: Basic <Credentials>"
-H "Content-Type: application/json"
-d '[
  {
    "processingstage": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/1706e2c1-d246-4a54-a237-539627ffa701",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
      "type": "processingstage",
      "mediaType": "application/json",
      "uuidHref": "http://online.moysklad.ru/app/#processingstage/edit?id=1706e2c1-d246-4a54-a237-539627ffa701"
    }
  }
]'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданных позиций Тех. процесса.

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
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5069703-988e-11ed-ac19-000400000029/positions",
    "type": "processingprocessposition",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5069703-988e-11ed-ac19-000400000029/positions/d5069da5-988e-11ed-ac19-00040000002a",
        "type": "processingprocessposition",
        "mediaType": "application/json"
      },
      "id": "d5069da5-988e-11ed-ac19-00040000002a",
      "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
      "processingstage": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/d4fed5b7-988e-11ed-ac19-000400000023",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
          "type": "processingstage",
          "mediaType": "application/json",
          "uuidHref": "http://online.moysklad.ru/app/#processingstage/edit?id=d4fed5b7-988e-11ed-ac19-000400000023"
        }
      }
    }
  ]
}

```

### Удалить позицию Тех. процесса

**Параметры**

| Параметр | Описание                                                                                     |
| :------- |:---------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: d5069da5-988e-11ed-ac19-00040000002a* id позиция Тех. процесса.|
| **id**   | `string` (required) *Example: d5069703-988e-11ed-ac19-000400000029* id Тех. процесса.        |

> Запрос на удаление Тех. процесса с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5069703-988e-11ed-ac19-000400000029/positions/d5069da5-988e-11ed-ac19-00040000002a"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление отдельной позиции Тех. процесса

### Позиция Тех. процесса

### Получить позицию

**Параметры**

| Параметр | Описание                                                                                     |
| :------- |:---------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: d5069da5-988e-11ed-ac19-00040000002a* id позиция Тех. процесса.|
| **id**   | `string` (required) *Example: d5069703-988e-11ed-ac19-000400000029* id Тех. процесса.        |

> Запрос на получение отдельной позиции Тех. процесса с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5069703-988e-11ed-ac19-000400000029/positions/d5069da5-988e-11ed-ac19-00040000002a"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного позиции Тех. процесса.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5069703-988e-11ed-ac19-000400000029/positions/d5069da5-988e-11ed-ac19-00040000002a",
    "type": "processingprocessposition",
    "mediaType": "application/json"
  },
  "id": "d5069da5-988e-11ed-ac19-00040000002a",
  "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
  "processingstage": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/d4fed5b7-988e-11ed-ac19-000400000023",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
      "type": "processingstage",
      "mediaType": "application/json",
      "uuidHref": "http://online.moysklad.ru/app/#processingstage/edit?id=d4fed5b7-988e-11ed-ac19-000400000023"
    }
  }
}
```

### Изменить позицию

**Параметры**

| Параметр | Описание                                                                                     |
| :------- |:---------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: d5069da5-988e-11ed-ac19-00040000002a* id позиция Тех. процесса.|
| **id**   | `string` (required) *Example: d5069703-988e-11ed-ac19-000400000029* id Тех. процесса.        |

> Изменить позиции у Тех. процесс

```shell
curl -X PUT
"https://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5069703-988e-11ed-ac19-000400000029"
-H "Authorization: Basic <Credentials>"
-H "Content-Type: application/json"
-d '[
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5069703-988e-11ed-ac19-000400000029/positions/3ba63516-a174-11ed-a8fc-0242ac120002",
      "type": "processingprocessposition",
      "mediaType": "application/json"
    },
    "processingstage": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/208b35a3-1ae8-4aa6-bf83-71af326b6f6b",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
      "type": "processingstage",
      "mediaType": "application/json",
      "uuidHref": "http://online.moysklad.ru/app/#processingstage/edit?id=208b35a3-1ae8-4aa6-bf83-71af326b6f6b"
    }
  },
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5069703-988e-11ed-ac19-000400000029/positions/d33a1295-1de5-4075-b6b5-6784b2a708ba",
      "type": "processingprocessposition",
      "mediaType": "application/json"
    },
    "processingstage": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/d450779c-a172-11ed-a8fc-0242ac120002",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
      "type": "processingstage",
      "mediaType": "application/json",
      "uuidHref": "http://online.moysklad.ru/app/#processingstage/edit?id=d450779c-a172-11ed-a8fc-0242ac120002"
    }
  },
  {
    "processingstage": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/1706e2c1-d246-4a54-a237-539627ffa701",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
      "type": "processingstage",
      "mediaType": "application/json",
      "uuidHref": "http://online.moysklad.ru/app/#processingstage/edit?id=1706e2c1-d246-4a54-a237-539627ffa701"
    }
  }
]'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданных позиций Тех. процесса.

```json
[
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5069703-988e-11ed-ac19-000400000029/positions/3ba63516-a174-11ed-a8fc-0242ac120002",
      "type": "processingprocessposition",
      "mediaType": "application/json"
    },
    "id": "3ba63516-a174-11ed-a8fc-0242ac120002",
    "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
    "processingstage": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/208b35a3-1ae8-4aa6-bf83-71af326b6f6b",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
      "type": "processingstage",
      "mediaType": "application/json",
      "uuidHref": "http://online.moysklad.ru/app/#processingstage/edit?id=208b35a3-1ae8-4aa6-bf83-71af326b6f6b"
    }
  },
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5069703-988e-11ed-ac19-000400000029/positions/d33a1295-1de5-4075-b6b5-6784b2a708ba",
      "type": "processingprocessposition",
      "mediaType": "application/json"
    },
    "id": "d33a1295-1de5-4075-b6b5-6784b2a708ba",
    "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
    "processingstage": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/d450779c-a172-11ed-a8fc-0242ac120002",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
      "type": "processingstage",
      "mediaType": "application/json",
      "uuidHref": "http://online.moysklad.ru/app/#processingstage/edit?id=d450779c-a172-11ed-a8fc-0242ac120002"
    }
  },
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5069703-988e-11ed-ac19-000400000029/positions/d5069da5-988e-11ed-ac19-00040000002a",
      "type": "processingprocessposition",
      "mediaType": "application/json"
    },
    "id": "d5069da5-988e-11ed-ac19-00040000002a",
    "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
    "processingstage": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/1706e2c1-d246-4a54-a237-539627ffa701",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
      "type": "processingstage",
      "mediaType": "application/json",
      "uuidHref": "http://online.moysklad.ru/app/#processingstage/edit?id=1706e2c1-d246-4a54-a237-539627ffa701"
    }
  }
]

```
