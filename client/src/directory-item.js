import React from 'react'
import { getSecondIndex } from './config'
import { MacroEvent } from './macro'

class DirectoryMainItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showSubitem: false
        }
    }

    render() {
        return <div className='d-item' >
            <p className='noselect d-itemname' onClick={this.onMainClick.bind(this)}>{this.props.cfg.name}</p>
            {this.state.showSubitem
                ? <div className='d-panel'>{this.renderSubitem()}</div>
                : null}
        </div>
    }

    renderSubitem() {
        const items = []
        const seconds = getSecondIndex(this.props.cfg.id)
        for (let i = 0; i < seconds.length; i++) {
            const cfg = seconds[i]
            items.push(<DirectorySecondItem key={i} cfg={cfg}></DirectorySecondItem>)
        }
        return items
    }

    onMainClick() {
        this.setState({
            showSubitem: !this.state.showSubitem
        })
    }
}

class DirectorySecondItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className='d-subitem' onClick={this.onItemClick.bind(this)}>
            <p className='noselect'>{this.props.cfg.name}</p>
        </div>
    }

    onItemClick() {
        app.eventMgr.dispatch(MacroEvent.SelectSecondIndex, this.props.cfg)
    }
}

class DirectoryArticleItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className='d-article-item' onClick={this.onItemClick.bind(this)}>
            <p className='noselect'>{this.props.cfg.name}</p>
        </div>
    }

    onItemClick() {
        app.eventMgr.dispatch(MacroEvent.SelectArticle, this.props.cfg)
    }
}

export { DirectoryMainItem, DirectoryArticleItem }