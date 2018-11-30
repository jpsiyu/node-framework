import React from 'react'

class Paragraph extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className='paragraph'>
            {this.props.children}
        </div>
    }
}

export { Paragraph }