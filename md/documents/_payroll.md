## Начисления зарплаты
Средствами JSON API можно создавать и обновлять сведения о Начислении зарплаты, запрашивать списки Начисления зарплат и сведения по отдельным Начислениям зарплаты. Позициями Начисления зарплаты можно управлять как в составе отдельного Начисления зарплаты, так и отдельно - с помощью специальных ресурсов для управления позициями Начисления зарплаты. Кодом сущности для Начисления зарплаты в составе JSON API является ключевое слово **payroll**.
### Начисления зарплат
#### Атрибуты сущности
| Название               | Тип                            | Фильтрация                                                               | Описание                                                                                                                                                   |
|------------------------|:-------------------------------|:-------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**          | UUID                           | `=` `!=`                                                                 | ID учетной записи<br>`+Обязательное при ответе``+Только для чтения``+Change-handler`                                                                       |
| **applicable**         | Boolean                        | `=` `!=`                                                                 | Отметка о проведении<br>`+Обязательное при ответе``+Change-handler` `+Update-provider`                                                                     |
| **attributes**         | Array(Object)                  | [Операторы доп. полей](#/general#4-filtraciya-po-dopolnitelnym-polyam)   | Коллекция метаданных доп. полей. [Поля объекта](#/general#3-rabota-s-dopolnitelnymi-polyami)<br> `+Change-handler` `+Update-provider`                      |
| **created**            | DateTime                       | `=` `!=` `<` `>` `<=` `>=`                                               | Дата создания<br>`+Обязательное при ответе` `+Только для чтения``+Change-handler`                                                                          |
| **externalCode**       | String(255)                    | `=` `!=` `~` `~=` `=~`                                                   | Внешний код Начисления зарплаты<br>`+Обязательное при ответе``+Change-handler`                                                                             |
| **files**              | MetaArray                      |                                                                          | Метаданные массива [Файлов](#/dictionaries/files#2-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand`                   |
| **group**              | [Meta](#/general#3-metadannye) | `=` `!=`                                                                 | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                                   |
| **id**                 | UUID                           | `=` `!=`                                                                 | ID Начисления зарплаты<br>`+Обязательное при ответе` `+Только для чтения``+Change-handler`                                                                 |
| **meta**               | [Meta](#/general#3-metadannye) |                                                                          | Метаданные Начисления зарплаты<br>`+Обязательное при ответе``+Change-handler`                                                                              |
| **moment**             | DateTime                       | `=` `!=` `<` `>` `<=` `>=`                                               | Дата документа<br>`+Обязательное при ответе``+Change-handler` `+Update-provider`                                                                           |
| **name**               | String(255)                    | `=` `!=` `~` `~=` `=~`                                                   | Наименование Начисления зарплаты<br>`+Обязательное при ответе``+Change-handler` `+Update-provider`                                                         |
| **organization**       | [Meta](#/general#3-metadannye) | `=` `!=`                                                                 | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании``+Change-handler` `+Update-provider`                                   |
| **owner**              | [Meta](#/general#3-metadannye) | `=` `!=`                                                                 | Владелец (Сотрудник)<br>`+Expand`                                                                                                                          |
| **positions**          | MetaArray                      |                                                                          | Метаданные позиций Начисления зарплаты<br>`+Обязательное при ответе` `+Expand``+Change-handler` `+Update-provider`                                         |
| **printed**            | Boolean                        | `=` `!=`                                                                 | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                                   |
| **published**          | Boolean                        | `=` `!=`                                                                 | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                                 |
| **shared**             | Boolean                        | `=` `!=`                                                                 | Общий доступ<br>`+Обязательное при ответе`                                                                                                                 |
| **state**              | [Meta](#/general#3-metadannye) | `=` `!=`                                                                 | Метаданные статуса Начисления зарплаты<br>`+Expand` `+Change-handler` `+Update-provider`                                                                   |
| **sum**                | Float                          | `=` `!=` `<` `>` `<=` `>=`                                               | Сумма Начисления зарплаты в копейках<br>`+Обязательное при ответе` `+Только для чтения``+Change-handler`                                                   |
| **updated**            | DateTime                       | `=` `!=` `<` `>` `<=` `>=`                                               | Момент последнего обновления Начисления зарплаты<br>`+Обязательное при ответе` `+Только для чтения``+Change-handler`                                       |
| **startPayrollPeriod** | DateTime                       | `=` `!=` `<` `>` `<=` `>=`                                               | Начало расчётного периода, за который начисляется зарплата<br>`+Обязательное при ответе` `+Необходимо при создании``+Change-handler` `+Update-provider`    |
| **endPayrollPeriod**   | DateTime                       | `=` `!=` `<` `>` `<=` `>=`                                               | Окончание расчётного периода, за который начисляется зарплата<br>`+Обязательное при ответе` `+Необходимо при создании``+Change-handler` `+Update-provider` |


#### Позиции Начисления зарплат
Позиции Начисления зарплат - это список сотрудников, их оклада и сдельной оплаты.
Объект позиции Начисления зарплаты содержит следующие поля:

| Название      | Тип                             | Описание                                                                                            |
|---------------|:--------------------------------|:----------------------------------------------------------------------------------------------------|
| **meta**      | [Meta](#/general#3-metadannye)  | Метаданные позиции начисления зарплаты<br>`+Обязательное при ответе`                                |
| **accountId** | UUID                            | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения``+Change-handler`               |
| **id**        | UUID                            | ID позиции<br>`+Обязательное при ответе` `+Только для чтения``+Change-handler`                      |
| **employee**  | [Meta](#/general#3-metadannye)  | Метаданные сотрудника, который получает начисление зарплаты<br>`+Обязательное при ответе` `+Expand` |

### Получить Начисления зарплат

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить Начисления зарплат

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/payroll" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Начисления зарплат.
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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/",
    "type": "payroll",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/946f8595-17c3-11f1-4095-ec9f00000001",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata",
        "type": "payroll",
        "mediaType": "application/json",
        "uuidHref": "https://api.moysklad.ru/app/#payroll/edit?id=946f8595-17c3-11f1-4095-ec9f00000001"
      },
      "id": "946f8595-17c3-11f1-4095-ec9f00000001",
      "accountId": "bc637f03-fda6-11f0-4e60-ea2900000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/be4118c7-fda6-11f0-2555-e5d500000055",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://api.moysklad.ru/app/#employee/edit?id=be4118c7-fda6-11f0-2555-e5d500000055"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/bc657ddf-fda6-11f0-4e60-ea2900000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2026-03-12 08:15:10.678",
      "name": "00001",
      "externalCode": "EX0JefwKhGFRrJ7uS95aI0",
      "moment": "2026-03-04 15:13:00.000",
      "applicable": true,
      "sum": 60000.0,
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/be919d95-fda6-11f0-2555-e5d5000000a1",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json",
          "uuidHref": "https://api.moysklad.ru/app/#mycompany/edit?id=be919d95-fda6-11f0-2555-e5d5000000a1"
        }
      },
      "state": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata/states/615bd402-1dd2-11f1-994a-b7f800000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "created": "2026-03-04 15:13:40.158",
      "printed": false,
      "published": false,
      "files": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/946f8595-17c3-11f1-4095-ec9f00000001/files",
          "type": "files",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "positions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/946f8595-17c3-11f1-4095-ec9f00000001/positions",
          "type": "payrollposition",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "startPayrollPeriod": "2026-03-03 00:00:00.000",
      "endPayrollPeriod": "2026-03-04 23:59:59.000"
    }
  ]
}
```

### Запрос Начисления зарплаты

### Получить Начисления зарплаты

**Параметры**

| Параметр | Описание                                                                                    |
| :------- |:--------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Начисления зарплаты. |

> Запрос на получение отдельного Начисления зарплаты с указанным id.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/payroll/946f8595-17c3-11f1-4095-ec9f00000001" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Начисления зарплаты.
```json
{
    "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/946f8595-17c3-11f1-4095-ec9f00000001",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata",
        "type": "payroll",
        "mediaType": "application/json",
        "uuidHref": "https://api.moysklad.ru/app/#payroll/edit?id=946f8595-17c3-11f1-4095-ec9f00000001"
    },
    "id": "946f8595-17c3-11f1-4095-ec9f00000001",
    "accountId": "bc637f03-fda6-11f0-4e60-ea2900000001",
    "owner": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/be4118c7-fda6-11f0-2555-e5d500000055",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json",
            "uuidHref": "https://api.moysklad.ru/app/#employee/edit?id=be4118c7-fda6-11f0-2555-e5d500000055"
        }
    },
    "shared": false,
    "group": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/bc657ddf-fda6-11f0-4e60-ea2900000002",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
            "type": "group",
            "mediaType": "application/json"
        }
    },
    "updated": "2026-03-12 08:15:10.678",
    "name": "00001",
    "externalCode": "EX0JefwKhGFRrJ7uS95aI0",
    "moment": "2026-03-04 15:13:00.000",
    "applicable": true,
    "sum": 60000.0,
    "organization": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/be919d95-fda6-11f0-2555-e5d5000000a1",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
            "type": "organization",
            "mediaType": "application/json",
            "uuidHref": "https://api.moysklad.ru/app/#mycompany/edit?id=be919d95-fda6-11f0-2555-e5d5000000a1"
        }
    },
    "state": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata/states/615bd402-1dd2-11f1-994a-b7f800000002",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata",
            "type": "state",
            "mediaType": "application/json"
        }
    },
    "created": "2026-03-04 15:13:40.158",
    "printed": false,
    "published": false,
    "files": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/946f8595-17c3-11f1-4095-ec9f00000001/files",
            "type": "files",
            "mediaType": "application/json",
            "size": 0,
            "limit": 1000,
            "offset": 0
        }
    },
    "positions": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/946f8595-17c3-11f1-4095-ec9f00000001/positions",
            "type": "payrollposition",
            "mediaType": "application/json",
            "size": 2,
            "limit": 1000,
            "offset": 0
        }
    },
    "startPayrollPeriod": "2026-03-03 00:00:00.000",
    "endPayrollPeriod": "2026-03-04 23:59:59.000"
}
```
### Управление позициями Начисления зарплаты
Отдельный ресурс для управления позициями Начисления зарплаты. С его помощью вы можете управлять позициями большого документа, количество строк в котором превышает лимит на количество строк, сохраняемых вместе с документом. Этот лимит равен 1000. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](#/general#3-rabota-s-poziciyami-dokumentov).

### Получить позиции
Запрос на получение списка всех позиций данного Начисления зарплаты.

| Название     | Тип                            | Описание                                                        |
|--------------|:-------------------------------|:----------------------------------------------------------------|
| **meta**     | [Meta](#/general#3-metadannye) | Метаданные о выдаче,                                            |
| **context**  | [Meta](#/general#3-metadannye) | Метаданные о сотруднике, выполнившем запрос.                    |
| **rows**     | Array(Object)                  | Массив JSON объектов, представляющих собой Начисления зарплаты. |

**Параметры**

| Параметр   | Описание                                                                                                                               |
| :--------- |:---------------------------------------------------------------------------------------------------------------------------------------|
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Начисления зарплаты.                                            |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить позиции

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/payroll/946f8595-17c3-11f1-4095-ec9f00000001/positions" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций отдельного Начисления зарплаты.

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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/946f8595-17c3-11f1-4095-ec9f00000001/positions",
        "type": "payrollposition",
        "mediaType": "application/json",
        "size": 2,
        "limit": 1000,
        "offset": 0
    },
    "rows": [
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/946f8595-17c3-11f1-4095-ec9f00000001/positions/04955880-17d5-11f1-4095-ec9f00000030",
                "type": "payrollposition",
                "mediaType": "application/json"
            },
            "id": "04955880-17d5-11f1-4095-ec9f00000030",
            "accountId": "bc637f03-fda6-11f0-4e60-ea2900000001",
            "employee": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/e7b29e11-17d4-11f1-4095-ec9f00000027",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                    "type": "employee",
                    "mediaType": "application/json",
                    "uuidHref": "https://api.moysklad.ru/app/#employee/edit?id=e7b29e11-17d4-11f1-4095-ec9f00000027"
                }
            },
            "baseSalary": 100.0,
            "pieceworkSalary": 100.0
        },
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/946f8595-17c3-11f1-4095-ec9f00000001/positions/049567ca-17d5-11f1-4095-ec9f00000031",
                "type": "payrollposition",
                "mediaType": "application/json"
            },
            "id": "049567ca-17d5-11f1-4095-ec9f00000031",
            "accountId": "bc637f03-fda6-11f0-4e60-ea2900000001",
            "employee": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/be4118c7-fda6-11f0-2555-e5d500000055",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                    "type": "employee",
                    "mediaType": "application/json",
                    "uuidHref": "https://api.moysklad.ru/app/#employee/edit?id=be4118c7-fda6-11f0-2555-e5d500000055"
                }
            },
            "baseSalary": 200.0,
            "pieceworkSalary": 200.0
        }
    ]
}
```
### Позиция Начисления зарплаты

### Получить позицию

**Параметры**

| Параметр       | Описание                                                                                    |
| :------------- |:--------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Начисления зарплаты. |
| **positionID** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b20* id Начисления зарплаты. |

> Запрос на получение отдельной позиции Начисления зарплаты с указанным id.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/payroll/946f8595-17c3-11f1-4095-ec9f00000001/positions/04955880-17d5-11f1-4095-ec9f00000030" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции Начисления зарплаты.

```json
{
    "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/946f8595-17c3-11f1-4095-ec9f00000001/positions/04955880-17d5-11f1-4095-ec9f00000030",
        "type": "payrollposition",
        "mediaType": "application/json"
    },
    "id": "04955880-17d5-11f1-4095-ec9f00000030",
    "accountId": "bc637f03-fda6-11f0-4e60-ea2900000001",
    "employee": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/e7b29e11-17d4-11f1-4095-ec9f00000027",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json",
            "uuidHref": "https://api.moysklad.ru/app/#employee/edit?id=e7b29e11-17d4-11f1-4095-ec9f00000027"
        }
    },
    "baseSalary": 100.0,
    "pieceworkSalary": 100.0
}
```
