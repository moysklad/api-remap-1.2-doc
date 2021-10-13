## Возврат предоплаты
### Возврата предоплаты
Средствами JSON API можно запрашивать списки Возвратов предоплат и сведения по отдельным Возвратам предоплат. Кодом сущности для Возврата предоплаты в составе JSON API является ключевое слово **prepaymentreturn**.

По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](../#mojsklad-json-api-obschie-swedeniq-kontextnyj-poisk). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов предоплат на соответствие поисковой строке будет осуществлён по следующим полям:

+ по наименованию предоплаты **name**

### Атрибуты сущности

| Название         | Тип                                                       | Описание                                                                                                                                                                 |
| ---------------- | :-------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Возврата предоплаты<br>`+Обязательное при ответе`                                                                                                             |
| **id**           | UUID                                                      | ID Возврата предоплаты<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                |
| **accountId**    | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                     |
| **syncId**       | UUID                                                      | ID синхронизации. После заполнения недоступен для изменения                                                                                                              |
| **updated**      | DateTime                                                  | Момент последнего обновления Возврата предоплаты<br>`+Обязательное при ответе` `+Только для чтения`                                                                      |
| **deleted**      | DateTime                                                  | Момент последнего удаления Возврата предоплаты<br>`+Только для чтения`                                                                                                   |
| **name**         | String(255)                                               | Наименование Возврата предоплаты<br>`+Обязательное при ответе`                                                                                                           |
| **description**  | String(4096)                                              | Комментарий Возврата предоплаты                                                                                                                                          |
| **code**         | String(255)                                               | Код Возврата предоплаты                                                                                                                                                  |
| **externalCode** | String(255)                                               | Внешний код Возврата предоплаты<br>`+Обязательное при ответе`                                                                                                            |
| **moment**       | DateTime                                                  | Дата Счета<br>`+Обязательное при ответе`                                                                                                                                 |
| **applicable**   | Boolean                                                   | Отметка о проведении<br>`+Обязательное при ответе`                                                                                                                       |
| **vatEnabled**   | Boolean                                                   | Учитывается ли НДС<br>`+Обязательное при ответе`                                                                                                                         |
| **vatIncluded**  | Boolean                                                   | Включен ли НДС в цену                                                                                                                                                    |
| **sum**          | Int                                                       | Сумма Возврата предоплаты в копейках<br>`+Обязательное при ответе` `+Только для чтения`                                                                                  |
| **rate**         | Object                                                    | Валюта. [Подробнее тут](../documents/#dokumenty-obschie-swedeniq-valuta-w-dokumentah)<br>`+Обязательное при ответе`                                                      |
| **owner**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Владелец (Сотрудник)<br>`+Обязательное при ответе` `+Expand`                                                                                                             |
| **shared**       | Boolean                                                   | Общий доступ<br>`+Обязательное при ответе`                                                                                                                               |
| **group**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                                                 |
| **organization** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные юрлица<br>`+Expand`                                                                                                                                           |
| **agent**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные контрагента<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                                                |
| **state**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные статуса Возврата предоплаты<br>`+Expand`                                                                                                                      |
| **attributes**   | Array(Object)                                             | Коллекция метаданных доп. полей. [Поля объекта](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)                                                  |
| **created**      | DateTime                                                  | Дата создания<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                         |
| **printed**      | Boolean                                                   | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                 |
| **published**    | Boolean                                                   | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                                               |
| **vatSum**       | Float                                                     | Сумма включая НДС<br>`+Обязательное при ответе`                                                                                                                          |
| **retailStore**  | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Точки продаж<br>`+Обязательное при ответе` `+Expand`                                                                                                          |
| **retailShift**  | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Розничной смены<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                                            |
| **prepayment**   | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Предоплаты<br>`+Обязательное при ответе` `+Expand`                                                                                                            |
| **cashSum**      | Float                                                     | Оплачено наличными<br>`+Обязательное при ответе`                                                                                                                         |
| **noCashSum**    | Float                                                     | Оплачено картой<br>`+Обязательное при ответе`                                                                                                                            |
| **qrSum**        | Float                                                     | Оплачено по QR-коду<br>`+Обязательное при ответе`                                                                                                                        |
| **positions**    | MetaArray                                                 | Метаданные позиций Возврата предоплаты<br>`+Обязательное при ответе` `+Expand`                                                                                           |
| **taxSystem**    | Enum                                                      | Код системы налогообложения. [Подробнее тут](../dictionaries/#dokumenty-vozwrat-predoplaty-atributy-suschnosti-poluchit-poziciu-predoplaty-kod-sistemy-nalogooblozheniq) |
| **files**        | MetaArray                                                 | Метаданные массива [Файлов](../dictionaries/#suschnosti-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand`                            |

##### Код системы налогообложения
Значения поля taxSystem.

| Значение                                 | Описание                     |
| ---------------------------------------- | :--------------------------- |
| **GENERAL_TAX_SYSTEM**                   | ОСН                          |
| **SIMPLIFIED_TAX_SYSTEM_INCOME**         | УСН. Доход                   |
| **SIMPLIFIED_TAX_SYSTEM_INCOME_OUTCOME** | УСН. Доход-Расход            |
| **UNIFIED_AGRICULTURAL_TAX**             | ЕСХН                         |
| **PRESUMPTIVE_TAX_SYSTEM**               | ЕНВД                         |
| **PATENT_BASED**                         | Патент                       |

#### Позиции Возврата предоплаты
Позиции Возврата предоплаты - это список товаров/услуг/модификаций/серий.
Объект позиции Возврата предоплаты содержит следующие поля:

| Название       | Тип                                                       | Описание                                                                                                                                                                                                                                                 |
| -------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **id**         | UUID                                                      | ID позиции<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                            |
| **accountId**  | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                     |
| **quantity**   | Int                                                       | Количество товаров/услуг данного вида в позиции. Если позиция - товар, у которого включен учет по серийным номерам, то значение в этом поле всегда будет равно количеству серийных номеров для данной позиции в документе.<br>`+Обязательное при ответе` |
| **price**      | Float                                                     | Цена товара/услуги в копейках<br>`+Обязательное при ответе`                                                                                                                                                                                              |
| **discount**   | Int                                                       | Процент скидки или наценки. Наценка указывается отрицательным числом, т.е. -10 создаст наценку в 10%<br>`+Обязательное при ответе`                                                                                                                       |
| **vat**        | Int                                                       | НДС, которым облагается текущая позиция<br>`+Обязательное при ответе`                                                                                                                                                                                    |
| **vatEnabled** | Boolean                                                   | Включен ли НДС для позиции. С помощью этого флага для позиции можно выставлять НДС = 0 или НДС = "без НДС". (vat = 0, vatEnabled = false) -> vat = "без НДС", (vat = 0, vatEnabled = true) -> vat = 0%.<br>`+Обязательное при ответе`                    |
| **assortment** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные товара/услуги/серии/модификации, которую представляет собой позиция<br>`+Обязательное при ответе` `+Expand`                                                                                                                                   |
| **pack**       | Object                                                    | Упаковка Товара. [Подробнее тут](../dictionaries/#suschnosti-towar-towary-atributy-wlozhennyh-suschnostej-upakowki-towara)                                                                                                                               |

### Атрибуты доступные для фильтрации

| Значение                       | Описание                                                             |
| ------------------------------ | :------------------------------------------------------------------- |
| **id**                         | ID в формате UUID                                                    |
| **syncId**                     | ID синхронизации                                                     |
| **updated**                    | Момент последнего обновления сущности                                |
| **updatedBy**                  | Автор последнего обновления сущности в формате `uid` (`admin@admin`) |
| **deleted**                    | Момент последнего удаления сущности                                  |
| **name**                       | номер Предоплаты                                                     |
| **description**                | Комментарий Предоплаты                                               |
| **externalCode**               | Внешний код Предоплаты                                               |
| **moment**                     | Дата Предоплаты                                                      |
| **applicable**                 | Отметка о проведении                                                 |
| **sum**                        | Сумма Предоплаты в установленной валюте                              |
| **owner**                      | Ссылка на Владельца (Сотрудника)                                     |
| **shared**                     | Общий доступ                                                         |
| **group**                      | Отдел сотрудника                                                     |
| **organization**               | Ссылка на ваше юрлицо                                                |
| **agent**                      | Ссылка на контрагента                                                |
| **state**                      | Статус Предоплаты                                                    |
| **created**                    | Дата создания                                                        |
| **isDeleted**                  | Удалена ли Предоплата                                                |

### Атрибуты доступные для сортировки

| Значение                       | Описание                                |
| ------------------------------ | :-------------------------------------- |
| **id**                         | ID в формате UUID                       |
| **syncId**                     | ID синхронизации                        |
| **updated**                    | Момент последнего обновления сущности   |
| **name**                       | номер Предоплаты                        |
| **description**                | Комментарий Предоплаты                  |
| **externalCode**               | Внешний код Предоплаты                  |
| **moment**                     | Дата Предоплаты                         |
| **applicable**                 | Отметка о проведении                    |
| **sum**                        | Сумма Предоплаты в установленной валюте |
| **created**                    | Дата создания                           |

### Получить список Возвратов предоплаты [GET]
Запрос всех Возвратов предоплат на данной учётной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                       |
| ----------- | :-------------------------------------------------------- | :------------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                           |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                   |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Возвраты предоплат. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |


> Получить список Предоплат

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/prepaymentreturn"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Предоплат.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepaymentreturn",
    "type": "prepaymentreturn",
    "mediaType": "application/json",
    "size": 1,
    "limit": 25,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/bdf4e318-38df-11e9-ac12-000c0000004e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/metadata",
        "type": "prepaymentreturn",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#prepaymentreturn/edit?id=bdf4e318-38df-11e9-ac12-000c0000004e"
      },
      "id": "bdf4e318-38df-11e9-ac12-000c0000004e",
      "accountId": "783e70de-2e92-11e9-ac12-000b00000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/78d0453c-2e92-11e9-ac12-000e0000002f",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=78d0453c-2e92-11e9-ac12-000e0000002f"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/783fd0fd-2e92-11e9-ac12-000b00000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "version": 0,
      "updated": "2019-02-25 12:28:42",
      "name": "00002",
      "description": "Комментарий",
      "externalCode": "Avamj0cIjGYE6P500XlBD1",
      "moment": "2019-02-25 12:28:00",
      "applicable": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/790def39-2e92-11e9-ac12-000e00000061",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=790def39-2e92-11e9-ac12-000e00000061"
          }
        }
      },
      "sum": 30000,
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/790cd2d0-2e92-11e9-ac12-000e0000005f",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=790cd2d0-2e92-11e9-ac12-000e0000005f"
        }
      },
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/7906d621-2e92-11e9-ac12-000e0000005a",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=7906d621-2e92-11e9-ac12-000e0000005a"
        }
      },
      "documents": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/bdf4e318-38df-11e9-ac12-000c0000004e/documents",
          "mediaType": "application/json",
          "size": 0,
          "limit": 100,
          "offset": 0
        }
      },
      "created": "2016-08-25 19:55:00",
      "printed": true,
      "published": true,
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/bdf4e318-38df-11e9-ac12-000c0000004e/positions",
          "type": "prepaymentreturnposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 100,
          "offset": 0
        }
      },
      "vatEnabled": true,
      "vatIncluded": true,
      "vatSum": 5000,
      "retailStore": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/79749705-2e92-11e9-ac12-000e00000071",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
          "type": "retailstore",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#retailstore/edit?id=79749705-2e92-11e9-ac12-000e00000071"
        }
      },
      "retailShift": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/f1e3aa91-366b-11e9-ac12-000b0000007e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
          "type": "retailshift",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#retailshift/edit?id=f1e3aa91-366b-11e9-ac12-000b0000007e"
        }
      },
      "prepayment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepayment/857c7a16-366b-11e9-ac12-000b00000070",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/prepayment/metadata",
          "type": "prepayment",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#prepayment/edit?id=857c7a16-366b-11e9-ac12-000b00000070"
        }
      },
      "cashSum": 15000,
      "noCashSum": 15000,
      "qrSum": 0,
      "taxSystem": "GENERAL_TAX_SYSTEM"
    }
  ]
}
```

### Метаданные Возвратов предоплат
#### Метаданные Возвратов предоплат
Запрос на получение метаданных Возвратов предоплат. Результат - объект JSON, включающий в себя:

| Параметр                       | Описание                                                                                                                 |
| ------------------------------ | :----------------------------------------------------------------------------------------------------------------------- |
| **meta**                       | Ссылка на метаданные Возвратов предоплат                                                                                 |
| **attributes**                 | Массив объектов доп. полей Возвратов предоплат в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **states**                     | Массив статусов Возвратов предоплат                                                                                      |
| **createShared**               | создавать новые Возвраты предоплат с меткой "Общий"                                                                      |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Возвратов предоплат

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление метаданных Возвратов предоплат.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/metadata/attributes/e606ab19-38df-11e9-ac12-000c00000058",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "e606ab19-38df-11e9-ac12-000c00000058",
      "name": "Label",
      "type": "string",
      "required": false
    }
  ],
  "states": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/metadata/states/dfd2e697-38df-11e9-ac12-000c00000054",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/metadata",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "dfd2e697-38df-11e9-ac12-000c00000054",
      "accountId": "783e70de-2e92-11e9-ac12-000b00000001",
      "name": "Новый",
      "color": 10066329,
      "stateType": "Regular",
      "entityType": "prepaymentreturn"
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
  "https://online.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b19",
  "name": "Label",
  "type": "string",
  "required": false
}
```

### Возврат предоплаты
#### Получить Возврат предоплаты [GET]
**Параметры**

| Параметр | Описание                                                                                    |
| :------- | :------------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Возврата предоплаты. |
 
> Запрос на получение отдельной Предоплаты с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Предоплаты.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/7944ef04-f831-11e5-7a69-971500188b19",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/metadata",
    "type": "prepaymentreturn",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#prepaymentreturn/edit?id=7944ef04-f831-11e5-7a69-971500188b19"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b19",
  "accountId": "783e70de-2e92-11e9-ac12-000b00000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/78d0453c-2e92-11e9-ac12-000e0000002f",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=78d0453c-2e92-11e9-ac12-000e0000002f"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/783fd0fd-2e92-11e9-ac12-000b00000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "version": 0,
  "updated": "2019-02-25 12:28:42",
  "name": "00002",
  "description": "Комментарий",
  "externalCode": "Avamj0cIjGYE6P500XlBD1",
  "moment": "2019-02-25 12:28:00",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/790def39-2e92-11e9-ac12-000e00000061",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=790def39-2e92-11e9-ac12-000e00000061"
      }
    }
  },
  "sum": 30000,
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/790cd2d0-2e92-11e9-ac12-000e0000005f",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=790cd2d0-2e92-11e9-ac12-000e0000005f"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/7906d621-2e92-11e9-ac12-000e0000005a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=7906d621-2e92-11e9-ac12-000e0000005a"
    }
  },
  "documents": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/7944ef04-f831-11e5-7a69-971500188b19/documents",
      "mediaType": "application/json",
      "size": 0,
      "limit": 100,
      "offset": 0
    }
  },
  "created": "2016-08-25 19:55:00",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/7944ef04-f831-11e5-7a69-971500188b19/positions",
      "type": "prepaymentreturnposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 100,
      "offset": 0
    }
  },
  "vatEnabled": true,
  "vatIncluded": true,
  "vatSum": 5000,
  "retailStore": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/79749705-2e92-11e9-ac12-000e00000071",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
      "type": "retailstore",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#retailstore/edit?id=79749705-2e92-11e9-ac12-000e00000071"
    }
  },
  "retailShift": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/f1e3aa91-366b-11e9-ac12-000b0000007e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
      "type": "retailshift",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#retailshift/edit?id=f1e3aa91-366b-11e9-ac12-000b0000007e"
    }
  },
  "prepayment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepayment/857c7a16-366b-11e9-ac12-000b00000070",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/prepayment/metadata",
      "type": "prepayment",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#prepayment/edit?id=857c7a16-366b-11e9-ac12-000b00000070"
    }
  },
  "cashSum": 15000,
  "noCashSum": 15000,
  "qrSum": 0
}
```

#### Удалить Возврат предоплаты

**Параметры**

| Параметр | Описание                                                                                    |
| :------- | :------------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Возврата предоплаты. |

> Запрос на удаление Возврата предоплаты с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Возврата предоплаты.

### Позиции Возврата предоплаты
Отдельный ресурс для управления позициями Возврата предоплаты. С его помощью вы можете запросить позиции большого документа, количество строк в котором превышает лимит на количество строк в выдаче документа. Этот лимит равен 1000. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](../#mojsklad-json-api-obschie-swedeniq-rabota-s-poziciqmi-dokumentow).

#### Получить позиции Возврата предоплаты
Запрос на получение списка всех позиций данного Возврата предоплаты.

| Название    | Тип                                                       | Описание                                                                |
| ----------- | :-------------------------------------------------------- | :---------------------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                                    |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                            |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой позиции Возврата предоплаты. |

**Параметры**

| Параметр   | Описание                                                                                                                               |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Возврата предоплаты.                                            |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Запрос на получение списка всех позиций данного Возврата предоплаты.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/7944ef04-f831-11e5-7a69-971500188b19/positions"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций отдельного Возврата предоплаты.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/7944ef04-f831-11e5-7a69-971500188b19/positions",
    "type": "prepaymentreturnposition",
    "mediaType": "application/json",
    "size": 1,
    "limit": 25,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
        "type": "prepaymentreturnposition",
        "mediaType": "application/json"
      },
      "id": "34f6344f-015e-11e6-9464-e4de0000006c",
      "accountId": "783e70de-2e92-11e9-ac12-000b00000001",
      "quantity": 2,
      "price": 15000,
      "discount": 0,
      "vat": 20,
      "vatEnabled": true,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/58e50cd3-366a-11e9-ac12-000b00000036",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=58e4982f-366a-11e9-ac12-000b00000034"
        }
      }
    }
  ]
}
```

### Позиция Возврата предоплаты
Отдельная позиция Возврата предоплаты с указанным id позиции.

#### Получить позицию Возврата предоплаты

**Параметры**

| Параметр       | Описание                                                                                            |
| :------------- | :-------------------------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Возврата предоплаты.         |
| **positionID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции Возврата предоплаты. |
 
> Запрос на получение отдельной позиции Возврата предоплаты с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции Возврата предоплаты.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
    "type": "prepaymentreturnposition",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "783e70de-2e92-11e9-ac12-000b00000001",
  "quantity": 2,
  "price": 15000,
  "discount": 0,
  "vat": 20,
  "vatEnabled": true,
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/58e50cd3-366a-11e9-ac12-000b00000036",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=58e4982f-366a-11e9-ac12-000b00000034"
    }
  }
}
```
