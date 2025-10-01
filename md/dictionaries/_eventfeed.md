## Лента событий

### Работа с Лентой Событий в документе с помощью специальных ресурсов

Кодом сущности для Ленты событий в составе JSON API является ключевое слово **notes**.

Средствами JSON API можно создавать, обновлять и удалять события, запрашивать списки событий, а также сведения по
отдельным событиям для документов следующего типа:

+ [Возврат поставщику](#/documents/purchase-return#2-vozvrat-postavshiku)
+ [Выданный отчет комиссионера](#/documents/commissionreportout#2-vydannyj-otchet-komissionera)
+ [Заказ покупателя](#/documents/customerOrder#2-zakaz-pokupatelya)
+ [Заказ поставщику](#/documents/purchaseOrder#2-zakaz-postavshiku)
+ [Приемка](#/documents/supply#2-priemka)
+ [Счет покупателю](#/documents/invoice-out#2-schet-pokupatelyu)
+ [Счет поставщика](#/documents/invoice-in#2-schet-postavshika)

#### Работа с упоминаниями в Ленте Событий

События в Ленте могут содержать упоминания других сущностей прямо в тексте самого События. 
Формат упоминания: `{{type;uuid}}`. Например, при упоминании сотрудника, текст События может выглядеть таким образом:
`Привет, {{employee;861d34a9-f1b3-11ee-ac12-00110000004e}}! Как у тебя дела?`, формат отображения активной/архивной/удаленной сущности одинаков. 

**Внимание!** Если сущность с таким UUID не была найдена, то в web-интерфейсе выведется текст без какой-либо обработки. 

Поддерживаемые типы сущностей в упоминаниях:

+ [Сотрудник](#/dictionaries/employee#2-sotrudnik)

#### Ограничение на количество Событий

Для каждого документа можно создать не более 5000 Событий. 

#### Права доступа

| Операция                        | Доступ                                                                                    |
|---------------------------------|:------------------------------------------------------------------------------------------|
| **Просмотр&nbsp;событий**       | Пользователь с правами администратора или с правом на просмотр документа.                 |
| **Создание&nbsp;событий**       | Пользователь с правами администратора или с правом на просмотр документа.                 |
| **Редактирование&nbsp;событий** | Пользователь с правами администратора или автор события с правом на просмотр документа.   |
| **Удаление&nbsp;событий**       | Пользователь с правами администратора или автор события с правом на просмотр документа.   |

#### Атрибуты сущности

| Название              | Тип                                                       | Описание                                                                                                                                                 |
|-----------------------|:----------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
| **meta**              | [Meta](#/general#3-metadannye) | Метаданные События<br>`+Обязательное при ответе`                                                                                                         |
| **id**                | UUID                                                      | ID События<br>`+Обязательное при ответе` `+Только для чтения`                                                                                            |
| **accountId**         | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                     |
| **created**           | DateTime                                                  | Момент создания События<br>`+Обязательное при ответе` `+Только для чтения`                                                                               |
| **description**       | String(4096)                                              | Текст События<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                                   |
| **author**            | [Meta](#/general#3-metadannye) | Метаданные Сотрудника - создателя События (администратор аккаунта, если автор - решение)<br>`+Обязательное при ответе` `+Только для чтения` `+Expand` |
| **authorApplication** | [Meta](#/general#3-metadannye) | Метаданные Решения - создателя события<br>`+Только для чтения` `+Expand`                                                                              |

### Получить список Событий документа
Запрос на получение всех Событий документа для данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                                                         |
|-------------|:----------------------------------------------------------|:-------------------------------------------------------------------------------------------------|
| **meta**    | [Meta](#/general#3-metadannye) | Метаданные о выдаче.                                                                             |
| **context** | [Meta](#/general#3-metadannye) | Метаданные о сотруднике, выполнившем запрос.                                                     |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой [События](#/dictionaries/eventfeed#2-lenta-sobytij). |

**Параметры**

| Параметр          | Описание                                                                                                                               |
|-------------------|:---------------------------------------------------------------------------------------------------------------------------------------|
| **document_type** | `string` (required) *Example: customerorder* тип документа, для которого запрашиваются События.                                        |
| **document_id**   | `string` (required) *Example: e4609c69-00bc-11ef-ac12-00120000001a* id документа c Событиями.                                          |
| **limit**         | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**        | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить список Событий для Заказа покупателя

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/e4609c69-00bc-11ef-ac12-00120000001a/notes"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
> Успешный запрос. Результат - JSON представление списка Событий.

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

### Добавить Событие

Запрос на добавление одного События документа для данной учетной записи.

**Параметры**

| Параметр          | Описание                                                                                                          |
|-------------------|:------------------------------------------------------------------------------------------------------------------|
| **document_type** | `string` (required) *Example: customerorder* тип документа, для которого создается Событие.                       |
| **document_id**   | `string` (required) *Example: e4609c69-00bc-11ef-ac12-00120000001a* id документа, для которого создается Событие. |

> Запрос на добавление нового события для Заказа покупателя.

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/e4609c69-00bc-11ef-ac12-00120000001a/notes"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
    -d '{
          "description": "Привет, {{employee;730c1b3d-00ba-11ef-ac12-00120000000d}}! Как у тебя дела?"
        }'  
```

> Response 201 (application/json). Успешный запрос. Результат - JSON представление добавленного События.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/e4609c69-00bc-11ef-ac12-00120000001a/notes/844a0ef9-19ac-11ef-ac12-000b00000000",
      "type": "eventnote",
      "mediaType": "application/json"
    },
    "id": "844a0ef9-19ac-11ef-ac12-000b00000000",
    "accountId": "85284e22-f1b3-11ee-ac12-000f00000001",
    "created": "2024-05-24 12:03:40.849",
    "description": "Привет, {{employee;730c1b3d-00ba-11ef-ac12-00120000000d}}! Как у тебя дела?",
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
```

### Получить Событие
Запрос на получение одного События документа для данной учетной записи.

**Параметры**

| Параметр          | Описание                                                                                        |
|-------------------|:------------------------------------------------------------------------------------------------|
| **document_type** | `string` (required) *Example: customerorder* тип документа, для которого запрашивается Событие. |
| **document_id**   | `string` (required) *Example: e4609c69-00bc-11ef-ac12-00120000001a* id документа c Событиями.   |
| **id**            | `string` (required) *Example: 844a0ef9-19ac-11ef-ac12-000b00000000* id События.                 |

> Получить Событие Заказа покупателя

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/e4609c69-00bc-11ef-ac12-00120000001a/notes/844a0ef9-19ac-11ef-ac12-000b00000000"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
> Успешный запрос. Результат - JSON представление События.

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

### Обновить Событие

Запрос на обновления одного События документа для данной учетной записи.

**Параметры**

| Параметр          | Описание                                                                                      |
|-------------------|:----------------------------------------------------------------------------------------------|
| **document_type** | `string` (required) *Example: customerorder* тип документа, для которого обновляется Событие. |
| **document_id**   | `string` (required) *Example: e4609c69-00bc-11ef-ac12-00120000001a* id документа c Событиями. |
| **id**            | `string` (required) *Example: 844a0ef9-19ac-11ef-ac12-000b00000000* id События.               |

> Обновить Событие Заказа покупателя

```shell
curl -X PUT
  "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/e4609c69-00bc-11ef-ac12-00120000001a/notes/844a0ef9-19ac-11ef-ac12-000b00000000"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
    -d '{
          "description": "Привет, {{employee;730c1b3d-00ba-11ef-ac12-00120000000d}}! Как у тебя дела?"
        }'  
```

> Response 200 (application/json)
> Успешный запрос. Результат - JSON представление События.

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
  "description": "Привет, {{employee;730c1b3d-00ba-11ef-ac12-00120000000d}}! Как у тебя дела?",
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

### Удалить Событие

Запрос на удаление одного События документа для данной учетной записи.

**Параметры**

| Параметр          | Описание                                                                                      |
|-------------------|:----------------------------------------------------------------------------------------------|
| **document_type** | `string` (required) *Example: customerorder* тип документа, для которого удаляется Событие.   |
| **document_id**   | `string` (required) *Example: e4609c69-00bc-11ef-ac12-00120000001a* id документа c Событиями. |
| **id**            | `string` (required) *Example: 844a0ef9-19ac-11ef-ac12-000b00000000* id События.               |

> Удалить Событие Заказа покупателя

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/e4609c69-00bc-11ef-ac12-00120000001a/notes/844a0ef9-19ac-11ef-ac12-000b00000000"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 204 (application/json)
> Успешное удаление События.
