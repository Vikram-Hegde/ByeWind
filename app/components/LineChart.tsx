import React from 'react'
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	ResponsiveContainer,
	Legend,
} from 'recharts'

const RevenueChart = () => {
	// Sample data based on your chart
	const data = [
		{ month: 'Jan', currentWeek: 14000000, previousWeek: 12000000 },
		{ month: 'Feb', currentWeek: 18000000, previousWeek: 8000000 },
		{ month: 'Mar', currentWeek: 16000000, previousWeek: 6000000 },
		{ month: 'Apr', currentWeek: 18000000, previousWeek: 14000000 },
		{ month: 'May', currentWeek: 20000000, previousWeek: 18000000 },
		{ month: 'Jun', currentWeek: 22000000, previousWeek: 20000000 },
	]

	// Format Y-axis labels
	const formatYAxis = (value: number) => {
		if (value >= 1000000) {
			return `${value / 1000000}M`
		}
		return value
	}

	return (
		<div
			className="revenue-chart-container"
			style={{
				backgroundColor: '#f8f9fa',
				padding: '20px',
				borderRadius: '8px',
				fontFamily:
					'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
			}}
		>
			{/* Header */}
			<div style={{ marginBottom: '20px' }}>
				<h3
					style={{
						margin: '0 0 16px 0',
						fontSize: '18px',
						fontWeight: '600',
						color: '#1a1a1a',
					}}
				>
					Revenue
				</h3>

				<div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						<div
							style={{
								width: '8px',
								height: '8px',
								borderRadius: '50%',
								backgroundColor: '#6366f1',
							}}
						></div>
						<span style={{ fontSize: '14px', color: '#6b7280' }}>
							Current Week
						</span>
						<span
							style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a' }}
						>
							$58,211
						</span>
					</div>

					<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						<div
							style={{
								width: '8px',
								height: '8px',
								borderRadius: '50%',
								backgroundColor: '#94a3b8',
							}}
						></div>
						<span style={{ fontSize: '14px', color: '#6b7280' }}>
							Previous Week
						</span>
						<span
							style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a1a' }}
						>
							$68,768
						</span>
					</div>
				</div>
			</div>

			{/* Chart */}
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
							stroke="#94a3b8"
							strokeWidth={3}
							dot={false}
							strokeDasharray="5 5"
						/>
						<Line
							type="monotone"
							dataKey="currentWeek"
							stroke="#6366f1"
							strokeWidth={3}
							dot={false}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}

export default RevenueChart
