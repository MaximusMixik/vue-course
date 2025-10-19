<template>
	<PostList :list="myPosts" @dislike="onDislike" @like="onLike" />
</template>

<script>
import posts from "../constants/5_posts";
import PostList from "./PostList";

export default {
	name: "TaskLesson5",
	data() {
		return { myPosts: posts };
	},
	components: {
		PostList,
	},
	computed: {},
	methods: {
		onDislike(personId) {
			// alert(personId);
			const person = this.myPosts.find((person) => person.id === personId);
			person.likes--;
		},
		onLike(personId) {
			// alert(personId);
			const person = this.myPosts.find((person) => person.id === personId);
			person.likes++;
		},
	},
};
</script>
