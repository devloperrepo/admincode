import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Table, Row, Button,Pagination,PaginationItem,PaginationLink, } from 'reactstrap';
import { connect } from "react-redux";
import Moment from 'react-moment';
import {Redirect,  withRouter} from 'react-router-dom';

import { fetchApi } from "../../service/api";

class Index extends Component {
    constructor(props){
        super(props);
        this.onAddNew = this.onAddNew.bind(this);
    }
    state = {
        categories: []
    }
    componentDidMount() {
        // console.log(this.props.authData);
        this.setInit();
    }

    onAddNew = () => {
        
        
        return  <Redirect to="/auth/login" />
     }

    async setInit() {
        const { token } = this.props.authData;
        const response = await fetchApi("category/list", "GET", null, 200, token);
        const { data, status } = response.responseBody;
        if (status == 1) {
            this.setState({ categories: data.data })
        } else {
            console.error("There seems to be some issue with API data");
        }
    }



    getListing() {
        return this.state.categories.map((item, key) => {
            return (
                <tr key={key}>
                    <th scope="row">1</th>
                    <td>{item.image}</td>
                    <td>{item.slug}</td>
                    <td>{item.name}</td>
                    <td><Moment format="MM/DD/YYYY">
                    {item.createdAt}
            </Moment></td>
                </tr>
            )
        });
    }

    render() {
        return (
            <div>
                <h5 className="mb-4">Categories List</h5>
                <Card>
                    <CardBody>
                        <div>
                            Listing all categories below.
                            <Button onClick={ this.onAddNew} className="btn pull-right" color="primary">
                                Add New
                            </Button>
                        </div>

                    </CardBody>

                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Slug</th>
                                <th>Title</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.getListing()}
                        </tbody>
                    </Table>
                    <CardBody className="">
                    <Pagination aria-label="Page navigation example">
                                <PaginationItem disabled>
                                    <PaginationLink previous href="#" />
                                </PaginationItem>
                                <PaginationItem active>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">2</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">3</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">4</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">5</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink next href="#" />
                                </PaginationItem>
                            </Pagination>
                            </CardBody>
                </Card>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        authData: state.authReducer.authData,
    }
}

function mapDispatchToProps(dispatch) {
    return { dispatch }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));

