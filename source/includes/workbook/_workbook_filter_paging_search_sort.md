## Фильтрация, листание, поиск и сортировка

### Фильтрация

Для фильтрации выборки по нескольким полям используется url параметр filter. Значение этого параметра - urlencoded строка с поисковыми 
условиями, перечисленными через ';'. Каждое поисковое условие - это сочетание названия поля, оператора и константы. 
Фильтрация недоступна для полей-массивов (например поле **barcodes**).Фильтрация товаров по имени и 
времени обновления "filter=name=Новое наименование;filter=updated&gt;2018-01-01 00:00:00"

> Запрос

``` shell
curl -X GET 
  -u login:password
  -H "Accept-Encoding: gzip" 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://api.moysklad.ru/api/remap/1.2/entity/product?filter=name=Просто замечательный товар;updated>2018-01-01 00:00:00"
```

> Ответ:

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/6b44332f-b0ac-11ea-ac14-000a00000002",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
    "type": "product",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=6b3fd459-b0ac-11ea-ac14-000a00000000"
  },
  "id": "6b44332f-b0ac-11ea-ac14-000a00000002",
  "accountId": "17e26927-b0ac-11ea-ac14-000d00000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/19113b38-b0ac-11ea-ac14-000c00000034",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=19113b38-b0ac-11ea-ac14-000c00000034"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/17e5e244-b0ac-11ea-ac14-000d00000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2020-06-17 18:08:32.000",
  "name": "Просто замечательный товар",
  "code": "00001",
  "externalCode": "hNDALaQDh6E96GubbHybr0",
  "archived": false,
  "pathName": "",
  "images": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/6b44332f-b0ac-11ea-ac14-000a00000002/images",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/199e466a-b0ac-11ea-ac14-000c00000077",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=199e466a-b0ac-11ea-ac14-000c00000077"
      }
    }
  },
  "salePrices": [
    {
      "value": 0.0,
      "currency": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/199e466a-b0ac-11ea-ac14-000c00000077",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=199e466a-b0ac-11ea-ac14-000c00000077"
        }
      },
      "priceType": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/1a1d768e-b0ac-11ea-ac14-000c00000078",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "1a1d768e-b0ac-11ea-ac14-000c00000078",
        "name": "Цена продажи",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
      }
    }
  ],
  "buyPrice": {
    "value": 0.0,
    "currency": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/199e466a-b0ac-11ea-ac14-000c00000077",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=199e466a-b0ac-11ea-ac14-000c00000077"
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


### Листание

Большинство списков и отчетов поддерживают листание. За него отвечают два параметра:

-   **offset** — смещение от первого элемента (считается с нуля);
-   **limit** — количество элементов на странице (по умолчанию 1000, максимум 1000).

Если при запросе списка, возвращаются не все элементы, в метаданных коллекции присутствуют специальные поля: **previousHref** и **nextHref**, представляющие запросы предыдущей и следующей страниц данных.

Рассмотрим на примере запроса товаров.

> Запрос

``` shell
curl -X GET "https://api.moysklad.ru/api/remap/1.2/entity/product"
  -u login:password
  -H "Accept-Encoding: gzip" 
  -H "Lognex-Pretty-Print-JSON: true"
```

> Ответ:

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product",
    "type": "product",
    "mediaType": "application/json",
    "size": 5,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/397c96fd-e710-11ef-ac12-000e0000004f",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=397b893d-e710-11ef-ac12-000e0000004d"
      },
      "id": "397c96fd-e710-11ef-ac12-000e0000004f",
      "accountId": "a3816d8b-d7d4-11ef-ac12-001000000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a50d2d81-d7d4-11ef-ac12-000f00000051",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=a50d2d81-d7d4-11ef-ac12-000f00000051"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/a3832874-d7d4-11ef-ac12-001000000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2025-02-10 08:53:50.120",
      "name": "товар 1",
      "code": "00002",
      "externalCode": "zf60Nk8Wizazb0VbCbIZ70",
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
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/397c96fd-e710-11ef-ac12-000e0000004f/images",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
          }
        }
      },
      "salePrices": [
        {
          "value": 0.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json",
              "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/a5c32d07-d7d4-11ef-ac12-000f000000a3",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "a5c32d07-d7d4-11ef-ac12-000f000000a3",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        }
      ],
      "buyPrice": {
        "value": 0.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
          }
        }
      },
      "barcodes": [
        {
          "ean13": "2000000000039"
        }
      ],
      "paymentItemType": "GOOD",
      "discountProhibited": false,
      "weight": 0.0,
      "volume": 0.0,
      "variantsCount": 0,
      "isSerialTrackable": false,
      "files": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/397c96fd-e710-11ef-ac12-000e0000004f/files",
          "type": "files",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "trackingType": "NOT_TRACKED"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/3d647e03-e710-11ef-ac12-000e00000056",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3d646c8b-e710-11ef-ac12-000e00000054"
      },
      "id": "3d647e03-e710-11ef-ac12-000e00000056",
      "accountId": "a3816d8b-d7d4-11ef-ac12-001000000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a50d2d81-d7d4-11ef-ac12-000f00000051",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=a50d2d81-d7d4-11ef-ac12-000f00000051"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/a3832874-d7d4-11ef-ac12-001000000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2025-02-10 08:53:56.702",
      "name": "товар 2",
      "code": "00003",
      "externalCode": "sX2cy29cjKtwGQuVU6lzJ0",
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
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/3d647e03-e710-11ef-ac12-000e00000056/images",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
          }
        }
      },
      "salePrices": [
        {
          "value": 0.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json",
              "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/a5c32d07-d7d4-11ef-ac12-000f000000a3",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "a5c32d07-d7d4-11ef-ac12-000f000000a3",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        }
      ],
      "buyPrice": {
        "value": 0.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
          }
        }
      },
      "barcodes": [
        {
          "ean13": "2000000000046"
        }
      ],
      "paymentItemType": "GOOD",
      "discountProhibited": false,
      "weight": 0.0,
      "volume": 0.0,
      "variantsCount": 0,
      "isSerialTrackable": false,
      "files": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/3d647e03-e710-11ef-ac12-000e00000056/files",
          "type": "files",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "trackingType": "NOT_TRACKED"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/40af4191-e710-11ef-ac12-000e0000005d",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=40af2da9-e710-11ef-ac12-000e0000005b"
      },
      "id": "40af4191-e710-11ef-ac12-000e0000005d",
      "accountId": "a3816d8b-d7d4-11ef-ac12-001000000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a50d2d81-d7d4-11ef-ac12-000f00000051",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=a50d2d81-d7d4-11ef-ac12-000f00000051"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/a3832874-d7d4-11ef-ac12-001000000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2025-02-10 08:54:02.231",
      "name": "товар 3",
      "code": "00004",
      "externalCode": "57NbrXfIjq9weB66LEzl70",
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
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/40af4191-e710-11ef-ac12-000e0000005d/images",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
          }
        }
      },
      "salePrices": [
        {
          "value": 0.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json",
              "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/a5c32d07-d7d4-11ef-ac12-000f000000a3",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "a5c32d07-d7d4-11ef-ac12-000f000000a3",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        }
      ],
      "buyPrice": {
        "value": 0.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
          }
        }
      },
      "barcodes": [
        {
          "ean13": "2000000000053"
        }
      ],
      "paymentItemType": "GOOD",
      "discountProhibited": false,
      "weight": 0.0,
      "volume": 0.0,
      "variantsCount": 0,
      "isSerialTrackable": false,
      "files": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/40af4191-e710-11ef-ac12-000e0000005d/files",
          "type": "files",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "trackingType": "NOT_TRACKED"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/44864b1e-e710-11ef-ac12-000e00000064",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=44862756-e710-11ef-ac12-000e00000062"
      },
      "id": "44864b1e-e710-11ef-ac12-000e00000064",
      "accountId": "a3816d8b-d7d4-11ef-ac12-001000000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a50d2d81-d7d4-11ef-ac12-000f00000051",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=a50d2d81-d7d4-11ef-ac12-000f00000051"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/a3832874-d7d4-11ef-ac12-001000000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2025-02-10 08:54:08.671",
      "name": "товар 4",
      "code": "00005",
      "externalCode": "jjm0kNvAgIrSEVpb1XPFl1",
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
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/44864b1e-e710-11ef-ac12-000e00000064/images",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
          }
        }
      },
      "salePrices": [
        {
          "value": 0.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json",
              "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/a5c32d07-d7d4-11ef-ac12-000f000000a3",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "a5c32d07-d7d4-11ef-ac12-000f000000a3",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        }
      ],
      "buyPrice": {
        "value": 0.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
          }
        }
      },
      "barcodes": [
        {
          "ean13": "2000000000060"
        }
      ],
      "paymentItemType": "GOOD",
      "discountProhibited": false,
      "weight": 0.0,
      "volume": 0.0,
      "variantsCount": 0,
      "isSerialTrackable": false,
      "files": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/44864b1e-e710-11ef-ac12-000e00000064/files",
          "type": "files",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "trackingType": "NOT_TRACKED"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/f21208bc-d7d5-11ef-ac12-000f000000fb",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=f21137ce-d7d5-11ef-ac12-000f000000f9"
      },
      "id": "f21208bc-d7d5-11ef-ac12-000f000000fb",
      "accountId": "a3816d8b-d7d4-11ef-ac12-001000000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a50d2d81-d7d4-11ef-ac12-000f00000051",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=a50d2d81-d7d4-11ef-ac12-000f00000051"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/a3832874-d7d4-11ef-ac12-001000000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2025-01-21 12:54:51.240",
      "name": "товар",
      "code": "00001",
      "externalCode": "vh3rkoIIgpTeOkqBM7lzp0",
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
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/f21208bc-d7d5-11ef-ac12-000f000000fb/images",
          "type": "image",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "minPrice": {
        "value": 11111100,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
          }
        }
      },
      "salePrices": [
        {
          "value": 111100.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json",
              "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/a5c32d07-d7d4-11ef-ac12-000f000000a3",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "a5c32d07-d7d4-11ef-ac12-000f000000a3",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        }
      ],
      "buyPrice": {
        "value": 111111111100,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
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
      "variantsCount": 1,
      "isSerialTrackable": false,
      "files": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/f21208bc-d7d5-11ef-ac12-000f000000fb/files",
          "type": "files",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "trackingType": "NOT_TRACKED"
    }
  ]
}
```

> Запрос с limit и offset

``` shell
curl -X GET "https://api.moysklad.ru/api/remap/1.2/entity/product?limit=1&offset=0"
  -u login:password
  -H "Accept-Encoding: gzip" 
  -H "Lognex-Pretty-Print-JSON: true"
```

> Ответ:

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product?limit=1&offset=0",
    "type": "product",
    "mediaType": "application/json",
    "size": 5,
    "limit": 1,
    "offset": 0,
    "nextHref": "https://api.moysklad.ru/api/remap/1.2/entity/product?offset=1&limit=1"
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/397c96fd-e710-11ef-ac12-000e0000004f",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=397b893d-e710-11ef-ac12-000e0000004d"
      },
      "id": "397c96fd-e710-11ef-ac12-000e0000004f",
      "accountId": "a3816d8b-d7d4-11ef-ac12-001000000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a50d2d81-d7d4-11ef-ac12-000f00000051",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=a50d2d81-d7d4-11ef-ac12-000f00000051"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/a3832874-d7d4-11ef-ac12-001000000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2025-02-10 08:53:50.120",
      "name": "товар 1",
      "code": "00002",
      "externalCode": "zf60Nk8Wizazb0VbCbIZ70",
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
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/397c96fd-e710-11ef-ac12-000e0000004f/images",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
          }
        }
      },
      "salePrices": [
        {
          "value": 0.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json",
              "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/a5c32d07-d7d4-11ef-ac12-000f000000a3",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "a5c32d07-d7d4-11ef-ac12-000f000000a3",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        }
      ],
      "buyPrice": {
        "value": 0.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
          }
        }
      },
      "barcodes": [
        {
          "ean13": "2000000000039"
        }
      ],
      "paymentItemType": "GOOD",
      "discountProhibited": false,
      "weight": 0.0,
      "volume": 0.0,
      "variantsCount": 0,
      "isSerialTrackable": false,
      "files": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/397c96fd-e710-11ef-ac12-000e0000004f/files",
          "type": "files",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "trackingType": "NOT_TRACKED"
    }
  ]
}
```

### Поиск

В JSON API можно осуществлять контекстный поиск среди списка сущностей определённого типа по их строковым полям. 
Проверка уникальна для каждой сущности. Поиск работает по префиксам слов. Для этого используется url параметр поиска search

Результатом поиска будет отсортированный по релевантности список сущностей данного типа, прошедших 
фильтрацию по переданной поисковой строке. В отличии от фильтрации выборки с помощью параметра filter, при которой значения 
проверяются на точное совпадение, при контекстном поиске проверка на совпадение не строгая.

Контекстный поиск стран `"search=мари"`

> Запрос

``` shell
curl -X GET 
  -u login:password
  -H "Accept-Encoding: gzip" 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://api.moysklad.ru/api/remap/1.2/entity/country?search=Рос"
```

> Ответ:

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/country?search=%D0%A0%D0%BE%D1%81",
    "type": "country",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type": "country",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#country/edit?id=9df7c2c3-7782-4c5c-a8ed-1102af611608"
      },
      "id": "9df7c2c3-7782-4c5c-a8ed-1102af611608",
      "updated": "2012-11-02 12:04:14.054",
      "name": "Россия",
      "description": "Российская Федерация",
      "code": "643",
      "externalCode": "643"
    }
  ]
}
```


### Сортировка

Для сортировки списка объектов используется url параметр order. Значение этого параметра - urlencoded строка с условиями сортировки, перечисленными через ';'.  Каждое условие сортировки - это сочетание названия поля, запятой (опционально, если указывается направление сортировки), направления сортировки (опционально: может принимать значения asc и desc. Значение по умолчанию - asc).

Сортировка поддерживается для следующих типов полей: числовой, строковый, дата-время, логический и uuid.

> Запрос

``` shell
curl -X GET "https://api.moysklad.ru/api/remap/1.2/entity/product?order=name,desc;updated"
  -u login:password
  -H "Accept-Encoding: gzip" 
  -H "Lognex-Pretty-Print-JSON: true"
```

> Ответ:

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product?order=name,desc;updated",
    "type": "product",
    "mediaType": "application/json",
    "size": 5,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/44864b1e-e710-11ef-ac12-000e00000064",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=44862756-e710-11ef-ac12-000e00000062"
      },
      "id": "44864b1e-e710-11ef-ac12-000e00000064",
      "accountId": "a3816d8b-d7d4-11ef-ac12-001000000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a50d2d81-d7d4-11ef-ac12-000f00000051",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=a50d2d81-d7d4-11ef-ac12-000f00000051"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/a3832874-d7d4-11ef-ac12-001000000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2025-02-10 08:54:08.671",
      "name": "товар 4",
      "code": "00005",
      "externalCode": "jjm0kNvAgIrSEVpb1XPFl1",
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
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/44864b1e-e710-11ef-ac12-000e00000064/images",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
          }
        }
      },
      "salePrices": [
        {
          "value": 0.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json",
              "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/a5c32d07-d7d4-11ef-ac12-000f000000a3",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "a5c32d07-d7d4-11ef-ac12-000f000000a3",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        }
      ],
      "buyPrice": {
        "value": 0.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
          }
        }
      },
      "barcodes": [
        {
          "ean13": "2000000000060"
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
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/44864b1e-e710-11ef-ac12-000e00000064/files",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/40af4191-e710-11ef-ac12-000e0000005d",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=40af2da9-e710-11ef-ac12-000e0000005b"
      },
      "id": "40af4191-e710-11ef-ac12-000e0000005d",
      "accountId": "a3816d8b-d7d4-11ef-ac12-001000000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a50d2d81-d7d4-11ef-ac12-000f00000051",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=a50d2d81-d7d4-11ef-ac12-000f00000051"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/a3832874-d7d4-11ef-ac12-001000000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2025-02-10 08:54:02.231",
      "name": "товар 3",
      "code": "00004",
      "externalCode": "57NbrXfIjq9weB66LEzl70",
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
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/40af4191-e710-11ef-ac12-000e0000005d/images",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
          }
        }
      },
      "salePrices": [
        {
          "value": 0.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json",
              "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/a5c32d07-d7d4-11ef-ac12-000f000000a3",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "a5c32d07-d7d4-11ef-ac12-000f000000a3",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        }
      ],
      "buyPrice": {
        "value": 0.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
          }
        }
      },
      "barcodes": [
        {
          "ean13": "2000000000053"
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
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/40af4191-e710-11ef-ac12-000e0000005d/files",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/3d647e03-e710-11ef-ac12-000e00000056",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3d646c8b-e710-11ef-ac12-000e00000054"
      },
      "id": "3d647e03-e710-11ef-ac12-000e00000056",
      "accountId": "a3816d8b-d7d4-11ef-ac12-001000000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a50d2d81-d7d4-11ef-ac12-000f00000051",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=a50d2d81-d7d4-11ef-ac12-000f00000051"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/a3832874-d7d4-11ef-ac12-001000000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2025-02-10 08:53:56.702",
      "name": "товар 2",
      "code": "00003",
      "externalCode": "sX2cy29cjKtwGQuVU6lzJ0",
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
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/3d647e03-e710-11ef-ac12-000e00000056/images",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
          }
        }
      },
      "salePrices": [
        {
          "value": 0.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json",
              "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/a5c32d07-d7d4-11ef-ac12-000f000000a3",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "a5c32d07-d7d4-11ef-ac12-000f000000a3",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        }
      ],
      "buyPrice": {
        "value": 0.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
          }
        }
      },
      "barcodes": [
        {
          "ean13": "2000000000046"
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
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/3d647e03-e710-11ef-ac12-000e00000056/files",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/397c96fd-e710-11ef-ac12-000e0000004f",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=397b893d-e710-11ef-ac12-000e0000004d"
      },
      "id": "397c96fd-e710-11ef-ac12-000e0000004f",
      "accountId": "a3816d8b-d7d4-11ef-ac12-001000000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a50d2d81-d7d4-11ef-ac12-000f00000051",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=a50d2d81-d7d4-11ef-ac12-000f00000051"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/a3832874-d7d4-11ef-ac12-001000000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2025-02-10 08:53:50.120",
      "name": "товар 1",
      "code": "00002",
      "externalCode": "zf60Nk8Wizazb0VbCbIZ70",
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
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/397c96fd-e710-11ef-ac12-000e0000004f/images",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
          }
        }
      },
      "salePrices": [
        {
          "value": 0.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json",
              "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/a5c32d07-d7d4-11ef-ac12-000f000000a3",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "a5c32d07-d7d4-11ef-ac12-000f000000a3",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        }
      ],
      "buyPrice": {
        "value": 0.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
          }
        }
      },
      "barcodes": [
        {
          "ean13": "2000000000039"
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
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/397c96fd-e710-11ef-ac12-000e0000004f/files",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/f21208bc-d7d5-11ef-ac12-000f000000fb",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=f21137ce-d7d5-11ef-ac12-000f000000f9"
      },
      "id": "f21208bc-d7d5-11ef-ac12-000f000000fb",
      "accountId": "a3816d8b-d7d4-11ef-ac12-001000000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/a50d2d81-d7d4-11ef-ac12-000f00000051",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=a50d2d81-d7d4-11ef-ac12-000f00000051"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/a3832874-d7d4-11ef-ac12-001000000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2025-01-21 12:54:51.240",
      "name": "товар",
      "code": "00001",
      "externalCode": "vh3rkoIIgpTeOkqBM7lzp0",
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
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/f21208bc-d7d5-11ef-ac12-000f000000fb/images",
          "type": "image",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "minPrice": {
        "value": 11111100,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
          }
        }
      },
      "salePrices": [
        {
          "value": 111100.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json",
              "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/a5c32d07-d7d4-11ef-ac12-000f000000a3",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "a5c32d07-d7d4-11ef-ac12-000f000000a3",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        }
      ],
      "buyPrice": {
        "value": 111111111100,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/a56cd0da-d7d4-11ef-ac12-000f000000a2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=a56cd0da-d7d4-11ef-ac12-000f000000a2"
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
      "variantsCount": 1,
      "isSerialTrackable": false,
      "trackingType": "NOT_TRACKED",
      "files": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/f21208bc-d7d5-11ef-ac12-000f000000fb/files",
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