<template>
  <div
    class="countdown-timer"
    v-countdown="{ target: now, format: 'DD HH:mm:ss' }"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      now: this.$dayjs().format("DD days HH:mm:ss")
    };
  }
};
</script>
