# Уведомления

## Токен устройства

### Зарегистрировать новый или обновить токен устройства

**Параметры**

|Параметр   |Описание   | 
|---|---|
|   deviceType|   `ios` (required, string) - Тип устройства. Строка из множества {'android', 'ios', 'browser'}|
|   |   |

> Пример сохранения инфрмации о токена
```shell
  curl -X POST
    "https://online.moysklad.ru/api/remap/1.2/notification/token/ios"
    -H "Authorization: Basic <Access-Token>"
    -H "Content-Type: application/json"
      -d ''  
```

> Response 201
