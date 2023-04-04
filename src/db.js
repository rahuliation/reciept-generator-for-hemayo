import Dexie from 'dexie';

export const db = new Dexie('myDatabase');
db.version(1).stores({
  customers: '++id, name, mobileNumber, *addresses', // Primary key and indexed props
  products: '++id, name, price, stock ',
  orders: '++id, customerId, deliveryAddress, billingAddress, mobileNumber, deliveryId',
  orderItems: '++id, orderId, productId, price'
});
