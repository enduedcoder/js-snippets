const companies = [
  {
    name: 'Gravity',
    category: 'Finance',
    start: 1981,
    end: 2004,
  },
  { name: 'Miro', category: 'Design', start: 1992, end: 2008 },
  { name: 'Figma', category: 'Design', start: 1999, end: 2007 },
  {
    name: 'Lucid Spark',
    category: 'Design',
    start: 1989,
    end: 2010,
  },
  {
    name: 'Invision',
    category: 'Design',
    start: 2009,
    end: 2014,
  },
  {
    name: 'Uber',
    category: 'Transportation',
    start: 1987,
    end: 2010,
  },
  { name: 'Dominos', category: 'Restaurant', start: 1986, end: 1996 },
  {
    name: 'McDonalds',
    category: 'Restaurant',
    start: 2011,
    end: 2016,
  },
  {
    name: 'Dell',
    category: 'Retail',
    start: 1981,
    end: 1989,
  },
];

const ages = [
  33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32,
];

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// companies.forEach(function (element) {
//   console.log(`element: ${JSON.stringify(element)}`);
// });

// const myFunc = (element) => {
//   console.log(`element: ${JSON.stringify(element)}`);
// };
// companies.forEach(myFunc);

// filter

// let legalAge = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 18) {
//     legalAge.push(ages[i]);
//   }
// }
// console.log(legalAge);

// const canDrink = ages.filter(function (age) {
//   if (age >= 18) {
//     return true;
//   }
// });
// console.log(canDrink);

// Filter the retial companies
// const retailCompanies = companies.filter(
//   (company) => company.category === 'Retail'
// );
// console.log(retailCompanies);

// const canDrink1 = ages.filter((age) => age >= 18);
// console.log(canDrink1);

// Filter 90s companies
// const getCompanies = companies.filter(
//   (company) => company.start >= 1990 && company.start < 2000
// );
// console.log(getCompanies);

// Get companies that lasted 10 years or more
// const companiesOverLastedTenYears = companies.filter(
//   (company) => company.end - company.start >= 10
// );
// console.log(companiesOverLastedTenYears);

// map
// Create array of company names
// const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

// const twoTimesAges = ages.map((age) => age * 2);
// console.log(twoTimesAges);

// const companyNameandDuration = companies.map((company) => {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });
// console.log(companyNameandDuration);

// const companyNameandDuration1 = companies.map(
//   (company) => `${company.name} [${company.start} - ${company.end}]`
// );
// console.log(companyNameandDuration1);

// const ageMap = ages
//   .map((age) => Math.sqrt(age))
//   .map((age) => age * 2);
// console.log(ageMap);

// sort
// // Sort companies by start year
// const sortCompanies = companies.sort((company1, company2) => {
//   if (company1.start < company2.start) {
//     return -1;
//   }
// });
// console.log(sortCompanies);

// const sortedCompanies1 = companies.sort((company1, company2) =>
//   company1 < company2 ? -1 : 1
// );
// console.log(sortedCompanies1);

// Sort ages
// const sortedAges = ages.sort((a, b) => (a < b ? -1 : 1));
// console.log(sortedAges);
