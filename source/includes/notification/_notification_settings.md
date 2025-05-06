## Настройки уведомлений
### Структура данных

| Название          | Тип                           | Описание               |
|-------------------|-------------------------------|------------------------|
| **customerOrder** | Настройки группы уведомлений  | Заказы покупателей     |
| **dataExchange**  | Настройки группы уведомлений  | Обмен данными          |
| **invoice**       | Настройки группы уведомлений  | Счета покупателей      |
| **retail**        | Настройки группы уведомлений  | Розничная торговля     |
| **scripts**       | Настройки группы уведомлений  | Сценарии               |
| **stock**         | Настройки группы уведомлений  | Складские остатки      |
| **task**          | Настройки группы уведомлений  | Задачи                 |
| **mentions**      | Настройки группы уведомлений  | Упоминания сотрудников |
| **onlineStores**  | Настройки группы уведомлений  | Интернет-магазины      |

Настройки группы уведомлений

| Название            | Тип                        | Описание                                                                     |
|---------------------|----------------------------|------------------------------------------------------------------------------|
| **enabled**         | boolean                    | Признак "активна" для подписки на уведомления данной группы                  |
| **channelsEnabled** | Настройки каналов доставки | Настройки доставки уведомлений данной группы через отдельные каналы доставки |

Настройки каналов доставки

| Название      | Тип     | Описание                                                                               |
|---------------|---------|----------------------------------------------------------------------------------------|
| **email**     | boolean | Признак "активна" для доставки уведомлений по элктронной почте                         |
| **push**      | boolean | Признак "активна" для доставки уведомлений через пуш-уведомления мобильного приложения |
| **interface** | boolean | Признак "активна" для доставки уведомлений в веб-интерфейсе МойСклад                   |

### Получить настройки уведомлений
Запрос настроек Уведомлений текущего пользователя.

> Запрос настроек Уведомлений текущего пользователя.

```shell
curl -X GET
  "https://api.moysklad.ru/api/remap/1.2/notification/settings"
  -H "Authorization: Basic <Credentials>"
  -H "Accept-Encoding: gzip"
```

> Response 200 (application/json)
Успешный запрос. JSON представление настроек уведомлений.

```json
{
  "customerOrder" : {
    "enabled" : true,
    "channelsEnabled" : {
      "email" : true,
      "interface" : true,
      "push" : true
    }
  },
  "dataExchange" : {
    "enabled" : true,
    "channelsEnabled" : {
      "email" : true,
      "interface" : true,
      "push" : true
    }
  },
  "invoice" : {
    "enabled" : true,
    "channelsEnabled" : {
      "email" : true,
      "interface" : true,
      "push" : true
    }
  },
  "retail" : {
    "enabled" : true,
    "channelsEnabled" : {
      "email" : true,
      "interface" : true,
      "push" : true
    }
  },
  "scripts" : {
    "enabled" : true,
    "channelsEnabled" : {
      "email" : true,
      "interface" : true,
      "push" : true
    }
  },
  "stock" : {
    "enabled" : true,
    "channelsEnabled" : {
      "email" : true,
      "interface" : true,
      "push" : true
    }
  },
  "task" : {
    "enabled" : true,
    "channelsEnabled" : {
      "email" : true,
      "interface" : true,
      "push" : true
    }
  },
  "mentions" : {
    "enabled" : true,
    "channelsEnabled" : {
      "email" : true,
      "interface" : true,
      "push" : true
    }
  },
  "onlineStores" : {
    "enabled" : true,
    "channelsEnabled" : {
      "email" : true,
      "interface" : true,
      "push" : true
    }
  }
}
```

### Изменить настройки уведомлений
Изменение настроек Уведомлений текущего пользователя.

Отключение уведомлений групп "Сценарии" и "Интернет-магазины" недопустимо. Параметр **enabled** игнорируется.

Если не переданы настройки для какой-либо группы, настройки этой группы остаются неизменными. Если не передано значение
флага активности для какой-либо группы либо какого-либо канала доставки, настройки для этой группы или этого канала не меняются.

> Изменение настроек Уведомлений текущего пользователя.

```shell
  curl -X PUT
    "https://api.moysklad.ru/api/remap/1.2/notification/settings"
    -H "Authorization: Basic <Credentials>"
    -H "Accept-Encoding: gzip"
    -H "Content-Type: application/json"
      -d '{
            "customerOrder" : {
              "enabled" : true,
              "channelsEnabled" : {
                "email" : true,
                "interface" : true,
                "push" : true
              }
            },
            "dataExchange" : {
              "enabled" : true,
              "channelsEnabled" : {
                "email" : true,
                "interface" : true,
                "push" : true
              }
            },
            "invoice" : {
              "enabled" : true,
              "channelsEnabled" : {
                "email" : true,
                "interface" : true,
                "push" : true
              }
            },
            "retail" : {
              "enabled" : true,
              "channelsEnabled" : {
                "email" : true,
                "interface" : true,
                "push" : true
              }
            },
            "scripts" : {
              "enabled" : true,
              "channelsEnabled" : {
                "email" : true,
                "interface" : true,
                "push" : true
              }
            },
            "stock" : {
              "enabled" : true,
              "channelsEnabled" : {
                "email" : true,
                "interface" : true,
                "push" : true
              }
            },
            "task" : {
              "enabled" : true,
              "channelsEnabled" : {
                "email" : true,
                "interface" : true,
                "push" : true
              }
            },
            "mentions" : {
              "enabled" : true,
              "channelsEnabled" : {
                "email" : true,
                "interface" : true,
                "push" : true
              }
            },
            "onlineStores" : {
              "enabled" : true,
              "channelsEnabled" : {
                "email" : true,
                "interface" : true,
                "push" : true
              }
            }
          }'
```

> Response 200 (application/json)
Успешное изменение настроек уведомлений.
