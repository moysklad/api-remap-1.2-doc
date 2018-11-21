<!-- include(metadata.apib) -->

# Документ Выплата денег
Средствами JSON API можно создавать и обновлять сведения о выплатах денег, запрашивать списки выплат денег и сведения по отдельным выплатам денег. Кодом сущности для внесения денег в составе JSON API является ключевое слово **retaildrawercashout**. Больше о выплатах денег и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по  [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203325423-%D0%A0%D0%BE%D0%B7%D0%BD%D0%B8%D1%86%D0%B0#11)
## Выплаты денег [/entity/retaildrawercashout/]
### Атрибуты сущности
+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выплате денег
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **syncId** - ID синхронизации. После заполнения недоступен для изменения.
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **deleted** - Момент последнего удаления сущности `Только для чтения`
+ **name** - номер выплаты денег
+ **description** - Комментарий выплаты денег
+ **externalCode** - Внешний код выплаты денег
+ **moment** - Дата выплаты
+ **applicable** - Отметка о проведении
+ **sum** - Сумма выплата в установленной валюте `Только для чтения`
+ **rate** - Валюта
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Необходимое`
+ **agent** - Ссылка на сотрудника, которому была совершена выплата, в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Необходимое`
+ **state** - Статус выплаты в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **attributes** - Коллекция доп. полей в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
<br>Поля при expand'е:</br>
  - **name** - номер документа
  - **moment** - дата печати
  - **href** - ссылка на файл печатной формы
  - **fileName** - название файла печатной формы
  - **updated** - дата последнего изменения
+ **created** - Дата создания `Только для чтения`
### Связи с другими документами
+ **retailShift** - Ссылка на розничную смену, в рамках которой была выполнена выплата денег в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Необходимое`

<!-- include(rate.apib) -->

### Получить выплаты денег [GET]
Запрос на получение всех выплат денег на данной учётной записи.
+ Parameters
  + limit: 1000 (optional, enum[number])
  Максимальное количество сущностей для извлечения.
  <p>
    <code>Допустимые значения 1 - 1000</code>
  </p>
      + Default: `1000`
  + offset: 40 (optional, number)
    Отступ в выдаваемом списке сущностей
      + Default: `0`

  + search: `0001` (optional, string)
    URL Параметр для поиска по имени документа.
    Фильтр документов по указанной поисковой строке. Фильтрация происходит по
    полю name.

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка выплат денег.
  + Body
        <!-- include(body/retaildrawercashout/get_list.json) -->

### Создать выплату денег [POST]
Запрос на создание выплаты денег.

+ Request Пример 1 (application/json)
Пример создания новой выплаты денег.
  + Body
        <!-- include(body/retaildrawercashout/post_request.json) -->
+ Response 200
  + Body
        <!-- include(body/retaildrawercashout/post_response.json) -->

### Массовое создание и обновление выплат денег [POST]
[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) выплат денег.
В теле запроса нужно передать массив, содержащий JSON представления выплат денег, которые вы хотите создать или обновить.
Обновляемые выплаты денег должны содержать идентификатор в виде метаданных.

+ Request Пример (application/json)
Пример создания и обновления нескольких выплат денег
  + Body
        <!-- include(body/retaildrawercashout/post_massive_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных выплат денег.
  + Body
        <!-- include(body/retaildrawercashout/post_massive_response.json) -->

### Удалить внесение денег [DELETE /entity/retaildrawercashout/{id}]
+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id выплаты денег

Запрос на удаление выплаты денег с указанным id.

## Метаданные выплат денег [/entity/retaildrawercashout/metadata]
### Метаданные выплат денег [GET]
Запрос на получение метаданных выплат денег. Результат - объект JSON, включающий в себя:
+ **meta** - Ссылка на метаданные выплат денег
+ **attributes** - Массив объектов доп. полей выплат денег в формате [Метаданных](#header-метаданные)
+ **states** - Массив статусов выплат денег
+ **createShared** - создавать новые выплаты денег с меткой "Общий"

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](#header-работа-с-дополнительными-полями).

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей выплат денег.
  + Body
        <!-- include(body/retaildrawercashout/get_metadata.json) -->

## Отдельное доп. поле [/entity/retaildrawercashout/metadata/attributes/{id}]
+ Parameters
  + id: `5290a290-0313-11e6-9464-e4de00000020` (required, string) - id Доп. поля
### Отдельное доп. поле [GET]
Запрос на получение информации по отдельному дополнительному полю.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.
  + Body
        <!-- include(body/retaildrawercashout/metadata_by_id.json) -->

## Шаблон выплаты денег [/entity/retaildrawercashout/new]
### Шаблон выплаты денег [PUT]
Запрос на получение предзаполненого стандартными значениями шаблона выплаты денег без связи с каким-либо документом.

+ Request Пустое тело запроса (application/json)

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненной выплаты денег.
  + Body
        <!-- include(body/retaildrawercashout/new_empty.json) -->

### Шаблон выплаты денег на основе [PUT]
Запрос на получение предзаполненной выплаты денег на основе розничной смены.
В результате запроса, будет создан предзаполненный шаблон выплаты денег на основе переданной
розничной смены.

+ Request Пример с розничной сменой (application/json)
Запрос на создание выплаты денег на основе розничной смены.
  + Body
        <!-- include(body/retaildrawercashout/new_shift_request.json) -->
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление предзаполненной выплаты денег.
  + Body
        <!-- include(body/retaildrawercashout/new_shift_response.json) -->

## Выплата денег [/entity/retaildrawercashout/{id}]

### Получить выплату денег [GET]
Запрос на получение отдельной выплаты денег с указанным id.

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление выплаты денег с указанным id.
  + Body
        <!-- include(body/retaildrawercashout/get_by_id.json) -->

### Изменить выплачу денег [PUT]
Запрос на обновление выплаты денег.
+ Request Пример 1 (application/json)
Пример обновления выплаты денег.
  + Body
        <!-- include(body/retaildrawercashout/put_request.json) -->
+ Response 200
  + Body
        <!-- include(body/retaildrawercashout/put_response.json) -->
