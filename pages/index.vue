<template>
  <body>
    <Header/>
    <Reason/>
  </body>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Header from '~/components/Header.vue'
import SearchCourse from '~/components/SearchCourse.vue'
import Reason from '~/components/Reason.vue'
import Footer from '~/components/Footer.vue'

export default {
  // layout: 'custom',
  components: {
    AppLogo,
    Header,
    SearchCourse,
    Reason,
    Footer
  }
}
</script>

<style>
</style>
