// Packages
import React from 'react';
import { connect } from 'react-redux';

// Definitions
import { IState } from '../../definitions/IState';
import { IPlayer } from '../../definitions/IPlayer';

// Components
import Player from '../player';

// Style
import { FieldTitle, FieldWrapper } from './style';
import { Dispatch } from 'redux';
import { IAction } from '../../definitions/IAction';

type FieldProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const Field: React.FC<FieldProps> = ({ headline, removePlayer }) => {
	return (
		<>
			<FieldTitle>Headlines</FieldTitle>
			<FieldWrapper>
				{headline.map((player: IPlayer ) =>
					<Player key={player.id} id={player.id} headline name={player.name} photo={player.photo} handlerClick={removePlayer} />
				)}
			</FieldWrapper>
		</>
	);
};

const mapStateToProps = ( state: IState ) => ({
	headline: state.headline
});

const mapDispatchToProps = ( dispatch: Dispatch<IAction> ) => ({
	removePlayer( player: IPlayer ) {
		dispatch({
			type: "REMOVE_PLAYER",
			player
		});
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);