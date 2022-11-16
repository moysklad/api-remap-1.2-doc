## Ставка НДС
### Ставки НДС

Средствами JSON API можно создавать и обновлять сведения о налоговых ставках, запрашивать списки ставок и сведения по отдельным ставкам. Кодом сущности для налоговой ставки в составе JSON API является ключевое слово **taxrate**. По данной сущности можно осуществлять контекстный поиск с помощью специального параметра **search**. Подробнее можно узнать по [ссылке](../#mojsklad-json-api-obschie-swedeniq-kontextnyj-poisk). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов налоговых ставок на соответствие поисковой строке будет осуществлен по следующим полям:

- по значению ставки **rate**
- по комментарию **comment**

#### Атрибуты сущности

| Название      | Тип                                                       | Фильтрация | Описание                                                                                       |
|---------------|:----------------------------------------------------------|:-----------|:-----------------------------------------------------------------------------------------------|
| **accountId** | UUID                                                      |            | ID учетной записи<br>                                                                          |
| **comment**   | String                                                    | `=`        | Комментарий к налоговой ставке<br>                                                             |
| **group**     | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`   | Отдел-владелец<br>`+Expand` `+Для пользовательских ставок`                                     |
| **id**        | UUID                                                      |            | ID налоговой ставки<br>`+Обязательное при ответе` `+Только для чтения`                         |
| **meta**      | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |            | Метаданные налоговой ставки<br>`+Обязательное при ответе`                                      |
| **rate**      | Number                                                    | `=`        | Значение налоговой ставки<br>`+Обязательное при ответе` `+Необходимо при создании`             |
| **owner**     | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`   | Сотрудник-владелец<br>`+Expand` `+Для пользовательских ставок`                                 |
| **shared**    | Boolean                                                   |            | Флаг общего доступа<br>`+Для пользовательских ставок`                                          |
| **updated**   | DateTime                                                  |            | Момент последнего обновления сущности<br>`+Обязательное при ответе` `+Необходимо при создании` |
| **archived**  | Boolean                                                   | `=` `!=`   | Флаг принадлежности ставки к архивным ставкам<br>                                              |

### Получить Ставки НДС

Запрос на получение всех налоговых ставок, имеющихся в справочнике на данной учетной записи.
Результат успешного запроса - JSON представление списка налоговых ставок с перечисленными полями.

| Поле        | Тип                                                       | Описание                                                    |
|:------------|-----------------------------------------------------------|:------------------------------------------------------------|
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос                 |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче                                         |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой налоговые ставки |

**Параметры**

| Параметр   | Описание                                                                                                                             |
|:-----------|:-------------------------------------------------------------------------------------------------------------------------------------|
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.Допустимые значения 1 - 1000. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                               |

> Пример запроса на получение ставок НДС на данной учетной записи

```shell
curl -X GET 
  "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/"
  -H 'Authorization: Basic <Credentials>'
  -H 'Content-Type: application/json'
```

> Response 200 (application/json) Успешный запрос. Результат - JSON представление списка ставок НДС, доступных для текущей учетной записи

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate",
    "type": "taxrate",
    "mediaType": "application/json",
    "size": 7,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/6031a4ab-fec1-11ec-0a80-059200000007",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/metadata",
        "type": "taxrate",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#taxrate/edit?id=6031a4ab-fec1-11ec-0a80-059200000007"
      },
      "id": "6031a4ab-fec1-11ec-0a80-059200000007",
      "accountId": "c6bc8eaa-fe92-11ec-0a82-062000000018",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/c6f50a9a-fe92-11ec-0a82-09860000027a",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=c6f50a9a-fe92-11ec-0a82-09860000027a"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/c6bcfbf3-fe92-11ec-0a82-062000000019",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2022-07-08 16:25:03.726",
      "rate": 33.0,
      "archived": false,
      "comment": "Ставка на продукты с ГМО"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/6038efa6-fec1-11ec-0a80-05920000000b",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/metadata",
        "type": "taxrate",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#taxrate/edit?id=6038efa6-fec1-11ec-0a80-05920000000b"
      },
      "id": "6038efa6-fec1-11ec-0a80-05920000000b",
      "accountId": "c6bc8eaa-fe92-11ec-0a82-062000000018",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/c6f50a9a-fe92-11ec-0a82-09860000027a",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=c6f50a9a-fe92-11ec-0a82-09860000027a"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/c6bcfbf3-fe92-11ec-0a82-062000000019",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2022-07-08 16:25:03.802",
      "rate": 34.0,
      "archived": false,
      "comment": "Ставка на бижутерию"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/c739f8a1-385a-4c71-96e9-1707b0ce4fa7",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/metadata",
        "type": "taxrate",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#taxrate/edit?id=c739f8a1-385a-4c71-96e9-1707b0ce4fa7"
      },
      "id": "c739f8a1-385a-4c71-96e9-1707b0ce4fa7",
      "updated": "2022-05-30 00:00:00.000",
      "rate": 18.0,
      "archived": false
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/ca670a98-82bb-4a4d-9cc3-8388e466b3d8",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/metadata",
        "type": "taxrate",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#taxrate/edit?id=ca670a98-82bb-4a4d-9cc3-8388e466b3d8"
      },
      "id": "ca670a98-82bb-4a4d-9cc3-8388e466b3d8",
      "updated": "2022-05-30 00:00:00.000",
      "rate": 20.0,
      "archived": false
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/da9c85c1-1990-44bf-9e82-d1d3fda0d1ce",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/metadata",
        "type": "taxrate",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#taxrate/edit?id=da9c85c1-1990-44bf-9e82-d1d3fda0d1ce"
      },
      "id": "da9c85c1-1990-44bf-9e82-d1d3fda0d1ce",
      "updated": "2022-05-30 00:00:00.000",
      "rate": 10.0,
      "archived": false
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/e0d54b5d-fe92-11ec-0a82-098600000305",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/metadata",
        "type": "taxrate",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#taxrate/edit?id=e0d54b5d-fe92-11ec-0a82-098600000305"
      },
      "id": "e0d54b5d-fe92-11ec-0a82-098600000305",
      "accountId": "c6bc8eaa-fe92-11ec-0a82-062000000018",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/c6f50a9a-fe92-11ec-0a82-09860000027a",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=c6f50a9a-fe92-11ec-0a82-09860000027a"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/c6bcfbf3-fe92-11ec-0a82-062000000019",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2022-07-08 10:52:24.558",
      "rate": 15.0,
      "archived": false,
      "comment": "Супер-ставка"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/e2887a21-8cb5-4d37-9151-e1978ae57159",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/metadata",
        "type": "taxrate",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#taxrate/edit?id=e2887a21-8cb5-4d37-9151-e1978ae57159"
      },
      "id": "e2887a21-8cb5-4d37-9151-e1978ae57159",
      "updated": "2022-05-30 00:00:00.000",
      "rate": 0.0,
      "archived": false
    }
  ]
}
```

### Создать Ставку НДС

Запрос на создание новой ставки на данной учетной записи.
Единственное поле, которое обязательно должно присутствовать в теле запроса - поле **rate**.

> Запрос на создание ставки НДС

```shell
curl -X POST 
  "https://online.moysklad.ru/api/remap/1.2/entity/taxrate"
  -H 'Authorization: Basic <Credentials>'
  -H 'Content-Type: application/json'
  -d '{
    "rate": 33,
    "comment": "Ставка на продукты с ГМО",
    "archived": false
  }'
```

> Response 200 (application/json) Успешный запрос. Результат - JSON представление созданной ставки НДС

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/34330ecb-feab-11ec-0a80-059200000001",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/metadata",
    "type": "taxrate",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#taxrate/edit?id=34330ecb-feab-11ec-0a80-059200000001"
  },
  "id": "34330ecb-feab-11ec-0a80-059200000001",
  "accountId": "c6bc8eaa-fe92-11ec-0a82-062000000018",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/c6f50a9a-fe92-11ec-0a82-09860000027a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=c6f50a9a-fe92-11ec-0a82-09860000027a"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/c6bcfbf3-fe92-11ec-0a82-062000000019",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2022-07-08 13:46:20.857",
  "rate": 33.0,
  "archived": false,
  "comment": "Ставка на продукты с ГМО"
}
```

### Массовое создание и обновление Ставок НДС

[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) ставок НДС. В теле запроса нужно передать массив, содержащий JSON представления ставок, которые вы хотите создать или обновить.
Обновляемые ставки должны содержать идентификатор в виде метаданных.

> Запрос на массовое обновление ставок НДС

```shell
curl -X POST 
  "https://online.moysklad.ru/api/remap/1.2/entity/taxrate"
  -H 'Authorization: Basic <Credentials>'
  -H 'Content-Type: application/json'
  -d '[
    {
      "rate": 33,
      "comment": "Ставка на продукты с ГМО",
      "archived": false
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/c6ff8164-01c0-11ed-0a80-07e3000001ff",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/metadata",
        "type": "taxrate",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#taxrate/edit?id=c6ff8164-01c0-11ed-0a80-07e3000001ff"
      },
      "rate": 34,
      "comment": "Ставка на бижутерию",
      "archived": false
    }
  ]'
```

> Response 200 (application/json) Успешный запрос. Результат - JSON представление списка измененных ставок НДС

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/2eab0501-028f-11ed-0a80-03330000007a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/metadata",
      "type": "taxrate",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#taxrate/edit?id=2eab0501-028f-11ed-0a80-03330000007a"
    },
    "id": "2eab0501-028f-11ed-0a80-03330000007a",
    "accountId": "9caae711-01c0-11ed-0a82-0a1c0000000c",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/9cdc3afb-01c0-11ed-0a80-07e300000172",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9cdc3afb-01c0-11ed-0a80-07e300000172"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/9cab5482-01c0-11ed-0a82-0a1c0000000d",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2022-07-13 12:35:50.458",
    "rate": 33.0,
    "archived": false,
    "comment": "Ставка на продукты с ГМО"
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/c6ff8164-01c0-11ed-0a80-07e3000001ff",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/metadata",
      "type": "taxrate",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#taxrate/edit?id=c6ff8164-01c0-11ed-0a80-07e3000001ff"
    },
    "id": "c6ff8164-01c0-11ed-0a80-07e3000001ff",
    "accountId": "9caae711-01c0-11ed-0a82-0a1c0000000c",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/9cdc3afb-01c0-11ed-0a80-07e300000172",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9cdc3afb-01c0-11ed-0a80-07e300000172"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/9cab5482-01c0-11ed-0a82-0a1c0000000d",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2022-07-13 12:35:50.534",
    "rate": 34.0,
    "archived": false,
    "comment": "Ставка на бижутерию"
  }
]
```

### Удалить Ставку НДС

Запрос на удаление конкретной налоговой ставки.
Возможно удаление только налоговых ставок, которые были созданы пользователем.

**Параметры**

| Параметр   | Описание                                                                                    |
|:-----------|:--------------------------------------------------------------------------------------------|
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* - ID налоговой ставки   |

> Запрос на удаление ставки НДС

```shell
curl -X DELETE 
  "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/6031a4ab-fec1-11ec-0a80-059200000007"
  -H 'Authorization: Basic <Credentials>'
  -H 'Content-Type: application/json'
```

> Response 200 (application/json) Успешный запрос. Результат - пустой JSON

```json
```

### Массовое удаление Ставок НДС

В теле запроса нужно передать массив, содержащий JSON метаданных ставок, которые вы хотите удалить.

> Запрос на массовое удаление ставок НДС

```shell
curl -X POST 
  "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/delete"
  -H 'Authorization: Basic <Credentials>'
  -H 'Content-Type: application/json'
  -d '[
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/6031a4ab-fec1-11ec-0a80-059200000007",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/metadata",
        "type": "taxrate",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#taxrate/edit?id=6031a4ab-fec1-11ec-0a80-059200000007"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/6038efa6-fec1-11ec-0a80-05920000000b",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/metadata",
        "type": "taxrate",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#taxrate/edit?id=6038efa6-fec1-11ec-0a80-05920000000b"
      }
    }
  ]'
```

> Response 200 (application/json) Успешный запрос. Результат - JSON представление результатов удаления ставок НДС

```json
[
  {
    "info": "Сущность 'taxrate' с UUID: 6031a4ab-fec1-11ec-0a80-059200000007 успешно удалена"
  },
  {
    "info": "Сущность 'taxrate' с UUID: 6038efa6-fec1-11ec-0a80-05920000000b успешно удалена"
  }
]
```

### Ставка НДС

### Получить Ставку НДС

**Параметры**

| Параметр | Описание                                                                                |
| :------- |:----------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 736da682-ad8b-11eb-0a80-17ef000000d4* id налоговой ставки |

> Пример запроса на получение ставки НДС по ID

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/6031a4ab-fec1-11ec-0a80-059200000007"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"  
```

> Response 200 (application/json) Успешный запрос. Результат - JSON представление ставки НДС

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/6031a4ab-fec1-11ec-0a80-059200000007",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/metadata",
    "type": "taxrate",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#taxrate/edit?id=6031a4ab-fec1-11ec-0a80-059200000007"
  },
  "id": "6031a4ab-fec1-11ec-0a80-059200000007",
  "accountId": "c6bc8eaa-fe92-11ec-0a82-062000000018",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/c6f50a9a-fe92-11ec-0a82-09860000027a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=c6f50a9a-fe92-11ec-0a82-09860000027a"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/c6bcfbf3-fe92-11ec-0a82-062000000019",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2022-07-08 16:25:03.726",
  "rate": 33.0,
  "archived": false,
  "comment": "Ставка на продукты с ГМО"
}
```

### Изменить Ставку НДС

Запрос на изменение одной из существующих налоговых ставок.
Для предустановленных (системных) ставок невозможно изменить значение параметра **rate**.

**Параметры**

| Параметр | Описание                                                                                |
| :------- |:----------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 736da682-ad8b-11eb-0a80-17ef000000d4* id налоговой ставки |

> Запрос на изменение ставки НДС

```shell
curl -X PUT 
  "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/6031a4ab-fec1-11ec-0a80-059200000007"
  -H 'Authorization: Basic <Credentials>'
  -H 'Content-Type: application/json'
  -d '{
    "rate": 28,
    "comment": "Ставка на жвачку Turbo",
    "archived": false
  }'
```

> Response 200 (application/json) Успешный запрос. Результат - JSON представление измененной ставки НДС

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/c6ff8164-01c0-11ed-0a80-07e3000001ff",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/taxrate/metadata",
    "type": "taxrate",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#taxrate/edit?id=c6ff8164-01c0-11ed-0a80-07e3000001ff"
  },
  "id": "c6ff8164-01c0-11ed-0a80-07e3000001ff",
  "accountId": "9caae711-01c0-11ed-0a82-0a1c0000000c",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/9cdc3afb-01c0-11ed-0a80-07e300000172",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9cdc3afb-01c0-11ed-0a80-07e300000172"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/9cab5482-01c0-11ed-0a82-0a1c0000000d",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2022-07-13 12:25:51.198",
  "rate": 28.0,
  "archived": false,
  "comment": "Ставка на жвачку Turbo"
}
```
