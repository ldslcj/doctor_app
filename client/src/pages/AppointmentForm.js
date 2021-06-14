import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Button, Dropdown, Form } from 'semantic-ui-react'
import {
    DateTimeInput,
  } from 'semantic-ui-calendar-react';

  import {useParams, useLocation, useHistory} from 'react-router-dom'

const AppointmentForm = (props) => {
    const location = useLocation()
    const params = useParams()
    const history = useHistory()
    console.log(location)
    console.log(params)
    const [doctors, setDoctors] = useState([])
    const [patients, setPatients] = useState([])
    const [dateTime, setDateTime] = useState(location.date ? location.date : null )
    const [selectedPatient, setSelectedPatient] = useState(location.patient_id ? location.patient_id : null )
    const [selectedDoctor, setSelectedDoctor] = useState(location.doctor_id ? location.doctor_id : null)

    useEffect(() => {
        getDoctors()
    }, [])
    const getDoctors = async () => {
        let res = await axios.get('/api/doctors')
        let res1 = await axios.get('/api/patients')
        // map first to match semantic select {key, value, text}
        let selectDoctorData = res.data.map(doctor => {
            return { key: doctor.id, value: doctor.id, text: doctor.name }
        })
        let selectPatientData = res1.data.map(patient => {
            return { key: patient.id, value: patient.id, text: patient.name }
        })
        setDoctors(selectDoctorData)
        setPatients(selectPatientData)
    }

    const handleSubmit = async () => {
       if(params.id){
           // api call to update to db
        let res = await axios.put(`/api/appointments/${params.id}`, {
            doctor_id: selectedDoctor,
            patient_id: selectedPatient,
            date: dateTime
        })
       }
       else {
        // api call to create to db
        let res = await axios.post('/api/appointments', {
            doctor_id: selectedDoctor,
            patient_id: selectedPatient,
            date: dateTime
        })
       }

       // react route page change
       history.push('/appointments')

    }
    const handleChange = (event, {name,value}) => {
        console.log(value)
        console.log(name)
        setDateTime(value)
    }
    return (
        <div>
            <h1>AppointmentForm</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Field>
                        <label>Doctor</label>
                        <Dropdown
                            defaultValue ={selectedDoctor}
                            onChange={(e, { value }) => setSelectedDoctor(value)}
                            placeholder='Doctors'
                            fluid
                            search
                            selection
                            options={doctors}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Patients</label>
                        <Dropdown
                            defaultValue ={selectedPatient}
                            onChange={(e, { value }) => setSelectedPatient(value)}
                            placeholder='Patients'
                            fluid
                            search
                            selection
                            options={patients}

                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Date</label>
                        <DateTimeInput 
                            name="dateTime"
                            placeholder="Date Time"
                            value={dateTime}
                            iconPosition="left"
                            onChange={handleChange}
                        />
                    </Form.Field>
                </Form.Group>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default AppointmentForm