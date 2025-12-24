## Создание публикаций в JSON API

Создание публикаций возможно средствами JSON API. Чтобы создать публикацию нужен документ, например, заказ покупателя, и шаблон печатной формы -
встроенный или пользовательский.

Создадим публикацию для заказа покупателя

> Запрос

``` shell
curl --compressed \
    -X POST \
    -u login:password \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
    -H "Lognex-Pretty-Print-JSON: true" \
    "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/53e988fd-c7c9-11e8-9dd2-f3a3000000cd/publication" \
    -d '{
          "template": {
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/embeddedtemplate/6ffea5e5-1b69-4a88-be59-4856281d439c",
              "type": "embeddedtemplate",
              "mediaType": "application/json"
            }
          }
        }'
```

В ответ возвращается JSON представление публикации. Если такая публикация уже существовала, код ответа 200. Если публикация была создана - 201.

> Ответ

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/53e988fd-c7c9-11e8-9dd2-f3a3000000cd/publication/aec51463-bbd2-11e6-8a84-bae500000003",
    "type": "operationpublication",
    "mediaType": "application/json"
  },
  "template": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/embeddedtemplate/6ffea5e5-1b69-4a88-be59-4856281d439c",
      "type": "embeddedtemplate",
      "mediaType": "application/json"
    }
  },
  "href": "https://mskld.ru/QS6YOArOjJ"
}
```

### Список всех публикаций

Также можно запросить список всех публикаций документа.

> Запрос

``` shell
curl --compressed \
    -X GET \
    -u login:password \
    -H "Accept-Encoding: gzip" \
    -H "Lognex-Pretty-Print-JSON: true" \
    "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/53e988fd-c7c9-11e8-9dd2-f3a3000000cd/publication" 
```

> Ответ:

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/53e988fd-c7c9-11e8-9dd2-f3a3000000cd/publication",
    "type": "demand",
    "mediaType": "application/json",
    "size": 1,
    "limit": 100,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/53e988fd-c7c9-11e8-9dd2-f3a3000000cd/publication/aec51463-bbd2-11e6-8a84-bae500000003",
        "type": "operationpublication",
        "mediaType": "application/json"
      },
      "template": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/embeddedtemplate/6ffea5e5-1b69-4a88-be59-4856281d439c",
          "type": "embeddedtemplate",
          "mediaType": "application/json"
        }
      },
      "href": "https://mskld.ru/fhzHJPqIM7"
    }
  ]
}
```

### Удаление публикаций

Через JSON API можно удалить публикацию:

> Запрос

``` shell
curl --compressed \
    -X DELETE \
    -u login:password \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
    -H "Lognex-Pretty-Print-JSON: true" \
    "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/53e988fd-c7c9-11e8-9dd2-f3a3000000cd/publication/aec51463-bbd2-11e6-8a84-bae500000003"
```
