const prefix='http://192.168.0.25:8080',endPointUrl=()=>(
    {
        'requestQuote':prefix+'/quotes/createQuote',
        'quoteList':prefix+'/quotes/quoteList',
        'orderList':prefix+'/quotes/orderList',
        'details':prefix+'/quotes/$id',
        'approveQuote':prefix+'/quotes/$quoteId/placeOrder'
        

    }
)

export default endPointUrl();