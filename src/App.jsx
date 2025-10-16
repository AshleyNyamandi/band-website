import Layout from './components/Layout'
import Home from './pages/Home'
import Band from './pages/Band'
import Tour from './pages/Tour'
import Contact from './pages/Contact'

function App() {

  return (
      <Layout>
        <Home />
        <main>
          <Band />
          <Tour />
          <Contact />
        </main>
      </Layout>
  )
}

export default App
