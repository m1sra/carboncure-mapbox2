import { FunctionComponent } from 'react'

type Location = {
	center?: [number, number],
	zoom?: number,
	pitch?: number,
	bearing?: number,
	speed?:number,
}
export interface Chapter {
	id: string,
	location: Location,
	component: FunctionComponent | null,
	onChapterEnter?: any,
	onChapterExit?: any,
	onChapterExitSecond?:any,
	onChapterEnterSecond?:any,
	rotateAnimation: boolean,
	numbreChapter: number | any,
}
export default interface Config {
	style: string,
	accessToken: string,
	chapters: Chapter[],
}
