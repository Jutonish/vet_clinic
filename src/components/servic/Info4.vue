<template>
    <div class="info">
        <div class="info-img">
            <img src="../../assets/about/block3/mask-group.png" alt="">
        </div>
        <div class="info-descr">
            <span class="info-text">
                При звонке в ветеринарию клинику важно максимально
                подробно описать признаки, которые проявляются у
                животного. Специалист даст рекомендации, которые
                помогут облегчить состояние любимца. Более того,
                описание проблемы поможет врачу понять, какие инструменты,
                препараты, расходные материалы он должен взять с собой.
            </span>
            <div class="info-telefon">
                <button class="info-btn">Записаться на прием</button>
                <span class="info-number">8 800 900 50 10</span>
            </div>
            <p class="info-text2">*Ветеринар на дом может осуществить выезд в любое время
                – служба работает круглосуточно. Это полезная услуга,
                если речь идет об экстренной ситуации.</p>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="sass" scoped>

.info
    height: 495px
    margin: 0 112px 65px 112px
    border-radius: 40px
    background: #35B8FE
    display: grid
    grid-template-columns: 40% 60%
    &-img
        img
            margin-top: -14px
            margin-right: 0
    &-descr
        display: flex
        flex-direction: column
        justify-content: center
    &-telefon
        margin-top: 48px
    &-text
        color: #FFF
        font-family: Segoe UI
        font-size: 24px
        padding-right: 50px
    &-text2
        margin-top: 16px
        color: #FFF
        font-family: Segoe UI
        font-size: 14px
        padding-right: 85px
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