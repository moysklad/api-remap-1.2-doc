## Настройки справочника товаров
На данный  при помощи JSON API существует возможность получать и обновлять информацию о текущих настройках справочника товаров.
#### Настройки справочника 
#### Атрибуты сущности
+ **uniqueCodeRules.checkUniqueCode** - Проверка уникальности кода справочника
+ **uniqueCodeRules.fillUniqueCode** - Устанавливать уникальный код
+ **barcodeRules.fillEAN13Barcode** - Автоматически создавать штрихкод EAN13 для новых товаров, комплектов, модификаций и услуг
+ **barcodeRules.weightBarcodePrefix** - Префикс штрихкодов для весовых товаров
+ **createdShared** - Создавать новые документы с меткой «Общий»

### Получить настройки справочника товаров 
> Запрос на получение настроек справочника товаров.

```shell
curl -X GET
  "https://online.moysklad.ru/api/remap/1.2/entity/settings"
  -H "Authorization: Basic <Credentials>"
```

> Response 200 (application/json)
Успешный запрос. Результат - JSON представление настроек компании.

```json
{
  "uniqueCodeRules": {
    "checkUniqueCodeBoolean": true,
    "fillUniqueCode": true
  },
  "barcodeRules": {
    "fillEAN13Barcode": true,
    "weightBarcodePrefix": 55
  },
  "createdShared": false
}
```

### Обновить настройки справочника компании 

В теле запроса нужно передать массив, содержащий новый JSON настроек компании.

> Запрос на обновление метаданных настроек компании.

```shell
curl -X PUT
  "https://online.moysklad.ru/api/remap/1.2/entity/settings"
  -H "Authorization: Basic <Credentials>"
  -H "Content-Type: application/json"
  -d '{
  "uniqueCodeRules": {
    "checkUniqueCodeBoolean": true,
    "fillUniqueCode": true
  },
  "barcodeRules": {
    "fillEAN13Barcode": true,
    "weightBarcodePrefix": 55
  },
  "createdShared": false
}'
```

> Response 200
