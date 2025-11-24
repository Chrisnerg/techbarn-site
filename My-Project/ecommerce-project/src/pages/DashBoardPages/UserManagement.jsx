import { GrFormView } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [userStatus, setUserStatus] = useState("");
    const [popUp, setPopUp] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('/api/users');
            const data = await res.json();
            setUsers(data);
        }
        fetchProducts();
    }, [])

    const userStatusStyles = {
        active: "bg-emerald-300 text-black",
        in_active: "bg-yellow-200 text-black",
        banned: "bg-red-100 text-red-700"
    };

    const getUserStatus = (isActive) => {
        return isActive ? "active" : "in_active";
    }

    const numOrders = (order) => {
        if (!order || !order.length) {
            return 0;
        }
        return order.length; // Don't forget to return the actual count
    }

    const getActiveUsers = (users) => {
        if(users) {
            const activeUsers = users.filter( user => user.active === true);
            console.log(activeUsers);
            return activeUsers.length;
        } else {
            return 0;
        }
    }

    return (
        <div className='bg-gray-200 w-4/5 min-h-screen pb-24 '>
            <div className="flex justify-evenly pt-8">
                <div className="bg-white rounded-md shadow-lg border-gray-300 border hover:scale-110">
                    <div className="mx-4">
                        <div className="flex justify-between pt-2">
                            <p className="text-xs pb-3">Total Users</p>

                        </div>
                        <p className="text-lg">{users.length}</p>
                        <p className="text-xs pb-2">+8.2% from last month</p>
                    </div>
                </div>

                <div className="bg-white rounded-md shadow-lg border-gray-300 border hover:scale-110">
                    <div className="mx-4">
                        <div className="flex justify-between pt-2">
                            <p className="text-xs pb-3">Active Users</p>

                        </div>
                        <p className="text-lg">{getActiveUsers(users)}</p>
                        <p className="text-xs pb-2">+20.1% in last hour</p>
                    </div>

                </div>

                <div className="bg-white rounded-md shadow-lg border-gray-300 border hover:scale-110">
                    <div className="mx-4">
                        <div className="flex justify-between pt-2">
                            <p className="text-xs pb-3">Acounts Deleted</p>
                        </div>
                        <p className="text-lg">27</p>
                        <p className="text-xs pb-2">-0.63% from last month</p>
                    </div>
                </div>

            </div>

            {/* Table of users */}

            <div className="flex justify-center pt-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-xl font-semibold text-slate-900">User List</h2>
                    <p className="text-sm text-slate-500 mb-4">Registered users on your store</p>

                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b-2 border-gray-300">
                                <th className="text-left py-3 px-4 text-slate-700">User ID</th>
                                <th className="text-left py-3 px-4 text-slate-700">Email</th>
                                <th className="text-left py-3 px-4 text-slate-700">Orders</th>
                                {/* <th className="text-left py-3 px-4 text-slate-700">Total Spent</th> */}
                                <th className="text-left py-3 px-4 text-slate-700">Status</th>
                                {/* <th className="text-left py-3 px-4 text-slate-700">Joined</th> */}
                                <th className="text-left py-3 px-4 text-slate-700">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.map((user) => (
                                <tr
                                    key={user.id}
                                    className="border-b border-gray-200 hover:bg-gray-50 transition"
                                    
                                >
                                    <td className="py-3 px-4 font-medium text-slate-900">{user.id}</td>
                                    <td className="py-3 px-4 text-slate-900">{user.email}</td>
                                    <td className="py-3 px-4 text-slate-900">{numOrders(user.orderHistory)}</td>
                                    {/* <td className="py-3 px-4 text-slate-900">${user.totalSpent.toFixed(2)}</td> */}

                                    <td className="py-3 px-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${userStatusStyles[getUserStatus(user.active)]}`}
                                        >
                                            {getUserStatus(user.active)}
                                        </span>
                                    </td>

                                    {/* <td className="py-3 px-4 text-slate-900">{user.joined}</td> */}

                                    <td className="py-3 px-8 text-slate-900">
                                        <Link to="#" onClick={(e) => {
                                        setPopUp(true);
                                        setSelectedUser(user);
                                    }}>
                                            <GrFormView className="text-2xl" />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pop-up Product Info */}
            {popUp && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">

                    {/* Outer Popup Box (Wider) */}
                    <div className="bg-white py-6 px-8 mx-24 rounded-xl shadow-xl w-[800px] h-4/5 overflow-y-auto relative">

                        {/* Inner Content Container (Fixed width) */}
                        <div className="max-w-[450px] mx-auto">

                            {/* Close Button */}
                            <div className="flex justify-between items-center bg-white py-2">
                                <p className="text-2xl font-bold text-gray-700">User Details</p>
                                <button onClick={() => setPopUp(false)}>
                                    <IoCloseSharp className="text-3xl hover:text-red-500" />
                                </button>
                            </div>

                            <CiUser className="text-9xl ml-40"/>

                            {/* Inputs */}
                            <div className="mt-6">
                                <p className="pb-1">User ID:</p>
                                <input className="border rounded w-full py-2 px-3 mb-3" value={selectedUser.id} readOnly/>

                                <p className="pb-1">User name:</p>
                                <input className="border rounded w-full py-2 px-3 mb-3" value={selectedUser.name} readOnly/>

                                <p className="pb-1">User surname:</p>
                                <input className="border rounded w-full py-2 px-3 mb-3" value={selectedUser.surname} readOnly/>

                                <p className="pb-1">User Email:</p>
                                <input className="border rounded w-full py-2 px-3 mb-3" value={selectedUser.email} readOnly/>

                                <p className="pb-1">User orders:</p>
                                <input className="border rounded w-full py-2 px-3 mb-3" value={selectedUser?.order?.length ?? 0} readOnly/>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )

}

export default UserManagement