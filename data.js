
// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

 const dataFile = `[
    {
        "id": "1",
        "name": "Nikolya",
        "adress": "https://avatars.mds.yandex.net/i?id=f7ae39f09dd58e60eabec183e651f222_sr-5392166-images-thumbs&n=13",
        "age": 25
    },
    {
        "id": "2",
        "name": "Tolya",
        "adress": "https://yandex-images.clstorage.net/n5rUL1173/407e29-54/l75-oKUzqATznln6EZhvGYUwJt65jzf3V_z3ZZUq3XCHn7tc4ZLqYA0QJoHB8JUaAWLLJ4HnmP80MCY7nGKacfKvP7HwIqQI47oQ3mHRY1mxBSru4MYP5mq032WQcijIBnpm8TlDL63NpEvd_K3YImR_zr9w4zwzbWwmy-xKy0C7YqrEvVvB-FcSSIK9dJtNuR3eAh1CE1qbHKKcMWZQbMK6Up1FW1-ZXcBjgcxljCsAUypnkfOowwWIMje0ugdcJwL25Ll_yXB_5nyaSTCfFdWNqrKFzhdm70jSzD228BCS5r4h1SPrPQFAf5l0fQBfUBs-f92DSFNBcIpLyI4bILfGrvwFz9EgI1K4chE47y3NNb7qqZa3HguwUthZ2swk1ipmxV3bw2H5ECOVZOXAI8jnyvPpgxx3RZz2HyA6Q_CDOs5E6TvhaNNmhHopLIe5cR1ezumOh-6z8CYwkfrwlM6uLqkJDwMZNRD_zWjx2FtMqwKTVfdEz2G86gtsGrt4SwLaPHHnpWxPGlBeVYzfTTWZolKlEl_CH3xKrN3y_GgWnkItPS_v6fFcS33oEUSrBIPSG1X77Nf9bM4z5EZbABdS9kzF13X0-1JcymlU900haaY6qXavzqdoolDNWlBcRtI-3YHDAyXxjE_9WGGk48BXAtvtI7hrIfyK9_hiywiXDmJ0wTvppNu2GNZFpOttIe2aAo2SP4rDEKZYsVaYgBZqaqVRu0uhMbhzfRQtLGPoC4KHWfugozkQAuf8lo_Ml17WSOXHTQyT6vDKfchrQfFZXtZNhrvqjxQyUHHuGHAqRvK5SZefjbnM8x1wVUAn-LsW6y3DIENtcD47iB7D7L_WznT5802Ecxoo3r2s79H5cc5ipZ47_iPgRgjtJkQIssaOMZ2HD5mBpLMVYPWEfwyz1iepQ5jvRXwW70A2u_Qb_qK4bUddKO8KBKLdiIsZiemuUu3Kt55jDH5IdZJ0",
        "age": 30
    },
    {
        "id": "3",
        "name": "Olya",
        "adress": "https://avatars.mds.yandex.net/i?id=15b5ed6ea12759750b723934a679d3e8_sr-9151021-images-thumbs&n=13",
        "age": 20
    },
    {
        "id": "4",
        "name": "Zina",
        "adress": "https://avatars.mds.yandex.net/i?id=f8029f60fd7a6c2449b3791fd92a1973_sr-5285349-images-thumbs&n=13",
        "age": 55
    },
    {
        "id": "5",
        "name": "Slava",
        "adress": "https://avatars.mds.yandex.net/i?id=45fa4a3aeec0464503332201d0b81797_sr-6202880-images-thumbs&n=13",
        "age": 40
    },
    {
        "id": "6",
        "name": "Yula",
        "adress": "https://avatars.mds.yandex.net/i?id=fd50415fb937811fd3016269400efd03-4568591-images-thumbs&n=13",
        "age": 44
    }
]`
const data = JSON.parse(dataFile);
console.log(data);
const title = document.createElement("div");
const titleDesc = document.createElement('h1');
titleDesc.style.display = "flex";
titleDesc.style.justifyContent = "center";
titleDesc.style.alignItems = "center";
title.appendChild(titleDesc);


const divEl = document.createElement("div");
document.body.appendChild(title);
document.body.appendChild(divEl);
titleDesc.textContent = 'Ребята и Зверята';
divEl.style.display = "flex";
divEl.style.justifyContent = "center";
divEl.style.flexWrap = "wrap";

divEl.style.gap = "10px";

data.forEach(({id,name, adress, age}) => {
    const cartBox = document.createElement('div');
    cartBox.classList.add("cart");    
    cartBox.style.marginRight = "10px";    
    cartBox.style.border = "3px solid red";
    cartBox.style.boxShadow = " 14px 24px 20px rgba (0, 0, 0, 0.13)";
    cartBox.style.padding = "10px";
    const cartImg = document.createElement("img");
    cartImg.src = adress;
    cartImg.width = 300;
    
    const cartDesc = document.createElement('div');
    const cartDescId = document.createElement('p');
    const cartDescNam = document.createElement('h3');
    const cartDescAge = document.createElement('p');
    
    cartDescId.textContent = `id:${id}`;
    cartDescNam.textContent = `${name} : ${age}`;    
    cartDesc.appendChild(cartDescId, cartDescNam);
    cartDesc.appendChild( cartDescNam);       
    cartBox.appendChild(cartImg,);
    cartBox.appendChild(cartDesc);
    divEl.appendChild(cartBox);
});