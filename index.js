    var position;
    function link(){
        $("html,body").animate({
            scrollTop : position
        }, {
            queue : false
        });
    }
    window.onpageshow = function(evt) {
    if (evt.persisted) {
      location.reload();
    }
    };
    $(function(){
        $("#about, #news, #sponsor, #access, #contact, #gallery").click(function(){
            $('body').fadeTo(500,0);
            $('#left_side').animate({width:"14%"}, "slow" );
            $('#right_side').animate({width:"86%"}, "slow" );
        });
        $('.smart_menu').click(function(){
            $('body').fadeTo(500,0);
        });
        $("#about, #smart_about").mouseover(function(){
            position = $("#smoothplay1").offset().top;
            link();
        }).click(function(){
            setInterval(function(){
                location.href= "about.html";
            }, 1000);
        });
        $("#news, #smart_news").mouseover(function(){
            position = $("#smoothplay2").offset().top;
            link();
        }).click(function(){
            setInterval(function(){
                location.href= "news.html";
            }, 1000);
        });
        $("#sponsor, #smart_sponsor").mouseover(function(){
            position = $("#smoothplay3").offset().top;
            link();
        }).click(function(){
            setInterval(function(){
                location.href= "sponsor.html";
            }, 1000);
        });
        $("#access, #smart_access").mouseover(function(){
            position = $("#smoothplay4").offset().top;
            link();
        }).click(function(){
            setInterval(function(){
                location.href= "access.html";
            }, 1000);
        });
        $("#contact, #smart_contact").mouseover(function(){
            position = $("#smoothplay5").offset().top;
            link();
        }).click(function(){
            setInterval(function(){
                location.href= "contact.html";
            }, 1000);
        });
        $("#gallery, #smart_gallery").mouseover(function(){
            position = $("#smoothplay6").offset().top;
            link();
        }).click(function(){
            setInterval(function(){
                location.href= "gallery.html";
            }, 1000);
        });
        $("#shinkan, #smart_shinkan").mouseover(function(){
            position = $("#smoothplay7").offset().top;
            link();
        });
    });
    $(window).load(function(){
        $('body').hide();
        $('body').fadeIn(400);
        $('.smart_menu').click(function(){
            var url = $(this).children('a').attr('href');
            if (url != ''){
                $('body').fadeOut(1000);
                setTimeout(function(){
                    location.href = url;
                }, 1000);
            }
            return false;
        });
    });