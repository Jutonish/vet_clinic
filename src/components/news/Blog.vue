<template>
    <div class="blog">
        <h1 class="blog-title">Блог</h1>
        <div class="blog-subscr">
            <p class="blog-text1">5 янв/2022</p>
            <img src="../../assets/news/image-110.png" alt="">
            <p class="blog-text2">
                Ветеринар: в жару домашних животных<br>
                нельзя поливать холодной водой
            </p>
            <p class="blog-text3">Мнение врача</p>
        </div>
        <div class="blog-subscr">
            <p class="blog-text1">5 янв/2022</p>
            <img src="../../assets/news/image-111.png" alt="">
            <p class="blog-text2">
                Ветеринар: в жару домашних животных<br>
                нельзя поливать холодной водой
            </p>
            <p class="blog-text3">Мнение врача</p>
        </div>
        <div class="blog-subscr">
            <p class="blog-text1">5 янв/2022</p>
            <img src="../../assets/news/image-113.png" alt="">
            <p class="blog-text2">
                Ветеринар: в жару домашних животных<br>
                нельзя поливать холодной водой
            </p>
            <p class="blog-text3">Мнение врача</p>
        </div>
        <div class="blog-subscr">
            <p class="blog-text1">5 янв/2022</p>
            <img src="../../assets/news/image-115.png" alt="">
            <p class="blog-text2">
                Ветеринар: в жару домашних животных<br>
                нельзя поливать холодной водой
            </p>
            <p class="blog-text3">Мнение врача</p>
        </div>
        <div class="blog-subscr">
            <p class="blog-text1">5 янв/2022</p>
            <img src="../../assets/news/image-117.png" alt="">
            <p class="blog-text2">
                Ветеринар: в жару домашних животных<br>
                нельзя поливать холодной водой
            </p>
            <p class="blog-text3">Мнение врача</p>
        </div>
        <div class="blog-subscr">
            <p class="blog-text1">5 янв/2022</p>
            <img src="../../assets/news/image-116.png" alt="">
            <p class="blog-text2">
                Ветеринар: в жару домашних животных<br>
                нельзя поливать холодной водой
            </p>
            <p class="blog-text3">Мнение врача</p>
        </div>
        <div class="blog-subscr">
            <p class="blog-text1">5 янв/2022</p>
            <img src="../../assets/news/image-338.png" alt="">
            <p class="blog-text2">
                Ветеринар: в жару домашних животных<br>
                нельзя поливать холодной водой
            </p>
            <p class="blog-text3">Мнение врача</p>
        </div>
        <div class="blog-subscr">
            <p class="blog-text1">5 янв/2022</p>
            <img src="../../assets/news/image-85.png" alt="">
            <p class="blog-text2">
                Ветеринар: в жару домашних животных<br>
                нельзя поливать холодной водой
            </p>
            <p class="blog-text3">Мнение врача</p>
        </div>
        <div class="blog-subscr">
            <p class="blog-text1">5 янв/2022</p>
            <img src="../../assets/news/image-86.png" alt="">
            <p class="blog-text2">
                Ветеринар: в жару домашних животных<br>
                нельзя поливать холодной водой
            </p>
            <p class="blog-text3">Мнение врача</p>
        </div>
        <div class="blog-subscr">
            <p class="blog-text1">5 янв/2022</p>
            <img src="../../assets/news/image-87.png" alt="">
            <p class="blog-text2">
                Ветеринар: в жару домашних животных<br>
                нельзя поливать холодной водой
            </p>
            <p class="blog-text3">Мнение врача</p>
        </div>
        <div class="blog-subscr">
            <p class="blog-text1">5 янв/2022</p>
            <img src="../../assets/news/image-89.png" alt="">
            <p class="blog-text2">
                Ветеринар: в жару домашних животных<br>
                нельзя поливать холодной водой
            </p>
            <p class="blog-text3">Мнение врача</p>
        </div>
        <div class="blog-subscr">
            <p class="blog-text1">5 янв/2022</p>
            <img src="../../assets/news/image-110.png" alt="">
            <p class="blog-text2">
                Ветеринар: в жару домашних животных<br>
                нельзя поливать холодной водой
            </p>
            <p class="blog-text3">Мнение врача</p>
        </div>
        <button class="blog-btn">
            <p>Другие новости</p>
            <svg width="34" height="18" viewBox="0 0 34 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="IMAGE">
            <g id="Layer_x0020_1">
            <path id="Vector" d="M32.0581 8.99975H1.94141M24.5285 1.88867L32.0581 8.99975L24.5285 16.1108V1.88867Z" stroke="#D81B1C" stroke-width="2.00006" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </g>
            </svg>
        </button>
    </div>
    <Info />
    <Map />
</template>

<script setup>
import Info from '@/components/home/Info.vue'
import Map from '@/components/home/Map.vue'
</script>

<style lang="sass" scoped>
    
.blog
    display: grid
    grid-template-columns: repeat(3, 1fr)
    margin: 0
    margin: 0 112px  0px  112px
    &-subscr
        margin-bottom: 48px
    &-title
        color: #FF5A24
        font-family: Segoe UI
        font-size: 32px
        font-weight: 700
        margin-bottom: 48px
        grid-column-start: 1
        grid-column-end: 4
    &-text1
        color: #000
        font-family: Segoe UI
        font-size: 12px
        font-weight: 700
        margin-bottom: 16px
    &-text2
        color: #000
        font-family: Segoe UI
        font-size: 16px
        font-weight: 700
        margin-top: 16px
    &-text3
        color: rgba(0, 0, 0, 0.70)
        font-family: Segoe UI
        font-size: 16px
        font-weight: 400
        margin-top: 8px
    &-btn
        color: #FF5A24
        font-family: Segoe UI
        font-size: 16px
        font-weight: 700
        background: #fff
        border: 0
        display: flex
        align-items: center
        justify-content: end
        grid-column: 3
        margin-bottom: 62px
        p
            margin-right: 32px
        
</style>