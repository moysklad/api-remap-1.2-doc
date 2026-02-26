## Партия

### Партии 
Кодом сущности для Партии в составе JSON API является ключевое слово **consignment**.
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](#/general#3-kontekstnyj-poisk). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов Партии на соответствие поисковой строке будет осуществлен по следующим полям:

+ по наименованию Партии **name**
+ по описанию Партии **description**

При создании или изменении партии необходимо указать метку партии **label** или срок годности партии **expiryDate**.

#### Атрибуты сущности

| Название         | Тип                            | Фильтрация                                                             | Описание                                                                                                                                                    |
|------------------|:-------------------------------|:-----------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**    | UUID                           | `=` `!=`                                                               | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                        |
| **archived**     | Boolean                        | `=` `!=`                                                               | Добавлена ли серия в архив<br>`+Обязательное при ответе`                                                                                                    |
| **attributes**   | Array(Object)                  | [Операторы доп. полей](#/general#4-filtraciya-po-dopolnitelnym-polyam) | Коллекция доп. полей Серии                                                                                                                                  |
| **assortment**   | [Meta](#/general#3-metadannye) |                                                                        | Метаданные товара/услуги/комплекта, которую представляет собой компонент<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                 |
| **barcodes**     | Array(Object)                  | `=` `!=` `~` `~=` `=~`                                                 | Штрихкоды серии  . Для фильтрации по полю необходимо указывать его в единственном числе **barcode**.                                                        |
| **code**         | String(255)                    | `=` `!=` `~` `~=` `=~`                                                 | Код Серии                                                                                                                                                   |
| **description**  | String(4096)                   | `=` `!=` `~` `~=` `=~`                                                 | Описание Серии                                                                                                                                              |
| **expiryDate**   | DateTime                       | `=` `!=` `<` `>` `<=` `>=`                                             | Срок годности Серии<br>`+Необходимо при создании`                                                                                                           |
| **externalCode** | String(255)                    | `=` `!=` `~` `~=` `=~`                                                 | Внешний код Серии<br>`+Обязательное при ответе`                                                                                                             |
| **id**           | UUID                           | `=` `!=`                                                               | ID Серии<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                 |
| **images**       | MetaArray |                                                                        | Массив метаданных [Изображений](#/dictionaries/images#2-izobrazhenie) товара, к которому относится данная серия (Максимальное количество изображений - 10) <br>`+Только для чтения`  |
| **label**        | String(255)                    | `=` `!=` `~` `~=` `=~`                                                 | Метка Серии<br>`+Необходимо при создании`                                                                                                                   |
| **meta**         | [Meta](#/general#3-metadannye) |                                                                        | Метаданные Серии<br>`+Обязательное при ответе`                                                                                                              |
| **name**         | String(255)                    | `=` `!=` `~` `~=` `=~`                                                 | Наименование Серии. "Собирается" и отображается как "Наименование товара / Метка Серии"<br>`+Обязательное при ответе` `+Только для чтения`                  |
| **updated**      | DateTime                       | `=` `!=` `<` `>` `<=` `>=`                                             | Момент последнего обновления сущности<br>`+Обязательное при ответе` `+Только для чтения`                                                                    |

#### Атрибуты вложенных сущностей
##### Метаданные Партий

Посмотреть все созданные в основном интерфейсе характеристики Партий можно с помощью запроса на получение метаданных Партий.
Ответ - объект, со следующей структурой:

| Название       | Тип                            | Описание                                        |
|----------------|:-------------------------------|:------------------------------------------------|
| **meta**       | [Meta](#/general#3-metadannye) | Метаданные Партии<br>`+Обязательное при ответе` |
| **attributes** | Array(Object)                  | Коллекция доп. полей                            |

### Получить список Партий 
Запрос на получение списка всех пользовательских Партий на данной учетной записи.
<u>Партии по умолчанию выведены не будут.</u>
Результат успешного запроса - JSON представление списка Партий с перечисленными полями:

| Название    | Тип                            | Описание                                           |
|-------------|:-------------------------------|:---------------------------------------------------|
| **meta**    | [Meta](#/general#3-metadannye) | Метаданные о выдаче,                               |
| **context** | [Meta](#/general#3-metadannye) | Метаданные о сотруднике, выполнившем запрос.       |
| **rows**    | Array(Object)                  | Массив JSON объектов, представляющих собой партии. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить список Партий

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/consignment" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка пользовательских Партий.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/consignment",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/consignment/metadata",
    "type": "consignment",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/consignment/c66f4b17-36e7-11e7-8a7f-40d000000113",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/consignment/metadata",
        "type": "consignment",
        "mediaType": "application/json"
      },
      "id": "c66f4b17-36e7-11e7-8a7f-40d000000113",
      "accountId": "103bff1b-36e7-11e7-8a7f-40d000000004",
      "updated": "2017-05-12 10:51:15",
      "name": "product / consignment",
      "code": "1012",
      "archived": false,
      "externalCode": "g9BOLNRZglk9NMOHxcrVV0",
      "label": "consignment",
      "barcodes": [
        {
          "ean8": "20000000"
        },
        {
          "ean13": "2000000000000"
        },
        {
          "code128": "code128 barcode"
        }
      ],
      "images": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/35427052-36e7-11e7-8a7f-40d0000000d1/images",
          "type": "image",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/35427052-36e7-11e7-8a7f-40d0000000d1",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        }
      }
    }
  ]
}
```

### Создать партию 
Запрос на создание новой партии. Для успешного создания партии, обязательно должны быть переданы поля
**label** и **assortment**.

> Пример создания новой партии.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/consignment" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '
  "label": "Метка",
  "barcodes": [
    {
      "ean8": "20000000"
    },
    {
      "ean13": "2000000000000"
    },
    {
      "code128": "code128 barcode"
    }
  ],
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a83c422-3c64-11e6-8a84-bae500000012",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
      "type": "variant",
      "mediaType": "application/json"
    }
  }
}'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной партии.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/consignment/17a32a0a-5310-11e6-8a84-bae500000000",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/consignment/metadata",
    "type": "consignment",
    "mediaType": "application/json"
  },
  "id": "17a32a0a-5310-11e6-8a84-bae500000000",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "updated": "2016-07-26 12:05:25",
  "name": "фацфацфвф (цфвцф) / Метка",
  "externalCode": "NptSJ1REgVkhqCV0RlyfV0",
  "archived": false,
  "label": "Метка",
  "barcodes": [
    {
      "ean8": "20000000"
    },
    {
      "ean13": "2000000000000"
    },
    {
      "code128": "code128 barcode"
    }
  ],
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a83c422-3c64-11e6-8a84-bae500000012",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
      "type": "variant",
      "mediaType": "application/json"
    }
  }
}
```


### Удалить партию 

**Параметры**

| Параметр | Описание                                                                       |
|:---------|:-------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Партии. |

> Запрос на удаление Партии с указанным id.

```shell
curl --compressed -X DELETE \
  "https://api.moysklad.ru/api/remap/1.2/entity/consignment/7944ef04-f831-11e5-7a69-971500188b19" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление Партии.

### Массовое удаление Партий

В теле запроса нужно передать массив, содержащий JSON метаданных Партий, которые вы хотите удалить.


> Запрос на массовое удаление Партий. 

```shell
curl --compressed -X POST \
  "https://api.moysklad.ru/api/remap/1.2/entity/consignment/delete" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -d '[
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/consignment/7944ef04-f831-11e5-7a69-971500188b1",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/consignment/metadata",
                "type": "consignment",
                "mediaType": "application/json"
            }
        },
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/consignment/7944ef04-f831-11e5-7a69-971500188b2",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/consignment/metadata",
                "type": "consignment",
                "mediaType": "application/json"
            }
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Партий.

```json
[
  {
    "info":"Сущность 'consignment' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'consignment' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
```

### Массовое создание и обновление Партий

[Массовое создание и обновление](#/general#3-sozdanie-i-obnovlenie-neskolkih-obuektov) Партий.
В теле запроса нужно передать массив, содержащий JSON представления Партий, которые вы хотите создать или обновить.
Обновляемые Партии должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Партий

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/consignment" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '[
            {
              "label": "Метка",
              "barcodes": [
                {
                  "ean8": "20000000"
                },
                {
                  "ean13": "2000000000000"
                },
                {
                  "code128": "code128 barcode"
                }
              ],
              "assortment": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a83c422-3c64-11e6-8a84-bae500000012",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                  "type": "variant",
                  "mediaType": "application/json"
                }
              }
            },
            {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/consignment/17a32a0a-5310-11e6-8a84-bae500000000",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/consignment/metadata",
                "type": "consignment",
                "mediaType": "application/json"
              },
              "code": "ke21k421c1o42n4signment12",
              "externalCode": "fbajkwbfu1249SACSKW241LKSFA2sa1",
              "description": "Партии товаров с таким названием лучше отслеживать",
              "label": "Странный товар",
              "barcodes": [
                {
                  "ean8": "20000000"
                },
                {
                  "ean13": "2000000000000"
                },
                {
                  "code128": "code128 barcode"
                }
              ],
              "assortment": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                  "type": "variant",
                  "mediaType": "application/json"
                }
              }
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Партий.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/consignment/17a32a0a-5310-11e6-8a84-bae500000000",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/consignment/metadata",
      "type": "consignment",
      "mediaType": "application/json"
    },
    "id": "17a32a0a-5310-11e6-8a84-bae500000000",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "updated": "2016-07-26 12:05:25",
    "name": "фацфацфвф (цфвцф) / Метка",
    "externalCode": "NptSJ1REgVkhqCV0RlyfV0",
    "archived": false,
    "label": "Метка",
    "barcodes": [
      {
        "ean8": "20000000"
      },
      {
        "ean13": "2000000000000"
      },
      {
        "code128": "code128 barcode"
      }
    ],
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a83c422-3c64-11e6-8a84-bae500000012",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      }
    }
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/consignment/17a32a0a-5310-11e6-8a84-bae500000000",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/consignment/metadata",
      "type": "consignment",
      "mediaType": "application/json"
    },
    "id": "17a32a0a-5310-11e6-8a84-bae500000000",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "updated": "2016-07-26 12:05:25",
    "name": "фацфацфвф (обхец) / Странный товар",
    "description": "Партии товаров с таким названием лучше отслеживать",
    "code": "ke21k421c1o42n4signment12",
    "archived": false,
    "externalCode": "fbajkwbfu1249SACSKW241LKSFA2sa1",
    "label": "Странный товар",
    "barcodes": [
      {
        "ean8": "20000000"
      },
      {
        "ean13": "2000000000000"
      },
      {
        "code128": "code128 barcode"
      }
    ],
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      }
    }
  }
]
```

### Запросы - Метаданные Партий 
Запрос на получение метаданных Партий. Результат - объект JSON, включающий в себя:

| Название       | Тип                                                       | Описание                                 |
| -------------- | :-------------------------------------------------------- | :--------------------------------------- |
| **meta**       | [Meta](#/general#3-metadannye) | Метаданные<br>`+Обязательное при ответе` |
| **attributes** | Array(Object)                                             | Коллекция доп. полей                     |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](#/general#3-rabota-s-dopolnitelnymi-polyami).

> Получить метданные Партии

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/consignment/metadata" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление метаданных партии.

```json
{
  "meta": {
    "href": "hhttps://api.moysklad.ru/api/remap/1.2/entity/consignment",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "hhttps://api.moysklad.ru/api/remap/1.2/entity/consignment/metadata/attributes/83dc3e6c-3bbf-11e7-8a7f-40d000000001",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "83dc3e6c-3bbf-11e7-8a7f-40d000000001",
      "name": "string",
      "type": "string",
      "required": false
    },
    {
      "meta": {
        "href": "hhttps://api.moysklad.ru/api/remap/1.2/entity/consignment/metadata/attributes/958b275e-3bbf-11e7-8a7f-40d000000004",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "958b275e-3bbf-11e7-8a7f-40d000000004",
      "name": "number",
      "type": "long",
      "required": false
    }
  ]
}
```


### Отдельное доп. поле

**Параметры**

| Параметр | Описание                                                                          |
| :------- | :-------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 958b275e-3bbf-11e7-8a7f-40d000000004* id Доп. поля. |

#### Запросы - Отдельное доп. поле
 
> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/consignment/metadata/attributes/958b275e-3bbf-11e7-8a7f-40d000000004" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "hhttps://api.moysklad.ru/api/remap/1.2/entity/consignment/metadata/attributes/958b275e-3bbf-11e7-8a7f-40d000000004",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "958b275e-3bbf-11e7-8a7f-40d000000004",
  "name": "number",
  "type": "long",
  "required": false
}
```


### Запросы - Партия

**Параметры**

| Параметр | Описание                                                                       |
|:---------|:-------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Партии. |

### Получить партию
 
> Запрос на получение Партии с указанным id.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/consignment/7944ef04-f831-11e5-7a69-971500188b19" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление пользовательской Партии.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/consignment/c66f4b17-36e7-11e7-8a7f-40d000000113",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/consignment/metadata",
    "type": "consignment",
    "mediaType": "application/json"
  },
  "id": "c66f4b17-36e7-11e7-8a7f-40d000000113",
  "accountId": "103bff1b-36e7-11e7-8a7f-40d000000004",
  "updated": "2017-05-12 10:51:15",
  "name": "product / consignment",
  "code": "1012",
  "archived": false,
  "externalCode": "g9BOLNRZglk9NMOHxcrVV0",
  "label": "consignment",
  "barcodes": [
    {
      "ean8": "20000000"
    },
    {
      "ean13": "2000000000000"
    },
    {
      "code128": "code128 barcode"
    }
  ],
  "images": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/35427052-36e7-11e7-8a7f-40d0000000d1/images",
      "type": "image",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/35427052-36e7-11e7-8a7f-40d0000000d1",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json"
    }
  }
}
```


### Изменить партию
 
 **Параметры**
 
| Параметр | Описание                                                                       |
|:---------|:-------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Партии. |

Запрос на обновление партии. Обновить можно только те поля, что не помечены `Только для чтения`

> Пример запроса на обновление партии.

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/consignment/7944ef04-f831-11e5-7a69-971500188b19" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "code": "ke21k421c1o42n4signment12",
            "externalCode": "fbajkwbfu1249SACSKW241LKSFA2sa1",
            "description": "Партии товаров с таким названием лучше отслеживать",
            "label": "Странный товар",
            "barcodes": [
              {
                "ean8": "20000000"
              },
              {
                "ean13": "2000000000000"
              },
              {
                "code128": "code128 barcode"
              }
            ],
            "assortment": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                "type": "variant",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной партии.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/consignment/17a32a0a-5310-11e6-8a84-bae500000000",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/consignment/metadata",
    "type": "consignment",
    "mediaType": "application/json"
  },
  "id": "17a32a0a-5310-11e6-8a84-bae500000000",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "updated": "2016-07-26 12:05:25",
  "name": "фацфацфвф (обхец) / Странный товар",
  "description": "Партии товаров с таким названием лучше отслеживать",
  "code": "ke21k421c1o42n4signment12",
  "archived": false,
  "externalCode": "fbajkwbfu1249SACSKW241LKSFA2sa1",
  "label": "Странный товар",
  "barcodes": [
    {
      "ean8": "20000000"
    },
    {
      "ean13": "2000000000000"
    },
    {
      "code128": "code128 barcode"
    }
  ],
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
      "type": "variant",
      "mediaType": "application/json"
    }
  }
}
```
