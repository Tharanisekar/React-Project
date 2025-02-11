import {Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Post from "./Post";
import PostLayout from "./PostLayout";
import { useEffect, useState } from "react";
import {format} from "date-fns";
import api from "./api/post"
import EditPost from "./EditPost";
import useWindowSize from "./hooks/useWindowSize";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { DataProvider } from "./context/DataContext";


function App() {
  

  return (

    <div className="App">
      <DataProvider>
      
      <Header title="Tharani Webpage" />
      <Nav/>

      <Routes>
      <Route path="/" element =
      {<Home
        
       />} />
      <Route path="post"> 
      <Route index element={<NewPost 
      
      />} />
      </Route>

      <Route path = "/edit/:id" 
      element={<EditPost > 
      </EditPost>}> 
      </Route>


      <Route path="about" element={<About/>}/>
      <Route path="*" element={<Missing />} />
      </Routes>
      <Footer/>
      </DataProvider>
    </div>
  
  );
}

export default App;
