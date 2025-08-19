import type { Icon } from '@phosphor-icons/react'
import { type ButtonHTMLAttributes } from 'react'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: Icon
	weight?: 'regular' | 'bold' | 'duotone' | 'fill' | 'light' | 'thin'
	isActive?: boolean
}

export default function IconButton({
	icon: IconComponent,
	weight = 'duotone',
	isActive,
	...props
}: IconButtonProps) {
	return (
		<button
			className="grid w-7 aspect-square place-items-center hover:bg-text/5 rounded-md"
			data-active={isActive}
			{...props}
		>
			<IconComponent weight={weight} className="size-5" />
		</button>
	)
}
