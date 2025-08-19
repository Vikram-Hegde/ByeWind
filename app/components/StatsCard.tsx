import { ArrowDownRightIcon, ArrowUpRightIcon } from '@phosphor-icons/react'
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from 'framer-motion'

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
	const mouseX = useMotionValue(0)
	const mouseY = useMotionValue(0)
	const radius = useSpring(0, { damping: 15, stiffness: 200 })

	const background = useMotionTemplate`radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, var(--hover-color) 0%, transparent 100%)`

	function onMouseMove({
		currentTarget,
		clientX,
		clientY,
	}: React.MouseEvent<HTMLDivElement>) {
		const bounds = currentTarget.getBoundingClientRect()
		mouseX.set(clientX - bounds.left)
		mouseY.set(clientY - bounds.top)
	}

	function onMouseEnter() {
		radius.set(160)
	}

	function onMouseLeave() {
		radius.set(0)
	}

	return (
		<motion.div
			className={`relative p-6 rounded-lg overflow-hidden ${className}`}
			style={
				{ '--hover-color': 'rgba(255, 255, 255, 0.1)' } as React.CSSProperties
			}
			onMouseMove={onMouseMove}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			whileHover={{ scale: 1.02 }}
			transition={{ type: 'spring', stiffness: 300, damping: 30 }}
		>
			<motion.div
				className="pointer-events-none absolute -inset-px"
				style={{ background }}
			/>
			<div className="relative">
				<div className="font-semibold">{label}</div>
				<div className="mt-2 flex justify-between">
					<motion.div
						className="text-2xl font-semibold"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						{prefix && <span className="text-text/60">{prefix}</span>}
						{value}
						{suffix && <span className="text-text/60">{suffix}</span>}
					</motion.div>
					<motion.div
						className="flex items-center gap-1"
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<div>
							{isPositive ? (
								<ArrowUpRightIcon weight="bold" />
							) : (
								<ArrowDownRightIcon weight="bold" />
							)}
						</div>
						<span className="text-text/60">{Math.abs(change)}%</span>
					</motion.div>
				</div>
			</div>
		</motion.div>
	)
}
