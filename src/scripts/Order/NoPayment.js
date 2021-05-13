import React, {useEffect, useState} from "react";
import { useHistory } from 'react-router-dom'
import {Button, Modal} from "react-bootstrap";
import error from "../../img/error.png";

import '../../css/NoPayment.css'

function NoPayment(props) {

    let history = useHistory();
    let [alert, setAlert] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => {setAlert(false)}, 3000)

        return() => {
            clearTimeout(timer)
            setAlert(true)
        };
    }, [alert])

    return (
        <>
            {
                alert === true ?
                    <Modal show = { props.show } onHide = { props.onHide } >
                        <Modal.Header>
                            <div className = "headerDiv">
                                <h2> 결제 오류 </h2>
                            </div>
                        </Modal.Header>
                        <Modal.Body>
                            <div className = "noBody">
                                <h2 style = {{ textAlign : "center" }} > 음료를 먼저 선택하시고 <br/> 결제를 진행해 주세요 </h2>
                                <img className = "noPayment" src = { error }/>
                                <h2> ABC 카페 </h2>
                            </div>
                        </Modal.Body>

                    </Modal>
                : null
            }

        </>
    )
}

export default NoPayment;