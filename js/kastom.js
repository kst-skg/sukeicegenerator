/*スマホ時，右上のボタンをクリックすると顔文字が変わる*/
$(function(){
    $(".kas").click(function(){
        $(".kas").toggle();
    });
    //ここらへんどうにかしたいけどよくわからん
    $.getJSON("onair.php", function(data){
        $("#kas-onair").empty().append(data.co25322);
        $("#gg-onair").empty().append(data.ch2584551)
        $("#teri-onair").empty().append(data.co408342);
        $("#ada-onair").empty().append(data.co31746);
        $("#mintia-onair").empty().append(data.co1271563);
        $("#byoutou-onair").empty().append(data.co2472031);
        $(".sukeisu-onair").empty().append(data.co32143);            
        $(".urasukeisu-onair").empty().append(data.co390244);
    });
    setInterval(function(){
        $.getJSON("onair.php", function(data){
            $("#kas-onair").empty().append(data.co25322);
            $("#gg-onair").empty().append(data.ch2584551)
            $("#teri-onair").empty().append(data.co408342);
            $("#ada-onair").empty().append(data.co31746);
            $("#mintia-onair").empty().append(data.co1271563);
            $("#byoutou-onair").empty().append(data.co2472031);
            $(".sukeisu-onair").empty().append(data.co32143);            
            $(".urasukeisu-onair").empty().append(data.co390244);
        });
    },1000*60);
    $.getJSON("onair.php",setLink(data););
    function setLink(data){
    }
});