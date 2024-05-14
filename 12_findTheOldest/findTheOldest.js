const findTheOldest = function (people) {
  return people.reduce((oldest, current) => {
    const currentAge = !current.yearOfDeath
      ? new Date().getFullYear() - current.yearOfBirth
      : current.yearOfDeath - current.yearOfBirth;
    if (!("name" in oldest) || oldest.age < currentAge) {
      oldest["name"] = current.name;
      oldest["age"] = currentAge;
    }
    return oldest;
  }, {});
};

// ideal solution
function getAge(birth, death) {
  death ??= new Date().getFullYear();
  return death - birth;
}

const findOldest = function (people) {
  return people.reduce((oldest, current) => {
    const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    return oldestAge >= currentAge ? oldest : current;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
