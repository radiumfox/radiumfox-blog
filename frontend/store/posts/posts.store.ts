import { defineStore } from "pinia";
import type { _AsyncData } from "#app/composables/asyncData";

export const usePostsStore = defineStore("posts", () => {
  const { getData, updateData, deleteData, postData } = useFetching();

  const posts = ref([]);

  const getPosts = async () => {
    await getData("/posts")
      .then((res: _AsyncData<any, any>) => {
        if (res.status.value === "success") {
          posts.value = res.data.value;
          return 1;
        }
        throw new Error("Something is wrong");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getPost = async (id: string) => {
    await getData(`/posts/${id}`)
      .then((res: _AsyncData<any, any>) => {
        if (res.status.value === "success") {
          console.log(res);
          return res.data.value;
        }
        throw new Error("Something is wrong");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const createPost = async (data: any) => {
    await postData(`/posts`, data)
      .then((res: _AsyncData<any, any>) => {
        if (res.status.value === "success") {
          console.log(res);
          // posts.value.push(res.data.value)
          return 1;
        }

        throw new Error("Something is wrong");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updatePost = async (id: string, data: any, index: number) => {
    await updateData(`/posts/${id}`, data)
      .then((res: _AsyncData<any, any>) => {
        if (res.status.value === "success") {
          console.log(res);
          // posts.value[index] = res.data.value;
          return 1;
        }

        throw new Error("Something is wrong");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deletePost = async (id: string, index: number) => {
    await deleteData(`/posts/${id}`)
      .then((res: _AsyncData<any, any>) => {
        if (res.status.value === "success") {
          console.log(res);
          posts.value.splice(index, 1);
          return 1;
        }
        throw new Error("Something is wrong");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return {
    posts,
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
  };
});
