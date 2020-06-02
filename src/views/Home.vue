<template>
  <div class="home">
    <PageHeader></PageHeader>
    <!-- END .header -->
    <main class="main-content">
      <HeroesAdopt></HeroesAdopt>
      <!-- END .heroes-adopt -->
      <MeowsHall></MeowsHall>
      <!-- END .meows-hall -->
      <Adopting></Adopting>
      <!-- END .adopting -->
      <MakeAppointment></MakeAppointment>
      <!-- END .make-appointment -->

      <PageFooter></PageFooter>
      <!-- END .page-footer -->
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from "@/components/PageHeader.vue";
import HeroesAdopt from "@/components/HeroesAdopt.vue";
import MeowsHall from "@/components/MeowsHall.vue";
import Adopting from "@/components/Adopting.vue";
import MakeAppointment from "@/components/MakeAppointment.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
  name: "Home",
  components: {
    PageHeader,
    HeroesAdopt,
    MeowsHall,
    Adopting,
    MakeAppointment,
    PageFooter
  }
};
</script>
