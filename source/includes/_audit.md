# Аудит
## Аудит

Сервис МойСклад накапливает сведения о всех событиях в системе. Эта часть сервиса называется аудит, а накопленные сведения - событиями аудита.
Изменения по конкретной сущности доступны пользователям при наличии прав на просмотр, подробная информация о всех изменениях доступна только пользователям с правами администратора.

Основными сущностями в аудите JSON API являются контексты и события.
События содержат подробную информацию о произошедших изменениях конкретной сущности или операции, например, изменение значения поля.
Контекстом называются одно или несколько связанных событий, например, массовое обновление товаров.
События отражают конкретные произошедшие изменения, связанные с одной сущностью, контекст же содержит только общую информацию событий, относящихся к нему.

Пользователь может получить подробную информацию об изменениях в системе через JSON API двумя способами:

+ **Просмотр общей ленты аудита**

Для просмотра общей ленты аудита через JSON API пользователь может [запросить список контекстов](#poluchit-kontexty), которые будут содержать общую информацию
об изменениях, произошедших в системе, а также ссылку на связные с ними события.
Для просмотра подробной информации по отдельному контексту, необходимо [запросить события по конкретному контексту](#poluchit-sobytiq-po-kontextu).
В ответе пользователю будет содержаться детальная информация об изменениях сущности, произошедших в рамках данного обновления в системе, в [специальном формате diff](#format-polq-diff)

+ **Просмотр событий по отдельной сущности**

Для того, чтобы получить события, связанные с конкретной сущностью, необходимо воспользоваться [запросом событий по сущности](#poluchit-sobytiq-po-kontextu).
Ответ будет содержать список событий, относящихся к данной сущности или операции, где в [специальном поле diff](#format-polq-diff) будут отражены подробные изменения полей сущности или операции.

### Контексты 

В аудите под контекстом подразумевается одно или несколько связанных событий, например, массовое обновление товаров.
События отражают конкретные произошедшие изменения, например, изменение значения поля.
Контекст же содержит только общую информацию событий, относящихся к нему.

##### Атрибуты сущности

+ **meta** - [Метаданные](#metadannye) сущности Контекста `Только для чтения`
+ **id** - ID Контекста в формате UUID `Только для чтения`
+ **uid** - Логин Сотрудника `Только для чтения`
+ **supportAccess** - был ли доступ произведен поддержкой от имени пользователя. Флаг отсутствует, если значение false `Только для чтения`
+ **source** - Тип изменения `Только для чтения`
+ **moment** - Дата изменения `Только для чтения`
+ **objectCount** - количество измененных объектов `Только для чтения`
+ **eventType** - действие Событий (поле присутствует, только если оно одинаково у всех Событий в рамках данного Контекста) `Только для чтения`
+ **entityType** - название сущности (поле присутствует, только если оно одинаково у всех Событий в рамках данного Контекста) `Только для чтения`
+ **objectType** - тип сущностей, с которыми связанно данное изменение. Поле присутствует только для `entityType` =  `entitysettings` или `statesettings` или `templatesettings`
+ **info** - Краткое описание, выводится не для всех типов изменений `Только для чтения`
+ **events** - Список Событий аудита в формате [Метаданных](#metadannye) `Только для чтения`

Возможные значение параметра `source` преставлены ниже:

| Значение параметра source | Описание                       |
| ------------------------------ |:-------------------------------|
| `app`                          | Все действия                   |
| `copy`                         | Копирование                    |
| `combine`                      | Объединение                    |
| `import`                       | Импорт                         |
| `importAlfabank`               | Импорт из Альфа-Банка          |
| `importModulebank`             | Импорт из Модульбанка          |
| `importTochkabank`             | Импорт из Точка Банка          |
| `importTinkoffbank`            | Импорт из Тинькофф Банка       |
| `import1c`                     | Импорт из 1С                   |
| `restapi`                      | REST API                       |
| `remap-1.0`                    | JSON API 1.0                   |
| `remap-1.1`                    | JSON API 1.1                   |
| `remap-1.2`                    | JSON API 1.2                   |
| `posapi`                       | POS API                        |
| `retail`                       | Точка продаж                   |
| `connectors`                   | Синхронизация с ИМ             |
| `evotor`                       | Синхронизация с Эвотор         |
| `clearrecyclebin`              | Автоматическая очистка корзины |
| `loginlogout`                  | Вход или выход из моего склада |
| `emailsend`                    | Отправка сообщения             |
| `export`                       | Экспорт                        |
| `phone-1.0`                    | Phone API                      |

Возможные значение параметров `eventType` и `entityType` приведены в разделе [Фильтры](#poluchit-fil-try)

### Получить Контексты

Запрос всех изменений.
Результат: Объект JSON, включающий в себя поля:

- **meta** - [Метаданные](#metadannye) о контексте
- **context** - [Метаданные](#metadannye) о сотруднике, выполнившем запрос
- **rows** - Массив JSON сущностей, представляющих собой изменения

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|
|filter |  `string` (optional) *Example: source=jsonapi* Подробное описание параметра в разделе [Фильтрация выборки с помощью параметра filter](#fil-traciq-wyborki-s-pomosch-u-parametra-filter) Атрибуты фильтрации для Контекстов аудита представлены в разделе [Фильтры](#poluchit-fil-try)|

> Получить Контексты

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/audit"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Изменений.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/audit/",
    "type": "audit",
    "mediaType": "application/json",
    "size": 1,
    "limit": 25,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/audit/b912e9d1-3fbe-11e7-8a7f-40d000000000",
        "type": "audit",
        "mediaType": "application/json"
      },
      "id": "b912e9d1-3fbe-11e7-8a7f-40d000000000",
      "uid": "admin@1",
      "source": "loginlogout",
      "moment": "2017-05-23 16:50:03",
      "info": "Вход в МойСклад (127.0.0.1, Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0)"
    }
  ]
}

```

### Получить Контексты c фильтрацией

**Параметры**

|Параметр   |Описание   | 
|---|---|
|filter |  `string` (optional) *Example: filter=entityType=customerorder* фильтр по типу сущности|

Пример запроса с фильтрацией контекстов по типу "заказ покупателя"
https://online.moysklad.ru/api/remap/1.2/audit?filter=entityType=customerorder

> Получить Контексты c фильтрацией

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/audit?filter=entityType=customerorder"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка событий аудита.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/audit?filter=entityType=customerorder",
    "type": "audit",
    "mediaType": "application/json",
    "size": 1,
    "limit": 25,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/audit/83732f4b-792a-11e7-9464-d04800000005",
        "type": "audit",
        "mediaType": "application/json"
      },
      "id": "83732f4b-792a-11e7-9464-d04800000005",
      "uid": "admin@11",
      "source": "app",
      "moment": "2017-08-04 18:35:15",
      "objectCount": 1,
      "eventType": "create",
      "entityType": "customerorder",
      "events": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/audit/83732f4b-792a-11e7-9464-d04800000005/events",
          "type": "auditevent",
          "mediaType": "application/json",
          "size": 1,
          "limit": 25,
          "offset": 0
        }
      }
    }
  ]
}
```

### События
События аудита содержат подробную информацию о произошедших изменениях, например, изменение значения поля.

##### Типы Событий
События делятся на несколько типов, начиная от аудита создания сущности и заканчивая аудитом печати,
и состоят из сведений о времени события и произошедших во время этого события изменениях. Различные типы событий отличаются друг от друга [форматом поля diff](#format-polq-diff),
подробнее о котором ниже.

+ Создание сущности или документа
+ Обновление сущности или документа
+ Удаление сущности или документа
+ Помещение в корзину
+ Восстановление из корзины
+ Помещение в архив
+ Восстановление из архива
+ Публикация документов
+ Отправка писем
+ Смена токена

##### Атрибуты сущности

+ **moment** - время создания События `Только для чтения`
+ **uid** - Логин Сотрудника `Только для чтения`
+ **supportAccess** - был ли доступ произведен поддержкой от имени пользователя. Флаг отсутствует, если значение false `Только для чтения`
+ **source** - Тип изменения `Только для чтения`
+ **eventType** - действие События `Только для чтения`
+ **entityType** - название сущности `Только для чтения`
+ **objectType** - тип сущностей, с которыми связанно данное изменение. Поле присутствует только для `entityType` =  `entitysettings` или `statesettings` или `templatesettings`
+ **name** - имя сущности `Только для чтения`
+ **entity** - Ссылка на сущность в формате [Метаданных](#metadannye). Не будет выводиться только для товаров, услуг, модификаций, комплектов удаленных до 20.08.2017 `Только для чтения`
+ **additionalInfo** - дополнительная информация о Событии. Присутствует не во всех типах событий `Только для чтения`
+ **diff** - изменения, произошедшие в Событии, в специальном формате diff, описанном в разделе [Формат поля diff](#format-polq-diff) `Только для чтения`
+ **audit** - Ссылка на контекст в формате [Метаданных](#metadannye) `Только для чтения`

##### Формат поля diff
В данном поле отображены изменения полей сущности, произошедшие в Событии.

Сведения об изменениях в полях сущностей отображаются по всем полям, включая те, к которым нет доступа через JSON API.
Для полей, используемых в JSON API для сущностей и документов, название атрибута сущности будет совпадать с названием соответствующего поля,
описанного в разделе для данной сущности или документа.

Ниже приведены возможные форматы поля ``diff`` для разных [типов Событий](#tipy-sobytij).
Для событий создания сущности поле ``diff`` будет отсутствовать.

##### События публикации документов

+ **templateName** - название шаблона `Только для чтения`
+ **publicationHref** - ссылка на публикацию `Только для чтения`

##### События отправки писем

+ **senderEmail** - почта отправителя письма `Только для чтения`
+ **targetEmail** - почта получателя письма `Только для чтения`
+ **subjectEmail** - тема письма `Только для чтения`
+ **text** - текст письма `Только для чтения`

##### События удаления сущностей

+ ``attributeName`` - название атрибута сущности `Только для чтения`
  + **oldValue** - значение атрибута до удаления `Только для чтения`

##### События обновления сущностей, перемещения/восстановления из корзины, перемещение/восстановление из архива

+ ``attributeName`` - название атрибута сущности `Только для чтения`
  + **oldValue** - значение атрибута до обновления `Только для чтения`
  + **newValue** - значение атрибута после обновления `Только для чтения`

### Получить События по Контексту
Запрос на получение событий Контекста с указанным id. Результат: Объект JSON, включающий в себя поля:

- **context** - [Метаданные](#metadannye) о сотруднике, выполнившем запрос.
- **meta** [Метаданные](#metadannye) событий
- **rows** - Массив JSON сущностей, представляющих собой события

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Контекста.|

> Получить События по Контексту

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/audit/7944ef04-f831-11e5-7a69-971500188b19/events"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка событий.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/audit/c107864f-3f88-11e7-8a7f-40d000000041/events",
    "type": "auditevent",
    "mediaType": "application/json",
    "size": 1,
    "limit": 25,
    "offset": 0
  },
  "rows": [
    {
      "source": "app",
      "eventType": "update",
      "entityType": "product",
      "uid": "admin@1",
      "moment": "2017-05-30 18:47:49",
      "diff": {
        "weighed": {
          "oldValue": false,
          "newValue": true
        }
      },
      "name": "some product",
      "audit": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/audit/7944ef04-f831-11e5-7a69-971500188b19",
          "type": "audit",
          "mediaType": "application/json"
        }
      },
      "entity": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=7944ef04-f831-11e5-7a69-971500188b19"
        }
      }
    }
  ]
}
```

### Получить События по Сущности
Запрос на получение событий по сущности с указанным id. Результат: Объект JSON, включающий в себя поля:

- **context** - [Метаданные](#metadannye) о сотруднике, выполнившем запрос.
- **meta** [Метаданные](#metadannye) событий
- **rows** - Массив JSON сущностей, представляющих собой события

**Параметры**

|Параметр   |Описание   | 
|---|---|
|type|  `string` (required) *Example: product* тип сущности.|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id сущности.|

> Получить События по Сущности

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19/audit"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка событий.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19/audit",
    "type": "auditevent",
    "mediaType": "application/json",
    "size": 1,
    "limit": 25,
    "offset": 0
  },
  "rows": [
    {
      "source": "app",
      "eventType": "update",
      "entityType": "product",
      "uid": "admin@1",
      "moment": "2017-05-30 18:47:49",
      "diff": {
        "weighed": {
          "oldValue": false,
          "newValue": true
        }
      },
      "name": "some product",
      "audit": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/audit/7944ef04-f831-11e5-7a69-971500188b19",
          "type": "audit",
          "mediaType": "application/json"
        }
      },
      "entity": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/7944ef04-f831-11e5-7a69-971500188b19",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=7944ef04-f831-11e5-7a69-971500188b19"
        }
      }
    }
  ]
}
```

##### Фильтры

В JSON API сервиса МойСклад предусмотрена возможность фильтрации [Контекстов аудита](#kontexty) с помощью url параметр ``filter``.
Подробнее про данный параметр можно посмотреть в разделе [Фильтрация выборки с помощью параметра filter](#fil-traciq-wyborki-s-pomosch-u-parametra-filter)
Фильтрация может осуществляться по полям, описанным ниже.

##### Атрибуты сущности

+ **moment**
  Параметр строкового типа. В качестве значения должна быть передана строка в формате
  дата + время с точностью до секунд.

  Допустимые операторы для фильтрации по атрибуту ``moment`` : ``['>=', '<=']``

   Формат строки : `ГГГГ-ММ-ДД ЧЧ:ММ:СС[.ммм]`, Часовой пояс: `MSK` (Московское время)

+ **employee**
  Параметр строкового типа. В качестве значения должен быть передан ``href`` сущности сотрудника.
  В отфильтрованную выборку попадут все сущности аудита, автором изменений которых является данный пользователь.

   Формат строки : `href`

+ **eventType**
  Параметр строкового типа. В качестве значения должен быть передан [тип События](#tipy-sobytij), по которому
  должны быть отфильтрованы сущности аудита. Список возможных значений параметра:

| Значение параметра eventType | Описание               |
| ---------------------------- |:-----------------------|
| `create`                     | Создание сущностей     |
| `update`                     | Изменение сущностей    |
| `delete`                     | Удаление сущностей     |
| `puttorecyclebin`            | Помещение в корзину    |
| `restorefromrecyclebin`      | Извлечение из корзины  |
| `puttoarchive`               | Помещение в архив      |
| `restorefromarchive`         | Извлечение из архива   |
| `print`                      | Печать документа       |
| `openpublication`            | Создание публикации    |
| `closepublication`           | Удаление публикации    |
| `sendemailfromentity`        | Отправка письма        |
| `bulkoperation`              | Массовая операция      |
| `replacetoken`               | Смена токена для Точки продаж      |

+ **source**
  Параметр строкового типа. В качестве значения должен быть передан тип действия, по которому
  должны быть отфильтрованы сущности аудита. Список возможных значений параметра:

| Значение параметра source | Описание                       |
| ------------------------------ |:-------------------------------|
| `copy`                         | Копирование                    |
| `combine`                      | Объединение                    |
| `import`                       | Импорт                         |
| `restapi`                      | REST API                       |
| `jsonapi`                      | JSON API                       |
| `posapi`                       | POS API                        |
| `retail`                       | Точка продаж                   |
| `connectors`                   | Синхронизация с ИМ             |
| `evotor`                       | Синхронизация с Эвотор         |
| `clearrecyclebin`              | Автоматическая очистка корзины |
| `loginlogout`                  | Вход или выход из моего склада |
| `emailsend`                    | Отправка сообщения             |
| `export`                       | Экспорт                        |
| `phone-1.0`                    | Phone API                      |

+ **uid**
  Параметр строкового типа. В качестве значения должен быть передан логин сотрудника, по которому
  должны быть отфильтрованы события аудита.
+ **entityType**
  Параметр строкового типа. В качестве значения должно быть передано название сущности, по которой
  должны быть отфильтрованы сущности аудита. В качестве параметра может быть передано наименование из JSON API сущности/документа(move, enter, customerorder и т.д.) либо одно из значений следующего списка:

| Значение параметра entityType  | Описание                            |
| ------------------------------ |:------------------------------------|
| `processingplanfolder`         | Группа тех.карт                     |
| `amiroconnectorsettings`       | Настройка синхронизации (Amiro)     |
| `cmlconnectorsettings`         | Настройка синхронизации (CML)       |
| `ecwidconnectorsettings`       | Настройка синхронизации (Ecwid)     |
| `smartwebconnectorsettings`    | Настройка синхронизации (SmartWeb)  |
| `ymlconnectorsettings`         | Настройка синхронизации (YML)       |
| `vkconnectorsettings`          | Настройка синхронизации (Вконтакте) |
| `yandexconnectorsettings`      | Настройка синхронизации (Яндекс.Маркет) |
| `usersettings`                 | Настройки пользователя              |
| `user`                         | Пользователь                        |
| `accountrole`                  | Роль                                |
| `entitysettings`               | Настройки сущностей                 |
| `statesettings`                | Настройки статусов                  |
| `templatesettings`             | Настройки шаблонов                  |

Также можно отфильтровать контексты аудита по пользовательскому справочнику. Для этого в качестве параметра **entityType** необходимо передать href пользовательского справочника.
Пример: https://online.moysklad.ru/api/remap/1.2/entity/customentity/eaacabaf-2655-11e6-8a84-bae500000045

### Получить Фильтры 

Запрос всех фильтров аудита, доступных пользователю.
Результат: Объект JSON, включающий в себя поля:

- **eventType** - действия, по которым могут быть отфильтрованы сущности аудита
- **source** - типы действий, по которым могут быть отфильтрованы сущности аудита
- **entityType** - названия сущностей, по которым могут быть отфильтрованы сущности аудита

> Получить Фильтры

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/audit/metadata/filters"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Фильтров аудита.

```json
{
  "eventtype": [
    "create",
    "update",
    "delete",
    "puttorecyclebin",
    "restorefromrecyclebin",
    "puttoarchive",
    "restorefromarchive",
    "print",
    "openpublication",
    "closepublication",
    "sendemailfromentity",
    "replacetoken"
  ],
  "source": [
    "copy",
    "combine",
    "import",
    "restapi",
    "jsonapi",
    "posapi",
    "retail",
    "connectors",
    "evotor",
    "clearrecyclebin",
    "loginlogout",
    "emailsend"
  ],
  "entitytype": [
    "organization",
    "employee",
    "store",
    "retailstore",
    "retailshift",
    "retaildemand",
    "retailsalesreturn",
    "retaildrawercashin",
    "retaildrawercashout",
    "purchaseorder",
    "invoicein",
    "supply",
    "purchasereturn",
    "facturein",
    "customerorder",
    "invoiceout",
    "demand",
    "commissionreportin",
    "commissionreportout",
    "salesreturn",
    "factureout",
    "pricelist",
    "loss",
    "enter",
    "move",
    "inventory",
    "processing",
    "processingplan",
    "processingplanfolder",
    "processingorder",
    "internalorder",
    "cashin",
    "paymentin",
    "cashout",
    "paymentout",
    "service",
    "product",
    "bundle",
    "productfolder",
    "variant",
    "counterparty",
    "currency",
    "project",
    "contract",
    "amiroconnectorsettings",
    "cmlconnectorsettings",
    "ecwidconnectorsettings",
    "smartwebconnectorsettings",
    "ymlconnectorsettings",
    "vkconnectorsettings",
    "yandexconnectorsettings",
    "usersettings",
    "group",
    "user",
    "accountrole",
    "specialpricediscount",
    "personaldiscount",
    "accumulationdiscount",
    "entitysettings",
    "statesettings",
    "templatesettings",
    "https://online.moysklad.ru/api/remap/1.2/entity/customentity/eaacabaf-2655-11e6-8a84-bae500000045"
  ]
}
```
