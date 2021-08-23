async function handler(req, res) {
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
  let response, responseJson;

  try {
    response = await fetch(process.env.REDDIT_API_URL, options);
    // console.log(response);
    if (!response.ok) {
      const message = `An error has occurred while fetch request, No response: ${response.status}`;
      res.end();
      throw new Error(message);
    }
    responseJson = await response.json();
  } catch (err) {
    console.log(err);
  }
  // console.log(responseJson);
  return res.status(200).json({
    ...responseJson,
  });
}

export default handler;
