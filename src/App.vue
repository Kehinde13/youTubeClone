<template>
  <div className="max-h-screen flex flex-col">
  <HeaderVue />
  <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
    <SideBar/>
    <div className="overflow-x-hidden px-8 pb-4">
      <div className="sticky top-0 bg-white z-10 pb-4">
              <CategoriesPills
                :categories="categories" 
                :selectedPill="selectedPill"
                @pill="setSelectedPill"
              />
            <div class="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
               <VideoGridItem  v-for="video in videos" :key="video.id" :video="video"/>
            </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
  import HeaderVue from "./Layouts/Header.vue";
  import SideBar from "./Layouts/SideBar.vue";
  import CategoriesPills from "./components/CategoriesPills.vue";
  import { categories } from './data/data'
  import { videos } from './data/data'
  import { ref } from 'vue'
  import VideoGridItem from "./Layouts/VideoGridItem.vue";

  const selectedPill =  ref(categories[0]) 
  const emit = defineEmits(['pill'])

  
  const setSelectedPill = (pill : string) => {
    selectedPill.value = pill
  }

</script>

<style scoped>
  
</style>

