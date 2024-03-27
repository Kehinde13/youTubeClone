<template>
       <div class="flex flex-col gap-2">
          <a :href="`/watch?v=${id}`" class="relative aspect-video">
            <img 
             :src="thumbnailUrl"
             class="block w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
              {{ duration }}
            </div>  
         </a>
       </div>
</template>

<script setup lang="ts">


defineProps({
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
})

</script>

<style></style>