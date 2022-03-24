import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import { connect } from 'react-redux'
import './index.less'

@connect(({users})=>({
  users
}))

class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    console.log(this.props);
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <AtTabBar 
          fixed
          tabList={[
            {title: '首页', iconType: 'home'},
            {title: '我的', iconType: 'user'}
          ]}
        />
      </View>
    )
  }
}
export default Index
