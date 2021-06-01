## Отчет обороты
Средствами JSON API можно запросить отчет "Обороты" по всем товарам и модификациям. Для доступа к отчету через API требуется право на просмотр отчета *Обороты*.
О том, что представляет собой отчет "Обороты" вы можете прочитать по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203396063-%D0%9E%D0%B1%D0%BE%D1%80%D0%BE%D1%82%D1%8B).

### Обороты по товарам
Общий отчет об оборотах товаров и модификаций без детализации по складам. 

#### Атрибуты объекта отчета

| Название  | Тип | Описание                    | Обязательное при ответе|
| --------- |:----|:----------------------------|:------------------------|
|**assortment**        |Object|Краткое представление Товара или Модификации в отчете. [Подробнее тут](/#otchety-otchet-oboroty-oboroty-po-towaram-struktura-ob-ekta-assortment)|да
|**start**             |Object|Показатели на начало периода. [Подробнее тут](/#otchety-otchet-oboroty-oboroty-po-towaram-struktura-ob-ekta-pokazateli-start-end-in-out)|да
|**end**               |Object|Показатели на конец периода. [Подробнее тут](/#otchety-otchet-oboroty-oboroty-po-towaram-struktura-ob-ekta-pokazateli-start-end-in-out)|да
|**in**                |Object|Показатели прихода в течение периода отчета. [Подробнее тут](/#otchety-otchet-oboroty-oboroty-po-towaram-struktura-ob-ekta-pokazateli-start-end-in-out)|да
|**out**               |Object|Показатели расхода в течение периода отчета. [Подробнее тут](/#otchety-otchet-oboroty-oboroty-po-towaram-struktura-ob-ekta-pokazateli-start-end-in-out)|да

#### Структура объекта assortment

| Название  | Тип | Описание                    | Обязательное при ответе|
| --------- |:----|:----------------------------|:------------------------|
|**meta**           |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Товара или Модификации|да
|**name**           |String(255)|Наименование Товара или Модификации|да
|**code**           |String(255)|Код Товара|нет
|**article**        |String(255)|Артикул Товара|нет
|**productFolder**  |Object|Группа Товара или Модификации|нет
|**uom**            |Object|Единица измерения|нет
|**image**          |Object|Изображение Товара|нет

#### Структура объекта показатели (start, end, in, out)

| Название  | Тип | Описание                    | Обязательное при ответе|
| --------- |:----|:----------------------------|:------------------------|
|**sum**        |Float|Сумма себестоимости|да
|**quantity**   |Float|Количество единиц товара|да

#### Атрибуты доступные для фильтрации

Результаты отчета можно отфильтровать, используя параметр filter. Для каждого параметра можно указать только одно значение. Нельзя указывать пустые значения. Поддерживается фильтрация только на равенство.

| Название               | Описание  |
| ------------------------------ |:---------------------------|
|**agent** | ссылка на контрагента, по которому нужно произвести фильтрацию.
|**organization** | ссылка на юрлицо, по которому нужно произвести фильтрацию.
|**project** | ссылка на проект, по которому нужно произвести фильтрацию.
|**contract** | ссылка на договор, по которому нужно произвести фильтрацию.
|**store** | ссылка на склад, по которому нужно произвести фильтрацию.
|**retailStore** | ссылка на точку продаж, по которой нужно произвести фильтрацию.
|**agentTag** | строка с названием группы контрагентов, по которой нужно произвести фильтрацию.

Примеры фильтрации:

- `filter=agent=https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f8f729a5-a784-11e9-ac12-000800000000`
- `filter=organization=https://online.moysklad.ru/api/remap/1.2/entity/organization/0347beb0-a785-11e9-ac12-000800000003`
- `filter=store=https://online.moysklad.ru/api/remap/1.2/entity/store/656c4032-8667-11e6-8a84-bae500003321`
- `filter=project=https://online.moysklad.ru/api/remap/1.2/entity/project/7a5f0ed5-8552-11e6-8a84-bae500000046`
- `filter=contract=https://online.moysklad.ru/api/remap/1.2/entity/contract/7a5f0ed5-8552-11e6-8a84-bae500085742`
- `filter=retailStore=https://online.moysklad.ru/api/remap/1.2/entity/retailstore/9ca74859-85c7-11e9-ac12-000d00000030`
- `filter=agentTag=favorites`

### Получить Обороты по товарам

Запрос на получение отчета Обороты по товарам.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|**limit** |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|**offset** |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|
|**momentFrom** |  `date` (required) *Example: 2018-09-01 00:00:00* Начало периода отчета|
|**momentTo** |  `date` (required) *Example: 2018-10-01 00:00:00* Конец периода отчета|
|**groupBy**|  `string` (optional) тип, по которому нужно сгруппировать выдачу. По умолчанию параметр groupBy имеет значение variant. Если вы хотите увидеть только объекты типа product, необходимо выставить соответствующее значение параметра. <ul><li>groupBy=product - только товары</li><li>groupBy=variant - товары и модификации</li></ul>|

**Заголовки**

| Заголовок                | Описание  |
| ------------------------------ |:---------------------------|
|**X-Lognex-Accept-Timezone** | Опциональный заголовок, в котором указана текущая дата на клиенте в RFC 3522. Таймзону обязательно указывать в формате знак и 4 символа (не в Obsolete Date and Time). Пример даты: `Wed, 16 Aug 2017 23:07:01 +0700`. При подсчете показателей даты операций смещаются в таймзону клиента.|
|**X-Lognex-Content-Timezone** | Заголовок ответа. В нем указывается (как думает сервер) текущая дата на клиенте в RFC 3522.|


> Запрос на получение отчета "Обороты по товарам".

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/turnover"
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
        "href": "https://online.moysklad.ru/api/remap/1.2/report/turnover",
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
            "start": {
                "quantity": 0.0,
                "amount": 0.0
            },
            "end": {
                "quantity": 1.0,
                "amount": 0.0
            },
            "in": {
                "quantity": 3.0,
                "amount": 0.0
            },
            "out": {
                "quantity": 2.0,
                "amount": 0.0
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
            "start": {
                "quantity": 0.0,
                "amount": 0.0
            },
            "end": {
                "quantity": 2.0,
                "amount": 20000.0
            },
            "in": {
                "quantity": 3.0,
                "amount": 30000.0
            },
            "out": {
                "quantity": 1.0,
                "amount": 10000.0
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
            "start": {
                "quantity": 0.0,
                "amount": 0.0
            },
            "end": {
                "quantity": 2.0,
                "amount": 4400.0
            },
            "in": {
                "quantity": 3.0,
                "amount": 6600.0
            },
            "out": {
                "quantity": 1.0,
                "amount": 2200.0
            }
        }
    ]
}
```

### Обороты по товару с детализацией по складам
Отчет обороты по товару и его модификациям с детализацией по складам. 

#### Атрибуты объекта отчета

| Название  | Тип | Описание                    | Обязательное при ответе|
| --------- |:----|:----------------------------|:------------------------|
|**assortment**        |Object|Краткое представление Товара или Модификации в отчете. [Подробнее тут](/#otchety-otchet-oboroty-oboroty-po-towaru-s-detalizaciej-po-skladam-struktura-ob-ekta-assortment)|да
|**store**             |Object|Склад.|да
|**start**             |Object|Показатели на начало периода. [Подробнее тут](/#otchety-otchet-oboroty-oboroty-po-towaru-s-detalizaciej-po-skladam-struktura-ob-ekta-pokazateli-start-end-in-out)|да
|**end**               |Object|Показатели на конец периода. [Подробнее тут](/#otchety-otchet-oboroty-oboroty-po-towaru-s-detalizaciej-po-skladam-struktura-ob-ekta-pokazateli-start-end-in-out)|да
|**in**                |Object|Показатели прихода в течение периода отчета. [Подробнее тут](/#otchety-otchet-oboroty-oboroty-po-towaru-s-detalizaciej-po-skladam-struktura-ob-ekta-pokazateli-start-end-in-out)|да
|**out**               |Object|Показатели расхода в течение периода отчета. [Подробнее тут](/#otchety-otchet-oboroty-oboroty-po-towaru-s-detalizaciej-po-skladam-struktura-ob-ekta-pokazateli-start-end-in-out)|да

#### Структура объекта assortment

| Название  | Тип | Описание                    | Обязательное при ответе|
| --------- |:----|:----------------------------|:------------------------|
|**meta**           |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Товара или Модификации|да
|**name**           |String(255)|Наименование Товара или Модификации|да
|**code**           |String(255)|Код Товара|нет
|**article**        |String(255)|Артикул Товара|нет
|**productFolder**  |Object|Группа Товара или Модификации|нет
|**uom**            |Object|Единица измерения|нет

#### Структура объекта показатели (start, end, in, out)

| Название  | Тип | Описание                    | Обязательное при ответе|
| --------- |:----|:----------------------------|:------------------------|
|**sum**        |Float|Сумма себестоимости|да
|**quantity**   |Float|Количество единиц товара|да

#### Атрибуты доступные для фильтрации

Результаты отчета можно отфильтровать, используя параметр filter. Для каждого параметра можно указать только одно значение. Нельзя указывать пустые значения. Поддерживается фильтрация только на равенство.

| Название               | Описание  |
| ------------------------------ |:---------------------------|
|**agent** | ссылка на контрагента, по которому нужно произвести фильтрацию.
|**organization** | ссылка на юрлицо, по которому нужно произвести фильтрацию.
|**project** | ссылка на проект, по которому нужно произвести фильтрацию.
|**contract** | ссылка на договор, по которому нужно произвести фильтрацию.
|**store** | ссылка на склад, по которому нужно произвести фильтрацию.
|**retailStore** | ссылка на точку продаж, по которой нужно произвести фильтрацию.
|**agentTag** | строка с названием группы контрагентов, по которой нужно произвести фильтрацию.

Примеры фильтрации:

- `filter=agent=https://online.moysklad.ru/api/remap/1.2/entity/counterparty/f8f729a5-a784-11e9-ac12-000800000000`
- `filter=organization=https://online.moysklad.ru/api/remap/1.2/entity/organization/0347beb0-a785-11e9-ac12-000800000003`
- `filter=store=https://online.moysklad.ru/api/remap/1.2/entity/store/656c4032-8667-11e6-8a84-bae500003321`
- `filter=project=https://online.moysklad.ru/api/remap/1.2/entity/project/7a5f0ed5-8552-11e6-8a84-bae500000046`
- `filter=contract=https://online.moysklad.ru/api/remap/1.2/entity/contract/7a5f0ed5-8552-11e6-8a84-bae500085742`
- `filter=retailStore=https://online.moysklad.ru/api/remap/1.2/entity/retailstore/9ca74859-85c7-11e9-ac12-000d00000030`
- `filter=agentTag=favorites`

### Получить Обороты по товару

Запрос на получение отчета Обороты по товару.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|**momentFrom** |  `date` (required) *Example: 2018-09-01 00:00:00* Начало периода отчета|
|**momentTo** |  `date` (required) *Example: 2018-10-01 00:00:00* Конец периода отчета|

**Заголовки**

| Заголовок                | Описание  |
| ------------------------------ |:---------------------------|
|**X-Lognex-Accept-Timezone** | Опциональный заголовок, в котором указана текущая дата на клиенте в RFC 3522. Таймзону обязательно указывать в формате знак и 4 символа (не в Obsolete Date and Time). Пример даты: `Wed, 16 Aug 2017 23:07:01 +0700`. При подсчете показателей даты операций смещаются в таймзону клиента.|
|**X-Lognex-Content-Timezone** | Заголовок ответа. В нем указывается (как думает сервер) текущая дата на клиенте в RFC 3522.|


> Запрос на получение отчета "Обороты по товару" с указанным id товара.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/turnover/66990dc7-bdfe-11eb-c0a8-800c00000016"
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
        "href": "https://online.moysklad.ru/api/remap/1.2/report/turnover/66990dc7-bdfe-11eb-c0a8-800c00000016",
        "type": "turnoverforproductsummary",
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
            "start": {
                "quantity": 0.0,
                "amount": 0.0
            },
            "end": {
                "quantity": 1.0,
                "amount": 0.0
            },
            "in": {
                "quantity": 3.0,
                "amount": 0.0
            },
            "out": {
                "quantity": 2.0,
                "amount": 0.0
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
            "start": {
                "quantity": 0.0,
                "amount": 0.0
            },
            "end": {
                "quantity": 2.0,
                "amount": 20000.0
            },
            "in": {
                "quantity": 3.0,
                "amount": 30000.0
            },
            "out": {
                "quantity": 1.0,
                "amount": 10000.0
            }
        }
    ]
}
```

### Обороты по товару с детализацией по документам
Отчет обороты по товару и его модификациям с детализацией по складам и документам.

#### Атрибуты объекта отчета

| Название  | Тип | Описание                    | Обязательное при ответе|
| --------- |:----|:----------------------------|:------------------------|
|**assortment**        |Object|Краткое представление Товара или Модификации в отчете. [Подробнее тут](/#otchety-otchet-oboroty-oboroty-po-towaru-s-detalizaciej-po-dokumentam-struktura-ob-ekta-assortment)|да
|**store**             |Object|Склад.|да
|**operation**         |Object|Документ, связанный с Товаром. [Подробнее тут](/#otchety-otchet-oboroty-oboroty-po-towaru-s-detalizaciej-po-dokumentam-struktura-ob-ekta-operation)|да
|**quantity**          |Float|Количество товара в документе.|да
|**cost**              |Float|Себестоимость товара в документе.|да
|**sum**               |Float|Сумма себестоимостей.|да

#### Структура объекта assortment

| Название  | Тип | Описание                    | Обязательное при ответе|
| --------- |:----|:----------------------------|:------------------------|
|**meta**           |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Товара или Модификации|да
|**name**           |String(255)|Наименование Товара или Модификации|да
|**code**           |String(255)|Код Товара|нет
|**article**        |String(255)|Артикул Товара|нет
|**productFolder**  |Object|Группа Товара или Модификации|нет
|**uom**            |Object|Единица измерения|нет

#### Структура объекта operation

| Название  | Тип | Описание                    | Обязательное при ответе|
| --------- |:----|:----------------------------|:------------------------|
|**meta**             |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные документа|да
|**name**             |String(255)|Номер документа|да
|**description**      |String(255)|Комментарий к документу|нет
|**moment**           |Object|Дата проведения документа|да
|**agent**            |Object|Контрагент документа|да

#### Атрибуты доступные для фильтрации

Результаты отчета можно отфильтровать, используя параметр filter. Для каждого параметра можно указать только одно значение. Нельзя указывать пустые значения. Поддерживается фильтрация только на равенство.

| Название               | Описание  |
| ------------------------------ |:---------------------------|
|**agent** | ссылка на контрагента, по которому нужно произвести фильтрацию.
|**organization** | ссылка на юрлицо, по которому нужно произвести фильтрацию.
|**project** | ссылка на проект, по которому нужно произвести фильтрацию.
|**contract** | ссылка на договор, по которому нужно произвести фильтрацию.
|**store** | ссылка на склад, по которому нужно произвести фильтрацию.
|**retailStore** | ссылка на точку продаж, по которой нужно произвести фильтрацию.
|**agentTag** | строка с названием группы контрагентов, по которой нужно произвести фильтрацию.

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

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|**momentFrom** |  `date` (required) *Example: 2018-09-01 00:00:00* Начало периода отчета|
|**momentTo** |  `date` (required) *Example: 2018-10-01 00:00:00* Конец периода отчета|

**Заголовки**

| Заголовок                | Описание  |
| ------------------------------ |:---------------------------|
|**X-Lognex-Accept-Timezone** | Опциональный заголовок, в котором указана текущая дата на клиенте в RFC 3522. Таймзону обязательно указывать в формате знак и 4 символа (не в Obsolete Date and Time). Пример даты: `Wed, 16 Aug 2017 23:07:01 +0700`. При подсчете показателей даты операций смещаются в таймзону клиента.|
|**X-Lognex-Content-Timezone** | Заголовок ответа. В нем указывается (как думает сервер) текущая дата на клиенте в RFC 3522.|


> Запрос на получение отчета "Обороты по товару с детализацией по документам" с указанным id товара.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/turnover/66990dc7-bdfe-11eb-c0a8-800c00000016/byoperations"
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
    "href": "https://online.moysklad.ru/api/remap/1.2/report/turnover/66990dc7-bdfe-11eb-c0a8-800c00000016/byoperations",
    "type": "turnoverforproductbyoperations",
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
