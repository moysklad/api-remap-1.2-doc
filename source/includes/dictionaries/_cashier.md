## Кассир
### Кассиры
Средствами JSON API можно запрашивать списки Кассиров и сведения по отдельным кассирам. Кодом сущности для кассира в составе JSON API является ключевое слово **cashier**.
#### Атрибуты сущности

| Название        | Тип                                                       | Описание                                                                                          |
| --------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| **accountId**   | UUID                                                      | ID учетной записи Кассира<br>`+Обязательное при ответе` `+Только для чтения`                      |
| **employee**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные сотрудника, которого представляет собой кассир<br>`+Обязательное при ответе` `+Expand` |
| **id**          | UUID                                                      | ID Кассира<br>`+Обязательное при ответе` `+Только для чтения`                                     |
| **meta**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Кассира<br>`+Обязательное при ответе` `+Только для чтения`                             |
| **retailStore** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные точки продаж, к которой прикреплен кассир<br>`+Обязательное при ответе` `+Expand`      |



### Получить Кассиров
Запрос на получение списка всех кассиров на данной точке продаж.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                       |
| ----------- | :-------------------------------------------------------- | :--------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                           |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.   |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих Кассиров. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **retailStoreId**              | `string` (required) *Example: ea05e0c9-8667-11e7-8a7f-40d000000060* id Точки продаж.                                                   |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить Кассиров

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/ea05e0c9-8667-11e7-8a7f-40d000000060/cashiers"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка кассиров.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/ea05e0c9-8667-11e7-8a7f-40d000000060/cashiers",
    "type": "cashier",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/ea05e0c9-8667-11e7-8a7f-40d000000060/cashiers/3902eb20-139f-11e6-9464-e4de00000077",
        "type": "cashier",
        "mediaType": "application/json"
      },
      "id": "3902eb20-139f-11e6-9464-e4de00000077",
      "accountId": "305f25aa-137a-11e6-9464-e4de00000001",
      "employee": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/30c1cfcc-137a-11e6-9464-e4de00000028",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=30c1cfcc-137a-11e6-9464-e4de00000028"
        }
      },
      "retailStore": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/ea05e0c9-8667-11e7-8a7f-40d000000060",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
          "type": "retailstore",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#retailstore/edit?id=ea05e0c9-8667-11e7-8a7f-40d000000060"
        }
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/ea05e0c9-8667-11e7-8a7f-40d000000060/cashiers/6674fde7-139f-11e6-9464-e4de0000007e",
        "type": "cashier",
        "mediaType": "application/json"
      },
      "id": "6674fde7-139f-11e6-9464-e4de0000007e",
      "accountId": "305f25aa-137a-11e6-9464-e4de00000001",
      "employee": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/5bd62f8f-139f-11e6-9464-e4de0000007b",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=5bd62f8f-139f-11e6-9464-e4de0000007b"
        }
      },
      "retailStore": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/ea05e0c9-8667-11e7-8a7f-40d000000060",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
          "type": "retailstore",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#retailstore/edit?id=ea05e0c9-8667-11e7-8a7f-40d000000060"
        }
      }
    }
  ]
}
```

### Кассир

### Получить Кассира

**Параметры**

| Параметр          | Описание                                                                             |
| :---------------- | :----------------------------------------------------------------------------------- |
| **id**            | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Кассира.      |
| **retailStoreId** | `string` (required) *Example: ea05e0c9-8667-11e7-8a7f-40d000000060* id Точки продаж. |


> Запрос на получение отдельного кассира с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/ea05e0c9-8667-11e7-8a7f-40d000000060/cashiers/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного кассира.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/ea05e0c9-8667-11e7-8a7f-40d000000060/cashiers/3902eb20-139f-11e6-9464-e4de00000077",
    "type": "cashier",
    "mediaType": "application/json"
  },
  "id": "3902eb20-139f-11e6-9464-e4de00000077",
  "accountId": "305f25aa-137a-11e6-9464-e4de00000001",
  "employee": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/30c1cfcc-137a-11e6-9464-e4de00000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=30c1cfcc-137a-11e6-9464-e4de00000028"
    }
  },
  "retailStore": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/ea05e0c9-8667-11e7-8a7f-40d000000060",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
      "type": "retailstore",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#retailstore/edit?id=ea05e0c9-8667-11e7-8a7f-40d000000060"
    }
  }
}
```
