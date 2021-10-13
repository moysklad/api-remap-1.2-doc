## Статусы документов

Статусы можно добавлять, изменять и удалять через api

### Статусы 
#### Атрибуты сущности

| Название       | Тип                                                       | Описание                                                                                                                       |
| -------------- | :-------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| **accountId**  | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                           |
| **color**      | String(255)                                               | Цвет Статуса<br>`+Обязательное при ответе` `+Необходимо при создании`                                                          |
| **entityType** | String(255)                                               | Тип сущности, к которой относится Статус (ключевое слово в рамках JSON API)<br>`+Обязательное при ответе` `+Только для чтения` |
| **id**         | UUID                                                      | ID Статуса<br>`+Обязательное при ответе` `+Только для чтения`                                                                  |
| **meta**       | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Статуса<br>`+Обязательное при ответе` `+Только для чтения`                                                          |
| **name**       | String(255)                                               | Наименование Статуса<br>`+Обязательное при ответе` `+Необходимо при создании`                                                  |
| **stateType**  | Enum                                                      | Тип Статуса<br>`+Обязательное при ответе` `+Необходимо при создании`                                                           |

##### Тип статуса
| Название     | Описание                        |
| :----------- | :------------------------------ |
| Regular      | Обычный (значение по умолчанию) |
| Successful   | Финальный положительный         |
| Unsuccessful | Финальный отрицательный         |


Поле **color** передается в АПИ как целое число состоящее из 4х байт.
Т.к. цвет передается в цветовом пространстве ARGB, каждый байт отвечает за свой
цвет соответственно: 1 - за прозрачность, 2 - за красный цвет, 3 - за зеленый,
4 - за синий. Каждый байт принимает значения от 0 до 255 как и цвет в каждом из
каналов цветового пространства. Получившееся в итоге из 4 записанных последовательно байт
число, переведенное в 10-чную систему счисления и является представлением цвета статуса в JSON API.

Пример: цвету `rgb(162, 198, 23)` будет соответствовать следующее значение поля `"color": 10667543`.

Посмотреть списки существующих статусов можно в контексте метаданных
документа, например сделав GET запрос по URL http://online.moysklad.ru/api/remap/1.2/entity/demand/metadata
Список статусов для документа `demand`(Отгрузка) будет выведен в коллекции states.

### Получить метаданные

**Параметры**

| Параметр       | Описание                                                  |
| :------------- | :-------------------------------------------------------- |
| **entityType** | `string` (required) *Example: counterparty* тип сущности. |

> Получить метаданные и в том числе статусы

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty",
    "mediaType": "application/json"
  },
  "states": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/4f70c518-60a1-11e7-6adb-ede500000003",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "4f70c518-60a1-11e7-6adb-ede500000003",
      "accountId": "0af94520-54f7-11e7-6adb-ede500000001",
      "name": "Новый",
      "color": 15106326,
      "stateType": "Regular",
      "entityType": "counterparty"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/3b6eb61a-60c5-11e7-6adb-ede500000001",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "3b6eb61a-60c5-11e7-6adb-ede500000001",
      "accountId": "0af94520-54f7-11e7-6adb-ede500000001",
      "name": "Подписан договор",
      "color": 10667543,
      "stateType": "Successful",
      "entityType": "counterparty"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/3b6fd06a-60c5-11e7-6adb-ede500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "3b6fd06a-60c5-11e7-6adb-ede500000002",
      "accountId": "0af94520-54f7-11e7-6adb-ede500000001",
      "name": "Отклонен",
      "color": 10774205,
      "stateType": "Unsuccessful",
      "entityType": "counterparty"
    }
  ],
  "createShared": false
}
```

### Создать статус 
Создать новый статус.
#### Описание
Статус создается на основе переданного объекта JSON,
который содержит представление нового Статуса.
Результат - JSON представление созданного Статуса. Для создания нового Статуса,
необходимо и достаточно указать в переданном объекте не пустые поля `name`, `color`, `stateType`.

**Параметры**

| Параметр       | Описание                                                  |
| :------------- | :-------------------------------------------------------- |
| **entityType** | `string` (required) *Example: counterparty* тип сущности. |

> Создание одного статуса.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Одобрено",
            "color": 69446,
            "stateType": "Regular"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Статуса.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/6262b270-60c3-11e7-6adb-ede50000000d",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
    "type": "state",
    "mediaType": "application/json"
  },
  "id": "6262b270-60c3-11e7-6adb-ede50000000d",
  "accountId": "0af94520-54f7-11e7-6adb-ede500000001",
  "name": "Одобрено",
  "color": 69446,
  "stateType": "Regular",
  "entityType": "counterparty"
}
```

### Изменить статус 
Изменить существующий статус.

#### Описание
Статус меняется на основе переданного объекта JSON.
Результат - JSON представление обновленного или созданного Статуса.
Для обновления Статуса, необходимо  указать в переданном объекте
одно или несколько полей с новыми значениями: `name`, `color`, `stateType`.

**Параметры**

| Параметр       | Описание                                                                        |
| :------------- | :------------------------------------------------------------------------------ |
| **entityType** | `string` (required) *Example: counterparty* тип сущности.                       |
| **id**         | `string` (required) *Example: 4dcb3f23-60c4-11e7-6adb-ede500000019* id Статуса. |

> Изменение статуса.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/4dcb3f23-60c4-11e7-6adb-ede500000019"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "color": 255,
            "stateType": "Regular"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление измененного Статуса.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/6262b270-60c3-11e7-6adb-ede50000000d",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
    "type": "state",
    "mediaType": "application/json"
  },
  "id": "6262b270-60c3-11e7-6adb-ede50000000d",
  "accountId": "0af94520-54f7-11e7-6adb-ede500000001",
  "name": "Одобрено",
  "color": 255,
  "stateType": "Regular",
  "entityType": "counterparty"
}
```

### Массовое создание и обновление Статусов 
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Статусов.
В теле запроса нужно передать массив, содержащий JSON представления Статусов, которые вы хотите создать или обновить.
Обновляемые Статусы должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Статусов

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/metadata/states"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "На рассмотрении",
              "color": 8767198,
              "stateType": "Regular"
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/b56215dc-60c3-11e7-6adb-ede500000013",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "state",
                "mediaType": "application/json"
              },
              "name": "На подписании",
              "color": 34617,
              "stateType": "Regular"
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Статусов.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/b55d2ddf-60c3-11e7-6adb-ede500000010",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "state",
      "mediaType": "application/json"
    },
    "id": "b55d2ddf-60c3-11e7-6adb-ede500000010",
    "accountId": "0af94520-54f7-11e7-6adb-ede500000001",
    "name": "На рассмотрении",
    "color": 8767198,
    "stateType": "Regular",
    "entityType": "counterparty"
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/b56215dc-60c3-11e7-6adb-ede500000013",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "state",
      "mediaType": "application/json"
    },
    "id": "b56215dc-60c3-11e7-6adb-ede500000013",
    "accountId": "0af94520-54f7-11e7-6adb-ede500000001",
    "name": "На подписании",
    "color": 34617,
    "stateType": "Regular",
    "entityType": "counterparty"
  }
]
```

### Удалить Статус

**Параметры**

| Параметр       | Описание                                                                        |
| :------------- | :------------------------------------------------------------------------------ |
| **entityType** | `string` (required) *Example: counterparty* тип сущности.                       |
| **id**         | `string` (required) *Example: 4dcb3f23-60c4-11e7-6adb-ede500000019* id Статуса. |

> Запрос на удаление Статуса с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/4dcb3f23-60c4-11e7-6adb-ede500000019"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Статуса.
