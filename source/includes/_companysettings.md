## Настройки компании
На данный момент можно только получить информацию о текущих настройках компании и типах цен товаров. Создавать новые настройки или изменять существующие пока невозможно.
#### Настройки компании 
#### Атрибуты сущности
+ **meta** - [Метаданные](/#mojsklad-json-api-obschie-swedeniq-metadannye) о Настройках компании
+ **currency** - Ссылка на стандартную валюту в формате [Метаданных](/#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **priceTypes** - коллекция всех существующих типов цен.
+ **discountStrategy** - Cовместное применение скидок. Может принимать значения `[bySum, byPriority]` означающие "Сумма скидок" и "Приоритетная" соответственно. `Необходимое`
  - *"Сумма скидок"* `[bySum]` означает, что должна действовать сумма скидок
  - *"Приоритетная"* `[byPriority]` должна действовать одна, наиболее выгодная для покупателя скидка

##### Тип цены:
Структура отдельного объекта, представляющего тип цены:

+ **meta** - [Метаданные](/#mojsklad-json-api-obschie-swedeniq-metadannye) о Типе цены `Только для чтения`
+ **id** - ID в формате UUID `Только для чтения`
+ **name** - Наименование Типа цены `Необходимое`
+ **externalCode** - Внешний код Типа цены

#### Метаданные настроек
В метаданных Настроек компании, в поле **customEntities** показан список пользовательских справочников.
Каждый пользовательский справочник содержит поля:

+ **meta** - Ссылка на представление пользовательского справочника
+ **entityMeta** - Ссылка на список сущностей данного пользовательского справочника
+ **name** - Наименование справочника

### Получить Настройки компании 
> Запрос на получение Настроек компании.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/context/companysettings"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Настроек компании.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/metadata",
    "type": "companysettings",
    "mediaType": "application/json"
  },
  "currency": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/45ffbac2-24a5-11e6-8a84-bae500000055",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
      "type": "currency",
      "mediaType": "application/json"
    },
    "id": "45ffbac2-24a5-11e6-8a84-bae500000055",
    "system": true,
    "name": "руб",
    "fullName": "Российский рубль",
    "rate": 1,
    "multiplicity": 1,
    "indirect": false,
    "rateUpdateType": "manual",
    "code": "643",
    "isoCode": "RUB",
    "majorUnit": {
      "gender": "masculine",
      "s1": "рубль",
      "s2": "рубля",
      "s5": "рублей"
    },
    "minorUnit": {
      "gender": "feminine",
      "s1": "копейка",
      "s2": "копейки",
      "s5": "копеек"
    },
    "archived": false,
    "default": true
  },
  "priceTypes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
        "type": "pricetype",
        "mediaType": "application/json"
      },
      "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
      "name": "Цена для друзей",
      "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f4444",
        "type": "pricetype",
        "mediaType": "application/json"
      },
      "id": "672559f1-cbf3-11e1-9eb9-889ffa6f4444",
      "name": "Цена для конкурентов",
      "externalCode": "cbcf493b-55bc-11d9-848a-00112f434444"
    }
  ],
  "discountStrategy": "bySum"
}
```

#### Метаданные настроек компании 
### Получить метаданные настроек компании 
> Запрос на получение метаданных Настроек компании.

```shell
curl -X GET
  "ttps://online.moysklad.ru/api/remap/1.2/context/companysettings/metadata"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление метаданных настроек компании.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings",
    "mediaType": "application/json"
  },
  "customEntities": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/metadata/customEntities/eaacabaf-2655-11e6-8a84-bae500000045",
        "type": "customentitymetadata",
        "mediaType": "application/json"
      },
      "name": "Партнеры",
      "createShared": true
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/metadata/customEntities/f3aff189-2655-11e6-8a84-bae500000046",
        "type": "customentitymetadata",
        "mediaType": "application/json"
      },
      "name": "Рекламные агенства",
      "createShared": true
    }
  ]
}
```
