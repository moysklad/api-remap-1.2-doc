## Полученный отчёт комиссионера
Средствами JSON API можно создавать и обновлять сведения о полученных отчётах комиссионера, запрашивать списки полученных отчётов комиссионера и сведения по отдельным полученным отчётам комиссионера. Позициями отчётов комиссионера можно управлять как в составе отдельного отчёта, так и с помощью специальных ресурсов для управления позициями. Кодом сущности для полученного отчёта комиссионера в составе JSON API является ключевое слово **commissionreportin**. Больше об отчётах комиссионера и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по  [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203082686-%D0%9A%D0%BE%D0%BC%D0%B8%D1%81%D1%81%D0%B8%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F-%D1%82%D0%BE%D1%80%D0%B3%D0%BE%D0%B2%D0%BB%D1%8F-%D0%9A%D0%BE%D0%BC%D0%B8%D1%82%D0%B5%D0%BD%D1%82%D1%83).

### Полученные отчёты комиссионера
#### Атрибуты сущности
+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о полученном отчёте комиссионера
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **syncId** - ID синхронизации. После заполнения недоступен для изменения.
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **deleted** - Момент последнего удаления сущности `Только для чтения`
+ **name** - номер полученного отчёта комиссионера `Необходимое`
+ **description** - Комментарий полученного отчёта комиссионера
+ **externalCode** - Внешний код полученного отчёта комиссионера
+ **moment** - Дата полученного отчёта комиссионера
+ **applicable** - Отметка о проведении
+ **sum** - Сумма полученного отчёта комиссионера в копейках `Только для чтения`
+ **rate** - Валюта
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Необходимое`
+ **agent** - Ссылка на контрагента в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Необходимое`
+ **contract** - Ссылка на договор в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Необходимое`
+ **project** - Ссылка на проект в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **state** - Статус полученного отчёта комиссионера в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **organizationAccount** - Ссылка на счёт вашего юрлица в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **agentAccount** - Ссылка на счёт контрагента в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **attributes** - Коллекция доп. полей в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
<br>Поля при expand'е:</br>
  - **name** - номер документа
  - **moment** - дата печати
  - **href** - ссылка на файл печатной формы
  - **fileName** - название файла печатной формы
  - **updated** - дата последнего изменения
+ **created** - Дата создания `Только для чтения`
+ **vatSum** - Сумма НДС `Только для чтения`
+ **payedSum** - Оплаченная сумма `Только для чтения`
+ **vatEnabled** - Учитывается ли НДС
+ **vatIncluded** - Включен ли НДС в цену
+ **positions** - Ссылка на позиции полученного отчёта комиссионера в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **commissionPeriodStart** - Начало периода `Необходимое`
+ **commissionPeriodEnd** - Конец периода `Необходимое`
+ **rewardType** - Тип вознаграждения
+ **rewardPercent** - Процент вознаграждения (всегда 0 если вознаграждение не рассчитывается)
+ **commitentSum** - Сумма коммитента в установленной валюте `Только для чтения`
#### Связи с другими документами
+ **payments** - Массив ссылок на связанные платежи в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)


#### Позиции полученного отчёта комиссионера
Позиции полученного отчёта комиссионера - это список товаров/услуг/модификаций/серий.
Объект позиции полученного отчёта комиссионера содержит следующие поля:
+ **id** - ID товара в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **quantity** - Количество товаров/услуг данного вида в позиции. Если позиция - товар, у которого включен учёт по серийным номерам, то значение в этом поле всегда будет равно количеству серийных номеров для данной позиции в документе.
+ **price** - Цена товара/услуги в копейках
+ **vat** - НДС, которым облагается текущая позиция
+ **assortment** - Ссылка на товар/услугу/серию/модификацию, которую представляет собой позиция, в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **pack** - Упаковка товара
+ **reward** - Вознаграждение

С позициями можно работать с помощью [специальных ресурсов для управления позициями полученного отчёта комиссионера](#полученный-отчёт-комиссионера-позиции-отчёта-комиссионера),
а также в составе отдельного полученного отчёта комиссионера. При работе в составе отдельного полученного отчёта комиссионера,
вы можете отправлять запросы на создание полученного отчёта комиссионера с включенным в тело запроса
массивом позиций полученного отчёта комиссионера. Если количество позиций превышает максимально допустимое, то для
дальнейшего пополнения позиций нужно будет работать со специальным ресурсом "Позиции отчёта комиссионера".
Также, при работе в составе отдельного полученного отчёта комиссионера, можно отправлять запросы на обновление списка позиций
с включенным в тело запроса массивом позиций полученного отчёта комиссионера. При этом важно помнить, что коллекция позиций будет
восприниматься как "все позиции полученного отчёта комиссионера" и полностью заменит уже существующую коллекцию при обновлении объекта - лишние
позиции будут удалены, новые добавлены, существующие - изменены.

### Получить отчёты комиссионера
Запрос всех полученных отчётов комиссионера на учётной записи.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|
|search |  `string` (optional) *Example: 0001* URL Параметр для поиска по имени документа. Фильтр документов по указанной поисковой строке. Фильтрация происходит по полю name.|
|incomingDate |  `string` (optional) *Example: 2016-04-15 15:48:46* Параметр для фильтрации выборки по входящей дате. Подробнее про данный параметр можно посмотреть в разделе [Фильтрация выборки с помощью параметра filter](/api/remap/1.2/doc/index.html#header-фильтрация-выборки-с-помощью-параметра-filter). Формат строки : `ГГГГ-ММ-ДД ЧЧ:ММ:СС[.ммм]`, Часовой пояс: `MSK` (Московское время)|

> Получить отчёты комиссионера

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка полученных отчётов комиссионера.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata",
    "type": "commissionreportin",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/392fb7a9-ab02-11e6-8a84-bae500000073",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata",
        "type": "commissionreportin",
        "mediaType": "application/json"
      },
      "id": "392fb7a9-ab02-11e6-8a84-bae500000073",
      "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-15 10:11:35",
      "name": "00001",
      "externalCode": "DfZi0N0mggqmVRt2hVf8t2",
      "moment": "2016-11-15 10:04:00",
      "applicable": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "sum": 0,
      "contract": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/92df2d9c-ab02-11e6-8a84-bae500000084",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
          "type": "contract",
          "mediaType": "application/json"
        }
      },
      "project": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
          "mediaType": "application/json"
        }
      },
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b942c396-9128-11e6-8a84-bae500000056",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "organizationAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/392fb7a9-ab02-11e6-8a84-bae500000073/positions",
          "type": "commissionreportinposition",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "vatEnabled": true,
      "vatIncluded": true,
      "vatSum": 0,
      "commissionPeriodStart": "2016-11-09 10:07:00",
      "commissionPeriodEnd": "2016-11-09 10:07:00",
      "rewardType": "PercentOfSales",
      "rewardPercent": 0,
      "commitentSum": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/6348c14c-ab39-11e6-8a84-bae500000064",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata",
        "type": "commissionreportin",
        "mediaType": "application/json"
      },
      "id": "6348c14c-ab39-11e6-8a84-bae500000064",
      "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-17 17:10:23",
      "name": "00002",
      "externalCode": "ec21rBixjdrEm0CVkCiOJ0",
      "moment": "2016-11-15 14:19:00",
      "applicable": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "sum": 0,
      "contract": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/92df2d9c-ab02-11e6-8a84-bae500000084",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
          "type": "contract",
          "mediaType": "application/json"
        }
      },
      "project": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
          "mediaType": "application/json"
        }
      },
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b942c396-9128-11e6-8a84-bae500000056",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "organizationAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/6348c14c-ab39-11e6-8a84-bae500000064/positions",
          "type": "commissionreportinposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "vatEnabled": true,
      "vatIncluded": true,
      "vatSum": 0,
      "commissionPeriodStart": "2016-11-15 14:19:00",
      "commissionPeriodEnd": "2016-11-15 14:22:00",
      "rewardType": "None",
      "rewardPercent": 0,
      "commitentSum": 0,
      "payments": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/e39851ec-ab43-11e6-8a84-bae50000007a",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata",
            "type": "paymentin",
            "mediaType": "application/json"
          },
          "linkedSum": 0
        }
      ]
    }
  ]
}

```

### Создать полученный отчёт комиссионера
Запрос на создание нового полученного отчёта комиссионера.
Обязательные для создания поля:
+ **name** - номер
+ **agent** - контрагент
+ **contract** - договор
+ **organization** - юрлицо
+ **commissionPeriodStart** - начало периода
+ **commissionPeriodEnd** - конец периода
+ **organizationAccount** - счёт юрлица (если у юрлица несколько счетов)
+ **agentAccount** - счёт контрагента (если у контрагента несколько счетов)

При указании поля **contract** важно:
+ Чтобы договор был заключён с указанным в поле **agent** контрагентом
+ Договор имел тип "Договор комиссии"

> Пример создания нового полученного отчёта комиссионера.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "owner": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "type": "employee",
                "mediaType": "application/json"
              }
            },
            "shared": false,
            "group": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
                "type": "group",
                "mediaType": "application/json"
              }
            },
            "name": "3335551",
            "externalCode": "extCod1",
            "moment": "2016-12-16 11:22:33",
            "applicable": true,
            "sum": 0,
            "contract": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/92df2d9c-ab02-11e6-8a84-bae500000084",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
                "type": "contract",
                "mediaType": "application/json"
              }
            },
            "project": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
                "type": "project",
                "mediaType": "application/json"
              }
            },
            "agent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b942c396-9128-11e6-8a84-bae500000056",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "counterparty",
                "mediaType": "application/json"
              }
            },
            "organization": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "organizationAccount": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
                "type": "account",
                "mediaType": "application/json"
              }
            },
            "positions": [
              {
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/36eb1628-912b-11e6-8a84-bae500000124",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                    "type": "variant",
                    "mediaType": "application/json"
                  }
                },
                "quantity": 2,
                "price": 132.05,
                "vat": 10,
                "reward": 123
              },
              {
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                    "type": "variant",
                    "mediaType": "application/json"
                  }
                },
                "quantity": 15,
                "price": 99.99,
                "vat": 0,
                "reward": 100
              }
            ],
            "attributes": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a123-acda-11e6-8a84-bae50000006d",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "id": "4930a123-acda-11e6-8a84-bae50000006d",
                "value": "value"
              },
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a9c5-acda-11e6-8a84-bae50000006e",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "id": "4930a9c5-acda-11e6-8a84-bae50000006e",
                "value": "values"
              }
            ],
            "vatEnabled": true,
            "vatIncluded": true,
            "vatSum": 0,
            "commissionPeriodStart": "2016-11-01 10:07:00",
            "commissionPeriodEnd": "2016-11-29 10:07:00",
            "rewardType": "PercentOfSales",
            "rewardPercent": 15
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного полученного отчёта комиссионера.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/cc5beac8-acdb-11e6-8a84-bae500000000",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata",
    "type": "commissionreportin",
    "mediaType": "application/json"
  },
  "id": "cc5beac8-acdb-11e6-8a84-bae500000000",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-17 18:37:50",
  "name": "3335551",
  "externalCode": "extCod1",
  "moment": "2016-12-16 11:22:33",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 1764,
  "contract": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/92df2d9c-ab02-11e6-8a84-bae500000084",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
      "type": "contract",
      "mediaType": "application/json"
    }
  },
  "project": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b942c396-9128-11e6-8a84-bae500000056",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a123-acda-11e6-8a84-bae50000006d",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "4930a123-acda-11e6-8a84-bae50000006d",
      "name": "Поле1",
      "type": "string",
      "value": "value"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a9c5-acda-11e6-8a84-bae50000006e",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "4930a9c5-acda-11e6-8a84-bae50000006e",
      "name": "Поле2",
      "type": "string",
      "value": "values"
    }
  ],
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/cc5beac8-acdb-11e6-8a84-bae500000000/positions",
      "type": "commissionreportinposition",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "vatEnabled": true,
  "vatIncluded": true,
  "vatSum": 24,
  "commissionPeriodStart": "2016-11-01 10:07:00",
  "commissionPeriodEnd": "2016-11-29 10:07:00",
  "rewardType": "PercentOfSales",
  "rewardPercent": 15,
  "commitentSum": 1499
}
```

### Массовое создание и обновление полученных отчётов комиссионера
[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) полученных отчётов комиссионера.
В теле запроса нужно передать массив, содержащий JSON представления полученных отчётов комиссионера, которые вы хотите создать или обновить.
Обновляемые полученные отчёты комиссионера должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких полученных отчётов комиссионера

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '[
            {
              "owner": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                  "type": "employee",
                  "mediaType": "application/json"
                }
              },
              "shared": false,
              "group": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
                  "type": "group",
                  "mediaType": "application/json"
                }
              },
              "name": "3335551",
              "externalCode": "extCod1",
              "moment": "2016-12-16 11:22:33",
              "applicable": true,
              "sum": 0,
              "contract": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/92df2d9c-ab02-11e6-8a84-bae500000084",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
                  "type": "contract",
                  "mediaType": "application/json"
                }
              },
              "project": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
                  "type": "project",
                  "mediaType": "application/json"
                }
              },
              "agent": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b942c396-9128-11e6-8a84-bae500000056",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                  "type": "counterparty",
                  "mediaType": "application/json"
                }
              },
              "organization": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "organizationAccount": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
                  "type": "account",
                  "mediaType": "application/json"
                }
              },
              "positions": [
                {
                  "assortment": {
                    "meta": {
                      "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/36eb1628-912b-11e6-8a84-bae500000124",
                      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                      "type": "variant",
                      "mediaType": "application/json"
                    }
                  },
                  "quantity": 2,
                  "price": 132.05,
                  "vat": 10,
                  "reward": 123
                },
                {
                  "assortment": {
                    "meta": {
                      "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
                      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                      "type": "variant",
                      "mediaType": "application/json"
                    }
                  },
                  "quantity": 15,
                  "price": 99.99,
                  "vat": 0,
                  "reward": 100
                }
              ],
              "attributes": [
                {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a123-acda-11e6-8a84-bae50000006d",
                    "type": "attributemetadata",
                    "mediaType": "application/json"
                  },
                  "id": "4930a123-acda-11e6-8a84-bae50000006d",
                  "value": "value"
                },
                {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a9c5-acda-11e6-8a84-bae50000006e",
                    "type": "attributemetadata",
                    "mediaType": "application/json"
                  },
                  "id": "4930a9c5-acda-11e6-8a84-bae50000006e",
                  "value": "values"
                }
              ],
              "vatEnabled": true,
              "vatIncluded": true,
              "vatSum": 0,
              "commissionPeriodStart": "2016-11-01 10:07:00",
              "commissionPeriodEnd": "2016-11-29 10:07:00",
              "rewardType": "PercentOfSales",
              "rewardPercent": 15
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/cc5beac8-acdb-11e6-8a84-bae500000000",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata",
                "type": "commissionreportin",
                "mediaType": "application/json"
              },
              "externalCode": "extCod1",
              "moment": "2016-12-16 11:22:33",
              "applicable": true,
              "sum": 0,
              "contract": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/92df2d9c-ab02-11e6-8a84-bae500000084",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
                  "type": "contract",
                  "mediaType": "application/json"
                }
              },
              "project": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
                  "type": "project",
                  "mediaType": "application/json"
                }
              },
              "agent": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b942c396-9128-11e6-8a84-bae500000056",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                  "type": "counterparty",
                  "mediaType": "application/json"
                }
              },
              "organization": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "organizationAccount": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
                  "type": "account",
                  "mediaType": "application/json"
                }
              },
              "positions": [
                {
                  "assortment": {
                    "meta": {
                      "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/36eb1628-912b-11e6-8a84-bae500000124",
                      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                      "type": "variant",
                      "mediaType": "application/json"
                    }
                  },
                  "quantity": 12,
                  "price": 132.05,
                  "vat": 10,
                  "reward": 123
                },
                {
                  "assortment": {
                    "meta": {
                      "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
                      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                      "type": "variant",
                      "mediaType": "application/json"
                    }
                  },
                  "quantity": 15,
                  "price": 99.399,
                  "vat": 0,
                  "reward": 100
                }
              ],
              "attributes": [
                {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a123-acda-11e6-8a84-bae50000006d",
                    "type": "attributemetadata",
                    "mediaType": "application/json"
                  },
                  "id": "4930a123-acda-11e6-8a84-bae50000006d",
                  "value": "Newvalue"
                }
              ],
              "vatEnabled": true,
              "vatIncluded": true,
              "vatSum": 0,
              "commissionPeriodStart": "2016-11-01 10:07:00",
              "commissionPeriodEnd": "2016-12-29 10:07:00",
              "rewardType": "PercentOfSales",
              "rewardPercent": 12
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных полученных отчётов комиссионера.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/cc5beac8-acdb-11e6-8a84-bae500000000",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata",
      "type": "commissionreportin",
      "mediaType": "application/json"
    },
    "id": "cc5beac8-acdb-11e6-8a84-bae500000000",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-11-17 18:37:50",
    "name": "3335551",
    "externalCode": "extCod1",
    "moment": "2016-12-16 11:22:33",
    "applicable": true,
    "rate": {
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    },
    "sum": 1764,
    "contract": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/92df2d9c-ab02-11e6-8a84-bae500000084",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
        "type": "contract",
        "mediaType": "application/json"
      }
    },
    "project": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
        "type": "project",
        "mediaType": "application/json"
      }
    },
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b942c396-9128-11e6-8a84-bae500000056",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "organization": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "organizationAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "attributes": [
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a123-acda-11e6-8a84-bae50000006d",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "4930a123-acda-11e6-8a84-bae50000006d",
        "name": "Поле1",
        "type": "string",
        "value": "value"
      },
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a9c5-acda-11e6-8a84-bae50000006e",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "4930a9c5-acda-11e6-8a84-bae50000006e",
        "name": "Поле2",
        "type": "string",
        "value": "values"
      }
    ],
    "created": "2007-02-07 17:16:41",
    "positions": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/cc5beac8-acdb-11e6-8a84-bae500000000/positions",
        "type": "commissionreportinposition",
        "mediaType": "application/json",
        "size": 2,
        "limit": 1000,
        "offset": 0
      }
    },
    "vatEnabled": true,
    "vatIncluded": true,
    "vatSum": 24,
    "commissionPeriodStart": "2016-11-01 10:07:00",
    "commissionPeriodEnd": "2016-11-29 10:07:00",
    "rewardType": "PercentOfSales",
    "rewardPercent": 15,
    "commitentSum": 1499
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/cc5beac8-acdb-11e6-8a84-bae500000000",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata",
      "type": "commissionreportin",
      "mediaType": "application/json"
    },
    "id": "cc5beac8-acdb-11e6-8a84-bae500000000",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-11-17 20:11:40",
    "name": "3335551",
    "externalCode": "extCod1",
    "moment": "2016-12-16 11:22:33",
    "applicable": true,
    "rate": {
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    },
    "sum": 3069,
    "contract": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/92df2d9c-ab02-11e6-8a84-bae500000084",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
        "type": "contract",
        "mediaType": "application/json"
      }
    },
    "project": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
        "type": "project",
        "mediaType": "application/json"
      }
    },
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b942c396-9128-11e6-8a84-bae500000056",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "organization": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "organizationAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "state": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/states/40ca02eb-acda-11e6-8a84-bae500000069",
        "type": "state",
        "mediaType": "application/json"
      }
    },
    "attributes": [
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a123-acda-11e6-8a84-bae50000006d",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "4930a123-acda-11e6-8a84-bae50000006d",
        "name": "Поле1",
        "type": "string",
        "value": "Newvalue"
      },
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a9c5-acda-11e6-8a84-bae50000006e",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "4930a9c5-acda-11e6-8a84-bae50000006e",
        "name": "Поле2",
        "type": "string",
        "value": "values"
      }
    ],
    "created": "2007-02-07 17:16:41",
    "positions": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/cc5beac8-acdb-11e6-8a84-bae500000000/positions",
        "type": "commissionreportinposition",
        "mediaType": "application/json",
        "size": 2,
        "limit": 1000,
        "offset": 0
      }
    },
    "vatEnabled": true,
    "vatIncluded": true,
    "vatSum": 144,
    "commissionPeriodStart": "2016-11-01 10:07:00",
    "commissionPeriodEnd": "2016-12-29 10:07:00",
    "rewardType": "PercentOfSales",
    "rewardPercent": 12,
    "commitentSum": 2701
  }
]
```

### Удалить полученный отчёт комиссионера

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id полученного отчёта комиссионера.|

> Запрос на удаление полученного отчёта комиссионера с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление полученного отчёта комиссионера.

### Метаданные полученного отчёта
#### Метаданные полученного отчёта
Запрос на получение метаданных отчётов комиссионера. Результат - объект JSON, включающий в себя:
+ **meta** - Ссылка на метаданные отчётов комиссионера
+ **attributes** - Массив объектов доп. полей отчётов комиссионера в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **states** - Массив статусов отчётов комиссионера
+ **createShared** - создавать новые отчёты комиссионера с меткой "Общий"

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](/api/remap/1.2/doc/index.html#header-работа-с-дополнительными-полями).

> Метаданные полученного отчёта

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление метаданных полученного отчёта комиссионера.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a123-acda-11e6-8a84-bae50000006d",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "4930a123-acda-11e6-8a84-bae50000006d",
      "name": "Поле1",
      "type": "string",
      "required": false
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a9c5-acda-11e6-8a84-bae50000006e",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "4930a9c5-acda-11e6-8a84-bae50000006e",
      "name": "Поле2",
      "type": "string",
      "required": false
    }
  ],
  "states": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/states/40ca02eb-acda-11e6-8a84-bae500000069",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "40ca02eb-acda-11e6-8a84-bae500000069",
      "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
      "name": "Статус",
      "color": 10066329,
      "stateType": "Regular",
      "entityType": "commissionreportin"
    }
  ],
  "createShared": false
}

```

### Отдельное доп. поле

#### Отдельное доп. поле

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Доп. поля.|
 
> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a123-acda-11e6-8a84-bae50000006d",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "4930a123-acda-11e6-8a84-bae50000006d",
  "name": "Поле1",
  "type": "string",
  "required": false
}
```

### Полученный отчёт комиссионера
 
### Получить отчёт комиссионера

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id полученного отчёта комиссионера.|
 
> Запрос на получение отдельного отчёта комиссионера с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление полученного отчёта комиссионера.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/392fb7a9-ab02-11e6-8a84-bae500000073",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata",
    "type": "commissionreportin",
    "mediaType": "application/json"
  },
  "id": "392fb7a9-ab02-11e6-8a84-bae500000073",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-15 10:11:35",
  "name": "00001",
  "externalCode": "DfZi0N0mggqmVRt2hVf8t2",
  "moment": "2016-11-15 10:04:00",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 0,
  "contract": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/92df2d9c-ab02-11e6-8a84-bae500000084",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
      "type": "contract",
      "mediaType": "application/json"
    }
  },
  "project": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b942c396-9128-11e6-8a84-bae500000056",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/392fb7a9-ab02-11e6-8a84-bae500000073/positions",
      "type": "commissionreportinposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "vatEnabled": true,
  "vatIncluded": true,
  "vatSum": 0,
  "commissionPeriodStart": "2016-11-09 10:07:00",
  "commissionPeriodEnd": "2016-11-09 10:07:00",
  "rewardType": "PercentOfSales",
  "rewardPercent": 0,
  "commitentSum": 0
}

```

### Изменить полученный отчёт комиссионера 
Запрос на обновление полученного отчёта комиссионера с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у полученного отчёта комиссионера, кроме тех, что
помечены `Только для чтения` в описании [атрибутов полученного отчёта комиссионера](#полученный-отчёт-комиссионера-полученные-отчёты-комиссионера).
При обновлении полей **organization** и **agent** нужно также обновить поля **organizationAccount** и
**agentAccount** соответственно, иначе произойдёт ошибка.

<br>При указании поля **contract** важно:
+ Чтобы договор был заключён с указанным в поле **agent** контрагентом
+ Договор имел тип "Договор комиссии"

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id полученного отчёта комиссионера.|

> Пример запроса на обновление отдельного отчёта комиссионера.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "externalCode": "extCod1",
            "moment": "2016-12-16 11:22:33",
            "applicable": true,
            "sum": 0,
            "contract": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/92df2d9c-ab02-11e6-8a84-bae500000084",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
                "type": "contract",
                "mediaType": "application/json"
              }
            },
            "project": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
                "type": "project",
                "mediaType": "application/json"
              }
            },
            "agent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b942c396-9128-11e6-8a84-bae500000056",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "counterparty",
                "mediaType": "application/json"
              }
            },
            "organization": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "organizationAccount": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
                "type": "account",
                "mediaType": "application/json"
              }
            },
            "positions": [
              {
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/36eb1628-912b-11e6-8a84-bae500000124",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                    "type": "variant",
                    "mediaType": "application/json"
                  }
                },
                "quantity": 12,
                "price": 132.05,
                "vat": 10,
                "reward": 123
              },
              {
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                    "type": "variant",
                    "mediaType": "application/json"
                  }
                },
                "quantity": 15,
                "price": 99.399,
                "vat": 0,
                "reward": 100
              }
            ],
            "attributes": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a123-acda-11e6-8a84-bae50000006d",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "id": "4930a123-acda-11e6-8a84-bae50000006d",
                "value": "Newvalue"
              }
            ],
            "vatEnabled": true,
            "vatIncluded": true,
            "vatSum": 0,
            "commissionPeriodStart": "2016-11-01 10:07:00",
            "commissionPeriodEnd": "2016-12-29 10:07:00",
            "rewardType": "PercentOfSales",
            "rewardPercent": 12
          }
'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённого отчёта комиссионера.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/cc5beac8-acdb-11e6-8a84-bae500000000",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata",
    "type": "commissionreportin",
    "mediaType": "application/json"
  },
  "id": "cc5beac8-acdb-11e6-8a84-bae500000000",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-17 20:11:40",
  "name": "3335551",
  "externalCode": "extCod1",
  "moment": "2016-12-16 11:22:33",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 3069,
  "contract": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/92df2d9c-ab02-11e6-8a84-bae500000084",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
      "type": "contract",
      "mediaType": "application/json"
    }
  },
  "project": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b942c396-9128-11e6-8a84-bae500000056",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/states/40ca02eb-acda-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a123-acda-11e6-8a84-bae50000006d",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "4930a123-acda-11e6-8a84-bae50000006d",
      "name": "Поле1",
      "type": "string",
      "value": "Newvalue"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a9c5-acda-11e6-8a84-bae50000006e",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "4930a9c5-acda-11e6-8a84-bae50000006e",
      "name": "Поле2",
      "type": "string",
      "value": "values"
    }
  ],
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/cc5beac8-acdb-11e6-8a84-bae500000000/positions",
      "type": "commissionreportinposition",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "vatEnabled": true,
  "vatIncluded": true,
  "vatSum": 144,
  "commissionPeriodStart": "2016-11-01 10:07:00",
  "commissionPeriodEnd": "2016-12-29 10:07:00",
  "rewardType": "PercentOfSales",
  "rewardPercent": 12,
  "commitentSum": 2701
}

```

### Позиции отчёта комиссионера 
Отдельный ресурс для управления позициями полученного отчёта комиссионера. С его помощью вы можете управлять позициями большого документа, количество строк в котором превышает лимит на количество строк, сохраняемых вместе с документом. Этот лимит равен 100. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](/api/remap/1.2/doc/index.html#header-работа-с-позициями-документов).

### Получить позиции 
Запрос на получение списка всех позиций данного полученного отчёта комиссионера.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id полученного отчёта комиссионера.|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить позиции

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/positions"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций отдельного отчёта комиссионера.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/6348c14c-ab39-11e6-8a84-bae500000064/positions",
    "type": "commissionreportinposition",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/6348c14c-ab39-11e6-8a84-bae500000064/positions/94aef79a-accf-11e6-8a84-bae500000064",
        "type": "commissionreportinposition",
        "mediaType": "application/json"
      },
      "id": "94aef79a-accf-11e6-8a84-bae500000064",
      "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
      "quantity": 1,
      "price": 0,
      "vat": 0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/ca976541-96d1-11e6-8a84-bae50000002e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        }
      },
      "reward": 0
    }
  ]
}
```

### Создать позицию 
Запрос на создание новой позиции в отчёте комиссионера.
Для успешного создания необходимо в теле запроса указать следующие поля:
+ **assortment** - Ссылка на товар/услугу/серию/модификацию, которую представляет собой позиция.
Также можно указать поле с именем **service**, **consignment**, **variant** в соответствии с тем,
чем является указанная позиция. Подробнее об этом поле можно прочитать в описании [позиции отчёта комиссионера](#header-позиции-полученного-отчёта-комиссионера)
+ **quantity** - Количество указанной позиции. Должно быть положительным, иначе возникнет ошибка.
Одновременно можно создать как одну так и несколько позиций отчёта комиссионера. Все созданные данным запросом позиции
будут добавлены к уже существующим.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id полученного отчёта комиссионера.|

> Пример создания одной позиции в полученном отчёте комиссионера.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/positions"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '[
            {
              "quantity": 15,
              "price": 1300,
              "vat": 0,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                  "type": "variant",
                  "mediaType": "application/json"
                }
              },
              "reward": 225
            },
            {
              "quantity": 15,
              "price": 1020,
              "vat": 0,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                  "type": "variant",
                  "mediaType": "application/json"
                }
              },
              "reward": 225
            },
            {
              "quantity": 15,
              "price": 101,
              "vat": 0,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                  "type": "variant",
                  "mediaType": "application/json"
                }
              },
              "reward": 225
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной позиции отдельного отчёта комиссионера.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/cc5beac8-acdb-11e6-8a84-bae500000000/positions/a7a61c8b-acdd-11e6-8a84-bae500000000",
      "type": "commissionreportinposition",
      "mediaType": "application/json"
    },
    "id": "a7a61c8b-acdd-11e6-8a84-bae500000000",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "quantity": 15,
    "price": 1300,
    "vat": 0,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      }
    },
    "reward": 2925
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/cc5beac8-acdb-11e6-8a84-bae500000000/positions/a7a6c749-acdd-11e6-8a84-bae500000001",
      "type": "commissionreportinposition",
      "mediaType": "application/json"
    },
    "id": "a7a6c749-acdd-11e6-8a84-bae500000001",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "quantity": 15,
    "price": 1020,
    "vat": 0,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      }
    },
    "reward": 2295
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/cc5beac8-acdb-11e6-8a84-bae500000000/positions/a7a6d9cc-acdd-11e6-8a84-bae500000002",
      "type": "commissionreportinposition",
      "mediaType": "application/json"
    },
    "id": "a7a6d9cc-acdd-11e6-8a84-bae500000002",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "quantity": 15,
    "price": 101,
    "vat": 0,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      }
    },
    "reward": 227
  }
]
```

### Удалить позицию

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id полученного отчёта комиссионера.|
|positionID|  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id позиции полученного отчёта комиссионера.|

> Запрос на удаление позиции полученного отчёта комиссионера с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление позиции полученного отчёта комиссионера.

### Позиция отчёта комиссионера
 
### Получить позицию

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id полученного отчёта комиссионера.|
|positionID|  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id позиции полученного отчёта комиссионера.|
 
> Запрос на получение отдельной позиции полученного отчёта комиссионера с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции полученного отчёта комиссионера.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/6348c14c-ab39-11e6-8a84-bae500000064/positions/94aef79a-accf-11e6-8a84-bae500000064",
    "type": "commissionreportinposition",
    "mediaType": "application/json"
  },
  "id": "94aef79a-accf-11e6-8a84-bae500000064",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "quantity": 1,
  "price": 0,
  "vat": 0,
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/ca976541-96d1-11e6-8a84-bae50000002e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=ca976541-96d1-11e6-8a84-bae50000002e"

    }
  },
  "reward": 0
}
```

### Изменить позицию 
Запрос на обновление отдельной позиции полученного отчёта комиссионера. Для обновления позиции нет каких-либо
 обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id полученного отчёта комиссионера.|
|positionID|  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id позиции полученного отчёта комиссионера.|

> Пример запроса на обновление отдельной позиции в полученном отчёте комиссионера.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "quantity": 14,
            "price": 1301,
            "vat": 10,
            "assortment": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                "type": "variant",
                "mediaType": "application/json"
              }
            },
            "reward": 0
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённой позиции полученного отчёта комиссионера.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/cc5beac8-acdb-11e6-8a84-bae500000000/positions/a7a6c749-acdd-11e6-8a84-bae500000001",
    "type": "commissionreportinposition",
    "mediaType": "application/json"
  },
  "id": "a7a6c749-acdd-11e6-8a84-bae500000001",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "quantity": 14,
  "price": 1301,
  "vat": 10,
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
      "type": "variant",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=36edadbe-912b-11e6-8a84-bae500000128"
    }
  },
  "reward": 0
}
```
