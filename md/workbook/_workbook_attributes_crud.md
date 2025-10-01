## Работа с дополнительными полями через JSON API

Для задания дополнительных свойств объекта в сервисе МойСклад есть возможность работы с дополнительными полями (атрибутами). 
Они представляют собой свойства сущности (объекта или документа), которые формируются пользователем и могут быть использованы для более 
подробного описания объекта или фильтрации по значениям этих полей. Подробнее о типах и свойствах дополнительных полей можно прочитать 
в [документации](#/general#3-rabota-s-dopolnitelnymi-polyami).

В данной статье рассмотрим на примере магазина ноутбуков просмотр, создание, редактирование и удаление дополнительных полей средствами JSON API.

Значения дополнительных полей можно менять, обращаясь к конкретному объекту (документу). Это подробно описано в 
статье [Дополнительные поля](#/general#3-rabota-s-dopolnitelnymi-polyami). 

Предположим, что нам необходимо выбирать и сортировать ноутбуки по некоторым характеристикам, которых нет в свойствах товара по умолчанию. 
Например, материал корпуса, наличие CD/DVD-Rom, наличие разъема Type-C и т.д. Нужна возможность создавать, редактировать и удалять свойства товаров. 
Присваивать конкретным товарам значения этих свойств, а также осуществлять фильтрацию по ним. Фильтрация по значениям дополнительных полей в 
JSON API описана в статье [Дополнительные поля](#/general#4-filtraciya-po-dopolnitelnym-polyam).
Для создания указанных характеристик будем использовать дополнительные поля (атрибуты) товара.

В web-приложении атрибуты объектов назначаются на странице списка объектов при нажатии на кнопку с шестеренкой справа. 
Открывается окно редактирования свойств объектов, где последним пунктом идет "Дополнительные поля". Здесь доступен просмотр, создание, 
редактирование и удаление атрибутов объекта. Весь этот функционал доступен и через JSON API. 

Процесс создания атрибута товара через UI
![Settings UI](./images/attributes/Screenshot_1.jpg?raw=true)

![Creating attribute](./images/attributes/Screenshot_2.jpg?raw=true)

![Created attribute](./images/attributes/Screenshot_3.jpg?raw=true)

![UI filter](./images/attributes/Screenshot_7.jpg?raw=true)

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
* *required* - флаг обязательности атрибута, если равен true - значение атрибута должно быть заполнено при создании или изменении сущности (По умолчанию false. Для атрибутов типа Флажок не может быть изменен),
* *authorApplication* - [метаданные](#/general#3-metadannye) Решения, создавшего дополнительное поле.

Создание двух дополнительных полей с одинаковыми именами запрещено.

> Запрос

```shell
curl -X POST 
  -u login:password 
  -H "Accept-Encoding: gzip" 
  -H 'Accept: application/json' 
  -H 'Content-Type: application/json' 
  "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes" 
  -d '{
    "name": "Материал корпуса",
    "type": "string"
    }'
```

> Результат:

```json
{
    "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/acd884ce-b44f-11e9-7ae5-884b00009002",
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

Описание атрибутов типа Справочник в [документации](#/general#3-rabota-s-dopolnitelnymi-polyami) 

Предположим, что в нашем магазине есть также чехлы для ноутбуков. Создадим атрибут Справочник типа Товар. Теперь Появилась возможность для 
каждого ноутбука указать подходящий ему чехол как одно из свойств ноутбука.

Для создания атрибута Справочник типа товар нужно указать в поле "type" значение "product". В поле "name" укажем "Чехол".

> Запрос

```shell
curl -X POST 
  -u login:password 
  -H "Accept-Encoding: gzip" 
  -H 'Accept: application/json' 
  -H 'Content-Type: application/json' 
  "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes" 
  -d '{
    "name": "Чехол",
    "type": "product"
    }'
```

> Результат:

```json
{
    "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/cc8ff599-c5c0-11e9-0a80-06b000000000",
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
  -H "Accept-Encoding: gzip" 
  -H 'Accept: application/json' 
  -H 'Content-Type: application/json' 
  "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes" 
  -d '[
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/acd884ce-b44f-11e9-7ae5-884b00009002",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/acd884ce-b44f-11e9-7ae5-884b00009002",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/33b2fe47-b465-11e9-7ae5-884b0001562f",
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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/33b30b2e-b465-11e9-7ae5-884b00015630",
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
    -H "Accept-Encoding: gzip" 
    -H "Lognex-Pretty-Print-JSON: true" 
    "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes"
```

> В ответ получим список созданных атрибутов


```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes",
    "type": "attributemetadata",
    "mediaType": "application/json",
    "size": 3,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/acd884ce-b44f-11e9-7ae5-884b00009002",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/33b2fe47-b465-11e9-7ae5-884b0001562f",
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
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/33b30b2e-b465-11e9-7ae5-884b00015630",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "33b30b2e-b465-11e9-7ae5-884b00015630",
      "name": "Наличие type-C разъема",
      "type": "boolean",
      "required": false
    }
  ]
}
```

Если указать в запросе id конкретного атрибута, то получим только его.

> Запрос

```shell
curl 
    -X GET 
    -u login:password
    -H "Accept-Encoding: gzip" 
    -H "Lognex-Pretty-Print-JSON: true" 
    "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/acd884ce-b44f-11e9-7ae5-884b00009002"
```

> Результат

```json
      {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/acd884ce-b44f-11e9-7ae5-884b00009002",
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
  -H "Accept-Encoding: gzip" 
  -H 'Accept: application/json' 
  -H 'Content-Type: application/json' 
  "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/33b2fe47-b465-11e9-7ae5-884b0001562f" 
  -d '{
        "name":"Наличие CD/DVD-Rom"
      }'
```

> Результат:

```json
{
    "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/33b2fe47-b465-11e9-7ae5-884b0001562f",
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
  -H "Accept-Encoding: gzip" 
  -H 'Accept: application/json' 
  -H 'Content-Type: application/json' 
  "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/33b2fe47-b465-11e9-7ae5-884b0001562f" 
```

Получим пустой ответ со статусом 200. Атрибут с указанным id будет удален.

### Массовое удаление дополнительных полей через JSON API
Для удаления сразу нескольких атрибутов нужно выполнить следующий POST-запрос, указав в теле meta-данные удаляемых полей:

> Запрос

```shell
curl -X POST 
  -u login:password 
  -H "Accept-Encoding: gzip" 
  -H 'Accept: application/json' 
  -H 'Content-Type: application/json' 
  "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/delete" 
  -d '[
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/acd884ce-b44f-11e9-7ae5-884b00009002",
            "type": "attributemetadata",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/33b30b2e-b465-11e9-7ae5-884b00015630",
            "type": "attributemetadata",
            "mediaType": "application/json"
          }
        }
      ]'
``` 

Также получим пустой ответ со статусом 200. В результате удалены указанные атрибуты. Если в теле такого запроса указать meta несуществующего атрибута, то весь запрос не выполнится, даже если в нем присутствуют существующие meta.


### Список сущностей
Список сущностей, для которых есть возможность создать доп. поля, вы можете посмотреть в [документации](#/general#3-rabota-s-dopolnitelnymi-polyami)

### Работа с дополнительными полями в JSON API
В рамках JSON API можно создавать дополнительные поля и редактировать существующие. Подробно это описано в статье [Работа с дополнительными полями через API.](#/workbook/workbook-attributes-crud#2-rabota-s-dopolnitelnymi-polyami-cherez-json-api)

### Получение дополнительных полей
Доп. поля располагаются в метаданных необходимой сущности.
Пример получения дополнительных полей товара:

> Запрос

```shell
curl 
    -X GET 
    -u login:password
    -H "Accept-Encoding: gzip" 
    -H "Lognex-Pretty-Print-JSON: true" 
    "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes"
```

> Результат:

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes",
    "type": "attributemetadata",
    "mediaType": "application/json",
    "size": 3,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/839ca663-75f7-11e8-9107-5048001126a2",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "839ca663-75f7-11e8-9107-5048001126a2",
      "name": "Время работы от аккумулятора",
      "type": "double",
      "required": false
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/7385ab6e-ad06-11e8-9ff4-34e80004fb35",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "7385ab6e-ad06-11e8-9ff4-34e80004fb35",
      "name": "Ссылка на интернет-магазин",
      "type": "link",
      "required": false
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/52ae09f9-8fe7-11ed-0a80-07ae000000ef",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "52ae09f9-8fe7-11ed-0a80-07ae000000ef",
      "name": "Подсветка клавиатуры",
      "type": "boolean",
      "required": false
    }
  ]
}
```

### Задание значений дополнительных полей через JSON API
Задать значение дополнительному полю можно как при создании объекта, так и при его обновлении.

Полученные в предыдущем примере идентификаторы дополнительных полей товаров можно использовать при создании новых товаров.
Дополнительное поле "Подсветка клавиатуры" не является обязательным (**required=false**) и не передается в примере ниже.

> Запрос

```shell
curl 
    -X POST 
    -u login:password
    -H "Accept-Encoding: gzip" 
    -H 'Accept: application/json' 
    -H 'Content-Type: application/json' 
    "https://api.moysklad.ru/api/remap/1.2/entity/product" 
    -d '{
        "name": "Ноутбук",
        "vat": 18,
        "effectiveVat": 18,
        "uom": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/uom/19f1edc0-fc42-4001-94cb-c9ec9c62ec10",
            "type": "uom"
          }
        },
        "minPrice": 50000.0,
        "buyPrice": {
          "value": 50000.0,
          "currency": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
              "type": "currency"
            }
          }
        },
        "salePrices": [
          {
            "value": 100000.0,
            "currency": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
                "type": "currency"
              }
            },
            "priceType": "Цена продажи"
          }
        ],
        "attributes": [
            {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/839ca663-75f7-11e8-9107-5048001126a2",
                "type": "attributemetadata"
              },
              "value": 9.6
            },
            {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/7385ab6e-ad06-11e8-9ff4-34e80004fb35",
                "type": "attributemetadata"
              },
              "id": "7385ab6e-ad06-11e8-9ff4-34e80004fb35",
              "name": "Ссылка на интернет-магазин",
              "value": "https://example.com"
            }
        ]
    }'
```

Для нового товара "Ноутбук" мы указали значения двух дополнительных полей -
`Время работы от аккумулятора` и `Ссылка на интернет-магазин`.

При обновлении товара мы можем как обновить уже имеющиеся значения дополнительных полей, так и задать новые.

> Запрос

```shell
curl 
    -X PUT 
    -u login:password
    -H "Accept-Encoding: gzip" 
    -H 'Accept: application/json' 
    -H 'Content-Type: application/json' 
    "https://api.moysklad.ru/api/remap/1.2/entity/product/630c578a-cb05-11e8-9109-f8fc0037889a" 
    -d '{
  "name": "Ноутбук обновленный",
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/839ca663-75f7-11e8-9107-5048001126a2",
        "type": "attributemetadata"
      },
      "value": 10.6
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/52ae09f9-8fe7-11ed-0a80-07ae000000ef",
        "type": "attributemetadata"
      },
      "value": "true"
    }
  ]
}'
```
В примере мы обновили значение поля `Время работы от аккумулятора`, проставленное при создании товара, а также задали значение полю `Подсветка клавиатуры` - при создании мы оставили его пустым.

Также для необязательных полей есть возможность обнулить значение поля. Для этого в поле **value** необходимо передать значение **null**.

Если в теле запроса на обновление/создание сущности в массиве дополнительных полей:

+ Не указаны id каких-либо дополнительных полей - дополнительные поля обновлены не будут.
+ Указаны id дополнительных полей, которым в данной сущности ещё не присвоено значение - соответствующим дополнительным полям будут присвоены переданные значения.
+ Указаны id дополнительных полей, которым в данной сущности уже присвоено значение - соответствующим дополнительным полям будут присвоены новые значения.
+ Указан несуществующий id, которого нет в метаданных сущности - возникнет ошибка.

### Возможные типы дополнительных полей
С возможными типами дополнительных полей вы можете ознакомиться в [документации](#/general#3-rabota-s-dopolnitelnymi-polyami).

### Дополнительное поле типа Файл
Для загрузки значения дополнительного поля типа файл нужно в поле **file** указать объект следующей структуры:

+ filename - Имя файла `Необходимое`
+ content - Байты файла, закодированные в base64 `Необходимое`

Для сброса значения в дополнительном поле необходимо передать поле **file** и значением **null**.
Ниже приведены примеры обновления товара с дополнительным полем типа Файл с присваиванием и сбросом значения.

> Пример присваивания значения доп. полю типа Файл

```shell
curl -X PUT 
  "https://api.moysklad.ru/api/remap/1.2/entity/product/dde7f6d3-1c09-11ef-ac12-000f00000025" 
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -d '{
    "attributes": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0ae972f0-2951-11ef-ac12-000e00000001",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "file": {
            "filename": "filename",
            "content": "5cYwMpOmNk5kSVr4YgZGKtXJb/7KpHVLDUawyZrD5Nf0WDhB7mS1I77VcAMqYQ8DkP/1wDLhb0X6b2JO4pdpKA=="
          }
        }
    ]
}'
```

> Пример сброса значения доп. поля типа Файл

```shell
curl -X PUT 
  "https://api.moysklad.ru/api/remap/1.2/entity/product/dde7f6d3-1c09-11ef-ac12-000f00000025" 
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -d '{
    "attributes": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0ae972f0-2951-11ef-ac12-000e00000001",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "file": null
        }
    ]
}'
```

### Дополнительное поле типа Справочник
Дополнительное поле типа Справочник ссылается на объект определенного справочника.
Это может быть один из встроенных справочников:
Товары, Контрагенты, Договоры, Сотрудники, Проекты, Склады.
Или справочник, созданный пользователем.

Рассмотрим пример работы с дополнительными полями типа Справочник на примере контрагентов.
В примере для них задано два дополнительных поля:
встроенный справочник Проект и пользовательский справочник Регион:

> Запрос

```shell
curl 
    -X GET 
    -u login:password
    -H "Accept-Encoding: gzip" 
    -H "Lognex-Pretty-Print-JSON: true" 
    "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata"
```

> Результат:

```json
{
    "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "mediaType": "application/json"
    },
    "attributes": [
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/attributes/cf486cca-d383-11e8-ac12-000a000000d4",
                "type": "attributemetadata",
                "mediaType": "application/json"
            },
            "id": "cf486cca-d383-11e8-ac12-000a000000d4",
            "name": "[Проект]",
            "type": "project",
            "required": false
        },
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/attributes/cf489b7c-d383-11e8-ac12-000a000000d5",
                "type": "attributemetadata",
                "mediaType": "application/json"
            },
            "customEntityMeta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/companysettings/metadata/customEntities/ac120c44-d383-11e8-ac12-000a000000c4",
                "type": "customentitymetadata",
                "mediaType": "application/json"
            },
            "id": "cf489b7c-d383-11e8-ac12-000a000000d5",
            "name": "Регион",
            "type": "customentity",
            "required": false
        }
    ],
    "states": [
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/5b77c63b-d047-11e8-ac12-000b0000006b",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "state",
                "mediaType": "application/json"
            },
            "id": "5b77c63b-d047-11e8-ac12-000b0000006b",
            "accountId": "5a0480c9-d047-11e8-ac12-000900000000",
            "name": "Новый",
            "color": 15106326,
            "stateType": "Regular",
            "entityType": "counterparty"
        },
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/5b77ddd8-d047-11e8-ac12-000b0000006c",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "state",
                "mediaType": "application/json"
            },
            "id": "5b77ddd8-d047-11e8-ac12-000b0000006c",
            "accountId": "5a0480c9-d047-11e8-ac12-000900000000",
            "name": "Выслано предложение",
            "color": 10774205,
            "stateType": "Regular",
            "entityType": "counterparty"
        },
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/5b77eb48-d047-11e8-ac12-000b0000006d",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "state",
                "mediaType": "application/json"
            },
            "id": "5b77eb48-d047-11e8-ac12-000b0000006d",
            "accountId": "5a0480c9-d047-11e8-ac12-000900000000",
            "name": "Переговоры",
            "color": 40931,
            "stateType": "Regular",
            "entityType": "counterparty"
        },
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/5b77f0c9-d047-11e8-ac12-000b0000006e",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "state",
                "mediaType": "application/json"
            },
            "id": "5b77f0c9-d047-11e8-ac12-000b0000006e",
            "accountId": "5a0480c9-d047-11e8-ac12-000900000000",
            "name": "Сделка заключена",
            "color": 8825440,
            "stateType": "Successful",
            "entityType": "counterparty"
        },
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/5b77f469-d047-11e8-ac12-000b0000006f",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "state",
                "mediaType": "application/json"
            },
            "id": "5b77f469-d047-11e8-ac12-000b0000006f",
            "accountId": "5a0480c9-d047-11e8-ac12-000900000000",
            "name": "Сделка не заключена",
            "color": 15280409,
            "stateType": "Unsuccessful",
            "entityType": "counterparty"
        }
    ],
    "createShared": false
}
```

Чтобы задать значение дополнительного поля типа Справочник
в поле **value** нужно передать объект, содержащий поле **meta**
с метаданными объекта, который будет значением дополнительного поля.
Создадим контрагента с этими дополнительными полями:

> Запрос

```shell
curl 
    -X POST 
    -u login:password
    -H "Accept-Encoding: gzip" 
    -H 'Accept: application/json' 
    -H 'Content-Type: application/json' 
    "https://api.moysklad.ru/api/remap/1.2/entity/counterparty" 
    -d '{
    "name": "ООО Восток",
    "attributes": [
        {
            "id": "cf486cca-d383-11e8-ac12-000a000000d4",
            "name": "[Проект]",
            "type": "project",
            "value": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/c5ed49c2-d384-11e8-ac12-000a000000d8",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
                    "type": "project",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#project/edit?id=c5ed49c2-d384-11e8-ac12-000a000000d8"
                }
            }
        },
        {
            "id": "cf489b7c-d383-11e8-ac12-000a000000d5",
            "name": "Регион",
            "type": "customentity",
            "value": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customentity/ac120c44-d383-11e8-ac12-000a000000c4/b971966b-d383-11e8-ac12-000a000000ce",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/companysettings/metadata/customEntities/ac120c44-d383-11e8-ac12-000a000000c4",
                    "type": "customentity",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#custom_ac120c44-d383-11e8-ac12-000a000000c4/edit?id=b971966b-d383-11e8-ac12-000a000000ce"
                    }
                }
        }
    ]
}'
```

> Результат:

```json
{
    "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/5a5597e3-d385-11e8-ac12-000800000000",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=5a5597e3-d385-11e8-ac12-000800000000"
    },
    "id": "5a5597e3-d385-11e8-ac12-000800000000",
    "accountId": "5a0480c9-d047-11e8-ac12-000900000000",
    "owner": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/5a929317-d047-11e8-ac12-000b0000002e",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=5a929317-d047-11e8-ac12-000b0000002e"
        }
    },
    "shared": false,
    "group": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/5a05b13e-d047-11e8-ac12-000900000001",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
            "type": "group",
            "mediaType": "application/json"
        }
    },
    "version": 0,
    "updated": "2018-10-19 12:57:13.000",
    "name": "ООО Восток",
    "externalCode": "fN3pbKAWhwfAOiz3MFMsA0",
    "archived": false,
    "created": "2018-10-19 12:57:13.000",
    "companyType": "legal",
    "attributes": [
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/attributes/cf486cca-d383-11e8-ac12-000a000000d4",
                "type": "attributemetadata",
                "mediaType": "application/json"
            },
            "id": "cf486cca-d383-11e8-ac12-000a000000d4",
            "name": "[Проект]",
            "type": "project",
            "value": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/c5ed49c2-d384-11e8-ac12-000a000000d8",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
                    "type": "project",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#project/edit?id=c5ed49c2-d384-11e8-ac12-000a000000d8"
                },
                "name": "Проект 1"
            }
        },
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/attributes/cf489b7c-d383-11e8-ac12-000a000000d5",
                "type": "attributemetadata",
                "mediaType": "application/json"
            },
            "id": "cf489b7c-d383-11e8-ac12-000a000000d5",
            "name": "Регион",
            "type": "customentity",
            "value": {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customentity/ac120c44-d383-11e8-ac12-000a000000c4/b971966b-d383-11e8-ac12-000a000000ce",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/companysettings/metadata/customEntities/ac120c44-d383-11e8-ac12-000a000000c4",
                    "type": "customentity",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#custom_ac120c44-d383-11e8-ac12-000a000000c4/edit?id=b971966b-d383-11e8-ac12-000a000000ce"
                },
                "name": "Восточный"
            }
        }
    ],
    "accounts": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/5a5597e3-d385-11e8-ac12-000800000000/accounts",
            "type": "account",
            "mediaType": "application/json",
            "size": 0,
            "limit": 100,
            "offset": 0
        }
    },
    "tags": [],
    "contactpersons": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/5a5597e3-d385-11e8-ac12-000800000000/contactpersons",
            "type": "contactperson",
            "mediaType": "application/json",
            "size": 0,
            "limit": 100,
            "offset": 0
        }
    },
    "notes": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/5a5597e3-d385-11e8-ac12-000800000000/notes",
            "type": "note",
            "mediaType": "application/json",
            "size": 0,
            "limit": 100,
            "offset": 0
        }
    },
    "state": {
        "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/5b77c63b-d047-11e8-ac12-000b0000006b",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
            "type": "state",
            "mediaType": "application/json"
        }
    },
    "salesAmount": 0
}
```

### Фильтрация по значению дополнительного поля
JSON API позволяет осуществлять фильтрацию по значению дополнительного поля. На примере дополнительных полей, приведенных выше, можно отфильтровать все товары, у которых значение дополнительного поля `Время работы от аккумулятора` больше или равно 5:

> Запрос

```shell
curl 
    -X GET 
    -u login:password
    -H "Accept-Encoding: gzip" 
    -H 'Accept: application/json' 
    -H 'Content-Type: application/json' 
    "https://api.moysklad.ru/api/remap/1.2/entity/product?filter=https://api.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/630c578a-cb05-11e8-9109-f8fc0037889a%3E%3D5"
```

Для этого нам необходимо в параметре filter указать href дополнительного поля для фильтрации, знак сравнения (в нашем случае `>=`) и значение. В ответе вернутся все сущности, подходящие под переданный критерий.

### Сортировка по дополнительному полю
Сортировка по дополнительным полям в данный момент не поддерживается.
