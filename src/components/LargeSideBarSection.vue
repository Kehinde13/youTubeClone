<template>
    <div>
        <div 
          :v-if="title"
          class="ml-4 mt-2 text-lg mb-1"
          >
            {{ title }}
        </div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
    name: "LargeSideBarItem"
    functional: true

    defineProps({
        title: String
    })

    
  
</script>

<style>

</style>