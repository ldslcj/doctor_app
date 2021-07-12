import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, useParams } from 'react-router'
import { Button, Form, Input } from 'semantic-ui-react'

const DoctorsForm = (props) => {
    const {getData} = props
    const location = useLocation()
    const params = useParams()
    const history = useHistory()
    const [name, setName] = useState(location.name)
    const [practice, setPractice] = useState(location.practice)
    const [rating, setRating] = useState(location.rating)
    const [selectedDoctor, setSelectedDoctor] = useState(location.id ? location.id : null)
    const [doctor, setDoctor] = useState([])
 
    useEffect (()=>{
        getDoctor()
    }, [])

    const getDoctor = async () => {
        if (params.id) {
            let res = await axios.get(`/api/doctors/${params.id}`)
            setDoctor(res.data)
        }
    }

    const handleSubmit = async () => {
        if (params.id) {
            let res = await axios.put(`/api/doctors/${params.id}`, {
                id: selectedDoctor,
                name: name,
                practice: practice,
                rating: rating
            })
        } else {
            let res = await axios.post('/api/doctors', {
                id: selectedDoctor,
                name: name,
                practice: practice,
                rating: rating
            }) 
        } 
        getData()
        history.push('/doctors')
        
    }



    const nameChange = (event, { name, value }) => {
        setName(value)
    }

    const practiceChange = (event, { practice, value }) => {
        setPractice(value)
    }

    const ratingChange = (event, { rating, value }) => {
        setRating(value)
    }


    return (
        <div>
            <h1>Doctor Form</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Field>
                        <label>Doctor Name</label>
                        <Input
                            defaultValue={location.name}
                            onChange={nameChange}
                            placeholder='Doctors'
                            fluid
                            value={name}
                            lavel='Name'
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Practice</label>
                        <Input
                            defaultValue={location.practice}
                            onChange={practiceChange}
                            placeholder='Practice'
                            label='Practice'
                            value={practice}
                            fluid
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Rating</label>
                        <Input
                            defaultValue={location.rating}
                            name="rating"
                            onChange={ratingChange}
                            fluid
                            placeholder="Rating"
                            value={rating}
                            label='Rating'
                        />
                    </Form.Field>
                </Form.Group>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default DoctorsForm