// TypeScript并不支持Vue文件，所以需要告诉TypeScript`*.vue`
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
