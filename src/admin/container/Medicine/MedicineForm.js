import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup'
import Button from '@mui/material/Button';

function MedicineForm({ onhandlesubmit, onupdate }) {
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (onupdate) {
            formik.setValues(onupdate)
            handleClickOpen()
        }
    }, [onupdate])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    var d = new Date()
    let nd = new Date(d.setDate(d.getDate() - 1))

    let medicineschema = yup.object({
        name: yup.string().required(),
        price: yup.number().required(),
        expiry: yup.date().min(nd, "Enter Valid Date").required("Please enter Date"),
        desc: yup.string().required()

    });

    const formik = useFormik({
        validationSchema: medicineschema,

        initialValues: {
            name: '',
            price: '',
            expiry: '',
            desc: ''
        },
        onSubmit: (values, action) => {
            // handlesubmitdata(values)
            action.resetForm()
            handleClose()
            onhandlesubmit(values)
        },

    });

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;


    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form medicine
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>medicine</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            margin="dense"
                            id="name"
                            label="name"
                            name='name'
                            type="text"
                            fullWidth
                            variant="standard"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <span style={{ color: 'red' }}>{errors.name && touched.name ? errors.name : null}  </span>
                        <TextField
                            margin="dense"
                            id="name"
                            label="Price"
                            name='price'
                            type="text"
                            fullWidth
                            variant="standard"
                            value={values.price}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <span style={{ color: 'red' }}>{errors.price && touched.price ? errors.price : null} </span>

                        <TextField
                            margin="dense"
                            id="expiry"
                            label="Medicine Expiry Date"
                            type="date"
                            name='expiry'
                            fullWidth
                            variant="filled"
                            value={values.expiry}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <span className='error'>{errors.expiry && touched.expiry ? errors.expiry : ''}</span>

                        <TextField

                            margin="dense"
                            id="name"
                            label="Medicine Description"
                            name='desc'
                            multiline
                            rows={4}
                            type="address"
                            fullWidth
                            variant="standard"
                            value={values.desc}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <span style={{ color: 'red' }}>{errors.desc && touched.desc ? errors.desc : null} </span>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit' >submit</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default MedicineForm;