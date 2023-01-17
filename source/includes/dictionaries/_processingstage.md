## Этап
Средствами JSON API можно запрашивать списки этапов и сведения по отдельным этапам. Кодом сущности для этапов в составе JSON API является ключевое слово **processingstage**. Больше об этапах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по
[этой ссылке](https://support.moysklad.ru/hc/ru/articles/4407869768593-%D0%A0%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1-%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B0#1).
### Этап  
#### Атрибуты сущности

| Название                | Тип                                                       | Фильтрация                 | Описание                                                                              |
| ----------------------- | :-------------------------------------------------------- |:---------------------------|:--------------------------------------------------------------------------------------|
| **accountId**           | UUID                                                      | `=` `!=`                   | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                  |
| **archived**            | Boolean                                                   | `=` `!=`                   | Добавлен ли этап в архив<br>`+Обязательное при ответе`                                |
| **description**         | String(4096)                                              | `=` `!=` `~` `~=` `=~`     | Комментарий этапа                                                                     |
| **externalCode**        | String(255)                                               | `=` `!=` `~` `~=` `=~`     | Внешний код этапа<br>`+Обязательное при ответе`                                       |
| **group**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                   | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                              |
| **id**                  | UUID                                                      | `=` `!=`                   | ID этапа<br>`+Обязательное при ответе` `+Только для чтения`                           |
| **meta**                | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                            | Метаданные этапа<br>`+Обязательное при ответе` `+Только для чтения`                   |
| **name**                | String(255)                                               | `=` `!=` `~` `~=` `=~`     | Наименование этапа<br>`+Обязательное при ответе` `+Необходимо при создании`           |
| **owner**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                   | Владелец (Сотрудник)<br>`+Обязательное при ответе` `+Expand`                          |
| **shared**              | Boolean                                                   | `=` `!=`                   | Общий доступ<br>`+Обязательное при ответе`                                            |
| **updated**             | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=` | Момент последнего обновления этапа<br>`+Обязательное при ответе` `+Только для чтения` |

### Получить список этапов

Запрос всех этапов на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                        |
| ----------- | :-------------------------------------------------------- |:------------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче                             |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос     |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой этапы|

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить список этапов

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processingstage"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка этапов.

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
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage",
    "type": "processingstage",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c1",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
        "type": "processingstage",
        "mediaType": "application/json",
        "uuidHref": "http://online.moysklad.ru/app/#processingstage/edit?id=d2308bcc-8fd9-11ed-ac12-000b000000c1"
      },
      "id": "d2308bcc-8fd9-11ed-ac12-000b000000c1",
      "accountId": "d063f3f3-8fd9-11ed-ac12-000e00000000",
      "owner": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d105a6bf-8fd9-11ed-ac12-000b0000004f",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "http://online.moysklad.ru/app/#employee/edit?id=d105a6bf-8fd9-11ed-ac12-000b0000004f"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d0668856-8fd9-11ed-ac12-000e00000001",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2023-01-11 09:01:18.363",
      "name": "Основной этап",
      "externalCode": "sTV9PL-HjZkNgDMUqvKKe3",
      "archived": false
    }
  ]
}
```

### Получить этап

**Параметры**

| Параметр | Описание                                                                      |
| :------- |:------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id этапа. |
 
> Запрос на получение отдельного этапа с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c1"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление этапа.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/d2308bcc-8fd9-11ed-ac12-000b000000c1",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
    "type": "processingstage",
    "mediaType": "application/json",
    "uuidHref": "http://online.moysklad.ru/app/#processingstage/edit?id=d2308bcc-8fd9-11ed-ac12-000b000000c1"
  },
  "id": "d2308bcc-8fd9-11ed-ac12-000b000000c1",
  "accountId": "d063f3f3-8fd9-11ed-ac12-000e00000000",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d105a6bf-8fd9-11ed-ac12-000b0000004f",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "http://online.moysklad.ru/app/#employee/edit?id=d105a6bf-8fd9-11ed-ac12-000b0000004f"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d0668856-8fd9-11ed-ac12-000e00000001",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2023-01-11 09:01:18.363",
  "name": "Основной этап",
  "externalCode": "sTV9PL-HjZkNgDMUqvKKe3",
  "archived": false
}
```

### Метаданные этапа

Запрос на получение метаданных этапа. Результат - объект JSON, включающий в себя:

| Название       | Тип                                                       | Описание                                       |
| -------------- | :-------------------------------------------------------- |:-----------------------------------------------|
| **meta**       | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные этапа<br>`+Обязательное при ответе` |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные этапа

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей этапов.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
    "mediaType": "application/json"
  }
}
```
