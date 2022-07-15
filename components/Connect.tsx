import React, { useEffect, useState } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import truncateWalletAddress from '../utils/truncateWalletAddress'

const Connect = () => {

	const [btnTxt, setBtnTxt] = useState(<div></div>)

	const { connect, connectors, error, isLoading, pendingConnector } = useConnect({
		chainId: 80001
	})

	useEffect(() => {
		
		const callData = () => {
			setBtnTxt(
			<div>
				{connectors.map((connector) => (
					<button disabled={!connector?.ready} key={connector.id} onClick={() => connect({ connector })}>
					{connector?.name}
					{!connector?.ready && ' (unsupported)'}
					{isLoading && connector?.id === pendingConnector?.id && ' (connecting)'}
					</button>
				))}
			
				{error && <div>{error.message}</div>}
			</div>
			)
		}
		callData()
	}, [connect, connectors, error, isLoading, pendingConnector])
	 
	const { address, connector, isConnected } = useAccount()
	const { disconnect } = useDisconnect()
	const disconnectClick = () => {disconnect()}

	if (isConnected && connector) {
		return (
			<div>
				<div>{truncateWalletAddress(address || 'N/A')}</div>
				<button onClick={disconnectClick}>Disconnect</button>
			</div>
		)
	}

	else{
		return (btnTxt
	  )
	}
	
}
export default Connect