<template>
  <div>
    <div class="bg-image bg-primary">
      <index-slogan></index-slogan>
      <index-news></index-news>
      <index-rating></index-rating>
    </div>
    <div class="container-fluid bg-secondary">
      <index-feature></index-feature>
    </div>
    <div class="container-fluid bg-primary" id="#FAQ" ref="FAQ">
      <index-faq></index-faq>
    </div>
    <div class="container-fluid bg-secondary pb-5">
      <index-address></index-address>
    </div>
  </div>
</template>
<script>
import indexSlogan from '@/components/ching/indexSlogan.vue'
import indexNews from '@/components/ching/indexNews.vue'
import indexRating from '@/components/ching/indexRating.vue'
import indexFeature from '@/components/ching/indexFeature.vue'
import indexFaq from '@/components/ching/indexFAQ.vue'
import indexAddress from '@/components/ching/indexAddress.vue'

export default {
  data() {
    return {
      news: [],
      loader: null
    }
  },
  // 跳轉
  mounted() {
    if (this.$route.hash === '#FAQ') {
      setTimeout(() => {
        this.scrollToSection()
      }, 500)
    }
  },
  methods: {
    // 跳轉
    scrollToSection() {
      this.$refs.FAQ.scrollIntoView({block: "center",  behavior: 'smooth' })
    }
  },
  components: {
    indexSlogan,
    indexNews,
    indexRating,
    indexFeature,
    indexFaq,
    indexAddress
  }
}
</script>

<style lang="scss" scoped>
.bg-image {
  background-image: url('/首頁圖片/bg-shape.png');
  background-size: cover;
  background-position: bottom;
}
</style>
