export const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://heroku-test'
  : 'http://localhost:8080'