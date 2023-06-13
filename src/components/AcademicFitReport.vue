<template>
  <div class="athlete-report">
    <div class="athlete-info">
      <img :src="athlete.profile_image" />
      <h2>{{ athlete.name }}</h2>
      <ul>
        <AcademicFitInformationItem title="Sport" :value="athlete.sport" />
        <AcademicFitInformationItem title="Class" :value="athlete.grad_year" />
        <AcademicFitInformationItem title="Club" :value="athlete.club.name" />
        <AcademicFitInformationItem title="High School" :value="athlete.high_school.name" />
        <AcademicFitInformationItem title="GPA" :value="athlete.gpa" />
        <AcademicFitInformationItem title="Desired Major" :value="athlete.major" />
      </ul>
    </div>
    <AcademicFitReportTable />
  </div>
</template>

<script setup>
import '../assets/styles/academy-fit-report.css';
import AcademicFitReportTable from './AcademicFitReportTable.vue';
import AcademicFitInformationItem from './AcademicFitInformationItem.vue';
import { provide } from 'vue';

const props = defineProps({
    athlete: {
      type: Object,
      required: false
    }
});

  // We provide the athlete information to our children components.
  provide('athlete', props.athlete);
</script>