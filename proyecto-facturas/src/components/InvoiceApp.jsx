import {Fragment} from "react";
import {invoice} from "../data/invoice.js";
import {getInvoice} from "../services/getInvoice.js";

export const InvoiceApp = () => {
    const {id, name, client, company, items} = getInvoice();
    const {name: nameClient, lastname, address} = client;
    const {country, city, street, number} = client.address;

    return (
        <Fragment>

        <div className="container">
            <div className="card">

            <div class="card-header">Factura, No. {id}</div>
            <div className="card-body">
            <div className="row">
                <div className="col">
                    <h4>Comprador: {nameClient} {lastname} </h4>
                    <p>Compra Realizada en: {address.country} / {address.city}</p>
                </div>
                <div className="col">
                    <h4>Empresa Emisora: {getInvoice().company.company}</h4>
                    <p>Numero Fiscal: {invoice.company.fiscalName}</p>
                </div>
            </div>
            <ul className="list-group">
                <li className="list-group-item">Name: {name }</li>

                <h5><strong>Productos:</strong></h5>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio </th>
                            <th>Cantidad </th>
                        </tr>
                    </thead>
                    <tbody>
                    {items.map(item => {
                        return (<tr>
                                <td>{ item.name }</td>
                                <td>{ item.price }</td>
                                <td>{ item.quantity }</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </ul>
            </div>
            </div>
        </div>
        </Fragment>
    )
}