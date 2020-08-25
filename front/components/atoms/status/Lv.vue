<div>
  Lv：{{ level }}
</div>

<script>
export default{
	data: ()=>({
		level: $store.state.user.level
	})
}
</script>