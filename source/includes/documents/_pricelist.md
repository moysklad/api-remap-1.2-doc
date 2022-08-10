## Прайс-лист
Средствами JSON API можно создавать и обновлять сведения о Прайс-листах, запрашивать списки Прайс-листов и сведения по отдельным Прайс-листам. Позициями Прайс-листов можно управлять как в составе отдельного Прайс-листа, так и отдельно - с помощью специальных ресурсов для управления позициями Прайс-листа. Кодом сущности для Прайс-листа в составе JSON API является ключевое слово **pricelist**. Больше о Прайс-листах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по  [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203025356-%D0%9F%D1%80%D0%B0%D0%B9%D1%81-%D0%BB%D0%B8%D1%81%D1%82%D1%8B).
### Прайс-листы 
#### Атрибуты сущности

| Название         | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                                      |
| ---------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| **accountId**    | UUID                                                      | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                          |
| **applicable**   | Boolean                                                   | `=` `!=`                                                                                                                                          | Отметка о проведении<br>`+Обязательное при ответе`                                                                                            |
| **attributes**   | Array(Object)                                             | [Операторы доп. полей](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-fil-traciq-po-dopolnitel-nym-polqm) | Коллекция метаданных доп. полей. [Поля объекта](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)                       |
| **code**         | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Код Прайс-листа                                                                                                                               |
| **columns**      | Array(Object)                                             |                                                                                                                                                   | Массив столбцов описания таблицы<br>`+Обязательное при ответе` `+Необходимо при создании` `+После создания изменить нельзя`                   |
| **created**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата создания<br>`+Обязательное при ответе` `+Только для чтения`                                                                              |
| **deleted**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего удаления Прайс-листа<br>`+Только для чтения`                                                                                |
| **description**  | String(4096)                                              | `=` `!=` `~` `~=` `=~`                                                                                                                            | Комментарий Прайс-листа                                                                                                                       |
| **externalCode** | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код Прайс-листа<br>`+Обязательное при ответе`                                                                                         |
| **files**        | MetaArray                                                 |                                                                                                                                                   | Метаданные массива [Файлов](../dictionaries/#suschnosti-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand` |
| **group**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                      |
| **id**           | UUID                                                      | `=` `!=`                                                                                                                                          | ID Прайс-листа<br>`+Обязательное при ответе` `+Только для чтения`                                                                             |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные Прайс-листа<br>`+Обязательное при ответе`                                                                                          |
| **moment**       | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата документа<br>`+Обязательное при ответе`                                                                                                  |
| **name**         | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование Прайс-листа<br>`+Обязательное при ответе`                                                                                        |
| **organization** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand`                                                                                     |
| **owner**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Обязательное при ответе` `+Expand`                                                                                  |
| **positions**    | MetaArray                                                 |                                                                                                                                                   | Метаданные позиций Прайс-листа<br>`+Обязательное при ответе` `+Expand`                                                                        |
| **priceType**    | Object                                                    |                                                                                                                                                   | Объект типа цены<br>`+Обязательное при ответе` `+Только для чтения`                                                                           |
| **printed**      | Boolean                                                   | `=` `!=`                                                                                                                                          | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                      |
| **published**    | Boolean                                                   | `=` `!=`                                                                                                                                          | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                    |
| **shared**       | Boolean                                                   | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе`                                                                                                    |
| **state**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные статуса Прайс-листа<br>`+Expand`                                                                                                   |
| **syncId**       | UUID                                                      | `=` `!=`                                                                                                                                          | ID синхронизации. После заполнения недоступен для изменения                                                                                   |
| **updated**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления Прайс-листа<br>`+Обязательное при ответе` `+Только для чтения`                                                   |

#### Тип цены
| Название         | Тип                                                       | Описание                                                                        |
| ---------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------ |
| **externalCode** | String(255)                                               | Внешний код Типа цены<br>`+Обязательное при ответе`                             |
| **id**           | UUID                                                      | ID типа цены<br>`+Обязательное при ответе` `+Только для чтения`                 |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Типа цены<br>`+Обязательное при ответе` `+Только для чтения`         |
| **name**         | String(255)                                               | Наименование Типа цены<br>`+Обязательное при ответе` `+Необходимо при создании` |

#### Позиции Прайс-листа
Позиции Прайс-листа - это список товаров/услуг/модификаций/комплектов.
Объект позиции Прайс-листа содержит следующие поля:

| Название       | Тип                                                       | Описание                                                                                                                   |
| -------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------- |
| **accountId**  | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                       |
| **assortment** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные товара/услуги/серии/модификации, которую представляет собой позиция<br>`+Expand`                                |
| **cells**      | Array(Object)                                             | Массив значений столбцов в позиции Прайс-листа<br>`+Обязательное при ответе`                                               |
| **id**         | UUID                                                      | ID позиции<br>`+Обязательное при ответе` `+Только для чтения`                                                              |
| **pack**       | Object                                                    | Упаковки Товара. [Подробнее тут](../dictionaries/#suschnosti-towar-towary-atributy-wlozhennyh-suschnostej-upakowki-towara) |

С позициями можно работать с помощью [специальных ресурсов для управления позициями Прайс-листа](../documents/#dokumenty-prajs-list-pozicii-prajs-lista),
а также в составе отдельного Прайс-листа. При работе в составе отдельного Прайс-листа,
вы можете отправлять запросы на создание отдельного Прайс-листа с включенным в тело запроса
массивом позиций Прайс-листа. Если количество позиций превышает максимально допустимое, то для
дальнейшего пополнения позиций нужно будет работать со специальным ресурсом "Позиции Прайс-листа".
Также, при работе в составе отдельной Прайс-листа, можно отправлять запросы на обновление списка позиций
с включенным в тело запроса массивом позиций Прайс-листа. При этом важно помнить, что коллекция позиций будет
восприниматься как "все позиции Прайс-листа" и полностью заменит уже существующую коллекцию при обновлении объекта - лишние
позиции будут удалены, новые добавлены, существующие - изменены.


#### Столбцы
Поле **columns** - массив, содержащий в себе объекты со следующими атрибутами:

| Название               | Тип         | Описание                                                                          |
| ---------------------- | :---------- | :-------------------------------------------------------------------------------- |
| **name**               | String(255) | Наименование Прайс-листа<br>`+Обязательное при ответе` `+Необходимо при создании` |
| **percentageDiscount** | Int         | Процентная наценка или скидка по умолчанию для столбца                            |

На столбцы налагаются следующие ограничения:

- Название столбца не может отсутствовать или быть пустым
- Название столбца должно быть уникальным в пределах одного Прайс-листа
- Опциональное значение percentageDiscount должно быть числом.

#### Ячейки
Поле **cells** - массив, содержащий в себе объекты со следующими атрибутами:

| Название   | Тип         | Описание                                                                                                      |
| ---------- | :---------- | :------------------------------------------------------------------------------------------------------------ |
| **column** | String(255) | Название столбца, к которому относится данная ячейка<br>`+Обязательное при ответе` `+Необходимо при создании` |
| **sum**    | Int         | Числовое значение ячейки<br>`+Обязательное при ответе` `+Необходимо при создании`                             |

При создании если значения ячеек позиций Прайс-листа были не указаны, то заполнятся значениями по умолчанию те ячейки,
столбцы которых имеют значение скидки(наценки) по умолчанию. Элементы массива cells соотносятся с колонками по названию
по значению поля column.

О работе с доп. полями Прайс-листов можно прочитать [здесь](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)


### Получить список Прайс-листов 
Запрос всех Прайс-листов на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                |
| ----------- | :-------------------------------------------------------- | :------------------------------------------------------ |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                    |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.            |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Прайс-листы. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |

> Получить список Прайс-листов

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/pricelist"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Прайс-листов.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/context/employee",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata",
    "type": "pricelist",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/312cc207-afe9-11e6-8af5-581e0000002c",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata",
        "type": "pricelist",
        "mediaType": "application/json"
      },
      "id": "312cc207-afe9-11e6-8af5-581e0000002c",
      "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
      "owner": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/9575ba6d-9609-11e6-8af5-581e000000ad",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/956169fa-9609-11e6-8af5-581e00000009",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-21 15:51:16",
      "name": "Прайс-лист от 21.21.2016 (5)",
      "description": "test",
      "externalCode": "m-9OZzfBiAjolWhnBjTff0",
      "moment": "2016-11-21 15:51:16",
      "applicable": true,
      "printed": true,
      "published": true,
      "organization": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/95920812-9609-11e6-8af5-581e000000d4",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "positions": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/312cc207-afe9-11e6-8af5-581e0000002c/positions",
          "type": "pricelistrow",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "priceType": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
        "name": "Цена продажи",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
      },
      "columns": [
        {
          "name": "a"
        },
        {
          "name": "b",
          "percentageDiscount": 1000
        }
      ]
    }
  ]
}
```

### Создать Прайс-лист
Запрос на создание нового Прайс-листа.
Обязательные для создания поля:

+ **columns** - Массив объектов, описывающих столбцы нового прайс-листа

Примечание: если при создании Прайс-листа указать несуществующий тип цен, то Прайс-лист создастся с типом цен продаж по умолчанию.

> Пример создания нового Прайс-листа с телом запроса, содержащим только необходимые поля.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/pricelist"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "columns": [
              {
                "name": "column without discount"
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Прайс-листа.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/7370448e-afe9-11e6-8af5-581e00000036",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata",
    "type": "pricelist",
    "mediaType": "application/json"
  },
  "id": "7370448e-afe9-11e6-8af5-581e00000036",
  "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/9575ba6d-9609-11e6-8af5-581e000000ad",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/956169fa-9609-11e6-8af5-581e00000009",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-21 15:53:07",
  "name": "Прайс-лист от 21.21.2016 (6)",
  "externalCode": "dj7x7PvbhjeR8u3eiVAFo3",
  "moment": "2016-11-21 15:53:08",
  "applicable": true,
  "organization": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/95920812-9609-11e6-8af5-581e000000d4",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/7370448e-afe9-11e6-8af5-581e00000036/positions",
      "type": "pricelistrow",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "columns": [
    {
      "name": "column without discount"
    }
  ]
}
```

> Пример создания нового Прайс-листа с более насыщенным телом запроса.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/pricelist"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "shared": true,
            "name": "Новый прайс-лист",
            "description": "test",
            "externalCode": "m-9OZzfBiAjolWhnBjTff0",
            "moment": "2016-11-21 15:51:16",
            "applicable": true,
            "organization": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/95920812-9609-11e6-8af5-581e000000d4",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "positions": {
              "rows": [
                {
                  "assortment": {
                    "meta": {
                      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/987148b8-9a09-11e6-8af5-581e0000006f",
                      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  },
                  "cells": [
                    {
                      "column": "without_discount",
                      "sum": 90000
                    }
                  ]
                },
                {
                  "assortment": {
                    "meta": {
                      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/987148b8-9a09-11e6-8af5-581e0000006f",
                      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  },
                  "cells": [
                    {
                      "column": "with_discount",
                      "sum": 1000
                    },
                    {
                      "column": "without_discount",
                      "sum": 1000
                    }
                  ]
                }
              ]
            },
            "priceType": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
                "type": "pricetype",
                "mediaType": "application/json"
              },
              "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
              "name": "Цена продажи",
              "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
            },
            "columns": [
              {
                "name": "without_discount"
              },
              {
                "name": "with_discount",
                "percentageDiscount": 1000
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Прайс-листа.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/c41abcd9-afea-11e6-8af5-581e0000003c",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata",
    "type": "pricelist",
    "mediaType": "application/json"
  },
  "id": "c41abcd9-afea-11e6-8af5-581e0000003c",
  "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/9575ba6d-9609-11e6-8af5-581e000000ad",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/956169fa-9609-11e6-8af5-581e00000009",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-21 16:02:32",
  "name": "Новый прайс-лист",
  "description": "test",
  "externalCode": "m-9OZzfBiAjolWhnBjTff0",
  "moment": "2016-11-21 15:51:16",
  "applicable": true,
  "organization": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/95920812-9609-11e6-8af5-581e000000d4",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/c41abcd9-afea-11e6-8af5-581e0000003c/positions",
      "type": "pricelistrow",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "priceType": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
      "type": "pricetype",
      "mediaType": "application/json"
    },
    "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
    "name": "Цена продажи",
    "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
  },
  "columns": [
    {
      "name": "without_discount"
    },
    {
      "name": "with_discount",
      "percentageDiscount": 1000
    }
  ]
}
```

> Пример запроса на создание Прайс-листа с доп. полями.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/pricelist"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "applicable": true,
            "organization": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/95920812-9609-11e6-8af5-581e000000d4",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "attributes": [
              {
                "meta": {
                  "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata/attributes/666f86f9-afec-11e6-8af5-581e00000087",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "значение"
              },
              {
                "meta": {
                  "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata/attributes/666ffdb9-afec-11e6-8af5-581e00000088",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": 1
              }
            ],
            "columns": [
              {
                "name": "стандартная колонка"
              }
            ]
          }
'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Прайс-листа.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/a6d8eee9-afee-11e6-8af5-581e00000049",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata",
    "type": "pricelist",
    "mediaType": "application/json"
  },
  "id": "a6d8eee9-afee-11e6-8af5-581e00000049",
  "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/9575ba6d-9609-11e6-8af5-581e000000ad",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/956169fa-9609-11e6-8af5-581e00000009",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-21 16:30:21",
  "name": "Прайс-лист от 21.21.2016 (7)",
  "externalCode": "dfeEd7Hvgx4bj4R8LItpZ0",
  "moment": "2016-11-21 16:30:21",
  "applicable": true,
  "organization": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/95920812-9609-11e6-8af5-581e000000d4",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata/attributes/666f86f9-afec-11e6-8af5-581e00000087",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "666f86f9-afec-11e6-8af5-581e00000087",
      "name": "AttributeName1",
      "type": "string",
      "value": "значение"
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata/attributes/666ffdb9-afec-11e6-8af5-581e00000088",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "666ffdb9-afec-11e6-8af5-581e00000088",
      "name": "AttributeName2",
      "type": "long",
      "value": 1
    }
  ],
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/a6d8eee9-afee-11e6-8af5-581e00000049/positions",
      "type": "pricelistrow",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "columns": [
    {
      "name": "стандартная колонка"
    }
  ]
}
```

> Пример запроса на создание Прайс-листа с позициями в теле запроса.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/pricelist"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "organization": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/95920812-9609-11e6-8af5-581e000000d4",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "positions": {
              "rows": [
                {
                  "assortment": {
                    "meta": {
                      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/987148b8-9a09-11e6-8af5-581e0000006f",
                      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  },
                  "cells": [
                    {
                      "column": "обычная колонка",
                      "sum": 10000
                    }
                  ]
                }
              ]
            },
            "columns": [
              {
                "name": "обычная колонка"
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Прайс-листа.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/d983f7fc-afef-11e6-8af5-581e00000050",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata",
    "type": "pricelist",
    "mediaType": "application/json"
  },
  "id": "d983f7fc-afef-11e6-8af5-581e00000050",
  "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/9575ba6d-9609-11e6-8af5-581e000000ad",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/956169fa-9609-11e6-8af5-581e00000009",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-21 16:38:56",
  "name": "Прайс-лист от 21.21.2016 (8)",
  "externalCode": "rZNA7Lf3hWJwwpGy5HMoN1",
  "moment": "2016-11-21 16:38:56",
  "applicable": true,
  "organization": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/95920812-9609-11e6-8af5-581e000000d4",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/d983f7fc-afef-11e6-8af5-581e00000050/positions",
      "type": "pricelistrow",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "columns": [
    {
      "name": "обычная колонка"
    }
  ]
}
```

### Массовое создание и обновление Прайс-листов 
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Прайс-листов.
В теле запроса нужно передать массив, содержащий JSON представления Прайс-листов, которые вы хотите создать или обновить.
Обновляемые Прайс-листы должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Прайс-листов

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/pricelist"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "columns": [
                {
                  "name": "column without discount"
                }
              ]
            },
            {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/312cc207-afe9-11e6-8af5-581e0000002c",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata",
                "type": "pricelist",
                "mediaType": "application/json"
              },
              "shared": true,
              "name": "Новое название",
              "description": "Новое описание",
              "moment": "2016-11-21 15:51:16",
              "applicable": false,
              "organization": {
                "meta": {
                  "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/95920812-9609-11e6-8af5-581e000000d4",
                  "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              }
            }
          ]
'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Прайс-листов.

```json
[
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/7370448e-afe9-11e6-8af5-581e00000036",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata",
      "type": "pricelist",
      "mediaType": "application/json"
    },
    "id": "7370448e-afe9-11e6-8af5-581e00000036",
    "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
    "owner": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/9575ba6d-9609-11e6-8af5-581e000000ad",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/956169fa-9609-11e6-8af5-581e00000009",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-11-21 15:53:07",
    "name": "Прайс-лист от 21.21.2016 (6)",
    "externalCode": "dj7x7PvbhjeR8u3eiVAFo3",
    "moment": "2016-11-21 15:53:08",
    "applicable": true,
    "organization": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/95920812-9609-11e6-8af5-581e000000d4",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "created": "2007-02-07 17:16:41",
    "printed": true,
    "published": true,
    "positions": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/7370448e-afe9-11e6-8af5-581e00000036/positions",
        "type": "pricelistrow",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    },
    "columns": [
      {
        "name": "column without discount"
      }
    ]
  },
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/312cc207-afe9-11e6-8af5-581e0000002c",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata",
      "type": "pricelist",
      "mediaType": "application/json"
    },
    "id": "312cc207-afe9-11e6-8af5-581e0000002c",
    "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
    "owner": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/9575ba6d-9609-11e6-8af5-581e000000ad",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/956169fa-9609-11e6-8af5-581e00000009",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-11-21 16:21:07",
    "name": "Новое название",
    "description": "Новое описание",
    "externalCode": "m-9OZzfBiAjolWhnBjTff0",
    "moment": "2016-11-21 15:51:16",
    "applicable": false,
    "organization": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/95920812-9609-11e6-8af5-581e000000d4",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "created": "2007-02-07 17:16:41",
    "printed": true,
    "published": true,
    "positions": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/312cc207-afe9-11e6-8af5-581e0000002c/positions",
        "type": "pricelistrow",
        "mediaType": "application/json",
        "size": 2,
        "limit": 1000,
        "offset": 0
      }
    },
    "priceType": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
        "type": "pricetype",
        "mediaType": "application/json"
      },
      "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
      "name": "Цена продажи",
      "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
    },
    "columns": [
      {
        "name": "a"
      },
      {
        "name": "b",
        "percentageDiscount": 1000
      }
    ]
  }
]
```

### Удалить Прайс-лист

**Параметры**

| Параметр | Описание                                                                            |
| :------- | :---------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Прайс-листа. |

> Запрос на удаление Прайс-листа с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/pricelist/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Прайс-листа.

### Массовое удаление Прайс-листов

В теле запроса нужно передать массив, содержащий JSON метаданных Прайс-листов, которые вы хотите удалить.


> Запрос на массовое удаление Прайс-листов. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/pricelist/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/pricelist/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata",
            "type": "pricelist",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/pricelist/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata",
            "type": "pricelist",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Прайс-листов.

```json
[
  {
    "info":"Сущность 'pricelist' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'pricelist' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
``` 

### Метаданные Прайс-листов 
#### Метаданные Прайс-листов 
Запрос на получение метаданных Прайс-листов. Результат - объект JSON, включающий в себя:

| Параметр                       | Описание                                                                                                        |
| ------------------------------ | :-------------------------------------------------------------------------------------------------------------- |
| **meta**                       | Ссылка на метаданные Прайс-листов                                                                               |
| **attributes**                 | Массив объектов доп. полей Прайс-листов формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **states**                     | Массив статусов Прайс-листов                                                                                    |
| **createShared**               | создавать новые Прайс-листы с меткой "Общий"                                                                    |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Прайс-листов

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Прайс-листов.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata/attributes/666f86f9-afec-11e6-8af5-581e00000087",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "666f86f9-afec-11e6-8af5-581e00000087",
      "name": "AttributeName1",
      "type": "string",
      "required": false
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata/attributes/666ffdb9-afec-11e6-8af5-581e00000088",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "666ffdb9-afec-11e6-8af5-581e00000088",
      "name": "AttributeName2",
      "type": "long",
      "required": false
    }
  ],
  "createShared": false
}
```

### Отдельное доп. поле

**Параметры**

| Параметр | Описание                                                                 |
| :------- | :----------------------------------------------------------------------- |
| **id**   | `666f86f9-afec-11e6-8af5-581e00000087` (required, string) - id Доп. поля |
 
#### Отдельное доп. поле 
> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata/attributes/666f86f9-afec-11e6-8af5-581e00000087"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata/attributes/666f86f9-afec-11e6-8af5-581e00000087",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "666f86f9-afec-11e6-8af5-581e00000087",
  "name": "AttributeName1",
  "type": "string",
  "required": false
}
```

### Прайс-лист

### Получить Прайс-лист

**Параметры**

| Параметр | Описание                                                                            |
| :------- | :---------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Прайс-листа. |
 
> Запрос на получение отдельного Прайс-листа с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/pricelist/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Прайс-листа.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/312cc207-afe9-11e6-8af5-581e0000002c",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata",
    "type": "pricelist",
    "mediaType": "application/json"
  },
  "id": "312cc207-afe9-11e6-8af5-581e0000002c",
  "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/9575ba6d-9609-11e6-8af5-581e000000ad",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/956169fa-9609-11e6-8af5-581e00000009",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-21 15:51:16",
  "name": "Прайс-лист от 21.21.2016 (5)",
  "description": "test",
  "externalCode": "m-9OZzfBiAjolWhnBjTff0",
  "moment": "2016-11-21 15:51:16",
  "applicable": true,
  "printed": true,
  "published": true,
  "organization": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/95920812-9609-11e6-8af5-581e000000d4",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "positions": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/312cc207-afe9-11e6-8af5-581e0000002c/positions",
      "type": "pricelistrow",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "priceType": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
      "type": "pricetype",
      "mediaType": "application/json"
    },
    "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
    "name": "Цена продажи",
    "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
  },
  "columns": [
    {
      "name": "a"
    },
    {
      "name": "b",
      "percentageDiscount": 1000
    }
  ]
}
```

### Изменить Прайс-лист 
Запрос на обновление Прайс-листа с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Прайс-листа, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Прайс-листа](../documents/#dokumenty-prajs-list).

**Параметры**

| Параметр | Описание                                                                            |
| :------- | :---------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Прайс-листа. |

> Пример запроса на обновление отдельного Прайс-листа.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/pricelist/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "shared": true,
            "name": "Новое название",
            "description": "Новое описание",
            "moment": "2016-11-21 15:51:16",
            "applicable": false,
            "organization": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/95920812-9609-11e6-8af5-581e000000d4",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Прайс-листа.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/312cc207-afe9-11e6-8af5-581e0000002c",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata",
    "type": "pricelist",
    "mediaType": "application/json"
  },
  "id": "312cc207-afe9-11e6-8af5-581e0000002c",
  "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/9575ba6d-9609-11e6-8af5-581e000000ad",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/956169fa-9609-11e6-8af5-581e00000009",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-21 16:21:07",
  "name": "Новое название",
  "description": "Новое описание",
  "externalCode": "m-9OZzfBiAjolWhnBjTff0",
  "moment": "2016-11-21 15:51:16",
  "applicable": false,
  "organization": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/95920812-9609-11e6-8af5-581e000000d4",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/312cc207-afe9-11e6-8af5-581e0000002c/positions",
      "type": "pricelistrow",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "priceType": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
      "type": "pricetype",
      "mediaType": "application/json"
    },
    "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
    "name": "Цена продажи",
    "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
  },
  "columns": [
    {
      "name": "a"
    },
    {
      "name": "b",
      "percentageDiscount": 1000
    }
  ]
}
```

> Пример запроса на изменение Прайс-листа с дополнительными полями.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/pricelist/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "meta": {
              "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/28bd7720-afee-11e6-8af5-581e00000093",
              "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata",
              "type": "pricelist",
              "mediaType": "application/json"
            },
            "id": "28bd7720-afee-11e6-8af5-581e00000093",
            "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
            "owner": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/9575ba6d-9609-11e6-8af5-581e000000ad",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "type": "employee",
                "mediaType": "application/json"
              }
            },
            "shared": false,
            "applicable": true,
            "organization": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/95920812-9609-11e6-8af5-581e000000d4",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "attributes": [
              {
                "meta": {
                  "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata/attributes/666f86f9-afec-11e6-8af5-581e00000087",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "новое значение"
              },
              {
                "meta": {
                  "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata/attributes/666ffdb9-afec-11e6-8af5-581e00000088",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": 2
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Прайс-листа.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/28bd7720-afee-11e6-8af5-581e00000093",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata",
    "type": "pricelist",
    "mediaType": "application/json"
  },
  "id": "28bd7720-afee-11e6-8af5-581e00000093",
  "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/9575ba6d-9609-11e6-8af5-581e000000ad",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/956169fa-9609-11e6-8af5-581e00000009",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-21 16:27:07",
  "name": "Прайс-лист от 21.21.2016 (5)",
  "externalCode": "w08cWHC6jzNZr7i7ZwTN63",
  "moment": "2016-11-21 16:26:00",
  "applicable": true,
  "organization": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/95920812-9609-11e6-8af5-581e000000d4",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata/attributes/666f86f9-afec-11e6-8af5-581e00000087",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "666f86f9-afec-11e6-8af5-581e00000087",
      "name": "AttributeName1",
      "type": "string",
      "value": "новое значение"
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata/attributes/666ffdb9-afec-11e6-8af5-581e00000088",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "666ffdb9-afec-11e6-8af5-581e00000088",
      "name": "AttributeName2",
      "type": "long",
      "value": 2
    }
  ],
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/28bd7720-afee-11e6-8af5-581e00000093/positions",
      "type": "pricelistrow",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "columns": [
    {
      "name": "стандртная колонка"
    }
  ]
}
```

> Пример запроса на обновление Прайс-листа с позициями в теле запроса.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/pricelist/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "positions": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/28bd7720-afee-11e6-8af5-581e00000093/positions",
                "type": "pricelistrow",
                "mediaType": "application/json",
                "size": 1,
                "limit": 1000,
                "offset": 0
              },
              "rows": [
                {
                  "meta": {
                    "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/28bd7720-afee-11e6-8af5-581e00000093/positions/33026e32-afee-11e6-8af5-581e0000009a",
                    "type": "pricelistrow",
                    "mediaType": "application/json"
                  },
                  "id": "33026e32-afee-11e6-8af5-581e0000009a",
                  "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
                  "assortment": {
                    "meta": {
                      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/987148b8-9a09-11e6-8af5-581e0000006f",
                      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  },
                  "cells": []
                },
                {
                  "meta": {
                    "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/28bd7720-afee-11e6-8af5-581e00000093/positions/001d16d0-affe-11e6-8af5-581e0000000f",
                    "type": "pricelistrow",
                    "mediaType": "application/json"
                  },
                  "id": "001d16d0-affe-11e6-8af5-581e0000000f",
                  "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
                  "assortment": {
                    "meta": {
                      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/987148b8-9a09-11e6-8af5-581e0000006f",
                      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  },
                  "cells": [
                    {
                      "column": "стандртная колонка",
                      "sum": 100000
                    }
                  ]
                }
              ]
            },
            "columns": [
              {
                "name": "стандртная колонка"
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Прайс-листа.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/28bd7720-afee-11e6-8af5-581e00000093?expand=positions",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata",
    "type": "pricelist",
    "mediaType": "application/json"
  },
  "id": "28bd7720-afee-11e6-8af5-581e00000093",
  "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/9575ba6d-9609-11e6-8af5-581e000000ad",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/956169fa-9609-11e6-8af5-581e00000009",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-21 18:00:28",
  "name": "123123",
  "externalCode": "w08cWHC6jzNZr7i7ZwTN63",
  "moment": "2016-11-21 16:26:00",
  "applicable": true,
  "organization": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/95920812-9609-11e6-8af5-581e000000d4",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata/attributes/666f86f9-afec-11e6-8af5-581e00000087",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "666f86f9-afec-11e6-8af5-581e00000087",
      "name": "AttributeName1",
      "type": "string",
      "value": "новое значение"
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/metadata/attributes/666ffdb9-afec-11e6-8af5-581e00000088",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "666ffdb9-afec-11e6-8af5-581e00000088",
      "name": "AttributeName2",
      "type": "long",
      "value": 2
    }
  ],
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/28bd7720-afee-11e6-8af5-581e00000093/positions",
      "type": "pricelistrow",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    },
    "rows": [
      {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/28bd7720-afee-11e6-8af5-581e00000093/positions/33026e32-afee-11e6-8af5-581e0000009a",
          "type": "pricelistrow",
          "mediaType": "application/json"
        },
        "id": "33026e32-afee-11e6-8af5-581e0000009a",
        "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
        "assortment": {
          "meta": {
            "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/987148b8-9a09-11e6-8af5-581e0000006f",
            "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
          }
        },
        "cells": []
      },
      {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/28bd7720-afee-11e6-8af5-581e00000093/positions/001d16d0-affe-11e6-8af5-581e0000000f",
          "type": "pricelistrow",
          "mediaType": "application/json"
        },
        "id": "001d16d0-affe-11e6-8af5-581e0000000f",
        "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
        "assortment": {
          "meta": {
            "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/987148b8-9a09-11e6-8af5-581e0000006f",
            "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
          }
        },
        "cells": [
          {
            "column": "стандртная колонка",
            "sum": 100000
          }
        ]
      }
    ]
  },
  "columns": [
    {
      "name": "стандртная колонка"
    }
  ]
}

```

### Позиции Прайс-листа 
Отдельный ресурс для управления позициями Прайс-листа. С его помощью вы можете управлять позициями большого документа, количество строк в котором превышает лимит на количество строк, сохраняемых вместе с документом. Этот лимит равен 1000. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](../#mojsklad-json-api-obschie-swedeniq-rabota-s-poziciqmi-dokumentow).

### Получить позиции Прайс-листа 
Запрос на получение списка всех позиций данного Прайс-листа.

| Название    | Тип                                                       | Описание                                                        |
| ----------- | :-------------------------------------------------------- | :-------------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                            |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                    |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой позиции Прайс-листа. |

**Параметры**

| Параметр   | Описание                                                                                                                               |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Прайс-листа.                                                    |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить позиции Прайс-листа

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/pricelist/7944ef04-f831-11e5-7a69-971500188b19/positions"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций отдельного Прайс-листа.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/context/employee",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/7944ef04-f831-11e5-7a69-971500188b19/positions",
    "type": "pricelistrow",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/7944ef04-f831-11e5-7a69-971500188b19/positions/33026e32-afee-11e6-8af5-581e0000009a",
        "type": "pricelistrow",
        "mediaType": "application/json"
      },
      "id": "33026e32-afee-11e6-8af5-581e0000009a",
      "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
      "assortment": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/987148b8-9a09-11e6-8af5-581e0000006f",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
        }
      },
      "cells": [
        {
          "column": "стандртная колонка",
          "sum": 100000
        }
      ]
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/7944ef04-f831-11e5-7a69-971500188b19/positions/001d16d0-affe-11e6-8af5-581e0000000f",
        "type": "pricelistrow",
        "mediaType": "application/json"
      },
      "id": "001d16d0-affe-11e6-8af5-581e0000000f",
      "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
      "assortment": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/987148b8-9a09-11e6-8af5-581e0000006f",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
        }
      },
      "cells": [
        {
          "column": "стандртная колонка",
          "sum": 200000
        }
      ]
    }
  ]
}
```

### Создать позицию Прайс-листа 
Запрос на создание новой позиции в Прайс-листе.
Для успешного создания необходимо в теле запроса указать следующие поля:

+ **assortment** - Ссылка на товар/услугу/модификацию, которую представляет собой позиция.
+ **cells** - Массив ячеек цен для новой позиции. Может быть не указан, в таком случае создадутся те ячейки, у которых есть процентная наценка по умолчанию.

**Параметры**

| Параметр | Описание                                                                            |
| :------- | :---------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Прайс-листа. |

> Пример создания одной позиции в Прайс-листе.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/pricelist/7944ef04-f831-11e5-7a69-971500188b19/positions"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "assortment": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/987148b8-9a09-11e6-8af5-581e0000006f",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                "type": "product",
                "mediaType": "application/json"
              }
            },
            "cells": [
              {
                "column": "123",
                "sum": 100000
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной позиции отдельного Прайс-листа.

```json
[
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/7944ef04-f831-11e5-7a69-971500188b19/positions/eb3e4026-b001-11e6-8af5-581e00000000",
      "type": "pricelistrow",
      "mediaType": "application/json"
    },
    "id": "eb3e4026-b001-11e6-8af5-581e00000000",
    "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
    "assortment": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/987148b8-9a09-11e6-8af5-581e0000006f",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
      }
    },
    "cells": [
      {
        "column": "123",
        "sum": 100000
      }
    ]
  }
]
```

> Пример создания сразу нескольких позиций в Прайс-листе.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/pricelist/7944ef04-f831-11e5-7a69-971500188b19/positions"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "assortment": {
                "meta": {
                  "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/987148b8-9a09-11e6-8af5-581e0000006f",
                  "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "cells": [
                {
                  "column": "123",
                  "sum": 100000
                }
              ]
            },
            {
              "assortment": {
                "meta": {
                  "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/987148b8-9a09-11e6-8af5-581e0000006f",
                  "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "cells": [
                {
                  "column": "123",
                  "sum": 100000
                }
              ]
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка созданных позиций отдельного Прайс-листа.

```json
[
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/7944ef04-f831-11e5-7a69-971500188b19/positions/7756e86b-b005-11e6-8af5-581e0000000e",
      "type": "pricelistrow",
      "mediaType": "application/json"
    },
    "id": "7756e86b-b005-11e6-8af5-581e0000000e",
    "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
    "assortment": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/987148b8-9a09-11e6-8af5-581e0000006f",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
      }
    },
    "cells": [
      {
        "column": "123",
        "sum": 100000
      }
    ]
  },
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/7944ef04-f831-11e5-7a69-971500188b19/positions/7756fee5-b005-11e6-8af5-581e00000010",
      "type": "pricelistrow",
      "mediaType": "application/json"
    },
    "id": "7756fee5-b005-11e6-8af5-581e00000010",
    "accountId": "9560e3e3-9609-11e6-8af5-581e00000008",
    "assortment": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/987148b8-9a09-11e6-8af5-581e0000006f",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
      }
    },
    "cells": [
      {
        "column": "123",
        "sum": 100000
      }
    ]
  }
]
```

### Позиция Прайс-листа

### Получить позицию

**Параметры**

| Параметр       | Описание                                                                                    |
| :------------- | :------------------------------------------------------------------------------------------ |
| **id**         | `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Прайс-листа.         |
| **positionID** | `string` (required) *Example: 9560e3e3-9609-11e6-8af5-581e00000008* id позиции Прайс-листа. |
 
> Запрос на получение отдельной позиции Прайс-листа с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/pricelist/d72b4281-b000-11e6-8af5-581e00000074/positions/9560e3e3-9609-11e6-8af5-581e00000008"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции Прайс-листа.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/d72b4281-b000-11e6-8af5-581e00000074/positions/9560e3e3-9609-11e6-8af5-581e00000008",
    "type": "pricelistrow",
    "mediaType": "application/json"
  },
  "id": "9560e3e3-9609-11e6-8af5-581e00000008",
  "accountId": "9560e3e3-9609-11e6-8af5-581e00000007",
  "assortment": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/987148b8-9a09-11e6-8af5-581e0000006f",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
    }
  },
  "cells": [
    {
      "column": "123",
      "sum": 100000
    }
  ]
}

```

### Изменить позицию 
Запрос на обновление отдельной позиции Прайс-листа. Для обновления позиции нет каких-либо
обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

| Параметр       | Описание                                                                                    |
| :------------- | :------------------------------------------------------------------------------------------ |
| **id**         | `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Прайс-листа.         |
| **positionID** | `string` (required) *Example: 9560e3e3-9609-11e6-8af5-581e00000008* id позиции Прайс-листа. |

> Пример запроса на обновление отдельной позиции в Прайс-листе.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/pricelist/d72b4281-b000-11e6-8af5-581e00000074/positions/9560e3e3-9609-11e6-8af5-581e00000008"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "cells": [
              {
                "column": "123",
                "sum": 100002
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции Прайс-листа.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/pricelist/d72b4281-b000-11e6-8af5-581e00000074/positions/9560e3e3-9609-11e6-8af5-581e00000008",
    "type": "pricelistrow",
    "mediaType": "application/json"
  },
  "id": "9560e3e3-9609-11e6-8af5-581e00000008",
  "accountId": "9560e3e3-9609-11e6-8af5-581e00000007",
  "assortment": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/987148b8-9a09-11e6-8af5-581e0000006f",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
    }
  },
  "cells": [
    {
      "column": "123",
      "sum": 100002
    }
  ]
}
```

### Удалить Позицию

**Параметры**

| Параметр       | Описание                                                                                    |
| :------------- | :------------------------------------------------------------------------------------------ |
| **id**         | `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Прайс-листа.         |
| **positionID** | `string` (required) *Example: 9560e3e3-9609-11e6-8af5-581e00000008* id позиции Прайс-листа. |
 
> Запрос на удаление позиции Прайс-листа с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/pricelist/d72b4281-b000-11e6-8af5-581e00000074/positions/9560e3e3-9609-11e6-8af5-581e00000008"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление позиции Прайс-листа.
