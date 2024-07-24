import { DefaultImageTag } from '@/utils/Constants'
import Image from 'next/image'
import React from 'react'

export default function Imaged(props) {
  return (
    <Image {...props} alt={DefaultImageTag} />
  )
}
