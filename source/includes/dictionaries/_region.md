## Регион

### Регионы
Средствами JSON API можно запрашивать список регионов России и сведения по отдельным регионам. 
Кодом сущности для Регионов в составе JSON API является ключевое слово **region**.

#### Атрибуты сущности
| Название         | Тип                                                       | Фильтрация                                                               | Описание                                                                                 |
| ---------------- | :-------------------------------------------------------- | :----------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- |
| **accountId**    | UUID                                                      | `=` `!=`                                                                 | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                     |
| **code**         | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                   | Код Региона                                                                              |
| **externalCode** | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                   | Внешний код Региона<br>`+Обязательное при ответе`                                                                                            |
| **id**           | UUID                                                      | `=` `!=`                                                                 | ID Региона<br>`+Обязательное при ответе` `+Только для чтения`                            |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                          | Метаданные о Регионе<br>`+Обязательное при ответе`                                       |
| **name**         | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                   | Наименование Региона<br>`+Обязательное при ответе` `+Необходимо при создании`            |
| **updated**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                               | Момент последнего обновления сущности<br>`+Обязательное при ответе` `+Только для чтения` |
| **version**      | Int                                                       |                                                                          | Версия сущности<br>`+Обязательное при ответе` `+Только для чтения`                       |


#### Атрибуты доступные для сортировки
| Название         | Описание                              |
| ---------------- | ------------------------------------- |
| **code**         | Код Региона                           |
| **externalCode** | Внешний код Региона                   |
| **id**           | ID в формате UUID                     |
| **name**         | Наименование Региона                  |
| **updated**      | Момент последнего обновления сущности |
| **version**      | Версия сущности                       |


### Получить Регионы 
Получить список всех Регионов.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                                                  |
| ----------- | :-------------------------------------------------------- | :---------------------------------------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                                                      |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                                              |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой [Регионы](../dictionaries/#suschnosti-region). |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить Регионы 

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/region"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Регионов

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/",
    "type": "region",
    "mediaType": "application/json",
    "size": 86,
    "limit": 25,
    "offset": 0,
    "nextHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/?limit=25&offset=25"
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000001",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      },
      "id": "00000000-0000-0000-0000-000000000001",
      "version": 0,
      "updated": "2018-11-29 00:00:00",
      "name": "Респ Адыгея",
      "code": "01",
      "externalCode": "01"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      },
      "id": "00000000-0000-0000-0000-000000000002",
      "version": 0,
      "updated": "2018-11-29 00:00:00",
      "name": "Респ Башкортостан",
      "code": "02",
      "externalCode": "02"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000003",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      },
      "id": "00000000-0000-0000-0000-000000000003",
      "version": 0,
      "updated": "2018-11-29 00:00:00",
      "name": "Респ Бурятия",
      "code": "03",
      "externalCode": "03"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000004",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      },
      "id": "00000000-0000-0000-0000-000000000004",
      "version": 0,
      "updated": "2018-11-29 00:00:00",
      "name": "Респ Алтай",
      "code": "04",
      "externalCode": "04"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000005",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      },
      "id": "00000000-0000-0000-0000-000000000005",
      "version": 0,
      "updated": "2018-11-29 00:00:00",
      "name": "Респ Дагестан",
      "code": "05",
      "externalCode": "05"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000006",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      },
      "id": "00000000-0000-0000-0000-000000000006",
      "version": 0,
      "updated": "2018-11-29 00:00:00",
      "name": "Респ Ингушетия",
      "code": "06",
      "externalCode": "06"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000007",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      },
      "id": "00000000-0000-0000-0000-000000000007",
      "version": 0,
      "updated": "2018-11-29 00:00:00",
      "name": "Кабардино-Балкарская Респ",
      "code": "07",
      "externalCode": "07"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000008",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      },
      "id": "00000000-0000-0000-0000-000000000008",
      "version": 0,
      "updated": "2018-11-29 00:00:00",
      "name": "Респ Калмыкия",
      "code": "08",
      "externalCode": "08"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000009",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      },
      "id": "00000000-0000-0000-0000-000000000009",
      "version": 0,
      "updated": "2018-11-29 00:00:00",
      "name": "Карачаево-Черкесская Респ",
      "code": "09",
      "externalCode": "09"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000010",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      },
      "id": "00000000-0000-0000-0000-000000000010",
      "version": 0,
      "updated": "2018-11-29 00:00:00",
      "name": "Респ Карелия",
      "code": "10",
      "externalCode": "10"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000011",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      },
      "id": "00000000-0000-0000-0000-000000000011",
      "version": 0,
      "updated": "2018-11-29 00:00:00",
      "name": "Респ Коми",
      "code": "11",
      "externalCode": "11"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000012",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      },
      "id": "00000000-0000-0000-0000-000000000012",
      "version": 0,
      "updated": "2018-11-29 00:00:00",
      "name": "Респ Марий Эл",
      "code": "12",
      "externalCode": "12"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000013",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      },
      "id": "00000000-0000-0000-0000-000000000013",
      "version": 0,
      "updated": "2018-11-29 00:00:00",
      "name": "Респ Мордовия",
      "code": "13",
      "externalCode": "13"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000014",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      },
      "id": "00000000-0000-0000-0000-000000000014",
      "version": 0,
      "updated": "2018-11-29 00:00:00",
      "name": "Респ Саха /Якутия/",
      "code": "14",
      "externalCode": "14"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000015",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      },
      "id": "00000000-0000-0000-0000-000000000015",
      "version": 0,
      "updated": "2018-11-29 00:00:00",
      "name": "Респ Северная Осетия - Алания",
      "code": "15",
      "externalCode": "15"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000016",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      },
      "id": "00000000-0000-0000-0000-000000000016",
      "version": 0,
      "updated": "2018-11-29 00:00:00",
      "name": "Респ Татарстан",
      "code": "16",
      "externalCode": "16"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000017",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      },
      "id": "00000000-0000-0000-0000-000000000017",
      "version": 0,
      "updated": "2018-11-29 00:00:00",
      "name": "Респ Тыва",
      "code": "17",
      "externalCode": "17"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000018",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      },
      "id": "00000000-0000-0000-0000-000000000018",
      "version": 0,
      "updated": "2018-11-29 00:00:00",
      "name": "Удмуртская Респ",
      "code": "18",
      "externalCode": "18"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000019",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      },
      "id": "00000000-0000-0000-0000-000000000019",
      "version": 0,
      "updated": "2018-11-29 00:00:00",
      "name": "Респ Хакасия",
      "code": "19",
      "externalCode": "19"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000020",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      },
      "id": "00000000-0000-0000-0000-000000000020",
      "version": 0,
      "updated": "2018-11-29 00:00:00",
      "name": "Чеченская Респ",
      "code": "20",
      "externalCode": "20"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000021",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      },
      "id": "00000000-0000-0000-0000-000000000021",
      "version": 0,
      "updated": "2018-11-29 00:00:00",
      "name": "Чувашская республика - Чувашия",
      "code": "21",
      "externalCode": "21"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000022",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      },
      "id": "00000000-0000-0000-0000-000000000022",
      "version": 0,
      "updated": "2018-11-29 00:00:00",
      "name": "Алтайский край",
      "code": "22",
      "externalCode": "22"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000023",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      },
      "id": "00000000-0000-0000-0000-000000000023",
      "version": 0,
      "updated": "2018-11-29 00:00:00",
      "name": "Краснодарский край",
      "code": "23",
      "externalCode": "23"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000024",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      },
      "id": "00000000-0000-0000-0000-000000000024",
      "version": 0,
      "updated": "2018-11-29 00:00:00",
      "name": "Красноярский край",
      "code": "24",
      "externalCode": "24"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000025",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      },
      "id": "00000000-0000-0000-0000-000000000025",
      "version": 0,
      "updated": "2018-11-29 00:00:00",
      "name": "Приморский край",
      "code": "25",
      "externalCode": "25"
    }
  ]
}
```

### Регион 

### Получить Регион

**Параметры**

| Параметр | Описание                                                                        |
| :------- | :------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 00000000-0000-0000-0000-000000000077* id Региона. |

> Запрос на получение отдельного Региона с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Региона с указанным id.

```json
  
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
    "type": "region",
    "mediaType": "application/json"
  },
  "id": "00000000-0000-0000-0000-000000000077",
  "version": 0,
  "updated": "2018-11-29 00:00:00",
  "name": "г Москва",
  "code": "77",
  "externalCode": "77"
}
``` 
