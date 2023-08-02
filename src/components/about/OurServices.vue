<template>
    <div class="diagnostics">
        <h1 class="diagnostics-title">
            Почему стоит воспользоваться <span class="color">нашими услугами</span>
        </h1>
        <div class="diagnostics-descr">
            <p class="diagnostics-text">
                Скорая ветеринарная помощь для питомцев на дому – услуга
                востребованная среди многих владельцев животных. Если у
                вашего любимца ухудшилось самочувствие, требуется инъекционное
                лечение, воспользуйтесь услугами наших ветеринарных врачей.
                Клиентам предлагаем:
            </p>
            <div class="diagnostics-text1">
                <span class="color2">1.</span>
                <p>Профессиональный подход. Каждый сотрудник клиники – специалист с высшим медицинским образованием. Доктора знакомы с психологией животных, умеют находить подход к активным, агрессивным, пугливым пациентам.</p>
            </div>
            <div class="diagnostics-text1">
                <span class="color2">2.</span>
                <p>Внимание и забота. Мы точно знаем, что быстрое восстановление возможно только без стресса – мы заботимся о пациентах и делаем все возможное, чтобы они не испытывали стресса.</p>
            </div>
            <div class="diagnostics-text1">
                <span class="color2">3.</span>
                <p>Ответственность. Принимаем взвешенные решения, учитывая результаты исследований и потребности пациентов. Работаем с самыми сложными ситуациями.</p>
            </div>
            <div class="diagnostics-text1">
                <span class="color2">4.</span>
                <p>Экстренная помощь. Располагаем современным оборудованием для исследований и диагностики на дому.</p>
            </div>
            <div class="diagnostics-text1">
                <span class="color2">5.</span>
                <p>Консультации. Подробно отвечаем на вопросы, относящиеся к здоровью животного, лечению. Даем рекомендации по уходу и питанию.</p>
            </div>
        </div>
        <img class="diagnostics-img" src="../../assets/abouts/block4/vector3.png" alt="">

    </div>
</template>

<script setup>


</script>

<style lang="sass" scoped>
    
.diagnostics
    margin: 0 112px 60px 112px
    display: grid
    grid-template-columns: 70% 30%
    &-title
        color: #000
        font-family: Segoe UI
        font-size: 32px
        font-weight: 700
        grid-column-start: 1
        grid-column-end: 3
        margin-bottom: 48px
    &-text
        align-self: center
        padding: 16px 20px 36px 0
        color: #000
        font-family: Segoe UI
        font-size: 16px
    &-text1
        display: flex
        line-height: 160%
        padding-bottom: 10px
.color
    color: #FF5A24
    font-family: Segoe UI
    font-size: 32px
    font-weight: 700
.color2
    color: #FF5A24
    font-size: 16px
    font-weight: 700
</style>