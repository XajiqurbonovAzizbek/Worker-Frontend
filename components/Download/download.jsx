import React from 'react'
import { AppstoreDowloadIcon, PlaymarketDownloadIcon } from '../../assets/icon'

export default function Download() {
  return (
    <div className='position-relative d-flex' style={{width:"65%",height:"10%",alignSelf:"flex-end",justifyContent:"flex-end"}}>
        <AppstoreDowloadIcon width="160" height="70"/>
        <PlaymarketDownloadIcon width="160" height="70"/>
    </div>
  )
}
