export interface IPlayer {
	headline?: boolean
	id: number,
	name: string,
	photo: string
	handlerClick?: (player: IPlayer) => void
}