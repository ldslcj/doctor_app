import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, useParams } from 'react-router'
import { Button, Form, Input } from 'semantic-ui-react'

const PatientsForm = () => {
    const location = useLocation()
    const params = useParams()
    const history = useHistory()
    const [name, setName] = useState(location.name)
    const [selectedPatient, setSelectedPatient] = useState(location.id ? location.id : null)
    const [patients, setPatients] = useState([])

 
    useEffect (()=>{
        getPatient()
    }, [])

    const getPatient = async () => {
        if (params.id) {
            let res = await axios.get(`/api/patients/${params.id}`)
            setPatients(res.data)
        }
    }

    const handleSubmit = async () => {
        if (params.id) {
            history.push('/patients')
            let res = await axios.put(`/api/patients/${params.id}`, {
                id: selectedPatient,
                name: name
            })
        } else {
            let res = await axios.post('/api/patients', {
                id: selectedPatient,
                name: name
            }) 
        } 
        // getData()
        history.push('/patients')
    }



    const nameChange = (event, { name, value }) => {
        setName(value)
    }


    return (
        <div>
            <h1>Patients Form</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Field>
                        <label>Patient Name</label>
                        <Input
                            defaultValue={location.name}
                            onChange={nameChange}
                            placeholder='Patient Name'
                            fluid
                            value={name}
                            lavel='Name'
                        />
                    </Form.Field>
                </Form.Group>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default PatientsForm