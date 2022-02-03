import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'   

const RegisterScreen = ({ location, history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/' 

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])


    const submitHandler = (e) => {
        e.preventDefault() 

        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name, email, password))
        }
    }

    return (
        <FormContainer>
            <h1>Kayıt Ol</h1>
            { message && <Message variant='danger'>{message}</Message>}
            { error && <Message variant='danger'>{error}</Message>}
            { loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>İsim</Form.Label>
                    <Form.Control type='name' placeholder='Enter name' value={name}
                        onChange={(e) => setName(e.target.value)} ></Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={email}
                        onChange={(e) => setEmail(e.target.value)} ></Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Şifre</Form.Label>
                    <Form.Control type='password' placeholder='Enter password' value={password}
                        onChange={(e) => setPassword(e.target.value)} ></Form.Control>
                </Form.Group>

                <Form.Group controlId='confirmPassword'>
                    <Form.Label>Şifreyi Onayla</Form.Label>
                    <Form.Control type='password' placeholder='Confirn password' value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>Kayıt Ol</Button>
                <Row className='py-3'>
                    <Col> Hesabınız mı Var? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Giriş Yap</Link></Col>
                </Row>
            </Form>
        </FormContainer>
    )
}

export default RegisterScreen
