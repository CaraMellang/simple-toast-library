# 설치 가이드
해당 루트디렉토리에서
```
yarn install
```

그다음 dev 디렉토리로 이동하여 install 후 되돌아 옵니다.
```
cd dev
yarn install
cd ../
```

# 실행 가이드
명령어 하나로 동시실행이 가능합니다.
```
yarn start:dev
```
#### 라이브러리 변경사항이 생기면 자동으로 빌드하고 개발서버에 적용합니다.
#### 개발 서버 또한 변경사항이 감지되면 자동으로 업데이트 합니다.

# 유의사항
#### yarn 패키지를 사용하셔야합니다.
#### package.json의 peerDependency에 명시된 리액트 버전을 사용해주세요.(18.2.0)
#### 이 모듈을 라이브러리로 붙여쓰시기 위해서는 본인 프로젝트의 리액트 버전이 18.2.0 이여야 합니다.

# 사용기술(추후 추가예정)
- Rollupjs
- Rollup Plugins
- Parcel
- Typescript
- React v18
- React Router Dom v6
- Emotion Styled