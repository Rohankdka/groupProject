import React from 'react';

function OrderHistory({ orders }) {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Total</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="px-4 py-2">{order.date}</td>
              <td className="px-4 py-2">${order.total.toFixed(2)}</td>
              <td className="px-4 py-2">
                {order.status === 'delivered' && <span className="text-green-500">Delivered</span>}
                {order.status === 'shipped' && <span className="text-blue-500">Shipped</span>}
                {order.status === 'pending' && <span className="text-red-500">Pending</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderHistory;