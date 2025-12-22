## Площадка для продаж

### Площадки для продаж
Средствами JSON API можно просматривать сведения о Площадках для продаж, запрашивать списки Площадок для продаж и сведения по отдельным Площадкам для продаж. Кодом сущности для Площадки для продаж в составе JSON API является ключевое слово saleplatform.

Поиск среди объектов площадок для продаж на соответствие поисковой строке будет осуществлен по следующим полям:

+ по ID Площадки для продаж **id**
+ по группе Площадок для продаж **salePlatformGroup**

#### Атрибуты сущности
| Название         | Тип                                                       | Фильтрация                  | Описание                                                                                                                              |
| ---------------- | :-------------------------------------------------------- | :-------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------|
| **id**           | UUID                                                      | `=` `!=`                    | ID Площадки для продаж<br>`+Обязательное при ответе` `+Только для чтения`                                                             |
| **meta**         | [Meta](#/general#3-metadannye) |                             | Метаданные Площадки для продаж<br>`+Обязательное при ответе`                                                                          |
| **name**         | String(255)                                               |      | Наименование Площадки для продаж<br>`+Обязательное при ответе`                                                                        |
| **salePlatformGroup**         | Enum                                                      | `=` `!=`                    | Группа площадок для продаж [Подробнее тут](#/dictionaries/saleplatform#4-gruppa-ploshadok-dlya-prodazh)<br>`+Обязательное при ответе` |

#### Группа площадок для продаж
Перечисление значений, представляющих группу Площадок для продаж:

| Название                       | Описание          |
| ------------------------------ |:------------------|
| **MESSENGERS**                  | Мессенджеры       |
| **SOCIAL_NETWORKS**             | Социальные сети   |
| **MARKETPLACES**                | Маркетплейсы      |
| **ONLINE_STORES**                  | Интернет-магазины |
| **OFFLINE_STORES**             | Офлайн-магазины   |

#### Атрибуты доступные для фильтрации
| Значение                       | Описание                   |
| ------------------------------ |:---------------------------|
| **id**                         | ID Площадки для продаж     |
| **salePlatformGroup**                         | Группа площадок для продаж |

### Получить Площадки для продаж
Запрос на получение списка всех площадок для продаж на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                        |
| ----------- | :-------------------------------------------------------- |:----------------------------------------------------------------|
| **meta**    | [Meta](#/general#3-metadannye) | Метаданные о выдаче,                                            |
| **context** | [Meta](#/general#3-metadannye) | Метаданные о сотруднике, выполнившем запрос.                    |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой площадки для продаж. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |


> Получить Сущности

```shell
curl --compressed -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/saleplatform" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка площадок для продаж.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/saleplatform",
    "type": "saleplatform",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/saleplatform/0f9b8b4c-4597-4772-b896-c8aff047a110",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/saleplatform/metadata",
        "type": "saleplatform",
        "mediaType": "application/json"
      },
      "id": "39aaefe6-0304-4b85-ad3c-e8b93549f426",
      "name": "ДРОМ",
      "salePlatformGroup": "MARKETPLACES"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/saleplatform/0f9b8b4c-4597-4772-b896-c8aff047a111",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/saleplatform/metadata",
        "type": "saleplatform",
        "mediaType": "application/json"
      },
      "id": "59e5ed71-f3ac-4346-86e5-e23e3769a2fe",
      "name": "Детский мир",
      "salePlatformGroup": "MARKETPLACES"
    }
  ]
}
```

### Запросы - Площадка для продаж

**Параметры**

| Параметр | Описание                                                                                    |
| :------- |:--------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 39aaefe6-0304-4b85-ad3c-e8b93549f426* id Площадки для продаж. |

### Получить Площадку для продаж
> Запрос на получение отдельной площадки для продаж с указанным id.

```shell
curl --compressed -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/saleplatform/39aaefe6-0304-4b85-ad3c-e8b93549f426" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление площадки для продаж.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/saleplatform/39aaefe6-0304-4b85-ad3c-e8b93549f426",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/saleplatform/metadata",
    "type": "saleplatform",
    "mediaType": "application/json"
  },
  "id": "39aaefe6-0304-4b85-ad3c-e8b93549f426",
  "name": "Avito",
  "salePlatformGroup": "MARKETPLACES"
}
```
