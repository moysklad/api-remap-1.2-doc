## Шаблон печатной формы
Средствами JSON API можно запрашивать списки шаблонов печатных форм для сущностей. Скрытые печатные формы не попадут в результат запроса. Кодом сущности для стандартных шаблонов в составе JSON API является ключевое слово **embeddedtemplate**, а для пользовательских **customtemplate**.

#### Стандартные шаблоны 
#### Атрибуты сущности

| Название    | Тип                                                       | Описание                                                      |
| ----------- | :-------------------------------------------------------- | :------------------------------------------------------------ |
| **content** | URL                                                       | Ссылка на скачивание<br>`+Обязательное при ответе`            |
| **id**      | UUID                                                      | ID шаблона<br>`+Обязательное при ответе`                      |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Стандартного шаблона<br>`+Обязательное при ответе` |
| **name**    | String(255)                                               | Наименование шаблона<br>`+Обязательное при ответе`            |
| **type**    | String(255)                                               | Тип шаблона (entity - документ)<br>`+Обязательное при ответе` |

### Список стандартных шаблонов

**Параметры**

| Параметр | Описание                                                                                           |
| :------- | :------------------------------------------------------------------------------------------------- |
| **type** | `string` (required) *Example: demand* тип сущности, для которой запрашиваются стандартные шаблоны. |
 
> Запрос на получение информации о стандартных шаблонах печатных форм для указанного типа сущности.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata/embeddedtemplate/"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка стандартных шаблонов для данного типа сущности.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata/embeddedtemplate",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
    "type": "embeddedtemplate",
    "mediaType": "application/json",
    "size": 6,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata/embeddedtemplate/c2645cf0-43f0-3379-adff-99929da86d5e",
        "type": "embeddedtemplate",
        "mediaType": "application/json"
      },
      "id": "c2645cf0-43f0-3379-adff-99929da86d5e",
      "name": "Транспортная накладная",
      "type": "entity",
      "content": "https://online.moysklad.ru/api/remap/1.2/download-template/ttn.xls"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata/embeddedtemplate/c5d5e3f2-6541-3ae3-9b7c-5da3665ab33e",
        "type": "embeddedtemplate",
        "mediaType": "application/json"
      },
      "id": "c5d5e3f2-6541-3ae3-9b7c-5da3665ab33e",
      "name": "Расходная накладная",
      "type": "entity",
      "content": "https://online.moysklad.ru/api/remap/1.2/download-template/rashod.xls"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata/embeddedtemplate/8a5bdbc2-ddb6-34f1-b359-05219426b979",
        "type": "embeddedtemplate",
        "mediaType": "application/json"
      },
      "id": "8a5bdbc2-ddb6-34f1-b359-05219426b979",
      "name": "ТОРГ-12",
      "type": "entity",
      "content": "https://online.moysklad.ru/api/remap/1.2/download-template/tov_nakl.xls"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata/embeddedtemplate/18386557-0c3d-30bc-9b76-fe30c9893f84",
        "type": "embeddedtemplate",
        "mediaType": "application/json"
      },
      "id": "18386557-0c3d-30bc-9b76-fe30c9893f84",
      "name": "Товарный чек",
      "type": "entity",
      "content": "https://online.moysklad.ru/api/remap/1.2/download-template/demand_check.xls"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata/embeddedtemplate/1aaef672-69a5-3e35-a849-71c2cd338ac0",
        "type": "embeddedtemplate",
        "mediaType": "application/json"
      },
      "id": "1aaef672-69a5-3e35-a849-71c2cd338ac0",
      "name": "Акт",
      "type": "entity",
      "content": "https://online.moysklad.ru/api/remap/1.2/download-template/act.xls"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata/embeddedtemplate/4fdd996f-d2fd-4500-baf2-fea33b6db077",
        "type": "embeddedtemplate",
        "mediaType": "application/json"
      },
      "id": "4fdd996f-d2fd-4500-baf2-fea33b6db077",
      "name": "Универсальный передаточный документ (старый)",
      "type": "entity",
      "content": "https://online.moysklad.ru/api/remap/1.2/download-template/upd.xls"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata/embeddedtemplate/4fdd996f-d2fd-4500-baf2-fea33b6db078",
        "type": "embeddedtemplate",
        "mediaType": "application/json"
      },
      "id": "4fdd996f-d2fd-4500-baf2-fea33b6db078",
      "name": "Универсальный передаточный документ",
      "type": "entity",
      "content": "https://online.moysklad.ru/api/remap/1.2/download-template/upd_new.xls"
    }
  ]
}
```

### Отдельный стандартный шаблон

#### Отдельный стандартный шаблон

**Параметры**

| Параметр | Описание                                                                                           |
| :------- | :------------------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id отдельного шаблона.         |
| **type** | `string` (required) *Example: demand* тип сущности, для которой запрашиваются стандартные шаблоны. |
 
> Запрос на получение информации об отдельном стандартном шаблоне печатной формы для указанного типа сущности по его id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata/embeddedtemplate/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление стандартного шаблона для данного типа сущности.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata/embeddedtemplate/c2645cf0-43f0-3379-adff-99929da86d5e",
    "type": "embeddedtemplate",
    "mediaType": "application/json"
  },
  "id": "c2645cf0-43f0-3379-adff-99929da86d5e",
  "name": "Транспортная накладная",
  "type": "entity",
  "content": "https://online.moysklad.ru/api/remap/1.2/download-template/ttn.xls"
}
```

#### Стандартные шаблоны для ценников и этикеток 
#### Атрибуты сущности

| Название    | Тип                                                       | Описание                                                                                           |
| ----------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------- |
| **content** | URL                                                       | Ссылка на скачивание<br>`+Обязательное при ответе`                                                 |
| **id**      | UUID                                                      | ID шаблона<br>`+Обязательное при ответе`                                                           |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Стандартного шаблона<br>`+Обязательное при ответе`                                      |
| **name**    | String(255)                                               | Наименование шаблона<br>`+Обязательное при ответе`                                                 |
| **type**    | String(255)                                               | Тип шаблона (mxtemplate - новый тип шаблона для ценников и этикеток)<br>`+Обязательное при ответе` |

### Список стандартных ценников и этикеток 
> Запрос на получение информации о стандартных шаблонах печатных форм для товаров, модификаций, услуг и комплектов.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/assortment/metadata/embeddedtemplate/"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка стандартных шаблонов для товаров, модификаций, услуг и комплектов .

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/assortment/metadata/embeddedtemplate",
    "type": "embeddedtemplate",
    "mediaType": "application/json",
    "size": 2,
    "limit": 100,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/assortment/metadata/embeddedtemplate/a8218d14-6017-3ba4-85c4-254fff93bbc8",
        "type": "embeddedtemplate",
        "mediaType": "application/json"
      },
      "id": "a8218d14-6017-3ba4-85c4-254fff93bbc8",
      "name": "Термоэтикетка (58х40мм)",
      "type": "mxtemplate",
      "content": "https://online.moysklad.ru/api/remap/1.2/download-template/termo_58x40.xml"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/assortment/metadata/embeddedtemplate/2746190f-cf7c-3a0b-922d-e75f44e88cce",
        "type": "embeddedtemplate",
        "mediaType": "application/json"
      },
      "id": "2746190f-cf7c-3a0b-922d-e75f44e88cce",
      "name": "Ценник (70x49,5мм)",
      "type": "mxtemplate",
      "content": "https://online.moysklad.ru/api/remap/1.2/download-template/price_tag_70x49.5.xml"
    }
  ]
}
```

### Отдельный стандартный шаблон для ценников и этикеток

#### Отдельный стандартный ценник или этикетка

**Параметры**

| Параметр | Описание                                                                                   |
| :------- | :----------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id отдельного шаблона. |
 
> Запрос на получение информации об отдельном стандартном шаблоне печатной формы для товаров, модификаций, услуг и комплектов по его id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/assortment/metadata/embeddedtemplate/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление стандартного шаблона для товаров, модификаций, услуг и комплектов.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/assortment/metadata/embeddedtemplate/a8218d14-6017-3ba4-85c4-254fff93bbc8",
    "type": "embeddedtemplate",
    "mediaType": "application/json"
  },
  "id": "a8218d14-6017-3ba4-85c4-254fff93bbc8",
  "name": "Термоэтикетка (58х40мм)",
  "type": "mxtemplate",
  "content": "https://online.moysklad.ru/api/remap/1.2/download-template/termo_58x40.xml"
}
```

#### Пользовательские шаблоны 
#### Атрибуты сущности

| Название    | Тип                                                       | Описание                                                           |
| ----------- | :-------------------------------------------------------- | :----------------------------------------------------------------- |
| **content** | URL                                                       | Ссылка на скачивание<br>`+Обязательное при ответе`                 |
| **id**      | UUID                                                      | ID шаблона<br>`+Обязательное при ответе`                           |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Пользовательского шаблона<br>`+Обязательное при ответе` |
| **name**    | String(255)                                               | Наименование шаблона<br>`+Обязательное при ответе`                 |
| **type**    | String(255)                                               | Тип шаблона (entity - документ)<br>`+Обязательное при ответе`      |

### Список пользовательских шаблонов
 
**Параметры**

| Параметр | Описание                                                                                                       |
| :------- | :------------------------------------------------------------------------------------------------------------- |
| **type** | `string` (required) *Example: customerorder* тип сущности, для которой запрашиваются пользовательские шаблоны. |

> Запрос на получение информации о пользовательских шаблонах печатных форм для указанного типа сущности.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/customtemplate/"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка стандартных шаблонов для данного типа сущности.

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
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
    "type": "customtemplate",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/customtemplate/38d1c843-1601-11e7-8af5-581e00000009",
        "type": "customtemplate",
        "mediaType": "application/json"
      },
      "id": "38d1c843-1601-11e7-8af5-581e00000009",
      "name": "tratata",
      "type": "entity",
      "content": "https://online.moysklad.ru/api/remap/1.2/download/38d1c843-1601-11e7-8af5-581e00000009"
    }
  ]
}
```

### Отдельный пользовательский шаблон

#### Отдельный пользовательский шаблон

**Параметры**

| Параметр | Описание                                                                                                 |
| :------- | :------------------------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id отдельного шаблона.               |
| **type** | `string` (required) *Example: customerorder* тип сущности, для которой запрашивается стандартный шаблон. |
 
> Запрос на получение информации об отдельном пользовательском шаблоне печатной формы для указанного типа сущности по его id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/customtemplate/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление пользовательского шаблона для данного типа сущности.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/customtemplate/38d1c843-1601-11e7-8af5-581e00000009",
    "type": "customtemplate",
    "mediaType": "application/json"
  },
  "id": "38d1c843-1601-11e7-8af5-581e00000009",
  "name": "достаточно_нестандартный_шаблон",
  "type": "entity",
  "content": "https://online.moysklad.ru/api/remap/1.2/download/38d1c843-1601-11e7-8af5-581e00000009"
}
```

#### Пользовательские шаблоны для ценников и этикеток 
#### Атрибуты сущности

| Название    | Тип                                                       | Описание                                                                                           |
| ----------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------- |
| **content** | URL                                                       | Ссылка на скачивание<br>`+Обязательное при ответе`                                                 |
| **id**      | UUID                                                      | ID шаблона<br>`+Обязательное при ответе`                                                           |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные Пользовательского шаблона<br>`+Обязательное при ответе`                                 |
| **name**    | String(255)                                               | Наименование шаблона<br>`+Обязательное при ответе`                                                 |
| **type**    | String(255)                                               | Тип шаблона (mxtemplate - новый тип шаблона для ценников и этикеток)<br>`+Обязательное при ответе` |

### Список пользовательских ценников и этикеток
> Запрос на получение информации о пользовательских шаблонах печатных форм для товаров, модификаций, услуг и комплектов.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/assortment/metadata/customtemplate/"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка пользовательских шаблонов для товаров, модификаций, услуг и комплектов.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/assortment/metadata/embeddedtemplate",
    "type": "embeddedtemplate",
    "mediaType": "application/json",
    "size": 2,
    "limit": 100,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/assortment/metadata/embeddedtemplate/a8218d14-6017-3ba4-85c4-254fff93bbc8",
        "type": "embeddedtemplate",
        "mediaType": "application/json"
      },
      "id": "a8218d14-6017-3ba4-85c4-254fff93bbc8",
      "name": "Термоэтикетка (58х40мм)",
      "type": "mxtemplate",
      "content": "https://online.moysklad.ru/api/remap/1.2/download-template/termo_58x40.xml"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/assortment/metadata/embeddedtemplate/2746190f-cf7c-3a0b-922d-e75f44e88cce",
        "type": "embeddedtemplate",
        "mediaType": "application/json"
      },
      "id": "2746190f-cf7c-3a0b-922d-e75f44e88cce",
      "name": "Ценник (70x49,5мм)",
      "type": "mxtemplate",
      "content": "https://online.moysklad.ru/api/remap/1.2/download-template/price_tag_70x49.5.xml"
    }
  ]
}
```

### Отдельный пользовательский шаблон для ценников и этикеток

#### Отдельный пользовательский ценник или этикетка 

**Параметры**

| Параметр | Описание                                                                                   |
| :------- | :----------------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id отдельного шаблона. |

> Запрос на получение информации об отдельном пользовательском шаблоне печатной формы для товаров, модификаций, услуг и комплектов по его id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/assortment/metadata/customtemplate/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление пользовательского шаблона для товаров, модификаций, услуг и комплектов.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/assortment/metadata/customtemplate/a4d36b88-d329-4b73-966a-b66b6a1b1b9a",
    "type": "customtemplate",
    "mediaType": "application/json"
  },
  "id": "a4d36b88-d329-4b73-966a-b66b6a1b1b9a",
  "name": "NewCustomTemplate",
  "type": "mxtemplate",
  "content": "https://online.moysklad.ru/api/remap/1.2/download/a4d36b88-d329-4b73-966a-b66b6a1b1b9a"
}
```
