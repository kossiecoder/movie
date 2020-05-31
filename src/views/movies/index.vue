<template>
  <b-container>
    <h1>THE MOVIE DB</h1>
    <div>
      <b-input @keyup.enter="searchMovie" v-model="search" placeholder="Search"></b-input>
    </div>
    <div>
      <h2>
        {{ searched ? 'Searched' : 'Popular' }} Movies
        <b-spinner v-if="loading" label="Loading..."></b-spinner>
      </h2>
      <b-row>
        <b-col cols="6" md="3" v-for="movie in movies.results" :key="movie.id">
          <MovieCard :movie="movie" />
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import MovieCard from "@/components/MovieCard";
export default {
  components: {
    MovieCard
  },
  created() {
    this.getMovies();
  },
  data() {
    return {
      searched: false,
      loading: true,
      search: "",
      movies: {
        results: [],
        page: null,
        total_pages: null,
        total_results: null
      }
    };
  },
  methods: {
    async getMovies() {
      this.loading = true;
      try {
        const res = await this.$http.get("/movie/popular");

        Object.assign(this.movies, res.data);
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
    async searchMovie() {
      this.loading = true;
      try {
        if (this.search) {
          const res = await this.$http.get("/search/movie", {
            params: {
              query: this.search
            }
          });
          console.log(res.data);
          Object.assign(this.movies, res.data);
          this.searched = true;
        } else {
          this.getMovies();
          this.searched = false;
        }
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
