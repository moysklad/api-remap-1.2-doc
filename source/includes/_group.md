## Отдел
#### Отделы 
Средствами JSON API можно запрашивать списки Отделов и сведения по отдельным Отделам. Кодом сущности для Отдела в составе JSON API является ключевое слово **group**.
Больше об Отделах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по  [этой ссылке](https://support.moysklad.ru/hc/ru/articles/204364908-%D0%9E%D1%82%D0%B4%D0%B5%D0%BB%D1%8B).
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](../#mojsklad-json-api-obschie-swedeniq-kontextnyj-poisk). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов отделов на соответствие поисковой строке будет осуществлен по следующим полям:

+ по наименованию Отдела **name**

#### Атрибуты сущности
+ **meta** - [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) об Отделе
+ **name** - Наименование отдела.

### Получить Отделы

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|
 
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
    "size": 1,
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
      "name": "Основной"
    }
  ]
}
```

#### Отдел

### Получить Отдел

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Отдела.|
 
> Запрос на получение отдельного отдела с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/group/7944ef04-f831-11e5-7a69-971500188b19"
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
  "name": "Основной"
}
```
