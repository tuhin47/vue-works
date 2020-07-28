<script>
import Layout from '@layouts/main.vue'
import LazyYoutubeVideo from 'vue-lazy-youtube-video'
import 'vue-lazy-youtube-video/dist/style.simplified.css'
import { mapGetters } from 'vuex'

export default {
  page: {
    title: 'Video',
    meta: [{ name: 'description', content: 'The Video page.' }],
  },
  components: { Layout, LazyYoutubeVideo },
  computed: {
    ...mapGetters('video', {
      getVideoLinks: 'getAllVideoLinks',
    }),
  },
  methods: {
    foo() {},
  },
}
</script>

<template>
  <Layout>
    <h1>Lazy Loading</h1>
    <div class="videos">
      <ul class="videos__list">
        <li
          v-for="(video, index) in getVideoLinks"
          :key="index"
          class="videos__item"
        >
          <LazyYoutubeVideo
            :src="video.url"
            :preview-image-size="video.previewImageSize"
            :aspect-ratio="video.aspectRatio"
            :thumbnail-listeners="{ load: foo }"
          />
        </li>
      </ul>
    </div>
  </Layout>
</template>

<style lang="scss">
$gap: 20px;

#app {
  font-family: sans-serif;
}

.videos {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 0;
    margin: {
      top: 0;
      bottom: 0;
    }

    list-style: none;
  }

  &__item {
    width: calc(50% - #{$gap / 2});

    &:nth-child(n + 3) {
      margin-top: $gap;
    }
  }
}
</style>
