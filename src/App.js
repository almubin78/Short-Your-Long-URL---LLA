import Entry from './Pagese/Entry/Entry';
import ListPage from './Pagese/List/List';
import Edit from './Pagese/Edit/Edit';
import Contact from './Pagese/Contact/Contact';
import MyComponent from './Pagese/AutoReload/MyComponent';

const App = () => {
 

  return (
    <div className='container'>
      <Entry />
      <ListPage />
      <Edit />
      <Contact />
      {/* <MyComponent/> */}
    </div>
  );
};



export default App;
