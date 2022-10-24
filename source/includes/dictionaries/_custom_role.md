## Пользовательские роли
### Пользовательская роль

Средствами JSON API можно запрашивать и изменять пользовательские роли.
Получать и изменять роли можно от лица сотрудника с правами `Системного администратора` или от лица `Приложения`.

#### Атрибуты сущности

| Название        | Тип                                                       | Описание                                                                                    |
| --------------- | :-------------------------------------------------------- | :------------------------------------------------------------------------------------------ |
| **id**          | UUID                                                      | ID пользовательской роли<br>`+Обязательное при ответе` `+Только для чтения`                 |
| **meta**        | [Meta](../#mojsklad-json-api-obschie-swedeniq-metadannye) | Метаданные пользовательской роли<br>`+Обязательное при ответе`                              |
| **name**        | String(255)                                               | Наименование пользовательской роли<br>`+Обязательное при ответе` `+Необходимо при создании` |
| **permissions** | Array(Object)                                             | Список пермиссий<br>`+Обязательное при ответе`                                              |

### Получить пользовательскую роль

**Параметры**

| Параметр | Описание                                                                     |
| :------- | :--------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 736da682-ad8b-11eb-0a80-17ef000000d4* id Роли. |

> Запрос на получение пользовательской роли с указанным id.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/role/736da682-ad8b-11eb-0a80-17ef000000d4"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление пользовательской роли.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/role/736da682-ad8b-11eb-0a80-17ef000000d4",
    "type": "customrole",
    "mediaType": "application/json"
  },
  "id": "736da682-ad8b-11eb-0a80-17ef000000d4",
  "name": "CustomRole",
  "permissions": {
    "importData": true,
    "exportData": true,
    "onlineShops": true,
    "apiRequest": true,
    "sendEmail": true,
    "viewProductCostAndProfit": true,
    "viewDashboard": true,
    "viewRecycleBin": true,
    "viewAudit": false,
    "viewSaleProfit": true,
    "viewCommissionGoods": true,
    "viewPurchaseFunnel": true,
    "viewStockReport": true,
    "viewTurnover": true,
    "viewSerialNumbers": true,
    "viewCashFlow": true,
    "viewCustomerBalanceList": true,
    "viewProfitAndLoss": true,
    "viewCompanyCRM": true,
    "viewMoneyDashboard": false,
    "restoreFromRecycleBin": true,
    "deleteFromRecycleBin": true,
    "editDocumentsOfRestrictedPeriod": false,
    "editDocumentTemplates": true,
    "editCurrencyRateOfDocument": true,
    "subscriptionControl": false,
    "purchaseControl": true,
    "listenCalls": true,
    "supply": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "accountAdjustment": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL"
    },
    "commissionReportIn": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "processingPlan": {
      "view": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL"
    },
    "retailSalesReturn": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "loss": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "cashboxAdjustment": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL"
    },
    "paymentOut": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "move": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "inventory": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL"
    },
    "cashOut": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "contract": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL"
    },
    "project": {
      "view": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL"
    },
    "purchaseOrder": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "customEntity": {
      "view": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL"
    },
    "cashIn": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "salesReturn": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "retailStore": {
      "view": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL"
    },
    "retailShift": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL"
    },
    "purchaseReturn": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "processingOrder": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "retailDrawerCashIn": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "retailDrawerCashOut": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "factureIn": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "bonusTransaction": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "commissionReportOut": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "demand": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "good": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL"
    },
    "retailDemand": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "priceList": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "currency": {
      "view": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL"
    },
    "internalOrder": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "myCompany": {
      "view": "ALL",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "counterpartyAdjustment": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL"
    },
    "invoiceIn": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "prepayment": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "processingProcess": {
      "view": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL"
    },
    "employee": {
      "view": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL"
    },
    "processingStage": {
      "view": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL"
    },
    "factureOut": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "processing": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "customerOrder": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "enter": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "paymentIn": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "invoiceOut": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "company": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL"
    },
    "warehouse": {
      "view": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL"
    },
    "country": {
      "view": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL"
    },
    "uom": {
      "view": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL"
    },
    "prepaymentReturn": {
      "view": "ALL",
      "print": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL",
      "approve": "ALL"
    },
    "script": {
      "view": "AUTHOR_OR_ASSIGNEE",
      "create": "ALL",
      "done": "AUTHOR_OR_ASSIGNEE",
      "update": "AUTHOR",
      "delete": "AUTHOR"
    },
    "taxrate": {
      "view": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL"
    }
  }
}
```

### Получить все пользовательские роли

> Запрос на получение пользовательских ролей.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/role/"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление пользовательских ролей.

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
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/role/",
    "mediaType": "application/json",
    "size": 1,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/role/736da682-ad8b-11eb-0a80-17ef000000d4",
        "type": "customrole",
        "mediaType": "application/json"
      },
      "id": "736da682-ad8b-11eb-0a80-17ef000000d4",
      "name": "CustomRole",
      "permissions": {
        "importData": true,
        "exportData": true,
        "onlineShops": true,
        "apiRequest": true,
        "sendEmail": true,
        "viewProductCostAndProfit": true,
        "viewDashboard": true,
        "viewRecycleBin": true,
        "viewAudit": false,
        "viewSaleProfit": true,
        "viewCommissionGoods": true,
        "viewPurchaseFunnel": true,
        "viewStockReport": true,
        "viewTurnover": true,
        "viewSerialNumbers": true,
        "viewCashFlow": true,
        "viewCustomerBalanceList": true,
        "viewProfitAndLoss": true,
        "viewCompanyCRM": true,
        "viewMoneyDashboard": false,
        "restoreFromRecycleBin": true,
        "deleteFromRecycleBin": true,
        "editDocumentsOfRestrictedPeriod": false,
        "editDocumentTemplates": true,
        "editCurrencyRateOfDocument": true,
        "subscriptionControl": false,
        "purchaseControl": true,
        "listenCalls": true,
        "supply": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "accountAdjustment": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL"
        },
        "commissionReportIn": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "processingPlan": {
          "view": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL"
        },
        "retailSalesReturn": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "loss": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "cashboxAdjustment": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL"
        },
        "paymentOut": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "move": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "inventory": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL"
        },
        "cashOut": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "contract": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL"
        },
        "project": {
          "view": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL"
        },
        "purchaseOrder": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "customEntity": {
          "view": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL"
        },
        "cashIn": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "salesReturn": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "retailStore": {
          "view": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL"
        },
        "retailShift": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL"
        },
        "purchaseReturn": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "processingOrder": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "retailDrawerCashIn": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "retailDrawerCashOut": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "factureIn": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "bonusTransaction": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "commissionReportOut": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "demand": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "good": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL"
        },
        "retailDemand": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "priceList": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "currency": {
          "view": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL"
        },
        "internalOrder": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "myCompany": {
          "view": "ALL",
          "create": "NO",
          "update": "NO",
          "delete": "NO"
        },
        "counterpartyAdjustment": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL"
        },
        "invoiceIn": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "prepayment": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "processingProcess": {
          "view": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL"
        },
        "employee": {
          "view": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL"
        },
        "processingStage": {
          "view": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL"
        },
        "factureOut": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "processing": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "customerOrder": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "enter": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "paymentIn": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "invoiceOut": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "company": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL"
        },
        "warehouse": {
          "view": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL"
        },
        "country": {
          "view": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL"
        },
        "uom": {
          "view": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL"
        },
        "prepaymentReturn": {
          "view": "ALL",
          "print": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL",
          "approve": "ALL"
        },
        "script": {
          "view": "AUTHOR_OR_ASSIGNEE",
          "create": "ALL",
          "done": "AUTHOR_OR_ASSIGNEE",
          "update": "AUTHOR",
          "delete": "AUTHOR"
        },
        "taxrate": {
          "view": "ALL",
          "create": "ALL",
          "update": "ALL",
          "delete": "ALL"
        }
      }
    }
  ]
}
```

### Создать пользовательскую роль

> Запрос на создание пользовательской роли.

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/entity/role/"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
      -d '{
  "name": "testRole",
  "permissions": {
    "importData": false,
    "exportData": false,
    "onlineShops": false,
    "apiRequest": false,
    "sendEmail": false,
    "viewProductCostAndProfit": false,
    "viewDashboard": false,
    "viewRecycleBin": false,
    "viewAudit": false,
    "viewSaleProfit": false,
    "viewCommissionGoods": false,
    "viewPurchaseFunnel": false,
    "viewStockReport": false,
    "viewTurnover": false,
    "viewSerialNumbers": false,
    "viewCashFlow": false,
    "viewCustomerBalanceList": false,
    "viewProfitAndLoss": false,
    "viewCompanyCRM": false,
    "viewMoneyDashboard": false,
    "restoreFromRecycleBin": false,
    "deleteFromRecycleBin": false,
    "editDocumentsOfRestrictedPeriod": false,
    "editDocumentTemplates": false,
    "editCurrencyRateOfDocument": false,
    "subscriptionControl": false,
    "purchaseControl": false,
    "listenCalls": false
  }
}'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной роли.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/role/ae6e61ad-ad8c-11eb-0a80-380e00001e6c",
    "type": "customrole",
    "mediaType": "application/json"
  },
  "id": "ae6e61ad-ad8c-11eb-0a80-380e00001e6c",
  "name": "testRole",
  "permissions": {
    "importData": false,
    "exportData": false,
    "onlineShops": false,
    "apiRequest": false,
    "sendEmail": false,
    "viewProductCostAndProfit": false,
    "viewDashboard": false,
    "viewRecycleBin": false,
    "viewAudit": false,
    "viewSaleProfit": false,
    "viewCommissionGoods": false,
    "viewPurchaseFunnel": false,
    "viewStockReport": false,
    "viewTurnover": false,
    "viewSerialNumbers": false,
    "viewCashFlow": false,
    "viewCustomerBalanceList": false,
    "viewProfitAndLoss": false,
    "viewCompanyCRM": false,
    "viewMoneyDashboard": false,
    "restoreFromRecycleBin": false,
    "deleteFromRecycleBin": false,
    "editDocumentsOfRestrictedPeriod": false,
    "editDocumentTemplates": false,
    "editCurrencyRateOfDocument": false,
    "subscriptionControl": false,
    "purchaseControl": false,
    "listenCalls": false,
    "supply": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "accountAdjustment": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "commissionReportIn": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "processingPlan": {
      "view": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "retailSalesReturn": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "loss": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "cashboxAdjustment": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "paymentOut": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "move": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "inventory": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "cashOut": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "contract": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "project": {
      "view": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "purchaseOrder": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "customEntity": {
      "view": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "cashIn": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "salesReturn": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "retailStore": {
      "view": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "retailShift": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "purchaseReturn": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "processingOrder": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "retailDrawerCashIn": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "retailDrawerCashOut": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "factureIn": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "bonusTransaction": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "commissionReportOut": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "demand": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "good": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "retailDemand": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "priceList": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "currency": {
      "view": "ALL",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "internalOrder": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "myCompany": {
      "view": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "counterpartyAdjustment": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "invoiceIn": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "prepayment": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "processingProcess": {
      "view": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "employee": {
      "view": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "processingStage": {
      "view": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "factureOut": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "processing": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "customerOrder": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "enter": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "paymentIn": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "invoiceOut": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "company": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "warehouse": {
      "view": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "country": {
      "view": "ALL",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "uom": {
      "view": "ALL",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "prepaymentReturn": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "script": {
      "view": "NO",
      "create": "NO",
      "done": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "taxrate": {
      "view": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL"
    }
  }
}
```

### Обновить пользовательскую роль

**Параметры**

| Параметр | Описание                                                                     |
| :------- | :--------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: 736da682-ad8b-11eb-0a80-17ef000000d4* id Роли. |

> Запрос на обновление пользовательской роли.

```shell
curl -X PUT
  "https://online.moysklad.ru/api/remap/1.2/entity/role/ae6e61ad-ad8c-11eb-0a80-380e00001e6c"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
      -d '{
  "name": "updatedTestRole",
  "permissions": {
    "importData": true,
    "exportData": false,
    "onlineShops": false,
    "apiRequest": false,
    "sendEmail": false,
    "viewProductCostAndProfit": false,
    "viewDashboard": false,
    "viewRecycleBin": false,
    "viewAudit": false,
    "viewSaleProfit": false,
    "viewCommissionGoods": false,
    "viewPurchaseFunnel": false,
    "viewStockReport": false,
    "viewTurnover": false,
    "viewSerialNumbers": false,
    "viewCashFlow": false,
    "viewCustomerBalanceList": false,
    "viewProfitAndLoss": false,
    "viewCompanyCRM": false,
    "viewMoneyDashboard": false,
    "restoreFromRecycleBin": false,
    "deleteFromRecycleBin": false,
    "editDocumentsOfRestrictedPeriod": false,
    "editDocumentTemplates": false,
    "editCurrencyRateOfDocument": false,
    "subscriptionControl": false,
    "purchaseControl": false,
    "listenCalls": false
  }
}'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленной роли.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/role/ae6e61ad-ad8c-11eb-0a80-380e00001e6c",
    "type": "customrole",
    "mediaType": "application/json"
  },
  "id": "ae6e61ad-ad8c-11eb-0a80-380e00001e6c",
  "name": "updatedTestRole",
  "permissions": {
    "importData": true,
    "exportData": false,
    "onlineShops": false,
    "apiRequest": false,
    "sendEmail": false,
    "viewProductCostAndProfit": false,
    "viewDashboard": false,
    "viewRecycleBin": false,
    "viewAudit": false,
    "viewSaleProfit": false,
    "viewCommissionGoods": false,
    "viewPurchaseFunnel": false,
    "viewStockReport": false,
    "viewTurnover": false,
    "viewSerialNumbers": false,
    "viewCashFlow": false,
    "viewCustomerBalanceList": false,
    "viewProfitAndLoss": false,
    "viewCompanyCRM": false,
    "viewMoneyDashboard": false,
    "restoreFromRecycleBin": false,
    "deleteFromRecycleBin": false,
    "editDocumentsOfRestrictedPeriod": false,
    "editDocumentTemplates": false,
    "editCurrencyRateOfDocument": false,
    "subscriptionControl": false,
    "purchaseControl": false,
    "listenCalls": false,
    "supply": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "accountAdjustment": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "commissionReportIn": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "processingPlan": {
      "view": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "retailSalesReturn": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "loss": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "cashboxAdjustment": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "paymentOut": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "move": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "inventory": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "cashOut": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "contract": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "project": {
      "view": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "purchaseOrder": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "customEntity": {
      "view": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "cashIn": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "salesReturn": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "retailStore": {
      "view": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "retailShift": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "purchaseReturn": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "processingOrder": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "retailDrawerCashIn": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "retailDrawerCashOut": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "factureIn": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "bonusTransaction": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "commissionReportOut": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "demand": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "good": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "retailDemand": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "priceList": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "currency": {
      "view": "ALL",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "internalOrder": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "myCompany": {
      "view": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "counterpartyAdjustment": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "invoiceIn": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "prepayment": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "processingProcess": {
      "view": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "employee": {
      "view": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "processingStage": {
      "view": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "factureOut": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "processing": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "customerOrder": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "enter": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "paymentIn": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "invoiceOut": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "company": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "warehouse": {
      "view": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "country": {
      "view": "ALL",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "uom": {
      "view": "ALL",
      "create": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "prepaymentReturn": {
      "view": "NO",
      "print": "NO",
      "create": "NO",
      "update": "NO",
      "delete": "NO",
      "approve": "NO"
    },
    "script": {
      "view": "NO",
      "create": "NO",
      "done": "NO",
      "update": "NO",
      "delete": "NO"
    },
    "taxrate": {
      "view": "ALL",
      "create": "ALL",
      "update": "ALL",
      "delete": "ALL"
    }
  }
}
```


### Удалить пользовательскую роль

**Параметры**

| Параметр | Описание                                                                     |
| :------- | :--------------------------------------------------------------------------- |
| **id**   | `string` (required) *Example: ae6e61ad-ad8c-11eb-0a80-380e00001e6c* id Роли. |

> Запрос на удаление пользовательской роли.

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/role/ae6e61ad-ad8c-11eb-0a80-380e00001e6c"
  -H "Authorization: Basic <Credentials>
```

> Response 200 (application/json)
Успешный запрос.
