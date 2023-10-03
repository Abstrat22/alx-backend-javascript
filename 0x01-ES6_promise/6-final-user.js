import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  return Promise
    .allSettled([signUpPromise, uploadPromise])
    .then((results) => {
      const profileStatus = [];
      results.forEach((result) => {
        profileStatus.push({ status: result.status });
        if (result.status === 'fullfilled') {
          profileStatus.push({ value: result.value });
        }
      });
      return profileStatus;
    });
}
