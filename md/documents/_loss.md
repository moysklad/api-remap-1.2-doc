## Списание
Средствами JSON API можно создавать и обновлять сведения о Списаниях, запрашивать списки Списаний и сведения по отдельным Списаниям. Позициями Списаний можно управлять как в составе отдельного Списания, так и отдельно - с помощью специальных ресурсов для управления позициями Списания. Кодом сущности для Списания в составе JSON API является ключевое слово **loss**. Больше о Списаниях можно прочитать [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203053096-%D0%A1%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B8-%D0%BE%D0%BF%D1%80%D0%B8%D1%85%D0%BE%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2).
### Списания 
#### Атрибуты сущности

| Название         | Тип                               | Фильтрация                                                                                                                                        | Описание                                                                                                                                      |
| ---------------- |:----------------------------------| :------------------------------------------------------------------------------------------------------------------------------------------------ |:----------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**    | UUID                              | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения` `+Change-handler`                                                        |
| **applicable**   | Boolean                           | `=` `!=`                                                                                                                                          | Отметка о проведении<br>`+Обязательное при ответе` `+Change-handler`                                                                          |
| **attributes**   | Array(Object)                     | [Операторы доп. полей](#/general#4-filtraciya-po-dopolnitelnym-polyam) | Коллекция метаданных доп. полей. [Поля объекта](#/general#3-rabota-s-dopolnitelnymi-polyami)<br> `+Change-handler` |
| **code**         | String(255)                       | `=` `!=` `~` `~=` `=~`                                                                                                                            | Код Списания                                                                                                                                  |
| **created**      | DateTime                          | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата создания<br>`+Обязательное при ответе` `+Только для чтения` `+Change-handler`                                                            |
| **deleted**      | DateTime                          | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего удаления Списания<br>`+Только для чтения`                                                                                   |
| **description**  | String(4096)                      | `=` `!=` `~` `~=` `=~`                                                                                                                            | Комментарий Списания<br>`+Change-handler`                                                                                                     |
| **externalCode** | String(255)                       | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код Списания<br>`+Обязательное при ответе` `+Change-handler`                                                                          |
| **files**        | MetaArray                         |                                                                                                                                                   | Метаданные массива [Файлов](#/dictionaries/files#2-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand` |
| **group**        | [Meta](#/general#3-metadannye)    | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                      |
| **id**           | UUID                              | `=` `!=`                                                                                                                                          | ID Списания<br>`+Обязательное при ответе` `+Только для чтения` `+Change-handler`                                                              |
| **meta**         | [Meta](#/general#3-metadannye)    |                                                                                                                                                   | Метаданные Списания<br>`+Обязательное при ответе` `+Change-handler`                                                                           |
| **moment**       | DateTime                          | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата документа<br>`+Обязательное при ответе` `+Change-handler`                                                                                |
| **name**         | String(255)                       | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование Списания<br>`+Обязательное при ответе` `+Change-handler`                                                                         |
| **organization** | [Meta](#/general#3-metadannye)    | `=` `!=`                                                                                                                                          | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании` `+Change-handler`                                        |
| **owner**        | [Meta](#/general#3-metadannye)    | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Expand`                                                                                                             |
| **positions**    | MetaArray                         |                                                                                                                                                   | Метаданные позиций Списания<br>`+Обязательное при ответе` `+Expand` `+Change-handler`                                                         |
| **printed**      | Boolean                           | `=` `!=`                                                                                                                                          | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                      |
| **project**      | [Meta](#/general#3-metadannye)    | `=` `!=`                                                                                                                                          | Метаданные проекта<br>`+Expand` `+Change-handler`                                                                                             |
| **published**    | Boolean                           | `=` `!=`                                                                                                                                          | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                    |
| **rate**         | Object                            |                                                                                                                                                   | Валюта. [Подробнее тут](#/documents/common-info#3-valyuta-v-dokumentah)<br>`+Обязательное при ответе` `+Change-handler`         |
| **shared**       | Boolean                           | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе`                                                                                                    |
| **state**        | [Meta](#/general#3-metadannye)    | `=` `!=`                                                                                                                                          | Метаданные статуса Списания<br>`+Expand` `+Change-handler`                                                                                    |
| **store**        | [Meta](#/general#3-metadannye)    | `=` `!=`                                                                                                                                          | Метаданные склада<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании` `+Change-handler`                                        |
| **sum**          | Float                             | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Сумма Списания в копейках<br>`+Обязательное при ответе` `+Только для чтения` `+Change-handler`                                                |
| **syncId**       | UUID                              | `=` `!=`                                                                                                                                          | ID синхронизации. После заполнения недоступен для изменения                                                                                   |
| **updated**      | DateTime                          | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления Списания<br>`+Обязательное при ответе` `+Только для чтения` `+Change-handler`                                    |

#### Связи с другими документами

| Название                       | Описание                                                                                                                      |
| ------------------------------ | :---------------------------------------------------------------------------------------------------------------------------- |
| **salesReturn**                | Ссылка на связанный со списанием возврат покупателя в формате [Метаданных](#/general#3-metadannye) |
| **inventory**                  | Ссылка на связанную со списанием инвентаризацию в формате [Метаданных](#/general#3-metadannye)     |


#### Позиции Списания
Позиции Списания - это список товаров/модификаций/серий.
Объект позиции Списания содержит следующие поля:

| Название       | Тип                                                       | Описание                                                                                                                                                                                                                                                 |
| -------------- |:----------------------------------------------------------| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **accountId**  | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения` `+Change-handler`                                                                                                                                                                                   |
| **assortment** | [Meta](#/general#3-metadannye) | Метаданные товара/услуги/серии/модификации, которую представляет собой позиция<br>`+Обязательное при ответе` `+Expand` `+Change-handler`                                                                                                                                  |
| **declaration**| Array(Object)                                             | Информация о прослеживаемости импортных товаров. [Подробнее тут](#/documents/loss#4-informaciya-o-proslezhivaemosti-importnyh-tovarov)<br>`+Выводится по запросу` `+Только для чтения`                                                             |
| **id**         | UUID                                                      | ID позиции<br>`+Обязательное при ответе` `+Только для чтения` `+Change-handler`                                                                                                                                                                                           |
| **pack**       | Object                                                    | Упаковка Товара. [Подробнее тут](#/dictionaries/product#5-upakovki-tovara)<br>`+Change-handler`                                                                                                                               |
| **price**      | Float                                                     | Цена товара/услуги в копейках<br>`+Обязательное при ответе` `+Change-handler`                                                                                                                                                                                             |
| **quantity**   | Float                                                     | Количество товаров/услуг данного вида в позиции. Если позиция - товар, у которого включен учет по серийным номерам, то значение в этом поле всегда будет равно количеству серийных номеров для данной позиции в документе.<br>`+Обязательное при ответе` `+Change-handler` |
| **reason**     | String(255)                                               | Причина списания данной позиции                                                                                                                                                                                                                          |
| **slot**       | [Meta](#/general#3-metadannye) | Ячейка на складе. [Подробнее тут](#/dictionaries/store#3-yachejki-sklada)<br>`+Expand` |
| **things**     | Array(String)                                             | Серийные номера. Значение данного атрибута игнорируется, если товар позиции не находится на серийном учете. В ином случае количество товаров в позиции будет равно количеству серийных номеров, переданных в значении атрибута.<br>`+Change-handler`                          |

С позициями можно работать с помощью [специальных ресурсов для управления позициями Списания](#/documents/loss#3-upravlenie-poziciyami-spisaniya),
а также в составе отдельного Списания. При работе в составе отдельного Списания,
вы можете отправлять запросы на создание отдельного Списания с включенным в тело запроса
массивом позиций Списания. Если количество позиций превышает максимально допустимое, то для
дальнейшего пополнения позиций нужно будет работать со специальным ресурсом "Позиции Списания".
Также, при работе в составе отдельного Списания, можно отправлять запросы на обновление списка позиций
с включенным в тело запроса массивом позиций Списания. При этом важно помнить, что коллекция позиций будет
восприниматься как "все позиции Списания" и полностью заменит уже существующую коллекцию при обновлении объекта - лишние
позиции будут удалены, новые добавлены, существующие - изменены.

О работе с доп. полями Списаний можно прочитать [здесь](#/general#3-rabota-s-dopolnitelnymi-polyami)

#### Информация о прослеживаемости импортных товаров
Поле **declaration** выводится по запросу. Для вывода в позициях документа информации о прослеживаемости импортных товаров
необходимо передать в URL запроса дополнительный параметр `fields=declaration`, например `../loss/{id}/positions?fields=declaration`. [Подробнее о параметре fields](#/general#3-chto-takoe-fields).

Аттрибуты объекта:

| Название     | Тип                                                     | Описание                                                                                |
| -------------|:--------------------------------------------------------|:----------------------------------------------------------------------------------------|
| **gtd**      | String                                                  | Регистрационный номер партии товара<br>`+Только для чтения`                             |
| **rnpt**     | String                                                  | Грузовая таможенная декларация<br>`+Только для чтения`                                  |
| **country**  | [Meta](#/general#3-metadannye)                          | Страна происхождения товара<br>`+Только для чтения`                                     |
| **quantity** | Float                                                   | Количество товара с указанными ГТД или РНПТ в позиции документа<br>`+Только для чтения` |

### Получить Списания 
Запрос всех Списаний на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                             |
| ----------- | :-------------------------------------------------------- | :--------------------------------------------------- |
| **meta**    | [Meta](#/general#3-metadannye) | Метаданные о выдаче,                                 |
| **context** | [Meta](#/general#3-metadannye) | Метаданные о сотруднике, выполнившем запрос.         |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Списания. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |

> Получить Списания

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/loss" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Списаний.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/loss/metadata",
    "type": "loss",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/6ddca2d7-4f28-11e6-8a84-bae500000066",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/loss/metadata",
        "type": "loss",
        "mediaType": "application/json"
      },
      "id": "6ddca2d7-4f28-11e6-8a84-bae500000066",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
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
      "updated": "2016-07-21 15:22:54",
      "name": "00001",
      "externalCode": "o5GMiWUJhqhq1vmrUWwI-2",
      "moment": "2016-07-21 12:49:00",
      "applicable": true,
      "printed": true,
      "published": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/cdbc62de-3f68-11e6-8a84-bae500000050",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        },
        "value": 63
      },
      "sum": 3981730,
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "store": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "attributes": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/metadata/attributes/d0912ad5-4f3d-11e6-8a84-bae500000082",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "d0912ad5-4f3d-11e6-8a84-bae500000082",
          "name": "AttributeName1",
          "type": "double",
          "value": 0.2
        }
      ],
      "positions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/6ddca2d7-4f28-11e6-8a84-bae500000066/positions",
          "type": "lossposition",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/9d020efd-4f2a-11e6-8a84-bae500000078",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/loss/metadata",
        "type": "loss",
        "mediaType": "application/json"
      },
      "id": "9d020efd-4f2a-11e6-8a84-bae500000078",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
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
      "updated": "2016-07-21 15:23:02",
      "name": "00002",
      "externalCode": "08cP74Ftgc7MrBTbGfGVJ3",
      "moment": "2016-07-21 13:05:00",
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
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "store": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "attributes": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/metadata/attributes/d0912ad5-4f3d-11e6-8a84-bae500000082",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "d0912ad5-4f3d-11e6-8a84-bae500000082",
          "name": "AttributeName1",
          "type": "double",
          "value": 45.2
        }
      ],
      "positions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/9d020efd-4f2a-11e6-8a84-bae500000078/positions",
          "type": "lossposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "salesReturn": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/salesreturn/a8b8e1e3-3f85-11e6-8a84-bae50000008d",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
          "type": "salesreturn",
          "mediaType": "application/json"
        }
      }
    }
  ]
}
```

### Создать Списание 
Запрос на создание нового Списания. Для успешного создания необходимо в теле запроса указать следующие поля:

+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](#/general#3-metadannye) `Необходимое`
+ **store** - Ссылка на склад в формате [Метаданных](#/general#3-metadannye) `Необходимое`

> Пример создания нового Списания.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/loss" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "store": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/b72f4f02-9b8b-11e6-8af5-581e0000009b",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "organization": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/95920812-9609-11e6-8af5-581e000000d4",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "positions": [
              {
                "quantity": 23,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/987148b8-9a09-11e6-8af5-581e0000006f",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              },
              {
                "quantity": 12,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/987d77f1-9a09-11e6-8af5-581e00000074",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                    "type": "variant",
                    "mediaType": "application/json"
                  }
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Списания.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/b014dab4-4f42-11e6-8a84-bae500000006",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/loss/metadata",
    "type": "loss",
    "mediaType": "application/json"
  },
  "id": "b014dab4-4f42-11e6-8a84-bae500000006",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
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
  "updated": "2016-07-21 15:57:32",
  "name": "00005",
  "externalCode": "itqCvT69hgSZFTJEL9cP70",
  "moment": "2016-07-21 15:57:32",
  "applicable": false,
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
  "sum": 50000,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "created": "2016-08-25 19:55:00",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/b014dab4-4f42-11e6-8a84-bae500000006/positions",
      "type": "lossposition",
      "mediaType": "application/json",
      "size": 3,
      "limit": 1000,
      "offset": 0
    }
  },
  "salesReturn": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/salesreturn/166909e6-4a99-11e6-8a84-bae500000089",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
      "type": "salesreturn",
      "mediaType": "application/json"
    }
  }
}
```

### Массовое создание и обновление Списаний 
[Массовое создание и обновление](#/general#3-sozdanie-i-obnovlenie-neskolkih-obuektov) Списаний.
В теле запроса нужно передать массив, содержащий JSON представления Списаний, которые вы хотите создать или обновить.
Обновляемые Списания должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Списаний

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/loss" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '[
            {
              "store": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/b72f4f02-9b8b-11e6-8af5-581e0000009b",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type": "store",
                  "mediaType": "application/json"
                }
              },
              "organization": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/95920812-9609-11e6-8af5-581e000000d4",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "positions": [
                {
                  "quantity": 23,
                  "assortment": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/987148b8-9a09-11e6-8af5-581e0000006f",
                      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  }
                },
                {
                  "quantity": 12,
                  "assortment": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/987d77f1-9a09-11e6-8af5-581e00000074",
                      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                      "type": "variant",
                      "mediaType": "application/json"
                    }
                  }
                }
              ]
            },
            {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/b014dab4-4f42-11e6-8a84-bae500000006",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/loss/metadata",
                "type": "loss",
                "mediaType": "application/json"
              },
              "name": "00606234",
              "externalCode": "3498142кук",
              "moment": "2016-07-21 15:57:32",
              "applicable": true,
              "sum": 50000,
              "organization": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "store": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type": "store",
                  "mediaType": "application/json"
                }
              },
              "positions": [],
              "salesReturn": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/salesreturn/9b83cb6b-3f80-11e6-8a84-bae5000000bb",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
                  "type": "salesreturn",
                  "mediaType": "application/json"
                }
              }
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Списаний.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/b014dab4-4f42-11e6-8a84-bae500000006",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/loss/metadata",
      "type": "loss",
      "mediaType": "application/json"
    },
    "id": "b014dab4-4f42-11e6-8a84-bae500000006",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
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
    "updated": "2016-07-21 15:57:32",
    "name": "00005",
    "externalCode": "itqCvT69hgSZFTJEL9cP70",
    "moment": "2016-07-21 15:57:32",
    "applicable": false,
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
    "sum": 50000,
    "organization": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "store": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "created": "2016-08-25 19:55:00",
    "printed": true,
    "published": true,
    "positions": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/b014dab4-4f42-11e6-8a84-bae500000006/positions",
        "type": "lossposition",
        "mediaType": "application/json",
        "size": 3,
        "limit": 1000,
        "offset": 0
      }
    },
    "salesReturn": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/salesreturn/166909e6-4a99-11e6-8a84-bae500000089",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
        "type": "salesreturn",
        "mediaType": "application/json"
      }
    }
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/b014dab4-4f42-11e6-8a84-bae500000006",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/loss/metadata",
      "type": "loss",
      "mediaType": "application/json"
    },
    "id": "b014dab4-4f42-11e6-8a84-bae500000006",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
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
    "updated": "2016-07-21 16:05:11",
    "name": "00606234",
    "externalCode": "3498142кук",
    "moment": "2016-07-21 15:57:32",
    "applicable": true,
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
    "organization": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "store": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "created": "2016-08-25 19:55:00",
    "printed": true,
    "published": true,
    "positions": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/b014dab4-4f42-11e6-8a84-bae500000006/positions",
        "type": "lossposition",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    },
    "salesReturn": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/salesreturn/9b83cb6b-3f80-11e6-8a84-bae5000000bb",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
        "type": "salesreturn",
        "mediaType": "application/json"
      }
    }
  }
]
```

### Удалить Списание

**Параметры**

| Параметр | Описание                                                                         |
| :------- | :------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Списания. |

> Запрос на удаление Списания с указанным id.

```shell
curl --compressed -X DELETE \
  "https://api.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление Списания.

### Массовое удаление Списаний

В теле запроса нужно передать массив, содержащий JSON метаданных Списаний, которые вы хотите удалить.


> Запрос на массовое удаление Списаний. 

```shell
curl --compressed -X POST \
  "https://api.moysklad.ru/api/remap/1.2/entity/loss/delete" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -d '[
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b1",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/loss/metadata",
                "type": "loss",
                "mediaType": "application/json"
            }
        },
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b2",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/loss/metadata",
                "type": "loss",
                "mediaType": "application/json"
            }
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Списаний.

```json
[
  {
    "info":"Сущность 'loss' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'loss' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
``` 

### Метаданные Списаний 
Запрос на получение метаданных Списаний. Результат - объект JSON, включающий в себя:

| Параметр                       | Описание                                                                                                      |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------ |
| **meta**                       | Ссылка на метаданные Списаний                                                                                 |
| **attributes**                 | Массив объектов доп. полей Списаний в формате [Метаданных](#/general#3-metadannye) |
| **states**                     | Массив статусов Списаний                                                                                      |
| **createShared**               | создавать новые Списания с меткой "Общий"                                                                     |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](#/general#3-rabota-s-dopolnitelnymi-polyami).

> Метаданные Списаний

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/loss/metadata" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление метаданных Списаний.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/metadata/attributes/d0911efc-4f3d-11e6-8a84-bae500000081",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "d0911efc-4f3d-11e6-8a84-bae500000081",
      "name": "AttributeName1",
      "type": "string",
      "required": false
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/metadata/attributes/d0912ad5-4f3d-11e6-8a84-bae500000082",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "d0912ad5-4f3d-11e6-8a84-bae500000082",
      "name": "AttributeName2",
      "type": "double",
      "required": true
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
  "https://api.moysklad.ru/api/remap/1.2/entity/loss/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/metadata/attributes/d0912ad5-4f3d-11e6-8a84-bae500000082",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "d0912ad5-4f3d-11e6-8a84-bae500000082",
  "name": "AttributeName1",
  "type": "double",
  "required": true
}
```

### Шаблон Списания 
> Запрос на получение предзаполненого стандартными значениями шаблона списания без связи с каким-либо документом.

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/loss/new" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d ''  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного списания.

```json
{
  "applicable": false,
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2",
      "type": "lossposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    },
    "rows": []
  }
}
```

### Шаблон Списания на основе 
Запрос на получение предзаполненного списания на основе возврата покупателя.
В результате запроса, будет создан предзаполненный шаблон списания на основе переданного
возврата покупателя.

> Пример с заказом (application/json)

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/loss/new" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "salesReturn": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/salesreturn/166909e6-4a99-11e6-8a84-bae500000089",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
                "type": "salesreturn",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного списания.

```json
{
  "applicable": false,
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
  "sum": 28000,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "created": "2016-08-25 19:55:00",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2",
      "type": "lossposition",
      "mediaType": "application/json",
      "size": 3,
      "limit": 1000,
      "offset": 0
    },
    "rows": [
      {
        "meta": {
          "type": "lossposition",
          "mediaType": "application/json"
        },
        "quantity": 1,
        "price": 20000.0,
        "assortment": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/20485cfd-2e62-11e6-8a84-bae500000112",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
          }
        }
      },
      {
        "meta": {
          "type": "lossposition",
          "mediaType": "application/json"
        },
        "quantity": 1,
        "price": 10000.0,
        "assortment": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/328b0454-2e62-11e6-8a84-bae500000118",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
          }
        }
      },
      {
        "meta": {
          "type": "lossposition",
          "mediaType": "application/json"
        },
        "quantity": 1,
        "price": 20000.0,
        "assortment": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/20485cfd-2e62-11e6-8a84-bae500000112",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=392c045c-2842-11e9-ac12-000a00000002"
          }
        }
      }
    ]
  },
  "salesReturn": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/salesreturn/166909e6-4a99-11e6-8a84-bae500000089",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
      "type": "salesreturn",
      "mediaType": "application/json"
    }
  }
}

```

### Запросы - Списание

### Получить Списание

**Параметры**

| Параметр | Описание                                                                         |
| :------- | :------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Списания. |
 
> Запрос на получение отдельного списания с указанным id.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Списания.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/6ddca2d7-4f28-11e6-8a84-bae500000066",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/loss/metadata",
    "type": "loss",
    "mediaType": "application/json"
  },
  "id": "6ddca2d7-4f28-11e6-8a84-bae500000066",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
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
  "updated": "2016-07-21 15:22:54",
  "name": "00001",
  "externalCode": "o5GMiWUJhqhq1vmrUWwI-2",
  "moment": "2016-07-21 12:49:00",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/cdbc62de-3f68-11e6-8a84-bae500000050",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    },
    "value": 63
  },
  "sum": 3981730,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/metadata/attributes/d0912ad5-4f3d-11e6-8a84-bae500000082",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "d0912ad5-4f3d-11e6-8a84-bae500000082",
      "name": "AttributeName1",
      "type": "double",
      "value": 0.2
    }
  ],
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/6ddca2d7-4f28-11e6-8a84-bae500000066/positions",
      "type": "lossposition",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Изменить Списание

**Параметры**

| Параметр | Описание                                                                         |
| :------- | :------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Списания. |
 
Запрос на обновление списания с указанным id.

> Пример запроса на обновление отдельного Списания.

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "name": "00606234",
            "externalCode": "3498142кук",
            "moment": "2016-07-21 15:57:32",
            "applicable": true,
            "sum": 50000,
            "organization": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "store": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "positions": [],
            "salesReturn": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/salesreturn/9b83cb6b-3f80-11e6-8a84-bae5000000bb",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
                "type": "salesreturn",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Списания.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/b014dab4-4f42-11e6-8a84-bae500000006",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/loss/metadata",
    "type": "loss",
    "mediaType": "application/json"
  },
  "id": "b014dab4-4f42-11e6-8a84-bae500000006",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
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
  "updated": "2016-07-21 16:05:11",
  "name": "00606234",
  "externalCode": "3498142кук",
  "moment": "2016-07-21 15:57:32",
  "applicable": true,
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
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "created": "2016-08-25 19:55:00",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/b014dab4-4f42-11e6-8a84-bae500000006/positions",
      "type": "lossposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "salesReturn": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/salesreturn/9b83cb6b-3f80-11e6-8a84-bae5000000bb",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
      "type": "salesreturn",
      "mediaType": "application/json"
    }
  }
}
```

> Пример запроса на изменение Списания с дополнительными полями.

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "name": "00606234",
            "externalCode": "3498142кук",
            "moment": "2016-07-21 15:57:32",
            "applicable": true,
            "sum": 50000,
            "organization": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "store": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "positions": [],
            "salesReturn": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/salesreturn/9b83cb6b-3f80-11e6-8a84-bae5000000bb",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
                "type": "salesreturn",
                "mediaType": "application/json"
              }
            },
            "attributes": [
              {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/metadata/attributes/d0912ad5-4f3d-11e6-8a84-bae500000082",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": 0.7643
              },
              {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/metadata/attributes/d0911efc-4f3d-11e6-8a84-bae500000081",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "Строковое значение"
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Списания.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/b014dab4-4f42-11e6-8a84-bae500000006",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/loss/metadata",
    "type": "loss",
    "mediaType": "application/json"
  },
  "id": "b014dab4-4f42-11e6-8a84-bae500000006",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
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
  "updated": "2016-07-21 16:05:11",
  "name": "00606234",
  "externalCode": "3498142кук",
  "moment": "2016-07-21 15:57:32",
  "applicable": true,
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
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/metadata/attributes/d0911efc-4f3d-11e6-8a84-bae500000081",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "d0911efc-4f3d-11e6-8a84-bae500000081",
      "name": "AttributeName1",
      "type": "string",
      "value": "Строковое значение"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/metadata/attributes/d0912ad5-4f3d-11e6-8a84-bae500000082",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "d0912ad5-4f3d-11e6-8a84-bae500000082",
      "name": "AttributeName2",
      "type": "double",
      "value": 0.7643
    }
  ],
  "created": "2016-08-25 19:55:00",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/b014dab4-4f42-11e6-8a84-bae500000006/positions",
      "type": "lossposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "salesReturn": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/salesreturn/9b83cb6b-3f80-11e6-8a84-bae5000000bb",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
      "type": "salesreturn",
      "mediaType": "application/json"
    }
  }
}
```

### Управление позициями Списания 
Отдельный ресурс для управления позициями Списания. С его помощью вы можете управлять позициями большого документа, количество строк в котором превышает лимит на количество строк, сохраняемых вместе с документом. Этот лимит равен 1000. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](#/general#3-rabota-s-poziciyami-dokumentov).

### Получить позиции Списания 
Запрос на получение списка всех позиций данного Списания.

| Название    | Тип                                                       | Описание                                                     |
| ----------- | :-------------------------------------------------------- | :----------------------------------------------------------- |
| **meta**    | [Meta](#/general#3-metadannye) | Метаданные о выдаче,                                         |
| **context** | [Meta](#/general#3-metadannye) | Метаданные о сотруднике, выполнившем запрос.                 |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой позиции Списания. |

**Параметры**

| Параметр   | Описание                                                                                                                               |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Списания.                                                       |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить позиции Списания

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций отдельного Списания.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions",
    "type": "lossposition",
    "mediaType": "application/json",
    "size": 3,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions/0b615a22-4f42-11e6-8a84-bae50000008e",
        "type": "lossposition",
        "mediaType": "application/json"
      },
      "id": "0b615a22-4f42-11e6-8a84-bae50000008e",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 2,
      "price": 20000.0,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/20485cfd-2e62-11e6-8a84-bae500000112",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=392c045c-2842-11e9-ac12-000a00000002"
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions/0b61605f-4f42-11e6-8a84-bae50000008f",
        "type": "lossposition",
        "mediaType": "application/json"
      },
      "id": "0b61605f-4f42-11e6-8a84-bae50000008f",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 6,
      "price": 10000.0,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/328b0454-2e62-11e6-8a84-bae500000118",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions/0b616604-4f42-11e6-8a84-bae500000090",
        "type": "lossposition",
        "mediaType": "application/json"
      },
      "id": "0b616604-4f42-11e6-8a84-bae500000090",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 1,
      "price": 33000.0,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/328b0454-2e62-11e6-8a84-bae500000118",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
        }
      }
    }
  ]
}
```

### Позиция Списания
 
### Получить позицию

**Параметры**

| Параметр       | Описание                                                                         |
| :------------- | :------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Списания. |
| **positionID** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b20* id позиции.  |
 
> Запрос на получение отдельной позиции Списания с указанным id.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции Списания.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20",
    "type": "lossposition",
    "mediaType": "application/json"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b20",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "quantity": 2,
  "price": 20000.0,
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/20485cfd-2e62-11e6-8a84-bae500000112",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002"
    }
  }
}
```

### Создать позицию
Запрос на создание новой позиции в Списании.
Для успешного создания необходимо в теле запроса указать следующие поля:

+ **assortment** - Ссылка на товар/услугу/серию/модификацию, которую представляет собой позиция.
  Также можно указать поле с именем **service**, **consignment**, **variant** в соответствии с тем,
  чем является указанная позиция. Подробнее об этом поле можно прочитать в описании [позиции Списания](#/documents/loss#4-pozicii-spisaniya)
+ **quantity** - Количество указанной позиции. Должно быть положительным, иначе возникнет ошибка.
  Одновременно можно создать как одну так и несколько позиций Списания. Все созданные данным запросом позиции
  будут добавлены к уже существующим.

**Параметры**

| Параметр | Описание                                                                         |
| :------- | :------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Списания. |

> Пример создания позиций в Списании.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '[
            {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions/0b615a22-4f42-11e6-8a84-bae50000008e",
                "type": "lossposition",
                "mediaType": "application/json"
              },
              "quantity": 321,
              "price": 53000.0,
              "assortment": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/20485cfd-2e62-11e6-8a84-bae500000112",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "reason": "поломка"
            },
            {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions/0b615a22-4f42-11e6-8a84-bae50000008e",
                "type": "lossposition",
                "mediaType": "application/json"
              },
              "quantity": 12,
              "price": 2645.0,
              "assortment": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/20485cfd-2e62-11e6-8a84-bae500000112",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "reason": "брак"
            }
          ]
'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной позиции отдельного Списания.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions/0b615a22-4f42-11e6-8a84-bae50000008e",
      "type": "lossposition",
      "mediaType": "application/json"
    },
    "id": "0b615a22-4f42-11e6-8a84-bae50000008e",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 321,
    "price": 53000.0,
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/20485cfd-2e62-11e6-8a84-bae500000112",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
      }
    },
    "reason": "поломка"
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions/0b615a22-4f42-11e6-8a84-bae50000008e",
      "type": "lossposition",
      "mediaType": "application/json"
    },
    "id": "0b615a22-4f42-11e6-8a84-bae50000008e",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 12,
    "price": 2645.0,
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/20485cfd-2e62-11e6-8a84-bae500000112",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002"
      }
    },
    "reason": "брак"
  }
]
```

### Изменить позицию 
Запрос на обновление отдельной позиции Списания. Для обновления позиции нет каких-либо
 обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

| Параметр       | Описание                                                                         |
| :------------- | :------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Списания. |
| **positionID** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b20* id позиции.  |
 
> Пример запроса на обновление отдельной позиции в Списании.

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "quantity": 172,
            "price": 7777.0,
            "reason": "Разорван"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции Списания.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20",
    "type": "lossposition",
    "mediaType": "application/json"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b20",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "quantity": 172,
  "price": 7777.0,
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/20485cfd-2e62-11e6-8a84-bae500000112",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002"
    }
  },
  "reason": "Разорван"
}
```

### Удалить позицию

**Параметры**

| Параметр       | Описание                                                                         |
| :------------- | :------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Списания. |
| **positionID** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b20* id позиции.  |
 
> Запрос на удаление отдельной позиции Списания с указанным id.

```shell
curl --compressed -X DELETE \
  "https://api.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление позиции Списания.

### Массовое удаление позиций

**Параметры**

| Параметр       | Описание                                                                                    |
| :------------- |:--------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 3e1c03bb-684f-11ee-ac12-000c000000b0* id Списания. |

> Запрос на массовое удаление позиций Списания.

```shell
curl --compressed -X POST \
  "https://api.moysklad.ru/api/remap/1.2/entity/loss/3e1c03bb-684f-11ee-ac12-000c000000b0/positions/delete" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -d '[
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/3e1c03bb-684f-11ee-ac12-000c000000b0/positions/7fce2da5-684d-11ee-ac12-000c000000a2",
            "type": "lossposition",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/loss/3e1c03bb-684f-11ee-ac12-000c000000b0/positions/7fce37a5-684d-11ee-ac12-000c000000a3",
            "type": "lossposition",
            "mediaType": "application/json"
          }
        }
      ]'  
```

> Response 200 (application/json)
Успешное удаление позиций Списания. 

