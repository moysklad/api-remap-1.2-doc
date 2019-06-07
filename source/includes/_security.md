## Доступ с использованием токена
Средствами JSON API можно создавать токены доступа, которые можно использовать для доступа к JSON API без необходимости использования логина и пароля пользователя.

Для доступа по токену необходимо указать заголовок `Authorization` со значением `Bearer <Bearer-Token>`

> Пример заголовка

```
Authorization: Bearer 0cbfc512618efa7d5fa306250bca064c1169b37c
```

### Получение нового токена
Запрос на получение нового токена.

* **bearerToken** - токен для доступа

> Пример запроса на получение нового токена

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/security/token"
  -H "Authorization: Basic <Access-Token>"
``` 

> Response 200 (application/json) Успешный запрос. Результат JSON объект, содержащий токен

```json
{
  "bearerToken": "0cbfc512618efa7d5fa306250bca064c1169b37c"
}
```
