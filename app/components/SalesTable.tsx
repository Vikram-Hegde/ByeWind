interface Product {
	name: string
	price: number
	quantity: number
	amount: number
}

export default function SalesTable() {
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
		<div className="bg-white/50 p-4 rounded-lg">
			<h3 className="font-semibold mb-4">Top Selling Products</h3>
			<div className="overflow-x-auto">
				<table className="min-w-full">
					<thead>
						<tr className="text-text/60">
							<th className="text-left py-2 px-4">Name</th>
							<th className="text-left py-2 px-4">Price</th>
							<th className="text-left py-2 px-4">Quantity</th>
							<th className="text-left py-2 px-4">Amount</th>
						</tr>
					</thead>
					<tbody>
						{products.map((product, index) => (
							<tr key={index} className="border-t border-text/10">
								<td className="py-2 px-4">{product.name}</td>
								<td className="py-2 px-4">${product.price.toFixed(2)}</td>
								<td className="py-2 px-4">{product.quantity}</td>
								<td className="py-2 px-4">${product.amount.toFixed(2)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
