<template>
    <div class="procedures">
        <div class="procedures-block1">
            <h2 class="procedures-title">Вакцинация</h2>
            <span class="procedures-text">
                Регулярные прививки защищают<br>
                питомцев от опасных инфекционных<br>
                болезней</span>
            <img class="procedures-img" src="../../assets/home/block6/image-338.png" alt="">
        </div>
        <div class="procedures-block">
            <div class="procedures-block2">
                <h2 class="procedures-title">Лаборатория</h2>
                <span class="procedures-text">
                    Проведение лабораторно-<br>
                    диагностических исследований<br>
                    болезней животных</span>
            </div>
            <div class="procedures-block3">
                <h2 class="procedures-title">Чипирование</h2>
                <span class="procedures-text">
                    Под кожу питомцу вживляется<br>
                    микрочип-транспондер,<br>
                    несущий в себе информацию</span>
            </div>
        </div>
        <div class="procedures-block4">
            <h2 class="procedures-title">Стационар</h2>
            <span class="procedures-text">
                Отмечают слабость, вялость,<br>
                отсуствие аппетита в течении<br>
                нескольких дней</span>
            <img class="procedures-img2" src="../../assets/home/block6/image-336.png" alt="">
        </div>
        <div class="procedures-block5">
            <div class="procedures-description">
                <h2 class="procedures-title">Дерматология</h2>
                <span class="procedures-text">
                    Диагностика, лечение и профилактика<br>
                    различных заболеваний, связанных с<br>
                    поражением кожи, шерсти, ушей</span>
            </div>
            <img class="procedures-img3" src="../../assets/home/block6/image-337.png" alt="">
        </div>
        <div class="procedures-block6">
            <h2 class="procedures-title">Стоматология</h2>
            <span class="procedures-text">
                Заболевание органов ротовой<br>
                полости домашних животных</span>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="sass" scoped>

.procedures
    margin: 0 112px 107px 112px
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-gap: 20px
    text-align-last: left
    &-img
        position: absolute
        margin-top: -20px
    &-block
        width: 100%
    &-block1
        border-radius: 40px
        background: #FFF0D6
        height: 467px
        width: 100%
    &-block2
        border-radius: 40px
        background: #FFF0D6
        height: 220px

    &-block3
        margin-top: 20px
        border-radius: 40px
        background: #FFF0D6
        height: 220px
    &-block4
        border-radius: 40px
        background: #FFF0D6
        height: 364px
        width: 100%
        margin-top: 0
    &-block5
        margin-top: 0
        border-radius: 40px
        background: #FFF0D6
        grid-column-start: 1
        grid-column-end: 3
        align-self: start
        height: 226px
        display: flex
        width: 100%
    &-img2
        margin-top: -60px
        margin-left: 100px
    &-img3
        margin-top: -30px
    &-block6
        height: 329px
        border-radius: 40px
        background: #FFF0D6
        width: 100%
        margin-top: -105px
    &-title
        color: #FF6E42
        font-family: Segoe UI
        font-size: 32px
        padding-left: 32px
        padding-top: 32px
    &-text
        display: block
        color: #000
        font-family: Segoe UI
        font-size: 16px
        height: 78px
        padding-left: 32px
        padding-top: 16px
</style>