# Workbook
## Что нужно знать для начала работы с JSON API
### Ограничения

JSON API доступен пользователям на всех тарифах, но на бесплатных тарифах доступен не весь функционал.

Ограничения подробно описаны в соответствующей [статье](#/restrictions#2-ogranicheniya)

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
* игнорирование [expand](#/workbook/workbook-expand#2-chto-takoe-expand), [async](#/workbook/workbook-async#2-rabota-s-asinhronnym-obmenom) и [webhook](#/workbook/workbook-webhooks#2-vebhuki) там, где это нужно:
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

Для запросов JSON API используются логин и пароль аккаунта МоегоСклада (Basic Auth) или [токен для Аутентификации в json api](#/general#3-autentifikaciya).

Создадим первый товар. Для этого нужно только его наименование.

> Запрос на создание товара c логином и паролем

```shell
curl --compressed -X POST \
  -u login:password \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -H "Lognex-Pretty-Print-JSON: true" \
  "https://api.moysklad.ru/api/remap/1.2/entity/product" \
  -d '{"name":"Просто замечательный товар"}'
```

> Запрос на создание товара c токеном

```shell
curl --compressed -X POST \
  -H "Authorization: Bearer <Access-Token>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -H "Lognex-Pretty-Print-JSON: true" \
  "https://api.moysklad.ru/api/remap/1.2/entity/product" \
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
curl --compressed -X GET \
  -u login:password \
  -H "Accept-Encoding: gzip" \
  -H "Lognex-Pretty-Print-JSON: true" \
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
curl --compressed -X GET \
  -u login:password \
  -H "Accept-Encoding: gzip" \
  -H "Lognex-Pretty-Print-JSON: true" \
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
curl --compressed -X POST \
  -u login:password \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -H "Lognex-Pretty-Print-JSON: true" \
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

Подробнее о структуре и видах ошибок [в документации](#/general#3-obrabotka-oshibok).

### Методы HTTP (GET, POST, PUT, DELETE)

В JSON API различным методам HTTP соответствуют различные действия:

-   GET - получение информации
-   POST - создание новых объектов, также используется для массового создания, обновления и удаления объектов
-   PUT - изменение существующих объектов
-   DELETE - удаление объектов

> GET - запрос списка товаров

``` shell
curl --compressed -X GET \
  -u login:password \
  -H "Accept-Encoding: gzip" \
  -H "Lognex-Pretty-Print-JSON: true" \
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
curl --compressed -X POST \
  -u login:password \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -H "Lognex-Pretty-Print-JSON: true" \
  "https://api.moysklad.ru/api/remap/1.2/entity/product" \
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
curl --compressed -X GET \
  -u login:password \
  -H "Accept-Encoding: gzip" \
  -H "Lognex-Pretty-Print-JSON: true" \
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
curl --compressed -X PUT \
  -u login:password \
  -H "Accept-Encoding: gzip" \
  -H "Lognex-Pretty-Print-JSON: true" \
  "https://api.moysklad.ru/api/remap/1.2/entity/product/6b44332f-b0ac-11ea-ac14-000a00000002" \
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
curl --compressed -X DELETE \
  -u login:password \
  -H "Accept-Encoding: gzip" \
  "https://api.moysklad.ru/api/remap/1.2/entity/product/6b44332f-b0ac-11ea-ac14-000a00000002"
```

> При успешном удалении возвращается пустой ответ с кодом 200, иначе ошибка с кодом 404.


Если нужно удалить больше чем один товар, то можно воспользоваться массовым удалением. Для этого нужно послать `post` запрос, 
в теле которого указать `meta` удаляемых сущностей. Результатом успешного удаления будет сообщение об успешном удалении сущностей.

> Пример массового удаления Товаров 

```shell
curl --compressed -X POST \
  "https://api.moysklad.ru/api/remap/1.2/entity/product/delete" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
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
curl --compressed -X PUT \
  -u login:password \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -H "Lognex-Pretty-Print-JSON: true" \
  "https://api.moysklad.ru/api/remap/1.2/entity/product/6b44332f-b0ac-11ea-ac14-000a00000002" \
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
curl --compressed -X PUT \
  -u login:password \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -H "Lognex-Pretty-Print-JSON: true" \
  "https://api.moysklad.ru/api/remap/1.2/entity/product/6b44332f-b0ac-11ea-ac14-000a00000002" \
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
curl --compressed -X GET \
  -u login:password \
  -H "Accept-Encoding: gzip" \
  -H "Lognex-Pretty-Print-JSON: true" \
  -H "X-Lognex-Format-Millisecond: true" \
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
curl --compressed -X GET \
  -u login:password \
  -H "Accept-Encoding: gzip" \
  -H "Lognex-Pretty-Print-JSON: true" \
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
