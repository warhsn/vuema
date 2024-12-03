<template>
    <p 
        v-if="hasErrors"
        class="help is-danger">
        <span v-for="error in error">
            {{ error }}<br>
        </span>
    </p>
</template>
<script setup lang="ts">
import { _hasErrors, _error } from '../computed/errors'
import { _Errors } from '../interfaces/errors'

const props = defineProps< _Errors>()
const hasErrors = _hasErrors(props)
const error = _error(props)
</script>