## Шаблоны печатной формы

В JSON API возможно запросить списки встроенных и пользовательских шаблонов печатных форм, чтобы впоследствии использовать их для печати и 
публикации документов. 

> Запрос встроенных шаблонов заказов покупателей:

``` shell
curl 
    -X GET 
    -u login:password
    -H "Accept-Encoding: gzip" 
    -H "Lognex-Pretty-Print-JSON: true" 
    "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/embeddedtemplate/"
```

> Ответ

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
     "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/embeddedtemplate/",
     "type": "embeddedtemplate",
     "mediaType": "application/json",
     "size": 1,
     "limit": 100,
     "offset": 0
   },
   "rows": [
     {
       "meta": {
         "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/embeddedtemplate/6ffea5e5-1b69-4a88-be59-4856281d439c",
         "type": "embeddedtemplate",
         "mediaType": "application/json"
       },
       "id": "6ffea5e5-1b69-4a88-be59-4856281d439c",
       "name": "Заказ",
       "type": "entity",
       "content": "https://api.moysklad.ru/api/remap/1.2/download-template/order.xls"
     }
   ]
 }
```

> Запрос пользовательских шаблонов заказов покупателей:

``` shell
curl 
    -X GET 
    -u login:password
    -H "Accept-Encoding: gzip" 
    -H "Lognex-Pretty-Print-JSON: true" 
    "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/customtemplate/"
```

> Ответ

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
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/customtemplate/",
            "type": "customtemplate",
            "mediaType": "application/json",
            "size": 1,
            "limit": 100,
            "offset": 0
        },
        "rows": [
            {
                "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/customtemplate/13b49a38-0b64-4129-9fb8-0f9f936fa575",
                    "type": "customtemplate",
                    "mediaType": "application/json"
                },
                "id": "13b49a38-0b64-4129-9fb8-0f9f936fa575",
                "name": "order_upakovka.xls",
                "type": "entity",
                "content": "https://api.moysklad.ru/api/remap/1.2/download/13b49a38-0b64-4129-9fb8-0f9f936fa575"
            }
    ]
}
```

По ссылке из поля **content** можно скачать сам шаблон. 

Изменение или удаление шаблонов печатных форм через JSON API невозможно.
