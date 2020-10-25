import React from "react";
import styled from "styled-components"

const Character = props => {
const { characterData } = props;

const CharacterCard = styled.div`
    width: 50%;
    font-size: 1.5rem;
	background-color: green ;
	margin: 0 auto;
	margin-bottom:2%;
	color: lightgray;
	padding: 0.2%;
	border: 3px solid black;
`
const CharacterName = styled.h2`
color: orange;
`
const CharacterInfo = styled.p`
text-align: center;
color: black
` 

console.log(characterData)
	return (
		<CharacterCard>
			<CharacterName>
				{characterData.name}
			</CharacterName>
			<CharacterInfo>{`height: ${characterData.height}`}</CharacterInfo>
			<CharacterInfo>{`mass: ${characterData.mass}`}</CharacterInfo>
			<CharacterInfo>{`gender: ${characterData.gender}`}</CharacterInfo>
			<CharacterInfo>{`birth year: ${characterData.birth_year}`}</CharacterInfo>
		</CharacterCard>
	)

}

export default Character;
