# Сущности
## Ассортимент

Сущность assortment представляет собой список всех товаров, услуг, комплектов, модификаций и партий.

Новый эндпоинт ассортимента — это облегчённая версия, которая работает быстрее за счёт того, что не рассчитывает остатки в рамках одного запроса.

Для использования передайте специальный заголовок:

`X-Lognex-Remap-Beta-Feature: assortmentWithoutStock`

Если заголовок не передан, запрос обрабатывается [старым эндпоинтом ассортимента](#/dictionaries/assortment-legacy#2-assortiment-deprecated), который планируется к удалению.

### Отличия от старого эндпоинта

#### Поля остатков

Поля `stock`, `reserve`, `inTransit`, `quantity` в ответе **не возвращаются**.

Для получения остатков используйте [Краткий отчет об остатках](#/reports/report-stock#3-kratkij-otchet-ob-ostatkah):

Связать данные можно по полю `id` из ответа ассортимента и полю `assortmentId` из краткого отчёта об остатках.

**Пример получения ассортимента с остатками:**

> Получить ассортимент:

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/assortment" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "X-Lognex-Remap-Beta-Feature: assortmentWithoutStock"
```

> Из ответа берём `id` нужных позиций:

```json
{
  "rows": [
    { "id": "35427052-36e7-11e7-8a7f-40d0000000d7", "name": "Товар А" },
    { "id": "437f2d67-36e7-11e7-8a7f-40d0000000df", "name": "Товар Б" }
  ]
}
```

> Запросить все типы остатков (`stockType` принимает только одно значение за раз, запросы выполняются параллельно):

```shell
# stock — физический остаток
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/report/stock/all/current?stockType=stock&filter=assortmentId=35427052-36e7-11e7-8a7f-40d0000000d7,437f2d67-36e7-11e7-8a7f-40d0000000df" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"

# reserve — резерв
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/report/stock/all/current?stockType=reserve&filter=assortmentId=35427052-36e7-11e7-8a7f-40d0000000d7,437f2d67-36e7-11e7-8a7f-40d0000000df" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"

# inTransit — ожидание
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/report/stock/all/current?stockType=inTransit&filter=assortmentId=35427052-36e7-11e7-8a7f-40d0000000d7,437f2d67-36e7-11e7-8a7f-40d0000000df" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"

# quantity — доступно (с учётом резерва и ожидания)
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/report/stock/all/current?stockType=quantity&filter=assortmentId=35427052-36e7-11e7-8a7f-40d0000000d7,437f2d67-36e7-11e7-8a7f-40d0000000df" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json). Успешный запрос. `stockType=stock`

```json
[{ "assortmentId": "35427052-36e7-11e7-8a7f-40d0000000d7", "stock": 15 },
 { "assortmentId": "437f2d67-36e7-11e7-8a7f-40d0000000df", "stock": 3 }]
```

> Response 200 (application/json). Успешный запрос. `stockType=reserve`

```json
[{ "assortmentId": "35427052-36e7-11e7-8a7f-40d0000000d7", "reserve": 2 },
 { "assortmentId": "437f2d67-36e7-11e7-8a7f-40d0000000df", "reserve": 0 }]
```

> Response 200 (application/json). Успешный запрос. `stockType=inTransit`

```json
[{ "assortmentId": "35427052-36e7-11e7-8a7f-40d0000000d7", "inTransit": 5 },
 { "assortmentId": "437f2d67-36e7-11e7-8a7f-40d0000000df", "inTransit": 1 }]
```

> Response 200 (application/json). Успешный запрос. `stockType=quantity`

```json
[{ "assortmentId": "35427052-36e7-11e7-8a7f-40d0000000d7", "quantity": 18 },
 { "assortmentId": "437f2d67-36e7-11e7-8a7f-40d0000000df", "quantity": 4 }]
```

Сопоставление: `assortment.rows[i].id === stockReport[j].assortmentId`.

#### Недоступные фильтры

- `alcoholic.type`
- `article`
- `isSerialTrackable`
- `minimumBalance`
- `owner`
- `quantityMode`
- `salePrice`
- `shared`
- `stockMode`
- `stockMoment`
- `stockStore`
- `updatedBy`
- `weighed`

#### Изменения в поведении фильтров

- **`barcode`** — оператор `!=` не поддерживается. Доступные операторы: `=`, `~`, `~=`, `=~`.
- **Комбинации LIKE-операторов** — несовместимые комбинации для одного поля (например, `code~val1;code~val2`). Доступны только комбинации `~=`, `=~` (например, `code=~val1;code~=val2` или `code~=val1;code=~val2`).

#### Ограничения expand

Поддерживаются только: `product`, `images`, `components` первого уровня.

#### Недоступные сортировки

- `inTransit`
- `minimumBalance`
- `quantity`
- `reserve`
- `salePrice`
- `stock`

### Атрибуты доступные для фильтрации

Результаты запроса можно отфильтровать, используя параметр filter.

| Название           | Описание                                                                                                                                                                                                                                                                                                                                           |
|--------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **archived**       | параметр для фильтрации по признаку архивности товаров. Возможные значения: true, false. Для выдачи как обычных, так и товаров в архиве, нужно передать сразу два значения true и false. По умолчанию в выдачу попадают только обычные товары.                                                                                                     |
| **barcode**        | параметр для фильтрации по штрихкодам сущностей. Допустимые операторы: `=`, `~`, `~=`, `=~`. Оператор `!=` не поддерживается. Можно передать несколько значений. Можно указать пустое значение.                                                                                                                                                    |
| **code**           | параметр для фильтрации по кодам сущностей. Можно использовать операторы `=`, `!=`, `~`, `~=`, `=~`. Можно передать несколько значений. Можно указать пустое значение.                                                                                                                                                                             |
| **description**    | параметр для фильтрации по описаниям сущностей. Можно использовать операторы `=`, `!=`, `~`, `~=`, `=~`. Можно передать несколько значений. Можно указать пустое значение.                                                                                                                                                                         |
| **externalCode**   | параметр для фильтрации по внешним кодам сущностей. Можно использовать операторы `=`, `!=`, `~`, `~=`, `=~`. Можно передать несколько значений. Можно указать пустое значение.                                                                                                                                                                     |
| **group**          | параметр для фильтрации по владельцу-отделу. Можно использовать операторы `=` и `!=`. Значение параметра - ссылка на отдел. Можно передать несколько значений.                                                                                                                                                                                     |
| **id**             | параметр для фильтрации по идентификаторам сущностей. Можно использовать операторы `=` и `!=`. Можно передать несколько значений.                                                                                                                                                                                                                  |
| **name**           | параметр для фильтрации по наименованиям сущностей. Можно использовать операторы `=`, `!=`, `~`, `~=`, `=~`. Можно передать несколько значений.                                                                                                                                                                                                    |
| **pathName**       | параметр для фильтрации по наименованию групп товаров. Можно использовать операторы `=`, `!=`, `~`, `~=`, `=~`. Можно передать несколько значений. Можно указать пустое значение.                                                                                                                                                                  |
| **productFolder**  | параметр для фильтрации по нескольким группам товаров. Можно использовать операторы `=` и `!=`. Значение параметра - ссылка на группу товаров, которая должна быть включена в выборку или исключена из нее. Можно передать несколько значений. В выборку попадут товары, которые находятся (или не находятся) непосредственно в указанных группах. |
| **search**         | префиксный поиск по строковым полям, выводимым в ассортименте. Для данного параметра нужно использовать оператор `=`. Поиск по штрихкодам выполняется по полному соответствию. Можно передать только одно значение.                                                                                                                                |
| **supplier**       | параметр для фильтрации по нескольким поставщикам. Можно использовать операторы `=` и `!=`. Значение параметра - ссылка на контрагента или организацию. Можно передать пустое значение.                                                                                                                                                            |
| **type**           | параметр для фильтрации по типу сущности (product, service, bundle, variant, consignment). Используется с оператором `=`. Можно передать несколько значений. Для фильтрации по типу consignment требуется использовать группировку (groupBy=consignment).                                                                                          |
| **updated**        | параметр для фильтрации по времени последнего обновления сущностей. Можно использовать операторы `=`, `<`, `<=`, `>`, `>=`. Передается в виде строки в [формате дата-время](#/general#3-format-daty-i-vremeni).                                                                                                                                    |
| **withSubFolders** | параметр учета вложенных подгрупп. Работает только при наличии непустого фильтра по `productFolder`. По умолчанию `true`. При передаче `false` выводятся только товары из фильтруемой группы без учета подгрупп.                                                                                                                                   |
| **доп. поле(url)** | параметром фильтрации служит url дополнительного поля. [Подробнее тут](#/general#5-dostupnye-operatory-dlya-filtracii-dop-polej).                                                                                                                                                                                                                  |

##### Доступные значения для search
Для данного параметра нужно использовать оператор `=`. Поиск по штрихкодам выполняется по полному соответствию. Можно передать только одно значение.

   + по наименованию элемента Ассортимента **name**
   + по имени модификации **name**
   + по коду **code**
   + по коду модификации **code**
   + по штрихкоду **barcode**
   + по штрихкоду модификации **barcode**
   + по штрихкоду упаковок товаров **barcode**
   + по штрихкоду упаковок модификаций **barcode**

##### Фильтрация доп. полей

Подробнее функциональность описана в разделе [Фильтрация по дополнительным полям](#/general#4-filtraciya-po-dopolnitelnym-polyam).

Примеры фильтрации:

- `filter=id=677c4032-8667-11e6-8a84-bae500003344`
- `filter=name~див`
- `filter=code~0002`
- `filter=externalCode~xdls`
- `filter=description~див`
- `filter=updated>=2019-07-10 12:00:00;updated<=2019-07-12 12:00:00`
- `filter=group=https://api.moysklad.ru/api/remap/1.2/entity/group/a99d0702-85c7-11e9-ac12-000d00000551`
- `filter=productFolder=https://api.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1`
- `filter=productFolder=https://api.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1;withSubFolders=false`
- `filter=archived=true`
- `filter=archived=false;archived=true`
- `filter=supplier=https://api.moysklad.ru/api/remap/1.2/entity/counterparty/656c4032-8667-11e6-8a84-bae5000033aa`
- `filter=barcode=2000000000015`
- `filter=search=див`
- `filter=https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/b83c12e7-42bf-11ec-0a80-08bb00000161=color`
- `filter=https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/83386e05-51c0-11ec-0a83-0640000001bb>=2021-11-30 12:39:00`


**Параметры**

| Параметр    | Описание                                                                                                                                                                                                                                       |
|-------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **limit**   | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.                                                                                                         |
| **offset**  | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                                                                                                                         |
| **groupBy** | `string` (optional) Параметр группировки. Принимает одно из значений: `product` - будут выведены только товары, `variant` - будут выведены товары и модификации (аналогично отсутствию параметра), `consignment` - будут выведены все сущности |


#### Настройки справочника

Под сущностями справочника товаров подразумеваются товары, услуги, комплекты и группы товаров.
Настройки справочника позволяют пользователю менять проверку уникальности кода, установку уникального кода при создании сущностей, установку уникального штрихкода EAN13, использование префиксов штрихкода для весовых товаров и настройку общего доступа к этим сущностям.

#### Атрибуты сущности

| Название            | Тип                                                       | Описание                                                                                                                                                                                                                                             |
| ------------------- | :-------------------------------------------------------- |:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **meta**            | [Meta](#/general#3-metadannye) | Метаданные Настроек справочника<br>`+Обязательное при ответе`                                                                                                                                                                                        |
| **uniqueCodeRules** | Object                                                    | Настройки уникальности кода для сущностей справочника. [Подробнее тут](#/dictionaries/assortment#5-nastrojki-unikalnosti-koda-dlya-sushnostej-spravochnika)<br>`+Обязательное при ответе`                                                            |
| **barcodeRules**    | Object                                                    | Настройки правил штрихкодов для сущностей справочника. [Подробнее тут](#/dictionaries/assortment#5-nastrojki-pravil-shtrihkodov-dlya-sushnostej-spravochnika)<br>`+Обязательное при ответе`                                                          |
| **createdShared**   | Boolean                                                   | Создавать новые документы с меткой «Общий»<br>`+Обязательное при ответе`                                                                                                                                                                             |

#### Атрибуты вложенных сущностей
##### Настройки уникальности кода для сущностей справочника

| Название            | Тип     | Описание                                                                                                       |
| ------------------- | :------ | :------------------------------------------------------------------------------------------------------------- |
| **checkUniqueCode** | Boolean | Проверка уникальности кода сущностей справочника товаров<br>`+Обязательное при ответе`                         |
| **fillUniqueCode**  | Boolean | Устанавливать уникальный код при создании создании сущностей справочника товаров<br>`+Обязательное при ответе` |

##### Настройки правил штрихкодов для сущностей справочника

| Название                | Тип     | Описание                                                                                                                |
| ----------------------- | :------ | :---------------------------------------------------------------------------------------------------------------------- |
| **fillEAN13Barcode**    | Boolean | Автоматически создавать штрихкод EAN13 для новых товаров, комплектов, модификаций и услуг<br>`+Обязательное при ответе` |
| **weightBarcode**       | Boolean | Использовать префиксы штрихкодов для весовых товаров<br>`+Обязательное при ответе`                                      |
| **weightBarcodePrefix** | Int     | Префикс штрихкодов для весовых товаров. Возможные значения: число формата X или XX<br>`+Обязательное при ответе`        |

### Получить Ассортимент

> Запрос на получение всех товаров, услуг, комплектов и модификаций в виде списка.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/assortment" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "X-Lognex-Remap-Beta-Feature: assortmentWithoutStock"
```

> Response 200 (application/json). Успешный запрос. Результат - JSON представление списка всех товаров, услуг и модификаций.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/assortment",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/assortment/metadata",
    "type": "assortment",
    "mediaType": "application/json",
    "size": 6,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/35427052-36e7-11e7-8a7f-40d0000000d1",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "id": "35427052-36e7-11e7-8a7f-40d0000000d7",
      "accountId": "103bff1b-36e7-11e7-8a7f-40d000000004",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/105a788e-36e7-11e7-8a7f-40d000000069",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/103cca6f-36e7-11e7-8a7f-40d000000005",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2017-05-12 10:47:11",
      "name": "product",
      "code": "00001",
      "externalCode": "LsAGeHdbgyQ3oSlTzZUvH0",
      "archived": false,
      "pathName": "",
      "useParentVat": false,
      "vat": 18,
      "vatEnabled": true,
      "effectiveVat": 18,
      "effectiveVatEnabled": true,
      "uom": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        }
      },
      "images": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/35427052-36e7-11e7-8a7f-40d0000000d1/images",
          "type": "image",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "minPrice": {
        "value": 500.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "salePrices": [
        {
          "value": 1500.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        }
      ],
      "supplier": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/1076cf8b-36e7-11e7-8a7f-40d000000093",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "buyPrice": {
        "value": 500.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "article": "100000000",
      "weight": 0,
      "volume": 0,
      "barcodes": [
        {
          "ean13": "2000000000015"
        }
      ],
      "variantsCount": 0,
      "isSerialTrackable": false
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/service/437f2d67-36e7-11e7-8a7f-40d0000000df",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "service",
        "mediaType": "application/json"
      },
      "id": "437f2d67-36e7-11e7-8a7f-40d0000000df",
      "accountId": "103bff1b-36e7-11e7-8a7f-40d000000004",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/105a788e-36e7-11e7-8a7f-40d000000069",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/103cca6f-36e7-11e7-8a7f-40d000000005",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2017-05-12 10:47:35",
      "name": "service",
      "code": "00002",
      "externalCode": "DDBfxV4djLuOlbr80-I1A0",
      "archived": false,
      "pathName": "",
      "useParentVat": false,
      "vat": 18,
      "vatEnabled": true,
      "effectiveVat": 18,
      "effectiveVatEnabled": true,
      "uom": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        }
      },
      "minPrice": {
        "value": 500.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "salePrices": [
        {
          "value": 1500.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        }
      ],
      "buyPrice": {
        "value": 700.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "barcodes": [
        {
          "ean13": "34875834765872435"
        }
      ]
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/bundle/4f75d130-36e7-11e7-8a7f-40d0000000ef",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "bundle",
        "mediaType": "application/json"
      },
      "id": "4f75d130-36e7-11e7-8a7f-40d0000000ef",
      "accountId": "103bff1b-36e7-11e7-8a7f-40d000000004",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/105a788e-36e7-11e7-8a7f-40d000000069",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/103cca6f-36e7-11e7-8a7f-40d000000005",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2017-05-12 10:47:55",
      "name": "bundle",
      "code": "00003",
      "externalCode": "ndWrlXCZjm9uSyLk57KOD0",
      "archived": false,
      "pathName": "",
      "useParentVat": false,
      "vat": 18,
      "vatEnabled": true,
      "effectiveVat": 18,
      "effectiveVatEnabled": true,
      "uom": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        }
      },
      "images": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/bundle/4f75d130-36e7-11e7-8a7f-40d0000000ef/images",
          "type": "image",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "minPrice": {
        "value": 500.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "salePrices": [
        {
          "value": 0.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        }
      ],
      "article": "50000000",
      "weight": 0,
      "volume": 0,
      "barcodes": [
        {
          "ean13": "2000000000046"
        }
      ],
      "components": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/bundle/4f75d130-36e7-11e7-8a7f-40d0000000ef/components",
          "type": "bundlecomponent",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/6830a346-36e7-11e7-8a7f-40d0000000f8",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "id": "6830a346-36e7-11e7-8a7f-40d0000000f8",
      "accountId": "103bff1b-36e7-11e7-8a7f-40d000000004",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/105a788e-36e7-11e7-8a7f-40d000000069",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/103cca6f-36e7-11e7-8a7f-40d000000005",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2017-05-12 10:48:37",
      "name": "product2",
      "code": "00004",
      "externalCode": "bxviUUtwg4C6y4RdOc2GS3",
      "archived": false,
      "pathName": "",
      "uom": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        }
      },
      "images": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/6830a346-36e7-11e7-8a7f-40d0000000f8/images",
          "type": "image",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },      
      "minPrice": {
        "value": 500.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "salePrices": [
        {
          "value": 1800.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        }
      ],
      "buyPrice": {
        "value": 700.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "article": "2000000000000",
      "weight": 0,
      "volume": 0,
      "barcodes": [
        {
          "ean13": "2000000000053"
        }
      ],
      "variantsCount": 2,
      "isSerialTrackable": false
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/68379863-36e7-11e7-8a7f-40d0000000fd",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      },
      "id": "68379863-36e7-11e7-8a7f-40d0000000fd",
      "accountId": "103bff1b-36e7-11e7-8a7f-40d000000004",
      "updated": "2017-05-12 10:48:37",
      "name": "product2 (blue)",
      "code": "00002",
      "externalCode": "BrmW28jLhRMI-jOPUdfWW0",
      "archived": false,
      "characteristics": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/682beecc-36e7-11e7-8a7f-40d0000000f5",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "682beecc-36e7-11e7-8a7f-40d0000000f5",
          "name": "color",
          "value": "blue"
        }
      ],
      "salePrices": [
        {
          "value": 1800.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        }
      ],
      "barcodes": [
        {
          "ean13": "2000000000060"
        }
      ],
      "product": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/6830a346-36e7-11e7-8a7f-40d0000000f8",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/6839f0fa-36e7-11e7-8a7f-40d000000101",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      },
      "id": "6839f0fa-36e7-11e7-8a7f-40d000000101",
      "accountId": "103bff1b-36e7-11e7-8a7f-40d000000004",
      "updated": "2017-05-12 10:48:37",
      "name": "product2 (red)",
      "code": "00003",
      "externalCode": "i0u4rktiiVX6BWL60IVkJ1",
      "archived": false,
      "characteristics": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/682beecc-36e7-11e7-8a7f-40d0000000f5",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "682beecc-36e7-11e7-8a7f-40d0000000f5",
          "name": "color",
          "value": "red"
        }
      ],
      "salePrices": [
        {
          "value": 1800.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        }
      ],
      "barcodes": [
        {
          "ean13": "2000000000077"
        }
      ],
      "product": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/6830a346-36e7-11e7-8a7f-40d0000000f8",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        }
      }
    }
  ]
}
```


### Получение Ассортимента с партиями

> Запрос на получение всех товаров, услуг, комплектов, модификаций и партий в виде списка.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/assortment?groupBy=consignment" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "X-Lognex-Remap-Beta-Feature: assortmentWithoutStock"
```

> Response 200 (application/json). Успешный запрос. Результат - JSON представление списка всех товаров, услуг, модификаций и партий.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/assortment?groupBy=consignment",
    "type": "assortment",
    "mediaType": "application/json",
    "size": 6,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/ba3c6d6d-3d33-11ef-ac15-0010000000ef",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=ba3a833f-3d33-11ef-ac15-0010000000ed"
      },
      "id": "ba3c6d6d-3d33-11ef-ac15-0010000000ef",
      "accountId": "1e831ee5-3d33-11ef-ac15-000f00000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/2004c794-3d33-11ef-ac15-00100000004e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=2004c794-3d33-11ef-ac15-00100000004e"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/1e85f779-3d33-11ef-ac15-000f00000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2024-07-08 17:11:27.942",
      "name": "продукт",
      "description": "продукт",
      "code": "00001",
      "externalCode": "yO85GgFpgK5DFsmjJKdQ82",
      "archived": false,
      "pathName": "",
      "useParentVat": true,
      "uom": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        }
      },
      "images": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/ba3c6d6d-3d33-11ef-ac15-0010000000ef/images",
          "type": "image",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "minPrice": {
        "value": 0.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/2084dec0-3d33-11ef-ac15-00100000009d",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=2084dec0-3d33-11ef-ac15-00100000009d"
          }
        }
      },
      "salePrices": [
        {
          "value": 0.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/2084dec0-3d33-11ef-ac15-00100000009d",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json",
              "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=2084dec0-3d33-11ef-ac15-00100000009d"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/20cc4a52-3d33-11ef-ac15-00100000009e",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "20cc4a52-3d33-11ef-ac15-00100000009e",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        }
      ],
      "buyPrice": {
        "value": 0.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/2084dec0-3d33-11ef-ac15-00100000009d",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=2084dec0-3d33-11ef-ac15-00100000009d"
          }
        }
      },
      "barcodes": [
        {
          "ean13": "2000000000015"
        }
      ],
      "paymentItemType": "GOOD",
      "discountProhibited": false,
      "weight": 0.0,
      "volume": 0.0,
      "variantsCount": 2,
      "isSerialTrackable": false,
      "trackingType": "NOT_TRACKED",
      "files": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/ba3c6d6d-3d33-11ef-ac15-0010000000ef/files",
          "type": "files",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/consignment/95b97e84-3d34-11ef-ac15-000d00000000",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/consignment/metadata",
        "type": "consignment",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#consignment/edit?id=95b97e84-3d34-11ef-ac15-000d00000000"
      },
      "id": "95b97e84-3d34-11ef-ac15-000d00000000",
      "accountId": "1e831ee5-3d33-11ef-ac15-000f00000001",
      "updated": "2024-07-08 17:15:52.881",
      "name": "продукт / consignment",
      "code": "1012",
      "externalCode": "g9BOLNRZglk9NMOHxcrVV0",
      "label": "consignment",
      "barcodes": [
        {
          "ean13": "2000000000077"
        }
      ],
      "images": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/ba3c6d6d-3d33-11ef-ac15-0010000000ef/images",
          "type": "image",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/ba3c6d6d-3d33-11ef-ac15-0010000000ef",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=ba3a833f-3d33-11ef-ac15-0010000000ed"
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/f7954456-3d33-11ef-ac15-00100000011e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=f7953353-3d33-11ef-ac15-00100000011c"
      },
      "id": "f7954456-3d33-11ef-ac15-00100000011e",
      "accountId": "1e831ee5-3d33-11ef-ac15-000f00000001",
      "updated": "2024-07-08 17:11:27.799",
      "name": "продукт (мод А)",
      "code": "00002",
      "externalCode": "wc0O05KgiXC-4gxxp02DN0",
      "archived": false,
      "characteristics": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/f78c41a6-3d33-11ef-ac15-00100000011b",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "f78c41a6-3d33-11ef-ac15-00100000011b",
          "name": "модификация",
          "value": "мод А"
        }
      ],
      "images": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/f7954456-3d33-11ef-ac15-00100000011e/images",
          "type": "image",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "salePrices": [
        {
          "value": 0.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/2084dec0-3d33-11ef-ac15-00100000009d",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json",
              "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=2084dec0-3d33-11ef-ac15-00100000009d"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/20cc4a52-3d33-11ef-ac15-00100000009e",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "20cc4a52-3d33-11ef-ac15-00100000009e",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        }
      ],
      "barcodes": [
        {
          "ean13": "2000000000046"
        }
      ],
      "discountProhibited": false,
      "product": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/ba3c6d6d-3d33-11ef-ac15-0010000000ef",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=ba3a833f-3d33-11ef-ac15-0010000000ed"
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/f79dd660-3d33-11ef-ac15-001000000123",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=f79db7c3-3d33-11ef-ac15-001000000121"
      },
      "id": "f79dd660-3d33-11ef-ac15-001000000123",
      "accountId": "1e831ee5-3d33-11ef-ac15-000f00000001",
      "updated": "2024-07-08 17:11:27.870",
      "name": "продукт (мод Б)",
      "code": "00003",
      "externalCode": "3PFqcaJagqpvSiIgKLaCq1",
      "archived": false,
      "characteristics": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/f78c41a6-3d33-11ef-ac15-00100000011b",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "f78c41a6-3d33-11ef-ac15-00100000011b",
          "name": "модификация",
          "value": "мод Б"
        }
      ],
      "images": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/f79dd660-3d33-11ef-ac15-001000000123/images",
          "type": "image",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "salePrices": [
        {
          "value": 0.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/2084dec0-3d33-11ef-ac15-00100000009d",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json",
              "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=2084dec0-3d33-11ef-ac15-00100000009d"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/20cc4a52-3d33-11ef-ac15-00100000009e",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "20cc4a52-3d33-11ef-ac15-00100000009e",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        }
      ],
      "barcodes": [
        {
          "ean13": "2000000000053"
        }
      ],
      "discountProhibited": false,
      "product": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/ba3c6d6d-3d33-11ef-ac15-0010000000ef",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=ba3a833f-3d33-11ef-ac15-0010000000ed"
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/service/c57dcc60-3d33-11ef-ac15-0010000000fc",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "service",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=c57db591-3d33-11ef-ac15-0010000000fa"
      },
      "id": "c57dcc60-3d33-11ef-ac15-0010000000fc",
      "accountId": "1e831ee5-3d33-11ef-ac15-000f00000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/2004c794-3d33-11ef-ac15-00100000004e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=2004c794-3d33-11ef-ac15-00100000004e"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/1e85f779-3d33-11ef-ac15-000f00000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2024-07-08 17:10:03.751",
      "name": "услуга",
      "description": "услуга",
      "code": "00002",
      "externalCode": "60tB0R4Ui9PfsXhauKUP40",
      "archived": false,
      "pathName": "",
      "useParentVat": true,
      "uom": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        }
      },
      "minPrice": {
        "value": 0.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/2084dec0-3d33-11ef-ac15-00100000009d",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=2084dec0-3d33-11ef-ac15-00100000009d"
          }
        }
      },
      "salePrices": [
        {
          "value": 0.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/2084dec0-3d33-11ef-ac15-00100000009d",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json",
              "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=2084dec0-3d33-11ef-ac15-00100000009d"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/20cc4a52-3d33-11ef-ac15-00100000009e",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "20cc4a52-3d33-11ef-ac15-00100000009e",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        }
      ],
      "buyPrice": {
        "value": 0.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/2084dec0-3d33-11ef-ac15-00100000009d",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=2084dec0-3d33-11ef-ac15-00100000009d"
          }
        }
      },
      "barcodes": [
        {
          "ean13": "2000000000022"
        }
      ],
      "paymentItemType": "SERVICE",
      "discountProhibited": false,
      "files": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/service/c57dcc60-3d33-11ef-ac15-0010000000fc/files",
          "type": "files",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/bundle/da607138-3d33-11ef-ac15-00100000010d",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "bundle",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=da60604b-3d33-11ef-ac15-00100000010b"
      },
      "id": "da607138-3d33-11ef-ac15-00100000010d",
      "accountId": "1e831ee5-3d33-11ef-ac15-000f00000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/2004c794-3d33-11ef-ac15-00100000004e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=2004c794-3d33-11ef-ac15-00100000004e"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/1e85f779-3d33-11ef-ac15-000f00000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2024-07-08 17:10:38.791",
      "name": "комплект",
      "code": "00003",
      "externalCode": "pOjHkQ6mgLmQ9aI0dayiY0",
      "archived": false,
      "pathName": "",
      "useParentVat": true,
      "uom": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        }
      },
      "images": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/bundle/da607138-3d33-11ef-ac15-00100000010d/images",
          "type": "image",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "minPrice": {
        "value": 0.0,
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/2084dec0-3d33-11ef-ac15-00100000009d",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=2084dec0-3d33-11ef-ac15-00100000009d"
          }
        }
      },
      "salePrices": [
        {
          "value": 0.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/2084dec0-3d33-11ef-ac15-00100000009d",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json",
              "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=2084dec0-3d33-11ef-ac15-00100000009d"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/20cc4a52-3d33-11ef-ac15-00100000009e",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "20cc4a52-3d33-11ef-ac15-00100000009e",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        }
      ],
      "barcodes": [
        {
          "ean13": "2000000000039"
        }
      ],
      "paymentItemType": "GOOD",
      "discountProhibited": false,
      "weight": 0.0,
      "volume": 0.0,
      "trackingType": "NOT_TRACKED",
      "components": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/bundle/da607138-3d33-11ef-ac15-00100000010d/components",
          "type": "bundlecomponent",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "files": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/bundle/da607138-3d33-11ef-ac15-00100000010d/files",
          "type": "files",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      }
    }
  ]
}
```

### Массовое удаление позиций в Ассортименте

В теле запроса нужно передать массив, содержащий JSON метаданных позиций в Ассортименте, которые вы хотите удалить.

> Запрос на массовое удаление позиций в Ассортименте.

```shell
curl --compressed -X POST \
  "https://api.moysklad.ru/api/remap/1.2/entity/assortment/delete" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -d '[
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b1",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                "type": "product",
                "mediaType": "application/json"
            }
        },
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/service/7944ef04-f831-11e5-7a69-971500188b2",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                "type": "service",
                "mediaType": "application/json"
            }
        }
      ]'
```

> Успешный запрос. Результат - JSON информация об удалении позиций в Ассортименте.

```json
[
  {
    "info":"Сущность 'service' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  },
  {
    "info":"Сущность 'product' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  }
]
```

### Получить Настройки справочника товаров

> Запрос на получение настроек справочника товаров

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/assortment/settings" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление настроек компании.

```json
{
  "meta" : {
    "href" : "https://api.moysklad.ru/api/remap/1.2/entity/assortment/settings",
    "type" : "assortmentsettings",
    "mediaType" : "application/json"
  },
  "barcodeRules" : {
    "fillEAN13Barcode" : true,
    "weightBarcode" : true,
    "weightBarcodePrefix" : 77
  },
  "uniqueCodeRules" : {
    "checkUniqueCode" : true,
    "fillUniqueCode" : true
  },
  "createdShared" : true
}
```

### Изменить настройки справочника товаров

В теле запроса нужно передать объект, содержащий новый JSON настроек справочника.
Изменять настройки можно частично, для этого в тело запроса нужно добавить лишь те поля, которые необходимо обновлять, остальные поля останутся прежними. Каждое поле является необязательным.
В ответе придет полная сущность, даже если обновление было частичным.

> Запрос на изменение метаданных справочника товаров.

```shell
curl --compressed -X PUT \
  "https://api.moysklad.ru/api/remap/1.2/entity/assortment/settings" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -d '{
  "uniqueCodeRules": {
    "checkUniqueCodeBoolean": true,
    "fillUniqueCode": true
  },
  "barcodeRules": {
    "fillEAN13Barcode": true,
    "weightBarcodePrefix": 55
  },
  "createdShared": false
}'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление настроек справочника товаров.

```json
{
  "meta" : {
    "href" : "https://api.moysklad.ru/api/remap/1.2/entity/assortment/settings",
    "type" : "assortmentsettings",
    "mediaType" : "application/json"
  },
  "uniqueCodeRules": {
    "checkUniqueCodeBoolean": true,
    "fillUniqueCode": true
  },
  "barcodeRules": {
    "fillEAN13Barcode": true,
    "weightBarcodePrefix": 55
  },
  "createdShared": false
}
```
