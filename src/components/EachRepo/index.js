import {Component} from 'react'
import './index.css'

class EachRepo extends Component {
  componentDidMount() {
    this.getEachRepo()
  }

  getEachRepo = async () => {
    const {match} = this.props
    const {params} = match
    const {owner, repo} = params
    console.log(repo)
    const url = `https://api.github.com/repos/${owner}/${repo}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `'Bearer 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'`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <div>
        <h1>vamshi</h1>
      </div>
    )
  }
}

export default EachRepo
