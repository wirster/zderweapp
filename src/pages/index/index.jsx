import { Component } from 'react'
import { View, Text ,Map,AtDivider} from '@tarojs/components'
import { AtTabBar ,AtIcon,AtCard} from 'taro-ui'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import './index.less'

@connect(({users})=>({
  users
}))

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {date: null,location:{latitude:0,longitude:0}};
  }

  componentWillMount () {
    let _this=this;
    const mapCtx = Taro.createMapContext('myMap');
    //获取当前位置
    Taro.getLocation({
        type: 'wgs84',
        success: function (res) {
          //显示定位点
          mapCtx.moveToLocation();
          _this.setState({
            location: res
          });
        }
      })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  /**
   * 热力图渲染
   * @param e 点击事件
   */
  onTap=(e)=>{
    console.log('click',e)
  }

  render () {
    console.log(this.props);
    return (
      <View className='index'>
        <View className='flex-wrp' style='flex-direction:row;'>
          <AtCard
            title='定位信息'
          >
          <Map 
              onClick={this.onTap} 
              latitude={this.state.location.latitude}
              longitude={this.state.location.longitude} 
              show-location 
              enable3D={true} 
              skew={50}
              rotate={180}
              style={{width:'100%'}}
              />
          </AtCard>
        </View>
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
