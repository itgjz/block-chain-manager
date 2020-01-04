import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button } from 'antd'

const JoinChannel = props => {
    const { dispatch, form } = props
    // const { app, loading } = state
    const { getFieldDecorator, getFieldsValue } = form;

    function submitJoinChannel(e) {
        e.preventDefault()
        const values = getFieldsValue()
        dispatch({
            type: 'app/submitJoinChannel',
            payload: {
                data: values
            }
        })
    }

    return (
        <>
            <Form onSubmit={submitJoinChannel}>
                <Form.Item label={"通道名称"}>
                    {getFieldDecorator('channelName', {})(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item label={"加入节点"}>
                    {getFieldDecorator('peers', {})(
                        <Input />
                    )}
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">提交</Button>
                </Form.Item>
            </Form>
        </>
    )
}

const JoinChannelForm = Form.create({})(JoinChannel)

export default connect((state) => ({ state }))(JoinChannelForm);
