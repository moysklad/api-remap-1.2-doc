## Отчёт Деньги
Средствами JSON API можно запросить отчёты, отражающие движение денежных средств за заданный период и текущие остатки средств по кассам и счетам.

### Движение денежных средств
#### Атрибуты отчёта:
+ **credit** - доход
+ **debit** - расход
+ **series** - Массив данных показателей
  + **date** - дата
  + **credit** - доход за период
  + **debit** - расход за период
  + **balance** - баланс (доход-расход)

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|momentFrom |  `date` (required) *Example: 2018-09-01 00:00:00* Начало периода отчета|
|momentTo |  `date` (required) *Example: 2018-10-01 00:00:00* Конец периода отчета|
|interval |  `string` (required) Интервал, с которым будет построен отчет. Может принимать значения *hour*, *day*, *month* для разбиения указанного периода по часам, дням и месяцам соответственно|

**Заголовки**

| Заговок                | Описание  |
| ------------------------------ |:---------------------------|
|X-Lognex-Accept-Timezone | Опциональный заголовок, в котором указана текущая дата на клиенте в RFC 3522. Таймзону обязательно указывать в формате знак и 4 символа (не в Obsolete Date and Time). Пример даты: `Wed, 16 Aug 2017 23:07:01 +0700`. При подсчёте показателей даты операций смещаются в таймзону клиента.|
|X-Lognex-Content-Timezone | Заголовок ответа. В нем указывается (как думает сервер) текущая дата на клиенте в RFC 3522.|

> Запрос на получение графика движения денежных средств

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/money/plotseries?momentFrom=2018-09-01&momentTo=2018-09-04&interval=day"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчёта.

```json
{  
  "context":{  
    "employee":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/context/employee",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type":"employee",
        "mediaType":"application/json"
      }
    }
  },
  "meta":{  
    "href":"https://online.moysklad.ru/api/remap/1.2/report/money/plotseries?momentFrom=2018-09-01&momentTo=2018-09-04&interval=day",
    "type":"moneyplotseries",
    "mediaType":"application/json"
  },
  "credit":400,
  "debit":200,
  "series":[  
    {  
      "date":"2018-09-01 00:00:00",
      "credit":100,
      "debit":50,
      "balance":50
    },
    {  
      "date":"2018-09-02 00:00:00",
      "credit":100,
      "debit":50,
      "balance":50
    },
    {  
      "date":"2018-09-03 00:00:00",
      "credit":100,
      "debit":50,
      "balance":50
    },
    {  
      "date":"2018-09-04 00:00:00",
      "credit":100,
      "debit":50,
      "balance":50
    }
  ]
}
```

### Остатки денежных средств
#### Атрибуты объекта отчёта:
+ **account** - счет организации (не выводится для остатка кассы, так как касса одна на организацию)
  + **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) счета организации
  + **name** - Номер счета
+ **organization** - организация
  + **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) организации
  + **name** - Наименование организации
+ **balance** - текущий остаток денежных средств

> Запрос на получение остатков денежных средств по кассам и счетам

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/money/byaccount"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчёта.

```json
{  
  "context":{  
    "employee":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/context/employee",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type":"employee",
        "mediaType":"application/json"
      }
    }
  },
  "meta":{  
    "href":"https://online.moysklad.ru/api/remap/1.2/report/money/byaccount",
    "type":"moneyreport",
    "mediaType":"application/json"
  },
  "rows":[  
    {  
      "organization":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
          "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type":"organization",
          "mediaType":"application/json"
        },
        "name":"OOO Ромашка"
      },
      "balance":100
    },
    {  
      "organization":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
          "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type":"organization",
          "mediaType":"application/json"
        },
        "name":"OOO Серьезное Юридическое Лицо"
      },
      "balance":100
    },
    {  
      "account":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/entity/organization/4b9d5bec-0575-11e6-9464-e4de00000008/accounts/4b9d69b7-0575-11e6-9464-e4de00000009",
          "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type":"account",
          "mediaType":"application/json"
        },
        "name":"00000"
      },
      "organization":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
          "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type":"organization",
          "mediaType":"application/json"
        },
        "name":"OOO Серьезное Юридическое Лицо"
      },
      "balance":200
    }
  ]
}
```
