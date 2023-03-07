//von spave-traveling-nuxt kopiert, muss noch angepasst werden. Weiß nicht ob das funktioniert


<template>
    <nav>
        <div class="flex navbar">
            <img src="logo.svg" alt="logo" class="logo" />
            <img class="controls" src="icon-hamburger.svg" v-if="!animateSlide" alt="hamburger-icon"
                @click="toggleSlider" />
        </div>

        <div class="slider flex" :class="{
            animateSlide: animateSlide,
            'underline-indicators':
                this.device === 'tablet' || this.device === 'desktop',
        }" style="--underline-gap: 2rem">
            <img class="controls" src="icon-close.svg" alt="close-icon" style="align-self: flex-end"
                @click="toggleSlider" />
            <span @click="toggleSlider" :class="{ active: $nuxt.$route.name === 'index' }"><nuxt-link
                    :to="{ name: 'index' }" class="numbered-title text-white">
                    <span>00</span> Home</nuxt-link></span>
            <span @click="toggleSlider" :class="{ active: $nuxt.$route.name === 'destination' }">
                <nuxt-link @click="toggleSlider" :to="{ name: 'destination' }" class="numbered-title text-white">
                    <span>01</span> Destination</nuxt-link></span>
            <span @click="toggleSlider" :class="{ active: $nuxt.$route.name === 'crew' }">
                <nuxt-link @click="toggleSlider" :to="{ name: 'crew' }" class="numbered-title text-white">
                    <span>02</span> Crew</nuxt-link></span>
            <span @click="toggleSlider" :class="{ active: $nuxt.$route.name === 'technology' }">
                <nuxt-link @click="toggleSlider" :to="{ name: 'technology' }" class="numbered-title text-white">
                    <span>03</span> Technology</nuxt-link></span>
        </div>
    </nav>
</template>
  
<script>
export default {
    data() {
        return {
            animateSlide: false,
            device: '',
        }
    },

    mounted() {
        this.setDevice()
    },
    methods: {
        toggleSlider() {
            this.animateSlide = !this.animateSlide
        },
        setDevice() {
            return window.innerWidth < 481
                ? (this.device = 'mobile')
                : window.innerWidth < 850
                    ? (this.device = 'tablet')
                    : (this.device = 'desktop')
        },
    },
}
</script>
  
<style scoped>
/* * {
    outline: 1px solid red;
  } */
.navbar {
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

.slider {
    position: absolute;
    right: -250px;
    top: 0;
    flex-direction: column;
    width: 250px;
    padding: 2rem 1.5rem;
    z-index: 1;
    background-color: #ffffff;
    height: 100vh;
    background: hsl(0, 0%, 50%, 0.5);
    backdrop-filter: blur(10px);
    display: none;
    gap: 2rem;
}

.animateSlide {
    display: flex;
    animation-name: slide;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}

/* .slide-enter-active {
    animation-name: slide;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
  
  .slide-leave-active {
    animation: slide 0.5s reverse;
  } */

@keyframes slide {
    0% {
        right: -250px;
    }

    100% {
        right: 0px;
    }
}

.numbered-title {
    text-decoration: none;
    font-size: 16px;
}

.numbered-title>span {
    color: var(--text-white);
}

.logo {
    width: 50px;
}

@media screen and (min-width: 480px) {
    .slider {
        all: initial;
        display: flex;
        width: 450px;
        gap: 2rem;
        background: hsl(0, 0%, 50%, 0.5);
        backdrop-filter: blur(10px);
        height: 87px;
        justify-content: center;
        align-items: center;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .controls {
        display: none;
    }

    .numbered-title {
        font-family: Barlow Condensed;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */

        letter-spacing: 2.3625px;
    }

    .numbered-title>span {
        display: none;
    }

    @media screen and (min-width: 850px) {
        nav {
            position: relative;
            top: 40px;
            padding-left: 40px;
        }

        .numbered-title>span {
            display: initial;
        }

        .slider {
            width: 830px;
            gap: 4rem;
        }

        .numbered-title {
            font-size: 16px;
        }

        .slider::before {
            content: '';
            height: 1px;
            position: absolute;
            width: 480px;
            border: 1px solid hsl(0, 0%, 50%, 0.5);
            left: -450px;
        }
    }
}
</style>
  