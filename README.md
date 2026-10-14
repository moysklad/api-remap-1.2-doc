# Документация JSON API 1.2

Нотификация в изменениях API
------------

Чтобы узнавать об изменениях в документации и api, вы можете подписаться на нотификации об изменении документации в github.
Для этого
- установите любой RSS reader (например, [RSS Feed Reader](https://chrome.google.com/webstore/detail/rss-feed-reader/pnjaodmkngahhkoihejjehlcdlnohgmp) для chromium или [FeedBro](https://addons.mozilla.org/en-US/firefox/addon/feedbroreader) для Firefox)
- добавьте https://github.com/moysklad/api-remap-1.2-doc/commits/master.atom
- при любом изменении документации придёт нотификация и можно посмотреть, что именно изменилось.

## Структура документации

- `md/` — тексты документации 
- `images/` — изображения, используемые в тексте
- `config.json` — оглавление
- `site.json` — конфигурация
- `hash-redirect-map.json` — соответствие старых адресов новым маршрутам

## Локальный запуск и проверки

```bash
docker compose up
```

Документация после запуска контейнера доступна по адресу [http://localhost:4568](http://localhost:4568).
Изменения текстов подхватываются автоматически. 
После изменения оглавления, настроек сайта, заголовков для поиска или уведомлений выполните `docker compose restart docs`.

```bash
docker compose run --rm docs npm run test:links
docker compose run --rm docs npm run test:md
docker compose run --rm docs npm run build-full
```

Команды проверяют внутренние ссылки, Markdown и сборку. Результат сборки остаётся в одноразовом контейнере.

## Preview и публикация

Сборка и публикация выполняются через [remap-deployer](https://git.company.lognex/moysklad/remap-deployer).

В remap-deployer используются параметры:

- Preview: `api=remap_12`, `branch=<ветка документации>`
- Production: `release=yes`, `api=remap_12`, `branch=<ветка документации>`
- `ENGINE_VERSION` — тег движка для сборки.

Preview публикуется по адресу `https://moysklad.pages.lognex/remap-deployer/remap_12/<ветка>/`.

Подробности запуска и релиза — в [README remap-deployer](https://git.company.lognex/moysklad/remap-deployer/-/blob/master/README.md).

## Оформление нового раздела

Для добавления нового раздела необходимо создать .md-файл в папке `md`. Имя файла должно начинаться с `_`. Для отображения нового раздела в боковом меню в `config.json` нужно прописать название нового раздела и путь до md файла.

### Цитаты и примеры

Поддерживаемые языки аккордеонов: `shell`, `json`, `html`, `xml`, `text`, `js`. Цитата непосредственно перед таким блоком становится его заголовком. Остальные цитаты отображаются в тексте. Блок без языка остается обычным блоком кода.

HTTP-заголовки оформляйте как `text`; ответ без тела, например `Response 204`, можно оставить обычной цитатой.

Пример разметки:

````markdown
### Получить сущность

> Пример запроса

```shell
curl --compressed -X GET \
  "https://api.moysklad.ru/api/remap/1.2/entity/product" \
  -H "Authorization: Bearer <Access-Token>"
```

> Response 200 (application/json)

```json
{"rows": []}
```
````

# Система уведомлений документации

Папка md/notifications содержит файлы уведомлений, которые отображаются в движке документации через кнопку уведомлений в хедере.

## Формат файла уведомления

Каждое уведомление должно быть оформлено как markdown файл с front matter:

```markdown
---
id: unique-notification-id
type: info|warning|success|error
title: Заголовок уведомления
startDate: 2024-01-15 (опционально)
endDate: 2024-02-15 (опционально)
priority: low|medium|high
tags: ["tag1", "tag2"] (опционально)
---

Текст уведомления в формате markdown.
```

## Параметры

- **id** (обязательно) - уникальный идентификатор уведомления
- **type** (обязательно) - тип уведомления:
    - `info` - информационное (синий цвет)
    - `warning` - предупреждение (желтый цвет)
    - `success` - успех (зеленый цвет)
    - `error` - ошибка (красный цвет)
- **title** (обязательно) - заголовок уведомления
- **startDate** (опционально) - дата начала показа в формате YYYY-MM-DD
- **endDate** (опционально) - дата окончания показа в формате YYYY-MM-DD
- **priority** (опционально) - приоритет отображения:
    - `low` - низкий приоритет
    - `medium` - средний приоритет (по умолчанию)
    - `high` - высокий приоритет (отображается первым)
- **tags** (опционально) - теги для категоризации


## Примеры

### Информационное уведомление
```markdown
---
id: new-feature-2024
type: info
title: Новая функция API
priority: medium
tags: ["api", "features"]
---

Добавлена новая функция для работы с документами.
```

### Временное уведомление
```markdown
---
id: maintenance-weekend
type: warning
title: Технические работы
startDate: 2024-01-20
endDate: 2024-01-21
priority: high
tags: ["maintenance"]
---

В выходные будут проводиться технические работы.
```