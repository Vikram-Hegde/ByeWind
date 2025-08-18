import React from 'react'
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	ResponsiveContainer,
} from 'recharts'

const ProjectionsVsActualsChart = () => {
	const data = [
		{ month: 'Jan', projections: 20000000, actuals: 18000000 },
		{ month: 'Feb', projections: 25000000, actuals: 22000000 },
		{ month: 'Mar', projections: 21000000, actuals: 19000000 },
		{ month: 'Apr', projections: 28000000, actuals: 26000000 },
		{ month: 'May', projections: 18000000, actuals: 16000000 },
		{ month: 'Jun', projections: 24000000, actuals: 22000000 },
	]

	const formatYAxis = (value: number): string => {
		if (value >= 1000000) {
			return `${value / 1000000}M`
		}
		return value.toString()
	}

	return (
		<div className="p-6 bg-primary-light">
			<h3 className="font-semibold">Projections vs Actuals</h3>

			{/* Chart */}
			<div style={{ height: '180px' }}>
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						data={data}
						margin={{
							top: 20,
							right: 0,
							left: 0,
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
							domain={[0, 50000000]}
							ticks={[0, 10000000, 20000000, 30000000, 40000000, 50000000]}
						/>
						<Bar
							dataKey="actuals"
							stackId="a"
							className="fill-secondary-cyan"
							radius={[0, 0, 0, 0]}
							maxBarSize={32}
						/>
						<Bar
							dataKey="projections"
							stackId="a"
							className="fill-secondary-cyan/50"
							radius={[4, 4, 0, 0]}
							maxBarSize={32}
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}

export default ProjectionsVsActualsChart
