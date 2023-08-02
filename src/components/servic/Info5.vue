<template>
    <div class="info">
        <div class="info-descr">
            <span class="info-text1">
                Цены на услуги различаются и зависят от таких факторов:<br>
                · местоположение пациента;<br>
                · тип проблемы;<br>
                · особенности и длительность лечения.<br>
            </span>
            <span class="info-text2">
                Узнать цены можно по телефону – после того, как
                вы опишите проблему, специалист назовет ориентировочную
                стоимость услуг.
            </span>
            <div class="info-telefon">
                <button class="info-btn">Записаться на прием</button>
                <span class="info-number">8 800 900 50 10</span>
            </div>
        </div>
            <img class="info-img" src="../../assets/about/block5/image-344.png" alt="">
    </div>
</template>

<script setup>

</script>

<style lang="sass" scoped>

.info
    height: 368px
    margin: 0 112px 65px 112px
    border-radius: 40px
    background: #35B8FE
    display: grid
    grid-template-columns: repeat(2, 1fr)
    margin-bottom: 100px
    &-img
        align-self: end
    &-descr
        align-self: center
        padding-left: 72px
    &-telefon
        margin-top: 24px
    &-text1
        color: #FFF
        font-family: Segoe UI
        font-size: 20px
        margin-bottom: 20px
    &-text2
        color: #FFF
        font-family: Segoe UI
        font-size: 20px
        margin-top: 20px
    &-btn
        color: #000
        font-family: Segoe UI
        font-size: 16px
        padding: 9px 24px
        border-radius: 31px
        background: #FDE2C7
        border: 0
        margin-right: 48px
        &:hover
                box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.6)
    &-number
        color: #FFF
        font-family: Segoe UI
        font-size: 24px
</style>