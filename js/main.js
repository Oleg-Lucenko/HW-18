let image = document.querySelector('.image');

let imgArr = ['images/img1.jpeg','images/img2.jpeg','images/img3.jpeg','images/img4.jpeg','images/img5.jpeg','images/img6.jpeg','images/img7.jpeg','images/img8.jpeg', 'images/img9.jpeg'];


image.src = imgArr[Math.floor(Math.random() * imgArr.length)];


