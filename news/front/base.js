
window.onload = function(){

/**
 * 服务器地址: 'http://www.kkboom.cn:8123'
 * 
 */
var BASE_URL = 'http://www.kkboom.cn:8123';

$.get(BASE_URL+'?page=0', res => {
    console.log(res.data);
});


}