<template>
  <countdown
    ref="countdownTimer"
    :time="countdownTime"
    :transform="transform"
    @progress="handleCountdownProgress"
  >
    <template slot-scope="props">
      <div v-if="!timeIsUp" class="countdown-timer">
        <span>{{ props.hours }} </span>
        <span>{{ props.minutes }} </span>
        <span>{{ props.seconds }} </span>left
      </div>
      <div v-if="timeIsUp" class="countdown-timer">Time is up!</div>
    </template>
  </countdown>
</template>

<script>
import { COUNTDOWN_TIMER_VALUE } from "../constants";

export default {
  data() {
    return {
      countdownTime: 0,
      timeIsUp: false,
      endTime: null
    };
  },
  mounted() {
    // days * hours * minutes * seconds * milliseconds
    // from right to left
    this.countdownTime = COUNTDOWN_TIMER_VALUE; // <-
  },
  methods: {
    transform(props) {
      Object.entries(props).forEach(([key, value]) => {
        // Adds leading zero
        // const digits = value < 10 ? `0${value}` : value;
        const digits = value;

        // uses singular form when the value is less than 2
        let timeInWords = key;
        if (key.includes("min")) {
          timeInWords = "mins";
        }
        if (key.includes("sec")) {
          timeInWords = "secs";
        }

        const word = value < 2 ? timeInWords.replace(/s$/, "") : timeInWords;

        props[key] = `${digits} ${word}`;
      });

      return props;
    },
    handleCountdownProgress(data) {
      if (data.hours === 0 && data.minutes === 0 && data.seconds === 1) {
        this.endTime = setTimeout(() => {
          this.timeIsUp = true;
        }, 1000);
      }
    }
  },
  destroyed() {
    this.endTime = null;
  }
};
</script>
