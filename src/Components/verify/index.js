import React, { useState } from 'react';
import axios from 'axios';
import "../home/index.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Verify = () => {

    const [responseMessage, setResponseMessage] = useState('');

    const handlePayment = async () => {
        const apiKey = 'e801cc0f-6aaf-4e35-a1c6-f8b3e1933c32'; // Replace with your actual API key
        const apiUrl = `https://100088.pythonanywhere.com/api/stripe/initialize/public/${apiKey}`;

        const requestBody = {
            "stripe_key": "sk_test_51LiKUnEJkGNthfbzNbTn7Up7EnVwyeqRWLcRX1UWyq7ABL7wn1VMmHsS4Aox3U9b2nh3HkHd32vsQRR7nItC8ybv00WChhFen4",
            "id": "b2edddc6-ac13-4d95-893c-84b9c97d7519"
        };

        try {
            const response = await axios.post(apiUrl, requestBody);
            const { approval_url, payment_id } = response.data;

            // Redirect the user to the approval URL to complete the payment
            window.location.href = approval_url;
        } catch (error) {
            console.error('Error:', error);
            toast('Error occurred during payment initialization '+ error?.message ,{
                position: "top-right",
              })
            // setResponseMessage('Error occurred during payment initialization');
        }
    };

    // https://100088.pythonanywhere.com/api/stripe/initialize/public/e801cc0f-6aaf-4e35-a1c6-f8b3e1933c32


    return (
        <>
            <style>{`@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);`}</style>
            {/* {responseMessage} */}
            <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
                {/* <ToastContainer  className="toast-position"  position="top-right" /> */}
                <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style={{ maxWidth: 600 }}>
                    <div className="w-full pt-1 pb-5">
                        <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                            <i className="mdi mdi-credit-card-outline text-3xl" />
                        </div>
                    </div>
                    <div className="mb-10">
                        <h1 className="text-center font-bold text-xl uppercase">verify Payment </h1>
                    </div>

                    <div className='mb-4'>
                        <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray">Payment Id</label>
                        <input type="text" id="disabled-input" defaultValue={'b2edddc6-ac13-4d95-893c-84b9c97d7519'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" disabled />
                    </div>

                    <div className="mb-3 flex -mx-2">
                        <div className="px-2">
                            <label htmlFor="type1" className="flex items-center cursor-pointer">
                                <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked={true} />
                                <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3" />
                            </label>
                        </div>
                        <div className="px-2">
                            <label htmlFor="type2" className="flex items-center cursor-pointer">
                                <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" />
                                <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" className="h-8 ml-3" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <button onClick={handlePayment} className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"><i className="mdi mdi-lock-outline mr-1" /> PAY NOW</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Verify;
