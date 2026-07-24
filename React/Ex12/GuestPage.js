import React from "react";

function GuestPage() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Welcome Guest</h2>

      <h3>Flight Details</h3>

      <table
        border="1"
        cellPadding="10"
        style={{ margin: "auto", borderCollapse: "collapse" }}
      >
        <tbody>
          <tr>
            <th>Flight No</th>
            <th>From</th>
            <th>To</th>
          </tr>

          <tr>
            <td>AI101</td>
            <td>Hyderabad</td>
            <td>Delhi</td>
          </tr>

          <tr>
            <td>6E202</td>
            <td>Chennai</td>
            <td>Mumbai</td>
          </tr>

          <tr>
            <td>UK303</td>
            <td>Bangalore</td>
            <td>Kolkata</td>
          </tr>
        </tbody>
      </table>

      <br />

      <h3>Please Login to Book Tickets.</h3>
    </div>
  );
}

export default GuestPage;