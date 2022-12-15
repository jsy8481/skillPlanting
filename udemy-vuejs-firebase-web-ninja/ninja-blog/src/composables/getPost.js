import {ref} from "vue";
import axios from "axios";

const getPost = (id) => {
    const post = ref(null);
    const error = ref(null);

    const load = async () => {
        try {
            await new Promise(resolve => {
                setTimeout(resolve, 2000);
            })
            let {data} = await axios.get(`http://localhost:3000/posts/${id}`);
            post.value = data;
        } catch (e) {
            error.value = e.message;
        }
    }

    return {
        post, error, load,
    }
}

export default getPost;
