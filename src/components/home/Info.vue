<template>
    <div class="info">
            <img class="info-img" src="../../assets/home/block5/mask1.png" alt="">
        <div class="info-descr">
            <span class="info-text">
                Если у вашего любимца ухудшилось<br>
                самочувствие, требуется инъекционное<br>
                лечение, воспользуйтесь услугами наших<br>
                ветеринарных врачей.
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
    height: 423px
    margin: 0 112px 65px 112px
    border-radius: 40px
    background: #35B8FE
    display: grid
    grid-template-columns: repeat(2, 1fr)
    &-img
        border-radius: 30px
        margin-top: -15px
    &-descr
        text-align-last: left
    &-telefon
        margin-top: 48px
    &-text
        color: #FFF
        font-family: Segoe UI
        font-size: 24px
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