//t3logo 专用loading
function t3Loading(time){
    $("body").append(`
        <div id="loading" style="width:`+ win_w +`px;height:`+ win_h +`px; z-index:9999;">
            <img src="assets/img/t3_loading.gif" />
        </div>
    `);
    setTimeout(()=>{
        $("#loading").remove()
    },time);
}