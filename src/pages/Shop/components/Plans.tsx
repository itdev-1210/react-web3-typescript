import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { useWeb3React } from '@web3-react/core'
import PlanCard from './PlanCard';
import { CardData } from './Types';
import pools from 'config/constants/pools'
import { getMrchAddress, getMerchNStakingAddress } from 'utils/addressHelpers'
import { useAllowance } from 'hooks/useAllowance'
import { useERC20, useNMerchStaking } from 'hooks/useContract'
import { useApprove } from 'hooks/useApprove';
import useRefresh from 'hooks/useRefresh'
import { fetchUserDataAsync } from 'store/actions'

const Plans = () => {
  const dispatch = useDispatch()
  const mrchContract = useERC20(getMrchAddress())
  const merchNStakingAddress = getMerchNStakingAddress()
  const contract = useNMerchStaking()
  const allowance = useAllowance(mrchContract, merchNStakingAddress)
  const { onApprove } = useApprove(mrchContract)
  const { account } = useWeb3React()
  const { fastRefresh } = useRefresh()
  
  const [poolsData, updatePools] = useState([])
  const [pids, updatePids] = useState([])
  
  useEffect(() => {
    const data = [], ids = []
    pools.forEach((pool) => {
      const poolData: CardData = {
        id: pool.id,
        apy: pool.apy.toPrecision(),
        price: pool.price.toPrecision(),
        duration: pool.duration.toPrecision(),
        additional: (pool.price * (pool.apy - 100) / 100).toPrecision(),

      }
      data.push(poolData)
      ids.push(pool.id)
    });
    updatePools(data)
    updatePids(ids)
  }, [])

  useEffect(() => {
    if (account) {
      dispatch(fetchUserDataAsync(contract, account, pids))
    }
  }, [contract, pids, account, dispatch, fastRefresh])

  return (
    <section className="section plans" id="plans">
      <div className="container container--small">
        <div className="section-title">Plans</div>
        <div className="row">
          {poolsData.map((data, index) => <div className="col-lg-6 mb-4" key={index}>
            <PlanCard data={data} allowance={allowance} onApprove={onApprove}></PlanCard>
          </div>)}
        </div>
      </div>
    </section>
  );
};

export default Plans;
