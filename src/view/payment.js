import axios from 'axios'


export const checkoutHandler = async (amount) => {


    //  store data in db

    const key = 'rzp_test_vD8E8OZq6c7uZf'

    const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
        amount
    })


    const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "FPF",
        description: "Order payment",
        image: "https://avatars.githubusercontent.com/u/25058652?v=4",
        order_id: order.id,
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9999999999"
        },
        notes: {
            "address": "VGEC, Chandkheda"
        },
        theme: {
            "color": "#121212"
        }
    };

    const razor = new window.Razorpay(options);
    razor.open();

    console.log("clicked")
    // console.log(window)

}