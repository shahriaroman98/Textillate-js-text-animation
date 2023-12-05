$(document).ready(function(){
    $(".txt1").textillate({
        loop: true,
        in:{
            effect:"fadeInUp",
            delayScale: 3,
            delay: 20,
            shuffle: true,
        },
        out:{
            effect:"fadeOutDown",
            delayScale: 2,
            delay: 20,
            reverse: true,
            shuffle: true,
        },
    });
});