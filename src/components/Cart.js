import { useSelector } from "react-redux"

export default function Cart(){
  let state = useSelector((state) => state)
  console.log(state)
  return(
    <div>
      <p><button>{state.counter}</button></p>
      <ul>
        {state.cart.map(item => (
          <li key={item.id}>{item.product},{item.price}</li>
        ))}
      </ul>
    </div>
  )
}