## Техпроцесс
Средствами JSON API можно создавать и обновлять сведения о Техпроцессах, запрашивать списки Техпроцессов и сведения по отдельным Техпроцессам. 
Позициями Техпроцессов можно управлять как в составе отдельного Техпроцесса, так и отдельно - с помощью специальных ресурсов для управления позициями Техпроцессов. 
Кодом сущности для Техпроцессов в составе JSON API является ключевое слово **processingprocess**. Больше о Техпроцессах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/4407869768593-%D0%A0%D0%B0%D1%81%D1%88%D0%B8%D1%80%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1-%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%B0#1).

### Техпроцессы  
#### Атрибуты сущности

| Название         | Тип                                                       | Фильтрация                 | Описание                                                                                             |
|------------------|:----------------------------------------------------------|:---------------------------|:-----------------------------------------------------------------------------------------------------|
| **accountId**    | UUID                                                      | `=` `!=`                   | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                 |
| **archived**     | Boolean                                                   | `=` `!=`                   | Добавлен ли Техпроцесс в архив<br>`+Обязательное при ответе`                                         |
| **description**  | String(4096)                                              | `=` `!=` `~` `~=` `=~`     | Комментарий Техпроцесса                                                                              |
| **externalCode** | String(255)                                               | `=` `!=` `~` `~=` `=~`     | Внешний код Техпроцесса<br>`+Обязательное при ответе`                                                |
| **group**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                   | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                             |
| **id**           | UUID                                                      | `=` `!=`                   | ID Техпроцесса<br>`+Обязательное при ответе` `+Только для чтения`                                    |
| **meta**         | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) |                            | Метаданные Техпроцесса<br>`+Обязательное при ответе` `+Только для чтения`                            |
| **name**         | String(255)                                               | `=` `!=` `~` `~=` `=~`     | Наименование Техпроцесса<br>`+Обязательное при ответе` `+Необходимо при создании`                    |
| **owner**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | `=` `!=`                   | Владелец (Сотрудник)<br>`+Обязательное при ответе` `+Expand`                                         |
| **positions**    | MetaArray                                                 |                            | Метаданные позиций Техпроцесса<br>`+Обязательное при ответе` `+Необходимо при создании` `+Expand`    |
| **shared**       | Boolean                                                   | `=` `!=`                   | Общий доступ<br>`+Обязательное при ответе`                                                           |
| **updated**      | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=` | Момент последнего обновления сущности<br>`+Обязательное при ответе` `+Только для чтения`             |

#### Атрибуты вложенных сущностей
##### Позиции Техпроцесса
Позиции Техпроцесса - это список этапов, которые входят в Техпроцесс. У Техпроцесса может быть от 1 до 100 позиций.
Объект позиции Техпроцесса содержит следующие поля:

| Название            | Тип                                                       | Описание                                                                                                                |
|---------------------|:----------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------|
| **accountId**       | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                    |
| **id**              | UUID                                                      | ID позиции<br>`+Обязательное при ответе` `+Только для чтения`                                                           |
| **meta**            | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные позиции Техпроцесса<br>`+Обязательное при ответе` `+Только для чтения`                                       |
| **processingstage** | [Meta](../dictionaries/#suschnosti-jetap-proizwodstwa)    | Метаданные этапа, который представляет собой позиция<br>`+Обязательное при ответе` `+Необходимо при создании` `+Expand` |
| **nextPositions**   | MetaArray                                                 | Метаданные следующих позиций позиции Техпроцесса<br>                                                                    |

### Получить список Техпроцессов

Запрос всех Техпроцессов на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

| Название    | Тип                                                       | Описание                                                 |
| ----------- | :-------------------------------------------------------- |:---------------------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче                                      |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос              |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой Техпроцессы   |

**Параметры**

| Параметр                       | Описание                                                                                                                               |
| ------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Запрос на получение списка Техпроцессов

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Техпроцессов.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess",
    "type": "processingprocess",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/d5174779-862b-11eb-ac14-000900000007",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/metadata",
        "type": "processingprocess",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#processingprocess/edit?id=d5174779-862b-11eb-ac14-000900000007"
      },
      "id": "d5174779-862b-11eb-ac14-000900000007",
      "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/872559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=872559f1-cbf3-11e1-9eb9-889ffa6f49fd"
        }
      },
      "shared": true,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f7eb1e3b-fd2a-42f7-b799-b3d1e6b3bf43",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2021-03-16 10:47:18.160",
      "name": "Основной техпроцесс",
      "externalCode": "F1l43a3ojXZShfnzJCKsG3",
      "archived": false,
      "positions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/d5174779-862b-11eb-ac14-000900000007/positions",
          "type": "processingprocessposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      }
    }
  ]
}
```

### Получить Техпроцесс

**Параметры**

| Параметр | Описание                                                                           |
| :------- |:-----------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: d2308bcc-8fd9-11ed-ac12-000b000000c1* id Техпроцесса.|

> Запрос на получение отдельного Техпроцесса с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/d2308bcc-8fd9-11ed-ac12-000b000000c1"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Техпроцесса.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/d5174779-862b-11eb-ac14-000900000007",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/metadata",
    "type": "processingprocess",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#processingprocess/edit?id=d5174779-862b-11eb-ac14-000900000007"
  },
  "id": "d5174779-862b-11eb-ac14-000900000007",
  "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/872559f1-cbf3-11e1-9eb9-889ffa6f49fd",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=872559f1-cbf3-11e1-9eb9-889ffa6f49fd"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/f7eb1e3b-fd2a-42f7-b799-b3d1e6b3bf43",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2021-03-16 10:47:18.160",
  "name": "Основной техпроцесс",
  "externalCode": "F1l43a3ojXZShfnzJCKsG3",
  "archived": false,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/d5174779-862b-11eb-ac14-000900000007/positions",
      "type": "processingprocessposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Создать Техпроцесс
Запрос на создание нового Техпроцесса.
Обязательные для создания поля:

+ **name** - Название Техпроцесса
+ **positions** - Ссылки на позиции Техпроцесса в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)

> Запрос на создание нового Техпроцесса с телом запроса, содержащим только необходимые поля.

```shell
curl -X POST
"https://api.moysklad.ru/api/remap/1.2/entity/processingprocess"
-H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
-H "Content-Type: application/json"
-d '{
	"name": "Изготавливаем двигатель",
	"positions": [
		{
			"processingstage": {
				"meta": {
					"href": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/364b1107-9bd3-11ed-ac12-000c0000006a",
					"metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
					"type": "processingstage",
					"mediaType": "application/json",
					"uuidHref": "https://online.moysklad.ru/app/#processingstage/edit?id=364b1107-9bd3-11ed-ac12-000c0000006a"
				}
			}
		}
	]
}'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Техпроцесса.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/63b86a2e-a6ac-11ed-ac12-00090000000a",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/metadata",
    "type": "processingprocess",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#processingprocess/edit?id=63b86a2e-a6ac-11ed-ac12-00090000000a"
  },
  "id": "63b86a2e-a6ac-11ed-ac12-00090000000a",
  "accountId": "c0b1ef18-9aea-11ed-ac12-000b00000011",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/c0f98b1e-9aea-11ed-ac12-000e00000050",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=c0f98b1e-9aea-11ed-ac12-000e00000050"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/c0b230f9-9aea-11ed-ac12-000b00000012",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2023-02-07 08:58:05.574",
  "name": "Изготавливаем двигатель",
  "externalCode": "Jsi3Cs2fipoDAZcFrrxX01",
  "archived": false,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/63b86a2e-a6ac-11ed-ac12-00090000000a/positions",
      "type": "processingprocessposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Изменить Техпроцесс
В теле запроса указать поля, которые необходимо изменить у Техпроцесса. 
Важно: имеется отличие в работе от UI при замене одного Этапа на другой. В web-интерфейсе при изменении Этапа через селектор будет удалена старая позиция 
и создана новая позиция с выбранным этапом. Замена Этапа через API с передачей меты позиции, не пересоздает позицию, а изменяет ее.

**Параметры**

| Параметр | Описание                                                                            |
| :------- |:------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 117cae13-a612-11ed-ac12-000900000022* id Техпроцесса. |

> Запрос на обновление Техпроцесса с заменой этапа у существующей позиции и создание новой позиции.

```shell
curl -X PUT
"https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/117cae13-a612-11ed-ac12-000900000022"
-H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
-H "Content-Type: application/json"
-d '
{
	"name": "Изготавливаем двигатель №2",
	"externalCode": "dfsafsfsd1231231",
	"archived": false,
	"positions": [
		{
			"meta": {
				"href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/117cae13-a612-11ed-ac12-000900000022/positions/117cb64b-a612-11ed-ac12-000900000024",
				"type": "processingprocessposition",
				"mediaType": "application/json"
			},
			"processingstage": {
				"meta": {
					"href": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/c18373c0-9aea-11ed-ac12-000e000000c2",
					"metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
					"type": "processingstage",
					"mediaType": "application/json"
				}
			}
		},
		{
			"processingstage": {
				"meta": {
					"href": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/364b1107-9bd3-11ed-ac12-000c0000006a",
					"metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
					"type": "processingstage",
					"mediaType": "application/json"
				}
			}
		}
	]
}'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Техпроцесса.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/117cae13-a612-11ed-ac12-000900000022",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/metadata",
    "type": "processingprocess",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#processingprocess/edit?id=117cae13-a612-11ed-ac12-000900000022"
  },
  "id": "117cae13-a612-11ed-ac12-000900000022",
  "accountId": "c0b1ef18-9aea-11ed-ac12-000b00000011",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/c0f98b1e-9aea-11ed-ac12-000e00000050",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=c0f98b1e-9aea-11ed-ac12-000e00000050"
    }
  },
  "shared": true,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/c0b230f9-9aea-11ed-ac12-000b00000012",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2023-02-07 09:43:38.713",
  "name": "Изготавливаем двигатель №2",
  "externalCode": "dfsafsfsd1231231",
  "archived": false,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/117cae13-a612-11ed-ac12-000900000022/positions",
      "type": "processingprocessposition",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Удалить Техпроцесс

**Параметры**

| Параметр | Описание                                                                              |
| :------- |:--------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: d2308bcc-8fd9-11ed-ac12-000b000000c1* id Техпроцесса.   |

> Запрос на удаление Техпроцесса с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/d2308bcc-8fd9-11ed-ac12-000b000000c1"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление Техпроцесса

### Позиции Техпроцесса

В сущности установлен лимит на позиции в размере 100 элементов. Более подробно о лимитах на количество строк и работе с
большим количеством позиций можно прочитать на примере работы с позициями документов [тут](../#mojsklad-json-api-obschie-swedeniq-rabota-s-poziciqmi-dokumentow).

#### Атрибуты позиции Техпроцесса
| Название            | Тип                                                       | Описание                                                                                                                |
|---------------------|:----------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------|
| **accountId**       | UUID                                                      | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                    |
| **id**              | UUID                                                      | ID позиции<br>`+Обязательное при ответе` `+Только для чтения`                                                           |
| **meta**            | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные позиции Техпроцесса<br>`+Обязательное при ответе` `+Только для чтения`                                       |
| **processingstage** | [Meta](../dictionaries/#suschnosti-jetap-proizwodstwa)    | Метаданные этапа, который представляет собой позиция<br>`+Обязательное при ответе` `+Необходимо при создании` `+Expand` |

### Получить позиции Техпроцесса
Запрос на получение списка всех позиций данного Техпроцесса.

| Название    | Тип                                                       | Описание                                                          |
| ----------- | :-------------------------------------------------------- |:------------------------------------------------------------------|
| **meta**    | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о выдаче,                                              |
| **context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.                      |
| **rows**    | Array(Object)                                             | Массив JSON объектов, представляющих собой позиции Техпроцесса.   |

**Параметры**

| Параметр   | Описание                                                                                                                              |
| :--------- |:--------------------------------------------------------------------------------------------------------------------------------------|
| **id**     | `string` (required) *Example: d5069703-988e-11ed-ac19-000400000029* id Техпроцесса.                                                   |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                |

> Запрос на получение списка позиций Техпроцесса

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/d5069703-988e-11ed-ac19-000400000029/positions"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций отдельного Техпроцесса.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/d5069703-988e-11ed-ac19-000400000029/positions",
    "type": "processingprocessposition",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/d5069703-988e-11ed-ac19-000400000029/positions/d5069da5-988e-11ed-ac19-00040000002a",
        "type": "processingprocessposition",
        "mediaType": "application/json"
      },
      "id": "d5069da5-988e-11ed-ac19-00040000002a",
      "accountId": "dbb8cfc1-cbfa-11e1-6dfb-889ffa6f49fd",
      "processingstage": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/d4fed5b7-988e-11ed-ac19-000400000023",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
          "type": "processingstage",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#processingstage/edit?id=d4fed5b7-988e-11ed-ac19-000400000023"
        }
      }
    }
  ]
}
```

### Получить отдельную позицию Техпроцесса

**Параметры**

| Параметр | Описание                                                                                   |
| :------- |:-------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 1d4adde5-a6bb-11ed-ac12-00090000003f* id Техпроцесса.        |
| **positionID**   | `string` (required) *Example: 23a62e19-a6bb-11ed-ac12-000900000043* id позиция Техпроцесса.|

> Запрос на получение отдельной позиции Техпроцесса с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/1d4adde5-a6bb-11ed-ac12-00090000003f/positions/23a62e19-a6bb-11ed-ac12-000900000043"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного позиции Техпроцесса.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/1d4adde5-a6bb-11ed-ac12-00090000003f/positions/23a62e19-a6bb-11ed-ac12-000900000043",
    "type": "processingprocessposition",
    "mediaType": "application/json"
  },
  "id": "23a62e19-a6bb-11ed-ac12-000900000043",
  "accountId": "c0b1ef18-9aea-11ed-ac12-000b00000011",
  "processingstage": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/4b5662f4-9bd3-11ed-ac12-000c00000070",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
      "type": "processingstage",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#processingstage/edit?id=4b5662f4-9bd3-11ed-ac12-000c00000070"
    }
  }
}
```

### Создать позиции Техпроцесса

**Параметры**

| Параметр | Описание                                                                              |
| :------- |:--------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 1d4adde5-a6bb-11ed-ac12-00090000003f* id Техпроцесса.   |

> Запрос на создание позиций Техпроцесса

```shell
curl -X POST
"https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/1d4adde5-a6bb-11ed-ac12-00090000003f/positions"
-H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
-H "Content-Type: application/json"
-d '
[
	{
		"processingstage": {
			"meta": {
				"href": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/4b5662f4-9bd3-11ed-ac12-000c00000070",
				"metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
				"type": "processingstage",
				"mediaType": "application/json"
			}
		}
	}
]'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданных позиций Техпроцесса.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/1d4adde5-a6bb-11ed-ac12-00090000003f/positions/23a62e19-a6bb-11ed-ac12-000900000043",
      "type": "processingprocessposition",
      "mediaType": "application/json"
    },
    "id": "23a62e19-a6bb-11ed-ac12-000900000043",
    "accountId": "c0b1ef18-9aea-11ed-ac12-000b00000011",
    "processingstage": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/4b5662f4-9bd3-11ed-ac12-000c00000070",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
        "type": "processingstage",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#processingstage/edit?id=4b5662f4-9bd3-11ed-ac12-000c00000070"
      }
    }
  }
]
```

### Изменить позицию Техпроцесса
Важно: имеется отличие в работе от UI при замене одного Этапа на другой. В web-интерфейсе при изменении Этапа через селектор будет удалена старая позиция
и создана новая позиция с выбранным этапом. Замена Этапа через API не пересоздает позицию, а изменяет ее.

**Параметры**

| Параметр | Описание                                                                                    |
| :------- |:--------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: 1d4adde5-a6bb-11ed-ac12-00090000003f* id Техпроцесса.         |
| **positionID**   | `string` (required) *Example: 23a62e19-a6bb-11ed-ac12-000900000043* id позиции Техпроцесса. |

> Запрос на обновление позиции Техпроцесса

```shell
curl -X PUT
"https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/1d4adde5-a6bb-11ed-ac12-00090000003f/positions/23a62e19-a6bb-11ed-ac12-000900000043"
-H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
-H "Content-Type: application/json"
-d '
{
	"processingstage": {
		"meta": {
			"href": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/4b5662f4-9bd3-11ed-ac12-000c00000070",
			"metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
			"type": "processingstage",
			"mediaType": "application/json"
		}
	}
}'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции Техпроцесса.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/1d4adde5-a6bb-11ed-ac12-00090000003f/positions/23a62e19-a6bb-11ed-ac12-000900000043",
    "type": "processingprocessposition",
    "mediaType": "application/json"
  },
  "id": "23a62e19-a6bb-11ed-ac12-000900000043",
  "accountId": "c0b1ef18-9aea-11ed-ac12-000b00000011",
  "processingstage": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/4b5662f4-9bd3-11ed-ac12-000c00000070",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
      "type": "processingstage",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#processingstage/edit?id=4b5662f4-9bd3-11ed-ac12-000c00000070"
    }
  }
}
```

### Удалить позицию Техпроцесса

**Параметры**

| Параметр | Описание                                                                                   |
| :------- |:-------------------------------------------------------------------------------------------|
| **id**   | `string` (required) *Example: d5069703-988e-11ed-ac19-000400000029* id Техпроцесса.        |
| **positionID**   | `string` (required) *Example: d5069da5-988e-11ed-ac19-00040000002a* id позиции Техпроцесса.|

> Запрос на удаление позиции Техпроцесса с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/d5069703-988e-11ed-ac19-000400000029/positions/d5069da5-988e-11ed-ac19-00040000002a"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление отдельной позиции Техпроцесса

### Массовое удаление позиций Техпроцесса

В теле запроса нужно передать массив, содержащий JSON метаданных позиций Техпроцессов, которые требуется удалить.

> Запрос на массовое удаление позиций Техпроцесса.

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/5fe17cd6-72fd-11ee-c0a8-e00e00000017/positions/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
    -d '[
          {
              "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/5fe17cd6-72fd-11ee-c0a8-e00e00000017/positions/5fe18652-72fd-11ee-c0a8-e00e00000018",
                  "type": "processingprocessposition",
                  "mediaType": "application/json"
              }
          },
          {
              "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/5fe17cd6-72fd-11ee-c0a8-e00e00000017/positions/f6affb12-72fc-11ee-c0a8-e00e00000011",
                  "type": "processingprocessposition",
                  "mediaType": "application/json"
              }
          }
       ]'
```

> Response 200 (application/json)
Успешное массовое удаление позиций Техпроцесса

### Массовое создание и обновление Техпроцессов
При [массовом создании и обновлении](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Техпроцессов в теле запроса нужно передать массив, 
содержащий JSON представления Техпроцессов, которые вы хотите создать или обновить. Идентификатором у обновляемых Техпроцессов является [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye).

> Запрос на создание и обновление нескольких Техпроцессов

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
    -d '
    [
      {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/1d4adde5-a6bb-11ed-ac12-00090000003f",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/metadata",
          "type": "processingprocess",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#processingprocess/edit?id=1d4adde5-a6bb-11ed-ac12-00090000003f"
        },
        "name": "Штамповка"
      },
      {
        "name": "Оцинковка",
        "positions": [
          {
            "processingstage": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/364b1107-9bd3-11ed-ac12-000c0000006a",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingstage/metadata",
                "type": "processingstage",
                "mediaType": "application/json",
                "uuidHref": "https://online.moysklad.ru/app/#processingstage/edit?id=364b1107-9bd3-11ed-ac12-000c0000006a"
              }
            }
          }
        ]
      }
    ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Техпроцессов.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/1d4adde5-a6bb-11ed-ac12-00090000003f",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/metadata",
      "type": "processingprocess",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#processingprocess/edit?id=1d4adde5-a6bb-11ed-ac12-00090000003f"
    },
    "id": "1d4adde5-a6bb-11ed-ac12-00090000003f",
    "accountId": "c0b1ef18-9aea-11ed-ac12-000b00000011",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/c0f98b1e-9aea-11ed-ac12-000e00000050",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=c0f98b1e-9aea-11ed-ac12-000e00000050"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/c0b230f9-9aea-11ed-ac12-000b00000012",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2023-02-07 13:21:36.610",
    "name": "Штамповка",
    "externalCode": "qcz9MXKjgZ4CAXXXzvrXK2",
    "archived": false,
    "positions": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/1d4adde5-a6bb-11ed-ac12-00090000003f/positions",
        "type": "processingprocessposition",
        "mediaType": "application/json",
        "size": 2,
        "limit": 1000,
        "offset": 0
      }
    }
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/33d6ee5c-a6d1-11ed-ac12-000900000046",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/metadata",
      "type": "processingprocess",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#processingprocess/edit?id=33d6ee5c-a6d1-11ed-ac12-000900000046"
    },
    "id": "33d6ee5c-a6d1-11ed-ac12-000900000046",
    "accountId": "c0b1ef18-9aea-11ed-ac12-000b00000011",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/c0f98b1e-9aea-11ed-ac12-000e00000050",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=c0f98b1e-9aea-11ed-ac12-000e00000050"
      }
    },
    "shared": true,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/c0b230f9-9aea-11ed-ac12-000b00000012",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2023-02-07 13:21:36.637",
    "name": "Оцинковка",
    "externalCode": "94GR5hU-hmU7wkVnkS8D53",
    "archived": false,
    "positions": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/33d6ee5c-a6d1-11ed-ac12-000900000046/positions",
        "type": "processingprocessposition",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
      }
    }
  }
]
```

### Массовое удаление Техпроцессов

В теле запроса нужно передать массив, содержащий JSON метаданных Техпроцессов, которые вы хотите удалить.

> Запрос на массовое удаление Техпроцессов.

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
  -d '
  [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/1d4adde5-a6bb-11ed-ac12-00090000003f",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/metadata",
        "type": "processingprocess",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#processingprocess/edit?id=1d4adde5-a6bb-11ed-ac12-00090000003f"
      }
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/33d6ee5c-a6d1-11ed-ac12-000900000046",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/processingprocess/metadata",
        "type": "processingprocess",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#processingprocess/edit?id=33d6ee5c-a6d1-11ed-ac12-000900000046"
      }
    }
  ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Техпроцессов.

```json
[
  {
    "info": "Сущность 'processingprocess' с UUID: 1d4adde5-a6bb-11ed-ac12-00090000003f успешно удалена"
  },
  {
    "info": "Сущность 'processingprocess' с UUID: 33d6ee5c-a6d1-11ed-ac12-000900000046 успешно удалена"
  }
]
``` 
