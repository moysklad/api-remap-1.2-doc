## Серийный номер
### Серийные номера
Средствами JSON API можно запрашивать списки Серийных номеров и сведения по отдельным Серийным номерам. Кодом сущности для Серийного номера в составе JSON API является ключевое слово **thing**.

#### Атрибуты сущности
| Название         | Тип                                                       | Фильтрация                  | Описание                                                                               |
| ---------------- | :-------------------------------------------------------- | :-------------------------- |:---------------------------------------------------------------------------------------|
| **accountId**    | UUID                                                      | `=` `!=`                    | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                   |
| **description**  | String(4096)                                              | `=` `!=` `~` `~=` `=~`      | Описание Серийного номера                                                              |
| **id**           | UUID                                                      | `=` `!=`                    | ID Серийного номера<br>`+Обязательное при ответе` `+Только для чтения`                 |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                             | Метаданные о Серийном номере<br>`+Обязательное при ответе`                             |
| **name**         | String(255)                                               | `=` `!=` `~` `~=` `=~`      | Наименование Серийного номера<br>`+Обязательное при ответе` `+Необходимо при создании` |

### Получить Серийные номера
Запрос на получение списка всех Серийных номеров для данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                                                                   |
| ----------- | :-------------------------------------------------------- |:-----------------------------------------------------------------------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче.                                                                                       |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                                                               |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой [Серийные номера](../dictionaries/#suschnosti-serijnyj-nomer). |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить серийные номера

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/thing"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Серийных номеров.

```json
{
  "context":{
    "employee":{
      "meta":{
        "href":"https://api.moysklad.ru/api/remap/1.2/context/employee",
        "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type":"employee",
        "mediaType":"application/json"
      }
    }
  },
  "meta":{
    "href":"https://api.moysklad.ru/api/remap/1.2/entity/thing",
    "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/thing/metadata",
    "type":"thing",
    "mediaType":"application/json",
    "size":2,
    "limit":1000,
    "offset":0
  },
  "rows":[
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/thing/3840d8d8-9f2d-11ee-8c90-0242ac120002",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/thing/metadata",
        "type": "thing",
        "mediaType": "application/json"
      },
      "id": "3840d8d8-9f2d-11ee-8c90-0242ac120002",
      "accountId": "45308174-9f2d-11ee-8c90-0242ac120002",
      "name": "1-100",
      "description": "Стулья"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/thing/55609d5e-9f2d-11ee-8c90-0242ac120002",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/thing/metadata",
        "type": "thing",
        "mediaType": "application/json"
      },
      "id": "55609d5e-9f2d-11ee-8c90-0242ac120002",
      "accountId": "45308174-9f2d-11ee-8c90-0242ac120002",
      "name": "1-200",
      "description": "Стулья"
    }
  ]
}
```

### Серийный номер

### Получить Серийный номер

**Параметры**

| Параметр | Описание                                                                                 |
| :------- |:-----------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 3840d8d8-9f2d-11ee-8c90-0242ac120002* id Серийного номера. |

> Запрос на получение серийного номера с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/thing/3840d8d8-9f2d-11ee-8c90-0242ac120002"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Серийного номера с указанным id.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/thing/3840d8d8-9f2d-11ee-8c90-0242ac120002",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/thing/metadata",
    "type": "thing",
    "mediaType": "application/json"
  },
  "id": "3840d8d8-9f2d-11ee-8c90-0242ac120002",
  "accountId": "45308174-9f2d-11ee-8c90-0242ac120002",
  "name": "1-100",
  "description": "Стулья"
}
```
