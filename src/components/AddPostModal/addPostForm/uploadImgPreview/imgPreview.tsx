import React from 'react'
import styles from './imgPreview.module.scss'

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
        <input type="file" name="photo" id="photoFile" onChange={this.handleChange} className={styles.inputfile} />
        <label htmlFor="photoFile"><i className="far fa-image"></i> Choose a photo... </label>
        <div className={styles.previewImg}>
        <img src={this.state.file} alt=''/>
        </div>
      </>
    );
  }
}

export default UploadPhoto;