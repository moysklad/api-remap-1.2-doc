## Перемещение
Средствами JSON API можно создавать и обновлять сведения о Перемещениях, запрашивать списки Перемещений и сведения по отдельным Перемещениям. Позициями Перемещений можно управлять как в составе отдельного Перемещения, так и отдельно - с помощью специальных ресурсов для управления позициями Перемещения. Кодом сущности для Перемещения в составе JSON API является ключевое слово **move**.
### Перемещения 
#### Атрибуты сущности

| Название          | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                                                                                                   |
|-------------------|:----------------------------------------------------------| :------------------------------------------------------------------------------------------------------------------------------------------------ |:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**     | UUID                                                      | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе``+Только для чтения``+Change-handler`                                                                                                                       |
| **applicable**    | Boolean                                                   | `=` `!=`                                                                                                                                          | Отметка о проведении<br>`+Обязательное при ответе``+Change-handler` `+Update-provider`                                                                                                                     |
| **attributes**    | Array(Object)                                             | [Операторы доп. полей](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-fil-traciq-po-dopolnitel-nym-polqm) | Коллекция метаданных доп. полей. [Поля объекта](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)<br> `+Change-handler` `+Update-provider`                                           |
| **code**          | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Код Перемещения                                                                                                                                                                                            |
| **created**       | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата создания<br>`+Обязательное при ответе` `+Только для чтения``+Change-handler`                                                                                                                          |
| **deleted**       | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего удаления Перемещения<br>`+Только для чтения`                                                                                                                                             |
| **description**   | String(4096)                                              | `=` `!=` `~` `~=` `=~`                                                                                                                            | Комментарий Перемещения<br>`+Change-handler` `+Update-provider`                                                                                                                                            |
| **externalCode**  | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код Перемещения<br>`+Обязательное при ответе``+Change-handler`                                                                                                                                     |
| **files**         | MetaArray                                                 |                                                                                                                                                   | Метаданные массива [Файлов](../dictionaries/#suschnosti-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand`                                                              |
| **group**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                                                                                   |
| **id**            | UUID                                                      | `=` `!=`                                                                                                                                          | ID Перемещения<br>`+Обязательное при ответе` `+Только для чтения``+Change-handler`                                                                                                                         |
| **internalOrder** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные Внутреннего заказа, связанного с Перемещением<br>`+Expand`                                                                                                                                      |
| **customerOrder** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные Заказа покупателя, связанного с Перемещением<br>`+Expand`                                                                                                                                       |
| **meta**          | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные Перемещения<br>`+Обязательное при ответе``+Change-handler`                                                                                                                                      |
| **moment**        | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата документа<br>`+Обязательное при ответе``+Change-handler` `+Update-provider`                                                                                                                           |
| **name**          | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование Перемещения<br>`+Обязательное при ответе``+Change-handler` `+Update-provider`                                                                                                                 |
| **organization**  | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании``+Change-handler` `+Update-provider`                                                                                   |
| **overhead**      | Object                                                    |                                                                                                                                                   | Накладные расходы. [Подробнее тут](../dictionaries/#dokumenty-peremeschenie-peremescheniq-nakladnye-rashody). Если Позиции Перемещения не заданы, то накладные расходы нельзя задать<br>`+Update-provider` |
| **owner**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Обязательное при ответе` `+Expand`                                                                                                                                               |
| **positions**     | MetaArray                                                 |                                                                                                                                                   | Метаданные позиций Перемещения<br>`+Обязательное при ответе` `+Expand``+Change-handler` `+Update-provider`                                                                                                 |
| **printed**       | Boolean                                                   | `=` `!=`                                                                                                                                          | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                   |
| **project**       | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные проекта<br>`+Expand``+Change-handler` `+Update-provider`                                                                                                                                        |
| **published**     | Boolean                                                   | `=` `!=`                                                                                                                                          | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                 |
| **rate**          | Object                                                    |                                                                                                                                                   | Валюта. [Подробнее тут](../documents/#dokumenty-teh-operaciq-valuta-w-dokumentah)<br>`+Обязательное при ответе``+Change-handler` `+Update-provider`                                                        |
| **shared**        | Boolean                                                   | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе`                                                                                                                                                                 |
| **sourceStore**   | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные склада, с которого совершается перемещение<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании``+Change-handler` `+Update-provider`                                               |
| **state**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные статуса Перемещения<br>`+Expand` `+Change-handler` `+Update-provider`                                                                                                                           |
| **sum**           | Int                                                       | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Сумма Перемещения в копейках<br>`+Обязательное при ответе` `+Только для чтения``+Change-handler`                                                                                                           |
| **syncId**        | UUID                                                      | `=` `!=`                                                                                                                                          | ID синхронизации. После заполнения недоступен для изменения                                                                                                                                                |
| **targetStore**   | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные склада, на который совершается перемещение<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании``+Change-handler` `+Update-provider`                                               |
| **updated**       | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления Перемещения<br>`+Обязательное при ответе` `+Только для чтения``+Change-handler`                                                                                               |

#### Накладные расходы
Описание полей overhead

| Название         | Тип  | Описание                                                                                                                    |
| ---------------- | :--- | :-------------------------------------------------------------------------------------------------------------------------- |
| **sum**          | Int  | Сумма в копейках<br>`+Обязательное при ответе` `+Update-provider`                                                                |
| **distribution** | Enum | Распределение накладных расходов `[weight, volume, price]` -> `[по весу, по объему, по цене]`<br>`+Обязательное при ответе` `+Update-provider` |

#### Позиции Перемещения
Позиции Перемещения - это список товаров/модификаций/серий.
Объект позиции Перемещения содержит следующие поля:

| Название       | Тип                                                       | Описание                                                                                                                                                                                                                                                                   |
|----------------|:----------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**  | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения``+Change-handler`                                                                                                                                                                                     |
| **assortment** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные товара/услуги/серии/модификации, которую представляет собой позиция<br>`+Обязательное при ответе` `+Expand``+Change-handler` `+Update-provider`                                                                                                                                   |
| **id**         | UUID                                                      | ID позиции<br>`+Обязательное при ответе` `+Только для чтения``+Change-handler`                                                                                                                                                                                            |
| **overhead**   | Int                                                       | Накладные расходы. [Подробнее тут](../dictionaries/#dokumenty-oprihodowanie-oprihodowaniq-nakladnye-rashody). Если Позиции Перемещения не заданы, то накладные расходы нельзя задать<br>`+Обязательное при ответе` `+Только для чтения`                                      |
| **pack**       | Object                                                    | Упаковка Товара. [Подробнее тут](../dictionaries/#suschnosti-towar-towary-atributy-wlozhennyh-suschnostej-upakowki-towara)<br>`+Change-handler` `+Update-provider`                                                                                                                               |
| **price**      | Float                                                     | Цена товара/услуги в копейках<br>`+Обязательное при ответе``+Change-handler` `+Update-provider`                                                                                                                                                                                              |
| **quantity**   | Int                                                       | Количество товаров/услуг данного вида в позиции. Если позиция - товар, у которого включен учет по серийным номерам, то значение в этом поле всегда будет равно количеству серийных номеров для данной позиции в документе.<br>`+Обязательное при ответе``+Change-handler` `+Update-provider` |
| **sourceSlot** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Ячейка на складе, с которого совершается перемещение. [Подробнее тут](../dictionaries/#suschnosti-sklad-yachejki-sklada)<br>`+Expand` |
| **targetSlot** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Ячейка на складе, на который совершается перемещение. [Подробнее тут](../dictionaries/#suschnosti-sklad-yachejki-sklada)<br>`+Expand` |
| **things**     | Array(String)                                             | Серийные номера. Значение данного атрибута игнорируется, если товар позиции не находится на серийном учете. В ином случае количество товаров в позиции будет равно количеству серийных номеров, переданных в значении атрибута.`+Change-handler`                          |

Значение данного атрибута игнорируется, если товар позиции не находится на серийном учете.
В ином случае количество товаров в позиции будет равно количеству серийных номеров, переданных в значении атрибута.

С позициями можно работать с помощью [специальных ресурсов для управления позициями Перемещения](../documents/#dokumenty-peremeschenie-pozicii-peremescheniq),
а также в составе отдельного Перемещения. При работе в составе отдельного Перемещения,
вы можете отправлять запросы на создание отдельного Перемещения с включенным в тело запроса
массивом позиций Перемещения. Если количество позиций превышает максимально допустимое, то для
дальнейшего пополнения позиций нужно будет работать со специальным ресурсом "Позиции Перемещения".
Также, при работе в составе отдельного Перемещения, можно отправлять запросы на обновление списка позиций
с включенным в тело запроса массивом позиций Перемещения. При этом важно помнить, что коллекция позиций будет
восприниматься как "все позиции Перемещения" и полностью заменит уже существующую коллекцию при обновлении объекта - лишние
позиции будут удалены, новые добавлены, существующие - изменены.


О работе с доп. полями Перемещений можно прочитать [здесь](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)


### Получить Перемещения
 
**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |

> Получить Перемещения

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/move"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Перемещений.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/move",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata",
    "type": "move",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/5ac52c9a-4f67-11e6-8a84-bae500000084",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata",
        "type": "move",
        "mediaType": "application/json"
      },
      "id": "5ac52c9a-4f67-11e6-8a84-bae500000084",
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
      "updated": "2016-07-21 20:20:19",
      "name": "00002",
      "externalCode": "Avqi0FZqi8W400cwO1oHh2",
      "moment": "2016-07-21 20:19:00",
      "applicable": true,
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
      "sum": 0,
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "project": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/722e39f0-313e-11e6-8a84-bae500000008",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
          "mediaType": "application/json"
        }
      },
      "state": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata/states/64c4689e-4f67-11e6-8a84-bae5000000b5",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/5ac52c9a-4f67-11e6-8a84-bae500000084/positions",
          "type": "moveposition",
          "mediaType": "application/json",
          "size": 15,
          "limit": 1000,
          "offset": 0
        }
      },
      "sourceStore": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "targetStore": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/e94a6e65-4f64-11e6-8a84-bae500000066",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/ec94d9ff-4f64-11e6-8a84-bae500000069",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata",
        "type": "move",
        "mediaType": "application/json"
      },
      "id": "ec94d9ff-4f64-11e6-8a84-bae500000069",
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
      "updated": "2016-07-21 20:02:36",
      "name": "00001",
      "externalCode": "l7eb7QKZj1DtnXCLBuuUa1",
      "moment": "2016-07-21 19:37:00",
      "applicable": true,
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
      "sum": 0,
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/ec94d9ff-4f64-11e6-8a84-bae500000069/positions",
          "type": "moveposition",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "sourceStore": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/e94a6e65-4f64-11e6-8a84-bae500000066",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "targetStore": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      }
    }
  ]
}
```
        
### Создать Перемещение 
Запрос на создание нового Перемещения. 
Обязательные для создания поля:

+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **sourceStore** - Ссылка на склад, с которого совершается перемещение, в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **targetStore** - Ссылка на склад, на который совершается перемещение, в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)

> Пример создания нового Перемещения с телом запроса, содержащим только необходимые поля.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/move"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "organization": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "targetStore": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "sourceStore": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/e94a6e65-4f64-11e6-8a84-bae500000066",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Перемещения.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/544236cb-4f6a-11e6-8a84-bae500000003",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata",
    "type": "move",
    "mediaType": "application/json"
  },
  "id": "544236cb-4f6a-11e6-8a84-bae500000003",
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
  "updated": "2007-02-07 17:16:41",
  "name": "705",
  "externalCode": "vosdjnodsfne3124pasf",
  "moment": "2016-07-21 15:44:33",
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
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata/states/64c4689e-4f67-11e6-8a84-bae5000000b5",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "created": "2016-08-25 19:55:00",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/544236cb-4f6a-11e6-8a84-bae500000003/positions",
      "type": "moveposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "sourceStore": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/e94a6e65-4f64-11e6-8a84-bae500000066",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "targetStore": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  }
}
```

### Массовое создание и обновление Перемещений 
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Перемещений.
В теле запроса нужно передать массив, содержащий JSON представления Перемещений, которые вы хотите создать или обновить.
Обновляемые Перемещения должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Перемещений

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/move"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "organization": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "targetStore": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type": "store",
                  "mediaType": "application/json"
                }
              },
              "sourceStore": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/e94a6e65-4f64-11e6-8a84-bae500000066",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type": "store",
                  "mediaType": "application/json"
                }
              }
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/544236cb-4f6a-11e6-8a84-bae500000003",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata",
                "type": "move",
                "mediaType": "application/json"
              },
              "name": "705507",
              "description": "Переезд 2",
              "code": "12345",
              "externalCode": "12345678",
              "moment": "2016-07-21 19:44:33",
              "applicable": false,
              "state": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata/states/64c4689e-4f67-11e6-8a84-bae5000000b5",
                  "type": "state",
                  "mediaType": "application/json"
                }
              },
              "overhead": {
                "sum": 5555,
                "distribution": "weight"
              },
              "organization": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "targetStore": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type": "store",
                  "mediaType": "application/json"
                }
              },
              "sourceStore": {
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
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata/attributes/954d6ab9-4f67-11e6-8a84-bae5000000bc",
                    "type": "attributemetadata",
                    "mediaType": "application/json"
                  },
                  "value": 43
                }
              ],
              "positions": []
            }
          ]
'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Перемещений.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/544236cb-4f6a-11e6-8a84-bae500000003",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata",
      "type": "move",
      "mediaType": "application/json"
    },
    "id": "544236cb-4f6a-11e6-8a84-bae500000003",
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
    "updated": "2007-02-07 17:16:41",
    "name": "705",
    "externalCode": "vosdjnodsfne3124pasf",
    "moment": "2016-07-21 15:44:33",
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
    "sum": 0,
    "organization": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "state": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata/states/64c4689e-4f67-11e6-8a84-bae5000000b5",
        "type": "state",
        "mediaType": "application/json"
      }
    },
    "created": "2016-08-25 19:55:00",
    "printed": true,
    "published": true,
    "positions": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/544236cb-4f6a-11e6-8a84-bae500000003/positions",
        "type": "moveposition",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    },
    "sourceStore": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/e94a6e65-4f64-11e6-8a84-bae500000066",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "targetStore": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    }
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/544236cb-4f6a-11e6-8a84-bae500000003",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata",
      "type": "move",
      "mediaType": "application/json"
    },
    "id": "544236cb-4f6a-11e6-8a84-bae500000003",
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
    "updated": "2016-07-21 20:44:20",
    "name": "705507",
    "description": "Переезд 2",
    "code": "12345",
    "externalCode": "12345678",
    "moment": "2016-07-21 19:44:33",
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
    "state": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata/states/64c4689e-4f67-11e6-8a84-bae5000000b5",
        "type": "state",
        "mediaType": "application/json"
      }
    },
    "attributes": [
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata/attributes/954d62cc-4f67-11e6-8a84-bae5000000bb",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "954d62cc-4f67-11e6-8a84-bae5000000bb",
        "name": "AttributeName1",
        "type": "time",
        "value": "2016-07-21 20:28:53"
      },
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata/attributes/954d6ab9-4f67-11e6-8a84-bae5000000bc",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "954d6ab9-4f67-11e6-8a84-bae5000000bc",
        "name": "AttributeName2",
        "type": "long",
        "value": 43
      }
    ],
    "created": "2016-08-25 19:55:00",
    "printed": true,
    "published": true,
    "positions": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/544236cb-4f6a-11e6-8a84-bae500000003/positions",
        "type": "moveposition",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    },
    "sourceStore": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/e94a6e65-4f64-11e6-8a84-bae500000066",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "targetStore": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    }
  }
]
```

### Удалить Перемещение

**Параметры**

| Параметр | Описание                                                                            |
| :------- | :---------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Перемещения. |
  
> Запрос на удаление Перемещения с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Перемещения.

### Массовое удаление Перемещений

В теле запроса нужно передать массив, содержащий JSON метаданных Перемещений, которые вы хотите удалить.


> Запрос на массовое удаление Перемещений. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/move/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata",
            "type": "move",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata",
            "type": "move",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Перемещений.

```json
[
  {
    "info":"Сущность 'move' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'move' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
``` 

### Шаблон Перемещения 
#### Шаблон Перемещения 
> Запрос на получение предзаполненого стандартными значениями шаблона перемещения без связи с каким-либо документом.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/move/new"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d ''  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного перемещения.

```json
{
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2016-11-25 18:02:50",
  "applicable": true,
  "printed": true,
  "published": true,
  "sum": 0,
  "project": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "positions": {
    "rows": []
  }
}
```

### Шаблон Перемещения на основе 
Запрос на получение предзаполненного шаблона перемещения на основе внутреннего заказа.
В ответ на запрос вернется предзаполненный шаблон перемещения, который
затем можно будет использовать для создания нового перемещения с помощью POST запроса.

> Пример запроса на получение шаблона перемещения на основе внутреннего заказа.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/move/new"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "internalOrder": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/64e426af-b0d8-11e6-8a84-bae500000064",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata",
                "type": "internalorder",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного перемещения.

```json
{
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2016-11-25 18:02:21",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 9910,
  "project": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "created": "2016-08-25 19:55:00",
  "printed": true,
  "published": true,
  "positions": {
    "rows": [
      {
        "quantity": 1,
        "price": 2230.0,
        "assortment": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
          }
        },
        "overhead": 0
      },
      {
        "quantity": 1,
        "price": 100.0,
        "assortment": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
          }
        },
        "overhead": 0
      },
      {
        "quantity": 2,
        "price": 500.0,
        "assortment": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=392c045c-2842-11e9-ac12-000a00000002"
          }
        },
        "overhead": 0
      },
      {
        "quantity": 3,
        "price": 2230.0,
        "assortment": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3bb1af6c-2842-11e9-ac12-000c00000061"
          }
        },
        "overhead": 0
      }
    ]
  },
  "targetStore": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "internalOrder": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/64e426af-b0d8-11e6-8a84-bae500000064",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata",
      "type": "internalorder",
      "mediaType": "application/json"
    }
  }
}
```

### Метаданные Перемещений 
#### Метаданные Перемещений 
Запрос на получение метаданных Перемещений. Результат - объект JSON, включающий в себя:

| Параметр                       | Описание                                                                                                         |
| ------------------------------ | :--------------------------------------------------------------------------------------------------------------- |
| **meta**                       | Ссылка на метаданные Перемещений                                                                                 |
| **attributes**                 | Массив объектов доп. полей Перемещений в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **states**                     | Массив статусов Перемещений                                                                                      |
| **createShared**               | создавать новые Перемещения с меткой "Общий"                                                                     |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Перемещений

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление метаданных Перемещений.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata/attributes/954d62cc-4f67-11e6-8a84-bae5000000bb",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "954d62cc-4f67-11e6-8a84-bae5000000bb",
      "name": "AttributeName1",
      "type": "time",
      "required": false
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata/attributes/954d6ab9-4f67-11e6-8a84-bae5000000bc",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "954d6ab9-4f67-11e6-8a84-bae5000000bc",
      "name": "AttributeName2",
      "type": "long",
      "required": false
    }
  ],
  "states": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata/states/64c4689e-4f67-11e6-8a84-bae5000000b5",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "64c4689e-4f67-11e6-8a84-bae5000000b5",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Ожидает исполнения",
      "color": 10066329,
      "stateType": "Regular",
      "entityType": "move"
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
 
> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata/attributes/954d6ab9-4f67-11e6-8a84-bae5000000bc",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "954d6ab9-4f67-11e6-8a84-bae5000000bc",
  "name": "AttributeName1",
  "type": "long",
  "required": false
}
```

### Перемещение
 
### Получить Перемещение 

**Параметры**

| Параметр | Описание                                                                            |
| :------- | :---------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Перемещения. |

> Запрос на получение отдельного Перемещения с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Перемещения.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/5ac52c9a-4f67-11e6-8a84-bae500000084",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata",
    "type": "move",
    "mediaType": "application/json"
  },
  "id": "5ac52c9a-4f67-11e6-8a84-bae500000084",
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
  "updated": "2016-07-21 20:20:19",
  "name": "00002",
  "externalCode": "Avqi0FZqi8W400cwO1oHh2",
  "moment": "2016-07-21 20:19:00",
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
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "project": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/722e39f0-313e-11e6-8a84-bae500000008",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata/states/64c4689e-4f67-11e6-8a84-bae5000000b5",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/5ac52c9a-4f67-11e6-8a84-bae500000084/positions",
      "type": "moveposition",
      "mediaType": "application/json",
      "size": 15,
      "limit": 1000,
      "offset": 0
    }
  },
  "sourceStore": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "targetStore": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/e94a6e65-4f64-11e6-8a84-bae500000066",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  }
}
```

### Изменить Перемещение 
Запрос на обновление Перемещения с указанным id.

**Параметры**

| Параметр | Описание                                                                            |
| :------- | :---------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Перемещения. |

> Пример запроса на обновление отдельного Перемещения.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "705507",
            "description": "Переезд 2",
            "code": "12345",
            "externalCode": "12345678",
            "moment": "2016-07-21 19:44:33",
            "applicable": false,
            "state": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata/states/64c4689e-4f67-11e6-8a84-bae5000000b5",
                "type": "state",
                "mediaType": "application/json"
              }
            },
            "overhead": {
              "sum": 5555,
              "distribution": "weight"
            },
            "organization": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "targetStore": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "sourceStore": {
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
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata/attributes/954d6ab9-4f67-11e6-8a84-bae5000000bc",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": 43
              }
            ],
            "positions": []
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Перемещения.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/544236cb-4f6a-11e6-8a84-bae500000003",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata",
    "type": "move",
    "mediaType": "application/json"
  },
  "id": "544236cb-4f6a-11e6-8a84-bae500000003",
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
  "updated": "2016-07-21 20:44:20",
  "name": "705507",
  "description": "Переезд 2",
  "code": "12345",
  "externalCode": "12345678",
  "moment": "2016-07-21 19:44:33",
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
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata/states/64c4689e-4f67-11e6-8a84-bae5000000b5",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata/attributes/954d62cc-4f67-11e6-8a84-bae5000000bb",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "954d62cc-4f67-11e6-8a84-bae5000000bb",
      "name": "AttributeName1",
      "type": "time",
      "value": "2016-07-21 20:28:53"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata/attributes/954d6ab9-4f67-11e6-8a84-bae5000000bc",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "954d6ab9-4f67-11e6-8a84-bae5000000bc",
      "name": "AttributeName2",
      "type": "long",
      "value": 43
    }
  ],
  "created": "2016-08-25 19:55:00",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/544236cb-4f6a-11e6-8a84-bae500000003/positions",
      "type": "moveposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "sourceStore": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/e94a6e65-4f64-11e6-8a84-bae500000066",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "targetStore": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  }
}
```

### Позиции Перемещения 
Отдельный ресурс для управления позициями Перемещения. С его помощью вы можете управлять позициями большого документа, количество строк в котором превышает лимит на количество строк, сохраняемых вместе с документом. Этот лимит равен 1000. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](../#mojsklad-json-api-obschie-swedeniq-rabota-s-poziciqmi-dokumentow).
  
### Получить позиции 
Запрос на получение списка всех позиций данного Перемещения.

| Название    | Тип                                                       | Описание                                                |
| ----------- | :-------------------------------------------------------- | :------------------------------------------------------ |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                    |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.            |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Перемещения. |

**Параметры**

| Параметр   | Описание                                                                                                                               |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Перемещения.                                                    |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search** | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |

> Получить позиции

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19/positions"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций отдельного Перемещения.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19/positions",
    "type": "moveposition",
    "mediaType": "application/json",
    "size": 15,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19/positions/5ac5407b-4f67-11e6-8a84-bae500000085",
        "type": "moveposition",
        "mediaType": "application/json"
      },
      "id": "5ac5407b-4f67-11e6-8a84-bae500000085",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 2,
      "price": 0.0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/e6447ee7-3303-11e6-8a84-bae5000149c2",
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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19/positions/5ac54d7a-4f67-11e6-8a84-bae500000086",
        "type": "moveposition",
        "mediaType": "application/json"
      },
      "id": "5ac54d7a-4f67-11e6-8a84-bae500000086",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 3,
      "price": 0.0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/e6475862-3303-11e6-8a84-bae5000149cc",
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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19/positions/5ac55815-4f67-11e6-8a84-bae500000087",
        "type": "moveposition",
        "mediaType": "application/json"
      },
      "id": "5ac55815-4f67-11e6-8a84-bae500000087",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 4,
      "price": 0.0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/e84aed23-3303-11e6-8a84-bae500014dcd",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
        }
      },
      "overhead": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19/positions/5ac56175-4f67-11e6-8a84-bae500000088",
        "type": "moveposition",
        "mediaType": "application/json"
      },
      "id": "5ac56175-4f67-11e6-8a84-bae500000088",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 5,
      "price": 0.0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/e84e52e5-3303-11e6-8a84-bae500014dd7",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
        }
      },
      "overhead": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19/positions/5ac56a34-4f67-11e6-8a84-bae500000089",
        "type": "moveposition",
        "mediaType": "application/json"
      },
      "id": "5ac56a34-4f67-11e6-8a84-bae500000089",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 2,
      "price": 0.0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/e8530f64-3303-11e6-8a84-bae500014de6",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000042"
        }
      },
      "overhead": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19/positions/5ac572cd-4f67-11e6-8a84-bae50000008a",
        "type": "moveposition",
        "mediaType": "application/json"
      },
      "id": "5ac572cd-4f67-11e6-8a84-bae50000008a",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 1,
      "price": 0.0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/328b0454-2e62-11e6-8a84-bae500000118",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000043"
        }
      },
      "overhead": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19/positions/5ac57b59-4f67-11e6-8a84-bae50000008b",
        "type": "moveposition",
        "mediaType": "application/json"
      },
      "id": "5ac57b59-4f67-11e6-8a84-bae50000008b",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 32,
      "price": 0.0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/0744d71b-2e59-11e6-8a84-bae50000007f",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000045"
        }
      },
      "overhead": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19/positions/5ac5843a-4f67-11e6-8a84-bae50000008c",
        "type": "moveposition",
        "mediaType": "application/json"
      },
      "id": "5ac5843a-4f67-11e6-8a84-bae50000008c",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 14,
      "price": 0.0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a7daa6b-3c64-11e6-8a84-bae50000000a",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
          "type": "variant",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=e64d0a86-2a99-11e9-ac12-000c00000046"
        }
      },
      "overhead": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19/positions/5ac58ea6-4f67-11e6-8a84-bae50000008d",
        "type": "moveposition",
        "mediaType": "application/json"
      },
      "id": "5ac58ea6-4f67-11e6-8a84-bae50000008d",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 5,
      "price": 0.0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
          "type": "variant",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=e64d0a86-2a99-11e9-ac12-000c00000047"
        }
      },
      "overhead": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19/positions/5ac596ca-4f67-11e6-8a84-bae50000008e",
        "type": "moveposition",
        "mediaType": "application/json"
      },
      "id": "5ac596ca-4f67-11e6-8a84-bae50000008e",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 6,
      "price": 0.0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a83c422-3c64-11e6-8a84-bae500000012",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
          "type": "variant",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=e64d0a86-2a99-11e9-ac12-000c00000048"
        }
      },
      "overhead": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19/positions/5ac59eb7-4f67-11e6-8a84-bae50000008f",
        "type": "moveposition",
        "mediaType": "application/json"
      },
      "id": "5ac59eb7-4f67-11e6-8a84-bae50000008f",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 34,
      "price": 0.0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/4f05a1f2-3304-11e6-8a84-bae50001c687",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000049"
        }
      },
      "overhead": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19/positions/5ac5a711-4f67-11e6-8a84-bae500000090",
        "type": "moveposition",
        "mediaType": "application/json"
      },
      "id": "5ac5a711-4f67-11e6-8a84-bae500000090",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 32,
      "price": 0.0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/4f785efd-3304-11e6-8a84-bae50001c6c4",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000040"
        }
      },
      "overhead": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19/positions/5ac5af07-4f67-11e6-8a84-bae500000091",
        "type": "moveposition",
        "mediaType": "application/json"
      },
      "id": "5ac5af07-4f67-11e6-8a84-bae500000091",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 12,
      "price": 0.0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/4f918196-3304-11e6-8a84-bae50001c6d2",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000051"
        }
      },
      "overhead": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19/positions/5ac5c872-4f67-11e6-8a84-bae500000092",
        "type": "moveposition",
        "mediaType": "application/json"
      },
      "id": "5ac5c872-4f67-11e6-8a84-bae500000092",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 43,
      "price": 0.0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/4f2a0659-3304-11e6-8a84-bae50001c6a1",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000052"
        }
      },
      "overhead": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19/positions/5ac5d0e5-4f67-11e6-8a84-bae500000093",
        "type": "moveposition",
        "mediaType": "application/json"
      },
      "id": "5ac5d0e5-4f67-11e6-8a84-bae500000093",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 32,
      "price": 0.0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/27eba7b5-3303-11e6-8a84-bae500002b72",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000053"
        }
      },
      "overhead": 0
    }
  ]
}
```

### Создать позицию 
Запрос на создание новой позиции в Перемещении.
Для успешного создания необходимо в теле запроса указать следующие поля:

+ **assortment** - Ссылка на товар/услугу/серию/модификацию, которую представляет собой позиция.
Также можно указать поле с именем **service**, **consignment**, **variant** в соответствии с тем,
чем является указанная позиция. Подробнее об этом поле можно прочитать в описании [позиции Перемещения](../documents/#dokumenty-peremeschenie-peremescheniq-pozicii-peremescheniq)
+ **quantity** - Количество указанной позиции. Должно быть положительным, иначе возникнет ошибка.
Одновременно можно создать как одну так и несколько позиций Перемещения. Все созданные данным запросом позиции
будут добавлены к уже существующим.

**Параметры**

| Параметр | Описание                                                                            |
| :------- | :---------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Перемещения. |

> Пример создания позиций в Перемещении.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19/positions"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "quantity": 43,
              "price": 670.0,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/4f2a0659-3304-11e6-8a84-bae50001c6a1",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "overhead": 70
            },
            {
              "quantity": 32,
              "price": 640.0,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/27eba7b5-3303-11e6-8a84-bae500002b72",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "overhead": 65
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной позиции отдельного Перемещения.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19/positions/476d9c48-4f6b-11e6-8a84-bae500000013",
      "type": "moveposition",
      "mediaType": "application/json"
    },
    "id": "476d9c48-4f6b-11e6-8a84-bae500000013",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 43,
    "price": 670.0,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/4f2a0659-3304-11e6-8a84-bae50001c6a1",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
      }
    },
    "overhead": 0
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19/positions/476da9ce-4f6b-11e6-8a84-bae500000014",
      "type": "moveposition",
      "mediaType": "application/json"
    },
    "id": "476da9ce-4f6b-11e6-8a84-bae500000014",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 32,
    "price": 640.0,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/27eba7b5-3303-11e6-8a84-bae500002b72",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
      }
    },
    "overhead": 0
  }
]
```

### Позиция Перемещения
   
### Получить позицию

**Параметры**

| Параметр       | Описание                                                                            |
| :------------- | :---------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Перемещения. |
| **positionID** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b20* id Перемещения. |
 
> Запрос на получение отдельной позиции Перемещения с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции Перемещения.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20",
    "type": "moveposition",
    "mediaType": "application/json"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b20",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "quantity": 4,
  "price": 0.0,
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/e84aed23-3303-11e6-8a84-bae500014dcd",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
    }
  },
  "overhead": 0
}
```

### Изменить позицию 
Запрос на обновление отдельной позиции Перемещения. Для обновления позиции нет каких-либо
обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

| Параметр       | Описание                                                                            |
| :------------- | :---------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Перемещения. |
| **positionID** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b20* id Перемещения. |

> Пример запроса на обновление отдельной позиции в Перемещении.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "quantity": 44,
            "price": 222222.0
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции Перемещения.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20",
    "type": "moveposition",
    "mediaType": "application/json"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b20",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "quantity": 44,
  "price": 222222.0,
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/4f2a0659-3304-11e6-8a84-bae50001c6a1",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
    }
  },
  "overhead": 0
}
```

### Удалить позицию

**Параметры**

| Параметр       | Описание                                                                            |
| :------------- | :---------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Перемещения. |
| **positionID** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b20* id Перемещения. |
 
> Запрос на удаление отдельной позиции Перемещения с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление позиции Перемещения.
