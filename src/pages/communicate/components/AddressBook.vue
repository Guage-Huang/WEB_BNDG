<template>
    <div class="address-book">
        <search placeholder="搜素名字、拼音、手机号" :auto-fixed="false"></search>
        <list :cities="cities" :letter="letter" @change="handelCurrentIndexChange"></list>
        <alphabet :cities="cities" :current="currentIndex" @change="handleLetterChange"></alphabet>
    </div>
</template>

<script>
    import { Search } from 'vux'
    import List from './list'
    import Alphabet from './Alphabet'
    export default {
        name:"addressBook",
        components: {
           Search,
           List,
           Alphabet,
        },
        data(){
            return {
                letter: '',
                currentIndex:0,
                cities:{
                    "G":[
                        {id:2,img:'https://wx.qlogo.cn/mmopen/vi_32/DM586VmS7sGPo4MibItK2vX1rPlLbvuIM34WxlHpibDmtJHBv7WTzp2PVNNh4QiceyQN5hrbBzYFQVUFl7IyqqARA/132', name:'郭师傅',},
                        {id:21,img:'https://wx.qlogo.cn/mmopen/vi_32/DM586VmS7sGPo4MibItK2vX1rPlLbvuIM34WxlHpibDmtJHBv7WTzp2PVNNh4QiceyQN5hrbBzYFQVUFl7IyqqARA/132', name:'郭师傅',},
                        {id:22,img:'https://wx.qlogo.cn/mmopen/vi_32/DM586VmS7sGPo4MibItK2vX1rPlLbvuIM34WxlHpibDmtJHBv7WTzp2PVNNh4QiceyQN5hrbBzYFQVUFl7IyqqARA/132', name:'郭师傅',},
                        {id:23,img:'https://wx.qlogo.cn/mmopen/vi_32/DM586VmS7sGPo4MibItK2vX1rPlLbvuIM34WxlHpibDmtJHBv7WTzp2PVNNh4QiceyQN5hrbBzYFQVUFl7IyqqARA/132', name:'郭师傅',},
                    ],
                    "H":[
                        {id:51,img:'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLLthla0ciaf2BkF8iaWoHbYh0ickBBywBXkwhIZZZMmichmbGmmDRsoBiaYuSPRYNWRMkOQF9WiaMqeL9g/132', name:'黄师傅',},
                        {id:52,img:'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLLthla0ciaf2BkF8iaWoHbYh0ickBBywBXkwhIZZZMmichmbGmmDRsoBiaYuSPRYNWRMkOQF9WiaMqeL9g/132', name:'黄师傅',},
                        {id:53,img:'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLLthla0ciaf2BkF8iaWoHbYh0ickBBywBXkwhIZZZMmichmbGmmDRsoBiaYuSPRYNWRMkOQF9WiaMqeL9g/132', name:'黄师傅',},
                        {id:54,img:'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLLthla0ciaf2BkF8iaWoHbYh0ickBBywBXkwhIZZZMmichmbGmmDRsoBiaYuSPRYNWRMkOQF9WiaMqeL9g/132', name:'黄师傅',},
                    ],
                    "L":[
                        {id:61,img:'https://wx.qlogo.cn/mmopen/vi_32/oGPLicuQtyhkkhdI7Za41oC28ecdqaWcG8c6cibx9WJvchBbgia0saBNricnfnbob3CnyzAHVfjeev3oytNib74to1w/132', name:'李师傅',},
                        {id:62,img:'https://wx.qlogo.cn/mmopen/vi_32/oGPLicuQtyhkkhdI7Za41oC28ecdqaWcG8c6cibx9WJvchBbgia0saBNricnfnbob3CnyzAHVfjeev3oytNib74to1w/132', name:'李师傅',},
                        {id:63,img:'https://wx.qlogo.cn/mmopen/vi_32/oGPLicuQtyhkkhdI7Za41oC28ecdqaWcG8c6cibx9WJvchBbgia0saBNricnfnbob3CnyzAHVfjeev3oytNib74to1w/132', name:'李师傅',},
                        {id:64,img:'https://wx.qlogo.cn/mmopen/vi_32/oGPLicuQtyhkkhdI7Za41oC28ecdqaWcG8c6cibx9WJvchBbgia0saBNricnfnbob3CnyzAHVfjeev3oytNib74to1w/132', name:'李师傅',},
                    ],
                    "P":[
                        {id:11,img:'https://wx.qlogo.cn/mmopen/vi_32/I5gMnG2jiaibzia7EuOMI9U8kjNS5rjyDpNlHXS1bkOUyqtgMcLicI1sibjmic9N7n4FxOmlhtbm2U3mWm3R3JYKGibsA/132', name:'彭师傅',},
                        {id:12,img:'https://wx.qlogo.cn/mmopen/vi_32/I5gMnG2jiaibzia7EuOMI9U8kjNS5rjyDpNlHXS1bkOUyqtgMcLicI1sibjmic9N7n4FxOmlhtbm2U3mWm3R3JYKGibsA/132', name:'彭师傅',},
                        {id:13,img:'https://wx.qlogo.cn/mmopen/vi_32/I5gMnG2jiaibzia7EuOMI9U8kjNS5rjyDpNlHXS1bkOUyqtgMcLicI1sibjmic9N7n4FxOmlhtbm2U3mWm3R3JYKGibsA/132', name:'彭师傅',},
                        {id:14,img:'https://wx.qlogo.cn/mmopen/vi_32/I5gMnG2jiaibzia7EuOMI9U8kjNS5rjyDpNlHXS1bkOUyqtgMcLicI1sibjmic9N7n4FxOmlhtbm2U3mWm3R3JYKGibsA/132', name:'彭师傅',},
                    ],
                    "X":[
                        {id:33,img:'https://wx.qlogo.cn/mmopen/vi_32/ybONbOCb9TZ2oaiciakLjG7JvibmyHeGj8tPuibLlN56iasVTmWFWyNXU3CeSVAZZv5NoeibDYIZiab21CdAzJMA7Cw1A/132', name:'小师傅',},
                        {id:34,img:'https://wx.qlogo.cn/mmopen/vi_32/ybONbOCb9TZ2oaiciakLjG7JvibmyHeGj8tPuibLlN56iasVTmWFWyNXU3CeSVAZZv5NoeibDYIZiab21CdAzJMA7Cw1A/132', name:'小师傅',},
                        {id:35,img:'https://wx.qlogo.cn/mmopen/vi_32/ybONbOCb9TZ2oaiciakLjG7JvibmyHeGj8tPuibLlN56iasVTmWFWyNXU3CeSVAZZv5NoeibDYIZiab21CdAzJMA7Cw1A/132', name:'小师傅',},
                        {id:36,img:'https://wx.qlogo.cn/mmopen/vi_32/ybONbOCb9TZ2oaiciakLjG7JvibmyHeGj8tPuibLlN56iasVTmWFWyNXU3CeSVAZZv5NoeibDYIZiab21CdAzJMA7Cw1A/132', name:'小师傅',}
                    ],
                    "Z":[
                        {id:41,img:'https://wx.qlogo.cn/mmopen/vi_32/ybONbOCb9TZ2oaiciakLjG7JvibmyHeGj8tPuibLlN56iasVTmWFWyNXU3CeSVAZZv5NoeibDYIZiab21CdAzJMA7Cw1A/132', name:'z师傅',},
                        {id:42,img:'https://wx.qlogo.cn/mmopen/vi_32/ybONbOCb9TZ2oaiciakLjG7JvibmyHeGj8tPuibLlN56iasVTmWFWyNXU3CeSVAZZv5NoeibDYIZiab21CdAzJMA7Cw1A/132', name:'z师傅',},
                        {id:43,img:'https://wx.qlogo.cn/mmopen/vi_32/ybONbOCb9TZ2oaiciakLjG7JvibmyHeGj8tPuibLlN56iasVTmWFWyNXU3CeSVAZZv5NoeibDYIZiab21CdAzJMA7Cw1A/132', name:'z师傅',},
                    ],
                }
            }
        },
        methods:{
            handleLetterChange (letter) {
                this.letter = letter
            },
            handelCurrentIndexChange(index){
                this.currentIndex = index
            }
        }
    }
</script>

<style lang="stylus" scoped>
    

</style>