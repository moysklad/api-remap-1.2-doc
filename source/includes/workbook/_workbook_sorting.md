## Сортировка
Для большинства коллекций, возвращаемых JSON API, доступна сортировка.

Сортировка поддерживается для следующих типов полей:

* числовой, 
* строковый, 
* дата-время, 
* логический,
* uuid.

### Доступные поля для сортировки
В зависимости от вызываемого endpoint'а сортируемые поля могут отличаться.
В таблицах ниже представлены сортируемые поля справочников и документов.

| Endpoint (справочники) | Сортируемые поля |
|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <a href="../dictionaries/#suschnosti-kontragent">Контрагент</a>|`id`, `version`, `updated`, `updatedBy`, `name`, `description`, `code`, `externalCode`, `archived`, `created`, `phone`, `email`, `fax` |
| <a href="../dictionaries/#suschnosti-assortiment">Ассортимент</a>| `name`, `code` |
| <a href="../dictionaries/#suschnosti-valuta">Валюта</a>|`id`, `name`, `archived`, `default`, `fullname`, `code`, `isoCode`, `multiplicity` |
| <a href="../dictionaries/#suschnosti-towar">Товар</a>|`id`, `version`, `updated`, `updatedBy`, `name`, `code`, `externalCode`, `archived`, `pathName`, `isSerialTrackable`, `weighed`, `weight`, `volume`, `syncId` |
| <a href="../dictionaries/#suschnosti-usluga">Услуга</a>|`id`, `version`, `updated`, `updatedBy`, `name`, `code`, `externalCode`, `archived`, `pathName`, `syncId` |
| <a href="../dictionaries/#suschnosti-komplekt">Комплект</a>|`id`, `version`, `updated`, `updatedBy`, `name`, `description`, `code`, `externalCode`, `archived`, `pathName`, `article`, `weight`, `volume`,  `syncId` |
| <a href="../dictionaries/#suschnosti-modifikaciq">Модификация</a>|`id`,`version`, `updated`,`updatedBy`, `name`, `description`, `code`,`externalCode` |
| <a href="../dictionaries/#suschnosti-gruppa-towarow">Группа товаров</a>|`id`, `version`, `updated`, `updatedBy`, `name`, `externalCode`, `archived`, `pathName` |
| <a href="../dictionaries/#suschnosti-seriq">Серия</a>|`id`,`version`, `updated`,`updatedBy`, `name`, `description`, `code`,`externalCode` |
| <a href="../dictionaries/#suschnosti-dogowor">Договор</a>|`id`, `version`, `updated`, `updatedBy`, `name`, `description`, `code`, `externalCode`, `archived`, `moment` |
| <a href="../dictionaries/#suschnosti-proekt">Проект</a>|`id`,`version`, `updated`,`updatedBy`, `name`, `code`,`externalCode`, `archived` |
| <a href="../dictionaries/#suschnosti-stat-q-rashodow">Статья расходов</a>|`id`,`version`, `updated`,`updatedBy`, `name`, `description`, `code`,`externalCode` |
| <a href="../dictionaries/#suschnosti-strana">Страна</a>|`id`,`version`, `updated`,`updatedBy`, `name`, `description`, `code`,`externalCode` |
| <a href="../dictionaries/#suschnosti-otdel">Отдел</a>|`id` |
| <a href="../dictionaries/#suschnosti-edinica-izmereniq">Единица измерения</a>|`id`, `version`, `updated`, `name`, `description`, `code`, `externalCode` |
| <a href="../dictionaries/#suschnosti-sotrudnik">Сотрудник</a>|`id`, `version`, `updated`, `updatedBy`, `name`, `description`, `externalCode`,`archived`,`email`,`phone`,`lastname`, `firstname`, `middlename`, `uid` |
| <a href="../dictionaries/#suschnosti-sklad">Склад</a>|`id`,`version`, `updated`,`updatedBy`, `name`, `description`, `code`, `externalCode`, `address`, `archived`, `pathName` |
| <a href="../dictionaries/#suschnosti-jurlico">Юрлицо</a>|`id`,`version`, `updated`,`updatedBy`, `name`, `description`, `code`,`externalCode`, `archived`, `created`, `inn`, `actualAddress`, `legalTitle`, `legalAddress`, `kpp`, `phone`, `email`, `fax` |
| <a href="../dictionaries/#suschnosti-tochka-prodazh">Точка продаж</a>|`id`,`version`, `updated`,`updatedBy`, `name`, `description`, `externalCode`, `address`, `active` |
| <a href="../dictionaries/#suschnosti-zadacha">Задача</a>|`id`, `created`, `version`, `updated`, `description`, `dueToDate`, `done` |

| Endpoint (документы) | Сортируемые поля |
|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <a href="../documents/#dokumenty-roznichnaq-smena">Розничная смена</a>|`id`, `syncId`, `version`, `updated`, `updatedBy`, `name`, `description`, `externalCode`, `moment`, `applicable`, `sum`, `created`, `closeDate`|
| <a href="../documents/#dokumenty-oprihodowanie">Оприходования</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`,`name`, `description`, `externalCode`,`moment`, `applicable`,`sum`, `created` |
| <a href="../documents/#dokumenty-zakaz-pokupatelq">Заказ покупателя</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`,`name`, `description`, `externalCode`,`moment`, `applicable`,`sum`, `created`, `deliveryPlannedMoment`|
| <a href="../documents/#dokumenty-zakaz-postawschiku">Заказ поставщику</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`,`name`, `description`, `externalCode`,`moment`, `applicable`,`sum`, `created`, `deliveryPlannedMoment`|
| <a href="../documents/#dokumenty-schet-pokupatelu">Счет покупателю</a>|`id`, `syncId`, `version`, `updated`, `updatedBy`, `name`, `description`, `externalCode`, `moment`, `applicable`, `sum`, `created`, `paymentPlannedMoment` |
| <a href="../documents/#dokumenty-schet-postawschika">Счет поставщика</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`, `name`, `description`, `externalCode`,`moment`, `applicable`, `sum`, `created`, `incomingNumber`, `incomingDate`, `paymentPlannedMoment` |
| <a href="../documents/#dokumenty-vhodqschij-platezh">Входящий платеж</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`, `name`, `description`, `externalCode`,`moment`, `applicable`, `sum`, `created`, `paymentPurpose`, `incomingNumber`, `incomingDate` |
| <a href="../documents/#dokumenty-ishodqschij-platezh">Исходящий платеж</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`, `name`, `description`, `externalCode`,`moment`, `applicable`, `sum`, `created`, `paymentPurpose` |
| <a href="../documents/#dokumenty-prihodnyj-order">Приходный ордер</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`, `name`, `description`, `externalCode`,`moment`, `applicable`, `sum`, `created`, `paymentPurpose` |
| <a href="../documents/#dokumenty-rashodnyj-order">Расходный ордер</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`, `name`, `description`, `externalCode`,`moment`, `applicable`, `sum`, `created`, `paymentPurpose` |
| <a href="../documents/#dokumenty-otgruzka">Отгрузка</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`, `name`, `description`, `externalCode`,`moment`, `applicable`, `sum`, `created` |
| <a href="../documents/#dokumenty-priemka">Приемка</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`, `name`, `description`, `externalCode`,`moment`, `applicable`, `sum`, `created` |
| <a href="../documents/#dokumenty-spisanie">Списание</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`, `name`, `description`, `externalCode`,`moment`, `applicable`, `sum`, `created` |
| <a href="../documents/#dokumenty-peremeschenie">Перемещение</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`, `name`, `description`, `externalCode`,`moment`, `applicable`, `sum`, `created` |
| <a href="../documents/#dokumenty-roznichnaq-prodazha">Розничная продажа</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`, `name`, `description`, `externalCode`,`moment`, `applicable`, `sum`, `created` |
| <a href="../documents/#dokumenty-roznichnyj-wozwrat">Розничный возврат</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`, `name`, `description`, `externalCode`,`moment`, `applicable`, `sum`, `created` |
| <a href="../documents/#dokumenty-vnesenie-deneg">Внесение денег</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`, `name`, `description`, `externalCode`,`moment`, `applicable`, `sum`, `created` |
| <a href="../documents/#dokumenty-vyplata-deneg">Выплата денег</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`, `name`, `description`, `externalCode`,`moment`, `applicable`, `sum`, `created` |
| <a href="../documents/#dokumenty-vozwrat-pokupatelq">Возврат покупателя</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`, `name`, `description`, `externalCode`,`moment`, `applicable`, `sum`, `created` |
| <a href="../documents/#dokumenty-vozwrat-postawschiku">Возврат поставщику</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`, `name`, `description`, `externalCode`,`moment`, `applicable`, `sum`, `created` |
| <a href="../documents/#dokumenty-schet-faktura-wydannyj">Счет-фактура выданный</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`, `name`, `description`, `externalCode`,`moment`, `applicable`, `sum`, `created` |
| <a href="../documents/#dokumenty-schet-faktura-poluchennyj">Счет-фактура полученный</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`, `name`, `description`, `externalCode`,`moment`, `applicable`, `sum`, `created` |
| <a href="../documents/#dokumenty-inwentarizaciq">Инвентаризация</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`, `name`, `description`, `externalCode`,`moment`, `applicable`, `sum`, `created` |
| <a href="../documents/#dokumenty-poluchennyj-otchet-komissionera">Полученный отчет комиссионера</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`, `name`, `description`, `externalCode`,`moment`, `applicable`, `sum`, `created`, `incomingDate` |
| <a href="../documents/#dokumenty-vydannyj-otchet-komissionera">Выданный отчет комиссионера</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`, `name`, `description`, `externalCode`,`moment`, `applicable`, `sum`, `created` |
| <a href="../documents/#dokumenty-prajs-list">Прайс-лист</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`, `name`, `description`, `externalCode`,`moment`, `applicable`, `sum`, `created` |
| <a href="../documents/#dokumenty-teh-karta">Тех. карта</a>|`id`, `syncId`, `version`, `updated`, `updatedBy`, `name`, `description`, `externalCode`|
| <a href="../documents/#dokumenty-zakaz-na-proizwodstwo">Заказ на производство</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`, `name`, `description`, `externalCode`,`moment`, `applicable`, `sum`, `created`, `deliveryPlannedMoment`, `quantity`|
| <a href="../documents/#dokumenty-teh-operaciq">Тех. операция</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`, `name`, `description`, `externalCode`,`moment`, `applicable`, `sum`, `created`, `quantity` |
| <a href="../documents/#dokumenty-vnutrennij-zakaz">Внутренний заказ</a>|`id`, `syncId`,`version`, `updated`,`updatedBy`, `name`, `description`, `externalCode`,`moment`, `applicable`, `sum`, `created`, `quantity` |

### Как использовать сортировку через JSON API
Для применения сортировки к коллекции необходимо добавить в запрос `order=[field name],[asc/desc]`, где field name - имя поля для сортировки. 
Опционально через запятую можно указать направление сортировки:

* `asc` - по возрастанию, значение по умолчанию,
* `desc` - по убыванию.

Например, для сортировки поля `name` по возрастанию нужно использовать `?order=name, asc` или `?order=name`, а по убыванию `?order=name,desc`.

Сортировка также доступна одновременно для нескольких полей, поля для сортировки необходимо указывать через разделитель `;`. 
Например, `?order=name,asc;code,desc`.

Рассмотрим применение сортировки.
Предварительно создадим товары с различными наименованиями, которые могут начинаться с латиницы, кириллицы, цифр или специальных символов. 

> Запрос

```shell
curl -X POST 
https://online.moysklad.ru/api/remap/1.2/entity/product 
-H 'Authorization: Bearer <Access-Token>' 
-H 'Cache-Control: no-cache' 
-H 'Content-Type: application/json' 
-d '[
 {
"name":"12345",
"weight":0.1,
"weighed":true,
"syncId":"8b7c97cf-cf77-4f7e-b200-d264125578ab"
 },
 {
"name":"Pencil",
"weight":0.01,
"syncId":"5b7c97cf-cf77-4f7e-b200-d264125578ab"
 },
 {
"name":"Pencil 123",
"weight":0.01,
"syncId":"3b7c97cf-cf77-4f7e-b200-d264125578ab"
 },
 {
"name":"Pencil Blue",
"weight":0.11,
"weighed":true
 },
 {
"name":"Pencil Red",
"weight":0.2,
"syncId":"1b7c97cf-cf77-4f7e-b200-d264125578ab"
 },
 {
"name":"Карандаш",
"weight":0.1,
"syncId":"2b7c97cf-cf77-4f7e-b200-d264125578ab"
 },
 {
"name":"Карандаш 123",
"weight":0.32,
"syncId":"4b7c97cf-cf77-4f7e-b200-d264125578ab"
 },
 {
"name":"Карандаш желтый",
"weight":0.12,
"weighed":true,
"syncId":"7b7c97cf-cf77-4f7e-b200-d264125578ab"
 },
 {
"name":"Карандаш зеленый",
"weight":0.4,
"syncId":"8c7c97cf-cf77-4f7e-b200-d264125578ab"
 },
 {
"name":"!!! Это карандаш",
"weight":0.1,
"syncId":"3d7c97cf-cf77-4f7e-b200-d264125578ab"
 }
]'
```

Чтобы получить коллекцию товаров, отсортированных по имени, необходимо указать поле `name` и направление сортировки, как в примере ниже

> Запрос

```shell
curl -X GET 
'https://online.moysklad.ru/api/remap/1.2/entity/product?order=name' 
-H 'Authorization: Bearer <Access-Token>' 
-H 'Cache-Control: no-cache'
```
Ответ будет содержать следующий порядок по возрастанию:

|name|
|------------------|
| 12345 |
| Pencil |
| Pencil 123 |
| Pencil Blue |
| Pencil Red |
| Карандаш |
| Карандаш 123 |
| Карандаш желтый |
| Карандаш зеленый |
| !!! Это карандаш |

Изменим направление сортировки

> Запрос

```shell
curl -X GET 
'https://online.moysklad.ru/api/remap/1.2/entity/product?order=name,desc' 
-H 'Authorization: Bearer <Access-Token>' 
-H 'Cache-Control: no-cache'
```

|name|
|------------------|
| !!! Это карандаш |
| Карандаш зеленый |
| Карандаш желтый |
| Карандаш 123 |
| Карандаш |
| Pencil Red |
| Pencil Blue |
| Pencil 123 |
| Pencil |
| 12345 |

Попробуем отсортировать товары одновременно по убыванию логического поля `weighed` и по возрастанию поля `name`.

> Запрос

```shell
curl -X GET 
'https://online.moysklad.ru/api/remap/1.2/entity/product?order=weighed,desc;name' 
-H 'Authorization: Bearer <Access-Token>' 
-H 'Cache-Control: no-cache' 
-H 'Content-Type: application/json'
```

|weighed|name|
|------------------|------------------|
| true | 12345 |
| true | Pencil Blue |
| true | Карандаш желтый |
| false | Pencil |
| false | Pencil 123 |
| false | Pencil Red |
| false | Карандаш |
| false | Карандаш 123 |
| false | Карандаш зеленый |
| false | !!! Это карандаш |

Добавим еще сортировку по числовому полю `weight`.

> Запрос

```shell
curl -X GET 
'https://online.moysklad.ru/api/remap/1.2/entity/product?order=weighed,desc;weight,desc;name' 
-H 'Authorization: Bearer <Access-Token>' 
-H 'Cache-Control: no-cache' 
-H 'Content-Type: application/json'
```

|weighed|weight|name|
|------------------|------------------|------------------|
|true|0.12| Карандаш желтый |
|true|0.11| Pencil Blue |
|true|0.1| 12345 |
|false|0.4| Карандаш зеленый |
|false|0.32| Карандаш 123 |
|false|0.2| Pencil Red |
|false|0.1| Карандаш |
|false|0.1| !!! Это карандаш |
|false|0.01| Pencil |
|false|0.01| Pencil 123 |

Кроме текстовых, числовых и логических полей доступна сортировка по полям типов uuid и дата-время.
Например, применим сортировку по полю `syncId`.

> Запрос

```shell
curl -X GET 
'https://online.moysklad.ru/api/remap/1.2/entity/product?order=syncId' 
-H 'Authorization: Bearer <Access-Token>' 
-H 'Cache-Control: no-cache' 
-H 'Content-Type: application/json'
```

|syncId|name|
|------------------|------------------|
| 1b7c97cf-cf77-4f7e-b200-d264125578ab|Pencil Red |
| 2b7c97cf-cf77-4f7e-b200-d264125578ab|Карандаш |
| 3b7c97cf-cf77-4f7e-b200-d264125578ab|Pencil 123 |
| 3d7c97cf-cf77-4f7e-b200-d264125578ab|!!! Это карандаш |
| 4b7c97cf-cf77-4f7e-b200-d264125578ab|Карандаш 123 |
| 5b7c97cf-cf77-4f7e-b200-d264125578ab|Pencil |
| 7b7c97cf-cf77-4f7e-b200-d264125578ab|Карандаш желтый |
| 8b7c97cf-cf77-4f7e-b200-d264125578ab|12345 |
| 8c7c97cf-cf77-4f7e-b200-d264125578ab|Карандаш зеленый |
| null |Pencil Blue |

У товара `Pencil Blue` отсутствует значение поля поэтому при сортировке по возрастанию, оно выводится в конце. 
Аналогичное поведение и для других полей со значением `null`.
