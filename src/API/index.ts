const get = (apiUrl: string) => {
  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    },
  }).then(response => {
    return response.json();
  });
};

export default { get };