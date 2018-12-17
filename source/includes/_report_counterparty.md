## Отчёт Показатели контрагентов
Средствами JSON API можно запросить отчёт "Показатели контрагентов" по всем или по отдельному контрагенту.
О том, что представляет собой отчёт "Показатели контрагентов" вы можете прочитать по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/206657807-%D0%9E%D1%82%D1%87%D0%B5%D1%82-%D0%BF%D0%BE-%D0%BF%D0%BE%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8F%D0%BC-%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%B0%D0%B3%D0%B5%D0%BD%D1%82%D0%BE%D0%B2).

### Показатели контрагентов 
#### Атрибуты показателей
+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) отчёта по данному контрагенту
+ **counterparty** - Контрагент
  - **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) контрагента
  - **id** - id контрагента
  - **name** - Имя контрагента
  - **externalCode** - Внешний код контрагента
  - **companyType** - Тип контрагента
+ **firstDemandDate** - Дата первой продажи
+ **lastDemandDate** - Дата последней продажи
+ **demandsCount** - Количество продаж
+ **demandsSum** - Сумма продаж
+ **averageReceipt** - Средний чек
+ **returnsCount** - Количество возвратов
+ **returnsSum** - Сумма возвратов
+ **discountsSum** - Сумма скидок
+ **balance** - Баланс
+ **profit** - Прибыль
+ **lastEventDate** - Дата последнего события
+ **lastEventText** - Текст последнего события
+ **updated** - Момент последнего изменения контрагента

#### Атрибуты доступные для фильтрации
+ **id** - id контрагента
+ **counterparty****.name** - Имя контрагента
+ **counterparty.phone** - Номер телефона
+ **counterparty.email** - Адрес электронной почты
+ **counterparty.inn** - Тип контрагента
+ **counterparty.companyType** - Тип контрагента
+ **counterparty.description** - Комментарий к Контрагенту
+ **firstDemandDate** - Дата первой продажи
+ **lastDemandDate** - Дата последней продажи
+ **demandsCount** - Количество продаж
+ **demandsSum** - Сумма продаж
+ **averageReceipt** - Средний чек
+ **returnsCount** - Количество возвратов
+ **returnsSum** - Сумма возвратов
+ **discountsSum** - Сумма скидок
+ **balance** - Баланс
+ **profit** - Прибыль
+ **lastEventDate** - Дата последнего события
+ **lastEventText** - Текст последнего события
+ **updated** - Момент последнего изменения контрагента

#### Тарифные ограничения
Если в вашем тарифе не предусмотрена опция CRM вы не сможете получить этот запрос через API.


### Показатели контрагентов 
Запрос на получение отчёта по контрагентам.
Результат успешного запроса - JSON представление списка отчётов по отдельным котрагентам:
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) отчёта,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой отчёты по отдельным контрагентам.

> Запрос на получение отчёта по контрагентам.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/counterparty"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчёта по контрагентам.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/context/employee",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/report/counterparty",
    "type": "counterparty",
    "mediaType": "application/json",
    "size": 5,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/report/counterparty/b80ea81b-7058-11e6-8a84-bae500000000",
        "type": "counterparty",
        "mediaType": "application/json"
      },
      "counterparty": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b80ea81b-7058-11e6-8a84-bae500000000",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        },
        "id": "b80ea81b-7058-11e6-8a84-bae500000000",
        "name": "ООО Радуга",
        "externalCode": "o7732zkki541HDkZZD1Yt3",
        "companyType": "legal"
      },
      "firstDemandDate": null,
      "lastDemandDate": null,
      "demandsCount": 0,
      "demandsSum": 0,
      "averageReceipt": 0,
      "returnsCount": 0,
      "returnsSum": 0,
      "discountsSum": 0,
      "balance": 0,
      "profit": 0,
      "lastEventDate": null,
      "lastEventText": null,
      "updated": "2016-09-01 18:32:17"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/report/counterparty/df2fdd2d-6934-11e6-8a84-bae500000049",
        "type": "counterparty",
        "mediaType": "application/json"
      },
      "counterparty": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/df2fdd2d-6934-11e6-8a84-bae500000049",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        },
        "id": "df2fdd2d-6934-11e6-8a84-bae500000049",
        "name": "rtr",
        "externalCode": "rRlzrdZmjql9r9dveXPE43",
        "companyType": "legal"
      },
      "firstDemandDate": null,
      "lastDemandDate": null,
      "demandsCount": 0,
      "demandsSum": 0,
      "averageReceipt": 0,
      "returnsCount": 0,
      "returnsSum": 0,
      "discountsSum": 0,
      "balance": 0,
      "profit": 0,
      "lastEventDate": "2016-09-08 13:07:30",
      "lastEventText": "продажа",
      "updated": "2016-08-23 16:24:08"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/report/counterparty/12c9ebcf-692c-11e6-8a84-bae50000005d",
        "type": "counterparty",
        "mediaType": "application/json"
      },
      "counterparty": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12c9ebcf-692c-11e6-8a84-bae50000005d",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        },
        "id": "12c9ebcf-692c-11e6-8a84-bae50000005d",
        "name": "Розничный покупатель",
        "externalCode": "lBvYwLWMiBsct7sVRrFnJ2",
        "companyType": "legal"
      },
      "firstDemandDate": "2016-08-26 15:49:00",
      "lastDemandDate": "2016-08-26 15:49:00",
      "demandsCount": 1,
      "demandsSum": 80000,
      "averageReceipt": 80000,
      "returnsCount": 0,
      "returnsSum": 0,
      "discountsSum": 0,
      "balance": 0,
      "profit": -103040600,
      "lastEventDate": null,
      "lastEventText": null,
      "updated": "2016-08-23 15:21:09"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/report/counterparty/12a8e347-692c-11e6-8a84-bae500000055",
        "type": "counterparty",
        "mediaType": "application/json"
      },
      "counterparty": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12a8e347-692c-11e6-8a84-bae500000055",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        },
        "id": "12a8e347-692c-11e6-8a84-bae500000055",
        "name": "ООО \"Покупатель\"",
        "externalCode": "DTItQRbDhyl472ZqC5OWw2",
        "inn": "7736570902",
        "companyType": "legal"
      },
      "firstDemandDate": "2016-09-01 17:54:00",
      "lastDemandDate": "2016-09-01 17:54:00",
      "demandsCount": 1,
      "demandsSum": 60000,
      "averageReceipt": 60000,
      "returnsCount": 0,
      "returnsSum": 0,
      "discountsSum": 0,
      "balance": 1241255000,
      "profit": 50000,
      "lastEventDate": null,
      "lastEventText": null,
      "updated": "2016-08-23 15:21:09"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/report/counterparty/12a8b923-692c-11e6-8a84-bae500000053",
        "type": "counterparty",
        "mediaType": "application/json"
      },
      "counterparty": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12a8b923-692c-11e6-8a84-bae500000053",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        },
        "id": "12a8b923-692c-11e6-8a84-bae500000053",
        "name": "ООО \"Поставщик\"",
        "externalCode": "aZBfWOKzj-lcq7c7IWZON3",
        "inn": "7736570901",
        "companyType": "legal"
      },
      "firstDemandDate": null,
      "lastDemandDate": null,
      "demandsCount": 0,
      "demandsSum": 0,
      "averageReceipt": 0,
      "returnsCount": 0,
      "returnsSum": 0,
      "discountsSum": 0,
      "balance": 0,
      "profit": 0,
      "lastEventDate": null,
      "lastEventText": null,
      "updated": "2016-08-23 15:21:09"
    }
  ]
}
```

### Выборочные показатели контрагентов 
Запрос на получение отчёта по указанным контрагентам. Необходимо передать массив `counterparties`,
содержащий метаданные контрагентов, по которым требуются отчёты.
Результат успешного запроса - JSON представление списка отчётов по указанным котрагентам:
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) отчёта,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой отчёты по отдельным контрагентам.

> Пример запроса отчётов для нескольких контрагентов.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/report/counterparty"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "counterparties": [
              {
                "counterparty": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/49b40d55-66cc-11e7-6adb-ede500000054",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                    "type": "counterparty",
                    "mediaType": "application/json"
                  }
                }
              },
              {
                "counterparty": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/37e4efe0-6ade-11e7-6adb-ede50000001a",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                    "type": "counterparty",
                    "mediaType": "application/json"
                  }
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчёта по контрагентам.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/context/employee",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/report/counterparty",
    "type": "counterparty",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/report/counterparty/49b40d55-66cc-11e7-6adb-ede500000054",
        "type": "counterparty",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=49b40d55-66cc-11e7-6adb-ede500000054"
      },
      "counterparty": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/49b40d55-66cc-11e7-6adb-ede500000054",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=49b40d55-66cc-11e7-6adb-ede500000054"
        },
        "id": "49b40d55-66cc-11e7-6adb-ede500000054",
        "name": "ООО \"Поставщик\"",
        "externalCode": "btkD664AiiIaIYMdI50OW3",
        "inn": "7736570901",
        "companyType": "legal"
      },
      "firstDemandDate": null,
      "lastDemandDate": null,
      "demandsCount": 0,
      "demandsSum": 0,
      "averageReceipt": 0,
      "returnsCount": 0,
      "returnsSum": 0,
      "discountsSum": 0,
      "balance": 0,
      "profit": 0,
      "lastEventDate": null,
      "lastEventText": null,
      "updated": "2017-07-12 09:35:26"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/report/counterparty/37e4efe0-6ade-11e7-6adb-ede50000001a",
        "type": "counterparty",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=37e4efe0-6ade-11e7-6adb-ede50000001a"
      },
      "counterparty": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/37e4efe0-6ade-11e7-6adb-ede50000001a",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=37e4efe0-6ade-11e7-6adb-ede50000001a"
        },
        "id": "37e4efe0-6ade-11e7-6adb-ede50000001a",
        "name": "ООО \"Поставщик 2\"",
        "externalCode": "WG4JRabzgb6aW9asZ20yy3",
        "inn": "7736570901",
        "companyType": "legal"
      },
      "firstDemandDate": null,
      "lastDemandDate": null,
      "demandsCount": 0,
      "demandsSum": 0,
      "averageReceipt": 0,
      "returnsCount": 0,
      "returnsSum": 0,
      "discountsSum": 0,
      "balance": 0,
      "profit": 0,
      "lastEventDate": null,
      "lastEventText": null,
      "updated": "2017-07-17 13:54:30"
    }
  ]
}
```

### Показатели контрагента 
#### Показатели контрагента

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|
 
> Запрос на получение отчёта по контрагенту с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/counterparty/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчёта по контрагенту.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/report/counterparty/df2fdd2d-6934-11e6-8a84-bae500000049",
    "type": "counterparty",
    "mediaType": "application/json"
  },
  "counterparty": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/df2fdd2d-6934-11e6-8a84-bae500000049",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    },
    "id": "df2fdd2d-6934-11e6-8a84-bae500000049",
    "name": "rtr",
    "externalCode": "rRlzrdZmjql9r9dveXPE43",
    "companyType": "legal"
  },
  "firstDemandDate": "2016-09-01 17:54:00",
  "lastDemandDate": "2016-09-01 17:54:00",
  "demandsCount": 1,
  "demandsSum": 60000,
  "averageReceipt": 60000,
  "returnsCount": 0,
  "returnsSum": 0,
  "discountsSum": 0,
  "balance": -60000,
  "profit": 50000,
  "lastEventDate": "2016-09-08 13:07:30",
  "lastEventText": "продажа",
  "updated": "2016-08-23 16:24:08"
}
```
