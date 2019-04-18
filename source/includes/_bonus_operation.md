## Бонусная операция
### Бонусные операции 

Средствами JSON API можно создавать и обновлять сведения о Бонусных операциях, запрашивать списки Бонусных операций и сведения по отдельным Бонусым операциям. Кодом сущности для Бонусной операции в составе JSON API является ключевое слово **bonustransaction**.

##### Атрибуты сущности

+ **meta** - [Метаданные](#metadannye) бонусной операции
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](#metadannye)
+ **shared** - Общий доступ
+ **updated** - Момент последнего обновления Бонусной операции
+ **created** - Момент создания Бонусной операции
+ **group** - Отдел сотрудника в формате [Метаданных](#metadannye)
+ **externalCode** - Внешний код Бонусной операции
+ **name** - Наименование бонусной операции
+ **applicable** - Отметка о проведении
+ **moment** - Время проведения бонусной операции
+ **agent** - Контрагент, связанный с бонусной операцией в формате [Метаданных](#metadannye) `Необходимое`
+ **parentDocument** - Связанный документ бонусной операции в формате [Метаданных](#metadannye)
+ **bonusProgram** - Бонусная программа в формате [Метаданных](#metadannye)
+ **bonusValue** - Количество бонусных баллов
+ **organization** - ссылка на ваше юрлицо в формате [Метаданных](#metadannye)
+ **transactionType** - Тип бонусной операции. Возможные значения: `EARNING`, `SPENDING`. `Необходимое`

##### Атрибуты доступные для фильтрации

+ **id** - ID в формате UUID
+ **moment** - Момент создания бонусной операции
+ **updated** - Момент последнего обновления бонусной операции
+ **updatedBy** - Автор последнего обновления бонусной операции в формате `uid` (`admin@admin`)
+ **agent** - Ссылка на контрагента в формате [Метаданных](#metadannye)
+ **bonusProgram** - Ссылка на бонусную программу в формате [Метаданных](#metadannye)
+ **bonusValue** - Бонусные баллы

### Получить Бонусные операции

Запрос на получения списка всех Бонусных операций для данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

- **meta** [Метаданные](#metadannye) о выдаче,
- **context** - [Метаданные](#metadannye) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой Бонусные операции.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить Бонусные операции

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Бонусных операций.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/?limit=5",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/metadata",
    "type": "bonustransaction",
    "mediaType": "application/json",
    "size": 4,
    "limit": 5,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/7c6ecd51-b738-11e8-727d-307300000028",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/metadata",
        "type": "bonustransaction",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#bonustransaction/edit?id=7c6ecd51-b738-11e8-727d-307300000028"
      },
      "id": "7c6ecd51-b738-11e8-727d-307300000028",
      "accountId": "ba5d8717-d6e7-4741-9f2e-4e343a447fb9",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/4a980e02-b685-11e8-727d-30730000002b",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=4a980e02-b685-11e8-727d-30730000002b"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/4427b6f1-b685-11e8-727d-307300000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2018-09-13 12:36:26",
      "name": "d00001",
      "externalCode": "htdrUVpciRX4kldKIN7VL0",
      "moment": "2018-09-13 12:36:26",
      "applicable": true,
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9fea1d90-d488-4271-97bc-a9ad1b9fbcc0",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=9fea1d90-d488-4271-97bc-a9ad1b9fbcc0"
        }
      },
      "created": "2018-09-13 12:36:26",
      "bonusProgram": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/956f6ff7-718f-4849-be47-7509fdd18db9",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/metadata",
          "type": "bonusprogram",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=956f6ff7-718f-4849-be47-7509fdd18db9"
        }
      },
      "bonusValue": 15,
      "transactionType": "EARNING"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/7c6ecd51-b738-11e8-727d-307300000029",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/metadata",
        "type": "bonustransaction",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#bonustransaction/edit?id=7c6ecd51-b738-11e8-727d-307300000029"
      },
      "id": "7c6ecd51-b738-11e8-727d-307300000029",
      "accountId": "ba5d8717-d6e7-4741-9f2e-4e343a447fb9",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/4a980e02-b685-11e8-727d-30730000002b",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=4a980e02-b685-11e8-727d-30730000002b"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/4427b6f1-b685-11e8-727d-307300000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2018-09-13 12:36:26",
      "name": "updated_name",
      "externalCode": "atdrUVpciRX4kljKIN7iL8",
      "moment": "2018-09-13 12:36:26",
      "applicable": true,
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9fea1d90-d488-4271-97bc-a9ad1b9fbcc0",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=9fea1d90-d488-4271-97bc-a9ad1b9fbcc0"
        }
      },
      "created": "2018-09-13 12:36:26",
      "bonusProgram": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/956f6ff7-718f-4849-be47-7509fdd18db9",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/metadata",
          "type": "bonusprogram",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=956f6ff7-718f-4849-be47-7509fdd18db9"
        }
      },
      "bonusValue": 1235,
      "transactionType": "EARNING"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/7c6ecd51-b738-11e8-727d-307300000038",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/metadata",
        "type": "bonustransaction",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#bonustransaction/edit?id=7c6ecd51-b738-11e8-727d-307300000038"
      },
      "id": "7c6ecd51-b738-11e8-727d-307300000038",
      "accountId": "ba5d8717-d6e7-4741-9f2e-4e343a447fb9",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/4a980e02-b685-11e8-727d-30730000002b",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=4a980e02-b685-11e8-727d-30730000002b"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/4427b6f1-b685-11e8-727d-307300000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2018-09-13 12:36:26",
      "name": "d00003",
      "externalCode": "ald88VpciRX4kkklIN7123",
      "moment": "2018-09-13 12:36:26",
      "applicable": true,
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9fea1d90-d488-4271-97bc-a9ad1b9fbcc0",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=9fea1d90-d488-4271-97bc-a9ad1b9fbcc0"
        }
      },
      "created": "2018-09-13 12:36:26",
      "bonusProgram": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/956f6ff7-718f-4849-be47-7509fdd18db9",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/metadata",
          "type": "bonusprogram",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=956f6ff7-718f-4849-be47-7509fdd18db9"
        }
      },
      "bonusValue": 100500,
      "transactionType": "SPENDING"
    }
  ]
}
```

### Создать Бонусную операцию

Запрос на создание новой бонусной операции на данной учетной записи.

> Пример запроса на создание новой бонусной операции.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "d00001",
            "applicable": true,
            "agent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/45457cb8-f473-4618-ab19-2294c328f4ba",
                "type": "counterparty",
                "mediaType": "application/json"
              }
            },
            "bonusProgram": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/fc2666ba-5d39-4a60-8105-4b678180b059",
                "type": "bonusprogram",
                "mediaType": "application/json"
              }
            },
            "parentDocument": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/0b0b7d56-2a44-4aa2-adc2-a49dadd61af0",
                "type": "retaildemand",
                "mediaType": "application/json"
              }
            },
            "transactionType": "EARNING",
            "bonusValue": 15
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной бонусной операции.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/7c6ecd51-b738-11e8-727d-307300000028",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/metadata",
    "type": "bonustransaction",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#bonustransaction/edit?id=7c6ecd51-b738-11e8-727d-307300000028"
  },
  "id": "7c6ecd51-b738-11e8-727d-307300000028",
  "accountId": "44245b3a-b685-11e8-727d-307300000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/4a980e02-b685-11e8-727d-30730000002b",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=4a980e02-b685-11e8-727d-30730000002b"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/4427b6f1-b685-11e8-727d-307300000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2018-09-13 12:36:26",
  "name": "d000001",
  "externalCode": "htdrUVpciRX4kldKIN7VL0",
  "moment": "2018-09-13 12:36:00",
  "applicable": true,
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/341a6b49-b688-11e8-727d-307300000012",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=341a6b49-b688-11e8-727d-307300000012"
    }
  },
  "created": "2018-09-13 12:36:26",
  "parentDocument": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/e182ab48-b726-11e8-727d-3073000000b4",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata",
      "type": "retaildemand",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#retaildemand/edit?id=e182ab48-b726-11e8-727d-3073000000b4"
    }
  },
  "bonusProgram": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/3cc6edd8-b688-11e8-727d-30730000001b",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/metadata",
      "type": "bonusprogram",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=3cc6edd8-b688-11e8-727d-30730000001b"
    }
  },
  "bonusValue": 15,
  "transactionType": "EARNING"
}
```

### Массовое создание и обновление Бонусных операций

[Массовое создание и обновление](#sozdanie-i-obnovlenie-neskol-kih-ob#ektov) Бонусных операций.
В теле запроса нужно передать массив, содержащий JSON представления Бонусных операций, которые вы хотите создать или обновить.
Обновляемые Бонусные операции должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Бонусных операций

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "d00001",
              "applicable": true,
              "agent": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9fea1d90-d488-4271-97bc-a9ad1b9fbcc0",
                  "type": "counterparty",
                  "mediaType": "application/json"
                }
              },
              "bonusProgram": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/956f6ff7-718f-4849-be47-7509fdd18db9",
                  "type": "bonusprogram",
                  "mediaType": "application/json"
                }
              },
              "transactionType": "EARNING",
              "bonusValue": 15
            },
            {
              "agent": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9fea1d90-d488-4271-97bc-a9ad1b9fbcc0",
                  "type": "counterparty",
                  "mediaType": "application/json"
                }
              },
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/956f6ff7-718f-4849-be47-7509fdd18db9",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/metadata",
                "type": "bonustransaction",
                "mediaType": "application/json"
              },
              "name": "updated_name",
              "bonusValue": 1235
            },
            {
              "name": "d00003",
              "applicable": true,
              "agent": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9fea1d90-d488-4271-97bc-a9ad1b9fbcc0",
                  "type": "counterparty",
                  "mediaType": "application/json"
                }
              },
              "bonusProgram": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/956f6ff7-718f-4849-be47-7509fdd18db9",
                  "type": "bonusprogram",
                  "mediaType": "application/json"
                }
              },
              "transactionType": "SPENDING",
              "bonusValue": 100500
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Бонусных операций.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/7c6ecd51-b738-11e8-727d-307300000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/metadata",
      "type": "bonustransaction",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#bonustransaction/edit?id=7c6ecd51-b738-11e8-727d-307300000028"
    },
    "id": "7c6ecd51-b738-11e8-727d-307300000028",
    "accountId": "ba5d8717-d6e7-4741-9f2e-4e343a447fb9",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/4a980e02-b685-11e8-727d-30730000002b",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=4a980e02-b685-11e8-727d-30730000002b"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/4427b6f1-b685-11e8-727d-307300000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2018-09-13 12:36:26",
    "name": "d00001",
    "externalCode": "htdrUVpciRX4kldKIN7VL0",
    "moment": "2018-09-13 12:36:26",
    "applicable": true,
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9fea1d90-d488-4271-97bc-a9ad1b9fbcc0",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=9fea1d90-d488-4271-97bc-a9ad1b9fbcc0"
      }
    },
    "created": "2018-09-13 12:36:26",
    "bonusProgram": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/956f6ff7-718f-4849-be47-7509fdd18db9",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/metadata",
        "type": "bonusprogram",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=956f6ff7-718f-4849-be47-7509fdd18db9"
      }
    },
    "bonusValue": 15,
    "transactionType": "EARNING"
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/7c6ecd51-b738-11e8-727d-307300000029",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/metadata",
      "type": "bonustransaction",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#bonustransaction/edit?id=7c6ecd51-b738-11e8-727d-307300000029"
    },
    "id": "7c6ecd51-b738-11e8-727d-307300000029",
    "accountId": "ba5d8717-d6e7-4741-9f2e-4e343a447fb9",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/4a980e02-b685-11e8-727d-30730000002b",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=4a980e02-b685-11e8-727d-30730000002b"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/4427b6f1-b685-11e8-727d-307300000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2018-09-13 12:36:26",
    "name": "updated_name",
    "externalCode": "atdrUVpciRX4kljKIN7iL8",
    "moment": "2018-09-13 12:36:26",
    "applicable": true,
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9fea1d90-d488-4271-97bc-a9ad1b9fbcc0",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=9fea1d90-d488-4271-97bc-a9ad1b9fbcc0"
      }
    },
    "created": "2018-09-13 12:36:26",
    "bonusProgram": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/956f6ff7-718f-4849-be47-7509fdd18db9",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/metadata",
        "type": "bonusprogram",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=956f6ff7-718f-4849-be47-7509fdd18db9"
      }
    },
    "bonusValue": 1235,
    "transactionType": "EARNING"
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/7c6ecd51-b738-11e8-727d-307300000038",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/metadata",
      "type": "bonustransaction",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#bonustransaction/edit?id=7c6ecd51-b738-11e8-727d-307300000038"
    },
    "id": "7c6ecd51-b738-11e8-727d-307300000038",
    "accountId": "ba5d8717-d6e7-4741-9f2e-4e343a447fb9",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/4a980e02-b685-11e8-727d-30730000002b",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=4a980e02-b685-11e8-727d-30730000002b"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/4427b6f1-b685-11e8-727d-307300000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2018-09-13 12:36:26",
    "name": "d00003",
    "externalCode": "ald88VpciRX4kkklIN7123",
    "moment": "2018-09-13 12:36:26",
    "applicable": true,
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9fea1d90-d488-4271-97bc-a9ad1b9fbcc0",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=9fea1d90-d488-4271-97bc-a9ad1b9fbcc0"
      }
    },
    "created": "2018-09-13 12:36:26",
    "bonusProgram": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/956f6ff7-718f-4849-be47-7509fdd18db9",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/metadata",
        "type": "bonusprogram",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=956f6ff7-718f-4849-be47-7509fdd18db9"
      }
    },
    "bonusValue": 100500,
    "transactionType": "SPENDING"
  }
]
```

## Удалить Бонусную операцию

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Бонусной операции.|

> Запрос на удаление бонусной операции.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление Бонусной операции.

### Массовое удаление Бонусных операций

В теле запроса нужно передать массив, содержащий JSON метаданных Бонусных операций, которые вы хотите удалить.


> Запрос на массовое удаление Бонусных операций. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction"
  -H "Authorization: Basic <Access-Token>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/metadata",
            "type": "bonustransaction",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/metadata",
            "type": "bonustransaction",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информацио об удалении Бонусных операций.

```json
[
  {
    "info":"Сущность 'bonustransaction' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'bonustransaction' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
```

### Бонусная операция

## Получить Бонусную операцию

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Бонусной операции.|

> Запрос на получение бонусной операции с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Бонусной операции с указанным id.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/7c6ecd51-b738-11e8-727d-307300000028",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/metadata",
    "type": "bonustransaction",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#bonustransaction/edit?id=7c6ecd51-b738-11e8-727d-307300000028"
  },
  "id": "7c6ecd51-b738-11e8-727d-307300000028",
  "accountId": "44245b3a-b685-11e8-727d-307300000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/4a980e02-b685-11e8-727d-30730000002b",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=4a980e02-b685-11e8-727d-30730000002b"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/4427b6f1-b685-11e8-727d-307300000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2018-09-13 12:36:26",
  "name": "d000013",
  "externalCode": "htdrUVpciRX4kldKIN7VL0",
  "moment": "2018-09-13 12:36:00",
  "applicable": true,
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/341a6b49-b688-11e8-727d-307300000012",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=341a6b49-b688-11e8-727d-307300000012"
    }
  },
  "created": "2018-09-13 12:36:26",
  "parentDocument": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/e182ab48-b726-11e8-727d-3073000000b4",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata",
      "type": "retaildemand",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#retaildemand/edit?id=e182ab48-b726-11e8-727d-3073000000b4"
    }
  },
  "bonusProgram": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/3cc6edd8-b688-11e8-727d-30730000001b",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/metadata",
      "type": "bonusprogram",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=3cc6edd8-b688-11e8-727d-30730000001b"
    }
  },
  "bonusValue": 15,
  "transactionType": "EARNING"
}
```

## Изменить Бонусную операцию

Запрос на изменение объекта, представляющего собой бонусную операцию. Невозможно изменение типа бонусной операции.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Бонусной операции.|

> Пример запроса на обновление Бонусной операции.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "bonusValue": 15524
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Бонусной операции.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/d8dda7b8-b76d-11e8-727d-3073000000a2",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonustransaction/metadata",
    "type": "bonustransaction",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#bonustransaction/edit?id=d8dda7b8-b76d-11e8-727d-3073000000a2"
  },
  "id": "d8dda7b8-b76d-11e8-727d-3073000000a2",
  "accountId": "44245b3a-b685-11e8-727d-307300000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/4a980e02-b685-11e8-727d-30730000002b",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=4a980e02-b685-11e8-727d-30730000002b"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/4427b6f1-b685-11e8-727d-307300000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2018-09-14 10:19:54",
  "name": "name_change",
  "externalCode": "dzmLEueIjUHccIa6GP6UX2",
  "moment": "2018-09-13 18:58:00",
  "applicable": true,
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/4ac8d7ea-b685-11e8-727d-307300000056",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=4ac8d7ea-b685-11e8-727d-307300000056"
    }
  },
  "created": "2018-09-13 18:58:25",
  "parentDocument": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/90f4f8df-b76b-11e8-727d-307300000090",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata",
      "type": "retaildemand",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#retaildemand/edit?id=90f4f8df-b76b-11e8-727d-307300000090"
    }
  },
  "bonusProgram": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/3cc6edd8-b688-11e8-727d-30730000001b",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/metadata",
      "type": "bonusprogram",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=3cc6edd8-b688-11e8-727d-30730000001b"
    }
  },
  "bonusValue": 15524,
  "transactionType": "SPENDING"
}
```
