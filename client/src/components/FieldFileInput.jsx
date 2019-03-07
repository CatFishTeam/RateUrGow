import React, {Component} from 'react'

export default class FieldFileInput  extends Component{
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        const { input: { onChange } } = this.props
        onChange(e.target.files[0])
    }

    render(){
        //const { input: { value } } = this.props
        //const {input,label, required, meta, } = this.props  //whatever props you send to the component from redux-form Field
        return(
            <div className="file has-name">
                <label className="file-label">
                    <input className="file-input"
                           type='file'
                           name="photo"
                           accept='.jpg, .png, .jpeg'
                           onChange={this.onChange}/>
                    <span className="file-cta">
                      <span className="file-icon">
                        <i className="fas fa-upload"></i>
                      </span>
                      <span className="file-label">
                        Choose a file…
                      </span>
                    </span>
                    <span className="file-name"></span>
                </label>
            </div>
        )
    }
}