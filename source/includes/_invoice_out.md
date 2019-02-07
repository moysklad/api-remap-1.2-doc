## Документ Счёт покупателю
### Счета покупателям 
Средствами JSON API можно создавать и обновлять сведения о Счёте покупателю, запрашивать списки Счетов и сведения по отдельным Счетам Покупателям. Позициями Счетов можно управлять как в составе отдельного Счёта, так и отдельно - с помощью специальных ресурсов для управления позициями Счёта. Кодом сущности для Счёта покупателю в составе JSON API является ключевое слово **invoiceout**. Больше о Счетах Покупателям и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203053496-%D0%A1%D1%87%D0%B5%D1%82%D0%B0-%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%B0%D1%82%D0%B5%D0%BB%D1%8F%D0%BC).

#### Атрибуты сущности
+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о Счёте покупателю
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **syncId** - ID синхронизации. После заполнения недоступен для изменения.
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **deleted** - Момент последнего удаления сущности `Только для чтения`
+ **name** - номер Счёта покупателю
+ **description** - Комментарий Счёта покупателю
+ **externalCode** - Внешний код Счёта покупателю
+ **moment** - Дата Счёта
+ **applicable** - Отметка о проведении
+ **vatEnabled** - Учитывается ли НДС
+ **vatIncluded** - Включен ли НДС в цену
+ **sum** - Сумма Счёта в установленной валюте `Только для чтения`
+ **rate** - Валюта
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Необходимое`
+ **agent** - Ссылка на контрагента в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Необходимое`
+ **store** - Ссылка на склад в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **contract** - Ссылка на договор в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **state** - Статус Счёта в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **organizationAccount** - Ссылка на счёт вашего юрлица в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **agentAccount** - Ссылка на счёт контрагента в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **attributes** - Коллекция доп. полей в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
<br>Поля при expand'е:</br>
  - **name** - номер документа
  - **moment** - дата печати
  - **href** - ссылка на файл печатной формы
  - **fileName** - название файла печатной формы
  - **updated** - дата последнего изменения
+ **created** - Дата создания `Только для чтения`
+ **vatSum** - Сумма НДС `Только для чтения`
+ **positions** - Ссылка на позиции в Счёте в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **paymentPlannedMoment** - Планируемая дата оплаты
+ **payedSum** - Сумма входящих платежей по Счёту покупателю `Только для чтения`
+ **shippedSum** - Сумма отгруженного `Только для чтения`
+ **project** - Ссылка на проект в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
#### Связи с другими документами
+ **customerOrder** - Ссылка на Заказ Покупателя, с которым связан этот Счёт покупателю в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **payments** - Массив ссылок на связанные операции в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Только для чтения`
+ **demands** - Массив ссылок на связанные отгрузки в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)

#### Позиции Счёта покупателю
Позиции Счёта - это список товаров/услуг/модификаций/серий.
Объект позиции Счёта содержит следующие поля:
+ **id** - ID товара в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **quantity** - Количество товаров/услуг данного вида в позиции. Если позиция - товар, у которого включен учёт по серийным номерам, то значение в этом поле всегда будет равно количеству серийных номеров для данной позиции в документе.
+ **price** - Цена товара/услуги в копейках
+ **discount** - Процент скидки или наценки. Наценка указывается отрицательным числом, т.е. -10 создаст наценку в 10%
+ **vat** - НДС, которым облагается текущая позиция
+ **assortment** - Ссылка на товар/услугу/серию/модификацию, которую представляет собой позиция, в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **pack** - Упаковка товара

С позициями можно работать с помощью специальных ресурсов для управления позициями Счёта,
а также в составе отдельного Счёта покупателю. При работе в составе отдельного Счёта покупателю,
вы можете отправлять запросы на создание отдельного Счёта покупателю с включенным в тело запроса
массивом позиций Счёта. Если количество позиций превышает максимально допустимое, то для
дальнейшего пополнения позиций нужно будет работать со специальным ресурсом "Позиции Счёта покупателю".
Также, при работе в составе отдельного Счёта покупателю, можно отправлять запросы на обновление списка позиций
с включенным в тело запроса массивом позиций Счёта. При этом важно помнить, что коллекция позиций будет
восприниматься как "все позиции Счёта" и полностью заменит уже существующую коллекцию при обновлении объекта - лишние
позиции будут удалены, новые добавлены, существующие - изменены.

О работе с доп. полями Счетов покупателям можно прочитать [здесь](/api/remap/1.2/doc/index.html#header-работа-с-дополнительными-полями)


### Получить Счета покупателям 
Запрос всех Счетов покупателям на данной учётной записи.
Результат: Объект JSON, включающий в себя поля:
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой Счета покупателям.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|
|search |  `string` (optional) *Example: 0001* URL Параметр для поиска по имени документа. Фильтр документов по указанной поисковой строке. Фильтрация происходит по полю name.|

> Получить Счета покупателям

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Счетов покупателям.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
    "type": "invoiceout",
    "mediaType": "application/json",
    "size": 3,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/0cb8d047-f664-11e5-8a84-bae500000095",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
        "type": "invoiceout",
        "mediaType": "application/json"
      },
      "id": "0cb8d047-f664-11e5-8a84-bae500000095",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
      "updated": "2016-03-30 16:48:13",
      "name": "00001",
      "externalCode": "TAXyoccKiJPtMhcBAsqqw1",
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
      "moment": "2016-03-30 13:41:00",
      "applicable": true,
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
      "sum": 123000,
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
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/850f1667-f504-11e5-8a84-bae500000163",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "organizationAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/account/850c8af2-f504-11e5-8a84-bae50000015f",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "agentAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/account/850f1eab-f504-11e5-8a84-bae500000164",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/0cb8d047-f664-11e5-8a84-bae500000095/positions",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
          "type": "invoiceposition",
          "mediaType": "application/json",
          "size": 6,
          "limit": 1000,
          "offset": 0
        }
      },
      "payedSum": 0,
      "shippedSum": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/2ee1ce22-019e-11e6-9464-e4de0000007d",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
        "type": "invoiceout",
        "mediaType": "application/json"
      },
      "id": "2ee1ce22-019e-11e6-9464-e4de0000007d",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "updated": "2016-04-22 15:00:07",
      "name": "13212",
      "externalCode": "Vv-7tagmi46o0TTT6XI1a0",
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
      "moment": "2016-04-14 11:02:00",
      "applicable": true,
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
      "sum": 408739611676,
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
      "contract": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/8ce3c179-015e-11e6-9464-e4de0000007a",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
          "type": "contract",
          "mediaType": "application/json"
        }
      },
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/9794d400-f689-11e5-8a84-bae500000078",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "organizationAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/account/850c8af2-f504-11e5-8a84-bae50000015f",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "agentAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/account/9794f7a0-f689-11e5-8a84-bae500000079",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/2ee1ce22-019e-11e6-9464-e4de0000007d/positions",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
          "type": "invoiceposition",
          "mediaType": "application/json",
          "size": 4,
          "limit": 1000,
          "offset": 0
        }
      },
      "paymentPlannedMoment": "2016-04-15 11:03:00",
      "payedSum": 0,
      "shippedSum": 0,
      "customerOrder": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/34efe2ee-015e-11e6-9464-e4de0000006b",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
          "type": "customerorder",
          "mediaType": "application/json"
        }
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/8a7a037d-0564-11e6-9464-e4de000000a2",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
        "type": "invoiceout",
        "mediaType": "application/json"
      },
      "id": "8a7a037d-0564-11e6-9464-e4de000000a2",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "updated": "2016-04-18 15:53:25",
      "name": "13213",
      "externalCode": "lLXQLQQrg2s1Q6j8vVt7g2",
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
      "moment": "2016-04-18 15:53:00",
      "applicable": true,
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
      "sum": 0,
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
      "project": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/51f263f9-0307-11e6-9464-e4de0000007c",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
          "mediaType": "application/json"
        }
      },
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "organizationAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/account/3a30e844-016f-11e6-9464-e4de00000068",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "agentAccount": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/account/3a30e844-016f-11e6-9464-e4de00000068",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "positions": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/8a7a037d-0564-11e6-9464-e4de000000a2/positions",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
          "type": "invoiceposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "paymentPlannedMoment": "2016-04-09 15:53:00",
      "payedSum": 0,
      "shippedSum": 0
    }
  ]
}
```

### Создать Счёт покупателю 
Запрос на создание нового Счёта покупателю.
Обязательные для создания поля:
+ **name** - номер Счёта покупателю
+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **agent** - Ссылка на контрагента (покупателя) в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)

> Пример создания нового Счёта с телом запроса, содержащим только необходимые поля.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "inv_out_name",
            "organization": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "agent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/850f1667-f504-11e5-8a84-bae500000163",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "counterparty",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Счёта покупателю.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/726e5b8c-0886-11e6-9464-e4de0000002a",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
    "type": "invoiceout",
    "mediaType": "application/json"
  },
  "id": "726e5b8c-0886-11e6-9464-e4de0000002a",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-22 16:02:47",
  "name": "inv_out_name",
  "externalCode": "BtPDebO1g1PlmStW1jr--2",
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
  "moment": "2016-04-22 16:02:47",
  "applicable": true,
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
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/850f1667-f504-11e5-8a84-bae500000163",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/account/3a30e844-016f-11e6-9464-e4de00000068",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/account/850f1eab-f504-11e5-8a84-bae500000164",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/726e5b8c-0886-11e6-9464-e4de0000002a/positions",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
      "type": "invoiceposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "payedSum": 0,
  "shippedSum": 0
}
```

> Пример создания нового Счёта с более насыщенным телом запроса.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "inv_out_name",
            "organization": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "agent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/850f1667-f504-11e5-8a84-bae500000163",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "counterparty",
                "mediaType": "application/json"
              }
            },
            "code": "1243521",
            "externalCode": "666777666",
            "moment": "2016-04-19 13:50:24",
            "applicable": true,
            "description": "Описание счёта",
            "organizationAccount": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/account/850c8af2-f504-11e5-8a84-bae50000015f",
                "type": "account",
                "mediaType": "application/json"
              }
            },
            "agentAccount": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/account/850f1eab-f504-11e5-8a84-bae500000164",
                "type": "account",
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
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Счёта покупателю.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/128465fd-0887-11e6-9464-e4de0000002e",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
    "type": "invoiceout",
    "mediaType": "application/json"
  },
  "id": "128465fd-0887-11e6-9464-e4de0000002e",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-22 16:07:16",
  "name": "inv_out_name",
  "description": "Описание счёта",
  "code": "1243521",
  "externalCode": "666777666",
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
  "moment": "2016-04-19 13:50:24",
  "applicable": true,
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
  "sum": 0,
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/850f1667-f504-11e5-8a84-bae500000163",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/account/850c8af2-f504-11e5-8a84-bae50000015f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/account/850f1eab-f504-11e5-8a84-bae500000164",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/128465fd-0887-11e6-9464-e4de0000002e/positions",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
      "type": "invoiceposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "payedSum": 0,
  "shippedSum": 0
}
```

> Пример запроса на создание Счёта покупателю с доп. полями.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "inv_out_name",
            "organization": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "agent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/850f1667-f504-11e5-8a84-bae500000163",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "counterparty",
                "mediaType": "application/json"
              }
            },
            "code": "1243521",
            "externalCode": "666777666",
            "moment": "2016-04-19 13:50:24",
            "applicable": true,
            "description": "Комментарий к счёту",
            "organizationAccount": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/account/850c8af2-f504-11e5-8a84-bae50000015f",
                "type": "account",
                "mediaType": "application/json"
              }
            },
            "agentAccount": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/account/850f1eab-f504-11e5-8a84-bae500000164",
                "type": "account",
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
            "attributes": [
              {
                "id": "51d191f4-0887-11e6-9464-e4de00000079",
                "value": "значение доп поля"
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Счёта покупателю.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/c358e3ac-0887-11e6-9464-e4de00000032",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
    "type": "invoiceout",
    "mediaType": "application/json"
  },
  "id": "c358e3ac-0887-11e6-9464-e4de00000032",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-22 16:12:12",
  "name": "inv_out_name2",
  "description": "Комментарий к счёту",
  "code": "124352133",
  "externalCode": "666777666",
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
  "moment": "2016-04-19 13:50:24",
  "applicable": true,
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
  "sum": 0,
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/850f1667-f504-11e5-8a84-bae500000163",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/account/850c8af2-f504-11e5-8a84-bae50000015f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/account/850f1eab-f504-11e5-8a84-bae500000164",
      "type": "account",
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
      "id": "51d191f4-0887-11e6-9464-e4de00000079",
      "name": "Атрибут счёта",
      "type": "string",
      "value": "значение доп поля"
    }
  ],
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/c358e3ac-0887-11e6-9464-e4de00000032/positions",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
      "type": "invoiceposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "payedSum": 0,
  "shippedSum": 0
}
```

> Пример запроса на создание Счёта покупателю с позициями в теле запроса.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "inv_out_name3",
            "organization": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "agent": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/850f1667-f504-11e5-8a84-bae500000163",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "counterparty",
                "mediaType": "application/json"
              }
            },
            "code": "12435213322",
            "externalCode": "666777666",
            "moment": "2016-04-19 13:50:24",
            "applicable": true,
            "description": "Комментарий к счёту",
            "organizationAccount": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/account/850c8af2-f504-11e5-8a84-bae50000015f",
                "type": "account",
                "mediaType": "application/json"
              }
            },
            "agentAccount": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/account/850f1eab-f504-11e5-8a84-bae500000164",
                "type": "account",
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
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Счёта покупателю.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/6afee657-0888-11e6-9464-e4de00000037",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
    "type": "invoiceout",
    "mediaType": "application/json"
  },
  "id": "6afee657-0888-11e6-9464-e4de00000037",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-22 16:16:54",
  "name": "inv_out_name3",
  "description": "Комментарий к счёту",
  "code": "12435213322",
  "externalCode": "666777666",
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
  "moment": "2016-04-19 13:50:24",
  "applicable": true,
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
  "sum": 5840,
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/850f1667-f504-11e5-8a84-bae500000163",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/account/850c8af2-f504-11e5-8a84-bae50000015f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/account/850f1eab-f504-11e5-8a84-bae500000164",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/6afee657-0888-11e6-9464-e4de00000037/positions",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
      "type": "invoiceposition",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "payedSum": 0,
  "shippedSum": 0
}
```

### Массовое создание и обновление Счётов покупателю 
[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) Счётов покупателю.
В теле запроса нужно передать массив, содержащий JSON представления Счётов покупателю, которые вы хотите создать или обновить.
Обновляемые Счёта покупателю должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Счётов покупателю

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '[
            {
              "name": "inv_out_name",
              "organization": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "agent": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/850f1667-f504-11e5-8a84-bae500000163",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                  "type": "counterparty",
                  "mediaType": "application/json"
                }
              }
            },
            {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/6afee657-0888-11e6-9464-e4de00000037",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
                "type": "invoiceout",
                "mediaType": "application/json"
              },
              "name": "change name",
              "code": "change_code",
              "externalCode": "666777666",
              "moment": "2016-04-19 13:50:24",
              "applicable": false,
              "description": "Комментарий к счёту",
              "store": {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                  "type": "store",
                  "mediaType": "application/json"
                }
              }
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Счётов покупателю.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/726e5b8c-0886-11e6-9464-e4de0000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
      "type": "invoiceout",
      "mediaType": "application/json"
    },
    "id": "726e5b8c-0886-11e6-9464-e4de0000002a",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
    "updated": "2016-04-22 16:02:47",
    "name": "inv_out_name",
    "externalCode": "BtPDebO1g1PlmStW1jr--2",
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
    "moment": "2016-04-22 16:02:47",
    "applicable": true,
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
    "sum": 0,
    "organization": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/850f1667-f504-11e5-8a84-bae500000163",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "organizationAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/account/3a30e844-016f-11e6-9464-e4de00000068",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "agentAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/account/850f1eab-f504-11e5-8a84-bae500000164",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "created": "2007-02-07 17:16:41",
    "positions": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/726e5b8c-0886-11e6-9464-e4de0000002a/positions",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
        "type": "invoiceposition",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    },
    "payedSum": 0,
    "shippedSum": 0
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/6afee657-0888-11e6-9464-e4de00000037",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
      "type": "invoiceout",
      "mediaType": "application/json"
    },
    "id": "6afee657-0888-11e6-9464-e4de00000037",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
    "updated": "2016-04-22 16:21:19",
    "name": "change name",
    "description": "Комментарий к счёту",
    "code": "change_code",
    "externalCode": "666777666",
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
    "moment": "2016-04-19 13:50:24",
    "applicable": false,
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
    "sum": 5840,
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
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/850f1667-f504-11e5-8a84-bae500000163",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "organizationAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/account/850c8af2-f504-11e5-8a84-bae50000015f",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "agentAccount": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/account/850f1eab-f504-11e5-8a84-bae500000164",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "created": "2007-02-07 17:16:41",
    "positions": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/6afee657-0888-11e6-9464-e4de00000037/positions",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
        "type": "invoiceposition",
        "mediaType": "application/json",
        "size": 2,
        "limit": 1000,
        "offset": 0
      }
    },
    "payedSum": 0,
    "shippedSum": 0
  }
]
```

### Удалить Счёт покупателю

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Счёта покупателю.|

> Запрос на удаление Счёта покупателю с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление Счёта покупателю.

### Метаданные Счетов покупателям 
#### Метаданные Счетов покупателям 
Запрос на получение метаданных Счетов покупателям. Результат - объект JSON, включающий в себя:
+ **meta** - Ссылка на метаданные Счетов покупателям
+ **attributes** - Массив объектов доп. полей Счетов покупателям в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **states** - Массив статусов Счетов покупателям
+ **createShared** - создавать новые Счета покупателям с меткой "Общий"

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](/api/remap/1.2/doc/index.html#header-работа-с-дополнительными-полями).

> Метаданные Счетов покупателям

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Счетов покупателям.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata/attributes/51d191f4-0887-11e6-9464-e4de00000079",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "51d191f4-0887-11e6-9464-e4de00000079",
      "name": "Атрибут счёта",
      "type": "string",
      "required": false
    }
  ],
  "createShared": false
}
```

### Отдельное доп. поле

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Доп. поля.|
 
#### Отдельное доп. поле
 
> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata/attributes/d91965f1-558b-11e6-8a84-bae500000087",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "d91965f1-558b-11e6-8a84-bae500000087",
  "name": "Процент прибыли",
  "type": "double",
  "required": false
}
```

### Шаблон счёта покупателю 
#### Шаблон счёта покупателю 
Запрос на получение предзаполненого стандартными значениями шаблона счёта покупателю без связи с каким-либо документом.

> Пустое тело запроса (application/json)

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/new"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d ''  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного счёта покупателю.

```json
{
  "applicable": false,
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2",
      "type": "invoiceposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    },
    "rows": []
  },
  "vatEnabled": true,
  "vatIncluded": true,
  "payedSum": 0,
  "shippedSum": 0
}
```

### Шаблон счёта покупателю на основе 
Запрос на получение предзаполненного счёта покупателю на основе заказа покупателя или отгрузки.
В результате запроса, будет создан предзаполненный шаблон счёта покупателю на основе переданного
документа.

> Запрос на создание счёта покупателю на основе заказа покупателя.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/new"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "customerOrder": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/451cb4c0-3d1d-11e6-8a84-bae500000004",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
                "type": "customerorder",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного счёта покупателю.

```json
{
  "applicable": false,
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
  "sum": 0,
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/6792c8d5-3d19-11e6-8a84-bae500000005",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/faf3ff5b-2e58-11e6-8a84-bae500000050",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/fae3561a-2e58-11e6-8a84-bae50000004e/accounts/fae39d66-2e58-11e6-8a84-bae50000004f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2",
      "type": "invoiceposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    },
    "rows": []
  },
  "vatEnabled": true,
  "vatIncluded": true,
  "payedSum": 0,
  "shippedSum": 0,
  "customerOrder": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/451cb4c0-3d1d-11e6-8a84-bae500000004",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
      "type": "customerorder",
      "mediaType": "application/json"
    }
  }
}
```

> Запрос на создание счёта покупателю на основе отгрузки.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/new"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "demands": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/94e39314-cba5-11e7-6a80-332a00000035",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
                  "type": "demand",
                  "mediaType": "application/json",
                  "uuidHref": "https://online.moysklad.ru/app/#demand/edit?id=94e39314-cba5-11e7-6a80-332a00000035"
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненного счёта покупателю.

```json
{
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/46073d61-ca1f-11e7-6a80-332a0000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=46073d61-ca1f-11e7-6a80-332a0000002a"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/452fb22f-ca1f-11e7-6a80-332a00000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "name": "",
  "moment": "2017-11-22 19:08:56",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/464062ac-ca1f-11e7-6a80-332a00000058",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#currency/edit?id=464062ac-ca1f-11e7-6a80-332a00000058"
      }
    }
  },
  "sum": 90000,
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/463f8970-ca1f-11e7-6a80-332a00000053",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#warehouse/edit?id=463f8970-ca1f-11e7-6a80-332a00000053"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/463fe231-ca1f-11e7-6a80-332a00000056",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=463fe231-ca1f-11e7-6a80-332a00000056"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/463a706e-ca1f-11e7-6a80-332a00000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=463a706e-ca1f-11e7-6a80-332a00000051"
    }
  },
  "documents": {
    "rows": []
  },
  "positions": {
    "rows": [
      {
        "quantity": 1,
        "price": 90000,
        "discount": 0,
        "vat": 0,
        "assortment": {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/b5d328b3-cab0-11e7-6a80-332a0000000d",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
            "type": "variant",
            "mediaType": "application/json",
            "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=3bb1af6c-2842-11e9-ac12-000c00000061"
          }
        }
      }
    ]
  },
  "vatEnabled": true,
  "vatIncluded": true,
  "payedSum": 0,
  "shippedSum": 0,
  "demands": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/94e39314-cba5-11e7-6a80-332a00000035",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
        "type": "demand",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#demand/edit?id=94e39314-cba5-11e7-6a80-332a00000035"
      }
    }
  ]
}
```

### Счёт покупателю

### Получить Счёт покупателю

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Счёта покупателя.|
 
> Запрос на получение отдельного Счёта покупателю с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Счёта покупателю.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/0cb8d047-f664-11e5-8a84-bae500000095",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
    "type": "invoiceout",
    "mediaType": "application/json"
  },
  "id": "0cb8d047-f664-11e5-8a84-bae500000095",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-03-30 16:48:13",
  "name": "00001",
  "externalCode": "TAXyoccKiJPtMhcBAsqqw1",
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
  "moment": "2016-03-30 13:41:00",
  "applicable": true,
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
  "sum": 123000,
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/850f1667-f504-11e5-8a84-bae500000163",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/account/850c8af2-f504-11e5-8a84-bae50000015f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/account/850f1eab-f504-11e5-8a84-bae500000164",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/0cb8d047-f664-11e5-8a84-bae500000095/positions",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
      "type": "invoiceposition",
      "mediaType": "application/json",
      "size": 6,
      "limit": 1000,
      "offset": 0
    }
  },
  "payedSum": 0,
  "shippedSum": 0
}
```

### Изменить Счёт покупателю 
Запрос на обновление Счета покупателю с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Счёта покупателю, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Счёта покупателю](#документ-счёт-покупателю-счета-покупателям).
При обновлении полей **organization** и **agent** нужно также обновить поля **organizationAccount** и
**agentAccount** соответственно, иначе произойдёт ошибка.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Счёта покупателя.|

> Пример запроса на обновление отдельного Счёта покупателю.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "change name",
            "code": "change_code",
            "externalCode": "666777666",
            "moment": "2016-04-19 13:50:24",
            "applicable": false,
            "description": "Комментарий к счёту",
            "store": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённого Счёта покупателю.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/6afee657-0888-11e6-9464-e4de00000037",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
    "type": "invoiceout",
    "mediaType": "application/json"
  },
  "id": "6afee657-0888-11e6-9464-e4de00000037",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-22 16:21:19",
  "name": "change name",
  "description": "Комментарий к счёту",
  "code": "change_code",
  "externalCode": "666777666",
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
  "moment": "2016-04-19 13:50:24",
  "applicable": false,
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
  "sum": 5840,
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/850f1667-f504-11e5-8a84-bae500000163",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/account/850c8af2-f504-11e5-8a84-bae50000015f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/account/850f1eab-f504-11e5-8a84-bae500000164",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/6afee657-0888-11e6-9464-e4de00000037/positions",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
      "type": "invoiceposition",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "payedSum": 0,
  "shippedSum": 0
}
```

> Пример запроса на изменение Счёта покупателю с дополнительными полями.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "change name",
            "code": "change_code",
            "externalCode": "666777666",
            "moment": "2016-04-19 13:50:24",
            "applicable": false,
            "description": "Комментарий к счёту",
            "store": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "attributes": [
              {
                "id": "51d191f4-0887-11e6-9464-e4de00000079",
                "value": "new_val"
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённого Счёта покупателю.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/6afee657-0888-11e6-9464-e4de00000037",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
    "type": "invoiceout",
    "mediaType": "application/json"
  },
  "id": "6afee657-0888-11e6-9464-e4de00000037",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-22 16:21:19",
  "name": "change name",
  "description": "Комментарий к счёту",
  "code": "change_code",
  "externalCode": "666777666",
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
  "moment": "2016-04-19 13:50:24",
  "applicable": false,
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
  "sum": 5840,
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/850f1667-f504-11e5-8a84-bae500000163",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/account/850c8af2-f504-11e5-8a84-bae50000015f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/account/850f1eab-f504-11e5-8a84-bae500000164",
      "type": "account",
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
      "id": "51d191f4-0887-11e6-9464-e4de00000079",
      "name": "Атрибут счёта",
      "type": "string",
      "value": "new_val"
    }
  ],
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/6afee657-0888-11e6-9464-e4de00000037/positions",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
      "type": "invoiceposition",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "payedSum": 0,
  "shippedSum": 0
}
```

> Пример запроса на обновление Счёта покупателю с позициями в теле запроса.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "name": "change name again",
            "code": "change_code_again",
            "externalCode": "666777666",
            "moment": "2016-04-19 13:50:24",
            "applicable": false,
            "description": "Now with 1 position",
            "store": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/850ee995-f504-11e5-8a84-bae500000160",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
                "type": "store",
                "mediaType": "application/json"
              }
            },
            "attributes": [
              {
                "id": "51d191f4-0887-11e6-9464-e4de00000079",
                "value": "new_val_again"
              }
            ],
            "positions": [
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
              }
            ]
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённого Счёта покупателю.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/6afee657-0888-11e6-9464-e4de00000037",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
    "type": "invoiceout",
    "mediaType": "application/json"
  },
  "id": "6afee657-0888-11e6-9464-e4de00000037",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "syncId": "734a9e26-45a2-4ead-849c-e144daeb854d",
  "updated": "2016-04-22 16:25:06",
  "name": "change name again",
  "description": "Now with 1 position",
  "code": "change_code_again",
  "externalCode": "666777666",
  "owner": {
    "name": "Администратор"
  },
  "shared": false,
  "group": {
    "name": "Основной"
  },
  "moment": "2016-04-19 13:50:24",
  "applicable": false,
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
  "sum": 4000,
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/850f1667-f504-11e5-8a84-bae500000163",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/account/850c8af2-f504-11e5-8a84-bae50000015f",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/account/850f1eab-f504-11e5-8a84-bae500000164",
      "type": "account",
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
      "id": "51d191f4-0887-11e6-9464-e4de00000079",
      "name": "Атрибут счёта",
      "type": "string",
      "value": "new_val_again"
    }
  ],
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/6afee657-0888-11e6-9464-e4de00000037/positions",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
      "type": "invoiceposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "payedSum": 0,
  "shippedSum": 0
}
```

### Позиции Счёта покупателю 
Отдельный ресурс для управления позициями Счёта покупателю. С его помощью вы можете управлять позициями большого документа, количество строк в котором превышает лимит на количество строк, сохраняемых вместе с документом. Этот лимит равен 100. Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](/api/remap/1.2/doc/index.html#header-работа-с-позициями-документов).
  
### Получить позиции Счёта покупателю 
Запрос на получение списка всех позиций данного Счёта покупателю.
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой позиции Счёта покупателю.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Счёта покупателя.|
|limit |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|offset |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить позиции Счёта покупателю

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/7944ef04-f831-11e5-7a69-971500188b19/positions"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций отдельного Счёта покупателю.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/7944ef04-f831-11e5-7a69-971500188b19/positions",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
    "type": "invoiceposition",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/7944ef04-f831-11e5-7a69-971500188b19/positions/90572e91-0889-11e6-9464-e4de00000043",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
        "type": "invoiceposition",
        "mediaType": "application/json"
      },
      "id": "90572e91-0889-11e6-9464-e4de00000043",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "quantity": 20,
      "price": 200,
      "discount": 0,
      "vat": 0,
      "assortment": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/product/be903062-f504-11e5-8a84-bae50000019a",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
        }
      }
    }
  ]
}
```

### Добавить позицию в Счёт покупателя 
Запрос на создание новой позиции в Счёте покупателю.
Для успешного создания необходимо в теле запроса указать следующие поля:
+ **assortment** - Ссылка на товар/услугу/серию/модификацию, которую представляет собой позиция.
Также можно указать поле с именем **service**, **consignment**, **variant** в соответствии с тем,
чем является указанная позиция. Подробнее об этом поле можно прочитать в описании [позиции Счёта](#header-позиции-счёта-покупателю)
+ **quantity** - Количество указанной позиции. Должно быть положительным, иначе возникнет ошибка.
Также, как и при работе с [Позициями Заказа Покупателя](/api/remap/1.2/doc/customerOrder.html#документ-заказ-покупателя-позиции-заказа-покупателя), можно создать как одну, так и несколько позиций в одном запросе.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Счёта покупателя.|

> Пример создания позиции в Счёте покупателю.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/7944ef04-f831-11e5-7a69-971500188b19/positions"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "quantity": 12,
            "price": 999,
            "discount": 1,
            "assortment": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/671402e4-f7d2-11e5-8a84-bae50000007c",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                "type": "variant",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной позиции отдельного Счёте покупателю.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/7944ef04-f831-11e5-7a69-971500188b19/positions/8a43c5a3-088a-11e6-9464-e4de00000046",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
      "type": "invoiceposition",
      "mediaType": "application/json"
    },
    "id": "8a43c5a3-088a-11e6-9464-e4de00000046",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
    "quantity": 12,
    "price": 999,
    "discount": 1,
    "vat": 0,
    "assortment": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/671402e4-f7d2-11e5-8a84-bae50000007c",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
      }
    }
  }
]
```

### Позиция Счёта покупателя 
Отдельная позиция Счёта покупателю с указанным id позиции.
  
### Получить позицию Счёта

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Счёта покупателя.|
|positionID|  `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id id позиции Счёта покупателю.|
 
> Запрос на получение отдельной позиции Счёта с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции Счёта покупателю.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
    "type": "invoiceposition",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "quantity": 12,
  "price": 999,
  "discount": 1,
  "vat": 0,
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/671402e4-f7d2-11e5-8a84-bae50000007c",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
      "type": "variant",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
    }
  }
}
```
        
### Изменить позицию Счёта 
Запрос на обновление отдельной позиции Счёта. Для обновления позиции нет каких-либо
 обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Счёта покупателя.|
|positionID|  `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id id позиции Счёта покупателю.|
 
> Пример запроса на обновление отдельной позиции в Счёте покупателю.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d '{
            "quantity": 22,
            "price": 1000,
            "discount": 0,
            "vat": 12
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённой позиции Счёта покупателю.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
    "type": "invoiceposition",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
  "quantity": 22,
  "price": 1000,
  "discount": 0,
  "vat": 0,
  "assortment": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/variant/671402e4-f7d2-11e5-8a84-bae50000007c",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata",
      "type": "variant",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=e64d0a86-2a99-11e9-ac12-000c00000041"
    }
  }
}
```

### Удалить позицию

**Параметры**

|Параметр   |Описание   | 
|---|---|
|id |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Счёта покупателя.|
|positionID|  `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id id позиции Счёта покупателю.|
 
> Запрос на удаление отдельной позиции Счёта с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление позиции Счёта.
