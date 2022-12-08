import { Suspense } from 'react'
import Comments from './Comments'

const fetchDescription = (): Promise<string> =>
  new Promise(resolve =>
    setTimeout(() => resolve('Product information ready for SEO'), 5000)
  )

export default async function Home() {
  const description = await fetchDescription()

  return (
    <>
      <header>Header</header>

      <h2>Product Description</h2>
      <p>{description}</p>

      <h2>Comments</h2>
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <Comments />
      </Suspense>

      <footer>Footer</footer>
    </>
  )
}
