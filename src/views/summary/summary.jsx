import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row,
    Col
} from 'reactstrap';
import { SalesSummary, Projects, Feeds } from 'components/dashboard-components';

import img1 from '../../assets/images/big/img1.jpg';
import img2 from '../../assets/images/big/img2.jpg';
import img3 from '../../assets/images/big/img3.jpg';

const Summary = () => {
    return (
        <div>
            <Row>
                <Col sm={6} lg={8}>                  
                </Col>
                <Col sm={6} lg={4}>                    
                </Col>
            </Row>
        </div>
    );
}

export default Summary;
