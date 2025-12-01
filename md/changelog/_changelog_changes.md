## Список последних изменений
Список последних изменений в API Remap 1.2

### 01-12-2025
**Добавлено**
- Механизм упоминаний в [комментарии к задаче](#/dictionaries/task#3-kommentarii-zadachi)
- [Уведомления](#/notification/notification-types-details#3-novoe-upominanie-v-kommentaryah-zadach) по упоминаниям в комментариях задач

### 18-11-2025
**Изменено**
- Значение поля `name` в сущности [склада](#/dictionaries/store#2-sklad) должно быть уникальным.

### 17-11-2025
**Добавлено**
- Модуль `mod__nct__kz` с информацией из Национального каталога товаров в сущность [Товар](#/dictionaries/product#3-tovary) `+Только для Казахстана`

### 13-11-2025
**Добавлено**
- Ошибка [26115](#/errors#3-kody-oshibok-dlya-proizvodstvennogo-zadaniya)

### 05-11-2025
#### Добавлено
- Поле `cheque` в [Розничную продажу](#/documents/retaildemand#2-roznichnaya-prodazha)

### 30-10-2025
**Добавлено**
- Ошибка [19005](#/errors#3-kody-oshibok-dlya-vozvratov)

### 09-10-2025
**Добавлено**
- К каждому заголовку добавлена кнопка «Копировать для LLM» — для удобства в генерации промптов и работы с моделями.

### 02-10-2025
**Изменено**
- Подраздел [Пересчет расчетного остатка в инвентаризации](#/documents/inventory#3-pereschet-raschetnogo-ostatka-v-inventarizacii) перенесен из раздела Общие сведения в раздел Инвентаризация.
  
### 01-10-2025
**Добавлено**
- Настройки НДС для [юридических лиц](#/dictionaries/organization#4-polya-rekvizitov)

### 25-09-2025
**Добавлено**
- Условие автоматического отключения JSON API пользователю в [Ограничения](#/restrictions#2-ogranicheniya)

### 22-09-2025
**Добавлено**
- Поле `distributionRequired` в [Этап производства](#/dictionaries/processingstage#2-etap-proizvodstva)

**Изменено**
- Доступ к отчету [Краткий отчет об остатках](#/reports/report-stock#3-kratkij-otchet-ob-ostatkah) расширен: помимо администраторов, его могут просматривать сотрудники с пермиссией Остатки.

### 15-09-2025
**Добавлено**
- Новый тип уведомлений [Завершение создания Вывода из оборота на основании Отгрузок](#/notification/notification-types-details#3-zavershenie-sozdaniya-vyvoda-iz-oborota-na-osnovanii-otgruzok).

**Изменено**
- Разрешен Способ вывода из оборота `PACKING` (Фасовка) для Категории маркированной продукции `PET_FOOD` (Корма для животных) в документ [Вывод из оборота](#/documents/retireorder#4-tip-markiruemoj-produkcii)

### 02-09-2025
**Добавлено**
- Поле `downloadPermanentHref` в [Изображениях](#/dictionaries/images#4-poluchit-postoyannuyu-ssylku-na-izobrazhenie-tovara-komplekta-ili-modifikacii)

### 25-08-2025
**Добавлено**
- Поле `applicable` в [Выполнение этапа производства](#/documents/productionStageCompletion#2-vypolnenie-etapa-proizvodstva)

### 12-08-2025
**Добавлено**
- Информация по работе с заголовком [Accept-Language](#/general#3-zagolovok-accept-language)

### 07-08-2025
**Добавлено**
- Добавлен новый тип уведомлений [Новое событие в отслеживаемом объекте](#/notification/notification-types-details#3-novoe-sobytie-v-otslezhivaemom-obuekte)
- Добавлена новая группа уведомлений [Отслеживаемые события](#/notification/notification-settings#3-struktura-dannyh)

### 31-07-2025
**Добавлено**
- Поля связей документов в [Внутренний заказ](#/documents/internalOrder#2-vnutrennij-zakaz)
- Поля связей документов в [Заказ кодов маркировки](#/documents/emissionorder#2-zakaz-kodov-markirovki)
- Поля связей документов в [Заказ покупателя](#/documents/customerOrder#2-zakaz-pokupatelya)
- Поля связей документов в [Заказ поставщику](#/documents/purchaseOrder#2-zakaz-postavshiku)
- Поля связей документов в [Перемещение](#/documents/move#2-peremeshenie)
- Поля связей документов в [Приемка](#/documents/supply#2-priemka)
- Поля связей документов в [Производственное задание](#/documents/productionTask#2-proizvodstvennoe-zadanie)
- Ошибка [17024](#/errors#3-kody-oshibok-dlya-dokumentov)

### 29-07-2025
**Добавлено**
- Тип маркируемой продукции `VEGETABLE_OIL` (Растительные масла) в документ [Вывод из оборота](#/documents/retireorder#4-tip-markiruemoj-produkcii)
- Тип маркируемой продукции `PET_FOOD` (Корма для животных) в документ [Вывод из оборота](#/documents/retireorder#4-tip-markiruemoj-produkcii)

### 24-07-2025
**Поправлена**
- Опечатка типа данных c int на float для полей `volume` и `weight` для [комплекта](#/dictionaries/bundle#2-komplekt)

### 22-07-2025
**Добавлено**
- Поле `minimumStock` в сущность [модификация](#/dictionaries/variant#2-modifikaciya) для работы с неснижаемыми остатками

### 17-07-2025
**Добавлено**а
- Ошибка [13005](#/errors#3-kody-oshibok-dlya-otchetov-ostatkov)

### 16-07-2025
**Добавлено**
- Типы компаний региона Казахстан для [контрагентов](#/dictionaries/counterparty#4-tip-kontragenta)
- Типы компаний региона Казахстан для [юридических лиц](#/dictionaries/organization#4-tip-yurlica)
- Реквизиты региона Казахстан для [контрагентов](#/dictionaries/counterparty#5-rekvizity-kazahstana)
- Реквизиты региона Казахстан для [юридических лиц](#/dictionaries/organization#5-rekvizity-kazahstana)

### 10-07-2025
**Добавлено**а
- Ошибка при работе с печатными формами [33013](#/errors#3-kody-oshibok-dlya-pechatnyh-form)

### 09-07-2025
**Добавлено**
- Добавлена новая [ошибка 3043](#/errors#3-obshie-oshibki-validacii)

### 03-07-2025
**Добавлено**
- Новые типы маркированной продукции `VEGETABLE_OIL` для растительных масел, `PET_FOOD` для кормов для животных для [Товара](#/dictionaries/product#3-tovary) и [Комплекта](#/dictionaries/bundle#3-komplekty)

### 02-07-2025
**Исправлено**
- Актуализирована документация [Настройки пользователя](#/dictionaries/usersettings#2-nastrojki-polzovatelya)

### 01-07-2025
**Добавлено**
- Плановая дата завершения этапа `plannedEndDate` в запросе [Производственных этапов](#/documents/productionTask#3-proizvodstvennye-etapy)

### 17-06-2025
**Добавлено**
- Поле `giftCards` в [Розничную продажу](#/documents/retaildemand#2-roznichnaya-prodazha)

### 09-06-2025
**Добавлено**
- Описание параметра `fields` [Fields](#/general#3-chto-takoe-fields)
- Краткий [Отчет на остатки по ячейкам](#/reports/report-stock#3-poluchit-kratkij-otchet-ob-ostatkah-po-yachejkam)

### 03-06-2025
**Добавлено**
- Поля `description`, `defect` в [Выполнение этапа производства](#/documents/productionStageCompletion#2-vypolnenie-etapa-proizvodstva)
- Ошибки [26211-26213](#/errors#3-kody-oshibok-dlya-vypolnenij-etapov-proizvodstva)
- Тип маркируемой продукции `BEER_ALCOHOL` (Пиво и слабоалкогольная продукция) в документ [Вывод из оборота](#/documents/retireorder#4-tip-markiruemoj-produkcii)
- Способ вывода `MISMATCH` (Пересортица по кодам) в документ [Вывод из оборота](#/documents/retireorder#4-tip-markiruemoj-produkcii)

### 27-05-2025
**Добавлено**
- Новые типы документов для [Ленты Событий](#/dictionaries/eventfeed#2-lenta-sobytij)

**Изменено**
- [Особенности поведения при создании Вывода из оборота](#/documents/retireorder#4-osobennosti-povedeniya-pri-sozdanii-vyvoda-iz-oborota) для способа вывода `DISTANCE`

### 26-05-2025
**Добавлено**
- Поле **declaration** с информацией о прослеживаемости импортных товаров в позиции документов [отгрузка](#/documents/demand#4-pozicii-otgruzki), [розничная продажа](#/documents/retaildemand#4-pozicii-roznichnoj-prodazhi), [списание](#/documents/loss#4-pozicii-spisaniya)

### 20-05-2025
**Добавлено**
- Добавлена новая [ошибка 3042](#/errors#3-obshie-oshibki-validacii)

### 15-05-2025
**Изменено**
- Описание поля `accountCountry` в [Настройках компании](#/dictionaries/companysettings#2-nastrojki-kompanii)

### 14-05-2025
**Добавлено**
- Поле `agent` в документе [Вывод кодов маркировки из оборота](#/documents/retireorder#4-atributy-sushnosti)
- Значения для поля `trackingType` в документе [Вывод кодов маркировки из оборота](#/documents/retireorder#4-tip-markiruemoj-produkcii): `BICYCLE`, `VETPHARMA`, `SOFT_DRINKS`, `WATER`, `SEAFOOD`
- Значение `DONATION` для поля `retireOrderType` в документе [Вывод кодов маркировки из оборота](#/documents/retireorder#4-sposob-vyvoda-iz-oborota)

### 13-05-2025
**Добавлено**
- Описание и примеры удаления неснижаемых остатков по складам через использование эндпоинта на массовое удаление для [товар](#/dictionaries/product#3-tovary)

### 28-04-2025
**Добавлено**
- Поле `advancePaymentSum` в [Розничную продажу](#/documents/retaildemand#2-roznichnaya-prodazha)
- Ошибка `18007`

**Изменено**
- Описание [работы с полями оплаты розничной продажи](#/documents/retaildemand#4-rabota-s-polyami-oplaty-roznichnoj-prodazhi)
- Текст ошибок `18000`, `18005` и `18006`

### 25-04-2025
**Добавлено**
- Поле `minimumStock` в сущность [товар](#/dictionaries/product#3-tovary) для работы с неснижаемыми остатками

### 10-04-2025
**Добавлено**
- Описание отключения JSON API пользователю в [Ограничения](#/restrictions#2-ogranicheniya)

### 18-03-2025
**Добавлено**
- Поле `fiasCode__ru` для [контрагентов](#/dictionaries/counterparty#5-adres)
- Поле `fiasCode__ru` для [юридических лиц](#/dictionaries/organization#5-adres)

### 10-03-2025
**Добавлено**
- Поддержка комплектов в документах, содержащих договор комиссии:
  - Отгрузка
  - Заказ покупателя
  - Возврат покупателя
  - Полученный отчет комиссионера

**Изменено**
- Описание `32001` кода [ошибки](#/errors#3-kody-oshibok-dlya-dogovorov)

**Удалено**
- `18002` код [ошибки](#/errors#3-kody-oshibok-dlya-prodazhotgruzok)

### 05-03-2025
**Добавлены**
- Документы [Заказ кодов маркировки](#/documents/emissionorder#2-zakaz-kodov-markirovki), [Вывод кодов маркировки из оборота](#/documents/retireorder#2-vyvod-kodov-markirovki-iz-oborota)
- Ошибки [57000-57002](#/errors#3-kody-oshibok-dlya-markirovki), [57100-57108](#/errors#3-kody-oshibok-dlya-zakaza-kodov-markirovki)

### 04-03-2025
**Изменено**
- Описание поля `marksCheckMode` в [Точку продаж](#/dictionaries/retailstore#2-tochka-prodazh), настройка проверки КМ перед продажей в ГИС МТ

**Добавлено**
- Поле `archived` в [Серии](#/dictionaries/consignment#2-seriya)

### 13-02-2025
**Добавлено**
- Типы компаний региона Узбекистан для [контрагентов](#/dictionaries/counterparty#4-tip-kontragenta)
- Типы компаний региона Узбекистан для [юридических лиц](#/dictionaries/organization#4-tip-yurlica)
- Реквизиты региона Узбекистан для [контрагентов](#/dictionaries/counterparty#5-rekvizity-uzbekistana)
- Реквизиты региона Узбекистан для [юридических лиц](#/dictionaries/organization#5-rekvizity-uzbekistana)

### 12-02-2025
**Добавлено**
- Условие автоматического отключения JSON API пользователю в [Ограничения](#/restrictions#2-ogranicheniya)

### 27-01-2025
**Добавлено**
- Добавлены [регональные заголовки](#/general#3-regionalnye-zagolovki)
- Ошибка  [16114](#/errors#3-kody-oshibok-dlya-tovarov) Ошибка сохранения товара: маркированный товар не может быть разливным

### 16-01-2025
**Добавлено**
- Поле `service` в [Выполнение этапа производства](#/documents/productionStageCompletion#2-vypolnenie-etapa-proizvodstva)
- Возможность назначать исполнителем не только сотрудника но и контрагента в [Выполнении этапа производства](#/documents/productionStageCompletion#2-vypolnenie-etapa-proizvodstva)
- поля `files`, `instruction`в [Производственные этапы](#/documents/productionTask#3-proizvodstvennye-etapy)

### 15-01-2025
**Добавлено**
- Добавлен параметр `withRecalculate` в эндпоинт [Краткий отчет об остатках](#/reports/report-stock#3-kratkij-otchet-ob-ostatkah).
- Новые типы маркированной продукции `BICYCLE` для велосипедов, `NABEER` для безалкогольного пива, `SEAFOOD` для икры и морепродуктов, `VETPHARMA` для ветеринарных препаратов для [Товара](#/dictionaries/product#3-tovary) и [Комплекта](#/dictionaries/bundle#3-komplekty)

### 25-12-2024
**Добавлено**
- Ошибки [25063](#/errors#3-kody-oshibok-dlya-tehnologicheskih-kart), [26114](#/errors#3-kody-oshibok-dlya-proizvodstvennogo-zadaniya), [26209, 26210](#/errors#3-kody-oshibok-dlya-vypolnenij-etapov-proizvodstva)
- Поле `standardHourCost` в [Этап производства](#/dictionaries/processingstage#2-etap-proizvodstva), Стоимость нормо-часа
- Поля `standardHourCost`, `enableHourAccounting` в [Этап техкарты](#/dictionaries/processingplan#3-tehkarty)
- Поля `standardHourCost`, `enableHourAccounting` в [Производственные этапы](#/documents/productionTask#3-proizvodstvennye-etapy)
- Поля `standardHourCost`, `enableHourAccounting` в [Выполнение этапа производства](#/documents/productionStageCompletion#2-vypolnenie-etapa-proizvodstva)

### 23-12-2024
**Изменены**
- Эндпоинты для работы с [Настройками уведомлений](#/notification/notification-settings#2-nastrojki-uvedomlenij)

### 17-12-2024
**Добавлен**
- Параметр фильтрации `entityType` в [Отчетах Прибыльность](#/reports/report-pnl#2-otchet-pribylnost)

### 02-12-2024
**Добавлено**
- Вывод дополнительных полей в элементы [Пользовательских справочников](#/dictionaries/customentity#2-polzovatelskij-spravochnik)
- Вывод метаданных дополнительных полей в метаданные пользовательских справочников
- Поле `ID` в метаданные пользовательского справочника

**Изменено**
- Актуализирована документация по [Пользовательским справочникам](#/dictionaries/customentity#2-polzovatelskij-spravochnik)

### 19-11-2024
**Добавлено**
- Поле `salesMargin` в [Отчет Прибыльность](#/reports/report-pnl#2-otchet-pribylnost)

### 01-11-2024
**Добавлена**
- Ошибка [4003](#/errors#3-kody-oshibok-dlya-tochek-prodazh) при создании\изменении точки продаж productFolders содержит родительскую группу товаров и ee дочерние группы одновременно

### 29-10-2024
**Добавлена**
- Ошибка [71000](#/errors#3-kody-oshibok-dlya-serij) при создании серии в качестве ассортимента указана серия

### 24-10-2024
**Добавлено**
- Поле `advancePaymentVat` в [Юрлица](#/dictionaries/organization#2-yurlico), Налоговая ставка для авансов для плательщиков НДС

### 17-10-2024
**Изменено**
- Изменено одно из [правил бана](#/restrictions#2-ogranicheniya)

### 08-10-2024
**Добавлена**
- Возможность фильтровать архивные товары в [отчете оборотов](#/reports/report-turnover#2-otchet-oboroty)

### 30-09-2024
**Добавлено**
- Возможность обновлять и удалять события в [Ленте Событий](#/dictionaries/eventfeed#2-lenta-sobytij)
- Ошибка [2026](#/errors#3-oshibki-formata)

### 16-09-2024
**Добавлено**
- Описание ошибки [70000](#/errors#3-kody-oshibok-dlya-lenty-sobytij)
- Возможность добавлять события в [Ленту Событий](#/dictionaries/eventfeed#2-lenta-sobytij)

### 03-09-2024
**Добавлены**
- Поле "склад материалов" (materialStore) в [Этапы Техкарты](#/dictionaries/processingstage#3-etapy)
- Поле "склад материалов" (materialStore) в [Производственные этапы](#/documents/productionTask#3-proizvodstvennye-etapy)

### 28-08-2024
**Добавлен**
- Параметр фильтрации `productionTask` в запросе списка [Выполнений этапов производства](#/documents/productionStageCompletion#3-poluchit-spisok-vypolnenij-etapov-proizvodstva)

### 26-08-2024
**Добавлены**
- Параметр фильтрации `moment` в запросе списка [Выполнений этапов производства](#/documents/productionStageCompletion#3-poluchit-spisok-vypolnenij-etapov-proizvodstva)
- Параметры фильтрации `moment`, `organization`, `deliveryPlannedMoment` в запросе списка [Производственных заданий](#/documents/productionTask#2-proizvodstvennoe-zadanie)

### 22-08-2024
**Добавлен**
- Флаг "Без закрывающих документов" для [Исходящего платежа](#/documents/payment-out#2-ishodyashij-platezh)
- Флаг "Без закрывающих документов" для [Расходного ордера](#/documents/cashout#2-rashodnyj-order)

### 19-08-2024
**Добавлено**
- Новый тип маркированной продукции `SOFT_DRINKS` для безалкогольных напитков для [Товара](#/dictionaries/product#3-tovary) и [Комплекта](#/dictionaries/bundle#3-komplekty)

### 22-07-2024
**Добавлена**
- Возможность указывать несколько складов в [отчете оборотов](#/reports/report-turnover#2-otchet-oboroty)

### 16-07-2024
**Добавлено**
- Добавлено описание получения ссылки на [изображение](#/dictionaries/images#4-poluchit-postoyannuyu-ssylku-na-izobrazhenie-tovara-komplekta-ili-modifikacii)

### 12-07-2024
**Добавлен**
- Новый [отчет По документам номенклатуры](#/reports/report-by-operations#2-otchet-po-dokumentam-nomenklatury)

### 1-07-2024
**Изменено**
- Добавлена пермиссия viewProductCostAndProfit в список пермиссий [контекста запроса сотрудника](#/general#3-kontekst-zaprosa-sotrudnika)

### 26-06-2024
**Добавлены**
- Условие автоматического отключения JSON API пользователю в [Ограничения](#/restrictions#2-ogranicheniya)
- Условие автоматического отключения вебхука в [Ограничения](#/restrictions#2-ogranicheniya)

### 24-06-2024
**Добавлено**
- Ошибка [17023](#/errors#3-kody-oshibok-dlya-dokumentov)

### 17-06-2024
**Добавлена**
- Ошибка [3039](#/errors#3-obshie-oshibki-validacii)

### 10-06-2024
**Добавлено**
- Новый тип маркированной продукции `MEDICAL_DEVICES` для медизделий и кресел-колясок для [Товара](#/dictionaries/product#3-tovary) и [Комплекта](#/dictionaries/bundle#3-komplekty)
- Поле "нормо-часы" (standardHour) в [Этапы Техкарты](#/dictionaries/processingplan#2-tehkarta)
- Поле "нормо-часы" (standardHourUnit) в [Выполнения этапов производства](#/documents/productionStageCompletion#2-vypolnenie-etapa-proizvodstva)
- Поле "нормо-часы" (standardHourUnit) в [Производственные этапы](#/documents/productionTask#3-proizvodstvennye-etapy)

### 29-05-2024
**Добавлена**
- Информация о работе с [Лентой Событий](#/dictionaries/eventfeed#2-lenta-sobytij)

### 16-05-2024
**Добавлен**
- Заголовок `X-Lognex-WebHook-DisableByPrefix` для выборочного отключения [вебхуков](#/dictionaries/webhook#3-primer-vebhuka)

### 06-05-2024
**Добавлена**
- Возможность фильтрации по полю **store** в [счете покупателя](#/documents/invoice-out#2-schet-pokupatelyu) и [счете поставщика](#/documents/invoice-in#2-schet-postavshika)

### 02-05-2024
**Добавлено**
- Ограничение на поле типа дата, подробнее в разделе [Формат даты и времени](#/general#3-format-daty-i-vremeni)

### 24-04-2024
**Добавлено**
- Поле `allPerformers` в [этапы производства](#/dictionaries/processingstage#2-etap-proizvodstva), Признак доступности назначения на этап любого сотрудника
- Поле `performers` в [этапы производства](#/dictionaries/processingstage#2-etap-proizvodstva), Массив метаданных возможных исполнителей
- Ошибка [25035](#/errors#3-kody-oshibok-dlya-tehnologicheskih-processov)
- Добавлен новый тип уведомлений [Новое упоминание в ленте событий](#/notification/notification-types-details#3-novoe-upominanie-v-lente-sobytij)
- Добавлена новая группа уведомлений [Упоминания сотрудников](#/notification/notification-settings#3-struktura-dannyh)

### 23-04-2024
**Добавлено**
- Поле `salary` в [Сотрудник](#/dictionaries/employee#2-sotrudnik)

### 22-04-2024
**Добавлено**
- Поле `nextPositions` в [Техпроцесс](#/dictionaries/processingprocess#2-tehprocess), следующие позиции для позиции техпроцесса
- Ошибки [25033-25034](#/errors#3-kody-oshibok-dlya-tehnologicheskih-processov)

### 17-04-2024
**Добавлена**
- Ошибка [3038](#/errors#3-obshie-oshibki-validacii)

### 09-04-2024
**Добавлено**
- Новая роль [Сотрудник производства](#/dictionaries/employee#3-zapros-na-poluchenie-roli-sotrudnika-proizvodstva) для [Сотрудника](#/dictionaries/employee#2-sotrudnik)
- Ошибки [43030](#/errors#3-kody-oshibok-dlya-sotrudnikov)

### 02-04-2024
**Добавлено**
- Возможность получения [шаблонов](#/documents/common-info#3-shablony-dokumentov) документов по токену решения

### 28-03-2024
**Добавлено**
- Возможность привязки [Заказа поставщика](#/documents/purchaseOrder#2-zakaz-postavshiku) к [Заказу покупателя](#/documents/customerOrder#2-zakaz-pokupatelya)

### 26-03-2024
**Добавлено**
- Обновлен список штрихкодов для [Товара](#/dictionaries/product#5-shtrihkody), [Модификации](#/dictionaries/variant#5-shtrihkody), [Услуги](#/dictionaries/service#5-shtrihkody), [Комплекта](#/dictionaries/bundle#5-shtrihkody)

### 25-03-2024
**Добавлено**
- Поле `costDistributionType` в [Техкарту](#/dictionaries/processingplan#2-tehkarta), тип распределения себестоимости

### 11-03-2024
**Добавлено**
- Поле `sendMarksToChestnyZnakOnCloud` в [Точку продаж](#/dictionaries/retailstore#2-tochka-prodazh), позволяющее управлять отправкой кассой-миньоном КМ на проверку в ЧЗ

### 07-03-2024
**Добавлено**
- Создание [шаблона Перемещения на основании](#/documents/move#3-shablon-peremesheniya-na-osnove) Заказа покупателя

### 06-03-2024
**Добавлено**
- Эндпоинт [Серийные номера](#/dictionaries/thing#2-serijnyj-nomer)

### 04-03-2024
**Добавлено**
- Эндпоинты работы с [Производственным заданием](#/documents/productionTask#2-proizvodstvennoe-zadanie)
- Эндпоинты работы с [Выполнением этапа](#/documents/productionStageCompletion#2-vypolnenie-etapa-proizvodstva)
- Ошибки [26101-26112](#/errors#3-kody-oshibok-dlya-proizvodstvennogo-zadaniya)
- Ошибки [26200-26208](#/errors#3-kody-oshibok-dlya-vypolnenij-etapov-proizvodstva)
- Ошибки [3035, 3036](#/errors#3-obshie-oshibki-validacii)
- Ошибки [1089, 1092](#/errors#2-oshibki)

### 26-02-2024
**Добавлено**
- Поля связей документов Приемки и Отгрузки в [Перемещение](#/documents/move#2-peremeshenie)

### 07-02-2024
**Добавлено**
- Поле `marksCheckMode` в [Точку продаж](#/dictionaries/retailstore#2-tochka-prodazh), настройка проверки КМ перед продажей в ГИС МТ

### 31-01-2024
**Изменено**
- Добавлено поле `state` в [Задачу](#/dictionaries/task#2-zadacha) - сущность [Тип задачи](#/dictionaries/task#4-tip-zadachi)

### 11-01-2024
**Добавлено**
- Поле `materialProcessingPlan` в [Техкарту](#/dictionaries/processingplan#2-tehkarta), техкарта для материала
- Ошибка [25062](#/errors#3-kody-oshibok-dlya-tehnologicheskih-kart)

### 26-12-2023
**Добавлены**
- Добавлен новый тип маркированной продукции `SANITIZER` для антисептиков
- Ошибка [3037](#/errors#3-obshie-oshibki-validacii)

### 25-12-2023
**Изменено**
- Для документа `Корректировка баланса контрагента` добавлена возможность указывать сотрудника в поле `agent`
- Документ `Корректировка баланса контрагента` переименован в [Корректировка взаиморасчетов](#/documents/counterpartyadjustment#2-korrektirovka-vzaimoraschetov). Путь к документу в АПИ не менялся для совместимости
- Для документа [Исходящий платеж](#/documents/payment-out#2-ishodyashij-platezh) добавлена возможность указывать сотрудника в поле `agent`

### 22-12-2023
**Добавлен**
- Добавлен новый тип маркированной продукции `FOOD_SUPPLEMENT` для биологически активных добавок к пище

### 28-11-2023
**Добавлено**
- Поле `showBeerOnTap` в [Точку продаж](#/dictionaries/retailstore#2-tochka-prodazh), настройка отображения вскрытых кегов на кассе

### 27-11-2023
**Изменено**
- Приведение документации обязательности полей у [Договора](#/dictionaries/contract#2-dogovor) в корректное состояние

**Добавлена**
- Ошибка [11002](#/errors#3-kody-oshibok-dlya-statusov)

### 15-11-2023
**Добавлена**
- Ошибка [1091](#/errors#2-oshibki) при указании некорректного значения для перечислимого параметра

### 14-11-2023
**Добавлена**
- Ошибка [3034](#/errors#3-obshie-oshibki-validacii)
- Опечатка: удален тег `+Обязательное при ответе` для поля **owner** в документах

### 26-10-2023
**Добавлено**
- Добавлен новый тип маркированной продукции `BEER_ALCOHOL` для разливных слабоалкогольных напитков
- Удален неактуальный код ошибки [16104](#/errors#3-kody-oshibok-dlya-tovarov)
- Описание и примеры удаления вложенных сущностей в сущностях через использование эндпоинта на массовое удаление для [Комплектов](#/dictionaries/bundle#3-massovoe-udalenie-komponentov-komplekta), [Задач](#/dictionaries/task#3-massovoe-udalenie-komentariev-k-zadache), Техкарт([материалы](#/dictionaries/processingplan#3-massovoe-udalenie-materialov), [продукты](#/dictionaries/processingplan#3-massovoe-udalenie-produkta)) и [Техпроцессов](#/dictionaries/processingprocess#3-massovoe-udalenie-pozicij-tehprocessa)

### 16-10-2023
**Добавлено**
- Добавлено поле `barcode` в [Ячейку склада](#/dictionaries/store#3-yachejki-sklada)
- Ошибка [67006](#/errors#3-kody-oshibok-dlya-yacheek-i-zon-sklada)

### 12-10-2023
**Добавлено**
- Описание и примеры удаления позиций в документах через использование эндпоинта на массовое удаление позиций

### 06-10-2023
**Добавлено**
- Добавлено поле `syncAgents` в [Точку продаж](#/dictionaries/retailstore#2-tochka-prodazh), выгружает покупателей для работы оффлайн.

### 05-10-2023
**Добавлено**
- Добавлены новые режимы reserve и inTransit [в краткий отчёт по остаткам](#/reports/report-stock#3-poluchit-kratkij-otchet-ob-ostatkah)

### 20-09-2023
**Удалены**
- Ставший неактуальным `5004` код [ошибки](#/errors#3-kody-oshibok-dlya-otchetov-komissionera).
- Ограничение на товар и его количество в позиции возврата на склад комиссионера для [полученного отчета комиссионера](#/documents/commissionreportin#2-poluchennyj-otchet-komissionera).

### 14-09-2023
**Добавлено**
- Использование обязательного [сжатия содержимого ответов](#/general#3-szhatie-soderzhimogo-otvetov)

**Изменен**
- Домен в примерах документации на api.moysklad.ru

### 06-09-2023
**Добавлено**
- Добавлено поле `allowDeleteReceiptPositions` в [Точку продаж](#/dictionaries/retailstore#2-tochka-prodazh), разрешающее удалять позиции в чеке.

### 31-08-2023
**Добавлена**
- Фильтрация по `retailShift` в [Розничную продажу](#/documents/retaildemand#2-roznichnaya-prodazha),
  [Розничный возврат](#/documents/retail-sales-return#2-roznichnyj-vozvrat),
  [Внесение денег](#/documents/retaildrawercashin#2-vnesenie-deneg),
  [Выплата денег](#/documents/retaildrawercashout#2-vyplata-deneg)

### 15-08-2023
**Добавлено**
-  Добавлены поля `sex`, `birthDate` См. [Поля реквизитов контрагентов](#/dictionaries/counterparty#5-polya-rekvizitov)
-  Информация о новом типе поля `sex` См. [Пол контрагента](#/dictionaries/counterparty#4-pol-kontragenta)

### 11-08-2023
**Добавлено**
- Описание, с отличием поведения в [изменении позиции техпроцесса](#/dictionaries/processingprocess#3-izmenit-poziciyu-tehprocessa) апи от web-интерфейса
- Добавлены поля `requiredFio`, `requiredPhone`, `requiredEmail`, `requiredBirthdate`, `requiredSex` и `requiredDiscountCardNumber` в [Точку продаж](#/dictionaries/retailstore#2-tochka-prodazh), позволяющие управлять обязательностью заполнения полей при создании контрагентов.

### 28-07-2023
**Исправлено**
- Заменено "Заказ покупателя (salesreturn)" на "Заказ покупателя (customerorder)" в [шаблонах документов](#/documents/common-info#3-shablony-dokumentov)

### 19-07-2023
**Исправлено**
- Добавлены закрывающие скобки в примере запроса в разделе [массовое удаление отгрузок](#/documents/demand#3-massovoe-udalenie-otgruzok)

**Добавлено**
- Значение "Начало работы" в допустимые значения [Стартового экрана](#/dictionaries/usersettings#4-startovyj-ekran)

### 17-07-2023
**Изменено**
- Права для доступа к [Отчету Прибыльность](#/reports/report-pnl#2-otchet-pribylnost) исправлены с `Прибыль и убытки` на `Прибыльность`

### 07-07-2023
**Изменено**
- Исправлена ссылка на раздел [Валюта в документах](#/documents/common-info#3-valyuta-v-dokumentah)

### 06-07-2023
**Добавлена**
- Возможность чтения, создания, изменения и удаления позиций возврата на склад комиссионера для [полученного отчета комиссионера](#/documents/commissionreportin#2-poluchennyj-otchet-komissionera).
- Новый `5004` код [ошибки](#/errors#3-kody-oshibok-dlya-otchetov-komissionera).

### 26-06-2023
**Добавлено**
- Описание перемещения документа в [корзину](#/general#3-udalenie-v-korzinu)

### 19-06-2023
**Добавлено**
- Поле "оплата труда" (labourCost) в [Этапы Техкарты](#/dictionaries/processingplan#2-tehkarta)

### 24-05-2023
**Добавлен**
- Новый `2029` код [ошибки](#/errors#2-oshibki).

### 17-05-2023
**Добавлена**
- Возможность работы с каналами продаж для [полученного](#/documents/commissionreportin#2-poluchennyj-otchet-komissionera) и [выданного отчетов комиссионера](#/documents/commissionreportout#2-vydannyj-otchet-komissionera).
- Поле "Прочие расходы" для [полученного отчета комиссионера](#/documents/commissionreportin#2-poluchennyj-otchet-komissionera).
- Возможность создания и удаления продуктов и материалов в [Техоперации](#/documents/processing#3-sozdat-tehoperaciyu).
- Возможность создания [Техоперации](#/documents/processing#3-sozdat-tehoperaciyu) без привязки Техкарты.
- Новый `25003` код [ошибки](#/errors#3-kody-oshibok-dlya-tehnologicheskih-kart).

**Удалены**
- Ставшие неактуальными `25001` и `25002` коды [ошибок](#/errors#3-kody-oshibok-dlya-tehnologicheskih-kart).

### 12-05-2023
**Добавлен**
- Параметр фильтрации `withSubFolders` в [Ассортименте](#/dictionaries/assortment#2-assortiment), позволяющий фильтровать по заданной группе товаров без учета ее подгрупп.

### 11-05-2023
**Добавлено**
- Добавлен `1088` код [ошибки](#/errors#2-oshibki).

### 10-04-2023
**Добавлена**
- Возможность работы с затратами для Техкарт [Техкарт](#/dictionaries/processingplan#2-tehkarta).
- Дополнены примеры в документации с затратами Техкарты.
- Добавлен `25061` код [ошибки](#/errors#3-kody-oshibok-dlya-tehnologicheskih-kart).

### 04-04-2023
**Изменено**
- При создании Техкарты поле *materials* стало необязательным.
- Техкарту можно привязывать к определенному техпроцессу
- Материалы Техкарты можно привязывать к определенному этапу техпроцесса.
- Дополнены примеры в документации с материалами Техкарты.
- Добавлен `25060` код [ошибки](#/errors#3-kody-oshibok-dlya-tehnologicheskih-kart).
- Документация по Техкартам перенесана из вкладки документов в [сущности](#/dictionaries/processingplan#2-tehkarta)

### 30-03-2023
**Добавлено**
- Добавлен `29009` код [ошибки](#/errors#3-kody-oshibok-dlya-komplektov).

### 19-02-2023
**Изменено**
- Исправлены примеры в документации: поправили json в ответах, убрали дубли методов в примерах запросов, заменили значения цен на значения с плавающей точкой.

### 13-02-2023
**Добавлена**
- Для сущности [Техпроцесс](#/dictionaries/processingprocess#2-tehprocess) возможность создания, редактирования, удаления через АПИ.

### 07-02-2023
**Добавлена**
- Возможность привязывать/отвязывать перемещения к/от [Заказа покупателя](#/documents/customerOrder#3-zakazy-pokupatelej).
- Описание [Пример привязывания перемещений к заказу покупателя](#/documents/common-info#3-primer-privyazki-3)
- Добавлен `3031` код [ошибки](#/errors#3-obshie-oshibki-validacii).

### 31-01-2023
**Добавлена**
- Информация по созданию, обновлению и удалению [этапов производства](#/dictionaries/processingstage#2-etap-proizvodstva)

### 29-01-2023
**Добавлено**
- Добавлена дополнительная информация по *downloadHref* в *miniature* в общих сведениях.

### 20-01-2023
**Добавлена**
- Сущность [Техпроцесс](#/dictionaries/processingprocess#2-tehprocess)

### 17-01-2023
**Добавлена**
- Сущность [Этап производства](#/dictionaries/processingstage#2-etap-proizvodstva)

### 16-01-2023
**Изменено**
- Актуализирована информация по тарифным ограничениям при использовании зон и ячеек склада, теперь они доступны на всех тарифах

### 10-01-2023
**Добавлено**
- Добавлено новое поле *downloadHref*, содержащее прямую ссылку на скачивание миниатюр изображения, в *miniature*.

### 09-01-2023
**Добавлено**
- Параметр фильтрации `agentTag` в [Отчетах Прибыльность](#/reports/report-pnl#2-otchet-pribylnost)

### 16-12-2022
**Добавлено**
- Добавлен `21001` код [ошибки](#/errors#3-kody-oshibok-dlya-peremeshenij).

### 14-12-2022
**Добавлено**
- Дополнено описание [ошибок](#/errors#3-kody-oshibok-dlya-yacheek-i-zon-sklada) при работе с ячейками и зонами. Добавлены ошибки 67002, 67003, 67004, 67005, 67006.
- Добавлена информация по созданию, обновлению и удалению [зон](#/dictionaries/store#3-zony-sklada) и [ячеек](#/dictionaries/store#3-yachejki-sklada) в [складах](#/dictionaries/store#3-sklady)

### 12-12-2022
**Добавлено**
- Добавлен `15004` код [ошибки](#/errors#3-kody-oshibok-dlya-modifikacij).

### 01-12-2022
**Добавлено**
- Ячейки в позиции [Приемки](#/documents/supply#2-priemka)
- Ячейки в позиции [Оприходования](#/documents/enter#2-oprihodovanie)
- Ячейки в позиции [Перемещения](#/documents/move#2-peremeshenie)
- Ячейки в позиции [Списания](#/documents/loss#2-spisanie)
- Ячейки в позиции [Отгрузки](#/documents/demand#2-otgruzka)
- Ячейки в позиции [Возврата покупателя](#/documents/sales-return#2-vozvrat-pokupatelya)
- Ячейки в позиции [Возврата поставщику](#/documents/purchase-return#2-vozvrat-postavshiku)
- Описание [ошибок](#/errors#3-kody-oshibok-dlya-yacheek-i-zon-sklada) при работе с ячейками и зонами

### 20-11-2022
**Добавлено**
- Добавлена информация по работе с [зонами](#/dictionaries/store#3-zony-sklada) и [ячейками](#/dictionaries/store#3-yachejki-sklada) в [складах](#/dictionaries/store#3-sklady)

### 18-11-2022
**Добавлено**
- Поддержка протокола change-handler в [Розничной продаже](#/documents/retaildemand#2-roznichnaya-prodazha).

### 16-11-2022
**Добавлено**
- Параметр фильтрации `productFolder` с поддержкой (в том числе и исключающей) фильтрации по нескольким группам товаров в [Отчетах Прибыльность](#/reports/report-pnl#2-otchet-pribylnost)
- Параметр фильтрации `withSubFolders` в [Отчетах Прибыльность](#/reports/report-pnl#2-otchet-pribylnost), позволяющий фильтровать по заданной группе товаров без учета ее подгрупп.

**Изменено**
- Параметр `product` получил поддержку фильтрации по нескольким товарам в [Отчетах Прибыльность](#/reports/report-pnl#2-otchet-pribylnost)
- Параметр `product` получил поддержку исключающей фильтрации по товарам в [Отчетах Прибыльность](#/reports/report-pnl#2-otchet-pribylnost)

### 09-11-2022
**Добавлено**
- Поддержка протокола change-handler в [Возврате покупателю](#/documents/sales-return#3-vozvraty-pokupatelej).

### 01-11-2022
**Добавлено**
- сущность [Ставка НДС](#/dictionaries/taxrate#2-stavka-nds) в раздел Сущности
- [пермиссии сущности taxrate](#/dictionaries/employee#3-rabota-s-pravami-sotrudnika) (Ставка НДС)
- данные о пермиссиях сущности taxrate (Ставка НДС) добавлены в возвращаемые JSON в разделе [Пользовательские роли](#/dictionaries/custom-role#3-poluchit-polzovatelskuyu-rol)

### 26-10-2022
**Добавлено**
- Добавлен [Веб-хук на изменение остатков](#/dictionaries/webhookstock#2-vebhuk-na-izmenenie-ostatkov).
- Добавлен параметр `changedSince` в [эндпоинт текущих остатков](#/reports/report-stock#3-kratkij-otchet-ob-ostatkah).

### 14-10-2022
**Добавлено**
- Добавлен `3030` код [ошибки](#/errors#3-obshie-oshibki-validacii).

### 12-10-2022
**Добавлено**
- Поле moves в [Заказ покупателя](#/documents/customerOrder#3-zakazy-pokupatelej).
- Поле prepayments в [Заказ покупателя](#/documents/customerOrder#3-zakazy-pokupatelej).
- Поле customerOrder в [Перемещение](#/documents/move#3-peremesheniya).

### 03-10-2022
**Добавлено**
- тип контекста `registration` в [Аудите](#/audit/audit#1-audit)
- тип события `registration` в [Аудите](#/audit/audit#1-audit)

### 13-09-2022
**Добавлено**
- Добавлен новый эндпоинт [Остатков по документам](#/reports/report-stock#3-ostatki-po-dokumentam).

### 06-09-2022
**Добавлено**
- Поддержка протокола change-handler в [Счете поставщика](#/documents/invoice-in#2-schet-postavshika).

### 29-08-2022
**Добавлено**
- Пермиссии для документа "Вывод из оборота (ОСУ)" в [правах сотрудника](#/dictionaries/employee#3-rabota-s-pravami-sotrudnika)

### 04-08-2022
**Добавлено**
- Описание [ошибки](#/errors#3-kody-oshibok-dlya-shablonov) `36001`

### 01-08-2022
**Добавлено**
- Поддержка накладных расходов (поле `overhead`) в протоколе update-provider в
  [Отгрузке](#/documents/demand#2-otgruzka),
  [Перемещении](#/documents/move#2-peremeshenie) и
  [Оприходовании](#/documents/enter#2-oprihodovanie).

### 29-07-2022
**Описано**
- Ранее неявное ограничение в 255 символов на длину url адресов для [Веб-хуков](#/dictionaries/webhook#2-vebhuki)

**Добавлено**
- Ошибка [30010](#/errors#3-oshibki-formata)
- Поддержка протокола update-provider в [Перемещении](#/documents/move#2-peremeshenie).

### 28-07-2022
**Добавлено**
- Поддержка протокола update-provider в [Оприходовании](#/documents/enter#2-oprihodovanie).

### 26-07-2022
**Добавлено**
- Поддержка накладных расходов (поле `overhead`) в протоколе update-provider в [Приемке](#/documents/supply#2-priemka).

### 25-07-2022
**Добавлено**
- Поддержка протокола update-provider в [Отгрузке](#/documents/demand#2-otgruzka).
- Новый тип уведомлений [На счет зачислены бонусные деньги](#/notification/notification-types-details#3-na-schet-zachisleny-bonusnye-dengi).

### 22-07-2022
**Добавлено**
Добавлено описание операторов фильтрации штрихкодов для [товаров](#/dictionaries/product#2-tovar),
[комплектов](#/dictionaries/bundle#2-komplekt),
[модификаций](#/dictionaries/variant#2-modifikaciya),
[серий](#/dictionaries/consignment#2-seriya) и
[услуг](#/dictionaries/service#2-usluga)

### 19-07-2022
**Добавлено**
- Дополнено описаниение раздела Адрес у
  [Контрагента](#/dictionaries/counterparty#5-adres),
  [Юрлица](#/dictionaries/organization#5-adres),
  [Точки продаж](#/dictionaries/retailstore#6-atributy-sushnosti-adres),
  [Склада](#/dictionaries/store#4-atributy-sushnosti-adres),
  [Заказа покупателя](#/documents/customerOrder#4-atributy-sushnosti-adres-dostavki),
  [Отгрузки](#/documents/demand#4-atributy-sushnosti-adres-dostavki),
  об отсутствии поддержки `null`.

### 07-07-2022
**Добавлено**
- Поддержка протокола change-handler в [Счете покупателю](#/documents/invoice-out#2-schet-pokupatelyu).

### 06-07-2022
**Изменено**
- Разделы в [Отчетах остатков](#/reports/report-stock#2-otchet-ostatki)

### 04-07-2022
**Добавлено**
- Поддержка протокола update-provider в [Приемке](#/documents/supply#2-priemka).

### 16-06-2022
**Добавлено**
- В описании [Отчетов](#/reports/report-stock#1-otchety) добавлен список операторов, с помощью которых выполняется фильтрация по атрибутам.

### 15-06-2022
**Добавлено**
- В описании [Документов](#/documents/common-info#1-dokumenty) добавлен список операторов, с помощью которых выполняется фильтрация по атрибутам.

### 14-06-2022
**Добавлено**
- В описании [Сущностей](#/dictionaries/assortment#1-sushnosti) добавлен список операторов, с помощью которых выполняется фильтрация по атрибутам.

### 09-06-2022
**Изменено**
- Добавлены поля `printed` и `published` в [Договор](#/dictionaries/contract#2-dogovor)

### 03-06-2022
**Добавлено**
- Добавлено поле `authorApplication` в [Вебхуках](#/dictionaries/webhook#2-vebhuki)

### 02-06-2022
**Изменено**
- Перенесено описание фильтрации по дополнительным полям в [Общие Сведения](#/general#4-filtraciya-po-dopolnitelnym-polyam)

### 26-05-2022
**Добавлено**
- Добавлено поле `salesChannel` в [Счет покупателю](#/documents/invoice-out#2-schet-pokupatelyu)

### 20-05-2022
**Добавлено**
- Поддержка полей `incomingDate` и `incomingNumber` для протокола change-handler в [Приемке](#/documents/supply#2-priemka).

### 13-05-2022
**Добавлено**
- Описание [ошибки](#/errors#2-oshibki) `1048`

### 28-04-2022
**Добавлено**
- Параметр фильтрации `salesChannel` в [Отчетах Прибыльность](#/reports/report-pnl#2-otchet-pribylnost), позволяющий фильтровать по каналам продаж

### 27-04-2022
**Добавлено**
- Описание необходимых пермиссий в отчетах [Показатели](#/reports/dashboard#2-pokazateli), [Показатели продаж и заказов](#/reports/report-sales-orders#2-pokazateli-prodazh-i-zakazov), [Показатели контрагентов](#/reports/report-counterparty#2-otchet-pokazateli-kontragentov), [Деньги](#/reports/report-money#2-otchet-dengi)

### 18-04-2022
**Добавлено**
- Параметр фильтрации withSubFolders в [Отчете остатков](#/reports/report-stock#2-otchet-ostatki), позволяющий фильтровать по заданной группе товаров без учета ее подгрупп.

**Документация**
- Добавлено описание [Группа техкарт](#/dictionaries/processingplanfolder#2-gruppa-tehkart)

### 01-04-2022
**Добавлено**
- Поле `onTap` в [Товарах](#/dictionaries/product#2-tovar)
- Ошибки [16011, 16012, 16013, 16014, 16015, 16113](#/errors#3-kody-oshibok-dlya-tovarov)

**Изменено**
- Описание полей `isSerialTrackable`, `ppeType`, `alcoholic`, `weighed` в [Товарах](#/dictionaries/product#2-tovar)

### 23-03-2022
**Добавлено**
- Добавлено поле `accumulationDiscount` в скидки Контрагента, См. [Поля реквизитов контрагентов](#/dictionaries/counterparty#5-polya-rekvizitov)

**Изменено**
- Дополнительные поля типов Файл и Флажок не могут быть обязательными [Работа с дополнительными полями](#/general#3-rabota-s-dopolnitelnymi-polyami)

### 22-03-2022
**Добавлено**
- Добавлено поле `show` в атрибуты описания доп. поля. См. [Работа с дополнительными полями](#/general#3-rabota-s-dopolnitelnymi-polyami)

### 18-03-2022
**Изменено**
- Добавлена пермиссия viewCashFlow в список пермиссий [контекста запроса сотрудника](#/general#3-kontekst-zaprosa-sotrudnika)
**Добавлено**
- Фильтрация по доп полям в [Ассортименте](#/dictionaries/assortment#2-assortiment)

### 17-03-2022
**Добавлено**
- Добавлен отчёт [Текущих Остатков](#/reports/report-stock#3-kratkij-otchet-ob-ostatkah).
- Отчет [Прибыльность по Каналам продаж](#/reports/report-pnl#3-poluchit-pribylnost-po-kanalam-prodazh)
- Описание отчета [Прибыльность по Каналам продаж](#/reports/report-pnl#3-poluchit-pribylnost-po-kanalam-prodazh)

**Изменено**
- Часть ссылок в [Отчетах Прибыльность](#/reports/report-pnl#2-otchet-pribylnost)

### 15-03-2022
**Изменено**
- Изменено время ожидания ответа на отправку [Веб-хука](#/dictionaries/webhook#2-vebhuki) с 5 секунд до 1.5 секунд.
- Отключены переотправки по истечении времени ожидания ответа

**Добавлено**
- Поля `stock`, `reserve`, `inTransit`, `quantity` могут быть дробными в [Отчёте Остатки](#/reports/report-stock#2-otchet-ostatki).

### 10-03-2022
**Добавлено**
- Информация о новом типе маркированной продукции (Никотиносодержащая продукция) в [Товарах](#/dictionaries/product#2-tovar)

### 18-02-2022
**Добавлено**
- Пермиссии для документа формирование АТК в [правах сотрудника](#/dictionaries/employee#3-rabota-s-pravami-sotrudnika)

### 13-12-2021
**Изменено**
- Подразделы [Печать документов](#/documents/print#2-pechat-dokumentov) и [Публикация документов](#/documents/publication#2-publikaciya-dokumentov) перенесены в раздел Документы.

### 10-12-2021
**Добавлено**
- Поддержка протокола change-handler в [Оприходовании](#/documents/enter#2-oprihodovanie).

### 08-12-2021
**Добавлено**
- Поддержка протокола change-handler в [Списании](#/documents/loss#2-spisanie).

### 02-12-2021
**Добавлено**
- Поддержка протокола change-handler в [Перемещении](#/documents/move#2-peremeshenie).

### 30-11-2021
**Добавлено**
- Возможность фильтрации [ассортимента](#/dictionaries/assortment#2-assortiment) по доп. полям.

### 26-11-2021
**Добавлено**
- Пермиссии для документа отчет об использовании в [правах сотрудника](#/dictionaries/employee#3-rabota-s-pravami-sotrudnika)

### 25-11-2021
**Добавлено**
- Добавление [системных валют](#/dictionaries/currency#3-sozdat-sistemnuyu-valyutu)

### 24-11-2021
**Документация**
- Исправлено перебрасывание в начало раздела при переходе по ссылке из другого раздела документации на заголовок 4 уровня или больше

### 23-11-2021
**Добавлено**
- Поддержка протокола change-handler в [Приемке](#/documents/supply#2-priemka).

### 16-11-2021
**Добавлено**
- Возможность получения и применения [сохраненных фильтров](#/dictionaries/named-filter#2-sohranennye-filtry) других сотрудников для администраторов
- Описание ошибок [63004 и 63005](#/errors#3-kody-oshibok-dlya-sohranennogo-filtra)
- Поддержка протокола update-provider в [Заказе покупателя](#/documents/customerOrder#2-zakaz-pokupatelya).

**Изменено**
- Изменено максимальное ограничение на получение записей [аудита](#/audit/audit#1-audit) с 25 на 100 записей

### 15-11-2021
**Добавлено**
- Добавлено поле `salesChannel` в [Заказ покупателя](#/documents/customerOrder#2-zakaz-pokupatelya), [Отгрузку](#/documents/demand#2-otgruzka) и [Возврат покупателя](#/documents/sales-return#2-vozvrat-pokupatelya)

### 08-11-2021
**Добавлено**
- Эндпоинт для [Каналов продаж](#/dictionaries/saleschannel#2-kanal-prodazh)

### 01-11-2021
**Добавлено**
- Поддержка протокола change-handler в [Отгрузке](#/documents/demand#2-otgruzka).

### 21-10-2021
**Добавлено**
- Добавлен [эндпоинт](#/dictionaries/tracking-code#2-kody-markirovki) для работы с Кодами маркировки в позиции документа

### 15-10-2021
**Добавлено**
- Фильтрация по полю `paymentPlannedMoment` у [Счета покупателя](#/documents/invoice-out#2-schet-pokupatelyu)
- Фильтрация по полю `supplier` в [Отчетах прибыльность](#/reports/report-pnl#2-otchet-pribylnost)
- Фильтрация по номеру счета [Контрагента](#/dictionaries/counterparty#2-kontragent) `filter=accounts.accountnumber`. [Описание](#/general#3-filtraciya-vyborki-s-pomoshyu-parametra-filter)

### 12-10-2021
**Добавлено**
- Возможность изменения и отображения полей [Элементов пользовательского справочника](#/dictionaries/customentity#3-elementy-polzovatelskogo-spravochnika): `group`, `owner`, `shared`

### 08-10-2021
**Добавлено**
- Ошибка [2028](#/errors#3-oshibki-formata)

### 07-10-2021
**Документация**
- Добавлено описание [Контекста запроса сотрудника](#/general#3-kontekst-zaprosa-sotrudnika)

### 30-09-2021
**Изменено**
- Информация о новом типе маркированной продукции (Упакованная вода) в [Товарах](#/dictionaries/product#2-tovar)

### 23-09-2021
**Добавлено**
- Описание полей посылаемых [веб-хуков](#/dictionaries/webhook#2-vebhuki) и добавлены поля `auditContext`, `updatedFields`, `moment`, `uid`
- Новая ошибка [30009](#/errors#3-kody-oshibok-dlya-veb-hukov)

### 20-09-2021
**Добавлено**
- Добавлены поля `shipmentAddress` и `shipmentAddressFull` в [Заказ покупателя](#/documents/customerOrder#2-zakaz-pokupatelya) и [Отгрузку](#/documents/demand#2-otgruzka)
- Исправлен список возможных атрибутов у документа [Списание](#/documents/loss#2-spisanie)

### 16-09-2021
**Изменено**
- Дополнено описание раздела webhook.

### 15-09-2021
**Добавлено**
- Возможность работы с упаковками [Модификаций](#/dictionaries/variant#2-modifikaciya), [фильтрация ассортимента](#/dictionaries/assortment#5-nastrojki-pravil-shtrihkodov-dlya-sushnostej-spravochnika) по штрихкоду упаковок модификаций.
- Добавлена фильтрация по Доп. полям. и атрибут фильтрации supplier для [Отчет обороты](#/reports/report-turnover#2-otchet-oboroty)
- Документ [Корректировка баланса контрагента](#/documents/counterpartyadjustment#2-korrektirovka-vzaimoraschetov)

### 08-09-2021
**Изменено**
- Исправлена валидация дат в фильтрах запросов. При передаче даты до начала 1970 года — возвращается ошибка о неправильном значении даты. [Подробнее](#/general#3-format-daty-i-vremeni)

### 31-08-2021
**Добавлено**
- Добавлен эндпоинт получения списка [сохраненных фильтров](#/dictionaries/named-filter#2-sohranennye-filtry)
  для сущностей, документов
- Добавлено применение [сохраненного фильтра](#/dictionaries/named-filter#2-sohranennye-filtry) для сущностей и документов

### 17-08-2021
**Добавлено**
- Возможность работы с модификациями для материалов и продуктов [Техкарт](#/dictionaries/processingplan#2-tehkarta).
  Для этого введено новое поле **assortment**.
- Новая ошибка [3028](#/errors#3-obshie-oshibki-validacii)

### 30-07-2021
**Добавлено**
- Добавлены атрибуты фильтрации type и withoutturnover для [Отчет обороты](#/reports/report-turnover#2-otchet-oboroty)
- Новый заголовок управления временем жизни ссылок на скачивание изображений и файлов. Описание в [общих сведениях](#/general#3-ssylki-na-fajly)

### 29-07-2021
**Добавлено**
- [Фильтрация ассортимента](#/dictionaries/assortment#4-nastrojki-spravochnika) по штрихкоду, наименованию группы товаров, типу и использованию серийных номеров

### 28-07-2021
**Добавлено**
- Возможность работать с файлами в комментариях к [задачам](#/dictionaries/task#2-zadacha)
- Возможность expand поля **masterRetailStores** у [точек продаж](#/dictionaries/retailstore#2-tochka-prodazh)

### 26-07-2021
**Изменено**
- Добавлены поля `vatEnabled`, `effectiveVatEnabled` и `useParentVat` в [Группы товаров](#/dictionaries/productFolder#2-gruppa-tovarov), [Товары](#/dictionaries/product#2-tovar), [Комплекты](#/dictionaries/bundle#2-komplekt), [Услуги](#/dictionaries/service#2-usluga)
- Добавлено поле `vatEnabled` в позиции [Документов](#/documents/common-info#1-dokumenty)
- Добавлены ошибки `16010` и `17021`

### 09-07-2021
**Добавлено**
- Новый ресурс [Обороты по товару с детализацией по документам](#/reports/report-turnover#3-oboroty-po-tovaru-s-detalizaciej-po-dokumentam)

### 05-07-2021
**Добавлено**
- Новый тип уведомлений о скором окончании действия доступа к аккаунту Facebook

### 01-07-2021
**Исправлено**
- Исправлено описание обязательности полей отчета обороты при ответе

### 28-06-2021
**Добавлено**
- Пермиссии на документы маркировки в [правах сотрудника](#/dictionaries/employee#3-rabota-s-pravami-sotrudnika)

### 25-06-2021
**Добавлено**
- Новый ресурс [Отчет обороты](#/reports/report-turnover#2-otchet-oboroty)

### 10-06-2021
**Документация**
- Добавлено описание параметров фильтрации выборки `momentFrom` и `momentTo` в отчетах прибыльности

### 08-06-2021
**Изменено**
- Изменены лимиты по [вебхукам](#/dictionaries/webhook#2-vebhuki): выделены отдельные лимиты для решений

### 03-06-2021
**Добавлено**
- Возможность перехода к соответствующему разделу с описанием ошибки по ссылке в `errors.moreInfo`

**Документация**
- Исправлено описание атрибута `pack` у позиций документов

### 02-06-2021
**Добавлено**
- По остаткам комплектов в позициях документа, добавлена возможность получения cost, quantity и available.

### 01-06-2021
**Добавлено**
- Возможность получать и изменять пользовательские роли от лица решения
- Исправлена ошибка: при изменении пермиссий у роли сотрудника, был невозможен вход в систему

### 31-05-2021
**Добавлено**
- Добавлены поля `welcomeBonusesEnabled`, `welcomeBonusesValue`, `welcomeBonusesMode` в [Бонусную программу](#/dictionaries/bonus-program#2-bonusnaya-programma)
- Возможность получать коды маркировки товаров и транспортных упаковок в формате тега 1162 (поле `trackingCodes_1162`) для документа типа [Отгрузка](#/documents/demand#4-kody-markirovki-tovarov-i-transportnyh-upakovok-v-formate-tega-1162).

### 28-05-2021
**Документация**
- Добавлена колонка `Expand` в таблицы описания атрибутов сущностей в разделах: "Сущности" и "Документы"

### 27-05-2021
**Добавлено**
- Добавлены новые поля `authorizedHosts`, `authorizedIpNetwork`, `authorizedIpNetmask` для ограничения доступа по ip в [эндпоинте управления правами сотрудника](#/dictionaries/employee#3-rabota-s-pravami-sotrudnika)

### 21-05-2021
**Документация**
- Исправлено описание пермиссий при работе с пользовательскими справочниками

**Добавлено**
- Исправлена отметка об обязательности складов для части документов
- Добавлен новый эндпоинт для системных ролей
- Добавлен новый эндпоинт (crud) для пользовательских ролей
- Новый ресурс [отмены асинхронной задачи](#/async#3-otmena-asinhronnoj-zadachi)
- Ошибка [61007](#/errors#3-kody-oshibok-dlya-asinhronnogo-obmena)

**Исправлено**
- В примерах исправлен url получения метаданных [Комплектов](#/dictionaries/bundle#2-komplekt)
  и [Услуг](#/dictionaries/service#2-usluga)

### 20-05-2021
**Добавлено**
- Добавлена возможность редактировать поле discounts у контрагента
- Раскомплектовывание комплектов на составляющие компоненты при создании [шаблона заказа поставщику на основе](#/documents/purchaseOrder#3-shablon-zakaza-postavshiku-na-osnove)
- Добавлена новая схема работы с ошибками и новый статус `API_ERROR` в
  [асинхронном обмене](#/async#2-asinhronnyj-obmen)

### 17-05-2021
**Документация**
- В Позиции Отгрузки добавлен список комплектов
- Исправлено описание `product.packs.barcodes`, `consignment.barcodes`, `bundle.components`, `consignment.image`
- Исправлено описание атрибута `images` в товарах, комплектах и модификациях
- Исправлено указание на обязательность в ответе полей `uom.accountId`, `uom.group`, `product.minimumBalance`, `country.accountId`, `demand.vatSum`, `counterparty.state`
- Исправлено указание на обязательность в ответе поля `owner` в сущностях

### 11-05-2021
**Добавлено**
- Возможность выполнять запрос [получения Ассортимента](#/dictionaries/assortment#2-assortiment)
  [асинхронно](#/async#2-asinhronnyj-obmen)

### 05-05-2021
**Изменено**
- Исправлена ошибка, при которой пользователь мог просматривать и добавлять комментарий к задаче, без пермиссии к просмотру задач

### 29-04-2021
**Добавлено**
- Поле `earnWhileRedeeming` в [Бонусную программу](#/dictionaries/bonus-program#2-bonusnaya-programma)
- Возможность выполнять запрос [получения списка Контрагентов](#/dictionaries/counterparty#3-poluchit-spisok-kontragentov)
  [асинхронно](#/async#2-asinhronnyj-obmen)

### 28-04-2021
**Изменено**
- Для атрибутов
  AttributeMetadata.required ,
  AgentAccount.isDefault, WebHook.enabled, Product.weighed
  при передаче null значения выводится ошибка 2016
- Для документа [`Оприходования`](#/documents/enter#2-oprihodovanie)
  теперь учитывается пермиссия `Видеть себестоимость, цену закупки и прибыль товаров`. При отсутствии пермиссии в json представлении
  документа будет отсутствовать поле `sum`, а в позициях не будет поля `price`.

### 27-04-2021
**Добавлено**
- Очередь для [асинхронных задач](#/async#2-asinhronnyj-obmen)
- Обновлен список [ограничений](#/restrictions#2-ogranicheniya) (добавлена информация про размер очереди асинхронных задач)
- Новый статус `PENDING` для [асинхронных задач](#/async#2-asinhronnyj-obmen)
- Эндпоинт получения [списка статусов асинхронных задач](#/async#3-statusy-asinhronnyh-zadach)
- Поле **meta** для [асинхронных задач](#/async#2-asinhronnyj-obmen)
- Возможность создавать [вебхуки](#/dictionaries/webhook#2-vebhuki) для [асинхронных задач](#/async#2-asinhronnyj-obmen)

### 26-04-2021
**Изменено**
- Исправлен некорректный url в примерах json [Управления настройками справочника ассортимента](#/dictionaries/assortment#3-poluchit-nastrojki-spravochnika-tovarov)

**Добавлены**
- Новые поля `directorPosition`, `directorSign`, `chiefAccountSign`, `stamp` в [Юрлице](#/dictionaries/organization#2-yurlico)

**Изменено**
- Исправлено неточное описание привязок документов в общих сведениях

### 24-04-2021
**Документация**
- Добавлен новый раздел [Подписка компании](#/dictionaries/companysubscription#2-podpiska-kompanii)

**Изменено**
- Исправлена работа с документом [Возврат поставщику](#/documents/purchase-return#2-vozvrat-postavshiku):
  добавлена проверка совпадения значения поля `vatEnabled` при создании и обновлении документа на основании [Приемки](#/documents/supply#2-priemka)

### 23-04-2021
**Добавлено**
- Добавлены поля authorApplication в [Задачи](#/dictionaries/task#2-zadacha) и [События Контрагента](#/dictionaries/counterparty#5-sobytiya-kontragenta)

### 22-04-2021
**Документация**
- Добавлено описание поля **code** для ряда сущностей. Где оно было, убран атрибут `Только для чтения`

### 15-04-2021
**Добавлено**
- Возможность работы с файлами, прикрепленными к [Задаче](#/dictionaries/task#2-zadacha)

### 13-04-2021
**Добавлено**
- Добавлена новая ошибка [17020](#/errors#3-kody-oshibok-dlya-dokumentov) - товар из упаковки в позиции документа не соответствует товару, указанному в данной позиции
- Добавлена валидация товара из упаковки в позиции документа

### 09-04-2021
**Документация**
- Переработан раздел [Работа с доп. полями](#/general#3-rabota-s-dopolnitelnymi-polyami)
- Добавлен тип MetaArray - объект с полями **meta** и **rows**
- Упоминание Array(Meta) изменено на Array(Object) или на MetaArray
- Изменен формат описания поля **trackingCodes** в Отгрузках и Приёмках
- Добавлен раздел [Валюта в документах](#/documents/common-info#3-valyuta-v-dokumentah) с описанием поля **rate**
- В описание добавлены отсутствовавшие поля **meta** в Счета и Контактные лица Контрагента
- Убрано возможное разночтение в описании поля **tags** Контрагента
- Для полей **consignee** и **carrier** в Отгрузках и Счетах-фактурах выданных добавлена пометка про тип сущностей
- Удалена пометка об обязательности поля **house** в адресах
- Исправлен тип поля **certificateNumber** у Юрлиц на корректный

**Изменено**
- Изменен регистр ключевого слова в [заказе покупателя](#/documents/customerOrder#2-zakaz-pokupatelya)
- Изменен регистр ключевого слова в [заказе поставщику](#/documents/purchaseOrder#2-zakaz-postavshiku)

### 07-04-2021
**Добавлено**
- Добавлен [пример](#/reports/report-stock#3-rasshirennyj-otchet-ob-ostatkah) в отчет остатки по параметру includeRelated

### 06-04-2021
**Добавлено**
- Добавлено [описание](#/reports/report-pnl#3-poluchit-pribylnost-po-tovaram) отчета по прибыльности по товарам
- Добавлено [описание](#/reports/report-pnl#3-poluchit-pribylnost-po-modifikaciyam) отчета по прибыльности по модификациям

### 26-03-2021
**Добавлено**
- Возможность выполнять запросы [асинхронно](#/async#2-asinhronnyj-obmen)
- Статья в [воркбук](#/workbook/workbook-async#2-rabota-s-asinhronnym-obmenom)
- Описание ошибок [61000-61006](#/errors#3-kody-oshibok-dlya-asinhronnogo-obmena)

### 23-03-2021
**Добавлено**
- Поле `postponedBonusesDelayDays` в [Бонусную программу](#/dictionaries/bonus-program#2-bonusnaya-programma)
- Поля `transactionStatus`, `executionDate` и `categoryType` в [Бонусные операции](#/dictionaries/bonus-operation#2-bonusnaya-operaciya)

### 01-03-2021
**Документация**
- Исправлен запрос в примере на [массовое удаление модификаций](#/dictionaries/variant#3-massovoe-udalenie-modifikacij)

### 18-02-2021
**Изменено**
- Изменены CSS стили

### 11-02-2021
**Изменено**
- Исправлены битые ссылки в [Общих сведениях](#/general#2-obshie-svedeniya)
- Исправлено указание на обязательность в ответе поля `vatIncluded` в документах

### 04-02-2021
**Изменено**
- Добавлен новый тип уведомлений [Уведомление из сценария](#/notification/notification-types-details#3-uvedomlenie-iz-scenariya)
- Добавлена новая группа уведомлений [Сценарии](#/notification/notification-settings#3-struktura-dannyh)

### 02-02-2021
**Добавлено**
- Новые [эндпоинты для упралвения правами сотрудника](#/dictionaries/employee#3-rabota-s-pravami-sotrudnika) и [эндпоинты для доступа сотрудника к основному сервису
  МойСклад](#/dictionaries/employee#3-aktivaciya-sotrudnika) в раздел [Сотрудники](#/dictionaries/employee#2-sotrudnik)
- Новые ошибки [3023-3024](#/errors#3-obshie-oshibki-validacii) и [43007-43029](#/errors#3-kody-oshibok-dlya-sotrudnikov)

### 27-01-2021
**Документация**
- Изменен тип поля quantity с Int на Float в разделе описания вложенной [Упаковки товара](#/dictionaries/product#5-upakovki-tovara)
- Удалено описание полей объекта доп. полей из документов.
  Его по-прежнему можно найти в разделе [Работа с доп. полями](#/general#3-rabota-s-dopolnitelnymi-polyami)
- Исправлен ряд опечаток в этом разделе

### 20-01-2021
**Изменено**
- Добавлены поля `printed` и `published` в [документах](#/documents/common-info#1-dokumenty)

### 18-01-2021
**Изменено**
- Для доступа к аудиту не нужно быть администратором

### 22-12-2020
**Изменено**
- Исправлен http метод в запросе на удаление группы товаров с GET на DELETE в [Группа товаров](#/dictionaries/productFolder#3-udalit-gruppu-tovarov)
  и тип полей `minPrice`, `buyPrice` c Double на Object в [Товаре](#/dictionaries/product#2-tovar)

**Документация**
- Из параметров удален `states`, добавленные туда по ошибке в [метаданных Розничных смен](#/documents/retailshift#3-metadannye-roznichnyh-smen)

### 17-12-2020
**Изменено**
- Исправлен тип qrBankPercent с Int на Double в [Точке продаж](#/dictionaries/retailstore#2-tochka-prodazh)

### 04-12-2020
**Документация**
- Исправлены неточности в разделе [Отчет остатки](#/reports/report-stock#2-otchet-ostatki)

### 30-11-2020
**Документация**
- Исправлено форматирование таблицы описания полей результата запроса на [получение дополнительных полей](#/general#3-dopolnitelnye-polya-sushnostej)

### 26-11-2020
**Добавлено**
- Фильтрация по `assortment` для [Документов](#/general#4-dopolnitelnye-filtry)

### 21-11-2020
**Изменено**
- Описание ограничений в [Общих сведениях](#/general#2-obshie-svedeniya)

### 05-11-2020
**Добавлено**
- Эндпоинт [Управления настройками справочника контрагентов](#/dictionaries/counterparty#3-nastrojki-spravochnika-kontragentov)

### 02-11-2020
**Добавлено**
- добавлены коды [ошибок 1083, 1084](#/errors#3-oshibki-formata).

### 29-10-2020
**Добавлено**
- Исправлена ошибка регистра кода сущности в  [Группе товаров](#/dictionaries/productFolder#2-gruppa-tovarov)

### 23-10-2020
**Добавлено**
- Поля `idQR` и `qrTerminalId` в [Точку продаж](#/dictionaries/retailstore#2-tochka-prodazh)

### 21-10-2020
**Изменено**
- Описание ограничений в [Общих сведениях](#/general#2-obshie-svedeniya)
- Добавлена возможность создавать, изменять и удалять [Отделы](#/dictionaries/group#2-otdel)

**Добавлено**
- Добавлено заполнение себестоимости в эндпоинт [Автозаполнения](#/documents/autofill#3-zapros-avtozapolneniya-sebestoimosti)

### 20-10-2020
**Добавлено**
- Поля `qrPayEnabled`, `qrBankPercent` и `qrAcquire` в [Точку продаж](#/dictionaries/retailstore#2-tochka-prodazh)
- Поля `qrSum` и `prepaymentQrSum` в [Розничную продажу](#/documents/retaildemand#2-roznichnaya-prodazha)
- Поле `qrSum` в [Розничный возврат](#/documents/retail-sales-return#2-roznichnyj-vozvrat)
- Ошибки `18005`, `18006`, `19003` и `19004`

**Изменено**
- Описание полей `acquire` и `bankPercent` в [Точке продаж](#/dictionaries/retailstore#2-tochka-prodazh)
- Описание [работы с полями оплаты розничной продажи](#/documents/retaildemand#4-rabota-s-polyami-oplaty-roznichnoj-prodazhi)
- Текст ошибок `18000` и `19002`

### 16-10-2020
**Добавлено**
- Эндпоинт [Автозаполнения цен, скидок, ндс позиций](#/documents/autofill#2-avtozapolnenie)

### 08-10-2020
**Изменено**
- Исправлены опечатки

### 22-09-2020
**Документация**
- Исправлено описание поля `productFolder` у [Групп товаров](#/dictionaries/productFolder#2-gruppa-tovarov)

### 20-09-2020
**Изменено**
- Изменено описание установленных ограничений в [Общих сведениях](#/general#2-obshie-svedeniya)

### 31-08-2020
**Изменено**
- Описание атрибута `allowCreateProducts` в [Точке продаж](#/dictionaries/retailstore#2-tochka-prodazh)

### 30-07-2020
**Изменено**
[Дополнительные поля](#/workbook/workbook-attributes-crud#2-rabota-s-dopolnitelnymi-polyami-cherez-json-api) Товаров, Услуг, Модификаций и Комплектов объединены и располагаются в метаданных Товаров.

### 28-07-2020
**Добавлено**
- Добавлена возможность изменять настройки применения скидок в [настройках компании](#/dictionaries/companysettings#2-nastrojki-kompanii)

### 27-07-2020
**Добавлено**
- Поля `minionToMasterType` и `masterRetailStores` в точку продаж, позволяющие указывать стратегию выбора мастер точки продаж для фискализации облачных чеков.

### 22-07-2020
**Добавлено**
- Новое поле `factureIn` в [Возврат поставщику](#/documents/purchase-return#2-vozvrat-postavshiku)

### 15-07-2020
**Добавлено**
- Эндпоинты [управления скидками](#/dictionaries/discount#2-skidki)

**Документация**
- Дополнен раздел [Скидки](#/dictionaries/discount#2-skidki) новыми примерами

### 26-06-2020
**Документация**
- [Информация](#/general#2-obshie-svedeniya) в документацию про отзыв прошлых токенов при создании нового
- Аутентификации через токен в примерах приведена к единому виду

### 23-06-2020
**Добавлено**
- Эндпоинт [Настройки пользователя](#/dictionaries/usersettings#2-nastrojki-polzovatelya)

### 18-06-2020
**Добавлено**
- Поля ФИО для [Юрлиц](#/dictionaries/organization#2-yurlico) и [Контрагентов](#/dictionaries/counterparty#2-kontragent) типа индивидуальный предприниматель и физическое лицо
- Возможность работы с файлами в [Операциях](#/documents/common-info#1-dokumenty), [Товарах](#/dictionaries/product#2-tovar) и [Контрагентах](#/dictionaries/counterparty#2-kontragent)

### 11-06-2020
****Документация****
- Добавлена информация о лимитах на число элементов в коллекциях и вложенных сущностях (1000 элементов)

### 10-06-2020
**Добавлено**
- Эндпоинт [Настройка аккаунта компании](#/dictionaries/companysettings#2-nastrojki-kompanii)

### 03-06-2020
**Добавлено**
- Эндпоинт [Управления настройками справочника товаров](#/dictionaries/assortment#2-assortiment)

### 28-05-2020
**Документация**
- Добавлена информация об [ограничениях](#/workbook/workbook-first-steps#3-ogranicheniya) и новом [параметре в Вебхуках](#/dictionaries/webhook#2-vebhuki)
- Добавлены описания ошибок [16102-16110](#/errors#3-kody-oshibok-dlya-tovarov), связанных с маркированными товарами

**Добавлено в API Remap 1.1 и 1.2**
- Для работы с маркированной продукцией добавлены поля `trackingType` - тип маркированной продукции, `tnved` - код ТНВЭД в сущности [Товар](#/dictionaries/product#3-sozdat-tovar)

### 15-05-2020
**Добавлено**
- Возможность изменения полей [Сотрудника](#/dictionaries/employee#2-sotrudnik): `email`, `group`, `archived`, `owner`, `shared`

### 08-05-2020
**Документация**
- Добавлено описание по работе с маркированными товарами в [Приемке](#/documents/supply#2-priemka) и [Отгрузке](#/documents/demand#2-otgruzka)

### 06-05-2020
**Документация**
- Добавлено описание об ограничении выборки в блоке [Остатки в позициях документов](#/documents/common-info#1-dokumenty)

### 27-04-2020
**Документация**
- Удалено описание заголовка `Lognex-Pretty-Print-JSON` в [Общих сведениях](#/general#2-obshie-svedeniya)

### 26-04-2020
**Документация**
- [Изменено описание](#/restrictions#2-ogranicheniya) ограничения по запросу на один IP
- Исправление опечатки в описании `email` [Сотрудника](#/dictionaries/employee#2-sotrudnik)

### 14-04-2020
**Документация**
- Добавлено описание новых типов для [фильтров Аудита](#/audit/audit#3-filtry)

### 26-03-2020
**Изменено**
- В [Розничной смене](#/documents/retailshift#2-roznichnaya-smena) удалено поле `applicable` в перечислении полей

### 10-03-2020
**Добавлено**
- Поля `printed` и `published` в эндпоинте `entity/operation`

### 04-03-2020
**Добавлено**
- Поле `stockDays` - количество дней на складе в [Отчет Остатки -> Все Остатки](#/reports/report-stock#4-atributy-obuekta-rasshirennogo-otcheta)

**Документация**
- Добавлен новый раздел [Workbook](#/workbook/workbook-first-steps#1-workbook)

##
[Более полный список изменений](https://github.com/moysklad/api-remap-1.2-doc/blob/master/CHANGELOG.md)
