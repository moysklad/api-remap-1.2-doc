## Отчёт Прибыльность
Средствами JSON API можно запросить отчёт "Прибыльность" по всем товарам, услугам, модификациям, сотрудникам  и покупателям.
О том, что представляет собой отчёт "Прибыльность" вы можете прочитать по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203025326-%D0%9E%D1%82%D1%87%D0%B5%D1%82-%D0%9F%D1%80%D0%B8%D0%B1%D1%8B%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8C).

#### Прибыльность по товарам 
#### Атрибуты объекта отчёта:
+ **assortment**- Краткое представление товара или услуги в отчёте (структура ниже)
+ **sellQuantity** - Проданное количество
+ **sellPrice** - Цена продаж (средняя)
+ **sellCost** - Себестоимость
+ **sellSum** - Сумма продаж
+ **sellCostSum** - Сумма себестоимостей продаж
+ **returnQuantity** - Количество возвратов
+ **returnPrice** - Цена возвратов
+ **returnCost** - Себестоимость возвратов
+ **returnSum** - Сумма возвратов
+ **returnCostSum** - Сумма себестоимостей возвратов
+ **profit** - Прибыль
+ **margin** - Рентабельность

#### Структура объекта assortment
+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные), представляющие собой ссылку на товар или услугу
+ **name** - Наименование товара или услуги
+ **code** - Код товара или услуги
+ **uom** - Единица измерения
+ **article** - Артикул товара
+ **image** - Изображение товара

### Получить Прибыльность по товарам

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|
 
> Запрос на получение отчёта "Прибыльность по товарам".

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/sales/byproduct"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчёта.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/report/sales/byproduct",
    "type": "salesbyproduct",
    "mediaType": "application/json",
    "size": 5,
    "limit": 2,
    "offset": 0,
    "nextHref": "https://online.moysklad.ru/api/remap/1.2/report/sales/byproduct?limit=2&offset=2"
  },
  "rows": [
    {
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/6af0f1c9-4814-11e6-8a84-bae5000006b4",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        },
        "name": "Курево",
        "code": "00067",
        "uom": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
            "type": "uom",
            "mediaType": "application/json"
          },
          "name": "шт"
        }
      },
      "sellQuantity": 8643,
      "sellPrice": 216174.97396737244,
      "sellCost": 0,
      "sellSum": 1868400300,
      "sellCostSum": 0,
      "returnQuantity": 0,
      "returnPrice": 0,
      "returnCost": 0,
      "returnSum": 0,
      "returnCostSum": 0,
      "profit": 1868400300,
      "margin": 0
    },
    {
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/6a9bdfe4-4814-11e6-8a84-bae500000503",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        },
        "name": "Ногтеточка",
        "code": "00198",
        "uom": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
            "type": "uom",
            "mediaType": "application/json"
          },
          "name": "шт"
        }
      },
      "sellQuantity": 4765,
      "sellPrice": 100000000,
      "sellCost": 0,
      "sellSum": 476500000000,
      "sellCostSum": 0,
      "returnQuantity": 0,
      "returnPrice": 0,
      "returnCost": 0,
      "returnSum": 0,
      "returnCostSum": 0,
      "profit": 476500000000,
      "margin": 0
    },
    {
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/3413f2dd-484e-11e8-6a80-332a00000091",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata",
          "type": "service",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3412d794-484e-11e8-6a80-332a0000008f"
        },
        "name": "Заточка коньков",
        "code": "00045",
        "uom": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
            "type": "uom",
            "mediaType": "application/json"
          },
          "name": "шт"
        }
      },
      "sellQuantity": 10,
      "sellPrice": 500000,
      "sellCost": 300000,
      "sellSum": 5000000,
      "sellCostSum": 3000000,
      "returnQuantity": 3,
      "returnPrice": 500000,
      "returnCost": 300000,
      "returnSum": 1500000,
      "returnCostSum": 900000,
      "profit": 1400000,
      "margin": 0.6666666666666666
    }
  ]
}
```

#### Прибыльность по модификациям 
#### Атрибуты объекта отчёта:
+ **assortment**- Краткое представление модификации, услуги или комплекта в отчёте (структура ниже)
+ **sellQuantity** - Проданное количество
+ **sellPrice** - Цена продаж (средняя)
+ **sellCost** - Себестоимость
+ **sellSum** - Сумма продаж
+ **sellCostSum** - Сумма себестоимостей продаж
+ **returnQuantity** - Количество возвратов
+ **returnPrice** - Цена возвратов
+ **returnCost** - Себестоимость возвратов
+ **returnSum** - Сумма возвратов
+ **returnCostSum** - Сумма себестоимостей возвратов
+ **profit** - Прибыль
+ **margin** - Рентабельность

#### Структура объекта assortment
+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные), представляющие собой ссылку на модификацию, услугу или комплект
+ **name** - Наименование сущности
+ **code** - Код сущности
+ **article** - Артикул модификации или комплекта
+ **image** - Изображение модификации

### Получить Прибыльность по модификациям

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|
 
> Запрос на получение отчёта "Прибыльность по модификациям".

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/sales/byvariant"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчёта.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/report/sales/byvariant",
    "type": "salesbyvariant",
    "mediaType": "application/json",
    "size": 5,
    "limit": 2,
    "offset": 0,
    "nextHref": "https://online.moysklad.ru/api/remap/1.2/report/sales/byvariant?limit=2&offset=2"
  },
  "rows": [
    {
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/6af0f1c9-4814-11e6-8a84-bae5000006b4?expand=product.supplier",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
          "type": "variant",
          "mediaType": "application/json"
        },
        "name": "Курево (Африка, 0.2, Комбайны)",
        "code": "00067",
        "uom": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
            "type": "uom",
            "mediaType": "application/json"
          },
          "name": "шт"
        }
      },
      "sellQuantity": 8643,
      "sellPrice": 216174.97396737244,
      "sellCost": 0,
      "sellSum": 1868400300,
      "sellCostSum": 0,
      "returnQuantity": 0,
      "returnPrice": 0,
      "returnCost": 0,
      "returnSum": 0,
      "returnCostSum": 0,
      "profit": 1868400300,
      "margin": 0
    },
    {
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/6a9bdfe4-4814-11e6-8a84-bae500000503?expand=product.supplier",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
          "type": "variant",
          "mediaType": "application/json"
        },
        "name": "Ногтеточка (Белый, 20, Нет, 1000)",
        "code": "00198",
        "uom": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
            "type": "uom",
            "mediaType": "application/json"
          },
          "name": "шт"
        }
      },
      "sellQuantity": 4765,
      "sellPrice": 100000000,
      "sellCost": 0,
      "sellSum": 476500000000,
      "sellCostSum": 0,
      "returnQuantity": 0,
      "returnPrice": 0,
      "returnCost": 0,
      "returnSum": 0,
      "returnCostSum": 0,
      "profit": 476500000000,
      "margin": 0
    },
    {
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/3413f2dd-484e-11e8-6a80-332a00000091",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata",
          "type": "service",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3412d794-484e-11e8-6a80-332a0000008f"
        },
        "name": "Заточка коньков",
        "code": "00045",
        "uom": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
            "type": "uom",
            "mediaType": "application/json"
          },
          "name": "шт"
        }
      },
      "sellQuantity": 10,
      "sellPrice": 500000,
      "sellCost": 300000,
      "sellSum": 5000000,
      "sellCostSum": 3000000,
      "returnQuantity": 3,
      "returnPrice": 500000,
      "returnCost": 300000,
      "returnSum": 1500000,
      "returnCostSum": 900000,
      "profit": 1400000,
      "margin": 0.6666666666666666
    }
  ]
}
```

#### Прибыльность по сотрудникам 
#### Атрибуты объекта отчёта:
+ **employee**- Краткое представление сотрудника в отчёте (структура ниже)
+ **salesCount** - Количество продаж
+ **salesAvgCheck** - Средний чек продаж
+ **sellSum** - Сумма продаж
+ **sellCostSum** - Сумма себестоимостей продаж
+ **returnCount** - Количество возвратов
+ **returnAvgCheck** - Средний чек возврата
+ **returnSum** - Сумма возвратов
+ **returnCostSum** - Сумма себестоимостей возвратов
+ **profit** - Прибыль
+ **margin** - Рентабельность

#### Структура объекта employee
+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные), представляющие собой ссылку на сотрудника
+ **name** - Имя сотрудника

### Получить Прибыльность по сотрудникам

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|
 
> Запрос на получение отчёта "Прибыльность по сотрудникам".

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/sales/byemployee"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчёта.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/report/sales/byEmployee",
    "type": "salesbyemployee",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "employee": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/3c9ef5be-4814-11e6-8a84-bae500000028",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        },
        "name": "Администратор"
      },
      "salesCount": 3,
      "salesAvgCheck": 104498369718788910,
      "sellSum": 313495109156366700,
      "sellCostSum": 0,
      "returnCount": 0,
      "returnAvgCheck": 0,
      "returnSum": 0,
      "returnCostSum": 0,
      "profit": 313495109156366700,
      "margin": 0
    }
  ]
}
```

#### Прибыльность по покупателям 
#### Атрибуты объекта отчёта:
+ **counterparty**- Краткое представление покупателя в отчёте (структура ниже)
+ **salesCount** - Количество продаж
+ **salesAvgCheck** - Средний чек продаж
+ **sellSum** - Сумма продаж
+ **sellCostSum** - Сумма себестоимостей продаж
+ **returnCount** - Количество возвратов
+ **returnAvgCheck** - Средний чек возврата
+ **returnSum** - Сумма возвратов
+ **returnCostSum** - Сумма себестоимостей возвратов
+ **profit** - Прибыль
+ **margin** - Рентабельность

#### Структура объекта counterparty
+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные), представляющие собой ссылку на покупателя
+ **name** - Имя покупателя

### Получить Прибыльность по покупателям

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|
 
> Запрос на получение отчёта "Прибыльность по покупателям".

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/sales/bycounterparty"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчёта.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/report/sales/bycounterparty",
    "type": "salesbyCounterparty",
    "mediaType": "application/json",
    "size": 3,
    "limit": 1,
    "offset": 0,
    "nextHref": "https://online.moysklad.ru/api/remap/1.2/report/sales/bycounterparty?limit=1&offset=1"
  },
  "rows": [
    {
      "counterparty": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/3cd88c00-4814-11e6-8a84-bae500000053",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        },
        "name": "ООО \"Покупатель\""
      },
      "salesCount": 1,
      "salesAvgCheck": 310390615323104640,
      "sellSum": 310390615323104640,
      "sellCostSum": 0,
      "returnCount": 0,
      "returnAvgCheck": 0,
      "returnSum": 0,
      "returnCostSum": 0,
      "profit": 310390615323104640,
      "margin": 0
    }
  ]
}
```
