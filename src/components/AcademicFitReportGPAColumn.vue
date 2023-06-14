<template>
    <td :class="color_class">{{ gpa }}</td>
</template>

<script setup>
import { computed, inject } from 'vue';

let props = defineProps({
    gpa: {
      type: Number,
      required: true
    }
});

let athlete = inject('athlete');

const color_class = computed(() => {
    if (props.gpa > (athlete.gpa + 0.10))
        return 'gpa-level-5';
    if (props.gpa > athlete.gpa)
        return 'gpa-level-4';
    if (props.gpa == athlete.gpa)
        return 'gpa-level-3';
    if (props.gpa > (athlete.gpa - 0.10))
        return 'gpa-level-2';
    return 'gpa-level-1';
});

</script>