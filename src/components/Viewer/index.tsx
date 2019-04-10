import * as React from 'react'

// local
import './index.scss'
// code
export default function(props: any) {
  const { data, title } = props

  return (
    <div className="Viewer">
      <div className="Viewer__container">
        <h1 className="Viewer__title">{title}</h1>
        <div className="Viewer__detail">
          <img className="Viewer__image" alt="avatar" src={data.avatarUrl} />
          <span className="Viewer__detail-list">
            <span className="Viewer__detail-name">{data.name}</span>
            <span className="Viewer__detail-bio">{data.bio}</span>
          </span>
        </div>
      </div>
    </div>
  )
}
