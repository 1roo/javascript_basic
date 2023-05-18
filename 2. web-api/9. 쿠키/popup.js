
function createCookie(name) {
    const date = new Date();
    date.setDate(date.getDate + 1); //쿠키 수명: 하루
    let cookie = '';
    cookie += `${name}=true;`; //세미콜론을 반드시 찍어야 함
    cookie += 'expires=' + date.toUTCString();
    document.cookie = cookie;
}

function getCookie(name) {
    const cookies = document.cookie.split(';');

    for(let c of cookies) {
        if(c.search(name) !== -1) {
            return true;
        }
    }
    // return false;
}