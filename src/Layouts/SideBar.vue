<template>
    <div>
        <aside class="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
            <SmallSideBarItem IconName="fa-solid fa-house-user" title="Home" url="/" />
            <SmallSideBarItem IconName="fa-solid fa-repeat" title="Shorts" url="/short" />
            <SmallSideBarItem IconName="fa-solid fa-clapperboard" title="Subsriptions" url="/subsriptions" />
            <SmallSideBarItem IconName="fa-solid fa-photo-film" title="Library" url="/library" />
        </aside>
        <aside
            class="w-56 hidden lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 sm:flex">
            <LargeSideBarSection>
                <LargeSideBarItem isActive IconName="fa-solid fa-house-user" title="Home" url="/" />
                <LargeSideBarItem IconName="fa-solid fa-clapperboard" title="Subscriptions" url="/subsricptions" />
            </LargeSideBarSection>
            <hr />
            <LargeSideBarSection>
                <LargeSideBarItem IconName="fa-solid fa-photo-film" title="Library" url="/library" />
                <LargeSideBarItem IconName="fa-solid fa-clock-rotate-left" title="History" url="/history" />
                <LargeSideBarItem IconName="fa-solid fa-circle-play" title="Your Videos" url="/your-videos" />
                <LargeSideBarItem IconName="fa-solid fa-clock" title="Watch Later" url="/playlist?list=WL" />
            </LargeSideBarSection>
            <hr />
            <div class="flex gap-4 relative">
                <div class="absolute left-28 top-3 cursor-pointer bg-emerald-300" @click="toggle">
                    <font-awesome-icon v-if="showMore" icon="fa-solid fa-angle-up" />
                   <font-awesome-icon v-else icon="fa-solid fa-angle-down"  />
                </div>
                
                <LargeSideBarSection title="Playlists" class="relative">
                    <div v-if="showMore">
                    <LargeSideBarItem v-for="video in playlists" 
                        :key="video.id" 
                        url="{`/playlist?list=${video.id}`}"
                        :title="video.name" 
                        IconName="fa-solid fa-file-video" 
                    /> 
                    </div>
                    
                </LargeSideBarSection>
            </div>
            <hr />
            <div class="flex gap-4 relative">
                <div class="absolute left-28 top-3 cursor-pointer bg-emerald-300" @click="toggle">
                    <font-awesome-icon  icon="fa-solid fa-angle-up" />
                   <font-awesome-icon  icon="fa-solid fa-angle-down"  />
                </div>
                
                <LargeSideBarSection title="Subscriptions" class="relative">
                    <div >
                    <LargeSideBarItem v-for="sub in subscriptions" 
                        :key="sub.id" 
                        url="/playlist?list={{sub.id}}"
                        :title="sub.channelName" 
                        :img="sub.imgUrl" 
                    /> 
                    </div>
                    
                </LargeSideBarSection>
            </div>

        </aside>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LargeSideBarItem from '../components/LargeSideBarItem.vue'
import LargeSideBarSection from '../components/LargeSideBarSection.vue'
import SmallSideBarItem from '../components/SmallSideBarItem.vue'
import { playlists } from '../data/data'
import { subscriptions } from '../data/data'

const showMore = ref(false)

const toggle = () => {
    showMore.value = !showMore.value
    alert(showMore.value); 
}

</script>

<style></style>