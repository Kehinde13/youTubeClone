<template>
    <div class="flex flex-col gap-2" @mouseenter="setPlayTrue" @mouseleave="setPlayFalse">
        <a :href="`/watch?v=${video.id}`" class="relative aspect-video">
            <img :src="video.thumbnailUrl" 
                 class="block w-full h-full object-cover transition-[border-radius] duration-200" 
                 :class="[ isVideoPlaying ? 'rounded-none' : 'rounded-xl' ]"
            />
            <div class="absolute bottom-1 right-1 bg-black text-white text-sm px-0.5 rounded">
                {{ formatDuration(video.duration) }}
            </div>
             <video class="block object-cover inset-0 absolute transition-opacity duration-200" 
                   :class="[isVideoPlaying ? 'opacity-100 delay-200' : 'opacity-0' ]"
                   ref="videoRef"
                   muted playsInline 
                   :src="video.videoUrl" 
            />
        </a>

        <div class="flex gap-2">
            <a :href="`/@${video.channel.id}`" class="flex-shrink-0">
                <img class="w-12 h-12 rounded-full" :src="video.channel.profileUrl" />
            </a>
            <div class="flex flex-col">
                <a href="`/watch?v=${id}`" class="font-bold">
                    {{ video.title }}
                </a>
                <a href="`/@${channel.id}`" class="text-secondary-text text-sm">
                    {{ video.channel.name }}
                </a>
                <div class="text-secondary-text text-sm">
                    {{ VIEW_FORMATTER.format(video.views) }}
                    Views •
                    {{ formatTimeAgo(video.postedAt) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { formatDuration } from '../Utils/TimeFormatter'
import { formatTimeAgo } from '../Utils/TimeAgoFormatter'
import { ref, watch } from 'vue';


const VIEW_FORMATTER = new Intl.NumberFormat(undefined, { notation: "compact" })

const videoRef = ref<HTMLVideoElement | null>(null);
const isVideoPlaying = ref<boolean>(false)

defineProps({
    video: {
        type: Object,
        default: {
            id: {
                type: String
            },
            title: {
                type: String
            },
            channel: {
                type: Object,
                default: {
                    id: String,
                    name: String,
                    profileUrl: String
                }
            },
            views: {
                type: Number
            },
            postedAt: {
                type: Date
            },
            duration: {
                type: Number
            },
            thumbnailUrl: {
                type: String
            },
            videoUrl: {
                type: String
            }
        }
    }
})

const setPlayTrue = () => {
    isVideoPlaying.value = true
}

const setPlayFalse = () => {
    isVideoPlaying.value = false
}

watch([isVideoPlaying], () => {
    if (videoRef.value === null) return

    if (isVideoPlaying) {
        videoRef.value.currentTime = 0
        videoRef.value.play()
    } else {
        videoRef.value.pause()
    }

})

</script>

<style></style>