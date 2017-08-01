<template>
	<div id="index" class="index">
   	<p>Hello, Index View</p>
		<div class="main-wrap" :class="{'noShowNav': !showNav}">
      <router-view></router-view>
			<com-footer></com-footer>
		</div>
	</div>
</template>

<script>
	import ComFooter from '../components/footer/footer.vue'

	export default {
		name: 'index',
		data () {
			return {
				showNav: true
			}
		},
		computed: {
			
		},	
		beforeCreate() {

		},
		created(){

		},
		beforeUpdate() {

		},
		mounted(){
		},
		beforeDestroy(){

		},
		watch: {
			
		},
		methods: {
		},
		components: {
			ComFooter
		}
		
	}
</script>
<style scoped>
p{
	font-size: 24px;
}
</style>