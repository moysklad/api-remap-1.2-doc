## Автозаполнение

Средствами JSON API можно рассчитать значение скидок, цен и ндс для позиций следующих документов:

- [Оприходование](#/documents/enter#2-oprihodovanie)
- [Заказ покупателя](#/documents/customerOrder#2-zakaz-pokupatelya)
- [Заказ поставщику](#/documents/purchaseOrder#2-zakaz-postavshiku)
- [Счет покупателю](#/documents/invoice-out#2-schet-pokupatelyu)
- [Счет поставщику](#/documents/invoice-in#2-schet-postavshika)
- [Отгрузка](#/documents/demand#2-otgruzka)
- [Приемка](#/documents/supply#2-priemka)
- [Списание](#/documents/loss#2-spisanie)
- [Перемещение](#/documents/move#2-peremeshenie)
- [Розничная продажа](#/documents/retaildemand#2-roznichnaya-prodazha)
- [Розничный возврат](#/documents/retail-sales-return#2-roznichnyj-vozvrat)
- [Возврат покупателя](#/documents/sales-return#2-vozvrat-pokupatelya)
- [Возврат поставщику](#/documents/purchase-return#2-vozvrat-postavshiku)
- [Инвентаризация](#/documents/inventory#2-inventarizaciya)
- [Полученный отчет комиссионера](#/documents/commissionreportin#2-poluchennyj-otchet-komissionera)
- [Выданный отчет комиссионера](#/documents/commissionreportout#2-vydannyj-otchet-komissionera)
- [Внутренний заказ](#/documents/internalOrder#2-vnutrennij-zakaz)

Заполнение скидок не поддерживает следующие типы:

- [Инвентаризация](#/documents/inventory#2-inventarizaciya)
- [Перемещение](#/documents/move#2-peremeshenie)
- [Внутренний заказ](#/documents/internalOrder#2-vnutrennij-zakaz)
- [Оприходование](#/documents/enter#2-oprihodovanie)
- [Списание](#/documents/loss#2-spisanie)

Заполнение цен не поддерживает [Инвентаризация](#/documents/inventory#2-inventarizaciya)

Заполнение себестоимости поддерживается только для возвратов без основания следующих типов:
- [Возврат покупателя](#/documents/sales-return#2-vozvrat-pokupatelya)
- [Розничный возврат](#/documents/retail-sales-return#2-roznichnyj-vozvrat)


### Шаблон автозаполнения

#### Атрибуты сущности

Атрибуты сущности нужно передавать в зависимости от типа документа, для которого будет выполнено автозаполнение. В 
соответствие с типом, будут обрабатываться соответствующие поля.

Ниже приводятся поля, которые влияют на заполнение скидок, цен, ндс и себестоимости.

+ **organization** - Ссылка на юрлицо в формате [Метаданных](#/general#3-metadannye). Обязателен со значением `evaluate_vat` параметра `action`
+ **agent** - Ссылка на контрагента в формате [Метаданных](#/general#3-metadannye). 
Обязателен со значениями `evaluate_price`, `evaluate_discount` параметра `action`
+ **vatEnabled** - Учитывается ли НДС
+ **vatIncluded** - Включен ли НДС в цену
+ **rate** - Валюта. Если не передано, заполняется валютой учета
+ **store** - Ссылка на склад в формате [Метаданных](#/general#3-metadannye). Обязателен со значением `evaluate_cost` параметра `action`
+ **moment** - Дата проведения документа. Влияет на расчет себестоимости 
+ **positions** - Позиции документа

При этом, если помимо вышеперечисленных полей были добавлены другие, не влияющие на заполнение, то они будут присутствовать в
ответе в том же порядке и с теми же значениями.

**Примечания**

Значения параметра `action` можно передавать через запятую.

Если в документе не используется поле `agent`, то для расчета цен `evaluate_price` и скидок `evaluate_discount` 
используется значение поля `organization`.

#### Позиции документа

Позиции в шаблоне - это список товаров/услуг/модификаций/серий/комплектов.
Объект позиции содержит следующие поля:

+ **quantity** - Количество товаров/услуг данного вида в позиции. Если позиция - товар, у которого включен учет по серийным номерам, то значение в этом поле всегда будет равно количеству серийных номеров для данной позиции в документе.
+ **price** - Цена товара/услуги в копейках.
+ **discount** - Процент скидки или наценки.
+ **vat** - НДС, которым облагается текущая позиция.
+ **vatEnabled** - включен ли НДС для текущей позиции. С помощью этого флага для позиции можно выставлять НДС = 0 или НДС = "без НДС". (vat = 0, vatEnabled = false) -> vat = "без НДС", (vat = 0, vatEnabled = true) -> vat = 0%.
+ **assortment** - Ссылка на товар/услугу/серию/модификацию/комплект, которую представляет собой позиция, в формате [Метаданных](#/general#3-metadannye)
+ **discountedPrice** - Цена товара/услуги с учетом скидок и ндс в копейках.
+ **sum** - Общая сумма с учетом скидки за указанное количество товара в позиции в копейках. Рассчитывается при передаче поля **quantity**.

### Запрос автозаполения

Запрос заполения полей шаблона.
Результат: Объект JSON, с заполненным шаблоном.

**Параметры**

| Параметр  | Описание                                                                                                                                                                                                                                                                                                                       |
| --------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| action    | `enum` (optional) *Example: evaluate_discount, evaluate_price, evaluate_discount* Определяет какую информацию нужно заполнить: цены (evaluate_price), ндс (evaluate_vat), скидки (evaluate_discount) или себестоимость (evaluate_cost). `Допустимые значения: evaluate_price, evaluate_discount, evaluate_vat, evaluate_cost`. |

### Запрос автозаполения цен

Запрос автозаполения с параметром `action` со значением `evaluate_price`. Требуется заполнение поля **agent** (или **organization**, если поле **agent** отсутствует). 
Заполняет поле цены товара **price** (если явно не передано) ценой переданного в поле **agent** контрагента, 
а также поле **discountedPrice**, с учетом рассчитанной или переданной скидки **discount** 
(принимается за 0, если значение отсутствует) и НДС **vat** (не учитывается, если пустое, поле **vatEnabled** 
имеет значение `false` или **vatIncluded** имеет значение `true`). Если передано поле **quantity**, 
то будет рассчитано поле **sum**. При вычислениях используется переданный `rate`.

> Запрос автозаполения цен

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/wizard/demand?action=evaluate_price"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '
{
   "agent":{
      "meta":{
         "href":"https://api.moysklad.ru/api/remap/1.2/entity/counterparty/eff93a94-c03a-11ea-c0a8-f00c0000001f",
         "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
         "type":"counterparty",
         "mediaType":"application/json",
         "uuidHref":"https://online.moysklad.ru/app/#company/edit?id=eff93a94-c03a-11ea-c0a8-f00c0000001f"
      }
   },
   "positions":[
      {
         "assortment":{
            "meta":{
               "href":"https://api.moysklad.ru/api/remap/1.2/entity/product/46628fb5-c1c8-11ea-c0a8-f00c0000001a",
               "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
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
               "href":"https://api.moysklad.ru/api/remap/1.2/entity/product/bb989405-bf9e-11ea-c0a8-f0100000000e",
               "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
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
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/eff93a94-c03a-11ea-c0a8-f00c0000001f",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=eff93a94-c03a-11ea-c0a8-f00c0000001f"
    }
  },
  "positions": [
    {
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/46628fb5-c1c8-11ea-c0a8-f00c0000001a",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
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
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/bb989405-bf9e-11ea-c0a8-f0100000000e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
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

Запрос автозаполения с параметром `action` со значением `evaluate_discount`. Требуется заполнение поля **agent** (или **organization**, если поле **agent** отсутствует). 
Заполняет поле скидки **discount** (если явно не передано) суммой применимых к данному товару активных скидок 
переданного в поле **agent** контрагента.

> Запрос автозаполения скидок

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/wizard/demand?action=evaluate_discount"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '
{
   "agent":{
      "meta":{
         "href":"https://api.moysklad.ru/api/remap/1.2/entity/counterparty/eff93a94-c03a-11ea-c0a8-f00c0000001f",
         "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
         "type":"counterparty",
         "mediaType":"application/json",
         "uuidHref":"https://online.moysklad.ru/app/#company/edit?id=eff93a94-c03a-11ea-c0a8-f00c0000001f"
      }
   },
   "positions":[
      {
         "assortment":{
            "meta":{
               "href":"https://api.moysklad.ru/api/remap/1.2/entity/product/46628fb5-c1c8-11ea-c0a8-f00c0000001a",
               "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
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
               "href":"https://api.moysklad.ru/api/remap/1.2/entity/product/bb989405-bf9e-11ea-c0a8-f0100000000e",
               "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
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
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/eff93a94-c03a-11ea-c0a8-f00c0000001f",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=eff93a94-c03a-11ea-c0a8-f00c0000001f"
    }
  },
  "positions": [
    {
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/46628fb5-c1c8-11ea-c0a8-f00c0000001a",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=46628fb5-c1c8-11ea-c0a8-f00c00000018"
        }
      },
      "quantity": 12.0,
      "discount": 65.0
    },
    {
      "discount": 40.0,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/bb989405-bf9e-11ea-c0a8-f0100000000e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=bb96904c-bf9e-11ea-c0a8-f0100000000c"
        }
      }
    }
  ]
}
```

### Запрос автозаполения НДС

Запрос автозаполения с параметром `action` со значением `evaluate_vat`. Требуется заполнение поля **organization**. 
Заполняет поле **vatEnabled** на основе того, является ли переданная в поле **organization** организация плательщиком 
НДС и поля **vat** у позиций значением из карточки товара, если организация - плательщик НДС.

> Запрос автозаполения НДС

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/wizard/demand?action=evaluate_vat"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '
{
    "organization": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/44055d92-bf76-11ea-c0a8-f01000000070",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
            "type": "organization",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=44055d92-bf76-11ea-c0a8-f01000000070"
        }
    },
    "vatEnabled": "true",
    "rate": {
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/44126ea6-bf76-11ea-c0a8-f01000000077",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
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
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/46628fb5-c1c8-11ea-c0a8-f00c0000001a",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
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
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/bb989405-bf9e-11ea-c0a8-f0100000000e",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
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
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/44055d92-bf76-11ea-c0a8-f01000000070",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=44055d92-bf76-11ea-c0a8-f01000000070"
    }
  },
  "vatEnabled": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/44126ea6-bf76-11ea-c0a8-f01000000077",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
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
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/46628fb5-c1c8-11ea-c0a8-f00c0000001a",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=466222d6-c1c8-11ea-c0a8-f00c00000018"
        }
      },
      "quantity": 12.0,
      "vat": 10,
      "vatEnabled": true
    },
    {
      "vat": 18,
      "vatEnabled": true,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/bb989405-bf9e-11ea-c0a8-f0100000000e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=bb96904c-bf9e-11ea-c0a8-f0100000000c"
        }
      }
    }
  ]
}
```


### Запрос автозаполения себестоимости

Запрос автозаполения с параметром `action` со значением `evaluate_cost`. Выполняется только для Возвратов Покупателя и Розничных Возвратов *без основания*. Требуется заполнение поля **store**. 
Заполняет поля **cost** у позиций значением себестоимости, рассчитанным по FIFO на момент **moment**. Если поле **moment** не указано, то себестоимость рассчитывается на текущую дату.

> Запрос автозаполения себестоимости

```shell
  curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/wizard/salesreturn?action=evaluate_cost"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
    -d '
{
  "store": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/16a3019e-1204-11eb-c0a8-300c00000072",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=16a3019e-1204-11eb-c0a8-300c00000072"
    }
  },
  "moment": "2020-10-20 17:45:00.000",
  "positions": [
    {
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/46628fb5-c1c8-11ea-c0a8-f00c0000001a",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=466222d6-c1c8-11ea-c0a8-f00c00000018"
        }
      }
    },
    {
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/bb989405-bf9e-11ea-c0a8-f0100000000e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
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
  "store": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/16a3019e-1204-11eb-c0a8-300c00000072",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=16a3019e-1204-11eb-c0a8-300c00000072"
    }
  },
  "moment": "2020-10-20 17:45:00.000",
  "positions": [
    {
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/46628fb5-c1c8-11ea-c0a8-f00c0000001a",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=466222d6-c1c8-11ea-c0a8-f00c00000018"
        }
      },
    "cost": 1200.0
    },
    {
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/bb989405-bf9e-11ea-c0a8-f0100000000e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=bb96904c-bf9e-11ea-c0a8-f0100000000c"
        }
      },
      "cost": 3500.0
    }
  ]
}
```
