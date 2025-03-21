## Что такое expand

В JSON API в составе сущностей поля, которые являются объектами, выводятся в виде метаданных. Для того, чтобы вместо ссылок получить сами 
связанные объекты, не обязательно делать отдельные запросы для каждого из них. Вместо этого, вместе с запросом на получение сущности, нужно 
передать параметр expand. В качестве значения данного параметра нужно перечислить через запятую все необходимые поля, на месте которых вы бы 
хотели видеть объекты. 
#### На expand действуют следующие правила:

* Expand разрешен только на размере выборки не более 100, пример: `https://api.moysklad.ru/api/remap/1.2/entity/customerorder?expand=positions&limit=100`. Если указан больший лимит и указан expand, то параметр expand будет игнорироваться.
* Максимальный уровень вложенности **expand** : 3
* Также **expand** можно применять для результатов операций создания и обновления

Например, у товара есть поле owner (ссылка на Сотрудника), а у сотрудника есть поле group (отдел сотрудника). Запросим товар, чтобы у него 
был развернут owner, а у owner был развернут group.

> Пример запроса на получение с expand

``` shell
curl -X GET "https://api.moysklad.ru/api/remap/1.2/entity/product/0884d27a-b0e3-11ea-ac12-000b00000002?expand=owner,owner.group"
  -u login:password
  -H "Accept-Encoding: gzip" 
  -H "Lognex-Pretty-Print-JSON: true"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Товара с развернутым объектом owner и развернутым объектом group для каждого объекта owner.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0884d27a-b0e3-11ea-ac12-000b00000002?expand=owner,owner.group",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
    "type": "product",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=088303a8-b0e3-11ea-ac12-000b00000000"
  },
  "id": "0884d27a-b0e3-11ea-ac12-000b00000002",
  "accountId": "d865ef6f-b0e2-11ea-ac12-000c00000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d8ed648c-b0e2-11ea-ac12-000d00000034?expand=group",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=d8ed648c-b0e2-11ea-ac12-000d00000034"
    },
    "id": "d8ed648c-b0e2-11ea-ac12-000d00000034",
    "accountId": "d865ef6f-b0e2-11ea-ac12-000c00000001",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d8ed648c-b0e2-11ea-ac12-000d00000034",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=d8ed648c-b0e2-11ea-ac12-000d00000034"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d867701a-b0e2-11ea-ac12-000c00000002",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      },
      "name": "Основной"
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
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/d9ba0e32-b0e2-11ea-ac12-000d00000086/cashiers/d9ba22fe-b0e2-11ea-ac12-000d00000087",
          "type": "cashier",
          "mediaType": "application/json"
        }
      }
    ]
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d867701a-b0e2-11ea-ac12-000c00000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
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
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0884d27a-b0e3-11ea-ac12-000b00000002/images",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/d92fb826-b0e2-11ea-ac12-000d00000077",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
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
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/d92fb826-b0e2-11ea-ac12-000d00000077",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=d92fb826-b0e2-11ea-ac12-000d00000077"
        }
      },
      "priceType": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/d97f0826-b0e2-11ea-ac12-000d00000078",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/d92fb826-b0e2-11ea-ac12-000d00000077",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
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

>  Пример запроса на обновление с expand

``` shell
curl -X PUT "https://api.moysklad.ru/api/remap/1.2/entity/product/0884d27a-b0e3-11ea-ac12-000b00000002?expand=owner,owner.group"
  -u login:password
  -H "Accept-Encoding: gzip" 
  -H "Lognex-Pretty-Print-JSON: true"
  -d '{"name":"Новое наименование"}'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Товара с раскрытыми объектами owner и group.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0884d27a-b0e3-11ea-ac12-000b00000002?expand=owner,owner.group",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
    "type": "product",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=088303a8-b0e3-11ea-ac12-000b00000000"
  },
  "id": "0884d27a-b0e3-11ea-ac12-000b00000002",
  "accountId": "d865ef6f-b0e2-11ea-ac12-000c00000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d8ed648c-b0e2-11ea-ac12-000d00000034?expand=group",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=d8ed648c-b0e2-11ea-ac12-000d00000034"
    },
    "id": "d8ed648c-b0e2-11ea-ac12-000d00000034",
    "accountId": "d865ef6f-b0e2-11ea-ac12-000c00000001",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d8ed648c-b0e2-11ea-ac12-000d00000034",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=d8ed648c-b0e2-11ea-ac12-000d00000034"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d867701a-b0e2-11ea-ac12-000c00000002",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      },
      "name": "Основной"
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
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/d9ba0e32-b0e2-11ea-ac12-000d00000086/cashiers/d9ba22fe-b0e2-11ea-ac12-000d00000087",
          "type": "cashier",
          "mediaType": "application/json"
        }
      }
    ]
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d867701a-b0e2-11ea-ac12-000c00000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2020-06-18 00:39:33.163",
  "name": "Новое наименование",
  "code": "00001",
  "externalCode": "XwJmEyYOhI-Gx9HOtBxih2",
  "archived": false,
  "pathName": "",
  "images": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0884d27a-b0e3-11ea-ac12-000b00000002/images",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/d92fb826-b0e2-11ea-ac12-000d00000077",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
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
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/d92fb826-b0e2-11ea-ac12-000d00000077",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=d92fb826-b0e2-11ea-ac12-000d00000077"
        }
      },
      "priceType": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/d97f0826-b0e2-11ea-ac12-000d00000078",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/d92fb826-b0e2-11ea-ac12-000d00000077",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
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

> Пример запроса на получение с expand множества товаров

``` shell
curl -X GET "https://api.moysklad.ru/api/remap/1.2/entity/product?limit=100&expand=owner,owner.group"
  -u login:password
  -H "Accept-Encoding: gzip" 
  -H "Lognex-Pretty-Print-JSON: true"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Товаров с раскрытыми объектами owner и group.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product?limit=100&expand=owner,owner.group",
    "type": "product",
    "mediaType": "application/json",
    "size": 156,
    "limit": 100,
    "offset": 0,
    "nextHref": "https://api.moysklad.ru/api/remap/1.2/entity/product?expand=owner%2Cowner.group&limit=100&offset=100"
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/2d593ccc-c42e-11ee-ac1b-000e0000010c?expand=owner,owner.group",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=2d5756c9-c42e-11ee-ac1b-000e0000010a"
      },
      "id": "2d593ccc-c42e-11ee-ac1b-000e0000010c",
      "accountId": "081311c2-c42e-11ee-ac1b-000d00000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/09a8ad82-c42e-11ee-ac1b-000e0000004e?expand=group",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=09a8ad82-c42e-11ee-ac1b-000e0000004e"
        },
        "id": "09a8ad82-c42e-11ee-ac1b-000e0000004e",
        "accountId": "081311c2-c42e-11ee-ac1b-000d00000001",
        "owner": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/09a8ad82-c42e-11ee-ac1b-000e0000004e",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=09a8ad82-c42e-11ee-ac1b-000e0000004e"
          }
        },
        "shared": true,
        "group": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/0815b439-c42e-11ee-ac1b-000d00000002",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
            "type": "group",
            "mediaType": "application/json"
          },
          "id": "0815b439-c42e-11ee-ac1b-000d00000002",
          "accountId": "081311c2-c42e-11ee-ac1b-000d00000001",
          "name": "Основной",
          "index": 0
        },
        "updated": "2024-02-05 16:54:10.449",
        "name": "Администратор",
        "externalCode": "SUOW9s68hP6PLywyoQ0NZ1",
        "archived": false,
        "created": "2024-02-05 16:54:10.449",
        "uid": "admin@test",
        "email": "test@test.ru",
        "lastName": "Администратор",
        "fullName": "Администратор",
        "shortFio": "Администратор",
        "cashiers": [
          {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/0a95b483-c42e-11ee-ac1b-000e000000af/cashiers/0a95d547-c42e-11ee-ac1b-000e000000b0",
              "type": "cashier",
              "mediaType": "application/json"
            }
          }
        ]
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/0815b439-c42e-11ee-ac1b-000d00000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2024-02-05 16:55:10.253",
      "name": "товар",
      "code": "00001",
      "externalCode": "gSE0bU52hre8DeweVoba50",
      "archived": false,
      "pathName": "",
      "useParentVat": true,
      "uom": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        }
      },
      "images": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/2d593ccc-c42e-11ee-ac1b-000e0000010c/images",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/0a1b4b87-c42e-11ee-ac1b-000e0000009d",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=0a1b4b87-c42e-11ee-ac1b-000e0000009d"
          }
        }
      },
      "salePrices": [
        {
          "value": 0.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/0a1b4b87-c42e-11ee-ac1b-000e0000009d",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json",
              "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=0a1b4b87-c42e-11ee-ac1b-000e0000009d"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/0a618fd0-c42e-11ee-ac1b-000e0000009e",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "0a618fd0-c42e-11ee-ac1b-000e0000009e",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        }
      ],
      "buyPrice": {
        "value": 0.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/0a1b4b87-c42e-11ee-ac1b-000e0000009d",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=0a1b4b87-c42e-11ee-ac1b-000e0000009d"
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
      "trackingType": "NOT_TRACKED",
      "files": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/2d593ccc-c42e-11ee-ac1b-000e0000010c/files",
          "type": "files",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/372e30d3-c42e-11ee-ac1b-000e00000113?expand=owner,owner.group",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=372e1b39-c42e-11ee-ac1b-000e00000111"
      },
      "id": "372e30d3-c42e-11ee-ac1b-000e00000113",
      "accountId": "081311c2-c42e-11ee-ac1b-000d00000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/09a8ad82-c42e-11ee-ac1b-000e0000004e?expand=group",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=09a8ad82-c42e-11ee-ac1b-000e0000004e"
        },
        "id": "09a8ad82-c42e-11ee-ac1b-000e0000004e",
        "accountId": "081311c2-c42e-11ee-ac1b-000d00000001",
        "owner": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/09a8ad82-c42e-11ee-ac1b-000e0000004e",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=09a8ad82-c42e-11ee-ac1b-000e0000004e"
          }
        },
        "shared": true,
        "group": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/0815b439-c42e-11ee-ac1b-000d00000002",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
            "type": "group",
            "mediaType": "application/json"
          },
          "id": "0815b439-c42e-11ee-ac1b-000d00000002",
          "accountId": "081311c2-c42e-11ee-ac1b-000d00000001",
          "name": "Основной",
          "index": 0
        },
        "updated": "2024-02-05 16:54:10.449",
        "name": "Администратор",
        "externalCode": "SUOW9s68hP6PLywyoQ0NZ1",
        "archived": false,
        "created": "2024-02-05 16:54:10.449",
        "uid": "admin@test",
        "email": "test@test.ru",
        "lastName": "Администратор",
        "fullName": "Администратор",
        "shortFio": "Администратор",
        "cashiers": [
          {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/0a95b483-c42e-11ee-ac1b-000e000000af/cashiers/0a95d547-c42e-11ee-ac1b-000e000000b0",
              "type": "cashier",
              "mediaType": "application/json"
            }
          }
        ]
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/0815b439-c42e-11ee-ac1b-000d00000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2024-02-20 08:54:29.936",
      "name": "материал",
      "code": "00002",
      "externalCode": "9gDTKYyXikO3IhAArG4sL0",
      "archived": false,
      "pathName": "",
      "useParentVat": true,
      "uom": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        }
      },
      "images": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/372e30d3-c42e-11ee-ac1b-000e00000113/images",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/0a1b4b87-c42e-11ee-ac1b-000e0000009d",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=0a1b4b87-c42e-11ee-ac1b-000e0000009d"
          }
        }
      },
      "salePrices": [
        {
          "value": 0.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/0a1b4b87-c42e-11ee-ac1b-000e0000009d",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json",
              "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=0a1b4b87-c42e-11ee-ac1b-000e0000009d"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/0a618fd0-c42e-11ee-ac1b-000e0000009e",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "0a618fd0-c42e-11ee-ac1b-000e0000009e",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        }
      ],
      "buyPrice": {
        "value": 0.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/0a1b4b87-c42e-11ee-ac1b-000e0000009d",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=0a1b4b87-c42e-11ee-ac1b-000e0000009d"
          }
        }
      },
      "barcodes": [
        {
          "ean13": "2000000000022"
        }
      ],
      "paymentItemType": "GOOD",
      "discountProhibited": false,
      "weight": 0.0,
      "volume": 0.0,
      "variantsCount": 0,
      "isSerialTrackable": false,
      "trackingType": "NOT_TRACKED",
      "files": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/372e30d3-c42e-11ee-ac1b-000e00000113/files",
          "type": "files",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/6c4f3e66-e14d-11ee-ac1b-000f00000235?expand=owner,owner.group",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=6c4f2dcc-e14d-11ee-ac1b-000f00000233"
      },
      "id": "6c4f3e66-e14d-11ee-ac1b-000f00000235",
      "accountId": "081311c2-c42e-11ee-ac1b-000d00000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/09a8ad82-c42e-11ee-ac1b-000e0000004e?expand=group",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=09a8ad82-c42e-11ee-ac1b-000e0000004e"
        },
        "id": "09a8ad82-c42e-11ee-ac1b-000e0000004e",
        "accountId": "081311c2-c42e-11ee-ac1b-000d00000001",
        "owner": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/09a8ad82-c42e-11ee-ac1b-000e0000004e",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=09a8ad82-c42e-11ee-ac1b-000e0000004e"
          }
        },
        "shared": true,
        "group": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/0815b439-c42e-11ee-ac1b-000d00000002",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
            "type": "group",
            "mediaType": "application/json"
          },
          "id": "0815b439-c42e-11ee-ac1b-000d00000002",
          "accountId": "081311c2-c42e-11ee-ac1b-000d00000001",
          "name": "Основной",
          "index": 0
        },
        "updated": "2024-02-05 16:54:10.449",
        "name": "Администратор",
        "externalCode": "SUOW9s68hP6PLywyoQ0NZ1",
        "archived": false,
        "created": "2024-02-05 16:54:10.449",
        "uid": "admin@test",
        "email": "test@test.ru",
        "lastName": "Администратор",
        "fullName": "Администратор",
        "shortFio": "Администратор",
        "cashiers": [
          {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/0a95b483-c42e-11ee-ac1b-000e000000af/cashiers/0a95d547-c42e-11ee-ac1b-000e000000b0",
              "type": "cashier",
              "mediaType": "application/json"
            }
          }
        ]
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/0815b439-c42e-11ee-ac1b-000d00000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2024-03-13 18:21:54.071",
      "name": "123 (2) (3) (3) (3)",
      "code": "00105",
      "externalCode": "YOOuUeNqjRQ0yVCsK9Yys0",
      "archived": false,
      "pathName": "",
      "useParentVat": true,
      "uom": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        }
      },
      "images": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/6c4f3e66-e14d-11ee-ac1b-000f00000235/images",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/0a1b4b87-c42e-11ee-ac1b-000e0000009d",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=0a1b4b87-c42e-11ee-ac1b-000e0000009d"
          }
        }
      },
      "salePrices": [
        {
          "value": 0.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/0a1b4b87-c42e-11ee-ac1b-000e0000009d",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json",
              "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=0a1b4b87-c42e-11ee-ac1b-000e0000009d"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/0a618fd0-c42e-11ee-ac1b-000e0000009e",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "0a618fd0-c42e-11ee-ac1b-000e0000009e",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        }
      ],
      "buyPrice": {
        "value": 0.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/0a1b4b87-c42e-11ee-ac1b-000e0000009d",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=0a1b4b87-c42e-11ee-ac1b-000e0000009d"
          }
        }
      },
      "barcodes": [
        {
          "ean13": "2000000001135"
        }
      ],
      "paymentItemType": "GOOD",
      "discountProhibited": false,
      "weight": 0.0,
      "volume": 0.0,
      "variantsCount": 0,
      "isSerialTrackable": false,
      "trackingType": "NOT_TRACKED",
      "files": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/6c4f3e66-e14d-11ee-ac1b-000f00000235/files",
          "type": "files",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      }
    }
  ]
}
```

Больше примеров и информации можно найти в разделе [замена ссылок объектами с помощью expand.](../#mojsklad-json-api-obschie-swedeniq-zamena-ssylok-ob-ektami-s-pomosch-u-expand)
