## Возврат предоплаты
### Возврата предоплаты
Средствами JSON API можно запрашивать списки Возвратов предоплат и сведения по отдельным Возвратам предоплат. Кодом сущности для Возврата предоплаты в составе JSON API является ключевое слово **prepaymentreturn**.

По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](#/general#3-kontekstnyj-poisk). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов предоплат на соответствие поисковой строке будет осуществлён по следующим полям:

+ по наименованию предоплаты **name**

### Атрибуты сущности

| Название         | Тип                            | Фильтрация                                                                                                                                        | Описание                                                                                                                                      |
| ---------------- |:-------------------------------| :------------------------------------------------------------------------------------------------------------------------------------------------ |:----------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**    | UUID                           | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                          |
| **agent**        | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Метаданные контрагента<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                     |
| **applicable**   | Boolean                        | `=` `!=`                                                                                                                                          | Отметка о проведении<br>`+Обязательное при ответе`                                                                                            |
| **attributes**   | Array(Object)                  | [Операторы доп. полей](#/general#4-filtraciya-po-dopolnitelnym-polyam) | Коллекция метаданных доп. полей. [Поля объекта](#/general#3-rabota-s-dopolnitelnymi-polyami)                       |
| **cashSum**      | Float                          |                                                                                                                                                   | Оплачено наличными<br>`+Обязательное при ответе`                                                                                              |
| **code**         | String(255)                    | `=` `!=` `~` `~=` `=~`                                                                                                                            | Код Возврата предоплаты                                                                                                                       |
| **created**      | DateTime                       | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата создания<br>`+Обязательное при ответе` `+Только для чтения`                                                                              |
| **deleted**      | DateTime                       | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего удаления Возврата предоплаты<br>`+Только для чтения`                                                                        |
| **description**  | String(4096)                   | `=` `!=` `~` `~=` `=~`                                                                                                                            | Комментарий Возврата предоплаты                                                                                                               |
| **externalCode** | String(255)                    | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код Возврата предоплаты<br>`+Обязательное при ответе`                                                                                 |
| **files**        | MetaArray                      |                                                                                                                                                   | Метаданные массива [Файлов](#/dictionaries/files#2-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand` |
| **group**        | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                      |
| **id**           | UUID                           | `=` `!=`                                                                                                                                          | ID Возврата предоплаты<br>`+Обязательное при ответе` `+Только для чтения`                                                                     |
| **meta**         | [Meta](#/general#3-metadannye) |                                                                                                                                                   | Метаданные Возврата предоплаты<br>`+Обязательное при ответе`                                                                                  |
| **moment**       | DateTime                       | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата документа<br>`+Обязательное при ответе`                                                                                                  |
| **name**         | String(255)                    | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование Возврата предоплаты<br>`+Обязательное при ответе`                                                                                |
| **noCashSum**    | Float                          |                                                                                                                                                   | Оплачено картой<br>`+Обязательное при ответе`                                                                                                 |
| **organization** | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Метаданные юрлица<br>`+Expand`                                                                                                                |
| **owner**        | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Expand`                                                                                                             |
| **positions**    | MetaArray                      |                                                                                                                                                   | Метаданные позиций Возврата предоплаты<br>`+Обязательное при ответе` `+Expand`                                                                |
| **prepayment**   | [Meta](#/general#3-metadannye) |                                                                                                                                                   | Метаданные Предоплаты<br>`+Обязательное при ответе` `+Expand`                                                                                 |
| **printed**      | Boolean                        | `=` `!=`                                                                                                                                          | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                      |
| **published**    | Boolean                        | `=` `!=`                                                                                                                                          | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                    |
| **qrSum**        | Float                          |                                                                                                                                                   | Оплачено по QR-коду<br>`+Обязательное при ответе`                                                                                             |
| **rate**         | Object                         |                                                                                                                                                   | Валюта. [Подробнее тут](#/documents/common-info#3-valyuta-v-dokumentah)<br>`+Обязательное при ответе`                           |
| **retailShift**  | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Метаданные Розничной смены<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                 |
| **retailStore**  | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Метаданные Точки продаж<br>`+Обязательное при ответе` `+Expand`                                                                               |
| **shared**       | Boolean                        | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе`                                                                                                    |
| **state**        | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Метаданные статуса Возврата предоплаты<br>`+Expand`                                                                                           |
| **sum**          | Float                          | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Сумма Возврата предоплаты в копейках<br>`+Обязательное при ответе` `+Только для чтения`                                                       |
| **syncId**       | UUID                           | `=` `!=`                                                                                                                                          | ID синхронизации. После заполнения недоступен для изменения                                                                                   |
| **taxSystem**    | Enum                           |                                                                                                                                                   | Код системы налогообложения. [Подробнее тут](#/dictionaries/product#5-kod-sistemy-nalogooblozheniya)       |
| **updated**      | DateTime                       | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления Возврата предоплаты<br>`+Обязательное при ответе` `+Только для чтения`                                           |
| **vatEnabled**   | Boolean                        |                                                                                                                                                   | Учитывается ли НДС<br>`+Обязательное при ответе`                                                                                              |
| **vatIncluded**  | Boolean                        |                                                                                                                                                   | Включен ли НДС в цену                                                                                                                         |
| **vatSum**       | Float                          |                                                                                                                                                   | Сумма НДС<br>`+Обязательное при ответе`                                                                                                       |

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
| **accountId**  | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                     |
| **assortment** | [Meta](#/general#3-metadannye) | Метаданные товара/услуги/серии/модификации, которую представляет собой позиция<br>`+Обязательное при ответе` `+Expand`                                                                                                                                   |
| **discount**   | Float                                                     | Процент скидки или наценки. Наценка указывается отрицательным числом, т.е. -10 создаст наценку в 10%<br>`+Обязательное при ответе`                                                                                                                       |
| **id**         | UUID                                                      | ID позиции<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                            |
| **pack**       | Object                                                    | Упаковка Товара. [Подробнее тут](#/dictionaries/product#5-upakovki-tovara)                                                                                                                               |
| **price**      | Float                                                     | Цена товара/услуги в копейках<br>`+Обязательное при ответе`                                                                                                                                                                                              |
| **quantity**   | Float                                                     | Количество товаров/услуг данного вида в позиции. Если позиция - товар, у которого включен учет по серийным номерам, то значение в этом поле всегда будет равно количеству серийных номеров для данной позиции в документе.<br>`+Обязательное при ответе` |
| **vat**        | Int                                                       | НДС, которым облагается текущая позиция<br>`+Обязательное при ответе`                                                                                                                                                                                    |
| **vatEnabled** | Boolean                                                   | Включен ли НДС для позиции. С помощью этого флага для позиции можно выставлять НДС = 0 или НДС = "без НДС". (vat = 0, vatEnabled = false) -> vat = "без НДС", (vat = 0, vatEnabled = true) -> vat = 0%.<br>`+Обязательное при ответе`                    |

### Атрибуты доступные для фильтрации

| Значение                       | Описание                                                             |
| ------------------------------ | :------------------------------------------------------------------- |
| **agent**                      | Ссылка на контрагента                                                |
| **applicable**                 | Отметка о проведении                                                 |
| **created**                    | Дата создания                                                        |
| **deleted**                    | Момент последнего удаления сущности                                  |
| **description**                | Комментарий Предоплаты                                               |
| **externalCode**               | Внешний код Предоплаты                                               |
| **group**                      | Отдел сотрудника                                                     |
| **id**                         | ID в формате UUID                                                    |
| **isDeleted**                  | Удалена ли Предоплата                                                |
| **moment**                     | Дата Предоплаты                                                      |
| **name**                       | номер Предоплаты                                                     |
| **organization**               | Ссылка на ваше юрлицо                                                |
| **owner**                      | Ссылка на Владельца (Сотрудника)                                     |
| **shared**                     | Общий доступ                                                         |
| **state**                      | Статус Предоплаты                                                    |
| **sum**                        | Сумма Предоплаты в установленной валюте                              |
| **syncId**                     | ID синхронизации                                                     |
| **updated**                    | Момент последнего обновления сущности                                |
| **updatedBy**                  | Автор последнего обновления сущности в формате `uid` (`admin@admin`) |

### Атрибуты доступные для сортировки

| Значение                       | Описание                                |
| ------------------------------ | :-------------------------------------- |
| **applicable**                 | Отметка о проведении                    |
| **created**                    | Дата создания                           |
| **description**                | Комментарий Предоплаты                  |
| **externalCode**               | Внешний код Предоплаты                  |
| **id**                         | ID в формате UUID                       |
| **moment**                     | Дата Предоплаты                         |
| **name**                       | номер Предоплаты                        |
| **sum**                        | Сумма Предоплаты в установленной валюте |
| **syncId**                     | ID синхронизации                        |
| **updated**                    | Момент последнего обновления сущности   |

### Получить список Возвратов предоплаты [GET]
Запрос всех Возвратов предоплат на данной учётной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                       |
| ----------- | :-------------------------------------------------------- | :------------------------------------------------------------- |
| **meta**    | [Meta](#/general#3-metadannye) | Метаданные о выдаче,                                           |
| **context** | [Meta](#/general#3-metadannye) | Метаданные о сотруднике, выполнившем запрос.                   |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Возвраты предоплат. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |


> Получить список Предоплат

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/prepaymentreturn" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Предоплат.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/prepaymentreturn",
    "type": "prepaymentreturn",
    "mediaType": "application/json",
    "size": 1,
    "limit": 25,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/bdf4e318-38df-11e9-ac12-000c0000004e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/metadata",
        "type": "prepaymentreturn",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#prepaymentreturn/edit?id=bdf4e318-38df-11e9-ac12-000c0000004e"
      },
      "id": "bdf4e318-38df-11e9-ac12-000c0000004e",
      "accountId": "783e70de-2e92-11e9-ac12-000b00000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/78d0453c-2e92-11e9-ac12-000e0000002f",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=78d0453c-2e92-11e9-ac12-000e0000002f"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/783fd0fd-2e92-11e9-ac12-000b00000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/790def39-2e92-11e9-ac12-000e00000061",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=790def39-2e92-11e9-ac12-000e00000061"
          }
        }
      },
      "sum": 30000,
      "agent": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/790cd2d0-2e92-11e9-ac12-000e0000005f",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=790cd2d0-2e92-11e9-ac12-000e0000005f"
        }
      },
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/7906d621-2e92-11e9-ac12-000e0000005a",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=7906d621-2e92-11e9-ac12-000e0000005a"
        }
      },
      "documents": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/bdf4e318-38df-11e9-ac12-000c0000004e/documents",
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
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/bdf4e318-38df-11e9-ac12-000c0000004e/positions",
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
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/79749705-2e92-11e9-ac12-000e00000071",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
          "type": "retailstore",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#retailstore/edit?id=79749705-2e92-11e9-ac12-000e00000071"
        }
      },
      "retailShift": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/retailshift/f1e3aa91-366b-11e9-ac12-000b0000007e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
          "type": "retailshift",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#retailshift/edit?id=f1e3aa91-366b-11e9-ac12-000b0000007e"
        }
      },
      "prepayment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/prepayment/857c7a16-366b-11e9-ac12-000b00000070",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/prepayment/metadata",
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
Запрос на получение метаданных Возвратов предоплат. Результат - объект JSON, включающий в себя:

| Параметр                       | Описание                                                                                                                 |
| ------------------------------ | :----------------------------------------------------------------------------------------------------------------------- |
| **meta**                       | Ссылка на метаданные Возвратов предоплат                                                                                 |
| **attributes**                 | Массив объектов доп. полей Возвратов предоплат в формате [Метаданных](#/general#3-metadannye) |
| **states**                     | Массив статусов Возвратов предоплат                                                                                      |
| **createShared**               | создавать новые Возвраты предоплат с меткой "Общий"                                                                      |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](#/general#3-rabota-s-dopolnitelnymi-polyami).

> Метаданные Возвратов предоплат

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/metadata" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление метаданных Возвратов предоплат.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/metadata/attributes/e606ab19-38df-11e9-ac12-000c00000058",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/metadata/states/dfd2e697-38df-11e9-ac12-000c00000054",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/metadata",
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

#### Запросы - Отдельное доп. поле
> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b19",
  "name": "Label",
  "type": "string",
  "required": false
}
```

### Запросы - Возврат предоплаты
#### Получить Возврат предоплаты [GET]
**Параметры**

| Параметр | Описание                                                                                    |
| :------- | :------------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Возврата предоплаты. |
 
> Запрос на получение отдельной Предоплаты с указанным id.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/7944ef04-f831-11e5-7a69-971500188b19" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Предоплаты.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/7944ef04-f831-11e5-7a69-971500188b19",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/metadata",
    "type": "prepaymentreturn",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#prepaymentreturn/edit?id=7944ef04-f831-11e5-7a69-971500188b19"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b19",
  "accountId": "783e70de-2e92-11e9-ac12-000b00000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/78d0453c-2e92-11e9-ac12-000e0000002f",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=78d0453c-2e92-11e9-ac12-000e0000002f"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/783fd0fd-2e92-11e9-ac12-000b00000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/790def39-2e92-11e9-ac12-000e00000061",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=790def39-2e92-11e9-ac12-000e00000061"
      }
    }
  },
  "sum": 30000,
  "agent": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/790cd2d0-2e92-11e9-ac12-000e0000005f",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=790cd2d0-2e92-11e9-ac12-000e0000005f"
    }
  },
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/7906d621-2e92-11e9-ac12-000e0000005a",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=7906d621-2e92-11e9-ac12-000e0000005a"
    }
  },
  "documents": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/7944ef04-f831-11e5-7a69-971500188b19/documents",
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
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/7944ef04-f831-11e5-7a69-971500188b19/positions",
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
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/79749705-2e92-11e9-ac12-000e00000071",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
      "type": "retailstore",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#retailstore/edit?id=79749705-2e92-11e9-ac12-000e00000071"
    }
  },
  "retailShift": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/retailshift/f1e3aa91-366b-11e9-ac12-000b0000007e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
      "type": "retailshift",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#retailshift/edit?id=f1e3aa91-366b-11e9-ac12-000b0000007e"
    }
  },
  "prepayment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/prepayment/857c7a16-366b-11e9-ac12-000b00000070",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/prepayment/metadata",
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
curl --compressed -X DELETE \
  "https://api.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/7944ef04-f831-11e5-7a69-971500188b19" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление Возврата предоплаты.

### Управление позициями Возврата предоплаты
Отдельный ресурс для управления позициями Возврата предоплаты. С его помощью вы можете запросить позиции большого документа, количество строк в котором превышает лимит на количество строк в выдаче документа. Этот лимит равен 1000. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](#/general#3-rabota-s-poziciyami-dokumentov).

#### Получить позиции Возврата предоплаты
Запрос на получение списка всех позиций данного Возврата предоплаты.

| Название    | Тип                                                       | Описание                                                                |
| ----------- | :-------------------------------------------------------- | :---------------------------------------------------------------------- |
| **meta**    | [Meta](#/general#3-metadannye) | Метаданные о выдаче,                                                    |
| **context** | [Meta](#/general#3-metadannye) | Метаданные о сотруднике, выполнившем запрос.                            |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой позиции Возврата предоплаты. |

**Параметры**

| Параметр   | Описание                                                                                                                               |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Возврата предоплаты.                                            |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Запрос на получение списка всех позиций данного Возврата предоплаты.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/7944ef04-f831-11e5-7a69-971500188b19/positions" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций отдельного Возврата предоплаты.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/7944ef04-f831-11e5-7a69-971500188b19/positions",
    "type": "prepaymentreturnposition",
    "mediaType": "application/json",
    "size": 1,
    "limit": 25,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
        "type": "prepaymentreturnposition",
        "mediaType": "application/json"
      },
      "id": "34f6344f-015e-11e6-9464-e4de0000006c",
      "accountId": "783e70de-2e92-11e9-ac12-000b00000001",
      "quantity": 2,
      "price": 15000.0,
      "discount": 0,
      "vat": 20,
      "vatEnabled": true,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/58e50cd3-366a-11e9-ac12-000b00000036",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
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
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции Возврата предоплаты.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/prepaymentreturn/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
    "type": "prepaymentreturnposition",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "783e70de-2e92-11e9-ac12-000b00000001",
  "quantity": 2,
  "price": 15000.0,
  "discount": 0,
  "vat": 20,
  "vatEnabled": true,
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/58e50cd3-366a-11e9-ac12-000b00000036",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=58e4982f-366a-11e9-ac12-000b00000034"
    }
  }
}
```
