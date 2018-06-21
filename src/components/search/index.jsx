import * as React from 'react';
import {observer} from 'mobx-react';

import {config} from './../../configs';

import {
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

@observer
export class MainSearch extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.onChange = this.onChange.bind(this);
    }

    /**
     * Input change handler
     * @param e
     */
    onChange(e) {
        if (e.target.value.length > config.general.SEARCH_RESULT_DEFAULT_INDEX) {
            let searchText = e.target.value;
            this.props.store.books.getBooks(searchText);
        } else {
            this.props.store.books.clearSearchResult();
        }
    }

    render() {
        return (
            <Row>
                <Col xs="12">
                    <Form>
                        <FormGroup row>
                            <Label for="search" xs={12}>Search a book</Label>
                            <Col xs={12}>
                                <Input type="text" name="search" id="search" placeholder="find a book" onChange={this.onChange}/>
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        );
    }
}