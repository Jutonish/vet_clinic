<template>
    <div class="animals">
        <div class="animals-pets">
            <img src="../../assets/home/block4/rectangle1.png" alt="">
            <span class="animals-text">Собаки</span>
        </div>
        <div class="animals-pets">
            <img src="../../assets/home/block4/rectangle2.png" alt="">
            <span class="animals-text">Кошки</span>
        </div>
        <div class="animals-pets">
            <img src="../../assets/home/block4/rectangle3.png" alt="">
            <span class="animals-text">Грызуны</span>
        </div>
        <div class="animals-pets">
            <img src="../../assets/home/block4/rectangle4.png" alt="">
            <span class="animals-text">Птицы</span>
        </div>
        <div class="animals-pets">
            <img src="../../assets/home/block4/rectangle5.png" alt="">
            <span class="animals-text">Экзоты</span>
        </div>
        <div class="animals-pets">
            <img src="../../assets/home/block4/rectangle6.png" alt="">
            <span class="animals-text">Рептилии</span>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="sass" scoped>
    
.animals
    margin: 0 112px 64px 112px
    display: grid
    grid-template-columns: repeat(6, 0fr)
    &-pets
        margin-right: 32px
        &:nth-child(6)
            margin-right: 0
        img
            margin-bottom: 16px
    &-text
        color: #000
        font-family: Segoe UI
        font-size: 16px
</style>