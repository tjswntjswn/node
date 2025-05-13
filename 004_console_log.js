/*****
* __ Node.js의 기본적인 출력 방법
* 'console' 객체의 다양한 메서드를 사용한다. (이 메서드들은 주로 디버깅과 로깅에 활용됨)
*****/

// 'console.log(data, ...args)' : 가장 많이 사용하는 출력 함수로, 문자열, 숫자, 객체 등 다양한 타입의 값을 콘솔에 출력함. 여러 개의 값을 동시에 출력할 수 있고, 포맷팅도 지원
console.log("=== console.log start ===")
console.log("Hello");
console.log("Hello", "Bye"); // 여러 개 값 출력하기
console.log(`this line ${"can make error"}`); // `(백틱)을 사용. '(싱글쿼트)와는 다른 기호. `(백틱)으로 감싸주면 템플릿처럼 사용할 수 있다.
console.log("=== console.log end ===\n")

// 'console.info(data, ...args)' : 'console.log()'와 동일하게 동작하지만, 정보성 메시지에 주로 사용됨
console.log("=== console.info start ===")
console.info("Information message");
console.log("=== console.info end ===\n")

// 'console.warn(data, ...args)' : 경고 메시지를 출력할 때 사용하며, 콘솔에서 시각적으로 구분됨
console.log("=== console.warn start ===")
console.warn("Warning message");
console.log("=== console.warn end ===\n")

// 'console.error(data, ...args)' : 에러 메시지를 출력할 때 사용되며, 주로 빨간색 등으로 표시됨
console.log("=== console.error start ===")
console.error("Error message");
console.log("=== console.error end ===\n")

// 'console.assert(expression, message)' : expression이 false일 때만 message를 출력함
console.log("=== console.assert start ===")
console.assert(1 === 2, "1과 2는 다릅니다.");
console.log("=== console.assert end ===\n")

// 'console.table(data)' : 객체나 배열을 테이블 형태로 출력함
console.log("=== console.table start ===")
console.table([{name : "김만두", age : 26}, {name : "고동지", age : 34}]);
console.log("=== console.table end ===\n")

// 'console.dir(obj, options)' : 객체의 속성을 자세히 출력할 때 사용함. 옵션을 통해 출력 깊이, 색상 등을 지정할 수 있음
const user = {name : "김만두", age : 26, company : {name : "동지회사", address : "경기도 성남시"}};
console.log("=== console.dir start ===")
console.dir(user, {showHidden : true, depth : 0, colors : true}); // 내부 객체(company)는 자세히 출력하지 않음
console.log("=== console.dir end ===\n")

// 'console.time(label)' / console.timeEnd(label)' : 코드의 실행 시간을 측정할 때 사용함
console.log("=== console.time / console.timeEnd start ===")
console.time("시작");
for(let i = 0; i < 3; i++) {
    console.log(i);
}
console.timeEnd("시작");
console.log("=== console.time / console.timeEnd end ===\n")

// 'console.count(label)' / 'console.countReset(label)' : 특정 코드가 몇 번 실행됐는지 카운트 함
console.log("=== console.count / console.countReset start ===")
const function1 = () => {
    console.log("function1() 실행");
    console.count("function1 function");
}

const function2 = () => {
    console.log("function2() 실행");
}

function1();
function2();
function1();
console.countReset("function1 function");
function1();
console.log("=== console.count / console.countReset end ===\n")

// 'console.trace(message, ...args)' : 현재 코드의 호출 스택을 출력함
console.log("=== console.trace start ===")
const function3 = () => {
    function4();
}

const function4 = () => {
    function5();
}

const function5 = () => {
    console.log("function5() 실행");
    console.trace();
}
function3();
console.log("=== console.trace end ===")