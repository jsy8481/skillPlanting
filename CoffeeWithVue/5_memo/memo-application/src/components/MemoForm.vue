<template>
  <div class="memo-form">
    <form @submit.prevent="sendMemo">
      <fieldset>
        <div>
          <input class="memo-form__title-form" type="text" v-model="title" placeholder="메모의 제목을 입력해주세요.">
          <textarea class="memo-form__content-form" v-model="content" placeholder="메모의 내용을 입력해주세요."/>
          <button type="reset" @click.prevent="resetFields"><i class="fas fa-sync-alt"></i></button>
        </div>
        <button type="submit" :disabled="!isCanSend">등록하기</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import {Memo} from "@/types/Memo"

export default {
    name: "MemoForm",
    data() {
        return {
            title: "",
            content: "",
        }
    },
    computed: {
        isCanSend() {
            return !!(this.title && this.content);
        }
    },
    methods: {
        sendMemo() {
            const id = new Date().getTime();
            console.log(12313123);
            this.$emit("sendMemo", new Memo({title: this.title, content: this.content, id}));
            this.resetFields();
        },
        resetFields() {
          this.title = "";
          this.content = "";
        },
    },
}
</script>

<style scoped>
.memo-form {
  margin-bottom: 24px;
  padding-bottom: 40px;
  border-bottom: 1px solid #eee;
}
.memo-form form fieldset div {
  position: relative;
  padding: 24px;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px -4px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
}
.memo-form form fieldset div button[type="reset"] {
  position: absolute;
  right: 20px;
  bottom: 20px;
  font-size: 16px;
  background: none;
}

.memo-form form fieldset button[type="submit"] {
  float: right;
  width: 96px;
  padding: 12px 0;
  border-radius: 4px;
  background-color: #ff5a00;
  color: #fff;
  font-size: 16px;
}

.memo-form form fieldset button[type="submit"]:disabled {
    background-color: gray;
}

.memo-form form fieldset .memo-form__title-form {
  width: 100%;
  margin-bottom: 12px;
  font-size: 18px;
  line-height: 26px;
}

.memo-form form fieldset .memo-form__content-form {
  width: 100%;
  height: 66px;
  font-size: 14px;
  line-height: 22px;
  vertical-align: top;
}

.memo-form input:focus {
  outline: none;
}
</style>
