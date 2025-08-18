import { ArrowUpRight, ArrowDownRight } from '@phosphor-icons/react'

interface StatsCardProps {
	label: string
	value: string | number
	change: number
	prefix?: string
	suffix?: string
	className?: string
}

export default function StatsCard({
	label,
	value,
	change,
	prefix,
	suffix,
	className,
}: StatsCardProps) {
	const isPositive = change >= 0
	return (
		<div className={`p-6 rounded-lg ${className}`}>
			<div className="font-semibold">{label}</div>
			<div className="mt-2 flex justify-between">
				<div className="text-2xl font-semibold">
					{prefix && <span className="text-text/60">{prefix}</span>}
					{value}
					{suffix && <span className="text-text/60">{suffix}</span>}
				</div>
				<div className="flex items-center gap-1">
					<div className="text-text">
						{isPositive ? (
							<ArrowUpRight weight="bold" />
						) : (
							<ArrowDownRight weight="bold" />
						)}
					</div>
					<span className="text-text/60">{Math.abs(change)}%</span>
				</div>
			</div>
		</div>
	)
}
