## Розничная смена

### Розничные смены 
Средствами JSON API можно запрашивать списки Розничных смен и сведения по отдельным Розничным сменам. Кодом сущности для Розничной смены в составе JSON API является ключевое слово **retailshift**.

#### Операции
С помощью данного ресурса вы **не можете создавать или обновлять** Розничные смены. Создание новой розничной смены происходит
при выполнении [запроса на Открытие смены](https://online.moysklad.ru/api/posap/1.0/doc/index.html#pos_general-сценарий-работы-открытие-смены) через отдельный API подключения торговой точки к онлайн-сервису МойСклад **POS API 1.0**. Для совершения операции Открытие розничной смены необходимо
аутентифицироваться с правами Кассира.

#### Атрибуты смены

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**meta**               |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Розничной смены|Только для чтения|да
|**id**                 |UUID|ID Розничной смены|Только для чтения|да
|**accountId**          |UUID| ID учетной записи|Только для чтения|да
|**syncId**             |UUID|ID синхронизации. После заполнения недоступен для изменения|Только для чтения|нет
|**updated**            |DateTime|Момент последнего обновления Розничной смены|Только для чтения|да
|**deleted**            |DateTime|Момент последнего удаления Розничной смены|Только для чтения|нет
|**name**               |String(255)|Наименование Розничной смены|Только для чтения|да
|**description**        |String(4096)|Комментарий Розничной смены|Только для чтения|нет
|**externalCode**       |String(255)|Внешний код Розничной смены|Только для чтения| да
|**moment**             |DateTime|Дата смены|Только для чтения|да
|**vatEnabled**         |Boolean|Учитывается ли НДС|Только для чтения|да
|**vatIncluded**        |Boolean| Включен ли НДС в цену|Только для чтения|нет
|**owner**              |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Владелец (Сотрудник)|Только для чтения|да
|**shared**             |Boolean|Общий доступ|Только для чтения|да
|**group**              |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Отдел сотрудника|Только для чтения|да
|**organization**       |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные юрлица|Только для чтения|да
|**agent**              |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные контрагента|Только для чтения|нет
|**store**              |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные склада|Только для чтения|да
|**contract**              |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные договора|Только для чтения|нет
|**organizationAccount**|[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные счета юрлица|Только для чтения|нет
|**agentAccount**       |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные счета контрагента|Только для чтения|нет
|**attributes**         |Array(Object)|Коллекция метаданных доп. полей. [Поля объекта](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi) |Только для чтения|нет
|**files**              |MetaArray|Массив метаданных [Файлов](../dictionaries/#suschnosti-fajly) (Максимальное количество файлов - 100)|&mdash;|да|
|**created**            |DateTime|Дата создания|Только для чтения|да
|**printed**            |Boolean|Напечатан ли документ|Только для чтения|да
|**published**          |Boolean|Опубликован ли документ|Только для чтения|да
|**closeDate**          |DateTime|Дата закрытия смены|Только для чтения|нет
|**proceedsNoCash**     |Float|Выручка безнал|Только для чтения|да
|**proceedsCash**       |Float|Выручка наличными|Только для чтения|да
|**receivedNoCash**     |Float|Получено безнал|Только для чтения|да
|**receivedCash**       |Float|Получено наличными|Только для чтения|да
|**retailStore**        |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные точки продаж|Только для чтения|да
|**operations**         |Array(Object)|Коллекция метаданных связанных операций|Только для чтения|да
|**paymentOperations**  |Array(Object)|Коллекция метаданных платежных операций|Только для чтения|нет

О работе с доп. полями Розничных смен можно прочитать [здесь](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)

### Получить Розничные смены 
Запрос на получение списка всех Розничных смен на данной учетной записи.
Результат успешного запроса - JSON представление списка Розничных смен с перечисленными полями:

| Название  | Тип | Описание                    |
| --------- |:----|:----------------------------|
**meta** |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные о выдаче,
**context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.
**rows** |Array(Object)|Массив JSON объектов, представляющих собой [Розничные смены](../dictionaries/#suschnosti-valuta).

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|**limit** |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|**offset** |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить Розничные смены

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/"
  -H "Authorization: Basic <Credentials>"
```
 
> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Розничных смен.

```json
{
  "context": {
    "employee": {
      "href": "https://online.moysklad.ru/api/remap/1.2/context/employee",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift",
    "type": "retailshift",
    "mediaType": "application/json",
    "size": 5,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/0b2b2caf-055e-11e6-9464-e4de0000007c",
        "type": "retailshift",
        "mediaType": "application/json"
      },
      "id": "0b2b2caf-055e-11e6-9464-e4de0000007c",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
      "updated": "2016-04-18 15:07:12",
      "name": "00001",
      "externalCode": "iR5ZTLzfhK98uzqIFbC871",
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
      "moment": "2016-04-18 15:06:51",
      "created": "2016-08-25 19:55:00",
      "printed": true,
      "published": true,
      "vatEnabled": true,
      "vatIncluded": true,
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "organizationAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/account/3a30e844-016f-11e6-9464-e4de00000068",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "attributes": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "bb08dccf-0bd2-11e6-9464-e4de000000ae",
          "name": "AttributeName1",
          "type": "string",
          "value": "Да"
        }
      ],
      "closeDate": "2016-04-18 15:07:12",
      "proceedsNoCash": 0,
      "proceedsCash": 5100,
      "receivedNoCash": 0,
      "receivedCash": 5136,
      "retailStore": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/851f8576-f504-11e5-8a84-bae50000016c",
          "type": "retailstore",
          "mediaType": "application/json"
        }
      },
      "operations": [
        {
          "meta": {
            "href": "http://online.moysklad.ru/api/remap/1.2/entity/retaildemand/29547f06-ec69-11e7-0532-9eed0000001b",
            "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata",
            "type": "retaildemand",
            "mediaType": "application/json",
            "uuidHref": "http://online.moysklad.ru/app/#retaildemand/edit?id=29547f06-ec69-11e7-0532-9eed0000001b"
          }
        },
        {
          "meta": {
            "href": "http://online.moysklad.ru/api/remap/1.2/entity/retailsalesreturn/3395a278-ec69-11e7-0532-9eed00000022",
            "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/retailsalesreturn/metadata",
            "type": "retailsalesreturn",
            "mediaType": "application/json",
            "uuidHref": "http://online.moysklad.ru/app/#retailsalesreturn/edit?id=3395a278-ec69-11e7-0532-9eed00000022"
          }
        },
        {
          "meta": {
            "href": "http://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/2eb3c0ad-f9d9-11e7-0532-9eed0000005a",
            "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata",
            "type": "retaildrawercashin",
            "mediaType": "application/json",
            "uuidHref": "http://online.moysklad.ru/app/#retaildrawercashin/edit?id=2eb3c0ad-f9d9-11e7-0532-9eed0000005a"
          }
        },
        {
          "meta": {
            "href": "http://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/3d8258c5-f9d9-11e7-0532-9eed0000005e",
            "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
            "type": "retaildrawercashout",
            "mediaType": "application/json",
            "uuidHref": "http://online.moysklad.ru/app/#retaildrawercashout/edit?id=3d8258c5-f9d9-11e7-0532-9eed0000005e"
          }
        }
      ],
      "paymentOperations": [
        {
          "meta": {
            "href": "http://online.moysklad.ru/api/remap/1.2/entity/cashin/6c3237ff-f9d9-11e7-0532-9eed00000086",
            "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata",
            "type": "cashin",
            "mediaType": "application/json",
            "uuidHref": "http://online.moysklad.ru/app/#cashin/edit?id=6c3237ff-f9d9-11e7-0532-9eed00000086"
          },
          "linkedSum": 0
        },
        {
          "meta": {
            "href": "http://online.moysklad.ru/api/remap/1.2/entity/paymentin/5952a2fb-f9d8-11e7-0532-9eed00000036",
            "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata",
            "type": "paymentin",
            "mediaType": "application/json",
            "uuidHref": "http://online.moysklad.ru/app/#paymentin/edit?id=5952a2fb-f9d8-11e7-0532-9eed00000036"
          },
          "linkedSum": 0
        }
      ]
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/cd86df19-0563-11e6-9464-e4de0000008e",
        "type": "retailshift",
        "mediaType": "application/json"
      },
      "id": "cd86df19-0563-11e6-9464-e4de0000008e",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
      "updated": "2016-04-18 15:48:19",
      "name": "00002",
      "externalCode": "uhM2bdwAg7661Qhx3f7102",
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
      "moment": "2016-04-18 15:48:04",
      "created": "2016-08-25 19:55:00",
      "printed": true,
      "published": true,
      "vatEnabled": true,
      "vatIncluded": true,
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "organizationAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/account/3a30e844-016f-11e6-9464-e4de00000068",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "attributes": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "bb08dccf-0bd2-11e6-9464-e4de000000ae",
          "name": "AttributeName1",
          "type": "string",
          "value": "Да"
        }
      ],
      "closeDate": "2016-04-18 15:48:19",
      "proceedsNoCash": 1800,
      "proceedsCash": 0,
      "receivedNoCash": 0,
      "receivedCash": 0,
      "retailStore": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/851f8576-f504-11e5-8a84-bae50000016c",
          "type": "retailstore",
          "mediaType": "application/json"
        }
      },
      "operations": [
        {
          "meta": {
            "href": "http://online.moysklad.ru/api/remap/1.2/entity/retaildemand/29547f06-ec69-11e7-0532-9eed0000002c",
            "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata",
            "type": "retaildemand",
            "mediaType": "application/json",
            "uuidHref": "http://online.moysklad.ru/app/#retaildemand/edit?id=29547f06-ec69-11e7-0532-9eed0000002c"
          }
        },
        {
          "meta": {
            "href": "http://online.moysklad.ru/api/remap/1.2/entity/retailsalesreturn/3395a278-ec69-11e7-0532-9eed00000033",
            "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/retailsalesreturn/metadata",
            "type": "retailsalesreturn",
            "mediaType": "application/json",
            "uuidHref": "http://online.moysklad.ru/app/#retailsalesreturn/edit?id=3395a278-ec69-11e7-0532-9eed00000033"
          }
        },
        {
          "meta": {
            "href": "http://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/2eb3c0ad-f9d9-11e7-0532-9eed0000006b",
            "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata",
            "type": "retaildrawercashin",
            "mediaType": "application/json",
            "uuidHref": "http://online.moysklad.ru/app/#retaildrawercashin/edit?id=2eb3c0ad-f9d9-11e7-0532-9eed0000006b"
          }
        },
        {
          "meta": {
            "href": "http://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/3d8258c5-f9d9-11e7-0532-9eed0000006a",
            "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
            "type": "retaildrawercashout",
            "mediaType": "application/json",
            "uuidHref": "http://online.moysklad.ru/app/#retaildrawercashout/edit?id=3d8258c5-f9d9-11e7-0532-9eed0000006a"
          }
        }
      ],
      "paymentOperations": [
        {
          "meta": {
            "href": "http://online.moysklad.ru/api/remap/1.2/entity/cashin/6c3237ff-f9d9-11e7-0532-9eed00000099",
            "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata",
            "type": "cashin",
            "mediaType": "application/json",
            "uuidHref": "http://online.moysklad.ru/app/#cashin/edit?id=6c3237ff-f9d9-11e7-0532-9eed00000099"
          },
          "linkedSum": 0
        },
        {
          "meta": {
            "href": "http://online.moysklad.ru/api/remap/1.2/entity/paymentin/5952a2fb-f9d8-11e7-0532-9eed00000048",
            "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata",
            "type": "paymentin",
            "mediaType": "application/json",
            "uuidHref": "http://online.moysklad.ru/app/#paymentin/edit?id=5952a2fb-f9d8-11e7-0532-9eed00000048"
          },
          "linkedSum": 0
        }
      ]
    }
  ]
}
```

### Удалить Розничную смену

**Параметры**

|Параметр   |Описание   | 
|:----|:----|
|**id** |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Розничной смены.|

> Запрос на удаление Розничной смены с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Розничной смены.

### Метаданные Розничных смен 
#### Метаданные Розничных смен 
Запрос на получение метаданных Розничных смен. Результат - объект JSON, включающий в себя:

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
| **meta**         | Ссылка на метаданные Розничных смен|
| **attributes**   | Массив объектов доп. полей Розничных смен в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)|
| **createShared** | создавать новые Розничные смены с меткой "Общий"|

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Розничных смен

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Розничных продаж.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "id": "bb08dccf-0bd2-11e6-9464-e4de000000ae",
      "name": "AttributeName1",
      "type": "string",
      "required": false
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
  "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata/attributes/d335f74e-558c-11e6-8a84-bae50000009a",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "d335f74e-558c-11e6-8a84-bae50000009a",
  "name": "AttributeName1",
  "type": "file",
  "required": false
}
```

#### Розничная смена

**Параметры**

|Параметр   |Описание   | 
|:----|:----|
|**id** |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Розничной смены.|

### Получить Розничную смену 

> Запрос на получение отдельной Розничной смены с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Розничной смены.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/91a42d66-0ad2-11e6-9464-e4de00000017",
    "type": "retailshift",
    "mediaType": "application/json"
  },
  "id": "91a42d66-0ad2-11e6-9464-e4de00000017",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-25 13:50:05",
  "name": "00004",
  "externalCode": "33Ox0o1GjpDZC9x41fUA11",
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
  "moment": "2016-04-25 13:10:19",
  "created": "2016-08-25 19:55:00",
  "printed": true,
  "published": true,
  "vatEnabled": true,
  "vatIncluded": true,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/account/3a30e844-016f-11e6-9464-e4de00000068",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "bb08dccf-0bd2-11e6-9464-e4de000000ae",
      "name": "AttributeName1",
      "type": "string",
      "value": "Да"
    }
  ],
  "closeDate": "2016-04-25 13:10:19",
  "proceedsNoCash": 0,
  "proceedsCash": 0,
  "receivedNoCash": 0,
  "receivedCash": 0,
  "retailStore": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/851f8576-f504-11e5-8a84-bae50000016c",
      "type": "retailstore",
      "mediaType": "application/json"
    }
  },
  "operations": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/retaildemand/29547f06-ec69-11e7-0532-9eed0000001b",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata",
        "type": "retaildemand",
        "mediaType": "application/json",
        "uuidHref": "http://online.moysklad.ru/app/#retaildemand/edit?id=29547f06-ec69-11e7-0532-9eed0000001b"
      }
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/retailsalesreturn/3395a278-ec69-11e7-0532-9eed00000022",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/retailsalesreturn/metadata",
        "type": "retailsalesreturn",
        "mediaType": "application/json",
        "uuidHref": "http://online.moysklad.ru/app/#retailsalesreturn/edit?id=3395a278-ec69-11e7-0532-9eed00000022"
      }
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/2eb3c0ad-f9d9-11e7-0532-9eed0000005a",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashin/metadata",
        "type": "retaildrawercashin",
        "mediaType": "application/json",
        "uuidHref": "http://online.moysklad.ru/app/#retaildrawercashin/edit?id=2eb3c0ad-f9d9-11e7-0532-9eed0000005a"
      }
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/3d8258c5-f9d9-11e7-0532-9eed0000005e",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/retaildrawercashout/metadata",
        "type": "retaildrawercashout",
        "mediaType": "application/json",
        "uuidHref": "http://online.moysklad.ru/app/#retaildrawercashout/edit?id=3d8258c5-f9d9-11e7-0532-9eed0000005e"
      }
    }
  ],
  "paymentOperations": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/cashin/6c3237ff-f9d9-11e7-0532-9eed00000086",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata",
        "type": "cashin",
        "mediaType": "application/json",
        "uuidHref": "http://online.moysklad.ru/app/#cashin/edit?id=6c3237ff-f9d9-11e7-0532-9eed00000086"
      },
      "linkedSum": 0
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/paymentin/5952a2fb-f9d8-11e7-0532-9eed00000036",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata",
        "type": "paymentin",
        "mediaType": "application/json",
        "uuidHref": "http://online.moysklad.ru/app/#paymentin/edit?id=5952a2fb-f9d8-11e7-0532-9eed00000036"
      },
      "linkedSum": 0
    }
  ]
}
```
