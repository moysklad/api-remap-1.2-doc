## Точка продаж
### Точки продаж 
Средствами JSON API можно создавать и обновлять сведения о Точках продаж, запрашивать списки Точек продаж и сведения по отдельным Точкам продаж. 
Также можно получить доступ к специальному ресурсу для управления кассирами точки продаж. Кодом сущности для точки продаж в составе JSON API является
 ключевое слово **retailstore**. Больше о точках продаж и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки
  по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203325423-%D0%A0%D0%BE%D0%B7%D0%BD%D0%B8%D1%86%D0%B0) в разделе "Создание точки продаж
   в основном интерфейсе".
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать
 по [ссылке](../#mojsklad-json-api-obschie-swedeniq-kontextnyj-poisk). Поиск с параметром `search` отличается от других тем, что поиск не префиксный, без токенизации и
  идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов точек продаж на соответствие поисковой строке будет осуществлен по следующим полям:

+ по наименованию Точки продаж **name**
+ по адресу Точки продаж **address**

#### Атрибуты сущности

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**meta**                |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Точки продаж|---|да
|**id**                  |UUID|ID Точки продаж|Только для чтения|да
|**accountId**           |UUID| ID учетной записи|Только для чтения|да
|**owner**               |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Владелец (Сотрудник)|---|да
|**shared**              |Boolean|Общий доступ|---|да
|**group**               |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Отдел сотрудника|---|да
|**updated**             |DateTime|Момент последнего обновления Точки продаж|Только для чтения|да
|**name**                |String(255)|Наименование Точки продаж|Необходимое при создании|да
|**description**         |String(4096)|Комментарий к Точке продаж|---|нет
|**externalCode**        |String(255)|Внешний код Точки продаж|Только для чтения| да
|**archived**            |Boolean|Добавлена ли Точка продаж в архив|---| да
|**address**             |String(255)| Адрес Точки продаж|---|нет
|**addressFull**         |Object|Адрес с детализацией по отдельным полям. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-attributy-suschnosti-status-attributy-suschnosti-adres)|---|нет
|**controlShippingStock**|Boolean|Контроль остатков. Не может быть `true`, если `AllowCreateProducts` имеет значение `true`|---|да
|**onlyInStock**         |Boolean|Выгружать только товары в наличии. Доступно только при активном контроле остатков. Влияет только на выгрузку остатков в POS API|---|да
|**active**              |Boolean|Состояние точки продаж (Включена/Отключена)|---| да
|**controlCashierChoice**|Boolean|Выбор продавца|---| да
|**discountEnable**      |Boolean|Разрешить скидки|---| да
|**discountMaxPercent**  |Int|Максимальная скидка (в процентах)|---| нет
|**priceType**           |Object|Тип цен, с которыми будут продаваться товары в рознице|Необходимое при создании| да
|**cashiers**            |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Кассиров|---| да
|**organization**        |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Юрлица|Необходимое при создании| да
|**store**               |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Склада|Необходимое при создании| да
|**acquire**             |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Банка-эквайера|---| да
|**bankPercent**         |Int|Комиссия банка-эквайера (в процентах)|---| нет
|**issueOrders**         |Boolean|Выдача заказов|---| да
|**sellReserves**        |Boolean|Учет резервов|---| да
|**lastOperationNames**  |Array(Object)| Последние операции. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-poslednie-operacii) |Только для чтения|да
| **ofdEnabled**         |Boolean| Отправлять электронный чек через ОФД |Только для чтения|да
|**priorityOfdSend**     |Enum| Приоритет отправки электронного чека. Активен только, когда отправка электронных чеков через ОФД включена. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-prioritet-otprawki-alektronnogo-cheka)|---|да|
| **allowCustomPrice**   |Boolean|Разрешить продажу по свободной цене|Только для чтения|да
| **authTokenAttached**  |Boolean|Создан ли токен для точки продаж|Только для чтения|да
|**orderToState**        |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные статуса, который проставится заказу после проведения продажи на его основании (если указано)|---| нет
|**customerOrderStates** |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные статусов, в которых выгружаются заказы в точку продаж (если указано)|---| нет
|**environment**         |Object|Информация об окружении. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-okruzhenie)|Только для чтения| да
|**state**               |Object|Информация статусе точки продаж. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-attributy-suschnosti-status)|Только для чтения| нет
|**defaultTaxSystem**    |Enum| Код системы налогообложения по умолчанию. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-kod-sistemy-nalogooblozheniq-po-umolchaniu)|---|да|
|**orderTaxSystem**      |Enum| Код системы налогообложения для заказов. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-kod-sistemy-nalogooblozheniq-dlq-zakazow)|---|да|
|**demandPrefix**        |String(255)|Префикс номера продаж|---| нет
|**allowSellTobaccoWithoutMRC** |Boolean|Разрешить продавать табачную продукцию не по МРЦ|---|да
|**allowCreateProducts** |Boolean|Контроль остатков. Не может быть `true`, если `AllowCreateProducts` имеет значение `true`|---|да
|**productFolders**      |Array([Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye))|Коллекция Метаданных групп товаров, из которых можно выгружать товары|---| нет
|**createAgentsTags**    |Array([Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye))|Коллекция групп покупателей, представленных в формате строк. Определяет группы, в которые добавляются новые покупатели. Значения `null` игнорируются|---| нет
|**filterAgentsTags**    |Array([Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye))|Коллекция групп покупателей, представленных в формате строк. Определяет группы, из которых выгружаются покупатели. Значения `null` игнорируются|---| нет
|**printAlways**         |Boolean|Всегда печатать кассовые чеки|---| да
|**receiptTemplate**     |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные шаблона печати кассовых чеков|---| нет
|**createPaymentInOnRetailShiftClosing**|Boolean| Создавать входящий платеж при закрытии смены|---| да
|**createCashInOnRetailShiftClosing**|Boolean| Создавать ПКО при закрытии смены|---| да
|**returnFromClosedShiftEnabled**|Boolean|Разрешить возвраты в закрытых сменах|---| да
|**enableReturnsWithNoReason**|Boolean|Разрешить возвраты без основания|---| да
|**createOrderWithState**     |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные статуса, который будет указан при создании заказа|---| нет
|**reservePrepaidGoods**|Boolean|Резервировать товары, за которые внесена предоплата|---| да
|**fiscalType**     |Enum| Тип формирования чеков. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-tip-formirowaniq-chekow)|---|да|
 
##### Код системы налогообложения по умолчанию

| Название               | Описание  |
| ------------------------------ |:---------------------------|
|**GENERAL_TAX_SYSTEM** | ОСН
|**SIMPLIFIED_TAX_SYSTEM_INCOME** | УСН. Доход
|**SIMPLIFIED_TAX_SYSTEM_INCOME_OUTCOME** | УСН. Доход-Расход
|**UNIFIED_AGRICULTURAL_TAX** | ЕСХН
|**PRESUMPTIVE_TAX_SYSTEM** | ЕНВД
|**PATENT_BASED** | Патент
   
##### Код системы налогообложения для заказов
 
| Название               | Описание  |
| ------------------------------ |:---------------------------|
|**GENERAL_TAX_SYSTEM** | ОСН
|**SIMPLIFIED_TAX_SYSTEM_INCOME** | УСН. Доход
|**SIMPLIFIED_TAX_SYSTEM_INCOME_OUTCOME** | УСН. Доход-Расход
|**UNIFIED_AGRICULTURAL_TAX** | ЕСХН
|**PRESUMPTIVE_TAX_SYSTEM** | ЕНВД
|**PATENT_BASED** | Патент
   
  
##### Тип формирования чеков  
  
| Название               | Описание  |
| ------------------------------ |:---------------------------|
| **STANDARD** | Стандартное
| **MASTER** | Стандартное с обработкой облачных операций
| **CLOUD** | Облачное  
 
##### Приоритет отправки электронного чека

| Название               | Описание  |
| ------------------------------ |:---------------------------|
|**phone** | Приоритет отправки на телефон
|**email** | Приоритет отправки на e-mail
| **none** | Отсутствие отправки чека

##### Окружение
| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**device**          |String(255)|Информация об устройстве|---|нет
|**os**              |String(255)|Информация об операционной системе|---|нет
|**software**        |Object|Информация о ПО. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-okruzhenie-attributy-suschnosti-po)|---|нет
|**chequePrinter**   |Object|Данные о ККТ. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-okruzhenie-attributy-suschnosti-kkt)|---|нет
|**paymentTerminal** |String(255)|Информация о платежном терминале|---|нет

###### Аттрибуты сущности ПО

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
| **name**          |String(255)|Наименование ПО|Необходимое при создании|да
| **vendor**        |String(255)|Производитель|---|нет
| **version**       |String(255)|Версия ПО|---|нет

###### Аттрибуты сущности ККТ

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
| **vendor**        |String(255)|Производитель|---|нет
| **name**          |String(255)|Наименование ПО|Необходимое при создании|да
| **serial**         |String(255)|Серийный номер|нет
|**fiscalDataVersion**       |String(255)|Формат фискальных данных|---|нет
|**driver**  |Object|Информация об используемом драйвере. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-okruzhenie-attributy-suschnosti-drajwer)|---|нет
|**fiscalMemory**  |Object|Информация о фискальном накопителе. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-okruzhenie-attributy-suschnosti-fiskal-nyj-nakopitel)|---|нет
|**firmwareVersion**       |String(255)|Версия прошивки ККТ|---|нет

###### Аттрибуты сущности Драйвер

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
| **name**          |String(255)|Наименование драйвера|---|нет
| **version**       |String(255)|Версия драйвера|---|нет

###### Аттрибуты сущности Фискальный накопитель

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**fiscalDataVersion**|String(255)| Версия фискальной памяти|---|нет
|**fiscalValidityDate**|DateTime| Версия фискальной памяти|---|нет

##### Аттрибуты сущности Статус

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**sync** |Object| Состояние синхронизации. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-attributy-suschnosti-status-attributy-suschnosti-sinhronizaciq)|---|нет
|**lastCheckMoment** |DateTime| Дата и время последней синхронизации|---|нет
|**fiscalMemory**  |Object|Информация о фискальном накопителе. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-attributy-suschnosti-status-attributy-suschnosti-fiskal-naq-pamqt)|---|нет
|**paymentTerminal** |Object| Информация о платежном терминале. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-attributy-suschnosti-status-attributy-suschnosti-platezhnyj-terminal)| `Устаревшее`|нет

###### Аттрибуты сущности Синхронизация

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**message** |String(255)| Состояние синхронизации|---|нет
|**lastAttempMoment**|DateTime| Дата последней сихронизации (не обязательно успешной)|Необходимое при создании|нет

###### Аттрибуты сущности Фискальная Память

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**error** |Object| Информация об ошибке ФН. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-attributy-suschnosti-status-attributy-suschnosti-oshibka)|---|нет
|**notSendDocCount**|Int| Количество неотправленных документов в ОФД|---|нет

###### Аттрибуты сущности Ошибка

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**сode** |Int| Код ошибки ФН|---|да
|**message** |String(255)| Описание ошибки|---|да

###### Аттрибуты сущности Платежный Терминал
| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**acquiringType**|String(255)| Информация о типе эквайера (например: inpas/payme)|---|нет

###### Аттрибуты сущности Адрес

| Название  | Тип | Описание                    | Свойство поля в запросе | Обязательное при ответе|
| --------- |:----|:----------------------------|:---------------|:-----------------------|
|**postalCode**      |String(6)|Почтовый индекс|---|нет
|**country**      |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные страны|---|нет
|**region**      |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные региона|---|нет
|**city**      |String(255)|Город|---|нет
|**street**      |String(255)|Улица|---|нет
|**house**      |String(30)|Дом|---|да
|**apartment**      |String(30)|Квартира|---|нет
|**addInfo**      |String(255)|Другое|---|нет
|**comment**      |String(255)|Комментарий|---|нет

Строка адреса является конкатенацией полей структурированного адреса в следующем порядке: postalCode -> country -> region -> city -> street -> house -> apartment -> addInfo, используя запятую в качестве разделителя.
При передаче в МойСклад сущностей с адресом используйте либо строковый адрес, либо структурированный.
При передаче обоих адресов строковый будет игнорирован.
При передаче только строкового он будет отражаться как в строковом поле так и в addInfo структурированного адреса.


##### Последние операции
Поле **lastOperationNames** представляет собой массив объектов со следующей структурой:

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**entity** |String(255) |Ключевое слово, обозначающее тип последней операции|Только для чтения|нет
|**name** |String(255)| Наименование (номер) последней операции|Только для чтения|нет

Представляет собой краткий список последних операций на данной точке продаж. Если на данной точке не созданы документы Продажа/Внесение/Выплата/Возврат/Смена, то в ответе данные документы будут с номерами по умолчанию – 00001.

##### Кассиры
Сущность кассир представляет собой объект, содержащий ссылки на [Сотрудника](../dictionaries/#suschnosti-sotrudnik), назначенного кассиром,
и [Точку продаж](../dictionaries/#suschnosti-tochka-prodazh), к которой он привязан.
Подробнее о сущности Кассира можно посмотреть в разделе [Кассиры](../dictionaries/#suschnosti-kassir)

###### Кассир

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**meta**                |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Кассира|---|да
|**id**                 |UUID|ID Кассира|Только для чтения|да
|**accountId**          |UUID| ID учетной записи Кассира|Только для чтения|да
|**employee**           |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные сотрудника, которого представляет собой кассир|Только для чтения|да
|**retailStore**        |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные точки продаж, к которой прикреплен кассир|Только для чтения|да


### Получить точки продаж 
Запрос всех Розничных точек продаж данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название  | Тип | Описание                    |
| --------- |:----|:----------------------------|
|**meta** |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные о выдаче,
|**context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.
|**rows** |Array(Object)|Массив JSON объектов, представляющих Точки продаж.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|**limit** |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|**offset** |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить точки продаж

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retailstore"
  -H "Authorization: Basic <Credentials>"
```
 
> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Розничных точек продаж.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
    "type": "retailstore",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/2b5eb22f-139e-11e6-9464-e4de00000073",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
        "type": "retailstore",
        "mediaType": "application/json"
      },
      "id": "2b5eb22f-139e-11e6-9464-e4de00000073",
      "accountId": "305f25aa-137a-11e6-9464-e4de00000001",
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
      "updated": "2016-05-06 18:21:13",
      "name": "Точка2",
      "description": "вторая точка",
      "externalCode": "Et9M3cprgDiJPi7llDOhX0",
      "address": "125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
      "addressFull": {
        "postalCode": "125009",
        "country": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
            "type": "country",
            "mediaType": "application/json"
          }
        },
        "region": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
            "type": "region",
            "mediaType": "application/json"
          }
        },
        "city": "Москва",
        "street": "ул Тверская",
        "house": "1",
        "apartment": "123",
        "addInfo": "addinfo",
        "comment": "some words about address"
      },
      "controlShippingStock": false,
      "active": true,
      "controlCashierChoice": false,
      "discountEnable": true,
      "discountMaxPercent": 17,
      "priceType": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
        "name": "Цена продажи",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
      },
      "authTokenAttached": false,
      "cashiers": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/2b5eb22f-139e-11e6-9464-e4de00000073/cashiers",
          "type": "cashier",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/30f01af0-137a-11e6-9464-e4de0000004e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/30fe30a0-137a-11e6-9464-e4de00000050",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "acquire" : {
        "meta" : {
          "href" : "https://online.moysklad.ru/api/remap/1.2/entity/organization/30fe30a0-137a-11e6-9464-e4de00000051",
          "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type" : "organization",
          "mediaType" : "application/json"
        }
      },
      "bankPercent" : 88.0,
      "issueOrders": false,
      "sellReserves": false,
      "lastOperationNames": [
        {
          "entity": "retaildemand",
          "name": "00002"
        }
      ],
      "environment": {
        "device": "Some device name",
        "os": "Linux",
        "software": {
          "name": "Касса МойСклад",
          "vendor": "МойСклад",
          "version": "2.2"
        },
        "chequePrinter": {
          "vendor": "АТОЛ",
          "name": "30Ф",
          "serial": "123456",
          "fiscalDataVersion": "1.0",
          "driver": {
            "name": "АТОЛ (бета)",
            "version": "9.1"
          },
          "fiscalMemory": {
            "fiscalDataVersion": "1.0",
            "fiscalValidityDate": "2019-09-06 21:41:00"
          },
          "firmwareVersion": "669"
        },
        "paymentTerminal": {
          "acquiringType": "payme"
        }
      },
      "state": {
        "sync": {
          "message": "Ошибка синхронизации, необходимо войти повторно",
          "lastAttempMoment": "2016-09-06 21:41:00"
        },
        "lastCheckMoment": "2018-02-05 15:58:24",
        "fiscalMemory": {
          "error": {
            "code": "1003",
            "message": "Критическая ошибка"
          },
          "notSendDocCount": 25,
          "notSendFirstDocMoment": "2016-09-06 21:41:00"
        },
        "paymentTerminal": {
          "acquiringType": "payme"
        }
      },
      "ofdEnabled" : true,
      "priorityOfdSend" : "email",
      "allowCustomPrice" : true,
      "allowSellTobaccoWithoutMRC" : true,
      "allowCreateProducts" : false,
      "productFolders" : {
        "meta" : {
          "href" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/2b5eb22f-139e-11e6-9464-e4de00000073/productfolders",
          "mediaType" : "application/json",
          "size" : 1,
          "limit" : 1000,
          "offset" : 0
        }
      },
      "createAgentsTags" : [ "createagentstag" ],
      "filterAgentsTags" : [ "filteragentstag" ],
      "printAlways" : true,
      "receiptTemplate" : {
        "meta" : {
          "href" : "https://online.moysklad.ru/api/remap/1.2/entity/receipttemplate/30fe30a0-137a-11e6-9464-e4de00000052",
          "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/receipttemplate/metadata",
          "type" : "receipttemplate",
          "mediaType" : "application/json"
        }
      },
      "createPaymentInOnRetailShiftClosing" : true,
      "createCashInOnRetailShiftClosing" : true,
      "returnFromClosedShiftEnabled" : true,
      "enableReturnsWithNoReason" : true,
      "createOrderWithState" : {
        "meta" : {
          "href" : "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/30fe30a0-137a-11e6-9464-e4de00000053",
          "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
          "type" : "state",
          "mediaType" : "application/json"
        }
      },
      "reservePrepaidGoods" : true,
      "defaultTaxSystem": "GENERAL_TAX_SYSTEM",
      "orderTaxSystem": "GENERAL_TAX_SYSTEM",
      "fiscalType": "STANDARD"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/31b6349e-137a-11e6-9464-e4de0000005d",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
        "type": "retailstore",
        "mediaType": "application/json"
      },
      "id": "31b6349e-137a-11e6-9464-e4de0000005d",
      "accountId": "305f25aa-137a-11e6-9464-e4de00000001",
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
      "updated": "2016-05-06 18:09:54",
      "name": "Точка продаж",
      "externalCode": "AEhB1gX7inNaXzAGSbDeh0",
      "address": "125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
      "addressFull": {
        "postalCode": "125009",
        "country": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
            "type": "country",
            "mediaType": "application/json"
          }
        },
        "region": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
            "type": "region",
            "mediaType": "application/json"
          }
        },
        "city": "Москва",
        "street": "ул Тверская",
        "house": "1",
        "apartment": "123",
        "addInfo": "addinfo",
        "comment": "some words about address"
      },
      "controlShippingStock": true,
      "onlyInStock": false,
      "active": true,
      "controlCashierChoice": false,
      "discountEnable": false,
      "priceType": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
        "name": "Цена продажи",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
      },
      "authTokenAttached": false,
      "cashiers": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/31b6349e-137a-11e6-9464-e4de0000005d/cashiers",
          "type": "cashier",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/30f01af0-137a-11e6-9464-e4de0000004e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/30fe30a0-137a-11e6-9464-e4de00000050",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "acquire" : {
         "meta" : {
           "href" : "https://online.moysklad.ru/api/remap/1.2/entity/organization/30fe30a0-137a-11e6-9464-e4de00000052",
           "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
           "type" : "organization",
           "mediaType" : "application/json"
         }
       },
      "bankPercent" : 12.0,      
      "issueOrders": false,
      "sellReserves": false,
      "lastOperationNames": [
        {
          "entity": "retaildemand",
          "name": "00002"
        }
      ],
      "environment": {
        "device": "Some device name",
        "os": "Linux",
        "software": {
          "name": "Касса МойСклад",
          "vendor": "МойСклад",
          "version": "2.2"
        },
        "chequePrinter": {
          "vendor": "АТОЛ",
          "name": "30Ф",
          "serial": "123456",
          "fiscalDataVersion": "1.0",
          "driver": {
            "name": "АТОЛ (бета)",
            "version": "9.1"
          },
          "fiscalMemory": {
            "fiscalDataVersion": "1.0",
            "fiscalValidityDate": "2019-09-06 21:41:00"
          },
          "firmwareVersion": "669"
        },
        "paymentTerminal": {
          "acquiringType": "payme"
        }
      },
      "state": {
        "sync": {
          "message": "Ошибка синхронизации, необходимо войти повторно",
          "lastAttempMoment": "2016-09-06 21:41:00"
        },
        "lastCheckMoment": "2018-02-05 15:58:24",
        "fiscalMemory": {
          "error": {
            "code": "1003",
            "message": "Критическая ошибка"
          },
          "notSendDocCount": 25,
          "notSendFirstDocMoment": "2016-09-06 21:41:00"
        },
        "paymentTerminal": {
          "acquiringType": "payme"
        }
      },
      "ofdEnabled" : true,
      "priorityOfdSend" : "email",
      "allowCustomPrice" : true,
      "allowSellTobaccoWithoutMRC" : true,
      "allowCreateProducts" : false,
      "productFolders" : {
        "meta" : {
          "href" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/2b5eb22f-139e-11e6-9464-e4de00000073/productfolders",
          "mediaType" : "application/json",
          "size" : 1,
          "limit" : 1000,
          "offset" : 0
        }
      },
      "createAgentsTags" : [ "createagentstag" ],
      "filterAgentsTags" : [ "filteragentstag" ],
      "printAlways" : true,
      "receiptTemplate" : {
        "meta" : {
          "href" : "https://online.moysklad.ru/api/remap/1.2/entity/receipttemplate/2b5eb22f-139e-11e6-9464-e4de00000074",
          "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/receipttemplate/metadata",
          "type" : "receipttemplate",
          "mediaType" : "application/json"
        }
      },
      "createPaymentInOnRetailShiftClosing" : true,
      "createCashInOnRetailShiftClosing" : true,
      "returnFromClosedShiftEnabled" : true,
      "enableReturnsWithNoReason" : true,
      "createOrderWithState" : {
        "meta" : {
          "href" : "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/2b5eb22f-139e-11e6-9464-e4de00000075",
          "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
          "type" : "state",
          "mediaType" : "application/json"
        }
      },
      "reservePrepaidGoods" : true,
      "fiscalType": "MASTER"  
    }
  ]
}
```

### Создать точку продаж


### Описание

Точка продаж создается на основе переданного объекта JSON,
который содержит представление новой Точки продаж.
Результат - JSON представление созданной Точки продаж. Для создания новой Точки продаж
необходимо и достаточно указать в переданном объекте непустые поля `name`, `organization`, `store`, `priceType`.

Если не передать поле `active` при создании, то если позволяет тарифный план, точка продаж создается включенной, иначе - выключенной.

При создании Точки продаж нельзя одновременно указывать значение `true` для `allowCreateProducts` и `controlShippingStock`.

> Пример наиболее полного по количеству полей запроса.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/retailstore"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
              "name" : "retailStoreTest",
              "archived" : false,
              "address": "index, country, region, city, street, house, flat, other",
              "controlShippingStock" : true,
              "onlyInStock" : true,
              "active" : true,
              "controlCashierChoice" : true,
              "discountEnable" : true,
              "discountMaxPercent" : 10.0,
              "priceType" : {
                "meta" : {
                  "href" : "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/30fe66fd-137a-11e6-9464-e4de00000050",
                  "type" : "pricetype",
                  "mediaType" : "application/json"
                }
              },
              "authTokenAttached" : false,
              "cashiers" : [{
                "meta" : {
                  "href" : "https://online.moysklad.ru/api/remap/1.2/entity/employee/30fe66fd-137a-11e6-9464-e4de00000051",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                  "type" : "employee",
                  "mediaType" : "application/json"
                }
              }],
              "organization" : {
                "meta" : {
                  "href" : "https://online.moysklad.ru/api/remap/1.2/entity/organization/30fe66fd-137a-11e6-9464-e4de00000052",
                  "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type" : "organization",
                  "mediaType" : "application/json"
                }
              },
              "store" : {
                "meta" : {
                  "href" : "https://online.moysklad.ru/api/remap/1.2/entity/store/30fe66fd-137a-11e6-9464-e4de00000053",
                  "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type" : "store",
                  "mediaType" : "application/json"
                }
              },
              "orderToState" : {
                "meta" : {
                  "href" : "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/30fe66fd-137a-11e6-9464-e4de00000054",
                  "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
                  "type" : "state",
                  "mediaType" : "application/json"
                }
              },
              "customerOrderStates" : [ {
                "meta" : {
                  "href" : "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/30fe66fd-137a-11e6-9464-e4de00000055",
                  "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
                  "type" : "state",
                  "mediaType" : "application/json"
                }
              } ],
              "issueOrders" : true,
              "sellReserves" : true,
              "allowCustomPrice" : true,
              "allowSellTobaccoWithoutMRC" : true,
              "allowCreateProducts" : false,
              "productFolders" : [{
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/30fe66fd-137a-11e6-9464-e4de00000056",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata",
                  "type": "productfolder",
                  "mediaType": "application/json"
                }
              }],
              "createAgentsTags" : [ "createagentstag" ],
              "filterAgentsTags" : [ "filteragentstag" ],
              "printAlways" : true,
              "bankPercent" : 20.0,
              "createPaymentInOnRetailShiftClosing" : true,
              "createCashInOnRetailShiftClosing" : true,
              "returnFromClosedShiftEnabled" : true,
              "enableReturnsWithNoReason" : true,
              "createOrderWithState" : {
                "meta" : {
                  "href" : "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/30fe66fd-137a-11e6-9464-e4de00000058",
                  "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
                  "type" : "state",
                  "mediaType" : "application/json"
                }
              },
              "reservePrepaidGoods" : true,
              "fiscalType": "STANDARD"
          }'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Точки продаж.

```json
{
  "meta" : {
    "href" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/966b1795-bf2c-11e9-ee62-204c0000004c",
    "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
    "type" : "retailstore",
    "mediaType" : "application/json",
    "uuidHref" : "https://online.moysklad.ru/app/#retailstore/edit?id=966b1795-bf2c-11e9-ee62-204c0000004c"
  },
  "id" : "966b1795-bf2c-11e9-ee62-204c0000004c",
  "accountId" : "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
  "owner" : {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/entity/employee/872559f1-cbf3-11e1-9eb9-889ffa6f49fd",
      "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type" : "employee",
      "mediaType" : "application/json",
      "uuidHref" : "https://online.moysklad.ru/app/#employee/edit?id=872559f1-cbf3-11e1-9eb9-889ffa6f49fd"
    }
  },
  "shared" : false,
  "group" : {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/entity/group/f7eb1e3b-fd2a-42f7-b799-b3d1e6b3bf43",
      "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type" : "group",
      "mediaType" : "application/json"
    }
  },
  "updated" : "2019-08-15 10:16:23.300",
  "name" : "retailStoreTest",
  "externalCode" : "3FdprAuZj2UY1JIW0IztN1",
  "archived" : false,
  "address" : "index, country, region, city, street, house, flat, other",
  "addressFull" : {
    "addInfo" : "index, country, region, city, street, house, flat, other"
  },
  "controlShippingStock" : true,
  "onlyInStock" : true,
  "active" : true,
  "controlCashierChoice" : true,
  "discountEnable" : true,
  "discountMaxPercent" : 10.0,
  "priceType" : {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/30fe66fd-137a-11e6-9464-e4de00000050",
      "type" : "pricetype",
      "mediaType" : "application/json"
    },
    "id" : "30fe66fd-137a-11e6-9464-e4de00000050",
    "name" : "Цена продажи",
    "externalCode" : "cbcf493b-55bc-11d9-848a-00112f43529a"
  },
  "authTokenAttached" : false,
  "cashiers" : {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/966b1795-bf2c-11e9-ee62-204c0000004c/cashiers",
      "type" : "cashier",
      "mediaType" : "application/json",
      "size" : 1,
      "limit" : 1000,
      "offset" : 0
    }
  },
  "organization" : {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/entity/organization/30fe66fd-137a-11e6-9464-e4de00000051",
      "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type" : "organization",
      "mediaType" : "application/json",
      "uuidHref" : "https://online.moysklad.ru/app/#mycompany/edit?id=30fe66fd-137a-11e6-9464-e4de00000051"
    }
  },
  "store" : {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/entity/store/30fe66fd-137a-11e6-9464-e4de00000052",
      "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type" : "store",
      "mediaType" : "application/json",
      "uuidHref" : "https://online.moysklad.ru/app/#warehouse/edit?id=30fe66fd-137a-11e6-9464-e4de00000052"
    }
  },
  "acquire" : {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/entity/organization/30fe30a0-137a-11e6-9464-e4de00000052",
      "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type" : "organization",
      "mediaType" : "application/json"
    }
  },
  "bankPercent" : 20.0,
  "orderToState" : {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/30fe66fd-137a-11e6-9464-e4de00000053",
      "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
      "type" : "state",
      "mediaType" : "application/json"
    }
  },
  "customerOrderStates" : [ {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/30fe66fd-137a-11e6-9464-e4de00000054",
      "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
      "type" : "state",
      "mediaType" : "application/json"
    }
  } ],
  "issueOrders" : true,
  "sellReserves" : true,
  "lastOperationNames" : [ {
    "entity" : "retaildemand",
    "name" : "00001"
  }, {
    "entity" : "retaildrawercashin",
    "name" : "00001"
  }, {
    "entity" : "retaildrawercashout",
    "name" : "00001"
  }, {
    "entity" : "retailsalesreturn",
    "name" : "00001"
  }, {
    "entity" : "retailshift",
    "name" : "00001"
  } ],
  "ofdEnabled" : true,
  "priorityOfdSend" : "email",
  "allowCustomPrice" : true,
  "allowSellTobaccoWithoutMRC" : true,
  "allowCreateProducts" : false,
  "productFolders" : {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/966b1795-bf2c-11e9-ee62-204c0000004c/productFolders",
      "mediaType" : "application/json",
      "size" : 1,
      "limit" : 1000,
      "offset" : 0
    }
  },
  "createAgentsTags" : [ "createagentstag" ],
  "filterAgentsTags" : [ "filteragentstag" ],
  "printAlways" : true,
  "createPaymentInOnRetailShiftClosing" : true,
  "createCashInOnRetailShiftClosing" : true,
  "returnFromClosedShiftEnabled" : true,
  "enableReturnsWithNoReason" : true,
  "createOrderWithState" : {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/30fe66fd-137a-11e6-9464-e4de00000057",
      "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
      "type" : "state",
      "mediaType" : "application/json"
    }
  },
  "reservePrepaidGoods" : true
}
```

> Пример запроса с минимальным необходимым количеством полей

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/retailstore"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            {
              "name" : "retailstoretest",
              "organization" : {
                  "meta" : {
                  "href" : "https://online.moysklad.ru/api/remap/1.2/entity/organization/30fe66fd-137a-11e6-9464-e4de00000050",
                  "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type" : "organization",
                  "mediaType" : "application/json"
                }
              },
              "store" : {
                "meta" : {
                  "href" : "https://online.moysklad.ru/api/remap/1.2/entity/store/30fe66fd-137a-11e6-9464-e4de00000051",
                  "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type" : "store",
                  "mediaType" : "application/json"
                }
              },
              "priceType" : {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/30fe66fd-137a-11e6-9464-e4de00000052",
                  "type": "pricetype",
                  "mediaType": "application/json"
                }
              }
            }
          }'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Точки продаж.

```json
{
  "meta" : {
    "href" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000041",
    "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
    "type" : "retailstore",
    "mediaType" : "application/json",
    "uuidHref" : "https://online.moysklad.ru/app/#retailstore/edit?id=425999e6-bf2f-11e9-ee62-204c00000041"
  },
  "id" : "425999e6-bf2f-11e9-ee62-204c00000041",
  "accountId" : "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
  "owner" : {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/entity/employee/872559f1-cbf3-11e1-9eb9-889ffa6f49fd",
      "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type" : "employee",
      "mediaType" : "application/json",
      "uuidHref" : "https://online.moysklad.ru/app/#employee/edit?id=872559f1-cbf3-11e1-9eb9-889ffa6f49fd"
    }
  },
  "shared" : false,
  "group" : {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/entity/group/f7eb1e3b-fd2a-42f7-b799-b3d1e6b3bf43",
      "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type" : "group",
      "mediaType" : "application/json"
    }
  },
  "updated" : "2019-08-15 10:35:30.773",
  "name" : "retailstoretest",
  "externalCode" : "Z-O1sylEisnNhP6mm-Pq10",
  "archived" : false,
  "controlShippingStock" : false,
  "active" : true,
  "controlCashierChoice" : false,
  "discountEnable" : false,
  "priceType" : {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/30fe66fd-137a-11e6-9464-e4de00000052",
      "type" : "pricetype",
      "mediaType" : "application/json"
    },
    "id" : "30fe66fd-137a-11e6-9464-e4de00000052",
    "name" : "Цена продажи",
    "externalCode" : "cbcf493b-55bc-11d9-848a-00112f43529a"
  },
  "authTokenAttached" : false,
  "cashiers" : {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000041/cashiers",
      "type" : "cashier",
      "mediaType" : "application/json",
      "size" : 0,
      "limit" : 1000,
      "offset" : 0
    }
  },
  "organization" : {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/entity/organization/30fe66fd-137a-11e6-9464-e4de00000050",
      "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type" : "organization",
      "mediaType" : "application/json",
      "uuidHref" : "https://online.moysklad.ru/app/#mycompany/edit?id=30fe66fd-137a-11e6-9464-e4de00000050"
    }
  },
  "store" : {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/entity/store/30fe66fd-137a-11e6-9464-e4de00000051",
      "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type" : "store",
      "mediaType" : "application/json",
      "uuidHref" : "https://online.moysklad.ru/app/#warehouse/edit?id=30fe66fd-137a-11e6-9464-e4de00000051"
    }
  },
  "bankPercent" : 0.0,
  "issueOrders" : false,
  "sellReserves" : false,
  "lastOperationNames" : [ {
    "entity" : "retaildemand",
    "name" : "00001"
  }, {
    "entity" : "retaildrawercashin",
    "name" : "00001"
  }, {
    "entity" : "retaildrawercashout",
    "name" : "00001"
  }, {
    "entity" : "retailsalesreturn",
    "name" : "00001"
  }, {
    "entity" : "retailshift",
    "name" : "00001"
  } ],
  "ofdEnabled" : true,
  "allowCustomPrice" : false,
  "allowSellTobaccoWithoutMRC" : false,
  "allowCreateProducts" : true,
  "productFolders" : {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000041/productFolders",
      "mediaType" : "application/json",
      "size" : 0,
      "limit" : 1000,
      "offset" : 0
    }
  },
  "printAlways" : false,
  "createPaymentInOnRetailShiftClosing" : true,
  "createCashInOnRetailShiftClosing" : true,
  "returnFromClosedShiftEnabled" : false,
  "enableReturnsWithNoReason" : false,
  "reservePrepaidGoods" : false
}
```

### Массовое создание и обновление Точек продаж
[Массовое создание и обновление](#sozdanie-i-obnowlenie-neskol-kih-ob-ektow) точек продаж.
В теле запроса нужно передать массив, содержащий JSON представления точек продаж, которые вы хотите создать или обновить.
Обновляемые точки продаж должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких точек продаж

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/retailstore"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "name" : "retailstoretest",
              "active": true,
              "organization" : {
                  "meta" : {
                  "href" : "https://online.moysklad.ru/api/remap/1.2/entity/organization/30fe66fd-137a-11e6-9464-e4de00000050",
                  "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type" : "organization",
                  "mediaType" : "application/json"
                }
              },
              "store" : {
                "meta" : {
                  "href" : "https://online.moysklad.ru/api/remap/1.2/entity/store/30fe66fd-137a-11e6-9464-e4de00000051",
                  "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type" : "store",
                  "mediaType" : "application/json"
                }
              },
              "priceType" : {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/30fe66fd-137a-11e6-9464-e4de00000052",
                  "type": "pricetype",
                  "mediaType": "application/json"
                }
              }
            },{
              "meta" : {
                  "href" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000042",
                  "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
                  "type" : "retailstore",
                  "mediaType" : "application/json",
                  "uuidHref" : "https://online.moysklad.ru/app/#retailstore/edit?id=425999e6-bf2f-11e9-ee62-204c00000042
              }
            }
          ]'
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных точек продаж.

```json
[
  {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000041",
      "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
      "type" : "retailstore",
      "mediaType" : "application/json",
      "uuidHref" : "https://online.moysklad.ru/app/#retailstore/edit?id=425999e6-bf2f-11e9-ee62-204c00000041"
    },
    "id" : "425999e6-bf2f-11e9-ee62-204c00000041",
    "accountId" : "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
    "owner" : {
      "meta" : {
        "href" : "https://online.moysklad.ru/api/remap/1.2/entity/employee/872559f1-cbf3-11e1-9eb9-889ffa6f49fd",
        "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type" : "employee",
        "mediaType" : "application/json",
        "uuidHref" : "https://online.moysklad.ru/app/#employee/edit?id=872559f1-cbf3-11e1-9eb9-889ffa6f49fd"
      }
    },
    "shared" : false,
    "group" : {
      "meta" : {
        "href" : "https://online.moysklad.ru/api/remap/1.2/entity/group/f7eb1e3b-fd2a-42f7-b799-b3d1e6b3bf43",
        "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type" : "group",
        "mediaType" : "application/json"
      }
    },
    "updated" : "2019-08-15 10:35:30.773",
    "name" : "retailstoretest",
    "externalCode" : "Z-O1sylEisnNhP6mm-Pq10",
    "archived" : false,
    "controlShippingStock" : false,
    "active" : true,
    "controlCashierChoice" : false,
    "discountEnable" : false,
    "priceType" : {
      "meta" : {
        "href" : "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/30fe66fd-137a-11e6-9464-e4de00000052",
        "type" : "pricetype",
        "mediaType" : "application/json"
      },
      "id" : "30fe66fd-137a-11e6-9464-e4de00000052",
      "name" : "Цена продажи",
      "externalCode" : "cbcf493b-55bc-11d9-848a-00112f43529a"
    },
    "authTokenAttached" : false,
    "cashiers" : {
      "meta" : {
        "href" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000041/cashiers",
        "type" : "cashier",
        "mediaType" : "application/json",
        "size" : 0,
        "limit" : 1000,
        "offset" : 0
      }
    },
    "organization" : {
      "meta" : {
        "href" : "https://online.moysklad.ru/api/remap/1.2/entity/organization/30fe66fd-137a-11e6-9464-e4de00000050",
        "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type" : "organization",
        "mediaType" : "application/json",
        "uuidHref" : "https://online.moysklad.ru/app/#mycompany/edit?id=30fe66fd-137a-11e6-9464-e4de00000050"
      }
    },
    "store" : {
      "meta" : {
        "href" : "https://online.moysklad.ru/api/remap/1.2/entity/store/30fe66fd-137a-11e6-9464-e4de00000051",
        "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type" : "store",
        "mediaType" : "application/json",
        "uuidHref" : "https://online.moysklad.ru/app/#warehouse/edit?id=30fe66fd-137a-11e6-9464-e4de00000051"
      }
    },
    "bankPercent" : 0.0,
    "issueOrders" : false,
    "sellReserves" : false,
    "lastOperationNames" : [ {
      "entity" : "retaildemand",
      "name" : "00001"
    }, {
      "entity" : "retaildrawercashin",
      "name" : "00001"
    }, {
      "entity" : "retaildrawercashout",
      "name" : "00001"
    }, {
      "entity" : "retailsalesreturn",
      "name" : "00001"
    }, {
      "entity" : "retailshift",
      "name" : "00001"
    } ],
    "ofdEnabled" : true,
    "allowCustomPrice" : false,
    "allowSellTobaccoWithoutMRC" : false,
    "allowCreateProducts" : true,
    "productFolders" : {
      "meta" : {
        "href" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000041/productFolders",
        "mediaType" : "application/json",
        "size" : 0,
        "limit" : 1000,
        "offset" : 0
      }
    },
    "printAlways" : false,
    "createPaymentInOnRetailShiftClosing" : true,
    "createCashInOnRetailShiftClosing" : true,
    "returnFromClosedShiftEnabled" : false,
    "enableReturnsWithNoReason" : false,
    "reservePrepaidGoods" : false
  }
  ,{
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000042",
      "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
      "type" : "retailstore",
      "mediaType" : "application/json",
      "uuidHref" : "https://online.moysklad.ru/app/#retailstore/edit?id=425999e6-bf2f-11e9-ee62-204c00000042"
    },
    "id" : "425999e6-bf2f-11e9-ee62-204c00000042",
    "accountId" : "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
    "owner" : {
      "meta" : {
        "href" : "https://online.moysklad.ru/api/remap/1.2/entity/employee/872559f1-cbf3-11e1-9eb9-889ffa6f49fd",
        "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type" : "employee",
        "mediaType" : "application/json",
        "uuidHref" : "https://online.moysklad.ru/app/#employee/edit?id=872559f1-cbf3-11e1-9eb9-889ffa6f49fd"
      }
    },
    "shared" : false,
    "group" : {
      "meta" : {
        "href" : "https://online.moysklad.ru/api/remap/1.2/entity/group/f7eb1e3b-fd2a-42f7-b799-b3d1e6b3bf43",
        "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type" : "group",
        "mediaType" : "application/json"
      }
    },
    "updated" : "2019-08-15 10:35:30.773",
    "name" : "retailstoretest2",
    "externalCode" : "Z-O1sylEisnNhP6mm-Pq10",
    "archived" : false,
    "controlShippingStock" : true,
    "active" : true,
    "controlCashierChoice" : true,
    "discountEnable" : false,
    "priceType" : {
      "meta" : {
        "href" : "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/30fe66fd-137a-11e6-9464-e4de00000042",
        "type" : "pricetype",
        "mediaType" : "application/json"
      },
      "id" : "30fe66fd-137a-11e6-9464-e4de00000042",
      "name" : "Цена продажи",
      "externalCode" : "cbcf493b-55bc-11d9-848a-00112f43529a"
    },
    "authTokenAttached" : false,
    "cashiers" : {
      "meta" : {
        "href" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000042/cashiers",
        "type" : "cashier",
        "mediaType" : "application/json",
        "size" : 1,
        "limit" : 1000,
        "offset" : 0
      }
    },
    "organization" : {
      "meta" : {
        "href" : "https://online.moysklad.ru/api/remap/1.2/entity/organization/30fe66fd-137a-11e6-9464-e4de00000040",
        "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type" : "organization",
        "mediaType" : "application/json",
        "uuidHref" : "https://online.moysklad.ru/app/#mycompany/edit?id=30fe66fd-137a-11e6-9464-e4de00000040"
      }
    },
    "store" : {
      "meta" : {
        "href" : "https://online.moysklad.ru/api/remap/1.2/entity/store/30fe66fd-137a-11e6-9464-e4de00000041",
        "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type" : "store",
        "mediaType" : "application/json",
        "uuidHref" : "https://online.moysklad.ru/app/#warehouse/edit?id=30fe66fd-137a-11e6-9464-e4de00000041"
      }
    },
    "acquire" : {
      "meta" : {
        "href" : "https://online.moysklad.ru/api/remap/1.2/entity/organization/30fe30a0-137a-11e6-9464-e4de00000152",
        "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type" : "organization",
        "mediaType" : "application/json"
      }
    },  
    "bankPercent" : 10.0,
    "issueOrders" : true,
    "sellReserves" : true,
    "lastOperationNames" : [ {
      "entity" : "retaildemand",
      "name" : "00001"
    }, {
      "entity" : "retaildrawercashin",
      "name" : "00001"
    }, {
      "entity" : "retaildrawercashout",
      "name" : "00001"
    }, {
      "entity" : "retailsalesreturn",
      "name" : "00001"
    }, {
      "entity" : "retailshift",
      "name" : "00001"
    } ],
    "ofdEnabled" : true,
    "allowCustomPrice" : true,
    "allowSellTobaccoWithoutMRC" : true,
    "allowCreateProducts" : true,
    "productFolders" : {
      "meta" : {
        "href" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000042/productFolders",
        "mediaType" : "application/json",
        "size" : 1,
        "limit" : 1000,
        "offset" : 0
      }
    },
    "printAlways" : true,
    "createPaymentInOnRetailShiftClosing" : true,
    "createCashInOnRetailShiftClosing" : true,
    "returnFromClosedShiftEnabled" : true,
    "enableReturnsWithNoReason" : true,
    "reservePrepaidGoods" : true
  }
]
```

### Удалить точку продаж

**Параметры**

|Параметр   |Описание   | 
|---|---|
|**id** |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Точки продаж.|

> Запрос на удаление Розничной точки продаж с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Розничной точки продаж.

### Массовое удаление Точек продаж

В теле запроса нужно передать массив, содержащий JSON метаданных Точек продаж, которые вы хотите удалить.


> Запрос на массовое удаление Точек продаж. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
            "type": "retailstore",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
            "type": "retailstore",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Точек продаж.

```json
[
  {
    "info":"Сущность 'retailstore' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'retailstore' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
```

#### Точка продаж 

### Получить точку продаж

**Параметры**

|Параметр   |Описание   | 
|---|---|
|**id** |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Точки продаж.|
 
> Запрос на получение отдельной Розничной точки продаж с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление точки продаж.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/31b6349e-137a-11e6-9464-e4de0000005d",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
    "type": "retailstore",
    "mediaType": "application/json"
  },
  "id": "31b6349e-137a-11e6-9464-e4de0000005d",
  "accountId": "305f25aa-137a-11e6-9464-e4de00000001",
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
  "updated": "2016-05-06 18:09:54",
  "name": "Точка продаж",
  "externalCode": "AEhB1gX7inNaXzAGSbDeh0",
  "address": "125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
  "addressFull": {
    "postalCode": "125009",
    "country": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type": "country",
        "mediaType": "application/json"
      }
    },
    "region": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      }
    },
    "city": "Москва",
    "street": "ул Тверская",
    "house": "1",
    "apartment": "123",
    "addInfo": "addinfo",
    "comment": "some words about address"
  },
  "controlShippingStock": true,
    "onlyInStock": true,
    "active": true,
    "controlCashierChoice": false,
    "discountEnable": true,
    "discountMaxPercent": 17,
    "priceType": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
        "type": "pricetype",
        "mediaType": "application/json"
      },
      "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
      "name": "Цена продажи",
      "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
  },
  "authTokenAttached": false,
  "cashiers": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/31b6349e-137a-11e6-9464-e4de0000005d/cashiers",
      "type": "cashier",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/30f01af0-137a-11e6-9464-e4de0000004e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/30fe30a0-137a-11e6-9464-e4de00000050",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "acquire": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/30fe66fd-137a-11e6-9464-e4de00000053",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "bankPercent": 10.0,
  "issueOrders": false,
  "sellReserves": false,
  "lastOperationNames": [
    {
      "entity": "retaildemand",
      "name": "00002"
    }
  ],
  "ofdEnabled": true,
  "allowCustomPrice": false,
  "fiscalType": "CLOUD",
  "environment": {
    "device": "Some device name",
    "os": "Linux",
    "software": {
      "name": "Касса МойСклад",
      "vendor": "МойСклад",
      "version": "2.2"
    },
    "chequePrinter": {
      "vendor": "АТОЛ",
      "name": "30Ф",
      "serial": "15636313",
      "fiscalDataVersion": "1.0",
      "driver": {
        "name": "АТОЛ (бета)",
        "version": "9.1"
      },
      "fiscalMemory": {
        "fiscalDataVersion": "1.0",
        "fiscalValidityDate": "2019-09-06 21:41:00"
      },
      "firmwareVersion": "669"
    },
    "paymentTerminal": {
      "acquiringType": "payme"
    }
  },
  "state": {
    "sync": {
      "message": "Ошибка синхронизации, необходимо войти повторно",
      "lastAttempMoment": "2016-09-06 21:41:00"
    },
    "lastCheckMoment": "2018-02-05 15:58:24",
    "fiscalMemory": {
      "error": {
        "code": "1003",
        "message": "Критическая ошибка"
      },
      "notSendDocCount": 25,
      "notSendFirstDocMoment": "2016-09-06 21:41:00"
    },
    "paymentTerminal": {
      "acquiringType": "payme"
    }
  }
}
```

### Изменить Точку продаж

Запрос на обновление существующей Точки продаж.

> Пример запроса на обновление Точки продаж

```shell
curl -X PUT
  "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000041"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '{
        "name": "retailstore2"
      }'
```  

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Точки продаж.

```json
{
  "meta" : {
    "href" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000041",
    "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
    "type" : "retailstore",
    "mediaType" : "application/json",
    "uuidHref" : "https://online.moysklad.ru/app/#retailstore/edit?id=425999e6-bf2f-11e9-ee62-204c00000041"
  },
  "id" : "425999e6-bf2f-11e9-ee62-204c00000041",
  "accountId" : "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
  "owner" : {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/entity/employee/872559f1-cbf3-11e1-9eb9-889ffa6f49fd",
      "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type" : "employee",
      "mediaType" : "application/json",
      "uuidHref" : "https://online.moysklad.ru/app/#employee/edit?id=872559f1-cbf3-11e1-9eb9-889ffa6f49fd"
    }
  },
  "shared" : false,
  "group" : {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/entity/group/f7eb1e3b-fd2a-42f7-b799-b3d1e6b3bf43",
      "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type" : "group",
      "mediaType" : "application/json"
    }
  },
  "updated" : "2019-08-15 10:35:30.773",
  "name" : "retailstore2",
  "externalCode" : "Z-O1sylEisnNhP6mm-Pq10",
  "archived" : false,
  "controlShippingStock" : false,
  "active" : true,
  "controlCashierChoice" : false,
  "discountEnable" : false,
  "priceType" : {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/30fe66fd-137a-11e6-9464-e4de00000052",
      "type" : "pricetype",
      "mediaType" : "application/json"
    },
    "id" : "30fe66fd-137a-11e6-9464-e4de00000052",
    "name" : "Цена продажи",
    "externalCode" : "cbcf493b-55bc-11d9-848a-00112f43529a"
  },
  "authTokenAttached" : false,
  "cashiers" : {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000041/cashiers",
      "type" : "cashier",
      "mediaType" : "application/json",
      "size" : 0,
      "limit" : 1000,
      "offset" : 0
    }
  },
  "organization" : {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/entity/organization/30fe66fd-137a-11e6-9464-e4de00000050",
      "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type" : "organization",
      "mediaType" : "application/json",
      "uuidHref" : "https://online.moysklad.ru/app/#mycompany/edit?id=30fe66fd-137a-11e6-9464-e4de00000050"
    }
  },
  "store" : {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/entity/store/30fe66fd-137a-11e6-9464-e4de00000051",
      "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type" : "store",
      "mediaType" : "application/json",
      "uuidHref" : "https://online.moysklad.ru/app/#warehouse/edit?id=30fe66fd-137a-11e6-9464-e4de00000051"
    }
  },
  "acquire" : {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/entity/organization/30fe30a0-137a-11e6-9464-e4de00000152",
      "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type" : "organization",
      "mediaType" : "application/json"
    }
  }, 
  "bankPercent" : 0.0,
  "issueOrders" : false,
  "sellReserves" : false,
  "lastOperationNames" : [ {
    "entity" : "retaildemand",
    "name" : "00001"
  }, {
    "entity" : "retaildrawercashin",
    "name" : "00001"
  }, {
    "entity" : "retaildrawercashout",
    "name" : "00001"
  }, {
    "entity" : "retailsalesreturn",
    "name" : "00001"
  }, {
    "entity" : "retailshift",
    "name" : "00001"
  } ],
  "ofdEnabled" : true,
  "allowCustomPrice" : false,
  "allowSellTobaccoWithoutMRC" : false,
  "allowCreateProducts" : true,
  "productFolders" : {
    "meta" : {
      "href" : "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000041/productFolders",
      "mediaType" : "application/json",
      "size" : 0,
      "limit" : 1000,
      "offset" : 0
    }
  },
  "printAlways" : false,
  "createPaymentInOnRetailShiftClosing" : true,
  "createCashInOnRetailShiftClosing" : true,
  "returnFromClosedShiftEnabled" : false,
  "enableReturnsWithNoReason" : false,
  "reservePrepaidGoods" : false,
  "fiscalType": "MASTER"
}
```
