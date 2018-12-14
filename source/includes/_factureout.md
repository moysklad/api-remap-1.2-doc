## Документ Счет-фактура выданный
### Счета-фактуры выданные  
Средствами JSON API можно создавать и изменять Счет-фактуры выданные, запрашивать списки выданных Счетов-фактур, сведения по отдельным Счетам-фактурам и удалять Счета-фактуры. Счет-фактура может быть создана только на основании отгрузки, возврата поставщику или входящего платежа, без документа-основания счет-фактуру создать нельзя. Кодом сущности для выданного Счета-фактуры в составе JSON API является ключевое слово **factureout**.

#### Атрибуты сущности
+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выданном Счете-фактуре
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **syncId** - ID синхронизации. После заполнения недоступен для изменения.
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **deleted** - Момент последнего удаления сущности `Только для чтения`
+ **name** - номер выданного Счета-фактуры
+ **description** - Комментарий выданного Счета-фактуры
+ **externalCode** - Внешний код выданного Счета-фактуры
+ **moment** - Дата выданного Счета-фактуры
+ **applicable** - Отметка о проведении
+ **sum** - Сумма выданного Счета-фактуры в установленной валюте `Только для чтения`
+ **rate** - Валюта
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Только для чтения`
+ **agent** - Ссылка на контрагента в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Только для чтения`
+ **contract** - Ссылка на договор в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **state** - Статус выданного Счета-фактуры в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **attributes** - Коллекция доп. полей в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
<br>Поля при expand'е:</br>
  - **name** - номер документа
  - **moment** - дата печати
  - **href** - ссылка на файл печатной формы
  - **fileName** - название файла печатной формы
  - **updated** - дата последнего изменения
+ **created** - Дата создания `Только для чтения`
+ **stateContractId** - Идентификатор государственного контракта, договора (соглашения)

#### Связи с другими документами
+ **demands** - Массив ссылок на связанные отгрузки в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
  - **meta** - Ссылка на отгрузку, к которой привязан этот Счет-фактура в формате метаданных
+ **payments** - Массив ссылок на связанные входящие платежи в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
  - **meta** - Ссылка на входящий платеж, к которой привязан этот Счет-фактура в формате метаданных
+ **returns** - Массив ссылок на связанные возвраты поставщикам в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
  - **meta** - Ссылка на возврат поставщику, к которой привязан этот Счет-фактура в формате метаданных

####  Другие поля 
+ **consignee** - Грузополучатель
+ **paymentNumber** - Название платежного документа
+ **paymentDate** - Дата платежного документа

О работе с доп. полями Счет-фактур можно прочитать [здесь](/api/remap/1.2/doc/index.html#header-работа-с-дополнительными-полями)


### Получить выданные Счета-фактуры 
Запрос всех выданных Счетов-фактур на данной учётной записи.
Результат: Объект JSON, включающий в себя поля:
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой выданные Счета-фактуры.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|
|search |  `string` (optional) *Example: 0001* URL Параметр для поиска по имени документа. Фильтр документов по указанной поисковой строке. Фильтрация происходит по полю name.|

> Получить выданные Счета-фактуры

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/factureout"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка выданных Счетов-фактур.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata",
    "type": "factureout",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/02eb1458-aa6e-11e6-8a84-bc5200000076",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata",
        "type": "factureout",
        "mediaType": "application/json"
      },
      "id": "02eb1458-aa6e-11e6-8a84-bc5200000076",
      "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/c4b17cf2-99bb-11e6-8a84-bc520000002a",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/c3cff163-99bb-11e6-8a84-bc5200000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-14 16:38:48",
      "name": "00001",
      "description": "комментарий",
      "externalCode": "pb8w9ZcVhQbFff4R58SQ30",
      "moment": "2016-11-14 16:25:00",
      "applicable": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/217065c0-9b50-11e6-8a84-bc52000000bf",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        },
        "value": 60
      },
      "sum": 0,
      "contract": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/f1204d87-9c46-11e6-8a84-bc52000000b9",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
          "type": "contract",
          "mediaType": "application/json"
        }
      },
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "state": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata/states/e1115474-aa6e-11e6-8a84-bc520000007c",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "attributes": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata/attributes/8b0b6c1d-aa6f-11e6-8a84-bc520000008a",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "8b0b6c1d-aa6f-11e6-8a84-bc520000008a",
          "name": "доп поле",
          "type": "string",
          "value": "значение доп.поля"
        }
      ],
      "paymentNumber": "платежный д-т",
      "paymentDate": "2016-11-14 00:00:00",
      "stateContractId": "005674",
      "consignee": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "demands": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/f2570f6a-aa6d-11e6-8a84-bc520000006f",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
            "type": "demand",
            "mediaType": "application/json"
          }
        }
      ]
    }
  ]
}
```

### Создать Счет-фактуру 
Запрос на создание Счета-фактуры на основании отгрузки, входящего платежа или возврата поставщику.
Документ-основание должен быть указан в единственном экземпляре.</br>
Для установки **paymentNumber**, **paymentDate** значения должны быть переданы в теле Json, так как перечисленные поля не заполняются из документа-основания.

> Пример создания нового Счета-фактуры, содержащим только необходимые поля.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/factureout"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "demands": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/a95dbc95-24e0-11e7-1542-821d00000001",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
                  "type": "demand",
                  "mediaType": "application/json"
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Счета-фактуры.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/fa610268-2b5d-11e7-1542-821d00000010",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata",
    "type": "factureout",
    "mediaType": "application/json"
  },
  "id": "fa610268-2b5d-11e7-1542-821d00000010",
  "accountId": "f4917c99-2346-11e7-1542-821d00000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/f500c39b-2346-11e7-1542-821d0000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f49447eb-2346-11e7-1542-821d00000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2017-04-27 18:27:08",
  "name": "00001",
  "externalCode": "KAwh2VT7hIzHDWQoIcfvS0",
  "moment": "2017-04-27 18:27:00",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/f52dd97c-2346-11e7-1542-821d00000058",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 0,
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f52d95dd-2346-11e7-1542-821d00000056",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/f52a29b3-2346-11e7-1542-821d00000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "created": "2017-04-27 18:27:09",
  "demands": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/a95dbc95-24e0-11e7-1542-821d00000001",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
        "type": "demand",
        "mediaType": "application/json"
      }
    }
  ]
}

```

### Массовое создание и обновление выданных Счетов-фактур 
[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) выданных Счетов-фактур.
В теле запроса нужно передать массив, содержащий JSON представления выданных Счетов-фактур, которые вы хотите создать или обновить.
Обновляемые выданные Счета-фактуры должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких выданных Счетов-фактур

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/factureout"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '[
            {
              "demands": [
                {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/a95dbc95-24e0-11e7-1542-821d00000001",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
                    "type": "demand",
                    "mediaType": "application/json"
                  }
                }
              ]
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/99d41b01-aa8a-11e6-8af5-581e0000007e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata",
                "type": "factureout",
                "mediaType": "application/json"
              },
              "name": "FactureOut2"
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных выданных Счетов-фактур.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/fa610268-2b5d-11e7-1542-821d00000010",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata",
      "type": "factureout",
      "mediaType": "application/json"
    },
    "id": "fa610268-2b5d-11e7-1542-821d00000010",
    "accountId": "f4917c99-2346-11e7-1542-821d00000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/f500c39b-2346-11e7-1542-821d0000002a",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f49447eb-2346-11e7-1542-821d00000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2017-04-27 18:27:08",
    "name": "00001",
    "externalCode": "KAwh2VT7hIzHDWQoIcfvS0",
    "moment": "2017-04-27 18:27:00",
    "applicable": true,
    "rate": {
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/f52dd97c-2346-11e7-1542-821d00000058",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    },
    "sum": 0,
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f52d95dd-2346-11e7-1542-821d00000056",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "organization": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/f52a29b3-2346-11e7-1542-821d00000051",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "created": "2017-04-27 18:27:09",
    "demands": [
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/a95dbc95-24e0-11e7-1542-821d00000001",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
          "type": "demand",
          "mediaType": "application/json"
        }
      }
    ]
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/99d41b01-aa8a-11e6-8af5-581e0000007e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata",
      "type": "factureout",
      "mediaType": "application/json"
    },
    "id": "99d41b01-aa8a-11e6-8af5-581e0000007e",
    "accountId": "f4917c99-2346-11e7-1542-821d00000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/f500c39b-2346-11e7-1542-821d0000002a",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f49447eb-2346-11e7-1542-821d00000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2017-04-27 18:36:36",
    "name": "FactureOut2",
    "externalCode": "KAwh2VT7hIzHDWQoIcfvS0",
    "moment": "2017-04-27 18:27:00",
    "applicable": true,
    "rate": {
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/f52dd97c-2346-11e7-1542-821d00000058",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    },
    "sum": 0,
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f52d95dd-2346-11e7-1542-821d00000056",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "organization": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/f52a29b3-2346-11e7-1542-821d00000051",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "created": "2017-04-27 18:27:09",
    "stateContractId": "005674",
    "demands": [
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/a95dbc95-24e0-11e7-1542-821d00000001",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
          "type": "demand",
          "mediaType": "application/json"
        }
      }
    ]
  }
]
```

### Метаданные выданных Счетов-фактур 
#### Метаданные Счетов-фактур 
Запрос на получение метаданных выданных Счетов-фактур. Результат - объект JSON, включающий в себя:
+ **meta** - Ссылка на метаданные выданных Счетов-фактур
+ **attributes** - Массив объектов доп. полей выданных Счетов-фактур в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **states** - Массив статусов выданных Счетов-фактур
+ **createShared** - создавать новые выданные Счета-фактуры с меткой "Общий"

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](/api/remap/1.2/doc/index.html#header-работа-с-дополнительными-полями).

> Метаданные выданных Счетов-фактур

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей выданных Счетов-фактур.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata/attributes/8b0b6c1d-aa6f-11e6-8a84-bc520000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "8b0b6c1d-aa6f-11e6-8a84-bc520000008a",
      "name": "доп поле",
      "type": "string",
      "required": false
    }
  ],
  "states": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata/states/e1115474-aa6e-11e6-8a84-bc520000007c",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "e1115474-aa6e-11e6-8a84-bc520000007c",
      "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
      "name": "rewtret",
      "color": 10066329,
      "stateType": "Regular",
      "entityType": "factureout"
    }
  ],
  "createShared": false
}
```

### Отдельное доп. поле

**Параметры**

|Параметр   |Описание   | 
|---|---|
|   id|   `8b0b6c1d-aa6f-11e6-8a84-bc520000008a` (required, string) - id Доп. поля|
 
#### Отдельное доп. поле 
> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata/attributes/8b0b6c1d-aa6f-11e6-8a84-bc520000008a"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata/attributes/8b0b6c1d-aa6f-11e6-8a84-bc520000008a",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "8b0b6c1d-aa6f-11e6-8a84-bc520000008a",
  "name": "доп поле",
  "type": "string",
  "required": false
}
```
 
 ### Шаблон выданного Счета-фактуры 
#### Шаблон выданного Счета-фактуры на основе 
Запрос на получение предзаполненного шаблона выданного Счета-фактуры на основе отгрузки, возврата поставщику или входящего платежа.
В ответ на запрос вернётся предзаполненный шаблон выданного Счета-фактуры, который
затем можно будет использовать для создания нового Счета-фактуры с помощью POST запроса.

> Пример запроса на создание шаблона выданного Счета-фактуры на основе отгрузки.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/factureout/new"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "demands": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/fb3e5ec6-66cc-11e7-6adb-ede5000000be",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
                  "type": "demand",
                  "mediaType": "application/json"
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного выданного Счета-фактуры.

```json
{
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/498a0445-66cc-11e7-6adb-ede50000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=498a0445-66cc-11e7-6adb-ede50000002a"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/48f21833-66cc-11e7-6adb-ede500000001",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2017-07-20 14:54:48",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/49b4b0b0-66cc-11e7-6adb-ede500000058",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=49b4b0b0-66cc-11e7-6adb-ede500000058"
      }
    }
  },
  "sum": 10000,
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/49b43cd5-66cc-11e7-6adb-ede500000056",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=49b43cd5-66cc-11e7-6adb-ede500000056"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/49b00bbc-66cc-11e7-6adb-ede500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=49b00bbc-66cc-11e7-6adb-ede500000051"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata/states/82d0741a-6abc-11e7-6adb-ede50000000e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "demands": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/fb3e5ec6-66cc-11e7-6adb-ede5000000be",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
        "type": "demand",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#demand/edit?id=fb3e5ec6-66cc-11e7-6adb-ede5000000be"
      }
    }
  ]
}
```

> Пример запроса на создание шаблона выданного Счета-фактуры на основе возврата поставщику.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/factureout/new"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "returns": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/purchasereturn/62ebf0be-67d8-11e7-6adb-ede500000033",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/purchasereturn/metadata",
                  "type": "purchasereturn",
                  "mediaType": "application/json",
                  "uuidHref": "https://online.moysklad.ru/app/#purchasereturn/edit?id=62ebf0be-67d8-11e7-6adb-ede500000033"
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного выданного Счета-фактуры.

```json
{
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/498a0445-66cc-11e7-6adb-ede50000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=498a0445-66cc-11e7-6adb-ede50000002a"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/48f21833-66cc-11e7-6adb-ede500000001",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2017-07-20 15:26:40",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/49b4b0b0-66cc-11e7-6adb-ede500000058",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=49b4b0b0-66cc-11e7-6adb-ede500000058"
      }
    }
  },
  "sum": 0,
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/49b40d55-66cc-11e7-6adb-ede500000054",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=49b40d55-66cc-11e7-6adb-ede500000054"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/49b00bbc-66cc-11e7-6adb-ede500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=49b00bbc-66cc-11e7-6adb-ede500000051"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata/states/82d0741a-6abc-11e7-6adb-ede50000000e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "returns": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/purchasereturn/62ebf0be-67d8-11e7-6adb-ede500000033",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/purchasereturn/metadata",
        "type": "purchasereturn",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#purchasereturn/edit?id=62ebf0be-67d8-11e7-6adb-ede500000033"
      }
    }
  ]
}
```

> Пример запроса на создание шаблона выданного Счета-фактуры на основе входящего платежа.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/factureout/new"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "payments": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/f69cb6ec-6d45-11e7-6adb-ede50000001c",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata",
                  "type": "paymentin",
                  "mediaType": "application/json",
                  "uuidHref": "https://online.moysklad.ru/app/#paymentin/edit?id=f69cb6ec-6d45-11e7-6adb-ede50000001c"
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного выданного Счета-фактуры.

```json
{
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/498a0445-66cc-11e7-6adb-ede50000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=498a0445-66cc-11e7-6adb-ede50000002a"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/48f21833-66cc-11e7-6adb-ede500000001",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2017-07-20 15:25:09",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/49b4b0b0-66cc-11e7-6adb-ede500000058",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=49b4b0b0-66cc-11e7-6adb-ede500000058"
      }
    }
  },
  "sum": 0,
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/35950354-6ae5-11e7-6adb-ede500000036",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=35950354-6ae5-11e7-6adb-ede500000036"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/49b00bbc-66cc-11e7-6adb-ede500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=49b00bbc-66cc-11e7-6adb-ede500000051"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata/states/82d0741a-6abc-11e7-6adb-ede50000000e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "payments": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/f69cb6ec-6d45-11e7-6adb-ede50000001c",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata",
        "type": "paymentin",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#paymentin/edit?id=f69cb6ec-6d45-11e7-6adb-ede50000001c"
      }
    }
  ]
}
```

### Счет-фактура выданный

**Параметры**

|Параметр   |Описание   | 
|---|---|
|   id|   `99d41b01-aa8a-11e6-8af5-581e0000007e` (required, string) - id Счет-фактуры|
 
### Получить выданный Счет-фактуру 
> Запрос на получение отдельного выданного Счета-фактуры с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/factureout/99d41b01-aa8a-11e6-8af5-581e0000007e"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление выданного Счета-фактуры.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/99d41b01-aa8a-11e6-8af5-581e0000007e",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata",
    "type": "factureout",
    "mediaType": "application/json"
  },
  "id": "99d41b01-aa8a-11e6-8af5-581e0000007e",
  "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/9575ba6d-9609-11e6-8af5-581e000000ad",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/956169fa-9609-11e6-8af5-581e00000009",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-14 19:52:25",
  "name": "00001",
  "externalCode": "iXXMP3d-gJI8avpfWsDAU3",
  "moment": "2016-11-08 17:26:00",
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
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9596f69c-9609-11e6-8af5-581e000000d9",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/95920812-9609-11e6-8af5-581e000000d4",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata/states/9770ee98-aa8a-11e6-8af5-581e0000007b",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata/attributes/3aa46d91-aa8a-11e6-8af5-581e00000077",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "3aa46d91-aa8a-11e6-8af5-581e00000077",
      "name": "special_description",
      "type": "string",
      "value": "jih"
    }
  ],
  "stateContractId": "005674",
  "demands": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/750c8f8e-a5bf-11e6-8af5-581e000000bc",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
        "type": "demand",
        "mediaType": "application/json"
      }
    }
  ]
}
```

### Изменить выданный Счет-фактуру 
Запрос на обновление Счета-фактуры с указанным id.
> Пример запроса на обновление Счет-фактуры.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/factureout/99d41b01-aa8a-11e6-8af5-581e0000007e"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "FactureOut2"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённого Счета-фактуры.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/99d41b01-aa8a-11e6-8af5-581e0000007e",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata",
    "type": "factureout",
    "mediaType": "application/json"
  },
  "id": "99d41b01-aa8a-11e6-8af5-581e0000007e",
  "accountId": "f4917c99-2346-11e7-1542-821d00000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/f500c39b-2346-11e7-1542-821d0000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f49447eb-2346-11e7-1542-821d00000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2017-04-27 18:36:36",
  "name": "FactureOut2",
  "externalCode": "KAwh2VT7hIzHDWQoIcfvS0",
  "moment": "2017-04-27 18:27:00",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/f52dd97c-2346-11e7-1542-821d00000058",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 0,
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f52d95dd-2346-11e7-1542-821d00000056",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/f52a29b3-2346-11e7-1542-821d00000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "created": "2017-04-27 18:27:09",
  "stateContractId": "005674",
  "demands": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/a95dbc95-24e0-11e7-1542-821d00000001",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
        "type": "demand",
        "mediaType": "application/json"
      }
    }
  ]
}

```

### Удалить выданный Счет-фактуру

**Параметры**

|Параметр   |Описание   | 
|---|---|
|   id|   `7944ef04-f831-11e5-7a69-971500188b20` (required, string) - id выданного Счета-фактуры|
 
> Запрос на удаление выданного Счета-фактуры с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/factureout/7944ef04-f831-11e5-7a69-971500188b20"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление выданного Счета-фактуры.

