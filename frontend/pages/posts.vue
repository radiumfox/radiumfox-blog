<script setup lang="ts">
import { ref } from "vue";
import {$useFetch} from '~/composables/useFetchComposable';
import type {_AsyncData} from "#app/composables/asyncData";
const config = useRuntimeConfig();

const posts = ref([]);
const title = ref('');
const content = ref('');
const tags = ref('');
const editedPost = ref(-1);

async function getPost(id) {
    await $useFetch(`${config.public.baseURL}/posts/${id}`).then((res: _AsyncData<any, any>) => {
        console.log(res);
    });
}


async function  updatePost(id, index) {
    const tagsList = tags.value.split(',').map(v => v.trim()) || ['']
    const data = {
        id: id,
        title: title.value,
        content: content.value,
        tags: tagsList,
        images: ['']
    }

    await $useFetch(
        `${config.public.baseURL}/posts/${id}`,
        {
            method: "PUT",
            body: data
        }
    ).then((res: _AsyncData<any, any>) => {
        console.log(res);

        if(res.status.value === "success") {
            closeForm();
            location.reload();
            // TODO возвращать объект с отредактированным постом
        }
    });
}

async function getPosts() {
    await $useFetch(`${config.public.baseURL}/posts`).then((res: _AsyncData<any, any>) => {
        if(res.status.value === "success") {
            posts.value = res.data.value;
        }
    });
}

async function deletePost(id, index) {
    await $useFetch(`${config.public.baseURL}/posts/${id}`, {
        method: "DELETE"
    }).then((res) => {
        console.log(res)
        if(res.status.value === "success") {
            posts.value.splice(index, 1);
        }
    }).catch((e)=> {
        console.log(e);
    })
}

const editPost = (index) => {
    const post = posts.value[index];
    clearInputs();

    content.value = post.content;
    title.value = post.title;
    tags.value = post.tags.join(',');

    editedPost.value = index;
}

const closeForm = () => {
    editedPost.value = -1;
}

const clearInputs = () => {
    content.value = '';
    title.value = '';
    tags.value = '';
}

getPosts();

</script>
<template>
    <div>
        <div style="margin-bottom: 50px">
            <template v-for="(post, idx) in posts" :key="idx">
                <div>
                    <h3>{{post.title}}</h3>
                    <p>{{post.content}}</p>
                    <em>Date: {{post.date}}</em>
                    <div>
                        <template v-for="(tag, index) in post.tags">
                            <em>{{tag}}{{index < post.tags.length - 1 ? ', ' : ''}}</em>
                        </template>
                    </div>

                    <div v-if="editedPost === idx" style="width: 500px">
                        <h3>Edit post</h3>
                        <div style="display: flex; flex-direction: column">
                            <label for="title">Title</label>
                            <input name="title" v-model="title" type="text" />
                        </div>
                        <div style="display: flex; flex-direction: column">
                            <label for="content">Content</label>
                            <textarea name="content" v-model="content" ></textarea>
                        </div>
                        <div style="display: flex; flex-direction: column; margin-bottom: 20px">
                            <label for="tags">Tags</label>
                            <input name="tags" v-model="tags" type="text" placeholder="list separated by commas" />
                        </div>

                        <button type="button" @click="updatePost(post._id)">Save</button>
                        <button type="button" @click="closeForm()">Close</button>
                    </div>
                    <template v-else>
                        <button @click="editPost(idx)" type="button">Edit</button>
                        <button @click="deletePost(post._id, idx)" type="button">Delete</button>
                    </template>
                    <hr>
                </div>
            </template>
        </div>
    </div>
</template>