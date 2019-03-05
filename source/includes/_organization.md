## Юрлицо
Средствами JSON API можно создавать и обновлять сведения о юрлицах, запрашивать списки юрлиц и сведения по отдельным юрлицам. С помощью специального ресурса можно управлять счетами отдельного юрлица. Кодом сущности для юрлица в составе JSON API является ключевое слово **organization**.
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](/api/remap/1.2/doc/index.html#header-контекстный-поиск).

Поиск среди объектов юрлиц на соответствие поисковой строке будет осуществлён по следующим полям:
+ По наименованию Юрлица **name**
+ По коду Юрлица **code**
+ По полному наименованию Юрлица **legalTitle**
+ По адресу электронной почты **email**
+ По номеру городского телефона **phone**
+ По номеру дисконтной карты

### Юрлица

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о юрлице
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **syncId** - ID синхронизации. После заполнения недоступен для изменения.
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **name** - Краткое наименование юрлица `Необходимое`
+ **description** - Комментарий к Юр. лицу
+ **code** - Код юрлица
+ **actualAddress** - Фактический адрес Юрлица
+ **actualAddressFull** - Фактический адрес Юрлица с отдельными полями.
+ **externalCode** - Внешний код юрлица
+ **archived** - Добавлено ли юрлицо в архив
+ **created** - Дата создания
+ **companyType** - Тип юрлица. `[Юридическое лицо, Индивидуальный предприниматель, Физическое лицо]`.
В зависимости от значения данного поля набор выводимых реквизитов юрлица может меняться.  Подробнее [тут](#header-тип-юрлица)

#### Поля реквизитов
___
+ **legalTitle** - Полное наименование юрлица
+ **legalAddress** - Юридический адрес юрлица
+ **legalAddressFull** - Юридический адрес юрлица с отдельными полями.
+ **inn** - ИНН
+ **kpp** - КПП
+ **ogrn** - ОГРН
+ **ogrnip** - ОГРНИП
+ **okpo** - ОКПО
+ **certificateNumber** - Номер свидетельства
+ **certificateDate** - Дата свидетельства
___
+ **email** - Электронная почта
+ **phone** - Телефон
+ **fax** - Факс
+ **accounts** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные), представляющие собой ссылку на счета юрлица
+ **attributes** - Коллекция доп. полей в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **isEgaisEnable** - Включен ли ЕГАИС для данного юрлица
+ **fsrarId** - Идентификатор в ФСРАР
+ **payerVat** - Является ли данное юрлицо плательщиком НДС
+ **utmUrl** - IP-адрес УТМ
+ **actualAddress** - Фактический адрес юрлица
+ **actualAddressFull** - Фактический адрес юрлица с отдельными полями
+ **director** - Руководитель
+ **chiefAccountant** - Главный бухгалтер


#### Атрибуты вложенных сущностей
#### Аттрибуты сущности Адрес
+ **postalCode** - Почтовый индекс
+ **country** - Ссылка на страну в формате [Метаданных](#header-метаданные)
+ **region** - Ссылка на регион в формате [Метаданных](#header-метаданные)
+ **city** - Город
+ **street** - Улица
+ **house** - Дом (Максимальная длина - 30 символов)
+ **apartment** - Квартира (Максимальная длина - 30 символов)
+ **addInfo** - Другое
+ **comment** - Комментарий

Строка адреса получается конкатенацией в следующем порядке: postalCode -> country -> region -> city -> street -> house -> apartment -> addInfo, используя запятую в качестве разделителя.

##### Счета юрлица
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **updated** - Момент последнего обновления сущности`Только для чтения`
+ **isDefault** - Является ли счёт основным счётом юрлица
+ **accountNumber** - Номер счёта `Необходимо`
+ **bankName** - Наименование банка
+ **bankLocation** - Адрес банка
+ **correspondentAccount** - Корр счет
+ **bic** - БИК
+ **agent** - Ссылка на юрлицо (тип [Мета](/api/remap/1.2/doc/index.html#header-метаданные)) `Необходимо`

#### Тип юрлица
В зависимости от типа юрлица **companyType** в составе его объекта будут выводиться разные наборы реквизитов.
Типы юрлица и соответствующие значения, которые могут быть переданы в значение данного поля:
| Тип юрлица                | Значение поля companyType  |
| ------------------------------ |:---------------------------|
| Юридическое лицо               | legal                      |
| Индивидуальный предприниматель | entrepreneur               |
| Физическое лицо                | individual                 |

Если тип юрлица `Юридическое лицо`, будут выведены следующие поля реквизитов:
+ **legalTitle** - Полное наименование юрлица
+ **legalAddress** - Юридический адрес юрлица
+ **inn** - ИНН
+ **kpp** - КПП
+ **ogrn** - ОГРН
+ **okpo** - ОКПО

Если тип юрлица `Индивидуальный предприниматель`, будут выведены следующие поля реквизитов:
+ **legalTitle** - Полное наименование юрлица
+ **legalAddress** - Юридический адрес юрлица
+ **inn** - ИНН
+ **okpo** - ОКПО
+ **ogrnip** - ОГРНИП
+ **certificateNumber** - Номер свидетельства
+ **certificateDate** - Дата свидетельства

Если тип юрлица `Физическое лицо`, будут выведены следующие поля реквизитов:
+ **legalTitle** - Полное наименование юрлица
+ **legalAddress** - Юридический адрес юрлица
+ **inn** - ИНН

О работе с доп. полями юрлиц можно прочитать [здесь](/api/remap/1.2/doc/index.html#header-работа-с-дополнительными-полями)


### Получить список юрлиц
Запрос на получение списка юрлиц на данной учётной записи.
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой юрлица.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить список юрлиц

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/organization"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос.Результат: Объект JSON, включающий в себя поля:

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
    "type": "organization",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      },
      "id": "850c8195-f504-11e5-8a84-bae50000015e",
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
      "updated": "2016-04-18 17:26:20",
      "name": "ООО ОАО ООО ОАО",
      "description": "юрлицо, делающее основнуб прибыль",
      "code": "1214124",
      "externalCode": "6IRv89VSgKY7yQAmAuV7n0",
      "archived": false,
      "created": "2007-02-07 17:16:41",
      "legalTitle": "ООО Великое объединение любителей великих объединений",
      "legalAddress": "125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
      "legalAddressFull": {
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
      "actualAddress": "125009, Россия, г Москва, Москва, ул Тверская, 1, 111, addInfo",
      "actualAddressFull": {
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
        "apartment": "111",
        "addInfo": "addinfo",
        "comment": "some words about address"
      },
      "inn": "8274424278",
      "kpp": "123456789",
      "ogrn": "121410924",
      "okpo": "1241252156",
      "email": "asdad@sfasf.erq",
      "phone": "fawofyho21f1",
      "fax": "feisafhn0e12f31",
      "accounts": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "account",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "isEgaisEnable": true,
      "fsrarId": "1963703",
      "payerVat": true,
      "utmUrl": "10.250.110.81"
    }
  ]
}
```

### Создать юрлицо 
Запрос на создание нового юрлица.
#### Описание
Юрлицо создаётся на основе переданного объекта JSON,
который содержит представление нового юрлица.

> Пример создания нового юрлица.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/organization"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "ОАО СветПром",
            "description": "юрлицо, делающее маленькую прибыль",
            "code": "666",
            "externalCode": "666АААА666",
            "archived": false,
            "legalTitle": "ООО Великое Свет Пром",
            "legalAddressFull": {
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
          "actualAddressFull": {
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
            "apartment": "111",
            "addInfo": "addinfo",
            "comment": "some words about address"
          },
            "inn": "87654321",
            "kpp": "15312532",
            "ogrn": "12345",
            "okpo": "12345",
            "email": "svetprom@mail.svet",
            "phone": "22222222",
            "fax": "bello123",
            "isEgaisEnable": true,
            "fsrarId": "1963703",
            "payerVat": true,
            "utmUrl": "10.250.110.81",
            "director": "Кипелова Александра",
            "chiefAccountant": "Подкупников Иван"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного юрлица.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/4b9d5bec-0575-11e6-9464-e4de00000008",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
    "type": "organization",
    "mediaType": "application/json"
  },
  "id": "4b9d5bec-0575-11e6-9464-e4de00000008",
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
  "updated": "2016-04-18 17:53:21",
  "name": "ОАО СветПром",
  "description": "юрлицо, делающее маленькую прибыль",
  "code": "666",
  "externalCode": "666АААА666",
  "archived": false,
  "legalTitle": "ООО Великое Свет Пром",
  "legalAddress": "125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
  "legalAddressFull": {
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
  "actualAddress": "125009, Россия, г Москва, Москва, ул Тверская, 1, 111, addInfo",
  "actualAddressFull": {
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
    "apartment": "111",
    "addInfo": "addinfo",
    "comment": "some words about address"
  },
  "inn": "87654321",
  "kpp": "15312532",
  "ogrn": "12345",
  "okpo": "12345",
  "email": "svetprom@mail.svet",
  "phone": "22222222",
  "fax": "bello123",
  "accounts": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/4b9d5bec-0575-11e6-9464-e4de00000008/accounts",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "account",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "isEgaisEnable": true,
  "fsrarId": "1963703",
  "payerVat": true,
  "utmUrl": "10.250.110.81"
}
```

> Пример создания нового юрлица с доп полями в теле запроса.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/organization"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "ОАО СветПром",
            "description": "юрлицо, делающее маленькую прибыль",
            "code": "666",
            "externalCode": "666АААА666",
            "archived": false,
            "legalTitle": "ООО Великое Свет Пром",
            "legalAddressFull": {
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
          "actualAddressFull": {
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
            "apartment": "111",
            "addInfo": "addinfo",
            "comment": "some words about address"
          },
            "inn": "87654321",
            "kpp": "15312532",
            "ogrn": "12345",
            "okpo": "12345",
            "email": "svetprom@mail.svet",
            "phone": "22222222",
            "fax": "bello123",
            "attributes": [
              {
                "id": "7f4a6b38-12bb-11e6-9464-e4de00000076",
                "value": "Строковое значение"
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного юрлица.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/bf182d24-12d7-11e6-9464-e4de00000012",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
    "type": "organization",
    "mediaType": "application/json"
  },
  "id": "bf182d24-12d7-11e6-9464-e4de00000012",
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
  "updated": "2016-05-05 18:40:51",
  "name": "ОАО СветГАЗКАМАЗПром",
  "description": "Новое юрлицо",
  "code": "666",
  "externalCode": "sfwafn22-124124sa",
  "archived": false,
  "created": "2007-02-07 17:16:41",
  "legalTitle": "ООО Великое Сообщество КАМАЗ ПРОМ",
  "legalAddress": "125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
  "legalAddressFull": {
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
  "actualAddress": "125009, Россия, г Москва, Москва, ул Тверская, 1, 111, addInfo",
  "actualAddressFull": {
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
    "apartment": "111",
    "addInfo": "addinfo",
    "comment": "some words about address"
  },
  "inn": "87654321",
  "kpp": "15312532",
  "ogrn": "12345",
  "okpo": "12345",
  "email": "svetpromgazkamaz@mail.svet",
  "phone": "22222222",
  "fax": "belwo123",
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "7f4a6b38-12bb-11e6-9464-e4de00000076",
      "name": "Строковое поле",
      "type": "string",
      "value": "Строковое значение"
    }
  ],
  "accounts": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/bf182d24-12d7-11e6-9464-e4de00000012/accounts",
      "type": "account",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Массовое создание и обновление юрлиц 
[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) юрлиц.
В теле запроса нужно передать массив, содержащий JSON представления юрлиц, которые вы хотите создать или обновить.
Обновляемые юрлица должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких юрлиц

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/organization"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "ОАО СветПром",
              "description": "юрлицо, делающее маленькую прибыль",
              "code": "666",
              "externalCode": "666АААА666",
              "archived": false,
              "legalTitle": "ООО Великое Свет Пром",
              "legalAddress": "г Москва ул Ленин д 42/685",
              "actualAddress": "г Пермь ул Сталина д 75",
              "inn": "87654321",
              "kpp": "15312532",
              "ogrn": "12345",
              "okpo": "12345",
              "email": "svetprom@mail.svet",
              "phone": "22222222",
              "fax": "bello123",
              "isEgaisEnable": true,
              "fsrarId": "1963703",
              "payerVat": true,
              "utmUrl": "10.250.110.81",
              "director": "Кипелова Александра",
              "chiefAccountant": "Подкупников Иван"
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/bf182d24-12d7-11e6-9464-e4de00000012",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              },
              "name": "ОАО СветПром",
              "description": "юрлицо, делающее маленькую прибыль",
              "code": "666",
              "externalCode": "666АААА666",
              "archived": false,
              "legalTitle": "ООО Великое Свет Пром",
              "legalAddress": "г Москва ул Ленин д 42/685",
              "actualAddress": "г Уфа ул Маяковского д 65",
              "inn": "87654321",
              "kpp": "15312532",
              "ogrn": "12345",
              "okpo": "12345",
              "email": "svetprom@mail.svet",
              "phone": "22222222",
              "fax": "bello123",
              "payerVat": false,
              "director": "Вздрыжженов Иван Валерьевич",
              "chiefAccountant": "Кулумбекова Василиса Иисмаиловна"
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных юрлиц.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/4b9d5bec-0575-11e6-9464-e4de00000008",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    },
    "id": "4b9d5bec-0575-11e6-9464-e4de00000008",
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
    "updated": "2016-04-18 17:53:21",
    "name": "ОАО СветПром",
    "description": "юрлицо, делающее маленькую прибыль",
    "code": "666",
    "externalCode": "666АААА666",
    "archived": false,
    "legalTitle": "ООО Великое Свет Пром",
    "legalAddress": "г Москва ул Ленин д 42/685",
    "actualAddress": "г Пермь ул Сталина д 75",
    "inn": "87654321",
    "kpp": "15312532",
    "ogrn": "12345",
    "okpo": "12345",
    "email": "svetprom@mail.svet",
    "phone": "22222222",
    "fax": "bello123",
    "accounts": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/4b9d5bec-0575-11e6-9464-e4de00000008/accounts",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "account",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
      }
    },
    "isEgaisEnable": true,
    "fsrarId": "1963703",
    "payerVat": true,
    "utmUrl": "10.250.110.81"
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/bf182d24-12d7-11e6-9464-e4de00000012",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    },
    "id": "bf182d24-12d7-11e6-9464-e4de00000012",
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
    "updated": "2016-05-05 18:40:51",
    "name": "ОАО СветГАЗКАМАЗПром",
    "description": "Новое юрлицо",
    "code": "666",
    "externalCode": "sfwafn22-124124sa",
    "archived": false,
    "created": "2007-02-07 17:16:41",
    "legalTitle": "ООО Великое Сообщество КАМАЗ ПРОМ",
    "legalAddress": "г Москва ул Ленина д 42/685",
    "actualAddress": "г Уфа ул Маяковского д 65",
    "inn": "87654321",
    "kpp": "15312532",
    "ogrn": "12345",
    "okpo": "12345",
    "email": "svetpromgazkamaz@mail.svet",
    "phone": "22222222",
    "fax": "belwo123",
    "accounts": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/bf182d24-12d7-11e6-9464-e4de00000012/accounts",
        "type": "account",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    },
    "payerVat": false,
    "director": "Вздрыжженов Иван Валерьевич",
    "chiefAccountant": "Кулумбекова Василиса Иисмаиловна"
  }
]
```

### Удалить юрлицо

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id юрлица.|

> Запрос на удаление юрлица с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/organization/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление юрлица.

### Массовое удаление Организаций

В теле запроса нужно передать массив, содержащий JSON метаданных Организаций, которые вы хотите удалить.


> Запрос на массовое удаление Организаций. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/organization"
  -H "Authorization: Basic <Access-Token>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
            "type": "organization",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
            "type": "organization",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информацио об удалении Организаций.

```json
[
  {
    "info":"Сущность 'organization' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'organization' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
```

### Метаданные юрлиц
Запрос на получение метаданных юрлиц. Результат - объект JSON, включающий в себя:
+ **meta** - Ссылка на метаданные юрлиц
+ **attributes** - Массив объектов доп. полей юрлиц в формате [Метаданных](#header-метаданные)
+ **createShared** - создавать новые юрлица с меткой "Общий"

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](#header-работа-с-дополнительными-полями).

> Метаданные юрлиц

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей юрлиц.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
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
  "createShared": true
}
```

### Отдельное доп. поле

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 5290a290-0313-11e6-9464-e4de00000020* id Доп. поля.|

> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata/attributes/5290a290-0313-11e6-9464-e4de00000020"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata/attributes/5290a290-0313-11e6-9464-e4de00000020",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "5290a290-0313-11e6-9464-e4de00000020",
  "name": "attribute_name",
  "type": "boolean",
  "required": false
}
```

### Юрлицо

### Получить юрлицо 
Запрос на получение юрлица с указанным id.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id юрлица.|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить юрлицо 

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/organization/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление нового юрлица.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/4b9d5bec-0575-11e6-9464-e4de00000008",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
    "type": "organization",
    "mediaType": "application/json"
  },
  "id": "4b9d5bec-0575-11e6-9464-e4de00000008",
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
  "updated": "2016-04-18 17:57:27",
  "name": "ОАО СветПром",
  "description": "юрлицо, делающее маленькую прибыль",
  "code": "666",
  "externalCode": "666АААА666",
  "archived": false,
  "created": "2007-02-07 17:16:41",
  "legalTitle": "ООО Великое Свет Пром",
  "legalAddress": "125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
  "legalAddressFull": {
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
  "actualAddress": "125009, Россия, г Москва, Москва, ул Тверская, 1, 111, addInfo",
  "actualAddressFull": {
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
    "apartment": "111",
    "addInfo": "addinfo",
    "comment": "some words about address"
  },
  "inn": "87654321",
  "kpp": "15312532",
  "ogrn": "12345",
  "okpo": "12345",
  "ogrnip": "58632598y21jk",
  "certificateNumber": "klghvew983412",
  "certificateDate": "2016-04-30 00:00:00",
  "email": "svetprom@mail.svet",
  "phone": "22222222",
  "fax": "bello123",
  "accounts": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/4b9d5bec-0575-11e6-9464-e4de00000008/accounts",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "account",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "isEgaisEnable": true,
  "fsrarId": "1963703",
  "payerVat": true,
  "utmUrl": "10.250.110.81",
  "director": "Администратор",
  "chiefAccountant": "Администратор"
}
```

### Изменить юрлицо 
Запрос на обновление юрлица с указанным id.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id юрлица.|

> Пример запроса на обновление юрлица с указанным id.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/organization/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "ОАО СветПром",
            "description": "юрлицо, делающее маленькую прибыль",
            "code": "666",
            "externalCode": "666АААА666",
            "archived": false,
            "legalTitle": "ООО Великое Свет Пром",
            "legalAddress": "г Москва ул Ленин д 42/685",
            "actualAddress": "г Пермь ул Сталина д 75",
            "inn": "87654321",
            "kpp": "15312532",
            "ogrn": "12345",
            "okpo": "12345",
            "email": "svetprom@mail.svet",
            "phone": "22222222",
            "fax": "bello123",
            "isEgaisEnable": true,
            "fsrarId": "1963703",
            "payerVat": true,
            "utmUrl": "10.250.110.81",
            "director": "Кипелова Александра",
            "chiefAccountant": "Подкупников Иван"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON обновлённого юрлица.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/4b9d5bec-0575-11e6-9464-e4de00000008",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
    "type": "organization",
    "mediaType": "application/json"
  },
  "id": "4b9d5bec-0575-11e6-9464-e4de00000008",
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
  "updated": "2016-04-18 17:53:21",
  "name": "ОАО СветПром",
  "description": "юрлицо, делающее маленькую прибыль",
  "code": "666",
  "externalCode": "666АААА666",
  "archived": false,
  "legalTitle": "ООО Великое Свет Пром",
  "legalAddress": "г Москва ул Ленин д 42/685",
  "actualAddress": "г Пермь ул Сталина д 75",
  "inn": "87654321",
  "kpp": "15312532",
  "ogrn": "12345",
  "okpo": "12345",
  "email": "svetprom@mail.svet",
  "phone": "22222222",
  "fax": "bello123",
  "accounts": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/4b9d5bec-0575-11e6-9464-e4de00000008/accounts",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "account",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "isEgaisEnable": true,
  "fsrarId": "1963703",
  "payerVat": true,
  "utmUrl": "10.250.110.81"
}
```

> Пример запроса на обновление юрлица с указанным id.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/organization/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "ОАО СветПром",
            "description": "юрлицо, делающее маленькую прибыль",
            "code": "666",
            "externalCode": "666АААА666",
            "archived": false,
            "legalTitle": "ООО Великое Свет Пром",
            "legalAddressFull": {
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
          "actualAddressFull": {
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
            "apartment": "111",
            "addInfo": "addinfo",
            "comment": "some words about address"
          },
            "inn": "87654321",
            "kpp": "15312532",
            "ogrn": "12345",
            "okpo": "12345",
            "email": "svetprom@mail.svet",
            "phone": "22222222",
            "fax": "bello123",
            "attributes": [
              {
                "id": "7f4a6b38-12bb-11e6-9464-e4de00000076",
                "value": "Такая Строка"
              }
            ],
            "payerVat": false,
            "director": "Вздрыжженов Иван Валерьевич",
            "chiefAccountant": "Кулумбекова Василиса Иисмаиловна"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON обновлённого юрлица.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/bf182d24-12d7-11e6-9464-e4de00000012",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
    "type": "organization",
    "mediaType": "application/json"
  },
  "id": "bf182d24-12d7-11e6-9464-e4de00000012",
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
  "updated": "2016-05-05 18:40:51",
  "name": "ОАО СветГАЗКАМАЗПром",
  "description": "Новое юрлицо",
  "code": "666",
  "externalCode": "sfwafn22-124124sa",
  "archived": false,
  "created": "2007-02-07 17:16:41",
  "legalTitle": "ООО Великое Сообщество КАМАЗ ПРОМ",
  "legalAddress": "125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
  "legalAddressFull": {
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
  "actualAddress": "125009, Россия, г Москва, Москва, ул Тверская, 1, 111, addInfo",
  "actualAddressFull": {
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
    "apartment": "111",
    "addInfo": "addinfo",
    "comment": "some words about address"
  },
  "inn": "87654321",
  "kpp": "15312532",
  "ogrn": "12345",
  "okpo": "12345",
  "email": "svetpromgazkamaz@mail.svet",
  "phone": "22222222",
  "fax": "belwo123",
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "7f4a6b38-12bb-11e6-9464-e4de00000076",
      "name": "Строковое поле",
      "type": "string",
      "value": "Строковое значение"
    }
  ],
  "accounts": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/bf182d24-12d7-11e6-9464-e4de00000012/accounts",
      "type": "account",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "payerVat": false,
  "director": "Вздрыжженов Иван Валерьевич",
  "chiefAccountant": "Кулумбекова Василиса Иисмаиловна"
}
```

### Счета юрлица

### Получить список счетов юрлица 
Возвращает массив JSON представлений счетов юрлица.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id юрлица.|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить список счетов юрлица

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/organization/7944ef04-f831-11e5-7a69-971500188b19/accounts"
  -H "Authorization: Basic <Access-Token>"
```
 
> Response 200 (application/json)
Успешный запрос.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/4b9d5bec-0575-11e6-9464-e4de00000008/accounts",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
    "type": "account",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/4b9d5bec-0575-11e6-9464-e4de00000008/accounts/4b9d69b7-0575-11e6-9464-e4de00000009",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "account",
        "mediaType": "application/json"
      },
      "id": "4b9d69b7-0575-11e6-9464-e4de00000009",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "updated": "2016-04-18 17:53:21",
      "isDefault": true,
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/4b9d5bec-0575-11e6-9464-e4de00000008",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      }
    }
  ]
}
```

### Изменить счета юрлица
#### Описание
Обновляются счета юрлица с указанным id.
Обновляются все поля, указанные в JSON объекте запроса, кроме
помеченных `Только для чтения` в описании [атрибутов счетов юрлица](#header-счета-юрлица).
Поля, которые не были указаны в JSON запроса, не изменяются.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id юрлица.|

> Изменить счета юрлица

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/organization/7944ef04-f831-11e5-7a69-971500188b19/accounts"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '[
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/d955aa70-6703-11e7-9464-e4de00000051/accounts/d9560d0e-6703-11e7-9464-e4de00000052",
                "type": "account",
                "mediaType": "application/json"
              },
              "id": "d9560d0e-6703-11e7-9464-e4de00000052",
              "isDefault": false,
              "accountNumber": "1234567876543",
              "bankName": "\"ОАО Сбербm;анк\"",
              "bankLocation": "г Моl;;lсква",
              "correspondentAccount": "12314124jkjj2451",
              "bic": "21412hhhh4"
            },
            {
              "isDefault": false,
              "accountNumber": "1234567876543",
              "bankName": "\"ОАО БАНК\"",
              "bankLocation": "г Москва",
              "correspondentAccount": "12314124jkjj2451",
              "bic": "21412555554"
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/d955aa70-6703-11e7-9464-e4de00000051/accounts/d9560d0e-6703-11e7-9464-e4de00000052",
      "type": "account",
      "mediaType": "application/json"
    },
    "id": "d9560d0e-6703-11e7-9464-e4de00000052",
    "accountId": "d8a2e973-6703-11e7-9464-e4de00000001",
    "updated": "2017-07-12 16:13:08",
    "isDefault": true,
    "accountNumber": "1234567876543",
    "bankName": "\"ОАО Сбербm;анк\"",
    "bankLocation": "г Моl;;lсква",
    "correspondentAccount": "12314124jkjj2451",
    "bic": "21412hhhh4"
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/d955aa70-6703-11e7-9464-e4de00000051/accounts/97fc6499-b96f-11e7-9464-e4de00000006",
      "type": "account",
      "mediaType": "application/json"
    },
    "id": "97fc6499-b96f-11e7-9464-e4de00000006",
    "accountId": "d8a2e973-6703-11e7-9464-e4de00000001",
    "updated": "2017-10-25 13:31:00",
    "isDefault": false,
    "accountNumber": "1234567876543",
    "bankName": "\"ОАО БАНК\"",
    "bankLocation": "г Москва",
    "correspondentAccount": "12314124jkjj2451",
    "bic": "21412555554"
  }
]
```
