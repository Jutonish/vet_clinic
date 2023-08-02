<template>
    <div class="help">
        <div class="help-title">Помощь на дому: <span class="color">преимущества</span> услуги</div>
        <div class="help-subscr1">
            <div class="help-text">
                <span class="color2">-</span>
                <p>
                    Цена выезда дороже, чем посещение ветеринарной клиники.
                    Однако, расходы оправданы – питомец получит нужное лечение без потери драгоценного времени.
                </p>
            </div>
            <div class="help-text">
                <span class="color2">-</span>
                <p>
                    Стандартное посещение ветклиники связано с поездкой в
                    транспорте, очередями, контактом с другими животными – это факторы стресса.
                </p>
            </div>
            <div class="help-text">
                <span class="color2">-</span>
                <p>
                    Выезд врача позволит быстро оказать помощь животному,
                    что особенно важно, если оно находится в критическом состоянии.
                </p>
            </div>
        </div>
        <img src="../../assets/about/block4/vector3.png" alt="">
        <div class="help-subscr1">
            <div class="help-text">
                <span class="color2">-</span>
                <p>
                    При посещении ветеринарного учреждения есть риск заразиться 
                    инфекционным заболеванием. Чтобы обезопасить собаку, кошку, которые не прошли вакцинацию,
                    лучше заказать услугу выезда на дом
                </p>
            </div>
            <div class="help-text">
                <span class="color2">-</span>
                <p>
                    Если у питомца сложный характер, он слишком активен или
                    агрессивен, лучше ограничиться домашним лечением.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="sass" scoped>
    
.help
    margin: 0 112px 50px 112px
    display: grid
    grid-template-columns: repeat(3, 1fr)
    &-text
        display: flex
    &-title
        grid-column-start: 1
        grid-column-end: 4
        margin-bottom: 35px
        color: #000
        font-family: Segoe UI
        font-size: 20px
        font-weight: 700
    &-subscr1
        align-self: center
        p
            color: #000
            font-family: Segoe UI
            font-size: 16px
            margin-bottom: 20px
            padding-right: 20px
            padding-left: 8px

.color
    color: #FF5A24
    font-family: Segoe UI
    font-size: 20px
    font-weight: 700
.color2
    color: #FF5A24
</style>