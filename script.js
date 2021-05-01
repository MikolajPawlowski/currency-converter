{
    const calculateResult = (pln, currency) => {
        const doge = 1.4324;
        const btc = 208355.19;
        const usd = 3.7852;

        switch (currency) {
            case "Doge":
                return pln / doge;

            case "BTC":
                return pln / btc;

            case "USD":
                return pln / usd;
        }
    };

    const updateResultText = (pln, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const plnElement = document.querySelector(".js-pln");
        const currencyElement = document.querySelector(".js-currency");

        const pln = +plnElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(pln, currency);

        updateResultText(pln, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}