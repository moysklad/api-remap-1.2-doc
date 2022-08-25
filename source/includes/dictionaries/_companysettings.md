## Настройки компании

На данный момент можно получить информацию о текущих настройках компании и типах цен товаров. 

#### Настройки компании 
#### Атрибуты сущности

| Название                     | Тип                                                       | Описание                                                                                                                                                                                                                                       |
|------------------------------|:----------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **checkMinPrice**            | Boolean                                                   | Автоматически устанавливать минимальную цену. Если включено, при сохранении документов продажи с ценами меньше минимальных цен (указанных в карточках товара) цены будут автоматически увеличены до минимальных.<br>`+Обязательное при ответе` |
| **checkShippingStock**       | Boolean                                                   | Запретить отгрузку отсутствующих товаров. Если запрет установлен (true значение), пользователи не смогут провести отгрузку со склада отсутствующих товаров.<br>`+Обязательное при ответе`                                                      |
| **companyAddress**           | String(255)                                               | Адрес компании для электронных писем                                                                                                                                                                                                           |
| **currency**                 | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные стандартной валюты<br>`+Обязательное при ответе`                                                                                                                                                                                    |
| **discountStrategy**         | Enum                                                      | Совместное применение скидок. [Подробнее тут](../dictionaries/#suschnosti-nastrojki-kompanii-sowmestnoe-primenenie-skidok)<br>`+Обязательное при ответе` `+Необходимо при создании`                                                            |
| **globalOperationNumbering** | Boolean                                                   | Использовать сквозную нумерацию документов. Если проставлен true, будет установлена сквозная нумерация за всю историю, иначе нумерация документов будет начинаться заново каждый календарный год.<br>`+Обязательное при ответе`                |
| **meta**                     | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Настроек компании<br>`+Обязательное при ответе`                                                                                                                                                                                     |
| **priceTypes**               | Array(Object)                                             | Коллекция всех существующих типов цен. [Подробнее тут](../dictionaries/#suschnosti-nastrojki-kompanii-tip-ceny)<br>`+Обязательное при ответе`                                                                                                  |
| **useCompanyAddress**        | Boolean                                                   | Использовать адрес компании для электронных писем. Если включено, письма будут отправляться с адреса, указанного в companyAddress, иначе письма будут отправляться с адреса пользователя.<br>`+Обязательное при ответе`                        |
| **useRecycleBin**            | Boolean                                                   | Использовать корзину. Если включено, то все документы при удалении будут помещаться в корзину. Также появится возможность восстанавливать ошибочно удаленные документы.<br>`+Обязательное при ответе`                                          |
| **accountCountry**           | String(255)                                               | Передается для информации о том, какая страновая конфигурация активна на аккаунте пользователя. Возможные значения: RU, BY, KZ.<br>`+Обязательное при ответе` `+Только для чтения`                                                             |

#### Тип цены
Структура отдельного объекта, представляющего тип цены:

| Название         | Тип                                                       | Описание                                                                        |
| ---------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------ |
| **externalCode** | String(255)                                               | Внешний код Типа цены<br>`+Обязательное при ответе`                             |
| **id**           | UUID                                                      | ID Типа цены<br>`+Обязательное при ответе` `+Только для чтения`                 |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Типа цены<br>`+Обязательное при ответе` `+Только для чтения`         |
| **name**         | String(255)                                               | Наименование Типа цены<br>`+Обязательное при ответе` `+Необходимо при создании` |

#### Совместное применение скидок
Перечисление значений, представляющих совместное применение скидок:

| Название                       | Описание                                                                        |
| ------------------------------ | :------------------------------------------------------------------------------ |
| **bySum**                      | Сумма скидок. Означает, что должна действовать сумма скидок.                    |
| **byPriority**                 | Приоритетная. Должна действовать одна, наиболее выгодная для покупателя скидка. |

#### Метаданные настроек
В метаданных Настроек компании, в поле **customEntities** показан список пользовательских справочников.
Каждый пользовательский справочник содержит поля:

| Название       | Тип                                                       | Описание                                                                                    |
| -------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------ |
| **meta**       | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Пользовательского справочника<br>`+Обязательное при ответе` `+Только для чтения` |
| **entityMeta** | URL                                                       | Ссылка на список сущностей данного пользовательского справочника                            |
| **name**       | String(255)                                               | Наименование справочника                                                                    |

### Получить Настройки компании 
> Запрос на получение Настроек компании.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/context/companysettings"
  -H "Authorization: Basic <Credentials>"
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
  "discountStrategy": "bySum",
   "globalOperationNumbering": true,
   "checkShippingStock": true,
   "checkMinPrice": true,
   "useRecycleBin": true,
   "useCompanyAddress": true,
   "companyAddress": "MyCompany@moysklad.ru",
   "accountCountry": "RU" 
}
```

### Изменить Настройки компании
 Редактировать можно следующие настройки компании:

| Название                     | Тип         | Описание                                                                                                                                                                                                         |
| ---------------------------- | :---------- |:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **checkMinPrice**            | Boolean     | Автоматически устанавливать минимальную цену. Если включено, при сохранении документов продажи с ценами меньше минимальных цен (указанных в карточках товара) цены будут автоматически увеличены до минимальных. |
| **checkShippingStock**       | Boolean     | Запретить отгрузку отсутствующих товаров. Если запрет установлен (true значение), пользователи не смогут провести отгрузку со склада отсутствующих товаров.                                                      |
| **companyAddress**           | String(255) | Адрес компании для электронных писем                                                                                                                                                                             |
| **discountStrategy**         | Enum        | Совместное применение скидок. [Подробнее тут](../dictionaries/#suschnosti-nastrojki-kompanii-sowmestnoe-primenenie-skidok)                                                                                       |
| **globalOperationNumbering** | Boolean     | Использовать сквозную нумерацию документов. Если проставлен true, будет установлена сквозная нумерация за всю историю, иначе нумерация документов будет начинаться заново каждый календарный год.                |
| **useCompanyAddress**        | Boolean     | Использовать адрес компании для электронных писем. Если включено, письма будут отправляться с адреса, указанного в companyAddress, иначе письма будут отправляться с адреса пользователя.                        |
| **useRecycleBin**            | Boolean     | Использовать корзину. Если включено, то все документы при удалении будут помещаться в корзину. Также появится возможность восстанавливать ошибочно удаленные документы.                                          |

Допускается частичное редактирование - отредактированы будут только присутствующие в запросе поля.
> Запрос на изменение Настроек компании.

```shell
curl -X PUT
  "https://online.moysklad.ru/api/remap/1.2/context/companysettings"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
      -d '{
	  "globalOperationNumbering": true,
	  "checkShippingStock": true,
      "checkMinPrice": true,
      "useRecycleBin": true,
      "useCompanyAddress": true,
      "companyAddress": "MyCompany@moysklad.ru",
      "discountStrategy": "bySum"
}'
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
  "discountStrategy": "bySum",
   "globalOperationNumbering": true,
   "checkShippingStock": true,
   "checkMinPrice": true,
   "useRecycleBin": true,
   "useCompanyAddress": true,
   "companyAddress": "MyCompany@moysklad.ru",
   "accountCountry": "RU"
}
```


#### Метаданные настроек компании 
### Получить метаданные настроек компании 
> Запрос на получение метаданных Настроек компании.

```shell
curl -X GET
  "ttps://online.moysklad.ru/api/remap/1.2/context/companysettings/metadata"
  -H "Authorization: Basic <Credentials>"
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
