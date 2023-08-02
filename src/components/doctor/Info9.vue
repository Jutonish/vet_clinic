<template>
    <div class="info">
        <img class="info-img" src="../../assets/doctor/block6/image-333.png" alt="">
        <div class="info-descr">
            <span class="info-text">
                Цены на лечение в ветеринарных клиниках зависят<br>
                от повода обращения, длительности терапии и ее<br>
                сложности. Получить информацию о стоимости<br>
                можно по телефону учреждения.
            </span>
            <div class="info-telefon">
                <button class="info-btn">Записаться на прием</button>
                <span class="info-number">8 800 900 50 10</span>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="sass" scoped>

.info
    height: 344px
    margin: 0 112px 65px 112px
    border-radius: 40px
    background: #35B8FE
    display: grid
    grid-template-columns: 55% 45%
    &-img
        align-self: end
        justify-self: end
        padding-right: 30px
    &-descr
        align-self: center
    &-telefon
        margin-top: 48px
    &-text
        color: #FFF
        font-family: Segoe UI
        font-size: 20px
        padding-right: 40px
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