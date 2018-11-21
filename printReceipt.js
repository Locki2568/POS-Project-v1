function prinReceipt(barcodeList){
    var boutghItemList = [];
    for (let i=0; i<barcodeList.length; i++){
        var itemTobeModified = getItemInfo(loadAllItems(), barcodeList[i])
        var count = countNumOfItem(barcodeList, barcodeList[i])
        boutghItemList.push 
    }
}

function getItemInfo(allItem, barcode){
    for(let i=0; i<allItem.length;i++){
        if (allItem[i].barcode === barcode){
            return allItem[i];
        }
    }
    return null;
}

function countNumOfItem(barcodeList, barcode){
    var count = 0;
    barcodeList.filter(b => )
}

function loadAllItems() {
    return [
      {
        barcode: 'ITEM000000',
        name: 'Coca-Cola',
        unit: 'bottle',
        price: 3.00
      },
      {
        barcode: 'ITEM000001',
        name: 'Sprite',
        unit: 'bottle',
        price: 3.00
      },
      {
        barcode: 'ITEM000002',
        name: 'Apple',
        unit: 'kg',
        price: 5.50
      },
      {
        barcode: 'ITEM000003',
        name: 'Litchi',
        unit: 'kg',
        price: 15.00
      },
      {
        barcode: 'ITEM000004',
        name: 'Battery',
        unit: 'box',
        price: 2.00
      },
      {
        barcode: 'ITEM000005',
        name: 'Noodles',
        unit: 'bag',
        price: 4.50
      }
    ];
  }

  function loadPromotions() {
    return [
      {
        type: 'BUY_TWO_GET_ONE_FREE',
        barcodes: [
          'ITEM000000',
          'ITEM000001',
          'ITEM000005'
        ]
      }
    ];
  }