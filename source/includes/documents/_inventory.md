## Инвентаризация
Средствами JSON API можно создавать и обновлять сведения о Инвентаризации, запрашивать списки Инвентаризаций и сведения по отдельным Инвентаризациям. Позициями Инвентаризации можно управлять как в составе отдельной Инвентаризации, так и отдельно - с помощью специальных ресурсов для управления позициями Инвентаризации. Кодом сущности для Инвентаризации в составе JSON API является ключевое слово **inventory**. Больше о Инвентаризациях можно прочитать [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203309933-%D0%98%D0%BD%D0%B2%D0%B5%D0%BD%D1%82%D0%B0%D1%80%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2).
### Инвентаризация 
#### Атрибуты сущности

| Название         | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                                      |
| ---------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| **accountId**    | UUID                                                      | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                          |
| **attributes**   | Array(Object)                                             | [Операторы доп. полей](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-fil-traciq-po-dopolnitel-nym-polqm) | Коллекция метаданных доп. полей. [Поля объекта](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)                       |
| **code**         | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Код выданного Инвентаризации                                                                                                                  |
| **created**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата создания<br>`+Обязательное при ответе` `+Только для чтения`                                                                              |
| **deleted**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего удаления Инвентаризации<br>`+Только для чтения`                                                                             |
| **description**  | String(4096)                                              | `=` `!=` `~` `~=` `=~`                                                                                                                            | Комментарий Входящего платежа                                                                                                                 |
| **externalCode** | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код выданного Инвентаризации<br>`+Обязательное при ответе`                                                                            |
| **files**        | MetaArray                                                 |                                                                                                                                                   | Метаданные массива [Файлов](../dictionaries/#suschnosti-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand` |
| **group**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                      |
| **id**           | UUID                                                      | `=` `!=`                                                                                                                                          | ID Инвентаризации<br>`+Обязательное при ответе` `+Только для чтения`                                                                          |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные Инвентаризации<br>`+Обязательное при ответе`                                                                                       |
| **moment**       | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата документа<br>`+Обязательное при ответе`                                                                                                  |
| **name**         | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование выданного Инвентаризации<br>`+Обязательное при ответе`                                                                           |
| **organization** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                          |
| **owner**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Обязательное при ответе` `+Expand`                                                                                  |
| **positions**    | MetaArray                                                 |                                                                                                                                                   | Метаданные позиций Инвентаризации<br>`+Обязательное при ответе` `+Expand`                                                                     |
| **printed**      | Boolean                                                   | `=` `!=`                                                                                                                                          | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                      |
| **published**    | Boolean                                                   | `=` `!=`                                                                                                                                          | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                    |
| **shared**       | Boolean                                                   | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе`                                                                                                    |
| **state**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные статуса Инвентаризации<br>`+Expand`                                                                                                |
| **store**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные склада<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                          |
| **sum**          | Int                                                       | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Сумма Инвентаризации в копейках<br>`+Обязательное при ответе` `+Только для чтения`                                                            |
| **syncId**       | UUID                                                      | `=` `!=`                                                                                                                                          | ID синхронизации. После заполнения недоступен для изменения                                                                                   |
| **updated**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления Инвентаризации<br>`+Обязательное при ответе` `+Только для чтения`                                                |

#### Позиции Инвентаризации
Позиции Инвентаризации - это список товаров/модификаций/серий.
Объект позиции Инвентаризации содержит следующие поля:

| Название               | Тип                                                       | Описание                                                                                                                                                                                                                                                 |
| ---------------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **accountId**          | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                     |
| **assortment**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные товара/услуги/серии/модификации, которую представляет собой позиция<br>`+Обязательное при ответе` `+Expand`                                                                                                                                   |
| **calculatedQuantity** | Float                                                     | расчетный остаток<br>`+Обязательное при ответе`                                                                                                                                                                                                          |
| **correctionAmount**   | Float                                                     | разница между расчетным остатком и фактическимх<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                       |
| **correctionSum**      | Float                                                     | избыток/недостача<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                     |
| **id**                 | UUID                                                      | ID позиции<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                            |
| **pack**               | Object                                                    | Упаковка Товара. [Подробнее тут](../dictionaries/#suschnosti-towar-towary-atributy-wlozhennyh-suschnostej-upakowki-towara)                                                                                                                               |
| **price**              | Float                                                     | Цена товара/услуги в копейках<br>`+Обязательное при ответе`                                                                                                                                                                                              |
| **quantity**           | Int                                                       | Количество товаров/услуг данного вида в позиции. Если позиция - товар, у которого включен учет по серийным номерам, то значение в этом поле всегда будет равно количеству серийных номеров для данной позиции в документе.<br>`+Обязательное при ответе` |

С позициями можно работать с помощью [специальных ресурсов для управления позициями Инвентаризации](../documents/#dokumenty-inwentarizaciq-pozicii-inwentarizacii),
а также в составе отдельной Инвентаризации. При работе в составе отдельной Инвентаризации,
вы можете отправлять запросы на создание отдельной Инвентаризации с включенным в тело запроса
массивом позиций Инвентаризации. Если количество позиций превышает максимально допустимое, то для
дальнейшего пополнения позиций нужно будет работать со специальным ресурсом "Позиции Инвентаризации".
Также, при работе в составе отдельной Инвентаризации, можно отправлять запросы на обновление списка позиций
с включенным в тело запроса массивом позиций Инвентаризации. При этом важно помнить, что коллекция позиций будет
восприниматься как "все позиции Инвентаризации" и полностью заменит уже существующую коллекцию при обновлении объекта - лишние
позиции будут удалены, новые добавлены, существующие - изменены.

О работе с доп. полями Инвентаризации можно прочитать [здесь](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)


### Получить Инвентаризации 
Запрос всех Инвентаризаций на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                   |
| ----------- | :-------------------------------------------------------- | :--------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                       |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.               |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Инвентаризации. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |

> Получить Инвентаризации

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/inventory"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Инвентаризаций.

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
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata",
    "type": "inventory",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/7ee45d2d-ad65-11e6-8a84-bc52000000db",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata",
        "type": "inventory",
        "mediaType": "application/json"
      },
      "id": "7ee45d2d-ad65-11e6-8a84-bc52000000db",
      "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
      "owner": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/c4b17cf2-99bb-11e6-8a84-bc520000002a",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/c3cff163-99bb-11e6-8a84-bc5200000002",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-18 11:03:31",
      "name": "00001",
      "externalCode": "HCUtF6T2jnNOzNbh-ZNNo1",
      "moment": "2016-11-18 11:03:00",
      "sum": 480000,
      "printed": true,
      "published": true,
      "store": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c4eddfc8-99bb-11e6-8a84-bc5200000053",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "positions": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/7ee45d2d-ad65-11e6-8a84-bc52000000db/positions",
          "type": "inventoryposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      }
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/8c3e615a-ad65-11e6-8a84-bc52000000df",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata",
        "type": "inventory",
        "mediaType": "application/json"
      },
      "id": "8c3e615a-ad65-11e6-8a84-bc52000000df",
      "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
      "owner": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/c4b17cf2-99bb-11e6-8a84-bc520000002a",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/c3cff163-99bb-11e6-8a84-bc5200000002",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-18 11:03:53",
      "name": "00002",
      "externalCode": "aNpAW66rhIjZ4VmhA4igz0",
      "moment": "2016-11-18 11:03:00",
      "sum": 1020000,
      "store": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c4eddfc8-99bb-11e6-8a84-bc5200000053",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "positions": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/8c3e615a-ad65-11e6-8a84-bc52000000df/positions",
          "type": "inventoryposition",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      }
    }
  ]
}
```

### Создать Инвентаризацию 
Запрос на создание новой Инвентаризации

Обязательные для создания поля:

+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **store** - Ссылка на склад в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)

> Пример создания новой Инвентаризации с телом запроса, содержащим только необходимые поля.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/inventory"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "store": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c4eddfc8-99bb-11e6-8a84-bc5200000053",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "organization": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Инвентаризации.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/8a2a5d07-ad6d-11e6-8a84-bc520000000a",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata",
    "type": "inventory",
    "mediaType": "application/json"
  },
  "id": "8a2a5d07-ad6d-11e6-8a84-bc520000000a",
  "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/c4b17cf2-99bb-11e6-8a84-bc520000002a",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/c3cff163-99bb-11e6-8a84-bc5200000002",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-18 12:01:06",
  "name": "00005",
  "externalCode": "n0vO68WUgOh9OcHApWSVc2",
  "moment": "2016-11-18 12:01:06",
  "sum": 0,
  "store": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c4eddfc8-99bb-11e6-8a84-bc5200000053",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
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
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/8a2a5d07-ad6d-11e6-8a84-bc520000000a/positions",
      "type": "inventoryposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Массовое создание и обновление Инвентаризаций 
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Инвентаризаций.
В теле запроса нужно передать массив, содержащий JSON представления Инвентаризаций, которые вы хотите создать или обновить.
Обновляемые Инвентаризации должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Инвентаризаций

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/inventory"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "store": {
                "meta": {
                  "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c4eddfc8-99bb-11e6-8a84-bc5200000053",
                  "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type": "store",
                  "mediaType": "application/json"
                }
              },
              "organization": {
                "meta": {
                  "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
                  "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              }
            },
            {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/57a0bbfb-ad6d-11e6-8a84-bc52000000e7",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata",
                "type": "inventory",
                "mediaType": "application/json"
              },
              "name": "newname",
              "positions": {
                "rows": [
                  {
                    "quantity": 140,
                    "price": 5000.0,
                    "assortment": {
                      "meta": {
                        "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/b6be720e-ad63-11e6-8a84-bc520000008f",
                        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                        "type": "product",
                        "mediaType": "application/json"
                      }
                    },
                    "correctionAmount": -60,
                    "calculatedQuantity": 200,
                    "correctionSum": -300000
                  },
                  {
                    "quantity": 80,
                    "price": 4000.0,
                    "assortment": {
                      "meta": {
                        "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/58948866-ad65-11e6-8a84-bc52000000cf",
                        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                        "type": "product",
                        "mediaType": "application/json"
                      }
                    },
                    "correctionAmount": -20,
                    "calculatedQuantity": 100,
                    "correctionSum": -80000
                  }
                ]
              }
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Инвентаризаций.

```json
[
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/8a2a5d07-ad6d-11e6-8a84-bc520000000a",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata",
      "type": "inventory",
      "mediaType": "application/json"
    },
    "id": "8a2a5d07-ad6d-11e6-8a84-bc520000000a",
    "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
    "owner": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/c4b17cf2-99bb-11e6-8a84-bc520000002a",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/c3cff163-99bb-11e6-8a84-bc5200000002",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-11-18 12:01:06",
    "name": "00005",
    "externalCode": "n0vO68WUgOh9OcHApWSVc2",
    "moment": "2016-11-18 12:01:06",
    "sum": 0,
    "store": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c4eddfc8-99bb-11e6-8a84-bc5200000053",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "organization": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
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
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/8a2a5d07-ad6d-11e6-8a84-bc520000000a/positions",
        "type": "inventoryposition",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    }
  },
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/57a0bbfb-ad6d-11e6-8a84-bc52000000e7",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata",
      "type": "inventory",
      "mediaType": "application/json"
    },
    "id": "57a0bbfb-ad6d-11e6-8a84-bc52000000e7",
    "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
    "owner": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/c4b17cf2-99bb-11e6-8a84-bc520000002a",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/c3cff163-99bb-11e6-8a84-bc5200000002",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-11-18 12:12:27",
    "name": "newname",
    "externalCode": "6iP5E4LLhpzxRKezcuKE90",
    "moment": "2016-11-18 11:59:00",
    "sum": 1020000,
    "store": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c4eddfc8-99bb-11e6-8a84-bc5200000053",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "organization": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
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
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/57a0bbfb-ad6d-11e6-8a84-bc52000000e7/positions",
        "type": "inventoryposition",
        "mediaType": "application/json",
        "size": 2,
        "limit": 1000,
        "offset": 0
      }
    }
  }
]
```

### Удалить Инвентаризацию

**Параметры**

| Параметр | Описание                                                                               |
| :------- | :------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Инвентаризации. |
 
> Запрос на удаление Инвентаризации с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Инвентаризации.

### Массовое удаление Инвентаризаций

В теле запроса нужно передать массив, содержащий JSON метаданных Инвентаризаций, которые вы хотите удалить.


> Запрос на массовое удаление Инвентаризаций. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/inventory/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata",
            "type": "inventory",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata",
            "type": "inventory",
            "mediaType": "application/json"
        }
      ]'
```     

> Успешный запрос. Результат - JSON информация об удалении Инвентаризаций.

```json
[
  {
    "info":"Сущность 'inventory' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'inventory' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]   
```

### Метаданные Инвентаризаций 
#### Метаданные Инвентаризаций 
Запрос на получение метаданных Инвентаризаций. Результат - объект JSON, включающий в себя:

| Параметр                       | Описание                                                                                                           |
| ------------------------------ | :----------------------------------------------------------------------------------------------------------------- |
| **meta**                       | Ссылка на метаданные Инвентаризаций                                                                                |
| **attributes**                 | Массив объектов доп. полей Инвентаризацийв формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **states**                     | Массив статусов Инвентаризаций                                                                                     |
| **createShared**               | создавать новые Инвентаризаций с меткой "Общий"                                                                    |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Инвентаризаций

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление метаданных Инвентаризаций.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata/attributes/1f7dbb1b-ad6e-11e6-8a84-bc52000000eb",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "1f7dbb1b-ad6e-11e6-8a84-bc52000000eb",
      "name": "AttributeName1",
      "type": "string",
      "required": false
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata/attributes/1f7dc230-ad6e-11e6-8a84-bc52000000ec",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "1f7dc230-ad6e-11e6-8a84-bc52000000ec",
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
 
> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata/attributes/1f7dbb1b-ad6e-11e6-8a84-bc52000000eb",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "1f7dbb1b-ad6e-11e6-8a84-bc52000000eb",
  "name": "AttributeName1",
  "type": "string",
  "required": false
}
```

### Шаблон Инвентаризации 
#### Шаблон Инвентаризации 
> Запрос на получение предзаполненого стандартными значениями шаблона инвентаризации без связи с каким-либо документом.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/inventory/new"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d ''  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного списания.

```json
{
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/c4b17cf2-99bb-11e6-8a84-bc520000002a",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/c3cff163-99bb-11e6-8a84-bc5200000002",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2016-11-25 17:52:33",
  "sum": 0,
  "store": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c4eddfc8-99bb-11e6-8a84-bc5200000053",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "printed": true,
  "published": true,
  "positions": {
    "rows": []
  }
}
```

### Инвентаризация

### Получить Инвентаризацию

**Параметры**

| Параметр | Описание                                                                               |
| :------- | :------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Инвентаризации. |
 
> Запрос на получение отдельной инвентаризации с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Инвентаризации.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/57a0bbfb-ad6d-11e6-8a84-bc52000000e7",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata",
    "type": "inventory",
    "mediaType": "application/json"
  },
  "id": "57a0bbfb-ad6d-11e6-8a84-bc52000000e7",
  "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/c4b17cf2-99bb-11e6-8a84-bc520000002a",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/c3cff163-99bb-11e6-8a84-bc5200000002",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-18 11:59:41",
  "name": "00004",
  "externalCode": "6iP5E4LLhpzxRKezcuKE90",
  "moment": "2016-11-18 11:59:00",
  "sum": 0,
  "printed": true,
  "published": true,
  "store": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c4eddfc8-99bb-11e6-8a84-bc5200000053",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "positions": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/57a0bbfb-ad6d-11e6-8a84-bc52000000e7/positions",
      "type": "inventoryposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Изменить Инвентаризацию 
Запрос на обновление инвентаризации с указанным id.

**Параметры**

| Параметр | Описание                                                                               |
| :------- | :------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Инвентаризации. |

> Пример запроса на обновление отдельной Инвентаризации.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "newname",
            "positions": {
              "rows": [
                {
                  "quantity": 140,
                  "price": 5000.0,
                  "assortment": {
                    "meta": {
                      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/b6be720e-ad63-11e6-8a84-bc520000008f",
                      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  },
                  "correctionAmount": -60,
                  "calculatedQuantity": 200,
                  "correctionSum": -300000
                },
                {
                  "quantity": 80,
                  "price": 4000.0,
                  "assortment": {
                    "meta": {
                      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/58948866-ad65-11e6-8a84-bc52000000cf",
                      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  },
                  "correctionAmount": -20,
                  "calculatedQuantity": 100,
                  "correctionSum": -80000
                }
              ]
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Инвентаризации.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/57a0bbfb-ad6d-11e6-8a84-bc52000000e7",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata",
    "type": "inventory",
    "mediaType": "application/json"
  },
  "id": "57a0bbfb-ad6d-11e6-8a84-bc52000000e7",
  "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/c4b17cf2-99bb-11e6-8a84-bc520000002a",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/c3cff163-99bb-11e6-8a84-bc5200000002",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-18 12:12:27",
  "name": "newname",
  "externalCode": "6iP5E4LLhpzxRKezcuKE90",
  "moment": "2016-11-18 11:59:00",
  "sum": 1020000,
  "store": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c4eddfc8-99bb-11e6-8a84-bc5200000053",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
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
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/57a0bbfb-ad6d-11e6-8a84-bc52000000e7/positions",
      "type": "inventoryposition",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

> Пример запроса на изменение Инвентаризации с дополнительными полями.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "store": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c4eddfc8-99bb-11e6-8a84-bc5200000053",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "organization": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "attributes": [
              {
                "meta": {
                  "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata/attributes/1f7dbb1b-ad6e-11e6-8a84-bc52000000eb",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "name": "AttributeName1",
                "type": "string",
                "value": "text"
              },
              {
                "meta": {
                  "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata/attributes/1f7dc230-ad6e-11e6-8a84-bc52000000ec",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "name": "AttributeName2",
                "type": "long",
                "value": 42
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Инвентаризации.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/57a0bbfb-ad6d-11e6-8a84-bc52000000e7",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata",
    "type": "inventory",
    "mediaType": "application/json"
  },
  "id": "57a0bbfb-ad6d-11e6-8a84-bc52000000e7",
  "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/c4b17cf2-99bb-11e6-8a84-bc520000002a",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/c3cff163-99bb-11e6-8a84-bc5200000002",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-18 12:12:27",
  "name": "newname",
  "externalCode": "6iP5E4LLhpzxRKezcuKE90",
  "moment": "2016-11-18 11:59:00",
  "sum": 1020000,
  "store": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/store/c4eddfc8-99bb-11e6-8a84-bc5200000053",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/organization/c4dee133-99bb-11e6-8a84-bc5200000051",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata/attributes/1f7dbb1b-ad6e-11e6-8a84-bc52000000eb",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "1f7dbb1b-ad6e-11e6-8a84-bc52000000eb",
      "name": "AttributeName1",
      "type": "string",
      "value": "text"
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/metadata/attributes/1f7dc230-ad6e-11e6-8a84-bc52000000ec",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "1f7dc230-ad6e-11e6-8a84-bc52000000ec",
      "name": "AttributeName2",
      "type": "long",
      "value": 42
    }
  ],
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/57a0bbfb-ad6d-11e6-8a84-bc52000000e7/positions",
      "type": "inventoryposition",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Позиции Инвентаризации 
Отдельный ресурс для управления позициями Инвентаризации. С его помощью вы можете управлять позициями большого документа, количество строк в котором превышает лимит на количество строк, сохраняемых вместе с документом. Этот лимит равен 1000. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](../#mojsklad-json-api-obschie-swedeniq-rabota-s-poziciqmi-dokumentow).

### Получить позиции Инвентаризации 
Запрос на получение списка всех позиций данной Инвентаризации.

| Название    | Тип                                                       | Описание                                                           |
| ----------- | :-------------------------------------------------------- | :----------------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                               |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                       |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой позиции Инвентаризации. |

**Параметры**

| Параметр   | Описание                                                                                                                               |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Инвентаризации.                                                 |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить позиции Инвентаризации

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19/positions"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций отдельной Инвентаризации.

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
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19/positions",
    "type": "inventoryposition",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19/positions/201452a2-ad6f-11e6-8a84-bc5200000010",
        "type": "inventoryposition",
        "mediaType": "application/json"
      },
      "id": "201452a2-ad6f-11e6-8a84-bc5200000010",
      "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
      "quantity": 140,
      "price": 5000.0,
      "assortment": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/b6be720e-ad63-11e6-8a84-bc520000008f",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
        }
      },
      "correctionAmount": -60,
      "calculatedQuantity": 200,
      "correctionSum": -300000
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19/positions/20145d98-ad6f-11e6-8a84-bc5200000011",
        "type": "inventoryposition",
        "mediaType": "application/json"
      },
      "id": "20145d98-ad6f-11e6-8a84-bc5200000011",
      "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
      "quantity": 80,
      "price": 4000.0,
      "assortment": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/58948866-ad65-11e6-8a84-bc52000000cf",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
        }
      },
      "correctionAmount": -20,
      "calculatedQuantity": 100,
      "correctionSum": -80000
    }
  ]
}
```

### Создать позицию Инвентаризации 
Запрос на создание новой позиции в Инвентаризации.
Для успешного создания необходимо в теле запроса указать следующие поля:

+ **assortment** - Ссылка на товар/серию/модификацию, которую представляет собой позиция.
Также можно указать поле с именем  **consignment**, **variant** в соответствии с тем,
чем является указанная позиция. Подробнее об этом поле можно прочитать в описании [позиции Инвентаризации](../documents/#dokumenty-inwentarizaciq-inwentarizaciq-pozicii-inwentarizacii)
+ **quantity** - Количество указанной позиции. Должно быть положительным, иначе возникнет ошибка.
Одновременно можно создать как одну так и несколько позиций Инвентаризации. Все созданные данным запросом позиции
будут добавлены к уже существующим.

**Параметры**

| Параметр | Описание                                                                               |
| :------- | :------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Инвентаризации. |

> Пример создания позиций в Инвентаризации.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19/positions"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "meta": {
              "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19/positions/201452a2-ad6f-11e6-8a84-bc5200000010",
              "type": "inventoryposition",
              "mediaType": "application/json"
            },
            "id": "201452a2-ad6f-11e6-8a84-bc5200000010",
            "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
            "quantity": 140,
            "price": 2000.0,
            "assortment": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/b6be720e-ad63-11e6-8a84-bc520000008f",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                "type": "product",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной позиции отдельной Инвентаризации.

```json
[
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19/positions/201452a2-ad6f-11e6-8a84-bc5200000010",
      "type": "inventoryposition",
      "mediaType": "application/json"
    },
    "id": "201452a2-ad6f-11e6-8a84-bc5200000010",
    "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
    "quantity": 140,
    "price": 2000.0,
    "assortment": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/b6be720e-ad63-11e6-8a84-bc520000008f",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
      }
    },
    "correctionAmount": -60,
    "calculatedQuantity": 200,
    "correctionSum": -120000
  }
]
```

### Позиция Инвентаризации

### Получить позицию

**Параметры**

| Параметр       | Описание                                                                               |
| :------------- | :------------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Инвентаризации. |
| **positionID** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b20* id позиции.        |
 
> Запрос на получение отдельной позиции Инвентаризации с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции Инвентаризации.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20",
    "type": "inventoryposition",
    "mediaType": "application/json"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b20",
  "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
  "quantity": 140,
  "price": 5000.0,
  "assortment": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/b6be720e-ad63-11e6-8a84-bc520000008f",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
    }
  },
  "correctionAmount": -60,
  "calculatedQuantity": 200,
  "correctionSum": -300000
}
```

### Изменить позицию 
Запрос на обновление отдельной позиции Инвентаризации. Для обновления позиции нет каких-либо
обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

| Параметр       | Описание                                                                               |
| :------------- | :------------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Инвентаризации. |
| **positionID** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b20* id позиции.        |

> Пример запроса на обновление отдельной позиции в Инвентаризации.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "meta": {
              "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20",
              "type": "inventoryposition",
              "mediaType": "application/json"
            },
            "id": "201452a2-ad6f-11e6-8a84-bc5200000010",
            "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
            "quantity": 45,
            "price": 1000.0,
            "assortment": {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/b6be720e-ad63-11e6-8a84-bc520000008f",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                "type": "product",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции Инвентаризации.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20",
    "type": "inventoryposition",
    "mediaType": "application/json"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b20",
  "accountId": "c3cc7e30-99bb-11e6-8a84-bc5200000001",
  "quantity": 45,
  "price": 1000.0,
  "assortment": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/b6be720e-ad63-11e6-8a84-bc520000008f",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
    }
  },
  "correctionAmount": -155,
  "calculatedQuantity": 200,
  "correctionSum": -155000
}
```

### Удалить позицию

**Параметры**

| Параметр       | Описание                                                                               |
| :------------- | :------------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Инвентаризации. |
| **positionID** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b20* id позиции.        |
 
> Запрос на удаление отдельной позиции Инвентаризации с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/inventory/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление позиции Инвентаризации.
