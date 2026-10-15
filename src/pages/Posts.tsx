
import PostCard, { type Post } from '../components/PostCard'

const posts: Post[] = [
  {
    id: 1,
    title: 'The Power of Small Habits',
    category: 'LIFESTYLE',
    excerpt: 'Small actions can lead to meaningful changes over time.',
    content: 'Building small habits every day can improve our lives. Start with one simple action and stay consistent.',
  },
  {
    id: 2,
    title: 'Why Travel Changes Us',
    category: 'TRAVEL',
    excerpt: 'New places help us see the world from a different perspective.',
    content: 'Travel introduces us to new cultures, people, and ideas. Even a short trip can create memories that stay with us for years.',
  },
  {
    id: 3,
    title: 'Learning Never Stops',
    category: 'PERSONAL GROWTH',
    excerpt: 'Every experience gives us a chance to learn something new.',
    content: 'Growth comes from curiosity, practice, and learning from mistakes. Progress does not have to be perfect to be valuable.',
  },
]

export default function Posts() {
  return (
    <section className="page-section">
      <span className="eyebrow">THE JOURNAL</span>
      <h1>Latest posts</h1>
      <p className="section-intro">
        Thoughts and stories worth your time.
      </p>
      <div className="posts-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
