<template>
    <div class="image-profile" :class="initials_class">
        <img v-if="image" :src="image" >
        <div v-else>{{ initials }}</div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
let props = defineProps({
    image: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    }
});

let initials = computed(() => {
    return props.name.replace(/(\w)\w*\s?(\w?)\w*/, "$1$2").toUpperCase();
});

let initials_class = computed(() => {
    let first_initial = props.name.replace(/(\w).*/i, "$1").toLowerCase();
    if (first_initial < 'e')
        return 'initials-1';
    if (first_initial < 'i')
        return 'initials-2';
    if (first_initial < 'n')
        return 'initials-3';
    if (first_initial < 'q')
        return 'initials-4';
    if (first_initial < 'v')
        return 'initials-5';
    return 'initials-6';
});
</script>