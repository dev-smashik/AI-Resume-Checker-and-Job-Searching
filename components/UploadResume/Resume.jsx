import React from "react";
import "/src/App.css";s
import Navbar from './Navbar'
import UploadResume from 'src/components/UploadResume/UploadResume.jsx'
import Footer from './Footer'
import Login from "../login";


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20
      rounded-full blur-[180px] -z-10'></div>
      <div className='overflow-hidden'>
      <Navbar />
      <Login />
      <UploadResume />
      <Footer />

      </div>
    
    </main>
  )
}

export default App
