import React from "react"
import { Link, Outlet, useParams } from "react-router-dom"

//https://www.codingdeft.com/posts/react-router-tutorial/#index-routes
// IndexRoutes_Step1 -> Index routes can be used when there is a list of routes generated programmatically and you need to display a fallback text or component when the parameter is not provided.  That is, if you have routes like /invoices/50001, /invoices/50002, so on and, if the user visits /invoices you may need to display them a message telling them to select an invoice.  Create a file named Invoices.js with the following code. This is similar to the order details route we created earlier.

export const Invoices = () => {
  const invoiceIds = ["50001", "50002", "50003"]
  return (
    <>
      <h2>Invoices</h2>
      <ul className="invoices">
        {invoiceIds.map(invoiceId => {
          return (
            <li key={invoiceId}>
              <Link to={`/invoices/${invoiceId}`}>
                View Invoice {invoiceId}
              </Link>
            </li>
          )
        })}
        <Outlet />
      </ul>
    </>
  )
}

export const Invoice = () => {
  const params = useParams()

  return (
    <>
      <h2>Details of invoice {params.invoiceId}</h2>
    </>
  )
}

export default Invoices
