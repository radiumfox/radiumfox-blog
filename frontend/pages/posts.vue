<script setup lang="ts">
import { ref } from "vue";
import {$useFetch} from '~/composables/useFetchComposable';
import type {_AsyncData} from "#app/composables/asyncData";
const config = useRuntimeConfig();

const posts = ref([]);

async function fetchPosts() {
    await $useFetch(`${config.public.baseURL}/posts`).then((data: _AsyncData<any, any>) => {
        if(data.status.value === "success") {
            posts.value = data.data.value;
        }
    });
}

fetchPosts();

</script>
<template>
    <div>
        <template v-for="(post, idx) in posts" :key="idx">
            <div>
                <p>{{post.content}}</p>
                <p>{{post.date}}</p>
                <button  type="button">Delete</button>
                <button  type="button">Edit</button>
            </div>
        </template>
    </div>
</template>