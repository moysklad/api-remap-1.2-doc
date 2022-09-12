## Отчет Показатели контрагентов
Средствами JSON API можно запросить отчет "Показатели контрагентов" по всем или по отдельному контрагенту. Для доступа к отчету через API требуется право на просмотр показателей CRM для контрагентов `viewCompanyCRM`. Для получения значения в поле Прибыль `profit` дополнительно требуется право видеть себестоимость, цену закупки и прибыль товаров `viewProductCostAndProfit`.
О том, что представляет собой отчет "Показатели контрагентов" вы можете прочитать по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/206657807-%D0%9E%D1%82%D1%87%D0%B5%D1%82-%D0%BF%D0%BE-%D0%BF%D0%BE%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8F%D0%BC-%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%B0%D0%B3%D0%B5%D0%BD%D1%82%D0%BE%D0%B2).

### Показатели контрагентов 
#### Атрибуты показателей

| Название            | Тип                                                       | Фильтрация                 | Описание                                                                                                                                             |
| ------------------- | :-------------------------------------------------------- | :------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| **averageReceipt**  | Float                                                     | `=` `!=` `<` `>` `<=` `>=` | Средний чек<br>`+Обязательное при ответе`                                                                                                            |
| **balance**         | Float                                                     | `=` `!=` `<` `>` `<=` `>=` | Баланс<br>`+Обязательное при ответе`                                                                                                                 |
| **bonusBalance**    | Float                                                     |                            | Баллы<br>`+Обязательное при ответе`                                                                                                                  |
| **counterparty**    | Object                                                    |                            | Контрагент. [Подробнее тут](../dictionaries/#suschnosti-towar-towary-atributy-suschnosti-kod-sistemy-nalogooblozheniq)<br>`+Обязательное при ответе` |
| **demandsCount**    | Int                                                       | `=` `!=` `<` `>` `<=` `>=` | Количество продаж<br>`+Обязательное при ответе`                                                                                                      |
| **demandsSum**      | Float                                                     | `=` `!=` `<` `>` `<=` `>=` | Сумма продаж<br>`+Обязательное при ответе`                                                                                                           |
| **discountsSum**    | Float                                                     | `=` `!=` `<` `>` `<=` `>=` | Сумма скидок<br>`+Обязательное при ответе`                                                                                                           |
| **firstDemandDate** | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=` | Дата первой продажи<br>`+Обязательное при ответе`                                                                                                    |
| **lastDemandDate**  | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=` | Дата последней продажи<br>`+Обязательное при ответе`                                                                                                 |
| **lastEventDate**   | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=` | Дата последнего события<br>`+Обязательное при ответе`                                                                                                |
| **lastEventText**   | String(255)                                               | `=` `!=` `~` `~=` `=~`     | Текст последнего события<br>`+Обязательное при ответе`                                                                                               |
| **meta**            | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                            | Метаданные Отчета по данному контрагенту<br>`+Обязательное при ответе`                                                                               |
| **profit**          | Float                                                     | `=` `!=` `<` `>` `<=` `>=` | Прибыль<br>`+Обязательное при ответе`                                                                                                                |
| **returnsCount**    | Int                                                       | `=` `!=` `<` `>` `<=` `>=` | Количество возвратов<br>`+Обязательное при ответе`                                                                                                   |
| **returnsSum**      | Float                                                     | `=` `!=` `<` `>` `<=` `>=` | Сумма возвратов<br>`+Обязательное при ответе`                                                                                                        |
| **updated**         | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=` | Момент последнего изменения контрагента<br>`+Обязательное при ответе`                                                                                |

### Дополнительные атрибуты доступные для фильтрации

| Название                     | Тип          | Фильтрация             | Описание                  |
| ---------------------------- | :----------- | :--------------------- | :------------------------ |
| **counterparty.name**        | String(255)  | `=` `!=` `~` `~=` `=~` | Имя контрагента           |
| **counterparty.companyType** | Enum         | `=` `!=`               | Тип контрагента           |
| **counterparty.description** | String(4096) | `=` `!=` `~` `~=` `=~` | Комментарий к Контрагенту |
| **counterparty.email**       | String(255)  | `=` `!=` `~` `~=` `=~` | Адрес электронной почты   |
| **counterparty.inn**         | String(255)  | `=` `!=` `~` `~=` `=~` | Тип контрагента           |
| **counterparty.phone**       | String(255)  | `=` `!=` `~` `~=` `=~` | Номер телефона            |
| **id**                       | UUID         | `=` `!=`               | id контрагента            |

#### Контрагент

| Название         | Тип                                                       | Описание                                               |
| ---------------- | :-------------------------------------------------------- | :----------------------------------------------------- |
| **companyType**  | Enum                                                      | Тип контрагента<br>`+Обязательное при ответе`          |
| **externalCode** | String(255)                                               | Внешний код контрагента<br>`+Обязательное при ответе`  |
| **id**           | UUID                                                      | ID Контрагента<br>`+Обязательное при ответе`           |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Контрагента<br>`+Обязательное при ответе`   |
| **name**         | String(255)                                               | Наименование Контрагента<br>`+Обязательное при ответе` |

#### Тарифные ограничения
Если в вашем тарифе не предусмотрена опция CRM, вы не сможете получить этот запрос через API.


### Получить показатели контрагентов 
Запрос на получение отчета по контрагентам.
Результат успешного запроса - JSON представление списка отчетов по отдельным котрагентам:


| Название    | Тип                                                       | Описание                                                               |
| ----------- | :-------------------------------------------------------- | :--------------------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                                   |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                           |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих отчеты по отдельным контрагентам. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Запрос на получение отчета по контрагентам.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/counterparty"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета по контрагентам.

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
      "bonusBalance": 120,
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
      "bonusBalance": 298,
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
Запрос на получение отчета по указанным контрагентам. Необходимо передать массив `counterparties`,
содержащий метаданные контрагентов, по которым требуются отчеты.
Результат успешного запроса - JSON представление списка отчетов по указанным котрагентам:


| Название    | Тип                                                       | Описание                                                               |
| ----------- | :-------------------------------------------------------- | :--------------------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                                   |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                           |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих отчеты по отдельным контрагентам. |

> Пример запроса отчетов для нескольких контрагентов.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/report/counterparty"
    -H "Authorization: Basic <Credentials>"
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
Успешный запрос. Результат - JSON представление отчета по контрагентам.

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

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
 
> Запрос на получение отчета по контрагенту с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/counterparty/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета по контрагенту.

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
  "bonusBalance": 200,
  "profit": 50000,
  "lastEventDate": "2016-09-08 13:07:30",
  "lastEventText": "продажа",
  "updated": "2016-08-23 16:24:08"
}
```
