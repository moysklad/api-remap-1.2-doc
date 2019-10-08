## Регистрация нового аккаунта
Средствами JSON API можно создавать новые аккаунты. Обратите внимание, данные принимаются в формате `application/x-www-form-urlencoded`

### Создать новый аккаунт
> Пример создания нового аккаунта

```shell
curl -X PUT
  "https://online.moysklad.ru/api/remap/1.2/register"
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'email=example%40mail.com&company=ExampleCompany&partner=ExamplePartner&source=ExampleSource&phone=+74951623223'`
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление данных созданного аккаунта

```json
{
  "uid": "admin@ExampleCompany",
  "password": "password",
  "accountName": "ExampleCompany"
}
```

Запрос на создание нового аккаунта.
Для успешного создания необходимо в теле запроса указать следующие параметры:

+ **email** - адрес электронной почты `Необходимое`
+ **company** - название организации
+ **partner** - код партнера
+ **source** - код источника
+ **phone** - номер городского телефона

