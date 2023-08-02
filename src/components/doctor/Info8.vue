<template>
    <div class="info">
        <div class="info-descr">
            <span class="info-text">
                Когда стоит посетить клинику и вызывать врача на дом<br>
                Современные ветеринарные клиники предлагают услуги выезда на дом. Однако,
                вызов актуален не всегда. Ведь в домашних условиях невозможно провести
                инструментальную диагностику или сложную хирургическую операцию. Выезд на
                дом стоит дороже, но при этом экономит время владельца питомца, избавляет
                животное от стресса, связанного с транспортировкой и длительным ожиданием
                своей очереди. Дома можно получить лечение такого типа:<br>
                · диагностирование;<br>
                · капельницы и инъекции;<br>
                · кастрация или стерилизация;<br>
                · консультация по поведению, питанию;<br>
                · экстренная помощь с последующей госпитализацией.
            </span>
            <div class="info-telefon">
                <button class="info-btn">Записаться на прием</button>
                <span class="info-number">8 800 900 50 10</span>
            </div>
        </div>
        <img class="info-img" src="../../assets/doctor/block3/image-331.png" alt="">
    </div>
</template>

<script setup>

</script>

<style lang="sass" scoped>

.info
    height: 528px
    margin: 0 112px 65px 112px
    border-radius: 40px
    background: #35B8FE
    display: grid
    grid-template-columns: 70% 30%
    margin-bottom: 100px
    &-img
        align-self: end
        justify-self: end
        margin-right: -2px
    &-descr
        align-self: center
        padding-left: 40px
    &-telefon
        margin-top: 32px
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