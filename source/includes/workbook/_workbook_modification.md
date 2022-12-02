## Работа с характеристиками в Модификациях

Предположим, что имеется магазин по продаже вещей. Ассортимент в магазине обширный и нужно как-то его описать. Сначала 
разделение было по типам: футболки, джинсы и брюки. Но имеется множество различных футболок, джинс и брюк. Они 
имеют различные параметры: размер, цвет и т.д. Их нужно как-то различать в системе, чтобы продавать их как 
отдельные товары. Модификации смогут решить данную проблему. 
По сути модификация - это товар со специфичными характеристиками, такими как цвет, вес, размер и так далее. Подробнее 
про работу с модификациями можно прочитать
 [тут](../dictionaries/#suschnosti-modifikaciq-sozdat-modifikaciu). 

Прежде чем добавлять новые или использовать старые характеристики модификации нужно понять, какие уже 
были созданы и используются.

> Запрос на получение характеристик модификаций

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление метаданных модификации с характеристиками.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
    "mediaType": "application/json"
  },
  "characteristics": [
    {
      "id": "fd68704f-f67d-11e5-8a84-bae50000006b",
      "name": "feature",
      "type": "string",
      "required": false
    },
    {
      "id": "66bcdde0-f7d2-11e5-8a84-bae500000072",
      "name": "Вес",
      "type": "string",
      "required": false
    },
    {
      "id": "66be57d2-f7d2-11e5-8a84-bae500000073",
      "name": "Размер",
      "type": "string",
      "required": false
    },
    {
      "id": "daec003b-fa34-11e5-9464-e4de0000006c",
      "name": "Мода",
      "type": "string",
      "required": false
    }
  ]
}
```

После того, как стало понятно, что каких-то характеристик не хватает, чтобы описать товар, в JSON API имеется возможность
 добавить недостающие характеристики. Это можно сделать через отдельный эндпоинт для работы с характеристиками. 

> Создание одной характеристики.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics"
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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/6262b270-60c3-11e7-6adb-ede50000000d",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "6262b270-60c3-11e7-6adb-ede50000000d",
  "name": "Размер",
  "type": "string",
  "required": false
}
```

> Пример создания нескольких Характеристик

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics"
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/b55d2ddf-60c3-11e7-6adb-ede500000010",
      "type": "attributemetadata",
      "mediaType": "application/json"
    },
    "id": "b55d2ddf-60c3-11e7-6adb-ede500000010",
    "name": "Размер",
    "type": "string",
    "required": false
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/b56215dc-60c3-11e7-6adb-ede500000013",
      "type": "attributemetadata",
      "mediaType": "application/json"
    },
    "id": "b56215dc-60c3-11e7-6adb-ede500000013",
    "name": "Цвет",
    "type": "string",
    "required": false
  }
]
```

После того как нужные характеристики были созданы, можно создавать модификации с данными характеристиками.
