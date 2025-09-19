export type EventsType = { id: number; date: string; description: string };
export type CategoriesType = { id: number; type: string; events: EventsType[] };
