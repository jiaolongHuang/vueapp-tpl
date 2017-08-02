<template>
	<div id="blue">
	  <p>I`m content of blue view. Back to <router-link :to="{ name: 'index'}">Index view</router-link></p>
	</div>
</template>

<script>

	export default {
		name: 'blue'
	}
</script>

<style scoped>
p{
  margin-top: 20px;
  color: blue;
  font-size: 18px;
}
</style>