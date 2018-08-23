
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, ViewPropTypes } from 'react-native'

export const RefreshState = {
    Idle: 0, //普通状态
    HeaderRefreshing: 1,//头部菊花转圈圈中
    FooterRefreshing: 2,//底部菊花转圈圈中
    NoMoreData: 3,//已加载全部数据
    Failure: 4,//加载失败
    EmptyData: 5,
    EndData: 6
}

const DEBUG = false
const log = (text: string) => { DEBUG && console.log(text) }

type Props = {
    refreshState: number,
    onHeaderRefresh: Function,
    onFooterRefresh?: Function,
    data: Array<any>,

    footerContainerStyle?: ViewPropTypes.style,
    footerTextStyle?: ViewPropTypes.style,

    listRef?: any,

    footerRefreshingText?: string,
    footerFailureText?: string,
    footerNoMoreDataText?: string,
    footerEmptyDataText?: string,

    renderItem: Function,
}

type State = {

}

class RefreshListView extends PureComponent<Props, State> {

    static defaultProps = {
        footerRefreshingText: '玩命加载中…',
        footerFailureText: '点击重新加载',
        footerNoMoreDataText: '已加载全部数据',
        footerEmptyDataText: '服务器没有数据',
    }

    componentWillReceiveProps(nextProps: Props) {
        log('[RefreshListView]  RefreshListView componentWillReceiveProps ' + nextProps.refreshState)
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        log('[RefreshListView]  RefreshListView componentDidUpdate ' + prevProps.refreshState)
    }

    onHeaderRefresh = () => {
        log('[RefreshListView]  onHeaderRefresh')

        if (this.shouldStartHeaderRefreshing()) {
            log('[RefreshListView]  onHeaderRefresh')
            this.props.onHeaderRefresh(RefreshState.HeaderRefreshing)
        }
    }

    onEndReached = (info: { distanceFromEnd: number }) => {
        log('[RefreshListView]  onEndReached   ' + info.distanceFromEnd)

        if (this.shouldStartFooterRefreshing()) {
            log('[RefreshListView]  onFooterRefresh')
            this.props.onFooterRefresh && this.props.onFooterRefresh(RefreshState.FooterRefreshing)
        }
    }


    onScroll = ({ nativeEvent }) => {
        let previousOffsetY = 0;
        if (this.nativeEvent) {
            previousOffsetY = this.nativeEvent.contentOffset.y;
        }
        const offsetY = nativeEvent.contentOffset.y;

        /**
           * 判断为上拉并且滚动到底部
           */

        if ((offsetY - previousOffsetY) >= 0 && (offsetY-(nativeEvent.contentSize.height + nativeEvent.contentInset.bottom - nativeEvent.layoutMeasurement
            .height)).toFixed(2)>=-1) {

            if (this.shouldStartFooterRefreshing()) {
                this.props.onFooterRefresh && this.props.onFooterRefresh(RefreshState.FooterRefreshing);
            }
        }

        this.nativeEvent = nativeEvent;
    }

    shouldStartHeaderRefreshing = () => {
        log('[RefreshListView]  shouldStartHeaderRefreshing')

        if (this.props.refreshState === RefreshState.HeaderRefreshing ||
            this.props.refreshState === RefreshState.FooterRefreshing) {
            return false
        }

        return true
    }

    shouldStartFooterRefreshing = () => {
        log('[RefreshListView]  shouldStartFooterRefreshing')

        let { refreshState, data } = this.props;
        if (data.length === 0) {
            return false
        }

        return (refreshState === RefreshState.Idle)
    }

    render() {
        log('[RefreshListView]  render')
        this.nativeEvent = null;
        this.isResponder = false;
        let { renderItem, ...rest } = this.props

        return (
            <FlatList
                ref={this.props.listRef}
                onScroll={this.onScroll}
                onRefresh={this.onHeaderRefresh}
                refreshing={this.props.refreshState === RefreshState.HeaderRefreshing}
                ListFooterComponent={this.renderFooter}
                renderItem={renderItem}
                {...rest}
            />
        )
    }

    renderFooter = () => {
        let footer = null

        let footerContainerStyle = [styles.footerContainer, this.props.footerContainerStyle]
        let footerTextStyle = [styles.footerText, this.props.footerTextStyle]
        let { footerRefreshingText, footerFailureText, footerNoMoreDataText, footerEmptyDataText } = this.props

        switch (this.props.refreshState) {
            case RefreshState.Idle:
                footer = (<View style={footerContainerStyle} />)
                break
            case RefreshState.Failure: {
                footer = (
                    <TouchableOpacity
                        style={footerContainerStyle}
                        onPress={() => {
                            this.props.onFooterRefresh && this.props.onFooterRefresh(RefreshState.FooterRefreshing)
                        }}
                    >
                        <Text style={footerTextStyle}>{footerFailureText}</Text>
                    </TouchableOpacity>
                )
                break
            }
            case RefreshState.EmptyData: {
                footer = (
                    <TouchableOpacity
                        style={footerContainerStyle}
                        onPress={() => {
                            this.props.onFooterRefresh && this.props.onFooterRefresh(RefreshState.FooterRefreshing)
                        }}
                    >
                        <Text style={footerTextStyle}>{footerEmptyDataText}</Text>
                    </TouchableOpacity>
                )
                break
            }
            case RefreshState.FooterRefreshing: {
                footer = (
                    <View style={footerContainerStyle} >
                        <ActivityIndicator size="small" color="#888888" />
                        <Text style={[footerTextStyle, { marginLeft: 7 }]}>{footerRefreshingText}</Text>
                    </View>
                )
                break
            }
            case RefreshState.NoMoreData: {
                footer = (
                    <View style={footerContainerStyle} >
                        <Text style={footerTextStyle}>{footerNoMoreDataText}</Text>
                    </View>
                )
                break
            }

            case RefreshState.EndData: {
                footer = null
            }
        }

        return footer
    }
}

const styles = StyleSheet.create({
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        height: 44,
    },
    footerText: {
        fontSize: 14,
        color: '#555555'
    }
})

export default RefreshListView