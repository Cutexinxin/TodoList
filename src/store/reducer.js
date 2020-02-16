import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from './actionTypes'

const defaltState={
    inputValue:'请输入内容',
    list:[
        '早上吃了两个鸡蛋',
        '中午还是写代码',
        '看回家的诱惑',
        '和男朋友聊天',
        '找工作' 
    ]
}
export default(sate =defaltState,action) => {
    // console.log (sate,77777)
    //只能接收sate,不能改变sate
    if(action.type == CHANGE_INPUT){
        let newSate =JSON.parse(JSON.stringify(sate))
        newSate.inputValue = action.value
        return newSate
    }
    if(action.type === ADD_ITEM){
        // console.log(store,5555)
        let newSate =JSON.parse(JSON.stringify(sate))
         newSate.list.push(newSate.inputValue)
          newSate.inputValue = ''
        // console.log(newSate)
        return newSate
    }
    //删除
    if(action.type= DELETE_ITEM){
        let newSate =JSON.parse(JSON.stringify(sate))
        newSate.list.splice(action.index,1)
        return newSate
    }
    return sate
}