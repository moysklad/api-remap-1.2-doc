## Настройки пользователя

Кодом сущности для Настройки пользователя в составе JSON API является ключевое слово **usersettings**.

Средствами JSON API можно получать и редактировать настройки пользователя.

#### Атрибуты сущности

| Название                        | Тип                                                       | Описание                                                                                                                                        |
| ------------------------------- | :-------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------|
| **autoShowReports**             | Boolean                                                   | Строить ли отчеты автоматически при переходе на вкладку с отчетом<br>`+Обязательное при ответе`                                                 |
| **defaultCompany**              | [Meta](#/general#3-metadannye) | Метаданные Организации, которая будет использоваться по умолчанию в документах<br>`+Обязательное при ответе`                                    |
| **defaultCustomerCounterparty** | [Meta](#/general#3-metadannye) | Метаданные Покупателя, который будет использоваться по умолчанию в документах раздела "Продажи"<br>`+Обязательное при ответе`                   |
| **defaultPlace**                | [Meta](#/general#3-metadannye) | Метаданные Склада, который будет использоваться по умолчанию в документах<br>`+Обязательное при ответе`                                         |
| **defaultProject**              | [Meta](#/general#3-metadannye) | Метаданные Проекта, который будет использоваться по умолчанию в документах<br>`+Обязательное при ответе`                                        |
| **defaultPurchaseCounterparty** | [Meta](#/general#3-metadannye) | Метаданные Поставщика, который будет использоваться по умолчанию в документах раздела "Закупки"<br>`+Обязательное при ответе`                   |
| **defaultScreen**               | Enum                                                      | [Страница, которая открывается у пользователя при логине](#/dictionaries/usersettings#4-startovyj-ekran)<br>`+Обязательное при ответе`   |
| **fieldsPerRow**                | Int                                                       | Количество столбцов, в которых будут располагаться дополнительные поля в документах<br>`+Обязательное при ответе`                               |
| **locale**                      | Enum                                                      | Язык системы. Допустимые значения "ru_RU" и "en_US"<br>`+Обязательное при ответе`                                                               |
| **mailFooter**                  | Boolean                                                   | Подставляется в подпись в письмах, отправляемых из МС<br>`+Обязательное при ответе`                                                             |
| **meta**                        | [Meta](#/general#3-metadannye) | Метаданные настроек<br>`+Обязательное при ответе`                                                                                               |
| **printFormat**                 | Enum                                                      | [Правила печати документов](#/dictionaries/usersettings#4-pravila-pechati-dokumentov)<br>`+Обязательное при ответе`                      |

#### Правила печати документов
Допустимые правила печати:

| Правила печати документов           | Значение поля printFormat |
| ----------------------------------- |:--------------------------|
| Скачать в формате PDF               | pdf                       |
| Скачать в формате Excel             | xls                       |
| Скачать в формате Open Office Calc  | ods                       |
| Предлагать выбор                    | "" (пустая строка)        |
| Открыть в браузере                  | pdf_open                  |

#### Стартовый экран 
Допустимые значения стартового экрана:

| Стартовый экран                        | Значение поля defaultScreen   |
|----------------------------------------| :---------------------------- |
| Аудит                                  | audit                         |
| Валюты                                 | currency                      |
| Ввод в оборот кодов маркировки         | enrollorder                   |
| Взаиморасчеты                          | customersbalancelist          |
| Внесения                               | retaildrawercashin            |
| Внутренние заказы                      | internalorder                 |
| Возврат в оборот                       | enrollreturn                  |
| Возвраты                               | retailsalesreturn             |
| Возвраты покупателей                   | salesreturn                   |
| Возвраты поставщикам                   | purchasereturn                |
| Возвраты предоплат                     | prepaymentreturn              |
| Воронка продаж                         | purchasefunnel                |
| Вывод из оборота                       | retireorder                   |
| Выданные отчеты комиссионера           | commissionreportout           |
| Выплаты                                | retaildrawercashout           |
| Движение денежных средств              | cashflow                      |
| Договоры                               | contract                      |
| Документы                              | operation                     |
| Единицы измерения                      | uom                           |
| Журнал запросов в ИС МП                | crptlog                       |
| Журнал запросов в систему лояльности   | loyaltylog                    |
| Задачи                                 | purpose                       |
| Заказ кодов маркировки                 | crptdemand                    |
| Заказы на производство                 | processingorder               |
| Заказы покупателей                     | customerorder                 |
| Заказы поставщикам                     | purchaseorder                 |
| Запросы                                | evotorrequest                 |
| Звонки                                 | phonecall                     |
| Изъятие из упаковки                    | crptpackageitemremoval        |
| Импорт                                 | import                        |
| Импорт из Excel                        | importgoods                   |
| Импорт приемки                         | importedo                     |
| Импорт справочника                     | importcustom                  |
| Инвентаризации                         | inventory                     |
| Контрагенты                            | company                       |
| Корзина                                | recyclebin                    |
| Корректировки                          | adjustment                    |
| Массовое редактирование                | bulkEdit                      |
| Настройка обмена с Эвотор              | evotormapping                 |
| Настройки                              | companysettings               |
| Начало работы                          | homepage                      |
| Новости                                | feed                          |
| Обороты                                | turnover                      |
| Операции с баллами                     | bonustransaction              |
| Описание остатков                      | remainsorder                  |
| Оприходования                          | enter                         |
| Остатки                                | stockreport                   |
| Отгрузки                               | demand                        |
| Отчеты комиссионера                    | commissionreport              |
| Очередь облачных чеков                 | fiscalevent                   |
| Очередь облачных чеков                 | fiscalqueue                   |
| Перемаркировка                         | remarkingorder                |
| Перемещения                            | move                          |
| Платежи                                | finance                       |
| Подписка                               | payments                      |
| Показатели                             | dashboard                     |
| Полученные отчеты комиссионера         | commissionreportin            |
| Прайс-листы                            | pricelist                     |
| Предоплаты                             | prepayment                    |
| Прибыли и убытки                       | pnl3                          |
| Прибыльность                           | pnl                           |
| Приемки                                | supply                        |
| Решения                             | apps                          |
| Решения                             | embed-apps                    |
| Проверка комплектации                  | checkequipment                |
| Продажи                                | retaildemand                  |
| Проекты                                | project                       |
| Просмотр информации о КМ или ТУ        | trackingidentify              |
| Расформирование упаковки               | crptpackagedisaggregation     |
| Сбор заказа                            | orderassembly                 |
| Сер. номера                            | serialnumbers                 |
| Синхронизация                          | connectorsettings             |
| Скидки                                 | discount                      |
| Склады                                 | warehouse                     |
| Смены                                  | retailshift                   |
| События обмена с Эвотор                | evotorevent                   |
| Сотрудники                             | employee                      |
| Спецпредложения                        | specialoffers                 |
| Списание кодов маркировки              | crptcancellation              |
| Списания                               | loss                          |
| Страны                                 | country                       |
| Сценарии                               | scripttemplate                |
| Счета покупателям                      | invoiceout                    |
| Счета поставщиков                      | invoicein                     |
| Счета-фактуры выданные                 | factureout                    |
| Счета-фактуры полученные               | facturein                     |
| Техкарты                               | processingplan                |
| Техоперации                            | processing                    |
| Товары и услуги                        | good                          |
| Товары на реализации                   | commissiongoods               |
| Точки продаж                           | retailstore                   |
| Уведомления                            | notifications                 |
| Управление закупками                   | purchasecontrol               |
| Учетная запись                         | account                       |
| Формирование упаковки                  | crptpackagecreation           |
| Характеристика                         | feature                       |
| Экспорт                                | export                        |
| Юр. лица                               | mycompany                     |

### Получить Настройки пользователя 
> Запрос на получение Настроек пользователя:

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/context/usersettings" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Настроек компании:

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/context/usersettings",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/context/usersettings/metadata",
    "type": "usersettings",
    "mediaType": "application/json"
  },
  "defaultCompany": {
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
    "type": "organization",
    "mediaType": "application/json"
  },
  "defaultCustomerCounterparty": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/5f13f655-a419-11ea-ac12-000a00000073",
    "type": "counterparty",
    "mediaType": "application/json"
  },
  "defaultPurchaseCounterparty": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/5f13f655-a419-11ea-ac12-000a00000074",
    "type": "counterparty",
    "mediaType": "application/json"
  },
  "defaultProject": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/59e1cf55-a70f-11ea-ac12-000d00000001",
    "type": "project",
    "mediaType": "application/json"
  },
  "defaultPlace": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/5f13ac1b-a419-11ea-ac12-000a00000072",
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

| Название                        | Тип                                                       | Описание                                                                                                          |
| ------------------------------- | :-------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------|
| **autoShowReports**             | Boolean                                                   | Строить ли отчеты автоматически при переходе на вкладку с отчетом                                                 |
| **defaultCompany**              | [Meta](#/general#3-metadannye) | Метаданные Организации, которая будет использоваться по умолчанию в документах                                    |
| **defaultCustomerCounterparty** | [Meta](#/general#3-metadannye) | Метаданные Покупателя, который будет использоваться по умолчанию в документах раздела "Продажи"                   |
| **defaultPlace**                | [Meta](#/general#3-metadannye) | Метаданные Склада, который будет использоваться по умолчанию в документах                                         |
| **defaultProject**              | [Meta](#/general#3-metadannye) | Метаданные Проекта, который будет использоваться по умолчанию в документах                                        |
| **defaultPurchaseCounterparty** | [Meta](#/general#3-metadannye) | Метаданные Поставщика, который будет использоваться по умолчанию в документах раздела "Закупки"                   |
| **defaultScreen**               | Enum                                                      | [Страница, которая открывается у пользователя при логине](#/dictionaries/usersettings#4-startovyj-ekran)   |
| **fieldsPerRow**                | Int                                                       | Количество столбцов, в которых будут располагаться дополнительные поля в документах                               |
| **locale**                      | Enum                                                      | Язык системы. Допустимые значения "ru_RU" и "en_US"                                                               |
| **mailFooter**                  | Boolean                                                   | Подставляется в подпись в письмах, отправляемых из МС                                                             |
| **printFormat**                 | Enum                                                      | [Правила печати документов](#/dictionaries/usersettings#4-pravila-pechati-dokumentov)                      |

Допускается частичное редактирование - отредактированы будут только присутствующие в запросе поля.
> Запрос на изменение настроек пользователя:

```shell
curl --compressed -X PUT \
  "https://api.moysklad.ru/api/remap/1.2/context/usersettings" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
      -d '{
  "defaultCompany": {
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
    "type": "organization",
    "mediaType": "application/json"
  },
  "defaultCustomerCounterparty": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/5f13f655-a419-11ea-ac12-000a00000073",
    "type": "counterparty",
    "mediaType": "application/json"
  },
  "defaultPurchaseCounterparty": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/5f13f655-a419-11ea-ac12-000a00000074",
    "type": "counterparty",
    "mediaType": "application/json"
  },
  "defaultProject": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/59e1cf55-a70f-11ea-ac12-000d00000001",
    "type": "project",
    "mediaType": "application/json"
  },
  "defaultPlace": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/5f13ac1b-a419-11ea-ac12-000a00000072",
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
    "href": "https://api.moysklad.ru/api/remap/1.2/context/usersettings",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/context/usersettings/metadata",
    "type": "usersettings",
    "mediaType": "application/json"
  },
  "defaultCompany": {
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
    "type": "organization",
    "mediaType": "application/json"
  },
  "defaultCustomerCounterparty": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/5f13f655-a419-11ea-ac12-000a00000073",
    "type": "counterparty",
    "mediaType": "application/json"
  },
  "defaultPurchaseCounterparty": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/5f13f655-a419-11ea-ac12-000a00000074",
    "type": "counterparty",
    "mediaType": "application/json"
  },
  "defaultProject": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/59e1cf55-a70f-11ea-ac12-000d00000001",
    "type": "project",
    "mediaType": "application/json"
  },
  "defaultPlace": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/5f13ac1b-a419-11ea-ac12-000a00000072",
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
