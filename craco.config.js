/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
    webpack: {
      alias: {
        "@modal": path.resolve(__dirname, 'src/lib/interface/'),
        "@utils": path.resolve(__dirname,'src/lib/utils/'),
        "@components": path.resolve(__dirname,'src/lib/components/'),
        "@constant": path.resolve(__dirname,'src/lib/constant/'),
        "@hooks": path.resolve(__dirname,'src/lib/hooks/'),
        "@pages": path.resolve(__dirname,'src/pages/')
      }
    }
  }