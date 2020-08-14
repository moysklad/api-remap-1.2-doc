# JSON API 1.2 Changelog
Изменения в JSON API 1.2 будут описаны в данном документе.

### 04-08-2020
#### Добавлено
- Дополнена информация об ошибке **17102**

## 30-07-2020
#### Изменено
Дополнительные поля Товаров, Услуг, Модификаций и Комплектов объединены и располагаются в метаданных Товаров.

## 28-07-2020
### Добавлено
 - Добавлена возможность изменять настройки применения скидок в [настройках компании]((https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-nastrojki-kompanii))

## 27-07-2020
### Добавлено
 - Поля `minionToMasterType` и `masterRetailStores` в [Точку продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh), позволяющие указывать стратегию выбора мастер точки продаж для фискализации облачных чеков.
 
## 24-07-2020
### Добавлено
 - Новая [ошибка](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki) 1083 - ошибка формирования ответа на стороне сервера
 - Новый формат описания атрибутов сущностей с помощью таблиц

## 22-07-2020
### Добавлено
 - Поле `factureIn` для [возврата поставщику](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vozwrat-postawschiku), представляющее собой ссылку на связанный с возвратом [счет-фактуру полученный](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-schet-faktura-poluchennyj)

## 15-07-2020
### Добавлено
 - Эндпоинты [управления скидками](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-skidki)
 - Дополнен раздел [Скидки](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-skidki) новыми примерами

## 09-07-2020
### Добавлено
 - Описание кодов маркировки пользовательской упаковки (КМ ПУ) в сущностях [`Отгрузка`](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-otgruzka) и [`Приемка`](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-priemka)
 - Ошибки при импорте КМ ПУ из xml  
 - Поле [factureOut](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vozwrat-pokupatelq-vozwraty-pokupatelej-swqzi-s-drugimi-dokumentami) для возврата поставщику, представляющее собой ссылку на связанный с возвратом счет-фактуру выданный

## 08-07-2020
### Добавлено
 - Поле `ppeType` (код средства индивидуальной защиты) [в сущность `Товары`](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar-towary-atributy-suschnosti).

## 07-07-2020
### Добавлено
 - [Фильтрация комплектов](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-assortiment-udalit-sobytie-atributy-dostupnye-dlq-fil-tracii) по артикулу в ассортименте

## 26-06-2020
### Добавлено
 - Раздел про [получение токена](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-autentifikaciq-poluchenie-nowogo-tokena) дополнен информацией про отзыв прошлых токенов при создании нового
### Исправлено
 - В примерах исправлен заголовок авторизации через токен

## 23-06-2020
### Добавлено
- Эндпоинт [Настройки пользователя](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-nastrojki-pol-zowatelq)

## 18-06-2020
### Добавлено
 - Поля ФИО для [Юрлиц](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-jurlico) и [Контрагентов](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-kontragent) типа индивидуальный предприниматель и физическое лицо
 - Добавлена возможность работы с [файлами](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-fajly) и поле `files` в сущностях и документах
 
## 11-06-2020
### Исправлено
 - Информация о лимитах на число элементов в коллекциях и вложенных сущностях ([1000 элементов](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow))

## 10-06-2020
### Добавлено
 - Эндпоинт [Настройка аккаунта компании](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-nastrojki-kompanii)

## 03-06-2020
### Добавлено
 - Эндпоинт [Управления настройками справочника товаров](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-assortiment)

## 28-05-2020
### Добавлено
 - Для работы с маркированной продукцией добавлены поля `trackingType` - тип маркированной продукции, `tnved` - код ТНВЭД в сущности [Товар](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar-sozdat-towar)
 - Добавлена информация об [ограничениях](https://dev.moysklad.ru/doc/api/remap/1.2/workbook/#workbook-chto-nuzhno-znat-dlq-nachala-raboty-s-json-api-ogranicheniq) и новом [параметре в Вебхуках](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-veb-huki)
 - [Ошибки 16102-16110](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-towarow), связанные с маркированными товарами

## 15-05-2020
### Добавлено
 - Возможность изменения полей [Сотрудника](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sotrudnik): `email`, `group`, `archived`, `owner`, `shared`
 - Пояснение об ограничениях при изменении [атрибутов сотрудника](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sotrudnik-sotrudniki-atributy-suschnosti)

## 08-05-2020
### Добавлено
 - Описание работы с маркированными товарами в [приемке](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-priemka-priemki-pozicii-priemki) и [отгрузке](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-otgruzka-otgruzki-pozicii-otgruzki)
 
## 07-05-2020
### Добавлено
 - Описание [эндпоинта работы с характеристиками модификаций](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-harakteristiki-modifikacij)
 - [Ошибка 10002](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-towarow) создания характеристик модификаций с существующим именем
### Исправлено
 - Описание [характеристик модификаций](https://dev.moysklad.ru/doc/api/remap/1.2/#suschnosti-modifikaciq-modifikacii-atributy-wlozhennyh-suschnostej-metadannye-modifikacij-harakteristiki-modifikacii) в разделе Модификации
 
## 06-05-2020
### Добавлено
 - [Уточнение](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-ostatki-w-poziciqh-dokumentow) о том, что позиции документов возвращаются при лимите 100 и менее

## 27-04-2020
### Удалено
 - Описание заголовка Lognex-Pretty-Print-JSON в [Общих сведениях](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq)

## 26-04-2020
### Изменено
 - [Изменено описание](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-ogranicheniq) ограничения по запросу на один ip
 - исправлена опечатка в описании email [Сотрудника](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sotrudnik)

## 14-04-2020
### Добавлено
 - Описание новых типов для [фильтров аудита](https://dev.moysklad.ru/doc/api/remap/1.2/other/#audit-audit-kontexty)

## 26-03-2020
### Изменено
- В [розничной смене](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnaq-smena-roznichnye-smeny) удалено поле applicable в перечислении полей и из примера на получение

## 10-03-2020
### Добавлено
- Фильтрация по `printed` и `published` в раздел [Фильтрация документов](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-poluchenie-nowogo-tokena-fil-traciq-dokumentow)

## 04-03-2020
### Добавлено
- Поле `stockDays` в [Отчет Остатки -> Все Остатки](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-ostatki-dostup-k-otchetu-ostatki).

## 04-03-2020
### Добавлено
- Новый раздел [Workbook](https://dev.moysklad.ru/doc/api/remap/1.2/workbook/#workbook)

## 13-12-2019
### Изменено
- Описание ограничений при [создании веб-хуков](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-veb-huki-sozdat-web-huk) на одну сущность

## 10-12-2019
### Изменено
- Название сущности [Счет-фактура выданный](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-schet-faktura-wydannyj) (полученный) приведено к общему виду (с написанием "выданный" после)

## 09-12-2019
### Добавлено
- Операторы фильтрации ассортимента по полю updated `<`, `>`
- Ссылка на Java SDK

## 04-12-2019
### Добавлено
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

## 21-11-2019
### Изменено
- Дополнена документация по [аудиту](https://dev.moysklad.ru/doc/api/remap/1.2/other/#audit)

## 13-11-2019
### Изменено
- [Фильтрация](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-assortiment-udalit-sobytie-atributy-dostupnye-dlq-fil-tracii) в запросе `assortment`

## 07-11-2019
### Добавлено
- Получение [контекста приложения](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-serwernye-prilozheniq)
- [Получение сущности установленного приложения](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-serwernye-prilozheniq)
- [Фильтрация выборки с помощью параметра filter](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter) по изменившему сущность приложению
- [Фильтрация записей аудита с помощью параметра filter](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-serwernye-prilozheniq-fil-traciq-zapisej-audita-s-pomosch-u-parametra-filter-application) по изменившему сущность приложению

## 15-10-2019
### Удалено
- Возможность изменения поля ofdEnabled для точки продаж. Теперь оно всегда равно true.

## 11-10-2019
### Исправлено
- Ряд опечаток в примерах

## 10-10-2019
### Добавлено
- Аутентификация с использованием [токена](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-autentifikaciq)
- Изображения модификаций
- Несколько изображений у [товаров](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar-towary), [комплектов](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-komplekt), [модификаций](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-modifikaciq)
- [Массовое создание, редактирование и удаление](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) через POST
- [Фильтрация по uid](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-serwernye-prilozheniq-fil-traciq-zapisej-audita-s-pomosch-u-parametra-filter-uid) в запросе аудита
- Версия АПИ в теле вебхука
- Поле `accoundId` в теле вебхука
- [Штрихкоды для услуг](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-usluga-uslugi-metadannye-uslug-shtrih-kody)
- [Отчет *Показатели продаж*](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-pokazateli-prodazh-i-zakazow-pokazateli-prodazh)
- [Отчет *Показатели заказов*](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-pokazateli-prodazh-i-zakazow-pokazateli-zakazow)
- [Управление точками продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh)

### Изменено
- Формат [типов цен](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tipy-cen)
- Формат штрихкодов
- [Фильтры](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-assortiment-udalit-sobytie-atributy-dostupnye-dlq-fil-tracii) в запросе ассортимента
- Фильтры в отчете Остатки и Прибыльность
- Вывод "денежных" полей в валюте документа
- Увеличен лимит выборки до *1000*
- Переименовано поле `modificationsCount` в `variantsCount`
- Время в полях типа `дата-время` отображается с точностью до миллисекунд

### Удалено
- Заголовки `If-Modified-Since`, `debug`, `X-Lognex-Format-Millisecond`
- Поле `version`
- Поле `documents` у документов
- Передача заголовка `Accept`

## 21-10-2019
### Добавлено
 - Поле `fiscalType` в [точке продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh).
