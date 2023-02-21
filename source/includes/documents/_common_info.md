# Документы
## Общие сведения
### Шаблоны документов

**Шаблон** - предзаполненный стандартными полями JSON-объект, который затем можно использовать для успешного создания документа.
Средствами JSON API можно получать предзаполненные шаблоны документов. Они могут быть предзаполнены как на основе других документов, так и стандартными значениями без связей с другими документами.
Для этого, во всех документах, по которым можно получить шаблон, существует специальный ресурс `Шаблон документа`, адрес которого формируется следующим образом:<br>
`https://online.moysklad.ru/api/remap/1.2/entity/<ключевое слово для документа>/new`
<br>
В тело PUT запроса по данному ресурсу нужно передать метаданные документа, на основе которого будет создан шаблон нового документа, либо просто передать пустое тело запроса.
Метаданные должны быть "обернуты" в объект, имя которого есть ключевое слово для документа-основания в JSON API.
Для каждого из данных ресурсов есть примеры запросов и ответов.<br>
На данный момент можно получить шаблоны следующих документы на основании других:

| Документ                                | Основание, на котором он может быть создан                                                                                                                                               |
| :-------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cчет покупателю (invoiceout)            | Заказ покупателя (customerorder)                                                                                                                                                         |
| Возврат покупателя (salesreturn)        | Отгрузка (demand), <br>Розничная продажа (retaildemand)                                                                                                                                  |
| Возврат поставщику (purchasereturn)     | Приемка (supply)                                                                                                                                                                         |
| Входящий платеж (paymentin)             | Заказ покупателя (salesreturn), <br>Возврат поставщику (purchasereturn), <br>Отгрузка (demand), <br>Счет покупателю (invoiceout), <br>Полученный отчет комиссионера (commissionreportin) |
| Заказ на производство (processingorder) | Тех. карта (processingplan)                                                                                                                                                              |
| Заказ поставщику (purchaseorder)        | Внутренний заказ (internalorder)                                                                                                                                                         |
| Исходящий платеж (paymentout)           | Возврат покупателя (salesreturn), <br>Приемка (supply), <br>Счет поставщика (invoicein), <br>Заказ поставщику (purchaseorder), <br>Выданный отчет комиссионера (commissionreportout)     |
| Оприходование (enter)                   | Инвентаризация(inventory)                                                                                                                                                                |
| Отгрузка (demand)                       | Заказ покупателя (customerorder)                                                                                                                                                         |
| Перемещение (move)                      | Внутренний заказ (internalorder)                                                                                                                                                         |
| Приходный ордер (cashin)                | Заказ покупателя (salesreturn), <br>Возврат поставщику (purchasereturn), <br>Отгрузка (demand), <br>Счет покупателю (invoiceout), <br>Полученный отчет комиссионера (commissionreportin) |
| Расходный ордер (cashout)               | Возврат покупателя (salesreturn), <br>Приемка (supply), <br>Счет поставщика (invoicein), <br>Заказ поставщику (purchaseorder), <br>Выданный отчет комиссионера (commissionreportout)     |
| Розничная продажа (retaildemand)        | Розничная смена, Заказ покупателя                                                                                                                                                        |
| Списание (loss)                         | Возврат покупателя (salesreturn),<br>инвентаризация(inventory)                                                                                                                           |
| Счет поставщика (invoicein)             | Заказ поставщику (purchaseorder)                                                                                                                                                         |
| Тех. операция (processing)              | Заказ на производство (processingorder), Тех. карта (processingplan)                                                                                                                     |

 В результате PUT запроса по /entity/entityName/new НЕ будет создано нового документа.  
 Возвращаемый предзаполненный объект является лишь "болванкой" с некоторыми заполненными полями (поля заполняются по той же логике,
 что и в аналогичной ситуации в основном интерфейсе), облегчающей создание документа. Он не сохраняется в системе. Этот
 объект затем можно передать в теле запроса на создание соответствующего документа и тогда уже документ будет создан, и связан с документом-основанием.
<br>
Если послать на данный ресурс пустое тело запроса, то в итоговом шаблоне будут предзаполнены лишь стандартные поля в т.ч. указанные в настройках пользователя
в учетной записи сервиса МойСклад.

В случае если инвентаризация содержит более 500 подходящих позиций, то шаблон списания (loss) и оприходования (entry) будет создан по первым 500 позициям. 

С подробностями и примерами по каждому из документов можно ознакомиться в соответствующих разделах документации.
Например, для шаблона отгрузки - смотреть в [Шаблонах отгрузки](../documents/#dokumenty-otgruzka-shablon-otgruzki)

### Контекстный поиск для документов

В JSON API можно осуществлять контекстный поиск среди списка сущностей определенного типа по их строковым полям. Для этого
используется URI параметр фильтрации **search**.

+ **search**
  Параметр фильтрации, с помощью которого можно осуществить поиск в списке сущностей. Поиск происходит по основным строковым полям сущностей данного
  типа. Результатом поиска будет отсортированный по релевантности список сущностей данного типа, прошедших фильтрацию по переданной поисковой строке. В отличии от фильтрации выборки
  с помощью параметра **filter**, при которой значения проверяются на точное совпадение указанным, при контекстном поиске проверка на совпадение не строгая.
  Таким образом, если осуществлять фильтрацию вида `../entity/<entity_type>?filter=name=иван` в отфильтрованную выборку попадут только те сущности, поле **name**
  у которых имеет значение `иван` и никакие другие. При контекстном поиске вида `../entity/<entity_type>?search=иван` будут выведены как сущности с **name** равным
  `иван`, так и сущности, в имени (или в другом строковом поле) которых `иван` просто содержится, например `диван`, `иванова` и т.п.

  Поиск среди документов на соответствие поисковой строке будет осуществлен по следующим полям:
  + по наименованию (name)
  + по описанию (description)
  + по входящему номеру (incomingNumber)

  + Примеры запросов контекстного поиска (значения должны быть urlencoded):
    - `https://online.moysklad.ru/api/remap/1.2/entity/retaildemand?search=100`
    - `https://online.moysklad.ru/api/remap/1.2/entity/salesreturn?search=брак`
    - `https://online.moysklad.ru/api/remap/1.2/entity/retailshift?search=ночная`

### Удаление в корзину

Корзина позволяет избежать риска случайного удаления важных документов. Удаление
в корзину доступно только при наличии у сотрудника соответствующих прав, а также
настроек компании на использовании корзины.

### Пример удаления Приемки в корзину 

> Запрос на удаление Приемки с указанным id в корзину.

```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/entity/supply/be3a3a0e-370c-11e7-1542-821d00000001/trash"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d ''  
```

> Response 200 (application/json)
Успешное удаление Приемки.

##### Связи документов
### Привязка документов к документам 

Для того чтобы привязать к уже существующему документу другой документ нужно
передать **meta** привязываемого документа в коллекцию связанных документов или в единственный документ этого типа.
Такие поля присутствуют среди аттрибутов документов. В описании сущностей они описаны в секции **Связи с другими документами**.
Для коллекций каждое поле называется как ключевое слово для типов привязываемых документов во множественном числе. Например поле **invoicesOut** у отгрузок
отвечает за связи с счетами покупателю. Если вы хотите привязать к отгрузке счет, в это поле, в составе коллекции, нужно положить **meta** счета покупателя который вы хотите привязать,
Можно привязывать более 1 документа.

### Пример привязки 1 

Привязка внутреннего заказа к перемещению.

> Пример запроса на привязку внутреннего заказа к перемещению.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/move/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "internalOrder": {
              "meta": {
                "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/31d58bde-b2fd-11e6-8a84-bae500000068",
                "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata",
                "type": "internalorder",
                "mediaType": "application/json"
              }
            }
          }'  
```

> Response 200 (application/json)
Результат - перемещение с заполненным полем internalOrder.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/d9318341-b0da-11e6-8a84-bae5000000c7",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata",
    "type": "move",
    "mediaType": "application/json"
  },
  "id": "d9318341-b0da-11e6-8a84-bae5000000c7",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-22 20:41:07",
  "name": "00001",
  "externalCode": "8Fn2HqBbguhZxoYrjWYAf3",
  "moment": "2016-11-22 20:40:00",
  "applicable": true,
  "sum": 0,
  "project": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/d9318341-b0da-11e6-8a84-bae5000000c7/positions",
      "type": "moveposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "sourceStore": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "targetStore": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/85a8e439-b0d8-11e6-8a84-bae500000070",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "internalOrder": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/31d58bde-b2fd-11e6-8a84-bae500000068",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/internalorder/metadata",
      "type": "internalorder",
      "mediaType": "application/json"
    }
  }
}
```

### Пример привязки 2 

Привязка счета покупателю к отгрузке.

> Пример запроса на привязку счета покупателю к отгрузке.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/demand/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "invoicesOut": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/6cb87758-95f4-11e6-8a84-bae500000067",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
                  "type": "invoiceout",
                  "mediaType": "application/json"
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Результат - отгрузка с новым элементом в коллекции invoicesOut.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/06406b97-9138-11e6-8a84-bae500000000",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/demand/metadata",
    "type": "demand",
    "mediaType": "application/json"
  },
  "id": "06406b97-9138-11e6-8a84-bae500000000",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-10-13 14:27:29",
  "name": "000201",
  "externalCode": "q5Ot--p3gHJrOFylVF2lQ2",
  "moment": "2016-10-13 12:38:00",
  "applicable": false,
  "sum": 0,
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "agentAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "organizationAccount": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051/accounts/b932bc5b-9128-11e6-8a84-bae500000052",
      "type": "account",
      "mediaType": "application/json"
    }
  },
  "created": "2007-02-07 17:16:41",
  "positions": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/demand/06406b97-9138-11e6-8a84-bae500000000/positions",
      "type": "demandposition",
      "mediaType": "application/json",
      "size": 1,
      "limit": 1000,
      "offset": 0
    }
  },
  "vatEnabled": true,
  "vatIncluded": true,
  "vatSum": 0,
  "payedSum": 0,
  "invoicesOut": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/6cb87758-95f4-11e6-8a84-bae500000067",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/invoiceout/metadata",
        "type": "invoiceout",
        "mediaType": "application/json"
      }
    }
  ]
}
```

### Пример привязки 3

Привязка перемещений к заказу покупателя.

> Пример запроса на привязку перемещений к заказу покупателя.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/c60e87dc-97b2-11ed-c0a8-a00d00000001"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "moves": [
                    {
                        "meta": {
                            "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/bc8aa8d7-95fa-11ed-c0a8-a00c0000001a",
                            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata",
                            "type": "move",
                            "mediaType": "application/json",
                            "uuidHref": "https://online.moysklad.ru/app/#move/edit?id=bc8aa8d7-95fa-11ed-c0a8-a00c0000001a"
                        }
                    },
                    {
                        "meta": {
                            "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/06406b97-9138-11e6-8a84-bae500000000",
                            "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata",
                            "type": "move",
                            "mediaType": "application/json",
                            "uuidHref": "https://online.moysklad.ru/app/#move/edit?id=06406b97-9138-11e6-8a84-bae500000000"
                        }
                    }
                ]
        }'  
```

> Response 200 (application/json)
Результат - заказ покупателя с новыми элементами в коллекции moves.

```json
{
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "name": "CustomerOrder 1",
  "moment": "2016-11-25 17:33:33",
  "applicable": true,
  "sum": 0,
  "store": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/store/b942743c-9128-11e6-8a84-bae500000053",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/store/metadata",
      "type": "store",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "state": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata/states/8c33b721-8782-11ed-c0a8-a00c000000b6",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
      "type": "state",
      "mediaType": "application/json"
    }
  },
  "printed": false,
  "published": false,
  "files": {
    "rows": []
  },
  "positions": {
    "rows": []
  },
  "vatEnabled": true,
  "vatIncluded": true,
  "payedSum": 0.0,
  "shippedSum": 0.0,
  "invoicedSum": 0.0,
  "moves": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/bc8aa8d7-95fa-11ed-c0a8-a00c0000001a",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata",
        "type": "move",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#move/edit?id=bc8aa8d7-95fa-11ed-c0a8-a00c0000001a"
      }
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/move/06406b97-9138-11e6-8a84-bae500000000",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/move/metadata",
        "type": "move",
        "mediaType": "application/json",
        "uuidHref": "https://online.moysklad.ru/app/#move/edit?id=06406b97-9138-11e6-8a84-bae500000000"
      }
    }
  ]
}
```

### Привязка платежей к документам 

К некоторым документам в JSON API могут быть привязаны платежи. Платежи бывают 4-х типов: [Входящий платеж](../documents/#dokumenty-vhodqschij-platezh), [Приходный ордер](../documents/#dokumenty-prihodnyj-order), [Исходящий платеж](../documents/#dokumenty-ishodqschij-platezh), [Расходный ордер](../documents/#dokumenty-rashodnyj-order).
Документы, к которым могут быть привязаны платежи содержат вложенную коллекцию **payments** среди атрибутов документа. Платежи в свою очередь содержат коллекцию **operations** - операции, к которым привязан данный платеж. Для того, чтобы привязать платеж к документу, нужно в запросах
на создание/обновление платежа в составе коллекции **operations** указать **meta** документа. Документы в этой коллекции могут иметь разный тип, однако это не значит, что к любому документу можно привязать все 4 типа платежей. Валидные типы платежей определяются самим документом, к которому происходит привязка. К примеру к полученному отчету комиссионера можно привязать только входящий платеж или приходный ордер. <br>
В результате привзяки платежа, в составе коллекции **operations** платежа появится новый объект, указывающий на документ, а в составе коллекции **payments** у документа, к которому
привязывается платеж, появится новый элемент ссылающийся на данный платеж.

### Пример привязки платежа 1 

Привязка входящего платежа к полученному отчету комиссионера.

> Пример запроса на привязку платежа к полученному отчету комиссионера.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/7944ef04-f831-11e5-7a69-971500188b19"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "operations": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/392fb7a9-ab02-11e6-8a84-bae500000073",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata",
                  "type": "commissionreportin",
                  "mediaType": "application/json"
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Результат - входящий платеж с новым элементом в коллекции operations.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/94a9f8e9-b30b-11e6-8a84-bae500000017",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/paymentin/metadata",
    "type": "paymentin",
    "mediaType": "application/json"
  },
  "id": "94a9f8e9-b30b-11e6-8a84-bae500000017",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-25 15:35:00",
  "name": "Платеж",
  "externalCode": "-S9khhF3gNPa78SPCu81S2",
  "moment": "2016-11-25 15:35:00",
  "applicable": true,
  "sum": 400,
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b942953e-9128-11e6-8a84-bae500000054",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/a8f3150d-9d39-11e6-8a84-bae500000074",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "vatSum": 0,
  "operations": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/392fb7a9-ab02-11e6-8a84-bae500000073",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/commissionreportin/metadata",
        "type": "commissionreportin",
        "mediaType": "application/json"
      },
      "linkedSum": 0
    }
  ]
}

```

### Пример привязки платежа 2 

Привязка приходного ордера к заказу покупателя.

> Пример запроса на привязку приходного ордера к заказу покупателя.

```shell
  curl -X PUT
    "https://online.moysklad.ru/api/remap/1.2/entity/cashin/7944ef04-f831-11e5-7a69-971500188b19
"
    -H "Authorization: Basic <Credentials>"
    -H "Content-Type: application/json"
      -d '{
            "operations": [
              {
                "meta": {
                  "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/559adab5-915c-11e6-8a84-bae500000014",
                  "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
                  "type": "customerorder",
                  "mediaType": "application/json"
                }
              }
            ]
          }'  
```

> Response 200 (application/json)
Результат - приходный ордер с новым элементом в коллекции operations.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/834d731c-b313-11e6-8a84-bae50000008e",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/cashin/metadata",
    "type": "cashin",
    "mediaType": "application/json"
  },
  "id": "834d731c-b313-11e6-8a84-bae50000008e",
  "accountId": "b8b74698-9128-11e6-8a84-bae500000001",
  "owner": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/employee/b905bfb0-9128-11e6-8a84-bae50000002a",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
      "type": "employee",
      "mediaType": "application/json"
    }
  },
  "shared": false,
  "group": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/group/b8ba0d3f-9128-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/group/metadata",
      "type": "group",
      "mediaType": "application/json"
    }
  },
  "updated": "2016-11-25 16:31:47",
  "name": "1111",
  "externalCode": "WpAtzal3hGUnUfQS55x781",
  "moment": "2016-11-25 16:31:00",
  "applicable": true,
  "sum": 32131000,
  "contract": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/contract/92df2d9c-ab02-11e6-8a84-bae500000084",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/contract/metadata",
      "type": "contract",
      "mediaType": "application/json"
    }
  },
  "project": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/project/6c6dd3f9-97a1-11e6-8a84-bae500000002",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/project/metadata",
      "type": "project",
      "mediaType": "application/json"
    }
  },
  "agent": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/b942c396-9128-11e6-8a84-bae500000056",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/counterparty/metadata",
      "type": "counterparty",
      "mediaType": "application/json"
    }
  },
  "organization": {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/organization/b9324d71-9128-11e6-8a84-bae500000051",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/organization/metadata",
      "type": "organization",
      "mediaType": "application/json"
    }
  },
  "vatSum": 0,
  "operations": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/559adab5-915c-11e6-8a84-bae500000014",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/customerorder/metadata",
        "type": "customerorder",
        "mediaType": "application/json"
      },
      "linkedSum": 0
    }
  ]
}
```

