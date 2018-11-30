import React from 'react'
import Directory from './directory'
import { MacroEvent } from './macro'
import { getFirstArticle } from './config'

class Entry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDirectory: false,
            articleCfg: null,
        }
    }

    render() {
        const getArticle = () => {
            if (this.state.articleCfg) {
                const ArticleComponent = this.state.articleCfg.article
                return <ArticleComponent />
            } else {
                return null
            }
        }
        const displayValue = this.state.showDirectory ? 'unset' : 'none'
        const title = this.state.articleCfg ? this.state.articleCfg.name : ''

        return <div className='entry'>
            <div className='e-title'>
                <p className='noselect'>{title}</p>
            </div>
            <div className='e-content'>
                {getArticle()}
            </div>
            <div className='e-bottom' onClick={this.onDirectoryClick.bind(this)}>
                <p className='noselect'>Directory</p>
            </div>
            <div className='e-panel' style={{ display: displayValue }}><Directory /></div>
        </div>
    }

    componentDidMount() {
        app.eventMgr.subscribe(MacroEvent.SelectArticle, this, this.onSelectArticle.bind(this))
        this.initArticle()
    }

    componentWillUnmount() {
        app.eventMgr.unsubscribe(MacroEvent.SelectArticle, this)
    }

    initArticle() {
        const cfg = getFirstArticle()
        this.setState({ articleCfg: cfg })
    }

    onSelectArticle(args) {
        this.setState({ articleCfg: args })
    }

    onDirectoryClick() {
        this.setState({
            showDirectory: !this.state.showDirectory
        })
    }
}

export default Entry