import './App.css';
import FirstBox from './components/FirstBox';
import SecondBox from './components/SecondBox';

function App() {
  return (
    
    <div className='h-[100vh] w-[100vw] flex flex-col lg:flex-row bg-custom-gradient shadow-zinc-900 lg:justify-center items-center shadow-[inset_0px_0px_10px_10px_rgba(0,0,0,0)] lg:pl-5 lg:pr-5 md:pt-7 md:pb-1'>
      <div className=' lg:w-[750px] lg:h-[570px] w-[700px] h-[300px] rounded-[27px] border-custom-border border-[1px] bg-customBackground'/>

      <div className=' flex flex-col w-[720px] h-[589px] lg:ml-[30px] mt-[50px] lg:mt-0 justify-between '>

        <FirstBox/>
        <SecondBox/>

      </div>

    </div>
  );
}

export default App;
