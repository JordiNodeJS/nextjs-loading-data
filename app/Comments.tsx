import EditableComments from "./EditableComments"

const commentsFetch = () =>
  new Promise<string[]>(resolve =>
    setTimeout(() => resolve(['Comment 1', 'Comment 2', 'Comment 3']), 5000)
  )

async function Comments() {
  const comments = await commentsFetch()

  return (
    <div>
      <EditableComments comments={comments} />
    </div>
  )
}

export default Comments
