import React from 'react';
import { Button, Modal, Spin } from 'antd'
import { connect } from 'dva';
import _ from 'lodash'
import RegisterUser from '../components/BlockChainSettings/RegisterUser'
import CreateChannel from '../components/BlockChainSettings/CreateChannel'
import JoinChannel from '../components/BlockChainSettings/JoinChannel'
import UpdateAncharPeer from '../components/BlockChainSettings/UpdateAncharPeer'

const BlockChainSettings = ({ state, dispatch }) => {
    const { app, loading } = state

    let spinning = false
    if (!_.isEmpty(loading.effects)) {
        spinning = true
    }

    console.log(state)

    let effectsIsEmpty = !_.isEmpty(loading.effects)
    return (
        <>
            <Button onClick={() => dispatch({ type: 'app/modalToggle', payload: { data: { visible: true, title: "注册用户" } } })}>注册用户</Button>
            <Button onClick={() => dispatch({ type: 'app/modalToggle', payload: { data: { visible: true, title: "创建通道" } } })}>创建通道</Button>
            <Button onClick={() => dispatch({ type: 'app/modalToggle', payload: { data: { visible: true, title: "加入通道" } } })}>加入通道</Button>
            <Button onClick={() => dispatch({ type: 'app/modalToggle', payload: { data: { visible: true, title: "更新锚节点" } } })}>更新锚节点</Button>
            <Button>安装链码</Button>
            <Button>实例化链码</Button>
            <Button>调用链码</Button>
            <Button>查询链码</Button>
            <Button>根据区块高度查询区块信息</Button>
            <Button>根据交易ID查询交易信息</Button>
            <Button>根据区块哈希查询区块信息</Button>
            <Button>查询通道信息</Button>
            <Button>查询实例化链码</Button>
            <Button>查询已安装或实例化链码</Button>
            <Button>查询通道信息</Button>
            <Modal
                visible={app.modalVisible}
                title={app.modalTitle}
                footer={null}
                onCancel={() => dispatch({ type: 'app/modalToggle', payload: { data: false } })}
            >

                {app.modalTitle === '注册用户' && (
                    <Spin spinning={effectsIsEmpty && loading.effects['app/submitRegisterUser'] === true}>
                        <RegisterUser />
                    </Spin>
                )}


                {app.modalTitle === '创建通道' && (
                    <Spin spinning={effectsIsEmpty && loading.effects['app/submitCreateChannel'] === true}>
                        <CreateChannel />
                    </Spin>
                )}

                {app.modalTitle === '加入通道' && (
                    <Spin spinning={effectsIsEmpty && loading.effects['app/submitJoinChannel'] === true}>
                        <JoinChannel />
                    </Spin>
                )}

                {app.modalTitle === '更新锚节点' && (
                    <Spin spinning={effectsIsEmpty && loading.effects['app/submitUpdateAncharPeer'] === true}>
                        <UpdateAncharPeer />
                    </Spin>
                )}

                {app.modalTitle === '安装链码' && (
                    <Spin spinning={effectsIsEmpty && loading.effects['app/submitJoinChannel'] === true}>
                        <JoinChannel />
                    </Spin>
                )}

                {app.modalTitle === '实例化链码' && (
                    <Spin spinning={effectsIsEmpty && loading.effects['app/submitJoinChannel'] === true}>
                        <JoinChannel />
                    </Spin>
                )}

                {app.modalTitle === '调用链码' && (
                    <Spin spinning={effectsIsEmpty && loading.effects['app/submitJoinChannel'] === true}>
                        <JoinChannel />
                    </Spin>
                )}

                {app.modalTitle === '查询链码' && (
                    <Spin spinning={effectsIsEmpty && loading.effects['app/submitJoinChannel'] === true}>
                        <JoinChannel />
                    </Spin>
                )}

                {app.modalTitle === '根据区块高度查询区块信息' && (
                    <Spin spinning={effectsIsEmpty && loading.effects['app/submitJoinChannel'] === true}>
                        <JoinChannel />
                    </Spin>
                )}

                {app.modalTitle === '根据交易ID查询交易信息' && (
                    <Spin spinning={effectsIsEmpty && loading.effects['app/submitJoinChannel'] === true}>
                        <JoinChannel />
                    </Spin>
                )}

                {app.modalTitle === '根据区块哈希查询区块信息' && (
                    <Spin spinning={effectsIsEmpty && loading.effects['app/submitJoinChannel'] === true}>
                        <JoinChannel />
                    </Spin>
                )}

                {app.modalTitle === '查询通道信息' && (
                    <Spin spinning={effectsIsEmpty && loading.effects['app/submitJoinChannel'] === true}>
                        <JoinChannel />
                    </Spin>
                )}

                {app.modalTitle === '查询实例化的链码' && (
                    <Spin spinning={effectsIsEmpty && loading.effects['app/submitJoinChannel'] === true}>
                        <JoinChannel />
                    </Spin>
                )}

                {app.modalTitle === '查询已安装或实例化的链码' && (
                    <Spin spinning={effectsIsEmpty && loading.effects['app/submitJoinChannel'] === true}>
                        <JoinChannel />
                    </Spin>
                )}

                {app.modalTitle === '查询通道信息' && (
                    <Spin spinning={effectsIsEmpty && loading.effects['app/submitJoinChannel'] === true}>
                        <JoinChannel />
                    </Spin>
                )}
            </Modal>
        </>
    )
}

export default connect((state) => ({ state }))(BlockChainSettings);
