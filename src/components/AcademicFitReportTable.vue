<template>
    <div class="athlete-table-container">
        <table class="athlete-table">
            <thead>
                <tr>
                    <th rowspan="2">School Name</th>
                    <th rowspan="2">Athletic Div</th>
                    <th rowspan="2">Conference</th>
                    <th rowspan="2">
                        Ranking<sup>*</sup>
                        <span>(DI NCAA)</span>
                        <span>(DI & DIII Hero Sports)</span>
                    </th>
                    <th colspan="5">GPA<sup>**</sup></th>
                    <th>SAT Reading<sup>***</sup></th>
                    <th>SAT Math<sup>***</sup></th>
                    <th>ACT Composite<sup>***</sup></th>
                </tr>
                <tr>
                    <th class="gpa-header">Min</th>
                    <th class="gpa-header">25%</th>
                    <th class="gpa-header">50%</th>
                    <th class="gpa-header">75%</th>
                    <th class="gpa-header">Max</th>
                    <th>25%-75%</th>
                    <th>25%-75%</th>
                    <th>25%-75%</th>
                </tr>
            </thead>
            <tbody>
                <AcademicFitReportRow v-for="(row, index) in report" :row="row" :key="index" />
            </tbody>
        </table>
    </div>
</template>

<script setup>
import AcademicFitReportRow from '../components/AcademicFitReportRow.vue';
import { inject } from 'vue';
import '../assets/styles/academy-fit-report-table.css';

let { report } = inject('athlete');
</script>