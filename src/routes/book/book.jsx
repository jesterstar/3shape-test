import * as React from 'react';
import {observer, inject} from 'mobx-react';
import {config} from './../../configs';

import {
    Container,
    Row,
    Col
} from 'reactstrap';

import loaderSvg from './../../assets/svg/loader.svg';

@inject(['store'])
@observer
export class Book extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isLoading: true
        };

        this.hideLoader = this.hideLoader.bind(this);
    }

    /**
     * Hide data loader
     */
    hideLoader() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            });
        }, config.general.LOADER_INTERVAL);
    }

    componentDidMount() {
        this.props.store.books.getBookInfo(window.location.pathname.replace('/book/', ''), this.hideLoader);
    }

    render() {
        return (
            <div className="wrapper">
                <div className={`loader ${this.state.isLoading ? 'loading' : 'loaded'}`}>
                    {this.state.isLoading
                        ? <img className="loader__svg" src={loaderSvg} alt="loader"/>
                        :
                        <Container>
                            <Row>
                                <Col xs="12">
                                    <h1>{this.props.store.books.book.volumeInfo.title}</h1>
                                    <h6>{this.props.store.books.book.volumeInfo.subtitle}</h6>
                                </Col>
                                <Col xs="12">
                                    <h4>
                                        <span className="font-weight-light text-right">Authors: {this.props.store.books.book.volumeInfo.authors}</span>
                                        <span className="font-italic float-right">Published date: {this.props.store.books.book.volumeInfo.publishedDate}</span>
                                    </h4>
                                </Col>
                                {this.props.store.books.book.volumeInfo.imageLinks
                                    ? <Row>
                                        <Col xs="3" className="text-center">
                                            <img src={this.props.store.books.book.volumeInfo.imageLinks.thumbnail} alt={this.props.store.books.book.volumeInfo.title}/>
                                        </Col>
                                        <Col xs="9">{this.props.store.books.book.volumeInfo.description}</Col>
                                    </Row>
                                    : <Col xs="12">{this.props.store.books.book.volumeInfo.description}</Col>}
                            </Row>
                        </Container>}
                </div>
            </div>
        );
    }
}