import { IPlayer } from "./IPlayer";

export interface IAction {
	type: string,
	player: IPlayer
}