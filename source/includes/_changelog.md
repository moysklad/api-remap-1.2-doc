# Список изменений

Список последних изменений включает в себя описание отличий между версиями API Remap 1.1 и 1.2 и [список изменений в 
версии 1.2](#lastchanges) с момента её создания. Перечислены изменения и расширения возможностей существующих эндпоинтов, 
а также новые эндпоинты, которые позволяют эффективнее работать с API МоегоСклада. Более подробно с особенностями API 
МоегоСклада  можно ознакомиться в разделе [Workbook](https://dev.moysklad.ru/doc/api/remap/1.2/workbook/#workbook), 
а также по ссылкам на основные разделы данной документации.

## Отличия API Remap 1.2 от API Remap 1.1
### Добавлено
- Аутентификация с использованием [токена](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-autentifikaciq)
- Работа с Изображениями
  - Изображения [Модификаций](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-modifikaciq) 
  - Работа с несколькими изображениями 
    в [Товарах](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar-sozdat-towar), 
    [Комплектах](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-komplekt-sozdat-komplekt), 
    [Модификациях](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-modifikaciq-massowoe-sozdanie-i-obnowlenie-modifikacij)
  - [Новый эндпоинт](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-izobrazhenie) для массового 
    создания, редактирования и удаления изображений у Товаров, Комплектов и Модификаций
- Изменения в [Вебхуках](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-veb-huki)
  - добавлена версия АПИ в теле
  - добавлено поле `accoundId`
- Существующие эндпоинты
  - Создание, обновление и удаление [Точек Продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh)
  - Массовое удаление [сущностей](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti)
  - Редактирование полей [Сотрудника](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sotrudnik), влияющих на разделение доступа: `email`, `group`, `archived`, `owner`, `shared`
  - Удаление [сущностей](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti) по `syncid`
  - Работа с публикациями для [Розничной смены](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnaq-smena), 
    [Заказа на производство](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-zakaz-na-proizwodstwo), 
    [Отчетов комиссионеров](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-poluchennyj-otchet-komissionera), 
    [Тех. Операции](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-teh-operaciq), 
    [Инвентаризации](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-inwentarizaciq)
  - Обработка `null` для поля [Алкогольной подукции](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar). Теперь через JSON API можно менять тип продукции с алкогольной на неалкогольную, передав `null` в поле `alcoholic`
- Работа с Файлами
  - Возможность работы с файлами в [Операциях](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty), [Товарах](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar) и [Контрагентах](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-kontragent)
  - [Новый эндпоинт](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-fajly) для работы с Файлами
- Новые эндпоинты
  - Эндпоинт управления [Типами цен](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tipy-cen)   
  - Эндпоинт [Управления настройками справочника товаров](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-assortiment)
  - Эндпоинт [Настройка аккаунта компании](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-nastrojki-kompanii)
  - Эндпоинт [Настройки пользователя](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-nastrojki-pol-zowatelq)
  - Отчет [Показатели продаж](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-pokazateli-prodazh-i-zakazow-pokazateli-prodazh)
  - Отчет [Показатели заказов](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-pokazateli-prodazh-i-zakazow-pokazateli-zakazow)
  - Создание [характеристик Модификаций](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-harakteristiki-modifikacij)  
  - Эндпоинты [управления скидками](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-skidki) 
- Изменения формата JSON
  - Новые поля `bonusProgram` и `bonusPoints` в [Контрагентах](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-kontragent)
    и [Организациях](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-jurlico)
  - Новые поля `minionToMasterType` и `masterRetailStores` в [Точке продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh)  
- Фильтрация
  - Новая фильтрация в отчетах [Деньги](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-den-gi), 
    [Показатели продаж](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-pokazateli-prodazh-i-zakazow-pokazateli-prodazh) 
    и [Показатели заказов](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-pokazateli-prodazh-i-zakazow-pokazateli-zakazow)  
  - Фильтрация и сортировки в [Отчетах Остатков](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-ostatki)  
  - Фильтрация по `state.name` для [Документов](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti)
  - Операторы фильтрации [Ассортимента](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-assortiment) по полю updated `<`, `>`  
  - Фильтрация по uid в запросе [Аудита](https://dev.moysklad.ru/doc/api/remap/1.2/other/#audit-audit-kontexty)
- Маркетплейс
  - Получение [контекста приложения](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-serwernye-prilozheniq). Возвращает параметры приложения, в рамках которого присходит запрос
  - [Получение сущности установленного приложения](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-serwernye-prilozheniq). Возвращает параметры установленного приложения по id установленного на аккаунте приложения  
  - [Фильтрация выборки](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter) с помощью параметра `filter` по изменившему сущность приложению
- Документация
  - Информация о таймаутах и новом параметре в [Вебхуках](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-veb-huki)
  - Новый раздел [Workbook](https://dev.moysklad.ru/doc/api/remap/1.2/workbook/#workbook)
  - Формулировка об ограничении выборки в блоке [Остатки в позициях документов](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty)
  - Описание новых типов для [фильтров Аудита](https://dev.moysklad.ru/doc/api/remap/1.2/other/#audit-audit-fil-try)    
  - Описание работы с маркированными товарами в [Приемке](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-priemka) и [Отгрузке](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-otgruzka)
  
### Изменено
- Общие изменения
  - Фильтрация только через `filter`. Раньше фильтровать некоторые сущности можно было не используя ключевое слово `filter`
  - Увеличен лимит выборки до *1000* вместо *100* для массивов: позиций, размера выборки get запроса и т.д.
  - Можно создавать не более 5 [Веб-хуков](https://dev.moysklad.ru/doc/api/remap/1.2/workbook/#workbook) одного типа на разные url, а не 1 как было ранее
- Изменения формата JSON
  - Формат [Типов цен](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tipy-cen). Теперь тип цены оторажается как объект в сущностях, а не как поле
  - Формат [Штрихкодов](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar-towary):
    - можно сохранять ean8 как ean13
    - можно сохранять ean13 как ean8  
    - в значение штрихкода теперь нелья зпередавать `null`
    - штрихкоды без указания типа теперь игнорируются
    - штрихкоды вида `null` теперь игнорируются
  - Вывод "денежных" полей, таких как: `vatSum`, `sum`, `commitentSum`, `linkedSum`, `processingSum`, `proceedsNoCash`, `proceedsCash`, 
    `receivedNoCash`, `receivedCash`, `shippedSum`, `payedSum`, `invoicedSum`, `overhead.sum`, `checkSum` теперь в валюте (соответствует полю rate) [Документа](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnaq-smena-roznichnye-smeny)
  - В составе [Контрагента](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-kontragent) поле `groups` заменено на `tags`  
  - Переименовано поле `modificationsCount` в `variantsCount` в [Товарах](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar)  
  - Время в полях типа `дата-время` отображается с точностью до миллисекунд
- Поведения работы эндпоинта  
  - Нельзя добавлять пустое значение в массив тэгов в [Контрагентах](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-kontragent-kontragenty),
   [Точках продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh) и т.д. Такие значения будут игнорироваться  
  - Фильтры в запросе [Ассортимента](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-assortiment)
    - все фильтры по полям, по доступно и остаток, по search и сортировки теперь могут работать вместе  
- Путь эндпоинта
  - Изменен путь к эндпоинтам [Показателям по деньгам](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-pokazateli) (`report`)      
- Документация
  - Дополнена документация по [Аудиту](https://dev.moysklad.ru/doc/api/remap/1.2/other/#audit) по новым полям и сущностям
  - Название сущности в документации [Счет-фактура выданный](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-schet-faktura-wydannyj)
    ([Полученный](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-schet-faktura-poluchennyj)) приведено к общему виду (с написанием "выданный" после)
  - Описание в документации об ограничении при создании [Веб-хуков](https://dev.moysklad.ru/doc/api/remap/1.2/workbook/#workbook) на одну сущность
  - [Описание](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-ogranicheniq) ограничения по запросу на один IP
  - Исправлен ряд опечаток в примерах
  - Исправление опечатки в описании `email` в документации в разделе [Сотрудника](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sotrudnik)
  
### Удалено
- Заголовки `If-Modified-Since`, `debug`, `X-Lognex-Format-Millisecond`
- Поле `version`
- Поле `documents` у [Документов](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-ogranicheniq)
- Передача заголовка `Accept`
- Поле `createShared` из метаданных [Товаров](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar), 
[Услуг](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-usluga), 
[Комплектов](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-komplekt), 
[Групп Товаров](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-gruppa-towarow)
- Возможность изменения поля `ofdEnabled` для [Точки продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh). Теперь оно всегда равно true
- Описание заголовка `Lognex-Pretty-Print-JSON` в Общих сведениях
- В [Розничной смене](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnaq-smena) удалено поле `applicable` в перечислении полей

## Список последних изменений
<a name="lastchanges"></a>
Список последних изменений в API Remap 1.2

### 27-07-2020
#### Добавлено
 - Поля `minionToMasterType` и `masterRetailStores` в точку продаж, позволяющие указывать стратегию выбора мастер точки продаж для фискализации облачных чеков.

### 15-07-2020
#### Добавлено
- Эндпоинты [управления скидками](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-skidki)

#### Документация
- Дополнен раздел [Скидки](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-skidki) новыми примерами

### 26-06-2020
#### Документация
- [Информация](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq) в документацию про отзыв прошлых токенов при создании нового
- Аутентификации через токен в примерах приведена к единому виду

### 23-06-2020
#### Добавлено
- Эндпоинт [Настройки пользователя](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-nastrojki-pol-zowatelq)

### 18-06-2020
#### Добавлено
- Поля ФИО для [Юрлиц](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-jurlico) и [Контрагентов](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-kontragent) типа индивидуальный предприниматель и физическое лицо
- Возможность работы с файлами в [Операциях](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty), [Товарах](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar) и [Контрагентах](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-kontragent)

### 11-06-2020
#### Документация
- Добавлена информация о лимитах на число элементов в коллекциях и вложенных сущностях (1000 элементов)

### 10-06-2020
#### Добавлено
- Эндпоинт [Настройка аккаунта компании](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-nastrojki-kompanii)

### 03-96-2020
#### Добавлено
- Эндпоинт [Управления настройками справочника товаров](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-assortiment)

### 28-05-2020
#### Документация
- Добавлена информация об [ограничениях](https://dev.moysklad.ru/doc/api/remap/1.2/workbook/#workbook-chto-nuzhno-znat-dlq-nachala-raboty-s-json-api-ogranicheniq) и новом [параметре в Вебхуках](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-veb-huki)

### 28-05-2020
#### Добавлено в API Remap 1.1 и 1.2
- Для работы с маркированной продукцией добавлены поля `trackingType` - тип маркированной продукции, `tnved` - код ТНВЭД в сущности [Товар](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar-sozdat-towar)

#### Документация
- Добавлены описания ошибок [16102-16110](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-towarow), связанных с маркированными товарами

### 15-05-2020
#### Добавлено
- Возможность изменения полей [Сотрудника](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sotrudnik): `email`, `group`, `archived`, `owner`, `shared`

### 08-05-2020
#### Документация
- Добавлено описание по работе с маркированными товарами в [Приемке](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-priemka) и [Отгрузке](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-otgruzka)

### 06-05-2020
#### Документация
- Добавлено описание об ограничении выборки в блоке [Остатки в позициях документов](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty)

### 27-04-2020
#### Документация
- Удалено описание заголовка `Lognex-Pretty-Print-JSON` в [Общих сведениях](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq)

### 26-04-2020
#### Документация
- [Изменено описание](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-ogranicheniq) ограничения по запросу на один IP

### 26-04-2020
#### Документация
- Исправление опечатки в описании `email` [Сотрудника](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sotrudnik)

### 14-04-2020
#### Документация
- Добавлено описание новых типов для [фильтров Аудита](https://dev.moysklad.ru/doc/api/remap/1.2/other/#audit-audit-fil-try)

### 26-03-2020
#### Изменено
- В [Розничной смене](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnaq-smena) удалено поле `applicable` в перечислении полей

### 10-03-2020
#### Добавлено
- Поля `printed` и `published` в эндпоинте `entity/operation` 

### 04-03-2020
#### Добавлено
- Поле `stockDays` - количество дней на складе в [Отчет Остатки -> Все Остатки](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-ostatki-dostup-k-otchetu-ostatki)

### 04-03-2020
#### Документация
- Добавлен новый раздел [Workbook](https://dev.moysklad.ru/doc/api/remap/1.2/workbook/#workbook)
