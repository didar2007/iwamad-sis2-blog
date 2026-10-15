
import { useState } from 'react'

export type Post = {
  id: number
  title: string
  category: string
  excerpt: string
  content: string
}

type PostCardProps = {
  post: Post
  expanded?: boolean
}

export default function PostCard({
  post,
  expanded = false,
}: PostCardProps) {
  const [liked, setLiked] = useState(false)

  return (
    <article className="post-card">
      <span className="category">{post.category}</span>
      <h2>{post.title}</h2>
      <p>{expanded ? post.content : post.excerpt}</p>
      <button
        className={liked ? 'like-button liked' : 'like-button'}
        onClick={() => setLiked(!liked)}
        aria-pressed={liked}
      >
        {liked ? '♥ Liked' : '♡ Like'}
      </button>
    </article>
  )
}
