# Workbook
## Что нужно знать для начала работы с JSON API
### Ограничения

JSON API доступен пользователям на всех тарифах, но на бесплатных тарифах доступен не весь функционал.

Ограничения подробно описаны в соответствующей [статье](../#mojsklad-json-api-ogranicheniq)

### Оптимизация количества запросов к JSON API

Частой проблемой исчерпания лимитов по запросам является ненастроенная интеграция.
В данном разделе приведены основные ошибки при работе с JSON API, а также описаны варианты их решения.

#### Проблема повторяющихся запросов

Часто бывает, что за небольшой промежуток времени приходит много дублирующихся запросов. Это может быть связано с:

* наличием нескольких экземпляров одного и того же приложения, каждое из которых не знает о работе соседнего
* плохо настроенными повторами запросов:
  * запрос повторяется не получив ответа от предыдущего запроса. К примеру на ответ отводится 5 секунд, а затем идет повторная отправка. Стоит учитывать, что ответ может прийти спустя 300 секунд в зависимости от сложности запроса.
  * запрос повторяется получив ошибку, которая не должна приводить к повторному запросу. Например, ошибки с кодом ответа 4хх не должны приводить к повторной отправке запроса.
* отсутствием кэширования вложенных объектов при получении списка сущностей

#### Проблема избыточных запросов

Одной из основных проблем в интеграции может быть использование нескольких запросов в сценариях, когда можно получить нужные данные одним запросом. 
Например:

* обновление объекта по частям, а не целиком
* игнорирование [expand](../#workbook-chto-takoe-expand), [async](../#workbook-rabota-s-asinhronnym-obmenom) и [webhook](../#workbook-vebhuki) там, где это нужно:
  * expand помогает сократить количество запросов, если нужно получить вложенные сущности
  * async позволяет получить список всех объектов без необходимости перебирать их, используя пагинацию
  * webhook позволит точечно обновлять состояние сущности и проводить "актуализацию данных" реже

### Настройка переиспользования соединений

При большом количестве запросов открытие TCP соединения на каждый приводит к бану. 
Чтобы этого избежать, рекомендуется настроить переиспользование соединений (HTTP keep-alive/HTTP persistent connection).

При установлении соединения напрямую с МоимСкладом настройка keep-alive производится в библиотеке для http-запросов. При использовании proxy-сервера настройка выполняется на его стороне.

Увеличьте количество и время неактивности TCP соединений. Однако не рекомендуется использовать TCP соединения, неактивные более 30 секунд или делать более 100 запросов через одно соединение: это может приводить к 500м ошибкам.

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
            }
        },
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b2",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                "type": "product",
                "mediaType": "application/json"
            }
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
