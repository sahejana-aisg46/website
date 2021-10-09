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
});
( function($) {
  
    $(document).ready(function() {
      
      var s           = $('.slider'),
          sWrapper    = s.find('.slider-wrapper'),
          sItem       = s.find('.slide'),
          btn         = s.find('.slider-link'),
          sWidth      = sItem.width(),
          sCount      = sItem.length,
          slide_date  = s.find('.slide-date'),
          slide_title = s.find('.slide-title'),
          slide_text  = s.find('.slide-text'),
          slide_more  = s.find('.slide-more'),
          slide_image = s.find('.slide-image img'),
          sTotalWidth = sCount * sWidth;
      
      sWrapper.css('width', sTotalWidth + 50);
      sWrapper.css('width', sTotalWidth +50);
      
      var clickCount  = 0;
      
      btn.on('click', function(e) {
        e.preventDefault();
  
        if( $(this).hasClass('next') ) {
          
          ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
        } else if ( $(this).hasClass('prev') ) {
          
          ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
        }
        TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })
  
  
        //CONTENT ANIMATIONS
  
        var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
        var toProperties = {autoAlpha:0.8, x:'0', y:'0'};
  
        TweenLite.fromTo(slide_image, 1, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
        TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
        TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
        TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
        TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);
  
      });
            
    });
  })(jQuery);
  
  // $('.overlay').addClass('overlay-blue');
  // fetch(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}`).then((res)=> {
  //           const response = res.json().then((data)=> {
  //               const token = data.access_token 
  //               fetch(`https://graph.instagram.com/me/media?fields=id&access_token=${token}`).then((idsres)=> {
  //                   idsres.json().then((idsjson)=> {
  //                       const ids = idsjson.data 
  //                       for (var i =0; i < 5 ; i++) {
  //                           fetch(`https://graph.instagram.com/${ids[i].id}?fields=media_url,permalink,media_type&access_token=${token}`).then((media)=> {
  //                               media.json().then((mediaData)=> {
  //                                   if(mediaData.media_type!="VIDEO") {
  //                                       const media = {
  //                                           link: mediaData.permalink,
  //                                           image: mediaData.media_url,
  //                                       }
  //                                       setInsta(insta.concat(media))
  //                                   }
  //                               })
  //                           })
  //                       } 
  //                       console.log(insta)
                        
  //                   })
  //               }) 
  //           })
  //       })