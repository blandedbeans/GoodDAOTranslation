import styles from '../styles/ProposalPages.module.css'
import Proposal from '../components/PendingProposal'

import { GOVERNANCE_ABI, GOVERNANCE_ADDRESS } from '../utils/constants'
import { useContractRead, useContractReads } from 'wagmi'
import { useState } from 'react';

import React from 'react';
import { data } from 'autoprefixer';
import { useTranslation } from 'react-i18next'


export default function PendingProposal() {


    const [proposalCount, setProposalCount] = useState(0)
    const [array1, setArray1] = useState<number[]>([])

    const { t } = useTranslation('common')
    // gets the total number of proposals submitted
    const getProposalCount = useContractRead({
        addressOrName: GOVERNANCE_ADDRESS,
        contractInterface: GOVERNANCE_ABI,
        functionName: 'proposalCount',
        watch: true,
        onSuccess(data) {
            setProposalCount(parseInt(data.toString()))
            console.log('Found proposal count', proposalCount)
            setArray()
        }
    })

    function setArray() {
        let array = [];
        for (let i = 1; i <= proposalCount; i++) {
            array.unshift(i);
        }
        setArray1(array);
    }

    return (
        <>
            <h1 className={styles.header}>{t('Pending Proposals')}</h1>
            <div className={styles.box}>
                {array1.map((i) => (
                    <div key={i}>                           
                        <Proposal index={i} />
                    </div>
                ))}
            </div>
        </>
    )
}