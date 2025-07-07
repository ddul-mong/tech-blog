### 📝 개요
<!--
PR의 전체적인 목적과 변경 이유를 간결하게 요약합니다.
ex) Next.js 프로젝트의 초기 렌더링 최적화를 위해 SSR과 React Query를 결합하는 작업을 진행했습니다.
-->

### ✨ 주요 변경사항
<!--
핵심 변경사항을 나열합니다. (Bullet List 추천)
ex)
- `getServerSideProps`에서 React Query 초기화 로직 추가
- SEO 최적화를 위해 메타 태그 렌더링 개선
- 불필요한 API 호출 제거
-->

### 🔍 구현 및 고려사항
<!--
특이사항, 고민했던 점, 왜 이런 방식으로 구현했는지 서술합니다.
ex)
- CSR과 SSR 데이터를 일관되게 유지하기 위해 hydration 시점을 조정했습니다.
- useEffect 대신 useLayoutEffect 사용을 검토했으나, 서버 사이드 렌더링 특성상 사용을 보류했습니다.
-->

### 📚 참고 자료
<!--
참고한 문서, 링크, 레퍼런스 등을 작성합니다.
ex)
- [React Query 공식 문서 - SSR](https://react-query.tanstack.com/guides/ssr)
- [Next.js 데이터 패칭 가이드](https://nextjs.org/docs/basic-features/data-fetching)
-->

### 🤝 리뷰어 참고사항
<!--
리뷰어가 중점적으로 봐줬으면 하는 부분을 적습니다.
ex)
- getServerSideProps 내부 쿼리 캐싱 방식이 적절한지 검토 부탁드립니다.
- SSR 데이터 prefetch 방식에 대한 추가 의견 주시면 감사하겠습니다.
-->
