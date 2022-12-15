import {ref} from "vue";
import axios from "axios";

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            let {data} = await axios.get("http://localhost:3000/posts");
            posts.value = data;
        } catch(e) {
            error.value = e.message;
        }
    }

    return {
        posts,
        error,
        load,
    }
}

export default getPosts;
