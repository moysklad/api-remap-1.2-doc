# Workbook
## Что нужно знать для начала работы с JSON API
### Ограничения

JSON API доступен пользователям на всех тарифах, но на бесплатных тарифах доступен не весь функционал.

Для JSON API установлены следующие ограничения:

-   Не более 100 запросов за 5 секундный период
-   Не более 5 параллельных запросов от одного пользователя
-   Не более 20 параллельных запросов от аккаунта
-   Не более 500 параллельных запросов с одного ip-адреса
-   Не более 30 не успешных авторизаций за час
-   Не более 1 не успешной авторизации за 5 секундный период
-   Не более 10 Мб данных в одном запросе, отправляемом на сервер

Также накладывается ограничение на максимальное число объектов (позиций, материалов, продуктов), передаваемых в одном массиве в запросе - не более 1000 элементов. В случае, если количество элементов коллекции превышает максимально допустимое, произойдёт ошибка со статусом 413. Если количество позиций превышает максимально допустимое, то для дальнейшего пополнения позиций нужно будет работать со специальным ресурсом, описание которого приведено в конкретной сущности.

### Чтобы начать нужны

-   Аккаунт МоегоСклада
-   HTTP-клиент, например Postman, curl

### Первый запрос

Для запросов JSON API используются логин и пароль аккаунта МоегоСклада (Basic Auth).

Создадим первый товар. Для этого нужно только его наименование.

> Запрос на создание товара

```shell
curl -X POST 
  -u login:password 
  -H "Content-Type: application/json" 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://online.moysklad.ru/api/remap/1.2/entity/product" 
  -d '{"name":"Просто замечательный товар"}'
```

`login:password` - логин и пароль от МоегоСклада

`Content-Type: application/json` - JSON API работает только с json

`Lognex-Pretty-Print-JSON: true` - заголовок, включающий вывод форматированного json

> Ответ

```json
{
    "isSerialTrackable": false,
    "modificationsCount": 0,
    "barcodes": [
        "2000000000268"
    ],
    "volume": 0.0,
    "weight": 0.0,
    "buyPrice": {
        "currency": {
            "meta": {
                "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=e37f9321-2780-11e8-0532-9eed00000058",
                "mediaType": "application/json",
                "type": "currency",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/e37f9321-2780-11e8-0532-9eed00000058"
            }
        },
        "value": 0.0
    },
    "salePrices": [
        {
            "priceType": "Цена продажи",
            "currency": {
                "meta": {
                    "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=e37f9321-2780-11e8-0532-9eed00000058",
                    "mediaType": "application/json",
                    "type": "currency",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/e37f9321-2780-11e8-0532-9eed00000058"
                }
            },
            "value": 0.0
        }
    ],
    "minPrice": 0.0,
    "pathName": "",
    "archived": false,
    "externalCode": "KIClF9t5gfh4qA3LD9a7u3",
    "code": "00001",
    "name": "Просто замечательный товар",
    "updated": "2018-05-11 14:37:15.000",
    "version": 0,
    "group": {
        "meta": {
            "mediaType": "application/json",
            "type": "group",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/e29e01d3-2780-11e8-0532-9eed00000002"
        }
    },
    "shared": false,
    "owner": {
        "meta": {
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=e346e355-2780-11e8-0532-9eed0000002a",
            "mediaType": "application/json",
            "type": "employee",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/e346e355-2780-11e8-0532-9eed0000002a"
        }
    },
    "accountId": "e29ac72f-2780-11e8-0532-9eed00000001",
    "id": "a7404318-550f-11e8-56c0-000800000010",
    "meta": {
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=a740332f-550f-11e8-56c0-00080000000e",
        "mediaType": "application/json",
        "type": "product",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/a7404318-550f-11e8-56c0-000800000010"
    }
}
```

> Теперь его можно увидеть в списке товаров:

``` shell
curl -X GET 
  -u login:password 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://online.moysklad.ru/api/remap/1.2/entity/product"
```

> Ответ:

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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product",
        "type": "product",
        "mediaType": "application/json",
        "size": 1,
        "limit": 25,
        "offset": 0
    },
    "rows": [
        {
            "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/a7404318-550f-11e8-56c0-000800000010",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                "type": "product",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=a740332f-550f-11e8-56c0-00080000000e"
            },
            "id": "a7404318-550f-11e8-56c0-000800000010",
            "accountId": "e29ac72f-2780-11e8-0532-9eed00000001",
            "owner": {
                "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/e346e355-2780-11e8-0532-9eed0000002a",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                    "type": "employee",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=e346e355-2780-11e8-0532-9eed0000002a"
                }
            },
            "shared": false,
            "group": {
                "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/e29e01d3-2780-11e8-0532-9eed00000002",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
                    "type": "group",
                    "mediaType": "application/json"
                }
            },
            "version": 0,
            "updated": "2018-05-11 14:37:15.000",
            "name": "Просто замечательный товар",
            "code": "00001",
            "externalCode": "KIClF9t5gfh4qA3LD9a7u3",
            "archived": false,
            "pathName": "",
            "minPrice": 0,
            "salePrices": [
                {
                    "value": 0,
                    "currency": {
                        "meta": {
                            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/e37f9321-2780-11e8-0532-9eed00000058",
                            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                            "type": "currency",
                            "mediaType": "application/json",
                            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=e37f9321-2780-11e8-0532-9eed00000058"
                        }
                    },
                    "priceType": "Цена продажи"
                }
            ],
            "buyPrice": {
                "value": 0,
                "currency": {
                    "meta": {
                        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/e37f9321-2780-11e8-0532-9eed00000058",
                        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                        "type": "currency",
                        "mediaType": "application/json",
                        "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=e37f9321-2780-11e8-0532-9eed00000058"
                    }
                }
            },
            "weight": 0,
            "volume": 0,
            "barcodes": [
                "2000000000268"
            ],
            "modificationsCount": 0,
            "isSerialTrackable": false
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
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=a740332f-550f-11e8-56c0-00080000000e",
        "mediaType": "application/json",
        "type": "product",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/a7404318-550f-11e8-56c0-000800000010"
    }
}
```

> При запросе списка товаров - *метаданные коллекции* - информация о списке объектов (размер списка, количество полученных объектов, смещение):

```json
{
    "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product",
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
  -H "Lognex-Pretty-Print-JSON: true"
  "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata"
```

> Ответ:

```json
 {
    "createShared": true,
    "priceTypes": [
        {
            "name": "Цена продажи"
        }
    ],
    "meta": {
        "mediaType": "application/json",
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata"
    }
}
```


### Обработка ошибок

> При создании товара обязательно указывать наименование, если этого не сделать, вернется ошибка.

``` shell
curl -X POST 
  -u login:password 
  -H "Content-Type: application/json" 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://online.moysklad.ru/api/remap/1.2/entity/product" 
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
                "moreInfo": "https://online.moysklad.ru/api/remap/1.2/doc#обработка-ошибок-3000",
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
-   POST - создание новых объектов, также используется для массового создания и обновления
-   PUT - изменение существующих объектов
-   DELETE - удаление объектов

> GET - запрос списка товаров

``` shell
curl -X GET 
  -u login:password 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://online.moysklad.ru/api/remap/1.2/entity/product"
```

> Ответ:

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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product",
        "type": "product",
        "mediaType": "application/json",
        "size": 1,
        "limit": 25,
        "offset": 0
    },
    "rows": [
        {
            "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/a7404318-550f-11e8-56c0-000800000010",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                "type": "product",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=a740332f-550f-11e8-56c0-00080000000e"
            },
            "id": "a7404318-550f-11e8-56c0-000800000010",
            "accountId": "e29ac72f-2780-11e8-0532-9eed00000001",
            "owner": {
                "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/e346e355-2780-11e8-0532-9eed0000002a",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                    "type": "employee",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=e346e355-2780-11e8-0532-9eed0000002a"
                }
            },
            "shared": false,
            "group": {
                "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/e29e01d3-2780-11e8-0532-9eed00000002",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
                    "type": "group",
                    "mediaType": "application/json"
                }
            },
            "version": 0,
            "updated": "2018-05-11 14:37:15.000",
            "name": "Просто замечательный товар",
            "code": "00001",
            "externalCode": "KIClF9t5gfh4qA3LD9a7u3",
            "archived": false,
            "pathName": "",
            "minPrice": 0,
            "salePrices": [
                {
                    "value": 0,
                    "currency": {
                        "meta": {
                            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/e37f9321-2780-11e8-0532-9eed00000058",
                            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                            "type": "currency",
                            "mediaType": "application/json",
                            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=e37f9321-2780-11e8-0532-9eed00000058"
                        }
                    },
                    "priceType": "Цена продажи"
                }
            ],
            "buyPrice": {
                "value": 0,
                "currency": {
                    "meta": {
                        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/e37f9321-2780-11e8-0532-9eed00000058",
                        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                        "type": "currency",
                        "mediaType": "application/json",
                        "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=e37f9321-2780-11e8-0532-9eed00000058"
                    }
                }
            },
            "weight": 0,
            "volume": 0,
            "barcodes": [
                "2000000000268"
            ],
            "modificationsCount": 0,
            "isSerialTrackable": false
        }
    ]
}
```

> POST - создание товара

``` shell
curl -X POST 
  -u login:password 
  -H "Content-Type: application/json" 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://online.moysklad.ru/api/remap/1.2/entity/product" 
  -d '{"name":"Просто замечательный товар"}'
```

> Ответ:

```json
{
    "isSerialTrackable": false,
    "modificationsCount": 0,
    "barcodes": [
        "2000000000268"
    ],
    "volume": 0.0,
    "weight": 0.0,
    "buyPrice": {
        "currency": {
            "meta": {
                "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=e37f9321-2780-11e8-0532-9eed00000058",
                "mediaType": "application/json",
                "type": "currency",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/e37f9321-2780-11e8-0532-9eed00000058"
            }
        },
        "value": 0.0
    },
    "salePrices": [
        {
            "priceType": "Цена продажи",
            "currency": {
                "meta": {
                    "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=e37f9321-2780-11e8-0532-9eed00000058",
                    "mediaType": "application/json",
                    "type": "currency",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/e37f9321-2780-11e8-0532-9eed00000058"
                }
            },
            "value": 0.0
        }
    ],
    "minPrice": 0.0,
    "pathName": "",
    "archived": false,
    "externalCode": "KIClF9t5gfh4qA3LD9a7u3",
    "code": "00001",
    "name": "Просто замечательный товар",
    "updated": "2018-05-11 14:37:15.000",
    "version": 0,
    "group": {
        "meta": {
            "mediaType": "application/json",
            "type": "group",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/e29e01d3-2780-11e8-0532-9eed00000002"
        }
    },
    "shared": false,
    "owner": {
        "meta": {
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=e346e355-2780-11e8-0532-9eed0000002a",
            "mediaType": "application/json",
            "type": "employee",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/e346e355-2780-11e8-0532-9eed0000002a"
        }
    },
    "accountId": "e29ac72f-2780-11e8-0532-9eed00000001",
    "id": "a7404318-550f-11e8-56c0-000800000010",
    "meta": {
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=a740332f-550f-11e8-56c0-00080000000e",
        "mediaType": "application/json",
        "type": "product",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/a7404318-550f-11e8-56c0-000800000010"
    }
}
```


Метаданные товара содержат ссылку на этот товар ("href":"https://online.moysklad.ru/api/remap/1.2/entity/product/a7404318-550f-11e8-56c0-000800000010") - ее можно использовать для запроса конкретно этого товара.

> GET - запрос конкретного товара

``` shell
curl -X GET 
  -u login:password 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://online.moysklad.ru/api/remap/1.2/entity/product/a7404318-550f-11e8-56c0-000800000010"
```

> Ответ:

```json
{
    "isSerialTrackable": false,
    "modificationsCount": 0,
    "barcodes": [
        "2000000000268"
    ],
    "volume": 0.0,
    "weight": 0.0,
    "buyPrice": {
        "currency": {
            "meta": {
                "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=e37f9321-2780-11e8-0532-9eed00000058",
                "mediaType": "application/json",
                "type": "currency",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/e37f9321-2780-11e8-0532-9eed00000058"
            }
        },
        "value": 0.0
    },
    "salePrices": [
        {
            "priceType": "Цена продажи",
            "currency": {
                "meta": {
                    "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=e37f9321-2780-11e8-0532-9eed00000058",
                    "mediaType": "application/json",
                    "type": "currency",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/e37f9321-2780-11e8-0532-9eed00000058"
                }
            },
            "value": 0.0
        }
    ],
    "minPrice": 0.0,
    "pathName": "",
    "archived": false,
    "externalCode": "KIClF9t5gfh4qA3LD9a7u3",
    "code": "00001",
    "name": "Просто замечательный товар",
    "updated": "2018-05-11 14:37:15.000",
    "version": 0,
    "group": {
        "meta": {
            "mediaType": "application/json",
            "type": "group",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/e29e01d3-2780-11e8-0532-9eed00000002"
        }
    },
    "shared": false,
    "owner": {
        "meta": {
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=e346e355-2780-11e8-0532-9eed0000002a",
            "mediaType": "application/json",
            "type": "employee",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/e346e355-2780-11e8-0532-9eed0000002a"
        }
    },
    "accountId": "e29ac72f-2780-11e8-0532-9eed00000001",
    "id": "a7404318-550f-11e8-56c0-000800000010",
    "meta": {
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=a740332f-550f-11e8-56c0-00080000000e",
        "mediaType": "application/json",
        "type": "product",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/a7404318-550f-11e8-56c0-000800000010"
    }
}
```

Либо для изменения этого товара:

> PUT - изменение товара

``` shell
curl -X PUT 
  -u login:password 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://online.moysklad.ru/api/remap/1.2/entity/product/a7404318-550f-11e8-56c0-000800000010"
  -d '{"name":"Новое наименование"}
```

> Ответ:

``` json
{
    "isSerialTrackable": false,
    "modificationsCount": 0,
    "barcodes": [
        "2000000000268"
    ],
    "volume": 0,
    "weight": 0,
    "buyPrice": {
        "currency": {
            "meta": {
                "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=e37f9321-2780-11e8-0532-9eed00000058",
                "mediaType": "application/json",
                "type": "currency",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/e37f9321-2780-11e8-0532-9eed00000058"
            }
        },
        "value": 0
    },
    "salePrices": [
        {
            "priceType": "Цена продажи",
            "currency": {
                "meta": {
                    "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=e37f9321-2780-11e8-0532-9eed00000058",
                    "mediaType": "application/json",
                    "type": "currency",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/e37f9321-2780-11e8-0532-9eed00000058"
                }
            },
            "value": 0
        }
    ],
    "minPrice": 0,
    "pathName": "",
    "archived": false,
    "externalCode": "KIClF9t5gfh4qA3LD9a7u3",
    "code": "00001",
    "name": "Новое наименование",
    "updated": "2018-05-11 16:46:50.000",
    "version": 1,
    "group": {
        "meta": {
            "mediaType": "application/json",
            "type": "group",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/e29e01d3-2780-11e8-0532-9eed00000002"
        }
    },
    "shared": false,
    "owner": {
        "meta": {
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=e346e355-2780-11e8-0532-9eed0000002a",
            "mediaType": "application/json",
            "type": "employee",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/e346e355-2780-11e8-0532-9eed0000002a"
        }
    },
    "accountId": "e29ac72f-2780-11e8-0532-9eed00000001",
    "id": "a7404318-550f-11e8-56c0-000800000010",
    "meta": {
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=a740332f-550f-11e8-56c0-00080000000e",
        "mediaType": "application/json",
        "type": "product",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/a7404318-550f-11e8-56c0-000800000010"
    }
}
```


А также для удаления товара:

> DELETE - удаление товара

``` shell
curl -X DELETE 
  -u login:password 
  "https://online.moysklad.ru/api/remap/1.2/entity/product/a7404318-550f-11e8-56c0-000800000010"
```

При успешном удалении возвращается пустой ответ с кодом 200, иначе ошибка с кодом 404.

### Пустые поля

У товаров есть необязательное поле country (страна). Создавая товар мы его не заполнили, поэтому в выдаче этого товара оно отсутствует:

Заполним страну у товара. Поля, которые являются объектами, нужно передавать в виде метаданных

> При обновлении объектов не обязательно передавать все поля. При указании части полей будут изменены только переданные поля.

``` shell
curl -X PUT 
  -u login:password 
  -H "Content-Type: application/json" 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://online.moysklad.ru/api/remap/1.2/entity/product/a7404318-550f-11e8-56c0-000800000010" -d
```

> Ответ:

```json
{
    "country": {
        "meta": {
            "mediaType": "application/json",
            "type": "country",
            "metadataHref": "<https://online.moysklad.ru/api/remap/1.1>[/entity/country/metadata](http://localhost:8081/api/remap/1.2/entity/country/metadata)",
            "href": "<https://online.moysklad.ru/api/remap/1.1>/[entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608](http://localhost:8081/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608)"
        }
    }
}
```

> Ответ:

```json
{
    "isSerialTrackable": false,
    "modificationsCount": 0,
    "barcodes": [
        "2000000000268"
    ],
    "volume": 0,
    "weight": 0,
    "country": {
        "meta": {
            "mediaType": "application/json",
            "type": "country",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608"
        }
    },
    "buyPrice": {
        "currency": {
            "meta": {
                "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=e37f9321-2780-11e8-0532-9eed00000058",
                "mediaType": "application/json",
                "type": "currency",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/e37f9321-2780-11e8-0532-9eed00000058"
            }
        },
        "value": 0
    },
    "salePrices": [
        {
            "priceType": "Цена продажи",
            "currency": {
                "meta": {
                    "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=e37f9321-2780-11e8-0532-9eed00000058",
                    "mediaType": "application/json",
                    "type": "currency",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/e37f9321-2780-11e8-0532-9eed00000058"
                }
            },
            "value": 0
        }
    ],
    "minPrice": 0,
    "pathName": "",
    "archived": false,
    "externalCode": "KIClF9t5gfh4qA3LD9a7u3",
    "code": "00001",
    "description": "Описание товара",
    "name": "Новое наименование",
    "updated": "2018-05-11 16:56:15.000",
    "version": 2,
    "group": {
        "meta": {
            "mediaType": "application/json",
            "type": "group",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/e29e01d3-2780-11e8-0532-9eed00000002"
        }
    },
    "shared": false,
    "owner": {
        "meta": {
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=e346e355-2780-11e8-0532-9eed0000002a",
            "mediaType": "application/json",
            "type": "employee",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/e346e355-2780-11e8-0532-9eed0000002a"
        }
    },
    "accountId": "e29ac72f-2780-11e8-0532-9eed00000001",
    "id": "a7404318-550f-11e8-56c0-000800000010",
    "meta": {
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=a740332f-550f-11e8-56c0-00080000000e",
        "mediaType": "application/json",
        "type": "product",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/a7404318-550f-11e8-56c0-000800000010"
    }
}
```

Чтобы удалить значение из поля типа объект,  в запросе на обновление сущности нужно передать в данном поле null. Это возможно, если поле не является обязательным, или же если данное поле в основном интерфейсе может содержать пустое значение. Например, удалим у товара страну

> Запрос на неверное обновление

``` shell
curl -X PUT 
  -u login:password 
  -H "Content-Type: application/json" 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://online.moysklad.ru/api/remap/1.2/entity/product/a7404318-550f-11e8-56c0-000800000010" 
  -d '{"country": null}'
```

> Ответ:

```json
{
    "isSerialTrackable": false,
    "modificationsCount": 0,
    "barcodes": [
        "2000000000268"
    ],
    "volume": 0,
    "weight": 0,
    "buyPrice": {
        "currency": {
            "meta": {
                "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=e37f9321-2780-11e8-0532-9eed00000058",
                "mediaType": "application/json",
                "type": "currency",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/e37f9321-2780-11e8-0532-9eed00000058"
            }
        },
        "value": 0
    },
    "salePrices": [
        {
            "priceType": "Цена продажи",
            "currency": {
                "meta": {
                    "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=e37f9321-2780-11e8-0532-9eed00000058",
                    "mediaType": "application/json",
                    "type": "currency",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/e37f9321-2780-11e8-0532-9eed00000058"
                }
            },
            "value": 0
        }
    ],
    "minPrice": 0,
    "pathName": "",
    "archived": false,
    "externalCode": "KIClF9t5gfh4qA3LD9a7u3",
    "code": "00001",
    "description": "Описание товара",
    "name": "Новое наименование",
    "updated": "2018-05-11 16:58:31.000",
    "version": 3,
    "group": {
        "meta": {
            "mediaType": "application/json",
            "type": "group",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/e29e01d3-2780-11e8-0532-9eed00000002"
        }
    },
    "shared": false,
    "owner": {
        "meta": {
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=e346e355-2780-11e8-0532-9eed0000002a",
            "mediaType": "application/json",
            "type": "employee",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/e346e355-2780-11e8-0532-9eed0000002a"
        }
    },
    "accountId": "e29ac72f-2780-11e8-0532-9eed00000001",
    "id": "a7404318-550f-11e8-56c0-000800000010",
    "meta": {
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=a740332f-550f-11e8-56c0-00080000000e",
        "mediaType": "application/json",
        "type": "product",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/a7404318-550f-11e8-56c0-000800000010"
    }
}
```    

### Формат даты и времени

В JSON API поля типа дата-время (момент времени) - это строка в формате:

-   Без миллисекунд: ГГГГ-ММ-ДД ЧЧ:мм:сс
-   С миллисекундами: ГГГГ-ММ-ДД ЧЧ:мм:сс.ммм

У товаров есть поле updated типа дата-время (момент последнего обновления товара, только для чтения). Во всех предыдущих примерах оно возвращалось в формате без миллисекунд. Для получения полей типа дата-время с миллисекундами нужно добавить специальный заголовок к запросу: X-Lognex-Format-Millisecond со значением true.

> Запрос

``` shell
curl -X GET 
  -u login:password 
  -H "Lognex-Pretty-Print-JSON: true" 
  -H "X-Lognex-Format-Millisecond: true" 
  "https://online.moysklad.ru/api/remap/1.2/entity/product"
```

> Ответ:

```json
{
    "isSerialTrackable": false,
    "modificationsCount": 0,
    "barcodes": [
        "2000000000268"
    ],
    "volume": 0,
    "weight": 0,
    "buyPrice": {
        "currency": {
            "meta": {
                "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=e37f9321-2780-11e8-0532-9eed00000058",
                "mediaType": "application/json",
                "type": "currency",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/e37f9321-2780-11e8-0532-9eed00000058"
            }
        },
        "value": 0
    },
    "salePrices": [
        {
            "priceType": "Цена продажи",
            "currency": {
                "meta": {
                    "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=e37f9321-2780-11e8-0532-9eed00000058",
                    "mediaType": "application/json",
                    "type": "currency",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/e37f9321-2780-11e8-0532-9eed00000058"
                }
            },
            "value": 0
        }
    ],
    "minPrice": 0,
    "pathName": "",
    "archived": false,
    "externalCode": "KIClF9t5gfh4qA3LD9a7u3",
    "code": "00001",
    "description": "Описание товара",
    "name": "Новое наименование",
    "updated": "2018-05-11 16:58:31.308",
    "version": 3,
    "group": {
        "meta": {
            "mediaType": "application/json",
            "type": "group",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/e29e01d3-2780-11e8-0532-9eed00000002"
        }
    },
    "shared": false,
    "owner": {
        "meta": {
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=e346e355-2780-11e8-0532-9eed0000002a",
            "mediaType": "application/json",
            "type": "employee",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/e346e355-2780-11e8-0532-9eed0000002a"
        }
    },
    "accountId": "e29ac72f-2780-11e8-0532-9eed00000001",
    "id": "a7404318-550f-11e8-56c0-000800000010",
    "meta": {
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=a740332f-550f-11e8-56c0-00080000000e",
        "mediaType": "application/json",
        "type": "product",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/a7404318-550f-11e8-56c0-000800000010"
    }
}
```


При использовании этого заголовка в запросах на создание/обновление сущностей, а также в параметрах фильтрации нужно указывать поля типа дата-время именно в этом формате.

### Разделение на entity и report

Большинство методов JSON API разделены на два больших раздела - entity и report.

-   entity - работа с сущностями. Получение, создание, обновление, удаление.
-   report - отчеты. Получение различных сводных данных, которые вычисляются на основе существующих документов.

Все рассмотренные выше методы относятся к entity - работа с сущностями типа product (товар). Возможности фильтрации и сортировки определяются структурой полей конкретного типа. Каждая сущность имеет уникальный id, и существуют методы по работе с отдельными объектами.

Структура отчетов, а также возможности фильтрации специфичны для каждого отдельного отчета. Отчеты представляют собой определенный срез информации на основе совокупности документов. Для примера рассмотрим отчет остатков товаров на складе. Мы создали один товар и не создавали никаких документов, поэтому количество этого товара равно нулю. По умолчанию ненулевые остатки в этом отчете скрыты. Для того, чтобы они отобразились в запросе, использован параметр stockMode со значением all.

> Запрос

``` shell
curl -X GET 
  -u login:password 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://online.moysklad.ru/api/remap/1.2/report/stock/all?stockMode=all"
```

> Ответ:

```json
{
    "rows": [
        {
            "externalCode": "KIClF9t5gfh4qA3LD9a7u3",
            "uom": {
            },
            "salePrice": 0,
            "price": 0,
            "code": "00001",
            "name": "Новое наименование",
            "quantity": 0,
            "reserve": 0,
            "inTransit": 0,
            "stock": 0,
            "meta": {
                "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=a740332f-550f-11e8-56c0-00080000000e",
                "mediaType": "application/json",
                "type": "product",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/a7404318-550f-11e8-56c0-000800000010?expand=supplier"
            }
        }
    ],
    "meta": {
        "offset": 0,
        "limit": 25,
        "size": 1,
        "mediaType": "application/json",
        "type": "stock",
        "href": "https://online.moysklad.ru/api/remap/1.2/report/stock/all?stockMode=all"
    },
    "context": {
        "employee": {
            "meta": {
                "mediaType": "application/json",
                "type": "employee",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/context/employee"
            }
        }
    }
}
```

## Фильтрация, листание, поиск и сортировка

### Фильтрация

Для фильтрации выборки по нескольким полям используется url параметр filter. Значение этого параметра - urlencoded строка с поисковыми условиями, перечисленными через ';'. Каждое поисковое условие - это сочетание названия поля, оператора и константы. Фильтрация недоступна для полей-массивов (например поле **barcodes**).Фильтрация товаров по имени и времени обновления "name=Новое наименование;updated&gt;2018-01-01 00:00:00"

> Запрос

``` shell
curl -X GET 
  -u login:password 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://online.moysklad.ru/api/remap/1.2/entity/product?filter=name=%D0%9D%D0%BE%D0%B2%D0%BE%D0%B5%20%D0%BD%D0%B0%D0%B8%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5;updated%3E2018-01-01%2000:00:00"
```

> Ответ:

```json
{
    "rows": [
        {
            "isSerialTrackable": false,
            "modificationsCount": 0,
            "barcodes": [
                "2000000000268"
            ],
            "volume": 0,
            "weight": 0,
            "buyPrice": {
                "currency": {
                    "meta": {
                        "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=e37f9321-2780-11e8-0532-9eed00000058",
                        "mediaType": "application/json",
                        "type": "currency",
                        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/e37f9321-2780-11e8-0532-9eed00000058"
                    }
                },
                "value": 0
            },
            "salePrices": [
                {
                    "priceType": "Цена продажи",
                    "currency": {
                        "meta": {
                            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=e37f9321-2780-11e8-0532-9eed00000058",
                            "mediaType": "application/json",
                            "type": "currency",
                            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/e37f9321-2780-11e8-0532-9eed00000058"
                        }
                    },
                    "value": 0
                }
            ],
            "minPrice": 0,
            "pathName": "",
            "archived": false,
            "externalCode": "KIClF9t5gfh4qA3LD9a7u3",
            "code": "00001",
            "name": "Новое наименование",
            "updated": "2018-05-11 16:58:31.000",
            "version": 3,
            "group": {
                "meta": {
                    "mediaType": "application/json",
                    "type": "group",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/e29e01d3-2780-11e8-0532-9eed00000002"
                }
            },
            "shared": false,
            "owner": {
                "meta": {
                    "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=e346e355-2780-11e8-0532-9eed0000002a",
                    "mediaType": "application/json",
                    "type": "employee",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/e346e355-2780-11e8-0532-9eed0000002a"
                }
            },
            "accountId": "e29ac72f-2780-11e8-0532-9eed00000001",
            "id": "a7404318-550f-11e8-56c0-000800000010",
            "meta": {
                "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=a740332f-550f-11e8-56c0-00080000000e",
                "mediaType": "application/json",
                "type": "product",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/a7404318-550f-11e8-56c0-000800000010"
            }
        }
    ],
    "meta": {
        "offset": 0,
        "limit": 25,
        "size": 1,
        "mediaType": "application/json",
        "type": "product",
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product?filter=name=%D0%9D%D0%BE%D0%B2%D0%BE%D0%B5%20%D0%BD%D0%B0%D0%B8%D0%BC%D0%B5%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5;updated%3E2018-01-01%2000:00:00"
    },
    "context": {
        "employee": {
            "meta": {
                "mediaType": "application/json",
                "type": "employee",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/context/employee"
            }
        }
    }
}

```


### Листание

Большинство списков и отчетов поддерживают листание. За него отвечают два параметра:

-   **offset** — смещение от первого элемента (считается с нуля);
-   **limit** — количество элементов на странице (по умолчанию 25, максимум 1000).

Если при запросе списка, возвращаются не все элементы, в метаданных коллекции присутствуют специальные поля: **previousHref** и **nextHref**, представляющие запросы предыдущей и следующей страниц данных.

Рассмотрим на примере запроса стран.

> Запрос

``` shell
curl -X GET 
  -u login:password 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://online.moysklad.ru/api/remap/1.2/entity/country"
```

> Ответ:

```json
{
    "rows": [
        {
            "externalCode": "504",
            "code": "504",
            "description": "Королевство Марокко",
            "name": "Марокко",
            "updated": "2012-11-02 12:04:13.000",
            "version": 0,
            "id": "000d77a9-3000-4f81-a995-6b9cffdee1d2",
            "meta": {
                "mediaType": "application/json",
                "type": "country",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/000d77a9-3000-4f81-a995-6b9cffdee1d2"
            }
        }
    ],
    "meta": {
        "nextHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/?limit=25&offset=25",
        "offset": 0,
        "limit": 25,
        "size": 248,
        "mediaType": "application/json",
        "type": "country",
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/"
    },
    "context": {
        "employee": {
            "meta": {
                "mediaType": "application/json",
                "type": "employee",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/context/employee"
            }
        }
    }
}

```

Метаданные коллекции содержат поле `"nextHref": "<https://online.moysklad.ru/api/remap/1.2/entity/country/?limit=25&offset=25>"`, данный запрос вернет следующую страницу данных.

> Запрос

``` shell
curl -X GET 
  -u login:password 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://online.moysklad.ru/api/remap/1.2/entity/country/?limit=25&offset=25"
```

> Ответ:

```json
{
    "rows": [
        {
            "externalCode": "376",
            "code": "376",
            "description": "Государство Израиль",
            "name": "Израиль",
            "updated": "2012-11-02 12:04:12.000",
            "version": 0,
            "id": "14a66b93-8edc-44fb-915a-61a63db190ed",
            "meta": {
                "mediaType": "application/json",
                "type": "country",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/14a66b93-8edc-44fb-915a-61a63db190ed"
            }
        }
    ],
    "meta": {
        "previousHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/?offset=0&limit=25",
        "nextHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/?offset=50&limit=25",
        "offset": 25,
        "limit": 25,
        "size": 248,
        "mediaType": "application/json",
        "type": "country",
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/?limit=25&offset=25"
    },
    "context": {
        "employee": {
            "meta": {
                "mediaType": "application/json",
                "type": "employee",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/context/employee"
            }
        }
    }
}

```

Теперь метаданные содержат оба поля `"nextHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/?offset=50&limit=25", "previousHref": "<https://online.moysklad.ru/api/remap/1.2/entity/country/?offset=0&limit=25>"`. Эти запросы вернут следующую и предыдущую страницы соответственно.

### Поиск

В JSON API можно осуществлять контекстный поиск среди списка сущностей определённого типа по их строковым полям. Проверка уникальна для каждой сущности. Поиск работает по префиксам слов. Для этого используется url параметр поиска search

Результатом поиска будет отсортированный по релевантности список сущностей данного типа, прошедших фильтрацию по переданной поисковой строке. В отличии от фильтрации выборки с помощью параметра filter, при которой значения проверяются на точное совпадение, при контекстном поиске проверка на совпадение не строгая.

Контекстный поиск стран `"search=мари"`

> Запрос

``` shell
curl -X GET 
  -u login:password 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://online.moysklad.ru/api/remap/1.2/entity/country/?search=%D0%BC%D0%B0%D1%80%D0%B8>"
```

> Ответ:

```json
{
    "rows": [
        {
            "externalCode": "674",
            "code": "674",
            "description": "Республика Сан-Марино",
            "name": "Сан-марино",
            "updated": "2012-11-02 12:04:14.000",
            "version": 0,
            "id": "34ad68f6-a8c6-4143-a7d9-7a9078f0e1e4",
            "meta": {
                "mediaType": "application/json",
                "type": "country",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/34ad68f6-a8c6-4143-a7d9-7a9078f0e1e4"
            }
        },
        {
            "externalCode": "580",
            "code": "580",
            "description": "Содружество Северных Марианских островов",
            "name": "Северные Марианские Острова",
            "updated": "2012-11-02 12:04:14.000",
            "version": 0,
            "id": "9bb545bc-b467-43ee-bf25-32c20ce1d4aa",
            "meta": {
                "mediaType": "application/json",
                "type": "country",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/9bb545bc-b467-43ee-bf25-32c20ce1d4aa"
            }
        }
    ],
    "meta": {
        "offset": 0,
        "limit": 25,
        "size": 2,
        "mediaType": "application/json",
        "type": "country",
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/?search=%D0%BC%D0%B0%D1%80%D0%B8"
    },
    "context": {
        "employee": {
            "meta": {
                "mediaType": "application/json",
                "type": "employee",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/context/employee"
            }
        }
    }
}
```


### Сортировка

Для сортировки списка объектов используется url параметр order. Значение этого параметра - urlencoded строка с условиями сортировки, перечисленными через ';'.  Каждое условие сортировки - это сочетание названия поля, запятой (опционально, если указывается направление сортировки), направления сортировки (опционально: может принимать значения asc и desc. Значение по умолчанию - asc).

Сортировка поддерживается для следующих типов полей: числовой, строковый, дата-время, логический и uuid.

> Запрос

``` shell
curl -X GET 
  -u login:password 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://online.moysklad.ru/api/remap/1.2/entity/country/?order=name,desc;updated"
```

> Ответ:

```json
{
    "rows": [
        {
            "externalCode": "392",
            "code": "392",
            "name": "Япония",
            "updated": "2012-11-02 12:04:15.000",
            "version": 0,
            "id": "00999522-23d6-40e6-870e-ec7f7bd8d354",
            "meta": {
                "mediaType": "application/json",
                "type": "country",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/00999522-23d6-40e6-870e-ec7f7bd8d354"
            }
        },
        {
            "externalCode": "388",
            "code": "388",
            "name": "Ямайка",
            "updated": "2012-11-02 12:04:15.000",
            "version": 0,
            "id": "886b465f-5bb0-4c6a-9b63-9abaf5157a26",
            "meta": {
                "mediaType": "application/json",
                "type": "country",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/886b465f-5bb0-4c6a-9b63-9abaf5157a26"
            }
        }
    ],
    "meta": {
        "nextHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/?order=name%2Cdesc%3Bupdated&limit=25&offset=25",
        "offset": 0,
        "limit": 25,
        "size": 248,
        "mediaType": "application/json",
        "type": "country",
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/?order=name,desc;updated"
    },
    "context": {
        "employee": {
            "meta": {
                "mediaType": "application/json",
                "type": "employee",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/context/employee"
            }
        }
    }
}

```

## Что такое expand

В JSON API в составе сущностей поля, которые являются объектами, выводятся в виде метаданных. Для того, чтобы вместо ссылок получить сами связанные объекты, не обязательно делать отдельные запросы для каждого из них. Вместо этого, вместе с запросом на получение сущности, нужно передать параметр expand. В качестве значения данного параметра нужно перечислить через запятую все необходимые поля, на месте которых вы бы хотели видеть объекты.

Например, у товара есть поле owner (ссылка на Сотрудника), а у сотрудника есть поле group (отдел сотрудника). Запросим товар, чтобы у него был развернут owner, а у owner был развернут group.

> Запрос

``` shell
curl -X GET 
  -u login:password 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://online.moysklad.ru/api/remap/1.2/entity/product/a7404318-550f-11e8-56c0-000800000010?expand=owner,owner.group>"
```

> Ответ:

```json
{
    "isSerialTrackable": false,
    "modificationsCount": 0,
    "barcodes": [
        "2000000000268"
    ],
    "volume": 0,
    "weight": 0,
    "buyPrice": {
        "currency": {
            "meta": {
                "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=e37f9321-2780-11e8-0532-9eed00000058",
                "mediaType": "application/json",
                "type": "currency",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/e37f9321-2780-11e8-0532-9eed00000058"
            }
        },
        "value": 0
    },
    "salePrices": [
        {
            "priceType": "Цена продажи",
            "currency": {
                "meta": {
                    "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=e37f9321-2780-11e8-0532-9eed00000058",
                    "mediaType": "application/json",
                    "type": "currency",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/e37f9321-2780-11e8-0532-9eed00000058"
                }
            },
            "value": 0
        }
    ],
    "minPrice": 0,
    "pathName": "",
    "archived": false,
    "externalCode": "KIClF9t5gfh4qA3LD9a7u3",
    "code": "00001",
    "name": "Новое наименование",
    "updated": "2018-05-11 16:58:31.000",
    "version": 3,
    "group": {
        "meta": {
            "mediaType": "application/json",
            "type": "group",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/e29e01d3-2780-11e8-0532-9eed00000002"
        }
    },
    "shared": false,
    "owner": {
        "cashier": {
            "retailStore": {
                "meta": {
                    "uuidHref": "https://online.moysklad.ru/app/#retailstore/edit?id=e3c30b43-2780-11e8-0532-9eed00000060",
                    "mediaType": "application/json",
                    "type": "retailstore",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/e3c30b43-2780-11e8-0532-9eed00000060"
                }
            },
            "employee": {
                "meta": {
                    "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=e346e355-2780-11e8-0532-9eed0000002a",
                    "mediaType": "application/json",
                    "type": "employee",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/e346e355-2780-11e8-0532-9eed0000002a"
                }
            },
            "accountId": "e29ac72f-2780-11e8-0532-9eed00000001",
            "id": "e3c32011-2780-11e8-0532-9eed00000061"
        },
        "shortFio": "Администратор",
        "fullName": "Администратор",
        "lastName": "Администратор",
        "email": "company@company.com",
        "uid": "admin@company",
        "created": "2018-03-14 15:11:55.000",
        "archived": false,
        "externalCode": "gIdpSp49iS1xZlWs0O7qD1",
        "name": "Администратор",
        "updated": "2018-03-14 15:11:56.000",
        "version": 2,
        "group": {
            "name": "Основной",
            "meta": {
                "mediaType": "application/json",
                "type": "group",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/e29e01d3-2780-11e8-0532-9eed00000002"
            }
        },
        "shared": true,
        "owner": {
            "meta": {
                "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=e346e355-2780-11e8-0532-9eed0000002a",
                "mediaType": "application/json",
                "type": "employee",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/e346e355-2780-11e8-0532-9eed0000002a"
            }
        },
        "accountId": "e29ac72f-2780-11e8-0532-9eed00000001",
        "id": "e346e355-2780-11e8-0532-9eed0000002a",
        "meta": {
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=e346e355-2780-11e8-0532-9eed0000002a",
            "mediaType": "application/json",
            "type": "employee",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/e346e355-2780-11e8-0532-9eed0000002a"
        }
    },
    "accountId": "e29ac72f-2780-11e8-0532-9eed00000001",
    "id": "a7404318-550f-11e8-56c0-000800000010",
    "meta": {
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=a740332f-550f-11e8-56c0-00080000000e",
        "mediaType": "application/json",
        "type": "product",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/a7404318-550f-11e8-56c0-000800000010?expand=owner"
    }
}
```


Максимальный уровень вложенности expand: 3.

Также expand можно применять для результатов операций создания и обновления.

> Запрос

``` shell
curl -X PUT 
  -u login:password 
  -H "Lognex-Pretty-Print-JSON: true" 
  "https://online.moysklad.ru/api/remap/1.2/entity/product/a7404318-550f-11e8-56c0-000800000010?expand=owner,owner.group" 
  -d '{"name":"Новое наименование"}'
```

> Ответ:

```json
{
    "isSerialTrackable": false,
    "modificationsCount": 0,
    "barcodes": [
        "2000000000268"
    ],
    "volume": 0,
    "weight": 0,
    "buyPrice": {
        "currency": {
            "meta": {
                "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=e37f9321-2780-11e8-0532-9eed00000058",
                "mediaType": "application/json",
                "type": "currency",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/e37f9321-2780-11e8-0532-9eed00000058"
            }
        },
        "value": 0
    },
    "salePrices": [
        {
            "priceType": "Цена продажи",
            "currency": {
                "meta": {
                    "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=e37f9321-2780-11e8-0532-9eed00000058",
                    "mediaType": "application/json",
                    "type": "currency",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/e37f9321-2780-11e8-0532-9eed00000058"
                }
            },
            "value": 0
        }
    ],
    "minPrice": 0,
    "pathName": "",
    "archived": false,
    "externalCode": "KIClF9t5gfh4qA3LD9a7u3",
    "code": "00001",
    "name": "Новое наименование",
    "updated": "2018-05-11 16:58:31.000",
    "version": 3,
    "group": {
        "meta": {
            "mediaType": "application/json",
            "type": "group",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/e29e01d3-2780-11e8-0532-9eed00000002"
        }
    },
    "shared": false,
    "owner": {
        "cashier": {
            "retailStore": {
                "meta": {
                    "uuidHref": "https://online.moysklad.ru/app/#retailstore/edit?id=e3c30b43-2780-11e8-0532-9eed00000060",
                    "mediaType": "application/json",
                    "type": "retailstore",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/e3c30b43-2780-11e8-0532-9eed00000060"
                }
            },
            "employee": {
                "meta": {
                    "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=e346e355-2780-11e8-0532-9eed0000002a",
                    "mediaType": "application/json",
                    "type": "employee",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/e346e355-2780-11e8-0532-9eed0000002a"
                }
            },
            "accountId": "e29ac72f-2780-11e8-0532-9eed00000001",
            "id": "e3c32011-2780-11e8-0532-9eed00000061"
        },
        "shortFio": "Администратор",
        "fullName": "Администратор",
        "lastName": "Администратор",
        "email": "company@company.com",
        "uid": "admin@company",
        "created": "2018-03-14 15:11:55.000",
        "archived": false,
        "externalCode": "gIdpSp49iS1xZlWs0O7qD1",
        "name": "Администратор",
        "updated": "2018-03-14 15:18:23.000",
        "version": 3,
        "group": {
            "name": "Основной",
            "meta": {
                "mediaType": "application/json",
                "type": "group",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/e29e01d3-2780-11e8-0532-9eed00000002"
            }
        },
        "shared": true,
        "owner": {
            "meta": {
                "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=e346e355-2780-11e8-0532-9eed0000002a",
                "mediaType": "application/json",
                "type": "employee",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/e346e355-2780-11e8-0532-9eed0000002a"
            }
        },
        "accountId": "e29ac72f-2780-11e8-0532-9eed00000001",
        "id": "e346e355-2780-11e8-0532-9eed0000002a",
        "meta": {
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=e346e355-2780-11e8-0532-9eed0000002a",
            "mediaType": "application/json",
            "type": "employee",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/e346e355-2780-11e8-0532-9eed0000002a"
        }
    },
    "accountId": "e29ac72f-2780-11e8-0532-9eed00000001",
    "id": "a7404318-550f-11e8-56c0-000800000010",
    "meta": {
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=a740332f-550f-11e8-56c0-00080000000e",
        "mediaType": "application/json",
        "type": "product",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/a7404318-550f-11e8-56c0-000800000010?expand=owner"
    }
}
```
