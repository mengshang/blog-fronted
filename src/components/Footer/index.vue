<template>
  <div class="footer">
    <a href="http://beian.miit.gov.cn">粤ICP备18075499号</a>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class Footer extends Vue {
}
</script>
<style scoped>
.footer {
  text-align: center;
  padding: 20px;
  border-top: 1px solid #ebebeb;
  background: #fff;
  font-size: 12px;
}
</style>
