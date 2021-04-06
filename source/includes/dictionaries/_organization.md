## Юрлицо
Средствами JSON API можно создавать и обновлять сведения о юрлицах, запрашивать списки юрлиц и сведения по отдельным юрлицам. С помощью специального ресурса можно управлять счетами отдельного юрлица. Кодом сущности для юрлица в составе JSON API является ключевое слово **organization**.
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](../#mojsklad-json-api-obschie-swedeniq-kontextnyj-poisk).

Поиск среди объектов юрлиц на соответствие поисковой строке будет осуществлен по следующим полям:

+ По наименованию Юрлица **name**
+ По коду Юрлица **code**
+ По полному наименованию Юрлица **legalTitle**
+ По адресу электронной почты **email**
+ По номеру городского телефона **phone**
+ По номеру дисконтной карты

### Юрлица

| Название  | Тип | Описание                    | Свойство поля в запросе| Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**meta**               |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные Юрлица|&mdash;|да
|**id**                 |UUID|ID Юрлица|Только для чтения|да
|**accountId**          |UUID| ID учетной записи|Только для чтения|да
|**owner**              |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Владелец (Сотрудник)|&mdash;|да
|**shared**             |Boolean|Общий доступ|&mdash;|да
|**group**              |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Отдел сотрудника|&mdash;|да
|**syncId**             |UUID|ID синхронизации |После заполнения недоступен для изменения|нет
|**updated**            |DateTime|Момент последнего обновления Юрлица|Только для чтения|да
|**name**               |String(255)|Наименование Юрлица|Необходимое при создании|да
|**description**        |String(4096)|Комментарий к Юрлицу |&mdash;|нет
|**code**               |String(255)|Код Юрлица |&mdash;| нет
|**externalCode**       |String(255)|Внешний код Юрлица |Только для чтения| да
|**archived**           |Boolean|Добавлено ли Юрлицо в архив|&mdash;| да
|**created**            |DateTime|Дата создания|&mdash;| да
|**actualAddress**      |String(255)|Фактический адрес Юрлица  |&mdash;| нет
|**actualAddressFull**  |Object|Фактический адрес Юрлица с детализацией по отдельным полям. [Подробнее тут](../dictionaries/#suschnosti-jurlico-jurlica-attributy-suschnosti-adres) |&mdash;|нет
|**companyType**        |Enum|Тип Юрлица . В зависимости от значения данного поля набор выводимых реквизитов контрагента может меняться. [Подробнее тут](../dictionaries/#suschnosti-jurlico-jurlica-tip-urlica) |&mdash;| да |
|**trackingContractNumber**|String(255)|Номер договора с ЦРПТ|&mdash;| нет
|**trackingContractDate**  |DateTime|Дата договора с ЦРПТ|&mdash;| нет
|**bonusProgram**          |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные активной бонусной программы|&mdash;|нет
|**bonusPoints**           |Int|Бонусные баллы по активной бонусной программе|Только для чтения| нет

#### Поля реквизитов

| Название  | Тип | Описание                    | Свойство поля в запросе | Обязательное при ответе|
| --------- |:----|:----------------------------|:---------------|:-----------------------|
|**legalTitle**       |String(4096)|Полное наименование. Игнорируется, если передано одно из значений для ФИО. Формируется автоматически на основе получаемых ФИО Юрлица|&mdash;|нет
|**legalLastName**     |String(255)|Фамилия для Юрлица типа `[Индивидуальный предприниматель, Физическое лицо]`. Игнорируется для Юрлиц типа `[Юридическое лицо]`|&mdash;|нет
|**legalFirstName**     |String(255)|Имя для Юрлица типа `[Индивидуальный предприниматель, Физическое лицо]`. Игнорируется для Юрлиц типа `[Юридическое лицо]`|&mdash;|нет
|**legalMiddleName**     |String(255)|Отчество для Юрлица типа `[Индивидуальный предприниматель, Физическое лицо]`. Игнорируется для Юрлиц типа `[Юридическое лицо]`|&mdash;|нет
|**legalAddress**     |String(255)|Юридический адреса Юрлица|&mdash;|нет
|**legalAddressFull** |Object|Юридический адрес Юрлица с детализацией по отдельным полям|&mdash;|нет
|**inn**              |String(255)|ИНН|&mdash;|нет
|**kpp**              |String(255)|КПП|&mdash;|нет
|**ogrn**             |String(255)|ОГРН|&mdash;|нет
|**ogrnip**           |String(255)|ОГРНИП|&mdash;|нет
|**okpo**             |String(255)|ОКПО|&mdash;|нет
|**certificateNumber**|String(255)|Номер свидетельства|&mdash;|нет
|**certificateDate**  |DateTime|Дата свидетельства|&mdash;|нет
|**email**            |String(255)|Адрес электронной почты |&mdash;| нет
|**phone**            |String(255)|Номер городского телефона |&mdash;| нет
|**fax**              |String(255)|Номер факса |&mdash;| нет
|**accounts**         |Array(Object)|Метаданные счетов юрлица|&mdash;| да
|**attributes**       |Array(Object)|Массив метаданных дополнительных полей юрлица|&mdash;|нет
|**isEgaisEnable**    |Boolean|Включен ли ЕГАИС для данного юрлица|&mdash;| нет
|**fsrarId**          |String(255)|Идентификатор в ФСРАР|&mdash;|нет
|**payerVat**         |Boolean|Является ли данное юрлицо плательщиком НДС|&mdash;| нет
|**utmUrl**           |String(255)|IP-адрес УТМ|&mdash;|нет
|**director**         |String(255)|Руководитель|&mdash;|нет
|**chiefAccountant**  |String(255)|Главный бухгалтер|&mdash;|нет

#### Атрибуты вложенных сущностей
#### Аттрибуты сущности Адрес

| Название  | Тип | Описание                    | Свойство поля в запросе | Обязательное при ответе|
| --------- |:----|:----------------------------|:---------------|:-----------------------|
|**postalCode**      |String(6)|Почтовый индекс|&mdash;|нет
|**country**      |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные страны|&mdash;|нет
|**region**      |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные региона|&mdash;|нет
|**city**      |String(255)|Город|&mdash;|нет
|**street**      |String(255)|Улица|&mdash;|нет
|**house**      |String(30)|Дом|&mdash;|нет
|**apartment**      |String(30)|Квартира|&mdash;|нет
|**addInfo**      |String(255)|Другое|&mdash;|нет
|**comment**      |String(255)|Комментарий|&mdash;|нет

Строка адреса является конкатенацией полей структурированного адреса в следующем порядке: postalCode -> country -> region -> city -> street -> house -> apartment -> addInfo, используя запятую в качестве разделителя.
При передаче в МойСклад сущностей с адресом используйте либо строковый адрес, либо структурированный.
При передаче обоих адресов строковый будет игнорирован.
При передаче только строкового он будет отражаться как в строковом поле так и в addInfo структурированного адреса.

##### Счета юрлица

| Название  | Тип | Описание                    | Свойство поля в запросе | Обязательное при ответе|
| --------- |:----|:----------------------------|:---------------|:-----------------------|
|**id**      |UUID|ID Счета|Только для чтения|да
|**accountId**      |UUID|ID учетной записи|Только для чтения|да
|**updated**      |DateTime|Момент последнего обновления юрлица|Только для чтения|да
|**isDefault**      |Boolean|Является ли счет основным счетом юрлица|&mdash;|да
|**accountNumber**      |String(255)|Номер счета|Необходимое при создании|да
|**bankName**      |String(255)|Наименование банка|&mdash;|нет
|**bankLocation**      |String(255)|Адрес банка|&mdash;|нет
|**correspondentAccount**      |String(255)|Корр счет|&mdash;|нет
|**bic**      |String(255)|БИК|&mdash;|нет
|**agent**     |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные юрлица|&mdash;|да

#### Тип юрлица
В зависимости от типа юрлица **companyType** в составе его объекта будут выводиться разные наборы реквизитов.
Типы юрлица и соответствующие значения, которые могут быть переданы в значение данного поля:

| Значение поля companyType      |Тип контрагента   |
| ------------------------------ |:---------------------------|
| **legal**               | Юридическое лицо                  |
| **entrepreneur**        |Индивидуальный предприниматель     |
| **individual**          |Физическое лицо                    |

<br>

Если тип юрлица `Юридическое лицо`, будут выведены следующие поля реквизитов:

| Название  | Описание|              
| --------- |--------|
|**legalTitle**       |Полное наименование юрлица
|**legalAddress**     |Юридического адреса юрлица
|**inn**              |ИНН|
|**kpp**              |КПП|
|**ogrn**             |ОГРН|
|**okpo**             |ОКПО|

<br>


Если тип юрлица `Индивидуальный предприниматель`, будут выведены следующие поля реквизитов:

| Название  |Описание | 
| --------- |:----|
|**legalTitle**       |Полное наименование. Игнорируется, если передано одно из значений для ФИО. Формируется автоматически на основе получаемых ФИО Юрлица
|**legalLastName**    |Фамилия для Контрагента типа `[Индивидуальный предприниматель, Физическое лицо]`. Игнорируется для Контрагентов типа `[Юридическое лицо]`
|**legalFirstName**   |Имя для Контрагента типа `[Индивидуальный предприниматель, Физическое лицо]`. Игнорируется для Контрагентов типа `[Юридическое лицо]`
|**legalMiddleName**  |Отчество для Контрагента типа `[Индивидуальный предприниматель, Физическое лицо]`. Игнорируется для Контрагентов типа `[Юридическое лицо]`
|**legalAddress**     |Юридического адреса юрлица
|**legalAddressFull** |Юридический адрес Контрагента с детализацией по отдельным полям
|**inn**              |ИНН
|**ogrnip**           |ОГРНИП
|**okpo**             |ОКПО
|**certificateNumber**|Номер свидетельства
|**certificateDate**  |Дата свидетельства

<br>

Если тип юрлица `Физическое лицо`, будут выведены следующие поля реквизитов:

| Название  |Описание
| --------- |-----|
|**legalTitle**       |Полное наименование. Игнорируется, если передано одно из значений для ФИО. Формируется автоматически на основе получаемых ФИО Юрлица
|**legalLastName**    |Фамилия для Контрагента типа `[Индивидуальный предприниматель, Физическое лицо]`. Игнорируется для Контрагентов типа `[Юридическое лицо]`
|**legalFirstName**   |Имя для Контрагента типа `[Индивидуальный предприниматель, Физическое лицо]`. Игнорируется для Контрагентов типа `[Юридическое лицо]`
|**legalMiddleName**  |Отчество для Контрагента типа `[Индивидуальный предприниматель, Физическое лицо]`. Игнорируется для Контрагентов типа `[Юридическое лицо]`
|**legalAddress**     |Юридического адреса юрлица
|**inn**              |ИНН

О работе с доп. полями юрлиц можно прочитать [здесь](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi)


### Получить список юрлиц
Запрос на получение списка юрлиц на данной учетной записи.

| Название  | Тип | Описание                    |
| --------- |:----|:----------------------------|
|**meta** |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)|Метаданные о выдаче,
|**context** | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные о сотруднике, выполнившем запрос.
|**rows** |Array(Object)|Массив JSON объектов, представляющих собой юрлица.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|**limit** |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|**offset** |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить список юрлиц

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/organization"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос.Результат: Объект JSON, включающий в себя поля:

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
    "type": "organization",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      },
      "id": "850c8195-f504-11e5-8a84-bae50000015e",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
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
      "updated": "2016-04-18 17:26:20",
      "name": "ООО ОАО ООО ОАО",
      "description": "юрлицо, делающее основнуб прибыль",
      "code": "1214124",
      "externalCode": "6IRv89VSgKY7yQAmAuV7n0",
      "archived": false,
      "created": "2007-02-07 17:16:41",
      "trackingContractNumber": "12345678",
      "trackingContractDate": "2007-02-07 00:00:00",
      "legalTitle": "ООО Великое объединение любителей великих объединений",
      "legalAddress": "125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
      "legalAddressFull": {
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
      "actualAddress": "125009, Россия, г Москва, Москва, ул Тверская, 1, 111, addInfo",
      "actualAddressFull": {
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
        "apartment": "111",
        "addInfo": "addinfo",
        "comment": "some words about address"
      },
      "inn": "8274424278",
      "kpp": "123456789",
      "ogrn": "121410924",
      "okpo": "1241252156",
      "email": "asdad@sfasf.erq",
      "phone": "fawofyho21f1",
      "fax": "feisafhn0e12f31",
      "accounts": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/850c8195-f504-11e5-8a84-bae50000015e/accounts",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "account",
          "mediaType": "application/json",
          "size": 2,
          "limit": 1000,
          "offset": 0
        }
      },
      "isEgaisEnable": true,
      "fsrarId": "1963703",
      "payerVat": true,
      "utmUrl": "10.250.110.81",
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
  ]
}
```

### Создать юрлицо 
Запрос на создание нового юрлица.
#### Описание
Юрлицо создается на основе переданного объекта JSON,
который содержит представление нового юрлица.

> Пример создания нового юрлица.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/organization"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{  
  "name":"ОАО СветПром",
  "description":"юрлицо, делающее маленькую прибыль",
  "code":"666",
  "externalCode":"666АААА666",
  "archived":false,
  "trackingContractNumber": "12345678",
  "trackingContractDate": "2007-02-07 00:00:00",
  "legalTitle":"ООО Великое Свет Пром",
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
  "inn":"87654321",
  "kpp":"15312532",
  "ogrn":"12345",
  "okpo":"12345",
  "email":"svetprom@mail.svet",
  "phone":"22222222",
  "fax":"bello123",
  "isEgaisEnable":true,
  "fsrarId":"1963703",
  "payerVat":true,
  "utmUrl":"10.250.110.81",
  "director":"Кипелова Александра",
  "chiefAccountant":"Подкупников Иван"
}'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного юрлица.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/4b9d5bec-0575-11e6-9464-e4de00000008",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
    "type": "organization",
    "mediaType": "application/json"
  },
  "id": "4b9d5bec-0575-11e6-9464-e4de00000008",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
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
  "updated": "2016-04-18 17:53:21",
  "name": "ОАО СветПром",
  "description": "юрлицо, делающее маленькую прибыль",
  "code": "666",
  "externalCode": "666АААА666",
  "archived": false,
  "trackingContractNumber": "12345678",
  "trackingContractDate": "2007-02-07 00:00:00",
  "legalTitle": "ООО Великое Свет Пром",
  "legalAddress": "125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
  "legalAddressFull": {
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
  "actualAddress": "125009, Россия, г Москва, Москва, ул Тверская, 1, 111, addInfo",
  "actualAddressFull": {
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
    "apartment": "111",
    "addInfo": "addinfo",
    "comment": "some words about address"
  },
  "inn": "87654321",
  "kpp": "15312532",
  "ogrn": "12345",
  "okpo": "12345",
  "email": "svetprom@mail.svet",
  "phone": "22222222",
  "fax": "bello123",
  "accounts": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/4b9d5bec-0575-11e6-9464-e4de00000008/accounts",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "account",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "isEgaisEnable": true,
  "fsrarId": "1963703",
  "payerVat": true,
  "utmUrl": "10.250.110.81"
}
```

> Пример запроса на создание юрлица с указанием юридических реквизитов для типа Индивидуальный Предприниматель.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/organization"
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

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного юрлица.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/713e2125-b147-11ea-0a80-163500000006",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
    "type": "organization",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=713e2125-b147-11ea-0a80-163500000006"
  },
  "id": "713e2125-b147-11ea-0a80-163500000006",
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
  "shared": true,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/02877fda-b0ae-11ea-0a80-203a00000003",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "version": 0,
  "updated": "2020-06-18 12:38:18",
  "name": "ИП Иванов",
  "code": "someCode",
  "externalCode": "extCode",
  "archived": false,
  "created": "2020-06-18 12:38:18",
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/713e2125-b147-11ea-0a80-163500000006/accounts",
      "type": "account",
      "mediaType": "application/json",
      "size": 0,
      "limit": 100,
      "offset": 0
    }
  },
  "isEgaisEnable": false,
  "payerVat": true,
  "trackingContractDate": null
}
```

> Пример создания нового юрлица с доп полями в теле запроса.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/organization"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
  "name": "ОАО СветПром",
  "description": "Новое юрлицо",
  "code": "666",
  "archived": false,
  "trackingContractNumber": "12345678",
  "trackingContractDate": "2007-02-07 00:00:00",
  "legalTitle": "ООО Великое Свет Пром",
  "inn": "87654321",
  "kpp": "15312532",
  "ogrn": "12345",
  "okpo": "12345",
  "email": "svetprom@mail.svet",
  "phone": "22222222",
  "fax": "bello123",
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "value": "Строковое значение"
    }
  ]
}'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного юрлица.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/bf182d24-12d7-11e6-9464-e4de00000012",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
    "type": "organization",
    "mediaType": "application/json"
  },
  "id": "bf182d24-12d7-11e6-9464-e4de00000012",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
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
  "updated": "2016-05-05 18:40:51",
  "name": "ОАО СветПром",
  "description": "Новое юрлицо",
  "code": "666",
  "externalCode": "sfwafn22-124124sa",
  "archived": false,
  "created": "2007-02-07 17:16:41",
  "trackingContractNumber": "12345678",
  "trackingContractDate": "2007-02-07 00:00:00",
  "legalTitle": "ООО Великое Свет Пром",
  "legalAddress": "125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
  "legalAddressFull": {
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
  "actualAddress": "125009, Россия, г Москва, Москва, ул Тверская, 1, 111, addInfo",
  "actualAddressFull": {
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
    "apartment": "111",
    "addInfo": "addinfo",
    "comment": "some words about address"
  },
  "inn": "87654321",
  "kpp": "15312532",
  "ogrn": "12345",
  "okpo": "12345",
  "email": "svetpromgazkamaz@mail.svet",
  "phone": "22222222",
  "fax": "belwo123",
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "7f4a6b38-12bb-11e6-9464-e4de00000076",
      "name": "AttributeName1",
      "type": "string",
      "value": "Строковое значение"
    }
  ],
  "accounts": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/bf182d24-12d7-11e6-9464-e4de00000012/accounts",
      "type": "account",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  }
}
```

### Массовое создание и обновление юрлиц 
[Массовое создание и обновление](../#mojsklad-json-api-obschie-swedeniq-sozdanie-i-obnowlenie-neskol-kih-ob-ektow) юрлиц.
В теле запроса нужно передать массив, содержащий JSON представления юрлиц, которые вы хотите создать или обновить.
Обновляемые юрлица должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких юрлиц

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/organization"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
  {
    "name": "ОАО СветПром",
    "description": "юрлицо, делающее маленькую прибыль",
    "code": "666",
    "externalCode": "666АААА666",
    "archived": false,
    "trackingContractNumber": "12345678",
    "trackingContractDate": "2007-02-07 00:00:00",
    "legalTitle": "ООО Великое Свет Пром",
    "legalAddress": "г Москва ул Ленин д 42/685",
    "actualAddress": "г Пермь ул Сталина д 75",
    "inn": "87654321",
    "kpp": "15312532",
    "ogrn": "12345",
    "okpo": "12345",
    "email": "svetprom@mail.svet",
    "phone": "22222222",
    "fax": "bello123",
    "isEgaisEnable": true,
    "fsrarId": "1963703",
    "payerVat": true,
    "utmUrl": "10.250.110.81",
    "director": "Кипелова Александра",
    "chiefAccountant": "Подкупников Иван"
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/bf182d24-12d7-11e6-9464-e4de00000012",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    },
    "name": "ОАО СветПром",
    "description": "юрлицо, делающее маленькую прибыль",
    "code": "666",
    "externalCode": "666АААА666",
    "archived": false,
    "trackingContractNumber": "12345678",
    "trackingContractDate": "2007-02-07 00:00:00",
    "legalTitle": "ООО Великое Свет Пром",
    "legalAddress": "г Москва ул Ленин д 42/685",
    "actualAddress": "г Уфа ул Маяковского д 65",
    "inn": "87654321",
    "kpp": "15312532",
    "ogrn": "12345",
    "okpo": "12345",
    "email": "svetprom@mail.svet",
    "phone": "22222222",
    "fax": "bello123",
    "payerVat": false,
    "director": "Вздрыжженов Иван Валерьевич",
    "chiefAccountant": "Кулумбекова Василиса Иисмаиловна"
  }
]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных юрлиц.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/4b9d5bec-0575-11e6-9464-e4de00000008",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    },
    "id": "4b9d5bec-0575-11e6-9464-e4de00000008",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
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
    "updated": "2016-04-18 17:53:21",
    "name": "ОАО СветПром",
    "description": "юрлицо, делающее маленькую прибыль",
    "code": "666",
    "externalCode": "666АААА666",
    "archived": false,
    "trackingContractNumber": "12345678",
    "trackingContractDate": "2007-02-07 00:00:00",
    "legalTitle": "ООО Великое Свет Пром",
    "legalAddress": "г Москва ул Ленин д 42/685",
    "actualAddress": "г Пермь ул Сталина д 75",
    "inn": "87654321",
    "kpp": "15312532",
    "ogrn": "12345",
    "okpo": "12345",
    "email": "svetprom@mail.svet",
    "phone": "22222222",
    "fax": "bello123",
    "accounts": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/4b9d5bec-0575-11e6-9464-e4de00000008/accounts",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "account",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
      }
    },
    "isEgaisEnable": true,
    "fsrarId": "1963703",
    "payerVat": true,
    "utmUrl": "10.250.110.81"
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/bf182d24-12d7-11e6-9464-e4de00000012",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    },
    "id": "bf182d24-12d7-11e6-9464-e4de00000012",
    "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
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
    "updated": "2016-05-05 18:40:51",
    "name": "ОАО СветГАЗКАМАЗПром",
    "description": "Новое юрлицо",
    "code": "666",
    "externalCode": "sfwafn22-124124sa",
    "archived": false,
    "created": "2007-02-07 17:16:41",
    "trackingContractNumber": "12345678",
    "trackingContractDate": "2007-02-07 00:00:00",
    "legalTitle": "ООО Великое Сообщество КАМАЗ ПРОМ",
    "legalAddress": "г Москва ул Ленина д 42/685",
    "actualAddress": "г Уфа ул Маяковского д 65",
    "inn": "87654321",
    "kpp": "15312532",
    "ogrn": "12345",
    "okpo": "12345",
    "email": "svetpromgazkamaz@mail.svet",
    "phone": "22222222",
    "fax": "belwo123",
    "accounts": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/bf182d24-12d7-11e6-9464-e4de00000012/accounts",
        "type": "account",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    },
    "payerVat": false,
    "director": "Вздрыжженов Иван Валерьевич",
    "chiefAccountant": "Кулумбекова Василиса Иисмаиловна"
  }
]
```

### Удалить юрлицо

**Параметры**

|Параметр   |Описание   | 
|:----|:----|
|**id** |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id юрлица.|

> Запрос на удаление юрлица с указанным id.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/organization/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешное удаление юрлица.

### Массовое удаление Организаций

В теле запроса нужно передать массив, содержащий JSON метаданных Организаций, которые вы хотите удалить.


> Запрос на массовое удаление Организаций. 

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/organization/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/7944ef04-f831-11e5-7a69-971500188b1",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
            "type": "organization",
            "mediaType": "application/json"
        },
        {
          "meta": {
            "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/7944ef04-f831-11e5-7a69-971500188b2",
            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
            "type": "organization",
            "mediaType": "application/json"
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Организаций.

```json
[
  {
    "info":"Сущность 'organization' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'organization' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
```

### Метаданные юрлиц
Запрос на получение метаданных юрлиц. Результат - объект JSON, включающий в себя:

| Название  | Тип | Описание                    |
| --------- |:----|:----------------------------|
|**meta** |[Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye)| Ссылка на метаданные юрлиц
|**attributes** |Array(Object)| Массив объектов доп. полей юрлиц в формате [Метаданных](../#mojsklad-json-api-obschie-swedeniq-metadannye)
|**createShared** |Boolean| Создавать новые юрлица с меткой "Общий"

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](../#mojsklad-json-api-obschie-swedeniq-rabota-s-dopolnitel-nymi-polqmi).

> Метаданные юрлиц

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей юрлиц.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
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
|:----|:----|
|**id** |  `string` (required) *Example: 5290a290-0313-11e6-9464-e4de00000020* id Доп. поля.|

> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata/attributes/5290a290-0313-11e6-9464-e4de00000020"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata/attributes/5290a290-0313-11e6-9464-e4de00000020",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "5290a290-0313-11e6-9464-e4de00000020",
  "name": "AttributeName1",
  "type": "boolean",
  "required": false
}
```

### Юрлицо

### Получить юрлицо 
Запрос на получение юрлица с указанным id.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|**id** |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id юрлица.|
|**limit** |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|**offset** |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Пример 1

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/organization/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление юрлица с указанным id.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/4b9d5bec-0575-11e6-9464-e4de00000008",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
    "type": "organization",
    "mediaType": "application/json"
  },
  "id": "4b9d5bec-0575-11e6-9464-e4de00000008",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
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
  "updated": "2016-04-18 17:57:27",
  "name": "ОАО СветПром",
  "description": "юрлицо, делающее маленькую прибыль",
  "code": "666",
  "externalCode": "666АААА666",
  "archived": false,
  "created": "2007-02-07 17:16:41",
  "trackingContractNumber": "12345678",
  "trackingContractDate": "2007-02-07 00:00:00",
  "legalTitle": "ООО Великое Свет Пром",
  "legalAddress": "125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
  "legalAddressFull": {
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
  "actualAddress": "125009, Россия, г Москва, Москва, ул Тверская, 1, 111, addInfo",
  "actualAddressFull": {
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
    "apartment": "111",
    "addInfo": "addinfo",
    "comment": "some words about address"
  },
  "inn": "87654321",
  "kpp": "15312532",
  "ogrn": "12345",
  "okpo": "12345",
  "ogrnip": "58632598y21jk",
  "certificateNumber": "klghvew983412",
  "certificateDate": "2016-04-30 00:00:00",
  "email": "svetprom@mail.svet",
  "phone": "22222222",
  "fax": "bello123",
  "accounts": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/4b9d5bec-0575-11e6-9464-e4de00000008/accounts",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "account",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "isEgaisEnable": true,
  "fsrarId": "1963703",
  "payerVat": true,
  "utmUrl": "10.250.110.81",
  "director": "Администратор",
  "chiefAccountant": "Администратор",
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
  "https://online.moysklad.ru/api/remap/1.2/entity/organization/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление юрлица с указанным id.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/7944ef04-f831-11e5-7a69-971500188b19",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
    "type": "organization",
    "mediaType": "application/json",
    "uuidHref": "https://online.moysklad.ru/app/#mycompany/edit?id=7944ef04-f831-11e5-7a69-971500188b19"
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
  "shared": true,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/02877fda-b0ae-11ea-0a80-203a00000003",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "version": 0,
  "updated": "2020-06-18 12:38:18",
  "name": "ИП Иванов",
  "code": "someCode",
  "externalCode": "extCode",
  "archived": false,
  "created": "2020-06-18 12:38:18",
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
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/7944ef04-f831-11e5-7a69-971500188b19/accounts",
      "type": "account",
      "mediaType": "application/json",
      "size": 0,
      "limit": 100,
      "offset": 0
    }
  },
  "isEgaisEnable": false,
  "payerVat": true,
  "trackingContractDate": null
}
```

### Изменить юрлицо 
Запрос на обновление юрлица с указанным id.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|**id** |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id юрлица.|

> Пример запроса на обновление юрлица с указанным id.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/organization/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
  "name": "ОАО СветПром",
  "description": "юрлицо, делающее маленькую прибыль",
  "code": "666",
  "externalCode": "666АААА666",
  "archived": false,
  "trackingContractNumber": "12345678",
  "trackingContractDate": "2007-02-07 00:00:00",
  "legalTitle": "ООО Великое Свет Пром",
  "legalAddress": "г Москва ул Ленин д 42/685",
  "actualAddress": "г Пермь ул Сталина д 75",
  "inn": "87654321",
  "kpp": "15312532",
  "ogrn": "12345",
  "okpo": "12345",
  "email": "svetprom@mail.svet",
  "phone": "22222222",
  "fax": "bello123",
  "isEgaisEnable": true,
  "fsrarId": "1963703",
  "payerVat": true,
  "utmUrl": "10.250.110.81",
  "director": "Кипелова Александра",
  "chiefAccountant": "Подкупников Иван"
}'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON обновленного юрлица.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/4b9d5bec-0575-11e6-9464-e4de00000008",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
    "type": "organization",
    "mediaType": "application/json"
  },
  "id": "4b9d5bec-0575-11e6-9464-e4de00000008",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
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
  "updated": "2016-04-18 17:53:21",
  "name": "ОАО СветПром",
  "description": "юрлицо, делающее маленькую прибыль",
  "code": "666",
  "externalCode": "666АААА666",
  "archived": false,
  "trackingContractNumber": "12345678",
  "trackingContractDate": "2007-02-07 00:00:00",
  "legalTitle": "ООО Великое Свет Пром",
  "legalAddress": "г Москва ул Ленин д 42/685",
  "actualAddress": "г Пермь ул Сталина д 75",
  "inn": "87654321",
  "kpp": "15312532",
  "ogrn": "12345",
  "okpo": "12345",
  "email": "svetprom@mail.svet",
  "phone": "22222222",
  "fax": "bello123",
  "accounts": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/4b9d5bec-0575-11e6-9464-e4de00000008/accounts",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "account",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "isEgaisEnable": true,
  "fsrarId": "1963703",
  "payerVat": true,
  "utmUrl": "10.250.110.81"
}
```

> Пример запроса на обновление юрлица с указанным id.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/organization/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
  "name": "ОАО СветПром",
  "description": "юрлицо, делающее маленькую прибыль",
  "code": "666",
  "externalCode": "666АААА666",
  "archived": false,
  "trackingContractNumber": "12345678",
  "trackingContractDate": "2007-02-07 00:00:00",
  "legalTitle": "ООО Великое Свет Пром",
  "legalAddressFull": {
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
"actualAddressFull": {
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
  "apartment": "111",
  "addInfo": "addinfo",
  "comment": "some words about address"
},
  "inn": "87654321",
  "kpp": "15312532",
  "ogrn": "12345",
  "okpo": "12345",
  "email": "svetprom@mail.svet",
  "phone": "22222222",
  "fax": "bello123",
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "value": "Такая Строка"
    }
  ],
  "payerVat": false,
  "director": "Вздрыжженов Иван Валерьевич",
  "chiefAccountant": "Кулумбекова Василиса Иисмаиловна"
}'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON обновленного юрлица.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/bf182d24-12d7-11e6-9464-e4de00000012",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
    "type": "organization",
    "mediaType": "application/json"
  },
  "id": "bf182d24-12d7-11e6-9464-e4de00000012",
  "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
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
  "updated": "2016-05-05 18:40:51",
  "name": "ОАО СветГАЗКАМАЗПром",
  "description": "Новое юрлицо",
  "code": "666",
  "externalCode": "sfwafn22-124124sa",
  "archived": false,
  "trackingContractNumber": "12345678",
  "trackingContractDate": "2007-02-07 00:00:00",
  "created": "2007-02-07 17:16:41",
  "legalTitle": "ООО Великое Сообщество КАМАЗ ПРОМ",
  "legalAddress": "125009, Россия, г Москва, Москва, ул Тверская, 1, 123, addInfo",
  "legalAddressFull": {
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
  "actualAddress": "125009, Россия, г Москва, Москва, ул Тверская, 1, 111, addInfo",
  "actualAddressFull": {
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
    "apartment": "111",
    "addInfo": "addinfo",
    "comment": "some words about address"
  },
  "inn": "87654321",
  "kpp": "15312532",
  "ogrn": "12345",
  "okpo": "12345",
  "email": "svetpromgazkamaz@mail.svet",
  "phone": "22222222",
  "fax": "belwo123",
  "attributes": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata/attributes/0cd74e1e-2e59-11e6-8a84-bae50000008a",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "7f4a6b38-12bb-11e6-9464-e4de00000076",
      "name": "AttributeName1",
      "type": "string",
      "value": "Строковое значение"
    }
  ],
  "accounts": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/bf182d24-12d7-11e6-9464-e4de00000012/accounts",
      "type": "account",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "payerVat": false,
  "director": "Вздрыжженов Иван Валерьевич",
  "chiefAccountant": "Кулумбекова Василиса Иисмаиловна"
}
```

### Счета юрлица

### Получить список счетов юрлица 
Возвращает массив JSON представлений счетов юрлица.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|**id** |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id юрлица.|
|**limit** |  `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.|
|**offset** |  `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.|

> Получить список счетов юрлица

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/organization/7944ef04-f831-11e5-7a69-971500188b19/accounts"
  -H "Authorization: Basic <Credentials>"
```
 
> Response 200 (application/json)
Успешный запрос.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/4b9d5bec-0575-11e6-9464-e4de00000008/accounts",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
    "type": "account",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/4b9d5bec-0575-11e6-9464-e4de00000008/accounts/4b9d69b7-0575-11e6-9464-e4de00000009",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "account",
        "mediaType": "application/json"
      },
      "id": "4b9d69b7-0575-11e6-9464-e4de00000009",
      "accountId": "84e60e93-f504-11e5-8a84-bae500000008",
      "updated": "2016-04-18 17:53:21",
      "isDefault": true,
      "agent": {
        "meta": {
          "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/4b9d5bec-0575-11e6-9464-e4de00000008",
          "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      }
    }
  ]
}
```

### Изменить счета юрлица
#### Описание
Обновляются счета юрлица с указанным id.
Обновляются все поля, указанные в JSON объекте запроса, кроме
помеченных `Только для чтения` в описании [атрибутов счетов юрлица](../dictionaries/#suschnosti-jurlico-scheta-urlica).
Поля, которые не были указаны в JSON запроса, не изменяются.

**Параметры**

| Параметр                | Описание  |
| ------------------------------ |:---------------------------|
|**id** |  `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id юрлица.|

> Изменить счета юрлица

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/organization/7944ef04-f831-11e5-7a69-971500188b19/accounts"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/d955aa70-6703-11e7-9464-e4de00000051/accounts/d9560d0e-6703-11e7-9464-e4de00000052",
      "type": "account",
      "mediaType": "application/json"
    },
    "id": "d9560d0e-6703-11e7-9464-e4de00000052",
    "isDefault": false,
    "accountNumber": "1234567876543",
    "bankName": "\"ОАО Сбербm;анк\"",
    "bankLocation": "г Моl;;lсква",
    "correspondentAccount": "12314124jkjj2451",
    "bic": "21412hhhh4"
  },
  {
    "isDefault": false,
    "accountNumber": "1234567876543",
    "bankName": "\"ОАО БАНК\"",
    "bankLocation": "г Москва",
    "correspondentAccount": "12314124jkjj2451",
    "bic": "21412555554"
  }
]'  
```

> Response 200 (application/json)
Успешный запрос.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/d955aa70-6703-11e7-9464-e4de00000051/accounts/d9560d0e-6703-11e7-9464-e4de00000052",
      "type": "account",
      "mediaType": "application/json"
    },
    "id": "d9560d0e-6703-11e7-9464-e4de00000052",
    "accountId": "d8a2e973-6703-11e7-9464-e4de00000001",
    "updated": "2017-07-12 16:13:08",
    "isDefault": true,
    "accountNumber": "1234567876543",
    "bankName": "\"ОАО Сбербm;анк\"",
    "bankLocation": "г Моl;;lсква",
    "correspondentAccount": "12314124jkjj2451",
    "bic": "21412hhhh4"
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/d955aa70-6703-11e7-9464-e4de00000051/accounts/97fc6499-b96f-11e7-9464-e4de00000006",
      "type": "account",
      "mediaType": "application/json"
    },
    "id": "97fc6499-b96f-11e7-9464-e4de00000006",
    "accountId": "d8a2e973-6703-11e7-9464-e4de00000001",
    "updated": "2017-10-25 13:31:00",
    "isDefault": false,
    "accountNumber": "1234567876543",
    "bankName": "\"ОАО БАНК\"",
    "bankLocation": "г Москва",
    "correspondentAccount": "12314124jkjj2451",
    "bic": "21412555554"
  }
]
```
