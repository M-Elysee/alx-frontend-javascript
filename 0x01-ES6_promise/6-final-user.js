import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const response = [];
  signUpUser(firstName, lastName).then((res) => {
    console.log()
    response.push({ status: 'Resolved', value: `${res}` });

    uploadPhoto(fileName).catch((err) => {
      response.push({ status: 'Rejected', value: `${err}` });
    })

  }).catch((err) => {
    response.push({ status: 'Rejected', value: `${err}` });
  });
  return response;
}

