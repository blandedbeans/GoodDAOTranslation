import { formatUnits } from 'ethers/lib/utils'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useContractReads, useContractWrite } from 'wagmi'
import { IGIVE_ABI, IGIVE_TOKEN } from '../utils/constants'
import { useTranslation } from 'react-i18next'




const DelegateBox = () => {

	const [address, setAddress] = useState('')

	const { t } = useTranslation('common')

	const delegate = useContractWrite({
        addressOrName: IGIVE_TOKEN,
        contractInterface: IGIVE_ABI,
        functionName: 'delegate',
		chainId: 80001,
        args: [
            address
        ],
		onSuccess(data) {
			toast.success('Delegated!')
		},
		onError(error) {
			toast.error(error.message)
		}
    })

	// const stakers = useContractReads({
	// 	contracts: [
	// 		{addressOrName: IGIVE_TOKEN, contractInterface: IGIVE_ABI, functionName: 'highestStakerInPool', args: [1, 0,]},
	// 		{addressOrName: IGIVE_TOKEN, contractInterface: IGIVE_ABI, functionName: 'highestStakerInPool', args: [1, 1,]},
	// 		{addressOrName: IGIVE_TOKEN, contractInterface: IGIVE_ABI, functionName: 'highestStakerInPool', args: [1, 2,]},
	// 		{addressOrName: IGIVE_TOKEN, contractInterface: IGIVE_ABI, functionName: 'highestStakerInPool', args: [1, 3,]},
	// 		{addressOrName: IGIVE_TOKEN, contractInterface: IGIVE_ABI, functionName: 'highestStakerInPool', args: [1, 4,]},
	// 		{addressOrName: IGIVE_TOKEN, contractInterface: IGIVE_ABI, functionName: 'highestStakerInPool', args: [1, 5,]},
	// 		{addressOrName: IGIVE_TOKEN, contractInterface: IGIVE_ABI, functionName: 'highestStakerInPool', args: [1, 6,]},
	// 		{addressOrName: IGIVE_TOKEN, contractInterface: IGIVE_ABI, functionName: 'highestStakerInPool', args: [1, 7,]},
	// 		{addressOrName: IGIVE_TOKEN, contractInterface: IGIVE_ABI, functionName: 'highestStakerInPool', args: [1, 8,]},
	// 		{addressOrName: IGIVE_TOKEN, contractInterface: IGIVE_ABI, functionName: 'highestStakerInPool', args: [1, 9,]},
	// 		{addressOrName: IGIVE_TOKEN, contractInterface: IGIVE_ABI, functionName: 'highestStakerInPool', args: [1, 10,]},
	// 		{addressOrName: IGIVE_TOKEN, contractInterface: IGIVE_ABI, functionName: 'highestStakerInPool', args: [1, 11,]},	
	// 		{addressOrName: IGIVE_TOKEN, contractInterface: IGIVE_ABI, functionName: 'highestStakerInPool', args: [1, 12,]},
	// 		{addressOrName: IGIVE_TOKEN, contractInterface: IGIVE_ABI, functionName: 'highestStakerInPool', args: [1, 13,]},
	// 		{addressOrName: IGIVE_TOKEN, contractInterface: IGIVE_ABI, functionName: 'highestStakerInPool', args: [1, 14,]},
	// 		{addressOrName: IGIVE_TOKEN, contractInterface: IGIVE_ABI, functionName: 'highestStakerInPool', args: [1, 15,]},
	// 		{addressOrName: IGIVE_TOKEN, contractInterface: IGIVE_ABI, functionName: 'highestStakerInPool', args: [1, 16,]},
	// 		{addressOrName: IGIVE_TOKEN, contractInterface: IGIVE_ABI, functionName: 'highestStakerInPool', args: [1, 17,]},
	// 		{addressOrName: IGIVE_TOKEN, contractInterface: IGIVE_ABI, functionName: 'highestStakerInPool', args: [1, 18,]},
	// 		{addressOrName: IGIVE_TOKEN, contractInterface: IGIVE_ABI, functionName: 'highestStakerInPool', args: [1, 19,]},
	// 		{addressOrName: IGIVE_TOKEN, contractInterface: IGIVE_ABI, functionName: 'highestStakerInPool', args: [1, 20,]}
	// 	]
	// })

	// console.log(formatUnits(stakers.data?.[7][0], 18))

  return (
	<div className='mt-[5vh] ml-[20vw] w-[60vw] h-[60vh] bg-white rounded-3xl border-purple border-4 p-6 overflow-auto font-bold'>

	<h2>{t('Before you can vote')}</h2>
	<br/>
	<br/>
	

	{t('Enter address')}
	<input className='w-full border-black rounded-lg border-2 p-1 font-bold' type={'text'} value ={address} onChange={(e)=>{setAddress(e.target.value)}} />
	<br/>
	<br/>
	<button onClick={()=>{delegate.write()}} className='bg-green rounded-2xl py-2 px-3 font-bold text-white ml-[50%] -translate-x-1/2'>
		{t('Delegate')}
	</button>
	<br/>
	<br/>
	<p className='text-zinc-400 font-normal text-sm'>
		{t('Delegate Terms')}
	</p>
	</div>
  )
}

export default DelegateBox