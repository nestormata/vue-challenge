<template>
    <li v-if="value">
        <label>{{ title }}:</label>
        {{ value }}
    </li>
</template>

<script setup>
defineProps({
    title: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
});
</script>