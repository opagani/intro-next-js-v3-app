import Todo from './Todo'

const TodoList = ({ todos }: any) => {
  return (
    <div>
      {todos.map((todo: any) => (
        // <Todo todo={todo} key={todo.id} />
        <div key={todo.id}>hello</div>
      ))}
    </div>
  )
}
export default TodoList
