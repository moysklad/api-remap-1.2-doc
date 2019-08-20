## Печать документов
Средствами JSON API можно запрашивать печать документов с помощью шаблонов печатных форм.
При запросе на формирование печатной формы сервер при готовности документа, корректной
печатной форме и правильном формате запроса отвечает пустым ответом с кодом 303.
В заголовке Location ответа содержится адрес временного расположения готовой к загрузке печатной формы.
Файл во временном расположении доступен для загрузки в течение 5 минут.

Сервер может вернуть ответ 202 и заголовок Location с адресом для опроса готовности печатной формы к загрузке.
Данный вариант будет реализован позже.

#### Печать документа 

### Запрос на печать

**Параметры**

|Параметр   |Описание   | 
|---|---|
|type|  `string` (required) *Example: demand* тип сущности, для которой запрашивается печать.|
|id |  `string` (required) *Example: a86708d2-f8d3-4e67-8f04-6101158da808* id сущности, для которой запрашивается печать.|

Запрос на печать отдельного документа по шаблону печатной формы.
#### Атрибуты запроса
+ **template** - Ссылка на шаблон для печати в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **extension** - расширение, в котором нужно напечатать форму. Можно указать `xls, pdf, html, ods`

Также можно напечатать комплект документов. Для этого вместо поля **template** нужно указать поле **templates**, которое является массивом объектов со следующими полями:

+ **template** - Ссылка на шаблон для печати в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **count** - Количество копий печатной формы. От 1 до 10.

Если в запросе будет как поле **templates** так и поле **template** (вне элемента массива **templates**), произойдет ошибка. В запросе допустимо только 1 из этих полей.
При печати комплектов <u>не нужно</u> указывать поле **extension** - все комплекты печатаются в *pdf*.

При печати комплекта, для определенных сущностей можно использовать шаблоны для печати связанных документов.
Так, например, для отгрузки (demand) можно использовать шаблоны:

+ Счет покупателю
+ Счет покупателю с печатью и подписью
+ Заказ покупателя
+ Счет-фактура выданный
+ Любой пользовательский шаблон для вышеперечисленных сущностей.

для заказа покупателя:

+ Любой стандартный (embeddedtemplate) шаблон для отгрузки.
+ Счет покупателю
+ Счет покупателю с печатью и подписью
+ Счет-фактура выданный
+ Любой пользовательский шаблон для вышеперечисленных сущностей.

для счета покупателю:

+ Любой стандартный (embeddedtemplate) шаблон для отгрузки.
+ Заказ покупателя
+ Счет-фактура выданный
+ Любой пользовательский шаблон для вышеперечисленных сущностей.

> Пример запроса на печать отдельного документа по шаблону печатной формы.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/demand/a86708d2-f8d3-4e67-8f04-6101158da808/export/"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "template": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata/customtemplate/daca545a-1a35-11e7-8a84-bae500000001",
                "type": "customtemplate",
                "mediaType": "application/json"
              }
            },
            "extension": "xls"
          }'  
```

> Response 202 Headers

```json
  Location: ссылка на статус печати
  Content-Type: application/json
```

> Response 303 Headers

```json
  Location: ссылка на файл
  Content-Type: application/json
```

> Пример запроса на печать комплекта документов. В результате запроса будет напечатан комплект в сумме из 6 печатных форм.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/demand/a86708d2-f8d3-4e67-8f04-6101158da808/export/"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "templates": [
              {
                "template": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata/customtemplate/daca545a-1a35-11e7-8a84-bae500000001",
                    "type": "customtemplate",
                    "mediaType": "application/json"
                  }
                },
                "count": 2
              },
              {
                "template": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/factureout/metadata/embeddedtemplate/3d2685b4-cf64-4fd1-87c8-e109966b364b",
                    "type": "embeddedtemplate",
                    "mediaType": "application/json"
                  }
                },
                "count": 3
              },
              {
                "template": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata/embeddedtemplate/6f3c9a47-6772-4944-9723-92d0d7be2a9c",
                    "type": "embeddedtemplate",
                    "mediaType": "application/json"
                  }
                },
                "count": 1
              }
            ]
          }'  
```

> Response 202 Headers

```json
Location: ссылка на статус печати
Content-Type: application/json
```

> Response 303 Headers

```json
Location: ссылка на файл
Content-Type: application/json
```

