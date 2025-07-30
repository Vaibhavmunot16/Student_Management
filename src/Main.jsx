import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Studentdata() {
    const [formData, setFormData] = useState({
        name: "",
        fname: "",
        email: "",
        contact: "",
        class: "",
        marks: ""
    });
    const [students, setStudents] = useState([]);
    const [id, setId] = useState(1);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAdd = () => {
        if (
            formData.name &&
            formData.fname &&
            formData.email &&
            formData.contact &&
            formData.class &&
            formData.marks
        ) {
            const newStudent = {
                id: id,
                ...formData
            };
            setStudents([...students, newStudent]);
            setId(id + 1);
            setFormData({ name: "", fname: "", email: "", contact: "", class: "", marks: "" });
        }
    };

    const handleClearAll = () => {
        setStudents([]);
        setId(1);
    };

    const del = (id) => {
        const updateData = students.filter((student) => student.id !== id);
        setStudents(updateData);
        alert("Deleted successfully");
    };

    return (
        <div className="container py-5 bg-light">
            <div className="text-center mb-5">
                <h2 className="fw-bold text-primary">🎓 Student Management System by Vaibhav</h2>
                <p className="text-muted">Add, view, and delete student records</p>
            </div>

            {/* Form Card */}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="row g-3">
                        <div className="col-md-4">
                            <label className="form-label">Student Name</label>
                            <input type="text" name="name" className="form-control" placeholder="Enter name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Father's Name</label>
                            <input type="text" name="fname" className="form-control" placeholder="Enter father's name" value={formData.fname} onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" className="form-control" placeholder="Enter email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Contact</label>
                            <input type="text" name="contact" className="form-control" placeholder="Enter contact" value={formData.contact} onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Class</label>
                            <input type="text" name="class" className="form-control" placeholder="Enter class" value={formData.class} onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Marks</label>
                            <input type="text" name="marks" className="form-control" placeholder="Enter marks" value={formData.marks} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button onClick={handleAdd} className="btn btn-success px-5">Add Student</button>
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className="card shadow">
                <div className="card-body">
                    <h5 className="card-title mb-3">📋 Student List</h5>
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead className="table-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Father's Name</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>Class</th>
                                    <th>Marks</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.length === 0 ? (
                                    <tr>
                                        <td colSpan="8" className="text-center text-muted">No student data added.</td>
                                    </tr>
                                ) : (
                                    students.map((student, index) => (
                                        <tr key={student.id}>
                                            <td>{index + 1}</td>
                                            <td>{student.name}</td>
                                            <td>{student.fname}</td>
                                            <td>{student.email}</td>
                                            <td>{student.contact}</td>
                                            <td>{student.class}</td>
                                            <td>{student.marks}</td>
                                            <td>
                                                <button className="btn btn-danger btn-sm" onClick={() => del(student.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                    {students.length > 0 && (
                        <div className="text-center mt-3">
                            <button onClick={handleClearAll} className="btn btn-outline-danger">Clear All</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
