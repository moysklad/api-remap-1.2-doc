## Пользовательский справочник
### Пользовательские справочники 
#### Атрибуты сущности
+ **meta** - [Метаданные](#metadannye) о Пользовательском справочнике
+ **id** - ID в формате UUID `Только для чтения`
+ **name** - Наименование пользовательского справочника `Необходимое`

#### Список пользовательских справочников
Для работы с пользовательскими справочниками вам нужно знать id каждого справочника.
Этот id обозначен в URI-параметрах запросов к данной сущности как <metadata_id>. Его
можно получить выполнив запрос на получение метаданных настроек компании. В полученном списке сущностей
в полях типа meta будет указана ссылка на каждый из справочников. В этой ссылке, последняя подстрока отделенная
знаком `/` и является идентификатором для данного справочника.

Пример: Выполнив вышеуказанный запрос и найдя среди списка справочника интересующих нас, мы вычленяем следующую ссылку
  из поля meta: `https://online.moysklad.ru/api/remap/1.2/context/companysettings/metadata/customEntities/eaacabaf-2655-11e6-8a84-bae500000045`
  Из данной сылки вычленяем <metadata_id> нужного нам пользовательского справочника : `eaacabaf-2655-11e6-8a84-bae500000045` и этот id используем
  для работы с данным пользовательским справочником в рамках ресурса [Пользовательский справочник](#pol-zowatel-skij-sprawochnik).

### Создать справочник 
Единственным необходимым полем для создания пользовательского справочника
является поле **name**.

> Пример запроса на создание новой сущности пользовательского справочника.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/customentity"
    -H "Authorization: Basic <Access-Token>"
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

**Параметры**

|Параметр   |Описание   | 
|---|---|
|metadata_id |  `string` (required) *Example: 3f9a2f30-76af-11e7-6adb-ede50000000b* id пользовательского справочника.|

> Пример запроса на обновление пользовательского справочника.

```shell
  curl -X PUT
    "ttps://online.moysklad.ru/api/remap/1.2/entity/customentity/3f9a2f30-76af-11e7-6adb-ede50000000b"
    -H "Authorization: Basic <Access-Token>"
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

**Параметры**

|Параметр   |Описание   | 
|---|---|
|metadata_id |  `string` (required) *Example: 3f9a2f30-76af-11e7-6adb-ede50000000b* id пользовательского справочника.|

> Удалить справочник
 
```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/customentity/3f9a2f30-76af-11e7-6adb-ede50000000b"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление пользовательского справочника.

### Элементы Пользовательского справочника 
#### Атрибуты элемента
+ **meta** - [Метаданные](#metadannye) об элементе Пользовательского справочника
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **updated** - дата последнего изменения `Только для чтения`
+ **name** - Наименование элемента пользовательского справочника `Необходимое`
+ **code** - Код элемента пользовательского справочника
+ **description** - Описание элемента пользовательского справочника
+ **externalCode** - Внешний элемента код пользовательского справочника

### Получить элементы справочника 
Запрос на получение всех элементов в указанном пользовательском справочнике.
Результат: Объект JSON, включающий в себя поля:

- **meta** [Метаданные](#metadannye) о выдаче,
- **context** - [Метаданные](#metadannye) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой элементы пользовательского справочника.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|metadata_id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id пользовательского справочника.|

> Получить элементы справочника
 
```shell
 curl -X GET
   "https://online.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19"
   -H "Authorization: Basic <Access-Token>"
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
      "externalCode": "5434665867876"
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
      "externalCode": "5434665867877"
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
      "externalCode": "5434665867878"
    }
  ]
} 
```

### Создать элемент справочника 
Единственным необходимым полем для создания элемента пользовательского справочника
является поле **name**.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|metadata_id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id пользовательского справочника.|

> Пример запроса на создание нового элемента пользовательского справочника.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Партнер 3",
            "code": "partner3",
            "description": "Описание",
            "externalCode": "5434665867876"
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
  "externalCode": "5434665867876"
}
```

### Удалить элемент справочника
Запрос на удаление элемента пользовательского справочника.
 
 **Параметры**
 
|Параметр   |Описание   | 
|---|---|
|metadata_id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id пользовательского справочника.|
|id |  `string` (required) *Example: 6343f631-265d-11e6-8a84-bae500000014* id элемента пользовательского справочника.|

> Удалить элемент справочника

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/6343f631-265d-11e6-8a84-bae500000014"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление элемента пользовательского справочника.

### Элемент пользовательского справочника

### Получить элемент
 
**Параметры**
 
|Параметр   |Описание   | 
|---|---|
|metadata_id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id пользовательского справочника.|
|id |  `string` (required) *Example: 6343f631-265d-11e6-8a84-bae500000014* id элемента пользовательского справочника.|

> Запрос на получение элемента пользовательского справочника с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/6343f631-265d-11e6-8a84-bae500000014"
  -H "Authorization: Basic <Access-Token>"
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
  "externalCode": "5434665867876"
}
```

### Изменить элемент
Запрос на изменение объекта, представляющего собой элемент пользовательского справочника.

**Параметры**
 
|Параметр   |Описание   | 
|---|---|
|metadata_id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id пользовательского справочника.|
|id |  `string` (required) *Example: 6343f631-265d-11e6-8a84-bae500000014* id элемента пользовательского справочника.|

> Пример запроса на обновление элемента пользовательского справочника.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/customentity/7944ef04-f831-11e5-7a69-971500188b19/6343f631-265d-11e6-8a84-bae500000014"
    -H "Authorization: Basic <Access-Token>"
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
  "externalCode": "5434665867876"
}
```
