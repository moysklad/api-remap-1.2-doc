## Начисления зарплаты
Средствами JSON API можно создавать и обновлять сведения о Начислении зарплаты, запрашивать списки Начисления зарплат и сведения по отдельным Начислениям зарплаты. Позициями Начисления зарплаты можно управлять как в составе отдельного Начисления зарплаты, так и отдельно - с помощью специальных ресурсов для управления позициями Начисления зарплаты. Кодом сущности для Начисления зарплаты в составе JSON API является ключевое слово **payroll**.
### Начисления зарплат
#### Атрибуты сущности
| Название              | Тип                            | Фильтрация                                                             | Описание                                                                                                                                  |
|-----------------------|:-------------------------------|:-----------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**         | UUID                           | `=` `!=`                                                               | ID учетной записи<br>`+Обязательное при ответе``+Только для чтения`                                                                       |
| **applicable**        | Boolean                        | `=` `!=`                                                               | Отметка о проведении<br>`+Обязательное при ответе``+Update-provider`                                                                      |
| **description**       | String(4096)                   | `=` `!=` `~` `~=` `=~`                                                 | Описание Начисления зарплаты. <br>`+Обязательное при ответе`                                                                              |
| **attributes**        | Array(Object)                  | [Операторы доп. полей](#/general#4-filtraciya-po-dopolnitelnym-polyam) | Коллекция метаданных доп. полей. [Поля объекта](#/general#3-rabota-s-dopolnitelnymi-polyami)<br>                                          |
| **created**           | DateTime                       | `=` `!=` `<` `>` `<=` `>=`                                             | Дата создания<br>`+Обязательное при ответе` `+Только для чтения`                                                                          |
| **externalCode**      | String(255)                    | `=` `!=` `~` `~=` `=~`                                                 | Внешний код Начисления зарплаты<br>`+Обязательное при ответе`                                                                             |
| **files**             | MetaArray                      |                                                                        | Метаданные массива [Файлов](#/dictionaries/files#2-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand`  |
| **group**             | [Meta](#/general#3-metadannye) | `=` `!=`                                                               | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                  |
| **id**                | UUID                           | `=` `!=`                                                               | ID Начисления зарплаты<br>`+Обязательное при ответе` `+Только для чтения`                                                                 |
| **meta**              | [Meta](#/general#3-metadannye) |                                                                        | Метаданные Начисления зарплаты<br>`+Обязательное при ответе`                                                                              |
| **moment**            | DateTime                       | `=` `!=` `<` `>` `<=` `>=`                                             | Дата документа<br>`+Обязательное при ответе` `+Update-provider`                                                                           |
| **name**              | String(255)                    | `=` `!=` `~` `~=` `=~`                                                 | Наименование Начисления зарплаты<br>`+Обязательное при ответе` `+Update-provider`                                                         |
| **organization**      | [Meta](#/general#3-metadannye) | `=` `!=`                                                               | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании` `+Update-provider`                                   |
| **owner**             | [Meta](#/general#3-metadannye) | `=` `!=`                                                               | Владелец (Сотрудник)<br>`+Expand`                                                                                                         |
| **positions**         | MetaArray                      |                                                                        | Метаданные позиций Начисления зарплаты<br>`+Обязательное при ответе` `+Expand` `+Update-provider`                                         |
| **printed**           | Boolean                        | `=` `!=`                                                               | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                  |
| **published**         | Boolean                        | `=` `!=`                                                               | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                |
| **shared**            | Boolean                        | `=` `!=`                                                               | Общий доступ<br>`+Обязательное при ответе`                                                                                                |
| **state**             | [Meta](#/general#3-metadannye) | `=` `!=`                                                               | Метаданные статуса Начисления зарплаты<br>`+Expand`  `+Update-provider`                                                                   |
| **sum**               | Float                          | `=` `!=` `<` `>` `<=` `>=`                                             | Сумма Начисления зарплаты в копейках<br>`+Обязательное при ответе` `+Только для чтения`                                                   |
| **updated**           | DateTime                       | `=` `!=` `<` `>` `<=` `>=`                                             | Момент последнего обновления Начисления зарплаты<br>`+Обязательное при ответе` `+Только для чтения`                                       |
| **startPayrollPeriod** | DateTime                       | `=` `!=` `<` `>` `<=` `>=`                                             | Начало расчётного периода, за который начисляется зарплата<br>`+Обязательное при ответе` `+Необходимо при создании` `+Update-provider`    |
| **endPayrollPeriod**  | DateTime                       | `=` `!=` `<` `>` `<=` `>=`                                             | Окончание расчётного периода, за который начисляется зарплата<br>`+Обязательное при ответе` `+Необходимо при создании` `+Update-provider` |

С позициями можно работать с помощью специальных ресурсов для управления позициями Начисления зарплат,
а также в составе отдельного Начисления зарплаты. При работе в составе отдельного Начисления зарплаты,
вы можете отправлять запросы на создание отдельного Начисления зарплаты с включенным в тело запроса
массивом позиций Начисления зарплаты. Если количество позиций превышает максимально допустимое, то для
дальнейшего пополнения позиций нужно будет работать со специальным ресурсом "Позиции Начисления зарплаты".
Также, при работе в составе отдельного Начисления зарплаты, можно отправлять запросы на обновление списка позиций
с включенным в тело запроса массивом позиций Начисления зарплаты. При этом важно помнить, что коллекция позиций будет
восприниматься как "все позиции Начисления зарплаты" и полностью заменит уже существующую коллекцию при обновлении объекта - лишние
позиции будут удалены, новые добавлены, существующие - изменены.

#### Позиции Начисления зарплат
Позиции Начисления зарплат - это список сотрудников, их оклада и сдельной оплаты.
Объект позиции Начисления зарплаты содержит следующие поля:

| Название            | Тип                            | Описание                                                                                            |
|---------------------|:-------------------------------|:----------------------------------------------------------------------------------------------------|
| **meta**            | [Meta](#/general#3-metadannye) | Метаданные позиции начисления зарплаты<br>`+Обязательное при ответе`                                |
| **accountId**       | UUID                           | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                |
| **id**              | UUID                           | ID позиции<br>`+Обязательное при ответе` `+Только для чтения`                                       |
| **employee**        | [Meta](#/general#3-metadannye) | Метаданные сотрудника, который получает начисление зарплаты<br>`+Обязательное при ответе` `+Expand` |
| **baseSalary**      | Float                          | Начисления по окладу сотрудника <br>`+Обязательное при ответе` `+Update-provider`                   |
| **pieceworkSalary** | Float                          | Начисления сдельной оплаты сотрудника<br>`+Обязательное при ответе` `+Update-provider`              |

### Получить список Начисления зарплат

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
        "uuidHref": "https://online.moysklad.ru/app/#payroll/edit?id=946f8595-17c3-11f1-4095-ec9f00000001"
      },
      "id": "946f8595-17c3-11f1-4095-ec9f00000001",
      "accountId": "bc637f03-fda6-11f0-4e60-ea2900000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/be4118c7-fda6-11f0-2555-e5d500000055",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=be4118c7-fda6-11f0-2555-e5d500000055"
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
          "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=be919d95-fda6-11f0-2555-e5d5000000a1"
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
### Создать Начисление зарплаты
Запрос на создание нового Начисления зарплаты.
Обязательные для создания поля:

| Параметр             | Описание                                                                                 |
|----------------------|:-----------------------------------------------------------------------------------------|
| **organization**     | Ссылка на ваше юрлицо в формате [Метаданных](#/general#3-metadannye)                     |
| **baseSalary**       | Начисления по окладу сотрудника                                                          |
| **pieceworkSalary**  | Начисления сдельной оплаты сотрудника                                                    |

> Пример создания нового Начисления с телом запроса, содержащим только необходимые поля.
```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/payroll" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "organization": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/be919d95-fda6-11f0-2555-e5d5000000a1",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                    "type": "organization",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=be919d95-fda6-11f0-2555-e5d5000000a1"
                }
            },
            "startPayrollPeriod": "2026-03-24 00:00:00.000",
            "endPayrollPeriod": "2026-03-25 23:59:59.000"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Начисления зарплаты.

```json
{
    "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/5af05a28-285b-11f1-cc6f-b56e0000000d",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata",
        "type": "payroll",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#payroll/edit?id=5af05a28-285b-11f1-cc6f-b56e0000000d"
    },
    "id": "5af05a28-285b-11f1-cc6f-b56e0000000d",
    "accountId": "bc637f03-fda6-11f0-4e60-ea2900000001",
    "owner": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/be4118c7-fda6-11f0-2555-e5d500000055",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=be4118c7-fda6-11f0-2555-e5d500000055"
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
    "updated": "2026-03-25 19:03:35.549",
    "name": "00006",
    "externalCode": "jIqH816xglg6CcHDRj5dZ2",
    "moment": "2026-03-25 19:03:00.000",
    "applicable": true,
    "sum": 0.0,
    "organization": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/be919d95-fda6-11f0-2555-e5d5000000a1",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
            "type": "organization",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=be919d95-fda6-11f0-2555-e5d5000000a1"
        }
    },
    "created": "2026-03-25 19:03:35.608",
    "printed": false,
    "published": false,
    "files": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/5af05a28-285b-11f1-cc6f-b56e0000000d/files",
            "type": "files",
            "mediaType": "application/json",
            "size": 0,
            "limit": 1000,
            "offset": 0
        }
    },
    "positions": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/5af05a28-285b-11f1-cc6f-b56e0000000d/positions",
            "type": "payrollposition",
            "mediaType": "application/json",
            "size": 0,
            "limit": 1000,
            "offset": 0
        }
    },
    "startPayrollPeriod": "2026-03-24 00:00:00.000",
    "endPayrollPeriod": "2026-03-25 23:59:00.000"
}
```

> Пример создания нового Начисления зарплаты с более насыщенным телом запроса.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/payroll" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "organization": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/be919d95-fda6-11f0-2555-e5d5000000a1",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                    "type": "organization",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=be919d95-fda6-11f0-2555-e5d5000000a1"
                }
            },
            "owner": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/be4118c7-fda6-11f0-2555-e5d500000055",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                    "type": "employee",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=be4118c7-fda6-11f0-2555-e5d500000055"
                }
            },
            "shared": true,
            "name": "second",
            "moment": "2028-03-25 19:03:00.000",
            "applicable": true,
            "printed": false,
            "published": true,
            "positions": [
                {
                    "employee": {
                        "meta": {
                            "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/e7b29e11-17d4-11f1-4095-ec9f00000027",
                            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                            "type": "employee",
                            "mediaType": "application/json",
                            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=e7b29e11-17d4-11f1-4095-ec9f00000027"
                        }
                    },
                    "baseSalary": 2020.0,
                    "pieceworkSalary": 2020.0
                }
            ],
            "startPayrollPeriod": "2026-03-24 00:00:00.000",
            "endPayrollPeriod": "2026-03-25 23:59:59.000"
        }'  
```
> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Начисления зарплаты.

```json
{
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/4ee9ddd8-285d-11f1-cc6f-b56e00000011",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata",
        "type": "payroll",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#payroll/edit?id=4ee9ddd8-285d-11f1-cc6f-b56e00000011"
      },
      "id": "4ee9ddd8-285d-11f1-cc6f-b56e00000011",
      "accountId": "bc637f03-fda6-11f0-4e60-ea2900000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/be4118c7-fda6-11f0-2555-e5d500000055",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=be4118c7-fda6-11f0-2555-e5d500000055"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/bc657ddf-fda6-11f0-4e60-ea2900000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2026-03-25 19:44:34.567",
      "name": "second",
      "externalCode": "VpV4ADEPgtvGZSwcvakJg1",
      "moment": "2028-03-25 19:03:00.000",
      "applicable": true,
      "sum": 4040.0,
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/be919d95-fda6-11f0-2555-e5d5000000a1",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=be919d95-fda6-11f0-2555-e5d5000000a1"
        }
      },
      "created": "2026-03-25 19:44:34.603",
      "printed": false,
      "published": false,
      "files": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/4ee9ddd8-285d-11f1-cc6f-b56e00000011/files",
          "type": "files",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "positions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/4ee9ddd8-285d-11f1-cc6f-b56e00000011/positions",
          "type": "payrollposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "startPayrollPeriod": "2026-03-24 00:00:00.000",
      "endPayrollPeriod": "2026-03-25 23:59:00.000"
}
```

> Пример запроса на создание Начисления зарплаты с доп. полями.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/payroll" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "organization": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/be919d95-fda6-11f0-2555-e5d5000000a1",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                    "type": "organization",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=be919d95-fda6-11f0-2555-e5d5000000a1"
                }
            },
            "owner": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/be4118c7-fda6-11f0-2555-e5d500000055",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                    "type": "employee",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=be4118c7-fda6-11f0-2555-e5d500000055"
                }
            },
            "shared": true,
            "moment": "2028-03-25 19:03:00.000",
            "applicable": true,
            "printed": false,
            "published": true,
            "positions": [
                {
                    "employee": {
                        "meta": {
                            "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/e7b29e11-17d4-11f1-4095-ec9f00000027",
                            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                            "type": "employee",
                            "mediaType": "application/json",
                            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=e7b29e11-17d4-11f1-4095-ec9f00000027"
                        }
                    },
                    "baseSalary": 202000.0,
                    "pieceworkSalary": 202000.0
                }
            ],
            "attributes": [
                {
                    "meta": {
                        "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata/attributes/632bfc07-2861-11f1-ea19-6ef300000006",
                        "type": "attributemetadata",
                        "mediaType": "application/json"
                    },
                    "value": "atributeeee"
                }
            ],
            "startPayrollPeriod": "2026-03-24 00:00:00.000",
            "endPayrollPeriod": "2026-03-25 23:59:59.000"
        }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Начисления зарплаты.

```json
{
    "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/c760c87d-2861-11f1-cc6f-b56e00000016",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata",
        "type": "payroll",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#payroll/edit?id=c760c87d-2861-11f1-cc6f-b56e00000016"
    },
    "id": "c760c87d-2861-11f1-cc6f-b56e00000016",
    "accountId": "bc637f03-fda6-11f0-4e60-ea2900000001",
    "owner": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/be4118c7-fda6-11f0-2555-e5d500000055",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=be4118c7-fda6-11f0-2555-e5d500000055"
        }
    },
    "shared": true,
    "group": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/bc657ddf-fda6-11f0-4e60-ea2900000002",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
            "type": "group",
            "mediaType": "application/json"
        }
    },
    "updated": "2026-03-25 20:16:34.655",
    "name": "second1",
    "externalCode": "5gxUJ5yfhkqmP5NiUCjhX3",
    "moment": "2028-03-25 19:03:00.000",
    "applicable": true,
    "sum": 404000.0,
    "organization": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/be919d95-fda6-11f0-2555-e5d5000000a1",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
            "type": "organization",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=be919d95-fda6-11f0-2555-e5d5000000a1"
        }
    },
    "attributes": [
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata/attributes/632bfc07-2861-11f1-ea19-6ef300000006",
                "type": "attributemetadata",
                "mediaType": "application/json"
            },
            "id": "632bfc07-2861-11f1-ea19-6ef300000006",
            "name": "атрибут",
            "type": "string",
            "value": "atributeeee"
        }
    ],
    "created": "2026-03-25 20:16:34.695",
    "printed": false,
    "published": false,
    "files": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/c760c87d-2861-11f1-cc6f-b56e00000016/files",
            "type": "files",
            "mediaType": "application/json",
            "size": 0,
            "limit": 1000,
            "offset": 0
        }
    },
    "positions": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/c760c87d-2861-11f1-cc6f-b56e00000016/positions",
            "type": "payrollposition",
            "mediaType": "application/json",
            "size": 1,
            "limit": 1000,
            "offset": 0
        }
    },
    "startPayrollPeriod": "2026-03-24 00:00:00.000",
    "endPayrollPeriod": "2026-03-25 23:59:00.000"
}
```

> Пример запроса на создание Начисления зарплаты с позициями в теле запроса.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/payroll" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "organization": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/be919d95-fda6-11f0-2555-e5d5000000a1",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                    "type": "organization",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=be919d95-fda6-11f0-2555-e5d5000000a1"
                }
            },
            "positions": [
                {
                    "employee": {
                        "meta": {
                            "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/e7b29e11-17d4-11f1-4095-ec9f00000027",
                            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                            "type": "employee",
                            "mediaType": "application/json",
                            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=e7b29e11-17d4-11f1-4095-ec9f00000027"
                        }
                    },
                    "baseSalary": 22000.0,
                    "pieceworkSalary": 22000.0
                }
            ],
            "startPayrollPeriod": "2026-03-24 00:00:00.000",
            "endPayrollPeriod": "2026-03-25 23:59:59.000"
        }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Начисления зарплаты.

```json
{
    "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/af40426e-286a-11f1-cc6f-b56e0000001c",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata",
        "type": "payroll",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#payroll/edit?id=af40426e-286a-11f1-cc6f-b56e0000001c"
    },
    "id": "af40426e-286a-11f1-cc6f-b56e0000001c",
    "accountId": "bc637f03-fda6-11f0-4e60-ea2900000001",
    "owner": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/be4118c7-fda6-11f0-2555-e5d500000055",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=be4118c7-fda6-11f0-2555-e5d500000055"
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
    "updated": "2026-03-26 08:00:55.482",
    "name": "00007",
    "externalCode": "870W7fEMihDT8bYyUwh0q3",
    "moment": "2026-03-26 08:00:00.000",
    "applicable": true,
    "sum": 44000.0,
    "organization": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/be919d95-fda6-11f0-2555-e5d5000000a1",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
            "type": "organization",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=be919d95-fda6-11f0-2555-e5d5000000a1"
        }
    },
    "created": "2026-03-26 08:00:55.539",
    "printed": false,
    "published": false,
    "files": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/af40426e-286a-11f1-cc6f-b56e0000001c/files",
            "type": "files",
            "mediaType": "application/json",
            "size": 0,
            "limit": 1000,
            "offset": 0
        }
    },
    "positions": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/af40426e-286a-11f1-cc6f-b56e0000001c/positions",
            "type": "payrollposition",
            "mediaType": "application/json",
            "size": 1,
            "limit": 1000,
            "offset": 0
        }
    },
    "startPayrollPeriod": "2026-03-24 00:00:00.000",
    "endPayrollPeriod": "2026-03-25 23:59:00.000"
}
```


### Массовое создание и обновление Начисления зарплат
[Массовое создание и обновление](#/general#3-sozdanie-i-obnovlenie-neskolkih-obuektov) Начисления зарплат.
В теле запроса нужно передать массив, содержащий JSON представления Начисления зарплат, которые вы хотите создать или обновить.
Обновляемые Начисления зарплат должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Начисления зарплат

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/payroll" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '[
            {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/63643c49-286c-11f1-cc6f-b56e00000021",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata",
                    "type": "payroll",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#payroll/edit?id=63643c49-286c-11f1-cc6f-b56e00000021"
                },
                "name": "updated",
                "positions": [
                    {
                        "employee": {
                            "meta": {
                                "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/e7b29e11-17d4-11f1-4095-ec9f00000027",
                                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                                "type": "employee",
                                "mediaType": "application/json",
                                "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=e7b29e11-17d4-11f1-4095-ec9f00000027"
                            }
                        },
                        "baseSalary": 22000.0,
                        "pieceworkSalary": 22000.0
                    }
                ],
                "startPayrollPeriod": "2026-03-24 00:00:00.000",
                "endPayrollPeriod": "2026-03-25 23:59:59.000"
            },
            {
                "organization": {
                    "meta": {
                        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/be919d95-fda6-11f0-2555-e5d5000000a1",
                        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                        "type": "organization",
                        "mediaType": "application/json",
                        "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=be919d95-fda6-11f0-2555-e5d5000000a1"
                    }
                },
                "positions": [
                    {
                        "employee": {
                            "meta": {
                                "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/e7b29e11-17d4-11f1-4095-ec9f00000027",
                                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                                "type": "employee",
                                "mediaType": "application/json",
                                "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=e7b29e11-17d4-11f1-4095-ec9f00000027"
                            }
                        },
                        "baseSalary": 1000.0,
                        "pieceworkSalary": 1000.0
                    }
                ],
                "startPayrollPeriod": "2026-03-24 00:00:00.000",
                "endPayrollPeriod": "2026-03-25 23:59:59.000"
            }
        ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Начисления зарплат.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/63643c49-286c-11f1-cc6f-b56e00000021",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata",
      "type": "payroll",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#payroll/edit?id=63643c49-286c-11f1-cc6f-b56e00000021"
    },
    "id": "63643c49-286c-11f1-cc6f-b56e00000021",
    "accountId": "bc637f03-fda6-11f0-4e60-ea2900000001",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/be4118c7-fda6-11f0-2555-e5d500000055",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=be4118c7-fda6-11f0-2555-e5d500000055"
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
    "updated": "2026-03-26 08:15:15.045",
    "name": "updated",
    "externalCode": "8B0hkZJtgbNpQLsxmVdWV1",
    "moment": "2026-03-26 08:13:00.000",
    "applicable": true,
    "sum": 44000.0,
    "organization": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/be919d95-fda6-11f0-2555-e5d5000000a1",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=be919d95-fda6-11f0-2555-e5d5000000a1"
      }
    },
    "created": "2026-03-26 08:13:07.269",
    "printed": false,
    "published": false,
    "files": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/63643c49-286c-11f1-cc6f-b56e00000021/files",
        "type": "files",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    },
    "positions": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/63643c49-286c-11f1-cc6f-b56e00000021/positions",
        "type": "payrollposition",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
      }
    },
    "startPayrollPeriod": "2026-03-24 00:00:00.000",
    "endPayrollPeriod": "2026-03-25 23:59:00.000"
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/afa16f60-286c-11f1-cc6f-b56e0000002d",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata",
      "type": "payroll",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#payroll/edit?id=afa16f60-286c-11f1-cc6f-b56e0000002d"
    },
    "id": "afa16f60-286c-11f1-cc6f-b56e0000002d",
    "accountId": "bc637f03-fda6-11f0-4e60-ea2900000001",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/be4118c7-fda6-11f0-2555-e5d500000055",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=be4118c7-fda6-11f0-2555-e5d500000055"
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
    "updated": "2026-03-26 08:15:15.156",
    "name": "updated1",
    "externalCode": "-EyS840IieIkPeUdWixmP2",
    "moment": "2026-03-26 08:15:00.000",
    "applicable": true,
    "sum": 2000.0,
    "organization": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/be919d95-fda6-11f0-2555-e5d5000000a1",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=be919d95-fda6-11f0-2555-e5d5000000a1"
      }
    },
    "created": "2026-03-26 08:15:15.185",
    "printed": false,
    "published": false,
    "files": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/afa16f60-286c-11f1-cc6f-b56e0000002d/files",
        "type": "files",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    },
    "positions": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/afa16f60-286c-11f1-cc6f-b56e0000002d/positions",
        "type": "payrollposition",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
      }
    },
    "startPayrollPeriod": "2026-03-24 00:00:00.000",
    "endPayrollPeriod": "2026-03-25 23:59:00.000"
  }
]
```

### Удалить Начисления зарплаты

**Параметры**

| Параметр | Описание                                                                                    |
| :------- |:--------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Начисления зарплаты. |

> Запрос на удаление Начисления зарплаты с указанным id.

```shell
curl --compressed -X DELETE \
  "https://api.moysklad.ru/api/remap/1.2/entity/payroll/7944ef04-f831-11e5-7a69-971500188b19" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление Начисления зарплаты.

### Метаданные Начисления зарплат
Запрос на получение метаданных Начисления зарплат. Результат - объект JSON, включающий в себя:

| Параметр                       | Описание                                                                                     |
| ------------------------------ |:---------------------------------------------------------------------------------------------|
| **meta**                       | Ссылка на метаданные Начисления зарплат                                                      |
| **attributes**                 | Массив объектов доп. полей Начисления зарплат в формате [Метаданных](#/general#3-metadannye) |
| **states**                     | Массив статусов Начисления зарплат                                                           |
| **createShared**               | Создавать новые Начисления зарплат с меткой "Общий"                                          |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](#/general#3-rabota-s-dopolnitelnymi-polyami).


> Метаданные Начисления зарплаты

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление метданных Наисления зарплаты.

```json
{
    "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata",
        "mediaType": "application/json"
    },
    "attributes": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata/attributes",
            "type": "attributemetadata",
            "mediaType": "application/json",
            "size": 1,
            "limit": 1000,
            "offset": 0
        }
    },
    "states": [
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata/states/615bd402-1dd2-11f1-994a-b7f800000002",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata",
                "type": "state",
                "mediaType": "application/json"
            },
            "id": "615bd402-1dd2-11f1-994a-b7f800000002",
            "accountId": "bc637f03-fda6-11f0-4e60-ea2900000001",
            "name": "ggg",
            "color": 10066329,
            "stateType": "Regular",
            "entityType": "payroll"
        }
    ],
    "createShared": false
}
```

### Массовое удаление Начисления зарплат

В теле запроса нужно передать массив, содержащий JSON метаданных Наисления зарплат, которые вы хотите удалить.


> Запрос на массовое удаление Начисления зарплат.

```shell
curl --compressed -X POST \
  "https://api.moysklad.ru/api/remap/1.2/entity/payroll/delete" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -d '[
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/7944ef04-f831-11e5-7a69-971500188b1",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata",
                "type": "payroll",
                "mediaType": "application/json"
            }
        },
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/7944ef04-f831-11e5-7a69-971500188b2",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata",
                "type": "payroll",
                "mediaType": "application/json"
            }
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Начисления зарплат.

```json
[
  {
    "info":"Сущность 'payroll' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'payroll' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
```

### Отдельное доп. поле

**Параметры**

| Параметр | Описание                                                                          |
| :------- | :-------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 632bfc07-2861-11f1-ea19-6ef300000006* id Доп. поля. |

#### Запросы - Отдельное доп. поле
> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata/attributes/632bfc07-2861-11f1-ea19-6ef300000006" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata/attributes/632bfc07-2861-11f1-ea19-6ef300000006",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "632bfc07-2861-11f1-ea19-6ef300000006",
  "name": "атрибут",
  "type": "string",
  "required": false,
  "show": true
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
        "uuidHref": "https://online.moysklad.ru/app/#payroll/edit?id=946f8595-17c3-11f1-4095-ec9f00000001"
    },
    "id": "946f8595-17c3-11f1-4095-ec9f00000001",
    "accountId": "bc637f03-fda6-11f0-4e60-ea2900000001",
    "owner": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/be4118c7-fda6-11f0-2555-e5d500000055",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=be4118c7-fda6-11f0-2555-e5d500000055"
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
            "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=be919d95-fda6-11f0-2555-e5d5000000a1"
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

### Изменить Начисление зарплаты
Запрос на обновление Начисления зарплаты с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Начисления зарплаты, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Начисления зарплаты](#/documents/payroll#2-nachisleniya-zarplaty).

**Параметры**

| Параметр | Описание                                                                                    |
| :------- |:--------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 4ee9ddd8-285d-11f1-cc6f-b56e00000011* id Начисления зарплаты. |

> Пример запроса на обновление отдельного Начисления зарплаты.

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/payroll/4ee9ddd8-285d-11f1-cc6f-b56e00000011" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "organization": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/be919d95-fda6-11f0-2555-e5d5000000a1",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                    "type": "organization",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=be919d95-fda6-11f0-2555-e5d5000000a1"
                }
            },
            "name": "putSecondesss",
            "startPayrollPeriod": "2026-03-24 00:00:00.000",
            "endPayrollPeriod": "2026-03-25 23:59:59.000"
        }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Начисления зарплаты.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/4ee9ddd8-285d-11f1-cc6f-b56e00000011",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata",
    "type": "payroll",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#payroll/edit?id=4ee9ddd8-285d-11f1-cc6f-b56e00000011"
  },
  "id": "4ee9ddd8-285d-11f1-cc6f-b56e00000011",
  "accountId": "bc637f03-fda6-11f0-4e60-ea2900000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/be4118c7-fda6-11f0-2555-e5d500000055",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=be4118c7-fda6-11f0-2555-e5d500000055"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/bc657ddf-fda6-11f0-4e60-ea2900000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2026-03-27 09:44:41.770",
  "name": "putSecondesss",
  "externalCode": "VpV4ADEPgtvGZSwcvakJg1",
  "moment": "2028-03-25 19:03:00.000",
  "applicable": true,
  "sum": 404000.0,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/be919d95-fda6-11f0-2555-e5d5000000a1",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=be919d95-fda6-11f0-2555-e5d5000000a1"
    }
  },
  "created": "2026-03-25 19:44:34.603",
  "printed": false,
  "published": false,
  "files": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/4ee9ddd8-285d-11f1-cc6f-b56e00000011/files",
      "type": "files",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/4ee9ddd8-285d-11f1-cc6f-b56e00000011/positions",
      "type": "payrollposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "startPayrollPeriod": "2026-03-24 00:00:00.000",
  "endPayrollPeriod": "2026-03-25 23:59:00.000"
}
```

> Пример запроса на изменение Наисления зарплаты с дополнительными полями.

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/payroll/4ee9ddd8-285d-11f1-cc6f-b56e00000011" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "organization": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/be919d95-fda6-11f0-2555-e5d5000000a1",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                    "type": "organization",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=be919d95-fda6-11f0-2555-e5d5000000a1"
                }
            },
            "name": "putSecondesss",
            "startPayrollPeriod": "2026-03-24 00:00:00.000",
            "endPayrollPeriod": "2026-03-25 23:59:59.000",
            "attributes": [
                {
                    "meta": {
                        "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata/attributes/632bfc07-2861-11f1-ea19-6ef300000006",
                        "type": "attributemetadata",
                        "mediaType": "application/json"
                    },
                    "value": "Обновленный Атрибут"
                }
            ]
        }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Начисления зарплаты.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/4ee9ddd8-285d-11f1-cc6f-b56e00000011",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata",
    "type": "payroll",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#payroll/edit?id=4ee9ddd8-285d-11f1-cc6f-b56e00000011"
  },
  "id": "4ee9ddd8-285d-11f1-cc6f-b56e00000011",
  "accountId": "bc637f03-fda6-11f0-4e60-ea2900000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/be4118c7-fda6-11f0-2555-e5d500000055",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=be4118c7-fda6-11f0-2555-e5d500000055"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/bc657ddf-fda6-11f0-4e60-ea2900000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2026-03-27 09:44:41.770",
  "name": "putSecondesss",
  "externalCode": "VpV4ADEPgtvGZSwcvakJg1",
  "moment": "2028-03-25 19:03:00.000",
  "applicable": true,
  "sum": 404000.0,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/be919d95-fda6-11f0-2555-e5d5000000a1",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=be919d95-fda6-11f0-2555-e5d5000000a1"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata/attributes/632bfc07-2861-11f1-ea19-6ef300000006",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "632bfc07-2861-11f1-ea19-6ef300000006",
      "name": "атрибут",
      "type": "string",
      "value": "Обновленный Атрибут"
    }
  ],
  "created": "2026-03-25 19:44:34.603",
  "printed": false,
  "published": false,
  "files": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/4ee9ddd8-285d-11f1-cc6f-b56e00000011/files",
      "type": "files",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/4ee9ddd8-285d-11f1-cc6f-b56e00000011/positions",
      "type": "payrollposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "startPayrollPeriod": "2026-03-24 00:00:00.000",
  "endPayrollPeriod": "2026-03-25 23:59:00.000"
}
```

> Пример запроса на обновление Начисления зарплаты с позициями в теле запроса.

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/payroll/4ee9ddd8-285d-11f1-cc6f-b56e00000011" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "organization": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/be919d95-fda6-11f0-2555-e5d5000000a1",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                    "type": "organization",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=be919d95-fda6-11f0-2555-e5d5000000a1"
                }
            },
            "positions": [
                {
                    "employee": {
                        "meta": {
                            "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/e7b29e11-17d4-11f1-4095-ec9f00000027",
                            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                            "type": "employee",
                            "mediaType": "application/json",
                            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=e7b29e11-17d4-11f1-4095-ec9f00000027"
                        }
                    },
                    "baseSalary": 200.00,
                    "pieceworkSalary": 300.0
                }
            ],
            "startPayrollPeriod": "2026-03-24 00:00:00.000",
            "endPayrollPeriod": "2026-03-25 23:59:59.000"
        }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Начисления зарплаты.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/4ee9ddd8-285d-11f1-cc6f-b56e00000011",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata",
    "type": "payroll",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#payroll/edit?id=4ee9ddd8-285d-11f1-cc6f-b56e00000011"
  },
  "id": "4ee9ddd8-285d-11f1-cc6f-b56e00000011",
  "accountId": "bc637f03-fda6-11f0-4e60-ea2900000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/be4118c7-fda6-11f0-2555-e5d500000055",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=be4118c7-fda6-11f0-2555-e5d500000055"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/bc657ddf-fda6-11f0-4e60-ea2900000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2026-03-27 09:54:21.536",
  "name": "putSecondesss",
  "externalCode": "VpV4ADEPgtvGZSwcvakJg1",
  "moment": "2028-03-25 19:03:00.000",
  "applicable": true,
  "sum": 500.0,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/be919d95-fda6-11f0-2555-e5d5000000a1",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=be919d95-fda6-11f0-2555-e5d5000000a1"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/metadata/attributes/632bfc07-2861-11f1-ea19-6ef300000006",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "632bfc07-2861-11f1-ea19-6ef300000006",
      "name": "атрибут",
      "type": "string",
      "value": "Обновленный Атрибут"
    }
  ],
  "created": "2026-03-25 19:44:34.603",
  "printed": false,
  "published": false,
  "files": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/4ee9ddd8-285d-11f1-cc6f-b56e00000011/files",
      "type": "files",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/4ee9ddd8-285d-11f1-cc6f-b56e00000011/positions",
      "type": "payrollposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "startPayrollPeriod": "2026-03-24 00:00:00.000",
  "endPayrollPeriod": "2026-03-25 23:59:00.000"
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
                    "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=e7b29e11-17d4-11f1-4095-ec9f00000027"
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
                    "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=be4118c7-fda6-11f0-2555-e5d500000055"
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
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=e7b29e11-17d4-11f1-4095-ec9f00000027"
        }
    },
    "baseSalary": 100.0,
    "pieceworkSalary": 100.0
}
```

### Создать позицию
Запрос на создание новой позиции в Начислении зарплаты.
Для успешного создания необходимо в теле запроса указать следующие поля:

+ **employee** - Ссылка на сотрудника, которого представляет собой позиция.

Подробнее об этом поле можно прочитать в описании [позиции Начисления зарплаты](#/documents/payroll#4-pozicii-nachisleniya-zarplat)

+ **baseSalary** - Начисления по окладу сотрудника. Должно быть положительным, иначе возникнет ошибка. Округляется до целой части
+ **pieceworkSalary** - Начисления сдельной оплаты сотрудника. Должно быть положительным, иначе возникнет ошибка. Округляется до целой части.

**Параметры**

| Параметр | Описание                                                                                    |
| :------- |:--------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 4ee9ddd8-285d-11f1-cc6f-b56e00000011* id Начисления зарплаты. |

> Пример создания одной позиции в Начисления зарплаты.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/payroll/4ee9ddd8-285d-11f1-cc6f-b56e00000011/positions" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "employee": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/be4118c7-fda6-11f0-2555-e5d500000055",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                    "type": "employee",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=be4118c7-fda6-11f0-2555-e5d500000055"
                }
            },
            "baseSalary": 2000.00,
            "pieceworkSalary": 3000.0
        }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной позиции отдельного Начисления зарплаты.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/4ee9ddd8-285d-11f1-cc6f-b56e00000011/positions/bd6c1d53-293b-11f1-3484-ec2700000017",
      "type": "payrollposition",
      "mediaType": "application/json"
    },
    "id": "bd6c1d53-293b-11f1-3484-ec2700000017",
    "accountId": "bc637f03-fda6-11f0-4e60-ea2900000001",
    "employee": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/be4118c7-fda6-11f0-2555-e5d500000055",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=be4118c7-fda6-11f0-2555-e5d500000055"
      }
    },
    "baseSalary": 2000.0,
    "pieceworkSalary": 3000.0
  }
]
```

> Пример создания сразу нескольких позиций в Начислении зарплаты.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/payroll/4ee9ddd8-285d-11f1-cc6f-b56e00000011/positions" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '[
            {
                "employee": {
                    "meta": {
                        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/7b0d82db-2bf3-11f1-37a8-e68f00000004",
                        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                        "type": "employee",
                        "mediaType": "application/json",
                        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=7b0d82db-2bf3-11f1-37a8-e68f00000004"
                    }
                },
                "baseSalary": 2000.00,
                "pieceworkSalary": 3000.0
            },
            {
                "employee": {
                    "meta": {
                        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/960fd277-2bf3-11f1-37a8-e68f00000008",
                        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                        "type": "employee",
                        "mediaType": "application/json",
                        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=960fd277-2bf3-11f1-37a8-e68f00000008"
                    }
                },
                "baseSalary": 2010.00,
                "pieceworkSalary": 5000.0
            }
        ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка созданных позиций отдельного Начисления зарплаты.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/4ee9ddd8-285d-11f1-cc6f-b56e00000011/positions/defaedc9-2bf3-11f1-37a8-e68f0000000c",
      "type": "payrollposition",
      "mediaType": "application/json"
    },
    "id": "defaedc9-2bf3-11f1-37a8-e68f0000000c",
    "accountId": "bc637f03-fda6-11f0-4e60-ea2900000001",
    "employee": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/7b0d82db-2bf3-11f1-37a8-e68f00000004",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=7b0d82db-2bf3-11f1-37a8-e68f00000004"
      }
    },
    "baseSalary": 2000.00,
    "pieceworkSalary": 3000.00
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/4ee9ddd8-285d-11f1-cc6f-b56e00000011/positions/defb003f-2bf3-11f1-37a8-e68f0000000d",
      "type": "payrollposition",
      "mediaType": "application/json"
    },
    "id": "defb003f-2bf3-11f1-37a8-e68f0000000d",
    "accountId": "bc637f03-fda6-11f0-4e60-ea2900000001",
    "employee": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/960fd277-2bf3-11f1-37a8-e68f00000008",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=960fd277-2bf3-11f1-37a8-e68f00000008"
      }
    },
    "baseSalary": 2010.00,
    "pieceworkSalary": 5000.00
  }
]
```

### Изменить позицию
Запрос на обновление отдельной позиции Начисления зарплаты. Для обновления позиции нет каких-либо
обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

| Параметр       | Описание                                                                                            |
| :------------- |:----------------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 4ee9ddd8-285d-11f1-cc6f-b56e00000011* id Начисления зарплаты.         |
| **positionID** | `string` (required) *Example: defb003f-2bf3-11f1-37a8-e68f0000000d* id позиции Начисления зарплаты. |

> Пример запроса на обновление отдельной позиции в Начисления зарплаты.

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/payroll/4ee9ddd8-285d-11f1-cc6f-b56e00000011/positions/defb003f-2bf3-11f1-37a8-e68f0000000d" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '    {
                "baseSalary": 20.0,
                "pieceworkSalary": 5000.0
            }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции Начисления зарплаты.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/4ee9ddd8-285d-11f1-cc6f-b56e00000011/positions/defb003f-2bf3-11f1-37a8-e68f0000000d",
    "type": "payrollposition",
    "mediaType": "application/json"
  },
  "id": "defb003f-2bf3-11f1-37a8-e68f0000000d",
  "accountId": "bc637f03-fda6-11f0-4e60-ea2900000001",
  "employee": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/960fd277-2bf3-11f1-37a8-e68f00000008",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=960fd277-2bf3-11f1-37a8-e68f00000008"
    }
  },
  "baseSalary": 20.00,
  "pieceworkSalary": 5000.00
}
```

### Удалить позицию

**Параметры**

| Параметр       | Описание                                                                                            |
| :------------- |:----------------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 4ee9ddd8-285d-11f1-cc6f-b56e00000011* id Начисления зарплаты.         |
| **positionID** | `string` (required) *Example: defb003f-2bf3-11f1-37a8-e68f0000000d* id позиции Начисления зарплаты. |

> Запрос на удаление отдельной позиции Начисления зарплаты с указанным id.

```shell
curl --compressed -X DELETE \
  "https://api.moysklad.ru/api/remap/1.2/entity/payroll/4ee9ddd8-285d-11f1-cc6f-b56e00000011/positions/defb003f-2bf3-11f1-37a8-e68f0000000d" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление позиции Начисления зарплаты.

### Массовое удаление позиций

**Параметры**

| Параметр       | Описание                                                                                    |
| :------------- |:--------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 4ee9ddd8-285d-11f1-cc6f-b56e00000011* id Начисления зарплаты. |

> Запрос на массовое удаление позиций Начисления зарплаты.

```shell
curl --compressed -X POST \
  "https://api.moysklad.ru/api/remap/1.2/entity/payroll/4ee9ddd8-285d-11f1-cc6f-b56e00000011/positions/delete" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -d '[
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/4ee9ddd8-285d-11f1-cc6f-b56e00000011/positions/7fce2da5-684d-11ee-ac12-000c000000a2",
            "type": "payrollposition",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/payroll/4ee9ddd8-285d-11f1-cc6f-b56e00000011/positions/7fce37a5-684d-11ee-ac12-000c000000a3",
            "type": "payrollposition",
            "mediaType": "application/json"
          }
        }
      ]'  
```

> Response 200 (application/json)
Успешное удаление позиций Начисления зарплаты. 
