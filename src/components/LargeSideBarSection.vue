<template>
    <div>
        <div :v-if="title" class="ml-4 mt-2 text-lg mb-1">
            {{ title }}

            <div class="absolute left-36 top-2 cursor-pointer" @click="$emit('toggle')" v-if="dropDown">
                <font-awesome-icon v-if="showMorePlaylist || showMoreSubscription" icon="fa-solid fa-angle-up" />
                <font-awesome-icon v-else icon="fa-solid fa-angle-down" />
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
name: "LargeSideBarItem"
functional: true

defineProps({
    title: String,
    showMorePlaylist: Boolean,
    dropDown: Boolean,
    showMoreSubscription: Boolean
})



</script>

<style></style>