# Отчёты
## Отчёт Остатки
Средствами JSON API можно запросить отчёт "Остатки" по всем товарам, по складам и по операциям.
Больше об Остатках и работе с ними в основном интерфейсе
 вы можете прочитать в нашей службе поддержки по по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203319073-%D0%9E%D1%81%D1%82%D0%B0%D1%82%D0%BA%D0%B8).
### Доступ к отчету Остатки
Для доступа к отчёту Остатки через API каких-либо дополнительных прав не требуется.
На отображение товаров в отчёте Остатки влияют настройки видимости товаров и складов для пользователя,
под именем которого запрашивается отчёт Остатки.
Себестоимость, цена закупки, прибыль отображаются в Остатках при наличии у пользователя права <Видеть себестоимость, цену закупки и прибыль товаров>.

Отдельно для остатков по документу:

Для доступа к отчёту Остатки по документу через API каких-либо дополнительных прав не требуется,
кроме наличия доступа пользователя к документу, по которому запрашиваются остатки.
Себестоимость, цена закупки, прибыль отображаются в Остатках при наличии у пользователя права <Видеть себестоимость, цену закупки и прибыль товаров>.
#### Все Остатки 
Отчёт "Все Остатки" представляет собой выдачу из объектов, каждый из
которых показывает Остаток по каждому из товаров.
#### Атрибуты объекта отчёта:
+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные), представляющие собой ссылку на товар, модификацию или серию, по которой выдаётся Остаток
+ **stock** - Остаток
+ **inTransit** - Ожидание
+ **reserve** - Резерв
+ **quantity** - Доступно
+ **name** - Наименование
+ **code** - Код
+ **article** - Артикул (если имеется)
+ **price** - Себестоимость
+ **salePrice** - Цена продажи
+ **uom** - Единица измерения
  - **meta** - Метаданные единицы измерений
  - **name** - Наименование единицы измерений
+ **folder** - Ссылка на группу товара/модификации/серии
  - **meta** - Метаданные группы товара
  - **name** - Наименование группы
  - **pathName** - Наименование родительской группы
+ **image** - Ссылка на изображение товара/модификации/серии
+ **externalCode** - Внешний код сущности, по которой выводится остаток

### Получить Остатки

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|
|store.id|  `string` (optional) id склада, по которому нужно произвести фильтрацию.|
|product.id|  `string` Параметр для фильтрации по нескольким id товаров. Пару параметр-значение применительно к этому параметру можно указывать несколько раз. Значение параметра - id товара, который должен быть включен в выборку. В результате применения данного фильтра в отфильтрованную выборку попадут только те товары, id которых были перечислены в этом параметре. Данный параметр фильтрации можно комбинировать с параметрами `consignment.id` и `variant.id` Если в массиве UUID будет передан только 1 товар, то в итоговую выборку попадут только остатки по 1 товару. Примеры параметра фильтрации:- `product.id=656c4032-8552-11e6-8a84-bae500000044&product.id=706b9cd3-8552-11e6-8a84-bae500000045&product.id=7a5f0ed5-8552-11e6-8a84-bae500000046` - `consignment.id=656c4032-8552-11e6-8a84-bae500000044&consignment.id=706b9cd3-8552-11e6-8a84-bae500000045&product.id=7a5f0ed5-8552-11e6-8a84-bae500000046`- `variant.id=656c4032-8552-11e6-8a84-bae500000044&consignment.id=706b9cd3-8552-11e6-8a84-bae500000045&product.id=7a5f0ed5-8552-11e6-8a84-bae500000046`|
|consignment.id |  `string` (optional) Параметр для фильтрации по нескольким id серий.Пару параметр-значение применительно к этому параметру можно указывать несколько раз. Значение параметра - id серии, которая должна быть включена в выборку. В результате применения данного фильтра в отфильтрованную выборку попадут только те серии, id которых были перечислены в этом параметре. Данный параметр фильтрации можно комбинировать с параметрами `product.id` и `variant.id` Примеры параметра фильтрации: - `consignment.id=656c4032-8552-11e6-8a84-bae500000044&consignment.id=706b9cd3-8552-11e6-8a84-bae500000045&consignment.id=7a5f0ed5-8552-11e6-8a84-bae500000046` - `consignment.id=656c4032-8552-11e6-8a84-bae500000044&consignment.id=706b9cd3-8552-11e6-8a84-bae500000045&product.id=7a5f0ed5-8552-11e6-8a84-bae500000046`- `variant.id=656c4032-8552-11e6-8a84-bae500000044&variant.id=706b9cd3-8552-11e6-8a84-bae500000045&consignment.id=7a5f0ed5-8552-11e6-8a84-bae500000046` - `variant.id=656c4032-8552-11e6-8a84-bae500000044&consignment.id=706b9cd3-8552-11e6-8a84-bae500000045&product.id=7a5f0ed5-8552-11e6-8a84-bae500000046`|
|variant.id |  `string` (optional) Параметр для фильтрации по нескольким id модификаций. Пару параметр-значение применительно к этому параметру можно указывать несколько раз. Значение параметра - id модификации, которая должна быть включена в выборку. В результате применения данного фильтра в отфильтрованную выборку попадут только те модификации, id которых были перечислены в этом параметре. Данный параметр фильтрации можно комбинировать с параметрами `product.id` и `consignment.id` Примеры параметра фильтрации:- `variant.id=656c4032-8552-11e6-8a84-bae500000044&variant.id=706b9cd3-8552-11e6-8a84-bae500000045` - `variant.id=656c4032-8552-11e6-8a84-bae500000044&variant.id=706b9cd3-8552-11e6-8a84-bae500000045&consignment.id=7a5f0ed5-8552-11e6-8a84-bae500000046` - `variant.id=656c4032-8552-11e6-8a84-bae500000044&consignment.id=706b9cd3-8552-11e6-8a84-bae500000045&product.id=7a5f0ed5-8552-11e6-8a84-bae500000046`|
|productFolder.id|  `string` (optional) id группы товаров, по которой нужно произвести фильтрацию.|
|search|  `string` (optional) Фильтр товаров и услуг по указанной поисковой строке. Фильтрация происходит по наименованию товаров и услуг.|
|stockMode|  `string` (optional) **Default: nonEmpty** Вид Остатка.|
|groupBy|  `string` (optional) тип, по которому нужно сгруппировать выдачу.По умолчанию параметр groupBy имеет значение variant. Если вы хотите увидеть объекты типа consignment, или только объекты типа product, необходимо выставить соответствующее значение параметра. <ul><li>groupBy=product - выдает только товары</li><li>groupBy=variant - выдает товары и модификации</li><li>groupBy=consignment - выдает товары, модификации, серии</li></ul>|
|moment|  `string` (optional) Момент времени, на который нужно вывести остатки. Передаётся в виде строки в формате `ГГГГ-ММ-ДД ЧЧ-ММ-СС`|
|characteristics|  `string` (optional) id склада, по которому нужно произвести фильтрацию. Фильтрация по имени и значению характеристик. Доступна только если используется группировка по модификациям (groupBy=variant). Параметры передаются в виде **characteristics.<имя_атрибута>=<значение атрибута>**. Возможна фильтрация по нескольким характеристикам. Для этого нужно передать несколько параметров аналогичных данному, с различными именами характеристик. Пример: <p><code>/stock/all?characteristics.цвет=синий</code></p>|
|includeRelated|  `boolean` (optional) Вывод остатков по модификациям и сериям товаров. Параметр позволяет включить в выборку остатки по модификациям и сериям для товаров. Необходимым условием для применения параметра является **обязательное** наличие фильтрации по товарам или модификациям или их комбинации. При выбранном значении `includeRelated=true` будут включены все остатки для товаров, модификаций и серий, указанных в параметрах фильтрации.<br> При использовании параметра устанавливается параметр группировки `groupBy=consignment`, переданные значения для `groupBy` будут проигнорированы.|  
 
> Запрос на получение отчёта "Все Остатки".

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/stock/all"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчёта.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/report/stock/all",
    "type": "stock",
    "mediaType": "application/json",
    "size": 26,
    "limit": 10,
    "offset": 0,
    "nextHref": "http://online.moysklad.ru/api/remap/1.2/report/stock/all?limit=10&offset=10"
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/c02e3a5c-007e-11e6-9464-e4de00000006?expand=supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "stock": -30,
      "inTransit": 0,
      "reserve": 0,
      "quantity": -30,
      "name": "Товар",
      "code": "one1",
      "article": "Ar23",
      "price": 0,
      "salePrice": 346347237000,
      "uom": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/cc99c055-fa34-11e5-9464-e4de00000069?expand=supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "stock": 4,
      "inTransit": 0,
      "reserve": 0,
      "quantity": 4,
      "name": "ТоварБезШК",
      "code": "00006",
      "price": 0,
      "salePrice": 0,
      "uom": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/e8f5f9ff-fa34-11e5-9464-e4de0000008a?expand=supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "stock": 1,
      "inTransit": 0,
      "reserve": 0,
      "quantity": 1,
      "name": "Товар с модой без ШК",
      "code": "00008",
      "price": 0,
      "salePrice": 0,
      "uom": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/e8f9d714-fa34-11e5-9464-e4de0000008d?expand=product.supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      },
      "stock": 1,
      "inTransit": 0,
      "reserve": 0,
      "quantity": 1,
      "name": "Товар с модой без ШК (1)",
      "code": "00208",
      "price": 0,
      "salePrice": 0,
      "uom": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/e8fc24b5-fa34-11e5-9464-e4de00000091?expand=product.supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      },
      "stock": 1,
      "inTransit": 0,
      "reserve": 0,
      "quantity": 1,
      "name": "Товар с модой без ШК (2)",
      "code": "00209",
      "price": 0,
      "salePrice": 0,
      "uom": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/e91042b4-fa34-11e5-9464-e4de00000095?expand=product.supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      },
      "stock": 1,
      "inTransit": 0,
      "reserve": 0,
      "quantity": 1,
      "name": "Товар с модой без ШК (3)",
      "code": "00210",
      "price": 0,
      "salePrice": 0,
      "uom": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/daf1186d-fa34-11e5-9464-e4de0000006f?expand=supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "stock": 1,
      "inTransit": 0,
      "reserve": 0,
      "quantity": 1,
      "name": "ТоварСМодой_и_ШК",
      "code": "00007",
      "price": 0,
      "salePrice": 0,
      "uom": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/db1a888a-fa34-11e5-9464-e4de00000073?expand=product.supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      },
      "stock": 1,
      "inTransit": 0,
      "reserve": 0,
      "quantity": 1,
      "name": "ТоварСМодой_и_ШК (1)",
      "code": "00205",
      "price": 0,
      "salePrice": 0,
      "uom": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/db2066c8-fa34-11e5-9464-e4de00000077?expand=product.supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      },
      "stock": 1,
      "inTransit": 0,
      "reserve": 0,
      "quantity": 1,
      "name": "ТоварСМодой_и_ШК (2)",
      "code": "00206",
      "price": 0,
      "salePrice": 0,
      "uom": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/db22f3e8-fa34-11e5-9464-e4de0000007b?expand=product.supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      },
      "stock": 1,
      "inTransit": 0,
      "reserve": 0,
      "quantity": 1,
      "name": "ТоварСМодой_и_ШК (3)",
      "code": "00207",
      "price": 0,
      "salePrice": 0,
      "uom": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/d3e2dcd6-f648-11e5-8a84-bae500000074?expand=supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "stock": -6438,
      "inTransit": 0,
      "reserve": 0,
      "quantity": -6438,
      "name": "ТоварСоСтраной",
      "code": "00002",
      "price": 0,
      "salePrice": 0,
      "uom": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a?expand=supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "stock": -113,
      "inTransit": 0,
      "reserve": 0,
      "quantity": -113,
      "name": "Мяч",
      "code": "00003",
      "price": 0,
      "salePrice": 0,
      "uom": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/fd867506-f67d-11e5-8a84-bae50000006e?expand=product.supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      },
      "stock": -21,
      "inTransit": 0,
      "reserve": 0,
      "quantity": -21,
      "name": "Мяч (Футбольный)",
      "code": "00002",
      "price": 0,
      "salePrice": 0,
      "uom": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/fd92dbb9-f67d-11e5-8a84-bae500000076?expand=product.supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      },
      "stock": -1,
      "inTransit": 0,
      "reserve": 0,
      "quantity": -1,
      "name": "Мяч (Волейбольный)",
      "code": "00004",
      "price": 0,
      "salePrice": 0,
      "uom": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/be903062-f504-11e5-8a84-bae50000019a?expand=supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "stock": 69,
      "inTransit": 0,
      "reserve": 20,
      "quantity": 49,
      "name": "Трололоша",
      "code": "00001",
      "price": 50260.86956521739,
      "salePrice": 123000,
      "uom": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/d1bef0a1-ffe7-11e5-9464-e4de0000001c?expand=product.supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      },
      "stock": -1,
      "inTransit": 0,
      "reserve": 0,
      "quantity": -1,
      "name": "ТОварИщ (10)",
      "code": "00214",
      "article": "Артикулс",
      "price": 0,
      "salePrice": 346347237000,
      "uom": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "folder": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/0c78adde-ffe3-11e5-9464-e4de000000a2",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/productFolder/metadata",
          "type": "productfolder",
          "mediaType": "application/json"
        },
        "name": "Товары Из кастомной группы",
        "pathName": "Группа"
      },
      "image": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/download/e2ba4863-ffed-11e5-9464-e4de00000034",
          "mediaType": "application/octet-stream"
        },
        "updated": "2017-01-11 14:54:10",
        "size": 0,
        "miniature": {
          "href": "https://online.moysklad.ru/api/remap/1.2/download/e2ba4863-ffed-11e5-9464-e4de00000034?miniature=true",
          "mediaType": "image/png"
        },
        "tiny": {
          "href": "https://online.moysklad.ru/app/download/e2ba38fd-ffed-11e5-9464-e4de00000033.png",
          "mediaType": "image/png"
        }
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    }
  ]
}
```
  
#### Остатки по складам 
Отчёт "Остатки по складам" представляет собой массив объектов, каждый из
которых показывает Остаток по каждому из товаров на каждом из складов.
#### Атрибуты объекта отчёта:
+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные), представляющие собой ссылку на позицию, по которой выдаётся Остаток
+ **stockByStore** - Объект, представляющие собой Остатки по складам (описание ниже).

#### Остатки по складам
Поле "Остатки по складам" (stockByStore) представляет собой выдачу из объектов со следующими атрибутами:
+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные), представляющие собой ссылку на склад, по которому выводится Остаток
+ **name** - Наименование склада
+ **stock** - Остаток
+ **reserve** - Резерв
+ **inTransit** - Ожидание

Размерность этого поля всегда равна количеству складов в системе.

### Получить Остатки по складам

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|
|product.id|  `string` (optional)    id товара по которому нужно произвести фильтрацию.|
|productFolder.id|  `string` (optional) id группы товаров, по которой нужно произвести фильтрацию.|
|search|  `string` (optional) Фильтр товаров и услуг по указанной поисковой строке. Фильтрация происходит по наименованию товаров и услуг.|
|stockMode|  `string` (optional) **Default: nonEmpty** Вид Остатка.|
|groupBy|  `string` (optional) тип, по которому нужно сгруппировать выдачу.По умолчанию параметр groupBy имеет значение variant. Если вы хотите увидеть объекты типа consignment, или только объекты типа product, необходимо выставить соответствующее значение параметра. <ul><li>groupBy=product - выдает только товары</li><li>groupBy=variant - выдает товары и модификации</li><li>groupBy=consignment - выдает товары, модификации, серии</li></ul>|
 
> Запрос на получение отчёта "Остатки по складам".

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/stock/bystore"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчёта.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/report/stock/bystore",
    "type": "stockbystore",
    "mediaType": "application/json",
    "size": 225,
    "limit": 1000,
    "offset": 0,
    "nextHref": "http://online.moysklad.ru/api/remap/1.2/report/stock/bystore?limit=25&offset=25"
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/c02e3a5c-007e-11e6-9464-e4de00000006?expand=supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "stockByStore": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/86c857d6-0302-11e6-9464-e4de00000072",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json"
          },
          "name": "Не основной склад",
          "stock": -30,
          "reserve": 0,
          "inTransit": 0
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json"
          },
          "name": "Основной склад",
          "stock": 0,
          "reserve": 0,
          "inTransit": 0
        }
      ]
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/cc99c055-fa34-11e5-9464-e4de00000069?expand=supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "stockByStore": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/86c857d6-0302-11e6-9464-e4de00000072",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json"
          },
          "name": "Не основной склад",
          "stock": 0,
          "reserve": 0,
          "inTransit": 0
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json"
          },
          "name": "Основной склад",
          "stock": 4,
          "reserve": 0,
          "inTransit": 0
        }
      ]
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/e8f5f9ff-fa34-11e5-9464-e4de0000008a?expand=supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "stockByStore": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/86c857d6-0302-11e6-9464-e4de00000072",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json"
          },
          "name": "Не основной склад",
          "stock": 0,
          "reserve": 0,
          "inTransit": 0
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json"
          },
          "name": "Основной склад",
          "stock": 1,
          "reserve": 0,
          "inTransit": 0
        }
      ]
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/e8f9d714-fa34-11e5-9464-e4de0000008d?expand=product.supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      },
      "stockByStore": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/86c857d6-0302-11e6-9464-e4de00000072",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json"
          },
          "name": "Не основной склад",
          "stock": 0,
          "reserve": 0,
          "inTransit": 0
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json"
          },
          "name": "Основной склад",
          "stock": 1,
          "reserve": 0,
          "inTransit": 0
        }
      ]
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/e8fc24b5-fa34-11e5-9464-e4de00000091?expand=product.supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      },
      "stockByStore": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/86c857d6-0302-11e6-9464-e4de00000072",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json"
          },
          "name": "Не основной склад",
          "stock": 0,
          "reserve": 0,
          "inTransit": 0
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json"
          },
          "name": "Основной склад",
          "stock": 1,
          "reserve": 0,
          "inTransit": 0
        }
      ]
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/e91042b4-fa34-11e5-9464-e4de00000095?expand=product.supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      },
      "stockByStore": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/86c857d6-0302-11e6-9464-e4de00000072",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json"
          },
          "name": "Не основной склад",
          "stock": 0,
          "reserve": 0,
          "inTransit": 0
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json"
          },
          "name": "Основной склад",
          "stock": 1,
          "reserve": 0,
          "inTransit": 0
        }
      ]
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/daf1186d-fa34-11e5-9464-e4de0000006f?expand=supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "stockByStore": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/86c857d6-0302-11e6-9464-e4de00000072",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json"
          },
          "name": "Не основной склад",
          "stock": 0,
          "reserve": 0,
          "inTransit": 0
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json"
          },
          "name": "Основной склад",
          "stock": 1,
          "reserve": 0,
          "inTransit": 0
        }
      ]
    }
  ]
}
```
