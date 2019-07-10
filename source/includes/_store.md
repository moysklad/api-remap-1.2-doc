## Склад

### Склады 
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](#kontextnyj-poisk).

Поиск среди объектов складов на соответствие поисковой строке будет осуществлен по следующим полям:

+ По наименованию Склада **name**
+ По коду Склада **code**

#### Атрибуты сущности
+ **meta** - [Метаданные](#metadannye) о Складе
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](#metadannye)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](#metadannye)
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **name** - Наименование Склада `Необходимое`
+ **description** - комментарий к Складу
+ **code** - Код Склада
+ **externalCode** - Внешний код Склада
+ **archived** - Добавлен ли Склад в архив
+ **address** - Адрес склада
+ **addressFull** - Адрес с детализацией по отдельным полям.
+ **parent** - Родительский склад (Группа)
+ **pathName** - Группа Склада
+ **attributes** - Дополнительные поля Склада в формате [Метаданных](#metadannye)

#### Аттрибуты сущности Адрес
+ **postalCode** - Почтовый индекс
+ **country** - Ссылка на страну в формате [Метаданных](#metadannye)
+ **region** - Ссылка на регион в формате [Метаданных](#metadannye)
+ **city** - Город
+ **street** - Улица
+ **house** - Дом (Максимальная длина - 30 символов)
+ **apartment** - Квартира (Максимальная длина - 30 символов)
+ **addInfo** - Другое
+ **comment** - Комментарий

Строка адреса является конкатенацией полей структурированного адреса в следующем порядке: postalCode -> country -> region -> city -> street -> house -> apartment -> addInfo, используя запятую в качестве разделителя.
При передачи в МойСклад сущностей с адресом используйте либо строковый адрес, либо структурированный.
При передачи обоих адресов строковый будет игнорирован.
При передачи только строкового он будет отражаться как в строковом поле так и в addInfo структурированного адреса.

О работе с доп. полями Складов можно прочитать [здесь](#rabota-s-dopolnitel-nymi-polqmi)


### Получить Склады 
Получить список всех Складов.
Результат: Объект JSON, включающий в себя поля:

- **meta** [Метаданные](#metadannye) о выдаче,
- **context** - [Метаданные](#metadannye) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой [Склады](#sklad).

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить Склады 

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/store"
  -H "Authorization: Basic <Access-Token>"
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
      "pathName": ""
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
      "attributes": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
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
      "pathName": "002"
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
      "pathName": "Основной склад"
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
    -H "Authorization: Basic <Access-Token>"
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
  }
}
```

> Пример запроса на создание нового Склада с доп. полями в теле запроса.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/store"
    -H "Authorization: Basic <Access-Token>"
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
      "id": "3a85cfe3-12c5-11e6-9464-e4de00000087",
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
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
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
[Массовое создание и обновление](#sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Складов.
В теле запроса нужно передать массив, содержащий JSON представления Складов, которые вы хотите создать или обновить.
Обновляемые Склады должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Складов

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/store"
    -H "Authorization: Basic <Access-Token>"
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
    "address": "г Москва ул Вавилова 19 к 116"
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
    "address": "г Москва ул БаБилова 20 к 116"
  }
]

```

### Удалить Склад

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Склада.|

> Запрос на удаление Склада с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/store/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление Склада.

### Массовое удаление Складов

В теле запроса нужно передать массив, содержащий JSON метаданных Складов, которые вы хотите удалить.


> Запрос на массовое удаление Складов. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/store"
  -H "Authorization: Basic <Access-Token>"
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

> Успешный запрос. Результат - JSON информацио об удалении Складов.

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

+ **meta** - Ссылка на метаданные Складов
+ **attributes** - Массив объектов доп. полей Складов в формате [Метаданных](#metadannye)
+ **createShared** - создавать новые Склады с меткой "Общий"

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](#rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Складов 

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata"
  -H "Authorization: Basic <Access-Token>"
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

#### Отдельное доп. поле
 
 **Параметры**
 
|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 5290a290-0313-11e6-9464-e4de00000020* id Доп. поля.|
 
> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata/attributes/5290a290-0313-11e6-9464-e4de00000020"
  -H "Authorization: Basic <Access-Token>"
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

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Склада.|

> Запрос на получение отдельного Склада с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/store/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
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
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
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
кроме полей, помеченных `Только для чтения` в описании [атрибутов Склада](#sklad).

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Склада.|


> Пример запроса на обновление существующего Склада.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/store/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Access-Token>"
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
      "street": "Leninskie goru2"
  }
}
```

> Пример запроса на обновление существующего Склада с доп полями в теле запроса.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/store/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Access-Token>"
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
      "id": "3a85cfe3-12c5-11e6-9464-e4de00000087",
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
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
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
