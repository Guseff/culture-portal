export interface AppState {
  settings: { language: string };
  author: {
    byId: string[];
    author: object;
    pending: boolean;
  };
}
