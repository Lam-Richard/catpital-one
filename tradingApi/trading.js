const trading = () => {
    const Alpaca = require('@alpacahq/alpaca-trade-api')
  
    const alpaca = new Alpaca({
      keyId: 'PKRTDHD80018SUDO4TST',
      secretKey: 'rgCzkzaXjpvUAbrmyGQCr19XpycPgUwY0h42v1gN',
      paper: true,
      usePolygon: false
    })
    
  };
  