import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronDown } from 'lucide-react';

const data = [
    { name: 'Mo', sales: 250, customers: 400, orders: 200 },
    { name: 'Tu', sales: 350, customers: 450, orders: 300 },
    { name: 'We', sales: 300, customers: 400, orders: 250 },
    { name: 'Th', sales: 200, customers: 300, orders: 150 },
    { name: 'Fr', sales: 350, customers: 450, orders: 300 },
    { name: 'St', sales: 220, customers: 320, orders: 170 },
    { name: 'Sa', sales: 500, customers: 600, orders: 450 },
];

const WeeklyAnalyticsPanel = () => {
    return (
        <div className="">
            <div className="flex justify-between items-center">
                <h2 className="text-[#40444D] text-xl font-semibold">Overview</h2>

                <div className="flex items-center gap-4">
                    <span className="text-[#4D515A] text-xl">Sort by:</span>
                    <button className="flex items-center gap-2 px-3 py-2.5 border border-[#E2E8F0] rounded shadow-sm">
                        <span className="text-[#64748B] text-lg font-medium">Weekly</span>
                        <ChevronDown className="w-6 h-6 text-[#64748B]" />
                    </button>
                </div>
            </div>

            <div className="flex gap-10 mt-12">
                <div className="flex items-center gap-2">
                    <span className="text-[26.7839px] font-medium text-[#439288]">$1,760</span>
                    <span className="text-xl text-[#4D515A]">Income</span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-[26.7839px] font-medium text-[#4D515A]">345</span>
                    <span className="text-xl text-[#4D515A]">Sales</span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-[26.7839px] font-medium text-[#4D515A]">3.5%</span>
                    <span className="text-xl text-[#4D515A]">Conversion Ratio</span>
                </div>
            </div>

            <div className="mt-16">
                {/* This wrapper container should adjust to the parent div */}
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <defs>
                            <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#439288" stopOpacity={0.2} />
                                <stop offset="100%" stopColor="#439288" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#727983', fontSize: 12 }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#727983', fontSize: 12 }}
                            ticks={[0, 250, 500, 750, 1000]}
                        />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="sales"
                            stroke="#439288"
                            fill="url(#salesGradient)"
                            strokeWidth={2}
                        />
                        <Area
                            type="monotone"
                            dataKey="customers"
                            stroke="#F7B84B"
                            fill="none"
                            strokeWidth={2}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className="flex items-center justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#439288]" />
                    <span className="text-xs font-medium text-[#40444D]">Sales</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F7B84B]" />
                    <span className="text-xs font-medium text-[#40444D]">Customers</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C0C5CC]" />
                    <span className="text-xs font-medium text-[#40444D]">Orders</span>
                </div>
            </div>
        </div>
    );
};

export default WeeklyAnalyticsPanel;
