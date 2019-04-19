## Списание
Средствами JSON API можно создавать и обновлять сведения о Списаниях, запрашивать списки Списаний и сведения по отдельным Списаниям. Позициями Списаний можно управлять как в составе отдельного Списания, так и отдельно - с помощью специальных ресурсов для управления позициями Списания. Кодом сущности для Списания в составе JSON API является ключевое слово **loss**. Больше о Списаниях можно прочитать [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203053096-%D0%A1%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B8-%D0%BE%D0%BF%D1%80%D0%B8%D1%85%D0%BE%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2).
### Списания 
#### Атрибуты сущности
+ **meta** - [Метаданные](#metadannye) о Списании
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **syncId** - ID синхронизации. После заполнения недоступен для изменения.
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **deleted** - Момент последнего удаления сущности `Только для чтения`
+ **name** - номер Списания
+ **description** - Комментарий Списания
+ **externalCode** - Внешний код Списания
+ **moment** - Дата Списания
+ **applicable** - Отметка о проведении
+ **sum** - Сумма Списания в копейках `Только для чтения`
+ **rate** - Валюта
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](#metadannye)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](#metadannye)
+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](#metadannye) `Необходимое`
+ **store** - Ссылка на склад в формате [Метаданных](#metadannye) `Необходимое`
+ **contract** - Ссылка на договор в формате [Метаданных](#metadannye)
+ **project** - Ссылка на проект в формате [Метаданных](#metadannye)
+ **state** - Статус Списания в формате [Метаданных](#metadannye)
+ **attributes** - Коллекция доп. полей в формате [Метаданных](#metadannye)
<br>Поля при expand'е:</br>
  - **name** - номер документа
  - **moment** - дата печати
  - **href** - ссылка на файл печатной формы
  - **fileName** - название файла печатной формы
  - **updated** - дата последнего изменения
+ **created** - Дата создания `Только для чтения`
+ **positions** - Ссылка на позиции Списания в формате [Метаданных](#metadannye)

#### Связи с другими документами
+ **salesReturn** - Ссылка на связанный со списанием возврат покупателя в формате [Метаданных](#metadannye)

#### Позиции Списания
Позиции Списания - это список товаров/услуг/модификаций/серий.
Объект позиции Списания содержит следующие поля:

+ **id** - ID товара в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **quantity** - Количество товаров/услуг данного вида в позиции. Если позиция - товар, у которого включен учет по серийным номерам, то значение в этом поле всегда будет равно количеству серийных номеров для данной позиции в документе.
+ **price** - Цена товара/услуги в копейках
+ **assortment** - Ссылка на товар/услугу/серию/модификацию, которую представляет собой позиция, в формате [Метаданных](#metadannye)
+ **pack** - Упаковка товара
+ **things** - Серийные номера
Значение данного атрибута игнорируется, если товар позиции не находится на серийном учете.
В ином случае количество товаров в позиции будет равно количеству серийных номеров, переданных в значении атрибута.

С позициями можно работать с помощью [специальных ресурсов для управления позициями Списания](#pozicii-spisaniq-2),
а также в составе отдельного Списания. При работе в составе отдельного Списания,
вы можете отправлять запросы на создание отдельного Списания с включенным в тело запроса
массивом позиций Списания. Если количество позиций превышает максимально допустимое, то для
дальнейшего пополнения позиций нужно будет работать со специальным ресурсом "Позиции Списания".
Также, при работе в составе отдельного Списания, можно отправлять запросы на обновление списка позиций
с включенным в тело запроса массивом позиций Списания. При этом важно помнить, что коллекция позиций будет
восприниматься как "все позиции Списания" и полностью заменит уже существующую коллекцию при обновлении объекта - лишние
позиции будут удалены, новые добавлены, существующие - изменены.

+ **reason** - Причина списания данной позиции

О работе с доп. полями Списаний можно прочитать [здесь](#rabota-s-dopolnitel-nymi-polyami)


### Получить Списания 
Запрос всех Списаний на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

- **meta** [Метаданные](#metadannye) о выдаче,
- **context** - [Метаданные](#metadannye) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой Списания.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|
|search |  `string` (optional) *Example: 0001* URL Параметр для поиска по имени документа. Фильтр документов по указанной поисковой строке. Фильтрация происходит по полю name.|

> Получить Списания

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/loss"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Списаний.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/loss/metadata",
    "type": "loss",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/6ddca2d7-4f28-11e6-8a84-bae500000066",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/loss/metadata",
        "type": "loss",
        "mediaType": "application/json"
      },
      "id": "6ddca2d7-4f28-11e6-8a84-bae500000066",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-07-21 15:22:54",
      "name": "00001",
      "externalCode": "o5GMiWUJhqhq1vmrUWwI-2",
      "moment": "2016-07-21 12:49:00",
      "applicable": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/cdbc62de-3f68-11e6-8a84-bae500000050",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        },
        "value": 63
      },
      "sum": 3981730,
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "attributes": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/metadata/attributes/d0912ad5-4f3d-11e6-8a84-bae500000082",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "d0912ad5-4f3d-11e6-8a84-bae500000082",
          "name": "Процент",
          "type": "double",
          "value": 0.2
        }
      ],
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/6ddca2d7-4f28-11e6-8a84-bae500000066/positions",
          "type": "lossposition",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/9d020efd-4f2a-11e6-8a84-bae500000078",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/loss/metadata",
        "type": "loss",
        "mediaType": "application/json"
      },
      "id": "9d020efd-4f2a-11e6-8a84-bae500000078",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-07-21 15:23:02",
      "name": "00002",
      "externalCode": "08cP74Ftgc7MrBTbGfGVJ3",
      "moment": "2016-07-21 13:05:00",
      "applicable": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "sum": 0,
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "attributes": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/metadata/attributes/d0912ad5-4f3d-11e6-8a84-bae500000082",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "d0912ad5-4f3d-11e6-8a84-bae500000082",
          "name": "Процент",
          "type": "double",
          "value": 45.2
        }
      ],
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/9d020efd-4f2a-11e6-8a84-bae500000078/positions",
          "type": "lossposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "salesReturn": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/a8b8e1e3-3f85-11e6-8a84-bae50000008d",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
          "type": "salesreturn",
          "mediaType": "application/json"
        }
      }
    }
  ]
}
```

### Создать Списание 
Запрос на создание нового Списания. Для успешного создания необходимо в теле запроса указать следующие поля:

+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](#metadannye) `Необходимое`
+ **store** - Ссылка на склад в формате [Метаданных](#metadannye) `Необходимое`

> Пример создания нового Списания.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/loss"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "store": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/b72f4f02-9b8b-11e6-8af5-581e0000009b",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "organization": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/95920812-9609-11e6-8af5-581e000000d4",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "positions": [
              {
                "quantity": 23,
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/987148b8-9a09-11e6-8af5-581e0000006f",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              },
              {
                "quantity": 12,
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/987d77f1-9a09-11e6-8af5-581e00000074",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                    "type": "variant",
                    "mediaType": "application/json"
                  }
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Списания.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/b014dab4-4f42-11e6-8a84-bae500000006",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/loss/metadata",
    "type": "loss",
    "mediaType": "application/json"
  },
  "id": "b014dab4-4f42-11e6-8a84-bae500000006",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-07-21 15:57:32",
  "name": "00005",
  "externalCode": "itqCvT69hgSZFTJEL9cP70",
  "moment": "2016-07-21 15:57:32",
  "applicable": false,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 50000,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/b014dab4-4f42-11e6-8a84-bae500000006/positions",
      "type": "lossposition",
      "mediaType": "application/json",
      "size": 3,
      "limit": 1000,
      "offset": 0
    }
  },
  "salesReturn": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/166909e6-4a99-11e6-8a84-bae500000089",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
      "type": "salesreturn",
      "mediaType": "application/json"
    }
  }
}
```

### Массовое создание и обновление Списаний 
[Массовое создание и обновление](#sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Списаний.
В теле запроса нужно передать массив, содержащий JSON представления Списаний, которые вы хотите создать или обновить.
Обновляемые Списания должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Списаний

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/loss"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '[
            {
              "store": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/b72f4f02-9b8b-11e6-8af5-581e0000009b",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type": "store",
                  "mediaType": "application/json"
                }
              },
              "organization": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/95920812-9609-11e6-8af5-581e000000d4",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "positions": [
                {
                  "quantity": 23,
                  "assortment": {
                    "meta": {
                      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/987148b8-9a09-11e6-8af5-581e0000006f",
                      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  }
                },
                {
                  "quantity": 12,
                  "assortment": {
                    "meta": {
                      "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/987d77f1-9a09-11e6-8af5-581e00000074",
                      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                      "type": "variant",
                      "mediaType": "application/json"
                    }
                  }
                }
              ]
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/b014dab4-4f42-11e6-8a84-bae500000006",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/loss/metadata",
                "type": "loss",
                "mediaType": "application/json"
              },
              "name": "00606234",
              "externalCode": "3498142кук",
              "moment": "2016-07-21 15:57:32",
              "applicable": true,
              "sum": 50000,
              "organization": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "store": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type": "store",
                  "mediaType": "application/json"
                }
              },
              "positions": [],
              "salesReturn": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/9b83cb6b-3f80-11e6-8a84-bae5000000bb",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
                  "type": "salesreturn",
                  "mediaType": "application/json"
                }
              }
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Списаний.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/b014dab4-4f42-11e6-8a84-bae500000006",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/loss/metadata",
      "type": "loss",
      "mediaType": "application/json"
    },
    "id": "b014dab4-4f42-11e6-8a84-bae500000006",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-07-21 15:57:32",
    "name": "00005",
    "externalCode": "itqCvT69hgSZFTJEL9cP70",
    "moment": "2016-07-21 15:57:32",
    "applicable": false,
    "rate": {
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    },
    "sum": 50000,
    "organization": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "store": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "created": "2007-02-07 17:16:41",
    "positions": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/b014dab4-4f42-11e6-8a84-bae500000006/positions",
        "type": "lossposition",
        "mediaType": "application/json",
        "size": 3,
        "limit": 1000,
        "offset": 0
      }
    },
    "salesReturn": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/166909e6-4a99-11e6-8a84-bae500000089",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
        "type": "salesreturn",
        "mediaType": "application/json"
      }
    }
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/b014dab4-4f42-11e6-8a84-bae500000006",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/loss/metadata",
      "type": "loss",
      "mediaType": "application/json"
    },
    "id": "b014dab4-4f42-11e6-8a84-bae500000006",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-07-21 16:05:11",
    "name": "00606234",
    "externalCode": "3498142кук",
    "moment": "2016-07-21 15:57:32",
    "applicable": true,
    "rate": {
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    },
    "sum": 0,
    "organization": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "store": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "created": "2007-02-07 17:16:41",
    "positions": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/b014dab4-4f42-11e6-8a84-bae500000006/positions",
        "type": "lossposition",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    },
    "salesReturn": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/9b83cb6b-3f80-11e6-8a84-bae5000000bb",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
        "type": "salesreturn",
        "mediaType": "application/json"
      }
    }
  }
]
```

### Удалить Списание

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Списания.|

> Запрос на удаление Списания с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление Списания.

### Метаданные Списаний 
#### Метаданные Списаний 
Запрос на получение метаданных Списаний. Результат - объект JSON, включающий в себя:

+ **meta** - Ссылка на метаданные Списаний
+ **attributes** - Массив объектов доп. полей Списаний в формате [Метаданных](#metadannye)
+ **states** - Массив статусов Списаний
+ **createShared** - создавать новые Списания с меткой "Общий"

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](#rabota-s-dopolnitel-nymi-polyami).

> Метаданные Списаний

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/loss/metadata"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление метаданных Списаний.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/metadata/attributes/d0911efc-4f3d-11e6-8a84-bae500000081",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "d0911efc-4f3d-11e6-8a84-bae500000081",
      "name": "Строковое поле",
      "type": "string",
      "required": false
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/metadata/attributes/d0912ad5-4f3d-11e6-8a84-bae500000082",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "d0912ad5-4f3d-11e6-8a84-bae500000082",
      "name": "Процент",
      "type": "double",
      "required": true
    }
  ],
  "createShared": false
}
```

### Отдельное доп. поле

#### Отдельное доп. поле

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Доп. поля.|
 
> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/loss/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/metadata/attributes/d0912ad5-4f3d-11e6-8a84-bae500000082",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "d0912ad5-4f3d-11e6-8a84-bae500000082",
  "name": "Процент",
  "type": "double",
  "required": true
}
```

### Шаблон списания 
#### Шаблон списания 
> Запрос на получение предзаполненого стандартными значениями шаблона списания без связи с каким-либо документом.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/loss/new"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d ''  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного списания.

```json
{
  "applicable": false,
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2",
      "type": "lossposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    },
    "rows": []
  }
}
```

### Шаблон списания на основе 
Запрос на получение предзаполненного списания на основе возврата покупателя.
В результате запроса, будет создан предзаполненный шаблон списания на основе переданного
возврата покупателя.

> Пример с заказом (application/json)

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/loss/new"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "salesReturn": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/166909e6-4a99-11e6-8a84-bae500000089",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
                "type": "salesreturn",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного списания.

```json
{
  "applicable": false,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 28000,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/147c1f1b-32ca-11e6-8a84-bae500000004",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2",
      "type": "lossposition",
      "mediaType": "application/json",
      "size": 3,
      "limit": 1000,
      "offset": 0
    },
    "rows": [
      {
        "meta": {
          "type": "lossposition",
          "mediaType": "application/json"
        },
        "quantity": 1,
        "price": 20000,
        "assortment": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/20485cfd-2e62-11e6-8a84-bae500000112",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
          }
        }
      },
      {
        "meta": {
          "type": "lossposition",
          "mediaType": "application/json"
        },
        "quantity": 1,
        "price": 10000,
        "assortment": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/328b0454-2e62-11e6-8a84-bae500000118",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
          }
        }
      },
      {
        "meta": {
          "type": "lossposition",
          "mediaType": "application/json"
        },
        "quantity": 1,
        "price": 20000,
        "assortment": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/20485cfd-2e62-11e6-8a84-bae500000112",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=392c045c-2842-11e9-ac12-000a00000002"
          }
        }
      }
    ]
  },
  "salesReturn": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/166909e6-4a99-11e6-8a84-bae500000089",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
      "type": "salesreturn",
      "mediaType": "application/json"
    }
  }
}

```

### Списание

### Получить Списание

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Списания.|
 
> Запрос на получение отдельного списания с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Списания.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/6ddca2d7-4f28-11e6-8a84-bae500000066",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/loss/metadata",
    "type": "loss",
    "mediaType": "application/json"
  },
  "id": "6ddca2d7-4f28-11e6-8a84-bae500000066",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-07-21 15:22:54",
  "name": "00001",
  "externalCode": "o5GMiWUJhqhq1vmrUWwI-2",
  "moment": "2016-07-21 12:49:00",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/cdbc62de-3f68-11e6-8a84-bae500000050",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    },
    "value": 63
  },
  "sum": 3981730,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/metadata/attributes/d0912ad5-4f3d-11e6-8a84-bae500000082",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "d0912ad5-4f3d-11e6-8a84-bae500000082",
      "name": "Процент",
      "type": "double",
      "value": 0.2
    }
  ],
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/6ddca2d7-4f28-11e6-8a84-bae500000066/positions",
      "type": "lossposition",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Изменить Списание

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Списания.|
 
Запрос на обновление списания с указанным id.

> Пример запроса на обновление отдельного Списания.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "00606234",
            "externalCode": "3498142кук",
            "moment": "2016-07-21 15:57:32",
            "applicable": true,
            "sum": 50000,
            "organization": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "store": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "positions": [],
            "salesReturn": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/9b83cb6b-3f80-11e6-8a84-bae5000000bb",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
                "type": "salesreturn",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Списания.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/b014dab4-4f42-11e6-8a84-bae500000006",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/loss/metadata",
    "type": "loss",
    "mediaType": "application/json"
  },
  "id": "b014dab4-4f42-11e6-8a84-bae500000006",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-07-21 16:05:11",
  "name": "00606234",
  "externalCode": "3498142кук",
  "moment": "2016-07-21 15:57:32",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/b014dab4-4f42-11e6-8a84-bae500000006/positions",
      "type": "lossposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "salesReturn": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/9b83cb6b-3f80-11e6-8a84-bae5000000bb",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
      "type": "salesreturn",
      "mediaType": "application/json"
    }
  }
}
```

> Пример запроса на изменение Списания с дополнительными полями.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "00606234",
            "externalCode": "3498142кук",
            "moment": "2016-07-21 15:57:32",
            "applicable": true,
            "sum": 50000,
            "organization": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "store": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "positions": [],
            "salesReturn": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/9b83cb6b-3f80-11e6-8a84-bae5000000bb",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
                "type": "salesreturn",
                "mediaType": "application/json"
              }
            },
            "attributes": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/metadata/attributes/d0912ad5-4f3d-11e6-8a84-bae500000082",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "id": "d0912ad5-4f3d-11e6-8a84-bae500000082",
                "name": "Процент",
                "value": 0.7643
              },
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/metadata/attributes/d0911efc-4f3d-11e6-8a84-bae500000081",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "id": "d0911efc-4f3d-11e6-8a84-bae500000081",
                "name": "Строковое поле",
                "value": "Строковое значение"
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Списания.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/b014dab4-4f42-11e6-8a84-bae500000006",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/loss/metadata",
    "type": "loss",
    "mediaType": "application/json"
  },
  "id": "b014dab4-4f42-11e6-8a84-bae500000006",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-07-21 16:05:11",
  "name": "00606234",
  "externalCode": "3498142кук",
  "moment": "2016-07-21 15:57:32",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/metadata/attributes/d0911efc-4f3d-11e6-8a84-bae500000081",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "d0911efc-4f3d-11e6-8a84-bae500000081",
      "name": "Строковое поле",
      "type": "string",
      "value": "Строковое значение"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/metadata/attributes/d0912ad5-4f3d-11e6-8a84-bae500000082",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "d0912ad5-4f3d-11e6-8a84-bae500000082",
      "name": "Процент",
      "type": "double",
      "value": 0.7643
    }
  ],
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/b014dab4-4f42-11e6-8a84-bae500000006/positions",
      "type": "lossposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "salesReturn": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/9b83cb6b-3f80-11e6-8a84-bae5000000bb",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/salesreturn/metadata",
      "type": "salesreturn",
      "mediaType": "application/json"
    }
  }
}
```

### Позиции Списания 
Отдельный ресурс для управления позициями Списания. С его помощью вы можете управлять позициями большого документа, количество строк в котором превышает лимит на количество строк, сохраняемых вместе с документом. Этот лимит равен 100. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](#rabota-s-poziciqmi-dokumentow).

### Получить позиции Списания 
Запрос на получение списка всех позиций данного Списания.

- **meta** [Метаданные](#metadannye) о выдаче,
- **context** - [Метаданные](#metadannye) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой позиции Списания.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Списания.|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить позиции Списания

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций отдельного Списания.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions",
    "type": "lossposition",
    "mediaType": "application/json",
    "size": 3,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions/0b615a22-4f42-11e6-8a84-bae50000008e",
        "type": "lossposition",
        "mediaType": "application/json"
      },
      "id": "0b615a22-4f42-11e6-8a84-bae50000008e",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 2,
      "price": 20000,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/20485cfd-2e62-11e6-8a84-bae500000112",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=392c045c-2842-11e9-ac12-000a00000002"
        }
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions/0b61605f-4f42-11e6-8a84-bae50000008f",
        "type": "lossposition",
        "mediaType": "application/json"
      },
      "id": "0b61605f-4f42-11e6-8a84-bae50000008f",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 6,
      "price": 10000,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/328b0454-2e62-11e6-8a84-bae500000118",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
        }
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions/0b616604-4f42-11e6-8a84-bae500000090",
        "type": "lossposition",
        "mediaType": "application/json"
      },
      "id": "0b616604-4f42-11e6-8a84-bae500000090",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "quantity": 1,
      "price": 33000,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/328b0454-2e62-11e6-8a84-bae500000118",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
        }
      }
    }
  ]
}
```

### Создать позицию Списания 
Запрос на создание новой позиции в Списании.
Для успешного создания необходимо в теле запроса указать следующие поля:

+ **assortment** - Ссылка на товар/услугу/серию/модификацию, которую представляет собой позиция.
Также можно указать поле с именем **service**, **consignment**, **variant** в соответствии с тем,
чем является указанная позиция. Подробнее об этом поле можно прочитать в описании [позиции Списания](#pozicii-spisaniya)
+ **quantity** - Количество указанной позиции. Должно быть положительным, иначе возникнет ошибка.
Одновременно можно создать как одну так и несколько позиций Списания. Все созданные данным запросом позиции
будут добавлены к уже существующим.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Списания.|

> Пример создания позиций в Списании.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '[
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions/0b615a22-4f42-11e6-8a84-bae50000008e",
                "type": "lossposition",
                "mediaType": "application/json"
              },
              "quantity": 321,
              "price": 53000,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/20485cfd-2e62-11e6-8a84-bae500000112",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "reason": "поломка"
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions/0b615a22-4f42-11e6-8a84-bae50000008e",
                "type": "lossposition",
                "mediaType": "application/json"
              },
              "quantity": 12,
              "price": 2645,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/20485cfd-2e62-11e6-8a84-bae500000112",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "reason": "брак"
            }
          ]
'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной позиции отдельного Списания.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions/0b615a22-4f42-11e6-8a84-bae50000008e",
      "type": "lossposition",
      "mediaType": "application/json"
    },
    "id": "0b615a22-4f42-11e6-8a84-bae50000008e",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 321,
    "price": 53000,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/20485cfd-2e62-11e6-8a84-bae500000112",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
      }
    },
    "reason": "поломка"
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions/0b615a22-4f42-11e6-8a84-bae50000008e",
      "type": "lossposition",
      "mediaType": "application/json"
    },
    "id": "0b615a22-4f42-11e6-8a84-bae50000008e",
    "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
    "quantity": 12,
    "price": 2645,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/20485cfd-2e62-11e6-8a84-bae500000112",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002"
      }
    },
    "reason": "брак"
  }
]
```

### Позиция Списания
 
### Получить позицию

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Списания.|
|positionID|  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b20* id позиции.|
 
> Запрос на получение отдельной позиции Списания с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции Списания.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20",
    "type": "lossposition",
    "mediaType": "application/json"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b20",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "quantity": 2,
  "price": 20000,
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/20485cfd-2e62-11e6-8a84-bae500000112",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002"
    }
  }
}
```

### Изменить позицию 
Запрос на обновление отдельной позиции Списания. Для обновления позиции нет каких-либо
 обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Списания.|
|positionID|  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b20* id позиции.|
 
> Пример запроса на обновление отдельной позиции в Списании.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "quantity": 172,
            "price": 7777,
            "reason": "Разорван"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции Списания.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20",
    "type": "lossposition",
    "mediaType": "application/json"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b20",
  "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
  "quantity": 172,
  "price": 7777,
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/20485cfd-2e62-11e6-8a84-bae500000112",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002"
    }
  },
  "reason": "Разорван"
}
```

### Удалить позицию

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Списания.|
|positionID|  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b20* id позиции.|
 
> Запрос на удаление отдельной позиции Списания с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/loss/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b20"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление позиции Списания.
