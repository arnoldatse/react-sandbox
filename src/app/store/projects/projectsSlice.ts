import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Project from 'core/office/entities/Project';

export interface ProjectsState {
    projects: Project[];
}

const initialState: ProjectsState = {
    projects: []
}

export const accountSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Project>) => {
            state.projects = [{...action.payload}, ...state.projects]
        },
        edit: (state, action: PayloadAction<Project>) => {
            const tempProjects = [...state.projects]
            const indexToUpdate = tempProjects.findIndex(project=>project.id === action.payload.id)
            if(indexToUpdate > -1){
                tempProjects[indexToUpdate] = {...action.payload}
                state.projects = [...tempProjects]
            }
        },
        remove: (state, action: PayloadAction<string>) => {
            const tempPojects = [...state.projects]
            const index = tempPojects.findIndex(project => project.id === action.payload)
            tempPojects.splice(index, 1)
            state.projects = [...tempPojects]
        },
    },
})

// Action creators are generated for each case reducer function
export const { add, edit, remove } = accountSlice.actions

export default accountSlice.reducer