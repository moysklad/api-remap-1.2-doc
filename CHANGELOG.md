# JSON API 1.2 Changelog
Изменения в JSON API 1.2 будут описаны в данном документе.

### 24-07-2025
#### Поправлена
- Опечатка типа данных c int на float для полей `volume` и `weight` для [комплекта](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-komplekt-komplekty)

### 22-07-2025
#### Добавлено
- Поле `minimumStock` в сущность [модификация](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-modifikaciq-modifikacii) для работы с неснижаемыми остатками

### 17-07-2025
#### Добавлена
- Ошибка [13005](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-otchetow-ostatkow)

### 16-07-2025
#### Добавлено
- Типы компаний региона Казахстан для [контрагентов](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-kontragent-kontragenty-tip-kontragenta)
- Типы компаний региона Казахстан для [юридических лиц](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-jurlico-jurlica-tip-urlica)
- Реквизиты региона Казахстан для [контрагентов](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-kontragent-kontragenty-atributy-wlozhennyh-suschnostej-rekwizity-kazahistana)
- Реквизиты региона Казахстан для [юридических лиц](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-jurlico-jurlica-atributy-wlozhennyh-suschnostej-rekwizity-kazahistana)

### 10-07-2025
#### Добавлена
- Ошибка при работе с печатными формами [33013](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-pechatnyh-form)

### 09-07-2025
#### Добавлено
- Добавлена новая [ошибка 3043](https://dev.moysklad.ru/doc/api/remap/1.2/index.html#mojsklad-json-api-oshibki-obschie-oshibki-walidacii)

### 03-07-2025
#### Добавлено
- Новые типы маркированной продукции `VEGETABLE_OIL` для растительных масел, `PET_FOOD` для кормов для животных для [Товара](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar-towary) и [Комплекта](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-komplekt-komplekty)

### 02-07-2025
#### Исправлено
- Актуализирована документация [Настройки пользователя](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-nastrojki-pol-zowatelq)

### 01-07-2025
#### Добавлен
- Плановая дата завершения этапа `plannedEndDate` в запросе [Производственных этапов](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-proizwodstwennoe-zadanie-proizwodstwennye-atapy)

### 17-06-2025
#### Добавлено
- Поле `giftCards` в [Розничную продажу](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnaq-prodazha)

### 09-06-2025
#### Добавлено
- Описание параметра `fields` [Fields](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-chto-takoe-fields)
- Краткий [Отчет на остатки по ячейкам](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-ostatki-poluchit-kratkij-otchet-ob-ostatkah-po-qchejkam)

### 03-06-2025
#### Добавлено
- Поля `description`, `defect` в [Выполнение этапа производства](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vypolnenie-atapa-proizwodstwa)
- Ошибки [26211-26213](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-vypolnenij-atapow-proizwodstwa)
- Тип маркируемой продукции `BEER_ALCOHOL` (Пиво и слабоалкогольная продукция) в документ [Вывод из оборота](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vywod-kodow-markirowki-iz-oborota-vywod-iz-oborota-tip-markiruemoj-produkcii)
- Способ вывода `MISMATCH` (Пересортица по кодам) в документ [Вывод из оборота](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vywod-kodow-markirowki-iz-oborota-vywod-iz-oborota-sposob-wywoda-iz-oborota)

### 27-05-2025
#### Добавлено
- Новые типы документов для [Ленты Событий](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-lenta-sobytij)

### 27-05-2025
#### Изменено
- [Особенности поведения при создании Вывода из оборота](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vywod-kodow-markirowki-iz-oborota-sozdat-vywod-iz-oborota-osobennosti-powedeniq-pri-sozdanii-vywoda-iz-oborota) для способа вывода `DISTANCE`

### 26-05-2025
#### Добавлено
- Поле **declaration** с информацией о прослеживаемости импортных товаров в позиции документов [отгрузка](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-otgruzka-otgruzki-pozicii-otgruzki), [розничная продажа](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnaq-prodazha-roznichnye-prodazhi-pozicii-roznichnoj-prodazhi), [списание](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-spisanie-spisaniq-pozicii-spisaniq)

### 20-05-2025
#### Добавлено
- Добавлена новая [ошибка 3042](https://dev.moysklad.ru/doc/api/remap/1.2/index.html#mojsklad-json-api-oshibki-obschie-oshibki-walidacii)

### 15-05-2025
#### Изменено
- Описание поля `accountCountry` в [Настройках компании](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-nastrojki-kompanii)

### 14-05-2025
#### Добавлено
- Поле `agent` в документе [Вывод кодов маркировки из оборота](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vywod-kodow-markirowki-iz-oborota-vywod-iz-oborota-atributy-suschnosti)
- Значения для поля `trackingType` в документе [Вывод кодов маркировки из оборота](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vywod-kodow-markirowki-iz-oborota-vywod-iz-oborota-tip-markiruemoj-produkcii): `BICYCLE`, `VETPHARMA`, `SOFT_DRINKS`, `WATER`, `SEAFOOD`
- Значение `DONATION` для поля `retireOrderType` в документе [Вывод кодов маркировки из оборота](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vywod-kodow-markirowki-iz-oborota-vywod-iz-oborota-sposob-wywoda-iz-oborota)

### 13-05-2025
#### Добавлено
- Описание и примеры удаления неснижаемых остатков по складам через использование эндпоинта на массовое удаление для [товар](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar-towary)

### 28-04-2025
#### Добавлено
- Поле `advancePaymentSum` в [Розничную продажу](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnaq-prodazha)
- Ошибка `18007`

#### Изменено
- Описание [работы с полями оплаты розничной продажи](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnaq-prodazha-roznichnye-prodazhi-rabota-s-polqmi-oplaty-roznichnoj-prodazhi)
- Текст ошибок `18000`, `18005` и `18006`

### 25-04-2025
#### Добавлено
- Поле `minimumStock` в сущность [товар](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar-towary) для работы с неснижаемыми остатками

### 10-04-2025
#### Добавлено
- Описание отключения JSON API пользователю в [Ограничения](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-ogranicheniq)

### 18-03-2025
#### Добавлено
- Поле `fiasCode__ru` для [контрагентов](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-kontragent-kontragenty-atributy-wlozhennyh-suschnostej-adres)
- Поле `fiasCode__ru` для [юридических лиц](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-jurlico-jurlica-atributy-wlozhennyh-suschnostej-adres)

### 10-03-2025
#### Добавлено
- Поддержка комплектов в документах, содержащих договор комиссии:
  - Отгрузка
  - Заказ покупателя
  - Возврат покупателя
  - Полученный отчет комиссионера

#### Изменено
- Описание `32001` кода [ошибки](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-dogoworow)

#### Удалено
- `18002` код [ошибки](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-prodazh-otgruzok)

### 05-03-2025
#### Добавлены
- Документы [Заказ кодов маркировки](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-zakaz-kodow-markirowki), [Вывод кодов маркировки из оборота](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vywod-kodow-markirowki-iz-oborota)
- Ошибки [57000-57002](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-markirowki), [57100-57108](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-zakaza-kodow-markirowki)

### 04-03-2025
#### Изменено
- Описание поля `marksCheckMode` в [Точку продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh), настройка проверки КМ перед продажей в ГИС МТ

#### Добавлено
- Поле `archived` в [Серии](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-seriq)

### 13-02-2025
#### Добавлено
- Типы компаний региона Узбекистан для [контрагентов](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-kontragent-kontragenty-tip-kontragenta)
- Типы компаний региона Узбекистан для [юридических лиц](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-jurlico-jurlica-tip-urlica)
- Реквизиты региона Узбекистан для [контрагентов](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-kontragent-kontragenty-atributy-wlozhennyh-suschnostej-rekwizity-uzbekistana)
- Реквизиты региона Узбекистан для [юридических лиц](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-jurlico-jurlica-atributy-wlozhennyh-suschnostej-rekwizity-uzbekistana)

### 12-02-2025
#### Добавлено
- Условие автоматического отключения JSON API пользователю в [Ограничения](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-ogranicheniq)

### 27-01-2025
#### Добавлено
- Добавлены [регональные заголовки](https://dev.moysklad.ru/doc/api/remap/1.2/index.html#mojsklad-json-api-obschie-swedeniq-regional-nye-zagolowki)
- Ошибка  [16114](https://dev.moysklad.ru/doc/api/remap/1.2/index.html#mojsklad-json-api-oshibki-kody-oshibok-dlq-towarow) Ошибка сохранения товара: маркированный товар не может быть разливным

### 16-01-2025
#### Добавлено
- Поле `service` в [Выполнение этапа производства](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vypolnenie-atapa-proizwodstwa)
- Возможность назначать исполнителем не только сотрудника но и контрагента в [Выполнении этапа производства](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vypolnenie-atapa-proizwodstwa)

### 16-01-2025
#### Добавлено
- поля `files`, `instruction`в [Производственные этапы](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-proizwodstwennoe-zadanie-proizwodstwennye-atapy)

### 15-01-2025
#### Добавлено
- Добавлен параметр `withRecalculate` в эндпоинт [Краткий отчет об остатках](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-ostatki-kratkij-otchet-ob-ostatkah).
- Новые типы маркированной продукции `BICYCLE` для велосипедов, `NABEER` для безалкогольного пива, `SEAFOOD` для икры и морепродуктов, `VETPHARMA` для ветеринарных препаратов для [Товара](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar-towary) и [Комплекта](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-komplekt-komplekty)

### 25-12-2024
#### Добавлено
- Ошибки [25063](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-tehnologicheskih-kart), [26114](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-proizwodstwennogo-zadaniq), [26209, 26210](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-vypolnenij-atapow-proizwodstwa)
- Поле `standardHourCost` в [Этап производства](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-jetap-proizwodstwa), Стоимость нормо-часа
- Поля `standardHourCost`, `enableHourAccounting` в [Этап техкарты](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tehkarta-tehkarty)
- Поля `standardHourCost`, `enableHourAccounting` в [Производственные этапы](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-proizwodstwennoe-zadanie-proizwodstwennye-atapy)
- Поля `standardHourCost`, `enableHourAccounting` в [Выполнение этапа производства](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vypolnenie-atapa-proizwodstwa)

### 23-12-2024
#### Изменены
- Эндпоинты для работы с [Настройками уведомлений](https://dev.moysklad.ru/doc/api/remap/1.2/notification/#uwedomleniq-nastrojki-uwedomlenij)

### 17-12-2024
#### Добавлен
- Параметр фильтрации `entityType` в [Отчетах Прибыльность](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-pribyl-nost)

### 02-12-2024
#### Добавлено
- Вывод дополнительных полей в элементы [Пользовательских справочников](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-pol-zowatel-skij-sprawochnik)
- Вывод метаданных дополнительных полей в метаданные пользовательских справочников
- Поле `ID` в метаданные пользовательского справочника

#### Изменено
- Актуализирована документация по [Пользовательским справочникам](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-pol-zowatel-skij-sprawochnik)

### 19-11-2024
#### Добавлено
- Поле `salesMargin` в [Отчет Прибыльность](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-pribyl-nost)

### 01-11-2024
#### Добавлена
- Ошибка [4003](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-tochek-prodazh) при создании\изменении точки продаж productFolders содержит родительскую группу товаров и ee дочерние группы одновременно

### 29-10-2024
#### Добавлена
- Ошибка [71000](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-serij) при создании серии в качестве ассортимента указана серия 

### 24-10-2024
#### Добавлено
- Поле `advancePaymentVat` в [Юрлица](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-jurlico), Налоговая ставка для авансов для плательщиков НДС

### 17-10-2024
#### Изменено
- Изменено одно из [правил бана](https://dev.moysklad.ru/doc/api/remap/1.2/index.html#mojsklad-json-api-ogranicheniq)

### 08-10-2024
#### Добавлена
- Возможность фильтровать архивные товары в [отчете оборотов](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-oboroty)

### 30-09-2024
#### Добавлено
- Возможность обновлять и удалять события в [Ленте Событий](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-lenta-sobytij)
- Ошибка [2026](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-oshibki-formata)

### 16-09-2024
#### Добавлено
- Возможность добавлять события в [Ленту Событий](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-lenta-sobytij)
- Ошибка [70000](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-lenty-sobytij)

### 03-09-2024
#### Добавлены
- Поле "склад материалов" (materialStore) в [Этапы Техкарты](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-jetap-proizwodstwa-jetapy)
- Поле "склад материалов" (materialStore) в [Производственные этапы](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-proizwodstwennoe-zadanie-proizwodstwennye-atapy)

### 28-08-2024
#### Добавлен
- Параметр фильтрации `productionTask` в запросе списка [Выполнений этапов производства](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vypolnenie-atapa-proizwodstwa-poluchit-spisok-vypolnenij-atapow-proizwodstwa)

### 26-08-2024
#### Добавлены
- Параметр фильтрации `moment` в запросе списка [Выполнений этапов производства](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vypolnenie-atapa-proizwodstwa-poluchit-spisok-vypolnenij-atapow-proizwodstwa)
- Параметры фильтрации `moment`, `organization`, `deliveryPlannedMoment` в запросе списка [Производственных заданий](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-proizwodstwennoe-zadanie)

### 22-08-2024
#### Добавлен
 - Флаг "Без закрывающих документов" для [Исходящего платежа](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-ishodqschij-platezh)
 - Флаг "Без закрывающих документов" для [Расходного ордера](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-rashodnyj-order)

### 19-08-2024
#### Добавлено
- Новый тип маркированной продукции `SOFT_DRINKS` для безалкогольных напитков для [Товара](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar-towary) и [Комплекта](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-komplekt-komplekty)

### 22-07-2024
#### Добавлена
- Возможность указывать несколько складов в [отчете оборотов](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-oboroty) 

### 16-07-2024
#### Добавлено
- Добавлено описание получения ссылки на [изображение](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-izobrazhenie-poluchit-ssylku-na-izobrazhenie-towara-ili-komplekta-ili-modifikacii)

### 12-07-2024
#### Добавлен
- Новый [отчет По документам номенклатуры](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-po-dokumentam-nomenklatury) 

### 1-07-2024
#### Изменено
- Добавлена пермиссия viewProductCostAndProfit в список пермиссий [контекста запроса сотрудника](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-kontext-zaprosa-sotrudnika)

### 26-06-2024
#### Добавлены
- Условия автоматического отключения JSON API пользователю в [Ограничения](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-ogranicheniq)
- Условия автоматического отключения вебхука в [Ограничения](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-ogranicheniq)

### 24-06-2024
#### Добавлено
- Ошибка [17023](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-dokumentow)

### 17-06-2024
#### Добавлена
- Ошибка [3039](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-obschie-oshibki-walidacii)

### 10-06-2024
#### Добавлено
- Новый тип маркированной продукции `MEDICAL_DEVICES` для медизделий и кресел-колясок для [Товара](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar-towary) и [Комплекта](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-komplekt-komplekty)
- Поле "нормо-часы" (standardHour) в [Этапы Техкарты](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tehkarta)
- Поле "нормо-часы" (standardHourUnit) в [Выполнения этапов производства](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vypolnenie-atapa-proizwodstwa)
- Поле "нормо-часы" (standardHourUnit) в [Производственные этапы](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-proizwodstwennoe-zadanie-proizwodstwennye-atapy)

### 29-05-2024
#### Добавлена
- Информация о работе с [Лентой Событий](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-lenta-sobytij)

### 16-05-2024
#### Добавлен
- Заголовок `X-Lognex-WebHook-DisableByPrefix` для выборочного отключения [вебхуков](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-vebhuki-primer-webhuka)

### 06-05-2024
#### Добавлена
- Возможность фильтрации по полю **store** в [счете покупателя](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-schet-pokupatelu) и [счете поставщика](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-schet-postawschika)

### 02-05-2024
#### Добавлено
- Ограничение на поле типа дата, подробнее в разделе [Формат даты и времени](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-format-daty-i-wremeni)

### 24-04-2024
#### Добавлено
- Поле `allPerformers` в [этапы производства](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-jetap-proizwodstwa), Признак доступности назначения на этап любого сотрудника
- Поле `performers` в [этапы производства](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-jetap-proizwodstwa), Метаданные возможных исполнителей
- Ошибка [25035](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-tehnologicheskih-processow)
- Добавлен новый тип уведомлений [Новое упоминание в ленте событий](../notification/#uwedomleniq-podrobnoe-opisanie-tipow-uwedomlenij-nowoe-upominanie-w-lente-sobytij)
- Добавлена новая группа уведомлений [Упоминания сотрудников](https://dev.moysklad.ru/doc/api/remap/1.2/notification/#uwedomleniq-nastrojki-uwedomlenij-struktura-dannyh)

### 23-04-2024
#### Добавлено
- Поле `salary` в [Сотрудник](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sotrudnik)

### 22-04-2024
#### Добавлено
- Поле `nextPositions` в [Техпроцесс](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tehprocess), следующие позиции для позиции техпроцесса
- Ошибки [25033, 25034](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-tehnologicheskih-processow)

### 17-04-2024
#### Добавлено
- Ошибка [3038](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-obschie-oshibki-walidacii)

### 09-04-2024
#### Добавлено
- Новая роль [Сотрудник производства](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sotrudnik-zapros-na-poluchenie-roli-sotrudnika-proizwodstwa) для [Сотрудника](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sotrudnik)
- Ошибка [43030](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-sotrudnikow)

### 02-04-2024
#### Добавлено
- Возможность получения [шаблонов](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-obschie-swedeniq-shablony-dokumentow) документов по токену решения

### 28-03-2024
#### Добавлено
- Возможность привязки [Заказа поставщика](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-zakaz-postawschiku) к [Заказу покупателя](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-zakaz-pokupatelq)

### 26-03-2024
#### Добавлено
- Обновлен список штрихкодов для [Товара](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar-towary-atributy-wlozhennyh-suschnostej-shtrihkody), [Модификации](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-modifikaciq-modifikacii-atributy-wlozhennyh-suschnostej-shtrihkody), [Услуги](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-usluga-uslugi-metadannye-uslug-shtrihkody), [Комплекта](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-komplekt-komplekty-komponenty-komplekta-shtrihkody)

### 25-03-2024
#### Добавлено
- Поле `costDistributionType` в [Техкарту](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tehkarta), тип распределения себестоимости

### 11-03-2024
#### Добавлено
- Поле `sendMarksToChestnyZnakOnCloud` в [Точку продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh), позволяющее управлять отправкой кассой-миньоном КМ на проверку в ЧЗ

### 07-03-2024
#### Добавлено
- Создание [шаблона Перемещения на основании](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-peremeschenie-shablon-peremescheniq-na-osnowe) Заказа покупателя

### 06-03-2024
#### Добавлено
- Эндпоинт [Серийные номера](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-serijnyj-nomer)

### 04-03-2024
#### Добавлено
- Эндпоинты работы с [Производственным заданием](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-proizwodstwennoe-zadanie)
- Эндпоинты работы с [Выполнением этапа](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vypolnenie-atapa-proizwodstwa)
- Ошибки [26101-26112](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-proizwodstwennogo-zadaniq)
- Ошибки [26200-26208](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-vypolnenij-atapow-proizwodstwa)
- Ошибки [3035, 3036](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-obschie-oshibki-walidacii)
- Ошибки [1089, 1092](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki)

### 26-02-2024
#### Добавлено
- Поля связей документов Приемки и Отгрузки в [Перемещение](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-peremeschenie)

### 07-02-2024
#### Добавлено
- Поле `marksCheckMode` в [Точку продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh), настройка проверки КМ перед продажей в ГИС МТ

### 31-01-2024
#### Изменено
- Добавлено поле `state` в [Задачу](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-zadacha) - сущность [Тип задачи](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-zadacha-tip-zadachi)

### 11-01-2024
#### Добавлено
- Поле `materialProcessingPlan` в [Техкарту](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tehkarta), техкарта для материала
- Ошибка [25062](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-tehnologicheskih-kart)

### 26-12-2023
#### Добавлен
- Добавлен новый тип маркированной продукции `SANITIZER` для антисептиков

### 26-12-2023
#### Добавлена
- Ошибка [3037](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-obschie-oshibki-walidacii)

### 25-12-2023
#### Изменено
- Для документа `Корректировка баланса контрагента` добавлена возможность указывать сотрудника в поле `agent`
- Документ `Корректировка баланса контрагента` переименован в [Корректировка взаиморасчетов](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-korrektirowka-wzaimoraschetow). Путь к документу в АПИ не менялся для совместимости
- Для документа [Исходящий платеж](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-ishodqschij-platezh) добавлена возможность указывать сотрудника в поле `agent`

### 22-12-2023
#### Добавлен
- Добавлен новый тип маркированной продукции `FOOD_SUPPLEMENT` для биологически активных добавок к пище

### 28-11-2023
#### Добавлено
- Поле `showBeerOnTap` в [Точку продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh), настройка отображения вскрытых кегов на кассе

### 27-11-2023
#### Изменено
- Приведение документации обязательности полей у [Договора](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-dogowor) в корректное состояние

#### Добавлена
- Ошибка [11002](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-statusow)

### 15-11-2023
#### Добавлена
- Ошибка [1091](https://dev.moysklad.ru/doc/api/remap/1.2/#error_1091) при указании некорректного значения для перечислимого параметра

### 14-11-2023
#### Добавлена
- Ошибка [3034](https://dev.moysklad.ru/doc/api/remap/1.2/#error_3034)
- Опечатка: удален тег `+Обязательное при ответе` для поля **owner** в документах

### 26-10-2023
#### Добавлено
- Добавлен новый тип маркированной продукции `BEER_ALCOHOL` для разливных слабоалкогольных напитков
- Удален неактуальный код ошибки [16104](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-towarow)
- Описание и примеры удаления вложенных сущностей в сущностях через использование эндпоинта на массовое удаление для [Комплектов](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-komplekt-massowoe-udalenie-komponentow-komplekta), [Задач](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-zadacha-massowoe-udalenie-komentariew-k-zadache), Техкарт([материалы](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tehkarta-massowoe-udalenie-materialow), [продукты](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tehkarta-massowoe-udalenie-produkta)) и [Техпроцессов](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tehprocess-massowoe-udalenie-pozicij-tehprocessa)

### 16-10-2023
#### Добавлено
- Добавлено поле `barcode` в [Ячейку склада](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sklad-yachejki-sklada)
- Ошибка [67006](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-yacheek-i-zon-sklada)

### 12-10-2023
#### Добавлено
- Описание и примеры удаления позиций в документах через использование эндпоинта на массовое удаление позиций

### 06-10-2023
#### Добавлено
- Добавлено поле `syncAgents` в [Точку продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh), выгружает покупателей для работы оффлайн.

### 05-10-2023
#### Добавлено
- Добавлены новые режимы reserve и inTransit [в краткий отчёт по остаткам](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-ostatki-poluchit-kratkij-otchet-ob-ostatkah)

### 20-09-2023
#### Удалены
- Ставший неактуальным `5004` код [ошибки](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-otchetow-komissionera).
- Ограничение на товар и его количество в позиции возврата на склад комиссионера для [полученного отчета комиссионера](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-poluchennyj-otchet-komissionera).

### 14-09-2023
#### Добавлено
- Использование обязательного [сжатия содержимого ответов](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-szhatie-soderzhimogo-otwetow)

#### Изменен
- Домен в примерах документации на api.moysklad.ru

### 06-09-2023
#### Добавлено
- Добавлено поле `allowDeleteReceiptPositions` в [Точку продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh), разрешающее удалять позиции в чеке.

### 31-08-2023
#### Добавлена
- Фильтрация по `retailShift` в [Розничную продажу](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnaq-prodazha),
[Розничный возврат](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnyj-wozwrat),
[Внесение денег](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vnesenie-deneg),
[Выплата денег](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vyplata-deneg)

### 15-08-2023
#### Добавлено
-  Добавлены поля `sex`, `birthDate` См. [Поля реквизитов контрагентов](https://dev.moysklad.ru/doc/api/remap/1.2/#suschnosti-kontragent-kontragenty-atributy-suschnosti-polq-rekwizitow)
-  Информация о новом типе поля `sex` См. [Пол контрагента](https://dev.moysklad.ru/doc/api/remap/1.2/#suschnosti-kontragent-kontragenty-pol-kontragenta)

### 11-08-2023
#### Добавлено
- Описание, с отличием поведения в [изменении позиции техпроцесса](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tehprocess-izmenit-poziciu-tehprocessa) апи от web-интерфейса
- Добавлены поля `requiredFio`, `requiredPhone`, `requiredEmail`, `requiredBirthdate`, `requiredSex` и `requiredDiscountCardNumber` в [Точку продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh), позволяющие управлять обязательностью заполнения полей при создании контрагентов.

### 28-07-2023
#### Исправлено
- Заменено "Заказ покупателя (salesreturn)" на "Заказ покупателя (customerorder)" в [шаблонах документов](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-obschie-swedeniq-shablony-dokumentow)

### 19-07-2023
#### Исправлено
- Добавлены закрывающие скобки в примере запроса в разделе [массовое удаление отгрузок](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-otgruzka-massowoe-udalenie-otgruzok)
#### Добавлено
- Значение "Начало работы" в допустимые значения [Стартового экрана](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-nastrojki-pol-zowatelq-startowyj-akran)

### 17-07-2023
#### Изменено
- Права для доступа к [Отчету Прибыльность](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-pribyl-nost) исправлены с `Прибыль и убытки` на `Прибыльность`

### 07-07-2023
#### Изменено
- Исправлена ссылка на раздел [Валюта в документах](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-obschie-swedeniq-valuta-w-dokumentah)

### 06-07-2023
#### Добавлена
- Возможность чтения, создания, изменения и удаления позиций возврата на склад комиссионера для [полученного отчета комиссионера](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-poluchennyj-otchet-komissionera).
- Новый `5004` код [ошибки](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-otchetow-komissionera).

### 26-06-2023
#### Добавлено
- Описание перемещения документа в [корзину](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-udalenie-w-korzinu)

### 19-06-2023
#### Добавлено
- Поле "оплата труда" (labourCost) в [Этапы Техкарты](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tehkarta) 

### 24-05-2023
#### Добавлен
- Новый `2029` код [ошибки](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki).

### 17-05-2023
#### Добавлена
- Возможность работы с каналами продаж для [полученного](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-poluchennyj-otchet-komissionera) и [выданного отчетов комиссионера](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vydannyj-otchet-komissionera).
- Поле "Прочие расходы" для [полученного отчета комиссионера](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-poluchennyj-otchet-komissionera).
- Возможность создания и удаления продуктов и материалов в [Техоперации](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-tehoperaciq-sozdat-tehoperaciu).
- Возможность создания [Техоперации](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-tehoperaciq-sozdat-tehoperaciu) без привязки Техкарты.
- Новый `25003` код [ошибки](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-tehnologicheskih-kart).
#### Удалены
- Ставшие неактуальными `25001` и `25002` коды [ошибок](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-tehnologicheskih-kart).

### 12-05-2023
#### Добавлен
- Параметр фильтрации `withSubFolders` в [Ассортименте](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-assortiment), позволяющий фильтровать по заданной группе товаров без учета ее подгрупп.

### 11-05-2023
#### Добавлено
- Добавлен `1088` код [ошибки](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki). 

### 10-04-2023
#### Добавлена
- Возможность работы с затратами для Техкарт [Техкарт](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-tehkarta).
- Дополнены примеры в документации с затратами Техкарты.
- Добавлен `25061` код [ошибки](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-tehnologicheskih-kart).

### 04-04-2023
#### Изменено
- При создании Техкарты поле *materials* стало необязательным.
- Техкарту можно привязывать к определенному техпроцессу
- Материалы Техкарты можно привязывать к определенному этапу техпроцесса.
- Дополнены примеры в документации с материалами Техкарты.
- Добавлен `25060` код [ошибки](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-tehnologicheskih-kart).
- Документация по Техкартам перенесана из вкладки документов в [сущности](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tehkarta)

### 30-03-2023
#### Добавлено
- Добавлен `29009` код [ошибки](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-komplektow).

### 19-02-2023
#### Изменено
- Исправлены примеры в документации: поправили json в ответах, убрали дубли методов в примерах запросов, заменили значения цен на значения с плавающей точкой.

### 13-02-2023
#### Добавлена
- Для сущности [Техпроцесс](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tehprocess) возможность создания, редактирования, удаления через АПИ.

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
- Сущность [Техпроцесс](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tehprocess)

### 17-01-2023
#### Добавлена
- Сущность [Этап производства](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-jetap-proizwodstwa)

### 16-01-2023
#### Изменено
- Актуализирована информация по тарифным ограничениям при использовании зон и ячеек склада, теперь они доступны на всех тарифах

### 10-01-2023
#### Добавлено
- Добавлено новое поле *downloadHref*, содержащее прямую ссылку на скачивание миниатюр изображения, в *miniature*.

### 09-01-2023
#### Добавлено
- Параметр фильтрации `agentTag` в [Отчетах Прибыльность](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-pribyl-nost)

### 16-12-2022
#### Добавлено
- Добавлен `21001` код [ошибки](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-peremeschenij).

### 14-12-2022
#### Добавлено
- Дополнено описание [ошибок](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-yacheek-i-zon-sklada) при работе с ячейками и зонами. Добавлены ошибки 67002, 67003, 67004, 67005, 67006.
- Добавлена информация по созданию, обновлению и удалению [зон](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sklad-zony-sklada) и [ячеек](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sklad-yachejki-sklada) в [складах](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sklad-sklady)

### 12-12-2022
#### Добавлено
- Добавлен `15004` код [ошибки](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-modifikacij).

### 01-12-2022
#### Добавлено
- Ячейки в позиции [Приемки](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-priemka)
- Ячейки в позиции [Оприходования](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-oprihodowanie)
- Ячейки в позиции [Перемещения](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-peremeschenie)
- Ячейки в позиции [Списания](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-spisanie)
- Ячейки в позиции [Отгрузки](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-otgruzka)
- Ячейки в позиции [Возврата покупателя](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vozwrat-pokupatelq)
- Ячейки в позиции [Возврата поставщику](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vozwrat-postawschiku)
- Описание [ошибок](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-yacheek-i-zon-sklada) при работе с ячейками и зонами

### 28-11-2022
#### Добавлено
- Дополнено описание структуры объекта [error](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-obrabotka-oshibok-struktura-ob-ekta-error).

### 21-11-2022
#### Добавлено
- Добавлена информация по работе с [зонами](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sklad-zony-sklada) и [ячейками](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sklad-yachejki-sklada) в [складах](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sklad-sklady) 

### 18-11-2022
#### Добавлено
- Поддержка протокола change-handler в [Розничной продаже](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnaq-prodazha).

### 16-11-2022
#### Добавлено
- Параметр фильтрации `productFolder` с поддержкой (в том числе и исключающей) фильтрации по нескольким группам товаров в [Отчетах Прибыльность](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-pribyl-nost)
- Параметр фильтрации `withSubFolders` в [Отчетах Прибыльность](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-pribyl-nost), позволяющий фильтровать по заданной группе товаров без учета ее подгрупп.
#### Изменено
- Параметр `product` получил поддержку фильтрации по нескольким товарам в [Отчетах Прибыльность](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-pribyl-nost)
- Параметр `product` получил поддержку исключающей фильтрации по товарам в [Отчетах Прибыльность](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-pribyl-nost)

### 09-11-2022
#### Добавлено
- Поддержка протокола change-handler в [Возврате покупателю](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vozwrat-pokupatelq-vozwraty-pokupatelej).

### 01-11-2022
#### Добавлено
- сущность [Ставка НДС](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-stawka-nds) в раздел Сущности
- [пермиссии сущности taxrate](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sotrudnik-rabota-s-prawami-sotrudnika) (Ставка НДС)
- данные о пермиссиях сущности taxrate (Ставка НДС) добавлены в возвращаемые JSON в разделе [Пользовательские роли](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-pol-zowatel-skie-roli-poluchit-pol-zowatel-skuu-rol)

### 26-10-2022
#### Добавлено
- Добавлен [Веб-хук на изменение остатков](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-vebhuk-na-izmenenie-ostatkow).

### 26-10-2022
#### Добавлено
- Добавлен параметр `changedSince` в [эндпоинт текущих остатков](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-ostatki-kratkij-otchet-ob-ostatkah).

### 14-10-2022
#### Добавлено
- Добавлен `3030` код [ошибки](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-obschie-oshibki-walidacii).

### 12-10-2022
#### Добавлено
- Поле moves в [Заказ покупателя](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-zakaz-pokupatelq-zakazy-pokupatelej).
- Поле prepayments в [Заказ покупателя](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-zakaz-pokupatelq-zakazy-pokupatelej).
- Поле customerOrder в [Перемещение](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-peremeschenie-peremescheniq).

### 13-09-2022
#### Добавлено
- Добавлен новый эндпоинт [Остатков по документам](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-ostatki-ostatki-po-dokumentam).

### 06-09-2022
#### Добавлено
- Поддержка протокола change-handler в [Счете поставщика](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-schet-postawschika).

### 29-08-2022
#### Добавлено
- Пермиссии для документа "Вывод из оборота (ОСУ)" в [правах сотрудника](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sotrudnik-rabota-s-prawami-sotrudnika)

### 04-08-2022
#### Добавлено
- Описание [ошибки](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-shablonow) `36001`

### 01-08-2022
#### Добавлено
- Поддержка накладных расходов (поле `overhead`) в протоколе update-provider в
  [Отгрузке](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-otgruzka),
  [Перемещении](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-peremeschenie) и
  [Оприходовании](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-oprihodowanie).

### 29-07-2022
#### Описано
- Ранее неявное ограничение в 255 символов на длину url адресов для [Веб-хуков](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-vebhuki)
#### Добавлено
- Ошибка [30010](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-oshibki-formata)

### 29-07-2022
#### Добавлено
- Поддержка протокола update-provider в [Перемещении](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-peremeschenie).

### 28-07-2022
#### Добавлено
- Поддержка протокола update-provider в [Оприходовании](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-oprihodowanie).

### 26-07-2022
#### Добавлено
- Поддержка накладных расходов (поле `overhead`) в протоколе update-provider в [Приемке](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-priemka).

### 25-07-2022
#### Добавлено
- Поддержка протокола update-provider в [Отгрузке](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-otgruzka).
- Новый тип уведомлений [На счет зачислены бонусные деньги](https://dev.moysklad.ru/doc/api/remap/1.2/notification/#uwedomleniq-podrobnoe-opisanie-tipow-uwedomlenij-na-schet-zachisleny-bonusnye-den-gi).

### 22-07-2022
#### Добавлено
Добавлено описание операторов фильтрации штрихкодов для [товаров](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar), 
[комплектов](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-komplekt), 
[модификаций](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-modifikaciq), 
[серий](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-seriq) и 
[услуг](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-usluga) 

### 19-07-2022
#### Добавлено
- Дополнено описаниение раздела Адрес у
  [Контрагента](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-kontragent-kontragenty-atributy-wlozhennyh-suschnostej-adres),
  [Юрлица](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-jurlico-jurlica-atributy-wlozhennyh-suschnostej-adres),
  [Точки продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh-atributy-suschnosti-atributy-suschnosti-status-atributy-suschnosti-adres),
  [Склада](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sklad-sklady-atributy-suschnosti-adres),
  [Заказа покупателя](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-zakaz-pokupatelq-zakazy-pokupatelej-atributy-suschnosti-adres-dostawki),
  [Отгрузки](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-otgruzka-otgruzki-atributy-suschnosti-adres-dostawki),
  об отсутствии поддержки `null`.

### 07-07-2022
#### Добавлено
- Поддержка протокола change-handler в [Счете покупателю](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-schet-pokupatelu).

### 06-07-2022
#### Изменено
- Разделы в [Отчетах остатков](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-ostatki)

### 04-07-2022
#### Добавлено
- Поддержка протокола update-provider в [Приемке](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-priemka).

### 16-06-2022
#### Добавлено
- В описании [Отчетов](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety) добавлен список операторов, с помощью которых выполняется фильтрация по атрибутам.

### 15-06-2022
#### Добавлено
- В описании [Документов](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty) добавлен список операторов, с помощью которых выполняется фильтрация по атрибутам.

### 14-06-2022
#### Добавлено
- В описании [Сущностей](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti) добавлен список операторов, с помощью которых выполняется фильтрация по атрибутам.

### 09-06-2022
#### Изменено
- Добавлены поля `printed` и `published` в [Договор](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-dogowor)

### 03-06-2022
#### Добавлено
- Добавлено поле `authorApplication` в [Вебхуках](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-vebhuki)

### 02-06-2022
#### Изменено
- Перенесено описание фильтрации по дополнительным полям в [Общие Сведения](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-fil-traciq-po-dopolnitel-nym-polqm)

### 26-05-2022
#### Добавлено
- Добавлено поле `salesChannel` в [Счет покупателю](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-schet-pokupatelu)

### 20-05-2022
#### Добавлено
- Поддержка полей `incomingDate` и `incomingNumber` для протокола change-handler в [Приемке](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-priemka).

### 13-05-2022
#### Добавлено
- Описание [ошибки](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki) `1048`

### 28-04-2022
#### Добавлено
- Параметр фильтрации `salesChannel` в [Отчетах Прибыльность](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-pribyl-nost), позволяющий фильтровать по каналам продаж

### 27-04-2022
#### Добавлено
- Описание необходимых пермиссий в отчетах [Показатели](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-pokazateli), [Показатели продаж и заказов](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-pokazateli-prodazh-i-zakazow), [Показатели контрагентов](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-pokazateli-kontragentow), [Деньги](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-den-gi)

### 18-04-2022
#### Добавлено
- Параметр фильтрации withSubFolders в [Отчете остатков](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-ostatki), позволяющий фильтровать по заданной группе товаров без учета ее подгрупп.
#### Документация
- Добавлено описание [Группа техкарт](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-gruppa-tehkart)

### 01-04-2022
#### Добавлено
- Поле `onTap` в [Товарах](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar)
- Ошибки [16011, 16012, 16013, 16014, 16015, 16113](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-towarow)
#### Изменено
- Описание полей `isSerialTrackable`, `ppeType`, `alcoholic`, `weighed` в [Товарах](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar)

### 23-03-2022
#### Добавлено
- Добавлено поле `accumulationDiscount` в скидки Контрагента, См. [Поля реквизитов контрагентов](https://dev.moysklad.ru/doc/api/remap/1.2/#suschnosti-kontragent-kontragenty-atributy-suschnosti-polq-rekwizitow)
#### Изменено
- Дополнительные поля типов Файл и Флажок не могут быть обязательными [Работа с дополнительными полями](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)

### 22-03-2022
#### Добавлено
- Добавлено поле `show` в атрибуты описания доп. поля. См. [Работа с дополнительными полями](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)

### 18-03-2022
#### Изменено
- Добавлена пермиссия `viewCashFlow` в список пермиссий [контекста запроса сотрудника](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-kontext-zaprosa-sotrudnika)

### 18-03-2022
#### Добавлено
- Фильтрация по доп полям в [Ассортименте](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-assortiment)

### 17-03-2022
#### Добавлено
- Добавлен отчёт [Текущих Остатков](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-ostatki-kratkij-otchet-ob-ostatkah).

### 17-03-2022
#### Добавлено
- Добавлено [описание](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-pribyl-nost-poluchit-pribyl-nost-po-kanalam-prodazh) отчета по прибыльности по каналам продаж

### 17-03-2022
#### Изменено
- Исправлена часть ссылок в [Отчетах Прибыльность](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-pribyl-nost)

### 15-03-2022
#### Изменено
- Изменено время ожидания ответа на отправку [Веб-хука](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-vebhuki) с 5 секунд до 1.5 секунд.
- Отключены переотправки по истечении времени ожидания ответа

### 15-03-2022
#### Добавлено
- Поля `stock`, `reserve`, `inTransit`, `quantity` могут быть дробными в [Отчёте Остатки](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-ostatki).

### 10-03-2022
#### Добавлено
- Информация о новом типе маркированной продукции (Никотиносодержащая продукция) в [Товарах](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar)

### 18-02-2022
#### Добавлено
- Пермиссии для документа формирование АТК в [правах сотрудника](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sotrudnik-rabota-s-prawami-sotrudnika)

### 13-12-2021
#### Изменено
- Подразделы [Печать документов](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-pechat-dokumentow) и [Публикация документов](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-publikaciq-dokumentow) перенесены в раздел Документы.

### 10-12-2021
#### Добавлено
- Поддержка протокола change-handler в [Оприходовании](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-oprihodowanie).

### 08-12-2021
#### Добавлено
- Поддержка протокола change-handler в [Списании](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-spisanie).

### 02-12-2021
#### Добавлено
- Поддержка протокола change-handler в [Перемещении](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-peremeschenie).

### 30-11-2021
#### Добавлено
- Возможность фильтрации [ассортимента](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-assortiment) по доп. полям. 

### 26-11-2021
#### Добавлено
- Пермиссии для документа отчет об использовании в [правах сотрудника](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sotrudnik-rabota-s-prawami-sotrudnika)

### 25-11-2021
#### Добавлено
- Добавление [системных валют](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-valuta-sozdat-sistemnuu-walutu)

### 24-11-2021
#### Документация
- Исправлено перебрасывание в начало раздела при переходе по ссылке из другого раздела документации на заголовок 4 уровня или больше

### 23-11-2021
#### Добавлено
- Поддержка протокола change-handler в [Приемке](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-priemka).

### 16-11-2021
#### Добавлено
- Возможность получения и применения [сохраненных фильтров](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sohranennye-fil-try) других сотрудников для администраторов
- Описание ошибок [63004 и 63005](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-sohranennogo-fil-tra)

### 16-11-2021
#### Изменено
- Изменено максимальное ограничение на получение записей [аудита](https://dev.moysklad.ru/doc/api/remap/1.2/audit/#audit) с 25 на 100 записей

### 16-11-2021
#### Добавлено
- Поддержка протокола update-provider в [Заказе покупателя](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-zakaz-pokupatelq).

### 15-11-2021
#### Добавлено
- Добавлено поле `salesChannel` в [Заказ покупателя](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-zakaz-pokupatelq), [Отгрузку](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-otgruzka) и [Возврат покупателя](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vozwrat-pokupatelq)

### 08-11-2021
#### Добавлено
- Эндпоинт для [Каналов продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-kanal-prodazh)

### 01-11-2021
#### Добавлено
- Поддержка протокола change-handler в [Отгрузке](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-otgruzka).

### 21-10-2021
#### Добавлено
- Добавлен [эндпоинт](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-kody-markirowki) для работы с Кодами маркировки в позиции документа

### 15-10-2021
#### Добавлено
- Фильтрация по полю `paymentPlannedMoment` у [Счета покупателя](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-schet-pokupatelu)
- Фильтрация по полю `supplier` в [Отчетах прибыльность](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-pribyl-nost)
- Фильтрация по номеру счета [Контрагента](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-kontragent) `filter=accounts.accountnumber`. [Описание](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter)

### 12-10-2021
#### Добавлено
- Возможность изменения и отображения полей [Элементов пользовательского справочника](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-pol-zowatel-skij-sprawochnik-jelementy-pol-zowatel-skogo-sprawochnika): `group`, `owner`, `shared`

### 08-10-2021
#### Добавлено
- Ошибка [2028](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-oshibki-formata)

### 07-10-2021
#### Документация
- Добавлено описание [Контекста запроса сотрудника](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-kontext-sotrudnika)

### 30-09-2021
#### Изменено
- Информация о новом типе маркированной продукции (Упакованная вода) в [Товарах](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar)

### 23-09-2021
#### Добавлено
- Описание полей посылаемых [веб-хуков](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-vebhuki) и добавлены поля `auditContext`, `updatedFields`, `moment`, `uid`
- Новая ошибка [30009](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-veb-hukow)

### 20-09-2021
#### Добавлено
- Добавлены поля `shipmentAddress` и `shipmentAddressFull` в [Заказ покупателя](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-zakaz-pokupatelq) и [Отгрузку](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-otgruzka)

### 20-09-2021
#### Исправлено
- Исправлен список возможных атрибутов у документа [Списание](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-spisanie)

### 16-09-2021
#### Изменено
- Дополнено описание раздела webhook.

### 15-09-2021
#### Добавлено
- Поле `markingSellingMode` в [Точку продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh)

### 15-09-2021
#### Добавлено
- Возможность работы с упаковками [Модификаций](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-modifikaciq), [фильтрация ассортимента](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-assortiment-izmenit-nastrojki-sprawochnika-kontragentow-atributy-dostupnye-dlq-fil-tracii) по штрихкоду упаковок модификаций.

### 15-09-2021
#### Добавлено
- Поле `sendMarksForCheck` в [Точку продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh)

### 15-09-2021
#### Добавлено
- Добавлена фильтрация по Доп. полям. и атрибут фильтрации supplier для [Отчет обороты](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-oboroty)
- Документ [Корректировка баланса контрагента](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-korrektirowka-wzaimoraschetow)

### 09-09-2021
#### Добавлено
- Создание розничной смены в позиции документов [Документов](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnaq-smena-sozdat-roznichnuu-smenu)
- Редактирование розничной смены в позиции документов [Документов](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnaq-smena-izmenit-roznichnuu-smenu)
- Добавлены поля `acquire`, `qrAcquire`, `bankPercent`, `qrBankPercent`
  `bankComission`, `qrBankComission` в розничную смену [Атрибуты розничной смены](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnaq-smena-roznichnye-smeny-atributy-smeny)
- Добавлен объект `cheque` с полями **start**, **end**
- Добавлен объект `start` с полями **fnNumber**, **kktRegNumber**, **fiscalDocSign**,
  **shiftNumber**, **fiscalDocNumber**, **time** в розничную смену [Поля объекта](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnaq-smena-roznichnye-smeny-informaciq-ob-otkrytii-smeny-kkt)
- Добавлен объект `end` с полями **fnNumber**, **kktRegNumber**, **fiscalDocSign**,
  **shiftNumber**,  **chequesTotal**, **fiscalDocNumber**, **fiscalDocsTotal**, **time** в розничную смену [Поля объекта](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnaq-smena-roznichnye-smeny-informaciq-o-zakrytii-smeny-kkt)
- Добавлен тип ошибок с кодом 12011, 12026 [ошибки](https://dev.moysklad.ru/mojsklad-json-api-oshibki-kody-oshibok-dlq-roznichnyh-smen-pos)

#### Изменено
- Удалено поле `agent` в розничной смене [Атрибуты розничной смены](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnaq-smena-roznichnye-smeny-atributy-smeny)
- Исправлено описание `updated`, `name`, `description`, `externalCode`, `moment`, `organization`, `store`,
  `attributes`, `published`, `closeDate`, `retailStore` в атрибутах розничной смены [Атрибуты розничной смены](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnaq-smena-roznichnye-smeny-atributy-smeny)

### 08-09-2021
#### Изменено
- Исправлена валидация дат в фильтрах запросов. При передаче даты до начала 1970 года — возвращается ошибка о неправильном значении даты. [Подробнее](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obshhie-svedeniya-format-daty-i-vremeni)

### 31-08-2021
#### Документация
- Добавлен эндпоинт получения списка [сохраненных фильтров](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sohranennye-fil-try)
  для сущностей, документов
- Добавлено применение [сохраненного фильтра](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sohranennye-fil-try) для сущностей и документов

### 17-08-2021
#### Добавлено
- Возможность работы с модификациями для материалов и продуктов [Техкарт](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tehkarta). 
Для этого введено новое поле **assortment**.
- Новая ошибка [3028](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-obschie-oshibki-walidacii)

### 30-07-2021
#### Добавлено
- Добавлены атрибуты фильтрации type и withoutturnover для [Отчет обороты](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-oboroty)
- Новый заголовок управления временем жизни ссылок на скачивание изображений и файлов. Описание в [общих сведениях](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-ssylki-na-fajly)

### 29-07-2021
#### Добавлено
- [Фильтрация ассортимента](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-assortiment-izmenit-nastrojki-sprawochnika-kontragentow-atributy-dostupnye-dlq-fil-tracii) по штрихкоду, наименованию группы товаров, типу и использованию серийных номеров

### 28-07-2021
#### Добавлено
- Возможность работать с файлами в комментариях к [задачам](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-zadacha)

### 28-07-2021
#### Добавлена
- Возможность expand поля **masterRetailStores** у [точек продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh)

### 26-07-2021
#### Изменено
- Добавлены поля `vatEnabled`, `effectiveVatEnabled` и `useParentVat` в [Группы товаров](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-gruppa-towarow), [Товары](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar), [Комплекты](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/№suschnosti-komplekt), [Услуги](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-usluga)
- Добавлено поле `vatEnabled` в позиции [Документов](https://dev.moysklad.ru/doc/api/remap/1.2/documents/)
- Добавлены ошибки `16010` и `17021`

### 09-07-2021
#### Добавлено
- Новый ресурс [Обороты по товару с детализацией по документам](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-oboroty-oboroty-po-towaru-s-detalizaciej-po-dokumentam)

### 05-07-2021
#### Добавлено
- Новый тип уведомлений о скором окончании действия доступа к аккаунту Facebook

### 01-07-2021
#### Исправлено
- Исправлено описание обязательности полей отчета обороты при ответе

### 28-06-2021
#### Добавлено
- Пермиссии на документы маркировки в [правах сотрудника](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sotrudnik-rabota-s-prawami-sotrudnika)

### 25-06-2021
#### Добавлено
- Новый ресурс [Отчет обороты](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-oboroty)

### 10-06-2021
#### Документация
- Добавлено описание параметров фильтрации выборки `momentFrom` и `momentTo` в отчетах прибыльности

### 08-06-2021
#### Изменено
- Изменены лимиты по [вебхукам](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-vebhuki): выделены отдельные лимиты для решений

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
- Добавлены поля `welcomeBonusesEnabled`, `welcomeBonusesValue`, `welcomeBonusesMode` в [Бонусную программу](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-bonusnaq-programma)
- Возможность получать коды маркировки товаров и транспортных упаковок в формате тега 1162 (поле `trackingCodes_1162`) для документа типа [Отгрузка](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-otgruzka-otgruzki-kody-markirowki-towarow-i-transportnyh-upakowok-w-formate-tega-1162).

### 28-05-2021
#### Документация
- Добавлена колонка `Expand` в таблицы описания атрибутов сущностей в разделах: "Сущности" и "Документы"

### 27-05-2021
#### Добавлено
- Добавлены новые поля `authorizedHosts`, `authorizedIpNetwork`, `authorizedIpNetmask` для ограничения доступа по ip в [эндпоинте управления правами сотрудника](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sotrudnik-rabota-s-prawami-sotrudnika)

### 21-05-2021
#### Добавлено
- Добавлен эндпоинт получения списка [сохраненных фильтров](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sohranennye-fil-try)
  для сущностей, документов и аудита

### 21-05-2021
#### Добавлено
- Возможность работы с файлами, прикрепленными к [Задаче](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-zadacha)

### 21-05-2021
#### Документация
- Исправлено описание пермиссий при работе с пользовательскими справочниками

### 21-05-2021
#### Изменено
- Исправлена отметка об обязательности складов для части документов
- Добавлен новый эндпоинт для системных ролей
- Добавлен новый эндпоинт (crud) для пользовательских ролей
- Новый ресурс [отмены асинхронной задачи](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-asinhronnyj-obmen-otmena-asinhronnoj-zadachi)
- Ошибка [61007](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-asinhronnogo-obmena)

### 21-05-2021
#### Исправлено
- В примерах исправлен url получения метаданных [Комплектов](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-komplekt)
  и [Услуг](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-usluga)

### 20-05-2021
#### Добавлено
- Добавлена возможность редактировать поле discounts у контрагента
- Раскомплектовывание комплектов на составляющие компоненты при создании [шаблона заказа поставщику на основе](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-zakaz-postawschiku-shablon-zakaza-postawschiku-na-osnowe)
- Добавлена новая схема работы с ошибками и новый статус `API_ERROR` в
  [асинхронныом обмене](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-asinhronnyj-obmen)

### 17-05-2021
#### Документация
- В Позиции Отгрузки добавлен список комплектов
- Исправлено описание `product.packs.barcodes`, `consignment.barcodes`, `bundle.components`, `consignment.image`
- Исправлено описание атрибута `images` в товарах, комплектах и модификациях
- Исправлено указание на обязательность в ответе полей `uom.accountId`, `uom.group`, `product.minimumBalance`, `country.accountId`, `demand.vatSum`, `counterparty.state`
- Исправлено указание на обязательность в ответе поля `owner` в сущностях

### 11-05-2021
#### Добавлено
- Возможность выполнять запрос [получения Ассортимента](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-assortiment)
 [асинхронно](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-asinhronnyj-obmen)

### 05-05-2021
#### Добавлено
- Информация о новом типе маркированной продукции (Молочная продукция) в [Товарах](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar)

### 05-05-2021
#### Изменено
- Исправлена ошибка, при которой пользователь мог просматривать и добавлять комментарий к задаче, без пермиссии к просмотру задач

### 29-04-2021
#### Добавлено
- Возможность выполнять запрос [получения списка Контрагентов](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-kontragent-poluchit-spisok-kontragentow)
 [асинхронно](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-asinhronnyj-obmen)

### 28-04-2021
#### Добавлено
- Поле `earnWhileRedeeming` в [Бонусную программу](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-bonusnaq-programma)

### 28-04-2021
#### Документация
- Добавлен новый раздел [Подписка компании](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-podpiska-kompanii)

### 28-04-2021
#### Изменено
- Для атрибутов
  AttributeMetadata.required ,
  AgentAccount.isDefault, WebHook.enabled, Product.weighed
  при передаче null значения выводится ошибка 2016

### 28-04-2021
#### Изменено
- Исправлена работа с документом [Возврат поставщику](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vozwrat-postawschiku): 
 добавлена проверка совпадения значения поля `vatEnabled` при создании и обновлении документа на основании [Приемки](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-priemka)

### 28-04-2021
#### Изменено
- Для документа [`Оприходования`](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-oprihodowanie)
теперь учитывается пермиссия `Видеть себестоимость, цену закупки и прибыль товаров`. При отсутствии пермиссии в json представлении 
документа будет отсутствовать поле `sum`, а в позициях не будет поля `price`.
  
### 27-04-2021
#### Добавлено
- Очередь для [асинхронных задач](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-asinhronnyj-obmen)
- Обновлен список [ограничений](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-ogranicheniq) (добавлена информация про размер очереди асинхронных задач)
- Новый статус `PENDING` для [асинхронных задач](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-asinhronnyj-obmen)
- Эндпоинт получения [списка статусов асинхронных задач](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-asinhronnyj-obmen-statusy-asinhronnyh-zadach)
- Поле **meta** для [асинхронных задач](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-asinhronnyj-obmen)

### 27-04-2021
#### Добавлена
- Возможность создавать [вебхуки](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-vebhuki) для [асинхронных задач](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-asinhronnyj-obmen-vebhuki-asinhronnoj-zadachi)

### 26-04-2021
#### Изменено
- Исправлен некорректный url в примерах json [Управления настройками справочника ассортимента](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-assortiment-poluchit-nastrojki-sprawochnika-towarow)

### 26-04-2021
#### Добавлены
- Новые поля `directorPosition`, `directorSign`, `chiefAccountSign`, `stamp` в [Юрлице](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-jurlico)

### 26-04-2021
#### Изменено
- Исправлено неточное описание привязок документов в общих сведениях

### 23-04-2021
#### Добавлено
- Добавлены поля authorApplication в [Задачи](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-zadacha) и [События Контрагента](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-kontragent-sobytiq-kontragenta)

### 22-04-2021
#### Документация
- Добавлено описание поля **code** для ряда сущностей. Где оно было, убран атрибут `Только для чтения`

### 15-04-2021
#### Добавлено
- Возможность работы с файлами, прикрепленными к [Задаче](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-zadacha)

### 13-04-2021
#### Добавлено
- Добавлена новая ошибка [17020](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-dokumentow) - товар из упаковки в позиции документа не соответствует товару, указанному в данной позиции
- Добавлена валидация товара из упаковки в позиции документа

### 09-04-2021
#### Документация
- Переработан раздел [Работа с доп. полями](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)
- Добавлен тип MetaArray - объект с полями **meta** и **rows**
- Упоминание Array(Meta) изменено на Array(Object) или на MetaArray
- Изменен формат описания поля **trackingCodes** в Отгрузках и Приёмках
- Добавлен раздел [Валюта в документах](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-obschie-swedeniq-valuta-w-dokumentah) с описанием поля **rate**
- В описание добавлены отсутствовавшие поля **meta** в Счета и Контактные лица Контрагента
- Убрано возможное разночтение в описании поля **tags** Контрагента
- Для полей **consignee** и **carrier** в Отгрузках и Счетах-фактурах выданных добавлена пометка про тип сущностей
- Удалена пометка об обязательности поля **house** в адресах
- Исправлен тип поля **certificateNumber** у Юрлиц на корректный
#### Изменено
- Изменен регистр ключевого слова в [заказе покупателя](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-zakaz-pokupatelq)
- Изменен регистр ключевого слова в [заказе поставщику](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-zakaz-postawschiku)

### 07-04-2021
#### Добавлено
- Добавлен [пример](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-ostatki-rasshirennyj-otchet-ob-ostatkah) в отчет остатки по параметру includeRelated 

### 06-04-2021
#### Добавлено
- Добавлено [описание](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-pribyl-nost-poluchit-pribyl-nost-po-towaram) отчета по прибыльности по товарам
- Добавлено [описание](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-pribyl-nost-poluchit-pribyl-nost-po-modifikaciqm) отчета по прибыльности по модификациям

### 05-04-2021
#### Изменено
- Обновлена информация об [ошибке](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki) **17102**

### 01-04-2021
#### Добавлено
- Возможность выполнять запросы [асинхронно](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-asinhronnyj-obmen) 
- Cтатья в [воркбук](https://dev.moysklad.ru/doc/api/remap/1.2/workbook/#workbook-rabota-s-asinhronnym-obmenom)
- Описание ошибок [61000-61006](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-asinhronnogo-obmena)  

### 23-03-2021
#### Добавлено
- Поле `postponedBonusesDelayDays` в [Бонусную программу](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-bonusnaq-programma)
- Поля `transactionStatus`, `executionDate` и `categoryType` в [Бонусные операции](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-bonusnaq-operaciq)

### 02-03-2021
#### Добавлено
- Флаг `partialDisposal` для сущностей `Товар` и `Комплект`
- Ошибка `16112` с описанием

### 01-03-2021
#### Документация
- Исправлен запрос в примере на [массовое удаление модификаций](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-modifikaciq-massowoe-udalenie-modifikacij)

### 18-02-2021
#### Изменено
- Изменены CSS стили

### 11-02-2021
#### Изменено
- Исправлены битые ссылки в [Общих сведениях](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq)
- Исправлено указание на обязательность в ответе поля `vatIncluded` в документах

### 04-02-2021
#### Изменено
- Добавлен новый тип уведомлений [Уведомление из сценария](https://dev.moysklad.ru/doc/api/remap/1.2/notification/#uwedomleniq-podrobnoe-opisanie-tipow-uwedomlenij-uwedomlenie-iz-scenariq)
- Добавлена новая группа уведомлений [Сценарии](https://dev.moysklad.ru/doc/api/remap/1.2/notification/#uwedomleniq-nastrojki-uwedomlenij-struktura-dannyh)

### 02-02-2021
#### Добавлено
- Добавлены новые [эндпоинты для упралвения правами сотрудника](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sotrudnik-rabota-s-prawami-sotrudnika) и [эндпоинты для доступа сотрудника к основному сервису 
МойСклад](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sotrudnik-aktiwaciq-sotrudnika) в раздел [Сотрудники](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sotrudnik)
- Добавлены новые ошибки [3023-3024](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-obschie-oshibki-walidacii) и [43007-43029](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-sotrudnikow)

### 27-01-2021
#### Документация
- Изменен тип поля quantity с Int на Float в разделе описания вложенной [Упаковки товара](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar-towary-atributy-wlozhennyh-suschnostej-upakowki-towara)
- Все разделы распределены по соответствующим пакетам
- Удалено описание полей объекта доп. полей из документов. 
  Его по-прежнему можно найти в разделе [Работа с доп. полями](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)
- Исправлен ряд опечаток в списке изменений

### 18-01-2021
#### Документация
- Исправлены заголовки в списке изменений

### 22-12-2020
#### Изменено
- Исправлен http метод в запросе на удаление группы товаров с GET на DELETE в [Группа товаров](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-gruppa-towarow-udalit-gruppu-towarow)
  и тип полей `minPrice`, `buyPrice` c Double на Object в [Товаре](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar)

### 22-12-2020
#### Документация
- Из параметров удален `states`, добавленные туда по ошибке в [метаданных Розничных смен](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnaq-smena-metadannye-roznichnyh-smen)

### 21-12-2020
#### Добавлено
- добавлен код [ошибки 14012](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-dop-polq)

### 17-12-2020
#### Изменено
- Исправлен тип qrBankPercent с Int на Double в [Точке продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh)

### 15-12-2020
#### Изменено
- Добавлены поля `printed` и `published` в [документах](https://dev.moysklad.ru/doc/api/remap/1.2/documents/)

### 04-12-2020
#### Изменено
- Для доступа к аудиту не нужно быть администратором

### 04-12-2020
#### Изменено
- Исправлены неточности в разделе [Отчет остатки](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-ostatki)

### 01-12-2020
#### Изменено
- Описание ограничений в [Общих сведениях](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq) и [воркбуке](https://dev.moysklad.ru/doc/api/remap/1.2/workbook/#workbook)

### 30-11-2020
#### Изменено
- Исправлено форматирование таблицы описания полей результата запроса на [получение дополнительных полей](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-dop-polq-suschnostej-poluchit-wse-dop-polq-dlq-ukazannogo-tipa)

### 26-11-2020
#### Добавлено
- Фильтрация по `assortment` для [Документов](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-poluchenie-nowogo-tokena-dopolnitel-nye-fil-try)

### 21-11-2020
#### Изменено
- Описание ограничений в [Общих сведениях](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq)

### 12-11-2020
#### Добавлено
- Поле `tobaccoMrcControlType` в [Точку продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh)

### 05-11-2020
#### Добавлено
- Эндпоинт [Управления настройками справочника контрагентов](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-kontragent-nastrojki-sprawochnika-kontragentow)

### 02-11-2020
#### Добавлено
- добавлены коды [ошибок 1083, 1084](/doc/api/remap/1.2/#mojsklad-json-api-oshibki-oshibki-formata).

### 29-10-2020
#### Добавлено
- Исправлена ошибка регистра кода сущности в  [Группе товаров](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-gruppa-towarow)

### 23-10-2020
#### Добавлено
- Поля `idQR` и `qrTerminalId` в [Точку продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh)

### 21-10-2020
#### Добавлено
- Информация о новых типах маркированной продукции (Альтернативная табачная продукция) в [Товарах](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar)

### 21-10-2020
#### Изменено
- Добавлена возможность создавать, изменять и удалять [Отделы](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-otdel)

### 21-10-2020
#### Добавлено
- Добавлено заполнение себестоимости в эндпоинт [Автозаполнения](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-awtozapolnenie-zapros-awtozapoleniq-sebestoimosti)

### 20-10-2020
#### Добавлено
- Поля `qrPayEnabled`, `qrBankPercent` и `qrAcquire` в [Точку продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh)
- Поля `qrSum` и `prepaymentQrSum` в [Розничную продажу](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnaq-prodazhai)
- Поле `qrSum` в [Розничный возврат](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnyj-wozwrat)
- Ошибки `18005`, `18006`, `19003` и `19004`
#### Изменено
- Описание полей `acquire` и `bankPercent` в [Точке продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh)
- Описание [работы с полями оплаты розничной продажи](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnaq-prodazha-roznichnye-prodazhi-rabota-s-polqmi-oplaty-roznichnoj-prodazhi)
- Текст ошибок `18000` и `19002`

### 19-10-2020
#### Добавлено
- Информация о новом типе маркированной продукции (Шины и покрышки) в [Товарах](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar)

### 16-10-2020
#### Добавлено
 - Эндпоинт [Автозаполнения цен, скидок, ндс позиций](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-awtozapolnenie)
 - Описание ошибок [1084 и 56000](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki)

### 08-10-2020
#### Изменено
- Исправлены опечатки

### 22-09-2020
#### Исправлено
- Описание поля `productFolder` у [Групп товаров](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-gruppa-towarow)

### 20-09-2020
#### Изменено
- Изменено описание установленных ограничений в [Общих сведениях](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq)

### 16-09-2020
#### Добавлено
- Информация о новых типах маркированной продукции (духи и фотокамеры) в [Товарах](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar)

### 08-09-2020
#### Добавлено
- Добавлена информация об ошибке **1090**

### 01-09-2020
#### Добавлено
- Информация о новых типах маркированной продукции в [Товарах](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar)

### 31-08-2020
#### Изменено
- Описание атрибута `allowCreateProducts` в [Точке продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh)

### 13-08-2020
#### Изменено
- Обновлена информация об [ошибке](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki) **17102**

### 04-08-2020
#### Добавлено
- Дополнена информация об [ошибке](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki) **17102**

### 30-07-2020
#### Изменено
Дополнительные поля Товаров, Услуг, Модификаций и Комплектов объединены и располагаются в метаданных [Товаров](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar)

### 28-07-2020
#### Добавлено
 - Добавлена возможность изменять настройки применения скидок в [Настройках компании]((https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-nastrojki-kompanii))

### 27-07-2020
#### Добавлено
 - Поля `minionToMasterType` и `masterRetailStores` в [Точку продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh), позволяющие указывать стратегию выбора мастер точки продаж для фискализации облачных чеков.
 
### 24-07-2020
#### Добавлено
 - Новая [ошибка](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki) 1083 - ошибка формирования ответа на стороне сервера
 - Новый формат описания атрибутов сущностей с помощью таблиц

### 22-07-2020
#### Добавлено
 - Поле `factureIn` для [Возврата поставщику](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vozwrat-postawschiku), представляющее собой ссылку на связанный с возвратом [счет-фактуру полученный](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-schet-faktura-poluchennyj)

### 15-07-2020
#### Добавлено
 - Эндпоинты [управления скидками](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-skidki)
 - Дополнен раздел [Скидки](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-skidki) новыми примерами

### 09-07-2020
#### Добавлено
 - Описание кодов маркировки пользовательской упаковки (КМ ПУ) в сущностях [`Отгрузка`](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-otgruzka) и [`Приемка`](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-priemka)
 - Ошибки при импорте КМ ПУ из xml  
 - Поле [factureOut](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vozwrat-pokupatelq-vozwraty-pokupatelej-swqzi-s-drugimi-dokumentami) для возврата поставщику, представляющее собой ссылку на связанный с возвратом счет-фактуру выданный

### 08-07-2020
#### Добавлено
 - Поле `ppeType` (код средства индивидуальной защиты) [в сущность `Товары`](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar-towary-atributy-suschnosti).

### 07-07-2020
#### Добавлено
 - [Фильтрация комплектов](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-assortiment-udalit-sobytie-atributy-dostupnye-dlq-fil-tracii) по артикулу в ассортименте

### 26-06-2020
#### Добавлено
 - Раздел про [получение токена](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-autentifikaciq-poluchenie-nowogo-tokena) дополнен информацией про отзыв прошлых токенов при создании нового
#### Исправлено
 - В примерах исправлен заголовок авторизации через токен

### 23-06-2020
#### Добавлено
- Эндпоинт [Настройки пользователя](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-nastrojki-pol-zowatelq)

### 18-06-2020
#### Добавлено
 - Поля ФИО для [Юрлиц](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-jurlico) и [Контрагентов](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-kontragent) типа индивидуальный предприниматель и физическое лицо
 - Добавлена возможность работы с [файлами](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-fajly) и поле `files` в сущностях и документах
 
### 11-06-2020
#### Исправлено
 - Информация о лимитах на число элементов в коллекциях и вложенных сущностях ([1000 элементов](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow))

### 10-06-2020
#### Добавлено
 - Эндпоинт [Настройка аккаунта компании](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-nastrojki-kompanii)

### 03-06-2020
#### Добавлено
 - Эндпоинт [Управления настройками справочника товаров](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-assortiment)

### 28-05-2020
#### Добавлено
 - Для работы с маркированной продукцией добавлены поля `trackingType` - тип маркированной продукции, `tnved` - код ТНВЭД в сущности [Товар](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar-sozdat-towar)
 - Добавлена информация об [ограничениях](https://dev.moysklad.ru/doc/api/remap/1.2/workbook/#workbook-chto-nuzhno-znat-dlq-nachala-raboty-s-json-api-ogranicheniq) и новом [параметре в Вебхуках](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-vebhuki)
 - [Ошибки 16102-16110](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-towarow), связанные с маркированными товарами

### 15-05-2020
#### Добавлено
 - Возможность изменения полей [Сотрудника](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sotrudnik): `email`, `group`, `archived`, `owner`, `shared`
 - Пояснение об ограничениях при изменении [атрибутов сотрудника](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sotrudnik-sotrudniki-atributy-suschnosti)

### 08-05-2020
#### Добавлено
 - Описание работы с маркированными товарами в [приемке](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-priemka-priemki-pozicii-priemki) и [отгрузке](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-otgruzka-otgruzki-pozicii-otgruzki)
 
### 07-05-2020
#### Добавлено
 - Описание [эндпоинта работы с характеристиками модификаций](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-harakteristiki-modifikacij)
 - [Ошибка 10002](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-towarow) создания характеристик модификаций с существующим именем
#### Исправлено
 - Описание [характеристик модификаций](https://dev.moysklad.ru/doc/api/remap/1.2/#suschnosti-modifikaciq-modifikacii-atributy-wlozhennyh-suschnostej-metadannye-modifikacij-harakteristiki-modifikacii) в разделе Модификации
 
### 06-05-2020
#### Добавлено
 - [Уточнение](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-ostatki-i-sebestoimost-w-poziciqh-dokumentow) о том, что позиции документов возвращаются при лимите 100 и менее

### 27-04-2020
#### Удалено
 - Описание заголовка Lognex-Pretty-Print-JSON в [Общих сведениях](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq)

### 26-04-2020
#### Изменено
 - [Изменено описание](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-ogranicheniq) ограничения по запросу на один ip
 - исправлена опечатка в описании email [Сотрудника](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sotrudnik)

### 14-04-2020
#### Добавлено
 - Описание новых типов для [фильтров аудита](https://dev.moysklad.ru/doc/api/remap/1.2/audit/#audit-audit-kontexty)

### 26-03-2020
#### Изменено
- В [розничной смене](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnaq-smena-roznichnye-smeny) удалено поле applicable в перечислении полей и из примера на получение

### 10-03-2020
#### Добавлено
- Фильтрация по `printed` и `published` в раздел [Фильтрация документов](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-poluchenie-nowogo-tokena-fil-traciq-dokumentow)

### 04-03-2020
#### Добавлено
- Поле `stockDays` в [Отчет Остатки -> Все Остатки](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-ostatki-rasshirennyj-otchet-ob-ostatkah-atributy-ob-ekta-otcheta).

### 04-03-2020
#### Добавлено
- Новый раздел [Workbook](https://dev.moysklad.ru/doc/api/remap/1.2/workbook/#workbook)

### 13-12-2019
#### Изменено
- Описание ограничений при [создании веб-хуков](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-vebhuki-sozdat-web-huk) на одну сущность

### 10-12-2019
#### Изменено
- Название сущности [Счет-фактура выданный](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-schet-faktura-wydannyj) (полученный) приведено к общему виду (с написанием "выданный" после)

### 09-12-2019
#### Добавлено
- Операторы фильтрации ассортимента по полю updated `<`, `>`
- Ссылка на Java SDK

### 04-12-2019
#### Добавлено
- Список необходимых полей в описание эндпоинтов на создание следующих сущностей:
  - [Внутренний заказ](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vnutrennij-zakaz)
  - [Инвентаризация](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-inwentarizaciq)
  - [Выплата денег](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vyplata-deneg)
  - [Внесение денег](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vnesenie-deneg)
  - [Перемещение](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-peremeschenie)
  - [Оприходование](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-oprihodowanie)
  - [Контрагент](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-kontragent)
  - [Задача](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-zadacha)
  - [Бонусная операция](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-bonusnaq-operaciq)

### 21-11-2019
#### Изменено
- Дополнена документация по [аудиту](https://dev.moysklad.ru/doc/api/remap/1.2/audit/#audit)

### 13-11-2019
#### Изменено
- [Фильтрация](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-assortiment-udalit-sobytie-atributy-dostupnye-dlq-fil-tracii) в запросе `assortment`

### 07-11-2019
#### Добавлено
- Получение [контекста решения](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-serwernye-resheniq)
- [Получение сущности установленного решения](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-serwernye-resheniq)
- [Фильтрация выборки с помощью параметра filter](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter) по изменившему сущность решению
- [Фильтрация записей аудита с помощью параметра filter](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-serwernye-resheniq-fil-traciq-zapisej-audita-s-pomosch-u-parametra-filter-application) по изменившему сущность решению

### 21-10-2019
#### Добавлено
- Поле `fiscalType` в [точке продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh).

### 15-10-2019
#### Удалено
- Возможность изменения поля ofdEnabled для точки продаж. Теперь оно всегда равно true.

### 11-10-2019
#### Исправлено
- Ряд опечаток в примерах

### 10-10-2019
#### Добавлено
- Аутентификация с использованием [токена](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-autentifikaciq)
- Изображения модификаций
- Несколько изображений у [товаров](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar-towary), [комплектов](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-komplekt), [модификаций](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-modifikaciq)
- [Массовое создание, редактирование и удаление](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) через POST
- [Фильтрация по uid](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-serwernye-resheniq-fil-traciq-zapisej-audita-s-pomosch-u-parametra-filter-uid) в запросе аудита
- Версия АПИ в теле вебхука
- Поле `accoundId` в теле вебхука
- [Штрихкоды для услуг](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-usluga-uslugi-metadannye-uslug-shtrihkody)
- [Отчет *Показатели продаж*](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-pokazateli-prodazh-i-zakazow-pokazateli-prodazh)
- [Отчет *Показатели заказов*](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-pokazateli-prodazh-i-zakazow-pokazateli-zakazow)
- [Управление точками продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh)

#### Изменено
- Формат [типов цен](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tipy-cen)
- Формат штрихкодов
- [Фильтры](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-assortiment-udalit-sobytie-atributy-dostupnye-dlq-fil-tracii) в запросе ассортимента
- Фильтры в отчете Остатки и Прибыльность
- Вывод "денежных" полей в валюте документа
- Увеличен лимит выборки до *1000*
- Переименовано поле `modificationsCount` в `variantsCount`
- Время в полях типа `дата-время` отображается с точностью до миллисекунд

#### Удалено
- Заголовки `If-Modified-Since`, `debug`, `X-Lognex-Format-Millisecond`
- Поле `version`
- Поле `documents` у документов
- Передача заголовка `Accept`
