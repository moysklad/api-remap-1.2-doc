## Оприходование
Средствами JSON API можно создавать и обновлять сведения об Оприходованиях, запрашивать списки Оприходований и сведения по отдельным Оприходованиям. Позициями Оприходований можно управлять как в составе отдельного Оприходования, так и отдельно - с помощью специальных ресурсов для управления позициями Оприходования. Кодом сущности для Оприходования в составе JSON API является ключевое слово **enter**. Больше об Оприходованиях можно прочитать [этой ссылке](https://support.moysklad.ru/hc/ru/articles/360009148137-%D0%9E%D0%BF%D1%80%D0%B8%D1%85%D0%BE%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2).

### Оприходования 
#### Атрибуты сущности

| Название         | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                                                                               |
|------------------|:----------------------------------------------------------| :------------------------------------------------------------------------------------------------------------------------------------------------ |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**    | UUID                                                      | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения` `+Change-handler`                                                                                                 |
| **applicable**   | Boolean                                                   | `=` `!=`                                                                                                                                          | Отметка о проведении<br>`+Обязательное при ответе` `+Change-handler` `+Update-provider`                                                                                                                    |
| **attributes**   | Array(Object)                                             | [Операторы доп. полей](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-fil-traciq-po-dopolnitel-nym-polqm) | Коллекция метаданных доп. полей. [Поля объекта](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi) <br>  `+Change-handler` `+Update-provider`                                         |
| **code**         | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Код Оприходования                                                                                                                                                                      |
| **created**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата создания<br>`+Обязательное при ответе` `+Только для чтения`  `+Change-handler`                                                                                                    |
| **deleted**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего удаления Оприходования<br>`+Только для чтения`                                                                                                                       |
| **description**  | String(4096)                                              | `=` `!=` `~` `~=` `=~`                                                                                                                            | Комментарий Оприходования <br> `+Change-handler` `+Update-provider`                                                                                                                                        |
| **externalCode** | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код Оприходования<br>`+Обязательное при ответе`  `+Change-handler`                                                                                                             |
| **files**        | MetaArray                                                 |                                                                                                                                                   | Метаданные массива [Файлов](../dictionaries/#suschnosti-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand`                                          |
| **group**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                                                               |
| **id**           | UUID                                                      | `=` `!=`                                                                                                                                          | ID Оприходования<br>`+Обязательное при ответе` `+Только для чтения`  `+Change-handler`                                                                                                 |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные Оприходования<br>`+Обязательное при ответе`  `+Change-handler`                                                                                                              |
| **moment**       | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата документа<br>`+Обязательное при ответе`  `+Change-handler` `+Update-provider`                                                                                                                         |
| **name**         | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Номер Оприходования<br>`+Обязательное при ответе`  `+Change-handler` `+Update-provider`                                                                                                                    |
| **organization** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`  `+Change-handler` `+Update-provider`                                                                                 |
| **overhead**     | Object                                                    |                                                                                                                                                   | Накладные расходы. [Подробнее тут](../dictionaries/#dokumenty-oprihodowanie-oprihodowaniq-nakladnye-rashody). Если Позиции Оприходования не заданы, то накладные расходы нельзя задать<br>`+Update-provider` |
| **owner**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Обязательное при ответе` `+Expand`                                                                                                                           |
| **positions**    | MetaArray                                                 |                                                                                                                                                   | Метаданные позиций Оприходования<br>`+Обязательное при ответе` `+Expand`  `+Change-handler` `+Update-provider`                                                                                             |
| **printed**      | Boolean                                                   | `=` `!=`                                                                                                                                          | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                               |
| **project**      | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные проекта<br>`+Expand`  `+Change-handler` `+Update-provider`                                                                                                                                      |
| **published**    | Boolean                                                   | `=` `!=`                                                                                                                                          | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                             |
| **rate**         | Object                                                    |                                                                                                                                                   | Валюта. [Подробнее тут](../documents/#dokumenty-teh-operaciq-valuta-w-dokumentah)<br>`+Обязательное при ответе`  `+Change-handler` `+Update-provider`                                                      |
| **shared**       | Boolean                                                   | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе`                                                                                                                                             |
| **state**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные статуса оприходования<br>`+Expand`  `+Change-handler` `+Update-provider`                                                                                                                        |
| **store**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные склада<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`  `+Change-handler` `+Update-provider`                                                                                 |
| **sum**          | Int                                                       | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Сумма Оприходования в копейках<br>`+Обязательное при ответе` `+Только для чтения`  `+Change-handler`                                                                                   |
| **syncId**       | UUID                                                      | `=` `!=`                                                                                                                                          | ID синхронизации. После заполнения недоступен для изменения                                                                                                                            |
| **updated**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления Оприходования<br>`+Обязательное при ответе` `+Только для чтения`  `+Change-handler`                                                                       |

#### Накладные расходы
Описание полей overhead

| Название         | Тип  | Описание                                                                                                                    |
| ---------------- | :--- | :-------------------------------------------------------------------------------------------------------------------------- |
| **sum**          | Int  | Сумма Оприходования в копейках<br>`+Обязательное при ответе` `+Update-provider`                                                                |
| **distribution** | Enum | Распределение накладных расходов `[weight, volume, price]` -> `[по весу, по объему, по цене]`<br>`+Обязательное при ответе` `+Update-provider` |

#### Позиции Оприходования
Позиции Оприходования - это список товаров/модификаций/серий.
Объект позиции Оприходования содержит следующие поля:

| Название       | Тип                                                       | Описание                                                                                                                                                                                                                                                                                                                                                                       |
|----------------|:----------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**  | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения` `+Change-handler`                                                                                                                                                                                                                                                                                         |
| **assortment** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные товара/услуги/серии/модификации, которую представляет собой позиция<br>`+Обязательное при ответе` `+Expand` `+Change-handler` `+Update-provider`                                                                                                                                                                                                                    |
| **country**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные страны<br>`+Expand`                                                                                                                                                                                                                                                                                                                                                 |
| **gtd**        | Object                                                    | ГТД. [Подробнее тут](../dictionaries/#suschnosti-gruzowaq-tamozhennaq-deklaraciq-gtd)                                                                                                                                                                                                                                                                                          |
| **id**         | UUID                                                      | ID позиции<br>`+Обязательное при ответе` `+Только для чтения` `+Change-handler`                                                                                                                                                                                                                                                                                                |
| **overhead**   | Int                                                       | Накладные расходы. [Подробнее тут](../dictionaries/#dokumenty-oprihodowanie-oprihodowaniq-nakladnye-rashody). Если Позиции Оприходования не заданы, то накладные расходы нельзя задать<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                      |
| **pack**       | Object                                                    | Упаковка Товара. [Подробнее тут](../dictionaries/#suschnosti-towar-towary-atributy-wlozhennyh-suschnostej-upakowki-towara) <br> `+Change-handler` `+Update-provider`                                                                                                                                                                                                           |
| **price**      | Float                                                     | Цена товара/услуги в копейках<br>`+Обязательное при ответе` `+Change-handler` `+Update-provider`                                                                                                                                                                                                                                                                               |
| **quantity**   | Int                                                       | Количество товаров/услуг данного вида в позиции. Если позиция - товар, у которого включен учет по серийным номерам, то значение в этом поле всегда будет равно количеству серийных номеров для данной позиции в документе.<br>`+Обязательное при ответе` `+Change-handler` `+Update-provider`                                                                                  |
| **reason**     | String(255)                                               | Причина оприходования данной позиции                                                                                                                                                                                                                                                                                                                                           |
| **slot**       | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Ячейка на складе. [Подробнее тут](../dictionaries/#suschnosti-sklad-yachejki-sklada)<br>`+Expand` |
| **things**     | Object(String)                                            | Серийные номера. Значение данного атрибута игнорируется, если товар позиции не находится на серийном учете. В ином случае количество товаров в позиции будет равно количеству серийных номеров, переданных в значении атрибута. `+Change-handler`                                                                                                                              |

С позициями можно работать с помощью [специальных ресурсов для управления позициями Оприходования](../documents/#dokumenty-oprihodowanie),
а также в составе отдельного Оприходования. При работе в составе отдельного Оприходования,
вы можете отправлять запросы на создание отдельного Оприходования с включенным в тело запроса
массивом позиций Оприходования. Если количество позиций превышает максимально допустимое, то для
дальнейшего пополнения позиций нужно будет работать со специальным ресурсом "Позиции Оприходования".
Также, при работе в составе отдельного Оприходования, можно отправлять запросы на обновление списка позиций
с включенным в тело запроса массивом позиций Оприходования. При этом важно помнить, что коллекция позиций будет
восприниматься как "все позиции Оприходования" и полностью заменит уже существующую коллекцию при обновлении объекта - лишние
позиции будут удалены, новые добавлены, существующие - изменены.

О работе с доп. полями Оприходований можно прочитать [здесь](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)


### Получать Оприходования 
Запрос всех Оприходований на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                  |
| ----------- | :-------------------------------------------------------- | :-------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                      |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.              |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Оприходования. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |

> Получать Оприходования 

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/enter"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Оприходований.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata",
    "type": "enter",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/2e12d827-5338-11e6-8a84-bae50000008e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata",
        "type": "enter",
        "mediaType": "application/json"
      },
      "id": "2e12d827-5338-11e6-8a84-bae50000008e",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-07-26 16:52:23",
      "name": "00002",
      "externalCode": "xmlPt1lUie1p18VedA1M-3",
      "moment": "2016-07-26 16:51:00",
      "applicable": true,
      "created": "2007-02-07 17:16:41",
      "printed": true,
      "published": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "sum": 26400,
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/2e12d827-5338-11e6-8a84-bae50000008e/positions",
          "type": "enterposition",
          "mediaType": "application/json",
          "size": 5,
          "limit": 1000,
          "offset": 0
        }
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/bf19f3fe-4f28-11e6-8a84-bae50000006d",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata",
        "type": "enter",
        "mediaType": "application/json"
      },
      "id": "bf19f3fe-4f28-11e6-8a84-bae50000006d",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-07-21 12:51:50",
      "name": "00001",
      "externalCode": "9CC4OgVhhJwPTl3289w0q1",
      "moment": "2016-07-21 12:51:00",
      "applicable": true,
      "created": "2007-02-07 17:16:41",
      "printed": true,
      "published": true,
      "sum": 13200,
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/bf19f3fe-4f28-11e6-8a84-bae50000006d/positions",
          "type": "enterposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      }
    }
  ]
}
```

### Создать Оприходования 
Запрос на создание нового Оприходования.
Обязательные для создания поля:

| Название         | Тип                                                       | Описание          |
| ---------------- | :-------------------------------------------------------- | :---------------- |
| **organization** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные юрлица |
| **store**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные склада |

> Пример создания нового Оприходования с телом запроса, содержащим только необходимые поля.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/enter"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "enter100",
            "externalCode": "34981sawfa42kek",
            "moment": "2016-06-21 16:56:52",
            "applicable": true,
            "sum": 51241240,
            "organization": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "store": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/e94a6e65-4f64-11e6-8a84-bae500000066",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "positions": [
              {
                "quantity": 1,
                "price": 13200.0,
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/328b0454-2e62-11e6-8a84-bae500000118",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                },
                "overhead": 0
              },
              {
                "quantity": 1,
                "price": 13200.0,
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/328b0454-2e62-11e6-8a84-bae500000118",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                },
                "reason": "АБЫР",
                "overhead": 0
              },
              {
                "quantity": 3,
                "price": 333444.0,
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a83c422-3c64-11e6-8a84-bae500000012",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                    "type": "variant",
                    "mediaType": "application/json"
                  }
                },
                "reason": "Обновленная причина",
                "overhead": 0
              }
            ],
            "attributes": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata/attributes/6a9150cd-5338-11e6-8a84-bae50000009b",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "AttributeValue1"
              },
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata/attributes/6a9158b2-5338-11e6-8a84-bae50000009c",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": 404
              }
            ],
            "overhead": {
              "sum": 40400,
              "distribution": "weight"
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Оприходования.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/7cfff21a-533b-11e6-8a84-bae50000001f",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata",
    "type": "enter",
    "mediaType": "application/json"
  },
  "id": "7cfff21a-533b-11e6-8a84-bae50000001f",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-07-26 17:16:04",
  "name": "enter100",
  "externalCode": "34981sawfa42kek",
  "moment": "2016-06-21 16:56:52",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 1026732,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/e94a6e65-4f64-11e6-8a84-bae500000066",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata/attributes/6a9150cd-5338-11e6-8a84-bae50000009b",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "6a9150cd-5338-11e6-8a84-bae50000009b",
      "name": "AttributeName1",
      "type": "string",
      "value": "AttributeValue1"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata/attributes/6a9158b2-5338-11e6-8a84-bae50000009c",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "6a9158b2-5338-11e6-8a84-bae50000009c",
      "name": "AttributeName2",
      "type": "long",
      "value": 404
    }
  ],
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/7cfff21a-533b-11e6-8a84-bae50000001f/positions",
      "type": "enterposition",
      "mediaType": "application/json",
      "size": 3,
      "limit": 1000,
      "offset": 0
    }
  },
  "overhead": {
    "sum": 40400,
    "distribution": "weight"
  }
}
```

### Массовое создание и обновление Оприходований 
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Оприходований.
В теле запроса нужно передать массив, содержащий JSON представления Оприходований, которые вы хотите создать или обновить.
Обновляемые Оприходования должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Оприходований

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/enter"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "enter100",
              "externalCode": "34981sawfa42kek",
              "moment": "2016-06-21 16:56:52",
              "applicable": true,
              "sum": 51241240,
              "organization": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "store": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/e94a6e65-4f64-11e6-8a84-bae500000066",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type": "store",
                  "mediaType": "application/json"
                }
              },
              "positions": [
                {
                  "quantity": 1,
                  "price": 13200.0,
                  "assortment": {
                    "meta": {
                      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/328b0454-2e62-11e6-8a84-bae500000118",
                      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  },
                  "overhead": 0
                },
                {
                  "quantity": 1,
                  "price": 13200.0,
                  "assortment": {
                    "meta": {
                      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/328b0454-2e62-11e6-8a84-bae500000118",
                      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  },
                  "reason": "АБЫР",
                  "overhead": 0
                },
                {
                  "quantity": 3,
                  "price": 333444.0,
                  "assortment": {
                    "meta": {
                      "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a83c422-3c64-11e6-8a84-bae500000012",
                      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                      "type": "variant",
                      "mediaType": "application/json"
                    }
                  },
                  "reason": "Обновленная причина",
                  "overhead": 0
                }
              ],
              "attributes": [
                {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata/attributes/6a9150cd-5338-11e6-8a84-bae50000009b",
                    "type": "attributemetadata",
                    "mediaType": "application/json"
                  },
                  "value": "AttributeValue1"
                },
                {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata/attributes/6a9158b2-5338-11e6-8a84-bae50000009c",
                    "type": "attributemetadata",
                    "mediaType": "application/json"
                  },
                  "value": 404
                }
              ],
              "overhead": {
                "sum": 40400,
                "distribution": "weight"
              }
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/7cfff21a-533b-11e6-8a84-bae50000001f",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata",
                "type": "enter",
                "mediaType": "application/json"
              },
              "name": "xX0enter0Xx",
              "externalCode": "21721bddSAKDAbw21eh",
              "moment": "2012-12-21 13:46:22",
              "applicable": false,
              "sum": 333,
              "organization": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "store": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/e94a6e65-4f64-11e6-8a84-bae500000066",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type": "store",
                  "mediaType": "application/json"
                }
              },
              "attributes": [
                {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata/attributes/6a9150cd-5338-11e6-8a84-bae50000009b",
                    "type": "attributemetadata",
                    "mediaType": "application/json"
                  },
                  "value": "AttributeValue2"
                },
                {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata/attributes/6a9158b2-5338-11e6-8a84-bae50000009c",
                    "type": "attributemetadata",
                    "mediaType": "application/json"
                  },
                  "value": 501
                }
              ],
              "positions": [],
              "overhead": {
                "sum": 40400,
                "distribution": "price"
              }
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Оприходований.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/7cfff21a-533b-11e6-8a84-bae50000001f",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata",
      "type": "enter",
      "mediaType": "application/json"
    },
    "id": "7cfff21a-533b-11e6-8a84-bae50000001f",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-07-26 17:16:04",
    "name": "enter100",
    "externalCode": "34981sawfa42kek",
    "moment": "2016-06-21 16:56:52",
    "applicable": true,
    "rate": {
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    },
    "sum": 1026732,
    "organization": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "store": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/e94a6e65-4f64-11e6-8a84-bae500000066",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "attributes": [
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata/attributes/6a9150cd-5338-11e6-8a84-bae50000009b",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "6a9150cd-5338-11e6-8a84-bae50000009b",
        "name": "AttributeName1",
        "type": "string",
        "value": "AttributeValue1"
      },
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata/attributes/6a9158b2-5338-11e6-8a84-bae50000009c",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "6a9158b2-5338-11e6-8a84-bae50000009c",
        "name": "AttributeName2",
        "type": "long",
        "value": 404
      }
    ],
    "created": "2007-02-07 17:16:41",
    "printed": true,
    "published": true,
    "positions": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/7cfff21a-533b-11e6-8a84-bae50000001f/positions",
        "type": "enterposition",
        "mediaType": "application/json",
        "size": 3,
        "limit": 1000,
        "offset": 0
      }
    },
    "overhead": {
      "sum": 40400,
      "distribution": "weight"
    }
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/7cfff21a-533b-11e6-8a84-bae50000001f",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata",
      "type": "enter",
      "mediaType": "application/json"
    },
    "id": "7cfff21a-533b-11e6-8a84-bae50000001f",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-07-26 17:21:18",
    "name": "xX0enter0Xx",
    "externalCode": "21721bddSAKDAbw21eh",
    "moment": "2012-12-21 12:46:22",
    "applicable": false,
    "rate": {
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    },
    "sum": 0,
    "organization": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "store": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/e94a6e65-4f64-11e6-8a84-bae500000066",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "attributes": [
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata/attributes/6a9150cd-5338-11e6-8a84-bae50000009b",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "6a9150cd-5338-11e6-8a84-bae50000009b",
        "name": "AttributeName1",
        "type": "string",
        "value": "AttributeValue2"
      },
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata/attributes/6a9158b2-5338-11e6-8a84-bae50000009c",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "6a9158b2-5338-11e6-8a84-bae50000009c",
        "name": "AttributeName2",
        "type": "long",
        "value": 501
      }
    ],
    "created": "2016-08-25 19:55:00",
    "printed": true,
    "published": true,
    "positions": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/7cfff21a-533b-11e6-8a84-bae50000001f/positions",
        "type": "enterposition",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    }
  }
]
```

### Удалить Оприходование

**Параметры**

| Параметр | Описание                                                                              |
| :------- | :------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Оприходования. |

> Запрос на удаление Оприходования с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/enter/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Оприходования.

### Массовое удаление Оприходований

В теле запроса нужно передать массив, содержащий JSON метаданных Оприходований, которые вы хотите удалить.


> Запрос на массовое удаление Оприходований. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/enter/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata",
            "type": "enter",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata",
            "type": "enter",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Оприходований.

```json
[
  {
    "info":"Сущность 'enter' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'enter' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
``` 

### Метаданные Оприходований 
#### Метаданные Оприходований 
Запрос на получение метаданных Оприходований. Результат - объект JSON, включающий в себя:

| Параметр                       | Описание                                                                                                           |
| ------------------------------ | :----------------------------------------------------------------------------------------------------------------- |
| **meta**                       | Ссылка на метаданные Оприходований                                                                                 |
| **attributes**                 | Массив объектов доп. полей Оприходований в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **states**                     | Массив статусов Оприходований                                                                                      |
| **createShared**               | создавать новых Оприходованияс меткой "Общий"                                                                      |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Оприходований

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление метаданных Оприходований.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata/attributes/6a9150cd-5338-11e6-8a84-bae50000009b",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "6a9150cd-5338-11e6-8a84-bae50000009b",
      "name": "AttributeName1",
      "type": "boolean",
      "required": false
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata/attributes/6a9158b2-5338-11e6-8a84-bae50000009c",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "6a9158b2-5338-11e6-8a84-bae50000009c",
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

| Параметр | Описание                                                                          |
| :------- | :-------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Доп. поля. |
 
#### Отдельное доп. поле
 
> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata/attributes/6a9150cd-5338-11e6-8a84-bae50000009b",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "6a9150cd-5338-11e6-8a84-bae50000009b",
  "name": "AttributeName1",
  "type": "string",
  "required": false
}
```

### Оприходование

### Получить Оприходование

**Параметры**

| Параметр | Описание                                                                              |
| :------- | :------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Оприходования. |
 
> Запрос на получение отдельного оприходования с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/enter/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Оприходования.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/2e12d827-5338-11e6-8a84-bae50000008e",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata",
    "type": "enter",
    "mediaType": "application/json"
  },
  "id": "2e12d827-5338-11e6-8a84-bae50000008e",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-07-26 16:52:23",
  "name": "00002",
  "externalCode": "xmlPt1lUie1p18VedA1M-3",
  "moment": "2016-07-26 16:51:00",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 26400,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/2e12d827-5338-11e6-8a84-bae50000008e/positions",
      "type": "enterposition",
      "mediaType": "application/json",
      "size": 5,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Изменить Оприходование 
Запрос на обновление оприходования с указанным id.

**Параметры**

| Параметр | Описание                                                                              |
| :------- | :------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Оприходования. |

> Пример запроса на обновление отдельного Оприходования.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/enter/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "xX0enter0Xx",
            "externalCode": "21721bddSAKDAbw21eh",
            "moment": "2012-12-21 13:46:22",
            "applicable": false,
            "sum": 333,
            "organization": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "store": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/e94a6e65-4f64-11e6-8a84-bae500000066",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "attributes": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata/attributes/6a9150cd-5338-11e6-8a84-bae50000009b",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "AttributeValue1"
              },
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata/attributes/6a9158b2-5338-11e6-8a84-bae50000009c",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": 501
              }
            ],
            "positions": [],
            "overhead": {
              "sum": 40400,
              "distribution": "price"
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Оприходования.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/7cfff21a-533b-11e6-8a84-bae50000001f",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata",
    "type": "enter",
    "mediaType": "application/json"
  },
  "id": "7cfff21a-533b-11e6-8a84-bae50000001f",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-07-26 17:21:18",
  "name": "xX0enter0Xx",
  "externalCode": "21721bddSAKDAbw21eh",
  "moment": "2012-12-21 12:46:22",
  "applicable": false,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/e94a6e65-4f64-11e6-8a84-bae500000066",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata/attributes/6a9150cd-5338-11e6-8a84-bae50000009b",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "6a9150cd-5338-11e6-8a84-bae50000009b",
      "name": "AttributeName1",
      "type": "string",
      "value": "AttributeValue1"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/metadata/attributes/6a9158b2-5338-11e6-8a84-bae50000009c",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "6a9158b2-5338-11e6-8a84-bae50000009c",
      "name": "AttributeName2",
      "type": "long",
      "value": 501
    }
  ],
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/7cfff21a-533b-11e6-8a84-bae50000001f/positions",
      "type": "enterposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Позиции Оприходований 
Отдельный ресурс для управления позициями Оприходования. С его помощью вы можете управлять позициями большого документа, количество строк в котором превышает лимит на количество строк, сохраняемых вместе с документом. Этот лимит равен 1000. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](../#mojsklad-json-api-obschie-swedeniq-rabota-s-poziciqmi-dokumentow).
  
### Получить позиции Оприходования 
Запрос на получение списка всех позиций данного Оприходования.

| Название    | Тип                                                       | Описание                                                          |
| ----------- | :-------------------------------------------------------- | :---------------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                              |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                      |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой позиции Оприходования. |

**Параметры**

| Параметр   | Описание                                                                                                                               |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Оприходования.                                                  |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить позиции Оприходования

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/enter/7944ef04-f831-11e5-7a69-971500188b19/positions"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций отдельного Оприходования.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/7944ef04-f831-11e5-7a69-971500188b19/positions",
    "type": "enterposition",
    "mediaType": "application/json",
    "size": 5,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/7944ef04-f831-11e5-7a69-971500188b19/positions/2e12e9aa-5338-11e6-8a84-bae50000008f",
        "type": "enterposition",
        "mediaType": "application/json"
      },
      "id": "2e12e9aa-5338-11e6-8a84-bae50000008f",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 1,
      "price": 0.0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/4f785efd-3304-11e6-8a84-bae50001c6c4",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
        }
      },
      "gtd": {
        "name": "12345678/121217/1212321"
      },
      "country": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/40e6f69a-991c-4fbc-8be9-d0d906cad180",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
          "type": "country",
          "mediaType": "application/json"
        }
      },
      "reason": "ЧТо то не так",
      "overhead": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/7944ef04-f831-11e5-7a69-971500188b19/positions/2e12f062-5338-11e6-8a84-bae500000090",
        "type": "enterposition",
        "mediaType": "application/json"
      },
      "id": "2e12f062-5338-11e6-8a84-bae500000090",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 1,
      "price": 0.0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/00de5b31-3303-11e6-8a84-bae500000344",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
        }
      },
      "reason": "НЕОБХОДИМО",
      "overhead": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/7944ef04-f831-11e5-7a69-971500188b19/positions/2e12f5d2-5338-11e6-8a84-bae500000091",
        "type": "enterposition",
        "mediaType": "application/json"
      },
      "id": "2e12f5d2-5338-11e6-8a84-bae500000091",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 1,
      "price": 0.0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/0572d2fc-3303-11e6-8a84-bae500000842",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=392c045c-2842-11e9-ac12-000a00000002"
        }
      },
      "overhead": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/7944ef04-f831-11e5-7a69-971500188b19/positions/2e12fb31-5338-11e6-8a84-bae500000092",
        "type": "enterposition",
        "mediaType": "application/json"
      },
      "id": "2e12fb31-5338-11e6-8a84-bae500000092",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 1,
      "price": 13200.0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/328b0454-2e62-11e6-8a84-bae500000118",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3bb1af6c-2842-11e9-ac12-000c00000061"
        }
      },
      "overhead": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/7944ef04-f831-11e5-7a69-971500188b19/positions/2e1300c8-5338-11e6-8a84-bae500000093",
        "type": "enterposition",
        "mediaType": "application/json"
      },
      "id": "2e1300c8-5338-11e6-8a84-bae500000093",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 1,
      "price": 13200.0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/328b0454-2e62-11e6-8a84-bae500000118",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3bad99f1-2842-11e9-ac12-000c0000005c"
        }
      },
      "gtd": {
        "name": "12345678/121217/1235362"
      },
      "country": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/40e6f69a-991c-4fbc-8be9-d0d906cad180",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
          "type": "country",
          "mediaType": "application/json"
        }
      },
      "reason": "АБЫР",
      "overhead": 0
    }
  ]
}
```

### Создать позицию Оприходования 
Запрос на создание новой позиции в Оприходовании.
Для успешного создания необходимо в теле запроса указать следующие поля:

+ **assortment** - Ссылка на товар/услугу/серию/модификацию, которую представляет собой позиция.
Также можно указать поле с именем **service**, **consignment**, **variant** в соответствии с тем,
чем является указанная позиция. Подробнее об этом поле можно прочитать в описании [позиции Оприходования](../documents/#dokumenty-oprihodowanie-oprihodowaniq-pozicii-oprihodowaniq)
+ **quantity** - Количество указанной позиции. Должно быть положительным, иначе возникнет ошибка.
Одновременно можно создать как одну так и несколько позиций Оприходования. Все созданные данным запросом позиции
будут добавлены к уже существующим.

**Параметры**

| Параметр | Описание                                                                              |
| :------- | :------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Оприходования. |

> Пример создания позиций в Оприходовании.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/enter/7944ef04-f831-11e5-7a69-971500188b19/positions"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "quantity": 103,
              "price": 566230.0,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a83c422-3c64-11e6-8a84-bae500000012",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                  "type": "variant",
                  "mediaType": "application/json"
                }
              },
              "reason": "Срочная нужда",
              "overhead": 305
            },
            {
              "quantity": 13,
              "price": 12560.0,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                  "type": "variant",
                  "mediaType": "application/json"
                }
              },
              "reason": "Необходимый товар",
              "overhead": 50607080
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной позиции отдельного Оприходования.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/7944ef04-f831-11e5-7a69-971500188b19/positions/7ffb0be4-5339-11e6-8a84-bae500000016",
      "type": "enterposition",
      "mediaType": "application/json"
    },
    "id": "7ffb0be4-5339-11e6-8a84-bae500000016",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 103,
    "price": 566230.0,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a83c422-3c64-11e6-8a84-bae500000012",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=3bad99f1-2842-11e9-ac12-000c0000005c"
      }
    },
    "reason": "Срочная нужда",
    "overhead": 0
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/7944ef04-f831-11e5-7a69-971500188b19/positions/7ffb1271-5339-11e6-8a84-bae500000017",
      "type": "enterposition",
      "mediaType": "application/json"
    },
    "id": "7ffb1271-5339-11e6-8a84-bae500000017",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 13,
    "price": 12560.0,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=3bb1af6c-2842-11e9-ac12-000c00000061"
      }
    },
    "reason": "Необходимый товар",
    "overhead": 0
  }
]
```

### Позиция Оприходования
 
### Получить позицию
 
**Параметры**

| Параметр       | Описание                                                                              |
| :------------- | :------------------------------------------------------------------------------------ |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Оприходования. |
| **positionID** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b20* id позиции.       |

> Запрос на получение отдельной позиции Оприходования с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/enter/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции Оприходования.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20",
    "type": "enterposition",
    "mediaType": "application/json"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b20",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "quantity": 1,
  "price": 0.0,
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/00de5b31-3303-11e6-8a84-bae500000344",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3bb1af6c-2842-11e9-ac12-000c00000061"
    }
  },
  "reason": "НЕОБХОДИМО",
  "overhead": 0
}
```

### Изменить позицию 
Запрос на обновление отдельной позиции Оприходования. Для обновления позиции нет каких-либо
 обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.
 
 **Параметры**
 
| Параметр       | Описание                                                                              |
| :------------- | :------------------------------------------------------------------------------------ |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Оприходования. |
| **positionID** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b20* id позиции.       |
 
> Пример запроса на обновление отдельной позиции в Оприходовании.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/enter/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "quantity": 3,
            "price": 333444.0,
            "assortment": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a83c422-3c64-11e6-8a84-bae500000012",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                "type": "variant",
                "mediaType": "application/json"
              }
            },
            "reason": "Обновленная причина"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции Оприходования.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/enter/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20",
    "type": "enterposition",
    "mediaType": "application/json"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b20",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "quantity": 3,
  "price": 333444.0,
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a83c422-3c64-11e6-8a84-bae500000012",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
      "type": "variant",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=3bb1af6c-2842-11e9-ac12-000c00000061"
    }
  },
  "reason": "Обновленная причина",
  "overhead": 0
}
```

### Удалить позицию 

**Параметры**

| Параметр       | Описание                                                                              |
| :------------- | :------------------------------------------------------------------------------------ |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Оприходования. |
| **positionID** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b20* id позиции.       |

> Запрос на удаление отдельной позиции Оприходования с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/enter/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление позиции Оприходования.
