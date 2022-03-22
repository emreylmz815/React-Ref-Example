import React, { Component } from 'react'
export const ToggleArea=React.forwardRef((props,ref)=>{
      class ToggleArea extends Component {
        constructor(props) {
            super(props)
            this.state = {}
          }
      render() {
        return (
        <div className='toggleArea' ref={ref}>
              <div>
                  <div className='toggle-area' >
                    <p>{props.text}</p>
                  </div>
              </div>
        </div>
        )
      }
    }
    return <ToggleArea/>
})

