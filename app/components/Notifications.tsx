import { BugIcon, UserIcon } from '@phosphor-icons/react'
import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface NotificationsProps {
	isOpen: boolean
}

export default function Notifications({ isOpen }: NotificationsProps) {
	return (
		<motion.section
			initial={{ x: 300, opacity: 0 }}
			animate={{
				x: isOpen ? 0 : 300,
				width: isOpen ? 'auto' : '0',
				opacity: isOpen ? 1 : 0,
			}}
			transition={{ type: 'spring', stiffness: 400, damping: 30 }}
			className="space-y-6 border-l border-text/10 h-screen overflow-y-auto p-5"
		>
			<div className="space-y-2">
				<h3 className="py-2 px-1 font-semibold">Notifications</h3>
				<NotificationItem
					title="You have a bug that needs fixing as soon as possible"
					time="2 minutes ago"
					icon={
						<span className="size-6 rounded-md bg-primary-blue grid place-items-center">
							<BugIcon className="size-4" />
						</span>
					}
				/>
				<NotificationItem
					title="New user registered"
					time="59 minutes ago"
					icon={
						<span className="size-6 rounded-md bg-primary-purple grid place-items-center">
							<UserIcon className="size-4" />
						</span>
					}
				/>
			</div>

			<div className="space-y-2">
				<h3 className="py-2 px-1 font-semibold">Activities</h3>
				<NotificationItem
					title="You have a bug that needs fixing as soon as possible"
					time="2 minutes ago"
					icon={
						<img
							src="https://i.pravatar.cc/48"
							className="rounded-full size-6"
						/>
					}
				/>
				<NotificationItem
					title="New user registered"
					time="59 minutes ago"
					icon={
						<img
							src="https://i.pravatar.cc/48"
							className="rounded-full size-6"
						/>
					}
				/>
				<NotificationItem
					title="Submitted a bug"
					time="12 hours ago"
					icon={
						<img
							src="https://i.pravatar.cc/48"
							className="rounded-full size-6"
						/>
					}
				/>
			</div>
		</motion.section>
	)
}

function NotificationItem({
	title,
	time,
	icon,
}: {
	title: string
	time: string
	icon: ReactNode
}) {
	return (
		<div className="flex items-start gap-2">
			<div className="flex-shrink-0">{icon}</div>
			<div className="flex-1">
				<div className="truncate max-w-[22ch]">{title}</div>
				<p className="text-text/60">{time}</p>
			</div>
		</div>
	)
}
