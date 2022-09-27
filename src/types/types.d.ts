export interface User {
    id?: string
    user?: string
    password?: string
}

export interface UserContextType {
    user: User
    setUser: (value: User) => void
    loggedIn: boolean
    setLoggedIn: (value: boolean) => void
}

export interface CurrentState {
    loading: Boolean
    error: Boolean
    message: string
}

export type useUserTypes = {
    user: User
    setUser: (value: User) => void
    hasLoading: CurrentState["loading"]
    hasError: CurrentState["error"]
    login: (User) => {}
    logout: () => void
    loggedIn: boolean
    setLoggedIn: (value:Boolean) => void
}

export interface ServiceProps {
    name: string
}

export interface IListEmployees {
    success: Boolean
    data: {
        employees: {
            id: number
            name: string
            last_name: string
            birthday: date | number | string
        }[]
    }
}

export interface FormEmployeeState {
    name: string
    last_name: string
}

export interface FileItem {
    name: string,
    src: string
}

export interface InProcessState {
    error: Boolean
    message: string
    hasLoading: Boolean
}

export interface resSetEmpleado {
    success: Boolean
    data: string 
}