import { Domain } from "./domaim"

export interface Job {
    domain: Domain
    name: string
    houres: number
    location: string
    requirements: string
    workFromHome: boolean
}