# Сущности
##  Контрагент
### Контрагенты 
Средствами JSON API можно создавать и обновлять сведения о Контрагентах, запрашивать списки Контрагентов и сведения по отдельным Контрагентам. Счетами Контрагента и его контактными лицами можно управлять как в составе отдельного Контрагента, так и отдельно - с помощью специальных ресурсов для управления счетами и контактными лицами Контрагента. Кодом сущности для Контрагента в составе JSON API является ключевое слово **counterparty**. Больше о Контрагентах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203053486-%D0%A1%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA-%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%B0%D0%B3%D0%B5%D0%BD%D1%82%D0%BE%D0%B2).
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](../#mojsklad-json-api-obschie-swedeniq-kontextnyj-poisk).

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

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**meta**               |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Контрагента|&mdash;|да
|**id**                 |UUID|ID Контрагента|Только для чтения|да
|**accountId**          |UUID| ID учетной записи|Только для чтения|да
|**owner**              |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Владелец (Сотрудник)|&mdash;|да
|**shared**             |Boolean|Общий доступ|&mdash;|да
|**group**              |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Отдел сотрудника|&mdash;|да
|**syncId**             |UUID|ID синхронизации |После заполнения недоступен для изменения|нет
|**updated**            |DateTime|Момент последнего обновления Контрагента|Только для чтения|да
|**name**               |String(255)|Наименование Контрагента|Необходимое при создании|да
|**description**        |String(4096)|Комментарий к Контрагенту |&mdash;|нет
|**code**               |String(255)|Код Контрагента |&mdash;| нет
|**externalCode**       |String(255)|Внешний код Контрагента |Только для чтения| да
|**archived**           |Boolean|Добавлен ли Контрагент в архив|&mdash;| да
|**created**            |DateTime|Момент создания|&mdash;| да
|**email**              |String(255)|Адрес электронной почты |&mdash;| нет
|**phone**              |String(255)|Номер городского телефона |&mdash;| нет
|**fax**                |String(255)|Номер факса |&mdash;| нет
|**actualAddress**      |String(255)|Фактический адрес Контрагента |&mdash;| нет
|**actualAddressFull**  |Object|Фактический адрес Контрагента с детализацией по отдельным полям. [Подробнее тут](../dictionaries/#suschnosti-kontragent-kontragenty-attributy-suschnosti-adres) |&mdash;|нет
|**accounts**           |MetaArray|Массив счетов Контрагентов. [Подробнее тут](../dictionaries/#suschnosti-kontragent-kontragenty-attributy-suschnosti-adres-scheta-kontragentow)|&mdash;| да
|**companyType**        |Enum|Тип Контрагента. В зависимости от значения данного поля набор выводимых реквизитов контрагента может меняться. [Подробнее тут](../dictionaries/#suschnosti-kontragent-kontragenty-tip-kontragenta) |&mdash;| да |
|**discountCardNumber** |String(255)|Номер дисконтной карты Контрагента |&mdash;| нет 
|**state**              |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Статуса Контрагента|&mdash;| да
|**salesAmount**        |Int|Сумма продаж|Только для чтения| да
|**bonusProgram**       |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные активной Бонусной программы|&mdash;| нет
|**bonusPoints**        |Int|Бонусные баллы по активной бонусной программе|Только для чтения| нет            
|**files**              |MetaArray|Массив метаданных [Файлов](../dictionaries/#suschnosti-fajly) (Максимальное количество файлов - 100)|&mdash;|да|

##### Поля реквизитов

| Название  | Тип | Описание                    | Свойство поля в запросе | Обязательное при ответе|
| --------- |:----|:----------------------------|:---------------|:-----------------------|
|**legalTitle**       |String(4096)|Полное наименование для Контрагента типа `[Юридическое лицо]`. Игнорируется для Контрагентов типа `[Индивидуальный предприниматель, Физическое лицо]`, если передано одно из значений для ФИО и формируется автоматически на основе получаемых ФИО Контрагента|&mdash;|нет
|**legalLastName**     |String(255)|Фамилия для Контрагента типа `[Индивидуальный предприниматель, Физическое лицо]`. Игнорируется для Контрагентов типа `[Юридическое лицо]`|&mdash;|нет
|**legalFirstName**     |String(255)|Имя для Контрагента типа `[Индивидуальный предприниматель, Физическое лицо]`. Игнорируется для Контрагентов типа `[Юридическое лицо]`|&mdash;|нет
|**legalMiddleName**     |String(255)|Отчество для Контрагента типа `[Индивидуальный предприниматель, Физическое лицо]`. Игнорируется для Контрагентов типа `[Юридическое лицо]`|&mdash;|нет
|**legalAddress**     |String(255)|Юридический адрес Контрагента|&mdash;|нет
|**legalAddressFull** |Object|Юридический адрес Контрагента с детализацией по отдельным полям|&mdash;|нет
|**inn**              |String(255)|ИНН|&mdash;|нет
|**kpp**              |String(255)|КПП|&mdash;|нет
|**ogrn**             |String(255)|ОГРН|&mdash;|нет
|**ogrnip**           |String(255)|ОГРНИП|&mdash;|нет
|**okpo**             |String(255)|ОКПО|&mdash;|нет
|**certificateNumber**|String(255)|Номер свидетельства|&mdash;|нет
|**certificateDate**  |DateTime|Дата свидетельства|&mdash;|нет
|**tags**             |Array(String)|Группы контрагента|&mdash;|нет
|**contactpersons**   |MetaArray|Массив контактных лиц фирмы Контрагента. [Подробнее тут](../dictionaries/#suschnosti-kontragent-kontragenty-attributy-suschnosti-adres-kontaktnye-lica-kontragentow)|&mdash;|нет
|**attributes**       |Array(Object)|Массив метаданных доп. полей|&mdash;|нет
|**discounts**        |Array(Object)|Массив метаданных скидок. Массив может содержать персональные и накопительные скидки. Персональная скидка выводится, если хотя бы раз изменялся **процент скидки** для контрагента, значение будет указано в поле **personalDiscount**|Только для чтения|нет
|**notes**            |MetaArray|Массив событий Контрагента. [Подробнее тут](../dictionaries/#suschnosti-kontragent-kontragenty-attributy-suschnosti-adres-sobytiq-kontragenta)|&mdash;|нет
|**priceType**        |Object|Тип цены Контрагента. [Подробнее тут](../dictionaries/#suschnosti-tipy-cen-tipy-cen)|&mdash;|нет

Накопительная скидка выводится, если для контрагента хотя бы раз устанавливалась **коррекция суммы накоплений по скидке**, значение будет указано в поле **demandSumCorrection**. Формат вывода скидок можно посмотреть в разделе [Скидки](../dictionaries/#suschnosti-skidki).

#### Атрибуты вложенных сущностей
#### Аттрибуты сущности Адрес
| Название  | Тип | Описание                    | Свойство поля в запросе | Обязательное при ответе|
| --------- |:----|:----------------------------|:---------------|:-----------------------|
|**postalCode**      |String(6)|Почтовый индекс|&mdash;|нет
|**country**         |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные страны|&mdash;|нет
|**region**          |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные региона|&mdash;|нет
|**city**            |String(255)|Город|&mdash;|нет
|**street**          |String(255)|Улица|&mdash;|нет
|**house**           |String(30)|Дом|&mdash;|нет
|**apartment**       |String(30)|Квартира|&mdash;|нет
|**addInfo**         |String(255)|Другое|&mdash;|нет
|**comment**         |String(255)|Комментарий|&mdash;|нет

Строка адреса является конкатенацией полей структурированного адреса в следующем порядке: postalCode -> country -> region -> city -> street -> house -> apartment -> addInfo, используя запятую в качестве разделителя.
При передаче в МойСклад сущностей с адресом используйте либо строковый адрес, либо структурированный.
При передаче обоих адресов строковый будет игнорирован.
При передаче только строкового он будет отражаться как в строковом поле так и в addInfo структурированного адреса.

##### Счета Контрагентов
| Название  | Тип | Описание                    | Свойство поля в запросе | Обязательное при ответе|
| --------- |:----|:----------------------------|:---------------|:-----------------------|
|**meta**           |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Счета Контрагента|&mdash;|да
|**id**      |UUID|ID Счета|Только для чтения|да
|**accountId**      |UUID|ID учетной записи|Только для чтения|да
|**updated**        |DateTime|Момент последнего обновления Контрагента|Только для чтения|да
|**isDefault**      |Boolean|Является ли счет основным счетом Контрагента|&mdash;|да
|**accountNumber**  |String(255)|Номер счета|Необходимое при создании|да
|**bankName**       |String(255)|Наименование банка|&mdash;|нет
|**bankLocation**   |String(255)|Адрес банка|&mdash;|нет
|**correspondentAccount**|String(255)|Корр счет|&mdash;|нет
|**bic**            |String(255)|БИК|&mdash;|нет

##### Контактные лица Контрагентов
| Название  | Тип | Описание                    | Свойство поля в запросе | Обязательное при ответе|
| --------- |:----|:----------------------------|:---------------|:-----------------------|
|**meta**           |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Контактного лица Контрагента|&mdash;|да
|**id**            |UUID|ID Контактного лица|Только для чтения|да
|**accountId**     |UUID|ID учетной записи|Только для чтения|да
|**updated**       |DateTime|Момент последнего обновления|Только для чтения|да
|**name**          |String(255)|ФИО контактного лица|Необходимое при создании|да
|**description**   |String(4096)|Описание контактного лица|&mdash;|нет
|**externalCode**  |String(255)|Внешний код контактного лица|&mdash;|нет
|**email**         |String(255)|Адрес электронной почты контактного лица|&mdash;|нет
|**phone**         |String(255)|Номер телефона контактного лица|&mdash;|нет
|**position**      |String(255)|Должность контактного лица|&mdash;|нет
|**agent**         |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные контрагента|&mdash;|да

##### События Контрагента
| Название  | Тип | Описание                    | Свойство поля в запросе | Обязательное при ответе|
| --------- |:----|:----------------------------|:---------------|:-----------------------|
|**meta**      |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные событий контрагента|&mdash;|да
|**id**        |UUID|ID События|Только для чтения|да
|**accountId** |UUID|ID учетной записи|Только для чтения|да
|**created**   |DateTime|Момент создания события Контрагента|Только для чтения|да
|**description**|String(4096)|Текст события Контрагента|Необходимое при создании|да
|**agent**     |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Контрагента|Только для чтения|да
|**author**    |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные сотрудника - создателя события|Только для чтения|да

#### Тип Контрагента
В зависимости от типа контрагента **companyType** в составе его объекта будут выводиться разные наборы реквизитов.
Типы контрагента и соответствующие значения, которые могут быть переданы в данном поле:

| Значение поля companyType      |Тип контрагента   |
| ------------------------------ |:---------------------------|
| **legal**         | Юридическое лицо                      |
| **entrepreneur**  |Индивидуальный предприниматель               |
| **individual**    |Физическое лицо                 |

Если тип контрагента `Юридическое лицо`, будут выведены следующие поля реквизитов:

| Название  | Описание|              
| --------- |--------|
|**legalTitle**       |Полное наименование Контрагента
|**legalAddress**     |Юридического адреса Контрагента
|**inn**              |ИНН|
|**kpp**              |КПП|
|**ogrn**             |ОГРН|
|**okpo**             |ОКПО|
|**tags**             |Группы (массив)

Если тип контрагента `Индивидуальный предприниматель`, будут выведены следующие поля реквизитов:

| Название  |Описание | 
| --------- |:----|
|**legalTitle**       |Полное наименование Контрагента. Игнорируется, если передано одно из значений для ФИО. Формируется автоматически на основе получаемых ФИО Контрагента
|**legalLastName**    |Фамилия для Контрагента типа `[Индивидуальный предприниматель, Физическое лицо]`. Игнорируется для Контрагентов типа `[Юридическое лицо]`
|**legalFirstName**   |Имя для Контрагента типа `[Индивидуальный предприниматель, Физическое лицо]`. Игнорируется для Контрагентов типа `[Юридическое лицо]`
|**legalMiddleName**  |Отчество для Контрагента типа `[Индивидуальный предприниматель, Физическое лицо]`. Игнорируется для Контрагентов типа `[Юридическое лицо]`
|**legalAddress**     |Юридический адрес Контрагента
|**legalAddressFull** |Юридический адрес Контрагента с детализацией по отдельным полям
|**inn**              |ИНН
|**ogrnip**           |ОГРНИП
|**okpo**             |ОКПО
|**certificateNumber**|Номер свидетельства
|**certificateDate**  |Дата свидетельства

Если тип контрагента `Физическое лицо`, будут выведены следующие поля реквизитов:

| Название  |Описание
| --------- |-----|
|**legalTitle**       |Полное наименование Контрагента. Игнорируется, если передано одно из значений для ФИО. Формируется автоматически на основе получаемых ФИО Контрагента
|**legalLastName**    |Фамилия для Контрагента типа `[Индивидуальный предприниматель, Физическое лицо]`. Игнорируется для Контрагентов типа `[Юридическое лицо]`
|**legalFirstName**   |Имя для Контрагента типа `[Индивидуальный предприниматель, Физическое лицо]`. Игнорируется для Контрагентов типа `[Юридическое лицо]`
|**legalMiddleName**  |Отчество для Контрагента типа `[Индивидуальный предприниматель, Физическое лицо]`. Игнорируется для Контрагентов типа `[Юридическое лицо]`
|**legalAddress**     |Юридический адрес Контрагента
|**legalAddressFull** |Юридический адрес Контрагента с детализацией по отдельным полям
|**inn**              |ИНН

О работе с доп. полями Контрагентов можно прочитать [здесь](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)


### Получить список Контрагентов

> Запрос на получения списка Контрагентов

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/counterparty"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Контрагентов.
 
 ```json
{  
  "context":{  
    "employee":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/context/employee",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type":"employee",
        "mediaType":"application/json"
      }
    }
  },
  "meta":{  
    "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty",
    "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
    "type":"counterparty",
    "mediaType":"application/json",
    "size":4,
    "limit":1000,
    "offset":0
  },
  "rows":[  
    {  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12a8b923-692c-11e6-8a84-bae500000053",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type":"counterparty",
        "mediaType":"application/json"
      },
      "id":"12a8b923-692c-11e6-8a84-bae500000053",
      "accountId":"1185513e-692c-11e6-8a84-bae500000001",
      "owner":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/entity/employee/12747f9e-692c-11e6-8a84-bae50000002a",
          "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type":"employee",
          "mediaType":"application/json"
        }
      },
      "shared":false,
      "group":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/entity/group/11883c67-692c-11e6-8a84-bae500000002",
          "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type":"group",
          "mediaType":"application/json"
        }
      },
      "updated":"2016-08-23 15:21:09",
      "name":"ООО \"Поставщик\"",
      "externalCode":"aZBfWOKzj-lcq7c7IWZON3",
      "archived":false,
      "created":"2007-02-07 17:16:41",
      "companyType":"legal",
      "legalTitle":"Общество с ограниченной ответственностью \"Поставщик\"",
      "legalAddress":"125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
      "legalAddressFull":{  
        "postalCode":"125009",
        "country":{  
          "meta":{  
            "href":"https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
            "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
            "type":"country",
            "mediaType":"application/json"
          }
        },
        "region":{  
          "meta":{  
            "href":"https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
            "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
            "type":"region",
            "mediaType":"application/json"
          }
        },
        "city":"Москва",
        "street":"ул Тверская",
        "house":"1",
        "apartment":"123",
        "addInfo":"addinfo",
        "comment":"some words about address"
      },
      "actualAddress":"125009, Россия, г Москва, Москва, ул Тверская, 1, 111, addInfo",
      "actualAddressFull":{  
        "postalCode":"125009",
        "country":{  
          "meta":{  
            "href":"https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
            "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
            "type":"country",
            "mediaType":"application/json"
          }
        },
        "region":{  
          "meta":{  
            "href":"https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
            "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
            "type":"region",
            "mediaType":"application/json"
          }
        },
        "city":"Москва",
        "street":"ул Тверская",
        "house":"1",
        "apartment":"111",
        "addInfo":"addinfo",
        "comment":"some words about address"
      },
      "inn":"7736570901",
      "kpp":"773601001",
      "accounts":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12a8b923-692c-11e6-8a84-bae500000053/accounts",
          "type":"account",
          "mediaType":"application/json",
          "size":0,
          "limit":1000,
          "offset":0
        }
      },
      "tags":[  

      ],
      "contactpersons":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12a8b923-692c-11e6-8a84-bae500000053/contactpersons",
          "type":"contactperson",
          "mediaType":"application/json",
          "size":0,
          "limit":1000,
          "offset":0
        }
      },
      "notes":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12a8b923-692c-11e6-8a84-bae500000053/notes",
          "type":"note",
          "mediaType":"application/json",
          "size":0,
          "limit":1000,
          "offset":0
        }
      },
      "state":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
          "type":"state",
          "mediaType":"application/json"
        }
      },
      "salesAmount":0,
      "priceType":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
          "type":"pricetype",
          "mediaType":"application/json"
        },
        "id":"672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
        "name":"Цена продажи",
        "externalCode":"cbcf493b-55bc-11d9-848a-00112f43529a"
      },
      "bonusProgram": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/129626ee-ac91-11e9-ac12-000d00000009",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/metadata",
          "type": "bonusprogram",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=129626ee-ac91-11e9-ac12-000d00000009"
        }
      },
      "bonusPoints": 0
    },
    {  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12a8e347-692c-11e6-8a84-bae500000055",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type":"counterparty",
        "mediaType":"application/json"
      },
      "id":"12a8e347-692c-11e6-8a84-bae500000055",
      "accountId":"1185513e-692c-11e6-8a84-bae500000001",
      "owner":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/entity/employee/12747f9e-692c-11e6-8a84-bae50000002a",
          "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type":"employee",
          "mediaType":"application/json"
        }
      },
      "shared":false,
      "created":"2007-02-07 17:16:41",
      "group":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/entity/group/11883c67-692c-11e6-8a84-bae500000002",
          "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type":"group",
          "mediaType":"application/json"
        }
      },
      "updated":"2016-08-23 15:21:09",
      "name":"ООО \"Покупатель\"",
      "externalCode":"DTItQRbDhyl472ZqC5OWw2",
      "archived":false,
      "companyType":"legal",
      "legalTitle":"Общество с ограниченной ответственностью \"Покупатель\"",
      "legalAddress":"125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
      "legalAddressFull":{  
        "postalCode":"125009",
        "country":{  
          "meta":{  
            "href":"https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
            "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
            "type":"country",
            "mediaType":"application/json"
          }
        },
        "region":{  
          "meta":{  
            "href":"https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
            "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
            "type":"region",
            "mediaType":"application/json"
          }
        },
        "city":"Москва",
        "street":"ул Тверская",
        "house":"1",
        "apartment":"123",
        "addInfo":"addinfo",
        "comment":"some words about address"
      },
      "actualAddress":"125009, Россия, г Москва, Москва, ул Тверская, 1, 111, addInfo",
      "actualAddressFull":{  
        "postalCode":"125009",
        "country":{  
          "meta":{  
            "href":"https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
            "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
            "type":"country",
            "mediaType":"application/json"
          }
        },
        "region":{  
          "meta":{  
            "href":"https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
            "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
            "type":"region",
            "mediaType":"application/json"
          }
        },
        "city":"Москва",
        "street":"ул Тверская",
        "house":"1",
        "apartment":"111",
        "addInfo":"addinfo",
        "comment":"some words about address"
      },
      "inn":"7736570902",
      "kpp":"773601002",
      "accounts":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12a8e347-692c-11e6-8a84-bae500000055/accounts",
          "type":"account",
          "mediaType":"application/json",
          "size":0,
          "limit":1000,
          "offset":0
        }
      },
      "tags":[  

      ],
      "contactpersons":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12a8e347-692c-11e6-8a84-bae500000055/contactpersons",
          "type":"contactperson",
          "mediaType":"application/json",
          "size":0,
          "limit":1000,
          "offset":0
        }
      },
      "notes":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12a8e347-692c-11e6-8a84-bae500000055/notes",
          "type":"note",
          "mediaType":"application/json",
          "size":0,
          "limit":1000,
          "offset":0
        }
      },
      "salesAmount":0
    },
    {  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12c9ebcf-692c-11e6-8a84-bae50000005d",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type":"counterparty",
        "mediaType":"application/json"
      },
      "id":"12c9ebcf-692c-11e6-8a84-bae50000005d",
      "accountId":"1185513e-692c-11e6-8a84-bae500000001",
      "owner":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/entity/employee/12747f9e-692c-11e6-8a84-bae50000002a",
          "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type":"employee",
          "mediaType":"application/json"
        }
      },
      "shared":false,
      "group":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/entity/group/11883c67-692c-11e6-8a84-bae500000002",
          "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type":"group",
          "mediaType":"application/json"
        }
      },
      "updated":"2016-08-23 15:21:09",
      "name":"Розничный покупатель",
      "externalCode":"lBvYwLWMiBsct7sVRrFnJ2",
      "archived":false,
      "created":"2007-02-07 17:16:41",
      "companyType":"legal",
      "legalAddress":"125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
      "legalAddressFull":{  
        "postalCode":"125009",
        "country":{  
          "meta":{  
            "href":"https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
            "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
            "type":"country",
            "mediaType":"application/json"
          }
        },
        "region":{  
          "meta":{  
            "href":"https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
            "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
            "type":"region",
            "mediaType":"application/json"
          }
        },
        "city":"Москва",
        "street":"ул Тверская",
        "house":"1",
        "apartment":"123",
        "addInfo":"addinfo",
        "comment":"some words about address"
      },
      "actualAddress":"125009, Россия, г Москва, Москва, ул Тверская, 1, 111, addInfo",
      "actualAddressFull":{  
        "postalCode":"125009",
        "country":{  
          "meta":{  
            "href":"https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
            "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
            "type":"country",
            "mediaType":"application/json"
          }
        },
        "region":{  
          "meta":{  
            "href":"https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
            "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
            "type":"region",
            "mediaType":"application/json"
          }
        },
        "city":"Москва",
        "street":"ул Тверская",
        "house":"1",
        "apartment":"111",
        "addInfo":"addinfo",
        "comment":"some words about address"
      },
      "accounts":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12c9ebcf-692c-11e6-8a84-bae50000005d/accounts",
          "type":"account",
          "mediaType":"application/json",
          "size":0,
          "limit":1000,
          "offset":0
        }
      },
      "tags":[  

      ],
      "contactpersons":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12c9ebcf-692c-11e6-8a84-bae50000005d/contactpersons",
          "type":"contactperson",
          "mediaType":"application/json",
          "size":0,
          "limit":1000,
          "offset":0
        }
      },
      "notes":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/12c9ebcf-692c-11e6-8a84-bae50000005d/notes",
          "type":"note",
          "mediaType":"application/json",
          "size":0,
          "limit":1000,
          "offset":0
        }
      },
      "salesAmount":0
    },
    {  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/df2fdd2d-6934-11e6-8a84-bae500000049",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type":"counterparty",
        "mediaType":"application/json"
      },
      "id":"df2fdd2d-6934-11e6-8a84-bae500000049",
      "accountId":"1185513e-692c-11e6-8a84-bae500000001",
      "owner":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/entity/employee/12747f9e-692c-11e6-8a84-bae50000002a",
          "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type":"employee",
          "mediaType":"application/json"
        }
      },
      "shared":false,
      "group":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/entity/group/11883c67-692c-11e6-8a84-bae500000002",
          "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type":"group",
          "mediaType":"application/json"
        }
      },
      "updated":"2016-08-23 16:24:08",
      "name":"rtr",
      "externalCode":"rRlzrdZmjql9r9dveXPE43",
      "archived":false,
      "created":"2007-02-07 17:16:41",
      "companyType":"legal",
      "legalAddress":"125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
      "legalAddressFull":{  
        "postalCode":"125009",
        "country":{  
          "meta":{  
            "href":"https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
            "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
            "type":"country",
            "mediaType":"application/json"
          }
        },
        "region":{  
          "meta":{  
            "href":"https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
            "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
            "type":"region",
            "mediaType":"application/json"
          }
        },
        "city":"Москва",
        "street":"ул Тверская",
        "house":"1",
        "apartment":"123",
        "addInfo":"addinfo",
        "comment":"some words about address"
      },
      "actualAddress":"125009, Россия, г Москва, Москва, ул Тверская, 1, 111, addInfo",
      "actualAddressFull":{  
        "postalCode":"125009",
        "country":{  
          "meta":{  
            "href":"https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
            "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
            "type":"country",
            "mediaType":"application/json"
          }
        },
        "region":{  
          "meta":{  
            "href":"https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
            "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
            "type":"region",
            "mediaType":"application/json"
          }
        },
        "city":"Москва",
        "street":"ул Тверская",
        "house":"1",
        "apartment":"111",
        "addInfo":"addinfo",
        "comment":"some words about address"
      },
      "accounts":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/df2fdd2d-6934-11e6-8a84-bae500000049/accounts",
          "type":"account",
          "mediaType":"application/json",
          "size":0,
          "limit":1000,
          "offset":0
        }
      },
      "tags":[  

      ],
      "contactpersons":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/df2fdd2d-6934-11e6-8a84-bae500000049/contactpersons",
          "type":"contactperson",
          "mediaType":"application/json",
          "size":0,
          "limit":1000,
          "offset":0
        }
      },
      "notes":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/df2fdd2d-6934-11e6-8a84-bae500000049/notes",
          "type":"note",
          "mediaType":"application/json",
          "size":0,
          "limit":1000,
          "offset":0
        }
      },
      "state":{  
        "meta":{  
          "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
          "type":"state",
          "mediaType":"application/json"
        }
      },
      "salesAmount":0
    }
  ]
}
``` 

Получить список всех Контрагентов.
Результат: Объект JSON, включающий в себя поля:

| Название  | Тип | Описание                    |
| --------- |:----|:----------------------------|
**meta** |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные о выдаче,
**context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.
**rows** |Array(Object)|Массив JSON объектов, представляющих собой контрагентов.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
| **limit**    | `number` (optional) **Defaul:** 1000 *Example: 1000*. Максимальное количество сущностей для извлечения. `Допустимые значения 1 - 1000`                      |
| **offset** | `number` (optional) **Defaul:** 0 *Example: 40*. Отступ в выдаваемом списке сущностей|
| **tags**    | `string`(optional) *Example: рабочие*. Подробнее про данный параметр можно посмотреть в разделе [Фильтрация выборки с помощью параметра filter](../#mojsklad-json-api-obschie-swedeniq-fil-traciq-wyborki-s-pomosch-u-parametra-filter).       Формат строки : `string`|

### Создать Контрагента
Обязательные для создания поля:

| Название                | Описание  |
| ------------------------------ |:---------------------------|
| **name** | Наименование Контрагента


##### Описание

Контрагент создается на основе переданного объекта JSON,
который содержит представление нового Контрагента.

> Пример 1

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/counterparty"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '{
    "name": "ООО Радуга",
    "description": "Сеть стройматериалов Радуга ЭКСПО",
    "code": "rainbowCode",
    "externalCode": "extRainbw",
    "email": "raduga@stroi.ru",
    "phone": "+7 495 331 22 33",
    "fax": "1257752",
    "actualAddress": "г.Москва ул Академика Миля дом 15 к 21",
    "legalTitle": "Общество с ограниченой ответственностью \"Радуга\"",
    "legalAddress": "г.Москва ул Авиастроителей д 93 к 12",
    "inn": "125152124152",
    "kpp": "12155521",
    "ogrn": "1251512",
    "okpo": "201355",
    "tags": [
      "Строители",
      "Радуга",
      "Ремонт"
    ],
    "state": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
        "type": "state",
        "mediaType": "application/json"
      }
    },
    "priceType": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
        "type": "pricetype",
        "mediaType": "application/json"
      }
    }    
  }'
```

> Response 200. Успешный запрос. Результат - JSON представление созданного Контрагента.

```json
{  
  "meta":{  
    "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b80ea81b-7058-11e6-8a84-bae500000000",
    "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
    "type":"counterparty",
    "mediaType":"application/json"
  },
  "id":"b80ea81b-7058-11e6-8a84-bae500000000",
  "accountId":"1185513e-692c-11e6-8a84-bae500000001",
  "owner":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/employee/12747f9e-692c-11e6-8a84-bae50000002a",
      "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type":"employee",
      "mediaType":"application/json"
    }
  },
  "shared":false,
  "group":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/group/11883c67-692c-11e6-8a84-bae500000002",
      "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type":"group",
      "mediaType":"application/json"
    }
  },
  "updated":"2016-09-01 18:28:22",
  "name":"ООО Радуга",
  "externalCode":"o7732zkki541HDkZZD1Yt3",
  "archived":false,
  "companyType":"legal",
  "accounts":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b80ea81b-7058-11e6-8a84-bae500000000/accounts",
      "type":"account",
      "mediaType":"application/json",
      "size":0,
      "limit":1000,
      "offset":0
    }
  },
  "tags":[  

  ],
  "contactpersons":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b80ea81b-7058-11e6-8a84-bae500000000/contactpersons",
      "type":"contactperson",
      "mediaType":"application/json",
      "size":0,
      "limit":1000,
      "offset":0
    }
  },
  "notes":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b80ea81b-7058-11e6-8a84-bae500000000/notes",
      "type":"note",
      "mediaType":"application/json",
      "size":0,
      "limit":1000,
      "offset":0
    }
  },
  "state":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type":"state",
      "mediaType":"application/json"
    }
  },
  "priceType":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
      "type":"pricetype",
      "mediaType":"application/json"
    }
  }
}
```

> Пример 2

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/counterparty"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '{
        "name": "ООО Радуга"
      }'
```

> Response 200. Успешный запрос. Результат - JSON представление созданного Контрагента.

```json
{  
  "meta":{  
    "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b80ea81b-7058-11e6-8a84-bae500000000",
    "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
    "type":"counterparty",
    "mediaType":"application/json"
  },
  "id":"b80ea81b-7058-11e6-8a84-bae500000000",
  "accountId":"1185513e-692c-11e6-8a84-bae500000001",
  "owner":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/employee/12747f9e-692c-11e6-8a84-bae50000002a",
      "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type":"employee",
      "mediaType":"application/json"
    }
  },
  "shared":false,
  "group":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/group/11883c67-692c-11e6-8a84-bae500000002",
      "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type":"group",
      "mediaType":"application/json"
    }
  },
  "updated":"2016-09-01 18:28:22",
  "name":"ООО Радуга",
  "externalCode":"o7732zkki541HDkZZD1Yt3",
  "archived":false,
  "created":"2007-02-07 17:16:41",
  "companyType":"legal",
  "accounts":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b80ea81b-7058-11e6-8a84-bae500000000/accounts",
      "type":"account",
      "mediaType":"application/json",
      "size":0,
      "limit":1000,
      "offset":0
    }
  },
  "tags":[],
  "contactpersons":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b80ea81b-7058-11e6-8a84-bae500000000/contactpersons",
      "type":"contactperson",
      "mediaType":"application/json",
      "size":0,
      "limit":1000,
      "offset":0
    }
  },
  "notes":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b80ea81b-7058-11e6-8a84-bae500000000/notes",
      "type":"note",
      "mediaType":"application/json",
      "size":0,
      "limit":1000,
      "offset":0
    }
  },
  "state":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type":"state",
      "mediaType":"application/json"
    }
  }
}
```

> Пример 3

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/counterparty"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '{
        "name": "ИП Иванов",
        "code" : "someCode",
        "externalCode" : "extCode",
        "companyType": "entrepreneur",
        "legalLastName": "Иванов",
        "legalFirstName": "Иван",
        "legalMiddleName": "Иванович",
        "actualAddress": "г.Москва ул Академика Миля дом 15 к 21",
        "legalAddress": "г.Москва ул Авиастроителей д 93 к 12",
        "inn": "87654321",
        "kpp": "15312532",
        "ogrn": "12345",
        "okpo": "12345",
        "ogrnip": "58632598y21jk"
      }'
```
> Response 200. Успешный запрос. Результат - JSON представление созданного Контрагента.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/45fd2f10-b0ae-11ea-0a80-163500000000",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
    "type": "counterparty",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=45fd2f10-b0ae-11ea-0a80-163500000000"
  },
  "id": "45fd2f10-b0ae-11ea-0a80-163500000000",
  "accountId": "02865f48-b0ae-11ea-0a80-203a00000002",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/02e06bea-b0ae-11ea-0a80-1d9c00000034",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=02e06bea-b0ae-11ea-0a80-1d9c00000034"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/02877fda-b0ae-11ea-0a80-203a00000003",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "version": 0,
  "updated": "2020-06-17 18:21:53",
  "name": "ИП Иванов",
  "code": "someCode",
  "externalCode": "extCode",
  "archived": false,
  "created": "2020-06-17 18:21:53",
  "companyType": "entrepreneur",
  "legalTitle": "Индивидуальный предприниматель Иванов Иван Иванович",
  "legalAddress": "г.Москва ул Авиастроителей д 93 к 12",
  "legalAddressFull": {
    "addInfo": "г.Москва ул Авиастроителей д 93 к 12"
  },
  "actualAddress": "г.Москва ул Академика Миля дом 15 к 21",
  "actualAddressFull": {
    "addInfo": "г.Москва ул Академика Миля дом 15 к 21"
  },
  "inn": "87654321",
  "okpo": "12345",
  "ogrnip": "58632598y21jk",
  "legalLastName": "Иванов",
  "legalFirstName": "Иван",
  "legalMiddleName": "Иванович",
  "accounts": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/45fd2f10-b0ae-11ea-0a80-163500000000/accounts",
      "type": "account",
      "mediaType": "application/json",
      "size": 0,
      "limit": 100,
      "offset": 0
    }
  },
  "tags": [],
  "contactpersons": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/45fd2f10-b0ae-11ea-0a80-163500000000/contactpersons",
      "type": "contactperson",
      "mediaType": "application/json",
      "size": 0,
      "limit": 100,
      "offset": 0
    }
  },
  "notes": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/45fd2f10-b0ae-11ea-0a80-163500000000/notes",
      "type": "note",
      "mediaType": "application/json",
      "size": 0,
      "limit": 100,
      "offset": 0
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/03935900-b0ae-11ea-0a80-1d9c0000008c",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "salesAmount": 0.0
}
```

> Пример с дополнительными полями

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/counterparty"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '{  
  "name":"ООО Овощ Экспресс",
  "description":"Сеть доставки овощей",
  "code":"ovoshexpressCode",
  "externalCode":"extVagetable",
  "email":"ovosh@delivery.ru",
  "phone":"+7 495 662 12 23",
  "fax":"1052034",
  "legalTitle":"Общество с ограниченой ответственностью \"Овощ Экспресс\"",
  "legalAddressFull":{  
    "postalCode":"125009",
    "country":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type":"country",
        "mediaType":"application/json"
      }
    },
    "region":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type":"region",
        "mediaType":"application/json"
      }
    },
    "city":"Москва",
    "street":"ул Тверская",
    "house":"1",
    "apartment":"123",
    "addInfo":"addinfo",
    "comment":"some words about address"
  },
  "actualAddressFull":{  
    "postalCode":"125009",
    "country":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type":"country",
        "mediaType":"application/json"
      }
    },
    "region":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type":"region",
        "mediaType":"application/json"
      }
    },
    "city":"Москва",
    "street":"ул Тверская",
    "house":"1",
    "apartment":"111",
    "addInfo":"addinfo",
    "comment":"some words about address"
  },
  "inn":"1251521244152",
  "kpp":"121555212",
  "ogrn":"1251552",
  "okpo":"201323",
  "tags":[  
    "Овощи",
    "Еда",
    "Доставка"
  ],
  "attributes":[  
    {  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/attributes/0d129ff5-2c8c-11e6-8a84-bae5000000f3",
        "type":"attributemetadata",
        "mediaType":"application/json"
      },
      "name":"AttributeName1",
      "type":"double",
      "value":0.75
    },
    {  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/attributes/0d12a9a5-2c8c-11e6-8a84-bae5000000f4",
        "type":"attributemetadata",
        "mediaType":"application/json"
      },
      "name":"AttributeName2",
      "type":"time",
      "value":"2016-06-07 12:52:33"
    },
    {  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/attributes/0d12b1e7-2c8c-11e6-8a84-bae5000000f5",
        "type":"attributemetadata",
        "mediaType":"application/json"
      },
      "name":"AttributeName3",
      "type":"boolean",
      "value":false
    }
  ],
  "state":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type":"state",
      "mediaType":"application/json"
    }
  }
}'
```

> Response 200. Успешный запрос. Результат - JSON представление созданного Контрагента.

```json
{  
  "meta":{  
    "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/88fc07ac-2c8d-11e6-8a84-bae500000050",
    "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
    "type":"counterparty",
    "mediaType":"application/json"
  },
  "id":"88fc07ac-2c8d-11e6-8a84-bae500000050",
  "accountId":"6270cd18-2c7f-11e6-8a84-bae500000001",
  "owner":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type":"employee",
      "mediaType":"application/json"
    }
  },
  "shared":false,
  "group":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type":"group",
      "mediaType":"application/json"
    }
  },
  "updated":"2016-06-07 11:55:08",
  "name":"ООО Овощ Экспресс",
  "description":"Сеть доставки овощей",
  "code":"ovoshexpressCode",
  "externalCode":"extVagetable",
  "archived":false,
  "created":"2007-02-07 17:16:41",
  "legalTitle":"Общество с ограниченой ответственностью \"Овощ Экспресс\"",
  "legalAddress":"125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
  "legalAddressFull":{  
    "postalCode":"125009",
    "country":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type":"country",
        "mediaType":"application/json"
      }
    },
    "region":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type":"region",
        "mediaType":"application/json"
      }
    },
    "city":"Москва",
    "street":"ул Тверская",
    "house":"1",
    "apartment":"123",
    "addInfo":"addinfo",
    "comment":"some words about address"
  },
  "actualAddress":"125009, Россия, г Москва, Москва, ул Тверская, 1, 111, addInfo",
  "actualAddressFull":{  
    "postalCode":"125009",
    "country":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type":"country",
        "mediaType":"application/json"
      }
    },
    "region":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type":"region",
        "mediaType":"application/json"
      }
    },
    "city":"Москва",
    "street":"ул Тверская",
    "house":"1",
    "apartment":"111",
    "addInfo":"addinfo",
    "comment":"some words about address"
  },
  "inn":"1251521244152",
  "kpp":"121555212",
  "ogrn":"1251552",
  "okpo":"201323",
  "email":"ovosh@delivery.ru",
  "phone":"+7 495 662 12 23",
  "fax":"1052034",
  "attributes":[  
    {  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/attributes/0d129ff5-2c8c-11e6-8a84-bae5000000f3",
        "type":"attributemetadata",
        "mediaType":"application/json"
      },
      "id":"0d129ff5-2c8c-11e6-8a84-bae5000000f3",
      "name":"AttributeName1",
      "type":"double",
      "value":0.75
    },
    {  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/attributes/0d12a9a5-2c8c-11e6-8a84-bae5000000f4",
        "type":"attributemetadata",
        "mediaType":"application/json"
      },
      "id":"0d12a9a5-2c8c-11e6-8a84-bae5000000f4",
      "name":"AttributeName2",
      "type":"time",
      "value":"2016-06-07 12:52:33"
    },
    {  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/attributes/0d12b1e7-2c8c-11e6-8a84-bae5000000f5",
        "type":"attributemetadata",
        "mediaType":"application/json"
      },
      "id":"0d12b1e7-2c8c-11e6-8a84-bae5000000f5",
      "name":"AttributeName3",
      "type":"boolean",
      "value":false
    }
  ],
  "accounts":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/88fc07ac-2c8d-11e6-8a84-bae500000050/accounts",
      "type":"account",
      "mediaType":"application/json",
      "size":0,
      "limit":1000,
      "offset":0
    }
  },
  "tags":[  
    "доставка",
    "еда",
    "овощи"
  ],
  "contactpersons":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/88fc07ac-2c8d-11e6-8a84-bae500000050/contactpersons",
      "type":"contactperson",
      "mediaType":"application/json",
      "size":0,
      "limit":1000,
      "offset":0
    }
  },
  "notes":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/88fc07ac-2c8d-11e6-8a84-bae500000050/notes",
      "type":"note",
      "mediaType":"application/json",
      "size":0,
      "limit":1000,
      "offset":0
    }
  },
  "state":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type":"state",
      "mediaType":"application/json"
    }
  }
}
```

### Массовое создание и обновление Контрагентов

> Массовое создание и обновление Контрагентов

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/counterparty"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[  
  {  
    "name":"ООО Радуга",
    "description":"Сеть стройматериалов Радуга ЭКСПО",
    "code":"rainbowCode",
    "externalCode":"extRainbw",
    "email":"raduga@stroi.ru",
    "phone":"+7 495 331 22 33",
    "fax":"1257752",
    "actualAddress":"г.Москва ул Академика Миля дом 15 к 21",
    "legalTitle":"Общество с ограниченой ответственностью \"Радуга\"",
    "legalAddress":"г.Москва ул Авиастроителей д 93 к 12",
    "inn":"125152124152",
    "kpp":"12155521",
    "ogrn":"1251512",
    "okpo":"201355",
    "tags":[  
      "Строители",
      "Радуга",
      "Ремонт"
    ],
    "state":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
        "type":"state",
        "mediaType":"application/json"
      }
    },
    "priceType":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
        "type":"pricetype",
        "mediaType":"application/json"
      }
    }
  },
  {  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/6a9c3857-2c8b-11e6-8a84-bae500000047",
      "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type":"counterparty",
      "mediaType":"application/json"
    },
    "name":"ООО Радуга ЭКСПО",
    "description":"Сеть рынков стройматериалов Радуга ЭКСПО",
    "code":"raduga",
    "externalCode":"extRainbow",
    "email":"raduga@retail.ru",
    "phone":"+7 495 162 32 23",
    "fax":"1052054",
    "actualAddress":"г.Москва ул Строителей д 331",
    "legalTitle":"Общество с ограниченой ответственностью \"Радуга ЭКСПО\"",
    "legalAddress":"г.Москва ул Чернорабочего д 93 к 12",
    "inn":"1251581244152",
    "kpp":"121557212",
    "ogrn":"1253552",
    "okpo":"201313",
    "tags":[  
      "Строители",
      "Ремонт",
      "Радуга",
      "Бетон",
      "ЖЖОТ"
    ]
  }
]'
```

> Response  200. Успешный запрос. Результат - массив JSON представлений созданных и обновленных Контрагентов.

```json
[  
  {  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b80ea81b-7058-11e6-8a84-bae500000000",
      "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type":"counterparty",
      "mediaType":"application/json"
    },
    "id":"b80ea81b-7058-11e6-8a84-bae500000000",
    "accountId":"1185513e-692c-11e6-8a84-bae500000001",
    "owner":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/employee/12747f9e-692c-11e6-8a84-bae50000002a",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type":"employee",
        "mediaType":"application/json"
      }
    },
    "shared":false,
    "group":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/group/11883c67-692c-11e6-8a84-bae500000002",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type":"group",
        "mediaType":"application/json"
      }
    },
    "updated":"2016-09-01 18:28:22",
    "name":"ООО Радуга",
    "externalCode":"o7732zkki541HDkZZD1Yt3",
    "archived":false,
    "companyType":"legal",
    "accounts":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b80ea81b-7058-11e6-8a84-bae500000000/accounts",
        "type":"account",
        "mediaType":"application/json",
        "size":0,
        "limit":1000,
        "offset":0
      }
    },
    "tags":[  

    ],
    "contactpersons":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b80ea81b-7058-11e6-8a84-bae500000000/contactpersons",
        "type":"contactperson",
        "mediaType":"application/json",
        "size":0,
        "limit":1000,
        "offset":0
      }
    },
    "notes":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b80ea81b-7058-11e6-8a84-bae500000000/notes",
        "type":"note",
        "mediaType":"application/json",
        "size":0,
        "limit":1000,
        "offset":0
      }
    },
    "state":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
        "type":"state",
        "mediaType":"application/json"
      }
    },
    "priceType":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
        "type":"pricetype",
        "mediaType":"application/json"
      }
    }
  },
  {  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/6a9c3857-2c8b-11e6-8a84-bae500000047",
      "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type":"counterparty",
      "mediaType":"application/json"
    },
    "id":"6a9c3857-2c8b-11e6-8a84-bae500000047",
    "accountId":"6270cd18-2c7f-11e6-8a84-bae500000001",
    "owner":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type":"employee",
        "mediaType":"application/json"
      }
    },
    "shared":false,
    "group":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type":"group",
        "mediaType":"application/json"
      }
    },
    "updated":"2016-06-07 12:13:31",
    "name":"ООО Радуга ЭКСПО",
    "description":"Сеть рынков стройматериалов Радуга ЭКСПО",
    "code":"raduga",
    "externalCode":"extRainbow",
    "archived":false,
    "created":"2007-02-07 17:16:41",
    "legalTitle":"Общество с ограниченой ответственностью \"Радуга ЭКСПО\"",
    "legalAddress":"г.Москва ул Чернорабочего д 93 к 12",
    "actualAddress":"г.Москва ул Строителей д 331",
    "inn":"1251581244152",
    "kpp":"121557212",
    "ogrn":"1253552",
    "okpo":"201313",
    "email":"raduga@retail.ru",
    "phone":"+7 495 162 32 23",
    "fax":"1052054",
    "accounts":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/6a9c3857-2c8b-11e6-8a84-bae500000047/accounts",
        "type":"account",
        "mediaType":"application/json",
        "size":0,
        "limit":1000,
        "offset":0
      }
    },
    "tags":[  
      "жжот",
      "строители",
      "бетон",
      "ремонт",
      "радуга"
    ],
    "contactpersons":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/6a9c3857-2c8b-11e6-8a84-bae500000047/contactpersons",
        "type":"contactperson",
        "mediaType":"application/json",
        "size":0,
        "limit":1000,
        "offset":0
      }
    },
    "notes":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/6a9c3857-2c8b-11e6-8a84-bae500000047/notes",
        "type":"note",
        "mediaType":"application/json",
        "size":0,
        "limit":1000,
        "offset":0
      }
    }
  }
]
```

[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) Контрагентов.
В теле запроса нужно передать массив, содержащий JSON представления Контрагентов, которые вы хотите создать или обновить.
Обновляемые Контрагенты должны содержать идентификатор в виде метаданных.

### Удалить Контрагента

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
| **id**    | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b1*. id Контрагента|

> Запрос на удаление Контрагента с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"  
```

> Response  200. Успешное удаление Контрагента.

### Массовое удаление Контрагентов

В теле запроса нужно передать массив, содержащий JSON метаданных Контрагентов, которые вы хотите удалить.


> Запрос на массовое удаление Контрагентов. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
            "type": "counterparty",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
            "type": "counterparty",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Контрагентов.

```json
[
  {
    "info":"Сущность 'counterparty' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'counterparty' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
```

### Метаданные Контрагентов 
#### Метаданные Контрагентов

> Запрос на получение метаданных Контрагентов. 

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata"
  -H "Authorization: Basic <Credentials>"  
```

> Успешный запрос. Результат - JSON представление доп. полей Контрагентов.

```json
{  
  "meta":{  
    "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
    "mediaType":"application/json"
  },
  "attributes":[  
    {  
      "id":"5290a290-0313-11e6-9464-e4de00000020",
      "name":"AttributeName1",
      "type":"boolean",
      "required":false
    }
  ],
  "states":[  
    {  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
        "type":"state",
        "mediaType":"application/json"
      },
      "id":"fb56c504-2e58-11e6-8a84-bae500000069",
      "accountId":"f976ed28-2e58-11e6-8a84-bae500000001",
      "name":"Новый",
      "color":15106326,
      "stateType":"Regular",
      "entityType":"counterparty"
    },
    {  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/fb56cae3-2e58-11e6-8a84-bae50000006a",
        "type":"state",
        "mediaType":"application/json"
      },
      "id":"fb56cae3-2e58-11e6-8a84-bae50000006a",
      "accountId":"f976ed28-2e58-11e6-8a84-bae500000001",
      "name":"Подтвержден",
      "color":40931,
      "stateType":"Regular",
      "entityType":"counterparty"
    }
  ],
  "tags":[  
    "Поставщики",
    "Покупатели"
  ],
  "createShared":false
}
```

Запрос на получение метаданных Контрагентов. Результат - объект JSON, включающий в себя:

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
| **meta**         | Ссылка на метаданные Контрагентов|
| **attributes**   | Массив объектов доп. полей Контрагентов в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)|
| **states**       | Массив статусов Контрагентов|
| **createShared** | создавать новых Контрагентов с меткой "Общий"|

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

### Отдельное доп. поле 
 

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
| **id**         |  `string` (required) *Example: 5290a290-0313-11e6-9464-e4de00000020* - id Доп. поля.|

> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/attributes/5290a290-0313-11e6-9464-e4de00000020"
  -H "Authorization: Basic <Credentials>"  
```

>Response 200 (application/json). Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/attributes/5290a290-0313-11e6-9464-e4de00000020",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "5290a290-0313-11e6-9464-e4de00000020",
  "name": "AttributeName1",
  "type": "boolean",
  "required": false
}
```

### Контрагент
### Получить Контрагента

Контрагент, обращение к которому происходит по значению его id.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
| **id**         |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* - id Контрагента.|

> Пример 1

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"  
```

> Response 200 (application/json). Результат - JSON представление Контрагента с указанным id.

```json
{  
  "meta":{  
    "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b80ea81b-7058-11e6-8a84-bae500000000",
    "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
    "type":"counterparty",
    "mediaType":"application/json"
  },
  "id":"b80ea81b-7058-11e6-8a84-bae500000000",
  "accountId":"1185513e-692c-11e6-8a84-bae500000001",
  "owner":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/employee/12747f9e-692c-11e6-8a84-bae50000002a",
      "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type":"employee",
      "mediaType":"application/json"
    }
  },
  "shared":false,
  "group":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/group/11883c67-692c-11e6-8a84-bae500000002",
      "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type":"group",
      "mediaType":"application/json"
    }
  },
  "updated":"2016-09-01 18:28:22",
  "name":"ООО Радуга",
  "externalCode":"o7732zkki541HDkZZD1Yt3",
  "archived":false,
  "created":"2007-02-07 17:16:41",
  "companyType":"legal",
  "accounts":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b80ea81b-7058-11e6-8a84-bae500000000/accounts",
      "type":"account",
      "mediaType":"application/json",
      "size":0,
      "limit":1000,
      "offset":0
    }
  },
  "tags":[  

  ],
  "contactpersons":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b80ea81b-7058-11e6-8a84-bae500000000/contactpersons",
      "type":"contactperson",
      "mediaType":"application/json",
      "size":0,
      "limit":1000,
      "offset":0
    }
  },
  "notes":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b80ea81b-7058-11e6-8a84-bae500000000/notes",
      "type":"note",
      "mediaType":"application/json",
      "size":0,
      "limit":1000,
      "offset":0
    }
  },
  "state":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/fb56c504-2e58-11e6-8a84-bae500000069",
      "type":"state",
      "mediaType":"application/json"
    }
  },
  "salesAmount":0,
  "priceType":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/context/companysettings/pricetype/672559f1-cbf3-11e1-9eb9-889ffa6f2222",
      "type":"pricetype",
      "mediaType":"application/json"
    },
    "id":"672559f1-cbf3-11e1-9eb9-889ffa6f49fd",
    "name":"Цена продажи",
    "externalCode":"cbcf493b-55bc-11d9-848a-00112f43529a"
  },
  "legalAddress":"125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
  "legalAddressFull":{  
    "postalCode":"125009",
    "country":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type":"country",
        "mediaType":"application/json"
      }
    },
    "region":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type":"region",
        "mediaType":"application/json"
      }
    },
    "city":"Москва",
    "street":"ул Тверская",
    "house":"1",
    "apartment":"123",
    "addInfo":"addinfo",
    "comment":"some words about address"
  },
  "actualAddress":"125009, Россия, г Москва, Москва, ул Тверская, 1, 111, addInfo",
  "actualAddressFull":{  
    "postalCode":"125009",
    "country":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type":"country",
        "mediaType":"application/json"
      }
    },
    "region":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type":"region",
        "mediaType":"application/json"
      }
    },
    "city":"Москва",
    "street":"ул Тверская",
    "house":"1",
    "apartment":"111",
    "addInfo":"addinfo",
    "comment":"some words about address"
  },
  "bonusProgram": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/129626ee-ac91-11e9-ac12-000d00000009",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/bonusprogram/metadata",
      "type": "bonusprogram",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#discount/edit?id=129626ee-ac91-11e9-ac12-000d00000009"
    }
  },
  "bonusPoints": 0
}
```

> Пример 2

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"  
```

> Response 200 (application/json). Успешный запрос. Результат - JSON представление Контрагента типа Индивидуальный Предприниматель с указанным id.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/7944ef04-f831-11e5-7a69-971500188b19",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
    "type": "counterparty",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#company/edit?id=7944ef04-f831-11e5-7a69-971500188b19"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b19",
  "accountId": "02865f48-b0ae-11ea-0a80-203a00000002",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/02e06bea-b0ae-11ea-0a80-1d9c00000034",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#employee/edit?id=02e06bea-b0ae-11ea-0a80-1d9c00000034"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/02877fda-b0ae-11ea-0a80-203a00000003",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "version": 0,
  "updated": "2020-06-17 18:21:53",
  "name": "ИП Иванов",
  "code": "someCode",
  "externalCode": "extCode",
  "archived": false,
  "created": "2020-06-17 18:21:53",
  "companyType": "entrepreneur",
  "legalTitle": "Индивидуальный предприниматель Иванов Иван Иванович",
  "legalAddress": "г.Москва ул Авиастроителей д 93 к 12",
  "legalAddressFull": {
    "addInfo": "г.Москва ул Авиастроителей д 93 к 12"
  },
  "actualAddress": "г.Москва ул Академика Миля дом 15 к 21",
  "actualAddressFull": {
    "addInfo": "г.Москва ул Академика Миля дом 15 к 21"
  },
  "inn": "87654321",
  "okpo": "12345",
  "ogrnip": "58632598y21jk",
  "legalLastName": "Иванов",
  "legalFirstName": "Иван",
  "legalMiddleName": "Иванович",
  "accounts": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/7944ef04-f831-11e5-7a69-971500188b19/accounts",
      "type": "account",
      "mediaType": "application/json",
      "size": 0,
      "limit": 100,
      "offset": 0
    }
  },
  "tags": [],
  "contactpersons": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/7944ef04-f831-11e5-7a69-971500188b19/contactpersons",
      "type": "contactperson",
      "mediaType": "application/json",
      "size": 0,
      "limit": 100,
      "offset": 0
    }
  },
  "notes": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/7944ef04-f831-11e5-7a69-971500188b19/notes",
      "type": "note",
      "mediaType": "application/json",
      "size": 0,
      "limit": 100,
      "offset": 0
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/states/03935900-b0ae-11ea-0a80-1d9c0000008c",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "salesAmount": 0.0
}
```


### Изменить Контрагента 
#### Описание


Обновляется представление Контрагента с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Контрагента, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Контрагента](../dictionaries/#suschnosti-kontragent).
Поля, которые не были указаны в JSON запроса, не изменяются.
Поля **account** и **contactpersons** обновляются как элементы вложенных коллекций. При обновлении,
переданные элементы данных коллекций обрабатываются как "Все элементы данной коллекции" и полностью заменяют
элементы, ранее присутствовавшие в ней.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
| **id**         |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* - id Контрагента.|

> Пример

```shell
curl -X PUT
  "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
    -d '{  
  "name":"ООО Радуга ЭКСПО",
  "description":"Сеть рынков стройматериалов Радуга ЭКСПО",
  "code":"raduga",
  "externalCode":"extRainbow",
  "email":"raduga@retail.ru",
  "phone":"+7 495 162 32 23",
  "fax":"1052054",
  "legalTitle":"Общество с ограниченой ответственностью \"Радуга ЭКСПО\"",
  "legalAddressFull":{  
    "postalCode":"125009",
    "country":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type":"country",
        "mediaType":"application/json"
      }
    },
    "region":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type":"region",
        "mediaType":"application/json"
      }
    },
    "city":"Москва",
    "street":"ул Тверская",
    "house":"1",
    "apartment":"123",
    "addInfo":"addinfo",
    "comment":"some words about address"
  },
  "actualAddressFull":{  
    "postalCode":"125009",
    "country":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type":"country",
        "mediaType":"application/json"
      }
    },
    "region":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type":"region",
        "mediaType":"application/json"
      }
    },
    "city":"Москва",
    "street":"ул Тверская",
    "house":"1",
    "apartment":"111",
    "addInfo":"addinfo",
    "comment":"some words about address"
  },
  "inn":"1251581244152",
  "kpp":"121557212",
  "ogrn":"1253552",
  "okpo":"201313",
  "tags":[  
    "Строители",
    "Ремонт",
    "Радуга",
    "Бетон",
    "ЖЖОТ"
  ]
}'  
```

> Response 200 (application/json) Успешное обновление. Результат - JSON представление обновленного Контрагента.

```json
{  
  "meta":{  
    "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/6a9c3857-2c8b-11e6-8a84-bae500000047",
    "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
    "type":"counterparty",
    "mediaType":"application/json"
  },
  "id":"6a9c3857-2c8b-11e6-8a84-bae500000047",
  "accountId":"6270cd18-2c7f-11e6-8a84-bae500000001",
  "owner":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type":"employee",
      "mediaType":"application/json"
    }
  },
  "shared":false,
  "group":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type":"group",
      "mediaType":"application/json"
    }
  },
  "updated":"2016-06-07 12:13:31",
  "name":"ООО Радуга ЭКСПО",
  "description":"Сеть рынков стройматериалов Радуга ЭКСПО",
  "code":"raduga",
  "externalCode":"extRainbow",
  "archived":false,
  "created":"2007-02-07 17:16:41",
  "legalTitle":"Общество с ограниченой ответственностью \"Радуга ЭКСПО\"",
  "legalAddress":"125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
  "legalAddressFull":{  
    "postalCode":"125009",
    "country":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type":"country",
        "mediaType":"application/json"
      }
    },
    "region":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type":"region",
        "mediaType":"application/json"
      }
    },
    "city":"Москва",
    "street":"ул Тверская",
    "house":"1",
    "apartment":"123",
    "addInfo":"addinfo",
    "comment":"some words about address"
  },
  "actualAddress":"125009, Россия, г Москва, Москва, ул Тверская, 1, 111, addInfo",
  "actualAddressFull":{  
    "postalCode":"125009",
    "country":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type":"country",
        "mediaType":"application/json"
      }
    },
    "region":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type":"region",
        "mediaType":"application/json"
      }
    },
    "city":"Москва",
    "street":"ул Тверская",
    "house":"1",
    "apartment":"111",
    "addInfo":"addinfo",
    "comment":"some words about address"
  },
  "inn":"1251581244152",
  "kpp":"121557212",
  "ogrn":"1253552",
  "okpo":"201313",
  "email":"raduga@retail.ru",
  "phone":"+7 495 162 32 23",
  "fax":"1052054",
  "accounts":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/6a9c3857-2c8b-11e6-8a84-bae500000047/accounts",
      "type":"account",
      "mediaType":"application/json",
      "size":0,
      "limit":1000,
      "offset":0
    }
  },
  "tags":[  
    "жжот",
    "строители",
    "бетон",
    "ремонт",
    "радуга"
  ],
  "contactpersons":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/6a9c3857-2c8b-11e6-8a84-bae500000047/contactpersons",
      "type":"contactperson",
      "mediaType":"application/json",
      "size":0,
      "limit":1000,
      "offset":0
    }
  },
  "notes":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/6a9c3857-2c8b-11e6-8a84-bae500000047/notes",
      "type":"note",
      "mediaType":"application/json",
      "size":0,
      "limit":1000,
      "offset":0
    }
  }
}
```

> Пример с дополнительными полями

```shell
curl -X PUT
  "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
    -d '
{
  "name": "ООО Овощ Экспресс",
  "description": "Сеть экспресс-доставки овощей",
  "code": "ovoshexpresscode",
  "externalCode": "externalVagetable",
  "email": "ovoshi@delivery.ru",
  "phone": "+7 495 162 12 23",
  "fax": "1052014",
  "legalTitle": "Общество с ограниченой ответственностью \"Овощ Экспресс\"",
  "inn": "1251581244152",
  "kpp": "121557212",
  "ogrn": "1253552",
  "okpo": "201313",
  "tags": [
    "Овощи",
    "Еда",
    "Доставка",
    "Экспресс",
    "Едовозы"
  ],
  "contactpersons": [
    {
      "name": "Вася",
      "description": "Овощерез Вася",
      "position": "Овощерез"
    },
    {
      "name": "Петя",
      "position": "Овощевоз"
    }
  ],
  "accounts": [
    {
      "isDefault": true,
      "accountNumber": "12512568161257981",
      "bankName": "ОАО Сбербанк",
      "bankLocation": "г Москва Ул Вавилова 19",
      "correspondentAccount": "375632785587",
      "bic": "1234532"
    },
    {
      "accountNumber": "12512568161257982",
      "bankName": "ВТБ",
      "bic": "7654352"
    }
  ],
  "attributes": [
    {
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/attributes/0d129ff5-2c8c-11e6-8a84-bae5000000f3",
        "type":"attributemetadata",
        "mediaType":"application/json"
      },
      "name": "AttributeName1",
      "type": "double",
      "value": 0.35
    },
    {
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/attributes/0d12a9a5-2c8c-11e6-8a84-bae5000000f4",
        "type":"attributemetadata",
        "mediaType":"application/json"
      },
      "name": "AttributeName2",
      "type": "time",
      "value": "2016-06-07 10:52:33"
    },
    {
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/attributes/0d12b1e7-2c8c-11e6-8a84-bae5000000f5",
        "type":"attributemetadata",
        "mediaType":"application/json"
      },
      "name": "AttributeName3",
      "type": "boolean",
      "value": true
    }
  ]
}'  
```

> Response 200 (application/json). Успешное обновление. Результат - JSON представление обновленного Контрагента.

```json
{  
  "meta":{  
    "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/88fc07ac-2c8d-11e6-8a84-bae500000050",
    "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
    "type":"counterparty",
    "mediaType":"application/json"
  },
  "id":"88fc07ac-2c8d-11e6-8a84-bae500000050",
  "accountId":"6270cd18-2c7f-11e6-8a84-bae500000001",
  "owner":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/employee/faba7f37-2e58-11e6-8a84-bae500000028",
      "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type":"employee",
      "mediaType":"application/json"
    }
  },
  "shared":false,
  "group":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/group/f97aa1fb-2e58-11e6-8a84-bae500000002",
      "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type":"group",
      "mediaType":"application/json"
    }
  },
  "updated":"2016-06-07 12:08:25",
  "name":"ООО Овощ Экспресс",
  "description":"Сеть экспресс-доставки овощей",
  "code":"ovoshexpresscode",
  "externalCode":"externalVagetable",
  "archived":false,
  "created":"2007-02-07 17:16:41",
  "legalTitle":"Общество с ограниченой ответственностью \"Овощ Экспресс\"",
  "legalAddress":"125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
  "legalAddressFull":{  
    "postalCode":"125009",
    "country":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type":"country",
        "mediaType":"application/json"
      }
    },
    "region":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type":"region",
        "mediaType":"application/json"
      }
    },
    "city":"Москва",
    "street":"ул Тверская",
    "house":"1",
    "apartment":"123",
    "addInfo":"addinfo",
    "comment":"some words about address"
  },
  "actualAddress":"125009, Россия, г Москва, Москва, ул Тверская, 1, 111, addInfo",
  "actualAddressFull":{  
    "postalCode":"125009",
    "country":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/country/9df7c2c3-7782-4c5c-a8ed-1102af611608",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/country/metadata",
        "type":"country",
        "mediaType":"application/json"
      }
    },
    "region":{  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/region/00000000-0000-0000-0000-000000000077",
        "metadataHref":"https://online.moysklad.ru/api/remap/1.2/entity/region/metadata",
        "type":"region",
        "mediaType":"application/json"
      }
    },
    "city":"Москва",
    "street":"ул Тверская",
    "house":"1",
    "apartment":"111",
    "addInfo":"addinfo",
    "comment":"some words about address"
  },
  "inn":"1251581244152",
  "kpp":"121557212",
  "ogrn":"1253552",
  "okpo":"201313",
  "email":"ovoshi@delivery.ru",
  "phone":"+7 495 162 12 23",
  "fax":"1052014",
  "attributes":[  
    {  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/attributes/0d129ff5-2c8c-11e6-8a84-bae5000000f3",
        "type":"attributemetadata",
        "mediaType":"application/json"
      },
      "id":"0d129ff5-2c8c-11e6-8a84-bae5000000f3",
      "name":"AttributeName1",
      "type":"double",
      "value":0.35
    },
    {  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/attributes/0d12a9a5-2c8c-11e6-8a84-bae5000000f4",
        "type":"attributemetadata",
        "mediaType":"application/json"
      },
      "id":"0d12a9a5-2c8c-11e6-8a84-bae5000000f4",
      "name":"AttributeName2",
      "type":"time",
      "value":"2016-06-07 10:52:33"
    },
    {  
      "meta":{  
        "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata/attributes/0d12b1e7-2c8c-11e6-8a84-bae5000000f5",
        "type":"attributemetadata",
        "mediaType":"application/json"
      },
      "id":"0d12b1e7-2c8c-11e6-8a84-bae5000000f5",
      "name":"AttributeName3",
      "type":"boolean",
      "value":true
    }
  ],
  "accounts":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/88fc07ac-2c8d-11e6-8a84-bae500000050/accounts",
      "type":"account",
      "mediaType":"application/json",
      "size":2,
      "limit":1000,
      "offset":0
    }
  },
  "tags":[  
    "овощи",
    "доставка",
    "еда",
    "едовозы",
    "экспресс"
  ],
  "contactpersons":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/ee15550e-2c9e-11e6-8a84-bae500000003/contactpersons",
      "type":"contactperson",
      "mediaType":"application/json",
      "size":2,
      "limit":1000,
      "offset":0
    }
  },
  "notes":{  
    "meta":{  
      "href":"https://online.moysklad.ru/api/remap/1.2/entity/counterparty/ee15550e-2c9e-11e6-8a84-bae500000003/notes",
      "type":"note",
      "mediaType":"application/json",
      "size":0,
      "limit":1000,
      "offset":0
    }
  }
}
```

#### Счета Контрагента
### Получить счета Контрагента

Список счетов Контрагента с указанным id.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
| **id**         |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* - id Контрагента.|
| **limit**         |  `number` (optional) **Default: 1000** *Example: 1000* - Максимальное количество сущностей для извлечения. `Допустимые значения 1 - 1000`|
| **offset**         |  `number` (optional) **Default: 0** *Example: 40* - Отступ в выдаваемом списке сущностей.|

> Получить счета Контрагента

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/7944ef04-f831-11e5-7a69-971500188b19/accounts"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json). Возвращает массив JSON представлений счетов Контрагента.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/6a9c3857-2c8b-11e6-8a84-bae500000047/accounts",
    "type": "account",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/6a9c3857-2c8b-11e6-8a84-bae500000047/accounts/04c5d0dc-2c92-11e6-8a84-bae5000000f6",
        "type": "account",
        "mediaType": "application/json"
      },
      "id": "04c5d0dc-2c92-11e6-8a84-bae5000000f6",
      "accountId": "6270cd18-2c7f-11e6-8a84-bae500000001",
      "updated": "2016-06-07 12:27:13",
      "isDefault": false,
      "accountNumber": "125917666032321985647",
      "bankName": "ВТБ",
      "bankLocation": "ул Сахаровского д 153",
      "correspondentAccount": "12512578256712",
      "bic": "1258617"
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/6a9c3857-2c8b-11e6-8a84-bae500000047/accounts/6a9c43ce-2c8b-11e6-8a84-bae500000048",
        "type": "account",
        "mediaType": "application/json"
      },
      "id": "6a9c43ce-2c8b-11e6-8a84-bae500000048",
      "accountId": "6270cd18-2c7f-11e6-8a84-bae500000001",
      "updated": "2016-06-07 11:39:58",
      "isDefault": true,
      "accountNumber": "236174374372272747234743274",
      "bankName": "ОАО Сбербанк",
      "bankLocation": "ул Ваивлова д 19",
      "correspondentAccount": "251632427568",
      "bic": "125125125"
    }
  ]
}
```

#### Счет Контрагента

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|**id** |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* - id Контрагента .|
|**accountId** |  `string` (required) (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* - id Счета.|
|**limit** |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|**offset** |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

### Получить счет Контрагента

> Получить счет Контрагент

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/7944ef04-f831-11e5-7a69-971500188b19/accounts/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json). Возвращает JSON представление счета Контрагента.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/ee15550e-2c9e-11e6-8a84-bae500000003/accounts/a6aa5466-2ca2-11e6-8a84-bae500000017",
    "type": "account",
    "mediaType": "application/json"
  },
  "id": "a6aa5466-2ca2-11e6-8a84-bae500000017",
  "accountId": "da7d9bbe-2c97-11e6-8a84-bae500000001",
  "updated": "2016-06-07 14:26:17",
  "isDefault": false,
  "accountNumber": "12512568161257982",
  "bankName": "ВТБ",
  "bic": "7654352"
}
```

### Контактные лица Контрагента

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|**id** |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* - id Контрагента.|
|**limit** |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|**offset** |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

### Список контактных лиц

> Список контактных лиц

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/7944ef04-f831-11e5-7a69-971500188b19/contactpersons"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json). Возвращает массив JSON представлений контактных лиц Контрагента.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b80ea81b-7058-11e6-8a84-bae500000000/contactpersons",
    "type": "contactperson",
    "mediaType": "application/json",
    "size": 3,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b80ea81b-7058-11e6-8a84-bae500000000/contactpersons/43e39375-7059-11e6-8a84-bae5000000cb",
        "type": "contactperson",
        "mediaType": "application/json"
      },
      "id": "43e39375-7059-11e6-8a84-bae5000000cb",
      "accountId": "1185513e-692c-11e6-8a84-bae500000001",
      "updated": "2016-09-01 18:32:17",
      "name": "Адвокатов Петр Сергеевич",
      "description": "Адвокат",
      "externalCode": "asI0ncJch5jkgxxlCQKiH1",
      "email": "advopetr@mail.ru",
      "phone": "87127418",
      "position": "Адвокат",
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b80ea81b-7058-11e6-8a84-bae500000000",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b80ea81b-7058-11e6-8a84-bae500000000/contactpersons/308142fc-7059-11e6-8a84-bae5000000c6",
        "type": "contactperson",
        "mediaType": "application/json"
      },
      "id": "308142fc-7059-11e6-8a84-bae5000000c6",
      "accountId": "1185513e-692c-11e6-8a84-bae500000001",
      "updated": "2016-09-01 18:31:44",
      "name": "Travolta Jehn",
      "description": "Траволта на связи",
      "externalCode": "9QZNh3dbiLu1-V9bmmLKu0",
      "email": "travolta@mail.ru",
      "phone": "125815120",
      "position": "Секретарь",
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b80ea81b-7058-11e6-8a84-bae500000000",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b80ea81b-7058-11e6-8a84-bae500000000/contactpersons/13af74bf-7059-11e6-8a84-bae5000000c3",
        "type": "contactperson",
        "mediaType": "application/json"
      },
      "id": "13af74bf-7059-11e6-8a84-bae5000000c3",
      "accountId": "1185513e-692c-11e6-8a84-bae500000001",
      "updated": "2016-09-01 18:30:56",
      "name": "Панин Алексей Олегович",
      "description": "Бухгалтерия",
      "externalCode": "Gaizui5siLqoUbZ3jpE2I2",
      "email": "mail@mail.rq",
      "phone": "12412512512",
      "position": "Бухгалтер",
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b80ea81b-7058-11e6-8a84-bae500000000",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      }
    }
  ]
}
```

### Создать контактное лицо
Создать контактное лицо Контрагента с указанным id.

**Параметры**

|Параметр   |Описание   | 
|:----|:----|
|   **id**|   `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* - id Контрагента.|

> Пример запроса на создание контактного лица Контрагента.

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/7944ef04-f831-11e5-7a69-971500188b19/contactpersons"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
    -d '{
          "name": "Петр",
          "code": "Petya the deliverer",
          "externalCode": "-odJxBw7i06O0GhSc28S90",
          "email": "petr@ovoshy.com",
          "phone": "+777 666 228",
          "position": "овощедоставщик"
        }'  
```
> Response 200 (application/json). Успешное создание.

```json
[
  {
    "meta": {
      "href": "http://online.moysklad.ru/api/remap/1.2/entity/counterparty/7944ef04-f831-11e5-7a69-971500188b19/contactpersons/ceba215c-d5cb-11e7-0532-9eed00000005",
      "type": "contactperson",
      "mediaType": "application/json"
    },
    "id": "ceba215c-d5cb-11e7-0532-9eed00000005",
    "accountId": "eb9ac8c0-d511-11e7-0532-9eed00000001",
    "updated": "2017-11-30 15:41:38",
    "name": "Петр",
    "code": "Petya the deliverer",
    "externalCode": "-odJxBw7i06O0GhSc28S90",
    "email": "petr@ovoshy.com",
    "phone": "+777 666 228",
    "position": "овощедоставщик",
    "agent": {
      "meta": {
        "href": "http://online.moysklad.ru/api/remap/1.2/entity/counterparty/7944ef04-f831-11e5-7a69-971500188b19",
        "metadataHref": "http://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json",
        "uuidHref": "http://online.moysklad.ru/app/#company/edit?id=7944ef04-f831-11e5-7a69-971500188b19"
      }
    }
  }
]
```

### Контактное лицо

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|**id** |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* - id Контрагента.|
|**contactpersonId** |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19*  - id контактного лица.|
|**limit** |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|**offset** |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

### Получить контактное лицо

> Получить контактное лицо

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/7944ef04-f831-11e5-7a69-971500188b19/contactpersons/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json). Возвращает JSON представление отдельного контактного лица Контрагента.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/ee15550e-2c9e-11e6-8a84-bae500000003/contactpersons/94433ed3-2c9f-11e6-8a84-bae500000010",
    "type": "contactperson",
    "mediaType": "application/json"
  },
  "id": "94433ed3-2c9f-11e6-8a84-bae500000010",
  "accountId": "da7d9bbe-2c97-11e6-8a84-bae500000001",
  "updated": "2016-06-07 14:04:17",
  "name": "Петр",
  "code": "Petya the deliverer",
  "externalCode": "-odJxBw7i06O0GhSc28S90",
  "email": "petr@ovoshy.com",
  "phone": "+777 666 228",
  "position": "овощедоставщик",
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/ee15550e-2c9e-11e6-8a84-bae500000003",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  }
}
```

### Изменить контактное лицо

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|**id** |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* - id Контрагента.|
|**contactpersonId** |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19*  - id контактного лица.|

#### Описание
Обновить контактное лицо Контрагента с указанным id.
Обновляются все поля, указанные в JSON объекте запроса, кроме
помеченных `Только для чтения` в описании [атрибутов контактных лиц Контрагента](../dictionaries/#suschnosti-kontragent-kontragenty-attributy-suschnosti-adres-kontaktnye-lica-kontragentow).
Поля, которые не были указаны в JSON запроса, не изменяются.

> Пример запроса на обновление контактного лица Контрагента.
  
  ```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/7944ef04-f831-11e5-7a69-971500188b19/contactpersons/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "name": "Петр",
            "code": "Petya the deliverer",
            "email": "petr@ovoshy.com",
            "phone": "+777 666 228",
            "position": "овощедоставщик"
          }'  
  ```

> Response 200 (application/json). Успешное обновление.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/ee15550e-2c9e-11e6-8a84-bae500000003/contactpersons/94433ed3-2c9f-11e6-8a84-bae500000010",
    "type": "contactperson",
    "mediaType": "application/json"
  },
  "id": "94433ed3-2c9f-11e6-8a84-bae500000010",
  "accountId": "da7d9bbe-2c97-11e6-8a84-bae500000001",
  "updated": "2016-06-07 14:04:17",
  "name": "Петр",
  "code": "Petya the deliverer",
  "externalCode": "-odJxBw7i06O0GhSc28S90",
  "email": "petr@ovoshy.com",
  "phone": "+777 666 228",
  "position": "овощедоставщик",
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/ee15550e-2c9e-11e6-8a84-bae500000003",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  }
}
```

### События Контрагента

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|**id** |  `string` (required) *Example: 67e5a691-3c9c-11e7-8af5-581e00000056* - id Контрагента.|
|**limit** |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|**offset** |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

### Список событий

> Список событий

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/67e5a691-3c9c-11e7-8af5-581e00000056/notes"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json). Успешный запрос.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/67e5a691-3c9c-11e7-8af5-581e00000056/notes",
    "type": "note",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/67e5a691-3c9c-11e7-8af5-581e00000056/notes/7e391b16-3efd-11e7-8af5-581e0000009d",
        "type": "note",
        "mediaType": "application/json"
      },
      "id": "7e391b16-3efd-11e7-8af5-581e0000009d",
      "accountId": "b127966a-3efa-11e7-8af5-581e00000001",
      "created": "2017-05-22 17:46:52",
      "description": "второе событие",
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/67e5a691-3c9c-11e7-8af5-581e00000056",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "author": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b1876a85-3efa-11e7-8af5-581e0000002a",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/67e5a691-3c9c-11e7-8af5-581e00000056/notes/7b919056-3efd-11e7-8af5-581e0000009a",
        "type": "note",
        "mediaType": "application/json"
      },
      "id": "7b919056-3efd-11e7-8af5-581e0000009a",
      "accountId": "b127966a-3efa-11e7-8af5-581e00000001",
      "created": "2017-05-22 17:46:47",
      "description": "первое событие",
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/67e5a691-3c9c-11e7-8af5-581e00000056",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "author": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b1876a85-3efa-11e7-8af5-581e0000002a",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      }
    }
  ]
}
```
### Добавить событие

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|**id** |  `string` (required) *Example: 67e5a691-3c9c-11e7-8af5-581e00000056* - id Контрагента.|

> Запрос на добавление нового события.
  
```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/67e5a691-3c9c-11e7-8af5-581e00000056/notes"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
    -d '{
          "description": "текст"
        }'  
```

> Response 200 (application/json). Успешный запрос. Результат - JSON представление добавленного события.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/67e5a691-3c9c-11e7-8af5-581e00000056/notes/50b318cb-3cb0-11e7-8af5-581e00000007",
      "type": "note",
      "mediaType": "application/json"
    },
    "id": "50b318cb-3cb0-11e7-8af5-581e00000007",
    "accountId": "674f0d4f-3c9c-11e7-8af5-581e00000001",
    "created": "2017-05-19 19:29:22",
    "description": "текст",
    "agent": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/67e5a691-3c9c-11e7-8af5-581e00000056",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "author": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/67b86071-3c9c-11e7-8af5-581e0000002a",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  }
]
```

### Событие 

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
| **id**|  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* - id Контрагента.|
| **noteId**|  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* - id события.|

### Получить событие

> Получить событие 

```shell
curl -X GET
  "GET https://online.moysklad.ru/api/remap/1.2/entity/counterparty/7944ef04-f831-11e5-7a69-971500188b19/notes/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json). Возвращает JSON представление отдельного события Контрагента.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/67e5a691-3c9c-11e7-8af5-581e00000056/notes/50b318cb-3cb0-11e7-8af5-581e00000007",
    "type": "note",
    "mediaType": "application/json"
  },
  "id": "50b318cb-3cb0-11e7-8af5-581e00000007",
  "accountId": "674f0d4f-3c9c-11e7-8af5-581e00000001",
  "created": "2017-05-19 19:29:22",
  "description": "текст",
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/67e5a691-3c9c-11e7-8af5-581e00000056",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "author": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/67b86071-3c9c-11e7-8af5-581e0000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  }
}
```

### Изменить событие
#### Описание

Обновить событие Контрагента с указанным id.
Обновляются все поля, указанные в JSON объекте запроса, кроме
помеченных `Только для чтения` в описании [атрибутов событий Контрагента](../dictionaries/#suschnosti-kontragent-kontragenty-attributy-suschnosti-adres-sobytiq-kontragenta).
Поля, которые не были указаны в JSON запроса, не изменяются.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
| **id**|  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* - id Контрагента.|
| **noteId**|  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* - id события.|

> Пример запроса на обновление события Контрагента.

  ```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/7944ef04-f831-11e5-7a69-971500188b19/notes/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "description": "измененный текст"
          }'  
  ```

> Response 200 (application/json). Успешное обновление.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/67e5a691-3c9c-11e7-8af5-581e00000056/notes/50b318cb-3cb0-11e7-8af5-581e00000007",
    "type": "note",
    "mediaType": "application/json"
  },
  "id": "50b318cb-3cb0-11e7-8af5-581e00000007",
  "accountId": "674f0d4f-3c9c-11e7-8af5-581e00000001",
  "created": "2017-05-19 19:29:22",
  "description": "измененный текст",
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/67e5a691-3c9c-11e7-8af5-581e00000056",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "author": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/67b86071-3c9c-11e7-8af5-581e0000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  }
}
```

### Удалить событие

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
| **id**|  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* - id Контрагента.|
| **noteId**|  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* - id события.|

> Запрос на удаление события с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/67e5a691-3c9c-11e7-8af5-581e00000056/notes/50b318cb-3cb0-11e7-8af5-581e00000007"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json). Успешное удаление События.

### Настройки справочника контрагентов

Средствами JSON API можно управлять настройками справочника контрагентов. 

#### Атрибуты настроек справочника контрагентов

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**meta**               |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Настроек справочника контрагентов|&mdash;|да
|**uniqueCodeRules**    |Object|Настройки кодов контрагентов|&mdash;|да
|**createShared**       |Boolean|Создавать новые документы с меткой «Общий»|&mdash;|да

#### Настройки кодов контрагентов

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**checkUniqueCode**    |Boolean|Проверка уникальности кода справочника|&mdash;|да
|**fillUniqueCode**     |Boolean|Устанавливать уникальный код|&mdash;|да

### Получить Настройки справочника контрагентов

> Запрос на получение настроек справочника контрагентов

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/settings"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление настроек справочника контрагентов.

```json
{
  "meta" : {
    "href" : "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/settings",
    "type" : "counterpartysettings",
    "mediaType" : "application/json"
  },
  "uniqueCodeRules" : {
    "checkUniqueCode" : true,
    "fillUniqueCode" : true
  },
  "createShared" : true
}
```

### Изменить настройки справочника контрагентов 

В теле запроса нужно передать объект, содержащий новый JSON настроек справочника контрагентов.
Изменять настройки можно частично, для этого в тело запроса нужно добавить лишь те поля, которые необходимо обновлять, остальные поля останутся прежними. Каждое поле является необязательным.
В ответе придет полная сущность, даже если обновление было частичным. 

> Запрос на изменение метаданных справочника контрагентов.

```shell
curl -X PUT
  "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/settings"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '{
  "uniqueCodeRules": {
    "checkUniqueCode": true,
    "fillUniqueCode": true
  },
  "createShared": false
}'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление настроек справочника контрагентов.

```json
{
  "meta" : {
    "href" : "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/settings",
    "type" : "counterpartysettings",
    "mediaType" : "application/json"
  },
  "uniqueCodeRules": {
    "checkUniqueCode": true,
    "fillUniqueCode": true
  },
  "createShared": false
}
```
