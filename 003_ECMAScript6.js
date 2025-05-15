/*****
__ ECMAScript란?
ECMAScript(ECMA스크립트)는 Ecma International이라는 국제 표준 기구가 ECMA-262라는 기술 규격에 따라 정의한 표준화된 스크립트 프로그래밍 언어다.
자바스크립트(JavaScript)를 표준화하기 위해 만들어졌으며, 자바스크립트뿐만 아니라 액션스크립트, J스크립트 등 여러 스크립트 언어의 기반이 된다.
웹 브라우저와 서버(Node.js 등)에서 널리 사용되며, 자바스크립트는 ECMAScript 표준을 따르는 대표적인 구현제이다.
버전 별로 새로운 기능이 추가되며, ES6(2015년) 이후부터는 매년 새로운 표준이 발표되고 있다.

== ECMAScript = 자바스크립트가 잘 작동하도록 만든 '기본 규칙' 또는 '설계도' 라고 생각하면 됨
*****/

// es5
function printHelloEs5() {
	console.log("Hello es5");
}

// es6
const printHelloEs6 = () => {
	console.log("Hello es6");
};

printHelloEs5();
printHelloEs6();