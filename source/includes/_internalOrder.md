## Документ Внутренний заказ
Средствами JSON API можно создавать и обновлять сведения о внутренних заказах, запрашивать списки внутренних заказов и сведения по отдельным внутренним заказам. Позициями внутренних заказов можно управлять как в составе отдельного заказа, так и с помощью специальных ресурсов для управления позициями. Кодом сущности для внутреннего заказа в составе JSON API является ключевое слово **internalorder**.

### Внутренние заказы 
#### Атрибуты сущности
+ **meta** - [Метаданные](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные) о внутреннем заказе
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **syncId** - ID синхронизации. После заполнения недоступен для изменения.
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **deleted** - Момент последнего удаления сущности `Только для чтения`
+ **name** - номер внутреннего заказа `Необходимое`
+ **description** - Комментарий к внутреннему заказу
+ **externalCode** - Внешний код внутреннего заказа
+ **moment** - Дата внутреннего заказа
+ **applicable** - Отметка о проведении
+ **sum** - Сумма внутреннего заказа в копейках `Только для чтения`
+ **rate** - Валюта
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)
+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные) `Необходимое`
+ **store** - Ссылка на склад в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)
+ **project** - Ссылка на проект в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)
+ **state** - Статус внутреннего заказа в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)
+ **attributes** - Коллекция доп. полей в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)
<br>Поля при expand'е:</br>
  - **name** - номер документа
  - **moment** - дата печати
  - **href** - ссылка на файл печатной формы
  - **fileName** - название файла печатной формы
  - **updated** - дата последнего изменения
+ **created** - Дата создания `Только для чтения`
+ **positions** - Ссылка на позиции внутреннего заказа в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)
+ **vatSum** - Сумма НДС `Только для чтения`
+ **vatEnabled** - Учитывается ли НДС
+ **vatIncluded** - Включен ли НДС в цену
+ **deliveryPlannedMoment** - Планируемая дата приемки
+ **purchaseOrders** - Коллекция ссылок на связанные заказы поставщику в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)
+ **moves** - Коллекция ссылок на связанные перемещения в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)

#### Позиции внутреннего заказа
Позиции внутреннего заказа - это список товаров/услуг/модификаций/серий.
Объект позиции внутреннего заказа содержит следующие поля:

+ **id** - ID товара в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **quantity** - Фактическое количество товаров/услуг/модификаций/серий.
+ **price** - Цена товара/услуги в копейках
+ **vat** - НДС
+ **assortment** - Ссылка на товар/услугу/серию/модификацию, которую представляет собой позиция. в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)
+ **pack** - Упаковка товара

С позициями можно работать с помощью [специальных ресурсов для управления позициями Внутреннего заказа](/java-remap-1.2-doc/api/remap/1.2/ru/#документ-внутренний-заказ-позиции-внутреннего-заказа),
а также в составе отдельного внутреннего заказа. При работе в составе отдельного внутреннего заказа,
вы можете отправлять запросы на создание отдельного внутреннего заказа с включенным в тело запроса
массивом позиций внутреннего заказа. Если количество позиций превышает максимально допустимое, то для
дальнейшего пополнения позиций нужно будет работать со специальным ресурсом "Позиции внутреннего заказа".
Также, при работе в составе отдельного внутреннего заказа, можно отправлять запросы на обновление списка позиций
с включенным в тело запроса массивом позиций внутреннего заказа. При этом важно помнить, что коллекция позиций будет
восприниматься как "все позиции внутреннего заказа" и полностью заменит уже существующую коллекцию при обновлении объекта - лишние
позиции будут удалены, новые добавлены, существующие - изменены.

О работе с доп. полями внутренних заказов можно прочитать [здесь](/java-remap-1.2-doc/api/remap/1.2/ru/#работа-с-дополнительными-полями)


### Получить внутренние заказы 

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|
|search |  `string` (optional) *Example: 0001* URL Параметр для поиска по имени документа. Фильтр документов по указанной поисковой строке. Фильтрация происходит по полю name.|

> Получить внутренние заказы

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/internalorder"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка внутренних заказов.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata",
    "type": "internalorder",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/31d58bde-b2fd-11e6-8a84-bae500000068",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata",
        "type": "internalorder",
        "mediaType": "application/json"
      },
      "id": "31d58bde-b2fd-11e6-8a84-bae500000068",
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
      "updated": "2016-11-25 13:52:01",
      "name": "00002",
      "description": "Комментарий",
      "externalCode": "00KNqzWbjDRhZ1A0411hS2",
      "moment": "2016-11-25 13:50:00",
      "applicable": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        },
        "value": 1
      },
      "sum": 0,
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "project": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
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
      "state": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/states/f804ff3d-b2fc-11e6-8a84-bae500000065",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/31d58bde-b2fd-11e6-8a84-bae500000068/positions",
          "type": "internalorderposition",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "vatEnabled": true,
      "vatIncluded": true,
      "vatSum": 0,
      "deliveryPlannedMoment": "2016-11-30 13:50:00"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/64e426af-b0d8-11e6-8a84-bae500000064",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata",
        "type": "internalorder",
        "mediaType": "application/json"
      },
      "id": "64e426af-b0d8-11e6-8a84-bae500000064",
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
      "updated": "2016-11-22 21:04:24",
      "name": "00001",
      "externalCode": "80QQopc4h8yBc0LnmTPpT3",
      "moment": "2016-11-22 20:23:00",
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
      "sum": 0,
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "project": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
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
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/64e426af-b0d8-11e6-8a84-bae500000064/positions",
          "type": "internalorderposition",
          "mediaType": "application/json",
          "size": 5,
          "limit": 1000,
          "offset": 0
        }
      },
      "vatEnabled": true,
      "vatIncluded": true,
      "vatSum": 0,
      "moves": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/a3b68a79-b0dc-11e6-8a84-bae5000000cd",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata",
            "type": "move",
            "mediaType": "application/json"
          }
        }
      ]
    }
  ]
}
```

### Создать внутренний заказ 
Запрос на создание нового внутреннего заказа.

> Пример создания нового внутреннего заказа.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/internalorder"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
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
            "name": "000222",
            "description": "Мой Комментарий",
            "externalCode": "00KNqzWbjDRhZ1A0411ss1231hS2",
            "moment": "2016-11-25 13:52:00",
            "applicable": true,
            "rate": {
              "currency": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                  "type": "currency",
                  "mediaType": "application/json"
                }
              },
              "value": 1
            },
            "sum": 0,
            "store": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "project": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
                "type": "project",
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
            "state": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/states/f804ff3d-b2fc-11e6-8a84-bae500000065",
                "type": "state",
                "mediaType": "application/json"
              }
            },
            "positions": [
              {
                "quantity": 1,
                "price": 0,
                "discount": 0,
                "vat": 0,
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/fc635ded-acf7-11e6-8a84-bae500000075",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                    "type": "variant",
                    "mediaType": "application/json"
                  }
                }
              },
              {
                "quantity": 1,
                "price": 0,
                "discount": 0,
                "vat": 0,
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              }
            ],
            "vatEnabled": true,
            "vatIncluded": true,
            "vatSum": 0,
            "deliveryPlannedMoment": "2016-11-30 13:50:00"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного внутреннего заказа.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/eb75f6b8-b2ff-11e6-8a84-bae500000000",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata",
    "type": "internalorder",
    "mediaType": "application/json"
  },
  "id": "eb75f6b8-b2ff-11e6-8a84-bae500000000",
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
  "updated": "2016-11-25 14:11:31",
  "name": "000222",
  "description": "Мой Комментарий",
  "externalCode": "00KNqzWbjDRhZ1A0411ss1231hS2",
  "moment": "2016-11-25 13:52:00",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    },
    "value": 63.45
  },
  "sum": 0,
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "project": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
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
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/states/f804ff3d-b2fc-11e6-8a84-bae500000065",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/eb75f6b8-b2ff-11e6-8a84-bae500000000/positions",
      "type": "internalorderposition",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "vatEnabled": true,
  "vatIncluded": true,
  "vatSum": 0,
  "deliveryPlannedMoment": "2016-11-30 13:50:00"
}
```

### Шаблон внутреннего заказа 

### Шаблон внутреннего заказа 
Запрос на получение шаблона внутреннего заказа.

> Пример создания нового внутреннего заказа.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/new"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d ''  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного шаблона внутреннего заказа.

```json
{
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
  "moment": "2016-11-25 14:59:18",
  "applicable": true,
  "sum": 0,
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "project": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
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
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/states/f804ff3d-b2fc-11e6-8a84-bae500000065",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "positions": {
    "rows": []
  },
  "vatEnabled": true,
  "vatIncluded": true
}

```

### Массовое создание и обновление внутренних заказов 
[Массовое создание и обновление](/java-remap-1.2-doc/api/remap/1.2/ru/#создание-и-обновление-нескольких-объектов) внутренних заказов.
В теле запроса нужно передать массив, содержащий JSON представления внутренних заказов, которые вы хотите создать или обновить.
Обновляемые внутренние заказы должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких внутренних заказов

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/new"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '[
            {
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
              "name": "000222",
              "description": "Мой Комментарий",
              "externalCode": "00KNqzWbjDRhZ1A0411ss1231hS2",
              "moment": "2016-11-25 13:52:00",
              "applicable": true,
              "rate": {
                "currency": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json"
                  }
                },
                "value": 1
              },
              "sum": 0,
              "store": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type": "store",
                  "mediaType": "application/json"
                }
              },
              "project": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
                  "type": "project",
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
              "state": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/states/f804ff3d-b2fc-11e6-8a84-bae500000065",
                  "type": "state",
                  "mediaType": "application/json"
                }
              },
              "positions": [
                {
                  "quantity": 1,
                  "price": 0,
                  "discount": 0,
                  "vat": 0,
                  "assortment": {
                    "meta": {
                      "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/fc635ded-acf7-11e6-8a84-bae500000075",
                      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                      "type": "variant",
                      "mediaType": "application/json"
                    }
                  }
                },
                {
                  "quantity": 1,
                  "price": 0,
                  "discount": 0,
                  "vat": 0,
                  "assortment": {
                    "meta": {
                      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
                      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  }
                }
              ],
              "vatEnabled": true,
              "vatIncluded": true,
              "vatSum": 0,
              "deliveryPlannedMoment": "2016-11-30 13:50:00"
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/64e426af-b0d8-11e6-8a84-bae500000064",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata",
                "type": "internalorder",
                "mediaType": "application/json"
              },
              "owner": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                  "type": "employee",
                  "mediaType": "application/json"
                }
              },
              "shared": true,
              "group": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
                  "type": "group",
                  "mediaType": "application/json"
                }
              },
              "name": "700222",
              "description": "Мой обновленный Комментарий",
              "externalCode": "00KNqzWbjDRhZ1A0411ss1231hS2",
              "moment": "2016-11-25 13:52:00",
              "applicable": true,
              "rate": {
                "currency": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json"
                  }
                },
                "value": 1
              },
              "store": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type": "store",
                  "mediaType": "application/json"
                }
              },
              "project": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
                  "type": "project",
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
              "state": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/states/f804ff3d-b2fc-11e6-8a84-bae500000065",
                  "type": "state",
                  "mediaType": "application/json"
                }
              },
              "positions": [
                {
                  "quantity": 1,
                  "price": 2230,
                  "discount": 0,
                  "vat": 0,
                  "assortment": {
                    "meta": {
                      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
                      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  }
                }
              ],
              "vatEnabled": true,
              "vatIncluded": true,
              "vatSum": 0,
              "deliveryPlannedMoment": "2016-12-30 13:52:00"
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных внутренних заказов.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/eb75f6b8-b2ff-11e6-8a84-bae500000000",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata",
      "type": "internalorder",
      "mediaType": "application/json"
    },
    "id": "eb75f6b8-b2ff-11e6-8a84-bae500000000",
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
    "updated": "2016-11-25 14:11:31",
    "name": "000222",
    "description": "Мой Комментарий",
    "externalCode": "00KNqzWbjDRhZ1A0411ss1231hS2",
    "moment": "2016-11-25 13:52:00",
    "applicable": true,
    "rate": {
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      },
      "value": 63.45
    },
    "sum": 0,
    "store": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "project": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
        "type": "project",
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
    "state": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/states/f804ff3d-b2fc-11e6-8a84-bae500000065",
        "type": "state",
        "mediaType": "application/json"
      }
    },
    "created": "2007-02-07 17:16:41",
    "positions": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/eb75f6b8-b2ff-11e6-8a84-bae500000000/positions",
        "type": "internalorderposition",
        "mediaType": "application/json",
        "size": 2,
        "limit": 1000,
        "offset": 0
      }
    },
    "vatEnabled": true,
    "vatIncluded": true,
    "vatSum": 0,
    "deliveryPlannedMoment": "2016-11-30 13:50:00"
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/64e426af-b0d8-11e6-8a84-bae500000064",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata",
      "type": "internalorder",
      "mediaType": "application/json"
    },
    "id": "64e426af-b0d8-11e6-8a84-bae500000064",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-11-25 14:48:02",
    "name": "700222",
    "description": "Мой обновленный Комментарий",
    "externalCode": "00KNqzWbjDRhZ1A0411ss1231hS2",
    "moment": "2016-11-25 13:52:00",
    "applicable": true,
    "rate": {
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      },
      "value": 63.45
    },
    "sum": 2230,
    "store": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "project": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
        "type": "project",
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
    "state": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/states/f804ff3d-b2fc-11e6-8a84-bae500000065",
        "type": "state",
        "mediaType": "application/json"
      }
    },
    "created": "2007-02-07 17:16:41",
    "positions": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/64e426af-b0d8-11e6-8a84-bae500000064/positions",
        "type": "internalorderposition",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
      }
    },
    "vatEnabled": true,
    "vatIncluded": true,
    "vatSum": 0,
    "deliveryPlannedMoment": "2016-12-30 13:52:00",
    "moves": [
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/a3b68a79-b0dc-11e6-8a84-bae5000000cd",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata",
          "type": "move",
          "mediaType": "application/json"
        }
      }
    ]
  }
]
```

### Удалить внутренний заказ

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id внутреннего заказа.|
 
> Запрос на удаление внутреннего заказа с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b1"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление внутреннего заказа.

### Метаданные внутренних заказов 
#### Метаданные внутренних заказов 
Запрос на получение метаданных внутренних заказов. Результат - объект JSON, включающий в себя:

+ **meta** - Ссылка на метаданные внутренних заказов
+ **attributes** - Массив объектов доп. полей внутренних заказов в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)
+ **states** - Массив статусов внутренних заказов
+ **createShared** - создавать новые внутренние заказы с меткой "Общий"

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](/java-remap-1.2-doc/api/remap/1.2/ru/#работа-с-дополнительными-полями).

> Метаданные внутренних заказов

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление метаданных внутренних заказов.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/attributes/68d142e7-b300-11e6-8a84-bae50000008b",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "68d142e7-b300-11e6-8a84-bae50000008b",
      "name": "Доп поле внут заказа",
      "type": "string",
      "required": false
    }
  ],
  "states": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/states/f804ff3d-b2fc-11e6-8a84-bae500000065",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "f804ff3d-b2fc-11e6-8a84-bae500000065",
      "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
      "name": "OMG",
      "color": 10066329,
      "stateType": "Regular",
      "entityType": "internalorder"
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
  "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/attributes/68d142e7-b300-11e6-8a84-bae50000008b",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "68d142e7-b300-11e6-8a84-bae50000008b",
  "name": "Доп поле внут заказа",
  "type": "string",
  "required": false
}
```

### Внутренний заказ 

### Получить внутренний заказ

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id внутреннего заказа.|
 
> Запрос на получение отдельного внутреннего заказа с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление внутреннего заказа.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/31d58bde-b2fd-11e6-8a84-bae500000068",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata",
    "type": "internalorder",
    "mediaType": "application/json"
  },
  "id": "31d58bde-b2fd-11e6-8a84-bae500000068",
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
  "updated": "2016-11-25 13:52:01",
  "name": "00002",
  "description": "Комментарий",
  "externalCode": "00KNqzWbjDRhZ1A0411hS2",
  "moment": "2016-11-25 13:50:00",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    },
    "value": 1
  },
  "sum": 0,
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "project": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
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
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/states/f804ff3d-b2fc-11e6-8a84-bae500000065",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/31d58bde-b2fd-11e6-8a84-bae500000068/positions",
      "type": "internalorderposition",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "vatEnabled": true,
  "vatIncluded": true,
  "vatSum": 0,
  "deliveryPlannedMoment": "2016-11-30 13:50:00",
  "moves": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/3aa6f577-b2ff-11e6-8a84-bae500000070",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata",
        "type": "move",
        "mediaType": "application/json"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/3fe38e12-b2ff-11e6-8a84-bae500000077",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata",
        "type": "move",
        "mediaType": "application/json"
      }
    }
  ],
  "purchaseOrders": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/purchaseorder/4a29b74e-b2ff-11e6-8a84-bae500000084",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/purchaseorder/metadata",
        "type": "purchaseorder",
        "mediaType": "application/json"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/purchaseorder/45353c47-b2ff-11e6-8a84-bae50000007e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/purchaseorder/metadata",
        "type": "purchaseorder",
        "mediaType": "application/json"
      }
    }
  ]
}
```

### Изменить внутренний заказ 
Запрос на обновление внутреннего заказа с указанным id.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id внутреннего заказа.|

> Пример запроса на обновление отдельного внутреннего заказа.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "owner": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "type": "employee",
                "mediaType": "application/json"
              }
            },
            "shared": true,
            "group": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
                "type": "group",
                "mediaType": "application/json"
              }
            },
            "name": "700222",
            "description": "Мой обновленный Комментарий",
            "externalCode": "00KNqzWbjDRhZ1A0411ss1231hS2",
            "moment": "2016-11-25 13:52:00",
            "applicable": true,
            "rate": {
              "currency": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                  "type": "currency",
                  "mediaType": "application/json"
                }
              },
              "value": 1
            },
            "store": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "project": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
                "type": "project",
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
            "state": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/states/f804ff3d-b2fc-11e6-8a84-bae500000065",
                "type": "state",
                "mediaType": "application/json"
              }
            },
            "positions": [
              {
                "quantity": 1,
                "price": 2230,
                "discount": 0,
                "vat": 0,
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              }
            ],
            "vatEnabled": true,
            "vatIncluded": true,
            "vatSum": 0,
            "deliveryPlannedMoment": "2016-12-30 13:52:00"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного внутреннего заказа.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/64e426af-b0d8-11e6-8a84-bae500000064",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata",
    "type": "internalorder",
    "mediaType": "application/json"
  },
  "id": "64e426af-b0d8-11e6-8a84-bae500000064",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-25 14:48:02",
  "name": "700222",
  "description": "Мой обновленный Комментарий",
  "externalCode": "00KNqzWbjDRhZ1A0411ss1231hS2",
  "moment": "2016-11-25 13:52:00",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    },
    "value": 63.45
  },
  "sum": 2230,
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "project": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
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
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/states/f804ff3d-b2fc-11e6-8a84-bae500000065",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/64e426af-b0d8-11e6-8a84-bae500000064/positions",
      "type": "internalorderposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "vatEnabled": true,
  "vatIncluded": true,
  "vatSum": 0,
  "deliveryPlannedMoment": "2016-12-30 13:52:00",
  "moves": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/a3b68a79-b0dc-11e6-8a84-bae5000000cd",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata",
        "type": "move",
        "mediaType": "application/json"
      }
    }
  ]
}
```

### Позиции внутреннего заказа 
Отдельный ресурс для управления позициями внутреннего заказа. С его помощью вы можете управлять позициями большого документа, количество строк в котором превышает 100. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](/java-remap-1.2-doc/api/remap/1.2/ru/#работа-с-позициями-документов).

### Получить позиции внутреннего заказа 
Запрос на получение списка всех позиций данного внутреннего заказа.

- **meta** [Метаданные](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные) о выдаче,
- **context** - [Метаданные](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой позиции внутреннего заказа.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id внутреннего заказа.|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|
|search |  `string` (optional) *Example: 0001* URL Параметр для поиска по имени документа. Фильтр документов по указанной поисковой строке. Фильтрация происходит по полю name.|

> Получить позиции внутреннего заказа

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19/positions"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций отдельного внутреннего заказа.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19/positions",
    "type": "internalorderposition",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19/positions/05379d42-b305-11e6-8a84-bae500000008",
        "type": "internalorderposition",
        "mediaType": "application/json"
      },
      "id": "05379d42-b305-11e6-8a84-bae500000008",
      "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
      "quantity": 1,
      "price": 2230,
      "vat": 0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3bb1af6c-2842-11e9-ac12-000c00000061"
        }
      }
    }
  ]
}
```

### Создать позиции внутреннего заказа 
Запрос на создание новой позиции во внутреннем заказе.
Для успешного создания необходимо в теле запроса указать следующие поля:

+ **assortment** - Ссылка на товар/услугу/серию/модификацию, которую представляет собой позиция.
Также можно указать поле с именем **service**, **consignment**, **variant** в соответствии с тем,
чем является указанная позиция. Подробнее об этом поле можно прочитать в описании [позиции внутреннего заказа](/java-remap-1.2-doc/api/remap/1.2/ru/#позиции-внутреннего-заказа)
+ **quantity** - Количество указанной позиции. Должно быть положительным, иначе возникнет ошибка.
Одновременно можно создать как одну так и несколько позиций внутреннего заказа. Все созданные данным запросом позиции
будут добавлены к уже существующим.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id внутреннего заказа.|

> Пример создания позиций во внутреннем заказе.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19/positions"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '[
            {
              "quantity": 1,
              "price": 100,
              "vat": 10,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              }
            },
            {
              "quantity": 12,
              "price": 200,
              "vat": 18,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              }
            },
            {
              "quantity": 3,
              "price": 2230,
              "vat": 0,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              }
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной позиции отдельного внутреннего заказа.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19/positions/705ff11b-b305-11e6-8a84-bae50000000c",
      "type": "internalorderposition",
      "mediaType": "application/json"
    },
    "id": "705ff11b-b305-11e6-8a84-bae50000000c",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "quantity": 1,
    "price": 100,
    "vat": 10,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3bb1af6c-2842-11e9-ac12-000c00000061"
      }
    }
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19/positions/705ffca0-b305-11e6-8a84-bae50000000d",
      "type": "internalorderposition",
      "mediaType": "application/json"
    },
    "id": "705ffca0-b305-11e6-8a84-bae50000000d",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "quantity": 12,
    "price": 200,
    "vat": 18,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
      }
    }
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19/positions/706006cd-b305-11e6-8a84-bae50000000e",
      "type": "internalorderposition",
      "mediaType": "application/json"
    },
    "id": "706006cd-b305-11e6-8a84-bae50000000e",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "quantity": 3,
    "price": 2230,
    "vat": 0,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
      }
    }
  }
]

```

### Удалить позицию внутреннего заказа 

**Параметры**

|Параметр   |Описание   | 
|---|---|
|positionID |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id позиции внутреннего заказа.|

> Запрос на удаление позиции внутреннего заказа с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/positions/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление позиции внутреннего заказа.

### Позиция внутреннего заказа 

### Получить позицию 

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id внутреннего заказа.|
|positionID |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b20* id позиции внутреннего заказа.|

> Запрос на получение отдельной позиции внутреннего заказа с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции внутреннего заказа.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20",
    "type": "internalorderposition",
    "mediaType": "application/json"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b20",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "quantity": 12,
  "price": 200,
  "vat": 18,
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
    }
  }
}
```

### Изменить позицию 
Запрос на обновление отдельной позиции внутреннего заказа.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id внутреннего заказа.|
|positionID |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b20* id позиции внутреннего заказа.|

> Пример запроса на обновление отдельной позиции во внутреннем заказе.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "quantity": 2,
            "price": 500,
            "vat": 18,
            "assortment": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                "type": "product",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции заказа.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20",
    "type": "internalorderposition",
    "mediaType": "application/json"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b20",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "quantity": 2,
  "price": 500,
  "vat": 18,
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
    }
  }
}
```
