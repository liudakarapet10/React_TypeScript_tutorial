import './App.css';
// import {Text} from './components/polymorphic/Text'
// import {CustomButton} from './components/html/Button'
  // import {Toast} from './components/templateliterals/Toast'
// import { RandomNumber } from './components/resctriction/RandomNumber';
// import { Private } from './components/auth/Private';
// import { Profile } from './components/auth/Profile';
// import { List } from './components/generics/List';
// import { Counter } from './components/class/Counter';

// import { Box } from './components/context/Box';
// import { ThemeContextProvider } from './components/context/ThemeContext';
// import { User } from './components/context/User';
// import { UserContextProvider } from './components/context/UserContext';
// import { Button } from './components/events/Button';
// import { Input } from './components/events/Input';
// import { Greet } from './components/Greet';
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';
// import { Status } from './components/Status';
// import { Container } from './components/style/Container';

function App() {
  return <div className="App"> 
    {/* <Status status='loading' />
    <Heading> Pleaseholder text</Heading>
    <Oscar>
      <Heading>Oscar for leanardo Dicapio</Heading>
    </Oscar>
    <Greet name='Liuda' messageCount={10} isLoggedIn={false} /> */}


   {/* <Button 
        handleClick={(event, id) => {
          console.log('clicked', event, id);
        }}   
   /> */}

   {/* <Input value='' handleChange={(event) => console.log(event)}/> */}
   {/* <Container styles={{border: '1px solid black', padding: '1rem'}} /> */}
 


   {/* <ThemeContextProvider>
     <Box />
   </ThemeContextProvider> */}

{/* 
    <UserContextProvider>
      <User />
    </UserContextProvider> */}
    {/* <Counter message='The counter value is' /> */}



    {/* <Private isLoggedIn={true} component={Profile} /> */}


    {/* <List 
     items={['Batman', 'Superman' , 'Spaderman']}
     onClick={(item) => console.log(item)} />

    <List 
     items={[1, 2, 3]}
     onClick={(item) => console.log(item)} />

    <List 
     items={[
      {
        first: 'liuda',
        second: 'Karpet'
      },
      {
        first: 'liuda',
        second: 'Karpet'
     },
     {
      first: 'liuda',
      second: 'Karpet'
    },
     ]}
     onClick={(item) => console.log(item)} /> */}


    {/* <RandomNumber value={10} isPositive  /> */}

   {/* <Toast position='center'/> */}
  

   {/* <CustomButton variant='primary' onClick={() => console.log('Clicked')}> 
       Primary Button
  </CustomButton> */}


  {/* <Text as='h1' size='lg'> Heading</Text>
  <Text as='p' size='md'> Paragraph</Text>
  <Text  as='label' htmlFor='someId' size='sm' color='primary'> Label</Text> */}
    </div>; 
}

export default App;
