export interface Event {
  title: string;
  date: string;
}

export interface Schedule {
  priority: Event[];
  other: Event[];
}
