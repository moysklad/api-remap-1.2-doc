## Заказ кодов маркировки
### Заказ кодов маркировки

Средствами JSON API можно получать, создавать, редактировать Заказы кодов маркировки.
Сущность представлена в виде идентификатора, текстового кода, типа кода и массива вложенных Кодов маркировки.
Коды маркировки относятся к отдельной позиции конкретного документа. Порядок вывода КМ первого уровня фиксирован - вложенные КМ могут выводиться в случайном порядке. 

#### Атрибуты сущности

| Название         | Тип                                                       | Описание                                                                                                                                 |
|------------------|:----------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Заказа кодов маркировки<br>`+Обязательное при ответе`                                                                         |
| **id**           | UUID                                                      | ID Заказа кодов маркировки<br>`+Обязательное при ответе` `+Только для чтения`                                                            |
| **accountId**    | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                     |
| **owner**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Владелец (Сотрудник)<br>`+Expand`                                                                                                        |
| **agent**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Контрагента<br>`+Expand`                                                                                                      |
| **shared**       | Boolean                                                   | Общий доступ<br>`+Обязательное при ответе`                                                                                               |
| **group**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                 |
| **updated**      | DateTime                                                  | Момент последнего обновления<br>`+Обязательное при ответе`                                                                               |
| **name**         | String(255)                                               | Наименование Заказа кодов маркировки                                                                                                     |
| **externalCode** | String(255)                                               | Внешний код Заказа кодов маркировки<br>`+Обязательное при ответе`                                                                        |
| **state**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные статуса Заказа кодов маркировки<br>`+Expand`                                                                                  |
| **created**      | DateTime                                                  | Момент создания Заказа кодов маркировки<br>`+Обязательное при ответе`                                                                    |
| **organization** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные юрлица<br>`+Expand`                                                                                                           |
| **emissionType** | Enum                                                      | Способ ввода в оборот. [Подробнее тут](../dictionaries/#suschnosti-zakaz-kodow-markirowki-sposob-wwoda-w-oborot)                         |
| **trackingType** | Enum                                                      | Тип маркируемой продукции. [Подробнее тут](../dictionaries/#suschnosti-komplekt-komplekty-atributy-suschnosti-tip-markiruemoj-produkcii) |
| **positions**    | MetaArray                                                 | Метаданные позиций Заказа кодов маркировки<br>`+Обязательное при ответе` `+Expand`                                                       |

#### Позиции Заказа кодов маркировки
Позиции Заказа кодов маркировки - это список товаров/модификаций.

##### Объект позиции Заказа кодов маркировки содержит следующие поля:

| Название     | Тип                                                       | Описание                                                                                       |
|--------------|:----------------------------------------------------------|:-----------------------------------------------------------------------------------------------|
| **meta**     | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные позиции заказа кодов маркировки<br>`+Обязательное при ответе`                       |
| **status**   | Enum                                                      | Статус кодов. [Подробнее тут](../dictionaries/#suschnosti-zakaz-kodow-markirowki-status-kodow) |
| **quantity** | Float                                                     | Количество товаров данного вида в позиции.<br>`+Обязательное при ответе`                       |
| **name**     | String(255)                                               | Наименование товара                                                                            |

### Статус кодов
Значения поля status.

| Значение                    | Описание            |
|-----------------------------|:--------------------|
| **EMISSION_NOT_SEND**       | Не отправлен        |
| **EMISSION_SEND**           | В обработке         |
| **EMISSION_ACTIVE**         | Коды доступны       |
| **EMISSION_ERROR**          | Ошибка              |
| **EMISSION_RECEIVED**       | Коды получены       |
| **EMISSION_PRINTED_PARTLY** | Частично напечатаны |
| **EMISSION_PRINTED_FULLY**  | Коды напечатаны     |
| **EMISSION_COMPLETED**      | Коды получены       |

### Способ ввода в оборот
Значения поля emissionType.

| Значение        | Описание                               |
|-----------------|:---------------------------------------|
| **LOCAL**       | Произведен в РФ                        |
| **FOREIGN**     | Ввезен в РФ                            |
| **REMAINS**     | Маркировка остатков                    |
| **CROSSBORDER** | Ввезен из стран ЕАЭС                   |
| **REMARK**      | Перемаркировка                         |
| **COMMISSION**  | Принят на комиссию от физического лица |


### Получить заказы кодов маркировки
Запрос всех заказов кодов маркировки на учетной записи.

**Параметры**

| Параметр   | Описание                                                                                                                               |
|------------|:---------------------------------------------------------------------------------------------------------------------------------------|
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить заказы кодов маркировки

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Заказов кодов маркировки.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/c023744f-9d9a-11ef-ac12-000d00000017?expand=positions",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata",
    "type": "emissionorder",
    "mediaType": "application/json"
  },
  "id": "c023744f-9d9a-11ef-ac12-000d00000017",
  "accountId": "8ce4ca1a-8baa-11ef-ac12-000f00000000",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/90eb33b1-8baa-11ef-ac12-001000000050",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://api.moysklad.ru/app/#employee/edit?id=90eb33b1-8baa-11ef-ac12-001000000050"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/8cec9ae0-8baa-11ef-ac12-000f00000001",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2024-11-15 13:43:15.922",
  "name": "00001",
  "externalCode": "BBzRTOA-iwW5ERKGNwxAN2",
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata/states/74241fd9-a1bd-11ef-ac12-000e00000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "created": "2024-11-08 09:29:04.582",
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/91a51465-8baa-11ef-ac12-001000000099",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://api.moysklad.ru/app/#mycompany/edit?id=91a51465-8baa-11ef-ac12-001000000099"
    }
  },
  "emissionType": "FOREIGN",
  "trackingType": "MILK",
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/c023744f-9d9a-11ef-ac12-000d00000017/positions",
      "type": "emissionorderposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  }
}

```


### Метаданные Заказа кодов маркировки
#### Метаданные Заказа кодов маркировки
Запрос на получение метаданных Заказа кодов маркировки. Результат - объект JSON, включающий в себя:

| Параметр         | Описание                                                                                                                     |
|------------------|:-----------------------------------------------------------------------------------------------------------------------------|
| **meta**         | Ссылка на метаданные заказа кодов маркировки                                                                                 |
| **attributes**   | Массив объектов доп. полей заказа кодов маркировки в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **states**       | Массив статусов заказов кодов маркировки                                                                                     |
| **createShared** | создавать новые заказы кодов маркировки с меткой "Общий"                                                                     |



> Метаданные Заказа кодов маркировки

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление метаданных Заказа кодов маркировки.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata",
    "mediaType": "application/json"
  },
  "attributes": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata/attributes",
      "type": "attributemetadata",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "states": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata/states/4f75f276-a673-11ef-ac12-000d00000002",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "4f75f276-a673-11ef-ac12-000d00000002",
      "accountId": "b9c9f2e4-a66f-11ef-ac12-000f00000001",
      "name": "Новый",
      "color": 10066329,
      "stateType": "Regular",
      "entityType": "emissionorder"
    }
  ],
  "createShared": false
}
```



### Получить заказ кодов маркировки

**Параметры**

| Параметр | Описание                                                                                        |
| :------- |:------------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 33c8ac0b-a670-11ef-ac12-000d00000111* id заказа кодов маркировки. |

> Запрос на Получение отдельного заказа кодов маркировки с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/33c8ac0b-a670-11ef-ac12-000d00000111"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление заказа кодов маркировки.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/33c8ac0b-a670-11ef-ac12-000d00000111",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata",
    "type": "emissionorder",
    "mediaType": "application/json"
  },
  "id": "33c8ac0b-a670-11ef-ac12-000d00000111",
  "accountId": "b9c9f2e4-a66f-11ef-ac12-000f00000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/bc5114ab-a66f-11ef-ac12-000d00000050",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://api.moysklad.ru/app/#employee/edit?id=bc5114ab-a66f-11ef-ac12-000d00000050"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/b9cfe2fd-a66f-11ef-ac12-000f00000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2024-11-19 15:39:27.860",
  "name": "00001",
  "externalCode": "RIahRnZIjek-CeER27IjF0",
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata/states/4f75f276-a673-11ef-ac12-000d00000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "created": "2024-11-19 15:17:10.711",
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/bcbee227-a66f-11ef-ac12-000d00000099",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://api.moysklad.ru/app/#mycompany/edit?id=bcbee227-a66f-11ef-ac12-000d00000099"
    }
  },
  "emissionType": "LOCAL",
  "trackingType": "MILK",
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/33c8ac0b-a670-11ef-ac12-000d00000111/positions",
      "type": "emissionorderposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  }
}
```


### Получить Позиции Заказа кодов маркировки
Запрос на получение списка всех позиций данного Заказа кодов маркировки.

**Параметры**

| Параметр   | Описание                                                                                                                               |
|:-----------|:---------------------------------------------------------------------------------------------------------------------------------------|
| **id**     | `string` (required) *Example: 33c8ac0b-a670-11ef-ac12-000d00000111* id Заказа кодов маркировки                                         |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить позиции Заказа кодов маркировки

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/33c8ac0b-a670-11ef-ac12-000d00000111/positions"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка реализованных позиций отдельного Заказа кодов маркировки.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/context/employee",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/33c8ac0b-a670-11ef-ac12-000d00000111/positions",
    "type": "emissionorderposition",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/33c8ac0b-a670-11ef-ac12-000d00000111/positions/33c8bd7c-a670-11ef-ac12-000d00000112",
        "type": "emissionorderposition",
        "mediaType": "application/json"
      },
      "status": "EMISSION_NOT_SEND",
      "quantity": 1.0,
      "name": "test product 1"
    }
  ]
}
```


### Получить позицию Заказа кодов маркировки

**Параметры**

| Параметр       | Описание                                                                                                                                  |
| :------------- |:------------------------------------------------------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 33c8ac0b-a670-11ef-ac12-000d00000111* id Полученного отчета комиссионера.                                   |
| **positionID** | `string` (required) *Example: 33c8bd7c-a670-11ef-ac12-000d00000112* id позиции реализовано комиссионером Полученного отчета комиссионера. |

> Запрос на получение отдельной позиции Заказа кодов маркировки с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/33c8ac0b-a670-11ef-ac12-000d00000111/positions/33c8bd7c-a670-11ef-ac12-000d00000112"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции Заказа кодов маркировки.

```json
{
    "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/33c8ac0b-a670-11ef-ac12-000d00000111/positions/33c8bd7c-a670-11ef-ac12-000d00000112",
        "type": "emissionorderposition",
        "mediaType": "application/json"
    },
    "status": "EMISSION_NOT_SEND",
    "quantity": 1.0,
    "name": "test product 1"
}
```
