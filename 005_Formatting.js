/*****
__ 포맷팅(Formatting)해서 출력
Node.js에서 "Formatting"은 코드의 스타일(들여쓰기, 줄바꿈, 따옴표 등)을 일관되게 맞추는 작업을 의미함

Formatting 종류
. 코드 포맷팅(Code Formatting)
- 코드의 들여쓰기, 괄호 위치, 따옴표(싱글/더블), 세미콜론 사용 등 스타일을 자동으로 맞춰줌
- 대표 도구 : Prettier
- 설정 예시(.prettrerrc, settings.json 등 프로제트 단위로 적용)

. 문자열 포맷팅(String Formatting)
- 문자열 내에 변수 값을 삽입하거나, 특정 형식으로 문자열을 출력하는 것
- 예시 : console.log("이름 : %s, 나이 : %d", "김만두", 26);

. Linting(린팅)
- 포맷팅과 달리, 코드의 문법적 오류나 규칙 위반을 검사하고 알려주는 작업
- 대표 도구 : ESLint

== 코드 포맷팅과 린팅을 함께 적용하면 협업 시 코드 품질과 일관성을 높일 수 있음
*****/

// Prettier 설정 예시 (.prettierrc)
/*****
JSON
{
    "singleQuote"       : true  // 작은 따옴표 사용
    , "semi"            : true  // 세미콜론 추가
    , "useTabs"         : false // 탭 대신 스페이스 사용
    , "tabWidth"        : 2     // 들여쓰기 폭
    , "trailingComma"   : "all" // 마지막 콤마 사용
    , "printWidth"      : 80    // 한 줄 최대 길이
    , "bracketSpaing"   : true  // 객체 괄호 내 공백
}

** 포맷팅 전 **
function example(a, b, c,) { console.log(a, b, c); }

** 포맷팅 후 **
function example(a, b, c) {
    console.log(a, b, c);
}
*****/

// Prettier 주요 속성 및 설명
/*****
▾ Global
-- parser : 사용할 파서 지정(보통 자동 감지)
  . 지원하는 주요 parser 종류
  - "babel" : JavaScript(ES6+)
  - "flow" : JavaScript + Flow 타입
  - "typescript" : TypeScript
  - "json" : JSON
  - "json5" : JSON5
  - "json-stringify" : JSON.stringify 결과
  - "css" : CSS
  - "scss" : SCSS
  - "less" : LESS
  - "html" : HTML
  - "markdown" : Markdown
  - "mdx" : MDX
  - "yaml" : YAML
  - 기타 플러그인으로 확장 가능
-- print-width("printWidth") : 한 줄 최대 길이(Default : 80) - 긴 코드를 자동으로 줄바꿈할 기준 글자 수
-- tab-width("tabWidth") : 탭(들여쓰기) 너비(Default : 2) - 한 단계 들여쓰기에 사용할 공백 수
-- use-table("useTabs") : 탭 문자 사용 여부(Default : false) - true : 탭(\t), false : 스페이스
-- embedded-language-formatting("embeddedLanguageFormatting") : Prettier에서 파일 내 포함된(임베디드) 다른 언어 코드 블록을 자동으로 포맷할지 제어
  . 지원하는 embeddedLanguageFormatting 종류
  - "auto"(기본값) : Prettier 인식 가능한 임베디드 언어(ex. <style>의 CSS, <script>의 JS, 템플릿 리터럴의 GraphQL 등)를 자동으로 포맷
  - "off" : 임베디드 언어 블록은 포맷하지 않고, 원본 그대로 둠

▾ Common
-- single-quote("singleQuote") : 작은따옴표 사용(Default : false) - 문자열에 작은따옴표(')를 사용할지 여부
-- no-bracket-spacing("bracketSpacing") : 객체 리터럴 중괄호 내 공백(Default : true) - ex. false : { foo:bar }, true : {foo:bar}
-- object-wrap("objectWrap") : 객체 리터럴의 줄바꿈(개행) 방식을 제어
  . 지원하는 objectWrap 종류
  - "preserve"(기본값) : 객체의 첫 번째 프로퍼티(속성) 앞에 줄바꿈이 있으면, 여러 줄로 유지함, 줄바꿈이 없으면 한 줄로 출력함
  - "collapse" : 객체의 모든 속성이 한 줄에 들어갈 수 있으면, 기존 줄바꿈과 상관없이 한 줄로 출력함
-- prose-wrap("proseWrap") : 마크다운(Markdown) 등에서 일반 텍스트(프즈, prose)의 줄바꿈 방식을 제어
  . 지원하는 proseWrap 종류
  - "preserve"(기본값) : 기존 줄바꿈을 그대로 유지함
  - "always" : printWidth를 넘는 프즈 텍스트는 자동으로 줄바꿈함
  - "never" : 각 프즈 블록(문단)을 한 줄로 합침. 줄바꿈 없이 한 줄로 만들어, 뷰어나 에디터의 소프트 래핑에만 의존함
-- bracket-same-line("bracketSameLine") : HTML, JSX, Vue, Angular 등 멀티라인 태그의 닫는 꺾쇠 괄호('>')를 마지막 속성 끝 줄에 붙일지, 아니면 새로운 줄에 둘지 결정(Default : false) - false : 세로운 줄, true : 마지막 속성 끝 줄
-- single-attribute-per-line("singleAttributePerLine") : HTML, Vue, JSX에서 태그의 속성을 한 줄에 하나씩만 배치할지 결정(Default : false) - false : 여러 속성을 한 줄에 나란히 배치, true : 각 속성을 반드시 한 줄에 하나씩만 배치

▾ JavaScript
-- no-semi("semi") : 세미콜론 자동 추가(Default : true) - 각 구문의 끝에 세미콜론을 붙일지 결정 - true : 붙임, false : 제거
-- jsx-single-quote("jsxSingleQuote") : JSX에서 작은따옴표 사용(Default : false) - flase : 사용 안 함, true : 사용함
-- quote-props("quoteProps") : 객체 속성 따옴표 처리 방식
  . 지원하는 quoteProps 종류
  - "as-needed"(기본값) : 필요할 때만 따옴표
  - "consistent" : 하나라도 따옴표면 모두
  - "preserve" : 입력 그대로 유지
-- arrow-parens("arrowParens") : 화살표 함수 매개변수 괄호
  . 지원하는 arrowParens 종류
  - "always"(기본값) : 항상 괄호
  - "avoid" : 매개변수 1개일 때 괄호 생략
-- trailing-comma("trailingComma") : 후행 쉼표 사용 방식
  . 지원하는 trailingComma 종류
  - "all"(기본값) : 가능한 모든 곳
  - "none" : 사용 안 함
  - "es5" : ES5에서 허용되는 곳
-- experimental-ternaries("experimentalTernaries") : 삼항 연산자(ternary operator) 포맷팅 방식 변경(Default : false)
  - false : 기존 삼항 연산자 포맷팅 방식을 유지
  - true : "curious ternaries" 포맷팅 방식을 적용. 여러 줄 삼항에서 '?'가 조건 뒤에 바로 오고, 중첩(nested)된 삼항도 더 읽기 쉽게 정렬됨
-- experimental-operator-position("experimentalOperatorPosition") : 긴 이항(이진) 연산식에서 줄바꿈 시 연산자(+, -, *, / 등)의 위치를 제어
  . 지원하는 experimentalOperatorPosition 종류
  - "end"(기본값) : 줄바꿈이 발생할 때 연산자를 앞 줄 끝에 둠
  - "start" : 줄바꿈이 발생할 때 연산자를 다음 줄 맨 앞에 둠

▾ HTML
-- html-whitespace-sensitivity("htmlWhitespaceSensitivity") : HTML 공백 감도
  . 지원하는 htmlWhitespaceSensitivity 종류
  - "css"(기본값) : 각 요소의 CSS display 속성에 따라 공백을 처리. 인라인 요소는 공백을 유지함
  - "strict" : 모든 요소에서 공백을 중요하게 간주(모든 요소를 인라인처럼 취급)
  - "ignore" : 모든 요소에서 공백을 중요하지 않게 간주(모든 요소를 블록처럼 취급)
-- vue-indent-script-and-style("vueIndentScriptAndStyle") : Vue 파일에서 script/style 태그 들여쓰기(Default : false)

▾ Special
-- insert-pragma("insertPragma") : 파일 상단에 포맷팅 표시 주석 추가(Default : false)
-- require-pragma("requirePragma") : 특정 주석이 있을 때만 포맷팅(Default : false)

▾ Range
-- range-start("rangeStart"), range-end("rangeEnd") : 파일의 일부 범위만 포맷팅

▾ Cursor
-- cursor-offset("cursorOffset") : 코드 포맷팅 시 커서(텍스트 입력 위치)가 어디 있는지 지정
*****/

function example(a, b, c) {
	console.log(a, b, c);
}