import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from 'recharts'

const RevenueChart = ({ className }: { className?: string }) => {
	const data = [
		{ month: 'Jan', currentWeek: 14000000, previousWeek: 12000000 },
		{ month: 'Feb', currentWeek: 18000000, previousWeek: 8000000 },
		{ month: 'Mar', currentWeek: 16000000, previousWeek: 6000000 },
		{ month: 'Apr', currentWeek: 18000000, previousWeek: 14000000 },
		{ month: 'May', currentWeek: 20000000, previousWeek: 18000000 },
		{ month: 'Jun', currentWeek: 22000000, previousWeek: 20000000 },
	]

	const formatYAxis = (value: number): string => {
		if (value >= 1000000) {
			return `${value / 1000000}M`
		}
		return value.toString()
	}

	return (
		<div
			className={`revenue-chart-container bg-primary-light p-6 rounded-lg ${className}`}
		>
			<div className="flex gap-4 mb-4 items-center">
				<h3 className="font-semibold">Revenue</h3>

				<div className="flex gap-6 items-center">
					<div className="flex items-center gap-2">
						<div className="w-2 h-2 rounded-full bg-secondary-cyan"></div>
						<span className="text-gray-500">Current Week</span>
						<span className="text-black text-base font-semibold">$58,211</span>
					</div>

					<div className="flex items-center gap-2">
						<div className="w-2 h-2 rounded-full bg-slate-400"></div>
						<span className="text-sm text-gray-500">Previous Week</span>
						<span className="text-black text-base font-semibold">$68,768</span>
					</div>
				</div>
			</div>
			<div style={{ height: '300px' }}>
				<ResponsiveContainer width="100%" height="100%">
					<LineChart
						data={data}
						margin={{
							top: 20,
							right: 30,
							left: 20,
							bottom: 20,
						}}
					>
						<CartesianGrid
							strokeDasharray="3 3"
							stroke="#e5e7eb"
							horizontal={true}
							vertical={false}
						/>
						<XAxis
							dataKey="month"
							axisLine={false}
							tickLine={false}
							tick={{ fontSize: 12, fill: '#9ca3af' }}
							dy={10}
						/>
						<YAxis
							axisLine={false}
							tickLine={false}
							tick={{ fontSize: 12, fill: '#9ca3af' }}
							tickFormatter={formatYAxis}
							domain={[0, 30000000]}
							ticks={[0, 10000000, 20000000, 30000000]}
						/>
						<Line
							type="monotone"
							dataKey="previousWeek"
							stroke="var(--color-secondary-cyan)"
							strokeWidth={3}
							fill="none"
							dot={false}
							strokeDasharray="5 5"
						/>
						<Line
							type="monotone"
							dataKey="currentWeek"
							stroke="#1c1c1c"
							strokeWidth={3}
							dot={false}
							fill="none"
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}

export default RevenueChart
