async function handler(req, res) {
  const userInputURL = req.query.url;
  const userSource = req.query.source;

  const post = {
    url: `${userInputURL}`,
    source: `${userSource}`,
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
    response = await fetch(
      'http://commentsanalyzer.herokuapp.com/ca/twitter/v1/results',
      options
    );
    // console.log(response);
    if (!response.ok) {
      const message = `An error has occurred while fetch request, No response: ${response.status}`;
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
