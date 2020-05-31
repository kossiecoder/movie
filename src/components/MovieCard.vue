<template>
  <div>
    <router-link style="display: inline-block; width: 100%;" :to="'/movies/' + movie.id">
      <b-img fluid rounded :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"></b-img>
    </router-link>
    <div class="mt-3 mb-3">
      <div>{{movie.title}}</div>
      <div>{{movie.release_date | formatReleaseDate}}</div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    formatReleaseDate(value) {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      const date = new Date(value);

      return months[date.getMonth()] + " " + date.getFullYear();
    }
  },
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
};
</script>