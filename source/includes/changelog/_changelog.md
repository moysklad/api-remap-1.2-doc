# Список изменений

В разделе перечислены изменения и расширения возможностей существующих эндпоинтов, а также новые эндпоинты,
 которые позволяют эффективнее работать с API МоегоСклада.

Более подробно с особенностями API МоегоСклада  можно ознакомиться в
 разделе [Workbook](../workbook/#workbook), а также по ссылкам на основные разделы данной документации.

Список изменений в версии 1.2 с момента её создания можно найти в [github репозитории](https://github.com/moysklad/api-remap-1.2-doc/blob/master/CHANGELOG.md)

## Нотификация в изменениях API
Чтобы узнавать об изменениях в документации и api, вы можете подписаться на нотификации об изменении документации в github.
Для этого:

- установите любой RSS reader (например, [RSS Feed Reader](https://chrome.google.com/webstore/detail/rss-feed-reader/pnjaodmkngahhkoihejjehlcdlnohgmp) для chromium или [FeedBro](https://addons.mozilla.org/en-US/firefox/addon/feedbroreader) для Firefox)
- добавьте https://github.com/moysklad/api-remap-1.2-doc/commits/master.atom
- при любом изменении документации придёт нотификация и можно посмотреть, что именно изменилось.

## Список последних изменений
Список последних изменений в API Remap 1.2

### 18-12-2024
#### Добавлено
- Ошибки [25063, 25064](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-tehnologicheskih-kart)
- Ошибка [26114](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-proizwodstwennogo-zadaniq)
- Ошибка [26209](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-vypolnenij-atapow-proizwodstwa)
- Поле `standardHourCost` в [Этап производства](../dictionaries/#suschnosti-jetap-proizwodstwa), Стоимость нормо-часа
- Поля `standardHourCost`, `enableHourAccounting` в [Этап техкарты](../dictionaries/#suschnosti-tehkarta-tehkarty)
- Поля `standardHourCost`, `enableHourAccounting` в [Производственные этапы](../documents/#dokumenty-proizwodstwennoe-zadanie-proizwodstwennye-atapy)
- Поля `standardHourCost`, `enableHourAccounting` в [Выполнение этапа производства](../documents/#dokumenty-vypolnenie-atapa-proizwodstwa)

### 02-12-2024
#### Добавлено
- Вывод дополнительных полей в элементы [Пользовательских справочников](../dictionaries/#suschnosti-pol-zowatel-skij-sprawochnik)
- Вывод метаданных дополнительных полей в метаданные пользовательских справочников
- Поле `ID` в метаданные пользовательского справочника

#### Изменено
- Актуализирована документация по [Пользовательским справочникам](../dictionaries/#suschnosti-pol-zowatel-skij-sprawochnik)

### 19-11-2024
#### Добавлено
- Поле `salesMargin` в [Отчет Прибыльность](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-pribyl-nost)

### 01-11-2024
#### Добавлена
- Ошибка [4003](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-tochek-prodazh) при создании\изменении точки продаж productFolders содержит родительскую группу товаров и ee дочерние группы одновременно

### 29-10-2024
#### Добавлена
- Ошибка [71000](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-serij) при создании серии в качестве ассортимента указана серия

### 24-10-2024
#### Добавлено
- Поле `advancePaymentVat` в [Юрлица](../dictionaries/#suschnosti-jurlico), Налоговая ставка для авансов для плательщиков НДС

### 17-10-2024
#### Изменено
- Изменено одно из [правил бана](../index.html#mojsklad-json-api-ogranicheniq)

### 08-10-2024
#### Добавлена
- Возможность фильтровать архивные товары в [отчете оборотов](../reports/#otchety-otchet-oboroty)

### 30-09-2024
#### Добавлено
- Возможность обновлять и удалять события в [Ленте Событий](../dictionaries/#suschnosti-lenta-sobytij)
- Ошибка [2026](../#mojsklad-json-api-oshibki-oshibki-formata)

### 16-09-2024
#### Добавлено
- Описание ошибки [70000](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-lenty-sobytij)
- Возможность добавлять события в [Ленту Событий](../dictionaries/#suschnosti-lenta-sobytij)

### 03-09-2024
#### Добавлены
- Поле "склад материалов" (materialStore) в [Этапы Техкарты](../dictionaries/#suschnosti-jetap-proizwodstwa-jetapy)
- Поле "склад материалов" (materialStore) в [Производственные этапы](../documents/#dokumenty-proizwodstwennoe-zadanie-proizwodstwennye-atapy)

### 28-08-2024
#### Добавлен
- Параметр фильтрации `productionTask` в запросе списка [Выполнений этапов производства](../documents/#dokumenty-vypolnenie-atapa-proizwodstwa-poluchit-spisok-vypolnenij-atapow-proizwodstwa)

### 26-08-2024
#### Добавлены
- Параметр фильтрации `moment` в запросе списка [Выполнений этапов производства](../documents/#dokumenty-vypolnenie-atapa-proizwodstwa-poluchit-spisok-vypolnenij-atapow-proizwodstwa)
- Параметры фильтрации `moment`, `organization`, `deliveryPlannedMoment` в запросе списка [Производственных заданий](../documents/#dokumenty-proizwodstwennoe-zadanie)

### 22-08-2024
#### Добавлен
- Флаг "Без закрывающих документов" для [Исходящего платежа](../documents/#dokumenty-ishodqschij-platezh)
- Флаг "Без закрывающих документов" для [Расходного ордера](../documents/#dokumenty-rashodnyj-order)

### 19-08-2024
#### Добавлено
- Новый тип маркированной продукции `SOFT_DRINKS` для безалкогольных напитков для [Товара](../dictionaries/#suschnosti-towar-towary) и [Комплекта](../dictionaries/#suschnosti-komplekt-komplekty)

### 22-07-2024
#### Добавлена
- Возможность указывать несколько складов в [отчете оборотов](../reports/#otchety-otchet-oboroty)

### 16-07-2024
#### Добавлено
- Добавлено описание получения ссылки на [изображение](../dictionaries/#suschnosti-izobrazhenie-poluchit-ssylku-na-izobrazhenie-towara-ili-komplekta-ili-modifikacii)

### 12-07-2024
#### Добавлен
- Новый [отчет По документам номенклатуры](../reports/#otchety-otchet-po-dokumentam-nomenklatury)

### 1-07-2024
#### Изменено
- Добавлена пермиссия viewProductCostAndProfit в список пермиссий [контекста запроса сотрудника](../#mojsklad-json-api-obschie-swedeniq-kontext-zaprosa-sotrudnika)

### 26-06-2024
#### Добавлены
- Условие автоматического отключения JSON API пользователю в [Ограничения](../#mojsklad-json-api-ogranicheniq)
- Условие автоматического отключения вебхука в [Ограничения](../#mojsklad-json-api-ogranicheniq)

### 24-06-2024
#### Добавлено
- Ошибка [17023](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-dokumentow)

### 17-06-2024
#### Добавлена
- Ошибка [3039](../#mojsklad-json-api-oshibki-obschie-oshibki-walidacii)

### 10-06-2024
#### Добавлено
- Новый тип маркированной продукции `MEDICAL_DEVICES` для медизделий и кресел-колясок для [Товара](../dictionaries/#suschnosti-towar-towary) и [Комплекта](../dictionaries/#suschnosti-komplekt-komplekty)
- Поле "нормо-часы" (standardHour) в [Этапы Техкарты](../dictionaries/#suschnosti-tehkarta)
- Поле "нормо-часы" (standardHourUnit) в [Выполнения этапов производства](../documents/#dokumenty-vypolnenie-atapa-proizwodstwa)
- Поле "нормо-часы" (standardHourUnit) в [Производственные этапы](../documents/#dokumenty-proizwodstwennoe-zadanie-proizwodstwennye-atapy)

### 29-05-2024
#### Добавлена
- Информация о работе с [Лентой Событий](../dictionaries/#suschnosti-lenta-sobytij)

### 16-05-2024
#### Добавлен
- Заголовок `X-Lognex-WebHook-DisableByPrefix` для выборочного отключения [вебхуков](../dictionaries/#suschnosti-vebhuki-primer-webhuka)

### 06-05-2024
#### Добавлена
- Возможность фильтрации по полю **store** в [счете покупателя](../documents/#dokumenty-schet-pokupatelu) и [счете поставщика](../documents/#dokumenty-schet-postawschika)

### 02-05-2024
#### Добавлено
- Ограничение на поле типа дата, подробнее в разделе [Формат даты и времени](../#mojsklad-json-api-obschie-swedeniq-format-daty-i-wremeni)

### 24-04-2024
#### Добавлено
- Поле `allPerformers` в [этапы производства](../dictionaries/#suschnosti-jetap-proizwodstwa), Признак доступности назначения на этап любого сотрудника
- Поле `performers` в [этапы производства](../dictionaries/#suschnosti-jetap-proizwodstwa), Массив метаданных возможных исполнителей
- Ошибка [25035](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-tehnologicheskih-processow)
- Добавлен новый тип уведомлений [Новое упоминание в ленте событий](../notification/#uwedomleniq-podrobnoe-opisanie-tipow-uwedomlenij-nowoe-upominanie-w-lente-sobytij)
- Добавлена новая группа уведомлений [Упоминания сотрудников](../notification/#uwedomleniq-nastrojki-uwedomlenij-atributy-suschnosti)

### 23-04-2024
#### Добавлено
- Поле `salary` в [Сотрудник](../dictionaries/#suschnosti-sotrudnik)

### 22-04-2024
#### Добавлено
- Поле `nextPositions` в [Техпроцесс](../dictionaries/#suschnosti-tehprocess), следующие позиции для позиции техпроцесса
- Ошибки [25033-25034](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-tehnologicheskih-processow)

### 17-04-2024
#### Добавлена
- Ошибка [3038](../#mojsklad-json-api-oshibki-obschie-oshibki-walidacii)

### 09-04-2024
#### Добавлено
- Новая роль [Сотрудник производства](../dictionaries/#suschnosti-sotrudnik-zapros-na-poluchenie-roli-sotrudnika-proizwodstwa) для [Сотрудника](../dictionaries/#suschnosti-sotrudnik)
- Ошибки [43030](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-sotrudnikow)

### 02-04-2024
#### Добавлено
- Возможность получения [шаблонов](../documents/#dokumenty-obschie-swedeniq-shablony-dokumentow) документов по токену решения

### 28-03-2024
#### Добавлено
- Возможность привязки [Заказа поставщика](../documents/#dokumenty-zakaz-postawschiku) к [Заказу покупателя](../documents/#dokumenty-zakaz-pokupatelq)

### 26-03-2024
#### Добавлено
- Обновлен список штрихкодов для [Товара](../dictionaries/#suschnosti-towar-towary-atributy-wlozhennyh-suschnostej-shtrihkody), [Модификации](../dictionaries/#suschnosti-modifikaciq-modifikacii-atributy-wlozhennyh-suschnostej-shtrihkody), [Услуги](../dictionaries/#suschnosti-usluga-uslugi-metadannye-uslug-shtrihkody), [Комплекта](../dictionaries/#suschnosti-komplekt-komplekty-komponenty-komplekta-shtrihkody)

### 25-03-2024
#### Добавлено
- Поле `costDistributionType` в [Техкарту](../dictionaries/#suschnosti-tehkarta), тип распределения себестоимости

### 11-03-2024
#### Добавлено
- Поле `sendMarksToChestnyZnakOnCloud` в [Точку продаж](../dictionaries/#suschnosti-tochka-prodazh), позволяющее управлять отправкой кассой-миньоном КМ на проверку в ЧЗ

### 07-03-2024
#### Добавлено
- Создание [шаблона Перемещения на основании](../documents/#dokumenty-peremeschenie-shablon-peremescheniq-na-osnowe) Заказа покупателя

### 06-03-2024
#### Добавлено
- Эндпоинт [Серийные номера](../dictionaries/#suschnosti-serijnyj-nomer)

### 04-03-2024
#### Добавлено
- Эндпоинты работы с [Производственным заданием](../documents/#dokumenty-proizwodstwennoe-zadanie)
- Эндпоинты работы с [Выполнением этапа](../documents/#dokumenty-vypolnenie-atapa-proizwodstwa)
- Ошибки [26101-26112](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-proizwodstwennogo-zadaniq)
- Ошибки [26200-26208](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-vypolnenij-atapow-proizwodstwa)
- Ошибки [3035, 3036](../#mojsklad-json-api-oshibki-obschie-oshibki-walidacii)
- Ошибки [1089, 1092](../#mojsklad-json-api-oshibki)

### 26-02-2024
#### Добавлено
- Поля связей документов Приемки и Отгрузки в [Перемещение](../documents/#dokumenty-peremeschenie)

### 07-02-2024
#### Добавлено
- Поле `marksCheckMode` в [Точку продаж](../dictionaries/#suschnosti-tochka-prodazh), настройка проверки КМ перед продажей в ГИС МТ

### 31-01-2024
#### Изменено
- Добавлено поле `state` в [Задачу](../dictionaries/#suschnosti-zadacha) - сущность [Тип задачи](../dictionaries/#suschnosti-zadacha-tip-zadachi)

### 11-01-2024
#### Добавлено
- Поле `materialProcessingPlan` в [Техкарту](../dictionaries/#suschnosti-tehkarta), техкарта для материала
- Ошибка [25062](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-tehnologicheskih-kart)

### 26-12-2023
#### Добавлен
- Добавлен новый тип маркированной продукции `SANITIZER` для антисептиков

### 26-12-2023
#### Добавлена
- Ошибка [3037](../#mojsklad-json-api-oshibki-obschie-oshibki-walidacii)

### 25-12-2023
#### Изменено
- Для документа `Корректировка баланса контрагента` добавлена возможность указывать сотрудника в поле `agent`
- Документ `Корректировка баланса контрагента` переименован в [Корректировка взаиморасчетов](../documents/#dokumenty-korrektirowka-wzaimoraschetow). Путь к документу в АПИ не менялся для совместимости
- Для документа [Исходящий платеж](../documents/#dokumenty-ishodqschij-platezh) добавлена возможность указывать сотрудника в поле `agent`

### 22-12-2023
#### Добавлен
- Добавлен новый тип маркированной продукции `FOOD_SUPPLEMENT` для биологически активных добавок к пище

### 28-11-2023
#### Добавлено
- Поле `showBeerOnTap` в [Точку продаж](../dictionaries/#suschnosti-tochka-prodazh), настройка отображения вскрытых кегов на кассе

### 27-11-2023
#### Изменено
- Приведение документации обязательности полей у [Договора](../dictionaries/#suschnosti-dogowor) в корректное состояние

#### Добавлена
- Ошибка [11002](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-statusow)

### 15-11-2023
#### Добавлена
- Ошибка [1091](../#mojsklad-json-api-oshibki) при указании некорректного значения для перечислимого параметра

### 14-11-2023
#### Добавлена
- Ошибка [3034](../#mojsklad-json-api-oshibki-obschie-oshibki-walidacii)
- Опечатка: удален тег `+Обязательное при ответе` для поля **owner** в документах

### 26-10-2023
#### Добавлено
- Добавлен новый тип маркированной продукции `BEER_ALCOHOL` для разливных слабоалкогольных напитков
- Удален неактуальный код ошибки [16104](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-towarow)
- Описание и примеры удаления вложенных сущностей в сущностях через использование эндпоинта на массовое удаление для [Комплектов](../dictionaries/#suschnosti-komplekt-massowoe-udalenie-komponentow-komplekta), [Задач](../dictionaries/#suschnosti-zadacha-massowoe-udalenie-komentariew-k-zadache), Техкарт([материалы](../dictionaries/#suschnosti-tehkarta-massowoe-udalenie-materialow), [продукты](../dictionaries/#suschnosti-tehkarta-massowoe-udalenie-produkta)) и [Техпроцессов](../dictionaries/#suschnosti-tehprocess-massowoe-udalenie-pozicij-tehprocessa)

### 16-10-2023
#### Добавлено
- Добавлено поле `barcode` в [Ячейку склада](../dictionaries/#suschnosti-sklad-yachejki-sklada)
- Ошибка [67006](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-yacheek-i-zon-sklada)

### 12-10-2023
#### Добавлено
- Описание и примеры удаления позиций в документах через использование эндпоинта на массовое удаление позиций

### 06-10-2023
#### Добавлено
- Добавлено поле `syncAgents` в [Точку продаж](../dictionaries/#suschnosti-tochka-prodazh), выгружает покупателей для работы оффлайн.

### 05-10-2023
#### Добавлено
- Добавлены новые режимы reserve и inTransit [в краткий отчёт по остаткам](../reports/#otchety-otchet-ostatki-poluchit-kratkij-otchet-ob-ostatkah)

### 14-09-2023
#### Добавлено
- Использование обязательного [сжатия содержимого ответов](../#mojsklad-json-api-obschie-swedeniq-szhatie-soderzhimogo-otwetow)

#### Изменен
- Домен в примерах документации на api.moysklad.ru

### 06-09-2023
#### Добавлено
- Добавлено поле `allowDeleteReceiptPositions` в [Точку продаж](../dictionaries/#suschnosti-tochka-prodazh), разрешающее удалять позиции в чеке.

### 31-08-2023
#### Добавлена
- Фильтрация по `retailShift` в [Розничную продажу](../documents/#dokumenty-roznichnaq-prodazha),
  [Розничный возврат](../documents/#dokumenty-roznichnyj-wozwrat),
  [Внесение денег](../documents/#dokumenty-vnesenie-deneg),
  [Выплата денег](../documents/#dokumenty-vyplata-deneg)

### 15-08-2023
#### Добавлено
-  Добавлены поля `sex`, `birthDate` См. [Поля реквизитов контрагентов](../dictionaries/#suschnosti-kontragent-kontragenty-atributy-suschnosti-polq-rekwizitow)
-  Информация о новом типе поля `sex` См. [Пол контрагента](../dictionaries/#suschnosti-kontragent-kontragenty-pol-kontragenta)

### 11-08-2023
#### Добавлено
- Описание, с отличием поведения в [изменении позиции техпроцесса](../dictionaries/#suschnosti-tehprocess-izmenit-poziciu-tehprocessa) апи от web-интерфейса
- Добавлены поля `requiredFio`, `requiredPhone`, `requiredEmail`, `requiredBirthdate`, `requiredSex` и `requiredDiscountCardNumber` в [Точку продаж](../dictionaries/#suschnosti-tochka-prodazh), позволяющие управлять обязательностью заполнения полей при создании контрагентов.

### 28-07-2023
#### Исправлено
- Заменено "Заказ покупателя (salesreturn)" на "Заказ покупателя (customerorder)" в [шаблонах документов](../documents/#dokumenty-obschie-swedeniq-shablony-dokumentow)

### 19-07-2023
#### Исправлено
- Добавлены закрывающие скобки в примере запроса в разделе [массовое удаление отгрузок](../documents/#dokumenty-otgruzka-massowoe-udalenie-otgruzok)
#### Добавлено
- Значение "Начало работы" в допустимые значения [Стартового экрана](../dictionaries/#suschnosti-nastrojki-pol-zowatelq-startowyj-akran)

### 17-07-2023
#### Изменено
- Права для доступа к [Отчету Прибыльность](../reports/#otchety-otchet-pribyl-nost) исправлены с `Прибыль и убытки` на `Прибыльность`

### 07-07-2023
#### Изменено
- Исправлена ссылка на раздел [Валюта в документах](../documents/#dokumenty-obschie-swedeniq-valuta-w-dokumentah)

### 06-07-2023
#### Добавлена
- Возможность чтения, создания, изменения и удаления позиций возврата на склад комиссионера для [полученного отчета комиссионера](../documents/#dokumenty-poluchennyj-otchet-komissionera).
- Новый `5004` код [ошибки](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-otchetow-komissionera).

### 26-06-2023
#### Добавлено
- Описание перемещения документа в [корзину](../#mojsklad-json-api-obschie-swedeniq-udalenie-w-korzinu)

### 19-06-2023
#### Добавлено
- Поле "оплата труда" (labourCost) в [Этапы Техкарты](../dictionaries/#suschnosti-tehkarta)

### 24-05-2023
#### Добавлен
- Новый `2029` код [ошибки](../#mojsklad-json-api-oshibki).

### 17-05-2023
#### Добавлена
- Возможность работы с каналами продаж для [полученного](../documents/#dokumenty-poluchennyj-otchet-komissionera) и [выданного отчетов комиссионера](../documents/#dokumenty-vydannyj-otchet-komissionera).
- Поле "Прочие расходы" для [полученного отчета комиссионера](../documents/#dokumenty-poluchennyj-otchet-komissionera).
- Возможность создания и удаления продуктов и материалов в [Техоперации](../documents/#dokumenty-tehoperaciq-sozdat-tehoperaciu).
- Возможность создания [Техоперации](../documents/#dokumenty-tehoperaciq-sozdat-tehoperaciu) без привязки Техкарты.
- Новый `25003` код [ошибки](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-tehnologicheskih-kart).
#### Удалены
- Ставшие неактуальными `25001` и `25002` коды [ошибок](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-tehnologicheskih-kart).

### 12-05-2023
#### Добавлен
- Параметр фильтрации `withSubFolders` в [Ассортименте](../dictionaries/#suschnosti-assortiment), позволяющий фильтровать по заданной группе товаров без учета ее подгрупп.

### 11-05-2023
#### Добавлено
- Добавлен `1088` код [ошибки](../#mojsklad-json-api-oshibki).

### 10-04-2023
#### Добавлена
- Возможность работы с затратами для Техкарт [Техкарт](../dictionaries/#suschnosti-tehkarta).
- Дополнены примеры в документации с затратами Техкарты.
- Добавлен `25061` код [ошибки](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-tehnologicheskih-kart).

### 04-04-2023
#### Изменено
- При создании Техкарты поле *materials* стало необязательным.
- Техкарту можно привязывать к определенному техпроцессу
- Материалы Техкарты можно привязывать к определенному этапу техпроцесса.
- Дополнены примеры в документации с материалами Техкарты.
- Добавлен `25060` код [ошибки](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-tehnologicheskih-kart).
- Документация по Техкартам перенесана из вкладки документов в [сущности](../dictionaries/#suschnosti-tehkarta)

### 30-03-2023
#### Добавлено
- Добавлен `29009` код [ошибки](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-komplektow).

### 19-02-2023
#### Изменено
- Исправлены примеры в документации: поправили json в ответах, убрали дубли методов в примерах запросов, заменили значения цен на значения с плавающей точкой.

### 13-02-2023
#### Добавлена
- Для сущности [Техпроцесс](../dictionaries/#suschnosti-tehprocess) возможность создания, редактирования, удаления через АПИ.

### 07-02-2023
#### Добавлена
- Возможность привязывать/отвязывать перемещения к/от [Заказа покупателя](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-zakaz-pokupatelq-zakazy-pokupatelej).
- Описание [Пример привязывания перемещений к заказу покупателя](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-obschie-swedeniq-primer-priwqzki-3)
- Добавлен `3031` код [ошибки](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-obschie-oshibki-walidacii).

### 31-01-2023
#### Добавлена
- Информация по созданию, обновлению и удалению [этапов производства](../dictionaries/#suschnosti-jetap-proizwodstwa)

### 29-01-2023
#### Добавлено
- Добавлена дополнительная информация по *downloadHref* в *miniature* в общих сведениях.

### 20-01-2023
#### Добавлена
- Сущность [Техпроцесс](../dictionaries/#suschnosti-tehprocess)

### 17-01-2023
#### Добавлена
- Сущность [Этап производства](../dictionaries/#suschnosti-jetap-proizwodstwa)

### 16-01-2023
#### Изменено
- Актуализирована информация по тарифным ограничениям при использовании зон и ячеек склада, теперь они доступны на всех тарифах

### 10-01-2023
#### Добавлено
- Добавлено новое поле *downloadHref*, содержащее прямую ссылку на скачивание миниатюр изображения, в *miniature*.

### 09-01-2023
#### Добавлено
- Параметр фильтрации `agentTag` в [Отчетах Прибыльность](../reports/#otchety-otchet-pribyl-nost)

### 16-12-2022
#### Добавлено
- Добавлен `21001` код [ошибки](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-peremeschenij).

### 14-12-2022
#### Добавлено
- Дополнено описание [ошибок](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-yacheek-i-zon-sklada) при работе с ячейками и зонами. Добавлены ошибки 67002, 67003, 67004, 67005, 67006.
- Добавлена информация по созданию, обновлению и удалению [зон](../dictionaries/#suschnosti-sklad-zony-sklada) и [ячеек](../dictionaries/#suschnosti-sklad-yachejki-sklada) в [складах](../dictionaries/#suschnosti-sklad-sklady)

### 12-12-2022
#### Добавлено
- Добавлен `15004` код [ошибки](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-modifikacij).

### 01-12-2022
#### Добавлено
- Ячейки в позиции [Приемки](../documents/#dokumenty-priemka)
- Ячейки в позиции [Оприходования](../documents/#dokumenty-oprihodowanie)
- Ячейки в позиции [Перемещения](../documents/#dokumenty-peremeschenie)
- Ячейки в позиции [Списания](../documents/#dokumenty-spisanie)
- Ячейки в позиции [Отгрузки](../documents/#dokumenty-otgruzka)
- Ячейки в позиции [Возврата покупателя](../documents/#dokumenty-vozwrat-pokupatelq)
- Ячейки в позиции [Возврата поставщику](../documents/#dokumenty-vozwrat-postawschiku)
- Описание [ошибок](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-yacheek-i-zon-sklada) при работе с ячейками и зонами

### 20-11-2022
#### Добавлено
- Добавлена информация по работе с [зонами](../dictionaries/#suschnosti-sklad-zony-sklada) и [ячейками](../dictionaries/#suschnosti-sklad-yachejki-sklada) в [складах](../dictionaries/#suschnosti-sklad-sklady)

### 18-11-2022
#### Добавлено
- Поддержка протокола change-handler в [Розничной продаже](../documents/#dokumenty-roznichnaq-prodazha).

### 16-11-2022
#### Добавлено
- Параметр фильтрации `productFolder` с поддержкой (в том числе и исключающей) фильтрации по нескольким группам товаров в [Отчетах Прибыльность](../reports/#otchety-otchet-pribyl-nost)
- Параметр фильтрации `withSubFolders` в [Отчетах Прибыльность](../reports/#otchety-otchet-pribyl-nost), позволяющий фильтровать по заданной группе товаров без учета ее подгрупп.
#### Изменено
- Параметр `product` получил поддержку фильтрации по нескольким товарам в [Отчетах Прибыльность](../reports/#otchety-otchet-pribyl-nost)
- Параметр `product` получил поддержку исключающей фильтрации по товарам в [Отчетах Прибыльность](../reports/#otchety-otchet-pribyl-nost)

### 09-11-2022
#### Добавлено
- Поддержка протокола change-handler в [Возврате покупателю](../documents/#dokumenty-vozwrat-pokupatelq-vozwraty-pokupatelej).

### 01-11-2022
#### Добавлено
- сущность [Ставка НДС](../dictionaries/#suschnosti-stawka-nds) в раздел Сущности
- [пермиссии сущности taxrate](../dictionaries/#suschnosti-sotrudnik-rabota-s-prawami-sotrudnika) (Ставка НДС)
- данные о пермиссиях сущности taxrate (Ставка НДС) добавлены в возвращаемые JSON в разделе [Пользовательские роли](../dictionaries/#suschnosti-pol-zowatel-skie-roli-poluchit-pol-zowatel-skuu-rol)

### 26-10-2022
#### Добавлено
- Добавлен [Веб-хук на изменение остатков](../dictionaries/#suschnosti-vebhuk-na-izmenenie-ostatkow).

### 26-10-2022
#### Добавлено
- Добавлен параметр `changedSince` в [эндпоинт текущих остатков](../reports/#otchety-otchet-ostatki-kratkij-otchet-ob-ostatkah).

### 14-10-2022
#### Добавлено
- Добавлен `3030` код [ошибки](../#mojsklad-json-api-oshibki-obschie-oshibki-walidacii).

### 12-10-2022
#### Добавлено
- Поле moves в [Заказ покупателя](../documents/#dokumenty-zakaz-pokupatelq-zakazy-pokupatelej).
- Поле prepayments в [Заказ покупателя](../documents/#dokumenty-zakaz-pokupatelq-zakazy-pokupatelej).
- Поле customerOrder в [Перемещение](../documents/#dokumenty-peremeschenie-peremescheniq).

### 03-10-2022
#### Добавлено
- тип контекста `registration` в [Аудите](../audit/#audit)
- тип события `registration` в [Аудите](../audit/#audit)

### 13-09-2022
#### Добавлено
- Добавлен новый эндпоинт [Остатков по документам](../reports/#otchety-otchet-ostatki-ostatki-po-dokumentam).

### 06-09-2022
#### Добавлено
- Поддержка протокола change-handler в [Счете поставщика](../documents/#dokumenty-schet-postawschika).

### 29-08-2022
#### Добавлено
- Пермиссии для документа "Вывод из оборота (ОСУ)" в [правах сотрудника](../dictionaries/#suschnosti-sotrudnik-rabota-s-prawami-sotrudnika)

### 04-08-2022
#### Добавлено
- Описание [ошибки](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-shablonow) `36001`

### 01-08-2022
#### Добавлено
- Поддержка накладных расходов (поле `overhead`) в протоколе update-provider в
[Отгрузке](../documents/#dokumenty-otgruzka), 
[Перемещении](../documents/#dokumenty-peremeschenie) и 
[Оприходовании](../documents/#dokumenty-oprihodowanie).

### 29-07-2022
#### Описано
- Ранее неявное ограничение в 255 символов на длину url адресов для [Веб-хуков](../dictionaries/#suschnosti-vebhuki)

#### Добавлено
- Ошибка [30010](../#mojsklad-json-api-oshibki-oshibki-formata)

### 29-07-2022
#### Добавлено
- Поддержка протокола update-provider в [Перемещении](../documents/#dokumenty-peremeschenie).

### 28-07-2022
#### Добавлено
- Поддержка протокола update-provider в [Оприходовании](../documents/#dokumenty-oprihodowanie).

### 26-07-2022
#### Добавлено
- Поддержка накладных расходов (поле `overhead`) в протоколе update-provider в [Приемке](../documents/#dokumenty-priemka).

### 25-07-2022
#### Добавлено
- Поддержка протокола update-provider в [Отгрузке](../documents/#dokumenty-otgruzka).
- Новый тип уведомлений [На счет зачислены бонусные деньги](../notification/#uwedomleniq-podrobnoe-opisanie-tipow-uwedomlenij-na-schet-zachisleny-bonusnye-den-gi).

### 22-07-2022
#### Добавлено
Добавлено описание операторов фильтрации штрихкодов для [товаров](../dictionaries/#suschnosti-towar),
[комплектов](../dictionaries/#suschnosti-komplekt),
[модификаций](../dictionaries/#suschnosti-modifikaciq),
[серий](../dictionaries/#suschnosti-seriq) и
[услуг](../dictionaries/#suschnosti-usluga)

### 19-07-2022
#### Добавлено
- Дополнено описаниение раздела Адрес у
[Контрагента](../dictionaries/#suschnosti-kontragent-kontragenty-atributy-wlozhennyh-suschnostej-adres),
[Юрлица](../dictionaries/#suschnosti-jurlico-jurlica-atributy-wlozhennyh-suschnostej-adres),
[Точки продаж](../dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-atributy-suschnosti-status-atributy-suschnosti-adres),
[Склада](../dictionaries/#suschnosti-sklad-sklady-atributy-suschnosti-adres),
[Заказа покупателя](../documents/#dokumenty-zakaz-pokupatelq-zakazy-pokupatelej-atributy-suschnosti-adres-dostawki),
[Отгрузки](../documents/#dokumenty-otgruzka-otgruzki-atributy-suschnosti-adres-dostawki), 
об отсутствии поддержки `null`.

### 07-07-2022
#### Добавлено
- Поддержка протокола change-handler в [Счете покупателю](../documents/#dokumenty-schet-pokupatelu).

### 06-07-2022
#### Изменено
- Разделы в [Отчетах остатков](../reports/#otchety-otchet-ostatki)

### 04-07-2022
#### Добавлено
- Поддержка протокола update-provider в [Приемке](../documents/#dokumenty-priemka).

### 16-06-2022
#### Добавлено
- В описании [Отчетов](../reports/#otchety) добавлен список операторов, с помощью которых выполняется фильтрация по атрибутам.

### 15-06-2022
#### Добавлено
- В описании [Документов](../documents/#dokumenty) добавлен список операторов, с помощью которых выполняется фильтрация по атрибутам.

### 14-06-2022
#### Добавлено
- В описании [Сущностей](../dictionaries/#suschnosti) добавлен список операторов, с помощью которых выполняется фильтрация по атрибутам.

### 09-06-2022
#### Изменено
- Добавлены поля `printed` и `published` в [Договор](../dictionaries/#suschnosti-dogowor)

### 03-06-2022
#### Добавлено
- Добавлено поле `authorApplication` в [Вебхуках](../dictionaries/#suschnosti-vebhuki)

### 02-06-2022
#### Изменено
- Перенесено описание фильтрации по дополнительным полям в [Общие Сведения](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-fil-traciq-po-dopolnitel-nym-polqm)

### 26-05-2022
#### Добавлено
- Добавлено поле `salesChannel` в [Счет покупателю](../documents/#dokumenty-schet-pokupatelu)

### 20-05-2022
#### Добавлено
- Поддержка полей `incomingDate` и `incomingNumber` для протокола change-handler в [Приемке](../documents/#dokumenty-priemka).

### 13-05-2022
#### Добавлено
- Описание [ошибки](../#mojsklad-json-api-oshibki) `1048`

### 28-04-2022
#### Добавлено
- Параметр фильтрации `salesChannel` в [Отчетах Прибыльность](../reports/#otchety-otchet-pribyl-nost), позволяющий фильтровать по каналам продаж

### 27-04-2022
#### Добавлено
- Описание необходимых пермиссий в отчетах [Показатели](../reports/#otchety-pokazateli), [Показатели продаж и заказов](../reports/#otchety-pokazateli-prodazh-i-zakazow), [Показатели контрагентов](../reports/#otchety-otchet-pokazateli-kontragentow), [Деньги](../reports/#otchety-otchet-den-gi)

### 18-04-2022
#### Добавлено
- Параметр фильтрации withSubFolders в [Отчете остатков](../reports/#otchety-otchet-ostatki), позволяющий фильтровать по заданной группе товаров без учета ее подгрупп.
#### Документация
- Добавлено описание [Группа техкарт](../dictionaries/#suschnosti-gruppa-tehkart)

### 01-04-2022
#### Добавлено
- Поле `onTap` в [Товарах](../dictionaries/#suschnosti-towar)
- Ошибки [16011, 16012, 16013, 16014, 16015, 16113](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-towarow)
#### Изменено
- Описание полей `isSerialTrackable`, `ppeType`, `alcoholic`, `weighed` в [Товарах](../dictionaries/#suschnosti-towar)

### 23-03-2022
#### Добавлено
- Добавлено поле `accumulationDiscount` в скидки Контрагента, См. [Поля реквизитов контрагентов](../#suschnosti-kontragent-kontragenty-atributy-suschnosti-polq-rekwizitow)
#### Изменено
- Дополнительные поля типов Файл и Флажок не могут быть обязательными [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)

### 22-03-2022
#### Добавлено
- Добавлено поле `show` в атрибуты описания доп. поля. См. [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)

### 18-03-2022
#### Изменено
- Добавлена пермиссия viewCashFlow в список пермиссий [контекста запроса сотрудника](../#mojsklad-json-api-obschie-swedeniq-kontext-zaprosa-sotrudnika)

### 18-03-2022
#### Добавлено
- Фильтрация по доп полям в [Ассортименте](../dictionaries/#suschnosti-assortiment)

### 17-03-2022
#### Добавлено
- Добавлен отчёт [Текущих Остатков](../reports/#otchety-otchet-ostatki-kratkij-otchet-ob-ostatkah).

### 17-03-2022
#### Добавлено
- Отчет [Прибыльность по Каналам продаж](../reports/#otchety-otchet-pribyl-nost-poluchit-pribyl-nost-po-kanalam-prodazh) 
- Описание отчета [Прибыльность по Каналам продаж](../reports/#otchety-otchet-pribyl-nost-poluchit-pribyl-nost-po-kanalam-prodazh)

### 17-03-2022
#### Изменено
- Часть ссылок в [Отчетах Прибыльность](../reports/#otchety-otchet-pribyl-nost)

### 15-03-2022
#### Изменено
- Изменено время ожидания ответа на отправку [Веб-хука](../dictionaries/#suschnosti-vebhuki) с 5 секунд до 1.5 секунд.
- Отключены переотправки по истечении времени ожидания ответа

### 15-03-2022
#### Добавлено
- Поля `stock`, `reserve`, `inTransit`, `quantity` могут быть дробными в [Отчёте Остатки](../reports/#otchety-otchet-ostatki).

### 10-03-2022
#### Добавлено
- Информация о новом типе маркированной продукции (Никотиносодержащая продукция) в [Товарах](../dictionaries/#suschnosti-towar)

### 18-02-2022
#### Добавлено
- Пермиссии для документа формирование АТК в [правах сотрудника](../dictionaries/#suschnosti-sotrudnik-rabota-s-prawami-sotrudnika)

### 13-12-2021
#### Изменено
- Подразделы [Печать документов](../documents/#dokumenty-pechat-dokumentow) и [Публикация документов](../documents/#dokumenty-publikaciq-dokumentow) перенесены в раздел Документы.

### 10-12-2021
#### Добавлено
- Поддержка протокола change-handler в [Оприходовании](../documents/#dokumenty-oprihodowanie).

### 08-12-2021
#### Добавлено
- Поддержка протокола change-handler в [Списании](../documents/#dokumenty-spisanie).

### 02-12-2021
#### Добавлено
- Поддержка протокола change-handler в [Перемещении](../documents/#dokumenty-peremeschenie).

### 30-11-2021
#### Добавлено
- Возможность фильтрации [ассортимента](../dictionaries/#suschnosti-assortiment) по доп. полям. 

### 26-11-2021
#### Добавлено
- Пермиссии для документа отчет об использовании в [правах сотрудника](../dictionaries/#suschnosti-sotrudnik-rabota-s-prawami-sotrudnika)

### 25-11-2021
#### Добавлено
- Добавление [системных валют](../dictionaries/#suschnosti-valuta-sozdat-sistemnuu-walutu)

### 24-11-2021
#### Документация
- Исправлено перебрасывание в начало раздела при переходе по ссылке из другого раздела документации на заголовок 4 уровня или больше

### 23-11-2021
#### Добавлено
- Поддержка протокола change-handler в [Приемке](../documents/#dokumenty-priemka).

### 16-11-2021
#### Добавлено
- Возможность получения и применения [сохраненных фильтров](../dictionaries/#suschnosti-sohranennye-fil-try) других сотрудников для администраторов
- Описание ошибок [63004 и 63005](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-sohranennogo-fil-tra)

### 16-11-2021
#### Изменено
- Изменено максимальное ограничение на получение записей [аудита](../audit/#audit) с 25 на 100 записей

### 16-11-2021
#### Добавлено
- Поддержка протокола update-provider в [Заказе покупателя](../documents/#dokumenty-zakaz-pokupatelq).

### 15-11-2021
#### Добавлено
- Добавлено поле `salesChannel` в [Заказ покупателя](../documents/#dokumenty-zakaz-pokupatelq), [Отгрузку](../documents/#dokumenty-otgruzka) и [Возврат покупателя](../documents/#dokumenty-vozwrat-pokupatelq)

### 08-11-2021
#### Добавлено
- Эндпоинт для [Каналов продаж](../dictionaries/#suschnosti-kanal-prodazh)

### 01-11-2021
#### Добавлено
- Поддержка протокола change-handler в [Отгрузке](../documents/#dokumenty-otgruzka).

### 21-10-2021
#### Добавлено
- Добавлен [эндпоинт](../dictionaries/#suschnosti-kody-markirowki) для работы с Кодами маркировки в позиции документа

### 15-10-2021
#### Добавлено
- Фильтрация по полю `paymentPlannedMoment` у [Счета покупателя](../documents/#dokumenty-schet-pokupatelu)
- Фильтрация по полю `supplier` в [Отчетах прибыльность](../reports/#otchety-otchet-pribyl-nost)
- Фильтрация по номеру счета [Контрагента](../dictionaries/#suschnosti-kontragent) `filter=accounts.accountnumber`. [Описание](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter)

### 12-10-2021
#### Добавлено
- Возможность изменения и отображения полей [Элементов пользовательского справочника](../dictionaries/#suschnosti-pol-zowatel-skij-sprawochnik-jelementy-pol-zowatel-skogo-sprawochnika): `group`, `owner`, `shared`

### 08-10-2021
#### Добавлено
- Ошибка [2028](../#mojsklad-json-api-oshibki-oshibki-formata)

### 07-10-2021
#### Документация
- Добавлено описание [Контекста запроса сотрудника](../#mojsklad-json-api-obschie-swedeniq-kontext-zaprosa-sotrudnika)

### 30-09-2021
#### Изменено
- Информация о новом типе маркированной продукции (Упакованная вода) в [Товарах](../dictionaries/#suschnosti-towar)

### 23-09-2021
#### Добавлено
- Описание полей посылаемых [веб-хуков](../dictionaries/#suschnosti-vebhuki) и добавлены поля `auditContext`, `updatedFields`, `moment`, `uid`
- Новая ошибка [30009](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-veb-hukow)

### 20-09-2021
#### Добавлено
- Добавлены поля `shipmentAddress` и `shipmentAddressFull` в [Заказ покупателя](../documents/#dokumenty-zakaz-pokupatelq) и [Отгрузку](../documents/#dokumenty-otgruzka)

### 20-09-2021
#### Исправлено
- Исправлен список возможных атрибутов у документа [Списание](../documents/#dokumenty-spisanie)

### 16-09-2021
#### Изменено
- Дополнено описание раздела webhook.

### 15-09-2021
#### Добавлено
- Возможность работы с упаковками [Модификаций](../dictionaries/#suschnosti-modifikaciq), [фильтрация ассортимента](../dictionaries/#suschnosti-assortiment-atributy-wlozhennyh-suschnostej-nastrojki-prawil-shtrihkodow-dlq-suschnostej-sprawochnika) по штрихкоду упаковок модификаций.

### 15-09-2021
#### Добавлено
- Добавлена фильтрация по Доп. полям. и атрибут фильтрации supplier для [Отчет обороты](../reports/#otchety-otchet-oboroty)
- Документ [Корректировка баланса контрагента](../documents/#dokumenty-korrektirowka-wzaimoraschetow)

### 08-09-2021
#### Изменено
- Исправлена валидация дат в фильтрах запросов. При передаче даты до начала 1970 года — возвращается ошибка о неправильном значении даты. [Подробнее](../#mojsklad-json-api-obschie-swedeniq-format-daty-i-wremeni)

### 31-08-2021
#### Добавлено
- Добавлен эндпоинт получения списка [сохраненных фильтров](../dictionaries/#suschnosti-sohranennye-fil-try)
  для сущностей, документов
- Добавлено применение [сохраненного фильтра](../dictionaries/#suschnosti-sohranennye-fil-try) для сущностей и документов  

### 17-08-2021
#### Добавлено
- Возможность работы с модификациями для материалов и продуктов [Техкарт](../dictionaries/#suschnosti-tehkarta).
Для этого введено новое поле **assortment**.
- Новая ошибка [3028](../#mojsklad-json-api-oshibki-obschie-oshibki-walidacii)

### 30-07-2021
#### Добавлено
- Добавлены атрибуты фильтрации type и withoutturnover для [Отчет обороты](../reports/#otchety-otchet-oboroty)
- Новый заголовок управления временем жизни ссылок на скачивание изображений и файлов. Описание в [общих сведениях](../#mojsklad-json-api-obschie-swedeniq-ssylki-na-fajly)

### 29-07-2021
#### Добавлено
- [Фильтрация ассортимента](../dictionaries/#suschnosti-assortiment-nastrojki-sprawochnika) по штрихкоду, наименованию группы товаров, типу и использованию серийных номеров

### 28-07-2021
#### Добавлено
- Возможность работать с файлами в комментариях к [задачам](../dictionaries/#suschnosti-zadacha)

### 28-07-2021
#### Добавлена
- Возможность expand поля **masterRetailStores** у [точек продаж](../dictionaries/#suschnosti-tochka-prodazh)

### 26-07-2021
#### Изменено
- Добавлены поля `vatEnabled`, `effectiveVatEnabled` и `useParentVat` в [Группы товаров](../dictionaries/#suschnosti-gruppa-towarow), [Товары](../dictionaries/#suschnosti-towar), [Комплекты](../dictionaries/#suschnosti-komplekt), [Услуги](../dictionaries/#suschnosti-usluga)
- Добавлено поле `vatEnabled` в позиции [Документов](../documents/)
- Добавлены ошибки `16010` и `17021`

### 09-07-2021
#### Добавлено
- Новый ресурс [Обороты по товару с детализацией по документам](../reports/#otchety-otchet-oboroty-oboroty-po-towaru-s-detalizaciej-po-dokumentam)

### 05-07-2021
#### Добавлено
- Новый тип уведомлений о скором окончании действия доступа к аккаунту Facebook

### 01-07-2021
#### Исправлено
- Исправлено описание обязательности полей отчета обороты при ответе

### 28-06-2021
#### Добавлено
- Пермиссии на документы маркировки в [правах сотрудника](../dictionaries/#suschnosti-sotrudnik-rabota-s-prawami-sotrudnika)

### 25-06-2021
#### Добавлено
- Новый ресурс [Отчет обороты](../reports/#otchety-otchet-oboroty)

### 10-06-2021
#### Документация
- Добавлено описание параметров фильтрации выборки `momentFrom` и `momentTo` в отчетах прибыльности

### 08-06-2021
#### Изменено
- Изменены лимиты по [вебхукам](../dictionaries/#suschnosti-vebhuki): выделены отдельные лимиты для решений  

### 03-06-2021
#### Добавлено
- Возможность перехода к соответствующему разделу с описанием ошибки по ссылке в `errors.moreInfo`

### 03-06-2021
#### Документация
- Исправлено описание атрибута `pack` у позиций документов

### 02-06-2021
#### Добавлено
- По остаткам комплектов в позициях документа, добавлена возможность получения cost, quantity и available.

### 01-06-2021
#### Добавлено
- Возможность получать и изменять пользовательские роли от лица решения
- Исправлена ошибка: при изменении пермиссий у роли сотрудника, был невозможен вход в систему

### 31-05-2021
#### Добавлено
- Добавлены поля `welcomeBonusesEnabled`, `welcomeBonusesValue`, `welcomeBonusesMode` в [Бонусную программу](../dictionaries/#suschnosti-bonusnaq-programma)
- Возможность получать коды маркировки товаров и транспортных упаковок в формате тега 1162 (поле `trackingCodes_1162`) для документа типа [Отгрузка](../documents/#dokumenty-otgruzka-otgruzki-kody-markirowki-towarow-i-transportnyh-upakowok-w-formate-tega-1162).

### 28-05-2021
#### Документация
- Добавлена колонка `Expand` в таблицы описания атрибутов сущностей в разделах: "Сущности" и "Документы"

### 27-05-2021
#### Добавлено
- Добавлены новые поля `authorizedHosts`, `authorizedIpNetwork`, `authorizedIpNetmask` для ограничения доступа по ip в [эндпоинте управления правами сотрудника](../dictionaries/#suschnosti-sotrudnik-rabota-s-prawami-sotrudnika)

### 21-05-2021
#### Документация
- Исправлено описание пермиссий при работе с пользовательскими справочниками

### 21-05-2021
#### Добавлено
- Исправлена отметка об обязательности складов для части документов
- Добавлен новый эндпоинт для системных ролей
- Добавлен новый эндпоинт (crud) для пользовательских ролей
- Новый ресурс [отмены асинхронной задачи](../#mojsklad-json-api-asinhronnyj-obmen-otmena-asinhronnoj-zadachi)
- Ошибка [61007](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-asinhronnogo-obmena)

### 21-05-2021
#### Исправлено
- В примерах исправлен url получения метаданных [Комплектов](../dictionaries/#suschnosti-komplekt)
  и [Услуг](../dictionaries/#suschnosti-usluga)

### 20-05-2021
#### Добавлено
- Добавлена возможность редактировать поле discounts у контрагента
- Раскомплектовывание комплектов на составляющие компоненты при создании [шаблона заказа поставщику на основе](../documents/#dokumenty-zakaz-postawschiku-shablon-zakaza-postawschiku-na-osnowe)
- Добавлена новая схема работы с ошибками и новый статус `API_ERROR` в
  [асинхронном обмене](../#mojsklad-json-api-asinhronnyj-obmen)
  
### 17-05-2021
#### Документация
- В Позиции Отгрузки добавлен список комплектов
- Исправлено описание `product.packs.barcodes`, `consignment.barcodes`, `bundle.components`, `consignment.image`
- Исправлено описание атрибута `images` в товарах, комплектах и модификациях
- Исправлено указание на обязательность в ответе полей `uom.accountId`, `uom.group`, `product.minimumBalance`, `country.accountId`, `demand.vatSum`, `counterparty.state`
- Исправлено указание на обязательность в ответе поля `owner` в сущностях

### 11-05-2021
#### Добавлено
- Возможность выполнять запрос [получения Ассортимента](../dictionaries/#suschnosti-assortiment)
 [асинхронно](../#mojsklad-json-api-asinhronnyj-obmen)

### 05-05-2021
#### Изменено
- Исправлена ошибка, при которой пользователь мог просматривать и добавлять комментарий к задаче, без пермиссии к просмотру задач

### 29-04-2021
#### Добавлено
- Поле `earnWhileRedeeming` в [Бонусную программу](../dictionaries/#suschnosti-bonusnaq-programma)

### 29-04-2021
#### Добавлено
- Возможность выполнять запрос [получения списка Контрагентов](../dictionaries/#suschnosti-kontragent-poluchit-spisok-kontragentow)
 [асинхронно](../#mojsklad-json-api-asinhronnyj-obmen)

### 28-04-2021
#### Изменено
- Для атрибутов
  AttributeMetadata.required ,
  AgentAccount.isDefault, WebHook.enabled, Product.weighed
  при передаче null значения выводится ошибка 2016

### 28-04-2021
#### Изменено
- Для документа [`Оприходования`](../documents/#dokumenty-oprihodowanie)
  теперь учитывается пермиссия `Видеть себестоимость, цену закупки и прибыль товаров`. При отсутствии пермиссии в json представлении
  документа будет отсутствовать поле `sum`, а в позициях не будет поля `price`.

### 27-04-2021
#### Добавлено
- Очередь для [асинхронных задач](../#mojsklad-json-api-asinhronnyj-obmen)
- Обновлен список [ограничений](../#mojsklad-json-api-ogranicheniq) (добавлена информация про размер очереди асинхронных задач)
- Новый статус `PENDING` для [асинхронных задач](../#mojsklad-json-api-asinhronnyj-obmen)
- Эндпоинт получения [списка статусов асинхронных задач](../#mojsklad-json-api-asinhronnyj-obmen-statusy-asinhronnyh-zadach)
- Поле **meta** для [асинхронных задач](../#mojsklad-json-api-asinhronnyj-obmen)

### 27-04-2021
#### Добавлена
- Возможность создавать [вебхуки](../dictionaries/#suschnosti-vebhuki) для [асинхронных задач](../#mojsklad-json-api-asinhronnyj-obmen)

### 26-04-2021
#### Изменено
- Исправлен некорректный url в примерах json [Управления настройками справочника ассортимента](../dictionaries/#suschnosti-assortiment-poluchit-nastrojki-sprawochnika-towarow)

### 26-04-2021
#### Добавлены
- Новые поля `directorPosition`, `directorSign`, `chiefAccountSign`, `stamp` в [Юрлице](../dictionaries/#suschnosti-jurlico)

### 26-04-2021
#### Изменено
- Исправлено неточное описание привязок документов в общих сведениях

### 24-04-2021
#### Документация
- Добавлен новый раздел [Подписка компании](../dictionaries/#suschnosti-podpiska-kompanii)

### 24-04-2021
#### Изменено
- Исправлена работа с документом [Возврат поставщику](../documents/#dokumenty-vozwrat-postawschiku):
  добавлена проверка совпадения значения поля `vatEnabled` при создании и обновлении документа на основании [Приемки](../documents/#dokumenty-priemka)

### 23-04-2021
#### Добавлено
- Добавлены поля authorApplication в [Задачи](../dictionaries/#suschnosti-zadacha) и [События Контрагента](../dictionaries/#suschnosti-kontragent-sobytiq-kontragenta)

### 22-04-2021
#### Документация
- Добавлено описание поля **code** для ряда сущностей. Где оно было, убран атрибут `Только для чтения`

### 15-04-2021
#### Добавлено
- Возможность работы с файлами, прикрепленными к [Задаче](../dictionaries/#suschnosti-zadacha)

### 13-04-2021
#### Добавлено
- Добавлена новая ошибка [17020](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-dokumentow) - товар из упаковки в позиции документа не соответствует товару, указанному в данной позиции
- Добавлена валидация товара из упаковки в позиции документа

### 09-04-2021
#### Документация
- Переработан раздел [Работа с доп. полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)
- Добавлен тип MetaArray - объект с полями **meta** и **rows**
- Упоминание Array(Meta) изменено на Array(Object) или на MetaArray
- Изменен формат описания поля **trackingCodes** в Отгрузках и Приёмках
- Добавлен раздел [Валюта в документах](../documents/#dokumenty-obschie-swedeniq-valuta-w-dokumentah) с описанием поля **rate**
- В описание добавлены отсутствовавшие поля **meta** в Счета и Контактные лица Контрагента
- Убрано возможное разночтение в описании поля **tags** Контрагента
- Для полей **consignee** и **carrier** в Отгрузках и Счетах-фактурах выданных добавлена пометка про тип сущностей
- Удалена пометка об обязательности поля **house** в адресах
- Исправлен тип поля **certificateNumber** у Юрлиц на корректный
#### Изменено
- Изменен регистр ключевого слова в [заказе покупателя](../documents/#dokumenty-zakaz-pokupatelq)
- Изменен регистр ключевого слова в [заказе поставщику](../documents/#dokumenty-zakaz-postawschiku)

### 07-04-2021
#### Добавлено
- Добавлен [пример](../reports/#otchety-otchet-ostatki-rasshirennyj-otchet-ob-ostatkah) в отчет остатки по параметру includeRelated 

### 06-04-2021
#### Добавлено
- Добавлено [описание](../reports/#otchety-otchet-pribyl-nost-poluchit-pribyl-nost-po-towaram) отчета по прибыльности по товарам
- Добавлено [описание](../reports/#otchety-otchet-pribyl-nost-poluchit-pribyl-nost-po-modifikaciqm) отчета по прибыльности по модификациям

### 26-03-2021
#### Добавлено
- Возможность выполнять запросы [асинхронно](../#mojsklad-json-api-asinhronnyj-obmen)
- Статья в [воркбук](../workbook/#workbook-rabota-s-asinhronnym-obmenom)
- Описание ошибок [61000-61006](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-asinhronnogo-obmena)  

### 23-03-2021
#### Добавлено
- Поле `postponedBonusesDelayDays` в [Бонусную программу](../dictionaries/#suschnosti-bonusnaq-programma)
- Поля `transactionStatus`, `executionDate` и `categoryType` в [Бонусные операции](../dictionaries/#suschnosti-bonusnaq-operaciq)

### 01-03-2021
#### Документация
- Исправлен запрос в примере на [массовое удаление модификаций](../dictionaries/#suschnosti-modifikaciq-massowoe-udalenie-modifikacij)

### 18-02-2021
#### Изменено
- Изменены CSS стили

### 11-02-2021
#### Изменено
- Исправлены битые ссылки в [Общих сведениях](../#mojsklad-json-api-obschie-swedeniq)
- Исправлено указание на обязательность в ответе поля `vatIncluded` в документах

### 04-02-2021
#### Изменено
- Добавлен новый тип уведомлений [Уведомление из сценария](../notification/#uwedomleniq-podrobnoe-opisanie-tipow-uwedomlenij-uwedomlenie-iz-scenariq)
- Добавлена новая группа уведомлений [Сценарии](../notification/#uwedomleniq-nastrojki-uwedomlenij-atributy-suschnosti)

### 02-02-2021
#### Добавлено
- Новые [эндпоинты для упралвения правами сотрудника](../dictionaries/#suschnosti-sotrudnik-rabota-s-prawami-sotrudnika) и [эндпоинты для доступа сотрудника к основному сервису 
МойСклад](../dictionaries/#suschnosti-sotrudnik-aktiwaciq-sotrudnika) в раздел [Сотрудники](../dictionaries/#suschnosti-sotrudnik)
- Новые ошибки [3023-3024](../#mojsklad-json-api-oshibki-obschie-oshibki-walidacii) и [43007-43029](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-sotrudnikow)

### 27-01-2021
#### Документация
- Изменен тип поля quantity с Int на Float в разделе описания вложенной [Упаковки товара](../dictionaries/#suschnosti-towar-towary-atributy-wlozhennyh-suschnostej-upakowki-towara)
- Удалено описание полей объекта доп. полей из документов. 
  Его по-прежнему можно найти в разделе [Работа с доп. полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)
- Исправлен ряд опечаток в этом разделе

### 20-01-2021
#### Изменено
- Добавлены поля `printed` и `published` в [документах](../documents/)

### 18-01-2021
#### Изменено
- Для доступа к аудиту не нужно быть администратором

### 22-12-2020
#### Изменено
- Исправлен http метод в запросе на удаление группы товаров с GET на DELETE в [Группа товаров](../dictionaries/#suschnosti-gruppa-towarow-udalit-gruppu-towarow)
  и тип полей `minPrice`, `buyPrice` c Double на Object в [Товаре](../dictionaries/#suschnosti-towar)

### 22-12-2020
#### Документация
- Из параметров удален `states`, добавленные туда по ошибке в [метаданных Розничных смен](../documents/#dokumenty-roznichnaq-smena-metadannye-roznichnyh-smen)

### 17-12-2020
#### Изменено
- Исправлен тип qrBankPercent с Int на Double в [Точке продаж](../dictionaries/#suschnosti-tochka-prodazh)

### 04-12-2020
#### Документация
- Исправлены неточности в разделе [Отчет остатки](../reports/#otchety-otchet-ostatki)

### 30-11-2020
#### Документация
- Исправлено форматирование таблицы описания полей результата запроса на [получение дополнительных полей](../#mojsklad-json-api-obschie-swedeniq-dopolnitel-nye-polq-suschnostej)

### 26-11-2020
#### Добавлено
- Фильтрация по `assortment` для [Документов](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-dopolnitel-nye-fil-try)

### 21-11-2020
#### Изменено
- Описание ограничений в [Общих сведениях](../#mojsklad-json-api-obschie-swedeniq)

### 05-11-2020
#### Добавлено
- Эндпоинт [Управления настройками справочника контрагентов](../dictionaries/#suschnosti-kontragent-nastrojki-sprawochnika-kontragentow)

### 02-11-2020
#### Добавлено
- добавлены коды [ошибок 1083, 1084](/doc/api/remap/1.2/#mojsklad-json-api-oshibki-oshibki-formata).

### 29-10-2020
#### Добавлено
- Исправлена ошибка регистра кода сущности в  [Группе товаров](../dictionaries/#suschnosti-gruppa-towarow)

### 23-10-2020
#### Добавлено
- Поля `idQR` и `qrTerminalId` в [Точку продаж](../dictionaries/#suschnosti-tochka-prodazh)

### 21-10-2020
#### Изменено
- Описание ограничений в [Общих сведениях](../#mojsklad-json-api-obschie-swedeniq)

### 21-10-2020
#### Изменено
- Добавлена возможность создавать, изменять и удалять [Отделы](../dictionaries/#suschnosti-otdel)

### 21-10-2020
#### Добавлено
- Добавлено заполнение себестоимости в эндпоинт [Автозаполнения](../documents/#dokumenty-awtozapolnenie-zapros-awtozapoleniq-sebestoimosti)

### 20-10-2020
#### Добавлено
- Поля `qrPayEnabled`, `qrBankPercent` и `qrAcquire` в [Точку продаж](../dictionaries/#suschnosti-tochka-prodazh)
- Поля `qrSum` и `prepaymentQrSum` в [Розничную продажу](../documents/#dokumenty-roznichnaq-prodazha)
- Поле `qrSum` в [Розничный возврат](../documents/#dokumenty-roznichnyj-wozwrat)
- Ошибки `18005`, `18006`, `19003` и `19004`
#### Изменено
- Описание полей `acquire` и `bankPercent` в [Точке продаж](../dictionaries/#suschnosti-tochka-prodazh)
- Описание [работы с полями оплаты розничной продажи](../documents/#dokumenty-roznichnaq-prodazha-roznichnye-prodazhi-rabota-s-polqmi-oplaty-roznichnoj-prodazhi)
- Текст ошибок `18000` и `19002`

### 16-10-2020
#### Добавлено
- Эндпоинт [Автозаполнения цен, скидок, ндс позиций](../documents/#dokumenty-awtozapolnenie)

### 08-10-2020
#### Изменено
- Исправлены опечатки

### 22-09-2020
#### Документация
- Исправлено описание поля `productFolder` у [Групп товаров](../dictionaries/#suschnosti-gruppa-towarow)

### 20-09-2020
#### Изменено
- Изменено описание установленных ограничений в [Общих сведениях](../#mojsklad-json-api-obschie-swedeniq)

### 31-08-2020
#### Изменено
- Описание атрибута `allowCreateProducts` в [Точке продаж](../dictionaries/#suschnosti-tochka-prodazh)

### 30-07-2020
#### Изменено
[Дополнительные поля](../workbook/#workbook-rabota-s-dopolnitel-nymi-polqmi-cherez-json-api) Товаров, Услуг, Модификаций и Комплектов объединены и располагаются в метаданных Товаров.

### 28-07-2020
#### Добавлено
- Добавлена возможность изменять настройки применения скидок в [настройках компании](../dictionaries/#suschnosti-nastrojki-kompanii)

### 27-07-2020
#### Добавлено
 - Поля `minionToMasterType` и `masterRetailStores` в точку продаж, позволяющие указывать стратегию выбора мастер точки продаж для фискализации облачных чеков.

### 22-07-2020
#### Добавлено
- Новое поле `factureIn` в [Возврат поставщику](../documents/#dokumenty-vozwrat-postawschiku)

### 15-07-2020
#### Добавлено
- Эндпоинты [управления скидками](../dictionaries/#suschnosti-skidki)

#### Документация
- Дополнен раздел [Скидки](../dictionaries/#suschnosti-skidki) новыми примерами

### 26-06-2020
#### Документация
- [Информация](../#mojsklad-json-api-obschie-swedeniq) в документацию про отзыв прошлых токенов при создании нового
- Аутентификации через токен в примерах приведена к единому виду

### 23-06-2020
#### Добавлено
- Эндпоинт [Настройки пользователя](../dictionaries/#suschnosti-nastrojki-pol-zowatelq)

### 18-06-2020
#### Добавлено
- Поля ФИО для [Юрлиц](../dictionaries/#suschnosti-jurlico) и [Контрагентов](../dictionaries/#suschnosti-kontragent) типа индивидуальный предприниматель и физическое лицо
- Возможность работы с файлами в [Операциях](../documents/#dokumenty), [Товарах](../dictionaries/#suschnosti-towar) и [Контрагентах](../dictionaries/#suschnosti-kontragent)

### 11-06-2020
#### Документация
- Добавлена информация о лимитах на число элементов в коллекциях и вложенных сущностях (1000 элементов)

### 10-06-2020
#### Добавлено
- Эндпоинт [Настройка аккаунта компании](../dictionaries/#suschnosti-nastrojki-kompanii)

### 03-06-2020
#### Добавлено
- Эндпоинт [Управления настройками справочника товаров](../dictionaries/#suschnosti-assortiment)

### 28-05-2020
#### Документация
- Добавлена информация об [ограничениях](../workbook/#workbook-chto-nuzhno-znat-dlq-nachala-raboty-s-json-api-ogranicheniq) и новом [параметре в Вебхуках](../dictionaries/#suschnosti-vebhuki)

### 28-05-2020
#### Добавлено в API Remap 1.1 и 1.2
- Для работы с маркированной продукцией добавлены поля `trackingType` - тип маркированной продукции, `tnved` - код ТНВЭД в сущности [Товар](../dictionaries/#suschnosti-towar-sozdat-towar)

#### Документация
- Добавлены описания ошибок [16102-16110](../#mojsklad-json-api-oshibki-kody-oshibok-dlq-towarow), связанных с маркированными товарами

### 15-05-2020
#### Добавлено
- Возможность изменения полей [Сотрудника](../dictionaries/#suschnosti-sotrudnik): `email`, `group`, `archived`, `owner`, `shared`

### 08-05-2020
#### Документация
- Добавлено описание по работе с маркированными товарами в [Приемке](../documents/#dokumenty-priemka) и [Отгрузке](../documents/#dokumenty-otgruzka)

### 06-05-2020
#### Документация
- Добавлено описание об ограничении выборки в блоке [Остатки в позициях документов](../documents/#dokumenty)

### 27-04-2020
#### Документация
- Удалено описание заголовка `Lognex-Pretty-Print-JSON` в [Общих сведениях](../#mojsklad-json-api-obschie-swedeniq)

### 26-04-2020
#### Документация
- [Изменено описание](../#mojsklad-json-api-ogranicheniq) ограничения по запросу на один IP

### 26-04-2020
#### Документация
- Исправление опечатки в описании `email` [Сотрудника](../dictionaries/#suschnosti-sotrudnik)

### 14-04-2020
#### Документация
- Добавлено описание новых типов для [фильтров Аудита](../audit/#audit-audit-fil-try)

### 26-03-2020
#### Изменено
- В [Розничной смене](../documents/#dokumenty-roznichnaq-smena) удалено поле `applicable` в перечислении полей

### 10-03-2020
#### Добавлено
- Поля `printed` и `published` в эндпоинте `entity/operation` 

### 04-03-2020
#### Добавлено
- Поле `stockDays` - количество дней на складе в [Отчет Остатки -> Все Остатки](../reports/#otchety-otchet-ostatki-rasshirennyj-otchet-ob-ostatkah-atributy-ob-ekta-otcheta)

### 04-03-2020
#### Документация
- Добавлен новый раздел [Workbook](../workbook/#workbook)

##
[Более полный список изменений](https://github.com/moysklad/api-remap-1.2-doc/blob/master/CHANGELOG.md)
