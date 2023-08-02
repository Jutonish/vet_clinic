<template>
    <div class="doctor">
        <h1 class="doctor-title">Врачи</h1>
        <p class="doctor-text">
            Ветеринар – врач, в обязанности которого входит осмотр животных, диагностика,
            лечения, профилактика заболеваний. После завершения обучения доктор получает
            диплом общего профиля, а значит может заниматься терапией как домашних
            питомцев, например, собак и кошек, так и лечением крупного рогатого скота.
            Также специалисты принимают таких пациентов, как грызуны, рептилии, птицы.
            Врач-ветеринар может получить специализацию, например, онколога, кардиолога,
            хирурга. Есть доктора, которые работают с дикими животными в зоопарках,
            цирках и пр.
        </p>
        <div class="doctor-descr">
            <h2 class="doctor-text2">Чем занимаются <span class="color">ветеринары</span></h2>
            <p class="doctor-text3">
                Работа ветеринарным врачом многогранна. Так, в обязательности специалиста
                входит контроль за здоровьем животных на фермах, прием больных питомцев в
                ветклинике, выезд на дом по индивидуальному вызову к собаке или кошке.
            </p>
            <h2 class="doctor-text2">Кроме этого, <span class="color">специалисты</span> занимаются:</h2>
            <div class="doctor-text3">
                <p><span class="color">-</span> искусственным осеменением.</p>
                <p><span class="color">-</span> ведением беременности и приемом родов.</p>
                <p><span class="color">-</span> хирургическими манипуляциями.</p>
                <p><span class="color">-</span> сбором биологического материала для последующих лабораторных исследованиях.</p>
                <p><span class="color">-</span> чипированием.</p>
                <p><span class="color">-</span> вакцинацией.</p>
                <p><span class="color">-</span> оформлением документов для домашних животных.</p>
            </div>
        </div>
        <img class="doctor-img" src="../../assets/doctor/block1/rectangle.png" alt="">
    </div>
</template>

<script setup>


</script>

<style lang="sass" scoped>
    
.doctor
    margin: 0 112px 0 112px
    display: grid
    grid-template-columns: 60% 40% 
    &-title
        color: #FF5A24
        font-family: Segoe UI
        font-size: 32px
        font-weight: 700
        grid-column-start: 1
        grid-column-end: 3
        margin-bottom: 36px
    &-text
        color: #000
        font-family: Segoe UI
        font-size: 16px
        margin-bottom: 50px
        grid-column-start: 1
        grid-column-end: 3
    &-text2
        color: #000
        font-family: Segoe UI
        font-size: 20px
        margin-bottom: 14px
    &-text3
        padding-right: 30px
        color: #000
        font-family: Segoe UI
        font-size: 16px
        margin-bottom: 24px
.color
    color: #FF5A24
    font-family: Segoe UI
    font-size: 20px
</style>