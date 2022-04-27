## Показатели
В рамках JSON API можно запросить показатели за день, месяц и неделю. Для доступа к отчету через API требуется право на просмотр показателей (viewDashboard).

### Структура объекта показателей

| Название   | Тип    | Описание                                                                                                                                                                                                                   |
| ---------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **sales**  | Object | Вложенный объект, представляющий собой информацию о продажах за указанный период. [Подробнее тут](../dictionaries/#suschnosti-towar-towary-atributy-suschnosti-kod-sistemy-nalogooblozheniq)<br>`+Обязательное при ответе` |
| **orders** | Object | Вложенный объект, представляющий собой информацию о заказах за указанный период. [Подробнее тут](../dictionaries/#suschnosti-towar-towary-atributy-suschnosti-kod-sistemy-nalogooblozheniq)<br>`+Обязательное при ответе`  |
| **money**  | Object | Вложенный объект, представляющий собой информацию о деньгах за указанный период. [Подробнее тут](../dictionaries/#suschnosti-towar-towary-atributy-suschnosti-kod-sistemy-nalogooblozheniq)<br>`+Обязательное при ответе`  |
  
#### Продажи за период 

| Название           | Тип | Описание                                                                         |
| ------------------ | :-- | :------------------------------------------------------------------------------- |
| **count**          | Int | Количество продаж<br>`+Обязательное при ответе`                                  |
| **amount**         | Int | Прибыль<br>`+Обязательное при ответе`                                            |
| **movementAmount** | Int | Дельта по сравнению с прошлым аналогичным периодом<br>`+Обязательное при ответе` |

#### Заказы за период

| Название           | Тип | Описание                                                                         |
| ------------------ | :-- | :------------------------------------------------------------------------------- |
| **count**          | Int | Количество продаж<br>`+Обязательное при ответе`                                  |
| **amount**         | Int | Прибыль<br>`+Обязательное при ответе`                                            |
| **movementAmount** | Int | Дельта по сравнению с прошлым аналогичным периодом<br>`+Обязательное при ответе` |

#### Деньги за период

| Название          | Тип   | Описание                                        |
| ----------------- | :---- | :---------------------------------------------- |
| **income**        | Int   | Доходы за период<br>`+Обязательное при ответе`  |
| **outcome**       | Float | Расходы за период<br>`+Обязательное при ответе` |
| **balance**       | Float | Текущий баланс<br>`+Обязательное при ответе`    |
| **todayMovement** | Float | Дельта за сегодня<br>`+Обязательное при ответе` |
| **movement**      | Float | Дельта за период<br>`+Обязательное при ответе`  |

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

### Получить показатели за неделю 
> Запрос на получение показателей за неделю.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/report/dashboard/week"
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
