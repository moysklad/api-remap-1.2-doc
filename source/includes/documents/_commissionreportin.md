## Полученный отчет комиссионера
Средствами JSON API можно создавать и обновлять сведения о Полученных отчетах комиссионера, запрашивать списки Полученных отчетов комиссионера и сведения по отдельным Полученным отчетам комиссионера. Позициями отчетов комиссионера можно управлять как в составе отдельного отчета, так и с помощью специальных ресурсов для управления позициями. Кодом сущности для Полученного отчета комиссионера в составе JSON API является ключевое слово **commissionreportin**. Больше об отчетах комиссионера и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по  [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203082686-%D0%9A%D0%BE%D0%BC%D0%B8%D1%81%D1%81%D0%B8%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F-%D1%82%D0%BE%D1%80%D0%B3%D0%BE%D0%B2%D0%BB%D1%8F-%D0%9A%D0%BE%D0%BC%D0%B8%D1%82%D0%B5%D0%BD%D1%82%D1%83).

### Полученные отчеты комиссионера
#### Атрибуты сущности

| Название                          | Тип                                                       | Фильтрация                                                                                                                                        | Описание                                                                                                                                                                                                                              |
|-----------------------------------|:----------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**                     | UUID                                                      | `=` `!=`                                                                                                                                          | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                  |
| **agent**                         | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Метаданные контрагента<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                                                                                                             |
| **agentAccount**                  | [Meta](#/general#3-metadannye) |                                                                                                                                                   | Метаданные счета контрагента<br>`+Expand`                                                                                                                                                                                             |
| **applicable**                    | Boolean                                                   | `=` `!=`                                                                                                                                          | Отметка о проведении<br>`+Обязательное при ответе`                                                                                                                                                                                    |
| **attributes**                    | Array(Object)                                             | [Операторы доп. полей](#/general#4-filtraciya-po-dopolnitelnym-polyam) | Коллекция метаданных доп. полей. [Поля объекта](#/general#3-rabota-s-dopolnitelnymi-polyami)                                                                                                               |
| **code**                          | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Код Полученного отчета комиссионера                                                                                                                                                                                                   |
| **commissionOverhead**            | Object                                                    |                                                                                                                                                   | Прочие расходы. [Подробнее тут](#/documents/commissionreportin#4-prochie-rashody). Если Позиции Отчета комиссионера не заданы, то расходы нельзя задать<br>`+Update-provider` |
| **commissionPeriodEnd**           | DateTime                                                  |                                                                                                                                                   | Конец периода<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                                                                                                                |
| **commissionPeriodStart**         | DateTime                                                  |                                                                                                                                                   | Начало периода<br>`+Обязательное при ответе` `+Необходимо при создании`                                                                                                                                                               |
| **commitentSum**                  | Float                                                     |                                                                                                                                                   | Сумма коммитента в установленной валюте<br>`+Только для чтения`                                                                                                                                                                       |
| **contract**                      | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Метаданные договора<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                                                                                                                |
| **created**                       | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата создания<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                      |
| **deleted**                       | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего удаления Полученного отчета комиссионера<br>`+Только для чтения`                                                                                                                                                    |
| **description**                   | String(4096)                                              | `=` `!=` `~` `~=` `=~`                                                                                                                            | Комментарий Полученного отчета комиссионера                                                                                                                                                                                           |
| **externalCode**                  | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Внешний код Полученного отчета комиссионера<br>`+Обязательное при ответе`                                                                                                                                                             |
| **files**                         | MetaArray                                                 |                                                                                                                                                   | Метаданные массива [Файлов](#/dictionaries/files#2-fajly) (Максимальное количество файлов - 100)<br>`+Обязательное при ответе` `+Expand`                                                                                         |
| **group**                         | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Отдел сотрудника<br>`+Обязательное при ответе` `+Expand`                                                                                                                                                                              |
| **id**                            | UUID                                                      | `=` `!=`                                                                                                                                          | ID Полученного отчета комиссионера<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                 |
| **meta**                          | [Meta](#/general#3-metadannye) |                                                                                                                                                   | Метаданные Полученного отчета комиссионера<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                         |
| **moment**                        | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Дата документа<br>`+Обязательное при ответе`                                                                                                                                                                                          |
| **name**                          | String(255)                                               | `=` `!=` `~` `~=` `=~`                                                                                                                            | Наименование Полученного отчета комиссионера<br>`+Обязательное при ответе`                                                                                                                                                            |
| **organization**                  | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Метаданные юрлица<br>`+Обязательное при ответе` `+Expand` `+Необходимо при создании`                                                                                                                                                  |
| **organizationAccount**           | [Meta](#/general#3-metadannye) |                                                                                                                                                   | Метаданные счета юрлица<br>`+Expand`                                                                                                                                                                                                  |
| **owner**                         | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Владелец (Сотрудник)<br>`+Expand`                                                                                                                                                                          |
| **payedSum**                      | Float                                                     |                                                                                                                                                   | Оплаченная сумма<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                   |
| **positions**                     | MetaArray                                                 |                                                                                                                                                   | Метаданные позиций реализовано комиссионером Полученного отчета комиссионера<br>`+Обязательное при ответе` `+Expand`                                                                                                                  |
| **printed**                       | Boolean                                                   | `=` `!=`                                                                                                                                          | Напечатан ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                              |
| **project**                       | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Метаданные проекта<br>`+Expand`                                                                                                                                                                                                       |
| **published**                     | Boolean                                                   | `=` `!=`                                                                                                                                          | Опубликован ли документ<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                            |
| **rate**                          | Object                                                    |                                                                                                                                                   | Валюта. [Подробнее тут](#/documents/common-info#3-valyuta-v-dokumentah)<br>`+Обязательное при ответе`                                                                                                                        |
| **returnToCommissionerPositions** | MetaArray                                                 |                                                                                                                                                   | Метаданные позиций возврата на склад комиссионера Полученного отчета комиссионера<br>`+Обязательное при ответе` `+Expand`                                                                                                             |
| **rewardPercent**                 | Int                                                       |                                                                                                                                                   | Процент вознаграждения (всегда 0 если вознаграждение не рассчитывается)                                                                                                                                                               |
| **rewardType**                    | String(255)                                               |                                                                                                                                                   | Тип вознаграждения                                                                                                                                                                                                                    |
| **salesChannel**                  | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Метаданные канала продаж<br>`+Expand`                                                                                                                                                                                                 |
| **shared**                        | Boolean                                                   | `=` `!=`                                                                                                                                          | Общий доступ<br>`+Обязательное при ответе`                                                                                                                                                                                            |
| **state**                         | [Meta](#/general#3-metadannye) | `=` `!=`                                                                                                                                          | Метаданные статуса Полученного отчета комиссионера<br>`+Expand`                                                                                                                                                                       |
| **sum**                           | Int                                                       | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Сумма Полученного отчета комиссионера в копейках<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                   |
| **syncId**                        | UUID                                                      | `=` `!=`                                                                                                                                          | ID синхронизации. После заполнения недоступен для изменения<br>`+Только для чтения`                                                                                                                                                   |
| **updated**                       | DateTime                                                  | `=` `!=` `<` `>` `<=` `>=`                                                                                                                        | Момент последнего обновления Полученного отчета комиссионера<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                       |
| **vatEnabled**                    | Boolean                                                   |                                                                                                                                                   | Учитывается ли НДС<br>`+Обязательное при ответе`                                                                                                                                                                                      |
| **vatIncluded**                   | Boolean                                                   |                                                                                                                                                   | Включен ли НДС в цену                                                                                                                                                                                                                 |
| **vatSum**                        | Float                                                     |                                                                                                                                                   | Сумма НДС<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                          |

#### Прочие расходы
Описание полей commissionOverhead:
<br>Поле **sum** может быть отрицательным.

| Название         | Тип  | Описание                                                                                                                    |
| ---------------- | :--- | :-------------------------------------------------------------------------------------------------------------------------- |
| **sum**          | Int  | Сумма в копейках<br>`+Обязательное при ответе` `+Update-provider`                                                                |

#### Связи с другими документами

| Название                       | Описание                                                                                                     |
| ------------------------------ | :----------------------------------------------------------------------------------------------------------- |
| **payments**                   | Массив ссылок на связанные платежи в формате [Метаданных](#/general#3-metadannye) |

#### Позиции Полученного отчета комиссионера
Позиции Полученного отчета комиссионера - это список товаров/модификаций/серий/комплектов.
С позициями можно работать с помощью специальных ресурсов для управления [позициями реализовано комиссионером](#/documents/commissionreportin#3-pozicii-realizovano-komissionerom) и
[позициями возврата на склад комиссионера](#/documents/commissionreportin#3-pozicii-vozvrata-na-sklad-komissionera),
а также в составе отдельного Полученного отчета комиссионера. При работе в составе отдельного Полученного отчета комиссионера,
вы можете отправлять запросы на создание Полученного отчета комиссионера с включенным в тело запроса
массивом реализованных позиций и позиций на возврат Полученного отчета комиссионера. Если количество позиций превышает максимально допустимое, то для
дальнейшего пополнения позиций нужно будет работать со специальным ресурсом "Реализованные позиции отчета комиссионера" и "Позиции на возврат отчета комиссионера".
Также, при работе в составе отдельного Полученного отчета комиссионера, можно отправлять запросы на обновление списка позиций
с включенным в тело запроса массивом позиций Полученного отчета комиссионера. При этом важно помнить, что коллекция позиций будет
восприниматься как "все позиции Полученного отчета комиссионера" и полностью заменит уже существующую коллекцию при обновлении объекта - лишние
позиции будут удалены, новые добавлены, существующие - изменены.

##### Объект позиции реализовано комиссионером содержит следующие поля:
Поле **reward** может быть отрицательным.

| Название       | Тип                             | Описание                                                                                                                                                                                                                              |
| -------------- |:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**  | UUID                            | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                  |
| **assortment** | [Meta](#/general#3-metadannye)  | Метаданные товара/серии/модификации/комплекта, которую представляет собой позиция<br>`+Обязательное при ответе` `+Expand`                                                                                                             |
| **id**         | UUID                            | ID позиции<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                         |
| **pack**       | Object                          | Упаковка Товара. [Подробнее тут](#/dictionaries/product#5-upakovki-tovara)                                                                                                                                                            |
| **price**      | Float                           | Цена товара в копейках<br>`+Обязательное при ответе`                                                                                                                                                                                  |
| **quantity**   | Float                           | Количество товаров данного вида в позиции.<br>`+Обязательное при ответе`                                                                                                                                                              |
| **reward**     | Float                           | Вознаграждение<br>`+Обязательное при ответе`                                                                                                                                                                                          |
| **vat**        | Int                             | НДС, которым облагается текущая позиция<br>`+Обязательное при ответе`                                                                                                                                                                 |
| **vatEnabled** | Boolean                         | Включен ли НДС для позиции. С помощью этого флага для позиции можно выставлять НДС = 0 или НДС = "без НДС". (vat = 0, vatEnabled = false) -> vat = "без НДС", (vat = 0, vatEnabled = true) -> vat = 0%.<br>`+Обязательное при ответе` |

##### Объект позиции возврата на склад комиссионера содержит следующие поля:

| Название       | Тип                             | Описание                                                                                                                                                                                                                              |
| -------------- |:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **accountId**  | UUID                            | ID учетной записи<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                  |
| **assortment** | [Meta](#/general#3-metadannye)  | Метаданные товара/серии/модификации/комплекта, которую представляет собой позиция<br>`+Обязательное при ответе` `+Expand`                                                                                                             |
| **id**         | UUID                            | ID позиции<br>`+Обязательное при ответе` `+Только для чтения`                                                                                                                                                                         |
| **price**      | Float                           | Цена товара в копейках<br>`+Обязательное при ответе`                                                                                                                                                                                  |
| **quantity**   | Float                           | Количество товаров данного вида в позиции.<br>`+Обязательное при ответе`                                                                                                                                                              |
| **reward**     | Float                           | Вознаграждение<br>`+Обязательное при ответе`                                                                                                                                                                                          |
| **vat**        | Int                             | НДС, которым облагается текущая позиция<br>`+Обязательное при ответе`                                                                                                                                                                 |
| **vatEnabled** | Boolean                         | Включен ли НДС для позиции. С помощью этого флага для позиции можно выставлять НДС = 0 или НДС = "без НДС". (vat = 0, vatEnabled = false) -> vat = "без НДС", (vat = 0, vatEnabled = true) -> vat = 0%.<br>`+Обязательное при ответе` |

### Получить отчеты комиссионера
Запрос всех Полученных отчетов комиссионера на учетной записи.

**Параметры**

| Параметр                       | Описание                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **limit**                      | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`.                                                                                                                                                                                                                                                     |
| **offset**                     | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                                                                                                                                                                                                                                                                     |
| **search**                     | `string` (optional) *Example: 0001* Фильтр документов по указанной поисковой строке.                                                                                                                                                                                                                                                                                                       |
| **incomingDate**               | `string` (optional) *Example: 2016-04-15 15:48:46* Параметр для фильтрации выборки по входящей дате. Подробнее про данный параметр можно посмотреть в разделе [Фильтрация выборки с помощью параметра filter](#/general#3-filtraciya-vyborki-s-pomoshyu-parametra-filter). Формат строки : `ГГГГ-ММ-ДД ЧЧ:ММ:СС[.ммм]`, Часовой пояс: `MSK` (Московское время) |

> Получить отчеты комиссионера

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Полученных отчетов комиссионера.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata",
    "type": "commissionreportin",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/392fb7a9-ab02-11e6-8a84-bae500000073",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata",
        "type": "commissionreportin",
        "mediaType": "application/json"
      },
      "id": "392fb7a9-ab02-11e6-8a84-bae500000073",
      "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-15 10:11:35",
      "name": "00001",
      "externalCode": "DfZi0N0mggqmVRt2hVf8t2",
      "moment": "2016-11-15 10:04:00",
      "applicable": true,
      "printed": true,
      "published": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "sum": 0,
      "contract": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/contract/92df2d9c-ab02-11e6-8a84-bae500000084",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/contract/metadata",
          "type": "contract",
          "mediaType": "application/json"
        }
      },
      "project": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
          "mediaType": "application/json"
        }
      },
      "agent": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/b942c396-9128-11e6-8a84-bae500000056",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "organizationAccount": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "positions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/392fb7a9-ab02-11e6-8a84-bae500000073/positions",
          "type": "commissionreportinposition",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "returnToCommissionerPositions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/392fb7a9-ab02-11e6-8a84-bae500000073/returntocommissionerpositions",
          "type": "commissionreportinreturnedposition",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "vatEnabled": true,
      "vatIncluded": true,
      "vatSum": 0,
      "commissionPeriodStart": "2016-11-09 10:07:00",
      "commissionPeriodEnd": "2016-11-09 10:07:00",
      "rewardType": "PercentOfSales",
      "rewardPercent": 0,
      "commitentSum": 0
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/6348c14c-ab39-11e6-8a84-bae500000064",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata",
        "type": "commissionreportin",
        "mediaType": "application/json"
      },
      "id": "6348c14c-ab39-11e6-8a84-bae500000064",
      "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
      "owner": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
          "type": "employee",
          "mediaType": "application/json"
        }
      },
      "shared": false,
      "group": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
          "type": "group",
          "mediaType": "application/json"
        }
      },
      "updated": "2016-11-17 17:10:23",
      "name": "00002",
      "externalCode": "ec21rBixjdrEm0CVkCiOJ0",
      "moment": "2016-11-15 14:19:00",
      "applicable": true,
      "printed": true,
      "published": true,
      "rate": {
        "currency": {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
            "type": "currency",
            "mediaType": "application/json"
          }
        }
      },
      "sum": 0,
      "contract": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/contract/92df2d9c-ab02-11e6-8a84-bae500000084",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/contract/metadata",
          "type": "contract",
          "mediaType": "application/json"
        }
      },
      "project": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
          "type": "project",
          "mediaType": "application/json"
        }
      },
      "agent": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/b942c396-9128-11e6-8a84-bae500000056",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
          "type": "counterparty",
          "mediaType": "application/json"
        }
      },
      "organization": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
          "type": "organization",
          "mediaType": "application/json"
        }
      },
      "organizationAccount": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
          "type": "account",
          "mediaType": "application/json"
        }
      },
      "positions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/6348c14c-ab39-11e6-8a84-bae500000064/positions",
          "type": "commissionreportinposition",
          "mediaType": "application/json",
          "size": 1,
          "limit": 1000,
          "offset": 0
        }
      },
      "returnToCommissionerPositions": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/6348c14c-ab39-11e6-8a84-bae500000064/returntocommissionerpositions",
          "type": "commissionreportinreturnedposition",
          "mediaType": "application/json",
          "size": 0,
          "limit": 1000,
          "offset": 0
        }
      },
      "vatEnabled": true,
      "vatIncluded": true,
      "vatSum": 0,
      "commissionPeriodStart": "2016-11-15 14:19:00",
      "commissionPeriodEnd": "2016-11-15 14:22:00",
      "rewardType": "None",
      "rewardPercent": 0,
      "commitentSum": 0,
      "payments": [
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/paymentin/e39851ec-ab43-11e6-8a84-bae50000007a",
            "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/paymentin/metadata",
            "type": "paymentin",
            "mediaType": "application/json"
          },
          "linkedSum": 0
        }
      ]
    }
  ]
}

```

### Создать Полученный отчет комиссионера
Запрос на создание нового Полученного отчета комиссионера.
Обязательные для создания поля:

+ **agent** - контрагент
+ **contract** - договор
+ **organization** - юрлицо
+ **commissionPeriodStart** - начало периода
+ **commissionPeriodEnd** - конец периода
+ **organizationAccount** - счет юрлица (если у юрлица несколько счетов)
+ **agentAccount** - счет контрагента (если у контрагента несколько счетов)

При указании поля **contract** важно:

+ Чтобы договор был заключен с указанным в поле **agent** контрагентом
+ Договор имел тип "Договор комиссии"

> Пример создания нового Полученного отчета комиссионера.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "owner": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                "type": "employee",
                "mediaType": "application/json"
              }
            },
            "shared": false,
            "group": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
                "type": "group",
                "mediaType": "application/json"
              }
            },
            "name": "3335551",
            "externalCode": "extCod1",
            "moment": "2016-12-16 11:22:33",
            "applicable": true,
            "sum": 0,
            "contract": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/contract/92df2d9c-ab02-11e6-8a84-bae500000084",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/contract/metadata",
                "type": "contract",
                "mediaType": "application/json"
              }
            },
            "project": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
                "type": "project",
                "mediaType": "application/json"
              }
            },
            "agent": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/b942c396-9128-11e6-8a84-bae500000056",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "counterparty",
                "mediaType": "application/json"
              }
            },
            "organization": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "organizationAccount": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
                "type": "account",
                "mediaType": "application/json"
              }
            },
            "positions": [
              {
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/36eb1628-912b-11e6-8a84-bae500000124",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                    "type": "variant",
                    "mediaType": "application/json"
                  }
                },
                "quantity": 2,
                "price": 132.05,
                "vat": 10,
                "reward": 123
              },
              {
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                    "type": "variant",
                    "mediaType": "application/json"
                  }
                },
                "quantity": 15,
                "price": 99.99,
                "vat": 0,
                "reward": 100
              }
            ],
            "attributes": [
              {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a123-acda-11e6-8a84-bae50000006d",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "value"
              },
              {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a9c5-acda-11e6-8a84-bae50000006e",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "values"
              }
            ],
            "vatEnabled": true,
            "vatIncluded": true,
            "vatSum": 0,
            "commissionPeriodStart": "2016-11-01 10:07:00",
            "commissionPeriodEnd": "2016-11-29 10:07:00",
            "rewardType": "PercentOfSales",
            "rewardPercent": 15
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Полученного отчета комиссионера.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/cc5beac8-acdb-11e6-8a84-bae500000000",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata",
    "type": "commissionreportin",
    "mediaType": "application/json"
  },
  "id": "cc5beac8-acdb-11e6-8a84-bae500000000",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-17 18:37:50",
  "name": "3335551",
  "externalCode": "extCod1",
  "moment": "2016-12-16 11:22:33",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 1764,
  "contract": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/contract/92df2d9c-ab02-11e6-8a84-bae500000084",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/contract/metadata",
      "type": "contract",
      "mediaType": "application/json"
    }
  },
  "project": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/b942c396-9128-11e6-8a84-bae500000056",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a123-acda-11e6-8a84-bae50000006d",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "4930a123-acda-11e6-8a84-bae50000006d",
      "name": "AttributeName1",
      "type": "string",
      "value": "value"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a9c5-acda-11e6-8a84-bae50000006e",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "4930a9c5-acda-11e6-8a84-bae50000006e",
      "name": "AttributeName2",
      "type": "string",
      "value": "values"
    }
  ],
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/cc5beac8-acdb-11e6-8a84-bae500000000/positions",
      "type": "commissionreportinposition",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "returnToCommissionerPositions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/cc5beac8-acdb-11e6-8a84-bae500000000/returntocommissionerpositions",
      "type": "commissionreportinreturnedposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "vatEnabled": true,
  "vatIncluded": true,
  "vatSum": 24,
  "commissionPeriodStart": "2016-11-01 10:07:00",
  "commissionPeriodEnd": "2016-11-29 10:07:00",
  "rewardType": "PercentOfSales",
  "rewardPercent": 15,
  "commitentSum": 1499
}
```

### Массовое создание и обновление Полученных отчетов комиссионера
[Массовое создание и обновление](#/general#3-sozdanie-i-obnovlenie-neskolkih-obuektov) Полученных отчетов комиссионера.
В теле запроса нужно передать массив, содержащий JSON представления Полученных отчетов комиссионера, которые вы хотите создать или обновить.
Обновляемые Полученные отчеты комиссионера должны содержать идентификатор в виде метаданных.

> Пример создания и обновления нескольких Полученных отчетов комиссионера

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '[
            {
              "owner": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
                  "type": "employee",
                  "mediaType": "application/json"
                }
              },
              "shared": false,
              "group": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
                  "type": "group",
                  "mediaType": "application/json"
                }
              },
              "name": "3335551",
              "externalCode": "extCod1",
              "moment": "2016-12-16 11:22:33",
              "applicable": true,
              "sum": 0,
              "contract": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/contract/92df2d9c-ab02-11e6-8a84-bae500000084",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/contract/metadata",
                  "type": "contract",
                  "mediaType": "application/json"
                }
              },
              "project": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
                  "type": "project",
                  "mediaType": "application/json"
                }
              },
              "agent": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/b942c396-9128-11e6-8a84-bae500000056",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                  "type": "counterparty",
                  "mediaType": "application/json"
                }
              },
              "organization": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "organizationAccount": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
                  "type": "account",
                  "mediaType": "application/json"
                }
              },
              "positions": [
                {
                  "assortment": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/36eb1628-912b-11e6-8a84-bae500000124",
                      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                      "type": "variant",
                      "mediaType": "application/json"
                    }
                  },
                  "quantity": 2,
                  "price": 132.05,
                  "vat": 10,
                  "reward": 123
                },
                {
                  "assortment": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
                      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                      "type": "variant",
                      "mediaType": "application/json"
                    }
                  },
                  "quantity": 15,
                  "price": 99.99,
                  "vat": 0,
                  "reward": 100
                }
              ],
              "attributes": [
                {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a123-acda-11e6-8a84-bae50000006d",
                    "type": "attributemetadata",
                    "mediaType": "application/json"
                  },
                  "value": "value"
                },
                {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a9c5-acda-11e6-8a84-bae50000006e",
                    "type": "attributemetadata",
                    "mediaType": "application/json"
                  },
                  "value": "values"
                }
              ],
              "vatEnabled": true,
              "vatIncluded": true,
              "vatSum": 0,
              "commissionPeriodStart": "2016-11-01 10:07:00",
              "commissionPeriodEnd": "2016-11-29 10:07:00",
              "rewardType": "PercentOfSales",
              "rewardPercent": 15
            },
            {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/cc5beac8-acdb-11e6-8a84-bae500000000",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata",
                "type": "commissionreportin",
                "mediaType": "application/json"
              },
              "externalCode": "extCod1",
              "moment": "2016-12-16 11:22:33",
              "applicable": true,
              "sum": 0,
              "contract": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/contract/92df2d9c-ab02-11e6-8a84-bae500000084",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/contract/metadata",
                  "type": "contract",
                  "mediaType": "application/json"
                }
              },
              "project": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
                  "type": "project",
                  "mediaType": "application/json"
                }
              },
              "agent": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/b942c396-9128-11e6-8a84-bae500000056",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                  "type": "counterparty",
                  "mediaType": "application/json"
                }
              },
              "organization": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                  "type": "organization",
                  "mediaType": "application/json"
                }
              },
              "organizationAccount": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
                  "type": "account",
                  "mediaType": "application/json"
                }
              },
              "positions": [
                {
                  "assortment": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/36eb1628-912b-11e6-8a84-bae500000124",
                      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                      "type": "variant",
                      "mediaType": "application/json"
                    }
                  },
                  "quantity": 12,
                  "price": 132.05,
                  "vat": 10,
                  "reward": 123
                },
                {
                  "assortment": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
                      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                      "type": "variant",
                      "mediaType": "application/json"
                    }
                  },
                  "quantity": 15,
                  "price": 99.399,
                  "vat": 0,
                  "reward": 100
                }
              ],
              "returnToCommissionerPositions": [
                {
                  "assortment": {
                    "meta": {
                      "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
                      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                      "type": "variant",
                      "mediaType": "application/json"
                    }
                  },
                  "quantity": 1,
                  "price": 99.399,
                  "vat": 0,
                  "reward": 100
                }
              ],
              "attributes": [
                {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a123-acda-11e6-8a84-bae50000006d",
                    "type": "attributemetadata",
                    "mediaType": "application/json"
                  },
                  "value": "Newvalue"
                }
              ],
              "vatEnabled": true,
              "vatIncluded": true,
              "vatSum": 0,
              "commissionPeriodStart": "2016-11-01 10:07:00",
              "commissionPeriodEnd": "2016-12-29 10:07:00",
              "rewardType": "PercentOfSales",
              "rewardPercent": 12
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Полученных отчетов комиссионера.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/cc5beac8-acdb-11e6-8a84-bae500000000",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata",
      "type": "commissionreportin",
      "mediaType": "application/json"
    },
    "id": "cc5beac8-acdb-11e6-8a84-bae500000000",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-11-17 18:37:50",
    "name": "3335551",
    "externalCode": "extCod1",
    "moment": "2016-12-16 11:22:33",
    "applicable": true,
    "rate": {
      "currency": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    },
    "sum": 1764,
    "contract": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/contract/92df2d9c-ab02-11e6-8a84-bae500000084",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/contract/metadata",
        "type": "contract",
        "mediaType": "application/json"
      }
    },
    "project": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
        "type": "project",
        "mediaType": "application/json"
      }
    },
    "agent": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/b942c396-9128-11e6-8a84-bae500000056",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "organization": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "organizationAccount": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "attributes": [
      {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a123-acda-11e6-8a84-bae50000006d",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "4930a123-acda-11e6-8a84-bae50000006d",
        "name": "AttributeName1",
        "type": "string",
        "value": "value"
      },
      {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a9c5-acda-11e6-8a84-bae50000006e",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "4930a9c5-acda-11e6-8a84-bae50000006e",
        "name": "AttributeName2",
        "type": "string",
        "value": "values"
      }
    ],
    "created": "2007-02-07 17:16:41",
    "printed": true,
    "published": true,
    "positions": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/cc5beac8-acdb-11e6-8a84-bae500000000/positions",
        "type": "commissionreportinposition",
        "mediaType": "application/json",
        "size": 2,
        "limit": 1000,
        "offset": 0
      }
    },
    "returnToCommissionerPositions": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/cc5beac8-acdb-11e6-8a84-bae500000000/returntocommissionerpositions",
        "type": "commissionreportinreturnedposition",
        "mediaType": "application/json",
        "size": 0,
        "limit": 1000,
        "offset": 0
      }
    },
    "vatEnabled": true,
    "vatIncluded": true,
    "vatSum": 24,
    "commissionPeriodStart": "2016-11-01 10:07:00",
    "commissionPeriodEnd": "2016-11-29 10:07:00",
    "rewardType": "PercentOfSales",
    "rewardPercent": 15,
    "commitentSum": 1499
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/cc5beac8-acdb-11e6-8a84-bae500000000",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata",
      "type": "commissionreportin",
      "mediaType": "application/json"
    },
    "id": "cc5beac8-acdb-11e6-8a84-bae500000000",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "owner": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    },
    "shared": false,
    "group": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
        "type": "group",
        "mediaType": "application/json"
      }
    },
    "updated": "2016-11-17 20:11:40",
    "name": "3335551",
    "externalCode": "extCod1",
    "moment": "2016-12-16 11:22:33",
    "applicable": true,
    "rate": {
      "currency": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
          "type": "currency",
          "mediaType": "application/json"
        }
      }
    },
    "sum": 3069,
    "contract": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/contract/92df2d9c-ab02-11e6-8a84-bae500000084",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/contract/metadata",
        "type": "contract",
        "mediaType": "application/json"
      }
    },
    "project": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
        "type": "project",
        "mediaType": "application/json"
      }
    },
    "agent": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/b942c396-9128-11e6-8a84-bae500000056",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
        "type": "counterparty",
        "mediaType": "application/json"
      }
    },
    "organization": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
        "type": "organization",
        "mediaType": "application/json"
      }
    },
    "organizationAccount": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
        "type": "account",
        "mediaType": "application/json"
      }
    },
    "state": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/states/40ca02eb-acda-11e6-8a84-bae500000069",
        "type": "state",
        "mediaType": "application/json"
      }
    },
    "attributes": [
      {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a123-acda-11e6-8a84-bae50000006d",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "4930a123-acda-11e6-8a84-bae50000006d",
        "name": "AttributeName3",
        "type": "string",
        "value": "Newvalue"
      },
      {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a9c5-acda-11e6-8a84-bae50000006e",
          "type": "attributemetadata",
          "mediaType": "application/json"
        },
        "id": "4930a9c5-acda-11e6-8a84-bae50000006e",
        "name": "AttributeName2",
        "type": "string",
        "value": "values"
      }
    ],
    "created": "2007-02-07 17:16:41",
    "printed": true,
    "published": true,
    "positions": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/cc5beac8-acdb-11e6-8a84-bae500000000/positions",
        "type": "commissionreportinposition",
        "mediaType": "application/json",
        "size": 2,
        "limit": 1000,
        "offset": 0
      }
    },
    "returnToCommissionerPositions": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/cc5beac8-acdb-11e6-8a84-bae500000000/returntocommissionerpositions",
        "type": "commissionreportinreturnedposition",
        "mediaType": "application/json",
        "size": 1,
        "limit": 1000,
        "offset": 0
      }
    },
    "vatEnabled": true,
    "vatIncluded": true,
    "vatSum": 144,
    "commissionPeriodStart": "2016-11-01 10:07:00",
    "commissionPeriodEnd": "2016-12-29 10:07:00",
    "rewardType": "PercentOfSales",
    "rewardPercent": 12,
    "commitentSum": 2701
  }
]
```

### Удалить Полученный отчет комиссионера

**Параметры**

| Параметр | Описание                                                                                                |
| :------- | :------------------------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Полученного отчета комиссионера. |

> Запрос на удаление Полученного отчета комиссионера с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление Полученного отчета комиссионера.

### Массовое удаление Полученных отчетов комиссионера

В теле запроса нужно передать массив, содержащий JSON метаданных Полученных отчетов комиссионера, которые вы хотите удалить.


> Запрос на массовое удаление Полученных отчетов комиссионера. 

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
  -d '[
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b1",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata",
                "type": "commissionreportin",
                "mediaType": "application/json"
            }
        },
        {
            "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b2",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata",
                "type": "commissionreportin",
                "mediaType": "application/json"
            }
        }
      ]'
```        

> Успешный запрос. Результат - JSON информация об удалении Полученных отчетов комиссионера.

```json
[
  {
    "info":"Сущность 'commissionreportin' с UUID: 7944ef04-f831-11e5-7a69-971500188b1 успешно удалена"
  },
  {
    "info":"Сущность 'commissionreportin' с UUID: 7944ef04-f831-11e5-7a69-971500188b2 успешно удалена"
  }
]
``` 

### Метаданные Полученного отчета
Запрос на получение метаданных отчетов комиссионера. Результат - объект JSON, включающий в себя:

| Параметр                       | Описание                                                                                                                |
| ------------------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| **meta**                       | Ссылка на метаданные отчетов комиссионера                                                                               |
| **attributes**                 | Массив объектов доп. полей отчетов комиссионера формате [Метаданных](#/general#3-metadannye) |
| **states**                     | Массив статусов отчетов комиссионера                                                                                    |
| **createShared**               | создавать новые отчеты комиссионера с меткой "Общий"                                                                    |

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](#/general#3-rabota-s-dopolnitelnymi-polyami).

> Метаданные Полученного отчета

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление метаданных Полученного отчета комиссионера.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata",
    "mediaType": "application/json"
  },
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a123-acda-11e6-8a84-bae50000006d",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "4930a123-acda-11e6-8a84-bae50000006d",
      "name": "AttributeName1",
      "type": "string",
      "required": false
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a9c5-acda-11e6-8a84-bae50000006e",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "4930a9c5-acda-11e6-8a84-bae50000006e",
      "name": "AttributeName2",
      "type": "string",
      "required": false
    }
  ],
  "states": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/states/40ca02eb-acda-11e6-8a84-bae500000069",
        "type": "state",
        "mediaType": "application/json"
      },
      "id": "40ca02eb-acda-11e6-8a84-bae500000069",
      "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
      "name": "Статус",
      "color": 10066329,
      "stateType": "Regular",
      "entityType": "commissionreportin"
    }
  ],
  "createShared": false
}

```

### Отдельное доп. поле

**Параметры**

| Параметр | Описание                                                                          |
| :------- | :-------------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Доп. поля. |
 
> Запрос на получение информации по отдельному дополнительному полю.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a123-acda-11e6-8a84-bae50000006d",
    "type": "attributemetadata",
    "mediaType": "application/json"
  },
  "id": "4930a123-acda-11e6-8a84-bae50000006d",
  "name": "AttributeName1",
  "type": "string",
  "required": false
}
```

### Запросы - Полученный отчет комиссионера
 
### Получить отчет комиссионера

**Параметры**

| Параметр | Описание                                                                                                |
| :------- | :------------------------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Полученного отчета комиссионера. |
 
> Запрос на Получение отдельного отчета комиссионера с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Полученного отчета комиссионера.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata",
    "type": "commissionreportin",
    "mediaType": "application/json"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b19",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-15 10:11:35",
  "name": "00001",
  "externalCode": "DfZi0N0mggqmVRt2hVf8t2",
  "moment": "2016-11-15 10:04:00",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 0,
  "contract": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/contract/92df2d9c-ab02-11e6-8a84-bae500000084",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/contract/metadata",
      "type": "contract",
      "mediaType": "application/json"
    }
  },
  "project": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/b942c396-9128-11e6-8a84-bae500000056",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/positions",
      "type": "commissionreportinposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "returnToCommissionerPositions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/returnToCommissionerPositions",
      "type": "commissionreportinreturnedposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "vatEnabled": true,
  "vatIncluded": true,
  "vatSum": 0,
  "commissionPeriodStart": "2016-11-09 10:07:00",
  "commissionPeriodEnd": "2016-11-09 10:07:00",
  "rewardType": "PercentOfSales",
  "rewardPercent": 0,
  "commitentSum": 0
}

```

### Изменить Полученный отчет комиссионера 
Запрос на обновление Полученного отчета комиссионера с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Полученного отчета комиссионера, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Полученного отчета комиссионера](#/documents/commissionreportin#2-poluchennyj-otchet-komissionera).
При обновлении полей **organization** и **agent** нужно также обновить поля **organizationAccount** и
**agentAccount** соответственно, иначе произойдет ошибка.

<br>При указании поля **contract** важно:

+ Чтобы договор был заключен с указанным в поле **agent** контрагентом
+ Договор имел тип "Договор комиссии"

**Параметры**

| Параметр | Описание                                                                                                |
| :------- | :------------------------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Полученного отчета комиссионера. |

> Пример запроса на обновление отдельного отчета комиссионера.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "externalCode": "extCod1",
            "moment": "2016-12-16 11:22:33",
            "applicable": true,
            "sum": 0,
            "contract": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/contract/92df2d9c-ab02-11e6-8a84-bae500000084",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/contract/metadata",
                "type": "contract",
                "mediaType": "application/json"
              }
            },
            "project": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
                "type": "project",
                "mediaType": "application/json"
              }
            },
            "agent": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/b942c396-9128-11e6-8a84-bae500000056",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
                "type": "counterparty",
                "mediaType": "application/json"
              }
            },
            "organization": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
                "type": "organization",
                "mediaType": "application/json"
              }
            },
            "organizationAccount": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
                "type": "account",
                "mediaType": "application/json"
              }
            },
            "positions": [
              {
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/36eb1628-912b-11e6-8a84-bae500000124",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                    "type": "variant",
                    "mediaType": "application/json"
                  }
                },
                "quantity": 12,
                "price": 132.05,
                "vat": 10,
                "reward": 123
              },
              {
                "assortment": {
                  "meta": {
                    "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
                    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                    "type": "variant",
                    "mediaType": "application/json"
                  }
                },
                "quantity": 15,
                "price": 99.399,
                "vat": 0,
                "reward": 100
              }
            ],
            "attributes": [
              {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a123-acda-11e6-8a84-bae50000006d",
                  "type": "attributemetadata",
                  "mediaType": "application/json"
                },
                "value": "Newvalue"
              }
            ],
            "vatEnabled": true,
            "vatIncluded": true,
            "vatSum": 0,
            "commissionPeriodStart": "2016-11-01 10:07:00",
            "commissionPeriodEnd": "2016-12-29 10:07:00",
            "rewardType": "PercentOfSales",
            "rewardPercent": 12
          }
'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного отчета комиссионера.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19",
    "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata",
    "type": "commissionreportin",
    "mediaType": "application/json"
  },
  "id": "7944ef04-f831-11e5-7a69-971500188b19",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-17 20:11:40",
  "name": "3335551",
  "externalCode": "extCod1",
  "moment": "2016-12-16 11:22:33",
  "applicable": true,
  "rate": {
    "currency": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/currency/baac25f0-50ac-11e5-300d-c79b00000055",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json"
      }
    }
  },
  "sum": 3069,
  "contract": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/contract/92df2d9c-ab02-11e6-8a84-bae500000084",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/contract/metadata",
      "type": "contract",
      "mediaType": "application/json"
    }
  },
  "project": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/b942c396-9128-11e6-8a84-bae500000056",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/states/40ca02eb-acda-11e6-8a84-bae500000069",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "attributes": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a123-acda-11e6-8a84-bae50000006d",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "4930a123-acda-11e6-8a84-bae50000006d",
      "name": "AttributeName1",
      "type": "string",
      "value": "Newvalue"
    },
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata/attributes/4930a9c5-acda-11e6-8a84-bae50000006e",
        "type": "attributemetadata",
        "mediaType": "application/json"
      },
      "id": "4930a9c5-acda-11e6-8a84-bae50000006e",
      "name": "AttributeName2",
      "type": "string",
      "value": "values"
    }
  ],
  "created": "2007-02-07 17:16:41",
  "printed": true,
  "published": true,
  "positions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/positions",
      "type": "commissionreportinposition",
      "mediaType": "application/json",
      "size": 2,
      "limit": 1000,
      "offset": 0
    }
  },
  "returnToCommissionerPositions": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/returnToCommissionerPositions",
      "type": "commissionreportinreturnedposition",
      "mediaType": "application/json",
      "size": 0,
      "limit": 1000,
      "offset": 0
    }
  },
  "vatEnabled": true,
  "vatIncluded": true,
  "vatSum": 144,
  "commissionPeriodStart": "2016-11-01 10:07:00",
  "commissionPeriodEnd": "2016-12-29 10:07:00",
  "rewardType": "PercentOfSales",
  "rewardPercent": 12,
  "commitentSum": 2701
}
```

### Позиции реализовано комиссионером 
Отдельный ресурс для управления позициями реализовано комиссионером Полученного отчета комиссионера. С его помощью вы можете управлять позициями большого документа, 
количество строк в котором превышает лимит на количество строк, сохраняемых вместе с документом. Этот лимит равен 1000. 
Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](#/general#3-rabota-s-poziciyami-dokumentov).

### Получить позиции реализовано комиссионером
Запрос на получение списка всех позиций данного Полученного отчета комиссионера.

**Параметры**

| Параметр   | Описание                                                                                                                               |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Полученного отчета комиссионера.                                |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить позиции реализовано комиссионером

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/positions"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка реализованных позиций отдельного отчета комиссионера.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/positions",
    "type": "commissionreportinposition",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/positions/94aef79a-accf-11e6-8a84-bae500000064",
        "type": "commissionreportinposition",
        "mediaType": "application/json"
      },
      "id": "94aef79a-accf-11e6-8a84-bae500000064",
      "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
      "quantity": 1,
      "price": 0.0,
      "vat": 0,
      "vatEnabled": false,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/ca976541-96d1-11e6-8a84-bae50000002e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3c6dc9b8-2842-11e9-ac12-000c00000071"
        }
      },
      "reward": 0
    }
  ]
}
```

### Получить позицию реализовано комиссионером

**Параметры**

| Параметр       | Описание                                                                                                                                  |
| :------------- |:------------------------------------------------------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Полученного отчета комиссионера.                                   |
| **positionID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции реализовано комиссионером Полученного отчета комиссионера. |

> Запрос на получение отдельной позиции реализовано комиссионером с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции реализовано комиссионером.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
    "type": "commissionreportinposition",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "quantity": 1,
  "price": 0.0,
  "vat": 0,
  "vatEnabled": false,
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/ca976541-96d1-11e6-8a84-bae50000002e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3c6dc9b8-2842-11e9-ac12-000c00000071"
    }
  },
  "reward": 0
}
```

### Создать позицию реализовано комиссионером
Для успешного создания необходимо в теле запроса указать следующие поля:

+ **assortment** - Ссылка на товар/серию/модификацию/комплект, которую представляет собой позиция.
  Подробнее об этом поле можно прочитать в описании [позиции отчета комиссионера](#/documents/commissionreportin#4-pozicii-poluchennogo-otcheta-komissionera)
+ **quantity** - Количество указанной позиции. Должно быть положительным, иначе возникнет ошибка.
  Одновременно можно создать как одну, так и несколько позиций отчета комиссионера. Все созданные данным запросом позиции
  будут добавлены к уже существующим.

**Параметры**

| Параметр | Описание                                                                                                |
| :------- | :------------------------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Полученного отчета комиссионера. |

> Пример создания одной позиции реализовано комиссионером в Полученном отчете комиссионера.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/positions"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '[
            {
              "quantity": 2,
              "price": 1300.0,
              "vat": 0,
              "assortment": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                  "type": "variant",
                  "mediaType": "application/json"
                }
              },
              "reward": 12
            },
            {
              "quantity": 15,
              "price": 1020.0,
              "vat": 0,
              "assortment": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                  "type": "variant",
                  "mediaType": "application/json"
                }
              },
              "reward": 22
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной позиции отдельного отчета комиссионера.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/positions/a7a61c8b-acdd-11e6-8a84-bae500000000",
      "type": "commissionreportinposition",
      "mediaType": "application/json"
    },
    "id": "a7a61c8b-acdd-11e6-8a84-bae500000000",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "quantity": 2,
    "price": 1300.0,
    "vat": 0,
    "vatEnabled": false,
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=3c6dc9b8-2842-11e9-ac12-000c00000071"
      }
    },
    "reward": 12
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/positions/a7a6c749-acdd-11e6-8a84-bae500000001",
      "type": "commissionreportinposition",
      "mediaType": "application/json"
    },
    "id": "a7a6c749-acdd-11e6-8a84-bae500000001",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "quantity": 15,
    "price": 1020.0,
    "vat": 0,
    "vatEnabled": false,
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=e639e90c-2a99-11e9-ac12-000c0000003e"
      }
    },
    "reward": 22
  }
]
```

### Изменить позицию реализовано комиссионером
Для обновления позиции нет каких-либо обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

| Параметр       | Описание                                                                                                                                  |
| :------------- |:------------------------------------------------------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Полученного отчета комиссионера.                                   |
| **positionID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции реализовано комиссионером Полученного отчета комиссионера. |

> Пример запроса на обновление отдельной позиции реализовано комиссионером в Полученном отчете комиссионера.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "quantity": 14,
            "price": 1301.0,
            "vat": 10,
            "assortment": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                "type": "variant",
                "mediaType": "application/json"
              }
            },
            "reward": 0
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции реализовано комиссионером.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/positions/34f6344f-015e-11e6-9464-e4de0000006c",
    "type": "commissionreportinposition",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "quantity": 14,
  "price": 1301.0,
  "vat": 10,
  "vatEnabled": true,
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
      "type": "variant",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=3c6dc9b8-2842-11e9-ac12-000c00000071"
    }
  },
  "reward": 0
}
```

### Удалить позицию реализовано комиссионером

**Параметры**

| Параметр       | Описание                                                                                                                                  |
| :------------- |:------------------------------------------------------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Полученного отчета комиссионера.                                   |
| **positionID** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id позиции реализовано комиссионером Полученного отчета комиссионера. |

> Запрос на удаление позиции реализовано комиссионером с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/positions/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление позиции реализовано комиссионером.

### Массовое удаление позиций реализовано комиссионером

**Параметры**

| Параметр       | Описание                                                                                                |
| :------------- |:--------------------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 3e1c03bb-684f-11ee-ac12-000c000000b0* id Полученного отчета комиссионера. |

> Запрос на массовое удаление позиций реализовано комиссионером.

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/3e1c03bb-684f-11ee-ac12-000c000000b0/positions/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/3e1c03bb-684f-11ee-ac12-000c000000b0/positions/7fce2da5-684d-11ee-ac12-000c000000a2",
            "type": "commissionreportinposition",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/3e1c03bb-684f-11ee-ac12-000c000000b0/positions/7fce37a5-684d-11ee-ac12-000c000000a3",
            "type": "commissionreportinposition",
            "mediaType": "application/json"
          }
        }
      ]'  
```

> Response 200 (application/json)
Успешное удаление позиций реализовано комиссионером.

### Позиции возврата на склад комиссионера
Отдельный ресурс для управления позициями возврата на склад комиссионера в Полученном отчете комиссионера. С его помощью вы можете управлять позициями большого документа,
количество строк в котором превышает лимит на количество строк, сохраняемых вместе с документом. Этот лимит равен 1000.
Более подробно о лимитах на количество строк документа и работе с большими документами можно прочитать [тут](#/general#3-rabota-s-poziciyami-dokumentov).

### Получить позиции возврата на склад комиссионера
Запрос на получение списка всех позиций возврата на склад комиссионера данного Полученного отчета комиссионера.

**Параметры**

| Параметр   | Описание                                                                                                                               |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| **id**     | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Полученного отчета комиссионера.                                |
| **limit**  | `number` (optional) **Default: 1000** *Example: 1000* Максимальное количество сущностей для извлечения.`Допустимые значения 1 - 1000`. |
| **offset** | `number` (optional) **Default: 0** *Example: 40* Отступ в выдаваемом списке сущностей.                                                 |

> Получить позиции возврата на склад комиссионера

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/returntocommissionerpositions"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка позиций возврата на склад отдельного отчета комиссионера.

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
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/returntocommissionerpositions",
    "type": "commissionreportinreturnedposition",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/returntocommissionerpositions/94aef79a-accf-11e6-8a84-bae500000064",
        "type": "commissionreportinreturnedposition",
        "mediaType": "application/json"
      },
      "id": "94aef79a-accf-11e6-8a84-bae500000064",
      "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
      "quantity": 1,
      "price": 0.0,
      "vat": 0,
      "vatEnabled": false,
      "assortment": {
        "meta": {
          "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/ca976541-96d1-11e6-8a84-bae50000002e",
          "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
          "type": "product",
          "mediaType": "application/json",
          "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3c6dc9b8-2842-11e9-ac12-000c00000071"
        }
      },
      "reward": 0
    }
  ]
}
```

### Получить позицию возврата на склад комиссионера

**Параметры**

| Параметр       | Описание                                                                                                                                  |
| :------------- |:------------------------------------------------------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Полученного отчета комиссионера.                                   |
| **positionID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции возврата на склад комиссионера Полученного отчета комиссионера. |

> Запрос на получение отдельной позиции возврата на склад комиссионера с указанным id.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/returntocommissionerpositions/34f6344f-015e-11e6-9464-e4de0000006c"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельной позиции возврата на склад комиссионера.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/returntocommissionerpositions/34f6344f-015e-11e6-9464-e4de0000006c",
    "type": "commissionreportinreturnedposition",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "quantity": 1,
  "price": 0.0,
  "vat": 0,
  "vatEnabled": false,
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/product/ca976541-96d1-11e6-8a84-bae50000002e",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/product/metadata",
      "type": "product",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#good/edit?id=3c6dc9b8-2842-11e9-ac12-000c00000071"
    }
  },
  "reward": 0
}
```

### Создать позицию возврата на склад комиссионера
Для успешного создания необходимо в теле запроса указать следующие поля:

+ **assortment** - Ссылка на товар/серию/модификацию/комплект, которую представляет собой позиция.
  Подробнее об этом поле можно прочитать в описании [позиции отчета комиссионера](#/documents/commissionreportin#4-pozicii-poluchennogo-otcheta-komissionera)
+ **quantity** - Количество указанной позиции. Должно быть положительным, иначе возникнет ошибка.
  Одновременно можно создать как одну, так и несколько позиций отчета комиссионера. Все созданные данным запросом позиции
  будут добавлены к уже существующим.

**Параметры**

| Параметр | Описание                                                                                                |
| :------- | :------------------------------------------------------------------------------------------------------ |
| **id**   | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Полученного отчета комиссионера. |

> Пример создания одной позиции возврата на склад комиссионера в Полученном отчете комиссионера.

```shell
  curl -X POST
    "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/returntocommissionerpositions"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '[
            {
              "quantity": 15,
              "price": 1300.0,
              "vat": 0,
              "assortment": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                  "type": "variant",
                  "mediaType": "application/json"
                }
              },
              "reward": 225
            },
            {
              "quantity": 15,
              "price": 1020.0,
              "vat": 0,
              "assortment": {
                "meta": {
                  "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
                  "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                  "type": "variant",
                  "mediaType": "application/json"
                }
              },
              "reward": 12
            }
          ]'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной позиции отдельного отчета комиссионера.

```json
[
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/returntocommissionerpositions/a7a61c8b-acdd-11e6-8a84-bae500000000",
      "type": "commissionreportinreturnedposition",
      "mediaType": "application/json"
    },
    "id": "a7a61c8b-acdd-11e6-8a84-bae500000000",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "quantity": 15,
    "price": 1300.0,
    "vat": 0,
    "vatEnabled": false,
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=3c6dc9b8-2842-11e9-ac12-000c00000071"
      }
    },
    "reward": 225
  },
  {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/returntocommissionerpositions/a7a6c749-acdd-11e6-8a84-bae500000001",
      "type": "commissionreportinreturnedposition",
      "mediaType": "application/json"
    },
    "id": "a7a6c749-acdd-11e6-8a84-bae500000001",
    "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
    "quantity": 15,
    "price": 1020.0,
    "vat": 0,
    "vatEnabled": false,
    "assortment": {
      "meta": {
        "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
        "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
        "type": "variant",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=e639e90c-2a99-11e9-ac12-000c0000003e"
      }
    },
    "reward": 12
  }
]
```

### Изменить позицию возврата на склад комиссионера
Для обновления позиции нет каких-либо обязательных для указания в теле запроса полей. Только те, что вы желаете обновить.

**Параметры**

| Параметр       | Описание                                                                                                                                  |
| :------------- |:------------------------------------------------------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Полученного отчета комиссионера.                                   |
| **positionID** | `string` (required) *Example: 34f6344f-015e-11e6-9464-e4de0000006c* id позиции возврата на склад комиссионера Полученного отчета комиссионера. |

> Пример запроса на обновление отдельной позиции возврата на склад комиссионера в Полученном отчете комиссионера.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/returntocommissionerpositions/34f6344f-015e-11e6-9464-e4de0000006c"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "quantity": 14,
            "price": 1301.0,
            "vat": 10,
            "assortment": {
              "meta": {
                "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
                "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
                "type": "variant",
                "mediaType": "application/json"
              }
            },
            "reward": 0
          }'  
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной позиции возврата на склад комиссионера.

```json
{
  "meta": {
    "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/returntocommissionerpositions/34f6344f-015e-11e6-9464-e4de0000006c",
    "type": "commissionreportinreturnedposition",
    "mediaType": "application/json"
  },
  "id": "34f6344f-015e-11e6-9464-e4de0000006c",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "quantity": 14,
  "price": 1301.0,
  "vat": 10,
  "vatEnabled": true,
  "assortment": {
    "meta": {
      "href": "https://api.moysklad.ru/api/remap/1.2/entity/variant/36edadbe-912b-11e6-8a84-bae500000128",
      "metadataHref": "https://api.moysklad.ru/api/remap/1.2/entity/variant/metadata",
      "type": "variant",
      "mediaType": "application/json",
      "uuidHref": "https://online.moysklad.ru/app/#feature/edit?id=3c6dc9b8-2842-11e9-ac12-000c00000071"
    }
  },
  "reward": 0
}
```

### Удалить позицию возврата на склад комиссионера

**Параметры**

| Параметр       | Описание                                                                                                                                  |
| :------------- |:------------------------------------------------------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id Полученного отчета комиссионера.                                   |
| **positionID** | `string` (required) *Example: 7944ef04-f831-11e5-7a69-971500188b19* id позиции возврата на склад комиссионера Полученного отчета комиссионера. |

> Запрос на удаление позиции возврата на склад комиссионера с указанным id.

```shell
curl -X DELETE
  "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/7944ef04-f831-11e5-7a69-971500188b19/returntocommissionerpositions/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешное удаление позиции возврата на склад комиссионера.

### Массовое удаление позиций возврата на склад комиссионера

**Параметры**

| Параметр       | Описание                                                                                                |
| :------------- |:--------------------------------------------------------------------------------------------------------|
| **id**         | `string` (required) *Example: 3e1c03bb-684f-11ee-ac12-000c000000b0* id Полученного отчета комиссионера. |

> Запрос на массовое удаление позиций возврата на склад комиссионера

```shell
curl -X POST
  "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/3e1c03bb-684f-11ee-ac12-000c000000b0/returntocommissionerpositions/delete"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
  -H "Content-Type: application/json"
  -d '[
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/3e1c03bb-684f-11ee-ac12-000c000000b0/returntocommissionerpositions/7fce2da5-684d-11ee-ac12-000c000000a2",
            "type": "commissionreportinreturnedposition",
            "mediaType": "application/json"
          }
        },
        {
          "meta": {
            "href": "https://api.moysklad.ru/api/remap/1.2/entity/commissionreportin/3e1c03bb-684f-11ee-ac12-000c000000b0/returntocommissionerpositions/7fce37a5-684d-11ee-ac12-000c000000a3",
            "type": "commissionreportinreturnedposition",
            "mediaType": "application/json"
          }
        }
      ]'  
```

> Response 200 (application/json)
Успешное удаление позиций возврата на склад комиссионера
