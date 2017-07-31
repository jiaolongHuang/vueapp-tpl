<template>
	<aside id="aside" >
    <div class="aside-top">
      <com-sidehead></com-sidehead>
    </div>
		
		<ul class="nav-list">
			<router-link v-for="(item, key) in config" tag="li" :to="item.to" :key="key">
			  <a>{{item.txt}}</a>
			</router-link>
		</ul>		
	</aside>
</template>

<script>
	import "./side.css"
  import ComSidehead from './side-top.vue'

	export default {
		name: 'side',
		data () {
			return {
				config: {
					pcquery: {
						// hjl:这里的name,是与routers里对应的
						to: {name: 'query', params: {plat: 'pc'}},
						txt: 'PC QUERY'
					},
					mquery: {
						to: {name: 'query', params: {plat: 'mobile'}},
						txt: 'MOBILE QUERY'
					},
          diff: {
						to: {name: 'diff'},
						txt: '评测构建'
					},
					publish: {
						to: {name: 'publish'},
						txt: '模版上线'
					}
				}
			}
		},
		computed: {

		},
		props:['curNav','curTab','userName'],
		created () {
			
		},
		beforeDestroy () {
			
		},
    components: {
      ComSidehead
		}
	}

</script>

<style scoped>

</style>