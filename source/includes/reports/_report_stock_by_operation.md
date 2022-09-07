## Остатки по документам
Отчёт "Остатки по документам" представляет собой выдачу Остатков по позициям указанного
в пути документа.
Остатки можно получить по следующим документам: `[Отгрузка, Заказ Покупателя, Розничная продажа]`
Остатки для документа **Отгрузка** и **Розничная продажа** расчитываются на момент поля **moment** в данных документах.
Для **Заказа покупателя** и **Счета покупателя** остатки рассчитываются на текущий момент времени.

### Атрибуты объекта отчёта:

| Значение      | Описание                                                    |
| ------------- |:------------------------------------------------------------|
| **meta**     | [Метаданные](#header-метаданные), представляющие собой ссылку на документ, по которому выдаются Остатки |
| *positions** | Массив объектов, представляющий собой Остаток по каждой из позиций.                       |

### Атрибуты Остатка по позиции

| Значение      | Описание                                                                                              |
| ------------- |:------------------------------------------------------------------------------------------------------|
| **meta**     | [Метаданные](#header-метаданные), представляющие собой ссылку на позицию, по которой выдаётся Остаток |
|**name** | Наименование позиции                                                                                  |
|**stock** | Остаток                                                                                               |
|**cost** | Себестоимость                                   |
|**inTransit** | Ожидание                                   |
|**reserve** Резерв                                   |
|**name** | Массив объектов, представляющий собой Остаток по каждой из позиций.                                   |
|**quantity** | Доступно. У сущности **Комплект** значение всегда `0`.                                   |

### Получить Остатки по документу 

Запрос на получение отчёта "Остатки по документу".
Остатки для документа **Отгрузка** и **Розничная продажа** расчитываются на момент поля **moment** в данных документах.
Для **Заказа покупателя** остатки рассчитываются на текущий момент времени.

Данный запрос работает со следующими типами документов:
+ [Отгрузка](#отгрузка)
+ [Заказ покупателя](#заказ-покупателя)
+ [Розничная продажа](#розничная-продажа)
+ [Счёт покупателю](#документ-счёт-покупателю)

Результат запроса - остатки по позициям документа, на дату документа, со склада, указанного в документе,
а также себестоимость позиций документа по FIFO с учётом количества.

#### Примеры запросов

> Запрос на получение текущих остатков без разбиения по складам.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/stock/byoperation?operation.id=34efe2ee-015e-11e6-9464-e4de0000006b"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.

```json
{
  "context": {
    "employee": {
      "href": "https://online.moysklad.ru/api/remap/1.2/context/employee",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/report/stock/byoperation?operation.id=34efe2ee-015e-11e6-9464-e4de0000006b",
    "type": "stockbyoperation",
    "mediaType": "application/json",
    "size": 1,
    "limit": 25,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/34efe2ee-015e-11e6-9464-e4de0000006b",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerOrder/metadata",
        "type": "customerorder",
        "mediaType": "application/json"
      },
      "positions": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json"
          },
          "name": "Клюшка хоккейная",
          "stock": -2,
          "cost": 0,
          "inTransit": 0,
          "reserve": 0,
          "quantity": 0
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/60fc3826-00d7-11e6-9464-e4de00000097",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json"
          },
          "name": "Поднимание пингвинов",
          "stock": 0,
          "cost": 0,
          "inTransit": 0,
          "reserve": 0,
          "quantity": 0
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/d1bed68b-ffe7-11e5-9464-e4de0000001a",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
            "type": "variant",
            "mediaType": "application/json"
          },
          "name": "ТОварИщ (10)",
          "stock": 0,
          "cost": 0,
          "inTransit": 0,
          "reserve": 0,
          "quantity": 0
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/671b3522-f7d2-11e5-8a84-bae500000084",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
            "type": "variant",
            "mediaType": "application/json"
          },
          "name": "ТоварМногоМодификаций (1, 100, 30)",
          "stock": 3,
          "cost": 0,
          "inTransit": 0,
          "reserve": 0,
          "quantity": 3
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/66ccbc9f-f7d2-11e5-8a84-bae500000076",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json"
          },
          "name": "ТоварМногоМодификаций",
          "stock": 3,
          "cost": 0,
          "inTransit": 0,
          "reserve": 1,
          "quantity": 2
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/8b382799-f7d2-11e5-8a84-bae5000003a5",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json"
          },
          "name": "ТоварМногоМодификаций2",
          "stock": 0,
          "cost": 0,
          "inTransit": 0,
          "reserve": 0,
          "quantity": 0
        }
      ]
    }
  ]
}

```
