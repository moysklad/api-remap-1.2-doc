## Печать этикеток и ценников
Средствами JSON API можно запрашивать печать этикеток и ценников с помощью шаблонов печатных форм.
При запросе на формирование печатной формы сервер (при готовности этикеток и ценников, корректной
печатной форме и правильном формате запроса) отвечает пустым телом ответа с http кодом 303.
В заголовке Location ответа содержится адрес временного расположения готовой к загрузке печатной формы.
Файл во временном расположении доступен для загрузки в течение 5 минут.

Сервер может вернуть ответ 202 и заголовок Location с адресом для опроса готовности печатной формы к загрузке.
Данный вариант будет реализован позже.

Печать этикеток и ценников доступна для товаров, услуг, комплектов и модификаций.

#### Печать этикеток и ценников 

### Запрос на печать этикеток и ценников 

Запрос на печать этикеток и ценников по шаблону печатной формы.
#### Атрибуты запроса

| Название         | Тип                                                       | Описание                                                                                                                                                                                |
| ---------------- | :-------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **organization** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Юрлица<br>`+Обязательное при ответе`                                                                                                                                         |
| **count**        | Int                                                       | Количество ценников/термоэтикеток. Максимальное количество - `1000`<br>`+Обязательное при ответе`                                                                                       |
| **salePrice**    | Object                                                    | Цена продажи. [Подробнее тут](../dictionaries/#suschnosti-pechat-atiketok-i-cennikow-zapros-na-pechat-atiketok-i-cennikow-atributy-zaprosa-cena-prodazhi)<br>`+Обязательное при ответе` |
| **template**     | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Шаблона печати<br>`+Обязательное при ответе` `+Expand`                                                                                                                       |

##### Цена продажи
Атрибуты вложенной сущности

| Название      | Тип                                                       | Описание                                           |
| ------------- | :-------------------------------------------------------- | :------------------------------------------------- |
| **priceType** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные типа цены<br>`+Обязательное при ответе` |


**Параметры**

| Параметр | Описание                                                                                                           |
| :------- | :----------------------------------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: a86708d2-f8d3-4e67-8f04-6101158da808* id сущности, для которой запрашивается печать. |
| **type** | `string` (required) *Example: product* тип сущности, для которой запрашивается печать.                             |

> Пример запроса на печать этикеток и ценников по шаблону печатной формы для товаров.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/product/a86708d2-f8d3-4e67-8f04-6101158da808/export/"
    -H "Authorization: Basic <Credentials>"
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
