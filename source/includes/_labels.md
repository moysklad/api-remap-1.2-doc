## Печать этикеток и ценников
Средствами JSON API можно запрашивать печать этикеток и ценников с помощью шаблонов печатных форм.
При запросе на формирование печатной формы сервер при готовности этикеток и ценников, корректной
печатной форме и правильном формате запроса отвечает пустым ответом с кодом 303.
В заголовке Location ответа содержится адрес временного расположения готовой к загрузке печатной формы.
Файл во временном расположении доступен для загрузки в течение 5 минут.

Сервер может вернуть ответ 202 и заголовок Location с адресом для опроса готовности печатной формы к загрузке.
Данный вариант будет реализован позже.

Печать этикеток и ценников доступна для товаров, услуг, комплектов и модификаций.

#### Печать этикеток и ценников 

**Параметры**

|Параметр   |Описание   | 
|---|---|
|   type|   `product` (required, string) - тип сущности, для которой запрашивается печать|
|   id|   `a86708d2-f8d3-4e67-8f04-6101158da808` (required, string) - id сущности, для которой запрашивается печать|

### Запрос на печать этикеток и ценников 

Запрос на печать этикеток и ценников по шаблону печатной формы.
#### Атрибуты запроса
+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **count** - Количество ценников/термоэтикеток. Максимальное количество - `1000`
+ **salePrice** - Цена продажи
  + **priceType** - Ссылка на тип цены в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **template** - Ссылка на шаблон для печати в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)

> Пример запроса на печать этикеток и ценников по шаблону печатной формы для товаров.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/product/a86708d2-f8d3-4e67-8f04-6101158da808/export/"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "organization": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/107430bc-36e7-11e7-8a7f-40d000000090",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=107430bc-36e7-11e7-8a7f-40d000000090"
              }
            },
            "count": 10,
            "salePrice": {
              "priceType": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
                  "type": "pricetype",
                  "mediaType": "application/json"
                }
              }
            },
            "template": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/assortment/metadata/embeddedtemplate/f8e295eb-15c6-3184-b934-14fe90b3ea81",
                "type": "embeddedtemplate",
                "mediaType": "application/json"
              }
            }
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
