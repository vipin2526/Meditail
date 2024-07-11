import { Link } from 'react-router-dom'
import islogin from './js/islogin'
import icon from '../asset/icon.jpg'
import logo from '../asset/logo/vector/white.svg'

export default function Header() {
  return (
    <nav className="bg-white dark:bg-zinc-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex ">
            <div className="flex-shrink-0 flex items-center">
              <img src={logo} alt="not found" height={100} width={200}/>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
              <Link to={'/'} className="text-zinc-500 dark:text-zinc-300 hover:text-zinc-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                HOME
              </Link>
              <Link to={'/treatments'} className="text-zinc-500 dark:text-zinc-300 hover:text-zinc-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                PRISCRIPTION
              </Link>
              <Link to={'/hospital'} className="text-zinc-500 dark:text-zinc-300 hover:text-zinc-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                HOSPITAL
              </Link>
              <Link to={'/services'} className="text-zinc-500 dark:text-zinc-300 hover:text-zinc-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                SERVICES
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {islogin() ? (
              <Link to={'/profile'} className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                <img src={icon} className="h-8 w-8 rounded-full" alt="Not Found" />
              </Link>
            ) : (
              <Link to={'/login'} className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                LOGIN
              </Link>
            )}
            <a href="/consultation" className="ml-4 bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded-md text-sm font-medium flex items-center">
              Free Consultation
              <img hidden="true" alt="arrow-right" src="https://openui.fly.dev/openui/16x16.svg?text=→" className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
