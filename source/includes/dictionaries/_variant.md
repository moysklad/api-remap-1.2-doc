## Модификация

### Модификации 
Средствами JSON API можно создавать и обновлять сведения о Модификациях товаров, запрашивать списки Модификаций товаров и сведения по отдельным Модификациям. Кодом сущности для Модификации в составе JSON API является ключевое слово **variant**. Больше о Модификациях товаров и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по
 [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203325413-%D0%9C%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%B8-%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2),
 а также больше о работе с товарами [здесь](https://support.moysklad.ru/hc/ru/categories/360001132417).
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](#/general#3-kontekstnyj-poisk). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов модификаций на соответствие поисковой строке будет осуществлен по следующим полям:

+ по наименованию товара с Модификацией **name**

Возможна фильтрация списка Модификаций по **id** товара - параметр фильтрации **productid**. Доступные операторы фиьтрации `=` `!=` .
Подробнее про фильтрацию можно прочитать в разделе [Фильтрация выборки с помощью параметра filter](#/general#3-filtraciya-vyborki-s-pomoshyu-parametra-filter)

Примеры:

+ `filter=productid=677c4032-8667-11e6-8a84-bae500003344`
+ `filter=productid!=677c4032-8667-11e6-8a84-bae500003344`
+ `filter=productid=677c4032-8667-11e6-8a84-bae500003344;productid=421c4032-4709-31e4-1d2r-awe5000025me`

#### Атрибуты Сущности
| Название               | Тип                            | Фильтрация                 | Описание                                                                                                                                                                  |
| ---------------------- |:-------------------------------|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**          | UUID                           | `=` `!=`                   | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                      |
| **archived**           | Boolean                        | `=` `!=`                   | Добавлен ли товар в архив<br>`+Обязательное при ответе`                                                                                                                   |
| **barcodes**           | Array(Object)                  | `=` `!=` `~` `~=` `=~`     | Массив штрихкодов модификации. [Подробнее тут](#/dictionaries/variant#5-shtrihkody).  Для фильтрации по полю необходимо указывать его в единственном числе **barcode**.   |
| **buyPrice**           | Object                         |                            | Закупочная цена                                                                                                                                                           |
| **characteristics**    | Array(Object)                  |                            | Характеристики Модификации. [Подробнее тут](#/dictionaries/variant#6-harakteristiki-modifikacii)<br>`+Обязательное при ответе` `+Необходимо при создании`                 |
| **code**               | String(255)                    | `=` `!=` `~` `~=` `=~`     | Код Модификации                                                                                                                                                           |
| **description**        | String(4096)	                  |                            | Описание Модификации                                                                                                                                                      |
| **discountProhibited** | Boolean                        |                            | Признак запрета скидок<br>`+Обязательное при ответе`                                                                                                                      |
| **externalCode**       | String(255)                    | `=` `!=` `~` `~=` `=~`     | Внешний код Модификации<br>`+Обязательное при ответе`                                                                                                                     |
| **id**                 | UUID                           | `=` `!=`                   | ID Модификации<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                         |
| **images**             | MetaArray                      |                            | Массив метаданных [Изображений](#/dictionaries/images#2-izobrazhenie) (Максимальное количество изображений - 10)<br>`+Обязательное при ответе` `+Expand`                  |
| **meta**               | [Meta](#/general#3-metadannye) |                            | Метаданные Модификации<br>`+Обязательное при ответе`                                                                                                                      |
| **minPrice**           | Object                         |                            | Минимальная цена. [Подробнее тут](#/dictionaries/variant#5-minimalnaya-cena)                                                                                              |
| **minimumStock**       | Object                         |                            | Неснижаемый остаток. [Подробнее тут](#/dictionaries/product#5-nesnizhaemyj-ostatok)<br>`+Выводится по запросу` |
| **name**               | String(255)                    | `=` `!=` `~` `~=` `=~`     | Наименование товара с Модификацией<br>`+Обязательное при ответе`                                                                                                          |
| **packs**              | Array(Object)                  |                            | Упаковки модификации [Подробнее тут](#/dictionaries/variant#5-upakovki-modifikacii)                                                                                       |
| **product**            | [Meta](#/general#3-metadannye) |                            | Метаданные [товара](#/dictionaries/product#2-tovar), к которому привязана Модификация<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                  |
| **salePrices**         | Array(Object)                  |                            | Цены продажи. [Подробнее тут](#/dictionaries/variant#5-ceny-prodazhi)                                                                                                     |
| **things**             | Array(String)                  |                            | Серийные номера<br>`+Только для чтения`                                                                                                                                   |
| **updated**            | DateTime                       | `=` `!=` `<` `>` `<=` `>=` | Момент последнего обновления сущности<br>`+Обязательное при ответе` `+Только для чтения`                                                                                  |

#### Атрибуты доступные для сортировки

| Название         | Описание                            |
| ---------------- | ----------------------------------- |
| **code**         | Код Модификации                     |
| **externalCode** | Внешний код Модификации             |
| **archived**     | Добавлен ли товар в архив           |

#### Атрибуты вложенных сущностей

##### Штрихкоды:
При создании штрихкода требуется описать объект с полем, являющимся форматом представления штрихкода в нижнем регистре, со строковым значением самого штрихкода. Наименование полей отдельного объекта, представляющего штрихкод:

| Название    | Описание                                                                                                          |
|-------------|-------------------------------------------------------------------------------------------------------------------|
| **ean13**   | штрихкод в формате EAN13, если требуется создать штрихкод в формате EAN13                                         |
| **ean8**    | штрихкод в формате EAN8, если требуется создать штрихкод в формате EAN8                                           |
| **code128** | штрихкод в формате Code128, если требуется создать штрихкод в формате Code128                                     |
| **gtin**    | штрихкод в формате GTIN, если требуется создать штрихкод в формате GTIN. Валидируется на соответствие формату GS1 |
| **upc**     | штрихкод в формате UPC, если требуется создать штрихкод в формате UPC                                             |

Для обновления списка штрихкодов необходимо передавать их полный список, включающий как старые, так и новые значения. 
Отсутствующие значения штрихкодов при обновлении будут удалены. При обновлении списка штрихкодов валидируются только новые значения. 
Ранее сохраненные штрихкоды не валидируются. То есть, если один из старых штрихкодов не соответствует требованиям к валидации, то ошибки при обновлении списка не будет. 
Если на вход передан пустой список штрихкодов или список из пустых значений, то ранее созданные штрихкоды будут удалены.

Особенности создания списка штрихкодов при создании комплекта:

+ Если передать список штрихкодов на вход, то полученные значения штрихкодов сохраняются, а пустые значения игнорируются.
+ Если передать список из пустых значений штрихкодов на вход, то для продукции не будет создано ни одного штрихкода.
+ Если не передать на вход атрибут barcodes или передать пустой список в нем, то по умолчанию будет создан один случайный штрихкод типа EAN13 для продукции.

О работе с доп. полями Комплектов можно прочитать [здесь](#/general#3-rabota-s-dopolnitelnymi-polyami)

##### Метаданные Модификаций
Метаданные Модификаций содержат информацию о характеристиках Модификаций, а также о типах цен.
Характеристики Модификации - внутренняя коллекция **characteristics**. Представлена в виде массива объектов с полями:

| Название  | Тип                                                       | Описание                                                                         |
| --------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------- |
| **id**    | UUID                                                      | ID соответствующей характеристики<br>`+Обязательное при ответе`                  |
| **meta**  | [Meta](#/general#3-metadannye) | Метаданные характеристики<br>`+Обязательное при ответе`                          |
| **name**  | String(255)                                               | Наименование характеристики<br>`+Обязательное при ответе`                        |
| **value** | String(255)                                               | Значение характеристики<br>`+Обязательное при ответе` `+Необходимо при создании` |

Посмотреть все созданные в основном интерфейсе характеристики Модификаций,
а также все типы цен можно с помощью запроса на получение метаданных Модификаций.
Ответ - объект, со следующей структурой:

| Название            | Тип                                                       | Описание                                                                         |
| ------------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------- |
| **meta**            | [Meta](#/general#3-metadannye) | Метаданные<br>`+Обязательное при ответе`                                         |
| **characteristics** | Array(Object)                                             | Коллекция всех созданных характеристик Модификаций<br>`+Обязательное при ответе` |

Структуры отдельных объектов коллекций:

###### Характеристики модификации
| Название     | Тип                                                       | Описание                                                                          |
| ------------ | :-------------------------------------------------------- | :-------------------------------------------------------------------------------- |
| **id**       | UUID                                                      | ID соответствующей характеристики<br>`+Обязательное при ответе`                   |
| **meta**     | [Meta](#/general#3-metadannye) | Метаданные характеристики<br>`+Обязательное при ответе`                           |
| **name**     | String(255)                                               | Наименование характеристики<br>`+Обязательное при ответе`                         |
| **required** | Boolean                                                   | Флаг о том, является ли характеристика обязательной<br>`+Обязательное при ответе` |
| **type**     | String(255)                                               | Тип значения характеристики<br>`+Обязательное при ответе`                         |

##### Изображение: структура и загрузка.
При запросе Модификации с изображениями будет выведено json представление этой Модификации, содержащее поле **images**. Данное поле является 
массивом элементов. Элементы поля **images** имеют поля:

| Название      | Тип                                                       | Описание                                                          |
| ------------- | :-------------------------------------------------------- | :---------------------------------------------------------------- |
| **filename**  | String(255)                                               | Имя файла<br>`+Обязательное при ответе`                           |
| **meta**      | [Meta](#/general#3-metadannye) | Метаданные объекта<br>`+Обязательное при ответе`                  |
| **miniature** | [Meta](#/general#3-metadannye) | Метаданные миниатюры изображения<br>`+Обязательное при ответе`    |
| **size**      | Int                                                       | Размер файла в байтах<br>`+Обязательное при ответе`               |
| **tiny**      | [Meta](#/general#3-metadannye) | Метаданные уменьшенного изображения<br>`+Обязательное при ответе` |
| **title**     | String(255)                                               | Название Изображения<br>`+Обязательное при ответе`                |
| **updated**   | DateTime                                                  | Время загрузки файла на сервер<br>`+Обязательное при ответе`      |

<h4>Загрузка</h4>
Для загрузки изображений нужно в теле запроса на [создание](#/dictionaries/variant#3-sozdat-modifikaciyu) или [обновление](#/dictionaries/variant#3-izmenit-modifikaciyu) модификации
указать поле **images** со списком элементов, имеющих следующие атрибуты:

| Название                       | Описание                                        |
| ------------------------------ | :---------------------------------------------- |
| **filename**                   | имя файла с расширением. Например - "банан.png" |
| **content**                    | Изображение, закодированное в формате Base64.   |

Если в запросе на обновление **images** будет содержать пустой массив элементов, то все Изображения у Модификации будут удалены, 
т.к. сервер посчитает, что пользователь хочет обновить список Изображений Модификации.

Документация API по работе с Изображениями приведена в главе [Изображение](#/dictionaries/images#2-izobrazhenie).

##### Цены продажи
Если у модификации не заданы отдельные цены продажи, в ответе будут выведены соответствующие цены продажи товара.

| Название      | Тип                                                       | Описание                                                                                                                           |
| ------------- | :-------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| **value**     | Float                                                     | Значение цены<br>`+Обязательное при ответе`                                                                                        |
| **currency**  | [Meta](#/general#3-metadannye) | Ссылка на валюту в формате [Метаданных](#/general#3-metadannye)<br>`+Обязательное при ответе` `+Expand` |
| **priceType** | Object                                                    | Тип цены<br>`+Обязательное при ответе`                                                                                             |

##### Минимальная цена

| Название     | Тип                                                       | Описание                                                                                                                           |
| ------------ | :-------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| **value**    | Float                                                     | Значение цены<br>`+Обязательное при ответе`                                                                                        |
| **currency** | [Meta](#/general#3-metadannye) | Ссылка на валюту в формате [Метаданных](#/general#3-metadannye)<br>`+Обязательное при ответе` `+Expand` |

##### Неснижаемый остаток
Неснижаемый остаток — минимальное количество товара, которое всегда должно быть на складе. Поле `minimumStock` доступно при использовании дополнительного параметра `fields=minimumStock` или при 
передаче поля в запросе создания или изменения сущности.
Пример:

+ `.../variant/{id модификции}?fields=minimumStock`

##### Тип Неснижаемого остатка
Значения поля type.

| Значение               | Описание                                        |
|------------------------|:------------------------------------------------|
| **ALL_WAREHOUSE_SUM**  | В сумме на всех складах                         |
| **ALL_WAREHOUSE_SAME** | Одинаковый на всех складах `+Только для чтения` |
| **WAREHOUSE_VARIED**   | Задан для каждого склада                        |

Как-либо редактировать Неснижаемые остатки в модификации допустимо в случае, когда Неснижаемый остаток не наследуется от товара.
Примеры можно посмотреть в разделах [получения](#/dictionaries/variant#3-poluchit-spisok-modifikacij), [создания](#/dictionaries/variant#3-sozdat-modifikaciyu)
или [обновления](#/dictionaries/variant#3-izmenit-modifikaciyu) модификации.

###### Атрибуты Неснижаемого остатка с типом ALL_WAREHOUSE_SUM

| Название      | Тип     | Описание                                                            |
|---------------|:--------|:--------------------------------------------------------------------|
| **type**      | String  | Разновидность Неснижаемого остатка                                  |
| **inherited** | Boolean | Признак, наследуется ли Неснижаемый остаток от родительского товара |
| **quantity**  | Double  | Количество Неснижаемого остатка в сумме на всех складах             |

###### Атрибуты Неснижаемого остатка с типом ALL_WAREHOUSE_SAME

| Название      | Тип     | Описание                                                                              |
|---------------|:--------|:--------------------------------------------------------------------------------------|
| **type**      | String  | Разновидность Неснижаемого остатка<br>`+Только для чтения`                            |
| **inherited** | Boolean | Признак, наследуется ли Неснижаемый остаток от родительского товара                   |
| **quantity**  | Double  | Количество Неснижаемого остатка одинаковое для каждого склада<br>`+Только для чтения` |

###### Атрибуты Неснижаемого остатка с типом WAREHOUSE_VARIED

| Название          | Тип       | Описание                                                            |
|-------------------|:----------|:--------------------------------------------------------------------|
| **type**          | String    | Разновидность Неснижаемого остатка                                  |
| **inherited**     | Boolean   | Признак, наследуется ли Неснижаемый остаток от родительского товара |
| **storebalances** | MetaArray | Количество Неснижаемого остатка заданное для каждого склада         |

Структура объекта в коллекции **storebalances**:

| Название      | Тип                                                       | Описание                                                 |
|---------------|:----------------------------------------------------------|:---------------------------------------------------------|
| **accountId** | UUID                                                      | ID учетной записи<br>`+Только для чтения`                |
| **id**        | UUID                                                      | ID позиции Неснижаемого остатка<br> `+Только для чтения` |
| **meta**      | [Meta](#/general#3-metadannye) | Метаданные Неснижаемого остатка<br> `+Только для чтения` |
| **store**     | [Meta](#/general#3-metadannye) | Метаданные склада для которого задан Неснижаемый остаток |
| **quantity**  | Double                                                    | Количество Неснижаемого остатка для склада               |

Для создания или изменения Неснижаемого остатка для склада (складов) можно передать в теле запроса на [создание](#/dictionaries/variant#3-sozdat-modifikaciyu)
или [обновление](#/dictionaries/variant#3-izmenit-modifikaciyu) модификации Неснижаемые остатки с указанием склада и количества неснижаемого остатка для данного склада.
Также есть отдельные ресурсы для управления Неснижаемыми остатками по складам:

+ Получение списка (`/entity/variant/{variant_id}/storebalances`)
+ Получение объекта (`/entity/variant/{variant_id}/storebalances/{minimumstock_id}`)
+ Создание (`/entity/variant/{variant_id}/storebalances`)
+ Изменение (`/entity/variant/{variant_id}/storebalances/{minimumstock_id}`)
+ Удаление (`/entity/variant/{variant_id}/storebalances/{minimumstock_id}`)
+ Массовое удаление (`/entity/variant/{variant_id}/storebalances/delete`)

##### Упаковки Модификации

| Название       | Тип                                                       | Описание                                                                                                                          |
| -------------- | :-------------------------------------------------------- |:----------------------------------------------------------------------------------------------------------------------------------|
| **barcodes**   | Array(Object)                                             | Массив штрихкодов упаковки модификации. Данный массив может содержать только один штрихкод. Для фильтрации по полю необходимо указывать его в единственном числе **barcode**.<br>`+Обязательное при ответе`        |
| **id**         | UUID                                                      | ID упаковки модификации<br>`+Обязательное при ответе` `+Только для чтения`                                                        |
| **parentpack** | [Meta](#/general#3-metadannye) | Метаданные родительской упаковки (упаковки товара), для которой переопределяется штрихкод<br>`+Обязательное при ответе` `+Expand` |

### Получить список Модификаций 
Запрос на получение списка всех Модификаций на данной учетной записи.
Результат успешного запроса - JSON представление списка Модификаций с перечисленными полями:

| Название    | Тип                                                       | Описание                                                |
| ----------- | :-------------------------------------------------------- | :------------------------------------------------------ |
| **meta**    | [Meta](#/general#3-metadannye) | Метаданные о выдаче,                                    |
| **context** | [Meta](#/general#3-metadannye) | Метаданные о сотруднике, выполнившем запрос.            |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой модификации. |


**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить список модификаций

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/variant"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Модификаций.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
    "type": "variant",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/66cc36dc-f7d2-11e5-8a84-bae500000074/671402e4-f7d2-11e5-8a84-bae50000007c",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json"
      },
      "id": "671402e4-f7d2-11e5-8a84-bae50000007c",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "updated": "2016-04-01 09:24:34",
      "name": "ТоварМногоМодификаций (1, 100, 10)",
      "code": "00005",
      "externalCode": "rAhHA0T1glL2xY3d1aHFT2",
      "archived": false,
      "discountProhibited": false,
      "characteristics": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/7a6078e4-3c64-11e6-8a84-bae500000003",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "7a6078e4-3c64-11e6-8a84-bae500000003",
          "name": "Цвет",
          "value": "красны"
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/7a6078e4-3c64-11e6-8a84-bae500000003",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "7a6078e4-3c64-11e6-8a84-bae500000003",
          "name": "Свежесть",
          "value": "Свежий"
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/7a6078e4-3c64-11e6-8a84-bae500000003",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "7a6078e4-3c64-11e6-8a84-bae500000003",
          "name": "Вкус",
          "value": "Вкусный"
        }
      ],
      "images": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/671402e4-f7d2-11e5-8a84-bae50000007c/images",
          "type": "image",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0                                         
        }
      },
      "buyPrice": {
        "value": 0.0
      },
      "salePrices": [
        {
          "value": 0.0,
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
        },
        {
          "value": 0,
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
            "name": "Цена для друзей",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
          }
        },
        {
          "value": 0,
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f4444",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "672559f1-cbf3-11e1-9eb9-889ffa6f4444",
            "name": "Цена для конкурентов",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f434444"
          }
        }
      ],
      "barcodes": [
        {
          "ean8": "20000000"
        },
        {
          "ean13": "2000000000000"
        },
        {
          "code128": "code128 barcode"
        },
        {
          "gtin": "00000000000130"
        }
      ],
      "product": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/66ccbc9f-f7d2-11e5-8a84-bae500000076",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        }
      }
    }
  ]
}
```
> Получить список модификаций с выводом Неснижаемого остатка

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/variant?fields=minimumStock"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Модификаций.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/?fields=minimumStock",
    "type": "variant",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/0fc3547c-1395-11f0-ac15-001100000045",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json",
        "uuidHref": "https://api.moysklad.ru/app/#feature/edit?id=0fc34911-1395-11f0-ac15-001100000043"
      },
      "id": "0fc3547c-1395-11f0-ac15-001100000045",
      "accountId": "762af84a-0ec6-11f0-ac15-001000000001",
      "updated": "2025-04-07 12:45:38.399",
      "name": "Potato (yellow)",
      "code": "00004",
      "externalCode": "KDnPv4IYhLVJKh4NKP9mL0",
      "archived": false,
      "characteristics": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/7a797ba3-1394-11f0-ac15-001100000025",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "7a797ba3-1394-11f0-ac15-001100000025",
          "name": "Colour",
          "value": "yellow"
        }
      ],
      "images": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/0fc3547c-1395-11f0-ac15-001100000045/images",
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
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/77a29ae9-0ec6-11f0-ac15-0012000000a4",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
              "type": "currency",
              "mediaType": "application/json",
              "uuidHref": "https://api.moysklad.ru/app/#currency/edit?id=77a29ae9-0ec6-11f0-ac15-0012000000a4"
            }
          },
          "priceType": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/77f67b4c-0ec6-11f0-ac15-0012000000a5",
              "type": "pricetype",
              "mediaType": "application/json"
            },
            "id": "77f67b4c-0ec6-11f0-ac15-0012000000a5",
            "name": "Цена продажи",
            "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
          }
        }
      ],
      "barcodes": [
        {
          "ean13": "2000000000107"
        }
      ],
      "discountProhibited": false,
      "minimumStock": {
        "type": "WAREHOUSE_VARIED",
        "inherited": true,
        "storebalances": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/0fc3547c-1395-11f0-ac15-001100000045/storebalances",
            "type": "minimumstock",
            "mediaType": "application/json",
            "size": 1,
            "limit": 1000,
            "offset": 0
          }
        }
      },
      "product": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/3bdfdb5b-137a-11f0-ac15-001100000018",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://api.moysklad.ru/app/#good/edit?id=3bdfb95e-137a-11f0-ac15-001100000016"
        }
      }
    }
  ]
}
```

### Создать Модификацию 
Создать новую Модификацию. Для создания новой Модификации необходимы поля **product**, **characteristics**.
Поле **characteristics** указывается как массив объектов со следующей структурой:

| Название  | Тип         | Описание                                                                         |
| --------- | :---------- | :------------------------------------------------------------------------------- |
| **id**    | UUID        | ID характеристики                                                                |
| **name**  | String(255) | Наименование характеристики                                                      |
| **value** | String(255) | Значение характеристики<br>`+Обязательное при ответе` `+Необходимо при создании` |

Если поле **id** не указано у какого-либо объекта характеристики, производится поиск соответствующей этому объекту
характеристики по полю **name**. Если же не указаны ни **id**, ни **name**, то произойдет ошибка.

> Пример запроса на создание новой Модификации, привязанной к существующему товару.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/variant"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "name": "(оверспелый, желтый)",
            "characteristics": [
              {
                "id": "627610e3-2cb1-11e6-8a84-bae500000054",
                "value": "оверспелый"
              },
              {
                "id": "627617d8-2cb1-11e6-8a84-bae500000055",
                "value": "черный"
              }
            ],
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
            "buyPrice": {
              "value": 20.0
            },
            "salePrices": [
              {
                "value": 900.0,
                "priceType": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
                    "type": "pricetype",
                    "mediaType": "application/json"
                  }
                }
              },
              {
                "value": 102,
                "priceType": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
                    "type": "pricetype",
                    "mediaType": "application/json"
                  }
                }
              },
              {
                "value": 200,
                "priceType": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f4444",
                    "type": "pricetype",
                    "mediaType": "application/json"
                  }
                }
              }
            ],
            "barcodes": [
              {
                "ean8": "20000000"
              },
              {
                "ean13": "2000000000000"
              },
              {
                "code128": "code128 barcode"
              },
              {
                "gtin": "00000000000130"
              }
            ],
            "product": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/86951fbe-2cb0-11e6-8a84-bae500000043",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                "type": "product",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Модификации.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/14553caa-2cb2-11e6-8a84-bae500000026",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
    "type": "variant",
    "mediaType": "application/json"
  },
  "id": "14553caa-2cb2-11e6-8a84-bae500000026",
  "accountId": "da7d9bbe-2c97-11e6-8a84-bae500000001",
  "updated": "2016-06-07 16:16:43",
  "name": "Банан (оверспелый, черный)",
  "code": "00011",
  "externalCode": "tQcC7LdEjTZMh85Em6FTW1",
  "archived": false,
  "discountProhibited": false,
  "characteristics": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/627610e3-2cb1-11e6-8a84-bae500000054",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "627610e3-2cb1-11e6-8a84-bae500000054",
      "name": "Спелость",
      "value": "оверспелый"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/627617d8-2cb1-11e6-8a84-bae500000055",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "627617d8-2cb1-11e6-8a84-bae500000055",
      "name": "Цвет",
      "value": "черный"
    }
  ],
  "images": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/14553caa-2cb2-11e6-8a84-bae500000026/images",
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
  "buyPrice": {
    "value": 20.0
  },
  "salePrices": [
    {
      "value": 900.0,
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
    },
    {
      "value": 102,
      "priceType": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
        "name": "Цена для друзей",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
      }
    },
    {
      "value": 200,
      "priceType": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f4444",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f4444",
        "name": "Цена для конкурентов",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f434444"
      }
    }
  ],
  "barcodes": [
    {
      "ean8": "20000000"
    },
    {
      "ean13": "2000000000000"
    },
    {
      "code128": "code128 barcode"
    },
    {
      "gtin": "00000000000130"
    }
  ],
  "product": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/86951fbe-2cb0-11e6-8a84-bae500000043",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json"
    }
  }
}
```

> Пример запроса на создание новой Модификации с заполненным полем Неснижаемого остатка.

  ```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/variant"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "characteristics": [
              {
                "id": "7a797ba3-1394-11f0-ac15-001100000025",
                "value": "yellow"
              }
            ],
            "product": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/15007028-137a-11f0-ac15-001100000008",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                "type": "product",
                "mediaType": "application/json"
              }
            }
            "minimumStock": {
              "type": "ALL_WAREHOUSE_SUM",
              "inherited" : false,
              "quantity": 8.0
            }
          }'  
  ```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Модификации с переопределенным Неснижаемым остатком.

  ```json
{
  "meta" : {
    "href" : "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a80d64e-1394-11f0-ac15-001100000028",
    "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
    "type" : "variant",
    "mediaType" : "application/json",
    "uuidHref" : "https://api.moysklad.ru/app/#feature/edit?id=7a80c220-1394-11f0-ac15-001100000026"
  },
  "id" : "7a80d64e-1394-11f0-ac15-001100000028",
  "accountId" : "762af84a-0ec6-11f0-ac15-001000000001",
  "updated" : "2025-04-07 12:41:53.560",
  "name" : "Potato (yellow)",
  "code" : "00002",
  "externalCode" : "Mk0FH0vcg-B9rndAHA1vW1",
  "archived" : false,
  "characteristics" : [ {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/7a797ba3-1394-11f0-ac15-001100000025",
      "type" : "attributemetadata",
      "mediaType" : "application/json"
    },
    "id" : "7a797ba3-1394-11f0-ac15-001100000025",
    "name" : "Colour",
    "value" : "yellow"
  } ],
  "images" : {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a80d64e-1394-11f0-ac15-001100000028/images",
      "type" : "image",
      "mediaType" : "application/json",
      "size" : 0,
      "limit" : 1000,
      "offset" : 0
    }
  },
  "salePrices" : [ {
    "value" : 0.0,
    "currency" : {
      "meta" : {
        "href" : "https://api.moysklad.ru/api/remap/1.2/entity/currency/77a29ae9-0ec6-11f0-ac15-0012000000a4",
        "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type" : "currency",
        "mediaType" : "application/json",
        "uuidHref" : "https://api.moysklad.ru/app/#currency/edit?id=77a29ae9-0ec6-11f0-ac15-0012000000a4"
      }
    },
    "priceType" : {
      "meta" : {
        "href" : "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/77f67b4c-0ec6-11f0-ac15-0012000000a5",
        "type" : "pricetype",
        "mediaType" : "application/json"
      },
      "id" : "77f67b4c-0ec6-11f0-ac15-0012000000a5",
      "name" : "Цена продажи",
      "externalCode" : "cbcf493b-55bc-11d9-848a-00112f43529a"
    }
  } ],
  "barcodes" : [ {
    "ean13" : "2000000000084"
  } ],
  "discountProhibited" : false,
  "minimumStock" : {
    "type" : "ALL_WAREHOUSE_SUM",
    "inherited" : false,
    "quantity" : 8.0
  },
  "product" : {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/product/15007028-137a-11f0-ac15-001100000008",
      "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type" : "product",
      "mediaType" : "application/json",
      "uuidHref" : "https://api.moysklad.ru/app/#good/edit?id=14ff096e-137a-11f0-ac15-001100000006"
    }
  }
}
```

### Массовое создание и обновление Модификаций 
[Массовое создание и обновление](#/general#3-sozdanie-i-obnovlenie-neskolkih-obuektov) Модификаций.
В теле запроса нужно передать массив, содержащий JSON представления Модификаций, которые вы хотите создать или обновить.
Обновляемые Модификации должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Модификаций

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/variant"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "(оверспелый, желтый)",
              "characteristics": [
                {
                  "id": "627610e3-2cb1-11e6-8a84-bae500000054",
                  "value": "оверспелый"
                },
                {
                  "id": "627617d8-2cb1-11e6-8a84-bae500000055",
                  "value": "черный"
                }
              ],
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
              "buyPrice": {
                "value": 20.0
              },
              "salePrices": [
                {
                  "value": 900.0,
                  "priceType": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
                      "type": "pricetype",
                      "mediaType": "application/json"
                    }
                  }
                },
                {
                  "value": 102,
                  "priceType": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
                      "type": "pricetype",
                      "mediaType": "application/json"
                    }
                  }
                },
                {
                  "value": 200,
                  "priceType": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f4444",
                      "type": "pricetype",
                      "mediaType": "application/json"
                    }
                  }
                }
              ],
              "barcodes": [
                {
                  "ean8": "20000000"
                },
                {
                  "ean13": "2000000000000"
                },
                {
                  "code128": "code128 barcode"
                },
                {
                  "gtin": "00000000000130"
                }
              ],
              "product": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/86951fbe-2cb0-11e6-8a84-bae500000043",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              }
            },
            {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/b2347044-181d-11e6-9464-e4de00000015",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                "type": "variant",
                "mediaType": "application/json"
              },
              "characteristics": [
                {
                  "id": "07e9aa56-137b-11e6-9464-e4de000000e7",
                  "value": "Средний"
                },
                {
                  "id": "07e9b661-137b-11e6-9464-e4de000000e8",
                  "value": "Оранжевый"
                },
                {
                  "id": "60907bc8-137b-11e6-9464-e4de00000155",
                  "value": "Свежий"
                }
              ],
              "code": "orangeCode",
              "externalCode": "orange303",
              "buyPrice": {
                "value": 700.0
              },
              "salePrices": [
                {
                  "value": 1100.0,
                  "priceType": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
                      "type": "pricetype",
                      "mediaType": "application/json"
                    }
                  }
                },
                {
                  "value": 702,
                  "priceType": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
                      "type": "pricetype",
                      "mediaType": "application/json"
                    }
                  }
                },
                {
                  "value": 200,
                  "priceType": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f4444",
                      "type": "pricetype",
                      "mediaType": "application/json"
                    }
                  }
                }
              ],
              "barcodes": [
                {
                  "ean8": "20000000"
                },
                {
                  "ean13": "2000000000000"
                },
                {
                  "code128": "code128 barcode"
                },
                {
                  "gtin": "00000000000130"
                }
              ],
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
              }
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Модификаций.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/14553caa-2cb2-11e6-8a84-bae500000026",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
      "type": "variant",
      "mediaType": "application/json"
    },
    "id": "14553caa-2cb2-11e6-8a84-bae500000026",
    "accountId": "da7d9bbe-2c97-11e6-8a84-bae500000001",
    "updated": "2016-06-07 16:16:43",
    "name": "Банан (оверспелый, черный)",
    "code": "00011",
    "externalCode": "tQcC7LdEjTZMh85Em6FTW1",
    "archived": false,
    "discountProhibited": false,
    "characteristics": [
      {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/627610e3-2cb1-11e6-8a84-bae500000054",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "627610e3-2cb1-11e6-8a84-bae500000054",
        "name": "Спелость",
        "value": "оверспелый"
      },
      {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/627617d8-2cb1-11e6-8a84-bae500000055",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "627617d8-2cb1-11e6-8a84-bae500000055",
        "name": "Цвет",
        "value": "черный"
      }
    ],
    "images": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/14553caa-2cb2-11e6-8a84-bae500000026/images",
        "type": "image",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }                                
    },    
    "minprice": {
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
    "buyPrice": {
      "value": 20.0
    },
    "salePrices": [
      {
        "value": 900.0,
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
      },
      {
        "value": 102,
        "priceType": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
            "type": "pricetype",
            "mediaType": "application/json"
          },
          "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
          "name": "Цена для друзей",
          "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
        }
      },
      {
        "value": 200,
        "priceType": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f4444",
            "type": "pricetype",
            "mediaType": "application/json"
          },
          "id": "672559f1-cbf3-11e1-9eb9-889ffa6f4444",
          "name": "Цена для конкурентов",
          "externalCode": "cbcf493b-55bc-11d9-848a-00112f434444"
        }
      }
    ],
    "barcodes": [
      {
        "ean8": "20000000"
      },
      {
        "ean13": "2000000000000"
      },
      {
        "code128": "code128 barcode"
      },
      {
        "gtin": "00000000000130"
      }
    ],
    "product": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/86951fbe-2cb0-11e6-8a84-bae500000043",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    }
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/b2347044-181d-11e6-9464-e4de00000015",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
      "type": "variant",
      "mediaType": "application/json"
    },
    "id": "b2347044-181d-11e6-9464-e4de00000015",
    "accountId": "305f25aa-137a-11e6-9464-e4de00000001",
    "updated": "2016-05-12 11:56:15",
    "name": "Апельсины (Средний, Оранжевый, Свежий)",
    "code": "orangeCode",
    "externalCode": "orange303",
    "archived": false,
    "discountProhibited": false,
    "characteristics": [
      {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/627610e3-2cb1-11e6-8a84-bae500000054",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "07e9aa56-137b-11e6-9464-e4de000000e7",
        "name": "Размер",
        "value": "Средний"
      },
      {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/627610e3-2cb1-11e6-8a84-bae500000054",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "07e9b661-137b-11e6-9464-e4de000000e8",
        "name": "Цвет",
        "value": "Оранжевый"
      },
      {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/627610e3-2cb1-11e6-8a84-bae500000054",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "60907bc8-137b-11e6-9464-e4de00000155",
        "name": "Свежесть",
        "value": "Свежий"
      }
    ],
    "images": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/b2347044-181d-11e6-9464-e4de00000015/images",
        "type": "image",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }                                
    },    
    "minprice": {
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
    "buyPrice": {
      "value": 700.0
    },
    "salePrices": [
      {
        "value": 1100.0,
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
      },
      {
        "value": 702,
        "priceType": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
            "type": "pricetype",
            "mediaType": "application/json"
          },
          "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
          "name": "Цена для друзей",
          "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
        }
      },
      {
        "value": 200,
        "priceType": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f4444",
            "type": "pricetype",
            "mediaType": "application/json"
          },
          "id": "672559f1-cbf3-11e1-9eb9-889ffa6f4444",
          "name": "Цена для конкурентов",
          "externalCode": "cbcf493b-55bc-11d9-848a-00112f434444"
        }
      }
    ],
    "barcodes": [
      {
        "ean8": "20000000"
      },
      {
        "ean13": "2000000000000"
      },
      {
        "code128": "code128 barcode"
      },
      {
        "gtin": "00000000000130"
      }
    ],
    "product": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/07ed3a66-137b-11e6-9464-e4de000000eb",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    }
  }
]
```

### Удалить Модификацию

**Параметры**

| Параметр | Описание                                                                            |
| :------- | :---------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id модификации. |

> Запрос на удаление Модификации с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/variant/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление Модификации.

### Массовое удаление Модификаций

В теле запроса нужно передать массив, содержащий JSON метаданных Модификаций, которые вы хотите удалить.


> Запрос на массовое удаление Модификаций. 

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/variant/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
            "type": "variant",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
            "type": "variant",
            "mediaType": "application/json"
          }
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Модификаций.

```json
[
  {
    "info":"Сущность 'variant' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'variant' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
```

### Запросы - Метаданные Модификаций
Запрос на получение метаданных Модификаций. Результат - объект JSON, включающий в себя:

| Название            | Тип                                                       | Описание                                                                         |
| ------------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------- |
| **meta**            | [Meta](#/general#3-metadannye) | Метаданные<br>`+Обязательное при ответе`                                         |
| **characteristics** | Array(Object)                                             | Коллекция всех созданных характеристик Модификаций<br>`+Обязательное при ответе` |

> Получить метаданные модификаций

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление метаданных модификации.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
    "mediaType": "application/json"
  },
  "characteristics": [
    {
      "id": "fd68704f-f67d-11e5-8a84-bae50000006b",
      "name": "feature",
      "type": "string",
      "required": false
    },
    {
      "id": "66bcdde0-f7d2-11e5-8a84-bae500000072",
      "name": "Вес",
      "type": "string",
      "required": false
    },
    {
      "id": "66be57d2-f7d2-11e5-8a84-bae500000073",
      "name": "Размер",
      "type": "string",
      "required": false
    },
    {
      "id": "daec003b-fa34-11e5-9464-e4de0000006c",
      "name": "Мода",
      "type": "string",
      "required": false
    }
  ]
}
```



### Запросы - Модификация 
Работа с Модификацией с указанным id.

**Параметры**

| Параметр | Описание                                                                            |
| :------- | :---------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id модификации. |

### Получить Модификацию
 
> Запрос на получение представления Модификации с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/variant/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
  Успешный запрос. Результат - JSON представление Модификации.
  
```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
    "type": "variant",
    "mediaType": "application/json"
  },
  "id": "7a81082f-3c64-11e6-8a84-bae50000000e",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-06-27 15:41:33",
  "name": "фацфацфвф (обхец)",
  "code": "00003",
  "externalCode": "YQ3kNHfDgtHOVhf20Md7Q0",
  "archived": false,
  "discountProhibited": false,
  "characteristics": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/7a6078e4-3c64-11e6-8a84-bae500000003",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "7a6078e4-3c64-11e6-8a84-bae500000003",
      "name": "Цвет",
      "value": "обхец"
    }
  ],
  "images": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a81082f-3c64-11e6-8a84-bae50000000e/images",
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
    },
    {
      "value": 0,
      "priceType": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
        "name": "Цена для друзей",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
      }
    },
    {
      "value": 0,
      "priceType": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f4444",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f4444",
        "name": "Цена для конкурентов",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f434444"
      }
    }
  ],
  "barcodes": [
    {
      "ean8": "20000000"
    },
    {
      "ean13": "2000000000000"
    },
    {
      "code128": "code128 barcode"
    },
    {
      "gtin": "00000000000130"
    }
  ],
  "product": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/7a6f697f-3c64-11e6-8a84-bae500000006",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json"
    }
  }
}
```

### Изменить Модификацию 
Запрос на обновление Модификации с указанным id.
Типы цен в ценах продаж обновляются как элементы вложенных коллекций:

+ Если в текущем объекте у какого-то из типов цен нет значения,
а в переданной коллекции оно есть - значение записывается в тип цены.
+ Если же у данного атрибута значение уже присутствует - оно перезаписывается на переданное.
+ Если у данного атрибута в составе объекта значение присутствует, однако оно отсутствует
в передаваемой в теле запроса коллекции (не передается совсем), то значение атрибута объекта не изменяется.

При обновлении характеристик Модификации поле **characteristics** указывается как
массив объектов со следующей структурой:

| Название  | Тип         | Описание                                                                         |
| --------- | :---------- | :------------------------------------------------------------------------------- |
| **id**    | UUID        | ID характеристики                                                                |
| **name**  | String(255) | Наименование характеристики                                                      |
| **value** | String(255) | Значение характеристики<br>`+Обязательное при ответе` `+Необходимо при создании` |

Если поле **id** не указано у какого-либо объекта характеристики, производится поиск соответствующей этому объекту
характеристики по полю **name**. Если же не указаны ни **id**, ни **name**, то произойдет ошибка.
При обновлении поле **characteristics** в теле запроса обрабатывается как "все характеристики модификации",
т.е. полностью заменяет предыдущий массив характеристик. Если какая-то из характеристик, имевшая значение в обновляемом
объекте, не указана в запросе на обновление, после запроса ее значение будет аннулированно.

**Параметры**

| Параметр | Описание                                                                            |
| :------- | :---------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id модификации. |

> Пример запроса на обновление Модификации.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/variant/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "characteristics": [
              {
                "id": "07e9aa56-137b-11e6-9464-e4de000000e7",
                "value": "Средний"
              },
              {
                "id": "07e9b661-137b-11e6-9464-e4de000000e8",
                "value": "Оранжевый"
              },
              {
                "id": "60907bc8-137b-11e6-9464-e4de00000155",
                "value": "Свежий"
              }
            ],
            "discountProhibited": false,
            "code": "orangeCode",
            "externalCode": "orange303",
            "buyPrice": {
              "value": 700.0
            },
            "salePrices": [
              {
                "value": 1100.0,
                "priceType": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
                    "type": "pricetype",
                    "mediaType": "application/json"
                  }
                }
              },
              {
                "value": 702,
                "priceType": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
                    "type": "pricetype",
                    "mediaType": "application/json"
                  }
                }
              },
              {
                "value": 200,
                "priceType": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f4444",
                    "type": "pricetype",
                    "mediaType": "application/json"
                  }
                }
              }
            ],
            "barcodes": [
              {
                "ean8": "20000000"
              },
              {
                "ean13": "2000000000000"
              },
              {
                "code128": "code128 barcode"
              },
              {
                "gtin": "00000000000130"
              }
            ],
            "images": [
              {
                "filename":"birdimageNew.png",
                "content":"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAAEHRFWHRTb2Z0d2FyZQBTaHV0dGVyY4LQCQAAAAxJREFUCNdj+PePAQAE+gH90KA5ZAAAAABJRU5ErkJggg=="
              }
             ],
            "minprice": {
             "value": 500.0,
              "currency": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/10772c12-36e7-11e7-8a7f-40d000000097",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                  "type": "currency",
                  "mediaType": "application/json"
                }
              }
            }
          }'  
```

>  Response 200 (application/json)
Успешный запрос. Результат - JSON представление Модификации.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/b2347044-181d-11e6-9464-e4de00000015",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
    "type": "variant",
    "mediaType": "application/json"
  },
  "id": "b2347044-181d-11e6-9464-e4de00000015",
  "accountId": "305f25aa-137a-11e6-9464-e4de00000001",
  "updated": "2016-05-12 11:56:15",
  "name": "Апельсины (Средний, Оранжевый, Свежий)",
  "code": "orangeCode",
  "externalCode": "orange303",
  "archived": false,
  "discountProhibited": false,
  "characteristics": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/627610e3-2cb1-11e6-8a84-bae500000054",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "07e9aa56-137b-11e6-9464-e4de000000e7",
      "name": "Размер",
      "value": "Средний"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/627610e3-2cb1-11e6-8a84-bae500000054",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "07e9b661-137b-11e6-9464-e4de000000e8",
      "name": "Цвет",
      "value": "Оранжевый"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/627610e3-2cb1-11e6-8a84-bae500000054",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "60907bc8-137b-11e6-9464-e4de00000155",
      "name": "Свежесть",
      "value": "Свежий"
    }
  ],
  "images": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/b2347044-181d-11e6-9464-e4de00000015/images",
      "type": "image",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }                                
  },  
  "minprice": {
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
  "buyPrice": {
    "value": 700.0
  },
  "salePrices": [
    {
      "value": 1100.0,
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
    },
    {
      "value": 702,
      "priceType": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f2222",
        "name": "Цена для друзей",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f432222"
      }
    },
    {
      "value": 200,
      "priceType": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f4444",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f4444",
        "name": "Цена для конкурентов",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f434444"
      }
    }
  ],
  "barcodes": [
    {
      "ean8": "20000000"
    },
    {
      "ean13": "2000000000000"
    },
    {
      "code128": "code128 barcode"
    },
    {
      "gtin": "00000000000130"
    }
  ],
  "product": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/07ed3a66-137b-11e6-9464-e4de000000eb",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json"
    }
  }
}
```

> Пример запроса на обновление Модификации с переопределением Неснижаемого остатка.

  ```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a80d64e-1394-11f0-ac15-001100000028"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "minimumStock": {
              "type": "ALL_WAREHOUSE_SUM",
              "inherited" : false,
              "quantity": 1.0
            }
          }'  
  ```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Модификации с переопределенным Неснижаемым остатком.

  ```json
{
  "meta" : {
    "href" : "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a80d64e-1394-11f0-ac15-001100000028",
    "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
    "type" : "variant",
    "mediaType" : "application/json",
    "uuidHref" : "https://api.moysklad.ru/app/#feature/edit?id=7a80c220-1394-11f0-ac15-001100000026"
  },
  "id" : "7a80d64e-1394-11f0-ac15-001100000028",
  "accountId" : "762af84a-0ec6-11f0-ac15-001000000001",
  "updated" : "2025-04-07 12:41:53.560",
  "name" : "Potato (yellow)",
  "code" : "00002",
  "externalCode" : "Mk0FH0vcg-B9rndAHA1vW1",
  "archived" : false,
  "characteristics" : [ {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/7a797ba3-1394-11f0-ac15-001100000025",
      "type" : "attributemetadata",
      "mediaType" : "application/json"
    },
    "id" : "7a797ba3-1394-11f0-ac15-001100000025",
    "name" : "Colour",
    "value" : "yellow"
  } ],
  "images" : {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/variant/7a80d64e-1394-11f0-ac15-001100000028/images",
      "type" : "image",
      "mediaType" : "application/json",
      "size" : 0,
      "limit" : 1000,
      "offset" : 0
    }
  },
  "salePrices" : [ {
    "value" : 0.0,
    "currency" : {
      "meta" : {
        "href" : "https://api.moysklad.ru/api/remap/1.2/entity/currency/77a29ae9-0ec6-11f0-ac15-0012000000a4",
        "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type" : "currency",
        "mediaType" : "application/json",
        "uuidHref" : "https://api.moysklad.ru/app/#currency/edit?id=77a29ae9-0ec6-11f0-ac15-0012000000a4"
      }
    },
    "priceType" : {
      "meta" : {
        "href" : "https://api.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/77f67b4c-0ec6-11f0-ac15-0012000000a5",
        "type" : "pricetype",
        "mediaType" : "application/json"
      },
      "id" : "77f67b4c-0ec6-11f0-ac15-0012000000a5",
      "name" : "Цена продажи",
      "externalCode" : "cbcf493b-55bc-11d9-848a-00112f43529a"
    }
  } ],
  "barcodes" : [ {
    "ean13" : "2000000000084"
  } ],
  "discountProhibited" : false,
  "minimumStock" : {
    "type" : "ALL_WAREHOUSE_SUM",
    "inherited" : false,
    "quantity" : 1.0
  },
  "product" : {
    "meta" : {
      "href" : "https://api.moysklad.ru/api/remap/1.2/entity/product/15007028-137a-11f0-ac15-001100000008",
      "metadataHref" : "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type" : "product",
      "mediaType" : "application/json",
      "uuidHref" : "https://api.moysklad.ru/app/#good/edit?id=14ff096e-137a-11f0-ac15-001100000006"
    }
  }
}
```

> Запрос на массовое удаление Неснижаемых остатков по складам в Модификации.

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/variant/3e1c03bb-684f-11ee-ac12-000c000000b0/storebalances/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/3e1c03bb-684f-11ee-ac12-000c000000b0/storebalances/7fce2da5-684d-11ee-ac12-000c000000a2",
            "type": "minimumstock",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/3e1c03bb-684f-11ee-ac12-000c000000b0/storebalances/7fce37a5-684d-11ee-ac12-000c000000a3",
            "type": "minimumstock",
            "mediaType": "application/json"
          }
        }
      ]'  
```

> Response 200 (application/json)
Успешное удаление Неснижаемых остатков по складам в Модификации. 
