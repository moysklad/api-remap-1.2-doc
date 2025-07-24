## Услуга
Средствами JSON API можно создавать и обновлять сведения об Услугах, запрашивать списки Услуг и сведения по отдельным Услугам. Кодом сущности для Услуги в составе JSON API является ключевое слово **service**. Услуга - специальная разновидность товара, без закупочной цены и упаковок. Больше о Товарах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки в разделе
 [Товары и склад](https://support.moysklad.ru/hc/ru/articles/115006310327).

По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](#/general#3-kontekstnyj-poisk).

Поиск среди объектов услуг на соответствие поисковой строке будет осуществлен по следующим полям:

+ по наименованию Услуги **name**
+ по коду Услуги **code**

### Услуги 
#### Атрибуты сущности

| Название                | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                                                                                                                          |
| ----------------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**           | UUID                                                      | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                              |
| **archived**            | Boolean                                                   | `=` `!=`                                                                                                                                          | Добавлена ли Услуга в архив<br>`+Обязательное при ответе`                                                                                                                                                                         |
| **attributes**          | Array(Object)                                             | [Операторы доп. полей](#/general#4-filtraciya-po-dopolnitelnym-polyam) | Коллекция доп. полей                                                                                                                                                                                                              |
| **barcodes**            | Array(Object)                                             | `=` `!=` `~` `~=` `=~`                                                                                                                            | Штрихкоды Услуги. [Подробнее тут](#/dictionaries/service#5-shtrihkody). Для фильтрации по полю необходимо указывать его в единственном числе **barcode**.                                       |
| **buyPrice**            | Object                                                    |                                                                                                                                                   | Закупочная цена. [Подробнее тут](#/dictionaries/service#5-zakupochnaya-cena)                                                                                                                     |
| **code**                | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Код Услуги                                                                                                                                                                                                                        |
| **description**         | String(4096)                                              | `=` `!=` `~` `~=` `=~`                                                                                                                            | Описание Услуги                                                                                                                                                                                                                   |
| **discountProhibited**  | Boolean                                                   |                                                                                                                                                   | Признак запрета скидок<br>`+Обязательное при ответе`                                                                                                                                                                              |
| **effectiveVat**        | Int                                                       |                                                                                                                                                   | Реальный НДС %<br>`+Только для чтения`                                                                                                                                                                                            |
| **effectiveVatEnabled** | Boolean                                                   |                                                                                                                                                   | Дополнительный признак для определения разграничения реального НДС = 0 или "без НДС". (effectiveVat = 0, effectiveVatEnabled = false) -> "без НДС", (effectiveVat = 0, effectiveVatEnabled = true) -> 0%.<br>`+Только для чтения` |
| **externalCode**        | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код Услуги<br>`+Обязательное при ответе`                                                                                                                                                                                  |
| **files**               | MetaArray                                                 |                                                                                                                                                   | Метаданные массива [Файлов](#/dictionaries/files#2-fajly) (Максимальное количество файлов - 100)<br>`+Expand`                                                                                                                |
| **group**               | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Метаданные отдела сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                                                                                              |
| **id**                  | UUID                                                      | `=` `!=`                                                                                                                                          | ID Услуги<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                      |
| **meta**                | [Meta](#/general#3-metadannye) |                                                                                                                                                   | Метаданные Услуги<br>`+Обязательное при ответе`                                                                                                                                                                                   |
| **minPrice**            | Object                                                    |                                                                                                                                                   | Минимальная цена. [Подробнее тут](#/dictionaries/service#5-minimalnaya-cena)                                                                                                                    |
| **name**                | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование Услуги<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                                                                                                      |
| **owner**               | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Метаданные владельца (Сотрудника)<br>`+Expand`                                                                                                                                                                                    |
| **pathName**            | String                                                    | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование группы, в которую входит Услуга<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                   |
| **paymentItemType**     | Enum                                                      |                                                                                                                                                   | Признак предмета расчета. [Подробнее тут](#/dictionaries/service#5-priznak-predmeta-rascheta)                                                                                                |
| **productFolder**       | [Meta](#/general#3-metadannye) |                                                                                                                                                   | Метаданные группы Услуги<br>`+Expand`                                                                                                                                                                                          |
| **salePrices**          | Array(Object)                                             |                                                                                                                                                   | Цены продажи. [Подробнее тут](#/dictionaries/service#5-ceny-prodazhi)                                                                                                                           |
| **shared**              | Boolean                                                   | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе`                                                                                                                                                                                        |
| **syncId**              | UUID                                                      | `=` `!=`                                                                                                                                          | ID синхронизации<br>`+Только для чтения` `+Заполнение при создании`                                                                                                                                                               |
| **taxSystem**           | Enum                                                      |                                                                                                                                                   | Код системы налогообложения. [Подробнее тут](#/dictionaries/service#5-kod-sistemy-nalogooblozheniya)                                                                                          |
| **uom**                 | [Meta](#/general#3-metadannye) |                                                                                                                                                   | Единицы измерения<br>`+Expand`                                                                                                                                                                                                    |
| **updated**             | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления сущности<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                          |
| **useParentVat**        | Boolean                                                   |                                                                                                                                                   | Используется ли ставка НДС родительской группы. Если true для единицы ассортимента будет применена ставка, установленная для родительской группы.<br>`+Обязательное при ответе`                                                   |
| **vat**                 | Int                                                       |                                                                                                                                                   | НДС %                                                                                                                                                                                                                             |
| **vatEnabled**          | Boolean                                                   |                                                                                                                                                   | Включен ли НДС для услуги. С помощью этого флага для услуги можно выставлять НДС = 0 или НДС = "без НДС". (vat = 0, vatEnabled = false) -> vat = "без НДС", (vat = 0, vatEnabled = true) -> vat = 0%.                             |

Атрибут **pathName** сам по себе является атрибутом только для чтения, однако его можно изменить с помощью обновления атрибута **productFolder**.

##### Регионоспецифичные Атрибуты сущности
При работе с регионоспецифичными полями необходимо передавать заголовок. Подробнее можно посмотреть [здесь](#/general#3-regionalnye-zagolovki)

| Название                | Тип    | Описание                                                                                                                                                                                                        |
|-------------------------|:-------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **mod\_\_tasnif\_\_uz** | Object | Модуль с информацией из справочника ТАСНИФ. [Подробнее тут](#/dictionaries/service#5-modul-dlya-uzbekistana-s-informaciej-iz-spravochnika-tasnif)<br>`+Только для Узбекистана` |

##### Признак предмета расчета
Значения поля paymentItemType.

| Значение                       | Описание                     |
| ------------------------------ | :--------------------------- |
| **SERVICE**                    | Услуга                       |
| **WORK**                       | Работа                       |
| **PROVIDING_RID**              | Предоставление РИД           |
| **COMPOUND_PAYMENT_ITEM**      | Составной предмет расчета    |
| **ANOTHER_PAYMENT_ITEM**       | Иной предмет расчета         |

##### Код системы налогообложения
Значения поля taxSystem.

| Значение                                 | Описание                     |
| ---------------------------------------- | :--------------------------- |
| **GENERAL_TAX_SYSTEM**                   | ОСН                          |
| **PATENT_BASED**                         | Патент                       |
| **PRESUMPTIVE_TAX_SYSTEM**               | ЕНВД                         |
| **SIMPLIFIED_TAX_SYSTEM_INCOME**         | УСН. Доход                   |
| **SIMPLIFIED_TAX_SYSTEM_INCOME_OUTCOME** | УСН. Доход-Расход            |
| **TAX_SYSTEM_SAME_AS_GROUP**             | Совпадает с группой          |
| **UNIFIED_AGRICULTURAL_TAX**             | ЕСХН                         |

#### Атрибуты вложенных сущностей

#### Метаданные Услуг
Метаданные Услуг содержат информацию о дополнительных полях.

Посмотреть все созданные в основном интерфейсе доп. поля Услуг,
а также все типы цен можно с помощью запроса на получение метаданных [Товаров](#/dictionaries/product#3-zaprosy-metadannye-tovarov).

Структуры объектов отдельных коллекций:

##### Штрихкоды:
При создании штрихкода требуется описать объект с полем, являющимся форматом представления штрихкода в нижнем регистре, со строковым значением самого штрихкода. Наименование полей отдельного объекта, представляющего штрихкод:

| Название    | Описание                                                                                                          |
|-------------|-------------------------------------------------------------------------------------------------------------------|
| **ean13**   | штрихкод в формате EAN13, если требуется создать штрихкод в формате EAN13                                         |
| **ean8**    | штрихкод в формате EAN8, если требуется создать штрихкод в формате EAN8                                           |
| **code128** | штрихкод в формате Code128, если требуется создать штрихкод в формате Code128                                     |
| **gtin**    | штрихкод в формате GTIN, если требуется создать штрихкод в формате GTIN. Валидируется на соответствие формату GS1 |
| **upc**     | штрихкод в формате UPC, если требуется создать штрихкод в формате UPC                                             |

О работе с доп. полями Услуг можно прочитать [здесь](#/general#3-rabota-s-dopolnitelnymi-polyami)

##### Цены продажи

| Название      | Тип                                                       | Описание                                                                                                                           |
| ------------- | :-------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| **value**     | Float                                                     | Значение цены<br>`+Обязательное при ответе`                                                                                        |
| **currency**  | [Meta](#/general#3-metadannye) | Ссылка на валюту в формате [Метаданных](#/general#3-metadannye)<br>`+Обязательное при ответе` `+Expand` |
| **priceType** | Object                                                    | Тип цены<br>`+Обязательное при ответе`                                                                                             |


##### Закупочная цена

| Название     | Тип                                                       | Описание                                                                                                                           |
| ------------ | :-------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| **value**    | Float                                                     | Значение цены<br>`+Обязательное при ответе`                                                                                        |
| **currency** | [Meta](#/general#3-metadannye) | Ссылка на валюту в формате [Метаданных](#/general#3-metadannye)<br>`+Обязательное при ответе` `+Expand` |

##### Минимальная цена

| Название     | Тип                                                       | Описание                                                                                                                           |
| ------------ | :-------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| **value**    | Float                                                     | Значение цены<br>`+Обязательное при ответе`                                                                                        |
| **currency** | [Meta](#/general#3-metadannye) | Ссылка на валюту в формате [Метаданных](#/general#3-metadannye)<br>`+Обязательное при ответе` `+Expand` |

##### Группа Услуги

| Название | Тип                                                       | Описание                                                                      |
| -------- | :-------------------------------------------------------- | :---------------------------------------------------------------------------- |
| **meta** | [Meta](#/general#3-metadannye) | Метаданные, содержащие ссылку на группу Услуги.<br>`+Обязательное при ответе` |
Описание сущности Группа вы можете посмотреть [здесь](#/dictionaries/productFolder#2-gruppa-tovarov).
Обновление этого атрибута также обновит атрибут **pathName**.

##### Модуль для Узбекистана с информацией из справочника ТАСНИФ

| Название           | Тип       | Описание                                                    |
|--------------------|:----------|:------------------------------------------------------------|
| **ikpu**           | String    | Код из справочника ТАСНИФ `+Только для Узбекистана`         |
| **packCode**       | String    | Код упаковки из справочника ТАСНИФ `+Только для Узбекистана`|
| **barcodeTasnif**  | String    | Штрихкод из справочника ТАСНИФ `+Только для Узбекистана`    |

##### Особенности фильтрации поля archived
Если одновременно осуществляется фильтрация по полям **id** и **archived**, то фильтрация по полю **archived** не учитывается.


### Получить список Услуг 
Запрос на получение всех Услуг для данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                                                 |
| ----------- | :-------------------------------------------------------- | :--------------------------------------------------------------------------------------- |
| **meta**    | [Meta](#/general#3-metadannye) | Метаданные о выдаче,                                                                     |
| **context** | [Meta](#/general#3-metadannye) | Метаданные о сотруднике, выполнившем запрос.                                             |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой [Услуги](#/dictionaries/service#2-usluga). |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить список услуг

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/service"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Услуг.
  
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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/service/",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
    "type": "service",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/service/63e4fa87-2c87-11e6-8a84-bae500000030",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "service",
        "mediaType": "application/json"
      },
      "id": "63e4fa87-2c87-11e6-8a84-bae500000030",
      "accountId": "6270cd18-2c7f-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-06-07 11:11:08",
      "name": "Облицовка",
      "description": "Облицовка доставляемого товара",
      "code": "additionalprot",
      "externalCode": "addProt",
      "archived": false,
      "pathName": "",
      "vat": 6,
      "vatEnabled": true,
      "useParentVat": false,
      "effectiveVat": 6,
      "effectiveVatEnabled": true,
      "discountProhibited": false,
      "minprice": {
       "value": 500.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "salePrices": [
        {
          "value": 1052.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        },
        {
          "value": 1020,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
            "name": "Цена для друзей",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
          }
        }
      ],
      "buyPrice": {
        "value": 700.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "barcodes": [
        {
          "ean13": "34875834765872435"
        },
        {
          "ean8": "234234234234"
        },
        {
          "code128": "23423423452351"
        }
      ],
      "attributes": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0c2e54cd-2c80-11e6-8a84-bae50000009c",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "0c2e54cd-2c80-11e6-8a84-bae50000009c",
          "name": "Экспорт",
          "type": "boolean",
          "value": true
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0c2e5dc5-2c80-11e6-8a84-bae50000009d",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "0c2e5dc5-2c80-11e6-8a84-bae50000009d",
          "name": "Изготовитель",
          "type": "counterparty",
          "value": "ООО Компания"
        }
      ],
      "taxSystem": "GENERAL_TAX_SYSTEM"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/service/f6ecdc65-2c86-11e6-8a84-bae500000027",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "service",
        "mediaType": "application/json"
      },
      "id": "f6ecdc65-2c86-11e6-8a84-bae500000027",
      "accountId": "6270cd18-2c7f-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-06-07 11:08:06",
      "name": "Доставка",
      "description": "Доставка выбранного товара",
      "code": "delivery",
      "externalCode": "delCode",
      "archived": false,
      "pathName": "",
      "vat": 10,
      "vatEnabled": true,
      "useParentVat": false,
      "effectiveVat": 10,
      "effectiveVatEnabled": true,
      "minprice": {
       "value": 500.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "salePrices": [
        {
          "value": 10532.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        },
        {
          "value": 100,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
            "name": "Цена для друзей",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
          }
        }
      ],
      "buyPrice": {
        "value": 700.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "barcodes": [
        {
          "ean13": "34875834765872435"
        },
        {
          "ean8": "234234234234"
        },
        {
          "code128": "23423423452351"
        }
      ]
    }
  ]
}
```  

### Создать Услугу
Создать новую Услугу.
#### Описание
Услуга создается на основе переданного объекта JSON,
который содержит представление новой Услуги.
Результат - JSON представление созданной Услуги. Для создания новой Услуги,
необходимо и достаточно указать в переданном объекте не пустое поле `name`

При создании Услуги с указанным массивом штрихкодов для каждого штрихкода требуется указать к какому типу относится штрихкод. 
Например, чтобы создать штрихкод с типом Code 128, в массив штрихкодов должен быть добавлен JSON-объект с полем code128 со значением штрихкода.

> Пример наиболее полного по количеству полей запроса.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/service"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "name": "Доставка",
            "code": "delivery",
            "externalCode": "delCode",
            "description": "Доставка выбранного товара",
            "vat": 10,
            "effectiveVat": 10,
            "discountProhibited": false,
            "minprice": {
             "value": 500.0,
              "currency": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                  "type": "currency",
                  "mediaType": "application/json"
                }
              }
            },
            "salePrices": [
              {
                "value": 10532.0,
                "currency": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json"
                  }
                },
                "priceType": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
                    "type": "pricetype",
                    "mediaType": "application/json"
                  }
                }
              },
              {
                "value": 100,
                "currency": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json"
                  }
                },
                "priceType": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
                    "type": "pricetype",
                    "mediaType": "application/json"
                  }
                }
              }
            ],
            "buyPrice": {
              "value": 1047.0,
              "currency": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                  "type": "currency",
                  "mediaType": "application/json"
                }
              }
            },
            "barcodes": [
              {
                "ean13": "34875834765872435"
              },
              {
                "ean8": "234234234234"
              },
              {
                "code128": "23423423452351"
              }
            ]            
          }'  
```

> Response 200 (application/json)
  Успешный запрос. Результат - JSON представление созданной Услуги.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/service/f6ecdc65-2c86-11e6-8a84-bae500000027",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
    "type": "service",
    "mediaType": "application/json"
  },
  "id": "f6ecdc65-2c86-11e6-8a84-bae500000027",
  "accountId": "6270cd18-2c7f-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-06-07 11:08:06",
  "name": "Доставка",
  "description": "Доставка выбранного товара",
  "code": "delivery",
  "externalCode": "delCode",
  "archived": false,
  "pathName": "",
  "vat": 10,
  "vatEnabled": true,
  "useParentVat": false,
  "effectiveVat": 10,
  "effectiveVatEnabled": true,
  "discountProhibited": false,
  "minprice": {
    "value": 500.0,
    "currency": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "salePrices": [
    {
      "value": 10532.0,
      "currency": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      },
      "priceType": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
        "name": "Цена продажи",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
      }
    },
    {
      "value": 100,
      "currency": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      },
      "priceType": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
        "name": "Цена для друзей",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
      }
    }
  ],
  "buyPrice": {
    "value": 1047.0,
    "currency": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "barcodes": [
    {
      "ean13": "34875834765872435"
    },
    {
      "ean8": "234234234234"
    },
    {
      "code128": "23423423452351"
    }
  ]  
}
```
> Пример запроса на создание Услуги с единственным необходимым полем.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/service"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "name": "Услуга, у которой мы придумали только имя"
          }'  
```

> Response 200 (application/json)
  Успешный запрос. Результат - JSON представление созданной Услуги.  

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/service/cce4dae4-2c87-11e6-8a84-bae500000037",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
    "type": "service",
    "mediaType": "application/json"
  },
  "id": "cce4dae4-2c87-11e6-8a84-bae500000037",
  "accountId": "6270cd18-2c7f-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "salePrices": [
    {
      "value": 346347237000.0,
      "currency": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/2b50da23-296b-11e6-8a84-bae500000055",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      },
      "priceType": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
        "name": "Цена продажи",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
      }
    },
    {
      "value": 100,
      "currency": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/2b50da23-296b-11e6-8a84-bae500000055",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      },
      "priceType": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
        "name": "Цена для друзей",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
      }
    }
  ],
  "updated": "2016-06-07 11:14:05",
  "name": "Услуга, у которой мы придумали только имя",
  "code": "pumpkin2",
  "externalCode": "5fZe-Qyji8mSwoHYs7kSA2",
  "archived": false,
  "pathName": "",
  "vatEnabled": false,
  "useParentVat": true
}
```

> Пример запроса на создание Услуги с доп. полями.


```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/service"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "name": "Облицовка",
            "code": "additionalprot",
            "externalCode": "addProt",
            "description": "Облицовка доставляемого товара",
            "vat": 6,
            "effectiveVat": 5,
            "minprice": {
             "value": 500.0,
              "currency": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                  "type": "currency",
                  "mediaType": "application/json"
                }
              }
            },
            "salePrices": [
              {
                "value": 1052.0,
                "currency": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json"
                  }
                },
                "priceType": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
                    "type": "pricetype",
                    "mediaType": "application/json"
                  }
                }
              },
              {
                "value": 1020,
                "currency": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json"
                  }
                },
                "priceType": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
                    "type": "pricetype",
                    "mediaType": "application/json"
                  }
                }
              }
            ],
            "buyPrice": {
              "value": 700.0,
              "currency": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                  "type": "currency",
                  "mediaType": "application/json"
                }
              }
            },
            "barcodes": [
              {
                "ean13": "34875834765872435"
              },
              {
                "ean8": "234234234234"
              },
              {
                "code128": "23423423452351"
              }
            ],            
            "attributes": [
              {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0c2e54cd-2c80-11e6-8a84-bae50000009c",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "name": "Экспорт",
                "value": true
              },
              {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0c2e5dc5-2c80-11e6-8a84-bae50000009d",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "name": "Изготовитель",
                "value": "ООО Компания"
              }
            ]
          }'  
```

> Response 200 (application/json)
  Успешный запрос. Результат - JSON представление созданной Услуги.
  

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/service/63e4fa87-2c87-11e6-8a84-bae500000030",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
    "type": "service",
    "mediaType": "application/json"
  },
  "id": "63e4fa87-2c87-11e6-8a84-bae500000030",
  "accountId": "6270cd18-2c7f-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-06-07 11:11:08",
  "name": "Облицовка",
  "description": "Облицовка доставляемого товара",
  "code": "additionalprot",
  "externalCode": "addProt",
  "archived": false,
  "pathName": "",
  "vat": 6,
  "vatEnabled": true,
  "useParentVat": false,
  "effectiveVat": 6,
  "effectiveVatEnabled": true,
  "discountProhibited": false,
  "minprice": {
    "value": 500.0,
    "currency": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "salePrices": [
    {
      "value": 1052.0,
      "currency": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      },
      "priceType": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
        "name": "Цена продажи",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
      }
    },
    {
      "value": 1020,
      "currency": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      },
      "priceType": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
        "name": "Цена для друзей",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
      }
    }
  ],
  "buyPrice": {
    "value": 700.0,
    "currency": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "barcodes": [
    {
      "ean13": "34875834765872435"
    },
    {
      "ean8": "234234234234"
    },
    {
      "code128": "23423423452351"
    }
  ],  
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0c2e54cd-2c80-11e6-8a84-bae50000009c",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "0c2e54cd-2c80-11e6-8a84-bae50000009c",
      "name": "Экспорт",
      "type": "boolean",
      "value": true
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0c2e5dc5-2c80-11e6-8a84-bae50000009d",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "0c2e5dc5-2c80-11e6-8a84-bae50000009d",
      "name": "Изготовитель",
      "type": "counterparty",
      "value": "ООО Компания"
    }
  ]
}
```

### Массовое создание и обновление Услуг 
[Массовое создание и обновление](#/general#3-sozdanie-i-obnovlenie-neskolkih-obuektov) Услуг.
В теле запроса нужно передать массив, содержащий JSON представления Услуг, которые вы хотите создать или обновить.
Обновляемые Услуги должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Услуг

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/service"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "Услуга, у которой мы придумали только имя"
            },
            {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/service/f6ecdc65-2c86-11e6-8a84-bae500000027",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                "type": "service",
                "mediaType": "application/json"
              },
              "name": "Доставка товара",
              "description": "Доставка на дом выбранного товара",
              "externalCode": "deliveryCode",
              "vat": 11,
              "effectiveVat": 11,
              "minprice": {
               "value": 500.0,
                "currency": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json"
                  }
                }
              },
              "salePrices": [
                {
                  "value": 700.0,
                  "currency": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
                      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                      "type": "currency",
                      "mediaType": "application/json"
                    }
                  },
                  "priceType": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
                      "type": "pricetype",
                      "mediaType": "application/json"
                    }
                  }
                },
                {
                  "value": 7000,
                  "currency": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
                      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                      "type": "currency",
                      "mediaType": "application/json"
                    }
                  },
                  "priceType": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
                      "type": "pricetype",
                      "mediaType": "application/json"
                    }
                  }
                }
              ],
              "buyPrice": {
                "value": 700.0,
                "currency": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json"
                  }
                }
              },
              "barcodes": [
                {
                  "ean13": "34875834765872435"
                },
                {
                  "ean8": "234234234234"
                },
                {
                  "code128": "23423423452351"
                }
              ]
            }
          ]'  
```

> Response 200 (application/json) 
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Услуг.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/service/cce4dae4-2c87-11e6-8a84-bae500000037",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "service",
      "mediaType": "application/json"
    },
    "id": "cce4dae4-2c87-11e6-8a84-bae500000037",
    "accountId": "6270cd18-2c7f-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "salePrices": [
      {
        "value": 346347237000.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/2b50da23-296b-11e6-8a84-bae500000055",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        },
        "priceType": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
            "type": "pricetype",
            "mediaType": "application/json"
          },
          "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "name": "Цена продажи",
          "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
        }
      },
      {
        "value": 100,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/2b50da23-296b-11e6-8a84-bae500000055",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        },
        "priceType": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
            "type": "pricetype",
            "mediaType": "application/json"
          },
          "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
          "name": "Цена для друзей",
          "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
        }
      }
    ],
    "updated": "2016-06-07 11:14:05",
    "name": "Услуга, у которой мы придумали только имя",
    "code": "pumpkin2",
    "externalCode": "5fZe-Qyji8mSwoHYs7kSA2",
    "archived": false,
    "pathName": "",
    "vatEnabled": false,
    "useParentVat": true
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/service/f6ecdc65-2c86-11e6-8a84-bae500000027",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "service",
      "mediaType": "application/json"
    },
    "id": "f6ecdc65-2c86-11e6-8a84-bae500000027",
    "accountId": "6270cd18-2c7f-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-06-07 11:20:40",
    "name": "Доставка товара",
    "description": "Доставка на дом выбранного товара",
    "code": "delivery",
    "externalCode": "deliveryCode",
    "archived": false,
    "pathName": "",
    "vat": 11,
    "vatEnabled": true,
    "useParentVat": false,
    "effectiveVat": 11,
    "effectiveVatEnabled": true,
    "discountProhibited": false,
    "minprice": {
    "value": 500.0,
      "currency": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    },
    "salePrices": [
      {
        "value": 700.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        },
        "priceType": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
            "type": "pricetype",
            "mediaType": "application/json"
          },
          "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "name": "Цена продажи",
          "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
        }
      },
      {
        "value": 7000,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        },
        "priceType": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
            "type": "pricetype",
            "mediaType": "application/json"
          },
          "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
          "name": "Цена для друзей",
          "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
        }
      }
    ],
    "buyPrice": {
      "value": 700.0,
      "currency": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    },
    "barcodes": [
      {
        "ean13": "34875834765872435"
      },
      {
        "ean8": "234234234234"
      },
      {
        "code128": "23423423452351"
      }
    ]
  }
]
```

### Удалить Услугу

**Параметры**

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Услуги. |

> Запрос на удаление Услуги с указанным id.

```shell
  curl -X DELETE
    "https://api.moysklad.ru/api/remap/1.2/entity/service/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"      
```
> Response 200 (application/json)
Успешное удаление Услуги.

### Массовое удаление Услуг

В теле запроса нужно передать массив, содержащий JSON метаданных Услуг, которые вы хотите удалить.


> Запрос на массовое удаление Услуг. 

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/service/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
  -d '[
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/service/7944ef04-f831-11e5-7a69-971500188b1",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                "type": "service",
                "mediaType": "application/json"
            }
        },
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/service/7944ef04-f831-11e5-7a69-971500188b2",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                "type": "service",
                "mediaType": "application/json"
            }
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Услуг.

```json
[
  {
    "info":"Сущность 'service' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'service' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
```  

### Запросы - Метаданные Услуг 

Посмотреть все созданные в основном интерфейсе доп. поля Услуг,
а также все типы цен можно с помощью запроса на получение метаданных [Товаров](#/dictionaries/product#3-zaprosy-metadannye-tovarov).

### Запросы - Услуга
 
Отдельная Услуга, обращение к которой происходит по значению его id.

### Получить Услугу

**Параметры**

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Услуги. |

> Запрос на получение Услуги с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/service/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Услуги.
    
```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/service/63e4fa87-2c87-11e6-8a84-bae500000030",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
    "type": "service",
    "mediaType": "application/json"
  },
  "id": "63e4fa87-2c87-11e6-8a84-bae500000030",
  "accountId": "6270cd18-2c7f-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-06-07 11:11:08",
  "name": "Облицовка",
  "description": "Облицовка доставляемого товара",
  "code": "additionalprot",
  "externalCode": "addProt",
  "archived": false,
  "pathName": "",
  "vat": 6,
  "vatEnabled": true,
  "useParentVat": false,
  "effectiveVat": 6,
  "effectiveVatEnabled": true,
  "discountProhibited": false,
  "minprice": {
    "value": 500.0,
    "currency": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "salePrices": [
    {
      "value": 1052.0,
      "currency": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      },
      "priceType": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
        "name": "Цена продажи",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
      }
    },
    {
      "value": 1020,
      "currency": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      },
      "priceType": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
        "name": "Цена для друзей",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
      }
    }
  ],
  "buyPrice": {
    "value": 700.0,
    "currency": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "barcodes": [
    {
      "ean13": "34875834765872435"
    },
    {
      "ean8": "234234234234"
    },
    {
      "code128": "23423423452351"
    }
  ],
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0c2e54cd-2c80-11e6-8a84-bae50000009c",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "0c2e54cd-2c80-11e6-8a84-bae50000009c",
      "name": "Экспорт",
      "type": "boolean",
      "value": true
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0c2e5dc5-2c80-11e6-8a84-bae50000009d",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "0c2e5dc5-2c80-11e6-8a84-bae50000009d",
      "name": "Изготовитель",
      "type": "counterpaerty",
      "value": "ООО Компания"
    }
  ]
}
```

### Изменить Услугу
Обновить существующую Услугу.
Типы цен в ценах продаж и дополнительные поля обновляются как элементы вложенных коллекций:

+ Если в текущем объекте у какого-то из доп. полей / типов цен нет значения,
а в переданной коллекции оно есть - значение записывается в доп. поле / тип цены.
+ Если же у данного атрибута значение уже присутствует - оно перезаписывается на переданное.
+ Если у данного атрибута в составе объекта значение присутствует, однако оно отсутствует
в передаваемой в теле запроса коллекции (не передается совсем), то значение атрибута объекта не изменяется.

При обновлении Услуги с указанным массивом штрихкодов для каждого штрихкода требуется указать к какому типу относится штрихкод. 
Например, чтобы создать штрихкод с типом Code 128, в массив штрихкодов должен быть добавлен JSON-объект с полем code128 со значением штрихкода.

**Параметры**

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Услуги. |

> Пример запроса на обновление Услуги
  
  ```shell
    curl -X PUT
      "https://api.moysklad.ru/api/remap/1.2/entity/service/7944ef04-f831-11e5-7a69-971500188b19"
      -H "Authorization: Basic <Credentials>"
      -H "Accept-Encoding: gzip"
      -H "Content-Type: application/json"
        -d '{
              "name": "Доставка товара",
              "description": "Доставка на дом выбранного товара",
              "externalCode": "deliveryCode",
              "vat": 11,
              "effectiveVat": 11,
              "minprice": {
               "value": 500.0,
                "currency": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json"
                  }
                }
              },
              "salePrices": [
                {
                  "value": 700.0,
                  "currency": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
                      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                      "type": "currency",
                      "mediaType": "application/json"
                    }
                  },
                  "priceType": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
                      "type": "pricetype",
                      "mediaType": "application/json"
                    }
                  }
                },
                {
                  "value": 7000,
                  "currency": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
                      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                      "type": "currency",
                      "mediaType": "application/json"
                    }
                  },
                  "priceType": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
                      "type": "pricetype",
                      "mediaType": "application/json"
                    }
                  }
                }
              ],
              "buyPrice": {
                "value": 700.0,
                "currency": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json"
                  }
                }
              },
              "barcodes": [
                {
                  "ean13": "34875834765872435"
                },
                {
                  "ean8": "234234234234"
                },
                {
                  "code128": "23423423452351"
                }
              ]
            }'  
  ```

> Response 200 (application/json)
  Успешный запрос. Результат - JSON представление обновленной Услуги.
    
  ```json
 {
   "meta": {
     "href": "https://api.moysklad.ru/api/remap/1.2/entity/service/f6ecdc65-2c86-11e6-8a84-bae500000027",
     "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
     "type": "service",
     "mediaType": "application/json"
   },
   "id": "f6ecdc65-2c86-11e6-8a84-bae500000027",
   "accountId": "6270cd18-2c7f-11e6-8a84-bae500000001",
   "owner": {
     "meta": {
       "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
       "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
       "type": "employee",
       "mediaType": "application/json"
     }
   },
   "shared": false,
   "group": {
     "meta": {
       "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
       "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
       "type": "group",
       "mediaType": "application/json"
     }
   },
   "updated": "2016-06-07 11:20:40",
   "name": "Доставка товара",
   "description": "Доставка на дом выбранного товара",
   "code": "delivery",
   "externalCode": "deliveryCode",
   "archived": false,
   "pathName": "",
   "vat": 11,
   "vatEnabled": true,
   "useParentVat": false,
   "effectiveVat": 11,
   "effectiveVatEnabled": true,
   "discountProhibited": false,
   "minprice": {
     "value": 500.0,
     "currency": {
       "meta": {
         "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
         "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
         "type": "currency",
         "mediaType": "application/json"
       }
     }
   },
   "salePrices": [
     {
       "value": 700.0,
       "currency": {
         "meta": {
           "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
           "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
           "type": "currency",
           "mediaType": "application/json"
         }
       },
       "priceType": {
         "meta": {
           "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
           "type": "pricetype",
           "mediaType": "application/json"
         },
         "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
         "name": "Цена продажи",
         "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
       }
     },
     {
       "value": 7000,
       "currency": {
         "meta": {
           "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
           "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
           "type": "currency",
           "mediaType": "application/json"
         }
       },
       "priceType": {
         "meta": {
           "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
           "type": "pricetype",
           "mediaType": "application/json"
         },
         "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
         "name": "Цена для друзей",
         "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
       }
     }
   ],
   "buyPrice": {
     "value": 700.0,
     "currency": {
       "meta": {
         "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
         "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
         "type": "currency",
         "mediaType": "application/json"
       }
     }
   },
   "barcodes": [
     {
       "ean13": "34875834765872435"
     },
     {
       "ean8": "234234234234"
     },
     {
       "code128": "23423423452351"
     }
   ]
 } 
  ```

> Пример запроса на изменение Услуги с дополнительными полями.
 
 ```shell
   curl -X PUT
     "https://api.moysklad.ru/api/remap/1.2/entity/service/7944ef04-f831-11e5-7a69-971500188b19"
     -H "Authorization: Basic <Credentials>"
     -H "Accept-Encoding: gzip"
     -H "Content-Type: application/json"
       -d '{
             "name": "Облицовка груза",
             "description": "Облицовка доставляемого груза",
             "code": "additionalprotection",
             "externalCode": "addProtection",
             "productFolder": {
               "meta": {
                 "href": "https://api.moysklad.ru/api/remap/1.2/entity/productfolder/238e806f-2c89-11e6-8a84-bae5000000a8",
                 "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productfolder/metadata",
                 "type": "productfolder",
                 "mediaType": "application/json"
               }
             },
             "vat": 6,
             "effectiveVat": 6,
             "minprice": {
              "value": 500.0,
               "currency": {
                 "meta": {
                   "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
                   "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                   "type": "currency",
                   "mediaType": "application/json"
                 }
               }
             },
             "salePrices": [
               {
                 "value": 778.0,
                 "currency": {
                   "meta": {
                     "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
                     "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                     "type": "currency",
                     "mediaType": "application/json"
                   }
                 },
                 "priceType": {
                   "meta": {
                     "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
                     "type": "pricetype",
                     "mediaType": "application/json"
                   }
                 }
               },
               {
                 "value": 777,
                 "currency": {
                   "meta": {
                     "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
                     "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                     "type": "currency",
                     "mediaType": "application/json"
                   }
                 },
                 "priceType": {
                   "meta": {
                     "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
                     "type": "pricetype",
                     "mediaType": "application/json"
                   }
                 }
               }
             ],
             "buyPrice": {
               "value": 700.0,
               "currency": {
                 "meta": {
                   "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
                   "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                   "type": "currency",
                   "mediaType": "application/json"
                 }
               }
             },
             "barcodes": [
               {
                 "ean13": "34875834765872435"
               },
               {
                 "ean8": "234234234234"
               },
               {
                 "code128": "23423423452351"
               }
             ],             
             "attributes": [
               {
                 "meta": {
                   "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0c2e54cd-2c80-11e6-8a84-bae50000009c",
                   "type": "attributemetadata",
                   "mediaType": "application/json"
                 },
                 "name": "Экспорт",
                 "value": true
               },
               {
                 "meta": {
                   "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0c2e5dc5-2c80-11e6-8a84-bae50000009d",
                   "type": "attributemetadata",
                   "mediaType": "application/json"
                 },
                 "name": "Изготовитель",
                 "value": "ООО Компания отдел доставки"
               }
             ]
           }'  
 ```
 
> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Услуги.

 ```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/service/63e4fa87-2c87-11e6-8a84-bae500000030",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
    "type": "service",
    "mediaType": "application/json"
  },
  "id": "63e4fa87-2c87-11e6-8a84-bae500000030",
  "accountId": "6270cd18-2c7f-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-06-07 11:26:11",
  "name": "Облицовка груза",
  "description": "Облицовка доставляемого груза",
  "code": "additionalprotection",
  "externalCode": "addProtection",
  "archived": false,
  "pathName": "Услуги компании",
  "vat": 6,
  "vatEnabled": true,
  "useParentVat": false,
  "effectiveVat": 6,
  "effectiveVatEnabled": true,
  "productFolder": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/productfolder/238e806f-2c89-11e6-8a84-bae5000000a8",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productfolder/metadata",
      "type": "productfolder",
      "mediaType": "application/json"
    }
  },
  "discountProhibited": false,
  "minprice": {
    "value": 500.0,
    "currency": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "salePrices": [
    {
      "value": 778.0,
      "currency": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      },
      "priceType": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
        "name": "Цена продажи",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
      }
    },
    {
      "value": 777,
      "currency": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      },
      "priceType": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
        "name": "Цена для друзей",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
      }
    }
  ],
  "buyPrice": {
    "value": 700.0,
    "currency": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "barcodes": [
    {
      "ean13": "34875834765872435"
    },
    {
      "ean8": "234234234234"
    },
    {
      "code128": "23423423452351"
    }
  ],  
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0c2e54cd-2c80-11e6-8a84-bae50000009c",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "0c2e54cd-2c80-11e6-8a84-bae50000009c",
      "name": "Экспорт",
      "type": "boolean",
      "value": true
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0c2e5dc5-2c80-11e6-8a84-bae50000009d",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "0c2e5dc5-2c80-11e6-8a84-bae50000009d",
      "name": "Изготовитель",
      "type": "string",
      "value": "ООО Компания отдел доставки"
    }
  ]
} 
 ```
