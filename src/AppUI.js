import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
 const TodoUI =(props)=>{
    return (
        <div className="App">
            <div style={{ marginLeft: '500px' }}>
                <span style={{ marginRight: '50px', fontWeight: 'bold', fontSize: '30px' }}>ToDoList</span>
                <Input placeholder={props.inputValue} style={{ width: '250px', height: '50px' }} onChange={props.changeValue} />
                <Button type='primary' style={{ width: '100px', height: '50px', marginLeft: '20px' }} onClick={props.clickBtn}>添加</Button>
            </div>
            <div style={{ marginTop: '50px', marginLeft: '550px', width: '500px' }}>
                <List
                    bordered
                    dataSource={props.list} 
                    renderItem={(item,index) => (
                        <List.Item onClick={()=>{props.deleteItem(index)}}>{item}</List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default TodoUI;