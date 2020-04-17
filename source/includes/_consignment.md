## Серия

### Серии 
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](../#mojsklad-json-api-obschie-swedeniq-kontextnyj-poisk). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов Серии на соответствие поисковой строке будет осуществлен по следующим полям:

+ по наименованию Серии **name**
+ по описанию Серии **description**

#### Атрибуты сущности

+ **meta** - [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) объекта
+ **id** - ID услуги в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **updated** - Момент последнего обновления сущности `Только для чтения``
+ **name** - Наименование Серии. "Собирается" и отображается как "Наименование товара  / Метка Серии" `Только для чтения`
+ **description** - Описание Серии
+ **code** - Код Серии
+ **externalCode** - Внешний код Серии
+ **label** - Метка Серии. `Необходимое`
+ **barcodes** - Штрихкоды серии
+ **image** - Изображение товара, к которому относится данная серия
+ **assortment** - [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye), представляющие с собой ссылку на товар или модификацию `Необходимое`

#### Атрибуты вложенных сущностей
##### Метаданные Серий

Посмотреть все созданные в основном интерфейсе характеристики Серий можно с помощью запроса на получение метаданных Серий.
Ответ - объект, со следующей структурой:

+ **meta** - Метаданные
+ **attributes** - коллекция всех существующих доп. полей Серий в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)

### Получить список Серий 
Запрос на получения списка всех пользовательских Серий на данной учетной записи.
<u>Серии по умолчанию выведены не будут.</u>
Результат успешного запроса - JSON представление списка Серий с перечисленными полями:

- **meta** [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) о выдаче,
- **context** - [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой [Серии](../dictionaries/#suschnosti-seriq).

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить список Серий

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/consignment"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка пользовательских Серий.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/consignment",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/consignment/metadata",
    "type": "consignment",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/consignment/c66f4b17-36e7-11e7-8a7f-40d000000113",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/consignment/metadata",
        "type": "consignment",
        "mediaType": "application/json"
      },
      "id": "c66f4b17-36e7-11e7-8a7f-40d000000113",
      "accountId": "103bff1b-36e7-11e7-8a7f-40d000000004",
      "updated": "2017-05-12 10:51:15",
      "name": "product / consignment",
      "code": "1012",
      "externalCode": "g9BOLNRZglk9NMOHxcrVV0",
      "label": "consignment",
      "barcodes": [
        {
          "ean8": "20000000"
        },
        {
          "ean13": "2000000000000"
        },
        {
          "code128": "code128 barcode"
        }
      ],
      "image": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/35427052-36e7-11e7-8a7f-40d0000000d1/image",
          "type": "image",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/35427052-36e7-11e7-8a7f-40d0000000d1",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        }
      }
    }
  ]
}
```

### Создать серию 
Запрос на создание новой серии. Для успешного создания серии, обязательно должны быть переданы поля
**label** и **assortment**.

> Пример создания новой серии.

```shell
  curl -X POST
    " \https://online.moysklad.ru/api/remap/1.2/entity/consignment"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '
  "label": "Метка",
  "barcodes": [
    {
      "ean8": "20000000"
    },
    {
      "ean13": "2000000000000"
    },
    {
      "code128": "code128 barcode"
    }
  ],
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a83c422-3c64-11e6-8a84-bae500000012",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
      "type": "variant",
      "mediaType": "application/json"
    }
  }
}'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной серии.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/consignment/17a32a0a-5310-11e6-8a84-bae500000000",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/consignment/metadata",
    "type": "consignment",
    "mediaType": "application/json"
  },
  "id": "17a32a0a-5310-11e6-8a84-bae500000000",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "updated": "2016-07-26 12:05:25",
  "name": "фацфацфвф (цфвцф) / Метка",
  "externalCode": "NptSJ1REgVkhqCV0RlyfV0",
  "label": "Метка",
  "barcodes": [
    {
      "ean8": "20000000"
    },
    {
      "ean13": "2000000000000"
    },
    {
      "code128": "code128 barcode"
    }
  ],
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a83c422-3c64-11e6-8a84-bae500000012",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
      "type": "variant",
      "mediaType": "application/json"
    }
  }
}
```


### Удалить серию 

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Серии.|

> Запрос на удаление Серии с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/consignment/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Серии.

### Массовое удаление Серий

В теле запроса нужно передать массив, содержащий JSON метаданных Серий, которые вы хотите удалить.


> Запрос на массовое удаление Серий. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/consignment/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/consignment/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/consignment/metadata",
            "type": "consignment",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/consignment/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/consignment/metadata",
            "type": "consignment",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Серий.

```json
[
  {
    "info":"Сущность 'consignment' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'consignment' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
```

### Массовое создание и обновление Серий

[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Серий.
В теле запроса нужно передать массив, содержащий JSON представления Серий, которые вы хотите создать или обновить.
Обновляемые Серии должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Серий

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/consignment"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "label": "Метка",
              "barcodes": [
                {
                  "ean8": "20000000"
                },
                {
                  "ean13": "2000000000000"
                },
                {
                  "code128": "code128 barcode"
                }
              ],
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a83c422-3c64-11e6-8a84-bae500000012",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                  "type": "variant",
                  "mediaType": "application/json"
                }
              }
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/consignment/17a32a0a-5310-11e6-8a84-bae500000000",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/consignment/metadata",
                "type": "consignment",
                "mediaType": "application/json"
              },
              "code": "ke21k421c1o42n4signment12",
              "externalCode": "fbajkwbfu1249SACSKW241LKSFA2sa1",
              "description": "Серии товаров с таким названием лучше отслеживать",
              "label": "Странный товар",
              "barcodes": [
                {
                  "ean8": "20000000"
                },
                {
                  "ean13": "2000000000000"
                },
                {
                  "code128": "code128 barcode"
                }
              ],
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                  "type": "variant",
                  "mediaType": "application/json"
                }
              }
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Серий.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/consignment/17a32a0a-5310-11e6-8a84-bae500000000",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/consignment/metadata",
      "type": "consignment",
      "mediaType": "application/json"
    },
    "id": "17a32a0a-5310-11e6-8a84-bae500000000",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "updated": "2016-07-26 12:05:25",
    "name": "фацфацфвф (цфвцф) / Метка",
    "externalCode": "NptSJ1REgVkhqCV0RlyfV0",
    "label": "Метка",
    "barcodes": [
      {
        "ean8": "20000000"
      },
      {
        "ean13": "2000000000000"
      },
      {
        "code128": "code128 barcode"
      }
    ],
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a83c422-3c64-11e6-8a84-bae500000012",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      }
    }
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/consignment/17a32a0a-5310-11e6-8a84-bae500000000",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/consignment/metadata",
      "type": "consignment",
      "mediaType": "application/json"
    },
    "id": "17a32a0a-5310-11e6-8a84-bae500000000",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "updated": "2016-07-26 12:05:25",
    "name": "фацфацфвф (обхец) / Странный товар",
    "description": "Серии товаров с таким названием лучше отслеживать",
    "code": "ke21k421c1o42n4signment12",
    "externalCode": "fbajkwbfu1249SACSKW241LKSFA2sa1",
    "label": "Странный товар",
    "barcodes": [
      {
        "ean8": "20000000"
      },
      {
        "ean13": "2000000000000"
      },
      {
        "code128": "code128 barcode"
      }
    ],
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      }
    }
  }
]
```

### Метаданные Серий 
#### Метаданные Серий 
Запрос на получение метаданных Серий. Результат - объект JSON, включающий в себя:

+ **meta** - Метаданные
+ **attributes** - коллекция всех существующих доп. полей Серий в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Получить метданные Серии

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/consignment/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление метаданных серии.

```json
{
  "meta": {
    "href": "hhttps://online.moysklad.ru/api/remap/1.2/entity/consignment",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "hhttps://online.moysklad.ru/api/remap/1.2/entity/consignment/metadata/attributes/83dc3e6c-3bbf-11e7-8a7f-40d000000001",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "83dc3e6c-3bbf-11e7-8a7f-40d000000001",
      "name": "string",
      "type": "string",
      "required": false
    },
    {
      "meta": {
        "href": "hhttps://online.moysklad.ru/api/remap/1.2/entity/consignment/metadata/attributes/958b275e-3bbf-11e7-8a7f-40d000000004",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "958b275e-3bbf-11e7-8a7f-40d000000004",
      "name": "number",
      "type": "long",
      "required": false
    }
  ]
}
```


### Отдельное доп. поле

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 958b275e-3bbf-11e7-8a7f-40d000000004* id Доп. поля.|

#### Отдельное доп. поле
 
> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/consignment/metadata/attributes/958b275e-3bbf-11e7-8a7f-40d000000004"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "hhttps://online.moysklad.ru/api/remap/1.2/entity/consignment/metadata/attributes/958b275e-3bbf-11e7-8a7f-40d000000004",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "958b275e-3bbf-11e7-8a7f-40d000000004",
  "name": "number",
  "type": "long",
  "required": false
}
```


### Серия


**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Серии.|

### Получить серию
 
> Запрос на получение Серии с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/consignment/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление пользовательской Серии.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/consignment/c66f4b17-36e7-11e7-8a7f-40d000000113",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/consignment/metadata",
    "type": "consignment",
    "mediaType": "application/json"
  },
  "id": "c66f4b17-36e7-11e7-8a7f-40d000000113",
  "accountId": "103bff1b-36e7-11e7-8a7f-40d000000004",
  "updated": "2017-05-12 10:51:15",
  "name": "product / consignment",
  "code": "1012",
  "externalCode": "g9BOLNRZglk9NMOHxcrVV0",
  "label": "consignment",
  "barcodes": [
    {
      "ean8": "20000000"
    },
    {
      "ean13": "2000000000000"
    },
    {
      "code128": "code128 barcode"
    }
  ],
  "image": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/35427052-36e7-11e7-8a7f-40d0000000d1/image",
      "type": "image",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/35427052-36e7-11e7-8a7f-40d0000000d1",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json"
    }
  }
}
```


### Изменить серию
 
 **Параметры**
 
|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Серии.|

Запрос на обновление серии. Обновить можно только те поля, что не помечены `Только для чтения`

> Пример запроса на обновление серии.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/consignment/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "code": "ke21k421c1o42n4signment12",
            "externalCode": "fbajkwbfu1249SACSKW241LKSFA2sa1",
            "description": "Серии товаров с таким названием лучше отслеживать",
            "label": "Странный товар",
            "barcodes": [
              {
                "ean8": "20000000"
              },
              {
                "ean13": "2000000000000"
              },
              {
                "code128": "code128 barcode"
              }
            ],
            "assortment": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                "type": "variant",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной серии.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/consignment/17a32a0a-5310-11e6-8a84-bae500000000",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/consignment/metadata",
    "type": "consignment",
    "mediaType": "application/json"
  },
  "id": "17a32a0a-5310-11e6-8a84-bae500000000",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "updated": "2016-07-26 12:05:25",
  "name": "фацфацфвф (обхец) / Странный товар",
  "description": "Серии товаров с таким названием лучше отслеживать",
  "code": "ke21k421c1o42n4signment12",
  "externalCode": "fbajkwbfu1249SACSKW241LKSFA2sa1",
  "label": "Странный товар",
  "barcodes": [
    {
      "ean8": "20000000"
    },
    {
      "ean13": "2000000000000"
    },
    {
      "code128": "code128 barcode"
    }
  ],
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
      "type": "variant",
      "mediaType": "application/json"
    }
  }
}
```


