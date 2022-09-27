import { Form } from 'react-bootstrap'
import './main.scss'
const FormHome = () => {
    return (
        <>
            <div className="home-form container">
                <div className="title w-100">
                    <h3>BEST IN TOWN</h3>
                    <h2>CHALE YOU NAA, YOU GO TRUST!</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,</p>
                </div>
                <div className="form">
                    <div className="text">
                        <h2>BOOK A RIDE</h2>
                    </div>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Phone.ControlInput1">
                            <Form.Control type="text" placeholder="Phone" />
                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="to.ControlInput1">
                            <Form.Control className='from' type="text" placeholder="From" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="from.ControlInput1">
                            <Form.Control className='to' type="text" placeholder="To" />
                        </Form.Group>
                        <Form.Select className='mb-5' aria-label="Default select example">
                            <option>when</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <button>Submit</button>
                    </Form>

                </div>
            </div>
        </>
    )
}
export default FormHome