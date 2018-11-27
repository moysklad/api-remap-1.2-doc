<!-- include(metadata.apib) -->

# Услуга
Средствами JSON API можно создавать и обновлять сведения об Услугах, запрашивать списки Услуг и сведения по отдельным Услугам. Кодом сущности для Услуги в составе JSON API является ключевое слово **service**. Услуга - специальная разновидность товара, без закупочной цены и упаковок. Больше о Товарах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки в разделе
 [Товары и склад](https://support.moysklad.ru/hc/ru/sections/200564973-%D0%A2%D0%BE%D0%B2%D0%B0%D1%80%D1%8B-%D0%B8-%D1%81%D0%BA%D0%BB%D0%B0%D0%B4).

По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](/api/remap/1.2/doc/index.html#header-контекстный-поиск).

Поиск среди объектов услуг на соответствие поисковой строке будет осуществлён по следующим полям:
+ по наименованию Услуги **name**
+ по коду Услуги **code**

## Услуги [/entity/service]
### Атрибуты сущности
+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) объекта
+ **id** - ID Услуги в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
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
+ **attributes** - Дополнительные поля Услуги в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **buyPrice** - Закупочная цена

Атрибут **pathName** сам по себе является атрибутом только для чтения, однако его можно изменить
с помощью обновления атрибута **productFolder**.

### Атрибуты вложенных сущностей

### Метаданные Услуг
Метаданные Услуг содержат информацию о дополнительных полях.

Посмотреть все созданные в основном интерфейсе доп. поля Услуг,
а также все типы цен можно с помощью запроса на получение метаданных Услуг.
Ответ - объект, со следующей структурой:
+ **meta** - Метаданные
+ **attributes** - коллекция всех существующих доп. полей Услуг в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)

Структуры объектов отдельных коллекций:

О работе с доп. полями Услуг можно прочитать [здесь](/api/remap/1.2/doc/index.html#header-работа-с-дополнительными-полями)

#### Цены продажи
+ **value** - Значение цены
+ **currency** - Ссылка на валюту в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **priceType** - Тип цены

#### Закупочная цена
+ **value** - Значение цены
+ **currency** - Ссылка на валюту в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)

#### Минимальная цена
+ **value** - Значение цены
+ **currency** - Ссылка на валюту в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)

#### Группа Услуги
+ **meta** - Метаданные, содержащие ссылку на группу Услуги.
Описание сущности Группа вы можете посмотреть [здесь](/api/remap/1.2/doc/productFolder.html#группа-товаров-группы-товаров).
Обновление этого атрибута также обновит атрибут **pathName**.

#### Особенности фильтрации поля archived
Если одновременно осуществляется фильтрация по полям **id** и **archived**, то фильтрация по полю **archived** не учитывается.


### Получить список Услуг [GET]
Запрос на получение всех Услуг для данной учётной записи.
Результат: Объект JSON, включающий в себя поля:
|   |   | 
|---|---|
|meta   |[Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче   |
|context   |[Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос   |
|rows   |Массив JSON объектов, представляющих собой [Услуги](#услуга-услуги)   |

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить список услуг

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/service"
  -H "Authorization: Basic <Access-Token>"
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
            "href": "https://online.moysklad.ru/api/remap/1.1/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.1/entity/currency/metadata",
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
            "href": "https://online.moysklad.ru/api/remap/1.1/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.1/entity/currency/metadata",
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

### Создать Услугу[POST]
Создать новую Услугу.
### Описание
Услуга создаётся на основе переданного объекта JSON,
который содержит представление новой Услуги.
Результат - JSON представление созданной Услуги. Для создания новой Услуги,
необходимо и достаточно указать в переданном объекте не пустое поле `name`

+ Request Пример 1 (application/json)
Пример наиболее полного по количеству полей запроса.
  + Body
        <!-- include(body/service/post_request_long.json) -->


+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Услуги.
  + Body
        <!-- include(body/service/post_long_response.json) -->


+ Request Пример 2 (application/json)
Пример запроса на создание Услуги с единственным необходимым полем.
  + Body
        <!-- include(body/service/post_request_short.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Услуги.
  + Body
        <!-- include(body/service/post_short_response.json) -->

+ Request Пример с доп. полями (application/json)
Пример запроса на создание Услуги с доп. полями.
  + Body
        <!-- include(body/service/post_with_attributes_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Услуги.
  + Body
        <!-- include(body/service/post_with_attributes_response.json) -->

### Массовое создание и обновление Услуг [POST]
[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) Услуг.
В теле запроса нужно передать массив, содержащий JSON представления Услуг, которые вы хотите создать или обновить.
Обновляемые Услуги должны содержать идентификатор в виде метаданных.

+ Request Пример (application/json)
Пример создания и обновления нескольких Услуг
  + Body
        <!-- include(body/service/post_massive_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Услуг.
  + Body
        <!-- include(body/service/post_massive_response.json) -->


### Удалить Услугу [DELETE /entity/service/{id}]
+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Услуги

Запрос на удаление Услуги с указанным id.

+ Response 200 (application/json)
Успешное удаление Услуги.

## Метаданные Услуг [/entity/service/metadata]
### Метаданные Услуг [GET]
Запрос на получение метаданных Услуг. Результат - объект JSON, включающий в себя:
+ **meta** - Метаданные
+ **attributes** - коллекция всех существующих доп. полей Услуг в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](/api/remap/1.2/doc/index.html#header-работа-с-дополнительными-полями).

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Услуг.
  + Body
        <!-- include(body/service/get_metadata.json) -->

## Отдельное доп. поле [/entity/service/metadata/attributes/{id}]
+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Доп. поля
### Отдельное доп. поле [GET]
Запрос на получение информации по отдельному дополнительному полю.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.
  + Body
        <!-- include(body/service/metadata_by_id.json) -->

## Услуга [/entity/service/{id}]
Отдельная Услуга, обращение к которой происходит по значению его id.

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Услуги.

### Получить Услугу[GET]
Запрос на получение Услуги с указанным id.

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление Услуги.
  + Body
        <!-- include(body/service/get_by_id_response.json) -->

### Изменить Услугу[PUT]
Обновить существующую Услугу.
Типы цен в ценах продаж и дополнительные поля обновляются как элементы вложенных коллекций:
+ Если в текущем объекте у какого-то из доп. полей / типов цен нет значения,
а в переданной коллекции оно есть - значение записывается в доп. поле / тип цены.
+ Если же у данного атрибута значение уже присутствует - оно перезаписывается на переданное.
+ Если у данного атрибута в составе объекта значение присутствует, однако оно отсутствует
в передаваемой в теле запроса коллекции (не передаётся совсем), то значение атрибута объекта не изменяется.

+ Request Пример (application/json)
Пример запроса на обновление Услуги
  + Body
        <!-- include(body/service/put_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённой Услуги.
  + Body
        <!-- include(body/service/put_response.json) -->
+ Request Пример с доп. полями (application/json)
Пример запроса на изменение Услуги с дополнительными полями.
  + Body
        <!-- include(body/service/put_with_attributes_request.json) -->
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённой Услуги.
  + Body
        <!-- include(body/service/put_with_attributes_response.json) -->
