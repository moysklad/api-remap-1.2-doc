## Автозаполнение

Средствами JSON API можно рассчитать значение скидок, цен и ндс для позиций документа.

### Шаблон автозаполнения

#### Атрибуты сущности

+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye). Обязателен со значением `vat` параметра `fill`
+ **agent** - Ссылка на контрагента в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye). Обязателен со значениями `price`, `discount` параметра `fill`
+ **vatEnabled** - Учитывается ли НДС
+ **vatIncluded** - Включен ли НДС в цену
+ **rate** - Валюта. Если не передано, заполняется валютой учета
+ **positions** - Позиции документа
+ **isRetail** - Признак того, принадлежат ли переданные позиции розничному документу. Для розничных документов не учитывается персональная скидка контрагента. По умолчанию `false`

#### Позиции документа

Позиции в шаблоне - это список товаров/услуг/модификаций/серий.
Объект позиции содержит следующие поля:

+ **quantity** - Количество товаров/услуг данного вида в позиции. Если позиция - товар, у которого включен учет по серийным номерам, то значение в этом поле всегда будет равно количеству серийных номеров для данной позиции в документе.
+ **price** - Цена товара/услуги в копейках.
+ **discount** - Процент скидки или наценки.
+ **vat** - НДС, которым облагается текущая позиция.
+ **assortment** - Ссылка на товар/услугу/серию/модификацию/комплект, которую представляет собой позиция, в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **discountedPrice** - Цена товара/услуги с учетом скидок и ндс в копейках.
+ **sum** - Общая сумма с учетом скидки за указанное количество товара в позиции в копейках.

### Запрос автозаполения

Запрос заполения полей шаблона.
Результат: Объект JSON, с заполненным шаблоном.

**Параметры**

| Параметр | Описание |
| fill | `enum` (optional) *Example: discount,price* Определяет какую информацию нужно заполнить: цены (price), ндс (vat) или скидки (discount). `Допустимые значения: price, discount, vat`. |

### Запрос автозаполения цен

Запрос автозаполения с параметром `fill` со значением `price`. Требуется заполнение поля **agent**. Заполняет поле цены товара **price** (если явно не передано) ценой переданного в поле **agent** контрагента, а также поле **discountedPrice**, с учетом рассчитанной или переданной скидки **discount** (принимается за 0, если значение отсутствует) и НДС **vat** (не учитывается, если пустое, поле **vatEnabled** имеет значение `false` или **vatIncluded** имеет значение `true`). Если передано поле **quantity**, то будет рассчитано поле **sum**.

> Запрос автозаполения цен

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/autofill?fill=price"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '
{
   "agent":{
      "meta":{
         "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/eff93a94-c03a-11ea-c0a8-f00c0000001f",
         "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
         "type":"counterparty",
         "mediaType":"application/json",
         "uuidHref":"https://online.moysklad.ru/app/#company/edit?id=eff93a94-c03a-11ea-c0a8-f00c0000001f"
      }
   },
   "positions":[
      {
         "assortment":{
            "meta":{
               "href":"https://online.moysklad.ru/api/remap/1.2/entity/product/46628fb5-c1c8-11ea-c0a8-f00c0000001a",
               "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
               "type":"product",
               "mediaType":"application/json",
               "uuidHref":"https://online.moysklad.ru/app/#good/edit?id=46628fb5-c1c8-11ea-c0a8-f00c00000018"
            }
         },
         "quantity":12
      },
      {
         "assortment":{
            "meta":{
               "href":"https://online.moysklad.ru/api/remap/1.2/entity/product/bb989405-bf9e-11ea-c0a8-f0100000000e",
               "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
               "type":"product",
               "mediaType":"application/json",
               "uuidHref":"https://online.moysklad.ru/app/#good/edit?id=bb96904c-bf9e-11ea-c0a8-f0100000000c"
            }
         },
         "discount":20
      }
   ]
}'  
```

> Response 200 (application/json)
> Успешный запрос. Результат - JSON представление заполненного шаблона документа.

```json
{
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/eff93a94-c03a-11ea-c0a8-f00c0000001f",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=eff93a94-c03a-11ea-c0a8-f00c0000001f"
    }
  },
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/44126ea6-bf76-11ea-c0a8-f01000000077",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=44126ea6-bf76-11ea-c0a8-f01000000077"
      }
    }
  },
  "positions": [
    {
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/46628fb5-c1c8-11ea-c0a8-f00c0000001a",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=46628fb5-c1c8-11ea-c0a8-f00c00000018"
        }
      },
      "price": 3300.0,
      "discountedPrice": 3300.0,
      "quantity": 12.0,
      "sum": 39600.0
    },
    {
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/bb989405-bf9e-11ea-c0a8-f0100000000e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=bb96904c-bf9e-11ea-c0a8-f0100000000c"
        }
      },
      "price": 3300.0,
      "discountedPrice": 2640.0,
      "discount": 20.0
    }
  ]
}
```

### Запрос автозаполения скидок

Запрос автозаполения с параметром `fill` со значением `discount`. Требуется заполнение поля **agent**. Заполняет поле скидки **discount** (если явно не передано) суммой применимых к данному товару активных скидок переданного в поле **agent** контрагента.

> Запрос автозаполения скидок

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/autofill?fill=discount"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '
{
   "agent":{
      "meta":{
         "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/eff93a94-c03a-11ea-c0a8-f00c0000001f",
         "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
         "type":"counterparty",
         "mediaType":"application/json",
         "uuidHref":"https://online.moysklad.ru/app/#company/edit?id=eff93a94-c03a-11ea-c0a8-f00c0000001f"
      }
   },
   "positions":[
      {
         "assortment":{
            "meta":{
               "href":"https://online.moysklad.ru/api/remap/1.2/entity/product/46628fb5-c1c8-11ea-c0a8-f00c0000001a",
               "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
               "type":"product",
               "mediaType":"application/json",
               "uuidHref":"https://online.moysklad.ru/app/#good/edit?id=46628fb5-c1c8-11ea-c0a8-f00c00000018"
            }
         },
         "quantity":12
      },
      {
         "assortment":{
            "meta":{
               "href":"https://online.moysklad.ru/api/remap/1.2/entity/product/bb989405-bf9e-11ea-c0a8-f0100000000e",
               "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
               "type":"product",
               "mediaType":"application/json",
               "uuidHref":"https://online.moysklad.ru/app/#good/edit?id=bb96904c-bf9e-11ea-c0a8-f0100000000c"
            }
         }
      }
   ]
}'  
```

> Response 200 (application/json)
> Успешный запрос. Результат - JSON представление заполненного шаблона документа.

```json
{
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/eff93a94-c03a-11ea-c0a8-f00c0000001f",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=eff93a94-c03a-11ea-c0a8-f00c0000001f"
    }
  },
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/44126ea6-bf76-11ea-c0a8-f01000000077",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=44126ea6-bf76-11ea-c0a8-f01000000077"
      }
    }
  },
  "positions": [
    {
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/46628fb5-c1c8-11ea-c0a8-f00c0000001a",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=46628fb5-c1c8-11ea-c0a8-f00c00000018"
        }
      },
      "quantity": 12.0,
      "discount": 65.0
    },
    {
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/bb989405-bf9e-11ea-c0a8-f0100000000e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=bb96904c-bf9e-11ea-c0a8-f0100000000c"
        }
      },
      "discount": 40.0
    }
  ]
}
```

### Запрос автозаполения НДС

Запрос автозаполения с параметром `fill` со значением `vat`. Требуется заполнение поля **organization**. Заполняет поле **vatEnabled** на основе того, является ли переданная в поле **organization** организация плательщиком НДС и поля **vat** у позиций значением из карточки товара, если организация - плательщик НДС.

> Запрос автозаполения НДС

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/autofill?fill=vat"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '
{
    "organization": {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/44055d92-bf76-11ea-c0a8-f01000000070",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
            "type": "organization",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=44055d92-bf76-11ea-c0a8-f01000000070"
        }
    },
    "positions": [
        {
            "assortment": {
                "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/46628fb5-c1c8-11ea-c0a8-f00c0000001a",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=466222d6-c1c8-11ea-c0a8-f00c00000018"
                }
            },
            "quantity": 12
        },
        {
            "assortment": {
                "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/bb989405-bf9e-11ea-c0a8-f0100000000e",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=bb96904c-bf9e-11ea-c0a8-f0100000000c"
                }
            }
        }
    ]
}'  
```

> Response 200 (application/json)
> Успешный запрос. Результат - JSON представление заполненного шаблона документа.

```json
{
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/44055d92-bf76-11ea-c0a8-f01000000070",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=44055d92-bf76-11ea-c0a8-f01000000070"
    }
  },
  "vatEnabled": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/44126ea6-bf76-11ea-c0a8-f01000000077",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=44126ea6-bf76-11ea-c0a8-f01000000077"
      }
    }
  },
  "positions": [
    {
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/46628fb5-c1c8-11ea-c0a8-f00c0000001a",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=466222d6-c1c8-11ea-c0a8-f00c00000018"
        }
      },
      "quantity": 12.0,
      "vat": 10
    },
    {
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/bb989405-bf9e-11ea-c0a8-f0100000000e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=bb96904c-bf9e-11ea-c0a8-f0100000000c"
        }
      },
      "vat": 18
    }
  ]
}
```
