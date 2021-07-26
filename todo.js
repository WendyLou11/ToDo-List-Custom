/*jshint esversion:11 */

function Todo({todo,index,remove}){
  function handle(){
    if (prompt('Are you sure (Y/N)')=='Y')
      remove(index);
  }
  return <div className="todo">{todo.text}<img src="./images/trash-can-icon.png"  onClick={handle} width="25"></img></div>
}
