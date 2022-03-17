## Коды маркировки
### Код маркировки

Средствами JSON API можно получать, создавать, редактировать и удалять Коды маркировки.
Сущность представлена в виде идентификатора, текстового кода, типа кода и массива вложенных Кодов маркировки.
Коды маркировки относятся к отдельной позиции конкретного документа. Порядок вывода КМ первого уровня фиксирован - вложенные КМ могут выводиться в случайном порядке. 

#### Атрибуты сущности

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|Expand|
| --------- |:----|:----------------------------|:----------------|:------------------------|:------------------------|
|**id**        |UUID|ID кода маркировки|Только для чтения|да|нет
|**cis**    |String|Код маркировки в стандартном формате|Необходимое при создании|нет|нет
|**cis_1162**    |String|Код маркировки в формате тега 1162|Только для чтения|нет|нет
|**type**     |String|Тип кода маркировки|Необходимое при создании|да|нет
|**trackingCodes**    |Array(Object)|Массив вложенных кодов маркировки|-|нет|нет

Пример запроса:
Сущности и документы - ```/entity/[entityType]/[entityId]/positions/[positionId]/trackingCodes```

### Получить Коды маркировки позиции документа

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|**limit** |  `number` (optional) **Default: 100** *Example: 50* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 100`.|
|**offset** |  `number` (optional) **Default: 0** *Example: 50* Отступ в выдаваемом списке сущностей.|
|**codetype** |  `number` (optional) **Default: gs1** Формат получаемых кодов маркировки. |


***Возможные значения codetype***

- gs1 - стандартный формат
- tag_1162 - в формате тега 1162
- all - все доступные форматы


Результат успешного запроса - JSON представление списка Кодов маркировки с перечисленными полями:


| Название  | Тип | Описание                    |
| --------- |:----|:----------------------------|
**meta** |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные о выдаче,
**context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.
**rows** |Array(Object)| Массив JSON объектов, представляющих собой коды маркировки.

> Пример запроса на получение Кодов маркировки

```shell
  curl -X GET
    "https://online.moysklad.ru/api/remap/1.2/entity/supply/161d0246-1477-11ec-ac18-000b00000001/positions/161d25a8-1477-11ec-ac18-000b00000002/trackingCodes"
    -H "Authorization: Basic <Credentials>"
```

> Response 200 

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
     "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/161d0246-1477-11ec-ac18-000b00000001/positions/161d25a8-1477-11ec-ac18-000b00000002/trackingCodes",
     "type": "trackingcode",
     "mediaType": "application/json",
     "size": 23,
     "limit": 100,
     "offset": 0
   },
   "rows": [
     {
       "id": "c7ea6665-1bb9-11ec-ac18-000c00000000",
       "cis": "012345678912345679",
       "type": "transportpack"
     },
     {
       "id": "6e29f82e-1bc0-11ec-ac18-000c00000002",
       "cis": "012345678912345543",
       "type": "transportpack",
       "trackingCodes": [
         {
           "id": "6e2a0192-1bc0-11ec-ac18-000c00000003",
           "cis": "010463003759026521LjJfNII5aXL-B",
           "type": "consumerpack"
         }
       ]
     }
   ]
 }
```

### Массовое создание и обновление Кодов маркировки
Массовое создание и обновление КМ указанной позиции. В теле запроса нужно передать массив, содержащий JSON представления Кодов маркировки, которые вы хотите создать или обновить. Обновляемые Коды маркировки должны содержать идентификатор.

Результат успешного запроса - массив JSON представлений созданных и обновленных Приемок.

Вложенные КМ заменяются указанными в запросе.

> Пример создания и обновления нескольких кодов маркировки

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/supply/161d0246-1477-11ec-ac18-000b00000001/positions/161d25a8-1477-11ec-ac18-000b00000002/trackingCodes"
    -H "Authorization: Basic <Credentials>
    -H "Content-Type: application/json"
      -d '[
            {
              "id": "f591e101-1bc0-11ec-ac18-000c00000004",
              "cis": "012345678912345576",
              "type": "transportpack"
            },
            {
              "cis": "010463003759026521LjJfNII5aXL-B",
              "type": "trackingcode"
            }
          ]'
```

> Response 200 (application/json) Успешный запрос. Результат - массив JSON представлений созданных и обновленных Кодов маркировки.

```json
[
  {
    "id": "f591e101-1bc0-11ec-ac18-000c00000004",
    "cis": "012345678912345576",
	"type": "transportpack"
  },
  {
    "id": "f591f05d-1bc0-11ec-ac18-000c00000005",
	"cis": "010463003759026521LjJfNII5aXL-B",
	"type": "trackingcode"
  }
]
```

### Массовое удаление Кодов маркировки

В теле запроса нужно передать массив, содержащий JSON метаданных Кода маркировки, которые вы хотите удалить, либо список с идентификаторами.

Если указанный в запросе КМ содержит вложенные коды, они тоже подлежат удалению.

> Запрос на массовое удаление Кодов маркировки

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/supply/161d0246-1477-11ec-ac18-000b00000001/positions/161d25a8-1477-11ec-ac18-000b00000002/trackingCodes/delete"
    -H "Authorization: Basic <Credentials>
    -H "Content-Type: application/json"
      -d '[
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/supply/161d0246-1477-11ec-ac18-000b00000001/positions/161d25a8-1477-11ec-ac18-000b00000002/trackingCodes/c7eccae6-1bb9-11ec-ac18-000c00000001",
                "type": "trackingcode",
                "mediaType": "application/json"
              }
            }
          ]'
```

> Успешный запрос. Результат - JSON информация об удалении Кодов маркировки.

```json
[
  {
    "info": "Сущность 'trackingcode' с UUID: 6e29f82e-1bc0-11ec-ac18-000c00000002 успешно удалена"
  }
]
```

