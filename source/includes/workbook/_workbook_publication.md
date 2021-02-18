## Публикация документов
МойСклад позволяет печатать документы - формировать файлы в формате _pdf_ или _xls_ по специальным шаблонам, которые называются шаблонами печатных 
форм. Для большинства документов есть встроенные шаблоны, о создании собственных шаблонов можно прочитать в 
[статье поддержки](https://support.moysklad.ru/hc/ru/articles/219361888).

Публикация - это ссылка на печатную форму документа. Ее можно отправить по электронной почте. При публикации файлы формируются только в 
формате _pdf_. Публикации доступны для следующих видов документов:

+ Заказ покупателя
+ Счет покупателю
+ Отгрузка
+ Заказ поставщику
+ Счет поставщика
+ Приемка
+ Входящий платеж
+ Приходный ордер
+ Исходящий платеж
+ Расходный ордер
+ Внутренний заказ
+ Перемещение
+ Оприходование
+ Списание
+ Счет-фактура выданный
+ Счет-фактура полученный
+ Возврат поставщику
+ Возврат покупателя
+ Выплата денег
+ Внесение денег
+ Розничный возврат
+ Розничная продажа
+ Договор

## Шаблоны печатной формы

В JSON API возможно запросить списки встроенных и пользовательских шаблонов печатных форм, чтобы впоследствии использовать их для печати и 
публикации документов. 

> Запрос встроенных шаблонов заказов покупателей:

``` shell
curl 
    -X GET 
    -u login:password 
    -H "Lognex-Pretty-Print-JSON: true" 
    "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/embeddedtemplate/"
```

> Ответ

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
     "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/embeddedtemplate/",
     "type": "embeddedtemplate",
     "mediaType": "application/json",
     "size": 1,
     "limit": 100,
     "offset": 0
   },
   "rows": [
     {
       "meta": {
         "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/embeddedtemplate/6ffea5e5-1b69-4a88-be59-4856281d439c",
         "type": "embeddedtemplate",
         "mediaType": "application/json"
       },
       "id": "6ffea5e5-1b69-4a88-be59-4856281d439c",
       "name": "Заказ",
       "type": "entity",
       "content": "https://online.moysklad.ru/api/remap/1.2/download-template/order.xls"
     }
   ]
 }
```

> Запрос пользовательских шаблонов заказов покупателей:

``` shell
curl 
    -X GET 
    -u login:password 
    -H "Lognex-Pretty-Print-JSON: true" 
    "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/customtemplate/"
```

> Ответ

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
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/customtemplate/",
            "type": "customtemplate",
            "mediaType": "application/json",
            "size": 1,
            "limit": 100,
            "offset": 0
        },
        "rows": [
            {
                "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/customtemplate/13b49a38-0b64-4129-9fb8-0f9f936fa575",
                    "type": "customtemplate",
                    "mediaType": "application/json"
                },
                "id": "13b49a38-0b64-4129-9fb8-0f9f936fa575",
                "name": "order_upakovka.xls",
                "type": "entity",
                "content": "https://online.moysklad.ru/api/remap/1.2/download/13b49a38-0b64-4129-9fb8-0f9f936fa575"
            }
    ]
}
```

По ссылке из поля **content** можно скачать сам шаблон. 

Изменение или удаление шаблонов печатных форм через JSON API невозможно.

## Создание публикаций в JSON API

Создание публикаций возможно средствами JSON API. Чтобы создать публикацию нужен документ, например, заказ покупателя, и шаблон печатной формы - 
встроенный или пользовательский.

Создадим публикацию для заказа покупателя

> Запрос

``` shell
curl 
    -X POST
    -u login:password 
    -H "Content-Type: application/json" 
    -H "Lognex-Pretty-Print-JSON: true" 
    "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/53e988fd-c7c9-11e8-9dd2-f3a3000000cd/publication" 
    -d '{
          "template": {
            "meta": {
              "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/embeddedtemplate/6ffea5e5-1b69-4a88-be59-4856281d439c",
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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/53e988fd-c7c9-11e8-9dd2-f3a3000000cd/publication/aec51463-bbd2-11e6-8a84-bae500000003",
    "type": "operationpublication",
    "mediaType": "application/json"
  },
  "template": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/embeddedtemplate/6ffea5e5-1b69-4a88-be59-4856281d439c",
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
curl 
    -X GET 
    -u login:password 
    -H "Lognex-Pretty-Print-JSON: true" 
    "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/53e988fd-c7c9-11e8-9dd2-f3a3000000cd/publication" 
```

> Ответ:

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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/53e988fd-c7c9-11e8-9dd2-f3a3000000cd/publication",
        "type": "demand",
        "mediaType": "application/json",
        "size": 1,
        "limit": 100,
        "offset": 0
    },
    "rows": [
        {
            "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/53e988fd-c7c9-11e8-9dd2-f3a3000000cd/publication/aec51463-bbd2-11e6-8a84-bae500000003",
                "type": "operationpublication",
                "mediaType": "application/json"
            },
            "template": {
                "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/embeddedtemplate/6ffea5e5-1b69-4a88-be59-4856281d439c",
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
curl 
    -X DELETE 
    -u login:password 
    -H "Content-Type: application/json" 
    -H "Lognex-Pretty-Print-JSON: true" 
    ""https://online.moysklad.ru/api/remap/1.2/entity/customerorder/53e988fd-c7c9-11e8-9dd2-f3a3000000cd/publication/aec51463-bbd2-11e6-8a84-bae500000003"
```


## Ссылки публикаций

По ссылке публикации (например, https://mskld.ru/7sDZyGqk5M) открывается страница, с которой можно скачать pdf-документ. 

 ![useful image](../../images/publication/publication_download.png?raw=true)
 
По ссылке будет доступна самая последняя версия документа, даже если вы вносите изменения в документ после его публикации.

Ссылка будет доступна, пока не удалена публикация.
