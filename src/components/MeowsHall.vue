<template>
  <section class="meows-hall">
    <b-container class="meows-hall__wrapper">
      <b-row class="justify-content-center">
        <b-col cols="9" sm="10" md="10" lg="11" xl="10">
          <h1 class="meows-hall__title">Hall of meows.</h1>
          <p class="lead">Featured felines of the week!</p>
          <div class="meows-hall__gallery">
            <b-row>
              <b-col cols="xs-auto" sm="sm-auto" md="9" lg="6" xl="6">
                <b-row>
                  <b-col cols="6" sm="4">
                    <img
                      src="../assets/gallery_01.png"
                      alt="Meow 1"
                      class="img-thumbnail"
                    />
                  </b-col>
                  <b-col cols="6" sm="4">
                    <img
                      src="../assets/gallery_02.png"
                      alt="Meow 2"
                      class="img-thumbnail"
                    />
                  </b-col>
                  <div class="w-100 mb-4 d-block d-sm-none"></div>
                  <b-col cols="6" sm="4">
                    <img
                      src="../assets/gallery_03.png"
                      alt="Meow 3"
                      class="img-thumbnail"
                    />
                  </b-col>
                  <div class="w-100 mb-4 d-none d-sm-block"></div>
                  <b-col cols="6" sm="4">
                    <img
                      src="../assets/gallery_04.png"
                      alt="Meow 4"
                      class="img-thumbnail"
                    />
                  </b-col>
                  <div class="w-100 mb-4 d-block d-sm-none"></div>
                  <b-col cols="6" sm="4">
                    <img
                      src="../assets/gallery_05.png"
                      alt="Meow 5"
                      class="img-thumbnail"
                    />
                  </b-col>
                  <b-col cols="6" sm="4">
                    <img
                      src="../assets/gallery_06.png"
                      alt="Meow 6"
                      class="img-thumbnail"
                    />
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </div>
          <b-button variant="primary">Browse more</b-button>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
