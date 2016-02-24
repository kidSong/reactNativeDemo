
'use strict';

var React = require('react-native');
var Index = require('./pages/index');
var orderList = require('./pages/orderList');
var {
    TabBarIOS,
    NavigatorIOS,
    AppRegistry,
    StyleSheet,
    View,
} = React;

var NV = React.createClass({

     getInitialState: function() {
      return {
          selectedTab: 'order'
      };
  },

    render: function(){
        return(

    <TabBarIOS selectedTab = {this.state.selectedTab}>

       <TabBarIOS.Item accessibilityLabel={"order"}
            selected = {this.state.selectedTab === 'order'}
            title = "订单"
            name = "order"
            icon = {{uri:'icon.png',isStatic:true}}
             onPress={() => {
            this.setState({
              selectedTab: 'order'
            });
            }}
       >
       <NavigatorIOS
            style={styles.container}
            initialRoute={{
            title: '首页',
            component: Index,
       }}
        itemWrapperStyle={styles.navigator}
      />
      </TabBarIOS.Item>



        <TabBarIOS.Item accessibilityLabel={"goods"}
            selected = {this.state.selectedTab === 'goods'}
            title = "商品"
            name = "goods"
            icon={{uri:'icon.png',isStatic:true}}
            onPress={() => {
            this.setState({
              selectedTab: 'goods'
            });
            }}
       >
         <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: '商品',
                    component: orderList,
                }}
                itemWrapperStyle={styles.navigator}
            />
       </TabBarIOS.Item>


       <TabBarIOS.Item accessibilityLabel={"verify"}
            selected = {this.state.selectedTab === 'verify'}
            title = "验证"
            name = "verify"
            icon={{uri:'icon.png',isStatic:true}}
            onPress={() => {
            this.setState({
              selectedTab: 'verify'
            });
          }}
       >
                   <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: '验证',
                    component: Index,
                }}
                itemWrapperStyle={styles.navigator}
            />
       </TabBarIOS.Item>
   
    </TabBarIOS>

        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
     navigator: {
    backgroundColor: '#E7EAEC'
  }
});


AppRegistry.registerComponent('xiecheng', () => NV);