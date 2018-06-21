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
                    this.props.store.books.searchResult.map(v => {
                        return (
                            <Col key={v.volumeInfo.contentVersion + v.id} xs={12} sm={6} md={4} className="card">
                                <div className="card__wrap">
                                    <a href={window.location.href + 'book/' + v.id}>
                                        {v.volumeInfo.title}
                                    </a>
                                    <div>
                                        <div className="card__authors">{v.volumeInfo.authors}</div>
                                        <div className="card__published">{v.volumeInfo.publishedDate}</div>
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