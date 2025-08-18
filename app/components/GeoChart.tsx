import * as Tooltip from '@radix-ui/react-tooltip'
import {
	ComposableMap,
	Geographies,
	Geography,
	Marker,
} from 'react-simple-maps'

const RevenueByLocationChart = ({ className }: { className?: string }) => {
	const locations = [
		{
			name: 'New York',
			coordinates: [-74.006, 40.7128],
			revenue: '72K',
		},
		{
			name: 'San Francisco',
			coordinates: [-122.4194, 37.7749],
			revenue: '39K',
		},
		{
			name: 'Sydney',
			coordinates: [151.2093, -33.8688],
			revenue: '25K',
		},
		{
			name: 'Singapore',
			coordinates: [103.8518, 1.3521],
			revenue: '61K',
		},
	]

	return (
		<Tooltip.Provider>
			<div
				className={`revenue-by-location-chart bg-primary-light p-6 rounded-lg ${className}`}
			>
				<div className="font-semibold">Revenue by Location</div>

				{/* Map Container */}
				<ComposableMap
					projection="geoMercator"
					projectionConfig={{
						scale: 120,
						center: [0, 20],
					}}
					style={{ width: '100%', height: '300px' }}
				>
					<Geographies geography="https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson">
						{({ geographies }) =>
							geographies.map((geo) => (
								<Geography
									key={geo.rsmKey}
									geography={geo}
									fill="#e2e8f0"
									stroke="#cbd5e1"
									strokeWidth={0.5}
									style={{
										default: { outline: 'none' },
										hover: { outline: 'none', fill: '#cbd5e1' },
										pressed: { outline: 'none' },
									}}
								/>
							))
						}
					</Geographies>

					{/* Location Markers with Radix Tooltips */}
					{locations.map((location, index) => (
						<Tooltip.Root key={index} delayDuration={200}>
							<Tooltip.Trigger asChild>
								<Marker coordinates={location.coordinates as [number, number]}>
									<circle
										r={6}
										fill="#1e40af"
										stroke="#ffffff"
										strokeWidth={2}
										style={{
											cursor: 'pointer',
											transition: 'all 0.2s ease',
										}}
										className="hover:r-8"
									/>
								</Marker>
							</Tooltip.Trigger>
							<Tooltip.Portal>
								<Tooltip.Content
									className="radix-tooltip-content"
									sideOffset={5}
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
										animationDuration: '400ms',
										animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
										willChange: 'transform, opacity',
										zIndex: 1000,
									}}
								>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											gap: '2px',
										}}
									>
										<span style={{ fontWeight: '600' }}>{location.name}</span>
										<span style={{ color: '#d1d5db' }}>
											Revenue: {location.revenue}
										</span>
									</div>
									<Tooltip.Arrow
										style={{
											fill: '#1f2937',
										}}
									/>
								</Tooltip.Content>
							</Tooltip.Portal>
						</Tooltip.Root>
					))}
				</ComposableMap>
				{/* Location List */}
				<div
					style={{
						display: 'grid',
						gap: '12px',
					}}
				>
					{locations.map((location, index) => (
						<div
							key={index}
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								padding: '12px 0',
								borderBottom:
									index < locations.length - 1 ? '1px solid #e5e7eb' : 'none',
							}}
						>
							<div
								style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
							>
								<div
									style={{
										width: '8px',
										height: '8px',
										borderRadius: '50%',
										backgroundColor: '#1e40af',
									}}
								></div>
								<span
									style={{
										fontSize: '14px',
										color: '#374151',
										fontWeight: '500',
									}}
								>
									{location.name}
								</span>
							</div>
							<span
								style={{
									fontSize: '14px',
									color: '#1f2937',
									fontWeight: '600',
								}}
							>
								{location.revenue}
							</span>
						</div>
					))}
				</div>
			</div>
		</Tooltip.Provider>
	)
}

export default RevenueByLocationChart
