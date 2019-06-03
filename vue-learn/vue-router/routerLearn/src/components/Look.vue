<template>
    <div class="look">
        <h1>{{msg}}</h1>
        {{$route.params.id}}
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Look',
    data () {
        return {
            msg: '看一看'

        }
    }
}
</script>