## Приемка
Средствами JSON API можно создавать и обновлять сведения об Приемках, запрашивать списки Приемок и сведения по отдельным Приемкам. Позициями Приемок можно управлять как в составе отдельной Приемки, так и отдельно - с помощью специальных ресурсов для управления позициями Приемки. Кодом сущности для Приемки в составе JSON API является ключевое слово **supply**. Больше об Приемках и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по  [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203325563-%D0%9F%D1%80%D0%B8%D1%91%D0%BC%D0%BA%D0%B0-%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2).
### Приемки 
#### Атрибуты сущности
+ **meta** - [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) об Приемке
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **syncId** - ID синхронизации. После заполнения недоступен для изменения.
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **deleted** - Момент последнего удаления сущности `Только для чтения`
+ **name** - номер Приемки
+ **description** - Комментарий Приемки
+ **externalCode** - Внешний код Приемки
+ **moment** - Дата Приемки
+ **applicable** - Отметка о проведении
+ **vatEnabled** - Учитывается ли НДС
+ **vatIncluded** - Включен ли НДС в цену
+ **sum** - Сумма Приемки в копейках `Только для чтения`
+ **rate** - Валюта
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) `Необходимое`
+ **agent** - Ссылка на контрагента в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) `Необходимое`
+ **store** - Ссылка на склад в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) `Необходимое`
+ **contract** - Ссылка на договор в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **project** - Ссылка на проект в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **state** - Статус Приемки в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **organizationAccount** - Ссылка на счет вашего юрлица в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **agentAccount** - Ссылка на счет контрагента в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **attributes** - Коллекция доп. полей в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
<br>Поля при expand'е:</br>
  - **name** - номер документа
  - **moment** - дата печати
  - **href** - ссылка на файл печатной формы
  - **fileName** - название файла печатной формы
  - **updated** - дата последнего изменения
+ **created** - Дата создания `Только для чтения`
+ **vatSum** - Сумма НДС `Только для чтения`
+ **positions** - Ссылка на позиции в Приемке в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **overhead** - Накладные расходы. Если Позиции Приемки не заданы, то накладные расходы нельзя задать
  - **sum** - сумма накладных расходов
  - **distribution** - Распределение накладных расходов `` -> `[по весу, по объему, по цене]`
+ **payedSum** - Сумма исходящих платежей по приемке
+ **incomingNumber** - Входящий номер
+ **incomingDate** - Входящая дата

#### Связи с другими документами
+ **purchaseOrder** - Ссылка на связанный заказ поставщику в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **factureIn** - Ссылка на Счет-фактура полученный, с которым связана эта Приемка в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **invoicesIn** - Массив ссылок на связанные счета поставщиков в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **payments** - Массив ссылок на связанные платежи в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **returns** - Массив ссылок на связанные возвраты в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)

#### Позиции Приемки
Позиции Приемки - это список товаров/услуг/модификаций/серий.
Объект позиции Приемки содержит следующие поля:

+ **id** - ID позиции в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **quantity** - Количество товаров/услуг данного вида в позиции. Если позиция - товар, у которого включен учет по серийным номерам, то значение в этом поле всегда будет равно количеству серийных номеров для данной позиции в документе.
+ **price** - Цена товара/услуги в копейках
+ **discount** - Процент скидки или наценки. Наценка указывается отрицательным числом, т.е. -10 создаст наценку в 10%
+ **vat** - НДС, которым облагается текущая позиция
+ **assortment** - Ссылка на товар/услугу/серию/модификацию, которую представляет собой позиция, в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **pack** - Упаковка товара
+ **things** - Серийные номера
+ **gtd** - ГТД
+ **country** - Ссылка на страну в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
Значение данного атрибута игнорируется, если товар позиции не находится на серийном учете.
В ином случае количество товаров в позиции будет равно количеству серийных номеров, переданных в значении атрибута.

С позициями можно работать с помощью [специальных ресурсов для управления позициями Приемки](../documents/#dokumenty-priemka-pozicii-priemki),
а также в составе отдельной Приемки. При работе в составе отдельной Приемки,
вы можете отправлять запросы на создание отдельной Приемки с включенным в тело запроса
массивом позиций Приемки. Если количество позиций превышает максимально допустимое, то для
дальнейшего пополнения позиций нужно будет работать со специальным ресурсом "Позиции Приемки".
Также, при работе в составе отдельной Приемки, можно отправлять запросы на обновление списка позиций
с включенным в тело запроса массивом позиций Приемки. При этом важно помнить, что коллекция позиций будет
восприниматься как "все позиции Приемки" и полностью заменит уже существующую коллекцию при обновлении объекта - лишние
позиции будут удалены, новые добавлены, существующие - изменены.
+ **overhead** - Накладные расходы по позиции.

О работе с доп. полями Приемок можно прочитать [здесь](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)


### Получить список Приемок 
Запрос всех Приемок на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

- **meta** [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) о выдаче,
- **context** - [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой Приемки.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|
|search |  `string` (optional) *Example: 0001* URL Параметр для поиска по имени документа. Фильтр документов по указанной поисковой строке. Фильтрация происходит по полю name.|

> Получить список Приемок

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/supply"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Приемок.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
    "type": "supply",
    "mediaType": "application/json",
    "size": 3,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/a3a404e4-2e5d-11e6-8a84-bae5000000fd",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
        "type": "supply",
        "mediaType": "application/json"
      },
      "id": "a3a404e4-2e5d-11e6-8a84-bae5000000fd",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-06-27 10:48:47",
      "name": "00001",
      "externalCode": "0ULmxwN1jHJwT9nYPawwO2",
      "moment": "2016-06-10 09:26:00",
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
      "sum": 16136135600,
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/faf44002-2e58-11e6-8a84-bae500000053",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "organizationAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "vatEnabled": true,
      "vatIncluded": true,
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/a3a404e4-2e5d-11e6-8a84-bae5000000fd/positions",
          "type": "supplyposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "payedSum": 0,
      "incomingDate": "2016-06-04 00:00:00"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/b1008773-313f-11e6-8a84-bae500000089",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
        "type": "supply",
        "mediaType": "application/json"
      },
      "id": "b1008773-313f-11e6-8a84-bae500000089",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-06-13 11:20:30",
      "name": "00002",
      "externalCode": "zDCH0byNj4OtLFybETa560",
      "moment": "2016-06-13 11:20:00",
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
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/faf44002-2e58-11e6-8a84-bae500000053",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "organizationAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "vatEnabled": true,
      "vatIncluded": true,
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/b1008773-313f-11e6-8a84-bae500000089/positions",
          "type": "supplyposition",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "payedSum": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/f39a60f5-313f-11e6-8a84-bae5000000b4",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
        "type": "supply",
        "mediaType": "application/json"
      },
      "id": "f39a60f5-313f-11e6-8a84-bae5000000b4",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-06-15 12:22:08",
      "name": "00003",
      "externalCode": "M69h5veIhqsaDAZI88LUy0",
      "moment": "2016-06-13 11:21:00",
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
      "sum": 16000,
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/faf44002-2e58-11e6-8a84-bae500000053",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "organizationAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "vatEnabled": true,
      "vatIncluded": true,
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/f39a60f5-313f-11e6-8a84-bae5000000b4/positions",
          "type": "supplyposition",
          "mediaType": "application/json",
          "size": 3,
          "limit": 1000,
          "offset": 0
        }
      },
      "payedSum": 0
    }
  ]
}
```

### Создать Приемку
Запрос на создание новой Приемки.
Обязательные для создания поля:

+ **name** - номер Приемки (номер)
+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **agent** - Ссылка на контрагента (покупателя) в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **store** - Ссылка на склад в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)


> Пример создания новой Приемки.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/supply"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "404050",
            "description": "Приемка от 12.12.12",
            "code": "776762312",
            "externalCode": "77sea2as12",
            "moment": "2012-12-12 12:12:12",
            "applicable": true,
            "vatEnabled": false,
            "vatIncluded": false,
            "rate": {
              "currency": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/faf45b9a-2e58-11e6-8a84-bae500000055",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                  "type": "currency",
                  "mediaType": "application/json"
                }
              },
              "value": 71
            },
            "organization": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "agent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "counterparty",
                "mediaType": "application/json"
              }
            },
            "store": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "state": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/states/918e5abd-3f66-11e6-8a84-bae500000083",
                "type": "state",
                "mediaType": "application/json"
              }
            },
            "incomingNumber": "12412412",
            "incomingDate": "2012-12-12 12:12:12"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Приемки.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/f106723d-3f66-11e6-8a84-bae500000037",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
    "type": "supply",
    "mediaType": "application/json"
  },
  "id": "f106723d-3f66-11e6-8a84-bae500000037",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-07-01 11:36:44",
  "name": "404050",
  "description": "Приемка от 12.12.12",
  "code": "776762312",
  "externalCode": "77sea2as12",
  "moment": "2012-12-12 11:12:12",
  "applicable": true,
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
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/states/918e5abd-3f66-11e6-8a84-bae500000083",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004/accounts/147c3231-32ca-11e6-8a84-bae500000005",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "vatEnabled": false,
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/f106723d-3f66-11e6-8a84-bae500000037/positions",
      "type": "supplyposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "payedSum": 0,
  "incomingNumber": "12412412",
  "incomingDate": "2012-12-12 11:12:12"
}
```

> Пример запроса на создание Приемки с доп. полями.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/supply"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "404050124",
            "description": "Приемка от 909090",
            "code": "776762312",
            "externalCode": "77sea2as12",
            "moment": "2016-02-22 22:22:53",
            "applicable": true,
            "vatEnabled": true,
            "vatIncluded": true,
            "rate": {
              "currency": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/faf45b9a-2e58-11e6-8a84-bae500000055",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                  "type": "currency",
                  "mediaType": "application/json"
                }
              },
              "value": 71
            },
            "organization": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "agent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "counterparty",
                "mediaType": "application/json"
              }
            },
            "store": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "state": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/states/918e5abd-3f66-11e6-8a84-bae500000083",
                "type": "state",
                "mediaType": "application/json"
              }
            },
            "incomingNumber": "12412412",
            "incomingDate": "2012-12-12 12:12:12",
            "attributes": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/a31685ae-3f62-11e6-8a84-bae50000007b",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "2017-02-22 02:12:53"
              },
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/c16fd9aa-3f62-11e6-8a84-bae50000007e",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": 47
              },
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/c16fe013-3f62-11e6-8a84-bae50000007f",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "Пример удачной сделки"
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Приемки.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/ad890c61-3f67-11e6-8a84-bae50000003b",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
    "type": "supply",
    "mediaType": "application/json"
  },
  "id": "ad890c61-3f67-11e6-8a84-bae50000003b",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-07-01 11:42:00",
  "name": "404050124",
  "description": "Приемка от 909090",
  "code": "776762312",
  "externalCode": "77sea2as12",
  "moment": "2016-02-22 22:22:53",
  "applicable": true,
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
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/states/918e5abd-3f66-11e6-8a84-bae500000083",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004/accounts/147c3231-32ca-11e6-8a84-bae500000005",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/a31685ae-3f62-11e6-8a84-bae50000007b",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "a31685ae-3f62-11e6-8a84-bae50000007b",
      "name": "AttributeName1",
      "type": "time",
      "value": "2017-02-22 02:12:53"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/c16fd9aa-3f62-11e6-8a84-bae50000007e",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c16fd9aa-3f62-11e6-8a84-bae50000007e",
      "name": "AttributeName2",
      "type": "long",
      "value": 47
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/c16fe013-3f62-11e6-8a84-bae50000007f",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c16fe013-3f62-11e6-8a84-bae50000007f",
      "name": "AttributeName3",
      "type": "text",
      "value": "Пример удачной сделки"
    }
  ],
  "vatEnabled": true,
  "vatIncluded": true,
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/ad890c61-3f67-11e6-8a84-bae50000003b/positions",
      "type": "supplyposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "payedSum": 0,
  "incomingNumber": "12412412",
  "incomingDate": "2012-12-12 11:12:12"
}
```

> Пример запроса на создание Приемки с позициями в теле запроса.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/supply"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "2000124",
            "description": "Приемка от 909090",
            "code": "776762312",
            "externalCode": "77sea2as12",
            "moment": "2016-02-22 22:22:53",
            "applicable": true,
            "vatEnabled": true,
            "vatIncluded": true,
            "rate": {
              "currency": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/faf45b9a-2e58-11e6-8a84-bae500000055",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                  "type": "currency",
                  "mediaType": "application/json"
                }
              },
              "value": 71
            },
            "organization": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "agent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "counterparty",
                "mediaType": "application/json"
              }
            },
            "store": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "state": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/states/918e5abd-3f66-11e6-8a84-bae500000083",
                "type": "state",
                "mediaType": "application/json"
              }
            },
            "incomingNumber": "12412412",
            "incomingDate": "2012-12-12 12:12:12",
            "attributes": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/a31685ae-3f62-11e6-8a84-bae50000007b",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "2017-02-22 02:12:53"
              },
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/c16fd9aa-3f62-11e6-8a84-bae50000007e",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": 47
              },
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/c16fe013-3f62-11e6-8a84-bae50000007f",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "Пример удачной сделки"
              }
            ],
            "positions": [
              {
                "quantity": 10,
                "price": 100,
                "discount": 0,
                "vat": 0,
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a7daa6b-3c64-11e6-8a84-bae50000000a",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                    "type": "variant",
                    "mediaType": "application/json"
                  }
                },
                "overhead": 10
              },
              {
                "quantity": 20,
                "price": 200,
                "discount": 0,
                "vat": 21,
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                    "type": "variant",
                    "mediaType": "application/json"
                  }
                },
                "overhead": 20
              }
            ]
          }
'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Приемки.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/5b493f0e-3f68-11e6-8a84-bae500000042",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
    "type": "supply",
    "mediaType": "application/json"
  },
  "id": "5b493f0e-3f68-11e6-8a84-bae500000042",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-07-01 11:46:52",
  "name": "2000124",
  "description": "Приемка от 909090",
  "code": "776762312",
  "externalCode": "77sea2as12",
  "moment": "2016-02-22 22:22:53",
  "applicable": true,
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
  "sum": 5000,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/states/918e5abd-3f66-11e6-8a84-bae500000083",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004/accounts/147c3231-32ca-11e6-8a84-bae500000005",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/a31685ae-3f62-11e6-8a84-bae50000007b",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "a31685ae-3f62-11e6-8a84-bae50000007b",
      "name": "AttributeName1",
      "type": "time",
      "value": "2017-02-22 02:12:53"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/c16fd9aa-3f62-11e6-8a84-bae50000007e",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c16fd9aa-3f62-11e6-8a84-bae50000007e",
      "name": "AttributeName2",
      "type": "long",
      "value": 47
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/c16fe013-3f62-11e6-8a84-bae50000007f",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c16fe013-3f62-11e6-8a84-bae50000007f",
      "name": "AttributeName3",
      "type": "text",
      "value": "Пример удачной сделки"
    }
  ],
  "vatEnabled": true,
  "vatIncluded": true,
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/5b493f0e-3f68-11e6-8a84-bae500000042/positions",
      "type": "supplyposition",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "payedSum": 0,
  "incomingNumber": "12412412",
  "incomingDate": "2012-12-12 11:12:12",
  "overhead": {
    "sum": 30,
    "distribution": "price"
  }
}
```

### Массовое создание и обновление Приемок 
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Приемок.
В теле запроса нужно передать массив, содержащий JSON представления Приемок, которые вы хотите создать или обновить.
Обновляемые Приемки должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Приемок

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/supply"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "404050",
              "description": "Приемка от 12.12.12",
              "code": "776762312",
              "externalCode": "77sea2as12",
              "moment": "2012-12-12 12:12:12",
              "applicable": true,
              "vatEnabled": false,
              "vatIncluded": false,
              "rate": {
                "currency": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/faf45b9a-2e58-11e6-8a84-bae500000055",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json"
                  }
                },
                "value": 71
              },
              "organization": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "agent": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                  "type": "counterparty",
                  "mediaType": "application/json"
                }
              },
              "store": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type": "store",
                  "mediaType": "application/json"
                }
              },
              "state": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/states/918e5abd-3f66-11e6-8a84-bae500000083",
                  "type": "state",
                  "mediaType": "application/json"
                }
              },
              "incomingNumber": "12412412",
              "incomingDate": "2012-12-12 12:12:12"
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/5b493f0e-3f68-11e6-8a84-bae500000042",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
                "type": "supply",
                "mediaType": "application/json"
              },
              "name": "2000700",
              "description": "Приемка от толстого контрагента",
              "code": "1241242ы421",
              "externalCode": "keksea2as12",
              "moment": "2011-12-12 11:11:11",
              "applicable": false,
              "vatEnabled": true,
              "vatIncluded": false,
              "rate": {
                "currency": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/cdbc62de-3f68-11e6-8a84-bae500000050",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json"
                  }
                },
                "value": 33
              },
              "organization": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "agent": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                  "type": "counterparty",
                  "mediaType": "application/json"
                }
              },
              "store": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type": "store",
                  "mediaType": "application/json"
                }
              },
              "state": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/states/918e5abd-3f66-11e6-8a84-bae500000083",
                  "type": "state",
                  "mediaType": "application/json"
                }
              },
              "incomingNumber": "12412412",
              "incomingDate": "2012-12-12 12:12:12",
              "attributes": [
                {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/a31685ae-3f62-11e6-8a84-bae50000007b",
                    "type": "attributemetadata",
                    "mediaType": "application/json"
                  },
                  "value": "2082-02-22 02:12:53"
                },
                {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/c16fd9aa-3f62-11e6-8a84-bae50000007e",
                    "type": "attributemetadata",
                    "mediaType": "application/json"
                  },
                  "value": "Пример крайне удачной сделки"
                }
              ],
              "positions": [
                {
                  "quantity": 101,
                  "price": 190,
                  "discount": 0,
                  "vat": 0,
                  "assortment": {
                    "meta": {
                      "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a7daa6b-3c64-11e6-8a84-bae50000000a",
                      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                      "type": "variant",
                      "mediaType": "application/json"
                    }
                  }
                },
                {
                  "quantity": 20,
                  "price": 2,
                  "discount": 0,
                  "vat": 21,
                  "assortment": {
                    "meta": {
                      "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
                      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                      "type": "variant",
                      "mediaType": "application/json"
                    }
                  }
                }
              ]
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Приемок.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/f106723d-3f66-11e6-8a84-bae500000037",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
      "type": "supply",
      "mediaType": "application/json"
    },
    "id": "f106723d-3f66-11e6-8a84-bae500000037",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-07-01 11:36:44",
    "name": "404050",
    "description": "Приемка от 12.12.12",
    "code": "776762312",
    "externalCode": "77sea2as12",
    "moment": "2012-12-12 11:12:12",
    "applicable": true,
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
    "sum": 0,
    "organization": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "store": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "state": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/states/918e5abd-3f66-11e6-8a84-bae500000083",
        "type": "state",
        "mediaType": "application/json"
      }
    },
    "organizationAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "agentAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004/accounts/147c3231-32ca-11e6-8a84-bae500000005",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "vatEnabled": false,
    "created": "2007-02-07 17:16:41",
    "positions": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/f106723d-3f66-11e6-8a84-bae500000037/positions",
        "type": "supplyposition",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    },
    "payedSum": 0,
    "incomingNumber": "12412412",
    "incomingDate": "2012-12-12 11:12:12"
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/5b493f0e-3f68-11e6-8a84-bae500000042",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
      "type": "supply",
      "mediaType": "application/json"
    },
    "id": "5b493f0e-3f68-11e6-8a84-bae500000042",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-07-01 11:51:34",
    "name": "2000700",
    "description": "Приемка от толстого контрагента",
    "code": "1241242ы421",
    "externalCode": "keksea2as12",
    "moment": "2011-12-12 10:11:11",
    "applicable": false,
    "rate": {
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/cdbc62de-3f68-11e6-8a84-bae500000050",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      },
      "value": 63
    },
    "sum": 19238,
    "organization": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "store": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "state": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/states/918e5abd-3f66-11e6-8a84-bae500000083",
        "type": "state",
        "mediaType": "application/json"
      }
    },
    "organizationAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "agentAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004/accounts/147c3231-32ca-11e6-8a84-bae500000005",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "attributes": [
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/a31685ae-3f62-11e6-8a84-bae50000007b",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "a31685ae-3f62-11e6-8a84-bae50000007b",
        "name": "AttributeName1",
        "type": "time",
        "value": "2082-02-22 02:12:53"
      },
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/c16fd9aa-3f62-11e6-8a84-bae50000007e",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "c16fd9aa-3f62-11e6-8a84-bae50000007e",
        "name": "AttributeName2",
        "type": "long",
        "value": 47
      },
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/c16fe013-3f62-11e6-8a84-bae50000007f",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "c16fe013-3f62-11e6-8a84-bae50000007f",
        "name": "AttributeName3",
        "type": "text",
        "value": "Пример крайне удачной сделки"
      }
    ],
    "vatEnabled": true,
    "vatIncluded": false,
    "created": "2007-02-07 17:16:41",
    "positions": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/5b493f0e-3f68-11e6-8a84-bae500000042/positions",
        "type": "supplyposition",
        "mediaType": "application/json",
        "size": 2,
        "limit": 1000,
        "offset": 0
      }
    },
    "payedSum": 0,
    "incomingNumber": "12412412",
    "incomingDate": "2012-12-12 11:12:12"
  }
]

```

### Удалить Приемку

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Приемки.|

> Запрос на удаление Приемки с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/supply/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Приемки.

### Массовое удаление Приемок

В теле запроса нужно передать массив, содержащий JSON метаданных Приемок, которые вы хотите удалить.


> Запрос на массовое удаление Приемок. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/supply/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
            "type": "supply",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
            "type": "supply",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Приемок.

```json
[
  {
    "info":"Сущность 'supply' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'supply' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
``` 

### Метаданные Приемок 
#### Метаданные Приемок 
Запрос на получение метаданных Приемок. Результат - объект JSON, включающий в себя:

+ **meta** - Ссылка на метаданные Приемок
+ **attributes** - Массив объектов доп. полей Приемок в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **states** - Массив статусов Приемок
+ **createShared** - создавать новые Приемки с меткой "Общий"

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Приемок 

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Приемок.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/a31685ae-3f62-11e6-8a84-bae50000007b",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "a31685ae-3f62-11e6-8a84-bae50000007b",
      "name": "AttributeName1",
      "type": "time",
      "required": false
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/c16fd9aa-3f62-11e6-8a84-bae50000007e",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c16fd9aa-3f62-11e6-8a84-bae50000007e",
      "name": "AttributeName2",
      "type": "long",
      "required": false
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/c16fe013-3f62-11e6-8a84-bae50000007f",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c16fe013-3f62-11e6-8a84-bae50000007f",
      "name": "AttributeName3",
      "type": "text",
      "required": false
    }
  ],
  "createShared": false
}

```

### Шаблон приемки 
#### Шаблон приемки 
> Запрос на получение предзаполненого стандартными значениями шаблона приемки без связи с каким-либо документом.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/supply/new"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d ''  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненной приемки.

```json
{
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/46073d61-ca1f-11e7-6a80-332a0000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=46073d61-ca1f-11e7-6a80-332a0000002a"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/452fb22f-ca1f-11e7-6a80-332a00000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "name": "",
  "moment": "2017-11-22 19:05:33",
  "applicable": true,
  "sum": 0,
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/463f8970-ca1f-11e7-6a80-332a00000053",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=463f8970-ca1f-11e7-6a80-332a00000053"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/463a706e-ca1f-11e7-6a80-332a00000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=463a706e-ca1f-11e7-6a80-332a00000051"
    }
  },
  "documents": {
    "rows": []
  },
  "positions": {
    "rows": []
  },
  "vatEnabled": true,
  "vatIncluded": true,
  "payedSum": 0
}
```

### Шаблон приемки на основе 
Запрос на получение предзаполненной приемки на основе заказа поставщику.
В результате запроса, будет создан предзаполненный шаблон приемки на основе переданного
заказа поставщику.
> Запрос на создание приемки на основе заказа поставщику.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/supply/new"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "purchaseOrder": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/purchaseorder/22b4caaa-3f74-11e6-8a84-bae500000069",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/purchaseorder/metadata",
                "type": "purchaseorder",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненной приемки.

```json
{
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/46073d61-ca1f-11e7-6a80-332a0000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=46073d61-ca1f-11e7-6a80-332a0000002a"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/452fb22f-ca1f-11e7-6a80-332a00000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "name": "",
  "moment": "2017-11-22 16:16:29",
  "applicable": true,
  "sum": 0,
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/463f8970-ca1f-11e7-6a80-332a00000053",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=463f8970-ca1f-11e7-6a80-332a00000053"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/463a706e-ca1f-11e7-6a80-332a00000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=463a706e-ca1f-11e7-6a80-332a00000051"
    }
  },
  "documents": {
    "rows": []
  },
  "positions": {
    "rows": [
      {
        "quantity": 1,
        "price": 1000,
        "discount": 0,
        "vat": 0,
        "assortment": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/b5d94dd1-cab0-11e7-6a80-332a00000011",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
            "type": "variant",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
          }
        },
        "overhead": 0
      }
    ]
  },
  "vatEnabled": true,
  "vatIncluded": true,
  "payedSum": 0,
  "invoicesIn": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoicein/dbf1e704-cf7b-11e7-6a80-332a00000000",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoicein/metadata",
        "type": "invoicein",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#invoicein/edit?id=dbf1e704-cf7b-11e7-6a80-332a00000000"
      }
    }
  ],
  "purchaseOrder": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/purchaseorder/22b4caaa-3f74-11e6-8a84-bae500000069",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/purchaseorder/metadata",
      "type": "purchaseorder",
      "mediaType": "application/json"
    }
  }
}
```

> Запрос на создание приемки на основе счета поставщика.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/supply/new"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "invoicesIn": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoicein/dbf1e704-cf7b-11e7-6a80-332a00000000",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoicein/metadata",
                  "type": "invoicein",
                  "mediaType": "application/json",
                  "uuidHref": "https://online.moysklad.ru/app/#invoicein/edit?id=dbf1e704-cf7b-11e7-6a80-332a00000000"
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненной приемки.

```json
{
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/46073d61-ca1f-11e7-6a80-332a0000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=46073d61-ca1f-11e7-6a80-332a0000002a"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/452fb22f-ca1f-11e7-6a80-332a00000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "name": "",
  "moment": "2017-11-22 16:16:29",
  "applicable": true,
  "sum": 0,
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/463f8970-ca1f-11e7-6a80-332a00000053",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=463f8970-ca1f-11e7-6a80-332a00000053"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/463a706e-ca1f-11e7-6a80-332a00000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=463a706e-ca1f-11e7-6a80-332a00000051"
    }
  },
  "documents": {
    "rows": []
  },
  "positions": {
    "rows": [
      {
        "quantity": 1,
        "price": 1000,
        "discount": 0,
        "vat": 0,
        "assortment": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/b5d94dd1-cab0-11e7-6a80-332a00000011",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
            "type": "variant",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
          }
        },
        "overhead": 0
      }
    ]
  },
  "vatEnabled": true,
  "vatIncluded": true,
  "payedSum": 0,
  "invoicesIn": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoicein/dbf1e704-cf7b-11e7-6a80-332a00000000",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoicein/metadata",
        "type": "invoicein",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#invoicein/edit?id=dbf1e704-cf7b-11e7-6a80-332a00000000"
      }
    }
  ]
}
```

### Отдельное доп. поле
  
### Отдельное доп. поле

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Доп. поля.|
 
> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/a31685ae-3f62-11e6-8a84-bae50000007b",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "a31685ae-3f62-11e6-8a84-bae50000007b",
  "name": "AttributeName1",
  "type": "time",
  "required": false
}
```

### Приемка

### Получить Приемку

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Приемки.|
 
> Запрос на получение отдельной Приемки с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/supply/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Приемки.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/a3a404e4-2e5d-11e6-8a84-bae5000000fd",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
    "type": "supply",
    "mediaType": "application/json"
  },
  "id": "a3a404e4-2e5d-11e6-8a84-bae5000000fd",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-06-27 10:48:47",
  "name": "00001",
  "externalCode": "0ULmxwN1jHJwT9nYPawwO2",
  "moment": "2016-06-10 09:26:00",
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
  "sum": 16136135600,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/faf44002-2e58-11e6-8a84-bae500000053",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "vatEnabled": true,
  "vatIncluded": true,
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/a3a404e4-2e5d-11e6-8a84-bae5000000fd/positions",
      "type": "supplyposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "payedSum": 0,
  "incomingDate": "2016-06-04 00:00:00"
}

```

### Изменить Приемку 
Запрос на обновление Приемки с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Приемки, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Приемки](../documents/#dokumenty-priemka).
При обновлении полей **organization** и **agent** нужно также обновить поля **organizationAccount** и
**agentAccount** соответственно, иначе произойдет ошибка.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Приемки.|

> Пример запроса на обновление отдельной Приемки.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/supply/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "2000700",
            "description": "Приемка от толстого контрагента",
            "code": "1241242ы421",
            "externalCode": "keksea2as12",
            "moment": "2011-12-12 11:11:11",
            "applicable": false,
            "vatEnabled": true,
            "vatIncluded": false,
            "rate": {
              "currency": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/cdbc62de-3f68-11e6-8a84-bae500000050",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                  "type": "currency",
                  "mediaType": "application/json"
                }
              },
              "value": 33
            },
            "organization": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "agent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "counterparty",
                "mediaType": "application/json"
              }
            },
            "store": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "state": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/states/918e5abd-3f66-11e6-8a84-bae500000083",
                "type": "state",
                "mediaType": "application/json"
              }
            },
            "incomingNumber": "12412412",
            "incomingDate": "2012-12-12 12:12:12",
            "attributes": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/a31685ae-3f62-11e6-8a84-bae50000007b",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "2082-02-22 02:12:53"
              },
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/c16fd9aa-3f62-11e6-8a84-bae50000007e",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "Пример крайне удачной сделки"
              }
            ],
            "positions": [
              {
                "quantity": 101,
                "price": 190,
                "discount": 0,
                "vat": 0,
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a7daa6b-3c64-11e6-8a84-bae50000000a",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                    "type": "variant",
                    "mediaType": "application/json"
                  }
                }
              },
              {
                "quantity": 20,
                "price": 2,
                "discount": 0,
                "vat": 21,
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                    "type": "variant",
                    "mediaType": "application/json"
                  }
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Приемки.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/5b493f0e-3f68-11e6-8a84-bae500000042",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
    "type": "supply",
    "mediaType": "application/json"
  },
  "id": "5b493f0e-3f68-11e6-8a84-bae500000042",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-07-01 11:51:34",
  "name": "2000700",
  "description": "Приемка от толстого контрагента",
  "code": "1241242ы421",
  "externalCode": "keksea2as12",
  "moment": "2011-12-12 10:11:11",
  "applicable": false,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/cdbc62de-3f68-11e6-8a84-bae500000050",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    },
    "value": 63
  },
  "sum": 19238,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/states/918e5abd-3f66-11e6-8a84-bae500000083",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004/accounts/147c3231-32ca-11e6-8a84-bae500000005",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/a31685ae-3f62-11e6-8a84-bae50000007b",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "a31685ae-3f62-11e6-8a84-bae50000007b",
      "name": "AttributeName1",
      "type": "time",
      "value": "2082-02-22 02:12:53"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/c16fd9aa-3f62-11e6-8a84-bae50000007e",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c16fd9aa-3f62-11e6-8a84-bae50000007e",
      "name": "AttributeName2",
      "type": "long",
      "value": 47
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata/attributes/c16fe013-3f62-11e6-8a84-bae50000007f",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c16fe013-3f62-11e6-8a84-bae50000007f",
      "name": "AttributeName3",
      "type": "text",
      "value": "Пример крайне удачной сделки"
    }
  ],
  "vatEnabled": true,
  "vatIncluded": false,
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/5b493f0e-3f68-11e6-8a84-bae500000042/positions",
      "type": "supplyposition",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "payedSum": 0,
  "incomingNumber": "12412412",
  "incomingDate": "2012-12-12 11:12:12"
}
```

### Позиции Приемки 
Отдельный ресурс для управления позициями Приемки. С его помощью вы можете управлять позициями большого документа, количество строк в котором превышает лимит на количество строк, сохраняемых вместе с документом. Этот лимит равен 100. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](../#mojsklad-json-api-obschie-swedeniq-rabota-s-poziciqmi-dokumentow).

### Получить позиции Приемки 
Запрос на получение списка всех позиций данной Приемки.

- **meta** [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) о выдаче,
- **context** - [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой позиции Приемки.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Приемки.|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить позиции Приемки

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/supply/7944ef04-f831-11e5-7a69-971500188b19/positions"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций отдельной Приемки.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/7944ef04-f831-11e5-7a69-971500188b19/positions",
    "type": "supplyposition",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/7944ef04-f831-11e5-7a69-971500188b19/positions/b100a7fc-313f-11e6-8a84-bae50000008a",
        "type": "supplyposition",
        "mediaType": "application/json"
      },
      "id": "b100a7fc-313f-11e6-8a84-bae50000008a",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 1241,
      "price": 0,
      "discount": 0,
      "vat": 0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/328b0454-2e62-11e6-8a84-bae500000118",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
        }
      },
      "gtd": {
        "name": "12345678/121217/1212321"
      },
      "country": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/40e6f69a-991c-4fbc-8be9-d0d906cad180",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
          "type": "country",
          "mediaType": "application/json"
        }
      },
      "overhead": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/7944ef04-f831-11e5-7a69-971500188b19/positions/b100b367-313f-11e6-8a84-bae50000008b",
        "type": "supplyposition",
        "mediaType": "application/json"
      },
      "id": "b100b367-313f-11e6-8a84-bae50000008b",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 700,
      "price": 0,
      "discount": 0,
      "vat": 0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/20485cfd-2e62-11e6-8a84-bae500000112",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=392c045c-2842-11e9-ac12-000a00000002"
        }
      },
      "gtd": {
        "name": "12345678/121217/1242523"
      },
      "country": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/3b1e1f15-2842-11e9-ac12-000c0000002f",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
          "type": "country",
          "mediaType": "application/json"
        }
      },
      "overhead": 0
    }
  ]
}
```

### Создать позицию Приемки 
Запрос на создание новой позиции в Приемке.
Для успешного создания необходимо в теле запроса указать следующие поля:

+ **assortment** - Ссылка на товар/услугу/серию/модификацию, которую представляет собой позиция.
Также можно указать поле с именем **service**, **consignment**, **variant** в соответствии с тем,
чем является указанная позиция. Подробнее об этом поле можно прочитать в описании [позиции Приемки](../documents/#dokumenty-priemka-priemki-pozicii-priemki)
+ **quantity** - Количество указанной позиции. Должно быть положительным, иначе возникнет ошибка.
Одновременно можно создать как одну так и несколько позиций Приемки. Все созданные данным запросом позиции
будут добавлены к уже существующим.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Приемки.|

> Пример создания одной позиции в Приемке.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/supply/7944ef04-f831-11e5-7a69-971500188b19/positions"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "quantity": 44,
            "price": 700,
            "discount": 23,
            "vat": 10,
            "assortment": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a7daa6b-3c64-11e6-8a84-bae50000000a",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                "type": "variant",
                "mediaType": "application/json"
              }
            },
            "country": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/000d77a9-3000-4f81-a995-6b9cffdee1d2",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
                "type": "country",
                "mediaType": "application/json"
              }
            },
            "overhead": 300
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной позиции отдельной Приемки.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/7944ef04-f831-11e5-7a69-971500188b19/positions/e33f101b-3f64-11e6-8a84-bae500000025",
      "type": "supplyposition",
      "mediaType": "application/json"
    },
    "id": "e33f101b-3f64-11e6-8a84-bae500000025",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 44,
    "price": 700,
    "discount": 23,
    "vat": 10,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a7daa6b-3c64-11e6-8a84-bae50000000a",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
      }
    },
    "country": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/000d77a9-3000-4f81-a995-6b9cffdee1d2",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type": "country",
        "mediaType": "application/json"
      }
    },
    "overhead": 0
  }
]
```

> Пример создания сразу нескольких позиций в Приемке.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/supply/7944ef04-f831-11e5-7a69-971500188b19/positions"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "quantity": 44,
              "price": 700,
              "discount": 23,
              "vat": 10,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a7daa6b-3c64-11e6-8a84-bae50000000a",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                  "type": "variant",
                  "mediaType": "application/json"
                }
              },
              "country": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/000d77a9-3000-4f81-a995-6b9cffdee1d2",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
                  "type": "country",
                  "mediaType": "application/json"
                }
              },
              "overhead": 300
            },
            {
              "quantity": 3,
              "price": 3500,
              "discount": 0,
              "vat": 7,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                  "type": "variant",
                  "mediaType": "application/json"
                }
              }
            },
            {
              "quantity": 21,
              "price": 2300,
              "discount": 0,
              "vat": 21,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                  "type": "variant",
                  "mediaType": "application/json"
                }
              }
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка созданных позиций отдельной Приемки.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/7944ef04-f831-11e5-7a69-971500188b19/positions/3b5fdebd-3f65-11e6-8a84-bae50000002a",
      "type": "supplyposition",
      "mediaType": "application/json"
    },
    "id": "3b5fdebd-3f65-11e6-8a84-bae50000002a",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 44,
    "price": 700,
    "discount": 23,
    "vat": 10,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a7daa6b-3c64-11e6-8a84-bae50000000a",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
      }
    },
    "country": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/000d77a9-3000-4f81-a995-6b9cffdee1d2",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type": "country",
        "mediaType": "application/json"
      }
    },
    "overhead": 0
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/7944ef04-f831-11e5-7a69-971500188b19/positions/3b5fe7b8-3f65-11e6-8a84-bae50000002b",
      "type": "supplyposition",
      "mediaType": "application/json"
    },
    "id": "3b5fe7b8-3f65-11e6-8a84-bae50000002b",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 3,
    "price": 3500,
    "discount": 0,
    "vat": 7,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
      }
    },
    "overhead": 0
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/7944ef04-f831-11e5-7a69-971500188b19/positions/3b5ffcfd-3f65-11e6-8a84-bae50000002c",
      "type": "supplyposition",
      "mediaType": "application/json"
    },
    "id": "3b5ffcfd-3f65-11e6-8a84-bae50000002c",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 21,
    "price": 2300,
    "discount": 0,
    "vat": 21,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=392c045c-2842-11e9-ac12-000a00000002"
      }
    },
    "overhead": 0
  }
]
```

### Позиция Приемки
 
### Получить позицию

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Приемки.|
|positionID|  `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции Приемки.|
 
> Запрос на получение отдельной позиции Приемки с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/supply/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции Приемки.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
    "type": "supplyposition",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "quantity": 1241,
  "price": 0,
  "discount": 0,
  "vat": 0,
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/328b0454-2e62-11e6-8a84-bae500000118",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=392c045c-2842-11e9-ac12-000a00000002"
    }
  },
  "overhead": 0
}
```

### Изменить позицию 
Запрос на обновление отдельной позиции Приемки. Для обновления позиции нет каких-либо
 обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Приемки.|
|positionID|  `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции Приемки.|
 
> Пример запроса на обновление отдельной позиции в Приемке.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/supply/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "quantity": 700,
            "price": 2355,
            "discount": 69,
            "vat": 10,
            "assortment": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                "type": "variant",
                "mediaType": "application/json"
              }
            },
            "overhead": 2
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции Приемки.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
    "type": "supplyposition",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "quantity": 700,
  "price": 2355,
  "discount": 69,
  "vat": 10,
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
      "type": "variant",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=392c045c-2842-11e9-ac12-000a00000002"
    }
  },
  "overhead": 0
}
```

### Удалить позицию

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Приемки.|
|positionID|  `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции Приемки.|
 
> Запрос на удаление отдельной позиции Приемки с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/supply/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление позиции Приемки.
