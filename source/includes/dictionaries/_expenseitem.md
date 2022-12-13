## Статья расходов
### Статьи расходов 
Средствами JSON API можно запрашивать списки Статей расходов и сведения по отдельным Статьям расходов. Кодом сущности для Статей расходов в составе JSON API является ключевое слово **expenseitem**. Больше о Статьях расходов и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по
[этой ссылке](https://support.moysklad.ru/hc/ru/articles/203325553-%D0%9F%D1%80%D0%B8%D0%B1%D1%8B%D0%BB%D0%B8-%D0%B8-%D1%83%D0%B1%D1%8B%D1%82%D0%BA%D0%B8).
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](../#mojsklad-json-api-obschie-swedeniq-kontextnyj-poisk). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов Статей расходов на соответствие поисковой строке будет осуществлен по следующим полям:

+ по наименованию Cтатьи расходов **name**
+ по описанию Cтатьи расходов **description**

#### Атрибуты сущности
| Название         | Тип                                                       | Фильтрация                  | Описание                                                                                 |
| ---------------- | :-------------------------------------------------------- | :-------------------------- | :--------------------------------------------------------------------------------------- |
| **accountId**    | UUID                                                      | `=` `!=`                    | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                     |
| **code**         | String(255)                                               | `=` `!=` `~` `~=` `=~`      | Код Статьи расходов                                                                      |
| **description**  | String(4096)                                              | `=` `!=` `~` `~=` `=~`      | Описание Статьи расходов                                                                 |
| **externalCode** | String(255)                                               | `=` `!=` `~` `~=` `=~`      | Внешний код Статьи расходов<br>`+Обязательное при ответе`                                |
| **id**           | UUID                                                      | `=` `!=`                    | ID Страны<br>`+Обязательное при ответе` `+Только для чтения`                             |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                             | Метаданные о Статье расходов<br>`+Обязательное при ответе`                               |
| **name**         | String(255)                                               | `=` `!=` `~` `~=` `=~`      | Наименование Статьи расходов<br>`+Обязательное при ответе` `+Необходимо при создании`    |
| **updated**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`  | Момент последнего обновления сущности<br>`+Обязательное при ответе` `+Только для чтения` |

### Получить Статьи расходов

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
 
> Запрос на получение списка статей расходов.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Статей расходов.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
    "type": "expenseitem",
    "mediaType": "application/json",
    "size": 8,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/1be2350e-0479-11e5-b03a-448a5b426e7e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
        "type": "expenseitem",
        "mediaType": "application/json"
      },
      "id": "1be2350e-0479-11e5-b03a-448a5b426e7e",
      "updated": "2015-05-27 17:03:10",
      "name": "Закупка товаров",
      "description": "Расходы на закупку товаров учитываются в отчете «Прибыли и убытки» как себестоимость проданных товаров",
      "code": "1",
      "externalCode": "1"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/1be2395a-0479-11e5-baee-448a5b426e7e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
        "type": "expenseitem",
        "mediaType": "application/json"
      },
      "id": "1be2395a-0479-11e5-baee-448a5b426e7e",
      "updated": "2015-05-27 17:03:10",
      "name": "Возврат",
      "description": "Расходы по возвратам не учитываются в отчете «Прибыли и убытки»",
      "code": "3",
      "externalCode": "3"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/1be23a18-0479-11e5-a260-448a5b426e7e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
        "type": "expenseitem",
        "mediaType": "application/json"
      },
      "id": "1be23a18-0479-11e5-a260-448a5b426e7e",
      "updated": "2015-05-27 17:03:10",
      "name": "Налоги и сборы",
      "description": "Расходы по налогам и сборам учитываются как отдельная статья, не включенная в операционные расходы",
      "code": "2",
      "externalCode": "2"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/23f05a1e-0479-11e5-8bb9-448a5b426e7e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
        "type": "expenseitem",
        "mediaType": "application/json"
      },
      "id": "23f05a1e-0479-11e5-8bb9-448a5b426e7e",
      "updated": "2015-05-27 17:03:24",
      "name": "Списания",
      "description": "Списания",
      "code": "4",
      "externalCode": "4"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/82031d62-2e58-11e6-ab5c-d8cb8a84bae5",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
        "type": "expenseitem",
        "mediaType": "application/json"
      },
      "id": "82031d62-2e58-11e6-ab5c-d8cb8a84bae5",
      "updated": "2016-06-09 18:40:35",
      "name": "Перемещение",
      "description": "Перемещения денег между кассами не учитываются в отчете «Прибыли и убытки».",
      "code": "5",
      "externalCode": "5"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/fb0a4b75-2e58-11e6-8a84-bae500000058",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
        "type": "expenseitem",
        "mediaType": "application/json"
      },
      "id": "fb0a4b75-2e58-11e6-8a84-bae500000058",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "updated": "2016-06-09 18:43:58",
      "name": "Аренда",
      "description": "Аренда",
      "code": "Аренда",
      "externalCode": "IVslr34uhCUuglxPD7Idm0"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/fb0c8620-2e58-11e6-8a84-bae500000059",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
        "type": "expenseitem",
        "mediaType": "application/json"
      },
      "id": "fb0c8620-2e58-11e6-8a84-bae500000059",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "updated": "2016-06-09 18:43:58",
      "name": "Зарплата",
      "description": "Зарплата",
      "code": "Зарплата",
      "externalCode": "RY7G3TULiTyjqYRrzr3V03"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/fb0dc966-2e58-11e6-8a84-bae50000005a",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
        "type": "expenseitem",
        "mediaType": "application/json"
      },
      "id": "fb0dc966-2e58-11e6-8a84-bae50000005a",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "updated": "2016-06-09 18:43:58",
      "name": "Маркетинг и реклама",
      "description": "Маркетинг и реклама",
      "code": "Маркетинг и реклама",
      "externalCode": "1PMtKJq-jjVJQbu5OWqBG1"
    }
  ]
}

```

### Создать Статью расходов 
Запрос на создание новой статьи расходов. Обязательное поле для создание статьи расходов - **name**.

> Пример запроса на создание новой статьи расходов.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Налоги и не налоги",
            "description": "Статья расходов налоги",
            "code": "nalogi",
            "externalCode": "wwoaon21431"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной статьи расходов.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/76e88dff-3f9b-11e6-8a84-bae50000009b",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
    "type": "expenseitem",
    "mediaType": "application/json"
  },
  "id": "76e88dff-3f9b-11e6-8a84-bae50000009b",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "updated": "2016-07-01 17:52:42",
  "name": "Налоги и не налоги",
  "description": "Статья расходов налоги",
  "code": "nalogi",
  "externalCode": "wwoaon21431"
}
```

### Массовое создание и обновление Статей расходов 
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Статей расходов.
В теле запроса нужно передать массив, содержащий JSON представления Статей расходов, которые вы хотите создать или обновить.
Обновляемые Статьи расходов должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Статей расходов

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "Налоги и не налоги",
              "description": "Статья расходов налоги",
              "code": "nalogi",
              "externalCode": "wwoaon21431"
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/7944ef04-f831-11e5-7a69-971500188b19",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
                "type": "expenseitem",
                "mediaType": "application/json"
              },
              "name": "Дополнительные расходы",
              "description": "Еще дополнительные расходы",
              "code": "additional",
              "externalCode": "sdeEfr32rfe"
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Статей расходов.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/76e88dff-3f9b-11e6-8a84-bae50000009b",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
      "type": "expenseitem",
      "mediaType": "application/json"
    },
    "id": "76e88dff-3f9b-11e6-8a84-bae50000009b",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "updated": "2016-07-01 17:52:42",
    "name": "Налоги и не налоги",
    "description": "Статья расходов налоги",
    "code": "nalogi",
    "externalCode": "wwoaon21431"
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/7944ef04-f831-11e5-7a69-971500188b19",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
      "type": "expenseitem",
      "mediaType": "application/json"
    },
    "id": "7944ef04-f831-11e5-7a69-971500188b19",
    "accountId": "7944ef04-f831-11e5-7a69-971500188b19",
    "updated": "2016-07-01 17:52:42",
    "name": "Дополнительные расходы",
    "description": "Еще дополнительные расходы",
    "code": "additional",
    "externalCode": "sdeEfr32rfe"
  }
]
```

### Удалить Статью расходов

**Параметры**

| Параметр | Описание                                                                                |
| :------- | :-------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Статьи расходов. |

> Запрос на удаление Статьи расходов с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление статьи расходов.

### Массовое удаление Статей расходов

В теле запроса нужно передать массив, содержащий JSON метаданных Статей расходов, которые вы хотите удалить.


> Запрос на массовое удаление Статей расходов. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
            "type": "expenseitem",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
            "type": "expenseitem",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Статей расходов.

```json
[
  {
    "info":"Сущность 'expenseitem' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'expenseitem' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
```

### Статья расходов 

Работа со статьей расходов с указанным id.

### Получить Статью расходов 

**Параметры**

| Параметр | Описание                                                                                |
| :------- | :-------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Статьи расходов. |


> Запрос на получение статьи расходов с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Статей расходов.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/fb0a4b75-2e58-11e6-8a84-bae500000058",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
    "type": "expenseitem",
    "mediaType": "application/json"
  },
  "id": "fb0a4b75-2e58-11e6-8a84-bae500000058",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "updated": "2016-06-09 18:43:58",
  "name": "Аренда",
  "description": "Аренда",
  "code": "Аренда",
  "externalCode": "IVslr34uhCUuglxPD7Idm0"
}
```
        
### Изменить Статью расходов 
Запрос на изменение существующей статьи расходов.
 
**Параметры**

| Параметр | Описание                                                                                |
| :------- | :-------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Статьи расходов. |
 
> Пример запроса на обновление статьи расходов.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Не налоги и налоги",
            "description": "Налоги и не налоги. Такая вот статья",
            "code": "nalogi i net",
            "externalCode": "wwoa1142aon21431"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной статьи расходов.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/76e88dff-3f9b-11e6-8a84-bae50000009b",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/expenseitem/metadata",
    "type": "expenseitem",
    "mediaType": "application/json"
  },
  "id": "76e88dff-3f9b-11e6-8a84-bae50000009b",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "updated": "2016-07-01 17:52:42",
  "name": "Не налоги и налоги",
  "description": "Налоги и не налоги. Такая вот статья",
  "code": "nalogi i net",
  "externalCode": "wwoa1142aon21431"
}
```
