## Транспортная упаковка

### Транспортные упаковки

Средствами JSON API можно создавать и обновлять сведения о Транспортных упаковках, запрашивать списки Транспортных упаковок и сведения по отдельным Транспортным упаковкам. Кодом сущности для Транспортной упаковки в составе JSON API является ключевое слово **aggregatepack**.

#### Атрибуты сущности

| Название     | Тип           | Фильтрация                 | Описание                                                                                                                                                                   |
|--------------|---------------|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| accountId    | UUID          | `=` `!=`                   | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                       |
| barcodes     | Array(Object) | `=` `!=` `~` `~=` `=~`     | Штрихкоды Транспортных упаковок. Для фильтрации по полю необходимо указывать его в единственном числе **barcode**<br>`+Обязательное при ответе` `+Необходимо при создании` |
| childrenList | Array(Meta)   |                            | Метаданные вложенных Транспортных упаковок<br>Поле доступно только при использовании заголовка `X-Lognex-Remap-Beta-Feature: aggregatePackChildrenList`.<br>`+Expand`      |
| group        | Meta          | `=` `!=`                   | Метаданные отдела сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                                       |
| id           | UUID          | `=` `!=`                   | ID Транспортной упаковки<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                |
| level        | Int           | `=` `!=` `<` `>` `<=` `>=` | Максимальный уровень вложенности, на котором находится упаковка<br>`+Обязательное при ответе` `+Только для чтения`                                                         |
| meta         | Meta          |                            | Метаданные Транспортной упаковки<br>`+Обязательное при ответе`                                                                                                             |
| moment       | DateTime      | `=` `!=` `<` `>` `<=` `>=` | Дата Транспортной упаковки<br>`+Обязательное при ответе`                                                                                                                   |
| owner        | Meta          | `=` `!=`                   | Метаданные владельца (Сотрудника)<br>`+Expand`                                                                                                                             |
| positions    | MetaArray     |                            | Метаданные позиций Транспортной упаковки<br>`+Обязательное при ответе` `+Expand`                                                                                           |
| shared       | Boolean       | `=` `!=`                   | Общий доступ                                                                                                                                                               |
| updated      | DateTime      | `=` `!=` `<` `>` `<=` `>=` | Момент последнего обновления сущности<br>`+Обязательное при ответе` `+Только для чтения`                                                                                   |

#### Вложенные Транспортные упаковки

Для получения и передачи поля **childrenList** необходимо передать заголовок `X-Lognex-Remap-Beta-Feature: aggregatePackChildrenList`.

Если заголовок не передан:

+ поле **childrenList** не возвращается в ответе.
+ поле **childrenList**, переданное в теле запроса, не обрабатывается.

> Пример создания Транспортной упаковки с вложенной Транспортной упаковкой.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "X-Lognex-Remap-Beta-Feature: aggregatePackChildrenList" \
    -H "Content-Type: application/json" \
      -d '{
            "barcodes": [
                {
                    "ean8": "00000000"
                }
            ],
            "childrenList": [
                {
                    "meta": {
                        "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/247d9890-bcd6-11f1-0a83-006800000000",
                        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/metadata",
                        "type": "aggregatepack",
                        "mediaType": "application/json"
                    }
                }
            ]
        }'  
```

> Response 200
Успешный запрос. Результат - JSON представление созданной Транспортной упаковки.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/c7ddac29-bcd6-11f1-0a83-00680000000c",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/metadata",
    "type": "aggregatepack",
    "mediaType": "application/json"
  },
  "id": "c7ddac29-bcd6-11f1-0a83-00680000000c",
  "accountId": "04d9a089-bcd6-11f1-0a80-24d80000000c",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/050ee558-bcd6-11f1-0a83-049d000001bf",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=050ee558-bcd6-11f1-0a83-049d000001bf"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/04da0849-bcd6-11f1-0a80-24d80000000d",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2026-09-30 16:56:48.686",
  "moment": "2026-09-30 16:56:00.000",
  "level": 1,
  "barcodes": [
    {
      "ean8": "00000000"
    }
  ],
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/c7ddac29-bcd6-11f1-0a83-00680000000c/positions",
      "type": "aggregatepackposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "childrenList": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/247d9890-bcd6-11f1-0a83-006800000000",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/metadata",
        "type": "aggregatepack",
        "mediaType": "application/json"
      }
    }
  ]
}
```


### Позиции Транспортной упаковки

Позиции Транспортной упаковки - это список товаров/партий/модификаций/комплектов. Объект позиции Транспортной упаковки содержит следующие поля:

| Название   | Тип           | Описание                                                                                                                   |
|------------|---------------|----------------------------------------------------------------------------------------------------------------------------|
| accountId  | UUID          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                       |
| assortment | Meta          | Метаданные товара/партии/модификации/комплекта, которую представляет собой позиция<br>`+Обязательное при ответе` `+Expand` |
| id         | UUID          | ID позиции<br>`+Обязательное при ответе` `+Только для чтения`                                                              |
| meta       | Meta          | Метаданные позиции<br>`+Обязательное при ответе`                                                                           |
| quantity   | Float         | Количество товара/партии/модификации/комплекта в Транспортной упаковке<br>`+Обязательное при ответе`                       |
| things     | Array(String) | Серийные номера                                                                                                            |

### Получить список Транспортных упаковок

Запрос всех Транспортных упаковок на данной учетной записи. Результат: Объект JSON, включающий в себя поля: 

| Название | Тип           | Описание                                                          |
|----------|---------------|-------------------------------------------------------------------|
| meta     | Meta          | Метаданные о выдаче.                                              |
| context  | Meta          | Метаданные о сотруднике, выполнившем запрос.                      |
| rows     | Array(Object) | Массив JSON объектов, представляющих собой Транспортные упаковки. |

#### Параметры

| Параметр   | Описание                                                                                                                               |
|------------|:---------------------------------------------------------------------------------------------------------------------------------------|
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить список Транспортных упаковок

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка пользовательских Транспортных упаковок.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack",
    "type": "aggregatepack",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/a2da962a-bc05-11f1-0a82-14dc0000659f",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/metadata",
        "type": "aggregatepack",
        "mediaType": "application/json"
      },
      "id": "a2da962a-bc05-11f1-0a82-14dc0000659f",
      "accountId": "41af84c3-b8d8-11f1-0a83-128600000017",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/41de4dd4-b8d8-11f1-0a81-12b50000034f",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=41de4dd4-b8d8-11f1-0a81-12b50000034f"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/41afe3e0-b8d8-11f1-0a83-128600000018",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2026-09-29 15:59:41.561",
      "moment": "2026-09-29 15:59:00.000",
      "level": 1,
      "barcodes": [
        {
          "ean8": "00000000"
        },
        {
          "ean13": "2000000000015"
        },
        {
          "code128": "code128 barcode"
        }
      ],
      "positions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/a2da962a-bc05-11f1-0a82-14dc0000659f/positions",
          "type": "aggregatepackposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      }
    }
  ]
}
```

### Создать Транспортную упаковку 

Запрос на создание новой Транспортной упаковки. Для успешного создания Транспортной упаковки обязательно должно быть передано поле **barcodes**.

> Пример создания новой Транспортной упаковки.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
              "barcodes": [
                  {
                      "ean8": "00000000"
                  },
                  {
                      "ean13": "2000000000015"
                  },
                  {
                      "code128": "code128 barcode"
                  }
              ]
          }'  
```

> Response 200
Успешный запрос. Результат - JSON представление созданной Транспортной упаковки.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/91850817-bc06-11f1-0a82-14dc000065ab",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/metadata",
    "type": "aggregatepack",
    "mediaType": "application/json"
  },
  "id": "91850817-bc06-11f1-0a82-14dc000065ab",
  "accountId": "41af84c3-b8d8-11f1-0a83-128600000017",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/41de4dd4-b8d8-11f1-0a81-12b50000034f",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=41de4dd4-b8d8-11f1-0a81-12b50000034f"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/41afe3e0-b8d8-11f1-0a83-128600000018",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2026-09-29 16:06:22.229",
  "moment": "2026-09-29 16:06:00.000",
  "level": 1,
  "barcodes": [
    {
      "ean8": "00000000"
    },
    {
      "ean13": "2000000000015"
    },
    {
      "code128": "code128 barcode"
    }
  ],
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/91850817-bc06-11f1-0a82-14dc000065ab/positions",
      "type": "aggregatepackposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Массовое создание и обновление Транспортных упаковок

[Массовое создание и обновление](#/general#3-sozdanie-i-obnovlenie-neskolkih-obuektov) Транспортных упаковок. В теле запроса нужно передать массив, содержащий JSON представления Транспортных упаковок, которые вы хотите создать или обновить. Обновляемые Транспортные упаковки должны содержать идентификатор в виде метаданных. 

> Пример создания и обновления нескольких Транспортных упаковок

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '[
            {
                "barcodes": [
                    {
                        "ean8": "20000011"
                    }
                ],
                "moment": "2026-09-29 16:00:00.000",
                "group": {
                    "meta": {
                        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/41afe3e0-b8d8-11f1-0a83-128600000018",
                        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
                        "type": "group",
                        "mediaType": "application/json"
                    }
                },
                "owner": {
                    "meta": {
                        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/41de4dd4-b8d8-11f1-0a81-12b50000034f",
                        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                        "type": "employee",
                        "mediaType": "application/json"
                    }
                }
            },
            {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/91850817-bc06-11f1-0a82-14dc000065ab",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/metadata",
                    "type": "aggregatepack",
                    "mediaType": "application/json"
                },
                "barcodes": [
                    {
                        "ean8": "00000000"
                    }
                ],
                "moment": "2026-09-29 16:06:00.000"
            }
        ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Транспортных упаковок.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/f5598694-bc07-11f1-0a82-14dc000065b2",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/metadata",
      "type": "aggregatepack",
      "mediaType": "application/json"
    },
    "id": "f5598694-bc07-11f1-0a82-14dc000065b2",
    "accountId": "41af84c3-b8d8-11f1-0a83-128600000017",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/41de4dd4-b8d8-11f1-0a81-12b50000034f",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=41de4dd4-b8d8-11f1-0a81-12b50000034f"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/41afe3e0-b8d8-11f1-0a83-128600000018",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2026-09-29 16:16:19.144",
    "moment": "2026-09-29 16:00:00.000",
    "level": 1,
    "barcodes": [
      {
        "ean8": "20000011"
      }
    ],
    "positions": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/f5598694-bc07-11f1-0a82-14dc000065b2/positions",
        "type": "aggregatepackposition",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    }
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/91850817-bc06-11f1-0a82-14dc000065ab",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/metadata",
      "type": "aggregatepack",
      "mediaType": "application/json"
    },
    "id": "91850817-bc06-11f1-0a82-14dc000065ab",
    "accountId": "41af84c3-b8d8-11f1-0a83-128600000017",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/41de4dd4-b8d8-11f1-0a81-12b50000034f",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=41de4dd4-b8d8-11f1-0a81-12b50000034f"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/41afe3e0-b8d8-11f1-0a83-128600000018",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2026-09-29 16:06:22.229",
    "moment": "2026-09-29 16:06:00.000",
    "level": 1,
    "barcodes": [
      {
        "ean8": "00000000"
      }
    ],
    "positions": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/91850817-bc06-11f1-0a82-14dc000065ab/positions",
        "type": "aggregatepackposition",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    }
  }
]
```

### Удалить Транспортную упаковку

**Параметры**

| Параметр | Описание                                                                                      |
|:---------|:----------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 9497f3a3-bc09-11f1-0a82-14dc000065bb* id Транспортной упаковки. |

> Удалить Транспортную упаковку

```shell
curl --compressed -X DELETE \
  "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/9497f3a3-bc09-11f1-0a82-14dc000065bb" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос.

### Массовое удаление Транспортных упаковок 

В теле запроса нужно передать массив, содержащий JSON метаданных Транспортных упаковок, которые вы хотите удалить.

> Запрос на массовое удаление Транспортных упаковок.

```shell
curl --compressed -X POST \
  "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/delete" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -d '[
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/91850817-bc06-11f1-0a82-14dc000065ab",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/metadata",
                "type": "aggregatepack",
                "mediaType": "application/json"
            }
        },
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/f5598694-bc07-11f1-0a82-14dc000065b2",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/metadata",
                "type": "aggregatepack",
                "mediaType": "application/json"
            }
        }
    ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Транспортных упаковок.

```json
[
  {
    "info": "Сущность 'aggregatepack' с UUID: 91850817-bc06-11f1-0a82-14dc000065ab успешно удалена"
  },
  {
    "info": "Сущность 'aggregatepack' с UUID: f5598694-bc07-11f1-0a82-14dc000065b2 успешно удалена"
  }
]
```

### Получить Транспортную упаковку 

**Параметры**

| Параметр | Описание                                                                                      |
|:---------|:----------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 9497f3a3-bc09-11f1-0a82-14dc000065bb* id Транспортной упаковки. |

> Запрос на получение Транспортной упаковки.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/9497f3a3-bc09-11f1-0a82-14dc000065bb" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Транспортной упаковки.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/9497f3a3-bc09-11f1-0a82-14dc000065bb",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/metadata",
    "type": "aggregatepack",
    "mediaType": "application/json"
  },
  "id": "9497f3a3-bc09-11f1-0a82-14dc000065bb",
  "accountId": "41af84c3-b8d8-11f1-0a83-128600000017",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/41de4dd4-b8d8-11f1-0a81-12b50000034f",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=41de4dd4-b8d8-11f1-0a81-12b50000034f"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/41afe3e0-b8d8-11f1-0a83-128600000018",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2026-09-29 16:27:55.852",
  "moment": "2026-09-29 16:00:00.000",
  "level": 1,
  "barcodes": [
    {
      "ean8": "00000000"
    }
  ],
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/9497f3a3-bc09-11f1-0a82-14dc000065bb/positions",
      "type": "aggregatepackposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Изменить Транспортную упаковку 

**Параметры**

| Параметр | Описание                                                                                      |
|:---------|:----------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 9497f3a3-bc09-11f1-0a82-14dc000065bb* id Транспортной упаковки. |

Запрос на обновление Транспортной упаковки. Обновить можно только те поля, что не помечены `Только для чтения`.

> Пример запроса на обновление Транспортной упаковки

 ```shell
   curl --compressed -X PUT \
     "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/9497f3a3-bc09-11f1-0a82-14dc000065bb" \
     -H "Authorization: Basic <Credentials>" \
     -H "Accept-Encoding: gzip" \
     -H "Content-Type: application/json" \
     -d '{
          "barcodes": [
              {
                  "ean8": "00000000"
              }
          ],
          "shared": true,
          "moment": "2026-09-29 16:00:00.000",
          "group": {
              "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/41afe3e0-b8d8-11f1-0a83-128600000018",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
                  "type": "group",
                  "mediaType": "application/json"
              }
          },
          "owner": {
              "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/41de4dd4-b8d8-11f1-0a81-12b50000034f",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                  "type": "employee",
                  "mediaType": "application/json"
              }
          }
      }  
 ```
> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Транспортной упаковки.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/9497f3a3-bc09-11f1-0a82-14dc000065bb",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/metadata",
    "type": "aggregatepack",
    "mediaType": "application/json"
  },
  "id": "9497f3a3-bc09-11f1-0a82-14dc000065bb",
  "accountId": "41af84c3-b8d8-11f1-0a83-128600000017",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/41de4dd4-b8d8-11f1-0a81-12b50000034f",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=41de4dd4-b8d8-11f1-0a81-12b50000034f"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/41afe3e0-b8d8-11f1-0a83-128600000018",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2026-09-29 16:27:55.852",
  "moment": "2026-09-29 16:00:00.000",
  "level": 1,
  "barcodes": [
    {
      "ean8": "00000000"
    }
  ],
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/9497f3a3-bc09-11f1-0a82-14dc000065bb/positions",
      "type": "aggregatepackposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Управление позициями Транспортной упаковки

Отдельный ресурс для управления позициями Транспортной упаковки.

### Получить позиции Транспортной упаковки

Запрос на получение списка всех позиций данной Транспортной упаковки.

| Название | Тип           | Описание                                                                  |
|----------|---------------|---------------------------------------------------------------------------|
| meta     | Meta          | Метаданные о выдаче.                                                      |
| context  | Meta          | Метаданные о сотруднике, выполнившем запрос.                              |
| rows     | Array(Object) | Массив JSON объектов, представляющих собой позиции Транспортной упаковки. |

**Параметры**

| Параметр   | Описание                                                                                                                               |
|------------|:---------------------------------------------------------------------------------------------------------------------------------------|
| **id**     | `string` (required) *Example: 9497f3a3-bc09-11f1-0a82-14dc000065bb* id Транспортной упаковки.                                          |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Запрос на получение списка всех позиций данной Транспортной упаковки.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/9497f3a3-bc09-11f1-0a82-14dc000065bb/positions" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций отдельной Транспортной упаковки.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/9497f3a3-bc09-11f1-0a82-14dc000065bb/positions",
    "type": "aggregatepackposition",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/9497f3a3-bc09-11f1-0a82-14dc000065bb/positions/d48cab60-bc0b-11f1-0a82-14dc000065c0",
        "type": "aggregatepackposition",
        "mediaType": "application/json"
      },
      "id": "d48cab60-bc0b-11f1-0a82-14dc000065c0",
      "accountId": "41af84c3-b8d8-11f1-0a83-128600000017",
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/001e6a8f-b8dc-11f1-0a82-14dc00003d64",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=001e6367-b8dc-11f1-0a82-14dc00003d62"
        }
      },
      "quantity": 1.0
    }
  ]
}
```
### Позиция Транспортной упаковки

### Получить позицию

**Параметры**

| Параметр       | Описание                                                                                              |
|:---------------|:------------------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 9497f3a3-bc09-11f1-0a82-14dc000065bb* id Транспортной упаковки.         |
| **positionID** | `string` (required) *Example: d48cab60-bc0b-11f1-0a82-14dc000065c0* id позиции Транспортной упаковки. |

> Запрос на получение отдельной позиции Транспортной упаковки с указанным id.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/9497f3a3-bc09-11f1-0a82-14dc000065bb/positions/d48cab60-bc0b-11f1-0a82-14dc000065c0" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции Транспортной упаковки.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/9497f3a3-bc09-11f1-0a82-14dc000065bb/positions/d48cab60-bc0b-11f1-0a82-14dc000065c0",
    "type": "aggregatepackposition",
    "mediaType": "application/json"
  },
  "id": "d48cab60-bc0b-11f1-0a82-14dc000065c0",
  "accountId": "41af84c3-b8d8-11f1-0a83-128600000017",
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/001e6a8f-b8dc-11f1-0a82-14dc00003d64",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=001e6367-b8dc-11f1-0a82-14dc00003d62"
    }
  },
  "quantity": 1.0
}
```

### Создать позицию

Запрос на создание новой позиции в Транспортной упаковке. Для успешного создания необходимо в теле запроса указать следующие поля: 

+ **assortment** - Ссылка на товар/партию/модификацию/комплект, которую представляет собой позиция.
  Подробнее об этом поле можно прочитать в описании [позиции Транспортной упаковки](#/documents/emissionorder#4-pozicii-zakaza-kodov-markirovki)
+ **quantity** - Количество указанной позиции. Должно быть положительным, иначе возникнет ошибка. Одновременно можно создать как одну, так и несколько позиций Транспортной упаковки. Все созданные данным запросом позиции будут добавлены к уже существующим.

**Параметры**

| Параметр | Описание                                                                                      |
|:---------|:----------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 9497f3a3-bc09-11f1-0a82-14dc000065bb* id Транспортной упаковки. |

> Пример создания одной позиции в Транспортной упаковке.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/9497f3a3-bc09-11f1-0a82-14dc000065bb/positions" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "assortment": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/001e6a8f-b8dc-11f1-0a82-14dc00003d64",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json"
                }
            },
            "quantity": 1.0
        }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной позиции отдельной Транспортной упаковки.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/9497f3a3-bc09-11f1-0a82-14dc000065bb/positions/e3a7eea7-bc0c-11f1-0a82-14dc000065c3",
      "type": "aggregatepackposition",
      "mediaType": "application/json"
    },
    "id": "e3a7eea7-bc0c-11f1-0a82-14dc000065c3",
    "accountId": "41af84c3-b8d8-11f1-0a83-128600000017",
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/001e6a8f-b8dc-11f1-0a82-14dc00003d64",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=001e6367-b8dc-11f1-0a82-14dc00003d62"
      }
    },
    "quantity": 1.0
  }
]
```

> Пример создания сразу нескольких позиций в Транспортной упаковке.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/9497f3a3-bc09-11f1-0a82-14dc000065bb/positions" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '[
            {
                "assortment": {
                    "meta": {
                        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/001e6a8f-b8dc-11f1-0a82-14dc00003d64",
                        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                        "type": "product",
                        "mediaType": "application/json"
                    }
                },
                "quantity": 1.0
            },
            {
                "assortment": {
                    "meta": {
                        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/62d0f26e-bc0d-11f1-0a81-12b500001dc6",
                        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                        "type": "variant",
                        "mediaType": "application/json"
                    }
                },
                "quantity": 2.0
            },
            {
                "assortment": {
                    "meta": {
                        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/62d3eaee-bc0d-11f1-0a81-12b500001dd0",
                        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                        "type": "variant",
                        "mediaType": "application/json"
                    }
                },
                "quantity": 3.0
            }
        ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка созданных позиций отдельной Транспортной упаковки.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/9497f3a3-bc09-11f1-0a82-14dc000065bb/positions/8f3947c7-bc0d-11f1-0a82-14dc000065c6",
      "type": "aggregatepackposition",
      "mediaType": "application/json"
    },
    "id": "8f3947c7-bc0d-11f1-0a82-14dc000065c6",
    "accountId": "41af84c3-b8d8-11f1-0a83-128600000017",
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/001e6a8f-b8dc-11f1-0a82-14dc00003d64",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=001e6367-b8dc-11f1-0a82-14dc00003d62"
      }
    },
    "quantity": 1.0
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/9497f3a3-bc09-11f1-0a82-14dc000065bb/positions/8f394e25-bc0d-11f1-0a82-14dc000065c7",
      "type": "aggregatepackposition",
      "mediaType": "application/json"
    },
    "id": "8f394e25-bc0d-11f1-0a82-14dc000065c7",
    "accountId": "41af84c3-b8d8-11f1-0a83-128600000017",
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/62d0f26e-bc0d-11f1-0a81-12b500001dc6",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=62d0ea00-bc0d-11f1-0a81-12b500001dc4"
      }
    },
    "quantity": 2.0
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/9497f3a3-bc09-11f1-0a82-14dc000065bb/positions/8f39521b-bc0d-11f1-0a82-14dc000065c8",
      "type": "aggregatepackposition",
      "mediaType": "application/json"
    },
    "id": "8f39521b-bc0d-11f1-0a82-14dc000065c8",
    "accountId": "41af84c3-b8d8-11f1-0a83-128600000017",
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/62d3eaee-bc0d-11f1-0a81-12b500001dd0",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=62d3e3da-bc0d-11f1-0a81-12b500001dce"
      }
    },
    "quantity": 3.0
  }
]
```

### Изменить позицию

Запрос на обновление отдельной позиции Транспортной упаковки. Для обновления позиции нет каких-либо обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

| Параметр       | Описание                                                                                              |
|:---------------|:------------------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 9497f3a3-bc09-11f1-0a82-14dc000065bb* id Транспортной упаковки.         |
| **positionID** | `string` (required) *Example: e3a7eea7-bc0c-11f1-0a82-14dc000065c3* id позиции Транспортной упаковки. |

> Пример запроса на обновление отдельной позиции в Транспортной упаковке.

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/9497f3a3-bc09-11f1-0a82-14dc000065bb/positions/e3a7eea7-bc0c-11f1-0a82-14dc000065c3" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "quantity": 2,
            "assortment": {
              "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/62d3eaee-bc0d-11f1-0a81-12b500001dd0",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                  "type": "variant",
                  "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции Транспортной упаковки.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/9497f3a3-bc09-11f1-0a82-14dc000065bb/positions/e3a7eea7-bc0c-11f1-0a82-14dc000065c3",
    "type": "aggregatepackposition",
    "mediaType": "application/json"
  },
  "id": "e3a7eea7-bc0c-11f1-0a82-14dc000065c3",
  "accountId": "41af84c3-b8d8-11f1-0a83-128600000017",
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/62d3eaee-bc0d-11f1-0a81-12b500001dd0",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
      "type": "variant",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=62d3e3da-bc0d-11f1-0a81-12b500001dce"
    }
  },
  "quantity": 2.0
}
```

### Удалить позицию

**Параметры**

| Параметр       | Описание                                                                                              |
|:---------------|:------------------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 9497f3a3-bc09-11f1-0a82-14dc000065bb* id Транспортной упаковки.         |
| **positionID** | `string` (required) *Example: e3a7eea7-bc0c-11f1-0a82-14dc000065c3* id позиции Транспортной упаковки. |

> Запрос на удаление позиции Транспортной упаковки с указанным id.

```shell
curl --compressed -X DELETE \
  "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/9497f3a3-bc09-11f1-0a82-14dc000065bb/positions/e3a7eea7-bc0c-11f1-0a82-14dc000065c3" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json) Успешное удаление позиции Транспортной упаковки.
```json
<Response body is empty>
```

### Массовое удаление позиций

**Параметры**

| Параметр | Описание                                                                                      |
|:---------|:----------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 9497f3a3-bc09-11f1-0a82-14dc000065bb* id Транспортной упаковки. |

> Запрос на массовое удаление позиций Транспортной упаковки.

```shell
curl --compressed -X POST \
  "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/9497f3a3-bc09-11f1-0a82-14dc000065bb/positions/delete" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -d '[
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/9497f3a3-bc09-11f1-0a82-14dc000065bb/positions/e3a7eea7-bc0c-11f1-0a82-14dc000065c3",
            "type": "aggregatepackposition",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/aggregatepack/9497f3a3-bc09-11f1-0a82-14dc000065bb/positions/8f394e25-bc0d-11f1-0a82-14dc000065c7",
            "type": "aggregatepackposition",
            "mediaType": "application/json"
          }
        }
      ]'  
```

> Response 200 (application/json) Успешное удаление позиций Транспортной упаковки.
```json
<Response body is empty>
```