const DocsIdPage = ({ params }: { params: { id: string; title: string } }) => {
  console.log(params)
  return (
    <div>
      id {params.id} {params.title}
    </div>
  )
}

export default DocsIdPage
