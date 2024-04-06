//pagesConfig에 페이지 경로 필요시 추가 후 사용

interface PageConfig {
  headerComponent: string | null;
  title: string;
}

interface PagesConfig {
  [key: string]: PageConfig;
}

const pagesConfig: PagesConfig = {
  '/': {
    headerComponent: 'Header',
    title: '홈 페이지',
  },
  '/upload-art': {
    headerComponent: null,
    title: '업로드 페이지',
  },
  '/artwork/[id]': {
    headerComponent: 'Header',
    title: '작품 페이지',
  },
  '/exhibition': {
    headerComponent: 'Header',
    title: '전시회 페이지',
  },
};

export default pagesConfig;
