import instance from "./axiosClient";

const getProduct = () => {
  return instance.get("product");
};

const deleteProduct = (id: number) => {
  return instance.delete(`product/${id}`); //delete localhost:8080/api/v1/users/1
};

const createProduct = (payload: {
  productname: string;
  status: string;
  description: string;
  start_price: number;
  start_time: Date;
  end_time: Date;
  creator_id: number;
}) => {
  return instance.post(`product`, payload);
};
const updateProduct = (
  id: number,
  payload: {
    productname: string;
    status: string;
    description: string;
    start_price: number;
    start_time: Date;
    end_time: Date;
    creator_id: number;
  }
) => {
  return instance.put(`product/${id}`, payload);
};

export { getProduct, deleteProduct, createProduct, updateProduct };
