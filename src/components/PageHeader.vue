<template>
  <section class="page-header">
    <nav class="page-header__navbar">
      <b-container class="page-header__navbar--wrapper">
        <b-row class="justify-content-center">
          <b-col cols="11" sm="12" md="10" lg="8" xl="7">
            <b-navbar variant="faded" type="light">
              <b-navbar-brand href="#" class="mr-4">
                <img
                  src="../assets/logo.png"
                  alt="The Catastrophe"
                  width="120px"
                />
              </b-navbar-brand>
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                  <b-nav-item href="#">Find a Furfriend</b-nav-item>
                  <b-nav-item href="#">Adopt Guide</b-nav-item>
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          </b-col>
        </b-row>
      </b-container>
    </nav>
    <header class="page-header__intro">
      <b-container class="page-header__intro--wrapper">
        <b-row class="justify-content-center">
          <b-col cols="11" sm="12" md="10" lg="8" xl="7">
            <h1 class="text-white mb-4 text-uppercase">
              Last chance<br />
              to adopt!
            </h1>
            <CountdownTimer></CountdownTimer>
            <b-button variant="primary" v-scroll-to="'#make-appointment'"
              >Make appointment now</b-button
            >
          </b-col>
        </b-row>
      </b-container>
    </header>
  </section>
</template>

<script>
import CountdownTimer from "@/components/CountdownTimer.vue";

export default {
  name: "PageHeader",
  components: {
    CountdownTimer
  }
};
</script>
