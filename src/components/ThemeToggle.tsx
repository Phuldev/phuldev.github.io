import React from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [isDark, setIsDark] = React.useState(() => {
    // Check localStorage and system preference on initial load
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) {
        return stored === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-lg"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <span className={`absolute inset-0 transform transition-transform duration-300 ${isDark ? 'rotate-0' : 'rotate-90 opacity-0'}`}>
          <Moon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </span>
        <span className={`absolute inset-0 transform transition-transform duration-300 ${isDark ? '-rotate-90 opacity-0' : 'rotate-0'}`}>
          <Sun className="w-6 h-6 text-orange-400" />
        </span>
      </div>
    </button>
  );
}