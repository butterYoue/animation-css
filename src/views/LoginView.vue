<template>
    <div class="login">
        <div class="box">
            <div class="form">
                <h2>Sign In</h2>
                <div class="inputBox">
                    <input type="text" required>
                    <span>Username</span>
                    <i></i>
                </div>
                <div class="inputBox">
                    <input type="password" required>
                    <span>Password</span>
                    <i></i>
                </div>
                <!-- <input type="submit" value="Login"> -->
            </div>
        </div>
    </div>
  </template>
  <script lang="ts">
  import { defineComponent } from "vue";
  import { Plus } from "@element-plus/icons-vue";
  import SliderButton from "../components/SliderButton.vue";
  import LoadingView from "../components/LoadingView.vue";
  export default defineComponent({
    name: "LomeView",
    data() {
      return {
        fileList: [],
      };
    },
  });
  </script>
  <style scoped lang="less">
    .login{
        height: 100vh;
        background-color: #23242a;
        display: flex;
        justify-content: center;//row 居中
        align-items: center; 
        font-family: 'Poppins', sans-serif;
    }
    .box{
        position: relative;
        width: 380px;
        height: 420px;
        background-color: #1c1c1c;
        border-radius: 8px;
        overflow: hidden;
    }
    .box::before{
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 380px;
        height: 420px;
        background: linear-gradient(0deg,transparent,#45f3ff,#45f3ff);
        transform-origin: bottom right;
        animation: aniamte 10s linear infinite;
    }
    .box::after{
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 380px;
        height: 420px;
        background: linear-gradient(0deg,transparent,#45f3ff,#45f3ff);
        transform-origin: bottom right;
        animation: aniamte 10s linear infinite;
        animation-delay: -5s;
    }
    @keyframes aniamte{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    .form{
        position: absolute;
        inset: 2px;
        background:#28292d;
        z-index: 10;
        border-radius: 8px;
        padding: 30px 40px;
        display: flex;
        flex-direction: column;
    }
    .form h2{
        color: #45f3ff;
        font-weight: 500;
        text-align: center;
        letter-spacing: 0.1em;
    }
    .inputBox{
        position: relative;
        width: 300px;
        margin-top: 35px;
    }
    .inputBox input{
        position: relative;
        width: 90%;
        padding: 20px 10px 10px;
        background: transparent;
        border: none;
        outline: none;
        color: #23242a;
        font-size: 1em;
        letter-spacing: 0.05em;
        z-index: 10;
    }
    .inputBox span{
        position:absolute;
        left: 0;
        padding: 20px 10px 10px;
        font-size: 1em;
        color: #8f8f8f;
        pointer-events: none;
        letter-spacing: 0.05em;
        transition: 0.5s;
    }
    .inputBox input:valid ~ span,
    .inputBox input:focus ~ span{
        color: #45f3ff;
        transform: translateY(-34px);
        font-size: 0.8em;
    }
    .inputBox i{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: #45f3ff;
        border-radius: 4px;
        transition: 0.5s;
        pointer-events: none;
    }
    .inputBox input:valid ~ i,
    .inputBox input:focus ~ i{
        height: 44px;
    }
  </style>
  