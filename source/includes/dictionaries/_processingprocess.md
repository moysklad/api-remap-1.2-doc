## Техпроцесс
Средствами JSON API можно запрашивать списки Техпроцессов и сведения по отдельным Техпроцессам. Кодом сущности для техпроцессов в составе JSON API является ключевое слово **processingprocess**. Больше об Техпроцессах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по
[этой ссылке](https://support.moysklad.ru/hc/ru/articles/4407869768593-%D0%A0%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1-%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B0#1).
### Техпроцесс  
#### Атрибуты сущности

| Название         | Тип                                                       | Фильтрация                 | Описание                                                                                    |
|------------------|:----------------------------------------------------------|:---------------------------|:--------------------------------------------------------------------------------------------|
| **accountId**    | UUID                                                      | `=` `!=`                   | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                        |
| **archived**     | Boolean                                                   | `=` `!=`                   | Добавлен ли Техпроцесса в архив<br>`+Обязательное при ответе`                                      |
| **description**  | String(4096)                                              | `=` `!=` `~` `~=` `=~`     | Комментарий Техпроцесса                                                                           |
| **externalCode** | String(255)                                               | `=` `!=` `~` `~=` `=~`     | Внешний код Техпроцесса<br>`+Обязательное при ответе`                                             |
| **group**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                   | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                    |
| **id**           | UUID                                                      | `=` `!=`                   | ID Техпроцесса<br>`+Обязательное при ответе` `+Только для чтения`                                 |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                            | Метаданные Техпроцесса<br>`+Обязательное при ответе` `+Только для чтения`                         |
| **name**         | String(255)                                               | `=` `!=` `~` `~=` `=~`     | Наименование Техпроцесса<br>`+Обязательное при ответе` `+Необходимо при создании`           |
| **owner**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                   | Владелец (Сотрудник)<br>`+Обязательное при ответе` `+Expand`                                |
| **positions**    | MetaArray                                                 |                            | Метаданные позиций Техпроцесса<br>`+Обязательное при ответе` `+Только для чтения` `+Expand` |
| **shared**       | Boolean                                                   | `=` `!=`                   | Общий доступ<br>`+Обязательное при ответе`                                                  |
| **updated**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=` | Момент последнего обновления сущности<br>`+Обязательное при ответе` `+Только для чтения`    |

#### Атрибуты вложенных сущностей
##### Позиции Техпроцесса
Позиции Техпроцесса - это список этапов, который входят в техпроцесс. Позиции у техпроцесса может быть от 1 до 100.
Объект позиции Техпроцесса содержит следующие поля:

| Название            | Тип                                                       | Описание                                                                                     |
|---------------------|:----------------------------------------------------------|:---------------------------------------------------------------------------------------------|
| **accountId**       | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                         |
| **id**              | UUID                                                      | ID позиции<br>`+Обязательное при ответе` `+Только для чтения`                                |
| **meta**            | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Техпроцесса<br>`+Обязательное при ответе` `+Только для чтения`                    |
| **processingstage** | [Meta](../#suschnosti-jetap)                              | Метаданные этапа, который представляет собой позиция<br>`+Обязательное при ответе` `+Expand` |

### Получить список техпроцессов

Запрос всех техпроцессов на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                               |
| ----------- | :-------------------------------------------------------- |:-------------------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче                                    |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос            |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой техпроцессы |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить список техпроцессов

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processingprocess"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка техпроцессов.

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
    "limit": 100,
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

### Получить техпроцесс

**Параметры**

| Параметр | Описание                                                                            |
| :------- |:------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: d5174779-862b-11eb-ac14-000900000007* id Техпроцесса. |
 
> Запрос на получение отдельного техпроцесса с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d2308bcc-8fd9-11ed-ac12-000b000000c1"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление техпроцесса.

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

### Позиции Техпроцесса

Отдельный ресурс для управления позициями Техпроцесса.

### Получить позиции Техпроцесса
Запрос на получение списка всех позиции данного Техпроцесса.

| Название    | Тип                                                       | Описание                                                       |
| ----------- | :-------------------------------------------------------- |:---------------------------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                           |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                   |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой позиции Техпроцесса.|

**Параметры**

| Параметр   | Описание                                                                                                                               |
| :--------- |:---------------------------------------------------------------------------------------------------------------------------------------|
| **id**     | `string` (required) *Example: d5069703-988e-11ed-ac19-000400000029* id Техпроцесса.                                                    |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить позиции Техпроцесса

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5069703-988e-11ed-ac19-000400000029/positions"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций отдельного Техпроцесса.

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

### Позиция Техпроцесса

**Параметры**

| Параметр | Описание                                                                                    |
| :------- |:--------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: d5069da5-988e-11ed-ac19-00040000002a* id позиция Техпроцесса. |
| **id**   | `string` (required) *Example: d5069703-988e-11ed-ac19-000400000029* id Техпроцесса.         |

### Получить позицию

> Запрос на получение отдельной позиции Техпроцесса с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processingprocess/d5069703-988e-11ed-ac19-000400000029/positions/d5069da5-988e-11ed-ac19-00040000002a"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного позиции Техпроцесса.

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

