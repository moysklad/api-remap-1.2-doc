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

| Название                                | Тип                                                       | Фильтрация                  | Описание                                                                                                                                                                                                                                                                      |
| --------------------------------------- | :-------------------------------------------------------- | :-------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **accountId**                           | UUID                                                      | `=` `!=`                    | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                                          |
| **acquire**                             | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                             | Метаданные Банка-эквайера по операциям по карте<br>`+Обязательное при ответе` `+Expand`                                                                                                                                                                                       |
| **active**                              | Boolean                                                   | `=` `!=`                    | Состояние точки продаж (Включена/Отключена)<br>`+Обязательное при ответе`                                                                                                                                                                                                     |
| **address**                             | String(255)                                               | `=` `!=` `~` `~=` `=~`      | Адрес Точки продаж                                                                                                                                                                                                                                                            |
| **addressFull**                         | Object                                                    |                             | Адрес с детализацией по отдельным полям. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-attributy-suschnosti-status-attributy-suschnosti-adres)                                                                                |
| **allowCreateProducts**                 | Boolean                                                   |                             | Контроль остатков. Не может быть `true`, если `controlShippingStock` имеет значение `true`<br>`+Обязательное при ответе`                                                                                                                                                      |
| **allowCustomPrice**                    | Boolean                                                   |                             | Разрешить продажу по свободной цене<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                        |
| **allowDeleteReceiptPositions**         | Boolean                                                   |                             | Разрешить удалять позиции в чеке<br>`+Обязательное при ответе` по умолчанию `+true`                                                                                                                                                                                           |
| **allowSellTobaccoWithoutMRC**          | Boolean                                                   |                             | Разрешить продавать табачную продукцию не по МРЦ<br>`+Обязательное при ответе`                                                                                                                                                                                                |
| **archived**                            | Boolean                                                   |                             | Добавлена ли Точка продаж в архив<br>`+Обязательное при ответе`                                                                                                                                                                                                               |
| **authTokenAttached**                   | Boolean                                                   |                             | Создан ли токен для точки продаж<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                           |
| **bankPercent**                         | Double                                                    |                             | Комиссия банка-эквайера по операциям по карте (в процентах)                                                                                                                                                                                                                   |
| **cashiers**                            | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                             | Метаданные Кассиров<br>`+Обязательное при ответе` `+Expand`                                                                                                                                                                                                                   |
| **controlCashierChoice**                | Boolean                                                   |                             | Выбор продавца<br>`+Обязательное при ответе`                                                                                                                                                                                                                                  |
| **controlShippingStock**                | Boolean                                                   |                             | Контроль остатков. Не может быть `true`, если `AllowCreateProducts` имеет значение `true`<br>`+Обязательное при ответе`                                                                                                                                                       |
| **createAgentsTags**                    | Array(Object)                                             |                             | Коллекция групп покупателей, представленных в формате строк. Определяет группы, в которые добавляются новые покупатели. Значения `null` игнорируются                                                                                                                          |
| **createCashInOnRetailShiftClosing**    | Boolean                                                   |                             | Создавать ПКО при закрытии смены<br>`+Обязательное при ответе`                                                                                                                                                                                                                |
| **createOrderWithState**                | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                             | Метаданные статуса, который будет указан при создании заказа<br>`+Expand`                                                                                                                                                                                                     |
| **createPaymentInOnRetailShiftClosing** | Boolean                                                   |                             | Создавать входящий платеж при закрытии смены<br>`+Обязательное при ответе`                                                                                                                                                                                                    |
| **customerOrderStates**                 | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                             | Метаданные статусов, в которых выгружаются заказы в точку продаж (если указано)<br>`+Expand`                                                                                                                                                                                  |
| **defaultTaxSystem**                    | Enum                                                      |                             | Код системы налогообложения по умолчанию. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-kod-sistemy-nalogooblozheniq-po-umolchaniu)<br>`+Обязательное при ответе`                                                             |
| **demandPrefix**                        | String(255)                                               |                             | Префикс номера продаж                                                                                                                                                                                                                                                         |
| **description**                         | String(4096)                                              | `=` `!=` `~` `~=` `=~`      | Комментарий к Точке продаж                                                                                                                                                                                                                                                    |
| **discountEnable**                      | Boolean                                                   |                             | Разрешить скидки<br>`+Обязательное при ответе`                                                                                                                                                                                                                                |
| **discountMaxPercent**                  | Int                                                       |                             | Максимальная скидка (в процентах)                                                                                                                                                                                                                                             |
| **enableReturnsWithNoReason**           | Boolean                                                   |                             | Разрешить возвраты без основания<br>`+Обязательное при ответе`                                                                                                                                                                                                                |
| **environment**                         | Object                                                    |                             | Информация об окружении. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-okruzhenie)<br>`+Обязательное при ответе` `+Только для чтения`                                                                                         |
| **externalCode**                        | String(255)                                               | `=` `!=` `~` `~=` `=~`      | Внешний код Точки продаж<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                                   |
| **filterAgentsTags**                    | Array(Object)                                             |                             | Коллекция групп покупателей, представленных в формате строк. Определяет группы, из которых выгружаются покупатели. Значения `null` игнорируются                                                                                                                               |
| **fiscalType**                          | Enum                                                      |                             | Тип формирования чеков. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-tip-formirowaniq-chekow)<br>`+Обязательное при ответе`                                                                                                  |
| **group**                               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                    | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                                                                                                                                                      |
| **id**                                  | UUID                                                      | `=` `!=`                    | ID Точки продаж<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                                            |
| **idQR**                                | String(255)                                               |                             | Идентификатор устройства QR (IdQR) для приложения оплаты по QR                                                                                                                                                                                                                |
| **issueOrders**                         | Boolean                                                   |                             | Выдача заказов<br>`+Обязательное при ответе`                                                                                                                                                                                                                                  |
| **lastOperationNames**                  | Array(Object)                                             |                             | Последние операции. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-poslednie-operacii)<br>`+Обязательное при ответе` `+Только для чтения`                                                                                      |
| **markingSellingMode**                  | Enum                                                      |                             | Режим продажи маркированной продукции, если используется формат фискальных документов версии 1.2. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-prodazha-markirowannyh-towarow)<br>`+Обязательное при ответе`                 |
| **masterRetailStores**                  | Array(Object)                                             |                             | Ссылка на точки продаж, которые могут фискализировать операции с текущей точки продаж, если `minionToMaster` = `CHOSEN`<br>`+Expand`                                                                                                                                          |
| **meta**                                | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                             | Метаданные Точки продаж<br>`+Обязательное при ответе`                                                                                                                                                                                                                         |
| **minionToMasterType**                  | Enum                                                      |                             | Стратегия выбора кассы для фискализации облачных чеков. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-strategiq-wybora-kassy-dlq-fiskalizacii-oblachnyh-chekow)<br>`+Обязательное при ответе`                                 |
| **name**                                | String(255)                                               | `=` `!=` `~` `~=` `=~`      | Наименование Точки продаж<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                                                                                                                                            |
| **ofdEnabled**                          | Boolean                                                   |                             | Отправлять электронный чек через ОФД<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                       |
| **onlyInStock**                         | Boolean                                                   |                             | Выгружать только товары в наличии. Доступно только при активном контроле остатков. Влияет только на выгрузку остатков в POS API<br>`+Обязательное при ответе`                                                                                                                 |
| **orderTaxSystem**                      | Enum                                                      |                             | Код системы налогообложения для заказов. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-kod-sistemy-nalogooblozheniq-dlq-zakazow)<br>`+Обязательное при ответе`                                                                |
| **orderToState**                        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                             | Метаданные статуса, который проставится заказу после проведения продажи на его основании (если указано)<br>`+Expand`                                                                                                                                                          |
| **organization**                        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                    | Метаданные Юрлица<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                                                                                                                                                          |
| **owner**                               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                    | Владелец (Сотрудник)<br>`+Expand`                                                                                                                                                                                                                                             |
| **priceType**                           | Object                                                    |                             | Тип цен, с которыми будут продаваться товары в рознице<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                                                                                                               |
| **printAlways**                         | Boolean                                                   |                             | Всегда печатать кассовые чеки<br>`+Обязательное при ответе`                                                                                                                                                                                                                   |
| **priorityOfdSend**                     | Enum                                                      |                             | Приоритет отправки электронного чека. Активен только, когда отправка электронных чеков через ОФД включена. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-prioritet-otprawki-alektronnogo-cheka)<br>`+Обязательное при ответе` |
| **productFolders**                      | Array(Object)                                             |                             | Коллекция Метаданных групп товаров, из которых можно выгружать товары<br>`+Expand`                                                                                                                                                                                            |
| **qrAcquire**                           | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                             | Метаданные Банка-эквайера по операциям по QR-коду<br>`+Expand`                                                                                                                                                                                                                |
| **qrBankPercent**                       | Double                                                    |                             | Комиссия банка-эквайера по операция по QR-коду (в процентах)                                                                                                                                                                                                                  |
| **qrPayEnabled**                        | Boolean                                                   |                             | Возможность оплаты по QR-коду на точке продаж<br>`+Обязательное при ответе`                                                                                                                                                                                                   |
| **qrTerminalId**                        | String(255)                                               |                             | Идентификатор терминала (TerminalID) для приложения оплаты по QR                                                                                                                                                                                                              |
| **receiptTemplate**                     | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                             | Метаданные шаблона печати кассовых чеков<br>`+Expand`                                                                                                                                                                                                                         |
| **requiredFio**                         | Boolean                                                   |                             | Обязательность поля ФИО при создании контрагента<br>`+Обязательное при ответе` по умолчанию `+false`                                                                                                                                                                          |
| **requiredPhone**                       | Boolean                                                   |                             | Обязательность поля телефон при создании контрагента<br>`+Обязательное при ответе` по умолчанию `+true`                                                                                                                                                                       |
| **requiredEmail**                       | Boolean                                                   |                             | Обязательность поля эл. почта при создании контрагента<br>`+Обязательное при ответе` по умолчанию `+false`                                                                                                                                                                    |
| **requiredBirthdate**                   | Boolean                                                   |                             | Обязательность поля дата рождения при создании контрагента<br>`+Обязательное при ответе` по умолчанию `+false`                                                                                                                                                                |
| **requiredSex**                         | Boolean                                                   |                             | Обязательность поля пол при создании контрагента<br>`+Обязательное при ответе` по умолчанию `+false`                                                                                                                                                                          |
| **requiredDiscountCardNumber**          | Boolean                                                   |                             | Обязательность поля номер бонусной карты при создании контрагента<br>`+Обязательное при ответе` по умолчанию `+false`                                                                                                                                                         |
| **reservePrepaidGoods**                 | Boolean                                                   |                             | Резервировать товары, за которые внесена предоплата<br>`+Обязательное при ответе`                                                                                                                                                                                             |
| **returnFromClosedShiftEnabled**        | Boolean                                                   |                             | Разрешить возвраты в закрытых сменах<br>`+Обязательное при ответе`                                                                                                                                                                                                            |
| **sellReserves**                        | Boolean                                                   |                             | Учет резервов<br>`+Обязательное при ответе`                                                                                                                                                                                                                                   |
| **sendMarksForCheck**                   | Boolean                                                   |                             | Для облачных точек — до продажи отправлять коды маркировки на проверку на точку с ККТ`+Обязательное при ответе`                                                                                                                                                               |
| **shared**                              | Boolean                                                   | `=` `!=`                    | Общий доступ<br>`+Обязательное при ответе`                                                                                                                                                                                                                                    |
| **state**                               | Object                                                    |                             | Информация статусе точки продаж. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-attributy-suschnosti-status)<br>`+Только для чтения`                                                                                           |
| **store**                               | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                    | Метаданные Склада<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                                                                                                                                                          |
| **tobaccoMrcControlType**               | Enum                                                      |                             | Контроль МРЦ для табачной продукции. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-tip-kontrolq-mrc-dlq-tabachnoj-produkcii)<br>`+Обязательное при ответе`                                                                    |
| **updated**                             | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`  | Момент последнего обновления Точки продаж<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                  |

##### Код системы налогообложения по умолчанию

| Название                                 | Описание                     |
| ---------------------------------------- | :--------------------------- |
| **GENERAL_TAX_SYSTEM**                   | ОСН                          |
| **SIMPLIFIED_TAX_SYSTEM_INCOME**         | УСН. Доход                   |
| **SIMPLIFIED_TAX_SYSTEM_INCOME_OUTCOME** | УСН. Доход-Расход            |
| **UNIFIED_AGRICULTURAL_TAX**             | ЕСХН                         |
| **PRESUMPTIVE_TAX_SYSTEM**               | ЕНВД                         |
| **PATENT_BASED**                         | Патент                       |
   
##### Код системы налогообложения для заказов
 
| Название                                 | Описание                     |
| ---------------------------------------- | :--------------------------- |
| **GENERAL_TAX_SYSTEM**                   | ОСН                          |
| **SIMPLIFIED_TAX_SYSTEM_INCOME**         | УСН. Доход                   |
| **SIMPLIFIED_TAX_SYSTEM_INCOME_OUTCOME** | УСН. Доход-Расход            |
| **UNIFIED_AGRICULTURAL_TAX**             | ЕСХН                         |
| **PRESUMPTIVE_TAX_SYSTEM**               | ЕНВД                         |
| **PATENT_BASED**                         | Патент                       |
   
  
##### Тип формирования чеков  
  
| Название                       | Описание                                   |
| ------------------------------ | :----------------------------------------- |
| **STANDARD**                   | Стандартное                                |
| **MASTER**                     | Стандартное с обработкой облачных операций |
| **CLOUD**                      | Облачное                                   |
 
##### Стратегия выбора кассы для фискализации облачных чеков

| Название                       | Описание                                              |
| ------------------------------ | :---------------------------------------------------- |
| **ANY**                        | Любая мастер касса                                    |
| **SAME_GROUP**                 | Только кассы из того же отдела                        |
| **CHOSEN**                     | Выбранные кассы из списка в поле `masterRetailStores` |

##### Тип контроля МРЦ для табачной продукции

| Название          | Описание                                                    |
| ----------------- | :---------------------------------------------------------- |
| **USER_PRICE**    | Не контролировать МРЦ                                       |
| **MRC_PRICE**     | Продавать по МРЦ указанной на пачке                         |
| **SAME_PRICE**    | Запрещать продажу, если цена продажи не совпадает с МРЦ     |

##### Продажа маркированных товаров:

| Название                    | Описание                                                    |
| --------------------------- | :---------------------------------------------------------- |
| **CORRECT_MARKS_ONLY**      | Только с правильными кодами маркировки                      |
| **WITHOUT_ERRORS**          | С правильными кодами и те, которые не удалось проверить     |
| **ALL**                     | Все – независимо от результатов проверки кодов маркировки   |

##### Приоритет отправки электронного чека

| Название                       | Описание                      |
| ------------------------------ | :---------------------------- |
| **phone**                      | Приоритет отправки на телефон |
| **email**                      | Приоритет отправки на e-mail  |
| **none**                       | Отсутствие отправки чека      |

##### Окружение
| Название            | Тип         | Описание                                                                                                                                           |
| ------------------- | :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| **device**          | String(255) | Информация об устройстве                                                                                                                           |
| **os**              | String(255) | Информация об операционной системе                                                                                                                 |
| **software**        | Object      | Информация о ПО. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-okruzhenie-attributy-suschnosti-po) |
| **chequePrinter**   | Object      | Данные о ККТ. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-okruzhenie-attributy-suschnosti-kkt)   |
| **paymentTerminal** | String(255) | Информация о платежном терминале                                                                                                                   |

###### Аттрибуты сущности ПО

| Название    | Тип         | Описание                                                                 |
| ----------- | :---------- | :----------------------------------------------------------------------- |
| **name**    | String(255) | Наименование ПО<br>`+Обязательное при ответе` `+Необходимо при создании` |
| **vendor**  | String(255) | Производитель                                                            |
| **version** | String(255) | Версия ПО                                                                |

###### Аттрибуты сущности ККТ

| Название              | Тип         | Описание                                                                                                                                                                                |
| --------------------- | :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **driver**            | Object      | Информация об используемом драйвере. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-okruzhenie-attributy-suschnosti-drajwer)             |
| **firmwareVersion**   | String(255) | Версия прошивки ККТ                                                                                                                                                                     |
| **fiscalDataVersion** | String(255) | Формат фискальных данных                                                                                                                                                                |
| **fiscalMemory**      | Object      | Информация о фискальном накопителе. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-okruzhenie-attributy-suschnosti-fiskal-nyj-nakopitel) |
| **name**              | String(255) | Наименование ПО<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                                                                |
| **serial**            | String(255) | Серийный номер                                                                                                                                                                          |
| **vendor**            | String(255) | Производитель                                                                                                                                                                           |

###### Аттрибуты сущности Драйвер

| Название    | Тип         | Описание              |
| ----------- | :---------- | :-------------------- |
| **name**    | String(255) | Наименование драйвера |
| **version** | String(255) | Версия драйвера       |

###### Аттрибуты сущности Фискальный накопитель

| Название               | Тип         | Описание                 |
| ---------------------- | :---------- | :----------------------- |
| **fiscalDataVersion**  | String(255) | Версия фискальной памяти |
| **fiscalValidityDate** | DateTime    | Версия фискальной памяти |

##### Аттрибуты сущности Статус

| Название            | Тип      | Описание                                                                                                                                                                                                               |
| ------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **sync**            | Object   | Состояние синхронизации. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-attributy-suschnosti-status-attributy-suschnosti-sinhronizaciq)                                 |
| **lastCheckMoment** | DateTime | Дата и время последней синхронизации                                                                                                                                                                                   |
| **fiscalMemory**    | Object   | Информация о фискальном накопителе. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-attributy-suschnosti-status-attributy-suschnosti-fiskal-naq-pamqt)                   |
| **paymentTerminal** | Object   | Информация о платежном терминале. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-attributy-suschnosti-status-attributy-suschnosti-platezhnyj-terminal)<br>`+Устаревшее` |

###### Аттрибуты сущности Синхронизация

| Название             | Тип         | Описание                                                                            |
| -------------------- | :---------- | :---------------------------------------------------------------------------------- |
| **message**          | String(255) | Состояние синхронизации                                                             |
| **lastAttempMoment** | DateTime    | Дата последней сихронизации (не обязательно успешной)<br>`+Необходимо при создании` |

###### Аттрибуты сущности Фискальная Память

| Название            | Тип      | Описание                                                                                                                                                                         |
| ------------------- |:---------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **error**           | Object   | Информация об ошибке ФН. [Подробнее тут](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-attributy-suschnosti-status-attributy-suschnosti-oshibka) |
| **notSendDocCount** | Int      | Количество неотправленных документов в ОФД                                                                                                                                       |
| **notSendFirstDocMoment** | DateTime | Время начала не отправки документов                                                                                                                                              |

###### Аттрибуты сущности Ошибка

| Название    | Тип         | Описание                                      |
| ----------- |:------------| :-------------------------------------------- |
| **сode**    | String(255) | Код ошибки ФН<br>`+Обязательное при ответе`   |
| **message** | String(255) | Описание ошибки<br>`+Обязательное при ответе` |

###### Аттрибуты сущности Платежный Терминал
| Название          | Тип         | Описание                                           |
| ----------------- | :---------- | :------------------------------------------------- |
| **acquiringType** | String(255) | Информация о типе эквайера (например: inpas/payme) |

###### Аттрибуты сущности Адрес

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
Для адреса не поддерживается [значение `null`](../#mojsklad-json-api-obschie-swedeniq-podderzhka-null). Передача `null` этому аттрибуту не приведет к его удалению.
Для удаления адреса необходимо в строковое поле `address` передать пустую строку `""`.


##### Последние операции
Поле **lastOperationNames** представляет собой массив объектов со следующей структурой:

| Название   | Тип         | Описание                                                                    |
| ---------- | :---------- | :-------------------------------------------------------------------------- |
| **entity** | String(255) | Ключевое слово, обозначающее тип последней операции<br>`+Только для чтения` |
| **name**   | String(255) | Наименование (номер) последней операции<br>`+Только для чтения`             |

Представляет собой краткий список последних операций на данной точке продаж. Если на данной точке не созданы документы Продажа/Внесение/Выплата/Возврат/Смена, то в ответе данные документы будут с номерами по умолчанию – 00001.

##### Кассиры
Сущность кассир представляет собой объект, содержащий ссылки на [Сотрудника](../dictionaries/#suschnosti-sotrudnik), назначенного кассиром,
и [Точку продаж](../dictionaries/#suschnosti-tochka-prodazh), к которой он привязан.
Подробнее о сущности Кассира можно посмотреть в разделе [Кассиры](../dictionaries/#suschnosti-kassir)

###### Кассир

| Название        | Тип                                                       | Описание                                                                                                               |
| --------------- | :-------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| **accountId**   | UUID                                                      | ID учетной записи Кассира<br>`+Обязательное при ответе` `+Только для чтения`                                           |
| **employee**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные сотрудника, которого представляет собой кассир<br>`+Обязательное при ответе` `+Только для чтения` `+Expand` |
| **id**          | UUID                                                      | ID Кассира<br>`+Обязательное при ответе` `+Только для чтения`                                                          |
| **meta**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Кассира<br>`+Обязательное при ответе`                                                                       |
| **retailStore** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные точки продаж, к которой прикреплен кассир<br>`+Обязательное при ответе` `+Только для чтения` `+Expand`      |


### Получить точки продаж 
Запрос всех Розничных точек продаж данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                           |
| ----------- | :-------------------------------------------------------- | :------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                               |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.       |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих Точки продаж. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить точки продаж

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/retailstore"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```
 
> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Розничных точек продаж.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/retailstore",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
    "type": "retailstore",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/2b5eb22f-139e-11e6-9464-e4de00000073",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
        "type": "retailstore",
        "mediaType": "application/json"
      },
      "id": "2b5eb22f-139e-11e6-9464-e4de00000073",
      "accountId": "305f25aa-137a-11e6-9464-e4de00000001",
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
      "updated": "2016-05-06 18:21:13",
      "name": "Точка2",
      "description": "вторая точка",
      "externalCode": "Et9M3cprgDiJPi7llDOhX0",
      "address": "125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
      "addressFull": {
        "postalCode": "125009",
        "country": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/country/metadata",
            "type": "country",
            "mediaType": "application/json"
          }
        },
        "region": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/region/metadata",
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
          "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
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
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/2b5eb22f-139e-11e6-9464-e4de00000073/cashiers",
          "type": "cashier",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/30f01af0-137a-11e6-9464-e4de0000004e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "store": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/30fe30a0-137a-11e6-9464-e4de00000050",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "acquire" : {
        "meta" : {
          "href" : "https://api.moysklad.ru/api/remap/1.2/entity/organization/30fe30a0-137a-11e6-9464-e4de00000051",
          "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
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
      "tobaccoMrcControlType" : "USER_PRICE",
      "markingSellingMode" : "CORRECT_MARKS_ONLY",
      "sendMarksForCheck" : false,
      "allowCreateProducts" : false,
      "allowDeleteReceiptPositions" : true,
      "productFolders" : {
        "meta" : {
          "href" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/2b5eb22f-139e-11e6-9464-e4de00000073/productfolders",
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
          "href" : "https://api.moysklad.ru/api/remap/1.2/entity/receipttemplate/30fe30a0-137a-11e6-9464-e4de00000052",
          "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/receipttemplate/metadata",
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
          "href" : "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/30fe30a0-137a-11e6-9464-e4de00000053",
          "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
          "type" : "state",
          "mediaType" : "application/json"
        }
      },
      "reservePrepaidGoods" : true,
      "defaultTaxSystem": "GENERAL_TAX_SYSTEM",
      "orderTaxSystem": "GENERAL_TAX_SYSTEM",
      "fiscalType": "STANDARD",
      "minionToMasterType": "ANY",
      "qrPayEnabled": true,
      "idQR" : "y8349n93",
      "qrTerminalId" : "fb736ft372",
      "qrAcquire" : {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/30fe66fd-137a-11e6-9464-e4de00000053",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "qrBankPercent" : 11.0
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/31b6349e-137a-11e6-9464-e4de0000005d",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
        "type": "retailstore",
        "mediaType": "application/json"
      },
      "id": "31b6349e-137a-11e6-9464-e4de0000005d",
      "accountId": "305f25aa-137a-11e6-9464-e4de00000001",
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
      "updated": "2016-05-06 18:09:54",
      "name": "Точка продаж",
      "externalCode": "AEhB1gX7inNaXzAGSbDeh0",
      "address": "125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
      "addressFull": {
        "postalCode": "125009",
        "country": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/country/metadata",
            "type": "country",
            "mediaType": "application/json"
          }
        },
        "region": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/region/metadata",
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
          "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
        "name": "Цена продажи",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
      },
      "requiredFio" : false,
      "requiredPhone" : false,
      "requiredEmail" : false,
      "requiredBirthdate" : false,
      "requiredSex" : false,
      "requiredDiscountCardNumber" : false,
      "authTokenAttached": false,
      "cashiers": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/31b6349e-137a-11e6-9464-e4de0000005d/cashiers",
          "type": "cashier",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/30f01af0-137a-11e6-9464-e4de0000004e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "store": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/30fe30a0-137a-11e6-9464-e4de00000050",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "acquire" : {
         "meta" : {
           "href" : "https://api.moysklad.ru/api/remap/1.2/entity/organization/30fe30a0-137a-11e6-9464-e4de00000052",
           "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
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
      "tobaccoMrcControlType" : "USER_PRICE",
      "markingSellingMode" : "CORRECT_MARKS_ONLY",
      "sendMarksForCheck" : false,
      "allowCreateProducts" : false,
      "allowDeleteReceiptPositions" : true,
      "productFolders" : {
        "meta" : {
          "href" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/2b5eb22f-139e-11e6-9464-e4de00000073/productfolders",
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
          "href" : "https://api.moysklad.ru/api/remap/1.2/entity/receipttemplate/2b5eb22f-139e-11e6-9464-e4de00000074",
          "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/receipttemplate/metadata",
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
          "href" : "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/2b5eb22f-139e-11e6-9464-e4de00000075",
          "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
          "type" : "state",
          "mediaType" : "application/json"
        }
      },
      "reservePrepaidGoods" : true,
      "fiscalType": "MASTER",
      "minionToMasterType": "ANY",
      "qrPayEnabled": true,
      "idQR" : "y8349n93",
      "qrTerminalId" : "fb736ft372",
      "qrAcquire" : {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/30fe66fd-137a-11e6-9464-e4de00000053",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "qrBankPercent" : 11.0
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
    "https://api.moysklad.ru/api/remap/1.2/entity/retailstore"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
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
              "requiredFio" : false,
              "requiredPhone" : true,
              "requiredEmail" : false,
              "requiredBirthdate" : false,
              "requiredSex" : false,
              "requiredDiscountCardNumber" : false,
              "priceType" : {
                "meta" : {
                  "href" : "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/30fe66fd-137a-11e6-9464-e4de00000050",
                  "type" : "pricetype",
                  "mediaType" : "application/json"
                }
              },
              "authTokenAttached" : false,
              "cashiers" : [{
                "meta" : {
                  "href" : "https://api.moysklad.ru/api/remap/1.2/entity/employee/30fe66fd-137a-11e6-9464-e4de00000051",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                  "type" : "employee",
                  "mediaType" : "application/json"
                }
              }],
              "organization" : {
                "meta" : {
                  "href" : "https://api.moysklad.ru/api/remap/1.2/entity/organization/30fe66fd-137a-11e6-9464-e4de00000052",
                  "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type" : "organization",
                  "mediaType" : "application/json"
                }
              },
              "store" : {
                "meta" : {
                  "href" : "https://api.moysklad.ru/api/remap/1.2/entity/store/30fe66fd-137a-11e6-9464-e4de00000053",
                  "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type" : "store",
                  "mediaType" : "application/json"
                }
              },
              "orderToState" : {
                "meta" : {
                  "href" : "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/30fe66fd-137a-11e6-9464-e4de00000054",
                  "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
                  "type" : "state",
                  "mediaType" : "application/json"
                }
              },
              "customerOrderStates" : [ {
                "meta" : {
                  "href" : "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/30fe66fd-137a-11e6-9464-e4de00000055",
                  "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
                  "type" : "state",
                  "mediaType" : "application/json"
                }
              } ],
              "issueOrders" : true,
              "sellReserves" : true,
              "allowCustomPrice" : true,
              "allowSellTobaccoWithoutMRC" : true,
              "tobaccoMrcControlType" : "USER_PRICE",
              "markingSellingMode" : "CORRECT_MARKS_ONLY",
              "sendMarksForCheck" : false,
              "allowCreateProducts" : false,
              "allowDeleteReceiptPositions" : true,
              "productFolders" : [{
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/productfolder/30fe66fd-137a-11e6-9464-e4de00000056",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productfolder/metadata",
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
                  "href" : "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/30fe66fd-137a-11e6-9464-e4de00000058",
                  "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
                  "type" : "state",
                  "mediaType" : "application/json"
                }
              },
              "reservePrepaidGoods" : true,
              "fiscalType": "CLOUD",
              "minionToMasterType": "CHOSEN",
              "masterRetailStores": [{
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/31b6349e-137a-11e6-9464-e4de0000005d",
                  "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
                  "type": "retailstore",
                  "mediaType": "application/json"
                }
              }],
              "qrPayEnabled": true,
              "idQR" : "y8349n93",
              "qrTerminalId" : "fb736ft372",
              "qrBankPercent": 10,
              "qrAcquire" : {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/30fe66fd-137a-11e6-9464-e4de00000053",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                  "type": "counterparty",
                  "mediaType": "application/json"
                }
              }
          }'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Точки продаж.

```json
{
  "meta" : {
    "href" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/966b1795-bf2c-11e9-ee62-204c0000004c",
    "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
    "type" : "retailstore",
    "mediaType" : "application/json",
    "uuidHref" : "https://online.moysklad.ru/app/#retailstore/edit?id=966b1795-bf2c-11e9-ee62-204c0000004c"
  },
  "id" : "966b1795-bf2c-11e9-ee62-204c0000004c",
  "accountId" : "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
  "owner" : {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/employee/872559f1-cbf3-11e1-9eb9-889ffa6f49fd",
      "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type" : "employee",
      "mediaType" : "application/json",
      "uuidHref" : "https://online.moysklad.ru/app/#employee/edit?id=872559f1-cbf3-11e1-9eb9-889ffa6f49fd"
    }
  },
  "shared" : false,
  "group" : {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/group/f7eb1e3b-fd2a-42f7-b799-b3d1e6b3bf43",
      "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
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
  "requiredFio" : false,
  "requiredPhone" : true,
  "requiredEmail" : false,
  "requiredBirthdate" : false,
  "requiredSex" : false,
  "requiredDiscountCardNumber" : false,
  "priceType" : {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/30fe66fd-137a-11e6-9464-e4de00000050",
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
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/966b1795-bf2c-11e9-ee62-204c0000004c/cashiers",
      "type" : "cashier",
      "mediaType" : "application/json",
      "size" : 1,
      "limit" : 1000,
      "offset" : 0
    }
  },
  "organization" : {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/organization/30fe66fd-137a-11e6-9464-e4de00000051",
      "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type" : "organization",
      "mediaType" : "application/json",
      "uuidHref" : "https://online.moysklad.ru/app/#mycompany/edit?id=30fe66fd-137a-11e6-9464-e4de00000051"
    }
  },
  "store" : {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/store/30fe66fd-137a-11e6-9464-e4de00000052",
      "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type" : "store",
      "mediaType" : "application/json",
      "uuidHref" : "https://online.moysklad.ru/app/#warehouse/edit?id=30fe66fd-137a-11e6-9464-e4de00000052"
    }
  },
  "acquire" : {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/organization/30fe30a0-137a-11e6-9464-e4de00000052",
      "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type" : "organization",
      "mediaType" : "application/json"
    }
  },
  "bankPercent" : 20.0,
  "orderToState" : {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/30fe66fd-137a-11e6-9464-e4de00000053",
      "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
      "type" : "state",
      "mediaType" : "application/json"
    }
  },
  "customerOrderStates" : [ {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/30fe66fd-137a-11e6-9464-e4de00000054",
      "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
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
  "tobaccoMrcControlType" : "USER_PRICE",
  "markingSellingMode" : "CORRECT_MARKS_ONLY",
  "sendMarksForCheck" : false,
  "allowCreateProducts" : false,
  "allowDeleteReceiptPositions" : true,
  "productFolders" : {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/966b1795-bf2c-11e9-ee62-204c0000004c/productFolders",
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
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/30fe66fd-137a-11e6-9464-e4de00000057",
      "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
      "type" : "state",
      "mediaType" : "application/json"
    }
  },
  "reservePrepaidGoods" : true,
  "fiscalType": "CLOUD",
  "minionToMasterType": "CHOSEN",
  "masterRetailStores": [{
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/31b6349e-137a-11e6-9464-e4de0000005d/masterRetailStores",
      "type": "retailstore",
      "mediaType" : "application/json",
      "size" : 1,
      "limit" : 1000,
      "offset" : 0
    }
  }],
  "qrPayEnabled": true,
  "idQR" : "y8349n93",
  "qrTerminalId" : "fb736ft372",
  "qrBankPercent": 10,
  "qrAcquire" : {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/30fe66fd-137a-11e6-9464-e4de00000053",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  }
}
```

> Пример запроса с минимальным необходимым количеством полей

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/retailstore"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            {
              "name" : "retailstoretest",
              "organization" : {
                  "meta" : {
                  "href" : "https://api.moysklad.ru/api/remap/1.2/entity/organization/30fe66fd-137a-11e6-9464-e4de00000050",
                  "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type" : "organization",
                  "mediaType" : "application/json"
                }
              },
              "store" : {
                "meta" : {
                  "href" : "https://api.moysklad.ru/api/remap/1.2/entity/store/30fe66fd-137a-11e6-9464-e4de00000051",
                  "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type" : "store",
                  "mediaType" : "application/json"
                }
              },
              "priceType" : {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/30fe66fd-137a-11e6-9464-e4de00000052",
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
    "href" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000041",
    "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
    "type" : "retailstore",
    "mediaType" : "application/json",
    "uuidHref" : "https://online.moysklad.ru/app/#retailstore/edit?id=425999e6-bf2f-11e9-ee62-204c00000041"
  },
  "id" : "425999e6-bf2f-11e9-ee62-204c00000041",
  "accountId" : "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
  "owner" : {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/employee/872559f1-cbf3-11e1-9eb9-889ffa6f49fd",
      "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type" : "employee",
      "mediaType" : "application/json",
      "uuidHref" : "https://online.moysklad.ru/app/#employee/edit?id=872559f1-cbf3-11e1-9eb9-889ffa6f49fd"
    }
  },
  "shared" : false,
  "group" : {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/group/f7eb1e3b-fd2a-42f7-b799-b3d1e6b3bf43",
      "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
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
  "requiredFio" : false,
  "requiredPhone" : true,
  "requiredEmail" : false,
  "requiredBirthdate" : false,
  "requiredSex" : false,
  "requiredDiscountCardNumber" : false,
  "priceType" : {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/30fe66fd-137a-11e6-9464-e4de00000052",
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
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000041/cashiers",
      "type" : "cashier",
      "mediaType" : "application/json",
      "size" : 0,
      "limit" : 1000,
      "offset" : 0
    }
  },
  "organization" : {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/organization/30fe66fd-137a-11e6-9464-e4de00000050",
      "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type" : "organization",
      "mediaType" : "application/json",
      "uuidHref" : "https://online.moysklad.ru/app/#mycompany/edit?id=30fe66fd-137a-11e6-9464-e4de00000050"
    }
  },
  "store" : {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/store/30fe66fd-137a-11e6-9464-e4de00000051",
      "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
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
  "tobaccoMrcControlType" : "SAME_PRICE",
  "markingSellingMode" : "CORRECT_MARKS_ONLY",
  "sendMarksForCheck" : false,
  "allowCreateProducts" : true,
  "allowDeleteReceiptPositions" : true,
  "productFolders" : {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000041/productFolders",
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
  "qrPayEnabled": false
}
```

### Массовое создание и обновление Точек продаж
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) точек продаж.
В теле запроса нужно передать массив, содержащий JSON представления точек продаж, которые вы хотите создать или обновить.
Обновляемые точки продаж должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких точек продаж

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/retailstore"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '[
            {
              "name" : "retailstoretest",
              "active": true,
              "requiredFio" : false,
              "requiredPhone" : true,
              "requiredEmail" : false,
              "requiredBirthdate" : false,
              "requiredSex" : false,
              "requiredDiscountCardNumber" : false,
              "organization" : {
                  "meta" : {
                  "href" : "https://api.moysklad.ru/api/remap/1.2/entity/organization/30fe66fd-137a-11e6-9464-e4de00000050",
                  "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type" : "organization",
                  "mediaType" : "application/json"
                }
              },
              "store" : {
                "meta" : {
                  "href" : "https://api.moysklad.ru/api/remap/1.2/entity/store/30fe66fd-137a-11e6-9464-e4de00000051",
                  "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type" : "store",
                  "mediaType" : "application/json"
                }
              },
              "priceType" : {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/30fe66fd-137a-11e6-9464-e4de00000052",
                  "type": "pricetype",
                  "mediaType": "application/json"
                }
              }
            },{
              "meta" : {
                  "href" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000042",
                  "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
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
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000041",
      "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
      "type" : "retailstore",
      "mediaType" : "application/json",
      "uuidHref" : "https://online.moysklad.ru/app/#retailstore/edit?id=425999e6-bf2f-11e9-ee62-204c00000041"
    },
    "id" : "425999e6-bf2f-11e9-ee62-204c00000041",
    "accountId" : "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
    "owner" : {
      "meta" : {
        "href" : "https://api.moysklad.ru/api/remap/1.2/entity/employee/872559f1-cbf3-11e1-9eb9-889ffa6f49fd",
        "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type" : "employee",
        "mediaType" : "application/json",
        "uuidHref" : "https://online.moysklad.ru/app/#employee/edit?id=872559f1-cbf3-11e1-9eb9-889ffa6f49fd"
      }
    },
    "shared" : false,
    "group" : {
      "meta" : {
        "href" : "https://api.moysklad.ru/api/remap/1.2/entity/group/f7eb1e3b-fd2a-42f7-b799-b3d1e6b3bf43",
        "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
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
    "requiredFio" : false,
    "requiredPhone" : true,
    "requiredEmail" : false,
    "requiredBirthdate" : false,
    "requiredSex" : false,
    "requiredDiscountCardNumber" : false,
    "priceType" : {
      "meta" : {
        "href" : "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/30fe66fd-137a-11e6-9464-e4de00000052",
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
        "href" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000041/cashiers",
        "type" : "cashier",
        "mediaType" : "application/json",
        "size" : 0,
        "limit" : 1000,
        "offset" : 0
      }
    },
    "organization" : {
      "meta" : {
        "href" : "https://api.moysklad.ru/api/remap/1.2/entity/organization/30fe66fd-137a-11e6-9464-e4de00000050",
        "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type" : "organization",
        "mediaType" : "application/json",
        "uuidHref" : "https://online.moysklad.ru/app/#mycompany/edit?id=30fe66fd-137a-11e6-9464-e4de00000050"
      }
    },
    "store" : {
      "meta" : {
        "href" : "https://api.moysklad.ru/api/remap/1.2/entity/store/30fe66fd-137a-11e6-9464-e4de00000051",
        "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
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
    "tobaccoMrcControlType" : "SAME_PRICE",
    "markingSellingMode" : "CORRECT_MARKS_ONLY",
    "sendMarksForCheck" : false,
    "allowCreateProducts" : true,
    "allowDeleteReceiptPositions" : true,
    "productFolders" : {
      "meta" : {
        "href" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000041/productFolders",
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
    "qrPayEnabled": false
  }
  ,{
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000042",
      "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
      "type" : "retailstore",
      "mediaType" : "application/json",
      "uuidHref" : "https://online.moysklad.ru/app/#retailstore/edit?id=425999e6-bf2f-11e9-ee62-204c00000042"
    },
    "id" : "425999e6-bf2f-11e9-ee62-204c00000042",
    "accountId" : "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
    "owner" : {
      "meta" : {
        "href" : "https://api.moysklad.ru/api/remap/1.2/entity/employee/872559f1-cbf3-11e1-9eb9-889ffa6f49fd",
        "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type" : "employee",
        "mediaType" : "application/json",
        "uuidHref" : "https://online.moysklad.ru/app/#employee/edit?id=872559f1-cbf3-11e1-9eb9-889ffa6f49fd"
      }
    },
    "shared" : false,
    "group" : {
      "meta" : {
        "href" : "https://api.moysklad.ru/api/remap/1.2/entity/group/f7eb1e3b-fd2a-42f7-b799-b3d1e6b3bf43",
        "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
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
    "requiredFio" : false,
    "requiredPhone" : true,
    "requiredEmail" : false,
    "requiredBirthdate" : false,
    "requiredSex" : false,
    "requiredDiscountCardNumber" : false,
    "priceType" : {
      "meta" : {
        "href" : "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/30fe66fd-137a-11e6-9464-e4de00000042",
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
        "href" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000042/cashiers",
        "type" : "cashier",
        "mediaType" : "application/json",
        "size" : 1,
        "limit" : 1000,
        "offset" : 0
      }
    },
    "organization" : {
      "meta" : {
        "href" : "https://api.moysklad.ru/api/remap/1.2/entity/organization/30fe66fd-137a-11e6-9464-e4de00000040",
        "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type" : "organization",
        "mediaType" : "application/json",
        "uuidHref" : "https://online.moysklad.ru/app/#mycompany/edit?id=30fe66fd-137a-11e6-9464-e4de00000040"
      }
    },
    "store" : {
      "meta" : {
        "href" : "https://api.moysklad.ru/api/remap/1.2/entity/store/30fe66fd-137a-11e6-9464-e4de00000041",
        "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type" : "store",
        "mediaType" : "application/json",
        "uuidHref" : "https://online.moysklad.ru/app/#warehouse/edit?id=30fe66fd-137a-11e6-9464-e4de00000041"
      }
    },
    "acquire" : {
      "meta" : {
        "href" : "https://api.moysklad.ru/api/remap/1.2/entity/organization/30fe30a0-137a-11e6-9464-e4de00000152",
        "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
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
    "tobaccoMrcControlType" : "USER_PRICE",
    "markingSellingMode" : "CORRECT_MARKS_ONLY",
    "sendMarksForCheck" : false,
    "allowCreateProducts" : true,
    "allowDeleteReceiptPositions" : true,
    "productFolders" : {
      "meta" : {
        "href" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000042/productFolders",
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
    "reservePrepaidGoods" : true,
    "qrPayEnabled": false
  }
]
```

### Удалить точку продаж

**Параметры**

| Параметр | Описание                                                                             |
| :------- | :----------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Точки продаж. |

> Запрос на удаление Розничной точки продаж с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление Розничной точки продаж.

### Массовое удаление Точек продаж

В теле запроса нужно передать массив, содержащий JSON метаданных Точек продаж, которые вы хотите удалить.


> Запрос на массовое удаление Точек продаж. 

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
            "type": "retailstore",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
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

| Параметр | Описание                                                                             |
| :------- | :----------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Точки продаж. |
 
> Запрос на получение отдельной Розничной точки продаж с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление точки продаж.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/31b6349e-137a-11e6-9464-e4de0000005d",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
    "type": "retailstore",
    "mediaType": "application/json"
  },
  "id": "31b6349e-137a-11e6-9464-e4de0000005d",
  "accountId": "305f25aa-137a-11e6-9464-e4de00000001",
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
  "updated": "2016-05-06 18:09:54",
  "name": "Точка продаж",
  "externalCode": "AEhB1gX7inNaXzAGSbDeh0",
  "address": "125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
  "addressFull": {
    "postalCode": "125009",
    "country": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type": "country",
        "mediaType": "application/json"
      }
    },
    "region": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/region/metadata",
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
  "requiredFio" : false,
  "requiredPhone" : true,
  "requiredEmail" : false,
  "requiredBirthdate" : false,
  "requiredSex" : false,
  "requiredDiscountCardNumber" : false,
  "allowDeleteReceiptPositions": true,
    "priceType": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
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
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/31b6349e-137a-11e6-9464-e4de0000005d/cashiers",
      "type": "cashier",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/30f01af0-137a-11e6-9464-e4de0000004e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/30fe30a0-137a-11e6-9464-e4de00000050",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "acquire": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/30fe66fd-137a-11e6-9464-e4de00000053",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
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
  "minionToMasterType": "SAME_GROUP",
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
  },
  "qrPayEnabled": true,
  "idQR" : "y8349n93",
  "qrTerminalId" : "fb736ft372",
  "qrBankPercent": 10,
  "qrAcquire" : {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/30fe66fd-137a-11e6-9464-e4de00000053",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  }
}
```

### Изменить Точку продаж

Запрос на обновление существующей Точки продаж.

> Пример запроса на обновление Точки продаж

```shell
curl -X PUT
  "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000041"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
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
    "href" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000041",
    "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
    "type" : "retailstore",
    "mediaType" : "application/json",
    "uuidHref" : "https://online.moysklad.ru/app/#retailstore/edit?id=425999e6-bf2f-11e9-ee62-204c00000041"
  },
  "id" : "425999e6-bf2f-11e9-ee62-204c00000041",
  "accountId" : "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
  "owner" : {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/employee/872559f1-cbf3-11e1-9eb9-889ffa6f49fd",
      "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type" : "employee",
      "mediaType" : "application/json",
      "uuidHref" : "https://online.moysklad.ru/app/#employee/edit?id=872559f1-cbf3-11e1-9eb9-889ffa6f49fd"
    }
  },
  "shared" : false,
  "group" : {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/group/f7eb1e3b-fd2a-42f7-b799-b3d1e6b3bf43",
      "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
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
  "requiredFio" : false,
  "requiredPhone" : true,
  "requiredEmail" : false,
  "requiredBirthdate" : false,
  "requiredSex" : false,
  "requiredDiscountCardNumber" : false,
  "priceType" : {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/30fe66fd-137a-11e6-9464-e4de00000052",
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
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000041/cashiers",
      "type" : "cashier",
      "mediaType" : "application/json",
      "size" : 0,
      "limit" : 1000,
      "offset" : 0
    }
  },
  "organization" : {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/organization/30fe66fd-137a-11e6-9464-e4de00000050",
      "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type" : "organization",
      "mediaType" : "application/json",
      "uuidHref" : "https://online.moysklad.ru/app/#mycompany/edit?id=30fe66fd-137a-11e6-9464-e4de00000050"
    }
  },
  "store" : {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/store/30fe66fd-137a-11e6-9464-e4de00000051",
      "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type" : "store",
      "mediaType" : "application/json",
      "uuidHref" : "https://online.moysklad.ru/app/#warehouse/edit?id=30fe66fd-137a-11e6-9464-e4de00000051"
    }
  },
  "acquire" : {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/organization/30fe30a0-137a-11e6-9464-e4de00000152",
      "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
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
  "tobaccoMrcControlType" : "SAME_PRICE",
  "markingSellingMode" : "ALL",
  "sendMarksForCheck" : false,
  "allowCreateProducts" : true,
  "allowDeleteReceiptPositions" : true,
  "productFolders" : {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/retailstore/425999e6-bf2f-11e9-ee62-204c00000041/productFolders",
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
  "fiscalType": "MASTER",
  "minionToMasterType": "ANY",
  "qrPayEnabled": false
}
```
