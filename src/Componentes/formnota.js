// import React from "react";
// import {
//     Button,
//     Label,
//     // Container,
//     Modal,
//     ModalBody,
//     ModalFooter,
//     ModalHeader,
//     Form,
//     Row,
//     Col,
//     FormGroup,
//     Input,
// } from "reactstrap";

// class formNota extends React.Component {
//     constructor(props) {
//         super();
//         this.state = {
//             modal: false,
//         };
//         this.toggle = this.toggle.bind(this);
//         this.handleSubmit= this.handleSubmit.bind(this);
//     }
//     toggle() {
//         //para que aparezca y desaparezca el modal
//         this.setState((prevState) => ({
//             modal: !prevState.modal,
//         }));
//     }
//     handleSubmit = (e) => {
//         e.preventDefault(); //Esto es para evitar que la pagina se actualize al presionar el button
//         console.log(this.props.notaAgregar)

        
//     };

//     render() {
//         return (
//             // Este div de abajo antes era un Cointainer de Reactrasp
//             <div> 
//                 <li className="addnote" onClick={this.toggle}>
//                     <div className="icon">
//                         <i className="uil uil-plus"></i>
//                     </div>
//                     <p>Agregar nueva nota</p>
//                 </li>

//                 <Modal
//                     isOpen={this.state.modal}
//                     id="myModal"
//                     backdrop="static"
//                     toggle={this.toggle}
//                     size="lg"
//                 >
//                     <ModalHeader>Crear una nota nueva</ModalHeader>
//                     <ModalBody>
//                         <Form onSubmit={this.handleSubmit}>
//                             <Row>
//                                 <Col xs="6">
//                                     <FormGroup>
//                                         <Label for="Lugar">Lugar</Label>
//                                         <Input
//                                             type="text"
//                                             name="Lugar"
//                                             id="Lugar"
//                                             placeholder="Ingrese el Lugar al que fue"
//                                         />
//                                     </FormGroup>
//                                 </Col>
//                                 <Col xs="6">
//                                     <FormGroup>
//                                         <Label for="razon">Motivo</Label>
//                                         <Input
//                                             type="text"
//                                             name="motivo"
//                                             id="razon"
//                                             placeholder="Ingrese el motivo por el que fue al medico"
//                                         />
//                                     </FormGroup>
//                                 </Col>
//                             </Row>
//                             <Row>
//                                 <Col xs="6">
//                                     <FormGroup>
//                                         <Label for="Doctor">Doctor</Label>
//                                         <Input
//                                             type="text"
//                                             name="Doctor"
//                                             id="Doctor"
//                                             placeholder="Ingrese el doctor con el que se atendio"
//                                         />
//                                     </FormGroup>
//                                 </Col>
//                                 <Col xs="6">
//                                     <FormGroup>
//                                         <Label for="especialidad">
//                                             Especialidad
//                                         </Label>
//                                         <Input
//                                             type="text"
//                                             name="especialidad"
//                                             id="especialidad"
//                                             placeholder="Ingrese la especilidad "
//                                         />
//                                     </FormGroup>
//                                 </Col>
//                             </Row>
//                             <FormGroup>
//                                 <Label for="Fecha">Fecha</Label>
//                                 <Input type="date" name="date" id="Fecha" />
//                             </FormGroup>
//                             <Button color="primary" type='submit'>
//                             Crear nota
//                         </Button>
//                         <Button color="secondary" onClick={this.toggle}>
//                             Volver atras
//                         </Button>
//                         </Form>
//                     </ModalBody>
// {/* 
//                     <ModalFooter className="modalFooter">
//                     </ModalFooter> */}
//                 </Modal>
//             </div>
//         );
//     }
// }
// export default formNota;
