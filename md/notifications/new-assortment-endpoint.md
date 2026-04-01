---
id: new-assortment-endpoint
type: warning
title: Новый эндпоинт ассортимента и планируемое удаление старого
startDate: 2026-03-31
---

**Доступен новый эндпоинт ассортимента.**  
Тот же путь `GET /entity/assortment`, но с заголовком `X-Lognex-Remap-Beta-Feature: assortmentWithoutStock` — работает быстрее за счёт того, что не рассчитывает остатки в рамках одного запроса.

**Что изменилось в новом эндпоинте:**

- Поля `stock`, `reserve`, `inTransit`, `quantity` не возвращаются. Для получения остатков используйте [Краткий отчет об остатках](#/reports/report-stock#3-kratkij-otchet-ob-ostatkah)
- Фильтры `stockMode`, `quantityMode`, `stockMoment`, `stockStore`, `article`, `minimumBalance`, `salePrice` не поддерживаются
- Поддерживаемые `expand`: только `product`, `images`, `components` первого уровня

**Старый эндпоинт** (`GET /entity/assortment` без заголовка) планируется к удалению в будущих версиях API. Рекомендуем переходить на новый.

[Документация нового ассортимента эндпоинта](#/dictionaries/assortment#2-assortiment)  
[Документация старого ассортимента эндпоинта](#/dictionaries/assortment-legacy#2-assortiment-deprecated)
