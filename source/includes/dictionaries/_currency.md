## Валюта

Средствами JSON API можно запрашивать списки валют и сведения по отдельным валютам, а также создавать новые и обновлять сведения по уже существующим валютам. Кодом сущности для валют в составе JSON API является ключевое слово **currency**. Больше о валютах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по
[этой ссылке](https://support.moysklad.ru/hc/ru/articles/203294033-%D0%92%D0%B0%D0%BB%D1%8E%D1%82%D1%8B).
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](../#mojsklad-json-api-obschie-swedeniq-kontextnyj-poisk). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов валют на соответствие поисковой строке будет осуществлен по следующим полям:

+ по краткому наименованию Валюты **name**

##### Атрибуты Сущности

| Название           | Тип                                                       | Фильтрация                  | Описание                                                                                                                              |
| ------------------ | :-------------------------------------------------------- | :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| **archived**       | Boolean                                                   | `=` `!=`                    | Добавлена ли Валюта в архив<br>`+Обязательное при ответе`                                                                             |
| **code**           | String(255)                                               | `=` `!=` `~` `~=` `=~`      | Цифровой код Валюты<br>`+Обязательное при ответе` `+Необходимо при создании`                                                          |
| **default**        | Boolean                                                   | `=` `!=`                    | Является ли валюта валютой учета<br>`+Обязательное при ответе` `+Только для чтения`                                                   |
| **fullName**       | String(255)                                               | `=` `!=` `~` `~=` `=~`      | Полное наименование Валюты                                                                                                            |
| **id**             | UUID                                                      | `=` `!=`                    | ID Валюты<br>`+Обязательное при ответе` `+Только для чтения`                                                                          |
| **indirect**       | Boolean                                                   |                             | Признак обратного курса Валюты<br>`+Обязательное при ответе`                                                                          |
| **isoCode**        | String(255)                                               | `=` `!=` `~` `~=` `=~`      | Буквенный код Валюты<br>`+Обязательное при ответе` `+Необходимо при создании`                                                         |
| **majorUnit**      | Object                                                    |                             | Формы единиц целой части Валюты. [Подробнее тут](../dictionaries/#suschnosti-valuta-formy-edinic)<br>`+Обязательное при ответе`       |
| **margin**         | Double                                                    |                             | Наценка при автоматическом обновлении курса<br>`+Обязательное при ответе`                                                             |
| **meta**           | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                             | Метаданные Валюты<br>`+Обязательное при ответе`                                                                                       |
| **minorUnit**      | Object                                                    |                             | Формы единиц дробной части Валюты. [Подробнее тут](../dictionaries/#suschnosti-valuta-formy-edinic)<br>`+Обязательное при ответе`     |
| **multiplicity**   | Int                                                       | `=` `!=` `<` `>` `<=` `>=`  | Кратность курса Валюты<br>`+Обязательное при ответе`                                                                                  |
| **name**           | String(255)                                               | `=` `!=` `~` `~=` `=~`      | Краткое аименование Валюты<br>`+Обязательное при ответе` `+Необходимо при создании`                                                   |
| **rate**           | Double                                                    |                             | Курс Валюты<br>`+Обязательное при ответе`                                                                                             |
| **rateUpdateType** | String(255)                                               |                             | Способ обновления курса Валюты. **auto** или **manual**<br>`+Обязательное при ответе` `+Только для чтения`                            |
| **system**         | Boolean                                                   |                             | Основана ли валюта на валюте из системного справочника<br>`+Только для чтения`                                                        |

##### Формы единиц

Поля **majorUnit** и **minorUnit** содержат в себе следующие атрибуты:

| Атрибут                        | Описание                                                                                            |
| ------------------------------ | :-------------------------------------------------------------------------------------------------- |
| **gender**                     | Грамматический род единицы валюты (допустимые значения `masculine` - мужской, `feminine` - женский) |
| **s1**                         | Форма единицы, используемая при числительном 1                                                      |
| **s2**                         | Форма единицы, используемая при числительном 2                                                      |
| **s5**                         | Форма единицы, используемая при числительном 5                                                      |

В JSON API валюты в основном представлены в составе сущностей в формате [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye). Для того, чтобы раскрыть их в составе другого объекта нужно воспользоваться [параметром expand](../#mojsklad-json-api-obschie-swedeniq-zamena-ssylok-ob-ektami-s-pomosch-u-expand)

### Получить Валюты

Результат успешного запроса - JSON представление списка валют с перечисленными полями:

| Поле                           | Описание                                                                                         |
| ------------------------------ | :----------------------------------------------------------------------------------------------- |
| **meta**                       | [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) о выдаче                         |
| **context**                    | [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) о сотруднике, выполнившем запрос |
| **rows**                       | Массив JSON объектов, представляющих собой [валюты](../dictionaries/#suschnosti-valuta)          |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |


> Запрос на получение списка всех валют на данной учетной записи.

```shell
curl -X GET 
  "https://online.moysklad.ru/api/remap/1.2/entity/currency/"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Валют.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
    "type": "currency",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "http://online.moysklad.ru/app/#currency/edit?id=6314188d-2c7f-11e6-8a84-bae500000055"
      },
      "id": "6314188d-2c7f-11e6-8a84-bae500000055",
      "system": false,
      "name": "руб",
      "fullName": "Рубль",
      "rate": 1.0,
      "multiplicity": 1,
      "indirect": false,
      "rateUpdateType": "manual",
      "code": "643",
      "isoCode": "RUB",
      "majorUnit": {
        "gender": "masculine",
        "s1": "рубль",
        "s2": "рубля",
        "s5": "рублей"
      },
      "minorUnit": {
        "gender": "feminine",
        "s1": "копейка",
        "s2": "копейки",
        "s5": "копеек"
      },
      "archived": false,
      "default": true
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/dc5f76ae-2c89-11e6-8a84-bae50000003f",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "http://online.moysklad.ru/app/#currency/edit?id=dc5f76ae-2c89-11e6-8a84-bae50000003f"
      },
      "id": "dc5f76ae-2c89-11e6-8a84-bae50000003f",
      "system": true,
      "name": "доллар",
      "fullName": "Доллар США",
      "rate": 63.0,
      "multiplicity": 1,
      "indirect": false,
      "rateUpdateType": "manual",
      "code": "840",
      "isoCode": "USD",
      "majorUnit": {
        "gender": "masculine",
        "s1": "доллар",
        "s2": "доллара",
        "s5": "долларов"
      },
      "minorUnit": {
        "gender": "masculine",
        "s1": "цент",
        "s2": "цента",
        "s5": "центов"
      },
      "archived": false,
      "default": false
    }
  ]
}
```

### Создать новую Валюту

Обязательные поля для создания валюты: **name**, **code** и **isoCode**.
В теле запроса нельзя указать курс валюты (**rate**) равным нулю.

> Запрос на создание новой валюты.

```shell
curl -X POST 
  https://online.moysklad.ru/api/remap/1.2/entity/currency/
  -H "Authorization: Basic <Credentials>"
  -H 'Content-Type: application/json' 
  -d '{
  "name": "доллар",
  "rate": 63,
  "code" : "840",
  "isoCode": "USD"
}
'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Валюты.

```json
{
    "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/dc5f76ae-2c89-11e6-8a84-bae50000003f",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "http://online.moysklad.ru/app/#currency/edit?id=dc5f76ae-2c89-11e6-8a84-bae50000003f"
    },
    "id": "dc5f76ae-2c89-11e6-8a84-bae50000003f",
    "system": false,
    "name": "доллар",
    "rate": 63.0,
    "multiplicity": 1,
    "indirect": false,
    "rateUpdateType": "manual",
    "code": "840",
    "isoCode": "USD",
    "majorUnit": {
        "gender": "masculine"
    },
    "minorUnit": {
        "gender": "masculine"
    },
    "archived": false,
    "default": false
}
```

### Создать системную валюту

Системной является валюта, для которой в МоемСкладе уже есть все параметры и возможность автоматического обновления курса. 
Для добавления системной валюты необходимо указать **system**=**true** и один из параметров **code** или **isoCode**.
Дополнительно можно указать **rateUpdateType** и **margin**

> Запрос на создание системной валюты с автоматическим обновлением курса по ISO коду.

```shell
curl -X POST 
  https://online.moysklad.ru/api/remap/1.2/entity/currency/
  -H "Authorization: Basic <Credentials>"
  -H 'Content-Type: application/json' 
  -d '{
  "system": true,
  "isoCode": "EUR"
}
'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Валюты.

```json
{
  "meta" : {
    "href" : "https://online.moysklad.ru/api/remap/1.2/entity/currency/03f1855b-43d7-11ec-ac13-000400000050",
    "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
    "type" : "currency",
    "mediaType" : "application/json",
    "uuidHref" : "http://localhost/app/#currency/edit?id=03f1855b-43d7-11ec-ac13-000400000050"
  },
  "id" : "03f1855b-43d7-11ec-ac13-000400000050",
  "system" : true,
  "name" : "евро",
  "fullName" : "Евро",
  "rate" : 1.0,
  "multiplicity" : 1,
  "indirect" : false,
  "rateUpdateType" : "auto",
  "code" : "978",
  "isoCode" : "EUR",
  "majorUnit" : {
    "gender" : "masculine",
    "s1" : "евро",
    "s2" : "евро",
    "s5" : "евро"
  },
  "minorUnit" : {
    "gender" : "masculine",
    "s1" : "цент",
    "s2" : "цента",
    "s5" : "центов"
  },
  "archived" : false,
  "default" : false
}
```

> Запрос на создание системной валюты с ручным обновлением курса по цифровому коду.

```shell
curl -X POST 
  https://online.moysklad.ru/api/remap/1.2/entity/currency/
  -H "Authorization: Basic <Credentials>"
  -H 'Content-Type: application/json' 
  -d '{
  "system": true,
  "code": "978",
  "rateUpdateType": "manual"
}
'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Валюты.

```json
{
  "meta" : {
    "href" : "https://online.moysklad.ru/api/remap/1.2/entity/currency/03f1855b-43d7-11ec-ac13-000400000050",
    "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
    "type" : "currency",
    "mediaType" : "application/json",
    "uuidHref" : "http://localhost/app/#currency/edit?id=03f1855b-43d7-11ec-ac13-000400000050"
  },
  "id" : "03f1855b-43d7-11ec-ac13-000400000050",
  "system" : true,
  "name" : "евро",
  "fullName" : "Евро",
  "rate" : 1.0,
  "multiplicity" : 1,
  "indirect" : false,
  "rateUpdateType" : "manual",
  "code" : "978",
  "isoCode" : "EUR",
  "majorUnit" : {
    "gender" : "masculine",
    "s1" : "евро",
    "s2" : "евро",
    "s5" : "евро"
  },
  "minorUnit" : {
    "gender" : "masculine",
    "s1" : "цент",
    "s2" : "цента",
    "s5" : "центов"
  },
  "archived" : false,
  "default" : false
}
```

### Массовое создание и обновление Валют
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Валют.
В теле запроса нужно передать массив, содержащий JSON представления Валют, которые вы хотите создать или обновить.
Обновляемые Валюты должны содержать идентификатор в виде метаданных.

> Массовое создание и обновление Валют

```shell
curl -X POST
  https://online.moysklad.ru/api/remap/1.2/entity/currency/
  -H "Authorization: Basic <Credentials>"
  -H 'Content-Type: application/json'
  -d '[
  {
    "name": "доллар",
    "rate": 63,
    "code" : "840",
    "isoCode": "USD"
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/dc5f76ae-2c89-11e6-8a84-bae50000003f",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
      "type": "currency",
      "mediaType": "application/json"
    },
    "name": "долл",
    "rate": 66,
    "code" : "dollarusd",
    "isoCode": "USD"
  }
]
'
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Валют.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/dc5f76ae-2c89-11e6-8a84-bae50000003f",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
      "type": "currency",
      "mediaType": "application/json",
      "uuidHref": "http://online.moysklad.ru/app/#currency/edit?id=dc5f76ae-2c89-11e6-8a84-bae50000003f"
    },
    "id": "dc5f76ae-2c89-11e6-8a84-bae50000003f",
    "system": false,
    "name": "доллар",
    "rate": 63.0,
    "multiplicity": 1,
    "indirect": false,
    "rateUpdateType": "manual",
    "code": "840",
    "isoCode": "USD",
    "majorUnit": {
      "gender": "masculine"
    },
    "minorUnit": {
      "gender": "masculine"
    },
    "archived": false,
    "default": false
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/dc5f76ae-2c89-11e6-8a84-bae50000003f",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
      "type": "currency",
      "mediaType": "application/json",
      "uuidHref": "http://online.moysklad.ru/app/#currency/edit?id=dc5f76ae-2c89-11e6-8a84-bae50000003f"
    },
    "id": "dc5f76ae-2c89-11e6-8a84-bae50000003f",
    "system": false,
    "name": "долл",
    "rate": 66.0,
    "multiplicity": 1,
    "indirect": false,
    "rateUpdateType": "manual",
    "code": "dollarusd",
    "isoCode": "USD",
    "majorUnit": {
      "gender": "masculine"
    },
    "minorUnit": {
      "gender": "masculine"
    },
    "archived": false,
    "default": false
  }
]
```

### Удалить Валюту
Запрос на удаление Валюты с указанным id. Валюту учета удалить нельзя.

**Параметры**

| Параметр | Описание                                                                        |
| -------- | ------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* - id Валюты |

> Запрос на удаление Валюты

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/currency/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Валюты

### Массовое удаление Валют

В теле запроса нужно передать массив, содержащий JSON метаданных Валют, которые вы хотите удалить.


> Запрос на массовое удаление Валют

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/currency/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Валют.

```json
[
  {
    "info":"Сущность 'currency' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'currency' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
```

### Валюта
#### Получить Валюту

**Параметры**

| Параметр | Описание                                                                        |
| -------- | ------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* - id Валюты |

> Получить Валюту

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/currency/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление запрошенной Валюты.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
    "type": "currency",
    "mediaType": "application/json",
    "uuidHref": "http://online.moysklad.ru/app/#currency/edit?id=6314188d-2c7f-11e6-8a84-bae500000055"
  },
  "id": "6314188d-2c7f-11e6-8a84-bae500000055",
  "system": false,
  "name": "руб",
  "fullName": "Рубль",
  "rate": 1.0,
  "multiplicity": 1,
  "indirect": false,
  "rateUpdateType": "manual",
  "code": "643",
  "isoCode": "RUB",
  "majorUnit": {
    "gender": "masculine",
    "s1": "рубль",
    "s2": "рубля",
    "s5": "рублей"
  },
  "minorUnit": {
    "gender": "feminine",
    "s1": "копейка",
    "s2": "копейки",
    "s5": "копеек"
  },
  "archived": false,
  "default": true
}
```

### Изменить Валюту
Запрос на обновление существующей валюты.
В теле запроса нельзя указать курс валюты (**rate**) равным нулю,
 а также пустые поля **name**, **code**, **isoCode**.
Нельзя изменять значения полей **name**, **fullName**, **code**, **isoCode**, **majorUnit**, **minorUnit**
для валют, основанных на системном справочнике валют. Нельзя изменять курс валюты учета. Нельзя изменить курс валюты с автоматическим обновлением.

**Параметры**

| Параметр | Описание                                                                        |
| -------- | ------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* - id Валюты |

> Изменить Валюту

```shell
curl -X PUT
  "https://online.moysklad.ru/api/remap/1.2/entity/currency/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -d '{
  "name": "долл",
  "rate": 66,
  "code" : "dollarusd",
  "isoCode": "USD"
}'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Валюты.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/dc5f76ae-2c89-11e6-8a84-bae50000003f",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
    "type": "currency",
    "mediaType": "application/json",
    "uuidHref": "http://online.moysklad.ru/app/#currency/edit?id=dc5f76ae-2c89-11e6-8a84-bae50000003f"
  },
  "id": "dc5f76ae-2c89-11e6-8a84-bae50000003f",
  "system": false,
  "name": "долл",
  "rate": 66.0,
  "multiplicity": 1,
  "indirect": false,
  "rateUpdateType": "manual",
  "code": "dollarusd",
  "isoCode": "USD",
  "majorUnit": {
    "gender": "masculine"
  },
  "minorUnit": {
    "gender": "masculine"
  },
  "archived": false,
  "default": false
}
```
