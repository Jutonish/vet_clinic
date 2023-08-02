<template>
    <div class="nav">
        <div class="nav-navigation">
            <router-link to="/vet_clinic" class="nav-link">
                <span class="nav-text">Главная</span>
            </router-link>
            <router-link to="/AboutCompany" class="nav-link">
                <span class="nav-text">О компании</span>
            </router-link>
            <router-link to="/Services" class="nav-link">
                <span class="nav-text">Услуги</span>
                <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 6L13 1" stroke="black"/>
                </svg>
            </router-link>
            <router-link to="/Doctors" class="nav-link">
                <span class="nav-text">Врачи</span>
                <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 6L13 1" stroke="black"/>
                </svg>
            </router-link>
            <router-link to="/News" class="nav-link"><span class="nav-text">Блог</span></router-link>
            <router-link to="/Contact" class="nav-link"><span class="nav-text">Контакты</span></router-link>
        </div>
        <div class="nav-search">
            <input class="nav-sear" type="text" placeholder="Поиск">
        </div>
        <button class="nav-bases">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="u:align-justify">
            <path id="Vector" d="M3 7H21C21.2652 7 21.5196 6.89464 21.7071 6.70711C21.8946 6.51957 22 6.26522 22 6C22 5.73478 21.8946 5.48043 21.7071 5.29289C21.5196 5.10536 21.2652 5 21 5H3C2.73478 5 2.48043 5.10536 2.29289 5.29289C2.10536 5.48043 2 5.73478 2 6C2 6.26522 2.10536 6.51957 2.29289 6.70711C2.48043 6.89464 2.73478 7 3 7ZM21 17H3C2.73478 17 2.48043 17.1054 2.29289 17.2929C2.10536 17.4804 2 17.7348 2 18C2 18.2652 2.10536 18.5196 2.29289 18.7071C2.48043 18.8946 2.73478 19 3 19H21C21.2652 19 21.5196 18.8946 21.7071 18.7071C21.8946 18.5196 22 18.2652 22 18C22 17.7348 21.8946 17.4804 21.7071 17.2929C21.5196 17.1054 21.2652 17 21 17ZM21 13H3C2.73478 13 2.48043 13.1054 2.29289 13.2929C2.10536 13.4804 2 13.7348 2 14C2 14.2652 2.10536 14.5196 2.29289 14.7071C2.48043 14.8946 2.73478 15 3 15H21C21.2652 15 21.5196 14.8946 21.7071 14.7071C21.8946 14.5196 22 14.2652 22 14C22 13.7348 21.8946 13.4804 21.7071 13.2929C21.5196 13.1054 21.2652 13 21 13ZM21 9H3C2.73478 9 2.48043 9.10536 2.29289 9.29289C2.10536 9.48043 2 9.73478 2 10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H21C21.2652 11 21.5196 10.8946 21.7071 10.7071C21.8946 10.5196 22 10.2652 22 10C22 9.73478 21.8946 9.48043 21.7071 9.29289C21.5196 9.10536 21.2652 9 21 9Z" fill="#DF8732"/>
            </g>
            </svg>
            <span class="nav-base">База знаний</span>
        </button>
    </div>
</template>

<script setup>

</script>

<style lang="sass" scoped>
.nav
    display: flex
    margin: 0 184px 71px 216px
    justify-content: space-between
    &-navigation
        display: flex
        align-items: center
    &-link
        text-decoration: none
        margin-right: 28px
        &:hover
            text-decoration: underline
    &-text
        color: #000
        font-family: Segoe UI
        font-size: 16px
        font-weight: 400
        margin-right: 8px
        &:active
            color: #f00

    &-sear
        width: 240px
        height: 40px
        border-radius: 31px
        border: 1px solid #F5EFEF
        text-align: left
        padding-left: 16px
        &:focus
            outline: none
        &:hover
            outline: none
    &-bases
        display: flex
        align-items: center
        padding: 9px 16px
        border-radius: 31px
        background: #FDE2C8
        height: 40px
        color: #DF8732
        border: 0
        &:hover
            background: #FBCEB1
    &-base
        font-family: Segoe UI
        font-size: 14px
        margin-left: 8px
</style>