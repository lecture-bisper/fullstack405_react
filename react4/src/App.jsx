import Info from "./compoonents/Info.jsx";
import CounterUseEffect from "./compoonents/CounterUseEffect.jsx";
import LifecycleClass from "./compoonents/LifecycleClass.jsx";
import LifecycleFunc from "./compoonents/LifecycleFunc.jsx";
import VolumeControl from "./compoonents/VolumeControl.jsx";
import HookUseMemo from "./compoonents/HookUseMemo.jsx";
import HookUseMemo2 from "./compoonents/HookUseMemo2.jsx";
import HookUseRef from "./compoonents/HookUseRef.jsx";
import Accommodate from "./compoonents/Accommodate.jsx";

function App() {

  return (
    <div className={'container mt-5'}>
      <h3>useState 여러개 사용</h3>
      <Info/>

      <br/>
      <hr/>
      <br/>

      <h3>useEffect 사용하기</h3>
      <CounterUseEffect />
      <br/>
      <LifecycleClass/>
      <br/>
      <LifecycleFunc/>
      <br />
      <hr/>
      <br/>

      <h3>문제 1) useState, useEffect로 볼륨 조절기 만들기</h3>
      <VolumeControl />

      <br/><hr/><br/>

      <h3>useMemo 사용하기</h3>
      <HookUseMemo />
      <HookUseMemo2 />

      <br/><hr/><br/>

      <h3>useRef 사용하기</h3>
      <HookUseRef />

      <br/><hr/><br/>

      <h3>커스텀 훅 사용하기</h3>
      <Accommodate />

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default App
