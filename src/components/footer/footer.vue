<template>
	<footer>
		© {{nowYear}}. XXXX
	</footer>
</template>

<script>
module.exports = {
	data(){
		return {
			nowYear: new Date().getFullYear()
		}
	}
}
</script>

<!-- hjl：如果没有scoped，样式会被reset覆盖;webpack没有办法保证引入的css文件顺序 -->
<style scoped>
footer{
	position: absolute;
	bottom: 0;
	left: 0px;
	right: 0;
  padding: 10px 30px;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: #58666e;
  text-align: left;
  font-size: 13px;
}

</style>