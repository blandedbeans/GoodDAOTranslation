import React from 'react'
import Link from 'next/link'
import Connect from './Connect'

const Nav = () => {
  return (
	<nav>
		<ul className='flex items-center justify-center'>
			<li className='my-1 mx-2'>
				<Link href='/'>Home</Link>
			</li>
			<li className='my-1 mx-2'>
				<Link href='/stake'>Stake</Link>
			</li>
			<li className='my-1 mx-2'>
				<Link href='/proposals'>Proposals</Link>
			</li>
			<li className='my-1 mx-2'>
				<Connect/>
			</li>
		</ul>
	</nav>
  )
}

export default Nav