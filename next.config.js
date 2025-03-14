const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
   async headers() {
       return [
           {
               source: '/:path*',
               headers: [
                   {
                       key: 'Access-Control-Allow-Origin',
                       value: '*',
                   },
               ],
           },
       ];
   },
};
