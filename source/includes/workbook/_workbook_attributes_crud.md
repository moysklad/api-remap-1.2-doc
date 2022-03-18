## Работа с дополнительными полями через JSON API

Для задания дополнительных свойств объекта в сервисе МойСклад есть возможность работы с дополнительными полями (атрибутами). 
Они представляют собой свойства сущности (объекта или документа), которые формируются пользователем и могут быть использованы для более 
подробного описания объекта или фильтрации по значениям этих полей. Подробнее о типах и свойствах дополнительных полей можно прочитать 
в [документации](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

В данной статье рассмотрим на примере магазина ноутбуков просмотр, создание, редактирование и удаление дополнительных полей средствами JSON API.

Значения дополнительных полей можно менять, обращаясь к конкретному объекту (документу). Это подробно описано в 
статье [Дополнительные поля](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi). 

Предположим, что нам необходимо выбирать и сортировать ноутбуки по некоторым характеристикам, которых нет в свойствах товара по умолчанию. 
Например, материал корпуса, наличие CD/DVD-Rom, наличие разъема Type-C и т.д. Нужна возможность создавать, редактировать и удалять свойства товаров. 
Присваивать конкретным товарам значения этих свойств, а также осуществлять фильтрацию по ним. Фильтрация по значениям дополнительных полей в 
JSON API описана в статье [Дополнительные поля](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-fil-traciq-po-dopolnitel-nym-polqm).
Для создания указанных характеристик будем использовать дополнительные поля (атрибуты) товара.

В web-приложении атрибуты объектов назначаются на странице списка объектов при нажатии на кнопку с шестеренкой справа. 
Открывается окно редактирования свойств объектов, где последним пунктом идет "Дополнительные поля". Здесь доступен просмотр, создание, 
редактирование и удаление атрибутов объекта. Весь этот функционал доступен и через JSON API. 

Процесс создания атрибута товара через UI
![Settings UI](../../images/attributes/Screenshot_1.jpg?raw=true)

![Creating attribute](../../images/attributes/Screenshot_2.jpg?raw=true)

![Created attribute](../../images/attributes/Screenshot_3.jpg?raw=true)

![UI filter](../../images/attributes/Screenshot_7.jpg?raw=true)

### Дополнительные поля Услуг, Модификаций и Комплектов
Дополнительные поля у Товаров, Услуг, Модификаций и Комплектов общие и располагаются в метаданных Товаров.

### Создание нового дополнительного поля через JSON API
Рассмотрим задачу добавления новых атрибутов к сущности (товару). Предположим, что хотим для имеющихся и закупаемых в будущем ноутбуков 
указывать материал корпуса. Для его указания будем пользоваться дополнительным полем типа строка. Этот пример рассмотрен в 
скриншотах web-приложения выше. Теперь попробуем сделать то же через JSON API.

Выполним POST-запрос, в теле которого укажем название и тип дополнительного поля (атрибута). Для этого достаточно в теле запроса указать 
обязательные поля "name" и "type". В данном случае добавим строковое поле, описывающее материал корпуса ноутбука.

Кроме имени и типа у создаваемого атрибута есть следующие поля:

* *meta* - набор метаданных, заполняется автоматически при создании,
* *id* - id атрибута, заполняется автоматически при создании,
* *required* - флаг обязательности атрибута, если равен true - значение атрибута должно быть заполнено при создании или изменении сущности. (По умолчанию false. Для атрибутов типа Флажок не может быть изменен)

Создание двух дополнительных полей с одинаковыми именами запрещено.

> Запрос

```shell
curl -X POST 
  -u login:password 
  -H 'Accept: application/json' 
  -H 'Content-Type: application/json' 
  "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes" 
  -d '{
    "name": "Материал корпуса",
    "type": "string"
    }'
```

> Результат:

```json
{
    "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/acd884ce-b44f-11e9-7ae5-884b00009002",
        "type": "attributemetadata",
        "mediaType": "application/json"
    },
    "id": "acd884ce-b44f-11e9-7ae5-884b00009002",
    "name": "Материал корпуса",
    "type": "string",
    "required": false
}
```

Создано дополнительное поле (атрибут), ему автоматически присвоен id. Значение свойства required по умолчанию устанавливается 
в false, что делает созданный атрибут не обязательным для заполнения при создании товара.

### Создание нового дополнительного поля типа Справочник через JSON API
Стоит обратить внимание на создание атрибута с типом Справочник. Этот тип позволяет атрибуту принимать в качестве значения другие объекты, 
в том числе и пользовательские. 

Описание атрибутов типа Справочник в [документации](../workbook/#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi) 

Предположим, что в нашем магазине есть также чехлы для ноутбуков. Создадим атрибут Справочник типа Товар. Теперь Появилась возможность для 
каждого ноутбука указать подходящий ему чехол как одно из свойств ноутбука.

Для создания атрибута Справочник типа товар нужно указать в поле "type" значение "product". В поле "name" укажем "Чехол".

> Запрос

```shell
curl -X POST 
  -u login:password 
  -H 'Accept: application/json' 
  -H 'Content-Type: application/json' 
  "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes" 
  -d '{
    "name": "Чехол",
    "type": "product"
    }'
```

> Результат:

```json
{
    "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/cc8ff599-c5c0-11e9-0a80-06b000000000",
        "type": "attributemetadata",
        "mediaType": "application/json"
    },
    "id": "cc8ff599-c5c0-11e9-0a80-06b000000000",
    "name": "Чехол",
    "type": "productfolder",
    "required": false
}
```

Создан атрибут, в значение которого для каждого товара можно записать другой товар. Теперь можно, например, предлагать сразу приобрести 
чехол для выбранного покупателем ноутбука. 

### Массовое создание(обновление) дополнительных полей через JSON API

С приходом в магазин новых моделей ноутбуков может появиться необходимость в создании новых атрибутов. Например, тип разъемов на ноутбуках 
некоторых производителей меняется с такой частотой, что предугадать заранее их тип и наличие невозможно. В таком случае может понадобиться 
добавление новых и редактирование существующих атрибутов.

В JSON API доступно массовое создание дополнительных полей. Для этого надо передать в теле POST-запроса массив со свойствами каждого из создаваемых атрибутов.
Массив должен содержать данные по каждому создаваемому полю, перечисленные через запятую и заключенные в фигурные скобки. Обязательные к передаче 
свойства - это имя и тип поля. Если добавить к ним "meta" существующего дополнительного поля, то оно будет изменено.
Сформируем тело запроса из 3 элементов. Для поля "Материал корпуса" укажем его "meta", свойство "name" изменим на "Материал корпуса (дополнение)". 
Новое значение свойства "name" не должно совпадать с существующими. Свойство "type" не может быть изменено. Два других элемента массива будут 
созданы, им автоматически присвоятся метаданные.

> Запрос

```shell
curl -X POST 
  -u login:password 
  -H 'Accept: application/json' 
  -H 'Content-Type: application/json' 
  "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes" 
  -d '[
        {
            "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/acd884ce-b44f-11e9-7ae5-884b00009002",
                "type": "attributemetadata",
                "mediaType": "application/json"
            },
            "name": "Материал корпуса (дополнение)",
            "type": "string"
        },
        {
            "name": "Наличие CD-Rom",
            "type": "boolean"
        },
        {
            "name": "Наличие type-C разъема",
            "type": "boolean"
        }
      ]'
```

> Результат:

```json
[
    {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/acd884ce-b44f-11e9-7ae5-884b00009002",
            "type": "attributemetadata",
            "mediaType": "application/json"
        },
        "id": "acd884ce-b44f-11e9-7ae5-884b00009002",
        "name": "Материал корпуса (дополнение)",
        "type": "string",
        "required": false
    },
    {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/33b2fe47-b465-11e9-7ae5-884b0001562f",
            "type": "attributemetadata",
            "mediaType": "application/json"
        },
        "id": "33b2fe47-b465-11e9-7ae5-884b0001562f",
        "name": "Наличие CD-Rom",
        "type": "boolean",
        "required": false
    },
    {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/33b30b2e-b465-11e9-7ae5-884b00015630",
            "type": "attributemetadata",
            "mediaType": "application/json"
        },
        "id": "33b30b2e-b465-11e9-7ae5-884b00015630",
        "name": "Наличие type-C разъема",
        "type": "boolean",
        "required": false
    }
]
```

После выполнения данного запроса поле "Материал корпуса" обновится на "Материал корпуса (дополнение)". Добавятся новые поля "Наличие CD-Rom" и 
"Наличие type-C разъема" с типом флажок.

### Вывод дополнительных полей через JSON API

Для отображения списка атрибутов сущности (в данном случае товара) нужно выполнить GET-запрос 

> Запрос

```shell
curl 
    -X GET 
    -u login:password 
    -H "Lognex-Pretty-Print-JSON: true" 
    "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes"
```

> В ответ получим список созданных атрибутов


```json
    "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes",
        "type": "attributemetadata",
        "mediaType": "application/json",
        "size": 3,
        "limit": 1000,
        "offset": 0
    },
    "rows": [
        {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/acd884ce-b44f-11e9-7ae5-884b00009002",
            "type": "attributemetadata",
            "mediaType": "application/json"
        },
        "id": "acd884ce-b44f-11e9-7ae5-884b00009002",
        "name": "Материал корпуса (дополнение)",
        "type": "string",
        "required": false
    	},
    	{
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/33b2fe47-b465-11e9-7ae5-884b0001562f",
            "type": "attributemetadata",
            "mediaType": "application/json"
        },
        "id": "33b2fe47-b465-11e9-7ae5-884b0001562f",
        "name": "Наличие CD-Rom",
        "type": "boolean",
        "required": false
    	},
   	 	{
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/33b30b2e-b465-11e9-7ae5-884b00015630",
            "type": "attributemetadata",
            "mediaType": "application/json"
        },
        "id": "33b30b2e-b465-11e9-7ae5-884b00015630",
        "name": "Наличие type-C разъема",
        "type": "boolean",
        "required": false
    	}
    ]

```

Если указать в запросе id конкретного атрибута, то получим только его.

> Запрос

```shell
curl 
    -X GET 
    -u login:password 
    -H "Lognex-Pretty-Print-JSON: true" 
    "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/acd884ce-b44f-11e9-7ae5-884b00009002"
```

> Результат

```json
      {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/acd884ce-b44f-11e9-7ae5-884b00009002",
            "type": "attributemetadata",
            "mediaType": "application/json"
        },
        "id": "acd884ce-b44f-11e9-7ae5-884b00009002",
        "name": "Материал корпуса (дополнение)",
        "type": "string",
        "required": false
      }
```

### Редактирование дополнительных полей через JSON API

Если нужно изменить одно дополнительное поле без затрагивания существующих, удобно пользоваться следующим запросом. Например, нужно изменить 
название атрибута, чтоб сделать его блоее полным. Изменим название атрибута "Наличие CD-Rom" на "Наличие CD/DVD-Rom".

Для изменения свойств существующего дополнительного поля необходимо выполнить PUT-запрос, содержащий его id, а в теле запроса передать изменяемые 
свойства. Следует учесть, что свойство "type" не может быть изменено. Изменим название атрибута "Наличие CD-Rom":

> Запрос

```shell
curl -X PUT 
  -u login:password 
  -H 'Accept: application/json' 
  -H 'Content-Type: application/json' 
  "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/33b2fe47-b465-11e9-7ae5-884b0001562f" 
  -d '{
        "name":"Наличие CD/DVD-Rom"
      }'
```

> Результат:

```json
{
    "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/33b2fe47-b465-11e9-7ae5-884b0001562f",
        "type": "attributemetadata",
        "mediaType": "application/json"
    },
    "id": "9e9baa04-b455-11e9-7ae5-884b0000c7d9",
    "name": "Наличие CD/DVD-Rom",
    "type": "boolean",
    "required": false
}
```
Поле "Наличие CD-Rom" изменено на "Наличие CD/DVD-Rom". Неуказанные свойства останутся без изменений.

### Удаление дополнительного поля через JSON API

Некоторые атрибуты могут стать неактуальными. Например такую полезную вещь как DVD-привод найти становится всё труднее. Такие дополнительные поля 
можно удалить, даже если они были назначены обязательными и были заполнены.
Для удаления дополнительного поля через JSON API необходимо выполнить DELETE-запрос, содержащий id поля.

> Запрос

```shell
curl -X DELETE 
  -u login:password 
  -H 'Accept: application/json' 
  -H 'Content-Type: application/json' 
  "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/33b2fe47-b465-11e9-7ae5-884b0001562f" 
```

Получим пустой ответ со статусом 200. Атрибут с указанным id будет удален.

### Массовое удаление дополнительных полей через JSON API
Для удаления сразу нескольких атрибутов нужно выполнить следующий POST-запрос, указав в теле meta-данные удаляемых полей:

> Запрос

```shell
curl -X POST 
  -u login:password 
  -H 'Accept: application/json' 
  -H 'Content-Type: application/json' 
  "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/delete" 
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/acd884ce-b44f-11e9-7ae5-884b00009002",
            "type": "attributemetadata",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/33b30b2e-b465-11e9-7ae5-884b00015630",
            "type": "attributemetadata",
            "mediaType": "application/json"
          }
        }
      ]'
``` 

Также получим пустой ответ со статусом 200. В результате удалены указанные атрибуты. Если в теле такого запроса указать meta несуществующего атрибута, то весь запрос не выполнится, даже если в нем присутствуют существующие meta.
