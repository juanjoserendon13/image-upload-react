exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? 'https://test-url-deployment'
  : 'http://localhost:3000'