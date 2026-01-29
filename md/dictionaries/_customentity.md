## Пользовательский справочник

### Пользовательские справочники

Кодом сущности для Пользовательских справочников в составе JSON API является ключевое слово **customentity**.

Средствами JSON API можно создавать, обновлять и удалять Пользовательские справочники. Вести работу с элементами
Пользовательского справочника, а также получать информацию о дополнительных полях Пользовательских справочников.
<br>
Для работы с Пользовательскими справочниками вам нужно знать идентификатор каждого справочника.
Этот идентификатор можно найти при запросе метаданных данной сущности в поле `id`.

#### Атрибуты справочника

| Название | Тип                                                       | Описание                                                                                            |
|----------|:----------------------------------------------------------|:----------------------------------------------------------------------------------------------------|
| **id**   | UUID                                                      | ID Пользовательского справочника<br>`+Обязательное при ответе` `+Только для чтения`                 |
| **meta** | [Meta](#/general#3-metadannye) | Метаданные Пользовательского справочника<br>`+Обязательное при ответе`                              |
| **name** | String(255)                                               | Наименование Пользовательского справочника<br>`+Обязательное при ответе` `+Необходимо при создании` |

### Получить список справочников

Получить все Пользовательские справочники можно выполнив запрос на получение
метаданных [настроек компании](#/dictionaries/companysettings#3-poluchit-metadannye-nastroek-kompanii).
В полученной сущности, поле `customEntities` является списком сущностей всех существующих Пользовательских справочников.
У каждого элемента списка имеется поле `id`, где будет указан идентификатор каждого из справочников.

### Создать справочник

Единственным необходимым полем для создания Пользовательского справочника является поле **name**.
Действие доступно только для пользователя с правами администратора.

| Название | Описание                               |
|----------|:---------------------------------------|
| **name** | Название Пользовательского справочника |

> Пример запроса на создание нового Пользовательского справочника.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/customentity" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "name": "custom dictionary"
          }'  
```

> Response 200 (application/json)
> Успешный запрос. Результат - JSON представление созданного Пользовательского справочника.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customentity/3f9a2f30-76af-11e7-6adb-ede50000000b",
    "type": "customentity",
    "mediaType": "application/json"
  },
  "id": "3f9a2f30-76af-11e7-6adb-ede50000000b",
  "name": "custom dictionary"
}
```

### Изменить справочник

Запрос на изменение Пользовательского справочника.
Действие доступно только для пользователя с правами администратора.

**Параметры**

| Параметр        | Описание                                                                                              |
|:----------------|:------------------------------------------------------------------------------------------------------|
| **metadata_id** | `string` (required) *Example: 3f9a2f30-76af-11e7-6adb-ede50000000b* ID Пользовательского справочника. |

> Пример запроса на обновление Пользовательского справочника.

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/customentity/3f9a2f30-76af-11e7-6adb-ede50000000b" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "name": "new name"
          }'  
```

> Response 200 (application/json)
> Успешный запрос. Результат - JSON представление обновленного Пользовательского справочника.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customentity/3f9a2f30-76af-11e7-6adb-ede50000000b",
    "type": "customentity",
    "mediaType": "application/json"
  },
  "id": "3f9a2f30-76af-11e7-6adb-ede50000000b",
  "name": "new name"
}
```

### Удалить справочник

Запрос на удаление Пользовательского справочника.
Действие доступно только для пользователя с правами администратора.

**Параметры**

| Параметр        | Описание                                                                                              |
|:----------------|:------------------------------------------------------------------------------------------------------|
| **metadata_id** | `string` (required) *Example: 3f9a2f30-76af-11e7-6adb-ede50000000b* ID Пользовательского справочника. |

> Пример запроса на удаление Пользовательского справочника

```shell
curl --compressed -X DELETE \
  "https://api.moysklad.ru/api/remap/1.2/entity/customentity/3f9a2f30-76af-11e7-6adb-ede50000000b" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
> Успешное удаление Пользовательского справочника.

### Метаданные справочника

Запрос на получение метаданных Пользовательского справочника. Результат - объект JSON, включающий в себя:

| Название         | Тип                                                       | Описание                                                                                   |
|------------------|:----------------------------------------------------------|:-------------------------------------------------------------------------------------------|
| **meta**         | [Meta](#/general#3-metadannye) | Метаданные Пользовательского справочника<br>`+Обязательное при ответе`                     |
| **entityMeta**   | [Meta](#/general#3-metadannye) | Ссылка на список сущностей Пользовательского справочника<br>`+Обязательное при ответе`     |
| **attributes**   | Array(Object)                                             | Коллекция доп. полей Пользовательского справочника<br>`+Обязательное при ответе` `+Expand` |
| **id**           | UUID                                                      | ID Пользовательского справочника<br>`+Обязательное при ответе` `+Только для чтения`        |
| **name**         | String(255)                                               | Название Пользовательского справочника<br>`+Обязательное при ответе`                       |
| **createShared** | Boolean                                                   | Создавать новые элементы Пользовательского справочника с меткой "Общий"                    |

Структура отдельного объекта, представляющего доп. поле подробно описана в
разделе [Работа с дополнительными полями](#/general#3-rabota-s-dopolnitelnymi-polyami).

**Параметры**

| Параметр        | Описание                                                                                              |
|:----------------|:------------------------------------------------------------------------------------------------------|
| **metadata_id** | `string` (required) *Example: 3f9a2f30-76af-11e7-6adb-ede50000000b* ID Пользовательского справочника. |

> Пример запроса на получение метаданных Пользовательского справочника

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/customentity/3f9a2f30-76af-11e7-6adb-ede50000000b/metadata" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
> Успешный запрос. Результат - JSON представление метаданных Пользовательского справочника.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customentity/3f9a2f30-76af-11e7-6adb-ede50000000b/metadata",
    "type": "customentitymetadata",
    "mediaType": "application/json"
  },
  "entityMeta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customentity/3f9a2f30-76af-11e7-6adb-ede50000000b",
    "type": "customentity",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#custom_3f9a2f30-76af-11e7-6adb-ede50000000b"
  },
  "attributes": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customentity/3f9a2f30-76af-11e7-6adb-ede50000000b/metadata/attributes",
      "type": "attributemetadata",
      "mediaType": "application/json",
      "size": 3,
      "limit": 1000,
      "offset": 0
    }
  },
  "id": "3f9a2f30-76af-11e7-6adb-ede50000000b",
  "name": "custom dictionary",
  "createShared": true
}
```

### Элементы Пользовательского справочника

#### Атрибуты элемента

| Название         | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                |
|------------------|:----------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------|
| **meta**         | [Meta](#/general#3-metadannye) |                                                                                                                                                   | Метаданные элемента Пользовательского справочника<br>`+Обязательное при ответе`                                         |
| **id**           | UUID                                                      | `=` `!=`                                                                                                                                          | ID элемента Пользовательского справочника<br>`+Обязательное при ответе` `+Только для чтения`                            |
| **accountId**    | UUID                                                      | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                    |
| **updated**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления элементе Пользовательского справочника<br>`+Обязательное при ответе` `+Только для чтения`  |
| **name**         | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование элементе Пользовательского справочника<br>`+Обязательное при ответе` `+Необходимо при создании`            |
| **code**         | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Код элемента Пользовательского справочника                                                                              |
| **description**  | String(4096)                                              | `=` `!=` `~` `~=` `=~`                                                                                                                            | Описание элемента Пользовательского справочника                                                                         |
| **externalCode** | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код элемента Пользовательского справочника<br>`+Обязательное при ответе`                                        |
| **attributes**   | Array(Object)                                             | [Операторы доп. полей](#/general#4-filtraciya-po-dopolnitelnym-polyam) | Коллекция метаданных доп. полей. [Поля объекта](#/general#3-rabota-s-dopolnitelnymi-polyami) |
| **owner**        | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Expand`                                                                                       |
| **shared**       | Boolean                                                   | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе`                                                                              |
| **group**        | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                |

### Получить элементы справочника

Запрос на получение всех элементов в указанном Пользовательском справочнике.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                                     |
|-------------|:----------------------------------------------------------|:-----------------------------------------------------------------------------|
| **meta**    | [Meta](#/general#3-metadannye) | Метаданные о выдаче,                                                         |
| **context** | [Meta](#/general#3-metadannye) | Метаданные о сотруднике, выполнившем запрос.                                 |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих элементы Пользовательского справочника. |

**Параметры**

| Параметр        | Описание                                                                                              |
|:----------------|:------------------------------------------------------------------------------------------------------|
| **metadata_id** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* ID Пользовательского справочника. |

> Пример запроса на получение элементов Пользовательского справочника

```shell
 curl --compressed -X GET \
   "https://api.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19" \
   -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
> Успешный запрос. Результат - JSON представление списка элементов Пользовательского справочника.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customentity/metadata",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/01b29035-2656-11e6-8a84-bae500000048",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/metadata",
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
      "attributes": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/metadata/attributes/54b79da2-9124-11ef-ac12-000e00000008",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "54b79da2-9124-11ef-ac12-000e00000008",
          "name": "Дата последнего обращения",
          "type": "time",
          "value": "2024-10-24 19:42:00.000"
        }
      ],
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/9bc5de98-79f2-11e8-1a0d-4e0d0000002b",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9bc5de98-79f2-11e8-1a0d-4e0d0000002b"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/9504054f-79f2-11e8-1a0d-4e0d00000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/3fbe37f2-2659-11e6-8a84-bae500000013",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/metadata",
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
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/9bc5de98-79f2-11e8-1a0d-4e0d0000002b",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9bc5de98-79f2-11e8-1a0d-4e0d0000002b"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/9504054f-79f2-11e8-1a0d-4e0d00000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/6343f631-265d-11e6-8a84-bae500000014",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/metadata",
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
      "attributes": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/metadata/attributes/54b79da2-9124-11ef-ac12-000e00000008",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "54b79da2-9124-11ef-ac12-000e00000008",
          "name": "Дата последнего обращения",
          "type": "time",
          "value": "2024-07-20 12:43:00.000"
        }
      ],
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/9bc5de98-79f2-11e8-1a0d-4e0d0000002b",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9bc5de98-79f2-11e8-1a0d-4e0d0000002b"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/9504054f-79f2-11e8-1a0d-4e0d00000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      }
    }
  ]
} 
```

### Получить элемент справочника

**Параметры**

| Параметр        | Описание                                                                                                       |
|:----------------|:---------------------------------------------------------------------------------------------------------------|
| **metadata_id** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* ID Пользовательского справочника.          |
| **id**          | `string` (required) *Example: 6343f631-265d-11e6-8a84-bae500000014* ID элемента Пользовательского справочника. |

> Пример запроса на получение элемента Пользовательского справочника с указанным ID.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/6343f631-265d-11e6-8a84-bae500000014" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
> Успешный запрос. Результат - JSON представление элемента Пользовательского справочника с указанным ID.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/6343f631-265d-11e6-8a84-bae500000014",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/metadata",
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
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/metadata/attributes/54b79da2-9124-11ef-ac12-000e00000008",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "54b79da2-9124-11ef-ac12-000e00000008",
      "name": "Дата последнего обращения",
      "type": "time",
      "value": "2024-07-20 12:43:00.000"
    }
  ],
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/9bc5de98-79f2-11e8-1a0d-4e0d0000002b",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9bc5de98-79f2-11e8-1a0d-4e0d0000002b"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/9504054f-79f2-11e8-1a0d-4e0d00000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  }
}
```

### Создать элемент справочника

Единственным необходимым полем для создания элемента Пользовательского справочника является поле **name**.

**Параметры**

| Параметр        | Описание                                                                                              |
|:----------------|:------------------------------------------------------------------------------------------------------|
| **metadata_id** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* ID Пользовательского справочника. |

> Пример запроса на создание нового элемента Пользовательского справочника.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "name": "Партнер 3",
            "code": "partner3",
            "description": "Описание",
            "externalCode": "5434665867876",
            "shared": false
          }'  
```

> Response 200 (application/json)
> Успешный запрос. Результат - JSON представление созданного элемента Пользовательского справочника.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/6343f631-265d-11e6-8a84-bae500000014",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/metadata",
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
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/9bc5de98-79f2-11e8-1a0d-4e0d0000002b",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9bc5de98-79f2-11e8-1a0d-4e0d0000002b"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/9504054f-79f2-11e8-1a0d-4e0d00000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  }
}
```

### Изменить элемент справочника

Запрос на изменение элемента Пользовательского справочника.

**Параметры**

| Параметр        | Описание                                                                                                       |
|:----------------|:---------------------------------------------------------------------------------------------------------------|
| **metadata_id** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* ID Пользовательского справочника.          |
| **id**          | `string` (required) *Example: 6343f631-265d-11e6-8a84-bae500000014* ID элемента Пользовательского справочника. |

> Пример запроса на обновление элемента Пользовательского справочника.

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/6343f631-265d-11e6-8a84-bae500000014" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "name": "Петр михалыч из ООО Предприятие",
            "code": "partner mikhalych",
            "description": "Ключевой сотрудник ООО Предприятие",
            "externalCode": "5434665867876",
            "attributes": [
              {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/metadata/attributes/54b79da2-9124-11ef-ac12-000e00000008",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "2024-07-20 12:43:00.000"
              }
            ]
          }'  
```

> Response 200 (application/json)
> Успешный запрос. Результат - JSON представление обновленного элемента Пользовательского справочника.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/6343f631-265d-11e6-8a84-bae500000014",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/metadata",
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
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/metadata/attributes/54b79da2-9124-11ef-ac12-000e00000008",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "54b79da2-9124-11ef-ac12-000e00000008",
      "name": "Дата последнего обращения",
      "type": "time",
      "value": "2024-07-20 12:43:00.000"
    }
  ],
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/9bc5de98-79f2-11e8-1a0d-4e0d0000002b",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9bc5de98-79f2-11e8-1a0d-4e0d0000002b"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/9504054f-79f2-11e8-1a0d-4e0d00000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  }
}
```

### Удалить элемент справочника

Запрос на удаление элемента Пользовательского справочника.

**Параметры**

| Параметр        | Описание                                                                                                       |
|:----------------|:---------------------------------------------------------------------------------------------------------------|
| **metadata_id** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* ID Пользовательского справочника.          |
| **id**          | `string` (required) *Example: 6343f631-265d-11e6-8a84-bae500000014* ID элемента Пользовательского справочника. |

> Пример запроса на удаление элемента Пользовательского справочника

```shell
curl --compressed -X DELETE \
  "https://api.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/6343f631-265d-11e6-8a84-bae500000014" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
> Успешное удаление элемента Пользовательского справочника.


