import AxiosTest from "./components/AxiosTest.jsx";
import AxiosDailyBoxOffice from "./components/AxiosDailyBoxOffice.jsx";
import AxiosRestApiServerConnect from './components/AxiosRestApiServerConnect.jsx';

function App() {

  return (
    <div className={'container mt-5'}>
      <h3>Axios를 사용한 비동기 통신</h3>
      <AxiosTest />
      <br /><br />
      <AxiosDailyBoxOffice />
      <br /><hr /><br />
      <AxiosRestApiServerConnect />

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default App
