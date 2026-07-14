## Подразделение юридического лица
Средствами JSON API можно создавать и обновлять сведения о подразделениях юридического лица, запрашивать списки подразделений и сведения по отдельным подразделениям. Кодом сущности для подразделения юридического лица в составе JSON API является ключевое слово **organizationbranch**.
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](#/general#3-kontekstnyj-poisk). Поиск с параметром search отличается от других тем, что поиск не префиксный и без токенизации. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов подразделений на соответствие поисковой строке будет осуществлен по следующим полям:

+ По наименованию Подразделения **name**
+ По коду Подразделения **code**

#### Атрибуты сущности

| Название                    | Тип                            | Фильтрация                 | Описание                                                                                                                                                              |
|-----------------------------|:-------------------------------|:---------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**               | UUID                           | `=` `!=`                   | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                  |
| **actualAddress**           | String(255)                    | `=` `!=` `~` `~=` `=~`     | Фактический адрес Подразделения                                                                                                                                       |
| **actualAddressFull**       | Object                         |                            | Фактический адрес Подразделения с детализацией по отдельным полям. [Подробнее тут](#/dictionaries/counterparty#5-adres)                                               |
| **archived**                | Boolean                        | `=` `!=`                   | Добавлено ли Подразделение в архив<br>`+Обязательное при ответе`                                                                                                      |
| **code**                    | String(255)                    | `=` `!=` `~` `~=` `=~`     | Код Подразделения                                                                                                                                                     |
| **created**                 | DateTime                       | `=` `!=` `<` `>` `<=` `>=` | Дата создания<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                      |
| **description**             | String(4096)                   | `=` `!=` `~` `~=` `=~`     | Комментарий к Подразделению                                                                                                                                           |
| **email**                   | String(255)                    | `=` `!=` `~` `~=` `=~`     | Адрес электронной почты Подразделения                                                                                                                                 |
| **externalCode**            | String(255)                    | `=` `!=` `~` `~=` `=~`     | Внешний код Подразделения<br>`+Обязательное при ответе`                                                                                                               |
| **fax**                     | String(255)                    | `=` `!=` `~` `~=` `=~`     | Номер факса Подразделения                                                                                                                                             |
| **group**                   | [Meta](#/general#3-metadannye) |                            | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                                              |
| **id**                      | UUID                           | `=` `!=`                   | ID Подразделения<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                   |
| **mod\_\_requisites\_\_ru** | Object                         |                            | Реквизиты подразделения РФ. [Подробнее тут](#/dictionaries/organizationbranch#5-rekvizity-rf) <br>`+RU`                                                               |
| **meta**                    | [Meta](#/general#3-metadannye) |                            | Метаданные Подразделения<br>`+Обязательное при ответе`                                                                                                                |
| **name**                    | String(255)                    | `=` `!=` `~` `~=` `=~`     | Наименование Подразделения<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                                   |
| **organization**            | [Meta](#/general#3-metadannye) |                            | Метаданные юрлица, к которому относится подразделение<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании` `+После заполнения недоступно для изменения` |
| **owner**                   | [Meta](#/general#3-metadannye) | `=` `!=`                   | Владелец (Сотрудник)<br>`+Expand`                                                                                                                                     |
| **phone**                   | String(255)                    | `=` `!=` `~` `~=` `=~`     | Номер телефона Подразделения                                                                                                                                          |
| **shared**                  | Boolean                        | `=` `!=`                   | Общий доступ<br>`+Обязательное при ответе`                                                                                                                            |
| **syncId**                  | UUID                           | `=` `!=`                   | ID синхронизации<br>`+После заполнения недоступно для изменения`                                                                                                      |
| **updated**                 | DateTime                       | `=` `!=` `<` `>` `<=` `>=` | Момент последнего обновления Подразделения<br>`+Обязательное при ответе` `+Только для чтения`                                                                         |

Поля помеченные тегом региона (например, `+RU`, `+UZ`, `+KZ`) валидны только для подразделений,
связанных с юридическим лицом соответствующего региона. На текущий момент подразделения доступны только для региона РФ. 

##### Реквизиты РФ

| Название | Тип         | Фильтрация             | Описание      |
|----------|:------------|:-----------------------|:--------------|
| **kpp**  | String(255) | `=` `!=` `~` `~=` `=~` | КПП <br>`+RU` |

### Получить список подразделений юридического лица
Запрос на получение списка подразделений юридического лица на данной учетной записи.

| Название    | Тип                                                       | Описание                                                         |
|-------------|:----------------------------------------------------------|:-----------------------------------------------------------------|
| **meta**    | [Meta](#/general#3-metadannye)                            | Метаданные о выдаче                                              |
| **context** | [Meta](#/general#3-metadannye)                            | Метаданные о сотруднике, выполнившем запрос                      |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой подразделения юрлица  |

**Параметры**

| Параметр   | Описание                                                                                                                               |
|------------|:---------------------------------------------------------------------------------------------------------------------------------------|
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                |

> Получить список подразделений юридического лица

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
> Успешный запрос. Результат - JSON представление списка подразделений юридического лица.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch/metadata",
    "type": "organizationbranch",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch/b2e9eb47-f831-11e5-7a69-971500188b20",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch/metadata",
        "type": "organizationbranch",
        "mediaType": "application/json"
      },
      "id": "b2e9eb47-f831-11e5-7a69-971500188b20",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
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
      "updated": "2024-06-10 12:00:00",
      "name": "Московский филиал",
      "description": "Подразделение в Москве",
      "code": "MSC-001",
      "externalCode": "extMSC001",
      "archived": false,
      "created": "2024-01-15 09:00:00",
      "email": "admin@moysklad.ru",
      "phone": "+79878172568",
      "fax": "333333",
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "mod__requisites__ru": {
        "kpp": "123456789"
      },
      "actualAddress": "125009, Россия, г Москва, ул Тверская, 1",
      "actualAddressFull":{
        "postalCode":"125009",
        "country":{
          "meta":{
            "href":"https://api.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
            "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/country/metadata",
            "type":"country",
            "mediaType":"application/json"
          }
        },
        "region":{
          "meta":{
            "href":"https://api.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
            "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/region/metadata",
            "type":"region",
            "mediaType":"application/json"
          }
        },
        "city":"Москва",
        "street":"ул Тверская",
        "house":"1",
        "apartment":"111",
        "addInfo":"addinfo",
        "comment":"some words about address",
        "fiasCode__ru": "53423243432"
      }
    }
  ]
}
```

### Создать Подразделение юридического лица
Создать новое подразделение юридического лица.

#### Описание
Подразделение создается на основе переданного объекта JSON, который содержит представление нового подразделения.
Результат - JSON представление созданного подразделения. Для создания нового подразделения необходимо указать в переданном объекте не пустые поля `name` и `organization`.

> Пример создания подразделения юридического лица.

```shell
curl --compressed -X POST \
  "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -d '{
        "name": "Московский филиал",
        "organization": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
            "type": "organization",
            "mediaType": "application/json"
          }
        },
        "mod__requisites__ru": {
          "kpp": "123456789"
        },
        "actualAddress": "125009, Россия, г Москва, ул Тверская, 1",
        "actualAddressFull":{  
          "postalCode":"125009",
          "country":{  
            "meta":{  
              "href":"https://api.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
              "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/country/metadata",
              "type":"country",
              "mediaType":"application/json"
            }
          },
          "region":{  
            "meta":{  
              "href":"https://api.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
              "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/region/metadata",
              "type":"region",
              "mediaType":"application/json"
            }
          },
          "email": "admin@moysklad.ru",
          "phone": "+79878172568",
          "fax": "333333",
          "city":"Москва",
          "street":"ул Тверская",
          "house":"1",
          "apartment":"111",
          "addInfo":"addinfo",
          "comment":"some words about address",
          "fiasCode__ru": "53423243432"
        },
        "description": "Подразделение в Москве",
        "code": "MSC-001"
      }'
```

> Response 200 (application/json)
> Успешный запрос. Результат - JSON представление созданного подразделения юридического лица.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch/b2e9eb47-f831-11e5-7a69-971500188b20",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch/metadata",
    "type": "organizationbranch",
    "mediaType": "application/json"
  },
  "id": "b2e9eb47-f831-11e5-7a69-971500188b20",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
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
  "updated": "2024-06-10 12:00:00",
  "name": "Московский филиал",
  "description": "Подразделение в Москве",
  "code": "MSC-001",
  "externalCode": "extMSC001",
  "archived": false,
  "created": "2024-06-10 12:00:00",
  "email": "admin@moysklad.ru",
  "phone": "+79878172568",
  "fax": "333333",
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "mod__requisites__ru": {
    "kpp": "123456789"
  },
  "actualAddress": "125009, Россия, г Москва, ул Тверская, 1"
  "actualAddressFull":{
    "postalCode":"125009",
    "country":{
      "meta":{
        "href":"https://api.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
        "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type":"country",
        "mediaType":"application/json"
      }
    },
    "region":{
      "meta":{
        "href":"https://api.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
        "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type":"region",
        "mediaType":"application/json"
      }
    },
    "city":"Москва",
    "street":"ул Тверская",
    "house":"1",
    "apartment":"111",
    "addInfo":"addinfo",
    "comment":"some words about address",
    "fiasCode__ru": "53423243432"
  }
}
```

### Массовое создание и обновление Подразделений юридического лица
[Массовое создание и обновление](#/general#3-sozdanie-i-obnovlenie-neskolkih-obuektov) Подразделений юридического лица.
В теле запроса нужно передать массив, содержащий JSON представления Подразделений, которые вы хотите создать или обновить.
Обновляемые Подразделения должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких подразделений юридического лица.

```shell
curl --compressed -X POST \
  "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -d '[
        {
          "name": "Московский филиал",
          "organization": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
              "type": "organization",
              "mediaType": "application/json"
            }
          }
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch/b2e9eb47-f831-11e5-7a69-971500188b20",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch/metadata",
            "type": "organizationbranch",
            "mediaType": "application/json"
          },
          "name": "Московский филиал (обновленный)",
          "mod__requisites__ru": {
            "kpp": "123456789"
          },
          "email": "admin@moysklad.ru",
          "phone": "+79878172568",
          "fax": "333333"
        }
      ]'
```

> Response 200 (application/json)
> Успешный запрос. Результат - массив JSON представлений созданных и обновленных Подразделений юридического лица.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch/c3fa9c58-f831-11e5-7a69-971500188b21",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch/metadata",
      "type": "organizationbranch",
      "mediaType": "application/json"
    },
    "id": "c3fa9c58-f831-11e5-7a69-971500188b21",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "shared": false,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2024-06-10 12:00:00",
    "name": "Московский филиал",
    "externalCode": "extNewBranch",
    "archived": false,
    "created": "2024-06-10 12:00:00",
    "organization": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    }
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch/b2e9eb47-f831-11e5-7a69-971500188b20",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch/metadata",
      "type": "organizationbranch",
      "mediaType": "application/json"
    },
    "id": "b2e9eb47-f831-11e5-7a69-971500188b20",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "shared": false,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2024-06-10 13:00:00",
    "name": "Московский филиал (обновленный)",
    "code": "MSC-001",
    "externalCode": "extMSC001",
    "archived": false,
    "created": "2024-06-10 12:00:00",
    "email": "admin@moysklad.ru",
    "phone": "+79878172568",
    "fax": "333333",
    "organization": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "mod__requisites__ru": {
      "kpp": "123456789"
    }
  }
]
```

### Удалить Подразделение юридического лица

**Параметры**

| Параметр | Описание                                                                                          |
|:---------|:--------------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: b2e9eb47-f831-11e5-7a69-971500188b20* id Подразделения юрлица.     |

> Запрос на удаление Подразделения юридического лица с указанным id.

```shell
curl --compressed -X DELETE \
  "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch/b2e9eb47-f831-11e5-7a69-971500188b20" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
> Успешное удаление Подразделения юридического лица.

### Массовое удаление Подразделений юридического лица

В теле запроса нужно передать массив, содержащий JSON метаданных Подразделений юридического лица, которые вы хотите удалить.

> Запрос на массовое удаление Подразделений юридического лица.

```shell
curl --compressed -X POST \
  "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch/delete" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -d '[
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch/b2e9eb47-f831-11e5-7a69-971500188b20",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch/metadata",
            "type": "organizationbranch",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch/c3fa9c58-f831-11e5-7a69-971500188b21",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch/metadata",
            "type": "organizationbranch",
            "mediaType": "application/json"
          }
        }
      ]'
```

> Response 200 (application/json)
> Успешное удаление Подразделений юридического лица.

### Получить Подразделение юридического лица

**Параметры**

| Параметр | Описание                                                                                          |
|:---------|:--------------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: b2e9eb47-f831-11e5-7a69-971500188b20* id Подразделения юрлица.     |

> Запрос на получение подразделения юридического лица с указанным id.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch/b2e9eb47-f831-11e5-7a69-971500188b20" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
> Успешный запрос. Результат - JSON представление подразделения юридического лица.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch/b2e9eb47-f831-11e5-7a69-971500188b20",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch/metadata",
    "type": "organizationbranch",
    "mediaType": "application/json"
  },
  "id": "b2e9eb47-f831-11e5-7a69-971500188b20",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
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
  "updated": "2024-06-10 12:00:00",
  "name": "Московский филиал",
  "description": "Подразделение в Москве",
  "code": "MSC-001",
  "externalCode": "extMSC001",
  "archived": false,
  "created": "2024-01-15 09:00:00",
  "email": "admin@moysklad.ru",
  "phone": "+79878172568",
  "fax": "333333",
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "mod__requisites__ru": {
    "kpp": "123456789"
  },
  "actualAddress": "125009, Россия, г Москва, ул Тверская, 1"
  "actualAddressFull":{
    "postalCode":"125009",
    "country":{
      "meta":{
        "href":"https://api.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
        "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type":"country",
        "mediaType":"application/json"
      }
    },
    "region":{
      "meta":{
        "href":"https://api.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
        "metadataHref":"https://api.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type":"region",
        "mediaType":"application/json"
      }
    },
    "city":"Москва",
    "street":"ул Тверская",
    "house":"1",
    "apartment":"111",
    "addInfo":"addinfo",
    "comment":"some words about address",
    "fiasCode__ru": "53423243432"
  }
}
```

### Изменить Подразделение юридического лица
Запрос на обновление сведений о подразделении юридического лица.

**Параметры**

| Параметр | Описание                                                                                          |
|:---------|:--------------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: b2e9eb47-f831-11e5-7a69-971500188b20* id Подразделения юрлица.     |

> Пример изменения подразделения юридического лица.

```shell
curl --compressed -X PUT \
  "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch/b2e9eb47-f831-11e5-7a69-971500188b20" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -d '{
        "name": "Московский филиал (обновленный)",
        "mod__requisites__ru": {
          "kpp": "123456789"
        },
        "actualAddress": "125009, Россия, г Москва, ул Тверская, 10"
      }'
```

> Response 200 (application/json)
> Успешный запрос. Результат - JSON представление обновленного подразделения юридического лица.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch/b2e9eb47-f831-11e5-7a69-971500188b20",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organizationbranch/metadata",
    "type": "organizationbranch",
    "mediaType": "application/json"
  },
  "id": "b2e9eb47-f831-11e5-7a69-971500188b20",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
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
  "updated": "2024-06-10 13:00:00",
  "name": "Московский филиал (обновленный)",
  "description": "Подразделение в Москве",
  "code": "MSC-001",
  "externalCode": "extMSC001",
  "archived": false,
  "created": "2024-01-15 09:00:00",
  "email": "admin@moysklad.ru",
  "phone": "+79878172568",
  "fax": "333333",
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "kpp": "987654321",
  "actualAddress": "125009, Россия, г Москва, ул Тверская, 10",
  "actualAddressFull": {
    "postalCode": "125009",
    "country": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type": "country",
        "mediaType": "application/json"
      }
    },
    "region": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      }
    },
    "city": "Москва",
    "street": "ул Тверская",
    "house": "1",
    "apartment": "111",
    "addInfo": "addinfo",
    "comment": "some words about address",
    "fiasCode__ru": "53423243432"
  }
}
```
