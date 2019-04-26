## Внесение денег
Средствами JSON API можно создавать и обновлять сведения о внесениях денег, запрашивать списки внесений денег и сведения по отдельным внесениям денег. Кодом сущности для внесения денег в составе JSON API является ключевое слово **retaildrawercashin**. Больше о внесениях денег и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по  [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203325423-%D0%A0%D0%BE%D0%B7%D0%BD%D0%B8%D1%86%D0%B0#10).
### Внесения денег 
#### Атрибуты сущности
+ **meta** - [Метаданные](#metadannye) о внесении денег
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **syncId** - ID синхронизации. После заполнения недоступен для изменения.
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **deleted** - Момент последнего удаления сущности `Только для чтения`
+ **name** - номер внесения денег
+ **description** - Комментарий внесения денег
+ **externalCode** - Внешний код внесения денег
+ **moment** - Дата внесения
+ **applicable** - Отметка о проведении
+ **sum** - Сумма внесения в установленной валюте `Только для чтения`
+ **rate** - Валюта
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](#metadannye)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](#metadannye)
+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](#metadannye) `Необходимое`
+ **agent** - Ссылка на сотрудника, совершившего внесение, в формате [Метаданных](#metadannye) `Необходимое`
+ **state** - Статус внесения в формате [Метаданных](#metadannye)
+ **attributes** - Коллекция доп. полей в формате [Метаданных](#metadannye)
<br>Поля при expand'е:</br>
  - **name** - номер документа
  - **moment** - дата печати
  - **href** - ссылка на файл печатной формы
  - **fileName** - название файла печатной формы
  - **updated** - дата последнего изменения
+ **created** - Дата создания `Только для чтения`

#### Связи с другими документами
+ **retailShift** - Ссылка на розничную смену, в рамках которой было выполнено внесение денег в формате [Метаданных](#metadannye) `Необходимое`

### Получить внесения денег 
Запрос на получение всех внесений денег на данной учетной записи.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|
|search |  `string` (optional) *Example: 0001* URL Параметр для поиска по имени документа. Фильтр документов по указанной поисковой строке. Фильтрация происходит по полю name.|

> Получить внесения денег

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка внесений денег.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata",
    "type": "retaildrawercashin",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/179dd832-960c-11e6-8a84-bae5000000dc",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata",
        "type": "retaildrawercashin",
        "mediaType": "application/json"
      },
      "id": "179dd832-960c-11e6-8a84-bae5000000dc",
      "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-10-19 17:55:36",
      "name": "00001",
      "description": "Внесение",
      "externalCode": "2Rqfj4sNhkS98TU70DNRw1",
      "moment": "2016-10-19 17:55:00",
      "applicable": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "sum": 112312000,
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "retailShift": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/131aaeb6-9603-11e6-8a84-bae500000072",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
          "type": "retailshift",
          "mediaType": "application/json"
        }
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/2266b7e1-960c-11e6-8a84-bae5000000df",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata",
        "type": "retaildrawercashin",
        "mediaType": "application/json"
      },
      "id": "2266b7e1-960c-11e6-8a84-bae5000000df",
      "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-10-19 17:55:54",
      "name": "00002",
      "description": "Коммент",
      "externalCode": "Rk3nJ4y1hw3O3b9qJ6xN30",
      "moment": "2016-10-19 17:55:00",
      "applicable": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "sum": 2000,
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "retailShift": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/131aaeb6-9603-11e6-8a84-bae500000072",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
          "type": "retailshift",
          "mediaType": "application/json"
        }
      }
    }
  ]
}
```

### Создать внесение денег 
Запрос на создание внесения денег.

> Пример создания нового внесения денег.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "agent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "type": "employee",
                "mediaType": "application/json"
              }
            },
            "retailShift": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/131aaeb6-9603-11e6-8a84-bae500000072",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
                "type": "retailshift",
                "mediaType": "application/json"
              }
            },
            "organization": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "sum": 100500,
            "description": "Новое внесение через API"
          }'  
```

> Response 200
Успешный запрос. Результат - массив JSON представлений созданного и обновленного внесения денег.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/b1bd1d12-960c-11e6-8a84-bae500000009",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata",
    "type": "retaildrawercashin",
    "mediaType": "application/json"
  },
  "id": "b1bd1d12-960c-11e6-8a84-bae500000009",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-10-19 17:59:54",
  "name": "00003",
  "description": "Новое внесение через API",
  "externalCode": "fhlISdMTgl8C-lh9nLfIN0",
  "moment": "2016-10-19 17:59:54",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 100500,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "retailShift": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/131aaeb6-9603-11e6-8a84-bae500000072",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
      "type": "retailshift",
      "mediaType": "application/json"
    }
  }
}
```

### Массовое создание и обновление внесений денег 
[Массовое создание и обновление](#sozdanie-i-obnowlenie-neskol-kih-ob-ektow) внесений денег.
В теле запроса нужно передать массив, содержащий JSON представления внесений денег, которые вы хотите создать или обновить.
Обновляемые внесения денег должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких внесений денег

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '[
            {
              "agent": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                  "type": "employee",
                  "mediaType": "application/json"
                }
              },
              "retailShift": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/131aaeb6-9603-11e6-8a84-bae500000072",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
                  "type": "retailshift",
                  "mediaType": "application/json"
                }
              },
              "organization": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "sum": 100500,
              "description": "Новое внесение через API"
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/179dd832-960c-11e6-8a84-bae5000000dc",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata",
                "type": "retaildrawercashin",
                "mediaType": "application/json"
              },
              "name": "0000004",
              "sum": 700,
              "applicable": false
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных внесений денег.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/b1bd1d12-960c-11e6-8a84-bae500000009",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata",
      "type": "retaildrawercashin",
      "mediaType": "application/json"
    },
    "id": "b1bd1d12-960c-11e6-8a84-bae500000009",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-10-19 17:59:54",
    "name": "00003",
    "description": "Новое внесение через API",
    "externalCode": "fhlISdMTgl8C-lh9nLfIN0",
    "moment": "2016-10-19 17:59:54",
    "applicable": true,
    "rate": {
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    },
    "sum": 100500,
    "organization": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "retailShift": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/131aaeb6-9603-11e6-8a84-bae500000072",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
        "type": "retailshift",
        "mediaType": "application/json"
      }
    }
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/179dd832-960c-11e6-8a84-bae5000000dc",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata",
      "type": "retaildrawercashin",
      "mediaType": "application/json"
    },
    "id": "179dd832-960c-11e6-8a84-bae5000000dc",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-10-19 18:03:00",
    "name": "0000004",
    "description": "Внесение",
    "externalCode": "2Rqfj4sNhkS98TU70DNRw1",
    "moment": "2016-10-19 17:55:00",
    "applicable": false,
    "rate": {
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    },
    "sum": 700,
    "organization": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "retailShift": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/131aaeb6-9603-11e6-8a84-bae500000072",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
        "type": "retailshift",
        "mediaType": "application/json"
      }
    }
  }
]
```

### Удалить внесение денег
Запрос на удаление внесения денег с указанным id.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id внесения денег.|

> Удалить внесение денег

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
  Успешный запрос.

### Метаданные внесений денег 
#### Метаданные внесений денег 
Запрос на получение метаданных внесений денег. Результат - объект JSON, включающий в себя:

+ **meta** - Ссылка на метаданные внесений денег
+ **attributes** - Массив объектов доп. полей внесений денег в формате [Метаданных](#metadannye)
+ **states** - Массив статусов внесений денег
+ **createShared** - создавать новые внесения денег с меткой "Общий"

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](#rabota-s-dopolnitel-nymi-polqmi).

> Метаданные внесений денег

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей внесений денег.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata",
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
  "states": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56c504-2e58-11e6-8a84-bae500000069",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Новый",
      "color": 15106326,
      "stateType": "Regular",
      "entityType": "retaildrawercashin"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata/states/fb56cae3-2e58-11e6-8a84-bae50000006a",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56cae3-2e58-11e6-8a84-bae50000006a",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Подтвержден",
      "color": 40931,
      "stateType": "Regular",
      "entityType": "retaildrawercashin"
    }
  ],
  "createShared": false
}

```

### Отдельное доп. поле

#### Отдельное доп. поле

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 5290a290-0313-11e6-9464-e4de00000020* id Доп. поля.|

> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata/attributes/5290a290-0313-11e6-9464-e4de00000020"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata/attributes/5290a290-0313-11e6-9464-e4de00000020",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "5290a290-0313-11e6-9464-e4de00000020",
  "name": "attribute_name",
  "type": "boolean",
  "required": false
}
```

### Шаблон внесения денег 

#### Шаблон внесения денег 
> Запрос на получение предзаполненого стандартными значениями шаблона внесения денег без связи с каким-либо документом.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/new"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d ''  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного внесения денег.

```json
{
  "applicable": true,
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  }
}
```

### Шаблон внесения денег на основе 
Запрос на получение предзаполненного внесения денег на основе розничной смены.
В результате запроса, будет создан предзаполненный шаблон внесения денег на основе переданной
розничной смены.
<br>
Внимание! Не забывайте, что поле **retailShift** должно быть написано с большой S.

> Запрос на создание внесения денег на основе розничной смены.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/new"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "retailShift": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/131aaeb6-9603-11e6-8a84-bae500000072",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
                "type": "retailshift",
                "mediaType": "application/json"
              }
            }
          }
'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного внесения денег.

```json
{
  "applicable": true,
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "retailShift": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/131aaeb6-9603-11e6-8a84-bae500000072",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
      "type": "retailshift",
      "mediaType": "application/json"
    }
  }
}
```

### Внесение денег 

### Получить внесение денег
 
> Запрос на получение отдельного внесения денег с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление внесения денег с указанным id.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/179dd832-960c-11e6-8a84-bae5000000dc",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata",
    "type": "retaildrawercashin",
    "mediaType": "application/json"
  },
  "id": "179dd832-960c-11e6-8a84-bae5000000dc",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-10-19 17:55:36",
  "name": "00001",
  "description": "Внесение",
  "externalCode": "2Rqfj4sNhkS98TU70DNRw1",
  "moment": "2016-10-19 17:55:00",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 112312000,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "retailShift": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/131aaeb6-9603-11e6-8a84-bae500000072",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
      "type": "retailshift",
      "mediaType": "application/json"
    }
  }
}

```

### Изменить внесение денег 
Запрос на обновление внесения денег.

> Пример обновления внесения денег.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "0000004",
            "sum": 700,
            "applicable": false
          }'  
```

>  Response 200

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/179dd832-960c-11e6-8a84-bae5000000dc",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata",
    "type": "retaildrawercashin",
    "mediaType": "application/json"
  },
  "id": "179dd832-960c-11e6-8a84-bae5000000dc",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-10-19 18:03:00",
  "name": "0000004",
  "description": "Внесение",
  "externalCode": "2Rqfj4sNhkS98TU70DNRw1",
  "moment": "2016-10-19 17:55:00",
  "applicable": false,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 700,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "retailShift": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/131aaeb6-9603-11e6-8a84-bae500000072",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
      "type": "retailshift",
      "mediaType": "application/json"
    }
  }
}
```
