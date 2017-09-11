<template>
	<div id="notfound" class="notfound">
		<p class="tips">跑丢了吧，快<router-link to="/" class="router-link" exact>回来</router-link>吧。</p>
	</div>
</template>

<script>
	export default {
		name: 'notfound'
	}
</script>

<style scoped>
#notfound .tips{
	margin: 20px 0 0 50px;
	font-size: 16px;
}
#notfound .router-link{
	color: #1C90F3;
}
</style>