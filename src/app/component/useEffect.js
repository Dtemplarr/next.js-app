"use client"

import React, {useEffect, useState} from 'react'

function Userlist () {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() =>{
        const fetchUsers = async ()=> {
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                if(!response.ok) {
                    throw new Error("Network response was not ok")
                }
                const data = await response.json()
                setUsers(data)
            }catch(error) {
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }

        fetchUsers()
    })
}
export default Userlist
