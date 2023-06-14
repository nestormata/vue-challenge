<template>
    <tr>
        <td>{{ row.school }}</td>
        <td>{{ row.division }}</td>
        <td>{{ row.conference }}</td>
        <td>{{ row.ranking }}</td>
        <td>{{ row.gpa.min }}</td>
        <td>{{ row.gpa['25%'] }}</td>
        <AcademicFitReportGPAColumn :gpa="row.gpa['50%']" />
        <td>{{ row.gpa['75%'] }}</td>
        <td>{{ row.gpa.max }}</td>
        <td>
            <template v-if="row.sat.reading.min == 'N/A'">Not Reported</template>
            <template v-else>{{ row.sat.reading.min }}-{{ row.sat.reading.max }}</template>
        </td>
        <td>
            <template v-if="row.sat.math.min == 'N/A'">Not Reported</template>
            <template v-else>{{ row.sat.math.min }}-{{ row.sat.math.max }}</template>
        </td>
        <td>
            <template v-if="row.act.min == 'N/A'">Not Reported</template>
            <template v-else>{{ row.act.min }}-{{ row.act.max }}</template>
        </td>
    </tr>
</template>

<script setup>
import AcademicFitReportGPAColumn from './AcademicFitReportGPAColumn.vue';

defineProps({
    row: {
      type: Object,
      required: true
    }
});
</script>