<template>
    <div class="diagnostics">
        <h1 class="diagnostics-title">
            Диагностика и лечение
        </h1>
        <img class="diagnostics-img" src="../../assets/abouts/block3/vector4.png" alt="">
        <p class="diagnostics-text">
            Знакомство с пациентом начинается с осмотра и диагностики проблемы.
            Владельцу животного важно дать подробные ответы на вопросы врача,
            что позволит специалисту предположить заболевание. Если есть
            необходимость ветеринар проводит диагностику, используя аппаратуру,
            лабораторные исследования. Также может быть рекомендована консультация
            узкопрофильного доктора. На базе полученных результатов разрабатывается
            схема лечения. Она может включать пересмотр питания, прием антибиотиков,
            витаминов, других лекарственных препаратов. Если требуется хирургическое
            вмешательство операцию проводят экстренно или планово – это зависит от
            состояния пациента. Если говорить о длительном лечении, ветеринар
            отслеживает динамику улучшений, вносит изменения в терапевтический
            план по мере необходимости.
        </p>
    </div>
</template>

<script setup>


</script>

<style lang="sass" scoped>
    
.diagnostics
    margin: 0 112px 60px 112px
    display: grid
    grid-template-columns: 40% 60%
    &-title
        color: #FF5A24
        font-family: Segoe UI
        font-size: 32px
        font-weight: 700
        grid-column-start: 1
        grid-column-end: 3
        margin-bottom: 30px
    &-text
        margin-left: 20px
        align-self: center
        padding: 16px 20px 16px 0
        color: #000
        font-family: Segoe UI
        font-size: 16px
        border-top: 5px solid #FEE7C8
        border-bottom: 5px solid #FEE7C8
</style>