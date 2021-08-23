import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='flex flex-row w-full px-6 sm:px-12 md:px-24 lg:px-48 py-4 bg-[#fcfcfc] content-between shadow-sm'>
      <div className='flex-1'>
        <Link href='/'>
          <a className=' text-md sm:text-lg font-bold sm:tracking-wider lg:text-xl'>
            CommentAnalyzer
          </a>
        </Link>
      </div>

      {/* Navigation links show on medium and large screens */}

      <div className=' hidden sm:flex  flex-row content-between'>
        <Link href='/'>
          <a className='border-transparent hover:border-b-2 hover:border-gray-400'>
            Home
          </a>
        </Link>
        <Link href='/about'>
          <a className='border-transparent hover:border-b-2 hover:border-gray-400 md:ml-10 ml-5'>
            About
          </a>
        </Link>
        <Link href='/contact'>
          <a className='border-transparent hover:border-b-2 hover:border-gray-400 md:ml-10 ml-5'>
            Contact
          </a>
        </Link>
        <Link href='/changeLog'>
          <a className='border-transparent hover:border-b-2 hover:border-gray-400 md:ml-10 ml-5'>
            ChangeLog
          </a>
        </Link>
      </div>

      {/* Humbugger mobile menu button only on small screen  */}

      <div className='sm:hidden flex items-center '>
        <button>
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
      </div>
    </nav>
  );
};

export default NavBar;
