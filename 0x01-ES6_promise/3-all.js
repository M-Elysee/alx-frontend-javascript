import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return uploadPhoto().then((res) => {
    createUser().then(({ firstName, lastName }) => {
      console.log(`${res.body} ${firstName} ${lastName}`);
    }).catch(() => console.log('Signup system offline'));
  }).catch(() => console.log('Signup system offline'));
}
