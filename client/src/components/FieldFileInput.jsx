import React, {Component} from 'react'

export default class FieldFileInput  extends Component{
    constructor(props) {
        super(props)
        this.state = {
            fileName: "",
            uploading: false
        }
    }

    componentDidMount() {
        this._isMounted = true;
    }

    onChange = (e) => {
        if (this._isMounted) {
            const files = Array.from(e.target.files)
            this.setState({ uploading: true })

            const formData = new FormData()

            files.forEach((file, i) => {
                formData.append(i, file)
            })

            fetch(`http://127.0.0.1:3000/image-upload`, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(images => {
                    if(this._isMounted) {
                        this.setState({
                            fileName: "COUCOU",
                            uploading: false
                        })
                    }
                    this.props.input.onChange(images);
                })
            }
        }

    render(){
        return(
            <div className="file has-name">
                <label className="file-label">
                    <input className="file-input"
                           type='file'
                           name="photo"
                           accept='.jpg, .png, .jpeg'
                           onChange={this.onChange}
                           multiple/>
                    <span className="file-cta">
                      <span className="file-icon">
                        <i className="fas fa-upload"></i>
                      </span>
                      <span className="file-label">
                        Choisissez des fichiers…
                      </span>
                    </span>
                    <span className="file-name">{this.fileName}</span>
                </label>
            </div>
        )
    }
}