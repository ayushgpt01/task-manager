import { NavLink } from "react-router-dom";
import NotificationSVG from "../Common/SVG/NotificationSVG";
import HamburgerSVG from "../Common/SVG/HamburgerSVG";
import CloseSVG from "../Common/SVG/CloseSVG";

interface NavigationLinkProps {
  route: string;
  label: string;
  isMobile?: boolean;
}

const NavigationLink = ({
  route,
  label,
  isMobile = false,
}: NavigationLinkProps) => {
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        `${
          isActive
            ? "bg-gray-900 text-white"
            : "text-gray-300 hover:bg-gray-700 hover:text-white"
        } rounded-md px-3 py-2 font-medium ${
          isMobile ? "block text-base" : "text-sm"
        }`
      }
    >
      {label}
    </NavLink>
  );
};

const UserDropdownLink = ({ route, label, isMobile }: NavigationLinkProps) => {
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        `${
          isMobile
            ? "block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            : "block px-4 py-2 text-sm text-gray-700"
        } ${isActive ? "bg-gray-100" : ""}`
      }
      role='menuitem'
      id={`user-menu-${label}`}
    >
      {label}
    </NavLink>
  );
};

const NotificationButton = ({ isMobile = false }: { isMobile?: boolean }) => {
  return (
    <button
      type='button'
      className={`relative ${
        isMobile ? "ml-auto flex-shrink-0 " : ""
      }rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`}
    >
      <span className='absolute -inset-1.5'></span>
      <span className='sr-only'>View notifications</span>
      <NotificationSVG />
    </button>
  );
};

const Navbar = () => {
  return (
    <nav className='bg-gray-800'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <img
                className='h-8 w-8'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                alt='Your Company'
              />
            </div>
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-4'>
                <NavigationLink route='/dashboard' label='Dashboard' />
                <NavigationLink route='/teams' label='Teams' />
              </div>
            </div>
          </div>
          <div className='hidden md:block'>
            <div className='ml-4 flex items-center md:ml-6'>
              <NotificationButton />

              {/* <!-- Profile dropdown --> */}
              <div className='relative ml-3'>
                <div>
                  <button
                    type='button'
                    className='relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                    id='user-menu-button'
                    aria-expanded='false'
                    aria-haspopup='true'
                  >
                    <span className='absolute -inset-1.5'></span>
                    <span className='sr-only'>Open user menu</span>
                    <img
                      className='h-8 w-8 rounded-full'
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </button>
                </div>

                {/* <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
                --> */}
                <div
                  className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='user-menu-button'
                >
                  {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                  <UserDropdownLink route='/profile' label='Profile' />
                  <UserDropdownLink route='/settings' label='Settings' />
                  <UserDropdownLink route='/signout' label='Sign out' />
                </div>
              </div>
            </div>
          </div>
          <div className='-mr-2 flex md:hidden'>
            {/* <!-- Mobile menu button --> */}
            <button
              type='button'
              className='relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='absolute -inset-0.5'></span>
              <span className='sr-only'>Open main menu</span>
              {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
              <HamburgerSVG />
              {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
              <CloseSVG />
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className='md:hidden' id='mobile-menu'>
        <div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
          <NavigationLink route='/dashboard' label='Dashboard' isMobile />
          <NavigationLink route='/teams' label='Teams' isMobile />
        </div>
        <div className='border-t border-gray-700 pb-3 pt-4'>
          <div className='flex items-center px-5'>
            <div className='flex-shrink-0'>
              <img
                className='h-10 w-10 rounded-full'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
            </div>
            <div className='ml-3'>
              <div className='text-base font-medium leading-none text-white'>
                Tom Cook
              </div>
              <div className='text-sm font-medium leading-none text-gray-400'>
                tom@example.com
              </div>
            </div>
            <NotificationButton isMobile />
          </div>
          <div className='mt-3 space-y-1 px-2'>
            <UserDropdownLink route='/profile' label='Your Profile' isMobile />
            <UserDropdownLink route='/settings' label='Settings' isMobile />
            <UserDropdownLink route='/signout' label='Sign out' isMobile />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
