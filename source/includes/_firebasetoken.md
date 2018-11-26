# Уведомления

## Токен устройства [/notification/token/{deviceType}]

### Зарегистрировать новый или обновить токен устройства [POST]

+ Parameters
  + deviceType: `ios` (required, string) - Тип устройства. Строка из множества {'android', 'ios', 'browser'}
  + Request Пример (application/json)
  Пример сохранения инфрмации о токена
    + Body
        <!-- include(body/notification/put_token.json) -->

+ Response 201
