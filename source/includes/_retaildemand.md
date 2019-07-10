## Розничная продажа
Средствами JSON API можно создавать и обновлять сведения о Розничных продажах, запрашивать списки Розничных продаж и сведения по отдельным Розничным продажам. Позициями Розничных продаж можно управлять как в составе отдельной Розничной продажи, так и отдельно - с помощью специальных ресурсов для управления позициями Розничными продажами. Кодом сущности для Розничной продажи в составе JSON API является ключевое слово **retaildemand**. Больше о Розничных продажах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по  [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203325423-%D0%A0%D0%BE%D0%B7%D0%BD%D0%B8%D1%86%D0%B0) в разделе Оформление продажи.
### Розничные продажи 
#### Атрибуты сущности

+ **meta** - [Метаданные](#metadannye) о Розничной продаже
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **syncId** - ID синхронизации. После заполнения недоступен для изменения.
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **deleted** - Момент последнего удаления сущности `Только для чтения`
+ **name** - номер Розничной продажи
+ **description** - Комментарий Розничной продажи
+ **externalCode** - Внешний код Розничной продажи
+ **moment** - Дата Розничной продажи
+ **applicable** - Отметка о проведении
+ **vatEnabled** - Учитывается ли НДС
+ **vatIncluded** - Включен ли НДС в цену
+ **sum** - Сумма Розничной продажи в копейках `Только для чтения`
+ **rate** - Валюта
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](#metadannye)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](#metadannye)
+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](#metadannye)
+ **agent** - Ссылка на контрагента в формате [Метаданных](#metadannye)
+ **store** - Ссылка на склад в формате [Метаданных](#metadannye)
+ **contract** - Ссылка на договор в формате [Метаданных](#metadannye)
+ **project** - Ссылка на проект в формате [Метаданных](#metadannye)
+ **state** - Статус Розничной продажи в формате [Метаданных](#metadannye)
+ **organizationAccount** - Ссылка на счет вашего юрлица в формате [Метаданных](#metadannye)
+ **agentAccount** - Ссылка на счет контрагента в формате [Метаданных](#metadannye)
+ **attributes** - Коллекция доп. полей в формате [Метаданных](#metadannye)
+ **documents** - Список печатных форм в формате [Метаданных](#metadannye)
<br>Поля при expand'е:</br>
  - **name** - номер документа
  - **moment** - дата печати
  - **href** - ссылка на файл печатной формы
  - **fileName** - название файла печатной формы
  - **updated** - дата последнего изменения
+ **created** - Дата создания `Только для чтения`
+ **vatSum** - Сумма НДС `Только для чтения`
+ **positions** - Ссылка на позиции Розничной продажи в формате [Метаданных](#metadannye)
+ **fiscalPrinterInfo** - Информация о фискальном регистраторе
+ **documentNumber** - Номер документа
+ **checkNumber** - Номер чека
+ **checkSum** - Сумма Чека
+ **fiscal** - Отметка о том, был ли использован ФР `Только для чтения`
+ **sessionNumber** - Номер сессии
+ **ofdCode** -Код оператора фискальных данных
+ **payedSum** - Сумма входящих платежей по Розничной продаже `Только для чтения`
+ **retailStore** - Ссылка на точку продаж в формате [Метаданных](#metadannye)
+ **customerOrder** - Ссылка на Заказ Покупателя, с которым связана эта Розничная продажа в формате [Метаданных](#metadannye)
+ **retailShift** - Ссылка на Розничную смену, в рамках которой была проведена продажа в формате [Метаданных](#metadannye) `Необходимое`
+ **cashSum**  - Оплачено наличными
+ **noCashSum** - Оплачено картой
+ **prepaymentCashSum** - Предоплата наличными
+ **prepaymentNoCashSum** - Предоплата картой

#### Работа с полями оплаты розничной продажи
Сумма полей **cashSum**, **noCashSum**, **prepaymentCashSum** и **prepaymentNoCashSum**
должна совпадать с суммой по Розничной продаже
(т.е. с суммарной стоимостью всех переданных вами позиций). Каждое из полей не может иметь отрицательное значение.

При передаче значений нескольких полей кроме **cashSum**, оставшаяся часть суммы будет учтена в **cashSum**.

При передаче значений нескольких полей включая **cashSum**, но не включая **noCashSum**, оставшаяся часть суммы будет учтена в **noCashSum**.

Если передаются **cashSum** и **noCashSum**, сумма всех полей должна соответствовать сумме по Розничной продаже иначе вернется ошибка.

Если **prepaymentCashSum** и **prepaymentNoCashSum** не передаются в запросе, считается, что они равны нулю.

#### Позиции Розничной продажи
Позиции Розничной продажи - это список товаров/услуг/модификаций/серий.
Объект позиции Розничной продажи содержит следующие поля:

+ **id** - ID товара в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **quantity** - Количество товаров/услуг данного вида в позиции. Если позиция - товар, у которого включен учет по серийным номерам, то значение в этом поле всегда будет равно количеству серийных номеров для данной позиции в документе.
+ **price** - Цена товара/услуги в копейках
+ **discount** - Процент скидки или наценки. Наценка указывается отрицательным числом, т.е. -10 создаст наценку в 10%
+ **vat** - НДС, которым облагается текущая позиция
+ **assortment** - Ссылка на товар/услугу/серию/модификацию, которую представляет собой позиция, в формате [Метаданных](#metadannye)
+ **pack** - Упаковка товара
+ **things** - Серийные номера
Значение данного атрибута игнорируется, если товар позиции не находится на серийном учете.
В ином случае количество товаров в позиции будет равно количеству серийных номеров, переданных в значении атрибута.

+ **cost** - Себестоимость (только для услуг)

С позициями можно работать с помощью специальных [ресурсов для управления позициями Розничной продажи](#pozicii-roznichnoj-prodazhi-2),
а также в составе отдельной Розничной продажи. При работе в составе отдельной Розничной продажи,
вы можете отправлять запросы на создание отдельной Розничной продажи с включенным в тело запроса
массивом позиций Розничной продажи. Если количество позиций превышает максимально допустимое, то для
дальнейшего пополнения позиций нужно будет работать со специальным ресурсом "Позиции Розничной продажи".
Также, при работе в составе отдельной Розничной продажи, можно отправлять запросы на обновление списка позиций
с включенным в тело запроса массивом позиций Розничной продажи. При этом важно помнить, что коллекция позиций будет
восприниматься как "все позиции Розничной продажи" и полностью заменит уже существующую коллекцию при обновлении объекта - лишние
позиции будут удалены, новые добавлены, существующие - изменены.

О работе с доп. полями Розничных продаж можно прочитать [здесь](#rabota-s-dopolnitel-nymi-polqmi)


### Получить Розничные продажи 
Запрос всех Розничных продаж на данной учетной записи.
Результат: Объект JSON, включающий в себя поля:

- **meta** [Метаданные](#metadannye) о выдаче,
- **context** - [Метаданные](#metadannye) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой Розничные продажи.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить Розничные продажи

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Розничных продаж.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/",
    "type": "retaildemand",
    "mediaType": "application/json",
    "size": 4,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/0b71daec-055e-11e6-9464-e4de0000007e",
        "type": "retaildemand",
        "mediaType": "application/json"
      },
      "id": "0b71daec-055e-11e6-9464-e4de0000007e",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "updated": "2016-04-18 15:06:55",
      "name": "00001",
      "externalCode": "wxMDIT3-gAn3dmPrr451P0",
      "owner": {
        "name": "Администратор"
      },
      "shared": false,
      "group": {
        "name": "Основной"
      },
      "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
      "moment": "2016-04-18 15:06:00",
      "applicable": true,
      "vatEnabled": true,
      "vatIncluded": true,
      "sum": 5100,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/8518d001-f504-11e5-8a84-bae50000016a",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "attributes": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "bb08dccf-0bd2-11e6-9464-e4de000000ae",
          "name": "ыаыфацфыа",
          "type": "string",
          "value": "Веселый атрибут"
        }
      ],
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/0b71daec-055e-11e6-9464-e4de0000007e/positions",
          "type": "demandposition",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "payedSum": 0,
      "fiscal": false,
      "retailStore": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/851f8576-f504-11e5-8a84-bae50000016c",
          "type": "retailstore",
          "mediaType": "application/json"
        }
      },
      "retailShift": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/0b2b2caf-055e-11e6-9464-e4de0000007c",
          "type": "retailshift",
          "mediaType": "application/json"
        }
      },
      "cashSum": 5100,
      "noCashSum": 0,
      "prepaymentCashSum": 0,
      "prepaymentNoCashSum": 0
      
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/cdccba00-0563-11e6-9464-e4de00000090",
        "type": "retaildemand",
        "mediaType": "application/json"
      },
      "id": "cdccba00-0563-11e6-9464-e4de00000090",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "updated": "2016-04-18 15:48:09",
      "name": "00002",
      "externalCode": "ctnglspQg2UGQ388P4pzY3",
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
      "syncId": "d8996a1c-e7ea-470a-994f-a82fdf3190e5",
      "moment": "2016-04-18 15:48:00",
      "applicable": true,
      "vatEnabled": true,
      "vatIncluded": true,
      "sum": 1800,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "organization": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "store": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
          "type": "store",
          "mediaType": "application/json"
        }
      },
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/8518d001-f504-11e5-8a84-bae50000016a",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "attributes": [
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
            "type": "attributemetadata",
            "mediaType": "application/json"
          },
          "id": "bb08dccf-0bd2-11e6-9464-e4de000000ae",
          "name": "ыаыфацфыа",
          "type": "string",
          "value": "Веселый атрибут"
        }
      ],
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/cdccba00-0563-11e6-9464-e4de00000090/positions",
          "type": "demandposition",
          "mediaType": "application/json",
          "size": 4,
          "limit": 1000,
          "offset": 0
        }
      },
      "payedSum": 0,
      "fiscal": false,
      "retailStore": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/851f8576-f504-11e5-8a84-bae50000016c",
          "type": "retailstore",
          "mediaType": "application/json"
        }
      },
      "retailShift": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/cd86df19-0563-11e6-9464-e4de0000008e",
          "type": "retailshift",
          "mediaType": "application/json"
        }
      },
      "cashSum": 0,
      "noCashSum": 1800,
      "prepaymentCashSum": 0,
      "prepaymentNoCashSum": 0
    }
  ]
}
```

### Создать Розничную продажу 
Розничная смена, на которую указывает ссылка при создании Розничной продажи обязательно должна быть активной.
При создании Розничной продажи через JSON API, дата, указанная в **moment** продажи
должна быть позже даты, указанной в **moment** активной розничной смены, иначе
произойдет ошибка.
Обязательные поля при создании новой Розничной продажи:

+ **name** - Номер продажи
+ **retailShift** - Сссылка на Розничную смену, в рамках которой происходит продажа

> Пример создания новой Розничной продажи с телом запроса, содержащим только необходимые поля.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "retailShift": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/0b2b2caf-055e-11e6-9464-e4de0000007c",
                "type": "retailshift",
                "mediaType": "application/json"
              }
            },
            "name": "666dem"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Розничной продажи.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/fb5cbcba-0c4e-11e6-9464-e4de00000000",
    "type": "retaildemand",
    "mediaType": "application/json"
  },
  "id": "fb5cbcba-0c4e-11e6-9464-e4de00000000",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "updated": "2016-04-27 11:06:44",
  "name": "666dem",
  "externalCode": "zyOXI-sjg98Ns7iwAA2Pe2",
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
  "moment": "2016-04-27 11:06:44",
  "applicable": true,
  "vatEnabled": true,
  "vatIncluded": true,
  "sum": 0,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/8518d001-f504-11e5-8a84-bae50000016a",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "bb08dccf-0bd2-11e6-9464-e4de000000ae",
      "name": "ыаыфацфыа",
      "type": "string",
      "value": "Веселый атрибут"
    }
  ],
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/fb5cbcba-0c4e-11e6-9464-e4de00000000/positions",
      "type": "demandposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "payedSum": 0,
  "fiscal": false,
  "retailStore": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/851f8576-f504-11e5-8a84-bae50000016c",
      "type": "retailstore",
      "mediaType": "application/json"
    }
  },
  "retailShift": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/0b2b2caf-055e-11e6-9464-e4de0000007c",
      "type": "retailshift",
      "mediaType": "application/json"
    }
  },
  "cashSum": 0,
  "noCashSum": 0,
  "prepaymentCashSum": 0,
  "prepaymentNoCashSum": 0
}

```

> Пример создания новой Розничной продажи с более насыщенным телом запроса.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "retailShift": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/0b2b2caf-055e-11e6-9464-e4de0000007c",
                "type": "retailshift",
                "mediaType": "application/json"
              }
            },
            "name": "666demand",
            "code": "fuuuuCode1",
            "externalCode": "sd1wqsfa2qas",
            "moment": "2016-04-27 13:06:44",
            "applicable": true,
            "sum": 200,
            "payedSum": 200,
            "fiscal": true,
            "fiscalPrinterInfo": "The freaking best FiscalPrinter ever!!",
            "documentNumber": 39,
            "checkNumber": 124421,
            "checkSum": 200,
            "sessionNumber": 251251,
            "ofdCode": 13
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Розничной продажи.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/debee00e-0c59-11e6-9464-e4de00000008",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata",
    "type": "retaildemand",
    "mediaType": "application/json"
  },
  "id": "debee00e-0c59-11e6-9464-e4de00000008",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "updated": "2016-04-27 12:24:40",
  "name": "666demand",
  "code": "fuuuuCode1",
  "externalCode": "sd1wqsfa2qas",
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
  "moment": "2016-04-27 13:06:44",
  "applicable": true,
  "vatEnabled": true,
  "vatIncluded": true,
  "sum": 0,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/8518d001-f504-11e5-8a84-bae50000016a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/debee00e-0c59-11e6-9464-e4de00000008/positions",
      "type": "demandposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "payedSum": 0,
  "fiscalPrinterInfo": "The freaking best FiscalPrinter ever!!",
  "documentNumber": 39,
  "checkNumber": 124421,
  "checkSum": 200,
  "fiscal": true,
  "sessionNumber": 13,
  "retailStore": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/851f8576-f504-11e5-8a84-bae50000016c",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
      "type": "retailstore",
      "mediaType": "application/json"
    }
  },
  "retailShift": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/0b2b2caf-055e-11e6-9464-e4de0000007c",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
      "type": "retailshift",
      "mediaType": "application/json"
    }
  },
  "cashSum": 0,
  "noCashSum": 0,
  "prepaymentCashSum": 0,
  "prepaymentNoCashSum": 0
}
```

> Пример запроса на создание Розничной продажи с позициями в теле запроса.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "retailShift": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/0b2b2caf-055e-11e6-9464-e4de0000007c",
                "type": "retailshift",
                "mediaType": "application/json"
              }
            },
            "name": "666demansd",
            "code": "fuuuuCodfe1",
            "externalCode": "sd1wqsfa2qas",
            "moment": "2016-04-27 13:06:44",
            "applicable": true,
            "sum": 200,
            "payedSum": 200,
            "fiscal": true,
            "fiscalPrinterInfo": "The freaking best FiscalPrinter ever!!",
            "documentNumber": 39,
            "checkNumber": 124421,
            "checkSum": 200,
            "sessionNumber": 251251,
            "ofdCode": 13,
            "positions": [
              {
                "quantity": 10,
                "price": 100,
                "discount": 0,
                "vat": 0,
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/8b382799-f7d2-11e5-8a84-bae5000003a5",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              },
              {
                "quantity": 20,
                "price": 200,
                "discount": 0,
                "vat": 21,
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/be903062-f504-11e5-8a84-bae50000019a",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              },
              {
                "quantity": 30,
                "price": 300,
                "discount": 0,
                "vat": 7,
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/c02e3a5c-007e-11e6-9464-e4de00000006",
                    "type": "service",
                    "mediaType": "application/json"
                  }
                },
                "cost": 130
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Розничной продажи.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/2ef43ba7-0c5a-11e6-9464-e4de0000000c",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata",
    "type": "retaildemand",
    "mediaType": "application/json"
  },
  "id": "2ef43ba7-0c5a-11e6-9464-e4de0000000c",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "updated": "2016-04-27 12:26:55",
  "name": "666demansd",
  "code": "fuuuuCodfe1",
  "externalCode": "sd1wqsfa2qas",
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
  "moment": "2016-04-27 13:06:44",
  "applicable": true,
  "vatEnabled": true,
  "vatIncluded": true,
  "sum": 14000,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/8518d001-f504-11e5-8a84-bae50000016a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/2ef43ba7-0c5a-11e6-9464-e4de0000000c/positions",
      "type": "demandposition",
      "mediaType": "application/json",
      "size": 3,
      "limit": 1000,
      "offset": 0
    }
  },
  "payedSum": 0,
  "fiscalPrinterInfo": "The freaking best FiscalPrinter ever!!",
  "documentNumber": 39,
  "checkNumber": 124421,
  "checkSum": 200,
  "fiscal": true,
  "sessionNumber": 13,
  "retailStore": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/851f8576-f504-11e5-8a84-bae50000016c",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
      "type": "retailstore",
      "mediaType": "application/json"
    }
  },
  "retailShift": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/0b2b2caf-055e-11e6-9464-e4de0000007c",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
      "type": "retailshift",
      "mediaType": "application/json"
    }
  },
  "cashSum": 14000,
  "noCashSum": 0,
  "prepaymentCashSum": 0,
  "prepaymentNoCashSum": 0
}
```

> Пример запроса на создание Розничной продажи с доп. полями.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "retailShift": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/0b2b2caf-055e-11e6-9464-e4de0000007c",
                "type": "retailshift",
                "mediaType": "application/json"
              }
            },
            "name": "666demansd",
            "code": "fuuuuCodfe1",
            "externalCode": "sd1wqsfa2qas",
            "moment": "2016-04-27 13:06:44",
            "applicable": true,
            "sum": 200,
            "payedSum": 200,
            "fiscal": true,
            "fiscalPrinterInfo": "The freaking best FiscalPrinter ever!!",
            "documentNumber": 39,
            "checkNumber": 124421,
            "checkSum": 200,
            "sessionNumber": 251251,
            "ofdCode": 13,
            "positions": [
              {
                "quantity": 10,
                "price": 100,
                "discount": 0,
                "vat": 0,
                "product": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/8b382799-f7d2-11e5-8a84-bae5000003a5",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              },
              {
                "quantity": 20,
                "price": 200,
                "discount": 0,
                "vat": 21,
                "product": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/be903062-f504-11e5-8a84-bae50000019a",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              },
              {
                "quantity": 30,
                "price": 300,
                "discount": 0,
                "vat": 7,
                "product": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/c02e3a5c-007e-11e6-9464-e4de00000006",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              }
            ],
            "attributes": [
              {
                "id": "bb08dccf-0bd2-11e6-9464-e4de000000ae",
                "value": "Веселый атрибут"
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Розничной продажи.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/d6dd9a8a-0c5a-11e6-9464-e4de00000016",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata",
    "type": "retaildemand",
    "mediaType": "application/json"
  },
  "id": "d6dd9a8a-0c5a-11e6-9464-e4de00000016",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "updated": "2016-04-27 12:31:37",
  "name": "666demansd",
  "code": "fuuuuCodfe1",
  "externalCode": "sd1wqsfa2qas",
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
  "moment": "2016-04-27 13:06:44",
  "applicable": true,
  "vatEnabled": true,
  "vatIncluded": true,
  "sum": 14000,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/8518d001-f504-11e5-8a84-bae50000016a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "bb08dccf-0bd2-11e6-9464-e4de000000ae",
      "name": "ыаыфацфыа",
      "type": "string",
      "value": "Веселый атрибут"
    }
  ],
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/d6dd9a8a-0c5a-11e6-9464-e4de00000016/positions",
      "type": "demandposition",
      "mediaType": "application/json",
      "size": 3,
      "limit": 1000,
      "offset": 0
    }
  },
  "payedSum": 0,
  "fiscalPrinterInfo": "The freaking best FiscalPrinter ever!!",
  "documentNumber": 39,
  "checkNumber": 124421,
  "checkSum": 200,
  "fiscal": true,
  "sessionNumber": 13,
  "retailStore": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/851f8576-f504-11e5-8a84-bae50000016c",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
      "type": "retailstore",
      "mediaType": "application/json"
    }
  },
  "retailShift": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/0b2b2caf-055e-11e6-9464-e4de0000007c",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
      "type": "retailshift",
      "mediaType": "application/json"
    }
  },
  "cashSum": 14000,
  "noCashSum": 0,
  "prepaymentCashSum": 0,
  "prepaymentNoCashSum": 0
}
```

### Массовое создание и обновление Розничных продаж 
[Массовое создание и обновление](#sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Розничных продаж.
В теле запроса нужно передать массив, содержащий JSON представления Розничных продаж, которые вы хотите создать или обновить.
Обновляемые Розничные продажи должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Розничных продаж

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '[
            {
              "retailShift": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/0b2b2caf-055e-11e6-9464-e4de0000007c",
                  "type": "retailshift",
                  "mediaType": "application/json"
                }
              },
              "name": "666dem"
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/d6dd9a8a-0c5a-11e6-9464-e4de00000016",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata",
                "type": "retaildemand",
                "mediaType": "application/json"
              },
              "retailShift": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/0b2b2caf-055e-11e6-9464-e4de0000007c",
                  "type": "retailshift",
                  "mediaType": "application/json"
                }
              },
              "name": "100500_200_300",
              "moment": "2016-04-30 13:06:42",
              "applicable": false,
              "sum": 32402222220,
              "payedSum": 23622200,
              "fiscal": false,
              "fiscalPrinterInfo": "The freaking worst FiscalPrinter ever!!",
              "documentNumber": 3,
              "checkNumber": 1221,
              "checkSum": 1,
              "sessionNumber": 251251,
              "ofdCode": 13
            }
          ]
'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Розничных продаж.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/fb5cbcba-0c4e-11e6-9464-e4de00000000",
      "type": "retaildemand",
      "mediaType": "application/json"
    },
    "id": "fb5cbcba-0c4e-11e6-9464-e4de00000000",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "updated": "2016-04-27 11:06:44",
    "name": "666dem",
    "externalCode": "zyOXI-sjg98Ns7iwAA2Pe2",
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
    "moment": "2016-04-27 11:06:44",
    "applicable": true,
    "vatEnabled": true,
    "vatIncluded": true,
    "sum": 0,
    "rate": {
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    },
    "organization": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "store": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/8518d001-f504-11e5-8a84-bae50000016a",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "attributes": [
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "bb08dccf-0bd2-11e6-9464-e4de000000ae",
        "name": "ыаыфацфыа",
        "type": "string",
        "value": "Веселый атрибут"
      }
    ],
    "created": "2007-02-07 17:16:41",
    "positions": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/fb5cbcba-0c4e-11e6-9464-e4de00000000/positions",
        "type": "demandposition",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    },
    "payedSum": 0,
    "fiscal": false,
    "retailStore": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/851f8576-f504-11e5-8a84-bae50000016c",
        "type": "retailstore",
        "mediaType": "application/json"
      }
    },
    "retailShift": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/0b2b2caf-055e-11e6-9464-e4de0000007c",
        "type": "retailshift",
        "mediaType": "application/json"
      }
    },
    "cashSum": 0,
    "noCashSum": 0,
    "prepaymentCashSum": 0,
    "prepaymentNoCashSum": 0
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/d6dd9a8a-0c5a-11e6-9464-e4de00000016",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata",
      "type": "retaildemand",
      "mediaType": "application/json"
    },
    "id": "d6dd9a8a-0c5a-11e6-9464-e4de00000016",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "updated": "2016-04-27 12:49:57",
    "name": "100500_200_300",
    "code": "fuuuuCodfe1",
    "externalCode": "sd1wqsfa2qas",
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
    "moment": "2016-04-30 13:06:42",
    "applicable": false,
    "vatEnabled": true,
    "vatIncluded": true,
    "sum": 17722,
    "rate": {
      "currency": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    },
    "organization": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "store": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
        "type": "store",
        "mediaType": "application/json"
      }
    },
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/8518d001-f504-11e5-8a84-bae50000016a",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "attributes": [
      {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "bb08dccf-0bd2-11e6-9464-e4de000000ae",
        "name": "ыаыфацфыа",
        "type": "string",
        "value": "Веселый атрибут"
      }
    ],
    "created": "2007-02-07 17:16:41",
    "positions": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/d6dd9a8a-0c5a-11e6-9464-e4de00000016/positions",
        "type": "demandposition",
        "mediaType": "application/json",
        "size": 2,
        "limit": 1000,
        "offset": 0
      }
    },
    "payedSum": 0,
    "fiscalPrinterInfo": "The freaking worst FiscalPrinter ever!!",
    "documentNumber": 3,
    "checkNumber": 1221,
    "checkSum": 1,
    "fiscal": false,
    "sessionNumber": 13,
    "retailStore": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/851f8576-f504-11e5-8a84-bae50000016c",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
        "type": "retailstore",
        "mediaType": "application/json"
      }
    },
    "retailShift": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/0b2b2caf-055e-11e6-9464-e4de0000007c",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
        "type": "retailshift",
        "mediaType": "application/json"
      }
    },
    "cashSum": 17722,
    "noCashSum": 0,
    "prepaymentCashSum": 0,
    "prepaymentNoCashSum": 0
  }
]
```

### Удалить Розничную продажу

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Розничной продажи.|
 
> Запрос на удаление Розничной продажи с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление Розничной продажи.

### Метаданные Розничных продаж 
#### Метаданные Розничных продаж 
Запрос на получение метаданных Розничных продаж. Результат - объект JSON, включающий в себя:

+ **meta** - Ссылка на метаданные Розничных продаж
+ **attributes** - Массив объектов доп. полей Розничных продаж в формате [Метаданных](#metadannye)
+ **states** - Массив статусов Розничных продаж
+ **createShared** - создавать новые Розничные продажи с меткой "Общий"

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](#rabota-s-dopolnitel-nymi-polqmi).

> Метаданные Розничных продаж

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Розничных продаж.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "id": "bb08dccf-0bd2-11e6-9464-e4de000000ae",
      "name": "ыаыфацфыа",
      "type": "string",
      "required": false
    }
  ],
  "states": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56c504-2e58-11e6-8a84-bae500000069",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Новый",
      "color": 15106326,
      "stateType": "Regular",
      "entityType": "retaildemand"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata/states/fb56cae3-2e58-11e6-8a84-bae50000006a",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56cae3-2e58-11e6-8a84-bae50000006a",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Подтвержден",
      "color": 40931,
      "stateType": "Regular",
      "entityType": "retaildemand"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata/states/fb56cf4f-2e58-11e6-8a84-bae50000006b",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56cf4f-2e58-11e6-8a84-bae50000006b",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Собран",
      "color": 8767198,
      "stateType": "Regular",
      "entityType": "retaildemand"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata/states/fb56d433-2e58-11e6-8a84-bae50000006c",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56d433-2e58-11e6-8a84-bae50000006c",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Отгружен",
      "color": 10774205,
      "stateType": "Regular",
      "entityType": "retaildemand"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata/states/fb56d92f-2e58-11e6-8a84-bae50000006d",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56d92f-2e58-11e6-8a84-bae50000006d",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Доставлен",
      "color": 8825440,
      "stateType": "Successful",
      "entityType": "retaildemand"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata/states/fb56de0a-2e58-11e6-8a84-bae50000006e",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56de0a-2e58-11e6-8a84-bae50000006e",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Возврат",
      "color": 15280409,
      "stateType": "Unsuccessful",
      "entityType": "retaildemand"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata/states/fb56e2b4-2e58-11e6-8a84-bae50000006f",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "fb56e2b4-2e58-11e6-8a84-bae50000006f",
      "accountId": "f976ed28-2e58-11e6-8a84-bae500000001",
      "name": "Отменен",
      "color": 15280409,
      "stateType": "Unsuccessful",
      "entityType": "retaildemand"
    }
  ],
  "createShared": false
}
```

### Отдельное доп. поле
 
#### Отдельное доп. поле

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Доп. поля.|
 
> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata/attributes/f04d010f-558c-11e6-8a84-bae50000009d",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "f04d010f-558c-11e6-8a84-bae50000009d",
  "name": "Инфо о клиенте",
  "type": "text",
  "required": true
}
```

### Шаблон розничной продажи 
#### Шаблон розничной продажи 
Запрос на получение предзаполненого стандартными значениями шаблона розничной продажи на основе других документов.
При получении шаблона розничной продажи, всегда обязательно указывать ссылку на розничную смену. Без связи со сменой, получить шаблон продажи нельзя.
Шаблон продажи можно получить на основе:

+ Розничной смены
+ Заказа покупателя

> Пример получения шаблона розничной продажи с телом запроса, содержащим информацию о розничной смене.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/new"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "retailShift": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/0b2b2caf-055e-11e6-9464-e4de0000007c",
                "type": "retailshift",
                "mediaType": "application/json"
              }
            },
            "name": "666dem"
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненной розничной продажи.

```json
{
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/d7a0c095-d7d9-11e6-1542-821d0000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/d732fca4-d7d9-11e6-1542-821d00000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2017-03-16 16:09:44",
  "applicable": true,
  "sum": 0,
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/d7db331a-d7d9-11e6-1542-821d00000053",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/d7cac318-d7d9-11e6-1542-821d00000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "retailShift": {
    "retailShift": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/0b2b2caf-055e-11e6-9464-e4de0000007c",
        "type": "retailshift",
        "mediaType": "application/json"
      }
    }
  },
  "documents": {
    "rows": []
  },
  "positions": {
    "rows": []
  },
  "vatEnabled": true,
  "vatIncluded": true,
  "payedSum": 0,
  "fiscal": false,
  "cashSum": 0,
  "noCashSum": 0,
  "prepaymentCashSum": 0,
  "prepaymentNoCashSum": 0
}
```

> Пример получения шаблона розничной продажи с телом запроса, содержащим информацию о розничной смене и заказе покупателя.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/new"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "retailShift": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/0b2b2caf-055e-11e6-9464-e4de0000007c",
                "type": "retailshift",
                "mediaType": "application/json"
              }
            },
            "customerOrder": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/1b2b2caf-055e-11e6-9464-e4de0000007c",
                "type": "customerorder",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненной розничной продажи.

```json
{
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/d7a0c095-d7d9-11e6-1542-821d0000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/d732fca4-d7d9-11e6-1542-821d00000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "moment": "2017-03-16 16:09:44",
  "applicable": true,
  "sum": 0,
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/d7db331a-d7d9-11e6-1542-821d00000053",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/d7cac318-d7d9-11e6-1542-821d00000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "retailShift": {
    "retailShift": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/0b2b2caf-055e-11e6-9464-e4de0000007c",
        "type": "retailshift",
        "mediaType": "application/json"
      }
    }
  },
  "positions": [
    {
      "quantity": 1,
      "price": 1000,
      "discount": 0,
      "vat": 0,
      "assortment": {
        "meta": {
          "href": "http://localhost:8081/api/remap/1.2/entity/product/9f9ac08a-e0e3-11e7-9464-e4de00000003",
          "metadataHref": "http://localhost:8081/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "http://localhost:8081/app/#good/edit?id=3bb1af6c-2842-11e9-ac12-000c00000061"
        }
      }
    }
  ],
  "vatEnabled": true,
  "vatIncluded": true,
  "payedSum": 0,
  "fiscal": false,
  "cashSum": 0,
  "noCashSum": 0,
  "prepaymentCashSum": 0,
  "prepaymentNoCashSum": 0,
  "customerOrder": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/1b2b2caf-055e-11e6-9464-e4de0000007c",
      "type": "customerorder",
      "mediaType": "application/json"
    }
  }
}
```

### Розничная продажа
 
### Получить Розничную продажу

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Розничной продажи.|
 
> Запрос на получение отдельной Розничной продажи с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Розничной продажи с указанным id.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/cdccba00-0563-11e6-9464-e4de00000090",
    "type": "retaildemand",
    "mediaType": "application/json"
  },
  "id": "cdccba00-0563-11e6-9464-e4de00000090",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "updated": "2016-04-18 15:48:09",
  "name": "00002",
  "externalCode": "ctnglspQg2UGQ388P4pzY3",
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
  "syncId": "d8996a1c-e7ea-470a-994f-a82fdf3190e5",
  "moment": "2016-04-18 15:48:00",
  "applicable": true,
  "vatEnabled": true,
  "vatIncluded": true,
  "sum": 1800,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/8518d001-f504-11e5-8a84-bae50000016a",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "bb08dccf-0bd2-11e6-9464-e4de000000ae",
      "name": "ыаыфацфыа",
      "type": "string",
      "value": "Веселый атрибут"
    }
  ],
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/cdccba00-0563-11e6-9464-e4de00000090/positions",
      "type": "demandposition",
      "mediaType": "application/json",
      "size": 4,
      "limit": 1000,
      "offset": 0
    }
  },
  "payedSum": 0,
  "fiscal": false,
  "retailStore": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/851f8576-f504-11e5-8a84-bae50000016c",
      "type": "retailstore",
      "mediaType": "application/json"
    }
  },
  "retailShift": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/cd86df19-0563-11e6-9464-e4de0000008e",
      "type": "retailshift",
      "mediaType": "application/json"
    }
  },
  "cashSum": 0,
  "noCashSum": 1800,
  "prepaymentCashSum": 0,
  "prepaymentNoCashSum": 0
}
```

### Изменить Розничную продажу 
Запрос на обновление Розничной продажи с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Розничной продажи, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Розничной продажи](#roznichnaq-prodazha).
При обновлении полей **organization** и **agent** нужно также обновить поля **organizationAccount** и
**agentAccount** соответственно, иначе произойдет ошибка.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Розничной продажи.|

> Пример запроса на обновление Розничной продажи.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "retailShift": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/0b2b2caf-055e-11e6-9464-e4de0000007c",
                "type": "retailshift",
                "mediaType": "application/json"
              }
            },
            "name": "100500_200_300",
            "moment": "2016-04-30 13:06:42",
            "applicable": false,
            "sum": 32402222220,
            "payedSum": 23622200,
            "fiscal": false,
            "fiscalPrinterInfo": "The freaking worst FiscalPrinter ever!!",
            "documentNumber": 3,
            "checkNumber": 1221,
            "checkSum": 1,
            "sessionNumber": 251251,
            "ofdCode": 13
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Розничной продажи.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/d6dd9a8a-0c5a-11e6-9464-e4de00000016",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata",
    "type": "retaildemand",
    "mediaType": "application/json"
  },
  "id": "d6dd9a8a-0c5a-11e6-9464-e4de00000016",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "updated": "2016-04-27 12:49:57",
  "name": "100500_200_300",
  "code": "fuuuuCodfe1",
  "externalCode": "sd1wqsfa2qas",
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
  "moment": "2016-04-30 13:06:42",
  "applicable": false,
  "vatEnabled": true,
  "vatIncluded": true,
  "sum": 17722,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/8518d001-f504-11e5-8a84-bae50000016a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "bb08dccf-0bd2-11e6-9464-e4de000000ae",
      "name": "ыаыфацфыа",
      "type": "string",
      "value": "Веселый атрибут"
    }
  ],
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/d6dd9a8a-0c5a-11e6-9464-e4de00000016/positions",
      "type": "demandposition",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "payedSum": 0,
  "fiscalPrinterInfo": "The freaking worst FiscalPrinter ever!!",
  "documentNumber": 3,
  "checkNumber": 1221,
  "checkSum": 1,
  "fiscal": false,
  "sessionNumber": 13,
  "retailStore": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/851f8576-f504-11e5-8a84-bae50000016c",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
      "type": "retailstore",
      "mediaType": "application/json"
    }
  },
  "retailShift": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/0b2b2caf-055e-11e6-9464-e4de0000007c",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
      "type": "retailshift",
      "mediaType": "application/json"
    }
  },
  "cashSum": 17722,
  "noCashSum": 0,
  "prepaymentCashSum": 0,
  "prepaymentNoCashSum": 0
}
```

> Пример запроса на обновление Розничной продажи с доп. полями и позициями в теле запроса.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "retailShift": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/0b2b2caf-055e-11e6-9464-e4de0000007c",
                "type": "retailshift",
                "mediaType": "application/json"
              }
            },
            "name": "100500",
            "moment": "2016-04-27 13:06:42",
            "applicable": true,
            "sum": 32400,
            "payedSum": 23622200,
            "fiscal": true,
            "fiscalPrinterInfo": "The freaking best FiscalPrinter ever!!",
            "documentNumber": 329,
            "checkNumber": 124421,
            "checkSum": 200,
            "sessionNumber": 251251,
            "ofdCode": 13,
            "positions": [
              {
                "quantity": 10,
                "price": 1330,
                "discount": 0,
                "vat": 1,
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/8b382799-f7d2-11e5-8a84-bae5000003a5",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              },
              {
                "quantity": 22,
                "price": 201,
                "discount": 0,
                "vat": 21,
                "assortment": {
                  "meta": {
                    "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/be903062-f504-11e5-8a84-bae50000019a",
                    "type": "product",
                    "mediaType": "application/json"
                  }
                }
              }
            ],
            "attributes": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "id": "bb08dccf-0bd2-11e6-9464-e4de000000ae",
                "name": "ыаыфацфыа",
                "type": "string",
                "value": "Веселый атрибут"
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной Розничной продажи.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/d6dd9a8a-0c5a-11e6-9464-e4de00000016",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/metadata",
    "type": "retaildemand",
    "mediaType": "application/json"
  },
  "id": "d6dd9a8a-0c5a-11e6-9464-e4de00000016",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "updated": "2016-04-27 12:47:21",
  "name": "100500",
  "code": "fuuuuCodfe1",
  "externalCode": "sd1wqsfa2qas",
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
  "moment": "2016-04-27 13:06:42",
  "applicable": true,
  "vatEnabled": true,
  "vatIncluded": true,
  "sum": 17722,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/8518d001-f504-11e5-8a84-bae50000016a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "bb08dccf-0bd2-11e6-9464-e4de000000ae",
      "name": "ыаыфацфыа",
      "type": "string",
      "value": "Веселый атрибут"
    }
  ],
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/d6dd9a8a-0c5a-11e6-9464-e4de00000016/positions",
      "type": "demandposition",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "payedSum": 0,
  "fiscalPrinterInfo": "The freaking best FiscalPrinter ever!!",
  "documentNumber": 329,
  "checkNumber": 124421,
  "checkSum": 200,
  "fiscal": true,
  "sessionNumber": 13,
  "retailStore": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/851f8576-f504-11e5-8a84-bae50000016c",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailstore/metadata",
      "type": "retailstore",
      "mediaType": "application/json"
    }
  },
  "retailShift": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/0b2b2caf-055e-11e6-9464-e4de0000007c",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/retailshift/metadata",
      "type": "retailshift",
      "mediaType": "application/json"
    }
  },
  "cashSum": 17722,
  "noCashSum": 0,
  "prepaymentCashSum": 0,
  "prepaymentNoCashSum": 0
}
```

### Позиции Розничной продажи 
Отдельный ресурс для управления позициями Розничной продажи. С его помощью вы можете управлять позициями большого документа, количество строк в котором превышает лимит на количество строк, сохраняемых вместе с документом. Этот лимит равен 100. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](#rabota-s-poziciqmi-dokumentow).

### Получить Позиции 
Запрос на получение списка всех позиций данной Розничной продажи.

- **meta** [Метаданные](#metadannye) о выдаче,
- **context** - [Метаданные](#metadannye) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой позиции Розничной продажи.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Розничной продажи.|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить Позиции

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/7944ef04-f831-11e5-7a69-971500188b19/positions"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций Розничной продажи.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/7944ef04-f831-11e5-7a69-971500188b19/positions",
    "type": "demandposition",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/7944ef04-f831-11e5-7a69-971500188b19/positions/0b7ab774-055e-11e6-9464-e4de0000007f",
        "type": "demandposition",
        "mediaType": "application/json"
      },
      "id": "0b7ab774-055e-11e6-9464-e4de0000007f",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "quantity": 17,
      "price": 300,
      "discount": 0,
      "vat": 18,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/60fc3826-00d7-11e6-9464-e4de00000097",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata",
          "type": "service",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#service/edit?id=3bb1af6c-2842-11e9-ac12-000c00000061"
        }
      },
      "cost": 100
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/7944ef04-f831-11e5-7a69-971500188b19/positions/0b7acad5-055e-11e6-9464-e4de00000080",
        "type": "demandposition",
        "mediaType": "application/json"
      },
      "id": "0b7acad5-055e-11e6-9464-e4de00000080",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "quantity": 1,
      "price": 0,
      "discount": 0,
      "vat": 0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/e91042b4-fa34-11e5-9464-e4de00000095",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
          "type": "variant",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
        },
        "things": [
          "1013431",
          "31d22211sa"
        ]
      }
    }
  ]
}
```

### Создать Позицию 
Запрос на создание новой позиции в Розничной продаже.
Для успешного создания необходимо в теле запроса указать следующие поля:

+ **assortment** - Ссылка на товар/услугу/серию/модификацию, которую представляет собой позиция.
Также можно указать поле с именем **service**, **consignment**, **variant** в соответствии с тем,
чем является указанная позиция. Подробнее об этом поле можно прочитать в описании [позиции Розничной продажи](#pozicii-roznichnoj-prodazhi).

+ **quantity** - Количество указанной позиции. Должно быть положительным, иначе возникнет ошибка.
Одновременно можно создать как одну так и несколько позиций Розничной продажи. Все созданные данным запросом позиции
будут добавлены к уже существующим.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Розничной продажи.|

> Пример запроса на создание позиций в Розничной продаже.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/7944ef04-f831-11e5-7a69-971500188b19/positions"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '[
            {
              "quantity": 103,
              "price": 999,
              "discount": 0,
              "vat": 0,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/8b382799-f7d2-11e5-8a84-bae5000003a5",
                  "type": "product",
                  "mediaType": "application/json"
                }
              },
              "things": [
                "1013431",
                "31d22211sa"
              ]
            },
            {
              "quantity": 21,
              "price": 100,
              "discount": 0,
              "vat": 21,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/be903062-f504-11e5-8a84-bae50000019a",
                  "type": "product",
                  "mediaType": "application/json"
                }
              }
            },
            {
              "quantity": 3,
              "price": 35300,
              "discount": 0,
              "vat": 7,
              "assortment": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/c02e3a5c-007e-11e6-9464-e4de00000006",
                  "type": "service",
                  "mediaType": "application/json"
                }
              },
              "cost": 130
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданных позиций.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/7944ef04-f831-11e5-7a69-971500188b19/positions/36a91302-0c60-11e6-9464-e4de00000029",
      "type": "demandposition",
      "mediaType": "application/json"
    },
    "id": "36a91302-0c60-11e6-9464-e4de00000029",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "quantity": 103,
    "price": 999,
    "discount": 0,
    "vat": 0,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/8b382799-f7d2-11e5-8a84-bae5000003a5",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
      }
    },
    "things": [
      "1013431",
      "31d22211sa"
    ]
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/7944ef04-f831-11e5-7a69-971500188b19/positions/36a91e63-0c60-11e6-9464-e4de0000002a",
      "type": "demandposition",
      "mediaType": "application/json"
    },
    "id": "36a91e63-0c60-11e6-9464-e4de0000002a",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "quantity": 21,
    "price": 100,
    "discount": 0,
    "vat": 21,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/be903062-f504-11e5-8a84-bae50000019a",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
        "type": "product",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3b1e1f15-2842-11e9-ac12-000c0000002f"
      }
    }
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/7944ef04-f831-11e5-7a69-971500188b19/positions/36a92838-0c60-11e6-9464-e4de0000002b",
      "type": "demandposition",
      "mediaType": "application/json"
    },
    "id": "36a92838-0c60-11e6-9464-e4de0000002b",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "quantity": 3,
    "price": 35300,
    "discount": 0,
    "vat": 7,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/c02e3a5c-007e-11e6-9464-e4de00000006",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata",
        "type": "service",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#service/edit?id=392c045c-2842-11e9-ac12-000a00000002"
      }
    },
    "cost": 130
  }
]
```

### Позиция Розничной продажи

### Получить Позицию

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Розничной продажи.|
|positionID|  `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции Розничной продажи.|
 
> Запрос на получение отдельной позиции Розничной продажи с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции Розничной продажи.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
    "type": "demandposition",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "quantity": 17,
  "price": 300,
  "discount": 0,
  "vat": 18,
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/service/60fc3826-00d7-11e6-9464-e4de00000097",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/service/metadata",
      "type": "service",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#service/edit?id=392c045c-2842-11e9-ac12-000a00000002"
    }
  },
  "cost": 100
}
```

### Изменить Позицию

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Розничной продажи.|
|positionID|  `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции Розничной продажи.|
 
Запрос на обновление отдельной позиции Розничной продажи.

> Пример запроса на обновление отдельной позиции в Розничной продаже.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "quantity": 90,
            "price": 26700,
            "discount": 0,
            "vat": 0,
            "assortment": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a",
                "type": "product",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции Розничной продажи.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
    "type": "demandposition",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "quantity": 90,
  "price": 26700,
  "discount": 0,
  "vat": 0,
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/eeef177f-f648-11e5-8a84-bae50000007a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=392c045c-2842-11e9-ac12-000a00000002"
    }
  }
}
```

### Удалить позицию

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Розничной продажи.|
|positionID|  `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции Розничной продажи.|
 
> Запрос на удаление отдельной позиции Розничной продажи с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/retaildemand/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление позиции Розничной продажи.
