import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

const Header = () => (
  <header className="p-4 bg-blue-600 text-white flex justify-between items-center">
    <div className="text-xl font-bold">My App</div>
    <nav>
      <Link to="/" className="[&.active]:font-bold mx-2">
        Home
      </Link>
      <Link to="/about" className="[&.active]:font-bold mx-2">
        About
      </Link>
      <Link to="/expenses" className="[&.active]:font-bold mx-2">
        Expenses
      </Link>
      <Link to="/create-expense" className="[&.active]:font-bold mx-2">
        Create
      </Link>
    </nav>
  </header>
)

const Footer = () => (
  <footer className="p-4 bg-gray-800 text-white text-center">
    &copy; {new Date().getFullYear()} My App. All rights reserved.
  </footer>
)

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <div className="p-2 flex gap-2">
        <Outlet />
      </div>
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
})
