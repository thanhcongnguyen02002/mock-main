import React, { useState, useEffect } from 'react';
import { Button, Modal, Space, Table, Tag } from 'antd';
import { deleteProduct, getProduct } from '../../Services/productApis';
import ProductModal from './ProductModal';
const { Column, ColumnGroup } = Table;
// 

const Product = () => {
  const [data, setData] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isShow, setIsShow]= useState(false)
  const [isEdit, setIsEdit]=useState(false)
  const getData = async () => {
    const productList = await getProduct();
    setData(productList.data);
  };
  React.useEffect(() => {
    getData();
  }, []);
  const handleEdit = (record) => {
    setSelectedProduct(record);
    setIsShow(true)
    setIsEdit(true)
    console.log(record);
  };
  const handleCancel = () => {
    
    setIsEdit(false);
    setIsShow(false);
  };
  const handleDelete= async(record)=>{
    Modal.confirm({
      title:"Confirm delete",
      content:`Are you sure you want to delete ${record.productname}`,
      onOk:()=>confirmDelete(record),
      onCancel: () => {},
    })
    // setSelectedProduct(record);
    
  //  await deleteProduct(record.id)
  //  await getData()
  }
  const confirmDelete= async(record)=>{
  await deleteProduct(record.id)
   await getData()
  }
  const columns = [


    { title: "Product Name", dataIndex: "productname", key: "productname" },
    { title: "status", dataIndex: "status", key: "status" },
    { title: 'description', dataIndex: 'description', key: 'description' },
    { title: "start_price", dataIndex: "start_price", key: "start_price" },
    { title: "start_time", dataIndex: "start_time", key: "start_time" },
    { title: "end_time", dataIndex: "end_time", key: "end_time" },
    { title: "creator_id", dataIndex: "creator_id", key: "end_time" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={()=>{handleEdit(record)}}
  
          >
            edit
          </a>
          <a
           onClick={()=>{handleDelete(record)}}
          >
            Delete
          </a>
        </Space>
      ),
    },
  ];
  return (<>
  <Button onClick={()=>{setIsShow(true)}}>Thêm sp</Button>
   <ProductModal 
   getData={getData} 
   editing={isEdit}
   selectedProduct={selectedProduct} isShow={isShow} 
   onCancel={handleCancel}/>
    <Table style={{marginTop:20}} columns={columns} dataSource={data}></Table>
  </>)

}
export default Product;