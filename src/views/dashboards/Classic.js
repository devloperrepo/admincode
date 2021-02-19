import React from 'react';
import { Card, CardBody, CardTitle, Row, Col } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
// import { SalesSummary, EmailCampaign, ActiveVisitors, Stats, Projects, RecentComment, Chat }
//     from '../../components/dashboard/';

import img1 from '../../assets/images/users/1.jpg';
import img4 from '../../assets/images/users/4.jpg';
import img5 from '../../assets/images/users/5.jpg';

const Classic = () => {
    return (
        <div>
            <Row>
                <Col xs={12}>
                    
                </Col>
            </Row>
            <Row>
                <Col md="8">
                    
                </Col>
                <Col md="4">
                    
                </Col>
            </Row>
            
            <Row>
                <Col lg={6}>
                    <Card>
                        <CardBody>
                            <CardTitle>Recent Comments</CardTitle>
                        </CardBody>
                        <div className="comment-widgets scrollable" style={{ height: '560px' }}>
                            <PerfectScrollbar>
                                
                            </PerfectScrollbar>
                        </div>
                    </Card>
                </Col>
                <Col lg={6}>
                    
                </Col>
            </Row>
        </div >
    );
}

export default Classic;
