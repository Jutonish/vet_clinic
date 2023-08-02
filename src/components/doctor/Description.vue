<template>
    <div class="description">
        <img class="description-img" src="../../assets/doctor/block2/rectangle.png" alt="">
        <div class="description-descr">
            <h2 class="description-text2">
                Обязанности <span class="color">ветеринарного врача</span> в лечебницах <br>
                В государственных или частных клиниках работа ветеринаров заключается в следующем:
            </h2>
            <div class="description-text3">
                <p>стерилизация домашних животных (собак, кошек) <span class="color">-</span></p>
                <p>диагностика с целью выявления причин неприятных симптомов <span class="color">-</span></p>
                <p>лечение, включая переломы, вывихи, болезни желудочно-кишечного тракта <span class="color">-</span></p>
                <p>сердечно-сосудистой и других систем организма <span class="color">-</span></p>
                <p>косметологические процедуры: чистка ушей, зубов как правило, на базе частной <span class="color">-</span></p>
                <p>лечебницы можно получить услуги лечения животных на дому <span class="color">-</span></p>
                <p>некоторые ветеринарные клиники предлагают услуги груминга <span class="color">-</span></p>
            </div>
        </div>
        <p class="description-text4">
            Также ветеринарные специалисты борются с паразитами, вакцинируют пациентов, делают
            инъекции и капельницы. У ветеринара можно получить консультацию о питании, уходе
            за домашних животным.
        </p>
    </div>
</template>

<script setup>


</script>

<style lang="sass" scoped>
    
.description
    margin: 0 112px 60px 112px
    display: grid
    grid-template-columns: 40%  60% 
    &-text2
        color: #000
        font-family: Segoe UI
        font-size: 16px
        text-align: right
        margin-bottom: 8px
    &-text3
        text-align: right
        color: #000
        font-family: Segoe UI
        font-size: 16px
    &-text4
        margin-top: 34px
        grid-column-start: 1
        grid-column-end: 3
        color: #000
        font-family: Segoe UI
        font-size: 16px
.color
    color: #FF5A24
    font-family: Segoe UI
    font-size: 16px
    font-weight: 700
</style>