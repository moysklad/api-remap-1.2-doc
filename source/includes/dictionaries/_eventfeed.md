## Лента событий

### Работа с Лентой Событий в документе с помощью специальных ресурсов
Средствами JSON API можно запрашивать списки событий, а также сведения по отдельным событиям для документов следующего типа: [Заказ покупателя](../documents/#dokumenty-zakaz-pokupatelq)


#### Работа с упоминаниями в Ленте Событий

События в Ленте могут содержать упоминания других сущностей прямо в тексте самого События. 
Формат упоминания: `{{type;uuid}}`. Например, при упоминании сотрудника, текст События может выглядеть таким образом:
`Привет, {{employee;861d34a9-f1b3-11ee-ac12-00110000004e}}! Как у тебя дела?`, формат отображения активной/архивной/удаленной сущности одинаков. 

**Внимание!** Если сущность с таким UUID не была найдена, то в web-интерфейсе выведется текст без какой-либо обработки. 

Поддерживаемые типы сущностей в упоминаниях:

+ [Сотрудник](../dictionaries/#suschnosti-sotrudnik)

#### Атрибуты сущности

| Название              | Тип                                                       | Описание                                                                                                                                                |
|-----------------------|:----------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|
| **meta**              | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные События<br>`+Обязательное при ответе`                                                                                                        |
| **id**                | UUID                                                      | ID События<br>`+Обязательное при ответе` `+Только для чтения`                                                                                           |
| **accountId**         | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                    |
| **created**           | DateTime                                                  | Момент создания События<br>`+Обязательное при ответе` `+Только для чтения`                                                                              |
| **description**       | String(4096)                                              | Текст События<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                                  |
| **author**            | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Сотрудника - создателя События<br>`+Обязательное при ответе` `+Только для чтения` `+Expand`                                                  |

### Получить список Событий документа
Запрос на получение всех Событий документа для данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                                                         |
|-------------|:----------------------------------------------------------|:-------------------------------------------------------------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                                                             |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                                                     |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой [События](../dictionaries/#suschnosti-lenta-sobytij). |

**Параметры**

| Параметр          | Описание                                                                                                                               |
|-------------------|:---------------------------------------------------------------------------------------------------------------------------------------|
| **document_type** | `string` (required) *Example: customerorder* тип документа, для которого запрашиваются События.                                        |
| **document_id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id документа c Событиями.                                          |
| **limit**         | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**        | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить список Событий для Заказа покупателя

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/notes"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Событий.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/e4609c69-00bc-11ef-ac12-00120000001a/notes",
    "type": "eventnote",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/e4609c69-00bc-11ef-ac12-00120000001a/notes/844a0ef9-19ac-11ef-ac12-000b00000000",
        "type": "eventnote",
        "mediaType": "application/json"
      },
      "id": "844a0ef9-19ac-11ef-ac12-000b00000000",
      "accountId": "85284e22-f1b3-11ee-ac12-000f00000001",
      "created": "2024-05-24 12:03:40.849",
      "description": "{{employee;861d34a9-f1b3-11ee-ac12-00110000004e}}, привет",
      "author": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/861d34a9-f1b3-11ee-ac12-00110000004e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=861d34a9-f1b3-11ee-ac12-00110000004e"
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/e4609c69-00bc-11ef-ac12-00120000001a/notes/844a0ef9-19ac-11ef-ac12-000b00000000",
        "type": "eventnote",
        "mediaType": "application/json"
      },
      "id": "844a0ef9-19ac-11ef-ac12-000b00000000",
      "accountId": "85284e22-f1b3-11ee-ac12-000f00000001",
      "created": "2024-05-24 12:03:40.849",
      "description": "{{employee;861d34a9-f1b3-11ee-ac12-00110000004e}}, привет",
      "author": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/861d34a9-f1b3-11ee-ac12-00110000004e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=861d34a9-f1b3-11ee-ac12-00110000004e"
        }
      }
    }
  ]
}
```

### Получить Событие
Запрос на получение одного События документа для данной учетной записи.

**Параметры**

| Параметр          | Описание                                                                                        |
|-------------------|:------------------------------------------------------------------------------------------------|
| **document_type** | `string` (required) *Example: customerorder* тип документа, для которого запрашивается Событие. |
| **document_id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id документа c Событиями.   |
| **id**            | `string` (required) *Example: 844a0ef9-19ac-11ef-ac12-000b00000000* id События.                 |

> Получить Событие Заказа покупателя

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/notes/844a0ef9-19ac-11ef-ac12-000b00000000"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление События.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/e4609c69-00bc-11ef-ac12-00120000001a/notes/844a0ef9-19ac-11ef-ac12-000b00000000",
    "type": "eventnote",
    "mediaType": "application/json"
  },
  "id": "844a0ef9-19ac-11ef-ac12-000b00000000",
  "accountId": "85284e22-f1b3-11ee-ac12-000f00000001",
  "created": "2024-05-24 12:03:40.849",
  "description": "{{employee;861d34a9-f1b3-11ee-ac12-00110000004e}}, привет",
  "author": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/861d34a9-f1b3-11ee-ac12-00110000004e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=861d34a9-f1b3-11ee-ac12-00110000004e"
    }
  }
}
```

