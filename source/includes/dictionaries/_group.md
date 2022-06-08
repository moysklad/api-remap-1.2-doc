## Отдел
#### Отделы 
Средствами JSON API можно запрашивать и изменять списки Отделов и сведения по отдельным Отделам. Кодом сущности для Отдела в составе JSON API является ключевое слово **group**.
Больше об Отделах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по  [этой ссылке](https://support.moysklad.ru/hc/ru/articles/204364908-%D0%9E%D1%82%D0%B4%D0%B5%D0%BB%D1%8B).
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](../#mojsklad-json-api-obschie-swedeniq-kontextnyj-poisk). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов отделов на соответствие поисковой строке будет осуществлен по следующим полям:

+ по наименованию Отдела **name**

#### Атрибуты сущности

| Название      | Тип                                                       | Фильтрация                  | Описание                                                             |
| ------------- | :-------------------------------------------------------- | :-------------------------- | :------------------------------------------------------------------- |
| **accountId** | UUID                                                      | `=` `!=`                    | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения` |
| **id**        | UUID                                                      | `=` `!=`                    | ID отдела<br>`+Обязательное при ответе` `+Только для чтения`         |
| **index**     | Int                                                       |                             | Порядковый номер в списке отделов                                    |
| **meta**      | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                             | Метаданные Отдела<br>`+Обязательное при ответе`                      |
| **name**      | String(255)                                               |                             | Наименование Отдела<br>`+Обязательное при ответе`                    |

### Получить Отделы

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |
 
> Запрос на получение всех отделов на данной учетной записи.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/group"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка отделов.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/group",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
    "type": "group",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      },
      "id" : "f97aa1fb-2e58-11e6-8a84-bae500000002",
      "accountId" : "2aa3f5df-296b-11e6-8a84-bae500000001",
      "name": "Основной",
      "index" : 0
    },
    {
      "meta" : {
        "href" : "https://online.moysklad.ru/api/remap/1.2/entity/group/a4047c9a-0fca-11eb-ac13-000700000003",
        "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type" : "group",
        "mediaType" : "application/json"
      },
      "id" : "a4047c9a-0fca-11eb-ac13-000700000003",
      "accountId" : "2aa3f5df-296b-11e6-8a84-bae500000001",
      "name" : "Новый отдел",
      "index" : 1
    }
  ]
}
```

#### Отдел

### Получить Отдел

**Параметры**

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Отдела. |
 
> Запрос на получение отдельного отдела с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного отдела.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
    "type": "group",
    "mediaType": "application/json"
  },
  "id" : "f97aa1fb-2e58-11e6-8a84-bae500000002",
  "accountId" : "2aa3f5df-296b-11e6-8a84-bae500000001",
  "name": "Основной",
  "index" : 0
}
```
### Создать Отдел 
Создать новый Отдел.
#### Описание
Отдел создается на основе переданного объекта JSON,
который содержит представление нового Отдела.
Результат - JSON представление созданного Отдела. Для создания нового Отдела,
необходимо и достаточно указать в переданном объекте не пустое поле `name`. Новый отдел будет добавлен в конец списка.
Если необходимо поместить новый отдел в начало списка, достаточно передать 0 в поле `index`
 
> Пример добавления отдела.
  
  ```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/group"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Новый отдел",
          }'  
  ```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Отдела.

```json
{
  "meta" : {
    "href" : "https://online.moysklad.ru/api/remap/1.2/entity/group/a4047c9a-0fca-11eb-ac13-000700000003",
    "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
    "type" : "group",
    "mediaType" : "application/json"
  },
  "id" : "a4047c9a-0fca-11eb-ac13-000700000003",
  "accountId" : "2aa3f5df-296b-11e6-8a84-bae500000001",
  "name" : "Новый отдел",
  "index" : 1
}
```
 
> Пример вставки Отдела в начало списка.
  
  ```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/group"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Новый отдел",
            "index" : 0
          }'  
  ```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Отдела.

```json
{
  "meta" : {
    "href" : "https://online.moysklad.ru/api/remap/1.2/entity/group/a4047c9a-0fca-11eb-ac13-000700000003",
    "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
    "type" : "group",
    "mediaType" : "application/json"
  },
  "id" : "a4047c9a-0fca-11eb-ac13-000700000003",
  "accountId" : "2aa3f5df-296b-11e6-8a84-bae500000001",
  "name" : "Новый отдел",
  "index" : 0
}
```

### Изменить Отдел 
Запрос на обновление названия и/или порядкового номера Отдела.

> Пример изменения названия Отдела.
  
  ```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/group/a4047c9a-0fca-11eb-ac13-000700000003"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Новое имя отдела",
          }'  
  ```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Товара.

```json
{
  "meta" : {
    "href" : "https://online.moysklad.ru/api/remap/1.2/entity/group/a4047c9a-0fca-11eb-ac13-000700000003",
    "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
    "type" : "group",
    "mediaType" : "application/json"
  },
  "id" : "a4047c9a-0fca-11eb-ac13-000700000003",
  "accountId" : "2aa3f5df-296b-11e6-8a84-bae500000001",
  "name" : "Новое имя отдела",
  "index" : 1
}
```
 
> Пример перемещения Отдела в начало списка.
  
  ```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/group/a4047c9a-0fca-11eb-ac13-000700000003"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "index": 0
          }'  
  ```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Отдела.

```json
{
  "meta" : {
    "href" : "https://online.moysklad.ru/api/remap/1.2/entity/group/a4047c9a-0fca-11eb-ac13-000700000003",
    "metadataHref" : "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
    "type" : "group",
    "mediaType" : "application/json"
  },
  "id" : "a4047c9a-0fca-11eb-ac13-000700000003",
  "accountId" : "2aa3f5df-296b-11e6-8a84-bae500000001",
  "name" : "Новый отдел",
  "index" : 0
}
```

### Удалить Отдел

**Параметры**

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: a4047c9a-0fca-11eb-ac13-000700000003* id Отдела. |
 
> Запрос на удаление Отдела с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/group/a4047c9a-0fca-11eb-ac13-000700000003"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Отдела.
