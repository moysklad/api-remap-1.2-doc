## Точка продаж
### Точки продаж 
Средствами JSON API можно запрашивать списки Точек продаж и сведения по отдельным точкам продаж. Также можно получить доступ к специальному ресурсу для управления кассирами точки продаж. Кодом сущности для точки продаж в составе JSON API является ключевое слово **retailstore**. Больше о точках продаж и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203325423-%D0%A0%D0%BE%D0%B7%D0%BD%D0%B8%D1%86%D0%B0) в разделе "Создание точки продаж в основном интерфейсе".
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](#kontextnyj-poisk). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов точек продаж на соответствие поисковой строке будет осуществлен по следующим полям:

+ по наименованию Точки продаж **name**
+ по адресу Точки продаж **address**

#### Атрибуты сущности
+ **meta** - [Метаданные](#metadannye) о смене`Только для чтения`
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи`Только для чтения`
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](#metadannye) `Только для чтения`
+ **shared** - Общий доступ `Только для чтения`
+ **group** - Отдел сотрудника в формате [Метаданных](#metadannye) `Только для чтения`
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **name** - Наименование точки продаж `Только для чтения`
+ **description** - Описание точки продаж `Только для чтения`
+ **externalCode** - Внешний код точки продаж `Только для чтения`
+ **archived** - Добавлена ли точка продаж в архив `Только для чтения`
+ **address** - Адрес `Только для чтения`
+ **addressFull** - Адрес с детализацией по отдельным полям. `Только для чтения`
+ **controlShippingStock** - Контроль остатков `Только для чтения`
+ **onlyInStock** - Выгружать только товары в наличии. Доступно только при активном контроле остатков. Влияет только на выгрузку остатков в POS API  `Только для чтения`
+ **active** - Включена `Только для чтения`
+ **controlCashierChoice** - Выбор продавца `Только для чтения`
+ **discountEnable** - Разрешить скидки
+ **discountMaxPercent** - Максимальная скидка (в процентах)
+ **priceType** - Тип цен, с которыми будут продаваться товары в рознице `Только для чтения`
+ **cashiers** - Ссылка на Кассиров в формате [Метаданных](#metadannye) `Только для чтения`
+ **egaisEnabled** - Точка продаж должна передавать данные в ЕГАИС
+ **frNumber** - Номер модели ФР
+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](#metadannye) `Только для чтения`
+ **store** - Ссылка на склад в формате [Метаданных](#metadannye) `Только для чтения`
+ **acquire** - Банк-эквайер `Только для чтения`
+ **issueOrders** - Выдача заказов `Только для чтения`
+ **sellReserves** - Учет резервов `Только для чтения`
+ **lastOperationNames** - Последние операции `Только для чтения`
+ **ofdEnabled** - Отправлять электронный чек через ОФД
+ **allowCustomPrice** - Разрешить продажу по свободной цене
+ **authTokenAttached** - создан ли токен для точки продаж `Только для чтения`
+ **orderToState** - Ссылка на статус, который проставится заказу после проведения продажи на его основании (если указано), в формате [Метаданных](#metadannye) `Только для чтения`
+ **customerOrderStates** - Ссылка на статусы, в которых выгружаются заказы в точку продаж (если указано), в формате [Метаданных](#metadannye) `Только для чтения`
+ **environment** - информация об окружении
+ **state** - информация о статусе точки продаж
+ **defaultTaxSystem** - Код системы налогообложения по умолчанию
  + **GENERAL_TAX_SYSTEM** - ОСН
  + **SIMPLIFIED_TAX_SYSTEM_INCOME** - УСН. Доход
  + **SIMPLIFIED_TAX_SYSTEM_INCOME_OUTCOME** - УСН. Доход-Расход
  + **UNIFIED_AGRICULTURAL_TAX** - ЕСХН
  + **PRESUMPTIVE_TAX_SYSTEM** - ЕНВД
  + **PATENT_BASED** - Патент
+ **orderTaxSystem** - Код системы налогообложения для заказов
  + **GENERAL_TAX_SYSTEM** - ОСН
  + **SIMPLIFIED_TAX_SYSTEM_INCOME** - УСН. Доход
  + **SIMPLIFIED_TAX_SYSTEM_INCOME_OUTCOME** - УСН. Доход-Расход
  + **UNIFIED_AGRICULTURAL_TAX** - ЕСХН
  + **PRESUMPTIVE_TAX_SYSTEM** - ЕНВД
  + **PATENT_BASED** - Патент

##### Аттрибуты сущности Окружение
+ **device** - информация об устройстве
+ **os** - информация об операционной системе
+ **software** - информация о ПО
+ **chequePrinter** - данные о ККТ
+ **paymentTerminal** - информация о платежном терминале

###### Аттрибуты сущности ПО
+ **name** - наименование ПО. `Необходимое`
+ **vendor** - Производитель.
+ **version** - версия ПО.

###### Аттрибуты сущности ККТ
+ **vendor** - Производитель
+ **name** - Наименование. `Необходимое`
+ **serial** - серийный номер
+ **fiscalDataVersion** - формат фискальных данных
+ **driver** - информация об используемом драйвере
+ **fiscalMemory** - информация о фискальном накопителе
+ **firmwareVersion** - Версия прошивки ККТ

###### Аттрибуты сущности Драйвер
+ **name** - наименования драйвера
+ **version** - Версия драйвера

###### Аттрибуты сущности Фискальный накопитель
+ **fiscalDataVersion** - версия фискальной памяти

##### Аттрибуты сущности Статус
+ **sync** - состояние синхронизации
+ **lastCheckMoment** - дата и время последней синхронизации
+ **fiscalMemory** - информация о фискальной памяти
+ **paymentTerminal** - информация о платежном терминале `Deprecated`

###### Аттрибуты сущности Синхронизация
+ **message** - состояние синхронизации.
+ **lastAttempMoment** - Дата последней сихронизации (не обязательно успешной). `Необходимое`

###### Аттрибуты сущности Фискальная Память
+ **error** - информация об ошибке ФН
+ **notSendDocCount** - Количество неотправленных документов в ОФД
+ **notSendFirstDocMoment** - Дата первого документа в очереди на отправку

###### Аттрибуты сущности Ошибка
+ **сode** - код ошибки ФН
+ **message** - описание ошибки

###### Аттрибуты сущности Платежный Терминал
+ **acquiringType** - информация о типе эквайера (например: inpas/payme)

###### Аттрибуты сущности Адрес
+ **postalCode** - Почтовый индекс
+ **country** - Ссылка на страну в формате [Метаданных](#metadannye)
+ **region** - Ссылка на регион в формате [Метаданных](#metadannye)
+ **city** - Город
+ **street** - Улица
+ **house** - Дом (Максимальная длина - 30 символов)
+ **apartment** - Квартира (Максимальная длина - 30 символов)
+ **addInfo** - Другое
+ **comment** - Комментарий

Строка адреса является конкатенацией полей структурированного адреса в следующем порядке: postalCode -> country -> region -> city -> street -> house -> apartment -> addInfo, используя запятую в качестве разделителя.
При передачи в МойСклад сущностей с адресом используйте либо строковый адрес, либо структурированный.
При передачи обоих адресов строковый будет игнорирован.
При передачи только строкового он будет отражаться как в строковом поле так и в addInfo структурированного адреса.


##### Последние операции
Поле **lastOperationNames** представляет собой массив объектов со следующей структурой:

+ **entity** - Ключевое слово, обозначающее тип последней операции `Только для чтения`
+ **name** - Наименование (номер) последней операции `Только для чтения`

Представляет собой краткий список последних операций на данной точке продаж. Если продаж на данной точке по факту нет, то номера продаж будут фейковые

##### Кассиры
Сущность кассир представляет собой объект, содержащий ссылки на [Сотрудника](#sotrudnik), назначенного кассиром,
и [Точку продаж](#tochka-prodazh), к которой он привязан.
Подробнее о сущности Кассира можно посмотреть в разделе [Кассиры](#kassir)

###### Атрибуты сущности Кассир
+ **meta** - [Метаданные](#metadannye) о смене`Только для чтения`
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи`Только для чтения`
+ **employee** - Ссылка на сотрудника в формате [Метаданных](#metadannye) `Только для чтения`
+ **retailStore** - Ссылка на точку продаже в формате [Метаданных](#metadannye) `Только для чтения`


### Получить точки продаж 
Запрос всех Розничных точек продаж на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

- **meta** [Метаданные](#metadannye) о выдаче,
- **context** - [Метаданные](#metadannye) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой Розничные точки продаж.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить точки продаж

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retailstore"
  -H "Authorization: Basic <Access-Token>"
```
 
> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Розничных точек продаж.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
    "type": "retailstore",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/2b5eb22f-139e-11e6-9464-e4de00000073",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
        "type": "retailstore",
        "mediaType": "application/json"
      },
      "id": "2b5eb22f-139e-11e6-9464-e4de00000073",
      "accountId": "305f25aa-137a-11e6-9464-e4de00000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-05-06 18:21:13",
      "name": "Точка2",
      "description": "вторая точка",
      "externalCode": "Et9M3cprgDiJPi7llDOhX0",
      "address": "125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
      "addressFull": {
        "postalCode": "125009",
        "country": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
            "type": "country",
            "mediaType": "application/json"
          }
        },
        "region": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
            "type": "region",
            "mediaType": "application/json"
          }
        },
        "city": "Москва",
        "street": "ул Тверская",
        "house": "1",
        "apartment": "123",
        "addInfo": "addinfo",
        "comment": "some words about address"
      },
      "controlShippingStock": false,
      "active": true,
      "controlCashierChoice": false,
      "discountEnable": true,
      "discountMaxPercent": 17,
      "priceType": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
        "name": "Цена продажи",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
      },
      "authTokenAttached": false,
      "cashiers": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/2b5eb22f-139e-11e6-9464-e4de00000073/cashiers",
          "type": "cashier",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "egaisEnabled": true,
      "frNumber": "134578",
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/30f01af0-137a-11e6-9464-e4de0000004e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/30fe30a0-137a-11e6-9464-e4de00000050",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "issueOrders": false,
      "sellReserves": false,
      "lastOperationNames": [
        {
          "entity": "retaildemand",
          "name": "00002"
        }
      ],
      "ofdEnabled": false,
      "allowCustomPrice": false,
      "environment": {
        "device": "Some device name",
        "os": "Linux",
        "software": {
          "name": "Касса МойСклад",
          "vendor": "МойСклад",
          "version": "2.2"
        },
        "chequePrinter": {
          "vendor": "АТОЛ",
          "name": "30Ф",
          "serial": "123456",
          "fiscalDataVersion": "1.0",
          "driver": {
            "name": "АТОЛ (бета)",
            "version": "9.1"
          },
          "fiscalMemory": {
            "fiscalDataVersion": "1.0"
          },
          "firmwareVersion": "669"
        },
        "paymentTerminal": {
          "acquiringType": "payme"
        }
      },
      "state": {
        "sync": {
          "message": "Ошибка синхронизации, необходимо войти повторно",
          "lastAttempMoment": "2016-09-06 21:41:00"
        },
        "lastCheckMoment": "2018-02-05 15:58:24",
        "fiscalMemory": {
          "error": {
            "code": "1003",
            "message": "Критическая ошибка"
          },
          "notSendDocCount": 25,
          "notSendFirstDocMoment": "2016-09-06 21:41:00"
        },
        "paymentTerminal": {
          "acquiringType": "payme"
        }
      },
      "defaultTaxSystem": "GENERAL_TAX_SYSTEM",
      "orderTaxSystem": "GENERAL_TAX_SYSTEM"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/31b6349e-137a-11e6-9464-e4de0000005d",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
        "type": "retailstore",
        "mediaType": "application/json"
      },
      "id": "31b6349e-137a-11e6-9464-e4de0000005d",
      "accountId": "305f25aa-137a-11e6-9464-e4de00000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-05-06 18:09:54",
      "name": "Точка продаж",
      "externalCode": "AEhB1gX7inNaXzAGSbDeh0",
      "address": "125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
      "addressFull": {
        "postalCode": "125009",
        "country": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
            "type": "country",
            "mediaType": "application/json"
          }
        },
        "region": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
            "type": "region",
            "mediaType": "application/json"
          }
        },
        "city": "Москва",
        "street": "ул Тверская",
        "house": "1",
        "apartment": "123",
        "addInfo": "addinfo",
        "comment": "some words about address"
      },
      "controlShippingStock": true,
      "onlyInStock": false,
      "active": true,
      "controlCashierChoice": false,
      "discountEnable": false,
      "priceType": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
        "name": "Цена продажи",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
      },
      "authTokenAttached": false,
      "cashiers": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/31b6349e-137a-11e6-9464-e4de0000005d/cashiers",
          "type": "cashier",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "egaisEnabled": true,
      "frNumber": "134578",
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/30f01af0-137a-11e6-9464-e4de0000004e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/30fe30a0-137a-11e6-9464-e4de00000050",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "acquire": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/30fe66fd-137a-11e6-9464-e4de00000053",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "issueOrders": false,
      "sellReserves": false,
      "lastOperationNames": [
        {
          "entity": "retaildemand",
          "name": "00002"
        }
      ],
      "ofdEnabled": false,
      "allowCustomPrice": false,
      "environment": {
        "device": "Some device name",
        "os": "Linux",
        "software": {
          "name": "Касса МойСклад",
          "vendor": "МойСклад",
          "version": "2.2"
        },
        "chequePrinter": {
          "vendor": "АТОЛ",
          "name": "30Ф",
          "serial": "123456",
          "fiscalDataVersion": "1.0",
          "driver": {
            "name": "АТОЛ (бета)",
            "version": "9.1"
          },
          "fiscalMemory": {
            "fiscalDataVersion": "1.0"
          },
          "firmwareVersion": "669"
        },
        "paymentTerminal": {
          "acquiringType": "payme"
        }
      },
      "state": {
        "sync": {
          "message": "Ошибка синхронизации, необходимо войти повторно",
          "lastAttempMoment": "2016-09-06 21:41:00"
        },
        "lastCheckMoment": "2018-02-05 15:58:24",
        "fiscalMemory": {
          "error": {
            "code": "1003",
            "message": "Критическая ошибка"
          },
          "notSendDocCount": 25,
          "notSendFirstDocMoment": "2016-09-06 21:41:00"
        },
        "paymentTerminal": {
          "acquiringType": "payme"
        }
      }
    }
  ]
}
```

### Удалить точку продаж

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Точки продаж.|

> Запрос на удаление Розничной точки продаж с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление Розничной точки продаж.

### Массовое удаление Точек продаж

В теле запроса нужно передать массив, содержащий JSON метаданных Точек продаж, которые вы хотите удалить.


> Запрос на массовое удаление Точек продаж. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/retailstore"
  -H "Authorization: Basic <Access-Token>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
            "type": "retailstore",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
            "type": "retailstore",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информацио об удалении Точек продаж.

```json
[
  {
    "info":"Сущность 'retailstore' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'retailstore' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
```

#### Точка продаж 

### Получить точку продаж

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Точки продаж.|
 
> Запрос на получение отдельной Розничной точки продаж с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление точки продаж.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/31b6349e-137a-11e6-9464-e4de0000005d",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
    "type": "retailstore",
    "mediaType": "application/json"
  },
  "id": "31b6349e-137a-11e6-9464-e4de0000005d",
  "accountId": "305f25aa-137a-11e6-9464-e4de00000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-05-06 18:09:54",
  "name": "Точка продаж",
  "externalCode": "AEhB1gX7inNaXzAGSbDeh0",
  "address": "125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
  "addressFull": {
    "postalCode": "125009",
    "country": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type": "country",
        "mediaType": "application/json"
      }
    },
    "region": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type": "region",
        "mediaType": "application/json"
      }
    },
    "city": "Москва",
    "street": "ул Тверская",
    "house": "1",
    "apartment": "123",
    "addInfo": "addinfo",
    "comment": "some words about address"
  },
"controlShippingStock": true,
  "onlyInStock": true,
  "active": true,
  "controlCashierChoice": false,
  "discountEnable": true,
  "discountMaxPercent": 17,
  "priceType": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
      "type": "pricetype",
      "mediaType": "application/json"
    },
    "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
    "name": "Цена продажи",
    "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
  },
  "authTokenAttached": false,
  "cashiers": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/31b6349e-137a-11e6-9464-e4de0000005d/cashiers",
      "type": "cashier",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "egaisEnabled": true,
  "frNumber": "134578",
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/30f01af0-137a-11e6-9464-e4de0000004e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/30fe30a0-137a-11e6-9464-e4de00000050",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "acquire": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/30fe66fd-137a-11e6-9464-e4de00000053",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "issueOrders": false,
  "sellReserves": false,
  "lastOperationNames": [
    {
      "entity": "retaildemand",
      "name": "00002"
    }
  ],
  "ofdEnabled": false,
  "allowCustomPrice": false,
  "environment": {
    "device": "Some device name",
    "os": "Linux",
    "software": {
      "name": "Касса МойСклад",
      "vendor": "МойСклад",
      "version": "2.2"
    },
    "chequePrinter": {
      "vendor": "АТОЛ",
      "name": "30Ф",
      "serial": "15636313",
      "fiscalDataVersion": "1.0",
      "driver": {
        "name": "АТОЛ (бета)",
        "version": "9.1"
      },
      "fiscalMemory": {
        "fiscalDataVersion": "1.0"
      },
      "firmwareVersion": "669"
    },
    "paymentTerminal": {
      "acquiringType": "payme"
    }
  },
  "state": {
    "sync": {
      "message": "Ошибка синхронизации, необходимо войти повторно",
      "lastAttempMoment": "2016-09-06 21:41:00"
    },
    "lastCheckMoment": "2018-02-05 15:58:24",
    "fiscalMemory": {
      "error": {
        "code": "1003",
        "message": "Критическая ошибка"
      },
      "notSendDocCount": 25,
      "notSendFirstDocMoment": "2016-09-06 21:41:00"
    },
    "paymentTerminal": {
      "acquiringType": "payme"
    }
  }
}
```
