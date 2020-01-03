import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button } from 'antd'

const CreateChannel = props => {
    const { dispatch, form } = props
    // const { app, loading } = state
    const { getFieldDecorator, getFieldsValue } = form;

    function submitCreateChannel(e) {
        e.preventDefault()
        const values = getFieldsValue()
        dispatch({
            type: 'app/submitCreateChannel',
            payload: {
                data: values
            }
        })
    }

    return (
        <>
            <Form onSubmit={submitCreateChannel}>
                <Form.Item label={"通道名称"}>
                    {getFieldDecorator('channelName', {})(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item label={"通道配置文件路径"}>
                    {getFieldDecorator('channelConfigPath', {})(
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

const CreateChannelForm = Form.create({})(CreateChannel)

export default connect((state) => ({ state }))(CreateChannelForm);
