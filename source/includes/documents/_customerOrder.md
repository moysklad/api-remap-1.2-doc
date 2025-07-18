## Заказ покупателя
### Заказы покупателей 
Средствами JSON API можно создавать и обновлять сведения о Заказах покупателя, запрашивать списки Заказов и сведения по отдельным Заказам покупателей. Позициями Заказов можно управлять как в составе отдельного Заказа покупателя, так и отдельно - с помощью специальных ресурсов для управления позициями Заказа. Кодом сущности для Заказа покупателя в составе JSON API является ключевое слово **customerorder**. Больше о Заказах покупателей и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203248133-%D0%97%D0%B0%D0%BA%D0%B0%D0%B7%D1%8B-%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%B0%D1%82%D0%B5%D0%BB%D0%B5%D0%B9). Также в Заказе покупателя поддерживается протокол оповещения об изменениях виджетов вендоров - **change-handler**. Подробнее см. в документации для вендоров о [виджетах](https://dev.moysklad.ru/doc/api/vendor/1.0/#kak-rabotaut-widzhety).
#### Атрибуты сущности

| Название                  | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                                                                                                 |
|---------------------------|:----------------------------------------------------------| :------------------------------------------------------------------------------------------------------------------------------------------------ |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**             | UUID                                                      | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения``+Change-handler`                                                                                                                    |
| **agent**                 | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные контрагента<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании``+Change-handler` `+Update-provider`                                                                            |
| **agentAccount**          | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные счета контрагента<br>`+Expand``+Change-handler` `+Update-provider`                                                                                                                            |
| **applicable**            | Boolean                                                   | `=` `!=`                                                                                                                                          | Отметка о проведении<br>`+Обязательное при ответе` `+Change-handler` `+Update-provider`                                                                                                                  |
| **attributes**            | Array(Object)                                             | [Операторы доп. полей](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-fil-traciq-po-dopolnitel-nym-polqm) | Коллекция метаданных доп. полей. [Поля объекта](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)<br>`+Change-handler` `+Update-provider`                                          |
| **code**                  | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Код Заказа покупателя                                                                                                                                                                                    |
| **contract**              | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные договора<br>`+Expand``+Change-handler` `+Update-provider`                                                                                                                                     |
| **created**               | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата создания<br>`+Обязательное при ответе` `+Только для чтения``+Change-handler`                                                                                                                        |
| **deleted**               | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего удаления Заказа покупателя<br>`+Только для чтения`                                                                                                                                     |
| **deliveryPlannedMoment** | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Планируемая дата приёмки<br>`+Change-handler` `+Update-provider`                                                                                                                                         |
| **description**           | String(4096)                                              | `=` `!=` `~` `~=` `=~`                                                                                                                            | Комментарий Заказа покупателя<br>`+Change-handler` `+Update-provider`                                                                                                                                    |
| **externalCode**          | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код Заказа покупателя<br>`+Обязательное при ответе``+Change-handler` `+Update-provider`                                                                                                          |
| **files**                 | MetaArray                                                 |                                                                                                                                                   | Метаданные массива [Файлов](../dictionaries/#suschnosti-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand`                                                            |
| **group**                 | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                                                                                 |
| **id**                    | UUID                                                      | `=` `!=`                                                                                                                                          | ID Заказа покупателя<br>`+Обязательное при ответе` `+Только для чтения``+Change-handler`                                                                                                                 |
| **invoicedSum**           | Float                                                     |                                                                                                                                                   | Сумма счетов покупателю<br>`+Обязательное при ответе` `+Только для чтения``+Change-handler`                                                                                                              |
| **meta**                  | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные Заказа покупателя<br>`+Обязательное при ответе``+Change-handler`                                                                                                                              |
| **moment**                | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата документа<br>`+Обязательное при ответе``+Change-handler` `+Update-provider`                                                                                                                         |
| **name**                  | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование Заказа покупателя<br>`+Обязательное при ответе``+Change-handler` `+Update-provider`                                                                                                         |
| **organization**          | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании``+Change-handler` `+Update-provider`                                                                                 |
| **organizationAccount**   | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные счета юрлица<br>`+Expand``+Change-handler` `+Update-provider`                                                                                                                                 |
| **owner**                 | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Expand`                                                                                                                                                                        |
| **payedSum**              | Float                                                     |                                                                                                                                                   | Сумма входящих платежей по Заказу<br>`+Обязательное при ответе` `+Только для чтения``+Change-handler`                                                                                                    |
| **positions**             | MetaArray                                                 |                                                                                                                                                   | Метаданные позиций Заказа покупателя<br>`+Обязательное при ответе` `+Expand``+Change-handler` `+Update-provider`                                                                                         |
| **printed**               | Boolean                                                   | `=` `!=`                                                                                                                                          | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                 |
| **project**               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные проекта<br>`+Expand``+Change-handler` `+Update-provider`                                                                                                                                      |
| **published**             | Boolean                                                   | `=` `!=`                                                                                                                                          | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                               |
| **rate**                  | Object                                                    |                                                                                                                                                   | Валюта. [Подробнее тут](../documents/#dokumenty-obschie-swedeniq-valuta-w-dokumentah)<br>`+Обязательное при ответе``+Change-handler` `+Update-provider`                                                  |
| **reservedSum**           | Float                                                     |                                                                                                                                                   | Сумма товаров в резерве<br>`+Обязательное при ответе` `+Только для чтения``+Change-handler`                                                                                                              |
| **salesChannel**          | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные канала продаж<br>`+Expand`                                                                                                                                                                    |
| **shared**                | Boolean                                                   | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе`                                                                                                                                                               |
| **shipmentAddress**       | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Адрес доставки Заказа покупателя<br>`+Change-handler`                                                                                                                                                    |
| **shipmentAddressFull**   | Object                                                    |                                                                                                                                                   | Адрес доставки Заказа покупателя с детализацией по отдельным полям. [Подробнее тут](../documents/#dokumenty-zakaz-pokupatelq-zakazy-pokupatelej-atributy-suschnosti-adres-dostawki)<br>`+Change-handler` |
| **shippedSum**            | Float                                                     |                                                                                                                                                   | Сумма отгруженного<br>`+Обязательное при ответе` `+Только для чтения``+Change-handler`                                                                                                                   |
| **state**                 | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные статуса заказа<br>`+Expand``+Change-handler` `+Update-provider`                                                                                                                               |
| **store**                 | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные склада<br>`+Expand``+Change-handler` `+Update-provider`                                                                                                                                       |
| **sum**                   | Int                                                       | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Сумма Заказа в установленной валюте<br>`+Обязательное при ответе` `+Только для чтения``+Change-handler`                                                                                                  |
| **syncId**                | UUID                                                      | `=` `!=`                                                                                                                                          | ID синхронизации. После заполнения недоступен для изменения                                                                                                                                              |
| **taxSystem**             | Enum                                                      |                                                                                                                                                   | Код системы налогообложения. [Подробнее тут](../dictionaries/#suschnosti-towar-towary-atributy-suschnosti-kod-sistemy-nalogooblozheniq)<br>`+Change-handler`                                             |
| **updated**               | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления Заказа покупателя<br>`+Обязательное при ответе` `+Только для чтения``+Change-handler`                                                                                       |
| **vatEnabled**            | Boolean                                                   |                                                                                                                                                   | Учитывается ли НДС<br>`+Обязательное при ответе``+Change-handler` `+Update-provider`                                                                                                                     |
| **vatIncluded**           | Boolean                                                   |                                                                                                                                                   | Включен ли НДС в цену<br>`+Change-handler` `+Update-provider`                                                                                                                                            |
| **vatSum**                | Float                                                     |                                                                                                                                                   | Сумма НДС<br>`+Обязательное при ответе` `+Только для чтения``+Change-handler`                                                                                                                            |

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

#### Связи с другими документами

| Название           | Описание                                                                                                                |
|--------------------|:------------------------------------------------------------------------------------------------------------------------|
| **purchaseOrders** | Массив ссылок на связанные заказы поставщикам в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **demands**        | Массив ссылок на связанные отгрузки в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)           |
| **payments**       | Массив ссылок на связанные платежи в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)            |
| **invoicesOut**    | Массив ссылок на связанные счета покупателям в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)  |
| **moves**          | Массив ссылок на связанные перемещения в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)        |
| **prepayments**    | Массив ссылок на связанные предоплаты в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)         |

#### Позиции Заказа покупателя
Позиции Заказа - это список товаров/услуг/модификаций/серий/комплектов.
Объект позиции Заказа содержит следующие поля:

| Название       | Тип                                                      | Описание                                                                                                                                                                                                                                                                                     |
| -------------- |:---------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**  | UUID                                                     | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения``+Change-handler`                                                                                                                                                                                                        |
| **assortment** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)| Метаданные товара/услуги/серии/модификации/комплекта, которую представляет собой позиция<br>`+Обязательное при ответе` `+Expand``+Change-handler` `+Update-provider`                                                                                                                         |
| **discount**   | Float                                                    | Процент скидки или наценки. Наценка указывается отрицательным числом, т.е. -10 создаст наценку в 10%<br>`+Обязательное при ответе``+Change-handler` `+Update-provider`                                                                                                                       |
| **id**         | UUID                                                     | ID позиции<br>`+Обязательное при ответе` `+Только для чтения``+Change-handler` `+Update-provider`                                                                                                                                                                                            |
| **pack**       | Object                                                   | Упаковка Товара. [Подробнее тут](../dictionaries/#suschnosti-towar-towary-atributy-wlozhennyh-suschnostej-upakowki-towara)<br>`+Change-handler` `+Update-provider`                                                                                                                           |
| **price**      | Float                                                    | Цена товара/услуги в копейках<br>`+Обязательное при ответе``+Change-handler` `+Update-provider`                                                                                                                                                                                              |
| **quantity**   | Float                                                    | Количество товаров/услуг данного вида в позиции. Если позиция - товар, у которого включен учет по серийным номерам, то значение в этом поле всегда будет равно количеству серийных номеров для данной позиции в документе.<br>`+Обязательное при ответе``+Change-handler` `+Update-provider` |
| **reserve**    | Float                                                    | Резерв данной позиции<br>`+Change-handler` `+Update-provider`                                                                                                                                                                                                                                |
| **shipped**    | Float                                                    | Доставлено<br>`+Обязательное при ответе` `+Только для чтения` `+Change-handler`                                                                                                                                                                                                              |
| **taxSystem**  | Enum                                                     | Код системы налогообложения. [Подробнее тут](../dictionaries/#suschnosti-towar-towary-atributy-suschnosti-kod-sistemy-nalogooblozheniq)                                                                                                                                                      |
| **vat**        | Int                                                      | НДС, которым облагается текущая позиция<br>`+Обязательное при ответе``+Change-handler` `+Update-provider`                                                                                                                                                                                    |
| **vatEnabled** | Boolean                                                  | Включен ли НДС для позиции. С помощью этого флага для позиции можно выставлять НДС = 0 или НДС = "без НДС". (vat = 0, vatEnabled = false) -> vat = "без НДС", (vat = 0, vatEnabled = true) -> vat = 0%.<br>`+Обязательное при ответе``+Change-handler` `+Update-provider`                    |

С позициями можно работать с помощью специальных ресурсов для управления позициями Заказа,
а также в составе отдельного Заказа покупателя. При работе в составе отдельного Заказа покупателя,
вы можете отправлять запросы на создание отдельного Заказа покупателя с включенным в тело запроса
массивом позиций Заказа. Если количество позиций превышает максимально допустимое, то для
дальнейшего пополнения позиций нужно будет работать со специальным ресурсом "Позиции Заказа покупателя".
Также, при работе в составе отдельного Заказа покупателя, можно отправлять запросы на обновление списка позиций
с включенным в тело запроса массивом позиций Заказа. При этом важно помнить, что коллекция позиций будет
восприниматься как "все позиции Заказа" и полностью заменит уже существующую коллекцию при обновлении объекта - лишние
позиции будут удалены, новые добавлены, существующие - изменены.

О работе с доп. полями Заказов покупателей можно прочитать [здесь](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)

#### Атрибуты сущности Адрес доставки

| Название       | Тип                                                       | Описание           |
| -------------- | :-------------------------------------------------------- | :----------------- |
| **addInfo**    | String(255)                                               | Другое             |
| **apartment**  | String(30)                                                | Квартира           |
| **city**       | String(255)                                               | Город              |
| **comment**    | String(255)                                               | Комментарий        |
| **country**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные страны  |
| **house**      | String(30)                                                | Дом                |
| **postalCode** | String(6)                                                 | Почтовый индекс    |
| **region**     | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные региона |
| **street**     | String(255)                                               | Улица              |

Строка адреса является конкатенацией полей структурированного адреса в следующем порядке: postalCode -> country -> region -> city -> street -> house -> apartment -> addInfo, используя запятую в качестве разделителя.
При передаче в МойСклад сущностей с адресом используйте либо строковый адрес, либо структурированный.
При передаче обоих адресов строковый будет игнорирован.
При передаче только строкового он будет отражаться как в строковом поле так и в addInfo структурированного адреса.
Для адреса не поддерживается [значение `null`](../#mojsklad-json-api-obschie-swedeniq-podderzhka-null). Передача `null` этому атрибуту не приведет к его удалению.
Для удаления адреса необходимо в строковое поле `shipmentAddress` передать пустую строку `""`.

### Получить список Заказов покупателей 
Запрос всех Заказов покупателей на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                       |
| ----------- | :-------------------------------------------------------- | :------------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                           |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                   |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Заказы покупателей. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |

> Получить список Заказов покупателей

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/customerorder"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Заказов покупателей.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/context/employee",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder",
    "type": "customerorder",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/34efe2ee-015e-11e6-9464-e4de0000006b",
        "type": "customerorder",
        "mediaType": "application/json"
      },
      "id": "34efe2ee-015e-11e6-9464-e4de0000006b",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
      "updated": "2016-04-14 12:03:05",
      "name": "00001",
      "description": "Это комментарий к заказу покупателя!",
      "externalCode": "CntjFix4hoyZOIhZiULjv2",
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
      "moment": "2016-04-13 12:57:00",
      "applicable": true,
      "created": "2007-02-07 17:16:41",
      "printed": true,
      "published": true,
      "vatEnabled": true,
      "vatIncluded": true,
      "sum": 346453701206,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/bc1b4fde-019a-11e6-9464-e4de00000073",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        },
        "value": 214
      },
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "store": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "contract": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/contract/8ce3c179-015e-11e6-9464-e4de0000007a",
          "type": "contract",
          "mediaType": "application/json"
        }
      },
      "agent": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "state": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "organizationAccount": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/850c8af2-f504-11e5-8a84-bae50000015f",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "agentAccount": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078/accounts/9794f7a0-f689-11e5-8a84-bae500000079",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "salesChannel": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/saleschannel/56446e7f-3633-11ec-ac13-000d00000000",
          "type": "saleschannel",
          "mediaType": "application/json"
        }
      },
      "attributes": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "c2ecd338-015e-11e6-9464-e4de0000008f",
          "name": "AttributeName1",
          "type": "string",
          "value": "1251252"
        }
      ],
      "positions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/34efe2ee-015e-11e6-9464-e4de0000006b/positions",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
          "type": "customerorderposition",
          "mediaType": "application/json",
          "size": 4,
          "limit": 1000,
          "offset": 0
        }
      },
      "reservedSum": 346389501206,
      "deliveryPlannedMoment": "2016-04-15 12:58:00",
      "payedSum": 365939611804,
      "shippedSum": 408739611676,
      "invoicedSum": 408739611676,
      "taxSystem": "GENERAL_TAX_SYSTEM",
      "shipmentAddress":"125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
      "shipmentAddressFull":{
        "postalCode":"125009",
        "country":{
          "meta":{
            "href":"https://api.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
            "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/country/metadata",
            "type":"country",
            "mediaType":"application/json"
          }
        },
        "region":{
          "meta":{
            "href":"https://api.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
            "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/region/metadata",
            "type":"region",
            "mediaType":"application/json"
          }
        },
        "city":"Москва",
        "street":"ул Тверская",
        "house":"1",
        "apartment":"123",
        "addInfo":"addinfo",
        "comment":"some words about address"
      }
    }
  ]
}
```

### Создать Заказ покупателя 
Запрос на создание нового Заказа покупателя.
Обязательные для создания поля:

| Параметр                       | Описание                                                                                                     |
| ------------------------------ | :----------------------------------------------------------------------------------------------------------- |
| **organization**               | Ссылка на ваше юрлицо в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)              |
| **agent**                      | Ссылка на контрагента (покупателя) в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |

> Пример создания нового Заказа с телом запроса, содержащим только необходимые поля.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/customerorder"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "organization": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "agent": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
                "type": "counterparty",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Заказа покупателя.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/d9ceb08f-01ae-11e6-9464-e4de00000020",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
    "type": "customerorder",
    "mediaType": "application/json"
  },
  "id": "d9ceb08f-01ae-11e6-9464-e4de00000020",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-14 13:02:24",
  "name": "00003",
  "externalCode": "08ehdxhRgVIB5-Sa-QNI42",
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
  "moment": "2016-04-14 13:02:24",
  "applicable": true,
  "vatEnabled": true,
  "vatIncluded": true,
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
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078/accounts/9794f7a0-f689-11e5-8a84-bae500000079",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/d9ceb08f-01ae-11e6-9464-e4de00000020/positions",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
      "type": "customerorderposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "reservedSum": 0,
  "payedSum": 0,
  "shippedSum": 0,
  "invoicedSum": 0
}
```

> Пример создания нового Заказа с более насыщенным телом запроса.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/customerorder"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "name": "000034",
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
            "organization": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "code": "1243521",
            "moment": "2016-04-19 13:50:24",
            "applicable": false,
            "vatEnabled": false,
            "agent": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
                "type": "counterparty",
                "mediaType": "application/json"
              }
            },
            "state": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
                "type": "state",
                "mediaType": "application/json"
              }
            },
            "shipmentAddressFull":{  
              "postalCode":"125009",
              "country":{  
                "meta":{  
                  "href":"https://api.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
                  "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/country/metadata",
                  "type":"country",
                  "mediaType":"application/json"
                }
              },
              "region":{  
                "meta":{  
                  "href":"https://api.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
                  "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/region/metadata",
                  "type":"region",
                  "mediaType":"application/json"
                }
              },
              "city":"Москва",
              "street":"ул Тверская",
              "house":"1",
              "apartment":"123",
              "addInfo":"addinfo",
              "comment":"some words about address"
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Заказа покупателя.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
    "type": "customerorder",
    "mediaType": "application/json"
  },
  "id": "c49e83b3-01af-11e6-9464-e4de00000026",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-14 13:08:58",
  "name": "000034",
  "code": "1243521",
  "externalCode": "DAD9peGij6sDNii49Dkam2",
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
  "moment": "2016-04-19 13:50:24",
  "applicable": false,
  "vatEnabled": false,
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
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterperty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078/accounts/9794f7a0-f689-11e5-8a84-bae500000079",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
      "type": "customerorderposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "reservedSum": 0,
  "payedSum": 0,
  "shippedSum": 0,
  "invoicedSum": 0,
  "shipmentAddress":"125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
  "shipmentAddressFull":{
    "postalCode":"125009",
    "country":{
      "meta":{
        "href":"https://api.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
        "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type":"country",
        "mediaType":"application/json"
      }
    },
    "region":{
      "meta":{
        "href":"https://api.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
        "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type":"region",
        "mediaType":"application/json"
      }
    },
    "city":"Москва",
    "street":"ул Тверская",
    "house":"1",
    "apartment":"123",
    "addInfo":"addinfo",
    "comment":"some words about address"
  }
}
```

> Пример запроса на создание Заказа покупателя с доп. полями.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/customerorder"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "name" : "000034",
            "organization": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "code" : "1243521",
            "moment": "2016-04-19 13:50:24",
            "applicable": false,
            "vatEnabled": false,
            "agent": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
                "type": "counterparty",
                "mediaType": "application/json"
              }
            },
            "state": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
                "type": "state",
                "mediaType": "application/json"
              }
            },
            "attributes": [
              {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "Атрибут заказа",
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Заказа покупателя.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
    "type": "customerorder",
    "mediaType": "application/json"
  },
  "id": "c49e83b3-01af-11e6-9464-e4de00000026",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-14 13:08:58",
  "name": "000034",
  "code": "1243521",
  "externalCode": "DAD9peGij6sDNii49Dkam2",
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
  "moment": "2016-04-19 13:50:24",
  "applicable": false,
  "vatEnabled": false,
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
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078/accounts/9794f7a0-f689-11e5-8a84-bae500000079",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c2ecd338-015e-11e6-9464-e4de0000008f",
      "name": "AttributeName1",
      "type": "string",
      "value": "Атрибут заказа"
    }
  ],
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
      "type": "customerorderposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "reservedSum": 0,
  "payedSum": 0,
  "shippedSum": 0,
  "invoicedSum": 0
}
```

> Пример запроса на создание Заказа покупателя с позициями в теле запроса.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/customerorder"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "name": "000034",
            "organization": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "code": "1243521",
            "moment": "2016-04-19 13:50:24",
            "applicable": false,
            "vatEnabled": false,
            "agent": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
                "type": "counterparty",
                "mediaType": "application/json"
              }
            },
            "state": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
                "type": "state",
                "mediaType": "application/json"
              }
            },
            "positions": [
              {
                "quantity": 10,
                "price": 100.0,
                "discount": 0,
                "vat": 0,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/8b382799-f7d2-11e5-8a84-bae5000003a5",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                },
                "reserve": 10
              },
              {
                "quantity": 20,
                "price": 200.0,
                "discount": 0,
                "vat": 21,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/be903062-f504-11e5-8a84-bae50000019a",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                },
                "reserve": 20
              },
              {
                "quantity": 30,
                "price": 300.0,
                "discount": 0,
                "vat": 7,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/c02e3a5c-007e-11e6-9464-e4de00000006",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                },
                "pack": {
                  "id": "1bf22e62-8b47-11e8-56c0-000800000006"
                },
                "reserve": 30
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Заказа покупателя.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
    "type": "customerorder",
    "mediaType": "application/json"
  },
  "id": "c49e83b3-01af-11e6-9464-e4de00000026",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "version": 0,
  "updated": "2016-04-14 13:08:58",
  "name": "000034",
  "code": "1243521",
  "externalCode": "DAD9peGij6sDNii49Dkam2",
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
  "moment": "2016-04-19 13:50:24",
  "applicable": false,
  "vatEnabled": false,
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
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterperty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078/accounts/9794f7a0-f689-11e5-8a84-bae500000079",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "documents": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/06406b97-9138-11e6-8a84-bae500000000/documents",
      "mediaType": "application/json",
      "size": 0,
      "limit": 100,
      "offset": 0
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
      "type": "customerorderposition",
      "mediaType": "application/json",
      "size": 3,
      "limit": 100,
      "offset": 0
    }
  },
  "reservedSum": 10000,
  "payedSum": 0,
  "shippedSum": 0,
  "invoicedSum": 0
}
```

### Массовое создание и обновление Заказов покупателей 
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Заказов покупателей.
В теле запроса нужно передать массив, содержащий JSON представления Заказов покупателей, которые вы хотите создать или обновить.
Обновляемые Заказы покупателей должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Заказов покупателей

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/customerorder"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "00003",
              "organization": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "agent": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
                  "type": "counterparty",
                  "mediaType": "application/json"
                }
              }
            },
            {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
                "type": "customerorder",
                "mediaType": "application/json"
              },
              "name": "000039",
              "group": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/ee2d9c89-1fea-4791-8c99-722e8f8294d0",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
                  "type": "group",
                  "mediaType": "application/json"
                }
              },
              "externalCode": "championCode",
              "code": "codeOfChampion",
              "moment": "2013-04-19 13:50:24",
              "applicable": true,
              "vatEnabled": true,
              "vatIncluded": true,
              "agent": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005",
                  "type": "counterparty",
                  "mediaType": "application/json"
                }
              },
              "agentAccount": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005/accounts/71d4cfdb-fd85-11e5-9464-e4de00000006",
                  "type": "account",
                  "mediaType": "application/json"
                }
              },
              "state": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
                  "type": "state",
                  "mediaType": "application/json"
                }
              }
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Заказов покупателей.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/d9ceb08f-01ae-11e6-9464-e4de00000020",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
      "type": "customerorder",
      "mediaType": "application/json"
    },
    "id": "d9ceb08f-01ae-11e6-9464-e4de00000020",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
    "updated": "2016-04-14 13:02:24",
    "name": "00003",
    "externalCode": "08ehdxhRgVIB5-Sa-QNI42",
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
    "moment": "2016-04-14 13:02:24",
    "applicable": true,
    "vatEnabled": true,
    "vatIncluded": true,
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "agent": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "state": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
        "type": "state",
        "mediaType": "application/json"
      }
    },
    "organizationAccount": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "agentAccount": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078/accounts/9794f7a0-f689-11e5-8a84-bae500000079",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "created": "2007-02-07 17:16:41",
    "printed": true,
    "published": true,
    "positions": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/d9ceb08f-01ae-11e6-9464-e4de00000020/positions",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
        "type": "customerorderposition",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    },
    "reservedSum": 0,
    "payedSum": 0,
    "shippedSum": 0,
    "invoicedSum": 0
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
      "type": "customerorder",
      "mediaType": "application/json"
    },
    "id": "c49e83b3-01af-11e6-9464-e4de00000026",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
    "updated": "2016-04-14 13:30:05",
    "name": "000039",
    "code": "codeOfChampion",
    "externalCode": "championCode",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/ee2d9c89-1fea-4791-8c99-722e8f8294d0",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "moment": "2013-04-19 12:50:24",
    "applicable": true,
    "vatEnabled": true,
    "vatIncluded": true,
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "agent": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "state": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
        "type": "state",
        "mediaType": "application/json"
      }
    },
    "organizationAccount": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "agentAccount": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005/accounts/71d4cfdb-fd85-11e5-9464-e4de00000006",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "created": "2007-02-07 17:16:41",
    "printed": true,
    "published": true,    "positions": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
        "type": "customerorderposition",
        "mediaType": "application/json",
        "size": 3,
        "limit": 1000,
        "offset": 0
      }
    },
    "reservedSum": 0,
    "payedSum": 0,
    "shippedSum": 0,
    "invoicedSum": 0
  }
]
```

### Удалить Заказ покупателя

**Параметры**

| Параметр | Описание                                                                                  |
| :------- | :---------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа покупателя. |

> Запрос на удаление Заказа покупателя с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление Заказа покупателя.

### Метаданные Заказов покупателей 
#### Метаданные Заказов покупателей 
Запрос на получение метаданных Заказов покупателей. Результат - объект JSON, включающий в себя:

| Параметр                       | Описание                                                                                                                 |
| ------------------------------ | :----------------------------------------------------------------------------------------------------------------------- |
| **meta**                       | Ссылка на метаданные Заказов покупателей                                                                                 |
| **attributes**                 | Массив объектов доп. полей Заказов покупателей в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **states**                     | Массив статусов Заказов покупателей                                                                                      |
| **createShared**               | создавать новые Заказы покупателей с меткой "Общий"                                                                      |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

### Массовое удаление Заказов покупателей

В теле запроса нужно передать массив, содержащий JSON метаданных Заказов покупателей, которые вы хотите удалить.


> Запрос на массовое удаление Заказов покупателей. 

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
  -d '[
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b1",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
                "type": "customerorder",
                "mediaType": "application/json"
            }
        },
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b2",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
                "type": "customerorder",
                "mediaType": "application/json"
            }
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Заказов покупателей.

```json
[
  {
    "info":"Сущность 'customerorder' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'customerorder' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
``` 

> Метаданные Заказов покупателей

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Заказов покупателей.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/c2ecd338-015e-11e6-9464-e4de0000008f",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "name": "AttributeName1",
      "type": "boolean",
      "required": false
    }
  ],
  "states": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56c504-2e58-11e6-8a84-bae500000069",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Новый",
      "color": 15106326,
      "stateType": "Regular",
      "entityType": "customerorder"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56cae3-2e58-11e6-8a84-bae50000006a",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56cae3-2e58-11e6-8a84-bae50000006a",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Подтвержден",
      "color": 40931,
      "stateType": "Regular",
      "entityType": "customerorder"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56cf4f-2e58-11e6-8a84-bae50000006b",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56cf4f-2e58-11e6-8a84-bae50000006b",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Собран",
      "color": 8767198,
      "stateType": "Regular",
      "entityType": "customerorder"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56d433-2e58-11e6-8a84-bae50000006c",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56d433-2e58-11e6-8a84-bae50000006c",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Отгружен",
      "color": 10774205,
      "stateType": "Regular",
      "entityType": "customerorder"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56d92f-2e58-11e6-8a84-bae50000006d",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56d92f-2e58-11e6-8a84-bae50000006d",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Доставлен",
      "color": 8825440,
      "stateType": "Successful",
      "entityType": "customerorder"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56de0a-2e58-11e6-8a84-bae50000006e",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56de0a-2e58-11e6-8a84-bae50000006e",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Возврат",
      "color": 15280409,
      "stateType": "Unsuccessful",
      "entityType": "customerorder"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56e2b4-2e58-11e6-8a84-bae50000006f",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56e2b4-2e58-11e6-8a84-bae50000006f",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Отменен",
      "color": 15280409,
      "stateType": "Unsuccessful",
      "entityType": "customerorder"
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
  "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/57ab884e-558b-11e6-8a84-bae500000078",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "57ab884e-558b-11e6-8a84-bae500000078",
  "name": "AttributeName1",
  "type": "boolean",
  "required": false
}
```

### Заказ покупателя

### Получить Заказ покупателя

**Параметры**

| Параметр | Описание                                                                                  |
| :------- | :---------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа покупателя. |
 
> Запрос на получение отдельного Заказа покупателя с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Заказа покупателя.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/34efe2ee-015e-11e6-9464-e4de0000006b",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
    "type": "customerorder",
    "mediaType": "application/json"
  },
  "id": "34efe2ee-015e-11e6-9464-e4de0000006b",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-14 12:03:05",
  "name": "00001",
  "description": "Это комментарий к заказу покупателя!",
  "externalCode": "CntjFix4hoyZOIhZiULjv2",
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
  "moment": "2016-04-13 12:57:00",
  "applicable": true,
  "vatEnabled": true,
  "vatIncluded": true,
  "printed": true,
  "published": true,
  "sum": 346453701206,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/bc1b4fde-019a-11e6-9464-e4de00000073",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    },
    "value": 214
  },
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "contract": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/contract/8ce3c179-015e-11e6-9464-e4de0000007a",
      "type": "contract",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/850c8af2-f504-11e5-8a84-bae50000015f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078/accounts/9794f7a0-f689-11e5-8a84-bae500000079",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "salesChannel": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/saleschannel/56446e7f-3633-11ec-ac13-000d00000000",
      "type": "saleschannel",
      "mediaType": "application/json"
    }
  },
  "attributes": [{
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/c2ecd338-015e-11e6-9464-e4de0000008f",
      "type": "attributemetadata",
      "mediaType": "application/json"
    },
    "id": "c2ecd338-015e-11e6-9464-e4de0000008f",
    "name": "AttributeName1",
    "type": "long",
    "value": "1251252"
  }],
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/34efe2ee-015e-11e6-9464-e4de0000006b/positions",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
      "type": "customerorderposition",
      "mediaType": "application/json",
      "size": 4,
      "limit": 1000,
      "offset": 0
    }
  },
  "reservedSum": 346389501206,
  "deliveryPlannedMoment": "2016-04-15 12:58:00",
  "payedSum": 365939611804,
  "shippedSum": 408739611676,
  "invoicedSum": 408739611676,
  "shipmentAddress":"125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
  "shipmentAddressFull":{
    "postalCode":"125009",
    "country":{
      "meta":{
        "href":"https://api.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
        "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type":"country",
        "mediaType":"application/json"
      }
    },
    "region":{
      "meta":{
        "href":"https://api.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
        "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type":"region",
        "mediaType":"application/json"
      }
    },
    "city":"Москва",
    "street":"ул Тверская",
    "house":"1",
    "apartment":"123",
    "addInfo":"addinfo",
    "comment":"some words about address"
  }
}
```

### Изменить Заказ покупателя 
Запрос на обновление Заказа покупателя с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Заказа покупателя, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Заказа покупателя](../documents/#dokumenty-zakaz-pokupatelq).
При обновлении полей **organization** и **agent** нужно также обновить поля **organizationAccount** и
**agentAccount** соответственно, иначе произойдет ошибка.

**Параметры**

| Параметр | Описание                                                                                  |
| :------- | :---------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа покупателя. |

> Пример запроса на обновление отдельного Заказа покупателя.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "name": "000039",
            "group": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/ee2d9c89-1fea-4791-8c99-722e8f8294d0",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
                "type": "group",
                "mediaType": "application/json"
              }
            },
            "externalCode": "championCode",
            "code": "codeOfChampion",
            "moment": "2013-04-19 13:50:24",
            "applicable": true,
            "vatEnabled": true,
            "vatIncluded": true,
            "agent": {
              "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005",
                  "type": "counterparty",
                  "mediaType": "application/json"
              }
            },
            "agentAccount": {
              "meta": {
                          "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005/accounts/71d4cfdb-fd85-11e5-9464-e4de00000006",
                          "type": "account",
                          "mediaType": "application/json"
                      }
            },
            "state": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
                "type": "state",
                "mediaType": "application/json"
              }
            },
           "shipmentAddressFull":{  
              "postalCode":"125009",
              "country":{  
                "meta":{  
                  "href":"https://api.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
                  "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/country/metadata",
                  "type":"country",
                  "mediaType":"application/json"
                }
              },
              "region":{  
                "meta":{  
                  "href":"https://api.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
                  "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/region/metadata",
                  "type":"region",
                  "mediaType":"application/json"
                }
              },
              "city":"Москва",
              "street":"ул Тверская",
              "house":"1",
              "apartment":"111",
              "addInfo":"addinfo",
              "comment":"some words about address"
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Заказа покупателя.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
    "type": "customerorder",
    "mediaType": "application/json"
  },
  "id": "c49e83b3-01af-11e6-9464-e4de00000026",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-14 13:30:05",
  "name": "000039",
  "code": "codeOfChampion",
  "externalCode": "championCode",
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
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/ee2d9c89-1fea-4791-8c99-722e8f8294d0",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2013-04-19 12:50:24",
  "applicable": true,
  "vatEnabled": true,
  "vatIncluded": true,
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
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005/accounts/71d4cfdb-fd85-11e5-9464-e4de00000006",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
      "type": "customerorderposition",
      "mediaType": "application/json",
      "size": 3,
      "limit": 1000,
      "offset": 0
    }
  },
  "reservedSum": 0,
  "payedSum": 0,
  "shippedSum": 0,
  "invoicedSum": 0,
  "shipmentAddress":"125009, Россия, г Москва, Москва, ул Тверская, 1, 111, addInfo",
  "shipmentAddressFull":{  
    "postalCode":"125009",
    "country":{  
      "meta":{  
        "href":"https://api.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
        "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type":"country",
        "mediaType":"application/json"
      }
    },
    "region":{  
      "meta":{  
        "href":"https://api.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
        "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type":"region",
        "mediaType":"application/json"
      }
    },
    "city":"Москва",
    "street":"ул Тверская",
    "house":"1",
    "apartment":"111",
    "addInfo":"addinfo",
    "comment":"some words about address"
  }
}
```

> Пример запроса на изменение Заказа покупателя с дополнительными полями.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "name": "000039",
            "externalCode": "championCode",
            "code": "codeOfChampion",
            "moment": "2013-04-19 13:50:24",
            "applicable": true,
            "vatEnabled": true,
            "vatIncluded": true,
            "agent": {
              "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005",
                  "type": "counterparty",
                  "mediaType": "application/json"
              }
            },
            "agentAccount": {
              "meta": {
                          "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005/accounts/71d4cfdb-fd85-11e5-9464-e4de00000006",
                          "type": "account",
                          "mediaType": "application/json"
                      }
            },
            "state": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
                "type": "state",
                "mediaType": "application/json"
              }
            },
            "attributes": [
              {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "Обновленный Атрибут заказа",
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Заказа покупателя.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
    "type": "customerorder",
    "mediaType": "application/json"
  },
  "id": "c49e83b3-01af-11e6-9464-e4de00000026",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-14 13:30:05",
  "name": "000039",
  "code": "codeOfChampion",
  "externalCode": "championCode",
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
  "moment": "2013-04-19 12:50:24",
  "applicable": true,
  "vatEnabled": true,
  "vatIncluded": true,
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
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005/accounts/71d4cfdb-fd85-11e5-9464-e4de00000006",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c2ecd338-015e-11e6-9464-e4de0000008f",
      "name": "AttributeName1",
      "type": "string",
      "value": "Обновленный Атрибут заказа"
    }
  ],
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
      "type": "customerorderposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "reservedSum": 0,
  "payedSum": 0,
  "shippedSum": 0,
  "invoicedSum": 0
}
```

> Пример запроса на обновление Заказа покупателя с позициями в теле запроса.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "name": "000039",
            "externalCode": "championCode",
            "code": "codeOfChampion",
            "moment": "2013-04-19 13:50:24",
            "applicable": true,
            "vatEnabled": true,
            "vatIncluded": true,
            "agent": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005",
                "type": "counterparty",
                "mediaType": "application/json"
              }
            },
            "agentAccount": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005/accounts/71d4cfdb-fd85-11e5-9464-e4de00000006",
                "type": "account",
                "mediaType": "application/json"
              }
            },
            "state": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
                "type": "state",
                "mediaType": "application/json"
              }
            },
            "positions": [
              {
                "id": "34f6344f-015e-11e6-9464-e4de0000006c",
                "quantity": 10,
                "price": 100.0,
                "discount": 0,
                "vat": 0,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/8b382799-f7d2-11e5-8a84-bae5000003a5",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                },
                "reserve": 10
              },
              {
                "id": "34f6344f-015e-11e6-9464-e4de0000006d",
                "quantity": 20,
                "price": 200.0,
                "discount": 0,
                "vat": 21,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/be903062-f504-11e5-8a84-bae50000019a",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                },
                "reserve": 20
              },
              {
                "id": "34f6344f-015e-11e6-9464-e4de0000006e",
                "quantity": 30,
                "price": 300.0,
                "discount": 0,
                "vat": 7,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/c02e3a5c-007e-11e6-9464-e4de00000006",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                },
                "reserve": 30
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Заказа покупателя.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
    "type": "customerorder",
    "mediaType": "application/json"
  },
  "id": "c49e83b3-01af-11e6-9464-e4de00000026",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-14 13:30:05",
  "name": "000039",
  "code": "codeOfChampion",
  "externalCode": "championCode",
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
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/ee2d9c89-1fea-4791-8c99-722e8f8294d0",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2013-04-19 12:50:24",
  "applicable": true,
  "vatEnabled": true,
  "vatIncluded": true,
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
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/71d48933-fd85-11e5-9464-e4de00000005/accounts/71d4cfdb-fd85-11e5-9464-e4de00000006",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
      "type": "customerorderposition",
      "mediaType": "application/json",
      "size": 3,
      "limit": 1000,
      "offset": 0
    }
  },
  "reservedSum": 0,
  "payedSum": 0,
  "shippedSum": 0,
  "invoicedSum": 0
}
```

### Позиции Заказа покупателя 
Отдельный ресурс для управления позициями Заказа покупателя. С его помощью вы можете управлять позициями большого документа, количество строк в котором превышает лимит на количество строк, сохраняемых вместе с документом. Этот лимит равен 1000. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](../#mojsklad-json-api-obschie-swedeniq-rabota-s-poziciqmi-dokumentow).

### Получить позиции Заказа покупателя 
Запрос на получение списка всех позиций данного Заказа покупателя.

| Название    | Тип                                                       | Описание                                                              |
| ----------- | :-------------------------------------------------------- | :-------------------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                                  |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                          |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой позиции Заказа покупателя. |

**Параметры**

| Параметр   | Описание                                                                                                                               |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа покупателя.                                              |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Запрос на получение списка всех позиций данного Заказа покупателя.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций отдельного Заказа покупателя.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/context/employee",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
    "type": "customerorderposition",
    "mediaType": "application/json",
    "size": 4,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
        "type": "customerorderposition",
        "mediaType": "application/json"
      },
      "id": "34f6344f-015e-11e6-9464-e4de0000006c",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "quantity": 1,
      "price": 123050.0,
      "discount": 0,
      "vat": 18,
      "vatEnabled": true,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/66ccbc9f-f7d2-11e5-8a84-bae500000076",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e639e90c-2a99-11e9-ac12-000c0000003e"
        }
      },
      "reserve": 1
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6451e-015e-11e6-9464-e4de0000006d",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
        "type": "customerorderposition",
        "mediaType": "application/json"
      },
      "id": "34f6451e-015e-11e6-9464-e4de0000006d",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "quantity": 1,
      "price": 64200000.0,
      "discount": 0,
      "vat": 18,
      "vatEnabled": true,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/60fc3826-00d7-11e6-9464-e4de00000097",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e639e90c-2a99-11e9-ac12-000c0000003e"
        }
      },
      "reserve": 0
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6551d-015e-11e6-9464-e4de0000006e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
        "type": "customerorderposition",
        "mediaType": "application/json"
      },
      "id": "34f6551d-015e-11e6-9464-e4de0000006e",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "quantity": 1,
      "price": 346347237062.0,
      "discount": 0,
      "vat": 18,
      "vatEnabled": true,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/56c73633-ffe4-11e5-9464-e4de000000c6",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "variant",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=e639e90c-2a99-11e9-ac12-000c00001222"
        }
      },
      "reserve": 1
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f66948-015e-11e6-9464-e4de0000006f",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
        "type": "customerorderposition",
        "mediaType": "application/json"
      },
      "id": "34f66948-015e-11e6-9464-e4de0000006f",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "quantity": 1,
      "price": 42141094.0,
      "discount": 0,
      "vat": 18,
      "vatEnabled": true,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/66cc36dc-f7d2-11e5-8a84-bae500000074",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
          "type": "variant",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=3c6dc9b8-2842-11e9-ac12-000c00000071"
        }
      },
      "reserve": 1
    }
  ]
}
```

### Позиция Заказа покупателя
Отдельная позиция Заказа с указанным id позиции.

### Получить позицию

**Параметры**

| Параметр       | Описание                                                                                          |
| :------------- | :------------------------------------------------------------------------------------------------ |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа покупателя.         |
| **positionID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции Заказа покупателя. |
 
> Запрос на получение отдельной позиции Заказа с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции Заказа покупателя.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
    "type": "customerorderposition",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "quantity": 1,
  "price": 123050.0,
  "discount": 0,
  "vat": 18,
  "vatEnabled": true,
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/66ccbc9f-f7d2-11e5-8a84-bae500000076",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=392c045c-2842-11e9-ac12-000a00000002"
    }
  },
  "reserve": 1
}
```

### Создать позицию
Запрос на создание новой позиции в Заказе покупателя.
Для успешного создания необходимо в теле запроса указать следующие поля:

+ **assortment** - Ссылка на товар/услугу/серию/модификацию/комплект, которую представляет собой позиция. Подробнее об этом поле можно прочитать в описании [позиции Заказа](../documents/#dokumenty-zakaz-pokupatelq-zakazy-pokupatelej-pozicii-zakaza-pokupatelq)

+ **quantity** - Количество указанной позиции. Должно быть положительным, иначе возникнет ошибка.

**Параметры**

| Параметр | Описание                                                                                  |
| :------- | :---------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа покупателя. |

> Пример создания одной позиции в Заказе покупателя.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "quantity": 49,
            "price": 12345.0,
            "discount": 0.0,
            "vat": 18,
            "assortment": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/66ccbc9f-f7d2-11e5-8a84-bae500000076",
                "type": "product",
                "mediaType": "application/json"
              }
            },
            "reserve": 19
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной позиции отдельного Заказа покупателя.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/a7a61c8b-acdd-11e6-8a84-bae500000000",
      "type": "customerorderposition",
      "mediaType": "application/json"
    },
    "id": "a7a61c8b-acdd-11e6-8a84-bae500000000",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "quantity": 49,
    "price": 12345.0,
    "discount": 0.0,
    "vat": 18,
    "vatEnabled": true,
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/66ccbc9f-f7d2-11e5-8a84-bae500000076",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3c6dc9b8-2842-11e9-ac12-000c00000071"
      }
    },
    "reserve": 19
  }
]
```

> Пример создания сразу нескольких позиций в Заказе покупателя.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '[
            {
              "quantity": 12,
              "price": 300.0,
              "vat": 0,
              "assortment": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                  "type": "variant",
                  "mediaType": "application/json"
                }
              },
              "reserve": 11
            },
            {
              "quantity": 3,
              "price": 1000.0,
              "discount": 0,
              "vat": 10,
              "assortment": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/7a6f697f-3c64-11e6-8a84-bae500000006",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "reserve": 1
            },
            {
              "quantity": 404,
              "price": 454.0,
              "discount": 200,
              "vat": 21,
              "assortment": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a83c422-3c64-11e6-8a84-bae500000012",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                  "type": "variant",
                  "mediaType": "application/json"
                }
              },
              "reserve": 216
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка созданных позиций отдельного Заказа покупателя.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/f389488d-3f71-11e6-8a84-bae50000005f",
      "type": "customerorderposition",
      "mediaType": "application/json"
    },
    "id": "f389488d-3f71-11e6-8a84-bae50000005f",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 12,
    "price": 300.0,
    "discount": 0,
    "vat": 0,
    "vatEnabled": false,
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
      }
    },
    "shipped": 0,
    "reserve": 11
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/f389521b-3f71-11e6-8a84-bae500000060",
      "type": "customerorderposition",
      "mediaType": "application/json"
    },
    "id": "f389521b-3f71-11e6-8a84-bae500000060",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 3,
    "price": 1000.0,
    "discount": 0,
    "vat": 10,
    "vatEnabled": true,
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/7a6f697f-3c64-11e6-8a84-bae500000006",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
      }
    },
    "shipped": 0,
    "reserve": 1
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/f3895aa1-3f71-11e6-8a84-bae500000061",
      "type": "customerorderposition",
      "mediaType": "application/json"
    },
    "id": "f3895aa1-3f71-11e6-8a84-bae500000061",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 404,
    "price": 454.0,
    "discount": 200,
    "vat": 21,
    "vatEnabled": true,
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a83c422-3c64-11e6-8a84-bae500000012",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=392c045c-2842-11e9-ac12-000a00000002"
      }
    },
    "shipped": 0,
    "reserve": 216
  }
]
```

### Изменить позицию 
Запрос на обновление отдельной позиции Заказа. Для обновления позиции нет каких-либо
обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

| Параметр       | Описание                                                                                          |
| :------------- | :------------------------------------------------------------------------------------------------ |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа покупателя.         |
| **positionID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции Заказа покупателя. |
 
> Пример запроса на обновление отдельной позиции в Заказе покупателя.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "quantity": 111,
            "price": 26332700.0,
            "discount": 0,
            "vat": 18,
            "assortment": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a",
                "type": "product",
                "mediaType": "application/json"
              }
            },
            "reserve": 13
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции Заказа покупателя.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
    "type": "customerorderposition",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "quantity": 111,
  "price": 26332700.0,
  "discount": 0,
  "vat": 18,
  "vatEnabled": true,
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=392c045c-2842-11e9-ac12-000a00000002"
    }
  },
  "reserve": 13
}
```

### Удалить позицию

**Параметры**

| Параметр       | Описание                                                                                          |
| :------------- | :------------------------------------------------------------------------------------------------ |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа покупателя.         |
| **positionID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции Заказа покупателя. |
 
> Запрос на удаление отдельной позиции Заказа с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление позиции Заказа.

### Массовое удаление позиций

**Параметры**

| Параметр       | Описание                                                                                 |
| :------------- |:-----------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 3e1c03bb-684f-11ee-ac12-000c000000b0* id Заказа покупателя.|

> Запрос на массовое удаление позиций Заказа покупателя.

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/3e1c03bb-684f-11ee-ac12-000c000000b0/positions/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/3e1c03bb-684f-11ee-ac12-000c000000b0/positions/7fce2da5-684d-11ee-ac12-000c000000a2",
            "type": "customerorderposition",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/3e1c03bb-684f-11ee-ac12-000c000000b0/positions/7fce37a5-684d-11ee-ac12-000c000000a3",
            "type": "customerorderposition",
            "mediaType": "application/json"
          }
        }
      ]'  
```

> Response 200 (application/json)
Успешное удаление позиций Заказа покупателя. 
