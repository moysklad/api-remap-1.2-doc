## Предоплата
### Предоплаты 
Средствами JSON API можно запрашивать списки Предоплат и сведения по отдельным Предоплатам. Кодом сущности для Предоплаты в составе JSON API является ключевое слово **prepayment**. Больше о Предоплатах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/360015823873-%D0%9F%D1%80%D0%B5%D0%B4%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D0%B0-%D0%B2-%D0%BA%D0%B0%D1%81%D1%81%D0%B5).

По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](../#mojsklad-json-api-obschie-swedeniq-kontextnyj-poisk). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов предоплат на соответствие поисковой строке будет осуществлён по следующим полям:

+ по наименованию предоплаты **name**

#### Атрибуты сущности

| Название          | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                                        |
| ----------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| **accountId**     | UUID                                                      | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                            |
| **agent**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные контрагента<br>`+Обязательное при ответе` `+Expand`                                                                                |
| **applicable**    | Boolean                                                   | `=` `!=`                                                                                                                                          | Отметка о проведении<br>`+Обязательное при ответе`                                                                                              |
| **attributes**    | Array(Object)                                             | [Операторы доп. полей](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-fil-traciq-po-dopolnitel-nym-polqm) | Коллекция метаданных доп. полей. [Поля объекта](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)                         |
| **cashSum**       | Float                                                     |                                                                                                                                                   | Оплачено наличными<br>`+Обязательное при ответе`                                                                                                |
| **code**          | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Код Предоплаты                                                                                                                                  |
| **created**       | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата создания<br>`+Обязательное при ответе` `+Только для чтения`                                                                                |
| **customerOrder** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные Заказа Покупателя<br>`+Обязательное при ответе` `+Expand`                                                                            |
| **deleted**       | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего удаления Предоплаты<br>`+Только для чтения`                                                                                   |
| **description**   | String(4096)                                              | `=` `!=` `~` `~=` `=~`                                                                                                                            | Комментарий Предоплаты                                                                                                                          |
| **externalCode**  | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код Предоплаты<br>`+Обязательное при ответе`                                                                                            |
| **files**         | MetaArray                                                 |                                                                                                                                                   | Метаданные массива [Файлов](../dictionaries/#suschnosti-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand`   |
| **group**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                        |
| **id**            | UUID                                                      | `=` `!=`                                                                                                                                          | ID Предоплаты<br>`+Обязательное при ответе` `+Только для чтения`                                                                                |
| **meta**          | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные Предоплаты<br>`+Обязательное при ответе`                                                                                             |
| **moment**        | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата документа<br>`+Обязательное при ответе`                                                                                                    |
| **name**          | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование Предоплаты<br>`+Обязательное при ответе`                                                                                           |
| **noCashSum**     | Float                                                     |                                                                                                                                                   | Оплачено картой<br>`+Обязательное при ответе`                                                                                                   |
| **organization**  | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                            |
| **owner**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Обязательное при ответе` `+Expand`                                                                                    |
| **positions**     | MetaArray                                                 |                                                                                                                                                   | Метаданные позиций Предоплаты<br>`+Обязательное при ответе` `+Expand`                                                                           |
| **printed**       | Boolean                                                   | `=` `!=`                                                                                                                                          | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                        |
| **published**     | Boolean                                                   | `=` `!=`                                                                                                                                          | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                      |
| **qrSum**         | Float                                                     |                                                                                                                                                   | Оплачено по QR-коду<br>`+Обязательное при ответе`                                                                                               |
| **rate**          | Object                                                    |                                                                                                                                                   | Валюта. [Подробнее тут](../documents/#dokumenty-teh-operaciq-valuta-w-dokumentah)<br>`+Обязательное при ответе`                                 |
| **retailShift**   | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные Розничной смены<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                   |
| **retailStore**   | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные Точки продаж<br>`+Обязательное при ответе` `+Expand`                                                                                 |
| **returns**       | Array(Object)                                             |                                                                                                                                                   | Коллекция метаданных на связанные возвраты<br>`+Expand`                                                                                         |
| **shared**        | Boolean                                                   | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе`                                                                                                      |
| **state**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные статуса Предоплаты<br>`+Expand`                                                                                                      |
| **sum**           | Int                                                       | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Сумма Предоплаты в копейках<br>`+Обязательное при ответе` `+Только для чтения`                                                                  |
| **syncId**        | UUID                                                      | `=` `!=`                                                                                                                                          | ID синхронизации. После заполнения недоступен для изменения                                                                                     |
| **taxSystem**     | Enum                                                      |                                                                                                                                                   | Код системы налогообложения. [Подробнее тут](../dictionaries/#dokumenty-predoplata-predoplaty-atributy-suschnosti-kod-sistemy-nalogooblozheniq) |
| **updated**       | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления Предоплаты<br>`+Обязательное при ответе` `+Только для чтения`                                                      |
| **vatEnabled**    | Boolean                                                   |                                                                                                                                                   | Учитывается ли НДС<br>`+Обязательное при ответе`                                                                                                |
| **vatIncluded**   | Boolean                                                   |                                                                                                                                                   | Включен ли НДС в цену                                                                                                                           |
| **vatSum**        | Float                                                     |                                                                                                                                                   | Сумма НДС<br>`+Обязательное при ответе`                                                                                                 |

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

#### Позиции Предоплаты
Позиции Предоплаты - это список товаров/услуг/модификаций/серий.
Объект позиции Предоплаты содержит следующие поля:

| Название       | Тип                                                       | Описание                                                                                                                                                                                                                                                 |
| -------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **accountId**  | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                     |
| **assortment** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные товара/услуги/серии/модификации, которую представляет собой позиция<br>`+Обязательное при ответе` `+Expand`                                                                                                                                   |
| **discount**   | Int                                                       | Процент скидки или наценки. Наценка указывается отрицательным числом, т.е. -10 создаст наценку в 10%<br>`+Обязательное при ответе`                                                                                                                       |
| **id**         | UUID                                                      | ID позиции<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                            |
| **pack**       | Object                                                    | Упаковка Товара. [Подробнее тут](../dictionaries/#suschnosti-towar-towary-atributy-wlozhennyh-suschnostej-upakowki-towara)                                                                                                                               |
| **price**      | Float                                                     | Цена товара/услуги в копейках<br>`+Обязательное при ответе`                                                                                                                                                                                              |
| **quantity**   | Int                                                       | Количество товаров/услуг данного вида в позиции. Если позиция - товар, у которого включен учет по серийным номерам, то значение в этом поле всегда будет равно количеству серийных номеров для данной позиции в документе.<br>`+Обязательное при ответе` |
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

### Получить список Предоплат
Запрос всех Предоплат на данной учётной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                               |
| ----------- | :-------------------------------------------------------- | :----------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                   |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.           |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Предоплаты. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |

> Получить список Предоплат

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/prepayment"
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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepayment",
    "type": "prepayment",
    "mediaType": "application/json",
    "size": 1,
    "limit": 25,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepayment/857c7a16-366b-11e9-ac12-000b00000070",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/prepayment/metadata",
        "type": "prepayment",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#prepayment/edit?id=857c7a16-366b-11e9-ac12-000b00000070"
      },
      "id": "857c7a16-366b-11e9-ac12-000b00000070",
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
      "updated": "2019-02-25 12:22:11",
      "name": "00004",
      "description": "Комментарий",
      "externalCode": "wkOsJvdDguUeVJOB-g1LN1",
      "moment": "2019-02-22 09:31:00",
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
      "created": "2016-08-25 19:55:00",
      "printed": true,
      "published": true,      
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepayment/857c7a16-366b-11e9-ac12-000b00000070/positions",
          "type": "prepaymentposition",
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
      "customerOrder": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/81ff1592-366b-11e9-ac12-000b00000069",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
          "type": "customerorder",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#customerorder/edit?id=81ff1592-366b-11e9-ac12-000b00000069"
        }
      },
      "retailShift": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/49734306-366a-11e9-ac12-000b0000002a",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
          "type": "retailshift",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#retailshift/edit?id=49734306-366a-11e9-ac12-000b0000002a"
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

### Метаданные Предоплат 
#### Метаданные Предоплат 
Запрос на получение метаданных Заказов покупателей. Результат - объект JSON, включающий в себя:

| Параметр                       | Описание                                                                                                       |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------- |
| **meta**                       | Ссылка на метаданные Предоплат                                                                                 |
| **attributes**                 | Массив объектов доп. полей Предоплат в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **states**                     | Массив статусов Предоплат                                                                                      |
| **createShared**               | создавать новые Предоплаты с меткой "Общий"                                                                    |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Предоплат

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/prepayment/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление метаданных Предоплат.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepayment/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepayment/metadata/attributes/7c60b035-38df-11e9-ac12-000c0000004a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "7c60b035-38df-11e9-ac12-000c0000004a",
      "name": "Label",
      "type": "string",
      "required": false
    }
  ],
  "states": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepayment/metadata/states/727d2656-38df-11e9-ac12-000c00000046",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/prepayment/metadata",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "727d2656-38df-11e9-ac12-000c00000046",
      "accountId": "783e70de-2e92-11e9-ac12-000b00000001",
      "name": "Новая",
      "color": 10066329,
      "stateType": "Regular",
      "entityType": "prepayment"
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
  "https://online.moysklad.ru/api/remap/1.2/entity/prepayment/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepayment/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b19",
  "name": "Label",
  "type": "string",
  "required": false
}
```

### Предоплата

### Получить Предоплату

**Параметры**

| Параметр | Описание                                                                           |
| :------- | :--------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Предоплаты. |
 
> Запрос на получение отдельной Предоплаты с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/prepayment/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Предоплаты.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepayment/7944ef04-f831-11e5-7a69-971500188b19",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/prepayment/metadata",
    "type": "prepayment",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#prepayment/edit?id=7944ef04-f831-11e5-7a69-971500188b19"
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
  "version": 2,
  "updated": "2019-02-25 12:22:11",
  "name": "00004",
  "description": "Комментарий",
  "externalCode": "wkOsJvdDguUeVJOB-g1LN1",
  "moment": "2019-02-22 09:31:00",
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepayment/7944ef04-f831-11e5-7a69-971500188b19/documents",
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepayment/7944ef04-f831-11e5-7a69-971500188b19/positions",
      "type": "prepaymentposition",
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
  "customerOrder": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/81ff1592-366b-11e9-ac12-000b00000069",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
      "type": "customerorder",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#customerorder/edit?id=81ff1592-366b-11e9-ac12-000b00000069"
    }
  },
  "retailShift": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/49734306-366a-11e9-ac12-000b0000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
      "type": "retailshift",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#retailshift/edit?id=49734306-366a-11e9-ac12-000b0000002a"
    }
  },
  "cashSum": 15000,
  "noCashSum": 15000,
  "qrSum": 0
}
```

### Удалить Предоплату

**Параметры**

| Параметр | Описание                                                                           |
| :------- | :--------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Предоплаты. |

> Запрос на удаление Предоплаты с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/prepayment/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Предоплаты.

### Позиции Предоплаты 
Отдельный ресурс для управления позициями Предоплаты. С его помощью вы можете запросить позиции большого документа, количество строк в котором превышает лимит на количество строк в выдаче документа. Этот лимит равен 1000. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](../#mojsklad-json-api-obschie-swedeniq-rabota-s-poziciqmi-dokumentow).

### Получить позиции Предоплаты 
Запрос на получение списка всех позиций данной Предоплаты.

| Название    | Тип                                                       | Описание                                                       |
| ----------- | :-------------------------------------------------------- | :------------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                           |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                   |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой позиции Предоплаты. |

**Параметры**

| Параметр   | Описание                                                                                                                               |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Предоплаты.                                                     |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Запрос на получение списка всех позиций данной Предоплаты.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/prepayment/7944ef04-f831-11e5-7a69-971500188b19/positions"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций отдельной Предоплаты.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepayment/7944ef04-f831-11e5-7a69-971500188b19/positions",
    "type": "prepaymentposition",
    "mediaType": "application/json",
    "size": 1,
    "limit": 25,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepayment/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
        "type": "prepaymentposition",
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

### Позиция Предоплаты 
Отдельная позиция Предоплаты с указанным id позиции.

#### Получить позицию Предоплаты

**Параметры**

| Параметр       | Описание                                                                                   |
| :------------- | :----------------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Предоплаты.         |
| **positionID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции Предоплаты. |
 
> Запрос на получение отдельной позиции Предоплаты с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/prepayment/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции Предоплаты.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/prepayment/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
    "type": "prepaymentposition",
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/58e50cd3-366a-11e9-ac12-000b00000036",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=58e4982f-366a-11e9-ac12-000b00000034"
    }
  }
}
```
