import './App.css';
import './components/Style.css';
import FirstPage from './components/FirstPage';
import NestedPage from './components/NestedPage';
import Reusable  from './components/Reusable';
import Message from './components/Message';
import Counter from './components/Counter';
import DestructureProps from './components/DestructureProps';
import FunctionEventHandler from './components/FuncionEventHadler';
import ClassEventHandler from './components/ClassEventHandler';
import ParentComponent from './components/ParentComponent';
import ConditionalComponent from './components/ConditionalComponent';
import ListRenderByMap from './components/ListRenderByMap';
import StyleSheet from './components/StyleSheet';
import Form from './components/Form';
import Mounting from './components/Mounting';
import FragmentParent from './components/FragmentParent';
import HttpRequest from './components/HttpRequest';
import Search from './components/Search';
import Refs from './components/Refs';
import HigherOrder_Comp1  from './components/HigherOrder_Comp1';

function App() {
  return (
    <div className="App">
      <HigherOrder_Comp1 name='Higher Order' />
      <Refs/>
      <Search />
      <HttpRequest />
      <FragmentParent />
      <Mounting />
      <Form />
      <FirstPage />
      <Reusable name="Page2" heroName="Type 2">
        <p>Page 2 defination</p>
      </Reusable>
      <Reusable name="Page1" heroName="Type 1"/>
      <Reusable name="Page3" heroName="Type 3">
          <button>Action</button>
      </Reusable>
      <NestedPage name="Nested Page 1" pageDef="def 1"/>
      <NestedPage name="Nested Page 2" pageDef="def 2"/>
      <NestedPage name="Nested Page 3" pageDef="def 3"/>
      <Message />
      <Counter />
      <DestructureProps name="Props" info="Destructuring props"/>
      <FunctionEventHandler />
      <ClassEventHandler />
      <ParentComponent />
      <ConditionalComponent />
      <ListRenderByMap />
      <StyleSheet test={true} />
      
    </div>
  );
}

export default App;
