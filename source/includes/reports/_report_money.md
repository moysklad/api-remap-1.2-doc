## Отчет Деньги
Средствами JSON API можно запросить отчеты, отражающие движение денежных средств за заданный период и текущие остатки средств по кассам и счетам.
Для доступа к отчету через API требуется право на просмотр показателей `viewDashboard` и право "Видеть остатки денег" `viewMoneyDashboard`.

### Движение денежных средств
#### Атрибуты отчета:

| Название   | Тип           | Описание                                                                   |
| ---------- | :------------ | :------------------------------------------------------------------------- |
| **credit** | Float         | Доход<br>`+Обязательное при ответе`                                        |
| **debit**  | Float         | Расход<br>`+Обязательное при ответе`                                       |
| **series** | Array(Object) | Массив показателей. Подробнее в таблице ниже<br>`+Обязательное при ответе` |

#### Показатели (series)

| Название    | Тип      | Описание                                            |
| ----------- | :------- | :-------------------------------------------------- |
| **date**    | DateTime | Дата<br>`+Обязательное при ответе`                  |
| **credit**  | Float    | Доход за период<br>`+Обязательное при ответе`       |
| **debit**   | Float    | Расход за период<br>`+Обязательное при ответе`      |
| **balance** | Float    | Баланс (доход-расход)<br>`+Обязательное при ответе` |

#### Параметры доступные для фильтрации

Документы, попадающие в отчет, можно отфильтровать, используя параметр **filter**. Для каждого параметра можно указать несколько значений. Нельзя указывать пустые значения.

| Название                       | Тип    | Фильтрация | Описание                     |
| ------------------------------ | :----- | :--------- | :--------------------------- |
| **organization**               | Object | `=`        | ссылка на юр. лицо           |
| **project**                    | Object | `=`        | ссылка на проект             |


**Параметры**

| Параметр                       | Описание                                                                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **momentFrom**                 | `date` (required) *Example: 2018-09-01 00:00:00* Начало периода отчета                                                                                                                 |
| **momentTo**                   | `date` (required) *Example: 2018-10-01 00:00:00* Конец периода отчета                                                                                                                  |
| **interval**                   | `string` (required) Интервал, с которым будет построен отчет. Может принимать значения *hour*, *day*, *month* для разбиения указанного периода по часам, дням и месяцам соответственно |

**Заголовки**

| Заговок                        | Описание                                                                                                                                                                                                                                                                                    |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **X-Lognex-Accept-Timezone**   | Опциональный заголовок, в котором указана текущая дата на клиенте в RFC 3522. Таймзону обязательно указывать в формате знак и 4 символа (не в Obsolete Date and Time). Пример даты: `Wed, 16 Aug 2017 23:07:01 +0700`. При подсчете показателей даты операций смещаются в таймзону клиента. |
| **X-Lognex-Content-Timezone**  | Заголовок ответа. В нем указывается (как думает сервер) текущая дата на клиенте в RFC 3522.                                                                                                                                                                                                 |

> Запрос на получение графика движения денежных средств

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/money/plotseries?momentFrom=2018-09-01&momentTo=2018-09-04&interval=day"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.

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

> Запрос графика с фильтрацией

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/money/plotseries?momentFrom=2018-09-01&momentTo=2018-09-04&interval=day&filter=organization=https://online.moysklad.ru/api/remap/1.2/entity/organization/00cd5a99-6897-11e7-7a6c-d2a9000c4fc0;project=https://online.moysklad.ru/api/remap/1.2/entity/project/02e64f51-6897-11e7-7a34-5acf000c8448"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.

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
    "href":"https://online.moysklad.ru/api/remap/1.2/report/money/plotseries?momentFrom=2018-09-01&momentTo=2018-09-04&interval=day&filter=organization=https://online.moysklad.ru/api/remap/1.2/entity/organization/00cd5a99-6897-11e7-7a6c-d2a9000c4fc0;project=https://online.moysklad.ru/api/remap/1.2/entity/project/02e64f51-6897-11e7-7a34-5acf000c8448",
    "type":"moneyplotseries",
    "mediaType":"application/json"
  },
  "credit":60,
  "debit":20,
  "series":[  
    {  
      "date":"2018-09-01 00:00:00",
      "credit":50,
      "debit":0,
      "balance":50
    },
    {  
      "date":"2018-09-02 00:00:00",
      "credit":10,
      "debit":20,
      "balance":-10
    },
    {  
      "date":"2018-09-03 00:00:00",
      "credit":0,
      "debit":0,
      "balance":0
    },
    {  
      "date":"2018-09-04 00:00:00",
      "credit":0,
      "debit":0,
      "balance":0
    }
  ]
}
```

### Остатки денежных средств
#### Атрибуты объекта отчета:

#### Единица измерения
| Название         | Тип    | Описание                                                                                                                                                                                                                       |
| ---------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **account**      | Object | Счет организации (не выводится для остатка кассы, так как касса одна на организацию). [Подробнее тут](../dictionaries/#suschnosti-towar-towary-atributy-suschnosti-kod-sistemy-nalogooblozheniq)<br>`+Обязательное при ответе` |
| **organization** | Object | Организация. [Подробнее тут](../dictionaries/#suschnosti-towar-towary-atributy-suschnosti-kod-sistemy-nalogooblozheniq)<br>`+Обязательное при ответе`                                                                          |
| **balance**      | Float  | Текущий остаток денежных средств<br>`+Обязательное при ответе`                                                                                                                                                                 |

#### Счет организации

| Название | Тип                                                       | Описание                                             |
| -------- | :-------------------------------------------------------- | :--------------------------------------------------- |
| **meta** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные организации<br>`+Обязательное при ответе` |
| **name** | String(255)                                               | Номер счета<br>`+Обязательное при ответе`            |

#### Организация

| Название | Тип                                                       | Описание                                               |
| -------- | :-------------------------------------------------------- | :----------------------------------------------------- |
| **meta** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные организации<br>`+Обязательное при ответе`   |
| **name** | String(255)                                               | Наименование организации<br>`+Обязательное при ответе` |

> Запрос на получение остатков денежных средств по кассам и счетам

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/money/byaccount"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.

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
