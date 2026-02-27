## Заказ кодов маркировки

Средствами JSON API можно создавать, обновлять и управлять сведениями о Заказах кодов маркировки, запрашивать списки Заказов и получать данные по отдельным Заказам. Позициями Заказов можно управлять как в составе отдельного Заказа кодов маркировки, так и отдельно – с помощью специальных ресурсов для управления позициями. Кодом сущности для Заказа кодов маркировки в составе JSON API является ключевое слово **emissionorder**.
Больше информации о работе с Заказами кодов маркировки и их особенностях вы можете найти в документации службы поддержки [этой ссылке](https://support.moysklad.ru/hc/ru/articles/360022550274-%D0%97%D0%B0%D0%BA%D0%B0%D0%B7-%D0%B8-%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D1%8C-%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2-%D0%BC%D0%B0%D1%80%D0%BA%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B8).

#### Тарифные ограничения
Для создания/изменения Заказов кодов маркировки необходима тарифная опция Маркировка для аккаунтов из RU региона и расширение Честный знак для остальных регионов.

#### Атрибуты сущности

| Название          | Тип                            | Фильтрация                 | Описание                                                                                                                                      |
|-------------------|:-------------------------------|:---------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**     | UUID                           |                            | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                          |
| **created**       | DateTime                       |                            | Момент создания Заказа кодов маркировки<br>`+Обязательное при ответе` `+Только для чтения`                                                    |
| **description**   | String(255)                    | `=` `!=` `~` `~=` `=~`     | Комментарий                                                                                                                                   |
| **documentState** | Enum                           |                            | Состояние документов маркировки. [Подробнее тут](#/documents/emissionorder#4-sostoyanie-dokumentov-markirovki) <br>`+Обязательное при ответе` |
| **emissionType**  | Enum                           |                            | Способ ввода в оборот. [Подробнее тут](#/documents/emissionorder#4-sposob-vvoda-v-oborot) <br>`+Только для чтения`                            |
| **externalCode**  | String(255)                    | `=` `!=` `~` `~=` `=~`     | Внешний код Заказа кодов маркировки<br>`+Обязательное при ответе`                                                                             |
| **group**         | [Meta](#/general#3-metadannye) | `=` `!=`                   | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                      |
| **id**            | UUID                           |                            | ID Заказа кодов маркировки<br>`+Обязательное при ответе` `+Только для чтения`                                                                 |
| **meta**          | [Meta](#/general#3-metadannye) |                            | Метаданные Заказа кодов маркировки<br>`+Обязательное при ответе` `+Только для чтения`                                                         |
| **moment**        | DateTime                       | `=` `!=` `<` `>` `<=` `>=` | Дата документа<br>`+Обязательное при ответе`                                                                                                  |
| **name**          | String(255)                    | `=` `!=` `~` `~=` `=~`     | Наименование Заказа кодов маркировки <br>`+Обязательное при ответе`                                                                           |
| **organization**  | [Meta](#/general#3-metadannye) |                            | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand`                                                                                     |
| **owner**         | [Meta](#/general#3-metadannye) | `=` `!=`                   | Владелец (Сотрудник)<br>`+Expand`                                                                                                             |
| **positions**     | MetaArray                      |                            | Метаданные позиций Заказа кодов маркировки<br>`+Обязательное при ответе` `+Expand`                                                            |
| **printed**       | Boolean                        |                            | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                      |
| **published**     | Boolean                        |                            | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                    |
| **shared**        | Boolean                        | `=` `!=`                   | Общий доступ<br>`+Обязательное при ответе`                                                                                                    |
| **state**         | [Meta](#/general#3-metadannye) | `=` `!=`                   | Метаданные статуса Заказа кодов маркировки<br>`+Expand`                                                                                       |
| **trackingType**  | Enum                           |                            | Тип маркируемой продукции. [Подробнее тут](#/dictionaries/bundle#5-tip-markiruemoj-produkcii) <br>`+Обязательное при ответе`                  |
| **updated**       | DateTime                       | `=` `!=` `<` `>` `<=` `>=` | Момент последнего обновления<br>`+Обязательное при ответе` `+Только для чтения`                                                               |

#### Связи с другими документами

| Название                   | Описание                                                                                           |
|----------------------------|:---------------------------------------------------------------------------------------------------|
| **productionTasks**        | Массив ссылок на связанные производственные задания в формате [Метаданных](#/general#3-metadannye) |

#### Позиции Заказа кодов маркировки
Позиции Заказа кодов маркировки - это список товаров/модификаций/серий.
В Заказе кодов маркировки не может присутствовать больше 10 позиций.
Поле **quantity** имеет максимальное ограничение в 1000 шт.

##### Объект позиции Заказа кодов маркировки содержит следующие поля:

| Название       | Тип                            | Описание                                                                                                                                             |
|----------------|:-------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**  | UUID                           | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения` `+Change-handler`                                                               |
| **assortment** | [Meta](#/general#3-metadannye) | Метаданные товара/модификации/серии, которую представляет собой позиция<br>`+Обязательное при ответе` `+Expand` `+Change-handler` `+Update-provider` |
| **id**         | UUID                           | ID позиции<br>`+Обязательное при ответе` `+Только для чтения` `+Change-handler` `+Update-provider`                                                   |
| **meta**       | [Meta](#/general#3-metadannye) | Метаданные позиции заказа кодов маркировки<br>`+Обязательное при ответе` `+Только для чтения` `+Change-handler`                                      |
| **quantity**   | Float                          | Количество товаров данного вида в позиции.<br>`+Обязательное при ответе` `+Change-handler` `+Update-provider`                                        |
| **status**     | Enum                           | Статус кодов. <br>`+Обязательное при ответе` `+Только для чтения` [Подробнее тут](#/documents/emissionorder#4-status-kodov) `+Change-handler`        |


#### Статус кодов
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

#### Способ ввода в оборот
Значения поля emissionType.

| Значение        | Описание                               |
|-----------------|:---------------------------------------|
| **LOCAL**       | Произведен в РФ                        |
| **FOREIGN**     | Ввезен в РФ                            |
| **REMAINS**     | Маркировка остатков                    |
| **CROSSBORDER** | Ввезен из стран ЕАЭС                   |
| **COMMISSION**  | Принят на комиссию от физического лица |

#### Состояние документов маркировки
Значения поля documentState.

| Значение                  | Описание     |
|---------------------------|:-------------|
| **CREATED**               | Не отправлен |
| **SUZ_CREATED**           | Создан       |
| **SUZ_SEND**              | Отправлен    |
| **SUZ_COMPLETED**         | Закрыт       |

### Получить заказы кодов маркировки
Запрос всех заказов кодов маркировки на учетной записи.

**Параметры**

| Параметр   | Описание                                                                                                                               |
|------------|:---------------------------------------------------------------------------------------------------------------------------------------|
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить заказы кодов маркировки

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Заказов кодов маркировки.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder",
    "type": "emissionorder",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/33c8ac0b-a670-11ef-ac12-000d00000111",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata",
        "type": "emissionorder",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#emissionorder/edit?id=33c8ac0b-a670-11ef-ac12-000d00000111"
      },
      "id": "33c8ac0b-a670-11ef-ac12-000d00000111",
      "accountId": "b9c9f2e4-a66f-11ef-ac12-000f00000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/bc5114ab-a66f-11ef-ac12-000d00000050",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=bc5114ab-a66f-11ef-ac12-000d00000050"
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
      "printed": false,
      "published": false,
      "created": "2024-11-19 15:17:10.711",
      "moment": "2024-11-19 15:16:00.000",
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/bcbee227-a66f-11ef-ac12-000d00000099",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=bcbee227-a66f-11ef-ac12-000d00000099"
        }
      },
      "emissionType": "LOCAL",
      "trackingType": "MILK",
      "documentState": "CREATED",
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
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/5f6deb2e-a6fd-11ef-ac12-000d00000029",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata",
        "type": "emissionorder",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#emissionorder/edit?id=5f6deb2e-a6fd-11ef-ac12-000d00000029"
      },
      "id": "5f6deb2e-a6fd-11ef-ac12-000d00000029",
      "accountId": "b9c9f2e4-a66f-11ef-ac12-000f00000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/bc5114ab-a66f-11ef-ac12-000d00000050",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=bc5114ab-a66f-11ef-ac12-000d00000050"
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
      "updated": "2024-11-20 08:07:42.949",
      "name": "00002",
      "externalCode": "CJ039BLUgBH85mefSFWxC3",
      "state": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata/states/4f75f276-a673-11ef-ac12-000d00000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "printed": false,
      "published": false,
      "created": "2024-11-20 08:07:42.974",
      "moment": "2024-11-20 08:07:00.000",
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/bcbee227-a66f-11ef-ac12-000d00000099",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=bcbee227-a66f-11ef-ac12-000d00000099"
        }
      },
      "emissionType": "LOCAL",
      "trackingType": "MILK",
      "documentState": "CREATED",
      "positions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/5f6deb2e-a6fd-11ef-ac12-000d00000029/positions",
          "type": "emissionorderposition",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      }
    }
  ]
}

```

### Создать Заказ кодов маркировки
Запрос на создание нового Заказа кодов маркировки.
Обязательные для создания поля:

| Параметр         | Описание                                                                                                                                                |
|------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|
| **organization** | Ссылка на ваше юрлицо в формате [Метаданных](#/general#3-metadannye)                                                         |
| **trackingType** | Тип маркируемой продукции. [Подробнее тут](#/dictionaries/bundle#5-tip-markiruemoj-produkcii)                |
| **emissionType** | Состояние документов маркировки. [Подробнее тут](#/documents/emissionorder#4-sostoyanie-dokumentov-markirovki) |

> Пример создания нового Заказа кодов маркировки с телом запроса, содержащим только необходимые поля.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "organization": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "emissionType": "LOCAL",
            "trackingType": "MILK",
          }
'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Заказа кодов маркировки.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/33c8ac0b-a670-11ef-ac12-000d00000111",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata",
    "type": "emissionorder",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#emissionorder/edit?id=33c8ac0b-a670-11ef-ac12-000d00000111"
  },
  "id": "33c8ac0b-a670-11ef-ac12-000d00000111",
  "accountId": "b9c9f2e4-a66f-11ef-ac12-000f00000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/bc5114ab-a66f-11ef-ac12-000d00000050",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=bc5114ab-a66f-11ef-ac12-000d00000050"
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
  "printed": false,
  "published": false,
  "created": "2024-11-19 15:17:10.711",
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=850c8195-f504-11e5-8a84-bae50000015e"
    }
  },
  "emissionType": "LOCAL",
  "trackingType": "MILK",
  "documentState": "CREATED",
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/33c8ac0b-a670-11ef-ac12-000d00000111/positions",
      "type": "emissionorderposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

> Пример создания нового Заказа кодов маркировки с более насыщенным телом запроса.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "name": "2000",
            "organization": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "moment": "2016-04-19 13:50:24",
            "description": "описание Заказа кодов маркировки",
            "emissionType": "LOCAL",
            "trackingType": "MILK",
            "owner": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "type": "employee",
                "mediaType": "application/json"
              }
            },
            "shared": false,
            "group": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
                "type": "group",
                "mediaType": "application/json"
              }
            },
            "state":{  
              "meta":{  
                "href":"https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
                "type":"state",
                "mediaType":"application/json"
              }
            },
            "externalCode": "fbajkwbfu1249SACSKW241LKSFA2sa1"
          }
'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Заказа кодов маркировки.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/33c8ac0b-a670-11ef-ac12-000d00000111",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata",
    "type": "emissionorder",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#emissionorder/edit?id=33c8ac0b-a670-11ef-ac12-000d00000111"
  },
  "id": "33c8ac0b-a670-11ef-ac12-000d00000111",
  "accountId": "b9c9f2e4-a66f-11ef-ac12-000f00000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/bc5114ab-a66f-11ef-ac12-000d00000050",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=bc5114ab-a66f-11ef-ac12-000d00000050"
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
  "description": "описание Заказа кодов маркировки",
  "externalCode": "fbajkwbfu1249SACSKW241LKSFA2sa1",
  "state":{
    "meta":{
      "href":"https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata",
      "type":"state",
      "mediaType":"application/json"
    }
  },
  "printed": false,
  "published": false,
  "created": "2024-11-19 15:17:10.711",
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/bcbee227-a66f-11ef-ac12-000d00000099",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=bcbee227-a66f-11ef-ac12-000d00000099"
    }
  },
  "emissionType": "LOCAL",
  "trackingType": "MILK",
  "documentState": "CREATED",
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/33c8ac0b-a670-11ef-ac12-000d00000111/positions",
      "type": "emissionorderposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

> Пример запроса на создание Заказа кодов маркировки   с позициями в теле запроса.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "name": "888",
            "organization": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "emissionType": "LOCAL",
            "trackingType": "MILK",
            "positions": [
              {
                "quantity": 3.0,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/be903062-f504-11e5-8a84-bae50000019a",
                    "metadataHref": "http://localhost/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json",
                  }
                }
              },
              {
                "quantity": 20,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/be903062-f504-11e5-8a84-bae50000019a",
                    "metadataHref": "http://localhost/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              },
              {
                "quantity": 30,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/c02e3a5c-007e-11e6-9464-e4de00000006",
                    "metadataHref": "http://localhost/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Заказа кодов маркировки.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/33c8ac0b-a670-11ef-ac12-000d00000111",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata",
    "type": "emissionorder",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#emissionorder/edit?id=33c8ac0b-a670-11ef-ac12-000d00000111"
  },
  "id": "33c8ac0b-a670-11ef-ac12-000d00000111",
  "accountId": "b9c9f2e4-a66f-11ef-ac12-000f00000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/bc5114ab-a66f-11ef-ac12-000d00000050",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=bc5114ab-a66f-11ef-ac12-000d00000050"
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
  "printed": false,
  "published": false,
  "created": "2024-11-19 15:17:10.711",
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=850c8195-f504-11e5-8a84-bae50000015e"
    }
  },
  "emissionType": "LOCAL",
  "trackingType": "MILK",
  "documentState": "CREATED",
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/33c8ac0b-a670-11ef-ac12-000d00000111/positions",
      "type": "emissionorderposition",
      "mediaType": "application/json",
      "size": 3,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Массовое создание и обновление Заказов кодов маркировки
[Массовое создание и обновление](#/general#3-sozdanie-i-obnovlenie-neskolkih-obuektov) Заказов кодов маркировки.
В теле запроса необходимо передать массив, содержащий JSON представления Заказов кодов маркировки, которые вы хотите создать или обновить.
Обновляемые Заказы кодов маркировки должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Заказов кодов маркировки

```shell
curl --compressed -X POST \
  "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -d '[
        {
          "name": "Order001",
          "organization": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
              "type": "organization",
              "mediaType": "application/json"
            }
          },
          "emissionType": "LOCAL",
          "trackingType": "MILK",
          "description": "Новый заказ кодов маркировки"
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/5f6deb2e-a6fd-11ef-ac12-000d00000029",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata",
            "type": "emissionorder",
            "mediaType": "application/json"
          },
          "name": "Order002",
          "emissionType": "REMAINS",
          "trackingType": "SHOES",
          "description": "Обновление заказа кодов маркировки"
        }
      ]'
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Заказов кодов маркировки.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/33c8ac0b-a670-11ef-ac12-000d00000111",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata",
      "type": "emissionorder",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#emissionorder/edit?id=33c8ac0b-a670-11ef-ac12-000d00000111"
    },
    "id": "33c8ac0b-a670-11ef-ac12-000d00000111",
    "accountId": "b9c9f2e4-a66f-11ef-ac12-000f00000001",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/bc5114ab-a66f-11ef-ac12-000d00000050",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=bc5114ab-a66f-11ef-ac12-000d00000050"
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
    "updated": "2024-12-01 12:01:00",
    "name": "Order001",
    "printed": false,
    "published": false,
    "description": "Новый заказ кодов маркировки",
    "externalCode": "RIahRnZIjek-CeER27IjF0",
    "created": "2024-12-01 12:00:00",
    "organization": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "emissionType": "LOCAL",
    "trackingType": "MILK",
    "documentState": "CREATED",
    "positions": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/33c8ac0b-a670-11ef-ac12-000d00000111/positions",
        "type": "emissionorderposition",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    }
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/5f6deb2e-a6fd-11ef-ac12-000d00000029",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata",
      "type": "emissionorder",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#emissionorder/edit?id=5f6deb2e-a6fd-11ef-ac12-000d00000029"
    },
    "id": "5f6deb2e-a6fd-11ef-ac12-000d00000029",
    "accountId": "b9c9f2e4-a66f-11ef-ac12-000f00000001",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/bc5114ab-a66f-11ef-ac12-000d00000050",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=bc5114ab-a66f-11ef-ac12-000d00000050"
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
    "updated": "2024-12-01 12:02:00",
    "name": "Order002",
    "printed": false,
    "published": false,
    "description": "Обновление заказа кодов маркировки",
    "externalCode": "RIahRnZIjek-CeER27IjF0",
    "created": "2024-11-20 08:07:42.974",
    "organization": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "emissionType": "REMAINS",
    "trackingType": "SHOES",
    "documentState": "CREATED",
    "positions": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/33c8ac0b-a670-11ef-ac12-000d00000111/positions",
        "type": "emissionorderposition",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    }
  }
]
```

### Метаданные Заказа кодов маркировки
Запрос на получение метаданных Заказа кодов маркировки. Результат - объект JSON, включающий в себя:

| Параметр         | Описание                                                                                                                     |
|------------------|:-----------------------------------------------------------------------------------------------------------------------------|
| **createShared** | создавать новые заказы кодов маркировки с меткой "Общий"                                                                     |
| **meta**         | Ссылка на метаданные заказа кодов маркировки                                                                                 |
| **states**       | Массив статусов заказов кодов маркировки                                                                                     |



> Метаданные Заказа кодов маркировки

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata" \
  -H "Authorization: Basic <Credentials>" \
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
|:---------|:------------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 33c8ac0b-a670-11ef-ac12-000d00000111* id заказа кодов маркировки. |

> Запрос на Получение отдельного заказа кодов маркировки с указанным id.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/33c8ac0b-a670-11ef-ac12-000d00000111" \
  -H "Authorization: Basic <Credentials>" \
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
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#emissionorder/edit?id=33c8ac0b-a670-11ef-ac12-000d00000111"
  },
  "id": "33c8ac0b-a670-11ef-ac12-000d00000111",
  "accountId": "b9c9f2e4-a66f-11ef-ac12-000f00000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/bc5114ab-a66f-11ef-ac12-000d00000050",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=bc5114ab-a66f-11ef-ac12-000d00000050"
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
  "printed": false,
  "published": false,
  "created": "2024-11-19 15:17:10.711",
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/bcbee227-a66f-11ef-ac12-000d00000099",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=bcbee227-a66f-11ef-ac12-000d00000099"
    }
  },
  "emissionType": "LOCAL",
  "trackingType": "MILK",
  "documentState": "CREATED",
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

### Изменить Заказ кодов маркировки
Запрос на обновление Заказа кодов маркировки с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Заказа кодов маркировки, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Заказа кодов маркировки](#/documents/emissionorder#2-zakaz-kodov-markirovki).

**Параметры**

| Параметр | Описание                                                                                        |
| :------- |:------------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа кодов маркировки. |

> Пример запроса на обновление отдельного Заказа кодов маркировки.

```shell
curl --compressed -X PUT \
  "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/33c8ac0b-a670-11ef-ac12-000d00000111" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -d '{
        "owner": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/bc5114ab-a66f-11ef-ac12-000d00000050",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=bc5114ab-a66f-11ef-ac12-000d00000050"
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
        "name": "00001-обновленный",
        "description": "описание Заказа кодов маркировки",
        "externalCode": "RIahRnZIjek-CeER27IjF1",
        "state":{
          "meta":{
            "href":"https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata",
            "type":"state",
            "mediaType":"application/json"
          }
        },
        "organization": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/bcbee227-a66f-11ef-ac12-000d00000099",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
            "type": "organization",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=bcbee227-a66f-11ef-ac12-000d00000099"
          }
        },
        "emissionType": "LOCAL",
        "trackingType": "MILK",
      }'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Заказа кодов маркировки.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/33c8ac0b-a670-11ef-ac12-000d00000111",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata",
    "type": "emissionorder",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#emissionorder/edit?id=33c8ac0b-a670-11ef-ac12-000d00000111"
  },
  "id": "33c8ac0b-a670-11ef-ac12-000d00000111",
  "accountId": "b9c9f2e4-a66f-11ef-ac12-000f00000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/bc5114ab-a66f-11ef-ac12-000d00000050",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=bc5114ab-a66f-11ef-ac12-000d00000050"
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
  "updated": "2024-12-01 10:00:00.000",
  "name": "00001-обновленный",
  "description": "описание Заказа кодов маркировки",
  "externalCode": "RIahRnZIjek-CeER27IjF1",
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "printed": false,
  "published": false,
  "created": "2024-11-19 15:17:10.711",
  "moment": "2024-11-19 15:16:00.000",
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/bcbee227-a66f-11ef-ac12-000d00000099",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=bcbee227-a66f-11ef-ac12-000d00000099"
    }
  },
  "emissionType": "LOCAL",
  "trackingType": "MILK",
  "documentState": "CREATED",
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

> Пример запроса на обновление Заказа кодов маркировки с позициями в теле запроса.

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/33c8ac0b-a670-11ef-ac12-000d00000111" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
    -d '{
            "name": "new",
            "organization": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "positions": [
              {
                "quantity": 3.0,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/be903062-f504-11e5-8a84-bae50000019a",
                    "metadataHref": "http://localhost/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json",
                  }
                }
              },
              {
                "quantity": 220,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/be903062-f504-11e5-8a84-bae50000019a",
                    "metadataHref": "http://localhost/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              },
              {
                "quantity": 10,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/c02e3a5c-007e-11e6-9464-e4de00000006",
                    "metadataHref": "http://localhost/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление измененного Заказа кодов маркировки.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/33c8ac0b-a670-11ef-ac12-000d00000111",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata",
    "type": "emissionorder",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#emissionorder/edit?id=33c8ac0b-a670-11ef-ac12-000d00000111"
  },
  "id": "33c8ac0b-a670-11ef-ac12-000d00000111",
  "accountId": "b9c9f2e4-a66f-11ef-ac12-000f00000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/bc5114ab-a66f-11ef-ac12-000d00000050",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=bc5114ab-a66f-11ef-ac12-000d00000050"
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
  "name": "new",
  "externalCode": "RIahRnZIjek-CeER27IjF0",
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata/states/4f75f276-a673-11ef-ac12-000d00000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/metadata",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "printed": false,
  "published": false,
  "created": "2024-11-19 15:17:10.711",
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=850c8195-f504-11e5-8a84-bae50000015e"
    }
  },
  "emissionType": "LOCAL",
  "trackingType": "MILK",
  "documentState": "CREATED",
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/33c8ac0b-a670-11ef-ac12-000d00000111/positions",
      "type": "emissionorderposition",
      "mediaType": "application/json",
      "size": 3,
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
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/33c8ac0b-a670-11ef-ac12-000d00000111/positions" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций отдельного Заказа кодов маркировки.

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
      "id": "33c8ac0b-a670-11ef-ac12-000d00000112",
      "accountId": "abc08e75-ad7d-11ef-ac12-000f00000001",
      "quantity": 1.0,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/2f096391-ad7f-11ef-ac12-000d00000117",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=2f088dd4-ad7f-11ef-ac12-000d00000115"
        }
      },
      "status": "EMISSION_COMPLETED"
    }
  ]
}
```


### Получить позицию Заказа кодов маркировки

**Параметры**

| Параметр       | Описание                                                                                                |
|:---------------|:--------------------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 33c8ac0b-a670-11ef-ac12-000d00000111* id Заказа кодов маркировки.         |
| **positionID** | `string` (required) *Example: 33c8bd7c-a670-11ef-ac12-000d00000112* id позиции Заказа кодов маркировки. |

> Запрос на получение отдельной позиции Заказа кодов маркировки с указанным id.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/33c8ac0b-a670-11ef-ac12-000d00000111/positions/33c8bd7c-a670-11ef-ac12-000d00000112" \
  -H "Authorization: Basic <Credentials>" \
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
    "id": "33c8ac0b-a670-11ef-ac12-000d00000112",
    "accountId": "abc08e75-ad7d-11ef-ac12-000f00000001",
    "quantity": 1.0,
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/2f096391-ad7f-11ef-ac12-000d00000117",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=2f088dd4-ad7f-11ef-ac12-000d00000115"
      }
    },
    "status": "EMISSION_COMPLETED"
}
```

### Создать позицию
Запрос на создание новой позиции в Заказе кодов маркировки.
Для успешного создания необходимо в теле запроса указать следующие поля:

+ **assortment** - Ссылка на товар/серию/модификацию, которую представляет собой позиция.
  Подробнее об этом поле можно прочитать в описании [позиции Заказа](#/documents/emissionorder#4-pozicii-zakaza-kodov-markirovki)
+ **quantity** - Количество указанной позиции. Должно быть положительным, иначе возникнет ошибка.

Тип маркируемой продукции у позиций и у заказа Кодов маркировки должен быть идентичным.

**Параметры**

| Параметр | Описание                                                                                        |
| :------- |:------------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа кодов маркировки. |

> Пример создания одной позиции в Заказе кодов маркировки.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/7944ef04-f831-11e5-7a69-971500188b19/positions" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "quantity": 49,
            "assortment": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a7daa6b-3c64-11e6-8a84-bae50000000a",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                "type": "variant",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной позиции отдельного Заказа кодов маркировки.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/7944ef04-f831-11e5-7a69-971500188b19/positions/574b6485-3f71-11e6-8a84-bae50000005b",
      "type": "emissionorderposition",
      "mediaType": "application/json"
    },
    "id": "574b6485-3f71-11e6-8a84-bae50000005b",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 49,
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a7daa6b-3c64-11e6-8a84-bae50000000a",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=3c3c1618-2842-11e9-ac12-000c0000006f"
      }
    },
    "status": "EMISSION_NOT_SEND"
  }
]
```

> Пример создания сразу нескольких позиций в Заказе кодов маркировки.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/7944ef04-f831-11e5-7a69-971500188b19/positions" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '[
            {
              "quantity": 12,
              "assortment": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                  "type": "variant",
                  "mediaType": "application/json"
                }
              }
            },
            {
              "quantity": 3,
              "assortment": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/7a6f697f-3c64-11e6-8a84-bae500000006",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              }
            },
            {
              "quantity": 404,
              "assortment": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a83c422-3c64-11e6-8a84-bae500000012",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                  "type": "variant",
                  "mediaType": "application/json"
                }
              }
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка созданных позиций отдельного Заказа кодов маркировки.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/7944ef04-f831-11e5-7a69-971500188b19/positions/f389488d-3f71-11e6-8a84-bae50000005f",
      "type": "emissionorderposition",
      "mediaType": "application/json"
    },
    "id": "f389488d-3f71-11e6-8a84-bae50000005f",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 12,
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=3c3c1618-2842-11e9-ac12-000c0000006f"
      }
    },
    "status": "EMISSION_NOT_SEND"
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/7944ef04-f831-11e5-7a69-971500188b19/positions/f389521b-3f71-11e6-8a84-bae500000060",
      "type": "emissionorderposition",
      "mediaType": "application/json"
    },
    "id": "f389521b-3f71-11e6-8a84-bae500000060",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 3,
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/7a6f697f-3c64-11e6-8a84-bae500000006",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
      }
    },
    "status": "EMISSION_NOT_SEND"
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/7944ef04-f831-11e5-7a69-971500188b19/positions/f3895aa1-3f71-11e6-8a84-bae500000061",
      "type": "emissionorderposition",
      "mediaType": "application/json"
    },
    "id": "f3895aa1-3f71-11e6-8a84-bae500000061",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 404,
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a83c422-3c64-11e6-8a84-bae500000012",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
      }
    },
    "status": "EMISSION_NOT_SEND"
  }
]
```

### Изменить позицию
Запрос на обновление отдельной позиции Заказа. Для обновления позиции нет каких-либо
обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

| Параметр       | Описание                                                                                                |
| :------------- |:--------------------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа кодов маркировки.         |
| **positionID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции Заказа кодов маркировки. |

> Пример запроса на обновление отдельной позиции в Заказе кодов маркировки.

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "quantity": 44,
            "assortment": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a83c422-3c64-11e6-8a84-bae500000012",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                "type": "variant",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции Заказа кодов маркировки.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/emissionorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
    "type": "emissionorderposition",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "quantity": 44,
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a83c422-3c64-11e6-8a84-bae500000012",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
      "type": "variant",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
    }
  },
  "status": "EMISSION_NOT_SEND"
}
```
