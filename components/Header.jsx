import React from 'react'
import DarkMode from './DarkMode'
import UserMenu from './UserMenu'

const Header = () => {
  return (
    <header className="w-full shadow-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
      <div className="h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          MyApp
        </div>
        <div className="flex items-center gap-2">
          <DarkMode />
          <UserMenu />
        </div>
      </div>
    </header>
  )
}

export default Header