import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import { Button } from "../../components/Button"
import { ProjectCard } from "../../components/ProjectCard"
import { ProjectsDTO } from '../../dtos/ProjectsDTO';
import api from '../../services/api';

import {
  Container,
  Header,
  Title,
  Projects,
  ProjectsList,
} from './styles';

export function Dashboard(){
  const [projects, setProjects] = useState<ProjectsDTO[]>([]);
  const navigation:any = useNavigation();

  function handleNewProject(){
    navigation.navigate('NewProject');
  }

  function handleProjectDetails(project: ProjectsDTO){
    navigation.navigate('ProjectDetails', { project } );
  }

  useEffect(() => {
    async function fetchProjects(){
      try {
        const response = await api.get('/projects')
        setProjects(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProjects();
  },[projects]);

  return (
    <Container>
        <Header>
            <Title>Projetos</Title>
            <Button title="+ Adicionar"  onPress={handleNewProject}></Button>
        </Header>

        <Projects> 
            <ProjectsList
              data={projects}
              keyExtractor={item => item.idprojeto}
              renderItem={({ item }: { item: ProjectsDTO }) => 
              <ProjectCard data={item} onPress={() => handleProjectDetails(item)} />}
            />
        </Projects>
    </Container>
  );
}