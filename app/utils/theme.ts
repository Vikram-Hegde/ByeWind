export type Theme = 'light' | 'dark'

// Initialize theme from localStorage or system preference
export function initializeTheme(): Theme {
	if (typeof window === 'undefined') return 'light'

	// Check for saved theme preference
	const savedTheme = localStorage.getItem('theme') as Theme
	if (savedTheme) return savedTheme

	// Check system preference
	const systemPrefersDark = window.matchMedia(
		'(prefers-color-scheme: dark)'
	).matches
	return systemPrefersDark ? 'dark' : 'light'
}

// Toggle theme between light and dark
export function toggleTheme(currentTheme: Theme): Theme {
	const newTheme = currentTheme === 'light' ? 'dark' : 'light'
	localStorage.setItem('theme', newTheme)
	return newTheme
}

// Apply theme to document
export function applyTheme(theme: Theme) {
	if (theme === 'dark') {
		document.documentElement.classList.add('dark')
	} else {
		document.documentElement.classList.remove('dark')
	}
}
