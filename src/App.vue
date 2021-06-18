<script>
// #ifdef APP-PLUS
import AppUpdate from "@/common/AppUpdate.js";
// #endif
export default {
  onLaunch: function() {
    console.log("App Launch");
    // #ifdef APP-PLUS
    AppUpdate();
    // #endif
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  },
};
</script>

<style>
/*每个页面公共css */
</style>
