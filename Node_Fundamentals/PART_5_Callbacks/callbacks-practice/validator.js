const validateAge = (age, callback) => {
   if (typeof age !== 'number') {
      callback(new Error('Age must be a number'), null);
      return;
   }

   if(age < 0 || age > 120) {
      callback(new Error('Age out of range'), null);
    return;
   }

   let category = 'adult';

   if (age < 18) {
      category = 'minor';
   } else if (age > 60) {
      category = 'senior';
   }

   callback(null, { age, category });
};

validateAge(18, (err, result) => {
   if (err) {
      console.error(err.message);
      return;
   }

   console.log(result);
});

validateAge(545, (err, result) => {
   if (err) {
      console.error(err.message);
      return;
   }

   console.log(result);
});

validateAge(-18, (err, result) => {
   if (err) {
      console.error(err.message);
      return;
   }

   console.log(result);
});

validateAge("18", (err, result) => {
   if (err) {
      console.error(err.message);
      return;
   }

   console.log(result);
});