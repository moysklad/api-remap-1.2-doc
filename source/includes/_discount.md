## Скидки
#### Скидки 

Кодом сущности для Скидок в составе JSON API является ключевое слово **discount**. Операции создания, изменения и удаления не поддерживаются. Перед работой со скидками настоятельно рекомендуем вам прочитать [вот эту статью](https://support.moysklad.ru/hc/ru/articles/203392253-%D0%A1%D0%BA%D0%B8%D0%B4%D0%BA%D0%B8) на портале поддержки МоегоСклада.

#### Атрибуты сущности
#### Общие поля

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**meta**               |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Скидки|---|да
|**id**                 |UUID|ID Скидки|Только для чтения|да
|**accountId**          |UUID| ID учетной записи|Только для чтения|да
|**name**               |String(255)|Наименование Скидки|---|да
|**active**             |Boolean|Индикатор, является ли скидка активной на данный момент|---|да
|**allProducts**        |Boolean|Индикатор, действует ли скидка на все товары|---|да
|**agentTags**          |Array(String)|Тэги контрагентов, к которым применяется скидка, если применяется не ко всем контрагентам|---|нет
|**assortment**         |Array([Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye))|Массив метаданных Товаров и Услуг, которые были выбраны для применения скидки, если та применяется не ко всем товарам|---|нет

#### Поля Спец. цен

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**productfolders**|Array([Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye))|Массив метаданных Групп товаров, к которым применяется скидка, если применяется не ко всем товарам|---|нет
|**discount**|Int|Процент скидки если выбран фиксированный процент|---|нет
|**specialPrice**|Object|Спец. цена (если выбран тип цен). [Подробнее тут](../dictionaries/#suschnosti-skidki-poluchit-otdel-specialprice)|---|нет

#### specialPrice

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**priceType**     |Object|Тип цены|---|да
|**value**         |Int|Значение цены, если выбрано фиксированное значение|---|нет

#### Поля накопительных скидок

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**productfolders**|Array([Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye))|Массив метаданных Групп товаров, к которым применяется скидка, если применяется не ко всем товарам|---|нет
|**levels**|Array(Object)|Проценты скидок при определенной сумме продаж. [Подробнее тут](../dictionaries/#suschnosti-skidki-poluchit-otdel-levels)|---|нет

#### levels

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**amount**     |Int|Сумма накоплений в копейках|---|да
|**discount**        |Int|Процент скидки, соответствующий данной сумме|---|нет

### Получить все скидки 
Запрос на получение всех скидок учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название  | Тип | Описание                    |
| --------- |:----|:----------------------------|
|**meta** |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные о выдаче,
|**context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.
|**rows** |Array(Object)|Массив JSON объектов, представляющих собой скидки.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|**limit** |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|**offset** |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

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
      "allProducts": true
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
        "value": 15,
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
      "earnRateRoublesToPoint": 1,
      "spendRatePointsToRouble": 1,
      "maxPaidRatePercents": 100
    }
  ]
}
```
