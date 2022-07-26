## Проект
### Проекты 
Средствами JSON API можно создавать и обновлять сведения о Проектах, запрашивать списки Проектов и сведения по отдельным Проектам. Кодом сущности для Проекта в составе JSON API является ключевое слово **project**. Больше о Проектах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/205529477-%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B).
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](../#mojsklad-json-api-obschie-swedeniq-kontextnyj-poisk). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов проекта на соответствие поисковой строке будет осуществлен по следующим полям:

+ по наименованию Проекта **name**
+ по описанию Проекта **description**

#### Атрибуты сущности
| Название         | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                 |
| ---------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------- |
| **accountId**    | UUID                                                      | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                     |
| **archived**     | Boolean                                                   | `=` `!=`                                                                                                                                          | Добавлен ли Проект в архив<br>`+Обязательное при ответе`                                 |
| **attributes**   | Array(Object)                                             | [Операторы доп. полей](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-fil-traciq-po-dopolnitel-nym-polqm) | Коллекция доп. полей                                                                     |
| **code**         | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Код Проекта                                                                              |
| **description**  | String(4096)                                              | `=` `!=` `~` `~=` `=~`                                                                                                                            | Описание Проекта                                                                         |
| **externalCode** | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код Проекта<br>`+Обязательное при ответе`                                        |
| **group**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные отдела сотрудника<br>`+Обязательное при ответе` `+Expand`                     |
| **id**           | UUID                                                      | `=` `!=`                                                                                                                                          | ID проекта<br>`+Обязательное при ответе` `+Только для чтения`                            |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные Проекта<br>`+Обязательное при ответе`                                         |
| **name**         | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование Проекта<br>`+Обязательное при ответе` `+Необходимо при создании`            |
| **owner**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные владельца (Сотрудника)<br>`+Expand`                                           |
| **shared**       | Boolean                                                   | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе`                                               |
| **updated**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления сущности<br>`+Обязательное при ответе` `+Только для чтения` |

О работе с доп. полями Проектов можно прочитать [здесь](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)


### Получить Проекты 
Запрос на получение списка всех проектов на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                            |
| ----------- | :-------------------------------------------------------- | :-------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.        |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой проекты. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить Проекты

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/project"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка проектов.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/project",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
    "type": "project",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/51f263f9-0307-11e6-9464-e4de0000007c",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
        "type": "project",
        "mediaType": "application/json"
      },
      "id": "51f263f9-0307-11e6-9464-e4de0000007c",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-04-15 15:41:05",
      "name": "Аггрегатор томатной пасты",
      "description": "Проект по сбору и переработке томатной пасты от всех поставщиков",
      "code": "1248y12hrd",
      "externalCode": "HZV7dGc8iAnf0aNjrvQvN0",
      "archived": false,
      "attributes": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "ddff1ee8-12c1-11e6-9464-e4de0000007a",
          "name": "Приоритет проекта",
          "type": "string",
          "value": "Высокий"
        }
      ]
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/8477d916-0aef-11e6-9464-e4de00000103",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
        "type": "project",
        "mediaType": "application/json"
      },
      "id": "8477d916-0aef-11e6-9464-e4de00000103",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-04-25 17:10:51",
      "name": "План",
      "description": "Проект отслеживающий выполнение плана продаж",
      "code": "124721fsavy",
      "externalCode": "lv7MmPK4jvaqq-nA3g3NL2",
      "archived": false,
      "attributes": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "ddff1ee8-12c1-11e6-9464-e4de0000007a",
          "name": "Приоритет проекта",
          "type": "string",
          "value": "Низкий"
        }
      ]
    }
  ]
}
```

### Создать Проект 
Запрос на создание нового проекта. Единственным необходимым полем в теле запроса
для создания проекта является **name**.

> Пример запроса на создание нового проекта.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/project"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Проект по вертикальной интеграциии с Поставщиком",
            "description": "Интеграция с основным контрагентом",
            "code": "006",
            "externalCode": "814fhsafiwb124"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного проекта.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/2c013eeb-0af0-11e6-9464-e4de00000026",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
    "type": "project",
    "mediaType": "application/json"
  },
  "id": "2c013eeb-0af0-11e6-9464-e4de00000026",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-04-25 17:15:32",
  "name": "Проект по вертикальной интеграциии с Поставщиком",
  "description": "Интеграция с основным контрагентом",
  "code": "006",
  "externalCode": "814fhsafiwb124",
  "archived": false
}
```


> Пример запроса на создание нового проекта с доп. полями в теле запроса.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/project"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Новая система учета",
            "description": "Проект по переходу на новую систему учета продукции",
            "code": "0026",
            "externalCode": "213zzz",
            "attributes": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "Средний"
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного проекта.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/169ed74e-12c3-11e6-9464-e4de00000000",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
    "type": "project",
    "mediaType": "application/json"
  },
  "id": "169ed74e-12c3-11e6-9464-e4de00000000",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-05-05 16:12:58",
  "name": "Новая система учета",
  "description": "Проект по переходу на новую систему учета продукции",
  "code": "0026",
  "externalCode": "213zzz",
  "archived": false,
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "ddff1ee8-12c1-11e6-9464-e4de0000007a",
      "name": "Приоритет проекта",
      "type": "string",
      "value": "Средний"
    }
  ]
}
```

### Массовое создание и обновление Проектов 
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Проектов.
В теле запроса нужно передать массив, содержащий JSON представления Проектов, которые вы хотите создать или обновить.
Обновляемые Проекты должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Проектов

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/project"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "Проект по вертикальной интеграциии с Поставщиком",
              "description": "Интеграция с основным контрагентом",
              "code": "006",
              "externalCode": "814fhsafiwb124"
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/76e88dff-3f9b-11e6-8a84-bae50000009b",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
                "type": "project",
                "mediaType": "application/json"
              },
              "description": "Обновление проекта",
              "code": "9999",
              "externalCode": "dfDGFSG44"
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Проектов.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/2c013eeb-0af0-11e6-9464-e4de00000026",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
      "mediaType": "application/json"
    },
    "id": "2c013eeb-0af0-11e6-9464-e4de00000026",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-04-25 17:15:32",
    "name": "Проект по вертикальной интеграциии с Поставщиком",
    "description": "Интеграция с основным контрагентом",
    "code": "006",
    "externalCode": "814fhsafiwb124",
    "archived": false
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/76e88dff-3f9b-11e6-8a84-bae50000009b",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
      "mediaType": "application/json"
    },
    "id": "76e88dff-3f9b-11e6-8a84-bae50000009b",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-04-25 17:17:21",
    "name": "Важный проект",
    "description": "Обновление проекта",
    "code": "9999",
    "externalCode": "dfDGFSG44",
    "archived": false
  }
]
```

### Удалить Проект 

**Параметры**

| Параметр | Описание                                                                        |
| :------- | :------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Проекта. |

> Запрос на удаление Проекта с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/project/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Проекта.

### Массовое удаление Проектов

В теле запроса нужно передать массив, содержащий JSON метаданных Проектов, которые вы хотите удалить.


> Запрос на массовое удаление Проектов. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/project/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
            "type": "project",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
            "type": "project",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Проектов.

```json
[
  {
    "info":"Сущность 'project' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'project' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
```

### Метаданные Проектов 
#### Метаданные Проектов 
Запрос на получение метаданных Проектов. Результат - объект JSON, включающий в себя:

| Название         | Тип                                                       | Описание                                                               |
| ---------------- | :-------------------------------------------------------- | :--------------------------------------------------------------------- |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Проекта<br>`+Обязательное при ответе`                       |
| **attributes**   | Array(Object)                                             | Коллекция доп. полей                                                   |
| **createShared** | Boolean                                                   | Создавать новые Проекты с меткой "Общий"<br>`+Обязательное при ответе` |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Методанные проектов

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Проектов.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "id": "5290a290-0313-11e6-9464-e4de00000020",
      "name": "attribute_name",
      "type": "boolean",
      "required": false
    }
  ],
  "createShared": true
}
```

### Отдельное доп. поле

 
**Параметры**

| Параметр | Описание                                                                          |
| :------- | :-------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 5290a290-0313-11e6-9464-e4de00000020* id Доп. поля. |

> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata/attributes/5290a290-0313-11e6-9464-e4de00000020"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata/attributes/5290a290-0313-11e6-9464-e4de00000020",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "5290a290-0313-11e6-9464-e4de00000020",
  "name": "attribute_name",
  "type": "boolean",
  "required": false
}
```

### Проект 

**Параметры**

| Параметр | Описание                                                                        |
| :------- | :------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Проекта. |

### Получить Проект 
> Запрос на получение отдельного проекта с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/project/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление проекта.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/51f263f9-0307-11e6-9464-e4de0000007c",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
    "type": "project",
    "mediaType": "application/json"
  },
  "id": "51f263f9-0307-11e6-9464-e4de0000007c",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-04-15 15:41:05",
  "name": "Аггрегатор томатной пасты",
  "description": "Проект по сбору и переработке томатной пасты от всех поставщиков",
  "code": "1248y12hrd",
  "externalCode": "HZV7dGc8iAnf0aNjrvQvN0",
  "archived": false,
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "ddff1ee8-12c1-11e6-9464-e4de0000007a",
      "name": "Приоритет проекта",
      "type": "string",
      "value": "Средний"
    }
  ]
}
```

### Изменить Проект 
Запрос на обновление существующего проекта с указанным id.

**Параметры**

| Параметр | Описание                                                                        |
| :------- | :------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Проекта. |

> Пример запроса на обновление существующего проекта.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/project/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Проект по вертикальной интеграциии с Поставщиком",
            "description": "Интеграция с ключевым контрагентом",
            "code": "006_1",
            "externalCode": "cas12rgs"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного проекта.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/2c013eeb-0af0-11e6-9464-e4de00000026",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
    "type": "project",
    "mediaType": "application/json"
  },
  "id": "2c013eeb-0af0-11e6-9464-e4de00000026",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-04-25 17:17:21",
  "name": "Проект по вертикальной интеграциии с Поставщиком",
  "description": "Интеграция с ключевым контрагентом",
  "code": "006_1",
  "externalCode": "cas12rgs",
  "archived": false
}
```

> Пример запроса на обновление существующего проекта с доп полями в теле запроса.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/project/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Новая система учета и сбыта",
            "description": "Проект по переходу на новую систему учета и сбыта продукции",
            "code": "123",
            "externalCode": "fbeuf21dof1f",
            "attributes": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "Крайне высокий"
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного проекта.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/169ed74e-12c3-11e6-9464-e4de00000000",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
    "type": "project",
    "mediaType": "application/json"
  },
  "id": "169ed74e-12c3-11e6-9464-e4de00000000",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-05-05 16:18:18",
  "name": "Новая система учета и сбыта",
  "description": "Проект по переходу на новую систему учета и сбыта продукции",
  "code": "123",
  "externalCode": "fbeuf21dof1f",
  "archived": false,
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "ddff1ee8-12c1-11e6-9464-e4de0000007a",
      "name": "Приоритет проекта",
      "type": "string",
      "value": "Крайне высокий"
    }
  ]
}
```
