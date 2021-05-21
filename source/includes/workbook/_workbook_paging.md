## Листание

Если у вас несколько `документов` одного типа, то при запросе:

> Запрос

```shell
curl -X GET -u login:password -H "Lognex-Pretty-Print-JSON: true" "https://online.moysklad.ru/api/remap/1.2/entity/{document type}"
```
вы получите не полный список документов (далее коллекция), а только первую 1000 документов.

Так же под коллекцией понимаются позиции конкретного документа, получаемые по запросу позиций документов.

> Запрос получения позиций документов

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder?limi=10",
    "type": "customerorder",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/51bb185a-b0e7-11ea-ac12-000d0000012a",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
        "type": "customerorder",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#customerorder/edit?id=51bb185a-b0e7-11ea-ac12-000d0000012a"
      },
      "id": "51bb185a-b0e7-11ea-ac12-000d0000012a",
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
      "updated": "2020-06-18 01:10:14.316",
      "name": "00002",
      "externalCode": "TtlxUk20gsnwJDN4ikkc03",
      "moment": "2020-06-18 01:10:00.000",
      "applicable": true,
      "rate": {
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
      "sum": 10000.0,
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/d92b8a46-b0e2-11ea-ac12-000d00000072",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=d92b8a46-b0e2-11ea-ac12-000d00000072"
        }
      },
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/d9253a1b-b0e2-11ea-ac12-000d00000070",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=d9253a1b-b0e2-11ea-ac12-000d00000070"
        }
      },
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/d9253a1b-b0e2-11ea-ac12-000d00000070",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=d9253a1b-b0e2-11ea-ac12-000d00000070"
        }
      },
      "state": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/d9e51641-b0e2-11ea-ac12-000d00000092",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "created": "2020-06-18 01:10:14.337",
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/51bb185a-b0e7-11ea-ac12-000d0000012a/positions",
          "type": "customerorderposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "vatEnabled": true,
      "vatIncluded": true,
      "vatSum": 0.0,
      "payedSum": 10000.0,
      "shippedSum": 0.0,
      "invoicedSum": 0.0,
      "reservedSum": 0.0,
      "payments": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/58ba7a7f-b0e7-11ea-ac12-000d00000131",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata",
            "type": "paymentin",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#paymentin/edit?id=58ba7a7f-b0e7-11ea-ac12-000d00000131"
          },
          "linkedSum": 10000.0
        }
      ]
    }
  ]
}
```

Если хотите получить первые 10 позиций конкретного заказа:

> Запрос

```shell
curl -X GET -u login:password -H "Lognex-Pretty-Print-JSON: true" "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/51bb185a-b0e7-11ea-ac12-000d0000012a/positions?limit=10"
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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/51bb185a-b0e7-11ea-ac12-000d0000012a/positions?limi=10",
    "type": "customerorderposition",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/51bb185a-b0e7-11ea-ac12-000d0000012a/positions/51bb23d8-b0e7-11ea-ac12-000d0000012b",
        "type": "customerorderposition",
        "mediaType": "application/json"
      },
      "id": "51bb23d8-b0e7-11ea-ac12-000d0000012b",
      "accountId": "d865ef6f-b0e2-11ea-ac12-000c00000001",
      "quantity": 1.0,
      "price": 10000.0,
      "discount": 0.0,
      "vat": 0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/0884d27a-b0e3-11ea-ac12-000b00000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=088303a8-b0e3-11ea-ac12-000b00000000"
        }
      },
      "shipped": 0.0,
      "reserve": 0.0
    }
  ]
}
```

### Параметр offset
Для того, чтобы пропустить вывод первых **N** объектов используется параметр **offset**. Данный параметр означает "сдвиг" указателя по коллекции, 
его можно понимать как "покажи мне **Limit** объектов, пропустив первые **offset** объектов."

Пример запроса заказов, пропустив первые 2 заказа:

> Запрос

```shell
curl -X GET -u login:password -H "Lognex-Pretty-Print-JSON: true" "https://online.moysklad.ru/api/remap/1.2/entity/customerorder?offset=1"
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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder?offset=1",
    "type": "customerorder",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 1,
    "previousHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder?offset=0&limit=999"
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/b610f564-b155-11ea-ac12-000d0000001c",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
        "type": "customerorder",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#customerorder/edit?id=b610f564-b155-11ea-ac12-000d0000001c"
      },
      "id": "b610f564-b155-11ea-ac12-000d0000001c",
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
      "updated": "2020-06-18 14:20:27.296",
      "name": "00003",
      "externalCode": "g8aaJ1vbiP6YDicZFPPXZ3",
      "moment": "2020-06-18 14:20:00.000",
      "applicable": true,
      "rate": {
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
      "sum": 0.0,
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/d92b8a46-b0e2-11ea-ac12-000d00000072",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=d92b8a46-b0e2-11ea-ac12-000d00000072"
        }
      },
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/d9253a1b-b0e2-11ea-ac12-000d00000070",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=d9253a1b-b0e2-11ea-ac12-000d00000070"
        }
      },
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/d9253a1b-b0e2-11ea-ac12-000d00000070",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=d9253a1b-b0e2-11ea-ac12-000d00000070"
        }
      },
      "state": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/d9e51641-b0e2-11ea-ac12-000d00000092",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "created": "2020-06-18 14:20:27.312",
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/b610f564-b155-11ea-ac12-000d0000001c/positions",
          "type": "customerorderposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "vatEnabled": true,
      "vatIncluded": true,
      "vatSum": 0.0,
      "payedSum": 0.0,
      "shippedSum": 0.0,
      "invoicedSum": 0.0,
      "reservedSum": 0.0
    }
  ]
}
```

Также можно использовать сдвиг и в списке позиций:

> Запрос

```shell
curl -X GET -u login:password -H "Lognex-Pretty-Print-JSON: true" "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/51bb185a-b0e7-11ea-ac12-000d0000012a/positions?offset=1"
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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/51bb185a-b0e7-11ea-ac12-000d0000012a/positions?offset=1",
    "type": "customerorderposition",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 1,
    "previousHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/51bb185a-b0e7-11ea-ac12-000d0000012a/positions?offset=0&limit=999"
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/51bb185a-b0e7-11ea-ac12-000d0000012a/positions/f002d8b4-b155-11ea-ac12-000d00000023",
        "type": "customerorderposition",
        "mediaType": "application/json"
      },
      "id": "f002d8b4-b155-11ea-ac12-000d00000023",
      "accountId": "d865ef6f-b0e2-11ea-ac12-000c00000001",
      "quantity": 1.0,
      "price": 0.0,
      "discount": 0.0,
      "vat": 0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/bundle/e5da18eb-b152-11ea-ac12-000c00000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "bundle",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e5d864ae-b152-11ea-ac12-000c00000000"
        }
      },
      "shipped": 0.0,
      "reserve": 0.0
    }
  ]
}
```


### Комбинации offset и limit

Давайте представим, что мы читаем книгу, содержание которой, это все заказы. Тогда каждый запрос это страница, на каждой странице **limit** слов. 
Номер слова, с которого начинается страница, это **offset**. Например, мы прочли 4 страницы по 40 слов и хотим прочесть следующую страницу. 
Тогда offset = 160, limit = 40, т.е. запрос будет таким:

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
