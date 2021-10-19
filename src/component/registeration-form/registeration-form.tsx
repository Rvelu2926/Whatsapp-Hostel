import React from 'react'
import './registeration-form.css';

export default function RegisterationForm() {
    function validate(val:number) {
       let v1 = document.getElementById("fname") as HTMLInputElement;
       let v2 = document.getElementById("lname")as HTMLInputElement;
       let v3 = document.getElementById("email")as HTMLInputElement;
       let v4 = document.getElementById("mob")as HTMLInputElement;
       let v5 = document.getElementById("room")as HTMLInputElement;
       let v6 = document.getElementById("ans")as HTMLInputElement;

       let flag1 = true;
       let flag2 = true;
       let flag3 = true;
       let flag4 = true;
       let flag5 = true;
       let flag6 = true;

        if (val >= 1 || val === 0) {
            if (v1.value === "") {
                v1.style.borderColor = "red";
                flag1 = false;
            } else {
                v1.style.borderColor = "green";
                flag1 = true;
            }
        }

        if (val >= 2 || val === 0) {
            if (v2.value === "") {
                v2.style.borderColor = "red";
                flag2 = false;
            } else {
                v2.style.borderColor = "green";
                flag2 = true;
            }
        }
        if (val >= 3 || val === 0) {
            if (v3.value === "") {
                v3.style.borderColor = "red";
                flag3 = false;
            } else {
                v3.style.borderColor = "green";
                flag3 = true;
            }
        }
        if (val >= 4 || val === 0) {
            if (v4.value === "") {
                v4.style.borderColor = "red";
                flag4 = false;
            } else {
                v4.style.borderColor = "green";
                flag4 = true;
            }
        }
        if (val >= 5 || val === 0) {
            if (v5.value === "") {
                v5.style.borderColor = "red";
                flag5 = false;
            } else {
                v5.style.borderColor = "green";
                flag5 = true;
            }
        }
        if (val >= 6 || val === 0) {
            if (v6.value === "") {
                v6.style.borderColor = "red";
                flag6 = false;
            } else {
                v6.style.borderColor = "green";
                flag6 = true;
            }
        }

       let flag = flag1 && flag2 && flag3 && flag4 && flag5 && flag6;

        return flag;
    }

    return (
        <div>
            <div className="container-fluid px-1 py-5 mx-auto">
        <div className="row d-flex justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                <h1><span className="badge badge-danger text-center"> Welcome to Whatsup Mens Hostel</span></h1>
                <div className="card">
                    <h3> <span className="badge badge-pill badge-success text-center mb-3">Rooms Booking Form</span></h3>
                    <form className="form-card" onSubmit={(event) =>{ event.preventDefault()}}>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">First name<span className="text-danger"> *</span></label> <input type="text" id="fname" name="fname" placeholder="Enter your first name" onBlur={()=> { validate(1) }} required /> </div>
                            <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Last name<span className="text-danger"> *</span></label> <input type="text" id="lname" name="lname" placeholder="Enter your last name" onBlur={()=> { validate(2) }} required /> </div>
                        </div>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">E-mail<span className="text-danger"> *</span></label> <input type="text" id="email" name="email" placeholder="you@gmail.com" onBlur={()=> { validate(3) }} required /> </div>
                            <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Phone number<span className="text-danger"> *</span></label> <input type="text" id="mob" name="mob" placeholder="+91" onBlur={()=> { validate(4) }}  required /> </div>
                        </div>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">No of Rooms required<span className="text-danger"> *</span></label> <input type="number" min="1" max="10" id="room" name="room" placeholder="" onBlur={()=> { validate(5) }} required /> </div>
                            <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Food requirment?<span className="text-danger"> *</span></label>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="customRadioInline1">Yes</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="customRadioInline2">No</label>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Referred by<span className="text-muted"> (Optional)</span></label> <input type="text" id="referred" name="referred" placeholder="" /> </div>
                        </div>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">Upload your address proof<span className="text-danger"> *</span></label>
                                <input type="file" className="form-control-file" id="exampleFormControlFile1" required />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="form-group col-sm-6"> <button type="submit" className="btn-block btn-primary">Submit a form</button> </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}
