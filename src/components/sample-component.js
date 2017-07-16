import React, {PropTypes} from 'react'


// CSS
import styles from './sample-component.scss'

const SampleComponent = ({onSubmit, data}) => {

  let dataResults = data && data.query.results.channel.wind

  return (
    <div>
      <p className={styles.root}>Hello from component</p>
      <button type="button" onClick={onSubmit}>Click here</button>

      {dataResults && (
        <ul>
          <li>Wind chill: {dataResults.chill}</li>
          <li>Wind direction: {dataResults.direction}</li>
          <li>Wind speed: {dataResults.speed}</li>
        </ul>
      )}
    </div>
  )
}

export default SampleComponent
