## Сотрудник
### Сотрудники 
Средствами JSON API можно запрашивать списки Сотрудников и сведения по отдельным Сотрудникам. Кодом сущности для Сотрудника в составе JSON API является ключевое слово **employee**. Больше о Сотрудниках и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/204019656-%D0%A1%D0%BE%D1%82%D1%80%D1%83%D0%B4%D0%BD%D0%B8%D0%BA%D0%B8).
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](../#mojsklad-json-api-obschie-swedeniq-kontextnyj-poisk).

Поиск среди объектов сотрудников на соответствие поисковой строке будет осуществлен по следующим полям:

+ По имени Сотрудника **name**
+ По адресу электронной почты **email**
+ По номеру телефона **phone**

#### Атрибуты сущности
+ **meta** - [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) о Сотруднике
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **name** - Имя сотрудника в формате "Фамилия И. О." `Только для чтения`
+ **description** - Комментарий к Сотруднику
+ **externalCode** - Внешний код Сотрудника `Только для чтения`
+ **archived** - Добавлен Сотрудник в архив
+ **created** - Момент создания Сотрудника `Только для чтения`
+ **uid** - Логин Сотрудника `Только для чтения`
+ **email** - Электронная почта сотрудника
+ **phone** - Телефон сотрудника
+ **firstName** - Имя
+ **middleName** - Отчество
+ **lastName** - Фамилия `Необходимое`
+ **fullName** - Имя Отчество Фамилия `Только для чтения`
+ **shortFio** - Краткое ФИО `Только для чтения`
+ **cashiers** - Массив кассиров `Только для чтения`
+ **attributes** - Дополнительные поля Сотрудника в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **image** - Фотография сотрудника
+ **inn** - ИНН сотрудника (в формате ИНН физического лица)
+ **position** - Должность сотрудника 

Поля **owner**, **group** и **archived** может изменять только администратор. Поле **email** может изменять администратор и сам сотрудник.
Вышеперечисленные поля будут игнорироваться в случае попытки изменить их сотрудником с недостаточным уровнем доступа.

#### Атрибуты вложенных сущностей
##### Кассир
+ **id** - id Кассира `Только для чтения`
+ **accountId** - id учетной записи Кассира `Только для чтения`
+ **employee** - Ссылка на сущность Сотрудника, которого представляет собой кассир в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) `Только для чтения`
+ **retailStore** - Ссылка на Точку продаж, к которой прикреплен кассир в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) `Только для чтения`

##### Фотография сотрудника: структура и загрузка.
Структура поля **image**, которое вы получите при запросе сотрудника с фотографией:

+ **meta** - Метаданные об изображении
+ **title** - Название изображения
+ **filename** - Имя файла
+ **size** - Размер файла в байтах
+ **updated** - Дата последнего изменения
+ **miniature** - Ссылка на миниатюру изображения в формате Метаданных
+ **tiny** - Ссылка на уменьшенное изображение в формате Метаданных

<h4>Загрузка</h4>
Для загрузки фотографии сотрудника необходимо сформировать запрос на [обновление](../dictionaries/#suschnosti-sotrudnik-izmenit-sotrudnika) сотрудника (PUT) и в теле запроса
указать поле **image** со следующими атрибутами:

+ **filename** - имя файла с расширением. Например - "cashier.png"
+ **content** - Изображение, закодированное в формате Base64.

Если в запросе на обновление не будет полей **filename** и **content**, то весь объект **image**, если он присутствует в Body,
будет проигнорирован, т.к. сервер посчитает, что его обновление не требуется.

О работе с доп. полями Сотрудников можно прочитать [здесь](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)


### Получить Сотрудников 
Запрос на получения списка всех сотрудников для данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

- **meta** [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) о выдаче,
- **context** - [Метаданные](../#mojsklad-json-api-obschie-swedeniq-metadannye) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой сотрудников.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

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
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Сотрудника.|

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

+ **meta** - Ссылка на метаданные Сотрудников
+ **attributes** - Массив объектов доп. полей Сотрудников в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
+ **createShared** - создавать новых Сотрудников с меткой "Общий"

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
|---|---|
|id |  `string` (required) *Example: 5290a290-0313-11e6-9464-e4de00000020* id Доп. поля.|

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
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Сотрудника.|

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

 + **lastName** - Фамилия
 
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
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Сотрудника.|

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
