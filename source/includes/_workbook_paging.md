## Листание

Если у вас несколько `документов` одного типа, то при запросе:

> Запрос

```shell
curl -X GET -u login:password -H "Lognex-Pretty-Print-JSON: true" "https://online.moysklad.ru/api/remap/1.2/entity/{document type}"
```
вы получите не полный список документов (далее коллекция), а только первую 1000 документов.

Так же под коллекцией понимаются позиции конкретного документа, получаемые по запросу:

> Запрос

```shell
curl -X GET -u login:password -H "Lognex-Pretty-Print-JSON: true" "https://online.moysklad.ru/api/remap/1.2/entity/{document type}/{id}/positions"
```

### Параметр limit
Для того, чтобы задать количество документов в коллекции необходимо использовать параметр **limit**.

Например, если хотите получить первые 10 заказов:

>Запрос

```shell
curl -X GET -u login:password -H "Lognex-Pretty-Print-JSON: true" "https://online.moysklad.ru/api/remap/1.2/entity/customerorder?limit=10"
```

> Результат:

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder?limit=10",
    "type": "customerorder",
    "mediaType": "application/json",
    "size": 1,
    "limit": 10,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/8f0cb4df-8e4b-11e8-9ff4-315000157f27",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
        "type": "customerorder",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#customerorder/edit?id=8f0cb4df-8e4b-11e8-9ff4-315000157f27"
      },
      "id": "8f0cb4df-8e4b-11e8-9ff4-315000157f27",
      "accountId": "2682c64f-8e4b-11e8-9109-f8fc0000791f",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/269d2c63-8e4b-11e8-9ff4-34e800153ba9",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=269d2c63-8e4b-11e8-9ff4-34e800153ba9"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/26830dad-8e4b-11e8-9109-f8fc00007920",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "version": 0,
      "updated": "2018-07-23 10:39:40.000",
      "name": "00001",
      "externalCode": "QIIdl043gI-rZzcOQlSvU2",
      "moment": "2018-07-23 10:39:00",
      "applicable": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/26ab3b12-8e4b-11e8-9ff4-34e800153bd8",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=26ab3b12-8e4b-11e8-9ff4-34e800153bd8"
          }
        }
      },
      "sum": 3000,
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/26ab1d5b-8e4b-11e8-9ff4-34e800153bd3",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=26ab1d5b-8e4b-11e8-9ff4-34e800153bd3"
        }
      },
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/6eb4becb-8e4b-11e8-9ff4-34e800154458",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=6eb4becb-8e4b-11e8-9ff4-34e800154458"
        }
      },
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/26aa3df9-8e4b-11e8-9ff4-34e800153bd1",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=26aa3df9-8e4b-11e8-9ff4-34e800153bd1"
        }
      },
      "state": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/26bcc58b-8e4b-11e8-9ff4-34e800153bee",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "documents": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/8f0cb4df-8e4b-11e8-9ff4-315000157f27/documents",
          "mediaType": "application/json",
          "size": 0,
          "limit": 100,
          "offset": 0
        }
      },
      "created": "2018-07-23 10:39:40.000",
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/8f0cb4df-8e4b-11e8-9ff4-315000157f27/positions",
          "type": "customerorderposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 100,
          "offset": 0
        }
      },
      "vatEnabled": true,
      "vatIncluded": true,
      "vatSum": 0,
      "payedSum": 3000,
      "shippedSum": 0,
      "invoicedSum": 0,
      "reservedSum": 0,
      "payments": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/e6db0e4b-8e4b-11e8-9ff4-315000158a13",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata",
            "type": "paymentin",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#paymentin/edit?id=e6db0e4b-8e4b-11e8-9ff4-315000158a13"
          },
          "linkedSum": 3000
        }
      ]
    }
  ]
}
```

Если хотите получить первые 10 позиций конкретного заказа:

> Запрос

```shell
curl -X GET -u login:password -H "Lognex-Pretty-Print-JSON: true" "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/8f0cb4df-8e4b-11e8-9ff4-315000157f27/positions?limit=10"
```

> Результат:

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/8f0cb4df-8e4b-11e8-9ff4-315000157f27/positions?limit=10",
    "type": "customerorderposition",
    "mediaType": "application/json",
    "size": 1,
    "limit": 10,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/8f0cb4df-8e4b-11e8-9ff4-315000157f27/positions/8f0cbb4f-8e4b-11e8-9ff4-315000157f28",
        "type": "customerorderposition",
        "mediaType": "application/json"
      },
      "id": "8f0cbb4f-8e4b-11e8-9ff4-315000157f28",
      "accountId": "2682c64f-8e4b-11e8-9109-f8fc0000791f",
      "quantity": 1,
      "price": 3000,
      "discount": 0,
      "vat": 0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/79d6b3a4-8e4b-11e8-9109-f8fc0015f142",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=79d6a9ba-8e4b-11e8-9109-f8fc0015f140"
        }
      },
      "shipped": 0,
      "reserve": 0
    }
  ]
}
```

### Параметр offset
Для того, чтобы пропустить вывод первых **N** объектов используется параметр **offset**. Данный параметр означает "сдвиг" указателя по коллекции, его можно понимать как "покажи мне **Limit** объектов, пропустив первые **offset** объектов."

Пример запроса заказов, пропустив первые 2 заказа:

> Запрос

```shell
curl -X GET -u login:password -H "Lognex-Pretty-Print-JSON: true" "https://online.moysklad.ru/api/remap/1.2/entity/customerorder?offset=2"
```

> Результат:

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder?offset=2",
    "type": "customerorder",
    "mediaType": "application/json",
    "size": 4,
    "limit": 25,
    "offset": 2,
    "previousHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder?offset=0&limit=23"
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7dcf5f6a-9b06-11e8-9ff4-34e8001263a8",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
        "type": "customerorder",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#customerorder/edit?id=7dcf5f6a-9b06-11e8-9ff4-34e8001263a8"
      },
      "id": "7dcf5f6a-9b06-11e8-9ff4-34e8001263a8",
      "accountId": "2682c64f-8e4b-11e8-9109-f8fc0000791f",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/269d2c63-8e4b-11e8-9ff4-34e800153ba9",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=269d2c63-8e4b-11e8-9ff4-34e800153ba9"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/26830dad-8e4b-11e8-9109-f8fc00007920",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "version": 0,
      "updated": "2018-08-08 15:28:01.000",
      "name": "00003",
      "externalCode": "2sZxuNjigz2djNapTKCXe2",
      "moment": "2018-08-08 15:27:00",
      "applicable": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/26ab3b12-8e4b-11e8-9ff4-34e800153bd8",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=26ab3b12-8e4b-11e8-9ff4-34e800153bd8"
          }
        }
      },
      "sum": 0,
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/26ab1d5b-8e4b-11e8-9ff4-34e800153bd3",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=26ab1d5b-8e4b-11e8-9ff4-34e800153bd3"
        }
      },
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/26ab32be-8e4b-11e8-9ff4-34e800153bd6",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=26ab32be-8e4b-11e8-9ff4-34e800153bd6"
        }
      },
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/26aa3df9-8e4b-11e8-9ff4-34e800153bd1",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=26aa3df9-8e4b-11e8-9ff4-34e800153bd1"
        }
      },
      "state": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/26bcc58b-8e4b-11e8-9ff4-34e800153bee",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "documents": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7dcf5f6a-9b06-11e8-9ff4-34e8001263a8/documents",
          "mediaType": "application/json",
          "size": 0,
          "limit": 100,
          "offset": 0
        }
      },
      "created": "2018-08-08 15:28:01.000",
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/7dcf5f6a-9b06-11e8-9ff4-34e8001263a8/positions",
          "type": "customerorderposition",
          "mediaType": "application/json",
          "size": 0,
          "limit": 100,
          "offset": 0
        }
      },
      "vatEnabled": true,
      "vatIncluded": true,
      "vatSum": 0,
      "payedSum": 0,
      "shippedSum": 0,
      "invoicedSum": 0,
      "reservedSum": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/862d3ef3-9b06-11e8-9107-504800125752",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
        "type": "customerorder",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#customerorder/edit?id=862d3ef3-9b06-11e8-9107-504800125752"
      },
      "id": "862d3ef3-9b06-11e8-9107-504800125752",
      "accountId": "2682c64f-8e4b-11e8-9109-f8fc0000791f",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/269d2c63-8e4b-11e8-9ff4-34e800153ba9",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=269d2c63-8e4b-11e8-9ff4-34e800153ba9"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/26830dad-8e4b-11e8-9109-f8fc00007920",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "version": 1,
      "updated": "2018-08-08 15:28:18.000",
      "name": "00004",
      "externalCode": "JSOw8ERyiwvLPBvRDSnt02",
      "moment": "2018-08-08 15:28:00",
      "applicable": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/26ab3b12-8e4b-11e8-9ff4-34e800153bd8",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=26ab3b12-8e4b-11e8-9ff4-34e800153bd8"
          }
        }
      },
      "sum": 3000,
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/26ab1d5b-8e4b-11e8-9ff4-34e800153bd3",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=26ab1d5b-8e4b-11e8-9ff4-34e800153bd3"
        }
      },
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/26ab2703-8e4b-11e8-9ff4-34e800153bd4",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=26ab2703-8e4b-11e8-9ff4-34e800153bd4"
        }
      },
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/26aa3df9-8e4b-11e8-9ff4-34e800153bd1",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=26aa3df9-8e4b-11e8-9ff4-34e800153bd1"
        }
      },
      "state": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/26bcc58b-8e4b-11e8-9ff4-34e800153bee",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "documents": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/862d3ef3-9b06-11e8-9107-504800125752/documents",
          "mediaType": "application/json",
          "size": 0,
          "limit": 100,
          "offset": 0
        }
      },
      "created": "2018-08-08 15:28:15.000",
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/862d3ef3-9b06-11e8-9107-504800125752/positions",
          "type": "customerorderposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 100,
          "offset": 0
        }
      },
      "vatEnabled": true,
      "vatIncluded": true,
      "vatSum": 0,
      "payedSum": 0,
      "shippedSum": 0,
      "invoicedSum": 0,
      "reservedSum": 0
    }
  ]
}
```

Также можно использовать сдвиг и в списке позиций:

> Запрос

```shell
curl -X GET -u login:password -H "Lognex-Pretty-Print-JSON: true" "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/8f0cb4df-8e4b-11e8-9ff4-315000157f27/positions?offset=2"
```

> Результат:

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/8f0cb4df-8e4b-11e8-9ff4-315000157f27/positions?offset=2",
    "type": "customerorderposition",
    "mediaType": "application/json",
    "size": 4,
    "limit": 25,
    "offset": 2,
    "previousHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/8f0cb4df-8e4b-11e8-9ff4-315000157f27/positions?offset=0&limit=23"
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/8f0cb4df-8e4b-11e8-9ff4-315000157f27/positions/feb1ddef-9b06-11e8-9ff4-31500011e05c",
        "type": "customerorderposition",
        "mediaType": "application/json"
      },
      "id": "feb1ddef-9b06-11e8-9ff4-31500011e05c",
      "accountId": "2682c64f-8e4b-11e8-9109-f8fc0000791f",
      "quantity": 1,
      "price": 0,
      "discount": 0,
      "vat": 0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/fa2d1148-9b06-11e8-9107-5048001261cb",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=fa2d0432-9b06-11e8-9107-5048001261c9"
        }
      },
      "shipped": 0,
      "reserve": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/8f0cb4df-8e4b-11e8-9ff4-315000157f27/positions/feb1e018-9b06-11e8-9ff4-31500011e05d",
        "type": "customerorderposition",
        "mediaType": "application/json"
      },
      "id": "feb1e018-9b06-11e8-9ff4-31500011e05d",
      "accountId": "2682c64f-8e4b-11e8-9109-f8fc0000791f",
      "quantity": 1,
      "price": 0,
      "discount": 0,
      "vat": 0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/fd16393c-9b06-11e8-9ff4-34e800137800",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=fd162eef-9b06-11e8-9ff4-34e8001377fe"
        }
      },
      "shipped": 0,
      "reserve": 0
    }
  ]
}
```


### Комбинации offset & limit

Давайте представим, что мы читаем книгу, содержание которой, это все заказы. Тогда каждый запрос это страница, на каждой странице **limit** слов. Номер слова, с которого начинается страница, это **offset**. Например, мы прочли 4 страницы по 40 слов и хотим прочесть следующую страницу .Тогда offset = 160, limit = 40, т.е. запрос будет таким:

> Запрос

```shell
curl -X GET -u login:password -H "Lognex-Pretty-Print-JSON: true" "https://online.moysklad.ru/api/remap/1.2/entity/customerorder?offset=160&limit=40"  
```
В таком виде вы получите в мете ответа 2 дополнительных параметра:

* nextHref - значение - href (ссылка, в которой уже проставлены параметры limit & offset), для следующей страницы
* previousHref - значение - href (ссылка, в которой уже проставлены параметры limit & offset), для предыдущей страницы

> Запрос

```shell
curl -X GET -u login:password -H "Lognex-Pretty-Print-JSON: true" "https://online.moysklad.ru/api/remap/1.2/entity/customerorder?offset=160&limit=3"
```

При таком запросе

* `"nextHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder?offset=163&limit=3"`
* `"previousHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder?offset=157&limit=3"`

> Результат:

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder?offset=160&limit=3",
    "type": "customerorder",
    "mediaType": "application/json",
    "size": 1119,
    "limit": 3,
    "offset": 160,
    "nextHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder?offset=163&limit=3",
    "previousHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder?offset=157&limit=3"
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/f39729bd-adde-44e2-9583-3dd12ac7e9cd",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
        "type": "customerorder",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#customerorder/edit?id=f39729bd-adde-44e2-9583-3dd12ac7e9cd"
      },
      "id": "f39729bd-adde-44e2-9583-3dd12ac7e9cd",
      "accountId": "45eb22e0-0e7b-11e2-1c31-3c4a92f3a0a7",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/8d701342-de17-4217-88fa-733f9c7ec1c7",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=8d701342-de17-4217-88fa-733f9c7ec1c7"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/0060ce12-d269-11e4-90a2-8ecb0001909b",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "version": 1,
      "updated": "2018-04-25 21:26:18.000",
      "name": "00037",
      "externalCode": "DILeadRegtebxNqFw4Iyy3",
      "moment": "2012-04-04 11:35:00",
      "applicable": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/c05298d8-dc34-11e6-8d16-0cc47a342c9a",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=c05298d8-dc34-11e6-8d16-0cc47a342c9a"
          }
        }
      },
      "sum": 22040,
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/386b4336-c449-4a6c-802f-6d0f0b76e185",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=386b4336-c449-4a6c-802f-6d0f0b76e185"
        }
      },
      "project": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/0b4bf954-ea53-408b-a387-ed3fae287b37",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#project/edit?id=0b4bf954-ea53-408b-a387-ed3fae287b37"
        }
      },
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f3559191-6b22-496a-9ac7-41762d8440d3",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=f3559191-6b22-496a-9ac7-41762d8440d3"
        }
      },
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/72737908-8b3b-50d5-9184-2a442c621551",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=72737908-8b3b-50d5-9184-2a442c621551"
        }
      },
      "organizationAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/72737908-8b3b-50d5-9184-2a442c621551/accounts/3f78b7a7-e5dc-11e3-1593-002590a28eca",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "state": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/9a7350d2-9e35-11e2-1dba-001b21d91495",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "documents": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/f39729bd-adde-44e2-9583-3dd12ac7e9cd/documents",
          "mediaType": "application/json",
          "size": 0,
          "limit": 100,
          "offset": 0
        }
      },
      "created": "2012-04-04 11:40:37.000",
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/f39729bd-adde-44e2-9583-3dd12ac7e9cd/positions",
          "type": "customerorderposition",
          "mediaType": "application/json",
          "size": 2,
          "limit": 100,
          "offset": 0
        }
      },
      "vatEnabled": true,
      "vatIncluded": true,
      "vatSum": 3362,
      "payedSum": 0,
      "shippedSum": 0,
      "invoicedSum": 0,
      "reservedSum": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/ce1314fc-f8b0-4743-85a2-8675c7b5dbb6",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
        "type": "customerorder",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#customerorder/edit?id=ce1314fc-f8b0-4743-85a2-8675c7b5dbb6"
      },
      "id": "ce1314fc-f8b0-4743-85a2-8675c7b5dbb6",
      "accountId": "45eb22e0-0e7b-11e2-1c31-3c4a92f3a0a7",
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/0060ce12-d269-11e4-90a2-8ecb0001909b",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "version": 0,
      "updated": "2012-04-05 22:37:28.000",
      "name": "00038",
      "description": "Заказ оформлен покупателем",
      "code": "49",
      "externalCode": "49",
      "moment": "2012-04-05 00:00:00",
      "applicable": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/c05298d8-dc34-11e6-8d16-0cc47a342c9a",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=c05298d8-dc34-11e6-8d16-0cc47a342c9a"
          }
        }
      },
      "sum": 34700,
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/15dd5da5-0e50-459e-a97b-2d504a6ce7f3",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=15dd5da5-0e50-459e-a97b-2d504a6ce7f3"
        }
      },
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/72737908-8b3b-50d5-9184-2a442c621551",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=72737908-8b3b-50d5-9184-2a442c621551"
        }
      },
      "organizationAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/72737908-8b3b-50d5-9184-2a442c621551/accounts/3f78b7a7-e5dc-11e3-1593-002590a28eca",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "state": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/2d860b73-22da-403d-9feb-92c51c4d1d78",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "documents": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/ce1314fc-f8b0-4743-85a2-8675c7b5dbb6/documents",
          "mediaType": "application/json",
          "size": 0,
          "limit": 100,
          "offset": 0
        }
      },
      "created": "2012-04-05 22:37:28.000",
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/ce1314fc-f8b0-4743-85a2-8675c7b5dbb6/positions",
          "type": "customerorderposition",
          "mediaType": "application/json",
          "size": 2,
          "limit": 100,
          "offset": 0
        }
      },
      "vatEnabled": true,
      "vatIncluded": true,
      "vatSum": 0,
      "payedSum": 0,
      "shippedSum": 0,
      "invoicedSum": 0,
      "reservedSum": 4700
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/d232aa22-0b3e-4fd6-a5fb-429f32c83c3c",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
        "type": "customerorder",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#customerorder/edit?id=d232aa22-0b3e-4fd6-a5fb-429f32c83c3c"
      },
      "id": "d232aa22-0b3e-4fd6-a5fb-429f32c83c3c",
      "accountId": "45eb22e0-0e7b-11e2-1c31-3c4a92f3a0a7",
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/0060ce12-d269-11e4-90a2-8ecb0001909b",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "version": 0,
      "updated": "2012-04-05 22:37:28.000",
      "name": "00038",
      "description": "Заказ оформлен покупателем",
      "code": "48",
      "externalCode": "48",
      "moment": "2012-04-05 00:00:00",
      "applicable": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/c05298d8-dc34-11e6-8d16-0cc47a342c9a",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=c05298d8-dc34-11e6-8d16-0cc47a342c9a"
          }
        }
      },
      "sum": 40000,
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/cdc1a908-0582-457d-a781-40e06bf0cbbe",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=cdc1a908-0582-457d-a781-40e06bf0cbbe"
        }
      },
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/72737908-8b3b-50d5-9184-2a442c621551",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=72737908-8b3b-50d5-9184-2a442c621551"
        }
      },
      "organizationAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/72737908-8b3b-50d5-9184-2a442c621551/accounts/3f78b7a7-e5dc-11e3-1593-002590a28eca",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "state": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/2d860b73-22da-403d-9feb-92c51c4d1d78",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "documents": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/d232aa22-0b3e-4fd6-a5fb-429f32c83c3c/documents",
          "mediaType": "application/json",
          "size": 0,
          "limit": 100,
          "offset": 0
        }
      },
      "created": "2012-04-05 22:37:28.000",
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/d232aa22-0b3e-4fd6-a5fb-429f32c83c3c/positions",
          "type": "customerorderposition",
          "mediaType": "application/json",
          "size": 2,
          "limit": 100,
          "offset": 0
        }
      },
      "vatEnabled": true,
      "vatIncluded": true,
      "vatSum": 0,
      "payedSum": 0,
      "shippedSum": 0,
      "invoicedSum": 0,
      "reservedSum": 10000
    }
  ]
}
```
