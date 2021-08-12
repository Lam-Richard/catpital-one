const SERVER = 'http://127.0.0.1:3000';

export async function getAccountData() {
    let response = await fetch(`${SERVER}/account`);
    let result = await response.json();
    return result;
}

export async function getActiveAssets() {
    let response = await fetch(`${SERVER}/activeAssets`);
    let result = await response.json();
    return result;
}

export async function getAsset(symbol) {
    let response = await fetch(`${SERVER}/asset/${symbol}`);
    let result = await response.json();
    return result;
}

export async function getPosition(symbol) {
    let response = await fetch(`${SERVER}/position/${symbol}`);
    let result = await response.json();
    return result;
}

export async function getPositions(symbol) {
    let response = await fetch(`${SERVER}/positions`);
    let result = await response.json();
    return result;
}

export async function getOrders(symbol) {
    let response = await fetch(`${SERVER}/orders`);
    let result = await response.json();
    return result;
}

export async function buySell(ticker, quantity, buyorsell) {
    const body = {
        'symbol': ticker,
        'qty': quantity,
        'side': buyorsell
    };

    let response = await fetch(`${SERVER}/buySell`, {
        method: 'POST',
        
        body: body
    })
    let result = await response.json();
    return result;

}