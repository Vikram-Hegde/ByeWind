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
import IconButton from '~/components/IconButton'
import { Link } from 'react-router'
import Notifications from '~/components/Notifications'
import RevenueChart from '~/components/LineChart'
import ProjectionsVsActualsChart from '~/components/BarChart'
import RevenueByLocationChart from '~/components/GeoChart'
import TotalSalesChart from '~/components/PieChart'
import StatsCard from '~/components/StatsCard'
import SalesTable from '~/components/SalesTable'

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
					<IconButton icon={SidebarIcon} />
					<IconButton icon={StarIcon} />
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
						<IconButton icon={SunIcon} />
						<IconButton icon={ClockCounterClockwiseIcon} />
						<IconButton icon={BellIcon} />
						<IconButton icon={SidebarIcon} />
					</div>
				</header>

				<main className="p-7 space-y-6">
					<div className="font-semibold">eCommerce</div>

					{/* Charts */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
						{/* Stats Cards */}
						<div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
							<StatsCard
								label="Customers"
								value="3,781"
								change={11.01}
								className="bg-primary-blue"
							/>
							<StatsCard
								label="Orders"
								value="1,219"
								change={-0.03}
								className="bg-primary-light"
							/>
							<StatsCard
								label="Revenue"
								value="695"
								change={15.03}
								prefix="$"
								className="bg-primary-purple"
							/>
							<StatsCard label="Growth" value="30.1" change={6.08} suffix="%" />
						</div>
						<ProjectionsVsActualsChart />
						<RevenueChart />
						<RevenueByLocationChart />
						<TotalSalesChart />
					</div>

					{/* Sales Table */}
					<div className="col-span-full">
						<SalesTable />
					</div>
				</main>
			</section>
			<Notifications />
		</div>
	)
}
