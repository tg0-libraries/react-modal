# tg0/react-modal 

<p align="center">🔍 Readme navigation </p>

<div align="center">

  [![](https://img.shields.io/badge/-About-5276f2)](#About)
  [![](https://img.shields.io/badge/-Instalation-5276f2)](#Instalation)
  [![](https://img.shields.io/badge/-Examples-5276f2)](#Examples)
  [![](https://img.shields.io/badge/-Documentation-5276f2)](#Documentation)
  [![](https://img.shields.io/badge/-Contribute-5276f2)](#Contribute)
  [![](https://img.shields.io/badge/-Creator-5276f2)](#Creator)

</div>

</br></br>

<div align="left">
  
  <h1 id="About">About </h1>
  
  A simple modal lib in react that aims to help the community and be easy to use.

  * Library npm:
  <a href="https://www.npmjs.com/package/@tg0/react-modal">Click here </a>

</div>

</br>

___ 

<div align="left">
  
  <h1 id="Instalation">Instalation </h1>
  
  To install, use <a href="https://www.npmjs.com">npm</a> or <a href="https://yarnpkg.com">yarn</a>

  ```
  npm install @tg0/react-modal
  
  yarn add @tg0/react-modal
  ```
   
</div>

</br>

___


<div align="left">
  
  <h1 id="Examples">Examples </h1>
  
  ### 💻 A simple example of how to use the lib.

  To understand about the lib api, [click here](#Documentation).

  * Examples in codesandbox: <a href="https://codesandbox.io/s/tg0-react-modal-example-yy1kj?file=/src/App.js"> Click here </a>

  ```jsx
    import { Modal, useModal } from '@tg0/react-modal';

    function App() {
      const modal = useModal();
      // or use, but not recommended!
      // const {state, handleOpen, handleClose} = useModal();

      return (
        <div>
          <button onClick={modal.handleOpen}>Open a modal</button>
          <Modal isOpen={modal.state}>
            <h1>Modal Content</h1>

            <button onClick={modal.handleClose}>Close a modal</button>
          </Modal>
        </div>
      );
    }
  ```
  </br>

  ### 🎨 Styling the modal's Container and content tags

  See about the default modal styles by [clicking here](#aboutModalStyle)
  
  ```jsx
  return (
    <Modal 
      styles={{
        container: {
          background: '#fff',
          display: 'flex',
          'flex-direction': 'column'
        },
        content: {
          'z-index': 10,
        },
      }}
    >
      <h1>Modal Content</h1>
    </Modal>
  )
  ```
  </br>

  We can remove the css directly from the tag by creating a local variable or in another file.
  ```jsx
  const modalStyle = {
    container: {
      background: '#fff',
      display: 'flex',
      'flex-direction': 'column'
    },
    content: {
      'z-index': 10,
    },
  };

  return (
    <Modal
      styles={modalStyle}
      // Or you can stylize just the container or content
      // styles={modalStyle.container}
    >
      <h1>Modal Content</h1>
    </Modal>
  )
  ```
  </br>

  We can also use **className** to style the modal tags.
  ```jsx
  return (
    <Modal 
      classNames={{
        container: "class1",
        content: "class1 class2 class3"
      }}
    >
      <h1>Modal Content</h1>
    </Modal>
  )
  ```

  We can also use **id** to style the modal tags.
  ```jsx
  return (
    <Modal 
      ids={{
        container: "id1",
        content: "id1 id2 id3"
      }}
    >
      <h1>Modal Content</h1>
    </Modal>
  )
  ```
</div>

</br>

___

<div align="left">
  
  <h1 id="Documentation">Documentation </h1>

  ### About using Modal
  </br>
  
  The `<Modal> </Modal>` component receives the following properties:

  `isOpen: boolean`: Checks if the modal is open or closed.

  `children: ReactNode`: To place any `html` inside the `Modal` tag. 

  `styles?: {` </br>
  `container?: React.CSSProperties`</br>
  `content?: React.CSSProperties`</br>
  `}` : To modify the default Modal style.

  ___

  The `useModal()` hook is responsible for managing the state of the modal, making handling the component easier. </br>

  --> v.1.2.0 </br>
  The `hook returns an object` that can, `but doesn't need to be unstructured`

  ```jsx
  // state: boolean --> Tells when the modal is active or inactive.
  // handleOpen: () => void --> Makes the modal open.
  // handleClose: () => void --> Makes the modal close.

  // Use it like this:
  const modal = useModal();
  console.log(modal.state);

  // Not recommended!
  // or use like that.
  const {state} = useModal();
  console.log(state);
  ```

  * Note: I recommend giving descriptive names when using hook values.
  </br>

  ___

  <h3 id="aboutModalStyle">About modal styles</h3>
  </br>

  The lib uses styled-component for css.

  By default, the `<Modal>` component has this css: </br>
  
  ```ts
  // Covers all modal
  export const Container = styled.div`
    position: fixed;
    top: 0;
    z-index: 4;

    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
  `;

  // It encompasses the content of the modal
  export const Content = styled.div`
    position: fixed;
    z-index: 5;
  `;
  ```
</div>

</br>

___

<div align="left">
  
  <h1 id="Contribute">Contribute to the project </h1>

  <div>
    <p> 1° - Fork the repository; </p>
    <p> 2° - Clone the repository; </p>
    <p> 3° - Create a branch with your feature; </p>
    <p> 4° - Make a very descriptive commit with your changes; </p>
    <p> 5° - 'Push' your branch; </p>
    <p> 6° - Go to Pull Requests of the original project and create a pull request with your commit; </p>
    <p>
     ➡ If you have questions about how to create a pull request,
      <a
        href="https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request"> click on this link.
      </a>
    </p>
  </div>
</div>

</br>

___

<div align="left">
  
  <h1 id="Creator">Creator</h1>

  My name is Tiago Gonçalves, below I leave the links of my main networks in which I participate.

  [![](https://img.shields.io/badge/-Github-434140)](https://github.com/Tiaguin061)
  [![](https://img.shields.io/badge/-Linkedin-3DC3C9)](https://www.linkedin.com/in/tiagogoncalves200428/)
  [![](https://img.shields.io/badge/-Instagram-EA3C7A)](https://www.instagram.com/tiaguinho_gon1/?hl=pt-br)
  [![](https://img.shields.io/badge/-Discord-5276f2)](https://discord.com/users/586186122611130368)

</div>

</br>
