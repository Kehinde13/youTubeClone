<template>
  <div class="flex justify-between p-2 gap-2">
      <div class="flex justify-between gap-2 flex-shrink-0" v-if="!showSearchBar">
        
        <font-awesome-icon icon="fa-solid fa-bars" 
        class="hover:bg-gray-200 rounded-full p-2"/>
        
        <div class="md:text-xl mt-1 md:mt-0">
            <font-awesome-icon icon="fa-brands fa-youtube" /> MeTube
        </div>
      </div>

    <form action="" class="md:flex justify-center gap-4 flex-grow"
    :class="[showSearchBar ? 'flex' : 'hidden']"
    >
      <div class="max-w-[600px] flex flex-grow">
       
      <font-awesome-icon v-if="showSearchBar" @click="toggleSearchBar"
      icon="fa-solid fa-arrow-left" role="button" 
      class="hover:bg-gray-200 p-2 rounded-full flex-shrink-0 mr-2"/>
      
      <input type="search" placeholder="Search"
      class="border rounded-l-full border-gray-200 shadow-inner shadow-secondary
      text-lg px-4 w-full focus:border-blue-500 outline-none"
      >
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" role="button" 
      class="bg-gray-200 py-2 px-4 rounded-r-full border-l-0 flex-shrink-0"/>
      </div>

      <font-awesome-icon icon="fa-solid fa-microphone" 
      class="bg-gray-200 rounded-full p-2" role="button"/>
    
    </form>
      

      <div class="flex gap-2 md:gap-10" v-if="!showSearchBar">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" role="button"
          class="hover:bg-gray-200 rounded-full p-2 md:hidden"
          @click="toggleSearchBar"
          />
          <font-awesome-icon 
          icon="fa-solid fa-microphone" role="button" 
          class="hover:bg-gray-200 rounded-full p-2 md:hidden" />

          <font-awesome-icon 
           icon="fa-solid fa-upload" role="button"
          class="hover:bg-gray-200 rounded-full p-2" />

          <font-awesome-icon 
          icon="fa-solid fa-bell" role="button"
          class="hover:bg-gray-200 rounded-full p-2" />

          <font-awesome-icon  
          icon="fa-regular fa-user" role="button"
          class="hover:bg-gray-200 rounded-full p-2" />
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showSearchBar = ref(false)
  
const toggleSearchBar = () =>  {
  showSearchBar.value = !showSearchBar.value
}
</script>

<style>

</style>