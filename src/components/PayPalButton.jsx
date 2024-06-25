import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

function PayPalButton({amount, ...props}) {

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        currency_code: 'MXN',
                        value: amount,
                    },
                },
            ],
        });
    }

    const onApprove = (data, actions) => {
        return actions.order.capture();
    }

    const onCancel = (data) => {
        console.log(data);
    }

    const onError = (err) => {
        console.error(err);
    }

    const options = {
        'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID,
    };

    return (
        <PayPalScriptProvider options={options}>
            <PayPalButtons
                onApprove={onApprove}
                onCancel={onCancel}
                onError={onError}
                createOrder={createOrder}
            />
        </PayPalScriptProvider>
    );
}

export default PayPalButton;