import { Cell, Pie, PieChart } from 'recharts';
import { useState } from 'react';

const PieChartDia = () => {
    const data2 = [
        { label: 'Group A', value: 400, color: '#0088FE' },
        { label: 'Group B', value: 300, color: '#00C49F' },
        { label: 'Group C', value: 300, color: '#FFBB28' },
        { label: 'Group D', value: 200, color: '#FF8042' },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const RADIAN = Math.PI / 180;
    const isAnimationActive = true;
    const [activeIndex, setActiveIndex] = useState(null);

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };

    const onPieLeave = () => {
        setActiveIndex(null);
    };
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
            return null;
        }
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const ncx = Number(cx);
        const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
        const ncy = Number(cy);
        const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > ncx ? 'start' : 'end'} dominantBaseline="central">
                {`${((percent ?? 1) * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className="shadow-md rounded-md w-2/5 h-auto px-4 bg-white">
            <p className="text-xs pl-4 pt-4">Order Status</p>
            <PieChart width={400} height={300}>
                <Pie
                    data={data2}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    fill="#8884d8"
                    dataKey="value"
                    isAnimationActive={isAnimationActive}
                    onMouseEnter={onPieEnter}
                    onMouseLeave={onPieLeave}
                    activeIndex={activeIndex}
                    activeShape={{
                        outerRadius: 110,
                        stroke: '#fff',
                        strokeWidth: 2,
                    }}
                    outerRadius={100}
                >
                    {data2.map((entry, index) => (
                        <Cell key={`cell-${entry.label}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    )
}

export default PieChartDia