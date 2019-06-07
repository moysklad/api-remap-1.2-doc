## Токен доступа
Средствами JSON API можно создавать токены доступа, которые можно использовать для доступа к JSON API без использования логина и пароля пользователя.

### Получение нового токена

> Пример запроса на получение нового токена

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/security/token"
  -H "Authorization: Basic <Access-Token>"
``` 

> Response 200 (application/json) Успешный запрос. Результат сгенерированный токен

```json
{
  "bearerToken": "0cbfc512618efa7d5fa306250bca064c1169b37c"
}
```
