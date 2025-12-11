<div class="banner-wrapper">
  <style>
    .banner {
      margin-top: 20px;
      margin-bottom: 20px;
      padding: 20px;
      border-radius: 8px;
      background-color: #F8FAFF;
      border: 1px solid #086EFC;
    }
    .banner ul {
      padding: 0;
      line-height: 2;
    }
    .banner ul li {
      margin-left: 32px;
      line-height: 2;
    }
    .banner h4 {
      padding: 10px 0;
      font-size: 24px;
    }
    .banner p {
      margin: 10px 0 0 0;
      padding: 0;
    }
    html.dark .banner,
    body.dark .banner {
        background-color: #0B1F3A;
        border-color: #3B82F6;
        color: #E5E7EB;
    }
  </style>

  <div class="banner">
    <h4>Внимание: Повышается расход лимита API на запросы остатков</h4>
    <p><strong>Какие отчеты затронуты?</strong></p>
    <ul>
      <li>
        <code>GET https://api.moysklad.ru/api/remap/1.2/report/stock/all</code>
      </li>
      <li>
        <code>GET https://api.moysklad.ru/api/remap/1.2/report/stock/bystore</code>
      </li>
    </ul>
    <p><strong>График изменений</strong></p>
    <ul>
      <li>5 единиц лимита за запрос с февраля 2026 года</li>
    </ul>
  </div>
</div>

# Список изменений

В разделе перечислены изменения и расширения возможностей существующих эндпоинтов, а также новые эндпоинты,
 которые позволяют эффективнее работать с API МоегоСклада.

Более подробно с особенностями API МоегоСклада  можно ознакомиться в
 разделе [Workbook](#/workbook/workbook-first-steps#1-workbook), а также по ссылкам на основные разделы данной документации.

Список изменений в версии 1.2 с момента её создания можно найти в [github репозитории](https://github.com/moysklad/api-remap-1.2-doc/blob/master/CHANGELOG.md)

## Нотификация в изменениях API
Чтобы узнавать об изменениях в документации и api, вы можете подписаться на нотификации об изменении документации в github.
Для этого:

- установите любой RSS reader (например, [RSS Feed Reader](https://chrome.google.com/webstore/detail/rss-feed-reader/pnjaodmkngahhkoihejjehlcdlnohgmp) для chromium или [FeedBro](https://addons.mozilla.org/en-US/firefox/addon/feedbroreader) для Firefox)
- добавьте https://github.com/moysklad/api-remap-1.2-doc/commits/master.atom
- при любом изменении документации придёт нотификация и можно посмотреть, что именно изменилось.
