import Card from './components/Card/Card';
import image from './components/Card/images/credit-card.png'
import debitCard from './components/Card/images/debit-card.png'
import creditCard from './components/Card/images/actual-card.png'
import busCard from './components/Card/images/random-card.png'
import academyData from './components/Academies/academyobject';
import Academy from './components/Academies/Academies';
import Counter from './components/Counter/Counter';

function App() {

  return (
    <>
      <div className='cards'>
        <Card
          title="Cineplexx Card"
          content="Small discount meant for movies"
          imageUrl={image} />

        <Card
          title="Debit Card"
          content="Payment card meant for purchases"
          imageUrl={debitCard} />

        <Card
          title="Credit Card"
          content="This card lets you borrow money to buy things"
          imageUrl={creditCard} />

        <Card
          title="Bus Card"
          content="This is a passenger pass for a bus"
          imageUrl={busCard} />

        <Card
          title="ID Card"
          content="Meant to prove your ID"
          imageUrl={image} />
      </div>

      <div className='academies'>
        <Academy academies={academyData} name="List of Academies" />
      </div>

      <div className='counter'>
        <Counter />
      </div>
    </>
  )
}

export default App;
