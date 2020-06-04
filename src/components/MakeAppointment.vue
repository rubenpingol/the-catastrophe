<template>
  <section id="make-appointment" class="make-appointment">
    <b-container class="make-appointment__wrapper">
      <b-row class="justify-content-center">
        <b-col cols="10">
          <h1 class="make-appointment__title">Make an appointment</h1>
          <p class="lead">
            <strong>Time is gold!</strong> Make appointment to prevent
            disappointment!
          </p>
          <b-form @submit="onSubmit">
            <b-row>
              <b-col sm="12" md="12" lg="4" xl="4">
                <label for="inline-form-input-datetime" class="sr-only"
                  >Date &amp; Time</label
                >
                <!-- <b-form-select id="inline-form-input-datetime" placeholder="DateTime" size="sm"></b-form-select> -->
                <b-input-group size="sm">
                  <b-form-datepicker
                    placeholder="Date"
                    locale="en"
                    v-model="date"
                    :date-format-options="{
                      year: '2-digit',
                      month: '2-digit',
                      day: '2-digit'
                    }"
                  ></b-form-datepicker>
                  <b-form-timepicker
                    placeholder="Time"
                    locale="en"
                    v-model="time"
                    hour12
                  ></b-form-timepicker>
                </b-input-group>
              </b-col>
              <div class="w-100 mb-4 d-block d-md-none"></div>
              <div
                class="w-100 mb-4 d-md-block d-sm-none d-lg-none d-none"
              ></div>
              <b-col sm="12" md="6" lg="4" xl="4">
                <label for="inline-form-input-state" class="sr-only"
                  >State</label
                >
                <b-form-select
                  id="inline-form-input-state"
                  placeholder="State"
                  size="sm"
                  v-model="form.state"
                  :options="states"
                ></b-form-select>
              </b-col>
              <div class="w-100 mb-4 d-block d-md-none"></div>
              <b-col sm="12" md="6" lg="4" xl="4">
                <label for="inline-form-input-branch" class="sr-only"
                  >Branch</label
                >
                <b-form-select
                  id="inline-form-input-branch"
                  placeholder="Branch"
                  size="sm"
                  v-model="form.branch"
                  :options="getBranchesByState"
                ></b-form-select>
              </b-col>
            </b-row>
            <div class="w-100 mb-4"></div>
            <b-button type="submit" variant="primary" :disabled="isSubmitting">
              <b-icon
                icon="arrow-clockwise"
                animation="spin"
                aria-hidden="true"
                class="mr-2"
                v-if="isSubmitting"
              ></b-icon>
              Submit
            </b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import qs from "querystring";
import { ENV, API_PATH } from "../constants";

export default {
  data() {
    return {
      date: null,
      time: null,
      isSubmitting: false,
      form: {
        datetime: null,
        state: null,
        branch: null
      },
      states: [
        { value: null, text: "State" },
        { value: "state_a", text: "State A" },
        { value: "state_b", text: "State B" },
        { value: "state_c", text: "State C" },
        { value: "state_d", text: "State D" }
      ],
      branches: [
        { value: null, text: "Branch Name", state: null },
        { value: "branch_a", text: "Branch A", state: "state_a" },
        { value: "branch_a1", text: "Branch A1", state: "state_a" },
        { value: "branch_b", text: "Branch B", state: "state_b" },
        { value: "branch_b1", text: "Branch B1", state: "state_b" },
        { value: "branch_b2", text: "Branch B2", state: "state_b" },
        { value: "branch_b3", text: "Branch B3", state: "state_b" },
        { value: "branch_c", text: "Branch C", state: "state_c" },
        { value: "branch_d", text: "Branch D", state: "state_d" },
        { value: "branch_d1", text: "Branch D1", state: "state_d" },
        { value: "branch_d2", text: "Branch D2", state: "state_d" }
      ]
    };
  },
  watch: {
    state: function() {
      this.form.branch = null;
    },
    date: function(val) {
      this.time =
        val === null
          ? null
          : this.time !== null
          ? this.time
          : this.$dayjs().format("HH:mm:ss");
      this.form.datetime =
        val === null
          ? null
          : this.$dayjs(`${val} ${this.time}`).format("MM/DD/YY HH:mm:ss");
    },
    time: function(val) {
      this.form.datetime = this.$dayjs(
        `${this.date} ${this.$dayjs(val).format("HH:mm:ss")}`
      ).format("MM/DD/YY HH:mm:ss");
    }
  },
  computed: {
    getBranchesByState: function() {
      return this.state === null
        ? this.branches.filter(item => item.value === null)
        : this.branches.filter(
            item => item.state === this.form.state || item.state === null
          );
    },
    state: function() {
      return this.form.state;
    },
    getDateTime: function() {
      const dateTime = this.$dayjs(`${this.date} ${this.time}`).format(
        "MM/DD/YY HH:mm:ss"
      );

      if (!this.$dayjs(`${this.date}`).isValid()) {
        return null;
      }

      return dateTime;
    }
  },
  methods: {
    onSubmit: function(evt) {
      evt.preventDefault();
      this.form.datetime = this.getDateTime;
      this.isSubmitting = true;

      this.axios
        .post(
          ENV === "production" ? `${API_PATH}/api/input` : "/api/input",
          qs.stringify(this.form)
        )
        .then(response => {
          const result = response.data;
          this.$swal({
            icon: result.status === 1 ? "success" : "warning",
            text: `${result.meesages}`
          });
          return result;
        })
        .then(result => {
          if (result.status === 1) {
            this.date = null;
            this.time = null;
            this.form = {
              datetime: null,
              state: null,
              branch: null
            };
          }
          this.isSubmitting = false;
        })
        .catch(e => {
          this.$swal({
            icon: "error",
            text: `${e.message}`
          });
        });
    }
  }
};
</script>
