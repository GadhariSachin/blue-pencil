import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href="/" className="text-logoBg text-[26px] font-[900] leading-[38px] flex-grow-1  z-[2]">
      Landing
    </Link>
  )
}

export default Logo