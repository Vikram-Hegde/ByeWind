import { MoonIcon, SunIcon } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import type { Theme } from '../utils/theme'

interface ThemeToggleProps {
	theme: Theme
	onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
	return (
		<motion.button
			onClick={onToggle}
			className="relative p-2 rounded-md hover:bg-text/5 transition-colors"
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			transition={{ type: 'spring', stiffness: 400, damping: 17 }}
		>
			<motion.div
				initial={false}
				animate={{
					rotate: theme === 'dark' ? 360 : 0,
					scale: theme === 'dark' ? [1, 1.2, 1] : [1, 0.8, 1],
				}}
				transition={{
					duration: 0.5,
					ease: 'easeInOut',
					times: [0, 0.6, 1],
				}}
			>
				{theme === 'light' ? (
					<SunIcon className="size-5 text-yellow-500" weight="duotone" />
				) : (
					<MoonIcon className="size-5 text-blue-400" weight="duotone" />
				)}
			</motion.div>
		</motion.button>
	)
}
