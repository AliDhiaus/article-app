import ViewArticle from '@/components/ViewArticle'
import React from 'react'

const page = () => {
  return (
    <div className='shadow p-5 rounded-md'>
      <h1 className="text-3xl text-center font-bold mb-6">View Article</h1>
      <ViewArticle />
    </div>
  )
}

export default page