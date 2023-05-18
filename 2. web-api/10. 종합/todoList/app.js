// 새로운 일정 추가하기
const $todoInput = document.getElementById('todo-input');
const $plusbtn = document.querySelector('.plusbtn');
const $list = document.querySelector('#list');
const $todoList = document.querySelector('.todo-list');
let $value = document.querySelector('.real .todo').getAttribute('textContent');

//+버튼 눌렸을 때
$plusbtn.onclick = function (e) {
    //입력값이 없는 경우
    if ($todoInput.value == '') {
        $todoInput.setAttribute('placeholder', '필수 입력사항입니다!');
        $todoInput.classList.toggle('orange');
        return;
    }

    //입력값 있는 경우
    if ($todoInput.value !== '' && $todoInput.classList.contains('orange')) {
        $todoInput.classList.toggle('orange');
        $todoInput.setAttribute('placeholder', '할 일을 입력하세요.');
    }
        $value = $todoInput.value;
        let $realtodo = document.querySelector('.real .todo');
        $realtodo.textContent = $value;
        const $deepClone = $todoList.cloneNode(true)
        $deepClone.classList.add('show');
        $list.appendChild($deepClone);
        $todoInput.value = '';
    
}

//할 일 입력하고 엔터 치면 직접 클릭한 것 같은 효과를 줌
$todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        $plusbtn.click();
        $todoInput.focus(); //커서가 계속 input에 머무르도록 포커싱.
    }
});


//일정 수정하기


//일정 수정 완료하기


//일정 삭제하기
const $del = document.querySelector('#del');


//일정 완료하기
const $checkbox = document.querySelector('input[type="checkbox"]');