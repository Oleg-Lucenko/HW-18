let image = document.querySelector('.image');

let imgArr = ['img/img1.jpeg','img/img2.jpeg','img/img3.jpeg','img/img4.jpeg','img/img5.jpeg','img/img6.jpeg','img/img7.jpeg','img/img8.jpeg', 'img/img9.jpeg'];


image.src = imgArr[Math.floor(Math.random() * imgArr.length)];


