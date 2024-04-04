<template>
     <div class="fixed z-50 bg-white w-[100%] bottom-0 flex md:hidden justify-around ml-1">
            <SmallSideBarItem IconName="fa-solid fa-house-user" title="Home" url="/" /> 
            <SmallSideBarItem IconName="fa-solid fa-repeat" title="Shorts" url="/short" />
            <SmallSideBarItem IconName="fa-solid fa-upload" url="/upload" />
            <SmallSideBarItem IconName="fa-solid fa-clapperboard" title="Subsriptions" url="/subsriptions" />
            <SmallSideBarItem IconName="fa-regular fa-user" title="You" url="/user" />
        </div>
</template>

<script setup lang="ts">
 import SmallSideBarItem from '../components/SmallSideBarItem.vue'
</script>

<style>

</style>