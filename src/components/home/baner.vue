<template>
    <div class="baner">
        <div class="baner-description">
            <h1 class="baner-title">
                <span class="baner-title__color">
                    Ветеринарная<br/>клиника 
                </span> в вашем <br/> городе
            </h1>
            <div class="baner-number">
                <input class="baner-number__numb" type="text" placeholder="+7(000) 000-00-00">
                <button class="baner-number__btn">Записаться на прием</button>
            </div>
        </div>
        <div class="baner-img">
            <img src="../../assets/home/block3/dog.png" alt="dog">
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="sass" scoped>
    
.baner
    border-radius: 40px
    background: #FFEDC9
    height: 408px
    display: grid
    grid-template-columns: 60% 40%
    margin: 0 112px  64px  112px
    &-description
        align-self: center
        justify-self: center
    &-title
        font-family: Segoe UI
        font-size: 48px
        font-weight: 700
        margin-bottom: 50px
        &__color
            color: #FF6E42
            font-family: Segoe UI
            font-size: 48px
            font-weight: 700
    &-number
        display: grid
        grid-template-columns: 45% 55%
        width: 320px
        border-radius: 40px
        background: #FFF
        padding: 5px
        float: left
        &__numb
            width: 133px
            border: 0
            font-family: Segoe UI
            font-size: 16px
            justify-self: end
            &:focus
                outline: none
            &:hover
                outline: none
        &__btn
            margin: 0 auto
            color: #000
            font-family: Segoe UI
            font-size: 15px
            width: 168px
            padding: 9px
            border: 0
            border-radius: 40px
            background: #FFEDC9
            box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25)
            &:hover
                box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.6)
    &-img
        
</style>