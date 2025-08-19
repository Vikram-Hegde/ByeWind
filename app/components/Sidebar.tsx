import {
	AddressBookIcon,
	BookOpenIcon,
	CaretRightIcon,
	ChartPieSliceIcon,
	ChatsCircleIcon,
	FolderIcon,
	IdentificationCardIcon,
	NotebookIcon,
	ShoppingBagOpenIcon,
	UsersThreeIcon,
} from '@phosphor-icons/react'
import * as Accordion from '@radix-ui/react-accordion'
import clsx from 'clsx'
import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'

export default function Sidebar() {
	return (
		<motion.section
			initial={{ x: -300, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ type: 'spring', stiffness: 400, damping: 30 }}
			className="border-r px-4 py-5 space-y-4 border-text/10 h-screen overflow-y-auto"
		>
			<motion.div
				className="flex items-center gap-2"
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.2 }}
			>
				<motion.img
					src="https://i.pravatar.cc/48"
					className="size-6 object-cover rounded-full"
					alt="User Avatar"
					whileHover={{ scale: 1.1 }}
					transition={{ type: 'spring', stiffness: 400, damping: 17 }}
				/>
				<motion.span
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}
				>
					ByeWind
				</motion.span>
			</motion.div>

			<motion.div
				className="flex gap-1 flex-col pb-3"
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.4 }}
			>
				<div className="flex gap-2 items-center">
					<motion.button
						className="py-1 px-2 text-text/40 hover:bg-text/5 rounded-md"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Favorites
					</motion.button>
					<motion.button
						className="py-1 px-2 text-text/20 hover:bg-text/5 rounded-md"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Recent
					</motion.button>
				</div>
				<motion.ul
					className="list-inside list-disc marker:text-text/20"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
				>
					<motion.li
						className="px-2 py-1"
						whileHover={{ x: 5 }}
						transition={{ type: 'spring', stiffness: 400, damping: 17 }}
					>
						Overview
					</motion.li>
					<motion.li
						className="px-2 py-1"
						whileHover={{ x: 5 }}
						transition={{ type: 'spring', stiffness: 400, damping: 17 }}
					>
						Projects
					</motion.li>
				</motion.ul>
			</motion.div>

			<div className="flex gap-1 flex-col">
				<div className="py-1 px-3 text-text/40">Dashboards</div>
				<NavItem
					icon={<ChartPieSliceIcon weight="duotone" className="size-5" />}
					isActive={true}
				>
					Default
				</NavItem>
				<NavItem
					icon={<ShoppingBagOpenIcon weight="duotone" className="size-5" />}
					subitems={[
						{
							id: 'new-bag',
							label: 'New Bag',
							href: '/dashboard/new-bag',
						},
						{
							id: 'existing-bags',
							label: 'Existing Bags',
							href: '/dashboard/existing-bags',
						},
						{
							id: 'archived-bags',
							label: 'Archived Bags',
							href: '/dashboard/archived-bags',
						},
					]}
				>
					e-Commerce
				</NavItem>
				<NavItem
					icon={<FolderIcon className="size-5" />}
					subitems={[
						{
							id: 'project-a',
							label: 'Project A',
							href: '/dashboard/project-a',
						},
						{
							id: 'project-b',
							label: 'Project B',
							href: '/dashboard/project-b',
						},
						{
							id: 'project-c',
							label: 'Project C',
							href: '/dashboard/project-c',
						},
					]}
				>
					Projects
				</NavItem>
				<NavItem
					icon={<BookOpenIcon className="size-5" weight="duotone" />}
					subitems={[
						{
							id: 'course-1',
							label: 'Course 1',
							href: '/dashboard/course-1',
						},
						{
							id: 'course-2',
							label: 'Course 2',
							href: '/dashboard/course-2',
						},
						{
							id: 'course-3',
							label: 'Course 3',
							href: '/dashboard/course-3',
						},
					]}
				>
					Courses
				</NavItem>
			</div>

			<div className="flex gap-1 flex-col">
				<div className="py-1 px-3 text-text/40">Pages</div>
				<NavItem
					subitems={[
						{
							label: 'Overview',
							href: '/dashboard/user-profile/overview',
							id: 'overview',
						},
						{
							label: 'Projects',
							href: '/dashboard/user-profile/projects',
							id: 'projects',
						},
						{
							label: 'Campaigns',
							href: '/dashboard/user-profile/campaigns',
							id: 'campaigns',
						},
						{
							label: 'Documents',
							href: '/dashboard/user-profile/documents',
							id: 'documents',
						},
						{
							label: 'Followers',
							href: '/dashboard/user-profile/followers',
							id: 'followers',
						},
					]}
					icon={<AddressBookIcon weight="duotone" className="size-5" />}
				>
					User profile
				</NavItem>

				<NavItem
					icon={<IdentificationCardIcon className="size-5" weight="duotone" />}
					subitems={[
						{
							label: 'Profile',
							href: '/dashboard/account/profile',
							id: 'profile',
						},
						{
							label: 'Settings',
							href: '/dashboard/account/settings',
							id: 'settings',
						},
					]}
				>
					Account
				</NavItem>
				<NavItem
					subitems={[
						{
							label: 'Campaigns',
							href: '/dashboard/corporate/campaigns',
							id: 'campaigns',
						},
						{
							label: 'Documents',
							href: '/dashboard/corporate/documents',
							id: 'documents',
						},
					]}
					icon={<UsersThreeIcon className="size-5" weight="duotone" />}
				>
					Corporate
				</NavItem>
				<NavItem
					subitems={[
						{
							label: 'Posts',
							href: '/dashboard/blog/posts',
							id: 'posts',
						},
						{
							label: 'Categories',
							href: '/dashboard/blog/categories',
							id: 'categories',
						},
						{
							label: 'Tags',
							href: '/dashboard/blog/tags',
							id: 'tags',
						},
					]}
					icon={<NotebookIcon className="size-5" weight="duotone" />}
				>
					Blog
				</NavItem>
				<NavItem
					subitems={[
						{
							label: 'Feed',
							href: '/dashboard/social/feed',
							id: 'feed',
						},
						{
							label: 'Messages',
							href: '/dashboard/social/messages',
							id: 'messages',
						},
						{
							label: 'Notifications',
							href: '/dashboard/social/notifications',
							id: 'notifications',
						},
					]}
					icon={<ChatsCircleIcon className="size-5" weight="duotone" />}
				>
					Social
				</NavItem>
			</div>
		</motion.section>
	)
}

function NavItem({
	isActive = false,
	icon,
	children,
	subitems,
}: {
	isActive?: boolean
	icon: ReactNode
	children: ReactNode
	subitems?: { label: string; href: string; id: string }[]
}) {
	if (!subitems) {
		return (
			<motion.button
				whileHover={{ scale: 1.01 }}
				whileTap={{ scale: 0.98 }}
				className={clsx(
					'pr-2 py-1 flex gap-1 items-center w-full group hover:bg-text/5 rounded-md',
					isActive ? 'bg-text/5' : 'bg-transparent'
				)}
			>
				<motion.span
					className={clsx(
						'w-6 flex justify-between items-center',
						isActive &&
							'before:w-1 before:block before:content-[""] before:rounded-full before:h-4 before:bg-text'
					)}
					animate={isActive ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 0.2 }}
				/>
				<motion.span
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ type: 'spring', stiffness: 400, damping: 17 }}
				>
					{icon}
				</motion.span>
				<motion.span
					initial={{ x: -10, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ type: 'spring', stiffness: 400, damping: 17 }}
				>
					{children}
				</motion.span>
			</motion.button>
		)
	}

	return (
		<Accordion.Root type="single" collapsible>
			<Accordion.Item value="item-1" className="w-full">
				<motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
					<Accordion.Trigger
						className={clsx(
							'pr-2 py-1 flex gap-1 items-center w-full group hover:bg-text/5 rounded-md'
						)}
					>
						<motion.span animate={{ rotate: 0 }} transition={{ duration: 0.2 }}>
							<CaretRightIcon className="size-4 text-text/40 shrink-0 ml-2 group-data-[state=open]:rotate-90" />
						</motion.span>
						<motion.span
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ type: 'spring', stiffness: 400, damping: 17 }}
						>
							{icon}
						</motion.span>
						<motion.span
							initial={{ x: -10, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ type: 'spring', stiffness: 400, damping: 17 }}
						>
							{children}
						</motion.span>
					</Accordion.Trigger>
				</motion.div>
				<AnimatePresence>
					<Accordion.Content className="flex flex-col gap-1 mt-1">
						{subitems.map((item, index) => (
							<motion.div
								key={item.href}
								initial={{ x: -20, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{
									type: 'spring',
									stiffness: 400,
									damping: 17,
									delay: index * 0.05,
								}}
							>
								<Link
									to={item.href}
									className="pr-2 py-1 flex gap-1 items-center w-full group hover:bg-text/5 rounded-md"
								>
									<span className="w-6 flex justify-between items-center"></span>
									<span className="w-5"></span>
									<span>{item.label}</span>
								</Link>
							</motion.div>
						))}
					</Accordion.Content>
				</AnimatePresence>
			</Accordion.Item>
		</Accordion.Root>
	)
}
