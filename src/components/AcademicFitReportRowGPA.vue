<template>
    <td>
        <span>{{ gpa.min }}</span>
        <span>{{ gpa['25%'] }}</span>
        <span :class="color_class">{{ gpa['50%'] }}</span>
        <span>{{ gpa['75%'] }}</span>
        <span>{{ gpa.max }}</span>
    </td>
</template>

<script setup>
import { computed, inject } from 'vue';

let props = defineProps({
    gpa: {
      type: Object,
      required: true
    }
});

let athlete = inject('athlete');

const color_class = computed(() => {
    if (props.gpa['50%'] > (athlete.gpa + 0.10))
        return 'gpa-level-5';
    if (props.gpa['50%'] > athlete.gpa)
        return 'gpa-level-4';
    if (props.gpa['50%'] == athlete.gpa)
        return 'gpa-level-3';
    if (props.gpa['50%'] > (athlete.gpa - 0.10))
        return 'gpa-level-2';
    return 'gpa-level-1';
});

</script>