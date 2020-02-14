import * as React from 'react'

interface TestProps {
  title?: string
  name?: string
}

const Test: React.FunctionComponent<TestProps> = ({
  title = 'Mr.',
  name = 'Vasily',
}) => {
  return (
    <span>
      {` ${title} `} {name}
    </span>
  )
}

export default Test
