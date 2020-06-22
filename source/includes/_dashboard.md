## Показатели
В рамках JSON API можно запросить показатели за день, месяц и неделю. Подробнее о разделе "Показатели"
вы можете прочитать на портале поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/217235207-%D0%A0%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB-%D0%9F%D0%BE%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D0%B8).

### Структура объекта показателей

| Название  | Тип | Описание                    | Обязательное при ответе|
| --------- |:----|:----------------------------|:------------------------|
|**sales**              |Object|Вложенный объект, представляющий собой информацию о продажах за указанный период.  [Подробнее тут](../dictionaries/#suschnosti-towar-towary-atributy-suschnosti-kod-sistemy-nalogooblozheniq)|да
|**orders**               |Object|Вложенный объект, представляющий собой информацию о заказах за указанный период.  [Подробнее тут](../dictionaries/#suschnosti-towar-towary-atributy-suschnosti-kod-sistemy-nalogooblozheniq)|да
|**money**              |Object|Вложенный объект, представляющий собой информацию о деньгах за указанный период.  [Подробнее тут](../dictionaries/#suschnosti-towar-towary-atributy-suschnosti-kod-sistemy-nalogooblozheniq)|да
  
#### Продажи за период 

| Название  | Тип | Описание                    | Обязательное при ответе|
| --------- |:----|:----------------------------|:------------------------|
|**count**|Int|Количество продаж|да
|**amount**|Int|Прибыль|да
|**movementAmount**|Int|Дельта по сравнению с прошлым аналогичным периодом|да

#### Заказы за период

| Название  | Тип | Описание                    | Обязательное при ответе|
| --------- |:----|:----------------------------|:------------------------|
|**count**|Int|Количество продаж|да
|**amount**|Int|Прибыль|да
|**movementAmount**|Int|Дельта по сравнению с прошлым аналогичным периодом|да

#### Деньги за период

| Название  | Тип | Описание                    | Обязательное при ответе|
| --------- |:----|:----------------------------|:------------------------|
|**income**|Int|Доходы за период|да
|**outcome**|Float|Расходы за период|да
|**balance**|Float|Текущий баланс|да
|**todayMovement**|Float|Дельта за сегодня|да
|**movement**|Float|Дельта за период|да

#### День 
### Получить показатели за день 
> Запрос на получение показателей за день.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/dashboard/day"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление показателей.

```json
{
  "sales": {
    "count": 0,
    "amount": 0,
    "movementAmount": -80000
  },
  "orders": {
    "count": 0,
    "amount": 0,
    "movementAmount": 0
  },
  "money": {
    "income": 0,
    "outcome": 0,
    "balance": 69700,
    "todayMovement": 0,
    "movement": 0
  }
}
```

#### Неделя 
### Получить показатели за неделю 
> Запрос на получение показателей за неделю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/dasboard/week"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление показателей.

```json
{
  "sales": {
    "count": 0,
    "amount": 0,
    "movementAmount": -80000
  },
  "orders": {
    "count": 0,
    "amount": 0,
    "movementAmount": 0
  },
  "money": {
    "income": 0,
    "outcome": 0,
    "balance": 69700,
    "todayMovement": 0,
    "movement": 0
  }
}

```

#### Месяц 
### Получить показатели за месяц 
> Запрос на получение показателей за месяц.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/dashboard/month"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление показателей.

```json
{
  "sales": {
    "count": 0,
    "amount": 0,
    "movementAmount": -80000
  },
  "orders": {
    "count": 0,
    "amount": 0,
    "movementAmount": 0
  },
  "money": {
    "income": 0,
    "outcome": 0,
    "balance": 69700,
    "todayMovement": 0,
    "movement": 0
  }
}
```
