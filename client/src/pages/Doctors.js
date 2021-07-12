import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Icon, Table } from 'semantic-ui-react'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'
import DoctorsForm from './DoctorsForm'

const Doctors = () => {
    const { data, loading, error, setData, getData } = useAxiosOnMount('/api/doctors')

    const deleteDoctors = async (id) => {
        try{ console.log('delete try')
        console.log(id)
            await axios.delete(
                `/api/doctors/${id}`
            ) 
            filterDoctors(id)
        } catch (error) {
            console.log(error)
        }
    }


    const filterDoctors = (id) => {
        setData(data.filter((d) => d.id !== id))
      }

    const renderData = () => {
        return (
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Practice</Table.HeaderCell>
                        <Table.HeaderCell>Rating</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                  {data.map(d => (
                        <Table.Row>
                            <Table.Cell>{d.name}</Table.Cell>
                            <Table.Cell>{d.practice}</Table.Cell>
                            <Table.Cell>{d.rating}</Table.Cell>
                            <Table.Cell>
                                <Link to={{
                                       pathname: `/doctors/edit/${d.id}`,
                                       id: d.id,
                                       name: d.name,
                                       practice: d.practice,
                                       rating: d.rating,
                                       state: {doctorName: d.name}
                                       }}>
                                    <Icon name='pencil'></Icon>

                               </Link>
                               <Link onClick={()=> deleteDoctors(d.id)}> 
                                    <Icon name='trash' ></Icon>   
                                </Link>                            
                            </Table.Cell>
                        </Table.Row>
                  ))}
                </Table.Body>
            </Table>
        )
    }



    return (
        <div>
            <h1>Doctors</h1>
            <DoctorsForm data={data} setData={setData} getData={getData}/>
            {renderData()}

        </div>
    )
} 

export default Doctors