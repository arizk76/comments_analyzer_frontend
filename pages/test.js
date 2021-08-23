import { useEffect, useState } from 'react';

export default function test() {
  const [data, setData] = useState({});
  const [userInputURL, setUserInputURL] = useState('');

  // const handleChange = (e) => {
  //   setUserInputURL(e.target.value);
  // };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(userInputURL);
    const response = await fetch(`/api/redditcors?url=${userInputURL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    console.log(data);

    setData(data);
  };
  // const userInput =
  //   'https://www.reddit.com/r/javascript/comments/p9ehwb/lslint_just_reached_the_500_000_npm_downloads/';

  // useEffect(async () => {
  //   const response = await fetch(`/api/redditcors?url=${userInputURL}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   const data = await response.json();

  //   console.log(data);

  //   return setData(data);
  // }, [setUserInputURL]);

  return (
    <section className='flex-1 mt-24 px-6 sm:px-12 md:px-24 lg:px-48'>
      <div className=' h-12 mb-24'>
        {/* <form onSubmit={handleSubmit}> */}
        <label
          htmlFor='url'
          className='block text-sm font-medium text-gray-700'
        >
          Reddit Post Url
        </label>
        <div className='mt-1 relative rounded-md shadow-sm'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <span className='text-gray-500 sm:text-md'>https://</span>
          </div>
          <input
            type='text'
            name='URL'
            onChange={(evt) => setUserInputURL(evt.target.value)}
            value={userInputURL}
            id='url'
            className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-20 pr-12 sm:text-sm border-gray-300 rounded-md'
            // placeholder='www.reddit.com'
          />
          <div className='absolute inset-y-0 right-0 flex items-center'>
            <label htmlFor='url' className='sr-only'>
              Url
            </label>
            <select
              id='model'
              name='model'
              className='focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'
            >
              <option>General</option>
              <option>Football</option>
              <option>News</option>
            </select>
          </div>
        </div>
        <div>
          <button
            type='submit'
            className='w-full h-8 py-1 bg-gray-600 text-md text-white rounded-lg my-5'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        {/* </form> */}
      </div>
      <h1>{!data ? 'Loading' : ''}</h1>
      <h1>
        <strong>Post Title : </strong>
        {data['Post title']}
      </h1>
      <h1>
        <strong>Negative : </strong>
        {data.neg_percentage} %
      </h1>
      <h1>
        <strong>Positive : </strong>
        {data.positive_percentage} %
      </h1>
      <h1>
        <strong>Neutral : </strong>
        {data.neutral_percentage} %
      </h1>
      <h1>
        <strong>Score : </strong>
        {data.score}
      </h1>
    </section>
  );
}
