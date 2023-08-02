<template>
    <div class="about">
        <h1 class="about-title">Все услуги</h1>
        <div class="about-columns">
            <div class="about-column">
                <div class="about-column-subsc">
                    <span class="about-column-subsc__line">-</span>
                    <p class="about-column-subsc__text">Ветеринарная помощь</p>
                </div>
                <div class="about-column-subsc">
                    <span class="about-column-subsc__line">-</span>
                    <p class="about-column-subsc__text">Ветеринар на дому</p>
                </div>
                <div class="about-column-subsc">
                    <span class="about-column-subsc__line">-</span>
                    <p class="about-column-subsc__text">Стерелизация</p>
                </div>
                <div class="about-column-subsc">
                    <span class="about-column-subsc__line">-</span>
                    <p class="about-column-subsc__text">Кастрация</p>
                </div>
                <div class="about-column-subsc">
                    <span class="about-column-subsc__line">-</span>
                    <p class="about-column-subsc__text">Лечение кошек</p>
                </div>
            </div>
            <div class="about-column">
                <div class="about-column-subsc">
                    <span class="about-column-subsc__line">-</span>
                    <p class="about-column-subsc__text">Лечение собак</p>
                </div>
                <div class="about-column-subsc">
                    <span class="about-column-subsc__line">-</span>
                    <p class="about-column-subsc__text">Лечение грызунов</p>
                </div>
                <div class="about-column-subsc">
                    <span class="about-column-subsc__line">-</span>
                    <p class="about-column-subsc__text">Лечение рептилий</p>
                </div>
                <div class="about-column-subsc">
                    <span class="about-column-subsc__line">-</span>
                    <p class="about-column-subsc__text">Вакцинация собак</p>
                </div>
                <div class="about-column-subsc">
                    <span class="about-column-subsc__line">-</span>
                    <p class="about-column-subsc__text">ЛВакцинация кошек</p>
                </div>
            </div>
            <div class="about-column">
                <div class="about-column-subsc">
                    <span class="about-column-subsc__line">-</span>
                    <p class="about-column-subsc__text">Анализы для кошек</p>
                </div>
                <div class="about-column-subsc">
                    <span class="about-column-subsc__line">-</span>
                    <p class="about-column-subsc__text">Вызов ветеринара</p>
                </div>
                <div class="about-column-subsc">
                    <span class="about-column-subsc__line">-</span>
                    <p class="about-column-subsc__text">Ветлечебница</p>
                </div>
                <div class="about-column-subsc">
                    <span class="about-column-subsc__line">-</span>
                    <p class="about-column-subsc__text">ипирование собак</p>
                </div>
                <div class="about-column-subsc">
                    <span class="about-column-subsc__line">-</span>
                    <p class="about-column-subsc__text">Чипирование кошек</p>
                </div>
            </div>
            <div class="about-column1">
                <div class="about-column1-subsc">
                    <span class="about-column1-subsc__line">-</span>
                    <p class="about-column1-subsc__text">Ритуальные услуги</p>
                </div>
                <div class="about-column1-subsc">
                    <span class="about-column1-subsc__line">-</span>
                    <p class="about-column1-subsc__text">Эвтаназия</p>
                </div>
                <div class="about-column1-subsc">
                    <span class="about-column1-subsc__line">-</span>
                    <p class="about-column1-subsc__text">Кремация</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="sass" scoped>
    
.about
    margin: 0 112px 48px 112px
    &-title
        color: #FF5A24
        font-family: Segoe UI
        font-size: 32px
        font-weight: 700
        margin-bottom: 36px
        text-align: left
    &-columns
        display: flex
        justify-content: space-between
    &-column
        display: flex
        flex-direction: column
        margin-left: 0
        &-subsc
            display: flex
            margin-left: 0
            &__text
                padding-bottom: 6px
                padding-left: 9px
                color: #000
                font-family: Segoe UI
                font-size: 20px
            &__line
                color: #ff5a24
    &-column1
        margin-top: 0
        display: flex
        flex-direction: column
        align-items: flex-start
        margin-left: 0
        &-subsc
            display: flex
            margin-left: 0
            &__text
                padding-bottom: 6px
                padding-left: 9px
                color: #000
                font-family: Segoe UI
                font-size: 20px
            &__line
                color: #ff5a24
</style>