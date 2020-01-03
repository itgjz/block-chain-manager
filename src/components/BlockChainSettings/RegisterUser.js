import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button } from 'antd'

const RegisterUser = props => {
    const { dispatch, form } = props
    // const { app, loading } = state
    const { getFieldDecorator, getFieldsValue } = form;

    function submitRegisterUser(e) {
        e.preventDefault()
        const values = getFieldsValue()
        
        dispatch({
            type: 'app/submitRegisterUser',
            payload: {
                data: values
            }
        })
    }

    return (
        <>
            <Form onSubmit={submitRegisterUser}>
                <Form.Item label={"用户名称"}>
                    {getFieldDecorator('username', {})(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item label={"组织名称"}>
                    {getFieldDecorator('orgName', {})(
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

const RegisterUserForm = Form.create({})(RegisterUser)

export default connect((state) => ({ state }))(RegisterUserForm);
