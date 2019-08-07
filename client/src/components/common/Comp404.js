import React from 'react'
import { Result, Tag } from 'antd'

export default function Comp404() {
  return (
    <div>
      <Result
        status='404'
        title='404'
        subTitle='Sorry, the page you visited does not exist.'
        extra={
          <Tag color='#108ee9'>
            <a style={{ padding: '8px', fontSize: '14px' }} href='/'>
              Back Home
            </a>
          </Tag>
        }
      />
    </div>
  )
}
