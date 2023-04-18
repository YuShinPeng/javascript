//操作DOM

// 1.抓出要的HTML元素 (DOM節點)
const title = document.getElementById("title");
const button = document.querySelector("#btn");
const input = document.querySelector("#input");

// 增加事件的監聽器
let amount = 0;
button.addEventListener("click",function(){
    const num = input.value;
    title.innerText = num;
    input.value = null;
});