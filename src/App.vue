<template>
  <div class="container">
    <AcademicFitReport :athlete="athlete_info"/>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import AcademicFitReport from "@/components/AcademicFitReport.vue";
import AthleteData from "@/assets/data.json";

let athlete_info = ref(AthleteData.data[0]);
</script>
