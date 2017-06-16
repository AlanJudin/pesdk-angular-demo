import React from 'react';
import ReactDOM from 'react-dom';
import PhotoEditorReactUI from 'photoeditorsdk/js/PhotoEditorReactUI';
import 'photoeditorsdk/css/PhotoEditorReactUI.css'

// use react2angular for simplicity
import { react2angular } from 'react2angular';
// node_modules/photoeditorsdk/assets/stickers/base/glasses-shutter-green.png

class NgPhotoEditorSDKDemo extends React.Component {
  constructor() {
    super()
    const initialImageSrc = '/node_modules/photoeditorsdk/test.png'
    this.state = {
      image: new Image(initialImageSrc)
    };
    this.state.image.src = initialImageSrc
  }


  render() {
    console.log("Rendering")

    const { ReactComponent } = PhotoEditorReactUI;

    if (this.props.image.url !== this.state.image.src) {
      let  image = new Image()
      image.addEventListener('load',() => {
        if (this.refs.editor)
          this.refs.editor.ui.setImage(image)
      }); // add listener and bind callback
      image.src = this.props.image.url
    }

    if (this.state && this.state.image && this.state.image.src)
      return (<ReactComponent
      ref='editor'
      apiKey='YOURAPIKEY'
      assets={{
        baseUrl: '/node_modules/photoeditorsdk/assets'
      }}
      editor={{
        image: this.state.image
      }}
      style={{
        width: 800,
        height: 600
      }}>
    </ReactComponent>)
    else {
      return null
    }
  }
}


export default angular
  .module('imgly.pesdk.angular', [])
  .component('pesdkdemo', react2angular(NgPhotoEditorSDKDemo, ['image']))
  .name
