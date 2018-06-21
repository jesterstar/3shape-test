import * as React from 'react';
import {observer, inject} from 'mobx-react';
import {config} from './../../configs';

import {
    Container,
    Row,
    Col
} from 'reactstrap';

import {MainSearch} from './../../components/search';
import {SearchResult} from './../../components/searchResult';
import loaderSvg from './../../assets/svg/loader.svg';

@inject(['store'])
@observer
export class Main extends React.Component {
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
        this.hideLoader();
    }

    render() {
        return (
            <div className="wrapper">
                <div className={`loader ${this.state.isLoading ? 'loading' : 'loaded'}`}>
                    {this.state.isLoading ? <img className="loader__svg" src={loaderSvg} alt="loader"/> : ''}
                    <Container>
                        <Row>
                            <Col xs="12">
                                <h1>Book store</h1>
                            </Col>
                        </Row>
                        <MainSearch
                            store={this.props.store}/>
                        <SearchResult
                            store={this.props.store}/>
                    </Container>
                </div>
            </div>
        );
    }
}