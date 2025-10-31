## Типы уведомлений
### Форматы полей
#### Формат измененного поля
Формат измененного поля содержит в себе старое и новое значение:

| Название     | Тип         | Описание                                                                              |
| ------------ | :---------- | :------------------------------------------------------------------------------------ |
| **oldValue** | String(255) | Значение атрибута до удаления<br>`+Обязательное при ответе` `+Только для чтения`      |
| **newValue** | String(255) | Значение атрибута после обновления<br>`+Обязательное при ответе` `+Только для чтения` |

Формат oldValue и newValue совпадает с форматом поля, изменение которого отображается. Одно из полей может быть не заполнено.

#### Возможные значения типа экспорта
+ **export_csv_good**
+ **export_csv_agent**
+ **export_ms_xml**
+ **export_1c_v2_xml**
+ **export_unisender**
+ **export_1c_v3_xml**
+ **export_subscribepro**
+ **export_1c_client_bank**
+ **export_alfa_payments**
+ **export_tochka_payments**
+ **export_modulbank_payments**
+ **export_1c_enterprise_data**
+ **export_tinkoff_payments**
+ **export_good**
+ **export_custom_entity**

#### Возможные значения типа импорта
+ **importer_csv**
+ **importer_yml**
+ **importer_csv_agent**
+ **importer_csv_customerorder**
+ **importer_csv_purchaseorder**
+ **importer_csv_pricelist**
+ **importer_ms_xml**
+ **importer_1c_client_bank**
+ **import_alfa_payments**
+ **import_alfa_payments_request**
+ **import_alfa_payments_save**
+ **import_tochka_payments**
+ **import_modulbank_payments**
+ **import_tochka_payments_save**
+ **import_modulbank_payments_save**
+ **import_tinkoff_payments**
+ **import_tinkoff_payments_save**
+ **importer_good**
+ **importer_good_in_doc**
+ **import_edo_supply**
+ **import_union_company**
+ **import_sberbank_payments_request**
+ **import_sberbank_payments_save**
+ **import_update_vat_to_20_percents**
+ **import_custom_entity**


### Сводная таблица типов уведомлений
| Тип уведомления                              | Группа                 | О чем уведомление                                                      |
|----------------------------------------------|------------------------|------------------------------------------------------------------------|
| **AppAsyncButton**                           | Решения                | Об окончании обработки нажатия кастомной кнопки                        |
| **AppChangePermissions**                     | Решения                | Права доступа в решении изменены                                       |
| **FacebookTokenExpirationNotification**      | Интернет-магазины      | О скором окончании действия доступа к аккаунту Facebook                |
| **NotificationExportCompleted**              | Обмен данными          | Экспорт выполнен                                                       |
| **NotificationGoodCountTooLow**              | Остатки                | Снижение количества товара до неснижаемого остатка                     |
| **NotificationImportCompleted**              | Обмен данными          | Импорт выполнен                                                        |
| **NotificationInvoiceOutOverdue**            | Счет                   | Просрочен счёт, который не оплатил или не полностью оплатил покупатель |
| **NotificationOrderNew**                     | Заказ покупателя       | Новый заказа покупателя                                                |
| **NotificationOrderOverdue**                 | Заказ покупателя       | Просрочен заказ                                                        |
| **NotificationRetailShiftClosed**            | Розничная торговля     | Закрыта смена                                                          |
| **NotificationRetailShiftOpened**            | Розничная торговля     | Открыта смена                                                          |
| **NotificationScript**                       | Сценарии               | Уведомление из сценария                                                |
| **NotificationSubscribeExpired**             | Биллинг                | Окончание подписки                                                     |
| **NotificationSubscribeTermsExpired**        | Биллинг                | Истекают условия подписки                                              |
| **NotificationTaskAssigned**                 | Задача                 | Задача назначена                                                       |
| **NotificationTaskChanged**                  | Задача                 | Задача поменялась                                                      |
| **NotificationTaskCommentChanged**           | Задача                 | Комментарий у задачи был изменен                                       |
| **NotificationTaskCommentDeleted**           | Задача                 | Комментарий у задачи был удален                                        |
| **NotificationTaskCompleted**                | Задача                 | Задача выполнена                                                       |
| **NotificationTaskDeleted**                  | Задача                 | Задача удалена                                                         |
| **NotificationTaskNewComment**               | Задача                 | У задачи появился новый комментарий                                    |
| **NotificationTaskOverdue**                  | Задача                 | Задача просрочена                                                      |
| **NotificationTaskReopened**                 | Задача                 | Задача переоткрыта                                                     |
| **NotificationTaskUnassigned**               | Задача                 | Задача снята                                                           |
| **NotificationBonusMoney**                   | Баланс                 | На счет зачислены бонусные деньги                                      |
| **NewMentionInEvent**                        | Упоминания сотрудников | Новое упоминание в ленте событий                                       |
| **NewMentionInPurposeNote**                  | Упоминания сотрудников | Новое упоминание в комментарии Задачи                                  |
| **NewEventInEventFeed**                      | Отслеживаемые события  | Новое событие в отслеживаемом объекте                                  |
| **RetireOrderByDemandNotificationCompleted** | Обмен данными          | Создание Вывода из оборота на основании Отгрузок выполнено             |
