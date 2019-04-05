## Показатели продаж и заказов
Средствами JSON API можно запросить показатели продаж и заказов - количество и суммы за определенный период с разбивкой по часам, дням или месяцам.

#### Атрибуты отчёта:
+ **series** - Массив данных показателей
  + **date** - дата
  + **quantity** - Количество
  + **sum** - Сумма

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|momentFrom |  `date` (required) *Example: 2018-09-01 00:00:00* Начало периода отчета|
|momentTo |  `date` (required) *Example: 2018-10-01 00:00:00* Конец периода отчета|
|interval |  `string` (required) Интервал, с которым будет построен отчет. Может принимать значения *hour*, *day*, *month* для разбиения указанного периода по часам, дням и месяцам соответственно|
|retailStore |  `string` (optional) href точки продаж. Если указан - выбираются только документы, связанные с этой точкой продаж. Для заказов игнорируется.|
|project |  `string` (optional) href проекта. Если указан - выбираются только документы, связанные с данным проектом.|
|organization |  `string` (optional) href организации. Если указан - выбираются только документы данной организации|
|store |  `string` (optional) href склада. Если указан - выбираются только документы данного склада|
 
**Заголовки**

| Заговок                | Описание  |
| ------------------------------ |:---------------------------|
|X-Lognex-Accept-Timezone | Опциональный заголовок, в котором указана текущая дата на клиенте в RFC 3522. Таймзону обязательно указывать в формате знак и 4 символа (не в Obsolete Date and Time). Пример даты: `Wed, 16 Aug 2017 23:07:01 +0700`. При подсчёте показателей даты операций смещаются в таймзону клиента.|
|X-Lognex-Content-Timezone | Заголовок ответа. В нем указывается (как думает сервер) текущая дата на клиенте в RFC 3522.|

 
### Показатели заказов

В показателях заказов учитываются только заказы покупателей. Параметр retailStore игнорируется.

> Запрос на получение показателей заказов

```shell
curl -X GET
  "https://online.moysklad.ru/report/orders/plotseries?momentFrom=2018-09-06 00:00:00&momentTo=2018-09-06 01:00:01&interval=hour"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчёта.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "https://online.moysklad.ru/context/employee",
        "metaseriesHref": "https://online.moysklad.ru/employee/metaseries",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "https://online.moysklad.ru/report/orders/plotseries?momentFrom=2018-09-06 00:00:00&momentTo=2016-09-06 01:00:01&interval=hour",
    "type": "ordersplotseries",
    "mediaType": "application/json"
  },
  "series": [
    {
      "date": "2018-09-06 00:00:00",
      "quantity": 3,
      "sum": 600
    },
    {
      "date": "2018-09-06 01:00:00",
      "quantity": 2,
      "sum": 200
    }
  ]
}
```

### Показатели продаж

В показателях продаж учитываются отгрузки, розничные продажи, полученные отчеты комиссионера. Если указан параметр retailStore, учитываются только розничные продажи.

> Запрос на получение показателей продаж c фильтрацией

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.1/plotseries/sales?momentFrom=2018-09-06 00:00:00&momentTo=2018-09-10 01:00:01&interval=hour&retailStore=https://online.moysklad.ru/api/remap/1.1/entity/retailstore/d9a8a213-6703-11e7-9464-e4de00000060&amp;project=https://online.moysklad.ru/api/remap/1.1/entity/project/d9a8a213-6703-11e7-9464-e4de00000060&amp;store=https://online.moysklad.ru/api/remap/1.1/entity/store/d9a8a213-6703-11e7-9464-e4de00000060&amp;organization=https://online.moysklad.ru/api/remap/1.1/entity/organization/d9a8a213-6703-11e7-9464-e4de00000060"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчёта.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.1/context/employee",
        "metaseriesHref": "https://online.moysklad.ru/api/remap/1.1/entity/employee/metaseries",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.1/plotseries/sales?momentFrom=2018-09-06 00:00:00&momentTo=2018-09-10 01:00:01&interval=hour&retailStore=https://online.moysklad.ru/api/remap/1.1/entity/retailstore/d9a8a213-6703-11e7-9464-e4de00000060&amp;project=https://online.moysklad.ru/api/remap/1.1/entity/project/d9a8a213-6703-11e7-9464-e4de00000060&amp;store=https://online.moysklad.ru/api/remap/1.1/entity/store/d9a8a213-6703-11e7-9464-e4de00000060&amp;organization=https://online.moysklad.ru/api/remap/1.1/entity/organization/d9a8a213-6703-11e7-9464-e4de00000060",
    "type": "salesplotseries",
    "mediaType": "application/json"
  },
  "series": [
    {
      "date": "2018-09-06 00:00:00",
      "quantity": 3,
      "sum": 900
    },
    {
      "date": "2018-09-06 01:00:00",
      "quantity": 4,
      "sum": 400
    }
  ]
}
```
