## Отчет Обороты
Средствами JSON API можно запросить отчет "Обороты" по всем товарам и модификациям. Для доступа к отчету через API требуется право на просмотр отчета *Обороты*.
О том, что представляет собой отчет "Обороты" вы можете прочитать по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203396063-%D0%9E%D0%B1%D0%BE%D1%80%D0%BE%D1%82%D1%8B).

### Обороты по товарам
Общий отчет по оборотам товаров и модификаций без детализации по складам. 

#### Атрибуты объекта отчета

| Название          | Тип    | Описание                                                                                                                                                                                                     |
| ----------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **assortment**    | Object | Краткое представление Товара или Модификации в отчете. [Подробнее тут](#otchety-otchet-oboroty-oboroty-po-towaram-struktura-ob-ekta-assortment)<br>`+Обязательное при ответе`                                |
| **onPeriodStart** | Object | Показатели на начало периода. [Подробнее тут](#otchety-otchet-oboroty-oboroty-po-towaram-struktura-ob-ekta-pokazateli-onperiodstart-onperiodend-income-outcome)<br>`+Обязательное при ответе`                |
| **onPeriodEnd**   | Object | Показатели на конец периода. [Подробнее тут](#otchety-otchet-oboroty-oboroty-po-towaram-struktura-ob-ekta-pokazateli-onperiodstart-onperiodend-income-outcome)<br>`+Обязательное при ответе`                 |
| **income**        | Object | Показатели прихода в течение периода отчета. [Подробнее тут](#otchety-otchet-oboroty-oboroty-po-towaram-struktura-ob-ekta-pokazateli-onperiodstart-onperiodend-income-outcome)<br>`+Обязательное при ответе` |
| **outcome**       | Object | Показатели расхода в течение периода отчета. [Подробнее тут](#otchety-otchet-oboroty-oboroty-po-towaram-struktura-ob-ekta-pokazateli-onperiodstart-onperiodend-income-outcome)<br>`+Обязательное при ответе` |

#### Структура объекта assortment

| Название          | Тип                                                       | Описание                                                          |
| ----------------- | :-------------------------------------------------------- | :---------------------------------------------------------------- |
| **article**       | String(255)                                               | Артикул Товара                                                    |
| **code**          | String(255)                                               | Код Товара                                                        |
| **image**         | Object                                                    | Первое изображение Товара или Модификации                         |
| **meta**          | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Товара или Модификации<br>`+Обязательное при ответе`   |
| **name**          | String(255)                                               | Наименование Товара или Модификации<br>`+Обязательное при ответе` |
| **productFolder** | Object                                                    | Группа Товара или Модификации                                     |
| **uom**           | Object                                                    | Единица измерения                                                 |

#### Структура объекта показатели (onPeriodStart, onPeriodEnd, income, outcome)

| Название     | Тип   | Описание                                               |
| ------------ | :---- | :----------------------------------------------------- |
| **sum**      | Float | Сумма себестоимости<br>`+Обязательное при ответе`      |
| **quantity** | Float | Количество единиц товара<br>`+Обязательное при ответе` |

#### Атрибуты доступные для фильтрации

Результаты отчета можно отфильтровать, используя параметр filter. Для каждого параметра можно указать только одно значение. Нельзя указывать пустые значения.

| Название                       | Тип         | Фильтрация | Описание                                                                                                                                                                                                                                                                                                                       |
| ------------------------------ | :---------- | :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **agent**                      | Object      | `=`        | ссылка на контрагента, по которому нужно произвести фильтрацию.                                                                                                                                                                                                                                                                |
| **agentTag**                   | String(255) | `=`        | строка с названием группы контрагентов, по которой нужно произвести фильтрацию.                                                                                                                                                                                                                                                |
| **contract**                   | Object      | `=`        | ссылка на договор, по которому нужно произвести фильтрацию.                                                                                                                                                                                                                                                                    |
| **organization**               | Object      | `=`        | ссылка на юрлицо, по которому нужно произвести фильтрацию.                                                                                                                                                                                                                                                                     |
| **product**                    | Object      | `=`        | ссылка на товар, по которому нужно произвести фильтрацию. В выдаче будет товар вместе с его модификациями при `groupBy=variant`.                                                                                                                                                                                               |
| **project**                    | Object      | `=`        | ссылка на проект, по которому нужно произвести фильтрацию.                                                                                                                                                                                                                                                                     |
| **retailStore**                | Object      | `=`        | ссылка на точку продаж, по которой нужно произвести фильтрацию.                                                                                                                                                                                                                                                                |
| **store**                      | Object      | `=`        | ссылка на склад, по которому нужно произвести фильтрацию.                                                                                                                                                                                                                                                                      |
| **supplier**                   | Object      | `=`        | параметр для фильтрации по поставщику. Значение параметра - ссылка на контрагента или организацию. В выборку будут включены или исключены товары с указанным поставщиком. Можно передать пустое значение, тогда в выборку попадут товары с незаполненным или заполненным поставщиком. |
| **type**                       | Enum        | `=`        | параметр для фильтрации "тип документа", по которому можно произвести фильтрацию. Возможные значения `supply`, `purchasereturn`, `demand`, `salesreturn`, `loss`, `enter`, `move`, `processing`, `retaildemand`, `retailsalesreturn`.                                                                                          |
| **variant**                    | Object      | `=`        | ссылка на модификацию, по которой нужно произвести фильтрацию.                                                                                                                                                                                                                                                                 |
| **withoutturnover**            | Boolean     | `=`        | параметр для фильтрации "Показывать товары без движения". Возможные значения: `true`, `false`.                                                                                                                                                                                                                                 |


Примеры фильтрации:

- `filter=agent=https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f8f729a5-a784-11e9-ac12-000800000000`
- `filter=product=https://online.moysklad.ru/api/remap/1.2/entity/product/f8f729a5-a784-11e9-ac12-000800000000`
- `filter=organization=https://online.moysklad.ru/api/remap/1.2/entity/organization/0347beb0-a785-11e9-ac12-000800000003`
- `filter=store=https://online.moysklad.ru/api/remap/1.2/entity/store/656c4032-8667-11e6-8a84-bae500003321`
- `filter=project=https://online.moysklad.ru/api/remap/1.2/entity/project/7a5f0ed5-8552-11e6-8a84-bae500000046`
- `filter=contract=https://online.moysklad.ru/api/remap/1.2/entity/contract/7a5f0ed5-8552-11e6-8a84-bae500085742`
- `filter=retailStore=https://online.moysklad.ru/api/remap/1.2/entity/retailstore/9ca74859-85c7-11e9-ac12-000d00000030`
- `filter=agentTag=favorites`
- `filter=withoutturnover=true`
- `filter=type=supply`
- `filter=supplier=https://online.moysklad.ru/api/remap/1.2/entity/counterparty/656c4032-8667-11e6-8a84-bae5000033aa`

#### Фильтрация по дополнительным полям

C помощью параметра filter выборку также можно фильтровать по значениям дополнительных полей товаров.

Для фильтрации по значению дополнительного поля, нужно передать ссылку на дополнительное поле и его значение:

`filter=https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/<id>=<Значение>`

Для фильтрации по значению дополнительных полей типа строка, текст и ссылка нужно использовать оператор `=`. Также можно использовать операторы `=` и `!=` с пустым значением, чтобы получить товары только с незаполненным дополнительным полем или только заполненным, соответственно.

Для фильтрации по значению дополнительных полей типа целое число, вещественное число, дата можно использовать операторы `=`, `>=`, `<=`. Также можно использовать операторы `=` и `!=` с пустым значением, чтобы получить товары только с незаполненным дополнительным полем или только заполненным, соответственно. Для дополнительного поля типа дата-время значение передается в виде строки в [формате дата-время](../#mojsklad-json-api-obschie-swedeniq-format-daty-i-wremeni).

Для фильтрации по значению дополнительных полей типа справочник можно использовать операторы `=` и `!=`. В качестве значения нужно передавать ссылку на объект справочника. Также можно использовать операторы `=` и `!=` с пустым значением, чтобы получить товары только с незаполненным дополнительным полем или только заполненным, соответственно.

Пример фильтрации по дополнительному полю типа справочник складов: `filter=https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/ea12a6dd-79e5-11e9-9ff4-31500040893d=http://online.moysklad.ru/api/remap/1.2/entity/store/302f2a81-9977-11e9-9109-f8fc00020e02`

Пример фильтрации по дополнительному полю типа пользовательский справочник: `filter=https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/ea12a6dd-79e5-11e9-9ff4-31500040893d=http://online.moysklad.ru/api/remap/1.2/entity/customentity/8955249d-997d-11e9-9ff4-3150000e65c3/8955314d-997d-11e9-9ff4-3150000e65c4`

Для фильтрации по значению дополнительных полей типа флажок нужно использовать оператор `=`. Возможные значения: true, false.

Фильтрация по дополнительным полям типа файл не поддерживается.


### Получить Обороты по товарам

Запрос на получение отчета Обороты по товарам.

**Параметры**

| Параметр                       | Описание                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.                                                                                                                                                                                                     |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                                                                                                                                                                                                                     |
| **momentFrom**                 | `date` (optional) *Example: 2018-09-01 00:00:00* Начало периода отчета                                                                                                                                                                                                                                                                     |
| **momentTo**                   | `date` (optional) *Example: 2018-10-01 00:00:00* Конец периода отчета                                                                                                                                                                                                                                                                      |
| **groupBy**                    | `string` (optional) тип, по которому нужно сгруппировать выдачу. По умолчанию параметр **groupBy** имеет значение `product`. Если вы хотите увидеть только объекты типа product, необходимо выставить соответствующее значение параметра. <ul><li>groupBy=product - только товары</li><li>groupBy=variant - товары и модификации</li></ul> |

**Заголовки**

| Заголовок                      | Описание                                                                                                                                                                                                                                                                                    |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **X-Lognex-Accept-Timezone**   | Опциональный заголовок, в котором указана текущая дата на клиенте в RFC 3522. Таймзону обязательно указывать в формате знак и 4 символа (не в Obsolete Date and Time). Пример даты: `Wed, 16 Aug 2017 23:07:01 +0700`. При подсчете показателей даты операций смещаются в таймзону клиента. |
| **X-Lognex-Content-Timezone**  | Заголовок ответа. В нем указывается (как думает сервер) текущая дата на клиенте в RFC 3522.                                                                                                                                                                                                 |


> Запрос на получение отчета "Обороты по товарам".

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/turnover/all"
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
    "href": "https://online.moysklad.ru/api/remap/1.2/report/turnover/all",
    "type": "turnover",
    "mediaType": "application/json",
    "size": 3,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/66990dc7-bdfe-11eb-c0a8-800c00000016",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=66989c14-bdfe-11eb-c0a8-800c00000014"
        },
        "name": "товар 2"
      },
      "onPeriodStart": {
        "quantity": 0.0,
        "sum": 0.0
      },
      "onPeriodEnd": {
        "quantity": 1.0,
        "sum": 0.0
      },
      "income": {
        "quantity": 3.0,
        "sum": 0.0
      },
      "outcome": {
        "quantity": 2.0,
        "sum": 0.0
      }
    },
    {
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/3e32ef51-c1f1-11eb-c0a8-800c00000003",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
          "type": "variant",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=3e3278e5-c1f1-11eb-c0a8-800c00000001"
        },
        "name": "2 (char)"
      },
      "onPeriodStart": {
        "quantity": 0.0,
        "sum": 0.0
      },
      "onPeriodEnd": {
        "quantity": 2.0,
        "sum": 20000.0
      },
      "income": {
        "quantity": 3.0,
        "sum": 30000.0
      },
      "outcome": {
        "quantity": 1.0,
        "sum": 10000.0
      }
    },
    {
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/b008915c-b977-11eb-c0a8-800a00000008",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=b0078621-b977-11eb-c0a8-800a00000006"
        },
        "name": "товар 1",
        "code": "00001",
        "article": "123",
        "uom": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
            "type": "uom",
            "mediaType": "application/json"
          },
          "name": "шт"
        },
        "productFolder": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/e229bb59-c202-11eb-c0a8-800b00000002",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/metadata",
            "type": "productfolder",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e229bb59-c202-11eb-c0a8-800b00000002"
          },
          "name": "группа"
        }
      },
      "onPeriodStart": {
        "quantity": 0.0,
        "sum": 0.0
      },
      "onPeriodEnd": {
        "quantity": 2.0,
        "sum": 4400.0
      },
      "income": {
        "quantity": 3.0,
        "sum": 6600.0
      },
      "outcome": {
        "quantity": 1.0,
        "sum": 2200.0
      }
    }
  ]
}
```

### Обороты по товару с детализацией по складам
Отчет обороты по товару и его модификациям с детализацией по складам. 

#### Атрибуты объекта отчета

| Название         | Тип    | Описание                                                                                                                                                                                               |
| ---------------- | :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **assortment**   | Object | Краткое представление Товара или Модификации в отчете. [Подробнее тут](#otchety-otchet-oboroty-oboroty-po-towaru-s-detalizaciej-po-skladam-struktura-ob-ekta-assortment)<br>`+Обязательное при ответе` |
| **stockByStore** | Object | Детализация оборотов по складам. [Подробнее тут](#otchety-otchet-oboroty-oboroty-po-towaru-s-detalizaciej-po-skladam-struktura-ob-ekta-detalizaciq-oborotow-po-skladam)<br>`+Обязательное при ответе`  |

#### Структура объекта assortment

| Название          | Тип                                                       | Описание                                                          |
| ----------------- | :-------------------------------------------------------- | :---------------------------------------------------------------- |
| **article**       | String(255)                                               | Артикул Товара                                                    |
| **code**          | String(255)                                               | Код Товара                                                        |
| **image**         | Object                                                    | Первое изображение Товара или Модификации                         |
| **meta**          | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Товара или Модификации<br>`+Обязательное при ответе`   |
| **name**          | String(255)                                               | Наименование Товара или Модификации<br>`+Обязательное при ответе` |
| **productFolder** | Object                                                    | Группа Товара или Модификации                                     |
| **uom**           | Object                                                    | Единица измерения                                                 |

#### Структура объекта детализация оборотов по складам

| Название          | Тип    | Описание                                                                                                                                                                                                                              |
| ----------------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **store**         | Object | Склад.<br>`+Обязательное при ответе`                                                                                                                                                                                                  |
| **onPeriodStart** | Object | Показатели на начало периода. [Подробнее тут](#otchety-otchet-oboroty-oboroty-po-towaru-s-detalizaciej-po-skladam-struktura-ob-ekta-pokazateli-onperiodstart-onperiodend-income-outcome)<br>`+Обязательное при ответе`                |
| **onPeriodEnd**   | Object | Показатели на конец периода. [Подробнее тут](#otchety-otchet-oboroty-oboroty-po-towaru-s-detalizaciej-po-skladam-struktura-ob-ekta-pokazateli-onperiodstart-onperiodend-income-outcome)<br>`+Обязательное при ответе`                 |
| **income**        | Object | Показатели прихода в течение периода отчета. [Подробнее тут](#otchety-otchet-oboroty-oboroty-po-towaru-s-detalizaciej-po-skladam-struktura-ob-ekta-pokazateli-onperiodstart-onperiodend-income-outcome)<br>`+Обязательное при ответе` |
| **outcome**       | Object | Показатели расхода в течение периода отчета. [Подробнее тут](#otchety-otchet-oboroty-oboroty-po-towaru-s-detalizaciej-po-skladam-struktura-ob-ekta-pokazateli-onperiodstart-onperiodend-income-outcome)<br>`+Обязательное при ответе` |

#### Структура объекта показатели (onPeriodStart, onPeriodEnd, income, outcome)

| Название     | Тип   | Описание                                               |
| ------------ | :---- | :----------------------------------------------------- |
| **sum**      | Float | Сумма себестоимости<br>`+Обязательное при ответе`      |
| **quantity** | Float | Количество единиц товара<br>`+Обязательное при ответе` |

#### Атрибуты доступные для фильтрации

Результаты отчета можно отфильтровать, используя параметр filter. Для каждого параметра можно указать только одно значение. Нельзя указывать пустые значения.

Является обязательным указание одного из параметров фильтрации **product** или **variant**.

| Название                       | Тип         | Фильтрация | Описание                                                                                                   |
| ------------------------------ | :---------- | :--------- | :--------------------------------------------------------------------------------------------------------- |
| **agent**                      | Object      | `=`        | ссылка на контрагента, по которому нужно произвести фильтрацию.                                            |
| **agentTag**                   | String(255) | `=`        | строка с названием группы контрагентов, по которой нужно произвести фильтрацию.                            |
| **contract**                   | Object      | `=`        | ссылка на договор, по которому нужно произвести фильтрацию.                                                |
| **organization**               | Object      | `=`        | ссылка на юрлицо, по которому нужно произвести фильтрацию.                                                 |
| **product**                    | Object      | `=`        | ссылка на товар, по которому нужно произвести фильтрацию. В выдаче будет товар вместе с его модификациями. |
| **project**                    | Object      | `=`        | ссылка на проект, по которому нужно произвести фильтрацию.                                                 |
| **retailStore**                | Object      | `=`        | ссылка на точку продаж, по которой нужно произвести фильтрацию.                                            |
| **store**                      | Object      | `=`        | ссылка на склад, по которому нужно произвести фильтрацию.                                                  |
| **variant**                    | Object      | `=`        | ссылка на модификацию, по которой нужно произвести фильтрацию.                                             |

Примеры фильтрации:

- `filter=agent=https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f8f729a5-a784-11e9-ac12-000800000000`
- `filter=product=https://online.moysklad.ru/api/remap/1.2/entity/product/f8f729a5-a784-11e9-ac12-000800000000`
- `filter=organization=https://online.moysklad.ru/api/remap/1.2/entity/organization/0347beb0-a785-11e9-ac12-000800000003`
- `filter=store=https://online.moysklad.ru/api/remap/1.2/entity/store/656c4032-8667-11e6-8a84-bae500003321`
- `filter=project=https://online.moysklad.ru/api/remap/1.2/entity/project/7a5f0ed5-8552-11e6-8a84-bae500000046`
- `filter=contract=https://online.moysklad.ru/api/remap/1.2/entity/contract/7a5f0ed5-8552-11e6-8a84-bae500085742`
- `filter=retailStore=https://online.moysklad.ru/api/remap/1.2/entity/retailstore/9ca74859-85c7-11e9-ac12-000d00000030`
- `filter=agentTag=favorites`

### Получить Обороты по товару

Запрос на получение отчета Обороты по товару.

Для успешного выполнения запроса необходимо указание одного из параметров фильтрации **product** или **variant**. 

**Параметры**

| Параметр                       | Описание                                                               |
| ------------------------------ | :--------------------------------------------------------------------- |
| **momentFrom**                 | `date` (optional) *Example: 2018-09-01 00:00:00* Начало периода отчета |
| **momentTo**                   | `date` (optional) *Example: 2018-10-01 00:00:00* Конец периода отчета  |

**Заголовки**

| Заголовок                      | Описание                                                                                                                                                                                                                                                                                    |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **X-Lognex-Accept-Timezone**   | Опциональный заголовок, в котором указана текущая дата на клиенте в RFC 3522. Таймзону обязательно указывать в формате знак и 4 символа (не в Obsolete Date and Time). Пример даты: `Wed, 16 Aug 2017 23:07:01 +0700`. При подсчете показателей даты операций смещаются в таймзону клиента. |
| **X-Lognex-Content-Timezone**  | Заголовок ответа. В нем указывается (как думает сервер) текущая дата на клиенте в RFC 3522.                                                                                                                                                                                                 |


> Запрос на получение отчета "Обороты по товару" с указанным id товара.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/turnover/bystore?filter=product=https://online.moysklad.ru/api/remap/1.2/entity/product/66990dc7-bdfe-11eb-c0a8-800c00000016"
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
    "href": "https://online.moysklad.ru/api/remap/1.2/report/turnover/bystore?filter=product=https://online.moysklad.ru/api/remap/1.2/entity/product/66990dc7-bdfe-11eb-c0a8-800c00000016",
    "type": "turnoverbystore",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/66990dc7-bdfe-11eb-c0a8-800c00000016",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=66989c14-bdfe-11eb-c0a8-800c00000014"
        },
        "name": "товар 2",
        "uom": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/af3b8110-5a23-4839-b3f7-a486f771a315",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
            "type": "uom",
            "mediaType": "application/json"
          },
          "name": "10^6 м3"
        }
      },
      "stockByStore": [
        {
          "store": {
            "meta": {
              "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/9238b396-b719-11eb-c0a8-800c00000074",
              "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
              "type": "store",
              "mediaType": "application/json",
              "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=9238b396-b719-11eb-c0a8-800c00000074"
            },
            "name": "Основной склад"
          },
          "onPeriodStart": {
            "quantity": 0.0,
            "sum": 0.0
          },
          "onPeriodEnd": {
            "quantity": 1.0,
            "sum": 0.0
          },
          "income": {
            "quantity": 3.0,
            "sum": 0.0
          },
          "outcome": {
            "quantity": 2.0,
            "sum": 0.0
          }
        }
      ]
    },
    {
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/3e32ef51-c1f1-11eb-c0a8-800c00000003",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
          "type": "variant",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=3e3278e5-c1f1-11eb-c0a8-800c00000001"
        },
        "name": "товар 2 (красный)",
        "uom": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/af3b8110-5a23-4839-b3f7-a486f771a315",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
            "type": "uom",
            "mediaType": "application/json"
          },
          "name": "10^6 м3"
        }
      },
      "stockByStore": [
        {
          "store": {
            "meta": {
              "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/9238b396-b719-11eb-c0a8-800c00000074",
              "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
              "type": "store",
              "mediaType": "application/json",
              "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=9238b396-b719-11eb-c0a8-800c00000074"
            },
            "name": "Основной склад"
          },
          "onPeriodStart": {
            "quantity": 0.0,
            "sum": 0.0
          },
          "onPeriodEnd": {
            "quantity": 2.0,
            "sum": 20000.0
          },
          "income": {
            "quantity": 3.0,
            "sum": 30000.0
          },
          "outcome": {
            "quantity": 1.0,
            "sum": 10000.0
          }
        },
        {
          "store": {
            "meta": {
              "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/8d3d4ad8-be02-11eb-c0a8-800c00000025",
              "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
              "type": "store",
              "mediaType": "application/json",
              "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=8d3d4ad8-be02-11eb-c0a8-800c00000025"
            },
            "name": "склад 2"
          },
          "onPeriodStart": {
            "quantity": 0.0,
            "sum": 0.0
          },
          "onPeriodEnd": {
            "quantity": -5.0,
            "sum": 0.0
          },
          "income": {
            "quantity": 0.0,
            "sum": 0.0
          },
          "outcome": {
            "quantity": 5.0,
            "sum": 0.0
          }
        }
      ]
    }
  ]
}
```

### Обороты по товару с детализацией по документам
Отчет обороты по товару и его модификациям с детализацией по складам и документам.

#### Атрибуты объекта отчета

| Название       | Тип    | Описание                                                                                                                                                                                                  |
| -------------- | :----- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **assortment** | Object | Краткое представление Товара или Модификации в отчете. [Подробнее тут](#otchety-otchet-oboroty-oboroty-po-towaru-s-detalizaciej-po-dokumentam-struktura-ob-ekta-assortment)<br>`+Обязательное при ответе` |
| **store**      | Object | Склад.<br>`+Обязательное при ответе`                                                                                                                                                                      |
| **operation**  | Object | Документ, связанный с Товаром. [Подробнее тут](#otchety-otchet-oboroty-oboroty-po-towaru-s-detalizaciej-po-dokumentam-struktura-ob-ekta-operation)<br>`+Обязательное при ответе`                          |
| **quantity**   | Float  | Количество товара в документе.<br>`+Обязательное при ответе`                                                                                                                                              |
| **cost**       | Float  | Себестоимость товара в документе.<br>`+Обязательное при ответе`                                                                                                                                           |
| **sum**        | Float  | Сумма себестоимостей.<br>`+Обязательное при ответе`                                                                                                                                                       |

#### Структура объекта assortment

| Название          | Тип                                                       | Описание                                                          |
| ----------------- | :-------------------------------------------------------- | :---------------------------------------------------------------- |
| **meta**          | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Товара или Модификации<br>`+Обязательное при ответе`   |
| **name**          | String(255)                                               | Наименование Товара или Модификации<br>`+Обязательное при ответе` |
| **code**          | String(255)                                               | Код Товара                                                        |
| **article**       | String(255)                                               | Артикул Товара                                                    |
| **productFolder** | Object                                                    | Группа Товара или Модификации                                     |
| **uom**           | Object                                                    | Единица измерения                                                 |

#### Структура объекта operation

| Название        | Тип                                                       | Описание                                                |
| --------------- | :-------------------------------------------------------- | :------------------------------------------------------ |
| **meta**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные документа<br>`+Обязательное при ответе`      |
| **name**        | String(255)                                               | Номер документа<br>`+Обязательное при ответе`           |
| **description** | String(255)                                               | Комментарий к документу                                 |
| **moment**      | Object                                                    | Дата проведения документа<br>`+Обязательное при ответе` |
| **agent**       | Object                                                    | Контрагент документа                                    |

#### Атрибуты доступные для фильтрации

Результаты отчета можно отфильтровать, используя параметр filter. Для каждого параметра можно указать только одно значение. Нельзя указывать пустые значения.

Является обязательным указание одного из параметров фильтрации **product** или **variant**.

| Название                       | Описание                                                                        |
| ------------------------------ | :------------------------------------------------------------------------------ |
| **agent**                      | ссылка на контрагента, по которому нужно произвести фильтрацию.                 |
| **agentTag**                   | строка с названием группы контрагентов, по которой нужно произвести фильтрацию. |
| **contract**                   | ссылка на договор, по которому нужно произвести фильтрацию.                     |
| **organization**               | ссылка на юрлицо, по которому нужно произвести фильтрацию.                      |
| **project**                    | ссылка на проект, по которому нужно произвести фильтрацию.                      |
| **retailStore**                | ссылка на точку продаж, по которой нужно произвести фильтрацию.                 |
| **store**                      | ссылка на склад, по которому нужно произвести фильтрацию.                       |

Примеры фильтрации:

- `filter=agent=https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f8f729a5-a784-11e9-ac12-000800000000`
- `filter=organization=https://online.moysklad.ru/api/remap/1.2/entity/organization/0347beb0-a785-11e9-ac12-000800000003`
- `filter=store=https://online.moysklad.ru/api/remap/1.2/entity/store/656c4032-8667-11e6-8a84-bae500003321`
- `filter=project=https://online.moysklad.ru/api/remap/1.2/entity/project/7a5f0ed5-8552-11e6-8a84-bae500000046`
- `filter=contract=https://online.moysklad.ru/api/remap/1.2/entity/contract/7a5f0ed5-8552-11e6-8a84-bae500085742`
- `filter=retailStore=https://online.moysklad.ru/api/remap/1.2/entity/retailstore/9ca74859-85c7-11e9-ac12-000d00000030`
- `filter=agentTag=favorites`

### Получить Обороты по товару с детализацией по документам

Запрос на получение отчета Обороты по товару с детализацией по документам.

**Параметры**

| Параметр                       | Описание                                                               |
| ------------------------------ | :--------------------------------------------------------------------- |
| **momentFrom**                 | `date` (required) *Example: 2021-06-01 00:00:00* Начало периода отчета |
| **momentTo**                   | `date` (required) *Example: 2021-07-01 00:00:00* Конец периода отчета  |

**Заголовки**

| Заголовок                      | Описание                                                                                                                                                                                                                                                                                    |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **X-Lognex-Accept-Timezone**   | Опциональный заголовок, в котором указана текущая дата на клиенте в RFC 3522. Таймзону обязательно указывать в формате знак и 4 символа (не в Obsolete Date and Time). Пример даты: `Wed, 16 Aug 2017 23:07:01 +0700`. При подсчете показателей даты операций смещаются в таймзону клиента. |
| **X-Lognex-Content-Timezone**  | Заголовок ответа. В нем указывается (как думает сервер) текущая дата на клиенте в RFC 3522.                                                                                                                                                                                                 |


> Запрос на получение отчета "Обороты по товару с детализацией по документам" с указанным id товара.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/turnover/byoperations?filter=product=https://online.moysklad.ru/api/remap/1.2/entity/product/66990dc7-bdfe-11eb-c0a8-800c00000016"
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
    "href": "https://online.moysklad.ru/api/remap/1.2/report/turnover/byoperations?filter=product=https://online.moysklad.ru/api/remap/1.2/entity/product/66990dc7-bdfe-11eb-c0a8-800c00000016",
    "type": "turnoverbyoperation",
    "mediaType": "application/json",
    "size": 4,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/66990dc7-bdfe-11eb-c0a8-800c00000016",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=66989c14-bdfe-11eb-c0a8-800c00000014"
        },
        "name": "2",
        "uom": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/af3b8110-5a23-4839-b3f7-a486f771a315",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
            "type": "uom",
            "mediaType": "application/json"
          },
          "name": "10^6 м3"
        }
      },
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/9238b396-b719-11eb-c0a8-800c00000074",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=9238b396-b719-11eb-c0a8-800c00000074"
        },
        "name": "Основной склад"
      },
      "operation": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/29d1cb69-bfb7-11eb-c0a8-800d00000039",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
          "type": "supply",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#supply/edit?id=29d1cb69-bfb7-11eb-c0a8-800d00000039"
        },
        "name": "00001",
        "moment": "2021-05-28 16:18:00.000",
        "agent": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/923916c6-b719-11eb-c0a8-800c00000075",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
            "type": "counterparty",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=923916c6-b719-11eb-c0a8-800c00000075"
          },
          "name": "ООО \"Поставщик\""
        }
      },
      "quantity": 3.0,
      "cost": 0.0,
      "sum": 0.0
    },
    {
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/66990dc7-bdfe-11eb-c0a8-800c00000016",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=66989c14-bdfe-11eb-c0a8-800c00000014"
        },
        "name": "2",
        "uom": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/af3b8110-5a23-4839-b3f7-a486f771a315",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
            "type": "uom",
            "mediaType": "application/json"
          },
          "name": "10^6 м3"
        }
      },
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/9238b396-b719-11eb-c0a8-800c00000074",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=9238b396-b719-11eb-c0a8-800c00000074"
        },
        "name": "Основной склад"
      },
      "operation": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/0410e6b6-bfb7-11eb-c0a8-800d0000000f",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
          "type": "demand",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#demand/edit?id=0410e6b6-bfb7-11eb-c0a8-800d0000000f"
        },
        "name": "00001",
        "moment": "2021-05-28 16:25:00.000",
        "agent": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/92394ebc-b719-11eb-c0a8-800c00000077",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
            "type": "counterparty",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=92394ebc-b719-11eb-c0a8-800c00000077"
          },
          "name": "ООО \"Покупатель\""
        }
      },
      "quantity": -2.0,
      "cost": 0.0,
      "sum": 0.0
    },
    {
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/3e32ef51-c1f1-11eb-c0a8-800c00000003",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
          "type": "variant",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=3e3278e5-c1f1-11eb-c0a8-800c00000001"
        },
        "name": "2 (char)",
        "uom": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/af3b8110-5a23-4839-b3f7-a486f771a315",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
            "type": "uom",
            "mediaType": "application/json"
          },
          "name": "10^6 м3"
        }
      },
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/9238b396-b719-11eb-c0a8-800c00000074",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=9238b396-b719-11eb-c0a8-800c00000074"
        },
        "name": "Основной склад"
      },
      "operation": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/5588e522-c1f1-11eb-c0a8-800c0000000c",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/supply/metadata",
          "type": "supply",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#supply/edit?id=5588e522-c1f1-11eb-c0a8-800c0000000c"
        },
        "name": "00002",
        "moment": "2021-05-31 12:19:00.000",
        "agent": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/923916c6-b719-11eb-c0a8-800c00000075",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
            "type": "counterparty",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=923916c6-b719-11eb-c0a8-800c00000075"
          },
          "name": "ООО \"Поставщик\""
        }
      },
      "quantity": 3.0,
      "cost": 10000.0,
      "sum": 30000.0
    },
    {
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/3e32ef51-c1f1-11eb-c0a8-800c00000003",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
          "type": "variant",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=3e3278e5-c1f1-11eb-c0a8-800c00000001"
        },
        "name": "2 (char)",
        "uom": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/af3b8110-5a23-4839-b3f7-a486f771a315",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
            "type": "uom",
            "mediaType": "application/json"
          },
          "name": "10^6 м3"
        }
      },
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/9238b396-b719-11eb-c0a8-800c00000074",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=9238b396-b719-11eb-c0a8-800c00000074"
        },
        "name": "Основной склад"
      },
      "operation": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/5d21e1a0-c1f1-11eb-c0a8-800c00000012",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
          "type": "demand",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#demand/edit?id=5d21e1a0-c1f1-11eb-c0a8-800c00000012"
        },
        "name": "00002",
        "moment": "2021-05-31 12:19:00.000",
        "agent": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/92394ebc-b719-11eb-c0a8-800c00000077",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
            "type": "counterparty",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=92394ebc-b719-11eb-c0a8-800c00000077"
          },
          "name": "ООО \"Покупатель\""
        }
      },
      "quantity": -1.0,
      "cost": -10000.0,
      "sum": -10000.0
    }
  ]
}
```
