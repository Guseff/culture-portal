export interface AppState {
  settings: { language: string };
  pages: { pageNum: number };
  router: { location: { pathname: string } };
}
