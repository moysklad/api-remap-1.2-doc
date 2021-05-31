## Подписка компании

Получить информацию о действующей подписке компании. 

#### Подписка компании
#### Атрибуты сущности

| Название  | Тип | Описание                    | Свойство поля в запросе | Обязательное при ответе|
| --------- |:----|:----------------------------|:----------------|:------------------------|
|**role**                           |String(255)|Роль авторизованного пользователя (USER/ADMIN)|Только для чтения|да
|**tariff**                         |String(255)|Действующий тариф Аккаунта|Только для чтения|да
|**isSubscriptionChangeAvailable**  |Boolean|Доступность изменения подписки|Только для чтения|да
|**subscriptionEndDate**            |Long|Дата (в миллисекундах) окончания действия текущего тарифа, если тариф отличается от “Пробный” и “Бесплатный”|Только для чтения|да

#### Действующий тариф аккаунта
Значения поля tariff

| Значение            | Описание                |
| ------------------- |:------------------------|
| **TRIAL**           |Тариф "Пробный"          |
| **START**           |Тариф "Старт"            |
| **MINIMAL**         |Тариф "Индивидуальный"   |
| **BASIC**           |Тариф "Базовый"          |
| **PROFESSIONAL**    |Тариф "Профессиональный" |
| **CORPORATE**       |Тариф "Корпоративный"    |
| **FREE**            |Тариф "Бесплатный 2014"  |
| **RETAIL**          |Тариф "Бесплатный"       |

### Получить Подписку компании 
> Запрос на получение подписки компании.

```shell
curl -X GET 
  "https://online.moysklad.ru/api/remap/1.2/accountSettings/subscription"
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