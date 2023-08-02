<template>
    <div class="veterinarian">
        <div class="veterinarian-text1">
            <h1 class="veterinarian-title">Ветеринар на дому</h1>
            <h2 class="veterinarian-subscr1">При каких симптомах стоит <span class="color">вызывать ветеринара</span> на дом?</h2>
            <p class="veterinarian-subscr2">
                Услуги ветврача нужны собаке, кошке, птице, грызуну или рептилии. Это может быть профилактический осмотр, срочная или<br>
                плановая хирургическая операция, кастрация, капельницы или инъекции, лечение травмы и многое другое. Большинство<br>
                манипуляций можно выполнить в условиях клиники. Однако, некоторые ситуации не дают возможности съездить в ветеринарную<br>
                клинику самостоятельно, так как помощь нужна незамедлительно.</p>
        </div>
        <div class="veterinarian-text2">
            <h2 class="veterinarian-subscr1">Выезд <span class="color">врача ветеринарной службы</span> обязателен при такой симптоматике:</h2>
            <p class="veterinarian-subscr2">
                <span class="color2">-</span> Cильное кровотечение у собаки или кошки; рвота или жидкий стул, которые продолжаются более 4-х часов, 
                особенно важно вызывать ветеринара, если в массах присутствуют посторонние примеси, например, кровь, 
                пена, желчь;
            </p>
            <p class="veterinarian-subscr2">
                <span class="color2">-</span> Помощь на дому необходима при жаре, ознобе;
            </p>
            <p class="veterinarian-subscr2">
                <span class="color2">-</span> Признаки эпилепсии;
            </p>
            <p class="veterinarian-subscr2">
                <span class="color2">-</span> Удушье (собака или кошка ведут себя беспокойно, тяжело дышат, наблюдается посинение языка, обморочное
                 состояние, слабость мышц);
            </p>
            <p class="veterinarian-subscr2">
                <span class="color2">-</span> Сильное отравление, у животного наблюдаются конвульсии – вызов врача с выездом на дом в этом случае обязателен;
            </p>
            <p class="veterinarian-subscr2">
                <span class="color2">-</span> Паралич – питомец не может встать на лапы.
            </p>
        </div>
        <div class="veterinarian-text3">
            <img src="../../assets/about/block2/12.png" alt="">
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="sass" scoped>
    
.veterinarian
    margin: 0 112px 94px 112px
    display: grid
    grid-template-columns: repeat(3, 1fr)
    &-text1
        grid-column-start: 1
        grid-column-end: 4
        margin-bottom: 36px
        display: flex
        flex-direction: column
        justify-content: flex-start
    &-text2
        grid-column-start: 1
        grid-column-end: 3
    &-text3
        margin-left: 23px   
    &-title
        color: #FF5A24
        font-family: Segoe UI
        font-size: 32px
        font-weight: 700
        margin-bottom: 36px
    &-subscr1
        color: #000
        font-family: Segoe UI
        font-size: 20px
        font-weight: 700
        margin-bottom: 24px
    &-subscr2
        color: #000
        font-family: Segoe UI
        font-size: 20px

.color
    color: #FF5A24
    font-family: Segoe UI
    font-size: 20px
    font-weight: 700
.color2
    color: #FF5A24

</style>