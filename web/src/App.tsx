
interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}


export function App() {
  return (
    <>
      <Button title="cebola"/>
      <Button title="roxa"/>
      <h1>Hello World</h1>
    </>
  ) 
}