function PrintComp({ printCompRef, values }) {
  const products = [
    {
      name:
        'Hada Labo Gokujyun | Foaming Cleanser | Hyaluronic Acid Moisture Bubble',
      price: 2222,
      quantity: 1,
    },
    {
      name: 'Hada Labo Gokujyun Pore Cleaning Adlay Foaming Face Wash',
      price: 1800,
      quantity: 3,
    },
    {
      name: 'Kose Softymo Deep Cleansing Oil',
      price: 1200,
      quantity: 2,
    },
  ]
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
        <center>
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
            <h2 style={{ fontSize: '1.4em', fontWeight: '800' }}>
              Deliver To{' '}
            </h2>
            <p style={{}}>
              <span style={{ fontWeight: '500', fontSize: '0.7em' }}>
                {' '}
                Name :{' '}
              </span>
              <span style={{ fontWeight: '800', fontSize: '0.8em' }}>
                {values.name}{' '}
              </span>
              <br />
              <span style={{ fontWeight: '500', fontSize: '0.7em' }}>
                {' '}
                Address :{' '}
              </span>
              <span style={{ fontWeight: '800', fontSize: '0.8em' }}>
                {values.address}
              </span>
              <br />
              <span style={{ fontWeight: '500', fontSize: '0.7em' }}>
                {' '}
                Email :{' '}
              </span>
              <span style={{ fontWeight: '800', fontSize: '0.8em' }}>
                {values.email}
              </span>
              <br />
              <span style={{ fontWeight: '500', fontSize: '0.7em' }}>
                Mobile :{' '}
              </span>
              <span style={{ fontWeight: '800', fontSize: '0.8em' }}>
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
            <td style={{ width: '80%' }}>
              <h2>Item</h2>
            </td>
            <td style={{ textAlign: 'right', width: '5%' }}>
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

          <tr>
            <td style={{ textAlign: 'right', paddingRight: '2mm' }} colSpan={2}>
              <h2>Total</h2>
            </td>
            <td>
              <h2>{products.reduce((s, p) => p.quantity * p.price + s, 0)}</h2>
            </td>
          </tr>
        </table>

        <div style={{ textAlign: 'center' }}>Thank you</div>
        <br />
        <br />
      </div>
    </div>
  )
}

export default PrintComp
