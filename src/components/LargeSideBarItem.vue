<template>
    <a :href="url" 
       class="p-2 flex items-center rounded-lg gap-4"
       :class="[isActive ? 'font-bold bg-gray-100 hover:bg-gray-200' : '']"
       >
        <font-awesome-icon :icon="IconName" class="w-6 h-6 " />
        <img :src="img" v-if="img" class="w-6 h-6 rounded-full" />
        <div class="whitespace-nowrap text-ellipsis overflow-hidden">
            {{ title }}
        </div>
    </a>
</template>

<script setup lang="ts">

defineProps({
    IconName: String,
    title: String,
    url: String,
    isActive: Boolean,
    img: String
})
</script>

<style></style>