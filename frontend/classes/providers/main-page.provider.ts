import { Post } from '@/classes/types'
import { DateTime } from 'luxon'

export class MainPageProvider {
  private posts: Post[]

  constructor(posts: Post[]) {
    this.posts = posts
  }

  public get featuredPost() {
    const post = this.posts.filter((post: Post) => post.isFeatured)[0]

    const formattedDate = DateTime.fromISO(post?.date).toLocaleString(
      DateTime.DATETIME_SHORT,
    )

    return {
      id: post?.id,
      title: post?.title,
      date: formattedDate,
      mainImage: post?.mainImage || '',
    }
  }

  private get postsSortedByDate() {
    return JSON.parse(JSON.stringify(this.posts)).sort((a: Post, b: Post) => {
      const dateA = DateTime.fromISO(a.date).toUnixInteger()
      const dateB = DateTime.fromISO(b.date).toUnixInteger()

      return dateB - dateA
    })
  }

  public get recentPosts() {
    return this.postsSortedByDate.slice(-4)
  }
}
