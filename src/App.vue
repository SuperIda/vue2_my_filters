<template>
  <div>
    <h5>两种使用的地方: 双花括号和v-bind上</h5>
    <h5>====1.首字母大写====</h5>
    <div :name="name | capitalize"></div>
    <p>{{ name2 | capitalize }}</p>
    <h5>====2.千分位加逗号====</h5>
    <p>{{ num | toThousandFilter }}</p>
    <h5>====3.====</h5>
    <h5>====4.====</h5>
    <h5>====5.====</h5>
    <h5>====6.====</h5>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 80000,
      name: "ida",
      name2: "china",
    };
  },
};
</script>

<style scoped></style>
