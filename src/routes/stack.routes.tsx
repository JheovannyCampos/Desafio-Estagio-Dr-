import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from '../screens/Dashboard';
import { NewProject } from '../screens/NewProject';
import { ProjectDetails } from '../screens/ProjectDetails';
import { ChangeProject } from '../screens/ChangeProject';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes(){
  return (
    <Navigator
    screenOptions={{
        headerShown: false,
        
    }}
    >
        <Screen 
            name="Dashboard"
            component={ Dashboard }
        />
        <Screen 
            name="NewProject"
            component={ NewProject }
        />
        <Screen 
            name="ProjectDetails"
            component={ ProjectDetails }
        />
        <Screen 
            name="ChangeProject"
            component={ ChangeProject }
        />
    </Navigator>
  );
}