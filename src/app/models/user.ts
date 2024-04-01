import { Domain } from "./domaim"

export interface User {
    id: number
    name: string
    password: string
    domain: Domain
}

