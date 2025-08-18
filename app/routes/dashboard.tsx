import Sidebar from '~/components/Sidebar'
import type { Route } from './+types/dashboard'
import {
	BellIcon,
	ClockCounterClockwiseIcon,
	CommandIcon,
	MagnifyingGlassIcon,
	SidebarIcon,
	StarIcon,
	SunIcon,
} from '@phosphor-icons/react'
import { Link } from 'react-router'
import Notifications from '~/components/Notifications'
import RevenueChart from '~/components/LineChart'
import ProjectionsVsActualsChart from '~/components/BarChart'
import RevenueByLocationChart from '~/components/GeoChart'
import TotalSalesChart from '~/components/PieChart'

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Dashboard' },
		{ name: 'description', content: 'Welcome to the ByeWind Dashboard!' },
	]
}

export default function Dashboard() {
	return (
		<div className="min-h-screen text-sm grid grid-cols-[212px_1fr_280px] text-text">
			<Sidebar />
			<section className="h-screen overflow-y-auto">
				<header className="py-5 px-7 flex gap-2 border-b border-text/10 bg-white sticky top-0 z-10">
					<button className="grid w-7 aspect-square place-items-center hover:bg-text/5 rounded-md">
						<SidebarIcon weight="duotone" className="size-5" />
					</button>
					<button className="grid w-7 aspect-square place-items-center hover:bg-text/5 rounded-md">
						<StarIcon weight="duotone" className="size-5" />
					</button>
					<div className="flex gap-1">
						<Link to="/" className="text-text/40 hover:text-text py-1 px-2">
							Dashboards
						</Link>
						<div className="py-1 px-2 text-text/40">/</div>
						<Link to="/" className="py-1 px-2">
							Default
						</Link>
					</div>

					<div className="ml-auto flex gap-2">
						<div className="bg-text/5 py-1 px-2 mr-4 flex gap-1 items-center rounded-md">
							<MagnifyingGlassIcon className="size-4 text-text/20" />
							<input
								className="bg-transparent outline-none w-24 border-none text-text/20 placeholder:text-text/20"
								placeholder="Search"
							/>
							<div className="flex items-center text-text/20">
								<CommandIcon className="size-4" /> /
							</div>
						</div>
						<button className="grid w-7 aspect-square place-items-center hover:bg-text/5 rounded-md">
							<SunIcon weight="duotone" className="size-5" />
						</button>
						<button className="grid w-7 aspect-square place-items-center hover:bg-text/5 rounded-md">
							<ClockCounterClockwiseIcon weight="duotone" className="size-5" />
						</button>
						<button className="grid w-7 aspect-square place-items-center hover:bg-text/5 rounded-md">
							<BellIcon weight="duotone" className="size-5" />
						</button>
						<button className="grid w-7 aspect-square place-items-center hover:bg-text/5 rounded-md">
							<SidebarIcon weight="duotone" className="size-5" />
						</button>
					</div>
				</header>

				<main className="grid grid-cols-2">
					<RevenueChart />
					<ProjectionsVsActualsChart />
					<RevenueByLocationChart />
					<TotalSalesChart />
				</main>
			</section>
			<Notifications />
		</div>
	)
}
