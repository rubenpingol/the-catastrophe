<template>
  <footer class="page-footer">
    <b-container>
      <b-row class="page-footer__top align-items-center justify-content-center">
        <b-col cols="10" sm="12" md="7" lg="7">
          <div class="page-footer__heading">
            <h1 class="page-footer__title">Extra hands?</h1>
            <p class="lead">
              <strong>YES please! Be a voluteer today:</strong>
            </p>
          </div>
        </b-col>
        <b-col cols="10" sm="12" md="5" lg="5">
          <div class="page-footer__form">
            <b-form inline>
              <label class="sr-only" for="inline-form-input-name">Name</label>
              <b-input
                id="inline-form-input-name"
                class="mr-md-3 d-sm-block"
                placeholder="youremail@address.com"
                type="email"
              ></b-input>
              <div class="w-100 mb-3 d-md-block d-lg-none"></div>
              <b-button variant="primary">I want to help</b-button>
            </b-form>
          </div>
        </b-col>
      </b-row>
      <div class="w-100 py-4"></div>
      <b-row class="justify-content-center">
        <b-col cols="10" sm="12">
          <b-navbar
            variant="faded"
            type="light"
            class="px-0 d-flex flex-column flex-sm-row"
          >
            <b-nav-text class="order-1 order-sm-0"
              >&copy; 2019
              <span class="text-uppercase">The Catastrophe</span></b-nav-text
            >
            <b-navbar-nav
              class="order-0 order-sm-1 d-flex flex-column flex-sm-row"
            >
              <b-nav-item href="#">FAQs</b-nav-item>
              <b-nav-item href="#">PRIVACY POLICY</b-nav-item>
              <b-nav-item href="#">LEGAL NOTICES</b-nav-item>
            </b-navbar-nav>
          </b-navbar>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>
