const keys = [
  'INSERT_GITHUB_TOKEN1',
  'INSERT_GITHUB_TOKEN2',
  'INSERT_GITHUB_TOKEN3',
  'INSERT_GITHUB_TOKEN4',
  'INSERT_GITHUB_TOKEN5',
  'INSERT_GITHUB_TOKEN6',
  'INSERT_GITHUB_TOKEN7',
  'INSERT_GITHUB_TOKEN8',
  'INSERT_GITHUB_TOKEN9',
  'INSERT_GITHUB_TOKEN10',
];

const Options = {
  TOKEN: keys[Math.floor(Math.random() * keys.length)],
  URL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax',
  IMGUR_KEY: 'INSERT_IMGUR_KEY',
};

module.exports = Options;
