import type { ReactNode } from 'react'
import { useWalletConnect } from '@provenanceio/walletconnect-js'
import { TxCard } from '../../Component/TxCard'
import {
  CheckGroupIdByMember,
  CreateGroupModal,
  GetGroupInfo,
  GetGroupMembers,
  GetGroupPolicy,
  GetGroupPolicyByGroup,
} from '../../Modals'

interface ICProps {
  setModalChildren: (val: ReactNode) => void
  setShowModal: (val: boolean) => void
  showModal: boolean
}

export const GroupInformationCards = ({
  setModalChildren,
  setShowModal,
  showModal,
}: ICProps) => {
  const { walletConnectState } = useWalletConnect()
  return (
    <>
      <TxCard
        title="Create Group"
        onClick={() => {
          setShowModal(!showModal)
          if (walletConnectState.address) {
            setModalChildren(<CreateGroupModal />)
          }
        }}
      />
      <TxCard
        title="Group ID by Member"
        onClick={() => {
          setShowModal(!showModal)
          if (walletConnectState.address) {
            setModalChildren(<CheckGroupIdByMember />)
          }
        }}
      />
      <TxCard
        title="Get Group Info"
        onClick={() => {
          setShowModal(!showModal)
          if (walletConnectState.address) {
            setModalChildren(<GetGroupInfo />)
          }
        }}
      />
      <TxCard
        title="Get Group Members"
        onClick={() => {
          setShowModal(!showModal)
          if (walletConnectState.address) {
            setModalChildren(<GetGroupMembers />)
          }
        }}
      />
      <TxCard
        title="Group Policy by Address"
        onClick={() => {
          setShowModal(!showModal)
          if (walletConnectState.address) {
            setModalChildren(<GetGroupPolicy />)
          }
        }}
      />
      <TxCard
        title="Group Policy by Group"
        onClick={() => {
          setShowModal(!showModal)
          if (walletConnectState.address) {
            setModalChildren(<GetGroupPolicyByGroup />)
          }
        }}
      />
      <TxCard />
    </>
  )
}
