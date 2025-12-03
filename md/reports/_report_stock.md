<div class="banner-wrapper">
  <style>
    .banner {
      margin-top: 20px;
      margin-bottom: 20px;
      padding: 20px;
      border-radius: 8px;
      background-color: #F8FAFF;
      border: 1px solid #086EFC;
    }
    .banner ul {
      padding: 0;
      line-height: 2;
    }
    .banner ul li {
      margin-left: 32px;
      line-height: 2;
    }
    .banner h4 {
      padding: 10px 0;
      font-size: 24px;
    }
    .banner p {
      margin: 10px 0 0 0;
      padding: 0;
    }
    html.dark .banner,
    body.dark .banner {
        background-color: #0B1F3A;
        border-color: #3B82F6;
        color: #E5E7EB;
    }
  </style>

  <div class="banner">
    <h4>Изменение стоимости лимита запросов отчета Остатки</h4>
    <ul>
      С 15 декабря 2025 года изменяется вес API-запросов:
      <li>
        <code>GET https://api.moysklad.ru/api/remap/1.2/report/stock/all</code>  
        <br />
        — 2 единицы с 15 декабря 2025 года  
        <br />
        — 5 единиц с января 2026 года
      </li>
      <li>
        <code>GET https://api.moysklad.ru/api/remap/1.2/report/stock/bystore</code>  
        <br />
        — 2 единицы с 15 декабря 2025 года  
        <br />
        — 5 единиц с января 2026 года
      </li>
    </ul>
  </div>
</div>

# Отчеты
## Отчет Остатки
Отчет об остатках в МоемСкладе доступен в расширенном и кратком виде. Запросить отчет можно с помощью JSON API. Также можно подписаться на вебхуки на изменение остатков. Используйте JSON API, если остатки меняются часто, и вы хотите запрашивать их каждые несколько минут. Если остатки меняются реже, чем раз в несколько минут, и вы хотите получать уведомления об изменениях, используйте вебхуки. 

Для работы с отчетом дополнительных прав не требуется. 

На содержание отчета влияют настройки видимости документов, доступных пользователю, который запросил отчет. При отсутствии соответствующих прав видимости у пользователя в отчете могут не отображаться: 

- данные по конкретным товарам и складам; 
- себестоимость, цена закупки, прибыль.

Подробнее об остатках и работе с ними читайте в статье [Остатки](https://support.moysklad.ru/hc/ru/articles/203319073-%D0%9E%D1%81%D1%82%D0%B0%D1%82%D0%BA%D0%B8). 

### Расширенный отчет об остатках 
Расширенный отчет об остатках — это подробный отчет, в котором собраны данные обо всех товарах с указанием всей необходимой информации о товаре (цены, изображение и тд.). Используйте отчет, чтобы получить детальную информацию о товарах или периодически проводить полную синхронизацию с МоимСкладом, например один раз в день. Однако это достаточно долгий и тяжелый запрос, использовать его часто не рекомендуется.

#### Атрибуты объекта расширенного отчета

| Название         | Тип                                                       | Описание                                                                                                                                                                         |
| ---------------- | :-------------------------------------------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **article**      | String(255)                                               | Артикул                                                                                                                                                                          |
| **code**         | String(255)                                               | Код<br>`+Обязательное при ответе`                                                                                                                                                |
| **externalCode** | String(255)                                               | Внешний код сущности, по которой выводится остаток<br>`+Обязательное при ответе`                                                                                                 |
| **folder**       | Object                                                    | Группа Товара/Модификации/Cерии. [Подробнее тут](#/reports/report-stock#4-gruppa)<br>                                                  |
| **image**        | [Meta](#/general#3-metadannye) | Метаданные изображения Товара/Модификации/Серии                                                                                                                                  |
| **inTransit**    | Float                                                     | Ожидание<br>`+Обязательное при ответе`                                                                                                                                           |
| **meta**         | [Meta](#/general#3-metadannye) | Метаданные Товара/Модификации/Серии по которой выдается остаток<br>`+Обязательное при ответе`                                                                                    |
| **name**         | String(255)                                               | Наименование<br>`+Обязательное при ответе`                                                                                                                                       |
| **price**        | Float                                                     | Себестоимость в копейках<br>`+Обязательное при ответе`                                                                                                                               |
| **quantity**     | Float                                                     | Доступно<br>`+Обязательное при ответе`                                                                                                                                           |
| **reserve**      | Float                                                     | Резерв<br>`+Обязательное при ответе`                                                                                                                                             |
| **salePrice**    | Float                                                     | Цена продажи<br>`+Обязательное при ответе`                                                                                                                                           |
| **stock**        | Float                                                     | Остаток<br>`+Обязательное при ответе`                                                                                                                                            |
| **stockDays**    | Int                                                       | Количество дней на складе<br>`+Обязательное при ответе`                                                                                                                          |
| **uom**          | Object                                                    | Единица измерения. [Подробнее тут](#/reports/report-stock#4-edinica-izmereniya)<br>`+Обязательное при ответе`                           |

#### Атрибуты вложенных сущностей
#### Единица измерения

Кодом сущности для Единиц измерения в составе JSON API является ключевое слово **uom**.

| Название | Тип                                                       | Описание                                                     |
| -------- | :-------------------------------------------------------- | :----------------------------------------------------------- |
| **meta** | [Meta](#/general#3-metadannye) | Метаданные единицы измерений<br>`+Обязательное при ответе`   |
| **name** | String(255)                                               | Наименование единицы измерений<br>`+Обязательное при ответе` |

#### Группа

| Название     | Тип                                                       | Описание                                                       |
| ------------ | :-------------------------------------------------------- | :------------------------------------------------------------- |
| **meta**     | [Meta](#/general#3-metadannye) | Метаданные группы товара<br>`+Обязательное при ответе`         |
| **name**     | String(255)                                               | Наименование группы<br>`+Обязательное при ответе`              |
| **pathName** | String                                                    | Наименование родительской группы<br>`+Обязательное при ответе` |

#### Атрибуты доступные для фильтрации (для расширенного отчета)

Результаты отчета можно отфильтровать, используя параметр filter.

| Название           | Тип         | Фильтрация | Описание                                                                                                                                                                                                                                                                                            |
|--------------------| :---------- | :--------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **archived**       | Boolean     | `=`        | параметр для фильтрации по архивности товаров. Возможные значения: true, false. Для выдачи как архивных, так и не архивных товаров нужно передать сразу два значения true и false.                                                                                                                  |
| **consignment**    | Object      | `=` `!=`   | параметр для фильтрации по нескольким сериям. Значение параметра - ссылка на серию, которая должна быть включена в выборку или исключена из нее. Можно передать несколько значений. Данный параметр фильтрации можно комбинировать с параметрами `product` и `variant`.                             |
| **inTransitOnly**  | Boolean     | `=`        | параметр для фильтрации по значению ожидания. Если передать true, в выборку попадут только товары с ожиданием.                                                                                                                                                                                      |
| **moment**         | DateTime    | `=`        | момент времени, на который нужно вывести остатки. Передается в виде строки в [формате дата-время](#/general#3-format-daty-i-vremeni)                                                                                                                                                                |
| **product**        | Object      | `=` `!=`   | параметр для фильтрации по нескольким товарам. Значение параметра - ссылка на товар, который должен быть включен в выборку или исключен из нее. Можно передать несколько значений. Данный параметр фильтрации можно комбинировать с параметрами `consignment` и `variant`.                          |
| **productFolder**  | Object      | `=`        | параметр для фильтрации по группе товаров. Значение параметра - ссылка на группу товаров, которая должна быть включена в выборку или исключена из нее. Можно передать только одно значение.                                                                                                         |
| **withSubFolders** | Boolean     | `=`        | параметр учета вложенных подгрупп. Работает только при наличии фильтра по `productFolder`. По умолчанию `true`, выводятся товары из дочерних подгрупп фильтруемой группы / групп товаров. При передаче `false` выводятся только товары из фильтруемой группы / групп, без учета подгрупп.           |
| **quantityMode**   | Enum        | `=`        | параметр для фильтрации по значению доступно. Значение по умолчанию nonEmpty. [Доступные значения](#/reports/report-stock#5-dostupnye-znacheniya-dlya-quantitymode)                                                                                                                                 |
| **reserveOnly**    | Boolean     | `=`        | параметр для фильтрации по значению резерва. Если передать true, в выборку попадут только товары с резервом.                                                                                                                                                                                        |
| **search**         | String(255) | `=` `!~`   | специальный параметр текстового поиска. Поиск осуществляется по вхождению подстроки в названия товаров, модификаций, серий.                                                                                                                                                                         |
| **soldByWeight**   | Boolean     | `=`        | параметр для фильтрации по признаку весового товара. Возможные значения: true, false.                                                                                                                                                                                                               |
| **stockDaysFrom**  | Int         | `=`        | параметр для фильтрации по количеству дней на складе. Передавать нужно целое число. В выборку попадут товары, у которых количество дней на складе больше или равно указанному. Данный параметр фильтрации можно комбинировать с параметром `stockDaysTo`.                                           |
| **stockDaysTo**    | Int         | `=`        | параметр для фильтрации по количеству дней на складе. Передавать нужно целое число. В выборку попадут товары, у которых количество дней на складе меньше или равно указанному. Данный параметр фильтрации можно комбинировать с параметром `stockDaysFrom`.                                         |
| **stockMode**      | Enum        | `=`        | параметр для фильтрации по значению остатка. Значение по умолчанию all. [Доступные значения](#/reports/report-stock#5-dostupnye-znacheniya-dlya-stockmode)                                                                                                                                          |
| **store**          | Object      | `=` `!=`   | параметр для фильтрации по нескольким складам. Значение параметра - ссылка на склад, который должен быть учтен в выборке или исключен из нее. Можно передать несколько значений.                                                                                                                    |
| **supplier**       | Object      | `=` `!=`   | параметр для фильтрации по нескольким поставщикам. Значение параметра - ссылка на контрагента или организацию. В выборку будут включены или исключены товары с указанными поставщиками. Можно передать пустое значение, тогда в выборку попадут товары с незаполненным или заполненным поставщиком. |
| **variant**        | Object      | `=` `!=`   | параметр для фильтрации по нескольким модификациям. Значение параметра - ссылка на модификацию, которая должна быть включена в выборку или исключена из нее. Можно передать несколько значений. Данный параметр фильтрации можно комбинировать с параметрами `product` и `consignment`.             |

##### Доступные значения для stockMode (для расширенного отчета)
Значение по умолчанию all.

| Значение         | Описание                            |
| ---------------- | ----------------------------------- |
| **all**          | Любое значение остатка              |
| **positiveOnly** | Положительный остаток               |
| **negativeOnly** | Отрицательный остаток               |
| **empty**        | Нулевой остаток                     |
| **nonEmpty**     | Ненулевой остаток                   |
| **underMinimum** | Остаток ниже неснижаемого остатка   |

##### Доступные значения для quantityMode
Значение по умолчанию nonEmpty.

| Значение         | Описание                            |
| ---------------- | ----------------------------------- |
| **all**          | Любое значение остатка              |
| **positiveOnly** | Положительный остаток               |
| **negativeOnly** | Отрицательный остаток               |
| **empty**        | Нулевой остаток                     |
| **nonEmpty**     | Ненулевой остаток                   |
| **underMinimum** | Остаток ниже неснижаемого остатка   |

Для параметров фильтрации **product**, **variant**, **consignment**, **productFolder** и **search** в рамках одного запроса можно использовать только одинаковые операторы (для **search** оператор `!~` сочетается с оператором `!=` остальных полей).


Примеры фильтрации: 

- `filter=store=https://api.moysklad.ru/api/remap/1.2/entity/store/656c4032-8667-11e6-8a84-bae500003321`
- `filter=productFolder=https://api.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1`
- `filter=productFolder=https://api.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1;withSubFolders=false`
- `filter=productFolder=https://api.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1;productFolder=https://api.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b2`
- `filter=productFolder=https://api.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1;productFolder=https://api.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b2;withSubFolders=false`
- `filter=product=https://api.moysklad.ru/api/remap/1.2/entity/product/656c4032-8552-11e6-8a84-bae500000044;product=https://api.moysklad.ru/api/remap/1.2/entity/product/706b9cd3-8552-11e6-8a84-bae500000045;product=https://api.moysklad.ru/api/remap/1.2/entity/product/7a5f0ed5-8552-11e6-8a84-bae500000046`
- `filter=consignment=https://api.moysklad.ru/api/remap/1.2/entity/consignment/656c4032-8552-11e6-8a84-bae500000044;consignment=https://api.moysklad.ru/api/remap/1.2/entity/consignment/706b9cd3-8552-11e6-8a84-bae500000045;product=https://api.moysklad.ru/api/remap/1.2/entity/product/7a5f0ed5-8552-11e6-8a84-bae500000046`
- `filter=variant=https://api.moysklad.ru/api/remap/1.2/entity/variant/656c4032-8552-11e6-8a84-bae500000044;consignment=https://api.moysklad.ru/api/remap/1.2/entity/consignment/706b9cd3-8552-11e6-8a84-bae500000045;product=https://api.moysklad.ru/api/remap/1.2/entity/product/7a5f0ed5-8552-11e6-8a84-bae500000046`
- `filter=store=https://api.moysklad.ru/api/remap/1.2/entity/store/656c4032-8667-11e6-8a84-bae500003321;productFolder=https://api.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1;variant=https://api.moysklad.ru/api/remap/1.2/entity/variant/656c4032-8552-11e6-8a84-bae500000044;consignment=https://api.moysklad.ru/api/remap/1.2/entity/consignment/706b9cd3-8552-11e6-8a84-bae500000045;product=https://api.moysklad.ru/api/remap/1.2/entity/product/7a5f0ed5-8552-11e6-8a84-bae500000046`
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
- `filter=supplier=https://api.moysklad.ru/api/remap/1.2/entity/counterparty/656c4032-8667-11e6-8a84-bae5000033aa`
- `filter=search=див`

#### Фильтрация по дополнительным полям и характеристикам

C помощью параметра filter выборку также можно фильтровать по значениям дополнительных полей товаров и характеристик модификаций.

Для фильтрации по значению дополнительного поля, нужно передать ссылку на дополнительное поле и его значение: 

`filter=https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/&lt;id>=<Значение>`

Для фильтрации по значению дополнительных полей типа строка, текст и ссылка нужно использовать оператор `=`. Также можно использовать операторы `=` и `!=` с пустым значением, чтобы получить товары только с незаполненным дополнительным полем или только заполненным, соответственно.

Для фильтрации по значению дополнительных полей типа целое число, вещественное число, дата можно использовать операторы `=`, `>=`, `<=`. Также можно использовать операторы `=` и `!=` с пустым значением, чтобы получить товары только с незаполненным дополнительным полем или только заполненным, соответственно. Для дополнительного поля типа дата-время значение передается в виде строки в [формате дата-время](#/general#3-format-daty-i-vremeni).

Для фильтрации по значению дополнительных полей типа справочник можно использовать операторы `=` и `!=`. В качестве значения нужно передавать ссылку на объект справочника. Также можно использовать операторы `=` и `!=` с пустым значением, чтобы получить товары только с незаполненным дополнительным полем или только заполненным, соответственно.

Пример фильтрации по дополнительному полю типа справочник складов: `filter=https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/ea12a6dd-79e5-11e9-9ff4-31500040893d=https://api.moysklad.ru/api/remap/1.2/entity/store/302f2a81-9977-11e9-9109-f8fc00020e02`

Пример фильтрации по дополнительному полю типа пользовательский справочник: `filter=https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/ea12a6dd-79e5-11e9-9ff4-31500040893d=https://api.moysklad.ru/api/remap/1.2/entity/customentity/8955249d-997d-11e9-9ff4-3150000e65c3/8955314d-997d-11e9-9ff4-3150000e65c4`

Для фильтрации по значению дополнительных полей типа флажок нужно использовать оператор `=`. Возможные значения: true, false.

Фильтрация по дополнительным полям типа файл не поддерживается.

Для фильтрации по значению характеристики нужно передать ссылку на характеристику и значение:

`filter=https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/&lt;id>=<Значение>`

Для фильтрации по значению характеристики нужно использовать оператор `=`. Также можно использовать операторы `=` и `!=` с пустым значением, чтобы получить товары или модификации только с незаполненной характеристикой или только заполненной, соответственно. 

#### Атрибуты доступные для сортировки

Результаты отчета можно отсортировать, используя параметр [order](#/general#3-sortirovka-obuektov).

| Название                       | Описание                     |
| ------------------------------ | :--------------------------- |
| **avgStockDays**               | по количеству дней на складе |
| **code**                       | по коду                      |
| **inTransit**                  | по значению ожидания         |
| **minimumBalance**             | по неснижаемому остатку      |
| **name**                       | по наименованию              |
| **pathName**                   | по группе товаров            |
| **price**                      | по себестоимости             |
| **productCode**                | по артикулу                  |
| **quantity**                   | по значению доступно         |
| **reserve**                    | по значению резерва          |
| **salePrice**                  | по цене продажи              |
| **stock**                      | по значению остатка          |
| **sumTotal**                   | по сумме себестоимости       |

По умолчанию выборка сортируется по группе товара и имени товара.

### Получить Расширенный отчет об остатках

**Параметры**

| Параметр                       | Описание                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **groupBy**                    | `string` (optional) тип, по которому нужно сгруппировать выдачу.По умолчанию параметр groupBy имеет значение variant. Если вы хотите увидеть объекты типа consignment, или только объекты типа product, необходимо выставить соответствующее значение параметра. <ul><li>groupBy=product - выдает только товары</li><li>groupBy=variant - выдает товары и модификации</li><li>groupBy=consignment - выдает товары, модификации, серии</li></ul>                                                                                                                                                       |
| **includeRelated**             | `boolean` (optional) Вывод остатков по модификациям и сериям товаров. Параметр позволяет включить в выборку остатки по модификациям и сериям для товаров. Необходимым условием для применения параметра является **обязательное** наличие фильтрации по товарам или модификациям или их комбинации. При выбранном значении `includeRelated=true` будут включены все остатки для товаров, модификаций и серий, указанных в параметрах фильтрации.<br> При использовании параметра устанавливается параметр группировки `groupBy=consignment`, переданные значения для `groupBy` будут проигнорированы. |

Примеры использования параметра `includeRelated`: <br> `filter=variant!=<URL>&includeRelated=true` выводит остатки товаров, модификаций, серий за исключением конкретной модификации указанной в URL. <br>`filter=product=<URL>&includeRelated=true` выводит остатки конкретного товара указанного в URL, его модификации и серии.
 
> Запрос на получение Расширенного отчета об остатках.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/report/stock/all"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.

```json
{
  "context": {
    "employee": {
      "href": "https://api.moysklad.ru/api/remap/1.2/context/employee",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/report/stock/all",
    "type": "stock",
    "mediaType": "application/json",
    "size": 26,
    "limit": 10,
    "offset": 0,
    "nextHref": "https://api.moysklad.ru/api/remap/1.2/report/stock/all?limit=10&offset=10"
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/c02e3a5c-007e-11e6-9464-e4de00000006?expand=supplier",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
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
      "price": 0.0,
      "salePrice": 346347237000.0,
      "uom": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/cc99c055-fa34-11e5-9464-e4de00000069?expand=supplier",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "stock": 4,
      "inTransit": 0,
      "reserve": 0,
      "quantity": 4,
      "name": "ТоварБезШК",
      "code": "00006",
      "price": 0.0,
      "salePrice": 0.0,
      "uom": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/e8f5f9ff-fa34-11e5-9464-e4de0000008a?expand=supplier",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "stock": 1,
      "inTransit": 0,
      "reserve": 0,
      "quantity": 1,
      "name": "Товар с модой без ШК",
      "code": "00008",
      "price": 0.0,
      "salePrice": 0.0,
      "uom": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/e8f9d714-fa34-11e5-9464-e4de0000008d?expand=product.supplier",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      },
      "stock": 1,
      "inTransit": 0,
      "reserve": 0,
      "quantity": 1,
      "name": "Товар с модой без ШК (1)",
      "code": "00208",
      "price": 0.0,
      "salePrice": 0.0,
      "uom": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/e8fc24b5-fa34-11e5-9464-e4de00000091?expand=product.supplier",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      },
      "stock": 1,
      "inTransit": 0,
      "reserve": 0,
      "quantity": 1,
      "name": "Товар с модой без ШК (2)",
      "code": "00209",
      "price": 0.0,
      "salePrice": 0.0,
      "uom": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/e91042b4-fa34-11e5-9464-e4de00000095?expand=product.supplier",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      },
      "stock": 1,
      "inTransit": 0,
      "reserve": 0,
      "quantity": 1,
      "name": "Товар с модой без ШК (3)",
      "code": "00210",
      "price": 0.0,
      "salePrice": 0.0,
      "uom": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/daf1186d-fa34-11e5-9464-e4de0000006f?expand=supplier",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "stock": 1,
      "inTransit": 0,
      "reserve": 0,
      "quantity": 1,
      "name": "ТоварСМодой_и_ШК",
      "code": "00007",
      "price": 0.0,
      "salePrice": 0.0,
      "uom": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/db1a888a-fa34-11e5-9464-e4de00000073?expand=product.supplier",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      },
      "stock": 1,
      "inTransit": 0,
      "reserve": 0,
      "quantity": 1,
      "name": "ТоварСМодой_и_ШК (1)",
      "code": "00205",
      "price": 0.0,
      "salePrice": 0.0,
      "uom": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/db2066c8-fa34-11e5-9464-e4de00000077?expand=product.supplier",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      },
      "stock": 1,
      "inTransit": 0,
      "reserve": 0,
      "quantity": 1,
      "name": "ТоварСМодой_и_ШК (2)",
      "code": "00206",
      "price": 0.0,
      "salePrice": 0.0,
      "uom": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/db22f3e8-fa34-11e5-9464-e4de0000007b?expand=product.supplier",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      },
      "stock": 1,
      "inTransit": 0,
      "reserve": 0,
      "quantity": 1,
      "name": "ТоварСМодой_и_ШК (3)",
      "code": "00207",
      "price": 0.0,
      "salePrice": 0.0,
      "uom": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/d3e2dcd6-f648-11e5-8a84-bae500000074?expand=supplier",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "stock": -6438,
      "inTransit": 0,
      "reserve": 0,
      "quantity": -6438,
      "name": "ТоварСоСтраной",
      "code": "00002",
      "price": 0.0,
      "salePrice": 0.0,
      "uom": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a?expand=supplier",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "stock": -113,
      "inTransit": 0,
      "reserve": 0,
      "quantity": -113,
      "name": "Мяч",
      "code": "00003",
      "price": 0.0,
      "salePrice": 0.0,
      "uom": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/fd867506-f67d-11e5-8a84-bae50000006e?expand=product.supplier",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      },
      "stock": -21,
      "inTransit": 0,
      "reserve": 0,
      "quantity": -21,
      "name": "Мяч (Футбольный)",
      "code": "00002",
      "price": 0.0,
      "salePrice": 0.0,
      "uom": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/fd92dbb9-f67d-11e5-8a84-bae500000076?expand=product.supplier",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      },
      "stock": -1,
      "inTransit": 0,
      "reserve": 0,
      "quantity": -1,
      "name": "Мяч (Волейбольный)",
      "code": "00004",
      "price": 0.0,
      "salePrice": 0.0,
      "uom": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/be903062-f504-11e5-8a84-bae50000019a?expand=supplier",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
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
      "salePrice": 123000.0,
      "uom": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "externalCode": "ibWbdtWWhXiIwfZVEal6z2"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/d1bef0a1-ffe7-11e5-9464-e4de0000001c?expand=product.supplier",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
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
      "price": 0.0,
      "salePrice": 346347237000.0,
      "uom": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/c6bc9273-2c83-11e6-8a84-bae5000000a3",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        },
        "name": "шт"
      },
      "folder": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/productfolder/0c78adde-ffe3-11e5-9464-e4de000000a2",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/productFolder/metadata",
          "type": "productfolder",
          "mediaType": "application/json"
        },
        "name": "Товары Из кастомной группы",
        "pathName": "Группа"
      },
      "images": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/d1bef0a1-ffe7-11e5-9464-e4de0000001c/images",
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
### Краткий отчет об остатках

Краткий отчет об остатках — это отчет, в котором указываются только ID товара и его остаток, резерв или ожидание на складе на момент запроса.
Эндпоинты предназначены для частого и быстрого обновления остатков, резервов и ожиданий для большого количества товаров.
Используйте отчет, если нужно следить за остатками большого количества товаров и запрашивать данные каждые 5-15 минут. 
 
Отличия от Расширенного отчета об остатках:

- Краткий отчет об остатках может запросить только администратор или сотрудник с пермиссией на Остатки.
- Получить отчет с большим объемом данных можно гораздо быстрее.
- Все данные передаются в одном ответе, без необходимости листания.
- Количество остатков товара указываются без учета вложенных складов.
- При разделении по складам строка без склада содержит резервы, не привязанные к складу. 
- Возвращается только один вид данных, указанный в параметре `stockType`.
- Нет сортировки, данные отображаются в произвольном порядке.

#### Варианты краткого отчета об остатках
Чтобы получить отчет, используйте один из следующих эндпоинтов:

- Краткий отчет об остатках `/report/stock/all/current` показывает остатки с группировкой по товарам
- Краткий отчет об остатках по складам `/report/stock/bystore/current` показывает остатки с группировкой по товарам и складам
- Краткий отчет об остатках по ячейкам `/report/stock/byslot/current` показывает остатки с группировкой по товарам, складам и ячейкам

### Получить Краткий отчет об остатках

#### Параметр include
По умолчанию выводятся только результаты с ненулевым значением остатка.
Для вывода нулевых остатков, необходимо добавить параметр `include=zeroLines`. Товары, которые были созданы и не 
участвовали в каких-либо операциях, не выводятся.

#### Параметр changedSince
По умолчанию выводятся остатки на текущий момент. Параметром `changedSince` можно получить остатки,
которые изменились в интервале между временем указанным в параметре `changedSince` и текущим моментом.
Остатки в ответах на эндпоинты `/report/stock/all/current` и `/report/stock/bystore/current` 
это фактический остаток на текущий момент времени на всех складах и с разбивкой по складам соответственно, не дельта за период, 
не остаток на момент времени `changedSince`, а фактический остаток по номенклатуре, у которой изменился остаток за интервал.
Формат значения параметра - строка вида "гггг-мм-дд чч-мм-сс". Пример: `changedSince=2016-08-23 15:21:09`. [Подробнее тут](#/general#3-format-daty-i-vremeni)

Ограничения и рекомендации, накладываемые на параметр:

- При использовании параметра `changedSince` всегда включен вывод нулевых остатков.
- Максимальное значение параметра `changedSince` в прошлое от текущего момента не должно превышать 24 часа.
- Минимальное значение параметра `changedSince` в прошлое от текущего момента не ограничено.
- Параметр `changedSince` не может превышать текущий момент.
- Небольшое перекрытие интервалов запросов поможет исключить потерю обновления остатков на границах интервалов (пример: запрос остатков каждые 30 минут за прошедшие 35 минут). 
- Рекомендуется проводить полную синхронизацию остатков без параметра `changedSince` раз в сутки и чаще, в зависимости от частоты изменения остатков.

Важно: если за запрашиваемый интервал был удален или архивирован товар или склад, то будет выведен остаток равный 0. Стоит учитывать, что по id запросить этот товар или склад уже не получится.

#### Параметр stockType
Параметром `stockType` выбирается тип остатка, резерва, ожидания, которые необходимо рассчитать.
На данный момент возможно получить только один тип.
Значение по умолчанию - `stock`

| Значение      | Описание                                                    |
|---------------|-------------------------------------------------------------|
| **stock**     | Физический остаток на складах, без учёта резерва и ожидания |
| **freeStock** | Остаток на складах за вычетом резерва                       |
| **quantity**  | Доступно. Учитывает резерв и ожидания                       |
| **reserve**   | Резерв                                                      |
| **inTransit** | Ожидание                                                    |

#### Параметр withRecalculate
Параметр `withRecalculate` доступен только для эндпоинта `/report/stock/bystore/current`.
По умолчанию в отчете выводятся остатки только с пересчитанными значениями.
Для добавления в отчет позиций остатки которых пересчитываются, необходимо добавить параметр `withRecalculate=true`, остаток по таким позициям будет отображаться как null.
После завершения пересчета у такой позиции отобразится остаток.
Товары, которые были созданы и не участвовали в каких-либо операциях, не выводятся.

#### Доступные фильтры отчёта Текущие Остатки
Можно ограничить отчёт несколькими товарами или складами.
Указывается id сущности, а не url.

| Значение          | Тип    | Фильтрация | Описание                                                     |
| ----------------- | :----- | :--------- | ------------------------------------------------------------ |
| **assortmentId**  | UUID   | `=`        | Выдать в отчёте только указанные товары, модификации и серии |
| **storeId**       | UUID   | `=`        | Выдать в отчёте только указанные склады                      |

Несколько значений можно указать через запятую или через несколько параметров:

- `filter=assortmentId=00000000-0000-0000-0000-000000000001,00000000-0000-0000-0000-000000000002`
- `filter=assortmentId=00000000-0000-0000-0000-000000000001;assortmentId=00000000-0000-0000-0000-000000000002`
- `filter=assortmentId=00000000-0000-0000-0000-000000000001&filter=assortmentId=00000000-0000-0000-0000-000000000002`

#### Примеры запросов
> Запрос на получение текущих остатков без разбиения по складам.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/report/stock/all/current"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.

```json
[
  {"assortmentId":"12345678-5838-aaeb-0a80-003a003ef439","stock":11},
  {"assortmentId":"12345678-279c-aaeb-0a80-00d6001f847c","stock":46.5}
]
```

> Запрос на получение текущих остатков "доступно" с выводом нулевых значений.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/report/stock/all/current?stockType=quantity&include=zeroLines"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.

```json
[
  {"assortmentId":"12345678-5838-aaeb-0a80-003a003ef439","quantity":11},
  {"assortmentId":"12345678-279c-aaeb-0a80-00d6001f1981","quantity":0},
  {"assortmentId":"12345678-279c-aaeb-0a80-00d6001f847c","quantity":46.5},
  {"assortmentId":"12345678-279c-aaeb-0a80-00d6001f3215","quantity":0}
]
```

> Запрос на получение остатков с параметром "changedSince".

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/report/stock/all/current?changedSince=2022-08-23 15:00:00"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.

```json
[
  {"assortmentId":"12345678-5838-aaeb-0a80-003a003ef439","quantity":1},
  {"assortmentId":"12345678-279c-aaeb-0a80-00d6001f847c","quantity":4.5}
]
```

> Запрос на получение текущих остатков по складам с указанием типа остатка "freeStock".

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/report/stock/bystore/current?stockType=freeStock"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.
Строка со "storeId":null соответствует части резерва на данный товар для Заказа Покупателя без указания склада.

```json
[
  {"assortmentId":"12345678-5838-aaeb-0a80-003a003ef439","storeId":"12345678-b123-aaee-0a80-012b0001bb10","freeStock":4},
  {"assortmentId":"12345678-5838-aaeb-0a80-003a003ef439","storeId":"12345678-b123-aaee-0a80-012b0001bb12","freeStock":7},
  {"assortmentId":"12345678-279c-aaeb-0a80-00d6001f847c","storeId":null, "freeStock":-5},
  {"assortmentId":"12345678-279c-aaeb-0a80-00d6001f847c","storeId":"12345678-b123-aaee-0a80-012b0001bb10","freeStock":46}
]
```

> Запрос на получение текущих резервов по складам с указанием типа "reserve".

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/report/stock/bystore/current?stockType=reserve"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.
Строка со "storeId":null соответствует резерву для Заказа Покупателя без указания склада.

```json
[
  {"assortmentId":"12345678-5838-aaeb-0a80-003a003ef439","storeId":"12345678-b123-aaee-0a80-012b0001bb10","reserve":3},
  {"assortmentId":"12345678-5838-aaeb-0a80-003a003ef439","storeId":"12345678-b123-aaee-0a80-012b0001bb12","reserve":4},
  {"assortmentId":"12345678-279c-aaeb-0a80-00d6001f847c","storeId":null, "reserve":5},
  {"assortmentId":"12345678-279c-aaeb-0a80-00d6001f847c","storeId":"12345678-b123-aaee-0a80-012b0001bb10","reserve":40}
]
```

> Запрос на получение текущих ожиданий по складам с указанием типа "inTransit".

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/report/stock/bystore/current?stockType=inTransit"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.
Строка со "storeId":null соответствует ожиданию для Заказа Поставщика без указания склада.

```json
[
  {"assortmentId":"12345678-5838-aaeb-0a80-003a003ef439","storeId":"12345678-b123-aaee-0a80-012b0001bb10","inTransit":7},
  {"assortmentId":"12345678-5838-aaeb-0a80-003a003ef439","storeId":"12345678-b123-aaee-0a80-012b0001bb12","inTransit":10},
  {"assortmentId":"12345678-279c-aaeb-0a80-00d6001f847c","storeId":null, "inTransit":12},
  {"assortmentId":"12345678-279c-aaeb-0a80-00d6001f847c","storeId":"12345678-b123-aaee-0a80-012b0001bb10","inTransit":25}
]
```

> Запрос на получение текущих остатков с фильтрацией.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/report/stock/bystore/current?filter=assortmentId=12345678-5838-aaeb-0a80-003a003ef439,12345678-279c-aaeb-0a80-00d6001f847c;storeId=12345678-b123-aaee-0a80-012b0001bb10,12345678-b123-aaee-0a80-012b0001bb13"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.

```json
[
  {"assortmentId":"12345678-5838-aaeb-0a80-003a003ef439","storeId":"12345678-b123-aaee-0a80-012b0001bb10","stock":1},
  {"assortmentId":"12345678-279c-aaeb-0a80-00d6001f847c","storeId":"12345678-b123-aaee-0a80-012b0001bb10","stock":3}
]
```

> Запрос на получение остатков с параметром "withRecalculate".

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/report/stock/bystore/current?withRecalculate=true"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.

```json
[
  {"assortmentId":"12345678-5838-aaeb-0a80-003a003ef439","storeId":"12345678-b123-aaee-0a80-012b0001bb10","stock":1},
  {"assortmentId":"12345678-2346-aaeb-0a80-003a003ef439","storeId":"12345678-b123-aaee-0a80-012b0001bb10","stock":null},
  {"assortmentId":"12345678-279c-aaeb-0a80-00d6001f847c","storeId":"12345678-b123-aaee-0a80-012b0001bb10","stock":3}
]
```

### Получить Краткий отчет об остатках по ячейкам

Отчет показывает остатки товара/модификации/серии в ячейках для отдельно указанного склада (складов) или для всех складов по отдельному товару (товарам).
Остатки по номенклатуре, хранящиеся вне ячеек выведены не будут. 

Ограничения накладываемые на эндпоинт остатков по ячейкам:

- обязательное указание параметра фильтрации **assortmentId** или **storeId**

#### Доступные фильтры отчёта Текущие Остатки по ячейкам
Указывается id сущности, а не url.

| Значение          | Тип    | Фильтрация | Описание                                                     |
| ----------------- | :----- | :--------- | ------------------------------------------------------------ |
| **assortmentId**  | UUID   | `=`        | Выдать в отчёте только указанные товары, модификации и серии |
| **storeId**       | UUID   | `=`        | Выдать в отчёте только указанные склады                      |

Несколько значений можно указать через запятую или через несколько параметров:

- `filter=assortmentId=00000000-0000-0000-0000-000000000001,00000000-0000-0000-0000-000000000002`
- `filter=assortmentId=00000000-0000-0000-0000-000000000001;assortmentId=00000000-0000-0000-0000-000000000002`
- `filter=assortmentId=00000000-0000-0000-0000-000000000001&filter=assortmentId=00000000-0000-0000-0000-000000000002`

> Запрос на получение текущих остатков по ячейкам с фильтрацией.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/report/stock/byslot/current?filter=assortmentId=12345678-5838-aaeb-0a80-003a003ef439,12345678-279c-aaeb-0a80-00d6001f847c;storeId=12345678-b123-aaee-0a80-012b0001bb10,12345678-b123-aaee-0a80-012b0001bb13"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.

```json
[
  {
    "assortmentId":"12345678-5838-aaeb-0a80-003a003ef439",
    "storeId":"12345678-b123-aaee-0a80-012b0001bb10",
    "slotId":"c3b59812-cd5a-11ed-0a80-0142000026a3",
    "stock":1.2
  },
  {
    "assortmentId":"12345678-279c-aaeb-0a80-00d6001f847c",
    "storeId":"12345678-b123-aaee-0a80-012b0001bb10",
    "slotId":"ede4720d-212f-11ee-ac12-000d000000f0",
    "stock":3
  },
  {
    "assortmentId":"12345678-279c-aaeb-0a80-00d6001f847c",
    "storeId":"12345678-b123-aaee-0a80-012b0001bb10",
    "slotId":"dc27cf31-212f-11ee-ac12-001000000000",
    "stock":1
  }
]
```

### Остатки по складам 
Отчет "Остатки по складам" представляет собой массив объектов, каждый из
которых показывает Остаток по каждому из товаров на каждом из складов.
#### Атрибуты объекта отчета по складам

| Название         | Тип                                                       | Описание                                                                                                                                  |
| ---------------- | :-------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| **meta**         | [Meta](#/general#3-metadannye) | Метаданные позиции, по которой выдается Остаток<br>`+Обязательное при ответе`                                                             |
| **stockByStore** | Object                                                    | Остатки по складам. [Подробнее тут](#/reports/report-stock#4-ostatki-po-skladam-stockbystore)<br>`+Обязательное при ответе` |

#### Остатки по складам (stockByStore)
Поле "Остатки по складам" (stockByStore) представляет собой выдачу из объектов со следующими атрибутами:

| Название      | Тип                                                      | Описание                                                                       |
| ------------- |:---------------------------------------------------------| :----------------------------------------------------------------------------- |
| **meta**      | [Meta](#/general#3-metadannye)| Метаданные склада, по которому выводится Остаток<br>`+Обязательное при ответе` |
| **stock**     | Float                                                    | Остаток<br>`+Обязательное при ответе`                                          |
| **inTransit** | Float                                                    | Ожидание<br>`+Обязательное при ответе`                                         |
| **reserve**   | Float                                                    | Резерв<br>`+Обязательное при ответе`                                           |
| **name**      | String(255)                                              | Наименование склада<br>`+Обязательное при ответе`                              |

Размерность этого поля всегда равна количеству складов в системе.

#### Атрибуты доступные для фильтрации

Результаты отчета можно отфильтровать, используя параметр filter. Нельзя указывать пустые значения.

| Название                       | Тип         | Фильтрация | Описание                                                                                                                                                        |
| ------------------------------ | :---------- |:-----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **consignment**                | Object      | `=`        | ссылка на серию, по которой нужно произвести фильтрацию.                                                                                                        |
| **moment**                     | DateTime    | `=`        | момент времени, на который нужно вывести остатки. Передается в виде строки в [формате дата-время](#/general#3-format-daty-i-vremeni)                            |
| **product**                    | Object      | `=`        | ссылка на товар, по которому нужно произвести фильтрацию.                                                                                                       |
| **productFolder**              | Object      | `=`        | ссылка на группу товаров, по которой нужно произвести фильтрацию.                                                                                               |
| **search**                     | String(255) | `=`        | специальный параметр текстового поиска. Поиск осуществляется по вхождению подстроки в названия товаров, модификаций, серий.                                     |
| **soldByWeight**               | Boolean     | `=`        | параметр для фильтрации по признаку весового товара. Возможные значения: true, false.                                                                           |
| **stockMode**                  | Enum        | `=`        | параметр для фильтрации по значению остатка. Значение по умолчанию nonEmpty. [Доступные значения](#/reports/report-stock#5-dostupnye-znacheniya-dlya-stockmode) |
| **store**                      | Object      | `=`        | ссылка на склад, для которого нужно построить отчет.                                                                                                            |
| **supplier**                   | Object      | `=`        | параметр для фильтрации по поставщику. Значение параметра - ссылка на контрагента или организацию. В выборку будут включены товары с указанным поставщиком.     |
| **variant**                    | Object      | `=`        | ссылка на модификация, по которой нужно произвести фильтрацию.                                                                                                  |

##### Доступные значения для stockMode
Значение по умолчанию nonEmpty. 

| Значение         | Описание                            |
| ---------------- | ----------------------------------- |
| **all**          | Любое значение остатка              |
| **positiveOnly** | Положительный остаток               |
| **negativeOnly** | Отрицательный остаток               |
| **empty**        | Нулевой остаток                     |
| **nonEmpty**     | Ненулевой остаток                   |
| **underMinimum** | Остаток ниже неснижаемого остатка   |

В одном запросе можно использовать только один из параметров **product**, **variant**, **consignment**, **productFolder** и **search**.

Примеры фильтрации:

- `filter=store=https://api.moysklad.ru/api/remap/1.2/entity/store/656c4032-8552-11e6-8a84-bae500000043`
- `filter=product=https://api.moysklad.ru/api/remap/1.2/entity/product/656c4032-8552-11e6-8a84-bae500000044`
- `filter=variant=https://api.moysklad.ru/api/remap/1.2/entity/variant/656c4032-8552-11e6-8a84-bae500000045`
- `filter=consignment=https://api.moysklad.ru/api/remap/1.2/entity/consignment/656c4032-8552-11e6-8a84-bae500000046`
- `filter=productFolder=https://api.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1`
- `filter=stockMode=all`
- `filter=moment=2019-07-10 12:00:00`
- `filter=soldByWeight=true`
- `filter=supplier=https://api.moysklad.ru/api/remap/1.2/entity/counterparty/656c4032-8667-11e6-8a84-bae5000033aa`
- `filter=search=див`

#### Фильтрация по дополнительным полям и характеристикам отчета по складам

C помощью параметра filter выборку также можно фильтровать по значениям дополнительных полей товаров и характеристик модификаций.

Для фильтрации по значению дополнительного поля, нужно передать ссылку на дополнительное поле и его значение: 

`filter=https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/&lt;id>=<Значение>`

Для фильтрации по значению дополнительных полей типа строка, текст и ссылка нужно использовать оператор `=`.

Для фильтрации по значению дополнительных полей типа целое число, вещественное число, дата можно использовать операторы `=`, `>=`, `<=`. Для дополнительного поля типа дата-время значение передается в виде строки в [формате дата-время](#/general#3-format-daty-i-vremeni).

Для фильтрации по значению дополнительных полей типа справочник нужно использовать оператор `=`. В качестве значения нужно передавать ссылку на объект справочника.

Пример фильтрации по дополнительному полю типа справочник складов: `filter=https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/ea12a6dd-79e5-11e9-9ff4-31500040893d=https://api.moysklad.ru/api/remap/1.2/entity/store/302f2a81-9977-11e9-9109-f8fc00020e02`

Пример фильтрации по дополнительному полю типа пользовательский справочник: `filter=https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/ea12a6dd-79e5-11e9-9ff4-31500040893d=https://api.moysklad.ru/api/remap/1.2/entity/customentity/8955249d-997d-11e9-9ff4-3150000e65c3/8955314d-997d-11e9-9ff4-3150000e65c4`

Для фильтрации по значению дополнительных полей типа флажок нужно использовать оператор `=`. Возможные значения: true, false.

Фильтрация по дополнительным полям типа файл не поддерживается.

Для фильтрации по значению характеристики нужно передать ссылку на характеристику и значение:

`filter=https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/&lt;id>=<Значение>`

Для фильтрации по значению характеристики нужно использовать оператор `=`. 

#### Атрибуты доступные для сортировки отчета по складам

Результаты отчета можно отсортировать, используя параметр [order](#/general#3-sortirovka-obuektov).

| Название                       | Описание                              |
| ------------------------------ | :------------------------------------ |
| **pathName**                   | по группе товара                      |
| **name**                       | по наименованию                       |
| **code**                       | по коду                               |
| **productCode**                | по артикулу                           |
| **stockOnAllStores**           | по количеству остатка на всех складах |

По умолчанию выборка сортируется по группе товара и имени товара.

### Получить Остатки по складам

**Параметры**

| Параметр                       | Описание                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.                                                                                                                                                                                                                                                                                                          |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                                                                                                                                                                                                                                                                                                                          |
| **groupBy**                    | `string` (optional) тип, по которому нужно сгруппировать выдачу.По умолчанию параметр groupBy имеет значение variant. Если вы хотите увидеть объекты типа consignment, или только объекты типа product, необходимо выставить соответствующее значение параметра. <ul><li>groupBy=product - выдает только товары</li><li>groupBy=variant - выдает товары и модификации</li><li>groupBy=consignment - выдает товары, модификации, серии</li></ul> |
 
> Запрос на получение отчета "Остатки по складам".

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/report/stock/bystore"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.

```json
{
  "context": {
    "employee": {
      "href": "https://api.moysklad.ru/api/remap/1.2/context/employee",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/report/stock/bystore",
    "type": "stockbystore",
    "mediaType": "application/json",
    "size": 225,
    "limit": 1000,
    "offset": 0,
    "nextHref": "https://api.moysklad.ru/api/remap/1.2/report/stock/bystore?limit=25&offset=25"
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/c02e3a5c-007e-11e6-9464-e4de00000006?expand=supplier",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "stockByStore": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/86c857d6-0302-11e6-9464-e4de00000072",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/cc99c055-fa34-11e5-9464-e4de00000069?expand=supplier",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "stockByStore": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/86c857d6-0302-11e6-9464-e4de00000072",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/e8f5f9ff-fa34-11e5-9464-e4de0000008a?expand=supplier",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "stockByStore": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/86c857d6-0302-11e6-9464-e4de00000072",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/e8f9d714-fa34-11e5-9464-e4de0000008d?expand=product.supplier",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      },
      "stockByStore": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/86c857d6-0302-11e6-9464-e4de00000072",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/e8fc24b5-fa34-11e5-9464-e4de00000091?expand=product.supplier",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      },
      "stockByStore": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/86c857d6-0302-11e6-9464-e4de00000072",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/e91042b4-fa34-11e5-9464-e4de00000095?expand=product.supplier",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      },
      "stockByStore": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/86c857d6-0302-11e6-9464-e4de00000072",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/daf1186d-fa34-11e5-9464-e4de0000006f?expand=supplier",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "stockByStore": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/86c857d6-0302-11e6-9464-e4de00000072",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
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


### Остатки по документам

Отчёт "Остатки по документам" представляет собой выдачу Остатков по позициям указанного
в пути документа.
Остатки можно получить по следующим документам: `[Отгрузка, Заказ Покупателя, Розничная продажа, Счет поставщика, Заказ поставщику, 
Приемка, Розничный возврат, Возврат поставщику/покупателю]`
Остатки для документа **Отгрузка**, **Розничная продажа**, **Приемка**, **Возврат поставщика/покупателя** и **Розничный возврат** рассчитываются на момент поля **moment** в данных документах.
Для **Заказа покупателя**, **Счета покупателя**, **Заказа поставщику** и **Счета поставщику** остатки рассчитываются на текущий момент времени.

#### Атрибуты объекта отчета по документам

| Значение      | Тпи                                                    | Описание                                                    |
| ------------- |:------------------------------------------------------------|:------------------------------------------------------------|
| **meta**     | [Meta](#/general#3-metadannye) | Метаданные, представляющие собой ссылку на документ, по которому выдаются Остатки<br>`+Обязательное при ответе` |
| **positions** | Array(Object)                                             | Массив объектов, представляющий собой Остаток по каждой из позиций.<br>`+Обязательное при ответе`                       |

#### Атрибуты позиции

| Значение      | Тпи                                                      | Описание                                                                                                      |
|---------------|:---------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------|
| **meta**      | [Meta](#/general#3-metadannye)| Метаданные, представляющие собой ссылку на позицию, по которой выдаётся Остаток<br>`+Обязательное при ответе` |
| **name**      | String(255)                                              | Наименование позиции<br>`+Обязательное при ответе`                                                            |
| **stock**     | Float                                                    | Остаток<br>`+Обязательное при ответе`                                                                         |
| **cost**      | Float                                                    | Себестоимость в копейках<br>`+Обязательное при ответе`                                                        |
| **inTransit** | Float                                                    | Ожидание. У сущности **Комплект** значение всегда `0`.<br>`+Обязательное при ответе`                          |
| **reserve**   | Float                                                    | Резерв. У сущности **Комплект** значение всегда `0`.<br>`+Обязательное при ответе`                            |
| **quantity**  | Float                                                    | Доступно. У сущности **Комплект** значение всегда `0`.<br>`+Обязательное при ответе`                          |

### Получить Остатки по документу

Запрос на получение отчёта "Остатки по документу".
Остатки для документа **Отгрузка** и **Розничная продажа** расчитываются на момент поля **moment** в данных документах.
Для **Заказа покупателя** остатки рассчитываются на текущий момент времени.

Данный запрос работает со следующими типами документов:

+ [Отгрузка](#/documents/demand#2-otgruzka)
+ [Заказ покупателя](#/documents/customerOrder#2-zakaz-pokupatelya)
+ [Розничная продажа](#/documents/retaildemand#2-roznichnaya-prodazha)
+ [Счет поставщика](#/documents/invoice-in#2-schet-postavshika)
+ [Счет покупателю](#/documents/invoice-out#2-schet-pokupatelyu)
+ [Заказ поставщику](#/documents/purchaseOrder#2-zakaz-postavshiku)
+ [Приемка](#/documents/supply#2-priemka)
+ [Розничный возврат](#/documents/retail-sales-return#2-roznichnyj-vozvrat)
+ [Возврат поставщику](#/documents/purchase-return#2-vozvrat-postavshiku)
+ [Возврат покупателя](#/documents/sales-return#2-vozvrat-pokupatelya)

Результат запроса - остатки по позициям документа, на дату документа, со склада, указанного в документе,
а также себестоимость позиций документа по FIFO с учётом количества.

#### Примеры запросов отчета Остатки по складам

> Запрос на получение текущих остатков без разбиения по складам.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/report/stock/byoperation?operation.id=34efe2ee-015e-11e6-9464-e4de0000006b"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.

```json
{
  "context": {
    "employee": {
      "href": "https://api.moysklad.ru/api/remap/1.2/context/employee",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/report/stock/byoperation?operation.id=34efe2ee-015e-11e6-9464-e4de0000006b",
    "type": "stockbyoperation",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/34efe2ee-015e-11e6-9464-e4de0000006b",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
        "type": "customerorder",
        "mediaType": "application/json"
      },
      "positions": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/60fc3826-00d7-11e6-9464-e4de00000097",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/d1bed68b-ffe7-11e5-9464-e4de0000001a",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/671b3522-f7d2-11e5-8a84-bae500000084",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/66ccbc9f-f7d2-11e5-8a84-bae500000076",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/8b382799-f7d2-11e5-8a84-bae5000003a5",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
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
