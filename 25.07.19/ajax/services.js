'use strict';

app.constant('urlString', 'https://jsonplaceholder.typicode.com/posts');

app.value('response', { data: '' });

app.service('postsService', function($http, urlString, response) {
	this.getAllPosts = () =>
		$http.get(urlString).then(res => {
			response.data = res.data;
		});
	this.getPostById = id =>
		$http.get(`${urlString}/${id}`).then(res => {
			response.data = res.data;
		});
});
