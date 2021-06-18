// #ifdef APP-PLUS
import AppUpdate from "@/common/AppUpdate.js";
// #endif
export default function() {
  console.log("App Launch");
  // #ifdef APP-PLUS
  AppUpdate();
  // #endif
}
