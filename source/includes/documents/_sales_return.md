## Возврат покупателя
Средствами JSON API можно создавать и обновлять сведения о Возвратах покупателей, запрашивать списки Возвратов покупателей и сведения по отдельным Возвратам покупателей. Позициями Возвратов покупателей можно управлять как в составе отдельного Возврата, так и отдельно - с помощью специальных ресурсов для управления позициями Возврата покупателя. Кодом сущности для Возврата покупателя в составе JSON API является ключевое слово **salesreturn**.
### Возвраты покупателей 
#### Атрибуты сущности

| Название                | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                                      |
| ----------------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| **accountId**           | UUID                                                      | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения` `+Change-handler`                                                        |
| **agent**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные контрагента<br>`+Обязательное при ответе` `+Expand` `+Change-handler`                                                              |
| **agentAccount**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные счета контрагента<br>`+Expand` `+Change-handler`                                                                                   |
| **applicable**          | Boolean                                                   | `=` `!=`                                                                                                                                          | Отметка о проведении<br>`+Обязательное при ответе` `+Change-handler`                                                                          |
| **attributes**          | Array(Object)                                             | [Операторы доп. полей](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-fil-traciq-po-dopolnitel-nym-polqm) | Коллекция метаданных доп. полей. [Поля объекта](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi) `+Change-handler`     |
| **code**                | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Код Возврата Покупателя                                                                                                                       |
| **contract**            | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные договора<br>`+Expand` `+Change-handler`                                                                                            |
| **created**             | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата создания<br>`+Обязательное при ответе` `+Только для чтения` `+Change-handler`                                                            |
| **deleted**             | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего удаления Возврата Покупателя<br>`+Только для чтения`                                                                        |
| **description**         | String(4096)                                              | `=` `!=` `~` `~=` `=~`                                                                                                                            | Комментарий Возврата Покупателя<br>`+Change-handler`                                                                                          |
| **externalCode**        | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код Возврата Покупателя<br>`+Обязательное при ответе` `+Change-handler`                                                               |
| **files**               | MetaArray                                                 |                                                                                                                                                   | Метаданные массива [Файлов](../dictionaries/#suschnosti-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand` |
| **group**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                      |
| **id**                  | UUID                                                      | `=` `!=`                                                                                                                                          | ID Возврата Покупателя<br>`+Обязательное при ответе` `+Только для чтения` `+Change-handler`                                                   |
| **meta**                | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные Возврата Покупателя<br>`+Обязательное при ответе` `+Change-handler`                                                                |
| **moment**              | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата документа<br>`+Обязательное при ответе` `+Change-handler`                                                                                |
| **name**                | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование Возврата Покупателя<br>`+Обязательное при ответе` `+Change-handler`                                                              |
| **organization**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании` `+Change-handler`                                        |
| **organizationAccount** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные счета юрлица<br>`+Expand` `+Change-handler`                                                                                        |
| **owner**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Обязательное при ответе` `+Expand`                                                                                  |
| **positions**           | MetaArray                                                 |                                                                                                                                                   | Метаданные позиций Возврата Покупателя<br>`+Обязательное при ответе` `+Expand` `+Change-handler`                                              |
| **printed**             | Boolean                                                   | `=` `!=`                                                                                                                                          | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                      |
| **project**             | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные проекта<br>`+Expand` `+Change-handler`                                                                                             |
| **published**           | Boolean                                                   | `=` `!=`                                                                                                                                          | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                    |
| **rate**                | Object                                                    |                                                                                                                                                   | Валюта. [Подробнее тут](../documents/#dokumenty-teh-operaciq-valuta-w-dokumentah)<br>`+Обязательное при ответе` `+Change-handler`             |
| **salesChannel**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные канала продаж<br>`+Expand`                                                                                                         |
| **shared**              | Boolean                                                   | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе`                                                                                                    |
| **state**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные статуса Возврата Покупателя<br>`+Expand` `+Change-handler`                                                                         |
| **store**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные склада<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании` `+Change-handler`                                        |
| **sum**                 | Int                                                       | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Сумма Возврата Покупателя в копейках<br>`+Обязательное при ответе` `+Только для чтения` `+Change-handler`                                     |
| **syncId**              | UUID                                                      | `=` `!=`                                                                                                                                          | ID синхронизации. После заполнения недоступен для изменения                                                                                   |
| **updated**             | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления Возврата Покупателя<br>`+Обязательное при ответе` `+Только для чтения` `+Change-handler`                         |
| **vatEnabled**          | Boolean                                                   |                                                                                                                                                   | Учитывается ли НДС<br>`+Обязательное при ответе` `+Change-handler`                                                                            |
| **vatIncluded**         | Boolean                                                   |                                                                                                                                                   | Включен ли НДС в цену `+Change-handler`                                                                                                       |
| **vatSum**              | Float                                                     |                                                                                                                                                   | Сумма НДС<br>`+Обязательное при ответе` `+Change-handler`                                                                             |

#### Связи с другими документами

| Название                       | Описание                                                                                                                                                                        |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **demand**                     | Ссылка на отгрузку, по которой произошел возврат в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) Поле является необходимым для возврата с основанием. |
| **losses**                     | Массив ссылок на связанные списания в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)                                                                   |
| **payments**                   | Массив ссылок на связанные платежи в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)                                                                    |
| **payedSum**                   | Сумма исходящих платежей по возврату покупателя                                                                                                                                 |
| **factureOut**                 | Ссылка на Счет-фактуру выданный, с которым связан этот возврат, в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)                                       |

#### Позиции Возврата покупателя
Позиции Возврата покупателей - это список товаров/услуг/модификаций/серий/комплектов.
Объект позиции Возврата покупателей содержит следующие поля:

| Название       | Тип                                                       | Описание                                                                                                                                                                                                                                                                   |
| -------------- | :-------------------------------------------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**  | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения` `+Change-handler`                                                                                                                                                                                     |
| **assortment** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные товара/услуги/серии/модификации, которую представляет собой позиция<br>`+Обязательное при ответе` `+Expand` `+Change-handler`                                                                                                                                   |
| **cost**       | Int                                                       | Себестоимость (выводится, если документ был создан без основания)                                                                                                                                                                                                          |
| **country**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Страны<br>`+Expand`                                                                                                                                                                                                                                             |
| **discount**   | Int                                                       | Процент скидки или наценки. Наценка указывается отрицательным числом, т.е. -10 создаст наценку в 10%<br>`+Обязательное при ответе` `+Change-handler`                                                                                                                       |
| **gtd**        | Object                                                    | ГТД. [Подробнее тут](../dictionaries/#suschnosti-gruzowaq-tamozhennaq-deklaraciq-gtd)                                                                                                                                                                                      |
| **id**         | UUID                                                      | ID позиции<br>`+Обязательное при ответе` `+Только для чтения` `+Change-handler`                                                                                                                                                                                            |
| **pack**       | Object                                                    | Упаковка Товара. [Подробнее тут](../dictionaries/#suschnosti-towar-towary-atributy-wlozhennyh-suschnostej-upakowki-towara) <br>`+Change-handler`                                                                                                                           |
| **price**      | Float                                                     | Цена товара/услуги в копейках<br>`+Обязательное при ответе` `+Change-handler`                                                                                                                                                                                              |
| **quantity**   | Int                                                       | Количество товаров/услуг данного вида в позиции. Если позиция - товар, у которого включен учет по серийным номерам, то значение в этом поле всегда будет равно количеству серийных номеров для данной позиции в документе.<br>`+Обязательное при ответе` `+Change-handler` |
| **slot**       | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Ячейка на складе. [Подробнее тут](../dictionaries/#suschnosti-sklad-yachejki-sklada)<br>`+Expand` |
| **things**     | Array(String)                                             | Серийные номера. Значение данного атрибута игнорируется, если товар позиции не находится на серийном учете. В ином случае количество товаров в позиции будет равно количеству серийных номеров, переданных в значении атрибута.                                            |
| **vat**        | Int                                                       | НДС, которым облагается текущая позиция<br>`+Обязательное при ответе` `+Change-handler`                                                                                                                                                                                    |
| **vatEnabled** | Boolean                                                   | Включен ли НДС для позиции. С помощью этого флага для позиции можно выставлять НДС = 0 или НДС = "без НДС". (vat = 0, vatEnabled = false) -> vat = "без НДС", (vat = 0, vatEnabled = true) -> vat = 0%.<br>`+Обязательное при ответе` `+Change-handler`                    |

С позициями можно работать с помощью специальных [ресурсов для управления позициями Возврата покупателей](../documents/#dokumenty-vozwrat-pokupatelq-pozicii-wozwrata-pokupatelq),
а также в составе отдельного Возврата покупателей. При работе в составе отдельного Возврата покупателей,
вы можете отправлять запросы на создание отдельного Возврата покупателей с включенным в тело запроса
массивом позиций Возврата покупателей. Если количество позиций превышает максимально допустимое, то для
дальнейшего пополнения позиций нужно будет работать со специальным ресурсом "Позиции Возврата покупателей".
Также, при работе в составе отдельного Возврата покупателей, можно отправлять запросы на обновление списка позиций
с включенным в тело запроса массивом позиций Возврата покупателей. При этом важно помнить, что коллекция позиций будет
восприниматься как "все позиции Возврата покупателей" и полностью заменит уже существующую коллекцию при обновлении объекта - лишние
позиции будут удалены, новые добавлены, существующие - изменены.

О работе с доп. полями Возвратов покупателейых возвратов можно прочитать [здесь](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)


### Получить Возвраты покупателей 
Запрос всех Возвратов покупателей на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                         |
| ----------- | :-------------------------------------------------------- | :--------------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                             |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                     |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Возвраты покупателей. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить Возвраты покупателей

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Возвратов покупателей.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
    "type": "salesreturn",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/90f337d1-3f80-11e6-8a84-bae5000000ac",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
        "type": "salesreturn",
        "mediaType": "application/json"
      },
      "id": "90f337d1-3f80-11e6-8a84-bae5000000ac",
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
      "updated": "2016-07-01 14:40:10",
      "name": "00001",
      "externalCode": "PDJ7P5kVhEWomlQtd67up2",
      "moment": "2016-07-01 14:39:00",
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
      "sum": 25100,
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
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/faf41a7b-2e58-11e6-8a84-bae500000051",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "organizationAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "vatEnabled": true,
      "vatIncluded": true,
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/90f337d1-3f80-11e6-8a84-bae5000000ac/positions",
          "type": "salesreturnposition",
          "mediaType": "application/json",
          "size": 6,
          "limit": 1000,
          "offset": 0
        }
      },
      "demand": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/3ebb140e-2e62-11e6-8a84-bae500000127",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
          "type": "demand",
          "mediaType": "application/json"
        }
      },
      "payedSum": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/9b83cb6b-3f80-11e6-8a84-bae5000000bb",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
        "type": "salesreturn",
        "mediaType": "application/json"
      },
      "id": "9b83cb6b-3f80-11e6-8a84-bae5000000bb",
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
      "updated": "2016-07-01 14:40:27",
      "name": "00002",
      "externalCode": "3ZaZZNCVhYzDgTunfKsTy3",
      "moment": "2016-07-01 14:40:00",
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
      "sum": 1100,
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
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "organizationAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "agentAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004/accounts/147c3231-32ca-11e6-8a84-bae500000005",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "salesChannel": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/56446e7f-3633-11ec-ac13-000d00000000",
          "type": "saleschannel",
          "mediaType": "application/json"
        }
      },
      "vatEnabled": true,
      "vatIncluded": true,
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/9b83cb6b-3f80-11e6-8a84-bae5000000bb/positions",
          "type": "salesreturnposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "demand": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/d8937c31-3eb7-11e6-8a84-bae500000066",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
          "type": "demand",
          "mediaType": "application/json"
        }
      },
      "payedSum": 0
    }
  ]
}
```

### Создать Возврат покупателя 
Обязательные поля при создании нового Возврата покупателей:

+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **store** - Ссылка на склад в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **demand** - Ссылка на отгрузку, по которой произошел возврат в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye), обязательное поле только для возврата по основанию
+ **agent** - Ссылка на контрагента в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
Контрагент, указанный в запросе на создание возврата, должен совпадать с контрагентом, указанном в документе,
по которому создается возврат.

При создании возврата:

+ При создании возврата без основания поле **demand** указывать не нужно
+ Контрагент в возврате и в документе, по которому он создается, должны совпадать
+ Валюта и юрлицо в возврате и в документе так же должны совпадать
+ При создании возврата на основании другого документа, позиции передаваемые в коллекции **positions**, должны соответствовать позициям документа-основания. Можно задать количество товара в позиции, но не больше, чем в документе-основании. Нельзя передавать позиции, которых нет в документе-основании и менять значение поля **price**.

> Пример создания нового Возврата покупателя.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "0003",
            "description": "Гневный возврат бракованного товара",
            "code": "k123e21451k",
            "externalCode": "w214t2141f",
            "moment": "2017-11-21 14:37:00",
            "applicable": false,
            "organization": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "agent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "counterparty",
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
            "attributes": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/attributes/43dd9fd7-3f81-11e6-8a84-bae5000000db",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "отломана деталь"
              },
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/attributes/50463893-3f81-11e6-8a84-bae5000000de",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": true
              }
            ],
            "positions": [
              {
                "quantity": 1,
                "price": 0.0,
                "discount": 0,
                "vat": 0,
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/7a6f697f-3c64-11e6-8a84-bae500000006",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              }
            ],
            "demand": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/6b967815-3f84-11e6-8a84-bae5000000ea",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
                "type": "demand",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Возврата покупателя.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/a8b8e1e3-3f85-11e6-8a84-bae50000008d",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
    "type": "salesreturn",
    "mediaType": "application/json"
  },
  "id": "a8b8e1e3-3f85-11e6-8a84-bae50000008d",
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
  "updated": "2016-07-01 15:16:37",
  "name": "0003",
  "description": "Гневный возврат бракованного товара",
  "code": "k123e21451k",
  "externalCode": "w214t2141f",
  "moment": "2017-11-21 14:37:00",
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004/accounts/147c3231-32ca-11e6-8a84-bae500000005",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/attributes/43dd9fd7-3f81-11e6-8a84-bae5000000db",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "43dd9fd7-3f81-11e6-8a84-bae5000000db",
      "name": "AttributeName1",
      "type": "string",
      "value": "отломана деталь"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/attributes/50463893-3f81-11e6-8a84-bae5000000de",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "50463893-3f81-11e6-8a84-bae5000000de",
      "name": "AttributeName2",
      "type": "boolean",
      "value": true
    }
  ],
  "vatEnabled": true,
  "vatIncluded": true,
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/a8b8e1e3-3f85-11e6-8a84-bae50000008d/positions",
      "type": "salesreturnposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "demand": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/6b967815-3f84-11e6-8a84-bae5000000ea",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
      "type": "demand",
      "mediaType": "application/json"
    }
  },
  "payedSum": 0
}
```

### Массовое создание и обновление Возвратов покупателя 
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Возвратов покупателя.
В теле запроса нужно передать массив, содержащий JSON представления Возвратов покупателя, которые вы хотите создать или обновить.
Обновляемые Возвраты покупателя должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Возвратов покупателя

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "0003",
              "description": "Гневный возврат бракованного товара",
              "code": "k123e21451k",
              "externalCode": "w214t2141f",
              "moment": "2017-11-21 14:37:00",
              "applicable": false,
              "organization": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "agent": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                  "type": "counterparty",
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
              "attributes": [
                {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/attributes/43dd9fd7-3f81-11e6-8a84-bae5000000db",
                    "type": "attributemetadata",
                    "mediaType": "application/json"
                  },
                  "value": "отломана деталь"
                },
                {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/attributes/50463893-3f81-11e6-8a84-bae5000000de",
                    "type": "attributemetadata",
                    "mediaType": "application/json"
                  },
                  "value": true
                }
              ],
              "positions": [
                {
                  "quantity": 1,
                  "price": 0.0,
                  "discount": 0,
                  "vat": 0,
                  "assortment": {
                    "meta": {
                      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/7a6f697f-3c64-11e6-8a84-bae500000006",
                      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  }
                }
              ],
              "demand": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/6b967815-3f84-11e6-8a84-bae5000000ea",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
                  "type": "demand",
                  "mediaType": "application/json"
                }
              }
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/a8b8e1e3-3f85-11e6-8a84-bae50000008d",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
                "type": "salesreturn",
                "mediaType": "application/json"
              },
              "updated": "2016-07-01 15:16:37",
              "name": "00033",
              "description": "Гневный возврат бракованного робота",
              "code": "k12eer3e21rre451k",
              "externalCode": "w214t2141f",
              "moment": "2017-11-21 14:37:00",
              "applicable": true,
              "state": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/states/7073b255-3f81-11e6-8a84-bae5000000e3",
                  "type": "state",
                  "mediaType": "application/json"
                }
              },
              "attributes": [
                {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/attributes/43dd9fd7-3f81-11e6-8a84-bae5000000db",
                    "type": "attributemetadata",
                    "mediaType": "application/json"
                  },
                  "value": "отломана нога"
                }
              ]
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Возвратов покупателя.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/a8b8e1e3-3f85-11e6-8a84-bae50000008d",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
      "type": "salesreturn",
      "mediaType": "application/json"
    },
    "id": "a8b8e1e3-3f85-11e6-8a84-bae50000008d",
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
    "updated": "2016-07-01 15:16:37",
    "name": "0003",
    "description": "Гневный возврат бракованного товара",
    "code": "k123e21451k",
    "externalCode": "w214t2141f",
    "moment": "2017-11-21 14:37:00",
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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "organizationAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "agentAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004/accounts/147c3231-32ca-11e6-8a84-bae500000005",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "attributes": [
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/attributes/43dd9fd7-3f81-11e6-8a84-bae5000000db",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "43dd9fd7-3f81-11e6-8a84-bae5000000db",
        "name": "AttributeName1",
        "type": "string",
        "value": "отломана деталь"
      },
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/attributes/50463893-3f81-11e6-8a84-bae5000000de",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "50463893-3f81-11e6-8a84-bae5000000de",
        "name": "AttributeName2",
        "type": "boolean",
        "value": true
      }
    ],
    "vatEnabled": true,
    "vatIncluded": true,
    "created": "2007-02-07 17:16:41",
    "printed": true,
    "published": true,
    "positions": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/a8b8e1e3-3f85-11e6-8a84-bae50000008d/positions",
        "type": "salesreturnposition",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
      }
    },
    "demand": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/6b967815-3f84-11e6-8a84-bae5000000ea",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
        "type": "demand",
        "mediaType": "application/json"
      }
    },
    "payedSum": 0
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/a8b8e1e3-3f85-11e6-8a84-bae50000008d",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
      "type": "salesreturn",
      "mediaType": "application/json"
    },
    "id": "a8b8e1e3-3f85-11e6-8a84-bae50000008d",
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
    "updated": "2016-07-01 15:27:18",
    "name": "00033",
    "description": "Гневный возврат бракованного робота",
    "code": "k12eer3e21rre451k",
    "externalCode": "w214t2141f",
    "moment": "2017-11-21 14:37:00",
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
    "store": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "state": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/states/7073b255-3f81-11e6-8a84-bae5000000e3",
        "type": "state",
        "mediaType": "application/json"
      }
    },
    "organizationAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "agentAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004/accounts/147c3231-32ca-11e6-8a84-bae500000005",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "salesChannel": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/56446e7f-3633-11ec-ac13-000d00000000",
        "type": "saleschannel",
        "mediaType": "application/json"
      }
    },
    "attributes": [
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/attributes/43dd9fd7-3f81-11e6-8a84-bae5000000db",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "43dd9fd7-3f81-11e6-8a84-bae5000000db",
        "name": "AttributeName1",
        "type": "string",
        "value": "отломана нога"
      },
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/attributes/50463893-3f81-11e6-8a84-bae5000000de",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "50463893-3f81-11e6-8a84-bae5000000de",
        "name": "AttributeName2",
        "type": "boolean",
        "value": true
      }
    ],
    "vatEnabled": true,
    "vatIncluded": true,
    "created": "2007-02-07 17:16:41",
    "printed": true,
    "published": true,
    "positions": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/a8b8e1e3-3f85-11e6-8a84-bae50000008d/positions",
        "type": "salesreturnposition",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
      }
    },
    "demand": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/6b967815-3f84-11e6-8a84-bae5000000ea",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
        "type": "demand",
        "mediaType": "application/json"
      }
    },
    "payedSum": 0
  }
]
```

### Удалить Возврат покупателя

**Параметры**

| Параметр | Описание                                                                                     |
| :------- | :------------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Возврата покупателей. |

> Запрос на удаление Возврата покупателей с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Возврата покупателей.

### Массовое удаление Возвратов покупателей

В теле запроса нужно передать массив, содержащий JSON метаданных Возвратов покупателей, которые вы хотите удалить.


> Запрос на массовое удаление Возвратов покупателей. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
            "type": "salesreturn",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
            "type": "salesreturn",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Возвратов покупателей.

```json
[
  {
    "info":"Сущность 'salesreturn' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'salesreturn' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
``` 

### Метаданные Возвратов покупателей 
#### Метаданные Возвратов покупателей 
Запрос на получение метаданных Возвратов покупателей. Результат - объект JSON, включающий в себя:

| Параметр                       | Описание                                                                                                                   |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------- |
| **meta**                       | Ссылка на метаданные Возвратов покупателей                                                                                 |
| **attributes**                 | Массив объектов доп. полей Возвратов покупателей в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **states**                     | Массив статусов Возвратов покупателей                                                                                      |
| **createShared**               | создавать новые Возвраты покупателей с меткой "Общий"                                                                      |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Возвратов покупателей

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Возвратов покупателей.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/attributes/43dd9fd7-3f81-11e6-8a84-bae5000000db",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "43dd9fd7-3f81-11e6-8a84-bae5000000db",
      "name": "AttributeName1",
      "type": "string",
      "required": false
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/attributes/50463893-3f81-11e6-8a84-bae5000000de",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "50463893-3f81-11e6-8a84-bae5000000de",
      "name": "AttributeName2",
      "type": "boolean",
      "required": false
    }
  ],
  "states": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/states/7073ae24-3f81-11e6-8a84-bae5000000e2",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "7073ae24-3f81-11e6-8a84-bae5000000e2",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Открыт",
      "color": 10066329,
      "stateType": "Regular",
      "entityType": "salesreturn"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/states/7073b255-3f81-11e6-8a84-bae5000000e3",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "7073b255-3f81-11e6-8a84-bae5000000e3",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Выполнен",
      "color": 15280409,
      "stateType": "Regular",
      "entityType": "salesreturn"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/states/7073b5aa-3f81-11e6-8a84-bae5000000e4",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "7073b5aa-3f81-11e6-8a84-bae5000000e4",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Выполнен Частично",
      "color": 15106326,
      "stateType": "Regular",
      "entityType": "salesreturn"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/states/7073b99b-3f81-11e6-8a84-bae5000000e5",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "7073b99b-3f81-11e6-8a84-bae5000000e5",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "На оформлении",
      "color": 34617,
      "stateType": "Regular",
      "entityType": "salesreturn"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/states/7073bd44-3f81-11e6-8a84-bae5000000e6",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "7073bd44-3f81-11e6-8a84-bae5000000e6",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Оформлен",
      "color": 9245744,
      "stateType": "Regular",
      "entityType": "salesreturn"
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
  "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/attributes/50463893-3f81-11e6-8a84-bae5000000de",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "50463893-3f81-11e6-8a84-bae5000000de",
  "name": "AttributeName1",
  "type": "boolean",
  "required": false
}
```

### Шаблон Возврата покупателя 
#### Шаблон Возврата покупателя 
Запрос на получение предзаполненого стандартными значениями шаблона возврата покупателя без связи с каким-либо документом.

> Создание шаблона возврата покупателя с пустым телом запроса

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/new"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d ''  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного возврата покупателя.

```json
{
  "applicable": false,
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2",
      "type": "salesreturnposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    },
    "rows": []
  },
  "vatEnabled": true,
  "vatIncluded": true,
  "payedSum": 0
}
```

### Шаблон Возврата покупателя на основе 
Запрос на получение предзаполненного шаблона возврата покупателя на основе переданной отгрузки.
В ответ на запрос вернется предзаполненный шаблон возврата покупателя, который
затем можно будет использовать для создания нового возврата с помощью POST запроса.

> Пример запроса на создание шаблона возврата покупателя на основе отгрузки.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/new"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "demand": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/3ebb140e-2e62-11e6-8a84-bae500000127",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
                "type": "demand",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного Возврата покупателя.

```json
{
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/faf41a7b-2e58-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
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
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2",
      "type": "salesreturnposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    },
    "rows": []
  },
  "vatEnabled": true,
  "vatIncluded": true,
  "demand": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/3ebb140e-2e62-11e6-8a84-bae500000127",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
      "type": "demand",
      "mediaType": "application/json"
    }
  },
  "payedSum": 0
}
```

### Возврат покупателя

### Получить Возврат покупателя

**Параметры**

| Параметр | Описание                                                                                     |
| :------- | :------------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Возврата покупателей. |
 
> Запрос на получение отдельного Возврата покупателей с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Возврата покупателей с указанным id.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/90f337d1-3f80-11e6-8a84-bae5000000ac",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
    "type": "salesreturn",
    "mediaType": "application/json"
  },
  "id": "90f337d1-3f80-11e6-8a84-bae5000000ac",
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
  "updated": "2016-07-01 14:40:10",
  "name": "00001",
  "externalCode": "PDJ7P5kVhEWomlQtd67up2",
  "moment": "2016-07-01 14:39:00",
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
  "sum": 25100,
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
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/faf41a7b-2e58-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "salesChannel": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/56446e7f-3633-11ec-ac13-000d00000000",
      "type": "saleschannel",
      "mediaType": "application/json"
    }
  },
  "vatEnabled": true,
  "vatIncluded": true,
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/90f337d1-3f80-11e6-8a84-bae5000000ac/positions",
      "type": "salesreturnposition",
      "mediaType": "application/json",
      "size": 6,
      "limit": 1000,
      "offset": 0
    }
  },
  "demand": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/3ebb140e-2e62-11e6-8a84-bae500000127",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
      "type": "demand",
      "mediaType": "application/json"
    }
  },
  "payedSum": 0
}
```

### Изменить Возврат покупателя 
Запрос на обновление Возврата покупателей с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Возврата покупателей, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Возврата покупателей](../documents/#dokumenty-vozwrat-pokupatelq).
При обновлении поля **organization** нужно также обновить поле **organizationAccount** иначе произойдет ошибка.
Контрагент должен совпадать с контрагентом, указанным в документе, по которому создается возврат.

При обновлении возврата:

+ Нельзя изменять следующие поля: **agentAccount**, **agent**, **demand**
+ Нельзя выставить валюту отличную от валюты в документе
+ Нельзя добавить позиции, отсутствующие среди позиций документа.

**Параметры**

| Параметр | Описание                                                                                     |
| :------- | :------------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Возврата покупателей. |

> Пример запроса на обновление Возврата покупателей.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "updated": "2016-07-01 15:16:37",
            "name": "00033",
            "description": "Гневный возврат бракованного робота",
            "code": "k12eer3e21rre451k",
            "externalCode": "w214t2141f",
            "moment": "2017-11-21 14:37:00",
            "applicable": true,
            "state": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/states/7073b255-3f81-11e6-8a84-bae5000000e3",
                "type": "state",
                "mediaType": "application/json"
              }
            },
            "attributes": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/attributes/43dd9fd7-3f81-11e6-8a84-bae5000000db",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "отломана нога"
              }
            ],
            "positions": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/a8b8e1e3-3f85-11e6-8a84-bae50000008d/positions",
                "type": "salesreturnposition",
                "mediaType": "application/json",
                "size": 1,
                "limit": 1000,
                "offset": 0
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Возврата покупателей.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/a8b8e1e3-3f85-11e6-8a84-bae50000008d",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
    "type": "salesreturn",
    "mediaType": "application/json"
  },
  "id": "a8b8e1e3-3f85-11e6-8a84-bae50000008d",
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
  "updated": "2016-07-01 15:27:18",
  "name": "00033",
  "description": "Гневный возврат бракованного робота",
  "code": "k12eer3e21rre451k",
  "externalCode": "w214t2141f",
  "moment": "2017-11-21 14:37:00",
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
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/states/7073b255-3f81-11e6-8a84-bae5000000e3",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004/accounts/147c3231-32ca-11e6-8a84-bae500000005",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "salesChannel": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/56446e7f-3633-11ec-ac13-000d00000000",
      "type": "saleschannel",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/attributes/43dd9fd7-3f81-11e6-8a84-bae5000000db",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "43dd9fd7-3f81-11e6-8a84-bae5000000db",
      "name": "AttributeName1",
      "type": "string",
      "value": "отломана нога"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata/attributes/50463893-3f81-11e6-8a84-bae5000000de",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "50463893-3f81-11e6-8a84-bae5000000de",
      "name": "AttributeName2",
      "type": "boolean",
      "value": true
    }
  ],
  "vatEnabled": true,
  "vatIncluded": true,
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/a8b8e1e3-3f85-11e6-8a84-bae50000008d/positions",
      "type": "salesreturnposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "demand": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/6b967815-3f84-11e6-8a84-bae5000000ea",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
      "type": "demand",
      "mediaType": "application/json"
    }
  },
  "payedSum": 0
}
```

### Позиции возврата покупателя 
Отдельный ресурс для управления позициями Возврата покупателей. С его помощью вы можете управлять позициями большого документа, количество строк в котором превышает лимит на количество строк, сохраняемых вместе с документом. Этот лимит равен 1000. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](../#mojsklad-json-api-obschie-swedeniq-rabota-s-poziciqmi-dokumentow).

### Получить Позиции 
Запрос на получение списка всех позиций данной Возврата покупателей.

| Название    | Тип                                                       | Описание                                                                 |
| ----------- | :-------------------------------------------------------- | :----------------------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                                     |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                             |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой позиции Возврата покупателей. |

**Параметры**

| Параметр   | Описание                                                                                                                               |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Возврата покупателей.                                           |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить Позиции 

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/7944ef04-f831-11e5-7a69-971500188b19/positions"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций Возврата покупателей.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/7944ef04-f831-11e5-7a69-971500188b19/positions",
    "type": "salesreturnposition",
    "mediaType": "application/json",
    "size": 6,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/7944ef04-f831-11e5-7a69-971500188b19/positions/90f3f201-3f80-11e6-8a84-bae5000000ad",
        "type": "salesreturnposition",
        "mediaType": "application/json"
      },
      "id": "90f3f201-3f80-11e6-8a84-bae5000000ad",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 900,
      "price": 0.0,
      "discount": 0,
      "vat": 0,
      "vatEnabled": false,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/328b0454-2e62-11e6-8a84-bae500000118",
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
      "cost": 10
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/7944ef04-f831-11e5-7a69-971500188b19/positions/90f3fc5f-3f80-11e6-8a84-bae5000000ae",
        "type": "salesreturnposition",
        "mediaType": "application/json"
      },
      "id": "90f3fc5f-3f80-11e6-8a84-bae5000000ae",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 1,
      "price": 0.0,
      "discount": 0,
      "vat": 0,
      "vatEnabled": false,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/20485cfd-2e62-11e6-8a84-bae500000112",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
        }
      },
      "cost": 10
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/7944ef04-f831-11e5-7a69-971500188b19/positions/90f41291-3f80-11e6-8a84-bae5000000af",
        "type": "salesreturnposition",
        "mediaType": "application/json"
      },
      "id": "90f41291-3f80-11e6-8a84-bae5000000af",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 1,
      "price": 0.0,
      "discount": 0,
      "vat": 0,
      "vatEnabled": false,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/4f785efd-3304-11e6-8a84-bae50001c6c4",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=392c045c-2842-11e9-ac12-000a00000002"
        }
      },
      "cost": 10
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/7944ef04-f831-11e5-7a69-971500188b19/positions/90f41a94-3f80-11e6-8a84-bae5000000b0",
        "type": "salesreturnposition",
        "mediaType": "application/json"
      },
      "id": "90f41a94-3f80-11e6-8a84-bae5000000b0",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 1,
      "price": 8600.0,
      "discount": 0,
      "vat": 0,
      "vatEnabled": false,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/58f32700-3303-11e6-8a84-bae50000853c",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3bb1af6c-2842-11e9-ac12-000c00000061"
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
      "cost": 10
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/7944ef04-f831-11e5-7a69-971500188b19/positions/90f4218b-3f80-11e6-8a84-bae5000000b1",
        "type": "salesreturnposition",
        "mediaType": "application/json"
      },
      "id": "90f4218b-3f80-11e6-8a84-bae5000000b1",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 1,
      "price": 0.0,
      "discount": 0,
      "vat": 0,
      "vatEnabled": false,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/67aa1d09-3d19-11e6-8a84-bae50000000b",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3bad99f1-2842-11e9-ac12-000c0000005c"
        }
      },
      "cost": 10
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/7944ef04-f831-11e5-7a69-971500188b19/positions/90f427d1-3f80-11e6-8a84-bae5000000b2",
        "type": "salesreturnposition",
        "mediaType": "application/json"
      },
      "id": "90f427d1-3f80-11e6-8a84-bae5000000b2",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 1,
      "price": 16500.0,
      "discount": 0,
      "vat": 0,
      "vatEnabled": false,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/0ae4836f-3303-11e6-8a84-bae500000d39",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3c3c1618-2842-11e9-ac12-000c0000006f"
        }
      },
      "cost": 10
    }
  ]
}

```

### Создать Позицию 
Запрос на создание новой позиции в Возврате покупателя.
Для успешного создания необходимо в теле запроса указать следующие поля:

+ **assortmet** - Ссылка на товар/услугу/серию/модификацию, которую представляет собой позиция.
Также можно указать поле с именем **service**, **consignment**, **variant** в соответствии с тем,
чем является указанная позиция. Подробнее об этом поле можно прочитать в описании [позиции Возврата покупателей](../documents/#dokumenty-vozwrat-pokupatelq-vozwraty-pokupatelej-pozicii-vozwrata-pokupatelq).
+ **quantity** - Количество указанной позиции. Должно быть положительным, иначе возникнет ошибка.
Одновременно можно создать как одну так и несколько позиций Возврата покупателей. Все созданные данным запросом позиции
будут добавлены к уже существующим.
Нельзя создавать позиции, отличные от позиций в документе, по которому создается возврат. Допустимо только
отличие в **quantity** позиций (количество в позиции в возврате м.б. меньше или равно количеству в позиции в документе).

**Параметры**

| Параметр | Описание                                                                                     |
| :------- | :------------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Возврата покупателей. |

> Пример запроса на создание позиций в Возврате покупателя.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/7944ef04-f831-11e5-7a69-971500188b19/positions"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "quantity": 900,
              "price": 0.0,
              "discount": 0,
              "vat": 0,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/328b0454-2e62-11e6-8a84-bae500000118",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "cost": 10
            },
            {
              "quantity": 1,
              "price": 0.0,
              "discount": 0,
              "vat": 0,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/20485cfd-2e62-11e6-8a84-bae500000112",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "cost": 10
            },
            {
              "quantity": 1,
              "price": 0.0,
              "discount": 0,
              "vat": 0,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/4f785efd-3304-11e6-8a84-bae50001c6c4",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "cost": 11
            },
            {
              "quantity": 1,
              "price": 8600.0,
              "discount": 0,
              "vat": 0,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/58f32700-3303-11e6-8a84-bae50000853c",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "cost": 13
            },
            {
              "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
              "quantity": 1,
              "price": 0.0,
              "discount": 0,
              "vat": 0,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/67aa1d09-3d19-11e6-8a84-bae50000000b",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "cost": 15
            },
            {
              "quantity": 1,
              "price": 16500.0,
              "discount": 0,
              "vat": 0,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/0ae4836f-3303-11e6-8a84-bae500000d39",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "cost": 17
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданных позиций.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/7944ef04-f831-11e5-7a69-971500188b19/positions/ea8f2771-3f82-11e6-8a84-bae50000007f",
      "type": "salesreturnposition",
      "mediaType": "application/json"
    },
    "id": "ea8f2771-3f82-11e6-8a84-bae50000007f",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 900,
    "price": 0.0,
    "discount": 0,
    "vat": 0,
    "vatEnabled": false,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/328b0454-2e62-11e6-8a84-bae500000118",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3c3c1618-2842-11e9-ac12-000c0000006f"
      }
    },
    "cost": 10
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/7944ef04-f831-11e5-7a69-971500188b19/positions/ea8f2f2e-3f82-11e6-8a84-bae500000080",
      "type": "salesreturnposition",
      "mediaType": "application/json"
    },
    "id": "ea8f2f2e-3f82-11e6-8a84-bae500000080",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 1,
    "price": 0.0,
    "discount": 0,
    "vat": 0,
    "vatEnabled": false,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/20485cfd-2e62-11e6-8a84-bae500000112",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3bad99f1-2842-11e9-ac12-000c0000005c"
      }
    },
    "cost": 10
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/7944ef04-f831-11e5-7a69-971500188b19/positions/ea8f35ca-3f82-11e6-8a84-bae500000081",
      "type": "salesreturnposition",
      "mediaType": "application/json"
    },
    "id": "ea8f35ca-3f82-11e6-8a84-bae500000081",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 1,
    "price": 0.0,
    "discount": 0,
    "vat": 0,
    "vatEnabled": false,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/4f785efd-3304-11e6-8a84-bae50001c6c4",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3bb1af6c-2842-11e9-ac12-000c00000061"
      }
    },
    "cost": 11
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/7944ef04-f831-11e5-7a69-971500188b19/positions/ea8f3bce-3f82-11e6-8a84-bae500000082",
      "type": "salesreturnposition",
      "mediaType": "application/json"
    },
    "id": "ea8f3bce-3f82-11e6-8a84-bae500000082",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 1,
    "price": 8600.0,
    "discount": 0,
    "vat": 0,
    "vatEnabled": false,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/58f32700-3303-11e6-8a84-bae50000853c",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=392c045c-2842-11e9-ac12-000a00000002"
      }
    },
    "cost": 13
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/7944ef04-f831-11e5-7a69-971500188b19/positions/ea8f41a9-3f82-11e6-8a84-bae500000083",
      "type": "salesreturnposition",
      "mediaType": "application/json"
    },
    "id": "ea8f41a9-3f82-11e6-8a84-bae500000083",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 1,
    "price": 0.0,
    "discount": 0,
    "vat": 0,
    "vatEnabled": false,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/67aa1d09-3d19-11e6-8a84-bae50000000b",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
      }
    },
    "cost": 15
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/7944ef04-f831-11e5-7a69-971500188b19/positions/ea8f477b-3f82-11e6-8a84-bae500000084",
      "type": "salesreturnposition",
      "mediaType": "application/json"
    },
    "id": "ea8f477b-3f82-11e6-8a84-bae500000084",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 1,
    "price": 16500.0,
    "discount": 0,
    "vat": 0,
    "vatEnabled": false,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/0ae4836f-3303-11e6-8a84-bae500000d39",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
      }
    },
    "cost": 17
  }
]
```

### Позиция Возврата покупателя

### Получить Позицию
 
**Параметры**

| Параметр       | Описание                                                                                             |
| :------------- | :--------------------------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Возврата покупателей.         |
| **positionID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции Возврата покупателей. |

> Запрос на получение отдельной позиции Возврата покупателей с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции Возврата покупателей.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006",
    "type": "salesreturnposition",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "quantity": 1,
  "price": 0.0,
  "discount": 0,
  "vat": 0,
  "vatEnabled": false,
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/4f785efd-3304-11e6-8a84-bae50001c6c4",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
    }
  },
  "cost": 10
}
```

### Изменить Позицию 
Запрос на обновление отдельной позиции Возврата покупателей.
При обновлении отдельной позиции в возврате можно только изменить количество данной позиции.
Причем это количество должно быть в пределах , где n - кол-во данной позиции в документе, по которому создан возврат.

**Параметры**

| Параметр       | Описание                                                                                             |
| :------------- | :--------------------------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Возврата покупателей.         |
| **positionID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции Возврата покупателей. |

> Пример запроса на обновление отдельной позиции в Возврате покупателя.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "quantity": 1,
            "price": 16500.0,
            "discount": 0,
            "vat": 0,
            "assortment": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/0ae4836f-3303-11e6-8a84-bae500000d39",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                "type": "product",
                "mediaType": "application/json"
              }
            },
            "cost": 100
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции Возврата покупателей.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
    "type": "salesreturnposition",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "quantity": 1,
  "price": 16500.0,
  "discount": 0,
  "vat": 0,
  "vatEnabled": false,
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/0ae4836f-3303-11e6-8a84-bae500000d39",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
    }
  },
  "cost": 100
}
```

### Удалить позицию

**Параметры**

| Параметр       | Описание                                                                                             |
| :------------- | :--------------------------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Возврата покупателей.         |
| **positionID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции Возврата покупателей. |
 
> Запрос на удаление отдельной позиции Возврата покупателей с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление позиции Возврата покупателей.
