## Сотрудник
### Сотрудники 
Средствами JSON API можно запрашивать списки Сотрудников и сведения по отдельным Сотрудникам. Кодом сущности для Сотрудника в составе JSON API является ключевое слово **employee**. Больше о Сотрудниках и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/204019656-%D0%A1%D0%BE%D1%82%D1%80%D1%83%D0%B4%D0%BD%D0%B8%D0%BA%D0%B8).
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](../#mojsklad-json-api-obschie-swedeniq-kontextnyj-poisk).

Поиск среди объектов сотрудников на соответствие поисковой строке будет осуществлен по следующим полям:

+ По имени Сотрудника **name**
+ По адресу электронной почты **email**
+ По номеру телефона **phone**

#### Атрибуты сущности

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**meta**               |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Сотрудника|&mdash;|да
|**id**                 |UUID|ID Сотрудника|Только для чтения|да
|**accountId**          |UUID| ID учетной записи|Только для чтения|да
|**owner**              |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Владелец (Сотрудник)|&mdash;|да
|**shared**             |Boolean|Общий доступ|&mdash;|да
|**group**              |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Отдел сотрудника|&mdash;|да
|**updated**            |DateTime|Момент последнего обновления Сотрудника|Только для чтения|да
|**name**               |String(255)|Наименование Сотрудника|Только для чтения|да
|**description**        |String(4096)|Комментарий к Сотруднику|&mdash;|нет
|**externalCode**       |String(255)|Внешний код Сотрудника|Только для чтения| да
|**archived**           |Boolean|Добавлен ли Сотрудник в архив|&mdash;| да
|**created**            |DateTime|Момент создания Сотрудника|Только для чтения| да
|**uid**                |String(255)|Логин Сотрудника|Только для чтения| нет
|**email**              |String(255)|Электронная почта сотрудника|&mdash;| нет
|**phone**              |String(255)|Телефон сотрудника|&mdash;| нет
|**firstName**          |String(255)|Имя|&mdash;| нет
|**middleName**         |String(255)|Отчество|&mdash;|нет
|**lastName**           |String(255)|Фамилия|Необходимое|да
|**fullName**           |String(255)|Имя Отчество Фамилия|Только для чтения| нет
|**shortFio**           |String(255)|Краткое ФИО|Только для чтения| нет
|**cashiers**           |Array(Object)|Массив кассиров.  [Подробнее тут](../dictionaries/#suschnosti-sotrudnik-sotrudniki-atributy-wlozhennyh-suschnostej-kassir)|Только для чтения| нет
|**attributes**         |Array([Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye))|Дополнительные поля Сотрудника|&mdash;| нет
|**image**              |Object|Фотография сотрудника.  [Подробнее тут](../dictionaries/#suschnosti-sotrudnik-sotrudniki-atributy-wlozhennyh-suschnostej-fotografiq-sotrudnika-struktura-i-zagruzka)|&mdash;| нет
|**inn**                |String(255)|ИНН сотрудника (в формате ИНН физического лица)|&mdash;| нет
|**position**           |String(255)|Должность сотрудника |&mdash;| нет

Поля **owner**, **group** и **archived** может изменять только администратор. Поле **email** может изменять администратор и сам сотрудник.

#### Атрибуты вложенных сущностей
##### Кассир

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**id**                 |UUID|ID Кассира|Только для чтения|да
|**accountId**          |UUID| ID учетной записи Кассира|Только для чтения|да
|**employee**           |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные сотрудника, которого представляет собой кассир|Только для чтения|да
|**retailStore**        |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные точки продаж, к которой прикреплен кассир|Только для чтения|да

##### Фотография сотрудника: структура и загрузка.
Структура поля **image**, которое вы получите при запросе сотрудника с фотографией:

| Название  | Тип | Описание                    | Свойство поля в запросе | Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**meta**               |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные объекта|&mdash;|да
|**title**               |String(255)|Название Изображения|&mdash;|да
|**filename**               |String(255)|Имя файла|&mdash;|да
|**size**               |Int|Размер файла в байтах|&mdash;|да
|**updated**               |DateTime|Время последнего изменения|&mdash;|да
|**miniature**               |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные миниатюры изображения|&mdash;|да
|**tiny**               |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные уменьшенного изображения|&mdash;|да

#### Загрузка
Для загрузки фотографии сотрудника необходимо сформировать запрос на [обновление](../dictionaries/#suschnosti-sotrudnik-izmenit-sotrudnika) сотрудника (PUT) и в теле запроса
указать поле **image** со следующими атрибутами:

| Название              | Описание  |
| --------------------- |:----------|
|**filename** | имя файла с расширением. Например - "cashier.png"
|**content** | Изображение, закодированное в формате Base64

Если в запросе на обновление не будет полей **filename** и **content**, то весь объект **image**, если он присутствует в Body,
будет проигнорирован, т.к. сервер посчитает, что его обновление не требуется.

О работе с доп. полями Сотрудников можно прочитать [здесь](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)


### Получить Сотрудников 
Запрос на получение списка всех сотрудников для данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название  | Тип | Описание                    |
| --------- |:----|:----------------------------|
|**meta** |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные о выдаче,
|**context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.
|**rows** |Array(Object)|Массив JSON объектов, представляющих Сотрудника.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|**limit** |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|**offset** |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить Сотрудников

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/employee"
  -H "Authorization: Basic <Credentials>"
```
 
> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Сотрудников.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
    "type": "employee",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/84f88b2f-f504-11e5-8a84-bae500000138",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      },
      "id": "84f88b2f-f504-11e5-8a84-bae500000138",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "updated": "2016-03-28 19:45:46",
      "name": "Администратор",
      "externalCode": "4A039QXHgbZdAHdXbcUI71",
      "archived": false,
      "uid": "admin@reqwy1",
      "email": "asdad@sfasf.erq",
      "lastName": "Администратор",
      "fullName": "Администратор",
      "shortFio": "Администратор",
      "cashiers": [
        {
          "meta": {
            "href": "http://online.moysklad.ru/api/remap/1.2/entity/retailstore/8d2f2a2e-d6a1-11e7-9464-e4de00000060/cashiers/8d2f3fe1-d6a1-11e7-9464-e4de00000061",
            "type": "cashier",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "http://online.moysklad.ru/api/remap/1.2/entity/retailstore/53302317-df24-11e7-9464-e4de00000001/cashiers/58dfeb3e-df24-11e7-9464-e4de00000004",
            "type": "cashier",
            "mediaType": "application/json"
          }
        }
      ],
      "retailStore": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/851f8576-f504-11e5-8a84-bae50000016c",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
          "type": "retailstore",
          "mediaType": "application/json"
        }
      },
      "inn": "222490425273",
      "position": "Директор"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/9e00ad58-0302-11e6-9464-e4de00000076",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      },
      "id": "9e00ad58-0302-11e6-9464-e4de00000076",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "updated": "2016-04-15 15:07:25",
      "name": "Друганов Л. А.",
      "externalCode": "4pGL0jazh3dGTpJfdcP1a1",
      "archived": false,
      "uid": "employee@company",
      "email": "company@company.ru",
      "phone": "8 800 250-04-32",
      "firstName": "Леонид",
      "middleName": "Андреевич",
      "lastName": "Друганов",
      "fullName": "Леонид Андреевич Друганов",
      "shortFio": "Друганов Л. А.",
      "attributes": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "d49d59bd-12dc-11e6-9464-e4de0000006b",
          "name": "AttributeName1",
          "type": "long",
          "value": 200
        }
      ]
    }
  ]
}

```

### Массовое обновление Сотрудников 
[Массовое обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Сотрудников.
В теле запроса нужно передать массив, содержащий JSON представления Сотрудников, которые вы хотите обновить.
Обновляемые Сотрудники должны содержать идентификатор в виде метаданных.

> Пример обновления нескольких Сотрудников

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/employee"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/7944ef04-f831-11e5-7a69-971500188b19",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "type": "employee",
                "mediaType": "application/json"
              },
              "firstName": "Петр",
              "middleName": "Иванович",
              "lastName": "Мойскладкин",
              "inn": "222490425273",
              "position": "Директор"
            },
            {
              "firstName": "Иван",
              "middleName": "Петрович",
              "lastName": "Мойскладкин"
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений обновленных Сотрудников.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/7944ef04-f831-11e5-7a69-971500188b19",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    },
    "id": "7944ef04-f831-11e5-7a69-971500188b19",
    "accountId": "ef07c35a-d1f6-11e8-7a33-904100000002",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/7944ef04-f831-11e5-7a69-971500188b19",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/ef0887b1-d1f6-11e8-7a33-904100000003",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2018-10-17 14:51:30",
    "name": "Мойскладкин П. И.",
    "externalCode": "wNxghfHlg5n2rJGO9Lpud0",
    "archived": false,
    "created": "2018-10-17 13:25:14",
    "uid": "admin@company",
    "email": "company@mail.ru",
    "firstName": "Петр",
    "middleName": "Иванович",
    "lastName": "Мойскладкин",
    "fullName": "Петр Иванович Мойскладкин",
    "shortFio": "Мойскладкин П. И.",
    "cashiers": [
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/eff1b7cc-d1f6-11e8-7a33-904100000062/cashiers/eff1c76b-d1f6-11e8-7a33-904100000063",
          "type": "cashier",
          "mediaType": "application/json"
        }
      }
    ],
    "inn": "222490425273",
    "position": "Директор"
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/fc86b89c-d202-11e8-7a33-90410000004a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    },
    "id": "fc86b89c-d202-11e8-7a33-90410000004a",
    "accountId": "ef07c35a-d1f6-11e8-7a33-904100000002",
    "owner": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/7944ef04-f831-11e5-7a69-971500188b19",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/ef0887b1-d1f6-11e8-7a33-904100000003",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2018-10-17 14:51:30",
    "name": "Мойскладкин И. П.",
    "externalCode": "0freFxtniG9a1MNZ7ADin2",
    "archived": false,
    "created": "2018-10-17 14:51:30",
    "firstName": "Иван",
    "middleName": "Петрович",
    "lastName": "Мойскладкин",
    "fullName": "Иван Петрович Мойскладкин",
    "shortFio": "Мойскладкин И. П."
  }
]
```

### Удалить Сотрудника

**Параметры**

|Параметр   |Описание   | 
|:----|:----|
|**id** |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Сотрудника.|

> Запрос на удаление Сотрудника с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/employee/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление Сотрудника.

### Массовое удаление Сотрудников

В теле запроса нужно передать массив, содержащий JSON метаданных Сотрудников, которые вы хотите удалить.

> Запрос на массовое удаление Сотрудников. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/employee/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
            "type": "employee",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Сотрудников.

```json
[
  {
    "info":"Сущность 'employee' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'employee' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
```

### Метаданные Сотрудников 
#### Метаданные Сотрудников 
Запрос на получение метаданных Сотрудников. Результат - объект JSON, включающий в себя:

| Название  | Тип | Описание                    |
| --------- |:----|:----------------------------|
|**meta** |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)| Ссылка на метаданные Сотрудников
|**attributes** |Array(Meta)| Массив объектов доп. полей Сотрудников в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
|**createShared** |Boolean| Создавать новых Сотрудников с меткой "Общий"

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Сотрудников

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Сотрудников.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "id": "5290a290-0313-11e6-9464-e4de00000020",
      "name": "AttributeName1",
      "type": "boolean",
      "required": false
    }
  ],
  "createShared": true
}
```

### Отдельное доп. поле

**Параметры**

|Параметр   |Описание   | 
|:----|:----|
|**id** |  `string` (required) *Example: 5290a290-0313-11e6-9464-e4de00000020* id Доп. поля.|

#### Отдельное доп. поле 
> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata/attributes/5290a290-0313-11e6-9464-e4de00000020"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata/attributes/5290a290-0313-11e6-9464-e4de00000020",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "5290a290-0313-11e6-9464-e4de00000020",
  "name": "AttributeName1",
  "type": "boolean",
  "required": false
}
```

### Сотрудник

### Получить Сотрудника
 
**Параметры**

|Параметр   |Описание   | 
|:----|:----|
|**id** |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Сотрудника.|

> Запрос на получение отдельного сотрудника с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/employee/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Сотрудника.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/84f88b2f-f504-11e5-8a84-bae500000138",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
    "type": "employee",
    "mediaType": "application/json"
  },
  "id": "84f88b2f-f504-11e5-8a84-bae500000138",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "updated": "2016-03-28 19:45:46",
  "name": "Администратор",
  "externalCode": "4A039QXHgbZdAHdXbcUI71",
  "archived": false,
  "uid": "admin@reqwy1",
  "email": "asdad@sfasf.erq",
  "lastName": "Администратор",
  "fullName": "Администратор",
  "shortFio": "Администратор",
  "cashiers": [
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/retailstore/8d2f2a2e-d6a1-11e7-9464-e4de00000060/cashiers/8d2f3fe1-d6a1-11e7-9464-e4de00000061",
        "type": "cashier",
        "mediaType": "application/json"
      }
    },
    {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/retailstore/53302317-df24-11e7-9464-e4de00000001/cashiers/58dfeb3e-df24-11e7-9464-e4de00000004",
        "type": "cashier",
        "mediaType": "application/json"
      }
    }
  ],
  "retailStore": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/851f8576-f504-11e5-8a84-bae50000016c",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
      "type": "retailstore",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "d49d59bd-12dc-11e6-9464-e4de0000006b",
      "name": "AttributeName1",
      "type": "long",
      "value": 200
    }
  ],
  "inn": "222490425273",
  "position": "Директор"
}
```

### Создать Сотрудника
Запрос на создание сотрудника. Обязательные для создания поля:

| Название              | Описание  |
| --------------------- |:----------|
|**lastName** | Фамилия
 
> Пример запроса на создание Сотрудника.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/employee/"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "firstName": "Петр",
            "middleName": "Иванович",
            "lastName": "Мойскладкин",
            "inn": "222490425273",
            "position": "Директор",
            "phone": "+7(999)888-7766",
            "description": "Описание",
            "attributes": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata/attributes/ed14b498-cae3-11e8-9dd2-f3a300000044",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "Строковое доп поле"
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Сотрудника.  

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/bc962452-cd64-11e8-ac12-000800000000",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
    "type": "employee",
    "mediaType": "application/json",
  },
  "id": "bc962452-cd64-11e8-ac12-000800000000",
  "accountId": "ffb8f6b1-cd3a-11e8-ac12-000700000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/00f76fbb-cd3b-11e8-ac12-00080000002d",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/ffbc0889-cd3a-11e8-ac12-000700000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2018-10-11 17:48:37",
  "name": "Мойскладкин П. И.",
  "description": "Описание",
  "externalCode": "tJfzU8g2hVgXFOiFGTMIe3",
  "archived": false,
  "created": "2018-10-11 17:48:37",
  "phone": "+7(999)888-7766",
  "firstName": "Петр",
  "middleName": "Иванович",
  "lastName": "Мойскладкин",
  "fullName": "Петр Иванович Мойскладкин",
  "shortFio": "Мойскладкин П. И.",
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata/attributes/ed14b498-cae3-11e8-9dd2-f3a300000044",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "ed14b498-cae3-11e8-9dd2-f3a300000044",
      "name": "AttributeName1",
      "type": "string",
      "value": "Строковое доп поле"
    }
  ],
  "inn": "222490425273",
  "position": "Директор"
}
```

### Изменить Сотрудника 
Запрос на обновление существующего Сотрудника. В теле запроса обязательно следует указать поле **lastName**.

**Параметры**

|Параметр   |Описание   | 
|:----|:----|
|**id** |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Сотрудника.|

> Пример запроса на обновление Сотрудника.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/employee/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "firstName": "Петр",
            "middleName": "Иванович",
            "lastName": "Мойскладкин",
            "inn": "222490425273",
            "position": "Директор",
            "phone": "+7(999)888-7766",
            "description": "Описание",
            "attributes": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata/attributes/ed14b498-cae3-11e8-9dd2-f3a300000044",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "Строковое доп поле"
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Сотрудника.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/7944ef04-f831-11e5-7a69-971500188b19",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
    "type": "employee",
    "mediaType": "application/json"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b19",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "updated": "2016-03-28 19:45:46",
  "name": "Мойскладкин П. И.",
  "description": "Описание",
  "externalCode": "4A039QXHgbZdAHdXbcUI71",
  "archived": false,
  "phone": "+7(999)888-7766",
  "uid": "admin@reqwy1",
  "email": "asdad@sfasf.erq",
  "firstName": "Петр",
  "middleName": "Иванович",
  "lastName": "Мойскладкин",
  "fullName": "Петр Иванович Мойскладкин",
  "shortFio": "Мойскладкин П. И.",
  "cashier": {
    "id": "851fa2f7-f504-11e5-8a84-bae50000016d",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "employee": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/7944ef04-f831-11e5-7a69-971500188b19",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "retailStore": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/851f8576-f504-11e5-8a84-bae50000016c",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
        "type": "retailstore",
        "mediaType": "application/json"
      }
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "d49d59bd-12dc-11e6-9464-e4de0000006b",
      "name": "AttributeName1",
      "type": "long",
      "value": 200
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata/attributes/ed14b498-cae3-11e8-9dd2-f3a300000044",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "ed14b498-cae3-11e8-9dd2-f3a300000044",
      "name": "AttributeName2",
      "type": "string",
      "value": "Строковое доп поле"
    }
  ],
  "inn": "222490425273",
  "position": "Директор"
}
```

### Работа с правами Сотрудника

В данном резделе приведены примеры запрос на получение и изменение прав сотрудника. Получать и изменять права может только 
сотрудник с правами `Системный администратор`.

#### Атрибуты сущности

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**isActive**               |Boolean|Доступ к сервису МойСклад|&mdash;|да
|**login**               |String(255)|Логин сотрудника для входа в МойСклад|&mdash;|нет
|**email**               |String(255)|Почта сотрудника|&mdash;|нет
|**group**               |Object|Метаданные Группы, а также ее идентификатор и имя|&mdash;|да
|**role**               |Object|Информация о роли Сотрудника|&mdash;|нет

#### Атрибуты вложенных сущностей
##### Роль

Роли бывают четырех типов: `Системный администратор`, `Кассир`, `Пользовательская роль` и `Индивидуальная роль`. Использовать
`Пользовательскую роль` (с пермиссиями не по умолчанию) и `Индивидуальную роль` можно только на тарифах `Профессиональный` 
или `Корпоративный`. Для `Пользовательской роли` можно настраивать список пермиссий, заполняя поле `permission`.

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**meta**                 |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные роли|&mdash;|да
|**permissions**          |Array(Object)| Список пермиссий|&mdash;|нет

###### Список пользовательских пермиссий 

| Название         | Возможные значения | Значение по умолчанию                    | Описание| 
| ---------------- |:-------------------|:---------------------|:----------------------------------|
|**importData**    |Boolean|true|Импорт
|**exportData**    |Boolean|true|Экспорт
|**onlineShops**    |Boolean|true|Интернет магазины
|**apiRequest**    |Boolean|true|Доступ по АПИ
|**sendEmail**    |Boolean|true|Отправлять почту
|**viewProductCostAndProfit**    |Boolean|true|Видеть себестоимость, цену закупки и прибыль товаров
|**viewDashboard**    |Boolean|true|Просматривать показатели
|**viewRecycleBin**    |Boolean|true|Просматривать корзину
|**viewAudit**    |Boolean|false|Просматривать аудит
|**viewSaleProfit**    |Boolean|true|Прибыльность
|**viewCommissionGoods**    |Boolean|true|Товары на реализации
|**viewPurchaseFunnel**    |Boolean|true|Воронка продаж
|**viewStockReport**    |Boolean|true|Остатки
|**viewTurnover**    |Boolean|true|Обороты
|**viewSerialNumbers**    |Boolean|true|Сер. Номера
|**viewCashFlow**    |Boolean|true|Движение денежных средств
|**viewCustomerBalanceList**    |Boolean|true|Взаиморасчеты
|**viewProfitAndLoss**    |Boolean|true|Прибыль и убытки
|**viewCompanyCRM**    |Boolean|true|Показатели
|**viewMoneyDashboard**    |Boolean|false|Видеть остатки денег
|**restoreFromRecycleBin**    |Boolean|true|Востанавливать документы
|**deleteFromRecycleBin**    |Boolean|true|Очищать корзину
|**editDocumentsOfRestrictedPeriod**    |Boolean|false| Редактировать документы закрытого периода
|**editDocumentTemplates**    |Boolean|true|Редактироватьшаблоны документов и отчетов
|**editCurrencyRateOfDocument**    |Boolean|true|Редактировать курс валюты документа
|**subscriptionControl**    |Boolean|false|Управление подпиской
|**purchaseControl**    |Boolean|true|Управление закупками
|**listenCalls**    |Boolean|true|Прослушивание звонков

Значения по умолчанию выставляются, если пользователь не указывая индивидуальные пермиссии задает индивидуальную роль сотруднику, 
у которого ранее не было задано индивидуальных пермиссий.

###### Список пермиссий сущностей

Имеется три возможных типа значений пермиссий сущности: `OPERATION`, `DICTIONARY`, `BASE`.
Данные типы имеют следующие поля:

| типы значений пермиссий сущности         | view | create | update | delete | print | approve |
| ----------- |:---------|:----------| :------------| :----------| :----------| :----------|
|OPERATION    | + | + | + | + | + | +
|DICTIONARY    | + | + | + | + | + | -
|BASE    | + | + | + | + | - | -


| Название         | Описание | Ограничения |
| ---------------- |:-------------------|:-------------------|
|**view**    |Смотреть | нет
|**create**    |Создавать | совпадает с view или отсутствует
|**update**    |Редактировать | не шире, чем у view или отсутствует
|**delete**    |Удалять | совпадает с update или отсутствует
|**print**    |Печатать | совпадает с view или отсутствует
|**approve**    |Проводить | совпадает с view или отсутствует

Возможные значения полей `view`, `create`, `update`, `delete`, `approve`, `print`:

| Название         | На кого распространяется |
| ---------------- |:-------------------|
|**NO**    |Ни на кого
|**OWN**    |Только свои
|**OWN_SHARED**    |Свои и общие
|**OWN_GROUP**    |Свои и отдела
|**OWN_GROUP_SHARED**    |Свои, отдела и общие
|**ALL**    |Все

Значения в порядке их расширения области действия: `NO` &#8594; `OWN` &#8594;  `OWN_SHARED` &#8594; `OWN_GROUP_SHARED` &#8594; `ALL` и 
`NO` &#8594; `OWN` &#8594; `OWN GROUP` &#8594; `OWN_GROUP_SHARED` &#8594; `ALL`  
 Если не указывать одно из полей, то данное действие будет запрещено к выполнению для данного сотрудника. 
 
 Список пермиссий сущнойстей
 

| Название         | Возможные значения | Значение по умолчанию                    | Описание| 
| ---------------- |:-------------------|:---------------------|:----------------------------------|
|**company**    |DICTIONARY|Все ALL|Контрагенты
|**myCompany**    |BASE|view: ALL, create: NO, edit: NO, delete: NO|Юр. Лица
|**good**    |DICTIONARY|Все ALL|Товары и Услуги
|**project**    |BASE|Все ALL|Проекты
|**contract**    |DICTIONARY|Все ALL|Договоры
|**employee**    |BASE|Все ALL|Сотрудники
|**currency**    |BASE|Все ALL|Валюты
|**warehouse**    |BASE|Все ALL|Склады
|**customEntity**    |BASE|Все ALL|Дополнительные справочники
|**retailStore**    |BASE|Все ALL|Точка продаж
|**country**    |BASE|Все ALL|Страны
|**uom**    |BASE|Все ALL|Единицы измерения
|**purchaseReturn**    |OPERATION|Все ALL|Возврат поставщику
|**demand**    |OPERATION|Все ALL|Отгрузка
|**salesReturn**    |OPERATION|Все ALL|Возврат покупателя
|**loss**    |OPERATION|Все ALL|Списание
|**enter**    |OPERATION|Все ALL|Оприходование
|**move**    |OPERATION|Все ALL|Перемещение
|**inventory**    |DICTIONARY|Все ALL|Инвентаризация
|**processing**    |BASE|Все ALL|Тех. операции
|**invoiceIn**    |OPERATION|Все ALL|Счет поставщику
|**invoiceOut**    |OPERATION|Все ALL|Счет покупателям
|**purchaseOrder**    |OPERATION|Все ALL|Заказ поставщикам
|**customerOrder**    |OPERATION|Все ALL|Заказ покупателям
|**internalOrder**    |OPERATION|Все ALL|Внутренние заказы
|**processingOrder**    |OPERATION|Все ALL|Заказ на производство
|**factureIn**    |OPERATION|Все ALL|Счета-фактуры полученные
|**factureOut**    |OPERATION|Все ALL|Счета-фактуры выданные
|**paymentIn**    |OPERATION|Все ALL|Входящий платеж
|**paymentOut**    |OPERATION|Все ALL|Исходящий платеж
|**cashIn**    |OPERATION|Все ALL|Приходной ордер
|**cashOut**    |OPERATION|Все ALL|Расходной ордер
|**priceList**    |OPERATION|Все ALL|Прайс-лист
|**retailDemand**    |OPERATION|Все ALL|Продажи
|**retailSalesReturn**    |OPERATION|Все ALL|Возвраты
|**supply**    |OPERATION|Все ALL|Приемки
|**processingPlan**    |BASE|Все ALL|Тех. Карты
|**commissionReportIn**    |OPERATION|Все ALL|Полученный отчет комиссионера
|**commissionReportOut**    |OPERATION|Все ALL|Выданный отчет комиссионер
|**retailShift**    |DICTIONARY|Все ALL|Смены
|**retailDrawerCashIn**    |OPERATION|Все ALL|Внесения
|**retailDrawerCashOut**    |OPERATION|Все ALL|Выплаты
|**bonusTransaction**    |OPERATION|Все ALL|Бонусные баллы
|**prepayment**    |OPERATION|Все ALL|Предоплаты
|**prepaymentReturn**    |OPERATION|Все ALL|Возврат предоплаты
|**cashboxAdjustment**    |DICTIONARY|Все ALL|Корректировка остатков в кассе
|**accountAdjustment**    |DICTIONARY|Все ALL|Корректировка остатков на счете
|**counterpartyAdjustment**    |DICTIONARY|Все ALL|Корректировка баланса контрагента

Для пермиссий `currency`, `country` и `uom` значение `view` не изменяемое и равно `ALL`. При попытке изменить значение `view`
 для данных пермиссий, будет возвращена ошибка.

###### Пермисии для задач

Пермисии `script` для задач имеют следующие поля:

| Название         | Описание | Ограничения | Возможные значения |
| ---------------- |:-------------------|:-------------------| :-------------------|
|**view**    |Смотреть |нет |NO, AUTHOR_OR_ASSIGNEE, ALL
|**create**    |Создавать |не шире, чем у view или отсутствует |NO, ALL
|**update**    |Редактировать |не шире, чем у view или отсутствует |NO, ASSIGNEE, AUTHOR_OR_ASSIGNEE, ALL
|**delete**    |Удалять |не шире значения поля update или отсутствует |NO, AUTHOR, AUTHOR_OR_ASSIGNEE, ALL
|**done**    |Выполнять |не шире, чем у view или отсутствует |NO, AUTHOR, AUTHOR_OR_ASSIGNEE, ALL

Возможные значения полей `view`, `create`, `update`, `delete`, `done`:

| Название         | На кого распространяется |
| ---------------- |:-------------------|
|**NO**    |Ни на кого
|**AUTHOR_OR_ASSIGNEE**    |Созданные и назначенные
|**ASSIGNEE**    |Назначенные
|**AUTHOR**    |Созданные
|**ALL**    |Все

### Получить информацию о правах Сотрудника

Запрос на получение информации о правах Сотрудника.

**Параметры**

|Параметр   |Описание   | 
|:----|:----|
|**id** |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Сотрудника.|

> Пример запроса на получения информации о правах Сотрудника.

```shell
  curl -X GET
    "https://online.moysklad.ru/api/remap/1.2/entity/employee/7944ef04-f831-11e5-7a69-971500188b19/security"
    -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление информации о правах Сотрудника c пользовательской ролью.

```json
{
    "isActive": true,
    "login": "example@lognex",
    "email": "example@example.ru",
    "group": {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f4b74c5e-443a-11eb-ac12-001000000002",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
            "type": "group",
            "mediaType": "application/json"
        },
        "id": "f4b74c5e-443a-11eb-ac12-001000000002",
        "name": "Основной"
    },
    "role": {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/role/individual",
            "type": "individualrole",
            "mediaType": "application/json"
        },
        "permissions": {
            "importData": true,
            "exportData": true,
            "onlineShops": true,
            "apiRequest": true,
            "sendEmail": true,
            "viewProductCostAndProfit": true,
            "viewDashboard": true,
            "viewRecycleBin": true,
            "viewAudit": false,
            "viewSaleProfit": true,
            "viewCommissionGoods": true,
            "viewPurchaseFunnel": true,
            "viewStockReport": true,
            "viewTurnover": true,
            "viewSerialNumbers": true,
            "viewCashFlow": true,
            "viewCustomerBalanceList": true,
            "viewProfitAndLoss": true,
            "viewCompanyCRM": true,
            "viewMoneyDashboard": false,
            "restoreFromRecycleBin": true,
            "deleteFromRecycleBin": true,
            "editDocumentsOfRestrictedPeriod": false,
            "editDocumentTemplates": true,
            "editCurrencyRateOfDocument": true,
            "subscriptionControl": false,
            "purchaseControl": true,
            "listenCalls": true,
            "company": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "myCompany": {
                "view": "ALL",
                "print": "NO",
                "create": "NO",
                "update": "NO",
                "delete": "NO"
            },
            "good": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "project": {
                "view": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "contract": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "employee": {
                "view": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "currency": {
                "view": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "warehouse": {
                "view": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "customEntity": {
                "view": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "retailStore": {
                "view": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "country": {
                "view": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "uom": {
                "view": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "purchaseReturn": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "demand": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "salesReturn": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "loss": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "enter": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "move": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "inventory": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "processing": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "invoiceIn": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "invoiceOut": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "purchaseOrder": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "customerOrder": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "internalOrder": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "processingOrder": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "factureIn": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "factureOut": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "paymentIn": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "paymentOut": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "cashIn": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "cashOut": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "priceList": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "retailDemand": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "retailSalesReturn": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "supply": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "processingPlan": {
                "view": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "commissionReportIn": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "commissionReportOut": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "retailShift": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "retailDrawerCashIn": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "retailDrawerCashOut": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "bonusTransaction": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "prepayment": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "prepaymentReturn": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "cashboxAdjustment": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "accountAdjustment": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "counterpartyAdjustment": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "script": {
                "view": "AUTHOR_OR_ASSIGNEE",
                "create": "ALL",
                "done": "AUTHOR_OR_ASSIGNEE",
                "update": "AUTHOR",
                "delete": "AUTHOR"
            }
        }
    }
}
```

### Изменить информацию о правах Сотрудника

Если у пользователя есть возможность настраивать пермиссии для индивидуальной роли, 
то пермиссии выставятся в соответствии с теми, что указаны в `permissions`, остальные пермисии 
будут отсутствовать, кроме `view` равное `ALL` для `currency`, `country` и `uom`. В случае отсутствия поля `permissions` 
будут заданы значения пермиссий, которые были у сотрудника до смены роли.

Если у пользователя нет возможности настраивать пермиссии для индивидуальной роли, то при наличии `permissions` 
будет выведена ошибка об отсутствии соответствующих пермиссий на аккаунте, в случае отсутствия - если индивидуальные 
пермисии до смены роли были выставлены по умолчанию, то произойдет смена роли, иначе будет выведена ошибка об отсутствии пермиссий.

Запрос на изменение информации о правах Сотрудника.

**Параметры**

|Параметр   |Описание   | 
|:----|:----|
|**id** |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Сотрудника.|

> Пример запроса на измененик информации о правах Сотрудника.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/employee/7944ef04-f831-11e5-7a69-971500188b19/security"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "group": {
                "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f4b74c5e-443a-11eb-ac12-001000000003",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
                    "type": "group",
                    "mediaType": "application/json"
                }
            },
            "role": {
                "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/role/admin",
                    "type": "systemrole",
                    "mediaType": "application/json"
                }
            }
          }'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной информации о правах Сотрудника c ролью администратора.

```json
{
    "isActive": true,
    "login": "example@lognex",
    "email": "example@example.ru",
    "group": {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f4b74c5e-443a-11eb-ac12-001000000003",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
            "type": "group",
            "mediaType": "application/json"
        },
        "id": "f4b74c5e-443a-11eb-ac12-001000000003",
        "name": "Новая группа"
    },
    "role": {
        "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/role/admin",
            "type": "systemrole",
            "mediaType": "application/json"
        }
    }
}
```

### Активация Сотрудника

Запрос на активацию Сотрудника в сервисе МойСклад.

**Параметры**

|Параметр   |Описание   | 
|:----|:----|
|**id** |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Сотрудника.|

Если пользователь ранее не был активным, то при запросе необходимо указать поле `login`. Формат поля аналогичен формату 
в сервисе МойСклад. Успешным результатом выполнения запросы будет json содержащий поле `mailActivationRequired` со значением 
true. Это означает, что на указанную у сотрудника почту было выслано письмо с ссылкой на вход для сотрудника.

Если пользователь уже был ранее активным, то при активации не нужно указывать поле `login`. 
Успешным результатом выполнения запросы будет json содержащий поле `mailActivationRequired` со значением false. В данном 
случае можно использовать ранее заданный пароль для данного пользователя.

> Пример запроса на активацию Сотрудника.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/employee/7944ef04-f831-11e5-7a69-971500188b19/access/activate"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "login": "newcashier@lognex",
            "group": {
                "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f4b74c5e-443a-11eb-ac12-001000000003",
                    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
                    "type": "group",
                    "mediaType": "application/json"
                }
            },
            "role": {
                "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/role/cashier",
                    "type": "systemrole",
                    "mediaType": "application/json"
                }
            }
          }'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной информации об активированном Сотруднике c ролью кассира.

```json
{
    "mailActivationRequired": true
}
```

### Деактивация Сотрудника

Запрос на деактивацию Сотрудника в сервисе МойСклад.

**Параметры**

|Параметр   |Описание   | 
|:----|:----|
|**id** |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Сотрудника.|

> Пример запроса на деактивацию Сотрудника.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/employee/7944ef04-f831-11e5-7a69-971500188b19/access/deactivate"
    -H "Authorization: Basic <Credentials>"
```

> Response 204

### Сброс пароля Сотрудника

Запрос на сброс пароля Сотрудника в сервисе МойСклад. Новый пароль буде выслан на почту, указанную у данного сотрудника.

**Параметры**

|Параметр   |Описание   | 
|:----|:----|
|**id** |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Сотрудника.|

> Пример запроса на сброс пароля Сотрудника.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/employee/7944ef04-f831-11e5-7a69-971500188b19/access/resetpassword"
    -H "Authorization: Basic <Credentials>"
```

> Response 204
