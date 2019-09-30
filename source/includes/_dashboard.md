## Показатели
В рамках JSON API можно запросить показатели за день, месяц и неделю. Подробнее о разделе "Показатели"
вы можете прочитать на портале поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/217235207-%D0%A0%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB-%D0%9F%D0%BE%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D0%B8).

### Структура объекта показателей
+ **sales** - Вложенный объект, представляющий собой информацию о продажах за указанный период
  - **count** - Количество продаж
  - **amount** - Прибыль
  - **movementAmount** - Дельта по сравнению с прошлым аналогичным периодом
+ **orders** - Вложенный объект, представляющий собой информацию о заказах за указанный период
  - **count** - Количество заказов
  - **amount** - Прибыль
  - **movementAmount** - Дельта по сравнению с прошлым аналогичным периодом
+ **money** - Вложенный объект, представляющий собой информацию о деньгах за указанный период
  - **income** - Доходы за период
  - **outcome** - Расходы за период
  - **balance** - Текущий баланс
  - **todayMovement** - Дельта за сегодня
  - **movement** - Дельта за период

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
