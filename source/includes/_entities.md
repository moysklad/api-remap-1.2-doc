<!-- include(metadata.apib) -->

# Сущности
##  Контрагент
### Контрагенты [/entity/counterparty]

Средствами JSON API можно создавать и обновлять сведения о Контрагентах, запрашивать списки Контрагентов и сведения по отдельным Контрагентам. Счетами Контрагента и его контактными лицами можно управлять как в составе отдельного Контрагента, так и отдельно - с помощью специальных ресурсов для управления счетами и контактными лицами Контрагента. Кодом сущности для Контрагента в составе JSON API является ключевое слово **counterparty**. Больше о Контрагентах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203053486-%D0%A1%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA-%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%B0%D0%B3%D0%B5%D0%BD%D1%82%D0%BE%D0%B2).
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](/api/remap/1.2/doc/index.html#header-контекстный-поиск).

Поиск среди объектов Контрагента осуществляется по нескольким условиям. Если значения полей контрагента удовлетворяют хотя бы одному из условий, то контрагент будет найден.

Первое условие поиска:
+ По наименованию Контрагента **name**
+ По коду Контрагента **code**
+ По полному наименованию Контрагента **legalTitle**
+ По номеру дисконтной карты Контрагента **discountCardNumber**
+ По адресу электронной почты **email**

Второе условие поиска:
+ По номеру городского телефона **phone**

Третье условие поиска по полям из всех контактных лиц фирмы контрагента (contactpersons):
+ По имени контактного лица **name**
+ По почте контактного лица **email**

Четвертое условие поиска по полям из всех контактных лиц фирмы контрагента (contactpersons):
+ По номеру телефона контактного лица **phone**

##### Атрибуты сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) объекта
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **syncId** - ID синхронизации. После заполнения недоступен для изменения.
+ **updated** - Момент последнего обновления Контрагента `Только для чтения`
+ **name** - Наименование Контрагента `Необходимое`
+ **description** - Комментарий к Контрагенту
+ **code** - Код Контрагента
+ **externalCode** - Внешний код Контрагента `Только для чтения`
+ **archived** - Добавлен ли Контрагент в архив
+ **created** - Дата создания
+ **email** - Адрес электронной почты
+ **phone** - Номер городского телефона
+ **fax** - Номер факса
+ **actualAddress** - Фактический адрес Контрагента
+ **accounts** - Ссылка на счета Контрагента (массив)
+ **companyType** - Тип Контрагента. `[Юридическое лицо, Индивидуальный предприниматель, Физическое лицо]`.
В зависимости от значения данного поля набор выводимых реквизитов контрагента может меняться. Подробнее [тут](#header-тип-контрагента)
+ **discountCardNumber** - номер дисконтной карты Контрагента
+ **state** - Статус Контрагента в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **salesAmount** - Сумма продаж `Только для чтения`

###### Поля реквизитов

+ **legalTitle** - Полное наименование Контрагента
+ **legalAddress** - Юридический адрес Контрагента
+ **inn** - ИНН
+ **kpp** - КПП
+ **ogrn** - ОГРН
+ **ogrnip** - ОГРНИП
+ **okpo** - ОКПО
+ **certificateNumber** - Номер свидетельства
+ **certificateDate** - Дата свидетельства
+ **tags** - Группы (массив)
+ **contactpersons** - Ссылка на контактные лица фирмы Контрагента (массив)
+ **attributes** - Коллекция доп. полей в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **discounts** - Массив ссылок на скидки в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Только для чтения`

Массив может содержать персональные и накопительные скидки. Персональная скидка выводится, если хотя бы раз изменялся **процент скидки** для контрагента, значение будет указано в поле **personalDiscount**.
Накопительная скидка выводится, если для контрагента хотя бы раз устанавливалась **коррекция суммы накоплений по скидке**, значение будет указано в поле **demandSumCorrection**. Формат вывода скидок можно посмотреть в разделе [Скидки](#скидки).
+ **notes** - Массив ссылок на события Контрагента в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **priceType** - Тип цены Контрагента (строка или null)

##### Атрибуты вложенных сущностей
###### Счета Контрагентов

+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **updated** - Момент последнего обновления Контрагента `Только для чтения`
+ **isDefault** - Является ли счёт основным счётом Контрагента
+ **accountNumber** - Номер счёта `Необходимо`
+ **bankName** - Наименование банка
+ **bankLocation** - Адрес банка
+ **correspondentAccount** - Корр счет
+ **bic** - БИК

###### Контактные лица Контрагентов

+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **updated** - Момент последнего обновления Контрагента `Только для чтения`
+ **name** - ФИО контактного лица `Необходимое`
+ **description** - Описание контактного лица
+ **externalCode** - Внешний код контактного лица
+ **email** - Адрес электронной почты контактного лица
+ **phone** - Номер телефона контактного лица
+ **position** - Должность контактного лица
+ **agent** - Ссылка на Контрагента (тип [Мета](/api/remap/1.2/doc/index.html#header-метаданные))

###### События Контрагента

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) объекта
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **created** - Момент создания события Контрагента `Только для чтения`
+ **description** - Текст события Контрагента `Необходимое`
+ **agent** - Ссылка на Контрагента (тип [Мета](/api/remap/1.2/doc/index.html#header-метаданные)) `Только для чтения`
+ **author** - Создатель события, ссылка на сотрудника (тип [Мета](/api/remap/1.2/doc/index.html#header-метаданные)) `Только для чтения`

###### Тип Контрагента

В зависимости от типа контрагента **companyType** в составе его объекта будут выводиться разные наборы реквизитов.
Типы контрагента и соответствующие значения, которые могут быть переданы в данном поле:
| Тип контрагента                | Значение поля companyType  |
| ------------------------------ |:---------------------------|
| Юридическое лицо               | legal                      |
| Индивидуальный предприниматель | entrepreneur               |
| Физическое лицо                | individual                 |

Если тип контрагента `Юридическое лицо`, будут выведены следующие поля реквизитов:
+ **legalTitle** - Полное наименование Контрагента
+ **legalAddress** - Юридический адрес Контрагента
+ **inn** - ИНН
+ **kpp** - КПП
+ **ogrn** - ОГРН
+ **okpo** - ОКПО

Если тип контрагента `Индивидуальный предприниматель`, будут выведены следующие поля реквизитов:
+ **legalTitle** - Полное наименование Контрагента
+ **legalAddress** - Юридический адрес Контрагента
+ **inn** - ИНН
+ **okpo** - ОКПО
+ **ogrnip** - ОГРНИП
+ **certificateNumber** - Номер свидетельства
+ **certificateDate** - Дата свидетельства

Если тип контрагента `Физическое лицо`, будут выведены следующие поля реквизитов:
+ **legalTitle** - Полное наименование Контрагента
+ **legalAddress** - Юридический адрес Контрагента
+ **inn** - ИНН

О работе с доп. полями Контрагентов можно прочитать [здесь](/api/remap/1.2/doc/index.html#header-работа-с-дополнительными-полями)


#### Получить список Контрагентов [GET]

Получить список всех Контрагентов.
Результат: Объект JSON, включающий в себя поля:
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой Контрагентов.

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

  + tags: `рабочие`(optional, string)
    Подробнее про данный параметр можно посмотреть в разделе [Фильтрация выборки с помощью параметра filter](/api/remap/1.2/doc/index.html#header-фильтрация-выборки-с-помощью-параметра-filter).
    Формат строки : `string`

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Контрагентов.
  <!-- include(body/counterparty/get_list.json) -->

#### Создать Контрагента [POST]

Создать нового Контрагента

##### Описание

Контрагент создаётся на основе переданного объекта JSON,
который содержит представление нового Контрагента.
+ Request Пример 1 (application/json)
Пример типичного запроса для создания Контрагента.
  + Body
        <!-- include(body/counterparty/post_request1.json) -->
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Контрагента.
    + Body
          <!-- include(body/counterparty/post_request2.json) -->


+ Request Пример 2 (application/json)
Пример запроса на создание Контрагента с указанием только лишь его имени
  + Body
        <!-- include(body/counterparty/post_short.json) -->


+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Контрагента.
  + Body
        <!-- include(body/counterparty/post_short_response.json) -->

+ Request Пример с доп полями (application/json)
Пример запроса для создания Контрагента с доп полями в теле запроса.
    + Body
          <!-- include(body/counterparty/post_with_attributes_request.json) -->


+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Контрагента.
    + Body
          <!-- include(body/counterparty/post_with_attributes_response.json) -->

#### Массовое создание и обновление Контрагентов [POST]

[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) Контрагентов.
В теле запроса нужно передать массив, содержащий JSON представления Контрагентов, которые вы хотите создать или обновить.
Обновляемые Контрагентов должны содержать идентификатор в виде метаданных.

+ Request Пример (application/json)
Пример создания и обновления нескольких Контрагентов
  + Body
        <!-- include(body/counterparty/post_massive_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Контрагентов.
  + Body
        <!-- include(body/counterparty/post_massive_response.json) -->

#### Удалить Контрагента [DELETE /entity/counterparty/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Контрагента

Запрос на удаление Контрагента с указанным id.

+ Response 200 (application/json)
Успешное удаление Контрагента.

### Метаданные Контрагентов [/entity/counterparty/metadata]
##### Метаданные Контрагентов [GET]

Запрос на получение метаданных Контрагентов. Результат - объект JSON, включающий в себя:
+ **meta** - Ссылка на метаданные Контрагентов
+ **attributes** - Массив объектов доп. полей Контрагентов в формате [Метаданных](#header-метаданные)
+ **states** - Массив статусов Контрагентов
+ **createShared** - создавать новых Контрагентов с меткой "Общий"

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](#header-работа-с-дополнительными-полями).

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Контрагентов.
  + Body
        <!-- include(body/counterparty/get_metadata.json) -->

### Отдельное доп. поле [/entity/counterparty/metadata/attributes/{id}]

+ Parameters
  + id: `5290a290-0313-11e6-9464-e4de00000020` (required, string) - id Доп. поля
  
##### Отдельное доп. поле [GET]

Запрос на получение информации по отдельному дополнительному полю.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.
  + Body
        <!-- include(body/counterparty/metadata_by_id.json) -->

### Контрагент [/entity/counterparty/{id}]

Контрагент, обращение к которому происходит по значению его id.

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Контрагента.

#### Получить Контрагента [GET]

Возвращает JSON представление Контрагента с указанным id.

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление Контрагента с указанным id.
  + Body
        <!-- include(body/counterparty/get_by_id.json) -->

#### Изменить Контрагента [PUT]
##### Описание

Обновляется представление Контрагента с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Контрагента, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Контрагента](#контрагент-контрагенты).
Поля, которые не были указаны в JSON запроса, не изменяются.
Поля **account** и **contactpersons** обновляются как элементы вложенных коллекций. При обновлении,
переданные элементы данных коллекций обрабатываются как "Все элементы данной коллекции" и полностью заменяют
элементы, ранее присутствовавшие в ней.

+ Request Пример (application/json)
В теле запроса можно указать только те поля, которые необходимо изменить у Контрагента
+ Body
    <!-- include(body/counterparty/put_request.json) -->

+ Response 200 (application/json)
Успешное обновление. Результат - JSON представление обновлённого Контрагента.
  + Body
      <!-- include(body/counterparty/put_response.json) -->

+ Request Пример c доп полями(application/json)
Пример запроса для обновления Контрагента с доп полями в теле запроса.
    + Body
          <!-- include(body/counterparty/put_with_attributes_request.json) -->

+ Response 200 (application/json)
Успешное обновление. Результат - JSON представление обновлённого Контрагента.
  + Body
      <!-- include(body/counterparty/put_with_attributes_response.json) -->

##### Счета Контрагента [/entity/counterparty/{id}/accounts]

Список счетов Контрагента с указанным id.
+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Контрагента.

### Получить счета Контрагента [GET]

Возвращает массив JSON представлений счетов Контрагента.
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

+ Response 200 (application/json)
Успешный запрос.
  + Body
      <!-- include(body/counterparty/get_accounts.json) -->

##### Счет Контрагента [/entity/counterparty/{id}/accounts/{accountId}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Контрагента.
  + accountId: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Счёта.

### Получить счет Контрагента [GET]

Возвращает JSON представление счета Контрагента.
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
+ Response 200 (application/json)
Успешный запрос.
  + Body
      <!-- include(body/counterparty/get_account.json) -->

### Контактные лица Контрагента [/entity/counterparty/{id}/contactpersons]

Получить список контактных лиц Контрагента с указанным id.
+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Контрагента.

#### Список контактных лиц [GET]

Возвращает массив JSON представлений контактных лиц Контрагента.
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

+ Response 200 (application/json)
Успешный запрос.
  + Body
        <!-- include(body/counterparty/get_contactpersons.json) -->

#### Создать контактное лицо[POST]

Создать контактное лицо Контрагента с указанным id.

+ Request Пример (application/json)
Пример запроса на создание контактного лица Контрагента.
  + Body
      <!-- include(body/counterparty/post_contactperson.json) -->

+ Response 200 (application/json)
Успешное создание.
  + Body
      <!-- include(body/counterparty/post_contactperson_response.json) -->

### Контактное лицо [/entity/counterparty/{id}/contactpersons/{contactpersonId}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Контрагента.
  + contactpersonId: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id контактного лица.

#### Получить контактное лицо [GET]

Возвращает JSON представление отдельного контактного лица Контрагента.
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

+ Response 200 (application/json)
Успешный запрос.
  + Body
      <!-- include(body/counterparty/get_contactperson.json) -->
      
#### Изменить контактное лицо[PUT]

+ Parameters
  + contactpersonId: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id контактного лица.
  
##### Описание

Обновить контактное лицо Контрагента с указанным id.
Обновляются все поля, указанные в JSON объекте запроса, кроме
помеченных `Только для чтения` в описании [атрибутов контактных лиц Контрагента](#header-контактные-лица-контрагентов).
Поля, которые не были указаны в JSON запроса, не изменяются.
+ Request Пример (application/json)
Пример запроса на обновление контактного лица Контрагента.
  + Body
      <!-- include(body/counterparty/put_contactperson.json) -->

+ Response 200 (application/json)
Успешное обновление.
  + Body
      <!-- include(body/counterparty/put_contactperson_response.json) -->

### События Контрагента [/entity/counterparty/{id}/notes]

Получить список событий Контрагента с указанным id.
+ Parameters
  + id: `67e5a691-3c9c-11e7-8af5-581e00000056` (required, string) - id Контрагента.

#### Список событий [GET]

Возвращает массив JSON представлений событий Контрагента.
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

+ Response 200 (application/json)
Успешный запрос.
  + Body
        <!-- include(body/counterparty/get_notes.json) -->

#### Добавить событие [POST]

+ Request Пример (application/json)
Запрос на добавление нового события.
  + Body
        <!-- include(body/counterparty/post_note_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление добавленного события.
  + Body
        <!-- include(body/counterparty/post_note_response.json) -->

### Событие [/entity/counterparty/{id}/notes/{noteId}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Контрагента.
  + noteId: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id события.

#### Получить событие [GET]

Возвращает JSON представление отдельного события Контрагента.
+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Контрагента.
  + noteId: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id события.

+ Response 200 (application/json)
Успешный запрос.
  + Body
      <!-- include(body/counterparty/get_note.json) -->
      
#### Изменить событие [PUT]
##### Описание

Обновить событие Контрагента с указанным id.
Обновляются все поля, указанные в JSON объекте запроса, кроме
помеченных `Только для чтения` в описании [атрибутов событий Контрагента](#header-события-контрагента).
Поля, которые не были указаны в JSON запроса, не изменяются.
+ Request Пример (application/json)
Пример запроса на обновление события Контрагента.
  + Body
      <!-- include(body/counterparty/put_note.json) -->

+ Response 200 (application/json)
Успешное обновление.
  + Body
      <!-- include(body/counterparty/put_note_response.json) -->

#### Удалить событие [DELETE]

+ Parameters
  + id: `67e5a691-3c9c-11e7-8af5-581e00000056` (required, string) - id Контрагента.
  + noteId: `50b318cb-3cb0-11e7-8af5-581e00000007` (required, string) - id события

Запрос на удаление события с указанным id.

+ Response 200 (application/json)
Успешное удаление События.

<!-- include(metadata.apib) -->

## Ассортимент
##### Ассортимент [/entity/assortment]

Сущность assortment представляет собой список всех товаров, услуг, комплектов, серий и модификаций с полями `stock`,
`reserve`, `inTransit`, `quantity`, показывающими остаток, резерв, ожидание и доступно каждой из сущностей (для комплектов не выводятся поля остатков и резерва).
Данные поля могут быть рассчитаны в зависимости от даты и склада с использованием параметров запроса `stockmoment` и `stockstore`.
Особенность данной сущности заключается в наличии специального параметра `search` в фильтре по нескольким полям с помощью параметра `filter`.
Используя этот параметр можно произвести контекстный поиск по объектам, выводимым в ассортименте.
Чтобы это осуществить, нужно использовать [фильтр выборки по нескольким полям](/api/remap/1.2/doc/index.html#header-фильтрация-выборки-с-помощью-параметра-filter),
указав в качестве одного из полей поле `search` и условие для этого поля - равенство поисковой строке.
+ Пример (не URL encoded): `filter=search=some_random_string`.

Поиск `filter=search=some_random_string` среди объектов ассортимента на соответствие поисковой строке будет осуществлён по следующим полям:
+ по наименованию элемента Ассортимента **name**
+ по имени модификации **name**
+ по коду **code**
+ по коду модификации **code**
+ по артикулу **article**
+ по штрихкоду **barcode**
+ по штрихкоду модификации **barcode**

Также по данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search` (используется без `filter`). Подробнее можно узнать по [ссылке](#header-контекстный-поиск). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск `search=some_random_string` среди объектов ассортимента на соответствие поисковой строке будет осуществлён по следующим полям:
+ по наименованию элемента ассортимента **name**
+ по описанию **description**

Также ассортимент можно запросить с использованием ссылочного фильтра по группе товаров **productFolder**.

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
  + stockstore: (optional, string)
  Ссылка на склад, по которому нужно получить остатки. Формат - URI.
  + stockmoment: (optional, string)
  Момент времени, на который нужно вывести остатки. Формат строки:
      - `YYYY-MM-DD HH:MM:SS`.
  + scope: (optional, string)
  Параметр фильтрации по типу объектов. Принимает одно из значений:
      - product - будут выведены только товары
      - variant - будут выведены товары и модификации
      - consignment - будут выведены все сущности (аналогично отсутствию параметра)
  + stockmode: (optional, string)
    Вид Остатка. Параметр совместим только с параметрами:limit,offset,stockstore,stockmoment. Если указаны параметры отличные от совместимых в ответ вернется
    ошибка с кодом 1069.
    <p>
      <code>Допустимые значения [all, positiveOnly, negativeOnly, empty, nonEmpty]</code>
    </p>
    По умолчанию параметр stockmode имеет значение all. Если вы хотите увидеть объекты
    с нулевым или отрицательным остатком нужно указать соответствующее значение данного параметра.

### Получить Ассортимент [GET]

Запрос на получение всех товаров, услуг, комплектов, модификаций и серий в виде списка.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка всех товаров, услуг, модификация и серий.
  + Body
        <!-- include(body/assortment/get.json) -->

## Валюта
### Валюты

Средствами JSON API можно запрашивать списки валют и сведения по отдельным валютам, а также создавать новые и обновлять сведения по уже существующим валютам. Кодом сущности для валют в составе JSON API является ключевое слово **currency**. Больше о валютах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по
[этой ссылке](https://support.moysklad.ru/hc/ru/articles/203294033-%D0%92%D0%B0%D0%BB%D1%8E%D1%82%D1%8B).
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](/api/remap/1.2/doc/index.html#header-контекстный-поиск). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов валют на соответствие поисковой строке будет осуществлён по следующим полям:
+ по краткому наименованию Валюты **name**

##### Атрибуты Сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) объекта
+ **id** - ID в формате UUID `Только для чтения`
+ **name** - Краткое наименование Валюты `Необходимое`
+ **fullName** - Полное наименование Валюты
+ **code** - Цифровой код Валюты `Необходимое`
+ **isoCode** - Буквенный код Валюты `Необходимое`
+ **rate** - Курс Валюты
+ **multiplicity** - Кратность курса Валюты
+ **indirect** - Признак обратного курса Валюты
+ **rateUpdateType** - Способ обновления курса Валюты `Только для чтения`
+ **majorUnit** - Формы единиц целой части Валюты
+ **minorUnit** - Формы единиц дробной части Валюты
+ **archived** - Добавлена ли Валюта в архив
+ **system** - Основана ли валюта на валюте из системного справочника `Только для чтения`
+ **default** - Является ли валюта валютой учета `Только для чтения`

##### Формы единиц

Поля **majorUnit** и **minorUnit** содержат в себе следующие атрибуты:
+ **gender** - Грамматический род единицы валюты (допустимые значения `masculine` - мужской, `feminine` - женский)
+ **s1** - Форма единицы, используемая при числительном 1
+ **s2** - Форма единицы, используемая при числительном 2
+ **s5** - Форма единицы, используемая при числительном 5

В JSON API валюты в основном представлены в составе сущностей в формате [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные). Для того, чтобы раскрыть их в составе другого объекта нужно воспользоваться [параметром expand](#общие-сведения-замена-ссылок-объектами-с-помощью-expand)

#### Получить Валюты [/entity/currency/]

>Запрос на получение списка всех валют на данной учётной записи.
Результат успешного запроса - JSON представление списка валют с перечисленными полями:

+ **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
+ **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
+ **rows** - Массив JSON объектов, представляющих собой [валюты](#валюта-валюты).

```shell
curl -X GET 
  "https://online.moysklad.ru/api/remap/1.2/entity/currency"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Валют.

```json
{
  "context": {
    "employee": {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/context/employee",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/employee/metadata",
        "type": "employee",
        "mediaType": "application/json"
      }
    }
  },
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
    "type": "currency",
    "mediaType": "application/json",
    "size": 2,
    "limit": 1000,
    "offset": 0
  },
  "rows": [
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "http://online.moysklad.ru/app/#currency/edit?id=6314188d-2c7f-11e6-8a84-bae500000055"
      },
      "id": "6314188d-2c7f-11e6-8a84-bae500000055",
      "system": false,
      "name": "руб",
      "fullName": "Рубль",
      "rate": 1.0,
      "multiplicity": 1,
      "indirect": false,
      "rateUpdateType": "manual",
      "code": "643",
      "isoCode": "RUB",
      "majorUnit": {
        "gender": "masculine",
        "s1": "рубль",
        "s2": "рубля",
        "s5": "рублей"
      },
      "minorUnit": {
        "gender": "feminine",
        "s1": "копейка",
        "s2": "копейки",
        "s5": "копеек"
      },
      "archived": false,
      "default": true
    },
    {
      "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/dc5f76ae-2c89-11e6-8a84-bae50000003f",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "http://online.moysklad.ru/app/#currency/edit?id=dc5f76ae-2c89-11e6-8a84-bae50000003f"
      },
      "id": "dc5f76ae-2c89-11e6-8a84-bae50000003f",
      "system": true,
      "name": "доллар",
      "fullName": "Доллар США",
      "rate": 63.0,
      "multiplicity": 1,
      "indirect": false,
      "rateUpdateType": "manual",
      "code": "840",
      "isoCode": "USD",
      "majorUnit": {
        "gender": "masculine",
        "s1": "доллар",
        "s2": "доллара",
        "s5": "долларов"
      },
      "minorUnit": {
        "gender": "masculine",
        "s1": "цент",
        "s2": "цента",
        "s5": "центов"
      },
      "archived": false,
      "default": false
    }
  ]
}
```

#### Создать новую Валюту
Запрос на создание новой валюты. Обязательные поля для создание валюты - **name**, **code** и **isoCode**.
В теле запроса нельзя указать курс валюты (**rate**) равным нулю.

```shell
curl -X POST \
  https://online.moysklad.ru/api/remap/1.2/entity/currency \
  -H "Authorization: Basic <Access-Token>"
  -H 'Content-Type: application/json' \
  -d '{
  "name": "доллар",
  "rate": 63,
  "code" : "840",
  "isoCode": "USD"
}
'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Валюты.

```json
{
    "meta": {
        "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/dc5f76ae-2c89-11e6-8a84-bae50000003f",
        "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
        "type": "currency",
        "mediaType": "application/json",
        "uuidHref": "http://online.moysklad.ru/app/#currency/edit?id=dc5f76ae-2c89-11e6-8a84-bae50000003f"
    },
    "id": "dc5f76ae-2c89-11e6-8a84-bae50000003f",
    "system": false,
    "name": "доллар",
    "rate": 63.0,
    "multiplicity": 1,
    "indirect": false,
    "rateUpdateType": "manual",
    "code": "840",
    "isoCode": "USD",
    "majorUnit": {
        "gender": "masculine"
    },
    "minorUnit": {
        "gender": "masculine"
    },
    "archived": false,
    "default": false
}
```

#### Массовое создание и обновление Валют

[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) Валют.
В теле запроса нужно передать массив, содержащий JSON представления Валют, которые вы хотите создать или обновить.
Обновляемые Валюты должны содержать идентификатор в виде метаданных.

```shell
curl -X POST \
  https://online.moysklad.ru/api/remap/1.2/entity/currency \
  -H "Authorization: Basic <Access-Token>"
  -H 'Content-Type: application/json' \
  -d '[
  {
    "name": "доллар",
    "rate": 63,
    "code" : "840",
    "isoCode": "USD"
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/dc5f76ae-2c89-11e6-8a84-bae50000003f",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
      "type": "currency",
      "mediaType": "application/json"
    },
    "name": "долл",
    "rate": 66,
    "code" : "dollarusd",
    "isoCode": "USD"
  }
]
'
```

> Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Валют.

```json
[
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/dc5f76ae-2c89-11e6-8a84-bae50000003f",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
      "type": "currency",
      "mediaType": "application/json",
      "uuidHref": "http://online.moysklad.ru/app/#currency/edit?id=dc5f76ae-2c89-11e6-8a84-bae50000003f"
    },
    "id": "dc5f76ae-2c89-11e6-8a84-bae50000003f",
    "system": false,
    "name": "доллар",
    "rate": 63.0,
    "multiplicity": 1,
    "indirect": false,
    "rateUpdateType": "manual",
    "code": "840",
    "isoCode": "USD",
    "majorUnit": {
      "gender": "masculine"
    },
    "minorUnit": {
      "gender": "masculine"
    },
    "archived": false,
    "default": false
  },
  {
    "meta": {
      "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/dc5f76ae-2c89-11e6-8a84-bae50000003f",
      "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
      "type": "currency",
      "mediaType": "application/json",
      "uuidHref": "http://online.moysklad.ru/app/#currency/edit?id=dc5f76ae-2c89-11e6-8a84-bae50000003f"
    },
    "id": "dc5f76ae-2c89-11e6-8a84-bae50000003f",
    "system": false,
    "name": "долл",
    "rate": 66.0,
    "multiplicity": 1,
    "indirect": false,
    "rateUpdateType": "manual",
    "code": "dollarusd",
    "isoCode": "USD",
    "majorUnit": {
      "gender": "masculine"
    },
    "minorUnit": {
      "gender": "masculine"
    },
    "archived": false,
    "default": false
  }
]
```

#### Удалить Валюту

Запрос на удаление Валюты с указанным id. Валюту учета удалить нельзя.

##### Параметры запроса

Параметр | Описание
-------- | --------
ID | id Валюты

```shell
curl -X DELETE
  "https://online.moysklad.ru/api/remap/1.2/entity/currency/7944ef04-f831-11e5-7a69-971500188b19"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешное удаление Валюты.

###Валюта
#### Получить Валюту

Работа с Валютой с указанным id.

##### HTTP запрос

`GET https://online.moysklad.ru/api/remap/1.2/entity/currency/<ID>`

##### Параметры запроса

Параметр | Описание
-------- | --------
ID | id Валюты

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055"
  -H "Authorization: Basic <Access-Token>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление запрошенной Валюты.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
    "type": "currency",
    "mediaType": "application/json",
    "uuidHref": "http://online.moysklad.ru/app/#currency/edit?id=6314188d-2c7f-11e6-8a84-bae500000055"
  },
  "id": "6314188d-2c7f-11e6-8a84-bae500000055",
  "system": false,
  "name": "руб",
  "fullName": "Рубль",
  "rate": 1.0,
  "multiplicity": 1,
  "indirect": false,
  "rateUpdateType": "manual",
  "code": "643",
  "isoCode": "RUB",
  "majorUnit": {
    "gender": "masculine",
    "s1": "рубль",
    "s2": "рубля",
    "s5": "рублей"
  },
  "minorUnit": {
    "gender": "feminine",
    "s1": "копейка",
    "s2": "копейки",
    "s5": "копеек"
  },
  "archived": false,
  "default": true
}
```

#### Изменить Валюту

Запрос на обновление существующей валюты.
В теле запроса нельзя указать курс валюты (**rate**) равным нулю,
 а также пустые поля **name**, **code**, **isoCode**.
Нельзя изменять значения полей **name**, **fullName**, **code**, **isoCode**, **majorUnit**, **minorUnit**
для валют, основанных на системном справочнике валют. Нельзя изменять курс валюты учета. Нельзя изменить курс валюты с автоматическим обновлением.

```shell
curl -X PUT
  "https://online.moysklad.ru/api/remap/1.2/entity/currency/6314188d-2c7f-11e6-8a84-bae500000055"
  -H "Authorization: Basic <Access-Token>"
  -d '{
  "name": "долл",
  "rate": 66,
  "code" : "dollarusd",
  "isoCode": "USD"
}'
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённой Валюты.

```json
{
  "meta": {
    "href": "https://online.moysklad.ru/api/remap/1.2/entity/currency/dc5f76ae-2c89-11e6-8a84-bae50000003f",
    "metadataHref": "https://online.moysklad.ru/api/remap/1.2/entity/currency/metadata",
    "type": "currency",
    "mediaType": "application/json",
    "uuidHref": "http://online.moysklad.ru/app/#currency/edit?id=dc5f76ae-2c89-11e6-8a84-bae50000003f"
  },
  "id": "dc5f76ae-2c89-11e6-8a84-bae50000003f",
  "system": false,
  "name": "долл",
  "rate": 66.0,
  "multiplicity": 1,
  "indirect": false,
  "rateUpdateType": "manual",
  "code": "dollarusd",
  "isoCode": "USD",
  "majorUnit": {
    "gender": "masculine"
  },
  "minorUnit": {
    "gender": "masculine"
  },
  "archived": false,
  "default": false
}
```
<!-- include(metadata.apib) -->

## Товар
### Товары [/entity/product]

Средствами JSON API можно создавать и обновлять сведения о Товарах, запрашивать списки Товаров и сведения по отдельным Товарам. Упаковками Товаров можно управлять отдельно - с помощью специальных ресурсов. Кодом сущности для Товара в составе JSON API является ключевое слово **product**. Больше о Товарах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки в разделе
 [Товары и склад](https://support.moysklad.ru/hc/ru/sections/200564973-%D0%A2%D0%BE%D0%B2%D0%B0%D1%80%D1%8B-%D0%B8-%D1%81%D0%BA%D0%BB%D0%B0%D0%B4).
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](/api/remap/1.2/doc/index.html#header-контекстный-поиск).

Поиск среди объектов товаров на соответствие поисковой строке будет осуществлён по следующим полям:
+ по наименованию товара (name)
+ по коду товара (code)
+ по артикулу (article)

##### Атрибуты сущности
+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) объекта
+ **id** - ID Товара в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **syncId** - ID синхронизации. После заполнения недоступен для изменения.
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **name** - Наименование Товара `Необходимое`
+ **description** - Описание Товара
+ **code** - Код Товара
+ **externalCode** - Внешний код Товара
+ **archived** - Отметка о том, добавлен ли Товар в архив
+ **pathName** - Наименование группы, в которую входит Товар `Только для чтения`
+ **vat** - НДС %
+ **effectiveVat** - Реальный НДС % `Только для чтения`
+ **productFolder** - Ссылка на группу Товаров в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **uom** - Ссылка на единицы измерения в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **image** - Изображение Товара
+ **minPrice** - Минимальная цена
+ **buyPrice** - Закупочная цена
+ **salePrices** - Цены продажи
+ **supplier** - Ссылка на контрагента-поставщика в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **attributes** - Коллекция доп. полей в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **country** - Ссылка на страну в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **article** - Артикул
+ **weighed** - Весовой товар
+ **tobacco** - Табачная продукция. Не может быть указан вместе с **alcoholic**, **weighed** и **isSerialTrackable**
+ **weight** - Вес
+ **volume** - Объём
+ **packs** - Упаковки Товара
+ **barcodes** - Массив штрихкодов товара
+ **alcoholic** - Объект, содержащий поля алкогольной продукции.
  + **excise** - Содержит акцизную марку
  + **type**  - Код вида продукции
  + **strength** - Крепость
  + **volume** - Объём тары
+ **variantsCount** - Количество модификаций у данного товара `Только для чтения`
+ **minimumBalance** - Неснижаемый остаток
+ **isSerialTrackable** - Учет по серийным номерам. Не может быть указан вместе с **alcoholic** и **weighed**
+ **things** - Серийные номера `Только для чтения`

Атрибут **pathName** сам по себе является атрибутом только для чтения, однако его можно изменить
с помощью обновления атрибута **productFolder**.

##### Атрибуты вложенных сущностей
###### Упаковки Товара:

+ **id** - ID в формате UUID `Только для чтения`
+ **uom** - Ссылка на единицы измерения в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Необходимое`
+ **quantity** - Количество Товаров в упаковке данного вида `Необходимое`
В версии API 1.2 был удалён отдельный ресурс для работы с упаковками товаров. Теперь упаковки - вложенная коллекция.
Для того, чтобы создать новую упаковку для данного товара, нужно в запросе на обновление товара указать её как элемент
поля **packs**, а в её составе указать ссылку в формате meta на единицу измерения и количество товаров в упаковке.
Нельзя указать ссылку на единицу измерения "Штуки", иначе возникнет ошибка.
При обновлении, переданная коллекция упаковок полностью заменяет имеющуюся до этого коллекцию упаковок.

###### Метаданные Товаров

Метаданные Товаров содержат информацию о дополнительных полях.

Посмотреть все созданные в основном интерфейсе доп. поля Товаров,
а также все типы цен можно с помощью запроса на получение метаданных Товаров.
Ответ - объект, со следующей структурой:
+ **meta** - Метаданные
+ **attributes** - коллекция всех существующих доп. полей Товаров в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **createShared** - создавать новые Товары с меткой "Общий"

Структуры объектов отдельных коллекций:

###### Штрих коды:

При создании штрихкода требуется описать объект с полем, являющимся форматом представления штрихкода в нижнем регистре, со стороковым значением самого штрихкода. Наименование полей отдельного объекта, представляющего штрихкод:
+ **ean13** - штрихкод в формате EAN13, если требуется создать штрихкод в формате EAN13
+ **ean8** - штрихкод в формате EAN8, если требуется создать штрихкод в формате EAN8
+ **code128** - штрихкод в формате Code128, если требуется создать штрихкод в формате Code128

О работе с доп. полями Товаров можно прочитать [здесь](/api/remap/1.2/doc/index.html#header-работа-с-дополнительными-полями)

###### Поставщик Товара:

+ **meta** - Метаданные, содержащие ссылку на поставщика.
Тип поставщика - Контрагент. Описание сущности Контрагент вы можете посмотреть [здесь](/api/remap/1.2/doc/counterparty.html#контрагент)

###### Цены продажи

+ **value** - Значение цены
+ **currency** - Ссылка на валюту в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **priceType** - Тип цены


###### Закупочная цена

+ **value** - Значение цены
+ **currency** - Ссылка на валюту в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)

###### Минимальная цена

+ **value** - Значение цены
+ **currency** - Ссылка на валюту в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)

###### Изображение: структура и загрузка.

Структура поля **image**, которое вы получите при запросе товара с изображением:
+ **meta** - Метаданные об изображении
+ **title** - Название изображения
+ **filename** - Имя файла
+ **size** - Размер файла в байтах
+ **updated** - Дата последнего изменения
+ **miniature** - Ссылка на миниатюру изображения в формате Метаданных
+ **tiny** - Ссылка на уменьшенное изображение в формате Метаданных

###### Загрузка

Для загрузки изображения нужно в теле запроса на [создание](#товар-товары-post) или [обновление](#товар-товар-put) товара
указать поле **image** со следующими атрибутами:
+ **filename** - имя файла с расширением. Например - "банан.png"
+ **content** - Изображение, закодированное в формате Base64.

Если в запросе на обновление не будет полей **filename** и **content**, то весь объект **image**, если он присутствует в Body,
будет проигнорирован, т.к. сервер посчитает, что его обновление не требуется.

###### Группа Товара

+ **meta** - Метаданные, содержащие ссылку на группу Товара.
Описание сущности Группа вы можете посмотреть [здесь](/api/remap/1.2/doc/productFolder.html#группа-товаров-группы-товаров)
Обновление этого атрибута также обновит атрибут **pathName**.

###### Весовой товар

+ **weighed** - Поле, показывающее является ли товар весовым. Если его значение false - поле не отображается.
Если в основном интерфейсе у товара стоит отметка об учёте его по серийным номерам, выставить значение данного поля на true невозможно.

###### Особенности фильтрации поля archived

Если одновременно осуществляется фильтрация по полям **id** и **archived**, то фильтрация по полю **archived** не учитывается.


#### Получить список Товаров [GET]

Запрос на получение всех Товаров для данной учётной записи.
Результат: Объект JSON, включающий в себя поля:
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой [Товары](#товар-товары).

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

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Товаров.
  + Body
        <!-- include(body/product/get_list_response.json) -->

#### Создать Товар [POST]

Создать новый Товар.

##### Описание

Товар создаётся на основе переданного объекта JSON,
который содержит представление нового Товара.
Результат - JSON представление созданного Товара. Для создания нового Товара,
необходимо и достаточно указать в переданном объекте не пустое поле `name`.
Если вы хотите создать алкогольный товар, то в теле запроса, нужно передать
объект **alcoholic**, у которого как минимум одна из характеристик:
+ **excise** - Содержит акцизную марку
+ **type**  - Код вида продукции
+ **strength** - Крепость
+ **volume** - Объём тары

Будет передана с значением. Иначе, при передаче пустого объекта **alcoholic**,
он будет проигнорирован, и товар создастся без пометки "Алкогольная продукция".


При создании товара с указанным массивом штрихкодов для каждого штрихкода требуется указать
к какому типу относится штрихкод. Например, чтобы создать штрихкод с типом  Code 128, в массив штрихкодов
должно быть добавлено поле code128 со значением штрихкода.
+ Request Пример 1 (application/json)
Пример наиболее полного по количеству полей запроса.
  + Body
        <!-- include(body/product/post_request_long.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Товара.
  + Body
        <!-- include(body/product/post_long_response.json) -->

+ Request Пример 2 (application/json)
Пример запроса на создание Товара с единственным необходимым полем.
  + Body
        <!-- include(body/product/post_request_short.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Товара.
  + Body
        <!-- include(body/product/post_short_response.json) -->

+ Request Пример с доп. полями (application/json)
Пример запроса на создание Товара с доп. полями.
  + Body
        <!-- include(body/product/post_with_attributes_request.json) -->
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Товара.
  + Body
        <!-- include(body/product/post_with_attributes_response.json) -->

+ Request Пример товар с изображением (application/json)
Пример запроса на создание Товара с загрузкой изображения.
  + Body
        <!-- include(body/product/post_with_image_request.json) -->
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Товара с изображением.
  + Body
        <!-- include(body/product/post_with_image_response.json) -->

#### Массовое создание и обновление товаров [POST]

[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) товаров.
В теле запроса нужно передать массив, содержащий JSON представления товаров, которые вы хотите создать или обновить.
Обновляемые товары должны содержать идентификатор в виде метаданных.

+ Request Пример (application/json)
Пример создания и обновления нескольких товаров
  + Body
        <!-- include(body/product/post_massive_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных товаров.
  + Body
        <!-- include(body/product/post_massive_response.json) -->

#### Удалить Товар [DELETE /entity/product/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Товара

Запрос на удаление Товара с указанным id.

+ Response 200 (application/json)
Успешное удаление Товара.

### Метаданные Товаров [/entity/product/metadata]
##### Метаданные Товаров [GET]

Запрос на получение метаданных Товаров. Результат - объект JSON, включающий в себя:
+ **meta** - Метаданные
+ **attributes** - коллекция всех существующих доп. полей Товаров в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **createShared** - создавать новые комплекты с меткой "Общий"

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](/api/remap/1.2/doc/index.html#header-работа-с-дополнительными-полями).
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Товаров.
  + Body
        <!-- include(body/product/get_metadata.json) -->

### Отдельное доп. поле [/entity/product/metadata/attributes/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Доп. поля
  
##### Отдельное доп. поле [GET]

Запрос на получение информации по отдельному дополнительному полю.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.
  + Body
        <!-- include(body/product/metadata_by_id.json) -->

### Товар [/entity/product/{id}]

Товар, обращение к которому происходит по значению его id.

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Товара.

#### Получить Товар [GET]

Запрос на получение Товара с указанным id.

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление Товара.
  + Body
        <!-- include(body/product/get_by_id_response.json) -->

#### Изменить Товар [PUT]

Запрос на обновление существующего Товара.
Типы цен в ценах продаж и дополнительные поля обновляются как элементы вложенных коллекций:
+ Если в текущем объекте у какого-то из доп. полей / типов цен нет значения,
а в переданной коллекции оно есть - значение записывается в доп. поле / тип цены.
+ Если же у данного атрибута значение уже присутствует - оно перезаписывается на переданное.
+ Если у данного атрибута в составе объекта значение присутствует, однако оно отсутствует
в передаваемой в теле запроса коллекции (не передаётся совсем), то значение атрибута объекта не изменяется.

Для обновленя полей алкогольной продукции в теле запроса на обновление товара должен присутствовать объект **alcoholic**,
с вложенными в него полями, отражающими свойства алкогольной продукции:
+ **excise** - Содержит акцизную марку
+ **type**  - Код вида продукции
+ **strength** - Крепость
+ **volume** - Объём тары
Если в запросе на обновление товара, являющегося алкогольной продукцией, передать пустой объект **alcoholic**, с данного объекта
снимется отметка "Алкогольная продукция". Для того чтобы сделать товар, не являющийся алкогольной продукцией алкогольным, нужно в теле запроса
передать объект **alcoholic**, у которого хотя бы одно из свойств будет иметь значение.

При обновлении товара с указанным в теле запроса массивом штрихкодов, каждый штрихкод проходит проверку
на то, к какому типу он относится EAN 8, EAN 13. Если же штрихкод не относится ни к одному из этих
2 типов, он записывается как штрихкод типа Code 128. Переданный массив штрихкодов полностью заменяет предыдущий массив штрихкодов.

При включенном в основном интерфейсе серийном учёте товаров, в запросе на обновление нельзя передать значение true полю **weighed**,
иначе возникнет ошибка, т.к. невозможен серийный учёт весовых товаров.

+ Request Пример (application/json)
Пример запроса на обновление Товара
  + Body
        <!-- include(body/product/put_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённого Товара.
  + Body
        <!-- include(body/product/put_response.json) -->

+ Request Пример с доп. полями (application/json)
Пример запроса на изменение Товара с дополнительными полями.
  + Body
        <!-- include(body/product/put_with_attributes_request.json) -->
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённого Товара.
  + Body
        <!-- include(body/product/put_with_attributes_response.json) -->

<!-- include(metadata.apib) -->

## Услуга

Средствами JSON API можно создавать и обновлять сведения об Услугах, запрашивать списки Услуг и сведения по отдельным Услугам. Кодом сущности для Услуги в составе JSON API является ключевое слово **service**. Услуга - специальная разновидность товара, без закупочной цены и упаковок. Больше о Товарах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки в разделе
 [Товары и склад](https://support.moysklad.ru/hc/ru/sections/200564973-%D0%A2%D0%BE%D0%B2%D0%B0%D1%80%D1%8B-%D0%B8-%D1%81%D0%BA%D0%BB%D0%B0%D0%B4).

По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](/api/remap/1.2/doc/index.html#header-контекстный-поиск).

Поиск среди объектов услуг на соответствие поисковой строке будет осуществлён по следующим полям:
+ по наименованию Услуги **name**
+ по коду Услуги **code**

### Услуги [/entity/service]
##### Атрибуты сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) объекта
+ **id** - ID Услуги в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **syncId** - ID синхронизации. После заполнения недоступен для изменения.
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **name** - Наименование Услуги `Необходимое`
+ **description** - Описание Услуги
+ **code** - Код Услуги
+ **externalCode** - Внешний код Услуги
+ **archived** - Отметка о том, добавлен ли Услуга в архив
+ **pathName** - Наименование группы, в которую входит Услуга `Только для чтения`
+ **vat** - НДС %
+ **effectiveVat** - Реальный НДС % `Только для чтения`
+ **productFolder** - Ссылка на группу Услуги
+ **uom** - Единицы измерения
+ **minPrice** - Минимальная цена
+ **salePrices** - Цены продажи
+ **barcodes** - Массив штрихкодов услуги
+ **attributes** - Дополнительные поля Услуги в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **buyPrice** - Закупочная цена

Атрибут **pathName** сам по себе является атрибутом только для чтения, однако его можно изменить
с помощью обновления атрибута **productFolder**.

##### Атрибуты вложенных сущностей
##### Метаданные Услуг

Метаданные Услуг содержат информацию о дополнительных полях.

Посмотреть все созданные в основном интерфейсе доп. поля Услуг,
а также все типы цен можно с помощью запроса на получение метаданных Услуг.
Ответ - объект, со следующей структурой:
+ **meta** - Метаданные
+ **attributes** - коллекция всех существующих доп. полей Услуг в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)

Структуры объектов отдельных коллекций:

О работе с доп. полями Услуг можно прочитать [здесь](/api/remap/1.2/doc/index.html#header-работа-с-дополнительными-полями)

###### Цены продажи

+ **value** - Значение цены
+ **currency** - Ссылка на валюту в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **priceType** - Тип цены

###### Закупочная цена

+ **value** - Значение цены
+ **currency** - Ссылка на валюту в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)

###### Минимальная цена

+ **value** - Значение цены
+ **currency** - Ссылка на валюту в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)

###### Группа Услуги

+ **meta** - Метаданные, содержащие ссылку на группу Услуги.
Описание сущности Группа вы можете посмотреть [здесь](/api/remap/1.2/doc/productFolder.html#группа-товаров-группы-товаров).
Обновление этого атрибута также обновит атрибут **pathName**.

###### Особенности фильтрации поля archived

Если одновременно осуществляется фильтрация по полям **id** и **archived**, то фильтрация по полю **archived** не учитывается.


#### Получить список Услуг [GET]

Запрос на получение всех Услуг для данной учётной записи.
Результат: Объект JSON, включающий в себя поля:
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой [Услуги](#услуга-услуги).

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

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Услуг.
  + Body
      <!-- include(body/service/get_list_response.json) -->

#### Создать Услугу[POST]

Создать новую Услугу.

##### Описание

Услуга создаётся на основе переданного объекта JSON,
который содержит представление новой Услуги.
Результат - JSON представление созданной Услуги. Для создания новой Услуги,
необходимо и достаточно указать в переданном объекте не пустое поле `name`

+ Request Пример 1 (application/json)
Пример наиболее полного по количеству полей запроса.
  + Body
        <!-- include(body/service/post_request_long.json) -->


+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Услуги.
  + Body
        <!-- include(body/service/post_long_response.json) -->


+ Request Пример 2 (application/json)
Пример запроса на создание Услуги с единственным необходимым полем.
  + Body
        <!-- include(body/service/post_request_short.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Услуги.
  + Body
        <!-- include(body/service/post_short_response.json) -->

+ Request Пример с доп. полями (application/json)
Пример запроса на создание Услуги с доп. полями.
  + Body
        <!-- include(body/service/post_with_attributes_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Услуги.
  + Body
        <!-- include(body/service/post_with_attributes_response.json) -->

#### Массовое создание и обновление Услуг [POST]

[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) Услуг.
В теле запроса нужно передать массив, содержащий JSON представления Услуг, которые вы хотите создать или обновить.
Обновляемые Услуги должны содержать идентификатор в виде метаданных.

+ Request Пример (application/json)
Пример создания и обновления нескольких Услуг
  + Body
        <!-- include(body/service/post_massive_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Услуг.
  + Body
        <!-- include(body/service/post_massive_response.json) -->


#### Удалить Услугу [DELETE /entity/service/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Услуги

Запрос на удаление Услуги с указанным id.

+ Response 200 (application/json)
Успешное удаление Услуги.

### Метаданные Услуг [/entity/service/metadata]
##### Метаданные Услуг [GET]

Запрос на получение метаданных Услуг. Результат - объект JSON, включающий в себя:
+ **meta** - Метаданные
+ **attributes** - коллекция всех существующих доп. полей Услуг в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](/api/remap/1.2/doc/index.html#header-работа-с-дополнительными-полями).

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Услуг.
  + Body
        <!-- include(body/service/get_metadata.json) -->

### Отдельное доп. поле [/entity/service/metadata/attributes/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Доп. поля
  
##### Отдельное доп. поле [GET]

Запрос на получение информации по отдельному дополнительному полю.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.
  + Body
        <!-- include(body/service/metadata_by_id.json) -->

### Услуга [/entity/service/{id}]

Отдельная Услуга, обращение к которой происходит по значению его id.

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Услуги.

#### Получить Услугу[GET]

Запрос на получение Услуги с указанным id.

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление Услуги.
  + Body
        <!-- include(body/service/get_by_id_response.json) -->

#### Изменить Услугу[PUT]

Обновить существующую Услугу.
Типы цен в ценах продаж и дополнительные поля обновляются как элементы вложенных коллекций:
+ Если в текущем объекте у какого-то из доп. полей / типов цен нет значения,
а в переданной коллекции оно есть - значение записывается в доп. поле / тип цены.
+ Если же у данного атрибута значение уже присутствует - оно перезаписывается на переданное.
+ Если у данного атрибута в составе объекта значение присутствует, однако оно отсутствует
в передаваемой в теле запроса коллекции (не передаётся совсем), то значение атрибута объекта не изменяется.

+ Request Пример (application/json)
Пример запроса на обновление Услуги
  + Body
        <!-- include(body/service/put_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённой Услуги.
  + Body
        <!-- include(body/service/put_response.json) -->
+ Request Пример с доп. полями (application/json)
Пример запроса на изменение Услуги с дополнительными полями.
  + Body
        <!-- include(body/service/put_with_attributes_request.json) -->
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённой Услуги.
  + Body
        <!-- include(body/service/put_with_attributes_response.json) -->

<!-- include(metadata.apib) -->

## Комплект
### Комплекты [/entity/bundle]

Средствами JSON API можно создавать и обновлять сведения о Комплектах, запрашивать списки Комплектов и сведения по отдельным Комплектам. Кодом сущности для Комплекта в составе JSON API является ключевое слово **bundle**.

##### Атрибуты сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) объекта
+ **id** - ID Комплекта в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **syncId** - ID синхронизации. После заполнения недоступен для изменения.
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **name** - Наименование Комплекта `Необходимое`
+ **description** - Описание Комплекта
+ **code** - Код Комплекта
+ **externalCode** - Внешний код Комплекта
+ **archived** - Отметка о том, добавлен ли Комплект в архив
+ **pathName** - Наименование группы, в которую входит Комплект `Только для чтения`
+ **vat** - НДС %
+ **effectiveVat** - Реальный НДС % `Только для чтения`
+ **productFolder** - Ссылка на группу Комплекта
+ **uom** - Единицы измерения
+ **image** - Изображение Комплекта
+ **minPrice** - Минимальная цена
+ **salePrices** - Цены продажи
+ **attributes** - Коллекция доп. полей в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **country** - Ссылка на страну в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **article** - Артикул
+ **weight** - Вес
+ **volume** - Объём
+ **barcodes** - Массив штрихкодов Комплекта
+ **overhead** - Дополнительные расходы
  - **currency** - Валюта доп расходов
  - **value** - Значение доп расходов
+ **components** - Компоненты Комплекта

###### Минимальная цена

+ **value** - Значение цены
+ **currency** - Ссылка на валюту в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)

##### Компоненты Комплекта

Компоненты Комплекта - это список товаров/услуг/модификаций, который входят в состав комплекта. Компонентов у комплекта может быть от 1 до 50.
Объект компонента Комплекта содержит следующие поля:
+ **id** - ID компонента в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **quantity** - Количество товаров/услуг данного вида в компоненте. Максимальное количество знаков 12, округляется до 4х знаков после запятой.
+ **assortment** - Ссылка на товар/услугу/серию, которую представляет собой компонент.


##### Комплект как позиция документа

Комплект может выступать в роли позиции документа. Он также как и товары, услуги и модификации может быть передан в составе позиции в формате метаданных.<br>
Вот некоторые ограничения, связанные с использованием комплектов как позиций:
+ Количество комплектов должно быть целым числом
+ Комплекты не могут быть позициями в следующих типах документов:
  - Заказы поставщикам
  - Счета поставщиков
  - Приемки
  - Возвраты поставщикам
  - Выданные отчеты комиссионера
  - Списания
  - Оприходования
  - Перемещения
  - Инвентаризации
  - Тех. карты
  - Тех. операции
  - Внутренние заказы
+ Комплект не может быть позицией отгрузки по комиссионному договору:
  - нельзя добавить комплект в отгрузку по комиссионному договору
  - нельзя установить комиссионный договор в отгрузке с комплектами
  - нельзя изменить договор на комиссионный, если по нему есть отгрузки с комплектами

##### Атрибуты вложенных сущностей
###### Метаданные Комплектов

Метаданные Комплектов содержат информацию о дополнительных полях.

Посмотреть все созданные в основном интерфейсе доп. поля Комплектов,
а также все типы цен можно с помощью запроса на получение метаданных Комплектов.
Ответ - объект, со следующей структурой:
+ **meta** - Метаданные
+ **attributes** - коллекция всех существующих доп. полей Комплектов в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)

Структуры объектов отдельных коллекций:

###### Штрих коды:

При создании штрихкода требуется описать объект с полем, являющимся форматом представления штрихкода в нижнем регистре, со стороковым значением самого штрихкода. Наименование полей отдельного объекта, представляющего штрихкод:
+ **ean13** - штрихкод в формате EAN13, если требуется создать штрихкод в формате EAN13
+ **ean8** - штрихкод в формате EAN8, если требуется создать штрихкод в формате EAN8
+ **code128** - штрихкод в формате Code128, если требуется создать штрихкод в формате Code128

###### Изображение: структура и загрузка.

Структура поля **image**, которое вы получите при запросе Комплекта с изображением:
+ **meta** - Метаданные об изображении
+ **title** - Название изображения
+ **filename** - Имя файла
+ **size** - Размер файла в байтах
+ **updated** - Дата последнего изменения
+ **miniature** - Ссылка на миниатюру изображения в формате Метаданных
+ **tiny** - Ссылка на уменьшенное изображение в формате Метаданных

###### Загрузка

Для загрузки изображения нужно в теле запроса на [создание](#комплект-комплекты-post) или [обновление](#комплект-комплект-put) Комплекта
указать поле **image** со следующими атрибутами:
+ **filename** - имя файла с расширением. Например - "банан.png"
+ **content** - Изображение, закодированное в формате Base64.

Если в запросе на обновление не будет полей **filename** и **content**, то весь объект **image**, если он присутствует в Body,
будет проигнорирован, т.к. сервер посчитает, что его обновление не требуется.

О работе с доп. полями Комплектов можно прочитать [здесь](/api/remap/1.2/doc/index.html#header-работа-с-дополнительными-полями)

#### Получить список комплектов [GET]

Запрос на получение всех комплектов для данной учётной записи.
Результат: Объект JSON, включающий в себя поля:
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой комплекты.

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

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка комплектов.
  + Body
        <!-- include(body/bundle/get_list_response.json) -->

#### Создать Комплект [POST]

Создать новый комплект.

##### Описание

Комплект создаётся на основе переданного объекта JSON,
который содержит представление нового Комплекта.
Результат - JSON представление созданного Комплекта. Для создания нового Комплекта
необходимо и достаточно указать в переданном объекте не пустое поле `name` и не пустое множество компонентов `components`.
Максимальное число компонентов в Комплекте - 50.

+ Request Пример (application/json)
Пример наиболее полного по количеству полей запроса.
  + Body
        <!-- include(body/bundle/post_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Комплекта.
  + Body
        <!-- include(body/bundle/post_response.json) -->

+ Request Пример Комплект с изображением (application/json)
Пример запроса на создание Комплекта с загрузкой изображения
  + Body
        <!-- include(body/bundle/post_with_image_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Комплекта.
  + Body
        <!-- include(body/bundle/post_with_image_response.json) -->


#### Массовое создание и обновление Комплектов [POST]

[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) Комплектов.
В теле запроса нужно передать массив, содержащий JSON представления Комплектов, которые вы хотите создать или обновить.
Обновляемые Комплекты должны содержать идентификатор в виде метаданных.

+ Request Пример (application/json)
Пример создания и обновления нескольких Комплектов
  + Body
        <!-- include(body/bundle/post_massive_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Комплектов.
  + Body
        <!-- include(body/bundle/post_massive_response.json) -->

### Метаданные Комплектов [/entity/bundle/metadata]
##### Метаданные Комплектов [GET]

Запрос на получение метаданных Комплектов. Результат - объект JSON, включающий в себя:
+ **meta** - Метаданные
+ **attributes** - коллекция всех существующих доп. полей Комплектов в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](/api/remap/1.2/doc/index.html#header-работа-с-дополнительными-полями).
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Комплектов.
  + Body
        <!-- include(body/bundle/get_metadata.json) -->

### Отдельное доп. поле [/entity/bundle/metadata/attributes/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Доп. поля
  
##### Отдельное доп. поле [GET]

Запрос на получение информации по отдельному дополнительному полю.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.
  + Body
        <!-- include(body/bundle/metadata_by_id.json) -->

### Комплект [/entity/bundle/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Комплекта

#### Получить Комплект [GET]

Запрос на получение комплекта с указанным id.

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление комплекта.
  + Body
        <!-- include(body/bundle/get_by_id_response.json) -->

#### Изменить Комплект [PUT]

Запрос на обновление существующего Комплекта.
Типы цен в ценах продаж, дополнительные поля и компоненты обновляются как элементы вложенных коллекций:
+ Если в текущем объекте у какого-то из доп. полей / типов цен / компонентов нет значения,
а в переданной коллекции оно есть - значение записывается в доп. поле / тип цены / компонент.
+ Если же у данного атрибута значение уже присутствует - оно перезаписывается на переданное.
+ Если у данного атрибута в составе объекта значение присутствует, однако оно отсутствует
в передаваемой в теле запроса коллекции (не передаётся совсем), то значение атрибута объекта не изменяется.

+ Request Пример (application/json)
Пример запроса на обновление Комплекта
  + Body
        <!-- include(body/bundle/put_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённого Комплекта.
  + Body
        <!-- include(body/bundle/put_response.json) -->

#### Удалить Комплект [DELETE]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Комплекта

Запрос на удаление Комплекта с указанным id.

+ Response 200 (application/json)
Успешное удаление Комплекта.

### Компоненты Комплекта [/entity/bundle/{id}/components]

Отдельный ресурс для управления компонентами Комплекта.
+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Комплекта

#### Получить компоненты Комплекта [GET]

Запрос на получение списка всех компонентов данного Комплекта.
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой компоненты Комплекта.

+ Parameters
  + limit: 1000 (optional, enum[number])
  Максимальное количество сущностей для извлечения.
  <p>
    <code>Допустимые значения 1 - 1000</code>
  </p>
      + Default: `1000`
  + offset: 5 (optional, number)
    Отступ в выдаваемом списке сущностей
      + Default: `0`
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка компонентов отдельного Комплекта.
  + Body
        <!-- include(body/bundle/components_get_list.json) -->

#### Добавить компонент Комплекта [POST]

+ Request Пример с одним компонентом (application/json)
Запрос на добавление компонента Комплекта.
  + Body
        <!-- include(body/bundle/post_component_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление добавленного компонента.
  + Body
        <!-- include(body/bundle/post_component_response.json) -->

### Компонент Комплекта [/entity/bundle/{id}/components/{componentID}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Комплекта
  + componentID: `34f6344f-015e-11e6-9464-e4de0000006c` (required, string) - id компонента Комплекта

#### Получить компонент [GET]

Запрос на получение отдельного компонента Комплекта с указанным id.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного компонента Комплекта.
  + Body
        <!-- include(body/bundle/component_get_by_id.json) -->

#### Обновить компонент [PUT]

Запрос на обновление отдельного компонента Комплекта с указанным id.

+ Request Пример (application/json)
Пример запроса на обновление компонента Комплекта
  + Body
        <!-- include(body/bundle/component_put_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного компонента Комплекта.
  + Body
        <!-- include(body/bundle/component_put_response.json) -->

#### Удалить компонент [DELETE]

Запрос на удаление отдельного компонента Комплекта с указанным id.

+ Response 200 (application/json)
Успешное удаление компонента Комплекта.

<!-- include(metadata.apib) -->

## Группа товаров
### Группы товаров [/entity/productfolder]

Средствами JSON API можно создавать и обновлять сведения о Группах товаров, запрашивать списки Групп товаров и сведения по отдельным Группам товаров. Кодом сущности для Группы товаров в составе JSON API является ключевое слово **productFolder**.
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](/api/remap/1.2/doc/index.html#header-контекстный-поиск).

Поиск среди объектов групп товаров на соответствие поисковой строке будет осуществлён по следующим полям:
+ по наименованию Группы товаров (name)
+ по коду Группы товаров (code)

##### Атрибуты сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о Группе товаров
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные))
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **name** - Наименование Группы товаров `Необходимое`
+ **description** - Описание Группы товаров
+ **code** - Код Группы товаров
+ **externalCode** - Внешний код Группы товаров
+ **archived** - Добавлена ли Группа товаров в архив `Только для чтения`
+ **pathName** - Наименование Группы товаров, в которую входит данная Группа товаров `Только для чтения`
+ **vat** - НДС %
+ **effectiveVat** - Реальный НДС % `Только для чтения`
+ **productFolder** - Ссылка на Группу товаров данной Группы товаров в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)

#### Получить список групп товаров [GET]

Запрос всех Групп товаров на данной учётной записи.
Результат: Объект JSON, включающий в себя поля:
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой Группы товаров.

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

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Групп товаров.
  + Body
        <!-- include(body/productFolder/get_list.json) -->

#### Создать новую группу товаров [POST]

Запрос на создание новой Группы товаров.
Обязательные для создания Группы товаров поля:
+ **name** - Наименование Группы товаров

+ Request Пример 1 (application/json)
Пример создания новой Группы товаров с телом запроса, содержащим только поле name.
  + Body
        <!-- include(body/productFolder/post_short_request.json) -->
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Группы товаров.
  + Body
        <!-- include(body/productFolder/post_short_response.json) -->

+ Request Пример 2 (application/json)
Пример создания новой Группы товаров с более насыщенным телом запроса.
  + Body
        <!-- include(body/productFolder/post_long_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Группы товаров.
  + Body
        <!-- include(body/productFolder/post_long_response.json) -->

#### Массовое создание и обновление Групп товаров [POST]

[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) Групп товаров.
В теле запроса нужно передать массив, содержащий JSON представления Групп товаров, которые вы хотите создать или обновить.
Обновляемые Группы товаров должны содержать идентификатор в виде метаданных.

+ Request Пример (application/json)
Пример создания и обновления нескольких Групп товаров
  + Body
        <!-- include(body/productFolder/post_massive_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Групп товаров.
  + Body
        <!-- include(body/productFolder/post_massive_response.json) -->

#### Удалить Группу товаров [DELETE /entity/productfolder/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Группы товаров

Запрос на удаление Группы товаров с указанным id.

+ Response 200 (application/json)
Успешное удаление Группы товаров.

### Метаданные Групп товаров [/entity/productfolder/metadata]
##### Метаданные Групп товаров [GET]

Запрос на получение метаданных Групп товаров. Результат - объект JSON, включающий в себя:
+ **meta** - Ссылка на метаданные Групп товаров
+ **attributes** - Массив объектов доп. полей Групп товаров в формате [Метаданных](#header-метаданные)

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](#header-работа-с-дополнительными-полями).

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Групп товаров.
  + Body
        <!-- include(body/productFolder/get_metadata.json) -->

### Отдельное доп. поле [/entity/productfolder/metadata/attributes/{id}]

+ Parameters
  + id: `5290a290-0313-11e6-9464-e4de00000020` (required, string) - id Доп. поля
  
##### Отдельное доп. поле [GET]
Запрос на получение информации по отдельному дополнительному полю.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.
  + Body
        <!-- include(body/productFolder/metadata_by_id.json) -->

### Группа товаров [/entity/productfolder/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Группы товаров

#### Получить Группу товаров [GET]

Запрос на получение отдельной группы товаров с указанным id.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление Группы товаров.
  + Body
        <!-- include(body/productFolder/get_by_id.json) -->

#### Изменить Группу товаров [PUT]

Запрос на обновление Группы товаров с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Группы товаров, кроме тех, что
помечены `Только для чтения` в описании [атрибутов Группы товаров](#группа-товаров-группы-товаров).
Для обновления поля **pathName** нужно обновить ссылку на родительскую Группу товаров, т.е. обновить поле
**productFolder**

+ Request Пример (application/json)
Пример запроса на обновление конкретной Группы товаров.
  + Body
        <!-- include(body/productFolder/put_request.json) -->
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённой Группы товаров.
  + Body
        <!-- include(body/productFolder/put_response.json) -->

<!-- include(metadata.apib) -->

## Модификация
### Модификации [/entity/variant]

Средствами JSON API можно создавать и обновлять сведения о Модификациях товаров, запрашивать списки Модификаций товаров и сведения по отдельным Модификациям. Кодом сущности для Модификации в составе JSON API является ключевое слово **variant**. Больше о Модификациях товаров и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по
 [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203325413-%D0%9C%D0%BE%D0%B4%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%B8-%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2),
 а также больше о работе с товарами [здесь](https://support.moysklad.ru/hc/ru/sections/200564973-%D0%A2%D0%BE%D0%B2%D0%B0%D1%80%D1%8B-%D0%B8-%D1%81%D0%BA%D0%BB%D0%B0%D0%B4).
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](/api/remap/1.2/doc/index.html#header-контекстный-поиск). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов модификаций на соответствие поисковой строке будет осуществлён по следующим полям:
+ по наименованию товара с Модификацией **name**

##### Атрибуты Сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) объекта
+ **id** - ID услуги в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **name** - Наименование товара с Модификацией
+ **code** - Код Модификации
+ **externalCode** - Внешний код Модификации
+ **archived** - Добавлен ли товар в архив
+ **characteristics** - Характеристики Модификации `Необходимое`
+ **minPrice** - Минимальная цена
+ **buyPrice** - Закупочная цена
+ **salePrices** - Цены продажи
+ **barcodes** - Массив штрихкодов модификации
+ **product** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные), представляющие с собой ссылку на [товар](/api/remap/1.2/doc/product.html#товар-товары), к которому привязана Модификация. `Необходимое`
+ **things** - Серийные номера `Только для чтения`

##### Атрибуты доступные для сортировки

+ **code** - Код Модификации
+ **externalCode** - Внешний код Модификации
+ **archived** - Добавлен ли товар в архив

##### Атрибуты вложенных сущностей
###### Штрих коды:

При создании штрихкода требуется описать объект с полем, являющимся форматом представления штрихкода в нижнем регистре, со стороковым значением самого штрихкода. Наименование полей отдельного объекта, представляющего штрихкод:
+ **ean13** - штрихкод в формате EAN13, если требуется создать штрихкод в формате EAN13
+ **ean8** - штрихкод в формате EAN8, если требуется создать штрихкод в формате EAN8
+ **code128** - штрихкод в формате Code128, если требуется создать штрихкод в формате Code128

###### Метаданные Модификаций

Метаданные Модификаций содержат информацию о характеристиках Модификаций, а также о типах цен.
Характеристики Модификации - внутренняя коллекция **characteristics**. Представлена в виде массива объектов с полями:
+ **meta** - метаданные характеристики
+ **id** - id соответствующей характеристики.
+ **name** - наименование характеристики.
+ **value** - значение характеристики.

Посмотреть все созданные в основном интерфейсе характеристики Модификаций,
а также все типы цен можно с помощью запроса на получение метаданных Модификаций.
Ответ - объект, со следующей структурой:
+ **meta** - Метаданные
+ **characteristics** - коллекция всех созданных характеристик Модификаций.

Структуры отдельных объектов коллекций:

####### *characteristics*

+ **meta** - Метаданные характеристики
+ **id** - ID характеристики
+ **name** - Наименование характеристики
+ **type** - Тип значения характеристики
+ **required** - Флажок о том, является ли характеристика обязательной

###### Цены продажи

Если у модификации не заданы отдельные цены продажи, в ответе будут выведены соответствующие цены продажи товара.
+ **value** - Значение цены
+ **currency** - Ссылка на валюту в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **priceType** - Тип цены

###### Минимальная цена

+ **value** - Значение цены
+ **currency** - Ссылка на валюту в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)

#### Получить список Модификаций [GET]

Запрос на получение списка всех Модификаций на данной учётной записи.
Результат успешного запроса - JSON представление списка Модификаций с перечисленными полями:
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой [Модификации](#модификация-модификации).

Возможна фильтрация списка Модификаций по **id** товара - параметр **productid**.
Подробнее про данный параметр можно посмотреть в разделе [Фильтрация выборки с помощью параметра filter](/api/remap/1.2/doc/index.html#header-фильтрация-выборки-с-помощью-параметра-filter)

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

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Модификаций.
  + Body
        <!-- include(body/variant/get_list.json) -->

#### Создать Модификацию [POST]

Создать новую Модификацию. Для создания новой Модификации необходимы поля **product**, **characteristics**.
Поле **characteristics** указывается как массив объектов со следующей структурой:
+ **id** - uuid характеристики
+ **value** - значение характеристики
Если поле **id** не указано у какого-либо объекта характеристики, производится поиск соответствующей этому объекту
характеристики по полю **name**. Если же не указаны ни **id** ни **name** произойдёт ошибка.
+ Request Пример (application/json)
Пример запроса на создание новой Модификации, привязанной к существующему товару.
  + Body
        <!-- include(body/variant/post_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Модификации.
  + Body
        <!-- include(body/variant/post_response.json) -->

#### Массовое создание и обновление Модификаций [POST]

[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) Модификаций.
В теле запроса нужно передать массив, содержащий JSON представления Модификаций, которые вы хотите создать или обновить.
Обновляемые Модификации должны содержать идентификатор в виде метаданных.

+ Request Пример (application/json)
Пример создания и обновления нескольких Модификаций
  + Body
        <!-- include(body/variant/post_massive_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Модификаций.
  + Body
        <!-- include(body/variant/post_massive_response.json) -->

#### Удалить Модификацию [DELETE /entity/variant/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Модификации

Запрос на удаление Модификации с указанным id.

+ Response 200 (application/json)
Успешное удаление Модификации.

### Метаданные Модификаций [/entity/variant/metadata]
##### Метаданные Модификаций [GET]

Запрос на получение метаданных Модификаций. Результат - объект JSON, включающий в себя:
+ **meta** - Метаданные
+ **characteristics** - коллекция всех созданных характеристик Модификаций.

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление метаданных модификации.
  + Body
        <!-- include(body/variant/get_metadata.json) -->

### Модификация [/entity/variant/{id}]

Работа с Модификацией с указанным id.
  + Parameters
    + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id серии
    
#### Получить Модификацию [GET]

Запрос на получение представления Модификации с указанным id.
  + Response 200 (application/json)
  Успешный запрос. Результат - JSON представление Модификации.
    + Body
          <!-- include(body/variant/get_by_id.json) -->

#### Изменить Модификацию [PUT]

Запрос на обновление Модификации с указанным id.
Типы цен в ценах продаж обновляются как элементы вложенных коллекций:
+ Если в текущем объекте у какого-то из типов цен нет значения,
а в переданной коллекции оно есть - значение записывается в тип цены.
+ Если же у данного атрибута значение уже присутствует - оно перезаписывается на переданное.
+ Если у данного атрибута в составе объекта значение присутствует, однако оно отсутствует
в передаваемой в теле запроса коллекции (не передаётся совсем), то значение атрибута объекта не изменяется.

При обновлении характеристик Модификации поле **characteristics** указывается как
массив объектов со следующей структурой:
+ **id** - uuid характеристики
+ **name** - наименование характеристики
+ **value** - значение характеристики
Если поле **id** не указано у какого-либо объекта характеристики, производится поиск соответствующей этому объекту
характеристики по полю **name**. Если же не указаны ни **id** ни **name** произойдёт ошибка.
При обновлении, поле **characteristics** в теле запроса обрабатывается как "все характеристики модификации",
т.е. полностью заменяет предыдущий массив характеристик. Если какая то из характеристик, имевшая значение в обновляемом
объекте не указана в запросе на обновление, после запроса её значение будет аннулированно.

+ Request Пример (application/json)
Пример запроса на обновление Модификации.
  + Body
        <!-- include(body/variant/put_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление Модификации.
  + Body
        <!-- include(body/variant/put_response.json) -->

<!-- include(metadata.apib) -->

## Серия
### Серии [/entity/consignment]

По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](/api/remap/1.2/doc/index.html#header-контекстный-поиск). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов Серии на соответствие поисковой строке будет осуществлён по следующим полям:
+ по наименованию Серии **name**
+ по описанию Серии **description**

##### Атрибуты сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) объекта
+ **id** - ID услуги в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **updated** - Момент последнего обновления сущности `Только для чтения``
+ **name** - Наименование Серии. "Собирается" и отображается как "Наименование товара  / Метка Серии" `Только для чтения`
+ **description** - Описание Серии
+ **code** - Код Серии
+ **externalCode** - Внешний код Серии
+ **label** - Метка Серии. `Необходимое`
+ **barcodes** - Штрихкоды серии
+ **image** - Изображение товара, к которому относится данная серия
+ **assortment** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные), представляющие с собой ссылку на товар или модификацию `Необходимое`

##### Атрибуты вложенных сущностей
###### Метаданные Серий

Посмотреть все созданные в основном интерфейсе характеристики Серий можно с помощью запроса на получение метаданных Серий.
Ответ - объект, со следующей структурой:
+ **meta** - Метаданные
+ **attributes** - коллекция всех существующих доп. полей Серий в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)

#### Получить список Серий [GET]

Запрос на получения списка всех пользовательских Серий на данной учётной записи.
<u>Серии по умолчанию выведены не будут.</u>
Результат успешного запроса - JSON представление списка Серий с перечисленными полями:
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой [Серии](#серия-серии).
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

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка пользовательских Серий.
  + Body
        <!-- include(body/consignment/get_list.json) -->

#### Создать серию [POST]

Запрос на создание новой серии. Для успешного создания серии, обязательно должны быть переданы поля
**label** и **assortment**.
+ Request Пример (application/json)
Пример создания новой серии.
  + Body
        <!-- include(body/consignment/post_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной серии.
  + Body
        <!-- include(body/consignment/post_response.json) -->

#### Удалить серию [DELETE /entity/consignment/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Серии

Запрос на удаление Серии с указанным id.

+ Response 200 (application/json)
Успешное удаление Серии.

#### Массовое создание и обновление Серий [POST]

[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) Серий.
В теле запроса нужно передать массив, содержащий JSON представления Серий, которые вы хотите создать или обновить.
Обновляемые Серии должны содержать идентификатор в виде метаданных.

+ Request Пример (application/json)
Пример создания и обновления нескольких Серий
  + Body
        <!-- include(body/consignment/post_massive_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Серий.
  + Body
        <!-- include(body/consignment/post_massive_response.json) -->

### Метаданные Серий [/entity/consignment/metadata]
##### Метаданные Серий [GET]

Запрос на получение метаданных Серий. Результат - объект JSON, включающий в себя:
+ **meta** - Метаданные
+ **attributes** - коллекция всех существующих доп. полей Серий в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](/api/remap/1.2/doc/index.html#header-работа-с-дополнительными-полями).

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление метаданных серии.
  + Body
        <!-- include(body/consignment/get_metadata.json) -->

### Отдельное доп. поле [/entity/consignment/metadata/attributes/{id}]

+ Parameters
  + id: `958b275e-3bbf-11e7-8a7f-40d000000004` (required, string) - id Доп. поля
  
##### Отдельное доп. поле [GET]

Запрос на получение информации по отдельному дополнительному полю.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.
  + Body
        <!-- include(body/consignment/metadata_by_id.json) -->

### Серия [/entity/consignment/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Серии
  
#### Получить серию [GET]

Запрос на получение Серии с указанным id.

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление пользовательской Серии.
  + Body
        <!-- include(body/consignment/get_id.json) -->

#### Изменить серию [PUT]

Запрос на обновление серии. Обновить можно только те поля, что не помечены `Только для чтения`
+ Request Пример (application/json)
Пример запроса на обновление серии.
  + Body
        <!-- include(body/consignment/put_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённой серии.
  + Body
        <!-- include(body/consignment/put_response.json) -->

<!-- include(metadata.apib) -->

## Договор
### Договоры [/entity/contract]

Средствами JSON API можно создавать и обновлять сведения о Договорах, запрашивать списки Договоров и сведения по отдельным Договорам. Кодом сущности для Договора в составе JSON API является ключевое слово **contract**. Больше о Договорах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/218121398-%D0%A3%D1%87%D0%B5%D1%82-%D0%B4%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D0%BE%D0%B2).
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](/api/remap/1.2/doc/index.html#header-контекстный-поиск). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов Договора на соответствие поисковой строке будет осуществлён по следующим полям:
+ по номеру Договора **name**
+ по комментарию к Договору **description**

##### Атрибуты сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о Заказе Покупателя
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **name** - номер Договора
+ **description** - Комментарий к Договору
+ **code** - Код Договора
+ **externalCode** - Внешний код Договора
+ **archived** - Добавлен ли Договор в архив
+ **moment** - Дата Договора,
+ **sum** - Сумма Договора,
+ **contractType** - Тип Договора. Возможные значения: `Договор комиссии`, `Договор купли-продажи`
+ **rewardType** - Тип Вознаграждения. Возможные значения: `Процент от суммы продажи`, `Не рассчитывать`
+ **rewardPercent** - Вознаграждение в процентах (от 0 до 100).
+ **ownAgent** - Ссылка на ваше юрлицо в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **agent** - Ссылка на Контрагента в формате [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные)
+ **state** - Статус договора в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **organizationAccount** - Ссылка на счёт вашего юрлица в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **agentAccount** - Ссылка на счёт контрагента в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **rate** - Ссылка на валюту
+ **attributes** - Коллекция доп. полей в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)

Таблица полей, их значений и их значений в JSON представлении:

| Имя поля     | Возможные Значения      | Соответствующее значение в JSON| Значение по умолчанию |
| :-----------:|:-----------------------:|:------------------------------:|:---------------------:|
|**contractType**  | Договор комиссии        |Commission                      | Договор купли-продажи |
|              | Договор купли-продажи   |Sales                           |                       |
| **rewardType**   | Процент от суммы продажи|PercentOfSales                  |    Не рассчитывать    |
|              | Не рассчитывать         |None                            |                       |

<!-- include(rate.apib) -->

О работе с доп. полями Договоров можно прочитать [здесь](/api/remap/1.2/doc/index.html#header-работа-с-дополнительными-полями)

#### Получить список Договоров [GET]

Запрос на получение списка всех договоров на данной учётной записи.
Результат: Объект JSON, включающий в себя поля:
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой Договоры.

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

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Договоров.
  + Body
        <!-- include(body/contract/get_list.json) -->

#### Создать новый Договор [POST]

Запрос на создание нового Договора.
Обязательные для создания Договора поля:
+ **name** - Номер Договора
+ **ownAgent** - Ссылка на ваше юрлицо в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **agent** - Ссылка на Контрагента в формате [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные)


+ Request Пример 1 (application/json)
Пример создания нового Договора, с запросом, Тело которого содержит только обязательные поля.
  + Body
        <!-- include(body/contract/post_short_request.json) -->
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Договора.
  + Body
        <!-- include(body/contract/post_short_response.json) -->

+ Request Пример 2 (application/json)
Пример создания нового Договора с более насыщенным телом запроса.
  + Body
        <!-- include(body/contract/post_long_request.json) -->
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Договора.
  + Body
        <!-- include(body/contract/post_long_response.json) -->

+ Request Пример с доп. полями (application/json)
Пример создания нового Договора, с запросом, Тело которого содержит дополнительные поля.
  + Body
        <!-- include(body/contract/post_with_attributes_request.json) -->
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Договора.
  + Body
        <!-- include(body/contract/post_with_attributes_response.json) -->

#### Массовое создание и обновление Договоров [POST]

[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) Договоров.
В теле запроса нужно передать массив, содержащий JSON представления Договоров, которые вы хотите создать или обновить.
Обновляемые Договора должны содержать идентификатор в виде метаданных.

+ Request Пример (application/json)
Пример создания и обновления нескольких Договоров
  + Body
        <!-- include(body/contract/post_massive_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Договоров.
  + Body
        <!-- include(body/contract/post_massive_response.json) -->

#### Удалить договор [DELETE /entity/contract/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Договора

Запрос на удаление Договора с указанным id.

+ Response 200 (application/json)
Успешное удаление Договора.

### Метаданные Договоров [/entity/contract/metadata]
##### Метаданные Договоров [GET]

Запрос на получение метаданных Договоров. Результат - объект JSON, включающий в себя:
+ **meta** - Ссылка на метаданные Договоров
+ **attributes** - Массив объектов доп. полей Договоров в формате [Метаданных](#header-метаданные)
+ **states** - Массив статусов Договоров
+ **createShared** - создавать новые Договора с меткой "Общий"

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](#header-работа-с-дополнительными-полями).

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Договоров.
  + Body
        <!-- include(body/contract/get_metadata.json) -->

### Отдельное доп. поле [/entity/contract/metadata/attributes/{id}]

+ Parameters
  + id: `5290a290-0313-11e6-9464-e4de00000020` (required, string) - id Доп. поля
  
##### Отдельное доп. поле [GET]

Запрос на получение информации по отдельному дополнительному полю.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.
  + Body
        <!-- include(body/contract/metadata_by_id.json) -->

### Договор [/entity/contract/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Договора
  
#### Получить Договор [GET]

Запрос на получение отдельного Договора с указанным id.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление Договора.
  + Body
        <!-- include(body/contract/get_by_id.json) -->

#### Изменить Договор [PUT]

Запрос на обновление отдельного Договора с указанным id.
При обновлении полей **organization** и **agent** нужно также обновить поля **organizationAccount** и
**agentAccount** соответственно, иначе произойдёт ошибка.

+ Request Пример (application/json)
Пример запроса на обновление отдельного Договора.
  + Body
        <!-- include(body/contract/put_request.json) -->
+ Response 200 (application/json)
Удачный запрос. Результат - JSON представление обновлённого Договора.
  + Body
        <!-- include(body/contract/put_response.json) -->

+ Request Пример с доп полями(application/json)
Пример запроса на обновление отдельного Договора с телом запроса, содержащим доп. поля.
  + Body
        <!-- include(body/contract/put_with_attributes_request.json) -->
+ Response 200 (application/json)
Удачный запрос. Результат - JSON представление обновлённого Договора.
  + Body
        <!-- include(body/contract/put_with_attributes_response.json) -->

<!-- include(metadata.apib) -->

## Проект
### Проекты [/entity/project]

Средствами JSON API можно создавать и обновлять сведения о Проектах, запрашивать списки Проектов и сведения по отдельным Проектам. Кодом сущности для Проекта в составе JSON API является ключевое слово **project**. Больше о Проектах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/205529477-%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B).
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](/api/remap/1.2/doc/index.html#header-контекстный-поиск). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов проекта на соответствие поисковой строке будет осуществлён по следующим полям:
+ по наименованию Проекта **name**
+ по описанию Проекта **description**

##### Атрибуты сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о Проекте
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **name** - Наименование Проекта `Необходимое`
+ **description** - Описание Проекта
+ **code** - Код Проекта
+ **externalCode** - Внешний код Проекта
+ **archived** - Добавлен ли Проект в архив
+ **attributes** - Коллекция доп. полей в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)

О работе с доп. полями Проектов можно прочитать [здесь](/api/remap/1.2/doc/index.html#header-работа-с-дополнительными-полями)

#### Получить Проекты [GET]

Запрос на получение списка всех проектов на данной учётной записи.
Результат: Объект JSON, включающий в себя поля:
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой проекты.
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

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка проектов.
  + Body
        <!-- include(body/project/get_list.json) -->

#### Создать Проект [POST]

Запрос на создание нового проекта. Единственным необходимым полем в теле запроса
для создания проекта является **name**.

+ Request Пример (application/json)
Пример запроса на создание нового проекта.
  + Body
        <!-- include(body/project/post_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного проекта.
  + Body
        <!-- include(body/project/post_response.json) -->

+ Request Пример с доп полями (application/json)
Пример запроса на создание нового проекта с доп. полями в теле запроса.
  + Body
        <!-- include(body/project/post_with_attributes_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного проекта.
  + Body
        <!-- include(body/project/post_with_attributes_response.json) -->

#### Массовое создание и обновление Проектов [POST]

[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) Проектов.
В теле запроса нужно передать массив, содержащий JSON представления Проектов, которые вы хотите создать или обновить.
Обновляемые Проекты должны содержать идентификатор в виде метаданных.

+ Request Пример (application/json)
Пример создания и обновления нескольких Проектов
  + Body
        <!-- include(body/project/post_massive_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Проектов.
  + Body
        <!-- include(body/project/post_massive_response.json) -->

#### Удалить Проект [DELETE /entity/project/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Проекта

Запрос на удаление Проекта с указанным id.

+ Response 200 (application/json)
Успешное удаление Проекта.

### Метаданные Проектов [/entity/project/metadata]
##### Метаданные Проектов [GET]

Запрос на получение метаданных Проектов. Результат - объект JSON, включающий в себя:
+ **meta** - Ссылка на метаданные Проектов
+ **attributes** - Массив объектов доп. полей Проектов в формате [Метаданных](#header-метаданные)
+ **createShared** - создавать новые Проекты с меткой "Общий"

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](#header-работа-с-дополнительными-полями).

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Проектов.
  + Body
        <!-- include(body/project/get_metadata.json) -->

### Отдельное доп. поле [/entity/project/metadata/attributes/{id}]

+ Parameters
  + id: `5290a290-0313-11e6-9464-e4de00000020` (required, string) - id Доп. поля
  
##### Отдельное доп. поле [GET]

Запрос на получение информации по отдельному дополнительному полю.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.
  + Body
        <!-- include(body/project/metadata_by_id.json) -->

### Проект [/entity/project/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Проекта

#### Получить Проект [GET]

Запрос на получение отдельного проекта с указанным id.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление проекта.
  + Body
        <!-- include(body/project/get_by_id.json) -->

#### Изменить Проект [PUT]

Запрос на обновление существующего проекта с указанным id.
+ Request Пример (application/json)
Пример запроса на обновление существующего проекта.
  + Body
        <!-- include(body/project/put_request.json) -->
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённого проекта.
  + Body
        <!-- include(body/project/put_response.json) -->

+ Request Пример с доп полями(application/json)
Пример запроса на обновление существующего проекта с доп полями в теле запроса.
  + Body
        <!-- include(body/project/put_with_attributes_request.json) -->
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённого проекта.
  + Body
        <!-- include(body/project/put_with_attributes_response.json) -->

<!-- include(metadata.apib) -->

## Настройки компании

На данный момент можно только получить информацию о текущих настройках компании и типах цен товаров. Создавать новые настройки или изменять существующие пока невозможно.

##### Настройки компании [/context/companysettings]
##### Атрибуты сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о Настройках компании
+ **currency** - Ссылка на стандартную валюту в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **priceTypes** - коллекция всех существующих типов цен.
+ **discountStrategy** - Cовместное применение скидок. Может принимать значения `[bySum, byPriority]` означающие "Сумма скидок" и "Приоритетная" соответственно. `Необходимое`
  - *"Сумма скидок"* `[bySum]` означает, что должна действовать сумма скидок
  - *"Приоритетная"* `[byPriority]` должна действовать одна, наиболее выгодная для покупателя скидка

###### Тип цены:

Структура отдельного объекта, представляющего тип цены:
+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о Типе цены `Только для чтения`
+ **id** - ID в формате UUID `Только для чтения`
+ **name** - Наименование Типа цены `Необходимое`
+ **externalCode** - Внешний код Типа цены

##### Метаданные настроек

В метаданных Настроек компании, в поле **customEntities** показан список пользовательских справочников.
Каждый пользовательский справочник содержит поля:
+ **meta** - Ссылка на представление пользовательского справочника
+ **entityMeta** - Ссылка на список сущностей данного пользовательского справочника
+ **name** - Наименование справочника

#### Получить Настройки компании [GET]

Запрос на получение Настроек компании.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление Настроек компании.
  + Body
        <!-- include(body/companysettings/get.json) -->

#### Получить метаданные настроек компании [/context/companysettings/metadata]

Запрос на получение метаданных Настроек компании.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление метаданных настроек компании.
  + Body
        <!-- include(body/companysettings/metadata.json) -->

<!-- include(metadata.apib) -->

## Статья расходов
### Статьи расходов [/entity/expenseitem]

Средствами JSON API можно запрашивать списки Статей расходов и сведения по отдельным Статьям расходов. Кодом сущности для Статей расходов в составе JSON API является ключевое слово **expenseitem**. Больше о Статьях расходов и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по
[этой ссылке](https://support.moysklad.ru/hc/ru/articles/203325553-%D0%9F%D1%80%D0%B8%D0%B1%D1%8B%D0%BB%D0%B8-%D0%B8-%D1%83%D0%B1%D1%8B%D1%82%D0%BA%D0%B8).
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](/api/remap/1.2/doc/index.html#header-контекстный-поиск). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов Статей расходов на соответствие поисковой строке будет осуществлён по следующим полям:
+ по наименованию Cтатьи расходов **name**
+ по описанию Cтатьи расходов **description**

##### Атрибуты сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о Статье расходов
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **name** - Наименование Статьи расходов `Необходимое`
+ **description** - Описание Статьи расходов
+ **code** - Код Статьи расходов
+ **externalCode** - Внешний код Статьи расходов
+ **archived** - Добавлена ли Статья расходов в архив

#### Получить Статьи расходов [GET]

Запрос на получение списка статей расходов.
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

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Статей расходов.
  + Body
        <!-- include(body/expense_item/get_list.json) -->

#### Создать Статью расходов [POST]

Запрос на создание новой статьи расходов. Обязательное поле для создание статьи расходов - **name**.
+ Request Пример (application/json)
Пример запроса на создание новой статьи расходов.
  + Body
        <!-- include(body/expense_item/post_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной статьи расходов.
  + Body
        <!-- include(body/expense_item/post_response.json) -->

#### Массовое создание и обновление Статей расходов [POST]

[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) Статей расходов.
В теле запроса нужно передать массив, содержащий JSON представления Статей расходов, которые вы хотите создать или обновить.
Обновляемые Статьи расходов должны содержать идентификатор в виде метаданных.

+ Request Пример (application/json)
Пример создания и обновления нескольких Статей расходов
  + Body
        <!-- include(body/expense_item/post_massive_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Статей расходов.
  + Body
        <!-- include(body/expense_item/post_massive_response.json) -->

#### Удалить Статью расходов [DELETE /entity/expenseitem/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Статьи расходов

Запрос на удаление Статьи расходов с указанным id.

+ Response 200 (application/json)
Успешное удаление статьи расходов.

### Статья расходов [/entity/expenseitem/{id}]

Работа со статьёй расходов с указанным id.
+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id статьи расходов
  
#### Получить Статью расходов [GET]

Запрос на получение статьи расходов с указанным id.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Статей расходов.
  + Body
        <!-- include(body/expense_item/get_by_id.json) -->
        
#### Изменить Статью расходов [PUT]

Запрос на изменение существующей статьи расходов.
+ Request Пример (application/json)
Пример запроса на обновление статьи расходов.
  + Body
        <!-- include(body/expense_item/put_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённой статьи расходов.
  + Body
        <!-- include(body/expense_item/put_response.json) -->

<!-- include(metadata.apib) -->

## Страна
### Страны [/entity/country]

Средствами JSON API можно создавать и обновлять сведения о Странах, запрашивать списки Стран и сведения по отдельным Странам. Кодом сущности для Страны в составе JSON API является ключевое слово **country**.
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](/api/remap/1.2/doc/index.html#header-контекстный-поиск). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов стран на соответствие поисковой строке будет осуществлён по следующим полям:
+ по наименованию Страны **name**
+ по описанию Страны **description**

##### Атрибуты сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о Стране
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **shared** - Флаг Общий доступ `Только для пользовательских стран`
+ **owner** - Сотрудник-владелец `Только для пользовательских стран`
+ **group** - Отдел-владелец `Только для пользовательских стран`
+ **name** - Наименование Страны `Необходимое`
+ **description** - Описание Страны
+ **code** - Код Страны
+ **externalCode** - Внешний код Страны

#### Получить Страны [GET]

Запрос на получения списка всех Стран для данной учётной записи.
Результат: Объект JSON, включающий в себя поля:
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой Страны.

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

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Стран.
  + Body
        <!-- include(body/country/get_list.json) -->

#### Создать Страну [POST]

Запрос на создание новой страны на данной учётной записи.
Единственное поле, которое обязательно должно присутствовать в теле запроса
на создание Страны - поле **name**.
+ Request Пример (application/json)
Пример запроса на создание новой страны.
  + Body
        <!-- include(body/country/post_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной Страны.
  + Body
        <!-- include(body/country/post_response.json) -->

#### Массовое создание и обновление Стран [POST]

[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) Стран.
В теле запроса нужно передать массив, содержащий JSON представления Стран, которые вы хотите создать или обновить.
Обновляемые Страны должны содержать идентификатор в виде метаданных.

+ Request Пример (application/json)
Пример создания и обновления нескольких Стран
  + Body
        <!-- include(body/country/post_massive_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Стран.
  + Body
        <!-- include(body/country/post_massive_response.json) -->

#### Удалить Страну [DELETE /entity/country/{id}]

Запрос на удаление страны. Невозможно удаление предустановленных стран (стран имеющихся на учётной записи по умолчанию).
Удалить можно только страны, созданные через основной интерфейс или через метод POST.
+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Страны

+ Response 200 (application/json)
Успешное удаление Розничной продажи.
+ Body

### Страна [/entity/country/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Страны

#### Получить Страну [GET]

Запрос на получение страны с указанным id.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление Страны с указанным id.
  + Body
        <!-- include(body/country/get_by_id.json) -->

#### Изменить Страну [PUT]

Запрос на изменение объекта, представляющего собой страну. Невозможно изменение предустановленных стран (стран имеющихся на учётной записи по умолчанию).
Изменить можно только страны, созданные через основной интерфейс или через метод POST.

+ Request Пример (application/json)
Пример запроса на обновление страны.
  + Body
        <!-- include(body/country/put_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённой Страны.
  + Body
        <!-- include(body/country/put_response.json) -->

<!-- include(metadata.apib) -->

## Отдел
##### Отделы [/entity/group]

Средствами JSON API можно запрашивать списки Отделов и сведения по отдельным Отделам. Кодом сущности для Отдела в составе JSON API является ключевое слово **group**.
Больше об Отделах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по  [этой ссылке](https://support.moysklad.ru/hc/ru/articles/204364908-%D0%9E%D1%82%D0%B4%D0%B5%D0%BB%D1%8B).
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](/api/remap/1.2/doc/index.html#header-контекстный-поиск). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов отделов на соответствие поисковой строке будет осуществлён по следующим полям:
+ по наименованию Отдела **name**

##### Атрибуты сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) об Отделе
+ **name** - Наименование отдела.

#### Получить Отделы [GET]
Запрос на получение всех отделов на данной учётной записи.
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

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка отделов.
  + Body
        <!-- include(body/group/get_list.json) -->

##### Отдел [/entity/group/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Отдела

#### Получить Отдел [GET]

Запрос на получение отдельного отдела с указанным id.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного отдела.
  + Body
        <!-- include(body/group/get_by_id.json) -->

<!-- include(metadata.apib) -->

## Скидки
##### Скидки [/entity/discount]

Кодом сущности для Скидок в составе JSON API является ключевое слово **discount**. Операции создания, изменения и удаления не поддерживаются. Перед работой со скидками настоятельно рекомендуем вам прочитать [вот эту статью](https://support.moysklad.ru/hc/ru/articles/203392253-%D0%A1%D0%BA%D0%B8%D0%B4%D0%BA%D0%B8) на портале поддержки МоегоСклада.

##### Атрибуты сущности
###### Общие поля

+ **meta** - Метаданные
+ **id** - ID скидки в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **name** - Наименование скидки
+ **active** - Индикатор, является ли скидка активной на данный момент
+ **allProducts** - Индикатор, действует ли скидка на все товары
+ **agentTags** - Тэги контрагентов, к которым применяется скидка, если применяется не ко всем контрагентам
+ **assortment** - Товары и услуги, которые были выбраны для применения скидки, если та применяется не ко всем товарам
  - **meta** - метаданные товара или услуги
  
###### Поля Спец. цен

+ **productfolders** - Группы товаров, к которым применяется скидка, если применяется не ко всем товарам
  - **meta** - метаданные папки
+ **discount** - Процент скидки если выбран фиксированный процент
+ **specialPrice** - Спец. цена (если выбран тип цен)
  - **priceType** - Наименование типа цены
  - **value** - Значение цены, если выбрано фиксированное значение

###### Поля накопительных скидок

+ **productfolders** - Группы товаров, к которым применяется скидка, если применяется не ко всем товарам
  - **meta** - метаданные папки
+ **levels** - проценты скидок при определённой сумме продаж
  - **amount** - Сумма накоплений в копейках
  - **discount** - Процент скидки, соответствующий данной сумме

#### Получить все скидки [GET]

Запрос на получение всех скидок учётной записи.
Результат: Объект JSON, включающий в себя поля:
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой скидки.

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

+ Response 200 (application/json)
Успешный запрос. Результат - список всех скидок всех типов для учетной записи.
  + Body
        <!-- include(body/discount/get.json) -->

<!-- include(metadata.apib) -->

## Единица измерения
### Единицы измерения [/entity/uom]

По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](/api/remap/1.2/doc/index.html#header-контекстный-поиск). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов единиц измерения на соответствие поисковой строке будет осуществлён по следующим полям:
+ по наименованию Единицы измерения **name**
+ по описанию Единицы измерения **description**

##### Атрибуты сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о единице измерения
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **shared** - Флаг Общий доступ `Только для пользовательских единиц измерений`
+ **owner** - Сотрудник-владелец `Только для пользовательских единиц измерений`
+ **group** - Отдел-владелец `Только для пользовательских единиц измерений`
+ **name** - Наименование единицы измерения `Необходимое`
+ **description** - Описание единицы измерения
+ **code** - Код единицы измерения
+ **externalCode** - Внешний код единицы измерения

#### Получить Единицы измерения [GET]

Запрос на получения списка всех единиц измерения для данной учётной записи.
Результат: Объект JSON, включающий в себя поля:
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой Единицы измерения.

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

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка единиц измерения.
  + Body
        <!-- include(body/uom/get_list.json) -->

#### Создать Единицу измерения [POST]

Запрос на создание новой единицы измерения на данной учётной записи.
Единственное поле, которое обязательно должно присутствовать в теле запроса
на создание Единицы измерения - поле **name**.

+ Request Пример (application/json)
Пример запроса на создание новой единицы измерения.
  + Body
        <!-- include(body/uom/post_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной единицы измерения.
  + Body
        <!-- include(body/uom/post_response.json) -->

#### Массовое создание и обновление единиц измерения [POST]

[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) единиц измерения.
В теле запроса нужно передать массив, содержащий JSON представления единиц измерения, которые вы хотите создать или обновить.
Обновляемые единицы измерения должны содержать идентификатор в виде метаданных.

+ Request Пример (application/json)
Пример создания и обновления нескольких единиц измерения
  + Body
        <!-- include(body/uom/post_massive_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных единиц измерения.
  + Body
        <!-- include(body/uom/post_massive_response.json) -->

#### Удалить Единицу измерения [DELETE /entity/uom/{id}]

Запрос на удаление единицы измерения. Невозможно удаление предустановленных единиц измерения (единиц измерений имеющихся на учётной записи по умолчанию).
Удалить можно только единицы измерения, созданные через основной интерфейс или через метод POST.
+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Единицы измерения

+ Response 200 (application/json)
Успешное удаление Розничной продажи.
+ Body

### Единица измерения [/entity/uom/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Единицы измерения
  
#### Получить Единицу измерения [GET]

Запрос на получение единицы измерения с указанным id.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление Единицы измерения с указанным id.
  + Body
        <!-- include(body/uom/get_by_id.json) -->

#### Изменить Единицу измерения [PUT]

Запрос на изменение объекта, представляющего собой единицу измерения. Невозможно изменение предустановленных единиц измерения
 (единиц измерения имеющихся на учётной записи по умолчанию).
Изменить можно только единицы измерения, созданные через основной интерфейс или через метод POST.

+ Request Пример (application/json)
Пример запроса на обновление новой единицы измерения.
  + Body
        <!-- include(body/uom/put_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённой Единицы измерения.
  + Body
        <!-- include(body/uom/put_response.json) -->

<!-- include(metadata.apib) -->

## Сотрудник
### Сотрудники [/entity/employee]

Средствами JSON API можно запрашивать списки Сотрудников и сведения по отдельным Сотрудникам. Кодом сущности для Сотрудника в составе JSON API является ключевое слово **employee**. Больше о Сотрудниках и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/204019656-%D0%A1%D0%BE%D1%82%D1%80%D1%83%D0%B4%D0%BD%D0%B8%D0%BA%D0%B8).
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](/api/remap/1.2/doc/index.html#header-контекстный-поиск).

Поиск среди объектов сотрудников на соответствие поисковой строке будет осуществлён по следующим полям:
+ По имени Сотрудника **name**
+ По адресу электронной почты **email**
+ По номеру телефона **phone**

##### Атрибуты сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о Сотруднике
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Только для чтения`
+ **shared** - Общий доступ `Только для чтения`
+ **group** - Отдел сотрудника в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Только для чтения`
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **name** - Имя сотрудника в формате "Фамилия И. О." `Только для чтения`
+ **description** - Комментарий к Сотруднику
+ **externalCode** - Внешний код Сотрудника `Только для чтения`
+ **archived** - Добавлен Сотрудник в архив `Только для чтения`
+ **created** - Момент создания Сотрудника `Только для чтения`
+ **uid** - Логин Сотрудника `Только для чтения`
+ **email** - Электронна почта сотрудника `Только для чтения`
+ **phone** - Телефон сотрудника
+ **firstName** - Имя
+ **middleName** - Отчество
+ **lastName** - Фамилия `Необходимое`
+ **fullName** - Имя Отчество Фамилия `Только для чтения`
+ **shortFio** - Краткое ФИО `Только для чтения`
+ **cashiers** - Массив кассиров `Только для чтения`
+ **attributes** - Дополнительные поля Сотрудника в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **image** - Фотография сотрудника
+ **inn** - ИНН сотрудника (в формате ИНН физического лица)
+ **position** - Должность сотрудника 

##### Атрибуты вложенных сущностей
###### Кассир

+ **id** - id Кассира `Только для чтения`
+ **accountId** - id учетной записи Кассира `Только для чтения`
+ **employee** - Ссылка на сущность Сотрудника, которого представляет собой кассир в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Только для чтения`
+ **retailStore** - Ссылка на Точку продаж, к которой прикреплён кассир в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Только для чтения`

###### Фотография сотрудника: структура и загрузка.

Структура поля **image**, которое вы получите при запросе сотрудника с фотографией:
+ **meta** - Метаданные об изображении
+ **title** - Название изображения
+ **filename** - Имя файла
+ **size** - Размер файла в байтах
+ **updated** - Дата последнего изменения
+ **miniature** - Ссылка на миниатюру изображения в формате Метаданных
+ **tiny** - Ссылка на уменьшенное изображение в формате Метаданных

##### Загрузка

Для загрузки фотографии сотрудника необходимо сформировать запрос на [обновление](#сотрудник-сотрудник-put) сотрудника (PUT) и в теле запроса
указать поле **image** со следующими атрибутами:
+ **filename** - имя файла с расширением. Например - "cashier.png"
+ **content** - Изображение, закодированное в формате Base64.

Если в запросе на обновление не будет полей **filename** и **content**, то весь объект **image**, если он присутствует в Body,
будет проигнорирован, т.к. сервер посчитает, что его обновление не требуется.

О работе с доп. полями Сотрудников можно прочитать [здесь](/api/remap/1.2/doc/index.html#header-работа-с-дополнительными-полями)

#### Получить Сотрудников [GET]

Запрос на получения списка всех сотрудников для данной учётной записи.
Результат: Объект JSON, включающий в себя поля:
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой сотрудников.
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

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Сотрудников.
  + Body
        <!-- include(body/employee/get_list.json) -->

#### Массовое обновление Сотрудников [POST]

[Массовое обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) Сотрудников.
В теле запроса нужно передать массив, содержащий JSON представления Сотрудников, которые вы хотите обновить.
Обновляемые Сотрудники должны содержать идентификатор в виде метаданных.

+ Request Пример (application/json)
Пример обновления нескольких Сотрудников
  + Body
        <!-- include(body/employee/post_massive_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений обновленных Сотрудников.
  + Body
        <!-- include(body/employee/post_massive_response.json) -->

#### Удалить Сотрудника [DELETE /entity/employee/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Сотрудника

Запрос на удаление Сотрудника с указанным id.

+ Response 200 (application/json)
Успешное удаление Сотрудника.

### Метаданные Сотрудников [/entity/employee/metadata]
##### Метаданные Сотрудников [GET]

Запрос на получение метаданных Сотрудников. Результат - объект JSON, включающий в себя:
+ **meta** - Ссылка на метаданные Сотрудников
+ **attributes** - Массив объектов доп. полей Сотрудников в формате [Метаданных](#header-метаданные)
+ **createShared** - создавать новых Сотрудников с меткой "Общий"

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](#header-работа-с-дополнительными-полями).

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Сотрудников.
  + Body
        <!-- include(body/employee/get_metadata.json) -->

### Отдельное доп. поле [/entity/employee/metadata/attributes/{id}]

+ Parameters
  + id: `5290a290-0313-11e6-9464-e4de00000020` (required, string) - id Доп. поля
  
##### Отдельное доп. поле [GET]

Запрос на получение информации по отдельному дополнительному полю.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.
  + Body
        <!-- include(body/employee/metadata_by_id.json) -->

### Сотрудник [/entity/employee/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Сотрудника

#### Получить Сотрудника [GET]

Запрос на получение отдельного сотрудника с указанным id.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление Сотрудника.
  + Body
        <!-- include(body/employee/get_by_id.json) -->

#### Создать Сотрудника [POST /entity/employee/]

Запрос на создание сотрудника.
Обязательные для создания поля:
+ **lastName** - Фамилия

+ Request Пример (application/json)
Пример запроса на создание Сотрудника.
  + Body
        <!-- include(body/employee/post_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Сотрудника.
  + Body
        <!-- include(body/employee/post_response.json) -->

#### Изменить Сотрудника [PUT]

Запрос на обновление существующего Сотрудника. В теле запроса обязательно следует указать поле **lastName**.
+ Request Пример (application/json)
Пример запроса на обновление Сотрудника.
  + Body
        <!-- include(body/employee/put_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённого Сотрудника.
  + Body
        <!-- include(body/employee/put_response.json) -->

<!-- include(metadata.apib) -->

## Пользовательский справочник
### Пользовательские справочники [/entity/customentity]
##### Атрибуты сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о Пользовательском справочнике
+ **id** - ID в формате UUID `Только для чтения`
+ **name** - Наименование пользовательского справочника `Необходимое`

##### Список пользовательских справочников

Для работы с пользовательскими справочниками вам нужно знать id каждого справочника.
Этот id обозначен в URI-параметрах запросов к данной сущности как <metadata_id>. Его
можно получить выполнив запрос на получение метаданных настроек компании. В полученном списке сущностей
в полях типа meta будет указана ссылка на каждый из справочников. В этой ссылке, последняя подстрока отделённая
знаком `/` и является идентификатором для данного справочника.
+ Пример: Выполнив вышеуказанный запрос и найдя среди списка справочника интересующих нас, мы вычленяем следующую ссылку
  из поля meta: `https://online.moysklad.ru/api/remap/1.2/context/companysettings/metadata/customEntities/eaacabaf-2655-11e6-8a84-bae500000045`
  Из данной сылки вычленяем <metadata_id> нужного нам пользовательского справочника : `eaacabaf-2655-11e6-8a84-bae500000045` и этот id используем
  для работы с данным пользовательским справочником в рамках ресурса [Пользовательский справочник](#пользовательский-справочник).

#### Создать справочник [POST]

Единственным необходимым полем для создания пользовательского справочника
является поле **name**.
+ Request Пример (application/json)
Пример запроса на создание новой сущности пользовательского справочника.
  + Body
        <!-- include(body/customentity/post_request.json) -->
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной сущности пользовательского справочника.
  + Body
        <!-- include(body/customentity/post_response.json) -->

#### Изменить справочник [PUT /entity/customentity/{metadata_id}]

Запрос на изменение справочника.
+ Parameters
  + metadata_id: `3f9a2f30-76af-11e7-6adb-ede50000000b` (required, string) - id пользовательского справочника

+ Request Пример (application/json)
Пример запроса на обновление пользовательского справочника.
  + Body
        <!-- include(body/customentity/put_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённого пользовательского справочника.
  + Body
        <!-- include(body/customentity/put_response.json) -->

#### Удалить справочник [DELETE /entity/customentity/{metadata_id}]

Запрос на удаление пользовательского справочника.
+ Parameters
  + metadata_id: `3f9a2f30-76af-11e7-6adb-ede50000000b` (required, string) - id пользовательского справочника

+ Response 200 (application/json)
Успешное удаление пользовательского справочника.
+ Body

### Элементы Пользовательского справочника [/entity/customentity/{metadata_id}]
##### Атрибуты элемента

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) об элементе Пользовательского справочника
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **updated** - дата последнего изменения `Только для чтения`
+ **name** - Наименование элемента пользовательского справочника `Необходимое`
+ **code** - Код элемента пользовательского справочника
+ **description** - Описание элемента пользовательского справочника
+ **externalCode** - Внешний элемента код пользовательского справочника


+ Parameters
  + metadata_id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id пользовательского справочника

#### Получить элементы справочника [GET]

Запрос на получение всех элементов в указанном пользовательском справочнике.
Результат: Объект JSON, включающий в себя поля:
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой элементы пользовательского справочника.

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка элементов пользовательского справочника.
  + Body
        <!-- include(body/customentity_elements/get_list.json) -->
        
#### Создать элемент справочника [POST]

Единственным необходимым полем для создания элемента пользовательского справочника
является поле **name**.
+ Request Пример (application/json)
Пример запроса на создание нового элемента пользовательского справочника.
  + Body
        <!-- include(body/customentity_elements/post_request.json) -->
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного элемента пользовательского справочника.
  + Body
        <!-- include(body/customentity_elements/post_response.json) -->
        
#### Удалить элемент справочника [DELETE /entity/customentity/{metadata_id}/{id}]

Запрос на удаление элемента пользовательского справочника.
+ Parameters
  + metadata_id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id пользовательского справочника
  + id: `6343f631-265d-11e6-8a84-bae500000014` (required, string) - id элемента пользовательского справочника

+ Response 200 (application/json)
Успешное удаление элемента пользовательского справочника.
+ Body

### Элемент пользовательского справочника [/entity/customentity/{metadata_id}/{id}]

+ Parameters
  + metadata_id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id пользовательского справочника
  + id: `6343f631-265d-11e6-8a84-bae500000014` (required, string) - id элемента пользовательского справочника

#### Получить элемент [GET]

Запрос на получение элемента пользовательского справочника с указанным id.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление элемента пользовательского справочника с указанным id.
  + Body
        <!-- include(body/customentity_elements/get_by_id.json) -->

#### Изменить элемент [PUT]

Запрос на изменение объекта, представляющего собой элемент пользовательского справочника.

+ Request Пример (application/json)
Пример запроса на обновление элемента пользовательского справочника.
  + Body
        <!-- include(body/customentity_elements/put_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённого элемента пользовательского справочника.
  + Body
        <!-- include(body/customentity_elements/put_response.json) -->

<!-- include(metadata.apib) -->

## Склад
### Склады [/entity/store]

По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](/api/remap/1.2/doc/index.html#header-контекстный-поиск).

Поиск среди объектов складов на соответствие поисковой строке будет осуществлён по следующим полям:
+ По наименованию Склада **name**
+ По коду Склада **code**

##### Атрибуты сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о Складе
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **name** - Наименование Склада `Необходимое`
+ **description** - комментарий к Складу
+ **code** - Код Склада
+ **externalCode** - Внешний код Склада
+ **archived** - Добавлен ли Склад в архив
+ **address** - Адрес Склада
+ **parent** - Родительский склад (Группа)
+ **pathName** - Группа Склада
+ **attributes** - Дополнительные поля Склада в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)

О работе с доп. полями Складов можно прочитать [здесь](/api/remap/1.2/doc/index.html#header-работа-с-дополнительными-полями)

#### Получить Склады [GET]

Получить список всех Складов.
Результат: Объект JSON, включающий в себя поля:
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой [Склады](#склад-склады).
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

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Складов.
  + Body
        <!-- include(body/store/get_list.json) -->

#### Создать Склад [POST]

Создать новый Склад.

##### Описание

Склад создаётся на основе переданного объекта JSON,
который содержит представление нового Склада.
Необходимое для создания поле - `name` не должно быть пустым.

+ Request Пример (application/json)
Пример запроса на создание нового Склада.
  + Body
        <!-- include(body/store/post_request.json) -->
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Склада.
  + Body
        <!-- include(body/store/post_response.json) -->

+ Request Пример с доп полями (application/json)
Пример запроса на создание нового Склада с доп. полями в теле запроса.
  + Body
        <!-- include(body/store/post_with_attributes_request.json) -->
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Склада.
  + Body
        <!-- include(body/store/post_with_attributes_response.json) -->

#### Массовое создание и обновление Складов [POST]

[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) Складов.
В теле запроса нужно передать массив, содержащий JSON представления Складов, которые вы хотите создать или обновить.
Обновляемые Склады должны содержать идентификатор в виде метаданных.

+ Request Пример (application/json)
Пример создания и обновления нескольких Складов
  + Body
        <!-- include(body/store/post_massive_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Складов.
  + Body
        <!-- include(body/store/post_massive_response.json) -->

#### Удалить Склад [DELETE /entity/store/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Склада

Запрос на удаление Склада с указанным id.

+ Response 200 (application/json)
Успешное удаление Склада.

### Метаданные Складов [/entity/store/metadata]
##### Метаданные Складов [GET]

Запрос на получение метаданных Складов. Результат - объект JSON, включающий в себя:
+ **meta** - Ссылка на метаданные Складов
+ **attributes** - Массив объектов доп. полей Складов в формате [Метаданных](#header-метаданные)
+ **createShared** - создавать новые Склады с меткой "Общий"

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](#header-работа-с-дополнительными-полями).

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей Складов.
  + Body
        <!-- include(body/store/get_metadata.json) -->

### Отдельное доп. поле [/entity/store/metadata/attributes/{id}]

+ Parameters
  + id: `5290a290-0313-11e6-9464-e4de00000020` (required, string) - id Доп. поля
  
##### Отдельное доп. поле [GET]

Запрос на получение информации по отдельному дополнительному полю.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.
  + Body
        <!-- include(body/store/metadata_by_id.json) -->

### Склад [/entity/store/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Склада.
  
#### Получить Склад [GET]

Запрос на получение отдельного Склада с указанным id.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление Склада с указанным id.
  + Body
        <!-- include(body/store/get_by_id.json) -->

#### Изменить Склад [PUT]
##### Описание

Обновляется представление Склада с указанным id.
В теле запроса можно указать только те поля, которые необходимо изменить у Склада,
кроме полей, помеченных `Только для чтения` в описании [атрибутов Склада](#склад-склады).

+ Request Пример (application/json)
Пример запроса на обновление существующего Склада.
  + Body
        <!-- include(body/store/put_request.json) -->
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённого Склада.
  + Body
        <!-- include(body/store/put_response.json) -->

+ Request Пример с доп полями (application/json)
Пример запроса на обновление существующего Склада с доп полями в теле запроса.
  + Body
        <!-- include(body/store/put_with_attributes_request.json) -->
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённого Склада.
  + Body
        <!-- include(body/store/put_with_attributes_response.json) -->

## Юрлицо

Средствами JSON API можно создавать и обновлять сведения о юрлицах, запрашивать списки юрлиц и сведения по отдельным юрлицам. С помощью специального ресурса можно управлять счетами отдельного юрлица. Кодом сущности для юрлица в составе JSON API является ключевое слово **organization**.
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](/api/remap/1.2/doc/index.html#header-контекстный-поиск).

Поиск среди объектов юрлиц на соответствие поисковой строке будет осуществлён по следующим полям:
+ По наименованию Юрлица **name**
+ По коду Юрлица **code**
+ По полному наименованию Юрлица **legalTitle**
+ По адресу электронной почты **email**
+ По номеру городского телефона **phone**
+ По номеру дисконтной карты

### Юрлица

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о юрлице
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **syncId** - ID синхронизации. После заполнения недоступен для изменения.
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **shared** - Общий доступ
+ **group** - Отдел сотрудника в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **name** - Краткое наименование юрлица `Необходимое`
+ **description** - Комментарий к Юр. лицу
+ **code** - Код юрлица
+ **externalCode** - Внешний код юрлица
+ **archived** - Добавлено ли юрлицо в архив
+ **created** - Дата создания
+ **companyType** - Тип юрлица. `[Юридическое лицо, Индивидуальный предприниматель, Физическое лицо]`.
В зависимости от значения данного поля набор выводимых реквизитов юрлица может меняться.  Подробнее [тут](#header-тип-юрлица)

##### Поля реквизитов

+ **legalTitle** - Полное наименование юрлица
+ **legalAddress** - Юридический адрес юрлица
+ **inn** - ИНН
+ **kpp** - КПП
+ **ogrn** - ОГРН
+ **ogrnip** - ОГРНИП
+ **okpo** - ОКПО
+ **certificateNumber** - Номер свидетельства
+ **certificateDate** - Дата свидетельства
+ **email** - Электронная почта
+ **phone** - Телефон
+ **fax** - Факс
+ **accounts** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные), представляющие собой ссылку на счета юрлица
+ **attributes** - Коллекция доп. полей в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **isEgaisEnable** - Включен ли ЕГАИС для данного юрлица
+ **fsrarId** - Идентификатор в ФСРАР
+ **payerVat** - Является ли данное юрлицо плательщиком НДС
+ **utmUrl** - IP-адрес УТМ
+ **actualAddress** - Фактический адрес юрлица
+ **director** - Руководитель
+ **chiefAccountant** - Главный бухгалтер

##### Атрибуты вложенных сущностей
###### Счета юрлица

+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **updated** - Момент последнего обновления сущности`Только для чтения`
+ **isDefault** - Является ли счёт основным счётом юрлица
+ **accountNumber** - Номер счёта `Необходимо`
+ **bankName** - Наименование банка
+ **bankLocation** - Адрес банка
+ **correspondentAccount** - Корр счет
+ **bic** - БИК
+ **agent** - Ссылка на юрлицо (тип [Мета](/api/remap/1.2/doc/index.html#header-метаданные)) `Необходимо`

##### Тип юрлица

В зависимости от типа юрлица **companyType** в составе его объекта будут выводиться разные наборы реквизитов.
Типы юрлица и соответствующие значения, которые могут быть переданы в значение данного поля:
| Тип юрлица                | Значение поля companyType  |
| ------------------------------ |:---------------------------|
| Юридическое лицо               | legal                      |
| Индивидуальный предприниматель | entrepreneur               |
| Физическое лицо                | individual                 |

Если тип юрлица `Юридическое лицо`, будут выведены следующие поля реквизитов:
+ **legalTitle** - Полное наименование юрлица
+ **legalAddress** - Юридический адрес юрлица
+ **inn** - ИНН
+ **kpp** - КПП
+ **ogrn** - ОГРН
+ **okpo** - ОКПО

Если тип юрлица `Индивидуальный предприниматель`, будут выведены следующие поля реквизитов:
+ **legalTitle** - Полное наименование юрлица
+ **legalAddress** - Юридический адрес юрлица
+ **inn** - ИНН
+ **okpo** - ОКПО
+ **ogrnip** - ОГРНИП
+ **certificateNumber** - Номер свидетельства
+ **certificateDate** - Дата свидетельства

Если тип юрлица `Физическое лицо`, будут выведены следующие поля реквизитов:
+ **legalTitle** - Полное наименование юрлица
+ **legalAddress** - Юридический адрес юрлица
+ **inn** - ИНН

О работе с доп. полями юрлиц можно прочитать [здесь](/api/remap/1.2/doc/index.html#header-работа-с-дополнительными-полями)

#### Получить список юрлиц

Запрос на получение списка юрлиц на данной учётной записи.
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой юрлица.
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

+ Response 200 (application/json)
Успешный запрос.Результат: Объект JSON, включающий в себя поля:
  + Body
        <!-- include(body/organization/get_list.json) -->

#### Создать юрлицо [POST]

Запрос на создание нового юрлица.

##### Описание

Юрлицо создаётся на основе переданного объекта JSON,
который содержит представление нового юрлица.

+ Request Пример (application/json)
Пример создания нового юрлица.
  + Body
        <!-- include(body/organization/post_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного юрлица.
  + Body
        <!-- include(body/organization/post_response.json) -->

+ Request Пример с доп. полями(application/json)
Пример создания нового юрлица с доп полями в теле запроса.
  + Body
        <!-- include(body/organization/post_with_attributes_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного юрлица.
  + Body
        <!-- include(body/organization/post_with_attributes_response.json) -->

#### Массовое создание и обновление юрлиц [POST]

[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) юрлиц.
В теле запроса нужно передать массив, содержащий JSON представления юрлиц, которые вы хотите создать или обновить.
Обновляемые юрлица должны содержать идентификатор в виде метаданных.

+ Request Пример (application/json)
Пример создания и обновления нескольких юрлиц
  + Body
        <!-- include(body/organization/post_massive_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных юрлиц.
  + Body
        <!-- include(body/organization/post_massive_response.json) -->

#### Удалить юрлицо [DELETE /entity/organization/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id юрлица

Запрос на удаление юрлица с указанным id.

+ Response 200 (application/json)
Успешное удаление юрлица.

### Метаданные юрлиц

Запрос на получение метаданных юрлиц. Результат - объект JSON, включающий в себя:
+ **meta** - Ссылка на метаданные юрлиц
+ **attributes** - Массив объектов доп. полей юрлиц в формате [Метаданных](#header-метаданные)
+ **createShared** - создавать новые юрлица с меткой "Общий"

Структура отдельного объекта, представляющего доп. поле подробно описана в разделе [Работа с дополнительными полями](#header-работа-с-дополнительными-полями).

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление доп. полей юрлиц.
  + Body
        <!-- include(body/organization/get_metadata.json) -->

### Отдельное доп. поле

+ Parameters
  + id: `5290a290-0313-11e6-9464-e4de00000020` (required, string) - id Доп. поля

Запрос на получение информации по отдельному дополнительному полю.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного доп. поля.
  + Body
        <!-- include(body/organization/metadata_by_id.json) -->

### Юрлицо [/entity/organization/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id юрлица.

#### Получить юрлицо [GET]

Запрос на получение юрлица с указанным id.
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
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление нового юрлица.
  + Body
        <!-- include(body/organization/get_by_id.json) -->
        
#### Изменить юрлицо [PUT]

Запрос на обновление юрлица с указанным id.

+ Request Пример (application/json)
Пример запроса на обновление юрлица с указанным id.
  + Body
        <!-- include(body/organization/post_request.json) -->
+ Response 200 (application/json)
Успешный запрос. Результат - JSON обновлённого юрлица.
  + Body
        <!-- include(body/organization/post_response.json) -->

+ Request Пример с доп полями (application/json)
Пример запроса на обновление юрлица с указанным id.
  + Body
        <!-- include(body/organization/put_with_attributes_request.json) -->
+ Response 200 (application/json)
Успешный запрос. Результат - JSON обновлённого юрлица.
  + Body
        <!-- include(body/organization/put_with_attributes_response.json) -->

### Счета юрлица [/entity/organization/{id}/accounts]

Список счетов юрлица с указанным id.
+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id юрлица.

#### Получить список счетов юрлица [GET]

Возвращает массив JSON представлений счетов юрлица.
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

+ Response 200 (application/json)
Успешный запрос.
  + Body
        <!-- include(body/organization/get_accounts.json) -->

#### Изменить счета юрлица[POST]
##### Описание

Обновляются счета юрлица с указанным id.
Обновляются все поля, указанные в JSON объекте запроса, кроме
помеченных `Только для чтения` в описании [атрибутов счетов юрлица](#header-счета-юрлица).
Поля, которые не были указаны в JSON запроса, не изменяются.
+ Request Пример (application/json)
  + Body
      <!-- include(body/put_accounts_body.json) -->

+ Response 200 (application/json)
  + Body
      <!-- include(body/put_accounts_response.json) -->

<!-- include(metadata.apib) -->

## Точка продаж
### Точки продаж [/entity/retailstore]

Средствами JSON API можно запрашивать списки Точек продаж и сведения по отдельным точкам продаж. Также можно получить доступ к специальному ресурсу для управления кассирами точки продаж. Кодом сущности для точки продаж в составе JSON API является ключевое слово **retailstore**. Больше о точках продаж и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203325423-%D0%A0%D0%BE%D0%B7%D0%BD%D0%B8%D1%86%D0%B0) в разделе "Создание точки продаж в основном интерфейсе".
По данной сущности можно осуществлять контекстный поиск с помощью специального параметра `search`. Подробнее можно узнать по [ссылке](/api/remap/1.2/doc/index.html#header-контекстный-поиск). Поиск с параметром search отличается от других тем, что поиск не префиксный, без токенизации и идет только по одному полю одновременно. Ищет такие строки, в которые входит значение строки поиска.

Поиск среди объектов точек продаж на соответствие поисковой строке будет осуществлён по следующим полям:
+ по наименованию Точки продаж **name**
+ по адресу Точки продаж **address**

##### Атрибуты сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о смене`Только для чтения`
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи`Только для чтения`
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Только для чтения`
+ **shared** - Общий доступ `Только для чтения`
+ **group** - Отдел сотрудника в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Только для чтения`
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **name** - Наименование точки продаж `Только для чтения`
+ **description** - Описание точки продаж `Только для чтения`
+ **externalCode** - Внешний код точки продаж `Только для чтения`
+ **archived** - Добавлена ли точка продаж в архив `Только для чтения`
+ **address** - Адрес `Только для чтения`
+ **controlShippingStock** - Контроль остатков `Только для чтения`
+ **onlyInStock** - Выгружать только товары в наличии. Доступно только при активном контроле остатков. Влияет только на выгрузку остатков в POS API  `Только для чтения`
+ **active** - Включена `Только для чтения`
+ **controlCashierChoice** - Выбор продавца `Только для чтения`
+ **discountEnable** - Разрешить скидки
+ **discountMaxPercent** - Максимальная скидка (в процентах)
+ **priceType** - Тип цен, с которыми будут продаваться товары в рознице `Только для чтения`
+ **cashiers** - Ссылка на Кассиров в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Только для чтения`
+ **egaisEnabled** - Точка продаж должна передавать данные в ЕГАИС
+ **frNumber** - Номер модели ФР
+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Только для чтения`
+ **store** - Ссылка на склад в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Только для чтения`
+ **acquire** - Банк-эквайер `Только для чтения`
+ **issueOrders** - Выдача заказов `Только для чтения`
+ **sellReserves** - Учет резервов `Только для чтения`
+ **lastOperationNames** - Последние операции `Только для чтения`
+ **ofdEnabled** - Отправлять электронный чек через ОФД
+ **allowCustomPrice** - Разрешить продажу по свободной цене
+ **authTokenAttached** - создан ли токен для точки продаж `Только для чтения`
+ **orderToState** - Ссылка на статус, который проставится заказу после проведения продажи на его основании (если указано), в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Только для чтения`
+ **customerOrderStates** - Ссылка на статусы, в которых выгружаются заказы в точку продаж (если указано), в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Только для чтения`
+ **environment** - информация об окружении
+ **state** - информация о статусе точки продаж

###### Аттрибуты сущности Окружение

+ **device** - информация об устройстве
+ **os** - информация об операционной системе
+ **software** - информация о ПО
+ **chequePrinter** - данные о ККТ
+ **paymentTerminal** - информация о платежном терминале

###### Аттрибуты сущности ПО

+ **name** - наименование ПО. `Необходимое`
+ **vendor** - Производитель.
+ **version** - версия ПО.

###### Аттрибуты сущности ККТ

+ **vendor** - Производитель
+ **name** - Наименование. `Необходимое`
+ **serial** - серийный номер
+ **fiscalDataVersion** - формат фискальных данных
+ **driver** - информация об используемом драйвере
+ **fiscalMemory** - информация о фискальном накопителе
+ **firmwareVersion** - Версия прошивки ККТ

###### Аттрибуты сущности Драйвер

+ **name** - наименования драйвера
+ **version** - Версия драйвера

###### Аттрибуты сущности Фискальный накопитель

+ **fiscalDataVersion** - версия фискальной памяти

##### Аттрибуты сущности Статус

+ **sync** - состояние синхронизации
+ **lastCheckMoment** - дата и время последней синхронизации
+ **fiscalMemory** - информация о фискальной памяти
+ **paymentTerminal** - информация о платежном терминале `Deprecated`

###### Аттрибуты сущности Синхронизация

+ **message** - состояние синхронизации.
+ **lastAttempMoment** - Дата последней сихронизации (не обязательно успешной). `Необходимое`

###### Аттрибуты сущности Фискальная Память

+ **error** - информация об ошибке ФН
+ **notSendDocCount** - Количество неотправленных документов в ОФД
+ **notSendFirstDocMoment** - Дата первого документа в очереди на отправку

###### Аттрибуты сущности Ошибка

+ **сode** - код ошибки ФН
+ **message** - описание ошибки

###### Аттрибуты сущности Платежный Терминал

+ **acquiringType** - информация о типе эквайера (например: inpas/payme)

##### Последние операции

Поле **lastOperationNames** представляет собой массив объектов со следующей структурой:

+ **entity** - Ключевое слово, обозначающее тип последней операции `Только для чтения`
+ **name** - Наименование (номер) последней операции `Только для чтения`

Представляет собой краткий список последних операций на данной точке продаж. Если продаж на данной точке по факту нет, то номера продаж будут фейковые

##### Кассиры

Сущность кассир представляет собой объект, содержащий ссылки на [Сотрудника](/api/remap/1.2/doc/employee.html#сотрудник), назначенного кассиром,
и [Точку продаж](#точка-продаж), к которой он привязан.
Подробнее о сущности Кассира можно посмотреть в разделе [Кассиры](#кассир)

####### Атрибуты сущности Кассир

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о смене`Только для чтения`
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи`Только для чтения`
+ **employee** - Ссылка на сотрудника в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Только для чтения`
+ **retailStore** - Ссылка на точку продаже в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Только для чтения`

#### Получить точки продаж [GET]

Запрос всех Розничных точек продаж на данной учётной записи.
Результат: Объект JSON, включающий в себя поля:
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой Розничные точки продаж.
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

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Розничных точек продаж.
  + Body
        <!-- include(body/retailstore/get_list.json) -->

#### Удалить точку продаж [DELETE /entity/retailstore/{id}]

Запрос на удаление Розничной точки продаж с указанным id.
+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Точки продаж

+ Response 200 (application/json)
Успешное удаление Розничной точки продаж.

##### Точка продаж [/entity/retailstore/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Точки продаж

### Получить точку продаж [GET]

Запрос на получение отдельной Розничной точки продаж с указанным id.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление точки продаж.
  + Body
        <!-- include(body/retailstore/get_by_id.json) -->

<!-- include(metadata.apib) -->

## Кассир
##### Кассиры [/entity/retailstore/{retailStoreId}/cashiers]

Средствами JSON API можно запрашивать списки Кассиров и сведения по отдельным кассирам. Кодом сущности для кассира в составе JSON API является ключевое слово **cashier**.

##### Атрибуты сущности

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


##### Кассир [/entity/retailstore/{retailStoreId}/cashiers/{id}]

+ Parameters
  + retailStoreId: `ea05e0c9-8667-11e7-8a7f-40d000000060` (required, string) - id Точки продаж
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Кассира

### Получить Кассира [GET]

Запрос на получение отдельного кассира с указанным id.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного кассира.
  + Body
        <!-- include(body/cashier/get_by_id.json) -->

<!-- include(metadata.apib) -->

## Веб-хуки  

На платных аккаунтах с помощью средств JSON API вы можете: получать, создавать, обновлять, отключать и удалять веб-хуки. Управление веб-хуками доступно **только администратору аккаунта**.
Ключевым словом для веб-хуков в рамках JSON api является **webhook**.

### Веб-хуки [/entity/webhook]

Пример того, в каком виде будут передаваться данные:
<pre>
{
 "events":
  [
   {"meta":
     {
       "type":"product",
       "href":"https://online.moysklad.ru/api/remap/1.2/entity/product/c1557cfb-c2cc-11e6-7a31-d0fd000f0b00"
     },
    "action":"DELETE"
   }
  ]
}
</pre>
В массиве **events** может быть несколько объектов.
В ответ на наш запрос мы ожидаем получить ответ с HTTP статусом 200 или 204.
С помощью API версии 1.2 можно просматривать, изменять, удалять веб-хуки созданные только с помощью API версии 1.2.

##### Заголовок временного отключения через API

Через JSON API или POS API при запросах можно отключить уведомления вебхуков в контексте данного запроса. Для этого нужно указать заголовок `X-Lognex-WebHook-Disable` с произвольным значением.

##### Атрибуты сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) веб-хука
+ **id** - id веб-хука
+ **accountId** - id учётной записи
+ **entityType** - тип сущности, к которой привязан веб-хук `Необходимое`
+ **url** - URL, по которому будет происходить запрос `Необходимое`
+ **method** - HTTP метод, с которым будет происходить запрос <br>
Возможные значения: `POST`
+ **enabled** - Флажок состояние веб-хука (включен / отключен) <br>
+ **action** - Действие, которое отслеживается веб-хуком `Необходимое` <br>
Возможные значения:  `[CREATE, UPDATE, DELETE]`

#### Получить список веб-хуков [GET]

Запрос на получение всех веб-хуков на данной учётной записи.

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка веб-хуков.
  + Body
        <!-- include(body/webhook/get_list.json) -->

#### Создать веб-хук [POST]

Пример запроса на создание нового веб-хука. Убедитесь, что создаетё ещё не существующий веб-хук:
сочетание **entityType**, **action** должно быть уникальным.

+ Request Пример (application/json)
Пример запроса на создание нового веб-хука.
  + Body
        <!-- include(body/webhook/post_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного веб-хука.
  + Body
        <!-- include(body/webhook/post_response.json) -->

### Веб-хук [/entity/webhook/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id веб-хука

#### Массовое создание и обновление веб-хуков [POST]

[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) веб-хуков.
В теле запроса нужно передать массив, содержащий JSON представления веб-хуков, которые вы хотите создать или обновить.
Обновляемые веб-хуки должны содержать идентификатор в виде метаданных.

+ Request Пример (application/json)
Пример создания и обновления нескольких веб-хуков
  + Body
        <!-- include(body/webhook/post_massive_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных веб-хуков.
  + Body
        <!-- include(body/webhook/post_massive_response.json) -->

#### Получить отдельный веб-хук [GET]

Запрос на получение отдельного веб-хука с указанным id.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление веб-хука с указанным id.
  + Body
        <!-- include(body/webhook/get_by_id.json) -->
        
#### Обновить веб-хук [PUT]

Пример запроса на обновление сведений о веб-хуке.

+ Request Пример (application/json)
Пример запроса на обновление веб-хука.
  + Body
        <!-- include(body/webhook/put_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённого веб-хука.
  + Body
        <!-- include(body/webhook/put_response.json) -->

#### Отключить веб-хук [PUT]

Пример запроса на отключение веб-хука.

+ Request Пример (application/json)
Пример запроса на отключение веб-хука.
  + Body
        <!-- include(body/webhook/disable_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление отключенного веб-хука.
  + Body
        <!-- include(body/webhook/disable_response.json) -->

#### Удалить веб-хук [DELETE]

Пример запроса на удаление веб-хука с указанным id.

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id веб-хука

+ Response 200 (application/json)
Успешное удаление веб-хука.

<!-- include(metadata.apib) -->

## Шаблон печатной формы

Средствами JSON API можно запрашивать списки шаблонов печатных форм для сущностей. Кодом сущности для стандартных шаблонов в составе JSON API является ключевое слово **embeddedtemplate**, а для пользовательских **customtemplate**.

##### Стандартные шаблоны [/entity/{type}/metadata/embeddedtemplate/]
##### Атрибуты сущности
+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о стандартном шаблоне
+ **id** - id шаблона
+ **name** - наименование шаблона
+ **type** - тип шаблона (entity - документ)
+ **content** - ссылка на скачивание

+ Parameters
  + type: `demand` (required, string) - тип сущности, для которой запрашиваются стандартные шаблоны

### Список стандартных шаблонов [GET]

Запрос на получение информации о стандартных шаблонах печатных форм для указанного типа сущности.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка стандартных шаблонов для данного типа сущности.
  + Body
        <!-- include(body/template/embeddedtemplate.json) -->


### Отдельный стандартный шаблон [/entity/{type}/metadata/embeddedtemplate/{id}]

+ Parameters
  + type: `demand` (required, string) - тип сущности, для которой запрашивается стандартный шаблон
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id отдельного шаблона

##### Отдельный стандартный шаблон [GET]

Запрос на получение информации об отдельном стандартном шаблоне печатной формы для указанного типа сущности по его id.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление стандартного шаблона для данного типа сущности.
  + Body
        <!-- include(body/template/embeddedtemplate_id.json) -->

##### Стандартные шаблоны для ценников и этикеток [/entity/assortment/metadata/embeddedtemplate/]
##### Атрибуты сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о стандартном шаблоне
+ **id** - id шаблона
+ **name** - наименование шаблона
+ **type** - тип шаблона (mxtemplate - новый тип шаблона для ценников и этикеток)
+ **content** - ссылка на скачивание

### Список стандартных ценников и этикеток [GET]

Запрос на получение информации о стандартных шаблонах печатных форм для товаров, модификаций, услуг и комплектов.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка стандартных шаблонов для товаров, модификаций, услуг и комплектов .
  + Body
        <!-- include(body/assortment/metadata/embeddedtemplate.json) -->

##### Отдельный стандартный шаблон для ценников и этикеток [/entity/assortment/metadata/embeddedtemplate/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id отдельного шаблона

### Отдельный стандартный ценник или этикетка [GET]

Запрос на получение информации об отдельном стандартном шаблоне печатной формы для товаров, модификаций, услуг и комплектов по его id.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление стандартного шаблона для товаров, модификаций, услуг и комплектов.
  + Body
        <!-- include(body/assortment/metadata/embeddedtemplate_id.json) -->

##### Пользовательские шаблоны [/entity/{type}/metadata/customtemplate/]
##### Атрибуты сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о пользовательском шаблоне
+ **id** - id шаблона
+ **name** - наименование шаблона
+ **type** - тип шаблона (entity - документ)
+ **content** - ссылка на скачивание

+ Parameters
  + type: `customerorder` (required, string) - тип сущности, для которой запрашиваются пользовательские шаблоны

### Список пользовательских шаблонов [GET]

Запрос на получение информации о пользовательских шаблонах печатных форм для указанного типа сущности.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка стандартных шаблонов для данного типа сущности.
  + Body
        <!-- include(body/template/customtemplate.json) -->

### Отдельный пользовательский шаблон [/entity/{type}/metadata/customtemplate/{id}]

+ Parameters
  + type: `customerorder` (required, string) - тип сущности, для которой запрашивается стандартный шаблон
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id отдельного шаблона

##### Отдельный пользовательский шаблон [GET]

Запрос на получение информации об отдельном пользовательском шаблоне печатной формы для указанного типа сущности по его id.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление пользовательского шаблона для данного типа сущности.
  + Body
        <!-- include(body/template/customtemplate_id.json) -->

##### Пользовательские шаблоны для ценников и этикеток [/entity/assortment/metadata/customtemplate/]
##### Атрибуты сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о пользовательском шаблоне
+ **id** - id шаблона
+ **name** - наименование шаблона
+ **type** - тип шаблона (mxtemplate - тип шаблона для ценников и этикеток)
+ **content** - ссылка на скачивание

### Список пользовательских ценников и этикеток[GET]

Запрос на получение информации о пользовательских шаблонах печатных форм для товаров, модификаций, услуг и комплектов.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка пользовательских шаблонов для товаров, модификаций, услуг и комплектов.
  + Body
        <!-- include(body/assortment/metadata/embeddedtemplate.json) -->

##### Отдельный пользовательский шаблон для ценников и этикеток [/entity/assortment/metadata/customtemplate/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id отдельного шаблона

### Отдельный пользовательский ценник или этикетка [GET]

Запрос на получение информации об отдельном пользовательском шаблоне печатной формы для товаров, модификаций, услуг и комплектов по его id.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление пользовательского шаблона для товаров, модификаций, услуг и комплектов.
  + Body
        <!-- include(body/assortment/metadata/customtemplate_id.json) -->

<!-- include(metadata.apib) -->

## Печать документов

Средствами JSON API можно запрашивать печать документов с помощью шаблонов печатных форм.
При запросе на формирование печатной формы сервер при готовности документа, корректной
печатной форме и правильном формате запроса отвечает пустым ответом с кодом 303.
В заголовке Location ответа содержится адрес временного расположения готовой к загрузке печатной формы.
Файл во временном расположении доступен для загрузки в течение 5 минут.

Сервер может вернуть ответ 202 и заголовок Location с адресом для опроса готовности печатной формы к загрузке.
Данный вариант будет реализован позже.

##### Печать документа [/entity/{type}/{id}/export/]

+ Parameters
  + type: `demand` (required, string) - тип сущности, для которой запрашивается печать
  + id: `a86708d2-f8d3-4e67-8f04-6101158da808` (required, string) - id сущности, для которой запрашивается печать

### Запрос на печать [POST]

Запрос на печать отдельного документа по шаблону печатной формы.

##### Атрибуты запроса

+ **template** - Ссылка на шаблон для печати в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **extension** - расширение, в котором нужно напечатать форму. Можно указать `xls, pdf, html, ods`

Также можно напечатать комплект документов. Для этого вместо поля **template** нужно указать поле **templates**, которое является массивом объектов со следующими полями:
+ **template** - Ссылка на шаблон для печати в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **count** - Количество копий печатной формы. От 1 до 10.

Если в запросе будет как поле **templates** так и поле **template** (вне элемента массива **templates**), произойдёт ошибка. В запросе допустимо только 1 из этих полей.
При печати комплектов <u>не нужно</u> указывать поле **extension** - все комплекты печатаются в *pdf*.

При печати комплекта, для определённых сущностей можно использовать шаблоны для печати связанных документов.
Так, например, для отгрузки (demand) можно использовать шаблоны:
+ Счёт покупателю
+ Счёт покупателю с печатью и подписью
+ Заказ покупателя
+ Счёт-фактура выданный
+ Любой пользовательский шаблон для вышеперечисленных сущностей.

для заказа покупателя:
+ Любой стандартный (embeddedtemplate) шаблон для отгрузки.
+ Счёт покупателю
+ Счёт покупателю с печатью и подписью
+ Счёт-фактура выданный
+ Любой пользовательский шаблон для вышеперечисленных сущностей.

для счёта покупателю:
+ Любой стандартный (embeddedtemplate) шаблон для отгрузки.
+ Заказ покупателя
+ Счёт-фактура выданный
+ Любой пользовательский шаблон для вышеперечисленных сущностей.


+ Request Пример (application/json)
Пример запроса на печать отдельного документа по шаблону печатной формы.
  + Body
        <!-- include(requests/print_post.json) -->

+ Response 202
  + Headers
    Location: ссылка на статус печати
    Content-Type: application/json
  + Body
        <!-- include(responses/print_post.json) -->

+ Response 303
  + Headers
    Location: ссылка на файл
    Content-Type: application/json
  + Body
        <!-- include(responses/print_post.json) -->

+ Request Комплект (application/json)
Пример запроса на печать комплекта документов. В результате запроса будет напечатан комплект в сумме из 6 печатных форм.
  + Body
        <!-- include(requests/print_bundle_post.json) -->

+ Response 202
  + Headers
    Location: ссылка на статус печати
    Content-Type: application/json
  + Body
        <!-- include(responses/print_post.json) -->

+ Response 303
  + Headers
    Location: ссылка на файл
    Content-Type: application/json
  + Body
        <!-- include(responses/print_post.json) -->

<!-- include(metadata.apib) -->

## Печать этикеток и ценников

Средствами JSON API можно запрашивать печать этикеток и ценников с помощью шаблонов печатных форм.
При запросе на формирование печатной формы сервер при готовности этикеток и ценников, корректной
печатной форме и правильном формате запроса отвечает пустым ответом с кодом 303.
В заголовке Location ответа содержится адрес временного расположения готовой к загрузке печатной формы.
Файл во временном расположении доступен для загрузки в течение 5 минут.

Сервер может вернуть ответ 202 и заголовок Location с адресом для опроса готовности печатной формы к загрузке.
Данный вариант будет реализован позже.

Печать этикеток и ценников доступна для товаров, услуг, комплектов и модификаций.

##### Печать этикеток и ценников [/entity/{type}/{id}/export/]

+ Parameters
  + type: `product` (required, string) - тип сущности, для которой запрашивается печать
  + id: `a86708d2-f8d3-4e67-8f04-6101158da808` (required, string) - id сущности, для которой запрашивается печать

### Запрос на печать этикеток и ценников [POST]

Запрос на печать этикеток и ценников по шаблону печатной формы.

##### Атрибуты запроса

+ **organization** - Ссылка на ваше юрлицо в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **count** - Количество ценников/термоэтикеток. Максимальное количество - `1000`
+ **salePrice** - Цена продажи
  + **priceType** - Ссылка на тип цены в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **template** - Ссылка на шаблон для печати в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)


+ Request Пример (application/json)
Пример запроса на печать этикеток и ценников по шаблону печатной формы для товаров.
  + Body
        <!-- include(requests/print_product.json) -->

+ Response 202
  + Headers
    Location: ссылка на статус печати
    Content-Type: application/json
  + Body
        <!-- include(responses/print_post.json) -->

+ Response 303
  + Headers
    Location: ссылка на файл
    Content-Type: application/json
  + Body
        <!-- include(responses/print_post.json) -->

<!-- include(metadata.apib) -->

## Публикация документов

JSON API позволяет опубликовать для общего пользования печатную форму документа, созданную на основе шаблона печатной формы.
Кодом сущности для публикации в составе JSON API является ключевое слово **publication**.

Работа пользователя с публикациями документов возможна, если есть право на чтение и право печати сущности данного типа.

Публикации доступны только для следующих типов: Заказ покупателя, Счет покупателю, Отгрузка, Заказ поставщику, Счет поставщика, Приемка, Входящий платеж, Приходный ордер, Исходящий платеж, Расходный ордер, Внутренний заказ, Перемещение, Оприходование, Списание, Счет-фактура выданный, Счет-фактура полученный, Возврат поставщику, Возврат покупателя, Выплата денег, Внесение денег, Розничный возврат, Розничная продажа, Договор, Розничная смена, Заказ на производство, Полученный отчёт комиссионера, Выданный отчёт комиссионера, Инвентаризация, Тех. Операция.


### Публикации [/entity/{type}/{id}/publication]
##### Атрибуты сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) Публикации
+ **template** - Ссылка на шаблон для печати в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **href** - Ссылка на страницу Публикации

+ Parameters
  + type: `demand` (required, string) - тип сущности, по которой получить Публикации
  + id: `a86708d2-f8d3-4e67-8f04-6101158da808` (required, string) - id сущности, по которой получить Публикации

#### Получить публикации [GET]

Запрос на получение списка Публикаций по указанному документу.

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Публикаций.
  + Body
        <!-- include(body/publication/get_list.json) -->

#### Создать публикацию [POST]

Запрос на публикацию документа.
Публикация документа происходит на основании переданного объекта JSON, который должен содержать ссылку на шаблона для печати документа **template** в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные). Если публикация была ранее создана, то ответ будет со статусом `200`.

+ Request Пример (application/json)
  + Body
        <!-- include(body/publication/post_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление ранее созданной Публикации.
  + Body
        <!-- include(body/publication/post_response.json) -->

+ Response 201 (application/json)
Успешный запрос. Результат - JSON представление созданной Публикации.
  + Body
        <!-- include(body/publication/post_response.json) -->

### Публикация [/entity/{type}/{id}/publication/{publicationId}]

+ Parameters
  + type: `demand` (required, string) - тип сущности
  + id: `a86708d2-f8d3-4e67-8f04-6101158da808` (required, string) - id сущности
  + publicationId: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Публикации

#### Удалить публикацию [DELETE]

Запрос на удаление Публикации с указанным id.

+ Response 204 (application/json)
Успешное удаление Публикации.
+ Body
      <!-- include(body/publication/post_response.json) -->

#### Получить публикацию [GET]

+ Parameters
  + publicationId: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Публикации

Запрос на получение Публикации с указанным id.

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление Публикации.
  + Body
        <!-- include(body/publication/post_response.json) -->

<!-- include(metadata.apib) -->

## Задача

Средствами JSON API можно создавать и обновлять сведения о задачах, запрашивать списки задач и сведения по отдельным задачам. Кодом сущности для задачи в составе JSON API является ключевое слово **task**. Больше о задачах и работе с ними в основном интерфейсе вы можете прочитать в нашей службе поддержки по  [этой ссылке](https://support.moysklad.ru/hc/ru/articles/203392263-%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%B8).

### Задачи [/entity/task]
##### Атрибуты сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) задачи
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **author** - Сотрудник создавший задачу. В формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Только для чтения`
+ **created** - Момент создания задачи `Только для чтения`
+ **updated** - Момент последнего обновления сущности `Только для чтения`
+ **description** - Текст задачи `Необходимое`
+ **dueToDate** - Срок задачи
+ **assignee** - Сотрудник, ответственный за выполнение задачи. В формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Необходимое`
+ **done** - Отметка о выполнении задачи.
+ **completed** - Время выполнения задачи. `Только для чтения`
+ **implementer** - Сотрудник выполнивший задачу. В формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Только для чтения`
+ **agent** - Контрагент или юрлицо, связанное с задачей. Задача может быть привязана либо к конрагенту, либо к юрлицу, либо к документу. В формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **operation** - Документ, связанный с задачей. Задача может быть привязана либо к конрагенту, либо к юрлицу, либо к документу. В формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **notes** - Ссылка на комментарии к задаче в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)

##### Комментарии задачи

Объект комментария к задаче содержит следующие поля:
+ **author** - Сотрудник создавший комментарий. В формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Только для чтения`
+ **moment** - Момент создания комментария `Только для чтения`
+ **description** - Текст комментария `Необходимое`

##### Отображение списка по умолчанию
###### Для администратора

Если текущий сотрудник обладает правами администратора, то при запросе списка задач ему будут выведены все активные  (**done** = false) задачи, как те,
 что относятся к нему (сотрудник является создателем или исполнителем задачи), так и те, что относятся к другим сотрудникам.
 
###### Для сотрудника

Для сотрудника, не являющегося администратором, но имеющего право на просмотр всех задач, список задач по умолчанию будет аналогичен списку задач, выводимому для администратора. В противном случае, при запросе списка задач без каких-либо фильтров, будут выведены активные (**done** = false) задачи, которые создал текущий сотрудник и задачи, за которые ответственен текущий сотрудник.

##### Фильтры из web-интерфейса

В основном интерфейсе МоегоСклада для отображения списка задач существует 2 группы фильтров:
+ Фильтр по связанности с текущим сотрудником: `Поручено мне`, `Я поручил`, `Все задачи` (отображается только у администраторов)
+ Фильтр по готовности задачи: `Активные`, `Выполненные`.

Чтобы реализовать подобную фильтрацию списка для JSON API, нужно использовать следующие фильтры для списка задач:
+ **Поручено мне**: фильтр по полю **assignee** в значении которого указана ссылка на текущего сотрудника<br>
`https://online.moysklad.ru/api/remap/1.2/entity/task?filter=assignee=http://online.moysklad.ru/api/remap/1.2/entity/employee/<id текущего сотрудника>`
+ **Я поручил**: фильтр по полю **author** в значении которого указана ссылка на текущего сотрудника<br>
`https://online.moysklad.ru/api/remap/1.2/entity/task?filter=author=http://online.moysklad.ru/api/remap/1.2/entity/employee/<id текущего сотрудника>`
+ **Все задачи**: не требует фильтрации. Обратите внимание на пункт [Отображение списка по умолчанию](#header-отображение-списка-по-умолчанию)
+ **Активные**: фильтр по полю **done** со значением false<br>
`https://online.moysklad.ru/api/remap/1.2/entity/task?filter=done=false`
+ **Выполненные**: фильтр по полю **done** со значением true<br>
`https://online.moysklad.ru/api/remap/1.2/entity/task?filter=done=true`

##### Права доступа

| Операция                                                                         | Доступ                    |
| :------------------------------------------------------------------------------: |:--------------------------|
| Просмотр задач в которых текущий пользователь является ответственным или автором |	Все                      |
| Просмотр любых задач                                                             |	пользователь с правом на просмотр всех задач или администратор |
| Создание задачи	                                                                 |  необходима тарифная опция CRM, все
| Редактирование задачи                                                            |	необходима тарифная опция CRM, администратор, создатель задачи |
| Выполнение задачи	                                                               |  необходима тарифная опция CRM, администратор, создатель задачи, ответственный |
| Отмена выполнения задачи                                                         |	необходима тарифная опция CRM, администратор, создатель задачи, ответственный |
| Удаление задачи	                                                                 |  Администратор, создатель задачи                                                |

#### Получить задачи [GET]

Получить список задач.
Результат: Объект JSON, включающий в себя поля:
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой [Задачи](#задача).
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

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка задач.
  + Body
        <!-- include(body/task/get_list.json) -->

#### Создать Задачу [POST]

Создать новую задачу. Для создания новых задач необходима активная тарифная опция [CRM](https://support.moysklad.ru/hc/ru/articles/216649748-CRM-%D0%A0%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%81-%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%BE%D0%B9-%D0%B1%D0%B0%D0%B7%D0%BE%D0%B9).

+ Request Пример (application/json)
Пример запроса на создание новой задачи.
  + Body
        <!-- include(body/task/post_request.json) -->
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной задачи.
  + Body
        <!-- include(body/task/post_response.json) -->

#### Массовое создание и обновление Задач [POST]

[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) Задач.
В теле запроса нужно передать массив, содержащий JSON представления Задач, которые вы хотите создать или обновить.
Обновляемые Задачи должны содержать идентификатор в виде метаданных.

+ Request Пример (application/json)
Пример создания и обновления нескольких Задач
  + Body
        <!-- include(body/task/post_massive_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Задач.
  + Body
        <!-- include(body/task/post_massive_response.json) -->

#### Удалить задачу [DELETE /entity/task/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id задачи

Запрос на удаление задачи с указанным id. Для удаления задач необходима активная тарифная опция [CRM](https://support.moysklad.ru/hc/ru/articles/216649748-CRM-%D0%A0%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%81-%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%BE%D0%B9-%D0%B1%D0%B0%D0%B7%D0%BE%D0%B9).
Также нельзя удалить задачи, созданные другими сотрудниками, без прав администратора.

+ Response 200 (application/json)
Успешное удаление задачи.

### Задача [/entity/task/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id задачи.
  
#### Получить задачу [GET]

Запрос на получение отдельной задачи с указанным id.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление задачи с указанным id.
  + Body
        <!-- include(body/task/get_by_id.json) -->

#### Изменить задачу [PUT]
##### Описание

Изменить задачу с указанным id. Для изменения задач необходима активная тарифная опция [CRM](https://support.moysklad.ru/hc/ru/articles/216649748-CRM-%D0%A0%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%81-%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%BE%D0%B9-%D0%B1%D0%B0%D0%B7%D0%BE%D0%B9).
Также нельзя изменять задачи, созданные другими сотрудниками, без прав администратора.

+ Request Пример (application/json)
Пример запроса на обновление существующей задачи.
  + Body
        <!-- include(body/task/put_request.json) -->
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённой задачи.
  + Body
        <!-- include(body/task/put_response.json) -->

### Комментарии Задачи [/entity/task/{id}/notes]

Отдельный ресурс для управления комментариями Задачи. С его помощью вы можете управлять комментариями задачи, в которой количество комментариев превышает лимит на количество комментариев, сохраняемых вместе с задачей. Этот лимит равен 100.
+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Задачи

#### Получить комментарии Задачи [GET]

Запрос на получение списка всех комментариев данной Задачи.
- **meta** [Метаданные](#header-метаданные) о выдаче,
- **context** - [Метаданные](#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой комментарии Задачи.

+ Parameters
  + limit: 100 (optional, enum[number])
  Максимальное количество сущностей для извлечения.
  <p>
    <code>Допустимые значения 1 - 100</code>
  </p>
      + Default: `25`
  + offset: 40 (optional, number)
    Отступ в выдаваемом списке сущностей
      + Default: `0`

  + updatedFrom: `2016-04-15 15:48:46` (optional, string)
    Один из [параметров фильтрации выборки](#header-параметры-фильтрации-выборки).
    Формат строки : `ГГГГ-ММ-ДД ЧЧ:ММ:СС[.ммм]`, Часовой пояс: `MSK` (Московское время)

  + updatedTo: `2016-04-15 15:48:46` (optional, string)
    Один из [параметров фильтрации выборки](#header-параметры-фильтрации-выборки).
    Формат строки : `ГГГГ-ММ-ДД ЧЧ:ММ:СС[.ммм]`, Часовой пояс: `MSK` (Московское время)

  + updatedBy: `admin@admin` (optional, string)
    Один из [параметров фильтрации выборки](#header-параметры-фильтрации-выборки).
    Формат строки : `uid`

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка комментариев отдельной Задачи.
  + Body
        <!-- include(body/task/tasknotes_get_list.json) -->

#### Создать комментарий Задачи [POST]

Запрос на создание нового комментария к Задаче.
Для успешного создания необходимо в теле запроса указать следующие поля:
+ **text** - Текст комментария. `Необходимое`

+ Request Пример с одним комментарием (application/json)
Пример создания одного комментария к Задаче.
  + Body
        <!-- include(body/task/tasknotes_post_one_request.json) -->
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного комментария отдельной Задачи.
  + Body
        <!-- include(body/task/tasknotes_post_one_response.json) -->

+ Request Пример с несколькими комментариями (application/json)
Пример создания сразу нескольких комментариев к Задаче.
  + Body
        <!-- include(body/task/tasknotes_post_some_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка созданных комментариев отдельной Задачи.
  + Body
        <!-- include(body/task/tasknotes_post_some_response.json) -->

### Комментарий к задаче [/entity/task/{id}/notes/{tasknoteID}]

Отдельный комментарий к Задаче с указанным id комментария.
+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Задачи
  + tasknoteID: `34f6344f-015e-11e6-9464-e4de0000006c` (required, string) - id комментария к Задаче

#### Получить комментарий к Задаче [GET]

Запрос на получение отдельного комментарии к Задаче с указанным id.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление отдельного комментария к Задаче.
  + Body
        <!-- include(body/task/tasknote_get_by_id.json) -->

#### Изменить комментарий к Задаче [PUT]

Запрос на обновление отдельной комментарии к Задаче.
Для успешного создания необходимо в теле запроса указать следующие поля:
+ **text** - Текст комментария. `Необходимое`

+ Request Пример (application/json)
Пример запроса на обновление отдельного комментария к Задаче.
  + Body
        <!-- include(body/task/tasknote_put_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённого комментария к Задаче.
  + Body
        <!-- include(body/task/tasknote_put_response.json) -->

#### Удалить комментарий [DELETE]

Запрос на удаление отдельного комментария к Задаче с указанным id.

+ Response 200 (application/json)
Успешное удаление комментария к Задаче.

<!-- include(metadata.apib) -->

## Бонусная операция
### Бонусные операции [/entity/bonustransaction]

Средствами JSON API можно создавать и обновлять сведения о Бонусных операциях, запрашивать списки Бонусных операций и сведения по отдельным Бонусым операциям. Кодом сущности для Бонусной операции в составе JSON API является ключевое слово **bonustransaction**.

##### Атрибуты сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) бонусной операции
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **owner** - Ссылка на Владельца (Сотрудника) в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **shared** - Общий доступ
+ **updated** - Момент последнего обновления Бонусной операции
+ **created** - Момент создания Бонусной операции
+ **group** - Отдел сотрудника в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **externalCode** - Внешний код Бонусной операции
+ **name** - Наименование бонусной операции
+ **applicable** - Отметка о проведении
+ **moment** - Время проведения бонусной операции
+ **agent** - Контрагент, связанный с бонусной операцией в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Необходимое`
+ **parentDocument** - Связанный документ бонусной операции в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **bonusProgram** - Бонусная программа в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные) `Необходимое`
+ **bonusValue** - Количество бонусных баллов
+ **organization** - ссылка на ваше юрлицо в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **transactionType** - Тип бонусной операции. Возможные значения: `EARNING`, `SPENDING`. `Необходимое`

##### Атрибуты доступные для фильтрации

+ **id** - ID в формате UUID
+ **moment** - Момент создания бонусной операции
+ **updated** - Момент последнего обновления бонусной операции
+ **updatedBy** - Автор последнего обновления бонусной операции в формате `uid` (`admin@admin`)
+ **agent** - Ссылка на контрагента в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **bonusProgram** - Ссылка на бонусную программу в формате [Метаданных](/api/remap/1.2/doc/index.html#header-метаданные)
+ **bonusValue** - Бонусные баллы

#### Получить Бонусные операции [GET]

Запрос на получения списка всех Бонусных операций для данной учётной записи.
Результат: Объект JSON, включающий в себя поля:
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой Бонусные операции.

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

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление списка Бонусных операций.
  + Body
        <!-- include(body/bonustransaction/get_list.json) -->

#### Создать Бонусную операцию [POST]

Запрос на создание новой бонусной операции на данной учётной записи.
+ Request Пример (application/json)
Пример запроса на создание новой бонусной операции.
  + Body
        <!-- include(body/bonustransaction/post_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданной бонусной операции.
  + Body
        <!-- include(body/bonustransaction/post_response.json) -->

#### Массовое создание и обновление Бонусных операций [POST]

[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) Бонусных операций.
В теле запроса нужно передать массив, содержащий JSON представления Бонусных операций, которые вы хотите создать или обновить.
Обновляемые Бонусные операции должны содержать идентификатор в виде метаданных.

+ Request Пример (application/json)
Пример создания и обновления нескольких Бонусных операций
  + Body
        <!-- include(body/bonustransaction/post_massive_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Бонусных операций.
  + Body
        <!-- include(body/bonustransaction/post_massive_response.json) -->

#### Удалить Бонусную операцию [DELETE /entity/bonustransaction/{id}]

Запрос на удаление бонусной операции.
+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Бонусной операции

+ Response 200 (application/json)
Успешное удаление Бонусной операции.
+ Body

### Бонусная операция [/entity/bonustransaction/{id}]

+ Parameters
  + id: `7944ef04-f831-11e5-7a69-971500188b19` (required, string) - id Бонусной операции

#### Получить Бонусную операцию [GET]

Запрос на получение бонусной операции с указанным id.
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление Бонусной операции с указанным id.
  + Body
        <!-- include(body/bonustransaction/get_by_id.json) -->

#### Изменить Бонусную операцию [PUT]

Запрос на изменение объекта, представляющего собой бонусную операцию. Невозможно изменение типа бонусной операции.

+ Request Пример (application/json)
Пример запроса на обновление Бонусной операции.
  + Body
        <!-- include(body/bonustransaction/put_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновлённой Бонусной операции.
  + Body
        <!-- include(body/bonustransaction/put_response.json) -->

<!-- include(metadata.apib) -->

<!-- include(metadata.apib) -->

## Бонусная программа
##### Бонусные программы [/entity/bonusprogram]

Кодом сущности для Бонусных программ в составе JSON API является ключевое слово **bonusprogram**. Операции создания и изменения не поддерживаются. Перед работой со скидками настоятельно рекомендуем вам прочитать [вот эту статью](https://support.moysklad.ru/hc/ru/articles/203392253-%D0%A1%D0%BA%D0%B8%D0%B4%D0%BA%D0%B8) на портале поддержки МоегоСклада.

##### Атрибуты сущности

+ **meta** - Метаданные
+ **id** - ID скидки в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **name** - Наименование бонусной программы.
+ **active** - Индикатор, является ли бонусная программа активной на данный момент
+ **allProducts** - Индикатор, действует ли бонусная программа на все товары (всегда `true`, см. [Скидки](/api/remap/1.2/doc/discount.html))
+ **agentTags** - Тэги контрагентов, к которым применяется бонусная программа, если применяется не ко всем контрагентам
+ **earnRateRoublesToPoint** - Курс начисления
+ **spendRatePointsToRouble** - Курс списания
+ **maxPaidRatePercents** - Максимальный процент оплаты баллами

### Получить все Бонусные программы [GET]

Запрос на получение всех бонусных программ учётной записи.
Результат: Объект JSON, включающий в себя поля:
- **meta** [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о выдаче,
- **context** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о сотруднике, выполнившем запрос.
- **rows** - Массив JSON объектов, представляющих собой бонусные программы.

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

+ Response 200 (application/json)
Успешный запрос. Результат - список всех бонусных программ для учетной записи.
  + Body
        <!-- include(body/bonusprogram/get.json) -->

### Бонусная программа [/entity/bonusprogram/{id}]

+ Parameters
  + id: `87c69fae-c1ad-4700-a852-f21939470760` (required, string) - id Бонусной программы
  
#### Получить Бонусную программу [GET]

Запрос на получение отдельной бонусной программы с указанным id
  
+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление Бонусной программы с указанным id.
  + Body
        <!-- include(body/bonusprogram/get_by_id.json) -->

#### Удалить Бонусную программу [DELETE]

Запрос на удаление бонусной программы

+ Response 200 (application/json)
Успешное удаление Бонусной программы
+ Body

## Статусы документов

Статусы можно добавлять, изменять и удалять через api

### Статусы [/entity/{entityType}/metadata/states]
##### Атрибуты сущности

+ **meta** - [Метаданные](/api/remap/1.2/doc/index.html#header-метаданные) о Статусе `Только для чтения`
+ **id** - ID в формате UUID `Только для чтения`
+ **accountId** - ID учетной записи `Только для чтения`
+ **name** - Наименование Статуса `Необходимое`
+ **color** - Цвет Статуса `Необходимое`
+ **stateType** - Тип Статуса `Необходимое`

Возможные значения: [`Regular`(обычный), `Successful`(Финальный положительный), `Unsuccessful`(Финальный отрицательный)].
Значение по умолчанию - `Regular`

+ **entityType** - Тип сущности, к которой относится Статус (ключевое слово в рамках JSON API) `Только для чтения`

Поле **color** передаётся в АПИ как целое число состоящее из 4х байт.
Т.к. цвет передаётся в цветовом пространстве ARGB, каждый байт отвечает за свой
цвет соответственно: 1 - за прозрачность, 2 - за красный цвет, 3 - за зелёный,
4 - за синий. Каждый байт принимает значения от 0 до 255 как и цвет в каждом из
каналов цветового пространства. Получившееся в итоге из 4 записанных последовательно байт
число, переведённое в 10-чную систему счисления и является представлением цвета статуса в JSON API.

Пример: цвету `rgb(162, 198, 23)` будет соответствовать следующее значение поля `"color": 10667543`.

Посмотреть списки существующих статусов можно в контексте метаданных
документа, например сделав GET запрос по URL http://online.moysklad.ru/api/remap/1.2/entity/demand/metadata
Список статусов для документа `demand`(Отгрузка) будет выведен в коллекции states.

#### Получить метаданные [GET /entity/{entityType}/metadata]

Получить метаданные и в том числе статусы
+ Parameters
  + entityType: `counterparty` (required, string) - тип сущности
+ Response 200 (application/json)
  + Body
        <!-- include(body/states/get.json) -->

#### Создать статус [POST /entity/{entityType}/metadata/states]

Создать новый статус.

##### Описание

Статус создаётся на основе переданного объекта JSON,
который содержит представление нового Статуса.
Результат - JSON представление созданного Статуса. Для создания нового Статуса,
необходимо и достаточно указать в переданном объекте не пустые поля `name`, `color`, `stateType`.

+ Parameters
  + entityType: `counterparty` (required, string) - тип сущности

+ Request Пример (application/json)
Создание одного статуса.
  + Body
        <!-- include(body/states/post_one_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление созданного Статуса.
  + Body
        <!-- include(body/states/post_one_response.json) -->


#### Обновить статус [PUT /entity/{entityType}/metadata/states/{id}]

Обновить существующий статус.

##### Описание

Статус обновляется на основе переданного объекта JSON.
Результат - JSON представление обновленного или созданного Статуса.
Для обновления Статуса, необходимо  указать в переданном объекте
одно или несколько полей с новыми значениями: `name`, `color`, `stateType`.

+ Parameters
  + entityType: `counterparty` (required, string) - тип сущности
  + id: `4dcb3f23-60c4-11e7-6adb-ede500000019` (required, string) - id Статуса

+ Request Пример (application/json)
Обновление статуса.
  + Body
        <!-- include(body/states/put_update_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - JSON представление обновленного Статуса.
  + Body
        <!-- include(body/states/put_update_response.json) -->

#### Массовое создание и обновление Статусов [POST]

[Массовое создание и обновление](/api/remap/1.2/doc/index.html#header-создание-и-обновление-нескольких-объектов) Статусов.
В теле запроса нужно передать массив, содержащий JSON представления Статусов, которые вы хотите создать или обновить.
Обновляемые Статусы должны содержать идентификатор в виде метаданных.

+ Request Пример (application/json)
Пример создания и обновления нескольких Статусов
  + Body
        <!-- include(body/states/post_some_request.json) -->

+ Response 200 (application/json)
Успешный запрос. Результат - массив JSON представлений созданных и обновленных Статусов.
  + Body
        <!-- include(body/states/post_some_response.json) -->

#### Удалить Статус [DELETE /entity/{entityType}/metadata/states/{id}]

Запрос на удаление Статуса с указанным id.
+ Parameters
  + entityType: `counterparty` (required, string) - тип сущности
  + id: `4dcb3f23-60c4-11e7-6adb-ede500000019` (required, string) - id Статуса

+ Response 200 (application/json)
Успешное удаление Статуса.
