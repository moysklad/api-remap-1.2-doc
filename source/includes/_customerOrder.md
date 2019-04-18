## Заказ покупателя
### Заказы Покупателей 
Средствами JSON API можно создавать и обновлять сведения о Заказах покупателя, запрашивать списки Заказов и сведения по отдельным Заказам Покупателей. Позициями Заказов можно управлять как в составе отдельного Заказа покупателя, так и отдельно - с помощью специальных ресурсов для управления позициями Заказа. Кодом сущности для Заказа покупателя в составе JSON API является ключевое слово **customerOrder**. Больше о Заказах Покупателей и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203248133-%D0%97%D0%B0%D0%BA%D0%B0%D0%B7%D1%8B-%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%B0%D1%82%D0%B5%D0%BB%D0%B5%D0%B9).
#### Атрибуты сущности
+ **meta** - [Метаданные](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные) о Заказе покупателя
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **syncId** - ID синхронизации. После заполнения недоступен для изменения.
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **deleted** - Момент последнего удаления сущности `Только для чтения`
+ **name** - номер Заказа покупателя
+ **description** - Комментарий Заказа покупателя
+ **externalCode** - Внешний код Заказа покупателя
+ **moment** - Дата Заказа
+ **applicable** - Отметка о проведении
+ **vatIncluded** - Включен ли НДС в цену
+ **vatEnabled** - Учитывается ли НДС
+ **sum** - Сумма Заказа в установленной валюте `Только для чтения`
+ **rate** - Валюта
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)
+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные) `Необходимое`
+ **agent** - Ссылка на контрагента в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные) `Необходимое`
+ **store** - Ссылка на склад в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)
+ **contract** - Ссылка на договор в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)
+ **state** - Статус Заказа в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)
+ **organizationAccount** - Ссылка на счет вашего юрлица в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)
+ **agentAccount** - Ссылка на счет контрагента в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)
+ **attributes** - Коллекция доп. полей в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)
<br>Поля при expand'е:</br>
  - **name** - номер документа
  - **moment** - дата печати
  - **href** - ссылка на файл печатной формы
  - **fileName** - название файла печатной формы
+ **created** - Дата создания `Только для чтения`
+ **vatSum** - Сумма НДС `Только для чтения`
+ **positions** - Ссылка на позиции в Заказе в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)
+ **deliveryPlannedMoment** - Планируемая дата отгрузки
+ **payedSum** - Сумма входящих платежей по Заказу `Только для чтения`
+ **shippedSum** - Сумма отгруженного `Только для чтения`
+ **invoicedSum** - Сумма счетов покупателю `Только для чтения`
+ **project** - Ссылка на проект в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)

#### Связи с другими документами
+ **purchaseOrders** - Массив ссылок на связанные заказы поставщикам в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)
+ **demands** - Массив ссылок на связанные отгрузки в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)
+ **payments** - Массив ссылок на связанные платежи в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)
+ **invoicesOut** - Массив ссылок на связанные счета покупателям в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)

#### Позиции Заказа покупателя
Позиции Заказа - это список товаров/услуг/модификаций/серий.
Объект позиции Заказа содержит следующие поля:

+ **id** - ID товара в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **quantity** - Количество товаров/услуг данного вида в позиции. Если позиция - товар, у которого включен учет по серийным номерам, то значение в этом поле всегда будет равно количеству серийных номеров для данной позиции в документе.
+ **price** - Цена товара/услуги в копейках
+ **discount** - Процент скидки или наценки. Наценка указывается отрицательным числом, т.е. -10 создаст наценку в 10%
+ **vat** - НДС, которым облагается текущая позиция
+ **assortment** - Ссылка на товар/услугу/серию/модификацию, которую представляет собой позиция, в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)
+ **pack** - Упаковка товара
+ **shipped** - Доставлено
+ **reserve** - Резерв данной позиции

С позициями можно работать с помощью специальных ресурсов для управления позициями Заказа,
а также в составе отдельного Заказа покупателя. При работе в составе отдельного Заказа покупателя,
вы можете отправлять запросы на создание отдельного Заказа покупателя с включенным в тело запроса
массивом позиций Заказа. Если количество позиций превышает максимально допустимое, то для
дальнейшего пополнения позиций нужно будет работать со специальным ресурсом "Позиции Заказа покупателя".
Также, при работе в составе отдельного Заказа покупателя, можно отправлять запросы на обновление списка позиций
с включенным в тело запроса массивом позиций Заказа. При этом важно помнить, что коллекция позиций будет
восприниматься как "все позиции Заказа" и полностью заменит уже существующую коллекцию при обновлении объекта - лишние
позиции будут удалены, новые добавлены, существующие - изменены.

О работе с доп. полями Заказов покупателей можно прочитать [здесь](/java-remap-1.2-doc/api/remap/1.2/ru/#работа-с-дополнительными-полями)


### Получить список Заказов Покупателей 
Запрос всех Заказов Покупателей на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

- **meta** [Метаданные](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные) о выдаче,
- **context** - [Метаданные](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой Заказы Покупателей.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|
|search |  `string` (optional) *Example: 0001* URL Параметр для поиска по имени документа. Фильтр документов по указанной поисковой строке. Фильтрация происходит по полю name.|

> Получить список Заказов Покупателей

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/customerorder"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Заказов Покупателей.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/context/employee",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerOrder",
    "type": "customerorder",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/34efe2ee-015e-11e6-9464-e4de0000006b",
        "type": "customerorder",
        "mediaType": "application/json"
      },
      "id": "34efe2ee-015e-11e6-9464-e4de0000006b",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
      "updated": "2016-04-14 12:03:05",
      "name": "00001",
      "description": "Это комментарий к заказу покупателя!",
      "externalCode": "CntjFix4hoyZOIhZiULjv2",
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
      "moment": "2016-04-13 12:57:00",
      "applicable": true,
      "vatEnabled": true,
      "vatIncluded": true,
      "sum": 346453701206,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/bc1b4fde-019a-11e6-9464-e4de00000073",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        },
        "value": 214
      },
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "contract": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/8ce3c179-015e-11e6-9464-e4de0000007a",
          "type": "contract",
          "mediaType": "application/json"
        }
      },
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "state": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "organizationAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/850c8af2-f504-11e5-8a84-bae50000015f",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "agentAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078/accounts/9794f7a0-f689-11e5-8a84-bae500000079",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "attributes": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "c2ecd338-015e-11e6-9464-e4de0000008f",
          "name": "Атрибут заказа",
          "type": "string",
          "value": "1251252"
        }
      ],
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/34efe2ee-015e-11e6-9464-e4de0000006b/positions",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
          "type": "customerorderposition",
          "mediaType": "application/json",
          "size": 4,
          "limit": 1000,
          "offset": 0
        }
      },
      "reservedSum": 346389501206,
      "deliveryPlannedMoment": "2016-04-15 12:58:00",
      "payedSum": 365939611804,
      "shippedSum": 408739611676,
      "invoicedSum": 408739611676
    }
  ]
}
```

### Создать Заказ покупателя 
Запрос на создание нового Заказа покупателя.
Обязательные для создания поля:

+ **name** - номер Заказа покупателя
+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)
+ **agent** - Ссылка на контрагента (покупателя) в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)

> Пример создания нового Заказа с телом запроса, содержащим только необходимые поля.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/customerorder"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "00003",
            "organization": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "agent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
                "type": "counterparty",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Заказа покупателя.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/d9ceb08f-01ae-11e6-9464-e4de00000020",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
    "type": "customerorder",
    "mediaType": "application/json"
  },
  "id": "d9ceb08f-01ae-11e6-9464-e4de00000020",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-14 13:02:24",
  "name": "00003",
  "externalCode": "08ehdxhRgVIB5-Sa-QNI42",
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
  "moment": "2016-04-14 13:02:24",
  "applicable": true,
  "vatEnabled": true,
  "vatIncluded": true,
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
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078/accounts/9794f7a0-f689-11e5-8a84-bae500000079",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/d9ceb08f-01ae-11e6-9464-e4de00000020/positions",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
      "type": "customerorderposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "reservedSum": 0,
  "payedSum": 0,
  "shippedSum": 0,
  "invoicedSum": 0
}
```

> Пример создания нового Заказа с более насыщенным телом запроса.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/customerorder"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "000034",
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
            "organization": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "code": "1243521",
            "moment": "2016-04-19 13:50:24",
            "applicable": false,
            "vatEnabled": false,
            "agent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
                "type": "counterparty",
                "mediaType": "application/json"
              }
            },
            "state": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
                "type": "state",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Заказа покупателя.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
    "type": "customerorder",
    "mediaType": "application/json"
  },
  "id": "c49e83b3-01af-11e6-9464-e4de00000026",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-14 13:08:58",
  "name": "000034",
  "code": "1243521",
  "externalCode": "DAD9peGij6sDNii49Dkam2",
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
  "moment": "2016-04-19 13:50:24",
  "applicable": false,
  "vatEnabled": false,
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
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterperty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078/accounts/9794f7a0-f689-11e5-8a84-bae500000079",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
      "type": "customerorderposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "reservedSum": 0,
  "payedSum": 0,
  "shippedSum": 0,
  "invoicedSum": 0
}
```

> Пример запроса на создание Заказа покупателя с доп. полями.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/customerorder"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name" : "000034",
            "organization": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "code" : "1243521",
            "moment": "2016-04-19 13:50:24",
            "applicable": false,
            "vatEnabled": false,
            "agent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
                "type": "counterparty",
                "mediaType": "application/json"
              }
            },
            "state": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
                "type": "state",
                "mediaType": "application/json"
              }
            },
            "attributes": [
              {
                "id": "c2ecd338-015e-11e6-9464-e4de0000008f",
                "value": "Атрибут заказа",
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Заказа покупателя.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
    "type": "customerorder",
    "mediaType": "application/json"
  },
  "id": "c49e83b3-01af-11e6-9464-e4de00000026",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-14 13:08:58",
  "name": "000034",
  "code": "1243521",
  "externalCode": "DAD9peGij6sDNii49Dkam2",
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
  "moment": "2016-04-19 13:50:24",
  "applicable": false,
  "vatEnabled": false,
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
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078/accounts/9794f7a0-f689-11e5-8a84-bae500000079",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c2ecd338-015e-11e6-9464-e4de0000008f",
      "name": "Атрибут заказа",
      "type": "string",
      "value": "Атрибут заказа",
    }
  ],
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
      "type": "customerorderposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "reservedSum": 0,
  "payedSum": 0,
  "shippedSum": 0,
  "invoicedSum": 0
}
```

> Пример запроса на создание Заказа покупателя с позициями в теле запроса.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/customerorder"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "000034",
            "organization": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "code": "1243521",
            "moment": "2016-04-19 13:50:24",
            "applicable": false,
            "vatEnabled": false,
            "agent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
                "type": "counterparty",
                "mediaType": "application/json"
              }
            },
            "state": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
                "type": "state",
                "mediaType": "application/json"
              }
            },
            "positions": [
              {
                "quantity": 10,
                "price": 100,
                "discount": 0,
                "vat": 0,
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/8b382799-f7d2-11e5-8a84-bae5000003a5",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                },
                "reserve": 10
              },
              {
                "quantity": 20,
                "price": 200,
                "discount": 0,
                "vat": 21,
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/be903062-f504-11e5-8a84-bae50000019a",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                },
                "reserve": 20
              },
              {
                "quantity": 30,
                "price": 300,
                "discount": 0,
                "vat": 7,
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/c02e3a5c-007e-11e6-9464-e4de00000006",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                },
                "pack": {
                  "id": "1bf22e62-8b47-11e8-56c0-000800000006"
                },
                "reserve": 30
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Заказа покупателя.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
    "type": "customerorder",
    "mediaType": "application/json"
  },
  "id": "c49e83b3-01af-11e6-9464-e4de00000026",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "version": 0,
  "updated": "2016-04-14 13:08:58",
  "name": "000034",
  "code": "1243521",
  "externalCode": "DAD9peGij6sDNii49Dkam2",
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
  "moment": "2016-04-19 13:50:24",
  "applicable": false,
  "vatEnabled": false,
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
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterperty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078/accounts/9794f7a0-f689-11e5-8a84-bae500000079",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "documents": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/06406b97-9138-11e6-8a84-bae500000000/documents",
      "mediaType": "application/json",
      "size": 0,
      "limit": 100,
      "offset": 0
    }
  },
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
      "type": "customerorderposition",
      "mediaType": "application/json",
      "size": 3,
      "limit": 100,
      "offset": 0
    }
  },
  "reservedSum": 10000,
  "payedSum": 0,
  "shippedSum": 0,
  "invoicedSum": 0
}
```

### Массовое создание и обновление Заказов покупателей 
[Массовое создание и обновление](/java-remap-1.2-doc/api/remap/1.2/ru/#создание-и-обновление-нескольких-объектов) Заказов покупателей.
В теле запроса нужно передать массив, содержащий JSON представления Заказов покупателей, которые вы хотите создать или обновить.
Обновляемые Заказы покупателей должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Заказов покупателей

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/customerorder"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "00003",
              "organization": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "agent": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
                  "type": "counterparty",
                  "mediaType": "application/json"
                }
              }
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
                "type": "customerorder",
                "mediaType": "application/json"
              },
              "name": "000039",
              "group": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/ee2d9c89-1fea-4791-8c99-722e8f8294d0",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
                  "type": "group",
                  "mediaType": "application/json"
                }
              },
              "externalCode": "championCode",
              "code": "codeOfChampion",
              "moment": "2013-04-19 13:50:24",
              "applicable": true,
              "vatEnabled": true,
              "vatIncluded": true,
              "agent": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005",
                  "type": "counterparty",
                  "mediaType": "application/json"
                }
              },
              "agentAccount": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005/accounts/71d4cfdb-fd85-11e5-9464-e4de00000006",
                  "type": "account",
                  "mediaType": "application/json"
                }
              },
              "state": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
                  "type": "state",
                  "mediaType": "application/json"
                }
              }
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Заказов покупателей.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/d9ceb08f-01ae-11e6-9464-e4de00000020",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
      "type": "customerorder",
      "mediaType": "application/json"
    },
    "id": "d9ceb08f-01ae-11e6-9464-e4de00000020",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
    "updated": "2016-04-14 13:02:24",
    "name": "00003",
    "externalCode": "08ehdxhRgVIB5-Sa-QNI42",
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
    "moment": "2016-04-14 13:02:24",
    "applicable": true,
    "vatEnabled": true,
    "vatIncluded": true,
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
    "organization": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "state": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
        "type": "state",
        "mediaType": "application/json"
      }
    },
    "organizationAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "agentAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078/accounts/9794f7a0-f689-11e5-8a84-bae500000079",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "created": "2007-02-07 17:16:41",
    "positions": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/d9ceb08f-01ae-11e6-9464-e4de00000020/positions",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
        "type": "customerorderposition",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    },
    "reservedSum": 0,
    "payedSum": 0,
    "shippedSum": 0,
    "invoicedSum": 0
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
      "type": "customerorder",
      "mediaType": "application/json"
    },
    "id": "c49e83b3-01af-11e6-9464-e4de00000026",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
    "updated": "2016-04-14 13:30:05",
    "name": "000039",
    "code": "codeOfChampion",
    "externalCode": "championCode",
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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/ee2d9c89-1fea-4791-8c99-722e8f8294d0",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "moment": "2013-04-19 12:50:24",
    "applicable": true,
    "vatEnabled": true,
    "vatIncluded": true,
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
    "organization": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "state": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
        "type": "state",
        "mediaType": "application/json"
      }
    },
    "organizationAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "agentAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005/accounts/71d4cfdb-fd85-11e5-9464-e4de00000006",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "created": "2007-02-07 17:16:41",
    "positions": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
        "type": "customerorderposition",
        "mediaType": "application/json",
        "size": 3,
        "limit": 1000,
        "offset": 0
      }
    },
    "reservedSum": 0,
    "payedSum": 0,
    "shippedSum": 0,
    "invoicedSum": 0
  }
]
```

### Удалить Заказ покупателя

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа покупателя.|

> Запрос на удаление Заказа покупателя с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление Заказа покупателя.

### Метаданные Заказов Покупателей 
#### Метаданные Заказов Покупателей 
Запрос на получение метаданных Заказов покупателей. Результат - объект JSON, включающий в себя:

+ **meta** - Ссылка на метаданные Заказов покупателей
+ **attributes** - Массив объектов доп. полей Заказов покупателей в формате [Метаданных](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные)
+ **states** - Массив статусов Заказов покупателей
+ **createShared** - создавать новые Заказы покупателей с меткой "Общий"

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](/java-remap-1.2-doc/api/remap/1.2/ru/#работа-с-дополнительными-полями).

> Метаданные Заказов Покупателей

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Заказов покупателей.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "id": "c2ecd338-015e-11e6-9464-e4de0000008f",
      "name": "Атрибут заказа",
      "type": "string",
      "required": false
    }
  ],
  "states": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56c504-2e58-11e6-8a84-bae500000069",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Новый",
      "color": 15106326,
      "stateType": "Regular",
      "entityType": "customerorder"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56cae3-2e58-11e6-8a84-bae50000006a",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56cae3-2e58-11e6-8a84-bae50000006a",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Подтвержден",
      "color": 40931,
      "stateType": "Regular",
      "entityType": "customerorder"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56cf4f-2e58-11e6-8a84-bae50000006b",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56cf4f-2e58-11e6-8a84-bae50000006b",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Собран",
      "color": 8767198,
      "stateType": "Regular",
      "entityType": "customerorder"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56d433-2e58-11e6-8a84-bae50000006c",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56d433-2e58-11e6-8a84-bae50000006c",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Отгружен",
      "color": 10774205,
      "stateType": "Regular",
      "entityType": "customerorder"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56d92f-2e58-11e6-8a84-bae50000006d",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56d92f-2e58-11e6-8a84-bae50000006d",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Доставлен",
      "color": 8825440,
      "stateType": "Successful",
      "entityType": "customerorder"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56de0a-2e58-11e6-8a84-bae50000006e",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56de0a-2e58-11e6-8a84-bae50000006e",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Возврат",
      "color": 15280409,
      "stateType": "Unsuccessful",
      "entityType": "customerorder"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56e2b4-2e58-11e6-8a84-bae50000006f",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56e2b4-2e58-11e6-8a84-bae50000006f",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Отменен",
      "color": 15280409,
      "stateType": "Unsuccessful",
      "entityType": "customerorder"
    }
  ],
  "createShared": false
}
```

### Отдельное доп. поле

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Доп. поля.|

#### Отдельное доп. поле 
> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/57ab884e-558b-11e6-8a84-bae500000078",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "57ab884e-558b-11e6-8a84-bae500000078",
  "name": "Товар по акции",
  "type": "productfolder",
  "required": false
}
```

### Заказ покупателя

### Получить Заказ покупателя

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа покупателя.|
 
> Запрос на получение отдельного Заказа покупателя с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Заказа покупателя.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/34efe2ee-015e-11e6-9464-e4de0000006b",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerOrder/metadata",
    "type": "customerorder",
    "mediaType": "application/json"
  },
  "id": "34efe2ee-015e-11e6-9464-e4de0000006b",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-14 12:03:05",
  "name": "00001",
  "description": "Это комментарий к заказу покупателя!",
  "externalCode": "CntjFix4hoyZOIhZiULjv2",
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
  "moment": "2016-04-13 12:57:00",
  "applicable": true,
  "vatEnabled": true,
  "vatIncluded": true,
  "sum": 346453701206,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/bc1b4fde-019a-11e6-9464-e4de00000073",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    },
    "value": 214
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "contract": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/8ce3c179-015e-11e6-9464-e4de0000007a",
      "type": "contract",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/850c8af2-f504-11e5-8a84-bae50000015f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078/accounts/9794f7a0-f689-11e5-8a84-bae500000079",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "attributes": {
    "id": "c2ecd338-015e-11e6-9464-e4de0000008f",
    "name": "Атрибут заказа",
    "value": "1251252"
  },
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/34efe2ee-015e-11e6-9464-e4de0000006b/positions",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
      "type": "customerorderposition",
      "mediaType": "application/json",
      "size": 4,
      "limit": 1000,
      "offset": 0
    }
  },
  "reservedSum": 346389501206,
  "deliveryPlannedMoment": "2016-04-15 12:58:00",
  "payedSum": 365939611804,
  "shippedSum": 408739611676,
  "invoicedSum": 408739611676
}
```

### Изменить Заказ покупателя 
Запрос на обновление Заказа покупателя с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Заказа покупателя, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Заказа покупателя](/java-remap-1.2-doc/api/remap/1.2/ru/#документ-заказ-покупателя-заказы-покупателей).
При обновлении полей **organization** и **agent** нужно также обновить поля **organizationAccount** и
**agentAccount** соответственно, иначе произойдет ошибка.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа покупателя.|

> Пример запроса на обновление отдельного Заказа покупателя.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "000039",
            "group": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/ee2d9c89-1fea-4791-8c99-722e8f8294d0",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
                "type": "group",
                "mediaType": "application/json"
              }
            },
            "externalCode": "championCode",
            "code": "codeOfChampion",
            "moment": "2013-04-19 13:50:24",
            "applicable": true,
            "vatEnabled": true,
            "vatIncluded": true,
            "agent": {
              "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005",
                  "type": "counterparty",
                  "mediaType": "application/json"
              }
            },
            "agentAccount": {
              "meta": {
                          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005/accounts/71d4cfdb-fd85-11e5-9464-e4de00000006",
                          "type": "account",
                          "mediaType": "application/json"
                      }
            },
            "state": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
                "type": "state",
                "mediaType": "application/json"
              }
            },
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Заказа покупателя.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
    "type": "customerorder",
    "mediaType": "application/json"
  },
  "id": "c49e83b3-01af-11e6-9464-e4de00000026",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-14 13:30:05",
  "name": "000039",
  "code": "codeOfChampion",
  "externalCode": "championCode",
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/ee2d9c89-1fea-4791-8c99-722e8f8294d0",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2013-04-19 12:50:24",
  "applicable": true,
  "vatEnabled": true,
  "vatIncluded": true,
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
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005/accounts/71d4cfdb-fd85-11e5-9464-e4de00000006",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
      "type": "customerorderposition",
      "mediaType": "application/json",
      "size": 3,
      "limit": 1000,
      "offset": 0
    }
  },
  "reservedSum": 0,
  "payedSum": 0,
  "shippedSum": 0,
  "invoicedSum": 0
}
```

> Пример запроса на изменение Заказа покупателя с дополнительными полями.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "000039",
            "externalCode": "championCode",
            "code": "codeOfChampion",
            "moment": "2013-04-19 13:50:24",
            "applicable": true,
            "vatEnabled": true,
            "vatIncluded": true,
            "agent": {
              "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005",
                  "type": "counterparty",
                  "mediaType": "application/json"
              }
            },
            "agentAccount": {
              "meta": {
                          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005/accounts/71d4cfdb-fd85-11e5-9464-e4de00000006",
                          "type": "account",
                          "mediaType": "application/json"
                      }
            },
            "state": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
                "type": "state",
                "mediaType": "application/json"
              }
            },
            "attributes": [
              {
                "id": "c2ecd338-015e-11e6-9464-e4de0000008f",
                "value": "Обновленный Атрибут заказа",
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Заказа покупателя.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
    "type": "customerorder",
    "mediaType": "application/json"
  },
  "id": "c49e83b3-01af-11e6-9464-e4de00000026",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-14 13:30:05",
  "name": "000039",
  "code": "codeOfChampion",
  "externalCode": "championCode",
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
  "moment": "2013-04-19 12:50:24",
  "applicable": true,
  "vatEnabled": true,
  "vatIncluded": true,
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
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005/accounts/71d4cfdb-fd85-11e5-9464-e4de00000006",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c2ecd338-015e-11e6-9464-e4de0000008f",
      "name": "Атрибут заказа",
      "type": "string",
      "value": "Обновленный Атрибут заказа",
    }
  ],
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
      "type": "customerorderposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "reservedSum": 0,
  "payedSum": 0,
  "shippedSum": 0,
  "invoicedSum": 0
}
```

> Пример запроса на обновление Заказа покупателя с позициями в теле запроса.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "000039",
            "externalCode": "championCode",
            "code": "codeOfChampion",
            "moment": "2013-04-19 13:50:24",
            "applicable": true,
            "vatEnabled": true,
            "vatIncluded": true,
            "agent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005",
                "type": "counterparty",
                "mediaType": "application/json"
              }
            },
            "agentAccount": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005/accounts/71d4cfdb-fd85-11e5-9464-e4de00000006",
                "type": "account",
                "mediaType": "application/json"
              }
            },
            "state": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
                "type": "state",
                "mediaType": "application/json"
              }
            },
            "positions": [
              {
                "id": "34f6344f-015e-11e6-9464-e4de0000006c",
                "quantity": 10,
                "price": 100,
                "discount": 0,
                "vat": 0,
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/8b382799-f7d2-11e5-8a84-bae5000003a5",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                },
                "reserve": 10
              },
              {
                "id": "34f6344f-015e-11e6-9464-e4de0000006d",
                "quantity": 20,
                "price": 200,
                "discount": 0,
                "vat": 21,
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/be903062-f504-11e5-8a84-bae50000019a",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                },
                "reserve": 20
              },
              {
                "id": "34f6344f-015e-11e6-9464-e4de0000006e",
                "quantity": 30,
                "price": 300,
                "discount": 0,
                "vat": 7,
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/c02e3a5c-007e-11e6-9464-e4de00000006",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                },
                "reserve": 30
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Заказа покупателя.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
    "type": "customerorder",
    "mediaType": "application/json"
  },
  "id": "c49e83b3-01af-11e6-9464-e4de00000026",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-14 13:30:05",
  "name": "000039",
  "code": "codeOfChampion",
  "externalCode": "championCode",
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/ee2d9c89-1fea-4791-8c99-722e8f8294d0",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2013-04-19 12:50:24",
  "applicable": true,
  "vatEnabled": true,
  "vatIncluded": true,
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
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005/accounts/71d4cfdb-fd85-11e5-9464-e4de00000006",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
      "type": "customerorderposition",
      "mediaType": "application/json",
      "size": 3,
      "limit": 1000,
      "offset": 0
    }
  },
  "reservedSum": 0,
  "payedSum": 0,
  "shippedSum": 0,
  "invoicedSum": 0
}
```

### Позиции Заказа покупателя 
Отдельный ресурс для управления позициями Заказа покупателя. С его помощью вы можете управлять позициями большого документа, количество строк в котором превышает лимит на количество строк, сохраняемых вместе с документом. Этот лимит равен 100. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](/java-remap-1.2-doc/api/remap/1.2/ru/#работа-с-позициями-документов).

### Получить позиции Заказа покупателя 
Запрос на получение списка всех позиций данного Заказа покупателя.

- **meta** [Метаданные](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные) о выдаче,
- **context** - [Метаданные](/java-remap-1.2-doc/api/remap/1.2/ru/#метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой позиции Заказа покупателя.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа покупателя.|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Запрос на получение списка всех позиций данного Заказа покупателя.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций отдельного Заказа покупателя.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/context/employee",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
    "type": "customerorderposition",
    "mediaType": "application/json",
    "size": 4,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
        "type": "customerorderposition",
        "mediaType": "application/json"
      },
      "id": "34f6344f-015e-11e6-9464-e4de0000006c",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "quantity": 1,
      "price": 123050,
      "discount": 0,
      "vat": 18,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/66ccbc9f-f7d2-11e5-8a84-bae500000076",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e639e90c-2a99-11e9-ac12-000c0000003e"
        }
      },
      "reserve": 1
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6451e-015e-11e6-9464-e4de0000006d",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
        "type": "customerorderposition",
        "mediaType": "application/json"
      },
      "id": "34f6451e-015e-11e6-9464-e4de0000006d",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "quantity": 1,
      "price": 64200000,
      "discount": 0,
      "vat": 18,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/60fc3826-00d7-11e6-9464-e4de00000097",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e639e90c-2a99-11e9-ac12-000c0000003e"
        }
      },
      "reserve": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6551d-015e-11e6-9464-e4de0000006e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
        "type": "customerorderposition",
        "mediaType": "application/json"
      },
      "id": "34f6551d-015e-11e6-9464-e4de0000006e",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "quantity": 1,
      "price": 346347237062,
      "discount": 0,
      "vat": 18,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/56c73633-ffe4-11e5-9464-e4de000000c6",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "variant",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=e639e90c-2a99-11e9-ac12-000c00001222"
        }
      },
      "reserve": 1
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f66948-015e-11e6-9464-e4de0000006f",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
        "type": "customerorderposition",
        "mediaType": "application/json"
      },
      "id": "34f66948-015e-11e6-9464-e4de0000006f",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "quantity": 1,
      "price": 42141094,
      "discount": 0,
      "vat": 18,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/66cc36dc-f7d2-11e5-8a84-bae500000074",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
          "type": "variant",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=3c6dc9b8-2842-11e9-ac12-000c00000071"
        }
      },
      "reserve": 1
    }
  ]
}
```

### Создать позицию Заказа покупателя 
Запрос на создание новой позиции в Заказе покупателя.
Для успешного создания необходимо в теле запроса указать следующие поля:

+ **assortment** - Ссылка на товар/услугу/серию/модификацию/комплект, которую представляет собой позиция.

Также можно указать поле с именем **product**, **service**, **consignment**, **variant**, **bundle** в соответствии с тем,
чем является указанная позиция. Подробнее об этом поле можно прочитать в описании [позиции Заказа](/java-remap-1.2-doc/api/remap/1.2/ru/#позиции-заказа-покупателя)

+ **quantity** - Количество указанной позиции. Должно быть положительным, иначе возникнет ошибка.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа покупателя.|

> Пример создания одной позиции в Заказе покупателя.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "quantity": 49,
            "price": 12345,
            "discount": 0,
            "vat": 18,
            "assortment": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/66ccbc9f-f7d2-11e5-8a84-bae500000076",
                "type": "product",
                "mediaType": "application/json"
              }
            },
            "reserve": 19
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной позиции отдельного Заказа покупателя.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/a7a61c8b-acdd-11e6-8a84-bae500000000",
      "type": "customerorderposition",
      "mediaType": "application/json"
    },
    "id": "a7a61c8b-acdd-11e6-8a84-bae500000000",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "quantity": 49,
    "price": 12345,
    "vat": 18,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/66ccbc9f-f7d2-11e5-8a84-bae500000076",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3c6dc9b8-2842-11e9-ac12-000c00000071"
      }
    },
    "reward": 2925
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/a7a6c749-acdd-11e6-8a84-bae500000001",
      "type": "customerorderposition",
      "mediaType": "application/json"
    },
    "id": "a7a6c749-acdd-11e6-8a84-bae500000001",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "quantity": 15,
    "price": 1020,
    "vat": 0,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=/e64d0a86-2a99-11e9-ac12-000c00000041"
      }
    },
    "reward": 2295
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/a7a6d9cc-acdd-11e6-8a84-bae500000002",
      "type": "customerorderposition",
      "mediaType": "application/json"
    },
    "id": "a7a6d9cc-acdd-11e6-8a84-bae500000002",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "quantity": 15,
    "price": 101,
    "vat": 0,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
      }
    },
    "reward": 227
  }
]
```

> Пример создания сразу нескольких позиций в Заказе покупателя.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '[
            {
              "quantity": 12,
              "price": 300,
              "vat": 0,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                  "type": "variant",
                  "mediaType": "application/json"
                }
              },
              "inTransit": 11
            },
            {
              "quantity": 3,
              "price": 1000,
              "discount": 0,
              "vat": 10,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/7a6f697f-3c64-11e6-8a84-bae500000006",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "inTransit": 1
            },
            {
              "quantity": 404,
              "price": 454,
              "discount": 200,
              "vat": 21,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a83c422-3c64-11e6-8a84-bae500000012",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                  "type": "variant",
                  "mediaType": "application/json"
                }
              },
              "inTransit": 216
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка созданных позиций отдельного Заказа покупателя.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/f389488d-3f71-11e6-8a84-bae50000005f",
      "type": "customerorderposition",
      "mediaType": "application/json"
    },
    "id": "f389488d-3f71-11e6-8a84-bae50000005f",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 12,
    "price": 300,
    "discount": 0,
    "vat": 0,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
      }
    },
    "shipped": 0,
    "inTransit": 11
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/f389521b-3f71-11e6-8a84-bae500000060",
      "type": "customerorderposition",
      "mediaType": "application/json"
    },
    "id": "f389521b-3f71-11e6-8a84-bae500000060",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 3,
    "price": 1000,
    "discount": 0,
    "vat": 10,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/7a6f697f-3c64-11e6-8a84-bae500000006",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
      }
    },
    "shipped": 0,
    "inTransit": 1
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/f3895aa1-3f71-11e6-8a84-bae500000061",
      "type": "customerorderposition",
      "mediaType": "application/json"
    },
    "id": "f3895aa1-3f71-11e6-8a84-bae500000061",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 404,
    "price": 454,
    "discount": 200,
    "vat": 21,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a83c422-3c64-11e6-8a84-bae500000012",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=392c045c-2842-11e9-ac12-000a00000002"
      }
    },
    "shipped": 0,
    "inTransit": 216
  }
]
```

### Позиция Заказа 
Отдельная позиция Заказа с указанным id позиции.

### Получить позицию Заказа

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа покупателя.|
|positionID|  `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции Заказа покупателя.|
 
> Запрос на получение отдельной позиции Заказа с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции Заказа покупателя.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
    "type": "customerorderposition",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "quantity": 1,
  "price": 123050,
  "discount": 0,
  "vat": 18,
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/66ccbc9f-f7d2-11e5-8a84-bae500000076",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=392c045c-2842-11e9-ac12-000a00000002"
    }
  },
  "reserve": 1
}
```

### Изменить позицию Заказа 
Запрос на обновление отдельной позиции Заказа. Для обновления позиции нет каких-либо
 обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.
 
 **Параметры**
 
|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа покупателя.|
|positionID|  `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции Заказа покупателя.|
 
> Пример запроса на обновление отдельной позиции в Заказе покупателя.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "quantity": 111,
            "price": 26332700,
            "discount": 0,
            "vat": 18,
            "assortment": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a",
                "type": "product",
                "mediaType": "application/json"
              }
            },
            "reserve": 13
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции Заказа покупателя.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
    "type": "customerorderposition",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "quantity": 111,
  "price": 26332700,
  "discount": 0,
  "vat": 18,
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=392c045c-2842-11e9-ac12-000a00000002"
    }
  },
  "reserve": 13
}
```

### Удалить позицию

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа покупателя.|
|positionID|  `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции Заказа покупателя.|
 
> Запрос на удаление отдельной позиции Заказа с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление позиции Заказа.
