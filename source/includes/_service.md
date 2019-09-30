## Услуга
Средствами JSON API можно создавать и обновлять сведения об Услугах, запрашивать списки Услуг и сведения по отдельным Услугам. Кодом сущности для Услуги в составе JSON API является ключевое слово **service**. Услуга - специальная разновидность товара, без закупочной цены и упаковок. Больше о Товарах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки в разделе
 [Товары и склад](https://support.moysklad.ru/hc/ru/sections/200564973-%D0%A2%D0%BE%D0%B2%D0%B0%D1%80%D1%8B-%D0%B8-%D1%81%D0%BA%D0%BB%D0%B0%D0%B4).

По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](../#mojsklad-json-api-obschie-swedeniq-kontextnyj-poisk).

Поиск среди объектов услуг на соответствие поисковой строке будет осуществлен по следующим полям:

+ по наименованию Услуги **name**
+ по коду Услуги **code**

### Услуги 
#### Атрибуты сущности
+ **meta** - [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) объекта
+ **id** - ID Услуги в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **syncId** - ID синхронизации. После заполнения недоступен для изменения.
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **name** - Наименование Услуги `Необходимое`
+ **description** - Описание Услуги
+ **code** - Код Услуги
+ **externalCode** - Внешний код Услуги
+ **archived** - Отметка о том, добавлен ли Услуга в архив
+ **pathName** - Наименование группы, в которую входит Услуга `Только для чтения`
+ **vat** - НДС %
+ **effectiveVat** - Реальный НДС % `Только для чтения`
+ **productFolder** - Ссылка на группу Услуги
+ **uom** - Единицы измерения
+ **minPrice** - Минимальная цена
+ **salePrices** - Цены продажи
+ **barcodes** - Массив штрихкодов услуги
+ **attributes** - Дополнительные поля Услуги в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **buyPrice** - Закупочная цена
+ **paymentItemType** - Признак предмета расчета
  + **SERVICE** - Услуга
  + **WORK** - Работа
  + **PROVIDING_RID** - Предоставление РИД
  + **COMPOUND_PAYMENT_ITEM** - Составной предмет расчета
  + **ANOTHER_PAYMENT_ITEM** - Иной предмет расчета
+ **taxSystem** - Код системы налогообложения
  + **GENERAL_TAX_SYSTEM** - ОСН
  + **SIMPLIFIED_TAX_SYSTEM_INCOME** - УСН. Доход
  + **SIMPLIFIED_TAX_SYSTEM_INCOME_OUTCOME** - УСН. Доход-Расход
  + **UNIFIED_AGRICULTURAL_TAX** - ЕСХН
  + **PRESUMPTIVE_TAX_SYSTEM** - ЕНВД
  + **PATENT_BASED** - Патент

Атрибут **pathName** сам по себе является атрибутом только для чтения, однако его можно изменить
с помощью обновления атрибута **productFolder**.

#### Атрибуты вложенных сущностей

#### Метаданные Услуг
Метаданные Услуг содержат информацию о дополнительных полях.

Посмотреть все созданные в основном интерфейсе доп. поля Услуг,
а также все типы цен можно с помощью запроса на получение метаданных Услуг.
Ответ - объект, со следующей структурой:

+ **meta** - Метаданные
+ **attributes** - коллекция всех существующих доп. полей Услуг в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)

Структуры объектов отдельных коллекций:

##### Штрих коды:
При создании штрихкода требуется описать объект с полем, являющимся форматом представления штрихкода в нижнем регистре, со строковым значением самого штрихкода. Наименование полей отдельного объекта, представляющего штрихкод:

+ **ean13** - штрихкод в формате EAN13, если требуется создать штрихкод в формате EAN13
+ **ean8** - штрихкод в формате EAN8, если требуется создать штрихкод в формате EAN8
+ **code128** - штрихкод в формате Code128, если требуется создать штрихкод в формате Code128

О работе с доп. полями Услуг можно прочитать [здесь](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)

##### Цены продажи
+ **value** - Значение цены
+ **currency** - Ссылка на валюту в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **priceType** - Тип цены

##### Закупочная цена
+ **value** - Значение цены
+ **currency** - Ссылка на валюту в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)

##### Минимальная цена
+ **value** - Значение цены
+ **currency** - Ссылка на валюту в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)

##### Группа Услуги
+ **meta** - Метаданные, содержащие ссылку на группу Услуги.
Описание сущности Группа вы можете посмотреть [здесь](../dictionaries/#suschnosti-gruppa-towarow).
Обновление этого атрибута также обновит атрибут **pathName**.

##### Особенности фильтрации поля archived
Если одновременно осуществляется фильтрация по полям **id** и **archived**, то фильтрация по полю **archived** не учитывается.


### Получить список Услуг 
Запрос на получение всех Услуг для данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

- **meta** [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) о выдаче.
- **context** - [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой [Услуги](../dictionaries/#suschnosti-usluga).

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить список услуг

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/service"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Услуг.
  
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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata",
    "type": "service",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/63e4fa87-2c87-11e6-8a84-bae500000030",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata",
        "type": "service",
        "mediaType": "application/json"
      },
      "id": "63e4fa87-2c87-11e6-8a84-bae500000030",
      "accountId": "6270cd18-2c7f-11e6-8a84-bae500000001",
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
      "updated": "2016-06-07 11:11:08",
      "name": "Облицовка",
      "description": "Облицовка доставляемого товара",
      "code": "additionalprot",
      "externalCode": "addProt",
      "archived": false,
      "pathName": "",
      "vat": 6,
      "effectiveVat": 6,
      "minPrice": {
        "value": 500,
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "salePrices": [
        {
          "value": 1052,
          "currency": {
            "meta": {
              "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
              "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        },
        {
          "value": 1020,
          "currency": {
            "meta": {
              "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
              "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
            "name": "Цена для друзей",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
          }
        }
      ],
      "buyPrice": {
        "value": 700,
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "barcodes": [
        {
          "ean13": "34875834765872435"
        },
        {
          "ean8": "234234234234"
        },
        {
          "code128": "23423423452351"
        }
      ],
      "attributes": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata/attributes/0c2e54cd-2c80-11e6-8a84-bae50000009c",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "0c2e54cd-2c80-11e6-8a84-bae50000009c",
          "name": "Экспорт",
          "type": "boolean",
          "value": true
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata/attributes/0c2e5dc5-2c80-11e6-8a84-bae50000009d",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "0c2e5dc5-2c80-11e6-8a84-bae50000009d",
          "name": "Изготовитель",
          "type": "counterparty",
          "value": "ООО Компания"
        }
      ],
      "taxSystem": "GENERAL_TAX_SYSTEM"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/f6ecdc65-2c86-11e6-8a84-bae500000027",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata",
        "type": "service",
        "mediaType": "application/json"
      },
      "id": "f6ecdc65-2c86-11e6-8a84-bae500000027",
      "accountId": "6270cd18-2c7f-11e6-8a84-bae500000001",
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
      "updated": "2016-06-07 11:08:06",
      "name": "Доставка",
      "description": "Доставка выбранного товара",
      "code": "delivery",
      "externalCode": "delCode",
      "archived": false,
      "pathName": "",
      "vat": 10,
      "effectiveVat": 10,
      "minPrice": {
        "value": 500,
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "salePrices": [
        {
          "value": 10532,
          "currency": {
            "meta": {
              "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
              "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        },
        {
          "value": 100,
          "currency": {
            "meta": {
              "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
              "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
            "name": "Цена для друзей",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
          }
        }
      ],
      "buyPrice": {
        "value": 700,
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "barcodes": [
        {
          "ean13": "34875834765872435"
        },
        {
          "ean8": "234234234234"
        },
        {
          "code128": "23423423452351"
        }
      ]
    }
  ]
}
```  

### Создать Услугу
Создать новую Услугу.
#### Описание
Услуга создается на основе переданного объекта JSON,
который содержит представление новой Услуги.
Результат - JSON представление созданной Услуги. Для создания новой Услуги,
необходимо и достаточно указать в переданном объекте не пустое поле `name`

При создании Услуги с указанным массивом штрихкодов для каждого штрихкода требуется указать к какому типу относится штрихкод. 
Например, чтобы создать штрихкод с типом Code 128, в массив штрихкодов должен быть добавлен JSON-объект с полем code128 со значением штрихкода.

> Пример наиболее полного по количеству полей запроса.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/service"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Доставка",
            "code": "delivery",
            "externalCode": "delCode",
            "description": "Доставка выбранного товара",
            "vat": 10,
            "effectiveVat": 10,
            "minPrice": {
              "value": 500,
              "currency": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                  "type": "currency",
                  "mediaType": "application/json"
                }
              }
            },
            "salePrices": [
              {
                "value": 10532,
                "currency": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json"
                  }
                },
                "priceType": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
                    "type": "pricetype",
                    "mediaType": "application/json"
                  }
                }
              },
              {
                "value": 100,
                "currency": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json"
                  }
                },
                "priceType": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
                    "type": "pricetype",
                    "mediaType": "application/json"
                  }
                }
              }
            ],
            "buyPrice": {
              "value": 1047,
              "currency": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                  "type": "currency",
                  "mediaType": "application/json"
                }
              }
            },
            "barcodes": [
              {
                "ean13": "34875834765872435"
              },
              {
                "ean8": "234234234234"
              },
              {
                "code128": "23423423452351"
              }
            ]            
          }'  
```

> Response 200 (application/json)
  Успешный запрос. Результат - JSON представление созданной Услуги.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/f6ecdc65-2c86-11e6-8a84-bae500000027",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata",
    "type": "service",
    "mediaType": "application/json"
  },
  "id": "f6ecdc65-2c86-11e6-8a84-bae500000027",
  "accountId": "6270cd18-2c7f-11e6-8a84-bae500000001",
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
  "updated": "2016-06-07 11:08:06",
  "name": "Доставка",
  "description": "Доставка выбранного товара",
  "code": "delivery",
  "externalCode": "delCode",
  "archived": false,
  "pathName": "",
  "vat": 10,
  "effectiveVat": 10,
  "minPrice": {
    "value": 500,
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "salePrices": [
    {
      "value": 10532,
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      },
      "priceType": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
        "name": "Цена продажи",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
      }
    },
    {
      "value": 100,
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      },
      "priceType": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
        "name": "Цена для друзей",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
      }
    }
  ],
  "buyPrice": {
    "value": 1047,
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "barcodes": [
    {
      "ean13": "34875834765872435"
    },
    {
      "ean8": "234234234234"
    },
    {
      "code128": "23423423452351"
    }
  ]  
}
```
> Пример запроса на создание Услуги с единственным необходимым полем.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/service"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Услуга, у которой мы придумали только имя"
          }'  
```

> Response 200 (application/json)
  Успешный запрос. Результат - JSON представление созданной Услуги.  

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/cce4dae4-2c87-11e6-8a84-bae500000037",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata",
    "type": "service",
    "mediaType": "application/json"
  },
  "id": "cce4dae4-2c87-11e6-8a84-bae500000037",
  "accountId": "6270cd18-2c7f-11e6-8a84-bae500000001",
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
  "salePrices": [
    {
      "value": 346347237000,
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/2b50da23-296b-11e6-8a84-bae500000055",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      },
      "priceType": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
        "name": "Цена продажи",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
      }
    },
    {
      "value": 100,
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/2b50da23-296b-11e6-8a84-bae500000055",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      },
      "priceType": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
        "name": "Цена для друзей",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
      }
    }
  ],
  "updated": "2016-06-07 11:14:05",
  "name": "Услуга, у которой мы придумали только имя",
  "code": "pumpkin2",
  "externalCode": "5fZe-Qyji8mSwoHYs7kSA2",
  "archived": false,
  "pathName": ""
}
```

> Пример запроса на создание Услуги с доп. полями.


```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/service"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Облицовка",
            "code": "additionalprot",
            "externalCode": "addProt",
            "description": "Облицовка доставляемого товара",
            "vat": 6,
            "effectiveVat": 5,
            "minPrice": {
              "value": 500,
              "currency": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                  "type": "currency",
                  "mediaType": "application/json"
                }
              }
            },
            "salePrices": [
              {
                "value": 1052,
                "currency": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json"
                  }
                },
                "priceType": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
                    "type": "pricetype",
                    "mediaType": "application/json"
                  }
                }
              },
              {
                "value": 1020,
                "currency": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json"
                  }
                },
                "priceType": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
                    "type": "pricetype",
                    "mediaType": "application/json"
                  }
                }
              }
            ],
            "buyPrice": {
              "value": 700,
              "currency": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                  "type": "currency",
                  "mediaType": "application/json"
                }
              }
            },
            "barcodes": [
              {
                "ean13": "34875834765872435"
              },
              {
                "ean8": "234234234234"
              },
              {
                "code128": "23423423452351"
              }
            ],            
            "attributes": [
              {
                "id": "0c2e54cd-2c80-11e6-8a84-bae50000009c",
                "name": "Экспорт",
                "value": true
              },
              {
                "id": "0c2e5dc5-2c80-11e6-8a84-bae50000009d",
                "name": "Изготовитель",
                "value": "ООО Компания"
              }
            ]
          }'  
```

> Response 200 (application/json)
  Успешный запрос. Результат - JSON представление созданной Услуги.
  

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/63e4fa87-2c87-11e6-8a84-bae500000030",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata",
    "type": "service",
    "mediaType": "application/json"
  },
  "id": "63e4fa87-2c87-11e6-8a84-bae500000030",
  "accountId": "6270cd18-2c7f-11e6-8a84-bae500000001",
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
  "updated": "2016-06-07 11:11:08",
  "name": "Облицовка",
  "description": "Облицовка доставляемого товара",
  "code": "additionalprot",
  "externalCode": "addProt",
  "archived": false,
  "pathName": "",
  "vat": 6,
  "effectiveVat": 6,
  "minPrice": {
    "value": 500,
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "salePrices": [
    {
      "value": 1052,
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      },
      "priceType": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
        "name": "Цена продажи",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
      }
    },
    {
      "value": 1020,
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      },
      "priceType": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
        "name": "Цена для друзей",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
      }
    }
  ],
  "buyPrice": {
    "value": 700,
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "barcodes": [
    {
      "ean13": "34875834765872435"
    },
    {
      "ean8": "234234234234"
    },
    {
      "code128": "23423423452351"
    }
  ],  
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata/attributes/0c2e54cd-2c80-11e6-8a84-bae50000009c",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "0c2e54cd-2c80-11e6-8a84-bae50000009c",
      "name": "Экспорт",
      "type": "boolean",
      "value": true
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata/attributes/0c2e5dc5-2c80-11e6-8a84-bae50000009d",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "0c2e5dc5-2c80-11e6-8a84-bae50000009d",
      "name": "Изготовитель",
      "type": "counterparty",
      "value": "ООО Компания"
    }
  ]
}
```
### Массовое создание и обновление Услуг 
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Услуг.
В теле запроса нужно передать массив, содержащий JSON представления Услуг, которые вы хотите создать или обновить.
Обновляемые Услуги должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Услуг

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/service"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "Услуга, у которой мы придумали только имя"
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/f6ecdc65-2c86-11e6-8a84-bae500000027",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata",
                "type": "service",
                "mediaType": "application/json"
              },
              "name": "Доставка товара",
              "description": "Доставка на дом выбранного товара",
              "externalCode": "deliveryCode",
              "vat": 11,
              "effectiveVat": 11,
              "minPrice": {
                "value": 500,
                "currency": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json"
                  }
                }
              },
              "salePrices": [
                {
                  "value": 700,
                  "currency": {
                    "meta": {
                      "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
                      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                      "type": "currency",
                      "mediaType": "application/json"
                    }
                  },
                  "priceType": {
                    "meta": {
                      "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
                      "type": "pricetype",
                      "mediaType": "application/json"
                    }
                  }
                },
                {
                  "value": 7000,
                  "currency": {
                    "meta": {
                      "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
                      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                      "type": "currency",
                      "mediaType": "application/json"
                    }
                  },
                  "priceType": {
                    "meta": {
                      "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
                      "type": "pricetype",
                      "mediaType": "application/json"
                    }
                  }
                }
              ],
              "buyPrice": {
                "value": 700,
                "currency": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json"
                  }
                }
              },
              "barcodes": [
                {
                  "ean13": "34875834765872435"
                },
                {
                  "ean8": "234234234234"
                },
                {
                  "code128": "23423423452351"
                }
              ]
            }
          ]'  
```

> Response 200 (application/json) 
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Услуг.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/cce4dae4-2c87-11e6-8a84-bae500000037",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata",
      "type": "service",
      "mediaType": "application/json"
    },
    "id": "cce4dae4-2c87-11e6-8a84-bae500000037",
    "accountId": "6270cd18-2c7f-11e6-8a84-bae500000001",
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
    "salePrices": [
      {
        "value": 346347237000,
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/2b50da23-296b-11e6-8a84-bae500000055",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        },
        "priceType": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
            "type": "pricetype",
            "mediaType": "application/json"
          },
          "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "name": "Цена продажи",
          "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
        }
      },
      {
        "value": 100,
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/2b50da23-296b-11e6-8a84-bae500000055",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        },
        "priceType": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
            "type": "pricetype",
            "mediaType": "application/json"
          },
          "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
          "name": "Цена для друзей",
          "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
        }
      }
    ],
    "updated": "2016-06-07 11:14:05",
    "name": "Услуга, у которой мы придумали только имя",
    "code": "pumpkin2",
    "externalCode": "5fZe-Qyji8mSwoHYs7kSA2",
    "archived": false,
    "pathName": ""
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/f6ecdc65-2c86-11e6-8a84-bae500000027",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata",
      "type": "service",
      "mediaType": "application/json"
    },
    "id": "f6ecdc65-2c86-11e6-8a84-bae500000027",
    "accountId": "6270cd18-2c7f-11e6-8a84-bae500000001",
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
    "updated": "2016-06-07 11:20:40",
    "name": "Доставка товара",
    "description": "Доставка на дом выбранного товара",
    "code": "delivery",
    "externalCode": "deliveryCode",
    "archived": false,
    "pathName": "",
    "vat": 11,
    "effectiveVat": 11,
    "minPrice": {
      "value": 500,
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    },
    "salePrices": [
      {
        "value": 700,
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        },
        "priceType": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
            "type": "pricetype",
            "mediaType": "application/json"
          },
          "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "name": "Цена продажи",
          "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
        }
      },
      {
        "value": 7000,
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        },
        "priceType": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
            "type": "pricetype",
            "mediaType": "application/json"
          },
          "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
          "name": "Цена для друзей",
          "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
        }
      }
    ],
    "buyPrice": {
      "value": 700,
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    },
    "barcodes": [
      {
        "ean13": "34875834765872435"
      },
      {
        "ean8": "234234234234"
      },
      {
        "code128": "23423423452351"
      }
    ]
  }
]
```

### Удалить Услугу

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Услуги.|

> Запрос на удаление Услуги с указанным id.

```shell
  curl -X DELETE
    "https://online.moysklad.ru/api/remap/1.2/entity/service/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"      
```
> Response 200 (application/json)
Успешное удаление Услуги.

### Массовое удаление Услуг

В теле запроса нужно передать массив, содержащий JSON метаданных Услуг, которые вы хотите удалить.


> Запрос на массовое удаление Услуг. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/service/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata",
            "type": "service",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata",
            "type": "service",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Услуг.

```json
[
  {
    "info":"Сущность 'service' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'service' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
```  

### Метаданные Услуг 
#### Метаданные Услуг 
Запрос на получение метаданных Услуг. Результат - объект JSON, включающий в себя:

+ **meta** - Метаданные
+ **attributes** - коллекция всех существующих доп. полей Услуг в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Услуг 

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Услуг.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/service",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata/attributes/0c2e54cd-2c80-11e6-8a84-bae50000009c",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "0c2e54cd-2c80-11e6-8a84-bae50000009c",
      "name": "Экспорт",
      "type": "boolean",
      "required": false
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata/attributes/0c2e5dc5-2c80-11e6-8a84-bae50000009d",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "0c2e5dc5-2c80-11e6-8a84-bae50000009d",
      "name": "Изготовитель",
      "type": "string",
      "required": false
    }
  ]
}
```

### Отдельное доп. поле

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Доп. поля.|
 
#### Отдельное доп. поле
 
> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata/attributes/3cd83619-5585-11e6-8a84-bae500000069",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "customEntityMeta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/metadata/customEntities/a27aa372-5311-11e6-8a84-bae500000001",
    "type": "customentitymetadata",
    "mediaType": "application/json"
  },
  "id": "3cd83619-5585-11e6-8a84-bae500000069",
  "name": "Связанная сущность",
  "type": "customentity",
  "required": false
}
```

### Услуга
 
Отдельная Услуга, обращение к которой происходит по значению его id.

### Получить Услугу

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Услуги.|

> Запрос на получение Услуги с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/service/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Услуги.
    
```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/63e4fa87-2c87-11e6-8a84-bae500000030",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata",
    "type": "service",
    "mediaType": "application/json"
  },
  "id": "63e4fa87-2c87-11e6-8a84-bae500000030",
  "accountId": "6270cd18-2c7f-11e6-8a84-bae500000001",
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
  "updated": "2016-06-07 11:11:08",
  "name": "Облицовка",
  "description": "Облицовка доставляемого товара",
  "code": "additionalprot",
  "externalCode": "addProt",
  "archived": false,
  "pathName": "",
  "vat": 6,
  "effectiveVat": 6,
  "minPrice": {
    "value": 500,
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "salePrices": [
    {
      "value": 1052,
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      },
      "priceType": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
        "name": "Цена продажи",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
      }
    },
    {
      "value": 1020,
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      },
      "priceType": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
        "name": "Цена для друзей",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
      }
    }
  ],
  "buyPrice": {
    "value": 700,
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "barcodes": [
    {
      "ean13": "34875834765872435"
    },
    {
      "ean8": "234234234234"
    },
    {
      "code128": "23423423452351"
    }
  ],
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata/attributes/0c2e54cd-2c80-11e6-8a84-bae50000009c",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "0c2e54cd-2c80-11e6-8a84-bae50000009c",
      "name": "Экспорт",
      "type": "boolean",
      "value": true
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata/attributes/0c2e5dc5-2c80-11e6-8a84-bae50000009d",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "0c2e5dc5-2c80-11e6-8a84-bae50000009d",
      "name": "Изготовитель",
      "type": "counterpaerty",
      "value": "ООО Компания"
    }
  ]
}
```

### Изменить Услугу
Обновить существующую Услугу.
Типы цен в ценах продаж и дополнительные поля обновляются как элементы вложенных коллекций:

+ Если в текущем объекте у какого-то из доп. полей / типов цен нет значения,
а в переданной коллекции оно есть - значение записывается в доп. поле / тип цены.
+ Если же у данного атрибута значение уже присутствует - оно перезаписывается на переданное.
+ Если у данного атрибута в составе объекта значение присутствует, однако оно отсутствует
в передаваемой в теле запроса коллекции (не передается совсем), то значение атрибута объекта не изменяется.

При обновлении Услуги с указанным массивом штрихкодов для каждого штрихкода требуется указать к какому типу относится штрихкод. 
Например, чтобы создать штрихкод с типом Code 128, в массив штрихкодов должен быть добавлен JSON-объект с полем code128 со значением штрихкода.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Услуги.|

> Пример запроса на обновление Услуги
  
  ```shell
    curl -X PUT
      "https://online.moysklad.ru/api/remap/1.2/entity/service/7944ef04-f831-11e5-7a69-971500188b19"
      -H "Authorization: Basic <Credentials>"
      -H "Content-Type: application/json"
        -d '{
              "name": "Доставка товара",
              "description": "Доставка на дом выбранного товара",
              "externalCode": "deliveryCode",
              "vat": 11,
              "effectiveVat": 11,
              "minPrice": {
                "value": 500,
                "currency": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json"
                  }
                }
              },
              "salePrices": [
                {
                  "value": 700,
                  "currency": {
                    "meta": {
                      "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
                      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                      "type": "currency",
                      "mediaType": "application/json"
                    }
                  },
                  "priceType": {
                    "meta": {
                      "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
                      "type": "pricetype",
                      "mediaType": "application/json"
                    }
                  }
                },
                {
                  "value": 7000,
                  "currency": {
                    "meta": {
                      "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
                      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                      "type": "currency",
                      "mediaType": "application/json"
                    }
                  },
                  "priceType": {
                    "meta": {
                      "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
                      "type": "pricetype",
                      "mediaType": "application/json"
                    }
                  }
                }
              ],
              "buyPrice": {
                "value": 700,
                "currency": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json"
                  }
                }
              },
              "barcodes": [
                {
                  "ean13": "34875834765872435"
                },
                {
                  "ean8": "234234234234"
                },
                {
                  "code128": "23423423452351"
                }
              ]
            }'  
  ```

> Response 200 (application/json)
  Успешный запрос. Результат - JSON представление обновленной Услуги.
    
  ```json
 {
   "meta": {
     "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/f6ecdc65-2c86-11e6-8a84-bae500000027",
     "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata",
     "type": "service",
     "mediaType": "application/json"
   },
   "id": "f6ecdc65-2c86-11e6-8a84-bae500000027",
   "accountId": "6270cd18-2c7f-11e6-8a84-bae500000001",
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
   "updated": "2016-06-07 11:20:40",
   "name": "Доставка товара",
   "description": "Доставка на дом выбранного товара",
   "code": "delivery",
   "externalCode": "deliveryCode",
   "archived": false,
   "pathName": "",
   "vat": 11,
   "effectiveVat": 11,
   "minPrice": {
     "value": 500,
     "currency": {
       "meta": {
         "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
         "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
         "type": "currency",
         "mediaType": "application/json"
       }
     }
   },
   "salePrices": [
     {
       "value": 700,
       "currency": {
         "meta": {
           "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
           "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
           "type": "currency",
           "mediaType": "application/json"
         }
       },
       "priceType": {
         "meta": {
           "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
           "type": "pricetype",
           "mediaType": "application/json"
         },
         "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
         "name": "Цена продажи",
         "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
       }
     },
     {
       "value": 7000,
       "currency": {
         "meta": {
           "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
           "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
           "type": "currency",
           "mediaType": "application/json"
         }
       },
       "priceType": {
         "meta": {
           "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
           "type": "pricetype",
           "mediaType": "application/json"
         },
         "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
         "name": "Цена для друзей",
         "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
       }
     }
   ],
   "buyPrice": {
     "value": 700,
     "currency": {
       "meta": {
         "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
         "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
         "type": "currency",
         "mediaType": "application/json"
       }
     }
   },
   "barcodes": [
     {
       "ean13": "34875834765872435"
     },
     {
       "ean8": "234234234234"
     },
     {
       "code128": "23423423452351"
     }
   ]
 } 
  ```

> Пример запроса на изменение Услуги с дополнительными полями.
 
 ```shell
   curl -X PUT
     "https://online.moysklad.ru/api/remap/1.2/entity/service/7944ef04-f831-11e5-7a69-971500188b19"
     -H "Authorization: Basic <Credentials>"
     -H "Content-Type: application/json"
       -d '{
             "name": "Облицовка груза",
             "description": "Облицовка доставляемого груза",
             "code": "additionalprotection",
             "externalCode": "addProtection",
             "productFolder": {
               "meta": {
                 "href": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/238e806f-2c89-11e6-8a84-bae5000000a8",
                 "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata",
                 "type": "productfolder",
                 "mediaType": "application/json"
               }
             },
             "vat": 6,
             "effectiveVat": 6,
             "minPrice": {
               "value": 500,
               "currency": {
                 "meta": {
                   "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
                   "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                   "type": "currency",
                   "mediaType": "application/json"
                 }
               }
             },
             "salePrices": [
               {
                 "value": 778,
                 "currency": {
                   "meta": {
                     "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
                     "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                     "type": "currency",
                     "mediaType": "application/json"
                   }
                 },
                 "priceType": {
                   "meta": {
                     "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
                     "type": "pricetype",
                     "mediaType": "application/json"
                   }
                 }
               },
               {
                 "value": 777,
                 "currency": {
                   "meta": {
                     "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
                     "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                     "type": "currency",
                     "mediaType": "application/json"
                   }
                 },
                 "priceType": {
                   "meta": {
                     "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
                     "type": "pricetype",
                     "mediaType": "application/json"
                   }
                 }
               }
             ],
             "buyPrice": {
               "value": 700,
               "currency": {
                 "meta": {
                   "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
                   "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                   "type": "currency",
                   "mediaType": "application/json"
                 }
               }
             },
             "barcodes": [
               {
                 "ean13": "34875834765872435"
               },
               {
                 "ean8": "234234234234"
               },
               {
                 "code128": "23423423452351"
               }
             ],             
             "attributes": [
               {
                 "id": "0c2e54cd-2c80-11e6-8a84-bae50000009c",
                 "name": "Экспорт",
                 "value": true
               },
               {
                 "id": "0c2e5dc5-2c80-11e6-8a84-bae50000009d",
                 "name": "Изготовитель",
                 "value": "ООО Компания отдел доставки"
               }
             ]
           }'  
 ```
 
> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Услуги.

 ```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/63e4fa87-2c87-11e6-8a84-bae500000030",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata",
    "type": "service",
    "mediaType": "application/json"
  },
  "id": "63e4fa87-2c87-11e6-8a84-bae500000030",
  "accountId": "6270cd18-2c7f-11e6-8a84-bae500000001",
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
  "updated": "2016-06-07 11:26:11",
  "name": "Облицовка груза",
  "description": "Облицовка доставляемого груза",
  "code": "additionalprotection",
  "externalCode": "addProtection",
  "archived": false,
  "pathName": "Услуги компании",
  "vat": 6,
  "effectiveVat": 6,
  "productFolder": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/238e806f-2c89-11e6-8a84-bae5000000a8",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata",
      "type": "productfolder",
      "mediaType": "application/json"
    }
  },
  "minPrice": {
    "value": 500,
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "salePrices": [
    {
      "value": 778,
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      },
      "priceType": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
        "name": "Цена продажи",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
      }
    },
    {
      "value": 777,
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      },
      "priceType": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
        "name": "Цена для друзей",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
      }
    }
  ],
  "buyPrice": {
    "value": 700,
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "barcodes": [
    {
      "ean13": "34875834765872435"
    },
    {
      "ean8": "234234234234"
    },
    {
      "code128": "23423423452351"
    }
  ],  
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata/attributes/0c2e54cd-2c80-11e6-8a84-bae50000009c",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "0c2e54cd-2c80-11e6-8a84-bae50000009c",
      "name": "Экспорт",
      "type": "boolean",
      "value": true
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata/attributes/0c2e5dc5-2c80-11e6-8a84-bae50000009d",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "0c2e5dc5-2c80-11e6-8a84-bae50000009d",
      "name": "Изготовитель",
      "type": "string",
      "value": "ООО Компания отдел доставки"
    }
  ]
} 
 ```
