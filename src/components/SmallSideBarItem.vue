<template>
    <a :href="url" class="py-4 px-1 flex flex-col items-center rounded-lg gap-1">
        <font-awesome-icon :icon="IconName" class="w-6 h-6" />
        <div class="text-sm">{{ title }}</div>
    </a>
</template>

<script setup lang="ts">


defineProps({
    IconName: String,
    title: String,
    url: String
})
</script>

<style></style>