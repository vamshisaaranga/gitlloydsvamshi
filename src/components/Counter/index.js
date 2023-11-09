import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import './index.css'

class Counter extends Component {
  state = {repositoryList: [], page2: ''}

  componentDidMount() {
    this.getRepositoryList()
  }

  clickPage2 = () => {
    this.setState({page2: 'page=2'}, this.getRepositoryList)
  }

  clickPage1 = () => {
    this.setState({page2: ''}, this.getRepositoryList)
  }

  getRepositoryList = async () => {
    const {page2} = this.state
    const url = `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&${page2}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer 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',
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    this.setState({repositoryList: data.items})
  }

  render() {
    const {repositoryList} = this.state
    const repo = repositoryList[0]
    console.log(repo)
    return (
      <div className="cardContainer">
        <h1 className="headingElement">Most Starred Repos</h1>
        <ul>
          {repositoryList.map(each => {
            let avatarUrl = ''
            let name = ''
            let description = ''
            let noOfStarsUrl = ''
            let noOfIssues = ''
            let lastPublished = ''
            let loginKey = ''
            const repository = each
            if (repository !== undefined) {
              avatarUrl = repository.owner.avatar_url
              name = repository.name
              description = repository.description
              noOfStarsUrl = repository.owner.starred_url
              noOfIssues = repository.open_issues_count
              lastPublished = repository.updated_at
              loginKey = repository.owner.login
            }

            return (
              <Link
                to={`each/repo/${loginKey}/${name}`}
                style={{textDecoration: 'none'}}
              >
                <li className="listContainer" key={each.id}>
                  <img src={avatarUrl} alt="avatar" className="avatarImage" />
                  <div className="nameContainer">
                    <div>
                      <h1>{name}</h1>
                      <p>{description}</p>
                    </div>
                    <div className="detailsContainer">
                      <img src={noOfStarsUrl} alt="stars" />
                      <p>{noOfIssues}</p>
                      <p>{lastPublished}</p>
                      <p>
                        by <span style={{fontWeight: 'bold'}}>{name}</span>
                      </p>
                    </div>
                  </div>
                </li>
              </Link>
            )
          })}
        </ul>
        <div style={{textAlign: 'center'}}>
          <button type="button" className="button" onClick={this.clickPage1}>
            <AiOutlineArrowLeft />
          </button>
          <button type="button" className="button" onClick={this.clickPage2}>
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
