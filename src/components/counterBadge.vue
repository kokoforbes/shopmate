<template>
  <span v-if="count > 0" class="badge">
    {{ count }}
  </span>
</template>

<script>

export default {
  name: 'counter-badge',
  props: ['count'],
}

</script>

<style>

.badge {
  position: absolute;
  top: -.0em;
  /* right: -.01rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #FFFFFF;
  color: #F62F5E;;
  font-weight: bold;
  font-size: 12px;
}

</style>