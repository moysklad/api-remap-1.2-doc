## Отчет По документам номенклатуры
Запросить отчет по документам можно с помощью JSON API. Для работы с отчетом нужны права на просмотр товаров, а также права на просмотр остатков.
Есть три отчета по документам:

* отчет по документам отображающий остатки
* отчет по документам отображающий резервы
* отчет по документам отображающий ожидания

На содержание отчета влияют настройки видимости документов, доступных пользователю, который запросил отчет. 
При отсутствии пермиссии `Видеть себестоимость, цену закупки, прибыль товаров` у пользователя в отчете по документам отображающим остатки не будут отображаться поля себестоимости товара и суммы себестоимости.

Во всех отчетах обязательным параметром фильтрации является фильтр по номенклатуре `assortment`. Можно фильтровать только по одной номенклатуре: Товар, Модификация или Серия.

Подробнее об остатках и работе с ними читайте в статье [Остатки](https://support.moysklad.ru/hc/ru/articles/203319073-%D0%9E%D1%81%D1%82%D0%B0%D1%82%D0%BA%D0%B8). 

### Отчет с остатками
Отчет формируется для конкретной номенклатуры и содержит информацию о документах, формирующих остатки, в которых данная номенклатура используется.

#### Атрибуты объекта отчета с остатками:

| Название         | Тип                                                       | Описание                                                                                                                                                  |
| ---------------- | :-------------------------------------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **assortment**   | [Meta](#/general#3-metadannye) | Метаданные Товара/Модификации/Серии<br>`+Обязательное при ответе`                                                                                         |
| **avgStockDays** | Float                                                     | Количество дней на складе<br>`+Обязательное при ответе`                                                                                                   |
| **costPerUnit**  | Float                                                     | Себестоимость за единицу                                                                                                                                  |
| **moment**       | DateTime                                                  | Дата документа<br>`+Обязательное при ответе`                                                                                                              |
| **operation**    | [Meta](#/general#3-metadannye) | Метаданные документа<br>`+Обязательное при ответе`                                                                                                        |
| **stock**        | Float                                                     | Остатки<br>`+Обязательное при ответе`                                                                                                                     |
| **store**        | [Meta](#/general#3-metadannye) | Метаданные склада документа<br>`+Обязательное при ответе`                                                                                                 |
| **sumCost**      | Float                                                     | Сумма себестоимости                                                                                                                                       |

#### Атрибуты доступные для фильтрации отчета с остатками

Результаты отчета можно отфильтровать, используя параметр filter.

| Название           | Тип         | Фильтрация | Описание                                                                                                                                                                                                                                                                                            |
|--------------------| :---------- | :--------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **assortment**     | Object      | `=`        | параметр для фильтрации по номенклатуре: Товар, Модификация или Серия. Значение соответствует ссылке на соответствующую номенклатуру. Можно фильтровать только по одной номенклатуре.                                                                                                               |


Примеры фильтрации: 

- `filter=assortment=https://api.moysklad.ru/api/remap/1.2/entity/product/656c4032-8552-11e6-8a84-bae500000044`
- `filter=assortment=https://api.moysklad.ru/api/remap/1.2/entity/consignment/656c4032-8552-11e6-8a84-bae500000044`
- `filter=assortment=https://api.moysklad.ru/api/remap/1.2/entity/variant/656c4032-8552-11e6-8a84-bae500000044`

#### Получить Отчет по документам отображающий остатки

**Параметры**

| Параметр                       | Описание                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
 
> Запрос на получение Отчета по документам отображающий остатки.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/report/byoperations/stock?filter=assortment=https://api.moysklad.ru/api/remap/1.2/entity/product/bb1865dc-32e1-11ef-ac16-001100000003" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.

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
        "href": "https://api.moysklad.ru/api/remap/1.2/report/byoperations/stock?filter=assortment=https://api.moysklad.ru/api/remap/1.2/entity/product/bb1865dc-32e1-11ef-ac16-001100000003",
        "type": "byoperations",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
    },
    "rows": [
        {
            "assortment": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/bb1865dc-32e1-11ef-ac16-001100000003",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=bb175fd6-32e1-11ef-ac16-001100000001"
                }
            },
            "operation": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/supply/ff473101-3871-11ef-ac16-001100000039",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/supply/metadata",
                    "type": "supply",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#supply/edit?id=ff473101-3871-11ef-ac16-001100000039"
                }
            },
            "moment": "2024-07-02 15:52:00.000",
            "store": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/eca7b8c0-32e0-11ef-ac16-0011000000cb",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                    "type": "store",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=eca7b8c0-32e0-11ef-ac16-0011000000cb"
                }
            },
            "stock": 1.0,
            "costPerUnit": 0.0,
            "sumCost": 0.0,
            "avgStockDays": 9.72
        }
    ]
}
```

### Отчет с резервами
Отчет формируется для конкретной номенклатуры и содержит информацию о документах, формирующих резервы, в которых данная номенклатура используется.

#### Атрибуты объекта отчета с резервами:

| Название         | Тип                                                       | Описание                                                                                                                                                  |
| ---------------- | :-------------------------------------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **assortment**   | [Meta](#/general#3-metadannye) | Метаданные Товара/Модификации/Серии<br>`+Обязательное при ответе`                                                                                         |
| **moment**       | DateTime                                                  | Дата документа<br>`+Обязательное при ответе`                                                                                                              |
| **operation**    | [Meta](#/general#3-metadannye) | Метаданные документа<br>`+Обязательное при ответе`                                                                                                        |
| **reserve**      | Float                                                     | Резерв<br>`+Обязательное при ответе`                                                                                                                      |
| **store**        | [Meta](#/general#3-metadannye) | Метаданные склада документа                                                                                                                               |

#### Атрибуты доступные для фильтрации отчета с резервами

Результаты отчета можно отфильтровать, используя параметр filter.

| Название           | Тип         | Фильтрация | Описание                                                                                                                                                                                                                                                                                            |
|--------------------| :---------- | :--------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **assortment**     | Object      | `=`        | параметр для фильтрации по номенклатуре: Товар, Модификация или Серия. Значение соответствует ссылке на соответствующую номенклатуру. Можно фильтровать только по одной номенклатуре.                                                                                                               |


Примеры фильтрации:

- `filter=assortment=https://api.moysklad.ru/api/remap/1.2/entity/product/656c4032-8552-11e6-8a84-bae500000044`
- `filter=assortment=https://api.moysklad.ru/api/remap/1.2/entity/consignment/656c4032-8552-11e6-8a84-bae500000044`
- `filter=assortment=https://api.moysklad.ru/api/remap/1.2/entity/variant/656c4032-8552-11e6-8a84-bae500000044`

#### Получить Отчет по документам отображающий резервы

**Параметры**

| Параметр                       | Описание                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

> Запрос на получение Отчета по документам отображающий резервы.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/report/byoperations/reserve?filter=assortment=https://api.moysklad.ru/api/remap/1.2/entity/product/bb1865dc-32e1-11ef-ac16-001100000003" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.

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
        "href": "https://api.moysklad.ru/api/remap/1.2/report/byoperations/reserve?filter=assortment=https://api.moysklad.ru/api/remap/1.2/entity/product/bb1865dc-32e1-11ef-ac16-001100000003",
        "type": "byoperations",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
    },
    "rows": [
        {
            "assortment": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/bb1865dc-32e1-11ef-ac16-001100000003",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=bb175fd6-32e1-11ef-ac16-001100000001"
                }
            },
            "operation": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/59826b4c-3879-11ef-ac16-000f00000032",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
                    "type": "customerorder",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#customerorder/edit?id=59826b4c-3879-11ef-ac16-000f00000032"
                }
            },
            "moment": "2024-07-02 16:45:00.000",
            "store": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/eca7b8c0-32e0-11ef-ac16-0011000000cb",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
                    "type": "store",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=eca7b8c0-32e0-11ef-ac16-0011000000cb"
                }
            },
            "reserve": 5.0
        }
    ]
}
```

### Отчет с ожиданием
Отчет формируется для конкретной номенклатуры и содержит информацию о документах, формирующих ожидания, в которых данная номенклатура используется.

#### Атрибуты объекта отчета с ожиданием:

| Название         | Тип                                                       | Описание                                                                                                                                                  |
| ---------------- | :-------------------------------------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **assortment**   | [Meta](#/general#3-metadannye) | Метаданные Товара/Модификации/Серии<br>`+Обязательное при ответе`                                                                                         |
| **inTransit**    | Float                                                     | Ожидания<br>`+Обязательное при ответе`                                                                                                                    |
| **moment**       | DateTime                                                  | Дата документа<br>`+Обязательное при ответе`                                                                                                              |
| **operation**    | [Meta](#/general#3-metadannye) | Метаданные документа<br>`+Обязательное при ответе`                                                                                                        |
| **store**        | [Meta](#/general#3-metadannye) | Метаданные склада документа                                                                                                                               |

#### Атрибуты доступные для фильтрации отчета с ожиданием

Результаты отчета можно отфильтровать, используя параметр filter.

| Название           | Тип         | Фильтрация | Описание                                                                                                                                                                                                                                                                                            |
|--------------------| :---------- | :--------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **assortment**     | Object      | `=`        | параметр для фильтрации по номенклатуре: Товар, Модификация или Серия. Значение соответствует ссылке на соответствующую номенклатуру. Можно фильтровать только по одной номенклатуре.                                                                                                               |


Примеры фильтрации:

- `filter=assortment=https://api.moysklad.ru/api/remap/1.2/entity/product/656c4032-8552-11e6-8a84-bae500000044`
- `filter=assortment=https://api.moysklad.ru/api/remap/1.2/entity/consignment/656c4032-8552-11e6-8a84-bae500000044`
- `filter=assortment=https://api.moysklad.ru/api/remap/1.2/entity/variant/656c4032-8552-11e6-8a84-bae500000044`

#### Получить Отчет по документам отображающий ожидание

**Параметры**

| Параметр                       | Описание                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

> Запрос на получение Отчета по документам отображающий ожидание.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/report/byoperations/intransit?filter=assortment=https://api.moysklad.ru/api/remap/1.2/entity/product/bb1865dc-32e1-11ef-ac16-001100000003" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/report/byoperations/intransit?filter=assortment=https://api.moysklad.ru/api/remap/1.2/entity/product/bb1865dc-32e1-11ef-ac16-001100000003",
    "type": "byoperations",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/bb1865dc-32e1-11ef-ac16-001100000003",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=bb175fd6-32e1-11ef-ac16-001100000001"
        }
      },
      "operation": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/purchaseorder/dba8c216-401c-11ef-ac16-00110000002b",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/purchaseorder/metadata",
          "type": "purchaseorder",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#purchaseorder/edit?id=dba8c216-401c-11ef-ac16-00110000002b"
        }
      },
      "moment": "2024-07-12 10:03:00.000",
      "store": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/eca7b8c0-32e0-11ef-ac16-0011000000cb",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=eca7b8c0-32e0-11ef-ac16-0011000000cb"
        }
      },
      "inTransit": 5.0
    }
  ]
}
```
