## Скидки
#### Скидки 

Кодом сущности для Скидок в составе JSON API является ключевое слово **discount**. Операции создания, изменения и удаления не поддерживаются. Перед работой со скидками настоятельно рекомендуем вам прочитать [вот эту статью](https://support.moysklad.ru/hc/ru/articles/203392253-%D0%A1%D0%BA%D0%B8%D0%B4%D0%BA%D0%B8) на портале поддержки МоегоСклада.

#### Атрибуты сущности
#### Общие поля

| Название        | Тип                                                       | Описание                                                                                                              |
| --------------- | :-------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| **accountId**   | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                  |
| **active**      | Boolean                                                   | Индикатор, является ли скидка активной на данный момент<br>`+Обязательное при ответе`                                 |
| **agentTags**   | Array(String)                                             | Тэги контрагентов, к которым применяется скидка, если применяется не ко всем контрагентам                             |
| **allProducts** | Boolean                                                   | Индикатор, действует ли скидка на все товары<br>`+Обязательное при ответе`                                            |
| **assortment**  | Array(Object)                                             | Массив метаданных Товаров и Услуг, которые были выбраны для применения скидки, если та применяется не ко всем товарам |
| **id**          | UUID                                                      | ID Скидки<br>`+Обязательное при ответе` `+Только для чтения`                                                          |
| **meta**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Скидки<br>`+Обязательное при ответе`                                                                       |
| **name**        | String(255)                                               | Наименование Скидки<br>`+Обязательное при ответе`                                                                     |

#### Поля Спец. цен

| Название           | Тип           | Описание                                                                                             |
| ------------------ | :------------ |:-----------------------------------------------------------------------------------------------------|
| **productfolders** | Array(Object) | Массив метаданных Групп товаров, к которым применяется скидка, если применяется не ко всем товарам   |
| **discount**       | Int           | Процент скидки если выбран фиксированный процент                                                     |
| **specialPrice**   | Object        | Спец. цена (если выбран тип цен). [Подробнее тут](../dictionaries/#suschnosti-skidki-specialprice)   |

#### specialPrice

| Название      | Тип    | Описание                                           |
| ------------- | :----- | :------------------------------------------------- |
| **priceType** | Object | Тип цены<br>`+Обязательное при ответе`             |
| **value**     | Int    | Значение цены, если выбрано фиксированное значение |

#### Поля накопительных скидок

| Название           | Тип           | Описание                                                                                                    |
| ------------------ | :------------ |:------------------------------------------------------------------------------------------------------------|
| **productfolders** | Array(Object) | Массив метаданных Групп товаров, к которым применяется скидка, если применяется не ко всем товарам          |
| **levels**         | Array(Object) | Проценты скидок при определенной сумме продаж. [Подробнее тут](../dictionaries/#suschnosti-skidki-levels)   |

#### levels

| Название     | Тип | Описание                                                  |
| ------------ | :-- | :-------------------------------------------------------- |
| **amount**   | Int | Сумма накоплений в копейках<br>`+Обязательное при ответе` |
| **discount** | Int | Процент скидки, соответствующий данной сумме              |


### Получить все скидки 
Запрос на получение всех скидок учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                           |
| ----------- | :-------------------------------------------------------- | :------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                               |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.       |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой скидки. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить все скидки

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/discount"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - список всех скидок всех типов для учетной записи.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/discount",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/discount/metadata",
    "type": "discount",
    "mediaType": "application/json",
    "size": 4,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/personaldiscount/0623d6b4-9ceb-11e6-8af5-581e00000003",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/personaldiscount/metadata",
        "type": "personaldiscount",
        "mediaType": "application/json"
      },
      "id": "0623d6b4-9ceb-11e6-8af5-581e00000003",
      "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
      "name": "Персональная скидка",
      "active": true,
      "allProducts": true,
      "allAgents": true,
      "agentTags": [
        "группа агентов"
      ],
      "assortment": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/9881531b-9a09-11e6-8af5-581e00000078",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
            "type": "variant",
            "mediaType": "application/json"
          }
        }
      ],
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/specialpricediscount/96673f4d-9f4d-11e6-8af5-581e0000007b",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/specialpricediscount/metadata",
        "type": "specialpricediscount",
        "mediaType": "application/json"
      },
      "id": "96673f4d-9f4d-11e6-8af5-581e0000007b",
      "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
      "name": "Специальная процентная сидка",
      "active": true,
      "allAgents": true,
      "agentTags": [
        "группа агентов"
      ],
      "allProducts": false,
      "assortment": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/9881531b-9a09-11e6-8af5-581e00000078",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
            "type": "variant",
            "mediaType": "application/json"
          }
        }
      ],
      "discount": 5
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/specialpricediscount/bd1235f2-9c60-11e6-8af5-581e00000009",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/specialpricediscount/metadata",
        "type": "specialpricediscount",
        "mediaType": "application/json"
      },
      "id": "bd1235f2-9c60-11e6-8af5-581e00000009",
      "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
      "name": "Скидка номер 2",
      "active": true,
      "allProducts": false,
      "allAgents": true,
      "agentTags": [
        "группа агентов"
      ],
      "productFolders": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/a7a589e5-9c60-11e6-8af5-581e00000006",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata",
            "type": "productfolder",
            "mediaType": "application/json"
          }
        }
      ],
      "assortment": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/987148b8-9a09-11e6-8af5-581e0000006f",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/9881531b-9a09-11e6-8af5-581e00000078",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
            "type": "variant",
            "mediaType": "application/json"
          }
        }
      ],
      "specialPrice": {
        "value": 15.0,
        "priceType": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
            "type": "pricetype",
            "mediaType": "application/json"
          },
          "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "name": "Цена продажи",
          "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
        }
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/accumulationdiscount/dce08f7f-9a09-11e6-8af5-581e0000007e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/accumulationdiscount/metadata",
        "type": "accumulationdiscount",
        "mediaType": "application/json"
      },
      "id": "dce08f7f-9a09-11e6-8af5-581e0000007e",
      "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
      "name": "Скидки на сапоги",
      "active": true,
      "allProducts": false,
      "allAgents": true,
      "agentTags": [
        "группа агентов"
      ],
      "assortment": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/987148b8-9a09-11e6-8af5-581e0000006f",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/987d77f1-9a09-11e6-8af5-581e00000074",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
            "type": "variant",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/9881531b-9a09-11e6-8af5-581e00000078",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
            "type": "variant",
            "mediaType": "application/json"
          }
        }
      ],
      "levels": [
        {
          "amount": 100000,
          "discount": 10
        },
        {
          "amount": 200000,
          "discount": 15
        }
      ]
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/1223d051-ba76-11e8-3353-995e0000005a",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/metadata",
        "type": "bonusprogram",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=1223d051-ba76-11e8-3353-995e0000005a"
      },
      "id": "1223d051-ba76-11e8-3353-995e0000005a",
      "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
      "name": "test",
      "active": true,
      "allAgents": true,
      "agentTags": [
        "группа агентов"
      ],
      "earnRateRoublesToPoint": 1,
      "spendRatePointsToRouble": 1,
      "maxPaidRatePercents": 100
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/discount/8ae26646-b1aa-11ea-ac12-000b00000001",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/discount/metadata",
        "type": "discount",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=8ae26646-b1aa-11ea-ac12-000b00000001"
      },
      "id": "8ae26646-b1aa-11ea-ac12-000b00000001",
      "accountId": "5e8a41b1-a419-11ea-ac12-000c00000001",
      "name": "Округление копеек",
      "active": true,
      "allAgents": true,
      "agentTags": []
	}
  ]
}
```

### Создать накопительную скидку
Запрос на создание новой накопительной скидки. Обязательные поля для заполнения: **name** (имя скидки), **active** (активна ли скидка), **allProducts** (действует ли скидка на все товары), **allAgents** (действует ли скидка на всех контрагентов)

> Пример создания новой накопительной скидки

```shell
curl -X POST
"https://online.moysklad.ru/api/remap/1.2/entity/accumulationdiscount"
-H "Authorization: Basic <Credentials>"
-H "Content-Type: application/json"
-d '{
"name": "discountName",
"active": true,
"allProducts": false,
"allAgents": false,
"agentTags": ["tag1", "tag2"],
"levels": [
{
"amount": 100,
"discount": 10
}
],
"assortment": [
{
"meta": {
"href": "https://online.moysklad.ru/api/remap/1.2/entity/product/833eac42-b6f4-11ea-ac12-000e00000006",
"metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
"type": "product",
"mediaType": "application/json"
}
}],
"productFolders": [
{
"meta": {
"href": "https://online.moysklad.ru/api/remap/1.2/entity/product/39c62b64-a722-11ea-ac12-000d00000015",
"metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
"type": "productfolder",
"mediaType": "application/json"
}
}]
}'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной накопительной скидки.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/accumulationdiscount/8ae26646-b1aa-11ea-ac12-000b00000001",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/accumulationdiscount/metadata",
    "type": "accumulationdiscount",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=8ae26646-b1aa-11ea-ac12-000b00000001"
  },
  "id": "8ae26646-b1aa-11ea-ac12-000b00000001",
  "accountId": "5e8a41b1-a419-11ea-ac12-000c00000001",
  "name": "discountName",
  "active": true,
  "allAgents": false,
  "agentTags": [
    "tag2",
    "tag1"
  ],
  "allProducts": false,
  "assortment": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/833eac42-b6f4-11ea-ac12-000e00000006",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=833eac42-b6f4-11ea-ac12-000e00000003"
      }
    }
  ],
  "productFolders": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/39c62b64-a722-11ea-ac12-000d00000015",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata",
        "type": "productfolder",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=39c62b64-a722-11ea-ac12-000d00000015"
      }
    }
  ],
  "levels": [
    {
      "amount": 100,
      "discount": 10
    }
  ]
}
```

### Получить накопительную скидку
Запрос на получение накопительной скидки.

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| id       | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id скидки. |

> Пример получения накопительной скидки

```shell
curl -X GET
"https://online.moysklad.ru/api/remap/1.2/entity/accumulationdiscount/8ae26646-b1aa-11ea-ac12-000b00000001"
-H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление накопительной скидки.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/accumulationdiscount/8ae26646-b1aa-11ea-ac12-000b00000001",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/accumulationdiscount/metadata",
    "type": "accumulationdiscount",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=8ae26646-b1aa-11ea-ac12-000b00000001"
  },
  "id": "8ae26646-b1aa-11ea-ac12-000b00000001",
  "accountId": "5e8a41b1-a419-11ea-ac12-000c00000001",
  "name": "updatedName",
  "active": false,
  "allProducts": false,
  "allAgents": false,
  "agentTags": [
    "tag2"
  ],
  "assortment": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/833eac42-b6f4-11ea-ac12-000e00000006",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=833eac42-b6f4-11ea-ac12-000e00000003"
      }
    }
  ],
  "productFolders": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/39c62b64-a722-11ea-ac12-000d00000015",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata",
        "type": "productfolder",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=39c62b64-a722-11ea-ac12-000d00000015"
      }
    }
  ],
  "levels": [
    {
      "amount": 100,
      "discount": 10
    }
  ]
}
```


### Изменить накопительную скидку
Запрос на изменение накопительной скидки. В теле запроса необходимо передать поля, которые будут обновлены. При обновлении полей-массивов необходимо передавать новый массив полностью. При передаче пустого массива или null значение поля удаляется.

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id скидки. |

> Пример обновления накопительной скидки

```shell
curl -X PUT
"https://online.moysklad.ru/api/remap/1.2/entity/accumulationdiscount/8ae26646-b1aa-11ea-ac12-000b00000001"
-H "Authorization: Basic <Credentials>"
-H "Content-Type: application/json"
-d '{
"name": "updatedName",
"active": false,
"allProducts": false,
"allAgents": false,
"agentTags": ["tag2"],
"levels": [
{
"amount": 100,
"discount": 10
}
],
"assortment": [
{
"meta": {
"href": "https://online.moysklad.ru/api/remap/1.2/entity/product/833eac42-b6f4-11ea-ac12-000e00000006",
"metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
"type": "product",
"mediaType": "application/json"
}
}],
"productFolders": [
{
"meta": {
"href": "https://online.moysklad.ru/api/remap/1.2/entity/product/39c62b64-a722-11ea-ac12-000d00000015",
"metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
"type": "productfolder",
"mediaType": "application/json"
}
}]
}'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной накопительной скидки.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/accumulationdiscount/8ae26646-b1aa-11ea-ac12-000b00000001",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/accumulationdiscount/metadata",
    "type": "accumulationdiscount",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=8ae26646-b1aa-11ea-ac12-000b00000001"
  },
  "id": "8ae26646-b1aa-11ea-ac12-000b00000001",
  "accountId": "5e8a41b1-a419-11ea-ac12-000c00000001",
  "name": "updatedName",
  "active": false,
  "allProducts": false,
  "allAgents": false,
  "agentTags": [
    "tag2"
  ],
  "assortment": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/833eac42-b6f4-11ea-ac12-000e00000006",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=833eac42-b6f4-11ea-ac12-000e00000003"
      }
    }
  ],
  "productFolders": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/39c62b64-a722-11ea-ac12-000d00000015",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata",
        "type": "productfolder",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=39c62b64-a722-11ea-ac12-000d00000015"
      }
    }
  ],
  "levels": [
    {
      "amount": 100,
      "discount": 10
    }
  ]
}
```

### Удалить накопительную скидку
Запрос на удаление накопительной скидки

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id скидки. |

> Запрос на удаление накопительной скидки.

```shell
curl -X DELETE
"https://online.moysklad.ru/api/remap/1.2/entity/accumulationdiscount/8ae26646-b1aa-11ea-ac12-000b00000001"
-H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление накопительной скидки

### Создать персональную скидку
Запрос на создание новой персональной скидки. Обязательные поля для заполнения: **name** (имя скидки), **active** (активна ли скидка), **allProducts** (действует ли скидка на все товары), **allAgents** (действует ли скидка на всех контрагентов)

> Пример создания новой персональной скидки

```shell
curl -X POST
"https://online.moysklad.ru/api/remap/1.2/entity/personaldiscount"
-H "Authorization: Basic <Credentials>"
-H "Content-Type: application/json"
-d '{
"name": "discountName",
"active": true,
"allProducts": false,
"allAgents": false,
"agentTags": ["tag1", "tag2"],
"assortment": [
{
"meta": {
"href": "https://online.moysklad.ru/api/remap/1.2/entity/product/833eac42-b6f4-11ea-ac12-000e00000006",
"metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
"type": "product",
"mediaType": "application/json"
}
}],
"productFolders": [
{
"meta": {
"href": "https://online.moysklad.ru/api/remap/1.2/entity/product/39c62b64-a722-11ea-ac12-000d00000015",
"metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
"type": "productfolder",
"mediaType": "application/json"
}
}]
}'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной персональной скидки.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/personaldiscount/8ae26646-b1aa-11ea-ac12-000b00000001",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/personaldiscount/metadata",
    "type": "personaldiscount",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=8ae26646-b1aa-11ea-ac12-000b00000001"
  },
  "id": "8ae26646-b1aa-11ea-ac12-000b00000001",
  "accountId": "5e8a41b1-a419-11ea-ac12-000c00000001",
  "name": "discountName",
  "active": true,
  "allAgents": false,
  "agentTags": [
    "tag2",
    "tag1"
  ],
  "allProducts": false,
  "assortment": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/833eac42-b6f4-11ea-ac12-000e00000006",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=833eac42-b6f4-11ea-ac12-000e00000003"
      }
    }
  ],
  "productFolders": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/39c62b64-a722-11ea-ac12-000d00000015",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata",
        "type": "productfolder",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=39c62b64-a722-11ea-ac12-000d00000015"
      }
    }
  ]
}
```

### Получить персональную скидку
Запрос на получение персональной скидки.

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id скидки. |

> Пример получения персональной скидки

```shell
curl -X GET
"https://online.moysklad.ru/api/remap/1.2/entity/personaldiscount/8ae26646-b1aa-11ea-ac12-000b00000001"
-H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление персональной скидки.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/personaldiscount/8ae26646-b1aa-11ea-ac12-000b00000001",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/personaldiscount/metadata",
    "type": "personaldiscount",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=8ae26646-b1aa-11ea-ac12-000b00000001"
  },
  "id": "8ae26646-b1aa-11ea-ac12-000b00000001",
  "accountId": "5e8a41b1-a419-11ea-ac12-000c00000001",
  "name": "updateddiscount",
  "active": false,
  "allAgents": false,
  "agentTags": [
    "tag2",
    "tag1"
  ],
  "allProducts": false,
  "assortment": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/833eac42-b6f4-11ea-ac12-000e00000006",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=833eac42-b6f4-11ea-ac12-000e00000003"
      }
    }
  ],
  "productFolders": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/39c62b64-a722-11ea-ac12-000d00000015",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata",
        "type": "productfolder",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=39c62b64-a722-11ea-ac12-000d00000015"
      }
    }
  ]
}
```

### Изменить персональную скидку
Запрос на изменение персональной скидки. В теле запроса необходимо передать поля, которые будут обновлены. При обновлении полей-массивов необходимо передавать новый массив полностью. При передаче пустого массива или null значение поля удаляется.

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id скидки. |

> Пример обновления персональной скидки

```shell
curl -X PUT
"https://online.moysklad.ru/api/remap/1.2/entity/personaldiscount/8ae26646-b1aa-11ea-ac12-000b00000001"
-H "Authorization: Basic <Credentials>"
-H "Content-Type: application/json"
-d '{
"name": "updatedName",
"active": false,
"allProducts": false,
"allAgents": false,
"agentTags": ["tag2"],
"assortment": [
{
"meta": {
"href": "https://online.moysklad.ru/api/remap/1.2/entity/product/833eac42-b6f4-11ea-ac12-000e00000006",
"metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
"type": "product",
"mediaType": "application/json"
}
}],
"productFolders": [
{
"meta": {
"href": "https://online.moysklad.ru/api/remap/1.2/entity/product/39c62b64-a722-11ea-ac12-000d00000015",
"metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
"type": "productfolder",
"mediaType": "application/json"
}
}]
}'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной персональной скидки.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/personaldiscount/8ae26646-b1aa-11ea-ac12-000b00000001",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/personaldiscount/metadata",
    "type": "personaldiscount",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=8ae26646-b1aa-11ea-ac12-000b00000001"
  },
  "id": "8ae26646-b1aa-11ea-ac12-000b00000001",
  "accountId": "5e8a41b1-a419-11ea-ac12-000c00000001",
  "name": "updatedName",
  "active": false,
  "allProducts": false,
  "allAgents": false,
  "agentTags": [
    "tag2"
  ],
  "assortment": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/833eac42-b6f4-11ea-ac12-000e00000006",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=833eac42-b6f4-11ea-ac12-000e00000003"
      }
    }
  ],
  "productFolders": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/39c62b64-a722-11ea-ac12-000d00000015",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata",
        "type": "productfolder",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=39c62b64-a722-11ea-ac12-000d00000015"
      }
    }
  ]
}
```

### Удалить персональную скидку
Запрос на удаление персональной скидки

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id скидки. |

> Запрос на удаление персональной скидки.

```shell
curl -X DELETE
"https://online.moysklad.ru/api/remap/1.2/entity/personaldiscount/8ae26646-b1aa-11ea-ac12-000b00000001"
-H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление персональной скидки

### Создать специальную цену
Запрос на создание новой специальной цены. Обязательные поля для заполнения: **name** (имя скидки), **active** (активна ли скидка), **allProducts** (действует ли скидка на все товары), **allAgents** (действует ли скидка на всех контрагентов), **usePriceType** (использовать ли специальную цену). 

> Пример создания новой специальной цены

```shell
curl -X POST
"https://online.moysklad.ru/api/remap/1.2/entity/specialpricediscount"
-H "Authorization: Basic <Credentials>"
-H "Content-Type: application/json"
-d '{
"name": "Специальная цена",
"active": false,
"allProducts": false,
"allAgents": false,
"usePriceType": true,
"specialPrice": {"meta": {
"href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/5f441404-a419-11ea-ac12-000a00000078",
"type": "pricetype",
"mediaType": "application/json"
}
},
"assortment": [
{
"meta": {
"href": "https://online.moysklad.ru/api/remap/1.2/entity/product/833eac42-b6f4-11ea-ac12-000e00000006",
"metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
"type": "product",
"mediaType": "application/json"
}
}],
"productFolders": [
{
"meta": {
"href": "https://online.moysklad.ru/api/remap/1.2/entity/product/39c62b64-a722-11ea-ac12-000d00000015",
"metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
"type": "productfolder",
"mediaType": "application/json"
}
}]
}'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной специальной цены.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/specialpricediscount/8ae26646-b1aa-11ea-ac12-000b00000001",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/specialpricediscount/metadata",
    "type": "specialpricediscount",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=8ae26646-b1aa-11ea-ac12-000b00000001"
  },
  "id": "8ae26646-b1aa-11ea-ac12-000b00000001",
  "accountId": "5e8a41b1-a419-11ea-ac12-000c00000001",
  "name": "Специальная цена",
  "active": false,
  "allAgents": false,
  "agentTags": [
    "tag2",
    "tag1"
  ],
  "allProducts": false,
  "usePriceType": true,
  "assortment": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/833eac42-b6f4-11ea-ac12-000e00000006",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=833eac42-b6f4-11ea-ac12-000e00000003"
      }
    }
  ],
  "productFolders": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/39c62b64-a722-11ea-ac12-000d00000015",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata",
        "type": "productfolder",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=39c62b64-a722-11ea-ac12-000d00000015"
      }
    }
  ],
  "specialPrice": {
    "value": 0.0,
    "priceType": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/39c62b64-a722-11ea-ac12-000d00000015",
        "type": "pricetype",
        "mediaType": "application/json"
      },
      "id": "39c62b64-a722-11ea-ac12-000d00000015",
      "name": "Цена продажи",
      "externalCode": "39c62b64-a722-11ea-ac12-000d00000016"
    }
  }
}
```

### Получить специальную цену
Запрос на получение специальной цены.

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id скидки. |

> Пример получения специальной цены

```shell
curl -X GET
"https://online.moysklad.ru/api/remap/1.2/entity/specialpricediscount/8ae26646-b1aa-11ea-ac12-000b00000001"
-H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление специальной цены.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/specialpricediscount/8ae26646-b1aa-11ea-ac12-000b00000001",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/specialpricediscount/metadata",
    "type": "specialpricediscount",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=8ae26646-b1aa-11ea-ac12-000b00000001"
  },
  "id": "8ae26646-b1aa-11ea-ac12-000b00000001",
  "accountId": "5e8a41b1-a419-11ea-ac12-000c00000001",
  "name": "Специальная цена",
  "active": false,
  "allAgents": false,
  "agentTags": [
    "tag2",
    "tag1"
  ],
  "allProducts": false,
  "usePriceType": true,
  "assortment": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/833eac42-b6f4-11ea-ac12-000e00000006",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=833eac42-b6f4-11ea-ac12-000e00000003"
      }
    }
  ],
  "productFolders": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/39c62b64-a722-11ea-ac12-000d00000015",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata",
        "type": "productfolder",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=39c62b64-a722-11ea-ac12-000d00000015"
      }
    }
  ],
  "specialPrice": {
    "value": 0.0,
    "priceType": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/39c62b64-a722-11ea-ac12-000d00000015",
        "type": "pricetype",
        "mediaType": "application/json"
      },
      "id": "39c62b64-a722-11ea-ac12-000d00000015",
      "name": "Цена продажи",
      "externalCode": "39c62b64-a722-11ea-ac12-000d00000016"
    }
  }
}
```

### Изменить специальную цену
Запрос на изменение специальной цены. В теле запроса необходимо передать поля, которые будут обновлены. При обновлении полей-массивов необходимо передавать новый массив полностью. При передаче пустого массива или null значение поля удаляется.

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id скидки. |

> Пример обновления специальной цены

```shell
curl -X PUT
"https://online.moysklad.ru/api/remap/1.2/entity/specialpricediscount/8ae26646-b1aa-11ea-ac12-000b00000001"
-H "Authorization: Basic <Credentials>"
-H "Content-Type: application/json"
-d '{
"name": "updatedName",
"usePriceType": false,
"discount": 50
}'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление измененнной специальной цены.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/specialpricediscount/8ae26646-b1aa-11ea-ac12-000b00000001",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/specialpricediscount/metadata",
    "type": "specialpricediscount",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=8ae26646-b1aa-11ea-ac12-000b00000001"
  },
  "id": "8ae26646-b1aa-11ea-ac12-000b00000001",
  "accountId": "5e8a41b1-a419-11ea-ac12-000c00000001",
  "name": "updatedName",
  "active": false,
  "allAgents": false,
  "agentTags": [
    "tag2",
    "tag1"
  ],
  "allProducts": false,
  "usePriceType": false,
  "discount": 50,
  "assortment": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/833eac42-b6f4-11ea-ac12-000e00000006",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=833eac42-b6f4-11ea-ac12-000e00000003"
      }
    }
  ],
  "productFolders": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/39c62b64-a722-11ea-ac12-000d00000015",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata",
        "type": "productfolder",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=39c62b64-a722-11ea-ac12-000d00000015"
      }
    }
  ],
  "specialPrice": {
    "value": 0.0,
    "priceType": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/39c62b64-a722-11ea-ac12-000d00000015",
        "type": "pricetype",
        "mediaType": "application/json"
      },
      "id": "39c62b64-a722-11ea-ac12-000d00000015",
      "name": "Цена продажи",
      "externalCode": "39c62b64-a722-11ea-ac12-000d00000016"
    }
  }
}
```

### Удалить специальную цену
Запрос на удаление специальной цены

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id скидки. |

> Запрос на удаление специальной цены.

```shell
curl -X DELETE
"https://online.moysklad.ru/api/remap/1.2/entity/specialpricediscount/8ae26646-b1aa-11ea-ac12-000b00000001"
-H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление специальной цены

### Изменить округление копеек
Запрос на изменение округления копеек. В теле запроса необходимо передать поля, которые будут обновлены (**name** или **active**). В ответе также будут приходить поля **agentTags** и **allAgents**, но их нельзя изменить.

| Параметр | Описание                                                                                         |
| :------- | :----------------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id скидки округления копеек. |

> Пример обновления округления копеек

```shell
curl -X PUT
"https://online.moysklad.ru/api/remap/1.2/entity/discount/8ae26646-b1aa-11ea-ac12-000b00000001"
-H "Authorization: Basic <Credentials>"
-H "Content-Type: application/json"
-d '{
"name": "updatedName",
"active": true
}'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление измененного округления копеек.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/discount/8ae26646-b1aa-11ea-ac12-000b00000001",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/discount/metadata",
    "type": "discount",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=8ae26646-b1aa-11ea-ac12-000b00000001"
  },
  "id": "8ae26646-b1aa-11ea-ac12-000b00000001",
  "accountId": "5e8a41b1-a419-11ea-ac12-000c00000001",
  "name": "updatedName",
  "active": true,
  "allAgents": true,
  "agentTags": []
}
```
