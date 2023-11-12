<script setup lang="ts">
import { GET_POSTS, DELETE_POST, UPDATE_POST } from '~/api/queries';
import { ref } from "vue";

const posts = ref([]);

const content = ref("");
const title = ref("");
const tags = ref("");
const currentPostId = ref(null);
const editShow = ref(false);

async function fetchPosts() {
    await useAsyncQuery(GET_POSTS).then(data => {
        console.log(data);
        if(data.status.value === "success") {
            posts.value = data.data.value.posts;
        }
    });
}

fetchPosts();

function deletePost(id) {
    const {mutate: onError, onComplete} = useMutation(DELETE_POST, {
        variables: {
            id: id
        },
    });

    onError((err) => {
        console.log(JSON.stringify(err, null, 2));
    });


}

function openEdit(post) {
    content.value = post.content;
    title.value = post.title;
    currentPostId.value = post.id;
    editShow.value = true;
}

function editPost() {
    const {mutate: onError, onComplete} = useMutation(UPDATE_POST, {
        variables: {
            id: currentPostId.value,
            title: title.value,
            date: new Date().toISOString(),
            images: [''],
            content: content.value,
        },
    });

    onError((err) => {
        console.log(JSON.stringify(err, null, 2));
    });

}

</script>
<template>
    <div>
        <template v-for="(post, idx) in posts" :key="idx">
            <div>
                <p>{{post.content}}</p>
                <p>{{post.date}}</p>
                <button @click="deletePost(post.id)" type="button">Delete</button>
                <button @click="openEdit(post)" type="button">Edit</button>
            </div>
        </template>
    </div>

    <div v-show="editShow">
        <input v-model="title" placeholder="Title" type="text" />
        <input v-model="tags" placeholder="Tags" type="text" />
        <textarea placeholder="Content" v-model="content"></textarea>
        <button @click="editPost()">Save</button>
    </div>
</template>