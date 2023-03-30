import React, { useState } from 'react';
import Button from '@mui/joy/Button';
import FormLabel from '@mui/joy/FormLabel';
import { Input, Select, Option} from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import { PaymentFormValues, makeTransaction } from '../../callbacks/MakeTransaction';


type PaymentFormProps = {
  onSubmit: (values: PaymentFormValues) => void;
  formSource: number;
};



const selectStyle = {
  padding: "8px 12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  backgroundColor: "background.body",
  fontSize: "16px",
  cursor: "pointer",
  width:"100%",
}

const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const receiverIDPattern = /^[A-Z0-9]{8}$/;



const RegistrationForm: React.FC<PaymentFormProps> = ({ onSubmit, formSource }) => {

  const [values, setValues] = useState<PaymentFormValues>({
    receiverID: '',
    // password: '',
    amount: 0,
    transactionType: formSource,
  });

  const [errors, setErrors] = useState<Partial<PaymentFormValues>>({});

  const validate = (values: PaymentFormValues) => {
    const errors: Partial<PaymentFormValues> = {};

    if (!values.receiverID.trim()) {
      errors.receiverID = 'Receiver ID is required';
    } else if(!receiverIDPattern.test(values.receiverID.trim())) {
        errors.receiverID = 'Receiver ID is invalid';
    }

    return errors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    

    const errors = validate(values);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      
      makeTransaction(values);
      
      setValues({
        receiverID: '',
        amount: 0,
        transactionType: formSource,
      });

    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    setErrors((errors) => ({ ...errors, [name]: ''}));
  };

  const navigate = useNavigate();
  const signinpage = () => {
    navigate('/');
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="receiverID"><b>Receiver ID *</b></label>
        <br />
        <Input 
          type="text"
          id="receiverID"
          name="receiverID"
          placeholder='Please ask the receiver for their 8 digit alphanumeric ID'
          value={values.receiverID}
          onChange={handleChange}
          style={{width:"100%"}}
        />
        {errors.receiverID && <span style ={{color:"red"}}>{errors.receiverID}</span>}
      </div>
      <div>
        <label htmlFor="amount"><b>Amount *</b></label>
        <br />
        <Input
          type="number"
          id="amount"
          name="amount"
          placeholder='100'
          value={values.amount}
          onChange={handleChange}
          style={{width:"100%"}}
        />
        {errors.amount && <span style={{color: "red"}}> {errors.amount} </span>}
      </div>
      <br />
      <Button type="submit" fullWidth > 
        Submit
                
      </Button>

    </form>
  );
};

export default RegistrationForm;



