import React from 'react'
import './imgPreview.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';

interface IProps{
  input: any
}

interface IState{
  file: any
}

class UploadPhoto extends React.Component<IProps, IState>  {
  constructor(props: any){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event: any) {
    const { input: { onChange } } = this.props
    onChange(event.target.files[0])
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  render() {
    return (
      <>
        <input type="file" name="photo" id="photoFile" onChange={this.handleChange} className="inputfile" />
        <label htmlFor="photoFile"><i className="far fa-image"></i> Choose a photo... </label>
        <div className="previewImg">
        <img src={this.state.file} />
        </div>
      </>
    );
  }
}

export default UploadPhoto;