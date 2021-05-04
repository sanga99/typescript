
# typescript

### 타입스트립트 기본

(참고 : https://velog.io/@velopert/typescript-basics)

  
---
####  typescript 설치확인

	$ npx tsc -v
---
  

#### typescript 시작하기

1) 프로젝트 폴더 및 package.json 파일생성

		$ mkdir ts-practice

		$ cd ts-practice

		$ npm init -y 			# 또는 yarn init -y

	이렇게 하면 ts_practice 디렉터리에 package.json 파일이 생성된다

  
2) tsconfig.json 생성

		$ npm install --save typescript 		// 로컬 설치

		$ tsc --init 			// 하면 tsconfig.json파일이 자동생성

	글로벌 설치가 싫다면 npx tsc --init

	아니면 tsconfig.json 파일을 생성 후 직접 작성 해도 됨.
	
			{

			"compilerOptions": {

			"target": "es5",

			"module": "commonjs",

			"strict": true,

			"esModuleInterop": true,

			"outDir": "./dist"

			}

		}

  

	target : 컴파일된 코드가 어떤 환경에서 실행될지 정의. 예로 화살표 함수를 사용해 target 을 es5로 하면 일반function키워드를 사용하는 함수로 변환해줌

  
3) 프로젝트 폴더안에 src디렉터리를 만들고 그 안에 practice.ts 파일 작성.

4) build

	package.json 파일에 아래 build 코드작성

		"scripts": {

			"build": "tsc"

		}


5) 실행

	[컴파일 방법1] (전체 컴파일)

		$ npm run build

      => tsc 명령어 실행됨


	[컴파일 방법2] (특정 파일 컴파일)

		$ cd src

		$ npx tsc ./practice.ts 

	=> 컴파일하면 xxx.js 파일이 생성됨

 
	[실행]

	 node로 xxx.js 파일 실행

		$ node ./practice.js

		// hello 결과값 찍힘

  
---  
  #### typescript 기본 사용 개념

-- [type과 interface 사용]

무엇이든 써도 상관 없는데 일관성 있게만 쓰시면 된다.

구버전의 타입스크립트에서는 type 과 interface 의 차이가 많이 존재했었는데 이제는 큰 차이는 없다.

다만 라이브러리를 작성하거나 다른 라이브러리를 위한 타입 지원 파일을 작성하게 될 때는 interface를 사용하는것이 권장 되고 있음.

  

-- [Generics(제네릭) 사용]

어떤 타입이 될지 예측 할 수 없을 때 Generics(제네릭)을 사용한다. (any를 사용해도 오류는 아니나, 제네릭 사용 권장)