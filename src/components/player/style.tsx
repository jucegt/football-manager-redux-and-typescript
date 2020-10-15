import styled from 'styled-components';

const PlayerWrapper = styled.div`
	margin: 6px;
`;

const PlayerPhoto = styled.img`
	width: 220px;
	height: 290px;
	border-radius: 16px;
`;

const PlayerName = styled.p`
	font-family: sans-serif;
	font-size: 18px;
	line-height: 20px;
	font-weight: bold;
	margin: 5px 0;
`;

const PlayerActions = styled.div`
	display: flex;
`;

const PlayerButton = styled.button`
	
`;

export {
	PlayerWrapper,
	PlayerPhoto,
	PlayerName,
	PlayerActions,
	PlayerButton
}