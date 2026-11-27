
import { useState, type ReactNode } from 'react'

import Topbar from '../components/Topbar'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import ExtraFeatures from '../components/ExtraFeatures'

type MainLayoutProps = {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <>
      {/* Header */}
      <header className="header-one header--sticky">
        <Topbar />

        <Header
          onSearch={() => setIsSearchOpen(true)}
          onMenuToggle={() => setIsSidebarOpen(true)}
        />
      </header>

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Page Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Search, RTL and Scroll Progress */}
      <ExtraFeatures
        searchOpen={isSearchOpen}
        onSearchClose={() => setIsSearchOpen(false)}
      />
    </>
  )
}
