
import { PiCurrencyDollarLight } from "react-icons/pi";
import { LuShoppingCart } from "react-icons/lu";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import LineGraph from "../../components/LineGraph"
import PieChartDia from "../../components/PieChartDia"
import TableRecentOrders from "../../components/TableRecentOrders"
import TopProductsTable from "../../components/TopProductsTable"


const OverView = () => {

    let name = '';

    const linkstyle = ({ isActive }) => {
        return isActive
            ? "block w-full pl-2 border-l-4 rounded-sm border-indigo-500 shadow-md py-7 bg-indigo-50 ml-1 mb-2 mr-4 scale-105"
            : "block w-full pl-2 border-l-4 rounded-sm border-indigo-500 shadow-md py-7 hover:bg-indigo-50 ml-1 mb-2 mr-4";
    }

    return (
            <div className='bg-gray-200 w-4/5 min-h-screen pb-24 '>
                    <div className="flex justify-evenly pt-8">
                        <div className="bg-white rounded-md shadow-lg border-gray-300 border hover:scale-110">
                            <div className="mx-4">
                                <div className="flex justify-between pt-2">
                                    <p className="text-xs pb-3">Total Revenue</p>
                                    <PiCurrencyDollarLight />
                                </div>
                                <p className="text-lg">$45,231.89</p>
                                <p className="text-xs pb-2">+20.1% from last month</p>
                            </div>

                        </div>

                        <div className="bg-white rounded-md shadow-lg border-gray-300 border hover:scale-110">
                            <div className="mx-4">
                                <div className="flex justify-between pt-2">
                                    <p className="text-xs pb-3">Orders</p>
                                    <LuShoppingCart />
                                </div>
                                <p className="text-lg">2,345</p>
                                <p className="text-xs pb-2">+15.3% from last month</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-md shadow-lg border-gray-300 border hover:scale-110">
                            <div className="mx-4">
                                <div className="flex justify-between pt-2">
                                    <p className="text-xs pb-3">Customers</p>
                                    <AiOutlineUsergroupAdd />
                                </div>
                                <p className="text-lg">1,234</p>
                                <p className="text-xs pb-2">+8.2% from last month</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-md shadow-lg border-gray-300 border hover:scale-110">
                            <div className="mx-4">
                                <div className="flex justify-between pt-2">
                                    <p className="text-xs pb-3">Conversion Rate</p>
                                    <HiMiniArrowTrendingUp />
                                </div>
                                <p className="text-lg">3.24%</p>
                                <p className="text-xs pb-2">+0.5% from last month</p>
                            </div>
                        </div>


                    </div>
                    {/* --------------------------------------- Charts --------------------------------------- */}
                    {/* Line Chart */}
                    <div className="flex justify-around mt-8 ">
                        <LineGraph />

                        {/* Pie Chart */}
                        <PieChartDia />
                    </div>

                    <div className="flex justify-around gap-24 mt-8 ">
                        {/* Table  */}
                        <TableRecentOrders />

                        {/* Progressn Chart */}
                        <TopProductsTable />
                    </div>
                </div>
    )
}

export default OverView