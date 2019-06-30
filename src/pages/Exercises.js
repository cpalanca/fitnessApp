import React from 'react'
import Welcome from '../components/Welcome'
import ExerciseList from '../components/ExerciseList'
import AddButtom from '../components/AddButton'

const Exercises = ({data}) => (
    <React.Fragment>
        <Welcome 
            username="Carlos"
        />
        <ExerciseList 
            exercises={data}
        />
        <AddButtom />
    </React.Fragment>
)

export default Exercises