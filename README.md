# tg0/react-modal

<p align="center">🔍 Readme navigation </p>

<div align="center">

  [![](https://img.shields.io/badge/-About-5276f2)](#About)
  [![](https://img.shields.io/badge/-Instalation-5276f2)](#Instalation)
  [![](https://img.shields.io/badge/-Examples-5276f2)](#Examples)
  [![](https://img.shields.io/badge/-Documentation-5276f2)](#Documentation)
  [![](https://img.shields.io/badge/-Creator-5276f2)](#Creator)

</div>

</br></br>

<div align="left">
  
  <h1 id="About">About </h1>
  
  A simple modal lib in react that aims to help the community and be easy to use.

</div>

</br>

___ 

<div align="left">
  
  <h1 id="Instalation">Instalation </h1>
  
  To install, use <a href="">npm</a> or <a href="">yarn</a>

  ```
  npm install @tg0/react-modal
  
  yarn add @tg0/react-modal
  ```
   
</div>

</br>

___


<div align="left">
  
  <h1 id="Examples">Examples </h1>
  
  A simple example of how to use the lib.

  To understand about the lib api, [click here](#Documentation).

  ```jsx
    import { Modal, useModal } from '@tg0/react-modal';

    function App() {
      const [stateModal, handleOpenModal, handleCloseModal] = useModal();

      return (
        <div>
          <button onClick={handleOpenModal}>Open a modal</button>
          <Modal isOpen={stateModal}>
            <h1>Modal Content</h1>

            <button onClick={handleCloseModal}>Close a modal</button>
          </Modal>
        </div>
      );
    }
  ```
   
</div>

</br>

___

<div align="left">
  
  <h1 id="Documentation">Documentation </h1>

  ### About using Modal
  </br>
  
  The `<Modal> </Modal>` component receives the following properties:

  `isOpen`: Checks if the modal is open or closed.

  `children`: To place any `html` inside the `Modal` tag. </br>

  ___

  The `useModal()` hook is responsible for managing the state of the modal, making handling the component easier. </br>

  The `hook returns an array` with 3 exact positions </br>
  ```jsx
  // Position[0] stateModal: boolean --> Tells when the modal is active or inactive.
  // Position[1] handleOpenModal: () => void --> Makes the modal open.
  // Position[2] handleCloseModal: () => void --> Makes the modal close.
  //         [0]           [1]              [2]
  const [stateModal, handleOpenModal, handleCloseModal] = useModal();
  ```

  * Note: Why return an array and not an object? </br>
  Returning an Array allows us to name the values ​​however we want to use them, making it more flexible when using multiple modals in the same `Component React`

  * Note: I recommend giving descriptive names when using hook values.
  </br>

  ___

  ### About modal styles
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

  * Note: Currently the lib does not support receiving styles in component `<Modal>`.
</div>

</br>

<!-- ___

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

___ -->

<div align="left">
  
  <h1 id="Creator">Creator</h1>

  My name is Tiago Gonçalves, below I leave the links of my main networks in which I participate.

  [![](https://img.shields.io/badge/-Github-434140)](https://github.com/Tiaguin061)
  [![](https://img.shields.io/badge/-Linkedin-3DC3C9)](https://www.linkedin.com/in/tiagogoncalves200428/)
  [![](https://img.shields.io/badge/-Instagram-EA3C7A)](https://www.instagram.com/tiaguinho_gon1/?hl=pt-br)
  [![](https://img.shields.io/badge/-Discord-5276f2)](https://discord.com/users/586186122611130368)

</div>

</br>
