import React from 'react';
import Header from "../components/global/header.jsx";
import Aside from "../components/global/aside.jsx"
import "../assets/styles/dasboard/dasboard.css"

function ViewCourse() {
  return (
    <>
      <main>
      <Aside/>
        <section className='body'>
          <Header/>

        </section>
      </main>
    </>
  );
}

export default ViewCourse