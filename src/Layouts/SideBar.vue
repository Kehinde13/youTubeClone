<template>
        <aside
            class="w-56 hidden lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 lg:flex">
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

                <LargeSideBarSection title="Playlists" :showMore="showMorePlaylist" @toggle="togglePlaylist"
                    :dropDown="dropDown">
                    <div v-if="showMorePlaylist">
                        <LargeSideBarItem v-for="video in playlists" :key="video.id" :url="`/playlist?list=${video.id}`"
                            :title="video.name" IconName="fa-solid fa-file-video" />
                    </div>

                </LargeSideBarSection>
            </div>
            <hr />
            <div class="flex gap-4 relative">

                <LargeSideBarSection title="Subscriptions" :showMoreSubscription="showMoreSubscription" @toggle="toggleSubscription"
                    :dropDown="dropDown">
                    <div v-if="showMoreSubscription">
                        <LargeSideBarItem v-for="sub in subscriptions" :key="sub.id" :url="`/@${sub.id}`"
                            :title="sub.channelName" :img="sub.imgUrl" />
                    </div>

                </LargeSideBarSection>
            </div>

            <hr />

            <div>
                <LargeSideBarSection title="Explore">
                    <LargeSideBarItem IconName="fa-solid fa-arrow-trend-up" title="Trending" url="/trending" />
                    <LargeSideBarItem IconName="fa-solid fa-cart-shopping" title="Shopping" url="/shopping" />
                    <LargeSideBarItem IconName="fa-solid fa-music" title="Music" url="/music" />
                    <LargeSideBarItem IconName="fa-solid fa-film" title="Movies & TV" url="/movies-tv" />
                    <LargeSideBarItem IconName="fa-solid fa-radio" title="Live" url="/live" />
                    <LargeSideBarItem IconName="fa-solid fa-gamepad" title="Gaming" url="/gaming" />
                    <LargeSideBarItem IconName="fa-regular fa-newspaper" title="News" url="/news" />
                    <LargeSideBarItem IconName="fa-solid fa-trophy" title="Sports" url="/sports" />
                    <LargeSideBarItem IconName="fa-solid fa-school" title="Learning" url="/learning" />
                    <LargeSideBarItem IconName="fa-solid fa-shirt" title="Fashion & Beauty" url="/fashion-beauty" />
                    <LargeSideBarItem IconName="fa-solid fa-podcast" title="Podcast" url="/podcast" />
                </LargeSideBarSection>
            </div>

        </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LargeSideBarItem from '../components/LargeSideBarItem.vue'
import LargeSideBarSection from '../components/LargeSideBarSection.vue'
import { playlists } from '../data/data'
import { subscriptions } from '../data/data'

const showMorePlaylist = ref<boolean>(false)
const showMoreSubscription = ref<boolean>(false)
const dropDown = ref<boolean>(true)

const togglePlaylist = () => {
    showMorePlaylist.value = !showMorePlaylist.value
}

const toggleSubscription = () => {
    showMoreSubscription.value = !showMoreSubscription.value
}

</script>

<style></style>