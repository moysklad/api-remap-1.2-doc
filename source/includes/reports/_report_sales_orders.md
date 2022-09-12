## Показатели продаж и заказов
Средствами JSON API можно запросить показатели продаж и заказов - количество и суммы за определенный период с разбивкой по часам, дням или месяцам. Для доступа к отчету через API требуется право на просмотр показателей `viewDashboard`.

#### Атрибуты отчета:

| Название   | Тип           | Описание                                                                   |
| ---------- | :------------ | :------------------------------------------------------------------------- |
| **series** | Array(Object) | Массив показателей. Подробнее в таблице ниже<br>`+Обязательное при ответе` |

#### Показатели (series)

| Название     | Тип      | Описание                                 |
| ------------ | :------- | :--------------------------------------- |
| **date**     | DateTime | Дата<br>`+Обязательное при ответе`       |
| **quantity** | Int      | Количество<br>`+Обязательное при ответе` |
| **sum**      | Float    | Сумма<br>`+Обязательное при ответе`      |

**Параметры**

| Параметр                       | Описание                                                                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **momentFrom**                 | `date` (required) *Example: 2018-09-01 00:00:00* Начало периода отчета                                                                                                                 |
| **momentTo**                   | `date` (required) *Example: 2018-10-01 00:00:00* Конец периода отчета                                                                                                                  |
| **interval**                   | `string` (required) Интервал, с которым будет построен отчет. Может принимать значения *hour*, *day*, *month* для разбиения указанного периода по часам, дням и месяцам соответственно |
 
**Заголовки**

| Заголовок                      | Описание                                                                                                                                                                                                                                                                                    |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **X-Lognex-Accept-Timezone**   | Опциональный заголовок, в котором указана текущая дата на клиенте в RFC 3522. Таймзону обязательно указывать в формате знак и 4 символа (не в Obsolete Date and Time). Пример даты: `Wed, 16 Aug 2017 23:07:01 +0700`. При подсчете показателей даты операций смещаются в таймзону клиента. |
| **X-Lognex-Content-Timezone**  | Заголовок ответа. В нем указывается (как думает сервер) текущая дата на клиенте в RFC 3522.                                                                                                                                                                                                 |

 
### Показатели заказов

В показателях заказов учитываются только заказы покупателей.

#### Параметры доступные для фильтрации

Документы, попадающие в отчет, можно отфильтровать, используя параметр **filter**. Для каждого параметра можно указать несколько значений. Нельзя указывать пустые значения.

| Название                       | Тип    | Фильтрация | Описание                     |
| ------------------------------ | :----- | :--------- | :--------------------------- |
| **organization**               | Object | `=`        | ссылка на юр. лицо           |
| **store**                      | Object | `=`        | ссылка на склад              |
| **project**                    | Object | `=`        | ссылка на проект             |

> Запрос на получение показателей заказов

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/orders/plotseries?momentFrom=2018-09-06 00:00:00&momentTo=2018-09-06 01:00:01&interval=hour"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/context/employee",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/report/orders/plotseries?momentFrom=2018-09-06 00:00:00&momentTo=2016-09-06 01:00:01&interval=hour",
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

> Запрос на получение показателей заказов с фильтрацией

```shell
curl -X GET
  "https://online.moysklad.ru/report/orders/plotseries?momentFrom=2018-09-06 00:00:00&momentTo=2018-09-06 01:00:01&interval=hour&filter=organization=https://online.moysklad.ru/api/remap/1.2/entity/organization/00cd5a99-6897-11e7-7a6c-d2a9000c4fc0;project=https://online.moysklad.ru/api/remap/1.2/entity/project/02e64f51-6897-11e7-7a34-5acf000c8448;store=https://online.moysklad.ru/api/remap/1.2/entity/store/32213d37-8101-11e8-9107-50480004c6c1"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.

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
    "href": "https://online.moysklad.ru/report/orders/plotseries?momentFrom=2018-09-06 00:00:00&momentTo=2016-09-06 01:00:01&interval=hour&filter=organization=https://online.moysklad.ru/api/remap/1.2/entity/organization/00cd5a99-6897-11e7-7a6c-d2a9000c4fc0;project=https://online.moysklad.ru/api/remap/1.2/entity/project/02e64f51-6897-11e7-7a34-5acf000c8448;store=https://online.moysklad.ru/api/remap/1.2/entity/store/32213d37-8101-11e8-9107-50480004c6c1",
    "type": "ordersplotseries",
    "mediaType": "application/json"
  },
  "series": [
    {
      "date": "2018-09-06 00:00:00",
      "quantity": 1,
      "sum": 100
    },
    {
      "date": "2018-09-06 01:00:00",
      "quantity": 1,
      "sum": 100
    }
  ]
}
```

### Показатели продаж

В показателях продаж учитываются отгрузки, розничные продажи, полученные отчеты комиссионера.

#### Параметры доступные для фильтрации

Документы, попадающие в отчет, можно отфильтровать, используя параметр **filter**. Для каждого параметра можно указать несколько значений. Нельзя указывать пустые значения.

| Название                       | Тип    | Фильтрация | Описание                                                                                        |
| ------------------------------ | :----- | :--------- | :---------------------------------------------------------------------------------------------- |
| **organization**               | Object | `=`        | ссылка на юр. лицо                                                                              |
| **store**                      | Object | `=`        | ссылка на склад                                                                                 |
| **project**                    | Object | `=`        | ссылка на проект                                                                                |
| **retailStore**                | Object | `=`        | ссылка на Точку продаж. При использовании этого параметра учитываются только розничные продажи. |

> Запрос на получение показателей продаж c фильтрацией

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/sales/plotseries?momentFrom=2018-09-06 00:00:00&momentTo=2018-09-10 01:00:01&interval=hour&filter=retailStore=https://online.moysklad.ru/api/remap/1.2/entity/retailstore/d9a8a213-6703-11e7-9464-e4de00000060&amp;project=https://online.moysklad.ru/api/remap/1.2/entity/project/d9a8a213-6703-11e7-9464-e4de00000060&amp;store=https://online.moysklad.ru/api/remap/1.2/entity/store/d9a8a213-6703-11e7-9464-e4de00000060&amp;organization=https://online.moysklad.ru/api/remap/1.2/entity/organization/d9a8a213-6703-11e7-9464-e4de00000060"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/context/employee",
        "metaseriesHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metaseries",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/report/sales/plotseries?momentFrom=2018-09-06 00:00:00&momentTo=2018-09-10 01:00:01&interval=hour&filter=retailStore=https://online.moysklad.ru/api/remap/1.2/entity/retailstore/d9a8a213-6703-11e7-9464-e4de00000060&amp;project=https://online.moysklad.ru/api/remap/1.2/entity/project/d9a8a213-6703-11e7-9464-e4de00000060&amp;store=https://online.moysklad.ru/api/remap/1.2/entity/store/d9a8a213-6703-11e7-9464-e4de00000060&amp;organization=https://online.moysklad.ru/api/remap/1.2/entity/organization/d9a8a213-6703-11e7-9464-e4de00000060",
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
