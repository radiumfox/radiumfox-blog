<script setup lang="ts">
import {ref} from "vue";
import {CREATE_POST} from "~/api/queries";

const content = ref("");
const title = ref("");
async function createPost () {
    const { mutate: onDone, onError} = useMutation(CREATE_POST, {
        variables: {
            date: new Date().toISOString(),
            title: title.value,
            content: content.value,
        }
    });

    onDone((res) => {
        console.log(res);
    });

    onError((err) => {
        console.log(JSON.stringify(err, null, 2));
    });
}

</script>
<template>
    <input v-model="title" placeholder="Title" type="text" />
    <textarea placeholder="Content" v-model="content"></textarea>
    <button @click="createPost()">Create</button>
</template>