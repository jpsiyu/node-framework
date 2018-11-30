import React from 'react'
import {  cfgMainIndex, getArticlesBySecondIndex } from './config'
import { DirectoryMainItem, DirectoryArticleItem } from './directory-item'
import { MacroEvent } from './macro'

class Directory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
        }
    }

    render() {
        return <div className='directory'>
            <div className='d-left'>
                {this.renderMainIndex()}
            </div>
            <div className='d-right'>
                {this.renderArticleItem()}
            </div>
        </div>
    }

    renderMainIndex() {
        const items = []
        for (let i = 0; i < cfgMainIndex.length; i++) {
            const cfg = cfgMainIndex[i]
            items.push(<DirectoryMainItem key={i} cfg={cfg} />)
        }
        return items
    }

    renderArticleItem() {
        const items = []
        for (let i = 0; i < this.state.articles.length; i++) {
            const cfg = this.state.articles[i]
            items.push(<DirectoryArticleItem key={i} cfg={cfg}></DirectoryArticleItem>)
        }
        return items
    }

    componentDidMount() {
        app.eventMgr.subscribe(MacroEvent.SelectSecondIndex, this, this.receiveSelectEvent.bind(this))
    }

    componentWillUnmount(){
        app.eventMgr.unsubscribe(MacroEvent.SelectSecondIndex, this)
    }

    receiveSelectEvent(args) {
        const cfg = args
        const articles = getArticlesBySecondIndex(cfg.id)
        this.setState({ articles })
    }
}

export default Directory