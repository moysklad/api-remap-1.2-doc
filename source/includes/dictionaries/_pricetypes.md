## Типы цен
### Типы цен 

Средствами JSON API можно создавать и обновлять сведения о Типах цен, запрашивать списки Типов цен и сведения по отдельным Типам цен по id.
Кодом сущности для Типа цен в составе JSON API является ключевое слово **pricetype**. 

#### Атрибуты сущности
| Название         | Тип                                                       | Описание                                                                        |
| ---------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------ |
| **externalCode** | String(255)                                               | Внешний код Типа цены<br>`+Обязательное при ответе`                             |
| **id**           | UUID                                                      | ID типа цены<br>`+Обязательное при ответе` `+Только для чтения`                 |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Типа цены<br>`+Обязательное при ответе` `+Только для чтения`         |
| **name**         | String(255)                                               | Наименование Типа цены<br>`+Обязательное при ответе` `+Необходимо при создании` |

### Получить список всех типов цен
 
> Получить список всех типов цен

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - массив всех типов цен

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/a8967d6b-b026-11e7-9464-d04800000000",
      "type": "pricetype",
      "mediaType": "application/json"
    },
    "id": "a8967d6b-b026-11e7-9464-d04800000000",
    "name": "Цена продажи",
    "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5fc65f53-a470-11e7-9464-d04800000035",
      "type": "pricetype",
      "mediaType": "application/json"
    },
    "id": "5fc65f53-a470-11e7-9464-d04800000035",
    "name": "Цена для друзей",
    "externalCode": "3ea345e3-b56c-457a-bc77-3658546eb2bf"
  }
]
```
        
### Редактирование списка типов цен 

Типы цен возможно редактировать только полным списком.

+ Для создания нового типа цены, необходимо передать существующий список типов цен и новый объект, 
содержащий наименование нового типа цены.
+ Для обновления существующего типа цены необходимо передать мету этого типа цены, а также новое наименование.
+ Для удаления типа цены нужно исключить объект из передаваемого списка.
+ При сохранении списка типов цен сохраняется и порядок их следования.
+ Тип цены, указанный в списке первым элементом, становится типом цены по умолчанию.

Ограничения:

+ Нельзя создать более 100 типов цен.
+ Нельзя удалить все типы цен.
+ При создании нового типа цены наименование должно быть уникальным.
+ При создании нового типа наименование не должно быть пустым или отсутствовать.
+ Внешний код нельзя удалить. При передаче пустой строки при редактировании типа цены будет сгенерирован случайный внешний код.

> Пример создания нового типа цены.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
    -d '[
          {
            "meta": {
              "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/a8967d6b-b026-11e7-9464-d04800000000",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "a8967d6b-b026-11e7-9464-d04800000000",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          },
          {
            "name": "Цена для друзей",
            "externalCode": "3ea345e3-b56c-457a-bc77-3658546eb2bf"
          }
        ]'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного списка типов цен.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/a8967d6b-b026-11e7-9464-d04800000000",
      "type": "pricetype",
      "mediaType": "application/json"
    },
    "id": "a8967d6b-b026-11e7-9464-d04800000000",
    "name": "Цена продажи",
    "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5fc65f53-a470-11e7-9464-d04800000035",
      "type": "pricetype",
      "mediaType": "application/json"
    },
    "id": "5fc65f53-a470-11e7-9464-d04800000035",
    "name": "Цена для друзей",
    "externalCode": "3ea345e3-b56c-457a-bc77-3658546eb2bf"
  }
]
```

> Пример обновления существующего списка.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
    -d '[
          {
            "meta": {
              "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/a8967d6b-b026-11e7-9464-d04800000000",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "a8967d6b-b026-11e7-9464-d04800000000",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          },
          {
            "meta": {
              "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5fc65f53-a470-11e7-9464-d04800000035",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "5fc65f53-a470-11e7-9464-d04800000035",
            "name": "Цена для друзей",
            "externalCode": "3ea345e3-b56c-457a-bc77-3658546eb2bf"
          }
        ]'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного списка типов цен.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/a8967d6b-b026-11e7-9464-d04800000000",
      "type": "pricetype",
      "mediaType": "application/json"
    },
    "id": "a8967d6b-b026-11e7-9464-d04800000000",
    "name": "Цена продажи",
    "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5fc65f53-a470-11e7-9464-d04800000035",
      "type": "pricetype",
      "mediaType": "application/json"
    },
    "id": "5fc65f53-a470-11e7-9464-d04800000035",
    "name": "Цена для друзей",
    "externalCode": "3ea345e3-b56c-457a-bc77-3658546eb2bf"
  }
]
```

### Тип цены 
### Получить тип цены по ID
 
Получить тип цены по ID

**Параметры**

| Параметр                       | Описание                                                                         |
| ------------------------------ | :------------------------------------------------------------------------------- |
| **id**                         | `string` (required) *Example: a8967d6b-b026-11e7-9464-d04800000000* id типа цены |

> Получить тип цены по ID

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/a8967d6b-b026-11e7-9464-d04800000000"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - обновленный тип цены.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/a8967d6b-b026-11e7-9464-d04800000000",
    "type": "pricetype",
    "mediaType": "application/json"
  },
  "id": "a8967d6b-b026-11e7-9464-d04800000000",
  "name": "Цена продажи",
  "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
}
```

### Получить тип цены по умолчанию
 
> Получить тип цены по умолчанию

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/default"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - тип цены по умолчанию.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/a8967d6b-b026-11e7-9464-d04800000000",
    "type": "pricetype",
    "mediaType": "application/json"
  },
  "id": "a8967d6b-b026-11e7-9464-d04800000000",
  "name": "Цена продажи",
  "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
}
```
