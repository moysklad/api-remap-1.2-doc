## Внутренний заказ
Средствами JSON API можно создавать и обновлять сведения о Внутренних заказах, запрашивать списки Внутренних заказов и сведения по отдельным Внутренним заказам. Позициями Внутренних заказов можно управлять как в составе отдельного заказа, так и с помощью специальных ресурсов для управления позициями. Кодом сущности для Внутреннего заказа в составе JSON API является ключевое слово **internalorder**.

### Внутренние заказы 
#### Атрибуты сущности

| Название                  | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                                        |
| ------------------------- |:----------------------------------------------------------| :------------------------------------------------------------------------------------------------------------------------------------------------ |:------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**             | UUID                                                      | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                            |
| **applicable**            | Boolean                                                   | `=` `!=`                                                                                                                                          | Отметка о проведении<br>`+Обязательное при ответе`                                                                                              |
| **attributes**            | Array(Object)                                             | [Операторы доп. полей](#/general#4-filtraciya-po-dopolnitelnym-polyam) | Коллекция метаданных доп. полей. [Поля объекта](#/general#3-rabota-s-dopolnitelnymi-polyami)<br>`+Только для чтения` |
| **code**                  | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Код Внутреннего заказа                                                                                                                          |
| **created**               | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата создания<br>`+Обязательное при ответе` `+Только для чтения`                                                                                |
| **deleted**               | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего удаления Внутреннего заказа<br>`+Только для чтения`                                                                           |
| **deliveryPlannedMoment** | DateTime                                                  |                                                                                                                                                   | Планируемая дата приемки                                                                                                                        |
| **description**           | String(4096)                                              | `=` `!=` `~` `~=` `=~`                                                                                                                            | Комментарий Внутреннего заказа                                                                                                                  |
| **externalCode**          | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код Внутреннего заказа<br>`+Обязательное при ответе`                                                                                    |
| **files**                 | MetaArray                                                 |                                                                                                                                                   | Метаданные массива [Файлов](#/dictionaries/files#2-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand`   |
| **group**                 | [Meta](#/general#3-metadannye)                            | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                        |
| **id**                    | UUID                                                      | `=` `!=`                                                                                                                                          | ID Внутреннего заказа<br>`+Обязательное при ответе` `+Только для чтения`                                                                        |
| **meta**                  | [Meta](#/general#3-metadannye)                            |                                                                                                                                                   | Метаданные Внутреннего заказа<br>`+Обязательное при ответе` `+Только для чтения`                                                                |
| **moment**                | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата документа<br>`+Обязательное при ответе`                                                                                                    |
| **moves**                 | Array(Object)                                             |                                                                                                                                                   | Коллекция метаданных на связанные заказы перемещения<br>`+Обязательное при ответе`                                                              |
| **name**                  | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование Внутреннего заказа<br>`+Обязательное при ответе` `+Необходимо при создании`                                                        |
| **organization**          | [Meta](#/general#3-metadannye)                            | `=` `!=`                                                                                                                                          | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                            |
| **owner**                 | [Meta](#/general#3-metadannye)                            | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Expand`                                                                                                               |
| **positions**             | MetaArray                                                 |                                                                                                                                                   | Метаданные позиций Внутреннего заказа<br>`+Обязательное при ответе` `+Только для чтения` `+Expand`                                              |
| **printed**               | Boolean                                                   | `=` `!=`                                                                                                                                          | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                        |
| **project**               | [Meta](#/general#3-metadannye)                            | `=` `!=`                                                                                                                                          | Метаданные проекта<br>`+Expand`                                                                                                                 |
| **published**             | Boolean                                                   | `=` `!=`                                                                                                                                          | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                      |
| **purchaseOrders**        | Array(Object)                                             |                                                                                                                                                   | Коллекция метаданных на связанные заказы поставщику<br>`+Обязательное при ответе`                                                               |
| **rate**                  | Object                                                    |                                                                                                                                                   | Валюта. [Подробнее тут](#/documents/common-info#3-valyuta-v-dokumentah)<br>`+Обязательное при ответе`                             |
| **shared**                | Boolean                                                   | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе` `+Только для чтения`                                                                                 |
| **state**                 | [Meta](#/general#3-metadannye)                            | `=` `!=`                                                                                                                                          | Метаданные статуса Внутреннего заказа<br>`+Expand`                                                                                              |
| **store**                 | [Meta](#/general#3-metadannye)                            |                                                                                                                                                   | Метаданные склада<br>`+Expand`                                                                                                                  |
| **sum**                   | Float                                                     | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Сумма Внутреннего заказа в копейках<br>`+Обязательное при ответе` `+Только для чтения`                                                          |
| **syncId**                | UUID                                                      | `=` `!=`                                                                                                                                          | ID синхронизации. После заполнения недоступен для изменения<br>`+Только для чтения`                                                             |
| **updated**               | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления Внутреннего заказа<br>`+Обязательное при ответе` `+Только для чтения`                                              |
| **vatEnabled**            | Boolean                                                   |                                                                                                                                                   | Учитывается ли НДС<br>`+Обязательное при ответе`                                                                                                |
| **vatIncluded**           | Boolean                                                   |                                                                                                                                                   | Включен ли НДС в цену                                                                                                                           |
| **vatSum**                | Float                                                     |                                                                                                                                                   | Сумма НДС<br>`+Обязательное при ответе` `+Только для чтения`                                                                                    |

#### Позиции Внутреннего заказа
Позиции Внутреннего заказа - это список товаров/услуг/модификаций/серий.
Объект позиции Внутреннего заказа содержит следующие поля:

| Название       | Тип                                                       | Описание                                                                                                                                                                                                                                                 |
| -------------- |:----------------------------------------------------------| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **accountId**  | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                     |
| **assortment** | [Meta](#/general#3-metadannye) | Метаданные товара/услуги/серии/модификации, которую представляет собой позиция<br>`+Обязательное при ответе` `+Expand`                                                                                                                                   |
| **id**         | UUID                                                      | ID позиции<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                            |
| **pack**       | Object                                                    | Упаковка Товара. [Подробнее тут](#/dictionaries/product#5-upakovki-tovara)                                                                                                                               |
| **price**      | Float                                                     | Цена товара/услуги в копейках<br>`+Обязательное при ответе`                                                                                                                                                                                              |
| **quantity**   | Float                                                     | Количество товаров/услуг данного вида в позиции. Если позиция - товар, у которого включен учет по серийным номерам, то значение в этом поле всегда будет равно количеству серийных номеров для данной позиции в документе.<br>`+Обязательное при ответе` |
| **vat**        | Int                                                       | НДС, которым облагается текущая позиция<br>`+Обязательное при ответе`                                                                                                                                                                                    |
| **vatEnabled** | Boolean                                                   | Включен ли НДС для позиции. С помощью этого флага для позиции можно выставлять НДС = 0 или НДС = "без НДС". (vat = 0, vatEnabled = false) -> vat = "без НДС", (vat = 0, vatEnabled = true) -> vat = 0%.<br>`+Обязательное при ответе`                    |

С позициями можно работать с помощью [специальных ресурсов для управления позициями Внутреннего заказа](#/documents/internalOrder#3-poluchit-vnutrennie-zakazy),
а также в составе отдельного Внутреннего заказа. При работе в составе отдельного Внутреннего заказа,
вы можете отправлять запросы на создание отдельного Внутреннего заказа с включенным в тело запроса
массивом позиций Внутреннего заказа. Если количество позиций превышает максимально допустимое, то для
дальнейшего пополнения позиций нужно будет работать со специальным ресурсом "Позиции Внутреннего заказа".
Также, при работе в составе отдельного Внутреннего заказа, можно отправлять запросы на обновление списка позиций
с включенным в тело запроса массивом позиций Внутреннего заказа. При этом важно помнить, что коллекция позиций будет
восприниматься как "все позиции Внутреннего заказа" и полностью заменит уже существующую коллекцию при обновлении объекта - лишние
позиции будут удалены, новые добавлены, существующие - изменены.

О работе с доп. полями Внутренних заказов можно прочитать [здесь](#/general#3-rabota-s-dopolnitelnymi-polyami)

#### Связи с другими документами

| Название            | Описание                                                                                                               |
|---------------------|:-----------------------------------------------------------------------------------------------------------------------|
| **purchaseOrder**   | Ссылка на Заказ Поставщика, с которым связан этот Внутренний заказ в формате [Метаданных](#/general#3-metadannye)      |
| **move**            | Ссылка на Перемещение, с которой связан этот Внутренний заказ в формате [Метаданных](#/general#3-metadannye)           |
| **processingOrder** | Ссылка на Заказ на производство, с которым связан этот Внутренний заказ в формате [Метаданных](#/general#3-metadannye) |
| **productionTasks** | Массив ссылок на связанные производственные задания в формате [Метаданных](#/general#3-metadannye)                     |

### Получить Внутренние заказы 

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |

> Получить Внутренние заказы

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/internalorder" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Внутренних заказов.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata",
    "type": "internalorder",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/31d58bde-b2fd-11e6-8a84-bae500000068",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata",
        "type": "internalorder",
        "mediaType": "application/json"
      },
      "id": "31d58bde-b2fd-11e6-8a84-bae500000068",
      "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-25 13:52:01",
      "name": "00002",
      "description": "Комментарий",
      "externalCode": "00KNqzWbjDRhZ1A0411hS2",
      "moment": "2016-11-25 13:50:00",
      "applicable": true,
      "printed": true,
      "published": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        },
        "value": 1
      },
      "sum": 0,
      "store": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "project": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "state": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/states/f804ff3d-b2fc-11e6-8a84-bae500000065",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "positions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/31d58bde-b2fd-11e6-8a84-bae500000068/positions",
          "type": "internalorderposition",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "vatEnabled": true,
      "vatIncluded": true,
      "vatSum": 0,
      "deliveryPlannedMoment": "2016-11-30 13:50:00"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/64e426af-b0d8-11e6-8a84-bae500000064",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata",
        "type": "internalorder",
        "mediaType": "application/json"
      },
      "id": "64e426af-b0d8-11e6-8a84-bae500000064",
      "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-22 21:04:24",
      "name": "00001",
      "externalCode": "80QQopc4h8yBc0LnmTPpT3",
      "moment": "2016-11-22 20:23:00",
      "applicable": true,
      "printed": true,
      "published": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "sum": 0,
      "store": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "project": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "positions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/64e426af-b0d8-11e6-8a84-bae500000064/positions",
          "type": "internalorderposition",
          "mediaType": "application/json",
          "size": 5,
          "limit": 1000,
          "offset": 0
        }
      },
      "vatEnabled": true,
      "vatIncluded": true,
      "vatSum": 0,
      "moves": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/move/a3b68a79-b0dc-11e6-8a84-bae5000000cd",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/move/metadata",
            "type": "move",
            "mediaType": "application/json"
          }
        }
      ]
    }
  ]
}
```

### Создать Внутренний заказ 
Запрос на создание нового Внутреннего заказа.
Обязательные для создания поля:

+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](#/general#3-metadannye)

> Пример создания нового Внутреннего заказа.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/internalorder" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "owner": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "type": "employee",
                "mediaType": "application/json"
              }
            },
            "shared": false,
            "group": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
                "type": "group",
                "mediaType": "application/json"
              }
            },
            "name": "000222",
            "description": "Мой Комментарий",
            "externalCode": "00KNqzWbjDRhZ1A0411ss1231hS2",
            "moment": "2016-11-25 13:52:00",
            "applicable": true,
            "rate": {
              "currency": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                  "type": "currency",
                  "mediaType": "application/json"
                }
              },
              "value": 1
            },
            "sum": 0,
            "store": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "project": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
                "type": "project",
                "mediaType": "application/json"
              }
            },
            "organization": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "state": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/states/f804ff3d-b2fc-11e6-8a84-bae500000065",
                "type": "state",
                "mediaType": "application/json"
              }
            },
            "positions": [
              {
                "quantity": 1,
                "price": 0.0,
                "discount": 0,
                "vat": 0,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/fc635ded-acf7-11e6-8a84-bae500000075",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                    "type": "variant",
                    "mediaType": "application/json"
                  }
                }
              },
              {
                "quantity": 1,
                "price": 0.0,
                "discount": 0,
                "vat": 0,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              }
            ],
            "vatEnabled": true,
            "vatIncluded": true,
            "vatSum": 0,
            "deliveryPlannedMoment": "2016-11-30 13:50:00"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Внутреннего заказа.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/eb75f6b8-b2ff-11e6-8a84-bae500000000",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata",
    "type": "internalorder",
    "mediaType": "application/json"
  },
  "id": "eb75f6b8-b2ff-11e6-8a84-bae500000000",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-25 14:11:31",
  "name": "000222",
  "description": "Мой Комментарий",
  "externalCode": "00KNqzWbjDRhZ1A0411ss1231hS2",
  "moment": "2016-11-25 13:52:00",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    },
    "value": 63.45
  },
  "sum": 0,
  "store": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "project": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/states/f804ff3d-b2fc-11e6-8a84-bae500000065",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/eb75f6b8-b2ff-11e6-8a84-bae500000000/positions",
      "type": "internalorderposition",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "vatEnabled": true,
  "vatIncluded": true,
  "vatSum": 0,
  "deliveryPlannedMoment": "2016-11-30 13:50:00"
}
```

### Шаблон Внутреннего заказа 
Запрос на получение шаблона Внутреннего заказа.

> Пример создания нового Внутреннего заказа.

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/new" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d ''  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного шаблона Внутреннего заказа.

```json
{
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2016-11-25 14:59:18",
  "applicable": true,
  "printed": true,
  "published": true,
  "sum": 0,
  "store": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "project": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/states/f804ff3d-b2fc-11e6-8a84-bae500000065",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "positions": {
    "rows": []
  },
  "vatEnabled": true,
  "vatIncluded": true
}

```

### Массовое создание и обновление Внутренних заказов 
[Массовое создание и обновление](#/general#3-sozdanie-i-obnovlenie-neskolkih-obuektov) Внутренних заказов.
В теле запроса нужно передать массив, содержащий JSON представления Внутренних заказов, которые вы хотите создать или обновить.
Обновляемые Внутренние заказы должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Внутренних заказов

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/new" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '[
            {
              "owner": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                  "type": "employee",
                  "mediaType": "application/json"
                }
              },
              "shared": false,
              "group": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
                  "type": "group",
                  "mediaType": "application/json"
                }
              },
              "name": "000222",
              "description": "Мой Комментарий",
              "externalCode": "00KNqzWbjDRhZ1A0411ss1231hS2",
              "moment": "2016-11-25 13:52:00",
              "applicable": true,
              "rate": {
                "currency": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json"
                  }
                },
                "value": 1
              },
              "sum": 0,
              "store": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type": "store",
                  "mediaType": "application/json"
                }
              },
              "project": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
                  "type": "project",
                  "mediaType": "application/json"
                }
              },
              "organization": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "state": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/states/f804ff3d-b2fc-11e6-8a84-bae500000065",
                  "type": "state",
                  "mediaType": "application/json"
                }
              },
              "positions": [
                {
                  "quantity": 1,
                  "price": 0.0,
                  "discount": 0,
                  "vat": 0,
                  "assortment": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/fc635ded-acf7-11e6-8a84-bae500000075",
                      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                      "type": "variant",
                      "mediaType": "application/json"
                    }
                  }
                },
                {
                  "quantity": 1,
                  "price": 0.0,
                  "discount": 0,
                  "vat": 0,
                  "assortment": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
                      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  }
                }
              ],
              "vatEnabled": true,
              "vatIncluded": true,
              "vatSum": 0,
              "deliveryPlannedMoment": "2016-11-30 13:50:00"
            },
            {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/64e426af-b0d8-11e6-8a84-bae500000064",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata",
                "type": "internalorder",
                "mediaType": "application/json"
              },
              "owner": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                  "type": "employee",
                  "mediaType": "application/json"
                }
              },
              "shared": true,
              "group": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
                  "type": "group",
                  "mediaType": "application/json"
                }
              },
              "name": "700222",
              "description": "Мой обновленный Комментарий",
              "externalCode": "00KNqzWbjDRhZ1A0411ss1231hS2",
              "moment": "2016-11-25 13:52:00",
              "applicable": true,
              "rate": {
                "currency": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json"
                  }
                },
                "value": 1
              },
              "store": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type": "store",
                  "mediaType": "application/json"
                }
              },
              "project": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
                  "type": "project",
                  "mediaType": "application/json"
                }
              },
              "organization": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "state": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/states/f804ff3d-b2fc-11e6-8a84-bae500000065",
                  "type": "state",
                  "mediaType": "application/json"
                }
              },
              "positions": [
                {
                  "quantity": 1,
                  "price": 2230.0,
                  "discount": 0,
                  "vat": 0,
                  "assortment": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
                      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  }
                }
              ],
              "vatEnabled": true,
              "vatIncluded": true,
              "vatSum": 0,
              "deliveryPlannedMoment": "2016-12-30 13:52:00"
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Внутренних заказов.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/eb75f6b8-b2ff-11e6-8a84-bae500000000",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata",
      "type": "internalorder",
      "mediaType": "application/json"
    },
    "id": "eb75f6b8-b2ff-11e6-8a84-bae500000000",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-11-25 14:11:31",
    "name": "000222",
    "description": "Мой Комментарий",
    "externalCode": "00KNqzWbjDRhZ1A0411ss1231hS2",
    "moment": "2016-11-25 13:52:00",
    "applicable": true,
    "rate": {
      "currency": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      },
      "value": 63.45
    },
    "sum": 0,
    "store": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "project": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
        "type": "project",
        "mediaType": "application/json"
      }
    },
    "organization": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "state": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/states/f804ff3d-b2fc-11e6-8a84-bae500000065",
        "type": "state",
        "mediaType": "application/json"
      }
    },
    "created": "2007-02-07 17:16:41",
    "printed": true,
    "published": true,
    "positions": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/eb75f6b8-b2ff-11e6-8a84-bae500000000/positions",
        "type": "internalorderposition",
        "mediaType": "application/json",
        "size": 2,
        "limit": 1000,
        "offset": 0
      }
    },
    "vatEnabled": true,
    "vatIncluded": true,
    "vatSum": 0,
    "deliveryPlannedMoment": "2016-11-30 13:50:00"
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/64e426af-b0d8-11e6-8a84-bae500000064",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata",
      "type": "internalorder",
      "mediaType": "application/json"
    },
    "id": "64e426af-b0d8-11e6-8a84-bae500000064",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-11-25 14:48:02",
    "name": "700222",
    "description": "Мой обновленный Комментарий",
    "externalCode": "00KNqzWbjDRhZ1A0411ss1231hS2",
    "moment": "2016-11-25 13:52:00",
    "applicable": true,
    "rate": {
      "currency": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      },
      "value": 63.45
    },
    "sum": 2230,
    "store": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "project": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
        "type": "project",
        "mediaType": "application/json"
      }
    },
    "organization": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "state": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/states/f804ff3d-b2fc-11e6-8a84-bae500000065",
        "type": "state",
        "mediaType": "application/json"
      }
    },
    "created": "2007-02-07 17:16:41",
    "printed": true,
    "published": true,
    "positions": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/64e426af-b0d8-11e6-8a84-bae500000064/positions",
        "type": "internalorderposition",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
      }
    },
    "vatEnabled": true,
    "vatIncluded": true,
    "vatSum": 0,
    "deliveryPlannedMoment": "2016-12-30 13:52:00",
    "moves": [
      {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/move/a3b68a79-b0dc-11e6-8a84-bae5000000cd",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/move/metadata",
          "type": "move",
          "mediaType": "application/json"
        }
      }
    ]
  }
]
```

### Удалить Внутренний заказ

**Параметры**

| Параметр | Описание                                                                                   |
| :------- | :----------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Внутреннего заказа. |
 
> Запрос на удаление Внутреннего заказа с указанным id.

```shell
curl --compressed -X DELETE \
  "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b1" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление Внутреннего заказа.

### Массовое удаление Внутренних заказов

В теле запроса нужно передать массив, содержащий JSON метаданных Внутренних заказов, которые вы хотите удалить.


> Запрос на массовое удаление Внутренних заказов. 

```shell
curl --compressed -X POST \
  "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/delete" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -d '[
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b1",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata",
                "type": "internalorder",
                "mediaType": "application/json"
            }
        },
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b2",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata",
                "type": "internalorder",
                "mediaType": "application/json"
            }
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Внутренних заказов.

```json
[
  {
    "info":"Сущность 'internalorder' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'internalorder' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
``` 

### Метаданные Внутренних заказов 
Запрос на получение метаданных Внутренних заказов. Результат - объект JSON, включающий в себя:

| Параметр                       | Описание                                                                                                                |
| ------------------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| **meta**                       | Ссылка на метаданные Внутренних заказов                                                                                 |
| **attributes**                 | Массив объектов доп. полей Внутренних заказов в формате [Метаданных](#/general#3-metadannye) |
| **states**                     | Массив статусов Внутренних заказов                                                                                      |
| **createShared**               | создавать новые Внутренние заказы с меткой "Общий"                                                                      |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](#/general#3-rabota-s-dopolnitelnymi-polyami).

> Метаданные Внутренних заказов

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление метаданных Внутренних заказов.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/attributes/68d142e7-b300-11e6-8a84-bae50000008b",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "68d142e7-b300-11e6-8a84-bae50000008b",
      "name": "Доп поле внут заказа",
      "type": "string",
      "required": false
    }
  ],
  "states": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/states/f804ff3d-b2fc-11e6-8a84-bae500000065",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "f804ff3d-b2fc-11e6-8a84-bae500000065",
      "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
      "name": "OMG",
      "color": 10066329,
      "stateType": "Regular",
      "entityType": "internalorder"
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
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/attributes/68d142e7-b300-11e6-8a84-bae50000008b",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "68d142e7-b300-11e6-8a84-bae50000008b",
  "name": "Доп поле внут заказа",
  "type": "string",
  "required": false
}
```

### Запросы - Внутренний заказ 

### Получить Внутренний заказ

**Параметры**

| Параметр | Описание                                                                                   |
| :------- | :----------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Внутреннего заказа. |
 
> Запрос на получение отдельного Внутреннего заказа с указанным id.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Внутреннего заказа.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/31d58bde-b2fd-11e6-8a84-bae500000068",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata",
    "type": "internalorder",
    "mediaType": "application/json"
  },
  "id": "31d58bde-b2fd-11e6-8a84-bae500000068",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-25 13:52:01",
  "name": "00002",
  "description": "Комментарий",
  "externalCode": "00KNqzWbjDRhZ1A0411hS2",
  "moment": "2016-11-25 13:50:00",
  "applicable": true,
  "printed": true,
  "published": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    },
    "value": 1
  },
  "sum": 0,
  "store": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "project": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/states/f804ff3d-b2fc-11e6-8a84-bae500000065",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/31d58bde-b2fd-11e6-8a84-bae500000068/positions",
      "type": "internalorderposition",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "vatEnabled": true,
  "vatIncluded": true,
  "vatSum": 0,
  "deliveryPlannedMoment": "2016-11-30 13:50:00",
  "moves": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/move/3aa6f577-b2ff-11e6-8a84-bae500000070",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/move/metadata",
        "type": "move",
        "mediaType": "application/json"
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/move/3fe38e12-b2ff-11e6-8a84-bae500000077",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/move/metadata",
        "type": "move",
        "mediaType": "application/json"
      }
    }
  ],
  "purchaseOrders": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/purchaseorder/4a29b74e-b2ff-11e6-8a84-bae500000084",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/purchaseorder/metadata",
        "type": "purchaseorder",
        "mediaType": "application/json"
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/purchaseorder/45353c47-b2ff-11e6-8a84-bae50000007e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/purchaseorder/metadata",
        "type": "purchaseorder",
        "mediaType": "application/json"
      }
    }
  ]
}
```

### Изменить Внутренний заказ 
Запрос на обновление Внутреннего заказа с указанным id.

**Параметры**

| Параметр | Описание                                                                                   |
| :------- | :----------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Внутреннего заказа. |

> Пример запроса на обновление отдельного Внутреннего заказа.

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "owner": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "type": "employee",
                "mediaType": "application/json"
              }
            },
            "shared": true,
            "group": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
                "type": "group",
                "mediaType": "application/json"
              }
            },
            "name": "700222",
            "description": "Мой обновленный Комментарий",
            "externalCode": "00KNqzWbjDRhZ1A0411ss1231hS2",
            "moment": "2016-11-25 13:52:00",
            "applicable": true,
            "rate": {
              "currency": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                  "type": "currency",
                  "mediaType": "application/json"
                }
              },
              "value": 1
            },
            "store": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "project": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
                "type": "project",
                "mediaType": "application/json"
              }
            },
            "organization": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "state": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/states/f804ff3d-b2fc-11e6-8a84-bae500000065",
                "type": "state",
                "mediaType": "application/json"
              }
            },
            "positions": [
              {
                "quantity": 1,
                "price": 2230.0,
                "discount": 0,
                "vat": 0,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              }
            ],
            "vatEnabled": true,
            "vatIncluded": true,
            "vatSum": 0,
            "deliveryPlannedMoment": "2016-12-30 13:52:00"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Внутреннего заказа.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/64e426af-b0d8-11e6-8a84-bae500000064",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata",
    "type": "internalorder",
    "mediaType": "application/json"
  },
  "id": "64e426af-b0d8-11e6-8a84-bae500000064",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-25 14:48:02",
  "name": "700222",
  "description": "Мой обновленный Комментарий",
  "externalCode": "00KNqzWbjDRhZ1A0411ss1231hS2",
  "moment": "2016-11-25 13:52:00",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/b942e6f2-9128-11e6-8a84-bae500000058",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    },
    "value": 63.45
  },
  "sum": 2230,
  "store": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "project": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/metadata/states/f804ff3d-b2fc-11e6-8a84-bae500000065",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/64e426af-b0d8-11e6-8a84-bae500000064/positions",
      "type": "internalorderposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "vatEnabled": true,
  "vatIncluded": true,
  "vatSum": 0,
  "deliveryPlannedMoment": "2016-12-30 13:52:00",
  "moves": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/move/a3b68a79-b0dc-11e6-8a84-bae5000000cd",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/move/metadata",
        "type": "move",
        "mediaType": "application/json"
      }
    }
  ]
}
```

### Управление позициями Внутреннего заказа 
Отдельный ресурс для управления позициями Внутреннего заказа. С его помощью вы можете управлять позициями большого документа, количество строк в котором превышает 1000. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](#/general#3-rabota-s-poziciyami-dokumentov).

### Получить позиции Внутреннего заказа 
Запрос на получение списка всех позиций данного Внутреннего заказа.

| Название    | Тип                                                       | Описание                                                               |
| ----------- | :-------------------------------------------------------- | :--------------------------------------------------------------------- |
| **meta**    | [Meta](#/general#3-metadannye) | Метаданные о выдаче,                                                   |
| **context** | [Meta](#/general#3-metadannye) | Метаданные о сотруднике, выполнившем запрос.                           |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой позиции Внутреннего заказа. |

**Параметры**

| Параметр   | Описание                                                                                                                               |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Внутреннего заказа.                                             |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search** | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |

> Получить позиции Внутреннего заказа

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19/positions" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций отдельного Внутреннего заказа.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19/positions",
    "type": "internalorderposition",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19/positions/05379d42-b305-11e6-8a84-bae500000008",
        "type": "internalorderposition",
        "mediaType": "application/json"
      },
      "id": "05379d42-b305-11e6-8a84-bae500000008",
      "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
      "quantity": 1,
      "price": 2230.0,
      "vat": 0,
      "vatEnabled": false,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3bb1af6c-2842-11e9-ac12-000c00000061"
        }
      }
    }
  ]
}
```

### Создать позиции Внутреннего заказа 
Запрос на создание новой позиции во Внутреннем заказе.
Для успешного создания необходимо в теле запроса указать следующие поля:

+ **assortment** - Ссылка на товар/услугу/серию/модификацию, которую представляет собой позиция.
Подробнее об этом поле можно прочитать в описании [позиции Внутреннего заказа](#/documents/internalOrder#4-pozicii-vnutrennego-zakaza)
+ **quantity** - Количество указанной позиции. Должно быть положительным, иначе возникнет ошибка.
Одновременно можно создать как одну так и несколько позиций Внутреннего заказа. Все созданные данным запросом позиции
будут добавлены к уже существующим.

**Параметры**

| Параметр | Описание                                                                                   |
| :------- | :----------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Внутреннего заказа. |

> Пример создания позиций во Внутреннем заказе.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19/positions" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '[
            {
              "quantity": 1,
              "price": 100.0,
              "vat": 10,
              "assortment": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              }
            },
            {
              "quantity": 12,
              "price": 200.0,
              "vat": 18,
              "assortment": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              }
            },
            {
              "quantity": 3,
              "price": 2230.0,
              "vat": 0,
              "assortment": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              }
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной позиции отдельного Внутреннего заказа.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19/positions/705ff11b-b305-11e6-8a84-bae50000000c",
      "type": "internalorderposition",
      "mediaType": "application/json"
    },
    "id": "705ff11b-b305-11e6-8a84-bae50000000c",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "quantity": 1,
    "price": 100.0,
    "vat": 10,
    "vatEnabled": true,
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3bb1af6c-2842-11e9-ac12-000c00000061"
      }
    }
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19/positions/705ffca0-b305-11e6-8a84-bae50000000d",
      "type": "internalorderposition",
      "mediaType": "application/json"
    },
    "id": "705ffca0-b305-11e6-8a84-bae50000000d",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "quantity": 12,
    "price": 200.0,
    "vat": 18,
    "vatEnabled": true,
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
      }
    }
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19/positions/706006cd-b305-11e6-8a84-bae50000000e",
      "type": "internalorderposition",
      "mediaType": "application/json"
    },
    "id": "706006cd-b305-11e6-8a84-bae50000000e",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "quantity": 3,
    "price": 2230.0,
    "vat": 0,
    "vatEnabled": false,
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
      }
    }
  }
]

```


### Позиция Внутреннего заказа 

### Получить позицию 

**Параметры**

| Параметр       | Описание                                                                                           |
| :------------- | :------------------------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Внутреннего заказа.         |
| **positionID** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b20* id позиции Внутреннего заказа. |

> Запрос на получение отдельной позиции Внутреннего заказа с указанным id.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции Внутреннего заказа.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20",
    "type": "internalorderposition",
    "mediaType": "application/json"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b20",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "quantity": 12,
  "price": 200.0,
  "vat": 18,
  "vatEnabled": true,
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
    }
  }
}
```

### Изменить позицию 
Запрос на обновление отдельной позиции Внутреннего заказа.

**Параметры**

| Параметр       | Описание                                                                                           |
| :------------- | :------------------------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Внутреннего заказа.         |
| **positionID** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b20* id позиции Внутреннего заказа. |

> Пример запроса на обновление отдельной позиции во Внутреннем заказе.

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "quantity": 2,
            "price": 500.0,
            "vat": 18,
            "assortment": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                "type": "product",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции заказа.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20",
    "type": "internalorderposition",
    "mediaType": "application/json"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b20",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "quantity": 2,
  "price": 500.0,
  "vat": 18,
  "vatEnabled": true,
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/f4ac4460-acf7-11e6-8a84-bae500000068",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
    }
  }
}
```


### Удалить позицию

**Параметры**

| Параметр       | Описание                                                                                           |
| :------------- | :------------------------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Внутреннего заказа.         |
| **positionID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции Внутреннего заказа. |

> Запрос на удаление позиции Внутреннего заказа с указанным id.

```shell
curl --compressed -X DELETE \
  "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление позиции Внутреннего заказа.


### Массовое удаление позиций

**Параметры**

| Параметр       | Описание                                                                                           |
| :------------- |:---------------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 7623cd58-684d-11ee-ac12-000c0000009e* id Внутреннего заказа.         |

> Запрос на массовое удаление позиций Внутреннего заказа.

```shell
curl --compressed -X POST \
  "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/7623cd58-684d-11ee-ac12-000c0000009e/positions/delete" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -d '[
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/7623cd58-684d-11ee-ac12-000c0000009e/positions/7fce2da5-684d-11ee-ac12-000c000000a2",
            "type": "internalorderposition",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/internalorder/7623cd58-684d-11ee-ac12-000c0000009e/positions/7fce37a5-684d-11ee-ac12-000c000000a3",
            "type": "internalorderposition",
            "mediaType": "application/json"
          }
        }
      ]'  
```

> Response 200 (application/json)
Успешное удаление позиций Внутреннего заказа.
