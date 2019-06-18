//slider2.js

$(document).ready(function(){
            var wd2 = parseInt($(window).width());
            function bigNext(){
                $(".big_img_box").not(":animated").animate({"margin-left":-wd2+"px"}, 800,function(){
                    $(".big_img_box li").eq(0).appendTo($(".big_img_box"));
                    $(".big_img_box").css("marging-left", "0px");
                    $(".thum_box").animate({"margin-left":"-130px"},300,function(){
                        $(".thum_box li").eq(0).appendTo($(".thum_box"));
                        $(".thum_box").css("margin-left","0px");
                        $(".thum_box li").removeClass("on");
                        $(".thum_box li").eq(0).addClass("on");
                    });
                });
            }
            var intv2 = setInterval(function(){bigNext();}, 3600);
        });