# Список изменений

## Добавлено
- Аутентификация с использованием [токена](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-autentifikaciq)
- Изображения [Модификаций](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-modifikaciq) 
- Работа с несколькими изображениями 
в [Товарах](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar-sozdat-towar), 
[Комплектах](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-komplekt-sozdat-komplekt), 
[Модификациях](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-modifikaciq-massowoe-sozdanie-i-obnowlenie-modifikacij)
- [Новый эндпоинт](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-izobrazhenie) для массового 
создания, редактирования и удаления изображений у Товаров, Комплектов и Модификаций
- Фильтрация по uid в запросе [Аудита](https://dev.moysklad.ru/doc/api/remap/1.2/other/#audit-audit-kontexty)
- Версия АПИ в теле [Вебхука](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-veb-huki)
- Поле `accoundId` в теле [Вебхука](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-veb-huki)
- Штрихкоды для [Услуг](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-usluga)
- Отчет [Показатели продаж](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-pokazateli-prodazh-i-zakazow-pokazateli-prodazh)
- Отчет [Показатели заказов](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-pokazateli-prodazh-i-zakazow-pokazateli-zakazow)
- Управление [Точками продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh)
- Новая фильтрация в отчетах [Деньги](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-den-gi), 
[Показатели продаж](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-pokazateli-prodazh-i-zakazow-pokazateli-prodazh) 
и [Показатели заказов](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-pokazateli-prodazh-i-zakazow-pokazateli-zakazow)
- [Ошибка 14009](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-dop-polq) при создании или изменения доп полей (кроме типа файл)
- Атрибут `id` в [Справочнике валют](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-valuta)
- Удаление [сущностей](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti) по `syncid`
- Эндпоинт управления [Типами цен](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tipy-cen)
- Работа с публикациями для [Розничной смены](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnaq-smena), 
[Заказа на производство](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-zakaz-na-proizwodstwo), 
[Отчетов комиссионеров](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-poluchennyj-otchet-komissionera), 
[Тех. Операции](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-teh-operaciq), 
[Инвентаризации](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-inwentarizaciq)
- Массовое удаление [сущностей](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti)
- Фильтрация и сортировки в [Отчетах Остатков](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-ostatki)
- Фильтрация по `state.name` для [Документов](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti)
- Новые поля `bonusProgram` и `bonusPoints` в [Контрагентах](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-kontragent)
 и [Организациях](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-jurlico)
- Получение [контекста приложения](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-serwernye-prilozheniq). Возвращает параметры приложения, в рамках которого присходит запрос
- [Получение сущности установленного приложения](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-serwernye-prilozheniq). Возвращает параметры установленного приложения по id установленного на аккаунте приложения
- [Фильтрация выборки](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter) с помощью параметра filter по изменившему сущность приложению
- [Фильтрация записей аудита](https://dev.moysklad.ru/doc/api/remap/1.2/other/#audit-audit-fil-try) с помощью параметра `filter` по изменившему сущность приложению
- Поле `fiscalType` в [Точке продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh)
- Список необходимых полей в документации эндпоинтов на создание следующих сущностей:
   - [Внутренний заказ](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vnutrennij-zakaz)
   - [Инвентаризация](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-inwentarizaciq)
   - [Выплата денег](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vyplata-deneg)
   - [Внесение денег](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-vnesenie-deneg)
   - [Перемещение](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-peremeschenie)
   - [Оприходование](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-oprihodowanie)
   - [Контрагент](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-kontragent)
   - [Задача](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-zadacha)
   - [Бонусная операция](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-bonusnaq-operaciq)
- Операторы фильтрации [Ассортимента](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-assortiment) по полю updated `<`, `>`
- Ссылка на [Java SDK](https://github.com/moysklad/java-remap-1.2-sdk)
- Новый раздел [Workbook](https://dev.moysklad.ru/doc/api/remap/1.2/workbook/#workbook)
- Поле `stockDays` в [Отчет Остатки -> Все Остатки](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-otchet-ostatki-dostup-k-otchetu-ostatki)  
- Поля `printed` и `published` в эндпоинте `entity/operation`
- Описание новых типов для [фильтров Аудита](https://dev.moysklad.ru/doc/api/remap/1.2/other/#audit-audit-fil-try)
- Формулировка об ограничении выборки в блоке [Остатки в позициях документов](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty)
- Маркировка [Товаров](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar). Для маркировки добавлено поле `trackingType`
- Описание работы с маркированными товарами в [Приемке](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-priemka) и [Отгрузке](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-otgruzka)
- Создание [характеристик Модификаций](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-harakteristiki-modifikacij)
- Обработка `null` для поля [Алкогольной подукции](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar). Теперь через JSON API можно менять тип продукции с алкогольной на неалкогольную передав `null` в поле `alcoholic`
- Редактирование полей [Сотрудника](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sotrudnik), влияющих на разделение доступа: `email`, `group`, `archived`, `owner`, `shared`
- Описание [ошибок 16102-16110](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki-kody-oshibok-dlq-towarow), связанных с маркированными товарами
- Информация о таймаутах и новом параметре в [Вебхуках](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-veb-huki)
- Эндпоинт [Управления настройками справочника товаров](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-assortiment)
- Эндпоинт [Настройка аккаунта компании](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-nastrojki-kompanii)

## Изменено
- Формат [Типов цен](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tipy-cen). Теперь тип цены оторажается как объект в сущностях, а не как поле
- Формат [Штрихкодов](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar-towary):
  - можно сохранять ean8 как ean13
  - можно сохранять ean13 как ean8  
  - в значение штрихкода теперь нелья зпередавать `null`
  - штрихкоды, без указания типа теперь игнорируются
  - штрихкоды вида `null` теперь игнорируются
- Фильтры в запросе [Ассортимента](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-assortiment)
  - все фильтры по полям, по доступно и остаток, по search и сортировки теперь могут работать вместе
- Вывод "денежных" полей, таких как: vatSum, sum, commitentSum, linkedSum, processingSum, proceedsNoCash, proceedsCash, 
receivedNoCash, receivedCash, shippedSum, payedSum, invoicedSum, overhead.sum, checkSum - в валюте (соответствует полю rate) [Документа](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnaq-smena-roznichnye-smeny)
- Увеличен лимит выборки до *1000* вместо *100*
- В составе [Контрагента](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-kontragent) поле `groups` заменено на `tags`
- Переименовано поле `modificationsCount` в `variantsCount` в [Товарах](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar)
- Время в полях типа `дата-время` отображается с точностью до миллисекунд
- Ошибка [1005](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-oshibki) при указании сущности не в нижнем регистре
- Фильтрация только через `filter`. Раньше фильтровать некоторые сущности можно было не используя ключевое слово `filter`
- Нельзя добавлять пустое значение в массив тэгов в [Контрагентах](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-kontragent-kontragenty),
 [Точках продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh) и т.д. Такие значения будут игнорироваться
- Изменен путь к эндпоинтам [Показателям по деньгам](https://dev.moysklad.ru/doc/api/remap/1.2/reports/#otchety-pokazateli) (`report`)
- Дополнена документация по [Аудиту](https://dev.moysklad.ru/doc/api/remap/1.2/other/#audit) по новым полям и сущностям
- Исправлено преобразование `null` значений из массива тегов в тег `null` в [Контрагентах](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-kontragent-kontragenty),
  [Точках продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh-tochki-prodazh) и т.д.
- Название сущности в документации [Счет-фактура выданный](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-schet-faktura-wydannyj)
([Полученный](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-schet-faktura-poluchennyj)) приведено к общему виду (с написанием "выданный" после)
- Описание в документации об ограничении при создании [Веб-хуков](https://dev.moysklad.ru/doc/api/remap/1.2/workbook/#workbook) на одну сущность
- Можно создавать не более 5 [Веб-хуков](https://dev.moysklad.ru/doc/api/remap/1.2/workbook/#workbook) одного типа на разные url, а не 1 как было ранее
- В [Розничной смене](https://dev.moysklad.ru/doc/api/remap/1.2/documents/#dokumenty-roznichnaq-smena) удалено поле `applicable` в перечислении полей
- Исправление опечатки в описании `email` в документации в разделе [Сотрудника](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-sotrudnik)
- [Описание](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-ogranicheniq) ограничения по запросу на один IP

## Удалено
- Заголовки `If-Modified-Since`, `debug`, `X-Lognex-Format-Millisecond`
- Поле `version`
- Поле `documents` у [Документов](https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-ogranicheniq)
- Передача заголовка `Accept`
- Поле `createShared` из метаданных [Товаров](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-towar), 
[Услуг](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-usluga), 
[Комплектов](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-komplekt), 
[Групп Товаров](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-gruppa-towarow)
- Возможность изменения поля ofdEnabled для [Точки продаж](https://dev.moysklad.ru/doc/api/remap/1.2/dictionaries/#suschnosti-tochka-prodazh). Теперь оно всегда равно true
- Описание заголовка Lognex-Pretty-Print-JSON в Общих сведениях

## Исправлено
- Ряд опечаток в примерах
- Информация о лимитах на число элементов в коллекциях и вложенных сущностях (1000 элементов)
