# Workbook
## Инструкция по переходу с версии 1.1 на 1.2

Для перехода с версии 1.1 на 1.2 необходимо:

* ознакомиться со [списком изменений](../changelog/#spisok-izmenenij)

* просмотреть соответствующие разделы в документации по списку изменений

* изменить во всех запросах remap/1.1 на remap/1.2 и убрать ненужные заголовки

* проверить совместимость интеграции

## Что нужно знать для начала работы с JSON API
### Ограничения

JSON API доступен пользователям на всех тарифах, но на бесплатных тарифах доступен не весь функционал.

Для JSON API установлены следующие ограничения:

-   Не более 45 запросов за 3 секундный период от аккаунта
-   Не более 5 параллельных запросов от одного пользователя
-   Не более 20 параллельных запросов от аккаунта
-   Не более 30 не успешных авторизаций за час
-   Не более 1 не успешной авторизации за 2 секундный период
-   Не более 20 Мб данных в одном запросе, отправляемом на сервер

Также накладывается ограничение на максимальное число объектов (позиций, материалов, продуктов), передаваемых в одном массиве в запросе - не более 1000 элементов. В случае, если количество элементов коллекции превышает максимально допустимое, произойдёт ошибка со статусом 413. Если количество позиций превышает максимально допустимое, то для дальнейшего пополнения позиций нужно будет работать со специальным ресурсом, описание которого приведено в конкретной сущности.

### Чтобы начать нужны

-   Аккаунт МоегоСклада
-   HTTP-клиент, например Postman, curl

### Первый запрос

Для запросов JSON API используются логин и пароль аккаунта МоегоСклада (Basic Auth) или [токен для Аутентификации в json api](../#mojsklad-json-api-obschie-swedeniq-autentifikaciq).

Создадим первый товар. Для этого нужно только его наименование.

> Запрос на создание товара c логином и паролем

```shell
curl -X POST 
  -u login:password 
  -H "Accept-Encoding: gzip" 
  -H "Content-Type: application/json" 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://api.moysklad.ru/api/remap/1.2/entity/product" 
  -d '{"name":"Просто замечательный товар"}'
```

> Запрос на создание товара c токеном

```shell
curl -X POST 
  -H "Authorization: Bearer <Access-Token>"
  -H "Accept-Encoding: gzip" 
  -H "Content-Type: application/json" 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://api.moysklad.ru/api/remap/1.2/entity/product" 
  -d '{"name":"Просто замечательный товар"}'
```

`login:password` - логин и пароль от МоегоСклада

`Authorization: Bearer <Access-Token>` - токен для Аутентификации в json api

`Content-Type: application/json` - JSON API работает только с json

`Lognex-Pretty-Print-JSON: true` - заголовок, включающий вывод форматированного json

> Ответ

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

> Теперь его можно увидеть в списке товаров:

``` shell
curl -X GET 
  -u login:password 
  -H "Accept-Encoding: gzip" 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://api.moysklad.ru/api/remap/1.2/entity/product"
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
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
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
  ]
}
```

### Метаданные

В начале каждого из ответов eсть поле meta, представляющее метаданные. В JSON API метаданные бывают нескольких видов.

> У товара метаданные объекта - информация о конкретном объекте (ссылка на объект, тип):

```json
{
    "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/6b44332f-b0ac-11ea-ac14-000a00000002",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=6b3fd459-b0ac-11ea-ac14-000a00000000"
    }
}
```

> При запросе списка товаров - *метаданные коллекции* - информация о списке объектов (размер списка, количество полученных объектов, смещение):

```json
{
    "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product",
        "type": "product",
        "mediaType": "application/json",
        "size": 1,
        "limit": 25,
        "offset": 0
    }
}
```


Еще один вид метаданных - метаданные сущности - информация, относящаяся не к конкретному объекту, а ко всем объектам определенного типа, например списки дополнительных атрибутов, статусов

> Запрос метаданных товаров:

``` shell
curl -X GET 
  -u login:password 
  -H "Accept-Encoding: gzip" 
  -H "Lognex-Pretty-Print-JSON: true"
  "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata"
```

> Ответ:

```json
 {
   "meta": {
     "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
     "mediaType": "application/json"
   },
   "attributes": {
     "meta": {
       "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes",
       "type": "attributemetadata",
       "mediaType": "application/json",
       "size": 0,
       "limit": 1000,
       "offset": 0
     }
   },
   "createShared": true
 }
```


### Обработка ошибок

> При создании товара обязательно указывать наименование, если этого не сделать, вернется ошибка.

``` shell
curl -X POST 
  -u login:password 
  -H "Accept-Encoding: gzip" 
  -H "Content-Type: application/json" 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://api.moysklad.ru/api/remap/1.2/entity/product" 
  -d '{}'
```

> Ответ:

```json
    {
        "errors": [
            {
                "error": "Ошибка сохранения объекта: поле 'name' не может быть пустым или отсутствовать",
                "code": 3000,
                "parameter": "name",
                "moreInfo": "https://api.moysklad.ru/api/remap/1.2/doc#обработка-ошибок-3000",
                "line": 1,
                "column": 2
            }
        ]
    }
```


Ошибки возвращаются в виде массива errors, содержащего объекты error, каждый из которых описывает отдельную ошибку.

Подробнее о структуре и видах ошибок [в документации](../#mojsklad-json-api-obschie-swedeniq-obrabotka-oshibok).

### Методы HTTP (GET, POST, PUT, DELETE)

В JSON API различным методам HTTP соответствуют различные действия:

-   GET - получение информации
-   POST - создание новых объектов, также используется для массового создания, обновления и удаления объектов
-   PUT - изменение существующих объектов
-   DELETE - удаление объектов

> GET - запрос списка товаров

``` shell
curl -X GET 
  -u login:password 
  -H "Accept-Encoding: gzip" 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://api.moysklad.ru/api/remap/1.2/entity/product"
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
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
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
  ]
}
```

> POST - создание товара

``` shell
curl -X POST 
  -u login:password
  -H "Accept-Encoding: gzip" 
  -H "Content-Type: application/json" 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://api.moysklad.ru/api/remap/1.2/entity/product" 
  -d '{"name":"Просто замечательный товар"}'
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


Метаданные товара содержат ссылку на этот товар ("href":"https://api.moysklad.ru/api/remap/1.2/entity/product/6b44332f-b0ac-11ea-ac14-000a00000002") - ее можно использовать для запроса конкретно этого товара.

> GET - запрос конкретного товара

``` shell
curl -X GET 
  -u login:password
  -H "Accept-Encoding: gzip" 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://api.moysklad.ru/api/remap/1.2/entity/product/6b44332f-b0ac-11ea-ac14-000a00000002"
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

Либо для изменения этого товара:

> PUT - изменение товара

``` shell
curl -X PUT 
  -u login:password
  -H "Accept-Encoding: gzip" 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://api.moysklad.ru/api/remap/1.2/entity/product/6b44332f-b0ac-11ea-ac14-000a00000002"
  -d '{"name":"Новое наименование"}'
```

> Ответ:

``` json
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
  "name": "Новое наименование",
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


А также для удаления товара:

> DELETE - удаление товара

``` shell
curl -X DELETE 
  -u login:password
  -H "Accept-Encoding: gzip" 
  "https://api.moysklad.ru/api/remap/1.2/entity/product/6b44332f-b0ac-11ea-ac14-000a00000002"
```

> При успешном удалении возвращается пустой ответ с кодом 200, иначе ошибка с кодом 404.


Если нужно удалить больше чем один товар, то можно воспользоваться массовым удалением. Для этого нужно послать `post` запрос, 
в теле которого указать `meta` удаляемых сущностей. Результатом успешного удаления будет сообщение об успешном удалении сущностей.

> Пример массового удаления Товаров 

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/product/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json"
        }
      ]'
``` 

> Успешный запрос. Результат - JSON информация об удалении Товаров.

```json
[
  {
    "info":"Сущность 'product' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'product' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
```

### Пустые поля

У товаров есть необязательное поле country (страна). Создавая товар мы его не заполнили, поэтому в выдаче этого товара оно отсутствует:

Заполним страну у товара. Поля, которые являются объектами, нужно передавать в виде метаданных

> При обновлении объектов не обязательно передавать все поля. При указании части полей будут изменены только переданные поля.

``` shell
curl -X PUT 
  -u login:password
  -H "Accept-Encoding: gzip" 
  -H "Content-Type: application/json" 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://api.moysklad.ru/api/remap/1.2/entity/product/6b44332f-b0ac-11ea-ac14-000a00000002" 
  -d {"country": null}
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
  "name": "Новое наименование",
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

Чтобы удалить значение из поля типа объект,  в запросе на обновление сущности нужно передать в данном поле null. Это возможно, если поле не является обязательным, или же если данное поле в основном интерфейсе может содержать пустое значение. Например, удалим у товара страну

> Запрос на неверное обновление

``` shell
curl -X PUT 
  -u login:password
  -H "Accept-Encoding: gzip" 
  -H "Content-Type: application/json" 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://api.moysklad.ru/api/remap/1.2/entity/product/6b44332f-b0ac-11ea-ac14-000a00000002" 
  -d '{"name": null}'
```

> Ответ:

```json
{
  "errors": [
    {
      "error": "Ошибка формата: значение поля 'name' не соответствует типу строка",
      "code": 2016,
      "moreInfo": "https://api.moysklad.ru/api/remap/1.2/doc#обработка-ошибок-2016",
      "line": 1,
      "column": 2
    }
  ]
}
```    

### Формат даты и времени

В JSON API поля типа дата-время (момент времени) - это строка в формате:

-   Без миллисекунд: ГГГГ-ММ-ДД ЧЧ:мм:сс
-   С миллисекундами: ГГГГ-ММ-ДД ЧЧ:мм:сс.ммм

В параметрах фильтрации нужно указывать поля типа дата-время именно в этом формате.

> Пример запроса с полем updated в товарах

``` shell
curl -X GET 
  -u login:password
  -H "Accept-Encoding: gzip" 
  -H "Lognex-Pretty-Print-JSON: true" 
  -H "X-Lognex-Format-Millisecond: true" 
  "https://api.moysklad.ru/api/remap/1.2/entity/product/6b44332f-b0ac-11ea-ac14-000a00000002"
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
  "name": "Новое наименование",
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

### Разделение на entity, report и context

Большинство методов JSON API разделены на три больших раздела - entity, report и context.

-   entity - работа с сущностями. Получение, создание, обновление, удаление.
-   report - отчеты. Получение различных сводных данных, которые вычисляются на основе существующих документов.
-   context - настройки. Изменения различных настроек пользователя, компании и т.д.

Все рассмотренные выше методы относятся к entity - работа с сущностями типа product (товар). Возможности фильтрации и сортировки определяются
 структурой полей конкретного типа. Каждая сущность имеет уникальный id, и существуют методы по работе с отдельными объектами.

Структура отчетов, а также возможности фильтрации специфичны для каждого отдельного отчета. 
Отчеты представляют собой определенный срез информации на основе совокупности документов. Для примера рассмотрим отчет остатков товаров 
на складе. Мы создали один товар и не создавали никаких документов, поэтому количество этого товара равно нулю. По умолчанию ненулевые 
остатки в этом отчете скрыты. Для того, чтобы они отобразились в запросе, использован параметр stockMode со значением all.


> Запрос отчетов

``` shell
curl -X GET 
  -u login:password
  -H "Accept-Encoding: gzip" 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://api.moysklad.ru/api/remap/1.2/report/stock/all?stockMode=all"
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
    "href": "https://api.moysklad.ru/api/remap/1.2/report/stock/all?stockMode=all",
    "type": "stock",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0884d27a-b0e3-11ea-ac12-000b00000002?expand=supplier",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=088303a8-b0e3-11ea-ac12-000b00000000"
      },
      "stock": 1.0,
      "inTransit": 0.0,
      "reserve": 0.0,
      "quantity": 1.0,
      "name": "чудо товар",
      "code": "00001",
      "price": 10000.0,
      "salePrice": 0.0,
      "uom": {},
      "externalCode": "XwJmEyYOhI-Gx9HOtBxih2",
      "stockDays": 0.0
    }
  ]
}
```

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

Рассмотрим на примере запроса стран.

> Запрос

``` shell
curl -X GET 
  -u login:password
  -H "Accept-Encoding: gzip" 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://api.moysklad.ru/api/remap/1.2/entity/country"
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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/country",
    "type": "country",
    "mediaType": "application/json",
    "size": 252,
    "limit": 1000,
    "offset": 0
  },
  "rows": [...]
}
```

> Запрос с limit и offset

``` shell
curl -X GET 
  -u login:password
  -H "Accept-Encoding: gzip" 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://api.moysklad.ru/api/remap/1.2/entity/country/?limit=25&offset=25"
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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/country?limit=25&offset=25",
    "type": "country",
    "mediaType": "application/json",
    "size": 252,
    "limit": 25,
    "offset": 25,
    "nextHref": "https://api.moysklad.ru/api/remap/1.2/entity/country?offset=50&limit=25",
    "previousHref": "https://api.moysklad.ru/api/remap/1.2/entity/country?offset=0&limit=25"
  },
  "rows": [...]
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
curl -X GET 
  -u login:password
  -H "Accept-Encoding: gzip" 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://api.moysklad.ru/api/remap/1.2/entity/country/?order=name,desc;updated"
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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/country?order=name,desc;updated",
    "type": "country",
    "mediaType": "application/json",
    "size": 252,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/country/00999522-23d6-40e6-870e-ec7f7bd8d354",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type": "country",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#country/edit?id=00999522-23d6-40e6-870e-ec7f7bd8d354"
      },
      "id": "00999522-23d6-40e6-870e-ec7f7bd8d354",
      "updated": "2012-11-02 12:04:15.831",
      "name": "Япония",
      "code": "392",
      "externalCode": "392"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/country/886b465f-5bb0-4c6a-9b63-9abaf5157a26",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type": "country",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#country/edit?id=886b465f-5bb0-4c6a-9b63-9abaf5157a26"
      },
      "id": "886b465f-5bb0-4c6a-9b63-9abaf5157a26",
      "updated": "2012-11-02 12:04:15.826",
      "name": "Ямайка",
      "code": "388",
      "externalCode": "388"
    },
    ...
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/country/9756f8c8-84d3-46d1-9439-b4e950cff419",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type": "country",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#country/edit?id=9756f8c8-84d3-46d1-9439-b4e950cff419"
      },
      "id": "9756f8c8-84d3-46d1-9439-b4e950cff419",
      "updated": "2012-11-02 12:04:12.241",
      "name": "Абхазия",
      "description": "Республика Абхазия",
      "code": "895",
      "externalCode": "895"
    }
  ]
}    

```

## Что такое expand

В JSON API в составе сущностей поля, которые являются объектами, выводятся в виде метаданных. Для того, чтобы вместо ссылок получить сами 
связанные объекты, не обязательно делать отдельные запросы для каждого из них. Вместо этого, вместе с запросом на получение сущности, нужно 
передать параметр expand. В качестве значения данного параметра нужно перечислить через запятую все необходимые поля, на месте которых вы бы 
хотели видеть объекты.

Например, у товара есть поле owner (ссылка на Сотрудника), а у сотрудника есть поле group (отдел сотрудника). Запросим товар, чтобы у него 
был развернут owner, а у owner был развернут group.

> Запрос

``` shell
curl -X GET 
  -u login:password
  -H "Accept-Encoding: gzip" 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://api.moysklad.ru/api/remap/1.2/entity/product/0884d27a-b0e3-11ea-ac12-000b00000002?expand=owner,owner.group"
```

> Ответ:

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

Максимальный уровень вложенности expand: 3.

Также expand можно применять для результатов операций создания и обновления.

> Запрос

``` shell
curl -X PUT 
  -u login:password
  -H "Accept-Encoding: gzip" 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://api.moysklad.ru/api/remap/1.2/entity/product/0884d27a-b0e3-11ea-ac12-000b00000002?expand=owner,owner.group" 
  -d '{"name":"Новое наименование"}'
```

> Ответ:

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
