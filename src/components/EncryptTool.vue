<template>
  <div>
    <a-row :gutter="[10, 10]">
      <a-col :span="24">
        <a-textarea
          v-model:value="originalText"
          placeholder="please input text"
          :rows="10"
          allow-clear
        ></a-textarea>
      </a-col>
      <a-col :span="24">
        <a-row :gutter="20">
          <a-col :span="12">
            <a-input-password
              v-model:value="secretKey"
              placeholder="please input key"
            ></a-input-password>
          </a-col>
          <a-col :span="12">
            <a-space>
              <a-button
                type="primary"
                @click.stop="doEncode(originalText, secretKey, cipherText)"
                >加密</a-button
              >
              <a-button
                type="primary"
                @click.stop="doDecode(originalText, secretKey, cipherText)"
                >解密</a-button
              >
            </a-space>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="24">
        <a-textarea
          v-model:value="cipherText"
          :rows="10"
          allow-clear
        ></a-textarea>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CryptoJS from "crypto-js";
import AES from "crypto-js/aes";
import { message } from "ant-design-vue";

const originalText = ref("");
const secretKey = ref("");
const cipherText = ref("");

/* 加密 */
function doEncode(text, key, result) {
  cipherText.value = "";
  if (!text.length) {
    message.error("请输入原文！");
    return false;
  }
  if (!key.length) {
    message.error("请输入密钥！");
    return false;
  }
  cipherText.value = AES.encrypt(text, key).toString();
}

/* 解密 */
function doDecode(text, key, result) {
  if (!result.length) {
    message.error("请输入密文！");
    return false;
  }
  if (!key.length) {
    message.error("请输入密钥！");
    return false;
  }
  originalText.value = "";
  const bytes = AES.decrypt(result, key);
  originalText.value = bytes.toString(CryptoJS.enc.Utf8);
}
</script>

<style scoped></style>
