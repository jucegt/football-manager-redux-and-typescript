// Packages
import React from 'react';

// Definitions
import { IPlayer } from '../../definitions/IPlayer';

// Style
import { PlayerActions, PlayerButton, PlayerName, PlayerPhoto, PlayerWrapper } from './style';

const Player: React.FC<IPlayer> = ( props ) => {
	return (
		<PlayerWrapper>
			<PlayerPhoto src={props.photo} alt={props.name} />
			<PlayerName>{props.name}</PlayerName>
			<PlayerActions>
				{props.headline ? (
					<PlayerButton onClick={(e) => props.handlerClick !== undefined && props.handlerClick({ id: props.id, name: props.name, photo: props.photo })}>Remove</PlayerButton>
				) : (
					<PlayerButton onClick={(e) => props.handlerClick !== undefined && props.handlerClick({ id: props.id, name: props.name, photo: props.photo })}>Add</PlayerButton>
				)}
			</PlayerActions>
		</PlayerWrapper>
	);
};

export default Player;