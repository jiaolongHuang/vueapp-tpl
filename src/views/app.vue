<template>
	<div id="app" class="app">
    <p>App View</p>
		<router-view></router-view>
	</div>
</template>

<script>
	import '../assets/css/globle.css'

	export default {
		name: 'app',
		data () {
			return {

			}
		},
		mounted () {
			
		},
		methods: {
			
		},
		components: {
			
		}
	}
</script>
<style scoped>
p{
	font-size: 24px;
  margin-bottom: 20px;
}
</style>