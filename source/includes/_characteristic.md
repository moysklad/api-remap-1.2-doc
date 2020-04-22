## Характеристики модификаций

С помощью json api можно добавлять новые Характеристики модификаций 

### Характеристики 
#### Атрибуты сущности
+ **meta** - [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) о Характеристике `Только для чтения`
+ **id** - ID в формате UUID `Только для чтения`
+ **name** - Наименование Характеристики `Необходимое`

Посмотреть списки существующих характеристик можно в контексте метаданных
модификаций, например сделав GET запрос по URL http://online.moysklad.ru/api/remap/1.2/entity/variant/metadata или http://online.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristic
Список характеристик модификаций будет выведен в коллекции characteristic.

### Получить метаданные

> Получить метаданные и в том числе Характеристики

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant",
    "mediaType": "application/json"
  },
  "characteristic": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristic/4f70c518-60a1-11e7-6adb-ede500000003",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "4f70c518-60a1-11e7-6adb-ede500000003",
      "name": "Размер"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristic/3b6eb61a-60c5-11e7-6adb-ede500000001",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "3b6eb61a-60c5-11e7-6adb-ede500000001",
      "name": "Цвет"
    }
  ]
}
```

### Создать характеристику 
Создать новую характеристику.
#### Описание
Характеристика создается на основе переданного объекта JSON,
который содержит представление новой Характеристики.
Результат - JSON представление созданной Характеристики. Для создания новой Характеристики,
необходимо и достаточно указать в переданном объекте непустое поле `name`.

> Создание одной характеристики.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristic"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Размер"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Характеристики.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristic/6262b270-60c3-11e7-6adb-ede50000000d",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "6262b270-60c3-11e7-6adb-ede50000000d",
  "name": "Размер"
}
```

### Массовое создание Характеристик 
[Массовое создание](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Характеристик.
В теле запроса нужно передать массив, содержащий JSON представления Характеристик, которые вы хотите создать.

> Пример создания нескольких Характеристик

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristic"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "Размер"
            },
            {
              "name": "Цвет"
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных Характеристик.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristic/b55d2ddf-60c3-11e7-6adb-ede500000010",
      "type": "attributemetadata",
      "mediaType": "application/json"
    },
    "id": "b55d2ddf-60c3-11e7-6adb-ede500000010",
    "name": "Размер"
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristic/b56215dc-60c3-11e7-6adb-ede500000013",
      "type": "attributemetadata",
      "mediaType": "application/json"
    },
    "id": "b56215dc-60c3-11e7-6adb-ede500000013",
    "name": "Цвет"
  }
]
```
