## Выплата денег
Средствами JSON API можно создавать и обновлять сведения о выплатах денег, запрашивать списки выплат денег и сведения по отдельным выплатам денег. Кодом сущности для внесения денег в составе JSON API является ключевое слово **retaildrawercashout**. Больше о выплатах денег и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по  [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203325423-%D0%A0%D0%BE%D0%B7%D0%BD%D0%B8%D1%86%D0%B0#11)
### Выплаты денег 
#### Атрибуты сущности
+ **meta** - [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) о выплате денег
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **syncId** - ID синхронизации. После заполнения недоступен для изменения.
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **deleted** - Момент последнего удаления сущности `Только для чтения`
+ **name** - номер выплаты денег
+ **description** - Комментарий выплаты денег
+ **externalCode** - Внешний код выплаты денег
+ **moment** - Дата выплаты
+ **applicable** - Отметка о проведении
+ **sum** - Сумма выплата в установленной валюте `Только для чтения`
+ **rate** - Валюта
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) `Необходимое`
+ **agent** - Ссылка на сотрудника, которому была совершена выплата, в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) `Необходимое`
+ **state** - Статус выплаты в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **attributes** - Коллекция доп. полей в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
<br>Поля при expand'е:</br>
  - **name** - номер документа
  - **moment** - дата печати
  - **href** - ссылка на файл печатной формы
  - **fileName** - название файла печатной формы
  - **updated** - дата последнего изменения
+ **created** - Дата создания `Только для чтения`

#### Связи с другими документами
+ **retailShift** - Ссылка на розничную смену, в рамках которой была выполнена выплата денег в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) `Необходимое`

### Получить выплаты денег 
Запрос на получение всех выплат денег на данной учетной записи.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|
|search |  `string` (optional) *Example: 0001* URL Параметр для поиска по имени документа. Фильтр документов по указанной поисковой строке. Фильтрация происходит по полю name.|

> Получить выплаты денег

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка выплат денег.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
    "type": "retaildrawercashout",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/1c5afb86-9603-11e6-8a84-bae500000079",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
        "type": "retaildrawercashout",
        "mediaType": "application/json"
      },
      "id": "1c5afb86-9603-11e6-8a84-bae500000079",
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
      "updated": "2016-10-19 16:51:18",
      "name": "00001",
      "description": "Выплата",
      "externalCode": "BYeqnCMUgjNIhODoqt5C52",
      "syncId": "ece1344a-5a68-4d32-ac70-a56b943717b5",
      "moment": "2016-10-19 16:51:00",
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
      "sum": 12441200,
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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/1e24533f-9603-11e6-8a84-bae50000007c",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
        "type": "retaildrawercashout",
        "mediaType": "application/json"
      },
      "id": "1e24533f-9603-11e6-8a84-bae50000007c",
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
      "updated": "2016-10-19 16:51:21",
      "name": "00002",
      "externalCode": "ohO0hmq7jioNXhM5xuTVe3",
      "moment": "2016-10-19 16:51:00",
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
      "sum": 111800200,
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

### Создать выплату денег 
Запрос на создание выплаты денег.

> Пример создания новой выплаты денег.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/"
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
            "description": "Новая выплата через API"
          }'  
```

> Response 200

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/c05a6fb8-960c-11e6-8a84-bae50000000c",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
    "type": "retaildrawercashout",
    "mediaType": "application/json"
  },
  "id": "c05a6fb8-960c-11e6-8a84-bae50000000c",
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
  "updated": "2016-10-19 18:00:19",
  "name": "00003",
  "description": "Новое внесение через API",
  "externalCode": "n19Ol5mFidHzBBojcTzvo3",
  "moment": "2016-10-19 18:00:19",
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

### Массовое создание и обновление выплат денег 
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) выплат денег.
В теле запроса нужно передать массив, содержащий JSON представления выплат денег, которые вы хотите создать или обновить.
Обновляемые выплаты денег должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких выплат денег

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/"
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
              "description": "Новая выплата через API"
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/c05a6fb8-960c-11e6-8a84-bae50000000c",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
                "type": "retaildrawercashout",
                "mediaType": "application/json"
              },
              "name": "0000004",
              "sum": 700,
              "applicable": false
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных выплат денег.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/c05a6fb8-960c-11e6-8a84-bae50000000c",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
      "type": "retaildrawercashout",
      "mediaType": "application/json"
    },
    "id": "c05a6fb8-960c-11e6-8a84-bae50000000c",
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
    "updated": "2016-10-19 18:00:19",
    "name": "00003",
    "description": "Новое внесение через API",
    "externalCode": "n19Ol5mFidHzBBojcTzvo3",
    "moment": "2016-10-19 18:00:19",
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/c05a6fb8-960c-11e6-8a84-bae50000000c",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
      "type": "retaildrawercashout",
      "mediaType": "application/json"
    },
    "id": "c05a6fb8-960c-11e6-8a84-bae50000000c",
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
    "updated": "2016-10-19 18:01:38",
    "name": "0000004",
    "description": "Новое внесение через API",
    "externalCode": "n19Ol5mFidHzBBojcTzvo3",
    "moment": "2016-10-19 18:00:19",
    "applicable": false,
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

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id выплаты денег.|

> Запрос на удаление выплаты денег с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. 

### Массовое удаление Выплат денег

В теле запроса нужно передать массив, содержащий JSON метаданных Выплат денег, которые вы хотите удалить.


> Запрос на массовое удаление Выплат денег. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/delete"
  -H "Authorization: Basic <Access-Token>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
            "type": "retaildrawercashout",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
            "type": "retaildrawercashout",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Выплат денег.

```json
[
  {
    "info":"Сущность 'retaildrawercashout' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'retaildrawercashout' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
``` 

### Метаданные выплат денег 
#### Метаданные выплат денег 
Запрос на получение метаданных выплат денег. Результат - объект JSON, включающий в себя:

+ **meta** - Ссылка на метаданные выплат денег
+ **attributes** - Массив объектов доп. полей выплат денег в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **states** - Массив статусов выплат денег
+ **createShared** - создавать новые выплаты денег с меткой "Общий"

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные выплат денег

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей выплат денег.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56c504-2e58-11e6-8a84-bae500000069",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Новый",
      "color": 15106326,
      "stateType": "Regular",
      "entityType": "retaildrawercashout"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata/states/fb56cae3-2e58-11e6-8a84-bae50000006a",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56cae3-2e58-11e6-8a84-bae50000006a",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Подтвержден",
      "color": 40931,
      "stateType": "Regular",
      "entityType": "retaildrawercashout"
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
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata/attributes/5290a290-0313-11e6-9464-e4de00000020"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata/attributes/5290a290-0313-11e6-9464-e4de00000020",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "5290a290-0313-11e6-9464-e4de00000020",
  "name": "attribute_name",
  "type": "boolean",
  "required": false
}
```

### Шаблон выплаты денег 
#### Шаблон выплаты денег 
> Запрос на получение предзаполненого стандартными значениями шаблона выплаты денег без связи с каким-либо документом.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/new"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d ''  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненной выплаты денег.

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

### Шаблон выплаты денег на основе 
Запрос на получение предзаполненной выплаты денег на основе розничной смены.
В результате запроса, будет создан предзаполненный шаблон выплаты денег на основе переданной
розничной смены.

> Запрос на создание выплаты денег на основе розничной смены.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/new"
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
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненной выплаты денег.

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

### Выплата денег 

### Получить выплату денег
 
> Запрос на получение отдельной выплаты денег с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление выплаты денег с указанным id.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/1c5afb86-9603-11e6-8a84-bae500000079",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
    "type": "retaildrawercashout",
    "mediaType": "application/json"
  },
  "id": "1c5afb86-9603-11e6-8a84-bae500000079",
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
  "updated": "2016-10-19 16:51:18",
  "name": "00001",
  "description": "Выплата",
  "externalCode": "BYeqnCMUgjNIhODoqt5C52",
  "syncId": "ece1344a-5a68-4d32-ac70-a56b943717b5",
  "moment": "2016-10-19 16:51:00",
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
  "sum": 12441200,
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

### Изменить выплачу денег 
Запрос на обновление выплаты денег.

> Пример обновления выплаты денег.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "0000004",
            "sum": 700,
            "applicable": false
          }'  
```

> Response 200

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/c05a6fb8-960c-11e6-8a84-bae50000000c",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
    "type": "retaildrawercashout",
    "mediaType": "application/json"
  },
  "id": "c05a6fb8-960c-11e6-8a84-bae50000000c",
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
  "updated": "2016-10-19 18:01:38",
  "name": "0000004",
  "description": "Новое внесение через API",
  "externalCode": "n19Ol5mFidHzBBojcTzvo3",
  "moment": "2016-10-19 18:00:19",
  "applicable": false,
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
