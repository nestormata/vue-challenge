<template>
  <div class="athlete-report">
    <div class="athlete-info">
      <AcademicProfileImage :image="athlete.profile_image" :name="athlete.name" />
      <h2>{{ athlete.name }}</h2>
      <ul>
        <AcademicFitInformationItem title="Sport" :value="athlete.sport" />
        <AcademicFitInformationItem title="Class" :value="athlete.grad_year" />
        <AcademicFitInformationItem title="Club" :value="athlete.club.name" />
        <AcademicFitInformationItem title="High School" :value="athlete.high_school.name" />
        <AcademicFitInformationItem title="GPA" :value="athlete.gpa" />
        <AcademicFitInformationItem title="Desired Major" :value="athlete.major" />
      </ul>
      <h3>Academic Fit Report</h3>
    </div>
    <AcademicFitReportTable />

    <div class="footnote">
        <hr />
        <p><sup>*</sup>Rankings for Division I schools based on NCAA data (www.ncaa.com) and rankings for Division II & III schools are based on data from Hero Sports (www.herosports.com/rankings)</p>
        <p><sup>**</sup>GPA is based on SportsRecruits members who have shown interest in (favorited) the school and have provided their GPA on their profile</p>
        <p><sup>***</sup>SAT and ACT scores based on national data provided by the National Center of Education Statistics- https://nces.ed.gov/ipeds/</p>
    </div>
  </div>
</template>

<script setup>
import '../assets/styles/academy-fit-report.css';
import AcademicProfileImage from './AcademicProfileImage.vue';
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