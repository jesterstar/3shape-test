import * as React from 'react';
import {observer} from 'mobx-react';

import {
    Row,
    Col
} from 'reactstrap';

import './style.css';

@observer
export class SearchResult extends React.Component {
    render() {
        return (
            <Row>
                {!this.props.store.books.isFoundResult
                    ? <Col xs={12}>Try to find a book</Col>
                    :
                    this.props.store.books.searchResult.map((v, index) => {
                        return (
                            <Col key={v.contentVersion + index} xs={4} className="card">
                                <div className="card__wrap">
                                    <a href={window.location.href + index}>
                                        {v.title}
                                    </a>
                                    <div>
                                        <div className="card__authors">{v.authors}</div>
                                        <div className="card__published">{v.publishedDate}</div>
                                    </div>
                                </div>
                            </Col>
                        );
                    })
                }
            </Row>
        );
    }
}