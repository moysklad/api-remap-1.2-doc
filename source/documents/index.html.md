---
title: API Reference
layout: "documents"

language_tabs: # must be one of https://git.io/vQNgJ
  - shell: cURL

toc_footers:
  - <a href='https://github.com/moysklad/java-remap-1.2-sdk'>Java SDK</a>
  - <a href='https://github.com/moysklad/java-remap-1.2-doc/issues'>Сообщите об ошибке</a>

includes:
  - documents/common_info
  - documents/rate
  - documents/recalc_calculated_quantity
  - documents/print
  - documents/publication
  - documents/autofill
  - documents/retaildrawercashin
  - documents/internalOrder  
  - documents/sales_return
  - documents/purchase_return
  - documents/prepayment_return
  - documents/payment_in
  - documents/commissionreportout
  - documents/retaildrawercashout
  - documents/processingorder
  - documents/customerOrder
  - documents/purchaseOrder
  - documents/inventory
  - documents/payment_out
  - documents/counterpartyadjustment
  - documents/enter
  - documents/demand
  - documents/move
  - documents/commissionreportin
  - documents/pricelist
  - documents/prepayment
  - documents/supply
  - documents/cashin
  - documents/cashout
  - documents/retaildemand
  - documents/retailshift
  - documents/retail_sales_return
  - documents/loss
  - documents/invoice_out
  - documents/invoice_in
  - documents/factureout
  - documents/facturein
  - documents/processingplanfolder
  - documents/processing

search: true
---  

[//]: # (TODO: remove in MC-64261)
<div class="banner">
  <h2>Внимание!</h2>
  <ui><b>До 1 декабря 2023 года необходимо:</b>
    <li>Перенастроить интеграции на новый домен api.moysklad.ru (вместо online.moysklad.ru)</li>
    <li>Включить использование <a href='https://dev.moysklad.ru/doc/api/remap/1.2/#mojsklad-json-api-obschie-swedeniq-szhatie-soderzhimogo-otwetow'>сжатия содержимого ответов</a> через передачу заголовка Accept-Encoding</li>
  </ui>
  <p>После 1 декабря 2023 года перестанут работать интеграции, использующие апи remap-12 на домене online.moysklad.ru</p>
</div>
