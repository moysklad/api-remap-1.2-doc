## Инвентаризация
Средствами JSON API можно создавать и обновлять сведения о Инвентаризации, запрашивать списки Инвентаризаций и сведения по отдельным Инвентаризациям. Позициями Инвентаризации можно управлять как в составе отдельной Инвентаризации, так и отдельно - с помощью специальных ресурсов для управления позициями Инвентаризации. Кодом сущности для Инвентаризации в составе JSON API является ключевое слово **inventory**. Больше о Инвентаризациях можно прочитать [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203309933-%D0%98%D0%BD%D0%B2%D0%B5%D0%BD%D1%82%D0%B0%D1%80%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2).
### Инвентаризация 
#### Атрибуты сущности
+ **meta** - [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) о Инвентаризации
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **syncId** - ID синхронизации. После заполнения недоступен для изменения.
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **deleted** - Момент последнего удаления сущности `Только для чтения`
+ **name** - номер Инвентаризации
+ **externalCode** - Внешний код Инвентаризации
+ **moment** - Дата Инвентаризации
+ **sum** - Сумма Инвентаризации в копейках `Только для чтения`
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) `Необходимое`
+ **store** - Ссылка на склад в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) `Необходимое`
+ **state** - Статус Инвентаризации в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **attributes** - Коллекция доп. полей в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
<br>Поля при expand'е:</br>
  - **name** - номер документа
  - **moment** - дата печати
  - **href** - ссылка на файл печатной формы
  - **fileName** - название файла печатной формы
  - **updated** - дата последнего изменения
+ **created** - Дата создания `Только для чтения`
+ **positions** - Ссылка на позиции Инвентаризации в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)

#### Позиции Инвентаризации
Позиции Инвентаризации - это список товаров/модификаций/серий.
Объект позиции Инвентаризации содержит следующие поля:

+ **id** - ID товара в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **quantity** - Фактическое количество товаров/модификаций/серий.
+ **price** - Цена товара в копейках
+ **assortment** - Ссылка на товар/серию/модификацию, которую представляет собой позиция, в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **pack** - Упаковка товара
+ **correctionAmount** - разница между расчетным остатком и фактическим `Только для чтения`
+ **calculatedQuantity** - расчетный остаток
+ **correctionSum** - избыток/недостача `Только для чтения`

С позициями можно работать с помощью [специальных ресурсов для управления позициями Инвентаризации](../documents/#dokumenty-inwentarizaciq-pozicii-inwentarizacii),
а также в составе отдельной Инвентаризации. При работе в составе отдельной Инвентаризации,
вы можете отправлять запросы на создание отдельной Инвентаризации с включенным в тело запроса
массивом позиций Инвентаризации. Если количество позиций превышает максимально допустимое, то для
дальнейшего пополнения позиций нужно будет работать со специальным ресурсом "Позиции Инвентаризации".
Также, при работе в составе отдельной Инвентаризации, можно отправлять запросы на обновление списка позиций
с включенным в тело запроса массивом позиций Инвентаризации. При этом важно помнить, что коллекция позиций будет
восприниматься как "все позиции Инвентаризации" и полностью заменит уже существующую коллекцию при обновлении объекта - лишние
позиции будут удалены, новые добавлены, существующие - изменены.

О работе с доп. полями Инвентаризации можно прочитать [здесь](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)


### Получить Инвентаризации 
Запрос всех Инвентаризаций на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

- **meta** [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) о выдаче,
- **context** - [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой Инвентаризации.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|
|search |  `string` (optional) *Example: 0001* URL Параметр для поиска по имени документа. Фильтр документов по указанной поисковой строке. Фильтрация происходит по полю name.|

> Получить Инвентаризации

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/inventory"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Инвентаризаций.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/context/employee",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata",
    "type": "inventory",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/7ee45d2d-ad65-11e6-8a84-bc52000000db",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata",
        "type": "inventory",
        "mediaType": "application/json"
      },
      "id": "7ee45d2d-ad65-11e6-8a84-bc52000000db",
      "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
      "owner": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/c4b17cf2-99bb-11e6-8a84-bc520000002a",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/c3cff163-99bb-11e6-8a84-bc5200000002",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-18 11:03:31",
      "name": "00001",
      "externalCode": "HCUtF6T2jnNOzNbh-ZNNo1",
      "moment": "2016-11-18 11:03:00",
      "sum": 480000,
      "store": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c4eddfc8-99bb-11e6-8a84-bc5200000053",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "positions": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/7ee45d2d-ad65-11e6-8a84-bc52000000db/positions",
          "type": "inventoryposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      }
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/8c3e615a-ad65-11e6-8a84-bc52000000df",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata",
        "type": "inventory",
        "mediaType": "application/json"
      },
      "id": "8c3e615a-ad65-11e6-8a84-bc52000000df",
      "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
      "owner": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/c4b17cf2-99bb-11e6-8a84-bc520000002a",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/c3cff163-99bb-11e6-8a84-bc5200000002",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-18 11:03:53",
      "name": "00002",
      "externalCode": "aNpAW66rhIjZ4VmhA4igz0",
      "moment": "2016-11-18 11:03:00",
      "sum": 1020000,
      "store": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c4eddfc8-99bb-11e6-8a84-bc5200000053",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "positions": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/8c3e615a-ad65-11e6-8a84-bc52000000df/positions",
          "type": "inventoryposition",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      }
    }
  ]
}
```

### Создать Инвентаризацию 
Запрос на создание новой Инвентаризации

> Пример создания новой Инвентаризации с телом запроса, содержащим только необходимые поля.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/inventory"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "store": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c4eddfc8-99bb-11e6-8a84-bc5200000053",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "organization": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Инвентаризации.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/8a2a5d07-ad6d-11e6-8a84-bc520000000a",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata",
    "type": "inventory",
    "mediaType": "application/json"
  },
  "id": "8a2a5d07-ad6d-11e6-8a84-bc520000000a",
  "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/c4b17cf2-99bb-11e6-8a84-bc520000002a",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/c3cff163-99bb-11e6-8a84-bc5200000002",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-18 12:01:06",
  "name": "00005",
  "externalCode": "n0vO68WUgOh9OcHApWSVc2",
  "moment": "2016-11-18 12:01:06",
  "sum": 0,
  "store": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c4eddfc8-99bb-11e6-8a84-bc5200000053",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/8a2a5d07-ad6d-11e6-8a84-bc520000000a/positions",
      "type": "inventoryposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Массовое создание и обновление Инвентаризаций 
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Инвентаризаций.
В теле запроса нужно передать массив, содержащий JSON представления Инвентаризаций, которые вы хотите создать или обновить.
Обновляемые Инвентаризации должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Инвентаризаций

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/inventory"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '[
            {
              "store": {
                "meta": {
                  "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c4eddfc8-99bb-11e6-8a84-bc5200000053",
                  "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type": "store",
                  "mediaType": "application/json"
                }
              },
              "organization": {
                "meta": {
                  "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
                  "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              }
            },
            {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/57a0bbfb-ad6d-11e6-8a84-bc52000000e7",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata",
                "type": "inventory",
                "mediaType": "application/json"
              },
              "name": "newname",
              "positions": {
                "rows": [
                  {
                    "quantity": 140,
                    "price": 5000,
                    "assortment": {
                      "meta": {
                        "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/b6be720e-ad63-11e6-8a84-bc520000008f",
                        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                        "type": "product",
                        "mediaType": "application/json"
                      }
                    },
                    "correctionAmount": -60,
                    "calculatedQuantity": 200,
                    "correctionSum": -300000
                  },
                  {
                    "quantity": 80,
                    "price": 4000,
                    "assortment": {
                      "meta": {
                        "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/58948866-ad65-11e6-8a84-bc52000000cf",
                        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                        "type": "product",
                        "mediaType": "application/json"
                      }
                    },
                    "correctionAmount": -20,
                    "calculatedQuantity": 100,
                    "correctionSum": -80000
                  }
                ]
              }
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Инвентаризаций.

```json
[
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/8a2a5d07-ad6d-11e6-8a84-bc520000000a",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata",
      "type": "inventory",
      "mediaType": "application/json"
    },
    "id": "8a2a5d07-ad6d-11e6-8a84-bc520000000a",
    "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
    "owner": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/c4b17cf2-99bb-11e6-8a84-bc520000002a",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/c3cff163-99bb-11e6-8a84-bc5200000002",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-11-18 12:01:06",
    "name": "00005",
    "externalCode": "n0vO68WUgOh9OcHApWSVc2",
    "moment": "2016-11-18 12:01:06",
    "sum": 0,
    "store": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c4eddfc8-99bb-11e6-8a84-bc5200000053",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "organization": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "created": "2007-02-07 17:16:41",
    "positions": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/8a2a5d07-ad6d-11e6-8a84-bc520000000a/positions",
        "type": "inventoryposition",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    }
  },
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/57a0bbfb-ad6d-11e6-8a84-bc52000000e7",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata",
      "type": "inventory",
      "mediaType": "application/json"
    },
    "id": "57a0bbfb-ad6d-11e6-8a84-bc52000000e7",
    "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
    "owner": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/c4b17cf2-99bb-11e6-8a84-bc520000002a",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/c3cff163-99bb-11e6-8a84-bc5200000002",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-11-18 12:12:27",
    "name": "newname",
    "externalCode": "6iP5E4LLhpzxRKezcuKE90",
    "moment": "2016-11-18 11:59:00",
    "sum": 1020000,
    "store": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c4eddfc8-99bb-11e6-8a84-bc5200000053",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "organization": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "created": "2007-02-07 17:16:41",
    "positions": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/57a0bbfb-ad6d-11e6-8a84-bc52000000e7/positions",
        "type": "inventoryposition",
        "mediaType": "application/json",
        "size": 2,
        "limit": 1000,
        "offset": 0
      }
    }
  }
]
```

### Удалить Инвентаризацию

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Инвентаризации.|
 
> Запрос на удаление Инвентаризации с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление Инвентаризации.

### Метаданные Инвентаризаций 
#### Метаданные Инвентаризаций 
Запрос на получение метаданных Инвентаризаций. Результат - объект JSON, включающий в себя:

+ **meta** - Ссылка на метаданные Инвентаризаций
+ **attributes** - Массив объектов доп. полей Инвентаризаций в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **states** - Массив статусов Инвентаризаций
+ **createShared** - создавать новые Инвентаризации с меткой "Общий"

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Инвентаризаций

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление метаданных Инвентаризаций.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata/attributes/1f7dbb1b-ad6e-11e6-8a84-bc52000000eb",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "1f7dbb1b-ad6e-11e6-8a84-bc52000000eb",
      "name": "доп.поле1",
      "type": "string",
      "required": false
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata/attributes/1f7dc230-ad6e-11e6-8a84-bc52000000ec",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "1f7dc230-ad6e-11e6-8a84-bc52000000ec",
      "name": "доп.поле2",
      "type": "long",
      "required": false
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
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Доп. поля.|
 
> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata/attributes/1f7dbb1b-ad6e-11e6-8a84-bc52000000eb",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "1f7dbb1b-ad6e-11e6-8a84-bc52000000eb",
  "name": "доп.поле1",
  "type": "string",
  "required": false
}
```

### Шаблон инвентаризации 
#### Шаблон инвентаризации 
> Запрос на получение предзаполненого стандартными значениями шаблона инвентаризации без связи с каким-либо документом.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/inventory/new"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d ''  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного списания.

```json
{
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/c4b17cf2-99bb-11e6-8a84-bc520000002a",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/c3cff163-99bb-11e6-8a84-bc5200000002",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2016-11-25 17:52:33",
  "sum": 0,
  "store": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c4eddfc8-99bb-11e6-8a84-bc5200000053",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "positions": {
    "rows": []
  }
}
```

### Инвентаризация

### Получить Инвентаризацию

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Инвентаризации.|
 
> Запрос на получение отдельной инвентаризации с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Инвентаризации.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/57a0bbfb-ad6d-11e6-8a84-bc52000000e7",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata",
    "type": "inventory",
    "mediaType": "application/json"
  },
  "id": "57a0bbfb-ad6d-11e6-8a84-bc52000000e7",
  "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/c4b17cf2-99bb-11e6-8a84-bc520000002a",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/c3cff163-99bb-11e6-8a84-bc5200000002",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-18 11:59:41",
  "name": "00004",
  "externalCode": "6iP5E4LLhpzxRKezcuKE90",
  "moment": "2016-11-18 11:59:00",
  "sum": 0,
  "store": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c4eddfc8-99bb-11e6-8a84-bc5200000053",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "positions": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/57a0bbfb-ad6d-11e6-8a84-bc52000000e7/positions",
      "type": "inventoryposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Изменить Инвентаризацию 
Запрос на обновление инвентаризации с указанным id.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Инвентаризации.|

> Пример запроса на обновление отдельной Инвентаризации.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "newname",
            "positions": {
              "rows": [
                {
                  "quantity": 140,
                  "price": 5000,
                  "assortment": {
                    "meta": {
                      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/b6be720e-ad63-11e6-8a84-bc520000008f",
                      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  },
                  "correctionAmount": -60,
                  "calculatedQuantity": 200,
                  "correctionSum": -300000
                },
                {
                  "quantity": 80,
                  "price": 4000,
                  "assortment": {
                    "meta": {
                      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/58948866-ad65-11e6-8a84-bc52000000cf",
                      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  },
                  "correctionAmount": -20,
                  "calculatedQuantity": 100,
                  "correctionSum": -80000
                }
              ]
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Инвентаризации.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/57a0bbfb-ad6d-11e6-8a84-bc52000000e7",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata",
    "type": "inventory",
    "mediaType": "application/json"
  },
  "id": "57a0bbfb-ad6d-11e6-8a84-bc52000000e7",
  "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/c4b17cf2-99bb-11e6-8a84-bc520000002a",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/c3cff163-99bb-11e6-8a84-bc5200000002",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-18 12:12:27",
  "name": "newname",
  "externalCode": "6iP5E4LLhpzxRKezcuKE90",
  "moment": "2016-11-18 11:59:00",
  "sum": 1020000,
  "store": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c4eddfc8-99bb-11e6-8a84-bc5200000053",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/57a0bbfb-ad6d-11e6-8a84-bc52000000e7/positions",
      "type": "inventoryposition",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

> Пример запроса на изменение Инвентаризации с дополнительными полями.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "store": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c4eddfc8-99bb-11e6-8a84-bc5200000053",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "organization": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "attributes": [
              {
                "meta": {
                  "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata/attributes/1f7dbb1b-ad6e-11e6-8a84-bc52000000eb",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "name": "доп.поле1",
                "type": "string",
                "value": "text"
              },
              {
                "meta": {
                  "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata/attributes/1f7dc230-ad6e-11e6-8a84-bc52000000ec",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "name": "доп.поле2",
                "type": "long",
                "value": 42
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Инвентаризации.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/57a0bbfb-ad6d-11e6-8a84-bc52000000e7",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata",
    "type": "inventory",
    "mediaType": "application/json"
  },
  "id": "57a0bbfb-ad6d-11e6-8a84-bc52000000e7",
  "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/c4b17cf2-99bb-11e6-8a84-bc520000002a",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/c3cff163-99bb-11e6-8a84-bc5200000002",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-18 12:12:27",
  "name": "newname",
  "externalCode": "6iP5E4LLhpzxRKezcuKE90",
  "moment": "2016-11-18 11:59:00",
  "sum": 1020000,
  "store": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c4eddfc8-99bb-11e6-8a84-bc5200000053",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata/attributes/1f7dbb1b-ad6e-11e6-8a84-bc52000000eb",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "1f7dbb1b-ad6e-11e6-8a84-bc52000000eb",
      "name": "доп.поле1",
      "type": "string",
      "value": "text"
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata/attributes/1f7dc230-ad6e-11e6-8a84-bc52000000ec",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "1f7dc230-ad6e-11e6-8a84-bc52000000ec",
      "name": "доп.поле2",
      "type": "long",
      "value": 42
    }
  ],
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/57a0bbfb-ad6d-11e6-8a84-bc52000000e7/positions",
      "type": "inventoryposition",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Позиции Инвентаризации 
Отдельный ресурс для управления позициями Инвентаризации. С его помощью вы можете управлять позициями большого документа, количество строк в котором превышает лимит на количество строк, сохраняемых вместе с документом. Этот лимит равен 100. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](../#mojsklad-json-api-obschie-swedeniq-rabota-s-poziciqmi-dokumentow).

### Получить позиции Инвентаризации 
Запрос на получение списка всех позиций данной Инвентаризации.

- **meta** [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) о выдаче,
- **context** - [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой позиции Инвентаризации.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Инвентаризации.|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить позиции Инвентаризации

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19/positions"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций отдельной Инвентаризации.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/context/employee",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19/positions",
    "type": "inventoryposition",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19/positions/201452a2-ad6f-11e6-8a84-bc5200000010",
        "type": "inventoryposition",
        "mediaType": "application/json"
      },
      "id": "201452a2-ad6f-11e6-8a84-bc5200000010",
      "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
      "quantity": 140,
      "price": 5000,
      "assortment": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/b6be720e-ad63-11e6-8a84-bc520000008f",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
        }
      },
      "correctionAmount": -60,
      "calculatedQuantity": 200,
      "correctionSum": -300000
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19/positions/20145d98-ad6f-11e6-8a84-bc5200000011",
        "type": "inventoryposition",
        "mediaType": "application/json"
      },
      "id": "20145d98-ad6f-11e6-8a84-bc5200000011",
      "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
      "quantity": 80,
      "price": 4000,
      "assortment": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/58948866-ad65-11e6-8a84-bc52000000cf",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
        }
      },
      "correctionAmount": -20,
      "calculatedQuantity": 100,
      "correctionSum": -80000
    }
  ]
}
```

### Создать позицию Инвентаризации 
Запрос на создание новой позиции в Инвентаризации.
Для успешного создания необходимо в теле запроса указать следующие поля:

+ **assortment** - Ссылка на товар/серию/модификацию, которую представляет собой позиция.
Также можно указать поле с именем  **consignment**, **variant** в соответствии с тем,
чем является указанная позиция. Подробнее об этом поле можно прочитать в описании [позиции Инвентаризации](../documents/#dokumenty-inwentarizaciq-inwentarizaciq-pozicii-inwentarizacii)
+ **quantity** - Количество указанной позиции. Должно быть положительным, иначе возникнет ошибка.
Одновременно можно создать как одну так и несколько позиций Инвентаризации. Все созданные данным запросом позиции
будут добавлены к уже существующим.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Инвентаризации.|

> Пример создания позиций в Инвентаризации.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19/positions"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "meta": {
              "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19/positions/201452a2-ad6f-11e6-8a84-bc5200000010",
              "type": "inventoryposition",
              "mediaType": "application/json"
            },
            "id": "201452a2-ad6f-11e6-8a84-bc5200000010",
            "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
            "quantity": 140,
            "price": 2000,
            "assortment": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/b6be720e-ad63-11e6-8a84-bc520000008f",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                "type": "product",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной позиции отдельной Инвентаризации.

```json
[
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19/positions/201452a2-ad6f-11e6-8a84-bc5200000010",
      "type": "inventoryposition",
      "mediaType": "application/json"
    },
    "id": "201452a2-ad6f-11e6-8a84-bc5200000010",
    "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
    "quantity": 140,
    "price": 2000,
    "assortment": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/b6be720e-ad63-11e6-8a84-bc520000008f",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
      }
    },
    "correctionAmount": -60,
    "calculatedQuantity": 200,
    "correctionSum": -120000
  }
]
```

### Позиция Инвентаризации

### Получить позицию

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Инвентаризации.|
|positionID|  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b20* id позиции.|
 
> Запрос на получение отдельной позиции Инвентаризации с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции Инвентаризации.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20",
    "type": "inventoryposition",
    "mediaType": "application/json"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b20",
  "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
  "quantity": 140,
  "price": 5000,
  "assortment": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/b6be720e-ad63-11e6-8a84-bc520000008f",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
    }
  },
  "correctionAmount": -60,
  "calculatedQuantity": 200,
  "correctionSum": -300000
}
```

### Изменить позицию 
Запрос на обновление отдельной позиции Инвентаризации. Для обновления позиции нет каких-либо
 обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Инвентаризации.|
|positionID|  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b20* id позиции.|

> Пример запроса на обновление отдельной позиции в Инвентаризации.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "meta": {
              "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20",
              "type": "inventoryposition",
              "mediaType": "application/json"
            },
            "id": "201452a2-ad6f-11e6-8a84-bc5200000010",
            "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
            "quantity": 45,
            "price": 1000,
            "assortment": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/b6be720e-ad63-11e6-8a84-bc520000008f",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                "type": "product",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции Инвентаризации.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20",
    "type": "inventoryposition",
    "mediaType": "application/json"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b20",
  "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
  "quantity": 45,
  "price": 1000,
  "assortment": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/b6be720e-ad63-11e6-8a84-bc520000008f",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
    }
  },
  "correctionAmount": -155,
  "calculatedQuantity": 200,
  "correctionSum": -155000
}
```

### Удалить позицию

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Инвентаризации.|
|positionID|  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b20* id позиции.|
 
> Запрос на удаление отдельной позиции Инвентаризации с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление позиции Инвентаризации.
