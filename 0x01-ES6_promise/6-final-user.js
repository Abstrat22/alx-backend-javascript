import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const promiseStatus = [];
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          promiseStatus.push({ status: result.status, value: result.value });
        } else {
          promiseStatus.push({ status: result.status, value: `${result.reason}` });
        }
      });
      console.log(promiseStatus);
      return promiseStatus;
    });
}
