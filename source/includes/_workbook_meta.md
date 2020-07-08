## Метаданные
Одним из ключевых понятий при работе с JSON API является понятие метаданных. 
В JSON API существует несколько типов метаданных:

* метаданные объекта,
* метаданные коллекции,
* метаданные сущности.

Под метаданными объекта (конкретный объект в МоемСкладе, например, товар "Мяч футбольный") понимается краткое представление этого самого объекта в поле `meta`.
Метаданные коллекции представляют элемент, описывающий размер коллекции, размер выборки, который вернулся запросом, пагинацию.
Метаданные сущности описывают поля, относящиеся ко всему классу (например, ко всем товарам): статусы, типы цен, доп.поля и т.д.
 
Рассмотрим перечисленные типы метаданных подробнее.

### Метаданные объекта
Возвращаемые JSON API объекты содержат поле `meta`, которое, по сути, является ссылкой на объект. Однако, `meta` не простое поле, a составной json-элемент, содержащий краткое описание объекта.
Поле `meta` состоит из следующих атрибутов:

* `href` - ссылка на объект;
* `metadataHref` - cсылка на метаданные сущности;
* `type` - тип объекта;
* `mediaType` - тип данных, который приходят в ответ от сервиса, либо отправляется в теле запроса. В рамках данного API всегда равен `application/json`;
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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/ab4dd5fc-d100-11e8-ac12-00080000006d",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=ab4dd5fc-d100-11e8-ac12-00080000006d"
    },
    "id": "ab4dd5fc-d100-11e8-ac12-00080000006d",
    "accountId": "aab5daf6-d100-11e8-ac12-000a00000000",
    "owner": {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/ab306d83-d100-11e8-ac12-000800000042",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=ab306d83-d100-11e8-ac12-000800000042"
        }
    },
    "shared": false,
    "group": {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/aab73291-d100-11e8-ac12-000a00000001",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
            "type": "group",
            "mediaType": "application/json"
        }
    },
    "version": 0,
    "updated": "2018-10-16 08:02:24.000",
    "name": "ООО \"Поставщик\"",
    "externalCode": "42lMvkcLgj6LO6UYJLH9H3",
    "archived": false,
    "created": "2018-10-16 08:02:23.000",
    "companyType": "legal",
    "legalTitle": "Общество с ограниченной ответственностью \"Поставщик\"",
    "legalAddress": "г.Москва, ул.Строителей, д.12",
    "inn": "7736570901",
    "kpp": "773601001",
    "accounts": {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/ab4dd5fc-d100-11e8-ac12-00080000006d/accounts",
            "type": "account",
            "mediaType": "application/json",
            "size": 0,
            "limit": 100,
            "offset": 0
        }
    },
    "tags": [],
    "contactpersons": {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/ab4dd5fc-d100-11e8-ac12-00080000006d/contactpersons",
            "type": "contactperson",
            "mediaType": "application/json",
            "size": 0,
            "limit": 100,
            "offset": 0
        }
    },
    "notes": {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/ab4dd5fc-d100-11e8-ac12-00080000006d/notes",
            "type": "note",
            "mediaType": "application/json",
            "size": 0,
            "limit": 100,
            "offset": 0
        }
    },
    "salesAmount": 0
}
```

В ответе содержится несколько полей `meta`.
Вначале описывается сам объект, с указанием типа объекта, ссылки в JSON API и ссылки на веб-версию

> Запрос

```json
"meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/ab4dd5fc-d100-11e8-ac12-00080000006d",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
    "type": "counterparty",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=ab4dd5fc-d100-11e8-ac12-00080000006d"
}
```

Ссылки на сотрудника, создавшего контрагента, и отдел сотрудника указаны в полях `owner` и `group`, и содержат также поля `meta`.

> Ответ

```json
"owner": {
    "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/ab306d83-d100-11e8-ac12-000800000042",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=ab306d83-d100-11e8-ac12-000800000042"
    }
},
"group": {
    "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/aab73291-d100-11e8-ac12-000a00000001",
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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/ab306d83-d100-11e8-ac12-000800000042",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=ab306d83-d100-11e8-ac12-000800000042"
    },
    "id": "ab306d83-d100-11e8-ac12-000800000042",
    "accountId": "aab5daf6-d100-11e8-ac12-000a00000000",
    "owner": {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/ab306d83-d100-11e8-ac12-000800000042",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=ab306d83-d100-11e8-ac12-000800000042"
        }
    },
    "shared": true,
    "group": {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/aab73291-d100-11e8-ac12-000a00000001",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
            "type": "group",
            "mediaType": "application/json"
        }
    },
    "version": 1,
    "updated": "2018-10-16 08:02:24.000",
    "name": "Администратор",
    "externalCode": "nGxKpV-ejSRXZcxV5ZHau1",
    "archived": false,
    "created": "2018-10-16 08:02:23.000",
    "uid": "admin@b",
    "email": "b@b.ru",
    "lastName": "Администратор",
    "fullName": "Администратор",
    "shortFio": "Администратор",
    "cashier": {
        "id": "ab7ee032-d100-11e8-ac12-00080000007a",
        "accountId": "aab5daf6-d100-11e8-ac12-000a00000000",
        "employee": {
            "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/ab306d83-d100-11e8-ac12-000800000042",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "type": "employee",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=ab306d83-d100-11e8-ac12-000800000042"
            }
        },
        "retailStore": {
            "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/ab7e77a1-d100-11e8-ac12-000800000079",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
                "type": "retailstore",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#retailstore/edit?id=ab7e77a1-d100-11e8-ac12-000800000079"
            }
        }
    }
}
```
Аналогично и для значения из поля `uuidHref` можно открыть объект в веб-версии.
![useful image](../images/meta/owner.png?raw=true)

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
               "href":"https://online.moysklad.ru/api/remap/1.2/entity/product/3b336cc5-d10a-11e8-ac12-000b00000021",
               "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
               "type":"product",
               "mediaType":"application/json",
               "uuidHref":"https://online.moysklad.ru/app/#good/edit?id=3b335997-d10a-11e8-ac12-000b0000001f"
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
{
    "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/bundle/63aa9594-d13f-11e8-ac12-000b00000047?expand=components",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bundle/metadata",
        "type": "bundle",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=63aa8826-d13f-11e8-ac12-000b00000045"
    },
    "id": "63aa9594-d13f-11e8-ac12-000b00000047",
    "accountId": "aab5daf6-d100-11e8-ac12-000a00000000",
    "owner": {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/ab306d83-d100-11e8-ac12-000800000042",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=ab306d83-d100-11e8-ac12-000800000042"
        }
    },
    "shared": true,
    "group": {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/aab73291-d100-11e8-ac12-000a00000001",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
            "type": "group",
            "mediaType": "application/json"
        }
    },
    "version": 0,
    "updated": "2018-10-16 15:31:21.000",
    "name": "Набор карандашей",
    "code": "00012",
    "externalCode": "tzHoMUWWhvekJxhapMxUO3",
    "archived": false,
    "pathName": "",
    "minPrice": 0,
    "salePrices": [
        {
            "value": 0,
            "currency": {
                "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/ab4e7603-d100-11e8-ac12-000800000071",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=ab4e7603-d100-11e8-ac12-000800000071"
                }
            },
            "priceType": "Цена продажи"
        }
    ],
    "weight": 0,
    "volume": 0,
    "barcodes": [
        "2000000000237"
    ],
    "components": {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/bundle/63aa9594-d13f-11e8-ac12-000b00000047/components",
            "type": "bundlecomponent",
            "mediaType": "application/json",
            "size": 1,
            "limit": 100,
            "offset": 0
        },
        "rows": [
            {
                "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/bundle/63aa9594-d13f-11e8-ac12-000b00000047/components/63aa9eb7-d13f-11e8-ac12-000b0000004a",
                    "type": "bundlecomponent",
                    "mediaType": "application/json"
                },
                "id": "63aa9eb7-d13f-11e8-ac12-000b0000004a",
                "accountId": "aab5daf6-d100-11e8-ac12-000a00000000",
                "assortment": {
                    "meta": {
                        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/3b336cc5-d10a-11e8-ac12-000b00000021",
                        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                        "type": "product",
                        "mediaType": "application/json",
                        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b335997-d10a-11e8-ac12-000b0000001f"
                    }
                },
                "quantity": 10
            }
        ]
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
         "href":"https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10",
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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/3b336cc5-d10a-11e8-ac12-000b00000021",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b335997-d10a-11e8-ac12-000b0000001f"
    },
    "id": "3b336cc5-d10a-11e8-ac12-000b00000021",
    "accountId": "aab5daf6-d100-11e8-ac12-000a00000000",
    "owner": {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/ab306d83-d100-11e8-ac12-000800000042",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=ab306d83-d100-11e8-ac12-000800000042"
        }
    },
    "shared": true,
    "group": {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/aab73291-d100-11e8-ac12-000a00000001",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
            "type": "group",
            "mediaType": "application/json"
        }
    },
    "version": 1,
    "updated": "2018-10-16 15:41:02.000",
    "name": "Карандаш",
    "code": "00006",
    "externalCode": "2cqTjWwjh7haLuGaokYLW0",
    "archived": false,
    "pathName": "",
    "syncId": "2b7c97cf-cf77-4f7e-b200-d264125578ab",
    "uom": {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
            "type": "uom",
            "mediaType": "application/json"
        }
    },
    "minPrice": 0,
    "salePrices": [
        {
            "value": 0,
            "currency": {
                "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/ab4e7603-d100-11e8-ac12-000800000071",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=ab4e7603-d100-11e8-ac12-000800000071"
                }
            },
            "priceType": "Цена продажи"
        }
    ],
    "buyPrice": {
        "value": 0,
        "currency": {
            "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/ab4e7603-d100-11e8-ac12-000800000071",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                "type": "currency",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=ab4e7603-d100-11e8-ac12-000800000071"
            }
        }
    },
    "weight": 0.1,
    "volume": 0,
    "barcodes": [
        "2000000000176"
    ],
    "modificationsCount": 0,
    "isSerialTrackable": false
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
    "attributes": [
        {
            "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/attributes/e692a091-4067-11e3-c707-7054d21a8d1e",
                "type": "attributemetadata",
                "mediaType": "application/json"
            },
            "id": "e692a091-4067-11e3-c707-7054d21a8d1e",
            "name": "Дополнительная информация",
            "type": "string",
            "required": false
        }
    ],
    "states": [
        {
            "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/59cfaeaa-77db-41b1-b9a2-58977505b887",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "state",
                "mediaType": "application/json"
            },
            "id": "59cfaeaa-77db-41b1-b9a2-58977505b887",
            "accountId": "45eb22e0-0e7b-11e2-1c31-3c4a92f3a0a7",
            "name": "🐤",
            "color": 12430848,
            "stateType": "Unsuccessful",
            "entityType": "counterparty"
        },
        {
            "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/5766248b-825a-46ad-b025-ba56e727f428",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "state",
                "mediaType": "application/json"
            },
            "id": "5766248b-825a-46ad-b025-ba56e727f428",
            "accountId": "45eb22e0-0e7b-11e2-1c31-3c4a92f3a0a7",
            "name": "🐥",
            "color": 8767198,
            "stateType": "Regular",
            "entityType": "counterparty"
        },
        {
            "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/f90b59c7-4067-11e3-e217-7054d21a8d1e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "state",
                "mediaType": "application/json"
            },
            "id": "f90b59c7-4067-11e3-e217-7054d21a8d1e",
            "accountId": "45eb22e0-0e7b-11e2-1c31-3c4a92f3a0a7",
            "name": "🐔",
            "color": 15106326,
            "stateType": "Regular",
            "entityType": "counterparty"
        }
    ],
    "groups": [
        "Альфа",
        "Бета"
    ],
    "createShared": false
}
``` 
В данном примере по запросу вернулись значения доп.полей, статусов и групп контрагентов.
Подробнее о ресурсе метаданных сущностей можно узнать в [документации](../#mojsklad-json-api-obschie-swedeniq-metadannye).
