<template>
    <div>
        <div class="hello">
            sdafsdafsdf
            <slot name="todo" todo="why???"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>