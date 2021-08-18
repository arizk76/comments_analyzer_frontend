import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <header className='w-full flex flex-col fixed sm:relative bg-white top-0 left-0 right-0'>
      <nav
        id='site-menu'
        className='flex flex-col sm:flex-row w-full justify-between items-center px-4 md:px-24 sm:px-6 py-1 bg-white shadow sm:shadow-none '
      >
        <div className='w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center'>
          <Link href='/'>
            <a className='no-underline py-1'>
              <h1 className='font-bold text-lg tracking-widest'>
                CommentAnalyzer
              </h1>
            </a>
          </Link>
          <button
            id='menuBtn'
            className='block sm:hidden focus:outline-none py-2 '
            type='button'
          >
            MobileMenu
          </button>
        </div>

        <div
          id='menu'
          className='w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden'
        >
          <Link href='/'>
            <a className='text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:pl-8 py-2 sm:py-1 sm:pt-2'>
              Home
            </a>
          </Link>
          <Link href='/about'>
            <a className='text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:pl-8 py-2 sm:py-1 sm:pt-2'>
              About
            </a>
          </Link>
          <Link href='/contact'>
            <a className='text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:pl-8 py-2 sm:py-1 sm:pt-2'>
              Contact
            </a>
          </Link>
          <Link href='/changeLog'>
            <a className='text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:pl-8 py-2 sm:py-1 sm:pt-2'>
              ChangeLog
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
