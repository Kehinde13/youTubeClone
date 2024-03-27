<template>
    <div className="overflow-x-hidden relative py-3" ref="containerRef">
     <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]"
          :style="`transform: translateX(-${translate}px)`"
     > 
        <button v-for="(button, index) in categories" :key="index"
            class="rounded-md px-2 py-1" 
            :class="[selectedPill === button ? 'bg-gray-700 text-gray-200' : 'bg-gray-200']"
            @click="$emit('pill', button)"  
        >
            {{ button }}
        </button>
    </div>

    <font-awesome-icon 
       v-if="leftButton"
        @click="setLeftTranslate"
        icon="fa-solid fa-chevron-left" role="button"
        class="hover:bg-gray-200 rounded-full p-2 absolute left-0 top-[30px] 
        -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent" 
    />

    <font-awesome-icon  
        v-if="rightButton"
        @click="setRightTranslate"
        icon="fa-solid fa-chevron-right" role="button"
        class="hover:bg-gray-200 rounded-full p-2 absolute right-0 top-1/2 -translate-y-1/2 
        bg-gradient-to-l from-white from-50% to-transparent flex justify-end" 
    />
    </div>
   
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

const containerRef = ref<HTMLDivElement | null>(null);
const leftButton = ref<boolean>(false)
const rightButton = ref<boolean>(false)
const TRANSLATE_AMOUNT : number = 200
const translate = ref<number>(0)

defineProps({
    categories: {
        type: Array,
        default: [],
    },
    selectedPill: {
        type: String,
        default: '',
    }
})

const setLeftTranslate = () => {
    const newTranslate = translate.value - TRANSLATE_AMOUNT
    if (newTranslate <= 0) {
        translate.value = 0
    }
    translate.value = newTranslate
}

const setRightTranslate = () => {
    if (containerRef.value == null) {
        return translate
    }
    const newTranslate = translate.value + TRANSLATE_AMOUNT
    const edge = containerRef.value.scrollWidth + 140
    const width = containerRef.value.clientWidth
    if (newTranslate + width >= edge) {
        rightButton.value = false
        return edge - width
    }
    translate.value = newTranslate
}

onMounted(() => {
    if (containerRef.value == null) return
    if((translate.value + containerRef.value.clientWidth) < containerRef.value.scrollWidth){
        rightButton.value = true 
    }
    
})

watch([translate], () => {
    if (containerRef.value == null) return
    if (translate.value > 0) {
        leftButton.value = true
    } else{
        leftButton.value = false
    };

    if((translate.value + containerRef.value.clientWidth) < containerRef.value.scrollWidth){
        rightButton.value = true 
    } 
})
    
</script>

<style>

</style>