<template>
    <div class="about">
        <h1 class="about-title">О компании</h1>
        <div class="about-subsrc">
            <p class="about-text">
                Успешная работа ветеринарной клиники невозможна без квалифицированного
                коллектива. Наша команда представлена терапевтами, хирургами, кардиологами,
                дерматологами, ортопедами, онкологами, эндокринологами и другими
                узкопрофильными врачами, имеющими большой практический опыт в оказании
                экстренной помощи и лечении домашних животных. Клиника располагает
                современным диагностическим оборудованием, применяет передовые методы
                исследований и терапии.
            </p>
            <p class="about-text2">Используемая аппаратура отвечает действующим европейским стандартам и
                позволяет проводить полные обследования собак, кошек и других животных
                с целью постановки точного диагноза и назначения эффективного лечения.
                Наши специалисты оказывают следующие услуги:
            </p>
            <div class="about-text3">
                <p><span class="color">-</span> профессиональная консультация, касающаяся состояния больного и его последующего лечения;</p>
                <p><span class="color">-</span> ведение истории болезни питомца;</p>
                <p><span class="color">-</span> диагностика инструментальными и лабораторными методами</p>
                <p><span class="color">-</span> консультации по уходу и питанию;</p>
                <p><span class="color">-</span> лечение врожденных и приобретенных болезней;</p>
                <p><span class="color">-</span> скорая помощь на дому;</p>
                <p><span class="color">-</span> капельницы и инъекции;</p>
                <p><span class="color">-</span> кастрация и стерилизация;</p>
                <p><span class="color">-</span> гигиенические процедуры;</p>
                <p><span class="color">-</span> перевязки и многое другое.</p>
            </div>
        </div>
        <img src="../../assets/abouts/block1/rectangle.png" alt="">
        <p class="about-text4">
            Каждый пациент для нас особый, поэтому наши врачи предпочитают
            индивидуальный подход и предпринимают все возможное, чтобы пациент чувствовал себя комфортно.
        </p>
    </div>
</template>

<script setup>

</script>

<style lang="sass" scoped>
    
.about
    margin: 0 112px 76px 112px
    display: grid
    grid-template-columns: 60% 40%
    &-title
        color: #FF5A24
        font-family: Segoe UI
        font-size: 32px
        font-weight: 700
        grid-column-start: 1
        grid-column-end: 3
        margin-bottom: 44px
    &-text, &-text2, &-text3, &-text4
        color: #000
        font-family: Segoe UI
        font-size: 16px
    &-text
        margin-bottom: 32px
    &-text2
        margin-bottom: 16px
        padding-right: 50px
    &-text3
        display: flex
        flex-direction: column
        p
            padding-bottom: 10px
    &-text4
        margin-top: 50px
        grid-column-start: 1
        grid-column-end: 3
        

.color
    color: #FF5A24
</style>