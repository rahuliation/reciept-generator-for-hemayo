function PrintComp({ printCompRef, values }) {
  const subTotal = values.products.reduce(
    (s, p) => parseFloat(p.quantity) * parseFloat(p.price) + s,
    0,
  )
  return (
    <div ref={printCompRef}>
      <style>
        {`
        @page {
          size: 56mm 10inch;
          margin: 0;
        }
        @font-face {
          font-family: printFont;
          src: url(${window.location.origin}/printFont.ttf);
        }
        
        `}
      </style>

      <div
        style={{
          margin: '0',
          width: '58mm',
          paddingRight: '2mm',
          background: '#ffffff',
          color: '#000000',
          fontWeight: '500',
          fontFamily: 'printFont',
        }}
      >
        <hr />

        <center style={{ paddingTop: '20px' }}>
          <div
            style={{
              width: '100%',
              fontWeight: '900',
              display: 'block',
              marginLeft: 0,
            }}
          >
            <h2>ID: {values.deliveryId}</h2>
          </div>
          <div
            style={{
              background: `url(${window.location.origin}/logo-black.png) no-repeat`,
              height: '100px',
              width: '80%',
              backgroundSize: '100% 100%',
            }}
          />
          <div
            style={{
              width: '100%',
              fontWeight: '900',
              display: 'block',
              marginLeft: 0,
            }}
          >
            <h2>Hemayo Beauty Zone</h2>
          </div>
          <br />
        </center>

        <div>
          <div styl>
            <h2 style={{ fontSize: '1.4em', fontWeight: '800' }}>Deliver To</h2>
            <p style={{}}>
              <span style={{ fontWeight: '500', fontSize: '0.8em' }}>
                Name :{' '}
              </span>
              <span style={{ fontWeight: '800', fontSize: '1em' }}>
                {values.name}
              </span>
              <br />
              <span style={{ fontWeight: '500', fontSize: '0.8em' }}>
                Address :{' '}
              </span>
              <span style={{ fontWeight: '800', fontSize: '1em' }}>
                {values.address}
              </span>
              <br />
              <span style={{ fontWeight: '500', fontSize: '0.8em' }}>
                Email :{' '}
              </span>
              <span style={{ fontWeight: '800', fontSize: '1em' }}>
                {values.email}
              </span>
              <br />
              <span style={{ fontWeight: '500', fontSize: '0.8em' }}>
                Mobile :{' '}
              </span>
              <span style={{ fontWeight: '800', fontSize: '1em' }}>
                {values.mobile}
              </span>
              <br />
            </p>
          </div>
        </div>
        <br />

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tr
            style={{
              fontWeight: '800',
              fontSize: '0.7em',
              borderBottom: '1px solid #808080',
            }}
          >
            <td style={{ width: '75%' }}>
              <h2>Item</h2>
            </td>
            <td style={{ textAlign: 'center', width: '10%' }}>
              <h2>Qty</h2>
            </td>
            <td style={{ textAlign: 'right', width: '15%' }}>
              <h2>Subtotal</h2>
            </td>
          </tr>

          {values.products.map(({ name, quantity, price }) => (
            <tr
              style={{
                borderBottom: '1px solid #808080',
                fontWeight: '700',
                fontSize: '0.8em',
              }}
            >
              <td className="tableitem">
                <p className="itemtext">{name}</p>
              </td>
              <td style={{ textAlign: 'center' }}>
                <p className="itemtext">{quantity}</p>
              </td>
              <td style={{ textAlign: 'right' }}>
                <p className="itemtext">{price * quantity}</p>
              </td>
            </tr>
          ))}

          <tr style={{ textAlign: 'right', fontSize: '0.8em' }}>
            <td style={{ paddingRight: '2mm' }} colSpan={2}>
              <h2>Sub Total</h2>
            </td>
            <td>
              <h2>{subTotal}</h2>
            </td>
          </tr>

          <tr style={{ textAlign: 'right', fontSize: '0.8em' }}>
            <td style={{ paddingRight: '2mm' }} colSpan={2}>
              <h2>Discount</h2>
            </td>
            <td>
              <h2>{values.discount}</h2>
            </td>
          </tr>

          <tr style={{ textAlign: 'right', fontSize: '0.8em' }}>
            <td style={{ paddingRight: '2mm' }} colSpan={2}>
              <h2>Delivery Charge</h2>
            </td>
            <td>
              <h2>{values.deliveryCharge}</h2>
            </td>
          </tr>

          <tr style={{ textAlign: 'right', fontSize: '1em' }}>
            <td style={{ paddingRight: '2mm' }} colSpan={2}>
              <h2>Total</h2>
            </td>
            <td>
              <h2>
                {subTotal -
                  parseFloat(values.discount) +
                  parseFloat(values.deliveryCharge)}
              </h2>
            </td>
          </tr>
        </table>

        <div style={{ textAlign: 'center' }}>Thank you</div>
        <br />
        <hr />
      </div>
    </div>
  )
}

export default PrintComp
