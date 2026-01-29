## Задача
Средствами JSON API можно создавать и обновлять сведения о задачах, запрашивать списки задач и сведения по отдельным задачам. Кодом сущности для задачи в составе JSON API является ключевое слово **task**. Больше о задачах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по  [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203392263-%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%B8).
### Задачи 
#### Атрибуты сущности

| Название              | Тип                                                       | Фильтрация                  | Описание                                                                                                                                                |
|-----------------------| :-------------------------------------------------------- | :-------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**         | UUID                                                      | `=` `!=`                    | ID учетной записи Кассира<br>`+Обязательное при ответе` `+Только для чтения`                                                                            |
| **agent**             | [Meta](#/general#3-metadannye) | `=` `!=`                    | Метаданные Контрагента или юрлица, связанного с задачей. Задача может быть привязана либо к конрагенту, либо к юрлицу, либо к документу<br>`+Expand`    |
| **assignee**          | [Meta](#/general#3-metadannye) | `=` `!=`                    | Метаданные ответственного за выполнение задачи<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                       |
| **author**            | [Meta](#/general#3-metadannye) | `=` `!=`                    | Метаданные Сотрудника, создавшего задачу (администратор аккаунта, если автор - Решение)<br>`+Обязательное при ответе` `+Только для чтения` `+Expand` |
| **authorApplication** | [Meta](#/general#3-metadannye) |                             | Метаданные Решения, создавшего задачу<br>`+Только для чтения` `+Expand`                                                                              |
| **completed**         | DateTime                                                  |                             | Время выполнения задачи<br>`+Обязательное при ответе` `+Только для чтения`                                                                              |
| **created**           | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`  | Момент создания<br>`+Обязательное при ответе` `+Только для чтения`                                                                                      |
| **description**       | String(4096)                                              | `=` `!=` `~` `~=` `=~`      | Текст задачи<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                                   |
| **done**              | Boolean                                                   | `=` `!=`                    | Отметка о выполнении задачи<br>`+Обязательное при ответе`                                                                                               |
| **dueToDate**         | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`  | Срок задачи                                                                                                                                             |
| **files**             | MetaArray                                                 |                             | Метаданные массива [Файлов](#/dictionaries/files#2-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand`           |
| **id**                | UUID                                                      | `=` `!=`                    | ID Задачи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                            |
| **implementer**       | [Meta](#/general#3-metadannye) |                             | Метаданные Сотрудника, выполнившего задачу<br>`+Только для чтения` `+Expand`                                                                            |
| **meta**              | [Meta](#/general#3-metadannye) |                             | Метаданные Задачи<br>`+Обязательное при ответе`                                                                                                         |
| **state**             | [Meta](#/general#3-metadannye) |                             | Метаданные Типа задачи<br>`+Expand`                                                                                                                     |
| **notes**             | [Meta](#/general#3-metadannye) |                             | Метаданные комментария к задаче<br>`+Обязательное при ответе` `+Expand`                                                                                 |
| **operation**         | [Meta](#/general#3-metadannye) | `=` `!=`                    | Метаданные Документа, связанного с задачей. Задача может быть привязана либо к конрагенту, либо к юрлицу, либо к документу<br>`+Expand`                 |
| **updated**           | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`  | Момент последнего обновления Задачи<br>`+Обязательное при ответе` `+Только для чтения`                                                                  |

#### Комментарии задачи
Объект комментария к задаче содержит следующие поля:

| Название              | Тип                                                       | Описание                                                                                                                                           |
| --------------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| **author**            | [Meta](#/general#3-metadannye) | Метаданные Сотрудника, создавшего комментарий (администратор аккаунта, если автор - решение)<br>`+Обязательное при ответе` `+Только для чтения` |
| **authorApplication** | [Meta](#/general#3-metadannye) | Метаданные Решения, создавшего комментарий<br>`+Только для чтения`                                                                              |
| **moment**            | DateTime                                                  | Момент создания комментария<br>`+Обязательное при ответе` `+Только для чтения`                                                                     |
| **description**       | String(4096)                                              | Текст комментария<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                         |

#### Тип задачи
Объект типа задачи содержит следующие поля:

| Название       | Тип                                                       | Описание                                                                                  |
| -------------- |:----------------------------------------------------------|:------------------------------------------------------------------------------------------|
| **accountId**  | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                      |
| **color**      | Int                                                       | Цвет Типа задачи<br>`+Обязательное при ответе` `+Необходимо при создании`                 |
| **entityType** | String(255)                                               | Тип сущности - всегда является task<br>`+Обязательное при ответе` `+Только для чтения`    |
| **id**         | UUID                                                      | ID Типа задачи<br>`+Обязательное при ответе` `+Только для чтения`                         |
| **meta**       | [Meta](#/general#3-metadannye) | Метаданные Типа задачи<br>`+Обязательное при ответе` `+Только для чтения`                 |
| **name**       | String(255)                                               | Наименование Типа задачи<br>`+Обязательное при ответе` `+Необходимо при создании`         |
| **stateType**  | Enum                                                      | Тип Статуса<br>`+Обязательное при ответе`                      |

Поле **color** передается в АПИ как целое число состоящее из 4х байт.
Т.к. цвет передается в цветовом пространстве ARGB, каждый байт отвечает за свой
цвет соответственно: 1 - за прозрачность, 2 - за красный цвет, 3 - за зеленый,
4 - за синий. Каждый байт принимает значения от 0 до 255 как и цвет в каждом из
каналов цветового пространства. Получившееся в итоге из 4 записанных последовательно байт
число, переведенное в 10-чную систему счисления и является представлением цвета статуса в JSON API.

Пример: цвету `rgb(162, 198, 23)` будет соответствовать следующее значение поля `"color": 10667543`.

#### Отображение списка по умолчанию
##### Для администратора
Если текущий сотрудник обладает правами администратора, то при запросе списка задач ему будут выведены все активные  (**done** = false) задачи, как те,
 что относятся к нему (сотрудник является создателем или исполнителем задачи), так и те, что относятся к другим сотрудникам.
 
##### Для сотрудника
Для сотрудника, не являющегося администратором, но имеющего право на просмотр всех задач, список задач по умолчанию будет аналогичен списку задач, выводимому для администратора. В противном случае, при запросе списка задач без каких-либо фильтров, будут выведены активные (**done** = false) задачи, которые создал текущий сотрудник и задачи, за которые ответственен текущий сотрудник.

#### Фильтры из web-интерфейса
В основном интерфейсе МоегоСклада для отображения списка задач существует 3 группы фильтров:

+ Фильтр по связанности с текущим сотрудником: `Поручено мне`, `Я поручил`, `Все задачи` (отображается только у администраторов)
+ Фильтр по готовности задачи: `Активные`, `Выполненные`.
+ Фильтр по типу задачи.

Чтобы реализовать подобную фильтрацию списка для JSON API, нужно использовать следующие фильтры для списка задач:

+ **Поручено мне**: фильтр по полю **assignee** в значении которого указана ссылка на текущего сотрудника<br>
`https://api.moysklad.ru/api/remap/1.2/entity/task?filter=assignee=https://api.moysklad.ru/api/remap/1.2/entity/employee/<id текущего сотрудника>`
+ **Я поручил**: фильтр по полю **author** в значении которого указана ссылка на текущего сотрудника<br>
`https://api.moysklad.ru/api/remap/1.2/entity/task?filter=author=https://api.moysklad.ru/api/remap/1.2/entity/employee/<id текущего сотрудника>`
+ **Все задачи**: не требует фильтрации. Обратите внимание на пункт [Отображение списка по умолчанию](#/dictionaries/task#4-otobrazhenie-spiska-po-umolchaniyu)
+ **Активные**: фильтр по полю **done** со значением false<br>
`https://api.moysklad.ru/api/remap/1.2/entity/task?filter=done=false`
+ **Выполненные**: фильтр по полю **done** со значением true<br>
`https://api.moysklad.ru/api/remap/1.2/entity/task?filter=done=true`
+ **Тип задачи**: фильтр по полю **state.name**<br>
+ `https://api.moysklad.ru/api/remap/1.2/entity/task?filter=state.name=<название типа задачи>`

#### Права доступа
| Операция                                                                          | Доступ                                                                        |
| --------------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| Выполнение задачи                                                                 | необходима тарифная опция CRM, администратор, создатель задачи, ответственный |
| Отмена выполнения задачи                                                          | необходима тарифная опция CRM, администратор, создатель задачи, ответственный |
| Просмотр задач в которых текущий пользователь является ответственным или автором  | Все                                                                           |
| Просмотр любых задач                                                              | пользователь с правом на просмотр всех задач или администратор                |
| Редактирование задачи                                                             | необходима тарифная опция CRM, администратор, создатель задачи                |
| Создание задачи                                                                   | необходима тарифная опция CRM, все                                            |
| Удаление задачи                                                                   | Администратор, создатель задачи                                               |



### Получить задачи 
Получить список задач.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                                            |
| ----------- | :-------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| **meta**    | [Meta](#/general#3-metadannye) | Метаданные о выдаче,                                                                |
| **context** | [Meta](#/general#3-metadannye) | Метаданные о сотруднике, выполнившем запрос.                                        |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих [Задачи](#/dictionaries/task#2-zadacha). |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить задачи 

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/task" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка задач.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/task",
    "type": "task",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/47bc1d9b-8b87-11e8-d9ce-84d900000017",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata",
        "type": "task",
        "mediaType": "application/json"
      },
      "id": "47bc1d9b-8b87-11e8-d9ce-84d900000017",
      "accountId": "98182760-8aa1-11e8-7210-075e00000001",
      "author": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=98fa7086-8aa1-11e8-7210-075e0000002c"
        }
      },
      "created": "2018-07-19 22:09:37",
      "updated": "2018-07-19 22:10:01",
      "description": "task3",
      "dueToDate": "2018-07-20 22:09:00",
      "assignee": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=98fa7086-8aa1-11e8-7210-075e0000002c"
        }
      },
      "done": false,
      "agent": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/992b6965-8aa1-11e8-7210-075e00000057",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=992b6965-8aa1-11e8-7210-075e00000057"
        }
      },
      "notes": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/47bc1d9b-8b87-11e8-d9ce-84d900000017/notes",
          "type": "tasknote",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/aaca57a2-8b86-11e8-d9ce-84d900000007",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata",
        "type": "task",
        "mediaType": "application/json"
      },
      "id": "aaca57a2-8b86-11e8-d9ce-84d900000007",
      "accountId": "98182760-8aa1-11e8-7210-075e00000001",
      "author": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=98fa7086-8aa1-11e8-7210-075e0000002c"
        }
      },
      "created": "2018-07-19 22:05:14",
      "updated": "2018-07-19 22:09:42",
      "description": "task1",
      "dueToDate": "2018-07-20 22:05:00",
      "assignee": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=98fa7086-8aa1-11e8-7210-075e0000002c"
        }
      },
      "done": false,
      "operation": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/supply/7eb5b552-8aa3-11e8-7210-075e000000f1",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/supply/metadata",
          "type": "supply",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#supply/edit?id=7eb5b552-8aa3-11e8-7210-075e000000f1"
        }
      },
      "notes": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/aaca57a2-8b86-11e8-d9ce-84d900000007/notes",
          "type": "tasknote",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      }
    }
  ]
}
```

### Создать Задачу 
Создать новую задачу. Для создания новых задач необходима активная тарифная опция [CRM](https://support.moysklad.ru/hc/ru/articles/216649748-CRM-%D0%A0%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%81-%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%BE%D0%B9-%D0%B1%D0%B0%D0%B7%D0%BE%D0%B9).
Обязательные для создания поля:


| Название        | Тип                                                       | Описание                                                                                                                      |
| --------------- | :-------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| **description** | String(4096)                                              | Текст задачи<br>`+Обязательное при ответе` `+Необходимо при создании`                                                         |
| **assignee**    | [Meta](#/general#3-metadannye) | Метаданные Сотрудника, ответственного за выполнение задачи<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании` |

> Пример запроса на создание новой задачи.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/task" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "description": "Исправить реквизиты юрлица",
            "dueToDate": "2017-05-12 17:12:00",
            "assignee": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "type": "employee",
                "mediaType": "application/json"
              }
            },
            "done": false,
            "agent": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/9927bf0d-8aa1-11e8-7210-075e00000054",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной задачи.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/cfe5a6ae-8b87-11e8-d9ce-84d900000000",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata",
    "type": "task",
    "mediaType": "application/json"
  },
  "id": "cfe5a6ae-8b87-11e8-d9ce-84d900000000",
  "accountId": "98182760-8aa1-11e8-7210-075e00000001",
  "author": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=98fa7086-8aa1-11e8-7210-075e0000002c"
    }
  },
  "created": "2018-07-19 22:13:25",
  "updated": "2018-07-19 22:13:25",
  "description": "Исправить реквизиты юрлица",
  "dueToDate": "2017-05-12 17:12:00",
  "assignee": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=98fa7086-8aa1-11e8-7210-075e0000002c"
    }
  },
  "done": false,
  "agent": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/9927bf0d-8aa1-11e8-7210-075e00000054",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=9927bf0d-8aa1-11e8-7210-075e00000054"
    }
  },
  "notes": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/cfe5a6ae-8b87-11e8-d9ce-84d900000000/notes",
      "type": "tasknote",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Массовое создание и обновление Задач 
[Массовое создание и обновление](#/general#3-sozdanie-i-obnovlenie-neskolkih-obuektov) Задач.
В теле запроса нужно передать массив, содержащий JSON представления Задач, которые вы хотите создать или обновить.
Обновляемые Задачи должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Задач

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/task" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '[
            {
              "description": "Исправить реквизиты юрлица",
              "dueToDate": "2017-05-12 17:12:00",
              "assignee": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                  "type": "employee",
                  "mediaType": "application/json"
                }
              },
              "done": false,
              "agent": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/9927bf0d-8aa1-11e8-7210-075e00000054",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              }
            },
            {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/cfe5a6ae-8b87-11e8-d9ce-84d900000000",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata",
                "type": "task",
                "mediaType": "application/json"
              },
              "description": "Уточнить контактные лица",
              "assignee": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                  "type": "employee",
                  "mediaType": "application/json"
                }
              },
              "done": true,
              "agent": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/992b6965-8aa1-11e8-7210-075e00000057",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                  "type": "counterparty",
                  "mediaType": "application/json"
                }
              }
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Задач.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/9971ba00-8b88-11e8-d9ce-84d900000009",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata",
      "type": "task",
      "mediaType": "application/json"
    },
    "id": "9971ba00-8b88-11e8-d9ce-84d900000009",
    "accountId": "98182760-8aa1-11e8-7210-075e00000001",
    "author": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=98fa7086-8aa1-11e8-7210-075e0000002c"
      }
    },
    "created": "2018-07-19 22:19:04",
    "updated": "2018-07-19 22:19:04",
    "description": "Исправить реквизиты юрлица",
    "dueToDate": "2017-05-12 17:12:00",
    "assignee": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=98fa7086-8aa1-11e8-7210-075e0000002c"
      }
    },
    "done": false,
    "agent": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/9927bf0d-8aa1-11e8-7210-075e00000054",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=9927bf0d-8aa1-11e8-7210-075e00000054"
      }
    },
    "notes": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/9971ba00-8b88-11e8-d9ce-84d900000009/notes",
        "type": "tasknote",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    }
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/cfe5a6ae-8b87-11e8-d9ce-84d900000000",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata",
      "type": "task",
      "mediaType": "application/json"
    },
    "id": "cfe5a6ae-8b87-11e8-d9ce-84d900000000",
    "accountId": "98182760-8aa1-11e8-7210-075e00000001",
    "author": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=98fa7086-8aa1-11e8-7210-075e0000002c"
      }
    },
    "created": "2018-07-19 22:13:25",
    "updated": "2018-07-19 22:19:04",
    "description": "Уточнить контактные лица",
    "dueToDate": "2017-05-12 17:12:00",
    "implementer": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=98fa7086-8aa1-11e8-7210-075e0000002c"
      }
    },
    "completed": "2018-07-19 22:19:04",
    "assignee": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=98fa7086-8aa1-11e8-7210-075e0000002c"
      }
    },
    "done": true,
    "agent": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/992b6965-8aa1-11e8-7210-075e00000057",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=992b6965-8aa1-11e8-7210-075e00000057"
      }
    },
    "notes": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/cfe5a6ae-8b87-11e8-d9ce-84d900000000/notes",
        "type": "tasknote",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    }
  }
]
```

### Удалить задачу

Запрос на удаление задачи с указанным id. Для удаления задач необходима активная тарифная опция [CRM](https://support.moysklad.ru/hc/ru/articles/216649748-CRM-%D0%A0%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%81-%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%BE%D0%B9-%D0%B1%D0%B0%D0%B7%D0%BE%D0%B9).
Также нельзя удалить задачи, созданные другими сотрудниками, без прав администратора.

**Параметры**

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 47bc1d9b-8b87-11e8-d9ce-84d900000017* id задачи. |

> Запрос на удаление задачи с указанным id.

```shell
curl --compressed -X DELETE \
  "https://api.moysklad.ru/api/remap/1.2/entity/task/47bc1d9b-8b87-11e8-d9ce-84d900000017" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление задачи.

### Массовое удаление Задач

В теле запроса нужно передать массив, содержащий JSON метаданных Задач, которые вы хотите удалить.


> Запрос на массовое удаление Задач. 

```shell
curl --compressed -X POST \
  "https://api.moysklad.ru/api/remap/1.2/entity/task/delete" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
  -d '[
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/7944ef04-f831-11e5-7a69-971500188b1",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata",
                "type": "task",
                "mediaType": "application/json"
            }
        },
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/7944ef04-f831-11e5-7a69-971500188b2",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata",
                "type": "task",
                "mediaType": "application/json"
            }
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Задач.

```json
[
  {
    "info":"Сущность 'task' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'task' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
```

### Запросы - Задача 

### Получить задачу

**Параметры**

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 47bc1d9b-8b87-11e8-d9ce-84d900000017* id задачи. |
 
> Запрос на получение отдельной задачи с указанным id.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/task/47bc1d9b-8b87-11e8-d9ce-84d900000017" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление задачи с указанным id.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/47bc1d9b-8b87-11e8-d9ce-84d900000017",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata",
    "type": "task",
    "mediaType": "application/json"
  },
  "id": "47bc1d9b-8b87-11e8-d9ce-84d900000017",
  "accountId": "98182760-8aa1-11e8-7210-075e00000001",
  "author": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=98fa7086-8aa1-11e8-7210-075e0000002c"
    }
  },
  "created": "2018-07-19 22:09:37",
  "updated": "2018-07-19 22:13:10",
  "description": "task3",
  "dueToDate": "2018-07-20 22:09:00",
  "assignee": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=98fa7086-8aa1-11e8-7210-075e0000002c"
    }
  },
  "done": false,
  "agent": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/9927bf0d-8aa1-11e8-7210-075e00000054",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=9927bf0d-8aa1-11e8-7210-075e00000054"
    }
  },
  "notes": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/47bc1d9b-8b87-11e8-d9ce-84d900000017/notes",
      "type": "tasknote",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Изменить задачу 
#### Описание обновления существующей задачи
Изменить задачу с указанным id. Для изменения задач необходима активная тарифная опция [CRM](https://support.moysklad.ru/hc/ru/articles/216649748-CRM-%D0%A0%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%81-%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%BE%D0%B9-%D0%B1%D0%B0%D0%B7%D0%BE%D0%B9).
Также нельзя изменять задачи, созданные другими сотрудниками, без прав администратора.

**Параметры**

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 47bc1d9b-8b87-11e8-d9ce-84d900000017* id задачи. |

> Пример запроса на обновление существующей задачи.

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/task/47bc1d9b-8b87-11e8-d9ce-84d900000017" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "description": "Уточнить контактные лица",
            "assignee": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "type": "employee",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=98fa7086-8aa1-11e8-7210-075e0000002c"
              }
            },
            "done": true,
            "agent": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/9927bf0d-8aa1-11e8-7210-075e00000054",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=9927bf0d-8aa1-11e8-7210-075e00000054"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной задачи.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/47bc1d9b-8b87-11e8-d9ce-84d900000017",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata",
    "type": "task",
    "mediaType": "application/json"
  },
  "id": "47bc1d9b-8b87-11e8-d9ce-84d900000017",
  "accountId": "98182760-8aa1-11e8-7210-075e00000001",
  "author": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=98fa7086-8aa1-11e8-7210-075e0000002c"
    }
  },
  "created": "2018-07-19 22:09:37",
  "updated": "2018-07-19 22:24:50",
  "description": "Уточнить контактные лица",
  "dueToDate": "2018-07-20 22:09:00",
  "implementer": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=98fa7086-8aa1-11e8-7210-075e0000002c"
    }
  },
  "completed": "2018-07-19 22:24:24",
  "assignee": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=98fa7086-8aa1-11e8-7210-075e0000002c"
    }
  },
  "done": true,
  "agent": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/9927bf0d-8aa1-11e8-7210-075e00000054",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=9927bf0d-8aa1-11e8-7210-075e00000054"
    }
  },
  "notes": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/47bc1d9b-8b87-11e8-d9ce-84d900000017/notes",
      "type": "tasknote",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Комментарии Задачи 
Отдельный ресурс для управления комментариями Задачи. С его помощью вы можете управлять комментариями задачи, в которой количество комментариев превышает лимит на количество комментариев, сохраняемых вместе с задачей. Этот лимит равен 100.

Комментарии Задачи могут содержать упоминания других сущностей прямо в тексте комментария. 
Формат упоминания: `{{type;uuid}}`. Например, при упоминании сотрудника, комментарий может выглядеть таким образом:
`Привет, {{employee;861d34a9-f1b3-11ee-ac12-00110000004e}}! Задача актуальна?`. Формат отображения активной/архивной/удаленной сущности одинаков. 

**Внимание!** Если сущность с таким UUID не была найдена, то в web-интерфейсе выведется текст без какой-либо обработки. 

Поддерживаемые типы сущностей в упоминаниях:

+ [Сотрудник](#/dictionaries/employee#2-sotrudnik)

### Получить комментарии Задачи 
Запрос на получение списка всех комментариев данной Задачи.

| Название    | Тип                                                       | Описание                                                   |
| ----------- | :-------------------------------------------------------- | :--------------------------------------------------------- |
| **meta**    | [Meta](#/general#3-metadannye) | Метаданные о выдаче,                                       |
| **context** | [Meta](#/general#3-metadannye) | Метаданные о сотруднике, выполнившем запрос.               |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих комментарий к Задаче. |

**Параметры**

| Параметр        | Описание                                                                                                                                                                                                                                                                |
| :-------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **id**          | `string` (required) *Example: 47bc1d9b-8b87-11e8-d9ce-84d900000017* id задачи.                                                                                                                                                                                          |
| **limit**       | `number` (optional) **Default: 25** *Example: 100* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 100`.                                                                                                                                      |
| **offset**      | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей                                                                                                                                                                                   |
| **updatedBy**   | `string` (optional) *Example: admin@admin* Один из [параметров фильтрации выборки](#/general#3-filtraciya-vyborki-s-pomoshyu-parametra-filter). Формат строки : `uid`                                                                       |
| **updatedFrom** | `string` (optional) *Example: 2016-04-15 15:48:46* Один из [параметров фильтрации выборки](#/general#3-filtraciya-vyborki-s-pomoshyu-parametra-filter). Формат строки : `ГГГГ-ММ-ДД ЧЧ:ММ:СС[.ммм]`, Часовой пояс: `MSK` (Московское время) |
| **updatedTo**   | `string` (optional) *Example: 2016-04-15 15:48:46* Один из [параметров фильтрации выборки](#/general#3-filtraciya-vyborki-s-pomoshyu-parametra-filter). Формат строки : `ГГГГ-ММ-ДД ЧЧ:ММ:СС[.ммм]`, Часовой пояс: `MSK` (Московское время) |

> Получить комментарии Задачи

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/task/47bc1d9b-8b87-11e8-d9ce-84d900000017/notes" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```
 
> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка комментариев отдельной Задачи.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/47bc1d9b-8b87-11e8-d9ce-84d900000017/notes",
    "type": "tasknote",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/47bc1d9b-8b87-11e8-d9ce-84d900000017/notes/55eaa2cc-8b87-11e8-d9ce-84d900000025",
        "type": "tasknote",
        "mediaType": "application/json"
      },
      "author": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=98fa7086-8aa1-11e8-7210-075e0000002c"
        }
      },
      "text": "текст комментария 1",
      "moment": "2018-07-19 22:10:01"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/47bc1d9b-8b87-11e8-d9ce-84d900000017/notes/55eaac82-8b87-11e8-d9ce-84d900000026",
        "type": "tasknote",
        "mediaType": "application/json"
      },
      "author": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=98fa7086-8aa1-11e8-7210-075e0000002c"
        }
      },
      "text": "текст комментария 2",
      "moment": "2018-07-19 22:10:01"
    }
  ]
}
```

### Создать комментарий Задачи 
Запрос на создание нового комментария к Задаче.
Для успешного создания необходимо в теле запроса указать следующие поля:

| Название | Тип          | Описание                                                                   |
| -------- | :----------- | :------------------------------------------------------------------------- |
| **text** | String(4096) | Текст комментария<br>`+Обязательное при ответе` `+Необходимо при создании` |

**Параметры**

| Параметр | Описание                                                                       |
| :------- | :----------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 47bc1d9b-8b87-11e8-d9ce-84d900000017* id задачи. |

> Пример создания одного комментария к Задаче.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/task/47bc1d9b-8b87-11e8-d9ce-84d900000017/notes" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "text": "Привет, {{employee;861d34a9-f1b3-11ee-ac12-00110000004e}}! Задача актуальна?"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного комментария отдельной Задачи.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/47bc1d9b-8b87-11e8-d9ce-84d900000017/notes/2050793f-b8c6-11f0-0a80-204500000006",
      "type": "tasknote",
      "mediaType": "application/json"
    },
    "id": "2050793f-b8c6-11f0-0a80-204500000006",
    "accountId": "5ae35472-b8c5-11f0-0a82-042d00000002",
    "author": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/5c32c7bb-b8c5-11f0-0a83-01ce00000055",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=5c32c7bb-b8c5-11f0-0a83-01ce00000055"
      }
    },
    "text": "Привет, {{employee;861d34a9-f1b3-11ee-ac12-00110000004e}}! Задача актуальна?",
    "moment": "2025-11-01 18:02:33.338",
    "files": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/47bc1d9b-8b87-11e8-d9ce-84d900000017/notes/2050793f-b8c6-11f0-0a80-204500000006/files",
        "type": "files",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    }
  }
]
```

> Пример создания сразу нескольких комментариев к Задаче.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/task/47bc1d9b-8b87-11e8-d9ce-84d900000017/notes" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '[
            {
              "text": "Привет, {{employee;861d34a9-f1b3-11ee-ac12-00110000004e}}! Задача актуальна?"
            },
            {
              "text": "Могу сделать сегодня!"
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка созданных комментариев отдельной Задачи.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/47bc1d9b-8b87-11e8-d9ce-84d900000017/notes/bd230383-ba26-11f0-0a83-052900000003",
      "type": "tasknote",
      "mediaType": "application/json"
    },
    "id": "bd230383-ba26-11f0-0a83-052900000003",
    "accountId": "3da1d022-b9d4-11f0-0a83-052d00000002",
    "author": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/3e3001c5-b9d4-11f0-0a80-248f00000056",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=3e3001c5-b9d4-11f0-0a80-248f00000056"
      }
    },
    "text": "Привет, {{employee;861d34a9-f1b3-11ee-ac12-00110000004e}}! Задача актуальна?",
    "moment": "2025-11-05 12:06:39.264",
    "files": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/47bc1d9b-8b87-11e8-d9ce-84d900000017/notes/bd230383-ba26-11f0-0a83-052900000003/files",
        "type": "files",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    }
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/47bc1d9b-8b87-11e8-d9ce-84d900000017/notes/bd23184e-ba26-11f0-0a83-052900000004",
      "type": "tasknote",
      "mediaType": "application/json"
    },
    "id": "bd23184e-ba26-11f0-0a83-052900000004",
    "accountId": "3da1d022-b9d4-11f0-0a83-052d00000002",
    "author": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/3e3001c5-b9d4-11f0-0a80-248f00000056",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=3e3001c5-b9d4-11f0-0a80-248f00000056"
      }
    },
    "text": "Могу сделать сегодня!",
    "moment": "2025-11-05 12:06:39.281",
    "files": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/47bc1d9b-8b87-11e8-d9ce-84d900000017/notes/bd23184e-ba26-11f0-0a83-052900000004/files",
        "type": "files",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    }
  }
]
```

### Комментарий к задаче 

### Получить комментарий к Задаче

Отдельный комментарий к Задаче с указанным id комментария.

**Параметры**

| Параметр       | Описание                                                                                     |
| :------------- | :------------------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 47bc1d9b-8b87-11e8-d9ce-84d900000017* id задачи.               |
| **tasknoteID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id комментария к Задаче. |
 
> Запрос на получение отдельного комментарии к Задаче с указанным id.

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/task/47bc1d9b-8b87-11e8-d9ce-84d900000017/notes/34f6344f-015e-11e6-9464-e4de0000006c" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного комментария к Задаче.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/47bc1d9b-8b87-11e8-d9ce-84d900000017/notes/55eaa2cc-8b87-11e8-d9ce-84d900000025",
    "type": "tasknote",
    "mediaType": "application/json"
  },
  "author": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=98fa7086-8aa1-11e8-7210-075e0000002c"
    }
  },
  "text": "текст комментария 1",
  "moment": "2018-07-19 22:10:01"
}
```

### Изменить комментарий к Задаче 
Запрос на обновление отдельного комментария к Задаче.
Для успешного создания необходимо в теле запроса указать следующие поля:

| Название | Тип          | Описание                                                                   |
| -------- | :----------- | :------------------------------------------------------------------------- |
| **text** | String(4096) | Текст комментария<br>`+Обязательное при ответе` `+Необходимо при создании` |

**Параметры**

| Параметр       | Описание                                                                                     |
| :------------- | :------------------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 47bc1d9b-8b87-11e8-d9ce-84d900000017* id задачи.               |
| **tasknoteID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id комментария к Задаче. |

> Пример запроса на обновление отдельного комментария к Задаче.

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/task/47bc1d9b-8b87-11e8-d9ce-84d900000017/notes/34f6344f-015e-11e6-9464-e4de0000006c" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "text": "новый текст комментария 1"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного комментария к Задаче.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/47bc1d9b-8b87-11e8-d9ce-84d900000017/notes/55eaa2cc-8b87-11e8-d9ce-84d900000025",
    "type": "tasknote",
    "mediaType": "application/json"
  },
  "author": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/98fa7086-8aa1-11e8-7210-075e0000002c",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=98fa7086-8aa1-11e8-7210-075e0000002c"
    }
  },
  "text": "новый текст комментария 1",
  "moment": "2018-07-19 22:10:01"
}
```

### Удалить комментарий

**Параметры**

| Параметр       | Описание                                                                                     |
| :------------- | :------------------------------------------------------------------------------------------- |
| **id**         | `string` (required) *Example: 47bc1d9b-8b87-11e8-d9ce-84d900000017* id задачи.               |
| **tasknoteID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id комментария к Задаче. |
 
> Запрос на удаление отдельного комментария к Задаче с указанным id.

```shell
curl --compressed -X DELETE \
  "https://api.moysklad.ru/api/remap/1.2/entity/task/47bc1d9b-8b87-11e8-d9ce-84d900000017/notes/34f6344f-015e-11e6-9464-e4de0000006c" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление комментария к Задаче.

### Массовое удаление коментариев к задаче

В теле запроса нужно передать массив, содержащий JSON метаданных комментариев к Задаче, которые требуется удалить.

> Запрос на массовое удаление комментариев к Задаче.

```shell
curl --compressed -X POST \
  "https://api.moysklad.ru/api/remap/1.2/entity/task/a1ff58c4-726a-11ee-c0a8-e00e00000000/notes/delete" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip" \
  -H "Content-Type: application/json" \
    -d '[
          {
              "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/a1ff58c4-726a-11ee-c0a8-e00e00000000/notes/a87d4d14-726a-11ee-c0a8-e00e00000011",
                  "type": "tasknote",
                  "mediaType": "application/json"
              }
          },
          {
              "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/a1ff58c4-726a-11ee-c0a8-e00e00000000/notes/836b63c4-726b-11ee-c0a8-e00e0000001d",
                  "type": "tasknote",
                  "mediaType": "application/json"
              }
          }
       ]' 
```

> Response 200 (application/json)
Успешное удаление комментариев к Задаче.

### Запросы - Тип задачи

### Получить типы задач

> Получить метаданные, и в том числе типы задач

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata",
    "mediaType": "application/json"
  },
  "states": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata/states/4f70c518-60a1-11e7-6adb-ede500000003",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "4f70c518-60a1-11e7-6adb-ede500000003",
      "accountId": "0af94520-54f7-11e7-6adb-ede500000001",
      "name": "Встреча",
      "color": 15106326,
      "stateType": "Regular",
      "entityType": "task"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata/states/3b6eb61a-60c5-11e7-6adb-ede500000001",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "3b6eb61a-60c5-11e7-6adb-ede500000001",
      "accountId": "0af94520-54f7-11e7-6adb-ede500000001",
      "name": "Связаться",
      "color": 10667543,
      "stateType": "Regular",
      "entityType": "task"
    }
  ]
}
```

### Создать тип задачи

Тип задачи создается на основе переданного объекта JSON,
который содержит представление нового Типа.
Результат - JSON представление созданного Типа. Для создания нового Типа,
необходимо и достаточно в переданном объекте заполнить поля `name` и `color`.

> Создание одного Типа задачи.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata/states" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "name": "Встреча",
            "color": 69446
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Типа задачи.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata/states/6262b270-60c3-11e7-6adb-ede50000000d",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata",
    "type": "state",
    "mediaType": "application/json"
  },
  "id": "6262b270-60c3-11e7-6adb-ede50000000d",
  "accountId": "0af94520-54f7-11e7-6adb-ede500000001",
  "name": "Встреча",
  "color": 69446,
  "stateType": "Regular",
  "entityType": "task"
}
```

### Изменить тип задачи
Изменить существующий тип задачи.

#### Описание изменения типа задачи
Тип задачи меняется на основе переданного объекта JSON.
Результат - JSON представление обновленного или созданного Типа.
Для обновления Типа, необходимо  указать в переданном объекте
одно или несколько полей с новыми значениями: `name` и `color`.

**Параметры**

| Параметр       | Описание                                                                            |
| :------------- |:------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 4dcb3f23-60c4-11e7-6adb-ede500000019* id Типа задачи. |

> Изменение типа задачи.

```shell
  curl --compressed -X PUT \
    "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata/states/4dcb3f23-60c4-11e7-6adb-ede500000019" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '{
            "color": 255
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление измененного Типа задачи.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata/states/6262b270-60c3-11e7-6adb-ede50000000d",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata",
    "type": "state",
    "mediaType": "application/json"
  },
  "id": "6262b270-60c3-11e7-6adb-ede50000000d",
  "accountId": "0af94520-54f7-11e7-6adb-ede500000001",
  "name": "Встреча",
  "color": 255,
  "stateType": "Regular",
  "entityType": "task"
}
```

### Массовое создание и обновление Типов задач
[Массовое создание и обновление](#/general#3-sozdanie-i-obnovlenie-neskolkih-obuektov) Типов задач.
В теле запроса нужно передать массив, содержащий JSON представления Типов, которые вы хотите создать или обновить.
Обновляемые Типы должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Типов задач.

```shell
  curl --compressed -X POST \
    "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata/states" \
    -H "Authorization: Basic <Credentials>" \
    -H "Accept-Encoding: gzip" \
    -H "Content-Type: application/json" \
      -d '[
            {
              "name": "Встреча",
              "color": 8767198
            },
            {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata/states/b56215dc-60c3-11e7-6adb-ede500000013",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata",
                "type": "state",
                "mediaType": "application/json"
              },
              "name": "Связаться",
              "color": 34617
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Типов задач.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata/states/b55d2ddf-60c3-11e7-6adb-ede500000010",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata",
      "type": "state",
      "mediaType": "application/json"
    },
    "id": "b55d2ddf-60c3-11e7-6adb-ede500000010",
    "accountId": "0af94520-54f7-11e7-6adb-ede500000001",
    "name": "Встреча",
    "color": 8767198,
    "stateType": "Regular",
    "entityType": "task"
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata/states/b56215dc-60c3-11e7-6adb-ede500000013",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata",
      "type": "state",
      "mediaType": "application/json"
    },
    "id": "b56215dc-60c3-11e7-6adb-ede500000013",
    "accountId": "0af94520-54f7-11e7-6adb-ede500000001",
    "name": "Связаться",
    "color": 34617,
    "stateType": "Regular",
    "entityType": "task"
  }
]
```

### Удалить Тип задачи

**Параметры**

| Параметр       | Описание                                                                            |
| :------------- |:------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 4dcb3f23-60c4-11e7-6adb-ede500000019* id Типа задачи. |

> Запрос на удаление Типа задачи с указанным id.

```shell
curl --compressed -X DELETE \
  "https://api.moysklad.ru/api/remap/1.2/entity/task/metadata/states/4dcb3f23-60c4-11e7-6adb-ede500000019" \
  -H "Authorization: Basic <Credentials>" \
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление Типа задачи.
