let baseURL = 'http://localhost:3032';

// loading messages from the server
// export const getAllCharities = async () => {
//   // fetch charityJson
//   const allCharities = await fetch(baseURL + '/charities');
//   let charitiesJson = await allCharities.json();
//   return charitiesJson;
// };

// loading messages from the server
export const getAllPledges = async () => {
  // fetch charityJson
  const allPledges = await fetch(baseURL + '/pledges');
  let pledgesJson = await allPledges.json();
  return pledgesJson;
};

export const sendPledgeInfo = async pledgeInfo => {
  console.log('in sendPledgeInfo');
  fetch(`${baseURL}/pledges`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pledgeInfo),
  }).then(response => {
    if (!response.ok) {
      throw new Error('request failed');
    }
    return response.json();
  });
};
