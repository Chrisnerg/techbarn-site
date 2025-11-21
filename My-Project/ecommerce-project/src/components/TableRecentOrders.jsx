import React from 'react'

const TableRecentOrders = () => {

    const orders = [
            {
                id: "ORD-001",
                customer: "John Doe",
                amount: "$249.99",
                status: "completed",
                date: "2025-11-19",
            },
            {
                id: "ORD-002",
                customer: "Jane Smith",
                amount: "$149.50",
                status: "processing",
                date: "2025-11-19",
            },
            {
                id: "ORD-003",
                customer: "Bob Johnson",
                amount: "$399.99",
                status: "completed",
                date: "2025-11-18",
            },
            {
                id: "ORD-004",
                customer: "Alice Williams",
                amount: "$89.99",
                status: "pending",
                date: "2025-11-18",
            },
            {
                id: "ORD-005",
                customer: "Charlie Brown",
                amount: "$299.00",
                status: "completed",
                date: "2025-11-17",
            },
        ];

        const statusStyles = {
        completed: "bg-emerald-100 text-emerald-700",
        processing: "bg-blue-100 text-blue-700",
        pending: "bg-amber-100 text-amber-700",
    };

  return (
    <div className="flex justify-around pt-8">
                            <div className="rounded-md shadow-md  pt-4 pl-4 bg-white">
                                <h2 className="text-slate-900 ">Recent Orders</h2>
                                <p className="text-slate-500 text-sm mt-1">Latest transactions from your store</p>
                                <table width={400} height={300}>
                                    <thead>
                                        <tr className="border-b-2 border-gray-400">
                                            <th className="text-left py-3 px-4 text-slate-700 text-sm ">Order ID</th>
                                            <th className="text-left py-3 px-4 text-slate-700 text-sm">Customer</th>
                                            <th className="text-left py-3 px-4 text-slate-700 text-sm">Amount</th>
                                            <th className="text-left py-3 px-4 text-slate-700 text-sm">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map((order) => (
                                            <tr key={order.id} className="border-b-2 border-gray-400 hover:bg-gray-100">
                                                <td className="py-3 px-4 text-sm text-slate-900">{order.id}</td>
                                                <td className="py-3 px-4 text-sm text-slate-900">{order.customer}</td>
                                                <td className="py-3 px-4 text-sm text-slate-900">{order.amount}</td>
                                                <td className="py-3 px-4">
                                                    <span
                                                        className={`inline-block px-3 py-1 rounded-full text-xs ${statusStyles[order.status]
                                                            }`}>

                                                        {order.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
  )
}

export default TableRecentOrders