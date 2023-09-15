import { usePostStore } from "~/stores/posts";

export default defineNuxtPlugin((NuxtApp) => {
  return {
    provide: {
      postStore: usePostStore(),
    },
  };
});
