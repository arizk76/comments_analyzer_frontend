import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const contact = () => {
  return (
    <section className='flex-1 mt-24 px-6 sm:px-12 md:px-24 lg:px-48'>
      <div className='divide-y-2 divide-gray-100 leading-relaxed sh'>
        <div className=' mb-10'>
          <h1 className='font-bold mb-2 md:text-2xl text-gray-800'>Contact</h1>
          <h2 className='text-gray-500 text-lg font-bold'>
            Contact details - You can reach me anyway !
          </h2>
        </div>
      </div>
      {/* Github section */}
      <div className='flex flex-row  bg-gray-100 rounded-md p-5 mb-4'>
        <div className='w-1/3 flex flex-row justify-around items-center'>
          <svg
            className='inline-block w-6 h-auto sm:w-12'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 459.57 448.51'
          >
            <path d='M272.2,330.61c9.27-1.78,18-3.1,26.49-5.15,24.7-5.93,46.14-17.13,60.46-39.15,10-15.44,14.41-32.78,16.22-50.85,1.56-15.65,1.61-31.25-2.82-46.58-3.34-11.53-8.59-22-16.79-30.83-1.79-1.92-2.26-3.47-1.32-6.1,6.7-18.79,4.46-37.37-2.06-55.68-.47-1.32-3.05-3-4.35-2.73-8.62,1.52-17.56,2.45-25.61,5.6-10.14,4-19.63,9.72-29.2,15.06-3.1,1.73-5.7,2.47-9.3,1.59a223.28,223.28,0,0,0-107.29.07,10.13,10.13,0,0,1-8.8-1.62c-14.28-9.33-29.18-17.29-46.26-20.33C110,91.85,109.11,92.27,106,103.52c-4.58,16.41-5.32,32.77.37,49.13a5.77,5.77,0,0,1-.76,4.74c-16.93,20.77-22.72,44.63-20.69,71,1.23,16.08,3.89,31.72,10.72,46.41C108.31,302.05,130.87,317,159,324.49c9.43,2.52,19.11,4.09,29.28,6.22-6.91,6.34-12.17,13.73-13.17,22.84-.76,7-4.61,9.2-10.46,11-25.73,7.83-44.21,1-58.63-21.68-7.82-12.33-18.44-21-33.43-22.92a25.06,25.06,0,0,0-9.33.91c-3.28.87-4.16,3.37-1.82,6.09a24.47,24.47,0,0,0,5.6,4.91c13.1,7.94,21.63,19.67,27.32,33.49,9.83,23.9,28.59,34.13,53.22,35.05,8.42.31,16.9-1.05,25.7-1.66,0,13.75.19,27.87-.11,42-.09,4.21-3.21,7.14-7.41,7.59-3.36.36-7.15.39-10.25-.78-83.23-31.44-135.87-90.09-151.81-178C-18.2,148.79,59.05,33.12,178.4,6,298.29-21.28,413.87,47.18,449,159.38c27,86.06,1.83,184.65-71.84,246a227.72,227.72,0,0,1-73.1,41.13c-10.34,3.51-16.66-1-16.82-11.87,0-1.17,0-2.33,0-3.5,0-15.5-.19-31,.05-46.5C287.62,365.23,286.46,346.29,272.2,330.61Z' />
          </svg>
          <h2 className=' inline-block font-bold mb-2 mt-4 md:text-xl'>
            Github
          </h2>
        </div>
        <div className='flex flex-col ml-12 underline text-blue-500 w-2/3'>
          <a
            className='hover:text-blue-700'
            href='https://github.com/NourSerw'
            target='_blank'
          >
            Github profile
          </a>

          <a
            className='hover:text-blue-700'
            href='https://github.com/NourSerw/Comments-Analyzer'
            target='_blank'
          >
            Github repo for CommentsAnalyzer
          </a>
        </div>
      </div>
      {/* End of github section */}
      {/* LinkedIn section */}
      <div className='flex flex-row items-center bg-gray-100 rounded-md p-5 mb-4'>
        <div className='w-1/3 flex flex-row justify-around items-center'>
          <svg
            className='inline-block w-6 h-auto sm:w-12'
            xmlns='http://www.w3.org/2000/svg'
            width='34'
            height='34'
            viewBox='0 0 34 34'
          >
            <g>
              <path
                d='M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z'
                fill='#0a66c2'
              ></path>
            </g>
          </svg>
          <h2 className=' inline-block font-bold mb-2 mt-4 md:text-xl'>
            LinkedIn
          </h2>
        </div>

        <div className='w-2/3 flex flex-col ml-12 '>
          <a
            className='underline text-blue-500 hover:text-blue-700'
            href='https://www.linkedin.com/in/nour-al-serw/'
            target='_blank'
          >
            LinkedIn Profile
          </a>
          <p>
            where you can check out my educational background as well as my
            professional and industrial experience.
          </p>
        </div>
      </div>
      {/* End of linkedin section */}
      {/* Email section */}
      <div className='flex flex-row items-center bg-gray-100 rounded-md p-5 mb-4'>
        <div className='w-1/3 flex flex-row justify-around items-center'>
          <svg
            className='inline-block w-6 h-auto sm:w-10'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 501.333 501.333'
          >
            <path
              d='M455.466,49.6h-409.6C20.267,49.6,0,69.867,0,95.466v310.4c0,25.6,20.267,45.867,45.867,45.867h409.6
			c25.6,0,45.867-21.333,45.867-45.867v-310.4C501.333,69.867,481.066,49.6,455.466,49.6z M430.933,91.2L250.666,252.267
			L71.466,91.2H430.933z M459.733,405.867c0,2.133-2.133,4.267-4.266,4.267h-409.6c-2.133,0-4.267-2.133-4.267-4.267V122.133
			L236.8,296c4.267,3.2,8.533,5.333,13.867,5.333c5.333,0,9.6-2.133,13.867-5.333l195.2-173.867V405.867z'
            />
          </svg>
          <h2 className=' inline-block font-bold mb-2 mt-4 md:text-xl'>
            Email
          </h2>
        </div>
        <div className='w-2/3 flex flex-col ml-12 '>
          <p>
            Personal{' '}
            <a
              className='underline text-blue-500 hover:text-blue-700'
              href='mailto:nouralserw@gmail.com'
            >
              Email
            </a>
          </p>
          <p>
            If you wish to contact me. If you have any questions, suggestions,
            concerns concerning this wee project of mine please do not hesitate
            to contact me.
          </p>
        </div>
      </div>
    </section>
  );
};

export default contact;

contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NavBar />
      {page}
      <Footer />
    </Layout>
  );
};
