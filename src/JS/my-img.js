//1
const imgBox = document.querySelector(".imgBox2");
function loadImages(numImages = 10){
    let i=0;
     while(i < numImages){
     fetch('https://dog.ceo/api/breeds/image/random')
     .then(response=>response.json())
     .then(data=>{
     const img =  document.createElement('img');
     img.src = `${data.message}`
     imgBox.appendChild(img);
     })
     i++;
     }   
     }
 
 loadImages();

 window.addEventListener('scroll',()=>{
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    loadImages();
    }
})


//2
// const imgBox = document.querySelector(".imgBox2");
// function loadImages(numImages = 10){
//     let i=0;
//      while(i < numImages){
//      fetch("../../attire.json")
//      .then(response=>response.json())
//      .then(data=>{
//      const img =  document.createElement('img');
//      img.src = `${data.image}`
//      imgBox.appendChild(img);
//      })
//      i++;
//      }   
//      }
 
//  loadImages();

//  window.addEventListener('scroll',()=>{
//     if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
//     loadImages();
//     }
// })


//3
// //json파일 읽어오는 fetch
// function loadItems() {
//     return fetch("../../attire.json")
//         .then((response) => response.json())
//         .then((json) => json.items);
// }

// //이미지 동적으로 받아오기
// loadItems().then((items) => {
//     console.log(items);
//     displayItems(items);
// });

// function displayItems(items) {
//     const container = document.querySelector(".container");
//     container.innerHTML = data.map((item) => createHTMLString(item)).join("");
// }

// function createHTMLString(item) {
//     return `
//     <div class = "imgBox2">
//         <img src="${item.image}" />
//     </div>`
// }
