## Страна
### Страны 
Средствами JSON API можно создавать и обновлять сведения о Странах, запрашивать списки Стран и сведения по отдельным Странам. Кодом сущности для Страны в составе JSON API является ключевое слово **country**.
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](../#mojsklad-json-api-obschie-swedeniq-kontextnyj-poisk). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов стран на соответствие поисковой строке будет осуществлен по следующим полям:

+ по наименованию Страны **name**
+ по описанию Страны **description**

#### Атрибуты сущности
| Название         | Тип                                                       | Фильтрация                  | Описание                                                                                 |
| ---------------- | :-------------------------------------------------------- | :-------------------------- | :--------------------------------------------------------------------------------------- |
| **accountId**    | UUID                                                      | `=` `!=`                    | ID учетной записи<br>`+Только для чтения`                                                |
| **code**         | String(255)                                               | `=` `!=` `~` `~=` `=~`      | Код Страны                                                                               |
| **description**  | String(4096)                                              | `=` `!=` `~` `~=` `=~`      | Описание Страны                                                                          |
| **externalCode** | String(255)                                               | `=` `!=` `~` `~=` `=~`      | Внешний код Страны<br>`+Обязательное при ответе`                                         |
| **group**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                    | Отдел-владелец<br>`+Expand` `+Для пользовательских стран`                                |
| **id**           | UUID                                                      | `=` `!=`                    | ID Страны<br>`+Обязательное при ответе` `+Только для чтения`                             |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                             | Метаданные о Стране<br>`+Обязательное при ответе`                                        |
| **name**         | String(255)                                               | `=` `!=` `~` `~=` `=~`      | Наименование Страны<br>`+Обязательное при ответе` `+Необходимо при создании`             |
| **owner**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                    | Сотрудник-владелец<br>`+Expand` `+Для пользовательских стран`                            |
| **shared**       | Boolean                                                   | `=` `!=`                    | Флаг Общий доступ<br>`+Для пользовательских стран`                                       |
| **updated**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`  | Момент последнего обновления сущности<br>`+Обязательное при ответе` `+Только для чтения` |

### Получить Страны 
Запрос на получение списка всех Стран для данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                                                 |
| ----------- | :-------------------------------------------------------- | :--------------------------------------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                                                     |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                                             |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой [Страны](../dictionaries/#suschnosti-strana). |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить страны

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/country"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Стран.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/?limit=5",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
    "type": "country",
    "mediaType": "application/json",
    "size": 248,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/000d77a9-3000-4f81-a995-6b9cffdee1d2",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type": "country",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#country/edit?id=000d77a9-3000-4f81-a995-6b9cffdee1d2"
      },
      "id": "000d77a9-3000-4f81-a995-6b9cffdee1d2",
      "updated": "2012-11-02 11:04:13",
      "name": "Марокко",
      "description": "Королевство Марокко",
      "code": "504",
      "externalCode": "504"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/00999522-23d6-40e6-870e-ec7f7bd8d354",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type": "country",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#country/edit?id=00999522-23d6-40e6-870e-ec7f7bd8d354"
      },
      "id": "00999522-23d6-40e6-870e-ec7f7bd8d354",
      "updated": "2012-11-02 11:04:15",
      "name": "Япония",
      "code": "392",
      "externalCode": "392"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/0238a888-c602-4e78-a199-d8f49c4d6c18",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type": "country",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#country/edit?id=0238a888-c602-4e78-a199-d8f49c4d6c18"
      },
      "id": "0238a888-c602-4e78-a199-d8f49c4d6c18",
      "updated": "2012-11-02 11:04:15",
      "name": "Хорватия",
      "description": "Республика Хорватия",
      "code": "191",
      "externalCode": "191"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/02dc7934-0a88-49ea-a733-2da517a000c2",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type": "country",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#country/edit?id=02dc7934-0a88-49ea-a733-2da517a000c2"
      },
      "id": "02dc7934-0a88-49ea-a733-2da517a000c2",
      "updated": "2012-11-02 11:04:15",
      "name": "Филиппины",
      "description": "Республика Филиппины",
      "code": "608",
      "externalCode": "608"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/04cc9c56-96b1-4ccf-aa7f-78735710381c",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type": "country",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#country/edit?id=04cc9c56-96b1-4ccf-aa7f-78735710381c"
      },
      "id": "04cc9c56-96b1-4ccf-aa7f-78735710381c",
      "updated": "2012-11-02 11:04:15",
      "name": "Эквадор",
      "description": "Республика Эквадор",
      "code": "218",
      "externalCode": "218"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/04cc9c56-96b1-4ccf-aa7f-78735710381c",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type": "country",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#country/edit?id=04cc9c56-96b1-4ccf-aa7f-78735710381c"
      },
      "accountId": "95004e42-79f2-11e8-1a0d-4e0d00000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/9bc5de98-79f2-11e8-1a0d-4e0d0000002b",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9bc5de98-79f2-11e8-1a0d-4e0d0000002b"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/9504054f-79f2-11e8-1a0d-4e0d00000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "id": "04cc9c56-96b1-4ccf-aa7f-78735710381c",
      "updated": "2012-11-02 11:04:15",
      "name": "Моя страна",
      "description": "Моя пользовательская страна",
      "code": "999",
      "externalCode": "999"
    }
  ]
}
```

### Создать Страну 
Запрос на создание новой страны на данной учетной записи.
Единственное поле, которое обязательно должно присутствовать в теле запроса
на создание Страны - поле **name**.

> Пример запроса на создание новой страны.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/country"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Панама 2",
            "description": "Мы создали Панаму",
            "code": "PanamaCode",
            "externalCode": "panamaExtCode"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Страны.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/04331e4f-24c8-11e6-8a84-bae500000016",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
    "type": "country",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#country/edit?id=04331e4f-24c8-11e6-8a84-bae500000016"
  },
  "id": "04331e4f-24c8-11e6-8a84-bae500000016",
  "accountId": "45489428-24a5-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/9bc5de98-79f2-11e8-1a0d-4e0d0000002b",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9bc5de98-79f2-11e8-1a0d-4e0d0000002b"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/9504054f-79f2-11e8-1a0d-4e0d00000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-05-30 09:02:21",
  "name": "Панама 2",
  "description": "Мы создали Панаму",
  "code": "PanamaCode",
  "externalCode": "panamaExtCode"
}
```

### Массовое создание и обновление Стран 
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Стран.
В теле запроса нужно передать массив, содержащий JSON представления Стран, которые вы хотите создать или обновить.
Обновляемые Страны должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Стран

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/country"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "Панама 2",
              "description": "Мы создали Панаму",
              "code": "PanamaCode",
              "externalCode": "panamaExtCode"
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/810b5344-24ca-11e6-8a84-bae500000018",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
                "type": "country",
                "mediaType": "application/json"
              },
              "name": "Другая Россия",
              "description": "Каждый может изменить Россию, но только если он ее создал сам",
              "code": "no1russia",
              "externalCode": "gogorussia"
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Стран.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/04331e4f-24c8-11e6-8a84-bae500000016",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
      "type": "country",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#country/edit?id=04331e4f-24c8-11e6-8a84-bae500000016"
    },
    "id": "04331e4f-24c8-11e6-8a84-bae500000016",
    "accountId": "45489428-24a5-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/9bc5de98-79f2-11e8-1a0d-4e0d0000002b",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9bc5de98-79f2-11e8-1a0d-4e0d0000002b"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/9504054f-79f2-11e8-1a0d-4e0d00000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-05-30 09:02:21",
    "name": "Панама 2",
    "description": "Мы создали Панаму",
    "code": "PanamaCode",
    "externalCode": "panamaExtCode"
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/810b5344-24ca-11e6-8a84-bae500000018",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
      "type": "country",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#country/edit?id=810b5344-24ca-11e6-8a84-bae500000018"
    },
    "id": "810b5344-24ca-11e6-8a84-bae500000018",
    "accountId": "45489428-24a5-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/9bc5de98-79f2-11e8-1a0d-4e0d0000002b",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9bc5de98-79f2-11e8-1a0d-4e0d0000002b"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/9504054f-79f2-11e8-1a0d-4e0d00000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-05-30 09:20:10",
    "name": "Другая Россия",
    "description": "Каждый может изменить Россию, но только если он ее создал сам",
    "code": "no1russia",
    "externalCode": "gogorussia"
  }
]
```

### Удалить Страну 
Запрос на удаление страны. Невозможно удаление предустановленных стран (стран имеющихся на учетной записи по умолчанию).
Удалить можно только страны, созданные через основной интерфейс или через метод POST.

**Параметры**

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Страны. |

> Удалить Страну

```shell
  curl -X DELETE
    "https://online.moysklad.ru/api/remap/1.2/entity/country/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"  
```

> Response 200 (application/json)
Успешное удаление Розничной продажи.

### Массовое удаление Стран

В теле запроса нужно передать массив, содержащий JSON метаданных Стран, которые вы хотите удалить.


> Запрос на массовое удаление Стран. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/country/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
            "type": "country",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
            "type": "country",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Стран.

```json
[
  {
    "info":"Сущность 'country' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'country' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
```

### Страна 

**Параметры**

| Параметр | Описание                                                              |
| :------- | :-------------------------------------------------------------------- |
| **id**   | `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Страны |

### Получить Страну

**Параметры**

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Страны. |
 
> Запрос на получение страны с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/country/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Страны с указанным id.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/000d77a9-3000-4f81-a995-6b9cffdee1d2",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
    "type": "country",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#country/edit?id=000d77a9-3000-4f81-a995-6b9cffdee1d2"
  },
  "id": "000d77a9-3000-4f81-a995-6b9cffdee1d2",
  "updated": "2012-11-02 11:04:13",
  "name": "Марокко",
  "description": "Королевство Марокко",
  "code": "504",
  "externalCode": "504"
}
```

### Изменить Страну 
Запрос на изменение объекта, представляющего собой страну. Невозможно изменение предустановленных стран (стран имеющихся на учетной записи по умолчанию).
Изменить можно только страны, созданные через основной интерфейс или через метод POST.

**Параметры**

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Страны. |

> Пример запроса на обновление страны.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/country/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Другая Россия",
            "description": "Каждый может изменить Россию, но только если он ее создал сам",
            "code": "no1russia",
            "externalCode": "gogorussia"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Страны.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/810b5344-24ca-11e6-8a84-bae500000018",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
    "type": "country",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#country/edit?id=810b5344-24ca-11e6-8a84-bae500000018"
  },
  "id": "810b5344-24ca-11e6-8a84-bae500000018",
  "accountId": "45489428-24a5-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/9bc5de98-79f2-11e8-1a0d-4e0d0000002b",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=9bc5de98-79f2-11e8-1a0d-4e0d0000002b"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/9504054f-79f2-11e8-1a0d-4e0d00000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-05-30 09:20:10",
  "name": "Другая Россия",
  "description": "Каждый может изменить Россию, но только если он ее создал сам",
  "code": "no1russia",
  "externalCode": "gogorussia"
}
```
