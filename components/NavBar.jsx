import { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [active, setActive] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  let menu;

  if (showMenu) {
    menu = (
      <div
        className='origin-top-right absolute right-0 top-0 mt-2 mr-2 w-48 h-48 rounded-md shadow-lg py-3 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
        onClick={() => setShowMenu(false)}
      >
        <ul className=' h-40  py-3  flex flex-col justify-around'>
          <li>
            <Link href='/'>
              <a className='bg-gray-100 px-1 py-0  m-4 text-gray-600 hover:text-gray-900 border-transparent hover:border-b-2 hover:border-gray-400 '>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a className='bg-gray-100 px-1 py-0  m-4 text-gray-600 border-transparent hover:border-b-2 hover:border-gray-400'>
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a className='bg-gray-100 px-1 py-0 m-4 text-gray-600 border-transparent hover:border-b-2 hover:border-gray-400'>
                Contact
              </a>
            </Link>
          </li>
          <li>
            <Link href='/changelog'>
              <a className='bg-gray-100 px-1 py-0 m-4 text-gray-600 border-transparent hover:border-b-2 hover:border-gray-400'>
                ChangeLog
              </a>
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <nav className='flex flex-row w-full px-6 sm:px-12 md:px-24 lg:px-48 py-4 bg-[#fcfcfc] content-between items-center h-20 shadow-sm'>
      <div className='flex-1'>
        <div className=' text-md sm:text-lg font-bold sm:tracking-wider lg:text-xl'>
          CommentAnalyzer
        </div>
      </div>

      {/* Navigation links show on medium and large screens */}

      <div className=' hidden sm:flex  flex-row content-between '>
        <Link href='/'>
          <a className=' py-0 text-lg text-gray-500 hover:text-gray-800'>
            Home
          </a>
        </Link>
        <Link href='/about'>
          <a className='py-0 text-lg text-gray-500 hover:text-gray-800 md:ml-10 ml-5'>
            About
          </a>
        </Link>
        <Link href='/contact'>
          <a className='py-0 text-lg text-gray-500 hover:text-gray-800 md:ml-10 ml-5'>
            Contact
          </a>
        </Link>
        <Link href='/changelog'>
          <a className='py-0 text-lg text-gray-500 hover:text-gray-800 md:ml-10 ml-5'>
            ChangeLog
          </a>
        </Link>
      </div>

      {/* Humbugger mobile menu button only on small screen  */}

      <div className='sm:hidden flex items-center '>
        <button onClick={() => setShowMenu(!showMenu)}>
          <svg
            className=' w-8 h-8 text-gray-700 hover:text-gray-500 '
            x-show='!showMenu'
            fill='none'
            strokeLinecap='square'
            strokeLinejoin='square'
            strokeWidth='1.5'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </button>
        {menu}
      </div>
    </nav>
  );
};

export default NavBar;
