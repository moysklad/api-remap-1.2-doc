## Асинхронный обмен

В JSON API можно выполнить некоторые запросы асинхронно. Это позволяет проводить выгрузку больших коллекций, 
не прибегая к листанию, если работа в реальном времени не критична. 

Асинхронный обмен поддерживается не для всех запросов. Список запросов, которые могут быть выполнены асинхронно:

+ [Отчет Остатки](reports/#otchety-otchet-ostatki)
+ [Отчет Прибыльность](reports/#otchety-otchet-pribyl-nost)
+ [Отчет Деньги](reports/#otchety-otchet-den-gi)
+ [Отчет Показатели продаж и заказов](reports/#otchety-pokazateli-prodazh-i-zakazow)
+ [Отчет Показатели контрагентов](reports/#otchety-otchet-pokazateli-kontragentow) (кроме [выборочных показателей](reports/#otchety-otchet-pokazateli-kontragentow-vyborochnye-pokazateli-kontragentow))
+ [Отчет Показатели](reports/#otchety-pokazateli)

После выполнения Асинхронной задачи результат доступен в течение 1 часа. 
После этого времени результат становится недоступен, и для получения нового результата задачу нужно создать заново.

На число одновременно выполняющихся асинхронных задач установлены [ограничения](#mojsklad-json-api-obschie-swedeniq-ogranicheniq).

На данный момент в процессе выполнения Асинхронной задачи могут возникать дубли позиций коллекции, 
если параллельно с подготовкой результата производятся действия, влияющие на состав коллекции 
(например, удаление товара в процессе подготовки Отчета Остатки).

### Выполнение запроса в асинхронном режиме

> Пример запроса на создание Асинхронной задачи

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/stock/bystore?async=true"
  -H "Authorization: Bearer <Access-Token>"
```

> Response 204
Успешное создание Асинхронной задачи

```shell
Location: https://online.moysklad.ru/api/remap/1.2/async/498b8673-0308-11e6-9464-e4de00000089
Content-Location: https://online.moysklad.ru/api/remap/1.2/async/498b8673-0308-11e6-9464-e4de00000089/result
```

Чтобы выполнить запрос в асинхронном режиме, нужно в параметрах запроса указать `async=true`. 
Указание параметров запроса **offset** и **limit**, свойственных для синхронных запросов, является ошибкой.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|**async** | `boolean`<br>`true` - будет создана Асинхронная задача.<br>`false` (по умолчанию) - запрос будет выполнен в синхронном режиме

Результатом выполнения запроса будет создание Асинхронной задачи. В ответе будут содержаться заголовки, содержащие URL статуса и результата задачи.

|Параметр   |Описание   | 
|:----|:----|
|**Location** | URL статуса Асинхронной задачи.
|**Content-Location** | URL результата выполнения Асинхронной задачи.

### Асинхронная задача

Объект асинхронной задачи содержит в себе информацию о создателе задачи, ее текущем статусе, наличии ответа и другую информацию.

#### Атрибуты сущности

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**id**           |UUID|ID Асинхронной задачи|Только для чтения|да
|**accountId**    |UUID|ID учетной записи|Только для чтения|да
|**owner**        |[Meta](#mojsklad-json-api-obschie-swedeniq-metadannye)|Пользователь или приложение, которые создали Асинхронную задачу|Только для чтения|да
|**state**        |Enum|Статус выполнения Асинхронной задачи. [Подробнее тут](#mojsklad-json-api-asinhronnyj-obmen-asinhronnaq-zadacha-atributy-suschnosti-status-wypolneniq-asinhronnoj-zadachi)|Только для чтения|да
|**request**      |String|URL запроса, по которому создана Асинхронная задача|Только для чтения|да
|**resultUrl**    |String|Ссылка на результат выполнения задачи. Содержится в ответе, если поле **state** имеет значение `DONE`|Только для чтения|нет
|**deletionDate** |DateTime|Дата, после которой результат выполнения задачи станет недоступен. Содержится в ответе, если поле **state** имеет значение `DONE`|Только для чтения|нет

##### Статус выполнения Асинхронной задачи

| Значение                | Описание  |
| ------------------------------ |:---------------------------|
| **PROCESSING**   |Задача находится в обработке, результат еще не готов|
| **DONE**         |Задача выполнена успешно|
| **ERROR**        |Задача не была выполнена в результате внутренней ошибки. В это случае нужно попробовать запустить задачу заново|
| **CANCEL**       |Задача была отменена|

### Получение статуса Асинхронной задачи

> Пример запроса на получение статуса Асинхронной задачи

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/async/498b8673-0308-11e6-9464-e4de00000089"
  -H "Authorization: Bearer <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление статуса выполнения Асинхронной задачи.

```json
{
  "id": "498b8673-0308-11e6-9464-e4de00000089",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "owner": {
      "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=98fa7086-8aa1-11e8-7210-075e0000002c"
      }
  },
  "state" : "DONE",
  "request": "https://online.moysklad.ru/api/remap/1.2/report/stock/bystore?async=true",
  "resultUrl": "https://online.moysklad.ru/api/remap/1.2/async/f97aa1fb-2e58-11e6-8a84-bae500000002/result",
  "deletionDate": "2021-02-16 16:21:09" 
}
```

Запрос на получение статуса выполнения Асинхронной задачи.

**Параметры**

|Параметр   |Описание   | 
|:----|:----|
|**id** |  `string` (required) *Example: 498b8673-0308-11e6-9464-e4de00000089* id Асинхронной задачи.|

### Получение результата выполнения Асинхронной задачи

> Пример запроса на получение результата Асинхронной задачи

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/async/498b8673-0308-11e6-9464-e4de00000089/result"
  -H "Authorization: Bearer <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление результата выполнения Асинхронной задачи.

```json
{
  "context": {
    "employee": {
      "href": "https://online.moysklad.ru/api/remap/1.2/context/employee",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/report/stock/bystore?async=true",
    "type": "stockbystore",
    "mediaType": "application/json",
    "size": 3
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/c02e3a5c-007e-11e6-9464-e4de00000006?expand=supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "stockByStore": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/86c857d6-0302-11e6-9464-e4de00000072",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json"
          },
          "name": "Не основной склад",
          "stock": -30,
          "reserve": 0,
          "inTransit": 0
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json"
          },
          "name": "Основной склад",
          "stock": 0,
          "reserve": 0,
          "inTransit": 0
        }
      ]
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/cc99c055-fa34-11e5-9464-e4de00000069?expand=supplier",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json"
      },
      "stockByStore": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/86c857d6-0302-11e6-9464-e4de00000072",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json"
          },
          "name": "Не основной склад",
          "stock": 0,
          "reserve": 0,
          "inTransit": 0
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
            "type": "store",
            "mediaType": "application/json"
          },
          "name": "Основной склад",
          "stock": 4,
          "reserve": 0,
          "inTransit": 0
        }
      ]
    }
  ]
}
```

Запрос на получение результата выполнения Асинхронной задачи. 

**Параметры**

|Параметр   |Описание   | 
|:----|:----|
|**id** |  `string` (required) *Example: 498b8673-0308-11e6-9464-e4de00000089* id Асинхронной задачи.|

Если статус задачи имеет значение `DONE`, 
результат выполнения запроса будет иметь статус `200 OK` с результатом выполнения запроса в теле.
Если первоначальный запрос содержал ошибку, тело ответа будет иметь описание этой ошибки, 
а статус также будет равен `200 OK`, в отличие от синхронного варианта. 

После наступления даты, указанной в поле **deletionDate**, результат становится недоступен. 
Для получения результата потребуется создать новую задачу.
