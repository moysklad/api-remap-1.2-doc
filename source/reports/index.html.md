---
title: API Reference
layout: "reports"

language_tabs: # must be one of https://git.io/vQNgJ
  - shell: cURL

toc_footers:
  - <a href='https://github.com/moysklad/java-remap-1.2-sdk'>Java SDK</a>
  - <a href='https://github.com/moysklad/java-remap-1.2-doc/issues'>Сообщите об ошибке</a>

includes:
  - reports/report_stock
  - reports/report_stock_by_operation
  - reports/report_pnl
  - reports/report_money
  - reports/report_sales_orders
  - reports/report_counterparty
  - reports/report_turnover  
  - reports/dashboard
  
search: true
---  

[//]: # (TODO: remove in MC-64261)
<div class="banner">
  <h2>Внимание!</h2>
  <ui><b>До 1 декабря 2023 года необходимо:</b>
    <li>Перенастроить интеграции на новый домен api.moysklad.ru (вместо online.moysklad.ru)</li>
    <li>Включить использование <a href='https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-szhatie-soderzhimogo-zaprosow'>сжатия содержимого запросов</a> через передачу заголовка Accept-Encoding</li>
  </ui>
  <p>После 1 декабря 2023 года перестанут работать интеграции, использующие апи remap-12 на домене online.moysklad.ru</p>
</div>
