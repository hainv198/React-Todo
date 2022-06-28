import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const ProductsList = () => {
    const params = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        console.log('user use effect!!');
        let url =
            'https://62b297ff20cad3685c902f74.mockapi.io/products' + params.id;

        console.log(url);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                data.dob = new Date(data.dob);
                console.log('dob', data.dob);
                setProduct(data); //setStudents(data)
            });
    }, []);

    return (
        <>

                {product != null ? (
                    <div class="container bootstrap snippets bootdey">
                        <div class="panel-body inf-content">
                            <div class="row">
                                <div class="col-md-6">
                                    <strong>Information</strong>
                                    <br />
                                    <div class="table-responsive">
                                        <table class="table table-user-information">
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <strong>Identificacion</strong>
                                                </td>
                                                <td class="text-primary">{product.id}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>First Name</strong>
                                                </td>
                                                <td class="text-primary">{product.title}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Lastname</strong>
                                                </td>
                                                <td class="text-primary">{product.image}</td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <strong>Email</strong>
                                                </td>
                                                <td class="text-primary">{product.description}</td>
                                            </tr>


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    'loading'
                )}

        </>

    );
};

export default ProductsList;