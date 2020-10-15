// Packages
import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

// Definitions
import { IPlayer } from '../../definitions/IPlayer';
import { IState } from '../../definitions/IStore';
import { IAction } from '../../definitions/IAction';

// Components
import Player from '../player';

// Style
import { ListTitle, ListWrapper } from './style';

type ListProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const List: React.FC<ListProps> = ({ players, addPlayer }) => {
	return (
		<>
			<ListTitle>Players List</ListTitle>
			<ListWrapper>
				{players.map((player: IPlayer) =>
					<Player key={player.id} id={player.id} name={player.name} photo={player.photo} handlerClick={addPlayer} />
				)}
			</ListWrapper>
		</>
	);
};

const mapStateToProps = ( state: IState ) => ({
	players: state.players
});

const mapDispatchToProps = ( dispatch: Dispatch<IAction> ) => ({
	addPlayer( player: IPlayer ) {
		dispatch({
			type: "ADD_PLAYER",
			player
		});
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(List);