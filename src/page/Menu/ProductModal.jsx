import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";

import FormItem from "antd/es/form/FormItem";
import { createProduct, getProduct, updateProduct } from "../../Services/productApis";

const ProductModal = ({getData,isShow, onCancel, selectedProduct, editing}) => {
  
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  React.useEffect(() => {
    form.setFieldsValue(selectedProduct);
  }, [selectedProduct]);
  const handleOk = async() => {
    try {
      const values = await form.validateFields();
      console.log(values)
     
      const response = editing?await updateProduct(selectedProduct.id, values): await createProduct(values);
      await handleCancel()
      await getData();
      console.log(response.data);
      
    
    } catch (error) {
      console.error('Error during adding product:', error);
    }
  };
  const handleCancel = async() => {
     form.resetFields();
    // setIsModalOpen(false);
     onCancel();
    
  };

  return (
    <>
      {/* <Button onClick={showModal}>Open Modal</Button> */}
      <Modal
        title={editing? "Update Modal":"insert Modal"}
        open={isShow}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical" name="form_in_modal">
          <FormItem name="productname" label="productname">
            <Input />
          </FormItem>
          <FormItem name="status" label="status">
            <Input  />
          </FormItem>
          <FormItem name="description" label="description">
            <Input />
          </FormItem>
          <FormItem name="start_price" label="start_price">
            <Input type="number"></Input>
          </FormItem>
          <FormItem name="start_time" label="start_time">
            <Input type="date"></Input>
          </FormItem>
          <FormItem name="end_time" label="end_time">
           <Input type="date"></Input>
          </FormItem>
          <FormItem name="creator_id" label="creator_id">
            <Input type="number"></Input>
          </FormItem>
        </Form>
      </Modal>
    </>
  );
};
export default ProductModal;
