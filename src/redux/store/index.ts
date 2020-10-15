import { createStore } from 'redux';
import { IAction } from '../../definitions/IAction';
import { IPlayer } from '../../definitions/IPlayer';
import { IState } from '../../definitions/IState';

const initialState = {
	players: [
		{id: 1, name: 'Courtois', photo: 'https://www.realmadrid.com/img/vertical_220px/courtois_380x501_20200918093604.jpg'},
		{id: 13, name: 'Lunin', photo: 'https://www.realmadrid.com/img/vertical_220px/lunin_380x501_20200919035617.jpg'},
		{id: 2, name: 'Carvajal', photo: 'https://www.realmadrid.com/img/vertical_220px/carjaval_380x501_20200918093557.jpg'},
		{id: 3, name: 'E. Militao', photo: 'https://www.realmadrid.com/img/vertical_220px/militao_380x501_20200918093610.jpg'},
		{id: 4, name: 'Sergio Ramos', photo: 'https://www.realmadrid.com/img/vertical_220px/ramos_380x501_20200918093557.jpg'},
		{id: 5, name: 'Varane', photo: 'https://www.realmadrid.com/img/vertical_220px/varane_380x501_20200918093558.jpg'},
		{id: 6, name: 'Nacho', photo: 'https://www.realmadrid.com/img/vertical_220px/nacho_380x501_20200918093559.jpg'},
		{id: 12, name: 'Marcelo', photo: 'https://www.realmadrid.com/img/vertical_220px/marcelo_380x501_20200918093559.jpg'}
	],
	headline: []
};

const reducerManager = ( state:IState = initialState, action: IAction ) => {
	switch( action.type ) {
		case 'REMOVE_PLAYER':
			return {
				...state,
				players: state.players.concat( action.player ),
				headline: state.headline.filter((p: IPlayer) => p.id !== action.player.id )
			};
		case 'ADD_PLAYER':
			return {
				...state,
				players: state.players.filter((p: IPlayer) => p.id !== action.player.id),
				headline: state.headline.concat( action.player )
			};
		default:
			return state;
	}
};

export default createStore(reducerManager);