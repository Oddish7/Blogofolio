import { Posts } from "../../components/Main/Tabs/TabContent/TabContent"

export type PostState = {
    amountPosts: Posts[]
    limit?: number
    page?: number
}

export type PostAction = {
    type: string
    amountPosts?: Posts[]
    page?: number
}