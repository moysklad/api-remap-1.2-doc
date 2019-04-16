## Документ Тех. карта
Средствами JSON API можно создавать и обновлять сведения о Тех. картах, запрашивать списки Тех. карт и сведения по отдельным Тех. картам. Позициями Тех. карт можно управлять как в составе отдельной Тех. карты, так и отдельно - с помощью специальных ресурсов для управления материалами и продуктами Тех. карты. Кодом сущности для Тех. карты в составе JSON API является ключевое слово **processingplan**. Больше о Тех. картах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по
[этой ссылке](https://support.moysklad.ru/hc/ru/articles/203325613-%D0%A1%D0%B1%D0%BE%D1%80%D0%BE%D1%87%D0%BD%D1%8B%D0%B5-%D0%B8-%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B8).
### Тех. карты 
#### Атрибуты сущности
+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о Тех. карте
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **deleted** - Момент последнего удаления сущности `Только для чтения`
+ **name** - Наименование Тех. карты `Необходимое`
+ **externalCode** - Внешний код Тех. карты
+ **pathName** - Наименование группы, в которую входит Тех. карта `Только для чтения`
+ **parent** - Ссылка на группу Тех. карты в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **cost** - Стоимость производства
+ **materials** - Список материалов Тех. карты в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Необходимое`
+ **products** - Список готовых продуктов Тех. карты в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Необходимое`

#### Материалы Тех. карты
Материалы Тех. карты - это список товаров, используемых для производства готовых продуктов.
Объект материала Тех. карты содержит следующие поля:

+ **id** - ID товара в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **product** - Ссылка на товар, которую представляет собой позиция, в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **quantity** - Количество товаров данного вида в позиции.

#### Продукты Тех. карты
Продукты Тех. карты - это список товаров, получаемых при производстве.
Объект продукта Тех. карты содержит следующие поля:

+ **id** - ID товара в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **product** - Ссылка на товар, которую представляет собой позиция, в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **quantity** - Количество товаров данного вида в позиции.


С материалами и продуктами можно работать с помощью [специальных ресурсов для управления позициями Тех. карты](#документ-тех.-карта-материалы-тех.-карты),
а также в составе отдельной Тех. карты. При работе в составе отдельной Тех. карты,
вы можете отправлять запросы на создание отдельной Тех. карты с включенными в тело запроса
массивами материалов и продуктов Тех. карты. Если количество материалов или продуктов превышает максимально допустимое, то для
дальнейшего пополнения материалов и продуктов нужно будет работать со специальнымы ресурсами "Материалы Тех. карты" и "Продукты Тех. карты".
Также, при работе в составе отдельной Тех. карты, можно отправлять запросы на обновление списка материалов и продуктов
с включенными в тело запроса массивами материалов и продуктов Тех. карты. При этом важно помнить, что коллекции материалов и продуктов
полностью заменят уже существующие коллекции при обновлении объекта - лишние
позиции будут удалены, новые добавлены, существующие - изменены.


### Получить список Тех. карт 
Запрос всех Тех. карт на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой Тех. карты.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|
|search |  `string` (optional) *Example: 0001* URL Параметр для поиска по имени документа. Фильтр документов по указанной поисковой строке. Фильтрация происходит по полю name.|

> Получить список Тех. карт

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processingplan"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Тех. карт.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/context/employee",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
    "type": "processingplan",
    "mediaType": "application/json",
    "size": 3,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
        "type": "processingplan",
        "mediaType": "application/json"
      },
      "id": "1a18770e-ad9a-11e6-5bed-427b00000064",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "owner": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-21 14:55:08",
      "name": "Тех. карточка",
      "externalCode": "4geOQkq5h7d5w1-tUATmt3",
      "pathName": "",
      "cost": 1000,
      "materials": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064/materials",
          "type": "processingplanmaterial",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "products": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064/products",
          "type": "processingplanresult",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      }
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/6b4ffbf7-ac12-11e6-5bed-427b00000091",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
        "type": "processingplan",
        "mediaType": "application/json"
      },
      "id": "6b4ffbf7-ac12-11e6-5bed-427b00000091",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "owner": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-17 14:48:32",
      "name": "Тех. карта",
      "externalCode": "Lr9zJa9qgpvs6f6laIgtG2",
      "pathName": "Группа",
      "folder": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/bfb6c5dc-acbb-11e6-5bed-427b00000001",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
          "type": "processingplanfolder",
          "mediaType": "application/json"
        }
      },
      "cost": 2000,
      "materials": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/6b4ffbf7-ac12-11e6-5bed-427b00000091/materials",
          "type": "processingplanmaterial",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "products": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/6b4ffbf7-ac12-11e6-5bed-427b00000091/products",
          "type": "processingplanresult",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      }
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
        "type": "processingplan",
        "mediaType": "application/json"
      },
      "id": "c38e50b0-acdc-11e6-5bed-427b0000009e",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "owner": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-17 18:44:45",
      "name": "Карта",
      "externalCode": "QrWcKk6mhnNX2Jhi-WsIh2",
      "pathName": "Группа",
      "folder": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/bfb6c5dc-acbb-11e6-5bed-427b00000001",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplanfolder/metadata",
          "type": "processingplanfolder",
          "mediaType": "application/json"
        }
      },
      "cost": 10000,
      "materials": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e/materials",
          "type": "processingplanmaterial",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "products": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e/products",
          "type": "processingplanresult",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      }
    }
  ]
}
```

### Создать Тех. карту
Запрос на создание новой Тех. карты.
Обязательные для создания поля:

+ **name** - Наименование Тех. карты
+ **materials** - Список материалов Тех. карты в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **products** - Список готовых продуктов Тех. карты в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)

> Пример создания новой Тех.карты с телом запроса, содержащим только необходимые поля.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/processingplan"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Example",
            "cost": 1000,
            "materials": [
              {
                "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
                "product": {
                  "meta": {
                    "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
                    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                },
                "quantity": 1
              }
            ],
            "products": [
              {
                "product": {
                  "meta": {
                    "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0da78cd1-91f2-11e6-5bed-427b0000009a",
                    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                },
                "quantity": 1
              },
              {
                "product": {
                  "meta": {
                    "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0da78cd1-91f2-11e6-5bed-427b0000009a",
                    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                },
                "quantity": 1
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Тех. карты.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
    "type": "processingplan",
    "mediaType": "application/json"
  },
  "id": "120a488b-b0bd-11e6-5bed-427b00000000",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-22 17:07:57",
  "name": "123sdf",
  "externalCode": "llZWq551h90XDJuYADvry0",
  "pathName": "",
  "cost": 1000,
  "materials": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/materials",
      "type": "processingplanmaterial",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "products": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/products",
      "type": "processingplanresult",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Массовое создание и обновление Тех. карт 
[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) Тех. карт.
В теле запроса нужно передать массив, содержащий JSON представления Тех. карт, которые вы хотите создать или обновить.
Обновляемые Тех. карты должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Тех. карт

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/processingplan"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "Example",
              "cost": 1000,
              "materials": [
                {
                  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
                  "product": {
                    "meta": {
                      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
                      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  },
                  "quantity": 1
                }
              ],
              "products": [
                {
                  "product": {
                    "meta": {
                      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0da78cd1-91f2-11e6-5bed-427b0000009a",
                      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  },
                  "quantity": 1
                },
                {
                  "product": {
                    "meta": {
                      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0da78cd1-91f2-11e6-5bed-427b0000009a",
                      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  },
                  "quantity": 1
                }
              ]
            },
            {
              "meta": {
                "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064",
                "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
                "type": "processingplan",
                "mediaType": "application/json"
              },
              "name": "Тех. карта",
              "cost": 100000
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Тех. карт.

```json
[
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    },
    "id": "120a488b-b0bd-11e6-5bed-427b00000000",
    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
    "owner": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-11-22 17:07:57",
    "name": "123sdf",
    "externalCode": "llZWq551h90XDJuYADvry0",
    "pathName": "",
    "cost": 1000,
    "materials": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/materials",
        "type": "processingplanmaterial",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
      }
    },
    "products": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/products",
        "type": "processingplanresult",
        "mediaType": "application/json",
        "size": 2,
        "limit": 1000,
        "offset": 0
      }
    }
  },
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    },
    "id": "1a18770e-ad9a-11e6-5bed-427b00000064",
    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
    "owner": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-11-21 14:55:08",
    "name": "Тех. карта",
    "externalCode": "4geOQkq5h7d5w1-tUATmt3",
    "pathName": "",
    "cost": 100000,
    "materials": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064/materials",
        "type": "processingplanmaterial",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
      }
    },
    "products": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064/products",
        "type": "processingplanresult",
        "mediaType": "application/json",
        "size": 2,
        "limit": 1000,
        "offset": 0
      }
    }
  }
]
```

### Удалить Тех. карту

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Тех. карты.|
 
> Запрос на удаление Тех. карты с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/processingplan/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление Тех. карты.

### Тех. карта

### Получить Тех. карту

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Тех. карты.|
 
> Запрос на получение отдельной Тех. карты с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processingplan/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Тех. карты.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
    "type": "processingplan",
    "mediaType": "application/json"
  },
  "id": "1a18770e-ad9a-11e6-5bed-427b00000064",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-21 14:55:08",
  "name": "Тех. карточка",
  "externalCode": "4geOQkq5h7d5w1-tUATmt3",
  "pathName": "",
  "cost": 1000,
  "materials": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064/materials",
      "type": "processingplanmaterial",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "products": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064/products",
      "type": "processingplanresult",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  }
}

```

### Изменить Тех. карту 
Запрос на обновление Тех. карты с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Тех. карты, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Тех. карты](#документ-тех.-карта-тех.-карты).

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Тех. карты.|

> Пример запроса на обновление отдельной Тех. карты.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/processingplan/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Тех. карта",
            "cost": 100000
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Тех. карты.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064",
    "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
    "type": "processingplan",
    "mediaType": "application/json"
  },
  "id": "1a18770e-ad9a-11e6-5bed-427b00000064",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "owner": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-21 14:55:08",
  "name": "Тех. карта",
  "externalCode": "4geOQkq5h7d5w1-tUATmt3",
  "pathName": "",
  "cost": 100000,
  "materials": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064/materials",
      "type": "processingplanmaterial",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "products": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064/products",
      "type": "processingplanresult",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Материалы Тех. карты 
Отдельный ресурс для управления материалами Тех. карты. С его помощью вы можете управлять материалами большого документа, количество материалов в котором превышает лимит на количество материалов, сохраняемых вместе с документом. Этот лимит равен 100. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](/api/remap/1.2/doc/index.html#header-работа-с-позициями-документов).

### Получить материалы Тех. карты 
Запрос на получение списка всех материалов данной Тех. карты.

- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой материалы Тех. карты.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Тех. карты.|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить материалы Тех. карты

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processingplan/7944ef04-f831-11e5-7a69-971500188b19/materials"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка материалов отдельной Тех. карты.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/context/employee",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/materials",
    "type": "processingplanmaterial",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/materials/120b4591-b0bd-11e6-5bed-427b00000001",
        "type": "processingplanmaterial",
        "mediaType": "application/json"
      },
      "id": "120b4591-b0bd-11e6-5bed-427b00000001",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "product": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        }
      },
      "quantity": 1
    }
  ]
}
```

### Создать материал Тех. карты 
Запрос на создание нового материала в Тех. карте.
Для успешного создания необходимо в теле запроса указать следующие поля:

+ **product** - Ссылка на товар, которую представляет собой позиция.
+ **quantity** - Количество товаров в позиции.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Тех. карты.|

> Пример создания одного материала в Тех. карте.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/processingplan/7944ef04-f831-11e5-7a69-971500188b19/materials"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '[
            {
              "product": {
                "meta": {
                  "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
                  "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "quantity": 1
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного материала отдельной Тех. карты.

```json
[
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/materials/120b4591-b0bd-11e6-5bed-427b00000001",
      "type": "processingplanmaterial",
      "mediaType": "application/json"
    },
    "id": "120b4591-b0bd-11e6-5bed-427b00000001",
    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
    "product": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    },
    "quantity": 1
  }
]
```

> Пример создания сразу нескольких материалов в Тех. карте.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/processingplan/7944ef04-f831-11e5-7a69-971500188b19/materials"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '[
            {
              "product": {
                "meta": {
                  "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
                  "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "quantity": 1
            },
            {
              "product": {
                "meta": {
                  "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000081",
                  "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "quantity": 2
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка созданных материалов отдельной Тех. карты.

```json
[
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/materials/120b4591-b0bd-11e6-5bed-427b00000001",
      "type": "processingplanmaterial",
      "mediaType": "application/json"
    },
    "id": "120b4591-b0bd-11e6-5bed-427b00000001",
    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
    "product": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    },
    "quantity": 1
  },
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/materials/120b4591-b0bd-11e6-5bed-427b00000002",
      "type": "processingplanmaterial",
      "mediaType": "application/json"
    },
    "id": "120b4591-b0bd-11e6-5bed-427b00000002",
    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
    "product": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000081",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    },
    "quantity": 2
  }
]
```

### Материал Тех. карты
 
### Получить материал

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Тех. карты.|
|positionID |  `string` (required) *Example: 9560e3e3-9609-11e6-8af5-581e00000008* id позиции Тех. карты.|
 
> Запрос на получение отдельного материала Тех. карты с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processingplan/d72b4281-b000-11e6-8af5-581e00000074/materials/9560e3e3-9609-11e6-8af5-581e00000008"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного материала Тех. карты.

```json
{
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/materials/120b4591-b0bd-11e6-5bed-427b00000001",
    "type": "processingplanmaterial",
    "mediaType": "application/json"
  },
  "id": "120b4591-b0bd-11e6-5bed-427b00000001",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "product": {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
      "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json"
    }
  },
  "quantity": 1
}
```

### Изменить материал 
Запрос на обновление отдельного материала Тех. карты. Для обновления материала нет каких-либо
 обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Тех. карты.|
|positionID |  `string` (required) *Example: 9560e3e3-9609-11e6-8af5-581e00000008* id позиции Тех. карты.|

> Пример запроса на обновление отдельного материала в Тех. карте.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/processingplan/d72b4281-b000-11e6-8af5-581e00000074/materials/9560e3e3-9609-11e6-8af5-581e00000008"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "quantity": 5
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного материала Тех. карты.

```json
[
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/materials/120b4591-b0bd-11e6-5bed-427b00000001",
      "type": "processingplanmaterial",
      "mediaType": "application/json"
    },
    "id": "120b4591-b0bd-11e6-5bed-427b00000001",
    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
    "product": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    },
    "quantity": 5
  }
]
```

### Удалить материал 

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Тех. карты.|
|positionID |  `string` (required) *Example: 9560e3e3-9609-11e6-8af5-581e00000008* id позиции Тех. карты.|

> Запрос на удаление материала Тех. карты с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/processingplan/d72b4281-b000-11e6-8af5-581e00000074/materials/9560e3e3-9609-11e6-8af5-581e00000008"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление материала Тех. карты.

### Продукты Тех. карты 
Отдельный ресурс для управления продуктами Тех. карты. С его помощью вы можете управлять продуктами большого документа, количество продуктов в котором превышает лимит на количество продуктов, сохраняемых вместе с документом. Этот лимит равен 100. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](/api/remap/1.2/doc/index.html#header-работа-с-позициями-документов).

### Получить продукты Тех. карты 
Запрос на получение списка всех продуктов данной Тех. карты.

- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой продукты Тех. карты.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Тех. карты.|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить продукты Тех. карты

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processingplan/7944ef04-f831-11e5-7a69-971500188b19/products"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка продуктов отдельной Тех. карты.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/context/employee",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/products",
    "type": "processingplanresult",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/products/120b4591-b0bd-11e6-5bed-427b00000001",
        "type": "processingplanresult",
        "mediaType": "application/json"
      },
      "id": "120b4591-b0bd-11e6-5bed-427b00000001",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "product": {
        "meta": {
          "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
          "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json"
        }
      },
      "quantity": 1
    }
  ]
}
```

### Создать продукт Тех. карты 
Запрос на создание нового продукта в Тех. карте.
Для успешного создания необходимо в теле запроса указать следующие поля:

+ **product** - Ссылка на товар, которую представляет собой позиция.
+ **quantity** - Количество товаров в позиции.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Тех. карты.|

> Пример создания одного продукта в Тех. карте.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/processingplan/7944ef04-f831-11e5-7a69-971500188b19/products"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '[
            {
              "product": {
                "meta": {
                  "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
                  "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "quantity": 1
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного продукта отдельной Тех. карты.

```json
[
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/products/120b4591-b0bd-11e6-5bed-427b00000001",
      "type": "processingplanresult",
      "mediaType": "application/json"
    },
    "id": "120b4591-b0bd-11e6-5bed-427b00000001",
    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
    "product": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    },
    "quantity": 1
  }
]
```

> Пример создания сразу нескольких продуктов в Тех. карте.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/processingplan/7944ef04-f831-11e5-7a69-971500188b19/products"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '[
            {
              "product": {
                "meta": {
                  "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
                  "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "quantity": 1
            },
            {
              "product": {
                "meta": {
                  "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000081",
                  "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "quantity": 2
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка созданных продуктов отдельной Тех. карты.

```json
[
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/products/120b4591-b0bd-11e6-5bed-427b00000001",
      "type": "processingplanresult",
      "mediaType": "application/json"
    },
    "id": "120b4591-b0bd-11e6-5bed-427b00000001",
    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
    "product": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    },
    "quantity": 1
  },
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/products/120b4591-b0bd-11e6-5bed-427b00000002",
      "type": "processingplanresult",
      "mediaType": "application/json"
    },
    "id": "120b4591-b0bd-11e6-5bed-427b00000002",
    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
    "product": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000081",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    },
    "quantity": 2
  }
]
```

### Продукт Тех. карты
 
### Получить продукт

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Тех. карты.|
|positionID |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id продукта Тех. карты.|
 
> Запрос на получение отдельного продукта Тех. карты с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/processingplan/d72b4281-b000-11e6-8af5-581e00000074/products/9560e3e3-9609-11e6-8af5-581e00000008"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного продукта Тех. карты.

```json
[
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/products/120b4591-b0bd-11e6-5bed-427b00000001",
      "type": "processingplanresult",
      "mediaType": "application/json"
    },
    "id": "120b4591-b0bd-11e6-5bed-427b00000001",
    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
    "product": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    },
    "quantity": 1
  }
]
```

### Изменить продукт 
Запрос на обновление отдельного продукта Тех. карты. Для обновления продукта нет каких-либо
 обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Тех. карты.|
|positionID |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id продукта Тех. карты.|

> Пример запроса на обновление отдельного продукта в Тех. карте.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/processingplan/d72b4281-b000-11e6-8af5-581e00000074/products/9560e3e3-9609-11e6-8af5-581e00000008"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "quantity": 5
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного продукта Тех. карты.

```json
[
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/processingplan/120a488b-b0bd-11e6-5bed-427b00000000/products/120b4591-b0bd-11e6-5bed-427b00000001",
      "type": "processingplanresult",
      "mediaType": "application/json"
    },
    "id": "120b4591-b0bd-11e6-5bed-427b00000001",
    "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
    "product": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      }
    },
    "quantity": 5
  }
]

```

### Удалить продукт

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: d72b4281-b000-11e6-8af5-581e00000074* id Тех. карты.|
|positionID |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id продукта Тех. карты.|
 
> Запрос на удаление продукта Тех. карты с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/processingplan/d72b4281-b000-11e6-8af5-581e00000074/products/9560e3e3-9609-11e6-8af5-581e00000008"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление продукта Тех. карты.

