# Instructions

## See online result
https://home-of-gaming.netlify.app/

## Set Up

- git your clone of this repo from:

  ```bash
  git clone https://github.com/MeReda/Home-of-Gaming.git
  ```

- then go to directory path

  ```bash
  cd Home-of-Gaming
  ```

- install the packages

  ```bash
  npm install
  ```

- install `prettier` & `editorConfig` & `gitlens` extentions in `vscode` and there is more extentions if you want it

- the architecture of the components will be `src>components` for the global components and `src>pages` for the pages

- each page will be represented by a folder that containes `index.jsx` & `index.scss` and all the components of the page will be inside the folder represented with the same way

- when you want to code your task you should use this command to run the project over the network to see how the app will appeare in multible devices

  ```bash
  npm install -g vite
  vite --host
  ```

- when you code somthing please add comments to be easy for me to edit the code like:

  ```jsx
  const Test = () => {
    return (
      <>
        {/*Start Title code*/}
        <h1>test</h1>
        {/*End Title code*/}

        {/*Start Main Section*/}
        <main>
          <p>it's just a test</p>
          <ul>
            <li>we will make it (inchalah)</li>
          </ul>
        </main>
        {/*End Main Section*/}
      </>
    );
    export default Test;
  };
  ```

- if you want to add an (image, docs, vid...) add it to the public folder inside it's folder

  ```jsx
  /*we've added an image called 'img1.png' in 'public/imgs'. To get it:*/

  /* Don't: */ import Img1 from "public/img.png";
  /* Do: */ import Img1 from "/img.png";
  ```

## technologies

### we will use

- mirage

- bootstrap

- fontAwesome

- react loaders

- axios

- sass

- react-router-dom

- EmailJs

- leaflet
