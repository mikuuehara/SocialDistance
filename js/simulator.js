var a = 0;
var situ = 0;
var pic = [["images/crosswalk.png", "images/stop.png", "images/gutter.png", "images/bicycle.png" ,"images/cat.png"], ["images/seat.png", "images/gate.png"]];
var pic2 = [["images/crosswalk2.png", "images/stop2.png", "images/gutter2.png", "images/bicycle2.png" ,"images/cat2.png"], ["images/seat2.png", "images/gate2.png"]];
var obj_name = [["横断歩道", "止まれ縦", "側溝", "自転車" ,"猫"], ["電車の座席", "自動改札機"]];
var obj_num = [["5", "1", "4", "1" ,"5"], ["5", "2"]];
var obj_cnt = [["本分", "つ分", "つ分", "台分" ,"匹分"], ["席分", "台分"]];


function change_situation(n){
    var ele_town = document.getElementById("town");
    var ele_station = document.getElementById("station");
    
    switch(n){
        case 0:
            situ = 0;
            a = 0;
            change_images(1);
            
            $(ele_town).addClass('active');
            $(ele_station).removeClass('active');

            $("body").css("background_image","url('images/town.jpg')");      
            break;
        default:
            situ = 1;
            a = 0;
            change_images(1);

            $(ele_station).addClass('active');
            $(ele_town).removeClass('active');

            $("body").css("background_image",'url("images/station.jpg")');
            break;
    }
}


function change_images(n){
    var element_pic = document.getElementById("distance");
    var element_obj_name = document.getElementById("obj");
    var element_obj_num = document.getElementById("num");
    var element_obj_cnt = document.getElementById("cnt");
    var popup_detail_img = document.getElementById("popup_detail_img");

    if(situ == 0){
        if(n == 0){
            if(a == 0){
                a = 4;
            }
            else{
                a -= 1;
            }
        }
        else{
            if(a == 4){
                a = 0;
            }
            else{
                a += 1;
            }
        }
    }
    else{
        if(n == 0){
            if(a == 0){
                a = 1;
            }
            else{
                a -= 1;
            }
        }
        else{
            if(a == 1){
                a = 0;
            }
            else{
                a += 1;
            }
        }
    }
    element_pic.src = pic[situ][a];
    element_obj_name.textContent = obj_name[situ][a];
    element_obj_num.textContent = obj_num[situ][a];
    element_obj_cnt.textContent = obj_cnt[situ][a];
    popup_detail_img.src = pic2[situ][a];
}



function window_popup(){
    $(this).blur() ;
    $("body").append('<div id="popup_detail_overlay"></div>');
    
    $("#popup_detail_overlay").fadeIn("slow");
    $("#popup_detail").fadeIn("slow");
}

function window_close(){
    $("#popup_detail,#popup_detail_overlay").fadeOut("slow");
    $("#popup_detail_overlay").remove();

    $("#popup,#popup_overlay").fadeOut("slow");
    $("#popup_overlay").remove();
}