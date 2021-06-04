## Настройки пользователя
Средствами JSON API можно получать и редактировать настройки пользователя.
#### Настройки пользователя 

#### Атрибуты сущности

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|Expand|
| --------- |:----|:----------------------------|:----------------|:------------------------|:------------------------|
|**meta**               |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные настроек|&mdash;|да|нет
|**defaultCompany**     |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Организации, которая будет использоваться по умолчанию в документах|&mdash;|да|нет
|**defaultCustomerCounterparty**|[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Покупателя, который будет использоваться по умолчанию в документах раздела "Продажи"|&mdash;|да|нет
|**defaultPurchaseCounterparty**|[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Поставщика, который будет использоваться по умолчанию в документах раздела "Закупки"|&mdash;|да|нет
|**defaultProject**     |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Проекта, который будет использоваться по умолчанию в документах|&mdash;|да|нет
|**defaultPlace**       |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Склада, который будет использоваться по умолчанию в документах|&mdash;|да|нет
|**locale**             |Enum|Язык системы. Допустимые значения "ru_RU" и "en_US"|&mdash;|да|нет
|**printFormat**        |Enum|[Правила печати документов](./#suschnosti-nastrojki-pol-zowatelq-poluchit-metadannye-nastroek-kompanii-prawila-pechati-dokumentow) |&mdash;|да|нет
|**fieldsPerRow**       |Int|Количество столбцов, в которых будут располагаться дополнительные поля в документах|&mdash;|да|нет
|**defaultScreen**      |Enum|[Страница, которая открывается у пользователя при логине](./#suschnosti-nastrojki-pol-zowatelq-poluchit-metadannye-nastroek-kompanii-startowyj-akran)|&mdash;|да|нет
|**autoShowReports**    |Boolean|Строить ли отчеты автоматически при переходе на вкладку с отчетом|&mdash;|да|нет
|**mailFooter**         |Boolean|Подставляется в подпись в письмах, отправляемых из МС|&mdash;|да|нет

#### Правила печати документов
Допустимые правила печати:

| Правила печати документов           | Значение поля printFormat  |
| ----------------------------------- |:---------------------------|
| Скачать в формате PDF               | pdf                        |
| Скачать в формате Excel             | xls                        |
| Скачать в формате Open Office Calc  | ods                        |
| Предлагать выбор                    | "" (пустая строка)         |
| Открыть в браузере                  | individual                 |

#### Стартовый экран 
Допустимые значения стартового экрана:

| Стартовый экран                        | Значение поля defaultScreen |
| -------------------------------------- |:----------------------------|
| Операции с баллами                     | bonustransaction            |
| Полученные отчеты комиссионера         | commissionreportin          |
| Выданные отчеты комиссионера           | commissionreportout         |
| Ввод в оборот кодов маркировки         | enrollorder                 |
| Вывод из оборота                       | retireorder                 |
| Перемаркировка                         | remarkingorder              |
| Заказ кодов маркировки                 | crptdemand                  |
| Списание кодов маркировки              | crptcancellation            |
| Формирование упаковки                  | crptpackagecreation         |
| Изъятие из упаковки                    | crptpackageitemremoval      |
| Расформирование упаковки               | crptpackagedisaggregation   |
| Описание остатков                      | remainsorder                |
| Возврат в оборот                       | enrollreturn                |
| Задачи                                 | purpose                     |
| Очередь облачных чеков                 | fiscalevent                 |
| Учетная запись                         | account                     |
| Импорт из Excel                        | importgoods                 |
| Проверка комплектации                  | checkequipment              |
| Массовое редактирование                | bulkEdit                    |
| Характеристика                         | feature                     |
| Импорт приемки                         | importedo                   |
| Просмотр информации о КМ или ТУ        | trackingidentify            |
| Сбор заказа                            | orderassembly               |
| Импорт справочника                     | importcustom                |
| Приложения                             | apps                        |
| События обмена с Эвотор                | evotorevent                 |
| Запросы                                | evotorrequest               |
| Настройка обмена с Эвотор              | evotormapping               |
| Новости                                | feed                        |
| Уведомления                            | notifications               |
| Импорт                                 | import                      |
| Экспорт                                | export                      |
| Показатели                             | dashboard                   |
| Документы                              | operation                   |
| Корзина                                | recyclebin                  |
| Аудит                                  | audit                       |
| Заказы поставщикам                     | purchaseorder               |
| Счета поставщиков                      | invoicein                   |
| Приемки                                | supply                      |
| Возвраты поставщикам                   | purchasereturn              |
| Счета-фактуры полученные               | facturein                   |
| Управление закупками                   | purchasecontrol             |
| Заказы покупателей                     | customerorder               |
| Счета покупателям                      | invoiceout                  |
| Отгрузки                               | demand                      |
| Отчеты комиссионера                    | commissionreport            |
| Возвраты покупателей                   | salesreturn                 |
| Счета-фактуры выданные                 | factureout                  |
| Прибыльность                           | pnl                         |
| Товары на реализации                   | commissiongoods             |
| Воронка продаж                         | purchasefunnel              |
| Товары и услуги                        | good                        |
| Оприходования                          | enter                       |
| Списания                               | loss                        |
| Инвентаризации                         | inventory                   |
| Внутренние заказы                      | internalorder               |
| Перемещения                            | move                        |
| Прайс-листы                            | pricelist                   |
| Остатки                                | stockreport                 |
| Обороты                                | turnover                    |
| Сер. номера                            | serialnumbers               |
| Контрагенты                            | company                     |
| Договоры                               | contract                    |
| Звонки                                 | phonecall                   |
| Платежи                                | finance                     |
| Движение денежных средств              | cashflow                    |
| Прибыли и убытки                       | pnl3                        |
| Взаиморасчеты                          | customersbalancelist        |
| Корректировки                          | adjustment                  |
| Точки продаж                           | retailstore                 |
| Смены                                  | retailshift                 |
| Продажи                                | retaildemand                |
| Возвраты                               | retailsalesreturn           |
| Внесения                               | retaildrawercashin          |
| Выплаты                                | retaildrawercashout         |
| Предоплаты                             | prepayment                  |
| Возвраты предоплат                     | prepaymentreturn            |
| Очередь облачных чеков                 | fiscalqueue                 |
| Тех. карты                             | processingplan              |
| Заказы на производство                 | processingorder             |
| Тех. операции                          | processing                  |
| Приложения                             | embed-apps                  |
| Спецпредложения                        | specialoffers               |
| Настройки                              | companysettings             |
| Скидки                                 | discount                    |
| Сценарии                               | scripttemplate              |
| Синхронизация                          | connectorsettings           |
| Юр. лица                               | mycompany                   |
| Сотрудники                             | employee                    |
| Склады                                 | warehouse                   |
| Валюты                                 | currency                    |
| Проекты                                | project                     |
| Страны                                 | country                     |
| Единицы измерения                      | uom                         |
| Подписка                               | payments                    |
| Журнал запросов в систему лояльности   | loyaltylog                  |
| Журнал запросов в ИС МП                | crptlog                     |

### Получить Настройки пользователя 
> Запрос на получение Настроек пользователя:

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/context/usersettings"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Настроек компании:

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/context/usersettings",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/context/usersettings/metadata",
    "type": "usersettings",
    "mediaType": "application/json"
  },
  "defaultCompany": {
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
    "type": "organization",
    "mediaType": "application/json"
  },
  "defaultCustomerCounterparty": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/5f13f655-a419-11ea-ac12-000a00000073",
    "type": "counterparty",
    "mediaType": "application/json"
  },
  "defaultPurchaseCounterparty": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/5f13f655-a419-11ea-ac12-000a00000074",
    "type": "counterparty",
    "mediaType": "application/json"
  },
  "defaultProject": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/59e1cf55-a70f-11ea-ac12-000d00000001",
    "type": "project",
    "mediaType": "application/json"
  },
  "defaultPlace": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/5f13ac1b-a419-11ea-ac12-000a00000072",
    "type": "store",
    "mediaType": "application/json"
  },
  "locale": "ru_RU",
  "mailFooter": "подпись в письме",
  "fieldsPerRow": 3,
  "defaultScreen": "importcustom",
  "printFormat": "pdf",
  "autoShowReports": false
}
```

### Изменить Настройки пользователя 
Редактировать можно следующие настройки пользователя:

| Название  | Тип | Описание                    |
| --------- |:----|:----------------------------|
|**defaultCompany**     |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Организации, которая будет использоваться по умолчанию в документах
|**defaultCustomerCounterparty**|[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Покупателя, который будет использоваться по умолчанию в документах раздела "Продажи"
|**defaultPurchaseCounterparty**|[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Поставщика, который будет использоваться по умолчанию в документах раздела "Закупки"
|**defaultProject**     |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Проекта, который будет использоваться по умолчанию в документах
|**defaultPlace**       |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Склада, который будет использоваться по умолчанию в документах
|**locale**             |Enum|Язык системы. Допустимые значения "ru_RU" и "en_US"
|**mailFooter**         |Boolean|Подставляется в подпись в письмах, отправляемых из МС
|**fieldsPerRow**       |Int|Количество столбцов, в которых будут располагаться дополнительные поля в документах
|**printFormat**        |Enum|[Правила печати документов](./#suschnosti-nastrojki-pol-zowatelq-poluchit-metadannye-nastroek-kompanii-prawila-pechati-dokumentow)
|**defaultScreen**      |Enum|[Страница, которая открывается у пользователя при логине](./#suschnosti-nastrojki-pol-zowatelq-poluchit-metadannye-nastroek-kompanii-startowyj-akran)
|**autoShowReports**    |Boolean|Строить ли отчеты автоматически при переходе на вкладку с отчетом

Допускается частичное редактирование - отредактированы будут только присутствующие в запросе поля.
> Запрос на изменение настроек пользователя:

```shell
curl -X PUT
  "https://online.moysklad.ru/api/remap/1.2/context/usersettings"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
      -d '{
  "defaultCompany": {
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
    "type": "organization",
    "mediaType": "application/json"
  },
  "defaultCustomerCounterparty": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/5f13f655-a419-11ea-ac12-000a00000073",
    "type": "counterparty",
    "mediaType": "application/json"
  },
  "defaultPurchaseCounterparty": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/5f13f655-a419-11ea-ac12-000a00000074",
    "type": "counterparty",
    "mediaType": "application/json"
  },
  "defaultProject": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/59e1cf55-a70f-11ea-ac12-000d00000001",
    "type": "project",
    "mediaType": "application/json"
  },
  "defaultPlace": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/5f13ac1b-a419-11ea-ac12-000a00000072",
    "type": "store",
    "mediaType": "application/json"
  },
  "locale": "ru_RU",
  "mailFooter": "подпись в письме",
  "fieldsPerRow": 3,
  "defaultScreen": "importcustom",
  "printFormat": "pdf",
  "autoShowReports": false
}
'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Настроек пользователя.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/context/usersettings",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/context/usersettings/metadata",
    "type": "usersettings",
    "mediaType": "application/json"
  },
  "defaultCompany": {
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
    "type": "organization",
    "mediaType": "application/json"
  },
  "defaultCustomerCounterparty": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/5f13f655-a419-11ea-ac12-000a00000073",
    "type": "counterparty",
    "mediaType": "application/json"
  },
  "defaultPurchaseCounterparty": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/5f13f655-a419-11ea-ac12-000a00000074",
    "type": "counterparty",
    "mediaType": "application/json"
  },
  "defaultProject": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/59e1cf55-a70f-11ea-ac12-000d00000001",
    "type": "project",
    "mediaType": "application/json"
  },
  "defaultPlace": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/5f13ac1b-a419-11ea-ac12-000a00000072",
    "type": "store",
    "mediaType": "application/json"
  },
  "locale": "ru_RU",
  "mailFooter": "подпись в письме",
  "fieldsPerRow": 3,
  "defaultScreen": "importcustom",
  "printFormat": "pdf",
  "autoShowReports": false
}
```
