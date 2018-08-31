module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'zaim',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "css/bootstrap.min.css" },
      { rel: "stylesheet", href: "css/video.min.css" },
      { rel: "stylesheet", href: "css/animate.min.css" },
      { rel: "stylesheet", href: "css/owl.carousel.css" },
      { rel: "stylesheet", href: "css/fontawesome-all.css" },
      { rel: "stylesheet", href: "css/flaticon.css" },
      { rel: "stylesheet", href: "css/meanmenu.css" },
      { rel: "stylesheet", href: "css/lightbox.css" },
      { rel: "stylesheet", href: "css/progess.css" },
      { rel: "stylesheet", href: "css/style.css" },
      { rel: "stylesheet", href: "css/responsive.css" },
      { rel: "stylesheet", href: "css/colors/switch.css" },
      { rel: "stylesheet", href: "css/colors/color-2.css" },
      { rel: "stylesheet", href: "css/colors/color-3.css" },
      { rel: "stylesheet", href: "css/colors/color-4.css" },
      { rel: "stylesheet", href: "css/colors/color-5.css" },
      { rel: "stylesheet", href: "css/colors/color-6.css" },
      { rel: "stylesheet", href: "css/colors/color-7.css" },
      { rel: "stylesheet", href: "css/colors/color-8.css" },
      { rel: "stylesheet", href: "css/colors/color-9.css" },
    ],

    script: [
      { src: "js/jquery-2.1.4.min.js", body: true },
  		{ src: "js/bootstrap.min.js", body: true },
  		{ src: "js/popper.min.js", body: true },
  		{ src: "js/owl.carousel.min.js", body: true },
  		{ src: "js/jarallax.js", body: true },
  		{ src: "js/jquery.magnific-popup.min.js", body: true },
  		{ src: "js/lightbox.js", body: true },
  		{ src: "js/jquery.meanmenu.js", body: true },
  		{ src: "js/scrollreveal.min.js", body: true },
  		{ src: "js/jquery.counterup.min.js", body: true },
  		{ src: "js/waypoints.min.js", body: true },
  		{ src: "js/jquery-ui.js", body: true },
  		{ src: "js/gmap3.min.js", body: true },
  		{ src: "js/switch.js", body: true },
  		{ src: "js/script.js", body: true },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extractCSS: true,
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
