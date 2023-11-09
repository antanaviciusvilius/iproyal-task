export interface Analytics {
  title: string;
  subtitle: string;
  number: number;
  backgroundColor?: string;
  subtitleColor?: string;
}

export type DetailedAnalytics = Partial<Analytics> & {
  men: number;
  women: number;
  graphPath: string;
  increasePastMonth: string;
};
