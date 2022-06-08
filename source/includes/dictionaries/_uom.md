## Единица измерения
### Единицы измерения 
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](../#mojsklad-json-api-obschie-swedeniq-kontextnyj-poisk). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов единиц измерения на соответствие поисковой строке будет осуществлен по следующим полям:

+ по наименованию Единицы измерения **name**
+ по описанию Единицы измерения **description**

#### Атрибуты сущности

| Название         | Тип                                                       | Фильтрация                  | Описание                                                                                          |
| ---------------- | :-------------------------------------------------------- | :-------------------------- | :------------------------------------------------------------------------------------------------ |
| **accountId**    | UUID                                                      | `=` `!=`                    | ID учетной записи<br>`+Только для чтения`                                                         |
| **code**         | String(255)                                               | `=` `!=` `~` `~=` `=~`      | Код Единицы измерения                                                                             |
| **description**  | String(4096)                                              | `=` `!=` `~` `~=` `=~`      | Описание Единциы измерения                                                                        |
| **externalCode** | String(255)                                               | `=` `!=` `~` `~=` `=~`      | Внешний код Единицы измерения<br>`+Обязательное при ответе`                                       |
| **group**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                    | Отдел сотрудника<br>`+Expand` `+Для пользовательских ед. измерений`                               |
| **id**           | UUID                                                      | `=` `!=`                    | ID Единицы измерения<br>`+Обязательное при ответе` `+Только для чтения`                           |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                             | Метаданные Единицы измерения<br>`+Обязательное при ответе`                                        |
| **name**         | String(255)                                               | `=` `!=` `~` `~=` `=~`      | Наименование Единицы измерения<br>`+Обязательное при ответе` `+Необходимо при создании`           |
| **owner**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                    | Владелец (Сотрудник)<br>`+Expand` `+Для пользовательских ед. измерений`                           |
| **shared**       | Boolean                                                   | `=` `!=`                    | Общий доступ<br>`+Обязательное при ответе` `+Для пользовательских ед. измерений`                  |
| **updated**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`  | Момент последнего обновления Единицы измерения<br>`+Обязательное при ответе` `+Только для чтения` |

### Получить Единицы измерения 
Запрос на получение списка всех единиц измерения для данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                |
| ----------- | :-------------------------------------------------------- | :------------------------------------------------------ |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                    |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.            |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих Единицы измерения. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить Единицы измерения

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/uom"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка единиц измерения.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom?limit=5",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
    "type": "uom",
    "mediaType": "application/json",
    "size": 60,
    "limit": 5,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/061721df-9197-49a5-b637-7f5b4d3be969",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
        "type": "uom",
        "mediaType": "application/json"
      },
      "id": "061721df-9197-49a5-b637-7f5b4d3be969",
      "updated": "2012-11-02 11:07:44",
      "name": "дюйм",
      "description": "Дюйм (25,4 мм)",
      "code": "039",
      "externalCode": "039"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/0dd4fe8b-e59e-486e-bde5-b52fe0e25415",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
        "type": "uom",
        "mediaType": "application/json"
      },
      "id": "0dd4fe8b-e59e-486e-bde5-b52fe0e25415",
      "updated": "2012-11-02 11:07:44",
      "name": "мес",
      "description": "Месяц",
      "code": "362",
      "externalCode": "362"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/151af5a2-3df9-4aca-851c-814c8b3a65e6",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
        "type": "uom",
        "mediaType": "application/json"
      },
      "id": "151af5a2-3df9-4aca-851c-814c8b3a65e6",
      "updated": "2012-11-02 11:07:44",
      "name": "ц",
      "description": "Центнер (метрический) (100 кг); гектокилограмм; квинтал1 (метрический); децитонна",
      "code": "206",
      "externalCode": "206"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/1700dfba-e9e7-4c98-9857-8d984ab48b2b",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
        "type": "uom",
        "mediaType": "application/json"
      },
      "id": "1700dfba-e9e7-4c98-9857-8d984ab48b2b",
      "updated": "2012-11-02 11:07:44",
      "name": "ч",
      "description": "Час",
      "code": "356",
      "externalCode": "356"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
        "type": "uom",
        "mediaType": "application/json"
      },
      "id": "19f1edc0-fc42-4001-94cb-c9ec9c62ec10",
      "updated": "2012-11-02 11:07:44",
      "name": "шт",
      "description": "Штука",
      "code": "796",
      "externalCode": "796"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/79e6d170-7df6-11e8-7e04-3e5a00000097",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
        "type": "uom",
        "mediaType": "application/json"
      },
      "id": "79e6d170-7df6-11e8-7e04-3e5a00000097",
      "accountId": "1902785b-7df4-11e8-7e04-3e5a00000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/1fe747fc-7df4-11e8-7e04-3e5a0000002d",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=1fe747fc-7df4-11e8-7e04-3e5a0000002d"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/19062b38-7df4-11e8-7e04-3e5a00000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2018-07-02 15:50:19",
      "name": "Попугаи",
      "description": "Для измерения удавов",
      "code": "papagei",
      "externalCode": "parrotUnitOfMeasure"
    }
  ]
}
```

### Создать Единицу измерения 
Запрос на создание новой единицы измерения на данной учетной записи.
Единственное поле, которое обязательно должно присутствовать в теле запроса
на создание Единицы измерения - поле **name**.

> Пример запроса на создание новой единицы измерения.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/uom"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Попугаи",
            "description": "Для измерения удавов",
            "code": "papagei",
            "externalCode": "parrotUnitOfMeasure"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной единицы измерения.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/b25681fd-24d0-11e6-8a84-bae500000019",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
    "type": "uom",
    "mediaType": "application/json"
  },
  "id": "b25681fd-24d0-11e6-8a84-bae500000019",
  "accountId": "45489428-24a5-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/1fe747fc-7df4-11e8-7e04-3e5a0000002d",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=1fe747fc-7df4-11e8-7e04-3e5a0000002d"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/19062b38-7df4-11e8-7e04-3e5a00000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-05-30 10:04:29",
  "name": "Попугаи",
  "description": "Для измерения удавов",
  "code": "papagei",
  "externalCode": "parrotUnitOfMeasure"
}
```

### Массовое создание и обновление единиц измерения 
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) единиц измерения.
В теле запроса нужно передать массив, содержащий JSON представления единиц измерения, которые вы хотите создать или обновить.
Обновляемые единицы измерения должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких единиц измерения

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/uom"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "Попугаи",
              "description": "Для измерения удавов",
              "code": "papagei",
              "externalCode": "parrotUnitOfMeasure"
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/01be5f70-24d1-11e6-8a84-bae50000001a",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
                "type": "uom",
                "mediaType": "application/json"
              },
              "name": "Попугай",
              "description": "Для точного измерения удавов",
              "code": "papagai",
              "externalCode": "papagaitUnitOfMeasure"
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных единиц измерения.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/b25681fd-24d0-11e6-8a84-bae500000019",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
      "type": "uom",
      "mediaType": "application/json"
    },
    "id": "b25681fd-24d0-11e6-8a84-bae500000019",
    "accountId": "45489428-24a5-11e6-8a84-bae500000001",
    "updated": "2016-05-30 10:04:29",
    "name": "Попугаи",
    "description": "Для измерения удавов",
    "code": "papagei",
    "externalCode": "parrotUnitOfMeasure"
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/01be5f70-24d1-11e6-8a84-bae50000001a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
      "type": "uom",
      "mediaType": "application/json"
    },
    "id": "01be5f70-24d1-11e6-8a84-bae50000001a",
    "accountId": "45489428-24a5-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/1fe747fc-7df4-11e8-7e04-3e5a0000002d",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=1fe747fc-7df4-11e8-7e04-3e5a0000002d"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/19062b38-7df4-11e8-7e04-3e5a00000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-05-30 10:06:42",
    "name": "Попугай",
    "description": "Для точного измерения удавов",
    "code": "papagai",
    "externalCode": "papagaitUnitOfMeasure"
  }
]
```

### Удалить Единицу измерения 
Запрос на удаление единицы измерения. Невозможно удаление предустановленных единиц измерения (единиц измерений имеющихся на учетной записи по умолчанию).
Удалить можно только единицы измерения, созданные через основной интерфейс или через метод POST.


**Параметры**

| Параметр | Описание                                                                                  |
| :------- | :---------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Единицы измерения. |

> Удалить Единицу измерения

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/uom/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Розничной продажи.

### Массовое удаление Единиц измерения

В теле запроса нужно передать массив, содержащий JSON метаданных Единиц измерения, которые вы хотите удалить.


> Запрос на массовое удаление Единиц измерения. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/uom/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
            "type": "uom",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
            "type": "uom",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Единиц измерения.

```json
[
  {
    "info":"Сущность 'uom' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'uom' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
```  

### Единица измерения
  
### Получить Единицу измерения

**Параметры**

| Параметр | Описание                                                                                  |
| :------- | :---------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Единицы измерения. |
 
> Запрос на получение единицы измерения с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/uom/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Единицы измерения с указанным id.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/061721df-9197-49a5-b637-7f5b4d3be969",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
    "type": "uom",
    "mediaType": "application/json"
  },
  "id": "061721df-9197-49a5-b637-7f5b4d3be969",
  "updated": "2012-11-02 11:07:44",
  "name": "дюйм",
  "description": "Дюйм (25,4 мм)",
  "code": "039",
  "externalCode": "039"
}
```

### Изменить Единицу измерения 
Запрос на изменение объекта, представляющего собой единицу измерения. Невозможно изменение предустановленных единиц измерения
 (единиц измерения имеющихся на учетной записи по умолчанию).
Изменить можно только единицы измерения, созданные через основной интерфейс или через метод POST.

**Параметры**

| Параметр | Описание                                                                                  |
| :------- | :---------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Единицы измерения. |

> Пример запроса на обновление новой единицы измерения.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/uom/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Попугай",
            "description": "Для точного измерения удавов",
            "code": "papagai",
            "externalCode": "papagaitUnitOfMeasure"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Единицы измерения.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/01be5f70-24d1-11e6-8a84-bae50000001a",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
    "type": "uom",
    "mediaType": "application/json"
  },
  "id": "01be5f70-24d1-11e6-8a84-bae50000001a",
  "accountId": "45489428-24a5-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/1fe747fc-7df4-11e8-7e04-3e5a0000002d",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=1fe747fc-7df4-11e8-7e04-3e5a0000002d"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/19062b38-7df4-11e8-7e04-3e5a00000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-05-30 10:06:42",
  "name": "Попугай",
  "description": "Для точного измерения удавов",
  "code": "papagai",
  "externalCode": "papagaitUnitOfMeasure"
}
```
