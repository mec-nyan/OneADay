import './App.css';
import { useState } from 'react';
//import {  } from 'cloudinary-react';

function App() {

  const [ image, setImage ] = useState('');
  const [ loading, setLoading ] = useState(false);


  const uploadImage = event => {
    event.preventDefault();
    const files = event.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'videogames');
    setLoading(true);
    fetch(
      'https://api.cloudinary.com/v1_1/dbu76tbs6/image/upload',
      {
        method: 'POST',
        body: data,
      }).then(res => res.json())
      .then(file => setImage(file.secure_url))
      .then(setLoading(false))
      .catch(e => console.log(e));
  };

  return (
    <div className="App">
      <h1>Add files with Cloudinary</h1>

      <form> 
        <input 
          type='file' 
          name='file'
          placeholder='elige una imagen'
          onChange={uploadImage} 
        />

        <button type='submit'>Upload</button>
      </form>

      {loading ? (<h2>Loading...</h2>) : (<img src={image} alt='' />)}
    </div>
  );
}

export default App;
