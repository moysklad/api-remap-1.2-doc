## Метаданные
Одним из ключевых понятий при работе с JSON API является понятие метаданных. 
В JSON API существует несколько типов метаданных:

* метаданные объекта,
* метаданные коллекции,
* метаданные сущности.

Под метаданными объекта (конкретный объект в МоемСкладе, например, товар "Мяч футбольный") понимается краткое представление этого самого объекта в 
поле `meta`.
Метаданные коллекции представляют элемент, описывающий размер коллекции, размер выборки, который вернулся запросом, пагинацию.
Метаданные сущности описывают поля, относящиеся ко всему классу (например, ко всем товарам): статусы, типы цен, доп.поля и т.д.
 
Рассмотрим перечисленные типы метаданных подробнее.

### Метаданные объекта
Возвращаемые JSON API объекты содержат поле `meta`, которое, по сути, является ссылкой на объект. Однако, `meta` не простое поле, a составной 
json-элемент, содержащий краткое описание объекта.
Поле `meta` состоит из следующих атрибутов:

* `href` - ссылка на объект;
* `metadataHref` - cсылка на метаданные сущности;
* `downloadHref` - ссылка на скачивание
* `type` - тип объекта;
* `mediaType` - тип данных, который приходят в ответ от сервиса, либо отправляется в теле запроса;
* `uuidHref` - cсылка на объект в веб-версии МоегоСклада. Присутствует не во всех сущностях.

Рассмотрим запрос контрагента `ООО "Поставщик"`

> Запрос

```shell
curl -X GET 
  https://online.moysklad.ru/api/remap/1.2/entity/counterparty/ab4dd5fc-d100-11e8-ac12-00080000006d 
  -H 'Authorization: Bearer <Access-Token>' 
  -H 'Cache-Control: no-cache'
```

> Ответ

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/d92bcdc1-b0e2-11ea-ac12-000d00000073",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
    "type": "counterparty",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=d92bcdc1-b0e2-11ea-ac12-000d00000073"
  },
  "id": "d92bcdc1-b0e2-11ea-ac12-000d00000073",
  "accountId": "d865ef6f-b0e2-11ea-ac12-000c00000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/d8ed648c-b0e2-11ea-ac12-000d00000034",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=d8ed648c-b0e2-11ea-ac12-000d00000034"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/d867701a-b0e2-11ea-ac12-000c00000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2020-06-18 00:38:14.083",
  "name": "ООО \"Поставщик\"",
  "externalCode": "nv4UeR5dhAStZ4X-5-ojn2",
  "archived": false,
  "created": "2020-06-18 00:38:14.083",
  "companyType": "legal",
  "legalTitle": "Общество с ограниченной ответственностью \"Поставщик\"",
  "legalAddress": "г.Москва, ул.Строителей, д.12",
  "legalAddressFull": {
    "addInfo": "г.Москва, ул.Строителей, д.12"
  },
  "inn": "7736570901",
  "kpp": "773601001",
  "accounts": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/d92bcdc1-b0e2-11ea-ac12-000d00000073/accounts",
      "type": "account",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "tags": [],
  "contactpersons": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/d92bcdc1-b0e2-11ea-ac12-000d00000073/contactpersons",
      "type": "contactperson",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "notes": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/d92bcdc1-b0e2-11ea-ac12-000d00000073/notes",
      "type": "note",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "salesAmount": 0.0
}
```

В ответе содержится несколько полей `meta`.
Вначале описывается сам объект, с указанием типа объекта, ссылки в JSON API и ссылки на веб-версию

> Метаданные поставщика

```json
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/d92bcdc1-b0e2-11ea-ac12-000d00000073",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
    "type": "counterparty",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=d92bcdc1-b0e2-11ea-ac12-000d00000073"
  }
```

Ссылки на сотрудника, создавшего контрагента, и отдел сотрудника указаны в полях `owner` и `group`, и содержат также поля `meta`.

> Метаданные сорудника и его отдела

```json
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/d8ed648c-b0e2-11ea-ac12-000d00000034",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=d8ed648c-b0e2-11ea-ac12-000d00000034"
    }
  },
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/d867701a-b0e2-11ea-ac12-000c00000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  }
```

Очевидно, что поля `href` и `uuidHref` содержат url для доступа к объектам и могут быть использованы для запроса.
Например, используя значение поля `href`, запросим данные сотрудника

> Запрос

```shell
curl -X GET 
  https://online.moysklad.ru/api/remap/1.2/entity/employee/ab306d83-d100-11e8-ac12-000800000042 
  -H 'Authorization: Bearer <Access-Token>' 
  -H 'Cache-Control: no-cache'
```

> Ответ

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/d8ed648c-b0e2-11ea-ac12-000d00000034",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
    "type": "employee",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=d8ed648c-b0e2-11ea-ac12-000d00000034"
  },
  "id": "d8ed648c-b0e2-11ea-ac12-000d00000034",
  "accountId": "d865ef6f-b0e2-11ea-ac12-000c00000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/d8ed648c-b0e2-11ea-ac12-000d00000034",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=d8ed648c-b0e2-11ea-ac12-000d00000034"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/d867701a-b0e2-11ea-ac12-000c00000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2020-06-18 00:38:13.655",
  "name": "123",
  "externalCode": "bCdnwOjliLRTxAp8277Xm1",
  "archived": false,
  "created": "2020-06-18 00:38:13.655",
  "uid": "admin@123",
  "email": "123@123.ru",
  "lastName": "123",
  "fullName": "123",
  "shortFio": "123",
  "cashiers": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/d9ba0e32-b0e2-11ea-ac12-000d00000086/cashiers/d9ba22fe-b0e2-11ea-ac12-000d00000087",
        "type": "cashier",
        "mediaType": "application/json"
      }
    }
  ]
}
```
Аналогично и для значения из поля `uuidHref` можно открыть объект в веб-версии.
![useful image](../../images/meta/owner.png?raw=true)

#### Использование meta при создании/изменении объекта
`meta` используется в качестве ссылки на другой объект, рассмотрим на примерах.

Имея метаданные товара
```json
"meta":{
   "href":"https://online.moysklad.ru/api/remap/1.2/entity/product/3b336cc5-d10a-11e8-ac12-000b00000021",
   "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
   "type":"product",
   "mediaType":"application/json",
   "uuidHref":"https://online.moysklad.ru/app/#good/edit?id=3b335997-d10a-11e8-ac12-000b0000001f"
}
```
выполним запрос на создание комплекта, указав товар в компонентах

> Запрос

```shell
curl -X POST 
  'https://online.moysklad.ru/api/remap/1.2/entity/bundle?expand=components' 
  -H 'Authorization: Bearer <Access-Token>' 
  -H 'Cache-Control: no-cache' 
  -H 'Content-Type: application/json' 
  -d '{
   "name":"Набор карандашей",
   "components":[
      {
         "assortment":{
            "meta":{
               "href":"https://online.moysklad.ru/api/remap/1.2/entity/product/0884d27a-b0e3-11ea-ac12-000b00000002",
               "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
               "type":"product",
               "mediaType":"application/json",
               "uuidHref":"https://online.moysklad.ru/app/#good/edit?id=088303a8-b0e3-11ea-ac12-000b00000000"
            }
         },
         "quantity":10
      }
   ]
}'
```

В ответ получим новый комплект, который содержит указанный товар

> Результат

```json

  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/bundle/e5da18eb-b152-11ea-ac12-000c00000002",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
    "type": "bundle",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e5d864ae-b152-11ea-ac12-000c00000000"
  },
  "id": "e5da18eb-b152-11ea-ac12-000c00000002",
  "accountId": "d865ef6f-b0e2-11ea-ac12-000c00000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/d8ed648c-b0e2-11ea-ac12-000d00000034",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=d8ed648c-b0e2-11ea-ac12-000d00000034"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/d867701a-b0e2-11ea-ac12-000c00000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2020-06-18 14:00:18.664",
  "name": "Набор карандашей",
  "code": "00002",
  "externalCode": "V1kq3O3YhBcImmYCE7jxf3",
  "archived": false,
  "pathName": "",
  "images": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/bundle/e5da18eb-b152-11ea-ac12-000c00000002/images",
      "type": "image",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "minPrice": {
    "value": 0.0,
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/d92fb826-b0e2-11ea-ac12-000d00000077",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=d92fb826-b0e2-11ea-ac12-000d00000077"
      }
    }
  },
  "salePrices": [
    {
      "value": 0.0,
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/d92fb826-b0e2-11ea-ac12-000d00000077",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=d92fb826-b0e2-11ea-ac12-000d00000077"
        }
      },
      "priceType": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/d97f0826-b0e2-11ea-ac12-000d00000078",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "d97f0826-b0e2-11ea-ac12-000d00000078",
        "name": "Цена продажи",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
      }
    }
  ],
  "barcodes": [
    {
      "ean13": "2000000000039"
    }
  ],
  "paymentItemType": "GOOD",
  "discountProhibited": false,
  "weight": 0.0,
  "volume": 0.0,
  "trackingType": "NOT_TRACKED",
  "components": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/bundle/e5da18eb-b152-11ea-ac12-000c00000002/components",
      "type": "bundlecomponent",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

Изменим товар, указав ему единицу измерения. При условии, что у товара еще не указана единица измерения.

> Запрос

```shell
curl -X PUT 
  https://online.moysklad.ru/api/remap/1.2/entity/product/3b336cc5-d10a-11e8-ac12-000b00000021 
  -H 'Authorization: Bearer <Access-Token>' 
  -H 'Cache-Control: no-cache' 
  -H 'Content-Type: application/json' 
  -d '{
   "uom":{
      "meta":{
         "href":"https://online.moysklad.ru/api/remap/1.2/entity/uom/061721df-9197-49a5-b637-7f5b4d3be969",
         "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
         "type":"uom",
         "mediaType":"application/json"
      }
   }
}'
```

В ответе видно, что единица измерения, поле `uom`, изменилось на переданный объект.

> Ответ

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/0884d27a-b0e3-11ea-ac12-000b00000002",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
    "type": "product",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=088303a8-b0e3-11ea-ac12-000b00000000"
  },
  "id": "0884d27a-b0e3-11ea-ac12-000b00000002",
  "accountId": "d865ef6f-b0e2-11ea-ac12-000c00000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/d8ed648c-b0e2-11ea-ac12-000d00000034",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=d8ed648c-b0e2-11ea-ac12-000d00000034"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/d867701a-b0e2-11ea-ac12-000c00000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2020-06-18 00:39:33.163",
  "name": "чудо товар",
  "code": "00001",
  "externalCode": "XwJmEyYOhI-Gx9HOtBxih2",
  "archived": false,
  "pathName": "",
  "images": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/0884d27a-b0e3-11ea-ac12-000b00000002/images",
      "type": "image",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "minPrice": {
    "value": 0.0,
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/d92fb826-b0e2-11ea-ac12-000d00000077",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=d92fb826-b0e2-11ea-ac12-000d00000077"
      }
    }
  },
  "salePrices": [
    {
      "value": 0.0,
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/d92fb826-b0e2-11ea-ac12-000d00000077",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=d92fb826-b0e2-11ea-ac12-000d00000077"
        }
      },
      "priceType": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/d97f0826-b0e2-11ea-ac12-000d00000078",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "d97f0826-b0e2-11ea-ac12-000d00000078",
        "name": "Цена продажи",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
      }
    }
  ],
  "buyPrice": {
    "value": 0.0,
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/d92fb826-b0e2-11ea-ac12-000d00000077",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=d92fb826-b0e2-11ea-ac12-000d00000077"
      }
    }
  },
  "barcodes": [
    {
      "ean13": "2000000000015"
    }
  ],
  "paymentItemType": "GOOD",
  "discountProhibited": false,
  "weight": 0.0,
  "volume": 0.0,
  "variantsCount": 0,
  "isSerialTrackable": false,
  "trackingType": "NOT_TRACKED"
}
```

### Метаданные коллекции
Для работы с пагинацией у коллекций в JSON API формируется несколько иное поле `meta`.
Поле `meta` коллекций содержит частично те же атрибуты (`href`, `type`, `mediaType`), что и `meta` объектов, и ряд собственных атрибутов:

* `size` - количество элементов в коллекции,
* `limit` - максмимальное число элементов в коллекции, возвращаемых за один запрос,
* `offset` - смещение выборки коллекции от первого элемента.

Например, при запросе вебхуков

> Запрос

```shell
curl -X GET 
  https://online.moysklad.ru/api/remap/1.2/entity/webhook 
  -H 'Authorization: Bearer <Access-Token>' 
  -H 'Cache-Control: no-cache'
```

будет следующий ответ

> Ответ

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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhook",
        "type": "webhook",
        "mediaType": "application/json",
        "size": 1,
        "limit": 25,
        "offset": 0
    },
    "rows": [
        {
            "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/01205b84-072c-11e8-6b01-4b1d0010fff6",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/metadata",
                "type": "webhook",
                "mediaType": "application/json"
            },
            "id": "01205b84-072c-11e8-6b01-4b1d0010fff6",
            "accountId": "45eb22e0-0e7b-11e2-1c31-3c4a92f3a0a7",
            "entityType": "product",
            "url": "https://webhook.site/40adcf20-83de-4bb0-9072-6a98fe96bc44",
            "method": "POST",
            "enabled": false,
            "action": "CREATE"
        }
    ]
}
```

где видно, что коллекция содержит один элемент, и `size` также имеет значение равное 1.

Если значение атрибута `size` больше `limit`, то дополнительно выводятся атрибуты пагинации:

* `nextHref` - ссылка на следующую страницу коллекции,
* `previousHref` - ссылка на предыдущую страницу коллекции.

Добавим новые вебхуки и запросим их, но с лимитом равным 1

> Запрос

```shell
curl -X GET 
  'https://online.moysklad.ru/api/remap/1.2/entity/webhook?limit=1' 
  -H 'Authorization: Bearer <Access-Token>' 
  -H 'Cache-Control: no-cache'
  ```
  
> Ответ  
  
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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhook?limit=1",
        "type": "webhook",
        "mediaType": "application/json",
        "size": 3,
        "limit": 1,
        "offset": 0,
        "nextHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhook?limit=1&offset=1"
    },
    "rows": [
        {
            "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/01205b84-072c-11e8-6b01-4b1d0010fff6",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/metadata",
                "type": "webhook",
                "mediaType": "application/json"
            },
            "id": "01205b84-072c-11e8-6b01-4b1d0010fff6",
            "accountId": "45eb22e0-0e7b-11e2-1c31-3c4a92f3a0a7",
            "entityType": "product",
            "url": "https://webhook.site/40adcf20-83de-4bb0-9072-6a98fe96bc44",
            "method": "POST",
            "enabled": false,
            "action": "CREATE"
        }
    ]
}
```

Применив лимит, была сформирована ссылка пагинации `nextHref` на следующую страницу коллекции. Перейдем по ней.

> Запрос

```shell
curl -X GET 
  'https://online.moysklad.ru/api/remap/1.2/entity/webhook?limit=1&offset=1' 
  -H 'Authorization: Bearer <Access-Token>' 
  -H 'Cache-Control: no-cache'
``` 

> Ответ

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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhook?limit=1&offset=1",
        "type": "webhook",
        "mediaType": "application/json",
        "size": 3,
        "limit": 1,
        "offset": 1,
        "nextHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhook?offset=2&limit=1",
        "previousHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhook?offset=0&limit=1"
    },
    "rows": [
        {
            "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/07598ccd-072c-11e8-7a6c-d2a90010c896",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/webhook/metadata",
                "type": "webhook",
                "mediaType": "application/json"
            },
            "id": "07598ccd-072c-11e8-7a6c-d2a90010c896",
            "accountId": "45eb22e0-0e7b-11e2-1c31-3c4a92f3a0a7",
            "entityType": "variant",
            "url": "https://webhook-convert.ru/ms2s/T053UB0V8/B7WHWQTFF/yiTBjO5xoeuv6pXJOH1TLeBe",
            "method": "POST",
            "enabled": false,
            "action": "UPDATE"
        }
    ]
}
```
Как видим, были сформированы ссылки пагинации, доступные для перехода на следующую и предыдущую страницы коллекции.

### Метаданные сущности
Кроме использования поля метаданных в качестве внешней ссылки и представления коллекции, метаданные могут описывать непосредственно сами сущности.
Как правило, это описание вложенных сущностей, коллекций и дополнительных полей. 
Чтобы получить метаданные сущности, необходимо использовать ссылку из поля `metadataHref`.
Запросим метаданные сущности контрагента из примера выше

> Запрос

```shell
curl -X GET 
  https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata 
  -H 'Authorization: Bearer <Access-Token>' 
  -H 'Cache-Control: no-cache'
```

> Ответ

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
    "mediaType": "application/json"
  },
  "attributes": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/attributes",
      "type": "attributemetadata",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "states": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/d9ddf453-b0e2-11ea-ac12-000d0000008c",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "d9ddf453-b0e2-11ea-ac12-000d0000008c",
      "accountId": "d865ef6f-b0e2-11ea-ac12-000c00000001",
      "name": "Новый",
      "color": 15106326,
      "stateType": "Regular",
      "entityType": "counterparty"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/d9de00ec-b0e2-11ea-ac12-000d0000008d",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "d9de00ec-b0e2-11ea-ac12-000d0000008d",
      "accountId": "d865ef6f-b0e2-11ea-ac12-000c00000001",
      "name": "Выслано предложение",
      "color": 10774205,
      "stateType": "Regular",
      "entityType": "counterparty"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/d9de03fc-b0e2-11ea-ac12-000d0000008e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "d9de03fc-b0e2-11ea-ac12-000d0000008e",
      "accountId": "d865ef6f-b0e2-11ea-ac12-000c00000001",
      "name": "Переговоры",
      "color": 40931,
      "stateType": "Regular",
      "entityType": "counterparty"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/d9de06e1-b0e2-11ea-ac12-000d0000008f",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "d9de06e1-b0e2-11ea-ac12-000d0000008f",
      "accountId": "d865ef6f-b0e2-11ea-ac12-000c00000001",
      "name": "Сделка заключена",
      "color": 8825440,
      "stateType": "Successful",
      "entityType": "counterparty"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/d9de09b0-b0e2-11ea-ac12-000d00000090",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "d9de09b0-b0e2-11ea-ac12-000d00000090",
      "accountId": "d865ef6f-b0e2-11ea-ac12-000c00000001",
      "name": "Сделка не заключена",
      "color": 15280409,
      "stateType": "Unsuccessful",
      "entityType": "counterparty"
    }
  ],
  "createShared": false
}
``` 
В данном примере по запросу вернулись значения доп.полей, статусов и групп контрагентов.
Подробнее о ресурсе метаданных сущностей можно узнать в [документации](../#mojsklad-json-api-obschie-swedeniq-metadannye).
