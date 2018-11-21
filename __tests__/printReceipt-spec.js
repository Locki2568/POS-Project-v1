const getMultiplicationTable = require('../printReceipt.js');

const input = [
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000003-2',
    'ITEM000005',
    'ITEM000005',
    'ITEM000005'
  ]

it('should print receipt like this', ()=>{
    expect(prinReceipt(input)).toBe('***<store earning no money>Receipt ***\n'+
    'Name: Coca-Cola, Quantity: 3 bottles, Unit price: 3.00 (yuan), Subtotal: 6.00 (yuan)\n'+
    'Name: Badminton, Quantity: 5, Unit price: 1.00 (yuan), Subtotal: 4.00 (yuan)\n'+
    'Name: Apple, Quantity: 2 kg, Unit price: 5.50 (yuan), Subtotal: 11.00 (yuan)\n'+
    '----------------------\n'+
    'Total: 21.00 (yuan)\n'+
    'Saving: 4.00 (yuan)\n'+
    '**********************')
})