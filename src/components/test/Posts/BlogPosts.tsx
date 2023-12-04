import { useEffect, useState } from "react"

type BlogPostType = {
        "id": number,
        "image": string,
        "text": string,
        "date": string,
        "lesson_num": number,
        "title": string,
        "description": string,
        "author": number
}

export const BlogPosts = () => {
    const [data, setData] = useState<BlogPostType[]>([])

    useEffect(() => {
        fetch('https://studapi.teachmeskills.by/blog/posts/?limit=11')
            .then(res => res.json())
            .then(res => setData(res.results))
    }, [])

    return (
        <div>
            {
                data.map((item) =>(
                    <div key={item.id}>
                        <span>Title: {item.title}</span>
                        <img src={item.image} alt="123"/>
                    </div>
                ))
            }
        </div>
    )
}