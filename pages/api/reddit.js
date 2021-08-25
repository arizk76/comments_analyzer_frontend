import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
  methods: ['POST'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  // Rest of the API logic

  const userInputURL = req.query.url;

  const post = {
    url: `${userInputURL}`,
    model: 'General',
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  };
  let response, responseJson, statusCode, errorMessage;
  // try {
  // await fetch(process.env.REDDIT_API_URL, options)
  //   .then((response) => response.json())
  //   .then((responseJson) => json(response));

  response = await fetch(process.env.REDDIT_API_URL, options);
  statusCode = response.status;
  // // console.log(response);

  // responseJson = await response.json();

  // Handle errors from backend server
  if (!response.ok) {
    //   // error 1
    if (statusCode === 500) {
      errorMessage = `(500) Internal Server Error :server error response code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.`;
      // console.log(new Error(errorMessage));
      return res.status(500).json({
        ServerError: errorMessage,
      });
      // error 2
    } else if (statusCode === 503) {
      errorMessage = `(503) Service Unavailable :server is currently unable to handle the request due to a temporary overload or scheduled maintenance.`;
      // console.log(new Error(errorMessage));
      return res.status(503).json({
        ServerError: errorMessage,
      });
      // error 3
    } else if (statusCode === 504) {
      errorMessage = `(504) Gateway Timeout :server error response code indicates that the server, while acting as a gateway or proxy, did not get a response in time from the upstream server that it needed in order to complete the request.`;
      // console.log(new Error(errorMessage));
      return res.status(504).json({
        ServerError: errorMessage,
      });
      // rest of errors
    } else if (statusCode > 500) {
      errorMessage = `${statusCode} Server Error :server is currently not working`;
      console.log(errorMessage);
      return res.status(response.status).json({
        ServerError: errorMessage,
      });
    }
  } else {
    responseJson = await response.json();
  }
  // } catch (err) {
  //   console.log(err);
  //   return res.status(response.status).json({
  //     ...err,
  //   });
  // }

  // console.log(responseJson);
  // console.log('response status code: ', statusCode);
  return res.status(200).json({
    ...responseJson,
  });
}

export default handler;
