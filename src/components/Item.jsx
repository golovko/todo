import React from 'react'

const itemsArr = [
  {id: 0, created: '01/06/2023', text:"First task text", status: false},
  {id: 1, created: '02/06/2023', text:"Second super task text", status: true},
  {id: 2, created: '02/06/2023', text:"Third task text", status: false},
  {id: 3, created: '03/06/2023', text:"4 task text", status: false},
  {id: 4, created: '04/06/2023', text:"5 task text", status: true},
  {id: 5, created: '04/06/2023', text:"6 task text", status: true}
];

export default function Item () {
  return (
    <div>Item
      {itemsArr}
    </div>
  )
}
