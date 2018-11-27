# Сущности
##  Контрагент
### Контрагенты 
Средствами JSON API можно создавать и обновлять сведения о Контрагентах, запрашивать списки Контрагентов и сведения по отдельным Контрагентам. Счетами Контрагента и его контактными лицами можно управлять как в составе отдельного Контрагента, так и отдельно - с помощью специальных ресурсов для управления счетами и контактными лицами Контрагента. Кодом сущности для Контрагента в составе JSON API является ключевое слово **counterparty**. Больше о Контрагентах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203053486-%D0%A1%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA-%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%B0%D0%B3%D0%B5%D0%BD%D1%82%D0%BE%D0%B2).
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](/api/remap/1.2/doc/index.html#header-контекстный-поиск).

Поиск среди объектов Контрагента осуществляется по нескольким условиям. Если значения полей контрагента удовлетворяют хотя бы одному из условий, то контрагент будет найден.

Первое условие поиска:
+ По наименованию Контрагента **name**
+ По коду Контрагента **code**
+ По полному наименованию Контрагента **legalTitle**
+ По номеру дисконтной карты Контрагента **discountCardNumber**
+ По адресу электронной почты **email**

Второе условие поиска:
+ По номеру городского телефона **phone**

Третье условие поиска по полям из всех контактных лиц фирмы контрагента (contactpersons):
+ По имени контактного лица **name**
+ По почте контактного лица **email**

Четвертое условие поиска по полям из всех контактных лиц фирмы контрагента (contactpersons):
+ По номеру телефона контактного лица **phone**

#### Атрибуты сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) объекта
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **syncId** - ID синхронизации. После заполнения недоступен для изменения.
+ **updated** - Момент последнего обновления Контрагента `Только для чтения`
+ **name** - Наименование Контрагента `Необходимое`
+ **description** - Комментарий к Контрагенту
+ **code** - Код Контрагента
+ **externalCode** - Внешний код Контрагента `Только для чтения`
+ **archived** - Добавлен ли Контрагент в архив
+ **created** - Дата создания
+ **email** - Адрес электронной почты
+ **phone** - Номер городского телефона
+ **fax** - Номер факса
+ **actualAddress** - Фактический адрес Контрагента
+ **accounts** - Ссылка на счета Контрагента (массив)
+ **companyType** - Тип Контрагента. `[Юридическое лицо, Индивидуальный предприниматель, Физическое лицо]`.
В зависимости от значения данного поля набор выводимых реквизитов контрагента может меняться. Подробнее [тут](#header-тип-контрагента)
+ **discountCardNumber** - номер дисконтной карты Контрагента
+ **state** - Статус Контрагента в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **salesAmount** - Сумма продаж `Только для чтения`

##### Поля реквизитов
___
+ **legalTitle** - Полное наименование Контрагента
+ **legalAddress** - Юридический адрес Контрагента
+ **inn** - ИНН
+ **kpp** - КПП
+ **ogrn** - ОГРН
+ **ogrnip** - ОГРНИП
+ **okpo** - ОКПО
+ **certificateNumber** - Номер свидетельства
+ **certificateDate** - Дата свидетельства
___
+ **tags** - Группы (массив)
+ **contactpersons** - Ссылка на контактные лица фирмы Контрагента (массив)
+ **attributes** - Коллекция доп. полей в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **discounts** - Массив ссылок на скидки в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Только для чтения`

Массив может содержать персональные и накопительные скидки. Персональная скидка выводится, если хотя бы раз изменялся **процент скидки** для контрагента, значение будет указано в поле **personalDiscount**.
Накопительная скидка выводится, если для контрагента хотя бы раз устанавливалась **коррекция суммы накоплений по скидке**, значение будет указано в поле **demandSumCorrection**. Формат вывода скидок можно посмотреть в разделе [Скидки](#скидки).
+ **notes** - Массив ссылок на события Контрагента в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **priceType** - Тип цены Контрагента (строка или null)

#### Атрибуты вложенных сущностей
##### Счета Контрагентов
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **updated** - Момент последнего обновления Контрагента `Только для чтения`
+ **isDefault** - Является ли счёт основным счётом Контрагента
+ **accountNumber** - Номер счёта `Необходимо`
+ **bankName** - Наименование банка
+ **bankLocation** - Адрес банка
+ **correspondentAccount** - Корр счет
+ **bic** - БИК

##### Контактные лица Контрагентов
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **updated** - Момент последнего обновления Контрагента `Только для чтения`
+ **name** - ФИО контактного лица `Необходимое`
+ **description** - Описание контактного лица
+ **externalCode** - Внешний код контактного лица
+ **email** - Адрес электронной почты контактного лица
+ **phone** - Номер телефона контактного лица
+ **position** - Должность контактного лица
+ **agent** - Ссылка на Контрагента (тип [Мета](/api/remap/1.2/doc/index.html#header-метаданные))

##### События Контрагента
+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) объекта
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Момент создания события Контрагента `Только для чтения`
+ **description** - Текст события Контрагента `Необходимое`
+ **agent** - Ссылка на Контрагента (тип [Мета](/api/remap/1.2/doc/index.html#header-метаданные)) `Только для чтения`
+ **author** - Создатель события, ссылка на сотрудника (тип [Мета](/api/remap/1.2/doc/index.html#header-метаданные)) `Только для чтения`

#### Тип Контрагента
В зависимости от типа контрагента **companyType** в составе его объекта будут выводиться разные наборы реквизитов.
Типы контрагента и соответствующие значения, которые могут быть переданы в данном поле:
| Тип контрагента                | Значение поля companyType  |
| ------------------------------ |:---------------------------|
| Юридическое лицо               | legal                      |
| Индивидуальный предприниматель | entrepreneur               |
| Физическое лицо                | individual                 |

Если тип контрагента `Юридическое лицо`, будут выведены следующие поля реквизитов:
+ **legalTitle** - Полное наименование Контрагента
+ **legalAddress** - Юридический адрес Контрагента
+ **inn** - ИНН
+ **kpp** - КПП
+ **ogrn** - ОГРН
+ **okpo** - ОКПО

Если тип контрагента `Индивидуальный предприниматель`, будут выведены следующие поля реквизитов:
+ **legalTitle** - Полное наименование Контрагента
+ **legalAddress** - Юридический адрес Контрагента
+ **inn** - ИНН
+ **okpo** - ОКПО
+ **ogrnip** - ОГРНИП
+ **certificateNumber** - Номер свидетельства
+ **certificateDate** - Дата свидетельства

Если тип контрагента `Физическое лицо`, будут выведены следующие поля реквизитов:
+ **legalTitle** - Полное наименование Контрагента
+ **legalAddress** - Юридический адрес Контрагента
+ **inn** - ИНН

О работе с доп. полями Контрагентов можно прочитать [здесь](/api/remap/1.2/doc/index.html#header-работа-с-дополнительными-полями)


### Получить список Контрагентов 
Получить список всех Контрагентов.
Результат: Объект JSON, включающий в себя поля:
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой Контрагентов.

+ Parameters
  + limit: 1000 (optional, enum[number])
  Максимальное количество сущностей для извлечения.
  <p>
    <code>Допустимые значения 1 - 1000</code>
  </p>
      + Default: `1000`
  + offset: 40 (optional, number)
    Отступ в выдаваемом списке сущностей
      + Default: `0`

  + tags: `рабочие`(optional, string)
    Подробнее про данный параметр можно посмотреть в разделе [Фильтрация выборки с помощью параметра filter](/api/remap/1.2/doc/index.html#header-фильтрация-выборки-с-помощью-параметра-filter).
    Формат строки : `string`

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Контрагентов.
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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
    "type": "counterparty",
    "mediaType": "application/json",
    "size": 4,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12a8b923-692c-11e6-8a84-bae500000053",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      },
      "id": "12a8b923-692c-11e6-8a84-bae500000053",
      "accountId": "1185513e-692c-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/12747f9e-692c-11e6-8a84-bae50000002a",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/11883c67-692c-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-08-23 15:21:09",
      "name": "ООО \"Поставщик\"",
      "externalCode": "aZBfWOKzj-lcq7c7IWZON3",
      "archived": false,
      "created": "2007-02-07 17:16:41",
      "companyType": "legal",
      "legalTitle": "Общество с ограниченной ответственностью \"Поставщик\"",
      "legalAddress": "г.Москва, ул.Строителей, д.12",
      "inn": "7736570901",
      "kpp": "773601001",
      "accounts": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12a8b923-692c-11e6-8a84-bae500000053/accounts",
          "type": "account",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "tags": [],
      "contactpersons": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12a8b923-692c-11e6-8a84-bae500000053/contactpersons",
          "type": "contactperson",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "notes": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12a8b923-692c-11e6-8a84-bae500000053/notes",
          "type": "note",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "state": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "salesAmount": 0,
      "priceType": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
          "type": "pricetype",
          "mediaType": "application/json"
        },
        "id": "672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
        "name": "Цена продажи",
        "externalCode": "cbcf493b-55bc-11d9-848a-00112f43529a"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12a8e347-692c-11e6-8a84-bae500000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      },
      "id": "12a8e347-692c-11e6-8a84-bae500000055",
      "accountId": "1185513e-692c-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/12747f9e-692c-11e6-8a84-bae50000002a",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "created": "2007-02-07 17:16:41",
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/11883c67-692c-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-08-23 15:21:09",
      "name": "ООО \"Покупатель\"",
      "externalCode": "DTItQRbDhyl472ZqC5OWw2",
      "archived": false,
      "companyType": "legal",
      "legalTitle": "Общество с ограниченной ответственностью \"Покупатель\"",
      "legalAddress": "г.Москва, ул.Строителей, д.11",
      "inn": "7736570902",
      "kpp": "773601002",
      "accounts": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12a8e347-692c-11e6-8a84-bae500000055/accounts",
          "type": "account",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "tags": [],
      "contactpersons": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12a8e347-692c-11e6-8a84-bae500000055/contactpersons",
          "type": "contactperson",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "notes": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12a8e347-692c-11e6-8a84-bae500000055/notes",
          "type": "note",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "salesAmount": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12c9ebcf-692c-11e6-8a84-bae50000005d",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      },
      "id": "12c9ebcf-692c-11e6-8a84-bae50000005d",
      "accountId": "1185513e-692c-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/12747f9e-692c-11e6-8a84-bae50000002a",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/11883c67-692c-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-08-23 15:21:09",
      "name": "Розничный покупатель",
      "externalCode": "lBvYwLWMiBsct7sVRrFnJ2",
      "archived": false,
      "created": "2007-02-07 17:16:41",
      "companyType": "legal",
      "accounts": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12c9ebcf-692c-11e6-8a84-bae50000005d/accounts",
          "type": "account",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "tags": [],
      "contactpersons": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12c9ebcf-692c-11e6-8a84-bae50000005d/contactpersons",
          "type": "contactperson",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "notes": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12c9ebcf-692c-11e6-8a84-bae50000005d/notes",
          "type": "note",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "salesAmount": 0
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/df2fdd2d-6934-11e6-8a84-bae500000049",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      },
      "id": "df2fdd2d-6934-11e6-8a84-bae500000049",
      "accountId": "1185513e-692c-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/12747f9e-692c-11e6-8a84-bae50000002a",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/11883c67-692c-11e6-8a84-bae500000002",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-08-23 16:24:08",
      "name": "rtr",
      "externalCode": "rRlzrdZmjql9r9dveXPE43",
      "archived": false,
      "created": "2007-02-07 17:16:41",
      "companyType": "legal",
      "accounts": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/df2fdd2d-6934-11e6-8a84-bae500000049/accounts",
          "type": "account",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "tags": [],
      "contactpersons": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/df2fdd2d-6934-11e6-8a84-bae500000049/contactpersons",
          "type": "contactperson",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "notes": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/df2fdd2d-6934-11e6-8a84-bae500000049/notes",
          "type": "note",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "state": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
          "type": "state",
          "mediaType": "application/json"
        }
      },
      "salesAmount": 0
    }
  ]
}  
```       

### Создать Контрагента 
Создать нового Контрагента
#### Описание
Контрагент создаётся на основе переданного объекта JSON,
который содержит представление нового Контрагента.
+ Request Пример 1 (application/json)
Пример типичного запроса для создания Контрагента.
  + Body
        <!-- include(body/counterparty/post_request1.json) -->
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Контрагента.
    + Body
          <!-- include(body/counterparty/post_request2.json) -->


+ Request Пример 2 (application/json)
Пример запроса на создание Контрагента с указанием только лишь его имени
  + Body
        <!-- include(body/counterparty/post_short.json) -->


+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Контрагента.
  + Body
        <!-- include(body/counterparty/post_short_response.json) -->

+ Request Пример с доп полями (application/json)
Пример запроса для создания Контрагента с доп полями в теле запроса.
    + Body
          <!-- include(body/counterparty/post_with_attributes_request.json) -->


+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Контрагента.
    + Body
          <!-- include(body/counterparty/post_with_attributes_response.json) -->

### Массовое создание и обновление Контрагентов 
[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) Контрагентов.
В теле запроса нужно передать массив, содержащий JSON представления Контрагентов, которые вы хотите создать или обновить.
Обновляемые Контрагентов должны содержать идентификатор в виде метаданных.

+ Request Пример (application/json)
Пример создания и обновления нескольких Контрагентов
  + Body
        <!-- include(body/counterparty/post_massive_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Контрагентов.
  + Body
        <!-- include(body/counterparty/post_massive_response.json) -->

### Удалить Контрагента 
+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Контрагента

Запрос на удаление Контрагента с указанным id.

+ Response 200 (application/json)
Успешное удаление Контрагента.

### Метаданные Контрагентов 
#### Метаданные Контрагентов 
Запрос на получение метаданных Контрагентов. Результат - объект JSON, включающий в себя:
+ **meta** - Ссылка на метаданные Контрагентов
+ **attributes** - Массив объектов доп. полей Контрагентов в формате [Метаданных](#header-метаданные)
+ **states** - Массив статусов Контрагентов
+ **createShared** - создавать новых Контрагентов с меткой "Общий"

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](#header-работа-с-дополнительными-полями).

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Контрагентов.
  + Body
        <!-- include(body/counterparty/get_metadata.json) -->

### Отдельное доп. поле 
+ Parameters
  + id: `5290a290-0313-11e6-9464-e4de00000020` (required, string) - id Доп. поля
#### Отдельное доп. поле 
Запрос на получение информации по отдельному дополнительному полю.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.
  + Body
        <!-- include(body/counterparty/metadata_by_id.json) -->

### Контрагент 
Контрагент, обращение к которому происходит по значению его id.

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Контрагента.

### Получить Контрагента 
Возвращает JSON представление Контрагента с указанным id.

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление Контрагента с указанным id.
  + Body
        <!-- include(body/counterparty/get_by_id.json) -->

### Изменить Контрагента 
#### Описание
Обновляется представление Контрагента с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Контрагента, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Контрагента](#контрагент-контрагенты).
Поля, которые не были указаны в JSON запроса, не изменяются.
Поля **account** и **contactpersons** обновляются как элементы вложенных коллекций. При обновлении,
переданные элементы данных коллекций обрабатываются как "Все элементы данной коллекции" и полностью заменяют
элементы, ранее присутствовавшие в ней.

+ Request Пример (application/json)
В теле запроса можно указать только те поля, которые необходимо изменить у Контрагента
+ Body
    <!-- include(body/counterparty/put_request.json) -->

+ Response 200 (application/json)
Успешное обновление. Результат - JSON представление обновлённого Контрагента.
  + Body
      <!-- include(body/counterparty/put_response.json) -->

+ Request Пример c доп полями(application/json)
Пример запроса для обновления Контрагента с доп полями в теле запроса.
    + Body
          <!-- include(body/counterparty/put_with_attributes_request.json) -->

+ Response 200 (application/json)
Успешное обновление. Результат - JSON представление обновлённого Контрагента.
  + Body
      <!-- include(body/counterparty/put_with_attributes_response.json) -->

#### Счета Контрагента 
Список счетов Контрагента с указанным id.
+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Контрагента.

### Получить счета Контрагента 
Возвращает массив JSON представлений счетов Контрагента.
+ Parameters
  + limit: 1000 (optional, enum[number])
  Максимальное количество сущностей для извлечения.
  <p>
    <code>Допустимые значения 1 - 1000</code>
  </p>
      + Default: `1000`
  + offset: 40 (optional, number)
    Отступ в выдаваемом списке сущностей
      + Default: `0`

+ Response 200 (application/json)
Успешный запрос.
  + Body
      <!-- include(body/counterparty/get_accounts.json) -->

#### Счет Контрагента 
+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Контрагента.
  + accountId: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Счёта.

### Получить счет Контрагента 
Возвращает JSON представление счета Контрагента.
+ Parameters
  + limit: 1000 (optional, enum[number])
  Максимальное количество сущностей для извлечения.
  <p>
    <code>Допустимые значения 1 - 1000</code>
  </p>
      + Default: `1000`
  + offset: 40 (optional, number)
    Отступ в выдаваемом списке сущностей
      + Default: `0`
+ Response 200 (application/json)
Успешный запрос.
  + Body
      <!-- include(body/counterparty/get_account.json) -->

### Контактные лица Контрагента 
Получить список контактных лиц Контрагента с указанным id.
+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Контрагента.

### Список контактных лиц 
Возвращает массив JSON представлений контактных лиц Контрагента.
+ Parameters
  + limit: 1000 (optional, enum[number])
  Максимальное количество сущностей для извлечения.
  <p>
    <code>Допустимые значения 1 - 1000</code>
  </p>
      + Default: `1000`
  + offset: 40 (optional, number)
    Отступ в выдаваемом списке сущностей
      + Default: `0`

+ Response 200 (application/json)
Успешный запрос.
  + Body
        <!-- include(body/counterparty/get_contactpersons.json) -->

### Создать контактное лицо
Создать контактное лицо Контрагента с указанным id.

+ Request Пример (application/json)
Пример запроса на создание контактного лица Контрагента.
  + Body
      <!-- include(body/counterparty/post_contactperson.json) -->

+ Response 200 (application/json)
Успешное создание.
  + Body
      <!-- include(body/counterparty/post_contactperson_response.json) -->

### Контактное лицо 
+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Контрагента.
  + contactpersonId: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id контактного лица.

### Получить контактное лицо 
Возвращает JSON представление отдельного контактного лица Контрагента.
+ Parameters
  + limit: 1000 (optional, enum[number])
  Максимальное количество сущностей для извлечения.
  <p>
    <code>Допустимые значения 1 - 1000</code>
  </p>
      + Default: `1000`
  + offset: 40 (optional, number)
    Отступ в выдаваемом списке сущностей
      + Default: `0`

+ Response 200 (application/json)
Успешный запрос.
  + Body
  
### Изменить контактное лицо
+ Parameters
  + contactpersonId: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id контактного лица.
  
#### Описание
Обновить контактное лицо Контрагента с указанным id.
Обновляются все поля, указанные в JSON объекте запроса, кроме
помеченных `Только для чтения` в описании [атрибутов контактных лиц Контрагента](#header-контактные-лица-контрагентов).
Поля, которые не были указаны в JSON запроса, не изменяются.
+ Request Пример (application/json)
Пример запроса на обновление контактного лица Контрагента.
  + Body
      <!-- include(body/counterparty/put_contactperson.json) -->

+ Response 200 (application/json)
Успешное обновление.
  + Body
      <!-- include(body/counterparty/put_contactperson_response.json) -->

### События Контрагента 
Получить список событий Контрагента с указанным id.
+ Parameters
  + id: `67e5a691-3c9c-11e7-8af5-581e00000056` (required, string) - id Контрагента.

### Список событий 
Возвращает массив JSON представлений событий Контрагента.
+ Parameters
  + limit: 1000 (optional, enum[number])
  Максимальное количество сущностей для извлечения.
  <p>
    <code>Допустимые значения 1 - 1000</code>
  </p>
      + Default: `1000`
  + offset: 40 (optional, number)
    Отступ в выдаваемом списке сущностей
      + Default: `0`

+ Response 200 (application/json)
Успешный запрос.
  + Body
        <!-- include(body/counterparty/get_notes.json) -->

### Добавить событие 
+ Request Пример (application/json)
Запрос на добавление нового события.
  + Body
        <!-- include(body/counterparty/post_note_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление добавленного события.
  + Body
        <!-- include(body/counterparty/post_note_response.json) -->

### Событие 
+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Контрагента.
  + noteId: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id события.

### Получить событие 
Возвращает JSON представление отдельного события Контрагента.
+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Контрагента.
  + noteId: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id события.

+ Response 200 (application/json)
Успешный запрос.
  + Body
      <!-- include(body/counterparty/get_note.json) -->
      
### Изменить событие 
#### Описание
Обновить событие Контрагента с указанным id.
Обновляются все поля, указанные в JSON объекте запроса, кроме
помеченных `Только для чтения` в описании [атрибутов событий Контрагента](#header-события-контрагента).
Поля, которые не были указаны в JSON запроса, не изменяются.
+ Request Пример (application/json)
Пример запроса на обновление события Контрагента.
  + Body
      <!-- include(body/counterparty/put_note.json) -->

+ Response 200 (application/json)
Успешное обновление.
  + Body
      <!-- include(body/counterparty/put_note_response.json) -->

### Удалить событие 
+ Parameters
  + id: `67e5a691-3c9c-11e7-8af5-581e00000056` (required, string) - id Контрагента.
  + noteId: `50b318cb-3cb0-11e7-8af5-581e00000007` (required, string) - id события

Запрос на удаление события с указанным id.

+ Response 200 (application/json)
Успешное удаление События.
