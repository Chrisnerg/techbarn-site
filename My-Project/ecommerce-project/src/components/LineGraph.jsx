import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const LineGraph = () => {
    const data = [
        { name: 'Jan', uv: 4000 },
        { name: 'Feb', uv: 3000 },
        { name: 'Mar', uv: 2000 },
        { name: 'Apr', uv: 2780 },
        { name: 'May', uv: 1890 },
        { name: 'Jun', uv: 2390 },
        { name: 'Jul', uv: 3490 },
    ];

    return (
        <div className="shadow-md rounded-md w-2/5 h-auto mt-8 px-4 bg-white">
            <p className="text-xs pl-4 pt-4">Revenue Overview</p>
            <LineChart
                width={400}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 5,
                    left: 0,
                }}>
                <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="uv" stroke="purple" strokeWidth={2} />
                <XAxis dataKey="name" />
                <YAxis />
                <Legend />
                <Tooltip />
            </LineChart>
        </div>
    )
}

export default LineGraph