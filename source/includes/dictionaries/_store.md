## Склад

### Склады 
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](../#mojsklad-json-api-obschie-swedeniq-kontextnyj-poisk).

Поиск среди объектов складов на соответствие поисковой строке будет осуществлен по следующим полям:

+ По наименованию Склада **name**
+ По коду Склада **code**

#### Атрибуты сущности

| Название         | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                      |
| ---------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------- |
| **accountId**    | UUID                                                      | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                          |
| **address**      | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Адрес склада                                                                                                                  |
| **addressFull**  | Object                                                    |                                                                                                                                                   | Адрес с детализацией по отдельным полям. [Подробнее тут](../dictionaries/#suschnosti-sklad-sklady-attributy-suschnosti-adres) |
| **archived**     | Boolean                                                   | `=` `!=`                                                                                                                                          | Добавлен ли Склад в архив<br>`+Обязательное при ответе`                                                                       |
| **attributes**   | Array(Object)                                             | [Операторы доп. полей](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-fil-traciq-po-dopolnitel-nym-polqm) | Массив метаданных дополнительных полей склада                                                                                 |
| **code**         | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Код Склада                                                                                                                    |
| **description**  | String(4096)                                              | `=` `!=` `~` `~=` `=~`                                                                                                                            | Комментарий к Складу                                                                                                          |
| **externalCode** | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код Склада<br>`+Обязательное при ответе`                                                                              |
| **group**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                      |
| **id**           | UUID                                                      | `=` `!=`                                                                                                                                          | ID Склада<br>`+Обязательное при ответе` `+Только для чтения`                                                                  |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные Склада<br>`+Обязательное при ответе`                                                                               |
| **name**         | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование Склада<br>`+Обязательное при ответе` `+Необходимо при создании`                                                  |
| **owner**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Expand`                                                                                             |
| **parent**       | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Метаданные родительского склада (Группы)<br>`+Expand`                                                                         |
| **pathName**     | String                                                    | `=` `!=` `~` `~=` `=~`                                                                                                                            | Группа Склада<br>`+Обязательное при ответе`                                                                                   |
| **shared**       | Boolean                                                   | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе`                                                                                    |
| **updated**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления Склада<br>`+Обязательное при ответе` `+Только для чтения`                                        |
| **zones**        | MetaArray                                                 |                                                                                                                                                   | Зоны склада. [Подробнее тут](../dictionaries/#suschnosti-sklad-zony-sklada)<br>`+Только для чтения` `+Expand`                                       |
| **slots**        | MetaArray                                                 |                                                                                                                                                   | Ячейки склада. [Подробнее тут](../dictionaries/#suschnosti-sklad-yachejki-sklada)<br>`+Только для чтения` `+Expand`                                       |

#### Аттрибуты сущности Адрес

| Название       | Тип                                                       | Описание           |
| -------------- | :-------------------------------------------------------- | :----------------- |
| **addInfo**    | String(255)                                               | Другое             |
| **apartment**  | String(30)                                                | Квартира           |
| **city**       | String(255)                                               | Город              |
| **comment**    | String(255)                                               | Комментарий        |
| **country**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные страны  |
| **house**      | String(30)                                                | Дом                |
| **postalCode** | String(6)                                                 | Почтовый индекс    |
| **region**     | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные региона |
| **street**     | String(255)                                               | Улица              |

Строка адреса является конкатенацией полей структурированного адреса в следующем порядке: postalCode -> country -> region -> city -> street -> house -> apartment -> addInfo, используя запятую в качестве разделителя.
При передаче в МойСклад сущностей с адресом используйте либо строковый адрес, либо структурированный.
При передаче обоих адресов строковый будет игнорирован.
При передаче только строкового он будет отражаться как в строковом поле так и в addInfo структурированного адреса.
Для адреса не поддерживается [значение `null`](../#mojsklad-json-api-obschie-swedeniq-podderzhka-null). Передача `null` этому аттрибуту не приведет к его удалению.
Для удаления адреса необходимо в строковое поле `address` передать пустую строку `""`.

О работе с доп. полями Складов можно прочитать [здесь](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)


### Получить Склады 
Получить список всех Складов.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                     |
| ----------- | :-------------------------------------------------------- |:---------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче.                         |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос. |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих Склады. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить Склады 

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/store"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Складов.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
    "type": "store",
    "mediaType": "application/json",
    "size": 5,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/caf46ce5-0569-11e6-9464-e4de00000000",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      },
      "id": "caf46ce5-0569-11e6-9464-e4de00000000",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
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
      "updated": "2016-04-18 16:31:01",
      "name": "002",
      "externalCode": "y7ztWINfjXinPToFMqQid2",
      "archived": false,
      "address": "125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
      "addressFull": {
        "postalCode": "125009",
        "country": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
            "type": "country",
            "mediaType": "application/json"
          }
        },
        "region": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
            "type": "region",
            "mediaType": "application/json"
          }
        },
        "city": "Москва",
        "street": "ул Тверская",
        "house": "1",
        "apartment": "123",
        "addInfo": "addinfo",
        "comment": "some words about address"
      },
      "pathName": "",
      "zones": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/caf46ce5-0569-11e6-9464-e4de00000000/zones",
          "type": "storezone",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "slots": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/caf46ce5-0569-11e6-9464-e4de00000000/slots",
          "type": "slot",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      },
      "id": "850ee995-f504-11e5-8a84-bae500000160",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
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
      "updated": "2016-03-28 19:45:46",
      "name": "Основной склад",
      "externalCode": "OJ8pY2FgjQ3ncLVvvpqyw1",
      "archived": false,
      "pathName": "",
      "address": "125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
      "addressFull": {
        "postalCode": "125009",
        "country": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
            "type": "country",
            "mediaType": "application/json"
          }
        },
        "region": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
            "type": "region",
            "mediaType": "application/json"
          }
        },
        "city": "Москва",
        "street": "ул Тверская",
        "house": "1",
        "apartment": "123",
        "addInfo": "addinfo",
        "comment": "some words about address"
      },
      "zones": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160/zones",
          "type": "storezone",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "slots": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160/slots",
          "type": "slot",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "attributes": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "3a85cfe3-12c5-11e6-9464-e4de00000087",
          "name": "Площадь",
          "type": "long",
          "value": 4400
        }
      ]
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/6ebb9094-056a-11e6-9464-e4de000000b4",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      },
      "id": "6ebb9094-056a-11e6-9464-e4de000000b4",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
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
      "updated": "2016-04-18 16:35:36",
      "name": "Подскладик",
      "code": "ZAATY643",
      "externalCode": "d8Ew2hCDiTuJFb0Ya45tH0",
      "archived": false,
      "address": "125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
      "addressFull": {
        "postalCode": "125009",
        "country": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
            "type": "country",
            "mediaType": "application/json"
          }
        },
        "region": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
            "type": "region",
            "mediaType": "application/json"
          }
        },
        "city": "Москва",
        "street": "ул Тверская",
        "house": "1",
        "apartment": "123",
        "addInfo": "addinfo",
        "comment": "some words about address"
      },
      "pathName": "002",
      "zones": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/6ebb9094-056a-11e6-9464-e4de000000b4/zones",
          "type": "storezone",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "slots": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/6ebb9094-056a-11e6-9464-e4de000000b4/slots",
          "type": "slot",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/95dcda62-056b-11e6-9464-e4de000000b7",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      },
      "id": "95dcda62-056b-11e6-9464-e4de000000b7",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
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
      "updated": "2016-04-18 16:43:51",
      "name": "Склад1",
      "description": "Основной склад",
      "code": "113AB79",
      "externalCode": "fQPIOtxjg-FaeZNKcLx6B3",
      "archived": false,
      "address": "125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
      "addressFull": {
        "postalCode": "125009",
        "country": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
            "type": "country",
            "mediaType": "application/json"
          }
        },
        "region": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
            "type": "region",
            "mediaType": "application/json"
          }
        },
        "city": "Москва",
        "street": "ул Тверская",
        "house": "1",
        "apartment": "123",
        "addInfo": "addinfo",
        "comment": "some words about address"
      },
      "pathName": "Основной склад",
      "zones": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/95dcda62-056b-11e6-9464-e4de000000b7/zones",
          "type": "storezone",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "slots": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/95dcda62-056b-11e6-9464-e4de000000b7/slots",
          "type": "slot",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      }
    }
  ]
}
```

### Создать Склад 
Создать новый Склад.
#### Описание
Склад создается на основе переданного объекта JSON,
который содержит представление нового Склада.
Необходимое для создания поле - `name` не должно быть пустым.

> Пример запроса на создание нового Склада.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/store"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
  "addressFull": {
    "addInfo": "addinfo2",
    "apartment": "412",
    "city": "Moscow2",
    "comment": "some words about address2",
    "country": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/40e6f69a-991c-4fbc-8be9-d0d906cad180",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type": "country",
        "mediaType": "application/json"
      }
    },
    "house": "32",
    "postalCode": "11192342",
    "region": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/4bd3542a-f401-11e8-8eb2-f2801f1b9fd1",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      }
    },
    "street": "Leninskie goru2"
  },
  "pathName": "Основной склад",
  "name": "Склад2",
  "code": "code3",
  "externalCode": "sfksjafwuiw1sf32141"
}'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Склада.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/0c8de58c-056c-11e6-9464-e4de00000003",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
    "type": "store",
    "mediaType": "application/json"
  },
  "id": "0c8de58c-056c-11e6-9464-e4de00000003",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
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
  "updated": "2016-04-18 16:47:10",
  "name": "Склад2",
  "code": "code3",
  "externalCode": "sfksjafwuiw1sf32141",
  "archived": false,
  "pathName": "",
  "address": "11192342, Russia2, Chuvashia2, Moscow2, Leninskie goru2, 32, 412, addinfo2",
  "addressFull": {
    "addInfo": "addinfo2",
    "apartment": "412",
    "city": "Moscow2",
    "comment": "some words about address2",
    "country": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/40e6f69a-991c-4fbc-8be9-d0d906cad180",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type": "country",
        "mediaType": "application/json"
      }
    },
    "house": "32",
    "postalCode": "11192342",
    "region": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/4bd3542a-f401-11e8-8eb2-f2801f1b9fd1",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      }
    },
    "street": "Leninskie goru2"
  },
  "zones": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/0c8de58c-056c-11e6-9464-e4de00000003/zones",
      "type": "storezone",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "slots": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/0c8de58c-056c-11e6-9464-e4de00000003/slots",
      "type": "slot",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

> Пример запроса на создание нового Склада с доп. полями в теле запроса.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/store"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
  "addressFull": {
    "addInfo": "addinfo2",
    "apartment": "412",
    "city": "Moscow2",
    "comment": "some words about address2",
    "country": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/40e6f69a-991c-4fbc-8be9-d0d906cad180",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type": "country",
        "mediaType": "application/json"
      }
    },
    "house": "32",
    "postalCode": "11192342",
    "region": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/4bd3542a-f401-11e8-8eb2-f2801f1b9fd1",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      }
    },
    "street": "Leninskie goru2"
  },
  "pathName": "Основной склад",
  "name": "Склад3",
  "code": "code4",
  "externalCode": "223ddxzv223",
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "value": 4000
    }
  ]
}'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Склада.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
    "type": "store",
    "mediaType": "application/json"
  },
  "id": "7a6a11b6-12c5-11e6-9464-e4de00000006",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
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
  "updated": "2016-05-05 16:30:05",
  "name": "Склад3",
  "code": "code4",
  "externalCode": "223ddxzv223",
  "archived": false,
  "pathName": "",
  "address": "11192342, Russia2, Chuvashia2, Moscow2, Leninskie goru2, 32, 412, addinfo2",
  "addressFull": {
    "addInfo": "addinfo2",
    "apartment": "412",
    "city": "Moscow2",
    "comment": "some words about address2",
    "country": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/40e6f69a-991c-4fbc-8be9-d0d906cad180",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type": "country",
        "mediaType": "application/json"
      }
    },
    "house": "32",
    "postalCode": "11192342",
    "region": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/4bd3542a-f401-11e8-8eb2-f2801f1b9fd1",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      }
    },
    "street": "Leninskie goru2"
  },
  "zones": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/zones",
      "type": "storezone",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "slots": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/slots",
      "type": "slot",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "3a85cfe3-12c5-11e6-9464-e4de00000087",
      "name": "Площадь",
      "type": "long",
      "value": 4000
    }
  ]
}
```

### Массовое создание и обновление Складов 
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Складов.
В теле запроса нужно передать массив, содержащий JSON представления Складов, которые вы хотите создать или обновить.
Обновляемые Склады должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Складов

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/store"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
  {
    "address": "г Москва ул Вавилова 19 к 116",
    "pathName": "Основной склад",
    "name": "Склад2",
    "code": "code3",
    "externalCode": "sfksjafwuiw1sf32141"
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/0c8de58c-056c-11e6-9464-e4de00000003",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    },
    "address": "г Москва ул БаБилова 20 к 116",
    "pathName": "Не Основной склад",
    "name": "Склад3",
    "code": "code31",
    "externalCode": "EXTCODE",
    "parent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    }
  }
]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Складов.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/0c8de58c-056c-11e6-9464-e4de00000003",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    },
    "id": "0c8de58c-056c-11e6-9464-e4de00000003",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
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
    "updated": "2016-04-18 16:47:10",
    "name": "Склад2",
    "code": "code3",
    "externalCode": "sfksjafwuiw1sf32141",
    "archived": false,
    "pathName": "",
    "address": "г Москва ул Вавилова 19 к 116",
    "zones": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/0c8de58c-056c-11e6-9464-e4de00000003/zones",
        "type": "storezone",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    },
    "slots": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/0c8de58c-056c-11e6-9464-e4de00000003/slots",
        "type": "slot",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    }
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/0c8de58c-056c-11e6-9464-e4de00000003",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    },
    "id": "0c8de58c-056c-11e6-9464-e4de00000003",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
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
    "updated": "2016-04-18 16:56:31",
    "name": "Склад3",
    "code": "code31",
    "externalCode": "EXTCODE",
    "archived": false,
    "pathName": "",
    "address": "г Москва ул БаБилова 20 к 116",
    "zones": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/0c8de58c-056c-11e6-9464-e4de00000003/zones",
        "type": "storezone",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    },
    "slots": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/0c8de58c-056c-11e6-9464-e4de00000003/slots",
        "type": "slot",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    }
  }
]

```

### Удалить Склад

**Параметры**

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Склада. |

> Запрос на удаление Склада с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/store/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Склада.

### Массовое удаление Складов

В теле запроса нужно передать массив, содержащий JSON метаданных Складов, которые вы хотите удалить.


> Запрос на массовое удаление Складов. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/store/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Складов.

```json
[
  {
    "info":"Сущность 'store' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'store' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
```

### Метаданные Складов 
#### Метаданные Складов 
Запрос на получение метаданных Складов. Результат - объект JSON, включающий в себя:

| Название         | Тип                                                       | Описание                                                                                                     |
| ---------------- | :-------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------- |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Ссылка на метаданные Складов                                                                                 |
| **attributes**   | Array(Object)                                             | Массив объектов доп. полей Складов в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **createShared** | Boolean                                                   | создавать новые Склады с меткой "Общий"                                                                      |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Складов 

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Складов.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "id": "5290a290-0313-11e6-9464-e4de00000020",
      "name": "attribute_name",
      "type": "boolean",
      "required": false
    }
  ],
  "createShared": false
}
```

### Отдельное доп. поле


 
 **Параметры**
 
| Параметр | Описание                                                                          |
| :------- | :-------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 5290a290-0313-11e6-9464-e4de00000020* id Доп. поля. |
 
> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata/attributes/5290a290-0313-11e6-9464-e4de00000020"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata/attributes/5290a290-0313-11e6-9464-e4de00000020",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "5290a290-0313-11e6-9464-e4de00000020",
  "name": "attribute_name",
  "type": "boolean",
  "required": false
}

```

### Склад 

### Получить Склад 

**Параметры**

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Склада. |

> Запрос на получение отдельного Склада с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/store/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Склада с указанным id.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/95dcda62-056b-11e6-9464-e4de000000b7",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
    "type": "store",
    "mediaType": "application/json"
  },
  "id": "95dcda62-056b-11e6-9464-e4de000000b7",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
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
  "updated": "2016-04-18 16:43:51",
  "name": "Склад1",
  "description": "Основной склад",
  "code": "113AB79",
  "externalCode": "fQPIOtxjg-FaeZNKcLx6B3",
  "archived": false,
  "parent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "pathName": "Основной склад",
  "address": "125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
  "addressFull": {
    "postalCode": "125009",
    "country": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type": "country",
        "mediaType": "application/json"
      }
    },
    "region": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      }
    },
    "city": "Москва",
    "street": "ул Тверская",
    "house": "1",
    "apartment": "123",
    "addInfo": "addinfo",
    "comment": "some words about address"
  },
  "zones": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/95dcda62-056b-11e6-9464-e4de000000b7/zones",
      "type": "storezone",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "slots": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/95dcda62-056b-11e6-9464-e4de000000b7/slots",
      "type": "slot",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "3a85cfe3-12c5-11e6-9464-e4de00000087",
      "name": "Площадь",
      "type": "long",
      "value": 4400
    }
  ]
}
```

### Изменить Склад 
#### Описание
Обновляется представление Склада с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Склада,
кроме полей, помеченных `Только для чтения` в описании [атрибутов Склада](../dictionaries/#suschnosti-sklad).

**Параметры**

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Склада. |


> Пример запроса на обновление существующего Склада.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/store/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
  "addressFull": {
    "addInfo": "addinfo2",
    "apartment": "412",
    "city": "Moscow2",
    "comment": "some words about address2",
    "country": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/40e6f69a-991c-4fbc-8be9-d0d906cad180",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type": "country",
        "mediaType": "application/json"
      }
    },
    "house": "32",
    "postalCode": "11192342",
    "region": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/4bd3542a-f401-11e8-8eb2-f2801f1b9fd1",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      }
    },
    "street": "Leninskie goru2"
  },
  "pathName": "Не Основной склад",
  "name": "Склад3",
  "code": "code31",
  "externalCode": "EXTCODE",
  "parent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  }
}'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Склада.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/0c8de58c-056c-11e6-9464-e4de00000003",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
    "type": "store",
    "mediaType": "application/json"
  },
  "id": "0c8de58c-056c-11e6-9464-e4de00000003",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
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
  "updated": "2016-04-18 16:56:31",
  "name": "Склад3",
  "code": "code31",
  "externalCode": "EXTCODE",
  "archived": false,
  "pathName": "",
  "address": "11192342, Russia2, Chuvashia2, Moscow2, Leninskie goru2, 32, 412, addinfo2",
  "addressFull": {
      "addInfo": "addinfo2",
      "apartment": "412",
      "city": "Moscow2",
      "comment": "some words about address2",
      "country": {
          "meta": {
              "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/40e6f69a-991c-4fbc-8be9-d0d906cad180",
              "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
              "type": "country",
              "mediaType": "application/json"
          }
      },
      "house": "32",
      "postalCode": "11192342",
      "region": {
          "meta": {
              "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/4bd3542a-f401-11e8-8eb2-f2801f1b9fd1",
              "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
              "type": "region",
              "mediaType": "application/json"
          }
      },
    "street": "Leninskie goru2",
    "zones": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/0c8de58c-056c-11e6-9464-e4de00000003/zones",
        "type": "storezone",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    },
    "slots": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/0c8de58c-056c-11e6-9464-e4de00000003/slots",
        "type": "slot",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    }
  }
}
```

> Пример запроса на обновление существующего Склада с доп полями в теле запроса.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/store/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
  "addressFull": {
    "addInfo": "addinfo2",
    "apartment": "412",
    "city": "Moscow2",
    "comment": "some words about address2",
    "country": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/40e6f69a-991c-4fbc-8be9-d0d906cad180",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type": "country",
        "mediaType": "application/json"
      }
    },
    "house": "32",
    "postalCode": "11192342",
    "region": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/4bd3542a-f401-11e8-8eb2-f2801f1b9fd1",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      }
    },
    "street": "Leninskie goru2"
  },
  "pathName": "Основной склад",
  "name": "Склад 3",
  "code": "code4",
  "externalCode": "223ddxzv223",
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "value": 4400
    }
  ]
}'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Склада.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
    "type": "store",
    "mediaType": "application/json"
  },
  "id": "7a6a11b6-12c5-11e6-9464-e4de00000006",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
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
  "updated": "2016-05-05 16:32:02",
  "name": "Склад 3",
  "code": "code4",
  "externalCode": "223ddxzv223",
  "archived": false,
  "pathName": "",
  "address": "11192342, Russia2, Chuvashia2, Moscow2, Leninskie goru2, 32, 412, addinfo2",
  "addressFull": {
    "addInfo": "addinfo2",
    "apartment": "412",
    "city": "Moscow2",
    "comment": "some words about address2",
    "country": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/40e6f69a-991c-4fbc-8be9-d0d906cad180",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type": "country",
        "mediaType": "application/json"
      }
    },
    "house": "32",
    "postalCode": "11192342",
    "region": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/4bd3542a-f401-11e8-8eb2-f2801f1b9fd1",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      }
    },
    "street": "Leninskie goru2"
  },
  "zones": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/zones",
      "type": "storezone",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "slots": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/slots",
      "type": "slot",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "3a85cfe3-12c5-11e6-9464-e4de00000087",
      "name": "Площадь",
      "type": "long",
      "value": 4400
    }
  ]
}
```

### Зоны склада
Доступ к зонам склада осуществляется при наличии права видеть соответствующий склад.

#### Атрибуты сущности

| Название         | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                      |
| ---------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------- |
| **accountId**    | UUID                                                      |                                                                                                                                           | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                          |
| **externalCode** | String(255)                                               |                                                                                                                             | Внешний код Зоны<br>`+Обязательное при ответе`                                                                              |
| **id**           | UUID                                                      |                                                                                                                                           | ID Зоны<br>`+Обязательное при ответе` `+Только для чтения`                                                                  |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные Зоны<br>`+Обязательное при ответе`                                                                               |
| **name**         | String(255)                                               |                                                                                                                            | Наименование Зоны<br>`+Обязательное при ответе` `+Необходимо при создании`                                                  |
| **updated**      | DateTime                                                  |                                                                                                                         | Момент последнего обновления Зоны<br>`+Обязательное при ответе` `+Только для чтения`                                        |

### Получить зоны склада
Получить список всех Зон.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                     |
| ----------- | :-------------------------------------------------------- |:---------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче.                         |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос. |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих Зоны.   |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить Зоны

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/zones"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Зон Склада.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/zones",
    "type": "storezone",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/zones/7a6a11b6-12c5-11e6-9464-e4de00000007",
        "type": "storezone",
        "mediaType": "application/json"
      },
      "id": "7a6a11b6-12c5-11e6-9464-e4de00000007",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "updated": "2016-05-05 16:32:02",
      "name": "zone1",
      "externalCode": "223ddxzv223"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/zones/7a6a11b6-12c5-11e6-9464-e4de00000008",
        "type": "storezone",
        "mediaType": "application/json"
      },
      "id": "7a6a11b6-12c5-11e6-9464-e4de00000008",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "updated": "2016-05-05 16:32:02",
      "name": "zone2",
      "externalCode": "223ddxzv224"
    }
  ]
}
```

### Создать зону склада
#### Описание

Зона склада создается на основе переданного объекта JSON,
который содержит представление новой Зоны склада.
Результат - JSON представление созданной Зоны склада. Для создания новой Зоны склада,
необходимо и достаточно указать в переданном объекте не пустое поле `name`. В рамках одного склада имена Зон должны быть уникальны.

> Запрос на создание Зоны склада

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/zones"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '{
        "name": "zone 1"
      }'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Зоны Склада.

```json
[
    {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/zones/9177a566-75f8-11ed-ac1a-000d00000000",
            "type": "storezone",
            "mediaType": "application/json"
        },
        "id": "9177a566-75f8-11ed-ac1a-000d00000000",
        "accountId": "5f69193a-75f8-11ed-ac1a-000f00000001",
        "updated": "2022-12-07 09:29:56.547",
        "name": "zone 1",
        "externalCode": "wYIaWipYjrZkJZZlw1Amy1"
    }
]
```

### Массовое создание и обновление зон склада

[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Зон склада.
В теле запроса нужно передать массив, содержащий JSON представления Зон склада, которые вы хотите создать или обновить.
Обновляемые Зоны склада должны содержать идентификатор в виде метаданных.

> Запрос создания и обновления нескольких Зон склада

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/zones
"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "Zona 2"
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/zones/9177a566-75f8-11ed-ac1a-000d00000000",
                "type": "storezone",
                "mediaType": "application/json"
              },
              "name": "Zone new"
            }
          ]'  
  ```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Зон склада.

```json
[
    {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/zones/9177a566-75f8-11ed-ac1a-000d00000000",
            "type": "storezone",
            "mediaType": "application/json"
        },
        "id": "9177a566-75f8-11ed-ac1a-000d00000000",
        "accountId": "5f69193a-75f8-11ed-ac1a-000f00000001",
        "updated": "2022-12-07 09:29:56.547",
        "name": "Zone new",
        "externalCode": "wYIaWipYjrZkJZZlw1Amy1"
    },
    {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/zones/7d479c5f-75f9-11ed-ac1a-000d00000003",
            "type": "storezone",
            "mediaType": "application/json"
        },
        "id": "7d479c5f-75f9-11ed-ac1a-000d00000003",
        "accountId": "5f69193a-75f8-11ed-ac1a-000f00000001",
        "updated": "2022-12-07 09:36:32.702",
        "name": "Zona 2",
        "externalCode": "geYPAnDwhwrTMeo09TjW21"
    }
]
```

### Удалить зону склада

При удалении зоны к которой привязаны ячейки, ячейки отвязываются от данной зоны.

**Параметры**

| Параметр | Описание                                                                            |
| :------- |:------------------------------------------------------------------------------------|
| **store_id**  | `string` (required) *Example: 7a6a11b6-12c5-11e6-9464-e4de00000006* id Склада.      |
| **zone_id**   | `string` (required) *Example: 7d479c5f-75f9-11ed-ac1a-000d00000003* id Зоны склада. |

> Запрос на удаление Зоны склада с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/zones/7d479c5f-75f9-11ed-ac1a-000d00000003"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Зоны склада.

### Массовое удаление зон склада

В теле запроса нужно передать массив, содержащий JSON метаданных Зон склада, которые вы хотите удалить.


> Запрос на массовое удаление Зон склада.

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity//store/7a6a11b6-12c5-11e6-9464-e4de00000006/zones/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/zones/9177a566-75f8-11ed-ac1a-000d00000000",
            "type": "storezone",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/zones/7d479c5f-75f9-11ed-ac1a-000d00000003",
            "type": "storezone",
            "mediaType": "application/json"
          }
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Зон склада.

```json
[
  {
    "info":"Сущность 'storezone' с UUID: 9177a566-75f8-11ed-ac1a-000d00000000 успешно удалена"
  },
  {
    "info":"Сущность 'storezone' с UUID: 7d479c5f-75f9-11ed-ac1a-000d00000003 успешно удалена"
  }
]
```

### Получить зону склада

**Параметры**

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b18* id Зоны. |

> Запрос на получение отдельной Зоны Склада с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/store/7944ef04-f831-11e5-7a69-971500188b19/zones/7944ef04-f831-11e5-7a69-971500188b18"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Зоны Склада с указанным id.

```json
{
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7944ef04-f831-11e5-7a69-971500188b19/zones/7944ef04-f831-11e5-7a69-971500188b18",
        "type": "storezone",
        "mediaType": "application/json"
      },
      "id": "7944ef04-f831-11e5-7a69-971500188b18",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "updated": "2016-05-05 16:32:02",
      "name": "zone1",
      "externalCode": "223ddxzv223"
}
```

### Изменить зону склада

В теле запроса нужно передать JSON представление Зоны склада, которую вы хотите обновить.

**Параметры**

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **store_id**  | `string` (required) *Example: 7a6a11b6-12c5-11e6-9464-e4de00000006* id Склада. |
| **zone_id**   | `string` (required) *Example: 7d479c5f-75f9-11ed-ac1a-000d00000003* id Зоны склада. |

> Запрос на обновление Зоны склада

```shell
curl -X PUT
  "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/zones/7d479c5f-75f9-11ed-ac1a-000d00000003"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '{
        "name": "zone 3"
      }'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Зоны Склада.

```json
[
    {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/zones/7d479c5f-75f9-11ed-ac1a-000d00000003",
            "type": "storezone",
            "mediaType": "application/json"
        },
        "id": "7d479c5f-75f9-11ed-ac1a-000d00000003",
        "accountId": "5f69193a-75f8-11ed-ac1a-000f00000001",
        "updated": "2022-12-07 09:29:56.547",
        "name": "zone 3",
        "externalCode": "wYIaWipYjrZkJZZlw1Amy1"
    }
]
```

### Ячейки склада
Доступ к ячейкам склада осуществляется при наличии права видеть соответствующий склад.

#### Атрибуты сущности

| Название         | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                      |
| ---------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------- |
| **accountId**    | UUID                                                      |                                                                                                                                        | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                          |
| **externalCode** | String(255)                                               |                                                                                                                            | Внешний код Ячейки<br>`+Обязательное при ответе`                                                                              |
| **id**           | UUID                                                      |                                                                                                                                         | ID Ячейки<br>`+Обязательное при ответе` `+Только для чтения`                                                                  |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные Ячейки<br>`+Обязательное при ответе`                                                                               |
| **name**         | String(255)                                               |                                                                                                                            | Наименование Ячейки<br>`+Обязательное при ответе` `+Необходимо при создании`                                                  |
| **updated**      | DateTime                                                  |                                                                                                                         | Момент последнего обновления Ячейки<br>`+Обязательное при ответе` `+Только для чтения`                                        |
| **zone**         | Meta                                                      |                                                                                                                                                   | Зона ячейки. [Подробнее тут](../dictionaries/#suschnosti-sklad-zony-sklada)<br>`+Только для чтения` `+Expand`                                       |

### Получить ячейки склада
Получить список всех Ячеек Склада.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                            |
| ----------- | :-------------------------------------------------------- |:----------------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче.                                |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.        |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих Ячейки Склада. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить Ячейки Склада

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/slots"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Ячеек Склада.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/slots",
    "type": "slot",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/slots/7a6a11b6-12c5-11e6-9464-e4de00000007",
        "type": "slot",
        "mediaType": "application/json"
      },
      "id": "7a6a11b6-12c5-11e6-9464-e4de00000007",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "updated": "2016-05-05 16:32:02",
      "name": "slot1",
      "externalCode": "223ddxzv223"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/slots/7a6a11b6-12c5-11e6-9464-e4de00000008",
        "type": "slot",
        "mediaType": "application/json"
      },
      "id": "7a6a11b6-12c5-11e6-9464-e4de00000008",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "updated": "2016-05-05 16:32:02",
      "name": "slot2",
      "externalCode": "223ddxzv224",
      "zone": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/zones/7944ef04-f831-11e5-7a69-971500188b18",
          "type": "storezone",
          "mediaType": "application/json"
        }
      }
    }
  ]
}
```

### Создать ячейку склада
#### Описание

Ячейка склада создается на основе переданного объекта JSON,
который содержит представление новой Ячейки склада.
Результат - JSON представление созданной Ячейки склада. Для создания новой Ячейки склада,
необходимо и достаточно указать в переданном объекте не пустое поле `name`. В рамках одного склада имена Ячеек должны быть уникальны.

> Запрос на создание Ячейки склада

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/slots"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '{
        "name": "slot 1"
      }'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Ячейки Склада.

```json
[
    {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/slots/9177a566-75f8-11ed-ac1a-000d00000000",
            "type": "slot",
            "mediaType": "application/json"
        },
        "id": "9177a566-75f8-11ed-ac1a-000d00000000",
        "accountId": "5f69193a-75f8-11ed-ac1a-000f00000001",
        "updated": "2022-12-07 09:29:56.547",
        "name": "slot 1",
        "externalCode": "wYIaWipYjrZkJZZlw1Amy1"
    }
]
```

> Запрос на создание Ячейки склада с зоной

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/slots"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '{
        "name": "slot 1",
        "zone": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/zones/8277a566-75f8-11ed-ac1a-000d00000000",
            "type": "storezone",
            "mediaType": "application/json"
          }
        }
      }'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Ячейки Склада.

```json
[
    {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/slots/9177a566-75f8-11ed-ac1a-000d00000000",
            "type": "slot",
            "mediaType": "application/json"
        },
        "id": "9177a566-75f8-11ed-ac1a-000d00000000",
        "accountId": "5f69193a-75f8-11ed-ac1a-000f00000001",
        "updated": "2022-12-07 09:29:56.547",
        "name": "slot 1",
        "externalCode": "wYIaWipYjrZkJZZlw1Amy1",
        "zone": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/zones/8277a566-75f8-11ed-ac1a-000d00000000",
            "type": "storezone",
            "mediaType": "application/json"
          }
        }
    }
]
```

### Массовое создание и обновление ячеек склада

[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Ячеек склада.
В теле запроса нужно передать массив, содержащий JSON представления Ячеек склада, которые вы хотите создать или обновить.
Обновляемые Ячейки склада должны содержать идентификатор в виде метаданных.

> Запрос создания и обновления нескольких Ячеек склада

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/slots
"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "Slot 2"
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/slots/9177a566-75f8-11ed-ac1a-000d00000000",
                "type": "slot",
                "mediaType": "application/json"
              },
              "name": "Slot new"
            }
          ]'  
  ```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Ячеек склада.

```json
[
    {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/slots/9177a566-75f8-11ed-ac1a-000d00000000",
            "type": "slot",
            "mediaType": "application/json"
        },
        "id": "9177a566-75f8-11ed-ac1a-000d00000000",
        "accountId": "5f69193a-75f8-11ed-ac1a-000f00000001",
        "updated": "2022-12-07 09:29:56.547",
        "name": "Slot new",
        "externalCode": "wYIaWipYjrZkJZZlw1Amy1"
    },
    {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/slots/7d479c5f-75f9-11ed-ac1a-000d00000003",
            "type": "slot",
            "mediaType": "application/json"
        },
        "id": "7d479c5f-75f9-11ed-ac1a-000d00000003",
        "accountId": "5f69193a-75f8-11ed-ac1a-000f00000001",
        "updated": "2022-12-07 09:36:32.702",
        "name": "Slot 2",
        "externalCode": "geYPAnDwhwrTMeo09TjW21"
    }
]
```

### Удалить ячейку склада

**Параметры**

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **store_id**  | `string` (required) *Example: 7a6a11b6-12c5-11e6-9464-e4de00000006* id Склада. |
| **slot_id**   | `string` (required) *Example: 7d479c5f-75f9-11ed-ac1a-000d00000003* id Ячейки склада. |

> Запрос на удаление Ячейки склада с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/slots/7d479c5f-75f9-11ed-ac1a-000d00000003"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Ячейки склада.

### Массовое удаление ячеек склада

В теле запроса нужно передать массив, содержащий JSON метаданных Ячеек склада, которые вы хотите удалить.

> Запрос на массовое удаление Ячеек склада.

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/slots/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/slots/9177a566-75f8-11ed-ac1a-000d00000000",
            "type": "slot",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/slots/7d479c5f-75f9-11ed-ac1a-000d00000003",
            "type": "slot",
            "mediaType": "application/json"
          }
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Ячеек склада.

```json
[
  {
    "info":"Сущность 'slot' с UUID: 9177a566-75f8-11ed-ac1a-000d00000000 успешно удалена"
  },
  {
    "info":"Сущность 'slot' с UUID: 7d479c5f-75f9-11ed-ac1a-000d00000003 успешно удалена"
  }
]
```

### Получить ячейку склада
**Параметры**

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b18* id Ячейки Склада. |

> Запрос на получение отдельной Ячейки Склада с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/store/7944ef04-f831-11e5-7a69-971500188b19/slots/7944ef04-f831-11e5-7a69-971500188b18"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Ячейки Склада с указанным id.

```json
{
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7944ef04-f831-11e5-7a69-971500188b19/slots/7944ef04-f831-11e5-7a69-971500188b18",
        "type": "slot",
        "mediaType": "application/json"
      },
      "id": "7944ef04-f831-11e5-7a69-971500188b18",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "updated": "2016-05-05 16:32:02",
      "name": "slot1",
      "externalCode": "223ddxzv223"
}
```

### Изменить ячейку склада

В теле запроса нужно передать JSON представление Ячейки склада, которую вы хотите обновить.

**Параметры**

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **store_id**  | `string` (required) *Example: 7a6a11b6-12c5-11e6-9464-e4de00000006* id Склада. |
| **slot_id**   | `string` (required) *Example: 7d479c5f-75f9-11ed-ac1a-000d00000003* id Ячейки склада. |

> Запрос на обновление Ячейки склада

```shell
curl -X PUT
  "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/slots/7d479c5f-75f9-11ed-ac1a-000d00000003"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '{
        "name": "slot 3"
      }'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Ячейки Склада.

```json
[
    {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/slots/7d479c5f-75f9-11ed-ac1a-000d00000003",
            "type": "slot",
            "mediaType": "application/json"
        },
        "id": "7d479c5f-75f9-11ed-ac1a-000d00000003",
        "accountId": "5f69193a-75f8-11ed-ac1a-000f00000001",
        "updated": "2022-12-07 09:29:56.547",
        "name": "slot 3",
        "externalCode": "wYIaWipYjrZkJZZlw1Amy1"
    }
]
```

> Запрос на обновление Ячейки склада с зоной

```shell
curl -X PUT
  "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/slots/7d479c5f-75f9-11ed-ac1a-000d00000003"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '{
        "name": "slot 3",
        "zone": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/zones/8277a566-75f8-11ed-ac1a-000d00000000",
            "type": "storezone",
            "mediaType": "application/json"
          }
        }
      }'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Ячейки Склада.

```json
[
    {
      "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/slots/7d479c5f-75f9-11ed-ac1a-000d00000003",
          "type": "slot",
          "mediaType": "application/json"
      },
      "id": "7d479c5f-75f9-11ed-ac1a-000d00000003",
      "accountId": "5f69193a-75f8-11ed-ac1a-000f00000001",
      "updated": "2022-12-07 09:29:56.547",
      "name": "slot 3",
      "externalCode": "wYIaWipYjrZkJZZlw1Amy1",
      "zone": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/7a6a11b6-12c5-11e6-9464-e4de00000006/zones/8277a566-75f8-11ed-ac1a-000d00000000",
          "type": "storezone",
          "mediaType": "application/json"
        }
      }
    }
]
```
