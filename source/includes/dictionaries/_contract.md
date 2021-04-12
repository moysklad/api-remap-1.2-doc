## Договор
### Договоры 
Средствами JSON API можно создавать и обновлять сведения о Договорах, запрашивать списки Договоров и сведения по отдельным Договорам. Кодом сущности для Договора в составе JSON API является ключевое слово **contract**. Больше о Договорах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/218121398-%D0%A3%D1%87%D0%B5%D1%82-%D0%B4%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D0%BE%D0%B2).
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](../#mojsklad-json-api-obschie-swedeniq-kontextnyj-poisk). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов Договора на соответствие поисковой строке будет осуществлен по следующим полям:

+ по номеру Договора **name**
+ по комментарию к Договору **description**

#### Атрибуты сущности

| Название  | Тип | Описание                    | Свойство поля в запросе | Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**meta**              |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Договора|&mdash;|да
|**id**                |UUID|ID Договора|Только для чтения|да
|**accountId**         |UUID|ID учетной записи|Только для чтения|да
|**owner**         |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные владельца (Сотрудника)|&mdash;|да
|**shared**         |Boolean|Общий доступ|&mdash;|да
|**group**         |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные отдела сотрудника|&mdash;|да
|**updated**         |DateTime|Момент последнего обновления сущности|Только для чтения|да
|**name**         |String(255)|Номер договора|Необходимое при создании|да
|**description**        |String(4096)|Описание Договора|&mdash;|нет
|**code**         |String(255)|Код Договора|&mdash;|нет
|**externalCode**         |String(255)|Внешний код Договора|&mdash;|да
|**archived**        |Boolean|Добавлен ли Договор в архив|&mdash;|да
|**moment**         |DateTime|Дата Договора|&mdash;|да
|**sum**         |Int|Сумма Договора|&mdash;|да
|**contractType**         |Enum|Тип Договора. Возможные значения: `Договор комиссии`, `Договор купли-продажи`|&mdash;|да
|**rewardType**         |Enum|Тип Вознаграждения. Возможные значения: `Процент от суммы продажи`, `Не рассчитывать`|&mdash;|нет
|**rewardPercent**        |Int|Вознаграждение в процентах (от 0 до 100)|&mdash;|нет
|**ownAgent**              |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные вашего юрлица|Необходимое при создании|да
|**agent**              |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Контрагента|Необходимое при создании|да
|**state**              |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные статуса договора|&mdash;|нет
|**organizationAccount**              |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные счета вашего юрлица|&mdash;|нет
|**agentAccount**              |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные счета контрагента|&mdash;|да
|**rate**              |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные валюты|&mdash;|да
|**attributes**         |Array(Object)|Коллекция доп. полей|&mdash;|нет

Таблица полей, их значений и их значений в JSON представлении:

| Имя поля     | Возможные Значения      | Соответствующее значение в JSON| Значение по умолчанию |
| :-----------:|:-----------------------:|:------------------------------:|:---------------------:|
|**contractType**  | Договор комиссии        |Commission                      | Договор купли-продажи |
|              | Договор купли-продажи   |Sales                           |                       |
| **rewardType**   | Процент от суммы продажи|PercentOfSales                  |    Не рассчитывать    |
|              | Не рассчитывать         |None                            |                       |

О работе с доп. полями Договоров можно прочитать [здесь](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)

### Получить список Договоров 

Запрос на получение списка всех договоров на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название  | Тип | Описание                    |
| --------- |:----|:----------------------------|
**meta** |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные о выдаче,
**context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.
**rows** |Array(Object)| Массив JSON объектов, представляющих собой договора.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|**limit** |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|**offset** |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить список договоров

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/contract"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Договоров.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
    "type": "contract",
    "mediaType": "application/json",
    "size": 3,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/498b8673-0308-11e6-9464-e4de00000089",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
        "type": "contract",
        "mediaType": "application/json"
      },
      "id": "498b8673-0308-11e6-9464-e4de00000089",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-04-15 15:48:00",
      "name": "14212412",
      "externalCode": "WEhvl5LFgyYqa5l6yKRzu3",
      "archived": false,
      "moment": "2016-04-15 15:47:00",
      "sum": 0,
      "contractType": "Sales",
      "ownAgent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/78f75b89-fd86-11e5-9464-e4de0000000b",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "state": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "organizationAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/342dc6f5-0bbb-11e6-d219-b9d90000004e/accounts/342e096d-0bbb-11e6-d219-b9d90000004f",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "agentAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/342dc6f5-0bbb-11e6-d219-b9d90000004e/accounts/342e096d-0bbb-11e6-d219-b9d90000004f",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/8c2cab84-0ac0-11e6-9464-e4de00000100",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
        "type": "contract",
        "mediaType": "application/json"
      },
      "id": "8c2cab84-0ac0-11e6-9464-e4de00000100",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-04-25 11:34:38",
      "name": "Привет, Имя договора",
      "description": "Коммент",
      "code": "KOOOOD",
      "externalCode": "GIpDXPPIh4ytzI9svfcyS3",
      "archived": false,
      "moment": "2016-04-25 11:33:00",
      "sum": 9999999000,
      "contractType": "Commission",
      "rewardType": "PercentOfSales",
      "rewardPercent": 0,
      "ownAgent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/8ce3c179-015e-11e6-9464-e4de0000007a",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
        "type": "contract",
        "mediaType": "application/json"
      },
      "id": "8ce3c179-015e-11e6-9464-e4de0000007a",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-04-13 13:00:28",
      "name": "12",
      "description": "asdwqeqr",
      "code": "cjhjr",
      "externalCode": "jTNl4F6WhxgFTcczKRT6i2",
      "archived": false,
      "moment": "2016-04-13 13:00:00",
      "sum": 0,
      "contractType": "Sales",
      "ownAgent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "state": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "organizationAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/342dc6f5-0bbb-11e6-d219-b9d90000004e/accounts/342e096d-0bbb-11e6-d219-b9d90000004f",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "agentAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/342dc6f5-0bbb-11e6-d219-b9d90000004e/accounts/342e096d-0bbb-11e6-d219-b9d90000004f",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/faf45b9a-2e58-11e6-8a84-bae500000055",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      }
    }
  ]
}
```

### Создать новый Договор 
Запрос на создание нового Договора.
Необходимые при создании для создания Договора поля:

| Название  | Тип | Описание                    | Поле в запросе | Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**name**         |String(255)|Номер договора|Необходимое при создании|да
|**ownAgent**              |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные вашего юрлица|Необходимое при создании|да
|**agent**              |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Контрагента|Необходимое при создании|да


> Пример создания нового Договора, с запросом, Тело которого содержит только обязательные поля.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/contract"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "666",
            "ownAgent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "agent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "counterparty",
                "mediaType": "application/json"
              }
            },
            "rate": {
              "currency": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/faf45b9a-2e58-11e6-8a84-bae500000055",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                  "type": "currency",
                  "mediaType": "application/json"
                }
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Договора.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/8df02031-0ac4-11e6-9464-e4de00000008",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
    "type": "contract",
    "mediaType": "application/json"
  },
  "id": "8df02031-0ac4-11e6-9464-e4de00000008",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-04-25 12:03:19",
  "name": "666",
  "externalCode": "y8j8uYVuhd04K8ZGOuu2a1",
  "archived": false,
  "moment": "2016-04-25 12:03:19",
  "sum": 0,
  "contractType": "Sales",
  "ownAgent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/342dc6f5-0bbb-11e6-d219-b9d90000004e/accounts/342e096d-0bbb-11e6-d219-b9d90000004f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/342dc6f5-0bbb-11e6-d219-b9d90000004e/accounts/342e096d-0bbb-11e6-d219-b9d90000004f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/faf45b9a-2e58-11e6-8a84-bae500000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  }
}
```

> Пример создания нового Договора с более насыщенным телом запроса.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/contract"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "00000011111",
            "description": "Договор с партнерской организацией ООО Солнышко",
            "code": "contractWithPartner",
            "externalCode": "extC12fd12a",
            "moment": "2016-07-06 12:53:22",
            "sum": 200000,
            "contractType": "Sales",
            "ownAgent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/db141159-2c97-11e6-8a84-bae50000004e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "agent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/2e6aa620-2c98-11e6-8a84-bae500000004",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "counterparty",
                "mediaType": "application/json"
              }
            },
            "state": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
                "type": "state",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Договора.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/3bba8d2a-2cb6-11e6-8a84-bae50000002c",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
    "type": "contract",
    "mediaType": "application/json"
  },
  "id": "3bba8d2a-2cb6-11e6-8a84-bae50000002c",
  "accountId": "da7d9bbe-2c97-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-06-07 16:46:27",
  "name": "00000011111",
  "description": "Договор с партнерской организацией ООО Солнышко",
  "code": "contractWithPartner",
  "externalCode": "extC12fd12a",
  "archived": false,
  "moment": "2016-07-06 12:53:22",
  "sum": 200000,
  "contractType": "Sales",
  "ownAgent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/db141159-2c97-11e6-8a84-bae50000004e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/2e6aa620-2c98-11e6-8a84-bae500000004",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/2e6aa620-2c98-11e6-8a84-bae500000004/accounts/2e6ab6ca-2c98-11e6-8a84-bae500000005",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  }
}
```

> Пример создания нового Договора, с запросом, Тело которого содержит дополнительные поля.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/contract"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "666",
              "ownAgent": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "agent": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                  "type": "counterparty",
                  "mediaType": "application/json"
                }
              },
              "rate": {
                "currency": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/faf45b9a-2e58-11e6-8a84-bae500000055",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json"
                  }
                }
              }
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/73fa8fb0-0ac5-11e6-9464-e4de0000000b",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
                "type": "contract",
                "mediaType": "application/json"
              },
              "name": "666_02",
              "ownAgent": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "contractType": "Sales",
              "code": "code333",
              "externalCode": "exCode333",
              "moment": "2017-02-25 12:03:19",
              "description": "Договор с контрагентом ООО Поставщик",
              "rate": {
                "currency": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/faf45b9a-2e58-11e6-8a84-bae500000055",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json"
                  }
                }
              }
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Договора.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/8df02031-0ac4-11e6-9464-e4de00000008",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
      "type": "contract",
      "mediaType": "application/json"
    },
    "id": "8df02031-0ac4-11e6-9464-e4de00000008",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-04-25 12:03:19",
    "name": "666",
    "externalCode": "y8j8uYVuhd04K8ZGOuu2a1",
    "archived": false,
    "moment": "2016-04-25 12:03:19",
    "sum": 0,
    "contractType": "Sales",
    "ownAgent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "organizationAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/342dc6f5-0bbb-11e6-d219-b9d90000004e/accounts/342e096d-0bbb-11e6-d219-b9d90000004f",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "agentAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/342dc6f5-0bbb-11e6-d219-b9d90000004e/accounts/342e096d-0bbb-11e6-d219-b9d90000004f",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "rate": {
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/faf45b9a-2e58-11e6-8a84-bae500000055",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    }
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/73fa8fb0-0ac5-11e6-9464-e4de0000000b",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
      "type": "contract",
      "mediaType": "application/json"
    },
    "id": "73fa8fb0-0ac5-11e6-9464-e4de0000000b",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-04-25 12:22:17",
    "name": "666_02",
    "description": "Договор с контрагентом ООО Поставщик",
    "code": "code333",
    "externalCode": "exCode333",
    "archived": false,
    "moment": "2017-02-25 12:03:19",
    "sum": 0,
    "contractType": "Sales",
    "ownAgent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "organizationAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/342dc6f5-0bbb-11e6-d219-b9d90000004e/accounts/342e096d-0bbb-11e6-d219-b9d90000004f",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "agentAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/342dc6f5-0bbb-11e6-d219-b9d90000004e/accounts/342e096d-0bbb-11e6-d219-b9d90000004f",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "rate": {
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/faf45b9a-2e58-11e6-8a84-bae500000055",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    }
  }
]
```

### Массовое создание и обновление Договоров 
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Договоров.
В теле запроса нужно передать массив, содержащий JSON представления Договоров, которые вы хотите создать или обновить.
Обновляемые Договора должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Договоров

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/contract"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "666",
              "ownAgent": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "agent": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                  "type": "counterparty",
                  "mediaType": "application/json"
                }
              },
              "rate": {
                "currency": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/faf45b9a-2e58-11e6-8a84-bae500000055",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json"
                  }
                }
              }
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/73fa8fb0-0ac5-11e6-9464-e4de0000000b",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
                "type": "contract",
                "mediaType": "application/json"
              },
              "name": "666_02",
              "ownAgent": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "contractType": "Sales",
              "code": "code333",
              "externalCode": "exCode333",
              "moment": "2017-02-25 12:03:19",
              "description": "Договор с контрагентом ООО Поставщик",
              "rate": {
                "currency": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/faf45b9a-2e58-11e6-8a84-bae500000055",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json"
                  }
                }
              }
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Договоров.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/8df02031-0ac4-11e6-9464-e4de00000008",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
      "type": "contract",
      "mediaType": "application/json"
    },
    "id": "8df02031-0ac4-11e6-9464-e4de00000008",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-04-25 12:03:19",
    "name": "666",
    "externalCode": "y8j8uYVuhd04K8ZGOuu2a1",
    "archived": false,
    "moment": "2016-04-25 12:03:19",
    "sum": 0,
    "contractType": "Sales",
    "ownAgent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "organizationAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/342dc6f5-0bbb-11e6-d219-b9d90000004e/accounts/342e096d-0bbb-11e6-d219-b9d90000004f",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "agentAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/342dc6f5-0bbb-11e6-d219-b9d90000004e/accounts/342e096d-0bbb-11e6-d219-b9d90000004f",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "rate": {
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/faf45b9a-2e58-11e6-8a84-bae500000055",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    }
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/73fa8fb0-0ac5-11e6-9464-e4de0000000b",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
      "type": "contract",
      "mediaType": "application/json"
    },
    "id": "73fa8fb0-0ac5-11e6-9464-e4de0000000b",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-04-25 12:22:17",
    "name": "666_02",
    "description": "Договор с контрагентом ООО Поставщик",
    "code": "code333",
    "externalCode": "exCode333",
    "archived": false,
    "moment": "2017-02-25 12:03:19",
    "sum": 0,
    "contractType": "Sales",
    "ownAgent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "organizationAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/342dc6f5-0bbb-11e6-d219-b9d90000004e/accounts/342e096d-0bbb-11e6-d219-b9d90000004f",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "agentAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/342dc6f5-0bbb-11e6-d219-b9d90000004e/accounts/342e096d-0bbb-11e6-d219-b9d90000004f",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "rate": {
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/faf45b9a-2e58-11e6-8a84-bae500000055",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    }
  }
]
```

### Удалить договор 

**Параметры**

|Параметр   |Описание   | 
|:----|:----|
|**id** |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Договора.|

> Запрос на удаление Договора с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/contract/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Договора.

### Массовое удаление Договоров

В теле запроса нужно передать массив, содержащий JSON метаданных Договоров, которые вы хотите удалить.

> Запрос на массовое удаление Договоров. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/contract/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
            "type": "contract",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
            "type": "contract",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Договоров.

```json
[
  {
    "info":"Сущность 'contract' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'contract' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
```

### Метаданные Договоров 
#### Метаданные Договоров 
Запрос на получение метаданных Договоров. Результат - объект JSON, включающий в себя:

| Название  | Тип | Описание                    | Свойство поля в запросе | Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**meta**              |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Заказа покупателя|&mdash;|да
|**attributes**         |Array(Object)|Коллекция доп. полей|&mdash;|нет
|**states**              |Array(Object)|Массив статусов договоров|&mdash;|нет
|**createShared**        |Boolean|Создавать новые договора с меткой "Общий"|&mdash;|да

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Получение методанных Договора
 
```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Договоров.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "id": "5290a290-0313-11e6-9464-e4de00000020",
      "name": "AttributeName1",
      "type": "boolean",
      "required": false
    }
  ],
  "states": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56c504-2e58-11e6-8a84-bae500000069",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Новый",
      "color": 15106326,
      "stateType": "Regular",
      "entityType": "contract"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata/states/fb56cae3-2e58-11e6-8a84-bae50000006a",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56cae3-2e58-11e6-8a84-bae50000006a",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Подтвержден",
      "color": 40931,
      "stateType": "Regular",
      "entityType": "contract"
    }
  ],
  "createShared": false
}
```

### Отдельное доп. поле

**Параметры**

|Параметр   |Описание   | 
|:----|:----|
|**id** |  `string` (required) *Example: 5290a290-0313-11e6-9464-e4de00000020* id Доп. поля.|

#### Отдельное доп. поле
 
> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata/attributes/5290a290-0313-11e6-9464-e4de00000020"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata/attributes/5290a290-0313-11e6-9464-e4de00000020",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "5290a290-0313-11e6-9464-e4de00000020",
  "name": "AttributeName1",
  "type": "boolean",
  "required": false
}
```

### Договор

**Параметры**

|Параметр   |Описание   | 
|:----|:----|
|**id** |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Договора.|

### Получить Договор
 
> Запрос на получение отдельного Договора с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/contract/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Договора.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/8ce3c179-015e-11e6-9464-e4de0000007a",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
    "type": "contract",
    "mediaType": "application/json"
  },
  "id": "8ce3c179-015e-11e6-9464-e4de0000007a",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-04-13 13:00:28",
  "name": "12",
  "description": "asdwqeqr",
  "code": "cjhjr",
  "externalCode": "jTNl4F6WhxgFTcczKRT6i2",
  "archived": false,
  "moment": "2016-04-13 13:00:00",
  "sum": 0,
  "contractType": "Sales",
  "ownAgent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/342dc6f5-0bbb-11e6-d219-b9d90000004e/accounts/342e096d-0bbb-11e6-d219-b9d90000004f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/342dc6f5-0bbb-11e6-d219-b9d90000004e/accounts/342e096d-0bbb-11e6-d219-b9d90000004f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/faf45b9a-2e58-11e6-8a84-bae500000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "25b6f76c-12d5-11e6-9464-e4de00000068",
      "name": "AttributeName1",
      "type": "boolean",
      "value": false
    }
  ]
}
```

### Изменить Договор 

Запрос на обновление отдельного Договора с указанным id.
При обновлении полей **organization** и **agent** нужно также обновить поля **organizationAccount** и
**agentAccount** соответственно, иначе произойдет ошибка.

**Параметры**

|Параметр   |Описание   | 
|:----|:----|
|**id** |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Договора.|

> Пример запроса на обновление отдельного Договора.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/contract/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "666_02",
            "ownAgent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "contractType": "Sales",
            "code": "code333",
            "externalCode": "exCode333",
            "moment": "2017-02-25 12:03:19",
            "description": "Договор с контрагентом ООО Поставщик",
            "rate": {
              "currency": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/faf45b9a-2e58-11e6-8a84-bae500000055",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                  "type": "currency",
                  "mediaType": "application/json"
                }
              }
            }
          }'  
```

> Response 200 (application/json)
Удачный запрос. Результат - JSON представление обновленного Договора.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/73fa8fb0-0ac5-11e6-9464-e4de0000000b",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
    "type": "contract",
    "mediaType": "application/json"
  },
  "id": "73fa8fb0-0ac5-11e6-9464-e4de0000000b",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-04-25 12:22:17",
  "name": "666_02",
  "description": "Договор с контрагентом ООО Поставщик",
  "code": "code333",
  "externalCode": "exCode333",
  "archived": false,
  "moment": "2017-02-25 12:03:19",
  "sum": 0,
  "contractType": "Sales",
  "ownAgent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/342dc6f5-0bbb-11e6-d219-b9d90000004e/accounts/342e096d-0bbb-11e6-d219-b9d90000004f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/342dc6f5-0bbb-11e6-d219-b9d90000004e/accounts/342e096d-0bbb-11e6-d219-b9d90000004f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/faf45b9a-2e58-11e6-8a84-bae500000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  }
```

> Пример запроса на обновление отдельного Договора с телом запроса, содержащим доп. поля.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/contract/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "123_456",
            "ownAgent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "contractType": "Sales",
            "code": "не код 333",
            "externalCode": "exC22ode333",
            "moment": "2019-03-15 21:03:19",
            "description": "Новый договор",
            "attributes": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": false
              }
            ]
          }'  
```

> Response 200 (application/json)
Удачный запрос. Результат - JSON представление обновленного Договора.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/7c0c5b6d-12d5-11e6-9464-e4de0000000c",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
    "type": "contract",
    "mediaType": "application/json"
  },
  "id": "7c0c5b6d-12d5-11e6-9464-e4de0000000c",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-05-05 18:27:44",
  "name": "123_456",
  "description": "Новый Договор",
  "code": "не код 333",
  "externalCode": "exC22ode333",
  "archived": false,
  "moment": "2019-03-15 21:03:19",
  "sum": 0,
  "contractType": "Sales",
  "ownAgent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "25b6f76c-12d5-11e6-9464-e4de00000068",
      "name": "AttributeName1",
      "type": "boolean",
      "value": false
    }
  ],
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts/3a30e844-016f-11e6-9464-e4de00000068",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078/accounts/9794f7a0-f689-11e5-8a84-bae500000079",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  }
}
```

