## Доступ с использованием токена
Средствами JSON API можно создавать токены доступа, которые можно использовать для доступа к JSON API без необходимости использования логина и пароля пользователя.

Для доступа по токену необходимо указать заголовок `Authorization` со значением `Bearer <Access-Token>`

> Пример заголовка

```
Authorization: Bearer 0cbfc512618efa7d5fa306250bca064c1169b37c
```

### Получение нового токена
Запрос на получение нового токена. Как и в других запросах, в заголовке `Authorization` пара `логин:пароль` указывается закодированной в варианте RFC2045-MIME стандарта Base64. 

* **access_token** - токен для доступа

> Пример запроса на получение нового токена

```shell
curl -X POST
  "https://online.moysklad.ru/api/remap/1.2/security/token"
  -H "Authorization: Basic <Credentials>"
``` 

> Response 200 (application/json) Успешный запрос. Результат JSON объект, содержащий токен

```json
{
  "access_token": "0cbfc512618efa7d5fa306250bca064c1169b37c"
}
```
