## Бонусная программа
##### Бонусные программы

Кодом сущности для Бонусных программ в составе JSON API является ключевое слово **bonusprogram**. Операции создания и изменения не поддерживаются. Перед работой со скидками настоятельно рекомендуем вам прочитать [вот эту статью](https://support.moysklad.ru/hc/ru/articles/203392253-%D0%A1%D0%BA%D0%B8%D0%B4%D0%BA%D0%B8) на портале поддержки МоегоСклада.

##### Атрибуты сущности

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**meta**               |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Бонусной программы|&mdash;|да
|**id**                 |UUID|ID Бонусной программы|Только для чтения|да
|**accountId**          |UUID| ID учетной записи|Только для чтения|да
|**name**               |String(255)|Наименование Бонусной программы|&mdash;|нет
|**active**               |Boolean|Индикатор, является ли бонусная программа активной на данный момент|&mdash;|да
|**allProducts**               |Boolean|Индикатор, действует ли бонусная программа на все товары (всегда `true`, см. [Скидки](../dictionaries/#suschnosti-skidki))|&mdash;|да
|**allAgents**              |Boolean|Индикатор, действует ли скидка на всех контрагентов (см. [Скидки](../dictionaries/#suschnosti-skidki))|&mdash;|да
|**agentTags**             |Array(String)|Тэги контрагентов, к которым применяется бонусная программа. В случае пустого значения контрагентов в результате выводится пустой массив.|&mdash;|да
|**earnRateRoublesToPoint**              |Int| Курс начисления|&mdash;|нет
|**spendRatePointsToRouble**              |Int|Курс списания|&mdash;|нет
|**maxPaidRatePercents**             |Int|Максимальный процент оплаты баллами|&mdash;|нет
|**earnWhileRedeeming**              |Boolean|Разрешить одновременное начисление и списание бонусов. Если `true` - бонусы будут начислены на денежную часть покупки, даже при частичной оплате покупки баллами.|&mdash;|да

### Получить все Бонусные программы

Запрос на получение всех бонусных программ учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название  | Тип | Описание                    |
| --------- |:----|:----------------------------|
|**meta** |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные о выдаче,
|**context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.
|**rows** |Array(Object)|Массив JSON объектов, представляющих Бонусные программы

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|**limit** |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|**offset** |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить все Бонусные программы

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - список всех бонусных программ для учетной записи.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/metadata",
    "type": "bonusprogram",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/1223d051-ba76-11e8-3353-995e0000005a",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/metadata",
        "type": "bonusprogram",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=1223d051-ba76-11e8-3353-995e0000005a"
      },
      "id": "1223d051-ba76-11e8-3353-995e0000005a",
      "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
      "name": "test",
      "active": true,
      "allAgents": true,
      "agentTags": [
        "группа агентов"
      ],
      "earnRateRoublesToPoint": 1,
      "spendRatePointsToRouble": 1,
      "maxPaidRatePercents": 100,
      "earnWhileRedeeming": true
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/87c69fae-c1ad-4700-a852-f21939470760",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/metadata",
        "type": "bonusprogram",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=1223d051-ba76-11e8-3353-995e0000005a"
      },
      "id": "87c69fae-c1ad-4700-a852-f21939470760",
      "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
      "name": "bonusprogram",
      "active": false,
      "allAgents": true,
      "agentTags": [
        "группа агентов"
      ],
      "earnRateRoublesToPoint": 7,
      "spendRatePointsToRouble": 4,
      "maxPaidRatePercents": 50,
      "earnWhileRedeeming": true
    }
  ]
}
```

### Бонусная программа

### Создать Бонусную программу
Запрос на создание новой бонусной программы. Обязательные поля для заполнения: **name** (имя скидки), **active** (активна ли скидка), **allProducts** (действует ли скидка на все товары), **allAgents** (действует ли скидка на всех контрагентов) **earnRateRoublesToPoint** (курс начисления), **spendRatePointsToRouble** (курс списания), **maxPaidRatePercents** (максимальный процент оплаты баллами)

> Пример создания новой бонусной программы

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
	  "name": "bonusprogram",
	  "active": true,
	  "allProducts": true,
	  "allAgents": false,
	  "agentTags": ["tag1", "tag2"],
	  "earnRateRoublesToPoint": 7,
    "spendRatePointsToRouble": 4,
    "maxPaidRatePercents": 50,
    "earnWhileRedeeming": false
	}'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной бонусной программы.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/87c69fae-c1ad-4700-a852-f21939470760",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/metadata",
    "type": "bonusprogram",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=1223d051-ba76-11e8-3353-995e0000005a"
  },
  "id": "87c69fae-c1ad-4700-a852-f21939470760",
  "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
  "name": "bonusprogram",
  "active": false,
  "agentTags": ["tag1", "tag2"],
  "earnRateRoublesToPoint": 7,
  "spendRatePointsToRouble": 4,
  "maxPaidRatePercents": 50,
  "earnWhileRedeeming": false
}
```

### Изменить Бонусную программу 

**Параметры**

|Параметр   |Описание   | 
|:----|:----|
|id |  `string` (required) *Example: 87c69fae-c1ad-4700-a852-f21939470760* id Бонусной программы.|

Запрос на изменение бонусной программы. В теле запроса необходимо передать поля, которые будут изменены

> Пример изменения бонусной программы

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/87c69fae-c1ad-4700-a852-f21939470760"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
	  "name": "updatedName",
	  "active": true,
	  "agentTags": ["tag2"]
	}'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление измененной бонусной программы.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/87c69fae-c1ad-4700-a852-f21939470760",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/metadata",
    "type": "bonusprogram",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=87c69fae-c1ad-4700-a852-f21939470760"
  },
  "id": "87c69fae-c1ad-4700-a852-f21939470760",
  "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
  "name": "bonusprogram",
  "active": true,
  "agentTags": ["tag2"],
  "earnRateRoublesToPoint": 7,
  "spendRatePointsToRouble": 4,
  "maxPaidRatePercents": 50,
  "earnWhileRedeeming": true
}
```


### Получить Бонусную программу

**Параметры**

|Параметр   |Описание   | 
|:----|:----|
|**id** |  `string` (required) *Example: 87c69fae-c1ad-4700-a852-f21939470760* id Бонусной программы.|

> Запрос на получение отдельной бонусной программы с указанным id

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/87c69fae-c1ad-4700-a852-f21939470760"
  -H "Authorization: Basic <Credentials>"
```
  
> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Бонусной программы с указанным id.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/87c69fae-c1ad-4700-a852-f21939470760",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/metadata",
    "type": "bonusprogram",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=1223d051-ba76-11e8-3353-995e0000005a"
  },
  "id": "87c69fae-c1ad-4700-a852-f21939470760",
  "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
  "name": "bonusprogram",
  "active": false,
  "agentTags": [
    "группа агентов"
  ],
  "earnRateRoublesToPoint": 7,
  "spendRatePointsToRouble": 4,
  "maxPaidRatePercents": 50,
  "earnWhileRedeeming": true
}
```

### Удалить Бонусную программу

**Параметры**

|Параметр   |Описание   | 
|:----|:----|
|**id** |  `string` (required) *Example: 87c69fae-c1ad-4700-a852-f21939470760* id Бонусной программы.|

> Запрос на удаление бонусной программы

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/87c69fae-c1ad-4700-a852-f21939470760"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Бонусной программы

### Массовое удаление Бонусных программ

В теле запроса нужно передать массив, содержащий JSON метаданных Бонусных программ, которые вы хотите удалить.

> Запрос на массовое удаление Бонусных программ. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/metadata",
            "type": "bonusprogram",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/metadata",
            "type": "bonusprogram",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Бонусных программ.

```json
[
  {
    "info":"Сущность 'bonusprogram' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'bonusprogram' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
```
