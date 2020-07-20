import React from 'react'
import './imgPreview.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';

class UploadPhoto extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const { input: { onChange } } = this.props
    onChange(event.target.files[0])
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  render() {
    // const { input: { value } } = this.props
    return (
      <>
        <input type="file" name="file" id="file" onChange={this.handleChange} className="inputfile" />
        <label for="file"><i class="far fa-image"></i> Choose a photo... </label>
        <div className="previewImg">
        <img src={this.state.file}/>
        </div>
      </>
    );
  }
}

export default UploadPhoto;