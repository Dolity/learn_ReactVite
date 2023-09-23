import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Navbar from './Navbar'
import Input from './Input'
import Post from './Post'

import InputBMI from './InputBMI'
import CalBMI from './CalBMI'
import NameCard from './NameCard'
import BasicHook from './BasicHook'
import { func } from 'prop-types'

let id = 1;

function App() {

  const [posts, setPosts] = useState([]);
  const [BMIs, setBMIs] = useState([]);

  function addPost(title) {
    const newPost = { id, title }
    setPosts([newPost, ...posts])
    id += 1;
  }

  function deletePost(id) {
    const updatePosts = posts.filter((post) => post.id != id);
    setPosts(updatePosts);
  }

  function addBMI(height, weight) {
    const newBMI = { id, height, weight }
    setBMIs([newBMI])
    id += 1;
  }

  return (
    <>
      <div className="App">
        <Navbar />
        <Input addPost={addPost} />
        <InputBMI addBMI={addBMI} />
        <BasicHook />
        <NameCard />
        {BMIs.map((BMI) => <CalBMI key={BMI.id} id={BMI.id} height={BMI.height} weight={BMI.weight} deletePost={deletePost} />)}
        {posts.map((post) => <Post key={post.id} id={post.id} title={post.title} deletePost={deletePost} />)}
      </div>
    </>
  )
}

export default App
