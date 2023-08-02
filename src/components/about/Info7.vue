<template>
    <div class="info">
        <img class="info-img" src="../../assets/abouts/block2/mask.png" alt="">
        <div class="info-descr">
            <h1 class="info-title">
                Наша миссия
            </h1>
            <span class="info-text">
                Чтобы полностью оправдать доверие клиентов,
                мы не прекращаем двигаться вперед – развиваемся
                и повышаем профессиональный уровень обслуживания
                посетителей. Наши врачи стажируются в ведущих
                клиниках мира, что позволяет нам успешно использовать
                опыт коллег. Дорожим репутацией, и шагаем в ногу со
                временем, внедряя новые, эффективные профилактические
                и терапевтические методы борьбы с заболеваниями.
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
    grid-template-columns: 40% 60%
    &-title
        color: #FFF
        font-family: Segoe UI
        font-size: 32px
        font-weight: 700
        margin-bottom: 8px
    &-img
        margin-top: -53px
    &-descr
        align-self: center
        padding-right: 120px
    &-telefon
        margin-top: 15px
    &-text
        color: #FFF
        font-family: Segoe UI
        font-size: 20px
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