/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
//    API_URL: 'http://127.0.0.1:8000/',
    API_URL: 'https://job-platform-django.herokuapp.com',
//    API_URL: 'http://jobplatform-env-1.eba-kixa3pu9.us-east-1.elasticbeanstalk.com'
  },
};

module.exports = nextConfig;