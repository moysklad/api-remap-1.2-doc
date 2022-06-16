## Пользовательский справочник
### Пользовательские справочники 
#### Атрибуты сущности

| Название | Тип                                                       | Описание                                                                                            |
| -------- | :-------------------------------------------------------- | :-------------------------------------------------------------------------------------------------- |
| **id**   | UUID                                                      | ID Пользовательского справочника<br>`+Обязательное при ответе` `+Только для чтения`                 |
| **meta** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Пользовательского справочника<br>`+Обязательное при ответе`                              |
| **name** | String(255)                                               | Наименование Пользовательского справочника<br>`+Обязательное при ответе` `+Необходимо при создании` |

#### Список пользовательских справочников
Для работы с пользовательскими справочниками вам нужно знать id каждого справочника.
Этот id обозначен в URI-параметрах запросов к данной сущности как <metadata_id>. Его
можно получить выполнив запрос на получение метаданных настроек компании. В полученном списке сущностей
в полях типа meta будет указана ссылка на каждый из справочников. В этой ссылке, последняя подстрока отделенная
знаком `/` и является идентификатором для данного справочника.

Пример: Выполнив вышеуказанный запрос и найдя среди списка справочника интересующих нас, мы вычленяем следующую ссылку
  из поля meta: `https://online.moysklad.ru/api/remap/1.2/context/companysettings/metadata/customEntities/eaacabaf-2655-11e6-8a84-bae500000045`
  Из данной сылки вычленяем <metadata_id> нужного нам пользовательского справочника : `eaacabaf-2655-11e6-8a84-bae500000045` и этот id используем
  для работы с данным пользовательским справочником в рамках ресурса [Пользовательский справочник](../dictionaries/#suschnosti-pol-zowatel-skij-sprawochnik).

### Создать справочник 
Единственным необходимым полем для создания пользовательского справочника
является поле **name**.
Действие доступно только для пользователя с правами администратора.

| Название                       | Описание                     |
| ------------------------------ | :--------------------------- |
| **name**                       | Название справочника         |

> Пример запроса на создание новой сущности пользовательского справочника.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/customentity"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "custom dictionary"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной сущности пользовательского справочника.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customentity/3f9a2f30-76af-11e7-6adb-ede50000000b",
    "type": "customentity",
    "mediaType": "application/json"
  },
  "id": "3f9a2f30-76af-11e7-6adb-ede50000000b",
  "name": "custom dictionary"
}
```

### Изменить справочник
Запрос на изменение справочника.
Действие доступно только для пользователя с правами администратора.

**Параметры**

| Параметр        | Описание                                                                                              |
| :-------------- | :---------------------------------------------------------------------------------------------------- |
| **metadata_id** | `string` (required) *Example: 3f9a2f30-76af-11e7-6adb-ede50000000b* id пользовательского справочника. |

> Пример запроса на обновление пользовательского справочника.

```shell
  curl -X PUT
    "ttps://online.moysklad.ru/api/remap/1.2/entity/customentity/3f9a2f30-76af-11e7-6adb-ede50000000b"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "new name"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного пользовательского справочника.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customentity/3f9a2f30-76af-11e7-6adb-ede50000000b",
    "type": "customentity",
    "mediaType": "application/json"
  },
  "id": "3f9a2f30-76af-11e7-6adb-ede50000000b",
  "name": "new name"
}
```

### Удалить справочник
Запрос на удаление пользовательского справочника.
Действие доступно только для пользователя с правами администратора.

**Параметры**

| Параметр        | Описание                                                                                              |
| :-------------- | :---------------------------------------------------------------------------------------------------- |
| **metadata_id** | `string` (required) *Example: 3f9a2f30-76af-11e7-6adb-ede50000000b* id пользовательского справочника. |

> Удалить справочник
 
```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/customentity/3f9a2f30-76af-11e7-6adb-ede50000000b"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление пользовательского справочника.

### Элементы Пользовательского справочника 
#### Атрибуты элемента

| Название         | Тип                                                       | Фильтрация                  | Описание                                                                                                               |
| ---------------- | :-------------------------------------------------------- | :-------------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| **accountId**    | UUID                                                      | `=` `!=`                    | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                   |
| **code**         | String(255)                                               | `=` `!=` `~` `~=` `=~`      | Код элемента Пользовательского справочника                                                                             |
| **description**  | String(4096)                                              | `=` `!=` `~` `~=` `=~`      | Описание элемента Пользовательского справочника                                                                        |
| **externalCode** | String(255)                                               | `=` `!=` `~` `~=` `=~`      | Внешний код элемента Пользовательского справочника<br>`+Обязательное при ответе`                                       |
| **id**           | UUID                                                      | `=` `!=`                    | ID элемента Пользовательского справочника<br>`+Обязательное при ответе` `+Только для чтения`                           |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                             | Метаданные элемента Пользовательского справочника<br>`+Обязательное при ответе`                                        |
| **name**         | String(255)                                               | `=` `!=` `~` `~=` `=~`      | Наименование элементе Пользовательского справочника<br>`+Обязательное при ответе` `+Необходимо при создании`           |
| **updated**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`  | Момент последнего обновления элементе Пользовательского справочника<br>`+Обязательное при ответе` `+Только для чтения` |
| **group**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                    | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                               |
| **owner**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                    | Владелец (Сотрудник)<br>`+Expand`                                                                                      |
| **shared**       | Boolean                                                   | `=` `!=`                    | Общий доступ<br>`+Обязательное при ответе`                                                                             |

### Получить элементы справочника 
Запрос на получение всех элементов в указанном пользовательском справочнике.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                                     |
| ----------- | :-------------------------------------------------------- | :--------------------------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                                         |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                                 |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих элементы Пользовательского справочника. |

**Параметры**

| Параметр        | Описание                                                                                              |
| :-------------- | :---------------------------------------------------------------------------------------------------- |
| **metadata_id** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id пользовательского справочника. |

> Получить элементы справочника
 
```shell
 curl -X GET
   "https://online.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19"
   -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка элементов пользовательского справочника.
 
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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customentity/metadata",
    "type": "customentity",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#custom_7944ef04-f831-11e5-7a69-971500188b19",
    "size": 3,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/01b29035-2656-11e6-8a84-bae500000048",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/metadata/customEntities/7944ef04-f831-11e5-7a69-971500188b19",
        "type": "customentity",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#custom_7944ef04-f831-11e5-7a69-971500188b19/edit?id=01b29035-2656-11e6-8a84-bae500000048"
      },
      "id": "01b29035-2656-11e6-8a84-bae500000048",
      "accountId": "45489428-24a5-11e6-8a84-bae500000001",
      "updated": "2017-08-13 17:55:08",
      "name": "Партнер1",
      "code": "partner1",
      "externalCode": "5434665867876",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/9bc5de98-79f2-11e8-1a0d-4e0d0000002b",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9bc5de98-79f2-11e8-1a0d-4e0d0000002b"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/9504054f-79f2-11e8-1a0d-4e0d00000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/3fbe37f2-2659-11e6-8a84-bae500000013",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/metadata/customEntities/7944ef04-f831-11e5-7a69-971500188b19",
        "type": "customentity",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#custom_7944ef04-f831-11e5-7a69-971500188b19/edit?id=3fbe37f2-2659-11e6-8a84-bae500000013"
      },
      "id": "3fbe37f2-2659-11e6-8a84-bae500000013",
      "accountId": "45489428-24a5-11e6-8a84-bae500000001",
      "updated": "2017-08-13 11:06:23",
      "name": "Партнер 2",
      "externalCode": "5434665867877",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/9bc5de98-79f2-11e8-1a0d-4e0d0000002b",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9bc5de98-79f2-11e8-1a0d-4e0d0000002b"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/9504054f-79f2-11e8-1a0d-4e0d00000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/6343f631-265d-11e6-8a84-bae500000014",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/metadata/customEntities/7944ef04-f831-11e5-7a69-971500188b19",
        "type": "customentity",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#custom_7944ef04-f831-11e5-7a69-971500188b19/edit?id=6343f631-265d-11e6-8a84-bae500000014"
      },
      "id": "6343f631-265d-11e6-8a84-bae500000014",
      "accountId": "45489428-24a5-11e6-8a84-bae500000001",
      "updated": "2017-08-14 10:22:51",
      "name": "Петр михалыч из ООО Предприятие",
      "code": "partner mikhalych",
      "description": "Ключевой сотрудник ООО Предприятие",
      "externalCode": "5434665867878",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/9bc5de98-79f2-11e8-1a0d-4e0d0000002b",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9bc5de98-79f2-11e8-1a0d-4e0d0000002b"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/9504054f-79f2-11e8-1a0d-4e0d00000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      }
    }
  ]
} 
```

### Создать элемент справочника 
Единственным необходимым полем для создания элемента пользовательского справочника
является поле **name**.

**Параметры**

| Параметр        | Описание                                                                                              |
| :-------------- | :---------------------------------------------------------------------------------------------------- |
| **metadata_id** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id пользовательского справочника. |

> Пример запроса на создание нового элемента пользовательского справочника.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Партнер 3",
            "code": "partner3",
            "description": "Описание",
            "externalCode": "5434665867876",
            "shared": false
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного элемента пользовательского справочника.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/6343f631-265d-11e6-8a84-bae500000014",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/metadata/customEntities/7944ef04-f831-11e5-7a69-971500188b19",
    "type": "customentity",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#custom_7944ef04-f831-11e5-7a69-971500188b19/edit?id=6343f631-265d-11e6-8a84-bae500000014"
  },
  "id": "6343f631-265d-11e6-8a84-bae500000014",
  "accountId": "45489428-24a5-11e6-8a84-bae500000001",
  "updated": "2017-08-15 09:35:11",
  "name": "Партнер 3",
  "code": "partner3",
  "description": "Описание",
  "externalCode": "5434665867876",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/9bc5de98-79f2-11e8-1a0d-4e0d0000002b",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9bc5de98-79f2-11e8-1a0d-4e0d0000002b"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/9504054f-79f2-11e8-1a0d-4e0d00000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  }
}
```

### Удалить элемент справочника
Запрос на удаление элемента пользовательского справочника.
 
 **Параметры**
 
| Параметр        | Описание                                                                                                       |
| :-------------- | :------------------------------------------------------------------------------------------------------------- |
| **id**          | `string` (required) *Example: 6343f631-265d-11e6-8a84-bae500000014* id элемента пользовательского справочника. |
| **metadata_id** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id пользовательского справочника.          |

> Удалить элемент справочника

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/6343f631-265d-11e6-8a84-bae500000014"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление элемента пользовательского справочника.

### Элемент пользовательского справочника

### Получить элемент
 
**Параметры**
 
| Параметр        | Описание                                                                                                       |
| :-------------- | :------------------------------------------------------------------------------------------------------------- |
| **id**          | `string` (required) *Example: 6343f631-265d-11e6-8a84-bae500000014* id элемента пользовательского справочника. |
| **metadata_id** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id пользовательского справочника.          |

> Запрос на получение элемента пользовательского справочника с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/6343f631-265d-11e6-8a84-bae500000014"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление элемента пользовательского справочника с указанным id.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/6343f631-265d-11e6-8a84-bae500000014",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/metadata/customEntities/7944ef04-f831-11e5-7a69-971500188b19",
    "type": "customentity",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#custom_7944ef04-f831-11e5-7a69-971500188b19/edit?id=6343f631-265d-11e6-8a84-bae500000014"
  },
  "id": "6343f631-265d-11e6-8a84-bae500000014",
  "accountId": "45489428-24a5-11e6-8a84-bae500000001",
  "updated": "2017-08-14 10:22:51",
  "name": "Партнер 3",
  "code": "partner3",
  "description": "Описание",
  "externalCode": "5434665867876",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/9bc5de98-79f2-11e8-1a0d-4e0d0000002b",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9bc5de98-79f2-11e8-1a0d-4e0d0000002b"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/9504054f-79f2-11e8-1a0d-4e0d00000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  }
}
```

### Изменить элемент
Запрос на изменение объекта, представляющего собой элемент пользовательского справочника.

**Параметры**
 
| Параметр        | Описание                                                                                                       |
| :-------------- | :------------------------------------------------------------------------------------------------------------- |
| **id**          | `string` (required) *Example: 6343f631-265d-11e6-8a84-bae500000014* id элемента пользовательского справочника. |
| **metadata_id** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id пользовательского справочника.          |

> Пример запроса на обновление элемента пользовательского справочника.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/6343f631-265d-11e6-8a84-bae500000014"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Петр михалыч из ООО Предприятие",
            "code": "partner mikhalych",
            "description": "Ключевой сотрудник ООО Предприятие",
            "externalCode": "5434665867876"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного элемента пользовательского справочника.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/6343f631-265d-11e6-8a84-bae500000014",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/metadata/customEntities/7944ef04-f831-11e5-7a69-971500188b19",
    "type": "customentity",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#custom_7944ef04-f831-11e5-7a69-971500188b19/edit?id=6343f631-265d-11e6-8a84-bae500000014"
  },
  "id": "6343f631-265d-11e6-8a84-bae500000014",
  "accountId": "45489428-24a5-11e6-8a84-bae500000001",
  "updated": "2017-08-15 09:39:34",
  "name": "Петр михалыч из ООО Предприятие",
  "code": "partner mikhalych",
  "description": "Ключевой сотрудник ООО Предприятие",
  "externalCode": "5434665867876",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/9bc5de98-79f2-11e8-1a0d-4e0d0000002b",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9bc5de98-79f2-11e8-1a0d-4e0d0000002b"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/9504054f-79f2-11e8-1a0d-4e0d00000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  }
}
```
