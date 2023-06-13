<template>
    <table class="athlete-table">
        <thead>
            <tr>
                <th>School Name</th>
                <th>Athletic Div</th>
                <th>Conference</th>
                <th>Ranking</th>
                <th>
                    <div>GPA</div>
                    <div>
                        <span>Min</span>
                        <span>25%</span>
                        <span>50%</span>
                        <span>75%</span>
                        <span>Max</span>
                    </div>
                </th>
                <th>SAT Reading</th>
                <th>SAT Math</th>
                <th>ACT Composite</th>
            </tr>
        </thead>
        <tbody>
            <AcademicFitReportRow v-for="(row, index) in report" :row="row" :key="index" />
        </tbody>
    </table>
</template>

<script setup>
import AcademicFitReportRow from '../components/AcademicFitReportRow.vue';
import { inject } from 'vue';
import '../assets/styles/academy-fit-report-table.css';

let { report } = inject('athlete');
</script>