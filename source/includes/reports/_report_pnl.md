## Отчет Прибыльность
Средствами JSON API можно запросить отчет "Прибыльность" по всем товарам, услугам, модификациям, сотрудникам, покупателям и каналам продаж. 
Для доступа к отчету через API требуется право на просмотр отчета *Прибыли и убытки*.
О том, что представляет собой отчет "Прибыльность" вы можете прочитать по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203025326-%D0%9E%D1%82%D1%87%D0%B5%D1%82-%D0%9F%D1%80%D0%B8%D0%B1%D1%8B%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8C).

#### Прибыльность по товарам 
#### Атрибуты объекта отчета:

| Название           | Тип    | Описание                                                                                                                                                                         |
| ------------------ | :----- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **assortment**     | Object | Краткое представление Товара или Услуги в отчете. [Подробнее тут](../dictionaries/#suschnosti-towar) и [тут](../dictionaries/#suschnosti-usluga)<br>`+Обязательное при ответе` |
| **margin**         | Float  | Рентабельность<br>`+Обязательное при ответе`                                                                                                                                     |
| **profit**         | Float  | Прибыль<br>`+Обязательное при ответе`                                                                                                                                            |
| **returnCost**     | Float  | Себестоимость возвратов<br>`+Обязательное при ответе`                                                                                                                            |
| **returnCostSum**  | Float  | Сумма себестоимостей возвратов<br>`+Обязательное при ответе`                                                                                                                     |
| **returnPrice**    | Float  | Цена возвратов<br>`+Обязательное при ответе`                                                                                                                                     |
| **returnQuantity** | Int    | Количество возвратов<br>`+Обязательное при ответе`                                                                                                                               |
| **returnSum**      | Float  | Сумма возвратов<br>`+Обязательное при ответе`                                                                                                                                    |
| **sellCost**       | Float  | Себестоимость<br>`+Обязательное при ответе`                                                                                                                                      |
| **sellCostSum**    | Float  | Сумма себестоимостей продаж<br>`+Обязательное при ответе`                                                                                                                        |
| **sellPrice**      | Float  | Цена продаж (средняя)<br>`+Обязательное при ответе`                                                                                                                              |
| **sellQuantity**   | Int    | Проданное количество<br>`+Обязательное при ответе`                                                                                                                               |
| **sellSum**        | Float  | Сумма продаж<br>`+Обязательное при ответе`                                                                                                                                       |

#### Структура объекта assortment

| Название    | Тип                                                       | Описание                                                     |
| ----------- | :-------------------------------------------------------- | :----------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Товара или Услуги<br>`+Обязательное при ответе`   |
| **name**    | String(255)                                               | Наименование Товара или Услуги<br>`+Обязательное при ответе` |
| **code**    | String(255)                                               | Код товара или услуги                                        |
| **uom**     | Object                                                    | Единица измерения                                            |
| **article** | String(255)                                               | Артикул товара                                               |
| **image**   | Object                                                    | Изображение товара                                           |

#### Атрибуты доступные для фильтрации

Результаты отчета можно отфильтровать, используя параметр filter.
Для каждого параметра, кроме канала продаж, можно указать только одно значение.
Нельзя указывать пустые значения.

| Название          | Тип         | Фильтрация | Описание                                                                                                                                                                                                                                                                                  |
|-------------------|:------------|:-----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **product**       | Object      | `=` `!=`   | ссылка на товар, услугу, комплект, модификацию или серию, по которой нужно произвести фильтрацию. Можно передать несколько значений.                                                                                                                                                      |
| **productFolder** | Object      | `=` `!=`   | параметр для фильтрации по нескольким группам товаров. Значение параметра - ссылка на группу товаров, которая должна быть включена в выборку или исключена из нее. Можно передать несколько значений.                                                                                     |
| **withSubFolders**| Boolean     | `=`        | параметр учета вложенных подгрупп. Работает только при наличии фильтра по `productFolder`. По умолчанию `true`, выводятся товары из дочерних подгрупп фильтруемой группы / групп товаров. При передаче `false` выводятся только товары из фильтруемой группы / групп, без учета подгрупп. |
| **agentTag**      | String(255) | `=`        | строка с названием группы контрагентов, по которой нужно произвести фильтрацию.                                                                                                                                                                                                           |
| **counterparty**  | Object      | `=`        | ссылка на контрагента, по которому нужно произвести фильтрацию.                                                                                                                                                                                                                           |
| **organization**  | Object      | `=`        | ссылка на юрлицо, по которому нужно произвести фильтрацию.                                                                                                                                                                                                                                |
| **store**         | Object      | `=`        | ссылка на склад, по которому нужно произвести фильтрацию.                                                                                                                                                                                                                                 |
| **project**       | Object      | `=`        | ссылка на проект, по которому нужно произвести фильтрацию.                                                                                                                                                                                                                                |
| **retailStore**   | Object      | `=`        | ссылка на точку продаж, по которой нужно произвести фильтрацию.                                                                                                                                                                                                                           |
| **supplier**      | Object      | `=`        | параметр для фильтрации по поставщику. Значение параметра - ссылка на контрагента или организацию. В выборку будут включены товары с указанным поставщиком.                                                                                                                               |
| **salesChannel**  | Object      | `=`        | ссылка на канал продаж, по которому нужно провести фильтрацию. Допустимо повторное использование фильтра, когда требуется фильтрация по нескольким каналам продаж.                                                                                                                        |

Одновременная фильтрация по **product** и **productFolder** не поддерживается.


Примеры фильтрации:

- `filter=product=https://online.moysklad.ru/api/remap/1.2/entity/product/656c4032-8552-11e6-8a84-bae500000044`
- `filter=product=https://online.moysklad.ru/api/remap/1.2/entity/product/656c4032-8552-11e6-8a84-bae500000044;product=https://online.moysklad.ru/api/remap/1.2/entity/service/706b9cd3-8552-11e6-8a84-bae500000045;product=https://online.moysklad.ru/api/remap/1.2/entity/bundle/7a5f0ed5-8552-11e6-8a84-bae500000046`
- `filter=productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1`
- `filter=productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1;withSubFolders=false`
- `filter=productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1;productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b2`
- `filter=productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1;productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b2;withSubFolders=false`
- `filter=counterparty=https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f8f729a5-a784-11e9-ac12-000800000000`
- `filter=organization=https://online.moysklad.ru/api/remap/1.2/entity/organization/0347beb0-a785-11e9-ac12-000800000003`
- `filter=store=https://online.moysklad.ru/api/remap/1.2/entity/store/656c4032-8667-11e6-8a84-bae500003321`
- `filter=project=https://online.moysklad.ru/api/remap/1.2/entity/project/7a5f0ed5-8552-11e6-8a84-bae500000046`
- `filter=retailStore=https://online.moysklad.ru/api/remap/1.2/entity/retailstore/9ca74859-85c7-11e9-ac12-000d00000030`
- `filter=agentTag=favorites`
- `filter=supplier=https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f8f729a5-a784-11e9-ac12-000800000000`
- `filter=salesChannel=https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/65cc7e08-ea79-4ad7-9cde-3cc053f1c1b9`
- `filter=salesChannel=https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/65cc7e08-ea79-4ad7-9cde-3cc053f1c1b9;salesChannel=https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/ea012b09-4df3-439b-acf7-7d0464fbf603`
- `filter=product=https://online.moysklad.ru/api/remap/1.2/entity/product/656c4032-8552-11e6-8a84-bae500000044;counterparty=https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f8f729a5-a784-11e9-ac12-000800000000;organization=https://online.moysklad.ru/api/remap/1.2/entity/organization/0347beb0-a785-11e9-ac12-000800000003;store=https://online.moysklad.ru/api/remap/1.2/entity/store/656c4032-8667-11e6-8a84-bae500003321;project=https://online.moysklad.ru/api/remap/1.2/entity/project/7a5f0ed5-8552-11e6-8a84-bae500000046;retailStore=https://online.moysklad.ru/api/remap/1.2/entity/retailstore/9ca74859-85c7-11e9-ac12-000d00000030;salesChannel=https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/65cc7e08-ea79-4ad7-9cde-3cc053f1c1b9`

### Получить Прибыльность по товарам

Отчет прибыльности по товарам включает: товары, комплекты, услуги. В товаре учитывается прибыльность по его модификациям, но без указания самих модификаций.

**Параметры**

| Параметр                       | Описание                                                                                                                                                                          |
| ------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.                                            |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                                                            |
| **momentFrom**                 | `date` (optional) *Example: 2016-04-15 15:48:46* Один из [параметров фильтрации выборки](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter). |
| **momentTo**                   | `date` (optional) *Example: 2016-04-15 15:48:46* Один из [параметров фильтрации выборки](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter). |
При отсутствии параметров **momentFrom** и **momentTo** отображаются отчеты за последний месяц.  
При отсутствии параметра **momentFrom** и указании параметра **momentTo** отображаются отчеты с начала текущего года по **momentTo**.  
При отсутствии параметра **momentTo** и указании параметра **momentFrom** отображаются отчеты с **momentFrom** по текущий день.  

> Запрос на получение отчета "Прибыльность по товарам".

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/profit/byproduct"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/report/profit/byproduct",
    "type": "salesbyproduct",
    "mediaType": "application/json",
    "size": 5,
    "limit": 2,
    "offset": 0,
    "nextHref": "https://online.moysklad.ru/api/remap/1.2/report/profit/byproduct?limit=2&offset=2"
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
      "returnPrice": 0.0,
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
      "sellPrice": 100000000.0,
      "sellCost": 0,
      "sellSum": 476500000000,
      "sellCostSum": 0,
      "returnQuantity": 0,
      "returnPrice": 0.0,
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
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
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
      "sellPrice": 500000.0,
      "sellCost": 300000,
      "sellSum": 5000000,
      "sellCostSum": 3000000,
      "returnQuantity": 3,
      "returnPrice": 500000.0,
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
#### Атрибуты объекта отчета:

| Название           | Тип    | Описание                                                                                                                                                                                                                                          |
| ------------------ | :----- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **assortment**     | Object | Краткое представление Модификации, Услуги или Комплекта в отчете. [Подробнее тут](../dictionaries/#suschnosti-modifikaciq), [тут](../dictionaries/#suschnosti-usluga) и [тут](../dictionaries/#suschnosti-komplekt)<br>`+Обязательное при ответе` |
| **margin**         | Float  | Рентабельность<br>`+Обязательное при ответе`                                                                                                                                                                                                      |
| **profit**         | Float  | Прибыль<br>`+Обязательное при ответе`                                                                                                                                                                                                             |
| **returnCost**     | Float  | Себестоимость возвратов<br>`+Обязательное при ответе`                                                                                                                                                                                             |
| **returnCostSum**  | Float  | Сумма себестоимостей возвратов<br>`+Обязательное при ответе`                                                                                                                                                                                      |
| **returnPrice**    | Float  | Цена возвратов<br>`+Обязательное при ответе`                                                                                                                                                                                                      |
| **returnQuantity** | Int    | Количество возвратов<br>`+Обязательное при ответе`                                                                                                                                                                                                |
| **returnSum**      | Float  | Сумма возвратов<br>`+Обязательное при ответе`                                                                                                                                                                                                     |
| **sellCost**       | Float  | Себестоимость<br>`+Обязательное при ответе`                                                                                                                                                                                                       |
| **sellCostSum**    | Float  | Сумма себестоимостей продаж<br>`+Обязательное при ответе`                                                                                                                                                                                         |
| **sellPrice**      | Float  | Цена продаж (средняя)<br>`+Обязательное при ответе`                                                                                                                                                                                               |
| **sellQuantity**   | Int    | Проданное количество<br>`+Обязательное при ответе`                                                                                                                                                                                                |
| **sellSum**        | Float  | Сумма продаж<br>`+Обязательное при ответе`                                                                                                                                                                                                        |

#### Структура объекта assortment

| Название    | Тип                                                       | Описание                                                                   |
| ----------- | :-------------------------------------------------------- | :------------------------------------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Модификации, Услуги или Комплекта<br>`+Обязательное при ответе` |
| **name**    | String(255)                                               | Наименование сущности<br>`+Обязательное при ответе`                        |
| **code**    | String(255)                                               | Код сущности<br>`+Обязательное при ответе`                                 |
| **article** | String(255)                                               | Артикул Модификации или Комплекта<br>`+Обязательное при ответе`            |
| **image**   | Object                                                    | Изображение Модификации<br>`+Обязательное при ответе`                      |

#### Атрибуты доступные для фильтрации

Результаты отчета можно отфильтровать, используя параметр filter.
Для каждого параметра, кроме канала продаж, можно указать только одно значение.
Нельзя указывать пустые значения.

| Название          | Тип         | Фильтрация | Описание                                                                                                                                                           |
|-------------------| :-----------|:-----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **product**       | Object      | `=` `!=`   | ссылка на товар, услугу, комплект, модификацию или серию, по которой нужно произвести фильтрацию. Можно передать несколько значений.                                                                                                                                                      |
| **productFolder** | Object      | `=` `!=`   | параметр для фильтрации по нескольким группам товаров. Значение параметра - ссылка на группу товаров, которая должна быть включена в выборку или исключена из нее. Можно передать несколько значений.                                                                                     |
| **withSubFolders**| Boolean     | `=`        | параметр учета вложенных подгрупп. Работает только при наличии фильтра по `productFolder`. По умолчанию `true`, выводятся товары из дочерних подгрупп фильтруемой группы / групп товаров. При передаче `false` выводятся только товары из фильтруемой группы / групп, без учета подгрупп. |
| **agentTag**      | String(255) | `=`        | строка с названием группы контрагентов, по которой нужно произвести фильтрацию.                                                                                                                                                                                                           |
| **counterparty**  | Object      | `=`        | ссылка на контрагента, по которому нужно произвести фильтрацию.                                                                                                    |
| **organization**  | Object      | `=`        | ссылка на юрлицо, по которому нужно произвести фильтрацию.                                                                                                         |
| **store**         | Object      | `=`        | ссылка на склад, по которому нужно произвести фильтрацию.                                                                                                          |
| **project**       | Object      | `=`        | ссылка на проект, по которому нужно произвести фильтрацию.                                                                                                         |
| **retailStore**   | Object      | `=`        | ссылка на точку продаж, по которой нужно произвести фильтрацию.                                                                                                    |
| **supplier**      | Object      | `=`        | параметр для фильтрации по поставщику. Значение параметра - ссылка на контрагента или организацию. В выборку будут включены товары с указанным поставщиком.        |
| **salesChannel**  | Object      | `=`        | ссылка на канал продаж, по которому нужно провести фильтрацию. Допустимо повторное использование фильтра, когда требуется фильтрация по нескольким каналам продаж. |

Одновременная фильтрация по **product** и **productFolder** не поддерживается.


Примеры фильтрации:

- `filter=product=https://online.moysklad.ru/api/remap/1.2/entity/product/656c4032-8552-11e6-8a84-bae500000044`
- `filter=product=https://online.moysklad.ru/api/remap/1.2/entity/product/656c4032-8552-11e6-8a84-bae500000044;product=https://online.moysklad.ru/api/remap/1.2/entity/service/706b9cd3-8552-11e6-8a84-bae500000045;product=https://online.moysklad.ru/api/remap/1.2/entity/bundle/7a5f0ed5-8552-11e6-8a84-bae500000046`
- `filter=productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1`
- `filter=productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1;withSubFolders=false`
- `filter=productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1;productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b2`
- `filter=productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1;productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b2;withSubFolders=false`
- `filter=counterparty=https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f8f729a5-a784-11e9-ac12-000800000000`
- `filter=organization=https://online.moysklad.ru/api/remap/1.2/entity/organization/0347beb0-a785-11e9-ac12-000800000003`
- `filter=store=https://online.moysklad.ru/api/remap/1.2/entity/store/656c4032-8667-11e6-8a84-bae500003321`
- `filter=project=https://online.moysklad.ru/api/remap/1.2/entity/project/7a5f0ed5-8552-11e6-8a84-bae500000046`
- `filter=retailStore=https://online.moysklad.ru/api/remap/1.2/entity/retailstore/9ca74859-85c7-11e9-ac12-000d00000030`
- `filter=agentTag=favorites`
- `filter=supplier=https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f8f729a5-a784-11e9-ac12-000800000000`
- `filter=salesChannel=https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/65cc7e08-ea79-4ad7-9cde-3cc053f1c1b9`
- `filter=salesChannel=https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/65cc7e08-ea79-4ad7-9cde-3cc053f1c1b9;salesChannel=https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/ea012b09-4df3-439b-acf7-7d0464fbf603`
- `filter=product=https://online.moysklad.ru/api/remap/1.2/entity/product/656c4032-8552-11e6-8a84-bae500000044;counterparty=https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f8f729a5-a784-11e9-ac12-000800000000;organization=https://online.moysklad.ru/api/remap/1.2/entity/organization/0347beb0-a785-11e9-ac12-000800000003;store=https://online.moysklad.ru/api/remap/1.2/entity/store/656c4032-8667-11e6-8a84-bae500003321;project=https://online.moysklad.ru/api/remap/1.2/entity/project/7a5f0ed5-8552-11e6-8a84-bae500000046;retailStore=https://online.moysklad.ru/api/remap/1.2/entity/retailstore/9ca74859-85c7-11e9-ac12-000d00000030;salesChannel=https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/65cc7e08-ea79-4ad7-9cde-3cc053f1c1b9`

### Получить Прибыльность по модификациям

Отчет прибыльности по товарам включает: товары, комплекты, услуги и модификации (выводится сама модификация, не родительский товар).

**Параметры**

| Параметр                       | Описание                                                                                                                                                                          |
| ------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.                                            |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                                                            |
| **momentFrom**                 | `date` (optional) *Example: 2016-04-15 15:48:46* Один из [параметров фильтрации выборки](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter). |
| **momentTo**                   | `date` (optional) *Example: 2016-04-15 15:48:46* Один из [параметров фильтрации выборки](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter). |
При отсутствии параметров **momentFrom** и **momentTo** отображаются отчеты за последний месяц.  
При отсутствии параметра **momentFrom** и указании параметра **momentTo** отображаются отчеты с начала текущего года по **momentTo**.  
При отсутствии параметра **momentTo** и указании параметра **momentFrom** отображаются отчеты с **momentFrom** по текущий день.  

> Запрос на получение отчета "Прибыльность по модификациям".

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/profit/byvariant"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/report/profit/byvariant",
    "type": "salesbyvariant",
    "mediaType": "application/json",
    "size": 5,
    "limit": 2,
    "offset": 0,
    "nextHref": "https://online.moysklad.ru/api/remap/1.2/report/profit/byvariant?limit=2&offset=2"
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
      "returnPrice": 0.0,
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
      "sellPrice": 100000000.0,
      "sellCost": 0,
      "sellSum": 476500000000,
      "sellCostSum": 0,
      "returnQuantity": 0,
      "returnPrice": 0.0,
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
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
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
      "sellPrice": 500000.0,
      "sellCost": 300000,
      "sellSum": 5000000,
      "sellCostSum": 3000000,
      "returnQuantity": 3,
      "returnPrice": 500000.0,
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
#### Атрибуты объекта отчета:

| Название           | Тип    | Описание                                                                                                                                                                            |
| ------------------ | :----- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **employee**       | Object | Краткое представление Сотрудника в отчете. [Подробнее тут](../dictionaries/#suschnosti-sotrudnik)<br>`+Обязательное при ответе` |
| **margin**         | Float  | Рентабельность<br>`+Обязательное при ответе`                                                                                                                                        |
| **profit**         | Float  | Прибыль<br>`+Обязательное при ответе`                                                                                                                                               |
| **returnAvgCheck** | Float  | Средний чек возврата<br>`+Обязательное при ответе`                                                                                                                                  |
| **returnCostSum**  | Float  | Сумма себестоимостей возвратов<br>`+Обязательное при ответе`                                                                                                                        |
| **returnCount**    | Int    | Количество возвратов<br>`+Обязательное при ответе`                                                                                                                                  |
| **returnSum**      | Float  | Сумма возвратов<br>`+Обязательное при ответе`                                                                                                                                       |
| **salesAvgCheck**  | Float  | Средний чек продаж<br>`+Обязательное при ответе`                                                                                                                                    |
| **salesCount**     | Int    | Количество продаж<br>`+Обязательное при ответе`                                                                                                                                     |
| **sellCostSum**    | Float  | Сумма себестоимостей продаж<br>`+Обязательное при ответе`                                                                                                                           |
| **sellSum**        | Float  | Сумма продаж<br>`+Обязательное при ответе`                                                                                                                                          |

#### Структура объекта employee

| Название | Тип                                                       | Описание                                            |
| -------- | :-------------------------------------------------------- | :-------------------------------------------------- |
| **meta** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Сотрудника<br>`+Обязательное при ответе` |
| **name** | String(255)                                               | Имя Сотрудника<br>`+Обязательное при ответе`        |

#### Атрибуты доступные для фильтрации

Результаты отчета можно отфильтровать, используя параметр filter.
Для каждого параметра, кроме канала продаж, можно указать только одно значение.
Нельзя указывать пустые значения.

| Название          | Тип         | Фильтрация | Описание                                                                                                                                                           |
|-------------------| :-----------|:-----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **product**       | Object      | `=` `!=`   | ссылка на товар, услугу, комплект, модификацию или серию, по которой нужно произвести фильтрацию. Можно передать несколько значений.                                                                                                                                                      |
| **productFolder** | Object      | `=` `!=`   | параметр для фильтрации по нескольким группам товаров. Значение параметра - ссылка на группу товаров, которая должна быть включена в выборку или исключена из нее. Можно передать несколько значений.                                                                                     |
| **withSubFolders**| Boolean     | `=`        | параметр учета вложенных подгрупп. Работает только при наличии фильтра по `productFolder`. По умолчанию `true`, выводятся товары из дочерних подгрупп фильтруемой группы / групп товаров. При передаче `false` выводятся только товары из фильтруемой группы / групп, без учета подгрупп. |
| **agentTag**      | String(255) | `=`        | строка с названием группы контрагентов, по которой нужно произвести фильтрацию.                                                                                                                                                                                                           |
| **counterparty**  | Object      | `=`        | ссылка на контрагента, по которому нужно произвести фильтрацию.                                                                                                    |
| **organization**  | Object      | `=`        | ссылка на юрлицо, по которому нужно произвести фильтрацию.                                                                                                         |
| **store**         | Object      | `=`        | ссылка на склад, по которому нужно произвести фильтрацию.                                                                                                          |
| **project**       | Object      | `=`        | ссылка на проект, по которому нужно произвести фильтрацию.                                                                                                         |
| **retailStore**   | Object      | `=`        | ссылка на точку продаж, по которой нужно произвести фильтрацию.                                                                                                    |
| **supplier**      | Object      | `=`        | параметр для фильтрации по поставщику. Значение параметра - ссылка на контрагента или организацию. В выборку будут включены товары с указанным поставщиком.        |
| **salesChannel**  | Object      | `=`        | ссылка на канал продаж, по которому нужно провести фильтрацию. Допустимо повторное использование фильтра, когда требуется фильтрация по нескольким каналам продаж. |

Одновременная фильтрация по **product** и **productFolder** не поддерживается.


Примеры фильтрации:

- `filter=product=https://online.moysklad.ru/api/remap/1.2/entity/product/656c4032-8552-11e6-8a84-bae500000044`
- `filter=product=https://online.moysklad.ru/api/remap/1.2/entity/product/656c4032-8552-11e6-8a84-bae500000044;product=https://online.moysklad.ru/api/remap/1.2/entity/service/706b9cd3-8552-11e6-8a84-bae500000045;product=https://online.moysklad.ru/api/remap/1.2/entity/bundle/7a5f0ed5-8552-11e6-8a84-bae500000046`
- `filter=productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1`
- `filter=productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1;withSubFolders=false`
- `filter=productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1;productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b2`
- `filter=productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1;productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b2;withSubFolders=false`
- `filter=counterparty=https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f8f729a5-a784-11e9-ac12-000800000000`
- `filter=organization=https://online.moysklad.ru/api/remap/1.2/entity/organization/0347beb0-a785-11e9-ac12-000800000003`
- `filter=store=https://online.moysklad.ru/api/remap/1.2/entity/store/656c4032-8667-11e6-8a84-bae500003321`
- `filter=project=https://online.moysklad.ru/api/remap/1.2/entity/project/7a5f0ed5-8552-11e6-8a84-bae500000046`
- `filter=retailStore=https://online.moysklad.ru/api/remap/1.2/entity/retailstore/9ca74859-85c7-11e9-ac12-000d00000030`
- `filter=agentTag=favorites`
- `filter=supplier=https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f8f729a5-a784-11e9-ac12-000800000000`
- `filter=salesChannel=https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/65cc7e08-ea79-4ad7-9cde-3cc053f1c1b9`
- `filter=salesChannel=https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/65cc7e08-ea79-4ad7-9cde-3cc053f1c1b9;salesChannel=https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/ea012b09-4df3-439b-acf7-7d0464fbf603`
- `filter=product=https://online.moysklad.ru/api/remap/1.2/entity/product/656c4032-8552-11e6-8a84-bae500000044;counterparty=https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f8f729a5-a784-11e9-ac12-000800000000;organization=https://online.moysklad.ru/api/remap/1.2/entity/organization/0347beb0-a785-11e9-ac12-000800000003;store=https://online.moysklad.ru/api/remap/1.2/entity/store/656c4032-8667-11e6-8a84-bae500003321;project=https://online.moysklad.ru/api/remap/1.2/entity/project/7a5f0ed5-8552-11e6-8a84-bae500000046;retailStore=https://online.moysklad.ru/api/remap/1.2/entity/retailstore/9ca74859-85c7-11e9-ac12-000d00000030;salesChannel=https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/65cc7e08-ea79-4ad7-9cde-3cc053f1c1b9`

### Получить Прибыльность по сотрудникам

**Параметры**

| Параметр                       | Описание                                                                                                                                                                          |
| ------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.                                            |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                                                            |
| **momentFrom**                 | `date` (optional) *Example: 2016-04-15 15:48:46* Один из [параметров фильтрации выборки](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter). |
| **momentTo**                   | `date` (optional) *Example: 2016-04-15 15:48:46* Один из [параметров фильтрации выборки](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter). |
При отсутствии параметров **momentFrom** и **momentTo** отображаются отчеты за последний месяц.  
При отсутствии параметра **momentFrom** и указании параметра **momentTo** отображаются отчеты с начала текущего года по **momentTo**.  
При отсутствии параметра **momentTo** и указании параметра **momentFrom** отображаются отчеты с **momentFrom** по текущий день.  

> Запрос на получение отчета "Прибыльность по сотрудникам".

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/profit/byemployee"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/report/profit/byEmployee",
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
#### Атрибуты объекта отчета:

| Название           | Тип    | Описание                                                                                                                                                                            |
| ------------------ | :----- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **counterparty**   | Object | Краткое представление Покупателя в отчете. [Подробнее тут](../dictionaries/#suschnosti-kontragent)<br>`+Обязательное при ответе` |
| **margin**         | Float  | Рентабельность<br>`+Обязательное при ответе`                                                                                                                                        |
| **profit**         | Float  | Прибыль<br>`+Обязательное при ответе`                                                                                                                                               |
| **returnAvgCheck** | Float  | Средний чек возврата<br>`+Обязательное при ответе`                                                                                                                                  |
| **returnCostSum**  | Float  | Сумма себестоимостей возвратов<br>`+Обязательное при ответе`                                                                                                                        |
| **returnCount**    | Int    | Количество возвратов<br>`+Обязательное при ответе`                                                                                                                                  |
| **returnSum**      | Float  | Сумма возвратов<br>`+Обязательное при ответе`                                                                                                                                       |
| **salesAvgCheck**  | Float  | Средний чек продаж<br>`+Обязательное при ответе`                                                                                                                                    |
| **salesCount**     | Int    | Количество продаж<br>`+Обязательное при ответе`                                                                                                                                     |
| **sellCostSum**    | Float  | Сумма себестоимостей продаж<br>`+Обязательное при ответе`                                                                                                                           |
| **sellSum**        | Float  | Сумма продаж<br>`+Обязательное при ответе`                                                                                                                                          |

#### Структура объекта counterparty

| Название | Тип                                                       | Описание                                              |
| -------- | :-------------------------------------------------------- | :---------------------------------------------------- |
| **meta** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Покупателя<br>`+Обязательное при ответе`   |
| **name** | String(255)                                               | Наименование Покупателя<br>`+Обязательное при ответе` |

#### Атрибуты доступные для фильтрации

Результаты отчета можно отфильтровать, используя параметр filter.
Для каждого параметра, кроме канала продаж, можно указать только одно значение.
Нельзя указывать пустые значения.

| Название          | Тип         | Фильтрация | Описание                                                                                                                                                           |
|-------------------| :-----------|:-----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **product**       | Object      | `=` `!=`   | ссылка на товар, услугу, комплект, модификацию или серию, по которой нужно произвести фильтрацию. Можно передать несколько значений.                                                                                                                                                      |
| **productFolder** | Object      | `=` `!=`   | параметр для фильтрации по нескольким группам товаров. Значение параметра - ссылка на группу товаров, которая должна быть включена в выборку или исключена из нее. Можно передать несколько значений.                                                                                     |
| **withSubFolders**| Boolean     | `=`        | параметр учета вложенных подгрупп. Работает только при наличии фильтра по `productFolder`. По умолчанию `true`, выводятся товары из дочерних подгрупп фильтруемой группы / групп товаров. При передаче `false` выводятся только товары из фильтруемой группы / групп, без учета подгрупп. |
| **agentTag**      | String(255) | `=`        | строка с названием группы контрагентов, по которой нужно произвести фильтрацию.                                                                                                                                                                                                           |
| **counterparty**  | Object      | `=`        | ссылка на контрагента, по которому нужно произвести фильтрацию.                                                                                                    |
| **organization**  | Object      | `=`        | ссылка на юрлицо, по которому нужно произвести фильтрацию.                                                                                                         |
| **store**         | Object      | `=`        | ссылка на склад, по которому нужно произвести фильтрацию.                                                                                                          |
| **project**       | Object      | `=`        | ссылка на проект, по которому нужно произвести фильтрацию.                                                                                                         |
| **retailStore**   | Object      | `=`        | ссылка на точку продаж, по которой нужно произвести фильтрацию.                                                                                                    |
| **supplier**      | Object      | `=`        | параметр для фильтрации по поставщику. Значение параметра - ссылка на контрагента или организацию. В выборку будут включены товары с указанным поставщиком.        |
| **salesChannel**  | Object      | `=`        | ссылка на канал продаж, по которому нужно провести фильтрацию. Допустимо повторное использование фильтра, когда требуется фильтрация по нескольким каналам продаж. |

Одновременная фильтрация по **product** и **productFolder** не поддерживается.


Примеры фильтрации:

- `filter=product=https://online.moysklad.ru/api/remap/1.2/entity/product/656c4032-8552-11e6-8a84-bae500000044`
- `filter=product=https://online.moysklad.ru/api/remap/1.2/entity/product/656c4032-8552-11e6-8a84-bae500000044;product=https://online.moysklad.ru/api/remap/1.2/entity/service/706b9cd3-8552-11e6-8a84-bae500000045;product=https://online.moysklad.ru/api/remap/1.2/entity/bundle/7a5f0ed5-8552-11e6-8a84-bae500000046`
- `filter=productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1`
- `filter=productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1;withSubFolders=false`
- `filter=productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1;productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b2`
- `filter=productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1;productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b2;withSubFolders=false`
- `filter=counterparty=https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f8f729a5-a784-11e9-ac12-000800000000`
- `filter=organization=https://online.moysklad.ru/api/remap/1.2/entity/organization/0347beb0-a785-11e9-ac12-000800000003`
- `filter=store=https://online.moysklad.ru/api/remap/1.2/entity/store/656c4032-8667-11e6-8a84-bae500003321`
- `filter=project=https://online.moysklad.ru/api/remap/1.2/entity/project/7a5f0ed5-8552-11e6-8a84-bae500000046`
- `filter=retailStore=https://online.moysklad.ru/api/remap/1.2/entity/retailstore/9ca74859-85c7-11e9-ac12-000d00000030`
- `filter=agentTag=favorites`
- `filter=supplier=https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f8f729a5-a784-11e9-ac12-000800000000`
- `filter=salesChannel=https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/65cc7e08-ea79-4ad7-9cde-3cc053f1c1b9`
- `filter=salesChannel=https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/65cc7e08-ea79-4ad7-9cde-3cc053f1c1b9;salesChannel=https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/ea012b09-4df3-439b-acf7-7d0464fbf603`
- `filter=product=https://online.moysklad.ru/api/remap/1.2/entity/product/656c4032-8552-11e6-8a84-bae500000044;counterparty=https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f8f729a5-a784-11e9-ac12-000800000000;organization=https://online.moysklad.ru/api/remap/1.2/entity/organization/0347beb0-a785-11e9-ac12-000800000003;store=https://online.moysklad.ru/api/remap/1.2/entity/store/656c4032-8667-11e6-8a84-bae500003321;project=https://online.moysklad.ru/api/remap/1.2/entity/project/7a5f0ed5-8552-11e6-8a84-bae500000046;retailStore=https://online.moysklad.ru/api/remap/1.2/entity/retailstore/9ca74859-85c7-11e9-ac12-000d00000030;salesChannel=https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/65cc7e08-ea79-4ad7-9cde-3cc053f1c1b9`

### Получить Прибыльность по покупателям

**Параметры**

| Параметр                       | Описание                                                                                                                                                                          |
| ------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.                                            |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                                                            |
| **momentFrom**                 | `date` (optional) *Example: 2016-04-15 15:48:46* Один из [параметров фильтрации выборки](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter). |
| **momentTo**                   | `date` (optional) *Example: 2016-04-15 15:48:46* Один из [параметров фильтрации выборки](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter). |
При отсутствии параметров **momentFrom** и **momentTo** отображаются отчеты за последний месяц.  
При отсутствии параметра **momentFrom** и указании параметра **momentTo** отображаются отчеты с начала текущего года по **momentTo**.  
При отсутствии параметра **momentTo** и указании параметра **momentFrom** отображаются отчеты с **momentFrom** по текущий день.  

> Запрос на получение отчета "Прибыльность по покупателям".

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/profit/bycounterparty"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/report/profit/bycounterparty",
    "type": "salesbyCounterparty",
    "mediaType": "application/json",
    "size": 3,
    "limit": 1,
    "offset": 0,
    "nextHref": "https://online.moysklad.ru/api/remap/1.2/report/profit/bycounterparty?limit=1&offset=1"
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

#### Прибыльность по каналам продаж
#### Атрибуты объекта отчета:

| Название           | Тип    | Описание                                                                                                                               |
|--------------------|:-------|:---------------------------------------------------------------------------------------------------------------------------------------|
| **salesChannel**   | Object | Краткое представление Канала продаж в отчете. [Подробнее тут](../dictionaries/#suschnosti-kanal-prodazh)<br>`+Обязательное при ответе` |
| **margin**         | Float  | Рентабельность<br>`+Обязательное при ответе`                                                                                           |
| **profit**         | Float  | Прибыль<br>`+Обязательное при ответе`                                                                                                  |
| **returnAvgCheck** | Float  | Средний чек возврата<br>`+Обязательное при ответе`                                                                                     |
| **returnCostSum**  | Float  | Сумма себестоимостей возвратов<br>`+Обязательное при ответе`                                                                           |
| **returnCount**    | Int    | Количество возвратов<br>`+Обязательное при ответе`                                                                                     |
| **returnSum**      | Float  | Сумма возвратов<br>`+Обязательное при ответе`                                                                                          |
| **salesAvgCheck**  | Float  | Средний чек продаж<br>`+Обязательное при ответе`                                                                                       |
| **salesCount**     | Int    | Количество продаж<br>`+Обязательное при ответе`                                                                                        |
| **sellCostSum**    | Float  | Сумма себестоимостей продаж<br>`+Обязательное при ответе`                                                                              |
| **sellSum**        | Float  | Сумма продаж<br>`+Обязательное при ответе`                                                                                             |

#### Структура объекта salesChannel

| Название | Тип                                                       | Описание                                                                                                                                      |
|----------|:----------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|
| **meta** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Канала продаж<br>`+Обязательное при ответе`                                                                                        |
| **name** | String(255)                                               | Наименование Канала продаж<br>`+Обязательное при ответе`                                                                                      |
| **type** | Enum                                                      | Тип Канала продаж [Подробнее тут](../dictionaries/#suschnosti-kanal-prodazh-kanaly-prodazh-tip-kanala-prodazh)<br>`+Обязательное при ответе ` |

#### Атрибуты доступные для фильтрации

Результаты отчета можно отфильтровать, используя параметр filter.
Для каждого параметра, кроме канала продаж, можно указать только одно значение.
Нельзя указывать пустые значения.

| Название          | Тип         | Фильтрация | Описание                                                                                                                                                           |
|-------------------| :-----------|:-----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **product**       | Object      | `=` `!=`   | ссылка на товар, услугу, комплект, модификацию или серию, по которой нужно произвести фильтрацию. Можно передать несколько значений.                                                                                                                                                      |
| **productFolder** | Object      | `=` `!=`   | параметр для фильтрации по нескольким группам товаров. Значение параметра - ссылка на группу товаров, которая должна быть включена в выборку или исключена из нее. Можно передать несколько значений.                                                                                     |
| **withSubFolders**| Boolean     | `=`        | параметр учета вложенных подгрупп. Работает только при наличии фильтра по `productFolder`. По умолчанию `true`, выводятся товары из дочерних подгрупп фильтруемой группы / групп товаров. При передаче `false` выводятся только товары из фильтруемой группы / групп, без учета подгрупп. |
| **agentTag**      | String(255) | `=`        | строка с названием группы контрагентов, по которой нужно произвести фильтрацию.                                                                                                                                                                                                           |
| **counterparty**  | Object      | `=`        | ссылка на контрагента, по которому нужно произвести фильтрацию.                                                                                                    |
| **organization**  | Object      | `=`        | ссылка на юрлицо, по которому нужно произвести фильтрацию.                                                                                                         |
| **store**         | Object      | `=`        | ссылка на склад, по которому нужно произвести фильтрацию.                                                                                                          |
| **project**       | Object      | `=`        | ссылка на проект, по которому нужно произвести фильтрацию.                                                                                                         |
| **supplier**      | Object      | `=`        | параметр для фильтрации по поставщику. Значение параметра - ссылка на контрагента или организацию. В выборку будут включены товары с указанным поставщиком.        |
| **salesChannel**  | Object      | `=`        | ссылка на канал продаж, по которому нужно провести фильтрацию. Допустимо повторное использование фильтра, когда требуется фильтрация по нескольким каналам продаж. |

Одновременная фильтрация по **product** и **productFolder** не поддерживается.


Примеры фильтрации:

- `filter=product=https://online.moysklad.ru/api/remap/1.2/entity/product/656c4032-8552-11e6-8a84-bae500000044`
- `filter=product=https://online.moysklad.ru/api/remap/1.2/entity/product/656c4032-8552-11e6-8a84-bae500000044;product=https://online.moysklad.ru/api/remap/1.2/entity/service/706b9cd3-8552-11e6-8a84-bae500000045;product=https://online.moysklad.ru/api/remap/1.2/entity/bundle/7a5f0ed5-8552-11e6-8a84-bae500000046`
- `filter=productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1`
- `filter=productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1;withSubFolders=false`
- `filter=productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1;productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b2`
- `filter=productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1;productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b2;withSubFolders=false`
- `filter=counterparty=https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f8f729a5-a784-11e9-ac12-000800000000`
- `filter=organization=https://online.moysklad.ru/api/remap/1.2/entity/organization/0347beb0-a785-11e9-ac12-000800000003`
- `filter=store=https://online.moysklad.ru/api/remap/1.2/entity/store/656c4032-8667-11e6-8a84-bae500003321`
- `filter=project=https://online.moysklad.ru/api/remap/1.2/entity/project/7a5f0ed5-8552-11e6-8a84-bae500000046`
- `filter=agentTag=favorites`
- `filter=supplier=https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f8f729a5-a784-11e9-ac12-000800000000`
- `filter=salesChannel=https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/65cc7e08-ea79-4ad7-9cde-3cc053f1c1b9`
- `filter=salesChannel=https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/65cc7e08-ea79-4ad7-9cde-3cc053f1c1b9;salesChannel=https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/ea012b09-4df3-439b-acf7-7d0464fbf603`
- `filter=product=https://online.moysklad.ru/api/remap/1.2/entity/product/656c4032-8552-11e6-8a84-bae500000044;counterparty=https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f8f729a5-a784-11e9-ac12-000800000000;organization=https://online.moysklad.ru/api/remap/1.2/entity/organization/0347beb0-a785-11e9-ac12-000800000003;store=https://online.moysklad.ru/api/remap/1.2/entity/store/656c4032-8667-11e6-8a84-bae500003321;project=https://online.moysklad.ru/api/remap/1.2/entity/project/7a5f0ed5-8552-11e6-8a84-bae500000046;salesChannel=https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/65cc7e08-ea79-4ad7-9cde-3cc053f1c1b9`

### Получить Прибыльность по каналам продаж

**Параметры**

| Параметр       | Описание                                                                                                                                                                          |
|----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **limit**      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.                                            |
| **offset**     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                                                            |
| **momentFrom** | `date` (optional) *Example: 2016-04-15 15:48:46* Один из [параметров фильтрации выборки](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter). |
| **momentTo**   | `date` (optional) *Example: 2016-04-15 15:48:46* Один из [параметров фильтрации выборки](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter). |
При отсутствии параметров **momentFrom** и **momentTo** отображаются отчеты за последний месяц.  
При отсутствии параметра **momentFrom** и указании параметра **momentTo** отображаются отчеты с начала текущего года по **momentTo**.  
При отсутствии параметра **momentTo** и указании параметра **momentFrom** отображаются отчеты с **momentFrom** по текущий день.

> Запрос на получение отчета "Прибыльность по каналам продаж".

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/profit/bysaleschannel"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отчета.

```json
{
  "context" : {
    "employee" : {
      "meta" : {
        "href" : "https://online.moysklad.ru/api/remap/1.2/context/employee",
        "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type" : "employee",
        "mediaType" : "application/json"
      }
    }
  },
  "meta" : {
    "href" : "https://online.moysklad.ru/api/remap/1.2/report/profit/bysaleschannel",
    "type" : "salesbysaleschannel",
    "mediaType" : "application/json",
    "size" : 1,
    "limit" : 1000,
    "offset" : 0
  },
  "rows" : [ {
    "salesChannel" : {
      "meta" : {
        "href" : "https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/656c4032-8552-11e6-8a84-bae500000044",
        "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/saleschannel/metadata",
        "type" : "saleschannel",
        "mediaType" : "application/json",
        "uuidHref" : "https://online.moysklad.ru/app/#saleschannel/edit?id=656c4032-8552-11e6-8a84-bae500000044"
      },
      "name" : "ijk-shop.ru",
      "type" : "ECOMMERCE"
    },
    "salesCount" : 1.0,
    "salesAvgCheck" : 252500.0,
    "sellSum" : 252500.0,
    "sellCostSum" : 0.0,
    "returnCount" : 0.0,
    "returnAvgCheck" : 0.0,
    "returnSum" : 0.0,
    "returnCostSum" : 0.0,
    "profit" : 252500.0,
    "margin" : 0.0
  } ]
}
```
