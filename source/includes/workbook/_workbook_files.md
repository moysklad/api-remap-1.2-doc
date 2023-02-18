## Работа с Файлами в Документах, Номенклатуре и Контрагентах

Для расширенного описания и дополнения сущностей информацией, в сервисе МойСклад есть возможность работы с 
[Файлами](../dictionaries/#suschnosti-fajly) в 
[Документах](../documents/#dokumenty), 
Номенклатуре ([Товары](../dictionaries/#suschnosti-towar), 
[Комплекты](../dictionaries/#suschnosti-komplekt), 
[Улуги](../dictionaries/#suschnosti-usluga), 
[Модификации](../dictionaries/#suschnosti-modifikaciq)),
[Задачах](../dictionaries/#suschnosti-zadacha) и
[Контрагентах](../dictionaries/#suschnosti-kontragent). 
Файлы можно прикрепить к сущностям и запросить их в любой удобный момент. 
Информация по файлам выводится вместе с json представлением сущности, к которой относится данный файл. Для получения 
файла необходимо использовать ссылку из описания json представления файла. Подробнее про Файлы и работу с ними можно 
прочитать в разделе [Файлы](../dictionaries/#suschnosti-fajly).


Иногда для описания товара требуется, помимо указания полей, приложить какой-нибудь файл, например сертификат на данный 
товар или инструкцию по применению. Удобнее всего такие файлы держать рядом с описанием товара, к которому они 
относятся. Для этого можно воспользоваться новой 
функциональностью - [работа с Файлами](../dictionaries/#suschnosti-fajly).

Например, нужно создать товар и прикрепить к нему инструкцию. Это можно сделать несколькими способами: через интерфейс
сайта https://www.moysklad.ru или используя JSON API.

В сервисе [МойСклад](https://www.moysklad.ru) добавить, удалить или отредактировать список файлов товара можно через 
окно `Карточки товара`.

 ![useful image](../../images/files/good_files.png?raw=true)
 
 Для добавления файла через JSON API нужно задать поля `filename` и `context`, соответствующие названию и содержанию файла,
  закодированному в Base64, соответственно.
 Если нужно добавить или дублировать уже существующей файл, то можно указать его `meta`. 

> Запрос на создание товара с двумя прикрепленными файлами

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/product"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "simplegood",
            "files": [
              {
                "filename": "description.png",
                "content": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
              },
              {
                "filename": "additional_description.txt",
                "content": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
              }                
            ]
          }'  
``` 

> Response 200 (application/json)
 Успешный запрос. Результат - JSON представление созданного Товара с изображениями.
   
```json
{
    "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/bd1c0a3e-95ee-11e6-8a84-bae500000004",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
    },
    "id": "bd1c0a3e-95ee-11e6-8a84-bae500000004",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "owner": {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json"
        }
    },
    "shared": true,
    "group": {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
            "type": "group",
            "mediaType": "application/json"
        }
    },
    "updated": "2016-10-19 14:25:28",
    "name": "simplegood",
    "code": "00006",
    "externalCode": "0bmPIvHxgEDlNIZrZ6GLt2",
    "archived": false,
    "pathName": "",
    "images": {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/bd1c0a3e-95ee-11e6-8a84-bae500000004/images",
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
        "value": 0.0
    },
    "weight": 0,
    "volume": 0,
    "barcodes": [
        {
            "ean13": "2000000000107"
        }
    ],
    "variantsCount": 0,
    "isSerialTrackable": false,
    "trackingType": "NOT_TRACKED",
    "files": {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/bd1c0a3e-95ee-11e6-8a84-bae500000004/files",
            "type": "files",
            "mediaType": "application/json",
            "size": 2,
            "limit": 1000,
            "offset": 0
        }
    }
}
 ```

Стоит заметить, что в ответе нет перечисления всех файлов, а лишь указана `meta` для коллекции. Чтобы получить 
список файлов в рамках товара необходимо добавить в конец запроса `&expand=files&limit=100` при 
создании, получении или обновлении товара.

> Запрос на получение Товара с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/product/bd1c0a3e-95ee-11e6-8a84-bae500000004&expand=files&limit=100"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
 Успешный запрос. Результат - JSON представление запрошенного Товара с изображениями.
   
```json
{
    "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/bd1c0a3e-95ee-11e6-8a84-bae500000004",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=69bcd8fd-d16f-11ea-ac12-000d000000ce"
    },
    "id": "bd1c0a3e-95ee-11e6-8a84-bae500000004",
    "accountId": "15777764-d16e-11ea-ac12-000c00000000",
    "owner": {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/15dc9854-d16e-11ea-ac12-000d00000034",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=15dc9854-d16e-11ea-ac12-000d00000034"
        }
    },
    "shared": true,
    "group": {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/157890bb-d16e-11ea-ac12-000c00000001",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
            "type": "group",
            "mediaType": "application/json"
        }
    },
    "updated": "2020-07-29 10:45:03.364",
    "name": "Тестовый товар",
    "code": "00002",
    "externalCode": "QZ6OAxoMhaYyyE-yJp5pF0",
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
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/69bcf5e7-d16f-11ea-ac12-000d000000d1/images",
            "type": "image",
            "mediaType": "application/json",
            "size": 0,
            "limit": 1000,
            "offset": 0
        }
    },
    "minPrice": {
        "value": 0.0,
        "currency": {
            "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/160cd290-d16e-11ea-ac12-000d00000077",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                "type": "currency",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=160cd290-d16e-11ea-ac12-000d00000077"
            }
        }
    },
    "salePrices": [
        {
            "value": 0.0,
            "currency": {
                "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/160cd290-d16e-11ea-ac12-000d00000077",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                    "type": "currency",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=160cd290-d16e-11ea-ac12-000d00000077"
                }
            },
            "priceType": {
                "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/1648fb5e-d16e-11ea-ac12-000d00000078",
                    "type": "pricetype",
                    "mediaType": "application/json"
                },
                "id": "1648fb5e-d16e-11ea-ac12-000d00000078",
                "name": "Цена продажи",
                "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
            }
        }
    ],
    "buyPrice": {
        "value": 0.0,
        "currency": {
            "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/160cd290-d16e-11ea-ac12-000d00000077",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
                "type": "currency",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=160cd290-d16e-11ea-ac12-000d00000077"
            }
        }
    },
    "barcodes": [
        {
            "ean13": "2000000000015"
        }
    ],
    "attributes": [
        {
            "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/48b71254-d16f-11ea-ac12-000d000000c4",
                "type": "attributemetadata",
                "mediaType": "application/json"
            },
            "id": "48b71254-d16f-11ea-ac12-000d000000c4",
            "name": "Тестовый справочник товар",
            "type": "product",
            "value": {
                "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/5fc90499-d16f-11ea-ac12-000d000000c9",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json",
                    "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=5fc8840e-d16f-11ea-ac12-000d000000c7"
                },
                "name": "ТОвар в справочнике"
            }
        }
    ],
    "paymentItemType": "GOOD",
    "discountProhibited": false,
    "weight": 0.0,
    "volume": 0.0,
    "variantsCount": 0,
    "isSerialTrackable": false,
    "trackingType": "NOT_TRACKED",
    "files": {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/bd1c0a3e-95ee-11e6-8a84-bae500000004/files",
            "type": "files",
            "mediaType": "application/json",
            "size": 2,
            "limit": 1000,
            "offset": 0
        },
        "rows": [
            {
                "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/bd1c0a3e-95ee-11e6-8a84-bae500000004/files/f2728180-6afd-4d37-8a13-f3b48069bbb6",
                    "type": "files",
                    "mediaType": "application/json",
                    "downloadHref": "https://online.moysklad.ru/api/remap/1.2/download/f2728180-6afd-4d37-8a13-f3b48069bbb6"
                },
                "title": "description",
                "filename": "description.png",
                "size": 14052,
                "updated": "2019-01-24 16:55:24.567",
                "miniature": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/download/f2728180-6afd-4d37-8a13-f3b48069bbb6?miniature=true",
                    "type": "files",
                    "mediaType": "image/png",
                    "downloadHref": "https://miniature-prod.moysklad.ru/miniature/79b17fec-2f08-11eb-0a80-052200009a8a/documentminiature/7129822c-2409-417c-977f-31a1e889039a"
                },
                "tiny": {
                    "href": "https://online.moysklad.ru/static/tinyimage/f2aab4d2-1fd3-11e9-ac12-000800000001/tinyimage/ebb10350-0272-45db-9d33-ca5a01fd5543/t.png",
                    "type": "files",
                    "mediaType": "image/png"
                }
            },
            {
                "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/bd1c0a3e-95ee-11e6-8a84-bae500000004/files/933e41ac-1946-4bf0-9b21-51f2051f3e9f",
                    "type": "files",
                    "mediaType": "application/json",
                    "downloadHref": "https://online.moysklad.ru/api/remap/1.2/download/933e41ac-1946-4bf0-9b21-51f2051f3e9f"
                },
                "title": "additional_description",
                "filename": "additional_description.txt",
                "size": 14052,
                "updated": "2019-01-24 16:55:25.047",
                "createdBy": {
                    "meta": {
                        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/69f5683e-a49b-11ea-ac15-000e000000cf",
                        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                        "type": "employee",
                        "mediaType": "application/json",
                        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=69f5683e-a49b-11ea-ac15-000e000000cf"
                    }
                }
            }
        ]
    }
}
 ```

Теперь рассмотрим другой вариант работы с файлами в Товарах. Предположим, со временем понадобилось обновить список 
файлов для Товара. Например устарела инструкция и нужно 
удалить старую и прикрепить новую. Это можно сделать через сервис МойСклад, как было указано ранее или воспользоваться 
средствами JSON API.

> Запрос на обновление списка файлов у Товара

  ```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/product/bd1c0a3e-95ee-11e6-8a84-bae500000004/files"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "filename": "new_instruction.txt",
              "content": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
            },
            "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/bd1c0a3e-95ee-11e6-8a84-bae500000004/files/f2728180-6afd-4d37-8a13-f3b48069bbb6",
                "type": "files",
                "mediaType": "application/json",
                "downloadHref": "https://online.moysklad.ru/api/remap/1.2/download/f2728180-6afd-4d37-8a13-f3b48069bbb6"
            }                   
          ]'  
  ```

> Ответ - обновленный список файлов Товара

```json

[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/bd1c0a3e-95ee-11e6-8a84-bae500000004/files/f2728180-6afd-4d37-8a13-f3b48069bbb6",
      "type": "files",
      "mediaType": "application/json",
      "downloadHref": "https://online.moysklad.ru/api/remap/1.2/download/f2728180-6afd-4d37-8a13-f3b48069bbb6"
    },
    "title": "new_instruction",
    "filename": "new_instruction.txt",
    "size": 14052,
    "updated": "2019-01-24 16:55:24.567",
    "createdBy": {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/69f5683e-a49b-11ea-ac15-000e000000cf",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=69f5683e-a49b-11ea-ac15-000e000000cf"
        }
    }
  },
  {
    "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/bd1c0a3e-95ee-11e6-8a84-bae500000004/files/f2728180-6afd-4d37-8a13-f3b48069bbb6",
        "type": "files",
        "mediaType": "application/json",
        "downloadHref": "https://online.moysklad.ru/api/remap/1.2/download/f2728180-6afd-4d37-8a13-f3b48069bbb6"
    },
    "title": "description",
    "filename": "description.png",
    "size": 14052,
    "updated": "2019-01-24 16:55:24.567",
    "miniature": {
        "href": "https://online.moysklad.ru/api/remap/1.2/download/f2728180-6afd-4d37-8a13-f3b48069bbb6?miniature=true",
        "type": "files",
        "mediaType": "image/png",
        "downloadHref": "https://miniature-prod.moysklad.ru/miniature/79b17fec-2f08-11eb-0a80-052200009a8a/documentminiature/7129822c-2409-417c-977f-31a1e889039a"
    },
    "tiny": {
        "href": "https://online.moysklad.ru/static/tinyimage/f2aab4d2-1fd3-11e9-ac12-000800000001/tinyimage/ebb10350-0272-45db-9d33-ca5a01fd5543/t.png",
        "type": "files",
        "mediaType": "image/png"
    }
  }
]
```

Как видно из примера, одним запросом был изменен полный список файлов для Товара. На одновременное добавление и изменение 
списка файлов через JSON API существует ограничение в 10 элементов. Подробнее описание приведено в разделе 
[Файлы](../dictionaries/#suschnosti-fajly).

Для того, чтобы посмотреть файл, прикрепленный к сущности, его необходимо скачать. Это можно сделать используя ссылку, 
указанную в `downloadHref` в `meta` файла.

> Пример запроса на получения Файла Товара

  ```shell
  curl -X GET
    "https://online.moysklad.ru/api/remap/1.2/download/f2728180-6afd-4d37-8a13-f3b48069bbb6"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"  
  ```
Ответ придет со статусом 302 (Found), где в заголовке ответа в `Location` будет указанна ссылка на скачивание. Важно 
учитывать то, что переход по данной ссылке уже не требуется заголовок `Authorization`.
