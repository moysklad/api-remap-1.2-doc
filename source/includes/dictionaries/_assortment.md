# Сущности
## Ассортимент
#### Ассортимент
Сущность assortment представляет собой список всех товаров, услуг, комплектов, серий и модификаций с полями `stock`,
`reserve`, `inTransit`, `quantity`, показывающими остаток, резерв, ожидание и доступно каждой из сущностей (для комплектов и услуг эти поля не выводятся).
Данные поля могут быть рассчитаны в зависимости от даты и склада с использованием параметров фильтрации `stockMoment` и `stockStore`.

#### Атрибуты доступные для фильтрации

Результаты запроса можно отфильтровать, используя параметр filter.

| Название              | Описание                                                                                                                                                                                                                                                                                                                                           |
| --------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **alcoholic.type**    | параметр для фильтрации по коду вида алкогольной продукции. Можно использовать операторы `=` и `!=`. Значение параметра - целое число. Можно передать пустое значение, тогда в выборку попадут товары с заполненным или незаполненным значением кода вида продукции.                                                                               |
| **archived**          | параметр для фильтрации по признаку архивности товаров. Возможные значения: true, false. Для выдачи как обычных, так и товаров в архиве, нужно передать сразу два значения true и false. По умолчанию в выдачу попадают только обычные товары.                                                                                                     |
| **article**           | параметр для фильтрации по артикулам товаров и комплектов. Можно использовать операторы `=`, `!=`, `~`, `~=`, `=~`. Можно передать несколько значений. Можно указать пустое значение.                                                                                                                                                              |
| **barcode**           | параметр для фильтрации по штрихкодам сущностей. Допустимый оператор - `=`. Можно передать несколько значений. Можно указать пустое значение.                                                                                                                                                                                                      |
| **code**              | параметр для фильтрации по кодам сущностей. Можно использовать операторы `=`, `!=`, `~`, `~=`, `=~`. Можно передать несколько значений. Можно указать пустое значение.                                                                                                                                                                             |
| **description**       | параметр для фильтрации по описаниям сущностей. Можно использовать операторы `=`, `!=`, `~`, `~=`, `=~`. Можно передать несколько значений. Можно указать пустое значение.                                                                                                                                                                         |
| **externalCode**      | параметр для фильтрации по внешним кодам сущностей. Можно использовать операторы `=`, `!=`, `~`, `~=`, `=~`. Можно передать несколько значений. Можно указать пустое значение.                                                                                                                                                                     |
| **group**             | параметр для фильтрации по владельцу-отделу. Можно использовать операторы `=` и `!=`. Значение параметра - ссылка на отдел. Можно передать несколько значений.                                                                                                                                                                                     |
| **id**                | параметр для фильтрации по идентификаторам сущностей. Можно использовать операторы `=` и `!=`. Можно передать несколько значений.                                                                                                                                                                                                                  |
| **isSerialTrackable** | параметр для фильтрации по использованию серийных номеров                                                                                                                                                                                                                                                                                          |
| **name**              | параметр для фильтрации по наименованиям сущностей. Можно использовать операторы `=`, `!=`, `~`, `~=`, `=~`. Можно передать несколько значений.                                                                                                                                                                                                    |
| **owner**             | параметр для фильтрации по владельцу-сотруднику. Можно использовать операторы `=` и `!=`. Значение параметра - ссылка на сотрудника. Можно передать несколько значений. Можно указать пустое значение.                                                                                                                                             |
| **pathname**          | параметр для фильтрации по наименованию групп товаров. Можно использовать операторы `=`, `!=`, `~`, `~=`, `=~`. Можно передать несколько значений. Можно указать пустое значение.                                                                                                                                                                  |
| **productFolder**     | параметр для фильтрации по нескольким группам товаров. Можно использовать операторы `=` и `!=`. Значение параметра - ссылка на группу товаров, которая должна быть включена в выборку или исключена из нее. Можно передать несколько значений. В выборку попадут товары, которые находятся (или не находятся) непосредственно в указанных группах. |
| **quantityMode**      | параметр для фильтрации по значению доступно. Значение по умолчанию all. [Доступные значения](../dictionaries/#suschnosti-assortiment-atributy-dostupnye-dlq-fil-tracii-dostupnye-znacheniq-dlq-quantitymode)                                                                                                                                      |
| **search**            | префиксный поиск по строковым полям, выводимым в ассортименте. Для данного параметра нужно использовать оператор `=`. Поиск по штрихкодам выполняется по полному соотвествию. Можно передать только одно значение.[Подробнее тут](../dictionaries/#suschnosti-assortiment-atributy-dostupnye-dlq-fil-tracii-dostupnye-znacheniq-dlq-search)        |
| **shared**            | параметр для фильтрации по признаку общего доступа. Возможные значения: true, false.                                                                                                                                                                                                                                                               |
| **stockMode**         | параметр для фильтрации по значению остатка. Значение по умолчанию all. [Доступные значения](../dictionaries/#suschnosti-assortiment-atributy-dostupnye-dlq-fil-tracii-dostupnye-znacheniq-dlq-stockmode)                                                                                                                                          |
| **stockMoment**       | момент времени, на который нужно вывести остатки. Передается в виде строки в [формате дата-время](../#mojsklad-json-api-obschie-swedeniq-format-daty-i-wremeni)                                                                                                                                                                                    |
| **stockStore**        | параметр для фильтрации по нескольким складам. Можно использовать операторы `=` и `!=`. Значение параметра - ссылка на склад, который должен быть учтен в выборке или исключен из нее. Можно передать несколько значений.                                                                                                                          |
| **supplier**          | параметр для фильтрации по нескольким поставщикам. Можно использовать операторы `=` и `!=`. Значение параметра - ссылка на контрагента или организацию. В выборку будут включены или исключены товары с указанными поставщиками. Можно передать пустое значение, тогда в выборку попадут товары с незаполненным или заполненным поставщиком.       |
| **type**              | параметр для фильтрации по типу сущности (product, service, bundle, variant, consignment). Используется с оператором `=`. Можно передать несколько значений.                                                                                                                                                                                       |
| **updated**           | параметр для фильтрации по времени последнего обновления сущностей. Можно использовать операторы `=`, `<`, `<=`, `>`, `>=`. Действие строгих операторов синонимично нестрогим. Передается в виде строки в [формате дата-время](../#mojsklad-json-api-obschie-swedeniq-format-daty-i-wremeni).                                                      |
| **updatedBy**         | параметр для фильтрации по автору последнего обновления. Можно использовать операторы `=` и `!=`. Значение параметра - `uid` (`admin@admin`). Можно передать несколько значений.                                                                                                                                                                   |
| **weighed**           | параметр для фильтрации по признаку весового товара. Возможные значения: true, false.                                                                                                                                                                                                                                                              |
| **доп. поле(url)**    | параметром фильтрации служит url дополнительного поля. Оператор фильтрации зависит от типа доп. поля. [Подробнее тут](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-fil-traciq-po-dopolnitel-nym-polqm-dostupnye-operatory-dlq-fil-tracii-dop-polej).                                                                                                                                                                                                                       |

Также доступна фильтрация по доп. полям. Подробнее про фильтрацию по доп. полям можно посмотреть в соответствующем [разделе](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-fil-traciq-po-dopolnitel-nym-polqm).

##### Доступные значения для stockMode
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
Значение по умолчанию all.

| Значение         | Описание                            |
| ---------------- | ----------------------------------- |
| **all**          | Любое значение остатка              |
| **positiveOnly** | Положительный остаток               |
| **negativeOnly** | Отрицательный остаток               |
| **empty**        | Нулевой остаток                     |
| **nonEmpty**     | Ненулевой остаток                   |
| **underMinimum** | Остаток ниже неснижаемого остатка   |
  
##### Доступные значения для search
Для данного параметра нужно использовать оператор `=`. Поиск по штрихкодам выполняется по полному соотвествию. Можно передать только одно значение.

   + по наименованию элемента Ассортимента **name**
   + по имени модификации **name**
   + по коду **code**
   + по коду модификации **code**
   + по артикулу **article**
   + по штрихкоду **barcode**
   + по штрихкоду модификации **barcode**
   + по штрихкоду упаковок товаров **barcode**  
   + по штрихкоду упаковок модификаций **barcode**
 

При использовании фильтров **alcoholic.type**, **weighed** и фильтров **stockMode**, **quantityMode** со значениями, отличными от all, в выдачу не попадают услуги и комлекты.

##### Фильтрация доп. полей

Подробнее функциональность описана в разделе [Фильтрация по дополнительным полям](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-fil-traciq-po-dopolnitel-nym-polqm).


Примеры фильтрации: 

- `filter=stockStore=https://online.moysklad.ru/api/remap/1.2/entity/store/656c4032-8667-11e6-8a84-bae500003321`
- `filter=id=677c4032-8667-11e6-8a84-bae500003344`
- `filter=name~див`
- `filter=code~0002`
- `filter=externalCode~xdls`
- `filter=article~3456`
- `filter=description~див`
- `filter=shared=false`
- `filter=updated>=2019-07-10 12:00:00;updated<=2019-07-12 12:00:00`
- `filter=updatedBy=admin@company`
- `filter=owner=https://online.moysklad.ru/api/remap/1.2/entity/employee/a88d0702-85c7-11e9-ac12-000d00000321`
- `filter=group=https://online.moysklad.ru/api/remap/1.2/entity/group/a99d0702-85c7-11e9-ac12-000d00000551`
- `filter=alcoholic.type=123`
- `filter=productFolder=https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c56d0702-85c7-11e9-ac12-000d000000b1`
- `filter=stockMode=all`
- `filter=quantityMode=all`
- `filter=stockMode=all;quantityMode=all`
- `filter=stockMoment=2019-07-10 12:00:00`
- `filter=weighed=true`
- `filter=archived=true`
- `filter=archived=false;archived=true`
- `filter=supplier=https://online.moysklad.ru/api/remap/1.2/entity/counterparty/656c4032-8667-11e6-8a84-bae5000033aa`
- `filter=search=див`
- `filter=https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/b83c12e7-42bf-11ec-0a80-08bb00000161=color`
- `filter=https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/83386e05-51c0-11ec-0a83-0640000001bb>=2021-11-30 12:39:00`


**Параметры**

| Параметр                       | Описание                                                                                                                                                                                                                                       |
| ------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.                                                                                                         |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                                                                                                                         |
| **groupBy**                    | `string` (optional) Параметр группировки. Принимает одно из значений: `product` - будут выведены только товары, `variant` - будут выведены товары и модификации (аналогично отсутствию параметра), `consignment` - будут выведены все сущности |


#### Настройки справочника 

Под сущностями справочника товаров подразумеваются товары, услуги, комплекты и группы товаров. 
Настройки справочника позволяют пользователю менять проверку уникальности кода, установку уникального кода при создании сущностей, установку уникального штрихкода EAN13, использование префиксов штрихкода для весовых товаров и настройку общего доступа к этим сущностям.

#### Атрибуты сущности

| Название            | Тип                                                       | Описание                                                                                                                                                                                                                                                     |
| ------------------- | :-------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **meta**            | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Настроек справочника<br>`+Обязательное при ответе`                                                                                                                                                                                                |
| **uniqueCodeRules** | Object                                                    | Настройки уникальности кода для сущностей справочника. [Подробнее тут](../dictionaries/#suschnosti-assortiment-atributy-wlozhennyh-suschnostej-nastrojki-unikal-nosti-koda-dlq-suschnostej-sprawochnika)<br>`+Обязательное при ответе`                       |
| **barcodeRules**    | Object                                                    | Настройки правил штрихкодов для сущностей справочника. [Подробнее тут](../dictionaries/#suschnosti-assortiment-atributy-wlozhennyh-suschnostej-nastrojki-prawil-shtrihkodow-dlq-suschnostej-sprawochnika)<br>`+Обязательное при ответе`                     |
| **createdShared**   | Boolean                                                   | Создавать новые документы с меткой «Общий»<br>`+Обязательное при ответе`                                                                                                                                                                                     |

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

> Запрос на получение всех товаров, услуг, комплектов, модификаций и серий в виде списка.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/assortment"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json). Успешный запрос. Результат - JSON представление списка всех товаров, услуг, модификация и серий.
  
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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/assortment",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/assortment/metadata",
    "type": "assortment",
    "mediaType": "application/json",
    "size": 7,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/35427052-36e7-11e7-8a7f-40d0000000d1",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "id": "35427052-36e7-11e7-8a7f-40d0000000d7",
      "accountId": "103bff1b-36e7-11e7-8a7f-40d000000004",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/105a788e-36e7-11e7-8a7f-40d000000069",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/103cca6f-36e7-11e7-8a7f-40d000000005",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        }
      },
      "images": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/35427052-36e7-11e7-8a7f-40d0000000d1/images",
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
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
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
              "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
              "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/1076cf8b-36e7-11e7-8a7f-40d000000093",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "buyPrice": {
        "value": 500.0,
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
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
      "isSerialTrackable": false,
      "stock": 0,
      "reserve": 0,
      "inTransit": 0,
      "quantity": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/consignment/c66f4b17-36e7-11e7-8a7f-40d000000113",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/consignment/metadata",
        "type": "consignment",
        "mediaType": "application/json"
      },
      "id": "c66f4b17-36e7-11e7-8a7f-40d000000113",
      "accountId": "103bff1b-36e7-11e7-8a7f-40d000000004",
      "updated": "2017-05-12 10:51:15",
      "name": "product / consignment",
      "code": "1012",
      "externalCode": "g9BOLNRZglk9NMOHxcrVV0",
      "label": "consignment",
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/35427052-36e7-11e7-8a7f-40d0000000d1",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        }
      },
      "stock": 0,
      "reserve": 0,
      "inTransit": 0,
      "quantity": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/437f2d67-36e7-11e7-8a7f-40d0000000df",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "service",
        "mediaType": "application/json"
      },
      "id": "437f2d67-36e7-11e7-8a7f-40d0000000df",
      "accountId": "103bff1b-36e7-11e7-8a7f-40d000000004",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/105a788e-36e7-11e7-8a7f-40d000000069",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/103cca6f-36e7-11e7-8a7f-40d000000005",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        }
      },
      "minPrice": {
        "value": 500.0,
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
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
              "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
              "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
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
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/bundle/4f75d130-36e7-11e7-8a7f-40d0000000ef",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "bundle",
        "mediaType": "application/json"
      },
      "id": "4f75d130-36e7-11e7-8a7f-40d0000000ef",
      "accountId": "103bff1b-36e7-11e7-8a7f-40d000000004",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/105a788e-36e7-11e7-8a7f-40d000000069",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/103cca6f-36e7-11e7-8a7f-40d000000005",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        }
      },
      "images": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/bundle/4f75d130-36e7-11e7-8a7f-40d0000000ef/images",
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
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
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
              "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
              "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/bundle/4f75d130-36e7-11e7-8a7f-40d0000000ef/components",
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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/6830a346-36e7-11e7-8a7f-40d0000000f8",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "id": "6830a346-36e7-11e7-8a7f-40d0000000f8",
      "accountId": "103bff1b-36e7-11e7-8a7f-40d000000004",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/105a788e-36e7-11e7-8a7f-40d000000069",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/103cca6f-36e7-11e7-8a7f-40d000000005",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/uom/metadata",
          "type": "uom",
          "mediaType": "application/json"
        }
      },
      "images": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/6830a346-36e7-11e7-8a7f-40d0000000f8/images",
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
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
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
              "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
              "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
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
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
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
      "isSerialTrackable": false,
      "stock": 0,
      "reserve": 0,
      "inTransit": 0,
      "quantity": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/68379863-36e7-11e7-8a7f-40d0000000fd",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
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
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/682beecc-36e7-11e7-8a7f-40d0000000f5",
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
              "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
              "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/6830a346-36e7-11e7-8a7f-40d0000000f8",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        }
      },
      "stock": 0,
      "reserve": 0,
      "inTransit": 0,
      "quantity": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/6839f0fa-36e7-11e7-8a7f-40d000000101",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
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
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/682beecc-36e7-11e7-8a7f-40d0000000f5",
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
              "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
              "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/6830a346-36e7-11e7-8a7f-40d0000000f8",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        }
      },
      "stock": 0,
      "reserve": 0,
      "inTransit": 0,
      "quantity": 0
    }
  ]
}
```

### Массовое удаление позиций в Ассортименте

В теле запроса нужно передать массив, содержащий JSON метаданных позиций в Ассортименте, которые вы хотите удалить.


> Запрос на массовое удаление позиций в Ассортименте. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/assortment/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "service",
            "mediaType": "application/json"
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
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/assortment/settings"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление настроек компании.

```json
{
  "meta" : {
    "href" : "https://online.moysklad.ru/api/remap/1.2/entity/assortment/settings",
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
curl -X PUT
  "https://online.moysklad.ru/api/remap/1.2/entity/assortment/settings"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
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
    "href" : "https://online.moysklad.ru/api/remap/1.2/entity/assortment/settings",
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
