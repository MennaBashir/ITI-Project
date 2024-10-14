import { Form } from "@mongez/react-form";
import TextInput from "../../utils/validation/TextInput";
import RadioGroup from "../../utils/validation/RadioGroup";
import RadioInput from "../../utils/validation/RadioInput";
import { LogOut, X } from "lucide-react";
import { useState, ChangeEvent } from "react";
import "./admin.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/store";
import { addNewProduct } from "../../app/features/admin/adminSlice";
import { toast, Toaster } from "react-hot-toast";

export function AdminDashPage() {
  const [images, setImages] = useState<File[]>([]);
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setImages(Array.from(files)); // Convert FileList to an array
    }
  };
  // Handle image deletion
  const handleDeleteImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const submitFunc = ({ values }: any) => {
    let nameImages: string[] = images.map(
      (el) => `/assets/products/${el.name}`
    );
    let newValue: any = {
      ...values,
      mainImage: nameImages[0],
      hoverImage: nameImages[1],
    };
    dispatch(addNewProduct(newValue));
    toast.success("New Product added successfully!");
  };
  return (
    <section className="container admin">
      <Toaster />
      <Form onSubmit={submitFunc}>
        <div className="row">
          <div className="col-12 col-lg-7 bigBox">
            <div className="big1">
              <h2>General Information</h2>
              <div>
                <h3>Product Name</h3>
                <TextInput type="text" name="title" required />
              </div>
              <div className="shortDesc">
                <h3>Short Description</h3>
                <TextInput type="text" name="shortDescription" required />
              </div>
              <div className="longDesc">
                <h3>Long Description</h3>
                <TextInput type="text" name="longDescription" required />
              </div>
            </div>
            <div className="big2">
              <h2>Pricing</h2>
              <div className="price">
                <div>
                  <h3>Sale Price</h3>
                  <TextInput type="number" name="salePrice" required />
                </div>
                <div>
                  <h3>Before Discount</h3>
                  <TextInput type="number" name="oldPrice" required />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 smallBox">
            <div className="images">
              <h2>Product Media</h2>
              <h3>Photo Product</h3>
              <input
                type="file"
                className="form-control"
                multiple
                accept="image/*"
                name="images"
                onChange={handleImageChange}
              />
              <div className="image">
                {images.length > 0 && (
                  <ul>
                    {images.map((image, index) => (
                      <li key={index}>
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Uploaded ${index}`}
                          width="100"
                          height="100"
                        />
                        <span onClick={() => handleDeleteImage(index)}>
                          <X />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div>
              <h2>Category</h2>
              <div className="category">
                <div className="small1">
                  <h3>Category Type</h3>
                  <RadioGroup name="tyeCategory">
                    <div className="radio">
                      <RadioInput value="Camera">Camera</RadioInput>
                    </div>
                    <div className="radio">
                      <RadioInput value="Phone">Phones</RadioInput>
                    </div>
                    <div className="radio">
                      <RadioInput value="Clocks">Clocks</RadioInput>
                    </div>
                    <div className="radio">
                      <RadioInput value="Games">Games</RadioInput>
                    </div>
                  </RadioGroup>
                </div>
                <div className="small1">
                  <h3>Category Tags</h3>
                  <RadioGroup name="Tags">
                    <div className="radio">
                      <RadioInput value="Camera & Media">
                        Camera & Media
                      </RadioInput>
                    </div>
                    <div className="radio">
                      <RadioInput value="Phone & Laptop">
                        Phone & Laptop
                      </RadioInput>
                    </div>
                    <div className="radio">
                      <RadioInput value="Games & Music">
                        Games & Music
                      </RadioInput>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="shadow-sm">Add Product</button>
      </Form>
      <div className="exit shadow-sm" onClick={() => navigate("/login")}>
        <LogOut /> Sign Out
      </div>
    </section>
  );
}
