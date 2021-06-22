import React, { useEffect } from 'react'
import { ReactComponent as TestSVG } from './test.svg'
import testPNG from './test.jpg'

function AppSVG() {
  const task1 = () => {
    return new Promise((resolve, reject) => {
      resolve(console.log('1'))
    })
  }

  const task2 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log('2'))
      }, 300)
    })
  }

  const task3 = () => {
    return new Promise((resolve, reject) => {
      resolve(console.log('3'))
    })
  }

  async function main() {
    await task1()
    await task2()
    await task3()
    // console.log('test1', test1)
    // console.log('test1', test2)
    // console.log('test1', test3)
  }

  useEffect(() => {
    main()
    // task1().then(function () {
    //   task2().then(function () {
    //     task3()
    //   })
    // })
    // console.log('1')
    // setTimeout(function () {
    //   console.log('2')
    // }, 1000)
    // console.log('3')
  }, [])
  return (
    <div></div>
    // <div>
    //   <TestSVG />
    //   <img src={testPNG} />
    // </div>
    // <figure>
    //   <figcaption>A graph that shows the number of fruit collected</figcaption>
    //   <svg className="chart" width="420" height="150" aria-labelledby="title desc" role="img">
    //     <title id="title">A bar chart showing information</title>
    //     {/* <desc id="desc">4 apples; 8 bananas; 15 kiwis; 16 oranges; 23 lemons</desc> */}
    //     <g className="bar">
    //       <rect width="40" height="19"></rect>
    //       <text x="45" y="9.5" dy=".35em">
    //         4 apples
    //       </text>
    //     </g>
    //     <g className="bar">
    //       <rect width="80" height="19" y="20"></rect>
    //       <text x="85" y="28" dy=".35em">
    //         8 bananas
    //       </text>
    //     </g>
    //     <g className="bar">
    //       <rect width="150" height="19" y="40"></rect>
    //       <text x="150" y="48" dy=".35em">
    //         15 kiwis
    //       </text>
    //     </g>
    //     <g className="bar">
    //       <rect width="160" height="19" y="60"></rect>
    //       <text x="161" y="68" dy=".35em">
    //         16 oranges
    //       </text>
    //     </g>
    //     <g className="bar">
    //       <rect width="230" height="19" y="80"></rect>
    //       <text x="235" y="88" dy=".35em">
    //         23 lemons
    //       </text>
    //     </g>
    //   </svg>
    // </figure>
  )
}

export default AppSVG
