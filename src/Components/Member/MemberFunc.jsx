import { useParams } from "react-router"
import React from "react"
import Member from "./Member"


export default function MemberFunc () {
    const id = useParams().id
    return <Member id={id}/>
}