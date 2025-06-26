## Вывод кодов маркировки из оборота
### Вывод из оборота
Средствами JSON API можно создавать и обновлять сведения о Выводе кодов маркировки из оборота, а также запрашивать списки документов и информацию о конкретных Выводах.
Позициями можно управлять как в составе документа Вывода, так и отдельно - с помощью специальных ресурсов для управления позициями.
Кодом сущности для Вывода из оборота в составе JSON API является ключевое слово **retireorder**.
Больше о Выводах кодов из оборота можно прочитать [здесь](https://support.moysklad.ru/hc/ru/articles/360025776473-%D0%92%D1%8B%D0%B2%D0%BE%D0%B4-%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2-%D0%BC%D0%B0%D1%80%D0%BA%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B8-%D0%B8%D0%B7-%D0%BE%D0%B1%D0%BE%D1%80%D0%BE%D1%82%D0%B0).

#### Тарифные ограничения
Для создания/изменения Вывода из оборота необходима тарифная опция Маркировка для аккаунтов из RU региона и расширение Честный знак для остальных регионов.

#### Атрибуты сущности

| Название                        | Тип                                                        | Описание                                                                                                                                                                                                                                                |
|---------------------------------|:-----------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**                   | UUID                                                       | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                    |
| **agent**                       | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)  | Метаданные контрагента<br>`+Expand`                                                                                                                                                                                                                     |
| **code**                        | String(255)                                                | Код Вывода из оборота                                                                                                                                                                                                                                   |
| **created**                     | DateTime                                                   | Дата создания<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                        |
| **deleted**                     | DateTime                                                   | Момент последнего удаления Вывода из оборота<br>`+Только для чтения`                                                                                                                                                                                    |
| **description**                 | String(4096)                                               | Комментарий Вывода из оборота<br>                                                                                                                                                                                                                       |
| **destinationCountry**          | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)  | Страна назначения                                                                                                                                                                                                                                       |
| **documentState**               | Enum                                                       | Статус процесса вывода кодов маркировки из оборота. [Подробнее тут](../documents/#dokumenty-vywod-kodow-markirowki-iz-oborota-vywod-iz-oborota-statusy-processa-wywoda-kodow-markirowki-iz-oborota) <br>`+Обязательное при ответе` `+Только для чтения` |
| **externalCode**                | String(255)                                                | Внешний код Вывода из оборота<br>`+Обязательное при ответе`                                                                                                                                                                                             |
| **group**                       | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)  | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                                                                                                                                |
| **id**                          | UUID                                                       | ID Вывода из оборота<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                 |
| **meta**                        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)  | Метаданные Вывода из оборота<br>`+Обязательное при ответе`                                                                                                                                                                                              |
| **moment**                      | DateTime                                                   | Дата документа<br>`+Обязательное при ответе`                                                                                                                                                                                                            |
| **name**                        | String(255)                                                | Наименование Вывода из оборота<br>`+Обязательное при ответе`                                                                                                                                                                                            |
| **organization**                | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)  | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                                                                                                                                    |
| **owner**                       | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)  | Владелец (Сотрудник)<br>`+Expand`                                                                                                                                                                                                                       |
| **positions**                   | MetaArray                                                  | Метаданные позиций Вывода из оборота<br>`+Обязательное при ответе` `+Expand`                                                                                                                                                                            |
| **primaryDocumentName**         | String(255)                                                | Наименование первичного документа                                                                                                                                                                                                                       |
| **printed**                     | Boolean                                                    | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                |
| **published**                   | Boolean                                                    | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                              |
| **rate**                        | Object                                                     | Валюта. [Подробнее тут](../documents/#dokumenty-obschie-swedeniq-valuta-w-dokumentah)<br>`+Обязательное при ответе`                                                                                                                                     |
| **retireOrderType**             | Enum                                                       | Способ вывода из оборота. [Подробнее тут](../documents/#dokumenty-vywod-kodow-markirowki-iz-oborota-vywod-iz-oborota-sposob-wywoda-iz-oborota) <br>`+Обязательное при ответе` `+Необходимо при создании`                                                |
| **shared**                      | Boolean                                                    | Общий доступ<br>`+Обязательное при ответе`                                                                                                                                                                                                              |
| **state**                       | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)  | Метаданные статуса Вывода из оборота<br>`+Expand`                                                                                                                                                                                                       |
| **stateContractId**             | String(255)                                                | Идентификатор государственного контракта, договора (соглашения)                                                                                                                                                                                         |
| **supportingTransaction**       | Enum                                                       | Тип документа-основания. [Подробнее тут](../documents/#dokumenty-vywod-kodow-markirowki-iz-oborota-vywod-iz-oborota-tip-dokumenta-osnowaniq)                                                                                                            |
| **supportingTransactionDate**   | DateTime                                                   | Дата документа-основания                                                                                                                                                                                                                                |
| **supportingTransactionNumber** | String(255)                                                | Номер документа-основания                                                                                                                                                                                                                               |
| **syncId**                      | UUID                                                       | ID синхронизации. После заполнения недоступен для изменения                                                                                                                                                                                             |
| **trackingType**                | Enum                                                       | Тип маркируемой продукции. [Подробнее тут](../documents/#dokumenty-vywod-kodow-markirowki-iz-oborota-vywod-iz-oborota-tip-markiruemoj-produkcii) <br>`+Обязательное при ответе` `+Необходимо при создании`                                              |
| **updated**                     | DateTime                                                   | Момент последнего обновления Вывода из оборота.<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                      |
| **sum**                         | Int                                                        | Сумма вывода из оборота в установленной валюте<br>`+Обязательное при ответе`                                                                                                                                                                            |
| **vatEnabled**                  | Boolean                                                    | Учитывается ли НДС<br>`+Обязательное при ответе`                                                                                                                                                                                                        |
| **vatIncluded**                 | Boolean                                                    | Включен ли НДС в цену                                                                                                                                                                                                                                   |
| **vatSum**                      | Float                                                      | Сумма НДС <br/>  `+Только для чтения`                                                                                                                                                                                                                   |

#### Статусы процесса вывода кодов маркировки из оборота

Значения поля documentState. Статус IN_PROGRESS, WAIT_FOR_CONTINUATION, CHECKED_OK, CHECKED_NOT_OK, PROCESSING_ERROR берутся из Честного знака. 

| Значение                  | Описание                                                |
|---------------------------|:--------------------------------------------------------|
| **CREATED**               | Вывод из оборота создан, но не отправлен в Честный знак |
| **SEND**                  | Запрос на вывод из оборота отправлен в Честный знак     |
| **IN_PROGRESS**           | Проверяется                                             |
| **WAIT_FOR_CONTINUATION** | Проверяется                                             |
| **CHECKED_OK**            | Обработан Честным знаком                                |
| **CHECKED_NOT_OK**        | Обработан Честным знаком с ошибками                     |
| **PROCESSING_ERROR**      | Техническая ошибка на стороне Честного знака            |
| **UNDEFINED**             | Состояние не определяется                               |

#### Тип маркируемой продукции

Значения поля trackingType.

| Значение            | Описание                             |
|---------------------|:-------------------------------------|
| **BEER_ALCOHOL**    | Пиво и слабоалкогольная продукция    |
| **BICYCLE**         | Велосипеды                           |
| **ELECTRONICS**     | Фотокамеры и лампы-вспышки           |
| **FOOD_SUPPLEMENT** | Биологически активные добавки к пище |
| **LP_CLOTHES**      | Тип маркировки "Одежда"              |
| **LP_LINENS**       | Тип маркировки "Постельное белье"    |
| **MEDICAL_DEVICES** | Медизделия и кресла-коляски          |
| **MILK**            | Молочная продукция                   |
| **PERFUMERY**       | Духи и туалетная вода                |
| **SANITIZER**       | Антисептики                          |
| **SEAFOOD**         | Икра и морепродукты                  |
| **SHOES**           | Тип маркировки "Обувь"               |
| **SOFT_DRINKS**     | Безалкогольные напитки               |
| **TIRES**           | Шины и покрышки                      |
| **VETPHARMA**       | Ветеринарные препараты               |
| **WATER**           | Упакованная вода                     |

#### Способ вывода из оборота 

Значения поля retireOrderType. 

| Значение                 | Описание                                               |
|--------------------------|:-------------------------------------------------------|
| **BY_SAMPLES**           | Продажа по образцам                                    |
| **CONFISCATE_SALE**      | Конфискация                                            |
| **DAMAGE_AND_LOSS**      | Утрата                                                 |
| **DESTRUCTION**          | Уничтожение                                            |
| **DISTANCE**             | Дистанционная продажа                                  |
| **DONATION**             | Безвозмездная передача                                 |
| **EXPIRATION**           | Истечение срока годности                               |
| **EXPORT_INSIDE_EEU**    | Трансграничная продажа в страны ЕАЭС                   |
| **EXPORT_OUTSIDE_EEU**   | Экспорт за пределы стран ЕАЭС                          |
| **MEDICAL_USE**          | Использование для медицинского применения              |
| **MISMATCH**             | Пересортица по кодам                                   |
| **OWN_USE**              | Использование для собственных нужд                     |
| **PACKING**              | Фасовка                                                |
| **PRODUCTION_USE**       | Использование для производственных целей               |
| **RETAIL_SALE**          | Розничная продажа                                      |
| **RETURN_TO_INDIVIDUAL** | Возврат физическому лицу                               |
| **STATE_CONTRACT**       | Продажа по государственному (муниципальному) контракту |
| **UTILIZATION**          | Утилизация                                             |
| **VENDING**              | Продажа через вендинговый аппарат                      |

#### Тип документа-основания

Значения поля supportingTransaction

| Значение                       | Описание                            |
|--------------------------------|:------------------------------------|
| **CERTIFICATE_OF_DESTRUCTION** | Акт уничтожения (утраты/утилизации) |
| **CONSIGNMENT_NOTE**           | Товарная накладная                  |
| **CUSTOMS_DECLARATION**        | Таможенная декларация на товары     |
| **OTHER**                      | Прочее                              |
| **RECEIPT**                    | Кассовый чек                        |
| **SALES_RECEIPT**              | Товарный чек                        |
| **UTD**                        | Универсальный передаточный документ |

#### Позиции Вывода из оборота
Позиции Вывода из оборота - это список товаров/модификаций/серий.
Объект позиции Вывода из оборота содержит следующие поля:

| Название          | Тип                                                       | Описание                                                                                                                                                                                                                                                                   |
|-------------------|:----------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**     | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения` `+Change-handler`                                                                                                                                                                                     |
| **assortment**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные товара/серии/модификации, которую представляет собой позиция<br>`+Обязательное при ответе` `+Необходимо при создании` `+Expand` `+Change-handler`                                                                                                               |
| **id**            | UUID                                                      | ID позиции<br>`+Обязательное при ответе` `+Только для чтения` `+Change-handler`                                                                                                                                                                                            |
| **price**         | Float                                                     | Цена товара в копейках<br>`+Обязательное при ответе` `+Change-handler`                                                                                                                                                                                                     |
| **quantity**      | Float                                                     | Количество товаров данного вида в позиции <br>`+Обязательное при ответе` `+Change-handler`                                                                                                                                                                                 |
| **trackingCodes** | Array(Object)                                             | Коды маркировки товаров. [Подробнее тут](../dictionaries/#suschnosti-kody-markirowki) <br> `+Обязательное при ответе` `+Необходимо при создании`                                                                                                                           |
| **vat**           | Boolean                                                   | НДС, которым облагается текущая позиция<br>`+Обязательное при ответе` `+Change-handler` `+Update-provider`                                                                                                                                                                 |
| **vatEnabled**    | Boolean                                                   | Включен ли НДС для позиции. С помощью этого флага для позиции можно выставлять НДС = 0 или НДС = "без НДС". (vat = 0, vatEnabled = false) -> vat = "без НДС", (vat = 0, vatEnabled = true) -> vat = 0%.<br>`+Обязательное при ответе` `+Change-handler` `+Update-provider` |

С позициями можно работать с помощью [специальных ресурсов для управления позициями Вывода из оборота](../documents/#dokumenty-vywod-kodow-markirowki-iz-oborota-pozicii-vywoda-iz-oborota),
а также в составе отдельного Вывода из оборота. При работе в составе отдельного Вывода из оборота,
вы можете отправлять запросы на создание отдельного Вывода из оборота с включенным в тело запроса
массивом позиций Вывода из оборота. Если количество позиций превышает максимально допустимое, то для
дальнейшего пополнения позиций нужно будет работать со специальным ресурсом "Позиции Вывода из оборота".
Также, при работе в составе отдельного Вывода из оборота, можно отправлять запросы на обновление списка позиций
с включенным в тело запроса массивом позиций Вывода из оборота. При этом важно помнить, что коллекция позиций будет
восприниматься как "все позиции Вывода из оборота" и полностью заменит уже существующую коллекцию при обновлении объекта - лишние
позиции будут удалены, новые добавлены, существующие - изменены.

### Получить Выводы из оборота 
Запрос всех Выводов из оборота на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                      |
| ----------- | :-------------------------------------------------------- |:--------------------------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                          |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                  |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Выводы из оборота. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить Выводы из оборота

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/retireorder"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Выводов из оборота.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/metadata",
    "type": "retireorder",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/b14bcb5e-3b17-4765-87cf-bc4569fc5f32",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/metadata",
        "type": "retireorder",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#retireorder/edit?id=b14bcb5e-3b17-4765-87cf-bc4569fc5f32"
      },
      "id": "b14bcb5e-3b17-4765-87cf-bc4569fc5f32",
      "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/872559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=872559f1-cbf3-11e1-9eb9-889ffa6f49fd"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f7eb1e3b-fd2a-42f7-b799-b3d1e6b3bf43",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2024-11-22 13:37:51.355",
      "name": "00001",
      "description": "some_some",
      "externalCode": "4fXzFRjOjDC8upZ1iEK-n3",
      "moment": "2024-11-26 13:20:51.272",
      "rate": {
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/883f0496-6af5-11e6-ba80-448a5bed452a",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=883f0496-6af5-11e6-ba80-448a5bed452a"
          }
        }
      },
      "sum": 100000.0,
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/972559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=972559f1-cbf3-11e1-9eb9-889ffa6f49fd"
        }
      },
      "created": "2024-11-22 13:37:51.431",
      "printed": false,
      "published": false,
      "documentState": "CREATED",
      "retireOrderType": "RETAIL_SALE",
      "supportingTransaction": "OTHER",
      "supportingTransactionDate": "2024-11-22 13:37:51.335",
      "supportingTransactionNumber": "123",
      "primaryDocumentName": "doc name",
      "trackingType": "SHOES",
      "vatEnabled": true,
      "vatIncluded": true,
      "vatSum": 16667.0,
      "positions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/b14bcb5e-3b17-4765-87cf-bc4569fc5f32/positions",
          "type": "retireorderposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/d303eee9-a8bd-11ef-ac15-000400000058",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/metadata",
        "type": "retireorder",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#retireorder/edit?id=d303eee9-a8bd-11ef-ac15-000400000058"
      },
      "id": "d303eee9-a8bd-11ef-ac15-000400000058",
      "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/872559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=872559f1-cbf3-11e1-9eb9-889ffa6f49fd"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f7eb1e3b-fd2a-42f7-b799-b3d1e6b3bf43",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2024-11-22 13:37:51.355",
      "name": "00002",
      "description": "some_some",
      "externalCode": "aaerereraedf",
      "moment": "2024-11-26 13:20:51.272",
      "rate": {
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/883f0496-6af5-11e6-ba80-448a5bed452a",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=883f0496-6af5-11e6-ba80-448a5bed452a"
          }
        }
      },
      "sum": 100000.0,
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/972559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=972559f1-cbf3-11e1-9eb9-889ffa6f49fd"
        }
      },
      "created": "2024-11-22 13:37:51.431",
      "printed": false,
      "published": false,
      "documentState": "CREATED",
      "retireOrderType": "RETAIL_SALE",
      "supportingTransaction": "OTHER",
      "supportingTransactionDate": "2024-11-22 13:37:51.335",
      "supportingTransactionNumber": "123",
      "primaryDocumentName": "doc name",
      "trackingType": "SHOES",
      "vatEnabled": true,
      "vatIncluded": true,
      "vatSum": 16667.0,
      "positions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/d303eee9-a8bd-11ef-ac15-000400000058/positions",
          "type": "retireorderposition",
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

### Вывод из оборота

### Получить Вывод из оборота

**Параметры**

| Параметр | Описание                                                                                  |
| :------- |:------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: b14bcb5e-3b17-4765-87cf-bc4569fc5f32* id Вывода из оборота. |
 
> Запрос на получение отдельного Вывода из оборота с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/b14bcb5e-3b17-4765-87cf-bc4569fc5f32"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Вывода из оборота.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/b14bcb5e-3b17-4765-87cf-bc4569fc5f32",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/metadata",
    "type": "retireorder",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#retireorder/edit?id=b14bcb5e-3b17-4765-87cf-bc4569fc5f32"
  },
  "id": "b14bcb5e-3b17-4765-87cf-bc4569fc5f32",
  "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/872559f1-cbf3-11e1-9eb9-889ffa6f49fd",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=872559f1-cbf3-11e1-9eb9-889ffa6f49fd"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f7eb1e3b-fd2a-42f7-b799-b3d1e6b3bf43",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2024-11-22 13:37:51.355",
  "name": "00001",
  "description": "some_some",
  "externalCode": "4fXzFRjOjDC8upZ1iEK-n3",
  "moment": "2024-11-26 13:20:51.272",
  "rate": {
    "currency": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/883f0496-6af5-11e6-ba80-448a5bed452a",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=883f0496-6af5-11e6-ba80-448a5bed452a"
      }
    }
  },
  "sum": 100000.0,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/972559f1-cbf3-11e1-9eb9-889ffa6f49fd",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=972559f1-cbf3-11e1-9eb9-889ffa6f49fd"
    }
  },
  "created": "2024-11-22 13:37:51.431",
  "printed": false,
  "published": false,
  "documentState": "CREATED",
  "retireOrderType": "RETAIL_SALE",
  "supportingTransaction": "OTHER",
  "supportingTransactionDate": "2024-11-22 13:37:51.335",
  "supportingTransactionNumber": "123",
  "primaryDocumentName": "doc name",
  "trackingType": "SHOES",
  "vatEnabled": true,
  "vatIncluded": true,
  "vatSum": 16667.0,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/b14bcb5e-3b17-4765-87cf-bc4569fc5f32/positions",
      "type": "retireorderposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  }
}
```


### Создать Вывод из оборота
Запрос на создание нового Вывода из оборота.

Обязательные для создания поля:

+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **retireOrderType** - Способ вывода из оборота [Подробнее тут](../documents/#dokumenty-vywod-kodow-markirowki-iz-oborota-vywod-iz-oborota-sposob-wywoda-iz-oborota)
+ **trackingType** - Тип маркируемой продукции [Подробнее тут](../documents/#dokumenty-vywod-kodow-markirowki-iz-oborota-vywod-iz-oborota-tip-markiruemoj-produkcii)


#### Особенности поведения при создании Вывода из оборота
Связь допустимых значений поля **retireOrderType** в зависимости от **trackingType**

| **trackingType**                                                | **retireOrderType**                                                                                                                                                                                                      |
|-----------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **SHOES, LP_CLOTHES, LP_LINENS, PERFUMERY, ELECTRONICS, TIRES** | RETAIL_SALE, BY_SAMPLES, DISTANCE, CONFISCATE_SALE, DESTRUCTION, EXPORT_OUTSIDE_EEU, EXPORT_INSIDE_EEU, OWN_USE, DAMAGE_AND_LOSS, UTILIZATION, MEDICAL_USE, STATE_CONTRACT, RETURN_TO_INDIVIDUAL                         |
| **MILK**                                                        | RETAIL_SALE, BY_SAMPLES, DISTANCE, CONFISCATE_SALE, DESTRUCTION, EXPORT_OUTSIDE_EEU, EXPORT_INSIDE_EEU, OWN_USE, DAMAGE_AND_LOSS, UTILIZATION, MEDICAL_USE, STATE_CONTRACT, PRODUCTION_USE, EXPIRATION, VENDING, PACKING |
| **FOOD_SUPPLEMENT, SANITIZER, MEDICAL_DEVICES**                 | RETAIL_SALE, BY_SAMPLES, DISTANCE, CONFISCATE_SALE, DESTRUCTION, EXPORT_OUTSIDE_EEU, EXPORT_INSIDE_EEU, OWN_USE, DAMAGE_AND_LOSS, UTILIZATION, MEDICAL_USE, STATE_CONTRACT                                               |
| **BICYCLE**                                                     | RETAIL_SALE, EXPORT_INSIDE_EEU, EXPORT_OUTSIDE_EEU, DAMAGE_AND_LOSS, RETURN_TO_INDIVIDUAL, CONFISCATE_SALE, DESTRUCTION, STATE_CONTRACT, DISTANCE, BY_SAMPLES, UTILIZATION, OWN_USE, PRODUCTION_USE                      |
| **VETPHARMA**                                                   | RETAIL_SALE, EXPORT_INSIDE_EEU, EXPORT_OUTSIDE_EEU, DAMAGE_AND_LOSS, CONFISCATE_SALE, DESTRUCTION, STATE_CONTRACT, DISTANCE, BY_SAMPLES, UTILIZATION, OWN_USE, PRODUCTION_USE, EXPIRATION                                |
| **SOFT_DRINKS**                                                 | RETAIL_SALE, EXPORT_OUTSIDE_EEU, DISTANCE, EXPORT_INSIDE_EEU, EXPIRATION, OWN_USE, PACKING, PRODUCTION_USE, STATE_CONTRACT, VENDING, DONATION                                                                            |
| **WATER**                                                       | RETAIL_SALE, EXPORT_OUTSIDE_EEU, CONFISCATE_SALE, DESTRUCTION, DISTANCE, EXPORT_INSIDE_EEU, EXPIRATION, DAMAGE_AND_LOSS, OWN_USE, PRODUCTION_USE, STATE_CONTRACT, VENDING, BY_SAMPLES, UTILIZATION, DONATION             |
| **SEAFOOD**                                                     | RETAIL_SALE, EXPORT_INSIDE_EEU, EXPORT_OUTSIDE_EEU, DAMAGE_AND_LOSS, CONFISCATE_SALE, DESTRUCTION, STATE_CONTRACT, DISTANCE, BY_SAMPLES, UTILIZATION, OWN_USE, PRODUCTION_USE, EXPIRATION, VENDING                       |
| **BEER_ALCOHOL**                                                | RETAIL_SALE, EXPORT_OUTSIDE_EEU, EXPORT_INSIDE_EEU, OWN_USE, PRODUCTION_USE, DONATION, STATE_CONTRACT, DAMAGE_AND_LOSS, DESTRUCTION, CONFISCATE_SALE, UTILIZATION, EXPIRATION, MISMATCH                                  |

Связь допустимых значений поля **supportingTransaction** в зависимости от **retireOrderType**

| **retireOrderType**      | **supportingTransaction**                              |
|--------------------------|:-------------------------------------------------------|
| **BY_SAMPLES**           | RECEIPT, SALES_RECEIPT, OTHER, CONSIGNMENT_NOTE, UTD   |
| **CONFISCATE_SALE**      | OTHER, CONSIGNMENT_NOTE, UTD                           |
| **DAMAGE_AND_LOSS**      | OTHER                                                  |
| **DESTRUCTION**          | CERTIFICATE_OF_DESTRUCTION, OTHER                      |
| **DISTANCE**             | RECEIPT, SALES_RECEIPT, OTHER, CONSIGNMENT_NOTE, UTD   |
| **DONATION**             | OTHER, CONSIGNMENT_NOTE                                |
| **EXPIRATION**           | OTHER                                                  |
| **EXPORT_OUTSIDE_EEU**   | CUSTOMS_DECLARATION, OTHER                             |
| **MEDICAL_USE**          | OTHER                                                  |
| **MISMATCH**             | OTHER                                                  |
| **OWN_USE**              | OTHER                                                  |
| **PACKING**              | OTHER                                                  |
| **PRODUCTION_USE**       | OTHER                                                  |
| **RETAIL_SALE**          | RECEIPT, SALES_RECEIPT, OTHER                          |
| **RETURN_TO_INDIVIDUAL** | OTHER                                                  |
| **UTILIZATION**          | OTHER                                                  |
| **VENDING**              | OTHER                                                  |

Способ вывода из оборота **retireOrderType**:

+ Если выбрано любое значение из перечисленных в таблице выше, поля **supportingTransaction**, **supportingTransactionDate** и **supportingTransactionNumber** являются обязательными.
+ Если выбрано значение **DISTANCE**, то поля **supportingTransaction**, **supportingTransactionDate** и **supportingTransactionNumber** становятся необязательными. Поля **supportingTransactionDate** и **supportingTransactionNumber** очищаются при указании значения **null** для поля **supportingTransaction**.
+ Если выбрано значение **STATE_CONTRACT**, то поле **stateContractId** является обязательным.
+ Если выбрано значение **EXPORT_INSIDE_EEU**, то поле **destinationCountry** является обязательным и допускаются значения: Армения, Беларусь, Казахстан, Киргизия.

Тип документа-основания **supportingTransaction**:

+ Если выбрано значение **OTHER**, то поле **primaryDocumentName** является обязательным.

Документ вывода из оборота с позициями:

+Поле **trackingType** каждой позиции должно совпадать со значением поля **trackingType** документа.

> Пример создания нового Вывода из оборота - Трансграничная продажа в страны ЕАЭС.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/retireorder"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
              "organization": {
                  "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/ace4017a-ad7d-11ef-ac12-000d0000009a",
                      "type": "organization",
                      "mediaType": "application/json"
                  }
              },
              "destinationCountry": {
                  "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/country/20e1bcdc-9fb8-4192-a400-5a8ada805878",
                      "type": "country",
                      "mediaType": "application/json"
                  }
              },
              "retireOrderType": "EXPORT_INSIDE_EEU",
              "trackingType": "MILK"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Вывода из оборота.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/debcae32-b62f-11ef-ac12-000b00000000",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/metadata",
    "type": "retireorder",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#retireorder/edit?id=debcae32-b62f-11ef-ac12-000b00000000"
  },
  "id": "debcae32-b62f-11ef-ac12-000b00000000",
  "accountId": "abc08e75-ad7d-11ef-ac12-000f00000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/acb828ec-ad7d-11ef-ac12-000d00000051",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=acb828ec-ad7d-11ef-ac12-000d00000051"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/abc1d4f2-ad7d-11ef-ac12-000f00000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2024-12-09 16:16:56.394",
  "name": "00005",
  "externalCode": "G9RF0hwpgFsImLYi0Kk3l3",
  "moment": "2024-12-09 16:16:00.000",
  "rate": {
    "currency": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/acf2a610-ad7d-11ef-ac12-000d000000a2",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=acf2a610-ad7d-11ef-ac12-000d000000a2"
      }
    }
  },
  "sum": 0.0,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/ace4017a-ad7d-11ef-ac12-000d0000009a",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=ace4017a-ad7d-11ef-ac12-000d0000009a"
    }
  },
  "created": "2024-12-09 16:16:58.600",
  "printed": false,
  "published": false,
  "documentState": "CREATED",
  "destinationCountry": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/country/20e1bcdc-9fb8-4192-a400-5a8ada805878",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/country/metadata",
      "type": "country",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#country/edit?id=20e1bcdc-9fb8-4192-a400-5a8ada805878"
    }
  },
  "retireOrderType": "EXPORT_INSIDE_EEU",
  "trackingType": "MILK",
  "vatEnabled": true,
  "vatIncluded": true,
  "vatSum": 0.0,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/debcae32-b62f-11ef-ac12-000b00000000/positions",
      "type": "retireorderposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

> Пример создания нового Вывода из оборота - Продажа по государственному (муниципальному) контракту.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/retireorder"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
              "organization": {
                  "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/ace4017a-ad7d-11ef-ac12-000d0000009a",
                      "type": "organization",
                      "mediaType": "application/json"
                  }
              },
              "stateContractId": "test",
              "retireOrderType": "STATE_CONTRACT",
              "trackingType": "MILK"
          }'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Вывода из оборота.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/debcae32-b62f-11ef-ac12-000b00000000",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/metadata",
    "type": "retireorder",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#retireorder/edit?id=debcae32-b62f-11ef-ac12-000b00000000"
  },
  "id": "debcae32-b62f-11ef-ac12-000b00000000",
  "accountId": "abc08e75-ad7d-11ef-ac12-000f00000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/acb828ec-ad7d-11ef-ac12-000d00000051",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=acb828ec-ad7d-11ef-ac12-000d00000051"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/abc1d4f2-ad7d-11ef-ac12-000f00000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2024-12-09 16:16:56.394",
  "name": "00005",
  "externalCode": "G9RF0hwpgFsImLYi0Kk3l3",
  "moment": "2024-12-09 16:16:00.000",
  "rate": {
    "currency": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/acf2a610-ad7d-11ef-ac12-000d000000a2",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=acf2a610-ad7d-11ef-ac12-000d000000a2"
      }
    }
  },
  "sum": 0.0,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/ace4017a-ad7d-11ef-ac12-000d0000009a",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=ace4017a-ad7d-11ef-ac12-000d0000009a"
    }
  },
  "created": "2024-12-09 16:16:58.600",
  "printed": false,
  "published": false,
  "documentState": "CREATED",
  "retireOrderType": "STATE_CONTRACT",
  "stateContractId": "test",
  "trackingType": "MILK",
  "vatEnabled": true,
  "vatIncluded": true,
  "vatSum": 0.0,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/debcae32-b62f-11ef-ac12-000b00000000/positions",
      "type": "retireorderposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

> Пример создания нового Вывода из оборота - Использование для собственных нужд.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/retireorder"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
              "agent": {
                  "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/2a0c7808-2f09-11f0-0a81-0aec000000a3",
                      "type": "counterparty",
                      "mediaType": "application/json"
                  }
              },
              "organization": {
                  "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/ace4017a-ad7d-11ef-ac12-000d0000009a",
                      "type": "organization",
                      "mediaType": "application/json"
                  }
              },
              "retireOrderType": "OWN_USE",
              "supportingTransaction": "OTHER",
              "supportingTransactionDate": "2024-12-09 12:59:23.164",
              "supportingTransactionNumber": "123",
              "primaryDocumentName": "doc name",
              "trackingType": "MILK"
          }'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Вывода из оборота.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/debcae32-b62f-11ef-ac12-000b00000000",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/metadata",
    "type": "retireorder",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#retireorder/edit?id=debcae32-b62f-11ef-ac12-000b00000000"
  },
  "id": "debcae32-b62f-11ef-ac12-000b00000000",
  "accountId": "abc08e75-ad7d-11ef-ac12-000f00000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/acb828ec-ad7d-11ef-ac12-000d00000051",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=acb828ec-ad7d-11ef-ac12-000d00000051"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/abc1d4f2-ad7d-11ef-ac12-000f00000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2024-12-09 16:16:56.394",
  "name": "00005",
  "externalCode": "G9RF0hwpgFsImLYi0Kk3l3",
  "moment": "2024-12-09 16:16:00.000",
  "rate": {
    "currency": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/acf2a610-ad7d-11ef-ac12-000d000000a2",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=acf2a610-ad7d-11ef-ac12-000d000000a2"
      }
    }
  },
  "sum": 0.0,
  "agent": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/2a0c7808-2f09-11f0-0a81-0aec000000a3",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=2a0c7808-2f09-11f0-0a81-0aec000000a3"
    }
  },
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/ace4017a-ad7d-11ef-ac12-000d0000009a",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=ace4017a-ad7d-11ef-ac12-000d0000009a"
    }
  },
  "created": "2024-12-09 16:16:58.600",
  "printed": false,
  "published": false,
  "documentState": "CREATED",
  "primaryDocumentName": "doc name",
  "retireOrderType": "OWN_USE",
  "supportingTransaction": "OTHER",
  "supportingTransactionDate": "2024-12-09 12:59:00.000",
  "supportingTransactionNumber": "123",
  "trackingType": "MILK",
  "vatEnabled": true,
  "vatIncluded": true,
  "vatSum": 0.0,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/debcae32-b62f-11ef-ac12-000b00000000/positions",
      "type": "retireorderposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

> Пример создания нового Вывода из оборота с позициями.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/retireorder"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
              "agent": {
                  "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/2a0c7808-2f09-11f0-0a81-0aec000000a3",
                      "type": "counterparty",
                      "mediaType": "application/json"
                  }
              },
              "organization": {
                  "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/ace4017a-ad7d-11ef-ac12-000d0000009a",
                      "type": "organization",
                      "mediaType": "application/json"
                  }
              },
              "retireOrderType": "OWN_USE",
              "supportingTransaction": "OTHER",
              "supportingTransactionDate": "2024-12-09 12:59:23.164",
              "supportingTransactionNumber": "123",
              "primaryDocumentName": "doc name",
              "trackingType": "MILK",
              "positions": [
                  {
                      "assortment": {
                          "meta": {
                              "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/2f096391-ad7f-11ef-ac12-000d00000117",
                              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                              "type": "product",
                              "mediaType": "application/json"
                          }
                      },
                      "trackingCodes": [
                          {
                              "cis": "0114650057073880217891234567893",
                              "type": "trackingcode"
                          }
                      ]
                  }
              ]
          }'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Вывода из оборота.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/debcae32-b62f-11ef-ac12-000b00000000",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/metadata",
    "type": "retireorder",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#retireorder/edit?id=debcae32-b62f-11ef-ac12-000b00000000"
  },
  "id": "debcae32-b62f-11ef-ac12-000b00000000",
  "accountId": "abc08e75-ad7d-11ef-ac12-000f00000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/acb828ec-ad7d-11ef-ac12-000d00000051",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=acb828ec-ad7d-11ef-ac12-000d00000051"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/abc1d4f2-ad7d-11ef-ac12-000f00000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2024-12-09 16:16:56.394",
  "name": "00005",
  "externalCode": "G9RF0hwpgFsImLYi0Kk3l3",
  "moment": "2024-12-09 16:16:00.000",
  "rate": {
    "currency": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/acf2a610-ad7d-11ef-ac12-000d000000a2",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=acf2a610-ad7d-11ef-ac12-000d000000a2"
      }
    }
  },
  "sum": 0.0,
  "agent": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/2a0c7808-2f09-11f0-0a81-0aec000000a3",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=2a0c7808-2f09-11f0-0a81-0aec000000a3"
    }
  },
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/ace4017a-ad7d-11ef-ac12-000d0000009a",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=ace4017a-ad7d-11ef-ac12-000d0000009a"
    }
  },
  "created": "2024-12-09 16:16:58.600",
  "printed": false,
  "published": false,
  "documentState": "CREATED",
  "primaryDocumentName": "doc name",
  "retireOrderType": "OWN_USE",
  "supportingTransaction": "OTHER",
  "supportingTransactionDate": "2024-12-09 12:59:00.000",
  "supportingTransactionNumber": "123",
  "trackingType": "MILK",
  "vatEnabled": true,
  "vatIncluded": true,
  "vatSum": 0.0,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/debcae32-b62f-11ef-ac12-000b00000000/positions",
      "type": "retireorderposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Массовое создание и обновление Выводов из оборота
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Выводов из оборота.
В теле запроса нужно передать массив, содержащий JSON представления Выводов из оборота, которые вы хотите создать или обновить.
Обновляемые Выводы из оборота должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Выводов из оборота

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/retireorder"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '[
              {
                  "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/7ac2eebe-b633-11ef-ac12-000b00000005",
                      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/metadata",
                      "type": "retireorder",
                      "mediaType": "application/json"
                  },
                  "description": "Обновление вывода из оборота",
                  "stateContractId": "test",
                  "retireOrderType": "STATE_CONTRACT",
                  "trackingType": "MILK"
              },
              {
                  "agent": {
                      "meta": {
                          "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/2a0c7808-2f09-11f0-0a81-0aec000000a3",
                          "type": "counterparty",
                          "mediaType": "application/json"
                      }
                  },
                  "organization": {
                      "meta": {
                          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/ace4017a-ad7d-11ef-ac12-000d0000009a",
                          "type": "organization",
                          "mediaType": "application/json"
                      }
                  },
                  "description": "Новый вывод из оборота",
                  "retireOrderType": "OWN_USE",
                  "supportingTransaction": "OTHER",
                  "supportingTransactionDate": "2024-12-09 12:59:23.164",
                  "supportingTransactionNumber": "123",
                  "primaryDocumentName": "doc name",
                  "trackingType": "LP_CLOTHES",
                  "positions": [
                      {
                          "assortment": {
                              "meta": {
                                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/2f096391-ad7f-11ef-ac12-000d00000117",
                                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                                  "type": "product",
                                  "mediaType": "application/json"
                              }
                          },
                          "trackingCodes": [
                              {
                                  "cis": "0114650057073880217891234567893",
                                  "type": "trackingcode"
                              }
                          ]
                      }
                  ]
              }
          ]'
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Выводов из оборота

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/7ac2eebe-b633-11ef-ac12-000b00000005",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/metadata",
      "type": "retireorder",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#retireorder/edit?id=7ac2eebe-b633-11ef-ac12-000b00000005"
    },
    "id": "7ac2eebe-b633-11ef-ac12-000b00000005",
    "accountId": "abc08e75-ad7d-11ef-ac12-000f00000001",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/acb828ec-ad7d-11ef-ac12-000d00000051",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=acb828ec-ad7d-11ef-ac12-000d00000051"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/abc1d4f2-ad7d-11ef-ac12-000f00000002",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2024-12-10 09:22:38.893",
    "name": "00006",
    "description": "Обновление вывода из оборота",
    "externalCode": "cFQv1EGbgWBIbYC4OIuWf0",
    "moment": "2024-12-09 16:42:00.000",
    "rate": {
      "currency": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/acf2a610-ad7d-11ef-ac12-000d000000a2",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=acf2a610-ad7d-11ef-ac12-000d000000a2"
        }
      }
    },
    "sum": 0.0,
    "agent": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/2a0c7808-2f09-11f0-0a81-0aec000000a3",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=2a0c7808-2f09-11f0-0a81-0aec000000a3"
      }
    },
    "organization": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/ace4017a-ad7d-11ef-ac12-000d0000009a",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=ace4017a-ad7d-11ef-ac12-000d0000009a"
      }
    },
    "created": "2024-12-09 16:42:49.054",
    "printed": false,
    "published": false,
    "documentState": "CREATED",
    "retireOrderType": "STATE_CONTRACT",
    "stateContractId": "test",
    "trackingType": "MILK",
    "vatEnabled": true,
    "vatIncluded": true,
    "vatSum": 0.0,
    "positions": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/7ac2eebe-b633-11ef-ac12-000b00000005/positions",
        "type": "retireorderposition",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    }
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/279b20b1-b6bf-11ef-ac12-000d00000017",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/metadata",
      "type": "retireorder",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#retireorder/edit?id=279b20b1-b6bf-11ef-ac12-000d00000017"
    },
    "id": "279b20b1-b6bf-11ef-ac12-000d00000017",
    "accountId": "abc08e75-ad7d-11ef-ac12-000f00000001",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/acb828ec-ad7d-11ef-ac12-000d00000051",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=acb828ec-ad7d-11ef-ac12-000d00000051"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/abc1d4f2-ad7d-11ef-ac12-000f00000002",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2024-12-10 09:22:39.013",
    "name": "00013",
    "description": "Новый вывод из оборота",
    "externalCode": "03wjFjemgAnCBQvEQsBfF2",
    "moment": "2024-12-10 09:22:00.000",
    "rate": {
      "currency": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/acf2a610-ad7d-11ef-ac12-000d000000a2",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=acf2a610-ad7d-11ef-ac12-000d000000a2"
        }
      }
    },
    "sum": 0.0,
    "organization": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/ace4017a-ad7d-11ef-ac12-000d0000009a",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=ace4017a-ad7d-11ef-ac12-000d0000009a"
      }
    },
    "created": "2024-12-10 09:22:39.067",
    "printed": false,
    "published": false,
    "documentState": "CREATED",
    "primaryDocumentName": "doc name",
    "retireOrderType": "OWN_USE",
    "supportingTransaction": "OTHER",
    "supportingTransactionDate": "2024-12-09 12:59:00.000",
    "supportingTransactionNumber": "123",
    "trackingType": "LP_CLOTHES",
    "vatEnabled": true,
    "vatIncluded": true,
    "vatSum": 0.0,
    "positions": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/279b20b1-b6bf-11ef-ac12-000d00000017/positions",
        "type": "retireorderposition",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
      }
    }
  }
]
```

### Изменение Вывода из оборота
Запрос на обновление Вывода из оборота с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Вывода из оборота, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Вывода из оборота](../documents/#dokumenty-vywod-kodow-markirowki-iz-oborota).

#### Особенности поведения при изменении Вывода из оборота
Изменение Вывода из оборота доступно только для документов со статусом **documentState** = **CREATED**, **CHECKED_NOT_OK**, **PROCESSING_ERROR**

**Параметры**

| Параметр | Описание                                                                                  |
|:---------|:------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: b14bcb5e-3b17-4765-87cf-bc4569fc5f32* id Вывода из оборота. |

> Пример запроса на обновление отдельного Вывода из оборота

```shell
curl -X PUT
  "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/b14bcb5e-3b17-4765-87cf-bc4569fc5f32"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
    -d '{
    "name": "обновленный",
    "description": "новое описание Вывода из оборота"
}
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Вывода из оборота

```json
{
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/b14bcb5e-3b17-4765-87cf-bc4569fc5f32",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/metadata",
        "type": "retireorder",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#retireorder/edit?id=b14bcb5e-3b17-4765-87cf-bc4569fc5f32"
      },
      "id": "b14bcb5e-3b17-4765-87cf-bc4569fc5f32",
      "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/872559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=872559f1-cbf3-11e1-9eb9-889ffa6f49fd"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f7eb1e3b-fd2a-42f7-b799-b3d1e6b3bf43",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2024-11-22 13:37:51.355",
      "name": "обновленный",
      "description": "новое описание Вывода из оборота",
      "externalCode": "4fXzFRjOjDC8upZ1iEK-n3",
      "moment": "2024-11-26 13:20:51.272",
      "rate": {
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/883f0496-6af5-11e6-ba80-448a5bed452a",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=883f0496-6af5-11e6-ba80-448a5bed452a"
          }
        }
      },
      "sum": 100000.0,
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/972559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=972559f1-cbf3-11e1-9eb9-889ffa6f49fd"
        }
      },
      "created": "2024-11-22 13:37:51.431",
      "printed": false,
      "published": false,
      "documentState": "CREATED",
      "retireOrderType": "RETAIL_SALE",
      "supportingTransaction": "OTHER",
      "supportingTransactionDate": "2024-11-22 13:37:51.335",
      "supportingTransactionNumber": "123",
      "primaryDocumentName": "doc name",
      "trackingType": "SHOES",
      "vatEnabled": true,
      "vatIncluded": true,
      "vatSum": 16667.0,
      "positions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/b14bcb5e-3b17-4765-87cf-bc4569fc5f32/positions",
          "type": "retireorderposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      }
    }
```

### Позиции Вывода из оборота 
Отдельный ресурс для управления позициями Вывода из оборота. С его помощью вы можете управлять позициями большого документа, количество строк в котором превышает лимит на количество строк, сохраняемых вместе с документом. Этот лимит равен 1000. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](../#mojsklad-json-api-obschie-swedeniq-rabota-s-poziciqmi-dokumentow).

### Получить позиции Вывода из оборота 
Запрос на получение списка всех позиций данного Вывода из оборота.

| Название    | Тип                                                       | Описание                                                                |
| ----------- | :-------------------------------------------------------- |:------------------------------------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                                    |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                            |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой позиции Вывода из оборота.   |

**Параметры**

| Параметр   | Описание                                                                                                                               |
| :--------- |:---------------------------------------------------------------------------------------------------------------------------------------|
| **id**     | `string` (required) *Example: b14bcb5e-3b17-4765-87cf-bc4569fc5f32* id Вывода из оборота.                                              |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить позиции Вывода из оборота

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/b14bcb5e-3b17-4765-87cf-bc4569fc5f32/positions"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций отдельного Вывода из оборота.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/b14bcb5e-3b17-4765-87cf-bc4569fc5f32/positions",
    "type": "retireorderposition",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/b14bcb5e-3b17-4765-87cf-bc4569fc5f32/positions/d3040339-a8bd-11ef-ac15-000400000059",
        "type": "retireorderposition",
        "mediaType": "application/json"
      },
      "id": "d3040339-a8bd-11ef-ac15-000400000059",
      "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
      "quantity": 2.0,
      "price": 50000.0,
      "vat": 20,
      "vatEnabled": true,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/d1c96f39-a8bd-11ef-ac15-000400000006",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=d1c84ff7-a8bd-11ef-ac15-000400000004"
        }
      },
      "trackingCodes": [
        {
          "cis": "010463003759026521uHpIIf-111122",
          "type": "trackingcode"
        },
        {
          "cis": "010465011724001921yM1QsEStTWZfG2406402",
          "type": "trackingcode"
        }
      ]
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/b14bcb5e-3b17-4765-87cf-bc4569fc5f32/positions/05c97192-d4d3-4781-b2e8-85edc190347b",
        "type": "retireorderposition",
        "mediaType": "application/json"
      },
      "id": "05c97192-d4d3-4781-b2e8-85edc190347b",
      "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
      "quantity": 2.0,
      "price": 30000.0,
      "vat": 20,
      "vatEnabled": true,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/d1c96f39-a8bd-11ef-ac15-000400000006",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=d1c84ff7-a8bd-11ef-ac15-000400000004"
        }
      },
      "trackingCodes": [
        {
          "cis": "010463003759026521uHpIIf2111114",
          "type": "trackingcode"
        },
        {
          "cis": "010463003759026521uHpIIf-nXIH>1",
          "type": "trackingcode"
        }
      ]
    }
  ]
}
```

### Позиция Вывода из оборота
 
### Получить позицию

**Параметры**

| Параметр       | Описание                                                                                  |
| :------------- |:------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: b14bcb5e-3b17-4765-87cf-bc4569fc5f32* id Вывода из оборота. |
| **positionID** | `string` (required) *Example: 05c97192-d4d3-4781-b2e8-85edc190347b* id позиции.           |
 
> Запрос на получение отдельной позиции Вывода из оборота с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/b14bcb5e-3b17-4765-87cf-bc4569fc5f32/positions/05c97192-d4d3-4781-b2e8-85edc190347b"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции Вывода из оборота.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/b14bcb5e-3b17-4765-87cf-bc4569fc5f32/positions/05c97192-d4d3-4781-b2e8-85edc190347b",
    "type": "retireorderposition",
    "mediaType": "application/json"
  },
  "id": "05c97192-d4d3-4781-b2e8-85edc190347b",
  "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
  "quantity": 2.0,
  "price": 30000.0,
  "vat": 20,
  "vatEnabled": true,
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/d1c96f39-a8bd-11ef-ac15-000400000006",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=d1c84ff7-a8bd-11ef-ac15-000400000004"
    }
  },
  "trackingCodes": [
    {
      "cis": "010463003759026521uHpIIf2111114",
      "type": "trackingcode"
    },
    {
      "cis": "010463003759026521uHpIIf-nXIH>1",
      "type": "trackingcode"
    }
  ]
}
```

### Создать позицию
Запрос на создание новой позиции в Выводе из оборота.
Для успешного создания необходимо в теле запроса указать следующие поля:

+ **assortment** - Ссылка на товар/серию/модификацию, которую представляет собой позиция.
+ **trackingCodes** - Коды маркировки товара/серии/модификации из assortment.

**Параметры**

| Параметр | Описание                                                                                  |
| :------- |:------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Вывода из оборота. |

> Пример создания позиций в Выводе из оборота.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/7944ef04-f831-11e5-7a69-971500188b19/positions"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '   {
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/d1c96f39-a8bd-11ef-ac15-000400000006",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=d1c84ff7-a8bd-11ef-ac15-000400000004"
                  }
                },
                "trackingCodes": [
                  {
                    "cis": "010465011724001921yM1QsEStTWZfG2406402",
                    "type": "trackingcode"
                  }
                ]
            }
'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной позиции Вывода из оборота.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/7944ef04-f831-11e5-7a69-971500188b19/positions/d3040339-a8bd-11ef-ac15-000400000059",
    "type": "retireorderposition",
    "mediaType": "application/json"
  },
  "id": "d3040339-a8bd-11ef-ac15-000400000059",
  "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
  "quantity": 1.0,
  "price": 50000.0,
  "vat": 20,
  "vatEnabled": true,
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/d1c96f39-a8bd-11ef-ac15-000400000006",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=d1c84ff7-a8bd-11ef-ac15-000400000004"
    }
  },
  "trackingCodes": [
    {
      "cis": "010465011724001921yM1QsEStTWZfG2406402",
      "type": "trackingcode"
    }
  ]
}
```

### Изменить позицию
Запрос на обновление отдельной позиции Вывода из оборота. Для обновления позиции нет каких-либо
обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

| Параметр       | Описание                                                                                  |
| :------------- |:------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Вывода из оборота. |
| **positionID** | `string` (required) *Example: d3040339-a8bd-11ef-ac15-000400000059* id позиции.           |

> Пример запроса на обновление отдельной позиции в Вывода из оборота.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/7944ef04-f831-11e5-7a69-971500188b19/positions/d3040339-a8bd-11ef-ac15-000400000059"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "trackingCodes": [
              {
                "cis": "010465011724001921yM1QsEStTWZfG2406402",
                "type": "trackingcode"
              },
              {
                "cis": "110465011724001921yM1QsEStTWZfG2406402",
                "type": "trackingcode"
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции Вывода из оборота.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/7944ef04-f831-11e5-7a69-971500188b19/positions/d3040339-a8bd-11ef-ac15-000400000059",
    "type": "retireorderposition",
    "mediaType": "application/json"
  },
  "id": "d3040339-a8bd-11ef-ac15-000400000059",
  "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
  "quantity": 1.0,
  "price": 50000.0,
  "vat": 20,
  "vatEnabled": true,
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/d1c96f39-a8bd-11ef-ac15-000400000006",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=d1c84ff7-a8bd-11ef-ac15-000400000004"
    }
  },
  "trackingCodes": [
    {
      "cis": "010465011724001921yM1QsEStTWZfG2406402",
      "type": "trackingcode"
    },
    {
      "cis": "110465011724001921yM1QsEStTWZfG2406402",
      "type": "trackingcode"
    }
  ]
}
```

### Удалить позицию

**Параметры**

| Параметр       | Описание                                                                                  |
| :------------- |:------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Вывода из оборота. |
| **positionID** | `string` (required) *Example: d3040339-a8bd-11ef-ac15-000400000059* id позиции.           |

> Запрос на удаление отдельной позиции Вывода из оборота с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/7944ef04-f831-11e5-7a69-971500188b19/positions/d3040339-a8bd-11ef-ac15-000400000059"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление позиции Вывода из оборота.

### Массовое удаление позиций

**Параметры**

| Параметр       | Описание                                                                                  |
| :------------- |:------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Вывода из оборота. |

> Запрос на массовое удаление позиций Вывода из оборота.

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/7944ef04-f831-11e5-7a69-971500188b19/positions/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/7944ef04-f831-11e5-7a69-971500188b19/positions/7fce2da5-684d-11ee-ac12-000c000000a2",
            "type": "retireorderposition",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/retireorder/7944ef04-f831-11e5-7a69-971500188b19/positions/7fce37a5-684d-11ee-ac12-000c000000a3",
            "type": "retireorderposition",
            "mediaType": "application/json"
          }
        }
      ]'  
```

> Response 200 (application/json)
Успешное удаление позиций Вывода из оборота. 

