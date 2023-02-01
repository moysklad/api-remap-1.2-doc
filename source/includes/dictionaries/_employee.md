## Сотрудник
### Сотрудники 
Средствами JSON API можно запрашивать списки Сотрудников и сведения по отдельным Сотрудникам. Кодом сущности для Сотрудника в составе JSON API является ключевое слово **employee**. Больше о Сотрудниках и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/204019656-%D0%A1%D0%BE%D1%82%D1%80%D1%83%D0%B4%D0%BD%D0%B8%D0%BA%D0%B8).
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](../#mojsklad-json-api-obschie-swedeniq-kontextnyj-poisk).

Поиск среди объектов сотрудников на соответствие поисковой строке будет осуществлен по следующим полям:

+ По имени Сотрудника **name**
+ По адресу электронной почты **email**
+ По номеру телефона **phone**

#### Атрибуты сущности

| Название         | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                                                            |
| ---------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **accountId**    | UUID                                                      | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                |
| **archived**     | Boolean                                                   | `=` `!=`                                                                                                                                          | Добавлен ли Сотрудник в архив<br>`+Обязательное при ответе`                                                                                                         |
| **attributes**   | Array(Object)                                             | [Операторы доп. полей](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter-fil-traciq-po-dopolnitel-nym-polqm) | Дополнительные поля Сотрудника                                                                                                                                      |
| **cashiers**     | MetaArray                                                 |                                                                                                                                                   | Массив кассиров. [Подробнее тут](../dictionaries/#suschnosti-sotrudnik-sotrudniki-atributy-wlozhennyh-suschnostej-kassir)<br>`+Только для чтения` `+Expand`         |
| **code**         | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Код Сотрудника                                                                                                                                                      |
| **created**      | DateTime                                                  |                                                                                                                                                   | Момент создания Сотрудника<br>`+Обязательное при ответе` `+Только для чтения`                                                                                       |
| **description**  | String(4096)                                              | `=` `!=` `~` `~=` `=~`                                                                                                                            | Комментарий к Сотруднику                                                                                                                                            |
| **email**        | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Электронная почта сотрудника                                                                                                                                        |
| **externalCode** | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код Сотрудника<br>`+Обязательное при ответе`                                                                                                                |
| **firstName**    | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Имя                                                                                                                                                                 |
| **fullName**     | String(255)                                               |                                                                                                                                                   | Имя Отчество Фамилия<br>`+Только для чтения`                                                                                                                        |
| **group**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                                            |
| **id**           | UUID                                                      | `=` `!=`                                                                                                                                          | ID Сотрудника<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                    |
| **image**        | Object                                                    |                                                                                                                                                   | Фотография сотрудника. [Подробнее тут](../dictionaries/#suschnosti-sotrudnik-sotrudniki-atributy-wlozhennyh-suschnostej-fotografiq-sotrudnika-struktura-i-zagruzka) |
| **inn**          | String(255)                                               |                                                                                                                                                   | ИНН сотрудника (в формате ИНН физического лица)                                                                                                                     |
| **lastName**     | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Фамилия<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                                                    |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                                                                                                                                                   | Метаданные Сотрудника<br>`+Обязательное при ответе`                                                                                                                 |
| **middleName**   | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Отчество                                                                                                                                                            |
| **name**         | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование Сотрудника<br>`+Обязательное при ответе` `+Только для чтения`                                                                                          |
| **owner**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Обязательное при ответе` `+Expand`                                                                                                        |
| **phone**        | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Телефон сотрудника                                                                                                                                                  |
| **position**     | String(255)                                               |                                                                                                                                                   | Должность сотрудника                                                                                                                                                |
| **shared**       | Boolean                                                   | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе`                                                                                                                          |
| **shortFio**     | String(255)                                               |                                                                                                                                                   | Краткое ФИО<br>`+Только для чтения`                                                                                                                                 |
| **uid**          | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Логин Сотрудника<br>`+Только для чтения`                                                                                                                            |
| **updated**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления Сотрудника<br>`+Обязательное при ответе` `+Только для чтения`                                                                          |

Поля **owner**, **group** и **archived** может изменять только администратор. Поле **email** может изменять администратор и сам сотрудник.

#### Атрибуты вложенных сущностей
##### Кассир

| Название        | Тип                                                       | Описание                                                                                                               |
| --------------- | :-------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| **accountId**   | UUID                                                      | ID учетной записи Кассира<br>`+Обязательное при ответе` `+Только для чтения`                                           |
| **employee**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные сотрудника, которого представляет собой кассир<br>`+Обязательное при ответе` `+Только для чтения` `+Expand` |
| **id**          | UUID                                                      | ID Кассира<br>`+Обязательное при ответе` `+Только для чтения`                                                          |
| **retailStore** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные точки продаж, к которой прикреплен кассир<br>`+Обязательное при ответе` `+Только для чтения` `+Expand`      |

##### Фотография сотрудника: структура и загрузка.
Структура поля **image**, которое вы получите при запросе сотрудника с фотографией:

| Название      | Тип                                                       | Описание                                                          |
| ------------- | :-------------------------------------------------------- | :---------------------------------------------------------------- |
| **filename**  | String(255)                                               | Имя файла<br>`+Обязательное при ответе`                           |
| **meta**      | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные объекта<br>`+Обязательное при ответе`                  |
| **miniature** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные миниатюры изображения<br>`+Обязательное при ответе`    |
| **size**      | Int                                                       | Размер файла в байтах<br>`+Обязательное при ответе`               |
| **tiny**      | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные уменьшенного изображения<br>`+Обязательное при ответе` |
| **title**     | String(255)                                               | Название Изображения<br>`+Обязательное при ответе`                |
| **updated**   | DateTime                                                  | Время последнего изменения<br>`+Обязательное при ответе`          |

#### Загрузка
Для загрузки фотографии сотрудника необходимо сформировать запрос на [обновление](../dictionaries/#suschnosti-sotrudnik-izmenit-sotrudnika) сотрудника (PUT) и в теле запроса
указать поле **image** со следующими атрибутами:

| Название              | Описание                                          |
| --------------------- | :------------------------------------------------ |
| **filename**          | имя файла с расширением. Например - "cashier.png" |
| **content**           | Изображение, закодированное в формате Base64      |

Если в запросе на обновление не будет полей **filename** и **content**, то весь объект **image**, если он присутствует в Body,
будет проигнорирован, т.к. сервер посчитает, что его обновление не требуется.

О работе с доп. полями Сотрудников можно прочитать [здесь](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)


### Получить Сотрудников 
Запрос на получение списка всех сотрудников для данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                         |
| ----------- | :-------------------------------------------------------- | :----------------------------------------------- |
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                             |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.     |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих Сотрудника. |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

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

| Параметр | Описание                                                                           |
| :------- | :--------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Сотрудника. |

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

| Название         | Тип                                                       | Описание                                                                                                         |
| ---------------- | :-------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Ссылка на метаданные Сотрудников                                                                                 |
| **attributes**   | Array(Object)                                             | Массив объектов доп. полей Сотрудников в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye) |
| **createShared** | Boolean                                                   | Создавать новых Сотрудников с меткой "Общий"                                                                     |

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

| Параметр | Описание                                                                          |
| :------- | :-------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 5290a290-0313-11e6-9464-e4de00000020* id Доп. поля. |

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

| Параметр | Описание                                                                           |
| :------- | :--------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Сотрудника. |

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

| Название              | Описание    |
| --------------------- | :---------- |
| **lastName**          | Фамилия     |
 
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
    "mediaType": "application/json"
  },
  "id": "bc962452-cd64-11e8-ac12-000800000000",
  "accountId": "ffb8f6b1-cd3a-11e8-ac12-000700000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/00f76fbb-cd3b-11e8-ac12-00080000002d",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
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

| Параметр | Описание                                                                           |
| :------- | :--------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Сотрудника. |

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

В данном разделе приведены примеры запросов на получение и изменение прав сотрудника. Получать и изменять права может только 
сотрудник с правами `Системный администратор`.

#### Атрибуты сущности

| Название                | Тип           | Описание                                                                          |
| ----------------------- | :------------ | :-------------------------------------------------------------------------------- |
| **authorizedHosts**     | Array(String) | Список ipv4 адресов, с которых разрешен доступ на аккаунт                         |
| **authorizedIpNetmask** | String(255)   | Маска подсети с правом доступа на аккаунт                                         |
| **authorizedIpNetwork** | String(255)   | Ipv4 адрес, идентифицирующий соответствующую подсеть, с правом доступа на аккаунт |
| **email**               | String(255)   | Почта сотрудника                                                                  |
| **group**               | Object        | Метаданные Группы, а также ее идентификатор и имя<br>`+Обязательное при ответе`   |
| **isActive**            | Boolean       | Доступ к сервису МойСклад<br>`+Обязательное при ответе`                           |
| **login**               | String(255)   | Логин сотрудника для входа в МойСклад                                             |
| **role**                | Object        | Информация о роли Сотрудника                                                      |

#### Атрибуты вложенных сущностей
##### Роль

Роли бывают четырех типов: `Системный администратор`, `Кассир`, `Пользовательская роль` и `Индивидуальная роль`. Использовать
`Индивидуальную роль` (с пермиссиями не по умолчанию) и `Пользовательскую роль` можно только на тарифах `Профессиональный` 
или `Корпоративный`. Для `Индивидуальной роли` можно настраивать список пермиссий, заполняя поле `permissions`.
Если в поле `permissions` указывать не все пермиссии, то не переданные будут выключены. 
Значения по умолчанию выставляются, если пользователь, не указывая индивидуальные пермиссии, задает индивидуальную роль сотруднику, 
у которого ранее не было задано индивидуальных пермиссий.

| Название        | Тип                                                       | Описание                                      |
| --------------- | :-------------------------------------------------------- | :-------------------------------------------- |
| **meta**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные роли<br>`+Обязательное при ответе` |
| **permissions** | Array(Object)                                             | Список пермиссий                              |

###### Список пользовательских пермиссий 

| Название                            | Возможные значения   | Значение по умолчанию  | Описание                                             |
|-------------------------------------| :------------------- | :--------------------- | :--------------------------------------------------- |
| **apiRequest**                      | Boolean              | true                   | Доступ по АПИ                                        |
| **deleteFromRecycleBin**            | Boolean              | true                   | Очищать корзину                                      |
| **editCurrencyRateOfDocument**      | Boolean              | true                   | Редактировать курс валюты документа                  |
| **editDocumentTemplates**           | Boolean              | true                   | Редактировать шаблоны документов и отчетов           |
| **editDocumentsOfRestrictedPeriod** | Boolean              | false                  | Редактировать документы закрытого периода            |
| **exportData**                      | Boolean              | true                   | Экспортировать данные                                |
| **importData**                      | Boolean              | true                   | Импортировать данные                                 |
| **listenCalls**                     | Boolean              | true                   | Прослушивание звонков                                |
| **onlineShops**                     | Boolean              | true                   | Интернет магазины                                    |
| **purchaseControl**                 | Boolean              | true                   | Управление закупками                                 |
| **restoreFromRecycleBin**           | Boolean              | true                   | Восстанавливать документы                            |
| **sendEmail**                       | Boolean              | true                   | Отправлять почту                                     |
| **subscriptionControl**             | Boolean              | false                  | Управление подпиской                                 |
| **viewAudit**                       | Boolean              | false                  | Просматривать аудит                                  |
| **viewCashFlow**                    | Boolean              | true                   | Просматривать движение денежных средств              |
| **viewCommissionGoods**             | Boolean              | true                   | Просматривать товары на реализации                   |
| **viewCompanyCRM**                  | Boolean              | true                   | Просматривать показатели                             |
| **viewCustomerBalanceList**         | Boolean              | true                   | Просматривать взаиморасчеты                          |
| **viewDashboard**                   | Boolean              | true                   | Просматривать показатели                             |
| **viewMoneyDashboard**              | Boolean              | false                  | Видеть остатки денег                                 |
| **viewProductCostAndProfit**        | Boolean              | true                   | Видеть себестоимость, цену закупки и прибыль товаров |
| **viewProfitAndLoss**               | Boolean              | true                   | Просматривать прибыль и убытки                       |
| **viewPurchaseFunnel**              | Boolean              | true                   | Просматривать воронку продаж                         |
| **viewRecycleBin**                  | Boolean              | true                   | Просматривать корзину                                |
| **viewSaleProfit**                  | Boolean              | true                   | Просматривать прибыльность                           |
| **viewSerialNumbers**               | Boolean              | true                   | Просматривать серийные номера                        |
| **viewStockReport**                 | Boolean              | true                   | Просматривать остатки по товарам                     |
| **viewTurnover**                    | Boolean              | true                   | Просматривать обороты                                |

###### Список пермиссий сущностей

Имеется три возможных типа значений пермиссий сущности: `OPERATION`, `DICTIONARY`, `BASE`.
Данные типы имеют следующие поля:

| типы значений пермиссий сущности | view       | create      | update        | delete      | print       | approve     |
| -------------------------------- | :--------- | :---------- | :------------ | :---------- | :---------- | :---------- |
| OPERATION                        | +          | +           | +             | +           | +           | +           |
| DICTIONARY                       | +          | +           | +             | +           | +           | -           |
| BASE                             | +          | +           | +             | +           | -           | -           |


| Название         | Описание             | Ограничения                         |
| ---------------- | :------------------- | :---------------------------------- |
| **view**         | Смотреть             | нет                                 |
| **create**       | Создавать            | совпадает с view или отсутствует    |
| **update**       | Редактировать        | не шире, чем у view или отсутствует |
| **delete**       | Удалять              | совпадает с update или отсутствует  |
| **print**        | Печатать             | совпадает с view или отсутствует    |
| **approve**      | Проводить            | совпадает с view или отсутствует    |

Возможные значения полей `view`, `create`, `update`, `delete`, `approve`, `print`:

| Название             | На кого распространяется |
| -------------------- | :----------------------- |
| **NO**               | Ни на кого               |
| **OWN**              | Только свои              |
| **OWN_SHARED**       | Свои и общие             |
| **OWN_GROUP**        | Свои и отдела            |
| **OWN_GROUP_SHARED** | Свои, отдела и общие     |
| **ALL**              | Все                      |

Значения в порядке их расширения области действия: `NO` &#8594; `OWN` &#8594;  `OWN_SHARED` &#8594; `OWN_GROUP_SHARED` &#8594; `ALL` и 
`NO` &#8594; `OWN` &#8594; `OWN_GROUP` &#8594; `OWN_GROUP_SHARED` &#8594; `ALL`  
 Если не указывать одно из полей, то данное действие будет запрещено к выполнению для данного сотрудника. 
 
 Список пермиссий сущностей
 

| Название                      | Возможные значения   | Значение по умолчанию                       | Описание                               |
|-------------------------------|:---------------------|:--------------------------------------------|:---------------------------------------|
| **GTINList**                  | view, create, delete | Все NO                                      | Список GTIN                            |
| **accountAdjustment**         | DICTIONARY           | Все ALL                                     | Корректировка остатков на счете        |
| **bonusTransaction**          | OPERATION            | Все ALL                                     | Бонусные баллы                         |
| **cashIn**                    | OPERATION            | Все ALL                                     | Приходной ордер                        |
| **cashOut**                   | OPERATION            | Все ALL                                     | Расходной ордер                        |
| **cashboxAdjustment**         | DICTIONARY           | Все ALL                                     | Корректировка остатков в кассе         |
| **commissionReportIn**        | OPERATION            | Все ALL                                     | Полученный отчет комиссионера          |
| **commissionReportOut**       | OPERATION            | Все ALL                                     | Выданный отчет комиссионер             |
| **company**                   | DICTIONARY           | Все ALL                                     | Контрагенты                            |
| **contract**                  | DICTIONARY           | Все ALL                                     | Договоры                               |
| **counterpartyAdjustment**    | DICTIONARY           | Все ALL                                     | Корректировка баланса контрагента      |
| **country**                   | BASE                 | Все ALL                                     | Страны                                 |
| **crptCancellation**          | DICTIONARY           | Все NO                                      | Списание кодов маркировки              |
| **crptPackageCreation**       | DICTIONARY           | Все NO                                      | Формирование упаковки                  |
| **crptPackageDisaggregation** | DICTIONARY           | Все NO                                      | Расформирование упаковки               |
| **crptPackageItemRemoval**    | DICTIONARY           | Все NO                                      | Изъятие из упаковки                    |
| **currency**                  | BASE                 | Все ALL                                     | Валюты                                 |
| **customEntity**              | BASE                 | Все ALL                                     | Элементы пользовательских справочников |
| **customerOrder**             | OPERATION            | Все ALL                                     | Заказ покупателям                      |
| **demand**                    | OPERATION            | Все ALL                                     | Отгрузка                               |
| **emissionOrder**             | DICTIONARY           | Все NO                                      | Заказ кодов маркировки                 |
| **utilizationReport**         | DICTIONARY           | Все NO                                      | Отчет об использовании                 |
| **atkAggregation**            | DICTIONARY           | Все NO                                      | Формирование АТК                       |
| **retireOrderOSU**            | DICTIONARY           | Все NO                                      | Вывод из оборота ОСУ                   |
| **employee**                  | BASE                 | Все ALL                                     | Сотрудники                             |
| **enrollOrder**               | DICTIONARY           | Все NO                                      | Ввод в оборот кодов маркировки         |
| **enter**                     | OPERATION            | Все ALL                                     | Оприходование                          |
| **factureIn**                 | OPERATION            | Все ALL                                     | Счета-фактуры полученные               |
| **factureOut**                | OPERATION            | Все ALL                                     | Счета-фактуры выданные                 |
| **good**                      | DICTIONARY           | Все ALL                                     | Товары и Услуги                        |
| **internalOrder**             | OPERATION            | Все ALL                                     | Внутренние заказы                      |
| **inventory**                 | DICTIONARY           | Все ALL                                     | Инвентаризация                         |
| **invoiceIn**                 | OPERATION            | Все ALL                                     | Счет поставщику                        |
| **invoiceOut**                | OPERATION            | Все ALL                                     | Счет покупателям                       |
| **loss**                      | OPERATION            | Все ALL                                     | Списание                               |
| **move**                      | OPERATION            | Все ALL                                     | Перемещение                            |
| **myCompany**                 | BASE                 | view: ALL, create: NO, edit: NO, delete: NO | Юр. Лица                               |
| **paymentIn**                 | OPERATION            | Все ALL                                     | Входящий платеж                        |
| **paymentOut**                | OPERATION            | Все ALL                                     | Исходящий платеж                       |
| **prepayment**                | OPERATION            | Все ALL                                     | Предоплаты                             |
| **prepaymentReturn**          | OPERATION            | Все ALL                                     | Возврат предоплаты                     |
| **priceList**                 | OPERATION            | Все ALL                                     | Прайс-лист                             |
| **processing**                | BASE                 | Все ALL                                     | Тех. операции                          |
| **processingOrder**           | OPERATION            | Все ALL                                     | Заказ на производство                  |
| **processingPlan**            | BASE                 | Все ALL                                     | Тех. Карты                             |
| **processingStage**           | BASE                 | Все ALL                                     | Этапы производства                     |
| **processingProcess**         | BASE                 | Все ALL                                     | Тех. процессы                          |
| **project**                   | BASE                 | Все ALL                                     | Проекты                                |
| **purchaseOrder**             | OPERATION            | Все ALL                                     | Заказ поставщикам                      |
| **purchaseReturn**            | OPERATION            | Все ALL                                     | Возврат поставщику                     |
| **remainsOrder**              | DICTIONARY           | Все NO                                      | Описание остатков                      |
| **remarkingOrder**            | DICTIONARY           | Все NO                                      | Перемаркировка                         |
| **retailDemand**              | OPERATION            | Все ALL                                     | Продажи                                |
| **retailDrawerCashIn**        | OPERATION            | Все ALL                                     | Внесения                               |
| **retailDrawerCashOut**       | OPERATION            | Все ALL                                     | Выплаты                                |
| **retailSalesReturn**         | OPERATION            | Все ALL                                     | Возвраты                               |
| **retailShift**               | DICTIONARY           | Все ALL                                     | Смены                                  |
| **retailStore**               | BASE                 | Все ALL                                     | Точка продаж                           |
| **retireOrder**               | DICTIONARY           | Все NO                                      | Вывод из оборота                       |
| **salesReturn**               | OPERATION            | Все ALL                                     | Возврат покупателя                     |
| **supply**                    | OPERATION            | Все ALL                                     | Приемки                                |
| **taxrate**                   | BASE                 | Все ALL                                     | Ставки НДС                             |
| **trackingCodeList**          | view, print          | Все NO                                      | Коды маркировки                        |
| **uom**                       | BASE                 | Все ALL                                     | Единицы измерения                      |
| **warehouse**                 | BASE                 | Все ALL                                     | Склады                                 |

Для пермиссий `currency`, `country`, `taxrate` и `uom` значение `view` не изменяемое и равно `ALL`. При попытке изменить значение `view`
 для данных пермиссий, будет возвращена ошибка.
 
Для пермиссий `GTINList`, `trackingCodeList` возможные значения полей - `ALL` или `NO`.

###### Пермиссии для задач

Пермиссии `script` для задач имеют следующие поля:

| Название         | Описание             | Ограничения                                  | Возможные значения                    |
| ---------------- | :------------------- | :------------------------------------------- | :------------------------------------ |
| **view**         | Смотреть             | нет                                          | NO, AUTHOR_OR_ASSIGNEE, ALL           |
| **create**       | Создавать            | не шире, чем у view или отсутствует          | NO, ALL                               |
| **update**       | Редактировать        | не шире, чем у view или отсутствует          | NO, AUTHOR, AUTHOR_OR_ASSIGNEE, ALL   |
| **delete**       | Удалять              | не шире значения поля update или отсутствует | NO, AUTHOR, AUTHOR_OR_ASSIGNEE, ALL   |
| **done**         | Выполнять            | не шире, чем у view или отсутствует          | NO, ASSIGNEE, AUTHOR_OR_ASSIGNEE, ALL |

Значение `NO` допустимо для `view` и `done` только если все остальные значения `NO`. 
В случае, если значение поле `view` отлично от `NO`, то поле `done` обязательно к передаче и значение должно совпадать, 
со значением поля `view`.

Возможные значения полей `view`, `create`, `update`, `delete`, `done`:

| Название               | На какие задачи распространяется                   |
| ---------------------- | :------------------------------------------------- |
| **NO**                 | Нет прав ни на какие задачи                        |
| **AUTHOR_OR_ASSIGNEE** | Созданные пользователем и назначенные ему          |
| **ASSIGNEE**           | Назначенные                                        |
| **AUTHOR**             | Созданные пользователем                            |
| **ALL**                | Возможность совершать действие над любыми задачами |

### Получить информацию о правах Сотрудника

Запрос на получение информации о правах Сотрудника.

**Параметры**

| Параметр | Описание                                                                           |
| :------- | :--------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Сотрудника. |

> Пример запроса на получения информации о правах Сотрудника.

```shell
  curl -X GET
    "https://online.moysklad.ru/api/remap/1.2/entity/employee/7944ef04-f831-11e5-7a69-971500188b19/security"
    -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление информации о правах Сотрудника с пользовательской ролью.

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
    "authorizedHosts": [
        "1.15.15.5"
    ],
    "authorizedIpNetwork": "80.8.8.8",
    "authorizedIpNetmask": "1.8.8.8",
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
            "remarkingOrder": {
                "view": "NO",
                "print": "NO",
                "create": "NO",
                "update": "NO",
                "delete": "NO"
            },
            "invoiceIn": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "contract": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "prepayment": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "good": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
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
            "enter": {
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
            "emissionOrder": {
                "view": "NO",
                "print": "NO",
                "create": "NO",
                "update": "NO",
                "delete": "NO"
            },
            "utilizationReport": {
              "view": "NO",
              "print": "NO",
              "create": "NO",
              "update": "NO",
              "delete": "NO"
            },
            "atkAggregation": {
              "view": "NO",
              "print": "NO",
              "create": "NO",
              "update": "NO",
              "delete": "NO"
            },
            "retireOrderOSU": {
              "view": "NO",
              "print": "NO",
              "create": "NO",
              "update": "NO",
              "delete": "NO"
            },
            "commissionReportOut": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "myCompany": {
                "view": "ALL",
                "create": "NO",
                "update": "NO",
                "delete": "NO"
            },
            "customerOrder": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "commissionReportIn": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "warehouse": {
                "view": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "purchaseOrder": {
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
            "retailDrawerCashIn": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "counterpartyAdjustment": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "cashOut": {
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
            "cashIn": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "enrollOrder": {
                "view": "NO",
                "print": "NO",
                "create": "NO",
                "update": "NO",
                "delete": "NO"
            },
            "priceList": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "crptPackageItemRemoval": {
                "view": "NO",
                "print": "NO",
                "create": "NO",
                "update": "NO",
                "delete": "NO"
            },
            "employee": {
                "view": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "supply": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "processing": {
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
            "demand": {
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
            "retailDrawerCashOut": {
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
            "remainsOrder": {
                "view": "NO",
                "print": "NO",
                "create": "NO",
                "update": "NO",
                "delete": "NO"
            },
            "customEntity": {
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
            "project": {
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
            "inventory": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "trackingCodeList": {
                "view": "NO",
                "print": "NO"
            },
            "crptPackageCreation": {
                "view": "NO",
                "print": "NO",
                "create": "NO",
                "update": "NO",
                "delete": "NO"
            },
            "retireOrder": {
                "view": "NO",
                "print": "NO",
                "create": "NO",
                "update": "NO",
                "delete": "NO"
            },
            "GTINList": {
                "view": "NO",
                "create": "NO",
                "delete": "NO"
            },
            "move": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "currency": {
                "view": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "enrollReturn": {
                "view": "NO",
                "print": "NO",
                "create": "NO",
                "update": "NO",
                "delete": "NO"
            },
            "processingOrder": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "processingprocess": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "processingstage" : {
                "view" : "ALL",
                "create" : "ALL",
                "update" : "ALL",
                "delete" : "ALL"
            },
            "country": {
                "view": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "invoiceOut": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "company": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "crptCancellation": {
                "view": "NO",
                "print": "NO",
                "create": "NO",
                "update": "NO",
                "delete": "NO"
            },
            "retailStore": {
                "view": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "factureOut": {
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
            "accountAdjustment": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
            },
            "loss": {
                "view": "ALL",
                "print": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL",
                "approve": "ALL"
            },
            "crptPackageDisaggregation": {
                "view": "NO",
                "print": "NO",
                "create": "NO",
                "update": "NO",
                "delete": "NO"
            },
            "processingPlan": {
                "view": "ALL",
                "create": "ALL",
                "update": "ALL",
                "delete": "ALL"
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
            "script": {
                "view": "AUTHOR_OR_ASSIGNEE",
                "create": "ALL",
                "done": "AUTHOR_OR_ASSIGNEE",
                "update": "AUTHOR",
                "delete": "AUTHOR"
            },
            "taxrate": {
             "view": "ALL",
             "create": "ALL",
             "update": "ALL",
             "delete": "ALL"
            }
        }
    }
}
```

### Изменить информацию о правах Сотрудника

Запрос на изменение информации о правах Сотрудника.

Если у пользователя есть возможность настраивать пермиссии для индивидуальной роли, 
то при установке индивидуальной роли пермиссии выставятся в соответствии с теми, что были переданы в поле `permissions`, остальные пермиссии 
будут выставлены в `NO`, кроме `view` равное `ALL` для `currency`, `country` и `uom`. В случае отсутствия поля `permissions` 
будут заданы значения пермиссий, которые были у сотрудника до смены роли (по умолчанию, если не были).

Если тариф не позволяет менять пермиссии и переданные или ранее выставленные пермиссии отличаются от значений по умолчанию, то вернётся ошибка без смены роли.

**Параметры**

| Параметр | Описание                                                                           |
| :------- | :--------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Сотрудника. |

> Пример запроса на изменение информации о правах Сотрудника.

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
            "authorizedHosts": [
                "20.20.15.5"
            ],
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
Успешный запрос. Результат - JSON представление обновленной информации о правах Сотрудника с ролью администратора.

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
    "authorizedHosts": [
        "20.20.15.5"
    ],
    "authorizedIpNetwork": "80.8.8.8",
    "authorizedIpNetmask": "1.8.8.8",
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

| Параметр | Описание                                                                           |
| :------- | :--------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Сотрудника. |

Если пользователь ранее не был активным, то при запросе необходимо указать поле `login`. Формат поля аналогичен формату 
в сервисе МойСклад. Успешным результатом выполнения запроса будет json, содержащий поле `mailActivationRequired` со значением 
true. Это означает, что на указанную у сотрудника почту было выслано письмо со ссылкой на вход для сотрудника.

Если пользователь уже был ранее активным, то при активации не нужно указывать поле `login`. 
Успешным результатом выполнения запроса будет json, содержащий поле `mailActivationRequired` со значением false. В данном 
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
Успешный запрос. Результат - JSON представление обновленной информации об активированном Сотруднике с ролью кассира.

```json
{
    "mailActivationRequired": true
}
```

### Деактивация Сотрудника

Запрос на деактивацию Сотрудника в сервисе МойСклад.

**Параметры**

| Параметр | Описание                                                                           |
| :------- | :--------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Сотрудника. |

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

| Параметр | Описание                                                                           |
| :------- | :--------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Сотрудника. |

> Пример запроса на сброс пароля Сотрудника.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/employee/7944ef04-f831-11e5-7a69-971500188b19/access/resetpassword"
    -H "Authorization: Basic <Credentials>"
```

> Response 204


### Запрос на получение роли админа

> Пример запроса на получение роли админа.

```shell
  curl -X GET
    "https://online.moysklad.ru/api/remap/1.2/entity/role/admin"
    -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление информации о роли админа.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/role/admin",
    "type": "systemrole",
    "mediaType": "application/json"
  }
}
```

### Запрос на получение индивидуальной роли

> Пример запроса на получение индивидуальной роли.

```shell
  curl -X GET
    "https://online.moysklad.ru/api/remap/1.2/entity/role/individual"
    -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление информации индивидуальной роли.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/role/individual",
    "type": "individualrole",
    "mediaType": "application/json"
  }
}
```

### Запрос на получение роли кассира

> Пример запроса на получение роли кассира.

```shell
  curl -X GET
    "https://online.moysklad.ru/api/remap/1.2/entity/role/cashier"
    -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление информации о роли кассира

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/role/cashier",
    "type": "systemrole",
    "mediaType": "application/json"
  }
}
```
