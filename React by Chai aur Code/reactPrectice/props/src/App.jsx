import Card from './components/Card'

function App() {

  return (
    <>
      <div className='flex gap-7'>
        <Card title={"My Name is 1"} para={"Hello i am Para1"} click={"1000"}/>
        <Card title={"My Name is 2"} para={"Hello i am Para2"} click={"2000"}/>
        <Card title={"My Name is 3"} para={"Hello i am Para2"} click={"3000"}/>
        <Card title={"My Name is 4"} para={"Hello i am Para3"} click={"4000"}/>
        <Card title={"My Name is 5"} para={"Hello i am Para4"} click={"5000"}/>
        <Card title={"My Name is 6"} para={"Hello i am Para5"} click={"6000"}/>
      </div>
    </>
  )
}

export default App
