import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import Footer from '../src/component/Footer'
import Top from '../src/component/Top'

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ width:1000, margin: "0 auto" }}>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp

/* 
페이지 전환시 레이아웃, 상태값을 유지할수 있음
componentDidCatch를 이용하여 커스텀 에러 헨들링을 할수 있음
추가적인 테이터를 페이지로 주입시켜줄수 있음
글로벌css를 이곳에 import해줌
*/
