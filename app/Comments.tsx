const commentsFetch = () =>
  new Promise<string[]>(resolve =>
    setTimeout(() => resolve(['Comment 1', 'Comment 2', 'Comment 3']), 1000)
  )

async function Comments() {
  const comments = await commentsFetch()

  return (
    <div>
      {comments.map(comment => (
        <li key={comment}>{comment}</li>
      ))}
    </div>
  )
}

export default Comments
