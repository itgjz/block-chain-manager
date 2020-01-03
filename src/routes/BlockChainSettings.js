import React from 'react';
import { Button, Modal, Spin } from 'antd'
import { connect } from 'dva';
import _ from 'lodash'
import RegisterUser from '../components/BlockChainSettings/RegisterUser'
import CreateChannel from '../components/BlockChainSettings/CreateChannel'

const BlockChainSettings = ({ state, dispatch }) => {
    const { app, loading } = state

    let spinning = false
    if (!_.isEmpty(loading.effects)) {
        spinning = true
    }

    console.log(state)

    let effectsIsEmpty = !_.isEmpty(loading.effects)
    console.log(effectsIsEmpty && loading.effects['app/submitCreateChannel'])
    return (
        <>
            <Button onClick={() => dispatch({ type: 'app/modalToggle', payload: { data: { visible: true, title: "注册用户" } } })}>注册用户</Button>
            <Button onClick={() => dispatch({ type: 'app/modalToggle', payload: { data: { visible: true, title: "创建通道" } } })}>创建通道</Button>
            <Button>加入通道</Button>
            <Button>更新锚节点</Button>
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
            </Modal>
        </>
    )
}

export default connect((state) => ({ state }))(BlockChainSettings);
