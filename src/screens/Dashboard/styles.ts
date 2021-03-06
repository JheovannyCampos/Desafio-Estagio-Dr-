import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { ProjectsDTO } from '../../dtos/ProjectsDTO';

export const Container = styled.View`
    flex: 1;
    background-color: whitesmoke;
`;

export const Header = styled.View`
    width: 100%;
    height: 200px;

    background-color: lightgray;

    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const Title = styled.Text`
    font-size: 24px;
    padding-left: 20px;
    color: black;

`;

export const Projects = styled.View`
    flex: 1;
    padding: 0 24px;
    margin-top: 12px;
`;

export const ProjectsList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 24
	},
	showsVerticalScrollIndicator: false,
})``;
