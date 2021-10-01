 var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
});
const [s1,s2,s3,s4] = [document.querySelector('.s-1'),document.querySelector('.s-2'), document.querySelector('.s-3'),document.querySelector('.s-4')]
const [post1,post2,post3,post4,post5] = [
    document.querySelector('.post-1'),
    document.querySelector('.post-2'),
    document.querySelector('.post-3'),
    document.querySelector('.post-4'),
    document.querySelector('.post-5')
]
s1.addEventListener('click',()=>{
    post1.style.background='red';
    post2.style.background='black';
    post3.style.background='#B20BCE';
    post4.style.background='#111';
    post5.style.background='rgb(65, 65, 0)';
})
s2.addEventListener('click',()=>{
    post1.style.background='blue';
    post2.style.background='pink';
    post3.style.background='green';
    post4.style.background='red';
    post5.style.background='brown';
})
s3.addEventListener('click',()=>{
    post1.style.background='#87968b';
    post2.style.background='#590c38';
    post3.style.background='#59570c';
    post4.style.background='#de9a5f';
    post5.style.background='#5fdec9';
})
s4.addEventListener('click',()=>{
    post1.style.background='#3f479e';
    post2.style.background='#3f9e7d';
    post3.style.background='#000000';
    post4.style.background='#8a8aa6';
    post5.style.background='#ffe312';
})