## Канал продаж
### Каналы продаж
Средствами JSON API можно создавать и обновлять сведения о Каналах продаж, запрашивать списки Каналов продаж и сведения по отдельным Каналам продаж. Кодом сущности для Канала продаж в составе JSON API является ключевое слово **saleschannel**. Больше о Каналах продаж и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/4403265549585).
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](../#mojsklad-json-api-obschie-swedeniq-kontextnyj-poisk). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов канала продаж на соответствие поисковой строке будет осуществлен по следующим полям:

+ по наименованию Канала продаж **name**
+ по описанию Канала продаж **description**

#### Атрибуты сущности
| Название         | Тип                                                       | Фильтрация                  | Описание                                                                                                                                                                |
| ---------------- | :-------------------------------------------------------- | :-------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **accountId**    | UUID                                                      | `=` `!=`                    | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                    |
| **archived**     | Boolean                                                   | `=` `!=`                    | Добавлен ли Канал продаж в архив<br>`+Обязательное при ответе`                                                                                                          |
| **code**         | String(255)                                               | `=` `!=` `~` `~=` `=~`      | Код Канала продаж                                                                                                                                                       |
| **description**  | String(4096)                                              | `=` `!=` `~` `~=` `=~`      | Описание Канала продаж                                                                                                                                                  |
| **externalCode** | String(255)                                               | `=` `!=` `~` `~=` `=~`      | Внешний код Канала продаж<br>`+Обязательное при ответе`                                                                                                                 |
| **group**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                    | Метаданные отдела сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                                    |
| **id**           | UUID                                                      | `=` `!=`                    | ID Канала продаж<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                     |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                             | Метаданные Канала продаж<br>`+Обязательное при ответе`                                                                                                                  |
| **name**         | String(255)                                               | `=` `!=` `~` `~=` `=~`      | Наименование Канала продаж<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                                     |
| **owner**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                    | Метаданные владельца (Сотрудника)<br>`+Expand`                                                                                                                          |
| **shared**       | Boolean                                                   | `=` `!=`                    | Общий доступ<br>`+Обязательное при ответе`                                                                                                                              |
| **type**         | Enum                                                      | `=` `!=`                    | Тип Канала продаж [Подробнее тут](../dictionaries/#suschnosti-kanal-prodazh-kanaly-prodazh-tip-kanala-prodazh)<br>`+Обязательное при ответе` `+Необходимо при создании` |
| **updated**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`  | Момент последнего обновления сущности<br>`+Обязательное при ответе` `+Только для чтения`                                                                                |

#### Тип канала продаж
Перечисление значений, представляющих тип Канала продаж:

| Название                       | Описание                                                                        |
| ------------------------------ | :------------------------------------------------------------------------------ |
| **MESSENGER**                  | Мессенджер                                                                      |
| **SOCIAL_NETWORK**             | Социальная сеть                                                                 |
| **MARKETPLACE**                | Маркетплейс                                                                     |
| **ECOMMERCE**                  | Интернет-магазин                                                                |
| **CLASSIFIED_ADS**             | Доска объявлений                                                                |
| **DIRECT_SALES**               | Прямые продажи                                                                  |
| **OTHER**                      | Другое                                                                          |

#### Атрибуты доступные для фильтрации

| Значение                       | Описание                                                             |
| ------------------------------ | :------------------------------------------------------------------- |
| **accountId**                  | ID учетной записи                                                    |
| **archived**                   | Добавлен ли Канал продаж в архив                                     |
| **description**                | Описание Канала продаж                                               |
| **externalCode**               | Внешний код Канала продаж                                            |
| **group**                      | Отдел сотрудника                                                     |
| **id**                         | ID Канала продаж                                                     |
| **name**                       | Наименование Канала продаж                                           |
| **owner**                      | Ссылка на Владельца (Сотрудника)                                     |
| **shared**                     | Общий доступ                                                         |
| **type**                       | Тип Канала продаж                                                    |
| **updated**                    | Момент последнего обновления сущности                                |


### Получить Каналы продаж
Запрос на получение списка всех каналов продаж на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                  |
| ----------- | :-------------------------------------------------------- | :-------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                      |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.              |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой каналы продаж. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить Каналы продаж

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/saleschannel"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка каналов продаж.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/metadata",
    "type": "saleschannel",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/51f263f9-0307-11e6-9464-e4de0000007c",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/metadata",
        "type": "saleschannel",
        "mediaType": "application/json"
      },
      "id": "51f263f9-0307-11e6-9464-e4de0000007c",
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
      "updated": "2021-04-15 15:41:05",
      "name": "Магазин на Тверской",
      "description": "Прямые продажи, без предзаказа",
      "type": "DIRECT_SALES",
      "externalCode": "HZV7dGc8iAnf0aNjrvQvN0",
      "archived": false
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/8477d916-0aef-11e6-9464-e4de00000103",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/metadata",
        "type": "saleschannel",
        "mediaType": "application/json"
      },
      "id": "8477d916-0aef-11e6-9464-e4de00000103",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2021-04-25 17:10:51",
      "name": "Заказы из ИМ",
      "type": "ECOMMERCE",
      "externalCode": "lv7MmPK4jvaqq-nA3g3NL2",
      "archived": false
    }
  ]
}
```

### Создать Канал продаж
Запрос на создание нового канала продаж. Необходимыми полями в теле запроса
для создания канала продаж являются **name** и **type**.

> Пример запроса на создание нового канала продаж.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/saleschannel"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Телефонный звонок",
            "description": "Позвонить клиенту",
            "type": "OTHER"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного канала продаж.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/53d1ff92-202b-11ec-0a82-050800000007",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/metadata",
    "type": "saleschannel",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#saleschannel/edit?id=53d1ff92-202b-11ec-0a82-050800000007"
  },
  "id": "53d1ff92-202b-11ec-0a82-050800000007",
  "accountId": "4fcbb42c-1d41-11ec-0a82-06530000009e",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/4fe1932a-1d41-11ec-0a81-04b600001980",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=4fe1932a-1d41-11ec-0a81-04b600001980"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/4fcbe1f2-1d41-11ec-0a82-06530000009f",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2021-09-28 10:11:40.322",
  "name": "Телефонный звонок",
  "description":"Позвонить клиенту",
  "type":"OTHER",
  "externalCode": "mZ9phAmxjBs5OgEvelcw20",
  "archived": false
}
```


### Массовое создание и обновление Каналов продаж
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Каналов продаж.
В теле запроса нужно передать массив, содержащий JSON представления Каналов продаж, которые вы хотите создать или обновить.
Обновляемые Каналы продаж должны содержать идентификатор в виде метаданных. Для Каналов продаж, созданных при подключении интернет-магазина, нельзя обновить тип. При изменении наименования таких каналов продаж наименование связанного интернет-магазина изменится.

> Пример создания и обновления нескольких Каналов продаж

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/saleschannel"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "name":"Акция",
              "description":"Создание канала продаж",
              "type":"OTHER"
            },
            {
              "meta":{
                "href":"https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/da7a89fd-202b-11ec-0a82-05080000000a",
                "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/metadata",
                "type":"saleschannel",
                "mediaType":"application/json"
              },
              "description":"Обновление описания канала продаж"
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Каналов продаж.

```json
[
  {
    "meta":{
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/286e7bd0-2032-11ec-9621-0242ac130002",
      "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/metadata",
      "type":"saleschannel",
      "mediaType":"application/json",
      "uuidHref":"https://online.moysklad.ru/app/#saleschannel/edit?id=286e7bd0-2032-11ec-9621-0242ac130002"
    },
    "id":"286e7bd0-2032-11ec-9621-0242ac130002",
    "accountId":"4fcbb42c-1d41-11ec-0a82-06530000009e",
    "owner":{
      "meta":{
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/employee/6c771d3c-2032-11ec-9621-0242ac130002",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type":"employee",
        "mediaType":"application/json",
        "uuidHref":"https://online.moysklad.ru/app/#employee/edit?id=6c771d3c-2032-11ec-9621-0242ac130002"
      }
    },
    "shared":true,
    "group":{
      "meta":{
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/group/537bb8ec-2032-11ec-9621-0242ac130002",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type":"group",
        "mediaType":"application/json"
      }
    },
    "updated":"2021-09-28 10:49:04.228",
    "name":"Акция",
    "description":"Создание канала продаж",
    "type":"OTHER",
    "externalCode":"814fhsaf124",
    "archived":false
  },
  {
    "meta":{
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/5ca09f14-2032-11ec-9621-0242ac130002",
      "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/metadata",
      "type":"saleschannel",
      "mediaType":"application/json",
      "uuidHref":"https://online.moysklad.ru/app/#saleschannel/edit?id=5ca09f14-2032-11ec-9621-0242ac130002"
    },
    "id":"5ca09f14-2032-11ec-9621-0242ac130002",
    "accountId":"4fcbb42c-1d41-11ec-0a82-06530000009e",
    "owner":{
      "meta":{
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/employee/6c771d3c-2032-11ec-9621-0242ac130002",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type":"employee",
        "mediaType":"application/json",
        "uuidHref":"https://online.moysklad.ru/app/#employee/edit?id=6c771d3c-2032-11ec-9621-0242ac130002"
      }
    },
    "shared":true,
    "group":{
      "meta":{
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/group/537bb8ec-2032-11ec-9621-0242ac130002",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type":"group",
        "mediaType":"application/json"
      }
    },
    "updated":"2021-09-28 10:49:04.313",
    "name":"Звонок",
    "description":"Обновление описания канала продаж",
    "type":"DIRECT_SALES",
    "externalCode":"df2DGFSG44",
    "archived":false
  }
]
```

### Удалить Канал продаж

**Параметры**

| Параметр | Описание                                                                              |
| :------- | :------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: d94605a8-2033-11ec-9621-0242ac130002* id Канала продаж. |

> Запрос на удаление Канала продаж с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/d94605a8-2033-11ec-9621-0242ac130002"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Канала продаж.

### Массовое удаление Каналов продаж

В теле запроса нужно передать массив, содержащий JSON метаданных Каналов продаж, которые вы хотите удалить.


> Запрос на массовое удаление Каналов продаж.

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta":{
            "href":"https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/fe8188dc-2034-11ec-9621-0242ac130002",
            "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/metadata",
            "type":"saleschannel",
            "mediaType":"application/json"
          }
        },
        {
          "meta":{
            "href":"https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/0657ff6e-2035-11ec-9621-0242ac130002",
            "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/metadata",
            "type":"saleschannel",
            "mediaType":"application/json"
          }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Каналов продаж.

```json
[
  {
    "info":"Сущность 'saleschannel' с UUID: fe8188dc-2034-11ec-9621-0242ac130002 успешно удалена"
  },
  {
    "info":"Сущность 'saleschannel' с UUID: 0657ff6e-2035-11ec-9621-0242ac130002 успешно удалена"
  }
]
```

### Канал продаж

**Параметры**

| Параметр | Описание                                                                              |
| :------- | :------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: d94605a8-2033-11ec-9621-0242ac130002* id Канала продаж. |

### Получить Канал продаж
> Запрос на получение отдельного канала продаж с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/d94605a8-2033-11ec-9621-0242ac130002"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление канала продаж.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/08624a82-2038-11ec-9621-0242ac130002",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/metadata",
    "type": "saleschannel",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#saleschannel/edit?id=08624a82-2038-11ec-9621-0242ac130002"
  },
  "id": "08624a82-2038-11ec-9621-0242ac130002",
  "accountId": "4fcbb42c-1d41-11ec-0a82-06530000009e",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/4fe1932a-1d41-11ec-0a81-04b600001980",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=4fe1932a-1d41-11ec-0a81-04b600001980"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/4fcbe1f2-1d41-11ec-0a82-06530000009f",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2021-09-28 10:49:04.228",
  "name": "Продажа в магазине",
  "type": "DIRECT_SALES",
  "externalCode": "814fhsafiwb124",
  "archived": false
}
```

### Изменить Канал продаж
Запрос на изменение объекта Канала продаж. Для Каналов продаж, которые были созданы при подключении интернет-магазина, нельзя изменить тип. Если изменить наименование такого Канала продаж, то будет изменено наименование связанного интернет-магазина.

**Параметры**

| Параметр | Описание                                                                              |
| :------- | :------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: b2dc42f0-203e-11ec-9621-0242ac130002* id Канала продаж. |

> Пример запроса на обновление существующего канала продаж.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/b2dc42f0-203e-11ec-9621-0242ac130002"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Обмен по CommerceML"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного канала продаж.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/08624a82-2038-11ec-9621-0242ac130002",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/metadata",
    "type": "saleschannel",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#saleschannel/edit?id=08624a82-2038-11ec-9621-0242ac130002"
  },
  "id": "08624a82-2038-11ec-9621-0242ac130002",
  "accountId": "4fcbb42c-1d41-11ec-0a82-06530000009e",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/4fe1932a-1d41-11ec-0a81-04b600001980",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=4fe1932a-1d41-11ec-0a81-04b600001980"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/4fcbe1f2-1d41-11ec-0a82-06530000009f",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2021-09-28 10:49:04.228",
  "name": "Обмен по CommerceML",
  "type": "ECOMMERCE",
  "externalCode": "814fhsafiwb124",
  "archived": false
}
```
