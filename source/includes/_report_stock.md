# Отчеты
## Отчет Остатки
Средствами JSON API можно запросить отчет "Остатки" по всем товарам и по складам.
Больше об Остатках и работе с ними в основном интерфейсе
 вы можете прочитать в нашей службе поддержки по по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203319073-%D0%9E%D1%81%D1%82%D0%B0%D1%82%D0%BA%D0%B8).
### Доступ к отчету Остатки
Для доступа к отчету Остатки через API каких-либо дополнительных прав не требуется.
На отображение товаров в отчете Остатки влияют настройки видимости товаров и складов для пользователя,
под именем которого запрашивается отчет Остатки.
Себестоимость, цена закупки, прибыль отображаются в Остатках при наличии у пользователя права <Видеть себестоимость, цену закупки и прибыль товаров>.

#### Все Остатки 
Отчет "Все Остатки" представляет собой выдачу из объектов, каждый из
которых показывает Остаток по каждому из товаров.
#### Атрибуты объекта отчета:
+ **meta** - [Метаданные](#metadannye), представляющие собой ссылку на товар, модификацию или серию, по которой выдается Остаток
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

#### Атрибуты доступные для фильтрации

Результаты отчета можно отфильтровать, используя параметр filter.

+ **store** - параметр для фильтрации по нескольким складам. Можно использовать операторы `=` и `!=`. Значение параметра - ссылка на склад, который должен быть учтен в выборке или исключен из нее. Можно передать несколько значений.
+ **product** - параметр для фильтрации по нескольким товарам. Можно использовать операторы `=` и `!=`. Значение параметра - ссылка на товар, который должен быть включен в выборку или исключен из нее. Можно передать несколько значений. Данный параметр фильтрации можно комбинировать с параметрами `consignment` и `variant`.
+ **variant** - параметр для фильтрации по нескольким модификациям. Можно использовать операторы `=` и `!=`. Значение параметра - ссылка на модификацию, которая должна быть включена в выборку или исключена из нее. Можно передать несколько значений. Данный параметр фильтрации можно комбинировать с параметрами `product` и `consignment`.
+ **consignment** - параметр для фильтрации по нескольким сериям. Можно использовать операторы `=` и `!=`. Значение параметра - ссылка на серию, которая должна быть включена в выборку или исключена из нее. Можно передать несколько значений. Данный параметр фильтрации можно комбинировать с параметрами `product` и `variant`.
+ **productFolder** - параметр для фильтрации по нескольким группам товаров.  Можно использовать операторы `=` и `!=`. Значение параметра - ссылка на группу товаров, которая должна быть включена в выборку или исключена из нее. Можно передать несколько значений.
+ **stockMode** - параметр для фильтрации по значению остатка. Значение по умолчанию all. Доступные значения:
  + all - любое значение остатка
  + positiveOnly - положительный остаток
  + negativeOnly - отрицательный остаток
  + empty - нулевой остаток
  + nonEmpty - ненулевой остаток
  + underMinimum - остаток ниже неснижаемого остатка
+ **quantityMode** - параметр для фильтрации по значению доступно. Значение по умолчанию nonEmpty. Доступные значения:
  + all - любое значение доступно
  + positiveOnly - положительное доступно
  + negativeOnly - отрицательное доступно
  + empty - нулевое доступно
  + nonEmpty - ненулевое доступно
  + underMinimum - доступно ниже неснижаемого остатка
+ **moment** - момент времени, на который нужно вывести остатки. Передается в виде строки в формате `ГГГГ-ММ-ДД ЧЧ-ММ-СС`
+ **stockDaysFrom** - параметр для фильтрации по количеству дней на складе. Передавать нужно целое число. В выборку попадут товары, у которых количество дней на складе больше или равно указанному. Данный параметр фильтрации можно комбинировать с параметром `stockDaysTo`.
+ **stockDaysTo** - параметр для фильтрации по количеству дней на складе. Передавать нужно целое число. В выборку попадут товары, у которых количество дней на складе меньше или равно указанному. Данный параметр фильтрации можно комбинировать с параметром `stockDaysFrom`.
+ **soldByWeight** - параметр для фильтрации по признаку весового товара. Возможные значения: true, false.
+ **reserveOnly** - параметр для фильтрации по значению резерва. Если передать true, в выборку попадут только товары с резервом.
+ **inTransitOnly** - параметр для фильтрации по значению ожидания. Если передать true, в выборку попадут только товары с ожиданием.
+ **archived** - параметр для фильтрации по архивности товаров. Возможные значения: true, false. Для выдачи как архивных, так и не архивных товаров нужно передать сразу два значения true и false.
+ **supplier** - параметр для фильтрации по нескольким поставщикам.  Можно использовать операторы `=` и `!=`. Значение параметра - ссылка на контрагента или организацию. В выборку будут включены или исключены товары с указанными поставщиками. Можно передать пустое значение, тогда в выборку попадут товары с незаполненным или заполненным поставщиком.
+ **search** - специальный параметр текстового поиска. Поиск осуществлятся по вхождению подстроки в названия товаров, модификаций, серий. Для данного параметра можно использовать оператор `=` и специальный оператор `!~`, который исключит из выборки товары с вхождением указанной подстроки.

Для параметров фильтрации **product**, **variant**, **consignment**, **productFolder** и **search** в рамках одного запроса можно использовать только одинаковые операторы (для **search** оператор `!~` сочетается с оператором `!=` остальных полей).


Примеры фильтрации: 

- `filter=store=https://online.moysklad.ru/api/remap/1.2/entity/store/656c4032-8667-11e6-8a84-bae500003321`
- `filter=productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1`
- `filter=productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1;productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b2`
- `filter=product=https://online.moysklad.ru/api/remap/1.2/entity/product/656c4032-8552-11e6-8a84-bae500000044;product=https://online.moysklad.ru/api/remap/1.2/entity/service/706b9cd3-8552-11e6-8a84-bae500000045;product=https://online.moysklad.ru/api/remap/1.2/entity/bundle/7a5f0ed5-8552-11e6-8a84-bae500000046`
- `filter=consignment=https://online.moysklad.ru/api/remap/1.2/entity/consignment/656c4032-8552-11e6-8a84-bae500000044;consignment=https://online.moysklad.ru/api/remap/1.2/entity/consignment/706b9cd3-8552-11e6-8a84-bae500000045;product=https://online.moysklad.ru/api/remap/1.2/entity/product/7a5f0ed5-8552-11e6-8a84-bae500000046`
- `filter=variant=https://online.moysklad.ru/api/remap/1.2/entity/variant/656c4032-8552-11e6-8a84-bae500000044;consignment=https://online.moysklad.ru/api/remap/1.2/entity/consignment/706b9cd3-8552-11e6-8a84-bae500000045;product=https://online.moysklad.ru/api/remap/1.2/entity/product/7a5f0ed5-8552-11e6-8a84-bae500000046`
- `filter=store=https://online.moysklad.ru/api/remap/1.2/entity/store/656c4032-8667-11e6-8a84-bae500003321;productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1;variant=https://online.moysklad.ru/api/remap/1.2/entity/variant/656c4032-8552-11e6-8a84-bae500000044;consignment=https://online.moysklad.ru/api/remap/1.2/entity/consignment/706b9cd3-8552-11e6-8a84-bae500000045;product=https://online.moysklad.ru/api/remap/1.2/entity/product/7a5f0ed5-8552-11e6-8a84-bae500000046`
- `filter=stockMode=all`
- `filter=quantityMode=all`
- `filter=stockMode=all;quantityMode=all`
- `filter=moment=2019-07-10 12:00:00`
- `filter=stockDaysFrom=10;stockDaysTo=50`
- `filter=soldByWeight=true`
- `filter=reserveOnly=true`
- `filter=inTransitOnly=true`
- `filter=archived=true`
- `filter=archived=false;archived=true`
- `filter=supplier=https://online.moysklad.ru/api/remap/1.2/entity/counterparty/656c4032-8667-11e6-8a84-bae5000033aa`
- `filter=search=див`

#### Фильтрация по дополнительным полям и характеристикам

C помощью параметра filter выборку также можно фильтровать по значениям дополнительных полей товаров и характеристик модификаций.

Для фильтрации по значению дополнительного поля, нужно передать ссылку на дополнительное поле и его значение: 

`filter=https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/<id>=<Значение>`

Для фильтрации по значению дополнительных полей типа строка, текст и ссылка нужно использовать оператор `=`. Также можно использовать операторы `=` и `!=` с пустым значением, чтобы получить товары только с незаполеным дополнительным полем или только заполненым, соответственно.

Для фильтрации по значению дополнительных полей типа целое число, вещественное число, дата можно использовать операторы `=`, `>=`, `<=`. Также можно использовать операторы `=` и `!=` с пустым значением, чтобы получить товары только с незаполеным дополнительным полем или только заполненым, соответственно. Для дополнительного поля типа дата значение передается в виде строки в формате `ГГГГ-ММ-ДД ЧЧ-ММ-СС`.

Для фильтрации по значению дополнительных полей типа справочник можно использовать операторы `=` и `!=`. В качестве значения нужно передавать ссылку на объект справочника. Также можно использовать операторы `=` и `!=` с пустым значением, чтобы получить товары только с незаполеным дополнительным полем или только заполненым, соответственно.

Пример фильтрации по дополнительному полю типа справочник складов: `filter=https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/ea12a6dd-79e5-11e9-9ff4-31500040893d=http://localhost/api/remap/1.2/entity/store/302f2a81-9977-11e9-9109-f8fc00020e02`

Пример фильтрации по дополнительному полю типа пользовательский справочник: `filter=https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/ea12a6dd-79e5-11e9-9ff4-31500040893d=http://online.moysklad.ru/api/remap/1.2/entity/customentity/8955249d-997d-11e9-9ff4-3150000e65c3/8955314d-997d-11e9-9ff4-3150000e65c4`

Для фильтрации по значению дополнительных полей типа флажок нужно использовать оператор `=`. Возможные значения: true, false.

Фильтрация по дополнительным полям типа файл не поддерживается.

Для фильтрации по значению характеристики нужно передать ссылку на характеристику и значение:

`filter=https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/<id>=<Значение>`

Для фильтрации по значению характеристики нужно использовать оператор `=`. Также можно использовать операторы `=` и `!=` с пустым значением, чтобы получить товары или модификации только с незаполеной харакетеристикой или только заполненой, соответственно. 

#### Атрибуты доступные для сортировки

Результаты отчета можно отсортировать, используя параметр [order](#sortirowka-ob-ektow).

+ **pathName** - по группе товаров
+ **name** - по наименованию
+ **code** - по коду
+ **productCode** - по артикулу
+ **stock** - по значению остатка
+ **minimumBalance** - по неснижаемому остатку
+ **reserve** - по значению резерва
+ **inTransit** - по значению ожидания
+ **quantity** - по значению доступно
+ **avgStockDays** - по количеству дней на складе
+ **price** - по себестоимости
+ **sumTotal** - по сумме себестоимости
+ **salePrice** - по цене продажи

По умолчанию выборка сортируется по группе товара и имени товара.

### Получить Остатки

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|
|groupBy|  `string` (optional) тип, по которому нужно сгруппировать выдачу.По умолчанию параметр groupBy имеет значение variant. Если вы хотите увидеть объекты типа consignment, или только объекты типа product, необходимо выставить соответствующее значение параметра. <ul><li>groupBy=product - выдает только товары</li><li>groupBy=variant - выдает товары и модификации</li><li>groupBy=consignment - выдает товары, модификации, серии</li></ul>|
|includeRelated|  `boolean` (optional) Вывод остатков по модификациям и сериям товаров. Параметр позволяет включить в выборку остатки по модификациям и сериям для товаров. Необходимым условием для применения параметра является **обязательное** наличие фильтрации по товарам или модификациям или их комбинации. При выбранном значении `includeRelated=true` будут включены все остатки для товаров, модификаций и серий, указанных в параметрах фильтрации.<br> При использовании параметра устанавливается параметр группировки `groupBy=consignment`, переданные значения для `groupBy` будут проигнорированы.|  
 
> Запрос на получение отчета "Все Остатки".

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/stock/all"
  -H "Authorization: Basic <Access-Token>"
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
      "images": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/d1bef0a1-ffe7-11e5-9464-e4de0000001c/images",
          "type": "image",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    }
  ]
}
```
  
#### Остатки по складам 
Отчет "Остатки по складам" представляет собой массив объектов, каждый из
которых показывает Остаток по каждому из товаров на каждом из складов.
#### Атрибуты объекта отчета:
+ **meta** - [Метаданные](#metadannye), представляющие собой ссылку на позицию, по которой выдается Остаток
+ **stockByStore** - Объект, представляющие собой Остатки по складам (описание ниже).

#### Остатки по складам
Поле "Остатки по складам" (stockByStore) представляет собой выдачу из объектов со следующими атрибутами:

+ **meta** - [Метаданные](#metadannye), представляющие собой ссылку на склад, по которому выводится Остаток
+ **name** - Наименование склада
+ **stock** - Остаток
+ **reserve** - Резерв
+ **inTransit** - Ожидание

Размерность этого поля всегда равна количеству складов в системе.

#### Атрибуты доступные для фильтрации

Результаты отчета можно отфильтровать, используя параметр filter. Нельзя указывать пустые значения. Поддерживается фильтрация только на равенство.

+ **store** - ссылка на склад, для которого нужно построить отчет.
+ **product** - ссылка на товар которыму нужно произвести фильтрацию.
+ **variant** - ссылка на модификация, по которой нужно произвести фильтрацию.
+ **consignment** - ссылка на серию, по которой нужно произвести фильтрацию.
+ **productFolder** - ссылка на группу товаров, по которой нужно произвести фильтрацию.
+ **stockMode** - параметр для фильтрации по значению остатка. Значение по умолчанию nonEmpty. Доступные значения:
  + all - любое значение остатка
  + positiveOnly - положительный остаток
  + negativeOnly - отрицательный остаток
  + empty - нулевой остаток
  + nonEmpty - ненулевой остаток
  + underMinimum - остаток ниже неснижаемого остатка
+ **moment** - момент времени, на который нужно вывести остатки. Передается в виде строки в формате `ГГГГ-ММ-ДД ЧЧ-ММ-СС`
+ **soldByWeight** - параметр для фильтрации по признаку весового товара. Возможные значения: true, false.
+ **supplier** - параметр для фильтрации по поставщику. Значение параметра - ссылка на контрагента или организацию. В выборку будут включены товары с указанным поставщиком.
+ **search** - специальный параметр текстового поиска. Поиск осуществлятся по вхождению подстроки в названия товаров, модификаций, серий.

В одном запросе можно использовать только один из параметров **product**, **variant**, **consignment**, **productFolder** и **search**.

Примеры фильтрации:

- `filter=store=https://online.moysklad.ru/api/remap/1.2/entity/store/656c4032-8552-11e6-8a84-bae500000043`
- `filter=product=https://online.moysklad.ru/api/remap/1.2/entity/product/656c4032-8552-11e6-8a84-bae500000044`
- `filter=variant=https://online.moysklad.ru/api/remap/1.2/entity/variant/656c4032-8552-11e6-8a84-bae500000045`
- `filter=consignment=https://online.moysklad.ru/api/remap/1.2/entity/consignment/656c4032-8552-11e6-8a84-bae500000046`
- `filter=productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1`
- `filter=stockMode=all`
- `filter=moment=2019-07-10 12:00:00`
- `filter=soldByWeight=true`
- `filter=supplier=https://online.moysklad.ru/api/remap/1.2/entity/counterparty/656c4032-8667-11e6-8a84-bae5000033aa`
- `filter=search=див`

#### Фильтрация по дополнительным полям и характеристикам

C помощью параметра filter выборку также можно фильтровать по значениям дополнительных полей товаров и характеристик модификаций.

Для фильтрации по значению дополнительного поля, нужно передать ссылку на дополнительное поле и его значение: 

`filter=https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/<id>=<Значение>`

Для фильтрации по значению дополнительных полей типа строка, текст и ссылка нужно использовать оператор `=`.

Для фильтрации по значению дополнительных полей типа целое число, вещественное число, дата можно использовать операторы `=`, `>=`, `<=`. Для дополнительного поля типа дата значение передается в виде строки в формате `ГГГГ-ММ-ДД ЧЧ-ММ-СС`.

Для фильтрации по значению дополнительных полей типа справочник нужно использовать оператор `=`. В качестве значения нужно передавать ссылку на объект справочника.

Пример фильтрации по дополнительному полю типа справочник складов: `filter=https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/ea12a6dd-79e5-11e9-9ff4-31500040893d=http://localhost/api/remap/1.2/entity/store/302f2a81-9977-11e9-9109-f8fc00020e02`

Пример фильтрации по дополнительному полю типа пользовательский справочник: `filter=https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/ea12a6dd-79e5-11e9-9ff4-31500040893d=http://online.moysklad.ru/api/remap/1.2/entity/customentity/8955249d-997d-11e9-9ff4-3150000e65c3/8955314d-997d-11e9-9ff4-3150000e65c4`

Для фильтрации по значению дополнительных полей типа флажок нужно использовать оператор `=`. Возможные значения: true, false.

Фильтрация по дополнительным полям типа файл не поддерживается.

Для фильтрации по значению характеристики нужно передать ссылку на характеристику и значение:

`filter=https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/<id>=<Значение>`

Для фильтрации по значению характеристики нужно использовать оператор `=`. 

#### Атрибуты доступные для сортировки

Результаты отчета можно отсортировать, используя параметр [order](#sortirowka-ob-ektow).

+ **pathName** - по группе товара
+ **name** - по наименованию
+ **code** - по коду
+ **productCode** - по артикулу
+ **stockOnAllStores** - по количеству остатка на всех складах

По умолчанию выборка сортируется по группе товара и имени товара.

### Получить Остатки по складам

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|
|groupBy|  `string` (optional) тип, по которому нужно сгруппировать выдачу.По умолчанию параметр groupBy имеет значение variant. Если вы хотите увидеть объекты типа consignment, или только объекты типа product, необходимо выставить соответствующее значение параметра. <ul><li>groupBy=product - выдает только товары</li><li>groupBy=variant - выдает товары и модификации</li><li>groupBy=consignment - выдает товары, модификации, серии</li></ul>|
 
> Запрос на получение отчета "Остатки по складам".

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/stock/bystore"
  -H "Authorization: Basic <Access-Token>"
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
