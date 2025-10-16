import React from 'react'
import Work from '../components/Work'

const WorkPage = () => {
  return (
    <div className='px-6 md:px-0'>
      <Work  limit={6} />
    </div>
  )
}

export default WorkPage;