import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'

export const approve = async (lpContract, merchStakingContract, account) => {
  return lpContract.methods
    .approve(merchStakingContract.options.address, ethers.constants.MaxUint256)
    .send({ from: account })
}

export const stake = async (merchContract, pid, amount, account) => {
  return merchContract.methods
    .stake(pid, new BigNumber(amount).times(new BigNumber(10).pow(18)).toString())
    .send({ from: account, gas: 200000 })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const unstake = async (merchContract, pid, account) => {
  return merchContract.methods
    .withdraw(pid)
    .send({ from: account, gas: 200000 })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}