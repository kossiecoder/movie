import Vue from 'vue';
import axios from 'axios';
import { MOVIE_API_KEY } from "../config";

axios.defaults.params = {
	'api_key': MOVIE_API_KEY
};

Vue.prototype.$http = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
});
