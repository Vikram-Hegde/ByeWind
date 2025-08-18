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

export default function Sidebar() {
	return (
		<section className="border-r px-4 py-5 space-y-4 border-text/10 h-screen overflow-y-auto">
			<div className="flex items-center gap-2">
				<img
					src="https://i.pravatar.cc/48"
					className="size-6 object-cover rounded-full"
					alt="User Avatar"
				/>
				ByeWind
			</div>

			<div className="flex gap-1 flex-col pb-3">
				<div className="flex gap-2 items-center">
					<button className="py-1 px-2 text-text/40 hover:bg-text/5 rounded-md">
						Favorites
					</button>
					<button className="py-1 px-2 text-text/20 hover:bg-text/5 rounded-md">
						Recent
					</button>
				</div>
				<ul className="list-inside list-disc marker:text-text/20">
					<li className="px-2 py-1">Overview</li>
					<li className="px-2 py-1">Projects</li>
				</ul>
			</div>

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
		</section>
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
			<button
				className={clsx(
					'pr-2 py-1 flex gap-1 items-center w-full group hover:bg-text/5 rounded-md',
					isActive ? 'bg-text/5' : 'bg-transparent'
				)}
			>
				<span
					className={clsx(
						'w-6 flex justify-between items-center',
						isActive &&
							'before:w-1 before:block before:content-[""] before:rounded-full before:h-4 before:bg-text'
					)}
				/>
				{icon}
				{children}
			</button>
		)
	}

	return (
		<Accordion.Root type="single" collapsible>
			<Accordion.Item value="item-1" className="w-full">
				<Accordion.Trigger
					className={clsx(
						'pr-2 py-1 flex gap-1 items-center w-full group hover:bg-text/5 rounded-md'
					)}
				>
					<CaretRightIcon className="size-4 text-text/40 transition-transform shrink-0 ml-2 group-data-[state=open]:rotate-90" />
					{icon}
					<span>{children}</span>
				</Accordion.Trigger>
				<Accordion.Content className="flex flex-col gap-1 mt-1 will-change-[height] data-[state=open]:animate-accordion-slide-down data-[state=closed]:animate-accordion-slide-up">
					{subitems.map((item) => (
						<Link
							key={item.href}
							to={item.href}
							className="pr-2 py-1 flex gap-1 items-center w-full group hover:bg-text/5 rounded-md"
						>
							{/* active indicator */}
							<span className="w-6 flex justify-between items-center"></span>
							{/* icon */}
							<span className="w-5"></span>
							<span>{item.label}</span>
						</Link>
					))}
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	)
}
