<!-- include(metadata.apib) -->

# Кассир
## Кассиры [/entity/retailstore/{retailStoreId}/cashiers]
Средствами JSON API можно запрашивать списки Кассиров и сведения по отдельным кассирам. Кодом сущности для кассира в составе JSON API является ключевое слово **cashier**.
### Атрибуты сущности
+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о смене`Только для чтения`
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи`Только для чтения`
+ **employee** - Ссылка на сотрудника в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **retailStore** - Ссылка на точку продаже в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)


### Получить Кассиров [GET]
Запрос на получение списка всех кассиров на данной точке продаж.
Результат: Объект JSON, включающий в себя поля:
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче.
- **rows** - Массив JSON объектов, представляющих собой кассиров.
+ Parameters
  + retailStoreId: `ea05e0c9-8667-11e7-8a7f-40d000000060` (required, string) - id Точки продаж
  + limit: 1000 (optional, enum[number])
  Максимальное количество сущностей для извлечения.
  <p>
    <code>Допустимые значения 1 - 1000</code>
  </p>
      + Default: `1000`
  + offset: 40 (optional, number)
    Отступ в выдаваемом списке сущностей
      + Default: `0`

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка кассиров.
  + Body
        <!-- include(body/cashier/get_list.json) -->


## Кассир [/entity/retailstore/{retailStoreId}/cashiers/{id}]
+ Parameters
  + retailStoreId: `ea05e0c9-8667-11e7-8a7f-40d000000060` (required, string) - id Точки продаж
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Кассира

### Получить Кассира [GET]
Запрос на получение отдельного кассира с указанным id.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного кассира.
  + Body
        <!-- include(body/cashier/get_by_id.json) -->
