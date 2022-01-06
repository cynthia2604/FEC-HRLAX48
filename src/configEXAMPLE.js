const keys = [
  'INSERT_GITHUB_TOKEN',
  'INSERT_GITHUB_TOKEN',
  'INSERT_GITHUB_TOKEN',
  'INSERT_GITHUB_TOKEN',
];

const Options = {
  TOKEN: keys[Math.floor(Math.random() * keys.length)],
  URL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax',
  IMGUR_KEY: 'INSERT_IMGUR_KEY',
};

module.exports = Options;
