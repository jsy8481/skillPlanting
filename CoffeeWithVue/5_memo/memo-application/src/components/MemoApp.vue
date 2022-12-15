<template>
    <div class="memo-app">
        <MemoForm @sendMemo="addMemo"/>
        <ul class="memo-list">
            <MemoItem
                    v-for="memo in memos"
                    :key="memo.id"
                    :memo="memo"
                    @delete="deleteMemo"
            />
        </ul>
    </div>
</template>

<script>
import MemoForm from "@/components/MemoForm";
import MemoItem from "@/components/MemoItem";
import {Memo} from "@/types/Memo";

export default {
    name: "MemoApp",
    components: {MemoItem, MemoForm},
    data() {
        return {
            memos: [],
        }
    },
    created() {
        const savedObjectMemos = localStorage.memos ? JSON.parse(localStorage.memos) : [];
        this.memos = savedObjectMemos.map(savedObjectMemo => new Memo(savedObjectMemo));
        window.addEventListener("unload", () => {
            this.storeMemo();
        })
    },
    methods: {
        addMemo(memo) {
            this.memos.push(memo);
        },
        storeMemo() {
            const memosToString = JSON.stringify(this.memos);
            localStorage.setItem("memos", memosToString);
        },
        deleteMemo(id) {
            const targetIndex = this.memos.findIndex(memo => memo.id === id);
            this.memos.splice(targetIndex, 1);
        },
    },
}
</script>

<style scoped>
.memo-list {
    padding: 20px 0;
    margin: 0;
}
</style>
