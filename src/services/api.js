let BaseURL = 'http://localhost:3032';

// loading messages from the server
// export const getAllCharities = async () => {
//   // fetch charityJson
//   const allCharities = await fetch(BaseURL + '/charities');
//   let charitiesJson = await allCharities.json();
//   return charitiesJson;
// };

// loading messages from the server
export const getAllPledges = async () => {
  // fetch charityJson
  const allPledges = await fetch(BaseURL + '/pledges');
  let pledgesJson = await allPledges.json();
  return pledgesJson;
};

export const sendPledgeInfo = async pledgeInfo => {
  console.log('in sendPledgeInfo');
  fetch(BaseURL + '/pledges', {
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

export const getUserInfo = () => {
  return {
    id: 123425245,
    name: '',
    kids: [
      {
        id: 1245435454545,
        name: '',
        runningTotal: '',
        avatarImagePath: '',
      },
      {
        id: 2454354545245245,
        name: '',
        runningTotal: '',
        avatarImagePath: '',
      },
    ],
  };
};
