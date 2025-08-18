import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

type DataItem = {
	name: string
	value: number
	color: string
	percentage?: string
}

const tooltipShowAnimation = {
	'@keyframes slideUpAndFade': {
		from: {
			opacity: 0,
			transform: 'translateY(2px) scale(0.98)',
		},
		to: {
			opacity: 1,
			transform: 'translateY(0) scale(1)',
		},
	},
}

const TotalSalesChart = ({ className }: { className?: string }) => {
	const data = [
		{ name: 'Direct', value: 300.56, color: '#1f2937' },
		{ name: 'Affiliate', value: 135.18, color: '#86efac' },
		{ name: 'Sponsored', value: 154.02, color: '#a855f7' },
		{ name: 'E-mail', value: 48.96, color: '#7dd3fc' },
	]

	// Calculate total and percentages
	const total = data.reduce((sum, item) => sum + item.value, 0)
	const dataWithPercentages = data.map((item) => ({
		...item,
		percentage: ((item.value / total) * 100).toFixed(1),
	}))

	// Custom label component to show percentage inside the chart
	const CustomTooltip: React.FC<any> = ({ active, payload }) => {
		if (active && payload?.[0]) {
			const data = payload[0].payload as DataItem
			return (
				<div
					style={{
						backgroundColor: '#1f2937',
						color: 'white',
						padding: '8px 12px',
						borderRadius: '6px',
						fontSize: '12px',
						fontWeight: '500',
						boxShadow:
							'0 10px 38px -10px rgba(22, 23, 24, 0.35), 0 10px 20px -15px rgba(22, 23, 24, 0.2)',
						userSelect: 'none',
						animation: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
						willChange: 'transform, opacity',
						zIndex: 1000,
						...tooltipShowAnimation,
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '2px',
						}}
					>
						<span style={{ fontWeight: '600' }}>{data.name}</span>
						<span style={{ color: '#d1d5db' }}>
							${data.value.toFixed(2)} ({data.percentage}%)
						</span>
					</div>
				</div>
			)
		}
		return null
	}

	const renderCustomLabel = (props: {
		cx: number
		cy: number
		midAngle: number
		innerRadius: number
		outerRadius: number
		percent: number
	}) => {
		const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props
		// Only show label for the largest segment (Direct)
		if (percent > 0.4) {
			// Show only if more than 40%
			const radius = innerRadius + (outerRadius - innerRadius) * 0.5
			const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180)
			const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180)

			return (
				<text
					x={x}
					y={y}
					fill="white"
					textAnchor={x > cx ? 'start' : 'end'}
					dominantBaseline="central"
					fontSize="14"
					fontWeight="600"
				>
					{`${(percent * 100).toFixed(1)}%`}
				</text>
			)
		}
		return null
	}

	return (
		<div className={`bg-primary-light p-6 rounded-lg ${className}`}>
			<div className="font-semibld">Total Sales</div>

			{/* Donut Chart */}
			<div style={{ height: '200px', marginBottom: '20px' }}>
				<ResponsiveContainer width="100%" height="100%">
					<PieChart>
						<Tooltip content={<CustomTooltip />} />
						<Pie
							data={dataWithPercentages}
							cx="50%"
							cy="50%"
							innerRadius={60}
							outerRadius={80}
							paddingAngle={2}
							dataKey="value"
							labelLine={false}
							stroke="none"
						>
							{dataWithPercentages.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={entry.color}
									style={{
										filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))',
									}}
								/>
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
			</div>

			{/* Legend */}
			<div
				style={{
					display: 'grid',
					gap: '12px',
				}}
			>
				{dataWithPercentages.map((item, index) => (
					<div
						key={index}
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
							<div
								style={{
									width: '8px',
									height: '8px',
									borderRadius: '50%',
									backgroundColor: item.color,
								}}
							></div>
							<span
								style={{
									fontSize: '14px',
									color: '#374151',
									fontWeight: '500',
								}}
							>
								{item.name}
							</span>
						</div>
						<span
							style={{
								fontSize: '14px',
								color: '#1f2937',
								fontWeight: '600',
							}}
						>
							${item.value.toFixed(2)}
						</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default TotalSalesChart
