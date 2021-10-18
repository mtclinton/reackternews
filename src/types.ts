export type PageType = 'ask' | 'show' | 'job' | 'new' | 'best' | 'top' | 'updates';

export interface IItem {
    id: number,
    type: 'story' | 'comment',
    by: string,
    time: number,
    text?: string,
    kids: number[],
    url?: string,
    score: number,
    title: string,
    descendants: number,
}