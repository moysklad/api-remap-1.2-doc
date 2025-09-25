## Заказ на производство
### Заказы на производство 
Средствами JSON API можно создавать и обновлять сведения о Заказах на производство, запрашивать списки Заказов и сведения по отдельным Заказам на производство. Позициями Заказов можно управлять как в составе отдельного Заказа на производство, так и отдельно - с помощью специальных ресурсов для управления позициями Заказа. Кодом сущности для Заказа на производство в составе JSON API является ключевое слово **processingorder**. Больше о Заказах на производство и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203325613-%D0%A1%D0%B1%D0%BE%D1%80%D0%BE%D1%87%D0%BD%D1%8B%D0%B5-%D0%B8-%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%B8).
#### Атрибуты сущности

| Название                  | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                                        |
| ------------------------- |:----------------------------------------------------------| :------------------------------------------------------------------------------------------------------------------------------------------------ |:------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**             | UUID                                                      | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                            |
| **applicable**            | Boolean                                                   | `=` `!=`                                                                                                                                          | Отметка о проведении<br>`+Обязательное при ответе`                                                                                              |
| **attributes**            | Array(Object)                                             | [Операторы доп. полей](#/general#4-filtraciya-po-dopolnitelnym-polyam) | Коллекция метаданных доп. полей. [Поля объекта](#/general#3-rabota-s-dopolnitelnymi-polyami)<br>`+Только для чтения` |
| **code**                  | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Код Заказа на производство                                                                                                                      |
| **created**               | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата создания<br>`+Обязательное при ответе` `+Только для чтения`                                                                                |
| **deleted**               | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего удаления Заказа на производство<br>`+Только для чтения`                                                                       |
| **deliveryPlannedMoment** | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Планируемая дата производства                                                                                                                   |
| **description**           | String(4096)                                              | `=` `!=` `~` `~=` `=~`                                                                                                                            | Комментарий Заказа на производство                                                                                                              |
| **externalCode**          | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код Заказа на производство<br>`+Обязательное при ответе`                                                                                |
| **files**                 | MetaArray                                                 |                                                                                                                                                   | Метаданные массива [Файлов](#/dictionaries/files#2-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand`   |
| **group**                 | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                        |
| **id**                    | UUID                                                      | `=` `!=`                                                                                                                                          | ID Заказа на производство<br>`+Обязательное при ответе` `+Только для чтения`                                                                    |
| **meta**                  | [Meta](#/general#3-metadannye) |                                                                                                                                                   | Метаданные Заказа на производство<br>`+Обязательное при ответе` `+Только для чтения`                                                            |
| **moment**                | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата документа<br>`+Обязательное при ответе`                                                                                                    |
| **name**                  | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование Заказа на производство<br>`+Обязательное при ответе` `+Необходимо при создании`                                                    |
| **organization**          | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                            |
| **owner**                 | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Expand`                                                                                                               |
| **positions**             | MetaArray                                                 |                                                                                                                                                   | Метаданные позиций Заказа на производство<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                    |
| **printed**               | Boolean                                                   | `=` `!=`                                                                                                                                          | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                        |
| **processingPlan**        | [Meta](#/general#3-metadannye) |                                                                                                                                                   | Метаданные Техкарты<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                          |
| **project**               | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Метаданные проекта<br>`+Expand`                                                                                                                 |
| **published**             | Boolean                                                   | `=` `!=`                                                                                                                                          | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                      |
| **quantity**              | Float                                                     | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Объем производства<br>`+Обязательное при ответе`                                                                                                |
| **shared**                | Boolean                                                   | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе` `+Только для чтения`                                                                                 |
| **state**                 | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Метаданные статуса Заказа на производство<br>`+Expand`                                                                                          |
| **store**                 | [Meta](#/general#3-metadannye) |                                                                                                                                                   | Метаданные склада<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                            |
| **syncId**                | UUID                                                      | `=` `!=`                                                                                                                                          | ID синхронизации. После заполнения недоступен для изменения<br>`+Только для чтения`                                                             |
| **updated**               | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновленияЗаказа на производство<br>`+Обязательное при ответе` `+Только для чтения`                                           |

#### Связи с другими документами
| Название                       | Описание                                                                                                          |
| ------------------------------ |:------------------------------------------------------------------------------------------------------------------|
| **processings**                | Массив ссылок на связанные техоперации в формате [Метаданных](#/general#3-metadannye)  |

#### Позиции Заказа на производство
Позиции Заказа - это список товаров/модификаций, соответствующих материалам техкарты.
Объект позиции Заказа содержит следующие поля:

| Название       | Тип                                                      | Описание                                                                                                                                                                                                                                                 |
| -------------- |:---------------------------------------------------------| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **accountId**  | UUID                                                     | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                     |
| **assortment** | [Meta](#/general#3-metadannye)| Метаданные товара/услуги/серии/модификации, которую представляет собой позиция<br>`+Обязательное при ответе` `+Expand`                                                                                                                                   |
| **id**         | UUID                                                     | ID позиции<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                                            |
| **pack**       | Object                                                   | Упаковка Товара. [Подробнее тут](#/dictionaries/product#5-upakovki-tovara)                                                                                                                               |
| **quantity**   | Float                                                    | Количество товаров/услуг данного вида в позиции. Если позиция - товар, у которого включен учет по серийным номерам, то значение в этом поле всегда будет равно количеству серийных номеров для данной позиции в документе.<br>`+Обязательное при ответе` |
| **reserve**    | Float                                                    | Резерв данной позиции<br>`+Обязательное при ответе`                                                                                                                                                                                                      |

С позициями можно работать с помощью специальных ресурсов для управления позициями Заказа,
а также в составе отдельного Заказа на производство. При работе в составе отдельного Заказа на производство,
вы можете отправлять запросы на создание отдельного Заказа на производство с включенным в тело запроса
массивом позиций Заказа.
Также, при работе в составе отдельного Заказа на производство, можно отправлять запросы на обновление списка позиций
с включенным в тело запроса массивом позиций Заказа. Позиции с новыми товарами не могут быть добавлены в Заказ.

О работе с доп. полями Заказов на производство можно прочитать [здесь](#/general#3-rabota-s-dopolnitelnymi-polyami)

### Получить список Заказов на производство 
Запрос всех Заказов на производство на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                           |
| ----------- | :-------------------------------------------------------- | :----------------------------------------------------------------- |
| **meta**    | [Meta](#/general#3-metadannye) | Метаданные о выдаче,                                               |
| **context** | [Meta](#/general#3-metadannye) | Метаданные о сотруднике, выполнившем запрос.                       |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Заказы на производство. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                   |

> Получить список Заказов на производство

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingorder"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Заказов на производство.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
    "type": "processingorder",
    "mediaType": "application/json",
    "size": 5,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/5fbf79f4-adac-11e6-5bed-427b0000006a",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
        "type": "processingorder",
        "mediaType": "application/json"
      },
      "id": "5fbf79f4-adac-11e6-5bed-427b0000006a",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-21 12:17:56.000",
      "name": "da",
      "description": "dsa",
      "externalCode": "Tzn6ewsegfp90BCJ6xgWe2",
      "moment": "2016-11-18 19:30:00.000",
      "applicable": true,
      "printed": true,
      "published": true,
      "store": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "project": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/7f3a7d7a-97a1-11e6-5bed-427b0000009c",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "deliveryPlannedMoment": "2016-11-22 12:17:00.000",
      "positions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/5fbf79f4-adac-11e6-5bed-427b0000006a/positions",
          "type": "processingorderposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "quantity": 1,
      "processingPlan": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
          "type": "processingplan",
          "mediaType": "application/json"
        }
      },
      "processings": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/bcd6e6b5-b002-11e6-5bed-427b0000000b",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
            "type": "processing",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/8450f4de-b002-11e6-5bed-427b00000000",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
            "type": "processing",
            "mediaType": "application/json"
          }
        }
      ]
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/80191fbd-afcf-11e6-5bed-427b00000000",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
        "type": "processingorder",
        "mediaType": "application/json"
      },
      "id": "80191fbd-afcf-11e6-5bed-427b00000000",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-21 12:47:22",
      "name": "11da",
      "description": "dsa",
      "externalCode": "Tzn6ewsegfp90BCJ6xgWe2",
      "moment": "2016-11-18 19:30:00.000",
      "applicable": true,
      "printed": true,
      "published": true,
      "store": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "project": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/7f3a7d7a-97a1-11e6-5bed-427b0000009c",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "deliveryPlannedMoment": "2016-11-22 12:17:00.000",
      "positions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/80191fbd-afcf-11e6-5bed-427b00000000/positions",
          "type": "processingorderposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "quantity": 1,
      "processingPlan": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
          "type": "processingplan",
          "mediaType": "application/json"
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/8cbaa297-afc8-11e6-5bed-427b00000064",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
        "type": "processingorder",
        "mediaType": "application/json"
      },
      "id": "8cbaa297-afc8-11e6-5bed-427b00000064",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-21 11:58:36.000",
      "name": "1",
      "externalCode": "JZQBX9gshwrrTRcHkCcaR2",
      "moment": "2016-11-21 11:47:00.000",
      "applicable": true,
      "printed": true,
      "published": true,
      "store": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "project": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/7f3a7d7a-97a1-11e6-5bed-427b0000009c",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "deliveryPlannedMoment": "2016-11-02 11:57:00.000",
      "positions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/8cbaa297-afc8-11e6-5bed-427b00000064/positions",
          "type": "processingorderposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "quantity": 1,
      "processingPlan": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
          "type": "processingplan",
          "mediaType": "application/json"
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/b5556153-b164-11e6-5bed-427b0000006f",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
        "type": "processingorder",
        "mediaType": "application/json"
      },
      "id": "b5556153-b164-11e6-5bed-427b0000006f",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-23 13:07:57",
      "name": "Заказ на производство",
      "description": "Комментарий",
      "externalCode": "wWAJXKZFgoOZVKd41Dzzz2",
      "moment": "2016-11-23 13:00:00.000",
      "applicable": true,
      "printed": true,
      "published": true,
      "store": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "project": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/7f3a7d7a-97a1-11e6-5bed-427b0000009c",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "deliveryPlannedMoment": "2016-11-23 13:07:00",
      "positions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/b5556153-b164-11e6-5bed-427b0000006f/positions",
          "type": "processingorderposition",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "quantity": 5,
      "processingPlan": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
          "type": "processingplan",
          "mediaType": "application/json"
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c7201428-afcc-11e6-5bed-427b00000068",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
        "type": "processingorder",
        "mediaType": "application/json"
      },
      "id": "c7201428-afcc-11e6-5bed-427b00000068",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-21 17:46:15.000",
      "name": "2",
      "externalCode": "5nSDOrCfjyxt0W1RbY7XZ3",
      "moment": "2016-11-21 12:27:00.000",
      "applicable": true,
      "printed": true,
      "published": true,
      "store": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "project": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/7f3a7d7a-97a1-11e6-5bed-427b0000009c",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "deliveryPlannedMoment": "2016-11-02 17:43:00.000",
      "positions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c7201428-afcc-11e6-5bed-427b00000068/positions",
          "type": "processingorderposition",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "quantity": 1,
      "processingPlan": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
          "type": "processingplan",
          "mediaType": "application/json"
        }
      },
      "processings": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/processing/493ddf6b-aff9-11e6-5bed-427b00000076",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processing/metadata",
            "type": "processing",
            "mediaType": "application/json"
          }
        }
      ]
    }
  ]
}
```

### Создать Заказ на производство 
Запрос на создание нового Заказа на производство.
Обязательные для создания поля:

+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](#/general#3-metadannye)
+ **processingPlan** - Ссылка на техкарту в формате [Метаданных](#/general#3-metadannye)
+ **positions** - Ссылка на позиции в Заказе в формате [Метаданных](#/general#3-metadannye)

> Пример создания нового Заказа с телом запроса, содержащим только необходимые поля.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/processingorder"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "organization": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "processingPlan": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
                "type": "processingplan",
                "mediaType": "application/json"
              }
            },
            "positions": [
              {
                "quantity": 111,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              }
            ]
          }
'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Заказа на производство.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
    "type": "processingorder",
    "mediaType": "application/json"
  },
  "id": "c49e83b3-01af-11e6-9464-e4de00000026",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-14 13:08:58",
  "name": "000034",
  "externalCode": "DAD9peGij6sDNii49Dkam2",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2016-04-19 13:50:24",
  "applicable": false,
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
      "type": "processingorderposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "quantity": 5,
  "processingPlan": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  }
}
```

> Пример создания нового Заказа с более насыщенным телом запроса.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/processingorder"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "name": "000034",
            "owner": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "type": "employee",
                "mediaType": "application/json"
              }
            },
            "shared": false,
            "group": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
                "type": "group",
                "mediaType": "application/json"
              }
            },
            "organization": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "moment": "2016-04-19 13:50:24",
            "applicable": false,
            "state": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
                "type": "state",
                "mediaType": "application/json"
              }
            },
            "quantity": 5,
            "processingPlan": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
                "type": "processingplan",
                "mediaType": "application/json"
              }
            },
            "positions": [
              {
                "quantity": 111,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Заказа на производство.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
    "type": "processingorder",
    "mediaType": "application/json"
  },
  "id": "c49e83b3-01af-11e6-9464-e4de00000026",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-14 13:08:58",
  "name": "000034",
  "externalCode": "DAD9peGij6sDNii49Dkam2",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2016-04-19 13:50:24",
  "applicable": false,
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
      "type": "processingorderposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "quantity": 5,
  "processingPlan": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  }
}

```

> Пример запроса на создание Заказа на производство с доп. полями.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/processingorder"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "organization": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "processingPlan": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
                  "type": "processingplan",
                  "mediaType": "application/json"
                }
            },
            "positions": [
              {
                "quantity": 111,
                "assortment": {
                   "meta": {
                       "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a",
                       "type": "product",
                       "mediaType": "application/json"
                   }
                }
              }
            ],
            "attributes": [
              {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/attributes/c2ecd338-015e-11e6-9464-e4de0000008f",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "Атрибут заказа",
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Заказа на производство.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
    "type": "processingorder",
    "mediaType": "application/json"
  },
  "id": "c49e83b3-01af-11e6-9464-e4de00000026",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-14 13:08:58",
  "name": "000034",
  "externalCode": "DAD9peGij6sDNii49Dkam2",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2016-04-19 13:50:24",
  "applicable": false,
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
      "type": "processingorderposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "quantity": 5,
  "processingPlan": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/attributes/c2ecd338-015e-11e6-9464-e4de0000008f",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c2ecd338-015e-11e6-9464-e4de0000008f",
      "name": "AttributeName1",
      "type": "string",
      "value": "Атрибут заказа"
    }
  ]
}
```

### Массовое создание и обновление Заказов на производство 
[Массовое создание и обновление](#/general#3-sozdanie-i-obnovlenie-neskolkih-obuektov) Заказов на производство.
В теле запроса нужно передать массив, содержащий JSON представления Заказов на производство, которые вы хотите создать или обновить.
Обновляемые Заказы на производство должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Заказов на производство

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/processingorder"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '[
            {
              "organization": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "processingPlan": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
                  "type": "processingplan",
                  "mediaType": "application/json"
                }
              },
              "positions": [
                {
                  "quantity": 111,
                  "assortment": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a",
                      "type": "product",
                      "mediaType": "application/json"
                    }
                  }
                }
              ]
            },
            {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
                "type": "processingorder",
                "mediaType": "application/json"
              },
              "name": "000034",
              "quantity": 5,
              "processingPlan": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
                  "type": "processingplan",
                  "mediaType": "application/json"
                }
              }
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Заказов на производство.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
      "type": "processingorder",
      "mediaType": "application/json"
    },
    "id": "c49e83b3-01af-11e6-9464-e4de00000026",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
    "updated": "2016-04-14 13:08:58",
    "name": "000034",
    "externalCode": "DAD9peGij6sDNii49Dkam2",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "moment": "2016-04-19 13:50:24",
    "applicable": false,
    "sum": 0,
    "organization": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "state": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
        "type": "state",
        "mediaType": "application/json"
      }
    },
    "created": "2007-02-07 17:16:41",
    "printed": true,
    "published": true,
    "positions": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
        "type": "processingorderposition",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
      }
    },
    "quantity": 5,
    "processingPlan": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
        "type": "processingplan",
        "mediaType": "application/json"
      }
    }
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
      "type": "processingorder",
      "mediaType": "application/json"
    },
    "id": "c49e83b3-01af-11e6-9464-e4de00000026",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
    "updated": "2016-04-14 13:08:58",
    "name": "000034",
    "externalCode": "DAD9peGij6sDNii49Dkam2",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "moment": "2016-04-19 13:50:24",
    "applicable": false,
    "sum": 0,
    "organization": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "state": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
        "type": "state",
        "mediaType": "application/json"
      }
    },
    "created": "2007-02-07 17:16:41",
    "printed": true,
    "published": true,
    "positions": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
        "type": "processingorderposition",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
      }
    },
    "quantity": 5,
    "processingPlan": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
        "type": "processingplan",
        "mediaType": "application/json"
      }
    }
  }
]
```

### Удалить Заказ на производство

**Параметры**

| Параметр | Описание                                                                                       |
| :------- | :--------------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа на производство. |
 
> Запрос на удаление Заказа на производство с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление Заказа на производство.

### Массовое удаление Заказов на производство

В теле запроса нужно передать массив, содержащий JSON метаданных Заказов на производство, которые вы хотите удалить.


> Запрос на массовое удаление Заказов на производство. 

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
  -d '[
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b1",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
                "type": "processingorder",
                "mediaType": "application/json"
            }
        },
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b2",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
                "type": "processingorder",
                "mediaType": "application/json"
            }
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Заказов на производство.

```json
[
  {
    "info":"Сущность 'processingorder' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'processingorder' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
``` 

### Метаданные Заказов на производство 
Запрос на получение метаданных Заказов на производство. Результат - объект JSON, включающий в себя:

| Параметр                       | Описание                                                                                                                     |
| ------------------------------ | :--------------------------------------------------------------------------------------------------------------------------- |
| **meta**                       | Ссылка на метаданные Заказов на производство                                                                                 |
| **attributes**                 | Массив объектов доп. полей Заказов на производство в формате [Метаданных](#/general#3-metadannye) |
| **states**                     | Массив статусов Заказов на производство                                                                                      |
| **createShared**               | создавать новые Заказы на производство с меткой "Общий"                                                                      |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](#/general#3-rabota-s-dopolnitelnymi-polyami).

> Метаданные Заказов на производство

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Заказов на производство.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/attributes/c2ecd338-015e-11e6-9464-e4de0000008f",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c2ecd338-015e-11e6-9464-e4de0000008f",
      "name": "AttributeName1",
      "type": "string",
      "required": false
    }
  ],
  "states": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56c504-2e58-11e6-8a84-bae500000069",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Новый",
      "color": 15106326,
      "stateType": "Regular",
      "entityType": "processingorder"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56cae3-2e58-11e6-8a84-bae50000006a",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56cae3-2e58-11e6-8a84-bae50000006a",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Подтвержден",
      "color": 40931,
      "stateType": "Regular",
      "entityType": "processingorder"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56cf4f-2e58-11e6-8a84-bae50000006b",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56cf4f-2e58-11e6-8a84-bae50000006b",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Собран",
      "color": 8767198,
      "stateType": "Regular",
      "entityType": "processingorder"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56d433-2e58-11e6-8a84-bae50000006c",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56d433-2e58-11e6-8a84-bae50000006c",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Отгружен",
      "color": 10774205,
      "stateType": "Regular",
      "entityType": "processingorder"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56d92f-2e58-11e6-8a84-bae50000006d",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56d92f-2e58-11e6-8a84-bae50000006d",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Доставлен",
      "color": 8825440,
      "stateType": "Successful",
      "entityType": "processingorder"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56de0a-2e58-11e6-8a84-bae50000006e",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56de0a-2e58-11e6-8a84-bae50000006e",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Возврат",
      "color": 15280409,
      "stateType": "Unsuccessful",
      "entityType": "processingorder"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56e2b4-2e58-11e6-8a84-bae50000006f",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56e2b4-2e58-11e6-8a84-bae50000006f",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Отменен",
      "color": 15280409,
      "stateType": "Unsuccessful",
      "entityType": "processingorder"
    }
  ],
  "createShared": false
}

```

### Отдельное доп. поле



**Параметры**

| Параметр | Описание                                                                          |
| :------- | :-------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Доп. поля. |

 
> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/attributes/57ab884e-558b-11e6-8a84-bae500000078",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "57ab884e-558b-11e6-8a84-bae500000078",
  "name": "AttributeName1",
  "type": "productfolder",
  "required": false
}
```

### Шаблон Заказа на производство 

#### Шаблон Заказа на производство на основе 
Запрос на получение предзаполненного заказа на основе другого документа.
В результате запроса будет создан предзаполненный шаблон заказа на основе переданного документа.

> Запрос на получение шаблона заказа на основе техкарты.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/new"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "processingPlan": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/5fbf79f4-adac-11e6-5bed-427b0000006a",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
                "type": "processingplan",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного заказа.

```json
{
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2016-12-05 14:35:47",
  "applicable": true,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "quantity": 1,
  "processingPlan": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/1a18770e-ad9a-11e6-5bed-427b00000064",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "rows": [
      {
        "quantity": 1,
        "assortment": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
            "type": "product",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
          }
        }
      }
    ]
  }
}
```

### Запросы - Заказ на производство

### Получить Заказ на производство

**Параметры**

| Параметр | Описание                                                                                       |
| :------- | :--------------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа на производство. |
 
> Запрос на получение отдельного Заказа на производство с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Заказа на производство.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/b5556153-b164-11e6-5bed-427b0000006f",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
    "type": "processingorder",
    "mediaType": "application/json"
  },
  "id": "b5556153-b164-11e6-5bed-427b0000006f",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/d5ad957e-91f1-11e6-5bed-427b0000002a",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/d55da707-91f1-11e6-5bed-427b00000001",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-23 13:07:57",
  "name": "Заказ на производство",
  "description": "Комментарий",
  "externalCode": "wWAJXKZFgoOZVKd41Dzzz2",
  "moment": "2016-11-23 13:00:00",
  "applicable": true,
  "store": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/store/d5e311c0-91f1-11e6-5bed-427b00000053",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "project": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/7f3a7d7a-97a1-11e6-5bed-427b0000009c",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/a1331985-a1c8-11e6-5bed-427b00000084",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "deliveryPlannedMoment": "2016-11-23 13:07:00",
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/b5556153-b164-11e6-5bed-427b0000006f/positions",
      "type": "processingorderposition",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "quantity": 5,
  "processingPlan": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  }
}
```

### Изменить Заказ на производство 
Запрос на обновление Заказа на производство с указанным id.
В теле запроса необходимо указать поле meta **processingPlan** (даже если оно не меняется), а также указать те поля, 
которые необходимо изменить у Заказа на производство, кроме тех, что помечены `Только для чтения` в описании 
[атрибутов Заказа на производство](#/documents/processingorder#2-zakaz-na-proizvodstvo).

**Параметры**

| Параметр | Описание                                                                                       |
| :------- | :--------------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа на производство. |

> Пример запроса на обновление отдельного Заказа на производство.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "name": "000034",
            "processingPlan": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
                "type": "processingplan",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Заказа на производство.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
    "type": "processingorder",
    "mediaType": "application/json"
  },
  "id": "c49e83b3-01af-11e6-9464-e4de00000026",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-14 13:08:58",
  "name": "000034",
  "externalCode": "DAD9peGij6sDNii49Dkam2",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2016-04-19 13:50:24",
  "applicable": false,
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
      "type": "processingorderposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "quantity": 5,
  "processingPlan": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  }
}
```

> Пример запроса на изменение Заказа на производство с дополнительными полями.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "processingPlan": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
                "type": "processingplan",
                "mediaType": "application/json"
              }
            },
            "attributes": [
              {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/attributes/c2ecd338-015e-11e6-9464-e4de0000008f",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "Обновленный Атрибут заказа",
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Заказа на производство.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
    "type": "processingorder",
    "mediaType": "application/json"
  },
  "id": "c49e83b3-01af-11e6-9464-e4de00000026",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-14 13:08:58",
  "name": "000034",
  "externalCode": "DAD9peGij6sDNii49Dkam2",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2016-04-19 13:50:24",
  "applicable": false,
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
      "type": "processingorderposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "quantity": 5,
  "processingPlan": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/attributes/c2ecd338-015e-11e6-9464-e4de0000008f",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "c2ecd338-015e-11e6-9464-e4de0000008f",
      "name": "AttributeName1",
      "type": "string",
      "value": "Обновленный Атрибут заказа"
    }
  ]
}
```

> Пример запроса на обновление Заказа на производство с позициями в теле запроса.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "processingPlan": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
                "type": "processingplan",
                "mediaType": "application/json"
              }
            },
            "positions": [
              {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/34efe2ee-015e-11e6-9464-e4de0000006b/positions/34f6344f-015e-11e6-9464-e4de0000006c",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
                  "type": "processingorderposition",
                  "mediaType": "application/json"
                },
                "id": "34f6344f-015e-11e6-9464-e4de0000006c",
                "quantity": 10,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/8b382799-f7d2-11e5-8a84-bae5000003a5",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              },
              {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/34efe2ee-015e-11e6-9464-e4de0000006b/positions/34f6344f-015e-11e6-9464-e4de0000007c",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
                  "type": "processingorderposition",
                  "mediaType": "application/json"
                },
                "id": "34f6344f-015e-11e6-9464-e4de0000007c",
                "quantity": 20,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/be903062-f504-11e5-8a84-bae50000019a",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              },
              {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/34efe2ee-015e-11e6-9464-e4de0000006b/positions/34f6344f-015e-11e6-9464-e4de0000008c",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
                  "type": "processingorderposition",
                  "mediaType": "application/json"
                },
                "id": "34f6344f-015e-11e6-9464-e4de0000008c",
                "quantity": 30,
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/c02e3a5c-007e-11e6-9464-e4de00000006",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Заказа на производство.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
    "type": "processingorder",
    "mediaType": "application/json"
  },
  "id": "c49e83b3-01af-11e6-9464-e4de00000026",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-14 13:08:58",
  "name": "000034",
  "externalCode": "DAD9peGij6sDNii49Dkam2",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2016-04-19 13:50:24",
  "applicable": false,
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/c49e83b3-01af-11e6-9464-e4de00000026/positions",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
      "type": "processingorderposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "quantity": 5,
  "processingPlan": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/c38e50b0-acdc-11e6-5bed-427b0000009e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingplan/metadata",
      "type": "processingplan",
      "mediaType": "application/json"
    }
  }
}
```

### Управление позициями Заказа на производство 
Отдельный ресурс для управления позициями Заказа на производство. С его помощью вы можете управлять позициями большого документа, количество строк в котором превышает лимит на количество строк, сохраняемых вместе с документом. Этот лимит равен 1000. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](#/general#3-rabota-s-poziciyami-dokumentov).

### Получить позиции Заказа на производство 
Запрос на получение списка всех позиций данного Заказа на производство.


| Название    | Тип                                                       | Описание                                                                   |
| ----------- | :-------------------------------------------------------- | :------------------------------------------------------------------------- |
| **meta**    | [Meta](#/general#3-metadannye) | Метаданные о выдаче,                                                       |
| **context** | [Meta](#/general#3-metadannye) | Метаданные о сотруднике, выполнившем запрос.                               |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой позиции Заказа на производство. |

**Параметры**

| Параметр   | Описание                                                                                                                               |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа на производство.                                         |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить позиции Заказа на производство

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19/positions"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций отдельного Заказа на производство.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19/positions",
    "type": "processingorderposition",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19/positions/c7218ccd-afcc-11e6-5bed-427b00000069",
        "type": "processingorderposition",
        "mediaType": "application/json"
      },
      "id": "c7218ccd-afcc-11e6-5bed-427b00000069",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "quantity": 45,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
        }
      },
      "reserve": 45
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19/positions/c72196c6-afcc-11e6-5bed-427b0000006a",
        "type": "processingorderposition",
        "mediaType": "application/json"
      },
      "id": "c72196c6-afcc-11e6-5bed-427b0000006a",
      "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
      "quantity": 45,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/1267a23f-acdc-11e6-5bed-427b00000086",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
        }
      },
      "reserve": 45
    }
  ]
}
```

### Позиция Заказа на производство 
Отдельная позиция Заказа с указанным id позиции.

### Получить позицию

**Параметры**

| Параметр       | Описание                                                                                               |
| :------------- | :----------------------------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа на производство.         |
| **positionID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции Заказа на производство. |
 
> Запрос на получение отдельной позиции Заказа с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции Заказа на производство.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
    "type": "processingorderposition",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "d55cbfba-91f1-11e6-5bed-427b00000000",
  "quantity": 45,
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/0de151c1-acdc-11e6-5bed-427b00000080",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
    }
  },
  "reserve": 45
}

```

### Изменить позицию 
Запрос на обновление отдельной позиции Заказа. Для обновления позиции нет каких-либо
обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

| Параметр       | Описание                                                                                               |
| :------------- | :----------------------------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа на производство.         |
| **positionID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции Заказа на производство. |

> Пример запроса на обновление отдельной позиции в Заказе на производство.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "meta": {
              "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
              "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
              "type": "processingorderposition",
              "mediaType": "application/json"
            },
            "id": "34f6344f-015e-11e6-9464-e4de0000006c",
            "quantity": 111,
            "assortment": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a",
                "type": "product",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции Заказа на производство.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/metadata",
    "type": "processingorderposition",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "quantity": 111,
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
    }
  },
  "reserve": 0
}
```

### Удалить позицию

**Параметры**

| Параметр       | Описание                                                                                               |
| :------------- | :----------------------------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Заказа на производство.         |
| **positionID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции Заказа на производство. |
 
> Запрос на удаление позиции Заказа на производство с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление позиции Заказа на производство.

### Массовое удаление позиций

**Параметры**

| Параметр       | Описание                                                                                       |
| :------------- |:-----------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 3e1c03bb-684f-11ee-ac12-000c000000b0* id Заказа на производство. |

> Запрос на массовое удаление позиций Заказа на производство.

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/3e1c03bb-684f-11ee-ac12-000c000000b0/positions/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/3e1c03bb-684f-11ee-ac12-000c000000b0/positions/7fce2da5-684d-11ee-ac12-000c000000a2",
            "type": "processingorderposition",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingorder/3e1c03bb-684f-11ee-ac12-000c000000b0/positions/7fce37a5-684d-11ee-ac12-000c000000a3",
            "type": "processingorderposition",
            "mediaType": "application/json"
          }
        }
      ]'  
```

> Response 200 (application/json)
Успешное удаление позиций Заказа на производство.
