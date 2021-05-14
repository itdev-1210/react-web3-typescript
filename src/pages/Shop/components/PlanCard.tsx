import { useEffect, useState } from 'react';
import BigNumber from 'bignumber.js'

import useStake from 'hooks/useStake'
import useUnStake from 'hooks/useUnstake'
import { useUserFromPid } from 'store/hooks'
import { CardData } from './Types'

interface CardProps {
  data: CardData;
  allowance: BigNumber;
  onApprove: () => void
}

const PlanCard = (props: CardProps) => {
  const { onStake } = useStake(props.data.id)
  const { onUnstake } = useUnStake(props.data.id)
  const [pendingTx, setPendingTx] = useState(false)
  const [stakePendingTx, setStakePendingTx] = useState(false)
  const [unStakePendingTx, setUnStakePendingTx] = useState(false)
  const [unStakeDisabled, setUnStakeDisabled] = useState(true)
  const user = useUserFromPid(props.data.id)

  useEffect(() => {
    if (user.endTime * 1000 < new Date().getTime()) {
      setUnStakeDisabled(false)
    }
  }, [user, setUnStakeDisabled])
  return (
    <div className="card-item card-item--plan box">
      <div className="card-item__content">
        <h3 className="card-item__content__title">Stake with<br></br> timelock</h3>
        <div className="card-item__content__offer">
          Earn
          <span><strong>{props.data.apy}%</strong>apy</span>
        </div>
        <div className="card-item__content__text">Your LP tokens are locked for {props.data.duration} days</div>
      </div>
      <div className="card-item__footer">
        <span className="price">{props.data.price}</span>
        <div className="additional-price">
          <div className="additional-price__coin">
            <svg className="svg-icon" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6018 23.0531L12.7788 19.2832L14.9558 15.5266L17.1195 11.7566L17.4779 11.1593L17.6372 11.7566L18.3009 14.2389L17.5575 15.5266L15.3805 19.2832L13.2168 23.0531H15.8186L17.9956 19.2832L19.1239 17.3319L19.6549 19.2832L20.6637 23.0531H23L21.9911 19.2832L20.9823 15.5266L20.7168 14.5575L22.3363 11.7566H19.9735L19.8938 11.4779L19.0708 8.39823L18.9646 8H16.6947L16.6416 8.07965L14.5177 11.7566L12.3407 15.5266L10.177 19.2832L8 23.0531H10.6018Z"/>
            </svg>
          </div>
          <div className="additional-price__price">{props.data.additional}</div>
        </div>
        {props.allowance.isLessThan(new BigNumber(props.data.price).times(new BigNumber(10).pow(18))) ? 
        <button type="button" className="btn-stake btn-stake--bordered" 
          disabled={pendingTx}
          onClick={async () => {
            setPendingTx(true)
            await props.onApprove()
            setPendingTx(false)
          }}>{pendingTx ? 'Pending Confirmation' : 'Enable'}</button> : 
        new BigNumber(user?.userData?.stakedBalance).isEqualTo(new BigNumber(props.data.price).times(new BigNumber(10).pow(18))) ?
        <button type="button" className="btn-stake btn-stake--bordered" 
          disabled={unStakePendingTx || unStakeDisabled}
          onClick={async () => {
            setUnStakePendingTx(true)
            await onUnstake()
            setUnStakePendingTx(false)
          }}>{!unStakeDisabled ? 'Unstake' : unStakePendingTx ? 'Pending' : 'Unstake'}</button> :
        <button type="button" className="btn-stake btn-stake--bordered" 
          disabled={stakePendingTx}
          onClick={async () => {
            setStakePendingTx(true)
            await onStake(props.data.price)
            setStakePendingTx(false)
          }}>{stakePendingTx ? 'Pending' : 'Stake'}</button>
        }
      </div>
    </div>
  );
};

export default PlanCard;
