<template>
  <div v-if="!loading">
    <div
      style="height: 300px; background-size: cover; background-repeat: no-repeat"
      :style="{backgroundImage: 'url(https://image.tmdb.org/t/p/original' + movie.backdrop_path + ')'}"
    >
      <div class="ml-3">
        <router-link to="/movies" style="font-size: 50px; text-decoration:none; color:white">&#8592;</router-link>
      </div>
    </div>

    <b-container>
      <div class="d-flex">
        <div>
          <b-img
            rounded
            style="margin-top: -80px;"
            width="120"
            :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
          ></b-img>
        </div>
        <div class="ml-3">
          <h2>{{ movie.title }}</h2>
          <div class="text-muted">{{ getReleasedYear }}</div>
          <div class="text-muted">{{ movie.runtime | convertTime}}</div>
        </div>
      </div>
      <hr style="border-color: white" />
      <div>
        <h4>Overview</h4>
        <div>{{ movie.overview }}</div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  filters: {
    convertTime(value) {
      return Math.floor(value / 60) + "h " + (value % 60) + "min";
    }
  },
  data() {
    return {
      loading: true,
      movie: null
    };
  },
  created() {
    this.getMovieDetail();
  },
  computed: {
    getReleasedYear() {
      if (this.movie) {
        return new Date(this.movie.release_date).getFullYear();
      }

      return "N/A";
    }
  },
  methods: {
    async getMovieDetail() {
      try {
        const res = await this.$http.get("/movie/" + this.$route.params.id);

        this.movie = res.data;
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style>
</style>