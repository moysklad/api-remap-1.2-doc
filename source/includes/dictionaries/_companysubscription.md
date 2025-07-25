## Подписка компании

Кодом сущности для Подписки компании в составе JSON API является ключевое слово **subscription**.

Получить информацию о действующей подписке компании. 

#### Подписка компании
#### Атрибуты сущности

| Название                          | Тип         | Описание                                                                                                                                                        |
| --------------------------------- | :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **role**                          | String(255) | Роль авторизованного пользователя (USER/ADMIN)<br>`+Обязательное при ответе` `+Только для чтения`                                                               |
| **tariff**                        | String(255) | Действующий тариф Аккаунта<br>`+Обязательное при ответе` `+Только для чтения`                                                                                   |
| **isSubscriptionChangeAvailable** | Boolean     | Доступность изменения подписки<br>`+Обязательное при ответе` `+Только для чтения`                                                                               |
| **subscriptionEndDate**           | Long        | Дата (в миллисекундах) окончания действия текущего тарифа, если тариф отличается от “Пробный” и “Бесплатный”<br>`+Обязательное при ответе` `+Только для чтения` |

#### Действующий тариф аккаунта
Значения поля tariff

| Значение            | Описание                  |
| ------------------- | :------------------------ |
| **BASIC**           | Тариф "Базовый"           |
| **CORPORATE**       | Тариф "Корпоративный"     |
| **FREE**            | Тариф "Бесплатный 2014"   |
| **MINIMAL**         | Тариф "Индивидуальный"    |
| **PROFESSIONAL**    | Тариф "Профессиональный"  |
| **RETAIL**          | Тариф "Бесплатный"        |
| **START**           | Тариф "Старт"             |
| **TRIAL**           | Тариф "Пробный"           |

### Получить Подписку компании 
> Запрос на получение подписки компании.

```shell
curl -X GET 
  "https://api.moysklad.ru/api/remap/1.2/accountSettings/subscription"
  -H Authorization: Basic <Credentials>
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление Подписки компании.

```json
{
    "role": "admin",
    "tariff": "CORPORATE",
    "isSubscriptionChangeAvailable": true,
    "subscriptionEndDate": 1642520241922
}
```
