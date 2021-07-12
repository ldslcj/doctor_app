import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Icon, Table } from 'semantic-ui-react'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'
import DoctorsForm from './DoctorsForm'
import PatientsForm from './PatientsForm'

const Patients = () => {
    const { data, loading, error, setData, getData } = useAxiosOnMount('/api/patients')

    const deletePatients = async (id) => {
        try{ console.log('delete try')
        console.log(id)
            await axios.delete(
                `/api/patients/${id}`
            ) 
            filterPatients(id)
        } catch (error) {
            console.log(error)
        }
    }


    const filterPatients = (id) => {
        setData(data.filter((d) => d.id !== id))
      }

    const renderData = () => {
        return (
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                  {data.map(d => (
                        <Table.Row>
                            <Table.Cell>{d.name}</Table.Cell>
                            <Table.Cell>
                                <Link to={{
                                       pathname: `/patients/edit/${d.id}`,
                                       id: d.id,
                                       name: d.name
                                       }}>
                                    <Icon name='pencil'></Icon>

                               </Link>
                               <Link onClick={()=> deletePatients(d.id)}> 
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
            <h1>Patients</h1>
            <PatientsForm />
            {renderData()}

        </div>
    )
} 

export default Patients