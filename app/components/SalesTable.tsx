import { motion } from 'framer-motion'

interface Product {
	name: string
	price: number
	quantity: number
	amount: number
}

export default function SalesTable({ className }: { className?: string }) {
	const products: Product[] = [
		{
			name: 'ASOS Ridley High Waist',
			price: 79.49,
			quantity: 82,
			amount: 6518.18,
		},
		{
			name: 'Marco Lightweight Shirt',
			price: 128.5,
			quantity: 37,
			amount: 4754.5,
		},
		{
			name: 'Half Sleeve Shirt',
			price: 39.99,
			quantity: 64,
			amount: 2559.36,
		},
		{
			name: 'Lightweight Jacket',
			price: 20.0,
			quantity: 184,
			amount: 3680.0,
		},
		{
			name: 'Marco Shoes',
			price: 79.49,
			quantity: 64,
			amount: 1965.81,
		},
	]

	return (
		<motion.div 
			className={`bg-primary-light p-4 rounded-lg ${className}`}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			whileHover={{ scale: 1.01 }}
		>
			<motion.h3 
				className="font-semibold mb-4"
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.2 }}
			>
				Top Selling Products
			</motion.h3>
			<motion.div 
				className="overflow-x-auto"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3 }}
			>
				<table className="min-w-full">
					<thead>
						<motion.tr 
							className="text-text/60"
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
						>
							<th className="text-left py-2 px-4">Name</th>
							<th className="text-left py-2 px-4">Price</th>
							<th className="text-left py-2 px-4">Quantity</th>
							<th className="text-left py-2 px-4">Amount</th>
						</motion.tr>
					</thead>
					<tbody>
						{products.map((product, index) => (
							<motion.tr 
								key={index} 
								className="border-t border-text/10"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ 
									delay: 0.5 + index * 0.1,
									type: "spring",
									stiffness: 100,
									damping: 10
								}}
								whileHover={{ 
									scale: 1.01,
									backgroundColor: "rgba(255, 255, 255, 0.05)" 
								}}
							>
								<td className="py-2 px-4">{product.name}</td>
								<td className="py-2 px-4">${product.price.toFixed(2)}</td>
								<td className="py-2 px-4">{product.quantity}</td>
								<td className="py-2 px-4">${product.amount.toFixed(2)}</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</motion.div>
		</motion.div>
	)
}
