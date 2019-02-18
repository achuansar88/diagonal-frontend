import * as React from 'react';

import { connect } from 'react-redux';

import { addRomanticComedies, searchRomanticComedies } from '../shared/actions';
import Service from './service/service';

import InfiniteScroll from 'react-infinite-scroller'

import { List, Card, Input, Row, Col, Icon } from 'antd';

export interface Props {
    name: string;
    romanticComedies?: Array<any>;
    addRomanticComedies?: () => void;
    searchRomanticComedies?: () => void;
    onUpRomaticComedies: (items: any) => void;
    onSearchRomaticComedies: (items: any) => void;
    history: History;
}

interface History {
    goBack: () => void;
}

const Search = Input.Search;

const mapStateToProps = (state: any) => ({
    romanticComedies: state.romanticComedies
});

const mapActionsToProps = {

    onUpRomaticComedies: addRomanticComedies,
    onSearchRomaticComedies: searchRomanticComedies
}
class DiaList extends React.Component<Props, object> {

    state = {
        page: "2",
        hasMore: true
    }

    constructor(props: any) {
        super(props);
        console.log('Props: ', this.props);
    }

    componentWillMount() {
        new Service().getItems('1').then((result) => {
            console.log(result.data);
            this.onUpRomaticComedies(result.data.result.docs);
            this.setState({ hasMore: result.data.result.hasNextPage, page: parseInt(result.data.result.page, 10) + 1 });

        }).catch((err) => {
            console.log(err);
        });
    }

    onChnageInput = (e: any) => {
        this.setState({ hasMore: false });
        new Service().getSearch(e.target.value).then((result) => {
            console.log(result.data);
            this.props.onSearchRomaticComedies(result.data.result);

        }).catch((err) => {
            console.log(err);
        });

    }

    loadMore = () => {
        new Service().getItems('' + (this.state.page)).then((result) => {
            console.log(result.data.page);
            this.onUpRomaticComedies(result.data.result.docs);
            this.setState({ hasMore: result.data.result.hasNextPage, page: parseInt(result.data.result.page, 10) + 1 });

        }).catch((err) => {
            console.log(err);
        });
    }

    public onUpRomaticComedies = (items: any) => {

        console.log('Romantic comedy');
        this.props.onUpRomaticComedies(items);

    }

    public render() {
        // const { name, romanticComedies = ['Anzar'], onIncrement} = this.props;
        const loader = <div className="loader" />
        return (
            <div style={{ background: "#000000" }}>

                <Row>
                    <Col span={1} onClick={() => { this.props.history.goBack() }}>

                        <Icon type="arrow-left" />

                    </Col>
                    <Col span={23}>
                        <div style={{ width: "100%" }}>
                            <Search

                                placeholder="input search text"
                                onChange={this.onChnageInput}

                                style={{ width: "100%", backgroundColor: "#000000", color: "#ffffff", padding: 10 }}
                            />
                        </div>
                    </Col>
                </Row>

                {/* <div style={{width:"100%"}}>
                    <Search 
                        
                        placeholder="input search text"
                        onChange={this.onChnageInput}
                        
                        style={{ width: "100%", backgroundColor: "#000000", color:"#ffffff", padding: 10}}
                    />
            </div> */}
                {/* <div className="greeting">
                    {this.props.romanticComedies && this.props.romanticComedies.map((item, index) => 
                        <div key={index}>{item.name}::{item["poster-image"]}</div>
                    )}
                   
                </div> */}
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadMore}
                    hasMore={this.state.hasMore}
                    loader={loader}
                >

                    {/* {this.props.romanticComedies && this.props.romanticComedies.map((item, index) =>  */}

                    <List
                        grid={{ gutter: 8, column: 3 }}
                        dataSource={this.props.romanticComedies}
                        renderItem={(item: any) => (
                            <List.Item style={{ background: "#000000", color: "#ffffff" }}>
                                <Card style={{ background: "#000000", color: "#ffffff" }} bordered={false}>
                                    <div className="track" style={{ background: "#000000" }}>
                                        <a href="#" target="_blank">
                                            <img src={"https://s3.amazonaws.com/diagonal-images/" + item["poster-image"]} width="auto" height="auto" />
                                            <p className="title">{item.name}</p>
                                        </a>
                                    </div>
                                </Card>
                            </List.Item>
                        )}
                    />
                    {/* )} */}

                </InfiniteScroll>
            </div>
        )
    }

}

export default connect(mapStateToProps, mapActionsToProps)(DiaList)